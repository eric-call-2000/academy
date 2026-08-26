/* Back-End Foundations — Unit 6: Validation & errors */
window.CODELAB.addUnit("srv", {
  id: "srv-u6",
  title: "Validation & errors",
  icon: "🛡️",
  blurb: "Bulletproof your API: validate every body, answer failures with one clean envelope, survive crashes, and paginate big lists.",
  cheat: [
    { h: "Validate before you trust", lang: "js", code: "const problems = [];\nif (!body.userName) problems.push(\"userName is required\");\nif (!body.password || body.password.length < 8)\n  problems.push(\"password must be at least 8 characters\");\n// problems.length === 0 → proceed, else → 400", note: "Collect EVERY problem, not just the first — the client fixes the whole form in one round trip." },
    { h: "The error envelope", lang: "js", code: "{ status: 404, body: {\n  error: { code: \"not_found\", message: \"No gadget with id 5\" }\n} }", note: "One shape for every failure: code for machines to branch on, message for humans to read." },
    { h: "400 vs 500 (whose fault?)", lang: "js", code: "400 // client sent junk  → validate + envelope\n404 // no such thing     → envelope names what's missing\n500 // YOUR code threw   → catch + a GENERIC message", note: "Never leak stack traces in a 500 — \"Something broke\" is all the client gets." },
    { h: "Never crash: wrap the handler", lang: "js", code: "function safeHandler(handler) {\n  return function (req) {\n    try { return handler(req); }\n    catch (err) {\n      return { status: 500, body: { error: {\n        code: \"internal\", message: \"Something broke\" } } };\n    }\n  };\n}", note: "One bad request must never take the process down for everyone else." },
    { h: "Pagination math", lang: "js", code: "const pages = Math.ceil(total / perPage);\nconst start = (page - 1) * perPage;\nconst items = all.slice(start, start + perPage);\n// body: { items, total, page, pages }", note: "slice copies — the store is never mutated, and past-the-end just yields []." },
    { h: "How Express does it (real Node.js)", lang: "js", code: "app.use((err, req, res, next) => {\n  res.status(500).json({\n    error: { code: \"internal\", message: \"Something broke\" }\n  });\n});", note: "A thrown error skips straight to this error middleware — your safeHandler is the same idea, hand-rolled." }
  ],
  lessons: [

    {
      id: "srv-u6-1",
      title: "Validate the body",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Rule zero of back-end work: **never trust `req.body`.** Clients send garbage — missing fields, 3-character passwords, emails that aren't emails — and your API must catch all of it *before* touching the database.\n\nThe pro pattern is a **validator**: a function that inspects a body and returns an **array of problem strings**. Empty array = all clear. Non-empty = exactly the 400 message the client needs.\n\nBuild `validateSignup(body)` with three rules, checked in this order:\n\n1. `userName` is required\n2. `password` must be at least 8 characters\n3. `userEmail` must contain `\"@\"`",
      steps: [
        { text: "Write `validateSignup(body)` returning an array of problem strings. Rule one: no `body.userName` → push `\"userName is required\"`. A fully valid body returns `[]`.",
          test: "T.expect(typeof validateSignup === 'function', 'Define validateSignup(body).');\nT.eq(validateSignup({ userName: 'ada', password: 'mainframe', userEmail: 'ada@calc.io' }), [], 'A valid signup should return an EMPTY array — zero problems');\nT.eq(validateSignup({ password: 'mainframe', userEmail: 'ada@calc.io' }), ['userName is required'], 'Missing userName → exactly [\"userName is required\"]');" },
        { text: "Rule two: no `password` OR shorter than 8 characters → push `\"password must be at least 8 characters\"`. Rule three: no `userEmail` OR no `\"@\"` in it → push `\"userEmail must contain @\"`.",
          test: "T.eq(validateSignup({ userName: 'bo', password: 'hunter2', userEmail: 'bo@sea.org' }), ['password must be at least 8 characters'], '\"hunter2\" is only 7 characters — push the exact message');\nT.eq(validateSignup({ userName: 'cy', password: 'longenough', userEmail: 'cy.mail.net' }), ['userEmail must contain @'], 'No @ in the email → exactly [\"userEmail must contain @\"]');" },
        { text: "Problems stack in rule order (userName, then password, then userEmail). Log the problems of an empty signup to see all three at once.",
          test: "T.eq(validateSignup({}), ['userName is required', 'password must be at least 8 characters', 'userEmail must contain @'], 'An empty body collects ALL THREE problems, in rule order');\nT.eq(validateSignup({ userName: 'ada' }), ['password must be at least 8 characters', 'userEmail must contain @'], 'userName is fine — the other two rules still fire, in order');\nT.expect(T.logged('username is required'), 'console.log(validateSignup({})); — watch the whole problem list appear');" }
      ],
      files: [
        { name: "script.js", content: "// Never trust req.body. A validator collects EVERY problem, then the\n// route decides: problems.length === 0 → proceed, otherwise → 400.\n\nfunction validateSignup(body) {\n  const problems = [];\n  // 1) no body.userName                        → push \"userName is required\"\n  // 2) no body.password OR fewer than 8 chars  → push \"password must be at least 8 characters\"\n  // 3) no body.userEmail OR no \"@\" in it       → push \"userEmail must contain @\"\n  return problems;\n}\n\n// log the problems of an empty signup\n" }
      ],
      hints: [
        "Rule one is one line: `if (!body.userName) problems.push(\"userName is required\");`",
        "Guard the length read: `if (!body.password || body.password.length < 8) …` — the `!body.password` check runs FIRST, so a missing password can't crash the `.length` part.",
        "`includes` does the email check: `if (!body.userEmail || !body.userEmail.includes(\"@\")) …` — then `console.log(validateSignup({}));`"
      ],
      solution: {
        "script.js": "// Never trust req.body. A validator collects EVERY problem, then the\n// route decides: problems.length === 0 → proceed, otherwise → 400.\n\nfunction validateSignup(body) {\n  const problems = [];\n  if (!body.userName) {\n    problems.push(\"userName is required\");\n  }\n  if (!body.password || body.password.length < 8) {\n    problems.push(\"password must be at least 8 characters\");\n  }\n  if (!body.userEmail || !body.userEmail.includes(\"@\")) {\n    problems.push(\"userEmail must contain @\");\n  }\n  return problems;\n}\n\n// log the problems of an empty signup\nconsole.log(validateSignup({}));\n"
      }
    },

    {
      id: "srv-u6-2",
      title: "Error envelopes",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Your API fails in three flavors — bad input (400), missing things (404), your own bugs (500) — and clients shouldn't need three different parsers to read them. Professional APIs answer **every** failure with one **error envelope**:\n\n`{ status, body: { error: { code, message } } }`\n\n`code` is a stable string machines branch on; `message` is for humans. Successes stay plain `{ status, body }`.\n\nBelow is a working gadgets router that still fails the old sloppy way. Build the `sendError` factory, then refit every failure to the envelope.",
      steps: [
        { text: "Write `sendError(statusCode, errorCode, message)` — one tiny factory that builds every failure: `{ status, body: { error: { code, message } } }`.",
          test: "T.expect(typeof sendError === 'function', 'Define sendError(statusCode, errorCode, message).');\nT.eq(sendError(404, 'not_found', 'Route not found'), { status: 404, body: { error: { code: 'not_found', message: 'Route not found' } } }, 'sendError should build the exact envelope');\nT.eq(sendError(400, 'bad_request', 'title is required'), { status: 400, body: { error: { code: 'bad_request', message: 'title is required' } } }, 'Any status/code/message combo should work');" },
        { text: "Refit the detail route: `GET /api/gadgets/<id>` with an unknown id answers `sendError(404, \"not_found\", \"No gadget with id \" + id)`. The happy paths stay plain successes.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/gadgets', body: null }), { status: 200, body: [{ id: 1, title: 'Solar charger' }, { id: 2, title: 'Mini drone' }] }, 'GET /api/gadgets should still list both gadgets, plain');\nT.eq(handleRequest({ method: 'GET', path: '/api/gadgets/2', body: null }), { status: 200, body: { id: 2, title: 'Mini drone' } }, 'GET /api/gadgets/2 stays a plain success');\nT.eq(handleRequest({ method: 'GET', path: '/api/gadgets/5', body: null }), { status: 404, body: { error: { code: 'not_found', message: 'No gadget with id 5' } } }, 'Unknown id → the 404 envelope, message naming the id');" },
        { text: "Guard the create route: `POST /api/gadgets` without a usable `title` answers `sendError(400, \"bad_request\", \"title is required\")` — and creates nothing. A valid POST still answers 201.",
          test: "T.eq(handleRequest({ method: 'POST', path: '/api/gadgets', body: {} }), { status: 400, body: { error: { code: 'bad_request', message: 'title is required' } } }, 'Missing title → the 400 envelope');\nT.eq(handleRequest({ method: 'POST', path: '/api/gadgets', body: null }).status, 400, 'A null body must 400 too — check req.body BEFORE reading .title');\nT.eq(handleRequest({ method: 'POST', path: '/api/gadgets', body: { title: 'Laser pointer' } }), { status: 201, body: { id: 3, title: 'Laser pointer' } }, 'A valid POST answers 201 with the created gadget (it gets id 3)');\nT.eq(handleRequest({ method: 'GET', path: '/api/gadgets', body: null }).body.length, 3, 'The list should now hold 3 gadgets — the bad requests created NOTHING');" },
        { text: "The catch-all: every unknown route answers `sendError(404, \"not_found\", \"Route not found\")` — never a bare string again.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/nope', body: null }), { status: 404, body: { error: { code: 'not_found', message: 'Route not found' } } }, 'Unknown route → the standard 404 envelope');\nT.eq(handleRequest({ method: 'DELETE', path: '/api/gadgets', body: null }), { status: 404, body: { error: { code: 'not_found', message: 'Route not found' } } }, 'Unknown method on a known path → same envelope');" }
      ],
      files: [
        { name: "script.js", content: "// Success stays plain: { status, body }.\n// EVERY failure now answers the same envelope:\n//   { status, body: { error: { code, message } } }\n\nlet gadgets = [\n  { id: 1, title: \"Solar charger\" },\n  { id: 2, title: \"Mini drone\" }\n];\nlet nextId = 3;\n\n// 1) sendError(statusCode, errorCode, message) → the envelope above\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/gadgets\") {\n    return { status: 200, body: gadgets };\n  }\n  if (req.method === \"GET\" && req.path.startsWith(\"/api/gadgets/\")) {\n    const id = Number(req.path.split(\"/\")[3]);\n    const gadget = gadgets.find(g => g.id === id);\n    // 2) refit → sendError(404, \"not_found\", \"No gadget with id \" + id)\n    if (!gadget) return { status: 404, body: \"Not found\" };\n    return { status: 200, body: gadget };\n  }\n  if (req.method === \"POST\" && req.path === \"/api/gadgets\") {\n    // 3) no req.body OR no req.body.title\n    //    → sendError(400, \"bad_request\", \"title is required\")\n    const gadget = { id: nextId++, title: req.body.title };\n    gadgets.push(gadget);\n    return { status: 201, body: gadget };\n  }\n  // 4) refit → sendError(404, \"not_found\", \"Route not found\")\n  return { status: 404, body: \"Not found\" };\n}\n" }
      ],
      hints: [
        "sendError is a one-liner: `return { status: statusCode, body: { error: { code: errorCode, message: message } } };`",
        "The refits: swap each plain failure return for a `sendError(...)` call — the 200/201 happy paths don't change at all.",
        "The POST guard goes FIRST in that branch: `if (!req.body || !req.body.title) return sendError(400, \"bad_request\", \"title is required\");`"
      ],
      solution: {
        "script.js": "// Success stays plain: { status, body }.\n// EVERY failure now answers the same envelope:\n//   { status, body: { error: { code, message } } }\n\nlet gadgets = [\n  { id: 1, title: \"Solar charger\" },\n  { id: 2, title: \"Mini drone\" }\n];\nlet nextId = 3;\n\nfunction sendError(statusCode, errorCode, message) {\n  return { status: statusCode, body: { error: { code: errorCode, message: message } } };\n}\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/gadgets\") {\n    return { status: 200, body: gadgets };\n  }\n  if (req.method === \"GET\" && req.path.startsWith(\"/api/gadgets/\")) {\n    const id = Number(req.path.split(\"/\")[3]);\n    const gadget = gadgets.find(g => g.id === id);\n    if (!gadget) return sendError(404, \"not_found\", \"No gadget with id \" + id);\n    return { status: 200, body: gadget };\n  }\n  if (req.method === \"POST\" && req.path === \"/api/gadgets\") {\n    if (!req.body || !req.body.title) {\n      return sendError(400, \"bad_request\", \"title is required\");\n    }\n    const gadget = { id: nextId++, title: req.body.title };\n    gadgets.push(gadget);\n    return { status: 201, body: gadget };\n  }\n  return sendError(404, \"not_found\", \"Route not found\");\n}\n"
      }
    },

    {
      id: "srv-u6-3",
      title: "Never crash",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Here's the nightmare: one request with a `null` body hits a handler that reads `req.body.data.text`, the exception bubbles up… and the whole server dies — for **everyone**. Real backends never let one bad request kill the process.\n\nThe fix is a wrapper, pure Unit 4 middleware thinking: `safeHandler(handler)` returns a new handler that runs the original inside `try/catch`. Anything thrown becomes a tidy `500` envelope with a *generic* message — never leak stack traces to strangers.\n\n`brittleHandler` below ships with a landmine on `/api/boom`. Don't fix it — **wrap** it.",
      steps: [
        { text: "Write `safeHandler(handler)` — it returns a NEW handler function. On a healthy request it simply delegates: same input, same output.",
          test: "T.expect(typeof safeHandler === 'function', 'Define safeHandler(handler).');\nvar safe = safeHandler(brittleHandler);\nT.expect(typeof safe === 'function', 'safeHandler must RETURN a function — the wrapped handler');\nT.eq(safe({ method: 'GET', path: '/api/hello', body: null }), { status: 200, body: 'hi' }, 'Healthy requests pass through completely unchanged');" },
        { text: "The payoff: when the inner handler throws, the wrapper answers `{ status: 500, body: { error: { code: \"internal\", message: \"Something broke\" } } }`. Leave the landmine in `brittleHandler` — wrap, don't fix.",
          test: "var exploded = false;\ntry { brittleHandler({ method: 'GET', path: '/api/boom', body: null }); } catch (e) { exploded = true; }\nT.expect(exploded, 'Leave brittleHandler broken! Called directly, /api/boom must still throw — the safety lives in safeHandler, not in the route');\nvar safe2 = safeHandler(brittleHandler);\nT.eq(safe2({ method: 'GET', path: '/api/boom', body: null }), { status: 500, body: { error: { code: 'internal', message: 'Something broke' } } }, 'Wrapped, the exact same request answers a clean 500 envelope');" },
        { text: "Ship it: build the public handler with `const handleRequest = safeHandler(brittleHandler);` — 404s pass through, explosions become 500s.",
          test: "T.expect(typeof handleRequest === 'function', 'Create it with: const handleRequest = safeHandler(brittleHandler);');\nT.eq(handleRequest({ method: 'GET', path: '/api/nope', body: null }), { status: 404, body: { error: { code: 'not_found', message: 'Route not found' } } }, 'Non-throwing paths (like the 404 envelope) pass straight through');\nT.eq(handleRequest({ method: 'GET', path: '/api/boom', body: null }).status, 500, 'The boom route comes back as a 500 — the server lives on');" }
      ],
      files: [
        { name: "script.js", content: "// Rule of servers: one bad request must NEVER take the process down.\n// This handler ships with a landmine on /api/boom — leave it broken!\n\nfunction brittleHandler(req) {\n  if (req.method === \"GET\" && req.path === \"/api/hello\") {\n    return { status: 200, body: \"hi\" };\n  }\n  if (req.method === \"GET\" && req.path === \"/api/boom\") {\n    // the classic production bug: reading deep into a body that isn't there\n    return { status: 200, body: req.body.data.text };\n  }\n  return { status: 404, body: { error: { code: \"not_found\", message: \"Route not found\" } } };\n}\n\n// 1) safeHandler(handler) → a NEW function (req) that\n//    tries handler(req); on ANY throw, answers\n//    { status: 500, body: { error: { code: \"internal\", message: \"Something broke\" } } }\n\n// 2) build the public handler:\n//    const handleRequest = safeHandler(brittleHandler);\n" }
      ],
      hints: [
        "The shape is a function returning a function:\n`function safeHandler(handler) {\n  return function (req) { … };\n}`",
        "Inside the returned function: `try { return handler(req); } catch (err) { return { status: 500, body: { error: { code: \"internal\", message: \"Something broke\" } } }; }`",
        "Don't touch brittleHandler — a checkpoint verifies it STILL throws when called directly. The last line of the file is just `const handleRequest = safeHandler(brittleHandler);`"
      ],
      solution: {
        "script.js": "// Rule of servers: one bad request must NEVER take the process down.\n// This handler ships with a landmine on /api/boom — leave it broken!\n\nfunction brittleHandler(req) {\n  if (req.method === \"GET\" && req.path === \"/api/hello\") {\n    return { status: 200, body: \"hi\" };\n  }\n  if (req.method === \"GET\" && req.path === \"/api/boom\") {\n    // the classic production bug: reading deep into a body that isn't there\n    return { status: 200, body: req.body.data.text };\n  }\n  return { status: 404, body: { error: { code: \"not_found\", message: \"Route not found\" } } };\n}\n\nfunction safeHandler(handler) {\n  return function (req) {\n    try {\n      return handler(req);\n    } catch (err) {\n      return { status: 500, body: { error: { code: \"internal\", message: \"Something broke\" } } };\n    }\n  };\n}\n\nconst handleRequest = safeHandler(brittleHandler);\n"
      }
    },

    {
      id: "srv-u6-4",
      title: "Pagination",
      kind: "js", chip: "SERVER", xp: 15, mins: 14,
      brief: "`GET /api/articles` returning 40,000 rows is how you melt a phone. Big collections ship in **pages**: the client asks `?page=2&perPage=3` (remember Unit 3 — `req.query` arrives as an object of **strings**), and the server answers the slice *plus the math the client needs to draw page buttons*:\n\n`{ items, total, page, pages }`\n\nTwo formulas run the whole show: `pages = Math.ceil(total / perPage)` and `start = (page - 1) * perPage`. Your store holds **7 articles**; with `perPage` 3 that's 3 pages — and the last page carries a single item.",
      steps: [
        { text: "`GET /api/articles` with no useful query defaults to `page` 1, `perPage` 3 and answers `{ status: 200, body: { items, total, page, pages } }`. `req.query` can be missing entirely — default it to `{}` first.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/articles', query: {} });\nT.eq(res, { status: 200, body: { items: [{ id: 1, title: 'Ports and adapters' }, { id: 2, title: 'Caching basics' }, { id: 3, title: 'REST vs RPC' }], total: 7, page: 1, pages: 3 } }, 'Empty query → page 1 of 3: articles 1-3, total 7');\nvar res2 = handleRequest({ method: 'GET', path: '/api/articles' });\nT.eq(res2.body.page, 1, 'No query property AT ALL must not crash — const query = req.query || {};');\nT.eq(res2.body.items.length, 3, 'The defaults still serve the first 3 articles');" },
        { text: "Walk the pages: `?page=2` serves articles 4-6, `?page=3` is the short last page. Query values are strings — `Number()` them before doing math.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/articles', query: { page: '2' } }).body.items, [{ id: 4, title: 'Queues 101' }, { id: 5, title: 'Logging that helps' }, { id: 6, title: 'Feature flags' }], 'Page 2 = articles 4-6');\nT.eq(handleRequest({ method: 'GET', path: '/api/articles', query: { page: '3' } }).body, { items: [{ id: 7, title: 'Zero-downtime deploys' }], total: 7, page: 3, pages: 3 }, 'Page 3 holds ONLY article 7 — and page/pages must be NUMBERS, not strings');" },
        { text: "Honor `perPage` too: with `perPage=2` the 7 articles make `Math.ceil(7 / 2) = 4` pages. Past-the-end pages answer an empty `items` — and `slice` must never mutate the store.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/articles', query: { page: '1', perPage: '2' } }).body, { items: [{ id: 1, title: 'Ports and adapters' }, { id: 2, title: 'Caching basics' }], total: 7, page: 1, pages: 4 }, 'perPage 2 → 4 pages, first page = articles 1-2');\nT.eq(handleRequest({ method: 'GET', path: '/api/articles', query: { page: '4', perPage: '2' } }).body.items, [{ id: 7, title: 'Zero-downtime deploys' }], 'Page 4 of perPage 2 holds only article 7');\nT.eq(handleRequest({ method: 'GET', path: '/api/articles', query: { page: '9' } }).body, { items: [], total: 7, page: 9, pages: 3 }, 'Past the end → an EMPTY items array, meta intact');\nT.eq(ARTICLES.length, 7, 'slice copies — the store must still hold all 7 articles');" },
        { text: "Anything that isn't `GET /api/articles` answers the Unit 6 envelope: `{ status: 404, body: { error: { code: \"not_found\", message: \"Route not found\" } } }`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/nope', query: {} }), { status: 404, body: { error: { code: 'not_found', message: 'Route not found' } } }, 'Unknown routes keep the standard envelope');\nT.eq(handleRequest({ method: 'POST', path: '/api/articles', body: null }).status, 404, 'POST /api/articles is not a route here → 404');" }
      ],
      files: [
        { name: "script.js", content: "// GET /api/articles?page=2&perPage=3\n// → { status: 200, body: { items, total, page, pages } }\n//   pages = Math.ceil(total / perPage)\n//   start = (page - 1) * perPage → items = ARTICLES.slice(start, start + perPage)\n\nconst ARTICLES = [\n  { id: 1, title: \"Ports and adapters\" },\n  { id: 2, title: \"Caching basics\" },\n  { id: 3, title: \"REST vs RPC\" },\n  { id: 4, title: \"Queues 101\" },\n  { id: 5, title: \"Logging that helps\" },\n  { id: 6, title: \"Feature flags\" },\n  { id: 7, title: \"Zero-downtime deploys\" }\n];\n\nfunction handleRequest(req) {\n  // GET /api/articles:\n  //   const query = req.query || {};   (the query can be missing!)\n  //   page defaults to 1, perPage to 3 — query values are STRINGS: Number() them\n  //   answer { status: 200, body: { items, total, page, pages } }\n  // anything else:\n  //   { status: 404, body: { error: { code: \"not_found\", message: \"Route not found\" } } }\n}\n" }
      ],
      hints: [
        "Read the knobs safely: `const query = req.query || {}; const pageNum = Number(query.page || 1); const perPageNum = Number(query.perPage || 3);` — and never name a bare variable `status` in worker code; build the response object literal directly.",
        "The math: `const total = ARTICLES.length; const pages = Math.ceil(total / perPageNum); const start = (pageNum - 1) * perPageNum;`",
        "The slice and the answer: `const items = ARTICLES.slice(start, start + perPageNum); return { status: 200, body: { items: items, total: total, page: pageNum, pages: pages } };`"
      ],
      solution: {
        "script.js": "// GET /api/articles?page=2&perPage=3\n// → { status: 200, body: { items, total, page, pages } }\n\nconst ARTICLES = [\n  { id: 1, title: \"Ports and adapters\" },\n  { id: 2, title: \"Caching basics\" },\n  { id: 3, title: \"REST vs RPC\" },\n  { id: 4, title: \"Queues 101\" },\n  { id: 5, title: \"Logging that helps\" },\n  { id: 6, title: \"Feature flags\" },\n  { id: 7, title: \"Zero-downtime deploys\" }\n];\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/articles\") {\n    const query = req.query || {};\n    const pageNum = Number(query.page || 1);\n    const perPageNum = Number(query.perPage || 3);\n    const total = ARTICLES.length;\n    const pages = Math.ceil(total / perPageNum);\n    const start = (pageNum - 1) * perPageNum;\n    const items = ARTICLES.slice(start, start + perPageNum);\n    return { status: 200, body: { items: items, total: total, page: pageNum, pages: pages } };\n  }\n  return { status: 404, body: { error: { code: \"not_found\", message: \"Route not found\" } } };\n}\n"
      }
    },

    {
      id: "srv-quiz-6",
      title: "Unit 6 quiz: Validation & errors",
      kind: "quiz", xp: 10,
      brief: "Validators, envelopes, 500s and page math. 80% to pass.",
      questions: [
        { q: "`validateSignup(body)` collects problems. What should it return for a perfectly VALID body?",
          choices: ["null", "true", "An empty array — zero problems found", "{ status: 200 }"],
          answer: 2, explain: "One return type for every outcome: an array. The caller just checks problems.length === 0." },
        { q: "A client signs up with a 5-character password. Which status is right?",
          choices: ["400 — the CLIENT sent invalid data", "500 — the server failed", "201 — created anyway", "301 — redirect them"],
          answer: 0, explain: "4xx = the client's mistake, 5xx = yours. A short password is firmly the client's problem." },
        { q: "Why give EVERY failure the same `{ error: { code, message } }` envelope?",
          choices: ["It makes responses smaller", "Client code can handle any failure with ONE code path", "HTTP requires that exact shape", "It hides the status code from users"],
          answer: 1, explain: "Machines branch on error.code, humans read error.message — and the front-end writes its failure handler exactly once." },
        { q: "What does safeHandler's try/catch actually buy you when a route throws?",
          code: "try { return handler(req); }\ncatch (err) { /* … */ }",
          lang: "js",
          choices: ["The bug fixes itself", "The request is retried automatically", "The error is silently ignored and 200 goes out", "A clean 500 envelope instead of a dead server"],
          answer: 3, explain: "The bug is still yours to fix — but one bad request no longer takes the whole process (and every other user) down with it." },
        { q: "7 items, perPage = 3. How many pages?",
          choices: ["2", "3 — Math.ceil(7 / 3)", "2.33", "4"],
          answer: 1, explain: "The 1-item leftover still needs a page of its own — that's why it's ceil, never floor or round." },
        { q: "Which start index serves page 2 when perPage is 3?",
          code: "const items = all.slice(start, start + perPage);",
          lang: "js",
          choices: ["start = 1", "start = 2", "start = 3 — (page - 1) * perPage", "start = 6"],
          answer: 2, explain: "(2 - 1) * 3 = 3: page 2 begins exactly where page 1's three items ended." }
      ]
    }
  ]
});
