# Testing Fundamentals — "how do you know it works"

## Verdict
STANDALONE — Course 9, 40 items, ~9h, prefix "test", level Intermediate. Three reasons, in order of weight. (1) It is the only proposed course that ships with ZERO new engine code. Shell, git, npm, SQL, devtools and deploy each need a real interpreter built first; this one needs nothing — the worker already runs assertions, and the checkpoint source is concatenated into the SAME eval scope as the learner's code (runner.js line 279: `evalBlob = userCode + "\n;\n" + stepsSource`), so a checkpoint can call the learner's own `run()`, read their `results` array, and reassign their `function average(...)` to a broken version. Build it first; it is free. (2) The gradeable surface is much bigger than "3 hours of Mocha." Codecademy splits this into TWO courses (Learn JavaScript Unit Testing, 3h, + Learn Testing for Web Development, 3h) and still skips test doubles and DOM testing. Building the runner by hand, spies-as-closures, a hand-rolled fake clock, async assertion recording, DOM-level tests, and mutation-graded suites is 8-10h of genuinely new material — comparable to Responsive Design (6h/30) or Back-End Foundations (8h/38). (3) Folding it in would destroy the one thing that makes it teachable. The course's core grading trick — run the learner's suite against a deliberately broken implementation and require it to FAIL — needs the learner to already own a runner they built in Unit 2. Sprinkled as three lessons at the end of Course 4 and three at the end of Course 7, there is no runner to own and every lesson has to hand them a black box. WHAT I WOULD NOT MAKE STANDALONE, and the owner is right about this: web security. XSS/secrets/input validation belongs inside srv/u5 (Auth-lite) and srv/u6 (Validation), exactly as he said. Testing does not — it has its own mental model and its own artifact.

## Size
40 items, ~9h

## Engine needs
NOTHING IS REQUIRED. All 40 items run in the two existing runtimes unmodified. That is this course's whole strategic advantage over the other seven proposals, and I want to be blunt about why: the checkpoint source is concatenated into the SAME eval blob as the learner's code (runner.js: `var evalBlob = String(userCode) + "\n;\n" + stepsSource(lesson)`), so a checkpoint can (a) call the learner's `it()`/`run()`/`expect()` directly, (b) read their `results` array, and (c) reassign any binding declared with `function` or `let` — which is exactly the mutation-testing swap the course is built on. No shell, no VM, no parser, no filesystem.

THREE OPTIONAL PIECES, ranked by value-per-line:

1. `T.mutate(name, impl, runFn)` — ~25 lines added to harnessCommon in runner.js, one hour of work, and I WOULD build this before authoring Unit 3. It collapses the 12-line mutant boilerplate every U3/U4/U7/U8 checkpoint needs into one call, and — the real reason — it gives one place to produce a good error when the swap silently fails:
   mutate: function (name, impl, runFn) {
     var g = (typeof self !== 'undefined') ? self : window, orig = g[name];
     if (typeof orig !== 'function') throw new Error('The checks need to swap in a broken ' + name + '() — keep it declared with `function ' + name + '(...)`.');
     g[name] = impl;
     if (g[name] === orig) { throw new Error('Could not replace ' + name + ' — is it declared with const? Change it back to `function`.'); }
     try { return runFn(); } finally { g[name] = orig; }
   }
   Caveat, and it drives an authoring rule: this reaches the worker's GLOBAL binding, which is where `function` and `var` declarations from an indirect eval land. A `const`/`let` in the eval's lexical scope is visible to checkpoints but a global assignment will not shadow it. Rule for every starter in this course: anything the checkpoint mutates is declared `function foo() {}`, never `const foo = () => {}`.

