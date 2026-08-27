# Debugging & Diagnosis — Reading Errors, Finding Bugs

## Verdict
STANDALONE — but smaller than average (35 items / ~7h), placed as course #7 between Async JS & APIs and Back-End Foundations, NOT appended as #9. Three sub-topics get explicitly threaded elsewhere instead of padding it out.

WHY STANDALONE, against the evidence that says otherwise. The industry precedent argues for threading: Codecademy's dedicated debugging course is ~1 hour and 4 items (an article, two lessons, a quiz); The Odin Project threads it as two Foundations lessons ("Understanding Errors", "JavaScript Developer Tools"); MDN has one article ("What went wrong?"); freeCodeCamp has a ~12-challenge section inside JS Algorithms, not a course. Nobody ships a 7-hour debugging course. So I am deliberately breaking with precedent, on three grounds:

1. The pedagogy research says explicitness is the active ingredient. The SIGCSE/IEEE literature on systematic debugging instruction reports median correctness moving 60%→80% and median time-to-fix 28.7min→10.7min after EXPLICIT instruction in hypothesis-form-and-test, and repeatedly notes that most novices are never taught a strategy at all. The gain comes from naming and drilling the method. A method smeared as three bonus lessons across four finished courses is exactly the incidental treatment that produced the 60% baseline.

2. Threading costs more than building, given where CodeLab is. All 8 courses are marked full-depth with no targetHours remaining; threading means editing 4 shipped courses, renumbering ids, re-running 827 checkpoints, and redoing the hours math and the quiz length-tell gate in courses.js. A new folder dbg/u1..u7 touches nothing that works.

3. CodeLab's native shape IS a debugging drill. Every one of the 251 coding lessons is already "here is a file, make the red checks turn green." A debugging course is the only course where that loop is not a teaching convenience but the subject itself. The platform is better at this than at anything else it currently ships.

WHY IT IS SMALL, AND WHERE IT SITS. 35 items, not 44. The honest gradeable surface runs out before Codecademy's 10-14h length, and padding it would mean either re-teaching try/catch (already async/u3) or faking DevTools lessons. Placement after Async is forced by content: Unit 6 triages fetch failures, so fetch must already be behind the learner; and Back-End/Capstone are the two courses where a learner working alone most needs to be able to localize a bug without help.

WHAT I AM THREADING INSTEAD OF INCLUDING — the owner's "could be threaded" instinct is right about these three, and they are exactly the parts that cannot honestly be graded:
- DevTools panel tours (Elements/Sources/Network UI, where the buttons are). Not simulatable at any useful fidelity. Ships as per-unit cheat[] entries plus a "now do this in your real browser" callout in each brief. Zero graded checkpoints. Pretending otherwise is the main way this course could become dishonest.
- Performance profiling, flame charts, memory snapshots, heap leaks. Cut entirely, not deferred. Out of scope for a self-taught dev at this stage and completely ungradeable here.
- Error-message information leakage (stack traces leaked to clients, secrets in error bodies). Belongs in srv/u6 "Error envelopes" and the owner's proposed Web Security unit, where the 500-handler already lives.

## Size
35 items, ~7h

## Engine needs
THREE SMALL ADDITIONS, ~260 LINES TOTAL, NO NEW DEPENDENCIES, NO BUILD STEP. Only Unit 4 is blocked by them; (b) is a credibility prerequisite for the whole course.

(a) CONSOLE METHOD SHIM — ~60 lines, inside harnessCommon() in runner.js. Today the harness wraps exactly ["log","info","warn","error"] and pushes the formatted text into g.__LOGS. console.table, trace, group/groupEnd, count/countEnd, time/timeEnd, assert and dir are NOT shimmed anywhere in the app — I grepped all 304 items and they appear zero times, precisely because they would vanish. Extend the wrapped list and give each a DETERMINISTIC serialization so T.logged() can grade it: table(rows) pushes a header line "id | name | qty" then one pipe-joined line per row; count(label) pushes "label: 3"; time/timeEnd pushes "label: <ms>ms" (and tests must never assert the number); assert(false,msg) pushes "Assertion failed: msg" at level "error"; trace() pushes "Trace: " + the cleaned frames from (b); group indents subsequent lines by two spaces. Also add T.logLines() returning the raw array and T.countLogged(needle) so tests can assert counts structurally instead of by substring.

