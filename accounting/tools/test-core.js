#!/usr/bin/env node
/* ============================================================
   Tests for core.js — the rules the checking and progress depend on.
   Pure Node, no dependencies:  node tools/test-core.js

   The contract, in short:
   - a journal entry is judged by its net effect per account, so line
     order and split lines don't matter, but it must balance and every
     amount sits on one side;
   - wrong entries get a specific hint (unbalanced, reversed, wrong
     accounts, wrong amounts);
   - amounts parse the way people type them ($1,234.50, (500), 12%);
   - XP only ever grows: 10 per lesson the first time, 20 once per
     finished unit, nothing for redoing a lesson;
   - the streak is derived from study days;
   - the Academy mirror has exactly the shape Academy's tracks use.
   ============================================================ */
const assert = require("assert");
const { load } = require("./load");
const { L } = load();

const same = (a, b) => assert.deepStrictEqual(JSON.parse(JSON.stringify(a)), b);
let passed = 0;
function test(name, fn) {
  try { fn(); passed++; } catch (e) { console.log("FAIL " + name + "\n  " + e.message); process.exitCode = 1; }
}

/* ---------- amounts ---------- */
test("parseAmount reads the ways people type money", () => {
  assert.strictEqual(L.parseAmount("1,234.50"), 1234.5);
  assert.strictEqual(L.parseAmount("$1,234.50"), 1234.5);
  assert.strictEqual(L.parseAmount("(500)"), -500);
  assert.strictEqual(L.parseAmount("-$75"), -75);
  assert.strictEqual(L.parseAmount("12.5%"), 12.5);
  assert.strictEqual(L.parseAmount(" 40 "), 40);
  assert.strictEqual(L.parseAmount(".5"), 0.5);
  assert.strictEqual(L.parseAmount(""), null);
  assert.strictEqual(L.parseAmount("abc"), null);
  assert.strictEqual(L.parseAmount("1.2.3"), null);
});
test("money formats with commas and drops .00", () => {
  assert.strictEqual(L.money(1234.5), "$1,234.50");
  assert.strictEqual(L.money(25000), "$25,000");
  assert.strictEqual(L.money(-75), "-$75");
  assert.strictEqual(L.money(0.1 + 0.2), "$0.30");
});

/* ---------- journal entries ---------- */
const BUY = [{ acct: "equipment", dr: 9000 }, { acct: "cash", cr: 3000 }, { acct: "notes_payable", cr: 6000 }];
test("a correct entry passes in any line order", () => {
  assert.strictEqual(L.checkEntry([{ acct: "notes_payable", cr: 6000 }, { acct: "equipment", dr: 9000 }, { acct: "cash", cr: 3000 }], BUY).ok, true);
});
test("splitting an account across two lines is still right", () => {
  const r = L.checkEntry([{ acct: "equipment", dr: 4000 }, { acct: "equipment", dr: 5000 }, { acct: "cash", cr: 3000 }, { acct: "notes_payable", cr: 6000 }], BUY);
  assert.strictEqual(r.ok, true);
});
test("blank lines are ignored", () => {
  const r = L.checkEntry([{ acct: "", dr: 0 }, { acct: "equipment", dr: 9000 }, { acct: "cash", cr: 3000 }, { acct: "notes_payable", cr: 6000 }, { acct: "rent_exp" }], BUY);
  assert.strictEqual(r.ok, true);
});
test("an empty entry asks for lines", () => {
  assert.strictEqual(L.checkEntry([], BUY).code, "empty");
  assert.strictEqual(L.checkEntry([{ acct: "cash" }], BUY).code, "empty");
});
test("an unbalanced entry says by how much", () => {
  const r = L.checkEntry([{ acct: "equipment", dr: 9000 }, { acct: "cash", cr: 3000 }], BUY);
  assert.strictEqual(r.code, "unbalanced");
  assert.ok(/\$9,000/.test(r.msg) && /\$3,000/.test(r.msg));
});
test("a line with both a debit and a credit is rejected", () => {
  assert.strictEqual(L.checkEntry([{ acct: "cash", dr: 5, cr: 5 }], BUY).code, "onesided");
});
test("a mirror-image entry is called reversed", () => {
  const r = L.checkEntry([{ acct: "equipment", cr: 9000 }, { acct: "cash", dr: 3000 }, { acct: "notes_payable", dr: 6000 }], BUY);
  assert.strictEqual(r.code, "reversed");
});
test("right accounts with wrong amounts", () => {
  const r = L.checkEntry([{ acct: "equipment", dr: 9000 }, { acct: "cash", cr: 6000 }, { acct: "notes_payable", cr: 3000 }], BUY);
  assert.strictEqual(r.code, "amounts");
});
test("wrong accounts are counted", () => {
  const r = L.checkEntry([{ acct: "repairs_exp", dr: 9000 }, { acct: "cash", cr: 3000 }, { acct: "notes_payable", cr: 6000 }], BUY);
  assert.strictEqual(r.code, "accounts");
  assert.ok(/2 of 3/.test(r.msg) && /plus 1/.test(r.msg));
});
test("cents are compared without float drift", () => {
  const key = [{ acct: "unearned_rev", dr: 333.33 }, { acct: "service_revenue", cr: 333.33 }];
  assert.strictEqual(L.checkEntry([{ acct: "unearned_rev", dr: 333.33 }, { acct: "service_revenue", cr: 333.33 }], key).ok, true);
  assert.strictEqual(L.checkEntry([{ acct: "unearned_rev", dr: 0.1 + 0.2 }, { acct: "service_revenue", cr: 0.3 }],
    [{ acct: "unearned_rev", dr: 0.3 }, { acct: "service_revenue", cr: 0.3 }]).ok, true);
});
test("netting: a two-step recovery entered as one form is judged by its net effect", () => {
  const key = [{ acct: "cash", dr: 1200 }, { acct: "allowance", cr: 1200 }];
  const given = [{ acct: "ar", dr: 1200 }, { acct: "allowance", cr: 1200 }, { acct: "cash", dr: 1200 }, { acct: "ar", cr: 1200 }];
  assert.strictEqual(L.checkEntry(given, key).ok, true);
});