2. `testlab.js` — a real spec reporter panel. ~180 lines, 1-2 days, ships as a plain <script>, no build step, and it follows the existing `harnessMock` precedent EXACTLY: a `harnessSpec()` function stringified and injected into the sandbox (runner.js already does `"(" + harnessMock.toString() + ")(" + JSON.stringify(lesson.mock) + ");"` — same move). It defines real `describe/it/expect/beforeEach` globals for lessons that opt in via `lesson.spec: true`, and posts `{type:'spec', suite, name, pass, ms, error}` per test; runner.js forwards to `hooks.onSpec`; app.js renders a green/red spec list beside the console. Scope check: ~60 lines of matchers, ~50 of the it/describe/beforeEach registry with async support, ~30 of message plumbing, ~40 of UI. What it buys: the green-bar dopamine that makes TDD click. What it must NOT do: exist before Unit 4. Units 1-3 are the learner BUILDING that framework; handing it to them first deletes the best two units in the course. Ship 1-3 with console-only output, add the panel for 4-8. It is polish, not a blocker.

3. A line-coverage instrumenter — DO NOT BUILD. Correct line coverage needs a real JS parser; regex-injecting `__cov(n)` after every `;`/`{` breaks on template literals, regex literals, comments, brace-less arrow bodies and ASI. Realistically 800+ lines plus a permanent bug farm, to teach one idea. Replaced entirely by hand-placed `mark('branch')` calls in the starter (six lines, U8 L1), which grade identically and are arguably clearer about what a coverage report actually means.

WHAT GENUINELY CANNOT BE AUTO-GRADED HERE, and what I do instead rather than fake it:
- Real `npm test`, watch mode, config files, CI pipelines → cheatsheet panel showing the actual Vitest/GitHub-Actions syntax side-by-side (the exact move srv/u1 makes with Express) + quiz questions. The runnable half belongs to the proposed Node/npm and Deploying courses.
- E2E / Playwright / real browser automation → impossible; U7's iframe DOM tests are the honest stand-in, and the final quiz names the gap explicitly.
- Snapshot testing → needs a persisted snapshot file; localStorage is an in-memory shim that resets every run. Cut as a lesson; one quiz question + a cheatsheet panel.
- Module mocking (`vi.mock`, `jest.mock`) → no module registry exists. Replaced by dependency injection throughout U5/U6, which The Odin Project would argue is the better lesson anyway.
- "Is this test WELL WRITTEN / well named / valuable?" → only approximable. Mutants approximate it well; a regex on test names is a weak proxy that I use as a nudge, never as the sole gate on a step.
- Usability, cross-browser, performance and security testing → named in the final quiz so the vocabulary exists, taught nowhere. Security specifically goes to srv/u5-u6 per the owner.

## Teachable today
ALL 40 ITEMS, unchanged, in the two existing runtimes. Breakdown: 35 items are kind "js" (Units 1-6 and 8) and need only the Web Worker — the learner writes plain JS, the checkpoint calls their functions and swaps their bindings. 5 items are kind "web" (Unit 7) and need only the sandboxed iframe — real DOM, real `document.createElement`, real `dispatchEvent`, and T already ships `$`, `$$`, `text`, `count`, `click`, `type`, `submit`, `sleep`. Nothing needs the `mock` map except one optional demo in U6 L3; the fetch fakes are hand-written by the learner, which is the point of that unit.

Sequencing consequence: BUILD THIS COURSE FIRST out of the eight proposed. Author U1→U8 in order and every unit is shippable the day it is written. Contrast with the other proposals, which are all blocked on writing an interpreter before lesson 1 exists.

Two runtime constraints that shaped the design rather than blocking it. (1) The 7s whole-run watchdog and 2.5s per-step guard: a 10-test synchronous suite runs in under 5ms, so there is enormous headroom — but it is why U5's fake clock is a lesson rather than a footnote (real waiting would eat the budget; faking it costs 0ms and teaches the better habit) and why U6's async lessons use resolved promises and the fake clock rather than real timeouts. (2) Mutants must be function replacements applied AFTER eval, and must always terminate — a non-terminating mutant would trip the watchdog and fail the lesson with a confusing timeout instead of a teaching message.

