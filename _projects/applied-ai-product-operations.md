---
layout: project
title: Shipping generative video from model experiment to reliable product
pillar: build
kind: AI product · Generative video
summary: >-
  I turned toy-character motion ideas into 5+ production workflows by sequencing image-prep and video models, defining anatomy-aware evaluations, and adding fallback and monitoring. The workflows reached 10K+ users per day with ~60% generation-to-publish conversion.
experience: nauknauk
group: nauknauk
card_title: Shipped AI video workflows from concept to production for 1M+ users
card_detail: "multi-modal generative models & user-specific evals"
card_image: /assets/projects/applied-ai-product-operations/card-kaiju-transformation.webp
featured: true
importance: 1
published: true
status: published
floating_video_preview: true
skills:
  - Product strategy
  - Model evaluation & selection
  - Prompt engineering
  - Latency, cost, quality tradeoff
  - Reliability & fallback design
metrics:
  - value: "5+"
    label: production workflows shipped
  - value: "10K+"
    label: users reached per day
  - value: "~60%"
    label: generation-to-publish conversion
  - value: "+14 pp"
    label: Knee Slide vs average
media_label: Campaign
media:
  - type: video
    src: /assets/projects/applied-ai-product-operations/fifa-jersey-change.mp4
    poster: /assets/projects/applied-ai-product-operations/fifa-jersey-change-poster.jpg
    ratio: 656 / 1002
    title: "FIFA World Cups"
    caption: "Reusable jersey-personalization infrastructure"
  - type: video
    src: /assets/projects/applied-ai-product-operations/may-the-fourth.mp4
    poster: /assets/projects/applied-ai-product-operations/may-the-fourth-poster.jpg
    ratio: 624 / 1110
    title: "May the 4th"
roadmap_label: How I built it
roadmap_headline: From demand signal to monitored production workflow
problem: >-
  Toy images vary in quality and anatomy, while video models introduce fidelity, motion, moderation, and reliability failures. I needed to turn a promising demo into a repeatable production workflow.
approach: >-
  Prioritized ideas from community and cultural signals, then sequenced image-prep and video models around controllable inputs. Defined anatomy-specific fidelity gates and shipped with cross-family fallbacks, monitoring, and a release checklist.
impact: >-
  Shipped 5+ reusable workflows across motion, storytelling, and campaigns. One motion-control workflow reached ~70% publish conversion versus a 56% average, and the product served 10K+ users per day.
impact_examples_label: Motion control
impact_examples:
  - title: Knee Slide
    note: "~70% publish conversion vs 56% average"
    src: /assets/projects/applied-ai-product-operations/knee-slide.mp4
    poster: /assets/projects/applied-ai-product-operations/knee-slide-poster.jpg
    ratio: 1072 / 1920
  - title: Hadouken
    src: /assets/projects/applied-ai-product-operations/hadouken.mp4
    poster: /assets/projects/applied-ai-product-operations/hadouken-poster.jpg
    ratio: 1626 / 1080
---

Toy-character video looked like a model problem. In production, it was a product-system problem: messy uploads, unfamiliar anatomy, motion fidelity, moderation limits, latency, and fallback behavior.

I owned the workflow from idea selection through model orchestration, evaluation, deployment, and monitoring. The result was 5+ reusable workflows reaching 10K+ users per day at ~60% generation-to-publish conversion.

> **Route** Demand signal -> Product hypothesis -> Input architecture -> Model sequence -> Evaluation -> Release -> Monitoring

## 01 / Research

Research here did not mean a survey. It meant deciding what was worth building at all — a clip climbing a subreddit, a scene people quote from a movie, a joke only insiders get, sometimes a hallucinated video that came straight out of prompting.

I used community traction and cultural relevance to prioritize ideas before spending time on model testing.

{% include research-funnel.liquid %}

#### "Kaiju Fight" — reference → shipped

{% include research-pairs.liquid %}

## 02 / Prototype

#### Building the model system

The first question was not simply, "Which video model is best?"\
It was, "What sequence of models gives the video model a solvable input?"

#### Generative media platforms

{% include platforms.liquid %}

{% include prototype-flow.liquid %}

{% details Model and fallback decisions | Grok, Flux Klein, and when to switch model family instead of model tier | 4 decisions %}

- Grok image edit was versatile, fast, and generally reliable, but could reject some protected-character inputs.
- Flux 9B Klein provided a safer alternate image-preparation route.
- A standard-to-pro fallback helped when the issue was performance.
- A different model family (for example, Kling instead of Seedance) was more useful when the failure came from moderation or IP restrictions.

{% enddetails %}

## 03 / Implement & iterate

#### Diagnosing the real failure

> Observe the failure -> Identify the constraint -> Change input, prompt, route, or infrastructure -> Test again

The long-leg and takeoff cases initially looked like general hallucinations. Looking across repeated failures revealed a consistent spatial problem: head-position mapping. The problem was the model's anchor, not the visual style.

{% include anchor-fix.liquid %}

{% details The reference-model head-anchoring fix | The prompt that moved the character anchor from the head to the ground | Prompt %}

I moved the character anchor to the ground, specified the intended scale, and placed those constraints inside the prompt section responsible for character positioning.

> Anchor the character to the ground using its feet, bottom edge, or lowest point. Scale it proportionally from the ground up. Do not align its head with the reference fighter's head. Element 1 and Element 2 are small toy-sized characters; their total height should be approximately 40–60% of the reference video fighters' height. Scale down proportionally and keep them grounded.

Changing the spatial anchor fixed the underlying constraint; more surface-level prompt tuning would only have masked it.

{% enddetails %}

#### The complete evaluation framework

Fidelity gates for humanoid, semi-humanoid, and limbless toy anatomies.

{% include evaluation-matrix.liquid %}

## 04 / Deploy

{% details The release checklist | From hosted reference assets to production configuration | 8 steps %}

{% include release-checklist.liquid %}

{% enddetails %}

#### Connecting model quality to product behaviour

I used the product dashboard to connect model testing with workflow behaviour — generation success, fallback behaviour, and whether users moved from generating to publishing. A model could look strong in selected demonstrations and still expose a different pattern at real usage levels.

<figure>
  <a
    href="{{ '/projects/product-analytics-infrastructure/' | relative_url }}"
    aria-label="Read the product analytics case study behind the production health dashboard"
  >
    <img
      src="{{ '/assets/projects/product-analytics-infrastructure/dashboard-redacted-public.png' | relative_url }}"
      alt="Redacted production health dashboard with volume, failure, success, conversion, recovery, user, and alert metrics"
      loading="lazy"
    >
  </a>
  <figcaption>
    Production health view, redacted for confidentiality.
    <a href="{{ '/projects/product-analytics-infrastructure/' | relative_url }}"
      >See how I defined and built the analytics layer →</a
    >
  </figcaption>
</figure>

## Reflection

### The decisions happen around the model, not inside it

**What I learned**

- The strongest AI product decisions often happen around the model rather than inside it.
- A cleaner input can matter more than another round of prompt tuning.
- A fallback from another model family can be more useful than a more expensive version of the same model.
- An evaluation system designed around real toy anatomy reveals failures that a generic quality score would miss.

**What failed**

- The workflow depended fully on vendor availability. When a vendor hit very high latency or CDN errors, we needed to switch vendors flexibly — a lesson that led to switching some of our workflows onto AWS Step Functions.
- Surface-level prompt tuning delayed the real fix on head-anchoring by several rounds.
