/* Generate per-checkpoint solutions for one course.

   Usage:  node tools/build-step-solutions.js <courseId> [--port 5330]
           node tools/build-step-solutions.js <courseId> --todo

   For every coding lesson it diffs the starter against the solution, then
   reverts one change at a time in the real sandbox. The checkpoints that
   start failing say what that change is for; the change is filed under the
   earliest of them that the starter also fails (a checkpoint the starter
   already passes needs no new code). A revert that crashes the whole file is
   half of a larger change (a helper whose caller stays), so it is paired
   with the nearest change that stops the crash. A change no checkpoint
   notices on its own (a removed TODO comment) is shown beside the nearest
   change that one does.

   The output, <course.stepSolutions> (e.g. stepsol/auth.js), is GENERATED.
   The explanations of why the starter was wrong are written separately, in
   tools/step-why/<courseId>.json, keyed by lesson id and pinned to the
   lesson hash they were written against. `--todo` prints every checkpoint
   whose explanation is missing or was written for an older lesson, with the
   diff and the failure the change causes — that is the brief for writing it.
   validate.js phase 0 fails on stale data or missing explanations. */
const { chromium } = require("playwright-core");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const SL = require("./stepsol-lib.js");

const ROOT = path.join(__dirname, "..");
const courseId = process.argv[2];
const portIx = process.argv.indexOf("--port");
const PORT = portIx !== -1 ? Number(process.argv[portIx + 1]) : 5330;
const TODO = process.argv.includes("--todo");
const VERBOSE = process.argv.includes("--verbose");
if (!courseId) { console.error("usage: node tools/build-step-solutions.js <courseId> [--port N] [--todo]"); process.exit(2); }

const CL = SL.loadCatalog(ROOT);
const course = CL._byId[courseId];
if (!course || course.stub) { console.error(`no built course "${courseId}"`); process.exit(2); }
if (!course.stepSolutions) { console.error(`course ${courseId} has no stepSolutions path in courses.js`); process.exit(2); }
const OUT = path.join(ROOT, course.stepSolutions);
const WHY = path.join(__dirname, "step-why", courseId + ".json");
const whys = fs.existsSync(WHY) ? JSON.parse(fs.readFileSync(WHY, "utf8")) : {};
const lessons = [].concat(...course.units.map(u => u.lessons))
  .filter(l => l.kind !== "quiz" && (l.steps || []).length && l.solution);

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

/* Explanations are kept only while the lesson is unchanged. */
function explain(lessonId, hash, i) {
  const w = whys[lessonId];
  return w && w.hash === hash && Array.isArray(w.why) && typeof w.why[i] === "string" ? w.why[i] : null;
}

/* Changes filed under the same checkpoint that touch each other in the
   solution read as one block, not a stack of one-line diffs under the same
   line number. Removed lines are listed before added ones, as in any diff. */
function mergeAdjacent(chunks) {
  const out = [];
  chunks.forEach(c => {
    const prev = out[out.length - 1];
    if (prev && prev.file === c.file && c.line <= prev.line + prev.add.length) {
      prev.del = prev.del.concat(c.del);
      prev.add = prev.add.concat(c.add);
    } else {
      out.push({ file: c.file, line: c.line, del: c.del.slice(), add: c.add.slice() });
    }
  });
  return out;
}

