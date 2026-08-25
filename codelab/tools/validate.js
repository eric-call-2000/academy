/* CodeLab validation harness.
   Phase 0: static curriculum shape checks (node).
   Phase 1: every lesson's SOLUTION must pass all checkpoints in real Chromium;
            every lesson's STARTER must NOT pass them all.
   Phase 2: full mobile UI smoke test + Academy-store sync + screenshots. */
const { chromium } = require("playwright-core");
const { spawn } = require("child_process");
const path = require("path");

const ROOT = require("path").join(__dirname, "..");
const SHOTS = path.join(__dirname, "shots");
require("fs").mkdirSync(SHOTS, { recursive: true });

let failures = [];
function fail(msg) { failures.push(msg); console.log("  ✗ " + msg); }
function ok(msg) { console.log("  ✓ " + msg); }

/* ---------------- phase 0: static checks ---------------- */
function phase0() {
  console.log("\n== Phase 0: static curriculum checks ==");
  global.window = { CODELAB: {} };
  window.CODELAB.units = [];
  window.CODELAB.addUnit = (u) => { u.lessons = u.lessons || []; window.CODELAB.units.push(u); };
  const units = ["unit1-html", "unit2-css", "unit3-layout", "unit4-js1", "unit5-js2", "unit6-dom", "unit7-async", "unit8-backend", "unit9-capstone"];
  for (const u of units) require(path.join(ROOT, u + ".js"));

  const ids = new Set();
  let lessons = 0, quizzes = 0, projects = 0, steps = 0, questions = 0;
  for (const unit of window.CODELAB.units) {
    if (!unit.cheat || !unit.cheat.length) fail(`unit ${unit.id}: missing cheatsheet`);
    for (const l of unit.lessons) {
      if (ids.has(l.id)) fail(`duplicate lesson id: ${l.id}`);
      ids.add(l.id);
      if (l.kind === "quiz") {
        quizzes++;
        questions += (l.questions || []).length;
        if (!l.questions || l.questions.length < 5) fail(`${l.id}: quiz has <5 questions`);
        (l.questions || []).forEach((q, i) => {
          if (!q.q || !q.choices || q.answer == null || !q.choices[q.answer] || !q.explain)
            fail(`${l.id} q${i}: malformed question`);
        });
      } else {
        lessons++;
        if (l.project) projects++;
        steps += (l.steps || []).length;
        if (!l.steps || !l.steps.length) fail(`${l.id}: no steps`);
        if (!l.files || !l.files.length) fail(`${l.id}: no files`);
        if (!l.solution) fail(`${l.id}: no solution`);
        if (!l.hints || !l.hints.length) fail(`${l.id}: no hints`);
        if (l.solution) for (const k of Object.keys(l.solution)) {
          if (!(l.files || []).some(f => f.name === k)) fail(`${l.id}: solution file ${k} not in files[]`);
        }
      }
      if (!l.brief && l.kind !== "quiz") fail(`${l.id}: no brief`);
    }
  }
  console.log(`  units=${window.CODELAB.units.length} coding=${lessons} (projects=${projects}) quizzes=${quizzes} checkpoints=${steps} quizQuestions=${questions}`);
  delete global.window;
  return { total: lessons + quizzes };
}

