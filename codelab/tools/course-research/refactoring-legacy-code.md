# Refactoring Legacy Code — Change It Without Breaking It

## Verdict
STANDALONE, SENIOR LEVEL, THIRD OF THE SIX. ~20 items / ~4–5h, `level: "Senior"`, id/prefix `refactor`.

WHY SENIOR. "Changes code they didn't write, safely" is row 5 of the senior/junior table in
`senior-curriculum.md`, and tech debt (row 6) is paid down by refactoring. Juniors write new code in
files they understand; seniors change old code nobody fully understands, and the change has to
behave exactly as before everywhere except where it's meant to differ.

WHAT THE RESEARCH SAYS TO TEACH.
- **Refactoring has a precise meaning.** Fowler: "a change made to the internal structure of software
  to make it easier to understand and cheaper to modify **without changing its observable
  behavior**", done as "a series of small behavior-preserving transformations". Anything that changes
  behavior isn't a refactor, whatever the pull request says (Code Review's "pure refactor" lesson is
  the other side of this).
- **Two hats** (Beck, via Fowler): you're either adding function or refactoring, never both at once.
- **"Make the change easy (warning: this may be hard), then make the easy change"** (Beck, 2012):
  preparatory refactoring before a feature.
- **Legacy code is code without tests** (Feathers). Before changing it, pin what it does today with
  **characterization tests**: tests of actual behavior, not correct behavior, quirks included.
- **Approval / golden-master tests** (Llewellyn Falco's name): record outputs for many inputs once,
  compare after every change. Cheap coverage for code you don't understand yet.
- **Seams** (Feathers): places to change behavior without editing there (a parameter, an injected
  dependency). **Sprout method**: put new behavior in a new, tested function and call it from the old
  code, instead of editing deep inside it.
- **Bigger changes**: the **Mikado method** (Ellnestam & Brolund: try the change, and when it breaks,
  revert and do the prerequisites first, building a graph) and the **strangler fig** (Fowler, 2004:
  route around the old system and replace it piece by piece, never a big-bang rewrite).

## Status (2026-10-05)
BUILT: all six units, 19 items: 6 concept lessons, 8 js lessons, 2 js projects, 5 quizzes (Unit 6
has no quiz: it is the two projects). Engine: `refactor: true` (harnessRefactor in runner.js, 20
tests in tools/test-refactor.js, phase 0m) and validator rules for its flag. Every hidden check was
tested against a wrong answer that must fail: tests that rely on the real clock, a wrong guard-clause
inversion, editing the old function instead of sprouting, a refactor that drops per-line rounding
(passes the hand-picked orders, fails the 300), SMS added by pasting a third block, and a
characterization suite that only pins the obvious rule.
Pays 2 credits `{ arch: 2 }`, not the planned 3: the lessons model at ~3.8h.

## Size
~20 items, ~4–5h, in 6 units. Planned credits 3 `{ arch: 2, qa: 1 }` until the content says otherwise.

## Engine needs
ONE NEW OPT-IN HARNESS, `refactor: true` (runner.js `harnessRefactor`, ~130 lines), contract in
`tools/test-refactor.js`, run as validate.js phase 0m:

- **`T.sameBehavior(a, b, inputs)` / `T.expectSame(...)`**: differential testing. The lesson embeds
  the original function's source (`T.legacy(src)`), and the check runs original and refactored on
  the same deep-copied inputs, comparing results by value (key order ignored; undefined, NaN, -0
  kept apart), thrown errors by name and message, **and what each call did to its arguments**.
  This is "observable behavior", graded directly. Projects run it over hundreds of generated inputs
  in a hidden check.
- **`T.shape(fn)`**: lines, nesting depth, parameter count and branch count, from `fn.toString()` with
  strings and comments blanked. A heuristic, stated as one: it's what lets "flatten this" and
  "this function is too long" be checkpoints.
- **`T.repeats(fn)`**: duplicated long lines, for "remove the duplication".

Characterization and approval tests use the existing `spec: true` harness, graded with `T.mutate`
(Testing Fundamentals' mutation grading): a suite that doesn't go red when one behavior changes
hasn't pinned it.

## Teachable today
All of it, once the harness lands. Concept lessons for Mikado, strangler fig and when not to
refactor (a lab can't simulate a six-month migration).

## Overlaps
- Testing Fundamentals (`test`): mutation grading, describe/it. Assumed, not re-taught.
- Code Review (`review`) Unit 2, "pure refactor, no behavior change": the reviewer's side of this course.
- Changing Live Systems (`change`, planned): expand/contract and parallel change for data and APIs.
  This course stays inside a codebase.

## Units
1. **What refactoring is** (concept ×2, quiz): the definition, two hats, make the change easy,
   legacy = untested, small steps, when not to refactor.
2. **Pin it down first** (js ×2, quiz): characterization tests that pin quirks too; a golden master.
3. **Small, safe steps** (js ×4, quiz): guard clauses, extract and name, remove duplication, name
   the magic numbers. Each graded "same behavior, better shape".
4. **Seams** (js ×2, quiz): parameterize a hidden dependency (the clock); sprout a method.
5. **Bigger than a function** (concept ×2, quiz): Mikado, strangler fig, rewrite vs refactor.
6. **Two projects** (js ×2): pin and reshape a pricing function; make the change easy, then make it.

## Risks
- GAMING SHAPE CHECKS. Squashing a function onto one line beats "lines". Pair every shape limit with
  depth and branches, and a readability floor where it matters (no single line over ~120 chars).
- GAMING BEHAVIOR CHECKS. Calling the legacy source from the "refactored" function passes
  sameBehavior trivially. The legacy source is only evaluated inside checks, never in the learner's
  file, and shape checks reject a body that just delegates.
- FALSE "BEHAVIOR CHANGED". Floating point: a refactor that reorders additions can change the last
  digit. Lessons round money to cents in the legacy code itself, so equal results stay equal.

## Sources
- Martin Fowler, *Refactoring* (definition, small steps, two hats): https://understandlegacycode.com/blog/key-points-of-refactoring/ · https://martinfowler.com/tags/refactoring.html
- Kent Beck, "make the change easy, then make the easy change": https://x.com/KentBeck/status/250733358307500032 · Fowler's preparatory refactoring example: https://martinfowler.com/articles/preparatory-refactoring-example.html
- Michael Feathers, *Working Effectively with Legacy Code* (characterization tests, seams, sprout/wrap): https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/ · https://en.wikipedia.org/wiki/Characterization_test
- Llewellyn Falco on approval tests: http://llewellynfalco.blogspot.com/2008/10/approval-tests.html
- Ellnestam & Brolund, *The Mikado Method*: https://matthiasnoback.nl/2021/02/refactoring-the-mikado-method/
- Martin Fowler, Strangler Fig: https://www.thoughtworks.com/insights/articles/embracing-strangler-fig-pattern-legacy-modernization-part-one
