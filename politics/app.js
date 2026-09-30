/* ============================================================
   Political Academy — the app
   ------------------------------------------------------------
   Screens (hash routes, so the phone's back button works):
     #/            Today — the next briefing, daily goal, what's new
     #/map         the world map: every country, its briefing count, and
                   the relationships between countries
     #/atlas       the 30 countries by region
     #/c/<id>      a country: its briefings, map and dispatches — or a
                   relationship between two (ids like "us_cn", links.js)
     #/read/<id>   the reader
     #/glossary    every term, searchable
     #/profiles    who's reading

   Progress lives in localStorage ("politics_v1", one profile per
   name) and is mirrored into Academy's store (academy_users_v1) as
   track "politics", so the two apps share profiles, XP and streaks
   on the same origin — the same bridge CodeLab uses. All progress
   rules are in core.js; this file only draws and saves.
   ============================================================ */
(function () {
  "use strict";

  var P = window.POLITICS;
  var LS_KEY = "politics_v1";
  var PREFS_KEY = "politics_prefs_v1";
  var ACADEMY_KEY = "academy_users_v1";
  var ACADEMY_TRACK = "politics";
  var ACADEMY_URL = "../";
  var app = document.getElementById("app");

  /* ---------- storage ---------- */
  function readJSON(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
  }
  function writeJSON(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); return true; } catch (e) { return false; }
  }
  function loadStore() {
    var raw = readJSON(LS_KEY);
    var s = { currentUser: null, users: {} };
    if (raw && raw.users && typeof raw.users === "object") {
      Object.keys(raw.users).forEach(function (n) { s.users[n] = P.normalizeProfile(raw.users[n]); });
      s.currentUser = raw.currentUser && s.users[raw.currentUser] ? raw.currentUser : null;
    }
    return s;
  }
  var store = loadStore();
  function saveStore() { writeJSON(LS_KEY, store); }
  var prefs = readJSON(PREFS_KEY) || {};
  function savePrefs() { writeJSON(PREFS_KEY, prefs); }

  function today() { return P.dayKey(new Date()); }
  function me() { return store.currentUser ? store.users[store.currentUser] : null; }

  /* ---------- Academy bridge ---------- */
  function academyRaw() {
    var raw = readJSON(ACADEMY_KEY);
    return raw && raw.users && typeof raw.users === "object" ? raw : null;
  }
  function academyNames() {
    var raw = academyRaw();
    return raw ? Object.keys(raw.users) : [];
  }
  /* Write this profile's progress where Academy's picker reads it. Only
     our own track is touched; every other track is left exactly as found. */
  function syncAcademy() {
    var name = store.currentUser;
    if (!name) return;
    var raw = academyRaw() || { currentUser: null, users: {} };
    if (!raw.users[name]) raw.users[name] = { tracks: {} };
    raw.users[name].tracks = raw.users[name].tracks || {};
    raw.users[name].tracks[ACADEMY_TRACK] = P.academyMirror(me(), today());
    if (!raw.currentUser) raw.currentUser = name;
    writeJSON(ACADEMY_KEY, raw);
  }
  function selectUser(name) {
    name = String(name || "").trim().slice(0, 24);
    if (!name) return;
    if (!store.users[name]) store.users[name] = P.freshProfile();
    store.currentUser = name;
    saveStore();
    var raw = academyRaw() || { currentUser: null, users: {} };
    if (!raw.users[name]) raw.users[name] = { tracks: {} };
    raw.currentUser = name;
    writeJSON(ACADEMY_KEY, raw);
    syncAcademy();
  }
  function allProfileNames() {
    var names = Object.keys(store.users);
    academyNames().forEach(function (n) { if (names.indexOf(n) === -1) names.push(n); });
    return names;
  }
  /* Whoever was last studying in Academy is who's reading here. */
  (function adoptAcademyUser() {
    var raw = academyRaw();
    if (raw && raw.currentUser && raw.users[raw.currentUser]) {
      if (!store.users[raw.currentUser]) store.users[raw.currentUser] = P.freshProfile();
      store.currentUser = raw.currentUser;
      saveStore();
    }
  })();

  /* ---------- unit loading (lazy, one script per country) ---------- */
  var unitLoads = {};
  function loadUnit(id) {
    var c = P.subject(id);
    if (!c || !(c.lessons > 0)) return Promise.resolve(null);
    if (P.units[id]) return Promise.resolve(P.units[id]);
    if (unitLoads[id]) return unitLoads[id];
    unitLoads[id] = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "units/" + id + ".js";
      s.onload = function () { P.units[id] ? resolve(P.units[id]) : reject(new Error("units/" + id + ".js did not register")); };
      s.onerror = function () { delete unitLoads[id]; reject(new Error("Could not load units/" + id + ".js")); };
      document.head.appendChild(s);
    });
    return unitLoads[id];
  }
  function lessonIn(unit, id) {
    var ls = (unit && unit.lessons) || [];
    for (var i = 0; i < ls.length; i++) if (ls[i].id === id) return ls[i];
    return null;
  }

  /* ---------- DOM helpers ---------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  var esc = P.esc;
  var cleanups = [];
  function clear() {
    cleanups.forEach(function (f) { try { f(); } catch (e) {} });
    cleanups = [];
    closeSheet();
    app.innerHTML = "";
    window.scrollTo(0, 0);
  }
  var mdOpts = {
    term: function (id, label) {
      return '<button type="button" class="term" data-term="' + id + '">' + label + "</button>";
    },
    unit: function (id, label) {
      var c = P.subject(id);
      if (c && c.lessons > 0) return '<a class="unit-link" href="#/c/' + id + '">' + label + "</a>";
      return '<span class="unit-ref" title="' + esc((c ? c.name : id) + " — coming soon") + '">' + label + "</span>";
    }
  };
  function md(s) { return P.md(s, mdOpts); }
  function inline(s) { return P.inline(s, mdOpts); }
  function toast(msg) {
    var t = el("div", "toast", esc(msg));
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 250); }, 2000);
  }
  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }
  function initial(name) { return ((name || "?").trim().charAt(0) || "?").toUpperCase(); }
  var AVATAR_COLORS = ["#1f4e79", "#2f7d4f", "#b5462f", "#6b4fa0", "#c26a1b", "#1f7a6a", "#a8322d", "#3f5fa8"];
  function avatarColor(name) {
    var h = 0; name = name || "";
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
  }
  /* Kinds that repeat in a unit are numbered: "Story 2", "From the past 1". */
  function kindLabel(unit, lesson) {
    var label = P.KINDS[lesson.kind] || lesson.kind;
    if (lesson.kind !== "story" && lesson.kind !== "past" && lesson.kind !== "relation") return label;
    var n = 0;
    for (var i = 0; i < unit.lessons.length; i++) {
      if (unit.lessons[i].kind === lesson.kind) n++;
      if (unit.lessons[i].id === lesson.id) break;
    }
    return label + " " + n;
  }
  function ring(done, total, size, color) {
    var r = (size / 2) - 3, c = 2 * Math.PI * r, f = total ? Math.min(1, done / total) : 0;
    return '<svg class="ring" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + " " + size + '" aria-hidden="true">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="ring-track"/>' +
      (f > 0 ? '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="ring-fill" style="stroke:' + (color || "var(--accent)") +
      '" stroke-dasharray="' + (c * f).toFixed(1) + " " + c.toFixed(1) + '" transform="rotate(-90 ' + size / 2 + " " + size / 2 + ')"/>' : "") + "</svg>";
  }

  /* Glossary chips anywhere on the page open a sheet. */
  document.addEventListener("click", function (e) {
    var t = e.target && e.target.closest ? e.target.closest("[data-term]") : null;
    if (t) { e.preventDefault(); openTerm(t.getAttribute("data-term")); }
  });

  /* ---------- pictures ----------
     Illustrations and portraits are added over time (see
     tools/image-manifest.js), so every picture has a designed
     stand-in: a missing file shows the placeholder, never a broken icon. */
  function placeholder(country, block, compact) {
    var ph = el("div", "ph" + (compact ? " ph-compact" : ""));
    ph.style.setProperty("--c", (country && country.color) || "var(--accent)");
    ph.innerHTML = '<span class="ph-flag" aria-hidden="true">' + ((country && country.flag) || "🗳️") + "</span>" +
      (compact ? "" : '<span class="ph-label">🎨 Illustration coming</span><span class="ph-alt">' + esc((block && block.alt) || "") + "</span>");
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", (block && block.alt) || "Illustration coming");
    return ph;
  }
  function picture(src, alt, country, block, compact) {
    var wrap = el("div", "media");
    if (!src) { wrap.appendChild(placeholder(country, block, compact)); return wrap; }
    var img = el("img");
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", function () {
      wrap.innerHTML = "";
      wrap.appendChild(placeholder(country, block, compact));
    });
    wrap.appendChild(img);
    return wrap;
  }
  function figure(block, country) {
    var f = el("figure", "fig fig-" + block.type + (block.kind ? " fig-" + block.kind : ""));
    f.appendChild(picture(block.src, block.alt, country, block, false));
    var cap = el("figcaption");
    cap.innerHTML = inline(block.caption || "") + (block.credit ? ' <span class="credit">' + esc(block.credit) + "</span>" : "");
    f.appendChild(cap);
    return f;
  }

  /* ---------- sheets (bottom drawer on phones, dialog on desktop) ---------- */
  var sheetEl = null, sheetReturnFocus = null;
  function openSheet(build, label) {
    closeSheet();
    sheetReturnFocus = document.activeElement;
    var back = el("div", "sheet-back");
    var sheet = el("div", "sheet");
    sheet.setAttribute("role", "dialog");
    sheet.setAttribute("aria-modal", "true");
    sheet.setAttribute("aria-label", label || "Details");
    var close = el("button", "sheet-close", "✕");
    close.type = "button";
    close.setAttribute("aria-label", "Close");
    close.onclick = closeSheet;
    sheet.appendChild(close);
    build(sheet);
    back.appendChild(sheet);
    back.addEventListener("click", function (e) { if (e.target === back) closeSheet(); });
    document.body.appendChild(back);
    document.body.classList.add("sheet-open");
    sheetEl = back;
    requestAnimationFrame(function () { back.classList.add("show"); close.focus(); });
  }
  function closeSheet() {
    if (!sheetEl) return;
    sheetEl.remove();
    sheetEl = null;
    document.body.classList.remove("sheet-open");
    if (sheetReturnFocus && sheetReturnFocus.focus) try { sheetReturnFocus.focus(); } catch (e) {}
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeSheet(); });

  function openTerm(id) {
    var t = P.glossary[id];
    if (!t) return;
    openSheet(function (s) {
      s.appendChild(el("div", "sheet-kicker", "Glossary"));
      s.appendChild(el("h2", "sheet-title", esc(t.term)));
      s.appendChild(el("div", "sheet-body", md(t.def)));
      var a = el("a", "btn btn-ghost", "Open the glossary →");
      a.href = "#/glossary/" + encodeURIComponent(id);
      s.appendChild(a);
    }, t.term);
  }
  function openDispatch(u) {
    var c = P.subject(u.unit);
    var prof = me();
    if (prof && !prof.seen[u.id]) { prof.seen[u.id] = 1; saveStore(); }
    openSheet(function (s) {
      s.appendChild(el("div", "sheet-kicker", (c ? c.flag + " " + esc(c.name) + " · " : "") + "Dispatch · " + esc(P.formatDate(u.date))));
      s.appendChild(el("h2", "sheet-title", esc(u.title)));
      s.appendChild(el("div", "sheet-body prose", md(u.md)));
      if (u.sources && u.sources.length) s.appendChild(sourcesList(u.sources));
    }, u.title);
  }
  function openMenu() {
    var prof = me();
    openSheet(function (s) {
      var head = el("div", "menu-head");
      head.innerHTML = '<span class="avatar" style="background:' + avatarColor(store.currentUser) + '">' + esc(initial(store.currentUser)) + "</span>" +
        '<div><div class="menu-name">' + esc(store.currentUser) + '</div><div class="menu-sub">' +
        plural(P.readCount(prof), "briefing") + " read · " + P.xp(prof) + " XP</div></div>";
      s.appendChild(head);

      function segmented(label, options, current, onPick) {
        var row = el("div", "setting");
        row.appendChild(el("div", "setting-label", label));
        var seg = el("div", "seg");
        seg.setAttribute("role", "group");
        seg.setAttribute("aria-label", label);
        options.forEach(function (o) {
          var b = el("button", "seg-btn" + (o[0] === current ? " on" : ""), o[1]);
          b.type = "button";
          b.setAttribute("aria-pressed", o[0] === current ? "true" : "false");
          b.onclick = function () { onPick(o[0]); openMenu(); };
          seg.appendChild(b);
        });
        row.appendChild(seg);
        return row;
      }
      s.appendChild(segmented("Briefings a day", [[1, "1"], [2, "2"], [3, "3"]], prof.goal, function (v) {
        prof.goal = v; saveStore(); route();
      }));
      s.appendChild(segmented("Text size", [["s", "S"], ["m", "M"], ["l", "L"]], prefs.size || "m", function (v) {
        prefs.size = v; savePrefs(); applyPrefs();
      }));
      s.appendChild(segmented("Theme", [["auto", "Auto"], ["light", "Light"], ["dark", "Dark"]], prefs.theme || "auto", function (v) {
        prefs.theme = v; savePrefs(); applyPrefs();
      }));
      var links = el("div", "menu-links");
      var sw = el("a", "btn btn-ghost", "Switch reader");
      sw.href = "#/profiles";
      var ac = el("a", "btn btn-ghost", "🎓 Back to Academy");
      ac.href = ACADEMY_URL;
      links.appendChild(sw);
      links.appendChild(ac);
      s.appendChild(links);
    }, "Settings");
  }
  function applyPrefs() {
    var root = document.documentElement;
    if (prefs.theme === "light" || prefs.theme === "dark") root.setAttribute("data-theme", prefs.theme);
    else root.removeAttribute("data-theme");
    if (prefs.size === "s" || prefs.size === "l") root.setAttribute("data-size", prefs.size);
    else root.removeAttribute("data-size");
  }

  /* ---------- chrome ---------- */
  function header(active) {
    var prof = me(), t = today();
    var bar = el("header", "topbar");
    var inner = el("div", "topbar-in");
    inner.innerHTML =
      '<a class="brand" href="#/"><span class="brand-ic" aria-hidden="true">🗳️</span><span class="brand-name">Political Academy</span></a>';
    var stats = el("div", "stats");
    stats.innerHTML =
      '<span class="stat streak" title="Day streak">🔥 <b>' + P.streak(prof.days, t) + "</b></span>" +
      '<span class="stat xp" title="XP">⭐ <b>' + P.xp(prof) + "</b></span>";
    var chip = el("button", "avatar-btn");
    chip.type = "button";
    chip.setAttribute("aria-label", "Settings and profile");
    chip.innerHTML = '<span class="avatar" style="background:' + avatarColor(store.currentUser) + '">' + esc(initial(store.currentUser)) + "</span>";
    chip.onclick = openMenu;
    stats.appendChild(chip);
    inner.appendChild(stats);
    bar.appendChild(inner);
    var nav = el("nav", "tabs");
    nav.setAttribute("aria-label", "Sections");
    [["today", "#/", "Today"], ["map", "#/map", "Map"], ["atlas", "#/atlas", "Atlas"], ["glossary", "#/glossary", "Glossary"]].forEach(function (x) {
      var a = el("a", "tab" + (active === x[0] ? " on" : ""), x[2]);
      a.href = x[1];
      if (active === x[0]) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    });
    bar.appendChild(nav);
    return bar;
  }
  function shell(active) {
    clear();
    app.appendChild(header(active));
    var main = el("main", "wrap");
    main.id = "main";
    app.appendChild(main);
    return main;
  }
  function errorCard(main, msg) {
    main.appendChild(el("div", "card error", "<b>Something didn't load.</b><br>" + esc(msg) +
      '<br><a class="btn btn-ghost" href="#/">Back to Today</a>'));
  }

  /* ============================================================
     TODAY
     ============================================================ */
  function greeting() {
    var h = new Date().getHours();
    return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
  }
  function weekStrip(prof, t) {
    var set = {};
    prof.days.forEach(function (d) { set[d] = 1; });
    var names = ["S", "M", "T", "W", "T", "F", "S"];
    var html = "";
    for (var i = 6; i >= 0; i--) {
      var d = P.addDays(t, -i);
      var wd = new Date(P.dayNum(d) * 86400000).getUTCDay();
      html += '<span class="day' + (set[d] ? " done" : "") + (i === 0 ? " today" : "") + '" title="' + P.formatDate(d) + '">' +
        '<span class="day-dot"></span><span class="day-name">' + names[wd] + "</span></span>";
    }
    return '<div class="week" aria-label="Last seven days">' + html + "</div>";
  }
  function renderToday() {
    var main = shell("today");
    var prof = me(), t = today();
    var todayN = P.todayCount(prof, t);

    main.appendChild(el("div", "greet", greeting() + ", <b>" + esc(store.currentUser) + "</b>" +
      '<span class="greet-date">' + esc(P.formatDate(t)) + "</span>"));

    var goal = el("section", "card goal");
    var met = todayN >= prof.goal;
    goal.innerHTML = '<div class="goal-ring">' + ring(Math.min(todayN, prof.goal), prof.goal, 64, met ? "var(--ok)" : "var(--accent)") +
      '<span class="goal-num">' + todayN + "/" + prof.goal + "</span></div>" +
      '<div class="goal-text"><div class="goal-title">' + (met ? "Daily goal done ✓" : "Today's goal: " + prof.goal + " briefing" + (prof.goal > 1 ? "s" : "")) + "</div>" +
      '<div class="goal-sub">' + (P.streak(prof.days, t) ? "🔥 " + P.streak(prof.days, t) + "-day streak" : "Read one to start a streak") +
      " · a few minutes each</div>" + weekStrip(prof, t) + "</div>";
    main.appendChild(goal);

    var nextId = P.nextLessonId(prof);
    var slot = el("section", "today-next");
    main.appendChild(slot);
    if (nextId) {
      slot.appendChild(el("div", "card loading", "Loading today's briefing…"));
      loadUnit(P.unitIdOf(nextId)).then(function (unit) {
        slot.innerHTML = "";
        var lesson = lessonIn(unit, nextId);
        if (!lesson) throw new Error("Briefing " + nextId + " is missing from its unit file.");
        slot.appendChild(el("h2", "section-title", met ? "Keep going" : "Today's briefing"));
        slot.appendChild(lessonCard(unit, lesson, true));
      }).catch(function (e) { slot.innerHTML = ""; errorCard(slot, e.message); });
    } else {
      var built = P.builtCountries().length;
      slot.appendChild(el("div", "card caught-up",
        '<div class="big-emoji">🌍</div><h2>You\'re caught up.</h2><p>You\'ve read every briefing written so far (' + built +
        " of 30 countries). New countries arrive in waves; China, Russia, India and Ukraine are next.</p>" +
        '<a class="btn" href="#/atlas">Open the Atlas</a>'));
    }

    /* Refreshed briefings you've already read. */
    var readUnits = {};
    Object.keys(prof.read).forEach(function (id) { readUnits[P.unitIdOf(id)] = 1; });
    var upd = el("section", "updated-list");
    main.appendChild(upd);
    Promise.all(Object.keys(readUnits).map(function (id) { return loadUnit(id).catch(function () { return null; }); })).then(function (units) {
      var items = [];
      units.forEach(function (u) {
        (u && u.lessons || []).forEach(function (l) {
          if (P.isUpdatedSince(l, prof.read[l.id])) items.push([u, l]);
        });
      });
      if (!items.length) return;
      upd.appendChild(el("h2", "section-title", "Updated since you read them"));
      items.forEach(function (x) { upd.appendChild(lessonRow(x[0], x[1], false, true)); });
    });

    var news = P.unseenUpdates(prof);
    if (news.length) {
      var box = el("section", "news");
      box.appendChild(el("h2", "section-title", "What's new"));
      news.slice(0, 5).forEach(function (u) { box.appendChild(dispatchRow(u)); });
      main.appendChild(box);
    }

    var path = el("section", "path");
    path.appendChild(el("h2", "section-title", "Your path"));
    var row = el("div", "path-row");
    P.countries.slice(0, 8).forEach(function (c) { row.appendChild(countryChip(c)); });
    var more = el("a", "path-more", "All 30 →");
    more.href = "#/atlas";
    row.appendChild(more);
    path.appendChild(row);
    main.appendChild(path);
  }
  function lessonCard(unit, lesson, big) {
    var c = P.subject(unit.id);
    var a = el("a", "card lesson-card" + (big ? " big" : ""));
    a.href = "#/read/" + lesson.id;
    a.style.setProperty("--c", c.color);
    var hero = P.heroOf(lesson);
    a.appendChild(picture(hero && hero.src, hero && hero.alt, c, hero, true));
    var body = el("div", "lesson-card-body");
    body.innerHTML =
      '<div class="kicker">' + c.flag + " " + esc(c.name) + " · " + P.lessonPos(unit, lesson.id) + " of " + unit.lessons.length + " · " + esc(kindLabel(unit, lesson)) + "</div>" +
      '<div class="lesson-card-title">' + esc(lesson.title) + "</div>" +
      '<div class="lesson-card-dek">' + esc(lesson.dek) + "</div>" +
      '<div class="lesson-card-meta">⏱ ' + P.readMins(lesson) + ' min read<span class="go">Start reading →</span></div>';
    a.appendChild(body);
    return a;
  }
  function dispatchRow(u) {
    var c = P.subject(u.unit);
    var b = el("button", "row dispatch");
    b.type = "button";
    b.innerHTML = '<span class="row-ic">' + (c ? c.flag : "📰") + '</span><span class="row-main"><span class="row-title">' + esc(u.title) +
      '</span><span class="row-sub">Dispatch · ' + esc(P.formatDate(u.date)) + '</span></span><span class="row-go">›</span>';
    b.onclick = function () { openDispatch(u); };
    return b;
  }
  function countryChip(c) {
    var prof = me();
    var built = c.lessons > 0;
    var done = built ? P.readCount(prof, c.id) : 0;
    var chip = el(built ? "a" : "span", "cchip" + (built ? "" : " soon"));
    if (built) chip.href = "#/c/" + c.id;
    chip.title = built ? c.name + ": " + done + " of " + c.lessons + " read" : c.name + " — coming soon";
    chip.innerHTML = '<span class="cchip-ring">' + (built ? ring(done, c.lessons, 44, c.color) : "") + '<span class="cchip-flag">' + c.flag + "</span></span>" +
      '<span class="cchip-name">' + esc(c.name) + "</span>";
    return chip;
  }

  /* ============================================================
     ATLAS
     ============================================================ */
  function renderAtlas() {
    var main = shell("atlas");
    var prof = me();
    var built = P.builtCountries();
    main.appendChild(el("h1", "page-title", "Atlas"));
    main.appendChild(el("p", "page-sub", "Thirty countries, one unit each, grouped by region. A briefing a day covers a country in about twelve days. " +
      built.length + " of 30 " + (built.length === 1 ? "is" : "are") + " written so far; the rest arrive in waves."));
    var mapRow = el("a", "row atlas-map");
    mapRow.href = "#/map";
    mapRow.innerHTML = '<span class="row-ic">🗺️</span><span class="row-main"><span class="row-title">See them on the world map</span>' +
      '<span class="row-sub">Every country with its briefing count, and the relationships between them</span></span><span class="row-go">›</span>';
    main.appendChild(mapRow);
    P.PARTS.forEach(function (part) {
      var sec = el("section", "part");
      sec.appendChild(el("h2", "part-title", '<span class="part-num">Part ' + part.id + "</span> " + esc(part.title)));
      var grid = el("div", "atlas-grid");
      P.countries.filter(function (c) { return c.part === part.id; }).forEach(function (c) {
        var ok = c.lessons > 0;
        var done = ok ? P.readCount(prof, c.id) : 0;
        var card = el(ok ? "a" : "div", "ccard" + (ok ? "" : " soon"));
        if (ok) card.href = "#/c/" + c.id;
        card.style.setProperty("--c", c.color);
        card.innerHTML =
          '<div class="ccard-top"><span class="ccard-flag">' + c.flag + "</span>" +
          (ok ? '<span class="ccard-ring">' + ring(done, c.lessons, 40, c.color) + '<span class="ccard-count">' + done + "/" + c.lessons + "</span></span>"
              : '<span class="badge">Coming soon</span>') + "</div>" +
          '<div class="ccard-name">' + esc(c.name) + "</div>" +
          '<div class="ccard-blurb">' + esc(c.blurb) + "</div>";
        grid.appendChild(card);
      });
      sec.appendChild(grid);
      main.appendChild(sec);
    });
  }

  /* ============================================================
     COUNTRY (unit page)
     ============================================================ */
  function renderUnit(id) {
    var c = P.subject(id);
    var main = shell(c && c.isLink ? "map" : "atlas");
    if (!c) { errorCard(main, "There's no country called \"" + id + "\"."); return; }
    if (!(c.lessons > 0)) {
      main.appendChild(el("div", "card soon-card", '<div class="big-emoji">' + c.flag + "</div><h1>" + esc(c.name) + "</h1><p>" + esc(c.blurb) +
        '</p><p class="muted">This unit hasn\'t been written yet. Countries arrive in waves, in path order.</p><a class="btn" href="#/atlas">Back to the Atlas</a>'));
      return;
    }
    main.appendChild(el("div", "card loading", "Loading " + esc(c.name) + "…"));
    loadUnit(id).then(function (unit) {
      main.innerHTML = "";
      if (c.isLink) drawLink(main, c, unit);
      else drawUnit(main, c, unit);
    }).catch(function (e) { main.innerHTML = ""; errorCard(main, e.message); });
  }
  function drawUnit(main, c, unit) {
    var prof = me(), t = today();
    var done = P.readCount(prof, c.id);
    var hero = el("section", "unit-hero");
    hero.style.setProperty("--c", c.color);
    hero.innerHTML =
      '<div class="unit-flag">' + c.flag + "</div>" +
      '<div class="unit-head"><div class="kicker">Part ' + c.part + " · " + esc(P.PARTS[c.part - 1].title) + "</div>" +
      "<h1>" + esc(c.name) + "</h1>" +
      '<p class="unit-blurb">' + esc(c.blurb) + "</p>" +
      '<div class="unit-meta">' + done + " of " + unit.lessons.length + " read · Current as of " + esc(P.formatDate(unit.asOf)) +
      (P.isStale(unit.asOf, t) ? ' · <span class="stale">may be out of date</span>' : "") + "</div></div>";
    main.appendChild(hero);

    var news = P.updates.filter(function (u) { return u.unit === c.id; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    if (news.length) {
      var box = el("section", "news");
      box.appendChild(el("h2", "section-title", "Dispatches"));
      news.forEach(function (u) { box.appendChild(dispatchRow(u)); });
      main.appendChild(box);
    }

    var nextId = P.nextLessonId({ read: prof.read, last: c.id + "-1" }, [c]);
    var list = el("section", "lesson-list");
    list.appendChild(el("h2", "section-title", "Briefings"));
    unit.lessons.forEach(function (l) { list.appendChild(lessonRow(unit, l, l.id === nextId)); });
    main.appendChild(list);

    if (nextId) {
      var go = el("a", "btn btn-wide", done ? "Continue: " + esc(lessonIn(unit, nextId).title) + " →" : "Start with the snapshot →");
      go.href = "#/read/" + nextId;
      main.appendChild(go);
    } else {
      main.appendChild(el("div", "card done-card", "✓ You've read all " + unit.lessons.length + " briefings on " + esc(c.name) + "."));
    }

    var links = P.linksOf(c.id);
    if (links.length) {
      var lsec = el("section", "related");
      lsec.appendChild(el("h2", "section-title", "Relationships"));
      links.forEach(function (l) { lsec.appendChild(linkRow(l)); });
      main.appendChild(lsec);
    }

    var related = (c.related || []).map(P.country).filter(Boolean);
    if (related.length) {
      var rel = el("section", "related");
      rel.appendChild(el("h2", "section-title", "Connected countries"));
      var row = el("div", "path-row");
      related.forEach(function (r) { row.appendChild(countryChip(r)); });
      rel.appendChild(row);
      main.appendChild(rel);
    }
  }
  /* ============================================================
     RELATIONSHIPS (links.js)
     ============================================================ */
  function linkRow(l) {
    var s = P.subject(l.id), prof = me();
    var ok = s.lessons > 0;
    var done = ok ? P.readCount(prof, l.id) : 0;
    var a = el(ok ? "a" : "div", "row link-row" + (ok ? "" : " soon"));
    if (ok) a.href = "#/c/" + l.id;
    a.style.setProperty("--c", s.color);
    a.innerHTML =
      '<span class="row-ic link-flags">' + s.flag + "</span>" +
      '<span class="row-main"><span class="row-kicker">' + esc(s.name) + " · " +
      (ok ? plural(s.lessons, "briefing") + " · " + done + " read" : "Coming soon") + "</span>" +
      '<span class="row-title">' + esc(s.title) + "</span></span>" +
      (ok ? '<span class="row-go">›</span>' : "");
    return a;
  }
  function drawLink(main, c, unit) {
    var prof = me(), t = today();
    var done = P.readCount(prof, c.id);
    var a = P.country(c.a), b = P.country(c.b);
    var hero = el("section", "unit-hero link-hero");
    hero.style.setProperty("--c", c.color);
    hero.innerHTML =
      '<div class="unit-flag">' + c.flag + "</div>" +
      '<div class="unit-head"><div class="kicker">Relationship · ' + plural(unit.lessons.length, "briefing") + "</div>" +
      "<h1>" + esc(c.name) + "</h1>" +
      '<p class="unit-blurb"><b>' + esc(c.title) + ".</b> " + esc(c.blurb) + "</p>" +
      '<div class="unit-meta">' + done + " of " + unit.lessons.length + " read · Current as of " + esc(P.formatDate(unit.asOf)) +
      (P.isStale(unit.asOf, t) ? ' · <span class="stale">may be out of date</span>' : "") +
      ' · <a href="#/map/' + c.id + '">See it on the map</a></div></div>';
    main.appendChild(hero);

    var nextId = P.nextLessonId({ read: prof.read, last: c.id + "-1" }, [c]);
    var list = el("section", "lesson-list");
    list.appendChild(el("h2", "section-title", "Briefings"));
    unit.lessons.forEach(function (l) { list.appendChild(lessonRow(unit, l, l.id === nextId)); });
    main.appendChild(list);
    if (nextId) {
      var go = el("a", "btn btn-wide", done ? "Continue: " + esc(lessonIn(unit, nextId).title) + " →" : "Start with briefing 1 →");
      go.href = "#/read/" + nextId;
      main.appendChild(go);
    } else {
      main.appendChild(el("div", "card done-card", "✓ You've read all " + unit.lessons.length + " briefings on " + esc(c.name) + "."));
    }
    var rel = el("section", "related");
    rel.appendChild(el("h2", "section-title", "The two countries"));
    var row = el("div", "path-row");
    [a, b].forEach(function (x) { row.appendChild(countryChip(x)); });
    rel.appendChild(row);
    main.appendChild(rel);
  }

  /* ============================================================
     WORLD MAP
     ------------------------------------------------------------
     maps/world.js (tools/build-world.js) holds the projected shapes
     and badge positions; this draws them with the reader's progress.
     Each badge shows how many briefings a country has, with a gold
     ring for how many are read. Relationships (links.js) are arcs
     between two badges, with their own count. Tap anything to see it
     in the panel under the map; nothing navigates until you choose.
     ============================================================ */
  var worldLoad = null;
  function loadWorld() {
    if (P.world) return Promise.resolve(P.world);
    if (worldLoad) return worldLoad;
    worldLoad = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "maps/world.js";
      s.onload = function () { P.world ? resolve(P.world) : reject(new Error("maps/world.js did not register")); };
      s.onerror = function () { worldLoad = null; reject(new Error("Could not load maps/world.js")); };
      document.head.appendChild(s);
    });
    return worldLoad;
  }
  /* A gentle arc from a to b that bows toward the top of the map.
     `at` is the point a share t of the way along it (for its badge). */
  function arcPath(a, b, bow, t) {
    var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
    var dx = b[0] - a[0], dy = b[1] - a[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = dy / len, ny = -dx / len;
    if (ny > 0) { nx = -nx; ny = -ny; }                 // always bow upward
    var qx = mx + nx * len * bow, qy = my + ny * len * bow;
    var minQ = (28 - a[1] - b[1]) / 2;                  // keep the apex on the map
    if (qy < minQ) qy = minQ;
    t = t == null ? 0.5 : t;
    var u = 1 - t;
    var at = [u * u * a[0] + 2 * u * t * qx + t * t * b[0], u * u * a[1] + 2 * u * t * qy + t * t * b[1]];
    return { d: "M" + a[0] + "," + a[1] + " Q" + qx.toFixed(1) + "," + qy.toFixed(1) + " " + b[0] + "," + b[1], at: at };
  }
  function renderMap(focus) {
    var main = shell("map");
    main.classList.add("wrap-wide");
    main.appendChild(el("h1", "page-title", "World map"));
    main.appendChild(el("p", "page-sub", "All 30 countries, each with its number of briefings. The lines join countries that have " +
      "relationship briefings of their own. Tap a country or a line."));
    var box = el("div", "wmap-box");
    box.appendChild(el("div", "card loading", "Drawing the map…"));
    main.appendChild(box);
    var panel = el("section", "wmap-panel");
    panel.setAttribute("aria-live", "polite");
    main.appendChild(panel);
    loadWorld().then(function (W) { drawMap(box, panel, W, focus); })
      .catch(function (e) { box.innerHTML = ""; errorCard(box, e.message); });
  }
  function drawMap(box, panel, W, focus) {
    var prof = me();
    var ns = "http://www.w3.org/2000/svg";
    function pos(id) { var k = W.countries[id]; return [k.lx, k.ly]; }
    /* A link's badge sits 30% of the way along its arc from the first
       country, clear of the badges it joins; a link in links.js can set
       its own `bow` (how high the arc climbs) and `at`. */
    function linkArc(l) { return arcPath(pos(l.a), pos(l.b), l.bow || 0.45, l.at || 0.3); }
    function each(sel, fn) { Array.prototype.forEach.call(root.querySelectorAll(sel), fn); }
    var svg = ['<svg class="wmap" viewBox="0 0 ' + W.w + " " + W.h + '" role="group" aria-label="World map of the 30 countries and their relationships">',
      '<defs><pattern id="wm-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
      '<rect width="4" height="4" class="wm-hatch-bg"/><rect width="1.6" height="4" class="wm-hatch-fg"/></pattern></defs>',
      '<rect class="wm-ocean" width="' + W.w + '" height="' + W.h + '"/>',
      '<path class="wm-land" d="' + W.land + '"/>'];
    P.countries.forEach(function (c) {
      var k = W.countries[c.id];
      if (!k) return;
      svg.push('<path class="wm-c" data-id="' + c.id + '" style="--c:' + c.color + '" d="' + k.d + '"><title>' + esc(c.name) + "</title></path>");
    });
    W.hatched.concat(W.contested.map(function (d) { return { d: d }; })).forEach(function (x) {
      svg.push('<path class="wm-disputed" d="' + x.d + '"><title>' + esc(x.name ? x.name + " (disputed)" : "Disputed territory") + "</title></path>");
    });
    svg.push('<path class="wm-borders" d="' + W.borders + '"/>');
    svg.push('<g class="wm-rel-layer"></g>');
    /* Leader lines for badges moved off a crowded country. */
    P.countries.forEach(function (c) {
      var k = W.countries[c.id];
      if (!k) return;
      var dx = k.lx - k.cx, dy = k.ly - k.cy;
      if (dx * dx + dy * dy > 150) svg.push('<line class="wm-leader" x1="' + k.cx + '" y1="' + k.cy + '" x2="' + k.lx + '" y2="' + k.ly + '"/><circle class="wm-dot" cx="' + k.cx + '" cy="' + k.cy + '" r="1.8"/>');
    });
    P.links.forEach(function (l) {
      if (!W.countries[l.a] || !W.countries[l.b]) return;
      var d = linkArc(l).d, s = P.subject(l.id);
      svg.push('<path class="wm-link-hit" data-link="' + l.id + '" d="' + d + '"/>' +
        '<path class="wm-link' + (s.lessons > 0 ? "" : " soon") + '" data-link="' + l.id + '" style="--c:' + s.color + '" d="' + d + '"/>');
    });
    /* Badges on top: countries, then relationships. */
    P.countries.forEach(function (c) {
      var k = W.countries[c.id];
      if (!k) return;
      var n = c.lessons || 0, done = n ? P.readCount(prof, c.id) : 0;
      var r = 15.5, circ = 2 * Math.PI * r, f = n ? Math.min(1, done / n) : 0;
      svg.push('<g class="wm-b" data-id="' + c.id + '" transform="translate(' + k.lx + "," + k.ly + ')" tabindex="0" role="button" aria-label="' +
        esc(c.name + ": " + plural(n, "briefing") + ", " + done + " read") + '" style="--c:' + c.color + '">' +
        "<title>" + esc(c.name + " · " + plural(n, "briefing") + " · " + done + " read") + "</title>" +
        '<circle class="wm-b-ring" r="' + r + '"/>' +
        (f > 0 ? '<circle class="wm-b-prog" r="' + r + '" stroke-dasharray="' + (circ * f).toFixed(1) + " " + circ.toFixed(1) + '" transform="rotate(-90)"/>' : "") +
        '<circle class="wm-b-disc" r="12"/><text class="wm-b-num" dy="0.36em">' + n + "</text></g>");
    });
    P.links.forEach(function (l) {
      if (!W.countries[l.a] || !W.countries[l.b]) return;
      var s = P.subject(l.id), spot = linkArc(l).at;
      var done = P.readCount(prof, l.id);
      svg.push('<g class="wm-lb" data-link="' + l.id + '" transform="translate(' + spot[0].toFixed(1) + "," + spot[1].toFixed(1) + ')" tabindex="0" role="button" aria-label="' +
        esc(s.name + ": " + s.title + ", " + plural(s.lessons, "briefing") + ", " + done + " read") + '" style="--c:' + s.color + '">' +
        "<title>" + esc(s.name + " · " + s.title) + "</title>" +
        '<rect class="wm-lb-pill" x="-24" y="-11" width="48" height="22" rx="11"/>' +
        '<text class="wm-lb-txt" dy="0.36em">⇄ ' + s.lessons + "</text></g>");
    });
    svg.push("</svg>");
    box.innerHTML = "";
    var scroller = el("div", "wmap-scroll");
    scroller.innerHTML = svg.join("");
    box.appendChild(scroller);
    box.appendChild(el("div", "wmap-legend",
      '<span><i class="lg-badge">12</i> briefings on a country</span>' +
      '<span><i class="lg-ring"></i> fills gold as you read</span>' +
      '<span><i class="lg-link">⇄ 3</i> briefings on a relationship</span>' +
      '<span><i class="lg-hatch"></i> disputed territory</span>'));
    var root = scroller.querySelector("svg");
    var relLayer = root.querySelector(".wm-rel-layer");

    function mark(sel) {
      each(".on", function (x) { x.classList.remove("on"); });
      relLayer.innerHTML = "";
      root.classList.toggle("has-sel", !!sel);
      if (!sel) return;
      if (sel.link) {
        var l = P.link(sel.link);
        [l.a, l.b].forEach(function (id) { each('[data-id="' + id + '"]', function (x) { x.classList.add("on"); }); });
        each('[data-link="' + sel.link + '"]', function (x) { x.classList.add("on"); });
        return;
      }
      var c = P.country(sel.id);
      each('[data-id="' + c.id + '"]', function (x) { x.classList.add("on"); });
      /* Dashed lines to the countries its briefings connect it with. */
      (c.related || []).forEach(function (r) {
        if (!W.countries[r]) return;
        var p = document.createElementNS(ns, "path");
        p.setAttribute("class", "wm-rel");
        p.setAttribute("d", arcPath(pos(c.id), pos(r), 0.18).d);
        relLayer.appendChild(p);
        each('.wm-b[data-id="' + r + '"]', function (x) { x.classList.add("on"); });
      });
      P.linksOf(c.id).forEach(function (l) {
        each('[data-link="' + l.id + '"]', function (x) { x.classList.add("on"); });
        [l.a, l.b].forEach(function (id) { each('.wm-b[data-id="' + id + '"]', function (x) { x.classList.add("on"); }); });
      });
    }
    function select(sel, fromUser) {
      mark(sel);
      drawPanel(sel);
      if (fromUser && history.replaceState) history.replaceState(null, "", "#/map" + (sel ? "/" + (sel.link || sel.id) : ""));
    }
    function drawPanel(sel) {
      panel.innerHTML = "";
      if (!sel) {
        panel.appendChild(el("p", "wmap-hint", "Tap a country to see its briefings and connections, or a ⇄ line for the briefings on a relationship."));
        if (P.links.length) {
          panel.appendChild(el("h2", "section-title", "Relationships"));
          P.links.forEach(function (l) { panel.appendChild(linkRow(l)); });
        }
        return;
      }
      var card = el("div", "card wmap-card");
      var actions = el("div", "finish-row");
      if (sel.link) {
        var s = P.subject(sel.link);
        var done = P.readCount(prof, s.id);
        card.style.setProperty("--c", s.color);
        card.innerHTML = '<div class="wmap-card-head"><span class="wmap-card-flag">' + s.flag + '</span><div class="wmap-card-titles"><div class="kicker">Relationship · ' +
          plural(s.lessons, "briefing") + " · " + done + " read</div><h2>" + esc(s.name) + "</h2></div></div>" +
          '<p class="wmap-card-blurb"><b>' + esc(s.title) + ".</b> " + esc(s.blurb) + "</p>";
        if (s.lessons > 0) {
          var go = el("a", "btn", "Open the " + plural(s.lessons, "briefing") + " →");
          go.href = "#/c/" + s.id;
          actions.appendChild(go);
        }
        card.appendChild(actions);
        card.appendChild(el("h3", "wmap-sub", "The two countries"));
        var row = el("div", "path-row");
        [P.country(s.a), P.country(s.b)].forEach(function (x) { row.appendChild(countryChip(x)); });
        card.appendChild(row);
      } else {
        var c = P.country(sel.id);
        var n = c.lessons || 0, read = n ? P.readCount(prof, c.id) : 0;
        card.style.setProperty("--c", c.color);
        card.innerHTML = '<div class="wmap-card-head"><span class="wmap-card-flag">' + c.flag + '</span><div class="wmap-card-titles"><div class="kicker">Part ' + c.part + " · " +
          esc(P.PARTS[c.part - 1].title) + " · " + plural(n, "briefing") + " · " + read + " read</div><h2>" + esc(c.name) + "</h2></div></div>" +
          '<p class="wmap-card-blurb">' + esc(c.blurb) + "</p>";
        if (n > 0) {
          var open = el("a", "btn", "Open " + esc(c.name) + " →");
          open.href = "#/c/" + c.id;
          actions.appendChild(open);
        }
        card.appendChild(actions);
        var links = P.linksOf(c.id);
        if (links.length) {
          card.appendChild(el("h3", "wmap-sub", "Relationships"));
          links.forEach(function (l) { card.appendChild(linkRow(l)); });
        }
        var related = (c.related || []).map(P.country).filter(Boolean);
        if (related.length) {
          card.appendChild(el("h3", "wmap-sub", "Connected countries"));
          var rrow = el("div", "path-row");
          related.forEach(function (r) { rrow.appendChild(countryChip(r)); });
          card.appendChild(rrow);
        }
      }
      var all = el("button", "wmap-clear", "✕ Show the whole map");
      all.type = "button";
      all.onclick = function () { select(null, true); };
      card.appendChild(all);
      panel.appendChild(card);
    }
    function pick(target) {
      var b = target.closest ? target.closest("[data-link], [data-id]") : null;
      if (!b) return null;
      return b.hasAttribute("data-link") ? { link: b.getAttribute("data-link") } : { id: b.getAttribute("data-id") };
    }
    root.addEventListener("click", function (e) {
      var sel = pick(e.target);
      select(sel, true);
      if (sel && window.innerWidth < 900) panel.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
    root.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var sel = pick(e.target);
      if (!sel) return;
      e.preventDefault();
      select(sel, true);
    });
    var start = null;
    if (focus && P.link(focus)) start = { link: focus };
    else if (focus && P.country(focus)) start = { id: focus };
    select(start, false);
    /* On a phone the map scrolls sideways: start with the selection (or the Atlantic) in view. */
    if (scroller.scrollWidth > scroller.clientWidth) {
      var at = start ? (start.link ? linkArc(P.link(start.link)).at : pos(start.id)) : [W.w * 0.42, 0];
      scroller.scrollLeft = Math.max(0, at[0] / W.w * scroller.scrollWidth - scroller.clientWidth / 2);
    }
  }

  function lessonRow(unit, lesson, isNext, showFlag) {
    var prof = me();
    var readOn = prof.read[lesson.id];
    var updated = P.isUpdatedSince(lesson, readOn);
    var a = el("a", "row lesson-row" + (readOn ? " read" : "") + (isNext ? " next" : ""));
    a.href = "#/read/" + lesson.id;
    var c = P.subject(unit.id);
    a.style.setProperty("--c", c.color);
    a.innerHTML =
      '<span class="row-num">' + (readOn && !updated ? "✓" : P.lessonPos(unit, lesson.id)) + "</span>" +
      '<span class="row-main"><span class="row-kicker">' + (showFlag ? c.flag + " " + esc(c.name) + " · " : "") + esc(kindLabel(unit, lesson)) + " · " + P.readMins(lesson) + " min</span>" +
      '<span class="row-title">' + esc(lesson.title) + "</span>" +
      (updated ? '<span class="badge badge-upd">Updated since you read it</span>' : isNext ? '<span class="badge badge-next">Up next</span>' : "") +
      '</span><span class="row-go">›</span>';
    return a;
  }

  /* ============================================================
     READER
     ============================================================ */
  function renderReader(lessonId) {
    var id = P.unitIdOf(lessonId);
    var c = P.subject(id);
    clear();
    if (!c) { var m0 = shell("today"); errorCard(m0, "There's no briefing called \"" + lessonId + "\"."); return; }
    app.appendChild(el("div", "card loading reader-loading", "Loading…"));
    loadUnit(id).then(function (unit) {
      var lesson = lessonIn(unit, lessonId);
      if (!lesson) throw new Error("There's no briefing called \"" + lessonId + "\".");
      drawReader(unit, lesson, c);
    }).catch(function (e) { var m = shell("today"); errorCard(m, e.message); });
  }
  function drawReader(unit, lesson, c) {
    clear();
    var prof = me(), t = today();
    prof.last = lesson.id;
    saveStore();
    document.title = lesson.title + " · " + c.name + " · Political Academy";
    cleanups.push(function () { document.title = "Political Academy"; });

    var bar = el("header", "readbar");
    bar.style.setProperty("--c", c.color);
    var back = el("a", "readbar-back", "‹ " + c.flag + " " + esc(c.name));
    back.href = "#/c/" + c.id;
    var size = el("button", "readbar-size", "Aa");
    size.type = "button";
    size.setAttribute("aria-label", "Change text size");
    size.onclick = function () {
      var order = ["s", "m", "l"], cur = prefs.size || "m";
      prefs.size = order[(order.indexOf(cur) + 1) % 3];
      savePrefs(); applyPrefs();
      toast("Text size: " + { s: "small", m: "medium", l: "large" }[prefs.size]);
    };
    var prog = el("div", "readbar-progress");
    var fill = el("div", "readbar-fill");
    prog.appendChild(fill);
    bar.appendChild(back);
    bar.appendChild(size);
    bar.appendChild(prog);
    app.appendChild(bar);
    function onScroll() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      fill.style.width = (h > 0 ? Math.min(100, Math.max(0, window.scrollY / h * 100)) : 100) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(function () { window.removeEventListener("scroll", onScroll); });

    var art = el("article", "reader");
    art.style.setProperty("--c", c.color);
    var readOn = prof.read[lesson.id];
    var updated = P.isUpdatedSince(lesson, readOn);
    var head = el("header", "reader-head");
    head.innerHTML =
      '<div class="kicker">' + c.flag + " " + esc(c.name) + " · Briefing " + P.lessonPos(unit, lesson.id) + " of " + unit.lessons.length + " · " + esc(kindLabel(unit, lesson)) + "</div>" +
      "<h1>" + esc(lesson.title) + "</h1>" +
      '<p class="dek">' + esc(lesson.dek) + "</p>" +
      '<div class="reader-meta">⏱ ' + P.readMins(lesson) + " min read · Current as of " + esc(P.formatDate(lesson.asOf)) +
      (updated ? ' <span class="badge badge-upd">Updated since you read it</span>' : "") +
      (P.isStale(lesson.asOf, t) ? ' <span class="badge badge-stale">May be out of date</span>' : "") + "</div>";
    art.appendChild(head);

    (lesson.blocks || []).forEach(function (b) { art.appendChild(drawBlock(b, c)); });

    if (lesson.takeaways && lesson.takeaways.length) {
      var tk = el("section", "takeaways");
      tk.innerHTML = "<h2>Three things to remember</h2><ol>" + lesson.takeaways.map(function (x) { return "<li>" + inline(x) + "</li>"; }).join("") + "</ol>";
      art.appendChild(tk);
    }
    if (lesson.check) art.appendChild(drawCheck(lesson, prof));
    if (lesson.sources && lesson.sources.length) {
      var src = el("section", "sources");
      src.appendChild(el("h2", null, "Sources"));
      src.appendChild(sourcesList(lesson.sources));
      art.appendChild(src);
    }
    art.appendChild(finishArea(unit, lesson, c));
    var main = el("main", "reader-wrap");
    main.appendChild(art);
    app.appendChild(main);
    onScroll();
  }
  function drawBlock(b, c) {
    switch (b.type) {
      case "section": {
        var s = el("section", "sec");
        if (b.head) s.appendChild(el("h2", null, esc(b.head)));
        s.appendChild(el("div", "prose", md(b.md)));
        return s;
      }
      case "image": case "map": case "diagram":
        return figure(b, c);
      case "facts": {
        var f = el("section", "facts");
        if (b.head) f.appendChild(el("h2", null, esc(b.head)));
        f.appendChild(el("dl", null, (b.rows || []).map(function (r) {
          return "<div><dt>" + esc(r[0]) + "</dt><dd>" + inline(r[1]) + "</dd></div>";
        }).join("")));
        return f;
      }
      case "timeline": {
        var tl = el("section", "timeline");
        if (b.head) tl.appendChild(el("h2", null, esc(b.head)));
        tl.appendChild(el("ol", null, (b.items || []).map(function (r) {
          return '<li><span class="tl-when">' + esc(r[0]) + '</span><span class="tl-what">' + inline(r[1]) + "</span></li>";
        }).join("")));
        return tl;
      }
      case "quote":
        return el("blockquote", "quote", "<p>" + inline(b.text) + "</p>" + (b.who ? "<cite>" + inline(b.who) + "</cite>" : ""));
      case "callout": {
        var icons = { why: ["💡", "Why it matters"], note: ["📝", "Worth knowing"], watch: ["👀", "What to watch"] };
        var ic = icons[b.tone] || icons.note;
        var co = el("aside", "callout callout-" + (b.tone || "note"));
        co.innerHTML = '<div class="callout-head">' + ic[0] + " " + esc(b.head || ic[1]) + '</div><div class="prose">' + md(b.md) + "</div>";
        return co;
      }
      case "compare": {
        var cmp = el("section", "compare");
        if (b.head) cmp.appendChild(el("h2", null, esc(b.head)));
        var cols = el("div", "compare-cols");
        [b.left, b.right].forEach(function (side, i) {
          cols.appendChild(el("div", "compare-side side-" + i, "<h3>" + esc(side.head) + '</h3><div class="prose">' + md(side.md) + "</div>"));
        });
        cmp.appendChild(cols);
        return cmp;
      }
      case "people": {
        var pp = el("section", "people");
        if (b.head) pp.appendChild(el("h2", null, esc(b.head)));
        (b.items || []).forEach(function (p) {
          var card = el("div", "person");
          var face = el("div", "person-face");
          var initials = p.name.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2);
          function initialsEl() {
            var d = el("div", "person-initials", esc(initials));
            d.style.background = c.color;
            d.setAttribute("role", "img");
            d.setAttribute("aria-label", p.name + " (portrait coming)");
            return d;
          }
          if (p.img) {
            var img = el("img");
            img.src = p.img;
            img.alt = "Portrait of " + p.name;
            img.loading = "lazy";
            img.addEventListener("error", function () { face.innerHTML = ""; face.appendChild(initialsEl()); });
            face.appendChild(img);
          } else face.appendChild(initialsEl());
          card.appendChild(face);
          card.appendChild(el("div", "person-body", '<div class="person-name">' + esc(p.name) + '</div><div class="person-role">' + esc(p.role) +
            '</div><div class="prose">' + md(p.md) + "</div>"));
          pp.appendChild(card);
        });
        return pp;
      }
      default:
        return el("div", "unknown-block", "");
    }
  }
  function drawCheck(lesson, prof) {
    var ck = lesson.check;
    var box = el("section", "check");
    box.innerHTML = '<div class="check-head">Quick check <span class="muted">· optional, never counts against you</span></div>' +
      '<div class="check-q">' + inline(ck.q) + "</div>";
    var list = el("div", "check-choices");
    var explain = el("div", "check-explain");
    function show(pick) {
      Array.prototype.forEach.call(list.children, function (btn, i) {
        btn.disabled = true;
        if (i === ck.answer) btn.classList.add("right");
        else if (i === pick) btn.classList.add("wrong");
      });
      explain.innerHTML = (pick === ck.answer ? "<b>Right.</b> " : "<b>Not quite.</b> ") + inline(ck.explain);
      explain.classList.add("show");
    }
    ck.choices.forEach(function (ch, i) {
      var b = el("button", "check-choice", inline(ch));
      b.type = "button";
      b.onclick = function () {
        prof.checks[lesson.id] = i;
        saveStore();
        show(i);
      };
      list.appendChild(b);
    });
    box.appendChild(list);
    box.appendChild(explain);
    if (typeof prof.checks[lesson.id] === "number") show(prof.checks[lesson.id]);
    return box;
  }
  function sourcesList(sources) {
    var ol = el("ol", "source-list");
    ol.innerHTML = sources.map(function (s) {
      var when = /^\d{4}-\d{2}-\d{2}$/.test(s.date) ? P.formatDate(s.date) : (s.date && s.date !== "n.d." ? s.date : "");
      return '<li><span class="src-pub">' + esc(s.publisher) + '</span> — <a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.title) + "</a>" +
        (when ? ' <span class="src-date">' + esc(when) + "</span>" : "") + "</li>";
    }).join("");
    return ol;
  }
  function nextAfter(unit, lesson) {
    var n = P.lessonPos(unit, lesson.id);
    if (n < unit.lessons.length) return unit.lessons[n].id;
    return P.nextLessonId(me());
  }
  function finishArea(unit, lesson, c) {
    var prof = me();
    var box = el("section", "finish");
    var readOn = prof.read[lesson.id];
    var updated = P.isUpdatedSince(lesson, readOn);
    function nextButtons(into) {
      var nid = nextAfter(unit, lesson);
      var row = el("div", "finish-row");
      if (nid) {
        var nu = P.subject(P.unitIdOf(nid));
        var a = el("a", "btn", (P.unitIdOf(nid) === unit.id ? "Next briefing" : "Next: " + nu.flag + " " + esc(nu.name)) + " →");
        a.href = "#/read/" + nid;
        row.appendChild(a);
      }
      var home = el("a", "btn btn-ghost", "Back to Today");
      home.href = "#/";
      row.appendChild(home);
      into.appendChild(row);
    }
    if (readOn && !updated) {
      box.appendChild(el("div", "finish-done", "✓ Read on " + esc(P.formatDate(readOn))));
      nextButtons(box);
      return box;
    }
    var btn = el("button", "btn btn-finish", updated ? "Mark the update as read ✓" : "Finish briefing ✓");
    btn.type = "button";
    btn.onclick = function () {
      var t = today();
      var res = P.markRead(prof, unit, lesson.id, t);
      saveStore();
      syncAcademy();
      box.innerHTML = "";
      var n = P.todayCount(prof, t);
      var cel = el("div", "celebrate");
      cel.innerHTML =
        '<div class="celebrate-big">' + (res.unitDone ? c.flag + (c.isLink ? " Relationship complete!" : " Country complete!") : "Briefing done!") + "</div>" +
        '<div class="celebrate-stats">' +
        (res.xpGained ? '<span class="pill pill-xp">+' + res.xpGained + " XP</span>" : '<span class="pill">Updated ✓</span>') +
        '<span class="pill pill-streak">🔥 ' + P.streak(prof.days, t) + "-day streak</span>" +
        (n >= prof.goal ? '<span class="pill pill-ok">Daily goal met</span>' : '<span class="pill">' + n + " of " + prof.goal + " today</span>") +
        "</div>" +
        (res.unitDone ? '<p class="celebrate-note">You\'ve read all ' + unit.lessons.length + " briefings on " + esc(c.name) + ". +" + P.XP_PER_COUNTRY + " bonus XP.</p>" : "");
      box.appendChild(cel);
      nextButtons(box);
      cel.scrollIntoView({ block: "center", behavior: "smooth" });
      var stat = document.querySelector(".readbar");
      if (stat) stat.classList.add("done");
    };
    box.appendChild(btn);
    return box;
  }

  /* ============================================================
     GLOSSARY
     ============================================================ */
  function renderGlossary(focus) {
    var main = shell("glossary");
    main.appendChild(el("h1", "page-title", "Glossary"));
    main.appendChild(el("p", "page-sub", "Every term you can tap in a briefing. Short, neutral definitions that work across countries."));
    var input = el("input", "search");
    input.type = "search";
    input.placeholder = "Search terms…";
    input.setAttribute("aria-label", "Search the glossary");
    main.appendChild(input);
    var list = el("dl", "gloss");
    main.appendChild(list);
    var terms = Object.keys(P.glossary).map(function (k) { return P.glossary[k]; })
      .sort(function (a, b) { return a.term.toLowerCase() < b.term.toLowerCase() ? -1 : 1; });
    function draw() {
      var q = input.value.trim().toLowerCase();
      list.innerHTML = "";
      var shown = 0;
      terms.forEach(function (t) {
        if (q && (t.term + " " + t.def).toLowerCase().indexOf(q) === -1) return;
        shown++;
        var d = el("div", "gloss-item" + (t.id === focus ? " focus" : ""));
        d.id = "term-" + t.id;
        d.innerHTML = "<dt>" + esc(t.term) + "</dt><dd>" + md(t.def) + "</dd>";
        list.appendChild(d);
      });
      if (!shown) list.appendChild(el("p", "muted", "No terms match “" + esc(q) + "”."));
    }
    input.addEventListener("input", draw);
    draw();
    if (focus) {
      var target = document.getElementById("term-" + focus);
      if (target) setTimeout(function () { target.scrollIntoView({ block: "center" }); }, 30);
    }
  }

  /* ============================================================
     PROFILES
     ============================================================ */
  function renderProfiles() {
    clear();
    var scr = el("main", "profiles");
    scr.appendChild(el("div", "profiles-logo", '<span aria-hidden="true">🗳️</span> Political Academy'));
    scr.appendChild(el("p", "profiles-sub", "Five-minute briefings on the 30 countries that shape the world."));
    var names = allProfileNames();
    scr.appendChild(el("h1", "profiles-title", names.length ? "Who's reading?" : "Create your profile"));
    var grid = el("div", "profiles-grid");
    names.forEach(function (name) {
      var prof = store.users[name];
      var b = el("button", "profile-card");
      b.type = "button";
      b.innerHTML = '<span class="avatar big" style="background:' + avatarColor(name) + '">' + esc(initial(name)) + "</span>" +
        '<span class="profile-name">' + esc(name) + "</span>" +
        '<span class="profile-meta">' + (prof ? plural(P.readCount(prof), "briefing") + " read" : "From Academy") + "</span>";
      b.onclick = function () { selectUser(name); goHome(); };
      grid.appendChild(b);
    });
    var add = el("button", "profile-card add");
    add.type = "button";
    add.innerHTML = '<span class="avatar big add-av">＋</span><span class="profile-name">Add reader</span><span class="profile-meta">New profile</span>';
    add.onclick = function () {
      var name = window.prompt("Name for this profile:");
      if (name === null) return;
      name = name.trim().slice(0, 24) || "Reader " + (names.length + 1);
      selectUser(name);
      goHome();
    };
    grid.appendChild(add);
    scr.appendChild(grid);
    scr.appendChild(el("p", "profiles-note", "Profiles are shared with Academy on this device, and progress saves automatically."));
    var back = el("a", "btn btn-ghost", "🎓 Back to Academy");
    back.href = ACADEMY_URL;
    scr.appendChild(back);
    app.appendChild(scr);
  }

  /* ---------- router ---------- */
  function goHome() {
    if (location.hash && location.hash !== "#/") location.hash = "#/";   // hashchange routes
    else route();
  }
  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/");
    if (!me() || parts[0] === "profiles") return renderProfiles();
    switch (parts[0]) {
      case "atlas": return renderAtlas();
      case "map": return renderMap(parts[1] || "");
      case "c": return renderUnit(parts[1]);
      case "read": return renderReader(parts[1]);
      case "glossary": return renderGlossary(decodeURIComponent(parts[1] || ""));
      default: return renderToday();
    }
  }
  window.addEventListener("hashchange", route);
  /* Days roll over while the tab is open: when the reader comes back to
     it, recompute the streak for Academy and redraw Today's goal ring. */
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "visible" || !me()) return;
    syncAcademy();
    var h = location.hash;
    if (!h || h === "#" || h === "#/") route();
  });

  applyPrefs();
  if (me()) syncAcademy();
  route();

  /* A handle for tools and tests; not used by the app itself. */
  window.POLITICS_APP = {
    store: function () { return store; },
    loadUnit: loadUnit,
    academy: function () { var r = academyRaw(); return r && store.currentUser && r.users[store.currentUser] ? r.users[store.currentUser].tracks[ACADEMY_TRACK] || null : null; }
  };
})();
