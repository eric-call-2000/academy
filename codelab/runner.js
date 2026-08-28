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
    ["log", "info", "warn", "error"].forEach(function (k) {
      var orig = (g.console && g.console[k]) ? g.console[k].bind(g.console) : function () {};
      g.console[k] = function () {
        orig.apply(null, arguments);
        var text = Array.prototype.slice.call(arguments).map(fmt).join(" ");
        g.__LOGS.push(text);
        g.__send({ type: "console", level: k, text: text });
      };
    });

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
      logged: function (needle) {
        needle = String(needle).toLowerCase();
        return g.__LOGS.some(function (t) { return String(t).toLowerCase().indexOf(needle) !== -1; });
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
        function fail(e) { if (finished) return; finished = true; clearTimeout(guard); g.__T_STEPS.push({ i: s.i, pass: false, msg: (e && e.message) || String(e) }); next(); }
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
     Security U6): a pure-JS sha256, a random-hex helper, and an iterated
     slowHash(str, salt, rounds). Pure JS because crypto.subtle is async and
     absent on file://; injected only when lesson.crypto is set. */
  function harnessCrypto() {
    var g = (typeof self !== "undefined") ? self : window;
    function rrot(n, x) { return (x >>> n) | (x << (32 - n)); }
    var K = [
      0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
      0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
      0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
      0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
      0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
      0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
      0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
      0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
    function sha256(ascii) {
      ascii = unescape(encodeURIComponent(String(ascii)));
      var h = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
      var i, j, bytes = [];
      for (i = 0; i < ascii.length; i++) bytes.push(ascii.charCodeAt(i) & 0xff);
      var bitLen = bytes.length * 8;
      bytes.push(0x80);
      while (bytes.length % 64 !== 56) bytes.push(0);
      for (i = 7; i >= 0; i--) bytes.push((bitLen / Math.pow(2, i * 8)) & 0xff);
      var w = new Array(64);
      for (i = 0; i < bytes.length; i += 64) {
        for (j = 0; j < 16; j++)
          w[j] = (bytes[i + j * 4] << 24) | (bytes[i + j * 4 + 1] << 16) | (bytes[i + j * 4 + 2] << 8) | (bytes[i + j * 4 + 3]);
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
      var hex = "";
      for (i = 0; i < 8; i++) hex += ("00000000" + (h[i] >>> 0).toString(16)).slice(-8);
      return hex;
    }
    g.sha256 = sha256;
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
  function buildWorkerSrc(lesson, userCode) {
    var evalBlob = transpileModuleish(userCode) + "\n;\n" + stepsSource(lesson);
    return [
      'var __send = function (m) { try { postMessage(m); } catch (e) { try { postMessage({ type: "console", level: "warn", text: "(unprintable value)" }); } catch (e2) {} } };',
      "(" + harnessCommon.toString() + ")();",
      lesson.spec ? "(" + harnessSpec.toString() + ")();" : "",
      lesson.crypto ? "(" + harnessCrypto.toString() + ")();" : "",
      (lesson.mock || lesson.mockFn) ? "(" + harnessMock.toString() + ")(" + JSON.stringify(lesson.mock || null) + ", " + JSON.stringify(lesson.mockFn || null) + ");" : "",
      "var __DONE = false;",
      "function __finish(steps) { if (__DONE) return; __DONE = true; __send({ type: 'results', steps: steps }); }",
      "var __fatal = null;",
      "try { (0,eval)(" + JSON.stringify(evalBlob) + "); } catch (e) { __fatal = (e && e.message) || String(e); }",
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
      "window.addEventListener('error', function (e) { __send({ type: 'console', level: 'error', text: (e.message || 'Script error') + (e.lineno ? ' (line ' + e.lineno + ')' : '') }); });" +
      "window.addEventListener('unhandledrejection', function (e) { __send({ type: 'console', level: 'error', text: 'Unhandled promise rejection: ' + ((e.reason && e.reason.message) || e.reason) }); });" +
      "(" + harnessCommon.toString() + ")();" +
      (lesson.spec ? "(" + harnessSpec.toString() + ")();" : "") +
      (lesson.crypto ? "(" + harnessCrypto.toString() + ")();" : "") +
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
      var scriptTag = "<script>\n" + safeInline(guardLoops(js)) + "\n<\/script>";
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

      var fsTree, result;
      try {
        fsTree = SH.createFS(lesson.fs || {});
        result = SH.run(fsTree, script, { cwd: lesson.cwd || "/home/you", home: lesson.home || "/home/you" });
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
      cmdCount: function (name) {
        return result.transcript.filter(function (t) {
          return new RegExp("(^|\\||&&|;)\\s*" + name + "(\\s|$)").test(t.cmd);
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
        return result.transcript.some(function (t) { return rx.test(t.cmd); });
      },
      commands: result.transcript.map(function (t) { return t.cmd; }),
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
