/* ============================================================
   CodeLab — app logic (course catalog edition)
   ------------------------------------------------------------
   Screens: profiles → course catalog → course (units/lessons)
   → lesson workspace (Learn | Code | Result) or quiz.

   Courses are declared in courses.js; their unit files are
   lazy-loaded the first time a course is opened, so the app
   boots fast even with thousands of lessons.

   Progress, XP and streaks are stored per profile in
   localStorage AND mirrored into the Academy app's store
   (academy_users_v1) as track "fullstack", so on the same
   origin both apps share profiles.
   ============================================================ */
(function () {
  "use strict";

  var COURSES = (window.CODELAB && window.CODELAB.courses) || [];
  var runner = window.CODELAB.runner;

  var PATH_TITLE = "Full-Stack Engineer Path";
  var LS_KEY = "codelab_v1";
  var ACADEMY_KEY = "academy_users_v1";
  var ACADEMY_TRACK = "fullstack";

  /* ---------- lazy course loading ---------- */
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error("Could not load " + src)); };
      document.head.appendChild(s);
    });
  }
  function loadCourse(course) {
    if (course._loaded) return Promise.resolve(course);
    return (course.files || []).reduce(function (p, f) {
      return p.then(function () { return loadScript(f); });
    }, Promise.resolve()).then(function () {
      course._loaded = true;
      return course;
    });
  }

  /* ---------- course data helpers ---------- */
  function courseLessons(course) {
    var out = [];
    (course.units || []).forEach(function (u, ui) {
      (u.lessons || []).forEach(function (l) {
        out.push({ gi: out.length, unitIndex: ui, unit: u, lesson: l, course: course });
      });
    });
    return out;
  }
  function lessonById(course, id) {
    var list = courseLessons(course);
    for (var i = 0; i < list.length; i++) if (list[i].lesson.id === id) return list[i];
    return null;
  }
  function xpOf(lesson) {
    if (lesson.xp) return lesson.xp;
    if (lesson.kind === "quiz") return 10;
    if (lesson.project) return 40;
    return 15;
  }
  function minsOf(lesson) {
    if (lesson.mins) return lesson.mins;
    if (lesson.kind === "quiz") return 5;
    if (lesson.project) return 30;
    return 10;
  }
  function chipOf(lesson) {
    if (lesson.project) return "PROJECT";
    if (lesson.kind === "quiz") return "QUIZ";
    return lesson.chip || (lesson.kind === "js" ? "JS" : "WEB");
  }

  /* ---------- persistent state ---------- */
  function freshUser() { return { done: {}, xp: 0, streak: 0, lastDay: null, code: {}, quiz: {}, lastCourse: null }; }
  function loadStore() {
    try {
      var raw = JSON.parse(localStorage.getItem(LS_KEY));
      if (raw && raw.users) {
        Object.keys(raw.users).forEach(function (n) {
          var u = raw.users[n] || {};
          u.done = u.done || {}; u.code = u.code || {}; u.quiz = u.quiz || {};
          u.xp = u.xp || 0; u.streak = u.streak || 0;
          if (!("lastDay" in u)) u.lastDay = null;
          if (!("lastCourse" in u)) u.lastCourse = null;
          raw.users[n] = u;
        });
        return { currentUser: raw.currentUser || null, users: raw.users };
      }
    } catch (e) {}
    return { currentUser: null, users: {} };
  }
  var store = loadStore();
  function saveStore() { try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) {} }
  function me() { return store.users[store.currentUser]; }

  /* ---------- Academy app bridge ---------- */
  function academyRaw() {
    try {
      var raw = JSON.parse(localStorage.getItem(ACADEMY_KEY));
      if (raw && raw.users) return raw;
    } catch (e) {}
    return null;
  }
  function academyConnected() { return !!academyRaw(); }
  function academyNames() {
    var raw = academyRaw();
    return raw ? Object.keys(raw.users) : [];
  }
  function syncAcademy(fn) {
    var raw;
    try { raw = JSON.parse(localStorage.getItem(ACADEMY_KEY)); } catch (e) { raw = null; }
    if (!raw || typeof raw !== "object") raw = { currentUser: null, users: {} };
    raw.users = raw.users || {};
    var name = store.currentUser;
    if (!name) return;
    if (!raw.users[name]) raw.users[name] = { tracks: {} };
    if (!raw.currentUser) raw.currentUser = name;
    raw.users[name].tracks = raw.users[name].tracks || {};
    if (!raw.users[name].tracks[ACADEMY_TRACK]) {
      raw.users[name].tracks[ACADEMY_TRACK] = { completed: {}, missed: {}, xp: 0, streak: 0, lastDay: null };
    }
    try { fn(raw.users[name].tracks[ACADEMY_TRACK], raw); } catch (e) {}
    try { localStorage.setItem(ACADEMY_KEY, JSON.stringify(raw)); } catch (e) {}
  }

  /* ---------- streak ---------- */
  function todayKey() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  function yesterdayKey() {
    var y = new Date(); y.setDate(y.getDate() - 1);
    return y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate();
  }
  function bumpStreak(s) {
    var t = todayKey();
    if (s.lastDay === t) return;
    s.streak = (s.lastDay === yesterdayKey()) ? (s.streak + 1) : 1;
    s.lastDay = t;
  }

  /* ---------- progress helpers ---------- */
  function isDone(lessonId) { var u = me(); return !!(u && u.done[lessonId]); }
  function courseDoneCount(course) {
    var u = me();
    if (!u) return 0;
    var pre = course.prefix + "-";
    return Object.keys(u.done).filter(function (id) { return id.indexOf(pre) === 0; }).length;
  }
  function courseTotal(course) {
    return course._loaded ? courseLessons(course).length : (course.items || 0);
  }
  function courseComplete(course) {
    var t = courseTotal(course);
    return t > 0 && courseDoneCount(course) >= t;
  }
  function pathTotals() {
    var done = 0, total = 0;
    COURSES.forEach(function (c) { done += courseDoneCount(c); total += courseTotal(c); });
    return { done: done, total: total };
  }
  function pathComplete() {
    return COURSES.length > 0 && COURSES.every(courseComplete);
  }
  function firstIncomplete(course) {
    var list = courseLessons(course);
    for (var i = 0; i < list.length; i++) if (!isDone(list[i].lesson.id)) return i;
    return list.length;
  }
  function isUnlocked(course, gi) { return gi <= firstIncomplete(course); }

  /* ---------- tiny DOM helpers ---------- */
  var app = document.getElementById("app");
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function mdInline(s) {
    var h = esc(s);
    h = h.replace(/`([^`]+)`/g, "<code>$1</code>");
    h = h.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    return h;
  }
  function mdBlock(s) {
    var parts = String(s || "").split(/\n\n+/);
    return parts.map(function (p) {
      var lines = p.split("\n");
      if (lines.every(function (l) { return /^\s*-\s+/.test(l); })) {
        return "<ul>" + lines.map(function (l) { return "<li>" + mdInline(l.replace(/^\s*-\s+/, "")) + "</li>"; }).join("") + "</ul>";
      }
      return "<p>" + mdInline(p).replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }
  function toast(msg) {
    var t = el("div", "toast", mdInline(msg));
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 250); }, 2200);
  }
  function initial(name) { return ((name || "?").trim().charAt(0) || "?").toUpperCase(); }
  var AVATAR_COLORS = ["#58cc02", "#1cb0f6", "#ff9600", "#ce82ff", "#ff4b4b", "#2bb3a3", "#6c5ce7", "#eb3b5a"];
  function avatarColor(name) {
    var h = 0; name = name || "";
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
  }
  function clear() {
    document.querySelectorAll(".sheet-backdrop, .lesson").forEach(function (n) { n.remove(); });
    app.innerHTML = "";
    window.scrollTo(0, 0);
  }
  function topbar() {
    var u = me();
    var bar = el("div", "topbar");
    var brand = el("button", "brand", '<span class="logo-ic">⚡</span> CodeLab');
    brand.onclick = renderCatalog;
    bar.appendChild(brand);
    var stats = el("div", "stats");
    stats.appendChild(el("div", "stat streak", '<span class="ico">🔥</span>' + u.streak));
    stats.appendChild(el("div", "stat xp", '<span class="ico">⭐</span>' + u.xp));
    var chip = el("button", "user-chip");
    chip.innerHTML = '<span class="user-av" style="background:' + avatarColor(store.currentUser) + '">' + initial(store.currentUser) + "</span>" +
      '<span class="user-name">' + esc(store.currentUser) + "</span>";
    chip.title = "Switch profile";
    chip.onclick = renderProfiles;
    stats.appendChild(chip);
    bar.appendChild(stats);
    return bar;
  }

  /* ============================================================
     PROFILES  ("Who's coding?")
     ============================================================ */
  function allProfileNames() {
    var names = Object.keys(store.users);
    academyNames().forEach(function (n) { if (names.indexOf(n) === -1) names.push(n); });
    return names;
  }
  function selectUser(name) {
    if (!store.users[name]) store.users[name] = freshUser();
    store.currentUser = name;
    saveStore();
    var raw = academyRaw() || { currentUser: null, users: {} };
    if (!raw.users[name]) raw.users[name] = { tracks: {} };
    raw.currentUser = name;
    try { localStorage.setItem(ACADEMY_KEY, JSON.stringify(raw)); } catch (e) {}
  }

  function renderProfiles() {
    clear();
    var scr = el("div", "profiles");
    scr.appendChild(el("div", "logo", '<span class="logo-ic">⚡</span> CodeLab'));
    scr.appendChild(el("div", "logo-sub", PATH_TITLE));
    var names = allProfileNames();
    scr.appendChild(el("h1", "profiles-title", names.length ? "Who's coding?" : "Welcome! Create your profile"));

    var grid = el("div", "profiles-grid");
    names.forEach(function (name) {
      var u = store.users[name];
      var fromAcademy = !u && academyNames().indexOf(name) !== -1;
      var card = el("div", "pcard");
      var av = el("div", "avatar", initial(name));
      av.style.background = avatarColor(name);
      card.appendChild(av);
      card.appendChild(el("div", "pcard-name", esc(name)));
      card.appendChild(el("div", "pcard-meta", u
        ? (Object.keys(u.done).length + " done · " + u.xp + " XP")
        : (fromAcademy ? "From your Academy app" : "New")));
      if (u) {
        var del = el("button", "pcard-del", "✕");
        del.title = "Remove this profile from CodeLab";
        del.onclick = function (e) {
          e.stopPropagation();
          if (confirm('Remove "' + name + '" from CodeLab? (Academy app data is untouched.)')) {
            delete store.users[name];
            if (store.currentUser === name) store.currentUser = null;
            saveStore();
            renderProfiles();
          }
        };
        card.appendChild(del);
      }
      card.onclick = function () { selectUser(name); renderCatalog(); };
      grid.appendChild(card);
    });

    var add = el("div", "pcard add");
    add.appendChild(el("div", "avatar add-avatar", "＋"));
    add.appendChild(el("div", "pcard-name", "Add learner"));
    add.appendChild(el("div", "pcard-meta", "New profile"));
    add.onclick = function () {
      add.classList.add("editing");
      add.innerHTML = "";
      var input = el("input", "pcard-input");
      input.placeholder = "Your name";
      input.maxLength = 24;
      var go = el("button", "btn btn-blue btn-small", "Create");
      function create() {
        var name = (input.value || "").trim().slice(0, 24);
        if (!name) { input.focus(); return; }
        var base = name, n = 2;
        while (store.users[name]) { name = base + " " + n; n++; }
        selectUser(name);
        renderCatalog();
      }
      go.onclick = create;
      input.onkeydown = function (e) { if (e.key === "Enter") create(); };
      add.appendChild(input);
      add.appendChild(go);
      add.onclick = null;
      setTimeout(function () { input.focus(); }, 30);
    };
    grid.appendChild(add);
    scr.appendChild(grid);

    if (academyConnected()) {
      scr.appendChild(el("div", "profiles-hint", "🔗 Connected to your Academy app — profiles, XP and streaks are shared on this device."));
    } else {
      scr.appendChild(el("div", "profiles-hint", "Progress saves automatically on this device."));
    }
    app.appendChild(scr);
  }

  /* ============================================================
     COURSE CATALOG
     ============================================================ */
  function renderCatalog() {
    if (!store.currentUser || !me()) { renderProfiles(); return; }
    clear();
    var u = me();
    app.appendChild(topbar());

    var wrap = el("div", "wrap");

    var totals = pathTotals();
    var pct = totals.total ? Math.round(totals.done / totals.total * 100) : 0;
    var totalHours = COURSES.reduce(function (s, c) { return s + (c.hours || 0); }, 0);
    var hero = el("div", "hero");
    hero.appendChild(el("div", "hero-kicker", "CAREER PATH · " + COURSES.length + " COURSES · ~" + totalHours + " HOURS"));
    hero.appendChild(el("h1", "hero-title", PATH_TITLE));
    hero.appendChild(el("p", "hero-sub", "Every course below is a full, Codecademy-scale course — lessons, quizzes, projects and a certificate. Take them in order, or jump to what you need."));
    var pr = el("div", "hero-progress");
    pr.appendChild(el("div", "hero-bar", '<i style="width:' + pct + '%"></i>'));
    pr.appendChild(el("div", "hero-pct", pct + "%"));
    hero.appendChild(pr);

    var heroBtns = el("div", "hero-btns");
    var last = u.lastCourse && window.CODELAB._byId[u.lastCourse];
    if (pathComplete()) {
      var cert = el("button", "btn btn-gold", "🎓 Path certificate");
      cert.onclick = function () { showCertificate(null); };
      heroBtns.appendChild(cert);
    } else if (last && !courseComplete(last)) {
      var cont = el("button", "btn btn-green", "Continue: " + esc(last.title));
      cont.onclick = function () { openCourse(last); };
      heroBtns.appendChild(cont);
    } else {
      var next = COURSES.filter(function (c) { return !courseComplete(c); })[0];
      if (next) {
        var start = el("button", "btn btn-green", (courseDoneCount(next) ? "Continue: " : "Start: ") + esc(next.title));
        start.onclick = function () { openCourse(next); };
        heroBtns.appendChild(start);
      }
    }
    var play = el("button", "btn btn-ghost", "🧪 Free sandbox");
    play.onclick = openPlayground;
    heroBtns.appendChild(play);
    hero.appendChild(heroBtns);
    if (academyConnected()) hero.appendChild(el("div", "conn-pill", "🔗 Sharing profiles &amp; XP with your Academy app"));
    wrap.appendChild(hero);

    var grid = el("div", "catalog");
    COURSES.forEach(function (c, i) {
      var done = courseDoneCount(c);
      var total = courseTotal(c);
      var cpct = total ? Math.round(done / total * 100) : 0;
      var complete = courseComplete(c);
      var card = el("button", "course-card");
      var head = el("div", "cc-head");
      head.style.background = c.color || "#1cb0f6";
      head.appendChild(el("div", "cc-ic", c.icon || "📦"));
      var meta = el("div", "cc-chips");
      meta.appendChild(el("span", "cc-chip", "~" + c.hours + "h"));
      meta.appendChild(el("span", "cc-chip", esc(c.level || "Beginner")));
      head.appendChild(meta);
      card.appendChild(head);
      var body = el("div", "cc-body");
      body.appendChild(el("div", "cc-kicker", "Course " + (i + 1)));
      body.appendChild(el("div", "cc-title", esc(c.title)));
      body.appendChild(el("div", "cc-blurb", esc(c.blurb || "")));
      var prog = el("div", "cc-progress");
      prog.appendChild(el("div", "cc-bar", '<i style="width:' + cpct + '%;background:' + (c.color || "#1cb0f6") + '"></i>'));
      prog.appendChild(el("div", "cc-count", complete ? "🏅 Complete" : (done ? done + "/" + total : total + " items")));
      body.appendChild(prog);
      body.appendChild(el("div", "cc-cta " + (complete ? "done" : done ? "cont" : ""),
        complete ? "🎓 Review · certificate" : (done ? "Continue →" : "Start course →")));
      card.appendChild(body);
      card.onclick = function () { openCourse(c); };
      grid.appendChild(card);
    });
    wrap.appendChild(grid);

    var foot = el("div", "footer-note");
    foot.innerHTML = COURSES.length + " courses · ~" + totalHours + " hours of hands-on material · progress saves automatically<br>";
    var reset = el("button", "reset-link", "Reset my CodeLab progress");
    reset.onclick = function () {
      if (confirm("Reset " + store.currentUser + "'s CodeLab progress, XP and streak? (Academy app tracks are untouched.)")) {
        store.users[store.currentUser] = freshUser();
        saveStore();
        renderCatalog();
      }
    };
    foot.appendChild(reset);
    wrap.appendChild(foot);
    app.appendChild(wrap);
  }

  /* ============================================================
     COURSE SCREEN (units → lessons)
     ============================================================ */
  function openCourse(course) {
    var u = me();
    u.lastCourse = course.id;
    saveStore();
    if (!course._loaded) {
      clear();
      var load = el("div", "loading-screen",
        '<div class="loading-ic">' + (course.icon || "📦") + '</div><div class="loading-tx">Loading ' + esc(course.title) + "…</div>");
      app.appendChild(load);
    }
    loadCourse(course).then(function () { renderCourse(course); })
      .catch(function (e) {
        toast("⚠️ " + e.message + " — check your connection and try again");
        renderCatalog();
      });
  }

  function renderCourse(course) {
    if (!store.currentUser || !me()) { renderProfiles(); return; }
    clear();
    app.appendChild(topbar());
    var wrap = el("div", "wrap");

    var list = courseLessons(course);
    var done = courseDoneCount(course);
    var total = list.length;
    var pct = total ? Math.round(done / total * 100) : 0;
    var complete = courseComplete(course);

    var head = el("div", "course-head");
    head.style.background = course.color || "#1cb0f6";
    var back = el("button", "course-back", "← All courses");
    back.onclick = renderCatalog;
    head.appendChild(back);
    var hrow = el("div", "course-hrow");
    hrow.appendChild(el("div", "course-ic", course.icon || "📦"));
    var hc = el("div", "course-hc");
    hc.appendChild(el("div", "course-kicker", "COURSE · ~" + course.hours + " HOURS · " + esc(course.level || "")));
    hc.appendChild(el("h1", "course-title", esc(course.title)));
    hc.appendChild(el("p", "course-blurb", esc(course.blurb || "")));
    hrow.appendChild(hc);
    head.appendChild(hrow);
    var pr = el("div", "hero-progress");
    pr.appendChild(el("div", "hero-bar", '<i style="width:' + pct + '%"></i>'));
    pr.appendChild(el("div", "hero-pct", pct + "%"));
    head.appendChild(pr);
    var hb = el("div", "hero-btns");
    if (complete) {
      var cert = el("button", "btn btn-gold", "🎓 View certificate");
      cert.onclick = function () { showCertificate(course); };
      hb.appendChild(cert);
    } else if (total) {
      var next = list[firstIncomplete(course)];
      if (next) {
        var cont = el("button", "btn btn-green", (done ? "Continue: " : "Start: ") + esc(next.lesson.title));
        cont.onclick = function () { openLesson(course, next.gi); };
        hb.appendChild(cont);
      }
    }
    head.appendChild(hb);
    wrap.appendChild(head);

    (course.units || []).forEach(function (unit, ui) {
      var card = el("section", "unit");
      var uh = el("div", "unit-head");
      uh.style.background = unit.color || course.color || "#1cb0f6";
      var left = el("div", "unit-head-left");
      left.appendChild(el("div", "unit-kicker", "Unit " + (ui + 1)));
      left.appendChild(el("div", "unit-title", esc(unit.title)));
      if (unit.blurb) left.appendChild(el("div", "unit-blurb", esc(unit.blurb)));
      if (unit.cheat && unit.cheat.length) {
        var cs = el("button", "cheat-btn", "📋 Cheatsheet");
        cs.onclick = function () { showCheatsheet(unit); };
        left.appendChild(cs);
      }
      uh.appendChild(left);
      var uDone = 0;
      (unit.lessons || []).forEach(function (l) { if (isDone(l.id)) uDone++; });
      uh.appendChild(ringBadge(unit.icon || course.icon || "📦", uDone, (unit.lessons || []).length));
      card.appendChild(uh);

      var rows = el("div", "lessons");
      (unit.lessons || []).forEach(function (l) {
        var entry = lessonById(course, l.id);
        var gi = entry.gi;
        var unlocked = isUnlocked(course, gi);
        var doneL = isDone(l.id);
        var row = el("button", "lrow" + (doneL ? " done" : "") + (unlocked ? "" : " locked") + (l.project ? " project" : ""));
        var st = el("div", "lrow-status", doneL ? "✓" : (unlocked ? (gi + 1) : "🔒"));
        if (doneL) st.classList.add("ok");
        row.appendChild(st);
        var mid = el("div", "lrow-mid");
        mid.appendChild(el("div", "lrow-title", esc(l.title)));
        mid.appendChild(el("div", "lrow-meta", "+" + xpOf(l) + " XP · ~" + minsOf(l) + " min"));
        row.appendChild(mid);
        row.appendChild(el("div", "lrow-chip chip-" + chipOf(l).toLowerCase().replace(/[^a-z]/g, ""), chipOf(l)));
        row.onclick = function () {
          if (!unlocked) { toast("🔒 Finish the previous lesson first"); return; }
          openLesson(course, gi);
        };
        rows.appendChild(row);
      });
      card.appendChild(rows);
      wrap.appendChild(card);
    });

    wrap.appendChild(el("div", "footer-note", total + " items in this course · ~" + course.hours + " hours"));
    app.appendChild(wrap);
  }

  function ringBadge(emoji, done, total) {
    var pct = total ? done / total : 0;
    var complete = total > 0 && done >= total;
    var R = 24, C = 2 * Math.PI * R;
    var svg =
      '<svg width="58" height="58" viewBox="0 0 58 58" aria-hidden="true">' +
      '<circle cx="29" cy="29" r="' + R + '" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="5"></circle>' +
      '<circle cx="29" cy="29" r="' + R + '" fill="none" stroke="' + (complete ? "#ffe27a" : "#fff") + '" stroke-width="5" stroke-linecap="round"' +
      ' stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + (C * (1 - pct)).toFixed(1) + '" transform="rotate(-90 29 29)"></circle>' +
      '<text x="29" y="30" text-anchor="middle" dominant-baseline="central" font-size="22">' + emoji + "</text></svg>";
    var col = el("div", "unit-ring");
    col.innerHTML = svg;
    col.appendChild(el("div", "unit-ring-count", complete ? "🏅 Done" : done + "/" + total));
    return col;
  }

  /* ============================================================
     CHEATSHEET + CERTIFICATE overlays
     ============================================================ */
  function overlay(cls) {
    var back = el("div", "sheet-backdrop");
    var sheet = el("div", "sheet " + (cls || ""));
    back.appendChild(sheet);
    back.onclick = function (e) { if (e.target === back) back.remove(); };
    document.body.appendChild(back);
    return { back: back, sheet: sheet };
  }

  function showCheatsheet(unit) {
    var o = overlay("sheet-cheat");
    var head = el("div", "sheet-head");
    head.appendChild(el("div", "sheet-title", "📋 " + esc(unit.title) + " — cheatsheet"));
    var x = el("button", "sheet-x", "✕");
    x.onclick = function () { o.back.remove(); };
    head.appendChild(x);
    o.sheet.appendChild(head);
    var body = el("div", "sheet-body");
    (unit.cheat || []).forEach(function (c) {
      var item = el("div", "cheat-item");
      item.appendChild(el("div", "cheat-h", mdInline(c.h)));
      if (c.code) {
        var pre = el("pre", "cheat-code");
        pre.innerHTML = "<code>" + window.CODELAB.hl(c.code, c.lang || "html") + "</code>";
        item.appendChild(pre);
      }
      if (c.note) item.appendChild(el("div", "cheat-note", mdInline(c.note)));
      body.appendChild(item);
    });
    o.sheet.appendChild(body);
  }

  // course = a course object for a course certificate, or null for the
  // whole-path certificate once every course is complete.
  function showCertificate(course) {
    var u = me();
    var o = overlay("sheet-cert");
    var d = new Date();
    var date = d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    var title = course ? course.title : PATH_TITLE;
    var stats;
    if (course) {
      var list = courseLessons(course);
      var projects = list.filter(function (e) { return e.lesson.project && isDone(e.lesson.id); }).length;
      stats = list.length + " items · " + projects + " projects · ~" + course.hours + " hours";
    } else {
      var totals = pathTotals();
      stats = COURSES.length + " courses · " + totals.total + " items · " + u.xp + " XP";
    }
    var cert = el("div", "cert");
    cert.innerHTML =
      '<div class="cert-inner">' +
      '<div class="cert-logo">⚡ CodeLab</div>' +
      '<div class="cert-cap">Certificate of Completion</div>' +
      '<div class="cert-path">' + esc(title) + "</div>" +
      '<div class="cert-award">awarded to</div>' +
      '<div class="cert-name">' + esc(store.currentUser) + "</div>" +
      '<div class="cert-stats">' + esc(stats) + "</div>" +
      '<div class="cert-date">' + esc(date) + "</div>" +
      "</div>";
    o.sheet.appendChild(cert);
    var row = el("div", "cert-actions");
    var print = el("button", "btn btn-blue", "🖨 Print / save as PDF");
    print.onclick = function () { document.body.classList.add("printing-cert"); window.print(); setTimeout(function () { document.body.classList.remove("printing-cert"); }, 500); };
    var close = el("button", "btn btn-ghost", "Close");
    close.onclick = function () { o.back.remove(); };
    row.appendChild(print); row.appendChild(close);
    o.sheet.appendChild(row);
  }

  /* ============================================================
     LESSON WORKSPACE  (Learn | Code | Result)
     ============================================================ */
  var current = null;

  function starterFiles(lesson) {
    var files = {};
    (lesson.files || []).forEach(function (f) { files[f.name] = f.content; });
    return files;
  }
  function openLesson(course, gi) {
    var entry = courseLessons(course)[gi];
    if (!entry) { renderCourse(course); return; }
    if (entry.lesson.kind === "quiz") { renderQuiz(entry); return; }
    renderWorkspace(entry, false);
  }
  function openPlayground() {
    renderWorkspace({
      gi: -1, unitIndex: -1, course: null, unit: { title: "Sandbox" },
      lesson: {
        id: "playground", kind: "web", title: "Free sandbox", chip: "WEB",
        brief: "Your own scratchpad — build anything. **Run** shows your page in Result. Code autosaves per profile.\n\nNothing is graded here; it's just you and the browser.",
        steps: [],
        files: [
          { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Hello, sandbox!</h1>\n  <p>Edit me, then press Run.</p>\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
          { name: "styles.css", content: "body {\n  font-family: sans-serif;\n  padding: 24px;\n}\n\nh1 {\n  color: #0ea5e9;\n}\n" },
          { name: "script.js", content: "console.log(\"Sandbox ready!\");\n" }
        ],
        hints: []
      }
    }, true);
  }

  function renderWorkspace(entry, freeplay) {
    clear();
    var lesson = entry.lesson;
    var course = entry.course;
    var u = me();
    var saved = (u && u.code && u.code[lesson.id]) || null;
    var files = starterFiles(lesson);
    if (saved) Object.keys(files).forEach(function (n) { if (saved[n] != null) files[n] = saved[n]; });

    current = {
      entry: entry, lesson: lesson, course: course, freeplay: !!freeplay,
      stepState: (lesson.steps || []).map(function () { return { state: "idle", msg: "" }; }),
      hasRun: false, running: false, hintsShown: 0, allPass: false
    };

    var scr = el("div", "lesson");

    var top = el("div", "l-top");
    var back = el("button", "l-x", "✕");
    back.onclick = function () { current = null; freeplay || !course ? renderCatalog() : renderCourse(course); };
    top.appendChild(back);
    var tt = el("div", "l-tt");
    tt.appendChild(el("div", "l-kicker", freeplay ? "PLAYGROUND" : (esc(course.title).toUpperCase() + " · UNIT " + (entry.unitIndex + 1))));
    tt.appendChild(el("div", "l-title", esc(lesson.title)));
    top.appendChild(tt);
    var badge = el("div", "l-badge", stepBadgeText());
    top.appendChild(badge);
    scr.appendChild(top);

    var tabs = el("div", "l-tabs");
    var tabDefs = [["learn", "📖 Learn"], ["code", "✏️ Code"], ["result", lesson.kind === "js" ? "▶ Output" : "▶ Result"]];
    var tabBtns = {};
    tabDefs.forEach(function (t) {
      var b = el("button", "l-tab", t[1]);
      b.onclick = function () { setTab(t[0]); };
      tabBtns[t[0]] = b;
      tabs.appendChild(b);
    });
    scr.appendChild(tabs);

    var main = el("div", "l-main");

    // — Learn
    var learn = el("div", "pane pane-learn");
    var learnIn = el("div", "pane-in");
    learnIn.appendChild(el("div", "brief", mdBlock(lesson.brief || "")));
    if (lesson.example) {
      var ex = el("pre", "cheat-code brief-code");
      ex.innerHTML = "<code>" + window.CODELAB.hl(lesson.example.code, lesson.example.lang || "js") + "</code>";
      learnIn.appendChild(ex);
    }
    var checksBox = el("div", "checkpoints");
    if (!freeplay && (lesson.steps || []).length) {
      checksBox.appendChild(el("div", "pane-label", "Checkpoints"));
    }
    learnIn.appendChild(checksBox);

    var editor;
    if (!freeplay) {
      var helpRow = el("div", "help-row");
      if (lesson.hints && lesson.hints.length) {
        var hintBtn = el("button", "btn btn-ghost btn-small", "💡 Hint (" + lesson.hints.length + ")");
        var hintsBox = el("div", "hints");
        hintBtn.onclick = function () {
          if (current.hintsShown < lesson.hints.length) {
            current.hintsShown++;
            hintsBox.appendChild(el("div", "hint", "💡 " + mdInline(lesson.hints[current.hintsShown - 1])));
            hintBtn.textContent = current.hintsShown < lesson.hints.length
              ? "💡 Next hint (" + (lesson.hints.length - current.hintsShown) + " left)"
              : "💡 That's every hint";
            if (current.hintsShown >= lesson.hints.length) hintBtn.disabled = true;
          }
        };
        helpRow.appendChild(hintBtn);
        learnIn.appendChild(helpRow);
        learnIn.appendChild(hintsBox);
      } else {
        learnIn.appendChild(helpRow);
      }
      if (lesson.solution) {
        var solBtn = el("button", "btn btn-ghost btn-small", "🔓 View solution");
        solBtn.onclick = function () {
          if (!confirm("Load the solution into the editor? Your current code for this lesson will be replaced (try the hints first!).")) return;
          Object.keys(lesson.solution).forEach(function (n) { editor.setFile(n, lesson.solution[n]); });
          persistCode();
          toast("Solution loaded — read it, run it, tweak it 🧠");
        };
        helpRow.appendChild(solBtn);
      }
      var resetBtn = el("button", "btn btn-ghost btn-small", "↺ Reset code");
      resetBtn.onclick = function () {
        if (!confirm("Reset this lesson's files back to the starter code?")) return;
        var fresh = starterFiles(lesson);
        Object.keys(fresh).forEach(function (n) { editor.setFile(n, fresh[n]); });
        persistCode();
        toast("Starter code restored");
      };
      helpRow.appendChild(resetBtn);
    }
    learn.appendChild(learnIn);
    main.appendChild(learn);

    // — Code
    var codePane = el("div", "pane pane-code");
    var edRoot = el("div", "ed-root");
    codePane.appendChild(edRoot);
    var savedDot = el("div", "saved-dot", "Saved ✓");
    codePane.appendChild(savedDot);
    main.appendChild(codePane);

    // — Result
    var result = el("div", "pane pane-result");
    var resultIn = el("div", "pane-in");
    var previewHost = null;
    if (lesson.kind !== "js") {
      var previewWrap = el("div", "res-block");
      previewWrap.appendChild(el("div", "pane-label", "Preview"));
      previewHost = el("div", "preview-host");
      previewWrap.appendChild(previewHost);
      resultIn.appendChild(previewWrap);
    }
    var checksOut = el("div", "res-block");
    if (!freeplay && (lesson.steps || []).length) checksOut.appendChild(el("div", "pane-label", "Checkpoints"));
    var checksOutList = el("div", "checks-out");
    checksOut.appendChild(checksOutList);
    resultIn.appendChild(checksOut);
    var consoleBlock = el("div", "res-block");
    consoleBlock.appendChild(el("div", "pane-label", "Console"));
    var consoleList = el("div", "console-lines");
    consoleBlock.appendChild(consoleList);
    resultIn.appendChild(consoleBlock);
    result.appendChild(resultIn);
    main.appendChild(result);

    scr.appendChild(main);

    var foot = el("div", "l-foot");
    var runBtn = el("button", "btn btn-run", "▶ Run");
    runBtn.onclick = doRun;
    foot.appendChild(runBtn);
    scr.appendChild(foot);

    app.appendChild(scr);

    editor = window.CODELAB.createEditor(edRoot, {
      files: (lesson.files || []).map(function (f) { return { name: f.name, content: files[f.name] }; }),
      onChange: function () { scheduleSave(); }
    });
    current.editor = editor;

    var saveTimer = null;
    function scheduleSave() {
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(persistCode, 500);
    }
    function persistCode() {
      var u2 = me();
      if (!u2) return;
      u2.code[lesson.id] = editor.getFiles();
      saveStore();
      savedDot.classList.add("show");
      setTimeout(function () { savedDot.classList.remove("show"); }, 900);
    }

    var activeTab = "learn";
    function setTab(name) {
      activeTab = name;
      Object.keys(tabBtns).forEach(function (k) { tabBtns[k].classList.toggle("on", k === name); });
      main.className = "l-main show-" + name;
    }
    setTab("learn");

    function stepBadgeText() {
      var total = (lesson.steps || []).length;
      if (!total) return "🧪";
      var pass = current ? current.stepState.filter(function (s) { return s.state === "pass"; }).length : 0;
      return pass + "/" + total;
    }
    function paintChecks() {
      badge.textContent = stepBadgeText();
      badge.classList.toggle("all", current.allPass);
      [checksBox, checksOutList].forEach(function (box) {
        if (!box) return;
        Array.prototype.slice.call(box.querySelectorAll(".chk")).forEach(function (n) { n.remove(); });
        (lesson.steps || []).forEach(function (s, i) {
          var st = current.stepState[i];
          var d = el("div", "chk chk-" + st.state);
          var ic = st.state === "pass" ? "✓" : (st.state === "fail" ? "✕" : (i + 1));
          d.appendChild(el("div", "chk-ic", "" + ic));
          var tx = el("div", "chk-tx");
          tx.appendChild(el("div", "chk-text", mdInline(s.text)));
          if (st.state === "fail" && st.msg) tx.appendChild(el("div", "chk-msg", esc(st.msg)));
          d.appendChild(tx);
          box.appendChild(d);
        });
      });
    }
    paintChecks();

    function pushConsole(m) {
      var ic = m.level === "error" ? "✕" : (m.level === "warn" ? "⚠" : "▸");
      var line = el("div", "cline cline-" + m.level);
      line.appendChild(el("span", "cline-ic", ic));
      line.appendChild(el("span", "cline-tx", esc(m.text)));
      consoleList.appendChild(line);
      consoleList.scrollTop = consoleList.scrollHeight;
    }

    function doRun() {
      if (current.running) return;
      current.running = true;
      runBtn.disabled = true;
      runBtn.textContent = "⏳ Running…";
      consoleList.innerHTML = "";
      persistCode();
      runner.run(lesson, editor.getFiles(), {
        previewEl: previewHost,
        onConsole: pushConsole
      }).then(function (res) {
        if (!current || current.lesson !== lesson) return;
        current.running = false;
        current.hasRun = true;
        runBtn.disabled = false;

        var steps = lesson.steps || [];
        var byIndex = {};
        (res.steps || []).forEach(function (s) { byIndex[s.i] = s; });
        var allPass = steps.length > 0;
        steps.forEach(function (s, i) {
          var r = byIndex[i];
          if (res.timeout) { current.stepState[i] = { state: "fail", msg: "Your code ran too long — check for an infinite loop." }; allPass = false; }
          else if (!r) { current.stepState[i] = { state: "fail", msg: res.fatal ? ("Your code crashed: " + res.fatal) : "This check never ran." }; allPass = false; }
          else if (r.pass) { current.stepState[i] = { state: "pass", msg: "" }; }
          else { current.stepState[i] = { state: "fail", msg: r.msg || "Check failed" }; allPass = false; }
        });
        current.allPass = allPass;
        paintChecks();
        if (res.timeout) toast("⏱ Took too long — maybe an infinite loop?");

        if (window.matchMedia("(max-width: 979px)").matches) setTab("result");

        if (freeplay || !steps.length) {
          runBtn.textContent = "▶ Run";
          return;
        }
        if (allPass) {
          runBtn.textContent = "▶ Run again";
          if (!isDone(lesson.id)) completeLesson(entry);
          else {
            toast("Still passing ✓ nice");
            showContinueFoot();
          }
        } else {
          runBtn.textContent = "▶ Run";
        }
      });
    }

    function showContinueFoot() {
      var nxt = nextAfter(course, entry.gi);
      if (foot.querySelector(".btn-continue")) return;
      var c = el("button", "btn btn-green btn-continue", nxt ? "Continue →" : "Back to course");
      c.onclick = function () { nxt ? openLesson(course, nxt.gi) : renderCourse(course); };
      foot.appendChild(c);
    }
    current.showContinueFoot = showContinueFoot;

    if (lesson.kind !== "js") {
      runner.run(lesson, editor.getFiles(), { previewEl: previewHost, onConsole: pushConsole }).then(function () {});
    }
  }

  function nextAfter(course, gi) {
    if (!course) return null;
    var list = courseLessons(course);
    return (gi + 1 < list.length) ? list[gi + 1] : null;
  }

  /* ---------- completion ---------- */
  function completeLesson(entry) {
    var lesson = entry.lesson;
    var course = entry.course;
    var u = me();
    var first = !u.done[lesson.id];
    if (!first) return;
    var gained = xpOf(lesson);
    u.done[lesson.id] = true;
    u.xp += gained;
    bumpStreak(u);
    saveStore();
    syncAcademy(function (t) {
      t.completed[lesson.id] = true;
      t.xp += gained;
      bumpStreak(t);
    });

    var o = overlay("sheet-done");
    var isProject = !!lesson.project;
    var finishedCourse = course && courseComplete(course);
    var finishedPath = pathComplete();
    o.sheet.appendChild(el("div", "done-emoji", finishedPath ? "🏆" : (finishedCourse ? "🎓" : (isProject ? "🏆" : "🎉"))));
    o.sheet.appendChild(el("h2", "done-title",
      finishedPath ? "PATH COMPLETE!" : (finishedCourse ? "Course complete!" : (isProject ? "Project complete!" : "Lesson complete!"))));
    o.sheet.appendChild(el("div", "done-sub", esc(finishedCourse ? course.title : lesson.title)));
    var rr = el("div", "reward-row");
    rr.appendChild(reward("XP earned", "+" + gained));
    rr.appendChild(reward("Streak", "🔥 " + u.streak));
    o.sheet.appendChild(rr);
    if (academyConnected()) o.sheet.appendChild(el("div", "done-conn", "🔗 Synced to your Academy profile"));

    var acts = el("div", "done-actions");
    if (finishedCourse) {
      var cert = el("button", "btn btn-gold", "🎓 View your certificate");
      cert.onclick = function () { o.back.remove(); showCertificate(finishedPath ? null : course); };
      acts.appendChild(cert);
      var toCat = el("button", "btn btn-ghost", "Back to all courses");
      toCat.onclick = function () { o.back.remove(); renderCatalog(); };
      acts.appendChild(toCat);
    } else {
      var nxt = nextAfter(course, entry.gi);
      if (nxt) {
        var go = el("button", "btn btn-green", "Next: " + esc(nxt.lesson.title));
        go.onclick = function () { o.back.remove(); openLesson(course, nxt.gi); };
        acts.appendChild(go);
      }
      var stay = el("button", "btn btn-ghost", "Stay & tinker");
      stay.onclick = function () {
        o.back.remove();
        if (current && current.showContinueFoot) current.showContinueFoot();
      };
      acts.appendChild(stay);
    }
    o.sheet.appendChild(acts);
  }

  function reward(head, val) {
    var r = el("div", "reward");
    r.appendChild(el("div", "r-head", head));
    r.appendChild(el("div", "r-val", val));
    return r;
  }

  /* ============================================================
     QUIZ
     ============================================================ */
  var QUIZ_PASS = 0.8;
  function renderQuiz(entry) {
    clear();
    var lesson = entry.lesson;
    var course = entry.course;
    var qs = lesson.questions || [];
    var idx = 0, correct = 0;

    var scr = el("div", "lesson quiz");
    var top = el("div", "l-top");
    var back = el("button", "l-x", "✕");
    back.onclick = function () { renderCourse(course); };
    top.appendChild(back);
    var tt = el("div", "l-tt");
    tt.appendChild(el("div", "l-kicker", esc(course.title).toUpperCase() + " · QUIZ"));
    tt.appendChild(el("div", "l-title", esc(lesson.title)));
    top.appendChild(tt);
    var prog = el("div", "l-badge", "1/" + qs.length);
    top.appendChild(prog);
    scr.appendChild(top);

    var body = el("div", "quiz-body");
    scr.appendChild(body);
    app.appendChild(scr);

    function show() {
      prog.textContent = Math.min(idx + 1, qs.length) + "/" + qs.length;
      body.innerHTML = "";
      if (idx >= qs.length) { finish(); return; }
      var q = qs[idx];
      var inner = el("div", "quiz-in");
      if (idx === 0 && lesson.brief) inner.appendChild(el("div", "quiz-brief", mdBlock(lesson.brief)));
      inner.appendChild(el("div", "q-kicker", "Question " + (idx + 1)));
      inner.appendChild(el("div", "q-prompt", mdInline(q.q)));
      if (q.code) {
        var pre = el("pre", "q-code");
        pre.innerHTML = "<code>" + window.CODELAB.hl(q.code, q.lang || "js") + "</code>";
        inner.appendChild(pre);
      }
      var box = el("div", "q-choices");
      var answered = false;
      q.choices.forEach(function (c, i) {
        var b = el("button", "q-choice");
        b.innerHTML = mdInline(c);
        b.onclick = function () {
          if (answered) return;
          answered = true;
          var right = i === q.answer;
          if (right) correct++;
          Array.prototype.slice.call(box.children).forEach(function (n, j) {
            n.disabled = true;
            if (j === q.answer) n.classList.add("correct");
            else if (j === i) n.classList.add("wrong");
          });
          var fb = el("div", "q-fb " + (right ? "ok" : "no"),
            "<b>" + (right ? "Correct!" : "Not quite.") + "</b> " + mdInline(q.explain || ""));
          inner.appendChild(fb);
          var cont = el("button", "btn " + (right ? "btn-green" : "btn-red"), "Continue");
          cont.onclick = function () { idx++; show(); };
          inner.appendChild(cont);
          cont.scrollIntoView({ block: "nearest" });
        };
        box.appendChild(b);
      });
      inner.appendChild(box);
      body.appendChild(inner);
      window.scrollTo(0, 0);
    }

    function finish() {
      var pct = qs.length ? correct / qs.length : 1;
      var passed = pct >= QUIZ_PASS;
      var u = me();
      var best = Math.max(Math.round(pct * 100), (u.quiz && u.quiz[lesson.id]) || 0);
      u.quiz[lesson.id] = best;
      saveStore();
      body.innerHTML = "";
      var inner = el("div", "quiz-in center");
      inner.appendChild(el("div", "done-emoji", passed ? "🧠" : "📚"));
      inner.appendChild(el("h2", "done-title", passed ? "Quiz passed!" : "Almost there"));
      inner.appendChild(el("div", "done-sub", "You scored " + Math.round(pct * 100) + "% (" + correct + "/" + qs.length + ")" +
        (passed ? "" : " — you need " + Math.round(QUIZ_PASS * 100) + "% to pass.")));
      var acts = el("div", "done-actions");
      if (passed) {
        if (!isDone(lesson.id)) {
          var btn = el("button", "btn btn-green", "Claim +" + xpOf(lesson) + " XP");
          btn.onclick = function () { completeLesson(entry); };
          acts.appendChild(btn);
        } else {
          var b2 = el("button", "btn btn-green", "Back to course");
          b2.onclick = function () { renderCourse(course); };
          acts.appendChild(b2);
        }
      } else {
        var retry = el("button", "btn btn-green", "Try again");
        retry.onclick = function () { renderQuiz(entry); };
        acts.appendChild(retry);
        var home = el("button", "btn btn-ghost", "Back to course");
        home.onclick = function () { renderCourse(course); };
        acts.appendChild(home);
      }
      inner.appendChild(acts);
      body.appendChild(inner);
    }
    show();
  }

  /* ============================================================
     DEV HOOK — automated validation drives the real sandbox
     ============================================================ */
  window.CODELAB.dev = {
    loadAll: function () {
      return COURSES.reduce(function (p, c) { return p.then(function () { return loadCourse(c); }); }, Promise.resolve());
    },
    courses: function () {
      return COURSES.map(function (c) {
        var list = courseLessons(c);
        return {
          id: c.id, prefix: c.prefix, manifestItems: c.items, actualItems: list.length,
          badPrefix: list.filter(function (e) { return e.lesson.id.indexOf(c.prefix + "-") !== 0; }).map(function (e) { return e.lesson.id; })
        };
      });
    },
    ids: function () {
      var out = [];
      COURSES.forEach(function (c) { courseLessons(c).forEach(function (e) { out.push(e.lesson.id); }); });
      return out;
    },
    lesson: function (id) {
      for (var i = 0; i < COURSES.length; i++) {
        var hit = lessonById(COURSES[i], id);
        if (hit) return hit.lesson;
      }
      return null;
    },
    run: function (id, useSolution) {
      var lesson = window.CODELAB.dev.lesson(id);
      if (!lesson) return Promise.reject(new Error("No lesson " + id));
      if (lesson.kind === "quiz") {
        var bad = (lesson.questions || []).filter(function (q) {
          return !q.q || !q.choices || q.answer == null || !q.choices[q.answer] || !q.explain;
        }).length;
        return Promise.resolve({ quiz: true, questions: (lesson.questions || []).length, invalid: bad });
      }
      var files = starterFiles(lesson);
      if (useSolution && lesson.solution) {
        Object.keys(lesson.solution).forEach(function (n) { files[n] = lesson.solution[n]; });
      }
      var host = document.createElement("div");
      host.style.cssText = "position:fixed;left:-12000px;top:0;width:1000px;height:700px;";
      document.body.appendChild(host);
      var logs = [];
      return runner.run(lesson, files, { previewEl: host, onConsole: function (m) { logs.push(m); } })
        .then(function (res) { host.remove(); res.logs = logs; return res; });
    }
  };

  /* ---------- boot ---------- */
  if (!COURSES.length) {
    app.innerHTML = '<div style="padding:40px;text-align:center;font-weight:800;color:#777">No courses found. Make sure courses.js is present.</div>';
  } else if (store.currentUser && store.users[store.currentUser]) {
    renderCatalog();
  } else {
    renderProfiles();
  }
})();
