/* ============================================================
   Accounting Lab — registry, answer checking and progress rules
   ------------------------------------------------------------
   Loaded FIRST. accounts.js declares the chart of accounts every
   exercise draws from, and each units/<id>.js registers one unit
   (its lessons and exercises) with addUnit().

   Everything here is DOM-free and takes the profile as a
   parameter, so tools/test-core.js and tools/validate.js run it in
   plain Node. app.js draws; this file decides.
   ============================================================ */
(function (root) {
  "use strict";
  var L = root.LEDGER = root.LEDGER || {};
  L.units = L.units || [];
  L._unitById = L._unitById || {};
  L.accounts = L.accounts || [];
  L._acctById = L._acctById || {};

  L.XP_PER_LESSON = 10;
  L.XP_PER_UNIT = 20;
  L.REVEAL_AFTER = 2;      // wrong tries before "Show answer" appears
  L.CENT = 0.005;          // money compares to the cent

  /* Account types, in the order a chart of accounts lists them.
     `normal` is the side that increases the account. */
  L.TYPES = [
    { id: "asset", label: "Asset", normal: "dr" },
    { id: "contra-asset", label: "Contra-asset", normal: "cr" },
    { id: "liability", label: "Liability", normal: "cr" },
    { id: "equity", label: "Equity", normal: "cr" },
    { id: "contra-equity", label: "Contra-equity", normal: "dr" },
    { id: "revenue", label: "Revenue", normal: "cr" },
    { id: "contra-revenue", label: "Contra-revenue", normal: "dr" },
    { id: "expense", label: "Expense", normal: "dr" }
  ];
  L.type = function (id) {
    for (var i = 0; i < L.TYPES.length; i++) if (L.TYPES[i].id === id) return L.TYPES[i];
    return null;
  };

  /* ---------- registry ---------- */
  L.defineAccount = function (a) {
    if (L._acctById[a.id]) return;
    L.accounts.push(a);
    L._acctById[a.id] = a;
  };
  L.account = function (id) { return L._acctById[id] || null; };
  L.acctName = function (id) { var a = L._acctById[id]; return a ? a.name : id; };
  L.normalOf = function (id) {
    var a = L._acctById[id], t = a && L.type(a.type);
    return t ? t.normal : null;
  };
  L.addUnit = function (u) {
    if (L._unitById[u.id]) return;
    L.units.push(u);
    L._unitById[u.id] = u;
  };
  L.unit = function (id) { return L._unitById[id] || null; };
  L.unitIdOf = function (lessonId) { return String(lessonId || "").split("-")[0]; };
  L.lesson = function (lessonId) {
    var u = L.unit(L.unitIdOf(lessonId));
    var ls = (u && u.lessons) || [];
    for (var i = 0; i < ls.length; i++) if (ls[i].id === lessonId) return ls[i];
    return null;
  };
  L.allLessons = function () {
    var out = [];
    L.units.forEach(function (u) { (u.lessons || []).forEach(function (l) { out.push(l); }); });
    return out;
  };

  /* ---------- money ---------- */
  L.round2 = function (n) { return Math.round((+n || 0) * 100) / 100; };
  /* "$1,234.50" → 1234.5, "(500)" → -500, "12%" → 12. Blank or junk → null. */
  L.parseAmount = function (s) {
    if (typeof s === "number") return isFinite(s) ? s : null;
    var t = String(s == null ? "" : s).trim();
    if (!t) return null;
    var neg = /^\(.*\)$/.test(t) || /^-/.test(t.replace(/^\$/, ""));
    t = t.replace(/[()$,%\s]/g, "").replace(/^-/, "");
    if (!/^\d*\.?\d+$|^\d+\.$/.test(t)) return null;
    var n = parseFloat(t);
    return isFinite(n) ? (neg ? -n : n) : null;
  };
  L.money = function (n) {
    var v = L.round2(n), neg = v < 0;
    var s = Math.abs(v).toFixed(2).replace(/\.00$/, "");
    var parts = s.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (neg ? "-$" : "$") + parts.join(".");
  };

  /* ---------- journal entries ----------
     A line is { acct, dr } or { acct, cr }. An entry is judged by its
     NET effect on each account, so splitting one debit across two lines
     or listing lines in another order is still right. */
  L.netByAccount = function (lines) {
    var net = {};
    (lines || []).forEach(function (ln) {
      if (!ln || !ln.acct) return;
      var d = +ln.dr || 0, c = +ln.cr || 0;
      net[ln.acct] = L.round2((net[ln.acct] || 0) + d - c);
    });
    Object.keys(net).forEach(function (k) { if (Math.abs(net[k]) < L.CENT) delete net[k]; });
    return net;
  };
  L.totals = function (lines) {
    var dr = 0, cr = 0;
    (lines || []).forEach(function (ln) {
      if (!ln || !ln.acct) return;
      dr += +ln.dr || 0; cr += +ln.cr || 0;
    });
    return { dr: L.round2(dr), cr: L.round2(cr) };
  };
  /* Check a learner's entry against the answer key. Returns
     { ok, code, msg } where code is one of:
     empty, onesided, unbalanced, reversed, accounts, amounts, ok. */
  L.checkEntry = function (given, answer) {
    var lines = (given || []).filter(function (ln) { return ln && ln.acct && ((+ln.dr || 0) !== 0 || (+ln.cr || 0) !== 0); });
    if (!lines.length) return { ok: false, code: "empty", msg: "Add the lines of the entry — an account and an amount on each." };
    var bad = lines.filter(function (ln) { return (+ln.dr || 0) < 0 || (+ln.cr || 0) < 0 || ((+ln.dr || 0) && (+ln.cr || 0)); });
    if (bad.length) return { ok: false, code: "onesided", msg: "Each line takes a positive amount on one side only — debit or credit, not both." };
    var t = L.totals(lines);
    if (Math.abs(t.dr - t.cr) >= L.CENT) {
      return { ok: false, code: "unbalanced", msg: "Debits (" + L.money(t.dr) + ") don't equal credits (" + L.money(t.cr) + "). Every entry must balance." };
    }
    var g = L.netByAccount(lines), a = L.netByAccount(answer);
    var gk = Object.keys(g).sort(), ak = Object.keys(a).sort();
    var sameAccts = gk.join("|") === ak.join("|");
    if (sameAccts) {
      var exact = ak.every(function (k) { return Math.abs(g[k] - a[k]) < L.CENT; });
      if (exact) return { ok: true, code: "ok", msg: "Balanced and correct." };
      var flipped = ak.every(function (k) { return Math.abs(g[k] + a[k]) < L.CENT; });
      if (flipped) return { ok: false, code: "reversed", msg: "Right accounts and amounts, but debits and credits are reversed." };
      var sidesRight = ak.every(function (k) { return (g[k] > 0) === (a[k] > 0); });
      return { ok: false, code: "amounts", msg: sidesRight
        ? "Right accounts on the right sides — check the amounts."
        : "Right accounts — check which side each one goes on, and the amounts." };
    }
    var hit = ak.filter(function (k) { return k in g; }).length;
    var extra = gk.filter(function (k) { return !(k in a); }).length;
    var msg = "Balanced, but the accounts aren't right: " + hit + " of " + ak.length + " needed account" + (ak.length === 1 ? "" : "s") + " used";
    if (extra) msg += ", plus " + extra + " that " + (extra === 1 ? "doesn't" : "don't") + " belong";
    return { ok: false, code: "accounts", msg: msg + "." };
  };

  /* ---------- the other exercise types ---------- */
  L.checkNumber = function (given, ex) {
    var n = L.parseAmount(given);
    if (n === null) return { ok: false, code: "empty", msg: "Enter a number." };
    var tol = ex.tol != null ? ex.tol : 0.01;
    if (Math.abs(n - ex.answer) <= tol + 1e-9) return { ok: true, code: "ok", msg: "Correct." };
    if (Math.abs(n + ex.answer) <= tol + 1e-9 && ex.answer !== 0) return { ok: false, code: "sign", msg: "Right size, wrong sign." };
    return { ok: false, code: "wrong", msg: "Not quite — rework it." };
  };
  L.checkChoice = function (given, ex) {
    if (given == null || given === "") return { ok: false, code: "empty", msg: "Pick an answer." };
    return +given === ex.answer
      ? { ok: true, code: "ok", msg: "Correct." }
      : { ok: false, code: "wrong", msg: "Not that one." };
  };
  /* given: array of chosen category ids, one per item. */
  L.checkClassify = function (given, ex) {
    given = given || [];
    var items = ex.items || [];
    if (given.length < items.length || given.some(function (g) { return !g; })) {
      return { ok: false, code: "empty", msg: "Sort every item." };
    }
    var right = items.filter(function (it, i) { return given[i] === it[1]; }).length;
    if (right === items.length) return { ok: true, code: "ok", msg: "All sorted correctly." };
    return { ok: false, code: "wrong", msg: right + " of " + items.length + " right." };
  };
  L.check = function (ex, given) {
    if (ex.type === "entry") return L.checkEntry(given, ex.lines);
    if (ex.type === "number") return L.checkNumber(given, ex);
    if (ex.type === "choice") return L.checkChoice(given, ex);
    if (ex.type === "classify") return L.checkClassify(given, ex);
    return { ok: false, code: "unknown", msg: "Unknown exercise type." };
  };

  /* ---------- markup ----------
     A small grammar so unit files stay readable:
       **bold**  *italic*  `code`  [label](https://…)
       blank line = new paragraph;  "- " = bullet;  "1. " = numbered
       (a list, table or callout may start right under its lead-in line)
       "| a | b |" rows = a table (first row is the header; a
       "|---|" row under it is optional and skipped)
       "> " lines = a callout (each line on its own line)          */
  L.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  L.inline = function (text) {
    var html = L.esc(text);
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, function (_, label, url) {
      return '<a href="' + url + '" target="_blank" rel="noopener">' + label + "</a>";
    });
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/(^|[^*\w])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
    return html;
  };
  function cells(line) {
    return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(function (c) { return c.trim(); });
  }
  var NUMERIC = /^[+\u2212($-]*\$?[\d,]+(\.\d+)?%?\)?$/;
  /* Each line has a kind; consecutive lines of the same kind form one
     block, so a list or table may follow its lead-in sentence directly. */
  function kindOf(l) {
    if (/^\s*\|/.test(l)) return "table";
    if (/^\s*>\s?/.test(l)) return "callout";
    if (/^\s*-\s+/.test(l)) return "ul";
    if (/^\s*\d+\.\s+/.test(l)) return "ol";
    return "p";
  }
  function renderRun(kind, lines) {
    if (kind === "table") {
      var rows = lines.filter(function (l) { return !/^\s*\|[\s:|-]+\|\s*$/.test(l); }).map(cells);
      var head = rows.shift();
      return '<div class="tbl-wrap"><table><thead><tr>' + head.map(function (c) { return "<th>" + L.inline(c) + "</th>"; }).join("") +
        "</tr></thead><tbody>" + rows.map(function (r) {
          return "<tr>" + r.map(function (c) {
            var plain = c.replace(/\*/g, "");
            return "<td" + (NUMERIC.test(plain) ? ' class="num"' : "") + ">" + L.inline(c) + "</td>";
          }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
    }
    if (kind === "callout") {
      return '<div class="callout">' + lines.map(function (l) { return L.inline(l.replace(/^\s*>\s?/, "")); }).join("<br>") + "</div>";
    }
    if (kind === "ul") return "<ul>" + lines.map(function (l) { return "<li>" + L.inline(l.replace(/^\s*-\s+/, "")) + "</li>"; }).join("") + "</ul>";
    if (kind === "ol") return "<ol>" + lines.map(function (l) { return "<li>" + L.inline(l.replace(/^\s*\d+\.\s+/, "")) + "</li>"; }).join("") + "</ol>";
    return "<p>" + L.inline(lines.join(" ")) + "</p>";
  }
  L.md = function (md) {
    var out = [];
    String(md || "").replace(/\r/g, "").split(/\n\s*\n/).forEach(function (b) {
      var run = null;
      b.split("\n").forEach(function (l) {
        if (!l.trim()) return;
        var k = kindOf(l);
        if (run && run.kind === k) run.lines.push(l);
        else { if (run) out.push(renderRun(run.kind, run.lines)); run = { kind: k, lines: [l] }; }
      });
      if (run) out.push(renderRun(run.kind, run.lines));
    });
    return out.join("");
  };
  L.words = function (md) {
    var m = String(md || "").replace(/[|*`>#-]/g, " ").match(/[A-Za-z0-9$][A-Za-z0-9'’.,%$:\/-]*/g);
    return m ? m.length : 0;
  };

  /* ---------- dates (same rules as Political Academy) ---------- */
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  L.dayKey = function (d) {
    d = d || new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  };
  L.dayNum = function (key) {
    var p = String(key).split("-");
    return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / 86400000);
  };
  L.addDays = function (key, n) {
    var d = new Date((L.dayNum(key) + n) * 86400000);
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate());
  };
  L.academyDayKey = function (key) {
    if (!key) return null;
    var p = String(key).split("-");
    return (+p[0]) + "-" + (+p[1]) + "-" + (+p[2]);
  };
  /* Derived from the set of study days, never stored as a count. A run
     that ended yesterday is still alive — today just hasn't happened yet. */
  L.streak = function (days, today) {
    var set = {};
    (days || []).forEach(function (d) { set[d] = 1; });
    var cursor = set[today] ? today : L.addDays(today, -1);
    var n = 0;
    while (set[cursor]) { n++; cursor = L.addDays(cursor, -1); }
    return n;
  };

  /* ---------- progress (pure; the profile is a parameter) ---------- */
  L.freshProfile = function () {
    return {
      done: {},       // lessonId -> day it was first finished
      days: [],       // study days, sorted, unique
      unitsDone: {},  // unitId -> day every lesson in it was finished
      clean: {},      // lessonId -> true if finished with no wrong answers
      last: null      // lessonId most recently opened
    };
  };
  L.normalizeProfile = function (p) {
    var f = L.freshProfile();
    p = p && typeof p === "object" ? p : {};
    Object.keys(f).forEach(function (k) { if (p[k] == null) p[k] = f[k]; });
    if (!Array.isArray(p.days)) p.days = [];
    return p;
  };
  L.doneCount = function (profile, unitId) {
    return Object.keys(profile.done || {}).filter(function (id) {
      return !unitId || L.unitIdOf(id) === unitId;
    }).length;
  };
  L.xp = function (profile) {
    return L.doneCount(profile) * L.XP_PER_LESSON + Object.keys(profile.unitsDone || {}).length * L.XP_PER_UNIT;
  };
  /* Finish a lesson. XP is paid once per lesson and once per unit;
     redoing a lesson for practice records the day but pays nothing. */
  L.finishLesson = function (profile, lessonId, today, clean) {
    var res = { first: !profile.done[lessonId], xpBefore: L.xp(profile), unitDone: false };
    if (res.first) profile.done[lessonId] = today;
    if (clean) profile.clean[lessonId] = true;
    if (profile.days.indexOf(today) === -1) { profile.days.push(today); profile.days.sort(); }
    var u = L.unit(L.unitIdOf(lessonId));
    if (u && !profile.unitsDone[u.id] && u.lessons.every(function (l) { return !!profile.done[l.id]; })) {
      profile.unitsDone[u.id] = today;
      res.unitDone = true;
    }
    res.xpGained = L.xp(profile) - res.xpBefore;
    return res;
  };
  /* Next lesson: the first unfinished one after the last you opened,
     then the first unfinished one on the whole path. */
  L.nextLessonId = function (profile) {
    var all = L.allLessons(), i;
    var start = 0;
    if (profile.last) for (i = 0; i < all.length; i++) if (all[i].id === profile.last) { start = i; break; }
    for (i = start; i < all.length; i++) if (!profile.done[all[i].id]) return all[i].id;
    for (i = 0; i < start; i++) if (!profile.done[all[i].id]) return all[i].id;
    return null;
  };
  L.lessonAfter = function (lessonId) {
    var all = L.allLessons();
    for (var i = 0; i < all.length - 1; i++) if (all[i].id === lessonId) return all[i + 1].id;
    return null;
  };
  /* The slice Academy's picker reads (track "accounting"): the same shape
     Academy's own tracks use, so its totals and the card just work. */
  L.academyMirror = function (profile, today) {
    var completed = {};
    Object.keys(profile.done || {}).forEach(function (id) { completed[id] = true; });
    var days = (profile.days || []).slice().sort();
    return {
      completed: completed,
      missed: {},
      xp: L.xp(profile),
      streak: L.streak(days, today),
      lastDay: L.academyDayKey(days[days.length - 1] || null)
    };
  };

  if (typeof module !== "undefined" && module.exports) module.exports = L;
})(typeof window !== "undefined" ? window : this);
