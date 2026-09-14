/* Authentication — Unit 3: CSRF, the request you didn't send */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SIM_NOTE = "// site(), submitForm(from,{action,fields}), fetchFrom() and newBrowser() drive a simulated browser (authsim.js).";

  var BANK_TOP = L(
    SIM_NOTE,
    "const balance = { ada: 100 };",
    "let sidSeq = 0;",
    "function login() { return \"sid-\" + (++sidSeq); }",
    "");

  /* ---------- auth-u3-1 ---------- */
  function u1File(attackBody) {
    return L(
      BANK_TOP,
      "// The bank. Its session is SameSite=None, so it rides every cross-site request — the hole.",
      "site(\"https://bank.example\", req => {",
      "  if (req.method === \"POST\" && req.path === \"/login\")",
      "    return { status: 303, headers: { \"Set-Cookie\": \"sid=\" + login() + \"; Path=/; Secure; HttpOnly; SameSite=None\" }, Location: \"/\" };",
      "  const user = req.cookies.sid ? \"ada\" : null;",
      "  if (req.method === \"POST\" && req.path === \"/transfer\") {",
      "    if (!user) return { status: 401, body: { error: \"unauthorized\" } };",
      "    balance[user] -= Number((req.body || {}).amount || 0);",
      "    return { status: 200, body: { balance: balance[user] } };",
      "  }",
      "  return { status: 200, body: { user: user, balance: user ? balance[user] : null } };",
      "});",
      "",
      "// The attacker's site. The page auto-submits a hidden form the moment ada opens it.",
      "site(\"https://evil.example\", () => ({ status: 200, body: \"<h1>You won a prize!</h1>\" }));",
      "",
      "// Write the forged request the attacker's page makes. `victim` is ada's browser,",
      "// already logged in. You have no password and no token — only her open session.",
      "function forgeTransfer(victim) {",
      attackBody,
      "}",
      "",
      "const ada = newBrowser();",
      "ada.submitForm(\"https://bank.example/login\", { action: \"/login\" });",
      "forgeTransfer(ada);",
      "console.log(\"ada's balance is now\", balance.ada);",
      "");
  }

  /* ---------- auth-u3-2 ---------- */
  function u2File(issueBody, guardBody) {
    return L(
      BANK_TOP,
      "const csrfTokens = new Map(); // sid -> the token minted for that session",
      "",
      "// Mint (once) and return the CSRF token for this session.",
      "function csrfFor(sid) {",
      issueBody,
      "}",
      "",
      "// Return a 403 response to block the request, or null to allow it.",
      "function checkCsrf(req, sid) {",
      guardBody,
      "}",
      "",
      "site(\"https://bank.example\", req => {",
      "  if (req.method === \"POST\" && req.path === \"/login\")",
      "    return { status: 303, headers: { \"Set-Cookie\": \"sid=\" + login() + \"; Path=/; Secure; HttpOnly; SameSite=None\" }, Location: \"/\" };",
      "  const sid = req.cookies.sid;",
      "  if (!sid) return { status: 401, body: { error: \"unauthorized\" } };",
      "  if (req.path === \"/form\") return { status: 200, body: { csrf: csrfFor(sid) } };",
      "  if (req.method === \"POST\" && req.path === \"/transfer\") {",
      "    const blocked = checkCsrf(req, sid);",
      "    if (blocked) return blocked;",
      "    balance.ada -= Number((req.body || {}).amount || 0);",
      "    return { status: 200, body: { balance: balance.ada } };",
      "  }",
      "  return { status: 200, body: { user: \"ada\" } };",
      "});",
      "site(\"https://evil.example\", () => ({ status: 200, body: \"gotcha\" }));",
      "",
      "const ada = newBrowser();",
      "ada.submitForm(\"https://bank.example/login\", { action: \"/login\" });",
      "const token = ada.fetchFrom(\"https://bank.example/account\", \"/form\").body.csrf;",
      "console.log(ada.submitForm(\"https://bank.example/pay\", { action: \"/transfer\", fields: { amount: \"5\", csrf: token } }).body);",
      "");
  }

  /* ---------- auth-u3-3 ---------- */
  function u3File(issueBody, verifyBody) {
    return L(
      BANK_TOP,
      "const CSRF_KEY = \"csrf-signing-key-v1\"; // server-side secret, never sent to the browser",
      "",
      "// Build the CSRF token for a session: a nonce plus a signature only this server can make.",
      "function issueToken(sid) {",
      issueBody,
      "}",
      "",
      "// true if `token` (from the form) is a valid CSRF token for THIS session.",
      "function tokenValid(sid, token) {",
      verifyBody,
      "}",
      "",
      "site(\"https://bank.example\", req => {",
      "  if (req.method === \"POST\" && req.path === \"/login\")",
      "    return { status: 303, headers: { \"Set-Cookie\": \"sid=\" + login() + \"; Path=/; Secure; HttpOnly; SameSite=None\" }, Location: \"/\" };",
      "  const sid = req.cookies.sid;",
      "  if (!sid) return { status: 401, body: { error: \"unauthorized\" } };",
      "  if (req.path === \"/form\") return { status: 200, body: { csrf: issueToken(sid) } };",
      "  if (req.method === \"POST\" && req.path === \"/transfer\") {",
      "    if (!tokenValid(sid, (req.body || {}).csrf)) return { status: 403, body: { error: \"bad csrf token\" } };",
      "    balance.ada -= Number((req.body || {}).amount || 0);",
      "    return { status: 200, body: { balance: balance.ada } };",
      "  }",
      "  return { status: 200, body: { user: \"ada\" } };",
      "});",
      "",
      "// A compromised sibling subdomain: it can set a cookie for the whole bank.example.",
      "site(\"https://status.bank.example\", () => ({ status: 200, headers: { \"Set-Cookie\": \"csrf=pwned; Domain=bank.example; Path=/; Secure; SameSite=None\" }, body: \"\" }));",
      "site(\"https://evil.example\", () => ({ status: 200, body: \"gotcha\" }));",
      "",
      "const ada = newBrowser();",
      "ada.submitForm(\"https://bank.example/login\", { action: \"/login\" });",
      "console.log(tokenValid(ada.cookies ? \"\" : \"\", \"pwned\"));",
      "");
  }

  /* ---------- auth-u3-4 ---------- */
  function u4File(guardBody) {
    return L(
      BANK_TOP,
      "const ALLOWED_ORIGINS = [\"https://bank.example\", \"https://www.bank.example\"];",
      "",
      "// Return a 403 response to block an unsafe cross-site request, or null to allow it.",
      "// Prefer Sec-Fetch-Site; fall back to the Origin header when it is absent.",
      "function csrfGuard(req) {",
      guardBody,
      "}",
      "",
      "site(\"https://bank.example\", req => {",
      "  if (req.method === \"POST\" && req.path === \"/login\")",
      "    return { status: 303, headers: { \"Set-Cookie\": \"sid=\" + login() + \"; Path=/; Secure; HttpOnly; SameSite=None\" }, Location: \"/\" };",
      "  const user = req.cookies.sid ? \"ada\" : null;",
      "  if (req.method === \"POST\" && req.path === \"/transfer\") {",
      "    if (!user) return { status: 401, body: { error: \"unauthorized\" } };",
      "    const blocked = csrfGuard(req);",
      "    if (blocked) return blocked;",
      "    balance.ada -= Number((req.body || {}).amount || 0);",
      "    return { status: 200, headers: { \"Access-Control-Allow-Origin\": req.headers.origin || \"*\" }, body: { balance: balance.ada } };",
      "  }",
      "  return { status: 200, body: { user: user } };",
      "});",
      "site(\"https://www.bank.example\", () => ({ status: 200, body: \"\" }));",
      "site(\"https://evil.example\", () => ({ status: 200, body: \"gotcha\" }));",
      "",
      "const ada = newBrowser();",
      "ada.submitForm(\"https://bank.example/login\", { action: \"/login\" });",
      "console.log(csrfGuard({ method: \"POST\", headers: { \"sec-fetch-site\": \"cross-site\" } }));",
      "");
  }

  window.CODELAB.addUnit("auth", {
    id: "auth-u3",
    title: "CSRF: the request you didn't send",
    icon: "🎣",
    blurb: "The browser attaches cookies to requests the user never meant to make. Forge a transfer, then close it three ways: a synchronizer token, a signed double-submit token, and the Sec-Fetch / Origin check — and see why a CORS-correct API is still forgeable.",
    cheat: [
      { h: "The attack", lang: "text", code: L(
        "evil.example serves a page that auto-submits:",
        "  <form action=\"https://bank.example/transfer\" method=\"POST\">",
        "The browser attaches bank.example's cookie because it always does.",
        "No XSS, no stolen password — just your open session."),
        note: "CSRF works precisely because the request is authentic. The fix is to demand proof the request came from your own page." },
      { h: "Synchronizer token", lang: "js", code: L(
        "// server mints a per-session token, renders it into the form,",
        "// and requires it on every unsafe method:",
        "if (req.body.csrf !== csrfTokens.get(sid)) return { status: 403 };"),
        note: "The attacker's page can't read your token (it's on your origin's page), so the forged POST arrives without it. First choice for a stateful server." },
      { h: "Signed double-submit", lang: "js", code: L(
        "token = nonce + \".\" + hex(hmac(\"sha256\", KEY, sid + \"!\" + nonce));",
        "// verify: recompute from the SESSION's sid, compare to the signature",
        "// naive cookie==body fails: a sibling subdomain sets both halves"),
        note: "For a stateless server. Bind the token to the session, or someone who can write your cookies (a subdomain) forges both halves." },
      { h: "Sec-Fetch-Site / Origin", lang: "js", code: L(
        "if (req.headers[\"sec-fetch-site\"] === \"cross-site\") return 403;",
        "// no header? fall back to an Origin allow-list",
        "// CORS ≠ this: a form POST needs no preflight, so it still lands"),
        note: "A defence-in-depth layer. CORS decides who may READ a response, never who may SEND a request." }
    ],
    lessons: [

      {
        id: "auth-u3-1",
        title: "The attack lab: forge a transfer",
        kind: "js", chip: "AUTH", xp: 15, mins: 13,
        browser: true, clock: 1700000000000,
        brief: "*A lab against your own sandbox: the attacker's site is one of the simulated sites, and ada is a browser you drive.*\n\nCross-Site Request Forgery turns the browser's own helpfulness against it. When ada's browser sends a request to `bank.example`, it attaches her session cookie: it does that for *every* request to the bank, no matter which site started it. So a page on `evil.example` can contain a hidden form that POSTs to `https://bank.example/transfer`, auto-submit it the moment ada opens the page, and the browser dutifully attaches her session. The bank sees an authentic, logged-in request and moves the money.\n\nThat's what makes CSRF different from the attacks in Web Security: there's no XSS and no stolen password. The request is *genuine*. The only thing missing is ada's intent.\n\nHere the bank's session is `SameSite=None`, the setting that makes this possible, so you can see the attack land before the next lessons close it. Write `forgeTransfer(victim)`: from a page on `evil.example`, submit a POST to the bank's `/transfer` moving `50` to `eve`. `victim` is ada's browser, already logged in, and `submitForm(fromPageUrl, { action, fields })` posts a form.\n\n*Everything after this closes the hole. This lesson is here so you've seen it open.*",
        steps: [
          { text: "The forged transfer moves ada's money: after the attack her balance has dropped by 50.",
            test: L(
              "T.expect(typeof forgeTransfer === 'function', 'Define forgeTransfer(victim).');",
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "forgeTransfer(ada);",
              "T.eq(balance.ada, 50, 'The forged POST should move 50 from ada. Her balance is still ' + balance.ada + ' — is forgeTransfer posting to https://bank.example/transfer with amount 50?');") },
          { text: "The forged request came from `evil.example`: its `Origin` header is `evil.example` and it's a cross-site POST.",
            test: L(
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "forgeTransfer(ada);",
              "var transfer = ada.requests().filter(function (r) { return r.url === 'https://bank.example/transfer'; }).pop();",
              "T.expect(!!transfer, 'No POST to https://bank.example/transfer was made from the victim browser');",
              "T.eq(transfer.method, 'POST', 'A transfer is an unsafe method: POST');",
              "T.eq(transfer.headers.origin, 'https://evil.example', 'The request should originate from the attacker page on evil.example — Origin was ' + JSON.stringify(transfer.headers.origin));",
              "T.eq(transfer.headers['sec-fetch-site'], 'cross-site', 'The browser marks it cross-site');") },
          { text: "The session cookie rode along, unasked: the bank saw ada's `sid` on the forged request.",
            test: L(
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "forgeTransfer(ada);",
              "var transfer = ada.requests().filter(function (r) { return r.url === 'https://bank.example/transfer'; }).pop();",
              "T.expect(transfer && transfer.cookies && transfer.cookies.sid, 'The forged POST carried no session cookie. With SameSite=None the browser attaches it to cross-site requests — that is the whole attack. Cookies seen: ' + JSON.stringify(transfer && transfer.cookies));") },
          { text: "It really is a forgery, not a stolen login: `forgeTransfer` never posts to `/login` and never sends a password.",
            test: L(
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "var before = ada.requests().length;",
              "forgeTransfer(ada);",
              "var after = ada.requests().slice(before);",
              "T.expect(after.length > 0, 'forgeTransfer made no request at all');",
              "T.expect(!after.some(function (r) { return r.url.indexOf('/login') !== -1; }), 'The attack must not log in — CSRF rides the session ada already has');",
              "T.expect(!after.some(function (r) { return JSON.stringify(r).toLowerCase().indexOf('password') !== -1; }), 'No password is involved in CSRF');") }
        ],
        files: [
          { name: "script.js", content: u1File(L(
            "  // TODO: from a page on evil.example, POST to the bank's /transfer, moving 50 to eve.",
            "  // Use victim.submitForm(pageUrl, { action, fields }).")) }
        ],
        hints: [
          "The attacker controls a page on their own site, so the `from` URL is on `evil.example`: `victim.submitForm(\"https://evil.example/prize\", { ... })`.",
          "The form targets the bank directly: `action: \"https://bank.example/transfer\"`.",
          "The fields are the transfer details: `fields: { to: \"eve\", amount: \"50\" }`. Return the result so you can inspect it."
        ],
        solution: {
          "script.js": u1File(L(
            "  // No token, no password — the browser supplies ada's cookie for us.",
            "  return victim.submitForm(\"https://evil.example/prize\", {",
            "    action: \"https://bank.example/transfer\",",
            "    fields: { to: \"eve\", amount: \"50\" }",
            "  });"))
        }
      },

      {
        id: "auth-u3-2",
        title: "Synchronizer tokens",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        browser: true, crypto: true, clock: 1700000000000,
        brief: "The forged request in the last lesson had everything an authentic one has, except a secret that lives only on *your* page. A **synchronizer token** is that secret. OWASP lists it first among CSRF defences.\n\nThe server mints a random token, tied to the session, and renders it into every form it serves. On each unsafe request (`POST`, `PUT`, `DELETE`) it requires that token back and checks it against the one it stored for that session. The attacker's page on `evil.example` can't read your token: it's in the HTML of a page on *your* origin, which the same-origin policy keeps out of their reach. So their forged POST arrives without it, and the bank refuses.\n\nWrite two functions:\n\n- `csrfFor(sid)`: return the token for this session, minting one with `randHex(16)` the first time and storing it in `csrfTokens` so the same session always gets the same token.\n- `checkCsrf(req, sid)`: return a `{ status: 403, body: { error: \"bad csrf token\" } }` response when `req.body.csrf` isn't this session's token, or `null` to allow the request.\n\nThe bank already serves the token at `GET /form` and calls your `checkCsrf` before every transfer.\n\n*The session is still `SameSite=None` here, so the cookie rides the forged request as before. The token, not the cookie, is what stops it.*",
        steps: [
          { text: "The genuine flow works: ada reads her token from `/form`, submits it, and the transfer goes through.",
            test: L(
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "var token = ada.fetchFrom('https://bank.example/account', '/form').body.csrf;",
              "T.expect(typeof token === 'string' && token.length >= 8, 'GET /form should return a csrf token — got ' + JSON.stringify(token));",
              "var res = ada.submitForm('https://bank.example/pay', { action: '/transfer', fields: { amount: '30', csrf: token } });",
              "T.eq(res.status, 200, 'A transfer carrying the right token should be allowed — got ' + JSON.stringify(res));",
              "T.eq(balance.ada, 70, 'The genuine transfer should move the money');") },
          { text: "The forgery is refused: `evil.example` posts to `/transfer` with no token → 403, balance unchanged.",
            test: L(
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "var res = ada.submitForm('https://evil.example/prize', { action: 'https://bank.example/transfer', fields: { to: 'eve', amount: '50' } });",
              "T.eq(res.status, 403, 'The forged POST carries no csrf token, so it must be refused — got ' + JSON.stringify(res));",
              "T.eq(balance.ada, 100, 'The balance must be unchanged');",
              "var transfer = ada.requests().pop();",
              "T.expect(transfer.cookies.sid, 'The session cookie still rode along (SameSite=None) — the token is what refused the request, not the cookie');") },
          { text: "A token from a *different* session is refused: knowing some valid token isn't enough, it must be this session's.",
            test: L(
              "balance.ada = 100;",
              "var mallory = newBrowser();",
              "mallory.submitForm('https://bank.example/login', { action: '/login' });",
              "var malloryToken = mallory.fetchFrom('https://bank.example/account', '/form').body.csrf;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "var res = ada.submitForm('https://evil.example/prize', { action: 'https://bank.example/transfer', fields: { amount: '50', csrf: malloryToken } });",
              "T.eq(res.status, 403, \"mallory's own valid token must not work against ada's session — got \" + JSON.stringify(res));",
              "T.eq(balance.ada, 100, 'Balance unchanged');") },
          { text: "Tokens are per-session and stable: two sessions get different tokens, and the same session gets the same token twice.",
            test: L(
              "var a = newBrowser(); a.submitForm('https://bank.example/login', { action: '/login' });",
              "var b = newBrowser(); b.submitForm('https://bank.example/login', { action: '/login' });",
              "var a1 = a.fetchFrom('https://bank.example/x', '/form').body.csrf;",
              "var a2 = a.fetchFrom('https://bank.example/x', '/form').body.csrf;",
              "var b1 = b.fetchFrom('https://bank.example/x', '/form').body.csrf;",
              "T.eq(a1, a2, 'The same session should get the same token each time (mint once, then store it)');",
              "T.expect(a1 !== b1, 'Two different sessions must get different tokens');",
              "T.expect(/^[0-9a-f]{32}$/.test(a1), 'The token should be randHex(16): 32 hex characters — got ' + JSON.stringify(a1));") }
        ],
        files: [
          { name: "script.js", content: u2File(
            L("  // TODO: mint with randHex(16) the first time, store in csrfTokens, and reuse it after",
              "  return \"token\";"),
            L("  // TODO: 403 unless req.body.csrf is this session's token; otherwise null",
              "  return null;")) }
        ],
        hints: [
          "Mint once: `if (!csrfTokens.has(sid)) csrfTokens.set(sid, randHex(16)); return csrfTokens.get(sid);`.",
          "The guard compares the submitted token with the stored one: `if (!req.body || req.body.csrf !== csrfFor(sid)) return { status: 403, body: { error: \"bad csrf token\" } };`.",
          "Return `null` when they match, so the handler knows it may proceed."
        ],
        solution: {
          "script.js": u2File(
            L("  if (!csrfTokens.has(sid)) csrfTokens.set(sid, randHex(16)); // one token per session",
              "  return csrfTokens.get(sid);"),
            L("  if (!req.body || req.body.csrf !== csrfFor(sid)) // must be THIS session's token",
              "    return { status: 403, body: { error: \"bad csrf token\" } };",
              "  return null;"))
        }
      },

      {
        id: "auth-u3-3",
        title: "Signed double-submit, and why the naive one breaks",
        kind: "js", chip: "AUTH", xp: 15, mins: 15,
        browser: true, crypto: true, clock: 1700000000000,
        brief: "A synchronizer token means the server has to remember a token per session. A **double-submit** token avoids that: send the token both as a cookie and in the form, and check the two match. No server storage.\n\nThe naive version checks only `cookie === body`, and that breaks. An attacker who can *write* your cookies, from a compromised sibling like `status.bank.example` setting `csrf=pwned; Domain=bank.example`, sets the cookie to a value they choose and puts that same value in their forged form. Both halves match, and the transfer goes through. Writing a cookie is far easier than reading one: a sibling subdomain can do it.\n\nThe fix is to **bind the token to the session** so the attacker can't forge a valid one. Build the token as a nonce plus an HMAC the server signs:\n\n```\ntoken = nonce + \".\" + hex(hmac(\"sha256\", CSRF_KEY, sid + \"!\" + nonce))\n```\n\nWrite `issueToken(sid)` to produce that, using `randHex(8)` for the nonce. Write `tokenValid(sid, token)` to split off the nonce, recompute the signature from **this request's session `sid`**, and accept only if it matches. The attacker doesn't have `CSRF_KEY` and can't read ada's `sid`, so a value they invent never verifies.\n\n*The server checks the token from the form against the session, so this design doesn't even need to read the cookie half. `CSRF_KEY` stays on the server.*",
        steps: [
          { text: "`issueToken` builds `nonce.signature`, and `tokenValid` accepts it for the same session.",
            test: L(
              "T.expect(typeof issueToken === 'function' && typeof tokenValid === 'function', 'Define issueToken(sid) and tokenValid(sid, token).');",
              "var t = issueToken('sid-42');",
              "T.expect(/^[0-9a-f]{16}\\.[0-9a-f]{64}$/.test(t), 'A token is randHex(8) + \".\" + hex of an HMAC-SHA256 — got ' + JSON.stringify(t));",
              "T.expect(tokenValid('sid-42', t) === true, 'A freshly issued token must validate for its own session');",
              "T.expect(tokenValid('sid-99', t) !== true, 'It must not validate for a different session');") },
          { text: "The genuine flow works end to end: ada reads her token from `/form` and transfers.",
            test: L(
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "var token = ada.fetchFrom('https://bank.example/account', '/form').body.csrf;",
              "var res = ada.submitForm('https://bank.example/pay', { action: '/transfer', fields: { amount: '20', csrf: token } });",
              "T.eq([res.status, balance.ada], [200, 80], 'A transfer with a valid signed token should go through');") },
          { text: "The sibling-toss attack fails: `status.bank.example` sets `csrf=pwned`, `evil.example` forges a POST with `csrf=pwned`, and the bank refuses it.",
            test: L(
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "ada.visit('https://status.bank.example/');  // the compromised sibling plants a csrf cookie",
              "T.expect(ada.jar().some(function (c) { return c.name === 'csrf' && c.value === 'pwned'; }), 'The sibling should have planted csrf=pwned in the jar (the setup for the attack)');",
              "var res = ada.submitForm('https://evil.example/prize', { action: 'https://bank.example/transfer', fields: { amount: '50', csrf: 'pwned' } });",
              "T.eq(res.status, 403, 'A naive cookie==body check would pass here, since both halves are \"pwned\". A signed token bound to the session refuses it — got ' + JSON.stringify(res));",
              "T.eq(balance.ada, 100, 'Balance unchanged');") },
          { text: "Tampering is caught: a token with an altered nonce, a truncated signature, or a made-up value all fail to validate.",
            test: L(
              "var t = issueToken('sid-7');",
              "var parts = t.split('.');",
              "T.expect(tokenValid('sid-7', (parts[0] === '0000000000000000' ? '1111111111111111' : '0000000000000000') + '.' + parts[1]) !== true, 'Changing the nonce must break the signature');",
              "T.expect(tokenValid('sid-7', parts[0] + '.' + parts[1].slice(0, -2)) !== true, 'A truncated signature must not validate');",
              "T.expect(tokenValid('sid-7', 'pwned') !== true, 'A value with no signature at all must not validate');",
              "T.expect(tokenValid('sid-7', '') !== true, 'An empty token must not validate');") }
        ],
        files: [
          { name: "script.js", content: u3File(
            L("  // TODO: nonce = randHex(8); token = nonce + \".\" + hex(hmac(\"sha256\", CSRF_KEY, sid + \"!\" + nonce))",
              "  return randHex(8);"),
            L("  // Naive double-submit: the caller compares this against the cookie. It ignores the session.",
              "  // TODO: split off the nonce, recompute the signature from sid, and compare",
              "  return typeof token === \"string\";")) }
        ],
        hints: [
          "`const nonce = randHex(8); const sig = hex(hmac(\"sha256\", CSRF_KEY, sid + \"!\" + nonce)); return nonce + \".\" + sig;`.",
          "To verify, split on the dot and rebuild: `const parts = String(token).split(\".\"); if (parts.length !== 2) return false; const want = hex(hmac(\"sha256\", CSRF_KEY, sid + \"!\" + parts[0]));`.",
          "Compare the signatures: `return parts[1] === want;`. The nonce is public; the signature is what the attacker can't produce without `CSRF_KEY`."
        ],
        solution: {
          "script.js": u3File(
            L("  const nonce = randHex(8);",
              "  return nonce + \".\" + hex(hmac(\"sha256\", CSRF_KEY, sid + \"!\" + nonce)); // bound to this session"),
            L("  const parts = String(token).split(\".\");",
              "  if (parts.length !== 2) return false;",
              "  const want = hex(hmac(\"sha256\", CSRF_KEY, sid + \"!\" + parts[0])); // recompute from the SESSION's sid",
              "  return parts[1] === want;"))
        }
      },

      {
        id: "auth-u3-4",
        title: "Fetch Metadata, Origin, and why CORS isn't this",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        browser: true, clock: 1700000000000,
        brief: "Tokens are the primary defence. Modern browsers add a second layer for free: they tell the server where each request came from, before it touches your code.\n\n- **`Sec-Fetch-Site`** is set by the browser and can't be forged by the page. It reads `same-origin`, `same-site`, `cross-site` or `none`. Reject unsafe methods when it's `cross-site`.\n- Older browsers don't send it, so **fall back to the `Origin` header**: allow only origins on your list.\n\nOne thing this is *not* is CORS. CORS decides whether a page may **read** a cross-origin response; it does nothing about whether the request is **sent**. A plain form POST is a \"simple request\" that needs no preflight, so it reaches your handler and runs whatever it does, long before any CORS header would matter. An API can have flawless CORS and still be wide open to CSRF. This check is what closes that gap.\n\nWrite `csrfGuard(req)`: return a `{ status: 403, body: { error: \"cross-site request refused\" } }` response to block, or `null` to allow. Use `req.headers[\"sec-fetch-site\"]` when it's present (allow `same-origin` and `same-site`), and fall back to `req.headers.origin` against `ALLOWED_ORIGINS` when it's not. Treat a request with neither header as same-origin (a real navigation from your own page).",
        steps: [
          { text: "The guard is a pure function on the headers: `same-origin` and `same-site` pass, `cross-site` is blocked, and no headers at all passes.",
            test: L(
              "T.expect(typeof csrfGuard === 'function', 'Define csrfGuard(req).');",
              "T.eq(csrfGuard({ headers: { 'sec-fetch-site': 'same-origin' } }), null, 'same-origin is allowed');",
              "T.eq(csrfGuard({ headers: { 'sec-fetch-site': 'same-site' } }), null, 'same-site is allowed');",
              "var blocked = csrfGuard({ headers: { 'sec-fetch-site': 'cross-site' } });",
              "T.expect(blocked && blocked.status === 403, 'cross-site must be blocked with a 403 — got ' + JSON.stringify(blocked));",
              "T.eq(csrfGuard({ headers: {} }), null, 'No metadata and no Origin: treat as same-origin (a normal navigation)');") },
          { text: "The fallback: with no `Sec-Fetch-Site`, an `Origin` not on the list is blocked, and one on the list is allowed.",
            test: L(
              "var blocked = csrfGuard({ headers: { origin: 'https://evil.example' } });",
              "T.expect(blocked && blocked.status === 403, 'With no Sec-Fetch-Site, an Origin off the allow-list must be blocked — got ' + JSON.stringify(blocked));",
              "T.eq(csrfGuard({ headers: { origin: 'https://bank.example' } }), null, 'An allowed Origin passes');",
              "T.eq(csrfGuard({ headers: { origin: 'https://www.bank.example' } }), null, 'www.bank.example is on the list');") },
          { text: "In the browser: the forged cross-site POST from `evil.example` is refused (403), balance unchanged.",
            test: L(
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "var res = ada.submitForm('https://evil.example/prize', { action: 'https://bank.example/transfer', fields: { amount: '50' } });",
              "T.eq(res.status, 403, 'The browser marks this POST cross-site, so the guard refuses it — got ' + JSON.stringify(res));",
              "T.eq(balance.ada, 100, 'Balance unchanged');") },
          { text: "The genuine same-origin transfer still works, and a same-site form from `www.bank.example` does too.",
            test: L(
              "balance.ada = 100;",
              "var ada = newBrowser();",
              "ada.submitForm('https://bank.example/login', { action: '/login' });",
              "T.eq(ada.submitForm('https://bank.example/pay', { action: '/transfer', fields: { amount: '10' } }).status, 200, 'A same-origin transfer is allowed');",
              "T.eq(ada.submitForm('https://www.bank.example/pay', { action: 'https://bank.example/transfer', fields: { amount: '10' } }).status, 200, 'A same-site form (www.bank.example) is allowed');",
              "T.eq(balance.ada, 80, 'Both genuine transfers went through');") }
        ],
        files: [
          { name: "script.js", content: u4File(L(
            "  const site = req.headers[\"sec-fetch-site\"];",
            "  // TODO: if site is present, block only when it is \"cross-site\"",
            "  // TODO: if site is absent, block when Origin is set and not in ALLOWED_ORIGINS",
            "  return null;")) }
        ],
        hints: [
          "Handle the header first: `if (site) { ... return null; }` so the fallback runs only when it's absent.",
          "Block on cross-site: `if (site === \"cross-site\") return { status: 403, body: { error: \"cross-site request refused\" } };`. Any other value (`same-origin`, `same-site`, `none`) is allowed.",
          "The fallback checks Origin: `const origin = req.headers.origin; if (origin && ALLOWED_ORIGINS.indexOf(origin) === -1) return { status: 403, body: { error: \"cross-site request refused\" } };`."
        ],
        solution: {
          "script.js": u4File(L(
            "  const site = req.headers[\"sec-fetch-site\"];",
            "  if (site) {",
            "    if (site === \"cross-site\") return { status: 403, body: { error: \"cross-site request refused\" } };",
            "    return null; // same-origin, same-site or none",
            "  }",
            "  const origin = req.headers.origin; // older browser: fall back to Origin",
            "  if (origin && ALLOWED_ORIGINS.indexOf(origin) === -1) return { status: 403, body: { error: \"cross-site request refused\" } };",
            "  return null;"))
        }
      },

      {
        id: "auth-quiz-3",
        title: "Unit 3 quiz: CSRF",
        kind: "quiz", xp: 10,
        brief: "The attack, synchronizer tokens, signed double-submit, and Fetch Metadata vs CORS. 80% to pass.",
        questions: [
          { q: "What makes a CSRF request succeed?",
            choices: ["The attacker has stolen the victim's session cookie and replays it", "The browser attaches the victim's cookie to a request another site triggered", "A script on the attacker's page reads the cookie and copies it into the form", "The victim's password was phished and used to log in from the attacker's server"],
            answer: 1, explain: "CSRF needs no theft. The browser attaches the target site's cookie to every request to it, including one a form on another site triggered. The attacker never sees the cookie (that would need XSS or a stolen device); they just cause a request that carries it." },
          { q: "Why can't the attacker's page include a valid synchronizer token in its forged form?",
            choices: ["The token is encrypted, and only the server holds the key to decrypt it", "The token is in a Secure cookie the attacker's script cannot read", "The token is in the HTML of a page on your origin, which their page can't read", "The token changes on every request, so it is always stale by the time it is used"],
            answer: 2, explain: "The token is rendered into your page's HTML. The same-origin policy stops the attacker's page from reading another origin's document, so they can't extract it. It doesn't need to be encrypted or single-use to work." },
          { q: "A double-submit defence checks only that the `csrf` cookie equals the `csrf` form field. How is it defeated?",
            choices: ["An attacker who can set a cookie (e.g. a subdomain) chooses both halves", "The attacker reads the cookie with JavaScript and copies it into the form", "CORS lets the attacker's page read the cookie value from the response", "The form field is sent before the cookie, so they can never actually match"],
            answer: 0, explain: "Writing a cookie is much easier than reading one: a sibling subdomain can set `Domain=bank.example`. The attacker sets the cookie to a value they know and submits the same value, so cookie and body match. Binding the token to the session with an HMAC fixes it." },
          { q: "In a signed double-submit token `nonce.HMAC(key, sid + \"!\" + nonce)`, what stops an attacker forging one?",
            choices: ["The nonce is random, so they can never guess the right one", "They lack the server key, so they can't compute a signature for the victim's sid", "The token is stored server-side and compared on every request", "The HMAC is over the nonce alone, which the server keeps secret"],
            answer: 1, explain: "The signature ties the token to the session's `sid` using a key only the server has. The attacker can pick a nonce, but can't produce the matching HMAC for the victim's session, so verification fails. Nothing is stored server-side, and the nonce is public." },
          { q: "Why doesn't correct CORS configuration protect against CSRF?",
            choices: ["CORS only applies to GET requests, and CSRF uses POST", "CORS headers are advisory, and browsers apply them inconsistently", "CORS decides who may read a response, not who may send the request", "CORS requires a preflight that the attacker can simply skip"],
            answer: 2, explain: "A simple form POST is sent with no preflight and reaches your handler, which acts on it before any CORS header is consulted. CORS governs whether the *response* may be read cross-origin. The write already happened, so a CORS-perfect API can still be forged." },
          { q: "Which request should a `Sec-Fetch-Site` check refuse for an unsafe method?",
            choices: ["`same-origin`, because the page could still be compromised", "`cross-site`, a request started by an unrelated site", "`none`, because the user typed the URL themselves", "`same-site`, since subdomains are never trustworthy"],
            answer: 1, explain: "`Sec-Fetch-Site: cross-site` marks a request an unrelated site initiated, exactly the CSRF shape. `same-origin` and `same-site` are your own pages, and `none` is a user-initiated navigation like typing the URL. The browser sets this header and a page can't forge it." }
        ]
      }
    ]
  });
})();
