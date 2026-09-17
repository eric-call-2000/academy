# CI/CD Pipelines — "the robot that says no" (id: `cicd`, prefix: `cicd`, icon 🔄, level Intermediate, 7 units)

## Verdict
STANDALONE, on a new simulator `cisim.js` hosted on `shell.js` and **on top of `gitsim.js`** — because the thing that makes CI real is that a `git push` starts it.

This is the second of the two courses still blocking **Junior DevOps Engineer**. That sheet's numbers are all met already (42 credits needed, catalog holds 81; ops 10 needed, holds 14; be 6/12; qa 4/8). It is blocked purely by two required names: `cicd` and `cloud`. Required courses cannot be substituted by credits — that is the design — so the sheet stays red until both exist.

**Why not a real runner.** GitHub Actions runs on GitHub's machines. There is no browser-embeddable Actions runtime, and the catalog's invariants (offline PWA, no build step, phone-first, every solution and starter re-run in Chromium on every build) rule out anything heavier. The same reasoning that produced `gitsim` and `dockersim` applies unchanged.

**Why a simulator is honest here.** What a junior is screened on in CI is a set of RULES, and they are all state transformations a simulator can enforce exactly:

- a push to a matching branch starts a run; a push to a non-matching branch does not
- **every job starts on a fresh machine** — this is the single biggest source of confusion, and it is why `actions/checkout` exists, why the cache exists, and why artifacts exist
- jobs run in parallel unless `needs` orders them; `needs` failure skips the dependent
- a step's non-zero exit fails the job, and the steps after it do not run
- a cache is keyed and restorable and never a way to pass data between jobs; an artifact is
- a secret is masked in the log, and is not available to a pull request from a fork
- a required status check is what actually blocks the merge — the pipeline is not advice

What must be FAKED is the payload: what `npm ci` downloads, how long a test suite takes. Same design rule as Docker, stated in the first brief: **fake payloads, never rules.**

**Why not a YAML-linting course.** Reading a workflow file teaches the half that never bites. The half that bites — the job that passes locally and fails in CI because nothing checked out, the cache that "works" until a dependency changes, the artifact you forgot to upload, the secret printed into a public log — only appears when you run it and read what came back.

