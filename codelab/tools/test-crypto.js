/* Engine tests for runner.js's harnessCrypto and harnessClock — pure Node,
   no browser, well under a second.
   Usage:  node tools/test-crypto.js

   The Authentication course grades signatures, JWTs, PKCE and TOTP codes by
   comparing them with values computed by these primitives. A wrong byte in
   here would fail a correct learner, or pass a wrong one, with no way to
   tell from the lesson. So every primitive is checked two ways: against the
   published RFC vectors, and against Node's own crypto as an oracle over a
   few hundred random inputs that cross every padding boundary.

   The functions are extracted from runner.js's SOURCE and run in a fresh
   vm context, exactly as the sandbox runs their stringified form — so this
   tests the code that ships, not a copy of it. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const nodeCrypto = require("crypto");

const SRC = fs.readFileSync(path.join(__dirname, "..", "runner.js"), "utf8");

let passed = 0;
const failures = [];
function test(name, fn) {
  try { fn(); passed++; } catch (e) { failures.push(name + " — " + e.message); }
}
function eq(got, want, msg) {
  if (got !== want) throw new Error((msg ? msg + ": " : "") + "expected " + JSON.stringify(want) + ", got " + JSON.stringify(got));
}
function ok(cond, msg) { if (!cond) throw new Error(msg || "expected true"); }

/* Pull `function name(...) { ... }` out of runner.js by brace matching,
   skipping strings and comments so a brace inside either can't end it. */
function extract(name) {
  const start = SRC.indexOf("function " + name + "(");
  if (start === -1) throw new Error("runner.js has no function " + name);
  let depth = 0;
  for (let i = SRC.indexOf("{", start); i < SRC.length; i++) {
    const c = SRC[i], n = SRC[i + 1];
    if (c === "/" && n === "/") { i = SRC.indexOf("\n", i); continue; }
    if (c === "/" && n === "*") { i = SRC.indexOf("*/", i + 2) + 1; continue; }
    if (c === '"' || c === "'") {
      for (i++; SRC[i] !== c; i++) if (SRC[i] === "\\") i++;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}" && --depth === 0) return SRC.slice(start, i + 1);
  }
  throw new Error("unbalanced braces in " + name);
}

const G = { crypto: nodeCrypto.webcrypto };
G.self = G;
vm.createContext(G);
vm.runInContext("(" + extract("harnessCrypto") + ")();", G);

const nodeHex = (alg, data) => nodeCrypto.createHash(alg).update(Buffer.from(data)).digest("hex");
const nodeHmac = (alg, key, data) => nodeCrypto.createHmac(alg, Buffer.from(key)).update(Buffer.from(data)).digest("hex");
const hexOf = u8 => Buffer.from(u8).toString("hex");

/* ---------- the string API Web Security already ships ---------- */

