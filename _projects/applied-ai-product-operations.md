---
layout: project
title: "Making toys move: what it takes to ship generative video as a product"
pillar: build
kind: Generative AI · Product operations
summary: Designed, tested, and shipped generative-video workflows by connecting model capabilities, input architecture, prompt design, deployment constraints, and user experience.
experience: nauknauk
group: nauknauk
card_title: End to end AI workflow shipping generative video feature
card_badge: "~60%"
card_detail: "5+ workflows shipped · 10,000+ users reached daily"
card_image: /assets/projects/applied-ai-product-operations/card-kaiju-transformation.webp
featured: true
importance: 1
published: true
skills:
  - AI pipeline architecture
  - Model evaluation & selection
  - Prompt engineering
  - Cost / latency / moderation tradeoffs
  - Monitoring & fallback design
metrics:
  - value: "5+"
    label: workflows shipped
  - value: "10,000+"
    label: users reached daily
  - value: "~60%"
    label: avg publish conversion
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
roadmap_headline: Developing a feature users would actually use
problem: Turning a toy-community facing idea into an AI-native product feature meant handling messy user images, very different character shapes, coherent motion transfer, model restrictions, and reliable product integration.
approach: Owned the entire lifecycle from research to deployment — sequencing image-prep and video models, controlling inputs, designing an anatomy-aware evaluation, and building fallback and monitoring into the product itself.
impact: Reusable, personalizable AI template workflows across motion control, storytelling, and campaign needs.
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

Building an AI video template was not just a matter of finding one model and writing one prompt.\
Iterating with a focus on user figure fidelity — core reason why users engage.

> **Route** Ideas -> Model system -> Controlled input -> Product integration -> Monitoring -> Iteration

## 01 / Research

Research here did not mean a survey. It meant deciding what was worth building at all — a clip climbing a subreddit, a scene people quote from a movie, a joke only insiders get, sometimes a hallucinated video that came straight out of prompting.

This is where agency and real human judgment comes in.

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

This was a deeper fix than another round of surface-level prompt tuning.

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