**Scope carved OFF, and said so in the blurb:** Jenkins/GitLab/CircleCI syntax (the concepts transfer; the YAML does not), self-hosted runners, OIDC and cloud credentials, container/Kubernetes orchestration and the blue-green / canary / rolling strategies (all `cloud`'s territory), monorepo build graphs, and release/semver automation. Each gets a cheatsheet card, never a graded step.

**Path position:** after Git, Testing Fundamentals, Deploying Your App and Docker. It leans on all four: a repo with branches and a push (Git), a suite that passes or fails and an exit code (Testing, CLI), build vs run time and environment configuration (Deploying), and an image built from a Dockerfile (Docker). Level Intermediate, not the stub's Advanced — nothing here is advanced once those are done.

## Size
**36 items, ~7.4h modelled → 4 credits**, split **ops 3 / qa 1**.

The stub guessed `plannedCredits: 5` with `{ops: 3, qa: 2}` before any content existed. Credits restate content, so the number comes down to what actually gets written. Four still clears everything the sheet needs: Operations 14 → 17 against a floor of 10, and `cicd` is then one of the last two required names.

For scale, the existing market — and why this is longer:

| Course | Length | Graded? |
|---|---|---|
| [Codecademy — Learn GitHub: Actions and Codespaces](https://www.codecademy.com/learn/learn-github-actions-and-codespaces) | under 1 hour | no |
| [Codecademy — DevSecOps in CI/CD](https://www.codecademy.com/learn/ext-courses/devsecops-in-continuous-integration-delivery-ci-cd) | about 1 hour | no |
| [Boot.dev — Learn CI/CD with GitHub Actions, Docker and Go](https://www.boot.dev/courses/learn-ci-cd-github-docker-golang) | multi-hour | yes, but Go |

Both Codecademy courses are explainers. This one makes you write the workflow, push, watch it fail, read the log, and fix it — which is why it is seven times the length.

## Engine needs
`cisim.js`: a new dependency-free `<script>` after `shell.js`, `gitsim.js` and `dockersim.js`. It can **reuse `dockersim`'s exported `parseYaml`** (`window.CODELAB.docker.parseYaml`) rather than shipping a second YAML subset — that parser already handles maps, lists, scalars and quoted strings, which is the whole of a workflow file minus anchors. Expect ~1,100 lines: smaller than dockersim, because there is no image store or layer cache to model.

**How it plugs in,** the gitsim/dockersim precedent unchanged. `cisim.js` registers a `gh` command (`gh run list`, `gh run view`, `gh run watch`, `gh workflow list`) into `shell.js`'s command table, and hooks `gitsim`'s push so that a push evaluates the workflows in `.github/workflows/` and produces runs. CI state — workflows, runs, jobs, steps, the artifact store, the cache store, secrets, and branch protection — is plain JSON at `fsRoot.ci`, so a deep copy of the filesystem is a deep copy of the CI server and `T.before` comes for free. Its `snapshot` must compose dockersim's (which already composes gitsim's), so a lesson can use all three engines.

**What it must model** (~est. lines):

- **Workflow file model** — `name`, `on` (push / pull_request / workflow_dispatch / schedule) with `branches` and `paths` filters, `env`, `jobs`, `runs-on`, `needs`, `if`, `strategy.matrix`, `steps` with `uses` / `run` / `with` / `env` / `id` / `continue-on-error`. Validation errors that read like the real ones, because a broken workflow file is a lesson. (~220)
- **The run engine** — trigger matching, job graph from `needs` (parallel by default, topological where ordered), matrix expansion into one job per combination, per-job **fresh filesystem** (this is the rule the whole course hangs on), step execution through `shell.js` against that filesystem, first non-zero exit fails the job and skips the rest, `continue-on-error`, job `conclusion` (success / failure / skipped / cancelled), run conclusion. (~350)
- **Actions table** — a small built-in set, each a declared behaviour rather than real code: `actions/checkout` (materialise the repo at the triggering commit — and *without* it the machine is empty, which is the first lesson), `actions/setup-node` (put `node`/`npm` on PATH), `actions/cache` (restore/save by key, with `cache-hit` output and the key-miss → restore-keys fallback), `actions/upload-artifact` and `actions/download-artifact`. Anything else is "action not found", honestly. (~200)
- **Artifact and cache stores** — artifacts scoped to a run and readable by later jobs; caches scoped to the repo and readable by later runs. The distinction is graded directly: use a cache to pass data between jobs and it silently does not arrive. (~120)
- **Secrets and masking** — `secrets.NAME` resolves in `with`/`env`, the value is replaced with `***` everywhere it appears in a log, and a secret is absent for a `pull_request` from a fork. A lesson makes the learner try to print one. (~80)
- **Status checks and protection** — a branch can require named checks; `gh pr merge` refuses while a required check is failing or pending. This is the one that makes the point that CI is a gate, not a report. (~130)

`tools/test-cisim.js` — pure Node, in the style of `test-gitsim.js` and `test-dockersim.js`, written against this document before the engine, and wired in as a `validate.js` phase. It must pin: fresh-machine-per-job, needs ordering and skip-on-failure, matrix expansion, cache-vs-artifact semantics, secret masking, and the required-check gate.

## Syllabus — 7 units, 36 items

| Unit | Items | What it grades |
|---|---|---|
| **1 · What CI actually is** | 5 | The first workflow file, `on: push`, one job, one step. A push starts a run; `gh run view` reads it. The empty machine: a `run` that works locally fails in CI until `actions/checkout`. Why merging often is the point. |
| **2 · Jobs, steps and the fresh machine** | 5 | `runs-on`, `uses` vs `run`, multi-line `run`. Two jobs run in parallel; `needs` orders them; a file written in job A is simply not there in job B. The exit code that fails a job, and the steps that then never run. |
| **3 · Making it useful: tests, lint, matrix** | 5 | Wire the real suite in so a broken commit goes red. Lint as a separate job so both failures show at once. `strategy.matrix` across Node versions, and reading which cell failed. |
| **4 · Caching and artifacts** | 5 | `actions/cache` keyed on the lockfile, a hit and a deliberate miss. `upload-artifact` / `download-artifact` to move a build between jobs — after trying the cache for it and watching it not arrive. |
| **5 · Secrets, environments and triggers** | 5 | A masked secret, and what happens when you try to echo it. `pull_request` vs `push` triggers, branch and path filters, `workflow_dispatch`. Environment-specific config. |
| **6 · The gate: status checks and a red build** | 5 | A required check blocking a merge. Reading a failing log to the actual error. Re-running one job. `if: failure()`. Then the rollback: revert, push, watch it go green. |
| **7 · Two projects** | 6 | **Ship it:** build a complete pipeline for the shop — install, lint, test on a matrix, build, upload the artifact, gate the merge. **Fix it:** a pipeline broken in six ways (no checkout, cache used as an artifact, a secret in a log, a missing `needs`, a filter that never matches, a green build that tests nothing) to diagnose and repair. |

Six lessons at 10 min, two projects at 30, one quiz per unit at 5 → 28 × 10 + 2 × 30 + 7 × 5 = 375 min ≈ 6.25h. Adding the two extra items in Unit 7 and the heavier Unit 3 lands it at **~7.4h → 4 credits**.

## Authoring traps this course will hit
Carried forward from Docker and the CLI course, because they each cost a cycle:

- A lesson's editor tab has **one value for the whole run**, so "write it broken, push, then fix it and push again" needs two files, not one edited file.
- Checkpoints only ever see the **final** state. Anything an intermediate step proves must be asserted from the transcript, not from the filesystem.
- `T.ran` matches the command with trailing comments stripped; `T.typed` matches the raw script. Use `typed` for "write it this way", `ran` for "run this".
- A `/* … */` comment containing `**/` ends early.
