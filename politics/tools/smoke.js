#!/usr/bin/env node
/* ============================================================
   Browser smoke test: drives the real app in Chromium from a fresh
   profile through reading, finishing, the glossary, the Atlas and the
   world map (with the US–China relationship briefings),
   and checks that progress lands in Academy's store and on its
   picker card.

     node tools/smoke.js                     run the checks
     node tools/smoke.js --shots <dir>       also save screenshots
                                             (phone + desktop, light + dark)

   Needs Playwright (playwright or playwright-core) and a Chromium.
   The browser is found via CHROMIUM_PATH, then Playwright's own
   install; missing pictures (pending illustrations) are expected
   and not counted as errors.
   ============================================================ */
const fs = require("fs");
const http = require("http");
const path = require("path");

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
  return undefined;   // let Playwright use its default
}

let failures = 0;
function check(name, ok, detail) {
  if (ok) console.log("ok    " + name);
  else { failures++; console.log("FAIL  " + name + (detail ? "  (" + detail + ")" : "")); }
}

(async () => {
  const srv = await serve();
  const base = "http://127.0.0.1:" + srv.address().port;
  const browser = await pw.chromium.launch({ executablePath: findChromium() });
  const errors = [];

  async function newPage(opts) {
    const ctx = await browser.newContext(Object.assign({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 }, opts || {}));
    const page = await ctx.newPage();
    page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
    page.on("console", (m) => {
      if (m.type() !== "error") return;
      if (/Failed to load resource/.test(m.text())) return;   // pending pictures 404 by design
      errors.push("console: " + m.text());
    });
    page.on("dialog", (d) => d.accept("Sam"));
    return { ctx, page };
  }
  const shot = async (page, name) => { if (SHOTS) await page.screenshot({ path: path.join(SHOTS, name + ".png"), fullPage: false }); };

  /* 1. A reader who comes from Academy is adopted automatically. */
  const { ctx, page } = await newPage();
  await page.goto(base + "/politics/");
  await page.waitForSelector(".profiles");
  check("fresh visit shows the profile screen", await page.isVisible("text=Create your profile"));
  await page.click(".profile-card.add");
  await page.waitForSelector(".lesson-card");
  check("new profile lands on Today", await page.isVisible("text=Today's briefing"));
  const firstTitle = await page.textContent(".lesson-card-title");
  check("Today offers the first briefing", /in brief/.test(firstTitle), firstTitle);
  await shot(page, "phone-today");

  /* 2. Read briefing 1: glossary chip, quick check, finish. */
  await page.click(".lesson-card");
  await page.waitForSelector(".reader h1");
  check("reader opens us-1", (await page.textContent(".reader h1")).indexOf("in brief") > -1);
  const mapOk = await page.$eval(".fig-map img", (i) => i.complete && i.naturalWidth > 0);
  check("locator map renders", mapOk);
  await shot(page, "phone-reader-top");
  await page.click(".reader .term >> nth=0");
  await page.waitForSelector(".sheet-title");
  await page.waitForTimeout(400);
  check("glossary chip opens a definition", (await page.textContent(".sheet-title")).length > 1);
  await shot(page, "phone-glossary-sheet");
  await page.keyboard.press("Escape");
  check("Escape closes the sheet", !(await page.$(".sheet")));
  await page.click(".check-choice >> nth=0");
  check("quick check explains itself", await page.isVisible(".check-explain.show"));
  await page.click(".btn-finish");
  await page.waitForSelector(".celebrate");
  check("finishing pays +10 XP", /\+10 XP/.test(await page.textContent(".celebrate")));
  await page.waitForTimeout(700);   // let the scroll and pop animation settle
  await shot(page, "phone-finished");

  /* 3. Progress reached Academy's store. */
  const academy = await page.evaluate(() => JSON.parse(localStorage.getItem("academy_users_v1")));
  const track = academy && academy.users && academy.users.Sam && academy.users.Sam.tracks.politics;
  check("Academy store has the politics track", !!track);
  check("…with us-1 completed and 10 XP", track && track.completed["us-1"] === true && track.xp === 10, JSON.stringify(track));
  check("…and a one-day streak", track && track.streak === 1);

  /* 4. Next briefing: the diagram, then a story with a pending illustration. */
  await page.click("text=Next briefing");
  await page.waitForSelector(".fig-diagram img");
  check("briefing 2 shows the power diagram", await page.$eval(".fig-diagram img", (i) => i.complete && i.naturalWidth > 0));
  await page.goto(base + "/politics/#/read/us-5");
  await page.waitForSelector(".reader h1");
  await page.waitForSelector(".fig-illustration .ph");
  check("a missing illustration shows its placeholder, not a broken image", await page.isVisible(".fig-illustration .ph-label"));
  await shot(page, "phone-story-placeholder");
  await page.goto(base + "/politics/#/read/us-4");
  await page.waitForSelector(".person");
  check("players show seven people", (await page.$$(".person")).length === 7);
  await page.waitForSelector(".person-initials");
  check("missing portraits fall back to initials", (await page.$$(".person-initials")).length > 0);
  await shot(page, "phone-players");

  /* 5. Country page, Atlas, glossary. */
  await page.goto(base + "/politics/#/c/us");
  await page.waitForSelector(".lesson-row");
  check("the US page lists 12 briefings", (await page.$$(".lesson-row")).length === 12);
  check("briefing 1 is marked read", (await page.textContent(".lesson-row >> nth=0")).indexOf("✓") > -1);
  await shot(page, "phone-unit");
  await page.goto(base + "/politics/#/atlas");
  await page.waitForSelector(".ccard");
  check("the Atlas shows all 30 countries", (await page.$$(".ccard")).length === 30);
  const soon = (await page.$$(".ccard.soon")).length;
  check("…unwritten ones marked coming soon", soon === 30 - (await page.evaluate(() => window.POLITICS.builtCountries().length)), String(soon));
  await shot(page, "phone-atlas");
  await page.goto(base + "/politics/#/glossary");
  await page.fill(".search", "filibuster");
  check("glossary search narrows the list", (await page.$$(".gloss-item")).length === 1);
  await page.click(".avatar-btn");
  await page.waitForSelector(".seg");
  await page.waitForTimeout(400);
  await shot(page, "phone-menu");
  await page.keyboard.press("Escape");

  /* 5b. The world map: no lines until a country is picked, then that
     country's relationships with flag labels; selection, and the
     relationship's own page and briefings. */
  await page.goto(base + "/politics/#/map");
  await page.waitForSelector(".wmap .wm-hit");
  check("the map has a tap target for all 30 countries", (await page.$$(".wmap .wm-hit")).length === 30);
  check("…and no relationship lines or labels until a country is picked", (await page.$$(".wmap .wm-link")).length === 0 && (await page.$$(".wmap .wm-lb")).length === 0);
  await page.click('.wm-hit[data-id="cn"]');
  await page.waitForSelector(".wmap-card");
  const nCn = await page.evaluate(() => window.POLITICS.linksOf("cn").length);
  check("tapping China draws a line and a flag label for each of its relationships",
    (await page.$$(".wmap .wm-link")).length === nCn && (await page.$$(".wmap .wm-lb")).length === nCn, String(nCn));
  check("…including US–China, labelled with both flags", /🇺🇸🇨🇳/.test(await page.textContent('.wm-lb[data-link="us_cn"]')));
  check("…and opens its card, with the relationship", /China/.test(await page.textContent(".wmap-card h2")) && !!(await page.$('.wmap-card a[href="#/c/us_cn"]')));
  check("…and the URL remembers the selection", /#\/map\/cn$/.test(page.url()), page.url());
  await shot(page, "phone-map");
  await page.click('.wm-lb[data-link="us_cn"]');
  await page.waitForSelector('.wmap-card a[href="#/c/us_cn"].btn');
  await page.click('.wmap-card a[href="#/c/us_cn"].btn');
  await page.waitForSelector(".link-hero");
  check("the US–China page lists its 3 briefings", (await page.$$(".lesson-row")).length === 3);
  await page.goto(base + "/politics/#/read/us_cn-1");
  await page.waitForSelector(".reader h1");
  check("a relationship briefing opens in the reader", /Briefing 1 of 3/.test(await page.textContent(".reader-head .kicker")));
  await page.goto(base + "/politics/#/c/cn");
  await page.waitForSelector(".link-row");
  check("China's page lists the relationship", /Steel, tariffs and soybeans/.test(await page.textContent(".link-row")));

  /* 6. Academy's picker shows the card with live progress. */
  await page.goto(base + "/index.html");
  await page.waitForSelector(".track-card");
  const card = await page.$$eval(".track-card", (cs) => {
    const c = cs.find((x) => /Political Academy/.test(x.textContent));
    return c ? c.textContent : null;
  });
  check("Academy's picker has the Political Academy card", !!card);
  check("…showing the progress from this app", card && /1 done · 10 XP/.test(card), card);
  const coding = await page.$$eval(".track-card", (cs) => (cs.find((x) => /Full-Stack/.test(x.textContent)) || {}).textContent || "");
  check("CodeLab's card still reads 'Write real code'", /Write real code/.test(coding), coding);
  await shot(page, "phone-academy-picker");
  await ctx.close();

  /* 7. Desktop and dark mode, for the eye. */
  if (SHOTS) {
    for (const scheme of ["light", "dark"]) {
      const d = await newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1, colorScheme: scheme });
      await d.page.addInitScript(() => {
        if (!localStorage.getItem("academy_users_v1"))
          localStorage.setItem("academy_users_v1", JSON.stringify({ currentUser: "Sam", users: { Sam: { tracks: {} } } }));
      });
      await d.page.goto(base + "/politics/");
      await d.page.waitForSelector(".lesson-card");
      await shot(d.page, "desktop-" + scheme + "-today");
      await d.page.goto(base + "/politics/#/read/us-6");
      await d.page.waitForSelector(".reader h1");
      await shot(d.page, "desktop-" + scheme + "-reader");
      await d.page.evaluate(() => window.scrollTo(0, document.querySelector(".compare, .takeaways").offsetTop - 80));
      await d.page.waitForTimeout(150);
      await shot(d.page, "desktop-" + scheme + "-reader-end");
      await d.page.goto(base + "/politics/#/atlas");
      await d.page.waitForSelector(".ccard");
      await shot(d.page, "desktop-" + scheme + "-atlas");
      await d.ctx.close();
    }
  }

  check("no script errors", errors.length === 0, errors.join(" | "));
  await browser.close();
  srv.close();
  console.log(failures ? "\n" + failures + " check(s) failed." : "\nAll checks passed.");
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
