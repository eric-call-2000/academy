# Cloud Platforms & Deployment — "Someone else's computer, and how to ship to it safely" (id: `cloud`, prefix: `cloud`, icon ☁️, level Intermediate, 8 units)

## Verdict
STANDALONE, and a **concept-led hybrid** — most of it is the theory-course format (`predict` / `pick` / `order` / `trace` / `explain`, `theory: true`), with a spine of `js` lessons for the parts that are genuinely deterministic arithmetic (config precedence, rolling/canary/blue-green math, cost break-even, error budgets). It needs **almost no new engine**: the concept engine (`concept.js`) and `lesson.clock` already exist; the graded code is pure JavaScript over plain objects. **No `cloudsim`.**

Why this shape, not a simulator: unlike Git, Docker and CI — which are *command surfaces* a simulator can enforce — "the cloud" is mostly **decisions**: which service model fits, which deploy strategy trades safety for speed, how much of the error budget a rollout may spend, what a serverless bill does at 10× traffic. You cannot honestly simulate an AWS console offline, and faking one would teach a vendor UI that changes yearly, not the ideas that don't. What survives is the *reasoning*, which is exactly what the theory format grades, plus the handful of things that are pure math (a canary schedule, a config merge, a cost curve) — those get real `js` lessons with exact answers. This is the `algo`/`web` playbook: teach the durable mechanism, grade the substrate that's objectively checkable.

Why standalone: no built course teaches service models, deployment strategies, or observability as a subject. `ship` deploys one app to one place by hand; it never contrasts IaaS/PaaS/serverless or blue-green vs canary. Junior DevOps lists `cloud` by name, and with `cicd` it is the last thing blocking that position.

Why it's honest without a runtime: what a junior is screened on here is judgment and arithmetic — "when does serverless cost more than a small always-on box?", "how many instances stay up during a rolling deploy with surge 1 and maxUnavailable 1?", "your SLO is 99.9%; how much downtime is that a month, and has this incident burned the budget?", "config comes from a file, an env var and a default — which wins?". Every one of those has a single correct answer a pure function checks. The non-arithmetic parts (the responsibility line of IaaS/PaaS/serverless, the three pillars of observability, RPO vs RTO) are `pick`/`order`/`explain` with per-choice `why`, run-verified where a number is involved.

Scope carved OFF, each a cheatsheet card with no graded step: any specific vendor's console, CLI or pricing page (AWS/GCP/Azure named only as examples; no `aws ...` commands graded); Kubernetes/orchestration internals (named as "what runs rolling deploys for you," not taught as an API — a later course could); Terraform/IaC syntax (the *idea* of declarative infra gets one screen; HCL is not graded); real monitoring dashboards; networking/VPC depth (owned by `web` and `docker`); and actually creating a paid cloud account (a Prohibited action anyway).

Path position: **after `ship`, `docker` and `web`** — it extends `ship`'s single deploy into multi-environment strategy, uses `docker`'s "ship the image" as the unit of deployment, and leans on `web`'s round-trip/CDN/caching model for the serverless-latency and edge material. Ideally **before `cicd`**, so `cicd`'s CD unit can borrow this course's staging/prod and rollback vocabulary. Level Intermediate.

