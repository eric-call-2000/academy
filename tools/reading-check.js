/* ============================================================
   Lesson reading check
   ------------------------------------------------------------
   Every lesson in a quiz track can carry a short reading shown before its
   questions: lesson.reading.blocks, in the same block shape Political Academy
   uses ({ type: "section", head, md }). This checks them, and the word count
   keeps each one about a two-minute read (it is a build-time guard; nothing
   about reading time is shown to learners).

     node tools/reading-check.js              report the ai track
     node tools/reading-check.js ai marketing report those tracks
     node tools/reading-check.js --require    exit 1 if any lesson has no reading,
                                              or one is outside the word range
   ============================================================ */
var fs = require("fs"), path = require("path"), vm = require("vm");
var ROOT = path.join(__dirname, "..");
var MIN = 330, MAX = 470;

var args = process.argv.slice(2);
var require_ = args.indexOf("--require") !== -1;
var only = args.filter(function (a) { return a[0] !== "-"; });
if (!only.length) only = ["ai"];

var ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "tracks.js"), "utf8"), ctx);
var A = ctx.window.ACADEMY;
only.forEach(function (id) {
  var t = A._byId[id];
  if (!t) { console.error("unknown track: " + id); process.exit(2); }
  for (var n = 1; n <= t.count; n++) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, t.prefix + "-unit" + n + ".js"), "utf8"), ctx);
  }
});

function words(md) {
  var m = String(md || "").replace(/\*\*|[*#`]/g, " ").replace(/^\s*-\s+/gm, " ").match(/[^\s]+/g);
  return m ? m.length : 0;
}

var bad = 0;
only.forEach(function (id) {
  var t = A._byId[id], have = 0, total = 0;
  t.units.forEach(function (u, ui) {
    u.lessons.forEach(function (l) {
      total++;
      var where = id + " unit " + (ui + 1) + " " + l.id + " (" + l.title + ")";
      if (!l.reading) { if (require_) { console.log("MISSING  " + where); bad++; } return; }
      have++;
      var blocks = l.reading.blocks || [], w = 0, problem = null;
      if (!blocks.length) problem = "no blocks";
      blocks.forEach(function (b, i) {
        if (b.type !== "section") problem = problem || "block " + (i + 1) + " is not a section";
        else if (!b.head || !b.md) problem = problem || "block " + (i + 1) + " needs head and md";
        else w += words(b.head) + words(b.md);
      });
      if (!problem && (w < MIN || w > MAX)) problem = w + " words (want " + MIN + "-" + MAX + ")";
      if (problem) { console.log("PROBLEM  " + where + ": " + problem); bad++; }
    });
  });
  console.log(id + ": " + have + " of " + total + " lessons have a reading");
});
process.exit(bad && require_ ? 1 : 0);