(b) STACK / LINE-NUMBER TRUTH — ~80 lines in runner.js. This is the one that matters beyond this course. Today buildWorkerSrc does (0,eval)(JSON.stringify(userCode + "\n;\n" + stepsSource(lesson))). Consequences: (i) thrown errors report a blob: URL as the filename, so e.stack is unreadable; (ii) the appended test source shares the eval unit, so any future change to step wrapping silently shifts the learner's reported line numbers; (iii) in the iframe path, window.onerror's e.lineno is offset by however many lines the injected harness <script> occupies, so the console panel already reports wrong line numbers for every HTML/CSS/DOM lesson today. Fix: append "\n//# sourceURL=script.js" to the learner's eval blob so V8 labels frames script.js:12:5; eval the learner's code in its OWN (0,eval) call separate from the steps so step wrapping can never shift learner lines; add __cleanStack(e) that drops frames belonging to harnessCommon/__T_RUN and rewrites any remaining blob: URL to script.js; in buildSrcdoc, record the harness line count as a constant and subtract it in the window.onerror handler before reporting. A course about reading error output cannot ship on top of a runtime that reports the wrong line, and this fix improves the console panel for all eight existing courses.

(c) TRACER / probe() — ~120 lines, added to harnessCommon (no new file needed, though tracer.js is cleaner). Public surface: g.probe(name, value) pushes { n, name, value: snapshot(value) } onto g.__TRACE and RETURNS value, so it is drop-in — const total = probe("total", sum(items)). snapshot() is a depth-limited structured clone with a cycle guard (JSON round-trip plus a WeakSet, ~30 lines), and the deep copy is the pedagogical point: it records what the value WAS, which is the fix for console.log(obj) showing you the object as it is now. Test-side helpers: T.trace(), T.traceOf(name) → array of recorded values, T.firstDivergence(name, expected) → index or -1. The recorder is cleared per run alongside __LOGS.

WHAT I AM DELIBERATELY NOT BUILDING, AND WHY. A real step debugger needs either (i) source-to-source instrumentation of arbitrary learner JS, which needs a real parser — the existing guardLoops() regex rewrite is precedent for cheap source munging but it would shred template literals, regex literals and arrow bodies the moment you tried to find statement boundaries; vendoring Acorn (~120KB, single plain script, genuinely no build step) would work but is a real change in the app's hand-written, dependency-free character and should be the owner's conscious call, not a side effect of this course; or (ii) a tree-walking interpreter for a deliberately tiny JS subset — tokenizer, Pratt parser, and an environment-chain evaluator driven by a step generator so you can step/stepOver/stepOut and inspect scope. That is 600-900 lines, comparable to two runner.js files, and it buys authentic breakpoints at the cost of a toy language the learner will feel is fake. I chose the third path instead: Unit 5 grades breakpoint REASONING over serialized paused-state fixtures at zero engine cost. 260 lines unlocks 35 items; 900 more lines would improve 5 of them.

## Teachable today
30 OF 35 ITEMS SHIP INTO THE EXISTING RUNTIMES UNCHANGED. Only Unit 4 (5 items) is blocked.

Units 1, 2, 3, 5, 6 and 7 need nothing new, and this flips the usual "build the engine first" sequencing — content can start immediately and the engine work lands mid-course.

- U1 (5 items) — WORKS TODAY. Error objects in the worker are real. stepsSource wraps every test in T.step(i, async function(){...}), so a test can contain its own try/catch and assert e.name, e.message and instanceof directly. The tests ARE the try/catch, so learner code never has to be defensive.
- U2 (5 items) — WORKS TODAY, and is fixture-driven ON PURPOSE rather than as a workaround. Even after fix (b), a live e.stack in a blob-eval worker is the wrong teaching artifact: it shows harness frames the learner did not write and cannot control. A realistic trace pasted into the starter as a string is both fully gradeable and closer to what the learner will actually be handed by a bug report.
- U3 (6 items) — WORKS TODAY. The probe-counter that makes "you scanned linearly" gradeable lives in the STARTER FILE as a plain closure, not in the engine. That is what makes the strategy assertion free.
- U5 (6 items) — WORKS TODAY. Pure fixture reasoning over a serialized PAUSE object. The one honest gap: the debugger keyword is inert in a worker and in a sandboxed iframe with no devtools attached, so it is taught and cheatsheeted but never graded.
- U6 (5 items) — WORKS TODAY. buildWorkerSrc already applies harnessMock when lesson.mock is present, so mocked fetch works in the JS runtime as well as the iframe — lessons 1-3 need no DOM. Lesson 4 is a plain kind:"web" lesson using T.click / T.submit / T.css, exactly like dom/u7.
- U7 (3 items) — WORKS TODAY, though the web project reads much better after fix (b), since a debugging capstone that reports wrong line numbers in its console panel undercuts itself.
- U4 (5 items) — BLOCKED. Lesson 1 (labelled logs) works today via T.logged; lessons 2-4 need (a) and (c).

