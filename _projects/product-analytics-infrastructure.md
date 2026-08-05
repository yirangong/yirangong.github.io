---
layout: project
title: Counting outcomes, not endpoints
pillar: build
kind: Product analytics · Data infrastructure
summary: Built the first template-level measurement layer for an AI video feature, replacing endpoint error counts with outcome-based metrics across 40+ templates. Adopted for daily launch monitoring and weekly template-health reviews.
experience: nauknauk
featured: true
importance: 2
published: true
status: draft
paper_design: analytics-real-artifacts-v1
skills:
  - Metric design & semantics
  - Analytics infrastructure
  - Dashboard design
  - Data integrity
  - Migration-resilient semantics
metrics:
  - value: "0 broken"
    label: metric definitions when the backend migrated to Step Functions — they described generations, not endpoints
  - value: "4 views"
    label: replaced one overloaded dashboard — pulse, working table, drill-down, comparison
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
problem: The single number behind every promote / fix / retire decision on the template library was measuring an engineering event, not a product outcome — and no one reading it knew that.
approach: Redefine failure around what the user ends up with, rebuild the data layer at the generation level, and split one overloaded dashboard into surfaces matched to how each team actually works.
impact: The new definitions survived a full backend migration to Step Functions. Content Ops now monitors the analytics layer daily through launches; the head of product reviews template health weekly.
---

Templates are the content supply for an AI feature. PMs and Content Ops decide which to promote, fix, or retire based on failure rate — so that number has to mean what they think it means. Before I built anything on top of it, I checked whether it represented reality. It didn't.

> **Route** Endpoint logs → generation-level semantics → outcome-based failure → role-specific surfaces

## The number was lying

Every template has a fallback engine. When the main engine fails and the fallback succeeds, the user gets their video and never knows anything went wrong — but the logs still record an error. Those rescued generations were being counted as failures. So a template whose fallback was quietly doing its job registered the same as one that was actually failing users, and the library got pruned on the difference.

[ADD: before/after — the mislabeled failure spike next to the true outcome rate]

## Redefining failure around the user

I redefined failure around what the user ends up with — did they get their video? — rather than around whether a particular endpoint returned an error. A generation rescued by fallback is a success the user never had to think about, not a failure to explain away.

## Rebuilding the data layer

Then I rebuilt the data layer underneath, writing the definitions against generations, not endpoints. That choice is what made the system durable: when the backend later moved to Step Functions and every join broke, the definitions didn't. They were describing what happened to a generation, not which service happened to emit the event.

## Two audiences, two surfaces

Content Ops and PMs were reaching for the same dashboard to do different jobs, so I stopped making one surface serve both. I built a pulse view — reviewed weekly by the head of product to watch template health — a full working table used daily by Content Ops through launches, and separate drill-down and comparison views for investigating a specific template.

## Reflection

The habit underneath all of this: I don't just report the metric. I check whether the system generating it represents reality, and rebuild it when it doesn't — on foundations stable enough to survive the next migration.
