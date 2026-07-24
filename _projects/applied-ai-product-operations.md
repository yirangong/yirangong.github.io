---
layout: project
title: From model evaluation to shipped AI video workflows
pillar: build
kind: Generative AI · Product operations
summary: Designed, tested, and shipped generative-video workflows by connecting model capabilities, input architecture, prompt design, deployment constraints, and user experience.
experience: nauknauk
featured: true
importance: 1
status: draft
published: true
skills:
  - AI pipeline architecture
  - Model evaluation & selection
  - Prompt & preprocessing design
  - Failure diagnosis
  - Cost / latency / moderation tradeoffs
  - Deployment & configuration
  - Monitoring & fallback design
metrics:
  - value: "~800"
    label: Knee Slide generations in week one
  - value: "~70%"
    label: Publish conversion vs 57% template average
  - value: "~8%"
    label: Share of daily app generations (Dai Dai)
media_label: Highlights
media:
  - type: video
    src: /assets/video/knee-slide.mp4
    featured: true
    caption: "FIFA · Knee Slide — ~800 first-week generations, ~70% publish conversion"
  - type: video
    src: /assets/video/dai-dai.mp4
    caption: "FIFA · Dai Dai — built in an afternoon, ~8% of daily generations"
  - type: video
    src: /assets/video/kaiju-fight.mp4
    caption: "Kaiju Fight — reusable jersey-personalization infrastructure"
roadmap_label: How I built it
problem: The community wanted AI video templates, but turning a toy-community idea into a product feature meant handling messy user images, very different character shapes, coherent motion transfer, model restrictions, and reliable product integration.
approach: I treated the model as one part of a system — sequencing image-prep and video models, controlling inputs, designing an anatomy-aware evaluation, and building fallback and monitoring into the product itself.
impact: Shipped reusable, personalizable video workflows that beat template benchmarks (Knee Slide ~70% vs 57%) and grew a creative subreddit from 0 to 500+ members.
---

Building an AI video template was not a matter of finding one model and writing one prompt. It was turning an idea from the toy community into a system that could handle messy user images, preserve very different character shapes, transfer motion coherently, survive model restrictions, and connect reliably to the product.

Using Kaiju Fight as the running example, this is the lifecycle I followed: research, prototype, implement, deploy, and reflect.

> **Route** Reddit signal -> model system -> controlled input -> product integration -> monitoring -> iteration

## 01 / Research

[ADD: Reddit inspiration video and link]

## 02 / Prototype

#### Building the model system

The first question was not simply, "Which video model is best?" It was, "What sequence of models gives the video model a solvable input?"

I separated those jobs:

> **Messy user image** -> **image preparation** with Grok, Flux 9B Klein, or Seedream -> **reference-to-video** with Seedance or Kling -> **fallback if the main route fails**

[ADD: simplified pipeline diagram or public-safe fal workflow screenshot]

{% details View model and fallback decisions %}

- Grok image edit was versatile, fast, and generally reliable, but could reject some protected-character inputs.
- Flux 9B Klein provided a safer alternate image-preparation route.
- A standard-to-pro fallback helped when the issue was performance.
- A different model family (for example, Kling instead of Seedance) was more useful when the failure came from moderation or IP restrictions.

{% enddetails %}

## 03 / Implement & iterate

### Controlling the input

{% details View prompt-design details %}

Prompt placement mattered. I placed key instructions at the beginning and end, and kept grounding constraints beside the description of character placement.

The longer image-preparation prompt also specified:

- Whether to keep one or multiple figures.
- Whether to retain the background.
- Whether to remove stands and hand-held objects.
- How much blank space to leave around the subject.
- Which toy should be treated as the sole subject.

{% enddetails %}

### Diagnosing the real failure

> Observe the failure -> identify the constraint -> change the input, prompt, model route, or infrastructure -> test again

The long-leg and takeoff cases initially looked like general hallucinations. Looking across repeated failures revealed a consistent spatial problem: head-position mapping.

Similar diagnosis shaped the rest of the workflow:

- Change the input structure before endlessly tuning the prompt.
- Use another model family when a more expensive tier cannot solve the restriction.
- Evaluate different character anatomies with different failure gates.
- Treat configuration and monitoring as part of the AI product itself.

[ADD: long-leg or takeoff failure beside the grounded result]

{% details View the reference-model head-anchoring fix %}

I moved the character anchor to the ground, specified the intended scale, and placed those constraints inside the prompt section responsible for character positioning.

> Anchor the character to the ground using its feet, bottom edge, or lowest point. Scale it proportionally from the ground up. Do not align its head with the reference fighter's head. Element 1 and Element 2 are small toy-sized characters; their total height should be approximately 40–60% of the reference video fighters' height. Scale down proportionally and keep them grounded.

This was a deeper fix than another round of surface-level prompt tuning. The problem was the model's anchor, not the visual style.

{% enddetails %}

#### Testing before release

I used a fidelity-first evaluation, because different toy anatomies fail in different ways.

{% details View the complete evaluation framework %}

| Metric                 | A — Humanoid | B — Semi-humanoid                                                           | C — Limbless                                      |
| ---------------------- | ------------ | --------------------------------------------------------------------------- | ------------------------------------------------- |
| Character fidelity     | High         | High — shape + color + markings, not face proportions                       | High — silhouette + color is the whole identity   |
| Skeleton / rig sanity  | High         | Gating — hallucinated limbs = instant fail (most fragile metric for type B) | Replace with: no phantom limbs added              |
| Motion quality         | High         | Mid — creative locomotion is ok if coherent                                 | Mid — sliding or floating should feel intentional |
| Prompt adherence       | High         | Mid — credit partial adherence if limbs cannot physically do the move       | Low — score intent, not literal execution         |
| BG / style consistency | Mid          | Mid                                                                         | Mid — scene-level metric, same weight across all  |

{% enddetails %}

## 04 / Deploy

### Connecting the workflow to the product

A strong sandbox output was not yet a product feature. The workflow also needed hosted reference assets, a demo video and cover, product pricing, a configured generation engine, the correct image bindings, beta testing, and production configuration.

{% details View the release checklist %}

1. Host the reference assets.
2. Prepare the demo video and a correctly cropped cover.
3. Convert API cost into the product's pricing unit.
4. Configure the engine, provider, target, and preprocessing policy.
5. Bind the user image to the workflow input.
6. Connect the engine to the template.
7. Test the complete experience in beta.
8. Configure the production version.

{% enddetails %}

### Connecting model quality to product behavior

How did the workflow behave once it was connected to the product? I used the product dashboard to connect model testing with workflow behavior. Relevant signals included generation success, fallback behavior, and whether users moved from generating to publishing.

This kept the build loop open after configuration. A model could look strong in selected demonstrations and still expose a different pattern at real usage levels.

[ADD: public-safe dashboard view]

## Reflection

**What I learned**

- The strongest AI product decisions often happen around the model rather than inside it.
- A cleaner input can matter more than another round of prompt tuning.
- A fallback from another model family can be more useful than a more expensive version of the same model.
- An evaluation system designed around real toy anatomy reveals failures that a generic quality score would miss.

**What failed**

- The workflow depended fully on vendor availability. When a vendor hit very high latency or CDN errors, we needed to switch vendors flexibly — a lesson that fed straight back into the fallback design.