SEQUENCING RECOMMENDATION: write U1, U2, U3, U5 first (21 items, zero engine risk, and they contain the highest-value content in the course). Land fix (b) alongside, since it is 80 lines and pays back across all eight shipped courses. Then (a) + (c) and U4. U6 and U7 last, because U7's projects should plant bugs from categories the earlier units actually taught.

## Overlaps
I grepped the whole corpus rather than guessing. The honest finding: the mechanics of error HANDLING are already taught and must not be repeated; the skills of error READING and bug LOCATING are almost entirely absent.

WHAT IS ALREADY THERE:
- async/u3 "When things go wrong" (res.ok & status codes, try/catch with await, Loading & error UI, Building rejections) — 10 try/catch blocks and 14 `new Error` usages. This is the biggest overlap surface. try/catch syntax, throwing, and rejection handling are DONE.
- async/u5 — 6 more try/catch (Timeout & retry), 7 more `new Error`.
- srv/u6 "Validation & errors" (Error envelopes, Never crash) — 5 try/catch; defensive server coding is DONE.
- cap/u4 (Autosave, boot sequence) — 9 try/catch around JSON.parse and localStorage.
- js/u4 "Guard clauses: bail out early"; js/u3 "Truthy, falsy & default values"; js/u6 "Type conversion"; js/u7 "Nested data & optional chaining" — these teach the code patterns that PREVENT the bugs U1 teaches you to read.

WHAT IS ABSENT ACROSS ALL 304 ITEMS — this is the actual case for the course:
- `.stack` appears zero times (the one grep hit is a CSS class named .stack in resp/u1).
- The `debugger` keyword: zero occurrences.
- console.table / trace / group / count / time / assert / dir: zero occurrences in any lesson, and the harness does not shim them.
- The error TYPE NAMES (TypeError, ReferenceError, SyntaxError) appear exactly once each in seven files, always in passing prose — never as a taught taxonomy, never graded.
- Bisection, minimal reproducible examples, deterministic reproduction, source maps, and paused-frame/call-stack reading: absent entirely.

HOW EACH RISK IS AVOIDED:
1. Unit 1 vs async/u3 — the hard line is HANDLE vs CLASSIFY. Async teaches you to write try/catch; U1 assumes you already can and never shows a try/catch in a starter file. The learner's function receives a thunk and reports what came out; the try/catch lives in the TEST, not the lesson. Zero `new Error` in Unit 1 starters. The brief opens by pointing back at async/u3 rather than restating it.
2. Unit 6 lessons 1-2 vs async/u3 "res.ok & status codes" and async/u4 "Handle the 400" — this is the thinnest margin in the course and I am flagging it rather than hiding it. Three separations: (i) async teaches what your CODE DOES when the server says no; U6 teaches WHY it said no and WHOSE BUG IT IS — the graded return value is { cause, owner }, a judgment async never asks for. (ii) Disjoint status codes: async/u3 and u4 own 400 and 404; U6 owns 401, 403, CORS and 500 and does not re-grade 400/404. (iii) No error UI, no retry, no rendering — U6 returns diagnosis strings from pure functions. If the owner still finds this too close, U6 lessons 1-2 are the two items I would fold into async/u3 as a threaded pair, dropping the course to 33 items.
3. Unit 7 project 2 vs srv/u1 and srv/u7 "Project: Bookmarks API" — same handleRequest contract, deliberately, since reuse of a familiar shape is what lets the learner focus on the bug instead of the spec. The difference is total: srv gives you a blank function and a spec to fulfil; U7 gives you 90 working lines with three bugs and no map. One of the planted bugs is specifically the 405-branch-ordering trap that srv/u1 lesson 4 warns about — U7 is where you meet it in the wild after being taught it in the classroom.
4. Unit 6 lesson 4 vs dom/u1-u3 — dom teaches you to select and bind correctly; U6 lesson 4 hands you three bindings that are already wrong. Fixing a wrong selector is not the same item as writing a right one, and the checkpoint asserts on behavior after the fix rather than on the selector text.
5. Unit 4 vs nothing — no overlap exists; this is the cleanest new ground in the course, which is also why it is the only unit needing engine work.

