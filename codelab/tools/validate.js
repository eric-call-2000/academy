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

/* Split a call's argument list on TOP-LEVEL commas only, so a comma inside a
   nested call, string, array or object does not look like another argument. */
function splitCallArgs(src, openIx) {
  const args = [];
  let depth = 0, cur = "", quote = null;
  for (let i = openIx + 1; i < src.length; i++) {
    const ch = src[i], prev = src[i - 1];
    if (quote) { cur += ch; if (ch === quote && prev !== "\\") quote = null; continue; }
    if (ch === '"' || ch === "'" || ch === "`") { quote = ch; cur += ch; continue; }
    if ("([{".indexOf(ch) !== -1) { depth++; cur += ch; continue; }
    if (")]}".indexOf(ch) !== -1) {
      if (ch === ")" && depth === 0) { args.push(cur); return args; }
      depth--; cur += ch; continue;
    }
    if (ch === "," && depth === 0) { args.push(cur); cur = ""; continue; }
    cur += ch;
  }
  return null;
}

/* ---------------- phase 0: static checks ---------------- */
function phase0() {
  console.log("\n== Phase 0: static curriculum checks ==");
  global.window = { CODELAB: {} };
  window.CODELAB.courses = [];
  window.CODELAB._byId = {};
  window.CODELAB.positions = [];
  window.CODELAB._posById = {};
  window.CODELAB.defineCourse = (c) => {
    c.units = [];
    c.stub = !!c.stub; c.files = c.files || []; c.items = c.items || 0;
    c.hours = c.hours || 0; c.credits = c.credits || 0; c.categories = c.categories || {};
    window.CODELAB.courses.push(c); window.CODELAB._byId[c.id] = c;
  };
  window.CODELAB.definePosition = (p) => {
    p.min = p.min || {}; p.required = p.required || [];
    window.CODELAB.positions.push(p); window.CODELAB._posById[p.id] = p;
  };
  window.CODELAB.addUnit = (courseId, u) => { u.lessons = u.lessons || []; window.CODELAB._byId[courseId].units.push(u); };
  require(path.join(ROOT, "core.js"));
  require(path.join(ROOT, "courses.js"));
  require(path.join(ROOT, "positions.js"));
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
          /* T.mutate swaps the GLOBAL binding, which only `function`/`var`
             declarations create. A `const foo = …` in the starter or the
             solution makes every swap fail with a runtime error mid-lesson,
             so catch it statically here. */
          const mutated = new Set();
          for (const s of (l.steps || [])) {
            const re = /T\.mutate\(\s*['"]([A-Za-z_$][\w$]*)['"]/g;
            let m;
            while ((m = re.exec(s.test || ""))) mutated.add(m[1]);
          }
          if (mutated.size) {
            const sources = (l.files || []).map(f => f.content).concat(Object.values(l.solution || {}));
            for (const name of mutated) {
              const badDecl = new RegExp("\\b(const|let)\\s+" + name + "\\b");
              if (sources.some(src => badDecl.test(String(src))))
                fail(`${l.id}: "${name}" is mutated by a checkpoint but declared with const/let — mutated bindings must be \`function ${name}(...)\``);
            }
          }
          /* T.expect(cond, msg) takes TWO arguments. A three-argument call is a
             T.eq(got, want, msg) written wrong: it asserts only that `got` is
             truthy and throws the comparison away, so it passes for any
             non-empty value — including the starter's. This exact mistake hid
             19 broken checkpoints across the Node and Database courses and
             made six lessons pass with an empty starter. */
          for (const s of (l.steps || [])) {
            const src = String(s.test || "");
            let ix = 0;
            while ((ix = src.indexOf("T.expect(", ix)) !== -1) {
              const args = splitCallArgs(src, ix + "T.expect".length);
              if (args && args.length >= 3)
                fail(`${l.id}: T.expect() called with ${args.length} arguments — it takes (condition, message). Did you mean T.eq(got, want, message)?`);
              ix += 9;
            }
          }

          /* Node globals do not exist in a browser Worker. A lesson that uses
             them without `node: true` dies on the first line with a bare
             ReferenceError instead of failing a checkpoint. */
          if (!l.node) {
            const sources = [JSON.stringify(l.solution || {}), JSON.stringify(l.files || []), JSON.stringify(l.steps || [])].join(" ");
            for (const sym of ["Buffer.", "setImmediate(", "MockReadable", "MockWritable"]) {
              if (sources.indexOf(sym) === -1) continue;
              /* …unless the lesson DEFINES it. nodejs-u2-3 and u2-4 are the
                 units where building MockReadable/MockWritable IS the exercise;
                 opting those into the harness would hand over the answer and
                 make the starter pass on its own. */
              const bare = sym.replace(/[.(]/g, "");
              if (sources.indexOf("class " + bare) !== -1 || sources.indexOf("function " + bare) !== -1) continue;
              fail(`${l.id}: uses ${sym} but does not set \`node: true\` — harnessNode provides it (see runner.js)`);
            }
          }

          /* XSS async-sentinel flakiness (Web Security U2/U3): an <img onerror>
             payload fires asynchronously, and the web grader starts ~60ms
             after load — so any checkpoint that reads the __fired sentinel
             without first awaiting a sleep passes on a fast machine and fails
             on a slow one. Require a T.sleep before any __fired read. */
          for (const s of (l.steps || [])) {
            const src = String(s.test || "");
            if (/__fired/.test(src) && !/T\.sleep\s*\(/.test(src))
              fail(`${l.id}: a checkpoint reads __fired without a preceding await T.sleep(...) — async XSS sentinels race the grader (add T.sleep(120))`);
          }

          /* The signing primitives and the fake clock are opt-in harnesses,
             like node:true: a lesson that calls them without its flag dies on
             a bare ReferenceError instead of failing a checkpoint. And expiry
             lessons must never read the real clock — they would pass or fail
             depending on when the validator happened to run. */
          {
            const srcs = [JSON.stringify(l.solution || {}), JSON.stringify(l.files || []), JSON.stringify(l.steps || [])].join(" ");
            const defines = name => new RegExp("(function|const|let|var)\\s+" + name + "\\b").test(srcs);
            if (!l.crypto) for (const name of ["hmac", "sha1Bytes", "sha256Bytes", "timingSafeEqual"]) {
              if (new RegExp("(^|[^.\\w$])" + name + "\\s*\\(").test(srcs) && !defines(name))
                fail(`${l.id}: calls ${name}() but does not set \`crypto: true\` — harnessCrypto provides it (see runner.js)`);
            }
            /* Bare now() is only checked in auth- lessons: elsewhere it is a
               learner's own injected clock parameter (test-u5-4 passes one). */
            const callsNow = l.id.indexOf("auth-") === 0 && /(^|[^.\w$])now\s*\(\s*\)/.test(srcs);
            if (l.clock == null && (callsNow || /T\.advance\s*\(/.test(srcs)) && !defines("now"))
              fail(`${l.id}: uses now() or T.advance() but does not set \`clock\` — harnessClock provides them (see runner.js)`);
            if (l.id.indexOf("auth-") === 0 && /Date\.now\s*\(|new Date\(\s*\)/.test(srcs))
              fail(`${l.id}: reads the real clock (Date.now / new Date()) — set \`clock\` and use now() and T.advance(ms), or the lesson passes or fails depending on when it runs`);
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

    /* ---- credits ----
       The whole point of the credit model is that credits cannot be minted:
       they are a restatement of hours that someone actually authored. So
       re-derive them here from the lessons just counted and fail on drift.
       A tolerance of 1 absorbs adding a lesson without a manifest edit; more
       than that means the number stopped describing the content. */
    const CH = window.CODELAB.CREDIT_HOURS;
    if (course.stub) {
      if (course.credits) fail(`course ${course.id}: stub courses must pay 0 credits (has ${course.credits})`);
      if (course.files.length) fail(`course ${course.id}: stub course must have files: []`);
      if (count) fail(`course ${course.id}: marked stub but registers ${count} items`);
      const pc = course.plannedCredits || 0;
      const psum = Object.values(course.plannedCategories || {}).reduce((a, b) => a + b, 0);
      if (pc !== psum) fail(`course ${course.id}: plannedCategories sum to ${psum} but plannedCredits is ${pc}`);
    } else {
      const derived = Math.round(modelHours / CH);
      if (Math.abs((course.credits || 0) - derived) > 1)
        fail(`course ${course.id}: claims ${course.credits} credits but holds ~${modelHours.toFixed(1)}h of material (${derived} credits at ${CH}h each) — credits must restate content, not ambition`);
      if (!course.credits) fail(`course ${course.id}: a built course must pay credits`);
      /* Apportionment: a multi-category course splits its credits, it does not
         pay full value into each. If these stopped summing, the ledger would
         hand out credit nobody sat through. */
      const sum = Object.values(course.categories || {}).reduce((a, b) => a + b, 0);
      if (sum !== course.credits)
        fail(`course ${course.id}: categories sum to ${sum} but credits is ${course.credits} — the split must be apportioned, not duplicated`);
    }
    for (const cat of Object.keys({ ...(course.categories || {}), ...(course.plannedCategories || {}) })) {
      if (!window.CODELAB._catById[cat]) fail(`course ${course.id}: unknown category "${cat}"`);
    }

    const target = course.targetHours ? `, target ${course.targetHours}h` : "";
    const crLabel = course.stub ? `stub, planned ${course.plannedCredits || 0}cr` : `${course.credits}cr`;
    console.log(`  ${course.id}: ${count} items (manifest ${course.items}) ~${course.hours}h (model ~${modelHours.toFixed(1)}h${target}) ${crLabel}`);
  }
  console.log(`  TOTAL: ${totals.lessons} coding (${totals.projects} projects), ${totals.quizzes} quizzes, ${totals.questions} questions, ${totals.steps} checkpoints, ~${Math.round(totals.mins / 60)}h of material`);

  positionGates();
  recallAndSyncGates();
  shellGates();
  gitsimGates();
  dockersimGates();
  cryptoGates();
}

/* The Authentication course grades signatures, JWTs, PKCE challenges and
   TOTP codes by comparing them with harnessCrypto's output, and its expiry
   lessons run on harnessClock. A wrong byte would fail a correct learner
   with nothing in the lesson to show why, so the primitives are checked
   against RFC vectors and Node's crypto before any lesson runs. */
function cryptoGates() {
  console.log("\n== Phase 0g: crypto & clock harness ==");
  const { execFileSync } = require("child_process");
  try {
    const out = execFileSync(process.execPath, [path.join(ROOT, "tools", "test-crypto.js")], { encoding: "utf8" });
    ok(out.trim().split("\n")[0]);
  } catch (e) {
    fail("crypto harness tests failed:\n" + String(e.stdout || e.message));
  }
}

/* Same argument as gitsim's suite: the Docker course is graded by inspecting
   dockersim's state, so an engine bug would make lessons pass or fail for
   reasons unrelated to what the learner typed. Its suite also covers the
   shell.js behaviour Docker lessons depend on (quoting, &&, $PWD). */
function dockersimGates() {
  console.log("\n== Phase 0f: docker engine ==");
  const { execFileSync } = require("child_process");
  try {
    const out = execFileSync(process.execPath, [path.join(ROOT, "tools", "test-dockersim.js")], { encoding: "utf8" });
    out.trim().split("\n").forEach(line => ok(line));
  } catch (e) {
    fail("dockersim engine tests failed:\n" + String(e.stdout || e.message));
  }
}

/* The shell is the floor two courses stand on: the CLI course is graded
   entirely by inspecting what it did, and every Git lesson is typed into it.
   A regression here is invisible in a diff and obvious to a learner, so the
   engine gets its own suite ahead of any lesson running. */
function shellGates() {
  console.log("\n== Phase 0d2: shell engine ==");
  const { execFileSync } = require("child_process");
  try {
    const out = execFileSync(process.execPath, [path.join(ROOT, "tools", "test-shell.js")], { encoding: "utf8" });
    ok(out.trim().split("\n")[0]);
  } catch (e) {
    fail("shell engine tests failed:\n" + String(e.stdout || e.message));
  }
}

/* The Git course is graded by INSPECTING gitsim's state, so an engine bug
   would make lessons pass or fail for reasons unrelated to what the learner
   typed — and Phase 1 only exercises the paths lessons happen to hit. The
   engine's own suite is pure Node and takes about a second. */
function gitsimGates() {
  console.log("\n== Phase 0e: git engine ==");
  const { execFileSync } = require("child_process");
  try {
    const out = execFileSync(process.execPath, [path.join(ROOT, "tools", "test-gitsim.js")], { encoding: "utf8" });
    ok(out.trim().split("\n")[0]);
  } catch (e) {
    fail("gitsim engine tests failed:\n" + String(e.stdout || e.message));
  }
}

/* The job board is only honest if every sheet is checked against what the
   catalog can actually supply. A sheet nobody can reach is NOT a failure —
   three of them are deliberately unreachable, which is how the board reports
   a content gap as a number — but it must be reported, never silent. */
function positionGates() {
  console.log("\n== Phase 0b: job positions ==");
  const cats = window.CODELAB.CATEGORIES.map(c => c.id);
  const built = {}, road = {};
  cats.forEach(c => { built[c] = 0; road[c] = 0; });
  let builtTotal = 0, roadTotal = 0;
  for (const c of window.CODELAB.courses) {
    if (c.stub) {
      roadTotal += c.plannedCredits || 0;
      for (const k of Object.keys(c.plannedCategories || {})) road[k] += c.plannedCategories[k];
    } else {
      builtTotal += c.credits || 0;
      for (const k of Object.keys(c.categories || {})) built[k] += c.categories[k];
    }
  }
  console.log(`  catalog supplies ${builtTotal} credits built (+${roadTotal} on the roadmap)`);
  console.log(`  by category: ${cats.map(c => `${c} ${built[c]}${road[c] ? "+" + road[c] : ""}`).join(" · ")}`);

  if (!window.CODELAB.positions.length) fail("no job positions defined");
  const seen = new Set();
  let reachable = 0, blocked = 0;
  for (const p of window.CODELAB.positions) {
    if (seen.has(p.id)) fail(`duplicate position id: ${p.id}`);
    seen.add(p.id);
    if (!p.title || !p.total) fail(`position ${p.id}: needs a title and a credit total`);
    for (const cat of Object.keys(p.min || {})) {
      if (!window.CODELAB._catById[cat]) fail(`position ${p.id}: unknown category "${cat}"`);
    }
    /* A required course that does not exist would render as a permanently
       unmeetable row with no explanation. */
    for (const cid of (p.required || [])) {
      if (!window.CODELAB._byId[cid]) fail(`position ${p.id}: required course "${cid}" is not in the catalog`);
    }
    /* The eight-course rule: a job title is a curriculum, so every sheet names
       at least this many required courses (see positions.js). */
    const MIN_REQUIRED = 8;
    const reqIds = p.required || [];
    if (reqIds.length < MIN_REQUIRED)
      fail(`position ${p.id}: names ${reqIds.length} required courses, needs at least ${MIN_REQUIRED}`);
    if (new Set(reqIds).size !== reqIds.length) fail(`position ${p.id}: a required course is listed twice`);
    /* Required courses STACK, so their credits must be able to fit inside the
       sheet's own total — a sheet demanding fewer credits than its own
       required courses pay is a spec bug. Stubs count at their PLANNED value,
       or a sheet that passes today would break the day a stub gets written. */
    const reqCredits = reqIds.reduce((a, cid) => {
      const c = window.CODELAB._byId[cid];
      if (!c) return a;   // already reported above
      return a + (c.stub ? (c.plannedCredits || 0) : (c.credits || 0));
    }, 0);
    if (reqCredits > p.total)
      fail(`position ${p.id}: required courses pay ${reqCredits} credits (stubs at planned value) but the sheet only asks for ${p.total}`);

    const gaps = Object.keys(p.min || {}).filter(c => built[c] < p.min[c]);
    const stubReq = (p.required || []).filter(cid => window.CODELAB._byId[cid].stub);
    const shortTotal = Math.max(0, p.total - builtTotal);
    if (!gaps.length && !stubReq.length && !shortTotal) {
      reachable++;
      console.log(`  ✅ ${p.title} — reachable today (${p.total}cr)`);
    } else {
      blocked++;
      const why = [];
      gaps.forEach(c => why.push(`${c} ${built[c]}/${p.min[c]} (short ${p.min[c] - built[c]}, roadmap +${road[c]})`));
      stubReq.forEach(cid => why.push(`requires unwritten ${cid}`));
      if (shortTotal) why.push(`total short ${shortTotal}`);
      const everFixable = gaps.every(c => built[c] + road[c] >= p.min[c]);
      console.log(`  ⛔ ${p.title} — ${why.join(" · ")}${everFixable ? "" : "  [roadmap does NOT close this]"}`);
    }
  }
  console.log(`  ${reachable} reachable · ${blocked} blocked by missing content`);
}

function recallAndSyncGates() {
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
  syncAlgebra(REV);
}

/* Pure-Node property tests over the Handoff merge. These are the gates that
   matter most: a merge that is not idempotent silently doubles XP, and one
   that is not commutative means the answer depends on which device you
   imported into first. */
function syncAlgebra(REV) {
  console.log("\n== Phase 0d: Handoff merge algebra ==");
  const S = require(path.join(ROOT, "sync.js"));
  let seed = 20260827;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const ctx = { today: 20700, xpOf: (id) => (id.indexOf("quiz") !== -1 ? 10 : 15) };
  const eq = (a, b) => S.stable(a) === S.stable(b);

  const LESSONS = [], CARDS = [];
  for (let i = 1; i <= 40; i++) LESSONS.push("js-u1-" + i);
  for (let i = 0; i < 40; i++) CARDS.push("q:js-quiz-1#c" + i);
  for (let i = 0; i < 10; i++) CARDS.push("k:js-u1-" + i);

  function randProfile(dev) {
    const u = { done: {}, quiz: {}, days: [], rev: {}, revPark: {}, revSkip: {}, revAlt: {},
                revStatsSrc: {}, xp: 0, earned: {}, lastCourse: rnd() < 0.5 ? "js" : null };
    /* Credit clocks merge by max, so the property tests must actually carry
       them: a clock that merged by min would silently expire renewed credits. */
    ["js", "html", "css", "srv", "test"].forEach(cid => {
      if (rnd() < 0.5) u.earned[cid] = ctx.today - Math.floor(rnd() * 900);
    });
    LESSONS.forEach(l => { if (rnd() < 0.4) { u.done[l] = true; u.xp += ctx.xpOf(l); } });
    CARDS.forEach(k => {
      if (rnd() > 0.5) return;
      const IV = k.indexOf("k:") === 0 ? REV.D_IV : REV.Q_IV;
      const box = Math.floor(rnd() * IV.length);
      u.rev[k] = [box, ctx.today - Math.floor(rnd() * 20) + IV[box], Math.floor(rnd() * 3), Math.floor(rnd() * 9) + 1];
    });
    for (let i = 0; i < 12; i++) if (rnd() < 0.6) u.days.push(ctx.today - Math.floor(rnd() * 40));
    u.days = S.uniqSortedDays(u.days, ctx.today);
    u.revStatsSrc[dev] = { s: 5, a: 50 + Math.floor(rnd() * 200), c: 40, ta: 10, tc: 8 };
    return u;
  }
  const M = (a, b) => S.mergeProfile(a, b, ctx).user;

  let idem = 0, comm = 0, mono = 0;
  for (let i = 0; i < 400; i++) {
    const L = randProfile("phone"), I = randProfile("desk");
    const once = M(L, I);
    if (!eq(M(once, I), once)) idem++;
    if (!eq(once, M(I, L))) comm++;
    if (Object.keys(once.done).length < Object.keys(L.done).length || once.xp < L.xp || once.days.length < L.days.length) mono++;
    /* A merge that lost or rewound a credit clock would expire a course the
       learner has already renewed on the other device. */
    else if (Object.keys(L.earned).some(c => !(once.earned && once.earned[c] >= L.earned[c]))) mono++;
  }
  if (idem) fail(`merge is NOT idempotent (${idem}/400 pairs) — a repeat import would change the profile`);
  else ok("merge is idempotent over 400 random pairs");
  if (comm) fail(`merge is NOT commutative (${comm}/400 pairs) — the result would depend on import order`);
  else ok("merge is commutative over 400 random pairs");
  if (mono) fail(`merge LOSES data (${mono}/400 pairs) — done/xp/days shrank`);
  else ok("merge is monotone — completions, XP, study days and credit clocks never shrink");

  // The date format that silently resets the streak to 1 every day if padded.
  const d = new Date();
  const todayKey = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  if (S.dayStr(REV.revToday()) === todayKey) ok(`dayStr matches todayKey() exactly (${todayKey})`);
  else fail(`dayStr emits "${S.dayStr(REV.revToday())}" but todayKey() emits "${todayKey}"`);

  // Streaks: a union of day-sets, never a max of counts.
  const desk = []; for (let i = 0; i < 30; i++) desk.push(20670 + i);
  if (S.streakFromDays(S.uniqSortedDays(desk.concat([20700]), 20700)) === 31)
    ok("a 30-day run plus one day on the other device merges to 31");
  else fail("streak union is wrong");
  if (S.streakFromDays(S.uniqSortedDays([20600, 20601, 20690], 20700)) === 1)
    ok("a run that already ended collapses to 1 rather than being revived");
  else fail("a dead streak was revived by the merge");
  if (S.uniqSortedDays([20900], 20700).length === 0) ok("study days from a wrong/foreign clock are dropped");
  else fail("a future-dated day was accepted");

  // Transport integrity.
  const u = randProfile("phone");
  const text = JSON.stringify(S.buildEnvelope("T", u, { today: 20700, deviceId: "d-1" }));
  if (!S.parseEnvelope(text.slice(0, text.length - 30)).ok) ok("a truncated code is rejected");
  else fail("a truncated code parsed as valid");
  if (S.parseEnvelope(text.slice(0, 300) + "\r\n" + text.slice(300)).ok)
    ok("soft line breaks inserted by mail and chat clients are repaired");
  else fail("line breaks broke a valid code");
  const tampered = JSON.parse(text); tampered.p.xp += 5000;
  if (!S.parseEnvelope(JSON.stringify(tampered)).ok) ok("the checksum catches an edited payload");
  else fail("an edited payload passed the checksum");
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

  /* Phase 0 is pure Node and finishes in about a second, while the browser
     phases take ~12 minutes. `--phase0` is the curriculum-authoring inner
     loop, the same role tools/validate-unit.js plays for a single unit. */
  if (process.argv.includes("--phase0")) {
    console.log("\n==================================");
    if (failures.length) {
      console.log("FAILURES: " + failures.length);
      failures.forEach(f => console.log("  ✗ " + f));
      process.exit(1);
    }
    console.log("PHASE 0 PASSED ✅  (browser phases skipped)");
    return;
  }

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
  /* ---- runner probe: extra editor tabs in shell lessons ----
     A shell lesson's first tab is its script; every other tab is written into
     the filesystem after setup and before the commands (the Docker course's
     Dockerfile and compose.yaml tabs). No catalog lesson uses a second tab
     yet, so without this probe that path would go unexercised in Chromium. */
  const tabProbe = await page.evaluate(() => {
    const lesson = {
      id: "probe-shell-tabs", kind: "shell", cwd: "/home/you/project",
      setup: "git init\necho \"old\" > notes.txt\ngit add notes.txt\ngit commit -m \"Start\"",
      files: [{ name: "commands.sh", content: "" }, { name: "notes.txt", content: "" }, { name: "config/app.json", content: "" }],
      steps: [
        { test: "T.eq(T.file('notes.txt'), 'edited in a tab\\n', 'the tab should overwrite the file setup committed');" },
        { test: "T.eq(T.file('config/app.json'), '{}', 'a nested tab should create its folder');" },
        { test: "T.eq(T.unstaged(), ['notes.txt'], 'git should see the tab edit as an unstaged change');" },
        { test: "T.eq(T.before.wt('notes.txt'), 'old\\n', 'T.before is the setup state, before any tab is written');" },
        { test: "T.expect(T.out().indexOf('edited in a tab') !== -1, 'the commands should run after the tabs are written');" }
      ]
    };
    const files = { "commands.sh": "cat notes.txt", "notes.txt": "edited in a tab\n", "config/app.json": "{}" };
    const host = document.createElement("div");
    return window.CODELAB.runner.run(lesson, files, { previewEl: host }).then(r => ({ steps: r.steps, fatal: r.fatal }));
  });
  const tabProbeBad = (tabProbe.steps || []).filter(s => !s.pass);
  if (tabProbe.fatal) fail(`runner probe (shell tabs): FATAL ${tabProbe.fatal}`);
  else if (tabProbeBad.length || (tabProbe.steps || []).length !== 5)
    fail(`runner probe (shell tabs): ${tabProbeBad.map(s => "#" + s.i + ": " + s.msg).join(" | ") || "steps missing"}`);
  else ok("runner probe: a shell lesson's extra tabs become files after setup, before the commands");

  /* ---- runner probes: console shapes, honest stacks, probe() timeline ----
     Debugging & Diagnosis grades exact console serializations and line
     numbers, so the engine behaviour is pinned here directly — a change to
     the shim would otherwise surface as a confusing lesson failure. Step 6
     is MEANT to fail: its message must say where the learner's code threw. */
  const dbgProbe = await page.evaluate(() => {
    const code = [
      "function boom(o) {",                                   // 1
      "  return o.name;",                                     // 2
      "}",                                                    // 3
      "function outer() { return boom(null); }",              // 4
      "console.table([{ id: 1, name: 'mug', qty: 2 }, { id: 2, name: 'pen' }]);",
      "console.count('tick'); console.count('tick');",
      "console.group('cart'); console.log('inside'); console.groupEnd(); console.log('outside');",
      "console.assert(1 > 2, 'math broke'); console.assert(true, 'never shown');",
      "const cart = { items: [1] };",
      "probe('cart', cart); cart.items.push(2); probe('cart', cart);",
      "[0, 1, 3, 7].forEach(function (s) { probe('sum', s); });"
    ].join("\n");
    const lesson = {
      id: "probe-debug-engine", kind: "js",
      steps: [
        { test: "T.eq(T.logLines().slice(0, 3), ['id | name | qty', '1 | mug | 2', '2 | pen | '], 'console.table shape');" },
        { test: "T.eq(T.countLogged('tick: '), 2, 'console.count'); T.expect(T.logged('tick: 2'), 'count label: n');" },
        { test: "T.expect(T.logLines().indexOf('  inside') !== -1 && T.logLines().indexOf('outside') !== -1, 'group indents until groupEnd');" },
        { test: "T.eq(T.countLogged('Assertion failed: math broke'), 1, 'assert fires once'); T.expect(!T.logged('never shown'), 'a true assert is silent');" },
        { test: "T.eq(T.traceOf('cart'), [{ items: [1] }, { items: [1, 2] }], 'probe keeps a deep copy'); T.eq(T.firstDivergence('sum', [0, 1, 3, 6]), 3, 'first divergence');" },
        { test: "var s = ''; try { outer(); } catch (e) { s = e.stack; }\nT.eq(s, \"TypeError: Cannot read properties of null (reading 'name')\\n    at boom (script.js:2:12)\\n    at outer (script.js:4:27)\", 'e.stack shows only learner frames, with editor line numbers');" },
        { test: "outer();" }
      ]
    };
    const host = document.createElement("div");
    return window.CODELAB.runner.run(lesson, { "script.js": code }, { previewEl: host }).then(r => ({ steps: r.steps, fatal: r.fatal }));
  });
  const dbgBad = (dbgProbe.steps || []).filter(s => !s.pass && s.i !== 6);
  const dbgSix = (dbgProbe.steps || []).filter(s => s.i === 6)[0];
  if (dbgProbe.fatal) fail(`runner probe (debug engine): FATAL ${dbgProbe.fatal}`);
  else if (dbgBad.length || (dbgProbe.steps || []).length !== 7)
    fail(`runner probe (debug engine): ${dbgBad.map(s => "#" + s.i + ": " + s.msg).join(" | ") || "steps missing"}`);
  else if (!dbgSix || dbgSix.pass || dbgSix.msg.indexOf("thrown in boom() at line 2") === -1)
    fail(`runner probe (debug engine): a learner throw should report "thrown in boom() at line 2", got ${JSON.stringify(dbgSix && dbgSix.msg)}`);
  else ok("runner probe: console table/count/group/assert shapes, probe() deep copies, learner-only stacks with editor line numbers");

  const crashProbe = await page.evaluate(() => {
    const logs = [];
    const lesson = { id: "probe-debug-crash", kind: "js", steps: [{ test: "T.expect(true, 'never reached');" }] };
    return window.CODELAB.runner.run(lesson, { "script.js": "var a = 1;\nvar cart = null;\ncart.total;\n" },
      { previewEl: document.createElement("div"), onConsole: m => logs.push(m.text) }).then(r => ({ fatal: r.fatal, logs }));
  });
  if (crashProbe.fatal === "TypeError: Cannot read properties of null (reading 'total') (at line 3)")
    ok("runner probe: a top-level crash names its error type and line");
  else fail(`runner probe (worker crash): expected the fatal to name TypeError and line 3, got ${JSON.stringify(crashProbe.fatal)}`);

  const webLineProbe = await page.evaluate(() => {
    const logs = [];
    const lesson = { id: "probe-web-lineno", kind: "web", steps: [{ test: "T.expect(true, 'ok');" }] };
    const files = {
      "index.html": "<!DOCTYPE html>\n<html>\n<head>\n<title>x</title>\n</head>\n<body>\n<p>hi</p>\n<script src=\"script.js\"></script>\n</body>\n</html>",
      "script.js": "var ok = 1;\n\nnull.boom;\n"
    };
    const host = document.createElement("div");
    host.style.cssText = "position:fixed;left:-12000px;top:0;width:800px;height:600px;";
    document.body.appendChild(host);
    return window.CODELAB.runner.run(lesson, files, { previewEl: host, onConsole: m => logs.push(m.text) })
      .then(() => { host.remove(); return logs; });
  });
  if (webLineProbe.some(t => /\(script\.js line 3\)$/.test(t)))
    ok("runner probe: a web lesson's console reports the learner's own line (script.js line 3)");
  else fail(`runner probe (web line numbers): expected "(script.js line 3)", console said ${JSON.stringify(webLineProbe)}`);

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

  /* ---- Code store: the split of saved lesson files out of codelab_v1 ----
     The migration moves real work between keys, so it gets a gate. */
  const codeSplit = await mp.evaluate(() => {
    const d = window.CODELAB.dev;
    const files = { "index.html": "<!-- PRE-SPLIT PROFILE -->\n<h1>hi</h1>" };
    const res = d.migrateCodeForTest("html-2", files);
    const raw = JSON.parse(localStorage.getItem("codelab_v1"));
    return {
      ...res,
      original: files,
      progressStoreHasCode: JSON.stringify(raw).indexOf("PRE-SPLIT PROFILE") !== -1,
      keyCount: Object.keys(d.codeStore()).length
    };
  });
  if (codeSplit.moved === 1 && codeSplit.stuck === 0) ok("migration moved 1 inline lesson out of the progress store");
  else fail(`migration moved ${codeSplit.moved}, stuck ${codeSplit.stuck}`);
  if (JSON.stringify(codeSplit.movedValue) === JSON.stringify(codeSplit.original))
    ok("migrated code is byte-identical to what was inline");
  else fail(`migration CORRUPTED the code: ${JSON.stringify(codeSplit.movedValue)}`);
  if (codeSplit.inlineGone) ok("the inline u.code field is removed once empty");
  else fail("u.code survived the migration — it will migrate again every boot");
  // The whole point: progress writes must stop carrying code.
  if (!codeSplit.progressStoreHasCode) ok("codelab_v1 no longer contains lesson code");
  else fail("lesson code is STILL inside codelab_v1 — the split did nothing");

  const codeLifecycle = await mp.evaluate(() => {
    const d = window.CODELAB.dev;
    d.setCodeForTest("html-3", { "index.html": "<p>keep me</p>" });
    const before = Object.keys(d.codeStore()).length;
    const removed = d.clearProfileCode();
    const after = Object.keys(d.codeStore()).length;
    return { before, removed, after };
  });
  if (codeLifecycle.after === 0 && codeLifecycle.removed >= 1)
    ok(`clearing a profile removed all ${codeLifecycle.removed} of its code keys`);
  else fail(`profile clear left ${codeLifecycle.after} code keys behind (removed ${codeLifecycle.removed} of ${codeLifecycle.before})`);

  /* ---- Handoff: a real two-device round trip ----
     The merge algebra is property-tested in Node (phase 0d). This gates the
     wiring: that an export of THIS profile merges back as a no-op, that a
     second device's work actually lands, and that a repeat import is inert. */
  const handoff = await mp.evaluate(async () => {
    const d = window.CODELAB.dev, S = window.CODELAB.sync, R = window.CODELAB.review;
    await d.loadAll();
    const mine = d.handoff.exportText();

    // 1. importing my own export must change nothing
    const self = d.handoff.preview(mine);

    // 2. forge a second device that finished two lessons and drilled a card
    const env = JSON.parse(mine);
    env.from = "Other device";
    env.src = "d-other";
    env.p.done = env.p.done.concat(["html-4", "html-5"]);
    env.p.days = env.p.days.concat([R.revToday() - 1]);
    env.p.rev["q:html-quiz#zzzzzz"] = [3, R.revToday() + 7, 1, 6];
    env.p.revStatsSrc["d-other"] = { s: 4, a: 40, c: 30, ta: 12, tc: 9 };
    env.sum = S.checksum(env.p);
    const forged = JSON.stringify(env);

    const before = d.handoff.profile();
    const pv = d.handoff.preview(forged);
    const merged = d.handoff.merge(forged);
    const after = d.handoff.profile();
    const again = d.handoff.merge(forged);   // repeat import
    const after2 = d.handoff.profile();

    return {
      selfEmpty: self.ok && self.diff.empty,
      previewLessons: pv.ok && pv.diff.lessons,
      mergedLessons: merged.ok && merged.diff.lessons,
      xpBefore: before.xp, xpAfter: after.xp, xpAfter2: after2.xp,
      doneBefore: Object.keys(before.done).length, doneAfter: Object.keys(after.done).length,
      cardBefore: !!before.rev["q:html-quiz#zzzzzz"], cardAfter: !!after.rev["q:html-quiz#zzzzzz"],
      statsAfter: after.revStats, statsAfter2: after2.revStats,
      repeatEmpty: again.ok && again.diff.empty,
      identical: S.stable(after) === S.stable(after2),
      lastDay: after.lastDay, streak: after.streak,
      academy: d.handoff.academy()
    };
  });
  if (handoff.selfEmpty) ok("importing this device's own export is a no-op");
  else fail("a self-import reported changes — the merge is not a fixed point");
  if (handoff.previewLessons === 2 && handoff.mergedLessons === 2)
    ok("preview and commit agree: 2 lessons from the other device");
  else fail(`preview said ${handoff.previewLessons} lessons, commit said ${handoff.mergedLessons}`);
  if (handoff.doneAfter === handoff.doneBefore + 2) ok(`the other device's work landed (${handoff.doneBefore} → ${handoff.doneAfter} lessons)`);
  else fail(`done went ${handoff.doneBefore} → ${handoff.doneAfter}, expected +2`);
  if (handoff.cardAfter && !handoff.cardBefore) ok("a card only the other device had is now scheduled here");
  else fail("the foreign review card did not arrive");
  if (handoff.repeatEmpty && handoff.identical && handoff.xpAfter === handoff.xpAfter2)
    ok("a repeat import changes nothing at all (byte-identical profile)");
  else fail(`repeat import mutated the profile: xp ${handoff.xpAfter} → ${handoff.xpAfter2}`);
  if (handoff.statsAfter.a === handoff.statsAfter2.a && handoff.statsAfter.a > 0)
    ok(`lifetime counters summed across devices without double-counting (${handoff.statsAfter.a} answers)`);
  else fail(`revStats double-counted: ${handoff.statsAfter.a} → ${handoff.statsAfter2.a}`);
  // The date format that would otherwise reset the streak to 1 every day.
  const todayKeyStr = await mp.evaluate(() => {
    const d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  });
  if (handoff.lastDay === todayKeyStr || handoff.lastDay === null)
    ok(`merged lastDay uses the app's unpadded date format (${handoff.lastDay})`);
  else fail(`merged lastDay is "${handoff.lastDay}" but todayKey() emits "${todayKeyStr}" — the streak would reset daily`);
  if (handoff.academy && handoff.academy.clXp === handoff.xpAfter2)
    ok(`the Academy mirror was re-derived through the XP ledger (clXp ${handoff.academy.clXp})`);
  else fail(`Academy ledger is ${handoff.academy && handoff.academy.clXp}, profile xp is ${handoff.xpAfter2}`);

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
