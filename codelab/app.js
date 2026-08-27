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
  var REV = window.CODELAB.review;
  var SYNC = window.CODELAB.sync;
  /* One id per browser, so lifetime counters can be kept per device and
     summed instead of being double-counted or clobbered on a handoff. */
  var DEVICE_KEY = "codelab_device_v1";
  function deviceId() {
    var id = null;
    try { id = localStorage.getItem(DEVICE_KEY); } catch (e) {}
    if (!id) {
      id = "d-" + Math.random().toString(36).slice(2, 10);
      try { localStorage.setItem(DEVICE_KEY, id); } catch (e) {}
    }
    return id;
  }
  function deviceLabel() {
    var ua = navigator.userAgent || "";
    var os = /iPhone|iPad/.test(ua) ? "iPhone" : /Android/.test(ua) ? "Android"
      : /Mac OS X/.test(ua) ? "Mac" : /Windows/.test(ua) ? "Windows" : "This device";
    var br = /CriOS|Chrome/.test(ua) ? "Chrome" : /Firefox/.test(ua) ? "Firefox"
      : /Safari/.test(ua) ? "Safari" : "browser";
    return os + " · " + br;
  }
  REV.setDeviceId(deviceId());
  /* One line to reverse if the flame should go back to meaning "I completed
     a lesson" rather than "I studied today". See the README note. */
  var REVIEW_BUMPS_STREAK = true;
  var REVIEW_MIN_SESSION = 5;   // graded cards that count as a real session
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
    /* Two callers can race once the catalog prefetches in the background.
       Without this, both run the whole file list and addUnit registers every
       unit twice — which halves every progress percentage until reload. */
    if (course._loading) return course._loading;
    course._loading = (course.files || []).reduce(function (p, f) {
      return p.then(function () { return loadScript(f); });
    }, Promise.resolve()).then(function () {
      course._loaded = true;
      course._loading = null;
      return course;
    }, function (err) {
      course._loading = null;
      throw err;
    });
    return course._loading;
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
    if (lesson.kind === "shell") return lesson.chip || "SHELL";
    return lesson.chip || (lesson.kind === "js" ? "JS" : "WEB");
  }

  /* ---------- persistent state ---------- */
  function freshUser() {
    return {
      done: {}, xp: 0, streak: 0, lastDay: null, code: {}, quiz: {}, lastCourse: null,
      /* Recall. A missing rev record IS the "never introduced" marker, which
         is why there is no seeding pass and no seeded flag: new questions
         shipped in a later wave become eligible on their own. */
      rev: {},          // key -> [box, dueDay, lapses, reviews]  (cards AND drills)
      revDay: null,     // day integer the queue was frozen on
      revQueue: null,   // { day, keys, i, ok, n, redo } — resumable
      revSkip: {},      // key -> 1, "can't answer this one"
      revAlt: {},       // key -> [answers that should have counted]
      revStats: { s: 0, a: 0, c: 0, ta: 0, tc: 0 },   // derived: the sum of revStatsSrc
      revStatsSrc: {},  // deviceId -> counters, so two devices can be summed exactly
      revPark: {},      // key -> record, held rather than deleted (see pruneOrphans)
      days: [],         // study day-numbers; streak and lastDay are DERIVED from this
      xpOwed: []        // lessons merged in while their course was unloaded
      /* No `code` here on purpose — saved lesson files live in their own
         localStorage keys. See the code store. */
    };
  }
  function loadStore() {
    try {
      var raw = JSON.parse(localStorage.getItem(LS_KEY));
      if (raw && raw.users) {
        Object.keys(raw.users).forEach(function (n) {
          var u = raw.users[n] || {};
          u.done = u.done || {}; u.quiz = u.quiz || {};
          u.xp = u.xp || 0; u.streak = u.streak || 0;
          if (!("lastDay" in u)) u.lastDay = null;
          if (!("lastCourse" in u)) u.lastCourse = null;
          /* Recall migration: defaults only, no backfill. There is no honest
             completion date to recover — done[id] is a bare boolean — so the
             schedule re-measures from first review instead of inventing one. */
          u.rev = u.rev || {}; u.revSkip = u.revSkip || {}; u.revAlt = u.revAlt || {};
          u.revStats = u.revStats || { s: 0, a: 0, c: 0, ta: 0, tc: 0 };
          u.revPark = u.revPark || {};
          u.xpOwed = u.xpOwed || [];
          /* Handoff migration. The streak was a count plus an end-date, which
             cannot be merged across devices without inventing runs — so the
             existing pair is expanded back into the set of days it implies,
             and streak/lastDay become derived values from here on. */
          if (!u.days) u.days = SYNC.backfillDays(u.streak, u.lastDay);
          /* The old scalar counters become this-device-unknown history rather
             than being thrown away or credited to the current device. */
          if (!u.revStatsSrc) {
            u.revStatsSrc = {};
            var sc = u.revStats || {};
            if (sc.a || sc.s || sc.ta) u.revStatsSrc.legacy = { s: sc.s || 0, a: sc.a || 0, c: sc.c || 0, ta: sc.ta || 0, tc: sc.tc || 0 };
          }
          u.revStats = REV.totalStats(u);
          if (!("revDay" in u)) u.revDay = null;
          if (!("revQueue" in u)) u.revQueue = null;
          raw.users[n] = u;
        });
        return { currentUser: raw.currentUser || null, users: raw.users };
      }
    } catch (e) {}
    return { currentUser: null, users: {} };
  }
  var store = loadStore();
  function saveStore() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); return true; }
    catch (e) { return false; }
  }
  /* saveStore() serializes EVERY profile in one go, so it stays small only
     because saved lesson code lives elsewhere (see the code store below).
     Review writes still coalesce — twenty answers a session is twenty
     serializations otherwise — and flush on the way out. */
  var softTimer = null;
  function saveStoreSoon() {
    if (softTimer) clearTimeout(softTimer);
    softTimer = setTimeout(function () { softTimer = null; saveStore(); }, 2000);
  }
  function flushStore() {
    if (softTimer) { clearTimeout(softTimer); softTimer = null; }
    return saveStore();
  }
  window.addEventListener("visibilitychange", function () { if (document.hidden) flushStore(); });
  window.addEventListener("pagehide", flushStore);
  function me() { return store.users[store.currentUser]; }

  /* ============================================================
     CODE STORE — saved lesson files, one localStorage key each
     ------------------------------------------------------------
     Code used to sit inside codelab_v1 as u.code[lessonId]. That
     made the editor's 500ms autosave rewrite the ENTIRE store —
     every profile, every lesson's files — to persist a few
     hundred bytes of typing. A finished profile is ~267KB of
     which ~261KB is code, so the write got slower the more of
     the course you finished, which is exactly backwards.

     One key per lesson per profile means a keystroke costs a
     couple of KB, and progress writes stop carrying code at all.
     It also isolates the failure: code is the bulk of the 5MB
     origin budget, so when quota runs out it is code writes that
     fail while XP, streaks and the review schedule keep saving.
     ============================================================ */
  var CODE_PREFIX = "codelab_code_v1|";
  var DRILL_TAG = "~drill~";   // lesson ids never start with ~, so no collision

  function codeKey(profile, lessonId) {
    return CODE_PREFIX + encodeURIComponent(profile) + "|" + lessonId;
  }
  function codeGet(profile, lessonId) {
    if (!profile) return null;
    try { return JSON.parse(localStorage.getItem(codeKey(profile, lessonId))); }
    catch (e) { return null; }
  }
  function codeSet(profile, lessonId, files) {
    if (!profile) return false;
    try { localStorage.setItem(codeKey(profile, lessonId), JSON.stringify(files)); return true; }
    catch (e) { return false; }
  }
  function codeDel(profile, lessonId) {
    if (!profile) return;
    try { localStorage.removeItem(codeKey(profile, lessonId)); } catch (e) {}
  }
  /* Deleting or resetting a profile has to take its code with it, or the
     bytes stay on the device forever with nothing pointing at them. */
  function codeClearProfile(profile) {
    if (!profile) return 0;
    var pre = CODE_PREFIX + encodeURIComponent(profile) + "|", doomed = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(pre) === 0) doomed.push(k);
      }
      doomed.forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) {}
    return doomed.length;
  }

  /* Move any inline code out to its own keys. Idempotent by construction:
     an entry is deleted only once its new key is safely written, so a
     migration interrupted by a full disk resumes instead of losing work. */
  function migrateInlineCode() {
    var moved = 0, stuck = 0;
    Object.keys(store.users).forEach(function (name) {
      var u = store.users[name];
      [["code", ""], ["drillCode", DRILL_TAG]].forEach(function (pair) {
        var bag = u[pair[0]];
        if (!bag) return;
        Object.keys(bag).forEach(function (lessonId) {
          if (codeSet(name, pair[1] + lessonId, bag[lessonId])) { delete bag[lessonId]; moved++; }
          else stuck++;
        });
        if (!Object.keys(bag).length) delete u[pair[0]];
      });
    });
    if (moved || stuck) saveStore();
    return { moved: moved, stuck: stuck };
  }
  migrateInlineCode();

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
    /* Records the DAY, not just a count. A count paired with an end-date
       cannot be merged across two devices without fabricating runs — a set
       of days unions perfectly and needs no clock to arbitrate. The Academy
       mirror has no day set, so it keeps the original behaviour. */
    if (s.days) {
      var n = REV.revToday();
      if (s.days.length && s.days[s.days.length - 1] === n) return;
      s.days = SYNC.uniqSortedDays(s.days.concat([n]), n);
      s.streak = SYNC.streakFromDays(s.days);
      s.lastDay = SYNC.dayStr(s.days[s.days.length - 1]);
      return;
    }
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
    var h = esc(s), spans = [];
    /* Park code spans before touching emphasis: their contents are literal,
       so a * inside `a*b*c` must not become italics. */
    h = h.replace(/`([^`]+)`/g, function (_, inner) {
      spans.push(inner);
      return "@@CODE" + (spans.length - 1) + "@@";
    });
    h = h.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    /* Single-asterisk italics, after bold so **x** is already consumed.
       Requiring a non-space, non-asterisk character just inside each marker
       leaves CSS universal selectors (* { ... }) and block-comment syntax
       alone — both have a space or slash where an italic word would be. */
    h = h.replace(/\*([^\s*][^*]*?)\*/g, "<i>$1</i>");
    h = h.replace(/@@CODE(\d+)@@/g, function (_, i) { return "<code>" + spans[i] + "</code>"; });
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
    /* Content-free: counts due records straight from localStorage, so the
       pill can render before a single course file has loaded. */
    var due = REV.dueCount(u, REV.revToday());
    if (due > 0) {
      var pill = el("button", "stat rv-pill", '<span class="ico">🧠</span>' + due);
      pill.title = due + " to recall";
      pill.onclick = renderReview;
      stats.appendChild(pill);
    }
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
            codeClearProfile(name);   // or their saved code outlives them
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
    /* Review comes before Continue on purpose: memory decays on a clock,
       lessons wait patiently. */
    /* Cards need a finished quiz; drills only need finished lessons. The
       5-lesson floor keeps day one from offering to drill something learned
       ten minutes ago. */
    if (REV.hasEngagedQuiz(u) || REV.doneLessonCount(u) >= 5) {
      var dueNow = REV.dueCount(u, REV.revToday());
      var rvBtn = el("button", "btn " + (dueNow ? "btn-green" : "btn-ghost"),
        "🧠 Recall" + (dueNow ? " · " + dueNow + " card" + (dueNow === 1 ? "" : "s") : ""));
      rvBtn.onclick = renderReview;
      heroBtns.appendChild(rvBtn);
      prefetchReviewCourses(u);
    }
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
    var handoff = el("button", "btn btn-ghost", "📲 Handoff");
    handoff.title = "Move this profile between your phone and desktop";
    handoff.onclick = renderSync;
    heroBtns.appendChild(handoff);
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
      if (confirm("Reset " + store.currentUser + "'s CodeLab progress, XP, streak and saved code? (Academy app tracks are untouched.)")) {
        store.users[store.currentUser] = freshUser();
        codeClearProfile(store.currentUser);   // freshUser() no longer carries code
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
  function openLesson(course, gi, drill) {
    var entry = courseLessons(course)[gi];
    if (!entry) { renderCourse(course); return; }
    if (entry.lesson.kind === "quiz") { renderQuiz(entry); return; }
    renderWorkspace(entry, false, drill);
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

  function renderWorkspace(entry, freeplay, drill) {
    clear();
    var lesson = entry.lesson;
    var course = entry.course;
    var u = me();
    /* A drill NEVER loads your saved solution — that is the whole point of
       it. Its scratch buffer sits under a separate key so an abandoned
       attempt survives a phone interruption without ever becoming a second
       answer key. */
    var saved = drill
      ? codeGet(store.currentUser, DRILL_TAG + lesson.id)
      : codeGet(store.currentUser, lesson.id);
    var files = starterFiles(lesson);
    if (saved) Object.keys(files).forEach(function (n) { if (saved[n] != null) files[n] = saved[n]; });

    /* Grade only the first k+1 checkpoints. Slicing the lesson handed to the
       runner is all it takes — the grader is built from lesson.steps. */
    var drillK = drill ? Math.min(drill.k, (lesson.steps || []).length - 1) : -1;
    var gradedLesson = drill
      ? Object.keys(lesson).reduce(function (o, key) { o[key] = lesson[key]; return o; }, {})
      : lesson;
    if (drill) gradedLesson.steps = (lesson.steps || []).slice(0, drillK + 1);
    var shownSteps = drill ? gradedLesson.steps : (lesson.steps || []);

    current = {
      entry: entry, lesson: lesson, course: course, freeplay: !!freeplay,
      stepState: shownSteps.map(function () { return { state: "idle", msg: "" }; }),
      hasRun: false, running: false, hintsShown: 0, allPass: false, drill: drill || null
    };
    /* Deliberately a closure variable, not a field on `current` — see the
       practice button below. */
    var practice = false;
    var drillRuns = 0, drillFailedRuns = 0, drillSettled = false;

    var scr = el("div", "lesson");

    var top = el("div", "l-top");
    var back = el("button", "l-x", "✕");
    back.onclick = function () {
      /* A pending debounced save would otherwise fire after unmount, with
         current already null. */
      if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; }
      /* Walking away from an unfinished drill IS the answer: it counts as a
         miss, or the ladder only ever hears about successes. */
      if (drill && !drillSettled) {
        if (!confirm("Leave this drill? It counts as a miss and comes back tomorrow.")) return;
        settleDrill(false);
      }
      current = null;
      if (drill) { renderReview(); return; }
      freeplay || !course ? renderCatalog() : renderCourse(course);
    };
    top.appendChild(back);
    var tt = el("div", "l-tt");
    function drillKicker() {
      return "🎯 RECALL · DRILL " + (drillK + 1) + "/" + (lesson.steps || []).length;
    }
    var kicker = el("div", "l-kicker" + (drill ? " drill" : ""), drill
      ? drillKicker()
      : (freeplay ? "PLAYGROUND" : (esc(course.title).toUpperCase() + " · UNIT " + (entry.unitIndex + 1))));
    tt.appendChild(kicker);
    tt.appendChild(el("div", "l-title", esc(lesson.title)));
    top.appendChild(tt);
    var badge = el("div", "l-badge", stepBadgeText());
    top.appendChild(badge);
    scr.appendChild(top);

    var tabs = el("div", "l-tabs");
    var resultLabel = lesson.kind === "shell" ? "▶ Terminal" : (lesson.kind === "js" ? "▶ Output" : "▶ Result");
    var codeLabel = lesson.kind === "shell" ? "⌨️ Commands" : "✏️ Code";
    var tabDefs = [["learn", "📖 Learn"], ["code", codeLabel], ["result", resultLabel]];
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
        /* In a drill the solution is the answer to the question being asked,
           so it stays locked until at least one real attempt has been graded.
           Retrieval you abandon before trying is not retrieval. */
        if (drill) { solBtn.disabled = true; solBtn.textContent = "🔒 Solution (after a run)"; }
        solBtn.onclick = function () {
          if (!confirm("Load the solution into the editor? Your current code for this lesson will be replaced (try the hints first!).")) return;
          Object.keys(lesson.solution).forEach(function (n) { editor.setFile(n, lesson.solution[n]); });
          persistCode();
          toast("Solution loaded — read it, run it, tweak it 🧠");
        };
        helpRow.appendChild(solBtn);
        if (drill) current.unlockSolution = function () {
          solBtn.disabled = false; solBtn.textContent = "🔓 View solution";
        };
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

      /* Re-opening a finished lesson hands back your own passing code, so
         "solve it again" is really "read it again". Practice mode loads the
         starter and stops saving, leaving the solution on disk untouched.
         The flag is closure-scoped rather than on `current` because
         back.onclick sets current to null while a 500ms save may still be
         pending — that ordering is exactly how you overwrite the answer
         you were protecting. */
      if (isDone(lesson.id)) {
        var practiceBtn = el("button", "btn btn-ghost btn-small", "🎯 Practice from scratch");
        practiceBtn.onclick = function () {
          practice = true;
          var blank = starterFiles(lesson);
          Object.keys(blank).forEach(function (n) { editor.setFile(n, blank[n]); });
          practiceBtn.disabled = true;
          savedDot.textContent = "Practice — not saving";
          savedDot.classList.add("show");
          toast("Practice mode — your saved solution is safe 🔒");
        };
        helpRow.appendChild(practiceBtn);
      }
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
    function sameAsStarter() {
      var blank = starterFiles(lesson), now = editor.getFiles();
      var names = Object.keys(blank);
      for (var i = 0; i < names.length; i++) {
        if (String(now[names[i]] || "").trim() !== String(blank[names[i]] || "").trim()) return false;
      }
      return true;
    }

    /* Called exactly once per drill: on a pass, or on the way out without
       one. drillSettled guards the double-fire when a pass is followed by
       tapping ✕. */
    current.settleDrill = function (p) { settleDrill(p); };
    function settleDrill(passed) {
      if (!drill || drillSettled) return;
      drillSettled = true;
      var u2 = me();
      if (!u2) return;
      var outcome = REV.drillOutcome({
        passed: passed, abandoned: !passed,
        kind: lesson.kind, runs: drillRuns, failedRuns: drillFailedRuns,
        hintsShown: current ? current.hintsShown : 0
      });
      REV.gradeDrill(u2, drill.key, outcome, REV.revToday());
      /* Only wipe the scratch buffer on a pass — an abandoned attempt is
         worth keeping so the next sitting resumes rather than restarts. */
      if (passed) codeDel(store.currentUser, DRILL_TAG + lesson.id);
      flushStore();
      if (passed) {
        toast(outcome === "got" ? "Drill cleared 🎯" : "Cleared — logged as close");
      }
      if (drill.onDone) drill.onDone(outcome);
    }

    function persistCode() {
      if (!me()) return;
      if (practice) return;   // never overwrite the saved solution
      /* Writes one key holding one lesson's files. Nothing in the progress
         store changes, so typing never triggers a full serialization. */
      var ok = codeSet(store.currentUser, (drill ? DRILL_TAG : "") + lesson.id, editor.getFiles());
      if (!ok) { toast("⚠ Couldn't save your code — storage may be full"); return; }
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
      var total = shownSteps.length;
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
        shownSteps.forEach(function (s, i) {
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
      if (drill) drillRuns++;
      runner.run(gradedLesson, editor.getFiles(), {
        previewEl: previewHost,
        onConsole: pushConsole
      }).then(function (res) {
        if (!current || current.lesson !== lesson) return;
        current.running = false;
        current.hasRun = true;
        runBtn.disabled = false;

        var steps = shownSteps;
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
        if (drill) {
          if (current.unlockSolution) { current.unlockSolution(); current.unlockSolution = null; }
          if (!allPass) { drillFailedRuns++; runBtn.textContent = "▶ Run"; return; }
          /* A prefix the STARTER already satisfies would hand out a free pass.
             validate.js proves a starter fails some checkpoint, not the first,
             so detect it exactly: untouched files plus a clean pass means this
             depth asks nothing. Go deeper instead of paying out. */
          if (sameAsStarter() && drillK < (lesson.steps || []).length - 1) {
            drillK++;
            gradedLesson.steps = (lesson.steps || []).slice(0, drillK + 1);
            shownSteps = gradedLesson.steps;
            current.stepState = shownSteps.map(function () { return { state: "idle", msg: "" }; });
            current.allPass = false;
            kicker.textContent = drillKicker();
            paintChecks();
            runBtn.textContent = "▶ Run";
            toast("The starter already passed that far — going one deeper 🎯");
            return;
          }
          runBtn.textContent = "▶ Run again";
          settleDrill(true);
          return;
        }
        if (allPass) {
          runBtn.textContent = "▶ Run again";
          if (!isDone(lesson.id)) completeLesson(entry);
          else {
            /* Re-solving a finished lesson is real work, so it holds the
               flame. Without this the only streak-worthy act in the app is
               the one you have never done before. bumpStreak is idempotent
               per day, so this cannot be farmed. */
            var ru = me();
            if (ru) { bumpStreak(ru); saveStore(); syncAcademy(function (t) { bumpStreak(t); }); }
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
      var order = q.choices.map(function (_, i) { return i; });
      for (var s = order.length - 1; s > 0; s--) {
        var r = Math.floor(Math.random() * (s + 1));
        var tmp = order[s]; order[s] = order[r]; order[r] = tmp;
      }
      order.forEach(function (orig) {
        var b = el("button", "q-choice");
        b.innerHTML = mdInline(q.choices[orig]);
        b.onclick = function () {
          if (answered) return;
          answered = true;
          var right = orig === q.answer;
          if (right) correct++;
          Array.prototype.slice.call(box.children).forEach(function (n, j) {
            n.disabled = true;
            if (order[j] === q.answer) n.classList.add("correct");
            else if (order[j] === orig) n.classList.add("wrong");
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
     RECALL — spaced repetition over the quiz bank
     ------------------------------------------------------------
     One card is one quiz question shown WITHOUT its four choices,
     so the answer has to be produced rather than spotted. Short
     answers are typed and graded by string comparison; longer
     ones are revealed and self-graded, and the two accuracies are
     reported separately forever, because only the typed ones are
     evidence. Scheduling lives in review.js.
     ============================================================ */
  function reviewCourses(u) {
    var want = REV.coursePrefixes(u);
    return COURSES.filter(function (c) { return want.indexOf(c.prefix) !== -1; });
  }
  /* Warm the courses today's cards come from while he reads the catalog, so
     tapping Recall does not stall on a cellular connection. */
  function prefetchReviewCourses(u) {
    reviewCourses(u).forEach(function (c) { if (!c._loaded) loadCourse(c)["catch"](function () {}); });
  }
  function reviewPool(u) {
    var pool = REV.collectItems(reviewCourses(u).filter(function (c) { return c._loaded; }), u);
    REV.pruneOrphans(u, pool);
    return pool;
  }

  /* Open a drill: find the lesson, load its course if needed, hand
     renderWorkspace the key and the depth. */
  function startDrill(drill) {
    var course = window.CODELAB._byId[drill.courseId];
    if (!course) { toast("Couldn't find that lesson"); return; }
    loadCourse(course).then(function () {
      var hit = lessonById(course, drill.lessonId);
      if (!hit) { toast("Couldn't find that lesson"); return; }
      openLesson(course, hit.gi, {
        key: drill.key,
        k: drill.k,
        onDone: function () { renderReview(); }
      });
    })["catch"](function () { toast("Couldn't load that course"); });
  }

  function renderReview() {
    if (!store.currentUser || !me()) { renderProfiles(); return; }
    clear();
    var u = me();
    app.appendChild(topbar());
    var wrap = el("div", "wrap");
    app.appendChild(wrap);

    var pending = reviewCourses(u).filter(function (c) { return !c._loaded; });
    if (pending.length) {
      wrap.appendChild(el("div", "rv-loading", "Loading your cards…"));
      Promise.all(pending.map(function (c) { return loadCourse(c)["catch"](function () { return c; }); }))
        .then(function () { renderReview(); });
      return;
    }

    var today = REV.revToday();
    var pool = reviewPool(u);
    var queue = REV.buildQueue(u, pool, today);
    var offered = queue.keys.length;
    var introduced = Object.keys(u.rev || {}).length;
    var skipped = Object.keys(u.revSkip || {}).length;

    var head = el("div", "rv-head");
    head.appendChild(el("div", "hero-kicker", "RECALL"));
    head.appendChild(el("h1", "hero-title", offered ? offered + " card" + (offered === 1 ? "" : "s") + " today" : "Nothing due"));

    if (offered) {
      var mins = Math.max(1, Math.round(offered * 12 / 60));
      head.appendChild(el("p", "hero-sub", "About " + mins + " minute" + (mins === 1 ? "" : "s") + ". Answers are hidden — say it before you look."));
      var go = el("button", "btn btn-green", "Start recall");
      go.onclick = function () { renderReviewSession(queue, pool); };
      head.appendChild(go);
    } else {
      var next = REV.nextDueDay(u, today);
      /* A caught-up SRS looks broken when it shows an empty screen, so say
         when the next one lands. */
      head.appendChild(el("p", "hero-sub", next === null
        ? "Finish a quiz to start building your recall deck."
        : "Next review in " + (next - today) + " day" + (next - today === 1 ? "" : "s") + "."));
      if (pool.length) {
        var practice = el("button", "btn btn-ghost", "Practice 5 anyway");
        practice.onclick = function () {
          var soon = pool.filter(function (it) { return REV.recOf(u, it.key); })
            .sort(function (a, b) { return REV.recOf(u, a.key)[1] - REV.recOf(u, b.key)[1]; })
            .slice(0, 5);
          if (!soon.length) { toast("Nothing to practice yet"); return; }
          /* Off-schedule study records misses but never promotions: forgetting
             early is evidence, remembering early is not. */
          renderReviewSession({ day: today, keys: soon.map(function (i) { return i.key; }), i: 0, ok: 0, n: soon.length, redo: [], noPromote: true }, pool);
        };
        head.appendChild(practice);
      }
    }
    wrap.appendChild(head);

    /* Reachable from the home too — otherwise the code tier is invisible on
       every day the card queue is already clear. */
    var homeDrill = REV.pickDrill(u, reviewCourses(u).filter(function (c) { return c._loaded; }), pool, today);
    if (homeDrill) {
      var dRow = el("div", "rv-drill");
      dRow.appendChild(el("div", "rv-line strong", "🎯 Code drill ready"));
      dRow.appendChild(el("div", "rv-line dim", esc(homeDrill.title) + " · rebuild "
        + (homeDrill.k + 1) + " of " + homeDrill.steps + " checkpoint" + (homeDrill.steps === 1 ? "" : "s")
        + " from the starter files"));
      var dGo = el("button", "btn " + (offered ? "btn-ghost" : "btn-green"), "Start drill");
      dGo.onclick = function () { startDrill(homeDrill); };
      dRow.appendChild(dGo);
      wrap.appendChild(dRow);
    }

    var stats = el("div", "rv-stats");
    stats.appendChild(el("div", "rv-line", introduced + " of " + pool.length + " questions introduced"
      + (skipped ? " · " + skipped + " set aside" : "")));
    /* The only number here that can go DOWN when he is actually forgetting. */
    stats.appendChild(el("div", "rv-line strong", "🛡️ Holding at " + REV.HOLDING_DAYS + "+ days: " + REV.holdingCount(u)));
    var st = u.revStats || {};
    if (st.a) {
      stats.appendChild(el("div", "rv-line dim", "Lifetime — typed " + (st.tc || 0) + "/" + (st.ta || 0)
        + " · self-reported " + (st.c || 0) + "/" + (st.a || 0)));
    }
    wrap.appendChild(stats);

    var back = el("button", "btn btn-ghost", "← All courses");
    back.onclick = renderCatalog;
    wrap.appendChild(back);
  }

  function renderReviewSession(queue, pool) {
    var u = me();
    var byKey = {};
    pool.forEach(function (it) { byKey[it.key] = it; });
    var denom = queue.n || queue.keys.length;

    var scr = el("div", "lesson quiz");
    var top = el("div", "l-top");
    var x = el("button", "l-x", "✕");
    x.onclick = function () { flushStore(); renderReview(); };
    top.appendChild(x);
    var tt = el("div", "l-tt");
    tt.appendChild(el("div", "l-kicker", "RECALL"));
    var ttl = el("div", "l-title", "Say it before you look");
    tt.appendChild(ttl);
    top.appendChild(tt);
    var badge = el("div", "l-badge", "1/" + denom);
    top.appendChild(badge);
    scr.appendChild(top);
    var body = el("div", "quiz-body");
    scr.appendChild(body);
    app.appendChild(scr);

    function nextKey() {
      if (queue.i < queue.keys.length) return queue.keys[queue.i];
      if (queue.redo && queue.redo.length) return queue.redo.shift();
      return null;
    }

    function show() {
      var key = nextKey();
      if (!key) return finish();
      var item = byKey[key];
      /* A question edited or deleted since the queue froze leaves a hole;
         skip past it so "12 cards" still means twelve. */
      if (!item) { queue.i++; return show(); }

      var doneCount = Math.min(queue.i + 1, denom);
      badge.textContent = doneCount + "/" + denom
        + (queue.redo && queue.redo.length ? " · " + queue.redo.length + " to redo" : "");
      body.innerHTML = "";
      var inner = el("div", "quiz-in");

      var src = el("button", "rv-src", esc(item.courseTitle) + " · " + esc(item.unitTitle));
      src.title = "Open the cheatsheet";
      src.onclick = function () {
        var course = window.CODELAB._byId[item.courseId];
        var unit = (course.units || []).filter(function (un) { return un.id === item.unitId; })[0];
        if (unit) showCheatsheet(unit);
      };
      inner.appendChild(src);

      inner.appendChild(el("div", "q-prompt", mdInline(item.q)));
      if (item.code) {
        var pre = el("pre", "q-code");
        pre.innerHTML = "<code>" + window.CODELAB.hl(item.code, item.lang || "js") + "</code>";
        inner.appendChild(pre);
      }

      var started = Date.now();
      var typedWrong = null;

      function reveal(graded) {
        var fb = el("div", "q-fb " + (graded === true ? "ok" : graded === false ? "no" : ""));
        fb.innerHTML = "<b>" + (graded === true ? "Correct!" : graded === false ? "Not quite." : "Answer") + "</b> "
          + mdInline(item.answer) + (item.explain ? "<br><span class=\"rv-why\">" + mdInline(item.explain) + "</span>" : "");
        inner.appendChild(fb);
        fb.scrollIntoView({ block: "nearest" });
      }

      function settle(outcome) {
        var elapsed = Date.now() - started;
        if (queue.noPromote && outcome !== "missed") outcome = "close";
        REV.grade(u, key, outcome, elapsed, queue.day);
        if (outcome === "got") queue.ok++;
        if (outcome === "missed") {
          queue.redo = queue.redo || [];
          if (queue.redo.indexOf(key) === -1 && queue.keys.indexOf(key) < queue.i + 1) queue.redo.push(key);
        }
        if (queue.i < queue.keys.length) queue.i++;
        saveStoreSoon();
        show();
      }

      if (item.typed) {
        var row = el("div", "rv-input-row");
        var input = el("input", "rv-input");
        input.setAttribute("placeholder", "Type your answer…");
        /* Without these iOS ships "Const" and autocorrects identifiers, and
           every code card becomes a false negative. */
        input.setAttribute("autocapitalize", "off");
        input.setAttribute("autocorrect", "off");
        input.setAttribute("autocomplete", "off");
        input.setAttribute("spellcheck", "false");
        row.appendChild(input);
        var check = el("button", "btn btn-green btn-small", "Check");
        row.appendChild(check);
        inner.appendChild(row);

        check.onclick = function () {
          var raw = input.value;
          if (!raw.trim()) { input.focus(); return; }
          var right = REV.answerMatches({ choices: [item.answer], answer: 0 }, raw, (u.revAlt || {})[key]);
          REV.recordTyped(u, right);
          input.disabled = true; check.disabled = true;
          reveal(right);
          if (right) { settle("got"); return; }
          typedWrong = raw;
          /* Offered, but it does NOT regrade this attempt. A learner who can
             re-mark their own miss on a phone at 11pm has a ladder that
             tracks mood rather than memory. */
          var alt = el("button", "btn btn-ghost btn-small", "That should have counted");
          alt.onclick = function () {
            REV.noteAlt(u, key, typedWrong);
            alt.disabled = true;
            alt.textContent = "Noted — it'll count next time";
            saveStoreSoon();
          };
          inner.appendChild(alt);
          var cont = el("button", "btn btn-red", "Continue");
          cont.onclick = function () { settle("missed"); };
          inner.appendChild(cont);
        };
        input.onkeydown = function (e) { if (e.key === "Enter") check.onclick(); };
        setTimeout(function () { input.focus(); }, 50);
      } else {
        var showBtn = el("button", "btn btn-green", "Show answer");
        showBtn.onclick = function () {
          showBtn.remove();
          reveal(null);
          var grades = el("div", "rv-grade");
          [["Missed", "missed", "btn-red"], ["Close", "close", "btn-ghost"], ["Got it", "got", "btn-green"]]
            .forEach(function (g) {
              var b = el("button", "btn btn-small " + g[2], g[0]);
              b.onclick = function () { settle(g[1]); };
              grades.appendChild(b);
            });
          inner.appendChild(grades);
        };
        inner.appendChild(showBtn);
      }

      var cant = el("button", "rv-cant", "Can't answer this one");
      cant.title = "Set this card aside for good";
      cant.onclick = function () {
        REV.skipItem(u, key);
        if (queue.i < queue.keys.length) queue.i++;
        saveStoreSoon();
        toast("Set aside 🗂");
        show();
      };
      inner.appendChild(cant);

      body.appendChild(inner);
      window.scrollTo(0, 0);
    }

    function finish() {
      var st = u.revStats || {};
      st.s = (st.s || 0) + 1;
      var graded = queue.n || queue.keys.length;
      var bumped = false;
      if (REVIEW_BUMPS_STREAK && !queue.noPromote && graded >= Math.min(REVIEW_MIN_SESSION, denom)) {
        bumpStreak(u);
        /* Only the streak crosses to Academy. Review is not completion, so
           t.completed is left alone. */
        syncAcademy(function (t) { bumpStreak(t); });
        bumped = true;
      }
      u.revQueue = null;
      if (!flushStore()) toast("⚠ Couldn't save — storage may be full");

      body.innerHTML = "";
      var inner = el("div", "quiz-in center");
      inner.appendChild(el("div", "done-emoji", "🧠"));
      inner.appendChild(el("h2", "done-title", "Recall done"));
      inner.appendChild(el("div", "done-sub", queue.ok + " of " + graded + " remembered"));

      var rr = el("div", "reward-row");
      rr.appendChild(reward("Holding 35+ days", "🛡️ " + REV.holdingCount(u)));
      if (bumped) rr.appendChild(reward("Streak", "🔥 " + u.streak));
      inner.appendChild(rr);

      /* Two numbers, never merged — the gap between them is the only estimate
         this system has of its own self-grading inflation. */
      if (st.a) {
        inner.appendChild(el("div", "rv-line dim", "Lifetime — typed " + (st.tc || 0) + "/" + (st.ta || 0)
          + " · self-reported " + (st.c || 0) + "/" + (st.a || 0)));
      }
      var alts = Object.keys(u.revAlt || {});
      if (alts.length) {
        inner.appendChild(el("div", "rv-line dim", alts.length + " answer" + (alts.length === 1 ? "" : "s")
          + " you flagged as should-have-counted — see CODELAB.dev.rev.alts()"));
      }
      var next = REV.nextDueDay(u, queue.day);
      if (next != null) inner.appendChild(el("div", "rv-line", "Next review in " + (next - queue.day) + " day" + (next - queue.day === 1 ? "" : "s")));

      var acts = el("div", "done-actions");
      /* Offered, never queued. Cards are the daily habit; a 10-minute coding
         drill has to be something you opt into or it turns the whole thing
         into a chore. */
      var drill = REV.pickDrill(u, COURSES.filter(function (c) { return c._loaded; }), pool, queue.day);
      if (drill) {
        var dBtn = el("button", "btn btn-green", "🎯 Drill: " + esc(drill.title));
        dBtn.onclick = function () { startDrill(drill); };
        acts.appendChild(dBtn);
        inner.appendChild(el("div", "rv-line dim",
          "Rebuild " + (drill.k + 1) + " of " + drill.steps + " checkpoint" + (drill.steps === 1 ? "" : "s")
          + " from the starter files · " + esc(drill.unitTitle)));
      }
      var toCat = el("button", "btn " + (drill ? "btn-ghost" : "btn-green"), "Back to courses");
      toCat.onclick = renderCatalog;
      acts.appendChild(toCat);
      inner.appendChild(acts);
      body.appendChild(inner);
      window.scrollTo(0, 0);
    }

    show();
  }

  /* ============================================================
     HANDOFF — moving a profile between two devices
     ------------------------------------------------------------
     localStorage is per-device, so phone progress is simply
     stranded from the desktop. There is no server to fix that,
     so the transport is a code you carry across yourself — via
     whatever channel you already have, which is why it is text
     and why saved lesson code is left out of it (that is 95% of
     the bytes and 0% of what is stranded).

     Everything risky lives in sync.js and is proven by property
     tests: the merge is idempotent, commutative and convergent,
     so importing twice does nothing and it does not matter which
     device you import into first.
     ============================================================ */
  var UNDO_KEY = "codelab_undo_v1";

  function xpOfLessonId(lessonId) {
    for (var i = 0; i < COURSES.length; i++) {
      var c = COURSES[i];
      if (!c._loaded) continue;
      var hit = lessonById(c, lessonId);
      if (hit) return xpOf(hit.lesson);
    }
    return null;   // course not loaded — caller defers the XP rather than guessing
  }

  /* Lessons merged in while their course was unloaded get their XP the next
     time that course loads, so the number is never silently short. */
  function payXpOwed() {
    var u = me();
    if (!u || !u.xpOwed || !u.xpOwed.length) return 0;
    var still = [], paid = 0;
    u.xpOwed.forEach(function (id) {
      var v = xpOfLessonId(id);
      if (v == null) still.push(id); else paid += v;
    });
    if (paid) { u.xp += paid; u.xpOwed = still; saveStore(); syncAcademyXp(u); }
    else u.xpOwed = still;
    return paid;
  }

  /* The mirror is DERIVED, so it is re-derived after a merge rather than
     merged itself. A ledger of what CodeLab has contributed keeps this
     idempotent and stops it from stealing XP the Academy app added. */
  function syncAcademyXp(u) {
    syncAcademy(function (t) {
      var owed = (u.xp || 0) - (t.clXp || 0);
      if (owed > 0) t.xp = (t.xp || 0) + owed;
      t.clXp = u.xp || 0;
      Object.keys(u.done).forEach(function (id) { t.completed[id] = true; });
      t.streak = u.streak; t.lastDay = u.lastDay;
    });
  }

  function currentEnvelope() {
    var u = me();
    return SYNC.buildEnvelope(store.currentUser, u, {
      today: REV.revToday(), deviceId: deviceId(), from: deviceLabel(),
      at: new Date().toISOString()
    });
  }

  function renderSync() {
    if (!store.currentUser || !me()) { renderProfiles(); return; }
    clear();
    var u = me();
    app.appendChild(topbar());
    var wrap = el("div", "wrap");
    app.appendChild(wrap);

    var head = el("div", "rv-head");
    head.appendChild(el("div", "hero-kicker", "HANDOFF"));
    head.appendChild(el("h1", "hero-title", "Move this profile"));
    head.appendChild(el("p", "hero-sub",
      "Your phone and your desktop keep separate storage — nothing crosses on its own. Copy the code below, "
      + "send it to yourself however you like, and paste it on the other device. Importing the same code twice does nothing."));
    wrap.appendChild(head);

    /* ---- export ---- */
    var env = currentEnvelope();
    var text = JSON.stringify(env);
    var box = el("div", "rv-stats");
    box.appendChild(el("div", "rv-line strong", "📤 Copy from this device"));
    box.appendChild(el("div", "rv-line dim",
      env.counts.done + " lessons · " + env.counts.rev + " cards · " + env.counts.days + " study days · "
      + (text.length / 1024).toFixed(1) + "KB"));
    var ta = el("textarea", "sync-code");
    ta.value = text;
    ta.setAttribute("readonly", "readonly");
    ta.setAttribute("spellcheck", "false");
    box.appendChild(ta);
    var row = el("div", "sync-row");
    var copy = el("button", "btn btn-green btn-small", "Copy code");
    copy.onclick = function () {
      ta.select();
      var done = false;
      try { done = document.execCommand("copy"); } catch (e) {}
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { toast("Copied ✓ paste it on the other device"); },
          function () { if (!done) toast("Select the code and copy it manually"); });
      } else toast(done ? "Copied ✓" : "Select the code and copy it manually");
    };
    row.appendChild(copy);
    var dl = el("button", "btn btn-ghost btn-small", "Save as file");
    dl.onclick = function () {
      try {
        var blob = new Blob([text], { type: "application/json" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "codelab-" + store.currentUser + "-" + SYNC.dayStr(REV.revToday()) + ".json";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
      } catch (e) { toast("Couldn't save a file — copy the code instead"); }
    };
    row.appendChild(dl);
    box.appendChild(row);
    box.appendChild(el("div", "rv-line dim",
      "Saved lesson code is not included — it is most of the bytes and none of what gets stranded."));
    wrap.appendChild(box);

    /* ---- import ---- */
    var inBox = el("div", "rv-stats");
    inBox.appendChild(el("div", "rv-line strong", "📥 Paste a code from the other device"));
    var inTa = el("textarea", "sync-code");
    inTa.setAttribute("placeholder", "Paste the code here…");
    inTa.setAttribute("spellcheck", "false");
    inTa.setAttribute("autocapitalize", "off");
    inBox.appendChild(inTa);
    var previewHost = el("div", "sync-preview");
    var check = el("button", "btn btn-green btn-small", "Check this code");
    check.onclick = function () {
      previewHost.innerHTML = "";
      var parsed = SYNC.parseEnvelope(inTa.value);
      if (!parsed.ok) { previewHost.appendChild(el("div", "sync-warn", esc(parsed.error))); return; }
      showPreview(parsed.env, previewHost);
    };
    inBox.appendChild(check);
    inBox.appendChild(previewHost);
    wrap.appendChild(inBox);

    /* ---- undo ---- */
    var undoRaw = null;
    try { undoRaw = JSON.parse(localStorage.getItem(UNDO_KEY)); } catch (e) {}
    if (undoRaw && undoRaw.profile === store.currentUser) {
      var ub = el("div", "rv-stats");
      ub.appendChild(el("div", "rv-line strong", "↩ Undo the last merge"));
      ub.appendChild(el("div", "rv-line dim",
        "Restores this profile to exactly how it was before you imported on " + esc(undoRaw.when || "?") + "."
        + " Anything you have studied since then would be rolled back too."));
      var ub2 = el("button", "btn btn-ghost btn-small", "Undo that merge");
      ub2.onclick = function () {
        if (!confirm("Roll this profile back to before the last import? Anything studied since is lost.")) return;
        store.users[store.currentUser] = undoRaw.user;
        try { localStorage.removeItem(UNDO_KEY); } catch (e) {}
        flushStore();
        syncAcademyXp(me());
        toast("Rolled back ↩");
        renderSync();
      };
      ub.appendChild(ub2);
      wrap.appendChild(ub);
    }

    var back = el("button", "btn btn-ghost", "← All courses");
    back.onclick = renderCatalog;
    wrap.appendChild(back);
  }

  function showPreview(env, host) {
    var u = me();
    var incoming = SYNC.envelopeToProfile(env);
    /* The preview runs the REAL merge into a copy and diffs that, so what is
       shown can never disagree with what commit writes. */
    var res = SYNC.mergeProfile(u, incoming, { today: REV.revToday(), xpOf: xpOfLessonId });
    var d = SYNC.diffProfiles(u, res.user);

    var card = el("div", "sync-card");
    card.appendChild(el("div", "rv-line strong",
      "From " + esc(env.from || "another device") + (env.profile !== store.currentUser
        ? ' — profile "' + esc(env.profile) + '"' : "")));

    if (env.profile !== store.currentUser) {
      card.appendChild(el("div", "sync-warn",
        'That code is from the profile "' + esc(env.profile) + '" and you are signed in as "'
        + esc(store.currentUser) + '". It will merge into ' + esc(store.currentUser) + "."));
    }
    if (env.day > REV.revToday() + 1) {
      card.appendChild(el("div", "sync-warn",
        "That code is dated in the future — the other device's clock may be wrong. Future-dated study days are ignored."));
    }

    if (d.empty) {
      card.appendChild(el("div", "rv-line", "Nothing to change — this profile already has everything in that code."));
    } else {
      var list = el("ul", "sync-list");
      function line(t) { list.appendChild(el("li", "", t)); }
      if (d.lessons) line("<b>" + d.lessons + "</b> lesson" + (d.lessons === 1 ? "" : "s") + " marked complete");
      if (d.xp) line("<b>+" + d.xp + "</b> XP");
      if (d.owed) line(d.owed + " lesson" + (d.owed === 1 ? "" : "s") + " whose course isn't loaded — XP arrives when it is");
      if (d.cardsAdded) line("<b>" + d.cardsAdded + "</b> new review card" + (d.cardsAdded === 1 ? "" : "s"));
      if (d.cardsChanged) line("<b>" + d.cardsChanged + "</b> card schedule" + (d.cardsChanged === 1 ? "" : "s") + " updated");
      if (d.quizzesImproved) line("<b>" + d.quizzesImproved + "</b> quiz score" + (d.quizzesImproved === 1 ? "" : "s") + " improved");
      if (d.daysAdded) line("<b>" + d.daysAdded + "</b> extra study day" + (d.daysAdded === 1 ? "" : "s"));
      card.appendChild(list);
      if (d.streakAfter !== d.streakBefore) {
        card.appendChild(el("div", d.streakAfter < d.streakBefore ? "sync-warn" : "rv-line",
          "🔥 Streak " + d.streakBefore + " → " + d.streakAfter
          + (d.streakAfter < d.streakBefore
            ? ". The higher number was a run that had already ended — it would have reset on your next study day anyway."
            : ".")));
      }
      var go = el("button", "btn btn-green btn-small", "Merge this in");
      go.onclick = function () { commitMerge(env, res); };
      card.appendChild(go);
    }
    var cancel = el("button", "btn btn-ghost btn-small", d.empty ? "Close" : "Cancel");
    cancel.onclick = function () { host.innerHTML = ""; };
    card.appendChild(cancel);
    host.innerHTML = "";
    host.appendChild(card);
  }

  function commitMerge(env, res) {
    var name = store.currentUser;
    /* Snapshot BEFORE anything is written, so undo is a restore rather than
       an attempt to compute an inverse of a union. */
    try {
      localStorage.setItem(UNDO_KEY, JSON.stringify({
        profile: name, when: SYNC.dayStr(REV.revToday()),
        user: JSON.parse(JSON.stringify(store.users[name]))
      }));
    } catch (e) { /* undo is a nicety; never block the merge on it */ }

    var merged = res.user;
    /* Carry over the fields the merge does not own. */
    merged.code = undefined;
    store.users[name] = merged;
    if (!flushStore()) { toast("⚠ Couldn't save — storage may be full"); return; }
    payXpOwed();
    syncAcademyXp(me());
    toast("Merged ✓");
    renderSync();
  }

  /* ============================================================
     DEV HOOK — automated validation drives the real sandbox
     ============================================================ */
  window.CODELAB.dev = {
    /* Content-independent hooks so the smoke test never depends on a
       particular course happening to hold eligible questions. */
    rev: {
      today: function () { return REV.revToday(); },
      state: function () { var u = me(); return u ? { rev: u.rev, skip: u.revSkip, stats: u.revStats, xp: u.xp, streak: u.streak } : null; },
      pool: function () { var u = me(); return u ? reviewPool(u).map(function (i) { return { key: i.key, typed: i.typed, answer: i.answer }; }) : []; },
      alts: function () { var u = me(); return u ? u.revAlt : {}; },
      seed: function (spec) {
        var u = me(); if (!u) return null;
        u.rev = {}; u.revSkip = {}; u.revQueue = null;
        Object.keys(spec || {}).forEach(function (k) { u.rev[k] = spec[k]; });
        saveStore();
        return u.rev;
      },
      /* Mark a quiz engaged on the LIVE store. Writing to localStorage and
         reloading does not work: `store` is read into memory once at boot. */
      markQuiz: function (id, pct) {
        var u = me(); if (!u) return null;
        u.done[id] = true;
        u.quiz[id] = pct == null ? 100 : pct;
        saveStore();
        return { done: !!u.done[id], quiz: u.quiz[id] };
      },
      open: function () { renderReview(); },
      /* Drill hooks. pickDrill needs loaded courses, so the caller does
         loadAll() first — same contract as pool(). */
      pickDrill: function () {
        var u = me(); if (!u) return null;
        return REV.pickDrill(u, COURSES.filter(function (c) { return c._loaded; }), reviewPool(u), REV.revToday());
      },
      startDrill: function (d) { startDrill(d || window.CODELAB.dev.rev.pickDrill()); },
      settle: function (passed) { if (current && current.settleDrill) current.settleDrill(!!passed); },
      drillState: function (lessonId) {
        var u = me(); if (!u) return null;
        return {
          rec: u.rev[REV.drillKey(lessonId)] || null,
          scratch: codeGet(store.currentUser, DRILL_TAG + lessonId),
          savedCode: codeGet(store.currentUser, lessonId)
        };
      },
      answer: function (key, text) {
        var u = me(); if (!u) return null;
        var item = reviewPool(u).filter(function (i) { return i.key === key; })[0];
        if (!item) return null;
        var right = REV.answerMatches({ choices: [item.answer], answer: 0 }, text, (u.revAlt || {})[key]);
        REV.recordTyped(u, right);
        REV.grade(u, key, right ? "got" : "missed", 9999, REV.revToday());
        saveStore();
        return { right: right, rec: u.rev[key] };
      }
    },
    loadAll: function () {
      return COURSES.reduce(function (p, c) { return p.then(function () { return loadCourse(c); }); }, Promise.resolve());
    },
    loadCourse: loadCourse,
    setCodeForTest: function (lessonId, files) {
      if (!me()) return null;
      codeSet(store.currentUser, lessonId, files);
      return codeGet(store.currentUser, lessonId);
    },
    codeStore: function () {
      var out = {}, pre = CODE_PREFIX;
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(pre) === 0) out[k] = (localStorage.getItem(k) || "").length;
      }
      return out;
    },
    /* Exercises the real migration by planting a pre-split profile in the
       LIVE store. Writing localStorage directly and reloading does not work:
       the pagehide flush would overwrite the plant on the way out. */
    migrateCodeForTest: function (lessonId, files) {
      var u = me(); if (!u) return null;
      u.code = {}; u.code[lessonId] = files;
      var before = JSON.stringify(store).length;
      var res = migrateInlineCode();
      return {
        moved: res.moved, stuck: res.stuck,
        inlineGone: !u.code,
        movedValue: codeGet(store.currentUser, lessonId),
        storeShrankBy: before - JSON.stringify(store).length
      };
    },
    clearProfileCode: function (name) { return codeClearProfile(name || store.currentUser); },
    /* Handoff hooks: export this profile, and merge an envelope in without
       touching the DOM, so the validator can drive a full round trip. */
    handoff: {
      exportText: function () { return JSON.stringify(currentEnvelope()); },
      profile: function () { var u = me(); return u ? JSON.parse(JSON.stringify(u)) : null; },
      preview: function (text) {
        var u = me(); if (!u) return null;
        var parsed = SYNC.parseEnvelope(text);
        if (!parsed.ok) return { ok: false, error: parsed.error };
        var res = SYNC.mergeProfile(u, SYNC.envelopeToProfile(parsed.env), { today: REV.revToday(), xpOf: xpOfLessonId });
        return { ok: true, diff: SYNC.diffProfiles(u, res.user) };
      },
      merge: function (text) {
        var u = me(); if (!u) return null;
        var parsed = SYNC.parseEnvelope(text);
        if (!parsed.ok) return { ok: false, error: parsed.error };
        var res = SYNC.mergeProfile(u, SYNC.envelopeToProfile(parsed.env), { today: REV.revToday(), xpOf: xpOfLessonId });
        var diff = SYNC.diffProfiles(u, res.user);
        commitMerge(parsed.env, res);
        return { ok: true, diff: diff };
      },
      academy: function () {
        var raw = academyRaw();
        var t = raw && raw.users[store.currentUser] && raw.users[store.currentUser].tracks[ACADEMY_TRACK];
        return t || null;
      }
    },
    editorFiles: function () { return current && current.editor ? current.editor.getFiles() : null; },
    setEditorFiles: function (files) {
      if (!current || !current.editor) return null;
      Object.keys(files || {}).forEach(function (n) { current.editor.setFile(n, files[n]); });
      return current.editor.getFiles();
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
