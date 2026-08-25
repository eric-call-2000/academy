/* Unit 8 — Back-End Foundations (Node/Express-style, simulated) */
window.CODELAB.addUnit({
  id: "backend",
  title: "Back-End Foundations",
  icon: "🖥️",
  color: "#6c5ce7",
  blurb: "The other half of full-stack — servers, routing, REST APIs and a database.",
  cheat: [
    { h: "The server's whole job", lang: "js", code: "// request in…\n{ method: \"GET\", path: \"/api/todos\", body: null }\n// …response out\n{ status: 200, body: [ /* data */ ] }", note: "Every backend — Express, Django, Rails — is a fancy version of this function." },
    { h: "Status codes to know", lang: "js", code: "200 // OK\n201 // Created (successful POST)\n400 // Bad request (client sent junk)\n404 // Not found\n500 // Server error", note: "2xx success · 4xx the client messed up · 5xx the server messed up." },
    { h: "HTTP methods (verbs)", lang: "js", code: "GET    // read data\nPOST   // create data\nPATCH  // update part of it\nDELETE // remove it" },
    { h: "REST routes for a resource", lang: "js", code: "GET    /api/todos      // list all\nPOST   /api/todos      // create one\nPATCH  /api/todos/7    // update #7\nDELETE /api/todos/7    // delete #7", note: "Nouns in the path, verbs in the method. The /7 part is a route parameter." },
    { h: "How this looks in Express (real Node.js)", lang: "js", code: "app.get(\"/api/todos\", (req, res) => {\n  res.json(todos);\n});\napp.post(\"/api/todos\", (req, res) => {\n  const todo = createTodo(req.body.text);\n  res.status(201).json(todo);\n});", note: "Same ideas, nicer packaging. What you build here transfers 1:1." }
  ],
  lessons: [

    {
      id: "srv-1",
      title: "What a server actually does",
      kind: "js", chip: "SERVER", xp: 15,
      brief: "Strip away the buzzwords and a **web server** is one function: *request in → response out.*\n\nA request says what the client wants: a **method** (`GET`, `POST`…), a **path** (`/api/todos`), maybe a **body** of data. A response carries a **status code** (200 = OK) and a **body**.\n\nWe'll simulate the server as a plain function — the exact mental model behind Express, the most popular Node.js framework (see the unit cheatsheet for the side-by-side).",
      steps: [
        { text: "Write `handleRequest(req)` returning an object with `status: 200`.",
          test: "T.expect(typeof handleRequest === 'function', 'Define function handleRequest(req) { … }');\nvar res = handleRequest({ method: 'GET', path: '/', body: null });\nT.expect(res && typeof res === 'object', 'Return an object.');\nT.eq(res.status, 200, 'The response needs status: 200');" },
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
      id: "srv-2",
      title: "Routing",
      kind: "js", chip: "SERVER", xp: 15,
      brief: "Real servers answer **different paths differently** — that's **routing**. Check `req.path` and branch:\n\n- `/` → `\"Home\"`\n- `/about` → `\"About us\"`\n- anything else → **404** with `\"Not found\"`\n\nThe 404 branch matters: a good API always answers, even when the answer is \"no such page\".",
      steps: [
        { text: "`GET /` returns status 200 with body `\"Home\"`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/', body: null }), { status: 200, body: 'Home' }, 'GET /');" },
        { text: "`GET /about` returns 200 with `\"About us\"`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/about', body: null }), { status: 200, body: 'About us' }, 'GET /about');" },
        { text: "Any other path → `{ status: 404, body: \"Not found\" }`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/pizza', body: null }), { status: 404, body: 'Not found' }, 'GET /pizza should 404');\nT.eq(handleRequest({ method: 'GET', path: '/x/y', body: null }), { status: 404, body: 'Not found' }, 'GET /x/y should 404');" }
      ],
      files: [
        { name: "script.js", content: "function handleRequest(req) {\n  // if req.path === \"/\"        → 200 \"Home\"\n  // if req.path === \"/about\"   → 200 \"About us\"\n  // otherwise                  → 404 \"Not found\"\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/about\", body: null }));\nconsole.log(handleRequest({ method: \"GET\", path: \"/pizza\", body: null }));\n" }
      ],
      hints: [
        "Early returns keep routers readable: `if (req.path === \"/\") return { status: 200, body: \"Home\" };`",
        "The LAST line of the function is the catch-all 404 return."
      ],
      solution: {
        "script.js": "function handleRequest(req) {\n  if (req.path === \"/\") return { status: 200, body: \"Home\" };\n  if (req.path === \"/about\") return { status: 200, body: \"About us\" };\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/about\", body: null }));\nconsole.log(handleRequest({ method: \"GET\", path: \"/pizza\", body: null }));\n"
      }
    },

    {
      id: "srv-3",
      title: "Methods: GET vs POST",
      kind: "js", chip: "SERVER", xp: 15,
      brief: "Same path, different **method**, different meaning:\n\n- `GET /api/pets` → *read* the list\n- `POST /api/pets` → *create* one (the new pet rides in `req.body`)\n\nA successful POST answers **201 Created** and echoes back what was made. Route on **both** `req.method` and `req.path`.",
      steps: [
        { text: "`GET /api/pets` → 200 with the `PETS` array as the body.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/pets', body: null });\nT.eq(res, { status: 200, body: [{ petName: 'Biscuit', kind: 'dog' }, { petName: 'Mochi', kind: 'cat' }] }, 'GET /api/pets should return the PETS array');" },
        { text: "`POST /api/pets` → **201** with `req.body` echoed back.",
          test: "var res = handleRequest({ method: 'POST', path: '/api/pets', body: { petName: 'Ziggy', kind: 'parrot' } });\nT.eq(res, { status: 201, body: { petName: 'Ziggy', kind: 'parrot' } }, 'POST should answer 201 with the sent pet');" },
        { text: "Everything else (wrong method OR wrong path) → 404 `\"Not found\"`.",
          test: "T.eq(handleRequest({ method: 'DELETE', path: '/api/pets', body: null }).status, 404, 'DELETE /api/pets is not a route you defined — 404 it');\nT.eq(handleRequest({ method: 'GET', path: '/api/cars', body: null }).status, 404, 'GET /api/cars → 404');" }
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
      id: "srv-4",
      title: "An in-memory database",
      kind: "js", chip: "SERVER", xp: 15,
      brief: "APIs need somewhere to keep data. Real servers use databases (PostgreSQL, MongoDB…); today we'll build the same four operations — **CRUD**: Create, Read, Update, Delete — over a humble array.\n\nEvery record gets a unique `id` from a counter. This store plugs straight into the next lesson's API.",
      steps: [
        { text: "`createTodo(text)` — push `{ id, text, done: false }` (ids count up from 1) and return the new todo.",
          test: "T.expect(typeof createTodo === 'function', 'Define createTodo(text).');\nvar a = createTodo('learn CRUD');\nvar b = createTodo('build API');\nT.eq(a, { id: 1, text: 'learn CRUD', done: false }, 'First todo');\nT.eq(b.id, 2, 'Ids must increase: second todo gets id 2');" },
        { text: "`listTodos()` — return the whole array.",
          test: "T.expect(typeof listTodos === 'function', 'Define listTodos().');\nT.eq(listTodos().length, 2, 'After two creates, listTodos() should have 2 items');" },
        { text: "`toggleTodo(id)` — flip that todo's `done`; return the todo, or `null` if the id doesn't exist.",
          test: "T.expect(typeof toggleTodo === 'function', 'Define toggleTodo(id).');\nvar t = toggleTodo(1);\nT.expect(t && t.done === true, 'toggleTodo(1) should flip done to true');\nT.expect(toggleTodo(1).done === false, 'Toggling again flips it back');\nT.eq(toggleTodo(999), null, 'Unknown ids return null');" },
        { text: "`removeTodo(id)` — delete it; return `true` if something was removed, else `false`.",
          test: "T.expect(typeof removeTodo === 'function', 'Define removeTodo(id).');\nT.eq(removeTodo(2), true, 'removeTodo(2) should report true');\nT.eq(listTodos().length, 1, 'The list should shrink to 1');\nT.eq(removeTodo(999), false, 'Removing a missing id reports false');" }
      ],
      files: [
        { name: "script.js", content: "let todos = [];\nlet nextId = 1;\n\n// 1) createTodo(text) → { id: nextId++, text, done: false }, push + return it\n\n// 2) listTodos() → todos\n\n// 3) toggleTodo(id) → flip done, return the todo; null if missing\n\n// 4) removeTodo(id) → true if removed, false if not found\n" }
      ],
      hints: [
        "createTodo: build the object, `todos.push(todo);`, `return todo;` — and use `nextId++` for the id.",
        "toggleTodo: `const t = todos.find(t => t.id === id); if (!t) return null; t.done = !t.done; return t;`",
        "removeTodo: check with find (or findIndex), then `todos = todos.filter(t => t.id !== id);` and return whether it existed."
      ],
      solution: {
        "script.js": "let todos = [];\nlet nextId = 1;\n\nfunction createTodo(text) {\n  const todo = { id: nextId++, text: text, done: false };\n  todos.push(todo);\n  return todo;\n}\n\nfunction listTodos() {\n  return todos;\n}\n\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id === id);\n  if (!todo) return null;\n  todo.done = !todo.done;\n  return todo;\n}\n\nfunction removeTodo(id) {\n  const before = todos.length;\n  todos = todos.filter(t => t.id !== id);\n  return todos.length < before;\n}\n"
      }
    },

    {
      id: "srv-5",
      title: "Route parameters & REST",
      kind: "js", chip: "SERVER", xp: 15,
      brief: "REST's last trick: putting **which record** in the path — `DELETE /api/todos/2` means *delete todo #2*. The `2` is a **route parameter** you parse out of the path yourself: split the string, convert to a number.\n\nThe data store from last lesson is pre-written below the router — your job is the three routes.",
      steps: [
        { text: "`GET /api/todos` → 200 with the todo list.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/todos', body: null });\nT.eq(res.status, 200, 'GET /api/todos status');\nT.expect(Array.isArray(res.body), 'Its body should be the todos array');" },
        { text: "`POST /api/todos` with `body: { text }` → **201** with the created todo (it gets an id!).",
          test: "var res = handleRequest({ method: 'POST', path: '/api/todos', body: { text: 'ship it' } });\nT.eq(res.status, 201, 'POST status should be 201');\nT.expect(res.body && res.body.id >= 1 && res.body.text === 'ship it' && res.body.done === false, 'POST should return the createTodo(...) result');\nT.eq(handleRequest({ method: 'GET', path: '/api/todos', body: null }).body.length, 1, 'The todo should be IN the list afterwards');" },
        { text: "`DELETE /api/todos/<id>` — parse the id from the path; 200 `{ ok: true }` when deleted, 404 when no such id.",
          test: "handleRequest({ method: 'POST', path: '/api/todos', body: { text: 'second' } });\nvar del = handleRequest({ method: 'DELETE', path: '/api/todos/1', body: null });\nT.eq(del, { status: 200, body: { ok: true } }, 'DELETE /api/todos/1');\nT.eq(handleRequest({ method: 'GET', path: '/api/todos', body: null }).body.length, 1, 'Todo 1 should be gone from the list');\nT.eq(handleRequest({ method: 'DELETE', path: '/api/todos/999', body: null }).status, 404, 'Deleting a missing id → 404');" },
        { text: "Unknown routes still → 404 `\"Not found\"`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/nope', body: null }), { status: 404, body: 'Not found' }, 'GET /api/nope');" }
      ],
      files: [
        { name: "script.js", content: "function handleRequest(req) {\n  // GET    /api/todos      → 200, listTodos()\n  // POST   /api/todos      → 201, createTodo(req.body.text)\n  // DELETE /api/todos/<id> → 200 { ok: true }  (or 404 if missing)\n  //   hint: req.path.startsWith(\"/api/todos/\") …\n  //         const id = Number(req.path.split(\"/\")[3]);\n  // else → 404 \"Not found\"\n}\n\n/* ---- data store (from last lesson, ready to use) ---- */\nlet todos = [];\nlet nextId = 1;\nfunction createTodo(text) {\n  const todo = { id: nextId++, text: text, done: false };\n  todos.push(todo);\n  return todo;\n}\nfunction listTodos() { return todos; }\nfunction removeTodo(id) {\n  const before = todos.length;\n  todos = todos.filter(t => t.id !== id);\n  return todos.length < before;\n}\n" }
      ],
      hints: [
        "Split gives you the pieces: `\"/api/todos/7\".split(\"/\")` → `[\"\", \"api\", \"todos\", \"7\"]` — index 3 is the id string.",
        "Strings aren't numbers: wrap it — `const id = Number(req.path.split(\"/\")[3]);`",
        "DELETE branch: `if (req.method === \"DELETE\" && req.path.startsWith(\"/api/todos/\")) { … removeTodo(id) ? 200 : 404 … }`"
      ],
      solution: {
        "script.js": "function handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/todos\") {\n    return { status: 200, body: listTodos() };\n  }\n  if (req.method === \"POST\" && req.path === \"/api/todos\") {\n    return { status: 201, body: createTodo(req.body.text) };\n  }\n  if (req.method === \"DELETE\" && req.path.startsWith(\"/api/todos/\")) {\n    const id = Number(req.path.split(\"/\")[3]);\n    if (removeTodo(id)) return { status: 200, body: { ok: true } };\n    return { status: 404, body: \"Not found\" };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\n/* ---- data store (from last lesson, ready to use) ---- */\nlet todos = [];\nlet nextId = 1;\nfunction createTodo(text) {\n  const todo = { id: nextId++, text: text, done: false };\n  todos.push(todo);\n  return todo;\n}\nfunction listTodos() { return todos; }\nfunction removeTodo(id) {\n  const before = todos.length;\n  todos = todos.filter(t => t.id !== id);\n  return todos.length < before;\n}\n"
      }
    },

    {
      id: "srv-quiz",
      title: "Back-end checkpoint quiz",
      kind: "quiz", xp: 10,
      questions: [
        { q: "Which status code means **Created** (the right answer to a successful POST)?",
          choices: ["201", "200", "404", "500"],
          answer: 0, explain: "200 OK is generic success; 201 specifically celebrates a new resource." },
        { q: "A client sends `{ }` with no `text` field to your create-todo route. Best response?",
          choices: ["400 Bad Request", "500 Server Error", "201 Created anyway", "Crash"],
          answer: 0, explain: "4xx = the CLIENT'S mistake. Validate input and answer 400 — never trust incoming data." },
        { q: "In REST, what does `DELETE /api/todos/7` mean?",
          choices: ["Delete the todo whose id is 7", "Delete the first 7 todos", "Delete all todos 7 times", "Return todo 7"],
          answer: 0, explain: "Method = the verb (DELETE), path = the noun (/api/todos) + parameter (7)." },
        { q: "Which method should **read** data without changing anything?",
          choices: ["GET", "POST", "PATCH", "DELETE"],
          answer: 0, explain: "GETs are safe to repeat, cache and prefetch precisely because they don't modify state." },
        { q: "Why do real apps use a database instead of `let todos = []`?",
          choices: ["Server memory vanishes on every restart — databases persist to disk", "Arrays can hold at most 100 items", "Databases are required by law", "JavaScript can't store objects"],
          answer: 0, explain: "In-memory data dies with the process. Databases (PostgreSQL, MongoDB…) survive restarts, crashes and scale-out." },
        { q: "What does this Express route correspond to in your simulator?",
          code: "app.get(\"/api/todos\", (req, res) => {\n  res.json(todos);\n});",
          lang: "js",
          choices: ["The GET /api/todos branch of handleRequest", "The POST branch", "The 404 catch-all", "A database migration"],
          answer: 0, explain: "Express just gives each method+path branch its own function. Your router IS the concept." },
        { q: "The front-end and back-end talk to each other using…",
          choices: ["HTTP requests carrying JSON", "Shared variables", "CSS", "The DOM"],
          answer: 0, explain: "fetch() on the client ↔ routes on the server, JSON in both directions. You've now built both sides!" }
      ]
    },

    {
      id: "srv-project",
      title: "Project: Todos API",
      kind: "js", chip: "SERVER", xp: 40, project: true,
      brief: "Build the **complete REST API** a todo app needs — list, create (with validation!), toggle, delete, and proper status codes throughout. This is a genuine backend take-home task, minus only the network plumbing.\n\nRules of the road:\n\n- `POST` with a missing/empty `text` → **400** `{ error: \"text is required\" }`\n- `PATCH /api/todos/<id>` toggles `done`\n- unknown id → **404**, unknown route → **404**",
      steps: [
        { text: "`GET /api/todos` → 200 + the list.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/todos', body: null });\nT.eq(res.status, 200, 'GET status');\nT.eq(res.body, [], 'Starts as an empty array');" },
        { text: "`POST /api/todos` `{ text }` → 201 + the new todo `{ id, text, done: false }`.",
          test: "var res = handleRequest({ method: 'POST', path: '/api/todos', body: { text: 'write API' } });\nT.eq(res.status, 201, 'POST status');\nT.eq(res.body, { id: 1, text: 'write API', done: false }, 'POST body');\nhandleRequest({ method: 'POST', path: '/api/todos', body: { text: 'test API' } });\nT.eq(handleRequest({ method: 'GET', path: '/api/todos', body: null }).body.length, 2, 'Both todos are in the list');" },
        { text: "**Validation**: POST with no usable `text` → 400 `{ error: \"text is required\" }` (and nothing gets created).",
          test: "var res = handleRequest({ method: 'POST', path: '/api/todos', body: {} });\nT.eq(res, { status: 400, body: { error: 'text is required' } }, 'Missing text');\nvar res2 = handleRequest({ method: 'POST', path: '/api/todos', body: null });\nT.eq(res2.status, 400, 'null body should also 400 (check req.body BEFORE reading .text!)');\nT.eq(handleRequest({ method: 'GET', path: '/api/todos', body: null }).body.length, 2, 'Nothing was created by the bad requests');" },
        { text: "`PATCH /api/todos/<id>` → toggles `done`, returns 200 + the todo; missing id → 404.",
          test: "var res = handleRequest({ method: 'PATCH', path: '/api/todos/1', body: null });\nT.eq(res.status, 200, 'PATCH status');\nT.expect(res.body && res.body.done === true, 'PATCH should flip done to true');\nT.eq(handleRequest({ method: 'PATCH', path: '/api/todos/42', body: null }).status, 404, 'PATCH on a missing id → 404');" },
        { text: "`DELETE /api/todos/<id>` → 200 `{ ok: true }`; missing id → 404.",
          test: "T.eq(handleRequest({ method: 'DELETE', path: '/api/todos/2', body: null }), { status: 200, body: { ok: true } }, 'DELETE /api/todos/2');\nT.eq(handleRequest({ method: 'GET', path: '/api/todos', body: null }).body.length, 1, 'It really is gone');\nT.eq(handleRequest({ method: 'DELETE', path: '/api/todos/2', body: null }).status, 404, 'Deleting it twice → 404');" },
        { text: "Everything else → 404 `\"Not found\"`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/users', body: null }), { status: 404, body: 'Not found' }, 'Unknown route');\nT.eq(handleRequest({ method: 'PUT', path: '/api/todos', body: null }).status, 404, 'Unknown method on a known path');" }
      ],
      files: [
        { name: "script.js", content: "// The full Todos API. request = { method, path, body } → { status, body }\n\nlet todos = [];\nlet nextId = 1;\n\nfunction handleRequest(req) {\n  // GET    /api/todos\n  // POST   /api/todos   (400 { error: \"text is required\" } if no text!)\n  // PATCH  /api/todos/<id>  → toggle done\n  // DELETE /api/todos/<id>\n  // else 404 \"Not found\"\n}\n" }
      ],
      hints: [
        "Validate defensively: `if (!req.body || typeof req.body.text !== \"string\" || req.body.text.trim() === \"\") return { status: 400, body: { error: \"text is required\" } };`",
        "Both PATCH and DELETE start the same way: check `startsWith(\"/api/todos/\")`, then `const id = Number(req.path.split(\"/\")[3]);` and `todos.find(t => t.id === id)`.",
        "Keep each route as an early-return `if` block, with `return { status: 404, body: \"Not found\" };` as the very last line."
      ],
      solution: {
        "script.js": "// The full Todos API. request = { method, path, body } → { status, body }\n\nlet todos = [];\nlet nextId = 1;\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/todos\") {\n    return { status: 200, body: todos };\n  }\n\n  if (req.method === \"POST\" && req.path === \"/api/todos\") {\n    if (!req.body || typeof req.body.text !== \"string\" || req.body.text.trim() === \"\") {\n      return { status: 400, body: { error: \"text is required\" } };\n    }\n    const todo = { id: nextId++, text: req.body.text, done: false };\n    todos.push(todo);\n    return { status: 201, body: todo };\n  }\n\n  if (req.method === \"PATCH\" && req.path.startsWith(\"/api/todos/\")) {\n    const id = Number(req.path.split(\"/\")[3]);\n    const todo = todos.find(t => t.id === id);\n    if (!todo) return { status: 404, body: \"Not found\" };\n    todo.done = !todo.done;\n    return { status: 200, body: todo };\n  }\n\n  if (req.method === \"DELETE\" && req.path.startsWith(\"/api/todos/\")) {\n    const id = Number(req.path.split(\"/\")[3]);\n    const before = todos.length;\n    todos = todos.filter(t => t.id !== id);\n    if (todos.length === before) return { status: 404, body: \"Not found\" };\n    return { status: 200, body: { ok: true } };\n  }\n\n  return { status: 404, body: \"Not found\" };\n}\n"
      }
    }
  ]
});
