/* Back-End Foundations — Unit 2: The data layer */
window.CODELAB.addUnit("srv", {
  id: "srv-u2",
  title: "The data layer",
  icon: "🗄️",
  blurb: "Your API gets a memory: an in-memory store with counter ids, route parameters, and the full REST update/delete playbook.",
  cheat: [
    { h: "CRUD ↔ HTTP", lang: "js", code: "POST   /api/todos     // Create\nGET    /api/todos     // Read (the list)\nGET    /api/todos/7   // Read (one record)\nPATCH  /api/todos/7   // Update (merge fields)\nPUT    /api/todos/7   // Update (replace record)\nDELETE /api/todos/7   // Delete", note: "Four operations, one resource, zero surprises — that is REST." },
    { h: "An in-memory store", lang: "js", code: "let todos = [];\nlet nextId = 1;\n\nfunction createTodo(text) {\n  const todo = { id: nextId++, text: text, done: false };\n  todos.push(todo);\n  return todo;\n}", note: "Counter ids beat random ones: predictable, sortable, testable. Real apps swap the array for a database — the routes stay identical." },
    { h: "Parsing a route parameter", lang: "js", code: "\"/api/todos/7\".split(\"/\")\n// → [\"\", \"api\", \"todos\", \"7\"]\n//      0    1       2      3\nconst idNum = Number(path.split(\"/\")[3]);\nNumber.isNaN(idNum) // true for \"/api/todos/abc\"", note: "The leading slash puts an empty string at index 0 — the id lands at index 3." },
    { h: "PUT vs PATCH", lang: "js", code: "// record: { id: 2, userName: \"bo\", bio: \"old\", theme: \"light\" }\n// PATCH { bio: \"new\" } → merge: theme survives\n// PUT   { bio: \"new\" } → replace: userName & theme are GONE", note: "PATCH edits the fields you send; PUT swaps in a whole new record (only the id stays)." },
    { h: "How Express does route params", lang: "js", code: "app.patch(\"/api/todos/:id\", (req, res) => {\n  const idNum = Number(req.params.id);\n  const todo = toggleTodo(idNum);\n  if (!todo) return res.status(404).send(\"Not found\");\n  res.json(todo);\n});", note: "Express parses :id into req.params for you — you are about to build the machinery it hides." }
  ],
  lessons: [

    {
      id: "srv-u2-1",
      title: "An in-memory database",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Every API needs a memory. Real servers lean on databases — PostgreSQL, MongoDB — but the four moves are always the same: **CRUD**. Create, Read, Update, Delete. Today you build all four over a humble array.\n\nTwo house rules:\n\n- ids come from a **counter** (`nextId++`) — predictable and testable, unlike random ids\n- `todos` is declared with `let`, because deleting will *reassign* it via `filter`\n\nRequests are still `{ method, path, body }`, but the router stays out of this lesson — pure data layer. You will bolt these exact helpers onto real routes in lesson 3.",
      steps: [
        { text: "`createTodo(text)` — push `{ id, text, done: false }` (ids count up from 1) and return the new todo.",
          test: "T.expect(typeof createTodo === 'function', 'Define createTodo(text).');\nvar a = createTodo('wire the store');\nvar b = createTodo('ship the API');\nT.eq(a, { id: 1, text: 'wire the store', done: false }, 'The first todo should be exactly { id: 1, text, done: false } — ids start at 1');\nT.eq(b, { id: 2, text: 'ship the API', done: false }, 'The second create should get id 2 — use nextId++ so the counter moves');" },
        { text: "`listTodos()` — return the whole array.",
          test: "T.expect(typeof listTodos === 'function', 'Define listTodos().');\nT.eq(listTodos(), [{ id: 1, text: 'wire the store', done: false }, { id: 2, text: 'ship the API', done: false }], 'listTodos() should return the array with both todos, in creation order');" },
        { text: "`toggleTodo(id)` — flip that todo's `done`; return the todo, or `null` if the id doesn't exist.",
          test: "T.expect(typeof toggleTodo === 'function', 'Define toggleTodo(id).');\nT.eq(toggleTodo(1), { id: 1, text: 'wire the store', done: true }, 'toggleTodo(1) should flip done to true and return the whole todo');\nT.eq(toggleTodo(1).done, false, 'Toggling again flips it back — use done = !done, not done = true');\nT.eq(toggleTodo(999), null, 'Unknown ids return null (find gave you undefined — translate it)');" },
        { text: "`removeTodo(id)` — delete it; return `true` if something was removed, else `false`.",
          test: "T.expect(typeof removeTodo === 'function', 'Define removeTodo(id).');\nT.eq(removeTodo(2), true, 'removeTodo(2) should report true — something really was deleted');\nT.eq(listTodos(), [{ id: 1, text: 'wire the store', done: false }], 'Only todo 1 should remain (its done is false again after the two toggles)');\nT.eq(removeTodo(999), false, 'Removing a missing id reports false');" }
      ],
      files: [
        { name: "script.js", content: "// The data layer: CRUD over an array. No router yet — pure storage.\n\nlet todos = [];\nlet nextId = 1;\n\n// 1) createTodo(text) → { id: nextId++, text, done: false }, push + return it\n\n// 2) listTodos() → the todos array\n\n// 3) toggleTodo(id) → flip that todo's done, return the todo; null if missing\n\n// 4) removeTodo(id) → true if something was removed, false if not found\n" }
      ],
      hints: [
        "createTodo: build the object with `nextId++` for the id, `todos.push(todo);`, then `return todo;`.",
        "toggleTodo: `const todo = todos.find(t => t.id === id); if (!todo) return null; todo.done = !todo.done; return todo;`",
        "removeTodo: remember the old `todos.length`, reassign with `todos = todos.filter(t => t.id !== id);`, then compare lengths to report whether anything vanished."
      ],
      solution: {
        "script.js": "// The data layer: CRUD over an array. No router yet — pure storage.\n\nlet todos = [];\nlet nextId = 1;\n\nfunction createTodo(text) {\n  const todo = { id: nextId++, text: text, done: false };\n  todos.push(todo);\n  return todo;\n}\n\nfunction listTodos() {\n  return todos;\n}\n\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id === id);\n  if (!todo) return null;\n  todo.done = !todo.done;\n  return todo;\n}\n\nfunction removeTodo(id) {\n  const before = todos.length;\n  todos = todos.filter(t => t.id !== id);\n  return todos.length < before;\n}\n"
      }
    },

    {
      id: "srv-u2-2",
      title: "Route parameters",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "`GET /api/todos/7` — that `7` is a **route parameter**: *which record* you want, riding inside the path. Your server digs it out in three moves:\n\n1. `split(\"/\")` the path — the id string sits at **index 3** (the leading `/` puts `\"\"` at index 0)\n2. `Number(...)` it — paths carry strings, your store uses numbers\n3. junk like `\"abc\"` becomes `NaN` — catch it with `Number.isNaN` and return `null`\n\nWrap all three into a `parsePath` helper, then use it to route detail requests. Requests stay `{ method, path, body }` — query strings join the party in Unit 3.",
      example: { lang: "js", code: "\"/api/todos/7\".split(\"/\")\n// → [\"\", \"api\", \"todos\", \"7\"]\n//      0    1       2      3   ← the id lives here" },
      steps: [
        { text: "Write `parsePath(path)` — return the id as a **number**, or `null` when it isn't one.",
          test: "T.expect(typeof parsePath === 'function', 'Define parsePath(path).');\nT.eq(parsePath('/api/todos/7'), 7, 'parsePath(\"/api/todos/7\") should return the NUMBER 7 — split on \"/\", take index 3, wrap in Number()');\nT.eq(parsePath('/api/todos/42'), 42, 'parsePath(\"/api/todos/42\") → 42');\nT.expect(parsePath('/api/todos/7') !== '7', 'Return a number, not the string \"7\" — Number(...) does the conversion');\nT.eq(parsePath('/api/todos/abc'), null, '\"abc\" is not an id: Number gives NaN — detect it with Number.isNaN and return null');" },
        { text: "`GET /api/todos` → 200 with the full `TODOS` array.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/todos', body: null });\nT.eq(res, { status: 200, body: [{ id: 1, text: 'buy oat milk', done: false }, { id: 2, text: 'walk the dog', done: true }, { id: 3, text: 'learn route params', done: false }] }, 'GET /api/todos should answer 200 with the whole TODOS array');" },
        { text: "`GET /api/todos/<id>` → 200 with that one todo; unknown ids → 404 `\"Not found\"`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/todos/2', body: null }), { status: 200, body: { id: 2, text: 'walk the dog', done: true } }, 'GET /api/todos/2 should answer 200 with todo #2 only');\nT.eq(handleRequest({ method: 'GET', path: '/api/todos/999', body: null }), { status: 404, body: 'Not found' }, 'No todo has id 999 — answer 404 \"Not found\"');" },
        { text: "Junk ids and unknown routes both fall to 404.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/todos/abc', body: null }), { status: 404, body: 'Not found' }, 'GET /api/todos/abc — parsePath returns null, nothing matches, 404');\nT.eq(handleRequest({ method: 'GET', path: '/api/nope', body: null }), { status: 404, body: 'Not found' }, 'Unknown routes still fall through to the catch-all 404');" }
      ],
      files: [
        { name: "script.js", content: "const TODOS = [\n  { id: 1, text: \"buy oat milk\", done: false },\n  { id: 2, text: \"walk the dog\", done: true },\n  { id: 3, text: \"learn route params\", done: false }\n];\n\n// 1) parsePath(path) → the numeric id at the end, or null\n//    \"/api/todos/7\".split(\"/\") → [\"\", \"api\", \"todos\", \"7\"]\n//    Number(\"7\") → 7 · Number(\"abc\") → NaN (check with Number.isNaN)\n\nfunction handleRequest(req) {\n  // GET /api/todos       → 200, TODOS\n  // GET /api/todos/<id>  → 200 + that todo, or 404 \"Not found\"\n  //    (req.path.startsWith(\"/api/todos/\") + your parsePath)\n  // else                 → 404 \"Not found\"\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/todos/2\", body: null }));\n" }
      ],
      hints: [
        "`\"/api/todos/7\".split(\"/\")` → `[\"\", \"api\", \"todos\", \"7\"]` — grab index `[3]`, then `Number(...)` it.",
        "parsePath in two lines: `const idNum = Number(path.split(\"/\")[3]); return Number.isNaN(idNum) ? null : idNum;`",
        "Detail branch: `const idNum = parsePath(req.path); const todo = TODOS.find(t => t.id === idNum);` — a null id simply finds nothing, so ONE 404 return covers both bad ids and missing todos."
      ],
      solution: {
        "script.js": "const TODOS = [\n  { id: 1, text: \"buy oat milk\", done: false },\n  { id: 2, text: \"walk the dog\", done: true },\n  { id: 3, text: \"learn route params\", done: false }\n];\n\nfunction parsePath(path) {\n  const idNum = Number(path.split(\"/\")[3]);\n  return Number.isNaN(idNum) ? null : idNum;\n}\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/todos\") {\n    return { status: 200, body: TODOS };\n  }\n  if (req.method === \"GET\" && req.path.startsWith(\"/api/todos/\")) {\n    const idNum = parsePath(req.path);\n    const todo = TODOS.find(t => t.id === idNum);\n    if (!todo) return { status: 404, body: \"Not found\" };\n    return { status: 200, body: todo };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/todos/2\", body: null }));\n"
      }
    },

    {
      id: "srv-u2-3",
      title: "The full REST resource",
      kind: "js", chip: "SERVER", xp: 15, mins: 14,
      brief: "Time to assemble. Your store from lesson 1 and `parsePath` from lesson 2 are pre-written below the router — your job is wiring the **full REST resource**:\n\n- `GET /api/todos` → 200, the list\n- `POST /api/todos` → **201**, the created todo\n- `PATCH /api/todos/<id>` → toggle `done` (404 if missing)\n- `DELETE /api/todos/<id>` → `{ ok: true }` (404 if missing)\n\nNotice what the helpers hand back — `toggleTodo` gives `null` for a missing id, `removeTodo` gives `false` — and translate each into a status code. That translation *is* the router's whole job. Express does exactly this, one callback per branch.",
      steps: [
        { text: "`GET /api/todos` → 200 with the (currently empty) list.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/todos', body: null });\nT.eq(res, { status: 200, body: [] }, 'GET /api/todos should answer 200 with the empty array — the store starts blank');" },
        { text: "`POST /api/todos` with `body: { text }` → **201** with the created todo.",
          test: "var res = handleRequest({ method: 'POST', path: '/api/todos', body: { text: 'learn REST' } });\nT.eq(res, { status: 201, body: { id: 1, text: 'learn REST', done: false } }, 'POST /api/todos should answer 201 Created with the new todo — yours answered status ' + (res && res.status));\nvar res2 = handleRequest({ method: 'POST', path: '/api/todos', body: { text: 'take a break' } });\nT.expect(res2 && res2.body && res2.body.id === 2, 'The second POST should create id 2 — pass req.body.text to createTodo');\nT.eq(handleRequest({ method: 'GET', path: '/api/todos', body: null }).body, [{ id: 1, text: 'learn REST', done: false }, { id: 2, text: 'take a break', done: false }], 'Both todos should be IN the list afterwards');" },
        { text: "`PATCH /api/todos/<id>` → toggles `done`, answers 200 with the todo; missing ids → 404.",
          test: "var res = handleRequest({ method: 'PATCH', path: '/api/todos/1', body: null });\nT.eq(res, { status: 200, body: { id: 1, text: 'learn REST', done: true } }, 'PATCH /api/todos/1 should toggle done to true and answer 200');\nT.eq(handleRequest({ method: 'PATCH', path: '/api/todos/999', body: null }), { status: 404, body: 'Not found' }, 'PATCH on a missing id → 404 \"Not found\" — toggleTodo returned null, translate it');" },
        { text: "`DELETE /api/todos/<id>` → 200 `{ ok: true }`; missing ids and unknown routes → 404.",
          test: "T.eq(handleRequest({ method: 'DELETE', path: '/api/todos/2', body: null }), { status: 200, body: { ok: true } }, 'DELETE /api/todos/2 should answer 200 { ok: true }');\nT.eq(handleRequest({ method: 'GET', path: '/api/todos', body: null }).body, [{ id: 1, text: 'learn REST', done: true }], 'Todo 2 should really be gone — and todo 1 still done from the PATCH');\nT.eq(handleRequest({ method: 'DELETE', path: '/api/todos/2', body: null }), { status: 404, body: 'Not found' }, 'Deleting the same id twice → 404 the second time');\nT.eq(handleRequest({ method: 'GET', path: '/api/nope', body: null }), { status: 404, body: 'Not found' }, 'Unknown routes still fall through to 404');" }
      ],
      files: [
        { name: "script.js", content: "function handleRequest(req) {\n  // GET    /api/todos       → 200, listTodos()\n  // POST   /api/todos       → 201, createTodo(req.body.text)\n  // PATCH  /api/todos/<id>  → 200 + toggled todo, or 404 \"Not found\"\n  // DELETE /api/todos/<id>  → 200 { ok: true }, or 404 \"Not found\"\n  // else                    → 404 \"Not found\"\n}\n\n/* ---- data layer (yours from lessons 1 & 2, ready to use) ---- */\nlet todos = [];\nlet nextId = 1;\nfunction createTodo(text) {\n  const todo = { id: nextId++, text: text, done: false };\n  todos.push(todo);\n  return todo;\n}\nfunction listTodos() { return todos; }\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id === id);\n  if (!todo) return null;\n  todo.done = !todo.done;\n  return todo;\n}\nfunction removeTodo(id) {\n  const before = todos.length;\n  todos = todos.filter(t => t.id !== id);\n  return todos.length < before;\n}\nfunction parsePath(path) {\n  const idNum = Number(path.split(\"/\")[3]);\n  return Number.isNaN(idNum) ? null : idNum;\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/todos\", body: null }));\n" }
      ],
      hints: [
        "Each route is an early-return `if`: match `req.method` AND the path shape, call the store, translate the result.",
        "PATCH branch: `const todo = toggleTodo(parsePath(req.path)); if (!todo) return { status: 404, body: \"Not found\" }; return { status: 200, body: todo };`",
        "DELETE branch returns a boolean from removeTodo: `return removeTodo(parsePath(req.path)) ? { status: 200, body: { ok: true } } : { status: 404, body: \"Not found\" };`"
      ],
      solution: {
        "script.js": "function handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/todos\") {\n    return { status: 200, body: listTodos() };\n  }\n  if (req.method === \"POST\" && req.path === \"/api/todos\") {\n    return { status: 201, body: createTodo(req.body.text) };\n  }\n  if (req.method === \"PATCH\" && req.path.startsWith(\"/api/todos/\")) {\n    const todo = toggleTodo(parsePath(req.path));\n    if (!todo) return { status: 404, body: \"Not found\" };\n    return { status: 200, body: todo };\n  }\n  if (req.method === \"DELETE\" && req.path.startsWith(\"/api/todos/\")) {\n    if (removeTodo(parsePath(req.path))) return { status: 200, body: { ok: true } };\n    return { status: 404, body: \"Not found\" };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\n/* ---- data layer (yours from lessons 1 & 2, ready to use) ---- */\nlet todos = [];\nlet nextId = 1;\nfunction createTodo(text) {\n  const todo = { id: nextId++, text: text, done: false };\n  todos.push(todo);\n  return todo;\n}\nfunction listTodos() { return todos; }\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id === id);\n  if (!todo) return null;\n  todo.done = !todo.done;\n  return todo;\n}\nfunction removeTodo(id) {\n  const before = todos.length;\n  todos = todos.filter(t => t.id !== id);\n  return todos.length < before;\n}\nfunction parsePath(path) {\n  const idNum = Number(path.split(\"/\")[3]);\n  return Number.isNaN(idNum) ? null : idNum;\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/todos\", body: null }));\n"
      }
    },

    {
      id: "srv-u2-4",
      title: "PUT vs PATCH",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Two ways to update, with genuinely different meanings:\n\n- **PATCH** = *merge*: change the fields I sent, keep the rest\n- **PUT** = *replace*: the record becomes exactly what I sent (plus its `id`) — fields you leave out are **deleted**\n\nSend `{ bio: \"new\" }` to a profile that has a `theme`: PATCH keeps the theme, PUT erases it. This difference bites real teams — a client PUTs a partial object and quietly wipes half a record.\n\nImplement both against a profiles store. Before you run each step, hand-trace the object: which keys should survive?",
      example: { lang: "js", code: "// before: { id: 2, userName: \"bo\", bio: \"old\", theme: \"light\" }\n// PATCH { bio: \"new\" } → { id: 2, userName: \"bo\", bio: \"new\", theme: \"light\" }\n// PUT   { bio: \"new\" } → { id: 2, bio: \"new\" }   // userName & theme: gone" },
      steps: [
        { text: "`GET /api/profiles/<id>` → 200 with the profile; missing ids → 404.",
          test: "T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');\nvar res = handleRequest({ method: 'GET', path: '/api/profiles/1', body: null });\nT.eq(res, { status: 200, body: { id: 1, userName: 'ada', bio: 'First programmer', theme: 'dark' } }, 'GET /api/profiles/1 should answer 200 with profile #1');\nT.eq(handleRequest({ method: 'GET', path: '/api/profiles/999', body: null }), { status: 404, body: 'Not found' }, 'GET on a missing id → 404 \"Not found\"');" },
        { text: "`PATCH /api/profiles/<id>` **merges** `req.body` into the record → 200 with the result.",
          test: "var res = handleRequest({ method: 'PATCH', path: '/api/profiles/2', body: { bio: 'Loves dogs' } });\nT.eq(res, { status: 200, body: { id: 2, userName: 'bo', bio: 'Loves dogs', theme: 'light' } }, 'PATCH merges: bio changes, userName and theme SURVIVE — Object.assign(found, req.body)');\nT.eq(handleRequest({ method: 'GET', path: '/api/profiles/2', body: null }).body.theme, 'light', 'After the PATCH, the untouched theme field must still be on the stored record');" },
        { text: "`PUT /api/profiles/<id>` **replaces** the record with `{ id, ...req.body }` → 200 with the result.",
          test: "var res = handleRequest({ method: 'PUT', path: '/api/profiles/2', body: { userName: 'bo', bio: 'Reformed cat person' } });\nT.eq(res, { status: 200, body: { id: 2, userName: 'bo', bio: 'Reformed cat person' } }, 'PUT replaces: the record is exactly id + the sent fields — theme should be GONE');\nT.eq(handleRequest({ method: 'GET', path: '/api/profiles/2', body: null }), { status: 200, body: { id: 2, userName: 'bo', bio: 'Reformed cat person' } }, 'GET after PUT: the stored record has no theme key anywhere');" },
        { text: "Both update methods answer 404 for missing ids — and never invent a record.",
          test: "T.eq(handleRequest({ method: 'PUT', path: '/api/profiles/999', body: { userName: 'ghost' } }).status, 404, 'PUT on a missing id → 404 (no upsert — nothing gets created)');\nT.eq(handleRequest({ method: 'PATCH', path: '/api/profiles/999', body: { bio: 'x' } }).status, 404, 'PATCH on a missing id → 404');\nT.eq(handleRequest({ method: 'PATCH', path: '/api/profiles/1', body: { theme: 'solar' } }), { status: 200, body: { id: 1, userName: 'ada', bio: 'First programmer', theme: 'solar' } }, 'Profile 1 sat untouched all along — one PATCH flips just its theme');" }
      ],
      files: [
        { name: "script.js", content: "let profiles = [\n  { id: 1, userName: \"ada\", bio: \"First programmer\", theme: \"dark\" },\n  { id: 2, userName: \"bo\", bio: \"Loves cats\", theme: \"light\" }\n];\n\nfunction parsePath(path) {\n  const idNum = Number(path.split(\"/\")[3]);\n  return Number.isNaN(idNum) ? null : idNum;\n}\n\nfunction handleRequest(req) {\n  // GET   /api/profiles/<id> → 200 + the profile, or 404 \"Not found\"\n  // PATCH /api/profiles/<id> → MERGE req.body into it   (Object.assign)\n  // PUT   /api/profiles/<id> → REPLACE it with { id, ...req.body }\n  // both updates: 200 + the updated record · missing id → 404 \"Not found\"\n  // else → 404 \"Not found\"\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/profiles/1\", body: null }));\n" }
      ],
      hints: [
        "All three branches open the same way: `const idNum = parsePath(req.path);` then find the profile (PUT wants `findIndex` instead).",
        "PATCH is one line once found: `Object.assign(found, req.body);` — then `return { status: 200, body: found };`",
        "PUT: `const i = profiles.findIndex(p => p.id === idNum); if (i === -1) return { status: 404, body: \"Not found\" }; profiles[i] = { id: idNum, ...req.body };` — building a FRESH object is what makes missing fields disappear."
      ],
      solution: {
        "script.js": "let profiles = [\n  { id: 1, userName: \"ada\", bio: \"First programmer\", theme: \"dark\" },\n  { id: 2, userName: \"bo\", bio: \"Loves cats\", theme: \"light\" }\n];\n\nfunction parsePath(path) {\n  const idNum = Number(path.split(\"/\")[3]);\n  return Number.isNaN(idNum) ? null : idNum;\n}\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path.startsWith(\"/api/profiles/\")) {\n    const idNum = parsePath(req.path);\n    const found = profiles.find(p => p.id === idNum);\n    if (!found) return { status: 404, body: \"Not found\" };\n    return { status: 200, body: found };\n  }\n  if (req.method === \"PATCH\" && req.path.startsWith(\"/api/profiles/\")) {\n    const idNum = parsePath(req.path);\n    const found = profiles.find(p => p.id === idNum);\n    if (!found) return { status: 404, body: \"Not found\" };\n    Object.assign(found, req.body);\n    return { status: 200, body: found };\n  }\n  if (req.method === \"PUT\" && req.path.startsWith(\"/api/profiles/\")) {\n    const idNum = parsePath(req.path);\n    const i = profiles.findIndex(p => p.id === idNum);\n    if (i === -1) return { status: 404, body: \"Not found\" };\n    profiles[i] = { id: idNum, ...req.body };\n    return { status: 200, body: profiles[i] };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/profiles/1\", body: null }));\n"
      }
    },

    {
      id: "srv-quiz-2",
      title: "Unit 2 quiz: Data & REST",
      kind: "quiz", xp: 10,
      brief: "The data layer: CRUD, route parameters, PUT vs PATCH. 80% to pass.",
      questions: [
        { q: "Your API stores records in `let todos = []`. What happens to them when the server process restarts?",
          choices: ["Node writes them to disk automatically", "The browser keeps a backup copy of them", "They vanish — the array lived in RAM", "They move into localStorage instead"],
          answer: 2, explain: "In-memory data dies with the process: an array lives in RAM, so restart = blank slate. Node writes nothing to disk on its own, and `localStorage` is a browser feature your server can't touch. Real backends add PostgreSQL/MongoDB for durability — the routes stay the same, only the store changes." },
        { q: "Which method + path pair means **update part of record #5**?",
          choices: ["PATCH /api/todos/5", "PUT /api/todos", "POST /api/todos/5", "GET /api/todos/5"],
          answer: 0, explain: "Verb = PATCH (partial update), noun + route parameter = /api/todos/5. PUT /api/todos has no id, POST creates on the collection, GET only reads." },
        { q: "What sits at index 3?",
          code: "\"/api/todos/7\".split(\"/\")",
          lang: "js",
          choices: ["\"api\"", "\"todos\"", "undefined", "\"7\""],
          answer: 3, explain: "The leading slash makes element 0 the empty string \"\", shifting everything one slot right: [\"\", \"api\", \"todos\", \"7\"]." },
        { q: "The real difference between PUT and PATCH?",
          choices: ["PUT only ever creates brand-new records", "PUT replaces the record; PATCH merges fields", "PATCH replaces the record; PUT merges fields", "They are the same verb with two spellings"],
          answer: 1, explain: "PUT **replaces** the whole record — fields missing from the body are deleted. PATCH **merges**: it only touches the fields you actually send. They are not two spellings of one verb, and neither is the create verb (that's POST). Mixing PUT and PATCH up silently erases data." },
        { q: "`Number(\"abc\")` evaluates to…",
          choices: ["0", "null", "NaN", "A TypeError"],
          answer: 2, explain: "`Number` never throws and never quietly hands back 0 or null — junk becomes `NaN`. And since `NaN !== NaN`, you must detect it with `Number.isNaN(...)`, which is exactly why parsePath converts a NaN id into a friendly null." },
        { q: "A client sends `PATCH /api/todos/999` but no todo has id 999. Best status code?",
          choices: ["200 with body null", "400 Bad Request", "500 Server Error", "404 Not Found"],
          answer: 3, explain: "The route exists but the RESOURCE does not — 404 is about the thing, not just the path. 400 means malformed input; 500 means the server itself broke." }
      ]
    }
  ]
});
