/* ============================================================
   Accounting Lab — the app
   ------------------------------------------------------------
   Screens (hash routes, so the phone's back button works):
     #/            Home: continue where you left off, and every unit
     #/u/<id>      a unit and its lessons
     #/l/<id>      a lesson: the reading, then hands-on practice
     #/chart       the chart of accounts, searchable
     #/profiles    who's studying

   Progress lives in localStorage ("accounting_v1", one profile per
   name) and is mirrored into Academy's store (academy_users_v1) as
   track "accounting", so the apps share profiles, XP and streaks on
   the same origin — the same bridge CodeLab and Political Academy
   use. Every rule is in core.js; this file only draws and saves.
   ============================================================ */
(function () {
  "use strict";

  var L = window.LEDGER;
  var LS_KEY = "accounting_v1";
  var ACADEMY_KEY = "academy_users_v1";
  var ACADEMY_TRACK = "accounting";
  var app = document.getElementById("app");
  var esc = L.esc;

  /* ---------- storage ---------- */
  function readJSON(key) { try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; } }
  function writeJSON(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function loadStore() {
    var raw = readJSON(LS_KEY), s = { currentUser: null, users: {} };
    if (raw && raw.users && typeof raw.users === "object") {
      Object.keys(raw.users).forEach(function (n) { s.users[n] = L.normalizeProfile(raw.users[n]); });
      s.currentUser = raw.currentUser && s.users[raw.currentUser] ? raw.currentUser : null;
    }
    return s;
  }
  var store = loadStore();
  function saveStore() { writeJSON(LS_KEY, store); }
  function today() { return L.dayKey(new Date()); }
  function me() { return store.currentUser ? store.users[store.currentUser] : null; }

  /* ---------- Academy bridge ---------- */
  function academyRaw() {
    var raw = readJSON(ACADEMY_KEY);
    return raw && raw.users && typeof raw.users === "object" ? raw : null;
  }
  /* Only our own track is written; every other track is left as found. */
  function syncAcademy() {
    var name = store.currentUser;
    if (!name) return;
    var raw = academyRaw() || { currentUser: null, users: {} };
    if (!raw.users[name]) raw.users[name] = { tracks: {} };
    raw.users[name].tracks = raw.users[name].tracks || {};
    raw.users[name].tracks[ACADEMY_TRACK] = L.academyMirror(me(), today());
    if (!raw.currentUser) raw.currentUser = name;
    writeJSON(ACADEMY_KEY, raw);
  }
  function selectUser(name) {
    name = String(name || "").trim().slice(0, 24);
    if (!name) return;
    if (!store.users[name]) store.users[name] = L.freshProfile();
    store.currentUser = name;
    saveStore();
    var raw = academyRaw() || { currentUser: null, users: {} };
    if (!raw.users[name]) raw.users[name] = { tracks: {} };
    raw.currentUser = name;
    writeJSON(ACADEMY_KEY, raw);
    syncAcademy();
  }
  function allProfileNames() {
    var names = Object.keys(store.users), raw = academyRaw();
    if (raw) Object.keys(raw.users).forEach(function (n) { if (names.indexOf(n) === -1) names.push(n); });
    return names;
  }
  /* Whoever was last studying in Academy is who's studying here. */
  (function adoptAcademyUser() {
    var raw = academyRaw();
    if (raw && raw.currentUser && raw.users[raw.currentUser]) {
      if (!store.users[raw.currentUser]) store.users[raw.currentUser] = L.freshProfile();
      store.currentUser = raw.currentUser;
      saveStore();
    }
  })();

  /* ---------- DOM helpers ---------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function clear() { app.innerHTML = ""; window.scrollTo(0, 0); }
  function plural(n, w) { return n + " " + w + (n === 1 ? "" : "s"); }
  function toast(msg) {
    var t = el("div", "toast", esc(msg));
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 250); }, 2200);
  }
  function ring(done, total, size) {
    var r = size / 2 - 3, c = 2 * Math.PI * r, f = total ? Math.min(1, done / total) : 0;
    return '<svg class="ring" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + " " + size + '" aria-hidden="true">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="ring-track"/>' +
      (f > 0 ? '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="ring-fill" stroke-dasharray="' +
        (c * f).toFixed(1) + " " + c.toFixed(1) + '" transform="rotate(-90 ' + size / 2 + " " + size / 2 + ')"/>' : "") + "</svg>";
  }
  function initial(name) { return ((name || "?").trim().charAt(0) || "?").toUpperCase(); }

  function topbar() {
    var p = me();
    var bar = el("header", "topbar");
    bar.innerHTML =
      '<a class="brand" href="#/"><span class="brand-ic">📒</span><span>Accounting Lab</span></a>' +
      '<nav class="top-nav"><a href="#/chart">Chart</a><a href="../" title="Back to Academy">Academy ↗</a></nav>' +
      (p ? '<div class="stats"><span title="Day streak">🔥 ' + L.streak(p.days, today()) + '</span><span title="XP">⭐ ' + L.xp(p) + "</span>" +
        '<a class="avatar" href="#/profiles" title="Switch profile">' + esc(initial(store.currentUser)) + "</a></div>" : "");
    return bar;
  }
  function page() {
    clear();
    app.appendChild(topbar());
    var main = el("main", "page");
    app.appendChild(main);
    return main;
  }

  /* ---------- profiles ---------- */
  function renderProfiles(firstRun) {
    var main = page();
    main.appendChild(el("h1", "h1", firstRun ? "Who's studying?" : "Profiles"));
    main.appendChild(el("p", "muted", "Profiles are shared with Academy, so your XP and streak count there too."));
    var list = el("div", "profile-list");
    allProfileNames().forEach(function (n) {
      var b = el("button", "profile-btn" + (n === store.currentUser ? " on" : ""),
        '<span class="avatar">' + esc(initial(n)) + "</span><span>" + esc(n) + "</span>");
      b.onclick = function () { selectUser(n); location.hash = "#/"; route(); };
      list.appendChild(b);
    });
    main.appendChild(list);
    var form = el("form", "new-profile");
    form.innerHTML = '<input type="text" maxlength="24" placeholder="New profile name" aria-label="New profile name" />' +
      '<button class="btn" type="submit">Start</button>';
    form.onsubmit = function (e) {
      e.preventDefault();
      var v = form.querySelector("input").value.trim();
      if (!v) return;
      selectUser(v); location.hash = "#/"; route();
    };
    main.appendChild(form);
  }

  /* ---------- home ---------- */
  function lessonCount() { return L.allLessons().length; }
  function renderHome() {
    var p = me();
    if (!p) return renderProfiles(true);
    var main = page();
    var total = lessonCount(), done = L.doneCount(p);
    var hero = el("section", "hero");
    hero.innerHTML = '<div class="hero-text"><h1 class="h1">Professional accounting, hands-on</h1>' +
      '<p class="muted">Read a short lesson, then do the work: post journal entries, reconcile, close the month. ' +
      "Every answer is checked the way a reviewer would check it.</p></div>" +
      '<div class="hero-ring">' + ring(done, total, 76) + '<div class="hero-num"><b>' + done + "</b>/" + total + "</div></div>";
    main.appendChild(hero);

    var next = L.nextLessonId(p);
    if (next) {
      var nl = L.lesson(next), nu = L.unit(L.unitIdOf(next));
      var card = el("a", "continue");
      card.href = "#/l/" + next;
      card.innerHTML = '<span class="cont-ic">' + nu.icon + '</span><span class="cont-text"><span class="eyebrow">' +
        (done ? "Up next" : "Start here") + " · Unit " + (L.units.indexOf(nu) + 1) + "</span><b>" + esc(nl.title) +
        '</b><span class="muted">' + esc(nu.title) + '</span></span><span class="btn">' + (done ? "Continue" : "Start") + "</span>";
      main.appendChild(card);
    } else {
      main.appendChild(el("div", "continue done-all", "<b>🎓 Every lesson finished.</b> Redo any lesson for practice — the checks still run."));
    }

    main.appendChild(el("h2", "h2", "Units"));
    var grid = el("div", "units");
    L.units.forEach(function (u, i) {
      var d = L.doneCount(p, u.id), t = u.lessons.length;
      var a = el("a", "unit-card" + (d === t ? " complete" : ""));
      a.href = "#/u/" + u.id;
      a.innerHTML = '<span class="unit-ring">' + ring(d, t, 46) + '<span class="unit-ic">' + u.icon + "</span></span>" +
        '<span class="unit-text"><span class="eyebrow">Unit ' + (i + 1) + " · " + d + "/" + t + "</span><b>" + esc(u.title) +
        '</b><span class="muted">' + esc(u.blurb) + "</span></span>";
      grid.appendChild(a);
    });
    main.appendChild(grid);
  }

  /* ---------- unit ---------- */
  function renderUnit(id) {
    var p = me();
    if (!p) return renderProfiles(true);
    var u = L.unit(id);
    if (!u) { location.hash = "#/"; return; }
    var main = page();
    main.appendChild(el("a", "crumb", "← All units")).href = "#/";
    var head = el("div", "unit-head");
    head.innerHTML = '<span class="unit-big">' + u.icon + '</span><div><div class="eyebrow">Unit ' + (L.units.indexOf(u) + 1) +
      '</div><h1 class="h1">' + esc(u.title) + '</h1><p class="muted">' + esc(u.blurb) + "</p></div>";
    main.appendChild(head);
    var list = el("ol", "lesson-list");
    u.lessons.forEach(function (l, i) {
      var li = el("li");
      var done = !!p.done[l.id];
      li.innerHTML = '<a href="#/l/' + l.id + '" class="lesson-row' + (done ? " done" : "") + '"><span class="lesson-num">' +
        (done ? "✓" : i + 1) + '</span><span class="lesson-title">' + esc(l.title) + '<span class="muted"> · ' +
        plural(l.steps.length, "exercise") + (p.clean[l.id] ? " · ✨ first try" : "") + '</span></span><span class="go">' + (done ? "Redo" : "Start") + "</span></a>";
      list.appendChild(li);
    });
    main.appendChild(list);
  }

  /* ---------- chart of accounts ---------- */
  function renderChart() {
    var main = page();
    main.appendChild(el("h1", "h1", "Chart of accounts"));
    main.appendChild(el("p", "muted", "Every account the course uses. Journal-entry exercises pick from this list, just like posting in a real general ledger."));
    var search = el("input", "search");
    search.type = "search"; search.placeholder = "Search accounts…"; search.setAttribute("aria-label", "Search accounts");
    main.appendChild(search);
    var box = el("div");
    main.appendChild(box);
    function draw() {
      var q = search.value.trim().toLowerCase();
      box.innerHTML = "";
      L.TYPES.forEach(function (t) {
        var rows = L.accounts.filter(function (a) {
          return a.type === t.id && (!q || a.name.toLowerCase().indexOf(q) !== -1 || String(a.no).indexOf(q) === 0);
        });
        if (!rows.length) return;
        box.appendChild(el("h2", "h2", esc(t.label) + ' <span class="muted">· normal balance: ' + (t.normal === "dr" ? "debit" : "credit") + "</span>"));
        var tb = '<div class="tbl-wrap"><table class="coa"><tbody>';
        rows.forEach(function (a) { tb += '<tr><td class="num">' + a.no + "</td><td>" + esc(a.name) + "</td></tr>"; });
        box.appendChild(el("div", "", tb + "</tbody></table></div>"));
      });
      if (!box.children.length) box.appendChild(el("p", "muted", "No account matches."));
    }
    search.oninput = draw;
    draw();
  }

  /* ---------- lesson ---------- */
  function renderLesson(id) {
    var p = me();
    if (!p) return renderProfiles(true);
    var lesson = L.lesson(id), u = L.unit(L.unitIdOf(id));
    if (!lesson) { location.hash = "#/"; return; }
    p.last = id; saveStore();
    var main = page();
    main.classList.add("lesson-page");
    main.appendChild(el("a", "crumb", "← " + u.icon + " " + esc(u.title))).href = "#/u/" + u.id;
    var pos = u.lessons.indexOf(lesson) + 1;
    main.appendChild(el("div", "eyebrow", "Lesson " + pos + " of " + u.lessons.length + (p.done[id] ? " · finished" : "")));
    main.appendChild(el("h1", "h1", esc(lesson.title)));
    main.appendChild(el("article", "reading", L.md(lesson.read)));

    var practice = el("section", "practice");
    practice.appendChild(el("h2", "h2", "Practice"));
    var bar = el("div", "progress", "<span></span>");
    practice.appendChild(bar);
    var stepsBox = el("div", "steps");
    practice.appendChild(stepsBox);
    main.appendChild(practice);

    var state = { i: 0, clean: true };
    function setBar() { bar.firstChild.style.width = (100 * state.i / lesson.steps.length) + "%"; }
    function showStep() {
      setBar();
      if (state.i >= lesson.steps.length) return finish();
      var card = stepCard(lesson.steps[state.i], state.i, lesson.steps.length, function (cleanStep) {
        if (!cleanStep) state.clean = false;
        state.i++;
        showStep();
      });
      stepsBox.appendChild(card);
      if (state.i > 0) card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function finish() {
      var res = L.finishLesson(p, id, today(), state.clean);
      saveStore(); syncAcademy();
      var nextId = L.lessonAfter(id);
      var box = el("div", "finish");
      var msg = res.first ? "+" + res.xpGained + " XP" : "Practice round — no new XP";
      box.innerHTML = '<div class="finish-ic">' + (state.clean ? "✨" : "✅") + "</div><h2 class=\"h2\">Lesson complete</h2>" +
        '<p class="muted">' + (state.clean ? "Every answer right on the first try." : "Done — the ones you missed are worth a second look.") +
        " " + esc(msg) + (res.unitDone ? " · Unit finished 🎉" : "") + "</p>";
      var actions = el("div", "finish-actions");
      if (nextId) {
        var nb = el("a", "btn", "Next lesson →"); nb.href = "#/l/" + nextId; actions.appendChild(nb);
      }
      var ub = el("a", "btn ghost", "Back to unit"); ub.href = "#/u/" + u.id; actions.appendChild(ub);
      box.appendChild(actions);
      stepsBox.appendChild(box);
      box.scrollIntoView({ behavior: "smooth", block: "start" });
      if (res.unitDone) toast("Unit complete: " + u.title);
    }
    showStep();
  }

  /* One exercise. onDone(clean) fires when the learner moves on. */
  function stepCard(ex, idx, total, onDone) {
    var card = el("div", "step");
    card.appendChild(el("div", "eyebrow", "Exercise " + (idx + 1) + " of " + total + " · " + ({
      entry: "Journal entry", number: "Calculate", choice: "Choose", classify: "Sort"
    }[ex.type] || "")));
    card.appendChild(el("p", "q", L.inline(ex.q)));
    var input = buildInput(ex);
    card.appendChild(input.node);
    var fb = el("div", "feedback");
    var actions = el("div", "step-actions");
    var checkBtn = el("button", "btn", "Check");
    var revealBtn = el("button", "btn ghost hidden", "Show answer");
    actions.appendChild(checkBtn); actions.appendChild(revealBtn);
    card.appendChild(fb); card.appendChild(actions);
    var wrong = 0, finished = false;

    function done(clean) {
      finished = true;
      input.lock();
      actions.innerHTML = "";
      var go = el("button", "btn", "Continue");
      go.onclick = function () { go.disabled = true; onDone(clean); };
      actions.appendChild(go);
      go.focus({ preventScroll: true });
    }
    checkBtn.onclick = function () {
      if (finished) return;
      var r = L.check(ex, input.value());
      if (r.code === "empty" || r.code === "onesided") { fb.className = "feedback warn"; fb.innerHTML = esc(r.msg); return; }
      if (r.ok) {
        fb.className = "feedback ok";
        fb.innerHTML = "<b>" + (wrong ? "Correct." : "Correct!") + "</b> " + L.inline(ex.why || "");
        card.classList.add("solved");
        done(wrong === 0);
      } else {
        wrong++;
        fb.className = "feedback bad";
        fb.innerHTML = esc(r.msg) + (wrong >= L.REVEAL_AFTER ? "" : " Try again.");
        if (wrong >= L.REVEAL_AFTER) revealBtn.classList.remove("hidden");
      }
    };
    revealBtn.onclick = function () {
      input.reveal();
      fb.className = "feedback shown";
      fb.innerHTML = "<b>Answer:</b> " + L.inline(ex.why || "");
      card.classList.add("solved");
      done(false);
    };
    return card;
  }

  /* Each input kind returns { node, value(), reveal(), lock() }. */
  function buildInput(ex) {
    if (ex.type === "entry") return entryInput(ex);
    if (ex.type === "number") return numberInput(ex);
    if (ex.type === "choice") return choiceInput(ex);
    if (ex.type === "classify") return classifyInput(ex);
    return { node: el("p", "muted", "Unknown exercise."), value: function () { return null; }, reveal: function () {}, lock: function () {} };
  }

  function numberInput(ex) {
    var wrap = el("label", "num-input");
    wrap.innerHTML = (ex.prefix ? '<span class="affix">' + esc(ex.prefix) + "</span>" : "") +
      '<input type="text" inputmode="decimal" autocomplete="off" aria-label="Your answer" />' +
      (ex.suffix ? '<span class="affix">' + esc(ex.suffix) + "</span>" : "");
    var inp = wrap.querySelector("input");
    inp.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); var b = wrap.parentNode.querySelector(".step-actions .btn"); if (b) b.click(); }
    });
    return {
      node: wrap,
      value: function () { return inp.value; },
      reveal: function () { inp.value = ex.answer.toLocaleString("en-US", { maximumFractionDigits: 2 }); },
      lock: function () { inp.disabled = true; }
    };
  }

  function choiceInput(ex) {
    var wrap = el("div", "choices"), picked = null;
    var btns = ex.options.map(function (o, i) {
      var b = el("button", "choice", L.inline(o));
      b.type = "button";
      b.onclick = function () {
        picked = i;
        btns.forEach(function (x) { x.classList.toggle("on", x === b); });
      };
      wrap.appendChild(b);
      return b;
    });
    return {
      node: wrap,
      value: function () { return picked; },
      reveal: function () { picked = ex.answer; btns.forEach(function (x, i) { x.classList.toggle("on", i === ex.answer); }); },
      lock: function () { btns.forEach(function (x, i) { x.disabled = true; if (i === ex.answer) x.classList.add("right"); }); }
    };
  }

  function classifyInput(ex) {
    var wrap = el("div", "classify");
    var picks = ex.items.map(function () { return ""; });
    var rows = ex.items.map(function (it, i) {
      var row = el("div", "cl-row");
      row.appendChild(el("span", "cl-item", L.inline(it[0])));
      var opts = el("div", "cl-opts");
      ex.cats.forEach(function (c) {
        var b = el("button", "pill", esc(c[1]));
        b.type = "button";
        b.onclick = function () {
          picks[i] = c[0];
          Array.prototype.forEach.call(opts.children, function (x) { x.classList.toggle("on", x === b); });
          row.classList.remove("wrong");
        };
        opts.appendChild(b);
      });
      row.appendChild(opts);
      wrap.appendChild(row);
      return row;
    });
    return {
      node: wrap,
      value: function () {
        rows.forEach(function (r, i) { r.classList.toggle("wrong", !!picks[i] && picks[i] !== ex.items[i][1]); });
        return picks.slice();
      },
      reveal: function () {
        ex.items.forEach(function (it, i) {
          picks[i] = it[1];
          var ci = ex.cats.map(function (c) { return c[0]; }).indexOf(it[1]);
          Array.prototype.forEach.call(rows[i].querySelector(".cl-opts").children, function (x, j) { x.classList.toggle("on", j === ci); });
          rows[i].classList.remove("wrong");
        });
      },
      lock: function () { wrap.querySelectorAll("button").forEach(function (b) { b.disabled = true; }); }
    };
  }

  /* The journal-entry editor: one line per account, amount in the
     Debit or the Credit column, live totals underneath. */
  function accountSelect() {
    var s = document.createElement("select");
    s.setAttribute("aria-label", "Account");
    var html = '<option value="">Choose account…</option>';
    L.TYPES.forEach(function (t) {
      var rows = L.accounts.filter(function (a) { return a.type === t.id; });
      if (!rows.length) return;
      html += '<optgroup label="' + esc(t.label) + '">' + rows.map(function (a) {
        return '<option value="' + a.id + '">' + a.no + " · " + esc(a.name) + "</option>";
      }).join("") + "</optgroup>";
    });
    s.innerHTML = html;
    return s;
  }
  function entryInput(ex) {
    var wrap = el("div", "je");
    wrap.innerHTML = '<div class="je-head"><span>Account</span><span>Debit</span><span>Credit</span><span></span></div>';
    var body = el("div", "je-body");
    wrap.appendChild(body);
    var foot = el("div", "je-foot");
    var add = el("button", "link-btn", "+ Add line");
    add.type = "button";
    var totals = el("div", "je-totals");
    foot.appendChild(add); foot.appendChild(totals);
    wrap.appendChild(foot);
    var rows = [];

    function addRow(line) {
      var r = el("div", "je-row");
      var sel = accountSelect();
      var dr = el("input"); dr.type = "text"; dr.inputMode = "decimal"; dr.placeholder = "Debit"; dr.setAttribute("aria-label", "Debit");
      var cr = el("input"); cr.type = "text"; cr.inputMode = "decimal"; cr.placeholder = "Credit"; cr.setAttribute("aria-label", "Credit");
      var x = el("button", "je-x", "×"); x.type = "button"; x.title = "Remove line";
      r.appendChild(sel); r.appendChild(dr); r.appendChild(cr); r.appendChild(x);
      if (line) {
        sel.value = line.acct;
        if (line.dr) dr.value = L.money(line.dr).replace("$", "");
        if (line.cr) cr.value = L.money(line.cr).replace("$", "");
        r.classList.toggle("credit", !!line.cr);
      }
      /* An amount belongs on one side: typing in one clears the other,
         and credit lines indent the way a written journal does. */
      dr.oninput = function () { if (dr.value) cr.value = ""; r.classList.remove("credit"); sum(); };
      cr.oninput = function () { if (cr.value) dr.value = ""; r.classList.toggle("credit", !!cr.value); sum(); };
      sel.onchange = sum;
      x.onclick = function () {
        if (rows.length <= 2) { sel.value = ""; dr.value = ""; cr.value = ""; r.classList.remove("credit"); sum(); return; }
        rows.splice(rows.indexOf(o), 1); r.remove(); sum();
      };
      var o = { node: r, sel: sel, dr: dr, cr: cr, x: x };
      rows.push(o);
      body.appendChild(r);
      return o;
    }
    function lines() {
      return rows.map(function (o) {
        var d = L.parseAmount(o.dr.value), c = L.parseAmount(o.cr.value);
        return { acct: o.sel.value, dr: d || 0, cr: c || 0 };
      });
    }
    function sum() {
      var t = L.totals(lines()), diff = L.round2(t.dr - t.cr);
      totals.innerHTML = "<span>Dr " + L.money(t.dr) + "</span><span>Cr " + L.money(t.cr) + "</span>" +
        (t.dr || t.cr ? (Math.abs(diff) < L.CENT ? '<span class="bal ok">Balanced</span>' : '<span class="bal">Off by ' + L.money(Math.abs(diff)) + "</span>") : "");
    }
    add.onclick = function () { addRow().sel.focus(); };
    addRow(); addRow(); sum();
    return {
      node: wrap,
      value: lines,
      reveal: function () {
        rows.slice().forEach(function (o) { o.node.remove(); });
        rows.length = 0;
        ex.lines.forEach(function (ln) { addRow(ln); });
        sum();
      },
      lock: function () {
        rows.forEach(function (o) { o.sel.disabled = o.dr.disabled = o.cr.disabled = o.x.disabled = true; });
        add.disabled = true;
      }
    };
  }

  /* ---------- router ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/");
    if (parts[0] === "l" && parts[1]) return renderLesson(decodeURIComponent(parts[1]));
    if (parts[0] === "u" && parts[1]) return renderUnit(decodeURIComponent(parts[1]));
    if (parts[0] === "chart") return renderChart();
    if (parts[0] === "profiles") return renderProfiles(false);
    renderHome();
  }
  window.addEventListener("hashchange", route);
  if (me()) syncAcademy();
  route();
})();
