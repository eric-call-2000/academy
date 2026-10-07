#!/usr/bin/env node
/* ============================================================
   Tests for core.js — the rules the app's progress depends on.
   Pure Node, no dependencies:  node tools/test-core.js

   The contract, in short:
   - days are "YYYY-MM-DD" and date math never slips across DST,
     month ends, year ends or leap days;
   - the streak is derived from a set of days (a run that ended
     stays ended; yesterday still counts as alive);
   - XP only ever grows: 10 per briefing the first time, 20 once
     per finished country, nothing for re-reading;
   - lesson ids are stable progress keys, and "next" stays in the
     country you were reading before walking the path in order;
   - the Academy mirror has exactly the shape Academy's tracks use;
   - markup escapes HTML and resolves every reference;
   - relationships (links.js) resolve as subjects but never join the
     30-country path, and their reads pay XP like any briefing.
   ============================================================ */
const assert = require("assert");
const { load } = require("./load");

const seeded = [
  { id: "t-old", unit: "us", date: "2026-10-01", title: "Old", md: "x", sources: [] },
  { id: "t-new", unit: "us", date: "2026-11-04", title: "New", md: "y", sources: [] }
];
const { P } = load({ seed: (ctx) => { ctx.POLITICS = { updates: seeded.slice() }; } });

/* Objects built inside the sandbox have the sandbox's prototypes, so
   compare them as plain data. */
const same = (actual, expected) => assert.deepStrictEqual(JSON.parse(JSON.stringify(actual)), expected);

let passed = 0;
function test(name, fn) {
  try { fn(); passed++; } catch (e) { console.log("FAIL " + name + "\n  " + e.message); process.exitCode = 1; }
}

/* ---------- dates ---------- */
test("dayKey pads months and days", () => {
  assert.strictEqual(P.dayKey(new Date(2026, 0, 5)), "2026-01-05");
});
test("addDays crosses month, year and leap-day boundaries", () => {
  assert.strictEqual(P.addDays("2026-12-31", 1), "2027-01-01");
  assert.strictEqual(P.addDays("2028-02-28", 1), "2028-02-29");
  assert.strictEqual(P.addDays("2027-03-01", -1), "2027-02-28");
});
test("addDays is not shifted by daylight-saving changes", () => {
  assert.strictEqual(P.addDays("2026-03-08", 1), "2026-03-09");   // US spring forward
  assert.strictEqual(P.addDays("2026-11-01", 1), "2026-11-02");   // US fall back
  assert.strictEqual(P.addDays("2026-03-29", -1), "2026-03-28");  // EU spring forward
});
test("daysBetween and isStale", () => {
  assert.strictEqual(P.daysBetween("2026-09-28", "2026-10-28"), 30);
  assert.strictEqual(P.isStale("2026-09-28", "2027-01-26"), false);   // 120 days
  assert.strictEqual(P.isStale("2026-09-28", "2027-01-27"), true);    // 121 days
});
test("Academy's day format has no zero padding", () => {
  assert.strictEqual(P.academyDayKey("2026-09-08"), "2026-9-8");
  assert.strictEqual(P.academyDayKey(null), null);
});
test("formatDate reads like a person wrote it", () => {
  assert.strictEqual(P.formatDate("2026-09-28"), "28 Sep 2026");
});

/* ---------- streak ---------- */
test("streak counts a run ending today", () => {
  assert.strictEqual(P.streak(["2026-09-26", "2026-09-27", "2026-09-28"], "2026-09-28"), 3);
});
test("a run that ended yesterday is still alive", () => {
  assert.strictEqual(P.streak(["2026-09-26", "2026-09-27"], "2026-09-28"), 2);
});
test("a missed day ends the run", () => {
  assert.strictEqual(P.streak(["2026-09-25", "2026-09-26"], "2026-09-28"), 0);
  assert.strictEqual(P.streak(["2026-09-24", "2026-09-26", "2026-09-27", "2026-09-28"], "2026-09-28"), 3);
});
test("streak ignores order and duplicates", () => {
  assert.strictEqual(P.streak(["2026-09-28", "2026-09-27", "2026-09-28"], "2026-09-28"), 2);
  assert.strictEqual(P.streak([], "2026-09-28"), 0);
});

