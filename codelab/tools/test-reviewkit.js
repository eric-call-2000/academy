/* Engine tests for review lessons — pure Node, no browser, well under a second.
   Usage:  node tools/test-reviewkit.js

   The Code Review course grades WHERE a learner points and WHAT they call
   it, against a key. A grading rule that is wrong here fails a learner who
   found the bug, or passes one who flagged every line, with nothing in the
   lesson to show why — so this file is the CONTRACT for reviewkit.js.

   ---- reviewkit.js (window.CODELAB.reviewkit; module.exports in Node) ----

   A review lesson:
     { id, kind: "review", title, mins, xp?, project?, brief,
       base: { file: text }, head: { file: text },     the change, as two versions
       findings: [{ id, file, side?, lines: [a, b], category, alsoOk?, severity, why }],
       decoys:   [{ file, side?, lines: [a, b], why }],  lines that look wrong and aren't
       verdict: "approve" | "comment" | "request",
       mustFind?: [finding ids],                        non-blocking findings that also gate
       maxFalse?: n,                                    default 1, 0 for a project
       rubric?: [points] }                              for self-checking the comment text

   side is "head" (default: added and unchanged lines, numbered as in head)
   or "base" (deleted lines, numbered as in base).
   Categories: bug, security, design, tests, readability, nit.
   Severities: blocking, nonblocking.

   Grading:
     grade(lesson, { comments: [{ file, side, line, category, severity }], verdict })
       -> { found, missed, nearMiss, missedGating, severityWrong,
            falseAlarms: [{ comment, decoy, cost }], falseCost, maxFalse,
            perComment: ["found" | "near" | "false", ...], verdictRight, pass }
     A comment finds a finding when it is on the same file and side, within
     one line of its range, and its category is the finding's (or in alsoOk).
     Right place + wrong category = nearMiss: not found, not a false alarm.
     Anywhere else = a false alarm costing 1, or 2 if marked blocking.
     pass = every blocking (and mustFind) finding found, the verdict fits
     (an "approve" key also accepts "comment"), and falseCost <= maxFalse.

   Also: diffLines(a, b), lessonDiff(lesson), keyReview(lesson),
   spamReviews(lesson), minsFloor(lesson), onContext(lesson, finding),
   checkLesson(lesson) -> problem strings (empty = valid). */
const path = require("path");
const RK = require(path.join(__dirname, "..", "reviewkit.js"));

let passed = 0;
const failures = [];
function test(name, fn) {
  try { fn(); passed++; } catch (e) { failures.push(name + " — " + e.message); }
}
function eq(got, want, msg) {
  const a = JSON.stringify(got), b = JSON.stringify(want);
  if (a !== b) throw new Error((msg ? msg + ": " : "") + "got " + a + ", want " + b);
}
function ok(cond, msg) { if (!cond) throw new Error(msg); }

/* A small, valid lesson every test starts from. head line 6 divides by
   the cart's length (the bug, added), line 3 is an unchanged loop that
   looks off-by-one but isn't (the decoy), and line 9 is a vague name (a
   non-blocking readability finding). */
function lesson(over) {
  const base = [
    "function total(items) {",
    "  let sum = 0;",
    "  for (let i = 0; i < items.length; i++) {",
    "    sum += items[i].price;",
    "  }",
    "  return sum;",
    "}",
    ""
  ].join("\n");
  const head = [
    "function total(items) {",
    "  let sum = 0;",
    "  for (let i = 0; i < items.length; i++) {",
    "    sum += items[i].price;",
    "  }",
    "  return sum / items.length;",
    "}",
    "",
    "function d(items) { return total(items) * 0.9; }",
    ""
  ].join("\n");
  return Object.assign({
    id: "review-t-1", kind: "review", title: "Average price", mins: 4,
    brief: "Adds a discounted total.",
    base: { "cart.js": base }, head: { "cart.js": head },
    findings: [
      { id: "avg", file: "cart.js", lines: [6, 6], category: "bug", severity: "blocking",
        why: "total() now returns an average, and an empty cart divides by zero." },
      { id: "name", file: "cart.js", lines: [9, 9], category: "readability", severity: "nonblocking",
        why: "d() says nothing about what it does." }
    ],
    decoys: [{ file: "cart.js", lines: [3, 3], why: "i < items.length is the right bound for a 0-based loop." }],
    verdict: "request"
  }, over || {});
}
const C = (line, category, severity, extra) =>
  Object.assign({ file: "cart.js", side: "head", line, category, severity: severity || "blocking" }, extra || {});

