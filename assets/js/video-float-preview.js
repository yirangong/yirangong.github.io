(function () {
  function initVideoPreviews() {
    var root = document.querySelector(".case-study.cs");
    var videos = Array.prototype.slice.call(document.querySelectorAll(".cs-media-hoverplay"));
    if (!root || !videos.length) return;

    var canHover = !!window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var floatingEnabled = root.getAttribute("data-floating-video-preview") === "true";
    var reduceMotion = !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var openDelay = 200;
    var closeDelay = 90;
    var transitionDuration = reduceMotion ? 0 : 220;
    var openTimer = null;
    var closeTimer = null;
    var cleanupTimer = null;
    var activeVideo = null;
    var activeCard = null;
    var pinned = false;
    var layer = null;
    var panel = null;
    var preview = null;
    var closeButton = null;
    var animationFrame = null;
    var cleanupToken = 0;

    function safePlay(video) {
      var promise = video.play();
      if (promise && promise.catch) promise.catch(function () {});
    }

    function stopVideo(video, reset) {
      video.pause();
      if (reset) {
        try {
          video.currentTime = 0;
        } catch (error) {
          // The video's metadata may not be available yet.
        }
      }
    }

    function ensureLayer() {
      if (layer) return;

      layer = document.createElement("div");
      layer.className = "cs-video-float-layer";
      layer.setAttribute("aria-hidden", "true");

      panel = document.createElement("div");
      panel.className = "cs-video-float-panel";
      panel.setAttribute("role", "dialog");
      panel.setAttribute("aria-modal", "false");
      panel.setAttribute("aria-label", "Expanded video preview");

      preview = document.createElement("video");
      preview.className = "cs-video-float-panel__video";
      preview.muted = true;
      preview.defaultMuted = true;
      preview.loop = true;
      preview.playsInline = true;
      preview.setAttribute("muted", "");
      preview.setAttribute("playsinline", "");
      preview.setAttribute("tabindex", "-1");

      closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "cs-video-float-panel__close";
      closeButton.setAttribute("aria-label", "Close expanded video");
      closeButton.setAttribute("tabindex", "-1");
      closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';
      closeButton.addEventListener("click", function () {
        closePreview(false, true);
      });

      preview.addEventListener("play", function () {
        if (activeCard) activeCard.classList.add("is-playing");
      });

      panel.appendChild(preview);
      panel.appendChild(closeButton);
      layer.appendChild(panel);
      document.body.appendChild(layer);
    }

    function sourceUrl(video) {
      var source = video.querySelector("source");
      return video.currentSrc || (source && source.src) || video.src;
    }

    function videoRatio(video, rect) {
      if (video.videoWidth && video.videoHeight) return video.videoWidth / video.videoHeight;
      if (rect.width && rect.height) return rect.width / rect.height;
      return 16 / 9;
    }

    function positionPanel(video) {
      if (!panel) return;

      var rect = video.getBoundingClientRect();
      var viewportWidth = document.documentElement.clientWidth;
      var viewportHeight = document.documentElement.clientHeight;
      var margin = 16;
      var gap = 18;
      var ratio = videoRatio(video, rect);
      var maxWidth = Math.min(520, viewportWidth * 0.42);
      var targetWidth = Math.min(maxWidth, Math.max(rect.width * 1.55, 340));
      var targetHeight = targetWidth / ratio;
      var maxHeight = viewportHeight * 0.72;

      if (targetHeight > maxHeight) {
        targetHeight = maxHeight;
        targetWidth = targetHeight * ratio;
      }

      var left = rect.right + gap;
      if (left + targetWidth > viewportWidth - margin) left = rect.left - gap - targetWidth;
      if (left < margin) left = (viewportWidth - targetWidth) / 2;

      var top = rect.top + (rect.height - targetHeight) / 2;
      top = Math.max(margin, Math.min(top, viewportHeight - targetHeight - margin));

      panel.style.left = left + "px";
      panel.style.top = top + "px";
      panel.style.width = targetWidth + "px";
      panel.style.height = targetHeight + "px";
      panel.style.setProperty("--float-shift-x", rect.left - left + "px");
      panel.style.setProperty("--float-shift-y", rect.top - top + "px");
      panel.style.setProperty("--float-scale-x", Math.max(0.05, rect.width / targetWidth));
      panel.style.setProperty("--float-scale-y", Math.max(0.05, rect.height / targetHeight));
    }

    function setPinned(shouldPin, focusCloseButton) {
      pinned = shouldPin;
      if (!panel || !layer || !preview || !closeButton) return;

      layer.classList.toggle("is-pinned", pinned);
      panel.classList.toggle("is-pinned", pinned);
      preview.controls = pinned;
      preview.setAttribute("tabindex", pinned ? "0" : "-1");
      closeButton.setAttribute("tabindex", pinned ? "0" : "-1");

      if (pinned && focusCloseButton) {
        window.setTimeout(function () {
          closeButton.focus();
        }, transitionDuration);
      }
    }

    function startPreviewAt(time) {
      function begin() {
        try {
          preview.currentTime = isFinite(time) ? time : 0;
        } catch (error) {
          // Some browsers only allow seeking after more data has loaded.
        }
        safePlay(preview);
      }

      if (preview.readyState >= 1) begin();
      else preview.addEventListener("loadedmetadata", begin, { once: true });
    }

    function cleanPreview(expectedToken) {
      if (expectedToken !== cleanupToken) return;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = null;

      if (preview) {
        stopVideo(preview, true);
        preview.removeAttribute("src");
        preview.removeAttribute("poster");
        preview.load();
      }
      if (activeVideo) stopVideo(activeVideo, true);
      if (activeCard) activeCard.classList.remove("is-playing");
      if (layer) layer.setAttribute("aria-hidden", "true");

      activeVideo = null;
      activeCard = null;
      pinned = false;
    }

    function closePreview(immediate, restoreFocus) {
      window.clearTimeout(openTimer);
      window.clearTimeout(closeTimer);
      window.clearTimeout(cleanupTimer);
      cleanupToken += 1;
      var token = cleanupToken;
      var trigger = activeVideo;

      if (!layer || !panel || !activeVideo) return;
      setPinned(false, false);
      panel.classList.remove("is-visible");
      layer.classList.remove("is-visible");

      if (immediate || transitionDuration === 0) cleanPreview(token);
      else
        cleanupTimer = window.setTimeout(function () {
          cleanPreview(token);
        }, transitionDuration);

      if (restoreFocus && trigger) trigger.focus();
    }

    function openPreview(video, card, shouldPin, focusCloseButton) {
      window.clearTimeout(openTimer);
      window.clearTimeout(closeTimer);
      window.clearTimeout(cleanupTimer);
      ensureLayer();

      if (activeVideo === video && panel.classList.contains("is-visible")) {
        if (shouldPin) setPinned(true, focusCloseButton);
        return;
      }

      if (activeVideo && activeVideo !== video) {
        closePreview(true, false);
      }

      cleanupToken += 1;
      activeVideo = video;
      activeCard = card;
      pinned = false;

      var time = video.currentTime || 0;
      var url = sourceUrl(video);
      stopVideo(video, false);

      preview.src = url;
      preview.poster = video.poster || "";
      panel.setAttribute("aria-label", video.getAttribute("aria-label") || "Expanded video preview");
      positionPanel(video);

      layer.setAttribute("aria-hidden", "false");
      layer.classList.add("is-visible");
      panel.classList.remove("is-visible");
      panel.offsetWidth;
      animationFrame = window.requestAnimationFrame(function () {
        panel.classList.add("is-visible");
      });

      card.classList.add("is-playing");
      startPreviewAt(time);
      setPinned(shouldPin, focusCloseButton);
    }

    videos.forEach(function (video) {
      var card = video.closest(".cs-media-item, .cs-impact-item") || video;

      function playInline() {
        safePlay(video);
      }

      function stopInline() {
        stopVideo(video, true);
        card.classList.remove("is-playing");
      }

      video.addEventListener("play", function () {
        card.classList.add("is-playing");
      });
      ["pause", "ended"].forEach(function (eventName) {
        video.addEventListener(eventName, function () {
          if (activeVideo !== video) card.classList.remove("is-playing");
        });
      });

      video.setAttribute("tabindex", "0");

      if (!canHover) {
        video.setAttribute("controls", "");
        return;
      }

      video.addEventListener("click", function (event) {
        if (floatingEnabled) {
          event.preventDefault();
          openPreview(video, card, true, false);
        } else {
          video.paused ? playInline() : stopInline();
        }
      });

      video.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        if (floatingEnabled) openPreview(video, card, true, true);
        else video.paused ? playInline() : stopInline();
      });

      card.addEventListener("mouseenter", function () {
        window.clearTimeout(closeTimer);
        playInline();
        if (!floatingEnabled) return;
        window.clearTimeout(openTimer);
        openTimer = window.setTimeout(function () {
          openPreview(video, card, false, false);
        }, openDelay);
      });

      card.addEventListener("mouseleave", function () {
        window.clearTimeout(openTimer);
        if (document.fullscreenElement || document.webkitFullscreenElement || pinned) return;

        closeTimer = window.setTimeout(function () {
          if (activeVideo === video) closePreview(false, false);
          else stopInline();
        }, closeDelay);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && activeVideo) closePreview(false, true);
    });

    window.addEventListener(
      "scroll",
      function () {
        if (activeVideo && !pinned) closePreview(false, false);
      },
      { passive: true }
    );

    window.addEventListener("resize", function () {
      if (activeVideo && panel && panel.classList.contains("is-visible")) positionPanel(activeVideo);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initVideoPreviews);
  else initVideoPreviews();
})();
