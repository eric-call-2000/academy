/* Authentication — Unit 1: Sessions, server side */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* auth-u1-2's solution, handed to every later lesson in the unit. */
  var COOKIE_LIB = L(
    "// ---- from auth-u1-2: the Set-Cookie header, by hand ----",
    "const COOKIE_NAME = /^[!#$%&'*+\\-.^_`|~0-9A-Za-z]+$/;",
    "const COOKIE_VALUE = /^[\\x21\\x23-\\x2B\\x2D-\\x3A\\x3C-\\x5B\\x5D-\\x7E]*$/;",
    "",
    "function serializeCookie(name, value, opts) {",
    "  opts = opts || {};",
    "  value = String(value);",
    "  if (typeof name !== \"string\" || !COOKIE_NAME.test(name)) throw new TypeError(\"invalid cookie name: \" + JSON.stringify(name));",
    "  if (!COOKIE_VALUE.test(value)) throw new TypeError(\"invalid cookie value: \" + JSON.stringify(value));",
    "  const parts = [name + \"=\" + value];",
    "  if (opts.path != null) parts.push(\"Path=\" + opts.path);",
    "  if (opts.maxAge != null) parts.push(\"Max-Age=\" + Math.floor(opts.maxAge));",
    "  if (opts.httpOnly) parts.push(\"HttpOnly\");",
    "  if (opts.secure) parts.push(\"Secure\");",
    "  if (opts.sameSite != null) {",
    "    if ([\"Strict\", \"Lax\", \"None\"].indexOf(opts.sameSite) === -1) throw new TypeError(\"SameSite must be Strict, Lax or None\");",
    "    if (opts.sameSite === \"None\" && !opts.secure) throw new TypeError(\"SameSite=None requires Secure\");",
    "    parts.push(\"SameSite=\" + opts.sameSite);",
    "  }",
    "  return parts.join(\"; \");",
    "}",
    "",
    "function parseCookieHeader(header) {",
    "  const jar = {};",
    "  if (!header) return jar;",
    "  for (const part of header.split(\";\")) {",
    "    const eq = part.indexOf(\"=\");",
    "    if (eq === -1) continue;",
    "    const key = part.slice(0, eq).trim();",
    "    if (key && !Object.prototype.hasOwnProperty.call(jar, key)) jar[key] = part.slice(eq + 1).trim();",
    "  }",
    "  return jar;",
    "}",
    "");

  var USERS = L(
    "// Plaintext only because srv-u5-1's were — sec-u6-3 is how to store these.",
    "const users = [",
    "  { userName: \"ada\", password: \"mainframe\" },",
    "  { userName: \"bo\", password: \"hunter2\" }",
    "];",
    "");

  var SESSIONS = L(
    "const sessions = new Map(); // sid -> { userName, cart, created, lastSeen }",
    "",
    "function createSession(userName, cart) {",
    "  const id = randHex(16);",
    "  sessions.set(id, { userName: userName, cart: cart || [], created: now(), lastSeen: now() });",
    "  return id;",
    "}",
    "",
    "function sessionCookie(id) {",
    "  return serializeCookie(\"sid\", id, { path: \"/\", maxAge: 1800, httpOnly: true, secure: true, sameSite: \"Lax\" });",
    "}",
    "");

  /* ---------- auth-u1-1 ---------- */
  function u1File(createBody) {
    return L(
      "// Auth-lite (srv-u5) handed out \"token-\" + userName. Anyone could type the next one.",
      USERS,
      "const sessions = new Map(); // session id -> { userName, created, lastSeen }",
      "",
      "function createSession(userName) {",
      createBody,
      "}",
      "",
      "function handleRequest(req) {",
      "  if (req.method === \"POST\" && req.path === \"/api/login\") {",
      "    const body = req.body || {};",
      "    const user = users.find(u => u.userName === body.userName && u.password === body.password);",
      "    if (!user) return { status: 401, body: { error: \"invalid credentials\" } };",
      "    return { status: 200, body: { sessionId: createSession(user.userName) } };",
      "  }",
      "  if (req.method === \"GET\" && req.path === \"/api/me\") {",
      "    const row = sessions.get(req.headers && req.headers.authorization);",
      "    if (!row) return { status: 401, body: { error: \"unauthorized\" } };",
      "    return { status: 200, body: { userName: row.userName } };",
      "  }",
      "  return { status: 404, body: \"Not found\" };",
      "}",
      "",
      "console.log(handleRequest({ method: \"POST\", path: \"/api/login\", headers: {}, body: { userName: \"ada\", password: \"mainframe\" } }));",
      "");
  }

  /* ---------- auth-u1-3 ---------- */
  function u3File(loginBody) {
    return L(
      "// Session fixation. Requests carry cookies as headers.cookie (lower-case, the way",
      "// Node hands them over); responses set headers[\"Set-Cookie\"].",
      COOKIE_LIB,
      USERS,
      SESSIONS,
      "function currentId(req) {",
      "  const id = parseCookieHeader(req.headers && req.headers.cookie).sid;",
      "  return id && sessions.has(id) ? id : null;",
      "}",
      "",
      "function handleRequest(req) {",
      "  // Every visitor gets an anonymous session on first sight, so the cart works before login.",
      "  if (req.method === \"GET\" && req.path === \"/\") {",
      "    const id = currentId(req) || createSession(null, []);",
      "    return { status: 200, headers: { \"Set-Cookie\": sessionCookie(id) }, body: \"welcome\" };",
      "  }",
      "  if (req.method === \"POST\" && req.path === \"/api/cart\") {",
      "    const id = currentId(req);",
      "    if (!id) return { status: 401, body: { error: \"unauthorized\" } };",
      "    sessions.get(id).cart.push((req.body || {}).item);",
      "    return { status: 200, body: { cart: sessions.get(id).cart } };",
      "  }",
      "  if (req.method === \"POST\" && req.path === \"/api/login\") {",
      "    const body = req.body || {};",
      "    const user = users.find(u => u.userName === body.userName && u.password === body.password);",
      "    if (!user) return { status: 401, body: { error: \"invalid credentials\" } };",
      loginBody,
      "  }",
      "  if (req.method === \"GET\" && req.path === \"/api/me\") {",
      "    const id = currentId(req);",
      "    const row = id && sessions.get(id);",
      "    if (!row || !row.userName) return { status: 401, body: { error: \"unauthorized\" } };",
      "    return { status: 200, body: { userName: row.userName, cart: row.cart } };",
      "  }",
      "  return { status: 404, body: \"Not found\" };",
      "}",
      "",
      "console.log(handleRequest({ method: \"GET\", path: \"/\", headers: {}, body: null }));",
      "");
  }

  /* ---------- auth-u1-4 ---------- */
  function u4File(touchBody) {
    return L(
      "// Two clocks on every session. now() is the course clock; the checks move it.",
      COOKIE_LIB,
      SESSIONS,
      "const IDLE_MS = 30 * 60 * 1000;          // 30 minutes without a request",
      "const ABSOLUTE_MS = 8 * 60 * 60 * 1000;  // 8 hours after it began, however busy",
      "",
      "// Return the live row for this id, or null. A dead row is deleted on sight.",
      "function touchSession(id) {",
      touchBody,
      "}",
      "",
      "function handleRequest(req) {",
      "  if (req.method === \"GET\" && req.path === \"/api/me\") {",
      "    const id = parseCookieHeader(req.headers && req.headers.cookie).sid;",
      "    const row = id ? touchSession(id) : null;",
      "    if (!row) return { status: 401, body: { error: \"unauthorized\" } };",
      "    return { status: 200, body: { userName: row.userName } };",
      "  }",
      "  return { status: 404, body: \"Not found\" };",
      "}",
      "",
      "const demo = createSession(\"ada\", []);",
      "console.log(handleRequest({ method: \"GET\", path: \"/api/me\", headers: { cookie: \"sid=\" + demo }, body: null }));",
      "");
  }

  /* ---------- auth-u1-5 ---------- */
  function u5File(logoutRoutes) {
    return L(
      "// Logout has a server half and a browser half.",
      COOKIE_LIB,
      SESSIONS,
      "function currentId(req) {",
      "  const id = parseCookieHeader(req.headers && req.headers.cookie).sid;",
      "  return id && sessions.has(id) ? id : null;",
      "}",
      "",
      "function handleRequest(req) {",
      "  if (req.method === \"GET\" && req.path === \"/api/me\") {",
      "    const id = currentId(req);",
      "    if (!id) return { status: 401, body: { error: \"unauthorized\" } };",
      "    return { status: 200, body: { userName: sessions.get(id).userName } };",
      "  }",
      logoutRoutes,
      "  return { status: 404, body: \"Not found\" };",
      "}",
      "",
      "const demo = createSession(\"ada\", []);",
      "console.log(handleRequest({ method: \"POST\", path: \"/api/logout\", headers: { cookie: \"sid=\" + demo }, body: null }));",
      "");
  }

  window.CODELAB.addUnit("auth", {
    id: "auth-u1",
    title: "Sessions, server side",
    icon: "🗂️",
    blurb: "A session is a row on the server; the cookie only holds its name. Unguessable ids, a hand-written Set-Cookie, rotation at login, both timeouts, and a logout that actually ends something.",
    cheat: [
      { h: "A session is a row, not a token", lang: "js", code: L(
        "const sessions = new Map();             // sid -> row",
        "const sid = randHex(16);                // 128 random bits",
        "sessions.set(sid, { userName: \"ada\", created: now(), lastSeen: now() });",
        "// the client holds only sid; the row says who they are"),
        note: "Never derive the id from the user, a counter or the time. Use a Map, not {} — on a plain object, sessions[\"constructor\"] is already truthy." },
      { h: "Set-Cookie, by hand", lang: "js", code: L(
        "serializeCookie(\"sid\", sid, { path: \"/\", maxAge: 1800, httpOnly: true, secure: true, sameSite: \"Lax\" })",
        "// \"sid=…; Path=/; Max-Age=1800; HttpOnly; Secure; SameSite=Lax\"",
        "parseCookieHeader(\"sid=abc; theme=dark\")  // { sid: \"abc\", theme: \"dark\" }"),
        note: "Max-Age is in seconds and 0 deletes, so test `!= null`, not truthiness. A value can't hold spaces, \" , ; or \\ — throw rather than guess. SameSite=None needs Secure." },
      { h: "Rotate the id at login", lang: "js", code: L(
        "const cart = sessions.get(oldId).cart;",
        "sessions.delete(oldId);                     // a planted id now points at nothing",
        "const id = createSession(user.userName, cart);",
        "return { status: 200, headers: { \"Set-Cookie\": sessionCookie(id) }, body: { ok: true } };"),
        note: "Session fixation plants an id before login. Rotate at every privilege change: login, becoming an admin, passing a second factor." },
      { h: "Two clocks", lang: "js", code: L(
        "const t = now();",
        "if (t - row.lastSeen >= IDLE_MS ||      // 30 min without a request",
        "    t - row.created  >= ABSOLUTE_MS) {  // 8 h after it began, however busy",
        "  sessions.delete(id); return null;",
        "}",
        "row.lastSeen = t;                       // only a live session slides"),
        note: "Idle alone lets a script keep a stolen id warm forever. The absolute limit is what ends it." },
      { h: "Logout: both halves", lang: "js", code: L(
        "sessions.delete(id);   // server: the id means nothing now",
        "headers[\"Set-Cookie\"] = serializeCookie(\"sid\", \"\", { path: \"/\", maxAge: 0, httpOnly: true, secure: true, sameSite: \"Lax\" });",
        "// \"sign out everywhere\": delete every row whose userName matches"),
        note: "Clearing only the cookie leaves every copy of the id working. The clearing cookie must use the same Path it was set with." }
    ],
    lessons: [

      {
        id: "auth-u1-1",
        title: "A session is a row, not a token",
        kind: "js", chip: "AUTH", xp: 15, mins: 11,
        crypto: true, clock: 1700000000000,
        brief: "Auth-lite (`srv-u5-1`) handed ada the token `\"token-ada\"`. It worked, and anyone who has seen one token can type the next: `token-bo` is bo's account, no password asked. The token *was* the identity.\n\nA **session** splits that in two. The server keeps a **row**: who you are, when the session started, when it was last used. The client holds only the row's **id**. An id is worth something only if nobody can guess it, so it comes from a cryptographic random source. `randHex(16)` is 16 random bytes: 32 hex characters, 128 bits, well above OWASP's floor of 64 bits of entropy. The id says nothing about the user; the row does.\n\nWrite `createSession(userName)`: make the id, store `{ userName, created, lastSeen }` in the `sessions` Map with both times set to `now()`, and return the id. `now()` is this course's clock, a fake one the checks can move forward, so later expiry lessons behave the same on every run. The login route and `GET /api/me` already use `createSession`.\n\nWhy a `Map` and not `{}`? On a plain object, `sessions[\"constructor\"]` is a function, which is truthy. A lookup by an attacker-chosen key should never find something you didn't put there.",
        steps: [
          { text: "`createSession(\"ada\")` returns 32 lowercase hex characters, and a second session for ada gets a different id.",
            test: L(
              "T.expect(typeof createSession === 'function', 'Define createSession(userName).');",
              "var a = createSession('ada'), b = createSession('ada');",
              "T.expect(typeof a === 'string' && /^[0-9a-f]{32}$/.test(a), 'A session id should be 32 lowercase hex characters, from randHex(16) — yours was ' + JSON.stringify(a));",
              "T.expect(a !== b, 'Two sessions for the same user must get different ids — both were ' + JSON.stringify(a) + '. An id built from the user name is guessable.');") },
          { text: "The row: `sessions.get(id)` is `{ userName, created, lastSeen }`, with both times from `now()`.",
            test: L(
              "sessions.clear();",
              "T.advance(5000);",
              "var id = createSession('bo');",
              "T.expect(sessions.has(id), 'createSession must store the row in the sessions Map, under the id it returns');",
              "T.eq(sessions.get(id), { userName: 'bo', created: now(), lastSeen: now() }, 'The row for bo should be { userName, created: now(), lastSeen: now() }, in that order');",
              "T.eq(sessions.size, 1, 'One createSession call, one row');") },
          { text: "Log in, then use the id: `GET /api/me` with it in the `authorization` header answers ada.",
            test: L(
              "var res = handleRequest({ method: 'POST', path: '/api/login', headers: {}, body: { userName: 'ada', password: 'mainframe' } });",
              "T.eq(res.status, 200, 'ada + mainframe should log in — got ' + JSON.stringify(res));",
              "T.eq(Object.keys(res.body), ['sessionId'], 'The login body carries only the session id; who the user is stays in the row');",
              "var me = handleRequest({ method: 'GET', path: '/api/me', headers: { authorization: res.body.sessionId }, body: null });",
              "T.eq(me, { status: 200, body: { userName: 'ada' } }, 'GET /api/me with the new id should answer ada');") },
          { text: "The Auth-lite guess stops working: `token-bo`, `token-ada`, `constructor` and a real id with one character changed all get the 401.",
            test: L(
              "var res = handleRequest({ method: 'POST', path: '/api/login', headers: {}, body: { userName: 'bo', password: 'hunter2' } });",
              "var id = String(res.body && res.body.sessionId);",
              "['token-bo', 'token-ada', 'constructor', (id[0] === '0' ? '1' : '0') + id.slice(1)].forEach(function (guess) {",
              "  var r = handleRequest({ method: 'GET', path: '/api/me', headers: { authorization: guess }, body: null });",
              "  T.eq(r, { status: 401, body: { error: 'unauthorized' } }, 'Guessing ' + JSON.stringify(guess) + ' must get the 401 — it returned ' + JSON.stringify(r));",
              "});") }
        ],
        files: [
          { name: "script.js", content: u1File(L(
            "  // It works, and anyone can type it. Make the id unguessable: randHex(16).",
            "  const id = \"token-\" + userName;",
            "  // TODO: the row also records created and lastSeen, both now()",
            "  sessions.set(id, { userName: userName });",
            "  return id;")) }
        ],
        hints: [
          "The id comes from the random source, not the name: `const id = randHex(16);`",
          "The row keeps the times in this order: `sessions.set(id, { userName: userName, created: now(), lastSeen: now() });`",
          "Return the id, not the row. The client only ever holds the id; `handleRequest` looks the row up with `sessions.get(id)`."
        ],
        solution: {
          "script.js": u1File(L(
            "  const id = randHex(16); // 128 random bits: nothing to derive, nothing to guess",
            "  sessions.set(id, { userName: userName, created: now(), lastSeen: now() });",
            "  return id;"))
        }
      },

      {
        id: "auth-u1-2",
        title: "Set-Cookie, written by hand",
        kind: "js", chip: "AUTH", xp: 15, mins: 13,
        brief: "`Set-Cookie` is how a server hands the browser a session id, and every attribute on it is a security decision. Write it by hand once, and nothing a framework writes for you later is magic.\n\n`serializeCookie(name, value, opts)` builds one header value: `name=value`, then one attribute for each option that is set, joined with `\"; \"`.\n\n- `path: \"/\"` → `Path=/`\n- `maxAge: 1800` → `Max-Age=1800`. It's in seconds, and `0` means *delete now*, so a `0` must still be written.\n- `httpOnly: true` → `HttpOnly`; `secure: true` → `Secure`\n- `sameSite: \"Lax\"` → `SameSite=Lax`. Only `Strict`, `Lax` or `None` are allowed; anything else throws. Browsers reject `None` without `Secure`, so throw for that too.\n\nNames and values have a grammar. A value may not contain spaces, `\"`, `,`, `;` or `\\`, and a value like `abc; Domain=evil.example` would smuggle in an attribute of its own. Throw a `TypeError` for a bad name or value instead of guessing an encoding.\n\n`parseCookieHeader(header)` goes the other way. The browser sends `Cookie: sid=abc123; theme=dark`, and you want `{ sid: \"abc123\", theme: \"dark\" }`. Split each pair on its **first** `=` only.\n\nWhat `HttpOnly` protects against was Web Security's `sec-u5-3`, and this course's Unit 2 is where a real cookie jar enforces these rules. Here the job is getting the header exactly right.",
        steps: [
          { text: "All five attributes, spelled exactly: `sid=abc123` first, then `Path=/`, `Max-Age=1800`, `HttpOnly`, `Secure` and `SameSite=Lax` in any order.",
            test: L(
              "T.expect(typeof serializeCookie === 'function', 'Define serializeCookie(name, value, opts).');",
              "var s = serializeCookie('sid', 'abc123', { path: '/', maxAge: 1800, httpOnly: true, secure: true, sameSite: 'Lax' });",
              "T.expect(typeof s === 'string', 'serializeCookie should return a string — got ' + JSON.stringify(s));",
              "var parts = s.split('; ');",
              "T.eq(parts[0], 'sid=abc123', 'The header starts with name=value — yours: ' + JSON.stringify(s));",
              "T.eq(parts.slice(1).sort(), ['HttpOnly', 'Max-Age=1800', 'Path=/', 'SameSite=Lax', 'Secure'], 'Expected exactly Path=/, Max-Age=1800, HttpOnly, Secure and SameSite=Lax, in any order, joined with \"; \" — yours: ' + JSON.stringify(s));",
              "T.eq(serializeCookie('theme', 'dark', {}), 'theme=dark', 'No options → just name=value');") },
          { text: "`maxAge: 0` still writes `Max-Age=0`, which is how a cookie gets deleted. Options that are left out or `false` write nothing.",
            test: L(
              "var s = serializeCookie('sid', '', { path: '/', maxAge: 0 });",
              "T.eq(s.split('; ').sort(), ['Max-Age=0', 'Path=/', 'sid='], 'maxAge: 0 must still be written, because Max-Age=0 is how logout deletes a cookie — yours: ' + JSON.stringify(s));",
              "var t = serializeCookie('sid', 'x', { httpOnly: false, secure: false });",
              "T.eq(t, 'sid=x', 'httpOnly: false and secure: false add nothing — yours: ' + JSON.stringify(t));") },
          { text: "Refuse what the grammar forbids. A value with `;`, a space, `\"` or `,`, a bad name, an unknown SameSite, and `SameSite=None` without `Secure` all throw.",
            test: L(
              "var throws = function (fn) { try { fn(); return false; } catch (e) { return true; } };",
              "['abc; Domain=evil.example', 'two words', 'say\"hi\"', 'a,b'].forEach(function (v) {",
              "  T.expect(throws(function () { serializeCookie('sid', v, {}); }), 'A value of ' + JSON.stringify(v) + ' must throw: it would break the header or smuggle in an attribute');",
              "});",
              "T.expect(throws(function () { serializeCookie('s id', 'x', {}); }), 'A cookie name with a space in it must throw');",
              "T.expect(throws(function () { serializeCookie('', 'x', {}); }), 'An empty cookie name must throw');",
              "T.expect(throws(function () { serializeCookie('sid', 'x', { sameSite: 'lax-ish' }); }), 'SameSite must be Strict, Lax or None; anything else throws');",
              "T.expect(throws(function () { serializeCookie('sid', 'x', { sameSite: 'None' }); }), 'SameSite=None without Secure must throw, because browsers reject that cookie');",
              "T.expect(!throws(function () { serializeCookie('sid', 'AZaz09-_.~!', { sameSite: 'None', secure: true }); }), 'A plain value with SameSite=None and Secure is allowed and must not throw');") },
          { text: "`parseCookieHeader` turns `sid=abc123; theme=dark` into an object, splits on the first `=` only, and treats a missing header as no cookies.",
            test: L(
              "T.expect(typeof parseCookieHeader === 'function', 'Define parseCookieHeader(header).');",
              "var one = parseCookieHeader('sid=abc123; theme=dark');",
              "T.eq(one, { sid: 'abc123', theme: 'dark' }, 'Two cookies → { sid: \"abc123\", theme: \"dark\" } — yours: ' + JSON.stringify(one));",
              "var two = parseCookieHeader('next=/a?b=c; sid=xyz');",
              "T.eq(two, { next: '/a?b=c', sid: 'xyz' }, 'Split on the FIRST = only, since a value may contain = itself — yours: ' + JSON.stringify(two));",
              "T.eq(parseCookieHeader(undefined), {}, 'No Cookie header → {}');",
              "T.eq(parseCookieHeader(''), {}, 'An empty Cookie header → {}');") }
        ],
        files: [
          { name: "script.js", content: L(
            "// Write the Set-Cookie header by hand. Frameworks do this for you; after this",
            "// lesson you will know what every attribute they write is for.",
            "",
            "function serializeCookie(name, value, opts) {",
            "  opts = opts || {};",
            "  let out = name + \"=\" + value;",
            "  if (opts.path) out += \"; Path=\" + opts.path;",
            "  if (opts.maxAge) out += \"; Max-Age=\" + opts.maxAge;",
            "  if (opts.httpOnly) out += \"; HttpOnly\";",
            "  // TODO: Secure, and SameSite (Strict | Lax | None — None requires Secure)",
            "  // TODO: throw a TypeError for a name or value the cookie grammar forbids",
            "  return out;",
            "}",
            "",
            "function parseCookieHeader(header) {",
            "  const jar = {};",
            "  if (!header) return jar;",
            "  for (const part of header.split(\";\")) {",
            "    const [key, val] = part.split(\"=\");",
            "    jar[key.trim()] = val;",
            "  }",
            "  return jar;",
            "}",
            "",
            "console.log(serializeCookie(\"sid\", \"abc123\", { path: \"/\", maxAge: 1800, httpOnly: true, secure: true, sameSite: \"Lax\" }));",
            "console.log(parseCookieHeader(\"sid=abc123; theme=dark\"));",
            "") }
        ],
        hints: [
          "Collect pieces in an array and join once: `const parts = [name + \"=\" + value];` … `return parts.join(\"; \");`. Test `opts.maxAge != null`, not `opts.maxAge`, or `0` disappears.",
          "The grammar as two regexes: names `/^[!#$%&'*+\\-.^_`|~0-9A-Za-z]+$/`, values `/^[\\x21\\x23-\\x2B\\x2D-\\x3A\\x3C-\\x5B\\x5D-\\x7E]*$/` (printable ASCII minus space, `\"`, `,`, `;` and `\\`). Throw `new TypeError(...)` when either fails.",
          "For parsing, find the first `=` with `part.indexOf(\"=\")`, then `part.slice(0, eq).trim()` is the name and `part.slice(eq + 1).trim()` is the value."
        ],
        solution: {
          "script.js": L(
            "// Write the Set-Cookie header by hand. Frameworks do this for you; after this",
            "// lesson you will know what every attribute they write is for.",
            "",
            COOKIE_LIB.split("\n").slice(1).join("\n"),
            "console.log(serializeCookie(\"sid\", \"abc123\", { path: \"/\", maxAge: 1800, httpOnly: true, secure: true, sameSite: \"Lax\" }));",
            "console.log(parseCookieHeader(\"sid=abc123; theme=dark\"));",
            "")
        }
      },

      {
        id: "auth-u1-3",
        title: "Session fixation: rotate the id at login",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        crypto: true, clock: 1700000000000,
        brief: "*A lab against your own sandbox: the attacker is a checkpoint.*\n\nSession fixation doesn't steal a session id. It **plants** one. The attacker visits your site, gets an anonymous `sid`, and gets that same id into the victim's browser, through a sibling subdomain that can set cookies, a site that accepts ids in the URL, or a shared kiosk. Then the victim logs in. If your login marks *the id they arrived with* as authenticated, the attacker's copy of that id is now the victim's account.\n\nThe starter does exactly that: it finds the visitor's current session and sets `userName` on it. The fix is to **rotate**. At login, delete the old row, create a new row with a fresh id, and send that id in a new `Set-Cookie`. The planted id then points at nothing.\n\nOne thing has to survive the move: the cart. The anonymous session exists so a visitor can shop before signing in, so carry `cart` from the old row into the new one.\n\nRequests carry cookies as `headers.cookie` (lower-case, the way Node hands them over), and responses set `headers[\"Set-Cookie\"]`. `serializeCookie` and `parseCookieHeader` are the previous lesson's. Rotate at every privilege change, not only login: the same applies when a user becomes an admin or passes a second factor (Unit 7).",
        steps: [
          { text: "A first visit gets an anonymous session: `Set-Cookie: sid=<32 hex>` with `HttpOnly`, and a row whose `userName` is `null`.",
            test: L(
              "sessions.clear();",
              "var res = handleRequest({ method: 'GET', path: '/', headers: {}, body: null });",
              "var sc = res.headers && res.headers['Set-Cookie'];",
              "T.expect(typeof sc === 'string', 'GET / should set a cookie — got ' + JSON.stringify(res));",
              "var m = /^sid=([0-9a-f]{32});/.exec(sc);",
              "T.expect(!!m, 'The cookie should start sid=<32 hex characters>; — yours: ' + JSON.stringify(sc));",
              "T.expect(sc.split('; ').indexOf('HttpOnly') !== -1, 'The session cookie must be HttpOnly');",
              "T.eq(sessions.get(m[1]).userName, null, 'Before login the row belongs to nobody (userName: null)');") },
          { text: "The attack: the victim logs in carrying the attacker's planted id. That id must **not** become ada's account, and login answers with a *new* `sid`.",
            test: L(
              "sessions.clear();",
              "var sidOf = function (r) { var sc = r && r.headers && r.headers['Set-Cookie']; var m = sc && /^sid=([^;]*)/.exec(sc); return m ? m[1] : null; };",
              "var planted = sidOf(handleRequest({ method: 'GET', path: '/', headers: {}, body: null }));",
              "var login = handleRequest({ method: 'POST', path: '/api/login', headers: { cookie: 'sid=' + planted }, body: { userName: 'ada', password: 'mainframe' } });",
              "T.eq(login.status, 200, 'ada + mainframe should still log in — got ' + JSON.stringify(login));",
              "var attacker = handleRequest({ method: 'GET', path: '/api/me', headers: { cookie: 'sid=' + planted }, body: null });",
              "T.eq(attacker, { status: 401, body: { error: 'unauthorized' } }, 'The attacker replayed the id they planted and got ' + JSON.stringify(attacker) + ', the account ada just signed into. Login must rotate the id');",
              "var fresh = sidOf(login);",
              "T.expect(!!fresh && /^[0-9a-f]{32}$/.test(fresh), 'Login must send a new session cookie (Set-Cookie: sid=...) — yours sent headers ' + JSON.stringify(login.headers || null));",
              "T.expect(fresh !== planted, 'The new sid must differ from the one the visitor arrived with');") },
          { text: "The new id is ada's, the cart from before login came along, and the old row is gone from `sessions`.",
            test: L(
              "sessions.clear();",
              "var sidOf = function (r) { var sc = r && r.headers && r.headers['Set-Cookie']; var m = sc && /^sid=([^;]*)/.exec(sc); return m ? m[1] : null; };",
              "var anon = sidOf(handleRequest({ method: 'GET', path: '/', headers: {}, body: null }));",
              "handleRequest({ method: 'POST', path: '/api/cart', headers: { cookie: 'sid=' + anon }, body: { item: 'lamp' } });",
              "var login = handleRequest({ method: 'POST', path: '/api/login', headers: { cookie: 'sid=' + anon }, body: { userName: 'ada', password: 'mainframe' } });",
              "var fresh = sidOf(login);",
              "var me = handleRequest({ method: 'GET', path: '/api/me', headers: { cookie: 'sid=' + fresh }, body: null });",
              "T.eq(me, { status: 200, body: { userName: 'ada', cart: ['lamp'] } }, 'The new sid should be ada, still holding the lamp added before signing in');",
              "T.expect(!sessions.has(anon), 'Delete the old row at login. The old id must stop existing on the server, not just stop being sent');",
              "T.eq(sessions.size, 1, 'One visitor, one row after login');") },
          { text: "A failed login changes nothing: the usual 401, no new cookie, and the anonymous session is still anonymous.",
            test: L(
              "sessions.clear();",
              "var first = handleRequest({ method: 'GET', path: '/', headers: {}, body: null });",
              "var anon = /^sid=([^;]*)/.exec(first.headers['Set-Cookie'])[1];",
              "var bad = handleRequest({ method: 'POST', path: '/api/login', headers: { cookie: 'sid=' + anon }, body: { userName: 'ada', password: 'wrong' } });",
              "T.eq(bad, { status: 401, body: { error: 'invalid credentials' } }, 'Wrong password → the srv-u5-1 401, with no Set-Cookie');",
              "T.expect(sessions.has(anon) && sessions.get(anon).userName === null, 'A failed login must leave the anonymous session exactly as it was');") }
        ],
        files: [
          { name: "script.js", content: u3File(L(
            "    const id = currentId(req);",
            "    if (id) {",
            "      // The id the visitor arrived with is now logged in. So is whoever chose it.",
            "      sessions.get(id).userName = user.userName;",
            "      return { status: 200, body: { ok: true } };",
            "    }",
            "    return { status: 200, headers: { \"Set-Cookie\": sessionCookie(createSession(user.userName, [])) }, body: { ok: true } };")) }
        ],
        hints: [
          "Read the old row before you remove it: `const oldId = currentId(req); const cart = oldId ? sessions.get(oldId).cart : [];`",
          "Then end the old id completely with `if (oldId) sessions.delete(oldId);` and make a new one with `const id = createSession(user.userName, cart);`.",
          "The browser only learns the new id if you send it: `return { status: 200, headers: { \"Set-Cookie\": sessionCookie(id) }, body: { ok: true } };`. The credential check stays first, so a failed login never reaches any of this."
        ],
        solution: {
          "script.js": u3File(L(
            "    const oldId = currentId(req);",
            "    const cart = oldId ? sessions.get(oldId).cart : [];",
            "    if (oldId) sessions.delete(oldId);             // the planted id now points at nothing",
            "    const id = createSession(user.userName, cart);  // a fresh id for the new privilege level",
            "    return { status: 200, headers: { \"Set-Cookie\": sessionCookie(id) }, body: { ok: true } };"))
        }
      },

      {
        id: "auth-u1-4",
        title: "Idle and absolute timeouts",
        kind: "js", chip: "AUTH", xp: 15, mins: 13,
        crypto: true, clock: 1700000000000,
        brief: "A session that never ends is a gift to whoever finds the laptop. OWASP's session guidance gives every session two clocks.\n\n- **Idle timeout.** No request for 30 minutes and the session is over. It's measured from `lastSeen`, which every successful request moves forward. That's called *sliding*.\n- **Absolute timeout.** 8 hours after the session was created it's over, *even if the user never stopped clicking*. Without it, a stolen id kept warm by a script lives forever.\n\nWrite `touchSession(id)`. Return `null` for a missing session, an idle-expired one or an absolute-expired one, and delete an expired row so nothing can bring it back. Otherwise set `lastSeen` to `now()` and return the row. A session is dead once the elapsed time **reaches** its limit.\n\nThe checks move time with `T.advance(ms)`. There's no `Date.now()` anywhere in this course, because a lesson about time can't depend on when you run it. The numbers are common defaults, not rules: OWASP puts idle timeouts for low-risk apps around 15–30 minutes, and shorter for high-value ones.",
        steps: [
          { text: "29 minutes idle: still ada, and `lastSeen` has slid forward to `now()`.",
            test: L(
              "sessions.clear();",
              "var me = function (sid) { return handleRequest({ method: 'GET', path: '/api/me', headers: { cookie: 'sid=' + sid }, body: null }); };",
              "var sid = createSession('ada', []);",
              "T.advance(29 * 60 * 1000);",
              "T.eq(me(sid), { status: 200, body: { userName: 'ada' } }, 'After 29 idle minutes the session is still alive');",
              "T.eq(sessions.get(sid).lastSeen, now(), 'A successful request slides lastSeen forward to now()');") },
          { text: "31 minutes idle is a 401 and the row is deleted. At exactly 30 minutes the session has reached its limit, so that's a 401 too.",
            test: L(
              "sessions.clear();",
              "var me = function (sid) { return handleRequest({ method: 'GET', path: '/api/me', headers: { cookie: 'sid=' + sid }, body: null }); };",
              "var sid = createSession('ada', []);",
              "T.advance(31 * 60 * 1000);",
              "var r = me(sid);",
              "T.eq(r, { status: 401, body: { error: 'unauthorized' } }, '31 minutes without a request → 401 — got ' + JSON.stringify(r));",
              "T.expect(!sessions.has(sid), 'Delete an expired row when you find it, so nothing can bring it back');",
              "var edge = createSession('bo', []);",
              "T.advance(30 * 60 * 1000);",
              "T.eq(me(edge).status, 401, 'At exactly 30 idle minutes the session has reached the limit and is over');") },
          { text: "Idle time runs from the last request, not from login: three requests 20 minutes apart all succeed.",
            test: L(
              "sessions.clear();",
              "var me = function (sid) { return handleRequest({ method: 'GET', path: '/api/me', headers: { cookie: 'sid=' + sid }, body: null }); };",
              "var sid = createSession('ada', []);",
              "for (var i = 1; i <= 3; i++) {",
              "  T.advance(20 * 60 * 1000);",
              "  T.eq(me(sid).status, 200, 'Request ' + i + ' came ' + (20 * i) + ' minutes after login but only 20 after the previous one. Idle time is measured from lastSeen');",
              "}") },
          { text: "The absolute limit: active every 10 minutes, the session still ends 8 hours after it began.",
            test: L(
              "sessions.clear();",
              "var me = function (sid) { return handleRequest({ method: 'GET', path: '/api/me', headers: { cookie: 'sid=' + sid }, body: null }); };",
              "var sid = createSession('ada', []);",
              "for (var i = 1; i <= 47; i++) {",
              "  T.advance(10 * 60 * 1000);",
              "  var r = me(sid);",
              "  T.expect(r.status === 200, 'Minute ' + (i * 10) + ': an active session inside 8 hours should be alive — got ' + JSON.stringify(r));",
              "}",
              "T.advance(11 * 60 * 1000);",
              "var last = me(sid);",
              "T.eq(last, { status: 401, body: { error: 'unauthorized' } }, '481 minutes after it began, even with a request every 10 minutes, the absolute timeout has passed');",
              "T.expect(!sessions.has(sid), 'The absolute-expired row is deleted too');") }
        ],
        files: [
          { name: "script.js", content: u4File(L(
            "  const row = sessions.get(id);",
            "  if (!row) return null;",
            "  // TODO: idle timeout, measured from row.lastSeen",
            "  // TODO: absolute timeout, measured from row.created",
            "  // TODO: still alive? slide lastSeen forward to now()",
            "  return row;")) }
        ],
        hints: [
          "Read the clock once: `const t = now();`. Idle time is `t - row.lastSeen`; the session's age is `t - row.created`.",
          "Dead once either reaches its limit: `if (t - row.lastSeen >= IDLE_MS || t - row.created >= ABSOLUTE_MS) { sessions.delete(id); return null; }`",
          "Only a live session slides: `row.lastSeen = t; return row;` goes after the checks. Sliding first would make every idle check see zero."
        ],
        solution: {
          "script.js": u4File(L(
            "  const row = sessions.get(id);",
            "  if (!row) return null;",
            "  const t = now();",
            "  if (t - row.lastSeen >= IDLE_MS || t - row.created >= ABSOLUTE_MS) {",
            "    sessions.delete(id);  // dead rows don't linger",
            "    return null;",
            "  }",
            "  row.lastSeen = t;       // only a live session slides",
            "  return row;"))
        }
      },

      {
        id: "auth-u1-5",
        title: "Logout that actually logs out",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        crypto: true, clock: 1700000000000,
        brief: "Auth-lite's logout (`srv-u5-4`) removed the token from `activeTokens`. Cookies offer a tempting shortcut: send `Set-Cookie: sid=; Max-Age=0`, the browser drops the cookie, and the user looks logged out. But the **row is still on the server**. Anyone holding a copy of the id (malware, a proxy log, the attacker from the fixation lesson) keeps using it until it times out.\n\nLogout has two halves, and it needs both.\n\n- **Server:** delete the row, so the id means nothing.\n- **Browser:** send a clearing cookie. A cookie is identified by its name *and* its `Path` (and domain), so the clearing `Set-Cookie` must use the same `Path=/` it was set with, or the browser keeps the original. Reuse `serializeCookie` with `maxAge: 0`.\n\nA logout with no valid session still answers 200 with the clearing cookie. There's nothing to refuse, and the browser may be holding a stale cookie.\n\nThen add `POST /api/logout-all`, which ends **every** session belonging to the caller: the \"sign out of all devices\" button after a password change. It's one loop over `sessions`, and it's only possible because a session is a row you can find. Unit 5 comes back to this: a JWT has no row, which is exactly why it can't be revoked this way.",
        steps: [
          { text: "Logout clears the cookie properly: `sid=` with `Max-Age=0` and the same `Path=/` it was set with.",
            test: L(
              "sessions.clear();",
              "var call = function (method, path, sid) { return handleRequest({ method: method, path: path, headers: sid ? { cookie: 'sid=' + sid } : {}, body: null }); };",
              "var sid = createSession('ada', []);",
              "var out = call('POST', '/api/logout', sid);",
              "T.eq(out.status, 200, 'POST /api/logout → 200 — got ' + JSON.stringify(out));",
              "T.eq(out.body, { ok: true }, 'The logout body is { ok: true }');",
              "var sc = out.headers && out.headers['Set-Cookie'];",
              "T.expect(typeof sc === 'string', 'Logout must send a Set-Cookie that clears sid — got ' + JSON.stringify(out));",
              "var parts = sc.split(/;\\s*/);",
              "T.eq(parts[0], 'sid=', 'The clearing cookie sets sid to an empty value — yours: ' + JSON.stringify(sc));",
              "T.expect(parts.indexOf('Max-Age=0') !== -1, 'Max-Age=0 tells the browser to delete it now — yours: ' + JSON.stringify(sc));",
              "T.expect(parts.indexOf('Path=/') !== -1, 'A cookie is matched by name AND path. Without Path=/ the browser keeps the original sid — yours: ' + JSON.stringify(sc));") },
          { text: "The replay: someone kept a copy of the id. After logout it gets a 401, because the row is gone.",
            test: L(
              "sessions.clear();",
              "var call = function (method, path, sid) { return handleRequest({ method: method, path: path, headers: sid ? { cookie: 'sid=' + sid } : {}, body: null }); };",
              "var sid = createSession('ada', []);",
              "var copy = sid;",
              "T.eq(call('GET', '/api/me', sid).status, 200, 'Before logout the session works');",
              "call('POST', '/api/logout', sid);",
              "var replay = call('GET', '/api/me', copy);",
              "T.eq(replay, { status: 401, body: { error: 'unauthorized' } }, 'The copied id still opened the account after logout (' + JSON.stringify(replay) + '). Clearing the cookie in one browser does nothing to a copy; delete the row');",
              "T.expect(!sessions.has(copy), 'The row should be gone from sessions');") },
          { text: "Logout ends only that session: ada's phone stays signed in when the laptop logs out. A logout with no session is still a 200 with the clearing cookie.",
            test: L(
              "sessions.clear();",
              "var call = function (method, path, sid) { return handleRequest({ method: method, path: path, headers: sid ? { cookie: 'sid=' + sid } : {}, body: null }); };",
              "var laptop = createSession('ada', []), phone = createSession('ada', []);",
              "call('POST', '/api/logout', laptop);",
              "T.eq(call('GET', '/api/me', phone), { status: 200, body: { userName: 'ada' } }, 'Logging out the laptop must not end the phone session; that is what logout-all is for');",
              "var anon = call('POST', '/api/logout', null);",
              "T.eq(anon.status, 200, 'A logout with no session still answers 200 — got ' + JSON.stringify(anon));",
              "var sc = anon.headers && anon.headers['Set-Cookie'];",
              "T.expect(typeof sc === 'string' && sc.split(/;\\s*/).indexOf('Max-Age=0') !== -1, 'Even with no session, send the clearing cookie: the browser may hold a stale one');") },
          { text: "`POST /api/logout-all` ends every session ada has (laptop, phone, tablet) and leaves bo alone. With no session it's a 401.",
            test: L(
              "sessions.clear();",
              "var call = function (method, path, sid) { return handleRequest({ method: method, path: path, headers: sid ? { cookie: 'sid=' + sid } : {}, body: null }); };",
              "var devices = { laptop: createSession('ada', []), phone: createSession('ada', []), tablet: createSession('ada', []) };",
              "var bo = createSession('bo', []);",
              "var out = call('POST', '/api/logout-all', devices.phone);",
              "T.eq(out.status, 200, 'POST /api/logout-all with a valid session → 200 — got ' + JSON.stringify(out));",
              "Object.keys(devices).forEach(function (d) {",
              "  T.eq(call('GET', '/api/me', devices[d]).status, 401, 'The ' + d + ' should be signed out after logout-all');",
              "});",
              "T.eq(call('GET', '/api/me', bo), { status: 200, body: { userName: 'bo' } }, 'bo is a different user, so logout-all must not touch that session');",
              "T.eq(call('POST', '/api/logout-all', null), { status: 401, body: { error: 'unauthorized' } }, 'logout-all with no session → 401: there is no user to sign out everywhere');") }
        ],
        files: [
          { name: "script.js", content: u5File(L(
            "  if (req.method === \"POST\" && req.path === \"/api/logout\") {",
            "    // Tells the browser to forget the cookie. The server forgets nothing.",
            "    return { status: 200, headers: { \"Set-Cookie\": \"sid=; Max-Age=0\" }, body: { ok: true } };",
            "  }",
            "  // TODO: POST /api/logout-all ends every session the caller's user has")) }
        ],
        hints: [
          "Build the clearing cookie with the same options the session cookie was set with, but an empty value and `maxAge: 0`: `serializeCookie(\"sid\", \"\", { path: \"/\", maxAge: 0, httpOnly: true, secure: true, sameSite: \"Lax\" })`.",
          "Logout is `const id = currentId(req); if (id) sessions.delete(id);`, then the 200 with that cookie, whether or not there was a session.",
          "For logout-all, find the user first (`sessions.get(id).userName`), then `for (const [sid, row] of sessions) if (row.userName === userName) sessions.delete(sid);`. Deleting from a Map while iterating it is safe."
        ],
        solution: {
          "script.js": u5File(L(
            "  if (req.method === \"POST\" && req.path === \"/api/logout\") {",
            "    const id = currentId(req);",
            "    if (id) sessions.delete(id);  // server half: the id means nothing now",
            "    return { status: 200, headers: { \"Set-Cookie\": clearCookie() }, body: { ok: true } };",
            "  }",
            "  if (req.method === \"POST\" && req.path === \"/api/logout-all\") {",
            "    const id = currentId(req);",
            "    if (!id) return { status: 401, body: { error: \"unauthorized\" } };",
            "    const userName = sessions.get(id).userName;",
            "    for (const [sid, row] of sessions) if (row.userName === userName) sessions.delete(sid);",
            "    return { status: 200, headers: { \"Set-Cookie\": clearCookie() }, body: { ok: true } };",
            "  }",
            "",
            "  function clearCookie() {  // browser half: same Path it was set with",
            "    return serializeCookie(\"sid\", \"\", { path: \"/\", maxAge: 0, httpOnly: true, secure: true, sameSite: \"Lax\" });",
            "  }"))
        }
      },

      {
        id: "auth-quiz-1",
        title: "Unit 1 quiz: Sessions",
        kind: "quiz", xp: 10,
        brief: "Session ids, the Set-Cookie header, fixation, timeouts and logout. 80% to pass.",
        questions: [
          { q: "Why does a session id come from `randHex(16)` instead of `\"token-\" + userName` or an incrementing counter?",
            choices: ["Random ids are shorter, so the cookie fits inside a single header", "A counter would collide as soon as two users log in in the same millisecond", "Anyone who sees one id can derive another; 128 random bits can't be guessed", "Browsers refuse to store a cookie whose value contains a user name"],
            answer: 2, explain: "An id is a bearer credential: whoever presents it is that user. A name-based or sequential id lets one valid id predict the others, which is exactly the `token-bo` hole from Auth-lite. Counters don't collide if they're incremented properly, and browsers don't care what the value means." },
          { q: "An attacker plants their own anonymous `sid` in a victim's browser, and the victim then logs in. What stops the attacker from using that `sid`?",
            choices: ["Issuing a new id at login and deleting the old row", "Marking the session cookie HttpOnly so no script can read it", "Checking the password again on every single request", "Setting SameSite=Strict so the cookie never leaves the site"],
            answer: 0, explain: "This is session fixation. HttpOnly stops scripts reading the id, but the attacker doesn't need to read it: they chose it. SameSite controls when the victim's browser sends it cross-site, while the attacker replays it from their own browser. Rotating at login makes the planted id point at nothing." },
          { q: "What goes wrong with this line inside `serializeCookie`?",
            code: "if (opts.maxAge) parts.push(\"Max-Age=\" + opts.maxAge);",
            lang: "js",
            choices: ["Max-Age is counted in milliseconds, so 1800 means the cookie expires in under two seconds", "Max-Age has to come before Path, so browsers reject the whole header", "Nothing: the attribute is written for every maxAge the caller passes", "maxAge: 0 is falsy, so a logout cookie loses Max-Age=0 and sid survives"],
            answer: 3, explain: "`0` is falsy, so the truthiness test skips exactly the value logout depends on. Without `Max-Age=0` the clearing cookie is just an empty session cookie, and the old one isn't deleted. Test `opts.maxAge != null` instead. Max-Age is in seconds, and attribute order doesn't matter." },
          { q: "A script requests `/api/me` with a stolen `sid` every five minutes. Which limit eventually ends that session?",
            choices: ["The idle timeout, 30 minutes after the id was stolen", "The absolute timeout, counted from when the session was created", "Neither: a session that stays active is valid until the user logs out", "The cookie's Max-Age, which the browser checks on every request"],
            answer: 1, explain: "Every request slides `lastSeen`, so the idle timeout never fires for a busy script. The absolute timeout is measured from `created` and can't be pushed back. Max-Age is enforced by a browser, and a script replaying the id isn't obliged to honour it; only server-side checks bind an attacker." },
          { q: "A logout route sends `Set-Cookie: sid=; Path=/; Max-Age=0` and does nothing else. What is still wrong?",
            choices: ["The Path should be left off, or the browser won't match the cookie", "Browsers ignore Max-Age=0, so it needs an Expires date in the past", "The server row still exists, so any copy of the id keeps working", "The response should be a 401, because the session no longer exists"],
            answer: 2, explain: "The cookie half is correct, including the matching `Path=/`, and Max-Age=0 does delete a cookie. But the server still has the row, so a copy of the id in a proxy log or an attacker's hands keeps working until it times out. Logout must delete the row as well." },
          { q: "Why is \"sign out of all devices\" straightforward with server-side sessions?",
            choices: ["The browser syncs cookies across devices and clears them together", "Every session is a row the server can look up by user and delete", "Session ids are signed, so changing the key invalidates every one", "All of a user's devices share one session id, so one delete covers them"],
            answer: 1, explain: "Each device has its own id, and each id is a row that records the user. Deleting every row for that user ends them all at once. Browsers don't sync cookies between devices, and these ids aren't signed. A self-contained token like a JWT has no row, which is why Unit 5 needs a different answer." }
        ]
      }
    ]
  });
})();
