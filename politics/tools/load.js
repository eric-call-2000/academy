/* ============================================================
   Load the app's data exactly the way index.html does — core.js,
   countries.js, glossary.js, updates.js, then every units/<id>.js —
   into a sandbox, so the tools check what the browser will run.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

function run(ctx, rel) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8"), ctx, { filename: rel });
}

/* opts.units: false skips the unit files (the map builder doesn't need them).
   opts.seed: called with the sandbox before any file runs (tests use it). */
function load(opts) {
  opts = opts || {};
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  if (opts.seed) opts.seed(ctx);
  ["core.js", "countries.js", "links.js", "glossary.js", "updates.js"].forEach((f) => run(ctx, f));
  const P = ctx.POLITICS;
  const unitFiles = [];
  if (opts.units !== false) {
    const dir = path.join(ROOT, "units");
    const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".js")).sort() : [];
    files.forEach((f) => { run(ctx, "units/" + f); unitFiles.push(f); });
  }
  return { P, ROOT, ctx, unitFiles };
}

module.exports = { load, ROOT };
