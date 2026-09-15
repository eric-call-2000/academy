/* Authentication — Unit 6: OAuth 2.0 and PKCE */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SIM = "// site(), visit(), click(), newBrowser() drive a simulated browser (authsim.js).";
  var CONSTS = L(
    "const CLIENT_ID = \"app-client\";",
    "const REDIRECT_URI = \"https://app.example/callback\";",
    "const IDP_USER = { sub: \"idp-ada-42\", name: \"Ada\" }; // already signed in at the IdP",
    "");

  var B64 = L(
    "// base64url + text helpers (auth-u4-1)",
    "const B64URL = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\";",
    "function b64url(bytes) {",
    "  let out = \"\";",
    "  for (let i = 0; i < bytes.length; i += 3) {",
    "    const n = (bytes[i] << 16) | ((bytes[i + 1] || 0) << 8) | (bytes[i + 2] || 0);",
    "    const chars = Math.min(bytes.length - i, 3) + 1;",
    "    for (let j = 0; j < chars; j++) out += B64URL[(n >> (18 - 6 * j)) & 63];",
    "  }",
    "  return out;",
    "}",
    "function b64urlDecode(str) {",
    "  const out = [];",
    "  let n = 0, bits = 0;",
    "  for (let i = 0; i < str.length; i++) {",
    "    const v = B64URL.indexOf(str[i]);",
    "    if (v === -1) return new Uint8Array(0);",
    "    n = ((n << 6) | v) & 0xffffff; bits += 6;",
    "    if (bits >= 8) { bits -= 8; out.push((n >> bits) & 255); }",
    "  }",
    "  return new Uint8Array(out);",
    "}",
    "const toBytes = s => new TextEncoder().encode(s);",
    "const fromBytes = b => new TextDecoder().decode(b);",
    "");

  /* The identity provider. `strictRedirect` picks the redirect_uri check. */
  function idpBlock(pkce, redirectCheck) {
    return L(
      "let codeSeq = 0;",
      "const authCodes = new Map(); // code -> { redirectUri, sub, nonce, challenge, used }",
      "const IDP_SECRET = \"idp-signing-secret\"; // a real IdP signs with an asymmetric key; the client would hold only its public half",
      "",
      "function idpSign(claims) {",
      "  const h = b64url(toBytes(JSON.stringify({ alg: \"HS256\", typ: \"JWT\" })));",
      "  const p = b64url(toBytes(JSON.stringify(claims)));",
      "  return h + \".\" + p + \".\" + b64url(hmac(\"sha256\", IDP_SECRET, h + \".\" + p));",
      "}",
      "",
      "site(\"https://idp.example\", req => {",
      "  if (req.path === \"/authorize\") {",
      "    const q = req.query;",
      "    if (q.client_id !== CLIENT_ID) return { status: 400, body: \"unknown client\" };",
      redirectCheck,
      "    const code = \"code-\" + (++codeSeq);",
      "    authCodes.set(code, { redirectUri: q.redirect_uri, sub: IDP_USER.sub, nonce: q.nonce || null, challenge: q.code_challenge || null, used: false });",
      "    return { status: 302, headers: { Location: q.redirect_uri + \"?code=\" + code + (q.state ? \"&state=\" + encodeURIComponent(q.state) : \"\") } };",
      "  }",
      "  return { status: 404, body: \"not found\" };",
      "});",
      "",
      "// The back channel: the app SERVER calls this directly. No browser, no cookies.",
      "function idpToken(params) {",
      "  const rec = authCodes.get(params.code);",
      "  if (!rec || rec.used) return { error: \"invalid_grant\" };",
      "  if (rec.redirectUri !== params.redirect_uri) return { error: \"invalid_grant\" };",
      pkce,
      "  rec.used = true;",
      "  const now = Math.floor(nowMs() / 1000);",
      "  const idToken = idpSign({ iss: \"https://idp.example\", sub: rec.sub, aud: CLIENT_ID, nonce: rec.nonce, iat: now, exp: now + 300 });",
      "  return { access_token: \"at-\" + rec.sub, id_token: idToken, token_type: \"Bearer\", sub: rec.sub };",
      "}",
      "");
  }
  var PKCE_ENFORCE = L(
    "  if (rec.challenge) {",
    "    if (!params.code_verifier) return { error: \"invalid_grant\" };",
    "    if (b64url(sha256Bytes(toBytes(params.code_verifier))) !== rec.challenge) return { error: \"invalid_grant\" };",
    "  }");
  var REDIRECT_EXACT = "    if (q.redirect_uri !== REDIRECT_URI) return { status: 400, body: \"bad redirect_uri\" };";

  var APP_HEAD = L(
    "const sessions = new Map(); // appsid -> the IdP sub we signed in",
    "let appSeq = 0;",
    "function nowMs() { return now(); }",
    "");

  /* ---------- auth-u6-1 ---------- */
  function u1File(buildBody, callbackBody) {
    return L(
      SIM, CONSTS, B64,
      idpBlock("", REDIRECT_EXACT),
      APP_HEAD,
      "// Build the URL that sends the browser to the IdP to sign in.",
      "function buildAuthorizeUrl() {",
      buildBody,
      "}",
      "",
      "site(\"https://app.example\", req => {",
      "  if (req.path === \"/login\") return { status: 302, headers: { Location: buildAuthorizeUrl() } };",
      "  if (req.path === \"/callback\") {",
      callbackBody,
      "  }",
      "  const sub = sessions.get(req.cookies.appsid) || null;",
      "  return { status: 200, body: { signedInAs: sub } };",
      "});",
      "",
      "const ada = newBrowser();",
      "ada.visit(\"https://app.example/login\");",
      "console.log(ada.visit(\"https://app.example/\").body);",
      "");
  }

  /* ---------- auth-u6-2 ---------- */
  function u2File(loginBody, callbackGuard) {
    return L(
      SIM, CONSTS, B64,
      idpBlock("", REDIRECT_EXACT),
      APP_HEAD,
      "let stateSeq = 0;",
      "function newState() { return \"state-\" + (++stateSeq); }",
      "",
      "site(\"https://app.example\", req => {",
      "  if (req.path === \"/login\") {",
      loginBody,
      "  }",
      "  if (req.path === \"/callback\") {",
      "    const q = req.query;",
      callbackGuard,
      "    const tokens = idpToken({ grant_type: \"authorization_code\", code: q.code, client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });",
      "    if (tokens.error) return { status: 400, body: tokens };",
      "    const s = \"app-\" + (++appSeq); sessions.set(s, tokens.sub);",
      "    return { status: 303, headers: { \"Set-Cookie\": \"appsid=\" + s + \"; Path=/; Secure; HttpOnly; SameSite=Lax\" }, Location: \"/\" };",
      "  }",
      "  const sub = sessions.get(req.cookies.appsid) || null;",
      "  return { status: 200, body: { signedInAs: sub } };",
      "});",
      "site(\"https://evil.example\", () => ({ status: 200, body: \"free prize\" }));",
      "",
      "const ada = newBrowser();",
      "console.log(ada.visit(\"https://app.example/login\") && ada.visit(\"https://app.example/\").body);",
      "");
  }

  /* ---------- auth-u6-3 ---------- */
  function u3File(challengeBody, buildBody, exchangeBody) {
    return L(
      SIM, CONSTS, B64,
      "// The RFC 7636 Appendix B verifier, fixed here so the challenge is reproducible.",
      "const CODE_VERIFIER = \"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk\";",
      "",
      idpBlock(PKCE_ENFORCE, REDIRECT_EXACT),
      APP_HEAD,
      "// The S256 code challenge for a verifier: base64url(SHA-256(verifier)).",
      "function challengeFor(verifier) {",
      challengeBody,
      "}",
      "",
      "function buildAuthorizeUrl() {",
      buildBody,
      "}",
      "",
      "site(\"https://app.example\", req => {",
      "  if (req.path === \"/login\") return { status: 302, headers: { Location: buildAuthorizeUrl() } };",
      "  if (req.path === \"/callback\") {",
      exchangeBody,
      "    if (tokens.error) return { status: 400, body: tokens };",
      "    const s = \"app-\" + (++appSeq); sessions.set(s, tokens.sub);",
      "    return { status: 303, headers: { \"Set-Cookie\": \"appsid=\" + s + \"; Path=/; Secure; HttpOnly; SameSite=Lax\" }, Location: \"/\" };",
      "  }",
      "  const sub = sessions.get(req.cookies.appsid) || null;",
      "  return { status: 200, body: { signedInAs: sub } };",
      "});",
      "",
      "const ada = newBrowser();",
      "ada.visit(\"https://app.example/login\");",
      "console.log(ada.visit(\"https://app.example/\").body);",
      "");
  }

  /* ---------- auth-u6-4 ---------- */
  function u4File(redirectCheck) {
    return L(
      SIM, CONSTS, B64,
      idpBlock(PKCE_ENFORCE, redirectCheck),
      APP_HEAD,
      "// A malicious app registered with the IdP under the SAME client_id (a public client's",
      "// id is not a secret). It tries to steer the code to a host it controls.",
      "site(\"https://app.example.evil.example\", req => ({ status: 200, body: { stolenCode: req.query.code || null } }));",
      "site(\"https://app.example\", req => ({ status: 200, body: { path: req.path } }));",
      "",
      "// A normal sign-in, for comparison.",
      "const good = newBrowser();",
      "console.log(good.visit(\"https://idp.example/authorize?response_type=code&client_id=app-client&redirect_uri=\" + encodeURIComponent(REDIRECT_URI) + \"&scope=openid\").url);",
      "");
  }

  /* ---------- auth-u6-5 ---------- */
  function u5File(verifyBody) {
    return L(
      SIM, CONSTS, B64,
      idpBlock(PKCE_ENFORCE, REDIRECT_EXACT),
      APP_HEAD,
      "// Decode a JWT's payload without checking anything (debugging only).",
      "function decodePayload(token) {",
      "  try { return JSON.parse(fromBytes(b64urlDecode(String(token).split(\".\")[1]))); } catch (e) { return null; }",
      "}",
      "",
      "// Verify an ID token from OUR IdP for OUR client. Return the claims, or null.",
      "function verifyIdToken(token, expectedNonce) {",
      verifyBody,
      "}",
      "",
      "// Issue tokens the way the flow would, so the checks have something to verify.",
      "function issueFor(nonce) {",
      "  authCodes.set(\"c\", { redirectUri: REDIRECT_URI, sub: IDP_USER.sub, nonce: nonce, challenge: null, used: false });",
      "  return idpToken({ code: \"c\", redirect_uri: REDIRECT_URI });",
      "}",
      "",
      "const t = issueFor(\"n-123\");",
      "console.log(verifyIdToken(t.id_token, \"n-123\"));",
      "");
  }

  window.CODELAB.addUnit("auth", {
    id: "auth-u6",
    title: "OAuth 2.0 and PKCE",
    icon: "🎫",
    blurb: "\"Sign in with …\" is a redirect, a code, and a back-channel exchange. Build the authorization-code flow against idp.example, bind it with state, make a stolen code useless with PKCE, match redirect_uri exactly, and tell an ID token from an access token — the modern flow from RFC 9700.",
    cheat: [
      { h: "Authorization code flow", lang: "text", code: L(
        "1. app → browser redirected to idp/authorize?client_id&redirect_uri&scope",
        "2. idp → 302 back to redirect_uri?code=…  (user approved)",
        "3. app SERVER → POST idp/token { code, code_verifier }   (back channel)",
        "4. idp → { access_token, id_token }; app creates its own session"),
        note: "The code travels through the browser; the tokens never do. The exchange is server-to-server, so a leaked code alone isn't enough." },
      { h: "state and PKCE", lang: "js", code: L(
        "state = random, stored pre-login; reject a callback whose state doesn't match",
        "verifier = random; challenge = base64url(sha256(verifier))",
        "// authorize carries challenge; token carries verifier",
        "// idp checks sha256(verifier) === challenge"),
        note: "state stops login CSRF (a code injected into your callback). PKCE stops a stolen code being redeemed by anyone but the app that started the flow." },
      { h: "Exact redirect_uri", lang: "js", code: L(
        "if (redirect_uri !== registered) return error;   // never startsWith",
        "// startsWith(\"https://app.example\") also matches",
        "//   https://app.example.evil.example/cb"),
        note: "The redirect_uri is where the code is sent. A loose match hands the code to an attacker's host. Compare the whole string." },
      { h: "ID token vs access token", lang: "text", code: L(
        "id_token   a JWT ABOUT the user, FOR your client: check aud, nonce, exp, iss",
        "access_token  a key TO an API; opaque to you; never inspect it as an ID token",
        "// never send an id_token to an API; never sign in from an access_token"),
        note: "They answer different questions: who signed in, versus what may be called. An access token for another API is not proof of who the user is." }
    ],
    lessons: [

      {
        id: "auth-u6-1",
        title: "The authorization code flow, one redirect at a time",
        kind: "js", chip: "AUTH", xp: 15, mins: 15,
        browser: true, crypto: true, clock: 1700000000000,
        brief: "\"Sign in with Google\" never shows your app the password. Instead it's a **redirect dance** between your app (the *client*) and an identity provider, `idp.example`. Four steps:\n\n1. Your app redirects the browser to the IdP's `/authorize`, naming itself (`client_id`), where to come back (`redirect_uri`) and what it wants (`scope`).\n2. The user is already signed in to the IdP, so it approves and redirects the browser **back** to your `redirect_uri` with a one-time `code` in the query.\n3. Your **server** takes that code and, over a back channel (server to server, no browser), POSTs it to the IdP's `/token`. This is a plain function call here, `idpToken(...)`, because it never touches the browser or its cookies.\n4. The IdP returns the tokens, and your app creates **its own** session, exactly the server-side session from Unit 1.\n\nWhy the detour? The code goes through the browser, but the tokens don't: they come back on the back channel. A code glimpsed in a URL or a log is useless without the server's half of the exchange.\n\nWrite two pieces. `buildAuthorizeUrl()` returns the IdP URL with `response_type=code`, `client_id`, `redirect_uri` (URL-encoded) and `scope=openid`. Then the `/callback` handler: read `code` from `req.query`, exchange it with `idpToken({ grant_type: \"authorization_code\", code, client_id, redirect_uri })`, and on success store the returned `sub` in a session cookie and redirect to `/`.",
        steps: [
          { text: "`buildAuthorizeUrl()` points at the IdP's `/authorize` with `response_type=code`, the client id, the exact redirect URI, and a scope.",
            test: L(
              "T.expect(typeof buildAuthorizeUrl === 'function', 'Define buildAuthorizeUrl().');",
              "var u = new URL(buildAuthorizeUrl());",
              "T.eq(u.origin + u.pathname, 'https://idp.example/authorize', 'The URL should target the IdP authorize endpoint — got ' + JSON.stringify(u.origin + u.pathname));",
              "T.eq(u.searchParams.get('response_type'), 'code', 'response_type must be code');",
              "T.eq(u.searchParams.get('client_id'), 'app-client', 'client_id identifies your app');",
              "T.eq(u.searchParams.get('redirect_uri'), 'https://app.example/callback', 'redirect_uri is where the IdP sends the code back');",
              "T.expect((u.searchParams.get('scope') || '').indexOf('openid') !== -1, 'Ask for the openid scope');") },
          { text: "The redirects happen in order: `/login` → the IdP's `/authorize` → back to `/callback?code=…`.",
            test: L(
              "var ada = newBrowser();",
              "ada.visit('https://app.example/login');",
              "var urls = ada.requests().map(function (r) { return r.url.split('?')[0]; });",
              "T.eq(urls[0], 'https://app.example/login', 'It starts at the app login');",
              "T.eq(urls[1], 'https://idp.example/authorize', 'then the browser is sent to the IdP');",
              "T.eq(urls[2], 'https://app.example/callback', 'then the IdP redirects back to the callback');",
              "var cb = ada.requests()[2];",
              "T.expect(/[?&]code=/.test(cb.url), 'The callback should arrive with a code in the query — got ' + cb.url);") },
          { text: "The callback exchanges the code and signs the user in: afterwards the app session is the IdP's `sub`.",
            test: L(
              "var ada = newBrowser();",
              "ada.visit('https://app.example/login');",
              "T.eq(ada.visit('https://app.example/').body.signedInAs, 'idp-ada-42', 'After the flow the app session should hold the IdP sub. Did the callback call idpToken and store tokens.sub?');") },
          { text: "The tokens never travel through the browser: no request the browser made carries an access token.",
            test: L(
              "var ada = newBrowser();",
              "ada.visit('https://app.example/login');",
              "var leaked = ada.requests().some(function (r) { return /at-idp-ada-42/.test(JSON.stringify(r)); });",
              "T.expect(!leaked, 'An access token appeared in a browser request. The exchange is server-to-server (idpToken), so tokens never touch the browser');",
              "var cb = ada.requests()[2];",
              "T.expect(/[?&]code=/.test(cb.url), 'Only the one-time code rides the browser, in the callback URL');") }
        ],
        files: [
          { name: "script.js", content: u1File(
            L("  // TODO: return the IdP /authorize URL with response_type=code, client_id,",
              "  // redirect_uri (URL-encoded), and scope=openid.",
              "  return \"https://idp.example/authorize\";"),
            L("    // TODO: read req.query.code, exchange it with idpToken({...}), and on success",
              "    // store tokens.sub in a session and redirect to \"/\".",
              "    return { status: 200, body: { todo: true } };")) }
        ],
        hints: [
          "Build the URL by hand: `return \"https://idp.example/authorize?response_type=code&client_id=\" + CLIENT_ID + \"&redirect_uri=\" + encodeURIComponent(REDIRECT_URI) + \"&scope=openid\";`.",
          "In the callback, exchange first: `const tokens = idpToken({ grant_type: \"authorization_code\", code: req.query.code, client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });` and bail on `tokens.error`.",
          "Then make a session like Unit 1: `const s = \"app-\" + (++appSeq); sessions.set(s, tokens.sub); return { status: 303, headers: { \"Set-Cookie\": \"appsid=\" + s + \"; Path=/; Secure; HttpOnly; SameSite=Lax\" }, Location: \"/\" };`."
        ],
        solution: {
          "script.js": u1File(
            L("  return \"https://idp.example/authorize?response_type=code\" +",
              "    \"&client_id=\" + CLIENT_ID +",
              "    \"&redirect_uri=\" + encodeURIComponent(REDIRECT_URI) +",
              "    \"&scope=openid\";"),
            L("    const tokens = idpToken({ grant_type: \"authorization_code\", code: req.query.code, client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });",
              "    if (tokens.error) return { status: 400, body: tokens };",
              "    const s = \"app-\" + (++appSeq); sessions.set(s, tokens.sub); // the app's own session, for the IdP user",
              "    return { status: 303, headers: { \"Set-Cookie\": \"appsid=\" + s + \"; Path=/; Secure; HttpOnly; SameSite=Lax\" }, Location: \"/\" };"))
        }
      },

      {
        id: "auth-u6-2",
        title: "state: CSRF for the redirect",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        browser: true, crypto: true, clock: 1700000000000,
        brief: "*A lab against your own sandbox: the attacker runs their own sign-in, then lures the victim to your callback.*\n\nThe callback accepts any `code` in its query and signs someone in. That's an open door. An attacker signs in to the IdP as *themselves*, captures the `code` the IdP hands back (it's right there in the redirect URL), and instead of using it, emails the victim a link: `https://app.example/callback?code=ATTACKER_CODE`. The victim's browser hits your callback, your server exchanges the attacker's code, and now the **victim is logged into the attacker's account**. Anything the victim then saves, a payment method, a document, lands in the attacker's account, for the attacker to collect later. This is *login CSRF*.\n\nThe fix is `state`: a random value your app creates *before* the redirect, ties to the pre-login browser, and checks when the code comes back. Since the attacker can't set a value in the victim's browser that matches, an injected callback fails the check.\n\nWrite two parts:\n\n- In `/login`: make a `state` with `newState()`, set it in a cookie (`oauth_state`, `SameSite=Lax` so it survives the round trip), and add `&state=` + that value to the authorize URL.\n- In `/callback`: reject the request (a `403`) unless `req.query.state` equals the `oauth_state` cookie, *before* exchanging the code.\n\nThe IdP echoes `state` back unchanged, so a genuine flow always matches.",
        steps: [
          { text: "`/login` sends `state` two ways: an `oauth_state` cookie and the same value on the authorize URL.",
            test: L(
              "var ada = newBrowser();",
              "var res = ada.visit('https://app.example/login');",
              "var authReq = ada.requests().filter(function (r) { return /idp.example\\/authorize/.test(r.url); })[0];",
              "T.expect(!!authReq, 'The browser should reach the IdP authorize endpoint');",
              "var urlState = new URL(authReq.url).searchParams.get('state');",
              "T.expect(!!urlState, 'The authorize URL needs a state parameter');",
              "var cookie = ada.jar().filter(function (c) { return c.name === 'oauth_state'; })[0];",
              "T.expect(!!cookie, 'Login should set an oauth_state cookie');",
              "T.eq(cookie.value, urlState, 'The cookie and the URL must carry the SAME state value');",
              "T.eq(cookie.sameSite, 'Lax', 'oauth_state must be SameSite=Lax so it survives the redirect back from the IdP');") },
          { text: "The genuine flow still works: state matches, the code is exchanged, ada is signed in as herself.",
            test: L(
              "var ada = newBrowser();",
              "ada.visit('https://app.example/login');",
              "T.eq(ada.visit('https://app.example/').body.signedInAs, 'idp-ada-42', 'A real sign-in should end with ada logged in');") },
          { text: "The attack is refused: an attacker's code injected into the victim's callback (no matching state) is rejected, and the victim is not signed in.",
            test: L(
              "authCodes.set('attacker-code', { redirectUri: REDIRECT_URI, sub: 'idp-attacker-666', nonce: null, challenge: null, used: false });",
              "var victim = newBrowser();",
              "var res = victim.click('https://evil.example/inbox', 'https://app.example/callback?code=attacker-code&state=anything');",
              "T.eq(victim.visit('https://app.example/').body.signedInAs, null, 'The victim was signed in from an injected callback. Reject a callback whose state does not match the oauth_state cookie');",
              "T.expect(authCodes.get('attacker-code') && authCodes.get('attacker-code').used === false, \"The attacker's code must not even be exchanged: check state before calling idpToken\");") },
          { text: "The check binds to *this* browser: a state value that isn't this browser's `oauth_state` cookie is refused even if the code is otherwise valid.",
            test: L(
              "var ada = newBrowser();",
              "ada.visit('https://app.example/login');",
              "var mallory = newBrowser();",
              "mallory.visit('https://app.example/login');",
              "var malloryState = mallory.jar().filter(function (c) { return c.name === 'oauth_state'; })[0].value;",
              "authCodes.set('fresh-code', { redirectUri: REDIRECT_URI, sub: 'idp-attacker-666', nonce: null, challenge: null, used: false });",
              "ada.click('https://evil.example/', 'https://app.example/callback?code=fresh-code&state=' + malloryState);",
              "T.expect(ada.visit('https://app.example/').body.signedInAs !== 'idp-attacker-666', \"A state from mallory's session must not validate ada's callback\");") }
        ],
        files: [
          { name: "script.js", content: u2File(
            L("    // TODO: make a state (newState()), set it in an oauth_state cookie (SameSite=Lax),",
              "    // and add &state=<value> to the authorize URL.",
              "    const url = \"https://idp.example/authorize?response_type=code&client_id=\" + CLIENT_ID +",
              "      \"&redirect_uri=\" + encodeURIComponent(REDIRECT_URI) + \"&scope=openid\";",
              "    return { status: 302, headers: { Location: url } };"),
            L("    // TODO: reject with 403 unless q.state matches the oauth_state cookie.")) }
        ],
        hints: [
          "Create the value once and use it twice: `const state = newState();`, then put it in both the cookie and the URL.",
          "`return { status: 302, headers: { \"Set-Cookie\": \"oauth_state=\" + state + \"; Path=/; Secure; HttpOnly; SameSite=Lax\", Location: url + \"&state=\" + state } };`.",
          "In the callback, guard first: `if (!q.state || q.state !== req.cookies.oauth_state) return { status: 403, body: { error: \"bad state\" } };`."
        ],
        solution: {
          "script.js": u2File(
            L("    const state = newState();",
              "    const url = \"https://idp.example/authorize?response_type=code&client_id=\" + CLIENT_ID +",
              "      \"&redirect_uri=\" + encodeURIComponent(REDIRECT_URI) + \"&scope=openid&state=\" + state;",
              "    return { status: 302, headers: { \"Set-Cookie\": \"oauth_state=\" + state + \"; Path=/; Secure; HttpOnly; SameSite=Lax\", Location: url } };"),
            L("    if (!q.state || q.state !== req.cookies.oauth_state) return { status: 403, body: { error: \"bad state\" } }; // bound to this browser"))
        }
      },

      {
        id: "auth-u6-3",
        title: "PKCE: a stolen code is useless",
        kind: "js", chip: "AUTH", xp: 15, mins: 15,
        browser: true, crypto: true, clock: 1700000000000,
        brief: "`state` stops a code being injected into your callback. **PKCE** (Proof Key for Code Exchange, RFC 7636) stops a code being *stolen and redeemed* by someone else, the risk on a phone or in a single-page app where the code can leak through a malicious app, the URL bar or a log. RFC 9700 wants it on every flow, not just public clients.\n\nIt's one secret, kept by the app for the length of one flow:\n\n- The app makes a random **`code_verifier`** and derives a **`code_challenge`** = `base64url(SHA-256(verifier))`.\n- The authorize request carries the *challenge* (and `code_challenge_method=S256`). The IdP stores it with the code.\n- The token exchange carries the *verifier*. The IdP hashes it and checks it equals the stored challenge.\n\nA thief who grabs the code from a URL never saw the verifier, which stayed in the app and travelled only on the back channel. Their exchange fails.\n\nWrite `challengeFor(verifier)` = `b64url(sha256Bytes(toBytes(verifier)))`, add `code_challenge` and `code_challenge_method=S256` to the authorize URL, and pass `code_verifier: CODE_VERIFIER` in the `idpToken` call. `CODE_VERIFIER` is RFC 7636's own Appendix B example, so your challenge should match the RFC's.",
        steps: [
          { text: "`challengeFor` matches RFC 7636's Appendix B vector.",
            test: L(
              "T.expect(typeof challengeFor === 'function', 'Define challengeFor(verifier).');",
              "T.eq(challengeFor('dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk'), 'E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM', 'The S256 challenge is base64url(SHA-256(verifier)) — this is the RFC 7636 App. B vector');") },
          { text: "The authorize URL carries the challenge and `S256`, and the challenge is the hash of the verifier, never the verifier itself.",
            test: L(
              "var ada = newBrowser();",
              "ada.visit('https://app.example/login');",
              "var authReq = ada.requests().filter(function (r) { return /idp.example\\/authorize/.test(r.url); })[0];",
              "var p = new URL(authReq.url).searchParams;",
              "T.eq(p.get('code_challenge_method'), 'S256', 'Name the method: S256');",
              "T.eq(p.get('code_challenge'), challengeFor(CODE_VERIFIER), 'The authorize request carries the challenge');",
              "T.expect((authReq.url).indexOf(CODE_VERIFIER) === -1, 'The verifier must NOT appear in the authorize URL — only the challenge does');") },
          { text: "The genuine flow works: the app sends the verifier on the back channel and ada is signed in.",
            test: L(
              "var ada = newBrowser();",
              "ada.visit('https://app.example/login');",
              "T.eq(ada.visit('https://app.example/').body.signedInAs, 'idp-ada-42', 'With the matching verifier the exchange succeeds');") },
          { text: "A stolen code is useless: redeeming it with no verifier, or the wrong one, is `invalid_grant`; and a code can't be spent twice.",
            test: L(
              "authCodes.set('stolen', { redirectUri: REDIRECT_URI, sub: IDP_USER.sub, nonce: null, challenge: challengeFor(CODE_VERIFIER), used: false });",
              "T.eq(idpToken({ code: 'stolen', redirect_uri: REDIRECT_URI }).error, 'invalid_grant', 'No verifier → invalid_grant');",
              "T.eq(idpToken({ code: 'stolen', redirect_uri: REDIRECT_URI, code_verifier: 'not-the-verifier' }).error, 'invalid_grant', 'Wrong verifier → invalid_grant');",
              "T.expect(!idpToken({ code: 'stolen', redirect_uri: REDIRECT_URI, code_verifier: CODE_VERIFIER }).error, 'The real verifier redeems it once');",
              "T.eq(idpToken({ code: 'stolen', redirect_uri: REDIRECT_URI, code_verifier: CODE_VERIFIER }).error, 'invalid_grant', 'A code is single-use: the second exchange fails');") }
        ],
        files: [
          { name: "script.js", content: u3File(
            L("  // TODO: base64url(SHA-256(verifier)). sha256Bytes and b64url are provided.",
              "  return verifier;"),
            L("  // TODO: include code_challenge and code_challenge_method=S256.",
              "  return \"https://idp.example/authorize?response_type=code&client_id=\" + CLIENT_ID +",
              "    \"&redirect_uri=\" + encodeURIComponent(REDIRECT_URI) + \"&scope=openid\";"),
            L("    // TODO: pass code_verifier: CODE_VERIFIER in the exchange.",
              "    const tokens = idpToken({ grant_type: \"authorization_code\", code: req.query.code, client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });")) }
        ],
        hints: [
          "`challengeFor` hashes the verifier's bytes and base64url-encodes them: `return b64url(sha256Bytes(toBytes(verifier)));`.",
          "Add the challenge to the URL: `... + \"&code_challenge=\" + challengeFor(CODE_VERIFIER) + \"&code_challenge_method=S256\";`.",
          "Send the verifier on the exchange: add `code_verifier: CODE_VERIFIER` to the object passed to `idpToken`."
        ],
        solution: {
          "script.js": u3File(
            "  return b64url(sha256Bytes(toBytes(verifier)));",
            L("  return \"https://idp.example/authorize?response_type=code&client_id=\" + CLIENT_ID +",
              "    \"&redirect_uri=\" + encodeURIComponent(REDIRECT_URI) + \"&scope=openid\" +",
              "    \"&code_challenge=\" + challengeFor(CODE_VERIFIER) + \"&code_challenge_method=S256\";"),
            L("    const tokens = idpToken({ grant_type: \"authorization_code\", code: req.query.code, client_id: CLIENT_ID, redirect_uri: REDIRECT_URI, code_verifier: CODE_VERIFIER });"))
        }
      },

      {
        id: "auth-u6-4",
        title: "Exact redirect_uri matching",
        kind: "js", chip: "AUTH", xp: 15, mins: 13,
        browser: true, crypto: true, clock: 1700000000000,
        brief: "*Now you're the IdP. A lab against your own sandbox: the attacker's host is one of the simulated sites.*\n\nThe `redirect_uri` decides where the IdP sends the code. So the IdP must send it only to an address the app **registered in advance**, and the check has to be an **exact string match**. A loose one hands the code to an attacker.\n\nThe classic mistake is `startsWith`. If the IdP accepts any `redirect_uri` that starts with `https://app.example`, then `https://app.example.evil.example/callback` passes: it starts with those characters, but `app.example.evil.example` is the attacker's domain. The IdP redirects there with a live code, and since a public client's `client_id` isn't secret, the attacker had everything else already. Other loose matches fail the same way, allowing an extra path, a query, a trailing segment.\n\nThe starter's IdP uses `startsWith`. Replace it with an exact comparison against the registered `REDIRECT_URI`, returning a `400` for anything else, so no redirect (and no code) is issued.\n\n*RFC 9700 is strict about this: exact matching only, no wildcards, no prefix rules.*",
        steps: [
          { text: "A genuine sign-in still works: `redirect_uri` exactly equal to the registered one gets a code.",
            test: L(
              "var b = newBrowser();",
              "var res = b.visit('https://idp.example/authorize?response_type=code&client_id=app-client&redirect_uri=' + encodeURIComponent(REDIRECT_URI) + '&scope=openid');",
              "T.eq(res.url.split('?')[0], 'https://app.example/callback', 'The registered redirect_uri should receive the redirect');",
              "T.expect(/[?&]code=/.test(res.url), 'and it should carry a code — got ' + res.url);") },
          { text: "The attack is stopped: `https://app.example.evil.example/callback` is refused, and the attacker's host receives no code.",
            test: L(
              "var b = newBrowser();",
              "var evil = 'https://app.example.evil.example/callback';",
              "var res = b.visit('https://idp.example/authorize?response_type=code&client_id=app-client&redirect_uri=' + encodeURIComponent(evil) + '&scope=openid');",
              "var reachedEvil = b.requests().some(function (r) { return r.url.indexOf('://app.example.evil.example') !== -1; });",
              "T.expect(!reachedEvil, 'The IdP redirected the code to app.example.evil.example. A startsWith check passes that host — compare the whole string');",
              "T.eq(res.status, 400, 'A bad redirect_uri should be a 400, not a redirect');") },
          { text: "Other loose matches are refused too: an extra path segment, and an appended query.",
            test: L(
              "var b = newBrowser();",
              "var check = function (uri) { return b.visit('https://idp.example/authorize?response_type=code&client_id=app-client&redirect_uri=' + encodeURIComponent(uri) + '&scope=openid'); };",
              "T.eq(check('https://app.example/callback/extra').status, 400, 'A longer path is not the registered URI');",
              "T.eq(check('https://app.example/callback.evil').status, 400, 'A different path that shares a prefix is not it either');") },
          { text: "An unknown `client_id` is still refused, so your change didn't remove the other check.",
            test: L(
              "var b = newBrowser();",
              "var res = b.visit('https://idp.example/authorize?response_type=code&client_id=someone-else&redirect_uri=' + encodeURIComponent(REDIRECT_URI) + '&scope=openid');",
              "T.eq(res.status, 400, 'An unknown client_id is a 400');") }
        ],
        files: [
          { name: "script.js", content: u4File(L(
            "    // Starter: a prefix match. It also passes https://app.example.evil.example/callback.",
            "    if (q.redirect_uri.indexOf(REDIRECT_URI.replace(\"/callback\", \"\")) !== 0)",
            "      return { status: 400, body: \"bad redirect_uri\" };")) }
        ],
        hints: [
          "The whole trick is one operator. The registered value is `REDIRECT_URI`.",
          "Replace the `indexOf(...) !== 0` prefix test with an exact inequality: `if (q.redirect_uri !== REDIRECT_URI) return { status: 400, body: \"bad redirect_uri\" };`.",
          "Exact matching means no `startsWith`, no `indexOf`, no wildcards: the string is either the one you registered or it's rejected."
        ],
        solution: {
          "script.js": u4File(L(
            "    if (q.redirect_uri !== REDIRECT_URI) return { status: 400, body: \"bad redirect_uri\" }; // exact match only"))
        }
      },

      {
        id: "auth-u6-5",
        title: "ID tokens vs access tokens",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        browser: true, crypto: true, clock: 1700000000000,
        brief: "The token exchange returns two very different things, and confusing them is a real vulnerability.\n\n- An **access token** is a *key to an API*. You send it to a resource server; to your app it's opaque, and you never look inside it.\n- An **ID token** is a *statement about the user*, for your client. It's a JWT (Unit 5) with `iss`, `sub`, `aud` and often `nonce` and `exp`. It's what tells you *who just signed in*.\n\nSign a user in from the ID token, and only after checking it's really for you:\n\n- `iss` is your IdP, `https://idp.example`.\n- `aud` is your `client_id`. A token minted for a *different* client must not sign anyone into yours.\n- `nonce` equals the one you sent (the OpenID Connect defence against a replayed ID token, the sibling of `state`).\n- `exp` hasn't passed.\n- The signature verifies (here HS256 with the IdP's secret; a real IdP signs with a private key and you'd verify with its public one).\n\nWrite `verifyIdToken(token, expectedNonce)`: return the claims when all of that holds, or `null`. Then the last checkpoint makes the key point: an **access token** presented where an ID token belongs must be rejected, and you must never send an ID token to an API.\n\n`b64urlDecode`, `hmac` and `IDP_SECRET` are available; `now()` is the clock.",
        steps: [
          { text: "A genuine ID token verifies: right issuer, audience, nonce and signature, and its claims come back.",
            test: L(
              "T.expect(typeof verifyIdToken === 'function', 'Define verifyIdToken(token, expectedNonce).');",
              "var t = issueFor('nonce-abc').id_token;",
              "var claims = verifyIdToken(t, 'nonce-abc');",
              "T.expect(claims && claims.sub === 'idp-ada-42', 'A valid ID token should return its claims — got ' + JSON.stringify(claims));",
              "T.eq(claims.aud, 'app-client', 'aud is your client_id');",
              "T.eq(claims.iss, 'https://idp.example', 'iss is your IdP');") },
          { text: "A token for a different `aud`, or a tampered one, is rejected.",
            test: L(
              "var forgeAud = idpSign({ iss: 'https://idp.example', sub: 'idp-ada-42', aud: 'some-other-app', nonce: 'n', iat: Math.floor(now()/1000), exp: Math.floor(now()/1000) + 300 });",
              "T.eq(verifyIdToken(forgeAud, 'n'), null, 'A token minted for some-other-app must not sign anyone into your client (check aud)');",
              "var good = issueFor('n').id_token;",
              "var tampered = good.split('.'); tampered[1] = b64url(toBytes(JSON.stringify({ iss: 'https://idp.example', sub: 'attacker', aud: 'app-client', nonce: 'n', exp: 9999999999 })));",
              "T.eq(verifyIdToken(tampered.join('.'), 'n'), null, 'Editing the payload breaks the signature → null');") },
          { text: "The nonce and expiry are enforced: a mismatched nonce is rejected, and an expired token is rejected.",
            test: L(
              "var t = issueFor('the-real-nonce').id_token;",
              "T.eq(verifyIdToken(t, 'a-different-nonce'), null, 'A replayed ID token carries the wrong nonce → null');",
              "T.expect(!!verifyIdToken(t, 'the-real-nonce'), 'The matching nonce still verifies');",
              "var past = idpSign({ iss: 'https://idp.example', sub: 'idp-ada-42', aud: 'app-client', nonce: 'n', iat: 1, exp: Math.floor(now()/1000) - 10 });",
              "T.eq(verifyIdToken(past, 'n'), null, 'An expired ID token → null');") },
          { text: "The key distinction: an access token presented as an ID token is rejected.",
            test: L(
              "var pair = issueFor('n');",
              "T.expect(typeof pair.access_token === 'string' && pair.access_token.indexOf('.') === -1, 'The access token is opaque, not a JWT');",
              "T.eq(verifyIdToken(pair.access_token, 'n'), null, 'An access token is a key to an API, not proof of who signed in. Presented as an ID token it must be rejected');",
              "T.expect(!!verifyIdToken(pair.id_token, 'n'), 'The ID token from the same response still verifies');") }
        ],
        files: [
          { name: "script.js", content: u5File(L(
            "  const parts = String(token).split(\".\");",
            "  if (parts.length !== 3) return null;",
            "  // TODO: check the HS256 signature with IDP_SECRET, then the claims:",
            "  //   iss === \"https://idp.example\", aud === CLIENT_ID, nonce === expectedNonce,",
            "  //   and exp is in the future (now() is milliseconds; exp is seconds).",
            "  return decodePayload(token);")) }
        ],
        hints: [
          "Verify the signature first, refusing anything that isn't HS256: `let header; try { header = JSON.parse(fromBytes(b64urlDecode(parts[0]))); } catch (e) { return null; } if (!header || header.alg !== \"HS256\") return null;`.",
          "`if (b64url(hmac(\"sha256\", IDP_SECRET, parts[0] + \".\" + parts[1])) !== parts[2]) return null;` — an opaque access token has no valid signature, so it falls out here.",
          "Then the claims: `const c = decodePayload(token); if (!c || c.iss !== \"https://idp.example\" || c.aud !== CLIENT_ID || c.nonce !== expectedNonce) return null; if (typeof c.exp !== \"number\" || Math.floor(now() / 1000) >= c.exp) return null; return c;`."
        ],
        solution: {
          "script.js": u5File(L(
            "  const parts = String(token).split(\".\");",
            "  if (parts.length !== 3) return null;",
            "  let header;",
            "  try { header = JSON.parse(fromBytes(b64urlDecode(parts[0]))); } catch (e) { return null; }",
            "  if (!header || header.alg !== \"HS256\") return null;",
            "  if (b64url(hmac(\"sha256\", IDP_SECRET, parts[0] + \".\" + parts[1])) !== parts[2]) return null; // opaque access tokens fail here",
            "  const c = decodePayload(token);",
            "  if (!c || c.iss !== \"https://idp.example\" || c.aud !== CLIENT_ID || c.nonce !== expectedNonce) return null;",
            "  if (typeof c.exp !== \"number\" || Math.floor(now() / 1000) >= c.exp) return null;",
            "  return c;"))
        }
      },

      {
        id: "auth-quiz-6",
        title: "Unit 6 quiz: OAuth",
        kind: "quiz", xp: 10,
        brief: "The code flow, state, PKCE, redirect_uri matching, and ID vs access tokens. 80% to pass.",
        questions: [
          { q: "In the authorization code flow, what travels through the browser, and what doesn't?",
            choices: ["The tokens go through the browser; the code stays server-side", "The one-time code goes through the browser; the tokens come back on a back channel", "Both the code and the tokens go through the browser, over HTTPS", "Neither: the whole exchange is a single server-to-server call"],
            answer: 1, explain: "The IdP redirects the browser back with a short-lived code. The app's server then exchanges that code for tokens directly with the IdP, so the tokens never touch the browser. That's why a glimpsed code alone isn't enough to sign in." },
          { q: "What attack does the `state` parameter prevent?",
            choices: ["A stolen code being redeemed by a different app", "An attacker injecting their own code into your callback to log you into their account", "The IdP issuing a token for the wrong user", "An access token being replayed against an API"],
            answer: 1, explain: "`state` is a random value bound to the pre-login browser and checked on return. An attacker who lures you to a callback with their code can't supply a matching state, so login CSRF fails. Redeeming a stolen code is PKCE's job." },
          { q: "How does PKCE make a stolen authorization code useless?",
            choices: ["It encrypts the code so only the IdP can read it", "It ties the code to the user's session cookie", "The token exchange needs a verifier the thief never saw", "It expires the code after a single second"],
            answer: 2, explain: "The app sends the SHA-256 of a random verifier as the challenge, keeps the verifier, and presents it only on the back-channel exchange. A thief who grabs the code from a URL or log never saw the verifier, so their exchange fails the hash check." },
          { q: "Why must an IdP match `redirect_uri` by exact string, never `startsWith`?",
            choices: ["startsWith is slower than an equality check at scale", "`https://app.example.evil.example/cb` starts with `https://app.example`", "Exact matching lets the app register many redirect URIs at once", "startsWith fails when the URI contains a query string"],
            answer: 1, explain: "A prefix check accepts an attacker domain that merely begins with your string, and the IdP then sends a live code there. The code decides where the user's identity goes, so the match must be the whole registered string." },
          { q: "You receive `{ access_token, id_token }`. Which do you use to decide who just signed in?",
            choices: ["The access token, after checking its scopes", "Either one, since both identify the user", "The ID token, after verifying aud, nonce, exp and its signature", "Whichever arrived first in the response"],
            answer: 2, explain: "The ID token is the statement about the user, for your client; you verify it and read `sub`. The access token is an opaque key to an API and says nothing you should trust about identity. Signing in from an access token is a known bug." },
          { q: "An ID token verifies with a good signature, but its `aud` is `analytics-service`, not your `client_id`. What do you do?",
            choices: ["Accept it: a valid signature from your IdP is enough", "Reject it: it was minted for a different client", "Accept it if the `sub` matches a known user", "Re-request it from the IdP with your client_id"],
            answer: 1, explain: "`aud` names who the token is for. One issued for `analytics-service` was never meant to sign users into your app, and accepting it lets a token leaked from another client log people in. A valid signature proves origin, not audience." }
        ]
      }
    ]
  });
})();
