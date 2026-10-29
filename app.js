/* ============================================================
   Academy — app logic (multi-track: profile → track picker → lessons)
   ------------------------------------------------------------
   Curriculum data lives in window.UNITS (see data/unitN.js).

   QUESTION SCHEMA (each lesson.questions[] entry):

   mcq:        { type:"mcq",       q, choices:[..],     answer:<index>, explain }
   truefalse:  { type:"truefalse", q, answer:true|false,                explain }
   fill:       { type:"fill",      q (use ____ for blank), answer:"word",
                                   accept:["alt",...],                  explain }
   order:      { type:"order",     q, items:[..in CORRECT order..],     explain }
   match:      { type:"match",     q, pairs:[["Term","Def"],...],       explain }
   ============================================================ */

(function () {
  "use strict";

  var TRACKS = (window.ACADEMY && window.ACADEMY.tracks) || [];

  // Every question with a STABLE key (lessonId#index) so we can track which ones were missed.
  function lessonKey(entry) { return entry.lesson.id || ("g" + entry.globalIndex); }
  function trackById(id) { return (window.ACADEMY && window.ACADEMY._byId && window.ACADEMY._byId[id]) || null; }

  /* ---------- current track data (rebuilt whenever a track is chosen) ---------- */
  var currentTrackId = null;
  var UNITS = [];
  var LESSONS = [];         // [{unitIndex, lessonIndex, unit, lesson, globalIndex}]
  var ALL_QUESTIONS = [];
  function loadTrackData(trackId) {
    currentTrackId = trackId;
    var t = trackById(trackId);
    UNITS = (t && t.units) || [];
    LESSONS = [];
    UNITS.forEach(function (u, ui) {
      (u.lessons || []).forEach(function (l, li) {
        LESSONS.push({ unitIndex: ui, lessonIndex: li, unit: u, lesson: l, globalIndex: LESSONS.length });
      });
    });
    ALL_QUESTIONS = [];
    LESSONS.forEach(function (entry) {
      (entry.lesson.questions || []).forEach(function (q, qi) {
        ALL_QUESTIONS.push({ q: q, key: lessonKey(entry) + "#" + qi, gi: entry.globalIndex });
      });
    });
  }

  /* ---------- persistent state (multi-user profiles × multi-track) ---------- */
  var USERS_KEY = "academy_users_v1";
  var store = loadStore();     // { currentUser, users: { name: { tracks: { trackId: progress } } } }
  var state = null;            // current (user × track) progress; set by selectTrack()

  function freshState() { return { completed: {}, missed: {}, xp: 0, streak: 0, lastDay: null }; }
  function freshUser() { return { tracks: {} }; }
  function normalizeState(s) {
    s = s || {};
    s.completed = s.completed || {};
    s.missed = s.missed || {};
    s.xp = s.xp || 0;
    s.streak = s.streak || 0;
    if (!("lastDay" in s)) s.lastDay = null;
    return s;
  }
  function normalizeUser(u) {
    u = u || {};
    u.tracks = u.tracks || {};
    Object.keys(u.tracks).forEach(function (tid) { u.tracks[tid] = normalizeState(u.tracks[tid]); });
    return u;
  }
  function loadStore() {
    try {
      var raw = JSON.parse(localStorage.getItem(USERS_KEY));
      if (raw && raw.users) {
        Object.keys(raw.users).forEach(function (n) { raw.users[n] = normalizeUser(raw.users[n]); });
        return { currentUser: raw.currentUser || null, users: raw.users };
      }
    } catch (e) {}
    return { currentUser: null, users: {} };
  }
  function saveStore() { try { localStorage.setItem(USERS_KEY, JSON.stringify(store)); } catch (e) {} }
  function saveState() { saveStore(); }   // `state` is a live reference into the store, so saving the store persists it

  function userNames() { return Object.keys(store.users); }
  function selectUser(name) { store.currentUser = name; saveStore(); }
  function addUser(name) {
    name = (name || "").trim().slice(0, 24);
    if (!name) name = "Learner " + (userNames().length + 1);
    var base = name, n = 2;
    while (store.users[name]) { name = base + " " + n; n++; }
    store.users[name] = freshUser();
    selectUser(name);
    return name;
  }
  function deleteUser(name) {
    delete store.users[name];
    if (store.currentUser === name) { store.currentUser = null; state = null; }
    saveStore();
  }
  // A visitor trying Academy without a profile ("Try a lesson"). Their progress lives
  // only in memory, shaped like a profile, until they create a profile to keep it.
  var guest = null;
  function curUser() { return store.users[store.currentUser] || guest; }

  // Choose which track the current user is studying; points `state` at that (user × track) progress.
  function selectTrack(trackId) {
    var u = curUser();
    if (!u) return;
    if (!u.tracks[trackId]) u.tracks[trackId] = freshState();
    u.lastTrack = trackId;   // the catalog's "Continue learning" row
    state = u.tracks[trackId];
    loadTrackData(trackId);
    saveStore();
  }
  function userTotalXP(name) {
    var u = store.users[name];
    if (!u || !u.tracks) return 0;
    return Object.keys(u.tracks).reduce(function (s, tid) { return s + (u.tracks[tid].xp || 0); }, 0);
  }
  function userDoneCount(name) {
    var u = store.users[name];
    if (!u || !u.tracks) return 0;
    return Object.keys(u.tracks).reduce(function (s, tid) { return s + Object.keys(u.tracks[tid].completed || {}).length; }, 0);
  }
  function todayKey() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  function bumpStreak() {
    var t = todayKey();
    if (state.lastDay === t) return;
    var y = new Date(); y.setDate(y.getDate() - 1);
    var yKey = y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate();
    state.streak = (state.lastDay === yKey) ? (state.streak + 1) : 1;
    state.lastDay = t;
  }

  function isDone(gi) { return !!state.completed["g" + gi]; }
  function firstIncompleteIndex() {
    for (var i = 0; i < LESSONS.length; i++) if (!isDone(i)) return i;
    return LESSONS.length; // all done
  }
  // A lesson is open once everything before it is done, or once the lesson just
  // before it is (so a learner who starts mid-course, like "Try a lesson", can go on).
  function isUnlocked(gi) { return gi <= firstIncompleteIndex() || isDone(gi - 1); }
  // Where "Continue" goes: the lesson after the last one finished, else the first not done.
  function nextIndex() {
    var l = state.lastGi;
    if (typeof l === "number" && l + 1 < LESSONS.length && !isDone(l + 1)) return l + 1;
    return firstIncompleteIndex();
  }

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
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function toast(msg) {
    var t = el("div", "toast", esc(msg));
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 250); }, 1800);
  }
  function initial(name) { return ((name || "?").trim().charAt(0) || "?").toUpperCase(); }
  var AVATAR_COLORS = ["#58cc02", "#1cb0f6", "#ff9600", "#ce82ff", "#ff4b4b", "#2bb3a3", "#6c5ce7", "#eb3b5a"];
  function avatarColor(name) {
    var h = 0; name = name || "";
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
  }

  /* ============================================================
     COURSE ART — a simple line drawing for each course
     ------------------------------------------------------------
     tracks.js names one with `art: "<key>"`. A track without art (or with
     an unknown key) falls back to its emoji `icon`. Drawn on a 24×24 grid,
     stroked in currentColor, so the tile's colour sets the look.
     ============================================================ */
  var COURSE_ART = {
    diagram:  '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
    browser:  '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18"/><path d="m10 11.5-2.5 2.5 2.5 2.5M14 11.5l2.5 2.5-2.5 2.5"/>',
    ledger:   '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16M14 3v18M7 12h4M7 16h4M16.5 12h1M16.5 16h1"/>',
    capitol:  '<path d="M4 20h16M6 20v-7M10 20v-7M14 20v-7M18 20v-7M4 13h16"/><path d="M6 13a6 6 0 0 1 12 0"/><path d="M12 7V3.5"/>',
    chip:     '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3"/><path d="M12 9.5v5M9.5 12h5"/>',
    shield:   '<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z"/><circle cx="12" cy="11" r="1.6"/><path d="M12 12.6V15"/>',
    hardhat:  '<path d="M5 17v-3a7 7 0 0 1 14 0v3"/><path d="M10 7.3V11M14 7.3V11"/><path d="M3 17h18v2H3Z"/>',
    cube:     '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
    setsquare:'<path d="M4 20V4l16 16Z"/><path d="M8 16v-4.5l4.5 4.5Z"/><path d="M4 8h2M4 12h2"/>',
    clash:    '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/><path d="m8.2 8.2 4.6 4.6M12.8 8.2l-4.6 4.6"/>',
    cloud:    '<path d="M7 18a4 4 0 0 1-.6-8 6 6 0 0 1 11.4 1.5A3.5 3.5 0 0 1 17.5 18Z"/><path d="m9.5 13.5 2 2 3.5-3.5"/>',
    megaphone:'<path d="M3 10h3l8-4v12l-8-4H3Z"/><path d="m6 14 1.5 5H10l-1-4.5"/><path d="M17.5 9.5a3.5 3.5 0 0 1 0 5M19.5 7.5a6.5 6.5 0 0 1 0 9"/>',
    play:     '<rect x="3" y="5" width="18" height="14" rx="4"/><path d="M10 9v6l5-3Z"/>',
    camera:   '<rect x="3" y="7" width="13" height="10" rx="2"/><path d="m16 10.5 5-3v9l-5-3"/>',
    layers:   '<path d="M12 3 3 8l9 5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/>',
    dna:      '<path d="M7 3c0 4.5 10 4.5 10 9s-10 4.5-10 9"/><path d="M17 3c0 4.5-10 4.5-10 9s10 4.5 10 9"/><path d="M8.5 6h7M8.5 18h7"/>',
    globe:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    bell:     '<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/><path d="M12 3v2"/>',
    bond:     '<circle cx="9" cy="6" r="2.5"/><path d="M4 20v-3a5 5 0 0 1 10 0v3"/><circle cx="17" cy="10" r="2"/><path d="M14 20v-2a3 3 0 0 1 6 0v2"/>',
    payoff:   '<rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M12 4v16M4 12h16"/><circle cx="8" cy="8" r="1.3"/><path d="m14.5 14.5 3 3M17.5 14.5l-3 3"/>'
  };
  // Small interface glyphs, same grid and stroke as the course art.
  var GLYPH = {
    check:  '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    cross:  '<path d="m6 6 12 12M18 6 6 18"/>',
    flame:  '<path d="M12 3c.8 3.6 5 5.7 5 10.5a5 5 0 0 1-10 0c0-2.3 1.1-3.7 2.3-4.9.4 1.6 1.2 2.7 2 3-.5-3.1-.2-6.2.7-8.6Z"/>',
    heart:  '<path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    arrow:  '<path d="M7 17 17 7M9 7h8v8"/>',
    chevron:'<path d="m9 6 6 6-6 6"/>',
    plus:   '<path d="M12 5v14M5 12h14"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0Z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4"/>',
    retry:  '<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/>'
  };
  function svg(paths, cls) {
    return '<svg class="' + (cls || "ico") + '" viewBox="0 0 24 24" aria-hidden="true">' + paths + "</svg>";
  }
  function glyph(name) { return svg(GLYPH[name] || ""); }
  // The course tile: its drawing on its colour (or the emoji when it has no drawing).
  function courseTile(t, size) {
    var tile = el("span", "course-tile" + (size ? " " + size : ""));
    tile.style.setProperty("--c", t.color || "#4b5563");
    tile.innerHTML = (t.art && COURSE_ART[t.art]) ? svg(COURSE_ART[t.art], "art") : '<span class="emoji">' + esc(t.icon || "🎓") + "</span>";
    return tile;
  }

  /* ---------- shared top bar ---------- */
  // `current` is "catalog" or "course"; the course link is shown only when a course is open.
  function appBar(current) {
    var bar = el("header", "appbar");
    var inner = el("div", "appbar-inner");
    var logo = el("button", "logo", '<span class="logo-mark">A</span><span>Academy</span>');
    logo.title = "Course catalog";
    logo.onclick = function () { renderTracks(); };
    inner.appendChild(logo);

    var nav = el("nav", "appnav");
    var cat = el("button", current === "catalog" ? "on" : "", "Catalog");
    cat.onclick = function () { renderTracks(); };
    nav.appendChild(cat);
    if (current === "course") {
      var tr = trackById(currentTrackId) || {};
      nav.appendChild(el("button", "on", esc(tr.title || "Course")));
    }
    inner.appendChild(nav);

    var right = el("div", "appbar-right");
    if (current === "course" && state) {
      if (state.streak) right.appendChild(el("span", "stat-chip streak", glyph("flame") + state.streak + "-day streak"));
      right.appendChild(el("span", "stat-chip", state.xp + " XP"));
    } else {
      var best = userBestStreak(curUser());
      if (best) right.appendChild(el("span", "stat-chip streak", glyph("flame") + best + "-day streak"));
    }
    if (!store.users[store.currentUser]) {
      var save = el("button", "btn primary small", "Create a profile");
      save.onclick = function () { createProfile(current); };
      right.appendChild(save);
      inner.appendChild(right);
      bar.appendChild(inner);
      return bar;
    }
    var userBtn = el("button", "user-chip");
    userBtn.innerHTML = '<span class="user-av" style="background:' + avatarColor(store.currentUser) + '">' + initial(store.currentUser) + '</span>' +
      '<span class="user-name">' + esc(store.currentUser) + "</span>";
    userBtn.title = "Switch profile";
    userBtn.onclick = function () { renderProfiles(); };
    right.appendChild(userBtn);
    inner.appendChild(right);
    bar.appendChild(inner);
    return bar;
  }
  function userBestStreak(u) {
    if (!u || !u.tracks) return 0;
    return Object.keys(u.tracks).reduce(function (m, tid) { return Math.max(m, u.tracks[tid].streak || 0); }, 0);
  }
  function plural(n, word) { return n.toLocaleString() + " " + word + (n === 1 ? "" : "s"); }

  /* ============================================================
     WELCOME  (first visit on this device: no profiles yet)
     ============================================================ */
  function courseStats() {
    var quiz = TRACKS.filter(function (t) { return !t.link; });
    return {
      courses: TRACKS.length,
      labs: TRACKS.length - quiz.length,
      lessons: quiz.reduce(function (n, t) { return n + trackLessonTotal(t); }, 0),
      questions: quiz.reduce(function (n, t) {
        return n + (t.units || []).reduce(function (m, u) {
          return m + (u.lessons || []).reduce(function (k, l) { return k + (l.questions || []).length; }, 0);
        }, 0);
      }, 0)
    };
  }
  // The lesson "Try a lesson" opens: window.ACADEMY.sample in tracks.js, else the first lesson.
  function sampleLesson() {
    var want = window.ACADEMY.sample || {};
    var t = trackById(want.track) || TRACKS.filter(function (x) { return !x.link && trackLessonTotal(x); })[0];
    if (!t) return null;
    var gi = 0, found = null;
    (t.units || []).forEach(function (u, ui) {
      (u.lessons || []).forEach(function (l) {
        if (!found && (l.id === want.lesson || (!want.lesson && gi === 0))) found = { track: t, gi: gi, lesson: l, unitIndex: ui };
        gi++;
      });
    });
    return found || { track: t, gi: 0, lesson: t.units[0].lessons[0], unitIndex: 0 };
  }
  function startGuest() { if (!guest) guest = { tracks: {} }; }
  function trySample() {
    var s = sampleLesson();
    if (!s) return;
    startGuest();
    selectTrack(s.track.id);
    startLesson(s.gi);
  }
  // Ask for a name and create a profile. A guest's progress moves into it.
  function createProfile(after) {
    var name = prompt("Name for this profile:");
    if (name === null) return;   // cancelled
    var n = addUser(name);
    if (guest) {
      store.users[n].tracks = guest.tracks;
      if (guest.lastTrack) store.users[n].lastTrack = guest.lastTrack;
      guest = null;
      saveStore();
      toast("Profile created. Your progress is saved on this device.");
    }
    if (after === "course" && currentTrackId) { selectTrack(currentTrackId); renderHome(); }
    else renderTracks();
  }
  function guestNote(where) {
    if (!guest || store.users[store.currentUser]) return null;
    var n = el("div", "guest-note");
    n.appendChild(el("span", null, "You're trying Academy without a profile, so your progress isn't saved yet."));
    var b = el("button", "text-btn", "Create a profile to keep it");
    b.onclick = function () { createProfile(where); };
    n.appendChild(b);
    return n;
  }

  function renderWelcome() {
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    app.innerHTML = "";
    var st = courseStats();
    var sample = sampleLesson();

    var bar = el("header", "appbar");
    var inner = el("div", "appbar-inner");
    inner.appendChild(el("div", "logo", '<span class="logo-mark">A</span><span>Academy</span>'));
    var signIn = el("button", "btn ghost small", "Create a profile");
    signIn.onclick = function () { createProfile(); };
    inner.appendChild(signIn);
    bar.appendChild(inner);
    app.appendChild(bar);

    var page = el("main", "page welcome");
    var hero = el("section", "welcome-hero");
    hero.appendChild(el("h1", "welcome-title", "Short, rigorous lessons on AI, software, building and the mind."));
    hero.appendChild(el("p", "welcome-sub", "Answer questions, see why each answer is right, and keep your place in every course. " +
      "Start with a lesson now; make a profile when you want to save your progress."));
    var actions = el("div", "welcome-actions");
    var tryBtn = el("button", "btn primary large", "Try a lesson");
    tryBtn.onclick = trySample;
    actions.appendChild(tryBtn);
    var browse = el("button", "btn ghost large", "Browse all courses");
    browse.onclick = function () { startGuest(); renderTracks(); };
    actions.appendChild(browse);
    hero.appendChild(actions);
    if (sample) {
      var qn = (sample.lesson.questions || []).length;
      hero.appendChild(el("p", "welcome-hint", "No sign-up. " + plural(qn, "question") + " from " + esc(sample.track.title) +
        ": <b>" + esc(sample.lesson.title) + "</b>"));
    }
    page.appendChild(hero);

    var stats = el("dl", "welcome-stats tnum");
    [[st.courses, "courses and labs"], [st.lessons, "lessons"], [st.questions, "questions, each explained"], [st.labs, "hands-on lab apps"]]
      .forEach(function (p) { stats.appendChild(el("div", null, "<dt>" + p[0].toLocaleString() + "</dt><dd>" + p[1] + "</dd>")); });
    page.appendChild(stats);

    var cats = (window.ACADEMY.categories || []);
    var shelf = el("section", "welcome-shelf");
    cats.forEach(function (c) {
      var list = TRACKS.filter(function (t) { return t.category === c.id; });
      if (!list.length) return;
      var col = el("div", "shelf-col");
      col.appendChild(el("h2", null, esc(c.title)));
      var ul = el("ul");
      list.forEach(function (t) {
        var li = el("li");
        li.appendChild(courseTile(t, "sm"));
        li.appendChild(el("span", null, esc(t.title)));
        ul.appendChild(li);
      });
      col.appendChild(ul);
      shelf.appendChild(col);
    });
    page.appendChild(shelf);

    app.appendChild(page);
    window.scrollTo(0, 0);
  }

  /* ============================================================
     PROFILE PICKER  ("Who's studying?")
     ============================================================ */
  function renderProfiles() {
    if (!userNames().length) return renderWelcome();
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    app.innerHTML = "";
    var scr = el("div", "profiles-screen");
    scr.appendChild(el("div", "logo big", '<span class="logo-mark">A</span><span>Academy</span>'));
    scr.appendChild(el("h1", "profiles-title", userNames().length ? "Who's studying?" : "Create your profile"));
    scr.appendChild(el("p", "profiles-sub", "Each profile keeps its own progress across every course, on this device."));

    var grid = el("div", "profiles-grid");
    userNames().forEach(function (name) {
      var card = el("div", "profile-card");
      card.tabIndex = 0;
      var av = el("div", "avatar", initial(name));
      av.style.background = avatarColor(name);
      card.appendChild(av);
      card.appendChild(el("div", "profile-name", esc(name)));
      card.appendChild(el("div", "profile-meta", plural(userDoneCount(name), "lesson") + " · " + userTotalXP(name) + " XP"));
      var del = el("button", "profile-del", glyph("cross"));
      del.title = "Delete this profile";
      del.setAttribute("aria-label", "Delete profile " + name);
      del.onclick = function (e) {
        e.stopPropagation();
        if (confirm('Delete profile "' + name + '" and all its progress? This cannot be undone.')) {
          deleteUser(name); renderProfiles();
        }
      };
      card.appendChild(del);
      card.onclick = function () { guest = null; selectUser(name); renderTracks(); };
      card.onkeydown = function (e) { if (e.key === "Enter") card.onclick(); };
      grid.appendChild(card);
    });

    var add = el("button", "profile-card add");
    add.appendChild(el("div", "avatar add-avatar", glyph("plus")));
    add.appendChild(el("div", "profile-name", "Add learner"));
    add.appendChild(el("div", "profile-meta", "New profile"));
    add.onclick = function () { guest = null; createProfile(); };
    grid.appendChild(add);

    scr.appendChild(grid);
    var tryLink = el("button", "text-btn", "Or try a lesson without a profile");
    tryLink.onclick = function () { store.currentUser = null; saveStore(); trySample(); };
    scr.appendChild(tryLink);
    app.appendChild(scr);
    window.scrollTo(0, 0);
  }

  /* ============================================================
     COURSE CATALOG  (the track picker)
     ============================================================ */
  function trackLessonTotal(t) {
    return (t.units || []).reduce(function (s, un) { return s + (un.lessons || []).length; }, 0);
  }
  // First lesson not yet completed in a track, as {unitIndex, lessonIndex, lesson} (null when finished).
  // Same rule as nextIndex(), for a track that isn't loaded.
  function nextLessonIn(t, prog) {
    var done = (prog && prog.completed) || {};
    var all = [];
    (t.units || []).forEach(function (u, ui) {
      (u.lessons || []).forEach(function (l, li) { all.push({ unitIndex: ui, lessonIndex: li, gi: all.length, lesson: l, unit: u }); });
    });
    var l = prog && prog.lastGi;
    if (typeof l === "number" && l + 1 < all.length && !done["g" + (l + 1)]) return all[l + 1];
    for (var i = 0; i < all.length; i++) if (!done["g" + i]) return all[i];
    return null;
  }

  function renderTracks() {
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    app.innerHTML = "";
    app.appendChild(appBar("catalog"));
    var page = el("main", "page");

    var u = curUser() || { tracks: {} };
    var courseCount = TRACKS.length;

    var intro = el("div", "cat-intro");
    var it = el("div");
    it.appendChild(el("h1", "page-title", "Course catalog"));
    it.appendChild(el("p", "page-sub", courseCount + " courses and labs. Each one keeps its own progress."));
    intro.appendChild(it);
    var search = el("label", "search", glyph("search"));
    var input = el("input");
    input.type = "search"; input.id = "course-search";
    input.placeholder = "Search courses";
    input.setAttribute("aria-label", "Search courses");
    search.appendChild(input);
    intro.appendChild(search);
    page.appendChild(intro);
    var gn = guestNote("catalog");
    if (gn) page.appendChild(gn);

    // Continue learning: the course this profile opened most recently, if it has a next lesson.
    var last = u.lastTrack && trackById(u.lastTrack);
    if (last && !last.link) {
      var lp = u.tracks[last.id];
      var nx = nextLessonIn(last, lp);
      var total = trackLessonTotal(last);
      if (nx && total) {
        var done = lp ? Object.keys(lp.completed || {}).length : 0;
        var res = el("div", "resume");
        res.appendChild(courseTile(last));
        var rt = el("div", "resume-text");
        rt.appendChild(el("div", "eyebrow", "Continue learning"));
        rt.appendChild(el("div", "resume-title", esc(last.title)));
        rt.appendChild(el("div", "resume-sub", "Unit " + (nx.unitIndex + 1) + ", " + esc(nx.unit.title) + " · Next: " + esc(nx.lesson.title)));
        rt.appendChild(progressBar(done / total, last.color));
        res.appendChild(rt);
        var go = el("button", "btn primary", (done ? "Resume" : "Start") + " lesson " + (nx.lessonIndex + 1));
        go.onclick = function () { selectTrack(last.id); startLesson(nx.gi); };
        res.appendChild(go);
        page.appendChild(res);
      }
    }

    // Groups, in the order tracks.js lists its categories.
    var cats = (window.ACADEMY.categories || []).slice();
    var known = {};
    cats.forEach(function (c) { known[c.id] = true; });
    if (TRACKS.some(function (t) { return !known[t.category]; })) cats.push({ id: "_other", title: "More courses" });

    cats.forEach(function (c) {
      var list = TRACKS.filter(function (t) { return c.id === "_other" ? !known[t.category] : t.category === c.id; });
      if (!list.length) return;
      var group = el("section", "group");
      var gh = el("div", "group-h");
      gh.appendChild(el("h2", null, esc(c.title)));
      var lessonSum = list.reduce(function (s, t) { return s + trackLessonTotal(t); }, 0);
      gh.appendChild(el("span", null, c.note ? esc(c.note) : (plural(list.length, "course") + " · " + plural(lessonSum, "lesson"))));
      group.appendChild(gh);

      var box = el("div", c.layout === "cards" ? "labs" : "rows");
      list.forEach(function (t) { box.appendChild(c.layout === "cards" ? labCard(t, u) : courseRow(t, u)); });
      group.appendChild(box);
      page.appendChild(group);
    });

    var empty = el("p", "empty hidden", "No courses match that search.");
    page.appendChild(empty);
    input.oninput = function () {
      var s = input.value.trim().toLowerCase();
      var any = false;
      page.querySelectorAll(".group").forEach(function (g) {
        var shown = 0;
        g.querySelectorAll("[data-search]").forEach(function (n) {
          var hit = !s || n.dataset.search.indexOf(s) !== -1;
          n.classList.toggle("hidden", !hit);
          if (hit) shown++;
        });
        g.classList.toggle("hidden", !shown);
        if (shown) any = true;
      });
      empty.classList.toggle("hidden", any);
    };

    app.appendChild(page);
    window.scrollTo(0, 0);
  }

  function progressBar(frac, color) {
    var b = el("div", "bar");
    var i = el("i");
    var pct = Math.max(0, Math.min(1, frac || 0)) * 100;
    i.style.width = pct + "%";
    if (pct > 0) i.style.minWidth = "4px";   // a started course always shows a sliver
    if (color) b.style.setProperty("--c", color);
    b.appendChild(i);
    return b;
  }
  function searchText(t) { return (t.title + " " + (t.blurb || "") + " " + (t.keywords || "")).toLowerCase(); }

  // An external lab (CodeLab, Political Academy, Accounting Lab): opens its own app.
  function labCard(t, u) {
    var prog = (u.tracks && u.tracks[t.id]) || null;
    var doneCount = prog ? Object.keys(prog.completed || {}).length : 0;
    var card = el("a", "lab");
    card.href = t.link;
    card.style.setProperty("--c", t.color);
    card.dataset.search = searchText(t);
    var top = el("div", "lab-top");
    top.appendChild(courseTile(t));
    var nm = el("div");
    nm.appendChild(el("div", "lab-name", esc(t.title)));
    if (t.kind) nm.appendChild(el("div", "lab-kind", esc(t.kind)));
    top.appendChild(nm);
    card.appendChild(top);
    if (t.blurb) card.appendChild(el("p", "lab-blurb", esc(t.blurb)));
    if (t.latest) {
      var news = el("p", "lab-latest hidden");
      card.appendChild(news);
      loadLatest(t, function (up) {
        if (!up) return;
        news.innerHTML = '<span class="live" aria-hidden="true"></span><span>Updated ' + fmtDay(up.date) + ": " + esc(up.title) + "</span>";
        news.classList.remove("hidden");
      });
    }
    var foot = el("div", "lab-foot");
    foot.appendChild(el("span", "tnum", doneCount > 0 ? (doneCount + " done · " + (prog.xp || 0) + " XP") : esc(t.size || "")));
    foot.appendChild(el("b", null, esc(doneCount > 0 ? "Open lab" : (t.cta || "Open lab")) + glyph("arrow")));
    card.appendChild(foot);
    return card;
  }

  // Newest dated update a lab publishes (tracks.js `latest`: a script of
  // window.POLITICS.addUpdate({ date, title, … }) calls, as in politics/updates.js).
  // Loaded once per visit with a stand-in POLITICS that only collects the calls.
  var latestCache = {};
  function loadLatest(t, done) {
    if (t.id in latestCache) return done(latestCache[t.id]);
    var prev = window.POLITICS, items = [];
    window.POLITICS = { addUpdate: function (u) { if (u && u.date && u.title) items.push(u); } };
    var s = document.createElement("script");
    s.src = t.latest;
    s.onload = s.onerror = function () {
      if (prev === undefined) delete window.POLITICS; else window.POLITICS = prev;
      var today = todayISO();
      items = items.filter(function (u) { return u.date <= today; })
        .sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
      latestCache[t.id] = items[0] || null;
      done(latestCache[t.id]);
    };
    document.head.appendChild(s);
  }
  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
  function fmtDay(iso) {
    var p = String(iso).split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  // A quiz course in the catalog.
  function courseRow(t, u) {
    var prog = (u.tracks && u.tracks[t.id]) || null;
    var total = trackLessonTotal(t);
    var doneCount = prog ? Object.keys(prog.completed || {}).length : 0;
    var row = el("button", "course-row");
    row.dataset.search = searchText(t);
    row.appendChild(courseTile(t));
    var txt = el("div", "row-text");
    txt.appendChild(el("div", "row-name", esc(t.title)));
    if (t.blurb) txt.appendChild(el("div", "row-blurb", esc(t.blurb)));
    row.appendChild(txt);
    var meta = el("div", "row-meta tnum");
    if (doneCount > 0) {
      meta.appendChild(el("div", null, doneCount + " of " + total));
      meta.appendChild(progressBar(doneCount / total, t.color));
    } else {
      meta.innerHTML = plural((t.units || []).length, "unit") + "<br>" + plural(total, "lesson");
    }
    row.appendChild(meta);
    row.onclick = function () { selectTrack(t.id); renderHome(); };
    return row;
  }

  /* ============================================================
     COURSE PAGE  (units and lessons, with a side panel)
     ============================================================ */
  var openUnits = {};   // trackId -> { unitIndex: true } for units the learner expanded

  // focusNext: scroll to the unit holding the next lesson (used after finishing a lesson).
  function renderHome(focusNext) {
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    app.innerHTML = "";
    app.appendChild(appBar("course"));

    var tr = trackById(currentTrackId) || {};
    var color = tr.color || "#4b5563";
    var page = el("main", "page");
    page.style.setProperty("--c", color);

    var done = Object.keys(state.completed).length;
    var total = LESSONS.length;
    var qCount = ALL_QUESTIONS.length;
    var nextGi = nextIndex();
    var nextEntry = LESSONS[nextGi] || null;

    var gn = guestNote("course");
    if (gn) page.appendChild(gn);
    var crumb = el("div", "crumb");
    var back = el("button", null, "Catalog");
    back.onclick = function () { renderTracks(); };
    crumb.appendChild(back);
    var cat = (window.ACADEMY.categories || []).filter(function (c) { return c.id === tr.category; })[0];
    if (cat) crumb.appendChild(el("span", null, " / " + esc(cat.title)));
    page.appendChild(crumb);

    var grid = el("div", "course-grid");
    var main = el("div", "course-main");

    var head = el("div", "course-head");
    head.appendChild(courseTile(tr, "lg"));
    var hc = el("div");
    hc.appendChild(el("h1", "page-title", esc(tr.title || "Course")));
    hc.appendChild(el("div", "facts tnum", plural(UNITS.length, "unit") + " · " + plural(total, "lesson") + " · " + plural(qCount, "question")));
    head.appendChild(hc);
    main.appendChild(head);
    if (tr.blurb) main.appendChild(el("p", "lede", esc(tr.blurb)));

    // Units: the one holding the next lesson starts open; the learner can open others.
    var opened = openUnits[currentTrackId] || (openUnits[currentTrackId] = {});
    UNITS.forEach(function (u, ui) {
      var lessons = u.lessons || [];
      var unitDone = 0;
      lessons.forEach(function (l, li) { if (isDone(globalIndexOf(ui, li))) unitDone++; });
      var complete = lessons.length > 0 && unitDone >= lessons.length;
      var isOpen = !!opened[ui] || (nextEntry && nextEntry.unitIndex === ui && opened[ui] !== false);

      var box = el("section", "unit" + (isOpen ? " open" : "") + (complete ? " complete" : ""));
      var h = el("button", "unit-h");
      h.setAttribute("aria-expanded", isOpen ? "true" : "false");
      h.appendChild(el("span", "unit-num", complete ? glyph("check") : String(ui + 1)));
      var ht = el("div", "unit-text");
      ht.appendChild(el("div", "unit-title", esc(u.title)));
      if (u.description) ht.appendChild(el("div", "unit-desc", esc(u.description)));
      h.appendChild(ht);
      h.appendChild(el("span", "unit-count tnum", unitDone + " / " + lessons.length));
      h.onclick = function () { var y = window.scrollY; opened[ui] = !isOpen; renderHome(); window.scrollTo(0, y); };
      box.appendChild(h);

      if (isOpen) {
        var ul = el("ol", "lessons");
        lessons.forEach(function (l, li) {
          var gi = globalIndexOf(ui, li);
          var st = isDone(gi) ? "done" : (isUnlocked(gi) ? "cur" : "lock");
          var row = el("li", st);
          var btn = el("button", "lesson-row");
          btn.appendChild(el("span", "st", st === "done" ? glyph("check") : ""));
          btn.appendChild(el("span", "lt", esc(l.title)));
          btn.appendChild(el("span", "lq", st === "cur" ? "Start" : (st === "done" ? "Redo" : plural((l.questions || []).length, "question"))));
          if (st === "lock") {
            btn.disabled = true;
            btn.title = "Finish the lessons before this one first";
          } else {
            btn.onclick = function () { startLesson(gi); };
          }
          row.appendChild(btn);
          ul.appendChild(row);
        });
        box.appendChild(ul);
        if (!complete && lessons.length) {
          var tf = el("div", "unit-foot");
          var to = el("button", "text-btn", "Already know this? Take the unit test");
          to.onclick = function () { startTestOut(ui); };
          tf.appendChild(to);
          box.appendChild(tf);
        }
      }
      main.appendChild(box);
    });
    grid.appendChild(main);

    // Side panel
    var side = el("aside", "side");
    var pc = el("div", "card");
    pc.appendChild(el("h2", "card-h", "Your progress"));
    pc.appendChild(el("div", "big tnum", done + " <small>of " + plural(total, "lesson") + "</small>"));
    pc.appendChild(progressBar(total ? done / total : 0, color));
    var kv = el("div", "kv tnum");
    kv.appendChild(el("div", null, "<b>" + plural(state.streak || 0, "day") + "</b><span>Streak</span>"));
    kv.appendChild(el("div", null, "<b>" + state.xp + "</b><span>XP earned</span>"));
    pc.appendChild(kv);
    if (nextEntry) {
      var nb = el("button", "btn primary block", done ? "Continue: lesson " + (nextEntry.lessonIndex + 1) + " of unit " + (nextEntry.unitIndex + 1) : "Start the first lesson");
      nb.onclick = function () { startLesson(nextGi); };
      pc.appendChild(nb);
    } else if (total) {
      pc.appendChild(el("p", "note", "You've finished every lesson in this course."));
    }
    side.appendChild(pc);

    var tools = el("div", "card stack");
    tools.appendChild(el("h2", "card-h", "Study tools"));
    var poolCount = practicePool().length;
    var pb = el("button", "btn ghost block", "Practice completed lessons");
    if (done && poolCount) pb.onclick = function () { startPractice(); };
    else pb.disabled = true;
    tools.appendChild(pb);
    var missedCount = reviewPool().length;
    var rb = el("button", "btn ghost block", missedCount ? "Review " + plural(missedCount, "mistake") : "Review mistakes");
    if (missedCount) rb.onclick = function () { startReview(); };
    else rb.disabled = true;
    tools.appendChild(rb);
    tools.appendChild(el("p", "note", !done
      ? "Practice unlocks when you finish a lesson."
      : (missedCount ? "Practice mixes up to " + PRACTICE_SIZE + " questions from lessons you've done." : "No mistakes to review yet.")));
    side.appendChild(tools);

    var reset = el("button", "text-btn quiet", "Reset progress in this course");
    reset.onclick = function () {
      if (confirm("Reset " + store.currentUser + "'s progress, XP and streak in " + (tr.title || "this course") + "? This cannot be undone.")) {
        var fresh = freshState();
        Object.keys(state).forEach(function (k) { delete state[k]; });
        Object.keys(fresh).forEach(function (k) { state[k] = fresh[k]; });
        saveStore(); renderHome();
      }
    };
    if (store.users[store.currentUser]) side.appendChild(reset);
    grid.appendChild(side);

    page.appendChild(grid);
    app.appendChild(page);
    window.scrollTo(0, 0);
    var openUnit = focusNext && nextEntry && main.querySelectorAll(".unit")[nextEntry.unitIndex];
    if (openUnit && nextEntry.unitIndex > 0) window.scrollTo(0, openUnit.getBoundingClientRect().top + window.scrollY - 76);
  }
  function globalIndexOf(ui, li) {
    for (var i = 0; i < LESSONS.length; i++)
      if (LESSONS[i].unitIndex === ui && LESSONS[i].lessonIndex === li) return i;
    return -1;
  }

  /* ============================================================
     TEST OUT  — pass a unit challenge to complete it without every lesson
     ============================================================ */
  var TESTOUT_SIZE = 12;      // questions in a test-out challenge
  var TESTOUT_PASS = 0.8;     // fraction correct needed to pass
  function markUnitComplete(ui) {
    (UNITS[ui].lessons || []).forEach(function (l, li) {
      state.completed["g" + globalIndexOf(ui, li)] = true;
    });
  }
  function startTestOut(ui) {
    var pool = [];
    LESSONS.forEach(function (entry) {
      if (entry.unitIndex !== ui) return;
      (entry.lesson.questions || []).forEach(function (q, qi) {
        pool.push({ q: q, key: lessonKey(entry) + "#" + qi });
      });
    });
    if (pool.length < 4) { toast("This unit doesn't have enough questions for a unit test."); return; }
    var picked = shuffle(pool).slice(0, Math.min(TESTOUT_SIZE, pool.length));
    session = {
      mode: "testout",
      gi: -1, entry: null, unitIndex: ui,
      queue: picked.map(function (item) { return prepQuestion(item.q, item.key); }),
      total: picked.length,
      idx: 0, correct: 0, hearts: 5, answered: false, lastCorrect: false
    };
    renderLesson();
  }
  function completeTestOut() {
    var acc = session.correct / session.total;
    var passed = acc >= TESTOUT_PASS;
    var ui = session.unitIndex;
    var gained = passed ? 30 : session.correct * 2;
    if (passed) { markUnitComplete(ui); bumpStreak(); }
    state.xp += gained;
    saveState();

    var pct = Math.round(acc * 100);
    var need = Math.ceil(TESTOUT_PASS * session.total);
    var scr = el("div", "center-screen");
    scr.appendChild(badgeIcon(passed ? "trophy" : "retry", passed));
    scr.appendChild(el("h1", null, passed ? "Unit complete" : "Not passed yet"));
    scr.appendChild(el("div", "sub", passed
      ? ("You scored " + pct + "% on " + UNITS[ui].title + " — the whole unit is now marked complete.")
      : ("You scored " + pct + "%. You need " + Math.round(TESTOUT_PASS * 100) + "% (" + need + " of " + session.total + ") to test out. Do a few lessons and try again.")));

    var rr = el("div", "reward-row");
    rr.appendChild(reward("Score", pct + "%"));
    rr.appendChild(reward("XP earned", "+" + gained));
    scr.appendChild(rr);

    var actions = el("div", "actions");
    if (!passed) {
      var retry = el("button", "btn primary", "Try again");
      retry.onclick = function () { startTestOut(ui); };
      actions.appendChild(retry);
    }
    var home = el("button", "btn " + (passed ? "primary" : "ghost"), "Back to course");
    if (!passed) home.style.marginTop = "12px";
    home.onclick = function () { renderHome(); };
    actions.appendChild(home);
    scr.appendChild(actions);

    document.querySelectorAll(".lesson-screen").forEach(function (n) { n.remove(); });
    app.appendChild(scr);
  }

  function modeChipLabel() {
    if (session.mode === "review") return "Review";
    if (session.mode === "testout") return "Unit test";
    return "Practice";
  }

  /* ============================================================
     LESSON SCREEN
     ============================================================ */
  var session = null;

  function startLesson(gi) {
    var entry = LESSONS[gi];
    var qs = (entry.lesson.questions || []).slice();
    session = {
      mode: "lesson",
      gi: gi, entry: entry,
      queue: qs.map(function (q, qi) { return prepQuestion(q, lessonKey(entry) + "#" + qi); }),
      total: qs.length,
      idx: 0, correct: 0, hearts: 5, answered: false, lastCorrect: false,
      reading: (entry.lesson.reading && entry.lesson.reading.blocks && entry.lesson.reading.blocks.length) ? entry.lesson.reading : null,
      readDone: false
    };
    renderLesson();
  }

  // Short reading shown before a lesson's questions (lesson.reading.blocks, same
  // block shape as Political Academy: { type: "section", head, md }).
  function readMd(src) {
    return String(src || "").replace(/\r/g, "").split(/\n\s*\n/).map(function (b) {
      var lines = b.split("\n").filter(function (l) { return l.trim(); });
      if (!lines.length) return "";
      var inl = function (t) {
        return esc(t)
          .replace(/`([^`]+)`/g, "<code>$1</code>")
          .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
          .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
      };
      if (lines.every(function (l) { return /^\s*-\s+/.test(l); })) {
        return "<ul>" + lines.map(function (l) { return "<li>" + inl(l.replace(/^\s*-\s+/, "")) + "</li>"; }).join("") + "</ul>";
      }
      return "<p>" + inl(lines.join(" ")) + "</p>";
    }).join("");
  }

  function renderReading() {
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    var scr = el("div", "lesson-screen");
    var top = el("div", "lesson-top");
    var quit = el("button", "quit-x", glyph("cross"));
    quit.setAttribute("aria-label", "Leave lesson");
    quit.onclick = function () { renderHome(); };
    top.appendChild(quit);
    var track = el("div", "progress-track");
    track.appendChild(el("div", "progress-fill"));
    top.appendChild(track);
    top.appendChild(el("div", "heart-mini tnum", glyph("heart") + "<span>" + session.hearts + "</span>"));
    scr.appendChild(top);

    var body = el("div", "lesson-body");
    var inner = el("div", "lesson-inner");
    var trk = trackById(currentTrackId) || {};
    inner.appendChild(el("div", "q-kicker", esc(trk.title || "") + " · Unit " + (session.entry.unitIndex + 1) + " · Read first"));
    inner.appendChild(el("div", "q-prompt", esc(session.entry.lesson.title)));
    session.reading.blocks.forEach(function (b) {
      if (b.type !== "section") return;
      var sec = el("section", "read-sec");
      if (b.head) sec.appendChild(el("h3", "read-head", esc(b.head)));
      sec.appendChild(el("div", "prose", readMd(b.md)));
      inner.appendChild(sec);
    });
    body.appendChild(inner);
    scr.appendChild(body);

    var foot = el("div", "lesson-foot");
    var fi = el("div", "inner");
    var go = el("button", "btn primary", "Continue");
    go.onclick = function () { session.readDone = true; renderLesson(); };
    fi.appendChild(go);
    foot.appendChild(fi);
    scr.appendChild(foot);
    app.appendChild(scr);
    body.scrollTop = 0;
  }

  // Practice: a Duolingo-style mixed review drawn from every COMPLETED lesson.
  var PRACTICE_SIZE = 15;
  function practicePool() {
    return ALL_QUESTIONS.filter(function (item) { return isDone(item.gi); });
  }
  function startPractice() {
    var pool = practicePool();
    if (!pool.length) { toast("Complete at least one lesson first"); return; }
    var picked = shuffle(pool).slice(0, Math.min(PRACTICE_SIZE, pool.length));
    session = {
      mode: "practice",
      gi: -1, entry: null,
      queue: picked.map(function (item) { return prepQuestion(item.q, item.key); }),
      total: picked.length,
      idx: 0, correct: 0, hearts: 5, answered: false, lastCorrect: false
    };
    renderLesson();
  }

  // Review: redo ONLY the questions you've missed; each clears off the list when you get it right.
  var REVIEW_SIZE = 20;
  function reviewPool() {
    return ALL_QUESTIONS.filter(function (item) { return state.missed && state.missed[item.key]; });
  }
  function startReview() {
    var pool = reviewPool();
    if (!pool.length) { toast("No missed questions to review."); return; }
    var picked = shuffle(pool).slice(0, Math.min(REVIEW_SIZE, pool.length));
    session = {
      mode: "review",
      gi: -1, entry: null,
      queue: picked.map(function (item) { return prepQuestion(item.q, item.key); }),
      total: picked.length,
      idx: 0, correct: 0, hearts: 5, answered: false, lastCorrect: false
    };
    renderLesson();
  }

  // Pre-compute display order for shuffled question types so they stay stable within a question.
  function prepQuestion(q, key) {
    var p = { data: q, key: key || null };
    if (q.type === "mcq") {
      var order = shuffle(q.choices.map(function (_, i) { return i; }));
      p.displayChoices = order.map(function (i) { return q.choices[i]; });
      p.correctDisplay = order.indexOf(q.answer);
    } else if (q.type === "order") {
      var shuffled = shuffle(q.items.map(function (t, i) { return { t: t, i: i }; }));
      // ensure not already fully correct
      if (shuffled.every(function (s, idx) { return s.i === idx; }) && shuffled.length > 1) {
        var a = shuffled.shift(); shuffled.push(a);
      }
      p.current = shuffled.map(function (s) { return s.t; });
    } else if (q.type === "match") {
      p.left = q.pairs.map(function (pr) { return pr[0]; });
      p.right = shuffle(q.pairs.map(function (pr) { return pr[1]; }));
      p.solved = {};
      p.selLeft = null; p.selRight = null;
    }
    return p;
  }

  function renderLesson() {
    if (session.mode === "lesson" && session.reading && !session.readDone) { renderReading(); return; }
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    var scr = el("div", "lesson-screen");

    // top: quit + progress + hearts
    var top = el("div", "lesson-top");
    var quit = el("button", "quit-x", glyph("cross"));
    quit.setAttribute("aria-label", "Leave lesson");
    quit.onclick = function () {
      if (confirm("Quit this lesson? Progress in it will be lost.")) renderHome();
    };
    top.appendChild(quit);
    var track = el("div", "progress-track");
    var fill = el("div", "progress-fill");
    fill.style.width = ((session.idx) / session.total * 100) + "%";
    track.appendChild(fill);
    top.appendChild(track);
    if (session.mode === "lesson") {
      top.appendChild(el("div", "heart-mini tnum", glyph("heart") + "<span>" + session.hearts + "</span>"));
    } else {
      top.appendChild(el("div", "mode-chip", modeChipLabel()));
    }
    scr.appendChild(top);

    // body
    var body = el("div", "lesson-body");
    var inner = el("div", "lesson-inner");
    var pq = session.queue[session.idx];
    var q = pq.data;

    var kick = kickerFor(q.type);
    var trk = trackById(currentTrackId) || {};
    if (session.mode === "lesson") kick = esc(trk.title || "") + " · Unit " + (session.entry.unitIndex + 1) + " · " + kick;
    else kick = modeChipLabel() + " · " + kick;
    inner.appendChild(el("div", "q-kicker", kick));
    inner.appendChild(el("div", "q-prompt", esc(q.q)));

    var area = el("div", "q-area");
    if (q.type === "mcq") renderMCQ(area, pq);
    else if (q.type === "truefalse") renderTF(area, pq);
    else if (q.type === "fill") renderFill(area, pq);
    else if (q.type === "order") renderOrder(area, pq);
    else if (q.type === "match") renderMatch(area, pq);
    inner.appendChild(area);
    body.appendChild(inner);
    scr.appendChild(body);

    // footer
    var foot = el("div", "lesson-foot");
    var fi = el("div", "inner");
    var checkBtn = el("button", "btn primary", "Check answer");
    checkBtn.id = "checkBtn";
    checkBtn.disabled = true;
    checkBtn.onclick = function () { onCheck(pq, foot, checkBtn); };
    fi.appendChild(checkBtn);
    foot.appendChild(fi);
    scr.appendChild(foot);

    app.appendChild(scr);
    session.answered = false;

    // match has no Check button flow (auto-advances) — hide it until solved
    if (q.type === "match") checkBtn.classList.add("hidden");
  }

  function kickerFor(type) {
    return {
      mcq: "Select the correct answer",
      truefalse: "True or false?",
      fill: "Fill in the blank",
      order: "Put the steps in order",
      match: "Tap the matching pairs"
    }[type] || "Question";
  }

  function enableCheck() {
    var b = document.getElementById("checkBtn");
    if (b) b.disabled = false;
  }

  /* ---------- renderers ---------- */
  function renderMCQ(area, pq) {
    var box = el("div", "choices");
    var letters = "ABCDEFGH";
    pq.displayChoices.forEach(function (c, i) {
      var ch = el("button", "choice");
      ch.innerHTML = '<span class="letter">' + letters[i] + "</span><span>" + esc(c) + "</span>";
      ch.onclick = function () {
        if (session.answered) return;
        box.querySelectorAll(".choice").forEach(function (n) { n.classList.remove("selected"); });
        ch.classList.add("selected");
        pq.picked = i;
        enableCheck();
      };
      box.appendChild(ch);
    });
    area.appendChild(box);
  }

  function renderTF(area, pq) {
    var row = el("div", "tf-row");
    [["True", true], ["False", false]].forEach(function (opt) {
      var ch = el("button", "choice");
      ch.textContent = opt[0];
      ch.onclick = function () {
        if (session.answered) return;
        row.querySelectorAll(".choice").forEach(function (n) { n.classList.remove("selected"); });
        ch.classList.add("selected");
        pq.picked = opt[1];
        enableCheck();
      };
      row.appendChild(ch);
    });
    area.appendChild(row);
  }

  function renderFill(area, pq) {
    var input = el("input", "fill-input");
    input.type = "text";
    input.placeholder = "Type your answer…";
    input.autocomplete = "off"; input.autocapitalize = "off"; input.spellcheck = false;
    input.oninput = function () {
      pq.typed = input.value;
      if (input.value.trim()) enableCheck();
    };
    input.onkeydown = function (e) {
      if (e.key === "Enter") {
        var b = document.getElementById("checkBtn");
        if (b && !b.disabled) b.click();
      }
    };
    area.appendChild(input);
    area.appendChild(el("div", "fill-hint", "Spelling counts, but capitalization doesn't."));
    setTimeout(function () { input.focus(); }, 50);
  }

  function renderOrder(area, pq) {
    var list = el("div", "order-list");
    function paint() {
      list.innerHTML = "";
      pq.current.forEach(function (item, i) {
        var row = el("div", "order-item");
        row.appendChild(el("span", "pos", i + 1));
        row.appendChild(el("span", "txt", esc(item)));
        var arrows = el("div", "order-arrows");
        var up = el("button", null, "▲"); up.title = "Move up";
        var dn = el("button", null, "▼"); dn.title = "Move down";
        up.onclick = function () { if (session.answered) return; if (i > 0) { swap(i, i - 1); } };
        dn.onclick = function () { if (session.answered) return; if (i < pq.current.length - 1) { swap(i, i + 1); } };
        arrows.appendChild(up); arrows.appendChild(dn);
        row.appendChild(arrows);
        list.appendChild(row);
      });
    }
    function swap(a, b) {
      var t = pq.current[a]; pq.current[a] = pq.current[b]; pq.current[b] = t;
      paint(); enableCheck();
    }
    paint();
    area.appendChild(list);
    enableCheck(); // any order is "submittable"
  }

  function renderMatch(area, pq) {
    var grid = el("div", "match-grid");
    var colL = el("div", "match-col");
    var colR = el("div", "match-col");

    function tile(text, side) {
      var t = el("button", "match-tile");
      t.textContent = text;
      t.dataset.text = text;
      t.dataset.side = side;
      t.onclick = function () { onTileClick(t, side, pq, colL, colR); };
      return t;
    }
    pq.left.forEach(function (x) { colL.appendChild(tile(x, "L")); });
    pq.right.forEach(function (x) { colR.appendChild(tile(x, "R")); });
    grid.appendChild(colL); grid.appendChild(colR);
    area.appendChild(grid);
  }

  function onTileClick(tile, side, pq, colL, colR) {
    if (session.answered) return;
    if (tile.classList.contains("matched")) return;
    var col = (side === "L") ? colL : colR;
    col.querySelectorAll(".match-tile").forEach(function (n) { if (n !== tile) n.classList.remove("selected"); });
    tile.classList.toggle("selected");

    if (side === "L") pq.selLeft = tile.classList.contains("selected") ? tile : null;
    else pq.selRight = tile.classList.contains("selected") ? tile : null;

    if (pq.selLeft && pq.selRight) {
      var leftText = pq.selLeft.dataset.text;
      var rightText = pq.selRight.dataset.text;
      var correct = pq.data.pairs.some(function (pr) { return pr[0] === leftText && pr[1] === rightText; });
      var L = pq.selLeft, R = pq.selRight;
      pq.selLeft = null; pq.selRight = null;
      if (correct) {
        L.classList.remove("selected"); R.classList.remove("selected");
        L.classList.add("matched"); R.classList.add("matched");
        pq.solved[leftText] = true;
        if (Object.keys(pq.solved).length === pq.data.pairs.length) {
          // all matched -> count correct, advance
          session.lastCorrect = true;
          setTimeout(function () { showFeedback(pq, true); }, 350);
        }
      } else {
        [L, R].forEach(function (n) { n.classList.add("shake"); });
        setTimeout(function () {
          [L, R].forEach(function (n) { n.classList.remove("shake", "selected"); });
        }, 350);
      }
    }
  }

  /* ---------- checking answers ---------- */
  function onCheck(pq, foot, btn) {
    if (session.answered) return;
    var q = pq.data;
    var correct = false;

    if (q.type === "mcq") {
      correct = pq.picked === pq.correctDisplay;
      var nodes = foot.parentNode.querySelectorAll(".choice");
      foot.parentNode.querySelectorAll(".choices .choice").forEach(function (n, i) {
        n.disabled = true;
        if (i === pq.correctDisplay) n.classList.add("correct");
        else if (i === pq.picked) n.classList.add("wrong");
      });
    } else if (q.type === "truefalse") {
      correct = pq.picked === q.answer;
      foot.parentNode.querySelectorAll(".tf-row .choice").forEach(function (n) {
        n.disabled = true;
        var isTrue = n.textContent === "True";
        if (isTrue === q.answer) n.classList.add("correct");
        else if (isTrue === pq.picked) n.classList.add("wrong");
      });
    } else if (q.type === "fill") {
      var typed = (pq.typed || "").trim().toLowerCase();
      var accepts = [q.answer].concat(q.accept || []).map(function (s) { return String(s).trim().toLowerCase(); });
      correct = accepts.indexOf(typed) !== -1;
      var input = foot.parentNode.querySelector(".fill-input");
      if (input) { input.disabled = true; input.classList.add(correct ? "ok" : "no"); }
    } else if (q.type === "order") {
      correct = pq.current.every(function (t, i) { return t === q.items[i]; });
      foot.parentNode.querySelectorAll(".order-item").forEach(function (n, i) {
        n.classList.add(pq.current[i] === q.items[i] ? "ok" : "no");
      });
    }
    showFeedback(pq, correct);
  }

  function showFeedback(pq, correct) {
    session.answered = true;
    var q = pq.data;
    if (correct) session.correct++;
    else if (session.mode === "lesson") session.hearts--;

    // Track missed questions; clear a question off the list once it's finally answered correctly.
    if (pq.key) {
      if (!state.missed) state.missed = {};
      if (correct) { if (state.missed[pq.key]) delete state.missed[pq.key]; }
      else state.missed[pq.key] = true;
      saveState();
    }

    var scr = document.querySelector(".lesson-screen");
    var foot = scr.querySelector(".lesson-foot");
    foot.className = "lesson-foot " + (correct ? "correct" : "wrong");
    foot.innerHTML = "";
    var fi = el("div", "inner");

    var fb = el("div", "fb");
    fb.appendChild(el("div", "verdict", '<span class="dot">' + glyph(correct ? "check" : "cross") + "</span>" + (correct ? "Correct" : "Incorrect")));
    var answerLine = correct ? "" : correctAnswerText(q);
    if (answerLine || q.explain) {
      var ex = el("div", "fb-explain");
      if (answerLine) ex.appendChild(el("div", "fb-answer", esc(answerLine)));
      if (q.explain) ex.appendChild(el("p", null, esc(q.explain)));
      fb.appendChild(ex);
    }
    fi.appendChild(fb);

    var cont = el("button", "btn primary", "Continue");
    cont.onclick = function () { nextQuestion(); };
    fi.appendChild(cont);
    foot.appendChild(fi);

    // update hearts display
    var hm = scr.querySelector(".heart-mini");
    if (hm) hm.querySelector("span").textContent = session.hearts;

    if (session.mode === "lesson" && session.hearts <= 0) {
      cont.textContent = "See results";
      cont.onclick = function () { failLesson(); };
    }
  }

  function correctAnswerText(q) {
    if (q.type === "mcq") return "Correct answer: " + q.choices[q.answer];
    if (q.type === "truefalse") return "Correct answer: " + (q.answer ? "True" : "False");
    if (q.type === "fill") return "Correct answer: " + q.answer;
    if (q.type === "order") return "Correct order: " + q.items.join(" → ");
    return "";
  }

  function nextQuestion() {
    session.idx++;
    if (session.mode === "lesson" && session.hearts <= 0) { failLesson(); return; }
    if (session.idx >= session.total) { completeLesson(); return; }
    renderLesson();
  }

  /* ============================================================
     COMPLETE / FAIL
     ============================================================ */
  function completeLesson() {
    if (session.mode === "practice") return completePractice();
    if (session.mode === "review") return completeReview();
    if (session.mode === "testout") return completeTestOut();
    var gained = session.correct * 10 + 5; // 10 per correct + completion bonus
    var firstTime = !isDone(session.gi);
    state.completed["g" + session.gi] = true;
    state.lastGi = session.gi;
    state.xp += gained;
    bumpStreak();
    saveState();

    var acc = Math.round(session.correct / session.total * 100);
    var scr = el("div", "center-screen");
    scr.appendChild(badgeIcon(acc === 100 ? "trophy" : "check", true));
    scr.appendChild(el("h1", null, acc === 100 ? "Perfect lesson" : "Lesson complete"));
    scr.appendChild(el("div", "sub", esc(session.entry.lesson.title)));

    var rr = el("div", "reward-row");
    rr.appendChild(reward("Total XP", "+" + gained));
    rr.appendChild(reward("Accuracy", acc + "%"));
    scr.appendChild(rr);

    var actions = el("div", "actions");
    var cont = el("button", "btn primary", "Continue");
    cont.onclick = function () { renderHome(true); };
    actions.appendChild(cont);
    scr.appendChild(actions);

    document.querySelectorAll(".lesson-screen").forEach(function (n) { n.remove(); });
    app.appendChild(scr);
    if (firstTime && session.gi + 1 === LESSONS.length) {
      setTimeout(function () { toast("You finished the whole course."); }, 400);
    }
  }

  function completePractice() {
    var gained = session.correct * 5 + 5; // lighter XP than a fresh lesson
    state.xp += gained;
    bumpStreak();
    saveState();

    var acc = Math.round(session.correct / session.total * 100);
    var scr = el("div", "center-screen");
    scr.appendChild(badgeIcon("check", true));
    scr.appendChild(el("h1", null, "Practice complete"));
    scr.appendChild(el("div", "sub", session.correct + " of " + session.total + " correct."));

    var rr = el("div", "reward-row");
    rr.appendChild(reward("XP earned", "+" + gained));
    rr.appendChild(reward("Accuracy", acc + "%"));
    scr.appendChild(rr);

    var actions = el("div", "actions");
    var again = el("button", "btn primary", "Practice again");
    again.onclick = function () { startPractice(); };
    actions.appendChild(again);
    var home = el("button", "btn ghost", "Back to course");
    home.style.marginTop = "12px";
    home.onclick = function () { renderHome(); };
    actions.appendChild(home);
    scr.appendChild(actions);

    document.querySelectorAll(".lesson-screen").forEach(function (n) { n.remove(); });
    app.appendChild(scr);
  }

  function completeReview() {
    var gained = session.correct * 5 + 5;
    state.xp += gained;
    bumpStreak();
    saveState();

    var remaining = reviewPool().length;
    var scr = el("div", "center-screen");
    scr.appendChild(badgeIcon("check", true));
    scr.appendChild(el("h1", null, remaining === 0 ? "Mistakes cleared" : "Review complete"));
    scr.appendChild(el("div", "sub", "You fixed " + session.correct + " of " + session.total +
      (remaining === 0 ? ". Your mistakes list is empty." : ". " + remaining + " still to review.")));

    var rr = el("div", "reward-row");
    rr.appendChild(reward("XP earned", "+" + gained));
    rr.appendChild(reward("Fixed", session.correct + "/" + session.total));
    scr.appendChild(rr);

    var actions = el("div", "actions");
    if (remaining > 0) {
      var more = el("button", "btn primary", "Review more");
      more.onclick = function () { startReview(); };
      actions.appendChild(more);
    }
    var home = el("button", "btn " + (remaining > 0 ? "ghost" : "primary"), "Back to course");
    if (remaining > 0) home.style.marginTop = "12px";
    home.onclick = function () { renderHome(); };
    actions.appendChild(home);
    scr.appendChild(actions);

    document.querySelectorAll(".lesson-screen").forEach(function (n) { n.remove(); });
    app.appendChild(scr);
  }

  function failLesson() {
    var scr = el("div", "center-screen");
    scr.appendChild(badgeIcon("heart", false));
    scr.appendChild(el("h1", null, "Out of lives"));
    scr.appendChild(el("div", "sub", "You ran out of lives for this lesson. Try it again; the questions will feel familiar."));
    var actions = el("div", "actions");
    var retry = el("button", "btn primary", "Try again");
    retry.onclick = function () { if (session.mode === "practice") startPractice(); else startLesson(session.gi); };
    actions.appendChild(retry);
    var home = el("button", "btn ghost", "Back to course");
    home.style.marginTop = "12px";
    home.onclick = function () { renderHome(); };
    actions.appendChild(home);
    scr.appendChild(actions);
    document.querySelectorAll(".lesson-screen").forEach(function (n) { n.remove(); });
    app.appendChild(scr);
  }

  function badgeIcon(name, good) {
    return el("div", "result-badge " + (good ? "good" : "bad"), glyph(name));
  }

  function reward(head, val) {
    var r = el("div", "reward");
    r.appendChild(el("div", "r-head", head));
    r.appendChild(el("div", "r-val", val));
    return r;
  }

  /* ---------- boot ---------- */
  if (!TRACKS.length) {
    app.innerHTML = '<div style="padding:40px;text-align:center;font-weight:800;color:#777">' +
      "No tracks loaded. Make sure tracks.js and the unit files are present.</div>";
  } else if (!store.currentUser || !store.users[store.currentUser]) {
    renderProfiles();   // no profile chosen -> pick one (or, on a first visit, the welcome screen)
  } else {
    renderTracks();     // profile set -> choose which track to study
  }
})();
