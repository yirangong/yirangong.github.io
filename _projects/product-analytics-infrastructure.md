---
layout: project
title: "From root-cause to dashboard: fixed broken AI-template analytics"
pillar: build
kind: Product analytics · Data infrastructure
summary: Rebuilt a failure-measurement system that was confusing business outcome with AI model performance.
experience: nauknauk
group: nauknauk
card_title: From root-cause to dashboard
card_badge: 0 broken
card_detail: Outcome-based failure metrics · survived migration
featured: true
importance: 2
published: true
skills:
  - Metric design & semantics
  - Analytics infrastructure
  - Stakeholder-driven dashboard design
  - Data integrity
metrics:
  - value: "Redefined"
    label: what counts as a "failure" for AI templates around the user's outcome, and redesigned the analytics teams use to promote, fix, and retire them
  - value: "0 broken"
    label: metric definitions when the backend migrated to Step Functions
media_label: Before and after
media:
  - type: image
    src:
    caption: "Before — feature-type aggregated view; no way to drill into a specific template"
  - type: image
    src:
    caption: "Before — endpoint-based analysis, messy and hard to read as product signal"
  - type: image
    src:
    featured: true
    caption: "After — pulse view: template health at a glance for weekly product review"
  - type: image
    src:
    caption: "After — full working table for Content Ops daily monitoring"
  - type: image
    src:
    caption: "After — drill-down view for investigating a single template"
  - type: image
    src:
    caption: "After — comparison view for weighing templates against each other"
roadmap_label: How I rebuilt it
problem: A template's "failure rate" was measuring an engineering event but being read as a product one. Fallback-rescued generations — where the user got their video and never knew anything went wrong — were counted as failures, so healthy templates looked broken.
approach: I redefined failure around what the user ends up with, rebuilt the data layer to describe generations rather than endpoints, and split one overloaded dashboard into surfaces matched to how each team actually works.
impact: The new definitions survived a full backend migration to Step Functions, and the analytics layer is now monitored daily by Content Ops through launches and weekly by the head of product to watch template health.
---

Templates are the content supply for an AI feature. PMs and Content Ops decide which to promote, fix, or retire based on failure rate — so that number has to mean what they think it means. It didn't.

> **Route** Endpoint logs → generation-level semantics → outcome-based failure → role-specific surfaces

## The stakes

Every promote / fix / retire decision on the template library was being made against a single number. Before I could trust any dashboard built on top of it, I had to check whether the number represented reality.

## The number was lying

That number was measuring an engineering event and being read as a product one. Every template has a fallback engine; when the main engine fails and the fallback succeeds, the user gets their video and never knows anything went wrong. Those generations were counted as failures. Templates looked broken when they weren't.

[ADD: before/after — the mislabeled failure spike next to the true outcome rate]

## Redefining failure around the user

I redefined failure around what the user ends up with — did they get their video? — rather than around whether a particular endpoint returned an error. A generation rescued by fallback is a success the user never had to think about, not a failure to explain away.

## Rebuilding the data layer

Then I rebuilt the data layer underneath, writing the definitions against generations, not endpoints. That choice is what made the system durable: when the backend later moved to Step Functions and every join broke, the definitions didn't. They were describing what happened to a generation, not which service happened to emit the event.

## Two audiences, two surfaces

Content Ops and PMs were reaching for the same dashboard to do different jobs, so I stopped making one surface serve both. I built a pulse view — reviewed weekly by the head of product to watch template health — a full working table used daily by Content Ops through launches, and separate drill-down and comparison views for investigating a specific template.

## Reflection

The habit underneath all of this: I don't just report the metric. I check whether the system generating it represents reality, and rebuild it when it doesn't — on foundations stable enough to survive the next migration.
