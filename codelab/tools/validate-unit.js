/* Focused validator: run ONE unit's lessons through the real sandbox.
   Usage:  node tools/validate-unit.js <id-prefix> [--port 5299]
   e.g.    node tools/validate-unit.js test-u3 --port 5203

   Same contract as validate.js phase 1 — every solution must pass every
   checkpoint, every starter must fail at least one — but scoped to the
   lessons whose id starts with the prefix, so an author can iterate in
   ~20s instead of the 12-minute full run. Quizzes get the malformed-
   question check. This does NOT replace the full run; it is the inner
   loop. */
const { chromium } = require("playwright-core");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const ROOT = path.join(__dirname, "..");
const prefix = process.argv[2];
const portIx = process.argv.indexOf("--port");
const PORT = portIx !== -1 ? Number(process.argv[portIx + 1]) : 5299;
if (!prefix) { console.error("usage: node tools/validate-unit.js <id-prefix> [--port N]"); process.exit(2); }

function findBrowser() {
  const candidates = [
    process.env.CHROMIUM_PATH,
    process.env.ProgramFiles && path.join(process.env.ProgramFiles, "Google/Chrome/Application/chrome.exe"),
    process.env["ProgramFiles(x86)"] && path.join(process.env["ProgramFiles(x86)"], "Google/Chrome/Application/chrome.exe"),
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Google/Chrome/Application/chrome.exe"),
    process.env["ProgramFiles(x86)"] && path.join(process.env["ProgramFiles(x86)"], "Microsoft/Edge/Application/msedge.exe"),
    process.env.ProgramFiles && path.join(process.env.ProgramFiles, "Microsoft/Edge/Application/msedge.exe"),
    "/opt/pw-browsers/chromium",
  ].filter(Boolean);
  for (const c of candidates) { try { if (fs.existsSync(c)) return c; } catch (e) {} }
  console.error("No Chromium found — install Chrome/Edge or set CHROMIUM_PATH.");
  process.exit(2);
}

let failures = [];
function fail(msg) { failures.push(msg); console.log("  ✗ " + msg); }
function ok(msg) { console.log("  ✓ " + msg); }

async function main() {
  const server = spawn("node", ["server.js"], { cwd: ROOT, stdio: "ignore", env: { ...process.env, PORT: String(PORT) } });
  await new Promise(r => setTimeout(r, 700));
  const browser = await chromium.launch({ executablePath: findBrowser(), headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const pageErrors = [];
  page.on("pageerror", e => pageErrors.push(String(e)));
  await page.goto("http://localhost:" + PORT + "/", { waitUntil: "load" });
  await page.waitForFunction(() => window.CODELAB && window.CODELAB.dev, null, { timeout: 10000 });
  if (pageErrors.length) fail("app boot errors: " + pageErrors.join(" ; "));
  await page.evaluate(() => window.CODELAB.dev.loadAll());
  const ids = (await page.evaluate(() => window.CODELAB.dev.ids())).filter(i => i.indexOf(prefix) === 0);
  if (!ids.length) fail(`no lessons match prefix "${prefix}" — is the unit file registered in courses.js and syntactically valid?`);
  console.log(`${ids.length} lessons match "${prefix}"`);

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
    try { sol = await page.evaluate((i) => window.CODELAB.dev.run(i, true), id); }
    catch (e) { fail(`${id}: solution run threw: ${e.message}`); continue; }
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

  await browser.close();
  server.kill();
  console.log(failures.length ? `\nFAILURES: ${failures.length}` : "\nUNIT OK ✅");
  process.exit(failures.length ? 1 : 0);
}

main().catch(e => { console.error("HARNESS ERROR:", e); process.exit(2); });