/* ---------- progress ---------- */
const unit = P.units.us;
test("the US unit is registered with twelve briefings in reading order", () => {
  assert.ok(unit, "units/us.js did not register");
  assert.strictEqual(unit.lessons.length, 12);
  same(unit.lessons.map((l) => P.lessonNum(l.id)), JSON.parse(JSON.stringify(P.ORDER12)));
  same(unit.lessons.map((l) => l.kind), JSON.parse(JSON.stringify(P.ARC)));
});
test("briefings 9-12 slot into the reading order without renumbering", () => {
  same(P.readingOrder(8), [1, 2, 3, 4, 5, 6, 7, 8]);
  same(P.readingOrder(12), [1, 2, 9, 3, 10, 11, 4, 5, 6, 7, 12, 8]);
  assert.strictEqual(P.lessonPos(unit, "us-9"), 3);
  assert.strictEqual(P.lessonPos(unit, "us-8"), 12);
});
test("normalizeProfile repairs junk without losing good fields", () => {
  const p = P.normalizeProfile({ read: { "us-1": "2026-09-28" }, goal: 7, days: "nope" });
  same(p.read, { "us-1": "2026-09-28" });
  assert.strictEqual(p.goal, 1);
  same(p.days, []);
  same(P.normalizeProfile(null), JSON.parse(JSON.stringify(P.freshProfile())));
});
test("first read pays 10 XP; re-reading pays nothing", () => {
  const p = P.freshProfile();
  const r1 = P.markRead(p, unit, "us-1", "2026-09-28");
  assert.strictEqual(r1.first, true);
  assert.strictEqual(r1.xpGained, 10);
  const r2 = P.markRead(p, unit, "us-1", "2026-09-29");
  assert.strictEqual(r2.first, false);
  assert.strictEqual(r2.xpGained, 0);
  assert.strictEqual(P.xp(p), 10);
  same(p.days, ["2026-09-28", "2026-09-29"]);
});
test("finishing a country pays the bonus exactly once", () => {
  const p = P.freshProfile();
  let last;
  unit.lessons.forEach((l, i) => { last = P.markRead(p, unit, l.id, P.addDays("2026-09-20", i)); });
  assert.strictEqual(last.unitDone, true);
  assert.strictEqual(last.xpGained, 10 + 20);
  assert.strictEqual(P.xp(p), 12 * 10 + 20);
  const again = P.markRead(p, unit, "us-3", "2026-10-10");
  assert.strictEqual(again.unitDone, false);
  assert.strictEqual(P.xp(p), 140);
});
test("days stay sorted and unique however reads arrive", () => {
  const p = P.freshProfile();
  P.markRead(p, unit, "us-2", "2026-09-28");
  P.markRead(p, unit, "us-1", "2026-09-26");
  P.markRead(p, unit, "us-3", "2026-09-28");
  same(p.days, ["2026-09-26", "2026-09-28"]);
  assert.strictEqual(P.todayCount(p, "2026-09-28"), 2);
});
test("updated-since-read compares the lesson's date with the read date", () => {
  assert.strictEqual(P.isUpdatedSince({ asOf: "2026-11-05" }, "2026-10-01"), true);
  assert.strictEqual(P.isUpdatedSince({ asOf: "2026-09-28" }, "2026-10-01"), false);
  assert.strictEqual(P.isUpdatedSince({ asOf: "2026-11-05" }, undefined), false);
});

