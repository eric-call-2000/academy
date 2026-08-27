/* Async JavaScript & APIs — Unit 3: When things go wrong */
window.CODELAB.addUnit("async", {
  id: "async-u3",
  title: "When things go wrong",
  icon: "🚨",
  blurb: "Status codes, try/catch and rejections — turn crashes and 404s into graceful recoveries.",
  cheat: [
    { h: "fetch NEVER throws on a 404", lang: "js", code: "const res = await fetch(\"/api/data\");\nif (!res.ok) {\n  // 404? 500? fetch resolved anyway.\n  console.log(res.status);\n}", note: "fetch only rejects on network failure (offline, DNS). HTTP errors resolve normally — checking res.ok is YOUR job." },
    { h: "try / catch / finally with await", lang: "js", code: "try {\n  const data = await risky();\n} catch (err) {\n  console.log(err.message);\n} finally {\n  console.log(\"runs either way\");\n}", note: "await re-throws a rejection as a normal exception — that's why plain try/catch works on async code." },
    { h: "Rejecting on purpose", lang: "js", code: "async function safeDivide(a, b) {\n  if (b === 0) throw new Error(\"division by zero\");\n  return a / b;\n}", note: "throw inside an async function = rejected promise. In a plain function: return Promise.reject(new Error(\"…\"))." },
    { h: ".catch on a promise chain", lang: "js", code: "loadUser()\n  .then(render)\n  .catch((err) => showError(err.message));", note: "One .catch at the end is a safety net for every link above it." },
    { h: "The three UI states", lang: "js", code: "statusEl.textContent = \"Loading…\";\nconst res = await fetch(url);\nif (res.ok) renderData(await res.json());\nelse statusEl.textContent = \"Couldn't load — try again.\";", note: "Loading → data OR error. Users never read your console — the page is the error handler." }
  ],
  lessons: [

    {
      id: "async-u3-1",
      title: "res.ok & status codes",
      kind: "js", chip: "API", xp: 15, mins: 12,
      mock: {
        "/api/greeting": { text: "All systems go" },
        "/api/missing": { __status: 404, body: { error: "gone" } }
      },
      brief: "Here's the trap that bites every new API developer: **`fetch` does not throw on a 404.** As far as fetch cares, the server *answered* — mission accomplished. The bad news hides inside the response:\n\n- `res.status` — the HTTP status code (`200` OK, `404` Not Found, `500` server error…)\n- `res.ok` — `true` only for statuses **200–299**\n\nThis lesson's mock API has one healthy endpoint and one dead one. You'll read status codes and build `safeGet()` — a fetch wrapper that hands back a fallback instead of exploding.",
      example: { lang: "js", code: "const res = await fetch(\"/api/missing\");\nconsole.log(res.ok);     // false\nconsole.log(res.status); // 404 — and NOTHING was thrown!" },
      steps: [
        { text: "Write async `checkEndpoint(path)` — fetch the path and **return `res.status`**.",
          test: "T.expect(typeof checkEndpoint === 'function', 'Define async function checkEndpoint(path) { … }');\nT.eq(await checkEndpoint('/api/greeting'), 200, 'Fetch the path and return res.status — /api/greeting answers 200.');\nT.eq(await checkEndpoint('/api/missing'), 404, '/api/missing should report 404 — no if needed, just return res.status.');" },
        { text: "Write async `safeGet(path)` — if `res.ok`, return the parsed body; otherwise return the string `\"unavailable\"`.",
          test: "T.expect(typeof safeGet === 'function', 'Define async function safeGet(path) { … }');\nT.eq(await safeGet('/api/greeting'), { text: 'All systems go' }, 'When res.ok is true, return the parsed body: return await res.json();');\nT.eq(await safeGet('/api/missing'), 'unavailable', 'When res.ok is false, return the string \"unavailable\" instead.');\nT.eq(await safeGet('/api/tpyo'), 'unavailable', 'Unknown endpoints 404 too — your res.ok check covers them for free.');" },
        { text: "Log a one-line health report per endpoint, e.g. `/api/greeting → 200`.",
          test: "await T.sleep(400);\nT.expect(T.logged('200'), 'Log the status of /api/greeting — e.g. console.log(\"/api/greeting → \" + await checkEndpoint(\"/api/greeting\")) inside an async main().');\nT.expect(T.logged('404'), 'Log the status of /api/missing too — it should print 404.');" }
      ],
      files: [
        { name: "script.js", content: "// mock API for this lesson:\n//   GET /api/greeting → 200 { text: \"All systems go\" }\n//   GET /api/missing  → 404 { error: \"gone\" }\n//   anything else     → 404\n\n// 1) async function checkEndpoint(path) → fetch(path), return res.status\n\n// 2) async function safeGet(path):\n//    res.ok  → return await res.json()\n//    not ok  → return \"unavailable\"\n\n// 3) log a health report:\n// async function main() {\n//   console.log(\"/api/greeting → \" + await checkEndpoint(\"/api/greeting\"));\n//   console.log(\"/api/missing → \" + await checkEndpoint(\"/api/missing\"));\n// }\n// main();\n" }
      ],
      hints: [
        "Status is just a property on the response: `async function checkEndpoint(path) { const res = await fetch(path); return res.status; }`",
        "safeGet branches on res.ok: `if (res.ok) { return await res.json(); } return \"unavailable\";`",
        "For the report, uncomment main() at the bottom — await only works inside async functions."
      ],
      solution: {
        "script.js": "// mock API for this lesson:\n//   GET /api/greeting → 200 { text: \"All systems go\" }\n//   GET /api/missing  → 404 { error: \"gone\" }\n//   anything else     → 404\n\nasync function checkEndpoint(path) {\n  const res = await fetch(path);\n  return res.status;\n}\n\nasync function safeGet(path) {\n  const res = await fetch(path);\n  if (res.ok) {\n    return await res.json();\n  }\n  return \"unavailable\";\n}\n\nasync function main() {\n  console.log(\"/api/greeting → \" + await checkEndpoint(\"/api/greeting\"));\n  console.log(\"/api/missing → \" + await checkEndpoint(\"/api/missing\"));\n}\nmain();\n"
      }
    },

    {
      id: "async-u3-2",
      title: "try / catch with await",
      kind: "js", chip: "API", xp: 15, mins: 12,
      brief: "`await` has a hidden superpower: when a promise **rejects**, `await` re-throws that rejection as a *normal exception* — so plain old **`try / catch`** works on async code.\n\nThe starter gives you `flakyCall()`, a fake network call that ALWAYS fails after 30 ms with `Error(\"network down\")`. Your job: survive it.\n\n- `try { await flakyCall() }` — the rejection lands in your `catch (err)`\n- `err.message` — the string the Error was built with\n- `finally { … }` — cleanup that runs whether it worked or not",
      steps: [
        { text: "Write async `tryIt()` — await `flakyCall()` inside `try/catch` and return `\"recovered\"` from the catch block.",
          test: "T.expect(typeof tryIt === 'function', 'Define async function tryIt() { … }');\nvar outcome = null;\nvar blewUp = false;\ntry { outcome = await tryIt(); } catch (err) { blewUp = true; }\nT.expect(!blewUp, 'tryIt() must not reject — wrap await flakyCall() in try { … } catch (err) { … } and return from the catch.');\nT.eq(outcome, 'recovered', 'Return the string \"recovered\" from the catch block.');" },
        { text: "Inside the catch, log the error's `.message` before returning.",
          test: "try { await tryIt(); } catch (err) {}\nT.expect(T.logged('network down'), 'In the catch block, console.log(err.message) — flakyCall rejects with the message \"network down\".');" },
        { text: "Add a `finally` block that logs `\"cleanup done\"` — it runs no matter what.",
          test: "try { await tryIt(); } catch (err) {}\nT.expect(T.logged('cleanup done'), 'After the catch, add finally { console.log(\"cleanup done\") } — finally runs on success AND on failure.');" }
      ],
      files: [
        { name: "script.js", content: "// pretend network call that ALWAYS fails — already written for you\nfunction flakyCall() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => reject(new Error(\"network down\")), 30);\n  });\n}\n\n// 1) async function tryIt():\n//    try   → return await flakyCall()\n//    catch → return \"recovered\"\n\n// 2) in the catch, log err.message first\n\n// 3) add finally { console.log(\"cleanup done\") }\n" }
      ],
      hints: [
        "The shape: `async function tryIt() { try { return await flakyCall(); } catch (err) { return \"recovered\"; } }`",
        "err is a real Error object — `err.message` is the string it was created with (\"network down\").",
        "finally goes right after the catch block: `finally { console.log(\"cleanup done\"); }` — no condition, it always runs."
      ],
      solution: {
        "script.js": "// pretend network call that ALWAYS fails — already written for you\nfunction flakyCall() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => reject(new Error(\"network down\")), 30);\n  });\n}\n\nasync function tryIt() {\n  try {\n    return await flakyCall();\n  } catch (err) {\n    console.log(err.message);\n    return \"recovered\";\n  } finally {\n    console.log(\"cleanup done\");\n  }\n}\n"
      }
    },

    {
      id: "async-u3-3",
      title: "Loading & error UI",
      kind: "web", chip: "API", xp: 15, mins: 14,
      mock: {
        "/api/quote": { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
        "/api/legacy": { __status: 404, body: { error: "This API was retired" } }
      },
      brief: "Every real app answers three questions *on screen*: is it loading? did it work? did it break? Users never read your console — **the page is the error handler.**\n\nTwo buttons, one flow. `#loadBtn` calls a healthy quote API; `#brokenBtn` calls `/api/legacy`, which 404s with `{ error: \"This API was retired\" }`. Build a single `load(path)`:\n\n1. show **Loading…** *immediately* (before any await)\n2. `res.ok` → render the quote, status **Loaded**\n3. not ok → show the server's error message, styled red\n\nAnd a failure must never wedge the app — the next click starts clean.",
      steps: [
        { text: "Clicking `#loadBtn` flips `#status` to **Loading…** immediately — before the response lands.",
          test: "T.click('#loadBtn');\nvar msg = (T.text('#status') || '').toLowerCase();\nT.expect(msg.indexOf('loading') !== -1, 'Set statusEl.textContent = \"Loading…\" BEFORE the first await — the user needs feedback while the network works.');" },
        { text: "The response arrives: the quote shows in `#output` and `#status` reads **Loaded**.",
          test: "await T.sleep(300);\nvar txt = (T.text('#output') || '').toLowerCase();\nT.expect(txt.indexOf('soul of efficiency') !== -1, 'When res.ok is true, put data.text into #output (add data.author if you like).');\nvar stateTxt = (T.text('#status') || '').toLowerCase();\nT.expect(stateTxt.indexOf('loaded') !== -1, 'Finish the happy path: set #status to \"Loaded\".');" },
        { text: "`#brokenBtn` hits the 404. Show **the server's** error message in `#status` and add the class `error`.",
          test: "T.click('#brokenBtn');\nvar m1 = (T.text('#status') || '').toLowerCase();\nT.expect(m1.indexOf('loading') !== -1, 'Both buttons share the same flow — \"Loading…\" first, every time.');\nawait T.sleep(300);\nvar m2 = (T.text('#status') || '').toLowerCase();\nT.expect(m2.indexOf('retired') !== -1, 'res.ok is false, but the body still has info: await res.json() anyway and show data.error (\"This API was retired\") in #status.');\nT.expect(T.$('#status').classList.contains('error'), 'Add the class \"error\" so the CSS paints it red: statusEl.classList.add(\"error\").');" },
        { text: "Recovery: clicking `#loadBtn` again clears the red error state and ends on **Loaded**.",
          test: "T.click('#loadBtn');\nT.expect(!T.$('#status').classList.contains('error'), 'Reset at the START of every load: statusEl.classList.remove(\"error\") before anything else.');\nawait T.sleep(300);\nvar s2 = (T.text('#status') || '').toLowerCase();\nT.expect(s2.indexOf('loaded') !== -1, 'The happy path should work again after a failure — same load(path) flow, fresh state.');\nT.expect(!T.$('#status').classList.contains('error'), 'And it stays error-free.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Quote of the day</h1>\n  <p id=\"status\">Idle</p>\n  <blockquote id=\"output\"></blockquote>\n  <button id=\"loadBtn\">Load quote</button>\n  <button id=\"brokenBtn\">Load from old API</button>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#status {\n  color: #64748b;\n  min-height: 20px;\n}\n#status.error {\n  color: #dc2626;\n  font-weight: bold;\n}\nblockquote {\n  font-size: 18px;\n  margin: 12px 0;\n  min-height: 24px;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n" },
        { name: "script.js", content: "const statusEl = document.querySelector(\"#status\");\nconst output = document.querySelector(\"#output\");\nconst loadBtn = document.querySelector(\"#loadBtn\");\nconst brokenBtn = document.querySelector(\"#brokenBtn\");\n\n// mock API:\n//   GET /api/quote  → 200 { text, author }\n//   GET /api/legacy → 404 { error: \"This API was retired\" }\n\nasync function load(path) {\n  // 1) reset: remove the class \"error\", set statusEl to \"Loading…\"\n  // 2) fetch(path), parse with await res.json()\n  // 3) res.ok  → quote into #output, statusEl \"Loaded\"\n  //    not ok  → statusEl shows data.error + class \"error\"\n}\n\nloadBtn.addEventListener(\"click\", () => load(\"/api/quote\"));\nbrokenBtn.addEventListener(\"click\", () => load(\"/api/legacy\"));\n" }
      ],
      hints: [
        "First two lines of load(): `statusEl.classList.remove(\"error\"); statusEl.textContent = \"Loading…\";` — reset THEN announce.",
        "You can await res.json() before checking res.ok — the 404 body still parses, and it holds the server's error message.",
        "The branch: `if (res.ok) { output.textContent = data.text; statusEl.textContent = \"Loaded\"; } else { statusEl.textContent = data.error; statusEl.classList.add(\"error\"); }`"
      ],
      solution: {
        "script.js": "const statusEl = document.querySelector(\"#status\");\nconst output = document.querySelector(\"#output\");\nconst loadBtn = document.querySelector(\"#loadBtn\");\nconst brokenBtn = document.querySelector(\"#brokenBtn\");\n\nasync function load(path) {\n  statusEl.classList.remove(\"error\");\n  statusEl.textContent = \"Loading…\";\n\n  const res = await fetch(path);\n  const data = await res.json();\n\n  if (res.ok) {\n    output.textContent = `“${data.text}” — ${data.author}`;\n    statusEl.textContent = \"Loaded\";\n  } else {\n    statusEl.textContent = data.error;\n    statusEl.classList.add(\"error\");\n  }\n}\n\nloadBtn.addEventListener(\"click\", () => load(\"/api/quote\"));\nbrokenBtn.addEventListener(\"click\", () => load(\"/api/legacy\"));\n"
      }
    },

    {
      id: "async-u3-4",
      title: "Building rejections",
      kind: "js", chip: "API", xp: 15, mins: 12,
      brief: "So far other people's code failed and you cleaned up. Now flip it: **your** functions should refuse bad input *loudly*.\n\n- inside an `async` function, `throw new Error(\"…\")` rejects the returned promise\n- in a plain function, return `Promise.reject(new Error(\"…\"))`\n- always reject with **Error objects** — callers get a `.message` they can show\n\nYou'll build `safeDivide(a, b)` (rejects on divide-by-zero), `requireEven(n)` (hand-made resolve/reject), then prove `.catch` picks them up.",
      example: { lang: "js", code: "// two ways to make a rejected promise:\nasync function a() { throw new Error(\"nope\"); }\nfunction b() { return Promise.reject(new Error(\"nope\")); }" },
      steps: [
        { text: "Write **async** `safeDivide(a, b)` that returns `a / b` for normal input.",
          test: "T.expect(typeof safeDivide === 'function', 'Define async function safeDivide(a, b) { … }');\nvar p = safeDivide(12, 4);\nT.expect(p && typeof p.then === 'function', 'Mark it async — calling it should hand back a promise.');\nT.eq(await p, 3, 'safeDivide(12, 4) should resolve with 3.');\nT.eq(await safeDivide(9, 2), 4.5, 'safeDivide(9, 2) should resolve with 4.5 — plain a / b.');" },
        { text: "When `b === 0`, **throw** `new Error(\"division by zero\")` instead — the promise rejects.",
          test: "var caughtErr = null;\ntry { await safeDivide(5, 0); } catch (err) { caughtErr = err; }\nT.expect(caughtErr !== null, 'safeDivide(5, 0) must REJECT — inside the async function: if (b === 0) throw new Error(\"division by zero\").');\nT.expect(String(caughtErr && caughtErr.message).toLowerCase().indexOf('division by zero') !== -1, 'Give the Error the exact message \"division by zero\" — callers will display it.');" },
        { text: "Write plain (non-async) `requireEven(n)` — `Promise.resolve(n)` for even, `Promise.reject(new Error(\"odd number\"))` for odd.",
          test: "T.expect(typeof requireEven === 'function', 'Define requireEven(n) — a REGULAR function that returns a promise by hand.');\nT.eq(await requireEven(8), 8, 'requireEven(8) should resolve with 8 — return Promise.resolve(n) for even numbers.');\nT.eq(await requireEven(0), 0, '0 is even too — 0 % 2 === 0.');\nvar oddErr = null;\ntry { await requireEven(7); } catch (err) { oddErr = err; }\nT.expect(oddErr !== null, 'requireEven(7) must reject — return Promise.reject(new Error(\"odd number\")).');\nT.expect(String(oddErr && oddErr.message).toLowerCase().indexOf('odd') !== -1, 'Give the Error the message \"odd number\".');" },
        { text: "Prove `.catch` hears it: at the top level, call `safeDivide(10, 0)` and log `\"caught: \" + err.message` in a `.catch`.",
          test: "await T.sleep(150);\nT.expect(T.logged('caught'), 'One line at the top level: safeDivide(10, 0).catch((err) => console.log(\"caught: \" + err.message));');\nT.expect(T.logged('division by zero'), 'Include err.message in the log so you can see WHY it failed.');" }
      ],
      files: [
        { name: "script.js", content: "// 1) async function safeDivide(a, b):\n//    b === 0 → throw new Error(\"division by zero\")\n//    else    → return a / b\n\n// 2) function requireEven(n)  (NOT async):\n//    even → Promise.resolve(n)\n//    odd  → Promise.reject(new Error(\"odd number\"))\n\n// 3) prove the catch works:\n// safeDivide(10, 0).catch((err) => console.log(\"caught: \" + err.message));\n" }
      ],
      hints: [
        "`if (b === 0) { throw new Error(\"division by zero\"); }` — the throw exits the function, so the divide below only runs for good input.",
        "requireEven isn't async, so build the promise by hand: `return n % 2 === 0 ? Promise.resolve(n) : Promise.reject(new Error(\"odd number\"));`",
        "The last step is literally the commented line in the starter — uncomment it."
      ],
      solution: {
        "script.js": "async function safeDivide(a, b) {\n  if (b === 0) {\n    throw new Error(\"division by zero\");\n  }\n  return a / b;\n}\n\nfunction requireEven(n) {\n  if (n % 2 === 0) {\n    return Promise.resolve(n);\n  }\n  return Promise.reject(new Error(\"odd number\"));\n}\n\nsafeDivide(10, 0).catch((err) => {\n  console.log(\"caught: \" + err.message);\n});\n"
      }
    },

    {
      id: "async-quiz-3",
      title: "Unit 3 quiz: Errors",
      kind: "quiz", xp: 10,
      questions: [
        { q: "Your fetch hits a 404 Not Found. What happens?",
          code: "const res = await fetch(\"/api/nope\");",
          lang: "js",
          choices: ["The await throws and your catch block runs", "The promise resolves normally — res.ok is false", "res is undefined — nothing came back", "fetch retries until the endpoint exists"],
          answer: 1, explain: "fetch only rejects on NETWORK failure (offline, DNS, CORS). An HTTP error is a successful conversation that happens to carry bad news, so nothing throws for you — checking res.ok (or res.status) and branching yourself is the job." },
        { q: "When is res.ok true?",
          choices: ["Whenever the response has a body", "Only for status 200 exactly", "For any status from 200 to 299", "Any time the server responds at all — even 500"],
          answer: 2, explain: "ok is shorthand for 'status in the 200–299 success range'. 404 and 500 both leave it false." },
        { q: "flaky() rejects, but \"saved!\" never prints. Why?",
          code: "try {\n  flaky(); // ← no await\n} catch (err) {\n  console.log(\"saved!\");\n}",
          lang: "js",
          choices: ["Without await, try/catch never sees the rejection", "try/catch can't catch anything in an async function", "The parameter must be called error, not err", "console.log cannot run inside catch blocks"],
          answer: 0, explain: "try/catch only sees exceptions thrown while it is running. flaky() returns instantly and rejects LATER — by then the block has already finished, so there is nothing left to catch. Awaiting the promise re-throws the rejection INSIDE the try, and that's the whole trick." },
        { q: "In this chain, when does showError run?",
          code: "loadUser()\n  .then(render)\n  .catch(showError);",
          lang: "js",
          choices: ["Only if loadUser() itself rejects", "Never — .catch only works with try blocks", "After every run, whether it worked or not", "If loadUser() rejects OR render throws"],
          answer: 3, explain: "A .catch at the end of a chain hears failures from every link above it — a rejected loadUser() and a render that throws both land in showError. That reach is exactly why .catch usually goes last." },
        { q: "What does calling f() give you?",
          code: "async function f() {\n  throw new Error(\"nope\");\n}",
          lang: "js",
          choices: ["undefined — the throw is swallowed", "It crashes the program the moment f is defined", "A promise that rejects with that Error", "The string \"nope\", returned normally"],
          answer: 2, explain: "Throwing inside an async function is exactly how you reject its promise. await f() would land \"nope\" in your catch block." },
        { q: "The request failed and won't recover. What should your UI do?",
          choices: ["Swap \"Loading…\" for a short error message", "Keep showing \"Loading…\" — maybe it will fix itself", "Print the raw stack trace into the page", "Log the error to the console and move on"],
          answer: 0, explain: "A spinner that never ends is the worst UX in the catalog. Say what happened in the user's language — not a stack trace, not silence — and where a retry could plausibly work, give them a button that offers one." }
      ]
    }
  ]
});
