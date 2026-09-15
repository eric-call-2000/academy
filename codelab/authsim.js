/* ============================================================
   authsim.js — a browser, its cookie jar, and several web sites,
   all inside one lesson Worker (Authentication course, part 2).

   A lesson sandbox has an opaque origin, so real cookies, SameSite and
   Sec-Fetch-* headers are impossible to observe. This models them instead:
   pure logic, no DOM, run by `browser: true` lessons. runner.js copies the
   one function below into the Worker source (it must stay self-contained:
   no references to anything outside it), and tools/test-authsim.js runs it
   in Node as the contract.

   Model, in one paragraph. `site(origin, handler)` registers a web site;
   handlers take { method, url, origin, path, query, headers, body, cookies }
   and return { status, headers, body } — Unit 1's shape, with
   headers["Set-Cookie"] a string or an array. A BROWSER holds a cookie jar
   and makes requests: visit(url) is the address bar, click(from, url) a link
   on a page, submitForm(from, { method, action, fields }) a form, and
   fetchFrom(from, url, { method, headers, body, credentials }) a script's
   fetch. Navigations follow 30x redirects. Every request is stamped with the
   cookies the jar would really send and with Sec-Fetch-Site/Mode/Dest and
   Origin, and every one is logged.

   Rules implemented (RFC 6265bis, the Fetch Metadata spec, and MDN's cookie
   reference): host-only vs Domain cookies (a Domain must be the host or a
   parent of it, and not a public suffix — here, any single-label name);
   default-path and path-match (/docs matches /docs/Web, not /docsets);
   Secure (set and sent over https only); HttpOnly (sent, but hidden from
   jsCookies); Max-Age beats Expires, and an expiry at or before now deletes;
   the __Secure- and __Host- prefixes; SameSite Strict / Lax / None (None
   requires Secure) and an OMITTED SameSite as Chrome treats it: Lax, except
   that a top-level cross-site POST still carries a cookie created in the
   last two minutes. Same-site means same scheme and same registrable domain
   (the last two labels), and a navigation is same-site only if EVERY URL in
   its redirect chain is. A cross-origin fetch is sent either way; CORS only
   decides whether the calling page may READ the response.

   Deliberately not modelled: third-party cookie blocking, partitioning,
   cookie size limits, the real public suffix list, Referer, HEAD bodies. */