/* ---------- next briefing ---------- */
test("a new reader starts at the first briefing of the path", () => {
  assert.strictEqual(P.nextLessonId(P.freshProfile()), "us-1");
});
test("next is the first unread briefing of the country you're in", () => {
  const p = P.freshProfile();
  ["us-1", "us-2", "us-9", "us-3", "us-5"].forEach((id) => P.markRead(p, unit, id, "2026-09-28"));
  p.last = "us-5";
  assert.strictEqual(P.nextLessonId(p), "us-10");
});
test("finishing a country walks on to the next written one in path order", () => {
  const p = P.freshProfile();
  unit.lessons.forEach((l) => P.markRead(p, unit, l.id, "2026-09-28"));
  p.last = "us-8";
  const next = P.countries.filter((c) => c.lessons > 0 && c.id !== "us")[0];
  assert.strictEqual(P.nextLessonId(p), next ? next.id + "-1" : null);
});
test("when every written briefing is read, there is no next", () => {
  const p = P.freshProfile();
  unit.lessons.forEach((l) => P.markRead(p, unit, l.id, "2026-09-28"));
  p.last = "us-8";
  assert.strictEqual(P.nextLessonId(p, [P.country("us")]), null);
});
test("unbuilt countries are skipped", () => {
  const fake = [{ id: "cn", lessons: 0 }, { id: "us", lessons: 8 }];
  assert.strictEqual(P.nextLessonId(P.freshProfile(), fake), "us-1");
});

/* ---------- Academy mirror ---------- */
test("the Academy mirror has Academy's track shape", () => {
  const p = P.freshProfile();
  P.markRead(p, unit, "us-1", "2026-09-27");
  P.markRead(p, unit, "us-2", "2026-09-28");
  const m = P.academyMirror(p, "2026-09-28");
  same(Object.keys(m).sort(), ["completed", "lastDay", "missed", "streak", "xp"]);
  same(m.completed, { "us-1": true, "us-2": true });
  assert.strictEqual(m.xp, 20);
  assert.strictEqual(m.streak, 2);
  assert.strictEqual(m.lastDay, "2026-9-28");
});

/* ---------- dispatches ---------- */
test("dispatches seeded before boot survive and sort newest first", () => {
  // real dispatches in updates.js are left out: only the two seeded here are checked
  const ids = P.unseenUpdates(P.freshProfile()).map((u) => u.id).filter((id) => id.startsWith("t-"));
  same(ids, ["t-new", "t-old"]);
});
test("opened dispatches drop out of what's new", () => {
  const p = P.freshProfile();
  p.seen["t-new"] = 1;
  same(P.unseenUpdates(p).map((u) => u.id).filter((id) => id.startsWith("t-")), ["t-old"]);
  same(P.unseenUpdates(p, "cn"), []);
});
test("addUpdate ignores a repeated id", () => {
  const before = P.updates.length;
  P.addUpdate({ id: "t-new", unit: "us", date: "2026-11-04" });
  assert.strictEqual(P.updates.length, before);
});

/* ---------- markup ---------- */
test("markup escapes HTML", () => {
  const html = P.md("<script>alert(1)</script> & \"quotes\"");
  assert.ok(html.indexOf("<script>") === -1, html);
  assert.ok(html.indexOf("&lt;script&gt;") !== -1, html);
});
test("glossary and unit references render through the hooks", () => {
  const opts = {
    term: (id, label) => "[T:" + id + ":" + label + "]",
    unit: (id, label) => "[U:" + id + ":" + label + "]"
  };
  assert.strictEqual(P.inline("the [[Electoral College]] and [[tariff|tariffs]]", opts),
    "the [T:electoral-college:Electoral College] and [T:tariff:tariffs]");
  assert.strictEqual(P.inline("see [[unit:ir]] or [[unit:cn|Beijing]]", opts), "see [U:ir:Iran] or [U:cn:Beijing]");
});
test("scanRefs finds every reference", () => {
  same(P.scanRefs("[[NATO]], [[unit:ua]], [[primary election|primaries]], [[lesson:ua-10]]"),
    { terms: ["nato", "primary-election"], units: ["ua"], lessons: ["ua-10"] });
});
test("bold, italic, links and bullets", () => {
  assert.strictEqual(P.inline("**a** and *b*"), "<strong>a</strong> and <em>b</em>");
  assert.strictEqual(P.inline("[x](https://example.com/a?b=1&c=2)"),
    '<a href="https://example.com/a?b=1&amp;c=2" target="_blank" rel="noopener">x</a>');
  assert.strictEqual(P.inline("[x](javascript:alert(1))"), "[x](javascript:alert(1))");
  assert.strictEqual(P.md("- one\n- two"), "<ul><li>one</li><li>two</li></ul>");
  assert.strictEqual(P.md("a\nb\n\nc"), "<p>a b</p><p>c</p>");
});
test("word counts read references as their labels", () => {
  assert.strictEqual(P.words("The [[unit:ir|Islamic Republic]] and [[NATO]] met."), 6);
  assert.strictEqual(P.words("$954 billion, 33% — 2025"), 4);
});
test("every US briefing has a picture for its card", () => {
  unit.lessons.forEach((l) => assert.ok(P.heroOf(l), l.id + " has no hero"));
});

