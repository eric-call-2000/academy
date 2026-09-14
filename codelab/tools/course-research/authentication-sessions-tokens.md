# Authentication — sessions, tokens and the redirect dance (id: `auth`, prefix: `auth`, icon 🔐, level Advanced, 8 units)

## Verdict
STANDALONE, and it replaces the stub's blurb almost entirely. It ships on two small pieces of engine work, a crypto upgrade and a fake clock, plus one new simulator, `authsim.js`: a browser with a real cookie jar and more than one site. There's no shell and no Worker rewrite.

Why the stub's blurb can't be built as written: about 40% of it is already taught. Password hashing is `sec-u6-3`, security headers are `sec-u7-3`, CORS configuration is `ship-u4-4`, and login rate limiting is `sec-u6-4`. Building those again would make this the filler course the Web Security research warned about. What's left, and absent from every one of the 588 built items, is the actual machinery of staying signed in: server-side sessions and the `Set-Cookie` header, the browser's rules for which cookie goes where, CSRF, signed tokens and JWTs, OAuth 2.0 with PKCE, second factors, and account recovery. A search of every unit file finds `SameSite`, `PKCE`, `TOTP`, `HMAC` and `alg` in no graded step at all. `srv-u5` hands out `"token-" + name`, and `sec-u5-3` fakes a cookie jar as a plain object and labels it a simulation. This course is the payoff for both.

Why not fold it into Web Security: that course is 33 items and was sized on purpose to stop before auth machinery ("its four ideas are … roles, IDOR, hashing, rate limiting"). This course has 41 items of new material. The Junior Security Engineer sheet also requires `auth` by name, and it is that sheet's only missing course now that `cli` has shipped.

Why a simulator, and why it's honest: the preview iframe is sandboxed `srcdoc` with an opaque origin, so `document.cookie` throws, and one origin cannot stage `app.example`, `evil.example` and `idp.example` against each other. The CSP lab found a way to get real enforcement one frame down. There's no equivalent for cookies, because cookies need real sites. What a junior is screened on here is a set of RULES: which cookie the browser sends to which request, when `SameSite=Lax` lets a cross-site request carry it, that `__Host-` forbids `Domain`, and that a redirect URI must match exactly. Those are deterministic, written down in RFC 6265bis and on MDN, and simulatable exactly. The design rule from the Docker course carries over unchanged: **fake payloads, never rules.** The attacker's page is a declarative list of actions. The browser's decisions are the real ones.

Scope carved OFF, each given a cheatsheet card and no graded step: SAML, LDAP and Kerberos; mTLS and DPoP sender-constrained tokens; the elliptic-curve maths inside WebAuthn; running a production identity provider; framework-specific middleware (Passport, Spring Security, NextAuth); and password hashing, which is `sec-u6-3`, referenced and never re-taught.

