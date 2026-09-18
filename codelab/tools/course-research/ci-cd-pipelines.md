# CI/CD Pipelines — "Automate the checklist you run before every merge" (id: `cicd`, prefix: `cicd`, icon 🔄, level Intermediate, 8 units)

## Verdict
STANDALONE — and it must ship on a simulator, `cisim.js`, hosted on `shell.js` and composing `gitsim.js` and `dockersim.js`, exactly the way Docker composes the shell and Git composes it. Not a real CI runner, and not a YAML-linting course.

Why standalone: nothing in the built catalog automates a pipeline. `test` teaches how to *write* a test, `git` how to commit, `docker` how to build an image, `ship` how to deploy once by hand — but no course wires those into "on every push, check it and ship it." Junior DevOps lists `cicd` by name, and it is one of the two courses (with `cloud`) still blocking that position.

Why a simulator, and why this is the *easiest* simulator to justify so far: a CI pipeline is not new machinery — it is **the commands the learner already learned to type, triggered by a git event and gated by exit codes.** `checkout` is a gitsim clone. `npm ci` / `npm test` / `docker build` are shell and dockersim commands that already run in the sandbox and already return honest exit codes. The only genuinely new thing CI adds is the *orchestration*: an event fires, jobs run in an order, a non-zero exit fails the job, a failed required job blocks the merge, artifacts pass from one job to the next. Those are pure state transitions over things that already exist. `cisim.js` is a workflow runner, not a second universe.

Why not a real runner: GitHub Actions runs on hosted VMs pulling containers over the network — impossible in an offline PWA with no build step, and pointless when the validator must run every lesson in Chromium on every build. `act` (the local Actions runner) needs Docker on the host. Neither survives CodeLab's invariants.

Why not a linting course: a workflow read as text teaches half the subject and the wrong half. The half that bites — the deploy job that ran on a feature branch because the `if:` was wrong, the test job that was green because a failing step had `continue-on-error`, the artifact that wasn't there because the job that built it was skipped — only appears when the pipeline *runs*. Grade the run, never the YAML text. This is the Docker course's "grade the image, not the Dockerfile prose" rule, applied to pipelines.

Scope carved OFF, each a cheatsheet card with no graded step: the exact `@vN` action versions (they drift every few months — actions/checkout was v4 in 2024 and v7 by 2026; the course teaches what `checkout` *does*, never a version string); self-hosted runners; reusable/callable workflows and composite actions beyond one worked example; the GitHub Actions billing model; third-party marketplace actions; GitLab CI / Jenkins / CircleCI syntax (named once as "same shape, different YAML"); and actually provisioning cloud infrastructure (that is `cloud`'s and `ship`'s).

Path position: **after `git`, `test`, `docker` and `ship`** — it orchestrates all four and re-teaches none. Ideally after `cloud` too, so U7 (deploying from the pipeline) can borrow `cloud`'s staging/prod and rollback vocabulary rather than inventing it; if `cloud` isn't built yet, U7 stands alone and cross-references later. Level Intermediate.

## Size
Target 8 units, ~36 items (about 20 shell/cisim lessons, ~7 concept screens folded into those, 2 projects, 7 quizzes), modelled at the built-course rate. **Credits restate the finished minutes, not the stub's guess.** Stub says `plannedCredits: 5 {ops 3, qa 2}`; likely lands **4–5**, and the ops/qa split is honest (a pipeline is Operations, but "the gate that decides a change is safe to release" is exactly the QA discipline `test` and `debug` teach). Set the number and the apportionment once the lessons exist; drop `plannedCredits` to match. Four credits already moves Operations toward the Junior DevOps floor; five is better if the minutes justify it.

## Engine needs
`cisim.js`, a new dependency-free `<script>` loaded after `shell.js`, `gitsim.js` and `dockersim.js` (it composes all three). Expect it SMALLER than gitsim/dockersim — perhaps ~1,200–1,500 lines — precisely because it delegates: steps run real commands through the existing engines; cisim only parses workflows, decides what triggers, runs jobs in order, and records the result.

