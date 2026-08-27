/* Async JavaScript & APIs — Unit 5: Async patterns */
window.CODELAB.addUnit("async", {
  id: "async-u5",
  title: "Async patterns",
  icon: "🧠",
  blurb: "The pro moves — parallel requests, request chains, debounce, timeouts and retries.",
  cheat: [
    { h: "Promise.all: parallel requests", lang: "js", code: "const [a, b] = await Promise.all([\n  fetch(\"/api/a\").then(r => r.json()),\n  fetch(\"/api/b\").then(r => r.json())\n]);", note: "Results come back in the order you LISTED the promises — not finish order. One rejection rejects the lot." },
    { h: "Chained (dependent) requests", lang: "js", code: "const res1 = await fetch(\"/api/profile\");\nconst profile = await res1.json();\nconst res2 = await fetch(`/api/team/${profile.teamId}`);\nconst team = await res2.json();", note: "When request #2 needs request #1's answer, they MUST run in sequence." },
    { h: "Debounce (wait for the pause)", lang: "js", code: "let timerId = null;\nbox.addEventListener(\"input\", () => {\n  clearTimeout(timerId);\n  timerId = setTimeout(() => runSearch(box.value), 150);\n});", note: "Every keystroke cancels the previous timer — the work runs ONCE, after typing stops." },
    { h: "Timeout via Promise.race", lang: "js", code: "function withTimeout(promise, ms) {\n  const deadline = new Promise((_, reject) =>\n    setTimeout(() => reject(new Error(\"timeout\")), ms));\n  return Promise.race([promise, deadline]);\n}", note: "race settles with the FIRST promise to finish — even if that's a rejection." },
    { h: "Retry loop", lang: "js", code: "async function retry(fn, times) {\n  let lastError;\n  for (let i = 0; i < times; i++) {\n    try { return await fn(); }\n    catch (err) { lastError = err; }\n  }\n  throw lastError;\n}" },
    { h: "Classic gotcha: accidental sequence", lang: "js", code: "// ❌ twice as slow — b queues behind a\nconst a = await getA();\nconst b = await getB();\n\n// ✅ both fly at once\nconst [a2, b2] = await Promise.all([getA(), getB()]);" }
  ],
  lessons: [

    {
      id: "async-u5-1",
      title: "Promise.all",
      kind: "js", chip: "API", xp: 15, mins: 12,
      mock: {
        "/api/weather": { city: "Reykjavik", tempC: 11 },
        "/api/air": { index: 23, rating: "good" }
      },
      brief: "Your dashboard needs weather AND air quality. Fetch them one after the other and you pay for two full round-trips — request B doesn't even *start* until request A lands. But these calls don't depend on each other, so launch them together!\n\n**`Promise.all([p1, p2])`** takes an array of promises, runs them **in parallel**, and resolves with an array of results *in the order you listed them*. Total time ≈ the slowest request, not the sum. (One rejection rejects the whole thing — more on that in the quiz.)",
      example: { lang: "js", code: "const [a, b] = await Promise.all([getA(), getB()]);\n// total time ≈ the SLOWEST call, not the sum" },
      steps: [
        { text: "Write async `getJson(url)` — fetch the url, parse the JSON, return the data. One reusable helper for every endpoint.",
          test: "T.expect(typeof getJson === 'function', 'Define async function getJson(url) { … }');\nT.eq(await getJson('/api/weather'), { city: 'Reykjavik', tempC: 11 }, 'getJson(\"/api/weather\") should return the parsed body — fetch(url), await res.json(), return data.');\nT.eq(await getJson('/api/air'), { index: 23, rating: 'good' }, 'It must work for ANY url — pass the url parameter straight into fetch.');" },
        { text: "Write async `getDashboard()` — fire BOTH getJson calls through `Promise.all`, then return `{ tempC, airIndex }`.",
          test: "T.expect(typeof getDashboard === 'function', 'Define async function getDashboard() { … }');\nT.expect(getDashboard.toString().indexOf('Promise.all') !== -1, 'Fire both requests at once: const [weather, air] = await Promise.all([getJson(…), getJson(…)]);');\nT.eq(await getDashboard(), { tempC: 11, airIndex: 23 }, 'Return { tempC: weather.tempC, airIndex: air.index } — expected { tempC: 11, airIndex: 23 }.');" },
        { text: "Log the dashboard — temperature and air index in one line.",
          test: "await T.sleep(250);\nT.expect(T.logged('11'), 'Log the temperature (11). Inside async main(): const dash = await getDashboard(), then console.log both fields.');\nT.expect(T.logged('23'), 'Include the air index (23) in the same log.');" }
      ],
      files: [
        { name: "script.js", content: "// mock API:\n//   GET /api/weather → { city: \"Reykjavik\", tempC: 11 }\n//   GET /api/air     → { index: 23, rating: \"good\" }\n\n// 1) async getJson(url) → fetch the url, await res.json(), return the data\n\n// 2) async getDashboard() → Promise.all BOTH getJson calls,\n//    return { tempC: ..., airIndex: ... }\n\n// 3) log the dashboard\nasync function main() {\n  // const dash = await getDashboard();\n  // console.log(`Reykjavik: ${dash.tempC}°C, air quality ${dash.airIndex}`);\n}\nmain();\n" }
      ],
      hints: [
        "getJson is the fetch pattern with a parameter: `async function getJson(url) { const res = await fetch(url); const data = await res.json(); return data; }`",
        "Destructure the results: `const [weather, air] = await Promise.all([getJson(\"/api/weather\"), getJson(\"/api/air\")]);`",
        "Then build the object: `return { tempC: weather.tempC, airIndex: air.index };` — and uncomment the log in main()."
      ],
      solution: {
        "script.js": "// mock API:\n//   GET /api/weather → { city: \"Reykjavik\", tempC: 11 }\n//   GET /api/air     → { index: 23, rating: \"good\" }\n\nasync function getJson(url) {\n  const res = await fetch(url);\n  const data = await res.json();\n  return data;\n}\n\nasync function getDashboard() {\n  const [weather, air] = await Promise.all([\n    getJson(\"/api/weather\"),\n    getJson(\"/api/air\")\n  ]);\n  return { tempC: weather.tempC, airIndex: air.index };\n}\n\nasync function main() {\n  const dash = await getDashboard();\n  console.log(`Reykjavik: ${dash.tempC}°C, air quality ${dash.airIndex}`);\n}\nmain();\n"
      }
    },

    {
      id: "async-u5-2",
      title: "Chained requests",
      kind: "js", chip: "API", xp: 15, mins: 12,
      mock: {
        "/api/profile": { user: "sam", teamId: "rocket" },
        "/api/team/rocket": { teamName: "Rocket", members: ["sam", "ada", "kai"] }
      },
      brief: "Sometimes you *can't* parallelize: request #2 depends on request #1's answer. Load your profile → the profile tells you WHICH team to fetch. That's a **request chain** (a \"waterfall\"), and `await` makes it read like a recipe: await the first call, use its data to build the second URL with a template literal, await again.\n\nHere `/api/profile` reveals a `teamId`, and `/api/team/rocket` holds the roster. Chain them.",
      example: { lang: "js", code: "const profile = await getJsonSomehow(\"/api/profile\");\nconst team = await getJsonSomehow(`/api/team/${profile.teamId}`);\n// call #2's URL was BUILT from call #1's answer" },
      steps: [
        { text: "Write async `getTeamId()` — fetch `/api/profile` and return the `teamId`.",
          test: "T.expect(typeof getTeamId === 'function', 'Define async function getTeamId() { … }');\nT.eq(await getTeamId(), 'rocket', 'Fetch /api/profile, parse it, return data.teamId — expected \"rocket\".');" },
        { text: "Write async `getRoster()` — await `getTeamId()`, fetch `` `/api/team/${id}` ``, and return the `members` array.",
          test: "T.expect(typeof getRoster === 'function', 'Define async function getRoster() { … }');\nT.expect(getRoster.toString().indexOf('getTeamId') !== -1, 'Reuse getTeamId() — request #2 depends on the answer to request #1.');\nT.eq(await getRoster(), ['sam', 'ada', 'kai'], 'Build the URL with a template literal — `/api/team/${id}` — then return data.members.');" },
        { text: "Write async `getSummary()` — chain both calls again and return a string with the team name and member count, like `\"Rocket: 3 members\"`.",
          test: "T.expect(typeof getSummary === 'function', 'Define async function getSummary() { … }');\nvar summaryTxt = String(await getSummary()).toLowerCase();\nT.expect(summaryTxt.indexOf('rocket') !== -1 && summaryTxt.indexOf('3') !== -1, 'Return a string containing the team name AND the member count, e.g. `${team.teamName}: ${team.members.length} members` — got: ' + summaryTxt);" }
      ],
      files: [
        { name: "script.js", content: "// mock API:\n//   GET /api/profile     → { user: \"sam\", teamId: \"rocket\" }\n//   GET /api/team/rocket → { teamName: \"Rocket\", members: [\"sam\", \"ada\", \"kai\"] }\n\n// 1) async getTeamId() → the teamId from /api/profile\n\n// 2) async getRoster() → const id = await getTeamId();\n//    fetch `/api/team/${id}`, return the members array\n\n// 3) async getSummary() → \"Rocket: 3 members\"\n//    (chain again: teamName + members.length in a template literal)\n" }
      ],
      hints: [
        "`async function getTeamId() { const res = await fetch(\"/api/profile\"); const data = await res.json(); return data.teamId; }`",
        "In getRoster: `const id = await getTeamId(); const res = await fetch(`/api/team/${id}`);` — backticks, not quotes, or ${id} stays literal text.",
        "getSummary fetches the team the same way, then: `return `${team.teamName}: ${team.members.length} members`;`"
      ],
      solution: {
        "script.js": "// mock API:\n//   GET /api/profile     → { user: \"sam\", teamId: \"rocket\" }\n//   GET /api/team/rocket → { teamName: \"Rocket\", members: [\"sam\", \"ada\", \"kai\"] }\n\nasync function getTeamId() {\n  const res = await fetch(\"/api/profile\");\n  const data = await res.json();\n  return data.teamId;\n}\n\nasync function getRoster() {\n  const id = await getTeamId();\n  const res = await fetch(`/api/team/${id}`);\n  const team = await res.json();\n  return team.members;\n}\n\nasync function getSummary() {\n  const id = await getTeamId();\n  const res = await fetch(`/api/team/${id}`);\n  const team = await res.json();\n  return `${team.teamName}: ${team.members.length} members`;\n}\n" }
    },

    {
      id: "async-u5-3",
      title: "Debounce",
      kind: "web", chip: "API", xp: 15, mins: 14,
      brief: "Type \"hummingbird\" into a live search box and naive code fires **11 requests** — one per keystroke. Real apps **debounce**: wait until the typing pauses, then search once.\n\nThe trick is two timer moves on EVERY keystroke:\n\n- `clearTimeout(timerId)` — cancel the previously scheduled search\n- `timerId = setTimeout(() => runSearch(...), 150)` — schedule a fresh one\n\nWhile keys keep coming, the timer keeps dying before it fires. Only 150 ms of silence lets a search through. The `#calls` counter makes the effect visible — watch it stay low while you hammer the keyboard.",
      steps: [
        { text: "Debounce the input listener: `clearTimeout(timerId)`, then schedule `runSearch(box.value)` with `setTimeout(…, 150)` — and remove the direct call. One settled burst of typing = ONE search.",
          test: "T.type('#searchBox', 'owl');\nawait T.sleep(500);\nT.eq(T.text('#calls'), '1', 'After typing and a pause, EXACTLY one search should have fired. In the listener: clearTimeout(timerId); timerId = setTimeout(() => runSearch(box.value), 150); — and delete the direct runSearch call.');\nT.expect((T.text('#result') || '').toLowerCase().indexOf('owl') !== -1, 'runSearch should still display the query — #result should mention \"owl\".');" },
        { text: "A burst of three quick edits still counts as one search — every keystroke resets the timer.",
          test: "T.type('#searchBox', 'h');\nT.type('#searchBox', 'ha');\nT.type('#searchBox', 'hawk');\nawait T.sleep(500);\nT.eq(T.text('#calls'), '2', 'Three rapid edits should collapse into ONE extra search (2 total). Call clearTimeout(timerId) BEFORE each setTimeout so the old schedule dies.');\nT.expect((T.text('#result') || '').toLowerCase().indexOf('hawk') !== -1, 'The search should use the FINAL text — #result should mention \"hawk\".');" },
        { text: "Separate bursts — with a real pause between them — are separate searches.",
          test: "T.type('#searchBox', 'crow');\nawait T.sleep(450);\nT.type('#searchBox', 'crows');\nawait T.sleep(450);\nT.eq(T.text('#calls'), '4', 'Two bursts with a pause between = TWO more searches (4 total). A bigger number means the timer is not being cleared; a smaller one means it never fires.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Bird search 🔍</h1>\n  <input id=\"searchBox\" placeholder=\"Type a bird…\">\n  <p class=\"meta\">Searches fired: <span id=\"calls\">0</span></p>\n  <p id=\"result\">Type to search…</p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\ninput {\n  font-size: 16px;\n  padding: 8px 12px;\n  border: 2px solid #cbd5e1;\n  border-radius: 10px;\n  width: 240px;\n}\n.meta {\n  color: #64748b;\n}\n#calls {\n  font-weight: bold;\n  color: #1e293b;\n}\n#result {\n  font-size: 18px;\n}\n" },
        { name: "script.js", content: "const box = document.querySelector(\"#searchBox\");\nconst callsEl = document.querySelector(\"#calls\");\nconst resultEl = document.querySelector(\"#result\");\n\nlet searchCount = 0;\n// 1) add: let timerId = null;\n\nfunction runSearch(query) {\n  searchCount++;\n  callsEl.textContent = searchCount;\n  resultEl.textContent = \"Results for: \" + query;\n}\n\nbox.addEventListener(\"input\", () => {\n  // 2) clearTimeout(timerId) — cancel the previously scheduled search\n  // 3) timerId = setTimeout(() => runSearch(box.value), 150);\n  // 4) …and DELETE the spammy direct call below:\n  runSearch(box.value); // ❌ fires on EVERY keystroke\n});\n" }
      ],
      hints: [
        "Declare the id next to searchCount: `let timerId = null;` — it must live OUTSIDE the listener so every keystroke sees the same one.",
        "The listener body becomes exactly two lines: `clearTimeout(timerId);` then `timerId = setTimeout(() => runSearch(box.value), 150);`",
        "Still failing? Make sure the old `runSearch(box.value);` direct call is gone — otherwise every keystroke still searches instantly."
      ],
      solution: {
        "script.js": "const box = document.querySelector(\"#searchBox\");\nconst callsEl = document.querySelector(\"#calls\");\nconst resultEl = document.querySelector(\"#result\");\n\nlet searchCount = 0;\nlet timerId = null;\n\nfunction runSearch(query) {\n  searchCount++;\n  callsEl.textContent = searchCount;\n  resultEl.textContent = \"Results for: \" + query;\n}\n\nbox.addEventListener(\"input\", () => {\n  clearTimeout(timerId);\n  timerId = setTimeout(() => {\n    runSearch(box.value);\n  }, 150);\n});\n" }
    },

    {
      id: "async-u5-4",
      title: "Sequential vs parallel",
      kind: "js", chip: "API", xp: 15, mins: 12,
      brief: "Same two tasks, wildly different clock time — it all depends on WHERE you put `await`.\n\n- **Sequential**: await each call in turn. Task 2 doesn't even start until task 1 finishes.\n- **Parallel**: start every promise FIRST, then `await Promise.all`. All the timers run at once.\n\nThe starter's `wait(ms, label)` logs when it finishes — so the log ORDER tells the story. Run them in sequence and slow (90 ms) logs before quick (30 ms), because quick starts late. Run them in parallel and quick beats slow every single time.",
      steps: [
        { text: "Write async `runSequential()` — await `wait(90, \"slow\")`, THEN await `wait(30, \"quick\")`, and return `[first, second]`.",
          test: "T.expect(typeof runSequential === 'function', 'Define async function runSequential() { … }');\nvar beforeSeq = T.logs().length;\nT.eq(await runSequential(), ['slow', 'quick'], 'Await wait(90, \"slow\"), then wait(30, \"quick\"), and return both results: [first, second].');\nvar seqOut = T.logs().slice(beforeSeq).map(function (entry) { return String(entry).toLowerCase(); });\nT.expect(seqOut.length >= 2 && seqOut[0].indexOf('slow') !== -1 && seqOut[1].indexOf('quick') !== -1, 'Sequential means \"slow done\" logs FIRST — quick does not even start until slow finishes. Await the first wait() before calling the second.');" },
        { text: "Write async `runParallel()` — start BOTH waits at once and `return await Promise.all([...])`. Now the short timer wins.",
          test: "T.expect(typeof runParallel === 'function', 'Define async function runParallel() { … }');\nT.expect(runParallel.toString().indexOf('Promise.all') !== -1, 'Put both wait() calls INSIDE Promise.all([...]) so they start together.');\nvar beforePar = T.logs().length;\nawait runParallel();\nvar parOut = T.logs().slice(beforePar).map(function (entry) { return String(entry).toLowerCase(); });\nT.expect(parOut.length >= 2 && parOut[0].indexOf('quick') !== -1 && parOut[1].indexOf('slow') !== -1, 'In parallel, \"quick done\" (30 ms) must log BEFORE \"slow done\" (90 ms) — both timers were running at the same time. No await before Promise.all sees the calls!');" },
        { text: "One more truth about `Promise.all`: it keeps results in the order you LISTED the promises — not finish order.",
          test: "T.eq(await runParallel(), ['slow', 'quick'], 'runParallel() must resolve with [\"slow\", \"quick\"] — Promise.all preserves the order you listed the promises, even though quick finished first.');" }
      ],
      files: [
        { name: "script.js", content: "// helper — already written: waits ms, logs, resolves with its label\nfunction wait(ms, label) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log(label + \" done\");\n      resolve(label);\n    }, ms);\n  });\n}\n\n// 1) async runSequential():\n//    await wait(90, \"slow\"), THEN await wait(30, \"quick\")\n//    return [first, second]\n\n// 2) async runParallel():\n//    return await Promise.all([wait(90, \"slow\"), wait(30, \"quick\")])\n" }
      ],
      hints: [
        "Sequential is two plain awaits: `const first = await wait(90, \"slow\"); const second = await wait(30, \"quick\"); return [first, second];`",
        "Parallel is one line: `return await Promise.all([wait(90, \"slow\"), wait(30, \"quick\")]);` — calling wait() STARTS its timer; Promise.all just waits for both.",
        "If \"slow done\" still logs first in runParallel, you probably awaited one wait() before the other — don't await until Promise.all."
      ],
      solution: {
        "script.js": "// helper — already written: waits ms, logs, resolves with its label\nfunction wait(ms, label) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log(label + \" done\");\n      resolve(label);\n    }, ms);\n  });\n}\n\nasync function runSequential() {\n  const first = await wait(90, \"slow\");\n  const second = await wait(30, \"quick\");\n  return [first, second];\n}\n\nasync function runParallel() {\n  return await Promise.all([wait(90, \"slow\"), wait(30, \"quick\")]);\n}\n" }
    },

    {
      id: "async-u5-5",
      title: "Timeout & retry",
      kind: "js", chip: "API", xp: 15, mins: 14,
      brief: "Real networks misbehave: some requests hang forever, others fail once and work on the next try. Production code wraps promises in two classic guards:\n\n- **`withTimeout(promise, ms)`** — `Promise.race` the promise against a timer that *rejects*. Whichever settles first wins, so a hung request becomes a catchable error instead of an eternal wait.\n- **`retry(fn, times)`** — call `fn()`; if it rejects, try again, up to `times` attempts, then give up and throw the last error.\n\nThe starter's `flakyUpload()` fails twice before succeeding — the perfect test dummy. Don't call it yourself: the checks count its attempts.",
      steps: [
        { text: "Write `withTimeout(promise, ms)`. First the happy path: a promise that settles BEFORE the deadline passes its value straight through.",
          test: "T.expect(typeof withTimeout === 'function', 'Define function withTimeout(promise, ms) { … }');\nvar fastP = new Promise(function (resolve) { setTimeout(function () { resolve('quick!'); }, 20); });\nT.eq(await withTimeout(fastP, 300), 'quick!', 'When the promise wins the race, withTimeout should resolve with its value — return Promise.race([promise, deadline]).');" },
        { text: "The guard path: past the deadline, the race REJECTS with `new Error(\"timeout\")`.",
          test: "T.expect(withTimeout.toString().indexOf('Promise.race') !== -1, 'Use Promise.race([promise, deadline]) — the first promise to settle wins the race.');\nvar slowP = new Promise(function (resolve) { setTimeout(function () { resolve('too late'); }, 500); });\nvar caught = '';\ntry {\n  await withTimeout(slowP, 60);\n} catch (err) {\n  caught = String((err && err.message) || err).toLowerCase();\n}\nT.expect(caught.indexOf('timeout') !== -1, 'The deadline promise must REJECT after ms — setTimeout(() => reject(new Error(\"timeout\")), ms). Got: ' + (caught || 'no rejection at all'));" },
        { text: "Write async `retry(fn, times)` — keep calling `fn()` until it resolves. `flakyUpload` fails twice, then succeeds on call #3.",
          test: "T.expect(typeof retry === 'function', 'Define async function retry(fn, times) { … }');\nT.eq(await retry(flakyUpload, 5), 'uploaded on attempt 3', 'flakyUpload rejects twice, then resolves — retry must swallow the failures (try/catch around await fn()) and return the eventual success.');\nT.eq(attemptCount, 3, 'flakyUpload should have been called EXACTLY 3 times (2 failures + 1 success) — got ' + attemptCount + '. Return the moment fn() succeeds; and never call flakyUpload at the top of your script.');" },
        { text: "And when every attempt fails? After `times` tries, retry gives up and throws the last error.",
          test: "var failCount = 0;\nfunction alwaysFails() { failCount++; return Promise.reject(new Error('still broken')); }\nvar outcome = '';\ntry {\n  await retry(alwaysFails, 3);\n  outcome = 'resolved';\n} catch (err) {\n  outcome = 'rejected';\n}\nT.eq(outcome, 'rejected', 'When EVERY attempt fails, retry must reject — after the loop, throw the last caught error.');\nT.eq(failCount, 3, 'retry(fn, 3) should call fn exactly 3 times before giving up — got ' + failCount + '. Loop for (let i = 0; i < times; i++).');" }
      ],
      files: [
        { name: "script.js", content: "// flaky server — already written: fails twice, then succeeds.\n// ⚠️ Do NOT call flakyUpload() yourself — the checks count its attempts.\nlet attemptCount = 0;\nfunction flakyUpload() {\n  attemptCount++;\n  if (attemptCount < 3) {\n    return Promise.reject(new Error(\"hiccup #\" + attemptCount));\n  }\n  return Promise.resolve(\"uploaded on attempt \" + attemptCount);\n}\n\n// 1) withTimeout(promise, ms):\n//    build a deadline promise that REJECTS with new Error(\"timeout\")\n//    after ms — then return Promise.race([promise, deadline])\n\n// 2) async retry(fn, times):\n//    loop up to times: try { return await fn(); } catch (err) { remember it }\n//    after the loop (all attempts failed): throw the last error\n" }
      ],
      hints: [
        "The deadline half: `const deadline = new Promise((_, reject) => { setTimeout(() => reject(new Error(\"timeout\")), ms); });` — note it REJECTS, never resolves.",
        "Then one line: `return Promise.race([promise, deadline]);` — no async/await needed in withTimeout at all.",
        "retry skeleton: `async function retry(fn, times) { let lastError; for (let i = 0; i < times; i++) { try { return await fn(); } catch (err) { lastError = err; } } throw lastError; }`"
      ],
      solution: {
        "script.js": "// flaky server — already written: fails twice, then succeeds.\n// ⚠️ Do NOT call flakyUpload() yourself — the checks count its attempts.\nlet attemptCount = 0;\nfunction flakyUpload() {\n  attemptCount++;\n  if (attemptCount < 3) {\n    return Promise.reject(new Error(\"hiccup #\" + attemptCount));\n  }\n  return Promise.resolve(\"uploaded on attempt \" + attemptCount);\n}\n\nfunction withTimeout(promise, ms) {\n  const deadline = new Promise((_, reject) => {\n    setTimeout(() => reject(new Error(\"timeout\")), ms);\n  });\n  return Promise.race([promise, deadline]);\n}\n\nasync function retry(fn, times) {\n  let lastError;\n  for (let i = 0; i < times; i++) {\n    try {\n      return await fn();\n    } catch (err) {\n      lastError = err;\n    }\n  }\n  throw lastError;\n}\n" }
    },

    {
      id: "async-quiz-5",
      title: "Unit 5 quiz: Async patterns",
      kind: "quiz", xp: 10,
      questions: [
        { q: "You need data from two INDEPENDENT endpoints. The fastest correct approach?",
          choices: ["await fetch(a); await fetch(b); — one after the other", "Promise.race([fetch(a), fetch(b)]) — first one wins", "await Promise.all([fetch(a), fetch(b)]) — both at once", "Wrap both fetches in setTimeout(…, 0)"],
          answer: 2, explain: "Independent requests should fly together — Promise.all waits for BOTH but they overlap, so total time ≈ the slowest one. race would throw one result away." },
        { q: "What is `a`?",
          code: "const [a, b] = await Promise.all([\n  wait(300, \"A\"),\n  wait(100, \"B\")\n]);",
          lang: "js",
          choices: ["\"A\" — results follow the input order", "\"B\" — whichever finishes first comes first", "undefined — the slow one gets dropped", "It's random — order isn't guaranteed"],
          answer: 0, explain: "Promise.all lines its results up with the INPUT order you passed the promises in, no matter who finished first — here \"B\" lands 200 ms earlier and still comes second. That guarantee is what makes destructuring safe." },
        { q: "One of the promises handed to Promise.all rejects. What happens?",
          choices: ["The other promises are cancelled and never settle", "Promise.all waits for everyone, then resolves with the successes only", "Promise.all resolves, with undefined in the failed slot", "Promise.all rejects immediately with that first error"],
          answer: 3, explain: "Promise.all is fail-fast: first rejection rejects the whole thing (the other promises keep running, but their results are dropped). Want every result regardless? That's Promise.allSettled." },
        { q: "A search box fires a request on every keystroke. Debouncing it at 150 ms means…",
          choices: ["Each request is delayed 150 ms, but all still fire", "The search runs ONCE, 150 ms after the last keystroke", "The search runs every 150 ms while the user types", "Keystrokes during the first 150 ms are thrown away"],
          answer: 1, explain: "Every keystroke clears the pending timer and sets a new one — only 150 ms of silence lets the search fire, so a whole burst of typing produces exactly one request. (Running every 150 ms WHILE typing is the cousin pattern: throttling.)" },
        { q: "Roughly how long does this take?",
          code: "const a = await wait(200, \"A\");\nconst b = await wait(200, \"B\");",
          lang: "js",
          choices: ["~200 ms — they run in parallel automatically", "~0 ms — awaits don't actually wait", "~400 ms — the waits run back-to-back", "~800 ms — each await doubles the delay"],
          answer: 2, explain: "await pauses the whole function, so the second wait doesn't even START until the first one finishes: 200 + 200. Start both promises first (or hand them to Promise.all) to overlap them into ~200 ms." },
        { q: "What does Promise.race([p1, p2]) settle with?",
          choices: ["An array of both results, fastest first", "The first promise to settle — resolve OR reject", "Always the first promise in the array", "The fastest resolved value, ignoring rejections"],
          answer: 1, explain: "First to settle wins — and a rejection counts as settling. That's exactly why racing against a rejecting timer makes a timeout: the timer 'winning' becomes a catchable error." }
      ]
    }
  ]
});
