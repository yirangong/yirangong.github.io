---
layout: project
title: Building a community-growth system without automating away trust
pillar: build
kind: Community growth · Product operations
summary: Combined community research, authentic participation, lightweight tooling, and measurement to grow an early creative-AI community from zero — without automating away the trust it ran on.
experience: nauknauk
featured: true
importance: 3
status: draft
published: true
skills:
  - "0-1"
  - "Internal tools"
  - "Rapid prototyping"
  - "Human-in-the-loop AI design"
  - "Community research & growth strategy"
metrics:
  - value: "0 → 500+"
    label: "members, growing organically"
  - value: "200+"
    label: "prospects tracked in a self-built tool"
  - value: "≥5"
    label: "clicks removed per outreach"
  - value: "~100"
    label: "posts researched to set the cadence"
roadmap_label: How I built it
problem: I owned the zero-to-one growth of a Reddit community, but with no Reddit API access, finding relevant users, preserving each post's context, and running personalized cold outreach all had to happen by hand — without tipping into spam.
approach: I grounded growth in community research and an anti-spam cadence, used Codex to rapidly build a lightweight outreach tracker, and deliberately cut AI from the one step where it added cost but not value.
impact: Removed at least five clicks per outreach, tracked 200+ prospects, and grew the community from zero to 500+ members organically. The team kept using the tracker after I handed it off.
---

Growing a community is a human problem before it is a tooling problem. I owned the zero-to-one growth of r/StoryWithToys, the community around NaukNauk, and the goal was never just a bigger member count — it was members who trusted the space enough to post in it. Every system I built had to serve that, not undermine it.

> **Route** Reddit signal -> community research -> lightweight tracker -> deterministic DM -> shared team workflow -> organic growth

## 01 / The constraint

We had no access to Reddit's API, so finding relevant users, preserving the context of their posts, and running personalized cold outreach all had to happen manually. That constraint set the terms for everything that followed: the work had to stay personal and legible to a human, never automated into something the community would read as spam.

## 02 / The groundwork

Before building anything, I did the research the growth depended on. I reviewed roughly 100 posts, ran toy-community and market research, studied individual user profiles, and established an organic operating cadence grounded in anti-spam principles — so growth would never come at the cost of the community's trust.

[ADD: Screenshot — post research and user-profile mapping notes]

## 03 / What I built

To make outreach scalable without making it robotic, I mapped the full workflow and used Codex to rapidly build and iterate a lightweight tracker. One copy-and-paste captured a user's handle, post, subreddit, and source link; pending prospects surfaced at the top; the source post stayed one click away for review; and CSV import/export let teammates prep prospect lists in Excel, import them, and share a single outreach database.

<div style="margin:1.75rem 0;">
  <iframe src="{{ '/assets/html/nauknauk-outreach-tracker.html' | relative_url }}" title="NaukNauk outreach tracker — live demo" loading="lazy" style="width:100%;height:700px;border:1px solid rgba(0,0,0,0.12);border-radius:12px;background:#fff;"></iframe>
</div>

Live demo — paste a Reddit post into the *add user* tab and watch the fields auto-fill and a DM assemble. It runs entirely in the browser, no backend.

## 04 / The decision that mattered

My first version used AI to generate a unique DM for every user. I tested it, and the cost was clear: tokens, latency, and thin post context that often made the "personalized" output no better than a strong template. So I replaced it with a deterministic, field-based template populated from structured user and post data — faster, cheaper, and more reliable.

**AI judgment, not AI maximalism.**

{% details View what the template actually does %}

- Pulls structured fields — handle, subreddit, post caption, content type — into a fixed, human-written template.
- Keeps the wording locked; only the bracketed fields change per prospect.
- Leaves the operator one click from the original post, so a human applies judgment before anything is sent.

{% enddetails %}

## 05 / Results

The system removed at least five clicks per outreach, supported tracking for more than 200 prospects, and — alongside the organic cadence — grew the community from zero to about 160 members in its first 30 days (Mar–Apr 2026), reaching 500+ and still growing organically by July 2026. The tracker kept being used by the team after I handed it off, rather than staying a one-off prototype.

## Reflection

**What I learned**

- A growth system earns adoption only when it respects the social norms of the space it operates in.
- The strongest product judgment here was subtraction — removing AI from the one step where it looked impressive but created no real value.
- A deterministic tool a teammate can trust beats a clever one they have to babysit.
