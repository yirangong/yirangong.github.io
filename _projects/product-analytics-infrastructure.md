---
layout: project
title: Rebuilding AI video metrics around user outcomes
pillar: build
kind: Product analytics · AI reliability
summary: >-
  I found that endpoint error counts were misclassifying fallback-rescued generations as failures. I redefined success at the generation level and built four role-specific views across 40+ templates, now used daily by Content Ops and weekly by product leadership.
experience: nauknauk
group: nauknauk
card_title: Health and performance dashboard for AI template reliability
card_detail: 40+ templates · daily ops monitoring · weekly product reviews
card_image: /assets/projects/product-analytics-infrastructure/card-outcome-migration.svg
featured: true
importance: 2
published: true
status: published
paper_design: analytics-real-artifacts-v1
skills:
  - Product analytics
  - Metric definition & governance
  - Data modeling
  - Dashboard & decision systems
  - Reliability monitoring
metrics:
  - value: "40+"
    label: templates monitored
  - value: "4"
    label: decision-specific views
  - value: Daily
    label: launch monitoring
  - value: Weekly
    label: product health review
roadmap_label: How I rebuilt it
roadmap_headline: From misleading endpoint logs to a product decision system
problem: >-
  The failure rate used to promote, fix, or retire templates counted endpoint errors even when fallback delivered a successful video. Product decisions were being made on an inflated failure signal.
approach: >-
  Audited endpoint events against user outcomes, redefined failure at the generation level, and rebuilt the data layer independently of backend topology. Designed four views for daily operations and weekly product decisions.
impact: >-
  The outcome definitions remained valid through the migration to Step Functions, even though the underlying joins changed. Content Ops now uses the dashboard daily through launches, and the head of product reviews template health weekly.
---

PMs and Content Ops used one failure-rate metric to decide which AI templates to promote, fix, or retire. I audited the event logic before building the dashboard and found that it counted fallback-rescued generations as failures.

I redefined success around the user outcome—whether a video was delivered—rebuilt the data layer across 40+ templates, and designed four views for daily operations and weekly product review.

> **Route** Endpoint logs → generation-level semantics → outcome-based failure → role-specific surfaces

## The number was lying

Every template has a fallback engine. When the main engine fails and the fallback succeeds, the user gets their video and never knows anything went wrong — but the logs still record an error. Those rescued generations were being counted as failures. So a template whose fallback was quietly doing its job registered the same as one that was actually failing users, and the library got pruned on the difference.

> **Decision** Keep endpoint errors as engineering diagnostics, but remove them from the product failure definition. Product health would be measured at the generation level; service-level errors would remain available for root-cause analysis.

## Redefining failure around the user

I redefined failure around what the user ends up with — did they get their video? — rather than around whether a particular endpoint returned an error. A generation rescued by fallback is a success the user never had to think about, not a failure to explain away.

## Rebuilding the data layer

Then I rebuilt the data layer underneath, writing the definitions against generations, not endpoints. That choice is what made the system durable: when the backend later moved to Step Functions and every join broke, the definitions didn't. They were describing what happened to a generation, not which service happened to emit the event.

## Two audiences, two surfaces

Content Ops and PMs were reaching for the same dashboard to do different jobs, so I stopped making one surface serve both. I built a pulse view — reviewed weekly by the head of product to watch template health — a full working table used daily by Content Ops through launches, and separate drill-down and comparison views for investigating a specific template.

## Reflection

The dashboard was not the core product. The shared definition was. By separating user outcomes from service diagnostics, I gave PM and Content Ops a stable basis for decisions while preserving the lower-level signals engineering needed to investigate failures.
