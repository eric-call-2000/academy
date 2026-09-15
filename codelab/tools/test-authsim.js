/* The contract for authsim.js: every cookie, SameSite, Fetch Metadata and
   redirect rule the Authentication course's browser lessons rely on, as a
   case. Runs in ~1s as validate.js phase 0i.

   Rule sources: RFC 6265bis (storage, Domain, Path, Secure, expiry, prefixes,
   SameSite), MDN's Set-Cookie reference (including its invalid __Secure- and
   __Host- examples), the Fetch Metadata spec (Sec-Fetch-Site), and Chrome's
   documented Lax-by-default behaviour (the two-minute top-level POST window).
   A change to authsim.js that breaks one of these is a change to what the
   course teaches — fix the engine, not the test. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SRC = fs.readFileSync(path.join(__dirname, "..", "authsim.js"), "utf8");
const START = 1700000000000;

/* A fresh world: the simulator installed on its own global with a movable clock. */
function world() {
  let t = START;
  const g = { now: () => t, T: {} };
  const ctx = vm.createContext({ window: {}, Date, JSON, Math, Object, Array, String, Number, Error, encodeURIComponent, decodeURIComponent, isNaN, parseInt });
  vm.runInContext(SRC, ctx);
  ctx.window.CODELAB_AUTHSIM(g);
  g.advance = ms => { t += ms; };
  return g;
}
/* A site that sets whatever cookies its route table says and echoes back
   what it received. */
function echo(g, origin, routes) {
  g.site(origin, req => {
    const r = (routes || {})[req.method + " " + req.path] || (routes || {})[req.path] || {};
    return { status: r.status || 200, headers: Object.assign({}, r.headers || {}), body: { cookies: req.cookies, headers: req.headers } };
  });
}
const lastReq = g => { const r = g.T.requests(); return r[r.length - 1]; };

let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failed++; console.log("  ✗ " + name + "\n      " + (e && e.message)); }
}
function eq(got, want, msg) {
  const a = JSON.stringify(got), b = JSON.stringify(want);
  if (a !== b) throw new Error((msg ? msg + ": " : "") + "expected " + b + " but got " + a);
}
function ok(cond, msg) { if (!cond) throw new Error(msg || "expected true"); }
function throws(fn, re, msg) {
  try { fn(); } catch (e) { if (re && !re.test(e.message)) throw new Error((msg || "wrong error") + ": " + e.message); return; }
  throw new Error(msg || "expected an exception");
}
const setOn = (g, origin, lines, p) => {
  echo(g, origin, { [p || "/set"]: { headers: { "Set-Cookie": lines } } });
  g.visit(origin + (p || "/set"));
};

/* ---------- storage: Domain ---------- */
test("host-only cookie is not sent to a subdomain", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=abc; Secure; HttpOnly; Path=/");
  echo(g, "https://blog.app.example");
  g.visit("https://blog.app.example/");
  eq(lastReq(g).cookies, {}, "blog should get nothing");
  echo(g, "https://app.example");
  g.visit("https://app.example/");
  eq(lastReq(g).cookies, { sid: "abc" });
});
test("Domain cookie is sent to the parent and its subdomains", () => {
  const g = world();
  setOn(g, "https://app.example", "theme=dark; Domain=app.example; Path=/");
  echo(g, "https://blog.app.example");
  g.visit("https://blog.app.example/post");
  eq(lastReq(g).cookies, { theme: "dark" });
  eq(g.T.jar()[0].hostOnly, false);
  eq(g.T.jar()[0].domain, "app.example");
});
test("a leading dot in Domain is ignored", () => {
  const g = world();
  setOn(g, "https://app.example", "theme=dark; Domain=.app.example; Path=/");
  eq(g.T.jar()[0].domain, "app.example");
});
test("Domain that is not the host or a parent is rejected", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=abc; Domain=evil.example");
  eq(g.T.jar(), []);
  ok(/does not match the host/.test(g.T.rejected()[0].reason), g.T.rejected()[0].reason);
});
test("a subdomain may set a Domain cookie for its parent", () => {
  const g = world();
  setOn(g, "https://evil.app.example", "csrf=x; Domain=app.example; Path=/");
  eq(g.T.jar().length, 1);
  echo(g, "https://app.example");
  g.visit("https://app.example/");
  eq(lastReq(g).cookies, { csrf: "x" });
});
test("Domain set to a public suffix is rejected", () => {
  const g = world();
  setOn(g, "https://app.example", "x=1; Domain=example");
  ok(/public suffix/.test(g.T.rejected()[0].reason));
});

