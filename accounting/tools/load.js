/* ============================================================
   Load the app's data exactly the way index.html does — every
   <script> before app.js, in page order — into a sandbox, so the
   tools check what the browser will run.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

/* The data scripts index.html loads, in order (app.js draws, so it's skipped). */
function pageScripts() {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const out = [];
  html.replace(/<script\s+src="([^"]+)"\s*><\/script>/g, (_, src) => { out.push(src); return ""; });
  return out.filter((s) => s !== "app.js");
}

function load() {
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  const scripts = pageScripts();
  scripts.forEach((rel) => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8"), ctx, { filename: rel }));
  return { L: ctx.LEDGER, ROOT, scripts };
}

module.exports = { load, pageScripts, ROOT };
