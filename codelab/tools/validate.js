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
  delete global.window;
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