/* ---------------- the diff ---------------- */

test("diffLines: identical text is all context", () => {
  const rows = RK.diffLines("a\nb\n", "a\nb\n");
  eq(rows.map(r => r.type), ["ctx", "ctx"]);
  eq(rows.map(r => [r.base, r.head]), [[1, 1], [2, 2]]);
});
test("diffLines: a replaced line is a delete then an add", () => {
  const rows = RK.diffLines("a\nb\nc\n", "a\nB\nc\n");
  eq(rows.map(r => r.type + ":" + r.text), ["ctx:a", "del:b", "add:B", "ctx:c"]);
  eq(rows[1].base, 2); eq(rows[1].head, null);
  eq(rows[2].head, 2); eq(rows[2].base, null);
});
test("diffLines: insertions keep head numbering", () => {
  const rows = RK.diffLines("a\nc\n", "a\nb\nc\n");
  eq(rows.map(r => r.type), ["ctx", "add", "ctx"]);
  eq(rows[2].head, 3); eq(rows[2].base, 2);
});
test("diffLines: a new file is all adds, a deleted one all deletes", () => {
  eq(RK.diffLines(undefined, "x\ny").map(r => r.type), ["add", "add"]);
  eq(RK.diffLines("x\ny", undefined).map(r => r.type), ["del", "del"]);
});
test("diffLines: a missing trailing newline is not a change", () => {
  eq(RK.diffLines("a\nb", "a\nb\n").map(r => r.type), ["ctx", "ctx"]);
});
test("lessonDiff: file status and order (head order, then deleted files)", () => {
  const l = lesson({ base: { "old.js": "x", "cart.js": "a" }, head: { "cart.js": "b", "new.js": "y" } });
  eq(RK.lessonDiff(l).map(d => d.file + ":" + d.status), ["cart.js:modified", "new.js:added", "old.js:deleted"]);
});
test("lessonDiff: a file shown for context is unchanged", () => {
  const l = lesson({ base: { "a.js": "x\n", "b.js": "same\n" }, head: { "a.js": "y\n", "b.js": "same\n" } });
  eq(RK.lessonDiff(l).map(d => d.status), ["modified", "unchanged"]);
});
test("onContext: a finding on unchanged lines is context", () => {
  const l = lesson();
  eq(RK.onContext(l, { file: "cart.js", lines: [2, 3] }), true);
  eq(RK.onContext(l, l.findings[0]), false, "line 4 is added");
});

/* ---------------- grading ---------------- */