## Size
Target 8 units, ~34 items (about 18 concept lessons, ~8 js lessons, 2 projects, 6 quizzes), modelled at the words-based floor for concept lessons. **Credits restate finished minutes.** Stub says `plannedCredits: 4 {ops 4}`; a concept-led course of this size likely lands **4** (theory minutes are counted at the floor, so it won't inflate). All Operations — this is squarely the DevOps/ops category. Confirm and drop `plannedCredits` once written. Four credits takes Operations to its Junior DevOps floor when combined with `docker`, `ship` and `cicd`.

**`theory: true`?** Probably yes — if concept minutes clear 60% of the course, the flag is required (validate.js gates it both ways). With ~18 concept lessons to ~8 js lessons the split should land theory-side; set the flag once the minutes are known, exactly as `web` did.

## Engine needs
The lightest of any course — **~0 new engine, ~15 lines of validate.js gate.**
1. **Reuse `concept.js`** (predict/pick/order/trace/explain, Test out, run-verified answer keys, words-based minutes floor) — unchanged, as `algo` and `web` use it.
2. **Reuse `lesson.clock`** for the canary/rollout lessons that advance through stages over time, and for error-budget windows. The `cloud-` prefix joins the existing real-clock gate (`auth-`, `etl-`, `web-`): a `cloud-` lesson using `now()` must set `clock`, and no `cloud-` step reads wall-clock time. (~10 lines)
3. **Pure-JS `js` lessons** grade over plain objects — no harness. Config-merge takes objects, canary/rolling take `{replicas, surge, maxUnavailable}` and return counts, cost takes `{rate, hours, requests}` and returns a number, error-budget takes an SLO and downtime and returns budget remaining. All exact, all node-verifiable before authoring.
4. **validate.js gate (~5 lines):** no wall-clock timing; teach counts and ratios (instances, percent of traffic, minutes of budget), never a measured duration — the same rule as `algo`/`web`.

EXPLICITLY NOT NEEDED: a cloud API, a `cloudsim`, `harnessMock`, any new lesson kind, or any new lab. If a deploy-strategy *visualiser* is wanted later, the `waterfall` lab's pattern (declarative `{items}`, no logic) is the template — but the course ships without it; a canary schedule is as gradable as a `predict` against an arithmetic `check`.

## Teachable today
**Almost all of it, immediately** — the concept engine and `lesson.clock` already shipped with `algo`/`web`. There is no blocking engine work, which is why this course is the recommended **first** of the two DevOps-blocker courses: it's lower-risk and proves out before the larger `cisim` build. The only care needed is the usual concept-authoring discipline (reads ≤180 words, ≥2 transfer asks per lesson, correct answer not the longest choice, run-verify every numeric answer key in node first).

## Overlaps
Cloud sits on top of three built courses and extends each.
1. **Deploying Your App.** `ship` teaches one manual deploy, env vars as strings (U2), build-vs-run (U3), cache-control and DNS/HTTPS as deploy config. Cloud EXTENDS: U2 goes from "an env var" to "config precedence across dev/staging/prod and the 12-factor rule"; the deploy unit goes from "deploy once" to "blue-green vs canary vs rolling." It never re-teaches what an env var is.
2. **How the Web Works.** `web` taught round trips, caching, the CDN/edge and the "fresh cache = 0 round trips" model (U6–U8). Cloud's serverless-cold-start and edge material REFERENCES that latency model by name and never re-derives round trips.
3. **Docker & Containers.** The unit of deployment is the image `docker` taught to build. Cloud deploys *that image* with a strategy; it never re-teaches layers, ports or the registry. Orchestration is named as "the thing that runs your rolling deploy," explicitly out of scope for graded steps.
4. **Web Security Basics (secrets) & CI/CD (sibling).** Secret *storage* is `sec`/`cicd`; cloud references "config in the environment, secrets in a secret store" without re-arguing hygiene. Automating the deploy is `cicd`; cloud teaches WHICH strategy and why, `cicd` teaches how to DRIVE it from a pipeline.

## Units

### 1. Unit 1 — What "the cloud" actually is
Someone else's computers, rented by the hour or the request — and a line dividing what you manage from what they do.
Lessons: IaaS vs PaaS vs serverless as a **responsibility line** (you manage the app; they manage more of the stack as you move right) (concept, `order` the layers each model manages); when each fits (concept, `pick`); the trade you're making — control vs. operational burden (explain).
Graded how: `order`/`pick` on who manages the OS, the runtime, scaling; a scenario `pick` matching a workload to a model. No vendor names graded.

### 2. Unit 2 — Environments and configuration
The same code runs in dev, staging and prod; only the config differs.
Lessons: why one artifact + per-environment config (12-factor "config in the environment"), extending `ship` U2; config precedence — default < config file < environment variable < explicit override (js `resolveConfig`); secrets belong in a secret store, not the image (concept, references `sec`).
Graded how: `resolveConfig(sources)` returns the winning value per key by precedence — a pure function, node-verified; a `predict` on which source wins; a checkpoint where a secret committed to config is the bug.

### 3. Unit 3 — Serverless vs always-on
Pay per request, or pay per hour — and where the lines cross.
Lessons: the serverless model (scale to zero, cold starts, per-request billing) vs an always-on instance; cold-start latency tied to `web`'s round-trip model; the break-even (js `cheaper(traffic)` — always-on flat cost vs serverless per-request cost, find where each wins).
Graded how: `monthlyCost(plan, requests)` for both models and a `cheaper` decision at low/med/high traffic — exact arithmetic, node-verified; a `pick` on when scale-to-zero hurts (spiky low traffic vs steady high traffic).

### 4. Unit 4 — Rolling deploys and staying up
Replace instances a few at a time so the service never fully drops.
Lessons: rolling update with `surge` and `maxUnavailable` — how many are up during the deploy (js `availableDuring`); the recreate strategy and its downtime; readiness checks gating traffic to a new instance.
Graded how: `availableDuring({replicas, surge, maxUnavailable})` returns the minimum healthy count through the rollout — exact; a `trace` of the batch steps; a `pick` on why a missing readiness check sends traffic to a not-ready instance.

### 5. Unit 5 — Blue-green and canary
Two ways to make a release reversible: flip instantly, or dial up slowly.
Lessons: blue-green — two identical environments, switch traffic in one move, roll back by switching back (js `switchTraffic` state machine: live color, cutover, rollback); canary — send 5% → 25% → 100% while watching error rate, and auto-abort if it climbs (js `canaryStep` with `lesson.clock` advancing stages and an error-rate gate); which strategy for which risk.
Graded how: `switchTraffic` returns which environment is live after a cutover and after a rollback; `canaryStep(state, errorRate)` advances or aborts against a threshold — a checkpoint where a spiking error rate must abort the rollout, clock-controlled; a `pick` contrasting instant-switch cost vs gradual-exposure safety.

### 6. Unit 6 — Observability: logs, metrics, traces
You can't fix what you can't see. The three pillars and what each answers.
Lessons: logs (what happened, one event), metrics (how much/how often, aggregated), traces (where the time went across services) — the three pillars (concept, `order`/`pick`); structured logs you can query vs `console.log` soup (extends `debug`); alert thresholds — alert on symptoms users feel, not every blip (js `shouldAlert(series, threshold, forMinutes)`).
Graded how: `pick` matching a question ("which endpoint is slow?") to the right pillar; `shouldAlert` fires only when a metric stays over threshold for a sustained window — exact, clock/aware; a `pick` on alert fatigue (paging on a one-second blip).

### 7. Unit 7 — Reliability: SLOs, error budgets and DR
How reliable is reliable enough, and what happens when it isn't.
Lessons: SLI/SLO/SLA and the **error budget** (99.9% = ~43 min/month of allowed downtime; js `errorBudget(slo, windowDays)` → minutes, and `budgetLeft` after an incident); graceful degradation (shed load, serve stale, fail soft) tying to `web` U6 caching; disaster recovery — RPO (how much data you can lose) vs RTO (how fast you're back), backups and restore drills.
Graded how: `errorBudget(0.999, 30)` returns the minute allowance and `budgetLeft` after a given outage — exact, node-verified; a `pick`/`order` distinguishing RPO from RTO on a scenario; an `explain` on why 100% is the wrong target (no budget to ship).

### 8. Unit 8 — Two projects
PROJECT 1 (`cloud-u8-p1`, concept capstone, ~9 screens): plan a production deployment for a given app — `order` the pipeline from artifact to prod, `pick` a deploy strategy for its risk profile and justify it, lay out config/secrets per environment, and `explain` the rollback plan for a bad release, checked against a rubric. The "design the deploy" interview question as a graded exercise.
PROJECT 2 (`cloud-u8-p2`, js with `clock`, ~8 checkpoints): a rollout-and-cost analyser — compute availability through a rolling deploy, run a canary that auto-aborts on a bad error rate, compare serverless vs always-on cost at three traffic levels, and report the error-budget spent by a simulated incident. Every number a deterministic count, node-verified first.

## Projects
- Project: Plan the deployment (cloud-u8-p1) — choose a service model and deploy strategy, config per environment, and a rollback plan, defended in plain English.
- Project: The rollout analyser (cloud-u8-p2) — availability math, a canary with an abort gate, a serverless-vs-always-on cost comparison, and an error-budget calculation, all exact.

## Risks
- **Vendor drift and vibes.** Cloud writing rots fast and tempts vendor-specific detail. Mitigation: grade only durable mechanisms and arithmetic; no vendor CLI, console or price is ever a checkpoint; any concrete figure is a dated cheatsheet line.
- **"Concept" becoming "opinion."** Deploy-strategy choices have real trade-offs, not one right answer. Mitigation: scenario `pick`s pin a *constraint* that decides it (risk tolerance, traffic shape, data-loss budget) with per-choice `why`, the way `algo` U8's "decide under constraints" lessons do; `explain` is self-graded (claim, never evidence).
- **Numbers must be exact.** Availability, budget and cost math is easy to get subtly wrong. Mitigation: node-verify every answer key before authoring (the ETL/web discipline); `run: true` on numeric concept answers so a wrong key can't ship.
- **Overlap with `ship`/`web`/`docker`.** Mitigation: every unit names the course it extends and its boundary; no graded step re-teaches an env-var basic, a round trip, or a Docker layer.

## Sources
- Deployment strategies (rolling, recreate, blue-green, canary), the responsibility line of IaaS/PaaS/serverless, the three pillars of observability, SLO/error-budget and RPO/RTO: standard SRE/cloud practitioner material (Google SRE book framing for SLO/error budgets).
- Serverless cost/cold-start trade-offs: general serverless-vs-container cost analysis; taught as the break-even mechanism, no vendor price graded.
- Precedent inside CodeLab: `complexity-data-structures.md` and `how-the-web-works.md` (the concept-lesson engine, run-verified answer keys, words-based minutes floor, `theory: true` gate this course reuses unchanged); `deploying-your-app-id-ship-p.md` (the env-var and single-deploy boundary this course extends).