## Units

### 1. Unit 1 — Errors are messages, not failures
The three error types a JS developer actually meets (SyntaxError, ReferenceError, TypeError), the anatomy of an error object (name / message / where), and reading the four or five messages you will see a thousand times. Deliberately NOT how to try/catch — that is async/u3's job. This is classification of an error you already caught.

Lessons:
  - The three errors you will actually meet
  - Anatomy of an error object: name, message, where
  - Classify what you caught: e.name, instanceof, and why the type matters
  - The messages you will see a thousand times

Graded how:
kind:"js". Learner writes classify(fn) — runs fn() inside try/catch, returns { kind, culprit }. Starter supplies six one-line thunks with planted bugs (() => null.name, () => notDeclared + 1, () => [].sort.call(null), () => JSON.parse("{oops"), () => ({}).go(), () => undefined[0]). Test asserts exact objects: T.eq(classify(BUGS[0]), { kind: "TypeError", culprit: "null" }) for all six, plus T.eq(classify(() => 1 + 1), { kind: "none", culprit: null }) so a blanket "return TypeError" fails. Lesson 4 grades explain(msg) as a pure string→string map: T.eq(explain("Cannot read properties of undefined (reading 'name')"), "the thing before .name was undefined") across eight real message strings — canonical answers, exact-matched, no free text. The tests themselves are the try/catch, so learner code never needs to be defensive; the constraint is only that no planted bug may throw at top level (see risks).

### 2. Unit 2 — Stack traces
A trace is a call stack printed newest-first. Reading top-to-bottom, separating your frames from library frames, why async traces have a missing middle, and how a minified frame maps back to a real file. This is the unit the owner specifically named and it is the single most transferable thing here.

Lessons:
  - Reading a trace: newest call is on top
  - Your code vs. their code: find the first frame you own
  - Async traces and the missing middle
  - Minified frames and source maps

Graded how:
kind:"js", fixture-driven — the trace is DATA in the starter, not a live stack (see engineNeeds for why live stacks are unusable). Lesson 1: learner writes parseTrace(text) → [{ fn, file, line, col }]; test asserts T.eq(parseTrace(TRACE).length, 7) and T.eq(parseTrace(TRACE)[0], { fn: "applyCoupon", file: "cart.js", line: 42, col: 9 }). Lesson 2 hands the frames already parsed and grades JUDGMENT, not parsing: blame(frames) must return "cart.js:42" for a trace whose top three frames are node_modules/lodash — test also runs a second fixture where the top frame IS yours, so "always skip 3" fails. Lesson 3: given ASYNC_TRACE plus a list of candidate origin functions, whoScheduled(trace) → "loadCart"; test asserts the learner did not answer the await boundary frame. Lesson 4: demangle(frame, SOURCE_MAP) maps { file: "bundle.min.js", line: 1, col: 48213 } → { file: "cart.js", line: 42, col: 9 } against a provided 12-row mapping table; test asserts three lookups plus T.eq(demangle(offMapFrame, SOURCE_MAP), null).

### 3. Unit 3 — Reproduce, then isolate
The research-backed core: make it happen on demand, then halve the search space until the bug has nowhere to hide. Bisecting inputs, bisecting code, and reducing to a minimal reproducible example. This is the unit that produces the 28.7min→10.7min effect.

Lessons:
  - Reproduce it: deterministic, or you are guessing
  - Bisect the input: 200 rows down to one
  - Bisect the code: halve the file, not the line
  - The minimal reproducible example