/* ---------- storage: Path ---------- */
test("default path is the request path's directory", () => {
  const g = world();
  setOn(g, "https://app.example", "a=1", "/docs/page");
  eq(g.T.jar()[0].path, "/docs");
  const g2 = world();
  setOn(g2, "https://app.example", "a=1", "/login");
  eq(g2.T.jar()[0].path, "/");
});
test("path-match: /docs matches /docs, /docs/ and /docs/Web but not /docsets", () => {
  const g = world();
  setOn(g, "https://app.example", "a=1; Path=/docs");
  echo(g, "https://app.example");
  for (const [p, sent] of [["/docs", true], ["/docs/", true], ["/docs/Web/HTTP", true], ["/docsets", false], ["/", false]]) {
    g.visit("https://app.example" + p);
    eq(Object.keys(lastReq(g).cookies).length, sent ? 1 : 0, p);
  }
});
test("longer paths are sent first; equal paths by creation time", () => {
  const g = world();
  echo(g, "https://app.example", {
    "/a": { headers: { "Set-Cookie": ["first=1; Path=/", "deep=1; Path=/docs", "second=1; Path=/"] } }
  });
  g.visit("https://app.example/a");
  g.visit("https://app.example/docs/x");
  eq(lastReq(g).headers.cookie, "deep=1; first=1; second=1");
});

/* ---------- storage: replacement ---------- */
test("same name, domain and path replaces; a different path adds", () => {
  const g = world();
  echo(g, "https://app.example", {
    "/one": { headers: { "Set-Cookie": "a=1; Path=/" } },
    "/two": { headers: { "Set-Cookie": ["a=2; Path=/", "a=3; Path=/x"] } }
  });
  g.visit("https://app.example/one");
  g.visit("https://app.example/two");
  eq(g.T.jar().map(c => c.value + c.path).sort(), ["2/", "3/x"]);
});
test("Set-Cookie may be an array, and the header name is case-insensitive", () => {
  const g = world();
  echo(g, "https://app.example", { "/s": { headers: { "set-cookie": ["a=1", "b=2"] } } });
  g.visit("https://app.example/s");
  eq(g.T.jar().map(c => c.name), ["a", "b"]);
});
test("a line with no name=value is rejected", () => {
  const g = world();
  setOn(g, "https://app.example", ["justtext", "=novalue"]);
  eq(g.T.jar(), []);
  eq(g.T.rejected().length, 2);
});

/* ---------- Secure and HttpOnly ---------- */
test("a Secure cookie cannot be set from http", () => {
  const g = world();
  setOn(g, "http://app.example", "sid=abc; Secure");
  eq(g.T.jar(), []);
  ok(/https/.test(g.T.rejected()[0].reason));
});
test("a Secure cookie is not sent over http", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=abc; Secure; Path=/");
  echo(g, "http://app.example");
  g.visit("http://app.example/");
  eq(lastReq(g).cookies, {});
});
test("HttpOnly cookies are sent but hidden from jsCookies", () => {
  const g = world();
  setOn(g, "https://app.example", ["sid=abc; HttpOnly; Path=/", "theme=dark; Path=/"]);
  eq(g.T.jsCookies("https://app.example/"), "theme=dark");
  echo(g, "https://app.example");
  g.visit("https://app.example/");
  eq(lastReq(g).cookies, { sid: "abc", theme: "dark" });
});

