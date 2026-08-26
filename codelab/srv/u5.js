/* Back-End Foundations — Unit 5: Auth-lite */
window.CODELAB.addUnit("srv", {
  id: "srv-u5",
  title: "Auth-lite",
  icon: "🔑",
  blurb: "Logins, tokens and locked routes — who are you, and can you prove it on every request?",
  cheat: [
    { h: "The auth flow", lang: "js", code: "// 1) prove who you are — ONCE\n{ method: \"POST\", path: \"/api/login\",\n  body: { userName: \"ada\", password: \"…\" } }\n// 2) the server hands back a token\n{ status: 200, body: { token: \"token-ada\" } }\n// 3) every later request carries it\n{ method: \"GET\", path: \"/api/secret\",\n  headers: { authorization: \"token-ada\" } }", note: "HTTP is stateless — the token is how the server remembers you between requests." },
    { h: "The 401 envelope", lang: "js", code: "return { status: 401, body: { error: \"unauthorized\" } };", note: "One shape for every rejection — missing token, unknown token, logged-out token. Never reveal which." },
    { h: "Guarding a route", lang: "js", code: "const authToken = req.headers && req.headers.authorization;\nif (!activeTokens.includes(authToken)) {\n  return { status: 401, body: { error: \"unauthorized\" } };\n}\n// only trusted code below this line", note: "The && guard matters: a request with no headers object must get a calm 401, not a crash." },
    { h: "Logout = server-side delete", lang: "js", code: "activeTokens = activeTokens.filter(t => t !== authToken);", note: "filter builds a NEW array — declare the store with let. The token dies even if the client keeps a copy. Same move kills a STOLEN token." },
    { h: "How Express does it (real Node.js)", lang: "js", code: "app.get(\"/api/secret\", requireAuth, (req, res) => {\n  res.json({ secret: \"the cake is real\" });\n});\n// requireAuth reads the Authorization header,\n// verifies the token, else res.status(401)…", note: "The same guard, packaged as middleware (Unit 4!). Real tokens are signed JWTs, not \"token-ada\" — but the flow is identical." }
  ],
  lessons: [

    {
      id: "srv-u5-1",
      title: "Login → token",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Time to answer the internet's oldest question: **who are you?**\n\nHTTP is *stateless* — the server forgets you between requests. So auth works like a wristband at a venue: you show ID **once** (`POST /api/login` with `userName` + `password`), and the server hands back a **token** — a string that stands in for you from then on. Ours are fixed (`\"token-ada\"`) so tests can check them; real ones are long random signed strings.\n\nTwo house rules: wrong credentials get a **401** with a deliberately vague `\"invalid credentials\"` (never say *which* half was wrong), and every token you issue goes into `activeTokens` — the server's guest list.",
      steps: [
        { text: "`POST /api/login` with ada's real credentials → `{ status: 200, body: { token: \"token-ada\" } }`.",
          test: "T.expect(typeof handleRequest === 'function', 'Define function handleRequest(req) { … }');\nvar res = handleRequest({ method: 'POST', path: '/api/login', body: { userName: 'ada', password: 'mainframe' } });\nT.eq(res, { status: 200, body: { token: 'token-ada' } }, 'ada + mainframe is a valid login — expected 200 { token: \"token-ada\" }, yours returned ' + JSON.stringify(res));" },
        { text: "Wrong password OR unknown user → `{ status: 401, body: { error: \"invalid credentials\" } }`.",
          test: "var res = handleRequest({ method: 'POST', path: '/api/login', body: { userName: 'ada', password: 'wrong' } });\nT.eq(res, { status: 401, body: { error: 'invalid credentials' } }, 'Wrong password → exactly { status: 401, body: { error: \"invalid credentials\" } }');\nvar res2 = handleRequest({ method: 'POST', path: '/api/login', body: { userName: 'zed', password: 'mainframe' } });\nT.eq(res2, { status: 401, body: { error: 'invalid credentials' } }, 'Unknown userName → the SAME vague 401 — never reveal which half was wrong');" },
        { text: "bo logs in too — and `activeTokens` now remembers **both** tokens.",
          test: "var res = handleRequest({ method: 'POST', path: '/api/login', body: { userName: 'bo', password: 'hunter2' } });\nT.eq(res, { status: 200, body: { token: 'token-bo' } }, 'bo + hunter2 → 200 { token: \"token-bo\" }');\nT.expect(Array.isArray(activeTokens), 'Keep activeTokens an array.');\nT.expect(activeTokens.includes('token-ada'), \"activeTokens should still remember ada's token from the step-1 login\");\nT.expect(activeTokens.includes('token-bo'), \"activeTokens should now contain bo's token as well\");" },
        { text: "Everything else → `{ status: 404, body: \"Not found\" }`.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/login', body: null }), { status: 404, body: 'Not found' }, 'Only POST logs in — GET /api/login is a 404');\nT.eq(handleRequest({ method: 'POST', path: '/api/nope', body: { userName: 'ada', password: 'mainframe' } }), { status: 404, body: 'Not found' }, 'Unknown paths → 404 \"Not found\"');" }
      ],
      files: [
        { name: "script.js", content: "// Auth, part 1: trade credentials for a token.\n//   request  = { method, path, headers?, body }\n//   response = { status, body }\n\nconst users = [\n  { userName: \"ada\", password: \"mainframe\" },\n  { userName: \"bo\", password: \"hunter2\" }\n];\n\nlet activeTokens = []; // every token you hand out lives here\n\nfunction handleRequest(req) {\n  // POST /api/login:\n  //   1) find the user where userName AND password both match req.body\n  //   2) no match → { status: 401, body: { error: \"invalid credentials\" } }\n  //   3) match   → token = \"token-\" + userName; push it into activeTokens\n  //                (skip the push if it's already there) and answer\n  //                { status: 200, body: { token: token } }\n  // anything else → { status: 404, body: \"Not found\" }\n}\n\n// a failed login, for the console:\nconsole.log(handleRequest({ method: \"POST\", path: \"/api/login\", body: { userName: \"ada\", password: \"wrong\" } }));\n" }
      ],
      hints: [
        "Find the match with BOTH checks: `const found = users.find(u => u.userName === req.body.userName && u.password === req.body.password);` — `find` hands you the user object, or `undefined`.",
        "Build the token from the match: `const token = \"token-\" + found.userName;` then `if (!activeTokens.includes(token)) activeTokens.push(token);` so re-logins don't duplicate it.",
        "No match? `return { status: 401, body: { error: \"invalid credentials\" } };` — and keep `return { status: 404, body: \"Not found\" };` as the function's last line."
      ],
      solution: {
        "script.js": "// Auth, part 1: trade credentials for a token.\n//   request  = { method, path, headers?, body }\n//   response = { status, body }\n\nconst users = [\n  { userName: \"ada\", password: \"mainframe\" },\n  { userName: \"bo\", password: \"hunter2\" }\n];\n\nlet activeTokens = []; // every token you hand out lives here\n\nfunction handleRequest(req) {\n  if (req.method === \"POST\" && req.path === \"/api/login\") {\n    const creds = req.body || {};\n    const found = users.find(u => u.userName === creds.userName && u.password === creds.password);\n    if (!found) return { status: 401, body: { error: \"invalid credentials\" } };\n    const token = \"token-\" + found.userName;\n    if (!activeTokens.includes(token)) activeTokens.push(token);\n    return { status: 200, body: { token: token } };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\n// a failed login, for the console:\nconsole.log(handleRequest({ method: \"POST\", path: \"/api/login\", body: { userName: \"ada\", password: \"wrong\" } }));\n"
      }
    },

    {
      id: "srv-u5-2",
      title: "Protecting routes",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "A token is only useful if some door checks for it. Since Unit 3, requests carry `headers` — and the token rides in `req.headers.authorization`.\n\nBuild `isAuthorized(req)`, one honest bouncer: `req.headers` exists **and** its token is on the `activeTokens` list. Then guard `GET /api/secret` with it — pass and you get the goods, fail and you get the standard rejection: `{ status: 401, body: { error: \"unauthorized\" } }`.\n\nOne trap with real-world teeth: some requests arrive with **no headers object at all**. Read `req.headers.authorization` without a guard and your server crashes — and attackers adore servers that crash.",
      steps: [
        { text: "Write `isAuthorized(req)` — truthy only when `req.headers` exists and `req.headers.authorization` is in `activeTokens`. It must survive a request with no headers at all.",
          test: "T.expect(typeof isAuthorized === 'function', 'Define isAuthorized(req).');\nT.expect(isAuthorized({ headers: { authorization: 'token-ada' } }), 'token-ada is on the activeTokens list — isAuthorized should say yes');\nT.expect(isAuthorized({ headers: { authorization: 'token-bo' } }), 'token-bo is valid too');\nT.expect(!isAuthorized({ headers: { authorization: 'token-hax' } }), 'A token you never issued must be rejected');\nT.expect(!isAuthorized({ headers: {} }), 'No authorization header → not authorized');\nvar crashed = false; var out = null;\ntry { out = isAuthorized({ method: 'GET', path: '/api/secret' }); } catch (e) { crashed = true; }\nT.expect(!crashed, 'isAuthorized must NOT crash when req has no headers object — guard with req.headers && …');\nT.expect(!out, 'No headers object → not authorized');" },
        { text: "`GET /api/secret` with a valid token → `{ status: 200, body: { secret: \"the cake is real\" } }`.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/secret', headers: { authorization: 'token-ada' }, body: null });\nT.eq(res, { status: 200, body: { secret: 'the cake is real' } }, 'A valid token unlocks the secret — yours returned ' + JSON.stringify(res));" },
        { text: "Missing or unknown token → the exact 401 envelope.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/secret', headers: { authorization: 'token-hax' }, body: null }), { status: 401, body: { error: 'unauthorized' } }, 'Unknown token → { status: 401, body: { error: \"unauthorized\" } }');\nT.eq(handleRequest({ method: 'GET', path: '/api/secret', headers: {}, body: null }), { status: 401, body: { error: 'unauthorized' } }, 'Missing authorization header → 401');\nT.eq(handleRequest({ method: 'GET', path: '/api/secret', body: null }), { status: 401, body: { error: 'unauthorized' } }, 'No headers object at all → still a calm 401, not a crash');" },
        { text: "A valid token does not invent routes — everything else is still a 404.",
          test: "T.eq(handleRequest({ method: 'POST', path: '/api/secret', headers: { authorization: 'token-ada' }, body: null }), { status: 404, body: 'Not found' }, 'Only GET /api/secret exists — POST is a 404');\nT.eq(handleRequest({ method: 'GET', path: '/api/other', headers: { authorization: 'token-ada' }, body: null }), { status: 404, body: 'Not found' }, 'Unknown paths → 404, valid token or not');" }
      ],
      files: [
        { name: "script.js", content: "// Imagine the logins already happened — these tokens are live:\nlet activeTokens = [\"token-ada\", \"token-bo\"];\n\nfunction isAuthorized(req) {\n  // truthy only when req.headers exists AND\n  // req.headers.authorization is in activeTokens\n  // hint: return !!(req.headers && activeTokens.includes(…));\n}\n\nfunction handleRequest(req) {\n  // GET /api/secret, guarded by isAuthorized(req):\n  //   authorized → { status: 200, body: { secret: \"the cake is real\" } }\n  //   not        → { status: 401, body: { error: \"unauthorized\" } }\n  // anything else → { status: 404, body: \"Not found\" }\n}\n\n// a rejected knock, for the console:\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/secret\", headers: {}, body: null }));\n" }
      ],
      hints: [
        "The one-liner: `return !!(req.headers && activeTokens.includes(req.headers.authorization));` — the `&&` guard is exactly what stops the no-headers crash.",
        "Reject FIRST, then the happy path: `if (!isAuthorized(req)) return { status: 401, body: { error: \"unauthorized\" } };`",
        "The secret branch only matches `req.method === \"GET\" && req.path === \"/api/secret\"` — everything else falls through to the 404 line."
      ],
      solution: {
        "script.js": "// Imagine the logins already happened — these tokens are live:\nlet activeTokens = [\"token-ada\", \"token-bo\"];\n\nfunction isAuthorized(req) {\n  return !!(req.headers && activeTokens.includes(req.headers.authorization));\n}\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/secret\") {\n    if (!isAuthorized(req)) return { status: 401, body: { error: \"unauthorized\" } };\n    return { status: 200, body: { secret: \"the cake is real\" } };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\n// a rejected knock, for the console:\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/secret\", headers: {}, body: null }));\n"
      }
    },

    {
      id: "srv-u5-3",
      title: "Per-user data",
      kind: "js", chip: "SERVER", xp: 15, mins: 14,
      brief: "Knowing a token is valid is half the job. The other half: **whose** is it? Our fixed tokens encode the answer — `\"token-ada\"` → `\"ada\"` — so `tokenToUserName` is a guest-list check plus a `slice`.\n\nThat lookup unlocks the pattern behind every \"My stuff\" page on the internet: **the store is shared, the view is filtered**. `GET /api/mynotes` never takes a userName parameter — asking clients who they are is how data leaks. The token decides, the server filters the `notes` store by `userName`, and ada can't see bo's ferns no matter what she sends.",
      steps: [
        { text: "Write `tokenToUserName(token)` — a valid token maps to its userName; anything else (including `undefined`) maps to `null`.",
          test: "T.expect(typeof tokenToUserName === 'function', 'Define tokenToUserName(token).');\nT.eq(tokenToUserName('token-ada'), 'ada', 'token-ada belongs to ada');\nT.eq(tokenToUserName('token-bo'), 'bo', 'token-bo belongs to bo');\nT.eq(tokenToUserName('token-hax'), null, 'A token you never issued maps to null — check activeTokens BEFORE slicing');\nT.eq(tokenToUserName(undefined), null, 'undefined (no header sent) must map to null, not crash');" },
        { text: "`GET /api/mynotes` as ada → 200 with **exactly** her two notes, in store order.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/mynotes', headers: { authorization: 'token-ada' }, body: null });\nT.eq(res, { status: 200, body: [ { id: 1, userName: 'ada', text: 'prove the lemma' }, { id: 3, userName: 'ada', text: 'rebuild the engine' } ] }, 'ada sees exactly notes 1 and 3 — yours returned ' + JSON.stringify(res));" },
        { text: "The same route as bo → **only** his note. Isolation, proven.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/mynotes', headers: { authorization: 'token-bo' }, body: null });\nT.eq(res, { status: 200, body: [ { id: 2, userName: 'bo', text: 'water the ferns' } ] }, \"bo sees ONLY note 2 — ada's notes must never leak across accounts\");" },
        { text: "Invalid or missing token → the 401 envelope; unknown routes still 404.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/api/mynotes', headers: { authorization: 'token-hax' }, body: null }), { status: 401, body: { error: 'unauthorized' } }, 'Invalid token → { status: 401, body: { error: \"unauthorized\" } }');\nT.eq(handleRequest({ method: 'GET', path: '/api/mynotes', body: null }), { status: 401, body: { error: 'unauthorized' } }, 'No headers at all → a calm 401, not a crash');\nT.eq(handleRequest({ method: 'GET', path: '/api/notes', headers: { authorization: 'token-ada' }, body: null }), { status: 404, body: 'Not found' }, 'Unknown paths still → 404 \"Not found\"');" }
      ],
      files: [
        { name: "script.js", content: "let activeTokens = [\"token-ada\", \"token-bo\"];\n\n// ONE shared store — every user's notes live together:\nconst notes = [\n  { id: 1, userName: \"ada\", text: \"prove the lemma\" },\n  { id: 2, userName: \"bo\",  text: \"water the ferns\" },\n  { id: 3, userName: \"ada\", text: \"rebuild the engine\" }\n];\n\nfunction tokenToUserName(token) {\n  // not in activeTokens → null\n  // otherwise \"token-ada\" → \"ada\"   (hint: \"token-\" is 6 characters)\n}\n\nfunction handleRequest(req) {\n  // GET /api/mynotes:\n  //   1) read the token (guard req.headers!) and look up the userName\n  //   2) no userName → { status: 401, body: { error: \"unauthorized\" } }\n  //   3) otherwise   → 200 with ONLY that user's notes (filter the store)\n  // anything else → { status: 404, body: \"Not found\" }\n}\n\n// ada checks her notes:\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/mynotes\", headers: { authorization: \"token-ada\" }, body: null }));\n" }
      ],
      hints: [
        "`\"token-ada\".slice(6)` chops off the 6 characters of `\"token-\"` and leaves `\"ada\"`. But slice ONLY after the guest-list check: `if (!activeTokens.includes(token)) return null;`",
        "In the route, the usual guard first: `const authToken = req.headers && req.headers.authorization;` then `const userName = tokenToUserName(authToken); if (!userName) return { status: 401, body: { error: \"unauthorized\" } };`",
        "The filtered view: `return { status: 200, body: notes.filter(n => n.userName === userName) };` — the shared store stays intact; each caller gets their own slice of it."
      ],
      solution: {
        "script.js": "let activeTokens = [\"token-ada\", \"token-bo\"];\n\n// ONE shared store — every user's notes live together:\nconst notes = [\n  { id: 1, userName: \"ada\", text: \"prove the lemma\" },\n  { id: 2, userName: \"bo\",  text: \"water the ferns\" },\n  { id: 3, userName: \"ada\", text: \"rebuild the engine\" }\n];\n\nfunction tokenToUserName(token) {\n  if (!activeTokens.includes(token)) return null;\n  return token.slice(6); // \"token-ada\" → \"ada\"\n}\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/mynotes\") {\n    const authToken = req.headers && req.headers.authorization;\n    const userName = tokenToUserName(authToken);\n    if (!userName) return { status: 401, body: { error: \"unauthorized\" } };\n    return { status: 200, body: notes.filter(n => n.userName === userName) };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\n// ada checks her notes:\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/mynotes\", headers: { authorization: \"token-ada\" }, body: null }));\n"
      }
    },

    {
      id: "srv-u5-4",
      title: "Logout",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Every login needs an exit. In a token system, logout is beautifully small: **delete the token server-side**. `POST /api/logout` reads the caller's token, checks it's real, and filters it out of `activeTokens`. From that instant, the exact string that opened `/api/secret` bounces off with a 401 — even though the client still \"has\" it.\n\nThat's the superpower tokens have over passwords: **revocation**. Stolen token? Delete it, done. Note the store is declared with `let` — `filter` builds a *new* array, and this is the lesson where the guest list finally shrinks.",
      steps: [
        { text: "While logged in, `token-ada` opens `GET /api/secret` → 200 with the secret.",
          test: "T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');\nvar res = handleRequest({ method: 'GET', path: '/api/secret', headers: { authorization: 'token-ada' }, body: null });\nT.eq(res, { status: 200, body: { secret: 'the cake is real' } }, 'Before logout, token-ada should unlock the secret — yours returned ' + JSON.stringify(res));" },
        { text: "`POST /api/logout` with a live token → `{ status: 200, body: { ok: true } }` — and the token leaves `activeTokens`.",
          test: "var res = handleRequest({ method: 'POST', path: '/api/logout', headers: { authorization: 'token-ada' }, body: null });\nT.eq(res, { status: 200, body: { ok: true } }, 'Logout with a live token answers 200 { ok: true }');\nT.expect(!activeTokens.includes('token-ada'), 'Logout must REMOVE the token — activeTokens still contains token-ada');\nT.expect(activeTokens.includes('token-bo'), \"Only ada logged out — bo's token must survive the filter\");" },
        { text: "The **same** token that worked in step 1 now gets the 401 envelope; bo still gets in.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/secret', headers: { authorization: 'token-ada' }, body: null });\nT.eq(res, { status: 401, body: { error: 'unauthorized' } }, 'The SAME token that worked in step 1 must be dead now — that is the whole point of logout');\nT.eq(handleRequest({ method: 'GET', path: '/api/secret', headers: { authorization: 'token-bo' }, body: null }), { status: 200, body: { secret: 'the cake is real' } }, 'bo never logged out — he still gets 200');" },
        { text: "Logout is a protected route too: dead/missing token → 401. And only POST logs out.",
          test: "T.eq(handleRequest({ method: 'POST', path: '/api/logout', headers: { authorization: 'token-ada' }, body: null }), { status: 401, body: { error: 'unauthorized' } }, 'Logging out twice: the token is already gone → 401');\nT.eq(handleRequest({ method: 'POST', path: '/api/logout', body: null }), { status: 401, body: { error: 'unauthorized' } }, 'Logout with no headers at all → a calm 401');\nT.eq(handleRequest({ method: 'GET', path: '/api/logout', headers: { authorization: 'token-bo' }, body: null }), { status: 404, body: 'Not found' }, 'Only POST logs out — GET /api/logout is a 404');" }
      ],
      files: [
        { name: "script.js", content: "let activeTokens = [\"token-ada\", \"token-bo\"]; // let — logout shrinks this\n\nfunction handleRequest(req) {\n  // read the token ONCE, up top:\n  //   const authToken = req.headers && req.headers.authorization;\n  //   const authorized = activeTokens.includes(authToken);\n  //\n  // GET  /api/secret → authorized? { status: 200, body: { secret: \"the cake is real\" } }\n  //                    : { status: 401, body: { error: \"unauthorized\" } }\n  // POST /api/logout → authorized? remove authToken from activeTokens,\n  //                    answer { status: 200, body: { ok: true } }\n  //                    : the same 401 envelope\n  // anything else    → { status: 404, body: \"Not found\" }\n}\n\n// ada, still logged in, peeks at the secret:\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/secret\", headers: { authorization: \"token-ada\" }, body: null }));\n" }
      ],
      hints: [
        "Read the token once at the top: `const authToken = req.headers && req.headers.authorization; const authorized = activeTokens.includes(authToken);` — both routes need it.",
        "The delete: `activeTokens = activeTokens.filter(t => t !== authToken);` — filter returns a NEW array, which is exactly why activeTokens is declared with `let`.",
        "Logout is protected too: `if (!authorized) return { status: 401, body: { error: \"unauthorized\" } };` comes BEFORE you touch the list."
      ],
      solution: {
        "script.js": "let activeTokens = [\"token-ada\", \"token-bo\"]; // let — logout shrinks this\n\nfunction handleRequest(req) {\n  const authToken = req.headers && req.headers.authorization;\n  const authorized = activeTokens.includes(authToken);\n\n  if (req.method === \"GET\" && req.path === \"/api/secret\") {\n    if (!authorized) return { status: 401, body: { error: \"unauthorized\" } };\n    return { status: 200, body: { secret: \"the cake is real\" } };\n  }\n\n  if (req.method === \"POST\" && req.path === \"/api/logout\") {\n    if (!authorized) return { status: 401, body: { error: \"unauthorized\" } };\n    activeTokens = activeTokens.filter(t => t !== authToken);\n    return { status: 200, body: { ok: true } };\n  }\n\n  return { status: 404, body: \"Not found\" };\n}\n\n// ada, still logged in, peeks at the secret:\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/secret\", headers: { authorization: \"token-ada\" }, body: null }));\n"
      }
    },

    {
      id: "srv-quiz-5",
      title: "Unit 5 quiz: Auth",
      kind: "quiz", xp: 10,
      brief: "Tokens, headers, 401s and why plain-text passwords are a crime.",
      questions: [
        { q: "Why does the server hand out a **token** at login instead of asking for the password on every request?",
          choices: [
            "Tokens are shorter, so they save bandwidth",
            "Passwords expire after a single use",
            "The password travels ONCE; after that a revocable stand-in does the work — and logout just deletes it",
            "Tokens are encrypted copies of the password"
          ],
          answer: 2, explain: "Every request that carries the password is one more chance to leak it. A token limits exposure — and you can kill a stolen token without forcing a password change." },
        { q: "Where does the client carry its token on every request after login?",
          choices: [
            "In the URL path",
            "In the authorization header — req.headers.authorization",
            "In the response body",
            "In a global variable on the server"
          ],
          answer: 1, explain: "Real APIs write it as `Authorization: Bearer <token>`. Never the URL — URLs end up in logs, history and screenshots." },
        { q: "**401** vs **403** — what's the difference?",
          choices: [
            "They're interchangeable",
            "401 is a server bug, 403 is a client bug",
            "403 means the page moved permanently",
            "401 = \"who are you?\" (missing/bad token) · 403 = \"I know who you are — and no\" (valid login, missing permission)"
          ],
          answer: 3, explain: "This unit is all 401s. The day you add roles — \"only admins may delete\" — the valid-but-forbidden case becomes your first 403." },
        { q: "Why is storing passwords in plain text a crime (conceptually)?",
          choices: [
            "One database leak exposes every password — including the ones users reuse on their bank",
            "Plain text takes more disk space than encryption",
            "JavaScript strings can't store passwords safely",
            "It's fine as long as the file is named secrets.js"
          ],
          answer: 0, explain: "Real servers store slow-to-reverse HASHES (bcrypt and friends) and compare hashes at login. Our users array is a teaching prop — never ship it." },
        { q: "In our token system, what actually happens at logout?",
          choices: [
            "The client deletes its password",
            "The server restarts to clear memory",
            "The server removes the token from activeTokens — every later request carrying it gets a 401",
            "The token turns into a 404"
          ],
          answer: 2, explain: "Invalidation is a server-side delete. The client can keep the string forever; it just doesn't open doors anymore. Same one-liner kills a STOLEN token." },
        { q: "A request arrives with **no `headers` object at all**. What does this guard do?",
          code: "function isAuthorized(req) {\n  return activeTokens.includes(req.headers.authorization);\n}",
          lang: "js",
          choices: [
            "Returns false, as intended",
            "Crashes — reading .authorization of undefined throws; guard with req.headers && … first",
            "Automatically answers 401",
            "Logs the user out"
          ],
          answer: 1, explain: "Never trust a request to be well-formed. `!!(req.headers && activeTokens.includes(req.headers.authorization))` fails calm instead of failing loud." }
      ]
    }
  ]
});
