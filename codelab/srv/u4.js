/* Back-End Foundations — Unit 4: Middleware */
window.CODELAB.addUnit("srv", {
  id: "srv-u4",
  title: "Middleware",
  icon: "🔗",
  blurb: "Wrap handlers in handlers: logging, counters and guards that run on every request.",
  cheat: [
    { h: "Middleware = a handler wrapper", lang: "js", code: "function withLogging(handler) {\n  return function (req) {\n    logLines.push(req.method + \" \" + req.path);\n    return handler(req);   // delegate!\n  };\n}", note: "Takes a handler, returns a NEW handler. The original never knows it's being watched." },
    { h: "The onion", lang: "js", code: "const app = first(second(handler));\n// request in:   first → second → handler\n// response out: handler → second → first", note: "Outermost middleware meets the request first and the response last." },
    { h: "Composing a chain", lang: "js", code: "function applyMiddleware(handler, middlewares) {\n  let wrapped = handler;\n  for (let i = middlewares.length - 1; i >= 0; i--) {\n    wrapped = middlewares[i](wrapped);\n  }\n  return wrapped;\n}", note: "Wrap right-to-left so middlewares[0] lands OUTERMOST — list order = run order." },
    { h: "Guard middleware: refuse early", lang: "js", code: "function requireBody(handler) {\n  return function (req) {\n    if (req.body === null || req.body === undefined) {\n      return { status: 400, body: { error: \"body required\" } };\n    }\n    return handler(req);\n  };\n}", note: "A guard answers the error itself — the handler never sees bad input." },
    { h: "How Express does it (real Node.js)", lang: "js", code: "app.use((req, res, next) => {\n  console.log(req.method + \" \" + req.path);\n  next();  // pass to the next layer\n});", note: "next() is your handler(req) in disguise. Registration order = run order there too." }
  ],
  lessons: [

    {
      id: "srv-u4-1",
      title: "The middleware idea",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Every real server does things on EVERY request — logging, auth checks, metrics — without copy-pasting that code into each route. The trick is **middleware**: a function that takes a handler and returns a *new* handler that does something extra, then delegates.\n\n`withLogging(handler)` returns a wrapped handler. Call the wrapper and it pushes `req.method + \" \" + req.path` into the `logLines` array, then hands the request to the real handler and returns whatever it returns. The original handler never changes and never knows.\n\nExpress calls these middleware too (`app.use(...)`) — by the end of this unit you'll recognize its `next()` as exactly what you're building here.",
      steps: [
        { text: "Write `withLogging(handler)` — it must RETURN a new function that still answers exactly like the original.",
          test: "T.expect(typeof withLogging === 'function', 'Define withLogging(handler).');\nvar wrapped = withLogging(coreHandler);\nT.expect(typeof wrapped === 'function', 'withLogging must RETURN a function — the wrapped handler. Got ' + typeof wrapped);\nT.eq(wrapped({ method: 'GET', path: '/api/ping', body: null }), { status: 200, body: 'pong' }, 'The wrapped handler must still delegate: GET /api/ping → { status: 200, body: \"pong\" }');\nT.eq(wrapped({ method: 'GET', path: '/nope', body: null }), { status: 404, body: 'Not found' }, 'Unknown paths still 404 straight through the wrapper');" },
        { text: "Every call through the wrapper records `req.method + \" \" + req.path` in `logLines`.",
          test: "logLines.length = 0;\nvar wrapped2 = withLogging(coreHandler);\nwrapped2({ method: 'GET', path: '/api/ping', body: null });\nwrapped2({ method: 'POST', path: '/api/data', body: { x: 1 } });\nT.eq(logLines, ['GET /api/ping', 'POST /api/data'], 'Each call should push method + \" \" + path — expected [\"GET /api/ping\", \"POST /api/data\"], got ' + JSON.stringify(logLines));" },
        { text: "The logging lives ONLY in the wrapper: calling `coreHandler` directly logs nothing.",
          test: "logLines.length = 0;\ncoreHandler({ method: 'GET', path: '/api/ping', body: null });\nT.eq(logLines, [], 'Calling coreHandler DIRECTLY must log nothing — the logging belongs to the wrapper, not the handler');\nvar res3 = withLogging(coreHandler)({ method: 'DELETE', path: '/api/secret', body: null });\nT.eq(res3, { status: 404, body: 'Not found' }, 'The wrapper never invents routes — DELETE /api/secret still 404s');\nT.eq(logLines, ['DELETE /api/secret'], '…but the attempt IS on the record: logLines should be [\"DELETE /api/secret\"], got ' + JSON.stringify(logLines));" }
      ],
      files: [
        { name: "script.js", content: "// Middleware: a function that takes a handler and returns a NEW handler.\n// request = { method, path, body } → response = { status, body }\n\nvar logLines = [];\n\nfunction coreHandler(req) {\n  if (req.method === \"GET\" && req.path === \"/api/ping\") {\n    return { status: 200, body: \"pong\" };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\n// 1) withLogging(handler) → returns a NEW function (req) that:\n//      - pushes req.method + \" \" + req.path into logLines\n//      - returns handler(req)   (delegate — don't re-implement routes!)\n\n// 2) wire it up:  const app = withLogging(coreHandler);\n//    call app once, then console.log(logLines) to watch the wiretap work\n" }
      ],
      hints: [
        "The shape is a function returning a function: `function withLogging(handler) { return function (req) { /* log here */ return handler(req); }; }`",
        "The log line is one string: `logLines.push(req.method + \" \" + req.path);` — push BEFORE delegating.",
        "`withLogging(coreHandler)` only BUILDS the wrapper; nothing is logged until you call the returned function with a request."
      ],
      solution: {
        "script.js": "// Middleware: a function that takes a handler and returns a NEW handler.\n// request = { method, path, body } → response = { status, body }\n\nvar logLines = [];\n\nfunction coreHandler(req) {\n  if (req.method === \"GET\" && req.path === \"/api/ping\") {\n    return { status: 200, body: \"pong\" };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nfunction withLogging(handler) {\n  return function (req) {\n    logLines.push(req.method + \" \" + req.path);\n    return handler(req);\n  };\n}\n\nconst app = withLogging(coreHandler);\nconsole.log(app({ method: \"GET\", path: \"/api/ping\", body: null }));\nconsole.log(logLines);\n"
      }
    },

    {
      id: "srv-u4-2",
      title: "A chain of middleware",
      kind: "js", chip: "SERVER", xp: 15, mins: 14,
      brief: "One wrapper is handy. Real servers stack **many** — logging outside auth outside parsing — like an onion around the handler.\n\n`applyMiddleware(handler, [mw1, mw2])` builds the onion for you. The rule everyone expects: **list order = run order**, so `mw1` sees the request first. To get that, wrap **right-to-left**: wrap the handler with `mw2` first, then wrap that result with `mw1` — the last wrap sticks outermost.\n\nTo *see* the order, you'll first build `tag(label)`: a middleware factory whose middleware logs `label + \":in\"` on the way in and `label + \":out\"` on the way out. The log literally draws the onion.",
      steps: [
        { text: "Write `tag(label)` — a factory returning a middleware; one wrap should log `in`, then `handler`, then `out`.",
          test: "T.expect(typeof tag === 'function', 'Define tag(label).');\nvar mw = tag('a');\nT.expect(typeof mw === 'function', 'tag(label) must return a MIDDLEWARE — a function that takes a handler. Got ' + typeof mw);\nvar wrapped = mw(coreHandler);\nT.expect(typeof wrapped === 'function', 'The middleware must return a wrapped handler function. Got ' + typeof wrapped);\nlogLines.length = 0;\nvar res = wrapped({ method: 'GET', path: '/', body: null });\nT.eq(res, { status: 200, body: 'done' }, 'The wrapped handler must still return the core response { status: 200, body: \"done\" }');\nT.eq(logLines, ['a:in', 'handler', 'a:out'], 'One wrap of tag(\"a\") should log a:in, then handler, then a:out — got ' + JSON.stringify(logLines) + ' (log :in BEFORE delegating, :out AFTER)');" },
        { text: "Write `applyMiddleware(handler, middlewares)` — an empty list behaves like the bare handler; one middleware wraps once.",
          test: "T.expect(typeof applyMiddleware === 'function', 'Define applyMiddleware(handler, middlewares).');\nvar plain = applyMiddleware(coreHandler, []);\nlogLines.length = 0;\nT.eq(plain({ method: 'GET', path: '/', body: null }), { status: 200, body: 'done' }, 'Empty middleware list → behaves exactly like the bare handler');\nT.eq(logLines, ['handler'], 'No middleware, no extra log lines — got ' + JSON.stringify(logLines));\nvar one = applyMiddleware(coreHandler, [tag('only')]);\nlogLines.length = 0;\none({ method: 'GET', path: '/', body: null });\nT.eq(logLines, ['only:in', 'handler', 'only:out'], 'One middleware should wrap exactly once — got ' + JSON.stringify(logLines));" },
        { text: "Prove the order: `[tag(\"first\"), tag(\"second\")]` must run `first` OUTERMOST.",
          test: "var chained = applyMiddleware(coreHandler, [tag('first'), tag('second')]);\nlogLines.length = 0;\nchained({ method: 'GET', path: '/', body: null });\nT.eq(logLines, ['first:in', 'second:in', 'handler', 'second:out', 'first:out'], 'List order = run order: first wraps OUTSIDE second. Expected [first:in, second:in, handler, second:out, first:out], got ' + JSON.stringify(logLines) + ' — if second:in comes first, you looped forward: wrap right-to-left');" }
      ],
      files: [
        { name: "script.js", content: "// The onion: many middleware, one handler at the core.\n\nvar logLines = [];\n\nfunction coreHandler(req) {\n  logLines.push(\"handler\");\n  return { status: 200, body: \"done\" };\n}\n\n// 1) tag(label) — a middleware FACTORY. Shape:\n//      return function (handler) {\n//        return function (req) {\n//          … log label + \":in\", call handler, log label + \":out\", return the response\n//        };\n//      };\n\n// 2) applyMiddleware(handler, middlewares)\n//    Wrap RIGHT-TO-LEFT so middlewares[0] ends up outermost:\n//      let wrapped = handler;\n//      loop i from middlewares.length - 1 down to 0 → wrapped = middlewares[i](wrapped)\n//      return wrapped;\n\n// 3) build the chain and watch the onion:\n//      const app = applyMiddleware(coreHandler, [tag(\"first\"), tag(\"second\")]);\n//      app({ method: \"GET\", path: \"/\", body: null });\n//      console.log(logLines);\n" }
      ],
      hints: [
        "tag is three nested functions: the factory takes `label`, returns a middleware taking `handler`, which returns the per-request function. Follow the starter comment's shape literally.",
        "Inside the per-request function: `logLines.push(label + \":in\"); const res = handler(req); logLines.push(label + \":out\"); return res;`",
        "applyMiddleware: `for (let i = middlewares.length - 1; i >= 0; i--) wrapped = middlewares[i](wrapped);` — the LAST wrap (i = 0) sticks outermost, so middlewares[0] runs first."
      ],
      solution: {
        "script.js": "// The onion: many middleware, one handler at the core.\n\nvar logLines = [];\n\nfunction coreHandler(req) {\n  logLines.push(\"handler\");\n  return { status: 200, body: \"done\" };\n}\n\nfunction tag(label) {\n  return function (handler) {\n    return function (req) {\n      logLines.push(label + \":in\");\n      const res = handler(req);\n      logLines.push(label + \":out\");\n      return res;\n    };\n  };\n}\n\nfunction applyMiddleware(handler, middlewares) {\n  let wrapped = handler;\n  for (let i = middlewares.length - 1; i >= 0; i--) {\n    wrapped = middlewares[i](wrapped);\n  }\n  return wrapped;\n}\n\nconst app = applyMiddleware(coreHandler, [tag(\"first\"), tag(\"second\")]);\nconsole.log(app({ method: \"GET\", path: \"/\", body: null }));\nconsole.log(logLines);\n"
      }
    },

    {
      id: "srv-u4-3",
      title: "Counting & timing",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Ops teams live off two questions: *how many requests?* and *how slow?* Real timing middleware stamps `Date.now()` on the way in and out — but clocks make tests flaky, so here you'll master the deterministic half: **counting**. (Same wrapper shape; swap the counter for a clock and you've built the timer.)\n\n`requestCounter(handler)` bumps `stats.requests` on every call, keeps a per-path tally in `stats.byPath`, then delegates.\n\nKey insight: the counter wraps the *whole* app, so even requests that end in 404 get counted — middleware runs before the router decides anything. That's exactly how production metrics dashboards see the world.",
      steps: [
        { text: "Write `requestCounter(handler)` — it bumps `stats.requests` on every call and still delegates.",
          test: "T.expect(typeof requestCounter === 'function', 'Define requestCounter(handler).');\nstats.requests = 0; stats.byPath = {};\nvar counted = requestCounter(coreHandler);\nT.eq(counted({ method: 'GET', path: '/api/ping', body: null }), { status: 200, body: 'pong' }, 'Counting must not change the answer: GET /api/ping → 200 \"pong\"');\nT.eq(stats.requests, 1, 'One request through the wrapper → stats.requests should be 1, got ' + stats.requests);\ncounted({ method: 'GET', path: '/api/books', body: null });\ncounted({ method: 'GET', path: '/api/ping', body: null });\nT.eq(stats.requests, 3, 'Three requests → stats.requests should be 3, got ' + stats.requests);" },
        { text: "Track a per-path tally in `stats.byPath` — a path starts at 1 the first time you see it.",
          test: "stats.requests = 0; stats.byPath = {};\nvar counted2 = requestCounter(coreHandler);\ncounted2({ method: 'GET', path: '/api/ping', body: null });\ncounted2({ method: 'GET', path: '/api/ping', body: null });\ncounted2({ method: 'GET', path: '/api/books', body: null });\nT.eq(stats.byPath, { '/api/ping': 2, '/api/books': 1 }, 'stats.byPath tracks each path separately — expected { \"/api/ping\": 2, \"/api/books\": 1 }, got ' + JSON.stringify(stats.byPath));\nT.eq(stats.requests, 3, 'The grand total should still be 3');" },
        { text: "A burst with a stranger in it: 404s count too — the middleware runs before the router decides.",
          test: "stats.requests = 0; stats.byPath = {};\nvar burst = requestCounter(coreHandler);\nburst({ method: 'GET', path: '/api/books', body: null });\nburst({ method: 'GET', path: '/missing', body: null });\nburst({ method: 'GET', path: '/missing', body: null });\nburst({ method: 'GET', path: '/api/ping', body: null });\nT.eq(stats, { requests: 4, byPath: { '/api/books': 1, '/missing': 2, '/api/ping': 1 } }, '404s COUNT — the counter runs before the router says no. Expected { requests: 4, byPath: { \"/api/books\": 1, \"/missing\": 2, \"/api/ping\": 1 } }, got ' + JSON.stringify(stats));" }
      ],
      files: [
        { name: "script.js", content: "// Every production server counts its traffic. Middleware makes it ONE wrapper.\n\nvar stats = { requests: 0, byPath: {} };\n\nfunction coreHandler(req) {\n  if (req.method === \"GET\" && req.path === \"/api/ping\") {\n    return { status: 200, body: \"pong\" };\n  }\n  if (req.method === \"GET\" && req.path === \"/api/books\") {\n    return { status: 200, body: [\"Dune\", \"Emma\"] };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\n// 1) requestCounter(handler) → wrapped handler that, on EVERY request:\n//      - stats.requests++\n//      - bumps stats.byPath[req.path]  (start a path at 1 the first time you see it)\n//      - returns handler(req)\n\n// 2) const app = requestCounter(coreHandler);\n//    fire a few requests (include a bogus path!), then console.log(stats)\n" }
      ],
      hints: [
        "Same skeleton as withLogging — only the side effect changes: bump the numbers, then `return handler(req);`.",
        "First time you see a path, `stats.byPath[req.path]` is undefined — `stats.byPath[req.path] = (stats.byPath[req.path] || 0) + 1;` births the counter at 1.",
        "Don't route inside the middleware: count EVERY request, then delegate. The 404 decision belongs to coreHandler."
      ],
      solution: {
        "script.js": "// Every production server counts its traffic. Middleware makes it ONE wrapper.\n\nvar stats = { requests: 0, byPath: {} };\n\nfunction coreHandler(req) {\n  if (req.method === \"GET\" && req.path === \"/api/ping\") {\n    return { status: 200, body: \"pong\" };\n  }\n  if (req.method === \"GET\" && req.path === \"/api/books\") {\n    return { status: 200, body: [\"Dune\", \"Emma\"] };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nfunction requestCounter(handler) {\n  return function (req) {\n    stats.requests++;\n    stats.byPath[req.path] = (stats.byPath[req.path] || 0) + 1;\n    return handler(req);\n  };\n}\n\nconst app = requestCounter(coreHandler);\napp({ method: \"GET\", path: \"/api/ping\", body: null });\napp({ method: \"GET\", path: \"/api/books\", body: null });\napp({ method: \"GET\", path: \"/api/oops\", body: null });\nconsole.log(stats);\n"
      }
    },

    {
      id: "srv-u4-4",
      title: "Guard middleware",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Middleware can do more than watch — it can **refuse**. A *guard* checks the request and, when the check fails, returns an error response itself; the handler never runs.\n\n`requireBody(handler)` answers `{ status: 400, body: { error: \"body required\" } }` when `req.body` is `null` or `undefined` — otherwise it delegates. That matters here: the notes handler reads `req.body.text`, which would CRASH on a null body. The guard makes the crash impossible.\n\nThen stack the layers: `withLogging(requireBody(coreHandler))` — logging outermost, so even blocked requests land in the log. Order is a design decision, and you're making it.",
      steps: [
        { text: "Write `requireBody(handler)` — `null` or `undefined` body → 400 `{ error: \"body required\" }`, and the handler must NOT run.",
          test: "T.expect(typeof requireBody === 'function', 'Define requireBody(handler).');\nnotes.length = 0; nextId = 1;\nvar guarded = requireBody(coreHandler);\nT.eq(guarded({ method: 'POST', path: '/api/notes', body: null }), { status: 400, body: { error: 'body required' } }, 'A null body must be stopped at the gate with 400 { error: \"body required\" }');\nT.eq(guarded({ method: 'POST', path: '/api/notes', body: undefined }), { status: 400, body: { error: 'body required' } }, 'An undefined body must be blocked too — check for both null AND undefined');\nT.eq(notes, [], 'Blocked requests must never reach the handler — no note should have been created');" },
        { text: "A real body sails through untouched — the guard delegates and the note is stored.",
          test: "var guarded2 = requireBody(coreHandler);\nvar res = guarded2({ method: 'POST', path: '/api/notes', body: { text: 'buy milk' } });\nT.eq(res, { status: 201, body: { id: 1, text: 'buy milk' } }, 'A real body passes through: expected 201 with { id: 1, text: \"buy milk\" }, got ' + JSON.stringify(res));\nT.eq(notes, [{ id: 1, text: 'buy milk' }], 'And the note is really in the store');" },
        { text: "Stack it: `withLogging(requireBody(coreHandler))` — blocked requests are still LOGGED.",
          test: "logLines.length = 0;\nvar stacked = withLogging(requireBody(coreHandler));\nvar blocked = stacked({ method: 'POST', path: '/api/notes', body: null });\nT.eq(blocked, { status: 400, body: { error: 'body required' } }, 'The stacked app still guards: 400 for a missing body');\nT.eq(logLines, ['POST /api/notes'], 'withLogging sits OUTSIDE requireBody, so even the blocked request gets logged — expected [\"POST /api/notes\"], got ' + JSON.stringify(logLines) + ' (if it is empty, your layers are in the wrong order)');\nvar ok = stacked({ method: 'POST', path: '/api/notes', body: { text: 'ship it' } });\nT.eq(ok, { status: 201, body: { id: 2, text: 'ship it' } }, 'A valid request passes BOTH layers — expected 201 with { id: 2, text: \"ship it\" }, got ' + JSON.stringify(ok));\nT.eq(logLines, ['POST /api/notes', 'POST /api/notes'], 'Two requests through the stack → two log lines');" }
      ],
      files: [
        { name: "script.js", content: "// Guards: middleware that can say NO.\n// request = { method, path, body } → response = { status, body }\n\nvar logLines = [];\nvar notes = [];\nvar nextId = 1;\n\n// from earlier this unit — ready to use\nfunction withLogging(handler) {\n  return function (req) {\n    logLines.push(req.method + \" \" + req.path);\n    return handler(req);\n  };\n}\n\n// careful: this reads req.body.text — a null body would CRASH it\nfunction coreHandler(req) {\n  if (req.method === \"POST\" && req.path === \"/api/notes\") {\n    const note = { id: nextId++, text: req.body.text };\n    notes.push(note);\n    return { status: 201, body: note };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\n// 1) requireBody(handler) → wrapped handler:\n//      body null or undefined → { status: 400, body: { error: \"body required\" } }\n//      otherwise → handler(req)\n\n// 2) stack it: const app = withLogging(requireBody(coreHandler));\n//    log app({ method: \"POST\", path: \"/api/notes\", body: null }) — blocked AND logged\n" }
      ],
      hints: [
        "Check BEFORE delegating: if the body is missing, return the 400 object and never call handler at all.",
        "`req.body === null || req.body === undefined` catches both cases (the loose `req.body == null` is the classic shortcut for exactly this pair).",
        "Stack inside-out: requireBody hugs the handler, withLogging wraps the result — `withLogging(requireBody(coreHandler))`. Flip them and blocked requests vanish from the log."
      ],
      solution: {
        "script.js": "// Guards: middleware that can say NO.\n// request = { method, path, body } → response = { status, body }\n\nvar logLines = [];\nvar notes = [];\nvar nextId = 1;\n\n// from earlier this unit — ready to use\nfunction withLogging(handler) {\n  return function (req) {\n    logLines.push(req.method + \" \" + req.path);\n    return handler(req);\n  };\n}\n\n// careful: this reads req.body.text — a null body would CRASH it\nfunction coreHandler(req) {\n  if (req.method === \"POST\" && req.path === \"/api/notes\") {\n    const note = { id: nextId++, text: req.body.text };\n    notes.push(note);\n    return { status: 201, body: note };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nfunction requireBody(handler) {\n  return function (req) {\n    if (req.body === null || req.body === undefined) {\n      return { status: 400, body: { error: \"body required\" } };\n    }\n    return handler(req);\n  };\n}\n\nconst app = withLogging(requireBody(coreHandler));\nconsole.log(app({ method: \"POST\", path: \"/api/notes\", body: null }));\nconsole.log(logLines);\n"
      }
    },

    {
      id: "srv-quiz-4",
      title: "Unit 4 quiz: Middleware",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What is middleware, structurally?",
          choices: ["A database plugin", "A faster kind of route", "A function that takes a handler and returns a new, wrapped handler", "A second server between the client and yours"],
          answer: 2, explain: "Handler in, handler out. The wrapper does its extra work (log, count, guard…), then delegates — the original handler never changes." },
        { q: "With `applyMiddleware(handler, [logger, guard])`, which layer touches an incoming request FIRST?",
          choices: ["logger — list order is run order, because it was wrapped outermost", "guard — the last item always runs first", "handler — middleware runs after the response", "Both middleware run simultaneously"],
          answer: 0, explain: "Wrapping right-to-left leaves middlewares[0] as the outermost onion skin, so it meets the request first and the response last." },
        { q: "A guard middleware decides a request is bad. What should it do?",
          choices: ["Throw an exception and hope someone catches it", "Return an error response itself — the handler never runs", "Call the handler anyway but attach a warning", "Log it and continue"],
          answer: 1, explain: "Guards refuse by returning early. That's why a handler behind requireBody can safely read req.body.text — bad requests never reach it." },
        { q: "Why does applyMiddleware wrap the array right-to-left?",
          choices: ["Arrays iterate faster backwards", "JavaScript closures require it", "To keep the log lines sorted alphabetically", "So the FIRST middleware in the list ends up outermost and runs first"],
          answer: 3, explain: "Each wrap goes around everything built so far — wrapping middlewares[0] LAST puts it on the outside, matching the order people read the list." },
        { q: "What happens here?",
          code: "const app = withLogging(requireBody(handler));\napp({ method: \"POST\", path: \"/x\", body: null });",
          lang: "js",
          choices: ["handler runs with a null body", "The request is blocked and NOT logged", "It crashes with a TypeError", "The request is logged, then blocked with a 400 — handler never runs"],
          answer: 3, explain: "withLogging is outermost, so it records the attempt; requireBody then answers 400 before handler is ever called. Order is a design decision." },
        { q: "In Express, `app.use(fn)` is closest to…",
          choices: ["Defining one GET route", "Starting the server on a port", "Registering middleware that runs for every request", "Importing a module"],
          answer: 2, explain: "app.use stacks middleware in registration order — the same onion you built with applyMiddleware, with next() passing the baton inward." }
      ]
    }
  ]
});
