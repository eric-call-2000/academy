/* Async JavaScript & APIs — Unit 1: From callbacks to await */
window.CODELAB.addUnit("async", {
  id: "async-u1",
  title: "From callbacks to await",
  icon: "⏳",
  blurb: "Timers, callbacks, promises and async/await — the mental model every API call is built on.",
  cheat: [
    { h: "setTimeout (later, not now)", lang: "js", code: "setTimeout(() => {\n  console.log(\"2 seconds later\");\n}, 2000);", note: "Pass the function itself — fn, not fn(). The delay is in milliseconds: 1000 = one second." },
    { h: "The callback pattern", lang: "js", code: "function loadUser(callback) {\n  setTimeout(() => callback({ id: 1 }), 300);\n}\n\nloadUser((user) => console.log(user));", note: "Hand over a function to run when the slow thing finishes — the oldest async tool in the box." },
    { h: "Making a promise", lang: "js", code: "function wait(ms) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"done\"), ms);\n  });\n}" },
    { h: "Chaining .then", lang: "js", code: "wait(100)\n  .then((msg) => msg + \"!\")          // return feeds the next link\n  .then((msg) => console.log(msg));  // \"done!\"", note: "Each .then returns a NEW promise, resolved with whatever your callback returns." },
    { h: "async / await", lang: "js", code: "async function main() {\n  const result = await wait(500); // pauses THIS function only\n  console.log(result);\n}\nmain();", note: "await only works inside an async function. Async functions ALWAYS return a promise." }
  ],
  lessons: [

    {
      id: "async-u1-1",
      title: "Later, not now: callbacks",
      kind: "js", chip: "API", xp: 15, mins: 12,
      brief: "So far your code ran top-to-bottom, instantly. The real world does not: network requests, timers and file reads all take **time**. JavaScript handles waiting with **asynchronous** code — *schedule work now, run it later, keep going in the meantime.*\n\nThe primitive is `setTimeout(fn, ms)`: hand it a function and a delay, and it calls your function later. Passing a function to be run when something finishes is the **callback pattern** — the oldest async tool there is, and the one everything else builds on.",
      example: { lang: "js", code: "console.log(\"first\");\nsetTimeout(() => console.log(\"third — a second later\"), 1000);\nconsole.log(\"second\"); // does NOT wait for the timer" },
      steps: [
        { text: "Write `delayedHello(callback)` that calls `callback(\"Hello!\")` after **50 ms** using `setTimeout`.",
          test: "T.expect(typeof delayedHello === 'function', 'Define function delayedHello(callback) { … }');\nvar got;\ndelayedHello(function (msg) { got = msg; });\nT.expect(got === undefined, 'The callback must NOT run instantly — schedule it with setTimeout(…, 50).');\nawait T.sleep(200);\nT.eq(got, 'Hello!', 'After ~50 ms the callback should receive the string \"Hello!\"');" },
        { text: "Log `\"scheduling...\"` **before** calling `delayedHello`, and log the message **inside** the callback — then watch the order in the console.",
          test: "await T.sleep(200);\nT.expect(T.logged('hello'), 'Inside the callback, console.log the message it receives.');\nT.expect(T.logs().length >= 2, 'Also log something BEFORE calling delayedHello — notice it prints FIRST.');" },
        { text: "Prove the point: log `\"after the call\"` on the line *after* your `delayedHello(...)` call. It still beats the callback to the console — synchronous code never waits.",
          test: "await T.sleep(200);\nvar lg = T.logs().map(function (x) { return String(x).toLowerCase(); });\nvar afterIdx = -1;\nvar helloIdx = -1;\nlg.forEach(function (x, i) {\n  if (afterIdx === -1 && x.indexOf('after the call') !== -1) afterIdx = i;\n  if (helloIdx === -1 && x.indexOf('hello') !== -1) helloIdx = i;\n});\nT.expect(afterIdx !== -1, 'Log \"after the call\" right after the delayedHello(...) call.');\nT.expect(helloIdx !== -1 && afterIdx < helloIdx, '\"after the call\" should print BEFORE the callback message — the timer only fires once the current code is done.');" }
      ],
      files: [
        { name: "script.js", content: "// 1) delayedHello(callback): after 50 ms, call callback(\"Hello!\")\n\n// 2) log \"scheduling...\", call delayedHello, log the message inside the callback\n\n// 3) log \"after the call\" on the line AFTER the delayedHello(...) call\n" }
      ],
      hints: [
        "`function delayedHello(callback) { setTimeout(() => { callback(\"Hello!\"); }, 50); }` — pass the arrow function to setTimeout, don't call it.",
        "Call it like: `delayedHello((msg) => { console.log(msg); });`",
        "The final order in the console: scheduling... → after the call → Hello! — the callback ALWAYS comes last."
      ],
      solution: {
        "script.js": "function delayedHello(callback) {\n  setTimeout(() => {\n    callback(\"Hello!\");\n  }, 50);\n}\n\nconsole.log(\"scheduling...\");\ndelayedHello((msg) => {\n  console.log(msg);\n});\nconsole.log(\"after the call\");\n"
      }
    },

    {
      id: "async-u1-2",
      title: "Promises",
      kind: "js", chip: "API", xp: 15, mins: 12,
      brief: "Callbacks work — until you need a result from a result from a result, and your code drifts into the nested \"pyramid of doom\". A **Promise** is a cleaner handle on a future value: it starts **pending**, then settles exactly once — it **resolves** with a value or **rejects** with an error.\n\nYou build one with `new Promise((resolve) => { … })` and consume it with `.then(value => …)`. Next lesson: chaining. After that: `await`, and promises get genuinely beautiful.",
      example: { lang: "js", code: "const p = wait(500);            // a pending promise, immediately\np.then((msg) => console.log(msg)); // \"done\" — half a second later" },
      steps: [
        { text: "Write `wait(ms)` that **returns a Promise** which resolves with `\"done\"` after `ms` milliseconds.",
          test: "T.expect(typeof wait === 'function', 'Define function wait(ms) { return new Promise(…) }');\nvar p = wait(10);\nT.expect(p && typeof p.then === 'function', 'wait(…) should RETURN the promise — did you forget the return keyword?');\nvar t0 = Date.now();\nvar v = await wait(50);\nT.eq(v, 'done', 'The promise should resolve with the string \"done\" — call resolve(\"done\").');\nT.expect(Date.now() - t0 >= 40, 'It resolved instantly — put the resolve call inside setTimeout(…, ms) so it waits.');" },
        { text: "Consume it: chain `.then` onto `wait(50)` and log `\"waited!\"` when it resolves.",
          test: "await T.sleep(200);\nT.expect(T.logged('waited'), 'Chain it: wait(50).then(() => console.log(\"waited!\"));');" },
        { text: "The `.then` callback **receives the resolved value**. Add a second call — `wait(80).then(...)` — that takes the value and logs `\"promise says: done\"`, building the string from the value (no hardcoding!).",
          test: "await T.sleep(250);\nT.expect(T.logged('promise says: done'), 'The callback gets whatever resolve(...) was called with: wait(80).then((msg) => console.log(\"promise says: \" + msg));');" }
      ],
      files: [
        { name: "script.js", content: "// 1) wait(ms) → RETURN a Promise that resolves with \"done\" after ms\nfunction wait(ms) {\n  // return new Promise((resolve) => { ... });\n}\n\n// 2) wait(50).then(...) → log \"waited!\"\n\n// 3) wait(80).then(...) → the callback receives \"done\";\n//    log \"promise says: \" + that value\n" }
      ],
      hints: [
        "The shape: `return new Promise((resolve) => { setTimeout(() => resolve(\"done\"), ms); });`",
        "`.then` takes a function: `wait(50).then(() => console.log(\"waited!\"));`",
        "The resolved value arrives as the callback parameter: `wait(80).then((msg) => console.log(\"promise says: \" + msg));`"
      ],
      solution: {
        "script.js": "function wait(ms) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"done\"), ms);\n  });\n}\n\nwait(50).then(() => {\n  console.log(\"waited!\");\n});\n\nwait(80).then((msg) => {\n  console.log(\"promise says: \" + msg);\n});\n"
      }
    },

    {
      id: "async-u1-3",
      title: "Chaining .then",
      kind: "js", chip: "API", xp: 15, mins: 12,
      brief: "Here is the superpower nesting never had: **`.then` returns a new promise**, resolved with whatever your callback returns. So transformations line up in a flat pipeline instead of a staircase of nested callbacks — each `.then` receives the previous link's return value. A little assembly line for future values.\n\nThe starter gives you `fetchScore()`, a pretend network call that resolves with `10` after 30 ms. Pipe it through two transformations — and remember: a link that forgets to `return` feeds `undefined` to the next one.",
      example: { lang: "js", code: "fetchScore()\n  .then((n) => n * 2)     // 10 → 20\n  .then((n) => n + 5)     // 20 → 25\n  .then((n) => console.log(n)); // 25" },
      steps: [
        { text: "Write `doubledScore()` that **returns** `fetchScore().then(...)`, doubling the number. No `async` needed — a `.then` chain is already a promise.",
          test: "T.expect(typeof doubledScore === 'function', 'Define function doubledScore() { return fetchScore().then(…); }');\nvar p = doubledScore();\nT.expect(p && typeof p.then === 'function', 'doubledScore() should RETURN the .then chain — the chain itself is a promise.');\nT.eq(await p, 20, 'fetchScore() resolves with 10 — double it inside .then by RETURNING n * 2.');" },
        { text: "Write `finalScore()` — the full pipeline: fetch, a `.then` that doubles, then a **second** `.then` that adds 5. Each callback must `return` its result to feed the next link.",
          test: "T.expect(typeof finalScore === 'function', 'Define function finalScore() { … } with TWO .then links.');\nT.eq(await finalScore(), 25, '10 doubled is 20, plus 5 is 25 — make sure BOTH callbacks return their result.');" },
        { text: "Log the result as `\"final score: 25\"` — just chain one more `.then` onto `finalScore()`.",
          test: "await T.sleep(200);\nT.expect(T.logged('final score: 25'), 'Chain it: finalScore().then((n) => console.log(\"final score: \" + n));');" }
      ],
      files: [
        { name: "script.js", content: "// pretend network call — already written for you\nfunction fetchScore() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(10), 30);\n  });\n}\n\n// 1) doubledScore(): RETURN fetchScore().then(...) — double the number\n\n// 2) finalScore(): fetchScore() → double it → add 5 (two .then links, each RETURNS)\n\n// 3) chain one more .then onto finalScore() → log \"final score: \" + the result\n" }
      ],
      hints: [
        "`function doubledScore() { return fetchScore().then((n) => n * 2); }` — the outer return hands the whole chain back.",
        "Stack the links: `return fetchScore().then((n) => n * 2).then((n) => n + 5);` — arrow bodies without braces return automatically.",
        "Logging is just one more link: `finalScore().then((n) => console.log(\"final score: \" + n));`"
      ],
      solution: {
        "script.js": "// pretend network call — already written for you\nfunction fetchScore() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(10), 30);\n  });\n}\n\nfunction doubledScore() {\n  return fetchScore().then((n) => n * 2);\n}\n\nfunction finalScore() {\n  return fetchScore()\n    .then((n) => n * 2)\n    .then((n) => n + 5);\n}\n\nfinalScore().then((n) => {\n  console.log(\"final score: \" + n);\n});\n"
      }
    },

    {
      id: "async-u1-4",
      title: "async / await",
      kind: "js", chip: "API", xp: 15, mins: 12,
      brief: "**async/await** is promises wearing their best syntax. Mark a function `async` and two things happen: it **always returns a promise**, and inside it you can use `await` — which pauses *that function* (not the whole program!) until a promise settles, then hands you the value. It reads like normal top-to-bottom code.\n\nThe starter gives you `fetchUser()` — a fake network call that resolves with a user object after 30 ms. Consume it the modern way: not a single `.then` in sight.",
      example: { lang: "js", code: "async function main() {\n  const user = await fetchUser(); // pause HERE until it resolves\n  console.log(user.username);\n}\nmain();" },
      steps: [
        { text: "Write an **async** function `getUsername()` that awaits `fetchUser()` and returns the user's `username`.",
          test: "T.expect(typeof getUsername === 'function', 'Define async function getUsername() { … }');\nvar p = getUsername();\nT.expect(p && typeof p.then === 'function', 'Async functions ALWAYS return a promise — did you mark it async?');\nT.eq(await p, 'ada', 'Await fetchUser(), then return the username property of the object it resolves with.');" },
        { text: "Write async `describeUser()` that awaits `fetchUser()` once and returns the string `\"ada (level 7)\"` — built from the object, not hardcoded.",
          test: "T.expect(typeof describeUser === 'function', 'Define async function describeUser() { … }');\nT.eq(await describeUser(), 'ada (level 7)', 'Build it from the object: `${user.username} (level ${user.level})` — exactly \"ada (level 7)\".');" },
        { text: "Call `getUsername()` and log the result — remember, you need `await` (or `.then`) to see the value, not the promise.",
          test: "await T.sleep(200);\nT.expect(T.logged('ada'), 'Log the resolved username — wrap it: async function main() { console.log(await getUsername()); } main();');" }
      ],
      files: [
        { name: "script.js", content: "// pretend network call — already written for you\nfunction fetchUser() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ username: \"ada\", level: 7 }), 30);\n  });\n}\n\n// 1) async function getUsername() → await fetchUser(), return its username\n\n// 2) async function describeUser() → return \"ada (level 7)\", built from the object\n\n// 3) log the username (hint: async function main() + await, then call main())\n" }
      ],
      hints: [
        "`async function getUsername() { const user = await fetchUser(); return user.username; }`",
        "Template literal for the description: `` return `${user.username} (level ${user.level})`; ``",
        "To log it: `async function main() { console.log(await getUsername()); } main();`"
      ],
      solution: {
        "script.js": "// pretend network call — already written for you\nfunction fetchUser() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ username: \"ada\", level: 7 }), 30);\n  });\n}\n\nasync function getUsername() {\n  const user = await fetchUser();\n  return user.username;\n}\n\nasync function describeUser() {\n  const user = await fetchUser();\n  return `${user.username} (level ${user.level})`;\n}\n\nasync function main() {\n  console.log(await getUsername());\n}\nmain();\n"
      }
    },

    {
      id: "async-quiz-1",
      title: "Unit 1 quiz: Async foundations",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What prints, in order?",
          code: "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nconsole.log(\"C\");",
          lang: "js",
          choices: ["A, B, C", "B, A, C", "A, C, B", "C, A, B"],
          answer: 2, explain: "Even with a 0 ms delay, setTimeout callbacks wait until ALL current synchronous code finishes. Async means later — never now." },
        { q: "A promise that hasn't settled yet — no value, no error — is in which state?",
          choices: ["fulfilled", "pending", "rejected", "cancelled"],
          answer: 1, explain: "Every promise starts pending, then settles exactly once: fulfilled with a value, or rejected with an error. (There is no cancelled state.)" },
        { q: "Where is `await` allowed?",
          choices: ["Anywhere, in any function", "Only inside loops", "Only on line 1 of a file", "Inside a function marked async"],
          answer: 3, explain: "await lives inside async functions — that's exactly why we keep wrapping code in async function main() { … } main();" },
        { q: "`async function f() { return 7; }` — what does calling `f()` give you?",
          choices: ["A Promise that resolves to 7", "The number 7, immediately", "undefined until it resolves", "The string \"7\""],
          answer: 0, explain: "Async functions always wrap their return value in a promise — that's the contract. To get the 7, await f() or chain .then." },
        { q: "What does this log?",
          code: "Promise.resolve(4)\n  .then((n) => n + 1)\n  .then((n) => console.log(n));",
          lang: "js",
          choices: ["4", "undefined", "5", "A pending Promise"],
          answer: 2, explain: "Each .then hands its RETURN value to the next link: 4 → 5 → logged. That value flow is the whole point of chaining." },
        { q: "What does the console show?",
          code: "const p = wait(50); // resolves with \"done\" after 50 ms\nconsole.log(p);",
          lang: "js",
          choices: ["\"done\" — the resolved value", "A pending Promise object", "undefined until it settles", "An error — you must await it"],
          answer: 1, explain: "Calling a promise-returning function hands you the promise object immediately — still pending, with no value inside it yet. Logging it just shows you that box and its state; you need await or .then to see \"done\" 50 ms later." }
      ]
    }
  ]
});
