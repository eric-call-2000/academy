# CodeLab Senior — Plan (honest senior sheets + six senior courses)

Design doc for adding senior-level courses and senior job sheets to [CodeLab](codelab/).
Written 2026-10-04. **Status: Phase 1 is built** — the Architecture category, the senior-sheet model, validator rules, the board's senior section, the six senior courses as roadmap stubs and the four senior sheets. Phase 2 is built: the review lesson kind, and all eight units of Code Review (38 items, 2 credits).

## At a glance

- **Six senior courses**: Code Review, On-Call & Incidents, System Design in Practice,
  Refactoring Legacy Code, Changing Live Systems, Testing Strategy at Scale. Each is a
  normal CodeLab course (`level: "Senior"`) that pays credits like any other.
- **Four honest senior sheets** to start: Senior Backend, Senior Full-Stack, Senior
  Frontend, Senior DevOps / SRE. Each one **includes its junior sheet**, adds the senior
  courses, and lists **off-platform requirements** that CodeLab can never award: years of
  shipped work, a project you led, on-call, mentoring.
- **A senior sheet never turns fully green from coursework.** The board says plainly what
  is left: "Coursework complete. Still needed: about 5 years of shipped work, a project
  you led, on-call experience."
- **Senior lessons use a senior format**: vaguer briefs, hidden edge-case checks, messy
  starter code, fewer hints. Same problem, higher bar, the way interviews do it.
- **Build order**: (1) the sheet model, validator rules and board UI, with every senior
  course as a stub, so the sheets go live showing an honest gap; (2) Code Review, which
  needs one new lesson kind; (3) the rest, cheapest first.

## Why: what employers expect from a senior and not a junior

Summarized from public career ladders (Google, Dropbox, CircleCI, GitLab, Rent the
Runway), interview guides and 2025–26 hiring writing. Sources are at the end.

The gap is mostly **scope, judgment and other people**, not new technology. A junior
finishes a well-defined task with help. A senior takes a vague problem, turns it into a
plan, ships it without supervision, keeps it running in production and makes the team
better.

| # | Skill | Junior | Senior | CodeLab can grade it? |
|---|---|---|---|---|
| 1 | Scope and independence | Defined tasks, with guidance | Owns medium-to-large projects with little direction | Partly: vague briefs + hidden checks |
| 2 | System design | Implements someone else's design | Writes and reviews design docs, weighs trade-offs | Partly: concept lessons, labs |
| 3 | Code review | Receives reviews | Holds the team's quality bar through review | **Yes** |
| 4 | Debugging and production | Debugs their own code | On-call, postmortems, knows the service's error rates | **Yes** for diagnosis; real on-call, no |
| 5 | Unfamiliar code | Learns the codebase | Changes code they didn't write, safely | **Yes** |
| 6 | Tech debt and migrations | Not their call | Prices debt, migrates schemas without downtime | **Yes** for the mechanics |
| 7 | Testing strategy | Tests their own code | Decides what "safe to ship" means | **Yes** |
| 8 | Security judgment | Avoids known mistakes | Advocates for security in design and review | **Yes** (mostly Web Security + Auth already) |
| 9 | Interview bar | Gets a working answer | Raises edge cases and invariants unprompted | **Yes**, through lesson format |
| 10 | Communication | Asks good questions | Explains trade-offs to non-engineers | Weakly: rubric, self-graded |
| 11 | Mentoring | Is mentored | Mentors and raises others | **No** |
| 12 | Business impact | Builds what's assigned | Finds high-leverage work, pushes back | **No** |
| 13 | Years | 0–2 | Usually 5+ | **No** |

Recent shifts worth building around:

- **Review is the bottleneck.** With AI writing more first drafts, catching what
  generated code gets wrong is the most-cited senior skill in 2026 writing.
- **System design moved down a level.** Mid-level loops now include it, so the senior
  bar is driving the design and defending trade-offs.
- **The experience bar rose.** One 2026 analysis of postings reports close to 4 in 5
  senior roles asking for 5+ years, up from about half in 2024. Re-check this number
  before showing it in the app; it comes from one secondary source.

Rows 11–13 are exactly why the sheets carry off-platform requirements.

## Decisions to confirm

Each has a default, so the build can start without waiting on these.

| # | Decision | Default in this plan | Alternatives |
|---|---|---|---|
| 1 | **Honest senior sheets** | **Decided by the owner (2026-10-04): yes** | — |
| 2 | **Which sheets first** | Senior Backend, Full-Stack, Frontend, DevOps / SRE | Add Senior QA, Security, Data once their senior courses exist |
| 3 | **Years shown on the sheet** | "About 5 years of shipped work" | A range ("4–7 years"), or no number |
| 4 | **Self-reporting off-platform items** | **Off.** The sheet lists them; nothing is ticked | On, shown as claims in their own column, never merged with graded progress (the Recall rule) |
| 5 | **New credit category** | **Architecture** (`arch`) for design, review and change-safety work | Fold into existing categories (be / qa / ops) |
| 6 | **Name on the board** | "Senior" sheets in their own section under the junior ones | Mixed into one list by title |
| 7 | **First course** | Code Review | On-Call & Incidents (needs no new engine) |