/* ---------- expiry ---------- */
test("Max-Age beats Expires: far-future Expires with Max-Age=0 is gone", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=abc; Path=/");
  echo(g, "https://app.example", { "/out": { headers: { "Set-Cookie": "sid=; Path=/; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Max-Age=0" } } });
  g.visit("https://app.example/out");
  eq(g.T.jar(), []);
});
test("Expires in the past deletes an existing cookie", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=abc; Path=/");
  echo(g, "https://app.example", { "/out": { headers: { "Set-Cookie": "sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT" } } });
  g.visit("https://app.example/out");
  eq(g.T.jar(), []);
});
test("Max-Age=60 is sent at 59 seconds and gone at 61", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=abc; Path=/; Max-Age=60");
  echo(g, "https://app.example");
  g.advance(59000);
  g.visit("https://app.example/");
  eq(lastReq(g).cookies, { sid: "abc" });
  g.advance(2000);
  g.visit("https://app.example/");
  eq(lastReq(g).cookies, {});
});
test("a deletion with a different Path leaves the cookie in place", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=abc; Path=/");
  echo(g, "https://app.example", { "/account/out": { headers: { "Set-Cookie": "sid=; Max-Age=0" } } });
  g.visit("https://app.example/account/out");
  eq(g.T.jar().map(c => c.name), ["sid"], "default path /account does not match Path=/");
});
test("an unparseable Max-Age is ignored, leaving Expires in charge", () => {
  const g = world();
  setOn(g, "https://app.example", "a=1; Path=/; Max-Age=soon; Expires=Fri, 31 Dec 9999 23:59:59 GMT");
  eq(g.T.jar().length, 1);
  ok(g.T.jar()[0].expires > START);
});

