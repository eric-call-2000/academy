/* CodeLab validation harness (course-catalog edition).
   Phase 0: static curriculum shape checks (node).
   Phase 1: every lesson's SOLUTION must pass all checkpoints in real Chromium;
            every lesson's STARTER must NOT pass them all. Manifest counts+prefixes verified.
   Phase 2: full mobile UI smoke test (catalog flow) + Academy-store sync + screenshots. */
const { chromium } = require("playwright-core");
const { spawn } = require("child_process");
const path = require("path");

const ROOT = require("path").join(__dirname, "..");
const SHOTS = path.join(__dirname, "shots");
require("fs").mkdirSync(SHOTS, { recursive: true });

let failures = [];
function fail(msg) { failures.push(msg); console.log("  ✗ " + msg); }
function ok(msg) { console.log("  ✓ " + msg); }

/* Find a Chromium to drive. playwright-core ships no browser of its own — that is the
   point of it here, since Smart App Control blocks the binaries the full `playwright`
   package would download. Order: explicit override, then Chrome, then Edge (always on
   Windows 11), then the Linux CI path this originally hardcoded. */
function findBrowser() {
  const fs = require("fs");
  const candidates = [
    process.env.CHROMIUM_PATH,
    process.env.ProgramFiles && path.join(process.env.ProgramFiles, "Google/Chrome/Application/chrome.exe"),
    process.env["ProgramFiles(x86)"] && path.join(process.env["ProgramFiles(x86)"], "Google/Chrome/Application/chrome.exe"),
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Google/Chrome/Application/chrome.exe"),
    process.env["ProgramFiles(x86)"] && path.join(process.env["ProgramFiles(x86)"], "Microsoft/Edge/Application/msedge.exe"),
    process.env.ProgramFiles && path.join(process.env.ProgramFiles, "Microsoft/Edge/Application/msedge.exe"),
    "/opt/pw-browsers/chromium",
  ].filter(Boolean);

  for (const c of candidates) {
    try { if (fs.existsSync(c)) { console.log("  browser: " + c); return c; } } catch (e) {}
  }
  console.error("\nNo Chromium found. Install Chrome or Edge, or set CHROMIUM_PATH.\nLooked in:\n  " + candidates.join("\n  "));
  process.exit(1);
}

/* ---------------- phase 0: static checks ---------------- */
function phase0() {
  console.log("\n== Phase 0: static curriculum checks ==");
  global.window = { CODELAB: {} };
  window.CODELAB.courses = [];
  window.CODELAB._byId = {};
  window.CODELAB.defineCourse = (c) => { c.units = []; window.CODELAB.courses.push(c); window.CODELAB._byId[c.id] = c; };
  window.CODELAB.addUnit = (courseId, u) => { u.lessons = u.lessons || []; window.CODELAB._byId[courseId].units.push(u); };
  require(path.join(ROOT, "courses.js"));
  for (const course of window.CODELAB.courses) {
    for (const f of course.files) require(path.join(ROOT, f));
  }

  const ids = new Set();
  let totals = { lessons: 0, quizzes: 0, projects: 0, steps: 0, questions: 0, mins: 0 };
  for (const course of window.CODELAB.courses) {
    let count = 0;
    let courseMins = 0;
    for (const unit of course.units) {
      if (!unit.cheat || !unit.cheat.length) fail(`unit ${unit.id || unit.title} (${course.id}): missing cheatsheet`);
      for (const l of unit.lessons) {
        count++;
        if (ids.has(l.id)) fail(`duplicate lesson id: ${l.id}`);
        ids.add(l.id);
        if (l.id.indexOf(course.prefix + "-") !== 0) fail(`${l.id}: id must start with "${course.prefix}-"`);
        const lessonMins = l.mins || (l.kind === "quiz" ? 5 : l.project ? 30 : 10);
        totals.mins += lessonMins;
        courseMins += lessonMins;
        if (l.kind === "quiz") {
          totals.quizzes++;
          totals.questions += (l.questions || []).length;
          if (!l.questions || l.questions.length < 5) fail(`${l.id}: quiz has <5 questions`);
          (l.questions || []).forEach((q, i) => {
            if (!q.q || !q.choices || q.answer == null || !q.choices[q.answer] || !q.explain)
              fail(`${l.id} q${i}: malformed question`);
          });
        } else {
          totals.lessons++;
          if (l.project) totals.projects++;
          totals.steps += (l.steps || []).length;
          if (!l.steps || !l.steps.length) fail(`${l.id}: no steps`);
          if (!l.files || !l.files.length) fail(`${l.id}: no files`);
          if (!l.solution) fail(`${l.id}: no solution`);
          if (!l.hints || !l.hints.length) fail(`${l.id}: no hints`);
          if (!l.brief) fail(`${l.id}: no brief`);
          if (l.solution) for (const k of Object.keys(l.solution)) {
            if (!(l.files || []).some(f => f.name === k)) fail(`${l.id}: solution file ${k} not in files[]`);
          }
        }
      }
    }
    if (count !== course.items) fail(`course ${course.id}: manifest items=${course.items} but files register ${count}`);

    /* Guard against the failure this repo already had once: a course advertising
       8 hours while holding 7 items. `hours` is a learner-pace estimate so it sits
       above the raw model (10 min/lesson, 30/project, 5/quiz) — but more than 2x
       above it means the number is aspiration, not content. Put that in
       `targetHours` instead, which is not advertised as material. */
    const modelHours = courseMins / 60;
    if (course.hours > modelHours * 2)
      fail(`course ${course.id}: advertises ${course.hours}h but only holds ~${modelHours.toFixed(1)}h of material (${count} items) — move the ambition to targetHours`);

    const target = course.targetHours ? `, target ${course.targetHours}h` : "";
    console.log(`  ${course.id}: ${count} items (manifest ${course.items}) ~${course.hours}h (model ~${modelHours.toFixed(1)}h${target})`);
  }
  console.log(`  TOTAL: ${totals.lessons} coding (${totals.projects} projects), ${totals.quizzes} quizzes, ${totals.questions} questions, ${totals.steps} checkpoints, ~${Math.round(totals.mins / 60)}h of material`);

  /* Recall gates run here, while the catalog is still loaded: node caches
     modules by path and the unit files are bare scripts, so a second
     in-process load would register nothing. */
  reviewGates();

  delete global.window;
}