window.CODELAB_AUTHSIM = function authsim(g) {
  var clock = function () { return typeof g.now === "function" ? g.now() : 0; };
  var sites = {};
  var LAX_UNSAFE_WINDOW_MS = 2 * 60 * 1000;

  function copy(x) { return x == null ? x : JSON.parse(JSON.stringify(x)); }
  function dec(s) { try { return decodeURIComponent(String(s).replace(/\+/g, " ")); } catch (e) { return String(s); } }

  function parseUrl(u) {
    var m = /^(https?):\/\/([a-z0-9.-]+)(?::(\d+))?(\/[^?#]*)?(?:\?([^#]*))?(?:#.*)?$/i.exec(String(u));
    if (!m) throw new Error("authsim: not an http(s) URL: " + JSON.stringify(u));
    var scheme = m[1].toLowerCase(), host = m[2].toLowerCase(), port = m[3] || "";
    var origin = scheme + "://" + host + (port ? ":" + port : "");
    var path = m[4] || "/", search = m[5] || "";
    var query = {};
    search.split("&").forEach(function (kv) {
      if (!kv) return;
      var i = kv.indexOf("=");
      query[dec(i === -1 ? kv : kv.slice(0, i))] = i === -1 ? "" : dec(kv.slice(i + 1));
    });
    return { href: origin + path + (search ? "?" + search : ""), scheme: scheme, host: host, origin: origin, path: path, query: query };
  }
  function resolve(location, base) {
    var loc = String(location);
    if (/^https?:\/\//i.test(loc)) return loc;
    if (loc.charAt(0) === "/") return base.origin + loc;
    var dir = base.path.slice(0, base.path.lastIndexOf("/") + 1);
    return base.origin + dir + loc;
  }
  function registrable(host) {
    var labels = host.split(".");
    return labels.length <= 2 ? host : labels.slice(-2).join(".");
  }
  function siteOf(u) { return u.scheme + "://" + registrable(u.host); }
  function withQuery(url, fields) {
    var keys = Object.keys(fields || {});
    if (!keys.length) return url;
    var qs = keys.map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(String(fields[k])); }).join("&");
    return url + (url.indexOf("?") === -1 ? "?" : "&") + qs;
  }
  function headerValue(headers, name) {
    var out;
    Object.keys(headers || {}).forEach(function (k) { if (k.toLowerCase() === name) out = headers[k]; });
    return out;
  }
  function parseCookieHeader(header) {
    var jar = {};
    String(header || "").split(";").forEach(function (part) {
      var i = part.indexOf("=");
      if (i === -1) return;
      var k = part.slice(0, i).trim();
      if (k && !Object.prototype.hasOwnProperty.call(jar, k)) jar[k] = part.slice(i + 1).trim();
    });
    return jar;
  }

  function createBrowser() {
    var cookies = [], log = [], rejected = [], last = null;

    function purge() {
      var t = clock();
      cookies = cookies.filter(function (c) { return c.expires == null || c.expires > t; });
    }
    function domainMatch(c, host) {
      return c.hostOnly ? host === c.domain : (host === c.domain || host.slice(-(c.domain.length + 1)) === "." + c.domain);
    }
    function pathMatch(cookiePath, reqPath) {
      if (reqPath === cookiePath) return true;
      if (reqPath.indexOf(cookiePath) !== 0) return false;
      return cookiePath.charAt(cookiePath.length - 1) === "/" || reqPath.charAt(cookiePath.length) === "/";
    }
    function defaultPath(p) {
      if (p.charAt(0) !== "/") return "/";
      var i = p.lastIndexOf("/");
      return i <= 0 ? "/" : p.slice(0, i);
    }

    function store(line, u) {
      var reject = function (reason) { rejected.push({ line: String(line), url: u.href, reason: reason }); };
      var parts = String(line).split(";");
      var eq = parts[0].indexOf("=");
      if (eq === -1) return reject("no name=value pair");
      var c = {
        name: parts[0].slice(0, eq).trim(), value: parts[0].slice(eq + 1).trim(),
        domain: u.host, hostOnly: true, path: null, secure: false, httpOnly: false,
        sameSite: "Default", expires: null, created: clock()
      };
      if (!c.name) return reject("the cookie has no name");
      var maxAge = null, expires = null, domainAttr = null, pathAttr = null, sameSite = null;
      for (var i = 1; i < parts.length; i++) {
        var a = parts[i], e = a.indexOf("=");
        var k = (e === -1 ? a : a.slice(0, e)).trim().toLowerCase();
        var v = e === -1 ? "" : a.slice(e + 1).trim();
        if (k === "max-age") { if (/^-?\d+$/.test(v)) maxAge = parseInt(v, 10); }
        else if (k === "expires") { var when = Date.parse(v); if (!isNaN(when)) expires = when; }
        else if (k === "domain") { if (v) domainAttr = v.replace(/^\./, "").toLowerCase(); }
        else if (k === "path") pathAttr = v;
        else if (k === "secure") c.secure = true;
        else if (k === "httponly") c.httpOnly = true;
        else if (k === "samesite") {
          var s = v.toLowerCase();
          sameSite = s === "strict" ? "Strict" : s === "lax" ? "Lax" : s === "none" ? "None" : null;
        }
      }
      c.path = pathAttr && pathAttr.charAt(0) === "/" ? pathAttr : defaultPath(u.path);
      if (sameSite) c.sameSite = sameSite;
      c.expires = maxAge != null ? (maxAge <= 0 ? -Infinity : clock() + maxAge * 1000) : expires;
      var https = u.scheme === "https";

      if (c.name.indexOf("__Secure-") === 0 && !(c.secure && https))
        return reject("__Secure- cookies need the Secure attribute and an https page");
      if (c.name.indexOf("__Host-") === 0) {
        if (!(c.secure && https)) return reject("__Host- cookies need the Secure attribute and an https page");
        if (domainAttr != null) return reject("__Host- cookies must not have a Domain attribute");
        if (pathAttr !== "/") return reject("__Host- cookies must have Path=/");
      }
      if (c.secure && !https) return reject("a Secure cookie can only be set from an https page");
      if (c.sameSite === "None" && !c.secure) return reject("SameSite=None requires the Secure attribute");
      if (domainAttr != null) {
        if (domainAttr.indexOf(".") === -1) return reject("Domain=" + domainAttr + " is a public suffix");
        if (!(u.host === domainAttr || u.host.slice(-(domainAttr.length + 1)) === "." + domainAttr))
          return reject("Domain=" + domainAttr + " does not match the host " + u.host);
        c.domain = domainAttr;
        c.hostOnly = false;
      }

      purge();
      var existing = -1;
      cookies.forEach(function (o, ix) {
        if (o.name === c.name && o.domain === c.domain && o.hostOnly === c.hostOnly && o.path === c.path) existing = ix;
      });
      if (existing !== -1) {
        c.created = cookies[existing].created;
        cookies.splice(existing, 1);
      }
      if (c.expires != null && c.expires <= clock()) return;
      cookies.push(c);
    }

    function matching(u) {
      purge();
      return cookies.filter(function (c) {
        return domainMatch(c, u.host) && pathMatch(c.path, u.path) && !(c.secure && u.scheme !== "https");
      }).sort(function (a, b) { return b.path.length - a.path.length || a.created - b.created; });
    }
    function cookiesFor(u, ctx) {
      var safe = ctx.method === "GET" || ctx.method === "HEAD";
      return matching(u).filter(function (c) {
        if (ctx.sameSite || c.sameSite === "None") return true;
        if (c.sameSite === "Strict") return false;
        if (!ctx.topLevel) return false;
        if (safe) return true;
        return c.sameSite === "Default" && ctx.method === "POST" && clock() - c.created <= LAX_UNSAFE_WINDOW_MS;
      });
    }

    function go(initiator, method, url, body, extraHeaders, mode, credentials) {
      var chain = [], hops = 0;
      var u = parseUrl(url);
      method = String(method || "GET").toUpperCase();
      for (;;) {
        chain.push(u);
        var first = initiator ? parseUrl(initiator) : chain[0];
        var sameSite = chain.every(function (x) { return siteOf(x) === siteOf(first); });
        var sameOrigin = chain.every(function (x) { return x.origin === first.origin; });
        var topLevel = mode === "navigate";
        var sendCookies = topLevel || credentials === "include" || (credentials === "same-origin" && sameOrigin);
        var sent = sendCookies ? cookiesFor(u, { sameSite: sameSite, topLevel: topLevel, method: method }) : [];
        var cookieHeader = sent.map(function (c) { return c.name + "=" + c.value; }).join("; ");

        var headers = {};
        Object.keys(extraHeaders || {}).forEach(function (k) { headers[k.toLowerCase()] = String(extraHeaders[k]); });
        if (cookieHeader) headers.cookie = cookieHeader;
        headers["sec-fetch-site"] = (!initiator && chain.length === 1) ? "none" : sameOrigin ? "same-origin" : sameSite ? "same-site" : "cross-site";
        headers["sec-fetch-mode"] = mode;
        headers["sec-fetch-dest"] = topLevel ? "document" : "empty";
        var unsafe = method !== "GET" && method !== "HEAD";
        if (unsafe || (!topLevel && !sameOrigin)) {
          if (initiator || chain.length > 1) headers.origin = (chain.length > 1 && !sameOrigin) ? "null" : first.origin;
        }

        var handler = sites[u.origin];
        if (!handler) throw new Error("authsim: no site is registered at " + u.origin + " — register one with site(\"" + u.origin + "\", req => ...)");
        var req = {
          method: method, url: u.href, origin: u.origin, path: u.path, query: copy(u.query),
          headers: copy(headers), body: copy(body), cookies: parseCookieHeader(cookieHeader)
        };
        var res;
        try { res = handler(req); }
        catch (e) { res = { status: 500, headers: {}, body: "the " + u.origin + " handler threw: " + ((e && e.message) || String(e)) }; }
        res = res || {};
        var status = res.status == null ? 200 : Number(res.status);
        var resHeaders = res.headers || {};
        var setCookie = headerValue(resHeaders, "set-cookie");
        var lines = setCookie == null ? [] : (Array.isArray(setCookie) ? setCookie : [setCookie]);
        if (credentials !== "omit") lines.forEach(function (line) { store(line, u); });
        var location = headerValue(resHeaders, "location");

        log.push({
          method: method, url: u.href, initiator: initiator || null, mode: mode,
          cookies: parseCookieHeader(cookieHeader), headers: copy(headers),
          status: status, location: location == null ? null : String(location), setCookie: lines.map(String)
        });

        if (topLevel && location != null && [301, 302, 303, 307, 308].indexOf(status) !== -1 && hops < 10) {
          if (status === 303 || ((status === 301 || status === 302) && method === "POST")) { method = "GET"; body = null; }
          u = parseUrl(resolve(location, u));
          hops++;
          continue;
        }
        last = { status: status, headers: copy(resHeaders), body: copy(res.body), url: u.href };
        if (!topLevel) {
          var acao = headerValue(resHeaders, "access-control-allow-origin");
          var acac = String(headerValue(resHeaders, "access-control-allow-credentials") || "") === "true";
          var readable = sameOrigin || (acao === "*" && credentials !== "include") || (acao === first.origin && (credentials !== "include" || acac));
          last.readable = readable;
          if (!readable) last = { status: 0, headers: {}, body: null, url: u.href, readable: false };
        }
        return copy(last);
      }
    }

    function originOfPage(from) { return parseUrl(from).origin; }

    return {
      visit: function (url) { return go(null, "GET", url, null, {}, "navigate"); },
      click: function (from, url) { return go(originOfPage(from), "GET", resolve(url, parseUrl(from)), null, {}, "navigate"); },
      submitForm: function (from, form) {
        form = form || {};
        var method = String(form.method || "POST").toUpperCase();
        var action = resolve(form.action || parseUrl(from).path, parseUrl(from));
        if (method === "GET") return go(originOfPage(from), "GET", withQuery(action, form.fields), null, {}, "navigate");
        return go(originOfPage(from), method, action, copy(form.fields || {}), { "content-type": "application/x-www-form-urlencoded" }, "navigate");
      },
      fetchFrom: function (from, url, opts) {
        opts = opts || {};
        var headers = copy(opts.headers || {});
        var body = opts.body == null ? null : opts.body;
        if (body != null && typeof body === "object" && headerValue(headers, "content-type") == null) headers["content-type"] = "application/json";
        return go(originOfPage(from), opts.method || "GET", resolve(url, parseUrl(from)), body, headers, "cors", opts.credentials || "same-origin");
      },
      jsCookies: function (url) {
        return matching(parseUrl(url)).filter(function (c) { return !c.httpOnly; })
          .map(function (c) { return c.name + "=" + c.value; }).join("; ");
      },
      jar: function () {
        purge();
        return cookies.map(function (c) {
          return { name: c.name, value: c.value, domain: c.domain, hostOnly: c.hostOnly, path: c.path, secure: c.secure,
            httpOnly: c.httpOnly, sameSite: c.sameSite, expires: c.expires === -Infinity ? 0 : c.expires, created: c.created };
        });
      },
      requests: function () { return copy(log); },
      rejected: function () { return copy(rejected); },
      lastResponse: function () { return copy(last); }
    };
  }

  var main = createBrowser();
  g.site = function (origin, handler) {
    var u = parseUrl(origin);
    if (u.href !== u.origin + "/" || String(origin).replace(/\/$/, "") !== u.origin)
      throw new Error("site(origin, handler): pass just the origin, like \"https://app.example\" — got " + JSON.stringify(origin));
    if (typeof handler !== "function") throw new Error("site(\"" + u.origin + "\", handler): the handler must be a function req => ({ status, headers, body })");
    sites[u.origin] = handler;
  };
  g.newBrowser = createBrowser;
  g.browser = main;
  g.visit = main.visit;
  g.click = main.click;
  g.submitForm = main.submitForm;
  g.fetchFrom = main.fetchFrom;
  g.T = g.T || {};
  g.T.requests = main.requests;
  g.T.jar = main.jar;
  g.T.rejected = main.rejected;
  g.T.jsCookies = main.jsCookies;
  g.T.lastResponse = main.lastResponse;
};