Prerequisite chain, which also means the course can be entered early: Units 1-6 need only Course 4 (Learn JavaScript) — closures, callbacks, array methods, promises. Unit 7 additionally needs Course 5 (Interactive Websites). Unit 8's capstone needs Courses 6 and 7. So a learner can take U1-U6 straight after JavaScript, which is roughly where Codecademy and Odin both slot testing in.

## Overlaps
Eight real collisions with the existing 304 items, each with a hard boundary rule. The general principle: in this course the SUBJECT CODE IS ALWAYS ALREADY WRITTEN. The learner writes tests, fakes and assertions — never the feature. Any lesson that drifts into writing the feature has become a rerun of an earlier course.

1. js/u4-5 "Pure functions & immutability" — already teaches purity. My U5 L1 must NOT re-teach it. It teaches TESTABILITY as the motive and DEPENDENCY INJECTION as the artifact; purity is referenced in one brief sentence ("you already know why pure functions are nice — here is the reason that shows up at 2am") and one cheatsheet line.
2. js/u4-3 "Callbacks" and js/u4-4 "Closures" — a spy IS a closure over an array. My U5 L2 must not explain closures. The starter comment assumes them; the lesson is "a callback that REMEMBERS," and the checkpoint's interesting assertion is the one proving each spy has its own array (i.e. that the learner put the state inside the closure, not outside).
3. dom/u7 "Timers & motion" — owns setTimeout/setInterval/clearInterval/rAF. My U5 L4 must not teach timers. It teaches REPLACING them: the brief opens "you know setTimeout from Interactive Websites — now you are going to take it away from your code and hand it a clock you control." No lesson in this course calls the real setTimeout.
4. async/u3 "When things go wrong" (res.ok, try/catch with await, building rejections) — the sharpest collision, with my U6. Hard rule: NO starter in U6 asks the learner to write a try/catch around a fetch. The fetch-handling code ships complete in every U6 starter; the learner writes only the fake and the assertions. async/u3 = how to HANDLE failure. test/u6 = how to PROVE you handle it.
5. async/u2 + the harnessMock `mock` map — using `mock` broadly would make U6 feel like Async course reruns. I use it in exactly one lesson to show what a request-level fake looks like, then switch to learner-written injectable fakes for the rest.
6. srv/u1-u8 `handleRequest` — the U8 capstone deliberately reuses the bookmarks API from srv/u7, and that reuse is the course's best closing argument. But the learner writes ~40 lines of TESTS and ~4 lines of bug fix. If they build routes, it is Course 7 again; the starter therefore ships the full handler with two planted bugs rather than any skeleton.
7. dom/u1-u3 (DOM, events, delegation) — U7 assumes all of it. The learner never writes `addEventListener` in this course; components ship wired, and the learner dispatches events from OUTSIDE, as a user would.
8. cap/u5 "Polish & a11y" (labels, buttons, alt, keyboard) — my U7 L2 "query by text and role" risks duplicating it. Boundary: cap/u5 teaches ADDING accessible names; test/u7 teaches QUERYING BY them, and the payoff framed is refactor-resilience ("a test that finds the button by its label survives the day you change its class"), with the a11y benefit named as a bonus, not the lesson.

Quiz-level overlap: js quizzes already cover `===` vs deep comparison. My U1 quiz must key specifically on assertion semantics — why `toBe` on two literal objects fails in a test, why floats need `toBeCloseTo`, why a `console.log`-and-eyeball is not a test — not on equality in general.

Reverse direction, worth flagging to the owner: once this course exists, srv/u7 and cap/u6 should each gain ONE cross-reference line pointing at it. That is a two-line edit, not a restructure.

## Units

