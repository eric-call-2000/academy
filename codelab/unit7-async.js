/* Unit 7 — Async JavaScript & HTTP requests */
window.CODELAB.addUnit({
  id: "async",
  title: "Async JS & APIs",
  icon: "📡",
  color: "#f25f9c",
  blurb: "Talk to servers — callbacks, promises, async/await and fetch.",
  cheat: [
    { h: "setTimeout (later, not now)", lang: "js", code: "setTimeout(() => {\n  console.log(\"2 seconds later\");\n}, 2000);" },
    { h: "Making a promise", lang: "js", code: "function wait(ms) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"done\"), ms);\n  });\n}" },
    { h: "async / await", lang: "js", code: "async function main() {\n  const result = await wait(500); // pause HERE, not the whole program\n  console.log(result);\n}", note: "`await` only works inside an `async` function. Async functions always return a promise." },
    { h: "The fetch pattern (memorize this!)", lang: "js", code: "async function getUsers() {\n  const res = await fetch(\"/api/users\");\n  const data = await res.json();  // parse JSON body\n  return data;\n}", note: "Two awaits: one for the response headers, one for the body." },
    { h: "JSON", lang: "js", code: "JSON.stringify({ a: 1 }) // object → string  '{\"a\":1}'\nJSON.parse('{\"a\":1}')    // string → object", note: "JSON is how programs exchange data — it's just a strict string format of objects/arrays." }
  ],
  lessons: [

    {
      id: "async-1",
      title: "Later, not now: callbacks",
      kind: "js", chip: "API", xp: 15,
      brief: "So far your code ran top-to-bottom instantly. But the real world takes **time** — network requests, timers, file reads. JavaScript handles waiting with **asynchronous** code: *schedule work now, run it later.*\n\nThe primitive is `setTimeout(fn, ms)`, and the oldest async pattern is the **callback** — passing a function to be called when something finishes.",
      steps: [
        { text: "Write `delayedHello(callback)` that calls `callback(\"Hello!\")` after **50ms** using `setTimeout`.",
          test: "T.expect(typeof delayedHello === 'function', 'Define function delayedHello(callback) { … }');\nvar got;\ndelayedHello(function (msg) { got = msg; });\nT.expect(got === undefined, 'The callback must NOT run instantly — wrap it in setTimeout(…, 50).');\nawait T.sleep(120);\nT.eq(got, 'Hello!', 'After ~50ms the callback should receive \"Hello!\"');" },
        { text: "Log something **before** calling `delayedHello`, and log the message **inside** the callback — notice the order in the console!",
          test: "await T.sleep(120);\nT.expect(T.logged('hello'), 'Inside the callback, console.log the message.');\nT.expect(T.logs().length >= 2, 'Also log something before calling delayedHello — see how it prints FIRST?');" }
      ],
      files: [
        { name: "script.js", content: "// 1) delayedHello(callback): after 50ms, call callback(\"Hello!\")\n\n// 2) log \"ordering...\", then call delayedHello, logging the message in the callback\n" }
      ],
      hints: [
        "`function delayedHello(callback) { setTimeout(() => { callback(\"Hello!\"); }, 50); }`",
        "Call it like: `delayedHello((msg) => { console.log(msg); });`"
      ],
      solution: {
        "script.js": "function delayedHello(callback) {\n  setTimeout(() => {\n    callback(\"Hello!\");\n  }, 50);\n}\n\nconsole.log(\"ordering...\");\ndelayedHello((msg) => {\n  console.log(msg);\n});\n"
      }
    },

    {
      id: "async-2",
      title: "Promises",
      kind: "js", chip: "API", xp: 15,
      brief: "Callbacks nest badly (\"callback hell\"). A **Promise** is a cleaner handle on a future value: it's *pending*, then it **resolves** with a value (or **rejects** with an error).\n\nYou consume promises with `.then(...)` — or, next lesson, the even nicer `await`.",
      steps: [
        { text: "Write `wait(ms)` that **returns a Promise** which resolves with `\"done\"` after `ms` milliseconds.",
          test: "T.expect(typeof wait === 'function', 'Define function wait(ms) { return new Promise(…) }');\nvar p = wait(10);\nT.expect(p && typeof p.then === 'function', 'wait(…) should RETURN the promise (did you forget return?).');\nvar v = await p;\nT.eq(v, 'done', 'The promise should resolve with the string \"done\"');" },
        { text: "Use `wait(50).then(...)` to log `\"waited!\"` when it finishes.",
          test: "await T.sleep(140);\nT.expect(T.logged('waited'), 'Chain .then((msg) => console.log(\"waited!\")) onto wait(50).');" }
      ],
      files: [
        { name: "script.js", content: "// 1) wait(ms) → a Promise that resolves with \"done\" after ms\nfunction wait(ms) {\n  // return new Promise((resolve) => { ... });\n}\n\n// 2) wait(50).then(...) → log \"waited!\"\n" }
      ],
      hints: [
        "The shape: `return new Promise((resolve) => { setTimeout(() => resolve(\"done\"), ms); });`",
        "`.then` receives whatever was resolved: `wait(50).then((msg) => console.log(\"waited!\"));`"
      ],
      solution: {
        "script.js": "function wait(ms) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"done\"), ms);\n  });\n}\n\nwait(50).then(() => {\n  console.log(\"waited!\");\n});\n"
      }
    },

    {
      id: "async-3",
      title: "async / await",
      kind: "js", chip: "API", xp: 15,
      brief: "**async/await** is promises with beautiful syntax: inside an `async` function, `await` pauses *that function* until a promise settles, then hands you the value. It reads like normal code.\n\nThe starter gives you `fetchUser()` — a fake network call that resolves with a user object after 30ms. Consume it the modern way.",
      steps: [
        { text: "Write an **async** function `getUsername()` that awaits `fetchUser()` and returns the user's `username`.",
          test: "T.expect(typeof getUsername === 'function', 'Define async function getUsername() { … }');\nvar p = getUsername();\nT.expect(p && typeof p.then === 'function', 'Async functions always return a promise — did you mark it async?');\nT.eq(await p, 'ada', 'getUsername() should resolve with the username from fetchUser()');" },
        { text: "Call it and log the result (remember: you need `await` — or `.then` — to see the value).",
          test: "await T.sleep(150);\nT.expect(T.logged('ada'), 'Log the resolved username. Tip: wrap the call in an async main() { console.log(await getUsername()); } and call main();');" }
      ],
      files: [
        { name: "script.js", content: "// pretend network call — already written for you\nfunction fetchUser() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ username: \"ada\", level: 7 }), 30);\n  });\n}\n\n// 1) async function getUsername() → await fetchUser(), return its username\n\n// 2) log the result (hint: async function main() + await)\n" }
      ],
      hints: [
        "`async function getUsername() { const user = await fetchUser(); return user.username; }`",
        "To log it: `async function main() { console.log(await getUsername()); } main();`"
      ],
      solution: {
        "script.js": "// pretend network call — already written for you\nfunction fetchUser() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ username: \"ada\", level: 7 }), 30);\n  });\n}\n\nasync function getUsername() {\n  const user = await fetchUser();\n  return user.username;\n}\n\nasync function main() {\n  console.log(await getUsername());\n}\nmain();\n"
      }
    },

    {
      id: "async-4",
      title: "fetch & JSON",
      kind: "js", chip: "API", xp: 15,
      mock: {
        "/api/message": { text: "You are ready for APIs." },
        "/api/stats": { totalUsers: 1042, uptime: "99.9%" }
      },
      brief: "**fetch()** is how the browser calls APIs over HTTP. The pattern is always the same two awaits:\n\nThis sandbox ships a **mock API** so your requests really resolve: try `GET /api/message` and `GET /api/stats`.\n\nAPIs speak **JSON** — objects-as-text. `res.json()` parses it back into a real object.",
      example: { lang: "js", code: "const res = await fetch(\"/api/message\");\nconst data = await res.json();\n// data is now a normal object" },
      steps: [
        { text: "Write async `getMessage()` — fetch `/api/message`, parse it, and **return** `data.text`.",
          test: "T.expect(typeof getMessage === 'function', 'Define async function getMessage() { … }');\nT.eq(await getMessage(), 'You are ready for APIs.', 'Fetch /api/message, await res.json(), return data.text');" },
        { text: "Write async `getTotalUsers()` — fetch `/api/stats` and return the `totalUsers` number.",
          test: "T.expect(typeof getTotalUsers === 'function', 'Define async function getTotalUsers().');\nT.eq(await getTotalUsers(), 1042, 'Return data.totalUsers from /api/stats');" },
        { text: "Log the message.",
          test: "await T.sleep(250);\nT.expect(T.logged('ready for apis'), 'Log the message from getMessage() (await it!).');" }
      ],
      files: [
        { name: "script.js", content: "// The sandbox provides a mock API:\n//   GET /api/message → { text: \"...\" }\n//   GET /api/stats   → { totalUsers: 1042, uptime: \"99.9%\" }\n\n// 1) async getMessage() → the text from /api/message\n\n// 2) async getTotalUsers() → the totalUsers from /api/stats\n\n// 3) log the message\nasync function main() {\n  // console.log(await getMessage());\n}\nmain();\n" }
      ],
      hints: [
        "Same shape every time: `const res = await fetch(url); const data = await res.json();`",
        "Don't forget to RETURN the field you need — and to uncomment the log in main()."
      ],
      solution: {
        "script.js": "// The sandbox provides a mock API:\n//   GET /api/message → { text: \"...\" }\n//   GET /api/stats   → { totalUsers: 1042, uptime: \"99.9%\" }\n\nasync function getMessage() {\n  const res = await fetch(\"/api/message\");\n  const data = await res.json();\n  return data.text;\n}\n\nasync function getTotalUsers() {\n  const res = await fetch(\"/api/stats\");\n  const data = await res.json();\n  return data.totalUsers;\n}\n\nasync function main() {\n  console.log(await getMessage());\n}\nmain();\n"
      }
    },

    {
      id: "async-5",
      title: "Render API data to the page",
      kind: "web", chip: "API", xp: 15,
      mock: {
        "/api/users": [
          { name: "Ada Lovelace", handle: "@ada" },
          { name: "Linus Torvalds", handle: "@linus" },
          { name: "Grace Hopper", handle: "@grace" },
          { name: "Katherine Johnson", handle: "@katherine" }
        ]
      },
      brief: "The **core loop of every web app**: fetch data → loop over it → build DOM. Feeds, inboxes, dashboards — all this exact pattern.\n\nThis page's mock API serves `GET /api/users` (an array of 4 users). Fetch it when the page loads and render a list item per user.",
      steps: [
        { text: "Fetch `/api/users` and render **one `<li>` per user** into `#users`.",
          test: "await T.sleep(500);\nT.eq(T.count('#users li'), 4, 'Expected 4 <li> — one per user from the API. (Did you await the fetch and loop over the array?)');" },
        { text: "Each `<li>` shows the user's **name and handle**.",
          test: "await T.sleep(50);\nvar txt = (T.text('#users') || '').toLowerCase();\nT.expect(txt.indexOf('ada lovelace') !== -1 && txt.indexOf('@linus') !== -1, 'Include both fields, e.g. `${user.name} — ${user.handle}`');" },
        { text: "Update `#status` to show how many users loaded.",
          test: "await T.sleep(50);\nT.expect((T.text('#status') || '').indexOf('4') !== -1, 'Set #status to something like `4 users loaded`.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Directory</h1>\n  <p id=\"status\">Loading…</p>\n  <ul id=\"users\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "// mock API: GET /api/users → array of { name, handle }\n\nasync function loadUsers() {\n  // 1) fetch + parse\n  // 2) loop: create <li>, textContent = `${u.name} — ${u.handle}`, append to #users\n  // 3) set #status to `${users.length} users loaded`\n}\n\nloadUsers();\n" }
      ],
      hints: [
        "`const res = await fetch(\"/api/users\"); const users = await res.json();`",
        "Then it's the dom-3 loop: createElement(\"li\") → textContent → appendChild.",
        "Template literal for the status: `` `${users.length} users loaded` ``"
      ],
      solution: {
        "script.js": "// mock API: GET /api/users → array of { name, handle }\n\nasync function loadUsers() {\n  const res = await fetch(\"/api/users\");\n  const users = await res.json();\n\n  const list = document.querySelector(\"#users\");\n  for (const u of users) {\n    const li = document.createElement(\"li\");\n    li.textContent = `${u.name} — ${u.handle}`;\n    list.appendChild(li);\n  }\n\n  document.querySelector(\"#status\").textContent = `${users.length} users loaded`;\n}\n\nloadUsers();\n"
      }
    },

    {
      id: "async-quiz",
      title: "Async checkpoint quiz",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What prints, in order?",
          code: "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nconsole.log(\"C\");",
          lang: "js",
          choices: ["A, C, B", "A, B, C", "B, A, C", "C, B, A"],
          answer: 0, explain: "Even at 0ms, setTimeout callbacks wait until the current code finishes. Async = later, never now." },
        { q: "A Promise is best described as…",
          choices: ["A placeholder for a value that will arrive later", "A faster kind of function", "A loop that never ends", "A special HTML tag"],
          answer: 0, explain: "Pending → fulfilled (with a value) or rejected (with an error)." },
        { q: "Where is `await` allowed?",
          choices: ["Inside a function marked `async`", "Anywhere at all", "Only inside loops", "Only in HTML files"],
          answer: 0, explain: "await lives inside async functions (that's also why we wrap code in async main())." },
        { q: "Why TWO awaits in the fetch pattern?",
          code: "const res = await fetch(url);\nconst data = await res.json();",
          lang: "js",
          choices: ["First waits for the response, second waits for the body to parse", "It's a typo — one is enough", "fetch must be called twice", "The second await retries on failure"],
          answer: 0, explain: "fetch resolves when headers arrive; .json() is itself async because the body streams in." },
        { q: "What is JSON?",
          choices: ["A text format for exchanging objects/arrays between programs", "A JavaScript-only database", "A styling language", "A type of server"],
          answer: 0, explain: "JavaScript Object Notation — language-independent text. JSON.parse ⇄ JSON.stringify convert both ways." },
        { q: "`async function f() { return 5; }` — what does `f()` give you?",
          choices: ["A Promise that resolves to 5", "The number 5 immediately", "undefined", "An error"],
          answer: 0, explain: "async functions ALWAYS wrap their return value in a promise — that's the contract." }
      ]
    },

    {
      id: "async-project",
      title: "Project: Team directory",
      kind: "web", chip: "API", xp: 40, project: true,
      mock: {
        "/api/team": [
          { name: "Maya Chen", role: "Frontend", email: "maya@studio.dev" },
          { name: "Jonas Weber", role: "Backend", email: "jonas@studio.dev" },
          { name: "Priya Patel", role: "Design", email: "priya@studio.dev" },
          { name: "Leo Costa", role: "DevOps", email: "leo@studio.dev" },
          { name: "Sara Lindqvist", role: "Product", email: "sara@studio.dev" }
        ]
      },
      brief: "Build a **team directory page** powered by an API — the take-home exercise a lot of real jobs use.\n\nThe mock endpoint `GET /api/team` returns 5 teammates (`name`, `role`, `email`). Fetch once on load, render a card per person, and show the headcount.",
      steps: [
        { text: "Fetch the team and render **one `.member-card` div per person** into `#team`.",
          test: "await T.sleep(500);\nT.eq(T.count('#team .member-card'), 5, 'Render 5 elements with class member-card inside #team.');" },
        { text: "Every card shows the person's **name** and **role**.",
          test: "await T.sleep(50);\nvar cards = T.$$('#team .member-card');\nvar ok = cards.length === 5 && cards.every(function (c) { return (c.textContent || '').trim().length > 5; });\nT.expect(ok, 'Put content in every card.');\nvar txt = (T.text('#team') || '').toLowerCase();\nT.expect(txt.indexOf('maya chen') !== -1 && txt.indexOf('devops') !== -1, 'Each card needs the name and the role.');" },
        { text: "Include each **email** in the card too.",
          test: "await T.sleep(50);\nvar txt = (T.text('#team') || '').toLowerCase();\nT.expect(txt.indexOf('sara@studio.dev') !== -1 && txt.indexOf('maya@studio.dev') !== -1, 'Show u.email in the cards as well.');" },
        { text: "`#headcount` announces the team size.",
          test: "await T.sleep(50);\nT.expect((T.text('#headcount') || '').indexOf('5') !== -1, 'Set #headcount to something like `Team of 5`.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Studio team</h1>\n  <p id=\"headcount\">Loading…</p>\n  <div id=\"team\"></div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 20px; }\n\n.member-card {\n  background: white;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 10px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n\n.member-card h3 { margin: 0 0 4px; }\n.member-card p { margin: 0; color: #64748b; font-size: 14px; }\n" },
        { name: "script.js", content: "// GET /api/team → [{ name, role, email } x5]\n\nasync function loadTeam() {\n  // 1) fetch + parse\n  // 2) for each member: create a div.member-card,\n  //    fill it (innerHTML with <h3> name and <p> role · email is fine),\n  //    append to #team\n  // 3) set #headcount\n}\n\nloadTeam();\n" }
      ],
      hints: [
        "Create the card with `const card = document.createElement(\"div\"); card.className = \"member-card\";`",
        "Fill it fast: `card.innerHTML = `<h3>${u.name}</h3><p>${u.role} · ${u.email}</p>`;`",
        "Headcount: `` document.querySelector(\"#headcount\").textContent = `Team of ${team.length}`; ``"
      ],
      solution: {
        "script.js": "// GET /api/team → [{ name, role, email } x5]\n\nasync function loadTeam() {\n  const res = await fetch(\"/api/team\");\n  const team = await res.json();\n\n  const wrap = document.querySelector(\"#team\");\n  for (const u of team) {\n    const card = document.createElement(\"div\");\n    card.className = \"member-card\";\n    card.innerHTML = `<h3>${u.name}</h3><p>${u.role} · ${u.email}</p>`;\n    wrap.appendChild(card);\n  }\n\n  document.querySelector(\"#headcount\").textContent = `Team of ${team.length}`;\n}\n\nloadTeam();\n"
      }
    }
  ]
});