/* ---------------- Recall: the review pool is content, so it gets gated ----------------
   Same spirit as the 2x hours guard — stop the review deck from silently
   rotting as questions are edited. */
function reviewGates() {
  console.log("\n== Phase 0b: Recall pool ==");
  const REV = require(path.join(ROOT, "review.js"));
  const courses = window.CODELAB.courses;

  // 1. The "-quiz" id invariant. The topbar badge finds finished quizzes by
  //    substring with zero content loaded; a coding lesson carrying "-quiz"
  //    in its id would light it up for a deck that does not exist.
  let bad = [];
  for (const c of courses) for (const u of c.units) for (const l of u.lessons) {
    if (l.kind !== "quiz" && l.id.indexOf("-quiz") !== -1) bad.push(l.id);
    if (l.kind === "quiz" && l.id.indexOf("-quiz") === -1) bad.push(l.id + " (quiz without -quiz)");
  }
  if (bad.length) fail(`"-quiz" id invariant broken: ${bad.join(", ")}`);
  else ok(`"-quiz" id invariant holds (${courses.reduce((n, c) => n + c.units.reduce((m, u) => m + u.lessons.filter(l => l.kind === "quiz").length, 0), 0)} quizzes)`);

  // 2/3/4. Per-course eligibility, key collisions, typed coverage.
  let total = 0, usable = 0, typed = 0, longest = 0, reasons = {};
  const perCourse = [];
  for (const c of courses) {
    let t = 0, o = 0, ty = 0, lg = 0;
    const seen = new Map();
    for (const u of c.units) for (const l of u.lessons) {
      if (l.kind !== "quiz") continue;
      for (const q of (l.questions || [])) {
        t++;
        const why = REV.illPosed(q);
        if (why) { reasons[why] = (reasons[why] || 0) + 1; continue; }
        o++;
        if (REV.isTyped(q)) ty++;
        const ans = q.choices[q.answer] || "";
        const maxOther = Math.max(...q.choices.filter((_, i) => i !== q.answer).map(s => s.length));
        if (ans.length > maxOther) lg++;
        const k = REV.keyOf(l.id, q);
        if (seen.has(k)) fail(`Recall key collision in ${l.id}: "${seen.get(k)}" vs "${q.q}"`);
        seen.set(k, q.q);
      }
    }
    total += t; usable += o; typed += ty; longest += lg;
    perCourse.push({ id: c.id, t, o, ty, lg });
    // A course whose deck has rotted below 80% usable is a content bug.
    if (t && o / t < 0.8) fail(`course ${c.id}: only ${o}/${t} questions usable for free recall (<80%)`);
  }
  perCourse.forEach(p => console.log(`  ${p.id}: ${p.o}/${p.t} usable · ${p.ty} typed · ${p.lg}/${p.o} answer-is-longest`));
  console.log(`  POOL: ${usable}/${total} usable (${Math.round(usable / total * 100)}%), ${typed} objectively graded, excluded: ${JSON.stringify(reasons)}`);

  /* 5. The length tell — now GATED, per course and overall.
        A quiz whose correct answer is reliably the longest option tests
        "spot the long one", and every score it produces is inflated. Recall
        is immune (it hides the choices) but the quizzes themselves are not.
        The authoring pass brought this down from 76%; the gate keeps it
        there, the same way the hours guard keeps the catalog honest. */
  const tell = Math.round(longest / usable * 100);
  const TELL_MAX = 40;
  perCourse.forEach(p => {
    const cp = p.o ? Math.round(p.lg / p.o * 100) : 0;
    if (cp > TELL_MAX) fail(`course ${p.id}: correct answer is the longest choice in ${cp}% of questions (max ${TELL_MAX}%) — the quiz is testing option length`);
  });
  if (tell > TELL_MAX) fail(`length tell across the bank is ${tell}% (max ${TELL_MAX}%)`);
  else ok(`length tell ${tell}% — correct answer is not identifiable by length (max ${TELL_MAX}%)`);

  // 6. explain is the entire remediation payload once choices are hidden.
  let noExplain = 0;
  for (const c of courses) for (const u of c.units) for (const l of u.lessons) {
    if (l.kind !== "quiz") continue;
    for (const q of (l.questions || [])) if (!q.explain || !String(q.explain).trim()) noExplain++;
  }
  if (noExplain) fail(`${noExplain} quiz questions have no explain — that is the whole answer card in Recall`);
  else ok("every question carries an explain");

  schedulerSim(REV, usable);
}