## The honest senior sheet

### Data model (`positions.js`, `core.js`)

```js
window.CODELAB.definePosition({
  id: "sr-be", title: "Senior Backend Engineer", level: "senior",
  extends: "be",                      // every junior requirement carries over
  icon: "⚙️", color: "#4c3fbf",
  blurb: "Owns backend systems end to end: …",
  screen: "A system design you can defend, reviews that catch real defects, …",
  total: 61,
  min: { be: 12, data: 4, qa: 7, arch: 8 },
  required: ["review", "oncall", "design", "change", "refactor"],   // only what it ADDS
  offPlatform: [SENIOR_YEARS, SENIOR_LED, SENIOR_ONCALL, SENIOR_MENTOR]   // { id, label, why }
});
```

- `level: "senior"` puts the sheet in the senior section.
- `extends` copies the junior sheet's `required` list in, so the two can never drift.
  Credit floors are written out in full, not inherited.
- `offPlatform` lists requirements no course can meet. Each needs a `why` sentence.
- `total` and `min` follow the existing rules: required courses stack, and `total` is the
  required credits (stubs at their planned value) plus room for about one elective.

### On the board

- The coursework part works exactly like today's audit: credits, floors, required courses.
- Below it, an **Off-platform** list, each line marked **"CodeLab can't award this"**.
- When coursework is complete, the sheet says **"Coursework complete"** with the remaining
  off-platform lines. It never says "Qualified".
- Pinning a senior sheet as a goal works like a junior one. The "next best course" nudge
  only considers coursework.

### Validator rules (`tools/validate.js` phase 0b)

- A sheet with `level: "senior"` **must** have an `offPlatform` list that includes
  `years`. This keeps a senior sheet from ever being reachable from coursework alone.
- `extends` must name an existing junior sheet, and the merged `required` list must still
  pass the eight-course rule, the no-duplicates rule and the credits-fit-the-total rule.
- Every course a senior sheet adds must be `level: "Senior"`.
- `offPlatform` ids must be unique, and each needs a `label` and a `why`.

### Text that has to change

The `positions.js` header and the README both say *"every sheet is junior-level —
seniority comes from shipped work and years, not from coursework."* The principle stays
true; the wording becomes: *"Junior sheets can be met by coursework. Senior sheets
can't: they list the shipped work and years no course can award, and say so."*

## Senior lesson format

Applies to every lesson in a `level: "Senior"` course. These are the interview's
"same problem, higher bar" applied to lessons.

| Rule | How |
|---|---|
| Vaguer briefs | The brief states the goal and the constraints, not the steps |
| Hidden checks | New step flag `hidden: true`: the step runs on every Run but shows only "1 hidden check failed" plus its message, never its title, until the lesson is passed |
| Messy starters | Starters are realistic code with history: inconsistent names, dead code, a missing test |
| Fewer hints | At most 2 hints; no per-step solutions (`stepSolutions` not used) |
| Written decisions | Each project ends with a short decision record, self-checked against a rubric and reported as a claim, never mixed into the graded score |

## The six courses

All start as stubs (`stub: true`) so the sheets can go live in Phase 1 with an honest gap.
Planned credits use the existing model (one credit per two modelled hours).

| Course id | Title | Planned size | Planned credits | Engine | Research skill rows |
|---|---|---|---|---|---|
| `review` | 🔍 Code Review | **built**: 38 items, ~5h | 2: `{ qa: 1, arch: 1 }` (planned 4) | **`review` lesson kind (built)** | 3, 8, 9 |
| `oncall` | 🚨 On-Call & Incidents | ~32 items, ~7h | 4: `{ ops: 3, arch: 1 }` | shell + dockersim + cisim, today | 4 |
| `design` | 🏛️ System Design in Practice | ~36 items, ~8h, `theory: true` | 4: `{ arch: 4 }` | concept + labs (a few new labs) | 2, 10 |
| `refactor` | 🧹 Refactoring Legacy Code | ~30 items, ~7h | 3: `{ arch: 2, qa: 1 }` | `js` + `spec`, today | 5, 6 |
| `change` | 🔄 Changing Live Systems | ~32 items, ~7h | 4: `{ be: 2, data: 1, arch: 1 }` | `js` + `db`/`srv` patterns | 6 |
| `teststrat` | 🧪 Testing Strategy at Scale | ~30 items, ~7h | 3: `{ qa: 3 }` | `js` + `spec` + `T.mutate` | 7 |

`change` absorbs most of the Advanced API Design stub (`api`): versioning, deprecation and
backward compatibility. Leave `api` as a junior-level stub for REST/GraphQL basics, or
retire it; ask before retiring it.

