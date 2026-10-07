#!/usr/bin/env node
/* ============================================================
   Render the drawn lesson illustrations.

     node tools/build-art.js              every scene in tools/art/scenes/
     node tools/build-art.js ir us_cn     only these units
     node tools/build-art.js ir-7         only this lesson
     node tools/build-art.js --missing    only pictures not yet on disk
     node tools/build-art.js --png DIR    also write PNG previews to DIR

   Each scene file (tools/art/scenes/<unit>.js) exports
   { "<lesson id>": (s) => s.sky(...)... } and the picture lands at
   the src of that lesson's illustration block. Drawing is plain SVG
   (tools/art/lib.js); Chromium (Playwright) rasterises it and
   encodes the 1600x900 WebP. Needs NODE_PATH to reach playwright.
   A drawn picture is credited "Illustration — not a photograph":
   the block's credit in units/<unit>.js is updated to match.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const { load, ROOT } = require("./load");
const { Scene, W, H } = require("./art/lib");

const args = process.argv.slice(2);
const pngDir = args.indexOf("--png") >= 0 ? args[args.indexOf("--png") + 1] : null;
const missingOnly = args.includes("--missing");
const only = args.filter((a, i) => !a.startsWith("--") && args[i - 1] !== "--png");

const { P } = load();
const SCENES = path.join(__dirname, "art", "scenes");

/* lesson id -> illustration block */
const blocks = {};
Object.keys(P.units).forEach((u) => (P.units[u].lessons || []).forEach((l) => (l.blocks || []).forEach((b) => {
  if (b.type === "image" && b.kind === "illustration" && b.src) blocks[l.id] = { unit: u, block: b };
})));

const DRAWN = "Illustration — not a photograph";
function credit(unit, src) {
  const file = path.join(ROOT, "units", unit + ".js");
  const text = fs.readFileSync(file, "utf8");
  const at = text.indexOf('src: "' + src + '"');
  const end = text.indexOf("type:", at);
  const block = text.slice(at, end < 0 ? undefined : end);
  const fixed = block.replace('credit: "AI illustration — not a photograph"', 'credit: "' + DRAWN + '"');
  if (fixed !== block) fs.writeFileSync(file, text.slice(0, at) + fixed + (end < 0 ? "" : text.slice(end)));
}

const jobs = [];
fs.readdirSync(SCENES).filter((f) => f.endsWith(".js")).sort().forEach((f) => {
  const unit = f.replace(/\.js$/, "");
  const scenes = require(path.join(SCENES, f));
  Object.keys(scenes).forEach((id) => {
    if (only.length && only.indexOf(unit) < 0 && only.indexOf(id) < 0) return;
    const hit = blocks[id];
    if (!hit) throw new Error(f + ": no illustration block for lesson " + id);
    const out = path.join(ROOT, hit.block.src);
    if (missingOnly && fs.existsSync(out)) return;
    jobs.push({ id, out, unit: hit.unit, src: hit.block.src, draw: scenes[id] });
  });
});

(async () => {
  if (!jobs.length) { console.log("Nothing to draw."); return; }
  const { chromium } = require("playwright");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  let bytes = 0;
  for (const j of jobs) {
    const s = new Scene(j.id);
    j.draw(s);
    await page.setContent(`<html><body style="margin:0;background:#000">${s.svg()}</body></html>`);
    const png = await page.screenshot({ clip: { x: 0, y: 0, width: W, height: H } });
    if (pngDir) { fs.mkdirSync(pngDir, { recursive: true }); fs.writeFileSync(path.join(pngDir, j.id + ".png"), png); }
    const webp = await page.evaluate(async (b64) => {
      const img = new Image();
      img.src = "data:image/png;base64," + b64;
      await img.decode();
      const c = document.createElement("canvas");
      c.width = img.width; c.height = img.height;
      c.getContext("2d").drawImage(img, 0, 0);
      return c.toDataURL("image/webp", 0.82).split(",")[1];
    }, png.toString("base64"));
    const buf = Buffer.from(webp, "base64");
    if (buf.slice(8, 12).toString() !== "WEBP") throw new Error(j.id + ": Chromium did not encode WebP");
    fs.mkdirSync(path.dirname(j.out), { recursive: true });
    fs.writeFileSync(j.out, buf);
    bytes += buf.length;
    credit(j.unit, j.src);
    console.log(j.id.padEnd(12) + path.relative(ROOT, j.out) + "  " + Math.round(buf.length / 1024) + " KB");
  }
  await browser.close();
  console.log(jobs.length + " picture(s), " + Math.round(bytes / 1024) + " KB in all.");
})().catch((e) => { console.error(e); process.exit(1); });