HOW IT PLUGS IN: the gitsim/dockersim precedent, unchanged. `cisim.js` registers no new *user* command the learner types constantly — instead it hooks the git event. Runner state (workflow definitions parsed from `.github/workflows/*.yml`, the list of runs, each run's jobs/steps/artifacts/logs, branch-protection rules) is plain JSON on the filesystem root (`fsRoot.ci`), so `snapshot` gives `T.before` for free. Lessons are `kind: "shell"`; workflows are real editor tabs (the runner multi-tab change shipped for Docker already writes non-script tabs into the FS — a `.github/workflows/ci.yml` tab Just Works).

THE ONE DESIGN DECISION FOR ERIC — how a pipeline is triggered:
- **Recommended: events fire from real sim actions.** A `git push` (gitsim) to a branch fires every workflow whose `on: push` matches; the run happens synchronously and its result is recorded before the shell prompt returns, so a checkpoint can read it. `workflow_dispatch` fires from a `gh workflow run <file>` command (a tiny `gh` shim cisim registers). This is the most honest model — the learner pushes and the pipeline goes green or red, exactly like real life — and it makes the trigger itself gradable ("why didn't the deploy run on this branch?").
- Alternative: an explicit `ci run` command the learner invokes. Simpler to build, but it teaches a fiction (real CI is never manually kicked per push) and can't grade trigger conditions. Rejected unless the push-hook proves too invasive to gitsim.
- `pull_request` events need a PR concept gitsim doesn't have today. Recommendation: add a minimal `gh pr create`/`gh pr merge` to the `gh` shim (branch → base, a mergeable flag, required-checks gate), enough to teach "required checks block the merge." Scope this as part of cisim, not a gitsim change.

WHAT IT MUST MODEL (~est. lines):
- **Workflow YAML parser** — reuse dockersim's Compose YAML-subset parser (maps, lists, scalars, quoted strings, `${{ }}` expression strings kept as text). `on` (push/pull_request with branch filters, workflow_dispatch), `jobs`, `runs-on` (recorded, not enforced), `needs`, `steps` (`uses` vs `run`), `if`, `env`, `strategy.matrix`, `continue-on-error`, `environment`, `secrets`/`vars` references. (~200)
- **Expression evaluator** — a small, SAFE evaluator for `${{ }}`: `github.ref`, `github.event_name`, `matrix.*`, `env.*`, `secrets.*`, `needs.<job>.result`, `success()`/`failure()`/`always()`, `==`, `!=`, `&&`, `||`, string literals. No arbitrary JS — a tokeniser + tiny precedence parser, so a wrong `if:` is a graded bug, not an eval hole. (~250)
- **Job scheduler** — topological order over `needs` (cycle = config error, gradable); a job runs only if its `needs` succeeded and its `if` is true, else it is `skipped`; matrix expands one job per combination; a fresh workspace per job (a gitsim checkout of the triggering commit); job result = first failing step unless `continue-on-error`. (~250)
- **Step runner** — `run:` steps execute real `shell.js`/`gitsim`/`dockersim` command lines against the job workspace and take their honest exit code (non-zero fails the job); `uses:` steps are a small MODELLED action table (checkout, setup-node, cache, upload-artifact, download-artifact, and a generic deploy action) — the fakes are payloads (what setup-node "installs"), never rules (a failing test still fails). Secret values are masked to `***` in logs. (~250)
- **Artifacts & cache** — artifacts uploaded by one job and downloaded by another job in the same run (they do NOT cross runs); cache keyed by a string, hit/miss recorded, persists across runs on the sim FS. The artifact-vs-cache distinction is a checkpoint. (~120)
- **Branch protection & the `gh` PR shim** — a rule requiring named checks green before merge; `gh pr create`/`merge` honoring it; a merge blocked by a red required check is the CI payoff. (~150)
- **CLI/output** — a compact run view (`✓ build`, `✗ test`, `- deploy (skipped)`), `gh run list`/`gh run view`, log lines per step. Real Actions logs are huge; keep to the BuildKit-compact style dockersim already uses. (~150)

TEST-SIDE HELPERS added to T: `T.runs()` (all runs, newest last), `T.run(n)` → `{ event, ref, status, jobs }` where each job is `{ name, status: "success|failure|skipped", steps: [{ name, status, exitCode }] }`, `T.lastRun()`, `T.artifact(name)` → `{ present, files }`, `T.cacheHit(key)`, `T.deployed(env)` → `{ ref, from }`, `T.merged(branch)` → boolean, plus the existing `T.ran`, `T.said`, `T.before`. Grading principle, stated in the first brief: **grade what the pipeline DID** — `T.run(1).jobs.deploy.status === "skipped"` on a feature branch — never a regex on the workflow file.

WHAT IT SKIPS, each named in a brief or cheatsheet: real runners and network; container-based `services:`; concurrency groups and cancellation; OIDC cloud auth; step outputs beyond `needs.*.result`; the full expression function set; GitHub's own API beyond the tiny `gh` shim.

BUILD ORDER: freeze the command/`gh` surface and write `tools/test-cisim.js` BEFORE the engine — the contract-first discipline that caught the real bug in gitsim, dockersim and the warehouse. Then wire `cisim` into `validate.js` as a new phase-0 engine test, and add a runner probe that runs one synthetic workflow end to end in Chromium.

## Teachable today
Honest answer: the 7 quizzes and 8 cheatsheets (the quiz kind renders `code:` blocks, so "why did this job get skipped?", "which `if:` runs only on main?", "artifact or cache here?" are gradable now and front-load the Recall bank). Everything with a running pipeline needs `cisim.js`. The course does not ship until the engine does — no quiz-only CI course.

## Overlaps
CI/CD sits on top of four built courses and orchestrates each rather than re-teaching it.
1. **Git & Version Control.** Reuse gitsim wholesale — checkout, branches, the push that triggers the run. CI adds the trigger and the gate; it never re-explains a commit.
2. **Testing Fundamentals.** `test` teaches how to write and reason about a test. CI *runs* the suite as a required gate and grades "a red suite blocks the merge" — it never re-teaches assertions or coverage. The QATesting link is the whole point of the ops/qa credit split.
3. **Docker & Containers.** `docker build`/`push` are dockersim commands used as pipeline steps. CI never re-teaches layers or the registry; it automates them. The `docker` course explicitly carved "building images in CI" off to here.
4. **Deploying Your App.** `ship` teaches one manual deploy, env vars (U2), build-vs-run (U3), rollback by hand. CI's CD unit AUTOMATES that deploy and references those ideas by name; it never re-argues what an env var is or why a build artifact differs from source.
5. **Web Security Basics, U5 (secrets).** CI's secrets lesson extends it — masking in logs, `secrets.*` vs `vars.*`, why a secret must never be `echo`ed — and never re-argues why secrets matter.
6. **Cloud Platforms (sibling stub).** Deploying TO staging/prod, choosing blue-green vs canary, and rollback strategy belong to `cloud`; CI's job is to *drive* that deploy on a green pipeline. If `cloud` ships first, U7 borrows its vocabulary; if not, U7 stands alone and they cross-reference later.

## Units

### 1. Unit 1 — What CI is, and your first workflow
The feedback loop: catch it in two minutes on a push, not two days after merge. A pipeline is the checklist you already run by hand, automated and triggered by an event.
Lessons: what CI/CD means and why (concept); anatomy of a workflow — `on`, `jobs`, `runs-on`, `steps`, `uses` vs `run` (concept + first `ci.yml`); write a workflow that checks out and runs the tests on every push, and watch it go green; break a test and watch the same push go red.
Graded how: `T.lastRun().status` is `success` then `failure` after the learner introduces a failing test; `T.run(n).jobs.test.steps` shows the failing step and its non-zero exit. The workflow file is a real editor tab.

### 2. Unit 2 — Stages and gates
Lint, then test, then build — and nothing merges until all three are green.
Lessons: multiple jobs and `needs` ordering (a DAG, not a list); a failing early job skips the ones that need it; `continue-on-error` and the green-but-broken trap; branch protection requiring named checks before merge.
Graded how: `T.run(n).jobs.build.status === "skipped"` when `test` failed; a `gh pr merge` blocked while a required check is red, allowed once green (`T.merged("feature") === false` then `true`). A checkpoint plants a `continue-on-error: true` on a failing step and asks why the pipeline is "green" — the misconception killed by reading the run, not the file.

### 3. Unit 3 — Matrix and caching
Test on three Node versions at once; don't reinstall the world every run.
Lessons: `strategy.matrix` expanding one job per combination; a matrix leg failing fails the run; caching dependencies keyed on a lockfile hash, and cache hit vs miss; why a cache must never change the *result*, only the speed.
Graded how: `T.runs` shows N matrix jobs; `T.cacheHit(key)` false on the first run, true on the second; a checkpoint proves a poisoned cache (wrong key reused) is a bug by making a test see stale deps.

### 4. Unit 4 — Artifacts: build once, use later
The build output is produced in one job and consumed in another — not rebuilt.
Lessons: `upload-artifact` / `download-artifact` between jobs of one run; artifacts do not cross runs (cache does); artifact vs cache — when to reach for which.
Graded how: a `deploy`/`package` job that reads the artifact the `build` job uploaded; `T.artifact("dist").present`; a checkpoint where `build` is skipped and the downstream job correctly fails "artifact not found," diagnosed from the run.

### 5. Unit 5 — Secrets and environments
Configuration and credentials the pipeline needs, without leaking them.
Lessons: `secrets.*` masked in logs (an `echo "$TOKEN"` prints `***`); `secrets` vs `vars`; `environment:` as a named target with its own protection and required reviewers; per-environment values.
Graded how: `T.run(n)` log lines show the secret masked; a job targeting a protected `environment` pauses for approval and only then deploys (`T.deployed("production")` empty until approved). Extends `sec` U5; never re-argues secret hygiene.

### 6. Unit 6 — Continuous delivery: deploying from the pipeline
Green on main means it ships — to staging first, then prod behind a gate.
Lessons: a `deploy` job gated `if: github.ref == 'refs/heads/main'` (so feature branches never deploy); staging on every main push, prod behind a manual approval; the deploy step consumes the built artifact; rollback = redeploy the previous good artifact/tag.
Graded how: `T.run` on a feature branch shows `deploy` skipped; on main, `T.deployed("staging").ref` is the new commit; prod stays empty until approval; a rollback checkpoint redeploys the prior artifact and `T.deployed("production").from` points at it. References `cloud`/`ship` for the deploy target.

### 7. Unit 7 — When the pipeline itself is the problem
Flaky tests, slow pipelines, and reading a red run you didn't write.
Lessons: reading a failed run top-down (which job, which step, which exit code) — the `debug` course's "read the error first," applied to CI; a flaky test that fails one matrix leg intermittently and why "re-run until green" is a trap; ordering and caching to cut pipeline time; required vs optional checks.
Graded how: given a red run, a `pick`/`predict` on the root-cause job and step (run-verified against `T.run`); reorder jobs / add a cache so a modelled pipeline "time" drops below a bound. Concept-heavy, ties to `debug`.

### 8. Unit 8 — Two projects
PROJECT 1 (`cicd-u8-p1`, shell, ~9 checkpoints): build the full CI pipeline for a small app from an empty `.github/workflows/` — lint + test + build with `needs`, a Node matrix, dependency caching, an uploaded artifact, and branch protection so a red suite blocks the merge. Graded entirely through `T.run`/`T.merged`/`T.artifact`.
PROJECT 2 (`cicd-u8-p2`, shell, ~8 checkpoints): turn it into CD — deploy to staging on green main, gate prod behind approval, wire the deploy to the built artifact, then perform a rollback after a bad deploy. Graded through `T.deployed`/`T.run`.

## Projects
- Project: Ship it automatically (cicd-u8-p1) — a complete CI pipeline that gates merges on lint, test and build across a matrix, with caching and an artifact.
- Project: Deliver and roll back (cicd-u8-p2) — CD to staging and gated prod from the same pipeline, and a rollback you perform after a deploy goes bad.

## Risks
- **Facts drift.** Action versions, default runner images and UI change constantly. Mitigation: grade the *mechanism* (a red gate blocks a merge; an artifact crosses jobs but not runs; an `if` scopes a deploy), never a version string or a screenshot; any version figure lives in a cheatsheet with a dated source and never in a checkpoint. Same rule the `web` course used for HTTP/3 adoption numbers.
- **Engine scope creep.** GitHub Actions is enormous. Mitigation: the WHAT-IT-SKIPS list is the contract; `test-cisim.js` freezes the surface before the engine exists; anything not needed by a graded step is a cheatsheet line.
- **Overlap density.** Four built courses feed this one. Mitigation: every unit names the course it orchestrates and its boundary; no graded step re-teaches a commit, an assertion, a Docker layer or an env-var basic.
- **The push-hook is invasive to gitsim.** If firing workflows from `git push` proves to entangle gitsim, fall back to the explicit-`ci run` model for v1 and add the push-hook later; the units are written so the trigger mechanism is swappable.

## Sources
- GitHub Actions workflow syntax and events (docs.github.com/actions) — structure taught; versions treated as drift, not fact.
- Action version drift confirmed 2026-09-17: actions/checkout v7, actions/upload-artifact v7, actions/cache v6 are current, up from v4/v4/v3 in 2024 — the reason no `@vN` is ever graded. https://github.com/actions/upload-artifact ; https://github.com/actions/cache
- CI/CD concept framing (feedback loop, gates, artifacts vs cache, blue-green/canary deploy from a pipeline): standard practitioner material; strategy detail is owned by the `cloud` course.
- Precedent inside CodeLab: `docker-containers.md` (the shell-hosted simulator pattern and "grade the state, not the prose" rule this course extends).