Overlap with Academy's quiz track **System Design** (`sysdesign-curriculum.md`): that
track is the reading-and-quiz version; CodeLab's `design` course is the do-it version.
Its Unit 22, "Verification at AI Speed", is the closest match to Code Review; link to it
from Code Review's AI unit instead of repeating it.

## The four sheets (first draft)

Required courses are the junior list (via `extends`) plus these senior courses.

| Sheet | Extends | Adds | Off-platform |
|---|---|---|---|
| Senior Backend Engineer | `be` | review, oncall, design, change, refactor | years, led, oncall, mentor |
| Senior Full-Stack Engineer | `fs` | review, design, change, refactor, teststrat | years, led, mentor |
| Senior Frontend Engineer | `fe` | review, refactor, teststrat, design | years, led, mentor |
| Senior DevOps / SRE Engineer | `devops` | review, oncall, design, change | years, led, oncall, mentor |

Built with these numbers (planned credits for the stubs; revisit each when its course
is written and its credits are real):

| Sheet | Required credits | `total` | Floors |
|---|---|---|---|
| Senior Backend | 58 | 61 | be 12 · data 4 · qa 7 · arch 8 |
| Senior Full-Stack | 66 | 69 | fnd 12 · fe 8 · be 8 · qa 8 · integ 1 · arch 8 |
| Senior Frontend | 50 | 53 | fnd 12 · fe 10 · qa 8 · arch 6 |
| Senior DevOps / SRE | 51 | 54 | ops 13 · be 6 · qa 6 · arch 6 |

(Totals dropped by 2 when Code Review was written: it models at ~4.5h and pays
2 credits, not the planned 4.) Per the honesty rule, floors are set against what a senior
is screened on, not against what CodeLab holds.

## Build phases

1. **Sheets and stubs.** `arch` category, `level`/`extends`/`offPlatform` in `core.js`,
   validator rules, the board's senior section and off-platform list, six stub courses,
   four sheets, README + `positions.js` wording. All four sheets show as blocked by
   unwritten courses, which is honest.
2. **Code Review.** Build the `review` lesson kind first, then the course. See
   [`codelab/tools/course-research/code-review.md`](codelab/tools/course-research/code-review.md).
3. **On-Call & Incidents** and **Refactoring Legacy Code** — no new engine.
4. **Changing Live Systems**, **Testing Strategy at Scale**.
5. **System Design in Practice** — needs the most new labs.

Each course gets its own `codelab/tools/course-research/*.md` before it's built, like the
existing ones.

## Sources

- Google L3 vs L5: https://www.designgurus.io/answers/detail/what-is-l5-level-in-google, https://www.careerclimb.app/career-ladder/google-software-engineer
- Dropbox Engineering Career Framework: https://dropbox.github.io/dbx-career-framework/, https://dropbox.tech/culture/our-updated-engineering-career-framework
- CircleCI competency matrix: https://circleci.com/blog/7-steps-to-building-an-engineering-competency-matrix/, https://circleci.com/blog/why-we-re-designed-our-engineering-career-paths-at-circleci/
- GitLab Senior Backend Engineer: https://handbook.gitlab.com/job-families/engineering/development/backend/senior/
- Rent the Runway ladder (Camille Fournier, InfoQ): https://www.infoq.com/podcasts/platform-engineering-ladders/
- Public ladder collections: https://progression.fyi/, https://swyx.io/career-ladders
- Pragmatic Engineer, "What is a Senior Software Engineer in Big Tech?": https://newsletter.pragmaticengineer.com/p/what-is-a-senior-software-engineer
- Interview bars by level: https://spacecomplexity.ai/blog/software-engineer-interview-levels, https://dglearning.substack.com/p/the-modern-faang-interview-loop-what, https://dglearning.substack.com/p/system-design-just-moved-from-senior, https://www.techinterviewhandbook.org/behavioral-interview-senior-candidates/
- Experience requirements in postings: https://research.com/advice/what-job-postings-reveal-about-software-engineering-careers-skills-degrees-experience-employers-want, https://www.terminal.io/blog/senior-software-engineer-salary-vs-junior-software-engineer-salary-a-comprehensive-guide, https://hakia.com/careers/junior-to-senior/, https://www.dept.global/insight/junior-vs-mid-vs-senior-software-engineers-experience-skills-expectations/
- On-call and incidents: https://sre.google/workbook/on-call/, https://sre.google/workbook/incident-response/
- AI and review: https://medium.com/@yalovoy/the-senior-engineers-job-in-2026-is-code-review-not-code-writing-f804036c55ab, https://newsletter.pragmaticengineer.com/p/ai-tooling-2026, https://www.aiexposure.org/analysis/coding-jobs-ai-2026
- Stack Overflow 2025 survey: https://survey.stackoverflow.co/2025/developers, https://survey.stackoverflow.co/2025/ai

The career-ladder pages themselves (Dropbox, CircleCI, progression.fyi) could not be
fetched directly while writing this; their content above comes from search summaries.
Read them in full before setting the final sheet floors.