test("grade: the key's own review passes", () => {
  eq(RK.grade(lesson(), RK.keyReview(lesson())).pass, true);
});
test("grade: finding the blocking bug and requesting changes passes", () => {
  const r = RK.grade(lesson(), { comments: [C(6, "bug")], verdict: "request" });
  eq(r.pass, true); eq(r.found, ["avg"]); eq(r.missed, ["name"]);
});
test("grade: one line of slack either side of the range", () => {
  eq(RK.grade(lesson(), { comments: [C(7, "bug")], verdict: "request" }).pass, true, "line 7");
  eq(RK.grade(lesson(), { comments: [C(5, "bug")], verdict: "request" }).found, ["avg"], "line 5");
  eq(RK.grade(lesson(), { comments: [C(8, "bug")], verdict: "request" }).found, [], "line 8 is too far");
});
test("grade: missing a blocking finding fails", () => {
  const r = RK.grade(lesson(), { comments: [C(9, "readability", "nonblocking")], verdict: "request" });
  eq(r.pass, false); eq(r.missedGating, ["avg"]);
});
test("grade: the wrong verdict fails", () => {
  eq(RK.grade(lesson(), { comments: [C(6, "bug")], verdict: "approve" }).verdictRight, false);
  eq(RK.grade(lesson(), { comments: [C(6, "bug")], verdict: "comment" }).pass, false);
});
test("grade: an approve key also accepts Comment, never Request", () => {
  const l = lesson({ findings: [lesson().findings[1]], verdict: "approve", mustFind: ["name"] });
  eq(RK.grade(l, { comments: [C(9, "readability", "nonblocking")], verdict: "approve" }).pass, true);
  eq(RK.grade(l, { comments: [C(9, "readability", "nonblocking")], verdict: "comment" }).pass, true);
  eq(RK.grade(l, { comments: [C(9, "readability", "nonblocking")], verdict: "request" }).pass, false);
});
test("grade: mustFind gates a non-blocking finding", () => {
  const l = lesson({ findings: [lesson().findings[1]], verdict: "approve", mustFind: ["name"] });
  eq(RK.grade(l, { comments: [], verdict: "approve" }).pass, false);
});
test("grade: right place, wrong category is a near miss, not a false alarm", () => {
  const r = RK.grade(lesson(), { comments: [C(6, "design")], verdict: "request" });
  eq(r.found, []); eq(r.nearMiss, ["avg"]); eq(r.falseCost, 0); eq(r.pass, false);
});
test("grade: perComment says what each comment did", () => {
  const r = RK.grade(lesson(), { comments: [C(6, "bug"), C(6, "design"), C(1, "nit", "nonblocking"), C(7, "bug")], verdict: "request" });
  eq(r.perComment, ["found", "near", "false", "found"]);
});
test("grade: alsoOk widens the category", () => {
  const l = lesson();
  l.findings[0].alsoOk = ["tests"];
  eq(RK.grade(l, { comments: [C(6, "tests")], verdict: "request" }).found, ["avg"]);
});
test("grade: one non-blocking false alarm is allowed, two are not", () => {
  const one = RK.grade(lesson(), { comments: [C(6, "bug"), C(1, "nit", "nonblocking")], verdict: "request" });
  eq(one.falseCost, 1); eq(one.pass, true);
  const two = RK.grade(lesson(), { comments: [C(6, "bug"), C(1, "nit", "nonblocking"), C(2, "nit", "nonblocking")], verdict: "request" });
  eq(two.falseCost, 2); eq(two.pass, false);
});
test("grade: a blocking false alarm costs double and fails on its own", () => {
  const r = RK.grade(lesson(), { comments: [C(6, "bug"), C(1, "bug", "blocking")], verdict: "request" });
  eq(r.falseCost, 2); eq(r.pass, false);
});
test("grade: a comment on a decoy is a false alarm that names the decoy", () => {
  const r = RK.grade(lesson(), { comments: [C(6, "bug"), C(3, "bug", "nonblocking")], verdict: "request" });
  eq(r.falseAlarms, [{ comment: 1, decoy: 0, cost: 1 }]);
  eq(r.pass, true, "one non-blocking false alarm is within the default limit");
});
test("grade: a project allows no false alarms", () => {
  const r = RK.grade(lesson({ project: true }), { comments: [C(6, "bug"), C(1, "nit", "nonblocking")], verdict: "request" });
  eq(r.maxFalse, 0); eq(r.pass, false);
});
test("grade: duplicate comments on one finding are free", () => {
  const r = RK.grade(lesson(), { comments: [C(6, "bug"), C(6, "bug"), C(5, "bug")], verdict: "request" });
  eq(r.falseCost, 0); eq(r.pass, true);
});
test("grade: severity is reported, not gated", () => {
  const r = RK.grade(lesson(), { comments: [C(6, "bug", "nonblocking")], verdict: "request" });
  eq(r.pass, true); eq(r.severityWrong, ["avg"]);
});
test("grade: base-side comments only match base-side findings", () => {
  const base = "a\nconst secret = 'x';\nb\n", head = "a\nb\n";
  const l = lesson({ base: { "f.js": base }, head: { "f.js": head },
    findings: [{ id: "s", file: "f.js", side: "base", lines: [2, 2], category: "security", severity: "blocking", why: "w" }],
    decoys: [{ file: "f.js", lines: [2, 2], why: "w" }] });
  eq(RK.grade(l, { comments: [{ file: "f.js", side: "base", line: 2, category: "security", severity: "blocking" }], verdict: "request" }).found, ["s"]);
  eq(RK.grade(l, { comments: [{ file: "f.js", side: "head", line: 2, category: "security", severity: "blocking" }], verdict: "request" }).found, []);
});
test("grade: no review at all fails a request lesson", () => {
  eq(RK.grade(lesson(), null).pass, false);
});