Path position: directly after Web Security Basics. The course leans on `srv` (request/response handlers and `srv-u5`'s login), `sec` (hashing, rate limits, XSS token theft) and `ship-u4-4` (CORS, which U3 deliberately contrasts with CSRF). Level: Advanced, as the stub has it, because all three prerequisites are Intermediate courses.

## Size
41 items: 30 lessons, 3 projects, 8 quizzes → **4 credits {sec 3, be 1}**, exactly the stub's `plannedCredits`, so `positions.js` needs no change. Advertise 8h.

How that's checked: `validate.js` models each item at its own `mins` field (defaulting to 10 / 30 / 5 only when `mins` is absent) and derives credits as `Math.round(modelHours / 2)`. An honest 4 therefore needs 7.0–8.99 modelled hours (420–539 min). At the flat defaults, 41 items come to 430 min, just over the floor. With the `mins` values sibling courses actually use (12–14 per lesson), the same 41 items land near 9h. Set `mins` per lesson to what the lesson really takes, then confirm the derived credit is 4, not 5. If lessons are cut and the model drops under 7h, set credits to 3 and re-check the Security sheet's `sec: 6` floor.

For scale: typical interview-prep material on JWT, OAuth, CSRF and sessions is question lists with no exercises. Every item here except the quizzes makes the learner run the attack or the defence and checks the result.

## Engine needs
About 900 lines total, in four pieces. They land in this order, because the later ones depend on the earlier ones.

1. **harnessCrypto v2 — ~140 lines in runner.js.** REQUIRED BY: U4, U5, U6, U7, both capstone projects.
Today's `sha256(str)` UTF-8-encodes a *string*. HMAC XORs the key with `0x36`/`0x5c` pad bytes, and values above `0x7F` would be mangled by that encoding. So add byte-level primitives beside the existing ones (existing `sec` lessons keep working unchanged): `sha256Bytes(u8)`, `sha1Bytes(u8)` (TOTP is HMAC-SHA1), `hmac("sha256"|"sha1", key, msg)` accepting strings or `Uint8Array`, `utf8(str)`, `hex(u8)`, and `timingSafeEqual(a, b)`. Still pure JS and synchronous, still gated on `lesson.crypto`, for the reason `sec` already recorded: `crypto.subtle` is async and missing on `file://`.
**base64url is NOT provided.** Building it is `auth-u4-1`'s exercise, so the harness must not hand it over (the `harnessNode` precedent). Lessons after U4 get it from their own starter files.
Known-answer tests go in a new `tools/test-crypto.js`, **values verified 2026-09-12 against Node's `crypto`**:
- RFC 4231 case 2: `HMAC-SHA256("Jefe", "what do ya want for nothing?")` = `5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843`
- RFC 7636 App. B: verifier `dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk` → S256 challenge `E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM`
- RFC 6238 App. B, SHA1, secret `"12345678901234567890"`: t=59 → `94287082`, 1111111109 → `07081804`, 1111111111 → `14050471`, 1234567890 → `89005924`, 2000000000 → `69279037`, 20000000000 → `65353130` (6-digit at t=59: `287082`)

2. **A fake clock — ~30 lines.** REQUIRED BY: U1-4, U1-5, U5-3, U5-4, U7-1 to U7-3.
Every expiry lesson needs time to pass, while the sandbox rule is determinism and no `Date.now()`. `lesson.clock: <start ms>` injects `now()` and `T.advance(ms)` into the Worker. A validate.js gate FAILS any `auth-` lesson whose starter, solution or steps mention `Date.now` or `new Date()` without an argument. The same gate shape already exists for `__fired` without `T.sleep`.

3. **`authsim.js` — ~650 lines, a plain script loaded only when `lesson.browser` is set.** REQUIRED BY: U2, U3, U6, both capstone projects.
It's pure logic, with no DOM, so it runs inside the Worker the way `sync.js` is proven to run in a Worker-like isolate. The model:
- **Sites.** The learner registers handlers per origin, in `srv`'s exact shape: `site("https://app.example", req => res)`, where `req = {method, path, query, headers, body, cookies}` and `res = {status, headers, body}`. `Set-Cookie` may be a string or an array. Attacker and identity-provider sites come from the lesson as source strings (the `mockFn` precedent).
- **Cookie jar.** RFC 6265bis storage and send rules: host-only vs `Domain=` (parent domains only, never a public suffix), `Path` prefix matching (`/docs` matches `/docs/Web`, not `/docsets`), `Secure` (https only), `HttpOnly` (hidden from `document.cookie`-style reads via `T.jsCookies(site)`, still sent on requests), `Max-Age` taking precedence over `Expires`, `Max-Age=0` deleting, and the `__Secure-`/`__Host-` prefix rejections, all from the MDN reference.
- **SameSite.** `Strict` is sent only on same-site requests. `Lax` is also sent on cross-site *top-level navigations using a safe method*. `None` is sent always but REJECTED without `Secure`. When the attribute is omitted, the sim models Chrome's Lax-by-default *including* its two-minute window where a freshly set cookie still rides a cross-site POST. That exception is a real attack surface, so it's modelled, and the brief names it as Chrome's behaviour.
- **Browsing actions.** `visit(url)` (top-level GET), `click(url)` (top-level GET from a page on another site), `submitForm(fromSite, {method, action, fields})` (top-level, may be cross-site), `fetchFrom(fromSite, url, {credentials})` (subresource), and automatic 30x `Location` following for OAuth. Every request is stamped with the correct `Origin` (present on POST and on cross-origin fetch) and `Sec-Fetch-Site` (`same-origin` / `same-site` / `cross-site` / `none`).
- **T helpers.** `T.requests()` gives every request with the cookies actually sent. Also `T.jar(site)`, `T.rejected()` (Set-Cookie lines the browser refused, with the reason), `T.lastResponse()` and `T.location()`.
- **Contract first, as with gitsim and dockersim.** Write `tools/test-authsim.js` before the engine. It freezes the action surface and encodes every MDN rule above as a case, including the invalid-prefix examples verbatim. It runs as validate.js phase 0g beside `test-crypto.js`.

4. **validate.js gates — ~40 lines.** No `Date.now` in `auth-` lessons (above). A lesson using `hmac(` or `sha1Bytes(` must set `crypto: true`, and a lesson calling `site(`/`visit(` must set `browser: true`, both unless the lesson defines the name itself (the `node: true` precedent). And a check that `auth-u4-1` does NOT set `crypto` in a way that provides base64url.

EXPLICITLY NOT NEEDED: shell.js, a Worker transpile change, real `crypto.subtle`, a real identity provider, or network access.

## Teachable today
Honestly, U4 lessons 1 and 4 plus all 8 quizzes. Everything else needs piece 1, 2 or 3 above. The recommended tranche order front-loads the smallest engine work:
- **Tranche A — pieces 1 and 2, then U1, U4, U5, U7.** 23 items, no browser simulator. Sessions, signing, JWTs and second factors are all handler-in, handler-out `js` lessons.
- **Tranche B — `authsim.js`, then U2, U3, U6 and U8.** 18 items. Don't advertise the course until B lands: CSRF and OAuth are what a screener asks about first.

Briefs may now use fenced code blocks (`mdBlock` gained them in PR #20). Tables are still not rendered.

## Overlaps
Six collisions. Each one gets a deliberate boundary.

1. **`srv-u5` "Auth-lite" (whole unit).** It hands out `"token-" + userName` in an array, returns a 401 envelope, and removes the token on logout. AVOIDANCE: U1 never re-grades the 401 envelope or credential matching. It takes `srv-u5-2`'s protected route as given and upgrades the *token*: an unguessable id, server-side state, a `Set-Cookie` header, rotation and expiry. The U1-1 brief opens by naming `srv-u5-1`'s token and asking what happens when someone guesses `token-bo`.
2. **`sec-u5-3` "Where a token lives".** Its `cookieJar = {}` is a self-labelled stand-in, one of the three simulations the `sec` research set as its ceiling. AVOIDANCE: this course doesn't re-run the XSS theft. U2 is where the jar becomes real: `HttpOnly` is enforced by `authsim`, not by a closure. The U2-1 brief says so by name.
3. **`sec-u6-3` "Never store a password".** AVOIDANCE: hashing isn't re-taught. U7-3 *uses* the contrast as its graded insight: a reset token is 128 random bits, so a single `sha256` at rest is correct, while a password needs `slowHash`, because a password has little entropy and a random token has a lot. A checkpoint asserts the stored record contains `sha256(token)` and not the token itself.
4. **`sec-u6-4` "Rate limits & identical failures".** AVOIDANCE: U7-2 (TOTP brute force: 10⁶ codes) and U7-3 (reset for an unknown email) reference that lesson's limiter and identical-response rule, and grade only what's new: the replay of an already-used time step, and a reset response byte-identical for known and unknown addresses.
5. **`ship-u4-4` "CORS".** AVOIDANCE, and a teaching moment: U3-4 contrasts it head-on. CORS decides who may *read* a response, not who may *send* a request. A cross-site form POST needs no preflight, so the CORS-correct API from Deploying is still forgeable. One checkpoint proves it with `authsim`. `Access-Control-Allow-Origin` is never re-graded.
6. **The `api` stub ("Advanced API Design").** Its blurb lists rate limiting and versioning, not auth, but API-key and bearer-token auth could drift into it. This course claims JWTs and OAuth. When `api` is researched, its brief should reference `auth-u5` rather than rebuild token verification.

## Units

### 1. Unit 1 — Sessions, server side
A session is a row on the server, and the cookie only holds its name. Unguessable ids, a hand-written `Set-Cookie`, rotation at login, both timeouts, and a logout that actually ends something.

Lessons:
  - A session is a row, not a token
  - `Set-Cookie`, written by hand
  - Session fixation: rotate the id at login
  - Idle and absolute timeouts
  - Logout that actually logs out
  - Unit 1 quiz: Sessions

Graded how:
All `js` with `crypto: true` and `clock`. (1) `createSession(userName)` stores `{userName, created, lastSeen}` under `randHex(16)`. Checks: the id is 32 hex characters (the OWASP ≥64-bit floor), two sessions for the same user get different ids, and the response body contains no user data beyond what the route returns. (2) `serializeCookie(name, value, opts)` and `parseCookieHeader(str)`: exact strings for `HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=1800`, attribute order free (asserted by parsing the header back), and a value containing `;` or a space rejected or encoded. (3) The attack first: the grader plants session `s-evil`, the victim logs in, and on the starter the attacker's id is now authenticated (the checkpoint expects exactly that). The learner then rotates at login: the old id → 401, the new id carries the user, and the cart data made before login survives the rotation. (4) With `T.advance`: 29 minutes idle → still valid and `lastSeen` slides. 31 minutes → 401. Active every 10 minutes for 8h01m → 401 anyway (absolute). (5) Logout deletes the row AND sends `Max-Age=0`. A checkpoint replays the pre-logout cookie → 401. This is what clearing only the client-side cookie fails.

### 2. Unit 2 — The cookie jar
What the browser does with the header you wrote. Nothing here is a rule the learner implements; the browser enforces them all. The learner writes headers and watches the jar accept, refuse and send.

Lessons:
  - Domain and Path: who gets the cookie
  - `__Host-` and `__Secure-`: prefixes the browser enforces
  - Deleting and expiring: `Max-Age` beats `Expires`
  - SameSite: Strict, Lax, None
  - Unit 2 quiz: The cookie jar

Graded how:
All `js` with `browser: true`. (1) An app on `app.example` plus a blog on `blog.app.example`. The session must NOT reach the blog, while a `theme` cookie must. Checks read `T.requests()` for the cookies actually sent, so a `Domain=app.example` session fails. (2) Three `Set-Cookie` lines the jar refuses, straight from MDN's invalid examples. `T.rejected()` lists them with reasons, the learner fixes each, and the check is that `T.jar()` holds all three and `__Host-sid` has no Domain and `Path=/`. (3) A cookie sent with both `Expires` (far future) and `Max-Age=0` → gone. Logout sets only `Expires` in the past → gone. `Max-Age=60` then `T.advance(61000)` → not sent. (4) A six-request matrix: link from an email (cross-site GET navigation), an `evil.example` form POST, an `evil.example` fetch, and a same-site POST. The learner picks the attribute so the email link arrives signed in and the forged POST arrives with no cookie. `Strict` fails the first requirement, `None; Secure` fails the second, and `Lax` passes. A last checkpoint omits the attribute and shows the two-minute Lax-by-default POST window succeeding. Named as Chrome's behaviour.

### 3. Unit 3 — CSRF: the request you didn't send
The browser attaches cookies to requests the user never meant to make. Forge one, then close it three ways. OWASP ranks synchronizer tokens first, signed double-submit for stateless apps, and Fetch Metadata / Origin as the layer that catches what's left.

Lessons:
  - The attack lab: forge a transfer
  - Synchronizer tokens
  - Signed double-submit, and why the naive one breaks
  - Fetch Metadata, Origin and why CORS isn't this
  - Unit 3 quiz: CSRF

Graded how:
All `js` with `browser: true` (plus `crypto: true` from lesson 3). (1) The learner writes the attacker page's actions (an auto-submitted `POST /transfer` from `evil.example`) against a bank whose session is `SameSite=None; Secure`. The check: the victim's balance moved and `T.requests()` shows the cookie was sent. It's labelled a lab in the brief. (2) A per-session token rendered into the form and required on every unsafe method: the forged POST → 403 with the balance unchanged, the genuine form → 200, and a token from a *different* session → 403. (3) Naive double-submit is shown failing first: a cookie tossed from a compromised `evil.app.example` sets both halves and the transfer goes through. The learner then binds the token to the session with `hmac("sha256", key, sessionId + "!" + nonce)`, and the same toss → 403. (4) Reject unsafe methods when `Sec-Fetch-Site` is `cross-site`, falling back to an `Origin` allow-list when the header is absent. The ship-u4-4-style CORS-correct API is then shown still forgeable by a simple form POST until the check lands.

### 4. Unit 4 — Signing things
Before JWTs: a signature is how a server trusts data it handed out. base64url, HMAC over a payload, comparing without leaking time, and rotating the key.

Lessons:
  - base64url, both ways
  - HMAC: a signature only the server can make
  - Compare in constant time
  - Rotate the key without logging everyone out
  - Unit 4 quiz: Signatures

Graded how:
All `js`. (1) NO `crypto` flag. The learner builds `b64urlEncode(bytes)`/`b64urlDecode(str)`. Checks cover bytes that yield `+` and `/` in standard base64, all three padding lengths, and round trips of `utf8("héllo ✓")`. (2) `crypto: true`. `sign(payload)` → `payload + "." + b64url(hmac)` and `verify(token)`. The RFC 4231 case-2 vector is a sanity check, one flipped payload character → rejected, and a token signed with a different key → rejected. (3) `timingSafeEqual` is provided. The learner writes `verify` so a wrong signature is compared in full. A proxy-wrapped byte array counts index reads: the count is the same when the first byte differs and when the last byte does. An early-exit `===` loop fails. (4) Tokens carry a `kid`. The old key still verifies, the new key signs, and a token with an unknown `kid` → rejected, not tried against every key.

### 5. Unit 5 — JWTs, right and wrong
A JWT is U4's signed token with a JSON header, and the header is where the bugs live. RFC 8725 practices graded as attacks the learner runs first.

Lessons:
  - Decoding is not verifying
  - `alg: none`: forge one, then refuse it
  - `exp`, `nbf`, `iss`, `aud`, and a clock that drifts
  - You can't revoke a JWT: short access, rotating refresh
  - Project: Fix the verifier
  - Unit 5 quiz: JWTs

Graded how:
All `js` with `crypto: true` and `clock`. (1) Decode a real HS256 token with no key (vector generated with Node: header `{"alg":"HS256","typ":"JWT"}`, payload `{"sub":"ada","exp":1700000000}`). A checkpoint confirms the payload is readable by anyone, and a second rejects an issuer that puts a secret in a claim. (2) The starter verifier trusts `header.alg`. The learner forges `{"alg":"none"}` with `sub: "admin"` and an empty signature, and the checkpoint expects it ACCEPTED. The fix pins the algorithm per key (RFC 8725 §3.1), and the same forged token → rejected while a valid HS256 token still passes. (3) `exp` past → rejected, `nbf` future → rejected, within 60s leeway → accepted, wrong `iss` → rejected, and an `aud` of another service → rejected (§3.9). (4) 5-minute access tokens plus refresh tokens stored hashed and rotated on use. Reusing a spent refresh token revokes the whole family, so the attacker's *and* the victim's next refresh both fail. That's the graded insight. PROJECT: a verifier with five planted flaws (alg trust, missing `aud` check, `exp` in milliseconds against a seconds claim, `===` signature compare, and an unknown `kid` falling back to the first key), one checkpoint group per flaw, each proven by a token that should never have passed.

### 6. Unit 6 — OAuth 2.0 and PKCE
"Sign in with …" is a redirect, a code and a back-channel exchange. Built on `authsim` with `idp.example`, following RFC 9700: authorization code plus PKCE for everyone, exact redirect matching, no implicit grant and no password grant.

Lessons:
  - The authorization code flow, one redirect at a time
  - `state`: CSRF for the redirect
  - PKCE: a stolen code is useless
  - Exact `redirect_uri` matching
  - ID tokens vs access tokens
  - Unit 6 quiz: OAuth

Graded how:
All `js` with `browser: true` and `crypto: true`. (1) The learner builds the authorize URL and the callback. Checks walk `T.requests()` in order: `app → idp /authorize → 302 → app /callback?code=…`, then a server-to-server `POST /token`, and the app session is created for the IdP's `sub`. (2) An attacker's own code is injected into the victim's callback (login CSRF). On the starter it logs the victim into the attacker's account, and the checkpoint expects that. With `state` bound to the pre-login session → rejected. (3) S256 from the RFC 7636 App. B vector. A code intercepted by a malicious app and redeemed without the verifier → `invalid_grant`, and a code used twice → `invalid_grant`. (4) The learner writes the IdP side this time. The starter's prefix match lets `https://app.example.evil.example/cb` receive a code, and the checkpoint expects the code to leak. Exact matching stops it. (5) An ID token checked for `aud` = this client, `nonce` = the one sent, and `exp`. Then an access token for another API presented as an ID token → rejected. The brief states the difference and that ID tokens are never sent to APIs.

### 7. Unit 7 — Second factors and recovery
The factor after the password, and the way back in when everything's lost, which is where most account takeovers actually happen.

Lessons:
  - TOTP, straight from the RFC
  - Drift windows and replay
  - Password reset without revealing who has an account
  - Recovery codes, and what a passkey server checks
  - Unit 7 quiz: MFA & recovery

Graded how:
All `js` with `crypto: true` and `clock`. (1) The learner implements HOTP dynamic truncation over the provided `hmac("sha1", …)` and TOTP with 30s steps. Checkpoints are the six RFC 6238 SHA1 rows above plus the 6-digit `287082` at t=59. (2) One step either side accepted and two steps rejected (RFC 6238 permits a configured window). A correct code used twice in the same step → rejected on replay (last-used step stored per user). (3) Reset tokens are `randHex(16)`, stored as `sha256`, single-use, and expire after 15 minutes. The response body for a known and an unknown email is byte-identical (`sec-u6-4`'s rule, reused). A checkpoint confirms the DB holds no raw token. (4) Ten recovery codes, stored hashed, each single-use. Then a WebAuthn assertion check with the signature maths given as `verifySignature()` (a labelled stand-in, the only one in the course): challenge equals the one issued, `origin` equals the RP, `rpIdHash` matches, and `signCount` increased. A cloned authenticator replaying an old count → rejected.

### 8. Unit 8 — Two projects
No new ideas: the whole course applied twice.

Lessons:
  - Project: The login system, end to end
  - Project: Sign in with idp.example
  - Final quiz: Authentication

Graded how:
P1 (`browser`, `crypto`, `clock`; ~9 checkpoints): register, log in, TOTP enrolment and verification, and a transfer form. Checks: the session rotates at login, the cookie is `__Host-` + HttpOnly + Lax, the forged transfer from `evil.example` → 403, idle expiry holds, logout replay → 401, a TOTP replay is rejected, and a password reset reveals no account existence. P2 (~8 checkpoints): an OAuth client against a hostile-in-places IdP. Checks: `state` and PKCE present and verified, an injected code refused, a wrong `aud` and a stale `nonce` refused, the session created only after the ID token verifies, and the refresh-reuse attack revoking the family. The brief references NoteStream in prose ("this is the login NoteStream never had") without importing its files.

## Projects
- Project: Fix the verifier (auth-u5-p) — a JWT verifier with five planted flaws (alg trust, missing aud, ms-vs-seconds exp, early-exit compare, kid fallback); each checkpoint group is a forged token that must stop passing.
- Project: The login system, end to end (auth-u8-p1) — sessions, cookie attributes, CSRF, idle expiry, logout, TOTP and reset, graded against `authsim`'s real cookie rules and an attacker site.
- Project: Sign in with idp.example (auth-u8-p2) — an authorization-code + PKCE client graded on state, code injection, ID-token aud/nonce/exp and refresh-token reuse detection.

## Risks
- **Simulator fidelity is the bet, again.** Cookie rules are precise, but browsers differ at the edges (Lax-by-default and its two-minute POST window are Chrome's, and Safari's ITP differs). Mitigation: lessons always set `SameSite` explicitly except the one checkpoint that exists to show the default, which names Chrome. `test-authsim.js` encodes MDN's rules as cases, and anything not faithfully simulatable moves to a cheatsheet.
- **Learners mistaking the exercise for production code.** Hand-built base64url, TOTP and JWT verification are how to *understand* the rules and must never be shipped. Mitigation: every such brief ends with the library to use (`jose`, the framework's session middleware, a certified OIDC client, an authenticator library). A U5 quiz question's correct answer is "use a maintained library", and U4's starter says "never ship this" in its first line.
- **Credit arithmetic is at the floor.** 430 modelled minutes vs a 420 floor for an honest 4. Two cut lessons make 4 dishonest even though the validator's ±1 tolerance would pass it. If cuts happen, drop to 3 credits and re-check the Security sheet (see Size).
- **Clock flakiness.** Any real time source makes expiry lessons nondeterministic. Mitigation: `lesson.clock` plus the `Date.now` gate from the first lesson onward.
- **Attack framing.** The learner forges CSRF requests, `alg: none` tokens and injected OAuth codes. Every target is inside `authsim`, so the real risk is nil, but each attack brief opens with one line establishing it's a lab. Same rule as Web Security.
- **Simulation honesty debt.** One simulator (`authsim`) backed by a contract test suite, plus exactly one labelled stand-in (`verifySignature` in U7-4). Everything else is real computation checked against RFC vectors. Adding stand-ins beyond that one needs a reason written in the brief.
- **Scope creep into identity platforms.** SAML, enterprise SSO, SCIM, DPoP, mTLS and passkey cryptography all feel adjacent. None is gradeable without large new engines. Cheatsheet cards only.

## Sources
- RFC 6238 — TOTP (Appendix B vectors; 30 s step; drift window): https://www.rfc-editor.org/rfc/rfc6238
- RFC 7636 — PKCE (verifier 43–128 chars; S256; `plain` SHOULD NOT be used; Appendix B vector): https://www.rfc-editor.org/rfc/rfc7636
- RFC 9700 — OAuth 2.0 Security Best Current Practice (2025): PKCE MUST for public clients, exact redirect matching, implicit SHOULD NOT, ROPC MUST NOT, refresh rotation or sender-constraining: https://www.rfc-editor.org/rfc/rfc9700
- RFC 8725 — JWT Best Current Practices (§3.1 algorithm verification, §3.5 key entropy, §3.9 audience): https://www.rfc-editor.org/rfc/rfc8725
- MDN — Set-Cookie (SameSite, HttpOnly, Domain, Path, Max-Age precedence, cookie prefixes): https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie
- OWASP — CSRF Prevention Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html
- OWASP — Session Management Cheat Sheet (≥64-bit ids, rotate on privilege change, idle/absolute timeouts): https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- AppSec interview coverage (auth, JWT storage, CSRF, OAuth): https://cyberinterviewprep.com/resources/appsec-interview-questions-2026-guide
- JWT interview coverage: https://www.secondtalent.com/interview-guide/jwt/
- HMAC-SHA256 RFC 4231 case 2, PKCE and TOTP vectors, and the sample HS256 token were each reproduced locally with Node's `crypto` on 2026-09-12.
