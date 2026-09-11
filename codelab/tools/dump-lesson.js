/* Print one lesson's starter, solution and checkpoints as plain text.
   Usage: node tools/dump-lesson.js <lesson-id> [--part steps|files|solution]

   Authoring aid only: validate-unit.js tells you a checkpoint failed, this
   shows you the code it ran against without opening a 200-line unit file. */
const path = require("path");
const ROOT = path.join(__dirname, "..");

global.window = { CODELAB: {} };
window.CODELAB.courses = [];
window.CODELAB._byId = {};
window.CODELAB.positions = [];
window.CODELAB._posById = {};
window.CODELAB.defineCourse = (c) => {
  c.units = []; c.files = c.files || [];
  window.CODELAB.courses.push(c); window.CODELAB._byId[c.id] = c;
};
window.CODELAB.definePosition = () => {};
window.CODELAB.addUnit = (courseId, u) => {
  u.lessons = u.lessons || [];
  if (window.CODELAB._byId[courseId]) window.CODELAB._byId[courseId].units.push(u);
};
require(path.join(ROOT, "core.js"));
require(path.join(ROOT, "courses.js"));
for (const c of window.CODELAB.courses) for (const f of c.files) require(path.join(ROOT, f));

const id = process.argv[2];
const partIx = process.argv.indexOf("--part");
const part = partIx !== -1 ? process.argv[partIx + 1] : "all";
if (!id) { console.error("usage: node tools/dump-lesson.js <lesson-id> [--part steps|files|solution]"); process.exit(2); }

let found = null, unit = null, course = null;
for (const c of window.CODELAB.courses)
  for (const u of c.units)
    for (const l of u.lessons)
      if (l.id === id || l.id.startsWith(id)) { if (!found) { found = l; unit = u; course = c; } }

if (!found) { console.error("no lesson matching " + id); process.exit(1); }

console.log("=== " + found.id + " — " + found.title + "  [" + course.id + " / " + unit.id + "]");
console.log("kind=" + (found.kind || "web") + "  node=" + !!found.node + "  spec=" + !!found.spec + "  mock=" + !!found.mock);
if (part === "all" || part === "files") {
  console.log("\n--- STARTER FILES ---");
  for (const f of (found.files || [])) {
    console.log("\n[" + f.name + "]");
    console.log(f.content);
  }
}
if (part === "all" || part === "solution") {
  console.log("\n--- SOLUTION ---");
  for (const k of Object.keys(found.solution || {})) {
    console.log("\n[" + k + "]");
    console.log(found.solution[k]);
  }
}
if (part === "all" || part === "steps") {
  console.log("\n--- CHECKPOINTS ---");
  (found.steps || []).forEach((s, i) => {
    console.log("\n#" + i + " " + s.text);
    console.log(s.test);
  });
}