/* Pure-Node simulation: no browser, ~1s. This is the test that catches
   load-math errors — a scheduler that quietly stops introducing new items,
   or lets a session blow past its cap, looks fine until month two. */
function schedulerSim(REV, poolSize) {
  console.log("\n== Phase 0c: scheduler simulation ==");
  const pool = [];
  for (let i = 0; i < poolSize; i++) {
    pool.push({ key: "k" + i, unitId: "u" + (i % 56), typed: false });
  }
  let seed = 12345;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };

  for (const p of [0.6, 0.75, 0.85, 0.95]) {
    const u = { rev: {}, revSkip: {}, revAlt: {}, revQueue: null, revStats: { s: 0, a: 0, c: 0, ta: 0, tc: 0 } };
    let maxSession = 0, maxNew = 0, introduced = 0, day0 = 0, fullyIntroducedOn = null, reviews = 0;
    for (let day = 0; day < 400; day++) {
      u.revQueue = null;
      const before = Object.keys(u.rev).length;
      const q = REV.buildQueue(u, pool, day, rnd);
      maxSession = Math.max(maxSession, q.keys.length);
      let newToday = 0;
      for (const k of q.keys) {
        if (!u.rev[k]) newToday++;
        const outcome = rnd() < p ? "got" : "missed";
        REV.grade(u, k, outcome, 9999, day);
        reviews++;
        const rec = u.rev[k];
        if (rec[0] < 0 || rec[0] >= REV.Q_IV.length) fail(`sim p=${p}: box out of range (${rec[0]})`);
        if (outcome === "missed" && rec[1] > day + 1) fail(`sim p=${p}: failed item scheduled ${rec[1] - day} days out, must be 1`);
      }
      maxNew = Math.max(maxNew, newToday);
      if (day === 0) day0 = q.keys.length;
      introduced = Object.keys(u.rev).length;
      if (fullyIntroducedOn === null && introduced >= poolSize) fullyIntroducedOn = day + 1;
      if (before === introduced && newToday > 0) { /* re-review only */ }
    }
    if (maxSession > REV.MAX_SESSION) fail(`sim p=${p}: session reached ${maxSession}, cap is ${REV.MAX_SESSION}`);
    if (maxNew > REV.NEW_PER_DAY) fail(`sim p=${p}: introduced ${maxNew} in one day, cap is ${REV.NEW_PER_DAY}`);
    if (day0 !== REV.NEW_PER_DAY) fail(`sim p=${p}: day one offered ${day0}, expected exactly ${REV.NEW_PER_DAY} introductions`);
    // Two-sided: a lower bound alone passes happily when the real ramp is
    // twice as long as claimed.
    if (p >= 0.85 && fullyIntroducedOn !== null && (fullyIntroducedOn < 25 || fullyIntroducedOn > 80))
      fail(`sim p=${p}: full introduction took ${fullyIntroducedOn} days, expected 25-80`);

    const boxes = REV.Q_IV.map((_, b) => Object.values(u.rev).filter(r => r[0] === b).length);
    const mature = Object.values(u.rev).filter(r => REV.Q_IV[r[0]] >= REV.HOLDING_DAYS).length;
    console.log(`  p=${p}: ramp ${fullyIntroducedOn || ">400"}d · ~${(reviews / 400).toFixed(1)} cards/day · holding ${mature}/${poolSize} · boxes [${boxes.join(",")}]`);
  }
  if (!failures.length) ok("scheduler invariants hold at every accuracy level");
}