/* ---------- prefixes (MDN's examples) ---------- */
test("MDN invalid prefix examples are all rejected", () => {
  const g = world();
  setOn(g, "https://example.com", [
    "__Secure-UserId=1234",
    "__Host-SID=12345; Secure; Domain=example.com",
    "__Host-SID=12345; Domain=example.com; Path=/",
    "__Host-SID=12345; Secure; Domain=example.com; Path=/"
  ]);
  eq(g.T.jar(), []);
  eq(g.T.rejected().length, 4);
  ok(/__Secure-/.test(g.T.rejected()[0].reason));
  ok(g.T.rejected().slice(1).every(r => /__Host-/.test(r.reason)));
});
test("MDN valid prefix examples are accepted", () => {
  const g = world();
  setOn(g, "https://example.com", ["__Secure-ID=123; Secure; Domain=example.com", "__Host-ID=123; Secure; Path=/"]);
  eq(g.T.jar().map(c => c.name), ["__Secure-ID", "__Host-ID"]);
  eq(g.T.rejected(), []);
});
test("__Host- needs Path=/ exactly", () => {
  const g = world();
  setOn(g, "https://app.example", ["__Host-a=1; Secure; Path=/docs", "__Host-b=1; Secure"]);
  eq(g.T.jar(), []);
  ok(g.T.rejected().every(r => /Path=\//.test(r.reason)));
});
test("__Secure- from an http page is rejected even with Secure", () => {
  const g = world();
  setOn(g, "http://app.example", "__Secure-a=1; Secure");
  eq(g.T.jar(), []);
});

/* ---------- SameSite ---------- */
function sameSiteWorld(cookieLine) {
  const g = world();
  setOn(g, "https://bank.example", cookieLine);
  echo(g, "https://bank.example");
  echo(g, "https://evil.example");
  echo(g, "https://mail.example");
  echo(g, "https://www.bank.example");
  return g;
}
const sentAfter = (g, fn) => { fn(); return Object.keys(lastReq(g).cookies).length > 0; };
function matrix(g) {
  return {
    sameOriginPost: sentAfter(g, () => g.submitForm("https://bank.example/form", { action: "https://bank.example/transfer", fields: { to: "bo" } })),
    sameSitePost: sentAfter(g, () => g.submitForm("https://www.bank.example/", { action: "https://bank.example/transfer" })),
    crossSiteLink: sentAfter(g, () => g.click("https://mail.example/inbox", "https://bank.example/account")),
    crossSitePost: sentAfter(g, () => g.submitForm("https://evil.example/", { action: "https://bank.example/transfer", fields: { to: "eve" } })),
    crossSiteGetForm: sentAfter(g, () => g.submitForm("https://evil.example/", { method: "GET", action: "https://bank.example/search" })),
    crossSiteFetch: sentAfter(g, () => g.fetchFrom("https://evil.example/", "https://bank.example/api", { method: "POST", credentials: "include" }))
  };
}
test("SameSite=Strict: only same-site requests", () => {
  const g = sameSiteWorld("sid=1; Secure; Path=/; SameSite=Strict");
  eq(matrix(g), { sameOriginPost: true, sameSitePost: true, crossSiteLink: false, crossSitePost: false, crossSiteGetForm: false, crossSiteFetch: false });
});
test("SameSite=Lax: plus cross-site top-level GET navigations", () => {
  const g = sameSiteWorld("sid=1; Secure; Path=/; SameSite=Lax");
  eq(matrix(g), { sameOriginPost: true, sameSitePost: true, crossSiteLink: true, crossSitePost: false, crossSiteGetForm: true, crossSiteFetch: false });
});
test("SameSite=None; Secure: every request", () => {
  const g = sameSiteWorld("sid=1; Secure; Path=/; SameSite=None");
  eq(matrix(g), { sameOriginPost: true, sameSitePost: true, crossSiteLink: true, crossSitePost: true, crossSiteGetForm: true, crossSiteFetch: true });
});
test("SameSite=None without Secure is rejected", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=1; SameSite=None");
  eq(g.T.jar(), []);
  ok(/requires the Secure/.test(g.T.rejected()[0].reason));
});
test("an unknown SameSite value is treated as omitted", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=1; SameSite=Loose");
  eq(g.T.jar()[0].sameSite, "Default");
});
test("omitted SameSite: Lax, but a cross-site POST carries a cookie under two minutes old (Chrome)", () => {
  const g = sameSiteWorld("sid=1; Secure; Path=/");
  eq(g.T.jar()[0].sameSite, "Default");
  ok(sentAfter(g, () => g.submitForm("https://evil.example/", { action: "https://bank.example/transfer" })), "at 0s the POST carries it");
  g.advance(120 * 1000);
  ok(sentAfter(g, () => g.submitForm("https://evil.example/", { action: "https://bank.example/transfer" })), "at exactly 120s it still does");
  g.advance(1000);
  ok(!sentAfter(g, () => g.submitForm("https://evil.example/", { action: "https://bank.example/transfer" })), "at 121s it does not");
  ok(sentAfter(g, () => g.click("https://mail.example/", "https://bank.example/")), "a cross-site link still carries it (Lax)");
  ok(!sentAfter(g, () => g.fetchFrom("https://evil.example/", "https://bank.example/api", { method: "POST", credentials: "include" })), "a subresource never does");
});
test("replacing a default cookie keeps its creation time for the two-minute window", () => {
  const g = sameSiteWorld("sid=1; Secure; Path=/");
  g.advance(100 * 1000);
  echo(g, "https://bank.example", { "/again": { headers: { "Set-Cookie": "sid=2; Secure; Path=/" } } });
  g.visit("https://bank.example/again");
  g.advance(30 * 1000);
  ok(!sentAfter(g, () => g.submitForm("https://evil.example/", { action: "https://bank.example/transfer" })), "created 130s ago, even though replaced 30s ago");
});
test("same-site is schemeful: http to https is cross-site", () => {
  const g = sameSiteWorld("sid=1; Secure; Path=/; SameSite=Strict");
  echo(g, "http://bank.example");
  ok(!sentAfter(g, () => g.click("http://bank.example/", "https://bank.example/account")));
});

