/* Translation checks — pure Node, about a second.
   Usage:  node tools/validate-i18n.js            checks + coverage table
           node tools/validate-i18n.js --quiet    checks only (validate.js uses this)

   Fails on: an interface string with no translation (or one no longer
   used), a placeholder lost in translation, a layer pointing at a course,
   unit, lesson, step, question or choice the English doesn't have, a code
   span that changed, a `messages` key the tests can't produce, and a
   translation whose English has changed since (`src` mismatch). The stale
   message prints the hash to set once the translation has been re-read.
   See tools/i18n-lib.js for why each one matters. */
const path = require("path");
const L = require(path.join(__dirname, "i18n-lib.js"));

const rootIx = process.argv.indexOf("--root");   // tools/test-i18n.js points this at a fixture copy
const ROOT = rootIx !== -1 ? path.resolve(process.argv[rootIx + 1]) : path.join(__dirname, "..");
const quiet = process.argv.includes("--quiet");
const res = L.check(ROOT);

if (!quiet) {
  console.log("== Translation coverage ==");
  const byLang = {};
  res.report.forEach(r => (byLang[r.lang] = byLang[r.lang] || []).push(r));
  Object.keys(byLang).forEach(lang => {
    let lessons = 0, total = 0;
    byLang[lang].forEach(r => {
      lessons += r.lessons; total += r.lessonTotal;
      console.log(`  ${lang}  ${r.course.padEnd(8)} units ${String(r.units).padStart(2)}/${String(r.unitTotal).padEnd(2)}  lessons ${String(r.lessons).padStart(3)}/${String(r.lessonTotal).padEnd(3)}${r.stale ? "  " + r.stale + " stale" : ""}`);
    });
    console.log(`  ${lang}  interface ${res.keys.length} strings · lessons ${lessons}/${total} translated`);
  });
}

const all = res.failures.concat(res.stale);
if (all.length) {
  all.forEach(f => console.log("  ✗ " + f));
  console.log(`\ni18n: ${all.length} problem${all.length === 1 ? "" : "s"}`);
  process.exit(1);
}
console.log(`i18n OK — ${res.keys.length} interface strings translated, every layer lines up with its English`);
