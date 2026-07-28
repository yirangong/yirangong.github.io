# CLAUDE.md

Guidance for Claude when working in this repo.

## What this is

Personal portfolio for **Yiran Gong** at https://yirangong.github.io — a
customized fork of the [al-folio](https://github.com/alshedivat/al-folio)
Jekyll theme, deployed via GitHub Pages from `main`.

The site is **not** a stock al-folio install. It has a custom personal
framework layered on top. Respect that framework over al-folio defaults.

## Audience & positioning

Aimed at **product / PM / applied-AI roles**. Yiran builds applied AI systems
and has a cognitive-science background (NYU, Weiji Ma Lab). Tone: thoughtful,
substantive, human-centered — not buzzword-heavy. Lead with judgment and
outcomes, not just tech stack.

Tagline: _Build · Understand · Observe_.

## The pillar framework (most important thing to know)

Content is organized into three pillars, set via a `pillar:` field in front
matter and surfaced through custom pages and layouts:

- **Build** (`/build/`) — products, workflows, agents, experiments. Where
  technical implementation meets product judgment.
- **Understand** (`/understand/`) — research and computational modeling of how
  people think, decide, and collaborate.
- **Observe** — signals/notes that feed the other two. Surfaced through
  **Field Notes** (`/field-notes/`) rather than its own top-level page.

Nav order (see `nav_order` in `_pages/`): Build (1), Understand (2),
Field Notes (3), CV (5). Keep nav coherent if adding pages.

## Repo map (custom vs. theme)

Custom / personal (edit freely, this is the real content):

- `_pages/build.md`, `understand.md`, `field-notes.md` — use `layout: pillar`.
- `_layouts/pillar.liquid`, `_layouts/project.liquid`,
  `_layouts/field-note.liquid` — custom layouts. `project.liquid` renders the
  case-study page (hero, skills/stack, meta) from front matter.
- `_projects/` — real case studies use `layout: project` with the pillar
  schema below.
- `_field_notes/`, `_books/` — custom collections (defined in `_config.yml`).
- `_includes/project-card.liquid`, `field-note-card.liquid` — custom cards.
- `_config.yml` — site identity already set (title, description, keywords).

Leftover al-folio demo content (safe to delete/replace, do NOT treat as real):

- `_projects/1_project.md` … `9_project.md` — placeholder demos.
- `_pages/about_einstein.md`, `food.md`, `dropdown.md`, `profiles.md` — demo pages.
- Most `_posts/*` are theme feature demos (images, math, chartjs, etc.), not
  Yiran's writing. Don't cite them as real content.

## Project (case study) front matter schema

Real projects use `layout: project` and this shape (see
`_projects/applied-ai-product-operations.md` and `nyu-human-collaboration.md`):

```yaml
---
layout: project
title: Descriptive outcome-focused title
pillar: build # build | understand | observe
kind: Generative AI · Product operations # short "type" line
summary: One-sentence description shown as the lede.
experience: nauknauk # preferred: pull company/role/dates from _data/experience.yml
team: "Weiji Ma Lab, NYU"
skills:
  - Prompt design
  - Model evaluation
featured: true
importance: 1 # lower = higher priority
status: draft # omit or set to published when ready
---
```

Conventions:

- **Bracketed values** like `"[Company]"` or `"[Term to add]"` are
  intentional placeholders. Don't invent real values — flag them to Yiran and
  ask, or leave bracketed.
- `status: draft` renders a visible "Draft" badge. Only remove when content is
  confirmed and Yiran approves publishing.
- `importance` controls ordering; `pillar` controls where it surfaces.

## Shared experience (single source of truth for company/role)

Multiple case studies come from the same job (e.g. the NaukNauk internship
covers all the Build-pillar work). To avoid retyping company details on every
project, that info lives once in **`_data/experience.yml`**, keyed by a short
slug:

```yaml
nauknauk:
  company: NaukNauk
  role: Applied AI — Product & Operations Intern
  reporting: Reporting directly to the founders.
  timeframe: Mar–Jul 2026
  url: # company link to add
  blurb: > # what the company/platform does
  scope: > # the shape of the role
```

A project opts in with `experience: nauknauk` **instead of** inline
`company` / `role` / `timeframe`. `_layouts/project.liquid` resolves the key
and renders a compact expandable chip in the hero (company · role · dates,
with the blurb/scope revealed on click). Projects with no `experience:` key
fall back to the old inline Role/Company/When block — that path is still used
by the NYU **Understand** cases, so don't remove it.

Edit the blurb once in `_data/experience.yml` and every linked case updates.
Add a new key here when a genuinely different employer/affiliation appears;
keep using `team:` on the project for lab/collaborator credit.

## Working rules

- **Confirm before inventing facts.** Companies, dates, collaborators, metrics,
  and outcomes must come from Yiran. Never fabricate resume/CV details. Where
  info is missing, use a bracketed placeholder and ask.
- **Match the framework, not stock al-folio.** When adding content, mirror the
  pillar schema and custom layouts above rather than default theme patterns.
- **Prose over buzzwords.** For a PM/AI audience, explain the problem, the
  decision, and the result. Avoid filler adjectives.
- Editing `_config.yml` restructures the whole site — change carefully and
  explain what each change affects.

## Build & preview

Local Ruby/Jekyll (matches GitHub Pages):

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
bundle exec jekyll build   # production build to _site/
```

Docker is also available (`docker-compose up`) if Ruby isn't set up locally.
Formatting: prettier + `@shopify/prettier-plugin-liquid` (see `.prettierrc`);
pre-commit hooks are configured in `.pre-commit-config.yaml`.

## Deploy

Push to `main` → GitHub Pages builds and deploys automatically. Before
pushing content changes, confirm the site builds cleanly and that no bracketed
placeholders are shipping as if they were real.