/* ---------------- schema ---------------- */

test("checkLesson: the sample lesson is valid", () => {
  eq(RK.checkLesson(lesson()), []);
});
const has = (problems, re) => ok(problems.some(p => re.test(p)), "expected a problem matching " + re + ", got " + JSON.stringify(problems));
test("checkLesson: identical base and head", () => {
  has(RK.checkLesson(lesson({ head: lesson().base })), /identical/);
});
test("checkLesson: a finding on a line that isn't in the diff", () => {
  const l = lesson(); l.findings[0].lines = [40, 40];
  has(RK.checkLesson(l), /no head line 40/);
});
test("checkLesson: a base-side range must be deleted lines", () => {
  const l = lesson(); l.findings[0].side = "base"; l.findings[0].lines = [1, 1];
  has(RK.checkLesson(l), /base-side ranges must be deleted lines/);
});
test("checkLesson: unknown category and severity", () => {
  const l = lesson(); l.findings[0].category = "perf"; l.findings[0].severity = "major";
  has(RK.checkLesson(l), /category must be/); has(RK.checkLesson(l), /severity must be/);
});
test("checkLesson: duplicate finding ids", () => {
  const l = lesson(); l.findings[1].id = "avg";
  has(RK.checkLesson(l), /duplicate id/);
});
test("checkLesson: a decoy next to a finding is ambiguous", () => {
  const l = lesson({ decoys: [{ file: "cart.js", lines: [7, 7], why: "w" }] });
  has(RK.checkLesson(l), /ambiguous/);
});
test("checkLesson: verdict and severity must agree", () => {
  has(RK.checkLesson(lesson({ verdict: "approve" })), /blocking finding means/);
  const l = lesson({ findings: [lesson().findings[1]] });
  has(RK.checkLesson(l), /needs at least one blocking finding/);
});
test("checkLesson: an approve lesson needs mustFind", () => {
  const l = lesson({ findings: [lesson().findings[1]], verdict: "approve" });
  has(RK.checkLesson(l), /mustFind/);
});
test("checkLesson: every non-project lesson needs a decoy", () => {
  has(RK.checkLesson(lesson({ decoys: [] })), /decoy/);
});
test("checkLesson: flagging every line must not pass", () => {
  // A one-line new file with a one-line finding: spam has nothing else to hit.
  const l = lesson({ base: {}, head: { "a.js": "y\n" },
    findings: [{ id: "f", file: "a.js", lines: [1, 1], category: "bug", severity: "blocking", why: "w" }],
    decoys: [], project: true, mins: 3 });
  has(RK.checkLesson(l), /every line/);
});
test("checkLesson: mins must sit in the modelled range", () => {
  const floor = RK.minsFloor(lesson());
  has(RK.checkLesson(lesson({ mins: floor - 1 })), /outside the modelled range/);
  has(RK.checkLesson(lesson({ mins: floor * 2 + 5 })), /outside the modelled range/);
  eq(RK.checkLesson(lesson({ mins: floor })), []);
});
test("minsFloor: changed lines at 8 a minute, context at half weight, plus 2", () => {
  // the sample: 1 deleted + 3 added (line 6 replaced, blank + d() added) = 4 changed, 7 context
  eq(RK.changedLineCount(lesson()), 4);
  eq(RK.minsFloor(lesson()), Math.ceil((4 + 7 / 2) / 8 + 2));
});
test("spamReviews: one review per category, every row commented", () => {
  const s = RK.spamReviews(lesson());
  eq(s.map(x => x.category), RK.CATEGORIES);
  eq(s[0].review.comments.length, RK.allAnchors(lesson()).length);
});

/* ---------------- report ---------------- */

if (failures.length) {
  console.log("  ✗ reviewkit: " + passed + " passed, " + failures.length + " failed");
  failures.forEach(f => console.log("    ✗ " + f));
  process.exit(1);
}
console.log("  ✓ reviewkit: " + passed + " passed, 0 failed");
