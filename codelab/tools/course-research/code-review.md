# Code Review — Reading Someone Else's Change

## Verdict
STANDALONE, SENIOR LEVEL, FIRST OF THE SIX. ~36 items / ~8h, `level: "Senior"`, id/prefix `review`.

WHY FIRST. Code review is the senior skill the 2026 sources name most often, and the one the
AI shift made more important: generated first drafts made pull requests bigger and review
the bottleneck. Every ladder read for `senior-curriculum.md` lists it (GitLab: "maintaining
and advocating for these standards through code review"; Dropbox IC3: "constructive feedback
in code reviews and design discussions"; Google L5: "review designs of others").

WHY STANDALONE. It is a different act from writing code. CodeLab's loop today is "make the
red checks green" in your own file. Review is the opposite: someone else's change, no editor,
and the job is to find what is wrong and say it usefully. No existing course grades that.

WHAT THE RESEARCH CHANGES ABOUT THE COURSE.
- Real reviews find fewer bugs than people expect. Microsoft's study of hundreds of review
  comments (Bacchelli & Bird, ICSE 2013) found defect comments were a small share, mostly
  small low-level logic issues; the bigger outcomes were knowledge transfer, team awareness
  and better solutions, and **understanding the change's context** was the key difficulty.
  So the course spends a unit on understanding a change before judging it, and does not
  pretend every diff hides a bug: some lessons have **no blocking defect**, and the right
  verdict is Approve.
- Review quality collapses with size and speed. The SmartBear/Cisco study (2,500 reviews,
  3.2M lines) recommends 200–400 lines per review over 60–90 minutes, with defect discovery
  dropping above ~450–500 lines per hour. Lessons stay under 200 changed lines; the AI unit
  teaches asking for a large change to be split.
- Google's reviewer guide orders what to look for: design first, then functionality,
  complexity, tests, naming, comments, style. The course follows that order, and grades
  nits as nits: a style comment on a design problem is a miss.

## Size
36 items, ~8h. 8 units: 6 review lessons per unit on average, a quiz per unit, 2 projects.
Planned credits 4: `{ qa: 2, arch: 2 }`.

## Engine needs
ONE NEW LESSON KIND, `kind: "review"`, ~350–450 lines, no dependencies. Everything else
(quizzes, concept lessons, the fix-it follow-ups) runs on engines that exist.

(a) THE DIFF VIEW (app.js, `renderReview`). Input is two file maps, `base` and `head`.
The view shows a unified diff per file with a few lines of context, line numbers on both
sides, and "expand context" to read further. Lines are tappable on a phone. Compute the diff
with a small LCS line diff in the new module (gitsim.js has one; extracting it is fine if it
stays DOM-free), so authors write two versions of a file, never a hand-made diff.

(b) COMMENTS. Tap a line or drag a range, then pick a **category** (bug, security, design,
tests, naming/readability, nit) and a **severity** (blocking / non-blocking), and type a
comment. Finish with a **verdict**: Approve, Comment, or Request changes.

(c) THE KEY (`findings`) AND GRADING (`reviewkit.js`, DOM-free so validate.js can require
it; NOT `review.js`, which is Recall's scheduler).
```js
{
  id: "review-u3-2", kind: "review", title: "…", mins: 12, xp: 20,
  brief: "What the change is for, from the author's point of view.",
  base: { "cart.js": "…" }, head: { "cart.js": "…" },
  findings: [
    { id: "f1", file: "cart.js", lines: [14, 16], side: "head", category: "bug",
      severity: "blocking", why: "Empty cart divides by zero: total / items.length." }
  ],
  decoys: [
    { file: "cart.js", lines: [22, 22], why: "Looks like an off-by-one, but the loop is inclusive on purpose: …" }
  ],
  verdict: "request",          // "approve" | "comment" | "request"
  rubric: ["Names the input that breaks it", "Suggests a fix or a test"]
}
```
Grading, all of it EVIDENCE except the comment text:
- **Found**: a comment overlapping a finding's line range, with the finding's category
  (one adjacent category allowed where the key says so, e.g. bug↔tests).
- **Severity** right or wrong is reported, but only blocking findings gate the lesson.
- **False alarms**: comments on decoys or on lines with no finding. A blocking comment on
  clean code counts double, because it is what slows a real team down.
- **Pass**: every blocking finding found, verdict right, at most 1 false alarm
  (0 for project lessons).
- **Comment text** is self-checked against the `rubric` after submitting and reported as a
  CLAIM, never mixed into the graded result (the concept.js / Recall rule).
After submitting, every finding and decoy is revealed on the diff with its `why`.

(d) VALIDATOR (phase 0, no browser).
- Every finding's and decoy's line range exists on its side of the diff; they never overlap.
- The KEY passes its own lesson (the "solution must pass" rule), an EMPTY review fails,
  and **commenting on every line fails** (the "starter must not pass" rule; this is the
  precision guard).
- At least a quarter of the course's findings sit on **unchanged context lines**, not
  only on `+` lines, so "only read the green" never works as a strategy. (The same idea as
  the quiz length-tell gate: block the shortcut in the build.)
- At least 3 lessons in the course have verdict `approve` with no blocking finding.

## Status (2026-10-04)
BUILT: the `review` lesson kind (`reviewkit.js`, `tools/test-reviewkit.js`, the review screen in
app.js, phase 0 gates) and Units 1–3 (13 items: 2 concept lessons, 8 review lessons, 3 quizzes).
NOT YET: Units 4–8 and both projects, and the two `js` "fix what you flagged" follow-ups
(Units 3 and 6). Built differently from the plan below: decoys must sit two lines from any
finding (one line of slack would make a comment between them ambiguous), and an approve lesson
names a non-blocking finding in `mustFind`, so tapping Approve is never the whole lesson.

## Teachable today
~10 OF 36 ITEMS SHIP ON TODAY'S ENGINES.
- Unit 1 (why review exists, what to look for) is concept lessons + a quiz.
- Every unit quiz.
- The two "now fix it" follow-ups in Units 3 and 6 are ordinary `js` lessons whose starter
  is the reviewed `head` and whose checks are the findings as tests.
- Interim option: a concept `pick` ask with a code block ("which line is the bug?") can teach
  spotting before the review kind exists, but it is a recognition test, so only use it as a
  stopgap.
Everything else waits on the review kind.

## Overlaps
- Debugging & Diagnosis (`debug`): finding a bug in code you can run vs. spotting it by
  reading. Review lessons can't run the code; that is the point. Link, don't repeat.
- Testing Fundamentals (`test`): its mutation idea comes back in Unit 5 ("does this test
  fail without the fix?").
- Web Security Basics / Authentication (`sec`, `auth`): Unit 6 reviews the vulnerabilities
  those courses taught learners to exploit and fix; here they have to catch them in someone
  else's diff.
- Git (`git`): diffs are read here, made there.
- Academy's System Design track, Unit 22 "Verification at AI Speed": the quiz version of
  Unit 7's ideas. Link to it from Unit 7's brief.

## Units

### 1. U1 — What review is for (concept + quiz)
What reviews actually catch (fewer bugs than expected; knowledge and context matter more),
the cost of size and speed, what to look at first (design → functionality → complexity →
tests → naming → style). No diffs yet.

### 2. U2 — Understand the change before you judge it
Summarize a diff in one sentence (graded `pick` after the read), find the behavior change
hidden in a refactor, spot the file that should have changed but didn't. First review
lessons, all small, one of them a clean Approve.

### 3. U3 — Correctness
Off-by-one, empty and missing input, error paths that swallow failures, a missing `await`,
mutation of a shared object. Ends with a `js` follow-up: fix what you flagged.

### 4. U4 — Design and complexity
Code in the wrong layer, duplication of something that already exists in the base (the
finding is on an unchanged line), a function doing three jobs, names that lie. Teaches
blocking vs. non-blocking: most of this unit is non-blocking.

### 5. U5 — Tests in review
A test that can't fail, a test that checks the mock, a missing edge case, a change with no
test at all. Grading leans on the `tests` category.

### 6. U6 — Security and data
Unescaped output, string-built SQL, a missing authorization check on one of four routes,
a secret in a config file, logging personal data. `js` follow-up: fix the auth check.

### 7. U7 — Reviewing AI-generated changes
Plausible but wrong: a call to a function that doesn't exist in the base, a confident
comment that disagrees with the code, a change twice the size it needed to be (the right
verdict is "split this"), copy-pasted error handling that hides failures.

### 8. U8 — Giving the review
Severity labels, writing a comment someone can act on, approving with nits, when to
talk instead of type. Also the author's side: responding to a review. Comment text here
is rubric-checked (a claim), so this unit's grading rests on findings and verdict.

## Projects
- U4 project — a 150-line feature PR to a small inventory API: two blocking findings
  (one on a context line), three non-blocking, two decoys. Zero false alarms allowed.
- U8 capstone — a ~200-line AI-drafted PR adding search to the bookmarks app the Testing
  course's capstone uses: one security finding, one correctness finding, a missing test,
  and a section that should be split out. Ends with a written review summary (self-checked
  against a rubric).

## Risks
- GUESSING BY VOLUME. Without the false-alarm penalty, commenting everywhere wins. The
  precision guard in the validator and the double cost of blocking comments on clean code
  are both required, not optional.
- LINE-RANGE PEDANTRY. A learner who flags line 15 when the key says 14–16 is right; one
  who flags line 13 probably is too. Allow one line of slack outside the range, and say so
  in the brief.
- THE KEY MISSES A REAL BUG. A learner who finds a genuine bug that isn't in the key gets a
  false alarm. Mitigation: every lesson is reviewed by a second pass whose only job is to
  find bugs the key missed; add them as findings or fix them in the code.
- TOO MANY BUGS PER DIFF. Real diffs rarely have five defects. Keep it to 1–3 findings per
  lesson outside the projects, and keep the clean-Approve lessons.
- PHONE LAYOUT. A diff with two line-number columns is tight at 390px. Use unified (not
  split) diffs and wrap long lines; screenshot it on a phone viewport before shipping.

## Sources
- Bacchelli & Bird, "Expectations, Outcomes, and Challenges of Modern Code Review", ICSE 2013: https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/ICSE202013-codereview.pdf
- SmartBear / Cisco code review case study: https://static1.smartbear.co/support/media/resources/cc/book/code-review-cisco-case-study.pdf, https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/
- Google, "What to look for in a code review": https://google.github.io/eng-practices/review/reviewer/looking-for.html
- GitLab Senior Backend Engineer: https://handbook.gitlab.com/job-families/engineering/development/backend/senior/
- Dropbox Engineering Career Framework: https://dropbox.github.io/dbx-career-framework/
- Review as the 2026 bottleneck: https://medium.com/@yalovoy/the-senior-engineers-job-in-2026-is-code-review-not-code-writing-f804036c55ab, https://newsletter.pragmaticengineer.com/p/ai-tooling-2026