### 1. U1 — Assertions: the smallest test there is
An assertion is not magic and not a framework: it is a comparison that THROWS. Equality vs deep equality (the #1 beginner bug: {a:1} !== {a:1}), and the four matchers that cover 90% of real tests. All kind "js", worker.

Lessons:
  - Why tests exist: the bug that came back
  - expect().toBe(): an assertion is a throw
  - toEqual: why {a:1} isn't {a:1}
  - The matcher family: truthy, contain, throw, close
  - Unit 1 quiz: Assertions

Graded how:
Learner types a real matcher object. Lesson 2 starter: `function expect(actual) { return { toBe(expected) { /* throw if not === */ } }; }`. Checkpoint (worker, same scope) asserts BOTH directions and the message quality:
  T.expect(typeof expect === 'function', 'Define expect(actual).');
  expect(2).toBe(2);                       // must NOT throw — if it does, the step fails with that error
  var threw = false, msg = '';
  try { expect(2).toBe(3); } catch (e) { threw = true; msg = e.message; }
  T.expect(threw, 'expect(2).toBe(3) must THROW — that is all an assertion is.');
  T.expect(/2/.test(msg) && /3/.test(msg), 'The error must name BOTH values so a failing test tells you what happened. Yours said: ' + msg);
Lesson 3 adds toEqual and grades the distinction directly: `expect({a:1}).toEqual({a:1})` must not throw; `expect({a:1}).toBe({a:1})` must throw; `expect([1,2]).toEqual([1,3])` must throw. Lesson 4 grades toThrow by handing the learner's matcher a function that throws and one that doesn't, and toBeCloseTo with 0.1+0.2.

### 2. U2 — Build the runner: describe, it, and a report
Jest/Vitest demystified. it() is a try/catch that records instead of crashing; describe() is a label; the report is a reduce. beforeEach is why tests don't poison each other. After this unit the learner owns a working test framework, which every later unit uses. All kind "js".

Lessons:
  - it(name, fn): catch the throw, record the result
  - describe: grouping tests that belong together
  - The report: passed, failed, and a summary you can read
  - beforeEach: a fresh fixture for every test
  - Unit 2 quiz: Inside a test runner

Graded how:
Learner types `let results = []; function it(name, fn) { ... }`. The checkpoint REGISTERS TESTS BY CALLING THE LEARNER'S OWN it() and then inspects what it recorded:
  it('a passing one', function () { expect(1).toBe(1); });
  it('a failing one', function () { expect(1).toBe(2); });
  T.eq(results.length, 2, 'Every it() must push one entry into results.');
  T.eq(results[0].pass, true, 'A test whose body does not throw is a pass.');
  T.eq(results[1].pass, false, 'A test whose body throws is a FAIL — recorded, not rethrown.');
  T.expect(/2/.test(results[1].error||''), 'Store the thrown message on the entry so the report can print it.');
  T.expect(true, 'and the run did not crash — that is the whole point of the try/catch');
Lesson 3: T.eq(report(), {total:3, passed:2, failed:1}) plus T.expect(T.logged('2 passed'), ...). Lesson 4 (beforeEach) is graded by RE-RUNNING: the checkpoint calls run() twice and asserts the second run's results are identical to the first — a suite that leaks state between tests produces different output on run 2, so the check fails with 'Your second run disagrees with your first — test 2 is seeing what test 1 left behind. Reset the cart in beforeEach.'

### 3. U3 — What makes a test good
AAA structure, one behavior per test, edge cases, and the unit that names the course's grading contract out loud: a test that cannot fail is not a test. This is where mutation testing is introduced AS A CONCEPT so the grading stops feeling arbitrary. All kind "js".

Lessons:
  - Arrange, Act, Assert
  - One behavior per test, named like a sentence
  - Edge cases: empty, zero, negative, missing
  - The mutant test: a test that can't fail isn't a test
  - Unit 3 quiz: Good tests, bad tests

Graded how:
THE CORE PATTERN OF THE WHOLE COURSE. Starter ships `function average(nums) { ... }` (correct) and an empty suite. Learner types tests. Checkpoint runs their suite against the good version, then swaps in mutants one at a time and demands a failure from each:
  T.eq(run().failed, 0, 'Your tests must all pass against the CORRECT average().');
  T.expect(run().total >= 4, 'Four behaviours, four tests.');
  var good = average;
  function survives(impl, hint) {
    average = impl; var r = run(); average = good;
    T.expect(r.failed > 0, hint);
  }
  survives(function (n) { return n.reduce((a,b)=>a+b,0) / (n.length - 1); },
           'A version of average() that divides by length-1 passed ALL your tests. Add a case with a known answer, e.g. average([2,4]) === 3.');
  survives(function (n) { return n.filter(x => x > 0).reduce((a,b)=>a+b,0) / n.length; },
           'A version that silently drops negative numbers passed all your tests — add a case with a negative.');
  survives(function (n) { return n.length ? good(n) : 0; },
           'A version that returns 0 for [] passed — decide what average([]) should do and assert it.');
Note the mutants are chosen to defeat lazy assertions: one returns a plausible wrong NUMBER, so `expect(out).toBeTruthy()` does not survive it. Lesson 2 additionally asserts that three DIFFERENT mutants each break a DIFFERENT named test — proof the tests are not three copies of one assertion. Authoring rule this unit establishes: anything the checkpoint mutates must be declared `function` or `let` in the starter, never `const`.

### 4. U4 — Test-driven development
Red → green → refactor, done for real inside one lesson: checkpoint 1 requires the suite to FAIL, checkpoint 2 requires it to pass. Then the regression test — the single highest-value habit for a self-taught dev. All kind "js".

Lessons:
  - Red: write the test for code that doesn't exist
  - Green: the simplest thing that passes
  - Refactor: changing code under a green bar
  - The bug-report test: reproduce it before you fix it
  - Project: TDD a Roman-numeral converter (red → green → refactor)
  - Unit 4 quiz: TDD

Graded how:
Red is graded as a REQUIRED FAILURE. Starter: `function romanNumeral(n) { }` (returns undefined) plus an empty suite.
  Step 1: T.expect(run().total >= 1, 'Write at least one test first.'); T.expect(run().failed >= 1, 'Right now romanNumeral() returns undefined, so your test MUST be red. If it is green, your test is not asserting anything.');
  Step 2 (learner now implements): T.eq(run().failed, 0, 'Now make it green.'); and — critically — the checkpoint carries its OWN independent assertions so a hardcoded `return "IV"` cannot pass: T.eq(romanNumeral(4),'IV'); T.eq(romanNumeral(9),'IX'); T.eq(romanNumeral(1987),'MCMLXXXVII');
Refactor lesson: starter has correct-but-duplicated code plus a full green suite. Graded on three things at once — their suite still reports 0 failures, the checkpoint's own assertions still pass, and `T.expect(typeof toDigits === 'function', 'Extract the repeated block into a named helper.')`. Behaviour unchanged, shape changed: that IS refactoring, and the green bar is what proves it.
Bug-report lesson: the brief is a literal ticket ('total([{price:1.1},{price:2.2}]) shows 3.3000000000000003'). Step 1 requires run().failed >= 1 with a test naming the reported input; step 2 requires 0 failures AND T.close(total([{price:1.1},{price:2.2}]), 3.30, 0.001).

### 5. U5 — Test doubles: stubs, spies and fakes
Why some code is untestable and the one fix that works without a module system: inject the dependency. Then build the doubles by hand — a spy is a closure with an array, a stub is a function that returns a constant, a fake clock is a queue plus a counter. This unit exists BECAUSE we have no vi.mock(); the constraint produces better teaching. All kind "js".

Lessons:
  - Code you can't test, and the fix: inject the dependency
  - A spy that remembers every call
  - Stubs: pinning down randomness and time
  - Fake the clock: testing timeouts without waiting
  - Unit 5 quiz: Doubles

Graded how:
Spy lesson — learner types `function makeSpy() { ... }`. Checkpoint drives it directly:
  var spy = makeSpy(); spy('a'); spy('b', 1);
  T.eq(spy.calls, [['a'],['b',1]], 'Record the ARGUMENTS of every call, one array per call.');
  T.eq(spy.callCount, 2, 'Count them too.');
  var s2 = makeSpy(); T.eq(s2.calls, [], 'Each spy needs its OWN calls array — if this is [[\'a\'],[\'b\',1]] you put calls outside the closure and every spy shares one.');
Injection lesson — learner refactors `sendWelcome(user)` into `sendWelcome(user, emailer)`. Graded: T.expect(sendWelcome.length >= 2, ...) then a spy is passed in and the checkpoint asserts T.eq(spy.calls[0][0], 'ada@example.com') and that the real emailer was never touched (a module-level `sent` array must still be empty).
Fake clock — learner types `function makeClock() { return { now(), setTimeout(fn,ms), tick(ms) } }`, then tests `isExpired(token, clock)`. Checkpoint asserts the boundary precisely: clock at t=0 → not expired; clock.tick(59999) → not expired; clock.tick(1) → expired; and that a callback queued at 300ms fires exactly once after tick(1000) (`T.eq(spy.callCount, 1, 'tick(1000) must not fire the same callback three times')`). Runs in ~1ms of real time, which also keeps us inside the 7s watchdog — the pedagogical point and the engineering constraint agree.

### 6. U6 — Testing async code
How a runner survives a promise: await inside the try/catch, or a rejected test becomes an unhandled rejection nobody sees. Then proving rejections, faking fetch, and the unhappy paths. All kind "js"; T.step is already async so `await` in a checkpoint works today.

Lessons:
  - Awaiting an assertion: async it()
  - Proving a rejection: expectRejects
  - A fake fetch you control
  - Testing the unhappy path: 500s, junk JSON, timeouts
  - Unit 6 quiz: Async tests

Graded how:
Lesson 1 — learner upgrades their own it() from U2 to await the body and their run() to return a promise. Checkpoint registers a deliberately rejecting test through the learner's it() and awaits the run:
  it('async pass', async function () { expect(await Promise.resolve(2)).toBe(2); });
  it('async fail', async function () { expect(await Promise.resolve(2)).toBe(3); });
  var r = await run();
  T.eq(r.failed, 1, 'A rejected async test must be RECORDED as a failure. If failed is 0 your it() is not awaiting fn() — the assertion throws after the try/catch has already exited.');
  T.eq(r.passed, 1, 'and the passing async test still passes');
Lesson 3 — learner writes `function fakeFetch(routes) { ... }` returning a spy-fetch that resolves `{ ok, status, json() }`. Checkpoint: `var f = fakeFetch({'/api/users/7': {name:'Ada'}}); T.eq(await loadUser(7, f), {name:'Ada'}); T.eq(f.calls[0][0], '/api/users/7', 'Assert the URL your code BUILT — that is the bug fakes catch.');`
Lesson 4 — three stubs, three branches, one checkpoint each: a 500 stub must make loadUser reject with /server/i; a stub whose json() rejects must surface a parse error not a crash; a stub that never resolves must be cut off by the code's own timeout (tested with the U5 fake clock, so it costs 0ms). BOUNDARY WITH async/u3: the fetch-handling code is ALREADY WRITTEN in every starter here. The learner writes only tests and fakes, never a try/catch around fetch.

### 7. U7 — Testing the DOM
Integration-level testing in the real iframe: render a component into a container, query it the way a user sees it, fire a real event, assert the result. This is hand-rolled Testing Library, and it works today with no engine work — kind "web", real DOM, real CSS, real MouseEvents.

Lessons:
  - Render into a container, query, assert
  - Query the way a user looks: by text and role
  - Fire a real event, assert the rendered result
  - Project: Test a live component — the counter card
  - Unit 7 quiz: DOM tests

Graded how:
kind "web". The component (`renderCounter(root, state)` and its click handler) SHIPS WRITTEN in script.js; the learner writes only the suite. Their tests create a detached container so nothing leaks:
  it('starts at zero', () => { const box = document.createElement('div'); renderCounter(box, {count:0}); expect(box.querySelector('[data-count]').textContent).toBe('0'); });
Checkpoint asserts their suite is green, then mutates the shipped handler and demands red — same contract as U3, now against the DOM:
  T.eq(run().failed, 0, 'Your tests should pass against the working counter.');
  var good = increment; increment = function (s) { return { count: s.count + 2 }; }; var r = run(); increment = good;
  T.expect(r.failed > 0, 'A counter that adds 2 per click passed all your tests — click once and assert the exact rendered text, not just that it changed.');
Lesson 2 grades a `byText(root, label)` helper: it must find `<button>Add</button>` by visible text, must ignore case/whitespace, and must THROW a helpful message when absent (`T.expect(/not find|no element/i.test(msg))`). Lesson 3 grades a real dispatched event inside the learner's own test (`el.dispatchEvent(new MouseEvent('click', {bubbles:true}))`), plus a checkpoint mutant. Lesson 4 (project) grades cleanup by running the whole suite twice and requiring identical results — a suite that appends to document.body without a beforeEach fails run 2.

### 8. U8 — Coverage, strategy and the capstone
What coverage actually measures, why 100% still ships bugs, and the closing move: test somebody else's API. Ends by pointing the learner at the real toolchain (npm test, watch mode, CI, Playwright) via cheatsheet + quiz — labelled honestly as 'not runnable here'. kind "js".

Lessons:
  - Which branches did your tests actually reach?
  - 100% coverage, still broken: the boundary you missed
  - Project: Bookmarks API test suite — find the two shipped bugs
  - Final quiz: Testing Fundamentals

Graded how:
COVERAGE WITHOUT AN INSTRUMENTER. The starter's function carries hand-placed markers — six lines, no parser:
  let hit = {}; function mark(b) { hit[b] = true; }
  function shippingCost(order) { if (order.total > 100) { mark('free'); return 0; } if (order.intl) { mark('intl'); return 25; } if (order.total <= 0) { mark('bad'); throw new Error('empty order'); } mark('flat'); return 5; }
Learner writes tests until every branch fires. Checkpoint: `T.eq(run().failed, 0, ...); T.eq(Object.keys(hit).sort(), ['bad','flat','free','intl'], 'Branches never reached: ' + ['free','intl','bad','flat'].filter(b => !hit[b]).join(', ') + ' — write a case for each.');` Concrete, honest, and it teaches exactly what a coverage report tells you.
Lesson 2: same function, now 4/4 branches but the boundary is wrong (`> 100` should be `>= 100`). Their green 100%-coverage suite is confronted with a boundary mutant it misses; the step demands a test at exactly 100. Message: 'Every branch ran and the bug survived. Coverage tells you what you TOUCHED, never what you CHECKED.'
CAPSTONE PROJECT: the starter is srv/u7's `handleRequest` bookmarks API, verbatim except for two planted bugs (POST with an empty title returns 201 instead of 400; DELETE of a missing id returns 200 instead of 404). Three checkpoints: (1) their suite must report >= 2 failures naming distinct routes against the shipped code — `T.expect(r.failed >= 2 && new Set(r.results.filter(x=>!x.pass).map(x=>x.name)).size >= 2, ...)`; (2) after they patch the handler, 0 failures AND the checkpoint's own independent route assertions pass; (3) four checkpoint mutants (id counter that never increments, 405 downgraded to 404, filter that ignores the query param, PATCH that replaces instead of merges) must each be caught. The learner writes ~40 lines of tests and ~4 lines of handler fix — Course 7 is not re-taught, it is verified.

## Projects
- U4 — Project: TDD a Roman-numeral converter (red → green → refactor). Learner writes the failing test first; step 1 REQUIRES run().failed >= 1, step 2 requires 0 failures plus the checkpoint's own independent assertions on 4, 9, 40 and 1987 so a hardcoded return cannot pass; step 3 requires an extracted named helper with the bar still green.
- U7 — Project: Test a live component (the counter card). kind "web". The component ships written; the learner writes a full DOM suite with a beforeEach that wipes the container. Graded on a green bar, a mutant handler that increments by 2, and a double-run that must produce identical results.
- U8 — Capstone: Bookmarks API test suite. srv/u7's handleRequest shipped with two planted bugs (empty-title POST returns 201 not 400; DELETE of a missing id returns 200 not 404). Graded in three checkpoints: the suite must go red on >= 2 distinct routes before the fix, green after it with the checkpoint's own route assertions passing, and must catch four supplied mutants (non-incrementing id counter, 405 downgraded to 404, ignored query filter, PATCH that replaces instead of merging).

## Risks
- GAMING THE MUTANT GRADER. A blunt assertion like expect(out).toBeTruthy() can accidentally kill a mutant that returns undefined, letting a bad suite pass. Mitigation, applied to every mutant set: at least one mutant must return a PLAUSIBLE WRONG VALUE of the right type — average() that divides by length-1, capitalize() that returns "ADA", a counter that adds 2 — so vague assertions survive it and get caught. Authoring checklist item: 'would expect(x).toBeTruthy() pass this whole step? then the mutant set is too weak.'
- THE WORST FAILURE MESSAGE IN THE APP IS 'your tests pass but the check says no.' This is the single biggest UX risk in the course and it is entirely solvable in copy. Every mutant checkpoint must name the surviving mutant in plain English AND suggest the missing case: 'A version of average() that silently drops negative numbers passed all your tests — add a case with a negative.' Existing checkpoints in srv/u1 and srv/u5 already write at this standard; this course cannot ship below it.
- CONST BREAKS THE SWAP. If a learner (or an author) writes `const average = ...` instead of `function average`, the global reassignment does not shadow the lexical binding and the mutant appears to survive, producing a nonsense failure. Mitigation: T.mutate detects the failed swap and throws a specific message ('Could not replace average — is it declared with const? Change it back to `function`.'), plus an authoring rule that mutated bindings are always `function` declarations, plus a validate.js check that greps starters in this course for `const <mutatedName>`.
- CONCEPTUAL VERTIGO: 'I am writing tests that are graded by tests.' Real, and it hits hardest in U2 where the learner builds an it() that the checkpoint then calls. Mitigation: name it out loud in the U1 and U2 briefs and make it the hook rather than the confusion — 'the checks you have been passing for eight courses are exactly the thing you are about to build.' This is a feature of the course nothing else in the catalog can offer.
- U7 TIMING IN THE IFRAME. The grader fires on load with a 2.5s post-DOMContentLoaded fallback, so any starter component that renders asynchronously would race the suite. Mitigation: every U7 starter renders synchronously; no U7 lesson uses fetch, timers or animation frames in the component under test.
- SCOPE CREEP INTO COURSE 7 IN THE CAPSTONE. The temptation to let learners 'improve' the bookmarks API is strong and would turn the capstone into a Course 7 rerun. Mitigation: the starter ships the complete handler, the bug fix is ~4 lines, and the step text is explicit that the deliverable is the suite.
- SHIPPING U4-U8 WITHOUT THE SPEC PANEL. Fully teachable, but the learner reads their suite results through console.log while real Jest/Vitest gives a green spec list. The TDD red-to-green moment is noticeably flatter. Mitigation: sequence testlab.js (~180 lines, 1-2 days) to land between authoring U3 and U4; it is not a blocker but it is the difference between 'correct' and 'the lesson that makes TDD click.'
- SIZE DRIFT UPWARD. Test doubles and async testing both invite a sixth and seventh lesson, and coverage invites a whole unit. At 40 items / 9h the course already matches Interactive Websites exactly and sits above Back-End Foundations. Hold the line by cutting toward the quiz: anything not gradeable by running code (pyramid classification, CI, snapshots, E2E, flakiness) becomes a quiz question and a cheatsheet panel, never a lesson.