async function attribute(page, l, warnings) {
  const diff = SL.lessonDiff(l);
  const n = l.steps.length;
  const hunkById = {};
  diff.files.forEach(f => f.hunks.forEach(h => { hunkById[h.id] = h; }));
  const run = files => page.evaluate(a => window.CODELAB.dev.runFiles(a.id, a.files).then(r => ({
    fatal: r.fatal || null, timeout: !!r.timeout,
    steps: (r.steps || []).map(s => ({ i: s.i, pass: !!s.pass, msg: s.msg || "" }))
  })), { id: l.id, files });
  const failing = r => {
    const byI = {};
    r.steps.forEach(s => { byI[s.i] = s; });
    const out = [];
    for (let i = 0; i < n; i++) if (r.timeout || !byI[i] || !byI[i].pass) out.push(i);
    return out;
  };

  const sol = await run(SL.assemble(diff, new Set()));
  if (failing(sol).length) throw new Error(`${l.id}: the solution itself fails checkpoint ${failing(sol).map(i => i + 1).join(", ")} — fix the lesson first`);

  const fileOf = grp => hunkById[grp[0]].file;
  const lineOf = grp => hunkById[grp[0]].line;
  const cache = new Map();
  const revert = async grp => {
    const key = grp.slice().sort((x, y) => x - y).join(",");
    if (!cache.has(key)) cache.set(key, await run(SL.assemble(diff, new Set(grp))));
    return cache.get(key);
  };
  const crashes = r => !!r.fatal || !r.steps.length;

  /* Group the changes. Reverting one change can crash the whole file because
     it is part of a larger one: a `const kid` that five later lines use, an
     opened brace, a variable renamed throughout a rewrite. (Starters end in a
     demo console.log, so a runtime error there stops every checkpoint too.)
     Grow the group with the nearest changes in the same file until reverting
     them together stops crashing, then shrink it: drop every change it turns
     out not to need. What is left belongs together. Start over after each
     merge, since an earlier change may now group differently. */
  const sumOf = list => list.reduce((acc, x) => acc.concat(groups[x]), []);
  let groups = Object.keys(hunkById).map(id => [Number(id)]);
  for (let g = 0; g < groups.length; g++) {
    if (!crashes(await revert(groups[g]))) continue;
    const others = groups.map((_, h) => h)
      .filter(h => h !== g && fileOf(groups[h]) === fileOf(groups[g]))
      .sort((x, y) => Math.abs(lineOf(groups[x]) - lineOf(groups[g])) - Math.abs(lineOf(groups[y]) - lineOf(groups[g])));
    const taken = [];
    for (const h of others) {
      taken.push(h);
      if (!crashes(await revert(sumOf([g].concat(taken))))) break;
    }
    if (!taken.length || crashes(await revert(sumOf([g].concat(taken))))) continue;
    for (const h of taken.slice()) {
      const rest = taken.filter(x => x !== h);
      if (!crashes(await revert(sumOf([g].concat(rest))))) taken.splice(taken.indexOf(h), 1);
    }
    const members = [g].concat(taken).sort((x, y) => x - y);
    const merged = sumOf(members);
    groups = groups.filter((_, x) => members.indexOf(x) === -1);
    groups.splice(members[0], 0, merged);
    g = -1;
  }
  const fails = [];
  for (let g = 0; g < groups.length; g++) {
    const r = await revert(groups[g]);
    if (r.fatal) warnings.push(`${l.id}: reverting ${fileOf(groups[g])} line ${lineOf(groups[g])} still crashes the file (${r.fatal}) — filed under the first checkpoint`);
    fails[g] = failing(r);
  }

  /* A checkpoint the STARTER already passes needs no new code, so a change is
     filed under the earliest failing checkpoint the starter also fails. Half
     a change can break code the starter got right (undo one line of a loop
     rewrite and the old answer is wrong too); that is not what it is for. */
  const starterFails = new Set(failing(await run(diff.starter)));
  const first = fails.map(f => {
    const needed = f.filter(k => starterFails.has(k));
    return needed.length ? needed[0] : (f.length ? f[0] : -1);
  });
  const stepOf = first.slice();
  first.forEach((s, g) => {
    if (s !== -1) return;
    /* Distance to the group's nearest line, not its first: a group of
       changes spread over a function is "near" everything inside it. */
    let best = -1, bestD = Infinity;
    const mine = groups[g].map(id => hunkById[id]);
    first.forEach((s2, g2) => {
      if (s2 === -1) return;
      let d = Infinity;
      groups[g2].forEach(id => {
        const h = hunkById[id];
        mine.forEach(m => { if (m.file === h.file) d = Math.min(d, Math.abs(m.line - h.line)); });
      });
      if (d === Infinity) d = 1e6;
      if (d < bestD) { bestD = d; best = s2; }
    });
    stepOf[g] = best === -1 ? n - 1 : best;
    warnings.push(`${l.id}: the change at ${fileOf(groups[g])} line ${lineOf(groups[g])} makes no checkpoint fail on its own — shown with checkpoint ${stepOf[g] + 1}`);
  });

  if (VERBOSE) groups.forEach((grp, g) => console.log(`    ${l.id} lines ${grp.map(id => hunkById[id].line).join(",")}` +
    ` · fails without it: ${fails[g].map(k => k + 1).join(",") || "none"} · filed under ${stepOf[g] + 1}`));

  const hash = SL.lessonHash(l);
  const steps = l.steps.map(() => ({ chunks: [], after: [] }));
  const fileRank = name => (l.files || []).findIndex(f => f.name === name);
  groups.forEach((grp, g) => {
    const s = stepOf[g];
    grp.forEach(id => {
      const h = hunkById[id];
      steps[s].chunks.push({ id: id, file: h.file, line: h.line, del: h.del, add: h.add });
    });
    fails[g].forEach(k => { if (k !== s && steps[k].after.indexOf(s) === -1) steps[k].after.push(s); });
  });
  for (let s = 0; s < n; s++) {
    const st = steps[s];
    st.chunks.sort((x, y) => fileRank(x.file) - fileRank(y.file) || x.line - y.line || x.id - y.id);
    st.chunks = mergeAdjacent(st.chunks);
    st.after.sort((x, y) => x - y);
    if (st.chunks.length) {
      /* The failure this checkpoint shows when exactly its own changes are
         missing: the raw material for its explanation. */
      const mine = new Set();
      groups.forEach((grp, g) => { if (stepOf[g] === s) grp.forEach(id => mine.add(id)); });
      const r = await run(SL.assemble(diff, mine));
      const hit = r.steps.find(x => x.i === s);
      st.fail = r.fatal ? "crashed: " + r.fatal : (hit && !hit.pass ? hit.msg : "");
      st.after = [];
    }
    st.why = explain(l.id, hash, s);
  }
  return { hash, steps };
}

