/* Authentication — Unit 8: Two projects */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SIM = "// site(), submitForm(), fetchFrom(), newBrowser() drive a simulated browser (authsim.js).";

  /* ---------- P1: The login system, end to end ---------- */
  var P1_GIVEN = L(
    SIM,
    "// A bank app that already works: register, password login, TOTP, transfers, reset.",
    "// It also has SIX security flaws from Units 1-7. Fix them all.",
    "const IDLE_MS = 30 * 60 * 1000;",
    "function nowMs() { return now(); }",
    "",
    "const users = new Map([[\"ada\", { salt: \"\", hash: \"\", totpSecret: \"12345678901234567890\", lastStep: -1, email: \"ada@example.com\" }]]);",
    "function setPassword(u, pw) { const s = randHex(16); users.get(u).salt = s; users.get(u).hash = slowHash(pw, s, 50); }",
    "function passwordOk(u, pw) { const x = users.get(u); return !!x && slowHash(pw, x.salt, 50) === x.hash; }",
    "setPassword(\"ada\", \"correct-horse\");",
    "",
    "// TOTP (Unit 7), with per-user replay protection.",
    "function hotp(secret, counter) {",
    "  const msg = new Uint8Array(8);",
    "  let c = counter;",
    "  for (let i = 7; i >= 0; i--) { msg[i] = c % 256; c = Math.floor(c / 256); }",
    "  const mac = hmac(\"sha1\", secret, msg);",
    "  const off = mac[19] & 15;",
    "  const bin = ((mac[off] & 0x7f) << 24) | (mac[off + 1] << 16) | (mac[off + 2] << 8) | mac[off + 3];",
    "  return String(bin % 1000000).padStart(6, \"0\");",
    "}",
    "function totpNow(secret) { return hotp(secret, Math.floor(nowMs() / 1000 / 30)); }",
    "function verifyTotp(u, code) {",
    "  const x = users.get(u); if (!x || !/^[0-9]{6}$/.test(String(code))) return false;",
    "  const step = Math.floor(nowMs() / 1000 / 30);",
    "  for (let s = step - 1; s <= step + 1; s++) if (hotp(x.totpSecret, s) === code && s > x.lastStep) { x.lastStep = s; return true; }",
    "  return false;",
    "}",
    "",
    "const sessions = new Map(); // sid -> { userName, created, lastSeen }",
    "const pending = new Map();  // pending token -> userName (password ok, awaiting TOTP)",
    "const balance = { ada: 100 };",
    "const resetTokens = new Map();",
    "const outbox = [];",
    "");

  function p1File(passwordStep, totpStep, cookieRead, idleCheck, resetResp) {
    return L(
      P1_GIVEN,
      "function currentUser(req) {",
      "  const sid = " + cookieRead + ";",
      "  const row = sessions.get(sid);",
      "  if (!row) return null;",
      idleCheck,
      "  row.lastSeen = nowMs();",
      "  return row;",
      "}",
      "",
      "site(\"https://bank.example\", req => {",
      "  const body = req.body || {};",
      "",
      "  if (req.method === \"POST\" && req.path === \"/login\") {",
      "    if (!passwordOk(body.userName, body.password)) return { status: 401, body: { error: \"invalid credentials\" } };",
      passwordStep,
      "  }",
      "",
      "  if (req.method === \"POST\" && req.path === \"/login/totp\") {",
      "    const userName = pending.get(body.pending);",
      "    if (!userName || !verifyTotp(userName, body.code)) return { status: 401, body: { error: \"bad code\" } };",
      "    pending.delete(body.pending);",
      totpStep,
      "  }",
      "",
      "  if (req.method === \"POST\" && req.path === \"/transfer\") {",
      "    const user = currentUser(req);",
      "    if (!user) return { status: 401, body: { error: \"unauthorized\" } };",
      "    if (req.headers[\"sec-fetch-site\"] === \"cross-site\") return { status: 403, body: { error: \"cross-site refused\" } };",
      "    balance[user.userName] -= Number(body.amount || 0);",
      "    return { status: 200, body: { balance: balance[user.userName] } };",
      "  }",
      "",
      "  if (req.method === \"POST\" && req.path === \"/logout\") {",
      "    const sid = " + cookieRead + ";",
      "    if (sid) sessions.delete(sid);",
      "    return { status: 200, headers: { \"Set-Cookie\": \"__Host-sid=; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=0\" }, body: { ok: true } };",
      "  }",
      "",
      "  if (req.method === \"POST\" && req.path === \"/reset\") {",
      resetResp,
      "  }",
      "",
      "  if (req.path === \"/balance\") {",
      "    const user = currentUser(req);",
      "    if (!user) return { status: 401, body: { error: \"unauthorized\" } };",
      "    return { status: 200, body: { userName: user.userName, balance: balance[user.userName] } };",
      "  }",
      "  return { status: 404, body: { error: \"not found\" } };",
      "});",
      "site(\"https://evil.example\", () => ({ status: 200, body: \"prize\" }));",
      "",
      "// A helper the checks reuse: run the full login and return the browser, signed in.",
      "function signIn(b) {",
      "  users.get(\"ada\").lastStep = -1; // a test helper, not a real login: let this step's code be used",
      "  const r = b.fetchFrom(\"https://bank.example/app\", \"/login\", { method: \"POST\", body: { userName: \"ada\", password: \"correct-horse\" } });",
      "  const p = r.body && r.body.pending;",
      "  b.fetchFrom(\"https://bank.example/app\", \"/login/totp\", { method: \"POST\", body: { pending: p, code: totpNow(\"12345678901234567890\") } });",
      "  return b;",
      "}",
      "");
  }

  /* P1 regions: flaw variants (starter) vs fixes (solution). */
  var P1_PW_FLAW = L(
    "    // FLAW 1: a session is created here, before the second factor. 2FA is skipped entirely.",
    "    const s = randHex(16); sessions.set(s, { userName: body.userName, created: nowMs(), lastSeen: nowMs() });",
    "    return { status: 200, headers: { \"Set-Cookie\": \"__Host-sid=\" + s + \"; Path=/; Secure; HttpOnly; SameSite=Lax\" }, body: { ok: true } };");
  var P1_PW_FIX = L(
    "    // Password is only the first factor: hand back a pending token, create NO session yet.",
    "    const p = randHex(16); pending.set(p, body.userName);",
    "    return { status: 200, body: { need2fa: true, pending: p } };");

  var P1_TOTP_FLAW = L(
    "    // FLAW 2: the pending token is reused as the session id (no rotation).",
    "    // FLAW 3: the cookie is a plain sid, not __Host- and without the safe attributes.",
    "    sessions.set(body.pending, { userName: userName, created: nowMs(), lastSeen: nowMs() });",
    "    return { status: 200, headers: { \"Set-Cookie\": \"sid=\" + body.pending + \"; Path=/\" }, body: { ok: true } };");
  var P1_TOTP_FIX = L(
    "    const s = randHex(16); // a fresh id at the privilege change: no fixation",
    "    sessions.set(s, { userName: userName, created: nowMs(), lastSeen: nowMs() });",
    "    return { status: 200, headers: { \"Set-Cookie\": \"__Host-sid=\" + s + \"; Path=/; Secure; HttpOnly; SameSite=Lax\" }, body: { ok: true } };");

  var P1_READ_FLAW = "req.cookies[\"sid\"]";
  var P1_READ_FIX = "req.cookies[\"__Host-sid\"]";

  var P1_IDLE_FLAW = "  // FLAW 5: no idle timeout — a session never expires.";
  var P1_IDLE_FIX = L(
    "  if (nowMs() - row.lastSeen >= IDLE_MS) { sessions.delete(sid); return null; } // idle timeout");

  var P1_RESET_FLAW = L(
    "    // FLAW 6: this reveals whether an email has an account.",
    "    if (!users.get(\"ada\") || users.get(\"ada\").email !== body.email)",
    "      return { status: 404, body: { error: \"no account with that email\" } };",
    "    const t = randHex(16); resetTokens.set(sha256(t), { email: body.email, expires: nowMs() + 900000, used: false });",
    "    outbox.push({ to: body.email, token: t });",
    "    return { status: 200, body: { message: \"reset link sent to \" + body.email } };");
  var P1_RESET_FIX = L(
    "    if (users.get(\"ada\") && users.get(\"ada\").email === body.email) {",
    "      const t = randHex(16); resetTokens.set(sha256(t), { email: body.email, expires: nowMs() + 900000, used: false });",
    "      outbox.push({ to: body.email, token: t });",
    "    }",
    "    // One identical answer, account or not.",
    "    return { status: 200, body: { message: \"if that address has an account, a reset link is on its way\" } };");

  /* ---------- P2: Sign in with idp.example ---------- */
  var P2_GIVEN = L(
    SIM,
    "// An OpenID Connect client for idp.example that already runs, with FOUR flaws from Unit 6.",
    "const CLIENT_ID = \"notes-client\";",
    "const REDIRECT_URI = \"https://notes.example/callback\";",
    "const VERIFIER = \"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk\"; // RFC 7636 App. B",
    "function nowMs() { return now(); }",
    "",
    "// base64url + text (Unit 4)",
    "const B64 = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\";",
    "function b64url(bytes) { let o = \"\"; for (let i = 0; i < bytes.length; i += 3) { const n = (bytes[i] << 16) | ((bytes[i + 1] || 0) << 8) | (bytes[i + 2] || 0); const k = Math.min(bytes.length - i, 3) + 1; for (let j = 0; j < k; j++) o += B64[(n >> (18 - 6 * j)) & 63]; } return o; }",
    "function b64urlDecode(s) { const o = []; let n = 0, b = 0; for (let i = 0; i < s.length; i++) { const v = B64.indexOf(s[i]); if (v === -1) return new Uint8Array(0); n = ((n << 6) | v) & 0xffffff; b += 6; if (b >= 8) { b -= 8; o.push((n >> b) & 255); } } return new Uint8Array(o); }",
    "const toBytes = s => new TextEncoder().encode(s);",
    "const fromBytes = x => new TextDecoder().decode(x);",
    "",
    "// The identity provider (given, correct). Signs ID tokens with a key you verify against.",
    "const IDP_SECRET = \"idp-key\";",
    "let codeSeq = 0;",
    "const authCodes = new Map();",
    "function idpSign(claims) { const h = b64url(toBytes(JSON.stringify({ alg: \"HS256\", typ: \"JWT\" }))); const p = b64url(toBytes(JSON.stringify(claims))); return h + \".\" + p + \".\" + b64url(hmac(\"sha256\", IDP_SECRET, h + \".\" + p)); }",
    "site(\"https://idp.example\", req => {",
    "  if (req.path === \"/authorize\") {",
    "    const q = req.query;",
    "    if (q.client_id !== CLIENT_ID || q.redirect_uri !== REDIRECT_URI) return { status: 400, body: \"bad request\" };",
    "    const code = \"code-\" + (++codeSeq);",
    "    authCodes.set(code, { redirectUri: q.redirect_uri, sub: \"idp-ada\", nonce: q.nonce || null, challenge: q.code_challenge || null, used: false });",
    "    return { status: 302, headers: { Location: q.redirect_uri + \"?code=\" + code + (q.state ? \"&state=\" + encodeURIComponent(q.state) : \"\") } };",
    "  }",
    "  return { status: 404 };",
    "});",
    "function idpToken(params) {",
    "  const rec = authCodes.get(params.code);",
    "  if (!rec || rec.used || rec.redirectUri !== params.redirect_uri) return { error: \"invalid_grant\" };",
    "  if (rec.challenge) { if (b64url(sha256Bytes(toBytes(params.code_verifier || \"\"))) !== rec.challenge) return { error: \"invalid_grant\" }; }",
    "  rec.used = true;",
    "  const t = Math.floor(nowMs() / 1000);",
    "  return { access_token: \"at-\" + rec.sub, id_token: idpSign({ iss: \"https://idp.example\", sub: rec.sub, aud: CLIENT_ID, nonce: rec.nonce, iat: t, exp: t + 300 }), token_type: \"Bearer\" };",
    "}",
    "",
    "const sessions = new Map();",
    "let appSeq = 0;",
    "function decodePayload(tok) { try { return JSON.parse(fromBytes(b64urlDecode(String(tok).split(\".\")[1]))); } catch (e) { return null; } }",
    "");

  function p2File(authorizeUrl, stateCheck, verifyBody, signInBody) {
    return L(
      P2_GIVEN,
      "// Verify an ID token from idp.example for this client. Return claims, or null.",
      "function verifyIdToken(token, expectedNonce) {",
      verifyBody,
      "}",
      "",
      "function buildAuthorizeUrl(state) {",
      authorizeUrl,
      "}",
      "",
      "site(\"https://notes.example\", req => {",
      "  const q = req.query;",
      "  if (req.path === \"/login\") {",
      "    const state = randHex(8);",
      "    return { status: 302, headers: { \"Set-Cookie\": \"oauth_state=\" + state + \"; Path=/; Secure; HttpOnly; SameSite=Lax\", Location: buildAuthorizeUrl(state) } };",
      "  }",
      "  if (req.path === \"/callback\") {",
      stateCheck,
      "    const tokens = idpToken({ grant_type: \"authorization_code\", code: q.code, client_id: CLIENT_ID, redirect_uri: REDIRECT_URI, code_verifier: VERIFIER });",
      "    if (tokens.error) return { status: 400, body: tokens };",
      signInBody,
      "  }",
      "  const sub = sessions.get(req.cookies.notesid) || null;",
      "  return { status: 200, body: { signedInAs: sub } };",
      "});",
      "site(\"https://evil.example\", () => ({ status: 200, body: \"prize\" }));",
      "");
  }

  var P2_URL_FLAW = L(
    "  // FLAW 2: no PKCE. Without a challenge, a stolen code can be redeemed by anyone.",
    "  return \"https://idp.example/authorize?response_type=code&client_id=\" + CLIENT_ID +",
    "    \"&redirect_uri=\" + encodeURIComponent(REDIRECT_URI) + \"&scope=openid&nonce=fixed-nonce&state=\" + state;");
  var P2_URL_FIX = L(
    "  const challenge = b64url(sha256Bytes(toBytes(VERIFIER)));",
    "  return \"https://idp.example/authorize?response_type=code&client_id=\" + CLIENT_ID +",
    "    \"&redirect_uri=\" + encodeURIComponent(REDIRECT_URI) + \"&scope=openid&nonce=fixed-nonce&state=\" + state +",
    "    \"&code_challenge=\" + challenge + \"&code_challenge_method=S256\";");

  var P2_STATE_FLAW = "    // FLAW 1: the callback trusts any code, with no state check (login CSRF).";
  var P2_STATE_FIX = "    if (!q.state || q.state !== req.cookies.oauth_state) return { status: 403, body: { error: \"bad state\" } };";

  var P2_VERIFY_FLAW = L(
    "  // FLAW 3: this decodes the token but verifies nothing — no signature, aud, nonce or exp.",
    "  return decodePayload(token);");
  var P2_VERIFY_FIX = L(
    "  const parts = String(token).split(\".\");",
    "  if (parts.length !== 3) return null;",
    "  let header; try { header = JSON.parse(fromBytes(b64urlDecode(parts[0]))); } catch (e) { return null; }",
    "  if (!header || header.alg !== \"HS256\") return null;",
    "  if (b64url(hmac(\"sha256\", IDP_SECRET, parts[0] + \".\" + parts[1])) !== parts[2]) return null;",
    "  const c = decodePayload(token);",
    "  if (!c || c.iss !== \"https://idp.example\" || c.aud !== CLIENT_ID || c.nonce !== expectedNonce) return null;",
    "  if (typeof c.exp !== \"number\" || Math.floor(nowMs() / 1000) >= c.exp) return null;",
    "  return c;");

  var P2_SIGNIN_FLAW = L(
    "    // FLAW 4: it signs in from the unverified payload instead of the verified claims.",
    "    const claims = decodePayload(tokens.id_token);",
    "    const s = \"n-\" + (++appSeq); sessions.set(s, claims.sub);",
    "    return { status: 303, headers: { \"Set-Cookie\": \"notesid=\" + s + \"; Path=/; Secure; HttpOnly; SameSite=Lax\" }, Location: \"/\" };");
  var P2_SIGNIN_FIX = L(
    "    const claims = verifyIdToken(tokens.id_token, \"fixed-nonce\");",
    "    if (!claims) return { status: 401, body: { error: \"bad id token\" } };",
    "    const s = \"n-\" + (++appSeq); sessions.set(s, claims.sub); // only after the ID token verifies",
    "    return { status: 303, headers: { \"Set-Cookie\": \"notesid=\" + s + \"; Path=/; Secure; HttpOnly; SameSite=Lax\" }, Location: \"/\" };");

  window.CODELAB.addUnit("auth", {
    id: "auth-u8",
    title: "Two projects",
    icon: "🏛️",
    blurb: "No new ideas: the whole course applied twice. Fix a login system with six planted flaws from Units 1-7, then an OpenID Connect client with four from Unit 6. This is the login NoteStream never had.",
    cheat: [
      { h: "The login system checklist", lang: "text", code: L(
        "password is factor ONE — no session until the second factor",
        "rotate the session id at every privilege change",
        "__Host-sid: Secure, HttpOnly, SameSite=Lax, Path=/, no Domain",
        "guard unsafe requests (Sec-Fetch-Site), expire idle sessions",
        "reset reveals nothing; a replayed cookie or TOTP code is refused"),
        note: "Every line is one unit of this course. A capstone is where you notice which ones you'd have forgotten." },
      { h: "The OIDC client checklist", lang: "text", code: L(
        "state, checked against a pre-login cookie (login CSRF)",
        "PKCE: a code_challenge on authorize, the verifier on exchange",
        "verify the ID token: signature, iss, aud, nonce, exp",
        "create the session only AFTER it verifies"),
        note: "Decoding a token is not verifying it. Sign in from the claims you checked, never from the ones you merely read." }
    ],
    lessons: [

      {
        id: "auth-u8-p1",
        title: "Project: The login system, end to end",
        kind: "js", chip: "AUTH", xp: 60, mins: 45, project: true,
        browser: true, crypto: true, clock: 1700000000000,
        brief: "*The whole course in one app, and a lab against your own sandbox.*\n\n`bank.example` has registration, a password login, a TOTP second factor, transfers, sessions and password reset. It runs. It also has **six security flaws**, each one a lesson from Units 1 through 7, marked `FLAW 1` … `FLAW 6` in the file. Fix all six.\n\n1. **The password step creates a session** — the second factor is skipped. Password is factor *one*: hand back a pending token and create no session until TOTP passes.\n2. **The session id isn't rotated** at the privilege change. Issue a fresh id when the login completes (Unit 1's fixation defence).\n3. **The session cookie is a plain `sid`**. Make it `__Host-sid`, `Secure`, `HttpOnly`, `SameSite=Lax`, `Path=/` — and read it back under that name.\n4. **The transfer takes cross-site requests.** (This one is already guarded for you — leave it; it's here so the forged-transfer check has something to pass.)\n5. **Sessions never expire.** Add the 30-minute idle timeout.\n6. **Reset reveals who has an account.** Return one identical response either way.\n\nThe helpers (`passwordOk`, `verifyTotp`, `slowHash`, `randHex`, `now`/`T.advance`) are done. Work through `script.js`.\n\n*This is NoteStream's missing login, done properly once so you have the shape.*",
        steps: [
          { text: "The happy path: register is done, and password → TOTP signs ada in. The session cookie is `__Host-sid` with `Secure`, `HttpOnly`, `SameSite=Lax`, `Path=/` and no `Domain`.",
            test: L(
              "var b = newBrowser();",
              "var r = b.fetchFrom('https://bank.example/app', '/login', { method: 'POST', body: { userName: 'ada', password: 'correct-horse' } });",
              "T.expect(r.body && r.body.need2fa === true && r.body.pending, 'The password step should ask for a second factor and return a pending token, not sign in — got ' + JSON.stringify(r.body));",
              "b.fetchFrom('https://bank.example/app', '/login/totp', { method: 'POST', body: { pending: r.body.pending, code: totpNow('12345678901234567890') } });",
              "T.eq(b.fetchFrom('https://bank.example/acct', '/balance').body.userName, 'ada', 'After TOTP, ada should be signed in');",
              "var c = b.jar().filter(function (x) { return x.name === '__Host-sid'; })[0];",
              "T.expect(!!c, 'The session cookie must be named __Host-sid — jar has ' + JSON.stringify(b.jar().map(function (x) { return x.name; })));",
              "T.eq([c.secure, c.httpOnly, c.sameSite, c.path, c.hostOnly], [true, true, 'Lax', '/', true], 'The cookie should be Secure, HttpOnly, SameSite=Lax, Path=/ and host-only');") },
          { text: "The password alone is not enough: a wrong password is refused, and a correct password creates no session until TOTP.",
            test: L(
              "var b = newBrowser();",
              "T.eq(b.fetchFrom('https://bank.example/app', '/login', { method: 'POST', body: { userName: 'ada', password: 'wrong' } }).status, 401, 'A wrong password → 401');",
              "b.fetchFrom('https://bank.example/app', '/login', { method: 'POST', body: { userName: 'ada', password: 'correct-horse' } });",
              "T.eq(b.fetchFrom('https://bank.example/acct', '/balance').status, 401, 'After only the password step there must be NO usable session — the second factor is not optional');",
              "T.eq(b.jar().filter(function (x) { return /sid/.test(x.name); }).length, 0, 'No session cookie should be set by the password step');") },
          { text: "Bad TOTP is refused, and a TOTP code can't be replayed: the same code twice fails the second time.",
            test: L(
              "users.get('ada').lastStep = -1; // fresh start for this step's code",
              "var b = newBrowser();",
              "var r = b.fetchFrom('https://bank.example/app', '/login', { method: 'POST', body: { userName: 'ada', password: 'correct-horse' } });",
              "T.eq(b.fetchFrom('https://bank.example/app', '/login/totp', { method: 'POST', body: { pending: r.body.pending, code: '000000' } }).status, 401, 'A wrong TOTP code → 401');",
              "var r2 = b.fetchFrom('https://bank.example/app', '/login', { method: 'POST', body: { userName: 'ada', password: 'correct-horse' } });",
              "var code = totpNow('12345678901234567890');",
              "T.eq(b.fetchFrom('https://bank.example/app', '/login/totp', { method: 'POST', body: { pending: r2.body.pending, code: code } }).status, 200, 'The right code signs in');",
              "var r3 = b.fetchFrom('https://bank.example/app', '/login', { method: 'POST', body: { userName: 'ada', password: 'correct-horse' } });",
              "T.eq(b.fetchFrom('https://bank.example/app', '/login/totp', { method: 'POST', body: { pending: r3.body.pending, code: code } }).status, 401, 'The SAME code again must be refused (replay) — verifyTotp tracks the last step used');") },
          { text: "The forged transfer fails: a cross-site POST from `evil.example` is refused and the balance is unchanged, while ada's own transfer works.",
            test: L(
              "balance.ada = 100;",
              "var b = signIn(newBrowser());",
              "T.eq(b.fetchFrom('https://bank.example/acct', '/transfer', { method: 'POST', body: { amount: '10' } }).status, 200, \"ada's own transfer should work\");",
              "var res = b.submitForm('https://evil.example/prize', { action: 'https://bank.example/transfer', fields: { amount: '50' } });",
              "T.expect(res.status === 403 || res.status === 401, 'A cross-site forged transfer must be refused — got ' + res.status + '. (With SameSite=Lax the session cookie is not even sent, so it is a 401; the Sec-Fetch guard is the backstop.)');",
              "var sentCookie = b.requests().pop().cookies['__Host-sid'];",
              "T.expect(!sentCookie, 'The Lax session cookie should not ride a cross-site POST at all');",
              "T.eq(balance.ada, 90, 'Only the genuine 10 moved');") },
          { text: "Idle timeout: 29 minutes idle still works, 31 minutes idle is a 401, and the row is gone.",
            test: L(
              "var b = signIn(newBrowser());",
              "T.advance(29 * 60 * 1000);",
              "T.eq(b.fetchFrom('https://bank.example/acct', '/balance').status, 200, '29 idle minutes: still valid');",
              "T.advance(31 * 60 * 1000);",
              "T.eq(b.fetchFrom('https://bank.example/acct', '/balance').status, 401, '31 more idle minutes: the session must expire');") },
          { text: "Logout ends the session on the server: afterwards the row is gone and the session no longer works.",
            test: L(
              "var b = signIn(newBrowser());",
              "var sid = b.jar().filter(function (x) { return x.name === '__Host-sid'; })[0].value;",
              "T.eq(b.fetchFrom('https://bank.example/acct', '/balance').status, 200, 'Signed in before logout');",
              "b.fetchFrom('https://bank.example/acct', '/logout', { method: 'POST' });",
              "T.expect(!sessions.has(sid), 'Logout must delete the server row, not just clear the cookie');",
              "T.eq(b.fetchFrom('https://bank.example/acct', '/balance').status, 401, 'After logout the session no longer works');") },
          { text: "Password reset reveals nothing: a known and an unknown email get byte-identical responses, and only the real account is emailed.",
            test: L(
              "outbox.length = 0;",
              "var b = newBrowser();",
              "var known = b.fetchFrom('https://bank.example/app', '/reset', { method: 'POST', body: { email: 'ada@example.com' } });",
              "var unknown = b.fetchFrom('https://bank.example/app', '/reset', { method: 'POST', body: { email: 'nobody@example.com' } });",
              "T.eq(JSON.stringify(unknown.body), JSON.stringify(known.body), 'The response must be identical for a known and an unknown email — known ' + JSON.stringify(known.body) + ' unknown ' + JSON.stringify(unknown.body));",
              "T.eq(known.status, unknown.status, 'Same status too');",
              "T.eq(outbox.length, 1, 'Only the real account is emailed');") }
        ],
        files: [
          { name: "script.js", content: p1File(P1_PW_FLAW, P1_TOTP_FLAW, P1_READ_FLAW, P1_IDLE_FLAW, P1_RESET_FLAW) }
        ],
        hints: [
          "FLAW 1: replace the session creation on `/login` with `const p = randHex(16); pending.set(p, body.userName); return { status: 200, body: { need2fa: true, pending: p } };`.",
          "FLAWS 2 and 3 are on `/login/totp`: mint a fresh `randHex(16)` for the id (don't reuse `body.pending`), and set `__Host-sid=<id>; Path=/; Secure; HttpOnly; SameSite=Lax`. Read the same `__Host-sid` in `currentUser`.",
          "FLAW 5: in `currentUser`, `if (nowMs() - row.lastSeen >= IDLE_MS) { sessions.delete(sid); return null; }`. FLAW 6: send one message for every email, and only push to the outbox when the account exists."
        ],
        solution: {
          "script.js": p1File(P1_PW_FIX, P1_TOTP_FIX, P1_READ_FIX, P1_IDLE_FIX, P1_RESET_FIX)
        }
      },

      {
        id: "auth-u8-p2",
        title: "Project: Sign in with idp.example",
        kind: "js", chip: "AUTH", xp: 60, mins: 40, project: true,
        browser: true, crypto: true, clock: 1700000000000,
        brief: "*The OAuth half of the capstone, and a lab against your own sandbox.*\n\n`notes.example` signs users in with `idp.example` using the authorization-code flow. It works, and it has **four flaws** from Unit 6, marked in the file. Fix all four.\n\n1. **No `state` check.** The callback accepts any code, so an attacker can inject theirs (login CSRF). Compare `state` against the pre-login `oauth_state` cookie.\n2. **No PKCE.** Add a `code_challenge` (S256 of `VERIFIER`) and `code_challenge_method=S256` to the authorize URL, so a stolen code is useless.\n3. **The ID token is never verified.** `verifyIdToken` just decodes it. Check the HS256 signature and then `iss`, `aud`, `nonce` and `exp`.\n4. **The session is created from the unverified payload.** Sign in from the *verified* claims, and only if they verify.\n\nThe IdP is given and correct, `VERIFIER` is RFC 7636's example, and the base64url and JWT helpers are done. Work through `script.js`.\n\n*Decoding a token tells you what it claims. Verifying it tells you whether to believe it. Sign in only from the second.*",
        steps: [
          { text: "The genuine flow signs ada in: `/login` → the IdP → `/callback`, and the session holds the IdP's `sub`.",
            test: L(
              "var b = newBrowser();",
              "b.visit('https://notes.example/login');",
              "T.eq(b.visit('https://notes.example/').body.signedInAs, 'idp-ada', 'A real sign-in should end with ada logged in — check the flow still works after your fixes');") },
          { text: "PKCE is in place: the authorize URL carries the S256 challenge and method, and never the verifier.",
            test: L(
              "var b = newBrowser();",
              "b.visit('https://notes.example/login');",
              "var authReq = b.requests().filter(function (r) { return /idp.example\\/authorize/.test(r.url); })[0];",
              "var p = new URL(authReq.url).searchParams;",
              "T.eq(p.get('code_challenge_method'), 'S256', 'Add code_challenge_method=S256');",
              "T.eq(p.get('code_challenge'), b64url(sha256Bytes(toBytes(VERIFIER))), 'The challenge is base64url(SHA-256(VERIFIER))');",
              "T.expect(authReq.url.indexOf(VERIFIER) === -1, 'The verifier must never appear in the authorize URL');") },
          { text: "Login CSRF is refused: an attacker's code injected into the victim's callback (no matching state) does not sign anyone in.",
            test: L(
              "authCodes.set('attacker-code', { redirectUri: REDIRECT_URI, sub: 'idp-attacker', nonce: 'fixed-nonce', challenge: b64url(sha256Bytes(toBytes(VERIFIER))), used: false });",
              "var victim = newBrowser();",
              "victim.click('https://evil.example/', 'https://notes.example/callback?code=attacker-code&state=guess');",
              "T.eq(victim.visit('https://notes.example/').body.signedInAs, null, 'A callback whose state does not match the oauth_state cookie must be refused');") },
          { text: "The ID token is really verified: a token for a different `aud`, a stale `nonce`, an expired token, and a tampered one are all rejected.",
            test: L(
              "var t = Math.floor(now() / 1000);",
              "var mk = function (o) { return idpSign(Object.assign({ iss: 'https://idp.example', sub: 'idp-ada', aud: CLIENT_ID, nonce: 'fixed-nonce', iat: t, exp: t + 300 }, o)); };",
              "T.expect(!!verifyIdToken(mk({}), 'fixed-nonce'), 'A correct ID token should verify');",
              "T.eq(verifyIdToken(mk({ aud: 'other-client' }), 'fixed-nonce'), null, 'Wrong aud → null');",
              "T.eq(verifyIdToken(mk({}), 'a-different-nonce'), null, 'Wrong nonce → null');",
              "T.eq(verifyIdToken(mk({ exp: t - 5 }), 'fixed-nonce'), null, 'Expired → null');",
              "var good = mk({}); var bad = good.split('.'); bad[2] = 'AAAA';",
              "T.eq(verifyIdToken(bad.join('.'), 'fixed-nonce'), null, 'A broken signature → null');") },
          { text: "A forged ID token can't sign anyone in: even delivered through a valid code, a token the IdP didn't sign is rejected at the callback.",
            test: L(
              "var b = newBrowser();",
              "var forged = ['x', b64url(toBytes(JSON.stringify({ iss: 'https://idp.example', sub: 'attacker', aud: CLIENT_ID, nonce: 'fixed-nonce', exp: 9999999999 }))), 'nosig'].join('.');",
              "T.eq(verifyIdToken(forged, 'fixed-nonce'), null, 'A token with no valid signature must not verify');",
              "b.visit('https://notes.example/login');",
              "T.eq(b.visit('https://notes.example/').body.signedInAs, 'idp-ada', 'And the genuine flow still signs in the real user, from the verified claims');") }
        ],
        files: [
          { name: "script.js", content: p2File(P2_URL_FLAW, P2_STATE_FLAW, P2_VERIFY_FLAW, P2_SIGNIN_FLAW) }
        ],
        hints: [
          "FLAW 1 (callback): `if (!q.state || q.state !== req.cookies.oauth_state) return { status: 403, body: { error: \"bad state\" } };` before the exchange.",
          "FLAW 2 (buildAuthorizeUrl): add `\"&code_challenge=\" + b64url(sha256Bytes(toBytes(VERIFIER))) + \"&code_challenge_method=S256\"`.",
          "FLAWS 3 and 4: fill `verifyIdToken` (signature with IDP_SECRET, then iss/aud/nonce/exp — like auth-u6-5), then in the callback `const claims = verifyIdToken(tokens.id_token, \"fixed-nonce\"); if (!claims) return { status: 401, ... };` and use `claims.sub`."
        ],
        solution: {
          "script.js": p2File(P2_URL_FIX, P2_STATE_FIX, P2_VERIFY_FIX, P2_SIGNIN_FIX)
        }
      },

      {
        id: "auth-quiz-8",
        title: "Final quiz: Authentication",
        kind: "quiz", xp: 15,
        brief: "The whole course: sessions, cookies, CSRF, signing, JWTs, OAuth and second factors. 80% to pass.",
        questions: [
          { q: "In a login with a password and TOTP, when should the authenticated session be created?",
            choices: ["After the password verifies, then upgraded once TOTP passes", "Only after BOTH the password and the TOTP code have verified", "Before either, so the form has a session to attach the token to", "After the password; TOTP is a separate optional convenience"],
            answer: 1, explain: "A session minted at the password step is a session that skips the second factor: anyone past the password is in. The second factor only means something if no usable session exists until it passes." },
          { q: "Why rotate the session id at login even when the visitor already had one?",
            choices: ["To keep the cookie small as more data is added to the session", "So an id an attacker planted before login can't become the authenticated one", "Because browsers reject a cookie whose value never changes", "To force other devices to log in again for security"],
            answer: 1, explain: "Session fixation plants an id in the victim's browser before they log in. If login authenticates that same id, the attacker's copy is now the victim's session. A fresh id at every privilege change breaks that." },
          { q: "A cookie is set with `__Host-sid=…; Secure; HttpOnly; SameSite=Lax; Path=/`. What does the `__Host-` prefix add?",
            choices: ["The browser enforces Secure, no Domain, and Path=/, so only this exact host can set it", "It encrypts the cookie value so scripts can't read it", "It makes the cookie survive the browser being closed", "It sends the cookie to every subdomain automatically"],
            answer: 0, explain: "`__Host-` is a promise the browser checks: Secure, from https, no Domain, Path=/. That means no sibling subdomain can set or overwrite it, closing the cookie-tossing attack that defeats naive double-submit CSRF tokens." },
          { q: "Which single measure most directly stops a classic cross-site form POST from forging a state-changing request?",
            choices: ["Serving the API only over HTTPS", "A correct CORS Access-Control-Allow-Origin header", "A SameSite=Lax (or Strict) session cookie, or a CSRF token", "Marking the session cookie HttpOnly"],
            answer: 2, explain: "SameSite keeps the cookie off cross-site POSTs, and a CSRF token the attacker can't read stops the forgery outright. HTTPS and HttpOnly are good but address other risks, and CORS governs reading a response, not sending a request." },
          { q: "An access token and an ID token come back from an OIDC login. Which is safe to send to a downstream API, and which tells you who logged in?",
            choices: ["Send the ID token to the API; read the access token for identity", "Send the access token to the API; read the verified ID token for identity", "Either works for both, since both are signed by the IdP", "Send neither; look the user up again with the authorization code"],
            answer: 1, explain: "The access token is the key to an API and opaque to you. The ID token is the statement about the user, which you verify (signature, aud, nonce, exp) and then read. Sending an ID token to an API, or trusting an access token as identity, is a known mix-up." },
          { q: "Across the course, what's the recurring reason hand-built auth code is shown but never meant to ship?",
            choices: ["The algorithms are too slow to run in production at scale", "Building it once shows the rules; real systems use vetted libraries that handle the edges", "Browsers block custom crypto, so only libraries work in production", "The exercises use weaker keys that libraries would reject"],
            answer: 1, explain: "Base64url, HMAC, JWT verification, TOTP and WebAuthn are built by hand here so the rules stop being magic. Production should use maintained libraries and framework session middleware, which cover the edge cases hand-rolled code forgets. Understanding is the goal; the library is the tool." }
        ]
      }
    ]
  });
})();
