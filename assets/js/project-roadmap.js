(() => {
  const roadmap = document.querySelector("[data-case-roadmap]");
  if (!roadmap) return;

  const links = [...roadmap.querySelectorAll("[data-route-link]")];
  const sections = [...roadmap.querySelectorAll("[data-route-section]")];
  const progress = roadmap.querySelector(".case-roadmap__progress");
  const details = [...roadmap.querySelectorAll("[data-detail]")];

  const setActive = (id) => {
    const activeIndex = links.findIndex((link) => link.getAttribute("href") === `#${id}`);
    links.forEach((link, index) => {
      const isActive = index === activeIndex;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "step");
      else link.removeAttribute("aria-current");
    });

    if (progress && activeIndex >= 0) {
      const ratio = links.length > 1 ? activeIndex / (links.length - 1) : 0;
      progress.style.setProperty("--route-progress", `${ratio * 100}%`);
    }
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.1, 0.25] }
    );
    sections.forEach((section) => observer.observe(section));
  }

  roadmap.querySelectorAll("[data-details-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const shouldOpen = button.dataset.detailsAction === "expand";
      details.forEach((detail) => {
        detail.open = shouldOpen;
      });
      if (shouldOpen && details[0]) details[0].querySelector("summary")?.focus();
    });
  });

  details.forEach((detail) => {
    const action = detail.querySelector(".detail-drawer__action");
    const closedLabel = action?.textContent || "Show details";
    detail.addEventListener("toggle", () => {
      if (action) action.textContent = detail.open ? "Hide details" : closedLabel;
    });
  });
})();