Graded how:
kind:"js". Lesson 1 grades DETERMINISM, which is unusual and is the point: starter has a flaky check that reads Math.random() and a Date; learner rewrites repro() to be seeded/injected. Test: var runs = []; for (var i=0;i<12;i++) runs.push(repro()); T.expect(runs.every(r => r === runs[0]), 'ran 12 times, got both true and false — that is a guess, not a repro') plus T.eq(runs[0], false). Lessons 2 and 3 grade the STRATEGY, not just the answer, which is the best idea in this course: starter supplies a pre-wrapped probe counter, learner writes findBadRow(rows, isOk); test asserts T.eq(findBadRow(ROWS, isOk), 137) AND T.expect(PROBES.count <= 8, 'you scanned linearly — 200 rows needs at most 8 halvings, you used ' + PROBES.count). A linear scan returns the right index and still fails. Lesson 3 is the same shape over an array of code chunks with a second assertion that the learner never marked a known-good chunk bad. Lesson 4: learner edits a MINIMAL string down from a 60-line failing script; test evals it, asserts it still throws the SAME error name and message, and asserts MINIMAL.split('\n').length <= 6 and that it no longer references the three irrelevant helpers. Project (see projects[]) sits in this unit.

### 4. Unit 4 — Instrument: print debugging, done well
console.log is not shameful, it is just usually done badly. Labelled logs, the console methods nobody uses (table, group, count, time, assert), invariants that scream on their own, and hand-rolled watchpoints that snapshot a value at the moment it was recorded. THIS IS THE ONLY UNIT THAT NEEDS ENGINE WORK.

Lessons:
  - Label your logs, or you are reading soup
  - console.table, group, count and time
  - console.assert and the invariant that screams
  - Watchpoints by hand: probe() and the timeline

Graded how:
kind:"js". Lesson 1 works today: T.expect(T.logged('cart:'), 'a bare console.log(cart) in a loop is soup — label it') plus T.expect(!T.logged('[object Object]')). Lessons 2-4 need the shim and the tracer. Lesson 2: after the shim serializes console.table rows deterministically into __LOGS, T.expect(T.logged('id | name | qty')) and T.eq(T.countLogged('tick'), 5) for console.count. Lesson 3: learner inserts console.assert(total >= 0, 'total went negative') inside a reducer; test drives it with a poisoned row and asserts T.expect(T.logged('Assertion failed: total went negative')) AND that the assert did NOT fire on the clean dataset — grading that the invariant is tight, not that it exists. Lesson 4 is the payoff: learner instruments a running-sum loop with probe("sum", sum); test reads the recorded timeline directly — T.eq(T.traceOf('sum'), [0,1,3,6,10,15]) — then a second checkpoint hands a buggy version and asks for the index of divergence: T.eq(firstBadTick(), 3). A sub-checkpoint teaches the deep-snapshot lesson: the learner probes an object, mutates it afterwards, and the test asserts the RECORDED value is the old one, proving why console.log(obj) lies about objects you mutate later.

### 5. Unit 5 — Breakpoints and the paused program
What a breakpoint is FOR, and the reasoning it enables: reading scope at a moment, reading the call stack, predicting where step-over vs step-into vs step-out lands, and writing the condition that stops on iteration 137 instead of clicking Resume 137 times. Taught over paused-state fixtures, with an explicit honesty note in every brief that the sandbox has no debugger.

Lessons:
  - When a log is not enough — and the debugger keyword
  - Reading a paused frame: locals, closure, this
  - The call stack: who called me, and with what
  - Step over, into, out — predict the next line
  - Conditional breakpoints: write the condition, not 137 clicks

Graded how:
kind:"js", fixture-driven. The starter contains a PAUSE object that is a faithful serialization of what DevTools shows at a breakpoint: { line: 42, source: [...listing...], callStack: [{fn, line, args}], scope: { local: {...}, closure: {...}, this: null } }. You cannot simulate the TOOL; you can absolutely grade the INFERENCE the tool exists to support, and that inference is the part that is hard and that transfers. Lesson 2: valueOf(PAUSE, 'total') → 0, and a shadowing case where local and closure both hold 'items' — T.eq(valueOf(PAUSE,'items'), LOCAL_ITEMS) proves the learner picked the inner scope. Lesson 3: T.eq(whoCalled(PAUSE), 'checkout') and T.eq(argsAt(PAUSE, 1), [{ id: 7 }, 0.2]). Lesson 4 is the sharpest: given the source listing and the paused line, nextLine(PAUSE, 'over') → 43, nextLine(PAUSE, 'into') → 88, nextLine(PAUSE, 'out') → 19; test runs all three commands against two different pause fixtures, one of which is paused on a line with no call so 'into' must behave like 'over'. Lesson 5: learner writes the condition as a predicate function matching what they would type into a conditional breakpoint; the test evaluates it across 200 synthetic iterations and asserts it is true at exactly one — T.eq(hits.length, 1) and T.eq(hits[0], 137) — so both a too-loose and a hardcoded i===137 that ignores the actual bug signature are caught by a second dataset. The debugger keyword is TAUGHT and cheatsheeted but never graded, because it is inert in a worker and in a sandboxed iframe with no devtools attached. Saying so plainly in the brief is the whole integrity of this unit.

