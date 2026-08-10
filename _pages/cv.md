---
layout: page
permalink: /cv/
title: CV
nav_label: CV
nav: false
nav_order: 5
nav_index: "05"
description: Education, applied AI work, research, and selected projects — as a PDF.
# Swap in the real résumé by replacing the file at this path (keep the filename
# and the page needs no other change).
cv_pdf: assets/pdf/resume.pdf
---

{% assign cv_url = page.cv_pdf | relative_url %}

<div class="cv-doc">
  <div class="cv-doc__meta">
    <p class="route-label">CV / DOCUMENT</p>
    <span class="cv-doc__actions">
      <a class="cv-doc__action" href="{{ cv_url }}" target="_blank" rel="noopener">Open in new tab</a>
      <a class="cv-doc__action" href="{{ cv_url }}" download>Download PDF</a>
    </span>
  </div>

  <object class="cv-doc__frame" data="{{ cv_url }}" type="application/pdf">
    <div class="cv-doc__fallback">
      <p>This browser cannot display PDFs inline.</p>
      <a class="cv-doc__action" href="{{ cv_url }}" download>Download the PDF</a>
    </div>
  </object>
</div>
