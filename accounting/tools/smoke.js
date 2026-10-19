#!/usr/bin/env node
/* ============================================================
   Browser smoke test: drives the real app in Chromium from a fresh
   profile and works EVERY exercise in EVERY lesson through the UI
   using its answer key — so a key the editor can't express, or a
   check the page gets wrong, fails here. Along the way it checks
   the wrong-answer feedback and "Show answer", then that progress
   lands in Academy's store and on its picker card.

     node tools/smoke.js                  run the checks
     node tools/smoke.js --shots <dir>    also save screenshots
                                          (phone + desktop, light + dark)

   Needs Playwright (playwright or playwright-core) and a Chromium,
   found via CHROMIUM_PATH, then Playwright's own install.
   ============================================================ */
const fs = require("fs");
const http = require("http");
const path = require("path");
const { load } = require("./load");

let pw;
try { pw = require("playwright-core"); } catch (e) {
  try { pw = require("playwright"); } catch (e2) {
    console.log("Playwright isn't installed: npm i -D playwright-core (or set NODE_PATH to a global install).");
    process.exit(2);
  }
}

const ACADEMY = path.join(__dirname, "..", "..");
const shotsAt = process.argv.indexOf("--shots");
const SHOTS = shotsAt > -1 ? path.resolve(process.argv[shotsAt + 1]) : null;
if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });
const { L } = load();

const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg" };
function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split("?")[0]);
      if (p.endsWith("/")) p += "index.html";
      const f = path.join(ACADEMY, p);
      if (!f.startsWith(ACADEMY)) { res.writeHead(403); res.end(); return; }
      fs.readFile(f, (err, data) => {
        if (err) { res.writeHead(404); res.end("not found"); return; }
        res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" });
        res.end(data);
      });
    });
    srv.listen(0, "127.0.0.1", () => resolve(srv));
  });
}
function findChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const roots = [process.env.PLAYWRIGHT_BROWSERS_PATH, "/opt/pw-browsers"].filter(Boolean);
  for (const r of roots) {
    if (!fs.existsSync(r)) continue;
    const dir = fs.readdirSync(r).filter((d) => /^chromium-\d+$/.test(d)).sort().pop();
    if (dir) {
      const exe = path.join(r, dir, "chrome-linux", "chrome");
      if (fs.existsSync(exe)) return exe;
    }
  }
  return undefined;
}

let failures = 0;
function check(name, ok, detail) {
  if (ok) console.log("ok    " + name);
  else { failures++; console.log("FAIL  " + name + (detail ? "  (" + detail + ")" : "")); }
}

/* Fill the current (last) exercise card with the answer key. */
async function answer(step, ex) {
  if (ex.type === "number") {
    await step.locator(".num-input input").fill(String(ex.answer));
  } else if (ex.type === "choice") {
    await step.locator(".choice").nth(ex.answer).click();
  } else if (ex.type === "classify") {
    const ids = ex.cats.map((c) => c[0]);
    for (let i = 0; i < ex.items.length; i++) {
      await step.locator(".cl-row").nth(i).locator(".pill").nth(ids.indexOf(ex.items[i][1])).click();
    }
  } else if (ex.type === "entry") {
    const rows = step.locator(".je-row");
    while (await rows.count() < ex.lines.length) await step.locator(".link-btn").click();
    for (let i = 0; i < ex.lines.length; i++) {
      const ln = ex.lines[i], r = rows.nth(i);
      await r.locator("select").selectOption(ln.acct);
      await r.locator(ln.dr ? 'input[aria-label="Debit"]' : 'input[aria-label="Credit"]').fill(String(ln.dr || ln.cr));
    }
  }
}

