# How Code Scales — complexity and data structures (id: `algo`, prefix: `algo`, icon 📈, level Intermediate, 8 units)

## Verdict
STANDALONE, and the first **theory course**: at least 60% of its modelled minutes are in a new lesson kind, `kind:"concept"`, instead of `kind:"js"`. The rest is ordinary graded code, used only where writing the code is the skill.

This doc does two jobs. Part 1 defines what a theory course is in CodeLab: the lesson format, how it's graded, and the gates that keep it honest. That standard applies to every later theory course, not only this one. Part 2 is the course.

Why this course first:
- **It's the biggest gap in foundations.** No unit in the 20 built courses teaches cost at all. A search of every unit file finds no `O(n`, `O(log`, `time complexity`, `binary search` or `merge sort` in any graded step. The only near-misses are passing mentions: a `db-u3` hint that says "use BFS", and `etl-u6`'s topological sort, which is taught as ordering tasks, not as graph theory.
- **Junior screens still test it.** DSA remains part of most software-engineering interview loops in 2026, with big-O and hash tables named explicitly (Exponent, thita.ai, KORE1 lists). ACM CS2023 puts Algorithmic Foundations in the CS Core: 11 hours of its own plus 9 in Software Development Fundamentals.
- **The material is conceptual.** Predicting growth, tracing a binary search and choosing a structure under constraints are exactly the kind of thing the evidence below says to teach with prediction, tracing and refutation rather than with more code.

Scope carved OFF, each with a cheatsheet card and no graded step: dynamic programming beyond memoization, balanced trees (AVL, red-black), heaps and priority queues, Dijkstra and weighted graphs, amortized-analysis proofs, NP-completeness, and interview "pattern grinding" (sliding window, backtracking catalogues). This is a course about **reasoning about cost**, not a LeetCode prep course, and the blurb must say so.

Path position: directly after Learn JavaScript. It needs arrays, objects, loops, functions and closures; nothing later. Level Intermediate: its theory is new, but its code is at `js` level.

---

## Part 1 — The theory-course format

### What the research says, and the design rule each finding produces

| Finding | Design rule in CodeLab |
|---|---|
| 4C/ID: theory is "supportive information" that exists to serve whole tasks (van Merriënboer) | Every concept lesson ends in a task that uses the theory, never on a reading screen |
| Peer instruction halved CS fail rates (Porter, Lee & Simon 2013): commit to an answer, then get the explanation | Every read screen is followed by a question the learner commits to before seeing the answer |
| Reading and tracing come before writing (Lister et al.); PRIMM puts Predict first | `predict` and `trace` questions come before any `js` lesson on the same idea |
| Faded worked examples beat both plain examples and unguided problems | Within a unit, worked analyses lose one step per lesson until the learner does the whole thing |
| Productive failure helps conceptual understanding, not procedures (Sinha & Kapur 2021; Chen & Kalyuga 2020) | Concept lessons open with a problem before the explanation; lessons about a procedure (e.g. writing binary search) explain first |
| Refutation text changes wrong beliefs better than plain exposition | Every wrong `pick` choice carries its own explanation of why it's wrong; each unit has misconception screens |
| Visualizations help only when learners interact with them (Hundhausen; Naps engagement taxonomy) | Labs never auto-play: the learner commits a prediction before the lab runs |
| Parsons problems teach as well as writing code, in less time (Ericson et al.) | `order` questions replace some code writing, with distractor lines built from real mistakes |
| Explain-in-plain-English tests the rung between tracing and writing | `explain` questions, self-graded against a model answer and a rubric |
| Expertise reversal: help that novices need slows experts down (Kalyuga) | "Test out" on every concept lesson |
| Interactive textbooks raised reading completion from under 30% to 87% (zyBooks) | Readings are short (a word cap per screen) and always followed by a question |

### The lesson kind: `kind: "concept"`

A concept lesson is a sequence of **screens**. A screen is optional short reading (`read`, markdown) plus at most one question (`ask`).

