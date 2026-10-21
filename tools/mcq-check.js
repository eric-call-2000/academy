/* ============================================================
   Multiple-choice answer-length check
   ------------------------------------------------------------
   AI-written quizzes tend to make the correct choice the longest
   one, so a test-taker can pass by picking the longest answer.
   This loads every quiz track the way the browser does and reports,
   per track:
     longest  how often the correct choice is the single longest.
              With 4 choices, chance is about 25%; far below that is
              a tell too ("never pick the longest").
     clearly  how often it is longest by 15% or more over every
              wrong choice, a gap a reader notices. Keep this near 0.
     shortest how often the correct choice is the single shortest,
              so fixing one tell doesn't create the opposite one.

     node tools/mcq-check.js                 report every track
     node tools/mcq-check.js ai              one track
     node tools/mcq-check.js --list ai       print each "clearly longest" question
     node tools/mcq-check.js --max 40        exit 1 if any track's "longest" is above 40%
   ============================================================ */
var fs = require("fs"), path = require("path"), vm = require("vm");
var ROOT = path.join(__dirname, "..");

var args = process.argv.slice(2);
var list = args.indexOf("--list") !== -1;
var maxIdx = args.indexOf("--max");
var max = maxIdx !== -1 ? Number(args[maxIdx + 1]) : null;
var only = args.filter(function (a, i) { return a[0] !== "-" && (maxIdx === -1 || i !== maxIdx + 1); });

var ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "tracks.js"), "utf8"), ctx);
var A = ctx.window.ACADEMY;

function longest(q) {
  var lens = q.choices.map(function (c) { return c.length; });
  var top = Math.max.apply(null, lens);
  return lens[q.answer] === top && lens.filter(function (n) { return n === top; }).length === 1;
}
function shortest(q) {
  var lens = q.choices.map(function (c) { return c.length; });
  var low = Math.min.apply(null, lens);
  return lens[q.answer] === low && lens.filter(function (n) { return n === low; }).length === 1;
}
function clearly(q) {
  if (!longest(q)) return false;
  var right = q.choices[q.answer].length;
  var next = Math.max.apply(null, q.choices.filter(function (c, i) { return i !== q.answer; }).map(function (c) { return c.length; }));
  return right >= next * 1.15;
}

var worst = 0, all = 0, allFlag = 0, allClear = 0, allShort = 0;
A.tracks.forEach(function (t) {
  if (!t.count || (only.length && only.indexOf(t.id) === -1)) return;
  for (var i = 1; i <= t.count; i++) {
    var f = path.join(ROOT, t.prefix + "-unit" + i + ".js");
    ctx.__file = path.basename(f);
    vm.runInContext(fs.readFileSync(f, "utf8"), ctx);
    var u = t.units[t.units.length - 1];
    if (u) u.__file = ctx.__file;
  }
  var n = 0, hit = 0, clear = 0, short = 0;
  t.units.forEach(function (u) {
    (u.lessons || []).forEach(function (l) {
      (l.questions || []).forEach(function (q, qi) {
        if (q.type !== "mcq") return;
        n++;
        if (longest(q)) hit++;
        if (shortest(q)) short++;
        if (!clearly(q)) return;
        clear++;
        if (list) console.log(u.__file + "  " + l.id + "#" + qi + "  " + q.q);
      });
    });
  });
  if (!n) return;
  all += n; allFlag += hit; allClear += clear; allShort += short;
  var pct = 100 * hit / n;
  worst = Math.max(worst, pct);
  row(t.id, n, hit, clear, short);
});
if (all) row("all", all, allFlag, allClear, allShort);
function row(name, n, hit, clear, short) {
  if (!row.done) { console.log("track          mcq   longest      clearly     shortest"); row.done = true; }
  console.log((name + "            ").slice(0, 13) + ("     " + n).slice(-5) +
    ("      " + hit).slice(-7) + ("     " + (100 * hit / n).toFixed(0) + "%").slice(-6) +
    ("      " + clear).slice(-7) + ("     " + (100 * clear / n).toFixed(0) + "%").slice(-6) +
    ("      " + short).slice(-7) + ("     " + (100 * short / n).toFixed(0) + "%").slice(-6));
}
if (max != null && worst > max) { console.error("Some track is above " + max + "%."); process.exit(1); }
