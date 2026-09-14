/* Authentication — Unit 2: The cookie jar */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SIM_NOTE = "// site(), visit(), submitForm(), click() and fetchFrom() drive a simulated browser (authsim.js).";

  /* ---------- auth-u2-1 ---------- */
  function u1File(cookieLines) {
    return L(
      SIM_NOTE,
      "// app.example is yours. blog.app.example is run by another team, on another server.",
      "",
      "function loginCookies() {",
      "  return [",
      cookieLines,
      "  ];",
      "}",
      "",
      "site(\"https://app.example\", req => {",
      "  if (req.method === \"POST\" && req.path === \"/login\")",
      "    return { status: 303, headers: { \"Set-Cookie\": loginCookies(), Location: \"/account\" } };",
      "  return { status: 200, body: { path: req.path, cookies: req.cookies } };",
      "});",
      "",
      "// The blog team's server logs every cookie it receives.",
      "site(\"https://blog.app.example\", req => ({ status: 200, body: { cookies: req.cookies } }));",
      "",
      "submitForm(\"https://app.example/login\", { action: \"/login\", fields: { userName: \"ada\", password: \"mainframe\" } });",
      "console.log(\"the blog received:\", visit(\"https://blog.app.example/\").body.cookies);",
      "");
  }

  /* ---------- auth-u2-2 ---------- */
  function u2File(cookieLines) {
    return L(
      SIM_NOTE,
      "",
      "function loginCookies() {",
      "  return [",
      cookieLines,
      "  ];",
      "}",
      "",
      "site(\"https://app.example\", req => {",
      "  if (req.method === \"POST\" && req.path === \"/login\")",
      "    return { status: 303, headers: { \"Set-Cookie\": loginCookies(), Location: \"/account\" } };",
      "  return { status: 200, body: { path: req.path, cookies: req.cookies } };",
      "});",
      "",
      "submitForm(\"https://app.example/login\", { action: \"/login\" });",
      "console.log(\"refused by the browser:\", T.rejected());",
      "");
  }

  /* ---------- auth-u2-3 ---------- */
  function u3File(logoutLine, rememberLine, renew) {
    return L(
      SIM_NOTE,
      "const DAY = 24 * 60 * 60; // seconds",
      "",
      "function logoutCookie() {",
      logoutLine,
      "}",
      "",
      "function rememberCookie(token) {",
      rememberLine,
      "}",
      "",
      "site(\"https://app.example\", req => {",
      "  if (req.method === \"POST\" && req.path === \"/login\")",
      "    return { status: 303, headers: { \"Set-Cookie\": [\"sid=7f3a9c21; Path=/; Secure; HttpOnly; SameSite=Lax\", rememberCookie(\"r-ada-1\")], Location: \"/\" } };",
      "  if (req.method === \"POST\" && (req.path === \"/logout\" || req.path === \"/account/logout\"))",
      "    return { status: 303, headers: { \"Set-Cookie\": logoutCookie(), Location: \"/\" } };",
      renew,
      "  return { status: 200, body: { cookies: req.cookies } };",
      "});",
      "",
      "submitForm(\"https://app.example/\", { action: \"/login\" });",
      "submitForm(\"https://app.example/account/settings\", { action: \"/account/logout\" });",
      "console.log(\"after logout the jar holds:\", T.jar());",
      "");
  }

  /* ---------- auth-u2-4 ---------- */
  function u4File(sessionLine, widgetLine) {
    return L(
      SIM_NOTE,
      "const balance = { ada: 100 };",
      "",
      "function sessionCookie(sid) {",
      sessionLine,
      "}",
      "",
      "// The \"Pay with Bank\" button that shop.example embeds reads this flag with a credentialed fetch.",
      "function widgetCookie() {",
      widgetLine,
      "}",
      "",
      "site(\"https://bank.example\", req => {",
      "  if (req.method === \"POST\" && req.path === \"/login\")",
      "    return { status: 303, headers: { \"Set-Cookie\": [sessionCookie(\"7f3a9c21\"), widgetCookie()], Location: \"/account\" } };",
      "  const signedIn = req.cookies.sid === \"7f3a9c21\";",
      "  if (req.method === \"POST\" && req.path === \"/transfer\") {",
      "    if (!signedIn) return { status: 401, body: { error: \"unauthorized\" } };",
      "    balance.ada -= Number(req.body.amount || 0);",
      "    return { status: 200, body: { balance: balance.ada } };",
      "  }",
      "  if (req.path === \"/widget\")",
      "    return { status: 200, headers: { \"Access-Control-Allow-Origin\": \"https://shop.example\", \"Access-Control-Allow-Credentials\": \"true\" }, body: { ready: req.cookies.widget === \"on\" } };",
      "  return { status: 200, body: { signedIn: signedIn } };",
      "});",
      "",
      "// Everyone else on this web: an email client, the shop, a sibling bank site, and an attacker.",
      "[\"https://mail.example\", \"https://shop.example\", \"https://www.bank.example\", \"https://evil.example\"]",
      "  .forEach(origin => site(origin, () => ({ status: 200, body: \"\" })));",
      "",
      "submitForm(\"https://bank.example/login\", { action: \"/login\" });",
      "console.log(submitForm(\"https://evil.example/win-a-prize\", { action: \"https://bank.example/transfer\", fields: { to: \"eve\", amount: \"50\" } }).body);",
      "");
  }

  window.CODELAB.addUnit("auth", {
    id: "auth-u2",
    title: "The cookie jar",
    icon: "🍪",
    blurb: "What the browser does with the header you wrote. Domain and Path decide who gets a cookie, prefixes make the browser enforce your rules, Max-Age deletes, and SameSite decides which cross-site requests carry it. The browser enforces all of it; you write the headers and watch.",
    cheat: [
      { h: "Who gets the cookie", lang: "text", code: L(
        "sid=…; Path=/                   host-only: app.example, never blog.app.example",
        "theme=…; Domain=app.example      app.example AND every subdomain",
        "lang=…; Path=/docs               /docs, /docs/intro — not /docsets"),
        note: "Leave Domain off anything sensitive: a Domain cookie goes to every subdomain, including ones other teams run." },
      { h: "Prefixes the browser enforces", lang: "text", code: L(
        "__Secure-name   must be Secure, set from https",
        "__Host-name     must be Secure, from https, NO Domain, Path=/"),
        note: "A `__Host-` cookie can only ever come from exactly this host, so a compromised subdomain can't plant or overwrite it." },
      { h: "Deleting and expiring", lang: "text", code: L(
        "sid=; Path=/; Max-Age=0         deletes (same name AND Path)",
        "Max-Age=2592000                 30 days, in SECONDS, from receipt",
        "Expires=Thu, 01 Jan 1970 …      also deletes; Max-Age wins when both are set"),
        note: "A 'deletion' with a future Expires just blanks the value. A different Path creates a second cookie instead of deleting the first." },
      { h: "SameSite", lang: "text", code: L(
        "Strict   same-site requests only (an email link arrives signed out)",
        "Lax      + cross-site top-level GET navigations",
        "None     every request; requires Secure",
        "(none)   Chrome: Lax, but a <2-minute-old cookie rides a cross-site POST"),
        note: "Lax is the usual session choice. Always write the attribute: the default differs between browsers." }
    ],
    lessons: [

      {
        id: "auth-u2-1",
        title: "Domain and Path: who gets the cookie",
        kind: "js", chip: "AUTH", xp: 15, mins: 13,
        browser: true, clock: 1700000000000,
        brief: "*From here on, lessons run a simulated browser: `site(origin, handler)` registers a web site in Unit 1's request and response shape, and `visit`, `click`, `submitForm` and `fetchFrom` make requests the way a real browser would, cookie rules included. `T.jar()` shows what the browser stored, and every site's handler sees `req.cookies`.*\n\nWeb Security's `sec-u5-3` modelled HttpOnly with a plain object. Here the browser decides for real, and the first thing it decides is **who gets each cookie**.\n\n- **No `Domain` attribute:** the cookie is *host-only*. It goes back to `app.example` and nowhere else.\n- **`Domain=app.example`:** it goes to `app.example` and every subdomain, including `blog.app.example`, which another team runs on another server.\n- **`Path=/docs`:** it goes to `/docs` and anything under `/docs/`, but not `/docsets`. A missing `Path` defaults to the directory of the URL that set the cookie.\n\n`loginCookies()` returns three `Set-Cookie` lines, and all three put their cookie in the wrong place. The session must never reach the blog. The theme should follow ada to the blog. The documentation language belongs to `/docs` and everything under it.\n\n*Rule of thumb: leave `Domain` off anything sensitive. Every subdomain you add later, and every team that runs one, would receive it.*",
        steps: [
          { text: "The session stays home: after login, a visit to `blog.app.example` carries no `sid`.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/login', { action: '/login' });",
              "var sent = b.visit('https://blog.app.example/post').body.cookies;",
              "T.expect(sent.sid === undefined, 'blog.app.example received the session cookie (' + JSON.stringify(sent) + '). A Domain cookie goes to every subdomain: leave Domain off the session');") },
          { text: "The theme follows ada to the blog: `blog.app.example` receives `theme=dark`.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/login', { action: '/login' });",
              "var sent = b.visit('https://blog.app.example/post').body.cookies;",
              "T.eq(sent.theme, 'dark', 'The blog should receive theme=dark. A host-only cookie never leaves app.example; this one needs Domain=app.example');") },
          { text: "`docs-lang` goes to `/docs` and `/docs/intro`, and not to `/docsets` or the home page.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/login', { action: '/login' });",
              "var got = function (p) { return b.visit('https://app.example' + p).body.cookies['docs-lang']; };",
              "T.eq(got('/docs'), 'fr', 'docs-lang should reach /docs');",
              "T.eq(got('/docs/intro'), 'fr', 'docs-lang should reach /docs/intro');",
              "T.eq(got('/docsets'), undefined, '/docsets is not under /docs: a path matches only at a / boundary');",
              "T.eq(got('/'), undefined, 'docs-lang is not needed on the home page');") },
          { text: "The session still works where it belongs: host-only, `Path=/`, `Secure` and `HttpOnly`, and sent to `/account`. The browser refused nothing.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/login', { action: '/login' });",
              "T.eq(b.rejected(), [], 'The browser refused a line: ' + JSON.stringify(b.rejected()));",
              "var sid = b.jar().filter(function (c) { return c.name === 'sid'; })[0];",
              "T.expect(!!sid, 'The jar has no sid cookie at all');",
              "T.eq([sid.hostOnly, sid.path, sid.secure, sid.httpOnly], [true, '/', true, true], 'sid should be host-only, Path=/, Secure and HttpOnly');",
              "T.eq(b.visit('https://app.example/account').body.cookies.sid, '7f3a9c21', 'The session still reaches /account');") }
        ],
        files: [
          { name: "script.js", content: u1File(L(
            "    \"sid=7f3a9c21; Domain=app.example; Path=/; Secure; HttpOnly; SameSite=Lax\",",
            "    \"theme=dark; Path=/; Secure; SameSite=Lax\",",
            "    \"docs-lang=fr; Path=/doc; Secure; SameSite=Lax\"")) }
        ],
        hints: [
          "The session line only needs its `Domain=app.example` removed. Without a Domain, a cookie is host-only.",
          "The theme is the opposite case: add `Domain=app.example` so subdomains receive it too.",
          "`Path=/doc` matches `/doc` and `/doc/…`, never `/docs`. The path has to be `/docs`."
        ],
        solution: {
          "script.js": u1File(L(
            "    \"sid=7f3a9c21; Path=/; Secure; HttpOnly; SameSite=Lax\",                  // host-only: never leaves app.example",
            "    \"theme=dark; Domain=app.example; Path=/; Secure; SameSite=Lax\",         // every subdomain may read the theme",
            "    \"docs-lang=fr; Path=/docs; Secure; SameSite=Lax\""))
        }
      },

      {
        id: "auth-u2-2",
        title: "__Host- and __Secure-: prefixes the browser enforces",
        kind: "js", chip: "AUTH", xp: 15, mins: 12,
        browser: true, clock: 1700000000000,
        brief: "The previous lesson kept the session host-only by leaving `Domain` off. Nothing stops a later edit from adding it back, and nothing stops a compromised `evil.app.example` from setting its own `Domain=app.example` cookie called `sid` that `app.example` would receive. **Cookie prefixes** move the rule into the browser. The name itself is a promise, and the browser refuses any `Set-Cookie` that breaks it.\n\n- `__Secure-name`: the cookie must be `Secure` and set from an https page.\n- `__Host-name`: `Secure`, from https, **no `Domain` attribute at all**, and exactly `Path=/`. It can only ever have come from this exact host.\n\nA refused line fails silently in a real browser; it just isn't stored. Here `T.rejected()` lists each refused line with the reason, so you can see what went wrong.\n\n`loginCookies()` has three lines, and the browser refuses all three. Fix each so it's stored. Then the last checkpoint shows what the prefix buys: a sibling subdomain tries to plant its own `__Host-sid`, and the browser won't take it.",
        steps: [
          { text: "`__Host-sid` is stored: host-only, `Path=/`, and still `HttpOnly`.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/login', { action: '/login' });",
              "var c = b.jar().filter(function (x) { return x.name === '__Host-sid'; })[0];",
              "var why = b.rejected().filter(function (r) { return /__Host-sid/.test(r.line); }).map(function (r) { return r.reason; });",
              "T.expect(!!c, 'The browser refused __Host-sid: ' + (why[0] || 'not set at all'));",
              "T.eq([c.hostOnly, c.path, c.secure, c.httpOnly], [true, '/', true, true], '__Host-sid should be host-only, Path=/, Secure and HttpOnly');") },
          { text: "`__Secure-pref` is stored, with `Secure`.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/login', { action: '/login' });",
              "var c = b.jar().filter(function (x) { return x.name === '__Secure-pref'; })[0];",
              "var why = b.rejected().filter(function (r) { return /__Secure-pref/.test(r.line); }).map(function (r) { return r.reason; });",
              "T.expect(!!c && c.secure, 'The browser refused __Secure-pref: ' + (why[0] || 'not set at all'));",
              "T.eq(c.value, 'compact', 'Keep the value compact');") },
          { text: "`__Host-csrf` is stored with `Path=/`, and reaches both `/account` and `/`.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/login', { action: '/login' });",
              "var why = b.rejected().filter(function (r) { return /__Host-csrf/.test(r.line); }).map(function (r) { return r.reason; });",
              "T.expect(why.length === 0, 'The browser refused __Host-csrf: ' + why[0]);",
              "T.eq(b.visit('https://app.example/account').body.cookies['__Host-csrf'], 'c5e1', '__Host-csrf reaches /account');",
              "T.eq(b.visit('https://app.example/').body.cookies['__Host-csrf'], 'c5e1', 'and / too: a __Host- cookie always has Path=/');") },
          { text: "What the prefix buys: `evil.app.example` tries to plant `__Host-sid` for the whole domain. The browser refuses it, and `app.example` still gets the real session.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/login', { action: '/login' });",
              "T.eq(b.rejected(), [], 'All three of your lines should be accepted first: ' + JSON.stringify(b.rejected()));",
              "site('https://evil.app.example', function () { return { status: 200, headers: { 'Set-Cookie': ['__Host-sid=attacker; Secure; Domain=app.example; Path=/', 'sid=attacker; Secure; Domain=app.example; Path=/'] }, body: '' }; });",
              "b.visit('https://evil.app.example/');",
              "var refused = b.rejected();",
              "T.eq(refused.length, 1, 'Exactly one line from evil.app.example should be refused');",
              "T.expect(/__Host-sid=attacker/.test(refused[0].line), 'The refused line is the planted __Host-sid');",
              "var sent = b.visit('https://app.example/account').body.cookies;",
              "T.eq(sent['__Host-sid'], '7f3a9c21', 'app.example still receives the real __Host-sid');",
              "T.eq(sent.sid, 'attacker', 'The unprefixed sid from the sibling DID get through: exactly the attack a __Host- name rules out');") }
        ],
        files: [
          { name: "script.js", content: u2File(L(
            "    \"__Host-sid=7f3a9c21; Domain=app.example; Path=/; Secure; HttpOnly; SameSite=Lax\",",
            "    \"__Secure-pref=compact; Path=/; SameSite=Lax\",",
            "    \"__Host-csrf=c5e1; Path=/account; Secure; SameSite=Strict\"")) }
        ],
        hints: [
          "Each line breaks a different rule. Read `T.rejected()` in the console: every refused line comes with its reason.",
          "`__Host-` allows no `Domain` attribute at all, and needs exactly `Path=/`.",
          "`__Secure-` needs the `Secure` attribute."
        ],
        solution: {
          "script.js": u2File(L(
            "    \"__Host-sid=7f3a9c21; Path=/; Secure; HttpOnly; SameSite=Lax\",  // no Domain, Path=/, Secure",
            "    \"__Secure-pref=compact; Path=/; Secure; SameSite=Lax\",",
            "    \"__Host-csrf=c5e1; Path=/; Secure; SameSite=Strict\""))
        }
      },

      {
        id: "auth-u2-3",
        title: "Deleting and expiring: Max-Age beats Expires",
        kind: "js", chip: "AUTH", xp: 15, mins: 13,
        browser: true, clock: 1700000000000,
        brief: "A cookie with no expiry lives until the browser session ends. To make one last, or to delete one, the server sends it again with an expiry.\n\n- **`Max-Age=seconds`** counts from when the browser receives the header. `Max-Age=0` deletes the cookie now.\n- **`Expires=<date>`** is an absolute date, judged by the user's clock, which may be wrong. A date in the past deletes.\n- **When both are present, `Max-Age` wins.**\n\nDeleting replaces a cookie, so the new line has to match the old one's **name and `Path`** (and `Domain`, when there is one). Send `sid=; Max-Age=0` from `/account/logout` without a `Path` and the browser files it under `/account`: a second, already-dead cookie, while the real `sid` at `/` carries on.\n\nThree bugs to fix:\n\n- **`logoutCookie()`** has a future `Expires`. That doesn't delete anything; it just blanks the value and keeps the cookie forever. It also leaves out `Path`.\n- **`rememberCookie()`** should last 30 days. `Max-Age` is in seconds, and the starter counts milliseconds.\n- **Renewal:** a remember-me cookie that expires 30 days after *login* signs out someone who visits every day. Renew it on each visit, the way Unit 1's idle timeout slid `lastSeen`.",
        steps: [
          { text: "`POST /logout` really deletes `sid`: afterwards the jar holds no `sid` at all, not even an empty one.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/', { action: '/login' });",
              "b.submitForm('https://app.example/', { action: '/logout' });",
              "var left = b.jar().filter(function (c) { return c.name === 'sid'; });",
              "T.eq(left.length, 0, 'After logout the jar still holds ' + JSON.stringify(left) + '. An Expires date in the future keeps the cookie; Max-Age=0 deletes it');") },
          { text: "Logging out from `/account/logout` deletes the same `sid`: the deletion names `Path=/`.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/', { action: '/login' });",
              "b.submitForm('https://app.example/account/settings', { action: '/account/logout' });",
              "T.eq(b.visit('https://app.example/').body.cookies.sid, undefined, 'The session survived a logout sent from /account/logout. Without Path=/ the deletion is filed under /account, a different cookie');") },
          { text: "`remember` lasts 30 days: still sent 29 days after login, gone at 31.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/', { action: '/login' });",
              "T.advance(29 * 86400 * 1000);",
              "T.eq(b.requests().length > 0 && b.jar().some(function (c) { return c.name === 'remember'; }), true, 'The remember cookie should still be in the jar after 29 days');",
              "T.advance(2 * 86400 * 1000);",
              "T.eq(b.jar().some(function (c) { return c.name === 'remember'; }), false, '31 days after login the remember cookie should be gone. Max-Age counts seconds: 30 * DAY, not 30 * DAY * 1000');") },
          { text: "Renewal: a visit on day 20 renews `remember` for another 30 days, so it's still there on day 45, and gone 31 days after the last visit.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://app.example/', { action: '/login' });",
              "var has = function () { return b.jar().some(function (c) { return c.name === 'remember'; }); };",
              "T.advance(20 * 86400 * 1000);",
              "b.visit('https://app.example/');",
              "T.advance(25 * 86400 * 1000);",
              "T.expect(has(), 'Day 45: ada visited on day 20, so the remember cookie should have been renewed until day 50');",
              "var cookie = b.jar().filter(function (c) { return c.name === 'remember'; })[0];",
              "T.eq(cookie.value, 'r-ada-1', 'Renew the same token');",
              "T.advance(31 * 86400 * 1000);",
              "T.expect(!has(), '31 days with no visit: the remember cookie should be gone');") }
        ],
        files: [
          { name: "script.js", content: u3File(
            "  return \"sid=; Expires=Fri, 31 Dec 9999 23:59:59 GMT\";",
            "  return \"remember=\" + token + \"; Path=/; Max-Age=\" + (30 * DAY * 1000) + \"; Secure; HttpOnly; SameSite=Lax\";",
            "  // TODO: a visit that carries a remember cookie renews it for another 30 days") }
        ],
        hints: [
          "Delete with `Max-Age=0` and the same `Path` the cookie was set with: `\"sid=; Path=/; Max-Age=0\"`.",
          "`Max-Age` counts seconds, and `DAY` already is seconds: `Max-Age=\" + 30 * DAY`.",
          "Renew in the handler before the final `return`: `if (req.cookies.remember) return { status: 200, headers: { \"Set-Cookie\": rememberCookie(req.cookies.remember) }, body: { cookies: req.cookies } };`."
        ],
        solution: {
          "script.js": u3File(
            "  return \"sid=; Path=/; Max-Age=0\"; // same name and Path as the cookie it deletes",
            "  return \"remember=\" + token + \"; Path=/; Max-Age=\" + (30 * DAY) + \"; Secure; HttpOnly; SameSite=Lax\";",
            L("  if (req.cookies.remember) // every visit slides the 30 days forward",
              "    return { status: 200, headers: { \"Set-Cookie\": rememberCookie(req.cookies.remember) }, body: { cookies: req.cookies } };"))
        }
      },

      {
        id: "auth-u2-4",
        title: "SameSite: Strict, Lax, None",
        kind: "js", chip: "AUTH", xp: 15, mins: 14,
        browser: true, clock: 1700000000000,
        brief: "*A lab against your own sandbox: the attacker's page is one of the simulated sites.*\n\nA browser attaches cookies to requests that *other* sites start: a link in an email, a form on `evil.example`, a script's fetch. **SameSite** is how a cookie opts out. Same-site means the same scheme and registrable domain, so `www.bank.example` and `bank.example` are same-site, while `mail.example` is not.\n\n- **`Strict`:** same-site requests only. Even following a link from an email arrives signed out.\n- **`Lax`:** also cross-site **top-level navigations with a safe method**, so links work, but a cross-site form POST and a cross-site fetch get no cookie.\n- **`None`:** every request, cross-site included. Browsers refuse it without `Secure`.\n\nThe bank's session is `SameSite=None`, so a form on `evil.example` can move ada's money: that's the next unit's attack, CSRF. Pick the value that lets the email link arrive signed in and still stops the forged transfer and the cross-site fetch.\n\nThen fix `widgetCookie()`. `shop.example` embeds a \"Pay with Bank\" button that reads a flag with a credentialed fetch, so that cookie genuinely needs `None`, and the browser refuses it as written.\n\nAlways write the attribute. With none, Chrome treats a cookie as `Lax`, except that a cookie less than two minutes old still rides a cross-site POST. That's Chrome's behaviour, and other browsers differ.",
        steps: [
          { text: "A link from ada's email arrives signed in.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://bank.example/login', { action: '/login' });",
              "T.eq(b.click('https://mail.example/inbox', 'https://bank.example/account').body.signedIn, true, 'The link from mail.example arrived signed out. Strict drops the cookie on every cross-site request, links included');") },
          { text: "The forged transfer: a form on `evil.example` posts to `/transfer` and gets a 401, with ada's balance unchanged.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://bank.example/login', { action: '/login' });",
              "var before = balance.ada;",
              "var res = b.submitForm('https://evil.example/win-a-prize', { action: 'https://bank.example/transfer', fields: { to: 'eve', amount: '50' } });",
              "T.eq(balance.ada, before, 'The forged POST from evil.example moved money: the session cookie rode along. A cross-site form POST must not carry it');",
              "T.eq(res.status, 401, 'The forged transfer should be refused as unauthorized');") },
          { text: "A script on `evil.example` fetching the bank gets no session cookie, while a form on `www.bank.example` (same-site) can still transfer.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://bank.example/login', { action: '/login' });",
              "b.fetchFrom('https://evil.example/', 'https://bank.example/account', { credentials: 'include' });",
              "var sent = b.requests().pop().cookies;",
              "T.expect(sent.sid === undefined, 'The cross-site fetch carried the session cookie: ' + JSON.stringify(sent));",
              "var before = balance.ada;",
              "var res = b.submitForm('https://www.bank.example/transfer-form', { action: 'https://bank.example/transfer', fields: { to: 'bo', amount: '5' } });",
              "T.eq([res.status, balance.ada], [200, before - 5], 'www.bank.example is the same site as bank.example, so its form still transfers');") },
          { text: "The widget works: `shop.example`'s credentialed fetch sees `ready: true`. The session names its SameSite value explicitly.",
            test: L(
              "var b = newBrowser();",
              "b.submitForm('https://bank.example/login', { action: '/login' });",
              "var why = b.rejected().map(function (r) { return r.reason; });",
              "var res = b.fetchFrom('https://shop.example/checkout', 'https://bank.example/widget', { credentials: 'include' });",
              "T.eq(res.body, { ready: true }, 'The widget flag did not reach the bank from shop.example' + (why.length ? ': the browser refused a line (' + why[0] + ')' : ''));",
              "var sid = b.jar().filter(function (c) { return c.name === 'sid'; })[0];",
              "T.expect(sid && sid.sameSite !== 'Default', 'Write SameSite on the session explicitly. Omitted, Chrome treats it as Lax, with an exception shown next');",
              "site('https://legacy.example', function (req) { return req.method === 'POST' ? { status: 200, body: req.cookies } : { status: 200, headers: { 'Set-Cookie': 'old=1; Secure; Path=/' }, body: '' }; });",
              "var c = newBrowser();",
              "c.visit('https://legacy.example/');",
              "T.advance(60 * 1000);",
              "T.eq(c.submitForm('https://evil.example/', { action: 'https://legacy.example/x' }).body, { old: '1' }, 'A cookie with no SameSite, one minute old, still rides a cross-site POST in Chrome');",
              "T.advance(120 * 1000);",
              "T.eq(c.submitForm('https://evil.example/', { action: 'https://legacy.example/x' }).body, {}, 'Three minutes old, it no longer does');") }
        ],
        files: [
          { name: "script.js", content: u4File(
            "  return \"sid=\" + sid + \"; Path=/; Secure; HttpOnly; SameSite=None\";",
            "  return \"widget=on; Path=/; SameSite=None\";") }
        ],
        hints: [
          "Try each value against the first three checkpoints: `Strict` fails the email link, `None` lets the forged POST through, and one value passes all three.",
          "The session line becomes `SameSite=Lax`: links are top-level GET navigations, while forms from other sites and fetches are not.",
          "`SameSite=None` is only accepted with `Secure`: `\"widget=on; Path=/; Secure; SameSite=None\"`."
        ],
        solution: {
          "script.js": u4File(
            "  return \"sid=\" + sid + \"; Path=/; Secure; HttpOnly; SameSite=Lax\"; // links in, forged POSTs out",
            "  return \"widget=on; Path=/; Secure; SameSite=None\";              // None only ever with Secure")
        }
      },

      {
        id: "auth-quiz-2",
        title: "Unit 2 quiz: The cookie jar",
        kind: "quiz", xp: 10,
        brief: "Domain, Path, prefixes, expiry and SameSite. 80% to pass.",
        questions: [
          { q: "`app.example` sets `sid=abc; Path=/; Secure; HttpOnly`, with no Domain. Which of these receives it?",
            choices: ["`app.example` and every subdomain, such as `blog.app.example`", "Only `app.example`: with no Domain the cookie is host-only", "Any site under `.example`, since that is the top-level domain", "Only the exact page `/` that set it, because of Path=/"],
            answer: 1, explain: "Leaving Domain off makes a cookie host-only: it goes back to exactly the host that set it. Adding `Domain=app.example` would send it to every subdomain too. `Path=/` means every path on that host, not just the home page." },
          { q: "A cookie has `Path=/docs`. Which request does NOT carry it?",
            choices: ["`/docs`", "`/docs/`", "`/docs/intro/setup`", "`/docsets`"],
            answer: 3, explain: "Paths match at a `/` boundary: `/docs` matches itself and anything under `/docs/`. `/docsets` starts with the same letters, but it's a different path." },
          { q: "Why is `__Host-sid=abc; Secure; Domain=app.example; Path=/` refused by the browser?",
            choices: ["`__Host-` cookies may not have a Domain attribute at all", "`__Host-` cookies must also be marked HttpOnly", "`Domain=app.example` does not match the page that set it", "`__Host-` cookies are only valid with SameSite=Strict"],
            answer: 0, explain: "A `__Host-` name promises the cookie came from exactly this host: Secure, from https, Path=/ and no Domain. HttpOnly and SameSite are good practice but not part of the prefix rules." },
          { q: "A logout sends `sid=; Expires=Fri, 31 Dec 9999 23:59:59 GMT`. What happens to the session cookie?",
            choices: ["It is deleted, because the new value is empty", "It is deleted once the browser next restarts", "It stays, with an empty value, until the year 9999", "The browser refuses the line and keeps the old value"],
            answer: 2, explain: "An empty value doesn't delete anything; expiry does. A future `Expires` stores a blank `sid` that lasts for centuries. Deleting takes `Max-Age=0` or an `Expires` date in the past, with the same name and Path." },
          { q: "A session cookie is `SameSite=Lax`. Which request carries it?",
            choices: ["A form on `evil.example` that POSTs to your `/transfer`", "A link in an email that opens your `/account` page", "A script on `evil.example` calling fetch with credentials", "An image on `evil.example` whose src is your `/logout`"],
            answer: 1, explain: "Lax adds exactly one cross-site case to Strict: top-level navigations with a safe method, which is what following a link is. A cross-site form POST, a fetch and an image are not top-level GET navigations, so they go without the cookie." },
          { q: "`widget=on; Path=/; SameSite=None` is set from an https page. What does the browser do?",
            choices: ["Stores it and sends it on every request, cross-site ones included", "Stores it as Lax, since None is only a suggestion", "Refuses it: SameSite=None requires the Secure attribute", "Stores it, but only sends it over http connections"],
            answer: 2, explain: "Browsers refuse `SameSite=None` without `Secure`. A cookie that rides every cross-site request must at least never travel unencrypted. Add `Secure` and it's stored and sent everywhere." }
        ]
      }
    ]
  });
})();