```js
{ id: "algo-u2-2", kind: "concept", chip: "THEORY", xp: 15, mins: 14,
  title: "Halving means log n",
  screens: [
    { ask: { type: "lab", lab: "halving", predict: {
        q: "Guessing a number from 1 to 1,000,000, where each wrong guess is told higher or lower. What's the most guesses the best strategy ever needs?",
        answer: "20", why: "…" } } },
    { read: "…", ask: { type: "pick", q: "…", choices: ["…", "…", "…", "…"], answer: 2,
        why: ["Why this is wrong…", "Why this is wrong…", "Why this is right…", "Why this is wrong…"] } },
    { read: "…", ask: { type: "predict", code: "…", q: "What does this print?", answer: "3", run: true, transfer: true } }
  ] }
```

Question types, and what each one counts as:

| `type` | Learner does | Graded | Counts as |
|---|---|---|---|
| `predict` | Types a short answer (a number, an output, a big-O class) | Exact after `concept.js` `normalize` (spacing, case, thousands separators and big-O spellings), plus an `accept` list | Evidence |
| `pick` | Chooses one of 3–4 options | `answer` index; every option has a `why` (a refutation for wrong ones, the explanation for the answer) | Evidence |
| `order` | Arranges shuffled lines, some of them distractors (Parsons) | Exact order; `groups` marks lines that may swap | Evidence |
| `trace` | Fills a table of variable values per step | Cell by cell; the first wrong cell is highlighted | Evidence |
| `lab` | Commits a `predict` or `pick` answer, then runs an interactive model | The prediction is graded; the lab itself isn't | Evidence (the prediction) |
| `explain` | Writes 1–2 sentences, then sees a model answer and a rubric checklist | Self-graded against the rubric | **A claim, not evidence** |

**Completing a lesson.** Every evidence question must eventually be answered correctly. A miss shows that choice's `why`. After a second miss, the answer and its explanation are revealed, and the learner enters or selects the correct answer themselves to continue, so nobody gets stuck. An `explain` question needs a non-empty answer and a completed rubric self-check before Continue enables. The end screen shows first-try accuracy, with `explain` counted separately. This follows the Recall rule that typed accuracy and self-reported accuracy are never merged into one number.

**Test out.** On the lesson's first screen, a "Test out" button shows only the screens marked `transfer: true`, with no reading. If every one is right on the first try, the lesson is marked done. One miss drops the learner into the full lesson at the start. This is the expertise-reversal accommodation, and it is also why every concept lesson needs at least two transfer questions (gated below).

**Labs.** Named, authored widgets in a new `labs.js`: `doubling` (operation-count chart as n doubles), `halving` (guess-the-number), `buckets` (hash table with collisions), `calltree` (a recursion tree that grows and collapses as memoization is switched on) and `grid` (BFS/DFS visit order). Labs run **author code only**, in the page. Learner code never runs outside the sandboxed Worker; that rule doesn't change. Each lab gets its parameters from the lesson, so a new lab is a new widget, not a new lesson format.

**Where lessons put the problem.** A concept lesson follows this template, and the per-lesson outlines below are written to it:
1. A problem first: a `lab` or `predict` question the learner will probably get wrong.
2. A short explanation that connects their answer to the idea.
3. A misconception screen: state the wrong belief, say why it's wrong, then check with a `pick` question.
4. A worked example, faded according to the lesson's position in the unit.
5. Two or more `transfer` questions on new code.
6. Optionally, an `explain` question.

### Engine needs (format-wide)
About 1,500 lines, in five pieces.

