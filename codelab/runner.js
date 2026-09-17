/* ============================================================
   CodeLab — sandbox runner
   ------------------------------------------------------------
   Executes learner code and grades each lesson checkpoint.

   kind "js"  → code runs in a Web Worker. Safe against infinite
                loops (we terminate the worker on timeout), and
                checkpoint code is concatenated after the learner's
                code so it can see top-level let/const bindings.
   kind "web" → index.html / styles.css / script.js are assembled
                into ONE sandboxed <iframe srcdoc> (allow-scripts
                only — no same-origin access). The iframe IS the
                live preview; a grader script runs after load and
                reports back via postMessage.

   Console output from either sandbox streams to hooks.onConsole.
   Checkpoint tests use the T helper API (see harnessCommon).
   ============================================================ */
(function () {
  "use strict";

  var RUN_TIMEOUT = 7000;   // whole-run watchdog (ms)

  /* ============================================================
     Harness code — these functions are STRINGIFIED and injected
     into the sandbox (worker or iframe). They must be fully
     self-contained and never reference outer variables.
     ============================================================ */

  function harnessCommon() {
    var g = (typeof self !== "undefined") ? self : window;
    g.__LOGS = [];
    /* The Request constructor's headers carry guard "request", which
       silently drops forbidden names — Origin included. Deployment lessons
       teach CORS by constructing cross-origin Requests, so rebuild each
       new Request's headers as a guard-free Headers (standalone Headers
       has no guard) merged with everything the init supplied. The object
       is still a real platform Request — instanceof, url, method, json()
       all untouched. */
    (function () {
      var NR = g.Request;
      if (typeof NR !== "function") return;
      g.Request = function Request(input, init) {
        var req = new NR(input, init);
        var h = new g.Headers(req.headers);
        if (init && init.headers) new g.Headers(init.headers).forEach(function (v, k) { h.set(k, v); });
        else if (input instanceof NR) input.headers.forEach(function (v, k) { h.set(k, v); });
        try { Object.defineProperty(req, "headers", { value: h, configurable: true }); } catch (e) {}
        return req;
      };
      g.Request.prototype = NR.prototype;
    })();
    // Sandboxed iframes have an opaque origin, so touching the REAL
    // localStorage throws. Give lessons a faithful in-memory stand-in.
    if (typeof window !== "undefined") {
      (function () {
        var mem = {};
        var shim = {
          getItem: function (k) { return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null; },
          setItem: function (k, v) { mem[String(k)] = String(v); },
          removeItem: function (k) { delete mem[String(k)]; },
          clear: function () { mem = {}; },
          key: function (i) { return Object.keys(mem)[i] || null; },
          get length() { return Object.keys(mem).length; }
        };
        var broken = false;
        try { window.localStorage.getItem("x"); } catch (e) { broken = true; }
        if (broken) {
          try { Object.defineProperty(window, "localStorage", { value: shim, configurable: true }); } catch (e2) {}
        }
      })();
    }
    function fmt(a) {
      try {
        if (typeof a === "string") return a;
        if (a instanceof Error) return a.name + ": " + a.message;
        if (typeof a === "function") return "ƒ " + (a.name || "anonymous") + "()";
        if (a === undefined) return "undefined";
        var s = JSON.stringify(a);
        return (s === undefined) ? String(a) : s;
      } catch (e) { return String(a); }
    }
    /* Honest stack traces. Learner code is labelled `//# sourceURL=script.js`
       (worker eval and iframe script alike), so V8 knows which frames are
       theirs. This hook makes `e.stack` read the way Chrome prints it for a
       real script — "TypeError: …" then "    at fn (script.js:12:5)" — and
       drops every frame the learner did not write: harness code, the blob
       URL, and checkpoint code (which the worker appends to the same eval,
       past __USER_LINES). Without it a debugging lesson would be teaching
       the learner to read frames that point at nothing. */
    g.__USER_LINES = Infinity;   // the worker narrows this to the learner's file
    Error.prepareStackTrace = function (err, sites) {
      var head;
      try { head = String(err); } catch (e0) { head = "Error"; }
      var out = [];
      for (var i = 0; i < sites.length; i++) {
        try {
          var s = sites[i];
          var file = s.getScriptNameOrSourceURL ? s.getScriptNameOrSourceURL() : s.getFileName();
          if (file !== "script.js") continue;
          var line = s.getLineNumber(), col = s.getColumnNumber();
          if (line > g.__USER_LINES) continue;
          var fn = s.getFunctionName();
          out.push("    at " + (fn && fn !== "eval" ? fn + " (script.js:" + line + ":" + col + ")" : "script.js:" + line + ":" + col));
        } catch (e1) {}
      }
      return [head].concat(out).join("\n");
    };
    /* "in badPrice() at line 12" / "at line 12" for the first frame the
       learner owns, or "" when the error came from somewhere else (a failed
       T.expect is thrown by harness code, which has no such frame). */
    g.__where = function (e) {
      var m;
      try { m = /\n {4}at (?:(\S+) \()?script\.js:(\d+):\d+/.exec(String(e && e.stack || "")); } catch (e2) { m = null; }
      if (!m) return "";
      return (m[1] ? "in " + m[1] + "() " : "") + "at line " + m[2];
    };

    /* Console. Every method a lesson might reach for is captured into __LOGS
       so T.logged()/T.countLogged() can grade it. THESE SHAPES ARE PINNED —
       Debugging & Diagnosis U4 asserts them, so changing one breaks it:
         table(rows)    a header line "id | name | qty", then one " | "-joined
                        line per row. Columns are keys in first-seen order; a
                        primitive row fills a "value" column; a keyed object of
                        rows gets a leading "(key)" column.
         count(label)   "label: 3"               (label defaults to "default")
         time/timeEnd   "label: 12ms"            (never assert the number)
         assert(c, msg) "Assertion failed: msg"  at level error, only when c is falsy
         trace(msg)     "Trace: msg", then "    at …" per frame the learner owns
         group(label)   prints the label, then indents every later line by two
                        spaces per level until groupEnd()
       debug and dir log like log. One call = one __LOGS entry, except table,
       which pushes one entry per line so rows can be counted. */
    var depth = 0, counts = {}, timers = {};
    function emit(level, text) {
      var pad = new Array(depth + 1).join("  ");
      text = pad + String(text).split("\n").join("\n" + pad);
      g.__LOGS.push(text);
      g.__send({ type: "console", level: level, text: text });
    }
    function joinArgs(args) { return Array.prototype.slice.call(args).map(fmt).join(" "); }
    function native(k) { return (g.console && g.console[k]) ? g.console[k].bind(g.console) : function () {}; }
    function labelOf(l) { return l === undefined ? "default" : String(l); }
    ["log", "info", "warn", "error", "debug", "dir"].forEach(function (k) {
      var orig = native(k);
      var level = (k === "debug" || k === "dir") ? "log" : k;
      g.console[k] = function () {
        orig.apply(null, arguments);
        emit(level, joinArgs(arguments));
      };
    });
    g.console.table = function (rows) {
      if (rows === null || typeof rows !== "object") { emit("log", fmt(rows)); return; }
      var keyed = !Array.isArray(rows), ids = Object.keys(rows), cols = [];
      function isObj(r) { return r !== null && typeof r === "object"; }
      ids.forEach(function (id) {
        var r = rows[id];
        (isObj(r) ? Object.keys(r) : ["value"]).forEach(function (c) { if (cols.indexOf(c) === -1) cols.push(c); });
      });
      function cell(r, c) {
        if (isObj(r)) return Object.prototype.hasOwnProperty.call(r, c) ? fmt(r[c]) : "";
        return c === "value" ? fmt(r) : "";
      }
      emit("log", (keyed ? ["(key)"] : []).concat(cols).join(" | "));
      ids.forEach(function (id) {
        emit("log", (keyed ? [id] : []).concat(cols.map(function (c) { return cell(rows[id], c); })).join(" | "));
      });
    };
    g.console.count = function (l) { l = labelOf(l); counts[l] = (counts[l] || 0) + 1; emit("log", l + ": " + counts[l]); };
    g.console.countReset = function (l) { counts[labelOf(l)] = 0; };
    g.console.time = function (l) { timers[labelOf(l)] = Date.now(); };
    function lap(l, end) {
      l = labelOf(l);
      if (!Object.prototype.hasOwnProperty.call(timers, l)) { emit("warn", "Timer '" + l + "' does not exist"); return; }
      emit("log", l + ": " + (Date.now() - timers[l]) + "ms");
      if (end) delete timers[l];
    }
    g.console.timeLog = function (l) { lap(l, false); };
    g.console.timeEnd = function (l) { lap(l, true); };
    g.console.assert = function (cond) {
      if (cond) return;
      var rest = Array.prototype.slice.call(arguments, 1);
      emit("error", "Assertion failed" + (rest.length ? ": " + rest.map(fmt).join(" ") : ""));
    };
    g.console.group = g.console.groupCollapsed = function () {
      emit("log", arguments.length ? joinArgs(arguments) : "console.group");
      depth++;
    };
    g.console.groupEnd = function () { if (depth > 0) depth--; };
    g.console.trace = function () {
      var lines = String(new Error().stack).split("\n").slice(1);   // our own Error: frames only
      emit("log", ["Trace" + (arguments.length ? ": " + joinArgs(arguments) : "")].concat(lines).join("\n"));
    };

    /* probe(name, value) — a hand-rolled watchpoint. Records a DEEP COPY of
       the value at the moment it was probed and returns the value untouched,
       so it drops into any expression: `const total = probe("total", sum(xs))`.
       The copy is the point: console.log(obj) in a real DevTools shows the
       object as it is NOW, after later mutation; the timeline shows what it
       WAS. Depth-limited with a cycle guard. Shown in the console panel, but
       kept out of __LOGS so it never satisfies a T.logged() check. */
    g.__TRACE = [];
    function snap(v, d, stack) {
      if (typeof v === "function") return "ƒ " + (v.name || "anonymous") + "()";
      if (v === null || typeof v !== "object") return v;
      if (stack.indexOf(v) !== -1) return "[Circular]";
      if (d >= 6) return Array.isArray(v) ? "[Array]" : "[Object]";
      stack.push(v);
      var out;
      if (Array.isArray(v)) out = v.map(function (x) { return snap(x, d + 1, stack); });
      else { out = {}; Object.keys(v).forEach(function (k) { out[k] = snap(v[k], d + 1, stack); }); }
      stack.pop();
      return out;
    }
    g.probe = function (name, value) {
      var rec = { n: g.__TRACE.length, name: String(name), value: snap(value, 0, []) };
      g.__TRACE.push(rec);
      g.__send({ type: "console", level: "info", text: "◆ " + rec.name + " = " + fmt(rec.value) });
      return value;
    };

    g.__T_STEPS = [];
    g.__T_QUEUE = [];
    g.T = {
      /* --- DOM helpers (web lessons) --- */
      $: function (s) { return (typeof document !== "undefined") ? document.querySelector(s) : null; },
      $$: function (s) { return (typeof document !== "undefined") ? Array.prototype.slice.call(document.querySelectorAll(s)) : []; },
      text: function (s) { var n = g.T.$(s); return n ? (n.textContent || "").replace(/\s+/g, " ").trim() : null; },
      val: function (s) { var n = g.T.$(s); return n ? n.value : null; },
      attr: function (s, name) { var n = g.T.$(s); return n ? n.getAttribute(name) : null; },
      count: function (s) { return g.T.$$(s).length; },
      css: function (s, prop) {
        var n = g.T.$(s);
        if (!n) return null;
        try { return getComputedStyle(n).getPropertyValue(prop).trim(); } catch (e) { return null; }
      },
      /* --- CSSOM helpers: inspect the learner's stylesheet as WRITTEN
             (robust for flexbox/grid/media-query lessons, independent of
             the preview's current viewport size) --- */
      rules: function () {
        var out = [];
        if (typeof document === "undefined") return out;
        function walk(list) {
          for (var i = 0; i < list.length; i++) {
            var r = list[i];
            out.push(r);
            if (r.cssRules) { try { walk(r.cssRules); } catch (e) {} }
          }
        }
        for (var i = 0; i < document.styleSheets.length; i++) {
          try { walk(document.styleSheets[i].cssRules); } catch (e) {}
        }
        return out;
      },
      ruleFor: function (sel) {
        // LAST matching rule wins — starters often pre-define the selector.
        sel = String(sel).replace(/\s+/g, " ").trim().toLowerCase();
        var rules = g.T.rules();
        var hit = null;
        for (var i = 0; i < rules.length; i++) {
          if (rules[i].parentRule && rules[i].parentRule.media) continue; // media-scoped → mediaDecl's turf
          var st = rules[i].selectorText;
          if (!st) continue;
          var parts = st.split(",").map(function (p) { return p.replace(/\s+/g, " ").trim().toLowerCase(); });
          if (parts.indexOf(sel) !== -1) hit = rules[i].style;
        }
        return hit;
      },
      decl: function (sel, prop) {
        // Scan ALL rules matching the selector; the last one that sets the
        // property wins (mirrors the cascade for equal specificity).
        sel = String(sel).replace(/\s+/g, " ").trim().toLowerCase();
        var rules = g.T.rules();
        var out = null;
        for (var i = 0; i < rules.length; i++) {
          if (rules[i].parentRule && rules[i].parentRule.media) continue; // media-scoped → mediaDecl's turf
          var st = rules[i].selectorText;
          if (!st) continue;
          var parts = st.split(",").map(function (p) { return p.replace(/\s+/g, " ").trim().toLowerCase(); });
          if (parts.indexOf(sel) === -1) continue;
          var v = String(rules[i].style.getPropertyValue(prop) || "").trim();
          if (v) out = v;
        }
        return out;
      },
      sheet: function () {
        // The learner's stylesheet(s) exactly as WRITTEN (hex stays hex,
        // hsl stays hsl) — for checks that grade notation, not effect.
        return g.T.$$("style").map(function (s) { return s.textContent || ""; }).join("\n");
      },
      hasMedia: function (needle) {
        needle = String(needle).replace(/\s+/g, "");
        return g.T.rules().some(function (r) {
          return r.media && String(r.media.mediaText || "").replace(/\s+/g, "").indexOf(needle) !== -1;
        });
      },
      mediaDecl: function (mediaNeedle, sel, prop) {
        mediaNeedle = String(mediaNeedle).replace(/\s+/g, "");
        sel = String(sel).replace(/\s+/g, " ").trim().toLowerCase();
        var rules = g.T.rules();
        for (var i = 0; i < rules.length; i++) {
          var r = rules[i];
          if (!r.media || String(r.media.mediaText || "").replace(/\s+/g, "").indexOf(mediaNeedle) === -1) continue;
          for (var j = 0; j < r.cssRules.length; j++) {
            var inner = r.cssRules[j];
            if (!inner.selectorText) continue;
            var parts = inner.selectorText.split(",").map(function (p) { return p.replace(/\s+/g, " ").trim().toLowerCase(); });
            if (parts.indexOf(sel) !== -1) return String(inner.style.getPropertyValue(prop) || "").trim();
          }
        }
        return null;
      },
      /* --- assertions --- */
      expect: function (cond, msg) { if (!cond) throw new Error(msg || "Check failed"); return true; },
      eq: function (got, want, msg) {
        var a, b;
        try { a = JSON.stringify(got); b = JSON.stringify(want); } catch (e) { a = String(got); b = String(want); }
        if (a !== b) throw new Error((msg ? msg + " — " : "") + "expected " + b + " but got " + a);
        return true;
      },
      close: function (got, want, tol, msg) {
        if (typeof got !== "number" || Math.abs(got - want) > (tol == null ? 1e-9 : tol))
          throw new Error((msg ? msg + " — " : "") + "expected about " + want + " but got " + String(got));
        return true;
      },
      /* --- mutation testing (Testing Fundamentals) ---
         Swap the learner's own function for a broken one, run their suite,
         restore — the grading contract "a test that can't fail isn't a test".
         Reaches the GLOBAL binding, which is where `function` and `var`
         declarations land; a `const`/`let` in the eval's lexical scope will
         NOT be shadowed by a global assignment, so anything a checkpoint
         mutates must be declared `function name(...)` in the starter.
         Spec events are silenced during the swap so the learner's panel
         keeps showing their own suite against the REAL code, not a mutant. */
      mutate: function (name, impl, runFn) {
        var orig = g[name];
        if (typeof orig !== "function")
          throw new Error("The checks need to swap in a broken " + name + "() — keep it declared with `function " + name + "(...)`.");
        g[name] = impl;
        if (g[name] === orig)
          throw new Error("Could not replace " + name + "() — is it declared with const? Change it back to `function`.");
        var silentBefore = g.__SPEC_SILENT;
        g.__SPEC_SILENT = true;
        function restore() { g[name] = orig; g.__SPEC_SILENT = silentBefore; }
        try {
          var r = runFn();
          if (r && typeof r.then === "function")
            return r.then(function (v) { restore(); return v; }, function (e) { restore(); throw e; });
          restore();
          return r;
        } catch (e) { restore(); throw e; }
      },
      /* --- interaction (web lessons) --- */
      click: function (s) {
        var n = g.T.$(s);
        if (!n) throw new Error("Could not find " + s + " to click");
        n.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
      },
      type: function (s, value) {
        var n = g.T.$(s);
        if (!n) throw new Error("Could not find input " + s);
        n.value = value;
        n.dispatchEvent(new Event("input", { bubbles: true }));
        n.dispatchEvent(new Event("change", { bubbles: true }));
      },
      submit: function (s) {
        var n = g.T.$(s);
        if (!n) throw new Error("Could not find form " + s);
        n.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
      },
      /* --- misc --- */
      logs: function () { return g.__LOGS.slice(); },
      logLines: function () { return g.__LOGS.slice(); },
      logged: function (needle) {
        needle = String(needle).toLowerCase();
        return g.__LOGS.some(function (t) { return String(t).toLowerCase().indexOf(needle) !== -1; });
      },
      /* How many log entries contain the needle — CASE-SENSITIVE, unlike
         logged(), so a count can't be padded by an unrelated line that
         happens to share a word in another case. */
      countLogged: function (needle) {
        needle = String(needle);
        return g.__LOGS.filter(function (t) { return String(t).indexOf(needle) !== -1; }).length;
      },
      /* --- probe() timeline (Debugging & Diagnosis U4) --- */
      trace: function () { return JSON.parse(JSON.stringify(g.__TRACE)); },
      traceOf: function (name) {
        return JSON.parse(JSON.stringify(g.__TRACE.filter(function (r) { return r.name === name; }).map(function (r) { return r.value; })));
      },
      firstDivergence: function (name, expected) {
        var got = g.T.traceOf(name), n = Math.max(got.length, expected.length);
        for (var i = 0; i < n; i++) if (JSON.stringify(got[i]) !== JSON.stringify(expected[i])) return i;
        return -1;
      },
      sleep: function (ms) { return new Promise(function (res) { setTimeout(res, ms); }); },
      step: function (i, fn) { g.__T_QUEUE.push({ i: i, fn: fn }); }
    };

    g.__T_RUN = function (done) {
      var idx = 0;
      function next() {
        if (idx >= g.__T_QUEUE.length) { done(g.__T_STEPS); return; }
        var s = g.__T_QUEUE[idx++];
        var finished = false;
        var guard = setTimeout(function () {
          fail(new Error("This check took too long — is a promise never resolving?"));
        }, 2500);
        function ok() { if (finished) return; finished = true; clearTimeout(guard); g.__T_STEPS.push({ i: s.i, pass: true }); next(); }
        /* An error the LEARNER'S code threw (not a failed T.expect) says where:
           "Cannot read properties of null (reading 'name') — thrown in
           total(), line 4". */
        function fail(e) {
          if (finished) return; finished = true; clearTimeout(guard);
          var msg = (e && e.message) || String(e), at = g.__where(e);
          g.__T_STEPS.push({ i: s.i, pass: false, msg: at ? msg + " — thrown " + at : msg });
          next();
        }
        try {
          var r = s.fn();
          if (r && typeof r.then === "function") r.then(ok, fail);
          else ok();
        } catch (e) { fail(e); }
      }
      next();
    };
  }

  /* Fake fetch() for API lessons. Two modes:
       lesson.mock   — a data map "METHOD /path" (or "/path" for GET) → body
                       or {__status, body}. Static; can't read the request.
       lesson.mockFn — a SOURCE STRING evaluating to (url, opts) => {status, body}
                       (or a plain body). Lets a test assert what the learner's
                       fetch actually SENT — every call is recorded on
                       g.__CALLS as {url, method, headers, body}, which is the
                       only way to grade "did you send the token / CSRF header /
                       stop leaking the key". Backwards compatible: a lesson
                       with only `mock` behaves exactly as before. */
  function harnessMock(MOCK, MOCKFN_SRC) {
    var g = (typeof self !== "undefined") ? self : window;
    g.__CALLS = [];
    var fn = null;
    if (MOCKFN_SRC) { try { fn = (0, eval)("(" + MOCKFN_SRC + ")"); } catch (e) { fn = null; } }
    function mkRes(status, data) {
      return {
        ok: status >= 200 && status < 300,
        status: status,
        headers: { get: function () { return null; } },
        json: function () { return Promise.resolve(JSON.parse(JSON.stringify(data))); },
        text: function () { return Promise.resolve(typeof data === "string" ? data : JSON.stringify(data)); }
      };
    }
    function headerMap(h) {
      var out = {};
      if (!h) return out;
      if (typeof h.forEach === "function" && !Array.isArray(h)) { h.forEach(function (v, k) { out[String(k).toLowerCase()] = v; }); return out; }
      Object.keys(h).forEach(function (k) { out[String(k).toLowerCase()] = h[k]; });
      return out;
    }
    g.fetch = function (url, opts) {
      opts = opts || {};
      var method = String(opts.method || "GET").toUpperCase();
      var path = String(url).split("?")[0];
      g.__CALLS.push({ url: String(url), method: method, headers: headerMap(opts.headers), body: opts.body });
      return new Promise(function (resolve) {
        setTimeout(function () {
          if (fn) {
            var r;
            try { r = fn(String(url), opts); } catch (e) { resolve(mkRes(500, { error: String(e && e.message || e) })); return; }
            if (r && typeof r === "object" && r.status !== undefined && "body" in r) resolve(mkRes(r.status, r.body));
            else resolve(mkRes(200, r));
            return;
          }
          var hit = MOCK ? MOCK[method + " " + path] : undefined;
          if (hit === undefined && method === "GET" && MOCK) hit = MOCK[path];
          if (hit === undefined) resolve(mkRes(404, { error: "No such endpoint: " + method + " " + path }));
          else if (hit && typeof hit === "object" && hit.__status !== undefined) resolve(mkRes(hit.__status, hit.body));
          else resolve(mkRes(200, hit));
        }, 60);
      });
    };
  }

  /* Synchronous crypto primitives for the auth/password lessons (Web
     Security U6, Authentication U4-U8): a pure-JS sha256, a random-hex
     helper, and an iterated slowHash(str, salt, rounds) — plus, for signing,
     BYTE-level sha256Bytes / sha1Bytes / hmac(alg, key, msg), utf8, hex and
     timingSafeEqual. The string sha256 alone can't carry HMAC: its 0x36/0x5c
     pads produce bytes above 0x7F that a string round-trip would re-encode.
     Pure JS because crypto.subtle is async and absent on file://; injected
     only when lesson.crypto is set. tools/test-crypto.js checks all of it
     against RFC vectors and Node's crypto. base64url is deliberately NOT
     here: building it is an Authentication lesson. */
  function harnessCrypto() {
    var g = (typeof self !== "undefined") ? self : window;
    function rrot(n, x) { return (x >>> n) | (x << (32 - n)); }
    function rotl(n, x) { return (x << n) | (x >>> (32 - n)); }
    var K = [
      0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
      0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
      0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
      0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
      0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
      0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
      0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
      0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
    /* Strings are UTF-8 encoded exactly as the original string-only sha256
       did, so every existing hash is unchanged; arrays and typed arrays are
       taken as raw bytes. */
    function utf8(s) {
      var a = unescape(encodeURIComponent(String(s)));
      var out = new Uint8Array(a.length);
      for (var i = 0; i < a.length; i++) out[i] = a.charCodeAt(i);
      return out;
    }
    function bytes(x) {
      if (typeof x === "string") return utf8(x);
      if (x instanceof Uint8Array) return x;
      if (x && typeof x.length === "number") {
        var out = new Uint8Array(x.length);
        for (var i = 0; i < x.length; i++) out[i] = x[i] & 0xff;
        return out;
      }
      throw new TypeError("expected a string or an array of bytes, got " + typeof x);
    }
    function hex(u8) {
      var s = "";
      for (var i = 0; i < u8.length; i++) s += ("0" + (u8[i] & 0xff).toString(16)).slice(-2);
      return s;
    }
    // Padding shared by SHA-1 and SHA-256: 0x80, zeros, 64-bit big-endian bit length.
    function pad(msg) {
      var len = msg.length, total = Math.ceil((len + 9) / 64) * 64, p = new Uint8Array(total);
      p.set(msg);
      p[len] = 0x80;
      for (var i = 0; i < 8; i++) p[total - 1 - i] = Math.floor(len * 8 / Math.pow(2, i * 8)) & 0xff;
      return p;
    }
    function word(p, j) { return (p[j] << 24) | (p[j + 1] << 16) | (p[j + 2] << 8) | p[j + 3]; }
    function out32(h) {
      var o = new Uint8Array(h.length * 4);
      for (var i = 0; i < h.length; i++) {
        o[i * 4] = h[i] >>> 24; o[i * 4 + 1] = h[i] >>> 16; o[i * 4 + 2] = h[i] >>> 8; o[i * 4 + 3] = h[i];
      }
      return o;
    }
    function sha1Bytes(input) {
      var p = pad(bytes(input));
      var h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
      var w = new Array(80), i, j;
      for (i = 0; i < p.length; i += 64) {
        for (j = 0; j < 16; j++) w[j] = word(p, i + j * 4);
        for (j = 16; j < 80; j++) w[j] = rotl(1, w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16]);
        var a = h[0], b = h[1], c = h[2], d = h[3], e = h[4];
        for (j = 0; j < 80; j++) {
          var f, k;
          if (j < 20) { f = (b & c) | (~b & d); k = 0x5a827999; }
          else if (j < 40) { f = b ^ c ^ d; k = 0x6ed9eba1; }
          else if (j < 60) { f = (b & c) | (b & d) | (c & d); k = 0x8f1bbcdc; }
          else { f = b ^ c ^ d; k = 0xca62c1d6; }
          var t = (rotl(5, a) + f + e + k + w[j]) | 0;
          e = d; d = c; c = rotl(30, b); b = a; a = t;
        }
        h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0;
        h[3] = (h[3] + d) | 0; h[4] = (h[4] + e) | 0;
      }
      return out32(h);
    }
    function sha256Bytes(input) {
      var p = pad(bytes(input));
      var h = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
      var i, j;
      var w = new Array(64);
      for (i = 0; i < p.length; i += 64) {
        for (j = 0; j < 16; j++) w[j] = word(p, i + j * 4);
        for (j = 16; j < 64; j++) {
          var s0 = rrot(7, w[j-15]) ^ rrot(18, w[j-15]) ^ (w[j-15] >>> 3);
          var s1 = rrot(17, w[j-2]) ^ rrot(19, w[j-2]) ^ (w[j-2] >>> 10);
          w[j] = (w[j-16] + s0 + w[j-7] + s1) | 0;
        }
        var a=h[0],b=h[1],c=h[2],d=h[3],e=h[4],f=h[5],gg=h[6],hh=h[7];
        for (j = 0; j < 64; j++) {
          var S1 = rrot(6,e) ^ rrot(11,e) ^ rrot(25,e);
          var ch = (e & f) ^ (~e & gg);
          var t1 = (hh + S1 + ch + K[j] + w[j]) | 0;
          var S0 = rrot(2,a) ^ rrot(13,a) ^ rrot(22,a);
          var maj = (a & b) ^ (a & c) ^ (b & c);
          var t2 = (S0 + maj) | 0;
          hh=gg; gg=f; f=e; e=(d+t1)|0; d=c; c=b; b=a; a=(t1+t2)|0;
        }
        h[0]=(h[0]+a)|0; h[1]=(h[1]+b)|0; h[2]=(h[2]+c)|0; h[3]=(h[3]+d)|0;
        h[4]=(h[4]+e)|0; h[5]=(h[5]+f)|0; h[6]=(h[6]+gg)|0; h[7]=(h[7]+hh)|0;
      }
      return out32(h);
    }
    function sha256(str) { return hex(sha256Bytes(String(str))); }
    // RFC 2104. Keys longer than the 64-byte block are hashed first.
    function hmac(alg, key, msg) {
      var H = alg === "sha256" ? sha256Bytes : alg === "sha1" ? sha1Bytes : null;
      if (!H) throw new Error('hmac(alg, key, msg): alg must be "sha256" or "sha1", got ' + JSON.stringify(alg));
      var k = bytes(key), m = bytes(msg), i;
      if (k.length > 64) k = H(k);
      var inner = new Uint8Array(64 + m.length);
      for (i = 0; i < 64; i++) inner[i] = (k[i] || 0) ^ 0x36;
      inner.set(m, 64);
      var ih = H(inner);
      var outer = new Uint8Array(64 + ih.length);
      for (i = 0; i < 64; i++) outer[i] = (k[i] || 0) ^ 0x5c;
      outer.set(ih, 64);
      return H(outer);
    }
    /* Touches every byte whatever the first mismatch; only the LENGTH can
       leak, and signatures of one algorithm all share a length. */
    function timingSafeEqual(a, b) {
      a = bytes(a); b = bytes(b);
      var diff = a.length ^ b.length;
      for (var i = 0; i < a.length; i++) diff |= a[i] ^ (i < b.length ? b[i] : 0);
      return diff === 0;
    }
    g.sha256 = sha256;
    g.sha256Bytes = sha256Bytes;
    g.sha1Bytes = sha1Bytes;
    g.hmac = hmac;
    g.utf8 = utf8;
    g.hex = hex;
    g.timingSafeEqual = timingSafeEqual;
    g.randHex = function (n) {
      n = n || 16;
      var out = "";
      try {
        var arr = new Uint8Array(n);
        (g.crypto || {}).getRandomValues.call(g.crypto, arr);
        for (var i = 0; i < n; i++) out += ("0" + arr[i].toString(16)).slice(-2);
        return out;
      } catch (e) {
        // Deterministic fallback via a counter — sandbox forbids Math.random
        // in graded paths, and a salt only needs to be unique, not secret here.
        g.__RAND_CTR = (g.__RAND_CTR || 0) + 1;
        return sha256("salt" + g.__RAND_CTR).slice(0, n * 2);
      }
    };
    g.slowHash = function (str, salt, rounds) {
      var h = sha256(String(salt) + ":" + String(str));
      rounds = rounds || 1;
      for (var i = 0; i < rounds; i++) h = sha256(h + ":" + salt);
      return h;
    };
  }

  /* A fake clock for expiry lessons (Authentication: session timeouts, JWT
     exp/nbf, TOTP steps, reset-token lifetimes). Lessons must be
     deterministic, so the real clock is off limits — `lesson.clock: <start
     ms>` injects now() and T.advance(ms) instead. Injected after
     harnessCommon, which owns T. validate.js fails an auth- lesson that
     reads Date.now or new Date(). */
  function harnessClock(START) {
    var g = (typeof self !== "undefined") ? self : window;
    var t = Number(START) || 0;
    g.now = function () { return t; };
    g.T.advance = function (ms) {
      if (typeof ms !== "number" || !(ms >= 0)) throw new Error("T.advance(ms) needs a non-negative number of milliseconds, got " + JSON.stringify(ms));
      t += ms;
      return t;
    };
  }

  /* A warehouse for the Data Pipelines & ETL course (idempotent loads,
     incremental updates, SCD2 history). Tables with enforced keys and column
     types, real all-or-nothing transactions, and grader-only fault injection
     that can cut the connection between two row writes — which is how a
     lesson proves that a crashed load plus a rerun equals one clean run.
     Autocommit is real: outside db.tx, a batch that fails partway leaves the
     rows written before it. Gated on `lesson.warehouse`; the contract is
     tools/test-warehouse.js, which was written before this code. */
  function harnessWarehouse(SPEC) {
    var g = (typeof self !== "undefined") ? self : window;
    var spec = SPEC || {};
    var tables = {};

    function err(name, msg) { var e = new Error(msg); e.name = name; return e; }
    function copy(v) { return JSON.parse(JSON.stringify(v)); }

    var DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function realDay(s) {
      var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
      if (!m) return false;
      var y = +m[1], mo = +m[2], d = +m[3];
      if (mo < 1 || mo > 12 || d < 1) return false;
      var leap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
      return d <= (mo === 2 && leap ? 29 : DAYS[mo - 1]);
    }
    function okType(type, v) {
      if (type === "int") return typeof v === "number" && Number.isSafeInteger(v);
      if (type === "text") return typeof v === "string";
      if (type === "bool") return typeof v === "boolean";
      if (type === "date") return typeof v === "string" && realDay(v);
      if (type === "timestamp") {
        if (typeof v !== "string") return false;
        var m = /^(\d{4}-\d{2}-\d{2})T\d{2}:\d{2}:\d{2}(\.\d{1,3})?(Z|[+-]\d{2}:\d{2})$/.exec(v);
        return !!m && realDay(m[1]);
      }
      return false;
    }

    Object.keys(spec.tables || {}).forEach(function (name) {
      var t = spec.tables[name] || {}, columns = {};
      Object.keys(t.columns || {}).forEach(function (c) {
        var raw = String(t.columns[c]), nullable = raw.slice(-1) === "?";
        var type = nullable ? raw.slice(0, -1) : raw;
        if (["int", "text", "bool", "date", "timestamp"].indexOf(type) === -1)
          throw err("SpecError", name + "." + c + ": unknown column type " + JSON.stringify(raw));
        columns[c] = { type: type, nullable: nullable };
      });
      if (!t.key || !t.key.length) throw err("SpecError", name + ": a table needs a key");
      t.key.forEach(function (c) {
        if (!columns[c]) throw err("SpecError", name + ": key column " + c + " is not a column of the table");
        if (columns[c].nullable) throw err("SpecError", name + ": key column " + c + " must not be nullable");
      });
      tables[name] = { key: t.key.slice(), columns: columns, rows: [], index: new Map() };
    });

    function table(name) {
      if (!tables[name]) throw err("UnknownTable", "no table named " + JSON.stringify(name));
      return tables[name];
    }
    function keyOf(t, row) {
      return t.key.map(function (c) { return JSON.stringify(row[c]); }).join(" ");
    }
    /* Validate one row against the table and return a fresh row holding
       exactly the declared columns. This throws before any write happens, so
       a bad row never consumes an injected fault. */
    function clean(t, name, raw) {
      if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw err("TypeMismatch", name + ": a row must be an object");
      Object.keys(raw).forEach(function (c) {
        if (!t.columns[c]) throw err("UnknownColumn", name + " has no column " + JSON.stringify(c));
      });
      var out = {};
      Object.keys(t.columns).forEach(function (c) {
        var col = t.columns[c], v = raw[c];
        if (v === undefined) {
          if (!col.nullable) throw err("MissingColumn", name + "." + c + " is required");
          out[c] = null;
        } else if (v === null) {
          if (!col.nullable) throw err("TypeMismatch", name + "." + c + " is not nullable");
          out[c] = null;
        } else {
          if (!okType(col.type, v)) throw err("TypeMismatch", name + "." + c + " expects " + col.type + ", got " + JSON.stringify(v));
          out[c] = v;
        }
      });
      return out;
    }

    var writes = 0, failAt = null, depth = 0;
    function noteWrite() {
      if (failAt !== null && writes >= failAt) { failAt = null; throw err("ConnectionLost", "connection lost to the warehouse"); }
      writes++;
    }
    function asRows(rows) { return Array.isArray(rows) ? rows : [rows]; }
    function matches(row, pred) {
      if (pred == null) return true;
      if (typeof pred === "function") return !!pred(copy(row));
      return Object.keys(pred).every(function (c) { return row[c] === pred[c]; });
    }

    g.db = {
      insert: function (name, rows) {
        var t = table(name), n = 0;
        asRows(rows).forEach(function (raw) {
          var row = clean(t, name, raw), k = keyOf(t, row);
          if (t.index.has(k))
            throw err("DuplicateKey", name + " already holds " + t.key.map(function (c) { return c + "=" + JSON.stringify(row[c]); }).join(", "));
          noteWrite();
          t.rows.push(row);
          t.index.set(k, row);
          n++;
        });
        return n;
      },
      upsert: function (name, rows) {
        var t = table(name), out = { inserted: 0, updated: 0 };
        asRows(rows).forEach(function (raw) {
          var row = clean(t, name, raw), k = keyOf(t, row), old = t.index.get(k);
          noteWrite();
          if (old) {
            t.rows[t.rows.indexOf(old)] = row;  // a whole-row replace, in place
            t.index.set(k, row);
            out.updated++;
          } else {
            t.rows.push(row);
            t.index.set(k, row);
            out.inserted++;
          }
        });
        return out;
      },
      "delete": function (name, pred) {
        var t = table(name), n = 0;
        t.rows.filter(function (r) { return matches(r, pred); }).forEach(function (row) {
          noteWrite();
          t.rows.splice(t.rows.indexOf(row), 1);
          t.index["delete"](keyOf(t, row));
          n++;
        });
        return n;
      },
      select: function (name, pred) {
        return table(name).rows.filter(function (r) { return matches(r, pred); }).map(copy);
      },
      count: function (name, pred) {
        return table(name).rows.filter(function (r) { return matches(r, pred); }).length;
      },
      tx: function (fn) {
        if (depth > 0) throw err("TxError", "transactions do not nest");
        var snapshot = {};
        Object.keys(tables).forEach(function (n) { snapshot[n] = tables[n].rows.map(copy); });
        depth = 1;
        try {
          var out = fn();
          depth = 0;
          return out;
        } catch (e) {
          depth = 0;
          Object.keys(snapshot).forEach(function (n) {  // all or nothing
            var t = tables[n];
            t.rows = snapshot[n];
            t.index = new Map();
            t.rows.forEach(function (r) { t.index.set(keyOf(t, r), r); });
          });
          throw e;
        }
      }
    };

    /* Seed rows are the lesson's starting state: validated, but not counted
       as writes and never hit by an injected fault. */
    Object.keys(spec.seed || {}).forEach(function (name) {
      var t = table(name);
      asRows(spec.seed[name]).forEach(function (raw) {
        var row = clean(t, name, raw), k = keyOf(t, row);
        if (t.index.has(k)) throw err("SpecError", name + ": duplicate key in seed data");
        t.rows.push(row);
        t.index.set(k, row);
      });
    });

    g.T = g.T || {};
    g.T.rows = function (name) { return table(name).rows.map(copy); };
    g.T.writes = function () { return writes; };
    g.T.failAfterWrites = function (n) { failAt = writes + Number(n); };
    g.T.clearFaults = function () { failAt = null; writes = 0; };
  }

  /* CSP enforcement lab (Web Security U7 L2). The preview iframe's own
     sandbox is fixed and a learner CSP in index.html would also gag the
     grader — so enforcement happens one level DOWN: __runCspLab(policy)
     mounts a nested sandboxed srcdoc iframe whose <head> carries the
     learner's policy as a real <meta http-equiv>, followed by a fixed
     battery of five payloads. Each payload writes its own outcome; a
     reporter posts the results object up, and the preview stashes it on
     window.__CSP_RESULTS for the grader to read after a sleep. This is
     REAL browser CSP enforcement, not a simulation. Injected only when
     lesson.cspLab is set. */
  function harnessCspLab() {
    var g = window;
    g.__CSP_RESULTS = null;
    var pending = false;
    window.addEventListener("message", function (ev) {
      var m = ev.data;
      if (m && m.__csplab === true) { pending = false; g.__CSP_RESULTS = m.results; }
    });
    /* The reporter carries nonce-RPT: it stands in for the PAGE'S OWN
       trusted inline script. A functional policy must let it run (via
       'nonce-RPT' or 'unsafe-inline'); the injected payloads never carry
       the nonce. If the policy is so strict it blocks even the reporter,
       nothing posts back — so the parent falls back to all-blocked after
       a timeout, which is the honest outcome for a policy that also
       breaks the page. Probe flags start false (= blocked); a payload
       that survives the policy sets its own flag true. */
    g.__runCspLab = function (policy) {
      g.__CSP_RESULTS = null;
      pending = true;
      var meta = policy ? '<meta http-equiv="Content-Security-Policy" content="' + String(policy).replace(/"/g, "&quot;") + '">' : "";
      // This whole function is stringified INTO the preview's own script
      // block, and buildSrcdoc then regex-scans the entire document for the
      // head-open, head-close and body-close tags (to inject its own harness
      // and grader) plus the string "script.js"; a literal opening-script
      // run would also flip the HTML parser into its double-escaped state.
      // So EVERY tag in the child battery is assembled from split pieces via
      // t(), and NO literal HTML tag (in angle brackets) appears anywhere in
      // this function — in code OR in comments. Keep it that way.
      function t(s) { return "<" + s + ">"; }
      var child =
        "<!DOCTYPE html>" + t("html") + t("head") + meta + t("/head") + t("body") +
        t("style") + "#m{color:rgb(1,2,3)}" + t("/style") +
        t('link rel="stylesheet" href="data:text/css,%23n%7Bcolor%3Argb(4%2C5%2C6)%7D"') +
        t('div id="m"') + "x" + t("/div") + t('div id="n"') + "y" + t("/div") +
        // init (nonce'd = the page's own trusted script): define the results
        // object BEFORE the payloads run, so a payload that survives the
        // policy can record itself. If the policy is too strict to run even
        // this nonce'd script, nothing records and the parent's timeout
        // reports all-blocked — the honest outcome for a page-breaking policy.
        t('script nonce="RPT"') +
        "window.__r={inlineScript:false,imgOnerror:false,evalCall:false,inlineStyle:false,ownStylesheet:false};" +
        t("/script") +
        // payload 1: injected inline script (NO nonce)
        t("script") + "window.__r&&(window.__r.inlineScript=true);" + t("/script") +
        // payload 2: injected inline event handler (NO nonce)
        t('img src="x" onerror="window.__r&&(window.__r.imgOnerror=true)"') +
        // reporter (nonce'd): probe eval, measure styles, post results up
        t('script nonce="RPT"') +
        "if(window.__r){try{(0,eval)('window.__r.evalCall=true');}catch(e){}" +
        "setTimeout(function(){" +
        "try{window.__r.inlineStyle=(getComputedStyle(document.getElementById('m')).color==='rgb(1, 2, 3)');}catch(e){}" +
        "try{window.__r.ownStylesheet=(getComputedStyle(document.getElementById('n')).color==='rgb(4, 5, 6)');}catch(e){}" +
        "parent.postMessage({__csplab:true,results:window.__r},'*');" +
        "},200);}" +
        t("/script") +
        t("/body") + t("/html");
      var f = document.createElement("iframe");
      f.setAttribute("sandbox", "allow-scripts");
      f.style.display = "none";
      f.srcdoc = child;
      document.body.appendChild(f);
      // Reporter blocked (policy too strict to run the page's own script) →
      // report all-blocked so the grader still resolves instead of hanging.
      setTimeout(function () {
        if (pending) { pending = false; g.__CSP_RESULTS = { inlineScript: false, imgOnerror: false, evalCall: false, inlineStyle: false, ownStylesheet: false, reporterBlocked: true }; }
      }, 900);
      return true;
    };
  }

  /* Spec runner for lessons that opt in via `lesson.spec: true` (Testing
     Fundamentals U4+): real describe/it/expect/beforeEach globals plus an
     async run() that records failures instead of crashing, and streams one
     {type:"spec"} message per test so the app can draw a green/red spec
     list — the green-bar feedback loop real Jest/Vitest gives.

     Injected AFTER harnessCommon and BEFORE learner code, so a lesson where
     the learner builds their own it()/run() (U1–U3) simply doesn't opt in —
     and even inside an opted-in lesson a learner `function it(...)` would
     shadow these. Follows the harnessMock precedent exactly: stringified
     into the sandbox, fully self-contained.

     Contract for checkpoint authors: run() is ASYNC — always `await run()`.
     It re-runs every registered test fresh, so mutation checkpoints can
     call it repeatedly; T.mutate silences the panel messages meanwhile. */
  function harnessSpec() {
    var g = (typeof self !== "undefined") ? self : window;
    var tests = [], eachHooks = [], suitePath = [], seq = 0;
    function fmt(v) {
      try {
        if (typeof v === "string") return JSON.stringify(v);
        var s = JSON.stringify(v);
        return (s === undefined) ? String(v) : s;
      } catch (e) { return String(v); }
    }
    g.describe = function (name, fn) {
      suitePath.push(String(name));
      try { fn(); } finally { suitePath.pop(); }
    };
    g.it = function (name, fn) {
      tests.push({ suite: suitePath.join(" › "), name: String(name), fn: fn });
    };
    g.beforeEach = function (fn) { eachHooks.push(fn); };
    g.expect = function (actual) {
      return {
        toBe: function (want) {
          if (actual !== want) throw new Error("expected " + fmt(want) + " but got " + fmt(actual) +
            (typeof actual === "object" && actual !== null && typeof want === "object" && want !== null ? " — different objects are never === (try toEqual)" : ""));
        },
        toEqual: function (want) {
          var a, b;
          try { a = JSON.stringify(actual); b = JSON.stringify(want); } catch (e) { a = String(actual); b = String(want); }
          if (a !== b) throw new Error("expected " + b + " but got " + a);
        },
        toBeTruthy: function () { if (!actual) throw new Error("expected a truthy value but got " + fmt(actual)); },
        toBeFalsy: function () { if (actual) throw new Error("expected a falsy value but got " + fmt(actual)); },
        toContain: function (item) {
          var okc = (typeof actual === "string") ? actual.indexOf(item) !== -1
            : (Array.isArray(actual) ? actual.indexOf(item) !== -1 : false);
          if (!okc) throw new Error("expected " + fmt(actual) + " to contain " + fmt(item));
        },
        toBeCloseTo: function (want, tol) {
          if (tol == null) tol = 0.005;
          if (typeof actual !== "number" || Math.abs(actual - want) > tol)
            throw new Error("expected about " + want + " but got " + fmt(actual));
        },
        toThrow: function () {
          if (typeof actual !== "function") throw new Error("toThrow needs a FUNCTION — pass () => code, not the result of calling it");
          var threw = false;
          try { actual(); } catch (e) { threw = true; }
          if (!threw) throw new Error("expected the function to throw, but it returned normally");
        }
      };
    };
    g.run = function () {
      var runId = ++seq;
      var res = { total: tests.length, passed: 0, failed: 0, results: [] };
      if (!g.__SPEC_SILENT) g.__send({ type: "specstart", run: runId, total: tests.length });
      var i = 0;
      function next() {
        if (i >= tests.length) {
          if (!g.__SPEC_SILENT) g.__send({ type: "specdone", run: runId, passed: res.passed, failed: res.failed, total: res.total });
          return Promise.resolve(res);
        }
        var t = tests[i++];
        return eachHooks.reduce(function (p, h) { return p.then(function () { return h(); }); }, Promise.resolve())
          .then(function () { return t.fn(); })
          .then(function () {
            res.passed++;
            res.results.push({ suite: t.suite, name: t.name, pass: true });
            if (!g.__SPEC_SILENT) g.__send({ type: "spec", run: runId, suite: t.suite, name: t.name, pass: true });
            return next();
          }, function (e) {
            var msg = (e && e.message) || String(e);
            res.failed++;
            res.results.push({ suite: t.suite, name: t.name, pass: false, error: msg });
            if (!g.__SPEC_SILENT) g.__send({ type: "spec", run: runId, suite: t.suite, name: t.name, pass: false, error: msg });
            return next();
          });
      }
      return next();
    };
  }

  /* ---------- helpers (main thread) ---------- */

  function stepsSource(lesson) {
    return (lesson.steps || []).map(function (s, i) {
      return "T.step(" + i + ", async function () {\n" + s.test + "\n});";
    }).join("\n");
  }

  function safeInline(js) { return String(js).replace(/<\/(script)/gi, "<\\/$1"); }
  function safeStyle(css) { return String(css).replace(/<\/(style)/gi, "<\\/$1"); }

  /* Insert an iteration guard into while/for loops so an accidental
     infinite loop inside the PREVIEW iframe (same thread as the app!)
     throws instead of freezing the page. Workers don't need this —
     they get terminated. */
  function guardLoops(src) {
    return String(src).replace(/\b(for|while)\s*\(((?:[^()]|\([^()]*\))*)\)\s*\{/g, function (m) {
      return m + " if (++__LOOPGUARD > 800000) { throw new Error('Loop ran 800,000+ times — possible infinite loop'); } ";
    });
  }

  /* ---------- operation counting (lesson.count — How Code Scales) ----------
     Big-O is about how WORK grows, so the complexity course grades a
     learner's function by counting operations at doubling input sizes,
     never by timing it (a timing depends on the machine). Two sources of
     work are counted: iterations of the learner's own loops, and elements
     the built-in scanners may visit (harnessCount wraps those while a
     measurement runs).

     instrumentLoops puts `__OPS++;` first in every braced for/while/do body,
     on the same line so line numbers don't move. One scanner also counts
     loops written WITHOUT braces, which the counter can't see into — T.growth
     refuses to measure those rather than let a hidden inner loop make
     quadratic code look linear. Comments and string literals are skipped;
     headers are matched with balanced parentheses, so `for (let i = f(g(x));`
     is still a loop. Contract: tools/test-concept.js. */
  function instrumentLoops(src) {
    src = String(src);
    var out = "", i = 0, n = src.length, braceless = 0;
    var lastCode = "";            // the last non-space code character emitted
    function isId(c) { return !!c && /[A-Za-z0-9_$]/.test(c); }
    /* Skip a string/template/comment starting at j; returns the index after it, or -1. */
    function skipNonCode(j) {
      var c = src[j], d = src[j + 1];
      if (c === "/" && d === "/") { var e = src.indexOf("\n", j); return e === -1 ? n : e; }
      if (c === "/" && d === "*") { var e2 = src.indexOf("*/", j + 2); return e2 === -1 ? n : e2 + 2; }
      if (c === '"' || c === "'" || c === "`") {
        for (var k = j + 1; k < n; k++) {
          if (src[k] === "\\") { k++; continue; }
          if (src[k] === c) return k + 1;
        }
        return n;
      }
      return -1;
    }
    /* Index of the next code character at or after j (skipping space and comments). */
    function nextCode(j) {
      while (j < n) {
        if (/\s/.test(src[j])) { j++; continue; }
        if (src[j] === "/" && (src[j + 1] === "/" || src[j + 1] === "*")) { j = skipNonCode(j); continue; }
        return j;
      }
      return n;
    }
    while (i < n) {
      var skip = skipNonCode(i);
      if (skip !== -1) { out += src.slice(i, skip); i = skip; continue; }
      var c = src[i];
      var word = null;
      if (!isId(src[i - 1]) && src[i - 1] !== ".") {
        if (src.substr(i, 3) === "for" && !isId(src[i + 3])) word = "for";
        else if (src.substr(i, 5) === "while" && !isId(src[i + 5])) word = "while";
        else if (src.substr(i, 2) === "do" && !isId(src[i + 2])) word = "do";
      }
      if (word === "do") {
        var b = nextCode(i + 2);
        out += src.slice(i, b);
        if (src[b] === "{") { out += "{ __OPS++;"; i = b + 1; lastCode = "{"; }
        else { braceless++; i = b; }
        continue;
      }
      if (word === "for" || word === "while") {
        var p = nextCode(i + word.length);
        if (src[p] !== "(") { out += c; lastCode = c; i++; continue; }
        var depth = 0, q = p;
        for (; q < n; q++) {
          var s2 = skipNonCode(q);
          if (s2 !== -1) { q = s2 - 1; continue; }
          if (src[q] === "(") depth++;
          else if (src[q] === ")" && --depth === 0) break;
        }
        var after = nextCode(q + 1);
        var doTail = word === "while" && lastCode === "}" &&
          (after >= n || src[after] === ";" || src[after] === "}" || /\n/.test(src.slice(q + 1, after)));
        out += src.slice(i, after);
        if (src[after] === "{") { out += "{ __OPS++;"; i = after + 1; lastCode = "{"; }
        else { if (!doTail) braceless++; i = after; lastCode = ")"; }
        continue;
      }
      out += c;
      if (!/\s/.test(c)) lastCode = c;
      i++;
    }
    return { src: out, braceless: braceless };
  }

  function harnessCount(BRACELESS) {
    var g = (typeof self !== "undefined") ? self : window;
    g.__OPS = 0;
    g.__READS = 0;
    var T = g.T;

    function lenOf(x) {
      if (x == null) return 0;
      if (typeof x === "string") return x.length;
      var l = x.length;
      return typeof l === "number" && l > 0 ? Math.floor(l) : 0;
    }
    function strLen(x) { return String(x).length; }
    function resultLen(r) { return lenOf(r); }
    function one() { return 1; }

    /* [owner, key, cost, measureResult] — cost(this) before the call, or
       cost(result) after it for methods whose work is the size of what they
       build (slice, concat, Object.keys). */
    var AP = Array.prototype, SP = String.prototype;
    var TABLE = [];
    ["includes", "indexOf", "lastIndexOf", "find", "findIndex", "findLast", "findLastIndex",
     "some", "every", "filter", "map", "forEach", "reduce", "reduceRight", "join", "reverse",
     "fill", "splice", "shift", "unshift", "values", "keys", "entries", "flat", "flatMap", "copyWithin"
    ].forEach(function (k) { TABLE.push([AP, k, lenOf, false]); });
    TABLE.push([AP, Symbol.iterator, lenOf, false]);
    TABLE.push([AP, "slice", resultLen, true]);
    TABLE.push([AP, "concat", resultLen, true]);
    TABLE.push([AP, "sort", function (t) { var m = lenOf(t); return m > 1 ? m * Math.log2(m) : m; }, false]);
    ["includes", "indexOf", "lastIndexOf", "split", "slice", "substring", "replace", "replaceAll", "repeat"
    ].forEach(function (k) { TABLE.push([SP, k, strLen, false]); });
    ["keys", "values", "entries"].forEach(function (k) { TABLE.push([Object, k, resultLen, true]); });
    TABLE.push([Array, "from", resultLen, true]);
    ["has", "add", "delete"].forEach(function (k) { TABLE.push([Set.prototype, k, one, false]); });
    ["has", "get", "set", "delete"].forEach(function (k) { TABLE.push([Map.prototype, k, one, false]); });

    var saved = null;
    function install() {
      saved = [];
      TABLE.forEach(function (row) {
        var owner = row[0], key = row[1], cost = row[2], afterCall = row[3];
        var orig = owner[key];
        if (typeof orig !== "function") return;
        var wrapped = function () {
          if (!afterCall) g.__OPS += cost(this);
          var r = orig.apply(this, arguments);
          if (afterCall) g.__OPS += cost(r);
          return r;
        };
        saved.push([owner, key, orig]);
        owner[key] = wrapped;
      });
    }
    function uninstall() {
      if (!saved) return;
      for (var i = saved.length - 1; i >= 0; i--) saved[i][0][saved[i][1]] = saved[i][2];
      saved = null;
    }

    function bandOf(counts) {
      var ratios = [];
      for (var i = 1; i < counts.length; i++) ratios.push(counts[i] / Math.max(counts[i - 1], 1));
      var sorted = ratios.slice().sort(function (a, b) { return a - b; });
      var mid = sorted.length % 2 ? sorted[(sorted.length - 1) / 2]
        : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
      if (!(mid > 1.3)) return "sublinear";
      if (mid >= 1.7 && mid <= 2.4) return "linear";
      if (mid >= 3.4) return "quadratic";
      return "unclear";
    }

    T.ops = function () { return g.__OPS; };
    T.resetOps = function () { g.__OPS = 0; g.__READS = 0; };
    T.reads = function () { return g.__READS; };
    T.bandOf = bandOf;
    T.counted = function (arr) {
      function idx(k) {
        if (typeof k !== "string" || !/^(0|[1-9]\d*)$/.test(k)) return false;
        g.__OPS++; g.__READS++;
        return true;
      }
      return new Proxy(arr, {
        get: function (t, k, r) { idx(k); return Reflect.get(t, k, r); },
        set: function (t, k, v, r) { idx(k); return Reflect.set(t, k, v, r); },
        has: function (t, k) { idx(k); return Reflect.has(t, k); },
        deleteProperty: function (t, k) { idx(k); return Reflect.deleteProperty(t, k); }
      });
    };
    T.calls = function (fn) {
      var w = function () { w.count++; return fn.apply(this, arguments); };
      w.count = 0;
      return w;
    };
    T.growth = function (make, work, opts) {
      if (BRACELESS > 0)
        throw new Error("Put braces { } around every loop body. The checks count loop iterations and can't see inside a loop written without them (" +
          BRACELESS + (BRACELESS === 1 ? " loop" : " loops") + " found).");
      var sizes = (opts && opts.sizes) || [250, 500, 1000, 2000];
      var counts = [];
      for (var i = 0; i < sizes.length; i++) {
        var input = make(sizes[i]);
        g.__OPS = 0;
        install();
        try { work(input, sizes[i]); }
        finally { uninstall(); }
        counts.push(Math.round(g.__OPS));
      }
      var ratios = [];
      for (var j = 1; j < counts.length; j++) ratios.push(Math.round(counts[j] / Math.max(counts[j - 1], 1) * 100) / 100);
      return { band: bandOf(counts), counts: counts, ratios: ratios, sizes: sizes.slice() };
    };
  }

  /* `export default { … }` is a SyntaxError under (0,eval) in a classic
     worker, but it is the first line of every real Cloudflare Worker — and
     the Deploying course's whole claim is that the learner's file is
     byte-for-byte deployable. So: rewrite the export to a var, alias it to
     `worker` (the name checkpoints call), and comment out bare import
     lines with a note. A file with no export/import passes through
     untouched, so every other course is unaffected. Not a module system,
     not a bundler, and explicitly not a step toward one. */
  function transpileModuleish(src) {
    var out = String(src);
    var hadExport = /^\s*export\s+default\s+/m.test(out);
    if (!hadExport && !/^\s*import\s/m.test(out)) return out;
    out = out.replace(/^\s*import\s[^\n]*$/mg, function (line) {
      return "// " + line.trim() + "   ← this sandbox has no module resolver; anything you need is already in scope";
    });
    if (hadExport) {
      out = out.replace(/^\s*export\s+default\s+/m, "var __default = ");
      out += "\n;var worker = (typeof worker !== 'undefined') ? worker : __default;";
    }
    return out;
  }

  /* ============================================================
     JS lessons → Web Worker
     ============================================================ */
  /* ---------- harnessNode (lesson.node) ----------
     The sandbox is a browser Worker, so `Buffer`, `process` and
     `setImmediate` genuinely do not exist — a Node course that teaches them
     cannot run a single checkpoint without stand-ins. Opt-in per lesson,
     exactly like harnessSpec: a unit where the LEARNER builds the thing
     (nodejs-u2-3 and u2-4 build MockReadable/MockWritable themselves) simply
     does not set `node: true`, and a learner's own declaration shadows these
     anyway.

     These are teaching stand-ins, not polyfills. They are faithful on the
     behaviour the lessons actually grade — Buffer.slice SHARES memory while
     copy() does not, process.nextTick beats setImmediate which beats
     setTimeout(0) — and deliberately shallow everywhere else. */
  function harnessNode() {
    var g = (typeof self !== "undefined") ? self : window;

    /* ---- EventEmitter: the base the stream mocks are built on ---- */
    function EventEmitter() { this._ev = {}; }
    EventEmitter.prototype.on = function (name, fn) {
      (this._ev[name] = this._ev[name] || []).push({ fn: fn, once: false });
      return this;
    };
    EventEmitter.prototype.once = function (name, fn) {
      (this._ev[name] = this._ev[name] || []).push({ fn: fn, once: true });
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener = function (name, fn) {
      var list = this._ev[name] || [];
      this._ev[name] = list.filter(function (h) { return h.fn !== fn; });
      return this;
    };
    EventEmitter.prototype.emit = function (name) {
      var args = [].slice.call(arguments, 1);
      var list = (this._ev[name] || []).slice();
      this._ev[name] = list.filter(function (h) { return !h.once; });
      list.forEach(function (h) { h.fn.apply(this, args); }, this);
      return list.length > 0;
    };
    EventEmitter.prototype.listenerCount = function (name) { return (this._ev[name] || []).length; };
    if (typeof g.EventEmitter === "undefined") g.EventEmitter = EventEmitter;

    /* ---- streams. Synchronous on purpose: a checkpoint that pushes a chunk
       and asserts on the next line must see it, and the lessons teach the
       event WIRING, not the microtask timing. ---- */
    function MockReadable(opts) {
      EventEmitter.call(this);
      this.paused = false;
      this.ended = false;
      this.queue = [];
      this.highWaterMark = (opts && opts.highWaterMark) || 3;
    }
    MockReadable.prototype = Object.create(EventEmitter.prototype);
    MockReadable.prototype.constructor = MockReadable;
    MockReadable.prototype.push = function (chunk) {
      if (this.ended) return false;
      if (this.paused) { this.queue.push(chunk); return false; }
      this.emit("data", chunk);
      return true;
    };
    MockReadable.prototype.pause = function () { this.paused = true; return this; };
    MockReadable.prototype.resume = function () {
      this.paused = false;
      while (this.queue.length && !this.paused) this.emit("data", this.queue.shift());
      return this;
    };
    MockReadable.prototype.end = function () {
      if (this.ended) return this;
      this.ended = true;
      this.emit("end");
      return this;
    };
    MockReadable.prototype.pipe = function (dest) {
      var self2 = this;
      this.on("data", function (c) {
        if (dest.write(c) === false) { self2.pause(); dest.once("drain", function () { self2.resume(); }); }
      });
      this.on("end", function () { dest.end(); });
      return dest;
    };

    function MockWritable(opts) {
      EventEmitter.call(this);
      this.buffer = [];
      this.finished = false;
      this.highWaterMark = (opts && opts.highWaterMark) || 3;
    }
    MockWritable.prototype = Object.create(EventEmitter.prototype);
    MockWritable.prototype.constructor = MockWritable;
    MockWritable.prototype.write = function (chunk) {
      this.buffer.push(chunk);
      /* Backpressure the way the lessons teach it: false once the buffer is
         at or past the mark, and a 'drain' once it has been emptied. */
      return this.buffer.length < this.highWaterMark;
    };
    MockWritable.prototype.drain = function () {
      this.buffer = [];
      this.emit("drain");
      return this;
    };
    MockWritable.prototype.end = function (chunk) {
      if (chunk !== undefined) this.write(chunk);
      if (this.finished) return this;
      this.finished = true;
      this.emit("finish");
      return this;
    };
    if (typeof g.MockReadable === "undefined") g.MockReadable = MockReadable;
    if (typeof g.MockWritable === "undefined") g.MockWritable = MockWritable;

    /* ---- Buffer over a real ArrayBuffer, so slice() shares memory and
       copy() does not — which is the entire point of nodejs-u2-2. ---- */
    if (typeof g.Buffer === "undefined") {
      var enc = new TextEncoder(), dec = new TextDecoder();
      function NodeBuffer(arg, byteOffset, length) {
        var u8;
        if (typeof arg === "number") u8 = new Uint8Array(arg);
        else if (arg instanceof ArrayBuffer) u8 = new Uint8Array(arg, byteOffset || 0, length === undefined ? undefined : length);
        else if (typeof arg === "string") u8 = enc.encode(arg);
        else u8 = new Uint8Array(arg);
        /* Give the Uint8Array the Buffer methods rather than subclassing:
           subarray() on a subclass returns the subclass in modern engines,
           but assigning the prototype keeps index access and .length exact. */
        Object.setPrototypeOf(u8, NodeBuffer.proto);
        return u8;
      }
      NodeBuffer.proto = Object.create(Uint8Array.prototype);
      /* `buf instanceof Buffer` is the first thing a Buffer lesson checks, and
         instanceof walks the prototype chain from .prototype — so the object we
         actually stamp onto instances has to BE Buffer.prototype. */
      NodeBuffer.prototype = NodeBuffer.proto;
      NodeBuffer.proto.toString = function (encoding) {
        if (encoding === "hex") {
          return [].map.call(this, function (b) { return (b < 16 ? "0" : "") + b.toString(16); }).join("");
        }
        if (encoding === "base64") {
          return btoa(String.fromCharCode.apply(null, [].slice.call(this)));
        }
        return dec.decode(this);
      };
      NodeBuffer.proto.slice = NodeBuffer.proto.subarray = function (start, end) {
        var sub = Uint8Array.prototype.subarray.call(this, start, end);
        Object.setPrototypeOf(sub, NodeBuffer.proto);
        return sub;   // SHARES memory, as Node's Buffer.slice does
      };
      NodeBuffer.proto.copy = function (target, targetStart, sourceStart, sourceEnd) {
        var src = Uint8Array.prototype.subarray.call(this, sourceStart || 0,
          sourceEnd === undefined ? this.length : sourceEnd);
        target.set(src, targetStart || 0);
        return src.length;
      };
      NodeBuffer.proto.equals = function (other) {
        if (this.length !== other.length) return false;
        for (var i = 0; i < this.length; i++) if (this[i] !== other[i]) return false;
        return true;
      };
      NodeBuffer.proto.write = function (str, offset) {
        var bytes = enc.encode(str);
        this.set(bytes, offset || 0);
        return bytes.length;
      };
      NodeBuffer.from = function (v, encoding) {
        if (typeof v === "string" && encoding === "hex") {
          var out = new Uint8Array(v.length / 2);
          for (var i = 0; i < out.length; i++) out[i] = parseInt(v.substr(i * 2, 2), 16);
          return NodeBuffer(out);
        }
        return NodeBuffer(v);
      };
      NodeBuffer.alloc = function (n, fill) {
        var b = NodeBuffer(n);
        if (fill !== undefined) b.fill(typeof fill === "string" ? fill.charCodeAt(0) : fill);
        return b;
      };
      NodeBuffer.allocUnsafe = NodeBuffer.alloc;
      NodeBuffer.isBuffer = function (v) {
        return !!v && Object.getPrototypeOf(v) === NodeBuffer.proto;
      };
      NodeBuffer.byteLength = function (v) {
        return typeof v === "string" ? enc.encode(v).length : v.length;
      };
      NodeBuffer.concat = function (list, total) {
        var len = total === undefined ? list.reduce(function (a, b) { return a + b.length; }, 0) : total;
        var out2 = NodeBuffer(len), off = 0;
        list.forEach(function (b) { out2.set(b, off); off += b.length; });
        return out2;
      };
      g.Buffer = NodeBuffer;
    }

    /* ---- setImmediate / nextTick / process ----
       Node's ordering is nextTick → microtasks → setImmediate → setTimeout(0),
       and nodejs-u1-5 grades exactly that sequence. A microtask (nextTick) and
       a MessageChannel-free 0ms-but-earlier-queued macrotask (setImmediate)
       reproduce the observable order in a Worker. */
    var immediates = {}, immSeq = 1;
    if (typeof g.setImmediate === "undefined") {
      g.setImmediate = function (fn) {
        var id = immSeq++;
        var args = [].slice.call(arguments, 1);
        immediates[id] = true;
        /* Queued ahead of any setTimeout(…, 0) registered in the same tick:
           a 0ms timer is clamped to >=1ms by the platform, this is not. */
        Promise.resolve().then(function () {
          Promise.resolve().then(function () {
            if (immediates[id]) { delete immediates[id]; fn.apply(null, args); }
          });
        });
        return id;
      };
      g.clearImmediate = function (id) { delete immediates[id]; };
    }

    if (typeof g.process === "undefined") {
      var started = Date.now();
      g.process = {
        argv: ["node", "script.js"],
        env: {},
        platform: "linux",
        version: "v20.0.0",
        versions: { node: "20.0.0", v8: "11.3.244" },
        pid: 4242,
        arch: "x64",
        /* Real nextTick semantics: runs after the current synchronous block,
           before setImmediate and before any timer. */
        nextTick: function (fn) {
          var args = [].slice.call(arguments, 1);
          Promise.resolve().then(function () { fn.apply(null, args); });
        },
        uptime: function () { return (Date.now() - started) / 1000; },
        hrtime: Object.assign(function (prev) {
          var ns = Math.round(performance.now() * 1e6);
          var s2 = Math.floor(ns / 1e9), n2 = ns % 1e9;
          if (prev) { s2 -= prev[0]; n2 -= prev[1]; if (n2 < 0) { s2--; n2 += 1e9; } }
          return [s2, n2];
        }, { bigint: function () { return BigInt(Math.round(performance.now() * 1e6)); } }),
        memoryUsage: function () {
          return { rss: 30000000, heapTotal: 20000000, heapUsed: 10000000, external: 1000000, arrayBuffers: 0 };
        },
        cwd: function () { return "/app"; },
        exit: function () {},
        on: function () { return g.process; },
        once: function () { return g.process; },
        emit: function () { return false; },
        stdout: { write: function (s2) { __send({ type: "console", level: "log", text: String(s2) }); return true; } },
        stderr: { write: function (s2) { __send({ type: "console", level: "error", text: String(s2) }); return true; } }
      };
    }
  }

  function buildWorkerSrc(lesson, userCode) {
    /* ONE eval, learner code first: checkpoints must see the learner's
       top-level const/let, and an indirect eval keeps those in its own
       lexical scope — a second eval could not reach them. Learner code comes
       first, so its line numbers are exact; the sourceURL names the frames
       script.js, and __USER_LINES tells the stack hook where the learner's
       file ends and the appended checkpoints begin. */
    /* lesson.count instruments the LEARNER'S code only — the checkpoints
       appended after it build inputs with loops that must not be counted. */
    var counting = lesson.count ? instrumentLoops(transpileModuleish(userCode)) : null;
    var evalBlob = (counting ? counting.src : transpileModuleish(userCode)) + "\n;\n" + stepsSource(lesson) + "\n//# sourceURL=script.js";
    var userLines = String(userCode).split("\n").length;
    return [
      'var __send = function (m) { try { postMessage(m); } catch (e) { try { postMessage({ type: "console", level: "warn", text: "(unprintable value)" }); } catch (e2) {} } };',
      "(" + harnessCommon.toString() + ")();",
      lesson.node ? "(" + harnessNode.toString() + ")();" : "",
      lesson.spec ? "(" + harnessSpec.toString() + ")();" : "",
      lesson.crypto ? "(" + harnessCrypto.toString() + ")();" : "",
      lesson.clock != null ? "(" + harnessClock.toString() + ")(" + JSON.stringify(lesson.clock) + ");" : "",
      lesson.warehouse ? "(" + harnessWarehouse.toString() + ")(" + JSON.stringify(lesson.warehouse) + ");" : "",
      counting ? "(" + harnessCount.toString() + ")(" + counting.braceless + ");" : "",
      /* authsim.js (a simulated browser, cookie jar and web sites) is one
         self-contained function, copied in like the harnesses above. */
      lesson.browser ? (window.CODELAB_AUTHSIM ? "(" + window.CODELAB_AUTHSIM.toString() + ")(self);" : "throw new Error('authsim.js is not loaded — add it to index.html');") : "",
      (lesson.mock || lesson.mockFn) ? "(" + harnessMock.toString() + ")(" + JSON.stringify(lesson.mock || null) + ", " + JSON.stringify(lesson.mockFn || null) + ");" : "",
      "var __DONE = false;",
      "function __finish(steps) { if (__DONE) return; __DONE = true; __send({ type: 'results', steps: steps }); }",
      "var __fatal = null;",
      "__USER_LINES = " + userLines + ";",
      "try { (0,eval)(" + JSON.stringify(evalBlob) + "); } catch (e) { var __at = __where(e); __fatal = ((e && e.name && e.name !== 'Error' ? e.name + ': ' : '') + ((e && e.message) || String(e))) + (__at ? ' (' + __at + ')' : ''); }",
      "if (__fatal !== null) { __send({ type: 'fatal', text: __fatal }); __finish(__T_STEPS); }",
      "else { __T_RUN(function (steps) { __finish(steps); }); }"
    ].join("\n");
  }

  function runJS(lesson, files, hooks) {
    var code = (files["script.js"] != null) ? files["script.js"] : files[Object.keys(files)[0]] || "";
    return new Promise(function (resolve) {
      var w, url;
      try {
        /* Every editor tab, verbatim, so checkpoints can grade text the
           learner typed into a non-JS tab (a .gitignore, a config file)
           without any parser — they regex __FILES["name"]. */
        var src = "var __FILES = " + JSON.stringify(files) + ";\n" + buildWorkerSrc(lesson, code);
        url = URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
        w = new Worker(url);
      } catch (e) {
        // Environment without blob workers (some file:// setups) → hidden iframe fallback.
        resolve(runWeb(lesson, {
          "index.html": "<!DOCTYPE html>\n<html><head></head><body></body></html>",
          "script.js": code
        }, { previewEl: hooks.previewEl || document.createElement("div"), onConsole: hooks.onConsole }));
        return;
      }
      var done = false, fatal = null;
      var timer = setTimeout(function () { finish({ steps: [], timeout: true }); }, RUN_TIMEOUT);
      function finish(res) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        try { w.terminate(); } catch (e) {}
        try { URL.revokeObjectURL(url); } catch (e) {}
        resolve(res);
      }
      w.onmessage = function (ev) {
        var m = ev.data || {};
        if (m.type === "console") { if (hooks.onConsole) hooks.onConsole(m); }
        else if (m.type === "spec" || m.type === "specstart" || m.type === "specdone") { if (hooks.onSpec) hooks.onSpec(m); }
        else if (m.type === "fatal") { fatal = m.text; if (hooks.onConsole) hooks.onConsole({ level: "error", text: m.text }); }
        else if (m.type === "results") finish({ steps: m.steps || [], fatal: fatal });
      };
      w.onerror = function (e) {
        var msg = (e && e.message) || "Something went wrong running your code";
        if (hooks.onConsole) hooks.onConsole({ level: "error", text: msg });
        finish({ steps: [], fatal: msg });
      };
    });
  }

  /* ============================================================
     Web lessons → sandboxed iframe (which doubles as the preview)
     ============================================================ */
  function buildSrcdoc(lesson, files, token) {
    var html = (files["index.html"] != null) ? String(files["index.html"])
      : "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>";
    var css = ("styles.css" in files) ? files["styles.css"] : null;
    var js = ("script.js" in files) ? files["script.js"] : null;

    var head =
      "<script>" +
      "var __send = function (m) { try { m.__codelab = " + JSON.stringify(token) + "; parent.postMessage(m, '*'); } catch (e) {} };" +
      "var __LOOPGUARD = 0;" +
      /* e.lineno counts from the top of the WHOLE srcdoc — harness included —
         even for a script labelled with a sourceURL, so it was wrong for every
         web lesson. The learner's line is (a) the first script.js frame of the
         error's stack, or (b) lineno minus the line their script starts on,
         when lineno falls inside their script. Anything else is harness or
         grader code, and gets no line at all rather than a misleading one.
         The two numbers are patched in once the document is assembled. */
      "var __JSL0 = 0/*__JSL0__*/, __JSN = 0/*__JSN__*/;" +
      "window.addEventListener('error', function (e) {" +
      " var L = 0, m = e.error && /script\\.js:(\\d+)/.exec(String(e.error.stack || ''));" +
      " if (m) L = +m[1]; else if (e.lineno > __JSL0 && e.lineno <= __JSL0 + __JSN) L = e.lineno - __JSL0;" +
      " __send({ type: 'console', level: 'error', text: (e.message || 'Script error') + (L ? ' (script.js line ' + L + ')' : '') }); });" +
      "window.addEventListener('unhandledrejection', function (e) { __send({ type: 'console', level: 'error', text: 'Unhandled promise rejection: ' + ((e.reason && e.reason.message) || e.reason) }); });" +
      "(" + harnessCommon.toString() + ")();" +
      (lesson.node ? "(" + harnessNode.toString() + ")();" : "") +
      (lesson.spec ? "(" + harnessSpec.toString() + ")();" : "") +
      (lesson.crypto ? "(" + harnessCrypto.toString() + ")();" : "") +
      (lesson.clock != null ? "(" + harnessClock.toString() + ")(" + JSON.stringify(lesson.clock) + ");" : "") +
      ((lesson.mock || lesson.mockFn) ? "(" + harnessMock.toString() + ")(" + JSON.stringify(lesson.mock || null) + ", " + JSON.stringify(lesson.mockFn || null) + ");" : "") +
      (lesson.cspLab ? "(" + harnessCspLab.toString() + ")();" : "") +
      "<\/script>";

    // 1) harness goes first, right after <head> (or prepended)
    if (/<head[^>]*>/i.test(html)) html = html.replace(/<head[^>]*>/i, function (m0) { return m0 + "\n" + head; });
    else html = head + "\n" + html;

    // NOTE: replacements ALWAYS use the function form — string replacements
    // interpret $$/$& escapes and would corrupt injected code (e.g. T.$$).

    // 2) learner CSS replaces its <link>, or is appended to <head>
    if (css != null) {
      var styleTag = "<style>\n" + safeStyle(css) + "\n</style>";
      var linkRe = /<link[^>]*href\s*=\s*["']?styles\.css["']?[^>]*>/i;
      if (linkRe.test(html)) html = html.replace(linkRe, function () { return styleTag; });
      else if (/<\/head>/i.test(html)) html = html.replace(/<\/head>/i, function () { return styleTag + "\n</head>"; });
      else html = html.replace(head, function () { return head + "\n" + styleTag; });
    }

    // 2b) external stylesheets (web fonts etc.) load ASYNC so a slow network
    //     can never block the page's scripts or the grader (media-print swap).
    html = html.replace(/<link\b[^>]*>/gi, function (tag) {
      if (!/rel\s*=\s*["']?stylesheet/i.test(tag)) return tag;
      if (!/href\s*=\s*["']?https?:/i.test(tag)) return tag;
      if (/\bmedia\s*=/i.test(tag)) return tag;
      return tag.replace(/\/?>$/, " media=\"print\" onload=\"this.media='all'\">");
    });

    // 3) learner JS replaces its <script src>, or is appended before </body>
    if (js != null) {
      /* The learner's line 1 sits on the <script> line itself (no leading
         newline), guardLoops never adds a line, and the sourceURL names the
         frames script.js — so a stack's line numbers are the editor's. */
      var scriptTag = "<script>" + safeInline(guardLoops(js)) + "\n//# sourceURL=script.js\n<\/script>";
      var srcRe = /<script[^>]*src\s*=\s*["']?script\.js["']?[^>]*>\s*<\/script>/i;
      if (srcRe.test(html)) html = html.replace(srcRe, function () { return scriptTag; });
      else if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, function () { return scriptTag + "\n</body>"; });
      else html += "\n" + scriptTag;
    }

    // 4) grader runs last, after everything has loaded. Fallback: if a slow
    //    external resource (e.g. a web-font link while offline) stalls the
    //    load event, grade anyway 2.5s after DOMContentLoaded.
    var grader =
      "<script>" +
      "var __GRADED = false;" +
      "function __grade() { if (__GRADED) return; __GRADED = true; setTimeout(function () {" +
      "try {\n" + safeInline(stepsSource(lesson)) + "\n} catch (e) { __send({ type: 'fatal', text: (e && e.message) || String(e) }); }" +
      "__T_RUN(function (steps) { __send({ type: 'results', steps: steps }); });" +
      "}, 60); }" +
      "window.addEventListener('load', __grade);" +
      "document.addEventListener('DOMContentLoaded', function () { setTimeout(__grade, 2500); });" +
      "<\/script>";
    if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, function () { return grader + "\n</body>"; });
    else html += "\n" + grader;

    // 5) now that nothing above the learner's script can move, tell the
    //    error handler which document line their script starts on.
    if (js != null) {
      var at = html.indexOf(scriptTag);
      if (at !== -1) {
        var startLine = html.slice(0, at).split("\n").length;   // 1-based line of "<script>"
        html = html.replace("0/*__JSL0__*/", function () { return String(startLine - 1); })
                   .replace("0/*__JSN__*/", function () { return String(String(js).split("\n").length); });
      }
    }

    return html;
  }

  function runWeb(lesson, files, hooks) {
    return new Promise(function (resolve) {
      var token = "cl" + Math.floor(Math.random() * 1e9);
      var host = hooks.previewEl || document.createElement("div");
      host.innerHTML = "";
      var f = document.createElement("iframe");
      f.className = "preview-frame";
      f.setAttribute("sandbox", "allow-scripts allow-modals");
      f.setAttribute("title", "Preview of your page");
      host.appendChild(f);

      var done = false, fatal = null;
      var timer = setTimeout(function () { finish({ steps: [], timeout: true }); }, RUN_TIMEOUT);
      function onMsg(ev) {
        var m = ev.data;
        if (!m || m.__codelab !== token) return;
        if (m.type === "console") { if (hooks.onConsole) hooks.onConsole(m); }
        else if (m.type === "spec" || m.type === "specstart" || m.type === "specdone") { if (hooks.onSpec) hooks.onSpec(m); }
        else if (m.type === "fatal") { fatal = m.text; if (hooks.onConsole) hooks.onConsole({ level: "error", text: m.text }); }
        else if (m.type === "results") finish({ steps: m.steps || [], fatal: fatal });
      }
      function finish(res) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        window.removeEventListener("message", onMsg);
        resolve(res);   // iframe stays mounted — it IS the preview
      }
      window.addEventListener("message", onMsg);
      f.srcdoc = buildSrcdoc(lesson, files, token);
    });
  }

  /* ============================================================
     SHELL lessons → the simulated terminal (shell.js)
     ------------------------------------------------------------
     Runs on the MAIN THREAD, unlike js and web lessons, and that
     is safe for a reason worth stating: the learner writes shell
     COMMANDS, which are data. Nothing they type is evaluated as
     JavaScript, so there is no sandbox to escape. The shell has
     no loops and caps a script at 500 commands, so it cannot
     hang the page either — which is the only thing the Worker
     was buying us.
     ============================================================ */
  function runShell(lesson, files, hooks) {
    var SH = window.CODELAB.shell;
    return new Promise(function (resolve) {
      if (!SH) { resolve({ steps: [], fatal: "The shell engine did not load." }); return; }
      var name = (lesson.files && lesson.files[0] && lesson.files[0].name) || "commands.sh";
      var script = (files[name] != null) ? files[name] : files[Object.keys(files)[0]] || "";

      var fsTree, result, GIT = window.CODELAB.git, DOCKER = window.CODELAB.docker, CICD = window.CODELAB.cicd, before = null;
      var where = { cwd: lesson.cwd || "/home/you", home: lesson.home || "/home/you" };
      try {
        fsTree = SH.createFS(lesson.fs || {});
        /* A Docker lesson DESCRIBES its processes rather than running them:
           `apps` says what `node server.js` listens on, logs and answers. */
        if (lesson.apps) fsTree.dockerApps = lesson.apps;
        /* lesson.setup builds the starting state by running REAL commands
           before the learner's — so a seeded repository has an honest
           history, index and reflog, and no seeding code can drift from
           what the commands actually do. Its transcript is not shown, and
           a setup command that fails is an authoring bug, not a lesson. */
        if (lesson.setup) {
          var pre = SH.run(fsTree, lesson.setup, where);
          /* A few starting states are only reachable THROUGH a failure — a
             merge left mid-conflict, say. Those commands are listed in
             lesson.setupExpectFail, and the check runs both ways: a listed
             command that succeeds means the state isn't what the author
             thinks it is, which is just as much a bug. */
          var mayFail = lesson.setupExpectFail || [];
          var broke = pre.transcript.filter(function (t) { return (t.code !== 0) !== (mayFail.indexOf(t.cmd) !== -1); })[0];
          if (broke) {
            resolve({ steps: [], fatal: broke.code
              ? "Lesson setup failed at `" + broke.cmd + "`: " + ((broke.err || "").trim() || "exit " + broke.code)
              : "Lesson setup expected `" + broke.cmd + "` to fail, but it succeeded" });
            return;
          }
        }
        /* Each snapshot composes the one below it — cisim's includes
           dockersim's, which includes gitsim's — so the outermost engine
           present is the only one that needs calling. */
        if (CICD) before = CICD.snapshot(fsTree);
        else if (DOCKER) before = DOCKER.snapshot(fsTree);
        else if (GIT) before = GIT.snapshot(fsTree);
        /* Every editor tab after the first is a real file (a Dockerfile, a
           compose.yaml, a conflicted file to fix by hand). They're written
           after setup AND after the T.before snapshot: the tabs are the
           learner's input, not part of the starting state. */
        SH.writeTabs(fsTree, where.cwd, where.home, files, name);
        result = SH.run(fsTree, script, where);
      } catch (e) {
        resolve({ steps: [], fatal: (e && e.message) || String(e) });
        return;
      }

      /* The Result pane becomes a terminal transcript, so the feedback loop
         is the same one a real shell gives: prompt, command, output. */
      if (hooks.previewEl) {
        var pre = document.createElement("pre");
        pre.className = "sh-term";
        pre.textContent = SH.renderTranscript(result, lesson.user || "you");
        hooks.previewEl.innerHTML = "";
        hooks.previewEl.appendChild(pre);
      }
      /* Anything a command printed also reaches the console pane, so a
         failing checkpoint and the output that explains it sit together. */
      if (hooks.onConsole) {
        result.transcript.forEach(function (t) {
          if (t.out) hooks.onConsole({ level: "log", text: t.out.replace(/\n$/, "") });
          if (t.err) hooks.onConsole({ level: "error", text: t.err.replace(/\n$/, "") });
        });
      }

      var T = shellT(SH, fsTree, result, script);
      /* Git lessons get repository helpers (T.log, T.staged, T.sha …) plus
         T.before — the same helpers over the state right after setup. */
      if (GIT) GIT.extendT(T, fsTree, before, lesson.repo || where.cwd);
      /* Docker and CI helpers merge into the same T (and the same
         T.before). cisim's extendT calls dockersim's, so only the outermost
         one is called or the Docker helpers would be installed twice. */
      if (CICD) CICD.extendT(T, fsTree, before);
      else if (DOCKER) DOCKER.extendT(T, fsTree, before);
      var steps = lesson.steps || [], out = [];
      for (var i = 0; i < steps.length; i++) {
        try {
          /* Tests are authored content, never learner input. */
          var fn = new Function("T", '"use strict";' + steps[i].test);
          fn(T);
          out.push({ i: i, pass: true, msg: "" });
        } catch (e) {
          out.push({ i: i, pass: false, msg: (e && e.message) || String(e) });
        }
      }
      resolve({ steps: out, fatal: null });
    });
  }

  function shellT(SH, fsTree, result, script) {
    function fail(msg) { throw new Error(msg || "Check failed"); }
    var stdout = result.transcript.map(function (t) { return t.out; }).join("");
    var stderr = result.transcript.map(function (t) { return t.err; }).join("");
    var T = {
      transcript: result.transcript,
      out: function () { return stdout; },
      err: function () { return stderr; },
      cwd: function () { return result.cwd; },
      exit: function () { return result.transcript.length ? result.transcript[result.transcript.length - 1].code : 0; },
      /* The raw commands the learner wrote. Grading the SOURCE as well as the
         result is what lets a lesson teach the tool rather than the outcome:
         "get there without a leading slash" is a lesson about relative paths,
         and only T.typed can tell the difference. */
      script: function () { return script; },
      typed: function (re, msg) {
        var rx = (typeof re === "string") ? new RegExp(re) : re;
        if (!rx.test(script)) fail(msg || "Expected a command matching " + rx);
        return true;
      },
      notTyped: function (re, msg) {
        var rx = (typeof re === "string") ? new RegExp(re) : re;
        if (rx.test(script)) fail(msg || "This lesson asks you not to use " + rx);
        return true;
      },
      /* Counting invocations is what makes `mkdir -p` a lesson about -p
         rather than about ending up with a folder. */
      /* Every command match reads `exec` — the line with any trailing
         comment stripped — so `ls -a   # show hidden` still counts as ls. */
      cmdCount: function (name) {
        return result.transcript.filter(function (t) {
          return new RegExp("(^|\\||&&|;)\\s*" + name + "(\\s|$)").test(t.exec == null ? t.cmd : t.exec);
        }).length;
      },
      /* One helper answering "does it exist", "is it a dir", "what is in it". */
      fs: function (p) {
        var n = SH.nodeAt(fsTree, SH.resolve(result.cwd, "/home/you", p));
        if (!n) return null;
        return n.d ? { type: "dir", names: Object.keys(n.d).sort() } : { type: "file", content: n.f };
      },
      /* File contents, or null when it does not exist — one helper covers
         "did you create it" and "what is in it". */
      file: function (p) {
        var n = SH.nodeAt(fsTree, SH.resolve(result.cwd, "/home/you", p));
        return n && n.f !== undefined ? n.f : null;
      },
      exists: function (p) { return !!SH.nodeAt(fsTree, SH.resolve(result.cwd, "/home/you", p)); },
      isDir: function (p) {
        var n = SH.nodeAt(fsTree, SH.resolve(result.cwd, "/home/you", p));
        return !!(n && n.d);
      },
      ls: function (p) {
        var n = SH.nodeAt(fsTree, SH.resolve(result.cwd, "/home/you", p || "."));
        return n && n.d ? Object.keys(n.d).sort() : [];
      },
      /* Did the learner actually run a command matching this? Lets a
         checkpoint insist on the tool, not just the end state — "copy it
         with cp" rather than "have two files". */
      ran: function (re) {
        var rx = (typeof re === "string") ? new RegExp(re) : re;
        return result.transcript.some(function (t) { return rx.test(t.exec == null ? t.cmd : t.exec); });
      },
      commands: result.transcript.map(function (t) { return t.exec == null ? t.cmd : t.exec; }),
      /* The permission string ls -l would print, so a checkpoint about
         chmod can name the bit that is wrong instead of the whole mode. */
      mode: function (p) {
        var n = SH.nodeAt(fsTree, SH.resolve(result.cwd, "/home/you", p));
        return n ? SH.modeString(n) : null;
      },
      /* Variables as the shell holds them, and whether they were exported —
         the difference is the whole point of the environment lessons and it
         is invisible in the transcript. */
      env: function (name) {
        var e = fsTree.shellEnv || {};
        return Object.prototype.hasOwnProperty.call(e, name) ? String(e[name]) : null;
      },
      exported: function (name) { return !!(fsTree.shellExported || {})[name]; },
      /* What is still running, and what is still holding a port. */
      procs: function () { return (fsTree.procs || []).slice(); },
      port: function (n) {
        var hits = (fsTree.procs || []).filter(function (p) { return p.port === n; });
        return hits.length ? hits[0] : null;
      },
      lastCode: result.transcript.length ? result.transcript[result.transcript.length - 1].code : 0,
      printed: function (s) { return stdout.indexOf(s) !== -1; },
      expect: function (cond, msg) { if (!cond) fail(msg); },
      eq: function (a, b, msg) {
        if (JSON.stringify(a) !== JSON.stringify(b)) {
          fail((msg || "Not equal") + "  (got " + JSON.stringify(a) + ")");
        }
      }
    };
    return T;
  }

  /* ---------- public API ---------- */
  window.CODELAB = window.CODELAB || {};
  window.CODELAB.runner = {
    RUN_TIMEOUT: RUN_TIMEOUT,
    run: function (lesson, files, hooks) {
      hooks = hooks || {};
      if (lesson.kind === "shell") return runShell(lesson, files, hooks);
      return (lesson.kind === "js") ? runJS(lesson, files, hooks) : runWeb(lesson, files, hooks);
    }
  };
})();