### 6. Unit 6 — Bugs that are not in your JavaScript
Half of what looks like a JS bug is a request that failed, a payload that lied, or a listener that never attached. Triage a failure to a cause AND an owner (mine vs theirs), spot shape mismatches between what the API sent and what your code assumed, and debug the handler that never fired.

Lessons:
  - Read a failed request: status, method, URL, headers
  - 401 vs 403 vs CORS vs 500 — whose bug is it?
  - The payload lied: shape mismatch at the boundary
  - The handler that never fired: DOM and event bugs

Graded how:
Lessons 1-3 kind:"js" using lesson.mock, which harnessMock already installs in the WORKER as well as the iframe. Lesson 1: learner writes describe(res) → 'GET /api/cart failed with 404'; test asserts exact strings for four mocked endpoints. Lesson 2 grades the OWNER call, which is the actual skill: triage(res) → { cause, owner } and T.eq(triage(res401), { cause: 'token missing or expired', owner: 'mine' }), T.eq(triage(resCors), { cause: 'server did not send the allow-origin header', owner: 'theirs' }), T.eq(triage(res500), { cause: 'server threw', owner: 'theirs' }) — a learner who answers 'mine' for everything fails. Lesson 3: learner writes shapeDiff(expected, got) → ['missing: user.email', 'wrong type: items (object, expected array)'] against a mocked payload that changed under them; test asserts the exact diff array and asserts it returns [] for a matching pair. Lesson 4 is kind:"web" and works today unchanged: a real page with three planted bugs — a selector missing its dot, a listener bound before the node exists, and a submit handler with no preventDefault. Test drives it: T.click('#buy'); T.expect(T.text('#cart') === '1 item'); T.submit('#form'); T.expect(T.$('#status').textContent === 'saved'). NOTE this unit has the highest duplication risk in the course — see overlaps.

### 7. Unit 7 — Debug a real app
Everything at once, on code the learner did not write, with no hint about where the bug is. Two multi-bug hunts — one front-end, one back-end — plus a final quiz. The projects require a written diagnosis, not just a green suite, so a learner cannot pass by deleting and rewriting.

Lessons:
  - Project: The broken TaskMaster
  - Project: The lying API
  - Final quiz: Debugging & Diagnosis

Graded how:
Project 1 is kind:"web": a working-looking TaskMaster with five planted bugs, one per category taught — a wrong selector (U6), an off-by-one in a slice (U3), a stale closure captured in a loop (U5), an await that was never awaited (U2), and a mutation aliasing bug where two rows share an object (U4). Checkpoints are the app's own acceptance tests driven through T.click/T.type/T.submit/T.sleep. Anti-rewrite guard: a final checkpoint requires the learner to fill a DIAGNOSIS array — T.eq(DIAGNOSIS.length, 5) and T.eq(DIAGNOSIS.map(d => d.line).sort(), [14,31,52,77,90]) and T.eq(DIAGNOSIS[2].cause, 'stale closure') against a fixed vocabulary listed in the brief. You must have LOCATED each bug, not just made the page work. Project 2 is kind:"js": a handleRequest(req) in the exact srv/ contract with three planted bugs — a 405 branch placed above the GET branch so it swallows real routes, a filter that mutates the shared store, and a pagination off-by-one. Graded by the srv REST contract assertions plus the same DIAGNOSIS requirement. Final quiz: 8 questions, code-block format matching srv-quiz-1 and dom-quiz-7, all four choices near-equal length to stay under the 40% length-tell gate that tools/validate.js enforces.

