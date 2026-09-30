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
      seen: {}         // updateId -> 1 once the dispatch has been opened
    };
  };
  P.normalizeProfile = function (p) {
    var f = P.freshProfile();
    p = p && typeof p === "object" ? p : {};
    Object.keys(f).forEach(function (k) { if (p[k] == null) p[k] = f[k]; });
    if (!Array.isArray(p.days)) p.days = [];
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

  if (typeof module !== "undefined" && module.exports) module.exports = P;
})(typeof window !== "undefined" ? window : this);