/* ---------- Fetch Metadata and Origin ---------- */
test("Sec-Fetch-Site: none, same-origin, same-site, cross-site", () => {
  const g = world();
  echo(g, "https://app.example");
  g.visit("https://app.example/");
  eq(lastReq(g).headers["sec-fetch-site"], "none", "address bar");
  g.click("https://app.example/a", "https://app.example/b");
  eq(lastReq(g).headers["sec-fetch-site"], "same-origin");
  g.click("https://blog.app.example/", "https://app.example/b");
  eq(lastReq(g).headers["sec-fetch-site"], "same-site");
  g.submitForm("https://evil.example/", { action: "https://app.example/x" });
  eq(lastReq(g).headers["sec-fetch-site"], "cross-site");
});
test("Sec-Fetch-Mode and Sec-Fetch-Dest", () => {
  const g = world();
  echo(g, "https://app.example");
  g.visit("https://app.example/");
  eq([lastReq(g).headers["sec-fetch-mode"], lastReq(g).headers["sec-fetch-dest"]], ["navigate", "document"]);
  g.fetchFrom("https://app.example/", "/api");
  eq([lastReq(g).headers["sec-fetch-mode"], lastReq(g).headers["sec-fetch-dest"]], ["cors", "empty"]);
});
test("Origin: on unsafe methods and cross-origin fetches, never on a plain navigation GET", () => {
  const g = world();
  echo(g, "https://app.example");
  g.visit("https://app.example/");
  eq(lastReq(g).headers.origin, undefined, "address bar GET");
  g.click("https://evil.example/", "https://app.example/");
  eq(lastReq(g).headers.origin, undefined, "cross-site link GET");
  g.submitForm("https://evil.example/", { action: "https://app.example/transfer" });
  eq(lastReq(g).headers.origin, "https://evil.example", "cross-site POST");
  g.submitForm("https://app.example/", { action: "/transfer" });
  eq(lastReq(g).headers.origin, "https://app.example", "same-origin POST");
  g.fetchFrom("https://evil.example/", "https://app.example/api");
  eq(lastReq(g).headers.origin, "https://evil.example", "cross-origin fetch GET");
  g.fetchFrom("https://app.example/", "https://app.example/api");
  eq(lastReq(g).headers.origin, undefined, "same-origin fetch GET");
});
test("form fields arrive as body; a GET form puts them in the query", () => {
  const g = world();
  echo(g, "https://app.example");
  g.submitForm("https://app.example/", { action: "/transfer", fields: { to: "bo", amount: "5" } });
  eq(g.T.requests().pop().method, "POST");
  let seen;
  g.site("https://app.example", req => { seen = req; return { status: 200 }; });
  g.submitForm("https://app.example/", { action: "/transfer", fields: { to: "bo", amount: "5" } });
  eq(seen.body, { to: "bo", amount: "5" });
  eq(seen.headers["content-type"], "application/x-www-form-urlencoded");
  g.submitForm("https://app.example/", { method: "get", action: "/search", fields: { q: "a b&c" } });
  eq([seen.method, seen.path, seen.query], ["GET", "/search", { q: "a b&c" }]);
});

