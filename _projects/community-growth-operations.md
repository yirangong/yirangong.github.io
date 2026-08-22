---
layout: project
title: Growing a Reddit community from 0 to 500+ without automating trust
pillar: build
kind: Growth product · Community operations
summary: >-
  I grounded growth in research across ~100 posts, used Codex to build a lightweight outreach tracker, and cut AI from message writing when testing showed it added cost but not value. The system supported 200+ prospects and grew r/StoryWithToys from 0 to 500+ members organically in four months.
experience: nauknauk
group: nauknauk
card_title: Built a human-in-the-loop growth system for Reddit
card_detail: 500+ members in 4 months · 200+ prospects tracked
card_image: /assets/projects/community-growth-operations/card-storywithtoys-snoo-hifi.webp
featured: true
importance: 3
published: true
status: published
skills:
  - Zero-to-one growth
  - Community research
  - Internal tool prototyping
  - Human-in-the-loop workflow design
  - Experimentation & prioritization
metrics:
  - value: "0 → 160"
    label: members in 30 days
  - value: "0 → 500+"
    label: members in 4 months
  - value: "200+"
    label: prospects tracked
  - value: "5+"
    label: clicks removed per outreach
roadmap_label: How I built it
roadmap_headline: Scaled the workflow while keeping outreach human
problem: >-
  With no Reddit API, prospecting and outreach were manual. I needed to scale discovery and team coordination without turning personalized community outreach into spam.
approach: >-
  Reviewed ~100 posts and user profiles to define community norms, then used Codex to build a browser-based tracker. Tested AI-generated DMs, replaced them with a deterministic template, and preserved human review and one-click source context.
impact: >-
  Reached ~160 members in the first 30 days and 500+ in four months. The tracker supported 200+ prospects, removed at least five clicks per outreach, and remained in use after handoff.
---

The core product decision was what not to automate. I automated prospect capture and team coordination, but kept message judgment human. After testing AI-generated DMs, I replaced them with a deterministic template because it was faster, cheaper, and more trustworthy.

That system supported 200+ prospects and helped grow r/StoryWithToys from 0 to 500+ members organically in four months. The team continued using the tracker after handoff.

> **Route** Reddit signal -> community research -> lightweight tracker -> deterministic DM -> shared team workflow -> organic growth

## 01 / The constraint

**No API access meant every step stayed manual — and had to stay legible to a human.**

With no Reddit API, prospect discovery and outreach stayed manual. I treated that as a product constraint: the system could accelerate context capture and coordination, but a human would still review the source post and decide whether and how to contact someone.

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

**I removed AI from message writing after it failed the quality–cost tradeoff.**

My first version used AI to generate a unique DM for every user. I compared it with a deterministic template on output quality, latency, and cost. Thin post context limited personalization, while generation added tokens and delay, so I removed AI from message writing. Structured fields handled personalization, and a human reviewed the source post before sending.

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
