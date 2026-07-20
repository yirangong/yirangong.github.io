---
layout: default
title: Field Notes
nav_label: Field Notes
nav: true
nav_order: 3
nav_index: "03"
permalink: /field-notes/
description: Observations of people, places, and systems.
---

<main class="field-notes-index">
  <header class="field-notes-index__hero">
    <div>
      <p class="route-label">OBS—01 / FIELD NOTES</p>
      <h1>Observe</h1>
    </div>
    <div>
      <p>Paying close attention to people, places, and systems before deciding what to make or study.</p>
      <p class="field-notes-index__supporting">These notes will connect reading, photography, travel, architecture, community, and cultural systems back to questions that shape Build and Understand.</p>
    </div>
  </header>

{% assign field_notes = site.field_notes | sort: 'importance' %}
{% if field_notes.size > 0 %}

<div class="field-note-grid field-note-grid--index">
{% for note in field_notes %}
{% include field-note-card.liquid note=note %}
{% endfor %}
</div>
{% else %}
<p class="framework-message">Field notes remain unpublished until each entry has an observation, evidence, and connection to the wider portfolio.</p>
{% endif %}

</main>