/* ---------- other exercise types ---------- */
test("numbers: tolerance, formatting and sign", () => {
  assert.strictEqual(L.checkNumber("$53,000", { answer: 53000 }).ok, true);
  assert.strictEqual(L.checkNumber("37.2", { answer: 37.24, tol: 0.3 }).ok, true);
  assert.strictEqual(L.checkNumber("37", { answer: 37.24, tol: 0.1 }).ok, false);
  assert.strictEqual(L.checkNumber("-2500", { answer: 2500 }).code, "sign");
  assert.strictEqual(L.checkNumber("", { answer: 1 }).code, "empty");
});
test("choice and classify", () => {
  assert.strictEqual(L.checkChoice(1, { answer: 1 }).ok, true);
  assert.strictEqual(L.checkChoice("1", { answer: 1 }).ok, true);
  assert.strictEqual(L.checkChoice(null, { answer: 1 }).code, "empty");
  const ex = { items: [["Cash", "dr"], ["AP", "cr"]] };
  assert.strictEqual(L.checkClassify(["dr", "cr"], ex).ok, true);
  assert.strictEqual(L.checkClassify(["dr", ""], ex).code, "empty");
  assert.ok(/1 of 2/.test(L.checkClassify(["dr", "dr"], ex).msg));
});

/* ---------- dates and streaks ---------- */
test("addDays crosses month, year and DST boundaries", () => {
  assert.strictEqual(L.addDays("2026-12-31", 1), "2027-01-01");
  assert.strictEqual(L.addDays("2028-02-28", 1), "2028-02-29");
  assert.strictEqual(L.addDays("2026-03-08", 1), "2026-03-09");
  assert.strictEqual(L.addDays("2026-11-01", 1), "2026-11-02");
});
test("streak is derived from days and survives until tomorrow", () => {
  const days = ["2026-10-15", "2026-10-16", "2026-10-17"];
  assert.strictEqual(L.streak(days, "2026-10-17"), 3);
  assert.strictEqual(L.streak(days, "2026-10-18"), 3);
  assert.strictEqual(L.streak(days, "2026-10-19"), 0);
  assert.strictEqual(L.streak([], "2026-10-19"), 0);
});

