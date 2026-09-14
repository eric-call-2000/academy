/* Authentication — Unit 5: JWTs, right and wrong */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var NEVER_SHIP = "// NEVER SHIP THIS: hand-built JWT code is for understanding. In production use a maintained library such as jose.";

  /* auth-u4-1's solution plus text helpers. */
  var B64_LIB = L(
    "// ---- from auth-u4-1: base64url, both ways ----",
    "const B64URL = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\";",
    "",
    "function b64urlEncode(bytes) {",
    "  let out = \"\";",
    "  for (let i = 0; i < bytes.length; i += 3) {",
    "    const n = (bytes[i] << 16) | ((bytes[i + 1] || 0) << 8) | (bytes[i + 2] || 0);",
    "    const chars = Math.min(bytes.length - i, 3) + 1;",
    "    for (let j = 0; j < chars; j++) out += B64URL[(n >> (18 - 6 * j)) & 63];",
    "  }",
    "  return out;",
    "}",
    "",
    "function b64urlDecode(str) {",
    "  if (typeof str !== \"string\" || str.length % 4 === 1) throw new Error(\"not base64url: \" + JSON.stringify(str));",
    "  const out = new Uint8Array(Math.floor(str.length * 3 / 4));",
    "  let n = 0, bits = 0, o = 0;",
    "  for (let i = 0; i < str.length; i++) {",
    "    const v = B64URL.indexOf(str[i]);",
    "    if (v === -1) throw new Error(\"not base64url: \" + JSON.stringify(str));",
    "    n = ((n << 6) | v) & 0xffffff;",
    "    bits += 6;",
    "    if (bits >= 8) { bits -= 8; out[o++] = (n >> bits) & 255; }",
    "  }",
    "  return out;",
    "}",
    "",
    "const toBytes = s => new TextEncoder().encode(s);",
    "const fromBytes = b => new TextDecoder().decode(b);",
    "",
    "// ---- from auth-u4-3: every byte read, whatever the first difference ----",
    "function safeEqual(a, b) {",
    "  if (a.length !== b.length) return false;",
    "  let diff = 0;",
    "  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];",
    "  return diff === 0;",
    "}",
    "");

  var PARTS = L(
    "// ---- JWT parts: base64url JSON ----",
    "function part(obj) { return b64urlEncode(toBytes(JSON.stringify(obj))); }",
    "function readPart(str) { return JSON.parse(fromBytes(b64urlDecode(str))); }",
    "");

  var MINT = L(
    "const SECRET = \"s3cret-key-for-lessons\";",
    "",
    "// An HS256 token, signed the right way. The checks use it to make test tokens.",
    "function mint(claims) {",
    "  const h = part({ alg: \"HS256\", typ: \"JWT\" });",
    "  const p = part(claims);",
    "  return h + \".\" + p + \".\" + b64urlEncode(hmac(\"sha256\", SECRET, h + \".\" + p));",
    "}",
    "");

  var VERIFY_PINNED = L(
    "// ---- from auth-u5-2: the server decides the algorithm ----",
    "function verifyJwt(token) {",
    "  const parts = String(token).split(\".\");",
    "  if (parts.length !== 3) return null;",
    "  let header, payload;",
    "  try { header = readPart(parts[0]); payload = readPart(parts[1]); } catch (e) { return null; }",
    "  if (!header || header.alg !== \"HS256\") return null;",
    "  let given;",
    "  try { given = b64urlDecode(parts[2]); } catch (e) { return null; }",
    "  return safeEqual(given, hmac(\"sha256\", SECRET, parts[0] + \".\" + parts[1])) ? payload : null;",
    "}",
    "");

  var CLAIMS_CONSTS = L(
    "const ISSUER = \"https://auth.example\";",
    "const AUDIENCE = \"notes-api\";",
    "const LEEWAY = 60; // seconds of clock drift allowed between servers",
    "");

  var ACCEPT = L(
    "// ---- from auth-u5-3: the claims this API checks ----",
    "function acceptToken(token) {",
    "  const claims = verifyJwt(token);",
    "  if (!claims) return null;",
    "  const t = Math.floor(now() / 1000);",
    "  if (typeof claims.exp !== \"number\" || t > claims.exp + LEEWAY) return null;",
    "  if (claims.nbf != null && (typeof claims.nbf !== \"number\" || t < claims.nbf - LEEWAY)) return null;",
    "  if (claims.iss !== ISSUER) return null;",
    "  const aud = Array.isArray(claims.aud) ? claims.aud : [claims.aud];",
    "  if (aud.indexOf(AUDIENCE) === -1) return null;",
    "  return claims;",
    "}",
    "");

  var VEC = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZGEiLCJleHAiOjE3MDAwMDAwMDB9.fV-HwGz830YHmMilXlswsjAFDg8mJmcqKa4Znyv7ZzU";

  /* ---------- auth-u5-1 ---------- */
  function u1File(decodeBody, issueBody) {
    return L(
      NEVER_SHIP,
      B64_LIB,
      PARTS,
      MINT,
      "const users = [",
      "  { userName: \"ada\", role: \"admin\", email: \"ada@example.com\", passwordHash: \"9f2c1e7ab04d5e38c6f1a2b3c4d5e6f7\", resetToken: \"rt-7d41f0c2b9e8a6d5\" },",
      "  { userName: \"bo\", role: \"user\", email: \"bo@example.com\", passwordHash: \"41d8cd98f00b204e9800998ecf8427e0\", resetToken: \"rt-0a9b8c7d6e5f4321\" }",
      "];",
      "",
      "// token -> { header, payload, signature }, or null. No key needed: nothing here is secret.",
      "function decodeJwt(token) {",
      decodeBody,
      "}",
      "",
      "// The token ada's browser holds after logging in. Times are in seconds.",
      "function issueToken(user) {",
      "  const iat = Math.floor(now() / 1000);",
      issueBody,
      "}",
      "",
      "console.log(decodeJwt(issueToken(users[0])));",
      "");
  }

  /* ---------- auth-u5-2 ---------- */
  var LEGACY_BODY = L(
    "  const parts = String(token).split(\".\");",
    "  if (parts.length !== 3) return null;",
    "  let header, payload;",
    "  try { header = readPart(parts[0]); payload = readPart(parts[1]); } catch (e) { return null; }",
    "  if (header.alg === \"none\") return payload; // \"unsecured JWTs are part of the spec\"",
    "  if (header.alg !== \"HS256\") return null;",
    "  let given;",
    "  try { given = b64urlDecode(parts[2]); } catch (e) { return null; }",
    "  return safeEqual(given, hmac(\"sha256\", SECRET, parts[0] + \".\" + parts[1])) ? payload : null;");

  function u2File(forgeBody, verifyBody) {
    return L(
      NEVER_SHIP,
      B64_LIB,
      PARTS,
      MINT,
      "// The verifier this app shipped with, kept frozen so you can watch the attack land.",
      "function legacyVerifyJwt(token) {",
      LEGACY_BODY,
      "}",
      "",
      "// An unsecured token: \"<header>.<payload>.\" with alg \"none\" and an EMPTY signature.",
      "function forgeNone(claims) {",
      forgeBody,
      "}",
      "",
      "// Your verifier. It starts as a copy of the legacy one.",
      "function verifyJwt(token) {",
      verifyBody,
      "}",
      "",
      "console.log(legacyVerifyJwt(forgeNone({ sub: \"admin\", role: \"admin\" })));",
      "");
  }

  /* ---------- auth-u5-3 ---------- */
  function u3File(acceptBody) {
    return L(
      NEVER_SHIP,
      B64_LIB,
      PARTS,
      MINT,
      VERIFY_PINNED,
      CLAIMS_CONSTS,
      "// The claims if this API should accept the token, otherwise null. JWT times are in seconds.",
      "function acceptToken(token) {",
      acceptBody,
      "}",
      "",
      "const t0 = Math.floor(now() / 1000);",
      "console.log(acceptToken(mint({ sub: \"ada\", iss: ISSUER, aud: AUDIENCE, iat: t0, exp: t0 + 300 })));",
      "");
  }

  /* ---------- auth-u5-4 ---------- */
  function u4File(sessionFns) {
    return L(
      NEVER_SHIP,
      B64_LIB,
      PARTS,
      MINT,
      VERIFY_PINNED,
      CLAIMS_CONSTS,
      ACCEPT,
      "const ACCESS_TTL = 300;          // seconds: access tokens live 5 minutes",
      "const refreshTokens = new Map(); // sha256(refresh token) -> { userName, family, used }",
      "",
      "function issueAccess(userName) {",
      "  const iat = Math.floor(now() / 1000);",
      "  return mint({ sub: userName, iss: ISSUER, aud: AUDIENCE, iat: iat, exp: iat + ACCESS_TTL });",
      "}",
      "",
      sessionFns,
      "",
      "const first = login(\"ada\");",
      "console.log(first, refreshSession(first.refresh));",
      "");
  }

  /* ---------- auth-u5-p ---------- */
  function pFile(leeway, verifyBody, claimsBody) {
    return L(
      NEVER_SHIP,
      B64_LIB,
      PARTS,
      "const KEYS = {",
      "  \"2026-08\": \"august-key-retired-soon\",",
      "  \"2026-09\": \"september-key-current\"",
      "};",
      "const ISSUER = \"https://auth.example\";",
      "const AUDIENCE = \"notes-api\";",
      leeway,
      "",
      "// How the auth server signs. The checks use it; so can you while you test.",
      "function signToken(kid, claims) {",
      "  const h = part({ alg: \"HS256\", typ: \"JWT\", kid: kid });",
      "  const p = part(claims);",
      "  return h + \".\" + p + \".\" + b64urlEncode(hmac(\"sha256\", KEYS[kid], h + \".\" + p));",
      "}",
      "",
      "// notes-api's verifier: the claims, or null. Never throws.",
      "function verifyAccessToken(token) {",
      verifyBody,
      "}",
      "",
      "function checkClaims(claims) {",
      claimsBody,
      "}",
      "",
      "const t0 = Math.floor(now() / 1000);",
      "console.log(verifyAccessToken(signToken(\"2026-09\", { sub: \"ada\", iss: ISSUER, aud: AUDIENCE, iat: t0, exp: t0 + 300 })));",
      "");
  }

  var P_VERIFY_START = L(
    "  const parts = String(token).split(\".\");",
    "  if (parts.length !== 3) return null;",
    "  let header, claims;",
    "  try { header = readPart(parts[0]); claims = readPart(parts[1]); } catch (e) { return null; }",
    "  if (!header || !claims) return null;",
    "");

  window.CODELAB.addUnit("auth", {
    id: "auth-u5",
    title: "JWTs, right and wrong",
    icon: "🎟️",
    blurb: "A JWT is Unit 4's signed token with a JSON header, and the header is where the bugs live. Read one without a key, forge alg:none and refuse it, check the claims, then make tokens you can't revoke safe with short lifetimes and rotating refresh tokens.",
    cheat: [
      { h: "A JWT is three base64url parts", lang: "js", code: L(
        "// header.payload.signature",
        "readPart(\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\")  // { alg: \"HS256\", typ: \"JWT\" }",
        "// payload: { sub, iat, exp, ... } — times in SECONDS",
        "// signature: HMAC-SHA256(key, header + \".\" + payload)"),
        note: "Anyone can decode a JWT. Put in only what the next request needs (`sub`, `role`, `iat`, `exp`), never an email, hash or reset token." },
      { h: "The server picks the algorithm", lang: "js", code: L(
        "if (!header || header.alg !== \"HS256\") return null;",
        "// never: if (header.alg === \"none\") return payload;",
        "// never: pick the verification method from the token"),
        note: "RFC 8725: fix the allowed algorithm per key and refuse everything else, `none` in any spelling included." },
      { h: "Claims every API checks", lang: "js", code: L(
        "const t = Math.floor(now() / 1000);                 // seconds, like the claims",
        "if (typeof c.exp !== \"number\" || t > c.exp + LEEWAY) return null;",
        "if (c.nbf != null && t < c.nbf - LEEWAY) return null;",
        "if (c.iss !== ISSUER) return null;",
        "if ([].concat(c.aud).indexOf(AUDIENCE) === -1) return null;"),
        note: "A valid signature says who made the token, not that it's current or meant for you. Require `exp`; allow about a minute of clock drift." },
      { h: "Short access, rotating refresh", lang: "js", code: L(
        "const row = refreshTokens.get(sha256(old));",
        "if (!row) return null;",
        "if (row.used) { revokeFamily(row.family); return null; } // a copy exists",
        "row.used = true;",
        "return issuePair(row.userName, row.family);"),
        note: "A JWT can't be recalled, so keep it to minutes. Refresh tokens are rows: store the hash, rotate on every use, and treat reuse as theft." }
    ],
    lessons: [

      {
        id: "auth-u5-1",
        title: "Decoding is not verifying",
        kind: "js", chip: "AUTH", xp: 15, mins: 12,
        crypto: true, clock: 1700000000000,
        brief: "A **JWT** (JSON Web Token, RFC 7519) is Unit 4's signed token with one more part in front: `header.payload.signature`, each part base64url. The header names the algorithm. The payload holds the **claims**: `sub` (who), `iat` (issued at) and `exp` (expires), with every time in *seconds*. The signature is an HMAC over `header.payload`.\n\nNone of that is secret. Paste a JWT into any online decoder and the claims fall out, no key required. The key only matters for *checking* the signature, which is what the rest of this unit is about.\n\nWrite `decodeJwt(token)`. Split it, read the first two parts as JSON (`readPart` reads one), keep the signature as text, and return `{ header, payload, signature }`. Anything that isn't three readable parts is `null`, never an exception.\n\nThen fix `issueToken`. The starter copies the whole user record into the token, email, password hash and reset token included, and every one of those is readable by anyone who sees the token: a browser extension, a log line, a support screenshot. A token should carry only what the server needs on the next request: `sub`, `role`, `iat` and `exp`, 15 minutes after `iat`. `now()` is in milliseconds.\n\n*Decoding is for debugging. Never make a decision from a payload you haven't verified.*",
        steps: [
          { text: "Decode the HS256 token in this checkpoint without any key: header `{ alg: \"HS256\", typ: \"JWT\" }`, payload `{ sub: \"ada\", exp: 1700000000 }`, and the signature left as text.",
            test: L(
              "T.expect(typeof decodeJwt === 'function', 'Define decodeJwt(token).');",
              "var d = decodeJwt('" + VEC + "');",
              "T.eq(d, { header: { alg: 'HS256', typ: 'JWT' }, payload: { sub: 'ada', exp: 1700000000 }, signature: 'fV-HwGz830YHmMilXlswsjAFDg8mJmcqKa4Znyv7ZzU' }, 'decodeJwt should return { header, payload, signature }. No key is needed to read a JWT');") },
          { text: "Anything that isn't three base64url JSON parts is `null`, never an exception.",
            test: L(
              "['', 'abc', 'a.b', 'a.b.c.d', 'e30.!!!.x', 'bm90IGpzb24.e30.x'].forEach(function (t) {",
              "  var r;",
              "  try { r = decodeJwt(t); } catch (e) { T.expect(false, 'decodeJwt(' + JSON.stringify(t) + ') threw \"' + e.message + '\". Return null instead'); }",
              "  T.eq(r, null, 'decodeJwt(' + JSON.stringify(t) + ')');",
              "});") },
          { text: "Your own tokens decode just as easily, which is the problem. `issueToken(ada)` must carry only `sub`, `role`, `iat` and `exp`: no email, no password hash, no reset token.",
            test: L(
              "var t = String(issueToken(users[0]));",
              "var payload = readPart(t.split('.')[1]);",
              "T.eq(Object.keys(payload).sort(), ['exp', 'iat', 'role', 'sub'], 'Anyone holding the token can read every claim. Yours carries ' + JSON.stringify(Object.keys(payload)));",
              "var text = JSON.stringify(payload);",
              "['9f2c1e7ab04d5e38c6f1a2b3c4d5e6f7', 'rt-7d41f0c2b9e8a6d5', 'ada@example.com'].forEach(function (s) {",
              "  T.expect(text.indexOf(s) === -1, 'The token leaks ' + s + ' to anyone who base64url-decodes it');",
              "});") },
          { text: "The claims still say who and when: `sub` is the user, `iat` is `now()` in **seconds**, `exp` is 15 minutes later, and the token is signed with HS256.",
            test: L(
              "T.advance(42000);",
              "var t = String(issueToken(users[1]));",
              "var parts = t.split('.');",
              "var nowSec = Math.floor(now() / 1000);",
              "T.eq(readPart(parts[1]), { sub: 'bo', role: 'user', iat: nowSec, exp: nowSec + 900 }, 'Claims in this order: sub, role, iat (seconds), exp = iat + 900');",
              "T.eq(readPart(parts[0]), { alg: 'HS256', typ: 'JWT' }, 'The header names HS256');",
              "T.eq(parts[2], b64urlEncode(hmac('sha256', SECRET, parts[0] + '.' + parts[1])), 'The signature is the HMAC of header.payload with SECRET');") }
        ],
        files: [
          { name: "script.js", content: u1File(
            L("  // TODO: three parts; the first two are base64url JSON (readPart); keep the signature as text",
              "  return null;"),
            L("  // The whole user record goes into the token.",
              "  return mint(Object.assign({}, user, { sub: user.userName, iat: iat, exp: iat + 900 }));")) }
        ],
        hints: [
          "`const parts = String(token).split(\".\"); if (parts.length !== 3) return null;`, then read the header and payload inside a `try` so bad input returns `null`.",
          "`return { header: readPart(parts[0]), payload: readPart(parts[1]), signature: parts[2] };` inside that `try`.",
          "Build the claims yourself instead of copying the user: `return mint({ sub: user.userName, role: user.role, iat: iat, exp: iat + 900 });`."
        ],
        solution: {
          "script.js": u1File(
            L("  const parts = String(token).split(\".\");",
              "  if (parts.length !== 3) return null;",
              "  try {",
              "    return { header: readPart(parts[0]), payload: readPart(parts[1]), signature: parts[2] };",
              "  } catch (e) {",
              "    return null;",
              "  }"),
            L("  // Only what the next request needs. Everything here is readable by anyone.",
              "  return mint({ sub: user.userName, role: user.role, iat: iat, exp: iat + 900 });"))
        }
      },

      {
        id: "auth-u5-2",
        title: "alg: none — forge one, then refuse it",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        crypto: true,
        brief: "*A lab against your own sandbox: you forge the token, then refuse it.*\n\nThe JWT header says which algorithm signed the token, and the spec also defines `\"alg\": \"none\"`: an *unsecured* JWT with an empty signature. A verifier that reads `alg` from the token and does what it says has let the attacker choose how the token gets checked, and `none` means not at all. Several JWT libraries shipped exactly that bug when it was disclosed in 2015.\n\nBuild the forgery first. `forgeNone(claims)` returns `header.payload.`: the header `{ alg: \"none\", typ: \"JWT\" }`, the claims as the payload, and nothing after the last dot. The app's original verifier is kept in the file as `legacyVerifyJwt`, and the second checkpoint hands it your token and expects to be let in as admin.\n\nThen fix `verifyJwt`, which starts as a copy of the legacy one. RFC 8725, the JWT best-practice RFC, says the **server** decides the algorithm for each key and refuses a token that names any other. Compare `header.alg` with the one you allow, exactly, and treat a header that isn't an object as a bad token. The same rule closes the other classic attack, where a token claims `HS256` to a server whose key is an RSA public key, turning that public key into an HMAC secret.\n\n*In production, use a library that makes you list the allowed algorithms, and never allow `none`.*",
        steps: [
          { text: "`forgeNone({ sub: \"admin\", role: \"admin\" })` builds `header.payload.`: header `{ alg: \"none\", typ: \"JWT\" }`, the claims as the payload, and nothing after the last dot.",
            test: L(
              "T.expect(typeof forgeNone === 'function', 'Define forgeNone(claims).');",
              "var t = forgeNone({ sub: 'admin', role: 'admin' });",
              "T.expect(typeof t === 'string', 'forgeNone should return a string — got ' + JSON.stringify(t));",
              "var parts = t.split('.');",
              "T.eq(parts.length, 3, 'A JWT always has three parts, even an unsigned one — yours: ' + JSON.stringify(t));",
              "T.eq(readPart(parts[0]), { alg: 'none', typ: 'JWT' }, 'The header claims no algorithm at all');",
              "T.eq(readPart(parts[1]), { sub: 'admin', role: 'admin' }, 'The payload is whatever the attacker wants');",
              "T.eq(parts[2], '', 'An unsecured JWT has an empty signature');") },
          { text: "The attack lands: the verifier this app shipped with, `legacyVerifyJwt`, accepts your forgery as admin.",
            test: L(
              "var forged = forgeNone({ sub: 'admin', role: 'admin' });",
              "T.eq(legacyVerifyJwt(forged), { sub: 'admin', role: 'admin' }, 'legacyVerifyJwt trusts the header, so a token with no signature logs you in as admin. If this fails, look at forgeNone');") },
          { text: "Your `verifyJwt` refuses it. The algorithm is the server's decision: `none` in any spelling, `HS512`, a missing `alg`, and a header that isn't an object all get `null`.",
            test: L(
              "var claims = part({ sub: 'admin', role: 'admin' });",
              "var hs512 = part({ alg: 'HS512', typ: 'JWT' });",
              "var cases = {",
              "  'alg none': part({ alg: 'none', typ: 'JWT' }) + '.' + claims + '.',",
              "  'alg None': part({ alg: 'None', typ: 'JWT' }) + '.' + claims + '.',",
              "  'alg NONE': part({ alg: 'NONE' }) + '.' + claims + '.',",
              "  'alg HS512': hs512 + '.' + claims + '.' + b64urlEncode(hmac('sha256', SECRET, hs512 + '.' + claims)),",
              "  'missing alg': part({ typ: 'JWT' }) + '.' + claims + '.',",
              "  'null header': part(null) + '.' + claims + '.'",
              "};",
              "Object.keys(cases).forEach(function (k) {",
              "  var r;",
              "  try { r = verifyJwt(cases[k]); } catch (e) { T.expect(false, 'verifyJwt threw on the ' + k + ' token (\"' + e.message + '\"). A bad token is null, never an exception'); }",
              "  T.eq(r, null, 'The ' + k + ' token must be refused');",
              "});") },
          { text: "A real HS256 token still verifies, and the same token with its signature cut off does not.",
            test: L(
              "var good = mint({ sub: 'ada', role: 'user' });",
              "T.eq(verifyJwt(good), { sub: 'ada', role: 'user' }, 'A token this server signed with HS256 still verifies');",
              "T.eq(verifyJwt(good.slice(0, good.lastIndexOf('.') + 1)), null, 'The same token with its signature removed must not');",
              "T.eq(verifyJwt('" + VEC + "'), { sub: 'ada', exp: 1700000000 }, 'The known-good HS256 token verifies (checking exp is the next lesson)');") }
        ],
        files: [
          { name: "script.js", content: u2File(
            L("  // TODO: part() the header { alg: \"none\", typ: \"JWT\" } and the claims, then add a dot and nothing else",
              "  return \"\";"),
            LEGACY_BODY) }
        ],
        hints: [
          "`part(obj)` is base64url JSON, so the forgery is `part({ alg: \"none\", typ: \"JWT\" }) + \".\" + part(claims) + \".\"`.",
          "In `verifyJwt`, delete the line that returns the payload for `none`. One check replaces both algorithm lines: `if (!header || header.alg !== \"HS256\") return null;`.",
          "Compare exactly, with no lowercasing or trimming. `\"None\"` isn't a spelling of HS256 either, so it falls out with everything else."
        ],
        solution: {
          "script.js": u2File(
            "  return part({ alg: \"none\", typ: \"JWT\" }) + \".\" + part(claims) + \".\";",
            L("  const parts = String(token).split(\".\");",
              "  if (parts.length !== 3) return null;",
              "  let header, payload;",
              "  try { header = readPart(parts[0]); payload = readPart(parts[1]); } catch (e) { return null; }",
              "  if (!header || header.alg !== \"HS256\") return null; // the server decides; the token only claims",
              "  let given;",
              "  try { given = b64urlDecode(parts[2]); } catch (e) { return null; }",
              "  return safeEqual(given, hmac(\"sha256\", SECRET, parts[0] + \".\" + parts[1])) ? payload : null;"))
        }
      },

      {
        id: "auth-u5-3",
        title: "exp, nbf, iss, aud, and a clock that drifts",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        crypto: true, clock: 1700000000000,
        brief: "A valid signature proves one thing: the issuer made this token. It doesn't prove the token is still current, or that it was meant for you. Those are **claims**, and the API has to check them itself. RFC 7519 defines them, and RFC 8725 insists you check them.\n\n- `exp`: the token is dead after this time. Require it, because a token with no `exp` never expires.\n- `nbf`: not before. It's optional, but honour it when it's there.\n- `iss`: who issued it. Only `https://auth.example` issues tokens for this API.\n- `aud`: who it's for, as a string or an array. A token for `billing-api`, signed with the same key, must not open `notes-api`.\n\nEvery JWT time is in **seconds** since 1970, and `now()` counts milliseconds, so compare against `Math.floor(now() / 1000)`. Servers' clocks drift, so allow `LEEWAY` (60 seconds) either way: a token 30 seconds past `exp` is accepted, and 90 seconds past is not.\n\nWrite the checks in `acceptToken(token)`. `verifyJwt`, the previous lesson's with the algorithm pinned, handles the signature, and `mint(claims)` signs test tokens. The checks move the clock with `T.advance`.",
        steps: [
          { text: "A fresh token is accepted. Within the 60-second leeway past `exp` it still works; beyond it, `null`. A token with no `exp` is `null`.",
            test: L(
              "var nowSec = function () { return Math.floor(now() / 1000); };",
              "var base = function (extra) { return Object.assign({ sub: 'ada', iss: 'https://auth.example', aud: 'notes-api', iat: nowSec(), exp: nowSec() + 300 }, extra || {}); };",
              "var fresh = mint(base());",
              "var ok = acceptToken(fresh);",
              "T.expect(ok && ok.sub === 'ada', 'A fresh token from the right issuer for this API is accepted — got ' + JSON.stringify(ok));",
              "T.advance(330 * 1000);",
              "T.expect(acceptToken(fresh) !== null, '30 seconds past exp is inside the 60-second leeway: still accepted');",
              "T.advance(60 * 1000);",
              "T.eq(acceptToken(fresh), null, '90 seconds past exp is outside the leeway: refused');",
              "var forever = base();",
              "delete forever.exp;",
              "T.eq(acceptToken(mint(forever)), null, 'A token with no exp would never expire: refuse it');") },
          { text: "`nbf` (not before): 90 seconds in the future is `null`, and 30 seconds in the future is accepted.",
            test: L(
              "var nowSec = Math.floor(now() / 1000);",
              "var base = function (extra) { return Object.assign({ sub: 'ada', iss: 'https://auth.example', aud: 'notes-api', iat: nowSec, exp: nowSec + 300 }, extra || {}); };",
              "T.eq(acceptToken(mint(base({ nbf: nowSec + 90 }))), null, 'This token is not valid for another 90 seconds, beyond the leeway: refuse it');",
              "T.expect(acceptToken(mint(base({ nbf: nowSec + 30 }))) !== null, '30 seconds early is within the leeway (the issuer clock may simply be ahead): accept it');") },
          { text: "`iss`: a token from another issuer, or with no issuer, is `null`.",
            test: L(
              "var nowSec = Math.floor(now() / 1000);",
              "var base = function (extra) { return Object.assign({ sub: 'ada', iss: 'https://auth.example', aud: 'notes-api', iat: nowSec, exp: nowSec + 300 }, extra || {}); };",
              "T.eq(acceptToken(mint(base({ iss: 'https://staging-auth.example' }))), null, 'Same key, different issuer (a staging auth server sharing the secret, say): refuse it');",
              "var noIss = base();",
              "delete noIss.iss;",
              "T.eq(acceptToken(mint(noIss)), null, 'No iss: refuse it');") },
          { text: "`aud`: a token for `billing-api` is `null` even though its signature is valid. An array that includes `notes-api` is accepted, and no `aud` at all is `null`.",
            test: L(
              "var nowSec = Math.floor(now() / 1000);",
              "var base = function (extra) { return Object.assign({ sub: 'ada', iss: 'https://auth.example', aud: 'notes-api', iat: nowSec, exp: nowSec + 300 }, extra || {}); };",
              "T.eq(acceptToken(mint(base({ aud: 'billing-api' }))), null, 'This token was issued for billing-api. A valid signature proves who made it, not that it was meant for you');",
              "T.expect(acceptToken(mint(base({ aud: ['billing-api', 'notes-api'] }))) !== null, 'aud may be an array: accept it when notes-api is in it');",
              "var noAud = base();",
              "delete noAud.aud;",
              "T.eq(acceptToken(mint(noAud)), null, 'No aud: refuse it');") }
        ],
        files: [
          { name: "script.js", content: u3File(L(
            "  const claims = verifyJwt(token);",
            "  if (!claims) return null;",
            "  // TODO: exp (required) and nbf (if present), in seconds, with LEEWAY either way",
            "  // TODO: iss must be ISSUER; aud (a string or an array) must include AUDIENCE",
            "  return claims;")) }
        ],
        hints: [
          "Read the clock once, in seconds: `const t = Math.floor(now() / 1000);`. Expired is `t > claims.exp + LEEWAY`, and a missing `exp` is `typeof claims.exp !== \"number\"`.",
          "Not yet valid is `claims.nbf != null && t < claims.nbf - LEEWAY`. The issuer check is a plain `claims.iss !== ISSUER`.",
          "Normalise the audience first: `const aud = Array.isArray(claims.aud) ? claims.aud : [claims.aud];`, then refuse when `aud.indexOf(AUDIENCE) === -1`."
        ],
        solution: {
          "script.js": u3File(L(
            "  const claims = verifyJwt(token);",
            "  if (!claims) return null;",
            "  const t = Math.floor(now() / 1000);",
            "  if (typeof claims.exp !== \"number\" || t > claims.exp + LEEWAY) return null;",
            "  if (claims.nbf != null && (typeof claims.nbf !== \"number\" || t < claims.nbf - LEEWAY)) return null;",
            "  if (claims.iss !== ISSUER) return null;",
            "  const aud = Array.isArray(claims.aud) ? claims.aud : [claims.aud];",
            "  if (aud.indexOf(AUDIENCE) === -1) return null;",
            "  return claims;"))
        }
      },

      {
        id: "auth-u5-4",
        title: "You can't revoke a JWT: short access, rotating refresh",
        kind: "js", chip: "AUTH", xp: 15, mins: 15,
        crypto: true, clock: 1700000000000,
        brief: "Unit 1's sessions could be ended instantly because a session is a row: delete it and the id means nothing. A JWT has no row. Once signed it's valid until `exp` whatever happens in between, so a stolen token can't be recalled. The standard answer has two parts.\n\n- **Short access tokens**, 5 minutes here. A stolen one is only useful briefly, and checking one never touches a database.\n- **Refresh tokens** that are rows again: random values, stored server-side and exchanged for a new access token. Store `sha256(token)`, not the token. For a 256-bit random value that's enough (a password isn't, as Web Security's `sec-u6-3` showed), and a leaked table then holds nothing that works.\n\nRefresh tokens also **rotate**. Each use marks the old one `used` and hands out a new one in the same **family**, which makes theft visible. If a used token ever comes back, two parties hold copies and the server can't tell which one is real, so it revokes the whole family. The attacker's copy and ada's current token both stop, and ada logs in again. RFC 9700, OAuth's security best practice, describes this reuse detection.\n\nWrite `login(userName)` and `refreshSession(oldRefresh)`. A new login starts a new family (`randHex(8)`). Revoking one family leaves every other family alone: another device, another user. `acceptToken` is the previous lesson's.",
        steps: [
          { text: "`login` returns a 5-minute access token and a 64-hex refresh token, and the server stores only `sha256` of the refresh token.",
            test: L(
              "refreshTokens.clear();",
              "var s = login('ada');",
              "var claims = acceptToken(s.access);",
              "T.expect(claims && claims.sub === 'ada', 'The access token should be accepted by acceptToken — got ' + JSON.stringify(claims));",
              "T.eq(claims.exp - claims.iat, 300, 'Access tokens live 5 minutes');",
              "T.expect(/^[0-9a-f]{64}$/.test(s.refresh), 'The refresh token should be randHex(32): 64 hex characters — yours: ' + JSON.stringify(s.refresh));",
              "T.expect(!refreshTokens.has(s.refresh), 'The raw refresh token is a key in refreshTokens, so a leaked table would hand out working tokens. Store sha256(refresh) instead');",
              "T.expect(refreshTokens.has(sha256(s.refresh)), 'refreshTokens should be keyed by sha256(refresh)');",
              "var row = refreshTokens.get(sha256(s.refresh));",
              "T.expect(row.userName === 'ada' && row.used === false && typeof row.family === 'string' && row.family.length > 0, 'The row should hold userName, a family id and used: false — yours: ' + JSON.stringify(row));") },
          { text: "`refreshSession` rotates: a new access token and a **new** refresh token. Seven minutes after login the old access token is dead and the new one works.",
            test: L(
              "refreshTokens.clear();",
              "var s1 = login('ada');",
              "T.advance(7 * 60 * 1000);",
              "T.eq(acceptToken(s1.access), null, 'Seven minutes later the first access token has expired');",
              "var s2 = refreshSession(s1.refresh);",
              "T.expect(!!s2 && typeof s2.access === 'string', 'refreshSession should return { access, refresh } for a valid refresh token — got ' + JSON.stringify(s2));",
              "T.expect(acceptToken(s2.access) !== null, 'The new access token is accepted');",
              "T.expect(s2.refresh !== s1.refresh && /^[0-9a-f]{64}$/.test(s2.refresh), 'Rotation: every refresh hands out a NEW refresh token');",
              "var old = refreshTokens.get(sha256(s1.refresh));",
              "T.expect(!!old && old.used === true, 'The old refresh token stays in the table marked used: true, so a second use can be recognised');") },
          { text: "Reuse detection. An attacker copied ada's refresh token and ada refreshes first. When the attacker presents the copy it's refused, **and** ada's new refresh token stops working too.",
            test: L(
              "refreshTokens.clear();",
              "var victim = login('ada');",
              "var stolen = victim.refresh;",
              "var next = refreshSession(victim.refresh);",
              "T.expect(!!next, 'ada refreshes normally');",
              "T.eq(refreshSession(stolen), null, 'The attacker presents the copied, already-used refresh token: refuse it');",
              "T.eq(refreshSession(next.refresh), null, 'Reuse means a copy exists and the server cannot tell which holder is real, so the whole family is revoked and ada must log in again');") },
          { text: "Revoking a family touches nothing else: ada's login on another device and bo's session keep working, and a token the server never issued is `null`.",
            test: L(
              "refreshTokens.clear();",
              "var laptop = login('ada'), phone = login('ada'), bo = login('bo');",
              "var l2 = refreshSession(laptop.refresh);",
              "refreshSession(laptop.refresh);",
              "T.eq(refreshSession(l2.refresh), null, 'The laptop family was revoked by that reuse');",
              "T.expect(refreshSession(phone.refresh) !== null, 'The phone logged in separately, so it is a different family and still refreshes');",
              "T.expect(refreshSession(bo.refresh) !== null, 'bo is a different user and is untouched');",
              "T.eq(refreshSession('0000000000000000000000000000000000000000000000000000000000000000'), null, 'A refresh token the server never issued → null');") }
        ],
        files: [
          { name: "script.js", content: u4File(L(
            "function login(userName) {",
            "  const refresh = randHex(32);",
            "  refreshTokens.set(refresh, { userName: userName }); // TODO: store sha256(refresh), a family id and used: false",
            "  return { access: issueAccess(userName), refresh: refresh };",
            "}",
            "",
            "function refreshSession(oldRefresh) {",
            "  const row = refreshTokens.get(oldRefresh);",
            "  if (!row) return null;",
            "  // TODO: rotate: mark this token used and hand out a new one in the same family",
            "  // TODO: a used token presented again means it was copied: revoke the whole family",
            "  return { access: issueAccess(row.userName), refresh: oldRefresh };",
            "}")) }
        ],
        hints: [
          "One helper issues a pair for a family: `function issuePair(userName, family) { const refresh = randHex(32); refreshTokens.set(sha256(refresh), { userName: userName, family: family, used: false }); return { access: issueAccess(userName), refresh: refresh }; }`. `login` is `issuePair(userName, randHex(8))`.",
          "In `refreshSession`, look the row up by hash: `refreshTokens.get(sha256(String(oldRefresh)))`. A normal refresh is `row.used = true; return issuePair(row.userName, row.family);`.",
          "Before that, catch reuse: `if (row.used) { for (const [key, r] of refreshTokens) if (r.family === row.family) refreshTokens.delete(key); return null; }`."
        ],
        solution: {
          "script.js": u4File(L(
            "function login(userName) {",
            "  return issuePair(userName, randHex(8)); // a new login starts a new family",
            "}",
            "",
            "function issuePair(userName, family) {",
            "  const refresh = randHex(32);",
            "  refreshTokens.set(sha256(refresh), { userName: userName, family: family, used: false });",
            "  return { access: issueAccess(userName), refresh: refresh };",
            "}",
            "",
            "function refreshSession(oldRefresh) {",
            "  const row = refreshTokens.get(sha256(String(oldRefresh)));",
            "  if (!row) return null;",
            "  if (row.used) {",
            "    // Presented twice: someone else holds a copy. End every token in this family.",
            "    for (const [key, r] of refreshTokens) if (r.family === row.family) refreshTokens.delete(key);",
            "    return null;",
            "  }",
            "  row.used = true;",
            "  return issuePair(row.userName, row.family);",
            "}"))
        }
      },

      {
        id: "auth-u5-p",
        title: "Project: Fix the verifier",
        kind: "js", chip: "AUTH", xp: 50, mins: 35, project: true,
        crypto: true, clock: 1700000000000,
        brief: "*The course's first project, and a lab against your own sandbox: every token here is signed by the checks.*\n\n`notes-api` verifies access tokens with `verifyAccessToken`, and it has **five flaws**. Each one lets through a token that should never pass. The file doesn't say where they are. Each checkpoint hands the verifier one of those tokens, alongside a good token that must keep working.\n\nEverything you need comes from this unit and the last one:\n\n- who decides the algorithm\n- which claims a token must carry for *this* API\n- what unit JWT times are in\n- how signatures are compared\n- what to do with a key id you don't recognise\n\nFix the verifier without changing its shape: `verifyAccessToken(token)` returns the claims or `null`, and never throws. `signToken(kid, claims)` is how the auth server signs; the checks use it, and so can you while testing.\n\n*When you're done, notice how much of this a library's options would have decided for you. `jose`'s `jwtVerify` takes the key, the allowed algorithms, the issuer and the audience, and compares signatures in constant time.*",
        steps: [
          { text: "Flaw 1, the algorithm: an unsigned `alg: none` token claiming to be admin must be refused, while a real token still passes.",
            test: L(
              "var nowSec = Math.floor(now() / 1000);",
              "var claims = function (extra) { return Object.assign({ sub: 'ada', iss: 'https://auth.example', aud: 'notes-api', iat: nowSec, exp: nowSec + 300 }, extra || {}); };",
              "T.expect(verifyAccessToken(signToken('2026-09', claims())) !== null, 'A correctly signed, current token for notes-api must still verify');",
              "var forged = part({ alg: 'none', typ: 'JWT', kid: '2026-09' }) + '.' + part(claims({ sub: 'admin', role: 'admin' })) + '.';",
              "var r;",
              "try { r = verifyAccessToken(forged); } catch (e) { T.expect(false, 'verifyAccessToken threw on an alg:none token (\"' + e.message + '\"). Return null instead'); }",
              "T.eq(r, null, 'An alg:none token with no signature was accepted as admin. The server decides the algorithm');") },
          { text: "Flaw 2, the audience: a token the same auth server signed for `billing-api` must not open this API.",
            test: L(
              "var nowSec = Math.floor(now() / 1000);",
              "var claims = function (extra) { return Object.assign({ sub: 'ada', iss: 'https://auth.example', aud: 'notes-api', iat: nowSec, exp: nowSec + 300 }, extra || {}); };",
              "T.expect(verifyAccessToken(signToken('2026-09', claims())) !== null, 'A correctly signed, current token for notes-api must still verify');",
              "T.eq(verifyAccessToken(signToken('2026-09', claims({ aud: 'billing-api' }))), null, 'A token for billing-api opened notes-api. Check aud');",
              "T.expect(verifyAccessToken(signToken('2026-09', claims({ aud: ['billing-api', 'notes-api'] }))) !== null, 'An aud array that includes notes-api is accepted');") },
          { text: "Flaw 3, expiry: a token that expired two hours ago must be refused, while 30 seconds past `exp` is still within the drift allowance.",
            test: L(
              "var nowSec = Math.floor(now() / 1000);",
              "var claims = function (extra) { return Object.assign({ sub: 'ada', iss: 'https://auth.example', aud: 'notes-api', iat: nowSec, exp: nowSec + 300 }, extra || {}); };",
              "T.eq(verifyAccessToken(signToken('2026-09', claims({ iat: nowSec - 7500, exp: nowSec - 7200 }))), null, 'This token expired two hours ago and was accepted. Look at the unit of every number compared with exp');",
              "T.expect(verifyAccessToken(signToken('2026-09', claims({ exp: nowSec - 30 }))) !== null, '30 seconds past exp is within a 60-second drift allowance: accept it');") },
          { text: "Flaw 4, the comparison: the signature must be compared as bytes with `safeEqual` (a spy counts the call), never with `===` on strings.",
            test: L(
              "var nowSec = Math.floor(now() / 1000);",
              "var good = signToken('2026-09', { sub: 'ada', iss: 'https://auth.example', aud: 'notes-api', iat: nowSec, exp: nowSec + 300 });",
              "T.expect(verifyAccessToken(good) !== null, 'A correctly signed, current token for notes-api must still verify');",
              "var bad = good.slice(0, good.lastIndexOf('.') + 1) + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';",
              "var calls = 0;",
              "var realEq = safeEqual;",
              "var r = T.mutate('safeEqual', function (a, b) { calls++; return realEq(a, b); }, function () { return verifyAccessToken(bad); });",
              "T.eq(r, null, 'A token with a wrong signature must be refused');",
              "T.expect(calls === 1, 'The signature should be compared with safeEqual exactly once. It was called ' + calls + ' times, so a === still stops at the first different character');") },
          { text: "Flaw 5, the key id: a token naming a key the server doesn't have must be refused, not checked against some other key. So must a token with no `kid`.",
            test: L(
              "var nowSec = Math.floor(now() / 1000);",
              "var p = part({ sub: 'ada', iss: 'https://auth.example', aud: 'notes-api', iat: nowSec, exp: nowSec + 300 });",
              "var sign = function (header) { var h = part(header); return h + '.' + p + '.' + b64urlEncode(hmac('sha256', 'august-key-retired-soon', h + '.' + p)); };",
              "T.expect(verifyAccessToken(sign({ alg: 'HS256', typ: 'JWT', kid: '2026-08' })) !== null, 'A token signed with a key the server has (2026-08) verifies');",
              "var r1, r2;",
              "try { r1 = verifyAccessToken(sign({ alg: 'HS256', typ: 'JWT', kid: '2025-01' })); r2 = verifyAccessToken(sign({ alg: 'HS256', typ: 'JWT' })); } catch (e) { T.expect(false, 'verifyAccessToken threw on a token with an unknown kid (\"' + e.message + '\"). Return null instead'); }",
              "T.eq(r1, null, 'kid 2025-01 is not a key this server has, yet the token verified against another key. Unknown kid: refuse');",
              "T.eq(r2, null, 'A token with no kid: refuse');") }
        ],
        files: [
          { name: "script.js", content: pFile(
            "const LEEWAY = 60000; // allowed clock drift",
            L(P_VERIFY_START,
              "  if (header.alg === \"none\") return checkClaims(claims);",
              "",
              "  const key = KEYS[header.kid] || Object.values(KEYS)[0];",
              "  const expected = b64urlEncode(hmac(\"sha256\", key, parts[0] + \".\" + parts[1]));",
              "  if (expected !== parts[2]) return null;",
              "",
              "  return checkClaims(claims);"),
            L("  const t = Math.floor(now() / 1000);",
              "  if (typeof claims.exp !== \"number\" || t > claims.exp + LEEWAY) return null;",
              "  if (claims.iss !== ISSUER) return null;",
              "  return claims;")) }
        ],
        hints: [
          "Two flaws sit right after decoding: which `alg` values get through, and what happens when `KEYS[header.kid]` is undefined. Allow exactly `HS256`, and refuse a kid that isn't `Object.prototype.hasOwnProperty.call(KEYS, header.kid)`.",
          "For the signature, decode `parts[2]` with `b64urlDecode` inside a `try`, then compare bytes: `safeEqual(given, hmac(\"sha256\", KEYS[header.kid], parts[0] + \".\" + parts[1]))`.",
          "In `checkClaims`, everything compared with `exp` must be in seconds, and `LEEWAY` isn't. Then add the audience: `const aud = Array.isArray(claims.aud) ? claims.aud : [claims.aud]; if (aud.indexOf(AUDIENCE) === -1) return null;`."
        ],
        solution: {
          "script.js": pFile(
            "const LEEWAY = 60; // allowed clock drift, in seconds like every JWT time",
            L(P_VERIFY_START,
              "  if (header.alg !== \"HS256\") return null;                                  // the server decides",
              "  if (!Object.prototype.hasOwnProperty.call(KEYS, header.kid)) return null; // unknown kid: refuse",
              "",
              "  let given;",
              "  try { given = b64urlDecode(parts[2]); } catch (e) { return null; }",
              "  if (!safeEqual(given, hmac(\"sha256\", KEYS[header.kid], parts[0] + \".\" + parts[1]))) return null;",
              "",
              "  return checkClaims(claims);"),
            L("  const t = Math.floor(now() / 1000);",
              "  if (typeof claims.exp !== \"number\" || t > claims.exp + LEEWAY) return null;",
              "  if (claims.iss !== ISSUER) return null;",
              "  const aud = Array.isArray(claims.aud) ? claims.aud : [claims.aud];",
              "  if (aud.indexOf(AUDIENCE) === -1) return null;",
              "  return claims;"))
        }
      },

      {
        id: "auth-quiz-5",
        title: "Unit 5 quiz: JWTs",
        kind: "quiz", xp: 10,
        brief: "Reading a JWT, pinning the algorithm, checking claims, and refresh-token rotation. 80% to pass.",
        questions: [
          { q: "A JWT's payload part is `eyJzdWIiOiJhZGEiLCJyb2xlIjoiYWRtaW4ifQ`. What does anyone who sees the token learn?",
            choices: ["Nothing at all, until they have the key that signed it", "Only the header, because the payload part is encrypted", "That `sub` is ada and `role` is admin: it's just base64url", "The signing key, once they collect enough such tokens"],
            answer: 2, explain: "The payload is base64url JSON, and decoding needs no key: this one reads `{\"sub\":\"ada\",\"role\":\"admin\"}`. The signature lets the server detect changes but hides nothing. HMAC keys can't be recovered from tokens, however many you collect." },
          { q: "A verifier contains `if (header.alg === \"none\") return payload;`. What fix does RFC 8725 recommend?",
            choices: ["The server fixes the allowed algorithm for each key and refuses any other", "Lowercase `alg` before comparing it, so that `None` and `NONE` are caught too", "Require `typ: \"JWT\"` in the header before reading `alg` at all", "Accept `none` only for tokens whose `exp` is less than a minute away"],
            answer: 0, explain: "The bug is letting the token choose how it gets checked. Lowercasing still accepts `none`, `typ` is just as attacker-controlled as `alg`, and a short `exp` on an unsigned token is simply a forged short `exp`. Pin the algorithm on the server and compare exactly." },
          { q: "Why compare `exp: 1700000000` against `Math.floor(now() / 1000)` rather than `now()`?",
            choices: ["JWT times are in milliseconds, so the claim must be multiplied first", "Dividing by 1000 builds in the leeway that servers need for drift", "`now()` is local time, while `exp` is UTC, so they must be converted", "JWT times are seconds since 1970, while `now()` counts milliseconds"],
            answer: 3, explain: "RFC 7519 defines `exp`, `nbf` and `iat` as seconds since the epoch, while JavaScript clocks count milliseconds. Both are UTC, and leeway is a separate, explicit allowance. Mixing the units is a real bug: compared the wrong way, every token is expired or none ever is." },
          { q: "Why use short access tokens plus refresh tokens instead of one long-lived JWT?",
            choices: ["Short tokens are smaller, so every request header gets lighter", "A JWT can't be revoked, so a short one limits how long a stolen copy works", "Browsers automatically delete tokens older than an hour from local storage", "Refresh tokens are signed with a stronger algorithm than access tokens"],
            answer: 1, explain: "A JWT is valid until `exp` whatever happens, because there's no row to delete. Keeping access tokens to minutes bounds the damage of a leak, while refresh tokens are server-side rows that can be revoked. Token size and browser storage have nothing to do with it." },
          { q: "ada's refresh token is presented a second time, after it was already used once. What should the server do?",
            choices: ["Issue a fresh pair anyway, since the token itself is still valid", "Refuse it but keep ada's newest refresh token working as normal", "Ask ada to confirm by email before issuing another access token", "Refuse it and revoke every refresh token in that family"],
            answer: 3, explain: "A used token coming back means two parties hold copies, and the server can't tell whether the attacker or ada made the first refresh. Revoking the whole family stops both. ada logs in again, and the attacker's copy is worthless." },
          { q: "You need JWT verification in a production service. What should you ship?",
            choices: ["A maintained library, told the key, algorithms, issuer and audience", "The verifier from this unit's project, since its five flaws are now fixed", "A decoder that reads `sub` and trusts a gateway in front to verify it", "Your own HMAC code, because it avoids adding a third-party dependency"],
            answer: 0, explain: "This unit builds verification by hand so the rules make sense. Production code should use a maintained library (such as `jose`) configured with the key, the allowed algorithms, the issuer and the audience. Hand-built crypto misses edge cases, and trusting an upstream check is exactly how a decoded-but-unverified token slips through." }
        ]
      }
    ]
  });
})();