1. **`concept.js` — ~300 lines, DOM-free** (the `review.js` precedent, so validate.js can `require` it). It holds schema checks, `gradePredict` (reusing `review.js` `normalize`), `gradeOrder` with `groups`, `gradeTrace`, and the modelled-minutes function. **Contract first:** `tools/test-concept.js` (~45 cases, written before the module) runs as validate.js **phase 0k**.
2. **`renderConcept` in app.js — ~500 lines.** It plugs into the same dispatch as `renderQuiz` (`app.js:1515`). Test out, reveal after two misses, the end screen. It stores nothing new: completion uses the existing `done`/XP path. So `sync.js` needs no change, and the `mergeProfile` fresh-object trap isn't triggered. Storing first-try accuracy per question is deferred to a later phase for that reason.
3. **`labs.js` — ~400 lines** for the five labs listed above, as inline SVG. Loaded by `index.html` like `authsim.js`.
4. **CSS — ~150 lines in `themes/base.css`, using only tokens.** The existing trap applies: `.q-choice`, `.quiz-brief` and friends hard-code `#fff`. New `.cx-*` classes must not copy them, and each of the four themes gets checked in the in-app browser, including Dark.
5. **validate.js gates — ~150 lines:**
   - **Schema:** known `type`s; `pick` has a `why` for every choice; `order` groups must be contiguous and no distractor may equal a real line; `trace` rows are rectangular. (Built differently from this doc's first draft: checking that an `order` has a single *semantically* valid order would need to run each permutation, so an author declares swappable lines with `groups` instead.)
   - **Run-verified answers:** every `predict` or `trace` question with `run: true` is executed in Node's `vm` with a captured `console`, and its authored answer must match what the code actually prints. Node and Chrome share V8, so `sort`, `Map` order and number formatting agree. This is the concept-lesson version of "the starter must fail": a wrong answer key can't ship.
   - **Reading caps:** no `read` over 180 words; no two consecutive screens without an `ask`; at least 2 `transfer` questions per lesson.
   - **Honest minutes:** modelled floor = read words ÷ 200 + 1.5 min per evidence question + 3 min per `explain` + 3 min per lab. A lesson's `mins` must be between the floor and 2× the floor. Reading can't be padded to earn credits, and credits can't be claimed for reading that isn't there.
   - **Theory flag:** a course with `theory: true` must have ≥60% of its modelled minutes in `concept` items. The course card shows a THEORY chip.

**Recall (deferred, phase 2).** `predict` questions that pass `isTyped` are good free-recall cards. They would join the pool under their own key prefix. The existing trap applies: anything touching `u.rev` must branch on key shape (`isDrillKey`). That work isn't needed to ship the course.

---

## Part 2 — The course

## Size
40 items: 22 concept lessons, 8 js lessons, 2 projects (1 concept, 1 js) and 8 quizzes.

Modelled at 14 min per concept lesson, 12 per js lesson, 35 for the concept project, 40 for the js project and 5 per quiz: 308 + 96 + 75 + 40 = **519 min ≈ 8.7h → 4 credits {fnd 4}**. Advertise 9h. The floor for an honest 4 is 420 min, so the margin is 99 min. Theory share: (308 + 35) / 519 = **66%**, which clears the 60% gate. The concept `mins` are provisional until the words-based floor is computed on real text; recompute the credit then.

**Position impact, checked against phase 0 on main d123507:** 6 of 7 positions reachable, 16 fnd credits built. `algo` is an elective on every sheet, so no sheet changes and no reachability changes. It raises fnd supply 16 → 20. It gives the Data and QA sheets a natural fnd elective; the ETL research doc noted Data's required courses leave fnd one short.

**Decided (Eric, 2026-09-16): `algo` is required on the Backend and Full-Stack sheets.** Each sheet's total follows the course's credits as tranches land (required + ~3): 36 and 45 at tranche A (1 credit), 38 and 47 at tranche B (3 credits), and 39 and 48 when the course is complete at 4.

## Engine needs (course-specific)
About 150 lines in runner.js, on top of the format engine above.

1. **`T.counted(array)` — a counting Proxy** (the `auth-u4` Proxy-read-count precedent). It counts `get`/`set`/`has`/`deleteProperty` traps on element indexes (not `length` or methods). This measures **operations as the spec defines them**, which is what big-O describes, and is independent of machine speed.
2. **`T.growth(make, work, opts)`** — *as built in tranche A, which changed the design.* A Proxy on the input alone can't see work the learner does on arrays they build themselves (`result.includes(value)` in `dedupe` scans `result`, not the input), so `lesson.count` makes the runner put `__OPS++;` at the top of every braced loop body in the learner's code (same line, so line numbers don't move), and while `work` runs the built-in scanners (`includes`, `indexOf`, `filter`, spread and the array iterators, `slice`, `concat`, `sort` as n log₂ n, String `includes`/`indexOf`/`split`, `Object.keys`, Set/Map operations) add the number of elements they may visit. `make(n)` builds inputs uncounted. Sizes default to n = 250, 500, 1000, 2000 (a quadratic learner loop at 8,000 would be 64 million passes). The **band** comes from the median doubling ratio: `sublinear` (≤1.3), `linear` (1.7–2.4) or `quadratic` (≥3.4), otherwise `unclear`. A loop written without braces would go uncounted and could make quadratic code look linear, so `T.growth` refuses it with a message asking for braces. Checkpoints only ever assert a band, and **never try to tell O(n) from O(n log n) by ratio**; sorting lessons count comparator calls against an explicit bound instead. Known blind spot: recursion without loops isn't counted, which is why U6 uses `T.calls`.
3. **`T.calls(fn)`** — wraps a function to count invocations, for the memoization lessons.
4. **validate.js gate:** an `algo-` js lesson asserting growth must use `T.growth`. Wall-clock timing (`performance.now`, `Date.now`) is forbidden in every `algo-` step, because timing makes a checkpoint depend on the learner's machine.

EXPLICITLY NOT NEEDED: shell.js, any simulator, `lesson.clock`, the network or `sync.js` changes.

**Tranche A as built (2026-09-16).** Format engine (`concept.js`, `renderConcept`, `labs.js` with `doubling` and `halving`, CSS on the themed quiz classes), `harnessCount`, phase 0k (`tools/test-concept.js`, 62 cases, written first), and Units 1–2: 7 concept lessons, 1 js lesson and 2 quizzes, 123 modelled minutes (82% concept) → 1 credit {fnd 1}, `targetHours: 9`. Lesson minutes came out higher than this doc's flat 14 min estimate for some lessons and lower for others once the words-based floor was applied (11–17 min). The Unit 1 js lesson grades the starter's `includes` loop as quadratic (counts 31,625 / 125,750 / 501,500 / 2,003,000) and a Set rewrite as linear.

**Tranche B as built (2026-09-16).** Units 3–5: 8 concept lessons, 4 js lessons and 3 quizzes. The course is now 25 items, ~5.3h modelled → **3 credits {fnd 3}**. Changes from the plan above:
- **`calltree` moved to tranche C**, where U6 uses it; tranche B needed only `buckets`.
- **`buckets` uses 16 buckets, not 8.** With the 10 lesson keys, 8 buckets left the good (all-letters) hash with a 3-key bucket, which undercut the lesson; at 16 the first-letter hash still stacks 4 and the good hash never more than 2. Every prediction in U4-1 keeps its answer (97 % 16 is 1, 98 % 16 is 2).
- **`T.reads()` was added.** In a `count: true` lesson `T.ops()` also includes the learner's loop passes, so a binary search measured 40 "operations" for 20 reads. `T.reads()` counts only element accesses through `T.counted`, and U5-2's bounds (≤ 21 for `insertionPoint`, ≤ 22 for `indexOf` on 1,000,000 items) use it.
- **The Chromium probe exists** (validate.js, "runner probe: operation counting"): shift on 1,000 counted elements touches exactly 2,999 in V8, push 1 and pop 2, and the dedupe bands and brace refusal hold in the real Worker. Note the brace check covers the whole learner file, so one brace-less loop anywhere refuses every growth check in that lesson; the message says so.
- **U3-4 grades three functions** (`flatten`, `processAll`, `chunks`), U4 has two js lessons (`countBy`/`groupBy`/`joinOrders`, then pairs), and U5-2 is graded on element reads rather than a growth band, as planned. Each starter passes its correctness checks and fails only on cost (ratios ≈ ×4, or 1,000,000 reads against a bound of 21).
- **U5-4's boolean comparator** is taught with its measured V8 result (`[3, 1, 2].sort((a, b) => a > b)` stays `3,1,2`), not as "looks right on small tests", which was false in V8.

## Teachable today
Nothing. Every unit needs `kind:"concept"`. Recommended tranches:
- **Tranche A — format engine (concept.js, test-concept.js, renderConcept, CSS, gates) + `T.counted`/`T.growth`, then U1 and U2.** 10 items. This proves the format on the most theory-heavy units before anything else is built on it. **Stop after A and have Eric use the lessons on a phone** before tranche B; the format is the risk, not the content.
- **Tranche B — labs `buckets`/`calltree`, `T.calls`, then U3–U5.** 15 items.
- **Tranche C — lab `grid`, then U6–U8.** 15 items.

## Overlaps
Six collisions, each with a deliberate boundary.

1. **`js-u7` "Sorting arrays of objects".** It teaches the comparator and copy-before-sort. AVOIDANCE: U5-4 names that lesson and doesn't re-grade comparator direction. It covers what `js-u7` leaves out: the default string comparison (`[10, 9, 1].sort()` → `[1, 10, 9]`), stability (guaranteed since ES2019; V8 switched to TimSort in v7.0), an inconsistent comparator, and the cost.
2. **`debug-u2` "Stack traces" and `debug-u5` "The call stack".** They read a stack when something breaks. AVOIDANCE: U6 uses the stack as a notional machine (frames holding their own `n`, the order of logging before and after a recursive call, depth as a finite resource). It never re-teaches reading a trace, and U6-4's `RangeError` screen links `debug-u1`'s message catalogue.
3. **`db-u2` / `db-u5` indexes.** They say an index makes lookups fast. AVOIDANCE: U5-1 names them as the payoff ("an index is a sorted structure you binary-search") and stops there. No B-tree internals.
4. **`db-u3` graph mock (a hint says "use BFS").** AVOIDANCE: U7-3 teaches BFS, and its brief points back to that hint. Nothing in `db` is re-graded.
5. **`etl-u6` "Tasks as a DAG".** It already grades topological order and cycle detection. AVOIDANCE: U7 teaches no topological sort; a cheatsheet card points to `etl-u6`.
6. **`nodejs-u1` "Blocking the event loop".** AVOIDANCE: U8-1 uses one screen to connect the two: a quadratic loop over 50,000 items blocks the loop. The event loop is not re-taught.

## Units

### 1. Unit 1 — What "slow" means
Timing a function tells you about your laptop. Counting its operations tells you about the code.

Lessons:
  - The stopwatch lies (concept)
  - Counting steps (concept)
  - The doubling test (concept)
  - Find the hidden loop (js)
  - Unit 1 quiz: What "slow" means

Graded how:
(1) Opens with `lab: doubling`: two functions, A with a 1,000-operation setup and B quadratic. Predict which does fewer operations at n = 10 and at n = 100,000 (A loses at 10 and wins at 100,000). A misconception screen follows: "a benchmark on my machine settles it", refuted with the same function timed three times with different results, shown as recorded data, not live. Transfer: two `pick` questions on which measurement to trust. (2) `predict` operation counts for five loop shapes (single loop, nested, loop to a constant, loop over half, loop then loop), each `run: true` against an instrumented version. Worked examples are complete for the first two and faded by one step each after. (3) `lab: doubling`, predict the ratio (≈1, ≈2, ≈4) for four snippets before running. Transfer: classify two new snippets by band. (4) `dedupe(list)` starter uses `result.includes(x)` inside a loop. Checks: output identical to the starter's, first occurrence kept, order preserved, including `NaN` and `-0`/`0` (so `Set` semantics are handled, not guessed), and `T.growth` band `linear` where the starter is `quadratic` (the first checkpoint asserts that on the starter).

### 2. Unit 2 — Big-O, the language
Drop the constants, keep the shape, and say which case you mean.

Lessons:
  - Drop the constants, keep the shape (concept)
  - Halving means log n (concept)
  - Best case, worst case, and the input you'll get (concept)
  - Two inputs, and memory too (concept)
  - Unit 2 quiz: Big-O

Graded how:
(1) `predict` the dominant term of step counts like `3n² + 200n + 7`. Misconception screen: "O(2n) is slower than O(n)", with a `pick` whose wrong choices each carry their `why`. `order`: rank six growth classes. (2) `lab: halving` with the prediction above (20 guesses). Then `predict` the loop count of `for (let i = n; i > 1; i = Math.floor(i / 2))` at n = 1,024 and n = 1,000 (`run: true`). Transfer: which of three loops is O(log n). (3) Linear search best/worst case; misconception screens "big-O means the average" and "O(1) means fast" (a constant 10⁹-step operation). `explain`: why a worst-case guarantee matters for a login lookup. (4) O(n + m) vs O(n · m) for two lists; space complexity of copying vs counting. `pick` scenarios; `explain` in plain English what `function f(a, b) { return a.filter(x => b.includes(x)); }` does and costs. Rubric: names intersection; names `includes` as a scan; says n·m.

### 3. Unit 3 — Arrays under the hood
An index is a jump; a search is a walk; the front of an array is expensive; and some copies are invisible.

Lessons:
  - Where an element lives: index vs search (concept)
  - The front of the line is expensive (concept)
  - Copies you didn't see (concept)
  - Make it linear (js)
  - Unit 3 quiz: Arrays

Graded how:
(1) The notional machine: contiguous slots. `predict` operation counts of `arr[i]`, `arr.includes(x)`, `arr.indexOf(x)` and `arr.at(-1)`. (2) `lab: doubling` over `T.counted` arrays, showing the element moves that `shift`/`unshift`/`splice(0, …)` make **according to the language spec**, against `push`/`pop`. A screen says plainly that engines sometimes optimize `shift` internally, and that code shouldn't rely on it. Transfer `pick`: a queue of 100,000 jobs. (3) `[...acc, x]` inside `reduce`, `arr.slice(1)` in recursion, `concat` in a loop. `order`: the linear version, with the copying line as a distractor. (4) Three functions, each graded on identical output plus the `linear` band where the starter is `quadratic`: `flatten(lists)` (spread-reduce), `drain(queue)` (shift loop), `chunks(arr, size)` (repeated `slice(size)` of the rest).

### 4. Unit 4 — Hash maps and sets
How a key is found without a search, what makes two keys "the same", and the one-pass patterns this unlocks.

Lessons:
  - How a hash table finds a key (concept)
  - Map, Set, and what counts as the same key (concept)
  - Count, group, index (js)
  - Pairs that add up (js)
  - Unit 4 quiz: Hash maps

Graded how:
(1) `lab: buckets`: insert keys into 8 buckets. Predict the bucket for a key under a given toy hash, then watch collisions pile up with a bad hash. Screen: average O(1), worst case O(n), and why the worst case is rare with a good hash. Misconception `pick`: "a hash lookup is always O(1)". (2) `predict` outputs (`run: true`): `obj[{a:1}] = 1; Object.keys(obj)` → `["[object Object]"]`; `new Set([{}, {}]).size` → `2`; `new Map([[1, "a"], ["1", "b"]]).size` → `2`; `new Set([NaN, NaN]).size` → `1`. The notional machine: objects are compared by identity, and object keys are coerced to strings. (3) `countBy`, `groupBy`, and `joinOrders(orders, customers)`, whose starter uses `customers.find` per order. Checks: exact output including a missing customer; `linear` band. (4) `hasPairWithSum(nums, target)` and `pairIndices`. Checks: duplicates (`[3, 3]` with target 6), negatives, no pair, no element used twice; `linear` band.

### 5. Unit 5 — Searching and sorting
Binary search by hand and in code, why sorting costs n log n, and JavaScript's sort, honestly.

Lessons:
  - Binary search by hand (concept)
  - Binary search, counted (js)
  - Why sorting costs n log n (concept)
  - JavaScript's sort, honestly (concept)
  - Unit 5 quiz: Search & sort

Graded how:
(1) Explanation first, because this is a procedure. `trace` tables of `lo`/`hi`/`mid` for a found target, a missing target and a one-element array (`run: true`). `order`: binary search with the classic off-by-one distractors (`lo < hi` vs `lo <= hi`, `hi = mid` vs `mid - 1`). Names `db-u2` indexes as the payoff. (2) `indexOf(sorted, x)` and `insertionPoint(sorted, x)`. Checks: exact results at both ends, duplicates (leftmost), empty array; element reads on a `T.counted` array ≤ ⌊log₂ n⌋ + 1 for n = 1,000,000. (3) `lab: doubling` comparing insertion sort and merge sort by comparator calls, including nearly-sorted input, where insertion sort wins (TimSort's adaptive idea, cited). `trace`: one merge step. A single screen on the lower bound, with no proof. Transfer: pick the cheaper plan, "sort once then binary search many times" vs "scan each time", for given counts. (4) `predict` `[10, 9, 1].sort()` → `1,10,9` (`run: true`); stability since ES2019 with a `predict` on equal keys; a comparator returning a boolean (`(a, b) => a > b`) shown giving wrong orders (recorded, since the result is engine-defined); an `explain` on why. References `js-u7` by name.

### 6. Unit 6 — Recursion and the call stack
Frames, a tree of calls that explodes, remembering instead of recomputing, and a stack that runs out.

Lessons:
  - Frames on a stack (concept)
  - The recursion tree (concept)
  - Remember instead of recompute (js)
  - When recursion runs out of stack (concept)
  - Unit 6 quiz: Recursion

Graded how:
(1) `predict` the print order of `console.log` before and after a recursive call (`run: true`); `trace` frames of `factorial(4)` with each frame's own `n`. Links `debug-u5` for reading a stack when something breaks. (2) `lab: calltree` for `fib(5)`: predict the call count (15) before the tree grows; `predict` for `fib(30)` → 2,692,537 calls (`run: true` with a counter). Misconception `pick`: "recursion is slow". The explosion comes from repeated subproblems, not from recursion itself. (3) `memoFib(n)` and `gridPaths(r, c)`. Checks: exact values up to `fib(78)` (the last Fibonacci number below `Number.MAX_SAFE_INTEGER`); `T.calls` ≤ 2n + 1; the cache is per function, not a global the checks could share. (4) Depth as a finite resource, without asserting any number (engines differ). `order`: convert a recursive tree walk into a loop with an explicit stack. `pick`: when recursion is the clearer choice anyway.

### 7. Unit 7 — Stacks, queues, trees and graphs
Choose a structure by the order you need things back, then walk trees and graphs two ways.

Lessons:
  - Stacks and queues: choose by the order you need (concept)
  - Brackets, and a queue that doesn't shift (js)
  - Trees and graphs: BFS vs DFS (concept)
  - Shortest path on a grid (js)
  - Unit 7 quiz: Structures

Graded how:
(1) Scenario `pick`s (undo, print jobs, browser back button, a task that must process the oldest request first), each wrong choice with its `why`; `predict` the pop order of a push/pop sequence. (2) `balanced(str)` for `()[]{}`, including closers first and interleaved pairs; `Queue` with `enqueue`/`dequeue`/`size` using a head index. Checks: FIFO order across 10,000 interleaved operations; `linear` band for n operations where a `shift`-based starter is `quadratic`. (3) `lab: grid`: predict the visit order of BFS and DFS from a start cell before running; `trace` a queue's contents for 4 steps; `explain` why BFS finds the fewest hops on an unweighted grid. Links `db-u3`'s hint and `etl-u6` (topological order lives there). (4) `shortestSteps(grid, start, goal)`. Checks: walls, an unreachable goal → `-1`, start = goal → `0`, a maze where DFS order would find a longer path first; `linear` band in cell count.

### 8. Unit 8 — Choosing under constraints
No new ideas: reading cost in unfamiliar code, and deciding like an engineer who has to defend the choice.

Lessons:
  - Reading a cost you didn't write (concept)
  - Scenario decisions (concept)
  - Project: Why is the search box slow? (js)
  - Project: The code review (concept)
  - Final quiz: How code scales

Graded how:
(1) Six realistic functions in the catalog's own style (a filter-then-find render, a nested `some` permission check, a `sort` inside a loop). `predict` the big-O class, typed from a fixed vocabulary (`O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`, `O(n·m)`) so answers normalize exactly. One screen connects to `nodejs-u1`: a quadratic loop over 50,000 items blocks the event loop. (2) Case-method `pick`s: a constraint set (memory cap, update frequency, lookup frequency, needs ordering) → structure or plan, with a `why` for each wrong option and an `explain` defending one choice against a rubric. PROJECT P1 (`algo-u8-p1`, js, ~8 checkpoints): a product-search module with three planted quadratic paths (dedupe via `includes`, a tag join via `find`, a re-sort on every keystroke). One checkpoint group per path, each on identical output plus the `linear` band on `T.counted` inputs; a final group runs the whole search at n = 20,000 in bands. PROJECT P2 (`algo-u8-p2`, concept): a pull request shown as a before/after diff. Classify both versions, `trace` the new one on an edge input that exposes an off-by-one, pick the reviewer comment that's actually correct, and `explain` the cost change in plain English for a non-specialist teammate (self-graded rubric).

## Projects
- Project: Why is the search box slow? (algo-u8-p1) — three hidden quadratic paths in one module, each graded on identical output plus a measured growth band.
- Project: The code review (algo-u8-p2) — a theory project: classify, trace, choose the correct review comment, and explain the change in plain English.

## Risks
- **Spec cost vs engine cost.** `T.counted` counts operations as the spec defines them. V8 sometimes optimizes internally (e.g. array left-trimming on `shift`), so a wall-clock demo can contradict a lesson. Mitigation: lessons say "the spec" and "an engine may optimize, don't rely on it"; wall-clock timing is banned in checkpoints; recorded timing screens are data, not live runs. **Before authoring U3-2, run a validate.js Chromium probe** confirming the Proxy trap counts for `shift`/`unshift`/`splice` match the spec algorithm.
- **Growth bands on small inputs.** Setup costs can blur ratios at n = 1000. Mitigation: `T.growth` reports "unclear" instead of guessing; `test-concept.js` fixes the bands against reference implementations of every class, including O(n log n), which must land in `linear` or "unclear" and never in `quadratic`.
- **Self-graded `explain` inflation.** Learners tick every rubric box. Mitigation: `explain` never counts as evidence, first-try evidence accuracy is shown separately on the end screen, and no lesson is passable on `explain` alone.
- **Reading creep.** Theory courses drift toward long text. Mitigation: the 180-word cap, the no-two-screens-without-an-ask gate and the words-based minutes floor all fail the build.
- **Wrong answer keys.** A theory lesson has no running starter to catch a bad key. Mitigation: `run: true` on every `predict`/`trace` whose answer comes from running code, executed in phase 0; `pick` keys get the independent audit the quiz bank got (PR #8).
- **Interview-prep scope creep.** Heaps, DP and pattern catalogues feel adjacent. Cheatsheet cards only; the blurb says this is a course on reasoning about cost.
- **The format is unproven in this app.** No theory lesson has been used on a phone yet. Mitigation: tranche A stops for Eric to use U1–U2 before the rest is built.

## Sources
**Teaching theory (Part 1)**
- 4C/ID — supportive information as "the theory": https://www.4cid.org/about/ ; https://edutechwiki.unige.ch/en/4C-ID
- Porter, Lee & Simon, "Halving fail rates using peer instruction" (SIGCSE 2013): https://neverworkintheory.org/2013/03/08/halving-fail-rates-using-peer-instruction.html
- Lister et al., reading/tracing/writing: https://dl.acm.org/doi/10.1145/1404520.1404531 ; https://dl.acm.org/doi/10.1145/1584322.1584336
- PRIMM (Sentance): https://computingeducationresearch.org/projects/primm/
- Sorva, notional machines: https://dl.acm.org/doi/10.1145/2483710.2483713
- Worked examples and fading: https://link.springer.com/article/10.1007/s10648-023-09745-1 ; https://www.researchgate.net/publication/282228422_The_design_and_utilization_of_effective_worked_examples_A_meta_-analysis
- Sinha & Kapur 2021, productive failure: https://journals.sagepub.com/doi/10.3102/00346543211019105
- Refutation text review: https://link.springer.com/article/10.1007/s10763-010-9203-x
- Hundhausen et al., algorithm visualization meta-study: https://www.sciencedirect.com/science/article/abs/pii/S1045926X02902375
- Ericson et al., Parsons problems vs writing code: https://dl.acm.org/doi/10.1145/3411764.3445292 ; https://dl.acm.org/doi/10.1145/3141880.3141895
- Kalyuga, expertise reversal: https://en.wikipedia.org/wiki/Expertise_reversal_effect
- zyBooks participation research: https://www.zybooks.com/a-guide-to-zybooks-research/
- MIT 6.1800 (a theory-heavy course built on papers and a design project): https://web.mit.edu/6.1800/www/overview.shtml

**The course (Part 2)**
- ACM CS2023, Algorithmic Foundations in the CS Core: https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm
- MIT 6.006 Introduction to Algorithms (lectures, recitations, problem sets): https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/
- Stanford CS106B, Big-O lecture (counting primitive operations, hidden loops, linear vs binary search): https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1206/lectures/big-o/
- Runestone, *Problem Solving with Algorithms and Data Structures* (interactive textbook model): https://runestone.academy/ns/books/published/pythonds3/index.html
- V8, "Getting things sorted in V8" (TimSort, stable since v7.0): https://v8.dev/blog/array-sort ; https://v8.dev/features/stable-sort
- DSA in 2026 interviews: https://thita.ai/blog/interview/is-dsa-still-required-for-software-engineering-interviews-in-2026 ; https://www.tryexponent.com/questions?role=swe&type=algorithms ; https://www.kore1.com/software-engineer-interview-questions/
- Built-catalog overlap checked 2026-09-16 by searching every unit file on main d123507: no graded step mentions big-O, binary search or sorting cost; near-misses `js-u7` (comparators), `debug-u2`/`debug-u5` (stacks), `db-u2`/`db-u5` (indexes), `db-u3` (a BFS hint), `etl-u6` (topological order), `nodejs-u1` (blocking loop), `auth-u4` (Proxy counting precedent). Position status from `node tools/validate.js --phase0` on the same commit: 6/7 reachable, fnd 16 built.