/* ---------- redirects ---------- */
test("302 is followed, POST becomes GET, relative Location resolves", () => {
  const g = world();
  const seen = [];
  g.site("https://app.example", req => {
    seen.push(req.method + " " + req.path);
    if (req.path === "/login") return { status: 302, headers: { Location: "/home" } };
    return { status: 200, body: "home" };
  });
  const res = g.submitForm("https://app.example/", { action: "/login", fields: { u: "ada" } });
  eq(seen, ["POST /login", "GET /home"]);
  eq([res.status, res.url, res.body], [200, "https://app.example/home", "home"]);
});
test("307 keeps the method and body", () => {
  const g = world();
  const seen = [];
  g.site("https://app.example", req => {
    seen.push([req.method, req.path, req.body]);
    return req.path === "/a" ? { status: 307, headers: { location: "https://app.example/b" } } : { status: 200 };
  });
  g.submitForm("https://app.example/", { action: "/a", fields: { x: "1" } });
  eq(seen, [["POST", "/a", { x: "1" }], ["POST", "/b", { x: "1" }]]);
});
test("a cookie set on a redirect response is stored and sent on the next hop", () => {
  const g = world();
  const seen = [];
  g.site("https://app.example", req => {
    seen.push(req.cookies);
    return req.path === "/login"
      ? { status: 303, headers: { "Set-Cookie": "sid=new; Secure; HttpOnly; Path=/; SameSite=Lax", Location: "/home" } }
      : { status: 200 };
  });
  g.submitForm("https://app.example/", { action: "/login" });
  eq(seen, [{}, { sid: "new" }]);
});
test("a redirect chain that leaves the site is cross-site: Strict dropped, Lax kept", () => {
  const g = world();
  echo(g, "https://app.example", { "/set": { headers: { "Set-Cookie": ["strict=1; Secure; Path=/; SameSite=Strict", "lax=1; Secure; Path=/; SameSite=Lax"] } } });
  g.visit("https://app.example/set");
  g.site("https://app.example", req => ({ status: 200, body: req.cookies }));
  g.site("https://idp.example", () => ({ status: 302, headers: { Location: "https://app.example/callback?code=abc" } }));
  const res = g.click("https://app.example/", "https://idp.example/authorize");
  eq(res.body, { lax: "1" });
  const hops = g.T.requests().slice(-2);
  eq(hops.map(h => h.headers["sec-fetch-site"]), ["cross-site", "cross-site"]);
  eq(hops[1].url, "https://app.example/callback?code=abc");
});
test("redirects stop after 10 hops", () => {
  const g = world();
  let n = 0;
  g.site("https://app.example", () => { n++; return { status: 302, headers: { Location: "/loop" } }; });
  const res = g.visit("https://app.example/loop");
  eq([n, res.status], [11, 302]);
});

/* ---------- fetch and CORS ---------- */
test("credentials: same-origin by default, omit sends nothing, include follows SameSite", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=1; Secure; Path=/; SameSite=None");
  echo(g, "https://app.example");
  ok(sentAfter(g, () => g.fetchFrom("https://app.example/", "/api")), "same-origin default sends");
  ok(!sentAfter(g, () => g.fetchFrom("https://app.example/", "/api", { credentials: "omit" })), "omit");
  ok(!sentAfter(g, () => g.fetchFrom("https://evil.example/", "https://app.example/api")), "cross-origin default");
  ok(sentAfter(g, () => g.fetchFrom("https://evil.example/", "https://app.example/api", { credentials: "include" })), "include + None");
});
test("CORS decides reading, not sending: the server acts, the page reads nothing", () => {
  const g = world();
  setOn(g, "https://bank.example", "sid=1; Secure; Path=/; SameSite=None");
  let balance = 100;
  g.site("https://bank.example", req => {
    if (req.method === "POST" && req.cookies.sid) balance -= 50;
    return { status: 200, body: { balance } };
  });
  const res = g.fetchFrom("https://evil.example/", "https://bank.example/transfer", { method: "POST", credentials: "include" });
  eq(balance, 50, "the request was sent with the cookie and the server acted on it");
  eq([res.readable, res.status, res.body], [false, 0, null], "but the attacker page cannot read the response");
  eq(g.T.requests().pop().status, 200, "the log keeps the real status");
});
test("CORS: matching origin plus credentials header makes a credentialed response readable", () => {
  const g = world();
  g.site("https://api.example", () => ({ status: 200, headers: { "Access-Control-Allow-Origin": "https://app.example", "Access-Control-Allow-Credentials": "true" }, body: { ok: 1 } }));
  eq(g.fetchFrom("https://app.example/", "https://api.example/x", { credentials: "include" }).body, { ok: 1 });
  g.site("https://api.example", () => ({ status: 200, headers: { "Access-Control-Allow-Origin": "*" }, body: { ok: 2 } }));
  eq(g.fetchFrom("https://app.example/", "https://api.example/x").body, { ok: 2 }, "* without credentials");
  eq(g.fetchFrom("https://app.example/", "https://api.example/x", { credentials: "include" }).readable, false, "* never with credentials");
});
test("a JSON body is passed through with a content type", () => {
  const g = world();
  let seen;
  g.site("https://app.example", req => { seen = req; return { status: 201 }; });
  g.fetchFrom("https://app.example/", "/api/notes", { method: "POST", body: { text: "hi" } });
  eq([seen.body, seen.headers["content-type"]], [{ text: "hi" }, "application/json"]);
});
test("fetch does not follow redirects", () => {
  const g = world();
  g.site("https://app.example", () => ({ status: 302, headers: { Location: "/elsewhere" } }));
  eq(g.fetchFrom("https://app.example/", "/api").status, 302);
  eq(g.T.requests().length, 1);
});

