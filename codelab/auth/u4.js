/* Authentication — Unit 4: Signing things */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* auth-u4-1's solution, handed to every later lesson in the unit. */
  var B64_LIB = L(
    "// ---- from auth-u4-1: base64url, both ways ----",
    "const B64URL = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\";",
    "",
    "function b64urlEncode(bytes) {",
    "  let out = \"\";",
    "  for (let i = 0; i < bytes.length; i += 3) {",
    "    const n = (bytes[i] << 16) | ((bytes[i + 1] || 0) << 8) | (bytes[i + 2] || 0);",
    "    const chars = Math.min(bytes.length - i, 3) + 1; // 1 byte -> 2 chars, 2 -> 3, 3 -> 4",
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
    "");

  var NEVER_SHIP = "// NEVER SHIP THIS: hand-built signing is for understanding. In production use your framework's signed cookies or a maintained library such as jose.";

  var SAFE_EQUAL = L(
    "// ---- from auth-u4-3: every byte read, whatever the first difference ----",
    "function safeEqual(a, b) {",
    "  if (a.length !== b.length) return false; // every HMAC-SHA256 is 32 bytes: length leaks nothing",
    "  let diff = 0;",
    "  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];",
    "  return diff === 0;",
    "}",
    "");

  /* Switch btoa/atob off around a u4-1 check, so the encoder is really built. */
  function noBtoa(body) {
    return L(
      "var G = typeof self !== 'undefined' ? self : window;",
      "var saved = [G.btoa, G.atob];",
      "G.btoa = G.atob = function () { throw new Error('btoa and atob are switched off for these checks: build base64url from the bits'); };",
      "try {",
      body,
      "} finally { G.btoa = saved[0]; G.atob = saved[1]; }");
  }

  var ADA = "eyJzdWIiOiJhZGEiLCJyb2xlIjoidXNlciJ9.2XH8urf0hWjEuIY6MBYBjy1MaknjwJl8lizyiUMyMtE";
  var FORGED = "eyJzdWIiOiJhZGEiLCJyb2xlIjoiYWRtaW4ifQ.2XH8urf0hWjEuIY6MBYBjy1MaknjwJl8lizyiUMyMtE";
  var OTHER_KEY = "eyJzdWIiOiJhZGEiLCJyb2xlIjoidXNlciJ9.JBBqZ7-MlGxXvXe0XmgBfmCJks9_ou5b27Bf_pgSo50";
  var OLD08 = "2026-08.eyJzdWIiOiJibyJ9.A1D34ujhw6nFns9hjvtCAPBRJP5sDBXwFL6yDhVBUes";
  var NEW09 = "2026-09.eyJzdWIiOiJhZGEifQ.bpxMFB4s2QnaFIvqoxmNJTpXQ0NcGKjY88tuHEugOI0";
  var MISLABELED = "2026-09.eyJzdWIiOiJhZGEifQ.6tZHuoMXwbZz7Wn3pxj6vT9TJ1ERHSHdoy4XPk-GL1c";

  /* ---------- auth-u4-1 ---------- */
  function u1File(encodeBody, decodeBody) {
    return L(
      "// NEVER SHIP THIS: in production use Node's built-in \"base64url\" encoding, or the jose library.",
      "const B64URL = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\";",
      "",
      "// Every 3 bytes (24 bits) become 4 characters of 6 bits each. No \"=\" padding.",
      "function b64urlEncode(bytes) {",
      encodeBody,
      "}",
      "",
      "// Back again: 6 bits per character, a byte out for every 8 bits in.",
      "function b64urlDecode(str) {",
      decodeBody,
      "}",
      "",
      "console.log(b64urlEncode(new TextEncoder().encode(\"foobar\")));",
      "");
  }

  /* ---------- auth-u4-2 ---------- */
  function u2File(body) {
    return L(
      NEVER_SHIP,
      B64_LIB,
      "const SECRET = \"s3cret-key-for-lessons\";",
      "",
      "// data -> \"<base64url(JSON)>.<base64url(HMAC-SHA256(SECRET, that first part))>\"",
      body,
      "",
      "const token = sign({ sub: \"ada\", role: \"user\" });",
      "console.log(token, verify(token));",
      "");
  }

  /* ---------- auth-u4-3 ---------- */
  function u3File(safeEqualFn, verifyFn) {
    return L(
      NEVER_SHIP,
      B64_LIB,
      "const SECRET = \"s3cret-key-for-lessons\";",
      "",
      "function sign(data) {",
      "  const payload = b64urlEncode(toBytes(JSON.stringify(data)));",
      "  return payload + \".\" + b64urlEncode(hmac(\"sha256\", SECRET, payload));",
      "}",
      "",
      safeEqualFn,
      "",
      verifyFn,
      "",
      "const token = sign({ sub: \"ada\", role: \"user\" });",
      "console.log(token, verify(token));",
      "");
  }

  /* ---------- auth-u4-4 ---------- */
  function u4File(verifyFn, rotateFns) {
    return L(
      NEVER_SHIP,
      B64_LIB,
      SAFE_EQUAL,
      "const KEYS = {",
      "  \"2026-08\": \"august-key-retired-soon\",",
      "  \"2026-09\": \"september-key-current\"",
      "};",
      "let currentKid = \"2026-09\";",
      "",
      "// \"<kid>.<payload>.<sig>\", where sig = HMAC-SHA256(KEYS[kid], \"<kid>.<payload>\")",
      "function sign(data) {",
      "  const signed = currentKid + \".\" + b64urlEncode(toBytes(JSON.stringify(data)));",
      "  return signed + \".\" + b64urlEncode(hmac(\"sha256\", KEYS[currentKid], signed));",
      "}",
      "",
      verifyFn,
      "",
      rotateFns,
      "",
      "console.log(verify(sign({ sub: \"ada\" })));",
      "");
  }

  window.CODELAB.addUnit("auth", {
    id: "auth-u4",
    title: "Signing things",
    icon: "✍️",
    blurb: "Before JWTs: a signature is how a server trusts data it handed out. base64url from the bits, HMAC over a payload, comparing without leaking time, and rotating the key without logging everyone out.",
    cheat: [
      { h: "base64url", lang: "js", code: L(
        "// 3 bytes = 24 bits -> four 6-bit numbers -> four characters",
        "// 1 byte left -> 2 chars, 2 bytes left -> 3 chars, no \"=\" padding",
        "b64urlEncode(toBytes(\"foo\"))   // \"Zm9v\"",
        "b64urlEncode([0xfb, 0xff])      // \"-_8\"   (base64 would say \"+/8=\")"),
        note: "`-` and `_` replace `+` and `/` so tokens sit in URLs and cookies untouched. It's an encoding, not encryption: anyone can decode it." },
      { h: "Sign and verify with HMAC", lang: "js", code: L(
        "const payload = b64urlEncode(toBytes(JSON.stringify(data)));",
        "const token = payload + \".\" + b64urlEncode(hmac(\"sha256\", SECRET, payload));",
        "// verify: split, recompute over parts[0], compare, THEN decode + parse",
        "// anything wrong -> null, never an exception"),
        note: "The HMAC covers the encoded text exactly as it appears in the token. Signing proves who made the data, not who may read it." },
      { h: "Compare in constant time", lang: "js", code: L(
        "function safeEqual(a, b) {",
        "  if (a.length !== b.length) return false;",
        "  let diff = 0;",
        "  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];",
        "  return diff === 0;",
        "}"),
        note: "`===` stops at the first difference, and that time difference leaks the right signature byte by byte. In Node, call `crypto.timingSafeEqual`." },
      { h: "Rotate keys with a kid", lang: "js", code: L(
        "const [kid, payload, sig] = token.split(\".\");",
        "if (!Object.prototype.hasOwnProperty.call(KEYS, kid)) return null; // no hunting",
        "const expected = hmac(\"sha256\", KEYS[kid], kid + \".\" + payload);",
        "// rotate: add key -> sign with it -> wait out old tokens -> retire old key"),
        note: "The kid is inside the signed text, so it can't be swapped. Never try every key, and never fall back to the current one." }
    ],
    lessons: [

      {
        id: "auth-u4-1",
        title: "base64url, both ways",
        kind: "js", chip: "AUTH", xp: 15, mins: 12,
        brief: "*This unit builds encodings and signatures by hand so the rules stop being magic. Never ship them: in Node, `Buffer.from(bytes).toString(\"base64url\")` or the `jose` library does this.*\n\nEvery signed token you'll meet (a signed cookie, a JWT, an OAuth `state`) is bytes written as text. The encoding is **base64url**: RFC 4648's base64 with two characters swapped so the result can sit in a URL or a cookie untouched. `+` becomes `-`, `/` becomes `_`, and the `=` padding is dropped.\n\nThe arithmetic is small. Take the bytes three at a time: 3 × 8 = 24 bits. Cut those 24 bits into four 6-bit numbers, and each number (0–63) picks one character from `B64URL`. A final group of 1 byte writes 2 characters, and a final group of 2 bytes writes 3. That's why `f` is `Zg`, `fo` is `Zm8` and `foo` is `Zm9v`.\n\nDecoding runs it backwards: each character is 6 bits, and every 8 bits collected make a byte. Return a `Uint8Array`. A length that leaves 1 stray character (`length % 4 === 1`) can't be valid, and nor can any character outside the alphabet, `=` included, so throw.\n\nThe checks switch off `btoa` and `atob`. They work on \"binary strings\" rather than bytes and throw on text like `✓`, which is the trap this lesson steps around. `new TextEncoder().encode(text)` gives you bytes.\n\nHold onto one fact for the rest of the unit: base64url is an **encoding**, not encryption. Anyone can decode it.",
        steps: [
          { text: "RFC 4648's test strings encode without padding: `f` → `Zg`, `fo` → `Zm8`, `foo` → `Zm9v`, up to `foobar` → `Zm9vYmFy`.",
            test: noBtoa(L(
              "T.expect(typeof b64urlEncode === 'function', 'Define b64urlEncode(bytes).');",
              "var want = { '': '', f: 'Zg', fo: 'Zm8', foo: 'Zm9v', foob: 'Zm9vYg', fooba: 'Zm9vYmE', foobar: 'Zm9vYmFy' };",
              "Object.keys(want).forEach(function (s) {",
              "  var got = b64urlEncode(new TextEncoder().encode(s));",
              "  T.eq(got, want[s], 'b64urlEncode of the bytes of ' + JSON.stringify(s) + ' (' + s.length + ' bytes, so ' + want[s].length + ' characters)');",
              "});")) },
          { text: "Bytes that standard base64 writes with `+` and `/` come out as `-` and `_`, and UTF-8 text like `héllo ✓` encodes as its bytes.",
            test: noBtoa(L(
              "T.eq(b64urlEncode(new Uint8Array([0xfb, 0xff])), '-_8', 'Standard base64 writes these two bytes as +/8= ; base64url is -_8');",
              "T.eq(b64urlEncode(new Uint8Array([0xff, 0xff, 0xff])), '____', 'Three 0xff bytes are four 63s, the last character of the alphabet');",
              "T.eq(b64urlEncode(new Uint8Array([0xfb, 0xef, 0xbe])), '----', 'Every 6-bit group here is 62, which base64url writes as -');",
              "T.eq(b64urlEncode(new TextEncoder().encode('h\\u00e9llo \\u2713')), 'aMOpbGxvIOKckw', 'The UTF-8 bytes of héllo ✓ (10 bytes) encode to aMOpbGxvIOKckw');")) },
          { text: "Decode goes back to bytes: `Zm9vYmFy` is `foobar`, a JWT header reads as JSON, and every length from 0 to 20 bytes survives a round trip.",
            test: noBtoa(L(
              "T.expect(typeof b64urlDecode === 'function', 'Define b64urlDecode(str).');",
              "var out = b64urlDecode('Zm9vYmFy');",
              "T.expect(out instanceof Uint8Array, 'b64urlDecode should return a Uint8Array — got ' + Object.prototype.toString.call(out));",
              "T.eq(Array.from(out), [102, 111, 111, 98, 97, 114], 'Zm9vYmFy decodes to the bytes of foobar');",
              "T.eq(new TextDecoder().decode(b64urlDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')), '{\"alg\":\"HS256\",\"typ\":\"JWT\"}', 'Every JWT starts with this: a header anyone can read');",
              "for (var n = 0; n <= 20; n++) {",
              "  var src = [];",
              "  for (var i = 0; i < n; i++) src.push((i * 37 + 11) & 255);",
              "  var enc = b64urlEncode(new Uint8Array(src));",
              "  T.expect(/^[A-Za-z0-9_-]*$/.test(enc) && enc.length === Math.ceil(n * 4 / 3), n + ' bytes should encode to ' + Math.ceil(n * 4 / 3) + ' base64url characters — yours: ' + JSON.stringify(enc));",
              "  T.eq(Array.from(b64urlDecode(enc)), src, 'Round trip of ' + n + ' bytes');",
              "}")) },
          { text: "Refuse what isn't base64url: `+`, `/`, `=` padding, a space, and a length that leaves one stray character all throw.",
            test: noBtoa(L(
              "['Zm9v+', 'Zm9v/w', 'Zg==', 'Zm 9v', 'Zm9vY'].forEach(function (s) {",
              "  var threw = false;",
              "  try { b64urlDecode(s); } catch (e) { threw = true; }",
              "  T.expect(threw, 'b64urlDecode(' + JSON.stringify(s) + ') must throw: ' + (s.length % 4 === 1 ? 'a length with one stray character cannot come from any bytes' : 'that character is not in the base64url alphabet'));",
              "});")) }
        ],
        files: [
          { name: "script.js", content: u1File(
            L("  let out = \"\";",
              "  // TODO: take the bytes 3 at a time and join them into one 24-bit number;",
              "  // write 4 characters for a full group, 3 for 2 bytes, 2 for 1 byte",
              "  return out;"),
            L("  // TODO: throw for length % 4 === 1 or any character outside B64URL;",
              "  // collect 6 bits per character and emit a byte whenever 8 have built up",
              "  return new Uint8Array(0);")) }
        ],
        hints: [
          "Join a group into one number: `const n = (bytes[i] << 16) | ((bytes[i + 1] || 0) << 8) | (bytes[i + 2] || 0);`. The four 6-bit pieces are then `(n >> 18) & 63`, `(n >> 12) & 63`, `(n >> 6) & 63` and `n & 63`.",
          "A short last group writes one more character than it has bytes: `const chars = Math.min(bytes.length - i, 3) + 1;`, then loop `j` from 0 to `chars` and write `B64URL[(n >> (18 - 6 * j)) & 63]`.",
          "To decode, allocate `new Uint8Array(Math.floor(str.length * 3 / 4))`. For each character, `v = B64URL.indexOf(c)` (throw on -1), then `n = ((n << 6) | v) & 0xffffff; bits += 6;`, and when `bits >= 8`, `bits -= 8` and write `(n >> bits) & 255`."
        ],
        solution: {
          "script.js": u1File(
            L("  let out = \"\";",
              "  for (let i = 0; i < bytes.length; i += 3) {",
              "    const n = (bytes[i] << 16) | ((bytes[i + 1] || 0) << 8) | (bytes[i + 2] || 0);",
              "    const chars = Math.min(bytes.length - i, 3) + 1; // 1 byte -> 2 chars, 2 -> 3, 3 -> 4",
              "    for (let j = 0; j < chars; j++) out += B64URL[(n >> (18 - 6 * j)) & 63];",
              "  }",
              "  return out;"),
            L("  if (typeof str !== \"string\" || str.length % 4 === 1) throw new Error(\"not base64url: \" + JSON.stringify(str));",
              "  const out = new Uint8Array(Math.floor(str.length * 3 / 4));",
              "  let n = 0, bits = 0, o = 0;",
              "  for (let i = 0; i < str.length; i++) {",
              "    const v = B64URL.indexOf(str[i]);",
              "    if (v === -1) throw new Error(\"not base64url: \" + JSON.stringify(str));",
              "    n = ((n << 6) | v) & 0xffffff;",
              "    bits += 6;",
              "    if (bits >= 8) { bits -= 8; out[o++] = (n >> bits) & 255; }",
              "  }",
              "  return out;"))
        }
      },

      {
        id: "auth-u4-2",
        title: "HMAC: a signature only the server can make",
        kind: "js", chip: "AUTH", xp: 15, mins: 13,
        crypto: true,
        brief: "A server hands out data and needs to trust it when it comes back, without storing a copy. A **signature** makes that work. `hmac(\"sha256\", key, message)` returns 32 bytes that only someone holding `key` can compute, and changing one character of the message changes those bytes completely.\n\nThe token format is the one JWTs use, minus the header that Unit 5 adds: `base64url(JSON)`, a dot, then `base64url(HMAC-SHA256(SECRET, that first part))`. The HMAC covers the *encoded* payload text, exactly as it appears in the token.\n\nWrite `sign(data)`, then `verify(token)`. Split on the dot, recompute the signature over the first part, and return the decoded data only if it matches. Everything else returns `null`: a changed payload, a different key, a token that isn't two parts, a payload that won't decode or won't parse. `verify` never throws, because a token is attacker input and an uncaught exception is a 500 they can probe.\n\nCheck the signature **before** you parse the payload. Until it matches, the payload is just text someone typed.\n\nThe payload is still readable by anyone. Signing proves *who made it*, not *who may read it*, so never put a secret in it. `b64urlEncode`, `b64urlDecode`, `toBytes` and `fromBytes` are the previous lesson's.",
        steps: [
          { text: "Warm up with RFC 4231's vector, then sign: `sign({ sub: \"ada\", role: \"user\" })` is exactly the token in this checkpoint.",
            test: L(
              "T.eq(b64urlEncode(hmac('sha256', 'Jefe', 'what do ya want for nothing?')), 'W9zBRr9gdU5qBCQmCJV1x1oAPwidJzmDnexYuWTsOEM', 'RFC 4231 test case 2, in base64url');",
              "T.expect(typeof sign === 'function', 'Define sign(data).');",
              "T.eq(sign({ sub: 'ada', role: 'user' }), '" + ADA + "', 'sign() should return base64url(JSON) + \".\" + base64url(HMAC-SHA256(SECRET, that first part))');") },
          { text: "`verify` hands back the data from any token `sign` made.",
            test: L(
              "T.expect(typeof verify === 'function', 'Define verify(token).');",
              "T.eq(verify('" + ADA + "'), { sub: 'ada', role: 'user' }, 'The token from the first checkpoint verifies to its data');",
              "T.eq(verify(sign({ sub: 'bo', role: 'user', n: [1, 2] })), { sub: 'bo', role: 'user', n: [1, 2] }, 'Whatever sign() makes, verify() gives back');") },
          { text: "The forgery: change `role` to `admin` and keep the signature, and `verify` says `null`. A signature from another key or with one character changed is `null` too.",
            test: L(
              "var forged = verify('" + FORGED + "');",
              "T.eq(forged, null, 'Someone edited the payload to role admin and kept the old signature. Your verify returned ' + JSON.stringify(forged) + ': recompute the HMAC and compare');",
              "T.eq(verify('" + OTHER_KEY + "'), null, 'A token signed with a different key must not verify');",
              "var bent = '" + ADA + "'.replace('.2', '.3');",
              "T.eq(verify(bent), null, 'One changed character in the signature → null');") },
          { text: "Malformed tokens are refused, never thrown on: no dot, three parts, a payload that isn't base64url, and a correctly signed payload that isn't JSON.",
            test: L(
              "var macOf = function (p) { return b64urlEncode(hmac('sha256', SECRET, p)); };",
              "['', 'no-dot-here', 'a.b.c', 'e30+.' + macOf('e30+'), 'bm90IGpzb24.' + macOf('bm90IGpzb24')].forEach(function (t) {",
              "  var r;",
              "  try { r = verify(t); } catch (e) { T.expect(false, 'verify(' + JSON.stringify(t) + ') threw \"' + e.message + '\". A bad token is null, never an exception'); }",
              "  T.eq(r, null, 'verify(' + JSON.stringify(t) + ')');",
              "});") }
        ],
        files: [
          { name: "script.js", content: u2File(L(
            "function sign(data) {",
            "  const payload = b64urlEncode(toBytes(JSON.stringify(data)));",
            "  // TODO: add a dot and the base64url HMAC of the payload part",
            "  return payload;",
            "}",
            "",
            "// token -> the data, or null for anything that isn't a token this server signed",
            "function verify(token) {",
            "  const [payload] = String(token).split(\".\");",
            "  // TODO: recompute the signature and refuse anything that doesn't match",
            "  return JSON.parse(fromBytes(b64urlDecode(payload)));",
            "}")) }
        ],
        hints: [
          "One helper does both jobs: `function mac(text) { return b64urlEncode(hmac(\"sha256\", SECRET, text)); }`, and `sign` returns `payload + \".\" + mac(payload)`.",
          "In `verify`, `const parts = String(token).split(\".\"); if (parts.length !== 2) return null; if (mac(parts[0]) !== parts[1]) return null;`. The next lesson makes that comparison safe.",
          "Only after the signature matches: `try { return JSON.parse(fromBytes(b64urlDecode(parts[0]))); } catch (e) { return null; }`."
        ],
        solution: {
          "script.js": u2File(L(
            "function mac(text) {",
            "  return b64urlEncode(hmac(\"sha256\", SECRET, text));",
            "}",
            "",
            "function sign(data) {",
            "  const payload = b64urlEncode(toBytes(JSON.stringify(data)));",
            "  return payload + \".\" + mac(payload);",
            "}",
            "",
            "// token -> the data, or null for anything that isn't a token this server signed",
            "function verify(token) {",
            "  const parts = String(token).split(\".\");",
            "  if (parts.length !== 2) return null;",
            "  if (mac(parts[0]) !== parts[1]) return null; // signature first: the payload is untrusted text until then",
            "  try {",
            "    return JSON.parse(fromBytes(b64urlDecode(parts[0])));",
            "  } catch (e) {",
            "    return null;",
            "  }",
            "}"))
        }
      },

      {
        id: "auth-u4-3",
        title: "Compare in constant time",
        kind: "js", chip: "AUTH", xp: 15, mins: 12,
        crypto: true,
        brief: "`mac(payload) !== given` gets the right answer the wrong way. String and array comparisons stop at the first difference, so a signature that's wrong in byte 0 is rejected slightly faster than one that's wrong in byte 31. With enough requests an attacker can measure that difference and recover a valid signature one byte at a time, without ever knowing the key. That's a **timing attack**, and it has been demonstrated against real HMAC checks.\n\nThe fix is a comparison whose work doesn't depend on where the difference is. Walk every byte, OR the XOR of each pair into one number, and look at that number only at the end. Comparing lengths first is fine: every HMAC-SHA256 is 32 bytes, so the length gives nothing away.\n\nFix `safeEqual(a, b)`. Then make `verify` decode the signature it was given into bytes and compare those with `safeEqual`, never with `===`. A signature that won't decode is a `null`, not an exception.\n\nThe checks count byte reads with a `Proxy`, which stands in for time here. A JavaScript engine is free to optimise a loop in ways that leak anyway, so production code calls the platform's own version, such as Node's `crypto.timingSafeEqual`.",
        steps: [
          { text: "`safeEqual` still gives the right answers: equal arrays are `true`, and a difference anywhere or a different length is `false`.",
            test: L(
              "T.expect(typeof safeEqual === 'function', 'Keep function safeEqual(a, b).');",
              "T.expect(safeEqual([1, 2, 3], [1, 2, 3]) === true, 'Equal arrays → true');",
              "T.expect(safeEqual([1, 2, 3], [9, 2, 3]) === false, 'A difference in the first byte → false');",
              "T.expect(safeEqual([1, 2, 3], [1, 2, 9]) === false, 'A difference in the last byte → false');",
              "T.expect(safeEqual([1, 2, 3], [1, 2]) === false && safeEqual([1, 2], [1, 2, 3]) === false, 'Different lengths are never equal');",
              "T.expect(safeEqual(new Uint8Array([7, 7]), new Uint8Array([7, 7])) === true, 'It works on Uint8Array too');") },
          { text: "The timing test: a proxy counts every byte `safeEqual` reads. A difference at byte 0, a difference at byte 31 and a match must all cost the same number of reads.",
            test: L(
              "var reads = 0;",
              "var spy = function (arr) { return new Proxy(arr, { get: function (t, k) { if (typeof k === 'string' && /^[0-9]+$/.test(k)) reads++; return t[k]; } }); };",
              "var base = [];",
              "for (var i = 0; i < 32; i++) base.push((i * 53 + 7) & 255);",
              "var first = base.slice(); first[0] ^= 1;",
              "var last = base.slice(); last[31] ^= 1;",
              "var count = function (other) { reads = 0; var r = safeEqual(spy(base.slice()), spy(other)); return { r: r, reads: reads }; };",
              "var same = count(base.slice()), early = count(first), late = count(last);",
              "T.eq([same.r, early.r, late.r], [true, false, false], 'safeEqual must still be correct');",
              "T.expect(early.reads === late.reads && late.reads === same.reads, 'A mismatch at byte 0 cost ' + early.reads + ' reads, a mismatch at byte 31 cost ' + late.reads + ', a match cost ' + same.reads + '. That difference is the timing leak: read every byte, whatever you find');",
              "T.expect(same.reads >= 64, 'Compare all 32 bytes of both arrays — only ' + same.reads + ' byte reads happened');") },
          { text: "`verify` compares the signature with `safeEqual`: a checkpoint swaps in a spy, and a forged token has to go through it.",
            test: L(
              "var calls = 0;",
              "var realEq = safeEqual;",
              "var result = T.mutate('safeEqual', function (a, b) { calls++; return realEq(a, b); }, function () { return verify('" + FORGED + "'); });",
              "T.eq(result, null, 'The forged admin token must still be refused');",
              "T.expect(calls === 1, 'verify should compare the signature bytes with safeEqual exactly once. It was called ' + calls + ' times, so the comparison is still a === that stops at the first different character');") },
          { text: "Everything from the last lesson still holds: good tokens verify, while the admin forgery, another key, and malformed tokens (including a signature that isn't base64url) are `null`.",
            test: L(
              "T.eq(verify(sign({ sub: 'bo', role: 'user' })), { sub: 'bo', role: 'user' }, 'A token from sign() verifies');",
              "T.eq(verify('" + ADA + "'), { sub: 'ada', role: 'user' }, 'The known-good token verifies');",
              "T.eq(verify('" + OTHER_KEY + "'), null, 'A token signed with a different key → null');",
              "['a.b.c', 'no-dot', 'eyJzdWIiOiJhZGEiLCJyb2xlIjoidXNlciJ9.!!!', 'eyJzdWIiOiJhZGEiLCJyb2xlIjoidXNlciJ9.'].forEach(function (t) {",
              "  var r;",
              "  try { r = verify(t); } catch (e) { T.expect(false, 'verify(' + JSON.stringify(t) + ') threw \"' + e.message + '\". A bad token is null, never an exception'); }",
              "  T.eq(r, null, 'verify(' + JSON.stringify(t) + ')');",
              "});") }
        ],
        files: [
          { name: "script.js", content: u3File(
            L("// Compares two byte arrays. Right answer, wrong timing: it stops at the first difference.",
              "function safeEqual(a, b) {",
              "  if (a.length !== b.length) return false;",
              "  for (let i = 0; i < a.length; i++) {",
              "    if (a[i] !== b[i]) return false;",
              "  }",
              "  return true;",
              "}"),
            L("function verify(token) {",
              "  const parts = String(token).split(\".\");",
              "  if (parts.length !== 2) return null;",
              "  const expected = b64urlEncode(hmac(\"sha256\", SECRET, parts[0]));",
              "  if (expected !== parts[1]) return null; // TODO: decode parts[1] and compare BYTES with safeEqual",
              "  try {",
              "    return JSON.parse(fromBytes(b64urlDecode(parts[0])));",
              "  } catch (e) {",
              "    return null;",
              "  }",
              "}")) }
        ],
        hints: [
          "Don't return inside the loop. Accumulate instead: `let diff = 0; for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i]; return diff === 0;`. The length check before the loop can stay.",
          "In `verify`, decode what the client sent, and treat a decode failure as a bad token: `let given; try { given = b64urlDecode(parts[1]); } catch (e) { return null; }`.",
          "Then compare bytes with bytes: `if (!safeEqual(given, hmac(\"sha256\", SECRET, parts[0]))) return null;`. `hmac` already returns a Uint8Array, so there's no need to encode it."
        ],
        solution: {
          "script.js": u3File(
            L("// Every byte is read, whatever the first difference. Only the length can leak,",
              "// and every HMAC-SHA256 is 32 bytes.",
              "function safeEqual(a, b) {",
              "  if (a.length !== b.length) return false;",
              "  let diff = 0;",
              "  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];",
              "  return diff === 0;",
              "}"),
            L("function verify(token) {",
              "  const parts = String(token).split(\".\");",
              "  if (parts.length !== 2) return null;",
              "  let given;",
              "  try { given = b64urlDecode(parts[1]); } catch (e) { return null; }",
              "  if (!safeEqual(given, hmac(\"sha256\", SECRET, parts[0]))) return null;",
              "  try {",
              "    return JSON.parse(fromBytes(b64urlDecode(parts[0])));",
              "  } catch (e) {",
              "    return null;",
              "  }",
              "}"))
        }
      },

      {
        id: "auth-u4-4",
        title: "Rotate the key without logging everyone out",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        crypto: true,
        brief: "Every key has to change eventually: someone leaves, a log leaks, a policy says every 90 days. If `verify` knows only one key, changing it invalidates every token at once and logs out every user.\n\nThe fix is to give each key a name, a **key id** or `kid`, and write it into the token as `kid.payload.signature`. `sign` always uses the current key. `verify` reads the `kid` and checks the signature with **that key only**. The `kid` is part of the signed text, so nobody can relabel a token without breaking its signature.\n\nThe starter ignores the `kid` and tries every key until one matches. It feels forgiving, but it makes the label meaningless: a key you meant to retire still vouches for tokens that claim to be new, and every forged token costs the server one HMAC per key. Refuse an unknown `kid` on the spot, before any HMAC runs, and look it up with `hasOwnProperty`, because `KEYS[\"constructor\"]` exists on every object.\n\nThen write the rotation itself.\n\n- `rotateKey(kid, secret)` adds a key and makes it current. It throws if the `kid` already exists, because silently replacing a secret breaks every token it signed.\n- `retireKey(kid)` deletes a key, and throws for the key `sign` is using.\n\nThe safe order is: add the new key, sign with it, wait out the old tokens' lifetime, then retire the old key. `safeEqual` is the previous lesson's.",
        steps: [
          { text: "Tokens name their key. `sign` writes `2026-09.<payload>.<sig>`, a September token verifies, and an August token still does too.",
            test: L(
              "T.eq(sign({ sub: 'ada' }), '" + NEW09 + "', 'sign() writes the current kid, the payload, and an HMAC over both with the current key');",
              "T.eq(verify('" + NEW09 + "'), { sub: 'ada' }, 'A September token verifies');",
              "T.eq(verify('" + OLD08 + "'), { sub: 'bo' }, 'An August token still verifies: its key has not been retired yet');") },
          { text: "The label is honoured. A token that says `2026-09` but was signed with August's key is `null`, and an unknown `kid` is `null` without computing a single HMAC.",
            test: L(
              "var mis = verify('" + MISLABELED + "');",
              "T.eq(mis, null, 'This token says 2026-09 but was signed with the August key. Your verify returned ' + JSON.stringify(mis) + ': check the signature with the key the kid names, and only that key');",
              "var p = 'eyJzdWIiOiJhZGEifQ';",
              "var unknown = '2025-01.' + p + '.' + b64urlEncode(hmac('sha256', 'september-key-current', '2025-01.' + p));",
              "var calls = 0;",
              "var realH = hmac;",
              "var r = T.mutate('hmac', function (a, k, m) { calls++; return realH(a, k, m); }, function () { return verify(unknown); });",
              "T.eq(r, null, 'A kid with no key (2025-01) must be refused');",
              "T.eq(calls, 0, 'An unknown kid must be refused before any HMAC runs — yours computed ' + calls + '. Trying every key makes the label meaningless');",
              "var odd;",
              "try { odd = verify('constructor.' + p + '.' + b64urlEncode(hmac('sha256', 'x', 'constructor.' + p))); } catch (e) { T.expect(false, 'A kid of \"constructor\" made verify throw \"' + e.message + '\". Look kids up with hasOwnProperty'); }",
              "T.eq(odd, null, 'A kid of \"constructor\" names no key of yours');") },
          { text: "`rotateKey(kid, secret)` adds a key and makes it the one `sign` uses, and old tokens keep working. Rotating to a `kid` that already exists throws.",
            test: L(
              "T.expect(typeof rotateKey === 'function', 'Define rotateKey(kid, secret).');",
              "rotateKey('2026-10', 'october-key-new');",
              "var t = sign({ sub: 'ada' });",
              "T.expect(t.indexOf('2026-10.') === 0, 'After rotateKey, sign should use the new key, so tokens start \"2026-10.\" — yours: ' + t);",
              "T.eq(verify(t), { sub: 'ada' }, 'A token from the new key verifies');",
              "T.eq(verify('" + OLD08 + "'), { sub: 'bo' }, 'An August token still verifies: rotating adds a key, it does not remove one');",
              "var threw = false;",
              "try { rotateKey('2026-09', 'something-else'); } catch (e) { threw = true; }",
              "T.expect(threw, 'rotateKey with a kid that already exists must throw: silently replacing a secret breaks every token it signed');",
              "T.eq(verify('" + NEW09 + "'), { sub: 'ada' }, 'After that refused rotation, September tokens still verify');") },
          { text: "`retireKey(kid)` removes a key, so its tokens stop verifying. Retiring the key `sign` is using throws.",
            test: L(
              "T.expect(typeof retireKey === 'function', 'Define retireKey(kid).');",
              "retireKey('2026-08');",
              "T.eq(verify('" + OLD08 + "'), null, 'After retireKey(\"2026-08\"), August tokens must stop verifying');",
              "T.eq(verify('" + NEW09 + "'), { sub: 'ada' }, 'Retiring August leaves September alone');",
              "var current = sign({}).split('.')[0];",
              "var threw = false;",
              "try { retireKey(current); } catch (e) { threw = true; }",
              "T.expect(threw, 'Retiring the key sign() is using (' + current + ') must throw, or every new token would fail at once');",
              "T.eq(verify(sign({ sub: 'bo' })), { sub: 'bo' }, 'After that refusal, signing still works');") }
        ],
        files: [
          { name: "script.js", content: u4File(
            L("// Starter: ignores the kid and tries every key until one matches.",
              "function verify(token) {",
              "  const parts = String(token).split(\".\");",
              "  if (parts.length !== 3) return null;",
              "  let given;",
              "  try { given = b64urlDecode(parts[2]); } catch (e) { return null; }",
              "  const signed = parts[0] + \".\" + parts[1];",
              "  for (const kid in KEYS) {",
              "    if (safeEqual(given, hmac(\"sha256\", KEYS[kid], signed))) {",
              "      try { return JSON.parse(fromBytes(b64urlDecode(parts[1]))); } catch (e) { return null; }",
              "    }",
              "  }",
              "  return null;",
              "}"),
            L("function rotateKey(kid, secret) {",
              "  // TODO: throw if kid already exists; add the key; sign with it from now on",
              "}",
              "",
              "function retireKey(kid) {",
              "  // TODO: throw if kid is the key sign() uses; otherwise delete it",
              "}")) }
        ],
        hints: [
          "Refuse unknown kids first: `if (!Object.prototype.hasOwnProperty.call(KEYS, parts[0])) return null;`. Then there's one key to check: `KEYS[parts[0]]`, over `parts[0] + \".\" + parts[1]`.",
          "`rotateKey`: `if (Object.prototype.hasOwnProperty.call(KEYS, kid)) throw new Error(\"kid exists: \" + kid); KEYS[kid] = secret; currentKid = kid;`. `KEYS` is a const, but its contents can change.",
          "`retireKey`: `if (kid === currentKid) throw new Error(\"cannot retire the signing key\"); delete KEYS[kid];`."
        ],
        solution: {
          "script.js": u4File(
            L("function verify(token) {",
              "  const parts = String(token).split(\".\");",
              "  if (parts.length !== 3) return null;",
              "  const kid = parts[0];",
              "  if (!Object.prototype.hasOwnProperty.call(KEYS, kid)) return null; // unknown kid: refuse, don't go hunting",
              "  let given;",
              "  try { given = b64urlDecode(parts[2]); } catch (e) { return null; }",
              "  if (!safeEqual(given, hmac(\"sha256\", KEYS[kid], kid + \".\" + parts[1]))) return null;",
              "  try {",
              "    return JSON.parse(fromBytes(b64urlDecode(parts[1])));",
              "  } catch (e) {",
              "    return null;",
              "  }",
              "}"),
            L("function rotateKey(kid, secret) {",
              "  if (Object.prototype.hasOwnProperty.call(KEYS, kid)) throw new Error(\"kid already exists: \" + kid);",
              "  KEYS[kid] = secret;",
              "  currentKid = kid; // new tokens use it; old tokens still verify under their own kid",
              "}",
              "",
              "function retireKey(kid) {",
              "  if (kid === currentKid) throw new Error(\"cannot retire the key sign() is using: \" + kid);",
              "  delete KEYS[kid];",
              "}"))
        }
      },

      {
        id: "auth-quiz-4",
        title: "Unit 4 quiz: Signatures",
        kind: "quiz", xp: 10,
        brief: "base64url, HMAC signing, constant-time comparison and key rotation. 80% to pass.",
        questions: [
          { q: "Why do tokens use base64url rather than standard base64?",
            choices: ["base64url is shorter, because it packs 7 bits into each character", "Standard base64's `+`, `/` and `=` mean something in URLs and cookies", "base64url encrypts the bytes, so the payload can't be read in transit", "Standard base64 can't represent bytes above 0x7F without escaping"],
            answer: 1, explain: "Both alphabets carry 6 bits per character and both handle every byte value. The difference is the three characters: `+` can turn into a space in a query string, `/` is a path separator, and `=` separates names from values. base64url swaps in `-` and `_` and drops the padding. Neither one encrypts anything." },
          { q: "A signed token's payload is `eyJzdWIiOiJhZGEiLCJyb2xlIjoidXNlciJ9`. Who can read the `role` inside it?",
            choices: ["Only the server, because decoding the payload needs the signing key", "Nobody, until the signature has been verified first", "Only clients the server has shared its public key with", "Anyone holding the token: it's base64url, not encryption"],
            answer: 3, explain: "Decoding needs no key at all; that payload reads `{\"sub\":\"ada\",\"role\":\"user\"}`. A signature lets the server detect changes. It hides nothing, so a signed token must never carry a secret." },
          { q: "Why does the signature need a secret key, when a plain SHA-256 of the payload would also change if anyone edited it?",
            choices: ["Anyone can recompute a plain hash after editing; only the key holder can make the HMAC", "SHA-256 on its own is too slow to run on every request a server receives", "A plain hash collides for payloads that differ by only a single character", "HMAC output is shorter, so the finished token still fits under the 4 KB cookie size limit"],
            answer: 0, explain: "A hash detects accidental change, not deliberate change: an attacker who edits the payload just hashes the new payload too. An HMAC mixes in a key the attacker doesn't have, so they can't produce a matching value. HMAC-SHA256 is the same size as SHA-256 and runs SHA-256 twice." },
          { q: "This compares the expected signature bytes with the ones a client sent. What can an attacker learn from it?",
            code: "for (let i = 0; i < a.length; i++) {\n  if (a[i] !== b[i]) return false;\n}\nreturn true;",
            lang: "js",
            choices: ["Nothing, because both arrays always have the same length", "The secret key, by reading the loop's memory between calls", "How many leading bytes they got right, from how long it takes", "Which array came from the server, from the order of comparisons"],
            answer: 2, explain: "The loop returns as soon as it finds a difference, so a guess with more correct leading bytes takes longer to reject. Measured over many requests, that recovers a valid signature a byte at a time. Equal lengths don't help, because the leak is in where the loop stops. Accumulate the differences and check once at the end." },
          { q: "Tokens carry a `kid`. One arrives with a `kid` the server has no key for. What should `verify` do?",
            choices: ["Try each known key in turn and accept the first one that matches", "Fall back to the current signing key, since that's the likeliest", "Accept it as long as the payload is still well-formed JSON", "Refuse it without computing any HMAC at all"],
            answer: 3, explain: "An unknown `kid` can't be a token this server signed, so the answer is known before any work is done. Trying every key makes the label meaningless and costs one HMAC per key per forged token. Falling back to the current key is the same bug in a smaller form." },
          { q: "You're replacing a signing key. What's the safe order?",
            choices: ["Start signing with the new key, wait out the old tokens' lifetime, then remove the old key", "Remove the old key first, so no new token can be signed with it by mistake, then add the new one", "Replace the old key's secret in place under the same kid, so no token needs a new label", "Add the new key but keep signing with the old one until every client has been told"],
            answer: 0, explain: "Adding the new key and signing with it means new tokens are safe right away, while the old key keeps verifying tokens that are still in circulation. Once those have expired, removing the old key logs nobody out. Removing it first, or reusing its kid for a new secret, breaks every live token at once." }
        ]
      }
    ]
  });
})();
