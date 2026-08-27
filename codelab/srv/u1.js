/* Back-End Foundations — Unit 1: Request in, response out */
window.CODELAB.addUnit("srv", {
  id: "srv-u1",
  title: "Request in, response out",
  icon: "🖥️",
  blurb: "The one-function mental model behind every backend: routing, methods and status codes.",
  cheat: [
    { h: "The server's whole job", lang: "js", code: "// request in…\n{ method: \"GET\", path: \"/api/pets\", body: null }\n// …response out\n{ status: 200, body: [ /* data */ ] }", note: "Every backend — Express, Django, Rails — is a fancy version of this function." },
    { h: "Status codes to know", lang: "js", code: "200 // OK\n201 // Created (successful POST)\n400 // Bad request (client sent junk)\n404 // Not found (no such path)\n405 // Method not allowed (path exists, verb doesn't)\n500 // Server error", note: "2xx success · 4xx the client messed up · 5xx the server messed up." },
    { h: "HTTP methods (verbs)", lang: "js", code: "GET    // read data\nPOST   // create data\nPATCH  // update part of it\nDELETE // remove it", note: "Nouns live in the path, verbs in the method." },
    { h: "A router is an if-chain", lang: "js", code: "function handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/pets\") {\n    return { status: 200, body: PETS };\n  }\n  return { status: 404, body: \"Not found\" }; // catch-all LAST\n}", note: "Early returns, most specific branches first, 404 as the final line." },
    { h: "How this looks in Express (real Node.js)", lang: "js", code: "app.get(\"/api/pets\", (req, res) => {\n  res.json(pets);\n});\napp.post(\"/api/pets\", (req, res) => {\n  res.status(201).json(req.body);\n});", note: "Same ideas, nicer packaging. What you build here transfers 1:1." }
  ],
  lessons: [

    {
      id: "srv-u1-1",
      title: "What a server actually does",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Strip away the buzzwords and a **web server** is one function: *request in → response out.*\n\nA request says what the client wants: a **method** (`GET`, `POST`…), a **path** (`/api/todos`), maybe a **body** of data. A response carries a **status code** (200 = OK) and a **body**. That's the whole convention for this course — `{ method, path, body }` in, `{ status, body }` out — and we'll grow it (query strings, headers, auth) in later units.\n\nWe'll simulate the server as a plain function — the exact mental model behind Express, the most popular Node.js framework (see the cheatsheet side-by-side).",
      example: { lang: "js", code: "// the client asks…\nconst req = { method: \"GET\", path: \"/api/pets\", body: null };\n// …the server answers\nconst res = handleRequest(req); // → { status: 200, body: [...] }" },
      steps: [
        { text: "Write `handleRequest(req)` returning an object with `status: 200`.",
          test: "T.expect(typeof handleRequest === 'function', 'Define function handleRequest(req) { … }');\nvar res = handleRequest({ method: 'GET', path: '/', body: null });\nT.expect(res && typeof res === 'object', 'Return an object.');\nT.eq(res.status, 200, 'The response needs status: 200 — yours has status ' + (res && res.status));" },
        { text: "Give it a `body` — the string `\"Welcome to my API!\"`.",
          test: "var res = handleRequest({ method: 'GET', path: '/', body: null });\nT.eq(res.body, 'Welcome to my API!', 'Set body exactly to \"Welcome to my API!\"');" },
        { text: "Simulate a request and log the response.",
          test: "T.expect(T.logged('welcome to my api'), 'console.log(handleRequest({ method: \"GET\", path: \"/\", body: null }));');" }
      ],
      files: [
        { name: "script.js", content: "// A server, minus the internet:\n//   request  = { method, path, body }\n//   response = { status, body }\n\nfunction handleRequest(req) {\n  // return { status: ..., body: ... }\n}\n\n// simulate a request and log what comes back\n" }
      ],
      hints: [
        "`return { status: 200, body: \"Welcome to my API!\" };`",
        "Simulating is just calling it: `console.log(handleRequest({ method: \"GET\", path: \"/\", body: null }));`"
      ],
      solution: {
        "script.js": "// A server, minus the internet:\n//   request  = { method, path, body }\n//   response = { status, body }\n\nfunction handleRequest(req) {\n  return { status: 200, body: \"Welcome to my API!\" };\n}\n\n// simulate a request and log what comes back\nconsole.log(handleRequest({ method: \"GET\", path: \"/\", body: null }));\n"
      }
    },

    {
      id: "srv-u1-2",
      title: "Routing",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Real servers answer **different paths differently** — that's **routing**. Check `req.path` and branch:\n\n- `/` → `\"Home\"`\n- `/about` → `\"About us\"`\n- anything else → **404** with `\"Not found\"`\n\nEarly returns keep the router readable: each route is one `if` that returns immediately, and the very last line is the catch-all. That 404 branch matters more than beginners expect — a good API *always* answers, even when the answer is \"no such page\". Silence (or `undefined`) is how servers hang.",
      steps: [
        { text: "`GET /` returns status 200 with body `\"Home\"`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/', body: null }), { status: 200, body: 'Home' }, 'GET / should answer { status: 200, body: \"Home\" }');" },
        { text: "`GET /about` returns 200 with `\"About us\"`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/about', body: null }), { status: 200, body: 'About us' }, 'GET /about should answer { status: 200, body: \"About us\" }');" },
        { text: "Any other path → `{ status: 404, body: \"Not found\" }`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/pizza', body: null }), { status: 404, body: 'Not found' }, 'GET /pizza should 404 with body \"Not found\"');\nT.eq(handleRequest({ method: 'GET', path: '/x/y', body: null }), { status: 404, body: 'Not found' }, 'GET /x/y should 404 too — the catch-all handles EVERY unknown path');" }
      ],
      files: [
        { name: "script.js", content: "function handleRequest(req) {\n  // if req.path === \"/\"        → 200 \"Home\"\n  // if req.path === \"/about\"   → 200 \"About us\"\n  // otherwise                  → 404 \"Not found\"\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/about\", body: null }));\nconsole.log(handleRequest({ method: \"GET\", path: \"/pizza\", body: null }));\n" }
      ],
      hints: [
        "Early returns keep routers readable: `if (req.path === \"/\") return { status: 200, body: \"Home\" };`",
        "The LAST line of the function is the catch-all: `return { status: 404, body: \"Not found\" };`"
      ],
      solution: {
        "script.js": "function handleRequest(req) {\n  if (req.path === \"/\") return { status: 200, body: \"Home\" };\n  if (req.path === \"/about\") return { status: 200, body: \"About us\" };\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/about\", body: null }));\nconsole.log(handleRequest({ method: \"GET\", path: \"/pizza\", body: null }));\n"
      }
    },

    {
      id: "srv-u1-3",
      title: "Methods: GET vs POST",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Same path, different **method**, different meaning:\n\n- `GET /api/pets` → *read* the list\n- `POST /api/pets` → *create* one (the new pet rides in `req.body`)\n\nA successful POST answers **201 Created** and echoes back what was made, so the client instantly sees what it got. Route on **both** `req.method` and `req.path` — one `&&` per branch.\n\nEverything unmatched still falls to the 404 catch-all for now. Next lesson upgrades the *known path, wrong verb* case to a more honest answer.",
      steps: [
        { text: "`GET /api/pets` → 200 with the `PETS` array as the body.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/pets', body: null });\nT.eq(res, { status: 200, body: [{ petName: 'Biscuit', kind: 'dog' }, { petName: 'Mochi', kind: 'cat' }] }, 'GET /api/pets should answer 200 with the PETS array');" },
        { text: "`POST /api/pets` → **201** with `req.body` echoed back.",
          test: "var res = handleRequest({ method: 'POST', path: '/api/pets', body: { petName: 'Ziggy', kind: 'parrot' } });\nT.eq(res, { status: 201, body: { petName: 'Ziggy', kind: 'parrot' } }, 'POST /api/pets should answer 201 with the sent pet — yours answered status ' + (res && res.status));" },
        { text: "Everything else (wrong method OR wrong path) → 404 `\"Not found\"`.",
          test: "T.eq(handleRequest({ method: 'DELETE', path: '/api/pets', body: null }).status, 404, 'DELETE /api/pets is not a route you defined — 404 it (for now!)');\nT.eq(handleRequest({ method: 'GET', path: '/api/cars', body: null }), { status: 404, body: 'Not found' }, 'GET /api/cars → 404 \"Not found\"');" }
      ],
      files: [
        { name: "script.js", content: "const PETS = [\n  { petName: \"Biscuit\", kind: \"dog\" },\n  { petName: \"Mochi\", kind: \"cat\" }\n];\n\nfunction handleRequest(req) {\n  // GET  /api/pets → { status: 200, body: PETS }\n  // POST /api/pets → { status: 201, body: req.body }\n  // else           → { status: 404, body: \"Not found\" }\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/pets\", body: null }));\n" }
      ],
      hints: [
        "Combine both checks: `if (req.method === \"GET\" && req.path === \"/api/pets\") …`",
        "The POST branch: `return { status: 201, body: req.body };`"
      ],
      solution: {
        "script.js": "const PETS = [\n  { petName: \"Biscuit\", kind: \"dog\" },\n  { petName: \"Mochi\", kind: \"cat\" }\n];\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/pets\") {\n    return { status: 200, body: PETS };\n  }\n  if (req.method === \"POST\" && req.path === \"/api/pets\") {\n    return { status: 201, body: req.body };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/pets\", body: null }));\n"
      }
    },

    {
      id: "srv-u1-4",
      title: "Speaking status fluently",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Status codes are how your API *talks*. The families: **2xx** success, **4xx** the client messed up, **5xx** you messed up. Fluency means picking the precise one:\n\n- `200` OK · `201` Created\n- `400` bad input · `404` no such path\n- `405` **method not allowed** — the path exists, the verb doesn't. Last lesson you 404'd those; a fluent API tells the truth instead.\n\nBuild a tiny message board that speaks all five: list, create (with validation, ids from a counter), and an honest error for every wrong turn.",
      example: { lang: "js", code: "// the five answers a fluent API gives\n200 // OK — here's your data\n201 // Created — the POST worked\n400 // Bad request — your input was junk\n404 // Not found — no such path\n405 // Method not allowed — real path, wrong verb" },
      steps: [
        { text: "`GET /api/messages` → 200 with the (initially empty) messages array.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/messages', body: null });\nT.eq(res, { status: 200, body: [] }, 'GET /api/messages should answer { status: 200, body: [] } while the board is empty');" },
        { text: "`POST /api/messages` with `body: { text }` → **201** with the created message `{ id, text }` (ids count up from 1).",
          test: "var res = handleRequest({ method: 'POST', path: '/api/messages', body: { text: 'hello' } });\nT.eq(res, { status: 201, body: { id: 1, text: 'hello' } }, 'POST /api/messages should answer 201 with the created message — yours answered status ' + (res && res.status));\nT.eq(handleRequest({ method: 'GET', path: '/api/messages', body: null }).body, [{ id: 1, text: 'hello' }], 'The new message should be IN the list afterwards');" },
        { text: "**Validation**: POST with no usable `text` → **400** `{ error: \"text is required\" }` — and nothing gets created.",
          test: "var res = handleRequest({ method: 'POST', path: '/api/messages', body: {} });\nT.eq(res, { status: 400, body: { error: 'text is required' } }, 'POST with no text should answer 400 { error: \"text is required\" } — yours answered status ' + (res && res.status));\nvar res2 = handleRequest({ method: 'POST', path: '/api/messages', body: null });\nT.eq(res2.status, 400, 'A null body should ALSO 400 — check req.body exists BEFORE reading req.body.text');\nT.eq(handleRequest({ method: 'GET', path: '/api/messages', body: null }).body.length, 1, 'Bad requests must not create anything — the list should still hold exactly 1 message');" },
        { text: "Wrong verb on the real path → **405** `{ error: \"method not allowed\" }`; unknown paths still → 404 `\"Not found\"`.",
          test: "var res = handleRequest({ method: 'DELETE', path: '/api/messages', body: null });\nT.eq(res, { status: 405, body: { error: 'method not allowed' } }, 'DELETE /api/messages: the path EXISTS, the method does not — answer 405, not 404. Yours answered status ' + (res && res.status));\nT.eq(handleRequest({ method: 'PUT', path: '/api/messages', body: null }).status, 405, 'PUT /api/messages should also 405');\nT.eq(handleRequest({ method: 'GET', path: '/api/unicorns', body: null }), { status: 404, body: 'Not found' }, 'Unknown paths still get the 404 catch-all');\nT.eq(handleRequest({ method: 'GET', path: '/api/messages', body: null }).status, 200, 'GET /api/messages should still answer 200 — the 405 branch must not swallow real routes');" }
      ],
      files: [
        { name: "script.js", content: "// A tiny message board.\n//   request  = { method, path, body }\n//   response = { status, body }\n\nlet messages = [];\nlet nextId = 1;\n\nfunction handleRequest(req) {\n  // 1) GET  /api/messages → 200, the messages array\n  // 2) POST /api/messages → 201, create { id, text } from req.body.text\n  //    …but no usable text → 400 { error: \"text is required\" }\n  // 3) any OTHER method on /api/messages → 405 { error: \"method not allowed\" }\n  // 4) anything else → 404 \"Not found\"\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/messages\", body: null }));\n" }
      ],
      hints: [
        "Route matching first: `if (req.method === \"GET\" && req.path === \"/api/messages\") return { status: 200, body: messages };`",
        "Validate before creating: `if (!req.body || typeof req.body.text !== \"string\" || req.body.text.trim() === \"\") return { status: 400, body: { error: \"text is required\" } };` — then build `{ id: nextId++, text: req.body.text }`, push it, answer 201 with it.",
        "The 405 branch goes AFTER the GET/POST branches but BEFORE the 404: `if (req.path === \"/api/messages\") return { status: 405, body: { error: \"method not allowed\" } };` — any allowed method has already returned by then."
      ],
      solution: {
        "script.js": "// A tiny message board.\n//   request  = { method, path, body }\n//   response = { status, body }\n\nlet messages = [];\nlet nextId = 1;\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/messages\") {\n    return { status: 200, body: messages };\n  }\n  if (req.method === \"POST\" && req.path === \"/api/messages\") {\n    if (!req.body || typeof req.body.text !== \"string\" || req.body.text.trim() === \"\") {\n      return { status: 400, body: { error: \"text is required\" } };\n    }\n    const message = { id: nextId++, text: req.body.text };\n    messages.push(message);\n    return { status: 201, body: message };\n  }\n  if (req.path === \"/api/messages\") {\n    return { status: 405, body: { error: \"method not allowed\" } };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/messages\", body: null }));\n"
      }
    },

    {
      id: "srv-quiz-1",
      title: "Unit 1 quiz: Servers & routing",
      kind: "quiz", xp: 10,
      brief: "The one-function model, routing, methods and status codes. 80% to pass.",
      questions: [
        { q: "At its core, a web server is…",
          choices: ["A special programming language", "A database that answers in HTML", "A function: request in, response out", "A folder of HTML files served as-is"],
          answer: 2, explain: "Not a language, not a database, not a folder of files — a **function**. Express, Django, Rails are all fancy wrappers around `handleRequest(req) → res`, and you're building that core idea directly." },
        { q: "Which part of the request says WHICH resource the client wants?",
          choices: ["The path (e.g. /api/pets)", "The status code, like 404", "The body of the response", "The port number in the URL"],
          answer: 0, explain: "Method = the verb, path = the noun — `/api/pets` names WHICH resource is wanted. Status codes and bodies belong to the RESPONSE, the server's side of the conversation, and the port only says which process to knock on." },
        { q: "A successful POST that creates a resource should answer…",
          choices: ["200", "201", "204", "404"],
          answer: 1, explain: "200 is generic success; 201 Created specifically celebrates a new record — usually echoing it back in the body." },
        { q: "What does this call return?",
          code: "function handleRequest(req) {\n  if (req.path === \"/\") return { status: 200, body: \"Home\" };\n  if (req.path === \"/about\") return { status: 200, body: \"About us\" };\n  return { status: 404, body: \"Not found\" };\n}\n\nhandleRequest({ method: \"GET\", path: \"/pizza\", body: null });",
          lang: "js",
          choices: ["{ status: 200, body: \"Home\" }", "{ status: 200, body: \"About us\" }", "undefined — nothing matched", "{ status: 404, body: \"Not found\" }"],
          answer: 3, explain: "No branch matches /pizza, so it falls through to the catch-all. It does NOT return `undefined` and it does NOT throw — the final `return` is the safety net. A good router ALWAYS answers, and that last line is what guarantees it." },
        { q: "`GET /api/pets` and `POST /api/pets` are…",
          choices: ["The same route, written out twice", "Two routes: same noun, different verb", "Invalid — a path can only have one method", "Two ways of creating the same pet"],
          answer: 1, explain: "Routing keys on method AND path together, so the same noun with a different verb is a different route. GET reads the list, POST creates a pet — one `&&` per branch. And a single path can carry as many methods as you care to define." },
        { q: "A client sends `DELETE /api/pets`, but your API only defines GET and POST for that path. The most honest status?",
          choices: ["500 — the server has no handler for it", "404 — the path may as well not exist", "405 — the method isn't allowed here", "200 — accept it and quietly do nothing"],
          answer: 2, explain: "405 Method Not Allowed means the path exists but that verb doesn't: right door, wrong verb. 404 would lie about the path, 500 would blame your server for the client's mistake, and answering 200 while deleting nothing is the worst of the four — it tells the client a lie it will act on." }
      ]
    }
  ]
});