(async () => {
  const srv = await serve();
  const base = "http://127.0.0.1:" + srv.address().port;
  const browser = await pw.chromium.launch({ executablePath: findChromium() });
  const errors = [];
  const ctx = await browser.newContext({ viewport: { width: 1100, height: 900 } });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => { if (r.status() >= 400 && !/favicon\.ico$/.test(r.url())) errors.push(r.status() + " " + r.url()); });

  /* fresh profile */
  await page.goto(base + "/accounting/");
  await page.waitForSelector(".new-profile input");
  check("first run asks who's studying", /Who's studying/.test(await page.textContent("h1")));
  await page.fill(".new-profile input", "Smoke Tester");
  await page.click(".new-profile button");
  await page.waitForSelector(".continue");
  check("home shows the first lesson to start", (await page.textContent(".continue")).indexOf(L.allLessons()[0].title) !== -1);
  check("home lists every unit", (await page.locator(".unit-card").count()) === L.units.length);

  /* the chart */
  await page.goto(base + "/accounting/#/chart");
  await page.fill(".search", "payable");
  const coaRows = await page.locator("table.coa tr").count();
  check("chart search filters accounts", coaRows > 0 && coaRows < L.accounts.length, coaRows + " rows");

  /* feedback on a wrong entry, then "Show answer" */
  const firstEntryLesson = L.allLessons().find((l) => l.steps.some((s) => s.type === "entry"));
  let probed = false;

  /* every lesson, every exercise */
  let solved = 0;
  for (const lesson of L.allLessons()) {
    await page.goto(base + "/accounting/#/l/" + lesson.id);
    await page.waitForSelector(".step");
    for (let i = 0; i < lesson.steps.length; i++) {
      const ex = lesson.steps[i];
      const step = page.locator(".step").nth(i);
      if (!probed && lesson === firstEntryLesson && ex.type === "entry") {
        probed = true;
        const r0 = step.locator(".je-row").nth(0), r1 = step.locator(".je-row").nth(1);
        await r0.locator("select").selectOption(ex.lines[0].acct);
        await r0.locator('input[aria-label="Debit"]').fill("100");
        await r1.locator("select").selectOption(ex.lines[1].acct);
        await r1.locator('input[aria-label="Credit"]').fill("90");
        check("live totals flag an unbalanced entry", /Off by \$10/.test(await step.locator(".je-totals").textContent()));
        await step.locator(".step-actions .btn", { hasText: "Check" }).click();
        check("checking an unbalanced entry says so", /don't equal credits/.test(await step.locator(".feedback").textContent()));
        await step.locator(".step-actions .btn", { hasText: "Check" }).click();
        await step.locator("button", { hasText: "Show answer" }).click();
        check("Show answer fills in the key", (await step.locator(".je-row").count()) === ex.lines.length &&
          /Balanced/.test(await step.locator(".je-totals").textContent()));
        await step.locator(".step-actions .btn", { hasText: "Continue" }).click();
        solved++;
        continue;
      }
      await answer(step, ex);
      await step.locator(".step-actions .btn", { hasText: "Check" }).click();
      const fb = step.locator(".feedback");
      const ok = (await fb.getAttribute("class")).indexOf("ok") !== -1;
      if (!ok) { check(lesson.id + " exercise " + (i + 1) + " accepts its answer key", false, (await fb.textContent()).slice(0, 140)); break; }
      solved++;
      await step.locator(".step-actions .btn", { hasText: "Continue" }).click();
    }
    const finished = await page.locator(".finish").count();
    if (!finished) check(lesson.id + " finishes", false);
  }
  const total = L.allLessons().reduce((s, l) => s + l.steps.length, 0);
  check("every exercise accepts its answer key through the UI", solved === total, solved + "/" + total);

  /* progress and the Academy bridge */
  const store = await page.evaluate(() => JSON.parse(localStorage.getItem("academy_users_v1")));
  const mirror = store && store.users && store.users["Smoke Tester"] && store.users["Smoke Tester"].tracks.accounting;
  const lessons = L.allLessons().length;
  const wantXp = lessons * L.XP_PER_LESSON + L.units.length * L.XP_PER_UNIT;
  check("Academy store has the accounting track", !!mirror);
  check("every lesson is mirrored as completed", mirror && Object.keys(mirror.completed).length === lessons);
  check("XP is 10 per lesson + 20 per unit", mirror && mirror.xp === wantXp, mirror && mirror.xp + " vs " + wantXp);
  check("streak is 1 after studying today", mirror && mirror.streak === 1);
  await page.goto(base + "/");
  await page.waitForSelector(".track-card");
  const card = page.locator(".track-card", { hasText: "Accounting Lab" });
  check("Academy shows the Accounting Lab card", (await card.count()) === 1);
  if (await card.count()) check("the card shows live progress", new RegExp(lessons + " done · " + wantXp + " XP").test(await card.textContent()));

  check("no page errors", errors.length === 0, errors.slice(0, 3).join(" | "));

  /* screenshots */
  if (SHOTS) {
    const sample = L.allLessons().find((l) => l.steps[0].type === "entry") || L.allLessons()[0];
    for (const scheme of ["light", "dark"]) {
      for (const vp of [{ n: "phone", w: 390, h: 844 }, { n: "desktop", w: 1280, h: 900 }]) {
        const c = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, colorScheme: scheme });
        const p = await c.newPage();
        await p.goto(base + "/accounting/");
        await p.evaluate(() => localStorage.setItem("academy_users_v1", JSON.stringify({ currentUser: "Eric", users: { Eric: { tracks: {} } } })));
        await p.reload();
        await p.waitForSelector(".continue");
        await p.screenshot({ path: path.join(SHOTS, "home-" + vp.n + "-" + scheme + ".png"), fullPage: false });
        await p.goto(base + "/accounting/#/l/" + sample.id);
        await p.waitForSelector(".step");
        await p.locator(".step").first().scrollIntoViewIfNeeded();
        await p.screenshot({ path: path.join(SHOTS, "lesson-" + vp.n + "-" + scheme + ".png"), fullPage: false });
        await c.close();
      }
    }
    console.log("screenshots in " + SHOTS);
  }

  await browser.close();
  srv.close();
  console.log(failures ? failures + " check(s) FAILED" : "all checks passed");
  process.exitCode = failures ? 1 : 0;
})().catch((e) => { console.error(e); process.exit(1); });
