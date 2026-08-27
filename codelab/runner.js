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

  /* Fake fetch() for API lessons: lesson.mock maps "METHOD /path" (or just
     "/path" for GET) to a body, or {status, body}. */
  function harnessMock(MOCK) {
    var g = (typeof self !== "undefined") ? self : window;
    function mkRes(status, data) {
      return {
        ok: status >= 200 && status < 300,
        status: status,
        json: function () { return Promise.resolve(JSON.parse(JSON.stringify(data))); },
        text: function () { return Promise.resolve(typeof data === "string" ? data : JSON.stringify(data)); }
      };
    }
    g.fetch = function (url, opts) {
      opts = opts || {};
      var method = String(opts.method || "GET").toUpperCase();
      var path = String(url).split("?")[0];
      var hit = MOCK[method + " " + path];
      if (hit === undefined && method === "GET") hit = MOCK[path];
      return new Promise(function (resolve) {
        setTimeout(function () {
          if (hit === undefined) resolve(mkRes(404, { error: "No such endpoint: " + method + " " + path }));
          else if (hit && typeof hit === "object" && hit.__status !== undefined) resolve(mkRes(hit.__status, hit.body));
          else resolve(mkRes(200, hit));
        }, 60);
      });
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

  /* ============================================================
     JS lessons → Web Worker
     ============================================================ */
  function buildWorkerSrc(lesson, userCode) {
    var evalBlob = String(userCode) + "\n;\n" + stepsSource(lesson);
    return [
      'var __send = function (m) { try { postMessage(m); } catch (e) { try { postMessage({ type: "console", level: "warn", text: "(unprintable value)" }); } catch (e2) {} } };',
      "(" + harnessCommon.toString() + ")();",
      lesson.mock ? "(" + harnessMock.toString() + ")(" + JSON.stringify(lesson.mock) + ");" : "",
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
        url = URL.createObjectURL(new Blob([buildWorkerSrc(lesson, code)], { type: "text/javascript" }));
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
      (lesson.mock ? "(" + harnessMock.toString() + ")(" + JSON.stringify(lesson.mock) + ");" : "") +
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