test("sha256 of the empty string and 'abc' (FIPS 180-4)", () => {
  eq(G.sha256(""), "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
  eq(G.sha256("abc"), "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
});
test("sha256 across a block boundary (the 56-byte FIPS message)", () => {
  eq(G.sha256("abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq"),
    "248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1");
});
test("sha256 of a string is UTF-8 encoded, as it always was", () => {
  for (const s of ["héllo ✓", "日本語", "emoji 🔐 key", "mainframe"])
    eq(G.sha256(s), nodeHex("sha256", Buffer.from(s, "utf8")), JSON.stringify(s));
});
test("sha256 still stringifies non-strings", () => {
  eq(G.sha256(12345), nodeHex("sha256", Buffer.from("12345")));
});
test("slowHash is byte-identical to its original recipe (Web Security's stored hashes)", () => {
  let h = nodeHex("sha256", Buffer.from("salty:correct horse"));
  for (let i = 0; i < 25; i++) h = nodeHex("sha256", Buffer.from(h + ":salty"));
  eq(G.slowHash("correct horse", "salty", 25), h);
});
test("randHex(n) returns 2n hex chars, different each call", () => {
  const a = G.randHex(16), b = G.randHex(16);
  ok(/^[0-9a-f]{32}$/.test(a), "got " + a);
  ok(a !== b, "two salts collided");
});

/* ---------- bytes ---------- */

test("utf8 and hex round-trip", () => {
  eq(hexOf(G.utf8("hé")), "68c3a9");
  eq(G.hex([0, 15, 16, 255]), "000f10ff");
  eq(G.hex(G.utf8("héllo ✓")), Buffer.from("héllo ✓", "utf8").toString("hex"));
});
test("sha1 of 'abc' and the 56-byte message (FIPS 180-4)", () => {
  eq(G.hex(G.sha1Bytes("abc")), "a9993e364706816aba3e25717850c26c9cd0d89d");
  eq(G.hex(G.sha1Bytes("abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq")),
    "84983e441c3bd26ebaae4aa1f95129e5e54670f1");
});
test("digests come back as bytes of the right length", () => {
  const s = G.sha256Bytes("x"), s1 = G.sha1Bytes("x");
  eq(s.length, 32); eq(s1.length, 20);
  ok(typeof s[0] === "number" && s[0] >= 0 && s[0] <= 255, "not a byte array");
});
test("bytes above 0x7F are hashed raw, not re-encoded", () => {
  const raw = [0x00, 0x7f, 0x80, 0xc3, 0xff];
  eq(G.hex(G.sha256Bytes(raw)), nodeHex("sha256", raw));
  eq(G.hex(G.sha256Bytes(new Uint8Array(raw))), nodeHex("sha256", raw));
  eq(G.hex(G.sha1Bytes(raw)), nodeHex("sha1", raw));
});
test("a non-string, non-array input is refused with a message", () => {
  let threw = null;
  try { G.sha256Bytes({}); } catch (e) { threw = e.message; }
  ok(threw && /string or an array of bytes/.test(threw), "got " + threw);
});

/* A seeded PRNG so a failure reproduces. */
function rng(seed) {
  return () => { seed |= 0; seed = seed + 0x6d2b79f5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
function randomBytes(r, n) { return Array.from({ length: n }, () => Math.floor(r() * 256)); }

test("sha256Bytes and sha1Bytes match Node for every length 0..300", () => {
  const r = rng(2026);
  for (let n = 0; n <= 300; n++) {
    const b = randomBytes(r, n);
    eq(G.hex(G.sha256Bytes(b)), nodeHex("sha256", b), "sha256 length " + n);
    eq(G.hex(G.sha1Bytes(b)), nodeHex("sha1", b), "sha1 length " + n);
  }
});

/* ---------- HMAC ---------- */

test("HMAC-SHA256, RFC 4231 test case 2", () => {
  eq(G.hex(G.hmac("sha256", "Jefe", "what do ya want for nothing?")),
    "5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843");
});
test("HMAC-SHA256 with a key longer than the block is hashed first (RFC 4231 case 6)", () => {
  const key = new Array(131).fill(0xaa);
  const msg = "Test Using Larger Than Block-Size Key - Hash Key First";
  eq(G.hex(G.hmac("sha256", key, msg)), nodeHmac("sha256", key, msg));
});
test("HMAC-SHA1, RFC 2202 'Jefe' case", () => {
  eq(G.hex(G.hmac("sha1", "Jefe", "what do ya want for nothing?")),
    "effcdf6ae5eb2fa2d27416d5f184df9c259a7c79");
});
test("hmac matches Node over random keys and messages (both algorithms)", () => {
  const r = rng(4231);
  for (let i = 0; i < 150; i++) {
    const key = randomBytes(r, Math.floor(r() * 140));
    const msg = randomBytes(r, Math.floor(r() * 200));
    eq(G.hex(G.hmac("sha256", key, msg)), nodeHmac("sha256", key, msg), "sha256 case " + i);
    eq(G.hex(G.hmac("sha1", key, msg)), nodeHmac("sha1", key, msg), "sha1 case " + i);
  }
});
test("hmac refuses an unknown algorithm", () => {
  let threw = null;
  try { G.hmac("md5", "k", "m"); } catch (e) { threw = e.message; }
  ok(threw && /sha256/.test(threw), "got " + threw);
});

/* ---------- the vectors the Authentication course grades against ---------- */

const b64url = u8 => Buffer.from(u8).toString("base64url");
test("PKCE S256, RFC 7636 Appendix B", () => {
  eq(b64url(G.sha256Bytes("dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk")), "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM");
});

/* TOTP built only from hmac("sha1"), the way a learner will build it. */
function totp(secret, unix, digits) {
  let T = Math.floor(unix / 30);
  const ctr = new Array(8).fill(0);
  for (let i = 7; i >= 0; i--) { ctr[i] = T % 256; T = Math.floor(T / 256); }
  const h = G.hmac("sha1", secret, ctr);
  const o = h[19] & 15;
  const bin = ((h[o] & 127) << 24) | (h[o + 1] << 16) | (h[o + 2] << 8) | h[o + 3];
  return String(bin % Math.pow(10, digits)).padStart(digits, "0");
}
test("TOTP-SHA1, every RFC 6238 Appendix B row", () => {
  const rows = [[59, "94287082"], [1111111109, "07081804"], [1111111111, "14050471"],
    [1234567890, "89005924"], [2000000000, "69279037"], [20000000000, "65353130"]];
  for (const [t, code] of rows) eq(totp("12345678901234567890", t, 8), code, "t=" + t);
  eq(totp("12345678901234567890", 59, 6), "287082", "6-digit at t=59");
});
test("an HS256 JWT signature matches Node's", () => {
  const signingInput = b64url(Buffer.from('{"alg":"HS256","typ":"JWT"}')) + "." + b64url(Buffer.from('{"sub":"ada","exp":1700000000}'));
  eq(b64url(G.hmac("sha256", "s3cret-key-for-lessons", signingInput)), "fV-HwGz830YHmMilXlswsjAFDg8mJmcqKa4Znyv7ZzU");
});

/* ---------- timingSafeEqual ---------- */

test("timingSafeEqual: equal, one byte off, different lengths", () => {
  eq(G.timingSafeEqual("abc", "abc"), true);
  eq(G.timingSafeEqual("abc", "abd"), false);
  eq(G.timingSafeEqual("abc", "abcd"), false);
  eq(G.timingSafeEqual("abcd", "abc"), false);
  eq(G.timingSafeEqual("", ""), true);
  eq(G.timingSafeEqual([1, 2, 3], new Uint8Array([1, 2, 3])), true);
});
test("timingSafeEqual reads every byte whether the mismatch is first or last", () => {
  function counted(arr) {
    const log = { reads: 0 };
    const p = new Proxy(arr, { get(t, k) { if (/^\d+$/.test(String(k))) log.reads++; return t[k]; } });
    return { p, log };
  }
  const first = counted([9, 2, 3, 4, 5, 6, 7, 8]), last = counted([1, 2, 3, 4, 5, 6, 7, 9]);
  G.timingSafeEqual(first.p, [1, 2, 3, 4, 5, 6, 7, 8]);
  G.timingSafeEqual(last.p, [1, 2, 3, 4, 5, 6, 7, 8]);
  eq(first.log.reads, last.log.reads, "reads for a first-byte vs a last-byte mismatch");
});

/* ---------- harnessClock ---------- */

test("harnessClock: now() starts at the lesson's value and only T.advance moves it", () => {
  const C = { T: {} };
  C.self = C;
  vm.createContext(C);
  vm.runInContext("(" + extract("harnessClock") + ")(1700000000000);", C);
  eq(C.now(), 1700000000000);
  eq(C.now(), 1700000000000, "reading the clock must not move it");
  eq(C.T.advance(30 * 60 * 1000), 1700001800000);
  eq(C.now(), 1700001800000);
  let threw = null;
  try { C.T.advance(-1); } catch (e) { threw = e.message; }
  ok(threw && /non-negative/.test(threw), "a negative advance must throw, got " + threw);
});

console.log(`crypto: ${passed} passed, ${failures.length} failed`);
failures.forEach(f => console.log("  ✗ " + f));
process.exit(failures.length ? 1 : 0);