/* ---------- progress ---------- */
test("XP: 10 per lesson once, 20 per finished unit once", () => {
  const p = L.freshProfile();
  const u = L.units[0];
  const r1 = L.finishLesson(p, u.lessons[0].id, "2026-10-19", true);
  assert.strictEqual(r1.first, true);
  assert.strictEqual(r1.xpGained, 10);
  const again = L.finishLesson(p, u.lessons[0].id, "2026-10-20", false);
  assert.strictEqual(again.first, false);
  assert.strictEqual(again.xpGained, 0);
  assert.strictEqual(p.done[u.lessons[0].id], "2026-10-19", "first-finished day is kept");
  assert.strictEqual(p.clean[u.lessons[0].id], true, "a clean finish is never taken back");
  let last;
  u.lessons.slice(1).forEach((l) => { last = L.finishLesson(p, l.id, "2026-10-20", false); });
  assert.strictEqual(last.unitDone, true);
  assert.strictEqual(last.xpGained, 30);
  assert.strictEqual(L.xp(p), u.lessons.length * 10 + 20);
  same(p.days, ["2026-10-19", "2026-10-20"]);
});
test("next lesson follows the one last opened, then wraps to the start", () => {
  const all = L.allLessons();
  const p = L.freshProfile();
  assert.strictEqual(L.nextLessonId(p), all[0].id);
  p.done[all[0].id] = "2026-10-19";
  assert.strictEqual(L.nextLessonId(p), all[1].id);
  if (all.length > 3) {
    p.last = all[2].id;
    p.done[all[2].id] = "2026-10-19";
    assert.strictEqual(L.nextLessonId(p), all[3].id);
  }
  all.forEach((l) => { p.done[l.id] = "2026-10-19"; });
  assert.strictEqual(L.nextLessonId(p), null);
});
test("the Academy mirror has Academy's track shape", () => {
  const p = L.freshProfile();
  L.finishLesson(p, L.allLessons()[0].id, "2026-10-09", true);
  const m = L.academyMirror(p, "2026-10-09");
  same(Object.keys(m).sort(), ["completed", "lastDay", "missed", "streak", "xp"]);
  same(m.completed, { [L.allLessons()[0].id]: true });
  assert.strictEqual(m.xp, 10);
  assert.strictEqual(m.streak, 1);
  assert.strictEqual(m.lastDay, "2026-10-9");
});
test("normalizeProfile repairs missing fields", () => {
  const p = L.normalizeProfile({ done: { "u01-1": "2026-10-01" }, days: "nope" });
  same(p.days, []);
  same(p.clean, {});
  assert.strictEqual(p.done["u01-1"], "2026-10-01");
});

/* ---------- markup ---------- */
test("markup escapes HTML and renders tables, lists and callouts", () => {
  const html = L.md("Hi <b>there</b>\n\n- one\n- two\n\n1. first\n2. second\n\n| A | B |\n|---|---|\n| Cash | $1,200 |\n\n> Note this");
  assert.ok(html.indexOf("&lt;b&gt;") !== -1);
  assert.ok(/<ul><li>one<\/li><li>two<\/li><\/ul>/.test(html));
  assert.ok(/<ol><li>first<\/li>/.test(html));
  assert.ok(/<th>A<\/th>/.test(html) && /<td class="num">\$1,200<\/td>/.test(html));
  assert.ok(/class="callout"/.test(html));
});

test("a list or table may follow its lead-in line directly", () => {
  const html = L.md("Controls:\n- one\n- two\nAfter.\n| A | B |\n|---|---|\n| x | 1 |");
  assert.ok(/^<p>Controls:<\/p><ul><li>one<\/li><li>two<\/li><\/ul><p>After.<\/p><div class="tbl-wrap">/.test(html), html);
});

/* ---------- parts and time ---------- */
test("unit time estimates are rounded to 5 minutes and never zero", () => {
  L.units.forEach((u) => {
    const m = L.unitMinutes(u);
    assert.ok(m >= 5 && m % 5 === 0, u.id + " → " + m);
  });
});

/* ---------- interview prep ---------- */
test("saved interview answers: notes, ready marks, and blanks dropped", () => {
  const p = L.freshProfile();
  const q = L.allQuestions()[0].id;
  L.setPrep(p, q, { note: "My answer" });
  same(p.prep[q], { note: "My answer" });
  L.setPrep(p, q, { ready: true });
  same(p.prep[q], { note: "My answer", ready: true });
  assert.strictEqual(L.readyCount(p), 1);
  assert.strictEqual(L.readyCount(p, L.question(q).section), 1);
  L.setPrep(p, q, { note: "", ready: false });
  assert.strictEqual(q in p.prep, false, "an empty, un-ready entry is removed");
  assert.strictEqual(L.readyCount(p), 0);
});
test("interview prep never touches XP or the Academy mirror", () => {
  const p = L.freshProfile();
  L.allQuestions().forEach((q) => L.setPrep(p, q.id, { note: "x", ready: true }));
  assert.strictEqual(L.xp(p), 0);
  same(L.academyMirror(p, "2026-10-19").completed, {});
});
test("old profiles gain an empty prep map", () => {
  same(L.normalizeProfile({ done: {} }).prep, {});
  same(L.normalizeProfile({ prep: [] }).prep, {});
});

console.log(passed + " tests passed" + (process.exitCode ? ", some FAILED" : ""));