/* ---------- sites, browsers, helpers ---------- */
test("an unregistered site is a clear error", () => {
  const g = world();
  throws(() => g.visit("https://nowhere.example/"), /no site is registered at https:\/\/nowhere\.example/);
});
test("site() wants a bare origin and a function", () => {
  const g = world();
  throws(() => g.site("https://app.example/path", () => ({})), /just the origin/);
  throws(() => g.site("app.example", () => ({})), /not an http\(s\) URL/);
  throws(() => g.site("https://app.example", "nope"), /must be a function/);
  g.site("https://app.example/", () => ({ status: 204 }));
  eq(g.visit("https://app.example/").status, 204, "a trailing slash is fine");
});
test("a handler that throws becomes a 500", () => {
  const g = world();
  g.site("https://app.example", () => { throw new Error("boom"); });
  const res = g.visit("https://app.example/");
  eq(res.status, 500);
  ok(/boom/.test(res.body));
});
test("browsers have separate jars and logs; sites are shared", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=victim; Secure; Path=/");
  const attacker = g.newBrowser();
  echo(g, "https://app.example");
  attacker.visit("https://app.example/");
  eq(attacker.requests()[0].cookies, {});
  eq(attacker.jar(), []);
  ok(g.T.requests().length === 1, "the victim log is unchanged");
});
test("helpers hand out copies", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=1; Path=/");
  g.T.jar()[0].value = "tampered";
  g.T.requests()[0].cookies.x = "1";
  eq(g.T.jar()[0].value, "1");
  eq(g.T.requests()[0].cookies, {});
});
test("the handler gets query, path, cookies and headers; the request log records the exchange", () => {
  const g = world();
  setOn(g, "https://app.example", "sid=1; Path=/");
  let seen;
  g.site("https://app.example", req => { seen = req; return { status: 200, headers: { "Set-Cookie": "seen=1; Path=/" } }; });
  g.click("https://app.example/", "/search?q=cats&page=2");
  eq([seen.path, seen.query, seen.cookies, seen.origin], ["/search", { q: "cats", page: "2" }, { sid: "1" }, "https://app.example"]);
  const r = lastReq(g);
  eq([r.method, r.url, r.initiator, r.mode, r.status, r.setCookie], ["GET", "https://app.example/search?q=cats&page=2", "https://app.example", "navigate", 200, ["seen=1; Path=/"]]);
  eq(g.T.lastResponse().status, 200);
});

console.log(`authsim: ${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
