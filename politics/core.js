/* ============================================================
   Political Academy — registry + pure helpers
   ------------------------------------------------------------
   Loaded FIRST. countries.js declares the 30 countries (in path
   order), links.js the relationships between pairs of them,
   glossary.js adds terms, updates.js adds dated dispatches,
   and each unit file (units/<id>.js) registers its briefings with
   addUnit() when app.js lazy-loads it.

   Everything below the registry is DOM-free and takes the profile
   as a parameter, so tools/validate.js and tools/test-core.js run
   it in plain Node. app.js draws; this file decides.
   ============================================================ */
(function (root) {
  "use strict";
  var P = root.POLITICS = root.POLITICS || {};
  /* Keep anything registered before this file ran (a test harness can
     seed updates before boot), but never register the same id twice. */
  P.countries = P.countries || [];
  P._byId = P._byId || {};
  P.units = P.units || {};
  P.glossary = P.glossary || {};
  P.updates = P.updates || [];
  P.links = P.links || [];
  P._linkById = P._linkById || {};

  P.PARTS = [
    { id: 1, title: "The Big Four" },
    { id: 2, title: "Europe" },
    { id: 3, title: "The Middle East" },
    { id: 4, title: "The Indo-Pacific" },
    { id: 5, title: "The Americas" },
    { id: 6, title: "Africa" }
  ];

  /* The standard arc of a unit (see politics-curriculum.md). Units began
     with 8 briefings; four more were added later as ids 9-12, slotted into
     the reading order without renumbering, because ids are progress keys. */
  P.KINDS = {
    snapshot: "Snapshot",
    power: "How power works",
    founding: "How it began",
    history: "The road here",
    past: "From the past",
    players: "The players",
    story: "Story",
    spotlight: "Spotlight",
    now: "Where things stand",
    relation: "Relationship"
  };
  /* A relationship ("link") unit covers two countries in 2-3 briefings,
     all of kind "relation", with ids <link>-1 … <link>-N in order. */
  P.LINK_MIN = 2;
  P.LINK_MAX = 3;
  P.ARC8 = ["snapshot", "power", "history", "players", "story", "story", "story", "now"];
  P.ARC = ["snapshot", "power", "founding", "history", "past", "past", "players", "story", "story", "story", "spotlight", "now"];
  /* Briefing numbers (the n in "<unit>-n") in reading order. */
  P.ORDER12 = [1, 2, 9, 3, 10, 11, 4, 5, 6, 7, 12, 8];
  P.readingOrder = function (count) {
    if (count === P.ORDER12.length) return P.ORDER12.slice();
    var out = [];
    for (var n = 1; n <= count; n++) out.push(n);
    return out;
  };
  P.arcFor = function (count) { return count === P.ARC.length ? P.ARC : count === P.ARC8.length ? P.ARC8 : null; };

  P.XP_PER_BRIEFING = 10;
  P.XP_PER_COUNTRY = 20;
  P.STALE_DAYS = 120;          // a unit older than this gets its "where things stand" rewritten
  P.SECTION_WORDS_MAX = 180;   // one screenful of reading
  P.LESSON_WORDS_MIN = 500;
  P.LESSON_WORDS_MAX = 900;
  P.WORDS_PER_MIN = 200;

  /* Every AI illustration prompt starts with this, so the whole app reads
     like one publication. Lesson files hold only the scene. */
  P.IMAGE_STYLE = "Editorial illustration, muted textured gouache, cinematic wide composition, " +
    "soft natural light, restrained palette, no text, no logos, no legible signs, figures seen " +
    "from behind or at a distance with no recognizable faces. 16:9, 1600x900.";

  /* ---------- registry ---------- */
  P.defineCountry = function (c) {
    if (P._byId[c.id]) return;
    P.countries.push(c);
    P._byId[c.id] = c;
  };
  P.country = function (id) { return P._byId[id] || null; };

  /* Relationships between two countries (links.js). A link's id joins its
     two country ids with "_" (never "-", which separates the briefing
     number), so "us_cn-2" is the second US–China briefing. Links are
     not part of the 30-country path; the world map and each country's
     page lead to them. */
  P.defineLink = function (l) {
    if (P._linkById[l.id]) return;
    P.links.push(l);
    P._linkById[l.id] = l;
  };
  P.link = function (id) { return P._linkById[id] || null; };
  P.linksOf = function (countryId) {
    return P.links.filter(function (l) { return l.a === countryId || l.b === countryId; });
  };
  /* Anything with briefings: a country, or a link dressed like one
     (name, flag and colour) so pages, rows and the reader can draw it. */
  P.subject = function (id) {
    if (P._byId[id]) return P._byId[id];
    var l = P._linkById[id];
    if (!l) return null;
    var a = P._byId[l.a], b = P._byId[l.b];
    if (!a || !b) return null;
    return {
      id: l.id, isLink: true, a: l.a, b: l.b, title: l.title, blurb: l.blurb, lessons: l.lessons || 0,
      name: a.name + " & " + b.name, flag: a.flag + b.flag, color: l.color || a.color
    };
  };
  P.addUnit = function (id, unit) { P.units[id] = unit; };
  P.addTerms = function (list) {
    (list || []).forEach(function (t) { P.glossary[t.id] = t; });
  };
  P.addUpdate = function (u) {
    for (var i = 0; i < P.updates.length; i++) if (P.updates[i].id === u.id) return;
    P.updates.push(u);
  };
  P.builtCountries = function () {
    return P.countries.filter(function (c) { return (c.lessons || 0) > 0; });
  };
  P.unitIdOf = function (lessonId) { return String(lessonId || "").split("-")[0]; };
  P.lessonNum = function (lessonId) { return parseInt(String(lessonId || "").split("-")[1], 10) || 0; };
  /* A briefing's place in its unit's reading order (1-based), which can
     differ from the number in its id. */
  P.lessonPos = function (unit, lessonId) {
    var ls = (unit && unit.lessons) || [];
    for (var i = 0; i < ls.length; i++) if (ls[i].id === lessonId) return i + 1;
    return P.lessonNum(lessonId);
  };

  /* ---------- markup ----------
     A deliberately tiny grammar, so unit files stay readable and the
     validator can check every reference:
       **bold**   *italic*   [label](https://…)
       [[term]]  or  [[term-id|label]]         glossary chip
       [[unit:ir]]  or  [[unit:ir|Iran]]        link to another country
       [[lesson:mx-10]] or [[lesson:mx-10|Briefing #]]   link to a briefing;
            "#" becomes its place in the reading order ("briefing 5"),
            so references stay right whatever the id number
       blank line = new paragraph;  "- " at line start = bullet            */
  P.slug = function (s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  };
  P.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var REF = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  /* A [[lesson:<id>]] reference: the briefing it points to, its place in
     its unit's reading order (from the manifest, so no unit file needs to
     be loaded) and the label with "#" filled in. pos is 0 if the unit or
     briefing doesn't exist. */
  P.lessonRef = function (lessonId, label) {
    var s = P.subject(P.unitIdOf(lessonId)), n = P.lessonNum(lessonId);
    var pos = s && n >= 1 && n <= (s.lessons || 0) ? P.readingOrder(s.lessons).indexOf(n) + 1 : 0;
    return { id: lessonId, pos: pos, label: String(label || "briefing #").replace(/#/g, pos || "?") };
  };
  /* Every [[…]] in a string, split into glossary, unit and lesson references. */
  P.scanRefs = function (md) {
    var out = { terms: [], units: [], lessons: [] };
    String(md || "").replace(REF, function (_, target) {
      target = target.trim();
      if (target.indexOf("unit:") === 0) out.units.push(target.slice(5).trim());
      else if (target.indexOf("lesson:") === 0) out.lessons.push(target.slice(7).trim());
      else out.terms.push(P.slug(target));
      return "";
    });
    return out;
  };
  /* Inline markup → HTML. opts.term(id, label), opts.unit(id, label) and
     opts.lesson(id, label) return the HTML for a reference; defaults
     render plain spans. */
  P.inline = function (text, opts) {
    opts = opts || {};
    var html = P.esc(text);
    html = html.replace(REF, function (_, target, label) {
      target = target.trim();
      if (target.indexOf("unit:") === 0) {
        var uid = target.slice(5).trim();
        var c = P._byId[uid];
        var ulabel = label ? label.trim() : (c ? P.esc(c.name) : uid);
        return opts.unit ? opts.unit(uid, ulabel) : '<span class="unit-ref">' + ulabel + "</span>";
      }
      if (target.indexOf("lesson:") === 0) {
        var ref = P.lessonRef(target.slice(7).trim(), label && label.trim());
        return opts.lesson ? opts.lesson(ref.id, ref.label) : '<span class="lesson-ref">' + ref.label + "</span>";
      }
      var tid = P.slug(target);
      var tlabel = label ? label.trim() : target;
      return opts.term ? opts.term(tid, tlabel) : '<span class="term">' + tlabel + "</span>";
    });
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, function (_, label, url) {
      return '<a href="' + url + '" target="_blank" rel="noopener">' + label + "</a>";
    });
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
    return html;
  };
  /* Block markup → HTML paragraphs and bullet lists. */
  P.md = function (md, opts) {
    var blocks = String(md || "").replace(/\r/g, "").split(/\n\s*\n/);
    return blocks.map(function (b) {
      var lines = b.split("\n").filter(function (l) { return l.trim(); });
      if (!lines.length) return "";
      if (lines.every(function (l) { return /^\s*-\s+/.test(l); })) {
        return "<ul>" + lines.map(function (l) {
          return "<li>" + P.inline(l.replace(/^\s*-\s+/, ""), opts) + "</li>";
        }).join("") + "</ul>";
      }
      return "<p>" + P.inline(lines.join(" "), opts) + "</p>";
    }).join("");
  };
  /* Readable words in a markup string (references count as their label). */
  P.words = function (md) {
    var t = String(md || "")
      .replace(REF, function (_, target, label) {
        if (target.indexOf("lesson:") === 0) return P.lessonRef(target.slice(7).trim(), label).label;
        return label || target.replace(/^unit:/, "");
      })
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*#>_`]/g, " ");
    var m = t.match(/[A-Za-z0-9À-ɏ][A-Za-z0-9À-ɏ'’.,%$€£:\/-]*/g);
    return m ? m.length : 0;
  };

  /* ---------- lesson text ---------- */
  /* Every piece of reading text in a lesson, as [label, markup] pairs, so
     the validator can size-check each section and count the whole. */
  P.lessonTexts = function (lesson) {
    var out = [];
    (lesson.blocks || []).forEach(function (b, i) {
      var where = "block " + (i + 1) + " (" + b.type + ")";
      if (b.type === "section" || b.type === "callout") out.push([where, b.md, true]);
      else if (b.type === "facts") (b.rows || []).forEach(function (r) { out.push([where, r[0] + " " + r[1], false]); });
      else if (b.type === "timeline") (b.items || []).forEach(function (r) { out.push([where, r[0] + " " + r[1], false]); });
      else if (b.type === "quote") out.push([where, b.text + " " + (b.who || ""), false]);
      else if (b.type === "compare") {
        out.push([where + " left", b.left.head + " " + b.left.md, true]);
        out.push([where + " right", b.right.head + " " + b.right.md, true]);
      } else if (b.type === "people") {
        (b.items || []).forEach(function (p) { out.push([where + " " + p.name, p.name + " " + p.role + " " + p.md, true]); });
      }
      if (b.head) out.push([where + " head", b.head, false]);
    });
    (lesson.takeaways || []).forEach(function (t) { out.push(["takeaways", t, false]); });
    return out;
  };
  P.lessonWords = function (lesson) {
    return P.lessonTexts(lesson).reduce(function (s, t) { return s + P.words(t[1]); }, 0);
  };
  P.readMins = function (lesson) {
    var pics = (lesson.blocks || []).filter(function (b) { return /^(image|map|diagram)$/.test(b.type); }).length;
    return Math.max(1, Math.round(P.lessonWords(lesson) / P.WORDS_PER_MIN + pics * 0.25));
  };
  /* The picture a card should show for a lesson: its first image-like block. */
  P.heroOf = function (lesson) {
    var bs = (lesson && lesson.blocks) || [];
    for (var i = 0; i < bs.length; i++) if (/^(image|map|diagram)$/.test(bs[i].type)) return bs[i];
    return null;
  };

  /* ---------- dates ----------
     Days are local calendar dates written "YYYY-MM-DD". Day numbers are
     computed in UTC from those parts, so no timezone or DST shift can
     make two calendar days look adjacent or apart when they aren't. */
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  P.dayKey = function (d) {
    d = d || new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  };
  P.dayNum = function (key) {
    var p = String(key).split("-");
    return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / 86400000);
  };
  P.fromDayNum = function (n) {
    var d = new Date(n * 86400000);
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate());
  };
  P.addDays = function (key, n) { return P.fromDayNum(P.dayNum(key) + n); };
  P.daysBetween = function (a, b) { return P.dayNum(b) - P.dayNum(a); };
  /* Academy's own store writes days as "Y-M-D" with no zero padding. */
  P.academyDayKey = function (key) {
    if (!key) return null;
    var p = String(key).split("-");
    return (+p[0]) + "-" + (+p[1]) + "-" + (+p[2]);
  };
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  P.formatDate = function (key) {
    if (!key) return "";
    var p = String(key).split("-");
    return (+p[2]) + " " + MONTHS[+p[1] - 1] + " " + p[0];
  };
  P.isStale = function (asOf, today) { return P.daysBetween(asOf, today) > P.STALE_DAYS; };

  /* The streak is DERIVED from the set of study days, never stored as a
     count (CodeLab's rule): a run that ended stays ended, and a merge of
     two devices' day sets can never invent a day. A run that ended
     yesterday is still alive — today just hasn't been read yet. */
  P.streak = function (days, today) {
    var set = {};
    (days || []).forEach(function (d) { set[d] = 1; });
    var cursor = set[today] ? today : P.addDays(today, -1);
    var n = 0;
    while (set[cursor]) { n++; cursor = P.addDays(cursor, -1); }
    return n;
  };

  /* ---------- progress (pure; the profile is a parameter) ---------- */
  P.freshProfile = function () {
    return {
      read: {},        // lessonId -> day it was (last) finished
      days: [],        // study days, sorted, unique
      unitsDone: {},   // unitId -> day all its briefings were first read (sticky, for XP)
      goal: 1,         // briefings per day
      last: null,      // lessonId most recently opened
      checks: {},      // lessonId -> chosen answer of the optional quick check
      seen: {},        // updateId -> 1 once the dispatch has been opened
      review: {}       // review card id -> { box, due, last } (see the review deck below)
    };
  };
  P.normalizeProfile = function (p) {
    var f = P.freshProfile();
    p = p && typeof p === "object" ? p : {};
    Object.keys(f).forEach(function (k) { if (p[k] == null) p[k] = f[k]; });
    if (!Array.isArray(p.days)) p.days = [];
    if (typeof p.review !== "object" || Array.isArray(p.review)) p.review = {};
    if ([1, 2, 3].indexOf(p.goal) === -1) p.goal = 1;
    return p;
  };
  P.readCount = function (profile, unitId) {
    return Object.keys(profile.read || {}).filter(function (id) {
      return !unitId || P.unitIdOf(id) === unitId;
    }).length;
  };
  P.xp = function (profile) {
    return P.readCount(profile) * P.XP_PER_BRIEFING +
      Object.keys(profile.unitsDone || {}).length * P.XP_PER_COUNTRY;
  };
  P.todayCount = function (profile, today) {
    var r = profile.read || {};
    return Object.keys(r).filter(function (id) { return r[id] === today; }).length;
  };
  P.isUpdatedSince = function (lesson, readDay) {
    return !!(readDay && lesson && lesson.asOf && lesson.asOf > readDay);
  };
  /* Finish a briefing. Returns what changed so the UI can celebrate the
     right thing. Re-finishing a briefing that was updated since it was
     read moves its date forward (clearing the badge) but pays no XP. */
  P.markRead = function (profile, unit, lessonId, today) {
    var was = profile.read[lessonId];
    var res = { first: !was, xpBefore: P.xp(profile), unitDone: false };
    profile.read[lessonId] = today;
    if (profile.days.indexOf(today) === -1) { profile.days.push(today); profile.days.sort(); }
    if (unit && !profile.unitsDone[unit.id]) {
      var all = (unit.lessons || []).every(function (l) { return !!profile.read[l.id]; });
      if (all) { profile.unitsDone[unit.id] = today; res.unitDone = true; }
    }
    res.xpGained = P.xp(profile) - res.xpBefore;
    return res;
  };
  /* The next briefing to read. Stay in the country you were reading, then
     walk the path in order. Uses the manifest's lesson counts, so it
     needs no unit file loaded; ids are "<unit>-<n>". */
  P.nextLessonId = function (profile, countries) {
    countries = (countries || P.countries).filter(function (c) { return (c.lessons || 0) > 0; });
    function firstUnread(c) {
      var order = P.readingOrder(c.lessons);
      for (var i = 0; i < order.length; i++) if (!profile.read[c.id + "-" + order[i]]) return c.id + "-" + order[i];
      return null;
    }
    if (profile.last) {
      var cur = P._byId[P.unitIdOf(profile.last)];
      var inCur = cur && (cur.lessons || 0) > 0 ? firstUnread(cur) : null;
      if (inCur) return inCur;
    }
    for (var i = 0; i < countries.length; i++) {
      var id = firstUnread(countries[i]);
      if (id) return id;
    }
    return null;
  };
  /* The slice of this profile Academy's picker reads (track "politics"):
     the same shape Academy's own tracks use, so its profile totals and the
     card's "N done · XP" line just work. */
  P.academyMirror = function (profile, today) {
    var completed = {};
    Object.keys(profile.read || {}).forEach(function (id) { completed[id] = true; });
    var days = (profile.days || []).slice().sort();
    return {
      completed: completed,
      missed: {},
      xp: P.xp(profile),
      streak: P.streak(days, today),
      lastDay: P.academyDayKey(days[days.length - 1] || null)
    };
  };
  P.unseenUpdates = function (profile, unitId) {
    return P.updates.filter(function (u) {
      return !(profile.seen || {})[u.id] && (!unitId || u.unit === unitId);
    }).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  };


  /* ---------- glossary terms, found automatically ----------
     Writers mark terms with [[term]], but a reader meets many more
     glossary words than get marked. autoTerms() turns the FIRST plain
     mention of each glossary term in a briefing into a chip too, so it
     can be tapped. `used` is shared across a briefing's blocks (one chip
     per term per briefing, and none for terms the writer already
     linked). Acronyms (AUKUS, SAFE) match only in capitals; other terms
     match any case, with an optional plural "s". Terms whose definition
     describes one country's institution are added only in that country's
     briefings and its relationships (an "electoral college" in Brazil is
     not the US one); a few generic words are never added automatically. */
  P.AUTO_TERM_SKIP = { veto: 1 };
  P.AUTO_TERM_ONLY = {
    congress: ["us"], "electoral-college": ["us"], filibuster: ["us"], "midterm-elections": ["us"], "swing-state": ["us"],
    "generic-ballot": ["us"], "federal-reserve": ["us"], "war-powers-resolution": ["us"], "voting-rights-act": ["us"],
    "five-year-plan": ["cn"], "central-military-commission": ["cn"], firewall: ["de"], "debt-brake": ["de"],
    "article-49-3": ["fr"], gilts: ["gb"]
  };
  function autoAllowed(id, unitId) {
    var only = P.AUTO_TERM_ONLY[id];
    if (!only) return true;
    var parts = String(unitId || "").split("_");
    return only.some(function (c) { return parts.indexOf(c) > -1; });
  }
  var autoList = null, autoCount = -1;
  function autoTermList() {
    var ids = Object.keys(P.glossary);
    if (autoList && autoCount === ids.length) return autoList;
    autoCount = ids.length;
    autoList = ids.filter(function (id) { return !P.AUTO_TERM_SKIP[id]; }).map(function (id) {
      var term = P.glossary[id].term;
      var acronym = term === term.toUpperCase() && /[A-Z]/.test(term);
      var body = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
      return { id: id, len: term.length, re: new RegExp("(^|[^A-Za-z0-9À-ɏ-])(" + body + (acronym ? "" : "s?") + ")(?![A-Za-z0-9À-ɏ-])", acronym ? "" : "i") };
    }).sort(function (a, b) { return b.len - a.len; });
    return autoList;
  }
  /* Markup segments that must not be touched: references and links. */
  var PROTECTED = /\[\[[^\]]*\]\]|\[[^\]]*\]\([^)]*\)/g;
  P.autoTerms = function (md, used, unitId) {
    used = used || {};
    var s = String(md || "");
    P.scanRefs(s).terms.forEach(function (id) { used[id] = 1; });
    autoTermList().forEach(function (t) {
      if (used[t.id] || !autoAllowed(t.id, unitId)) return;
      var out = "", last = 0, done = false, m;
      PROTECTED.lastIndex = 0;
      function tryText(text) {
        if (done) return text;
        var hit = t.re.exec(text);
        if (!hit) return text;
        done = true;
        var at = hit.index + hit[1].length;
        return text.slice(0, at) + "[[" + t.id + "|" + hit[2] + "]]" + text.slice(at + hit[2].length);
      }
      while ((m = PROTECTED.exec(s))) {
        out += tryText(s.slice(last, m.index)) + m[0];
        last = m.index + m[0].length;
      }
      out += tryText(s.slice(last));
      if (done) { used[t.id] = 1; s = out; }
    });
    return s;
  };

  /* ---------- "Put it in order" ----------
     A briefing's timeline becomes a sorting game. dateKey() reads the
     start of a timeline date ("Aug 2025", "17 Aug 1945", "1942–45",
     "c. 1900", "1960s", "H1 2026"); dates it can't place ("7th–13th c.")
     return null. orderItems() keeps only entries that are unambiguously
     later than the one before (two entries in the same year both need
     months), then picks up to five spread across the timeline. Fewer
     than three usable entries means no game. */
  var MONTH_RE = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?/i;
  var MONTH_IX = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
  P.dateKey = function (s) {
    s = String(s || "");
    var y = s.match(/\d{4}/);
    if (!y) return null;
    var head = s.slice(0, y.index), mm = head.match(MONTH_RE) || s.match(MONTH_RE);
    var month = mm ? MONTH_IX[mm[1].toLowerCase()] : 0;
    var d = month ? head.match(/\b(\d{1,2})\b/) : null;
    return { y: +y[0], m: month, d: d ? +d[1] : 0 };
  };
  function after(a, b) {   // is b unambiguously later than a?
    if (b.y !== a.y) return b.y > a.y;
    if (!a.m || !b.m) return false;
    if (b.m !== a.m) return b.m > a.m;
    return !!(a.d && b.d && b.d > a.d);
  }
  P.ORDER_MIN = 3;
  P.ORDER_MAX = 5;
  P.orderItems = function (items) {
    var kept = [], prev = null;
    (items || []).forEach(function (r, i) {
      var k = P.dateKey(r[0]);
      if (!k || (prev && !after(prev, k))) return;
      kept.push({ i: i, when: r[0], what: r[1] });
      prev = k;
    });
    if (kept.length < P.ORDER_MIN) return null;
    if (kept.length <= P.ORDER_MAX) return kept;
    var out = [];
    for (var j = 0; j < P.ORDER_MAX; j++) out.push(kept[Math.round(j * (kept.length - 1) / (P.ORDER_MAX - 1))]);
    return out;
  };
  P.timelineOf = function (lesson) {
    var bs = (lesson && lesson.blocks) || [];
    for (var i = 0; i < bs.length; i++) if (bs[i].type === "timeline") return bs[i];
    return null;
  };

  /* ---------- the review deck ----------
     Every briefing you finish adds up to two cards: its quick-check
     question ("<lessonId>:q") and its "put it in order" timeline
     ("<lessonId>:t"). A card first comes due the day after the briefing
     was read; each right answer pushes it further out (1, 3, 7, 16, 35,
     90 days), and a wrong one brings it back tomorrow. Reviews never
     change XP or the streak, which stay about reading. */
  P.REVIEW_GAPS = [1, 3, 7, 16, 35, 90];
  P.REVIEW_SESSION = 10;
  P.cardsOf = function (lesson) {
    var out = [];
    if (lesson.check && lesson.check.choices && lesson.check.choices.length) out.push(lesson.id + ":q");
    var tl = P.timelineOf(lesson);
    if (tl && P.orderItems(tl.items)) out.push(lesson.id + ":t");
    return out;
  };
  P.cardLesson = function (cardId) { return String(cardId).split(":")[0]; };
  P.cardState = function (profile, cardId) {
    var s = (profile.review || {})[cardId];
    if (s) return s;
    var readOn = (profile.read || {})[P.cardLesson(cardId)];
    return readOn ? { box: 0, due: P.addDays(readOn, 1), last: null } : null;
  };
  /* Due cards among `cardIds` (cards the loaded units can actually
     build), oldest due first. */
  P.dueCards = function (profile, cardIds, today) {
    return (cardIds || []).map(function (id) { return [id, P.cardState(profile, id)]; })
      .filter(function (x) { return x[1] && x[1].due <= today; })
      .sort(function (a, b) { return a[1].due < b[1].due ? -1 : a[1].due > b[1].due ? 1 : a[0] < b[0] ? -1 : 1; })
      .map(function (x) { return x[0]; });
  };
  P.gradeCard = function (profile, cardId, ok, today) {
    var s = P.cardState(profile, cardId) || { box: 0 };
    var box = ok ? Math.min(s.box + 1, P.REVIEW_GAPS.length) : 0;
    var next = { box: box, due: P.addDays(today, ok ? P.REVIEW_GAPS[box - 1] : 1), last: today };
    profile.review = profile.review || {};
    profile.review[cardId] = next;
    return next;
  };

  if (typeof module !== "undefined" && module.exports) module.exports = P;
})(typeof window !== "undefined" ? window : this);