## Projects
- Project: Shrink the repro (Unit 3) — a 120-line script that throws. Reduce it to a MINIMAL string under 6 lines that still throws the identical error name and message, with the three irrelevant helpers gone. The test evals the learner's MINIMAL, compares the thrown error to the original, and enforces the line and reference limits — so 'delete everything' fails as hard as 'change nothing'.
- Project: The broken TaskMaster (Unit 7, kind:"web") — a working-looking task app with five planted bugs, one per category taught: wrong selector, off-by-one slice, stale closure in a loop, un-awaited promise, and mutation aliasing where two rows share one object. Graded by the app's own acceptance tests driven through T.click/T.type/T.submit/T.sleep, PLUS a DIAGNOSIS array naming each bug's line and cause from a fixed vocabulary — so passing requires having located the bugs, not having rewritten around them.
- Project: The lying API (Unit 7, kind:"js") — a 90-line handleRequest(req) in the exact srv/ contract with three planted bugs: a 405 branch ordered above the GET branch so it swallows live routes, a filter that mutates the shared store, and a pagination off-by-one. Graded by the srv REST assertions plus the same DIAGNOSIS requirement.

## Risks
- FIXTURE DRIFT — the biggest content risk. Unit 2 and Unit 5 hand the learner serialized traces and paused frames as strings and objects. Done badly, the learner spends four lessons practicing string parsing and never practices debugging. Mitigation: exactly ONE lesson (U2-1) parses raw text; every lesson after it receives pre-parsed structures and grades judgment — blame(), whoCalled(), nextLine(), triage(). If a checkpoint's failure message would be about a regex, the lesson is wrong.
- THE REWRITE ESCAPE HATCH — 'fix the planted bug' is not the same graded object as 'make the tests pass'. A learner can delete the broken function, reimplement it from scratch, go green, and have learned nothing about locating anything. This is the structural weakness of every auto-graded debugging exercise and it is why both Unit 7 projects require a DIAGNOSIS array with exact line numbers and a fixed cause vocabulary. Even so, a determined learner can brute-force the line numbers from the checkpoint feedback; accept this and keep the diagnosis checkpoint LAST so the feedback arrives only after the work.
- WRONG LINE NUMBERS TODAY — runner.js reports blob: URLs in worker stacks and an un-offset e.lineno from the iframe's window.onerror, so the console panel currently shows misleading locations in all eight shipped courses. Nobody has noticed because no lesson asks. A debugging course asks on every page. Fix (b) is not optional polish, it is a blocking prerequisite, and shipping U1/U2 before it would actively teach the learner to distrust the tool.
- TOP-LEVEL THROWS KILL THE ENTIRE RUN — buildWorkerSrc catches a top-level throw as __fatal and finishes with ZERO steps graded. So no starter file in this course may throw at module scope, and no lesson can be structured as 'step 1: observe the crash, step 2: fix it'. Every planted bug must live inside a function the test invokes. This is a hard authoring constraint that will be violated by accident at least once; tools/validate.js already runs every starter and asserts it does NOT pass, which catches the symptom but not the cause — worth adding a validator rule that a dbg/ starter must still produce at least one graded step.
- UNIT 5 IS THE FIDELITY GAP AND IT COULD READ AS A WORKSHEET — five lessons about breakpoints in a sandbox that has no debugger. I believe the inference is the transferable part and the fixtures grade it honestly, but the learner must be told plainly in every brief that this is reasoning practice, not tool practice, and each brief needs a concrete 'open your browser, press F12, do exactly this on a real page' callout. If the owner is not willing to ship that honesty note, cut Unit 5 to two lessons (paused frame, call stack) and drop the course to 31 items.
- T.logged IS SUBSTRING MATCHING — grading console.table or console.group output depends entirely on the shim serializing deterministically. If the serialization changes later, checkpoints across Unit 4 break silently and confusingly. Mitigation: pin the serialization format in a comment in harnessCommon, add T.logLines()/T.countLogged() so tests can assert structurally rather than by substring, and never assert on console.time's millisecond value.
- UNIT 6 IS THE DUPLICATION SOFT SPOT — lessons 1-2 sit close enough to async/u3 that a reasonable reviewer could call them redundant. The { cause, owner } return value and the disjoint status-code split are real separations, but if the owner disagrees these are the two items to thread back into async/u3 rather than defend.
- SCOPE CREEP TOWARD A REAL DEBUGGER — once probe() and the paused-frame fixtures exist, the temptation to 'just add stepping' is strong, and that path ends at a 900-line toy-language interpreter with a fidelity gap. The 260-line engine budget is the decision; revisiting it should be a separate, explicit call about vendoring a parser, not a drift.
