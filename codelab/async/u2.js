/* Async JavaScript & APIs — Unit 2: fetch & JSON */
window.CODELAB.addUnit("async", {
  id: "async-u2",
  title: "fetch & JSON",
  icon: "📡",
  blurb: "Call APIs with fetch, build dynamic URLs, and bend JSON into exactly the shape your page needs.",
  cheat: [
    { h: "The fetch pattern (memorize this!)", lang: "js", code: "async function getUsers() {\n  const res = await fetch(\"/api/users\");\n  const data = await res.json();  // parse the JSON body\n  return data;\n}", note: "Two awaits: one for the response, one for the body." },
    { h: "Dynamic URLs", lang: "js", code: "async function getCity(id) {\n  const res = await fetch(`/api/city/${id}`);\n  return res.json();\n}\n// getCity(\"paris\") → GET /api/city/paris", note: "Template literals — backticks + ${…} — build the path from data." },
    { h: "Nested fields", lang: "js", code: "const data = { stats: { wins: 87, losses: 13 } };\ndata.stats.wins // 87 — one dot per level" },
    { h: "Render a list from an API", lang: "js", code: "const res = await fetch(\"/api/users\");\nconst users = await res.json();\nfor (const u of users) {\n  const li = document.createElement(\"li\");\n  li.textContent = u.handle;\n  listEl.appendChild(li);\n}" },
    { h: "JSON ⇄ objects", lang: "js", code: "JSON.stringify({ a: 1 }) // object → text  '{\"a\":1}'\nJSON.parse('{\"a\":1}')    // text → object", note: "JSON is strict: double quotes around keys and strings, no trailing commas." }
  ],
  lessons: [

    {
      id: "async-u2-1",
      title: "fetch & JSON",
      kind: "js", chip: "API", xp: 15, mins: 12,
      mock: {
        "/api/message": { text: "You are ready for APIs." },
        "/api/stats": { totalUsers: 1042, uptime: "99.9%" }
      },
      brief: "**fetch()** is how the browser calls APIs over HTTP — and the pattern is always the same **two awaits**: one for the response to arrive, one for the body to parse.\n\nThis sandbox ships a **mock API**, so your requests really resolve: try `GET /api/message` and `GET /api/stats`.\n\nAPIs speak **JSON** — objects-as-text. `res.json()` turns the body back into a real object you can dot into.",
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
      id: "async-u2-2",
      title: "Render API data",
      kind: "web", chip: "API", xp: 15, mins: 12,
      mock: {
        "/api/users": [
          { name: "Ada Lovelace", handle: "@ada" },
          { name: "Linus Torvalds", handle: "@linus" },
          { name: "Grace Hopper", handle: "@grace" },
          { name: "Katherine Johnson", handle: "@katherine" }
        ]
      },
      brief: "The **core loop of every web app**: fetch data → loop over it → build DOM. Feeds, inboxes, dashboards, search results — all this exact pattern.\n\nThis page's mock API serves `GET /api/users` (an array of 4 users). Fetch it when the page loads, render a list item per user, then tell the visitor how many loaded.",
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
        "Then it's the DOM loop you know: createElement(\"li\") → textContent → appendChild.",
        "Template literal for the status: `${users.length} users loaded`"
      ],
      solution: {
        "script.js": "// mock API: GET /api/users → array of { name, handle }\n\nasync function loadUsers() {\n  const res = await fetch(\"/api/users\");\n  const users = await res.json();\n\n  const list = document.querySelector(\"#users\");\n  for (const u of users) {\n    const li = document.createElement(\"li\");\n    li.textContent = `${u.name} — ${u.handle}`;\n    list.appendChild(li);\n  }\n\n  document.querySelector(\"#status\").textContent = `${users.length} users loaded`;\n}\n\nloadUsers();\n"
      }
    },

    {
      id: "async-u2-3",
      title: "Dynamic URLs",
      kind: "js", chip: "API", xp: 15, mins: 12,
      mock: {
        "/api/city/paris": { city: "Paris", country: "France", population: 2100000 },
        "/api/city/tokyo": { city: "Tokyo", country: "Japan", population: 14000000 },
        "/api/city/cairo": { city: "Cairo", country: "Egypt", population: 9900000 }
      },
      brief: "Real APIs don't have one endpoint per thing — they have **URL patterns**: `/api/city/paris`, `/api/city/tokyo`, `/api/city/cairo`. Same shape, different id.\n\nSo your code builds the URL from data with a **template literal**:\n\n- backticks, not quotes\n- `${id}` drops the variable into the string\n\nWrite one `getCity(id)` and it can fetch **any** city — that's the whole point.",
      example: { lang: "js", code: "const id = \"paris\";\nconst res = await fetch(`/api/city/${id}`); // GET /api/city/paris" },
      steps: [
        { text: "Write async `getCity(id)` — fetch `` `/api/city/${id}` `` and **return the whole parsed object**.",
          test: "T.expect(typeof getCity === 'function', 'Define async function getCity(id) { … }');\nvar paris = await getCity('paris');\nT.eq(paris, { city: 'Paris', country: 'France', population: 2100000 }, 'getCity(\"paris\") should return the WHOLE parsed object from /api/city/paris.');\nvar tokyo = await getCity('tokyo');\nT.eq(tokyo.population, 14000000, 'getCity(\"tokyo\") must hit /api/city/tokyo — build the URL with a template literal `/api/city/${id}`, don\\'t hard-code paris.');" },
        { text: "Write async `getCountry(id)` that returns **just the `country` field** — reuse `getCity`!",
          test: "T.expect(typeof getCountry === 'function', 'Define async function getCountry(id).');\nT.eq(await getCountry('tokyo'), 'Japan', 'getCountry(\"tokyo\") should return only the country string.');\nT.eq(await getCountry('cairo'), 'Egypt', 'It should work for ANY id: getCountry(\"cairo\") → \"Egypt\".');" },
        { text: "Log a line about tokyo, e.g. `Tokyo has 14000000 people`.",
          test: "await T.sleep(250);\nT.expect(T.logged('tokyo'), 'Log the sentence for tokyo — e.g. `${data.city} has ${data.population} people` (await getCity(\"tokyo\") first).');\nT.expect(T.logged('14000000'), 'Include the population number in the logged sentence.');" }
      ],
      files: [
        { name: "script.js", content: "// mock API — three endpoints, same shape:\n//   GET /api/city/paris → { city: \"Paris\", country: \"France\", population: 2100000 }\n//   GET /api/city/tokyo → { city: \"Tokyo\", country: \"Japan\", population: 14000000 }\n//   GET /api/city/cairo → { city: \"Cairo\", country: \"Egypt\", population: 9900000 }\n\n// 1) async getCity(id) → fetch `/api/city/${id}`, return the parsed object\n\n// 2) async getCountry(id) → just the country field (reuse getCity!)\n\n// 3) log a line about tokyo\nasync function main() {\n  // const data = await getCity(\"tokyo\");\n  // console.log(`${data.city} has ${data.population} people`);\n}\nmain();\n" }
      ],
      hints: [
        "Backticks build the URL: const res = await fetch(`/api/city/${id}`); — with normal quotes instead of backticks, ${id} is just six literal characters.",
        "getCountry doesn't need its own fetch: `const data = await getCity(id); return data.country;`",
        "For the log, uncomment the two lines in main() — they already do the trick."
      ],
      solution: {
        "script.js": "// mock API — three endpoints, same shape:\n//   GET /api/city/paris → { city: \"Paris\", country: \"France\", population: 2100000 }\n//   GET /api/city/tokyo → { city: \"Tokyo\", country: \"Japan\", population: 14000000 }\n//   GET /api/city/cairo → { city: \"Cairo\", country: \"Egypt\", population: 9900000 }\n\nasync function getCity(id) {\n  const res = await fetch(`/api/city/${id}`);\n  const data = await res.json();\n  return data;\n}\n\nasync function getCountry(id) {\n  const data = await getCity(id);\n  return data.country;\n}\n\nasync function main() {\n  const data = await getCity(\"tokyo\");\n  console.log(`${data.city} has ${data.population} people`);\n}\nmain();\n"
      }
    },

    {
      id: "async-u2-4",
      title: "JSON in and out",
      kind: "js", chip: "API", xp: 15, mins: 12,
      mock: {
        "/api/player": { tag: "NovaStrike", level: 42, stats: { wins: 87, losses: 13, streak: 5 } }
      },
      brief: "APIs never send you objects — they send **text that describes objects**: JSON. Two functions convert both ways:\n\n- `JSON.stringify(obj)` — object → text (how you SEND data)\n- `JSON.parse(str)` — text → object (`res.json()` does this for you)\n\nAnd real payloads are **nested**: `data.stats.wins` digs two levels deep, one dot per level. Round-trip some JSON by hand, dig into a nested player object, then reshape it into a human-readable summary line.",
      example: { lang: "js", code: "const text = JSON.stringify({ a: 1 }); // '{\"a\":1}'\nconst back = JSON.parse(text);         // { a: 1 } again" },
      steps: [
        { text: "Write `pack(obj)` returning `JSON.stringify(obj)`, and `unpack(str)` returning `JSON.parse(str)`.",
          test: "T.expect(typeof pack === 'function' && typeof unpack === 'function', 'Define pack(obj) and unpack(str) — both are one-liners.');\nT.eq(pack({ a: 1 }), '{\"a\":1}', 'pack({ a: 1 }) should return the exact JSON text {\"a\":1} — that is JSON.stringify.');\nT.eq(unpack('{\"b\":2}'), { b: 2 }, 'unpack should JSON.parse the text back into a real object.');\nvar roundTrip = unpack(pack({ deep: { n: 7 }, list: [1, 2] }));\nT.eq(roundTrip, { deep: { n: 7 }, list: [1, 2] }, 'A pack → unpack round trip should reproduce the object exactly.');" },
        { text: "Write async `getWins()` — fetch `/api/player` and return the **nested** `data.stats.wins`.",
          test: "T.expect(typeof getWins === 'function', 'Define async function getWins() { … }');\nT.eq(await getWins(), 87, 'Fetch /api/player and return data.stats.wins — the dot path goes TWO levels deep.');" },
        { text: "Write async `summary()` — reshape the player into ONE string with tag, level, wins and losses, e.g. `NovaStrike (level 42): 87 wins, 13 losses`.",
          test: "T.expect(typeof summary === 'function', 'Define async function summary().');\nvar line = (await summary() + '').toLowerCase();\nT.expect(line.indexOf('novastrike') !== -1, 'Include the player tag (NovaStrike) in the summary string.');\nT.expect(line.indexOf('42') !== -1 && line.indexOf('87') !== -1 && line.indexOf('13') !== -1, 'Include the level (42), the wins (87) and the losses (13) — a template literal makes this painless.');" }
      ],
      files: [
        { name: "script.js", content: "// mock API: GET /api/player →\n//   { tag: \"NovaStrike\", level: 42, stats: { wins: 87, losses: 13, streak: 5 } }\n\n// 1) pack(obj)  → JSON.stringify(obj)\n//    unpack(str) → JSON.parse(str)\n\n// 2) async getWins() → fetch /api/player, return data.stats.wins\n\n// 3) async summary() → one string with tag, level, wins, losses\n//    e.g. \"NovaStrike (level 42): 87 wins, 13 losses\"\n" }
      ],
      hints: [
        "pack and unpack really are one-liners: `return JSON.stringify(obj);` and `return JSON.parse(str);`",
        "Nested access is chained dots: `data.stats.wins` — data, THEN stats, THEN wins.",
        "Build the summary with a template literal: `${data.tag} (level ${data.level}): ${data.stats.wins} wins, ${data.stats.losses} losses`"
      ],
      solution: {
        "script.js": "// mock API: GET /api/player →\n//   { tag: \"NovaStrike\", level: 42, stats: { wins: 87, losses: 13, streak: 5 } }\n\nfunction pack(obj) {\n  return JSON.stringify(obj);\n}\n\nfunction unpack(str) {\n  return JSON.parse(str);\n}\n\nasync function getWins() {\n  const res = await fetch(\"/api/player\");\n  const data = await res.json();\n  return data.stats.wins;\n}\n\nasync function summary() {\n  const res = await fetch(\"/api/player\");\n  const data = await res.json();\n  return `${data.tag} (level ${data.level}): ${data.stats.wins} wins, ${data.stats.losses} losses`;\n}\n"
      }
    },

    {
      id: "async-quiz-2",
      title: "Unit 2 quiz: fetch & JSON",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What does `fetch(\"/api/data\")` hand you back?",
          choices: ["The parsed data, ready to use right away", "A JSON string of the response body", "A Promise that resolves to a Response object", "Nothing — it fills in a global variable"],
          answer: 2, explain: "fetch returns a promise for the Response — the status, the headers, and a handle on the body, but no parsed data yet. You await it, then parse the body with res.json()." },
        { q: "Why does `res.json()` need its OWN await?",
          code: "const res = await fetch(url);\nconst data = await res.json();",
          lang: "js",
          choices: ["Parsing the body is its own async step", "It doesn't — the second await is decorative", "res.json() re-sends the request", "await converts the object into a string"],
          answer: 0, explain: "fetch resolves the moment the headers arrive — the body may still be streaming in behind them. res.json() reads that stream to the end and parses it, so it hands back a promise of its own and needs its own await." },
        { q: "`const id = \"tokyo\"` — which call actually requests `/api/city/tokyo`?",
          choices: ["fetch(\"/api/city/id\")", "fetch(\"/api/city/$id\")", "fetch('/api/city/#{id}')", "fetch(`/api/city/${id}`)"],
          answer: 3, explain: "Template literals need BACKTICKS plus ${...}. The other three send the literal characters, not the value of id." },
        { q: "Which direction does `JSON.stringify` go?",
          choices: ["JSON text → object", "object → JSON text", "object → a prettier object", "JSON text → JavaScript file"],
          answer: 1, explain: "stringify writes objects OUT as text; JSON.parse reads text back IN. Round trip: parse(stringify(x)) gives you x's twin." },
        { q: "The API returned `{ stats: { wins: 87, losses: 13 } }` into `data`. Where are the wins?",
          choices: ["data.wins", "data.stats.wins", "data[\"stats\"->\"wins\"]", "stats.wins"],
          answer: 1, explain: "One dot per level of nesting: data → stats → wins. data.wins is undefined — the wins live one level deeper." },
        { q: "How is a `tag` property holding the string `Ada` written in valid JSON?",
          choices: ["{ tag: \"Ada\" }", "{ 'tag': 'Ada' }", "{ \"tag\": \"Ada\" }", "{ \"tag\": Ada }"],
          answer: 2, explain: "JSON is stricter than JavaScript: keys AND string values must use double quotes, so it has to be { \"tag\": \"Ada\" }. An unquoted key, single quotes, or a bare unquoted value each make JSON.parse throw." }
      ]
    }
  ]
});
