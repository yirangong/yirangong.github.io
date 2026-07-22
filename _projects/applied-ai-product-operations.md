---
layout: project
title: Applied AI Video Workflows
pillar: build
index: B—01
kind: Generative AI · Product systems
summary: Designed, tested, and shipped generative-video workflows by connecting model capabilities, input architecture, prompt design, deployment constraints, and user experience.
role: Applied AI product and workflow design
timeframe: Research → prototype → implement → deploy → iterate
team: Cross-functional campaign delivery
skills:
  - AI pipeline architecture
  - Model evaluation
  - Prompt and preprocessing design
  - Deployment and monitoring
featured: true
importance: 1
status: shipped
published: true
metrics:
  - value: "≈800"
    label: Knee Slide generations in the first week
  - value: "≈70%"
    label: Knee Slide publish conversion
  - value: "≈8%"
    label: Daily generation later represented by Dai Dai
---

<div class="case-roadmap" data-case-roadmap>
  <aside class="case-roadmap__rail" aria-label="Implementation roadmap">
    <div class="case-roadmap__rail-head">
      <span class="scene-label">IMPLEMENTATION ROUTE</span>
      <p>From signal to a monitored product workflow.</p>
    </div>
    <nav class="case-roadmap__nav" aria-label="On this page">
      <span class="case-roadmap__track" aria-hidden="true"><span class="case-roadmap__progress"></span></span>
      <a href="#signal" class="is-active" data-route-link>
        <span>01</span>
        <strong>Reddit signal</strong>
        <small>Research</small>
      </a>
      <a href="#model-system" data-route-link>
        <span>02</span>
        <strong>Model system</strong>
        <small>Prototype</small>
      </a>
      <a href="#controlled-input" data-route-link>
        <span>03</span>
        <strong>Controlled input</strong>
        <small>Implement</small>
      </a>
      <a href="#product-integration" data-route-link>
        <span>04</span>
        <strong>Product integration</strong>
        <small>Deploy</small>
      </a>
      <a href="#monitoring" data-route-link>
        <span>05</span>
        <strong>Monitoring</strong>
        <small>Instrument</small>
      </a>
      <a href="#iteration" data-route-link>
        <span>06</span>
        <strong>Iteration</strong>
        <small>Reflect</small>
      </a>
    </nav>
    <div class="case-roadmap__legend">
      <span><i class="legend-dot legend-dot--yellow"></i> Decision</span>
      <span><i class="legend-dot legend-dot--black"></i> Evidence</span>
    </div>
  </aside>

  <div class="case-roadmap__body">
    <header class="project-thesis">
      <span class="scene-label">PROJECT 01 / SYSTEM LIFECYCLE</span>
      <p class="project-thesis__lead">Building an AI video template was not a matter of finding one model and writing one prompt.</p>
      <p>It meant turning an idea from the toy community into a system that could handle messy user images, preserve very different character shapes, transfer motion coherently, survive model restrictions, and connect reliably to the product.</p>
      <div class="route-statement" aria-label="Project route">
        <span>Reddit signal</span>
        <span>Model system</span>
        <span>Controlled input</span>
        <span>Product integration</span>
        <span>Monitoring</span>
        <span>Iteration</span>
      </div>
    </header>

    <div class="detail-controls" aria-label="Detail controls">
      <span>Supporting detail stays on this page.</span>
      <div>
        <button type="button" data-details-action="expand">Expand all</button>
        <button type="button" data-details-action="collapse">Collapse all</button>
      </div>
    </div>

    <section class="case-module" id="signal" data-route-section>
      <header class="case-module__head">
        <span class="case-module__number">01</span>
        <div>
          <p class="scene-label">RESEARCH / REDDIT SIGNAL</p>
          <h2>Start with the idea worth building</h2>
        </div>
      </header>

      <div class="artifact-slot artifact-slot--signal">
        <div class="artifact-slot__graphic" aria-hidden="true">
          <span class="artifact-scan"></span>
          <b>R/</b>
        </div>
        <div>
          <span class="artifact-slot__label">PUBLIC-SAFE ARTIFACT SLOT</span>
          <strong>Reddit inspiration video + source link</strong>
          <p>Add the original community signal here when the public-safe asset is ready.</p>
        </div>
      </div>

      <div class="project-range" aria-label="Examples in this body of work">
        <article>
          <div class="project-range__meta"><span>FIFA / 01</span><span>SHIPPED</span></div>
          <h3>Knee Slide</h3>
          <p>Part of a reusable jersey-personalization infrastructure and cross-functional campaign delivery.</p>
          <dl>
            <div><dt>First week</dt><dd>≈800 generations</dd></div>
            <div><dt>Publish conversion</dt><dd>≈70%</dd></div>
          </dl>
          <div class="inline-asset"><span>Example video</span><strong>ADD PUBLIC-SAFE MEDIA ↗</strong></div>
        </article>
        <article>
          <div class="project-range__meta"><span>FIFA / 02</span><span>SHIPPED</span></div>
          <h3>Dai Dai</h3>
          <p>Built in one afternoon and later represented approximately 8% of daily generation.</p>
          <dl>
            <div><dt>Build time</dt><dd>One afternoon</dd></div>
            <div><dt>Daily generation</dt><dd>≈8%</dd></div>
          </dl>
          <div class="inline-asset"><span>Example video</span><strong>ADD PUBLIC-SAFE MEDIA ↗</strong></div>
        </article>
        <article class="project-range__focus">
          <div class="project-range__meta"><span>KAIJU / 03</span><span>DEEP DIVE</span></div>
          <h3>Kaiju Fight</h3>
          <p>The lifecycle example below: research, prototype, implement, coordinate, instrument, and iterate.</p>
          <div class="project-range__route">SIGNAL <span>→</span> SYSTEM <span>→</span> PRODUCT</div>
        </article>
      </div>
    </section>

    <section class="case-module" id="model-system" data-route-section>
      <header class="case-module__head">
        <span class="case-module__number">02</span>
        <div>
          <p class="scene-label">PROTOTYPE / MODEL SYSTEM</p>
          <h2>Give the video model a solvable input</h2>
          <p>The first question was not simply, “Which video model is best?” It was, “What sequence of models gives the video model a solvable input?”</p>
        </div>
      </header>

      <div class="pipeline-board" aria-label="Simplified generative video pipeline">
        <div class="pipeline-board__stage pipeline-board__stage--input">
          <span>INPUT / 00</span>
          <strong>Messy user image</strong>
          <small>Different characters · backgrounds · objects · proportions</small>
        </div>
        <span class="pipeline-board__arrow" aria-hidden="true">→</span>
        <div class="pipeline-board__stage pipeline-board__stage--prep">
          <span>PREP / 01</span>
          <strong>Image preparation</strong>
          <small>Grok · Flux 9B Klein · Seedream</small>
        </div>
        <span class="pipeline-board__arrow" aria-hidden="true">→</span>
        <div class="pipeline-board__stage pipeline-board__stage--video">
          <span>VIDEO / 02</span>
          <strong>Reference-to-video</strong>
          <small>Seedance · Kling</small>
        </div>
        <span class="pipeline-board__arrow" aria-hidden="true">→</span>
        <div class="pipeline-board__stage pipeline-board__stage--fallback">
          <span>ROUTE / 03</span>
          <strong>Fallback</strong>
          <small>When the main route fails</small>
        </div>
      </div>

      <div class="artifact-slot artifact-slot--dark">
        <div class="artifact-slot__graphic artifact-slot__graphic--nodes" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i>
        </div>
        <div>
          <span class="artifact-slot__label">PUBLIC-SAFE ARTIFACT SLOT</span>
          <strong>Simplified pipeline diagram or fal workflow</strong>
          <p>Replace this structural placeholder with a public-safe workflow screenshot.</p>
        </div>
      </div>

      <details class="detail-drawer" data-detail>
        <summary>
          <span class="detail-drawer__index">MODEL DECISIONS / 01</span>
          <strong>Why the route needed more than one model family</strong>
          <span class="detail-drawer__action" aria-hidden="true">Show details</span>
        </summary>
        <div class="detail-drawer__content">
          <ul class="decision-list">
            <li><strong>Grok image edit</strong><span>Versatile, fast, and generally reliable, but could reject some protected-character inputs.</span></li>
            <li><strong>Flux 9B Klein</strong><span>Provided a safer alternate image-preparation route.</span></li>
            <li><strong>Standard → pro</strong><span>Could help when the issue was performance.</span></li>
            <li><strong>Different model family</strong><span>Kling instead of Seedance was more useful when the failure came from moderation or IP restrictions.</span></li>
          </ul>
        </div>
      </details>

      <div class="tradeoff-board" aria-label="Workflow tradeoffs">
        <span class="tradeoff-board__label">DECISION SURFACE</span>
        <div><strong>Quality</strong><small>Character fidelity + coherent motion</small></div>
        <div><strong>Cost</strong><small>Product pricing + model tier</small></div>
        <div><strong>Latency</strong><small>Vendor + route performance</small></div>
        <div><strong>Moderation</strong><small>Protected-character restrictions</small></div>
      </div>
    </section>

    <section class="case-module" id="controlled-input" data-route-section>
      <header class="case-module__head">
        <span class="case-module__number">03</span>
        <div>
          <p class="scene-label">IMPLEMENT / CONTROLLED INPUT</p>
          <h2>Change the input before endlessly tuning the prompt</h2>
        </div>
      </header>

      <div class="prompt-specimen">
        <div class="prompt-specimen__head">
          <span>PROMPT DESIGN / PLACEMENT</span>
          <span>GROUNDING CONSTRAINT</span>
        </div>
        <p>Prompt placement mattered. Key instructions sat at the beginning and end, while grounding constraints stayed beside the description of character placement.</p>
        <div class="prompt-specimen__rules">
          <span>One or multiple figures</span>
          <span>Retain or remove background</span>
          <span>Remove stands and hand-held objects</span>
          <span>Leave space around the subject</span>
          <span>Identify the sole subject</span>
        </div>
      </div>

      <details class="detail-drawer detail-drawer--yellow" data-detail>
        <summary>
          <span class="detail-drawer__index">PROMPT DESIGN / 02</span>
          <strong>View the grounding prompt excerpt</strong>
          <span class="detail-drawer__action" aria-hidden="true">Show prompt</span>
        </summary>
        <div class="detail-drawer__content">
          <blockquote class="prompt-quote">
            <p>Anchor the character to the ground using its feet, bottom edge, or lowest point. Scale it proportionally from the ground up. Do not align its head with the reference fighter's head.</p>
            <p>Element 1 and Element 2 are small toy-sized characters. Their total height should be approximately 40–60% of the reference video fighters' height. Scale down proportionally and keep them grounded.</p>
          </blockquote>
        </div>
      </details>

      <div class="diagnostic-block">
        <div class="diagnostic-block__intro">
          <span class="scene-label">FAILURE DIAGNOSIS</span>
          <h3>The problem was the anchor, not the visual style.</h3>
          <p>The long-leg and takeoff cases initially looked like general hallucinations. Repeated failures revealed a consistent spatial problem: head-position mapping.</p>
        </div>
        <div class="diagnostic-loop" aria-label="Failure diagnosis loop">
          <div><span>01</span><strong>Observe the failure</strong></div>
          <i aria-hidden="true">↓</i>
          <div><span>02</span><strong>Identify the constraint</strong></div>
          <i aria-hidden="true">↓</i>
          <div><span>03</span><strong>Change input, prompt, route, or infrastructure</strong></div>
          <i aria-hidden="true">↓</i>
          <div><span>04</span><strong>Test again</strong></div>
        </div>
      </div>

      <div class="before-after-slot">
        <div>
          <span>BEFORE / FAILURE</span>
          <strong>Long-leg or takeoff case</strong>
          <small>ADD PUBLIC-SAFE FAILURE FRAME</small>
        </div>
        <div class="before-after-slot__arrow" aria-hidden="true">→</div>
        <div>
          <span>AFTER / GROUNDED</span>
          <strong>Ground-up scale and anchor</strong>
          <small>ADD PUBLIC-SAFE RESULT FRAME</small>
        </div>
      </div>

      <details class="detail-drawer" data-detail>
        <summary>
          <span class="detail-drawer__index">DIAGNOSIS / 03</span>
          <strong>View the complete reasoning behind the fix</strong>
          <span class="detail-drawer__action" aria-hidden="true">Show details</span>
        </summary>
        <div class="detail-drawer__content prose-detail">
          <p>I moved the character anchor to the ground, specified the intended scale, and placed those constraints inside the prompt section responsible for character positioning.</p>
          <ul>
            <li>Change the input structure before endlessly tuning the prompt.</li>
            <li>Use another model family when a more expensive tier cannot solve the restriction.</li>
            <li>Evaluate different character anatomies with different failure gates.</li>
            <li>Treat configuration and monitoring as part of the AI product itself.</li>
          </ul>
        </div>
      </details>

      <div class="evaluation-head">
        <div>
          <span class="scene-label">TESTING BEFORE RELEASE</span>
          <h3>Fidelity first, anatomy aware</h3>
        </div>
        <p>Different toy anatomies fail in different ways, so the evaluation changed by character type.</p>
      </div>

      <details class="detail-drawer detail-drawer--table" data-detail>
        <summary>
          <span class="detail-drawer__index">EVALUATION / 04</span>
          <strong>View the complete evaluation framework</strong>
          <span class="detail-drawer__action" aria-hidden="true">Show matrix</span>
        </summary>
        <div class="detail-drawer__content">
          <div class="table-scroll" tabindex="0" aria-label="Scrollable evaluation matrix">
            <table class="evaluation-table">
              <thead>
                <tr><th>Metric</th><th>A — Humanoid</th><th>B — Semi-humanoid</th><th>C — Limbless</th></tr>
              </thead>
              <tbody>
                <tr><th>Character fidelity<br><small>Face, paint, proportions, accessories</small></th><td><strong>High</strong></td><td><strong>High</strong><br>Redefine as shape + color + markings, not face proportions</td><td><strong>High</strong><br>Silhouette + color is the whole identity</td></tr>
                <tr><th>Skeleton / rig sanity<br><small>Limb direction, no melting</small></th><td><strong>High</strong></td><td><strong class="gate-label">Gating</strong><br>Hallucinated limbs = instant fail. Most fragile metric for type B</td><td><strong>N/A</strong><br>Replace with: no phantom limbs added</td></tr>
                <tr><th>Motion quality<br><small>Weight, impact, timing</small></th><td><strong>High</strong></td><td><strong>Mid</strong><br>Creative locomotion is okay if coherent</td><td><strong>Mid</strong><br>Sliding or floating should feel intentional</td></tr>
                <tr><th>Prompt adherence<br><small>Did it do the move?</small></th><td><strong>High</strong></td><td><strong>Mid</strong><br>Credit partial adherence if limbs cannot physically do the move</td><td><strong>Low</strong><br>Score intent, not literal execution, when a move is structurally impossible</td></tr>
                <tr><th>Background / style consistency<br><small>Street Fighter-ness</small></th><td><strong>Mid</strong></td><td><strong>Mid</strong></td><td><strong>Mid</strong><br>Scene-level metric, same weight across all</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>
    </section>

    <section class="case-module" id="product-integration" data-route-section>
      <header class="case-module__head">
        <span class="case-module__number">04</span>
        <div>
          <p class="scene-label">DEPLOY / PRODUCT INTEGRATION</p>
          <h2>A strong sandbox output was not yet a product feature</h2>
          <p>The workflow also needed hosted reference assets, a demo video and cover, product pricing, a configured generation engine, the correct image bindings, beta testing, and production configuration.</p>
        </div>
      </header>

      <ol class="release-checklist" aria-label="Release checklist">
        <li><span>01</span><strong>Host the reference assets.</strong><i aria-label="Complete">✓</i></li>
        <li><span>02</span><strong>Prepare the demo video and correctly cropped cover.</strong><i aria-label="Complete">✓</i></li>
        <li><span>03</span><strong>Convert API cost into the product's pricing unit.</strong><i aria-label="Complete">✓</i></li>
        <li><span>04</span><strong>Configure the engine, provider, target, and preprocessing policy.</strong><i aria-label="Complete">✓</i></li>
        <li><span>05</span><strong>Bind the user image to the workflow input.</strong><i aria-label="Complete">✓</i></li>
        <li><span>06</span><strong>Connect the engine to the template.</strong><i aria-label="Complete">✓</i></li>
        <li><span>07</span><strong>Test the complete experience in beta.</strong><i aria-label="Complete">✓</i></li>
        <li><span>08</span><strong>Configure the production version.</strong><i aria-label="Complete">✓</i></li>
      </ol>

      <details class="detail-drawer detail-drawer--yellow" data-detail>
        <summary>
          <span class="detail-drawer__index">DEPLOYMENT / 05</span>
          <strong>View the release checklist as a compact route</strong>
          <span class="detail-drawer__action" aria-hidden="true">Show route</span>
        </summary>
        <div class="detail-drawer__content">
          <div class="compact-route">
            <span>Assets</span><i>→</i><span>Pricing</span><i>→</i><span>Engine</span><i>→</i><span>Bindings</span><i>→</i><span>Beta</span><i>→</i><span>Production</span>
          </div>
        </div>
      </details>
    </section>

    <section class="case-module" id="monitoring" data-route-section>
      <header class="case-module__head">
        <span class="case-module__number">05</span>
        <div>
          <p class="scene-label">INSTRUMENT / MONITORING</p>
          <h2>Connect model quality to product behavior</h2>
          <p>I used the product dashboard to connect model testing with workflow behavior.</p>
        </div>
      </header>

      <div class="monitoring-board">
        <div class="monitoring-board__screen" aria-label="Public-safe dashboard placeholder">
          <div class="monitoring-board__top"><span>WORKFLOW OBSERVABILITY</span><span>LIVE SIGNALS</span></div>
          <div class="monitoring-board__chart" aria-hidden="true">
            <i style="height: 34%"></i><i style="height: 56%"></i><i style="height: 48%"></i><i style="height: 72%"></i><i style="height: 62%"></i><i style="height: 86%"></i><i style="height: 76%"></i><i style="height: 91%"></i>
          </div>
          <strong>ADD PUBLIC-SAFE DASHBOARD VIEW</strong>
        </div>
        <div class="monitoring-board__signals">
          <article><span>01</span><strong>Generation success</strong><p>Did the connected workflow complete?</p></article>
          <article><span>02</span><strong>Fallback behavior</strong><p>When and how did the alternate route run?</p></article>
          <article><span>03</span><strong>Generate → publish</strong><p>Did users move from generating to publishing?</p></article>
        </div>
      </div>

      <aside class="monitoring-note">
        <span>WHY IT MATTERED</span>
        <p>A model could look strong in selected demonstrations and still expose a different pattern at real usage levels. Monitoring kept the build loop open after configuration.</p>
      </aside>
    </section>

    <section class="case-module" id="iteration" data-route-section>
      <header class="case-module__head">
        <span class="case-module__number">06</span>
        <div>
          <p class="scene-label">ITERATE / REFLECTION</p>
          <h2>The strongest decisions often happened around the model</h2>
        </div>
      </header>

      <div class="reflection-grid">
        <article><span>01</span><p>The strongest AI product decisions often happen around the model rather than inside it.</p></article>
        <article><span>02</span><p>A cleaner input could matter more than another round of prompt tuning.</p></article>
        <article><span>03</span><p>A fallback from another model family could be more useful than a more expensive version of the same model.</p></article>
        <article><span>04</span><p>An evaluation system designed around real toy anatomy could reveal failures that a generic quality score would miss.</p></article>
      </div>

      <details class="detail-drawer detail-drawer--failure" data-detail>
        <summary>
          <span class="detail-drawer__index">WHAT FAILED / 06</span>
          <strong>Vendor availability remained a system constraint</strong>
          <span class="detail-drawer__action" aria-hidden="true">Show reflection</span>
        </summary>
        <div class="detail-drawer__content failure-reflection">
          <div><span>DEPENDENCY</span><p>The workflow still depended on vendor availability.</p></div>
          <div><span>FAILURE MODE</span><p>High latency and CDN errors could affect the experience.</p></div>
          <div><span>NEXT SYSTEM NEED</span><p>A more flexible way to switch vendors.</p></div>
        </div>
      </details>

      <div class="closing-route">
        <span>RESEARCH</span><i>→</i><span>PROTOTYPE</span><i>→</i><span>IMPLEMENT</span><i>→</i><span>COORDINATE</span><i>→</i><span>INSTRUMENT</span><i>→</i><span>ITERATE</span>
      </div>
    </section>

  </div>
</div>

<script src="{{ '/assets/js/project-roadmap.js' | relative_url }}" defer></script>