/* ---------- briefing references ---------- */
test("[[lesson:…]] shows a briefing's place in the reading order, not its id", () => {
  assert.strictEqual(P.lessonRef("mx-10").pos, 5, "mx-10 is fifth in the 12-briefing order");
  assert.strictEqual(P.lessonRef("us-8").label, "briefing 12");
  assert.strictEqual(P.lessonRef("us_cn-2", "Briefing #").label, "Briefing 2");
  assert.strictEqual(P.lessonRef("us-13").pos, 0, "no such briefing");
  assert.strictEqual(P.inline("see [[lesson:mx-10]]"), 'see <span class="lesson-ref">briefing 5</span>');
  assert.strictEqual(P.inline("[[lesson:ar-4|#]]", { lesson: (id, label) => "[L:" + id + ":" + label + "]" }), "[L:ar-4:7]");
  assert.strictEqual(P.words("see [[lesson:mx-10]]"), 3, "counts as 'see briefing 5'");
});

/* ---------- relationships ---------- */
test("a relationship is a subject dressed like a country", () => {
  const s = P.subject("us_cn");
  assert.ok(s && s.isLink, "us_cn should resolve");
  assert.strictEqual(s.name, "United States & China");
  assert.strictEqual(s.flag, P.country("us").flag + P.country("cn").flag);
  assert.strictEqual(P.subject("us"), P.country("us"));
  assert.strictEqual(P.subject("nope"), null);
  assert.strictEqual(P.country("us_cn"), null, "links are not countries");
});
test("links are found from either country, and stay off the 30-country path", () => {
  assert.ok(P.linksOf("cn").some((l) => l.id === "us_cn"), "China lists US–China");
  assert.ok(P.linksOf("us").some((l) => l.id === "us_cn"), "the US lists US–China");
  assert.ok(P.linksOf("us").every((l) => l.a === "us" || l.b === "us"), "only links that include the US");
  same(P.linksOf("xx"), []);  // an unknown country has no relationships
  assert.strictEqual(P.countries.length, 30);
  assert.strictEqual(P.unitIdOf("us_cn-2"), "us_cn");
  assert.strictEqual(P.lessonNum("us_cn-2"), 2);
});
test("reading a relationship counts, pays XP once and a completion bonus", () => {
  const prof = P.freshProfile();
  const link = P.units.us_cn;
  assert.ok(link, "units/us_cn.js should be loaded");
  link.lessons.forEach((l) => P.markRead(prof, link, l.id, "2026-09-30"));
  assert.strictEqual(P.readCount(prof, "us_cn"), link.lessons.length);
  assert.strictEqual(P.readCount(prof, "us"), 0, "link reads don't count toward the US unit");
  assert.strictEqual(P.xp(prof), link.lessons.length * P.XP_PER_BRIEFING + P.XP_PER_COUNTRY);
  prof.last = "us_cn-3";
  assert.strictEqual(P.nextLessonId(prof), "us-1", "after a link, next walks the country path");
});

console.log(passed + " passed" + (process.exitCode ? ", some FAILED" : ""));
