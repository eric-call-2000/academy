/* Authentication — Unit 7: Second factors and recovery */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var NEVER_SHIP = "// NEVER SHIP THIS: hand-built one-time codes and passkey checks are for understanding. In production use maintained OTP and WebAuthn server libraries.";

  /* auth-u7-1's solution, handed to the next lesson. */
  var OTP_LIB = L(
    "// ---- from auth-u7-1: HOTP and TOTP ----",
    "function hotp(secret, counter, digits) {",
    "  digits = digits || 6;",
    "  const msg = new Uint8Array(8);",
    "  let c = counter;",
    "  for (let i = 7; i >= 0; i--) { msg[i] = c % 256; c = Math.floor(c / 256); }",
    "  const mac = hmac(\"sha1\", secret, msg);",
    "  const offset = mac[19] & 0x0f;",
    "  const bin = ((mac[offset] & 0x7f) << 24) | (mac[offset + 1] << 16) | (mac[offset + 2] << 8) | mac[offset + 3];",
    "  return String(bin % Math.pow(10, digits)).padStart(digits, \"0\");",
    "}",
    "",
    "function totp(secret, unixSeconds, digits) {",
    "  return hotp(secret, Math.floor(unixSeconds / 30), digits);",
    "}",
    "");

  /* ---------- auth-u7-1 ---------- */
  function u1File(hotpBody, currentBody) {
    return L(
      NEVER_SHIP,
      "",
      "// RFC 6238's test secret. Real apps use 20 random bytes, shown to the user as base32 in a QR code.",
      "const SECRET = \"12345678901234567890\";",
      "",
      "// HOTP (RFC 4226): HMAC-SHA1 of an 8-byte big-endian counter, cut down to `digits` digits.",
      "function hotp(secret, counter, digits) {",
      hotpBody,
      "}",
      "",
      "// TOTP (RFC 6238): HOTP where the counter is the number of 30-second steps since 1970.",
      "function totp(secret, unixSeconds, digits) {",
      "  return hotp(secret, Math.floor(unixSeconds / 30), digits);",
      "}",
      "",
      "// The code an authenticator app shows right now, by the course clock.",
      "function currentCode(secret) {",
      currentBody,
      "}",
      "",
      "console.log(hotp(SECRET, 0), totp(SECRET, 59, 8), currentCode(SECRET));",
      "");
  }

  /* ---------- auth-u7-2 ---------- */
  function u2File(verifyBody) {
    return L(
      NEVER_SHIP,
      OTP_LIB,
      "function currentCode(secret) {",
      "  return totp(secret, Math.floor(now() / 1000));",
      "}",
      "",
      "const users = new Map([",
      "  [\"ada\", { secret: \"12345678901234567890\", lastStep: -1 }],",
      "  [\"bo\", { secret: \"abcdefghijklmnopqrst\", lastStep: -1 }]",
      "]);",
      "const WINDOW = 1; // 30-second steps allowed either side of now: phone clocks drift",
      "",
      "// true only for a valid code this user hasn't already spent",
      "function verifyCode(userName, code) {",
      verifyBody,
      "}",
      "",
      "console.log(verifyCode(\"ada\", currentCode(\"12345678901234567890\")));",
      "");
  }

  /* ---------- auth-u7-3 ---------- */
  function u3File(requestBody, resetBody) {
    return L(
      NEVER_SHIP,
      "",
      "const RESET_TTL_MS = 15 * 60 * 1000;",
      "",
      "const accounts = new Map(); // email -> { userName, salt, hash }",
      "function setPassword(email, password) {",
      "  const account = accounts.get(email);",
      "  account.salt = randHex(16);",
      "  account.hash = slowHash(password, account.salt, 100);",
      "}",
      "function checkPassword(email, password) {",
      "  const account = accounts.get(email);",
      "  return !!account && slowHash(password, account.salt, 100) === account.hash;",
      "}",
      "accounts.set(\"ada@example.com\", { userName: \"ada\" });",
      "accounts.set(\"bo@example.com\", { userName: \"bo\" });",
      "setPassword(\"ada@example.com\", \"mainframe\");",
      "setPassword(\"bo@example.com\", \"hunter2\");",
      "",
      "const resetTokens = new Map(); // sha256(token) -> { email, expires, used }",
      "const outbox = [];             // the emails this server sent: { to, link }",
      "",
      "// POST /forgot-password",
      "function requestReset(email) {",
      requestBody,
      "}",
      "",
      "// POST /reset-password",
      "function resetPassword(token, newPassword) {",
      resetBody,
      "}",
      "",
      "console.log(requestReset(\"ada@example.com\"), requestReset(\"nobody@example.com\"));",
      "");
  }

  /* ---------- auth-u7-4 ---------- */
  function u4File(recoveryFns, assertionBody) {
    return L(
      NEVER_SHIP,
      "",
      "// ---- recovery codes ----",
      "const recoveryCodes = new Map(); // userName -> Set of sha256(code) not yet used",
      "",
      recoveryFns,
      "",
      "// ---- passkeys (WebAuthn) ----",
      "const RP_ID = \"app.example\";",
      "const ORIGIN = \"https://app.example\";",
      "const credentials = new Map([",
      "  [\"cred-ada-phone\", { userName: \"ada\", publicKey: \"pk-ada-phone\", signCount: 7 }]",
      "]);",
      "const challenges = new Map(); // userName -> the challenge issued for the sign-in in progress",
      "",
      "function issueChallenge(userName) {",
      "  const challenge = randHex(16);",
      "  challenges.set(userName, challenge);",
      "  return challenge;",
      "}",
      "",
      "// STAND-IN, the course's only one. Real WebAuthn checks an ECDSA or Ed25519 signature over",
      "// authenticatorData and a hash of clientDataJSON, using the credential's public key. This",
      "// fake covers the same inputs, so every other check in verifyAssertion is the real one.",
      "function verifySignature(publicKey, assertion) {",
      "  return assertion.signature === \"sig:\" + publicKey + \":\" + JSON.stringify(assertion.clientData) + \":\" + assertion.rpIdHash + \":\" + assertion.signCount;",
      "}",
      "",
      "// What a passkey sends back. The checks use it to play the authenticator.",
      "function authenticatorGet(publicKey, clientData, rpId, signCount) {",
      "  const rpIdHash = sha256(rpId);",
      "  return {",
      "    clientData: clientData, rpIdHash: rpIdHash, signCount: signCount,",
      "    signature: \"sig:\" + publicKey + \":\" + JSON.stringify(clientData) + \":\" + rpIdHash + \":\" + signCount",
      "  };",
      "}",
      "",
      "// true if this assertion signs ada (or whoever) in with this credential",
      "function verifyAssertion(userName, credentialId, assertion) {",
      assertionBody,
      "}",
      "",
      "const ch = issueChallenge(\"ada\");",
      "console.log(verifyAssertion(\"ada\", \"cred-ada-phone\", authenticatorGet(\"pk-ada-phone\", { type: \"webauthn.get\", challenge: ch, origin: ORIGIN }, RP_ID, 8)));",
      "");
  }

  window.CODELAB.addUnit("auth", {
    id: "auth-u7",
    title: "Second factors and recovery",
    icon: "🔑",
    blurb: "The factor after the password, and the way back in when everything's lost, which is where many real account takeovers happen. TOTP straight from the RFCs, drift and replay, password reset that reveals nothing, recovery codes, and the checks a passkey server runs.",
    cheat: [
      { h: "HOTP and TOTP", lang: "js", code: L(
        "const mac = hmac(\"sha1\", secret, counterAs8Bytes);    // 20 bytes",
        "const offset = mac[19] & 0x0f;",
        "const bin = ((mac[offset] & 0x7f) << 24) | (mac[offset + 1] << 16) | (mac[offset + 2] << 8) | mac[offset + 3];",
        "const code = String(bin % 1e6).padStart(6, \"0\");",
        "// TOTP: counter = Math.floor(unixSeconds / 30)"),
        note: "Build the 8 counter bytes with division, not shifts (shifts stop at 32 bits). Codes are strings: leading zeros matter." },
      { h: "A window, and no replays", lang: "js", code: L(
        "const step = Math.floor(now() / 1000 / 30);",
        "for (let s = step - 1; s <= step + 1; s++)",
        "  if (hotp(user.secret, s) === code && s > user.lastStep) { user.lastStep = s; return true; }",
        "return false;"),
        note: "One step either side tolerates a drifting phone clock. `lastStep` only moves forward, so a used code (or an older one) can't come back. Rate-limit attempts too: there are only a million codes." },
      { h: "Password reset", lang: "js", code: L(
        "if (account) {",
        "  const token = randHex(16);",
        "  resetTokens.set(sha256(token), { email, expires: now() + 15 * 60 * 1000, used: false });",
        "  sendEmail(email, token);",
        "}",
        "return SAME_RESPONSE_EITHER_WAY;"),
        note: "Never reveal whether an address has an account. The token is random, so one SHA-256 at rest is enough. Single use, short life, and end the account's other sessions afterwards." },
      { h: "What a passkey server checks", lang: "js", code: L(
        "clientData.type === \"webauthn.get\"",
        "clientData.challenge === the one issued (then forget it)",
        "clientData.origin === \"https://app.example\"",
        "rpIdHash === sha256(\"app.example\")",
        "verifySignature(publicKey, assertion)   // the real crypto, in a library",
        "signCount > stored (unless both are 0)  // then store it"),
        note: "The browser writes `origin` and the authenticator scopes the key to the site, which is why a lookalike domain gets nothing. A counter that fails to rise suggests a cloned key." }
    ],
    lessons: [

      {
        id: "auth-u7-1",
        title: "TOTP, straight from the RFC",
        kind: "js", chip: "AUTH", xp: 15, mins: 13,
        crypto: true, clock: 1700000000000,
        brief: "Your authenticator app and the server share one secret. Both compute the same six digits from that secret and the time: no network, no SMS. It's two RFCs stacked.\n\n**HOTP** (RFC 4226) turns a counter into a code:\n\n- Write the counter as 8 bytes, most significant first.\n- `hmac(\"sha1\", secret, those bytes)` gives 20 bytes.\n- **Dynamic truncation:** the low 4 bits of the last byte are an offset from 0 to 15. Take the 4 bytes starting there as one number, with the top bit cleared so it's positive.\n- That number modulo 10^digits, as a string padded with leading zeros, is the code.\n\n**TOTP** (RFC 6238) is HOTP with the counter set to the number of 30-second steps since 1970, `Math.floor(unixSeconds / 30)`. That part is already written. `hotp` and `currentCode` are yours.\n\nTwo traps. JavaScript's bitwise operators work on 32 bits, so a counter above 2^32 can't be split with shifts: use division by 256. And codes are strings, because `07081804` loses its zero as a number.\n\nThe secret is RFC 6238's test secret, so the checks can use the RFCs' own tables. A real app generates 20 random bytes and shows them once, as base32 inside a QR code.",
        steps: [
          { text: "RFC 4226's test vectors: `hotp(SECRET, 0)` through `hotp(SECRET, 9)` are `755224`, `287082`, and so on up to `520489`.",
            test: L(
              "T.expect(typeof hotp === 'function', 'Define hotp(secret, counter, digits).');",
              "var want = ['755224', '287082', '359152', '969429', '338314', '254676', '287922', '162583', '399871', '520489'];",
              "want.forEach(function (w, i) { T.eq(hotp(SECRET, i), w, 'hotp(SECRET, ' + i + '), from RFC 4226 Appendix D'); });") },
          { text: "Codes are strings with their leading zeros: RFC 6238's 8-digit rows, including `07081804`, and six digits by default.",
            test: L(
              "[[59, '94287082'], [1111111109, '07081804'], [1111111111, '14050471'], [1234567890, '89005924'], [2000000000, '69279037']].forEach(function (r) {",
              "  T.eq(totp(SECRET, r[0], 8), r[1], 'totp(SECRET, ' + r[0] + ', 8), from RFC 6238 Appendix B');",
              "});",
              "T.eq(totp(SECRET, 59), '287082', 'Six digits when digits is left out');") },
          { text: "Counters past 2^32 still work: `hotp(SECRET, 4294967297)` is `108930`, and RFC 6238's row for the year 2603 is `65353130`.",
            test: L(
              "T.eq(hotp(SECRET, 4294967296), '999456', 'Counter 2^32. Bitwise shifts only reach 32 bits, so build the 8 bytes with division');",
              "T.eq(hotp(SECRET, 4294967297), '108930', 'Counter 2^32 + 1');",
              "T.eq(totp(SECRET, 20000000000, 8), '65353130', 'RFC 6238 row for t = 20000000000');") },
          { text: "`currentCode` reads the course clock: `921300` now, still `921300` nine seconds later, and `732303` once the next 30-second step begins.",
            test: L(
              "T.expect(typeof currentCode === 'function', 'Define currentCode(secret).');",
              "T.eq(currentCode(SECRET), '921300', 'now() is ' + now() + ' milliseconds; TOTP counts 30-second steps of Unix SECONDS');",
              "T.advance(9000);",
              "T.eq(currentCode(SECRET), '921300', 'Nine seconds later it is still the same step');",
              "T.advance(1000);",
              "T.eq(currentCode(SECRET), '732303', 'A new 30-second step, a new code');") }
        ],
        files: [
          { name: "script.js", content: u1File(
            L("  digits = digits || 6;",
              "  // TODO: the counter as 8 bytes, most significant first (it can be bigger than 2^32)",
              "  // TODO: mac = hmac(\"sha1\", secret, those bytes): 20 bytes",
              "  // TODO: offset = low 4 bits of the last byte; read 4 bytes there as a number, top bit cleared",
              "  // TODO: that number modulo 10^digits, as a string padded with leading zeros",
              "  return \"\";"),
            L("  // TODO: now() is in milliseconds; TOTP wants whole seconds",
              "  return totp(secret, now());")) }
        ],
        hints: [
          "Fill the counter from the right: `const msg = new Uint8Array(8); let c = counter; for (let i = 7; i >= 0; i--) { msg[i] = c % 256; c = Math.floor(c / 256); }`.",
          "`const mac = hmac(\"sha1\", secret, msg); const offset = mac[19] & 0x0f;` then `const bin = ((mac[offset] & 0x7f) << 24) | (mac[offset + 1] << 16) | (mac[offset + 2] << 8) | mac[offset + 3];`.",
          "`return String(bin % Math.pow(10, digits)).padStart(digits, \"0\");`, and `currentCode` is `totp(secret, Math.floor(now() / 1000))`."
        ],
        solution: {
          "script.js": u1File(
            L("  digits = digits || 6;",
              "  const msg = new Uint8Array(8);",
              "  let c = counter;",
              "  for (let i = 7; i >= 0; i--) { msg[i] = c % 256; c = Math.floor(c / 256); } // division, not shifts",
              "  const mac = hmac(\"sha1\", secret, msg);",
              "  const offset = mac[19] & 0x0f;",
              "  const bin = ((mac[offset] & 0x7f) << 24) | (mac[offset + 1] << 16) | (mac[offset + 2] << 8) | mac[offset + 3];",
              "  return String(bin % Math.pow(10, digits)).padStart(digits, \"0\");"),
            "  return totp(secret, Math.floor(now() / 1000));")
        }
      },

      {
        id: "auth-u7-2",
        title: "Drift windows and replay",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        crypto: true, clock: 1700000000000,
        brief: "A phone's clock is rarely exactly right, and a person takes a few seconds to type the code. So servers accept a small **window**: the code for the current 30-second step, and for one step either side. RFC 6238 allows this and recommends keeping the window small. Two steps away is refused.\n\nA window has a cost: for up to 90 seconds, three codes are valid at once. It also leaves a gap: a code that just worked is still valid for the rest of its window. Someone looking over a shoulder, or a phishing proxy passing codes along, can use it again. So the server remembers the last step each user spent (`lastStep`) and only accepts a code for a **later** step. A code can't be reused, and an older code can't be used after a newer one.\n\nWrite `verifyCode(userName, code)`. Accept only a six-digit string that matches `hotp(user.secret, s)` for a step `s` within `WINDOW` of now and newer than `user.lastStep`. When one does, set `lastStep` to `s`. Everything else is `false`, and a failed attempt spends nothing.\n\nThere are only a million six-digit codes, and a window of three makes guessing three times easier, so a real server also rate-limits attempts the way Web Security's `sec-u6-4` limited logins. `hotp` and `totp` are the previous lesson's.",
        steps: [
          { text: "The code for now, one step behind and one step ahead are all accepted: a phone clock 30 seconds off still works.",
            test: L(
              "users.get('ada').lastStep = -1; users.get('bo').lastStep = -1;",
              "var code = function (u, offset) { return hotp(users.get(u).secret, Math.floor(now() / 1000 / 30) + offset); };",
              "T.expect(verifyCode('ada', code('ada', -1)) === true, 'The code for the previous 30-second step is inside the window: accept it');",
              "T.expect(verifyCode('ada', code('ada', 0)) === true, 'The code for the current step: accept it');",
              "T.expect(verifyCode('ada', code('ada', 1)) === true, 'The code for the next step (a phone clock running a little fast): accept it');") },
          { text: "Two steps away is refused either way, and so is anything that isn't a six-digit string. Wrong attempts don't spend the step.",
            test: L(
              "users.get('ada').lastStep = -1;",
              "var code = function (u, offset) { return hotp(users.get(u).secret, Math.floor(now() / 1000 / 30) + offset); };",
              "T.expect(verifyCode('ada', code('ada', -2)) === false, 'Two steps behind is outside the window');",
              "T.expect(verifyCode('ada', code('ada', 2)) === false, 'Two steps ahead is outside the window');",
              "['12345', '1234567', 'abcdef', '', null].forEach(function (junk) {",
              "  T.expect(verifyCode('ada', junk) === false, JSON.stringify(junk) + ' is not a six-digit code');",
              "});",
              "T.expect(verifyCode('ada', Number(code('ada', 0))) === false, 'A code arriving as a number is refused: codes are strings');",
              "T.expect(verifyCode('ada', code('ada', 0)) === true, 'After those failed attempts, the real code still works');") },
          { text: "Replay: a code that just worked is refused if it's sent again, in the same step or after the clock moves on.",
            test: L(
              "users.get('ada').lastStep = -1;",
              "var code = function (u, offset) { return hotp(users.get(u).secret, Math.floor(now() / 1000 / 30) + offset); };",
              "var c = code('ada', 0);",
              "T.expect(verifyCode('ada', c) === true, 'The first use of the current code is accepted');",
              "T.expect(verifyCode('ada', c) === false, 'The same code again: someone watched it being typed, or a phishing proxy relayed it. Remember the step it was for');",
              "T.advance(30000);",
              "T.expect(verifyCode('ada', c) === false, 'Thirty seconds later that code is one step behind, inside the window, and still spent');",
              "T.expect(verifyCode('ada', code('ada', 0)) === true, 'The code for the new step works');") },
          { text: "An older step can't be used after a newer one, users don't share state, and an unknown user is refused.",
            test: L(
              "users.get('ada').lastStep = -1; users.get('bo').lastStep = -1;",
              "var code = function (u, offset) { return hotp(users.get(u).secret, Math.floor(now() / 1000 / 30) + offset); };",
              "var ahead = code('ada', 1), current = code('ada', 0);",
              "T.expect(verifyCode('ada', ahead) === true, 'The next step code is accepted');",
              "T.expect(verifyCode('ada', current) === false, 'Once a later step has been used, an earlier one is spent too: lastStep only moves forward');",
              "T.expect(verifyCode('bo', code('bo', 0)) === true, 'bo has a separate secret and a separate lastStep');",
              "T.expect(verifyCode('eve', '123456') === false, 'No such user');") }
        ],
        files: [
          { name: "script.js", content: u2File(L(
            "  const user = users.get(userName);",
            "  if (!user) return false;",
            "  // TODO: accept the code for any step from now - WINDOW to now + WINDOW",
            "  // TODO: refuse a step that isn't newer than user.lastStep; remember the step that was used",
            "  return code === currentCode(user.secret);")) }
        ],
        hints: [
          "Refuse bad input first: `if (!user || !/^\\d{6}$/.test(String(code))) return false;`. The comparison with `hotp(...)` below, which returns a string, then rules out numbers.",
          "Work in steps: `const step = Math.floor(now() / 1000 / 30);` and loop `for (let s = step - WINDOW; s <= step + WINDOW; s++)`.",
          "Inside the loop: `if (hotp(user.secret, s) === code && s > user.lastStep) { user.lastStep = s; return true; }`. After it, `return false;`."
        ],
        solution: {
          "script.js": u2File(L(
            "  const user = users.get(userName);",
            "  if (!user || !/^\\d{6}$/.test(String(code))) return false;",
            "  const step = Math.floor(now() / 1000 / 30);",
            "  for (let s = step - WINDOW; s <= step + WINDOW; s++) {",
            "    if (hotp(user.secret, s) === code && s > user.lastStep) {",
            "      user.lastStep = s; // this step, and every earlier one, is spent",
            "      return true;",
            "    }",
            "  }",
            "  return false;"))
        }
      },

      {
        id: "auth-u7-3",
        title: "Password reset without revealing who has an account",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        crypto: true, clock: 1700000000000,
        brief: "Account recovery is where many real account takeovers happen, because it's a way in that skips the password on purpose. Three rules make it safe.\n\n- **Don't reveal who has an account.** \"No account with that email\" turns the reset form into a lookup service for attackers. Give every address the same response, byte for byte. A real server also makes both cases take the same time, for example by queueing the email instead of sending it inline.\n- **Treat the token like a password.** It's emailed as `randHex(16)`, 128 random bits, and stored as `sha256(token)`, so someone who reads the table can't use what's in it. One SHA-256 is right here even though Web Security's `sec-u6-3` insisted on a slow hash for passwords: a password is guessable, and 128 random bits aren't.\n- **Single use, short life.** A link works once, for 15 minutes. It sits in an inbox that may be forwarded, synced or shared.\n\n`setPassword` and `checkPassword` are given, and `outbox` records the emails the server sends. Fix `requestReset` and `resetPassword`. The same-response rule is `sec-u6-4`'s identical login failures, applied to a different form. In a real app a successful reset also ends the account's other sessions, which is Unit 1's `logout-all`.",
        steps: [
          { text: "The same answer for everyone: a known and an unknown address get byte-identical responses, and only the real account gets an email.",
            test: L(
              "outbox.length = 0; resetTokens.clear();",
              "var known = requestReset('ada@example.com');",
              "var unknown = requestReset('nobody@example.com');",
              "T.eq(known.status, 200, 'The reset request answers 200');",
              "T.eq(JSON.stringify(unknown), JSON.stringify(known), 'An address with no account must get a byte-identical response, or the form tells anyone which emails have accounts. Known: ' + JSON.stringify(known) + ' Unknown: ' + JSON.stringify(unknown));",
              "T.eq(outbox.length, 1, 'Only the real account gets an email');",
              "T.eq(outbox[0].to, 'ada@example.com', 'The email goes to ada');") },
          { text: "Store the hash: the emailed token is 32 hex characters, and `resetTokens` holds `sha256(token)`, never the token itself.",
            test: L(
              "outbox.length = 0; resetTokens.clear();",
              "requestReset('bo@example.com');",
              "T.expect(outbox.length === 1 && /token=/.test(outbox[0].link), 'requestReset should email a link ending in ?token=...');",
              "var token = outbox[0].link.split('token=')[1];",
              "T.expect(/^[0-9a-f]{32}$/.test(token), 'The token should be randHex(16): 32 hex characters — yours: ' + JSON.stringify(token));",
              "T.expect(!resetTokens.has(token), 'The raw token is a key in resetTokens, so anyone who reads the table can reset the password. Store sha256(token)');",
              "T.expect(resetTokens.has(sha256(token)), 'resetTokens should be keyed by sha256(token)');",
              "T.eq(resetTokens.get(sha256(token)).email, 'bo@example.com', 'The row remembers which account it resets');") },
          { text: "A token works once: the password changes, a second use is refused, and a made-up token is refused.",
            test: L(
              "outbox.length = 0; resetTokens.clear();",
              "requestReset('ada@example.com');",
              "var token = outbox[0].link.split('token=')[1];",
              "T.eq(resetPassword(token, 'new-pass-1'), { status: 200, body: { ok: true } }, 'A fresh token resets the password');",
              "T.expect(checkPassword('ada@example.com', 'new-pass-1'), 'The new password should now work');",
              "T.eq(resetPassword(token, 'attacker-pass'), { status: 400, body: { error: 'invalid or expired token' } }, 'A reset link is single-use: the same token again must be refused');",
              "T.expect(checkPassword('ada@example.com', 'new-pass-1'), 'And the password must not have changed a second time');",
              "T.eq(resetPassword('0123456789abcdef0123456789abcdef', 'x'), { status: 400, body: { error: 'invalid or expired token' } }, 'A token the server never issued is refused');") },
          { text: "Tokens expire after 15 minutes: 14 minutes after the email a link still works, and 16 minutes after, it doesn't.",
            test: L(
              "outbox.length = 0; resetTokens.clear();",
              "requestReset('bo@example.com');",
              "var early = outbox[0].link.split('token=')[1];",
              "T.advance(14 * 60 * 1000);",
              "T.eq(resetPassword(early, 'bo-new-1').status, 200, 'Fourteen minutes after it was sent, the link still works');",
              "requestReset('bo@example.com');",
              "var late = outbox[1].link.split('token=')[1];",
              "T.advance(16 * 60 * 1000);",
              "T.eq(resetPassword(late, 'bo-new-2'), { status: 400, body: { error: 'invalid or expired token' } }, 'Sixteen minutes after it was sent, the link has expired');",
              "T.expect(checkPassword('bo@example.com', 'bo-new-1'), 'bo keeps the password from the reset that worked');") }
        ],
        files: [
          { name: "script.js", content: u3File(
            L("  const account = accounts.get(email);",
              "  if (!account) return { status: 404, body: { error: \"No account with that email\" } };",
              "  const token = randHex(16);",
              "  resetTokens.set(token, { email: email }); // TODO: store sha256(token), an expiry and used: false",
              "  outbox.push({ to: email, link: \"https://app.example/reset?token=\" + token });",
              "  return { status: 200, body: { message: \"Reset link sent to \" + email } };"),
            L("  const row = resetTokens.get(token);",
              "  if (!row) return { status: 400, body: { error: \"invalid or expired token\" } };",
              "  // TODO: refuse a used or expired token, and mark this one used",
              "  setPassword(row.email, newPassword);",
              "  return { status: 200, body: { ok: true } };")) }
        ],
        hints: [
          "Only the email step depends on the account: `if (account) { ... }`, then one `return` after it with a message that works either way, such as \"If that address has an account, a reset link is on its way.\"",
          "Store the row by hash with its limits: `resetTokens.set(sha256(token), { email: email, expires: now() + RESET_TTL_MS, used: false });`.",
          "In `resetPassword`: `const row = resetTokens.get(sha256(String(token))); if (!row || row.used || now() >= row.expires) return { status: 400, ... };`, then `row.used = true;` before setting the password."
        ],
        solution: {
          "script.js": u3File(
            L("  const account = accounts.get(email);",
              "  if (account) {",
              "    const token = randHex(16);",
              "    resetTokens.set(sha256(token), { email: email, expires: now() + RESET_TTL_MS, used: false });",
              "    outbox.push({ to: email, link: \"https://app.example/reset?token=\" + token });",
              "  }",
              "  // One answer whether or not the address has an account.",
              "  return { status: 200, body: { message: \"If that address has an account, a reset link is on its way.\" } };"),
            L("  const row = resetTokens.get(sha256(String(token)));",
              "  if (!row || row.used || now() >= row.expires) return { status: 400, body: { error: \"invalid or expired token\" } };",
              "  row.used = true; // a link works once",
              "  setPassword(row.email, newPassword);",
              "  return { status: 200, body: { ok: true } };"))
        }
      },

      {
        id: "auth-u7-4",
        title: "Recovery codes, and what a passkey server checks",
        kind: "js", chip: "AUTH", xp: 15, mins: 16,
        crypto: true, clock: 1700000000000,
        brief: "Two ways back in when the phone with the authenticator app is gone.\n\n**Recovery codes.** Ten one-time codes, shown once when a second factor is set up, for the user to print or save. They're passwords in all but name, so store only `sha256` of each. They're random, so a fast hash is fine, as with the reset tokens in the previous lesson. Each works once. Trim and lowercase what's typed, because people copy codes off paper, and generating a new set retires the old one.\n\n**Passkeys** (WebAuthn) remove the shared secret altogether. The authenticator holds a private key, and signing in means signing a fresh challenge. The signature maths needs a real crypto library, so here it's `verifySignature`, **the course's one labelled stand-in**. Everything around it is what a real server checks, and it's where the phishing resistance comes from:\n\n- `clientData.type` is `webauthn.get`.\n- `clientData.challenge` is the one this server issued for this sign-in, and it's good for one attempt.\n- `clientData.origin` is exactly `https://app.example`. The browser writes that field, so a lookalike site can't fake it.\n- `rpIdHash` is `sha256(\"app.example\")`: the authenticator scoped the key to this site.\n- The credential belongs to the user signing in, and the signature verifies.\n- `signCount` went up since last time. If it didn't, two devices are using one key, and one of them is a clone. Authenticators that don't count send 0 every time, and that's allowed.\n\nAfter a successful sign-in, store the new `signCount`.\n\n*Use a vetted WebAuthn server library in production: this lesson is the checklist that library runs.*",
        steps: [
          { text: "`generateRecoveryCodes` returns ten different 10-hex-character codes and stores only their `sha256`.",
            test: L(
              "recoveryCodes.clear();",
              "var codes = generateRecoveryCodes('ada');",
              "T.expect(Array.isArray(codes) && codes.length === 10, 'generateRecoveryCodes should return an array of ten codes — got ' + JSON.stringify(codes));",
              "T.eq(new Set(codes).size, 10, 'Ten different codes');",
              "codes.forEach(function (c) { T.expect(/^[0-9a-f]{10}$/.test(c), 'Each code is randHex(5): 10 hex characters — got ' + JSON.stringify(c)); });",
              "var stored = recoveryCodes.get('ada');",
              "T.expect(!!stored && codes.every(function (c) { return !stored.has(c); }), 'The codes are stored as themselves, so a leaked table is a list of working codes. Store sha256(code)');",
              "T.expect(codes.every(function (c) { return stored.has(sha256(c)); }), 'recoveryCodes.get(\"ada\") should hold sha256 of every code');") },
          { text: "Each code works once, even typed in upper case with spaces around it. Using one leaves the others working, and a new set retires the old codes.",
            test: L(
              "recoveryCodes.clear();",
              "var codes = generateRecoveryCodes('ada');",
              "T.expect(useRecoveryCode('ada', ' ' + codes[0].toUpperCase() + ' ') === true, 'People type codes from paper: trim and lowercase before hashing');",
              "T.expect(useRecoveryCode('ada', codes[0]) === false, 'Single use: the same code again is refused');",
              "T.expect(useRecoveryCode('ada', codes[1]) === true, 'Using one code leaves the others working');",
              "T.expect(useRecoveryCode('bo', codes[2]) === false, 'Codes belong to one user');",
              "var fresh = generateRecoveryCodes('ada');",
              "T.expect(useRecoveryCode('ada', codes[2]) === false, 'Generating a new set retires every old code');",
              "T.expect(useRecoveryCode('ada', fresh[0]) === true, 'A code from the new set works');") },
          { text: "A passkey sign-in with the right challenge, origin and site hash and a higher counter is accepted. A reused challenge, a lookalike origin and a challenge the server never issued are refused.",
            test: L(
              "credentials.get('cred-ada-phone').signCount = 7; challenges.clear();",
              "var get = function (challenge, origin, rpId, count) { return authenticatorGet('pk-ada-phone', { type: 'webauthn.get', challenge: challenge, origin: origin }, rpId, count); };",
              "var ch = issueChallenge('ada');",
              "T.expect(verifyAssertion('ada', 'cred-ada-phone', get(ch, 'https://app.example', 'app.example', 8)) === true, 'A genuine sign-in is accepted');",
              "T.eq(credentials.get('cred-ada-phone').signCount, 8, 'Store the new signCount after a successful sign-in');",
              "T.expect(verifyAssertion('ada', 'cred-ada-phone', get(ch, 'https://app.example', 'app.example', 9)) === false, 'That challenge was already used: each one is good for one sign-in');",
              "var ch2 = issueChallenge('ada');",
              "T.expect(verifyAssertion('ada', 'cred-ada-phone', get(ch2, 'https://app-example.sign-in.example', 'app.example', 10)) === false, 'The browser reported a lookalike origin: refuse it');",
              "issueChallenge('ada');",
              "T.expect(verifyAssertion('ada', 'cred-ada-phone', get('ffffffffffffffffffffffffffffffff', 'https://app.example', 'app.example', 11)) === false, 'A challenge this server never issued is refused');") },
          { text: "A response scoped to another site, a counter that didn't go up (a cloned key), the wrong type and another user's credential are refused. Authenticators that always send 0 are fine.",
            test: L(
              "credentials.get('cred-ada-phone').signCount = 20; challenges.clear();",
              "var get = function (pk, user, type, rpId, count) { return authenticatorGet(pk, { type: type, challenge: issueChallenge(user), origin: 'https://app.example' }, rpId, count); };",
              "T.expect(verifyAssertion('ada', 'cred-ada-phone', get('pk-ada-phone', 'ada', 'webauthn.get', 'evil.example', 21)) === false, 'rpIdHash is for evil.example, not app.example');",
              "T.expect(verifyAssertion('ada', 'cred-ada-phone', get('pk-ada-phone', 'ada', 'webauthn.get', 'app.example', 20)) === false, 'signCount 20 is not above the stored 20: two devices are using this key, so one of them is a clone');",
              "T.expect(verifyAssertion('ada', 'cred-ada-phone', get('pk-ada-phone', 'ada', 'webauthn.create', 'app.example', 22)) === false, 'webauthn.create is a registration, not a sign-in');",
              "T.expect(verifyAssertion('bo', 'cred-ada-phone', get('pk-ada-phone', 'bo', 'webauthn.get', 'app.example', 23)) === false, 'cred-ada-phone belongs to ada');",
              "T.expect(verifyAssertion('ada', 'cred-ada-phone', get('pk-ada-phone', 'ada', 'webauthn.get', 'app.example', 24)) === true, 'A genuine sign-in still works');",
              "credentials.set('cred-bo-key', { userName: 'bo', publicKey: 'pk-bo-key', signCount: 0 });",
              "T.expect(verifyAssertion('bo', 'cred-bo-key', get('pk-bo-key', 'bo', 'webauthn.get', 'app.example', 0)) === true, 'An authenticator that does not count sends 0: allowed');",
              "T.expect(verifyAssertion('bo', 'cred-bo-key', get('pk-bo-key', 'bo', 'webauthn.get', 'app.example', 0)) === true, 'And 0 again next time');") }
        ],
        files: [
          { name: "script.js", content: u4File(
            L("function generateRecoveryCodes(userName) {",
              "  const codes = [];",
              "  for (let i = 0; i < 10; i++) codes.push(randHex(5));",
              "  recoveryCodes.set(userName, new Set(codes)); // TODO: store sha256 of each code, never the code",
              "  return codes;",
              "}",
              "",
              "function useRecoveryCode(userName, code) {",
              "  const codes = recoveryCodes.get(userName);",
              "  // TODO: tidy what was typed, compare by hash, and a code works only once",
              "  return !!codes && codes.has(code);",
              "}"),
            L("  const cred = credentials.get(credentialId);",
              "  // TODO: owner, type, challenge (used once), origin, rpIdHash, signCount — then store signCount",
              "  return !!cred && verifySignature(cred.publicKey, assertion);")) }
        ],
        hints: [
          "Keep the hashes in the Set: `const hashes = new Set(codes.map(c => sha256(c))); recoveryCodes.set(userName, hashes);`. To use one, `const h = sha256(String(code).trim().toLowerCase());`, and if the set has it, `delete` it and return `true`.",
          "In `verifyAssertion`, check the owner first (`cred.userName === userName`), then take the challenge and forget it straight away: `const expected = challenges.get(userName); challenges.delete(userName);`.",
          "Then refuse unless `cd.type === \"webauthn.get\"`, `cd.challenge === expected`, `cd.origin === ORIGIN`, `assertion.rpIdHash === sha256(RP_ID)` and the signature verifies. The counter rule is `if ((assertion.signCount !== 0 || cred.signCount !== 0) && !(assertion.signCount > cred.signCount)) return false;`, and after that store `cred.signCount = assertion.signCount`."
        ],
        solution: {
          "script.js": u4File(
            L("function generateRecoveryCodes(userName) {",
              "  const codes = [];",
              "  for (let i = 0; i < 10; i++) codes.push(randHex(5));",
              "  recoveryCodes.set(userName, new Set(codes.map(c => sha256(c)))); // replaces any older set",
              "  return codes; // shown once; the server keeps only the hashes",
              "}",
              "",
              "function useRecoveryCode(userName, code) {",
              "  const hashes = recoveryCodes.get(userName);",
              "  const h = sha256(String(code).trim().toLowerCase());",
              "  if (!hashes || !hashes.has(h)) return false;",
              "  hashes.delete(h); // single use",
              "  return true;",
              "}"),
            L("  const cred = credentials.get(credentialId);",
              "  if (!cred || cred.userName !== userName) return false;",
              "  const expected = challenges.get(userName);",
              "  challenges.delete(userName); // a challenge is good for one attempt",
              "  const cd = assertion.clientData || {};",
              "  if (cd.type !== \"webauthn.get\") return false;",
              "  if (!expected || cd.challenge !== expected) return false;",
              "  if (cd.origin !== ORIGIN) return false;",
              "  if (assertion.rpIdHash !== sha256(RP_ID)) return false;",
              "  if (!verifySignature(cred.publicKey, assertion)) return false;",
              "  if ((assertion.signCount !== 0 || cred.signCount !== 0) && !(assertion.signCount > cred.signCount)) return false;",
              "  cred.signCount = assertion.signCount;",
              "  return true;"))
        }
      },

      {
        id: "auth-quiz-7",
        title: "Unit 7 quiz: MFA & recovery",
        kind: "quiz", xp: 10,
        brief: "TOTP, drift and replay, password reset, recovery codes and passkeys. 80% to pass.",
        questions: [
          { q: "In HOTP's dynamic truncation, where does the offset come from?",
            choices: ["The first byte of the secret key, taken modulo 16", "The low 4 bits of the last byte of the HMAC", "The current counter value, taken modulo the HMAC's length", "A random number the server picks and sends with the code"],
            answer: 1, explain: "RFC 4226 takes the offset from the HMAC itself: `mac[19] & 0x0f`, a number from 0 to 15. The four bytes starting there, with the top bit cleared, become the number the code is cut from. Nothing extra is sent, which is why the phone and server always agree." },
          { q: "A server accepts TOTP codes for the current step and one step either side. What does that window cost?",
            choices: ["Nothing at all, since codes outside the current step can never be valid", "It needs the phone and the server to agree on the time to the second", "Codes have to be 8 digits long so that the extra steps stay safe", "Three codes are valid at once, which makes guessing three times easier"],
            answer: 3, explain: "A window exists precisely because clocks don't agree to the second. Accepting three steps means three of the million codes are valid at any moment, so a guesser's odds triple, and the fix is a rate limit on attempts rather than longer codes." },
          { q: "A TOTP code was accepted 10 seconds ago. The same code arrives again. What should happen?",
            choices: ["Refuse it: the step is spent once a code for it has been used", "Accept it, since it is still inside its 30-second step", "Accept it, but only if it comes from the same IP address as before", "Refuse it only when it comes from a different browser session"],
            answer: 0, explain: "A code seen twice may have been watched or relayed by a phishing proxy. Remembering the last step used, and accepting only later steps, stops replay regardless of network details, which an attacker in the middle can match anyway." },
          { q: "Why can a password-reset token be stored with a single `sha256`, when passwords need a slow hash?",
            choices: ["Reset tokens expire, and slow hashes can't be used for anything that expires", "SHA-256 is slower than a password hash when the input is only 32 characters", "The token is 128 random bits nobody can guess; passwords get guessed", "Reset tokens travel by email, which already encrypts them all the way"],
            answer: 2, explain: "A slow hash exists to make guessing expensive, and passwords are guessable because people choose them. A 128-bit random token can't be guessed however fast the hash is, so one SHA-256 is enough to make a leaked table useless. Email isn't reliably encrypted end to end." },
          { q: "A reset form replies \"No account with that email\" for unknown addresses. What's the problem?",
            choices: ["Users can't tell whether they mistyped their own address", "Anyone can use the form to find out which emails have accounts", "Unknown addresses should get a 404 status rather than a message", "The message should be sent by email instead of shown on the page"],
            answer: 1, explain: "Different answers for known and unknown addresses turn the form into an account lookup: a list of emails goes in, and a list of customers comes out, ready for phishing or password spraying. Every address should get the same response, and ideally the same timing." },
          { q: "A passkey assertion arrives with `signCount` 12, and the server has stored 15 for that credential. What does that suggest?",
            choices: ["The authenticator was reset, so the stored count should be set to 12", "The user signed in from a new device that keeps its own count", "It's a normal wrap-around, since counters restart after a while", "The key may be cloned: two devices are using one credential"],
            answer: 3, explain: "An authenticator that counts only goes up. A lower number means another copy of the key has been signing too, which is exactly what a cloned authenticator looks like, so the server refuses. A new device would have its own credential and its own count, and counters don't wrap in practice." }
        ]
      }
    ]
  });
})();
