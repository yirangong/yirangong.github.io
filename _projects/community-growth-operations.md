---
layout: project
title: Building a community-growth system without automating away trust
pillar: build
kind: Community growth · Product operations
summary: Combined community research, authentic participation, lightweight tooling, and measurement to grow an early creative-AI community from zero — without automating away the trust it ran on.
experience: nauknauk
group: nauknauk
card_title: Growth without automating away trust
card_detail: 0 → 500+ members · 200+ prospects tracked
card_image: /assets/projects/community-growth-operations/card-storywithtoys-snoo-hifi.webp
featured: true
importance: 3
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

**No API access meant every step stayed manual — and had to stay legible to a human.**

We had no access to Reddit's API, so finding relevant users, preserving the context of their posts, and running personalized cold outreach all had to happen manually. That constraint set the terms for everything that followed: the work had to stay personal and legible to a human, never automated into something the community would read as spam.

## 02 / The groundwork

**I studied the community across roughly 100 posts before building anything.**

Before building anything, I did the research the growth depended on. I reviewed roughly 100 posts, ran toy-community and market research, studied individual user profiles, and established an organic operating cadence grounded in anti-spam principles — so growth would never come at the cost of the community's trust.

## 03 / What I built

**One paste captures a prospect, and the source post stays one click away.**

To make outreach scalable without making it robotic, I mapped the full workflow and used Codex to rapidly build and iterate a lightweight tracker. One copy-and-paste captured a user's handle, post, subreddit, and source link; pending prospects surfaced at the top; the source post stayed one click away for review; and CSV import/export let teammates prep prospect lists in Excel, import them, and share a single outreach database.

<div style="margin:1.75rem 0;">
  <iframe src="{{ '/assets/html/nauknauk-outreach-tracker.html' | relative_url }}" title="NaukNauk outreach tracker — live demo" loading="lazy" style="width:100%;height:700px;border:1px solid rgba(0,0,0,0.12);border-radius:12px;background:#fff;"></iframe>
</div>

Live demo — paste a Reddit post into the _add user_ tab and watch the fields auto-fill and a DM assemble. It runs entirely in the browser, no backend.

## 04 / The decision that mattered

**AI judgment, not AI maximalism.**

My first version used AI to generate a unique DM for every user. I tested it, and the cost was clear: tokens, latency, and thin post context that often made the "personalized" output no better than a strong template. So I replaced it with a deterministic, field-based template populated from structured user and post data — faster, cheaper, and more reliable.

{% details View what the template actually does %}

- Pulls structured fields — handle, subreddit, post caption, content type — into a fixed, human-written template.
- Keeps the wording locked; only the bracketed fields change per prospect.
- Leaves the operator one click from the original post, so a human applies judgment before anything is sent.

{% enddetails %}

## 05 / Results

**Zero to 500+ members in four months, growing organically.**

The system removed at least five clicks per outreach, supported tracking for more than 200 prospects, and — alongside the organic cadence — grew the community from zero to about 160 members in its first 30 days (Mar–Apr 2026), reaching 500+ and still growing organically by July 2026. The tracker kept being used by the team after I handed it off, rather than staying a one-off prototype.

{% include figure.liquid path="assets/img/3-reddit-member.png" alt="Reddit community insights dashboard showing 543 members, up 132 from the previous 30 days, alongside 1.4k views, 42 published posts and a daily traffic chart." caption="Community insights, July 2026 — 543 members (135 joined, 3 left in the previous 30 days), 1.4k views and 42 published posts, still compounding two months after handoff." sizes="(min-width: 900px) 52rem, 95vw" zoomable=true %}

## Reflection

**What I learned**

- A growth system earns adoption only when it respects the social norms of the space it operates in.
- The strongest product judgment here was subtraction — removing AI from the one step where it looked impressive but created no real value.
- A deterministic tool a teammate can trust beats a clever one they have to babysit.
