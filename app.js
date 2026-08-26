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
  var UNIT_COLORS = ["#58cc02", "#1cb0f6", "#ff9600", "#ce82ff", "#ff4b4b", "#2bb3a3", "#a560e8", "#f25f9c"];
  var NODE_ICONS = ["🤖", "💬", "⚙️", "🎯", "🧩", "🧠", "✨", "🛠️", "🚀", "🛡️"];

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
  // Choose which track the current user is studying; points `state` at that (user × track) progress.
  function selectTrack(trackId) {
    var u = store.users[store.currentUser];
    if (!u) return;
    if (!u.tracks[trackId]) u.tracks[trackId] = freshState();
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
  function isUnlocked(gi) { return gi <= firstIncompleteIndex(); }

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
     PROFILE PICKER  ("Who's studying?")
     ============================================================ */
  function renderProfiles() {
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    app.innerHTML = "";
    var scr = el("div", "profiles-screen");
    scr.appendChild(el("div", "profiles-logo", '<span class="hat">🎓</span> <span>Academy</span>'));
    scr.appendChild(el("h1", "profiles-title", userNames().length ? "Who's studying?" : "Welcome! Create your profile"));

    var grid = el("div", "profiles-grid");
    userNames().forEach(function (name) {
      var card = el("div", "profile-card");
      var av = el("div", "avatar", initial(name));
      av.style.background = avatarColor(name);
      card.appendChild(av);
      card.appendChild(el("div", "profile-name", esc(name)));
      card.appendChild(el("div", "profile-meta", userDoneCount(name) + " lessons · " + userTotalXP(name) + " XP"));
      var del = el("button", "profile-del", "✕");
      del.title = "Delete this profile";
      del.onclick = function (e) {
        e.stopPropagation();
        if (confirm('Delete profile "' + name + '" and all its progress? This cannot be undone.')) {
          deleteUser(name); renderProfiles();
        }
      };
      card.appendChild(del);
      card.onclick = function () { selectUser(name); renderTracks(); };
      grid.appendChild(card);
    });

    var add = el("div", "profile-card add");
    var addAv = el("div", "avatar add-avatar", "＋");
    add.appendChild(addAv);
    add.appendChild(el("div", "profile-name", "Add learner"));
    add.appendChild(el("div", "profile-meta", "New profile"));
    add.onclick = function () {
      var name = prompt("Name for this profile:");
      if (name === null) return;   // cancelled
      addUser(name);
      renderTracks();
    };
    grid.appendChild(add);

    scr.appendChild(grid);
    if (userNames().length) scr.appendChild(el("div", "profiles-hint", "Each profile keeps its own progress across every track, on this device."));
    app.appendChild(scr);
    window.scrollTo(0, 0);
  }

  /* ============================================================
     TRACK PICKER  ("What do you want to learn?")
     ============================================================ */
  function renderTracks() {
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    app.innerHTML = "";
    var scr = el("div", "tracks-screen");

    var head = el("div", "tracks-head");
    head.appendChild(el("div", "profiles-logo small", '<span class="hat">🎓</span> <span>Academy</span>'));
    var userBtn = el("button", "user-chip");
    userBtn.innerHTML = '<span class="user-av" style="background:' + avatarColor(store.currentUser) + '">' + initial(store.currentUser) + '</span>' +
      '<span class="user-name">' + esc(store.currentUser) + "</span>";
    userBtn.title = "Switch profile";
    userBtn.onclick = function () { renderProfiles(); };
    head.appendChild(userBtn);
    scr.appendChild(head);

    scr.appendChild(el("h1", "tracks-title", "What do you want to learn?"));
    scr.appendChild(el("div", "tracks-sub", "Pick a track — each keeps its own progress and streak."));

    var grid = el("div", "tracks-grid");
    var u = store.users[store.currentUser] || { tracks: {} };
    TRACKS.forEach(function (t) {
      var prog = (u.tracks && u.tracks[t.id]) || null;
      var lessonTotal = (t.units || []).reduce(function (s, un) { return s + (un.lessons || []).length; }, 0);
      var doneCount = prog ? Object.keys(prog.completed || {}).length : 0;
      var card = el("button", "track-card");
      card.style.background = t.color || "#58cc02";
      card.appendChild(el("div", "track-ic", t.icon || "🎓"));
      card.appendChild(el("div", "track-title", esc(t.title)));
      if (t.blurb) card.appendChild(el("div", "track-blurb", esc(t.blurb)));
      var meta;
      if (t.link) {
        // External track (e.g. CodeLab): the card opens another app that
        // syncs its progress back into this store under the same track id.
        meta = doneCount > 0
          ? (doneCount + " done · " + (prog.xp || 0) + " XP · open ↗")
          : "Write real code · open ↗";
      } else {
        meta = doneCount > 0
          ? (doneCount + "/" + lessonTotal + " lessons · " + (prog.xp || 0) + " XP")
          : (lessonTotal + " lessons · start here");
      }
      card.appendChild(el("div", "track-meta", meta));
      card.onclick = t.link
        ? function () { window.location.href = t.link; }
        : function () { selectTrack(t.id); renderHome(); };
      grid.appendChild(card);
    });
    scr.appendChild(grid);
    app.appendChild(scr);
    window.scrollTo(0, 0);
  }

  /* ============================================================
     HOME / PATH SCREEN
     ============================================================ */
  function renderHome() {
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    app.innerHTML = "";

    // top bar
    var bar = el("div", "topbar");
    var tr = trackById(currentTrackId) || {};
    var brand = el("div", "brand brand-btn");
    brand.innerHTML = '<span class="hat">' + (tr.icon || "🎓") + '</span><span class="name">' + esc(tr.title || "Academy") + '</span><span class="brand-switch">⌄</span>';
    brand.title = "Switch track";
    brand.onclick = function () { renderTracks(); };
    bar.appendChild(brand);
    var stats = el("div", "stats");
    stats.appendChild(el("div", "stat streak", '<span class="ico">🔥</span>' + state.streak));
    stats.appendChild(el("div", "stat xp", '<span class="ico">⭐</span>' + state.xp));
    var userBtn = el("button", "user-chip");
    userBtn.innerHTML = '<span class="user-av" style="background:' + avatarColor(store.currentUser) + '">' + initial(store.currentUser) + '</span>' +
      '<span class="user-name">' + esc(store.currentUser) + "</span>";
    userBtn.title = "Switch profile";
    userBtn.onclick = function () { renderProfiles(); };
    stats.appendChild(userBtn);
    bar.appendChild(stats);
    app.appendChild(bar);

    var wrap = el("div", "wrap");

    // hero
    var done = Object.keys(state.completed).length;
    var total = LESSONS.length;
    var hero = el("div", "hero");
    hero.appendChild(el("div", "h-emoji", tr.icon || "🎓"));
    var hc = el("div");
    hc.appendChild(el("h2", null, tr.title || "Keep learning"));
    hc.appendChild(el("p", null, tr.blurb || "One lesson at a time."));
    hero.appendChild(hc);
    wrap.appendChild(hero);

    // overall progress
    var pct = total ? Math.round((done / total) * 100) : 0;
    var ov = el("div", "overall");
    ov.appendChild(el("div", null, "📊"));
    var barTrack = el("div", "bar");
    barTrack.appendChild(el("div", null, '<i style="display:block;width:' + pct + '%;height:100%;background:var(--green);border-radius:8px"></i>'));
    ov.appendChild(barTrack);
    ov.appendChild(el("div", "pct", pct + "%"));
    wrap.appendChild(ov);

    // practice / review button
    var poolCount = practicePool().length;
    var pc = el("button", "practice-card" + (done ? "" : " disabled"));
    var sub = done
      ? ("Mix of " + Math.min(PRACTICE_SIZE, poolCount) + " questions from your " + done + " completed lesson" + (done === 1 ? "" : "s"))
      : "Finish a lesson to unlock practice";
    pc.innerHTML =
      '<div class="pc-icon">💪</div>' +
      '<div class="pc-text"><div class="pc-title">Practice</div><div class="pc-sub">' + sub + "</div></div>" +
      '<div class="pc-go">' + (done ? "▶" : "🔒") + "</div>";
    if (done) pc.onclick = function () { startPractice(); };
    else pc.onclick = function () { toast("🔒 Complete at least one lesson first"); };
    wrap.appendChild(pc);

    // review-mistakes button
    var missedCount = reviewPool().length;
    var rc = el("button", "review-card" + (missedCount ? "" : " disabled"));
    var rsub = missedCount
      ? ("Redo the " + missedCount + " question" + (missedCount === 1 ? "" : "s") + " you've missed")
      : "No mistakes to review — nice work!";
    rc.innerHTML =
      '<div class="rc-icon">🔁</div>' +
      '<div class="pc-text"><div class="pc-title">Review mistakes</div><div class="pc-sub">' + rsub + "</div></div>" +
      '<div class="pc-go">' + (missedCount ? "▶" : "✓") + "</div>";
    if (missedCount) rc.onclick = function () { startReview(); };
    else rc.onclick = function () { toast("🎉 No missed questions — you're all caught up!"); };
    wrap.appendChild(rc);

    // units + path
    UNITS.forEach(function (u, ui) {
      var color = u.color || UNIT_COLORS[ui % UNIT_COLORS.length];
      var unitTotal = (u.lessons || []).length;
      var unitDone = 0;
      (u.lessons || []).forEach(function (l, li) { if (isDone(globalIndexOf(ui, li))) unitDone++; });

      var uh = el("div", "unit-header");
      uh.style.background = color;
      var left = el("div", "uh-left");
      left.appendChild(el("div", "uh-kicker", "Unit " + (ui + 1)));
      left.appendChild(el("div", "uh-title", esc(u.title)));
      if (u.description) left.appendChild(el("div", "uh-desc", esc(u.description)));
      // "Test out" — pass a challenge quiz to complete the whole unit without doing every lesson
      if (unitTotal > 0 && unitDone < unitTotal) {
        var to = el("button", "testout-btn", "⚡ Test out of this unit");
        to.onclick = function () { startTestOut(ui); };
        left.appendChild(to);
      }
      uh.appendChild(left);
      // per-unit progress badge (ring + lesson count)
      uh.appendChild(unitBadgeEl(u.icon || "🤖", unitDone, unitTotal));
      wrap.appendChild(uh);

      var path = el("div", "path");
      (u.lessons || []).forEach(function (l, li) {
        var gi = globalIndexOf(ui, li);
        var unlocked = isUnlocked(gi);
        var done = isDone(gi);

        var row = el("div", "node-row");
        var nodeWrap = el("div", "node-wrap off-" + (li % 8));

        var status = done ? "done" : (unlocked ? "current" : "locked");
        var btn = el("button", "node " + status);
        var icon = done ? '<span class="check">✓</span>' : (NODE_ICONS[li % NODE_ICONS.length]);
        btn.innerHTML = '<span class="face">' + icon + "</span>";
        btn.appendChild(el("span", "node-num", (gi + 1)));
        if (status === "locked") {
          btn.disabled = true;
          btn.onclick = function () { toast("🔒 Finish the lesson before this one first"); };
        } else {
          btn.onclick = function () { startLesson(gi); };
        }
        nodeWrap.appendChild(btn);
        nodeWrap.appendChild(el("div", "node-label", esc(l.title)));
        row.appendChild(nodeWrap);
        path.appendChild(row);
      });
      wrap.appendChild(path);
    });

    // footer
    var foot = el("div", "footer-note");
    foot.innerHTML = total + " lessons across " + UNITS.length + " units · progress saves automatically<br>";
    var reset = el("button", "reset-link", "Reset all progress");
    reset.onclick = function () {
      if (confirm("Reset " + store.currentUser + "'s progress, XP and streak? This cannot be undone.")) {
        store.users[store.currentUser] = freshState();
        state = store.users[store.currentUser];
        saveStore(); renderHome();
      }
    };
    foot.appendChild(reset);
    wrap.appendChild(foot);

    app.appendChild(wrap);
    window.scrollTo(0, 0);
  }

  function globalIndexOf(ui, li) {
    for (var i = 0; i < LESSONS.length; i++)
      if (LESSONS[i].unitIndex === ui && LESSONS[i].lessonIndex === li) return i;
    return -1;
  }

  // Per-unit progress badge: a ring that fills with lessons completed, plus a count (🏅 when done).
  function unitBadgeEl(emoji, done, total) {
    var pct = total ? done / total : 0;
    var complete = total > 0 && done >= total;
    var R = 24, C = 2 * Math.PI * R;
    var offset = C * (1 - pct);
    var ringColor = complete ? "#ffe27a" : "#ffffff";
    var svg =
      '<svg width="58" height="58" viewBox="0 0 58 58" aria-hidden="true">' +
        '<circle cx="29" cy="29" r="' + R + '" fill="none" stroke="rgba(255,255,255,0.30)" stroke-width="5"></circle>' +
        '<circle cx="29" cy="29" r="' + R + '" fill="none" stroke="' + ringColor + '" stroke-width="5" stroke-linecap="round"' +
          ' stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + offset.toFixed(1) + '" transform="rotate(-90 29 29)"></circle>' +
        '<text x="29" y="30" text-anchor="middle" dominant-baseline="central" font-size="22">' + emoji + '</text>' +
      '</svg>';
    var col = el("div", "uh-iconcol");
    var badge = el("div", "uh-badge");
    badge.innerHTML = svg;
    col.appendChild(badge);
    col.appendChild(el("div", "uh-count", complete ? "🏅 Done" : (done + "/" + total)));
    return col;
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
    if (pool.length < 4) { toast("Not enough questions to test out"); return; }
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
    scr.appendChild(el("div", "big-emoji", passed ? "🎓" : "📚"));
    scr.appendChild(el("h1", null, passed ? "Tested out!" : "Not quite yet"));
    scr.appendChild(el("div", "sub", passed
      ? ("You scored " + pct + "% on " + UNITS[ui].title + " — the whole unit is now marked complete.")
      : ("You scored " + pct + "%. You need " + Math.round(TESTOUT_PASS * 100) + "% (" + need + " of " + session.total + ") to test out. Do a few lessons and try again.")));

    var rr = el("div", "reward-row");
    rr.appendChild(reward("Score", pct + "%"));
    rr.appendChild(reward("XP earned", "+" + gained));
    scr.appendChild(rr);

    var actions = el("div", "actions");
    if (!passed) {
      var retry = el("button", "btn btn-green", "Try again");
      retry.onclick = function () { startTestOut(ui); };
      actions.appendChild(retry);
    }
    var home = el("button", "btn " + (passed ? "btn-green" : "btn-ghost"), "Back to path");
    if (!passed) home.style.marginTop = "12px";
    home.onclick = function () { renderHome(); };
    actions.appendChild(home);
    scr.appendChild(actions);

    document.querySelectorAll(".lesson-screen").forEach(function (n) { n.remove(); });
    app.appendChild(scr);
  }

  function modeChipLabel() {
    if (session.mode === "review") return "🔁 Review";
    if (session.mode === "testout") return "⚡ Test-out";
    return "💪 Practice";
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
      idx: 0, correct: 0, hearts: 5, answered: false, lastCorrect: false
    };
    renderLesson();
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
    if (!pool.length) { toast("🎉 No missed questions to review!"); return; }
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
    document.querySelectorAll(".lesson-screen, .center-screen").forEach(function (n) { n.remove(); });
    var scr = el("div", "lesson-screen");

    // top: quit + progress + hearts
    var top = el("div", "lesson-top");
    var quit = el("button", "quit-x", "✕");
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
      top.appendChild(el("div", "heart-mini", "❤️ " + session.hearts));
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
    if (session.mode === "practice") kick = "💪 Practice · " + kick;
    else if (session.mode === "review") kick = "🔁 Review · " + kick;
    else if (session.mode === "testout") kick = "⚡ Test-out · " + kick;
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
    var checkBtn = el("button", "btn btn-gray", "Check");
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
    if (b) { b.disabled = false; b.className = "btn btn-green"; }
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
      if (input) { input.disabled = true; input.style.borderColor = correct ? "var(--green)" : "var(--red)"; }
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
    fb.appendChild(el("div", "badge", correct ? "✅" : "❌"));
    var ft = el("div", "fb-text " + (correct ? "correct" : "wrong"));
    var title = correct ? randPraise() : "Not quite";
    ft.appendChild(el("div", "fb-title", title));
    var explain = q.explain || "";
    if (!correct) {
      explain = correctAnswerText(q) + (explain ? "  " + explain : "");
    }
    if (explain) ft.appendChild(el("div", "fb-explain", esc(explain)));
    fb.appendChild(ft);
    fi.appendChild(fb);

    var cont = el("button", "btn " + (correct ? "btn-green" : "btn-red"), "Continue");
    cont.onclick = function () { nextQuestion(); };
    fi.appendChild(cont);
    foot.appendChild(fi);

    // update hearts display
    var hm = scr.querySelector(".heart-mini");
    if (hm) hm.textContent = "❤️ " + session.hearts;

    if (session.mode === "lesson" && session.hearts <= 0) {
      cont.textContent = "See results";
      cont.onclick = function () { failLesson(); };
    }
  }

  function correctAnswerText(q) {
    if (q.type === "mcq") return "Correct answer: " + q.choices[q.answer] + ".";
    if (q.type === "truefalse") return "Correct answer: " + (q.answer ? "True" : "False") + ".";
    if (q.type === "fill") return "Correct answer: " + q.answer + ".";
    if (q.type === "order") return "Correct order: " + q.items.join(" → ") + ".";
    return "";
  }

  function randPraise() {
    var p = ["Nice!", "Correct!", "You got it!", "Solid!", "Nailed it!", "Brilliant!", "Smart!"];
    return p[Math.floor(Math.random() * p.length)];
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
    state.xp += gained;
    bumpStreak();
    saveState();

    var acc = Math.round(session.correct / session.total * 100);
    var scr = el("div", "center-screen");
    scr.appendChild(el("div", "big-emoji", acc === 100 ? "🏆" : "🎉"));
    scr.appendChild(el("h1", null, acc === 100 ? "Perfect lesson!" : "Lesson complete!"));
    scr.appendChild(el("div", "sub", esc(session.entry.lesson.title)));

    var rr = el("div", "reward-row");
    rr.appendChild(reward("Total XP", "+" + gained));
    rr.appendChild(reward("Accuracy", acc + "%"));
    scr.appendChild(rr);

    var actions = el("div", "actions");
    var cont = el("button", "btn btn-green", "Continue");
    cont.onclick = function () { renderHome(); };
    actions.appendChild(cont);
    scr.appendChild(actions);

    document.querySelectorAll(".lesson-screen").forEach(function (n) { n.remove(); });
    app.appendChild(scr);
    if (firstTime && session.gi + 1 === LESSONS.length) {
      setTimeout(function () { toast("🎓 You finished the whole course!"); }, 400);
    }
  }

  function completePractice() {
    var gained = session.correct * 5 + 5; // lighter XP than a fresh lesson
    state.xp += gained;
    bumpStreak();
    saveState();

    var acc = Math.round(session.correct / session.total * 100);
    var scr = el("div", "center-screen");
    scr.appendChild(el("div", "big-emoji", acc === 100 ? "💪" : "🎉"));
    scr.appendChild(el("h1", null, "Practice complete!"));
    scr.appendChild(el("div", "sub", session.correct + " of " + session.total + " correct — keeping those terms sharp."));

    var rr = el("div", "reward-row");
    rr.appendChild(reward("XP earned", "+" + gained));
    rr.appendChild(reward("Accuracy", acc + "%"));
    scr.appendChild(rr);

    var actions = el("div", "actions");
    var again = el("button", "btn btn-green", "Practice again");
    again.onclick = function () { startPractice(); };
    actions.appendChild(again);
    var home = el("button", "btn btn-ghost", "Back to path");
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
    scr.appendChild(el("div", "big-emoji", remaining === 0 ? "🧠" : "💪"));
    scr.appendChild(el("h1", null, remaining === 0 ? "Mistakes cleared!" : "Review complete!"));
    scr.appendChild(el("div", "sub", "You fixed " + session.correct + " of " + session.total +
      (remaining === 0 ? " — your mistakes list is empty!" : " · " + remaining + " still to review")));

    var rr = el("div", "reward-row");
    rr.appendChild(reward("XP earned", "+" + gained));
    rr.appendChild(reward("Fixed", session.correct + "/" + session.total));
    scr.appendChild(rr);

    var actions = el("div", "actions");
    if (remaining > 0) {
      var more = el("button", "btn btn-green", "Review more");
      more.onclick = function () { startReview(); };
      actions.appendChild(more);
    }
    var home = el("button", "btn " + (remaining > 0 ? "btn-ghost" : "btn-green"), "Back to path");
    if (remaining > 0) home.style.marginTop = "12px";
    home.onclick = function () { renderHome(); };
    actions.appendChild(home);
    scr.appendChild(actions);

    document.querySelectorAll(".lesson-screen").forEach(function (n) { n.remove(); });
    app.appendChild(scr);
  }

  function failLesson() {
    var scr = el("div", "center-screen");
    scr.appendChild(el("div", "big-emoji", "💔"));
    scr.appendChild(el("h1", null, "Out of hearts"));
    scr.appendChild(el("div", "sub", "You ran out of hearts — give it another shot. Repetition is how it sticks!"));
    var actions = el("div", "actions");
    var retry = el("button", "btn btn-green", "Try again");
    retry.onclick = function () { if (session.mode === "practice") startPractice(); else startLesson(session.gi); };
    actions.appendChild(retry);
    var home = el("button", "btn btn-ghost", "Back to path");
    home.style.marginTop = "12px";
    home.onclick = function () { renderHome(); };
    actions.appendChild(home);
    scr.appendChild(actions);
    document.querySelectorAll(".lesson-screen").forEach(function (n) { n.remove(); });
    app.appendChild(scr);
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
    renderProfiles();   // no profile yet -> pick or create one
  } else {
    renderTracks();     // profile set -> choose which track to study
  }
})();