/* ---------------- phases 1+2: browser ---------------- */
async function main() {
  phase0();

  const server = spawn("node", ["server.js"], { cwd: ROOT, stdio: "ignore" });
  await new Promise(r => setTimeout(r, 700));

  const browser = await chromium.launch({ executablePath: findBrowser(), headless: true });

  /* ---- phase 1: run every lesson through the real sandbox ---- */
  console.log("\n== Phase 1: solution/starter runs in Chromium ==");
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const pageErrors = [];
  page.on("pageerror", e => pageErrors.push(String(e)));
  await page.goto("http://localhost:5180/", { waitUntil: "load" });
  await page.waitForFunction(() => window.CODELAB && window.CODELAB.dev, null, { timeout: 10000 });
  if (pageErrors.length) fail("app boot errors: " + pageErrors.join(" ; "));
  await page.evaluate(() => window.CODELAB.dev.loadAll());
  const courseInfo = await page.evaluate(() => window.CODELAB.dev.courses());
  for (const c of courseInfo) {
    if (c.manifestItems !== c.actualItems) fail(`course ${c.id}: manifest=${c.manifestItems} actual=${c.actualItems}`);
    if (c.badPrefix.length) fail(`course ${c.id}: bad-prefix ids: ${c.badPrefix.join(",")}`);
  }
  const ids = await page.evaluate(() => window.CODELAB.dev.ids());
  console.log(`  app booted, ${ids.length} lessons across ${courseInfo.length} courses`);

  for (const id of ids) {
    const kind = await page.evaluate((i) => window.CODELAB.dev.lesson(i).kind, id);
    if (kind === "quiz") {
      const r = await page.evaluate((i) => window.CODELAB.dev.run(i, true), id);
      if (r.invalid > 0) fail(`${id}: ${r.invalid} malformed quiz questions`);
      else ok(`${id} (quiz, ${r.questions} questions)`);
      continue;
    }
    const nSteps = await page.evaluate((i) => (window.CODELAB.dev.lesson(i).steps || []).length, id);
    let sol;
    try {
      sol = await page.evaluate((i) => window.CODELAB.dev.run(i, true), id);
    } catch (e) { fail(`${id}: solution run threw: ${e.message}`); continue; }
    const passed = (sol.steps || []).filter(s => s.pass).length;
    if (sol.timeout) fail(`${id}: solution TIMED OUT`);
    else if (passed !== nSteps || (sol.steps || []).length !== nSteps) {
      const bad = (sol.steps || []).filter(s => !s.pass).map(s => `#${s.i}: ${s.msg}`).join(" | ") || (sol.fatal ? "FATAL " + sol.fatal : "steps missing");
      fail(`${id}: solution passed ${passed}/${nSteps} — ${bad}`);
    } else ok(`${id} solution ${passed}/${nSteps}`);
    try {
      const st = await page.evaluate((i) => window.CODELAB.dev.run(i, false), id);
      const stPassed = (st.steps || []).filter(s => s.pass).length;
      if (!st.timeout && stPassed === nSteps && nSteps > 0) fail(`${id}: STARTER already passes all checks (lesson is trivial)`);
    } catch (e) { fail(`${id}: starter run threw: ${e.message}`); }
  }
  await ctx.close();

  /* ---- phase 2: mobile UI smoke test ---- */
  console.log("\n== Phase 2: mobile UI smoke test ==");
  const mob = await browser.newContext({
    viewport: { width: 390, height: 844 }, deviceScaleFactor: 2,
    isMobile: true, hasTouch: true,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
  });
  const mp = await mob.newPage();
  const mErrors = [];
  mp.on("pageerror", e => mErrors.push(String(e)));
  await mp.goto("http://localhost:5180/", { waitUntil: "load" });
  await mp.waitForSelector(".profiles", { timeout: 8000 });
  ok("profiles screen renders");
  await mp.screenshot({ path: SHOTS + "/1-profiles-mobile.png" });

  await mp.click(".pcard.add");
  await mp.fill(".pcard-input", "Eric");
  await mp.click(".pcard .btn");
  await mp.waitForSelector(".catalog", { timeout: 8000 });
  const cardCount = await mp.locator(".course-card").count();
  ok("profile created → catalog with " + cardCount + " course cards");
  await mp.screenshot({ path: SHOTS + "/2-catalog-mobile.png" });

  await mp.click(".course-card");                      // Learn HTML
  await mp.waitForSelector(".course-head", { timeout: 10000 });
  ok("course screen opens (lazy-loaded)");
  await mp.screenshot({ path: SHOTS + "/3-course-mobile.png" });

  await mp.click(".lrow");                             // first lesson
  await mp.waitForSelector(".lesson", { timeout: 8000 });
  ok("lesson workspace opens");
  await mp.click(".l-tab:nth-child(2)");
  const solHtml = await mp.evaluate(() => window.CODELAB.dev.lesson("html-1").solution["index.html"]);
  await mp.fill(".ed-ta", solHtml);
  await mp.screenshot({ path: SHOTS + "/4-lesson-code-mobile.png" });
  await mp.click(".btn-run");
  await mp.waitForSelector(".sheet-done", { timeout: 12000 });
  ok("Run → all checkpoints pass → completion sheet");
  await mp.screenshot({ path: SHOTS + "/5-lesson-done-mobile.png" });

  const sync = await mp.evaluate(() => {
    const a = JSON.parse(localStorage.getItem("academy_users_v1") || "null");
    const c = JSON.parse(localStorage.getItem("codelab_v1") || "null");
    return {
      academyUser: a && a.currentUser,
      completed: a && a.users && a.users.Eric && a.users.Eric.tracks && a.users.Eric.tracks.fullstack && a.users.Eric.tracks.fullstack.completed,
      xp: a && a.users && a.users.Eric && a.users.Eric.tracks.fullstack && a.users.Eric.tracks.fullstack.xp,
      streak: a && a.users.Eric.tracks.fullstack.streak,
      clDone: c && c.users && c.users.Eric && c.users.Eric.done,
      lastCourse: c && c.users && c.users.Eric && c.users.Eric.lastCourse
    };
  });
  if (sync.academyUser === "Eric" && sync.completed && sync.completed["html-1"] && sync.xp === 15 && sync.streak === 1 && sync.clDone["html-1"] && sync.lastCourse === "html") {
    ok("Academy store sync + lastCourse verified");
  } else {
    fail("Academy sync mismatch: " + JSON.stringify(sync));
  }

  await mp.click(".sheet-done .btn-green");
  await mp.waitForSelector(".lesson", { timeout: 8000 });
  const t2 = await mp.textContent(".l-title");
  ok("Next lesson opened: " + t2.trim());
  await mp.click(".l-x");
  await mp.waitForSelector(".course-head", { timeout: 8000 });
  const doneRows = await mp.locator(".lrow.done").count();
  if (doneRows >= 1) ok("course screen shows completed lesson"); else fail("course screen missing completed state");
  await mp.click(".course-back");
  await mp.waitForSelector(".catalog", { timeout: 8000 });
  const contBtn = await mp.locator(".course-card .cc-cta.cont").count();
  if (contBtn >= 1) ok("catalog card shows Continue state"); else fail("catalog card lacks progress state");

  /* ---- Recall smoke test ----
     Content-independent: the profile is seeded through a dev hook rather than
     by hoping the html course happens to hold a typed question today. */
  const rv = await mp.evaluate(async () => {
    const d = window.CODELAB.dev;
    await d.loadAll();
    const u = JSON.parse(localStorage.getItem("codelab_v1")).users.Eric;
    return { hasQuizHeuristic: window.CODELAB.review.hasEngagedQuiz(u) };
  });
  // "Eric" has completed html-1 only, so there is no finished quiz and the
  // entry point must stay hidden. A false positive here means an empty deck.
  if (rv.hasQuizHeuristic === false) ok("Recall entry point correctly hidden with no finished quiz");
  else fail("Recall offered itself with no completed quiz — the -quiz heuristic is wrong");

  const probe = await mp.evaluate(async () => {
    const d = window.CODELAB.dev, R = window.CODELAB.review;
    await d.loadAll();
    d.rev.markQuiz("html-quiz", 100);
    const pool = d.rev.pool();
    const typed = pool.filter(p => p.typed)[0];
    if (!typed) return { err: `no typed item in a ${pool.length}-item pool` };
    const today = d.rev.today();
    const before = d.rev.state();
    // Seed it as due today, then answer it correctly through the real grader.
    d.rev.seed({ [typed.key]: [0, today, 0, 0] });
    const dueBefore = R.dueCount(JSON.parse(localStorage.getItem("codelab_v1")).users.Eric, today);
    const res = d.rev.answer(typed.key, typed.answer);
    const after = d.rev.state();
    return {
      key: typed.key, answer: typed.answer, dueBefore, poolSize: pool.length,
      right: res && res.right, rec: res && res.rec, today,
      xpBefore: before.xp, xpAfter: after.xp,
      typedStats: after.stats
    };
  });
  if (probe.err) fail("Recall smoke: " + probe.err);
  else {
    if (probe.dueBefore === 1) ok("due count reads 1 from storage with no content loaded");
    else fail(`due count was ${probe.dueBefore}, expected 1`);
    if (probe.right === true) ok(`typed grading accepted the authored answer (${JSON.stringify(probe.answer)})`);
    else fail(`typed grading REJECTED its own authored answer ${JSON.stringify(probe.answer)} — normalize() is wrong`);
    if (probe.rec && probe.rec[0] === 1 && probe.rec[1] === probe.today + 1)
      ok("correct answer promoted box 0 → 1 and scheduled +1 day");
    else fail(`schedule after a correct answer was ${JSON.stringify(probe.rec)}, expected [1, ${probe.today + 1}, 0, 1]`);
    // The whole XP economy is bolted to the 304 catalog items; phase 2 also
    // asserts sync.xp === 15 exactly, so review must never touch it.
    if (probe.xpAfter === probe.xpBefore) ok("Recall awarded no XP (xp unchanged at " + probe.xpAfter + ")");
    else fail(`Recall changed XP from ${probe.xpBefore} to ${probe.xpAfter} — review must not pay XP`);
    if (probe.typedStats && probe.typedStats.ta === 1 && probe.typedStats.tc === 1)
      ok("typed accuracy tracked separately from self-reported");
    else fail("typed stats not recorded: " + JSON.stringify(probe.typedStats));
  }

  // The review screen renders, offers exactly the seeded card, and drills it.
  const seeded = await mp.evaluate(() => {
    const d = window.CODELAB.dev, R = window.CODELAB.review;
    const pool = d.rev.pool();
    const item = pool.filter(p => p.typed)[0];
    d.rev.seed({ [item.key]: [0, d.rev.today(), 0, 0] });
    d.rev.open();
    // 1 due card, plus introductions in their RESERVED slots — capped by the
    // per-day cap, the session cap, and how many questions exist at all.
    const intros = Math.min(R.NEW_PER_DAY, pool.length - 1, R.MAX_SESSION - 1);
    return { key: item.key, poolSize: pool.length, expected: 1 + intros };
  });
  await mp.waitForSelector(".rv-head", { timeout: 8000 });
  const rvTitle = (await mp.textContent(".rv-head .hero-title") || "").trim();
  if (rvTitle === seeded.expected + " cards today")
    ok(`Recall home offers ${seeded.expected} = 1 due + ${seeded.expected - 1} new, from a ${seeded.poolSize}-question pool`);
  else fail(`Recall home said "${rvTitle}", expected "${seeded.expected} cards today" (pool ${seeded.poolSize})`);
  await mp.screenshot({ path: SHOTS + "/6-recall-mobile.png" });

  await mp.click(".rv-head .btn-green");
  await mp.waitForSelector(".quiz-in .q-prompt", { timeout: 8000 });
  const card = await mp.evaluate(() => ({
    prompt: (document.querySelector(".q-prompt") || {}).textContent || "",
    hasInput: !!document.querySelector(".rv-input"),
    // A self-graded card reveals first; the grade buttons only exist after.
    hasReveal: [...document.querySelectorAll(".quiz-in .btn")].some(b => /show answer/i.test(b.textContent)),
    // The whole point: the four authored choices must NOT be on screen.
    choices: document.querySelectorAll(".q-choice").length,
    canSkip: !!document.querySelector(".rv-cant"),
    src: (document.querySelector(".rv-src") || {}).textContent || ""
  }));
  if (card.prompt.trim().length > 0) ok("card renders its prompt: " + card.prompt.slice(0, 44).trim() + "…");
  else fail("card rendered with an empty prompt");
  if (card.choices === 0) ok("free recall confirmed — zero choice buttons on screen");
  else fail(`${card.choices} multiple-choice buttons rendered — Recall must hide the distractors`);
  // The queue is interleaved, so which card lands first is not fixed — but it
  // must be exactly one of the two answer modes, never both and never neither.
  if (card.hasInput !== card.hasReveal)
    ok(`card offers ${card.hasInput ? "a typed input" : "reveal-then-self-grade"}, source chip: ${card.src.trim()}`);
  else fail(`card had input=${card.hasInput} and reveal=${card.hasReveal} — exactly one must render`);
  if (card.canSkip) ok("\"can't answer this one\" is offered");
  else fail("no skip affordance — the tombstone is how eligibility gets measured");
  await mp.screenshot({ path: SHOTS + "/6b-recall-card-mobile.png" });

  /* ---- Tier B: checkpoint-prefix drills ----
     The regression that must never rot: a drill opens from the STARTER, and
     the learner's saved solution comes back untouched. */
  const drill = await mp.evaluate(async () => {
    const d = window.CODELAB.dev, R = window.CODELAB.review;
    await d.loadAll();
    // Give the profile a finished coding lesson WITH saved code, so there is
    // something to accidentally clobber.
    const raw = JSON.parse(localStorage.getItem("codelab_v1"));
    const lessonId = "html-1";
    const lesson = d.lesson(lessonId);
    const fingerprint = "/* MY SAVED SOLUTION — must survive */";
    const savedFiles = {};
    (lesson.files || []).forEach(f => { savedFiles[f.name] = f.content + "\n" + fingerprint; });
    d.rev.seed({});
    const u = raw.users.Eric;
    return { lessonId, fingerprint, savedFiles, steps: (lesson.steps || []).length };
  });

  const drillProbe = await mp.evaluate(async (fx) => {
    const d = window.CODELAB.dev, R = window.CODELAB.review;
    // Plant saved code through the live store, then open a drill on it.
    const before = d.rev.drillState(fx.lessonId);
    d.setCodeForTest(fx.lessonId, fx.savedFiles);
    const pick = {
      key: R.drillKey(fx.lessonId), lessonId: fx.lessonId, courseId: "html",
      unitId: null, title: "test", steps: fx.steps, k: 0
    };
    d.rev.startDrill(pick);
    await new Promise(r => setTimeout(r, 900));
    const shown = d.editorFiles();
    const after = d.rev.drillState(fx.lessonId);
    return {
      shown, savedAfter: after.savedCode,
      kicker: (document.querySelector(".l-kicker") || {}).textContent || "",
      badge: (document.querySelector(".l-badge") || {}).textContent || "",
      checkpoints: document.querySelectorAll(".pane-learn .chk").length,
      solutionLocked: [...document.querySelectorAll(".help-row .btn")].some(b => /🔒/.test(b.textContent))
    };
  }, drill);

  const leaked = JSON.stringify(drillProbe.shown || {}).indexOf(drill.fingerprint) !== -1;
  if (!leaked) ok("drill opened from the STARTER — no saved solution in the editor");
  else fail("DRILL LEAKED THE SAVED SOLUTION into the editor — the whole tier is pointless");
  const preserved = JSON.stringify(drillProbe.savedAfter || {}).indexOf(drill.fingerprint) !== -1;
  if (preserved) ok("the saved solution survived the drill byte-for-byte");
  else fail("the drill OVERWROTE u.code — saved solution lost");
  if (/DRILL/.test(drillProbe.kicker)) ok("drill kicker shown: " + drillProbe.kicker.trim());
  else fail(`drill kicker missing, got "${drillProbe.kicker}"`);
  // k=0 means exactly one checkpoint is in play, however long the lesson is.
  if (drillProbe.checkpoints === 1) ok(`prefix grading: 1 of ${drill.steps} checkpoints shown at box 0`);
  else fail(`drill showed ${drillProbe.checkpoints} checkpoints at k=0, expected 1`);
  if (drillProbe.solutionLocked) ok("solution locked until the first graded run");
  else fail("solution was available before any attempt");
  await mp.screenshot({ path: SHOTS + "/6c-recall-drill-mobile.png" });

  // A failing run first: it must persist the scratch buffer and settle nothing.
  const failedRun = await mp.evaluate(async (fx) => {
    const d = window.CODELAB.dev;
    const idle = async () => {
      // A run is in flight until the button re-enables. Clicking again before
      // then is silently dropped by doRun's `current.running` guard.
      for (let i = 0; i < 90; i++) {
        const b = document.querySelector(".btn-run");
        if (b && !b.disabled) return true;
        await new Promise(r => setTimeout(r, 200));
      }
      return false;
    };
    const wipe = {};
    Object.keys(d.editorFiles() || {}).forEach(n => { wipe[n] = ""; });
    d.setEditorFiles(wipe);
    document.querySelector(".btn-run").click();
    const settled = await idle();
    const st = d.rev.drillState(fx.lessonId);
    return { rec: st.rec, scratch: !!st.scratch, settled, stillInDrill: !!document.querySelector(".l-kicker.drill") };
  }, drill);
  if (failedRun.settled) ok("failing run completed and the Run button re-armed");
  else fail("the drill run never finished — Run stayed disabled");
  if (failedRun.scratch) ok("a failing run persists the scratch buffer (drillCode, not code)");
  else fail("scratch buffer was never written — the drill has no crash recovery");
  if (failedRun.rec === null) ok("a failing run settles nothing — the drill stays open");
  else fail(`a failing run wrote a schedule record ${JSON.stringify(failedRun.rec)}`);

  // Now solve it and confirm the ladder moves and the scratch is reclaimed.
  const solved = await mp.evaluate(async (fx) => {
    const d = window.CODELAB.dev;
    const lesson = d.lesson(fx.lessonId);
    d.setEditorFiles(lesson.solution);
    document.querySelector(".btn-run").click();
    for (let i = 0; i < 90 && !d.rev.drillState(fx.lessonId).rec; i++) await new Promise(r => setTimeout(r, 200));
    const st = d.rev.drillState(fx.lessonId);
    return { rec: st.rec, scratch: st.scratch, savedCode: st.savedCode, today: d.rev.today() };
  }, drill);
  // Clean pass at box 0 → box 1, and D_IV[1] is 3 days. It lands on "close"
  // rather than "got" here because the failing run above is part of the record.
  if (solved.rec && solved.rec[0] >= 0 && solved.rec[1] > solved.today)
    ok(`drill settled → box ${solved.rec[0]}, due in ${solved.rec[1] - solved.today} day(s), ${solved.rec[3]} review(s)`);
  else fail(`drill schedule after a pass was ${JSON.stringify(solved.rec)}, expected a real record`);
  if (!solved.scratch) ok("scratch buffer reclaimed on pass — never becomes a second answer key");
  else fail("drillCode survived a passing drill");
  if (JSON.stringify(solved.savedCode || {}).indexOf(drill.fingerprint) !== -1)
    ok("saved solution STILL intact after a full drill cycle");
  else fail("the saved solution was lost somewhere in the drill cycle");

  /* Concurrency: background prefetch makes two loadCourse calls for the same
     course near-certain, and a double registration halves every percentage. */
  const conc = await mp.evaluate(async () => {
    const c = window.CODELAB._byId.dom;
    const before = c.units.length;
    c._loaded = false; c._loading = null;
    await Promise.all([window.CODELAB.dev.loadCourse(c), window.CODELAB.dev.loadCourse(c)]);
    return { before, after: c.units.length };
  });
  if (conc.before === conc.after) ok(`concurrent loadCourse is safe (${conc.after} units, unchanged)`);
  else fail(`concurrent loadCourse duplicated units: ${conc.before} → ${conc.after}`);

  if (mErrors.length) fail("mobile page errors: " + mErrors.slice(0, 3).join(" ; "));
  await mob.close();

  /* ---- desktop screenshots ---- */
  const desk = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const dp = await desk.newPage();
  await dp.goto("http://localhost:5180/", { waitUntil: "load" });
  await dp.waitForSelector(".profiles", { timeout: 8000 });
  await dp.click(".pcard.add");
  await dp.fill(".pcard-input", "Desktop Demo");
  await dp.click(".pcard .btn");
  await dp.waitForSelector(".catalog", { timeout: 8000 });
  await dp.screenshot({ path: SHOTS + "/7-catalog-desktop.png" });
  await dp.click(".course-card");
  await dp.waitForSelector(".course-head", { timeout: 10000 });
  await dp.click(".lrow");
  await dp.waitForSelector(".lesson", { timeout: 8000 });
  await dp.waitForTimeout(600);
  await dp.screenshot({ path: SHOTS + "/8-lesson-desktop.png" });
  ok("desktop screenshots captured");
  await desk.close();

  await browser.close();
  server.kill();

  console.log("\n==================================");
  if (failures.length) {
    console.log("FAILURES: " + failures.length);
    failures.forEach(f => console.log("  ✗ " + f));
    process.exit(1);
  } else {
    console.log("ALL VALIDATION PASSED ✅");
  }
}

main().catch(e => { console.error("HARNESS ERROR:", e); process.exit(2); });