/* ---------------- phases 1+2: browser ---------------- */
async function main() {
  phase0();

  const server = spawn("node", ["server.js"], { cwd: ROOT, stdio: "ignore" });
  await new Promise(r => setTimeout(r, 700));

  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium", headless: true });

  /* ---- phase 1: run every lesson through the real sandbox ---- */
  console.log("\n== Phase 1: solution/starter runs in Chromium ==");
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const pageErrors = [];
  page.on("pageerror", e => pageErrors.push(String(e)));
  await page.goto("http://localhost:5180/", { waitUntil: "load" });
  await page.waitForFunction(() => window.CODELAB && window.CODELAB.dev && window.CODELAB.dev.ids().length > 0, null, { timeout: 10000 });
  if (pageErrors.length) fail("app boot errors: " + pageErrors.join(" ; "));
  const ids = await page.evaluate(() => window.CODELAB.dev.ids());
  console.log(`  app booted, ${ids.length} lessons registered`);

  for (const id of ids) {
    const kind = await page.evaluate((i) => window.CODELAB.dev.lesson(i).kind, id);
    if (kind === "quiz") {
      const r = await page.evaluate((i) => window.CODELAB.dev.run(i, true), id);
      if (r.invalid > 0) fail(`${id}: ${r.invalid} malformed quiz questions`);
      else ok(`${id} (quiz, ${r.questions} questions)`);
      continue;
    }
    const nSteps = await page.evaluate((i) => (window.CODELAB.dev.lesson(i).steps || []).length, id);
    // solution must fully pass
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
    // starter must NOT fully pass
    let st;
    try {
      st = await page.evaluate((i) => window.CODELAB.dev.run(i, false), id);
      const stPassed = (st.steps || []).filter(s => s.pass).length;
      if (!st.timeout && stPassed === nSteps && nSteps > 0) fail(`${id}: STARTER already passes all checks (lesson is trivial)`);
    } catch (e) { fail(`${id}: starter run threw: ${e.message}`); }
  }
  // (uncaught errors from STARTER code inside the sandbox are expected — not checked here)
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
  await mp.waitForSelector(".hero", { timeout: 8000 });
  ok("profile created → path screen");
  await mp.screenshot({ path: SHOTS + "/2-path-mobile.png", fullPage: false });

  // open first lesson
  await mp.click(".lrow");
  await mp.waitForSelector(".lesson", { timeout: 8000 });
  ok("lesson workspace opens");
  await mp.screenshot({ path: SHOTS + "/3-lesson-learn-mobile.png" });

  // go to Code tab, paste solution, run
  await mp.click(".l-tab:nth-child(2)");
  const solHtml = await mp.evaluate(() => window.CODELAB.dev.lesson("html-1").solution["index.html"]);
  await mp.fill(".ed-ta", solHtml);
  await mp.screenshot({ path: SHOTS + "/4-lesson-code-mobile.png" });
  await mp.click(".btn-run");
  await mp.waitForSelector(".sheet-done", { timeout: 12000 });
  ok("Run → all checkpoints pass → completion sheet");
  await mp.screenshot({ path: SHOTS + "/5-lesson-done-mobile.png" });

  // academy store sync
  const sync = await mp.evaluate(() => {
    const a = JSON.parse(localStorage.getItem("academy_users_v1") || "null");
    const c = JSON.parse(localStorage.getItem("codelab_v1") || "null");
    return {
      academyUser: a && a.currentUser,
      completed: a && a.users && a.users.Eric && a.users.Eric.tracks && a.users.Eric.tracks.fullstack && a.users.Eric.tracks.fullstack.completed,
      xp: a && a.users && a.users.Eric && a.users.Eric.tracks.fullstack && a.users.Eric.tracks.fullstack.xp,
      streak: a && a.users.Eric.tracks.fullstack.streak,
      clDone: c && c.users && c.users.Eric && c.users.Eric.done
    };
  });
  if (sync.academyUser === "Eric" && sync.completed && sync.completed["html-1"] && sync.xp === 15 && sync.streak === 1 && sync.clDone["html-1"]) {
    ok("Academy store sync verified (profile, completed, +15 XP, streak 1)");
  } else {
    fail("Academy sync mismatch: " + JSON.stringify(sync));
  }

  // continue to next lesson via sheet
  await mp.click(".sheet-done .btn-green");
  await mp.waitForSelector(".lesson", { timeout: 8000 });
  const kicker = await mp.textContent(".l-title");
  ok("Next lesson opened: " + kicker.trim());
  // check preview tab shows an iframe for web lessons
  await mp.click(".l-tab:nth-child(3)");
  await mp.waitForSelector(".preview-frame", { timeout: 8000 });
  ok("preview iframe mounts on Result tab");
  await mp.screenshot({ path: SHOTS + "/6-lesson-result-mobile.png" });
  // back to path — lesson 1 should be done
  await mp.click(".l-x");
  await mp.waitForSelector(".hero", { timeout: 8000 });
  const doneRows = await mp.locator(".lrow.done").count();
  if (doneRows >= 1) ok("path shows completed lesson"); else fail("path does not show completed lesson");

  // quiz UI spot-check: jump the store so the quiz is unlocked? Instead run quiz via direct open:
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
  await dp.waitForSelector(".hero", { timeout: 8000 });
  await dp.screenshot({ path: SHOTS + "/7-path-desktop.png" });
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
