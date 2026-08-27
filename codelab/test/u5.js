/* Testing Fundamentals — Unit 5: Test Doubles */
window.CODELAB.addUnit("test", {
  id: "test-u5",
  title: "Test Doubles",
  icon: "🕵️",
  blurb: "Inject the dependency, then hand-build the doubles: a spy that remembers, stubs that pin randomness, and a clock you control.",
  cheat: [
    { h: "Inject the dependency", lang: "js", code: "// hard-wired — untestable without side effects\nfunction sendWelcome(user) {\n  realEmailer.send(user.email, \"Welcome!\");\n}\n\n// injected — a test hands in a fake\nfunction sendWelcome(user, emailer) {\n  emailer.send(user.email, \"Welcome!\");\n}", note: "Production passes the real thing; tests pass a double with the same shape." },
    { h: "A spy remembers every call", lang: "js", code: "function makeSpy() {\n  function spy(...args) {\n    spy.calls.push(args);\n    spy.callCount++;\n  }\n  spy.calls = [];\n  spy.callCount = 0;\n  return spy;\n}", note: "The history lives INSIDE makeSpy — every spy gets its own." },
    { h: "A stub answers with a constant", lang: "js", code: "function stub(value) {\n  return function () { return value; };\n}\n\nrollDie(stub(0.999)); // always 6 — randomness pinned\nisOpen(stub(17));     // exactly closing time — boundary checkable" },
    { h: "The fake clock", lang: "js", code: "const clock = makeClock();\nclock.setTimeout(fn, 300);\nclock.tick(1000);  // fn fired exactly once — 0ms of real waiting\nclock.now();       // 1000", note: "tick() advances fake time instantly and fires every due callback once." },
    { h: "Which double?", lang: "js", code: "// stub → answers a question      stub(0.999)\n// spy  → remembers calls         spy.calls, spy.callCount\n// fake → a working mini-version  makeClock(), a fake emailer", note: "All of them exist so the REAL thing never runs in a test." }
  ],
  lessons: [

    {
      id: "test-u5-1",
      title: "Inject the dependency",
      kind: "js", chip: "TEST", xp: 15, mins: 13, spec: true,
      brief: "Some code is honest but untestable: `sendWelcome(user)` mails a real person through a hard-wired `realEmailer`. Run it in a test and you just sent real email — so nobody tests it, and that is exactly where bugs live.\n\nThe fix needs no framework: **inject the dependency**. Make the emailer a *parameter*. Production keeps passing the real one; a test passes a **fake** — an object with the same `send(to, subject)` shape that only records. (You already know pure functions are easy to test — injection is how the impure ones get there too.)\n\nA stand-in like that is called a **test double**. This unit builds the whole family by hand: fakes, spies, stubs, and a clock you control.",
      example: { lang: "js", code: "// production\nsendWelcome(user, realEmailer);\n\n// in a test — same shape, zero side effects\nconst calls = [];\nconst fake = { send: (to, subject) => calls.push([to, subject]) };\nsendWelcome(user, fake);" },
      steps: [
        { text: "Refactor `sendWelcome(user)` → `sendWelcome(user, emailer)` — it calls the **injected** `emailer.send(...)`, not `realEmailer`. (Keep the shipped `sent` outbox and `realEmailer` in place.)",
          test: "T.expect(typeof sendWelcome === 'function', 'Keep sendWelcome as a function declaration.');\nT.expect(sendWelcome.length >= 2, 'sendWelcome must take the emailer as a SECOND parameter: sendWelcome(user, emailer).');\nvar recorded = [];\nsendWelcome({ name: 'Ada', email: 'ada@example.com' }, { send: function (to, subject) { recorded.push([to, subject]); } });\nT.eq(recorded.length, 1, 'sendWelcome must call emailer.send exactly once.');\nT.eq(recorded[0][0], 'ada@example.com', 'Send TO the user email — the first argument of send(to, subject).');\nT.expect(/Ada/.test(String(recorded[0][1])), 'The subject should greet the user by name — it must contain Ada.');\nT.eq(sent, [], 'The REAL outbox must stay empty — if sent has an entry, sendWelcome is still hard-wired to realEmailer.');" },
        { text: "Write a test that hands `sendWelcome` a **fake emailer you build inline** — assert the address and subject it recorded.",
          test: "var r = await run();\nT.expect(r.total >= 1, 'Write at least one test — build a fake emailer inline and hand it to sendWelcome.');\nT.eq(r.failed, 0, 'Your test must pass against the real sendWelcome.');\nT.eq(sent, [], 'After your whole suite ran, the real outbox is STILL empty — every test hands in a fake, never realEmailer.');" },
        { text: "Your suite catches broken versions of `sendWelcome` — the checks swap them in.",
          test: "var r = await run();\nT.eq(r.failed, 0, 'Your suite must be green against the real sendWelcome before we break it.');\nvar r2 = await T.mutate('sendWelcome', function (user, emailer) { emailer.send(user.name, 'Welcome, ' + user.name + '!'); }, function () { return run(); });\nT.expect(r2.failed > 0, 'A sendWelcome() that mails the user NAME instead of their email address passed all your tests — assert the exact address your fake received.');\nvar r3 = await T.mutate('sendWelcome', function (user, emailer) {}, function () { return run(); });\nT.expect(r3.failed > 0, 'A sendWelcome() that never sends anything at all passed all your tests — assert that your fake recorded exactly one call.');\nvar r4 = await run();\nT.eq(r4.failed, 0, 'After the broken versions are restored, your suite is green again.');" }
      ],
      files: [
        { name: "script.js", content: "// ===== shipped code =====\n// The REAL outbox — if a test writes here, that test sent real email.\nlet sent = [];\nconst realEmailer = {\n  send(to, subject) { sent.push({ to: to, subject: subject }); }\n};\n\n// Hard-wired to realEmailer — untestable without side effects.\n// Refactor: sendWelcome(user, emailer), calling the INJECTED emailer.\nfunction sendWelcome(user) {\n  realEmailer.send(user.email, \"Welcome, \" + user.name + \"!\");\n}\n\n// ===== your tests =====\n// Build a fake emailer inline: { send: (to, subject) => ... } that only records.\n\nrun();\n" }
      ],
      hints: [
        "The refactor is two small edits: `function sendWelcome(user, emailer) { emailer.send(user.email, \"Welcome, \" + user.name + \"!\"); }`",
        "A fake emailer in a test: `const calls = []; const fake = { send: (to, subject) => calls.push([to, subject]) };` then `sendWelcome({ name: \"Ada\", email: \"ada@example.com\" }, fake);`",
        "Assert what the fake recorded: `expect(calls.length).toBe(1); expect(calls[0][0]).toBe(\"ada@example.com\"); expect(calls[0][1]).toContain(\"Ada\");`"
      ],
      solution: {
        "script.js": "// ===== shipped code =====\n// The REAL outbox — if a test writes here, that test sent real email.\nlet sent = [];\nconst realEmailer = {\n  send(to, subject) { sent.push({ to: to, subject: subject }); }\n};\n\n// Refactored: the emailer is injected.\nfunction sendWelcome(user, emailer) {\n  emailer.send(user.email, \"Welcome, \" + user.name + \"!\");\n}\n\n// ===== tests =====\nit(\"welcomes the user through the injected emailer\", function () {\n  const calls = [];\n  const fake = { send: (to, subject) => calls.push([to, subject]) };\n  sendWelcome({ name: \"Ada\", email: \"ada@example.com\" }, fake);\n  expect(calls.length).toBe(1);\n  expect(calls[0][0]).toBe(\"ada@example.com\");\n  expect(calls[0][1]).toContain(\"Ada\");\n});\n\nrun();\n"
      }
    },

    {
      id: "test-u5-2",
      title: "A spy that remembers every call",
      kind: "js", chip: "TEST", xp: 15, mins: 13, spec: true,
      brief: "How do you prove a function *called* its callback — the right number of times, with the right arguments? You listen in. A **spy** is a callback that REMEMBERS: every call appends its arguments to the spy's own `calls` array and bumps `callCount`.\n\nYou have built this exact shape before — `makeCounter()` from Learn JavaScript returned a function with private, persistent state. Same move, new job. The one rule that matters: the history lives **inside** `makeSpy()`, so every spy gets its own. Put it outside and all your spies share one notebook — test two things and their records blur together.\n\nThen put your spy to work on the shipped `notifyAll(users, notify)`.",
      steps: [
        { text: "`makeSpy()` returns a **callable** spy that records the arguments of every call in `spy.calls` — one array per call.",
          test: "T.expect(typeof makeSpy === 'function', 'Define makeSpy().');\nvar spy = makeSpy();\nT.expect(typeof spy === 'function', 'makeSpy() must RETURN a function — a spy is callable.');\nspy('a');\nspy('b', 1);\nT.eq(spy.calls, [['a'], ['b', 1]], 'spy.calls records the ARGUMENTS of every call, one array per call.');" },
        { text: "Add `spy.callCount` — and make sure every spy owns its **own** history.",
          test: "var spy = makeSpy();\nspy(); spy('x');\nT.eq(spy.callCount, 2, 'spy.callCount counts every call — 2 after two calls.');\nT.eq(spy.calls[0], [], 'A call with no arguments records an empty array.');\nvar a = makeSpy();\na('first');\nvar b = makeSpy();\nT.eq(b.calls, [], 'Each spy needs its OWN calls array — if this already holds the other spy record, you put calls OUTSIDE the closure and every spy shares one.');\nT.eq(a.calls, [['first']], 'and the first spy keeps its own record');\nT.eq(b.callCount, 0, 'A brand-new spy has callCount 0.');" },
        { text: "Use a spy to test the shipped `notifyAll(users, notify)` — count the calls AND assert the exact emails.",
          test: "var r = await run();\nT.expect(r.total >= 1, 'Write at least one test for notifyAll() using your spy.');\nT.eq(r.failed, 0, 'Green against the real notifyAll().');\nvar r2 = await T.mutate('notifyAll', function (users, notify) { if (users.length > 0) notify(users[0].email); }, function () { return run(); });\nT.expect(r2.failed > 0, 'A notifyAll() that only notifies the FIRST user passed all your tests — assert the exact callCount for a two-user list.');\nvar r3 = await T.mutate('notifyAll', function (users, notify) { users.forEach(function (u) { notify(u.name); }); }, function () { return run(); });\nT.expect(r3.failed > 0, 'A notifyAll() that sends NAMES instead of email addresses passed all your tests — assert spy.calls deep-equals the exact emails you expect.');" }
      ],
      files: [
        { name: "script.js", content: "// ===== shipped code (already written — you build the spy) =====\nfunction notifyAll(users, notify) {\n  users.forEach(function (u) { notify(u.email); });\n}\n\n// 1+2) makeSpy() → a callable spy that records:\n//        spy.calls     — one array of arguments per call\n//        spy.callCount — how many calls so far\n//      The history lives INSIDE makeSpy — every spy gets its own.\n\n// 3) a test: hand notifyAll a spy, then assert what it remembered\n\nrun();\n" }
      ],
      hints: [
        "Create the state inside and attach it to the function you return: `function spy(...args) { spy.calls.push(args); spy.callCount++; }` then `spy.calls = []; spy.callCount = 0; return spy;`",
        "The notifyAll test: `const spy = makeSpy(); notifyAll([{ name: \"Ada\", email: \"ada@example.com\" }, { name: \"Linus\", email: \"linus@example.com\" }], spy);` — then assert `spy.callCount` is exactly 2.",
        "Deep-compare the whole record in one line: `expect(spy.calls).toEqual([[\"ada@example.com\"], [\"linus@example.com\"]]);`"
      ],
      solution: {
        "script.js": "// ===== shipped code (already written — you build the spy) =====\nfunction notifyAll(users, notify) {\n  users.forEach(function (u) { notify(u.email); });\n}\n\nfunction makeSpy() {\n  function spy(...args) {\n    spy.calls.push(args);\n    spy.callCount++;\n  }\n  spy.calls = [];\n  spy.callCount = 0;\n  return spy;\n}\n\nit(\"notifies every user by email, in order\", function () {\n  const spy = makeSpy();\n  notifyAll([\n    { name: \"Ada\", email: \"ada@example.com\" },\n    { name: \"Linus\", email: \"linus@example.com\" }\n  ], spy);\n  expect(spy.callCount).toBe(2);\n  expect(spy.calls).toEqual([[\"ada@example.com\"], [\"linus@example.com\"]]);\n});\n\nrun();\n"
      }
    },

    {
      id: "test-u5-3",
      title: "Stubs: pin randomness and time",
      kind: "js", chip: "TEST", xp: 15, mins: 14, spec: true,
      brief: "A `rollDie()` that reaches for `Math.random()` inside is a slot machine — your test can never know the right answer. Same injection fix, smaller double: a **stub**, a function that returns a canned value every time, ignoring its arguments.\n\n`rollDie(stub(0))` must be `1`. `rollDie(stub(0.999))` must be `6`. Suddenly the boundaries are *checkable* — an off-by-one that never rolls a 6 has nowhere to hide. Time is the other slot machine: the shipped `isOpen(nowFn)` reads the hour from a function, so a test can park the clock at exactly `9` or `17` and interrogate the edges.\n\nRule of thumb: a stub **answers questions**; last lesson's spy **remembers calls**. Two tiny tools, and between them they cover most of what a mocking library does.",
      steps: [
        { text: "Write `stub(value)` — returns a function that returns `value`, every time, ignoring any arguments.",
          test: "T.expect(typeof stub === 'function', 'Define stub(value).');\nvar five = stub(5);\nT.expect(typeof five === 'function', 'stub(5) must RETURN a function.');\nT.eq(five(), 5, 'stub(5)() returns 5.');\nT.eq(five(), 5, 'and 5 again — every single time');\nT.eq(stub('heads')('ignored', 'args'), 'heads', 'A stub ignores its arguments and answers with the canned value.');" },
        { text: "Pin the die: tests for `rollDie` with stubbed randomness — the floor **and** the ceiling.",
          test: "var r = await run();\nT.expect(r.total >= 2, 'At least two rollDie tests — pin the floor AND the ceiling.');\nT.eq(r.failed, 0, 'Green against the real rollDie().');\nvar r2 = await T.mutate('rollDie', function (rng) { return Math.floor(rng() * 6); }, function () { return run(); });\nT.expect(r2.failed > 0, 'An off-by-one rollDie() that rolls 0-5 passed all your tests — with stub(0.999) the roll must be exactly 6.');\nvar r3 = await T.mutate('rollDie', function (rng) { rng(); return 4; }, function () { return run(); });\nT.expect(r3.failed > 0, 'A die that always lands on 4 passed all your tests — stub(0) must roll exactly 1; assert the exact number, not a range.');" },
        { text: "Pin the clock: tests for `isOpen` at the exact opening and closing boundaries.",
          test: "var r = await run();\nT.eq(r.failed, 0, 'Green against the real isOpen().');\nvar r2 = await T.mutate('isOpen', function (nowFn) { var h = nowFn(); return h > 9 && h < 17; }, function () { return run(); });\nT.expect(r2.failed > 0, 'A shop that does not open until 10 passed all your tests — stub the hour at exactly 9 and assert it IS open.');\nvar r3 = await T.mutate('isOpen', function (nowFn) { var h = nowFn(); return h >= 9 && h <= 17; }, function () { return run(); });\nT.expect(r3.failed > 0, 'A shop that stays open through 17:00 passed all your tests — stub exactly 17 and assert it is CLOSED.');" }
      ],
      files: [
        { name: "script.js", content: "// ===== shipped code (already written — you write the stub + tests) =====\n\n// rng is a function returning a number in [0, 1).\n// Production passes Math.random; your tests pass a stub.\nfunction rollDie(rng) {\n  return Math.floor(rng() * 6) + 1;\n}\n\n// nowFn returns the current hour, 0-23. Open 9:00 to 16:59.\nfunction isOpen(nowFn) {\n  var hour = nowFn();\n  return hour >= 9 && hour < 17;\n}\n\n// 1) stub(value) → a function that returns value every time, ignoring arguments\n\n// 2) pin the die: stub(0) rolls 1, stub(0.999) rolls 6\n\n// 3) pin the clock: the 9 and 17 boundaries\n\nrun();\n" }
      ],
      hints: [
        "`function stub(value) { return function () { return value; }; }` — that is the whole double.",
        "Pin both ends of the die: `expect(rollDie(stub(0))).toBe(1);` and `expect(rollDie(stub(0.999))).toBe(6);`",
        "Boundaries for the shop: open at exactly 9 (`isOpen(stub(9))` → true), closed at 8, closed at exactly 17, open at 16."
      ],
      solution: {
        "script.js": "// ===== shipped code (already written — you write the stub + tests) =====\n\nfunction rollDie(rng) {\n  return Math.floor(rng() * 6) + 1;\n}\n\nfunction isOpen(nowFn) {\n  var hour = nowFn();\n  return hour >= 9 && hour < 17;\n}\n\n// ===== the stub =====\nfunction stub(value) {\n  return function () { return value; };\n}\n\n// ===== tests =====\ndescribe(\"rollDie\", function () {\n  it(\"rolls 1 when the rng gives 0\", function () {\n    expect(rollDie(stub(0))).toBe(1);\n  });\n  it(\"rolls 6 when the rng gives 0.999\", function () {\n    expect(rollDie(stub(0.999))).toBe(6);\n  });\n});\n\ndescribe(\"isOpen\", function () {\n  it(\"opens at exactly 9\", function () { expect(isOpen(stub(9))).toBe(true); });\n  it(\"is still closed at 8\", function () { expect(isOpen(stub(8))).toBe(false); });\n  it(\"closes at exactly 17\", function () { expect(isOpen(stub(17))).toBe(false); });\n  it(\"is open at 16\", function () { expect(isOpen(stub(16))).toBe(true); });\n});\n\nrun();\n"
      }
    },

    {
      id: "test-u5-4",
      title: "Fake the clock",
      kind: "js", chip: "TEST", xp: 15, mins: 14, spec: true,
      brief: "You know `setTimeout` from Interactive Websites — now you are going to take it away from your code and hand it a clock you control. A test that really waits 60 seconds for a token to expire is a test nobody runs. So the code accepts a **clock object**, and tests hand it a fake: `makeClock()` returns `{ now, setTimeout, tick }` — a queue plus a counter, nothing more.\n\n`tick(ms)` advances the fake time and fires every callback that has come due — each exactly **once**, earliest first. A minute of waiting becomes `clock.tick(60000)`: instant, and parked *exactly* on the boundary, which is where expiry bugs actually live.\n\nThe shipped `makeToken(clock)` and `isExpired(token, clock)` already take the clock. You build the clock, then use it to pin the 60,000ms boundary from both sides.",
      steps: [
        { text: "`makeClock()` — `now()` starts at 0, and `tick(ms)` advances it. Each clock keeps its own time.",
          test: "T.expect(typeof makeClock === 'function', 'Define makeClock().');\nvar c = makeClock();\nT.eq(c.now(), 0, 'A fresh clock reads now() === 0.');\nc.tick(250);\nT.eq(c.now(), 250, 'tick(250) advances now() to 250.');\nc.tick(50);\nT.eq(c.now(), 300, 'Ticks add up: 250 + 50 = 300.');\nvar c2 = makeClock();\nT.eq(c2.now(), 0, 'Each clock keeps its OWN time — a second clock starts back at 0.');" },
        { text: "`clock.setTimeout(fn, ms)` queues a callback; `tick` fires every **due** callback exactly once, earliest first.",
          test: "var c = makeClock();\nvar fired = [];\nc.setTimeout(function () { fired.push('a'); }, 300);\nc.tick(299);\nT.eq(fired, [], 'At 299ms a 300ms callback has NOT fired yet.');\nc.tick(1);\nT.eq(fired, ['a'], 'At exactly 300ms it fires.');\nc.tick(1000);\nT.eq(fired, ['a'], 'and it fires ONCE — later ticks must not run it again.');\nvar c3 = makeClock();\nvar hits = 0;\nc3.setTimeout(function () { hits++; }, 300);\nc3.tick(1000);\nT.eq(hits, 1, 'One big tick(1000) jumps PAST 300ms — the callback still fires exactly once, not once per interval.');\nvar c4 = makeClock();\nvar order = [];\nc4.setTimeout(function () { order.push('late'); }, 500);\nc4.setTimeout(function () { order.push('early'); }, 100);\nc4.tick(600);\nT.eq(order, ['early', 'late'], 'Due callbacks fire in TIME order, earliest first — sort the due ones by their due time.');" },
        { text: "Test the shipped `isExpired` with your clock — one test on **each side** of the 60,000ms boundary.",
          test: "var r = await run();\nT.expect(r.total >= 2, 'At least two tests — one on each side of the 60,000ms boundary.');\nT.eq(r.failed, 0, 'Green against the real isExpired().');\nvar c = makeClock();\nvar tok = makeToken(c);\nT.eq(isExpired(tok, c), false, 'A brand-new token is not expired.');\nc.tick(59999);\nT.eq(isExpired(tok, c), false, 'At 59,999ms — one millisecond shy of a minute — still valid.');\nc.tick(1);\nT.eq(isExpired(tok, c), true, 'One more tick(1): at exactly 60,000ms the token expires.');\nvar r2 = await T.mutate('isExpired', function (token, clock) { return clock.now() - token.issuedAt > 60000; }, function () { return run(); });\nT.expect(r2.failed > 0, 'An isExpired() that grants one extra millisecond (> instead of >=) passed all your tests — tick to exactly 60000 and assert expired is true.');\nvar r3 = await T.mutate('isExpired', function (token, clock) { return false; }, function () { return run(); });\nT.expect(r3.failed > 0, 'A token that NEVER expires passed all your tests — tick a whole minute and assert it expired.');" }
      ],
      files: [
        { name: "script.js", content: "// ===== shipped code (already written — you build the clock) =====\n// A login token: issued now, expires after one minute (60,000ms).\nfunction makeToken(clock) {\n  return { issuedAt: clock.now() };\n}\nfunction isExpired(token, clock) {\n  return clock.now() - token.issuedAt >= 60000;\n}\n\n// 1+2) makeClock() → { now(), setTimeout(fn, ms), tick(ms) }\n//      now() starts at 0. tick(ms) advances it and fires every DUE\n//      callback exactly once, earliest first. No real setTimeout anywhere.\n\n// 3) tests: pin the 60,000ms boundary from both sides\n\nrun();\n" }
      ],
      hints: [
        "Keep time and a queue in the closure: `let time = 0; let queue = [];` — `setTimeout(fn, ms)` just pushes `{ at: time + ms, fn: fn }`.",
        "tick: advance `time += ms`, split the queue into due (`t.at <= time`) and not-yet, sort the due ones by `at`, keep only the not-yet items in the queue, THEN run each due callback once.",
        "The boundary test: `const clock = makeClock(); const token = makeToken(clock); clock.tick(59999); expect(isExpired(token, clock)).toBe(false);` — and a second test at exactly 60000 expecting true."
      ],
      solution: {
        "script.js": "// ===== shipped code (already written — you build the clock) =====\nfunction makeToken(clock) {\n  return { issuedAt: clock.now() };\n}\nfunction isExpired(token, clock) {\n  return clock.now() - token.issuedAt >= 60000;\n}\n\n// ===== the fake clock =====\nfunction makeClock() {\n  let time = 0;\n  let queue = [];\n  return {\n    now: function () { return time; },\n    setTimeout: function (fn, ms) { queue.push({ at: time + ms, fn: fn }); },\n    tick: function (ms) {\n      time += ms;\n      const due = queue\n        .filter(function (t) { return t.at <= time; })\n        .sort(function (a, b) { return a.at - b.at; });\n      queue = queue.filter(function (t) { return t.at > time; });\n      due.forEach(function (t) { t.fn(); });\n    }\n  };\n}\n\n// ===== tests =====\ndescribe(\"isExpired\", function () {\n  it(\"is still valid at 59,999ms\", function () {\n    const clock = makeClock();\n    const token = makeToken(clock);\n    clock.tick(59999);\n    expect(isExpired(token, clock)).toBe(false);\n  });\n  it(\"expires at exactly 60,000ms\", function () {\n    const clock = makeClock();\n    const token = makeToken(clock);\n    clock.tick(60000);\n    expect(isExpired(token, clock)).toBe(true);\n  });\n});\n\nrun();\n"
      }
    },

    {
      id: "test-quiz-5",
      title: "Unit 5 quiz: Doubles",
      kind: "quiz", xp: 10,
      brief: "Spies, stubs, fakes and the clock you control. 80% to pass.",
      questions: [
        { q: "This function is hard to test. What is the standard fix when you have no mocking framework?",
          code: "function rollDie() {\n  return Math.floor(Math.random() * 6) + 1;\n}",
          lang: "js",
          choices: ["Run the test many times and average the results", "Inject the random source as a parameter and stub it", "Round the random number before asserting on it", "Assert the result is between 1 and 6 and call it covered"],
          answer: 1, explain: "Injecting the rng — dependency injection — makes the function deterministic: production passes `Math.random`, a test passes `stub(0.999)` and asserts the exact roll. Averaging repeated runs makes the suite slow and flaky, and a range assertion can never catch the off-by-one that quietly stops the die rolling 6." },
        { q: "Your test must prove `sendWelcome` called `emailer.send` exactly once, with the user's address. Which double does that job?",
          choices: ["a spy", "a stub", "a fake clock", "a snapshot"],
          answer: 0, explain: "A spy records every call it receives — arguments and count — so afterwards you assert on `spy.calls` and `spy.callCount`. A stub answers questions by returning canned values but proves nothing about how it was called, and the fake clock replaces time, not collaborators." },
        { q: "This makeSpy passes a quick one-spy demo. What breaks when a suite creates several spies?",
          code: "const calls = [];\nfunction makeSpy() {\n  function spy(...args) {\n    calls.push(args);\n    spy.callCount = calls.length;\n  }\n  spy.calls = calls;\n  return spy;\n}",
          lang: "js",
          choices: ["Nothing breaks — each spy still tracks its own callCount", "The spies throw, because you cannot push to a const array", "spy.calls stays empty until run() is awaited", "Every spy records into the same shared calls array"],
          answer: 3, explain: "`calls` lives OUTSIDE makeSpy, so every spy pushes into one shared array — spy B's history contains spy A's calls, and callCount counts everyone's. The array must be created inside makeSpy, one fresh array per spy. (`const` only forbids reassignment; pushing to a const array is perfectly legal.)" },
        { q: "Why does a test suite fake the clock instead of really waiting for a 60-second token to expire?",
          choices: ["Real timers are less accurate than fake ones", "setTimeout is not allowed inside test files", "tick(60000) is instant and lands exactly on the boundary", "Fake clocks catch more categories of bug than real timers do"],
          answer: 2, explain: "`clock.tick(60000)` advances fake time in a microsecond of real time, and it lets you park the clock at exactly 59,999 and then 60,000 — the boundary where expiry bugs live. Really waiting costs a minute per test and still cannot reliably hit an exact millisecond." },
        { q: "What should a correct fake clock print?",
          code: "const clock = makeClock();\nconst spy = makeSpy();\nclock.setTimeout(spy, 300);\nclock.tick(1000);\nconsole.log(spy.callCount);",
          lang: "js",
          choices: ["0", "1", "3", "1000"],
          answer: 1, explain: "tick(1000) sweeps past the 300ms due time, so the callback fires — but exactly once; a queued callback is removed when it runs. Printing 3 is the classic bug of treating setTimeout like setInterval (firing at 300, 600 and 900), and 0 means tick never checked the queue at all." },
        { q: "A checkpoint asserts the module-level `sent` array is still empty after your whole suite runs. What is it proving?",
          choices: ["The suite has no failing tests left", "beforeEach reset the fixture between every test", "Garbage collection ran between the tests", "No test ever touched the real emailer"],
          answer: 3, explain: "`sent` is only ever written by the REAL emailer, so an empty outbox after the suite proves every test injected a double instead of the production dependency. That is the whole point of injection — side effects never escape into the real world. A green bar alone cannot show it: tests that accidentally used realEmailer would still pass." }
      ]
    }
  ]
});