function printTodo(entries) {
  let missing = 0;
  for (const l of lessons) {
    const e = entries[l.id];
    if (!e) continue;
    e.steps.forEach((st, i) => {
      if (!st.chunks.length || st.why) return;
      missing++;
      console.log(`\n### ${l.id} · checkpoint ${i + 1} (hash ${e.hash})`);
      console.log(`checkpoint: ${l.steps[i].text}`);
      console.log(`fails with: ${st.fail || "(no message)"}`);
      st.chunks.forEach(c => {
        console.log(`${c.file} line ${c.line}`);
        c.del.forEach(t => console.log("- " + t));
        c.add.forEach(t => console.log("+ " + t));
      });
    });
  }
  console.log(`\n${missing} checkpoint${missing === 1 ? "" : "s"} still need an explanation in ${path.relative(ROOT, WHY)}`);
}

function write(entries) {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const header = "/* GENERATED by tools/build-step-solutions.js — do not edit by hand.\n" +
    "   Explanations come from tools/step-why/" + courseId + ".json. validate.js fails\n" +
    "   when a lesson changes without a rebuild. */\n";
  fs.writeFileSync(OUT, header + "window.CODELAB.addStepSolutions(" + JSON.stringify(courseId) + ", " + JSON.stringify(entries, null, 1) + ");\n");
}

async function main() {
  if (TODO) {
    /* No browser: re-merge the explanations into the existing data, as long
       as every lesson is still the version that data was generated from. */
    const prev = SL.loadStepSolutions(OUT);
    const entries = {};
    for (const l of lessons) {
      const e = prev[l.id], hash = SL.lessonHash(l);
      if (!e || e.hash !== hash) { console.error(`${l.id}: generated data is missing or stale — run without --todo first`); process.exit(1); }
      e.steps.forEach((st, i) => { st.why = explain(l.id, hash, i); });
      entries[l.id] = e;
    }
    write(entries);
    printTodo(entries);
    return;
  }

  const server = spawn("node", ["server.js"], { cwd: ROOT, stdio: "ignore", env: { ...process.env, PORT: String(PORT) } });
  await new Promise(r => setTimeout(r, 700));
  const browser = await chromium.launch({ executablePath: findBrowser(), headless: true });
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();
  await page.goto("http://localhost:" + PORT + "/", { waitUntil: "load" });
  await page.waitForFunction(() => window.CODELAB && window.CODELAB.dev, null, { timeout: 10000 });
  await page.evaluate(() => window.CODELAB.dev.loadAll());

  const entries = {}, warnings = [];
  let failed = false;
  for (const l of lessons) {
    try {
      entries[l.id] = await attribute(page, l, warnings);
      const e = entries[l.id];
      console.log(`  ✓ ${l.id}: ${e.steps.map((s, i) => (i + 1) + ":" + s.chunks.length).join(" ")}`);
    } catch (err) {
      failed = true;
      console.log(`  ✗ ${err.message.indexOf(l.id) === 0 ? err.message : l.id + ": " + err.stack}`);
    }
  }
  await browser.close();
  server.kill();

  warnings.forEach(w => console.log("  ! " + w));
  if (failed) { console.log("\nNot written: fix the lessons above first."); process.exit(1); }
  write(entries);
  console.log(`\nwrote ${path.relative(ROOT, OUT)} (${lessons.length} lessons)`);
  printTodo(entries);
}

main().catch(e => { console.error("HARNESS ERROR:", e); process.exit(2); });
