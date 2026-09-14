/* Per-checkpoint solutions — the pieces shared by the generator
   (tools/build-step-solutions.js) and the staleness gate in validate.js.

   A lesson's step solutions are DERIVED, never hand-written: the line diff
   from the starter to the solution is cut into changes, and the generator
   learns which checkpoint each change is for by reverting it in a real
   sandbox run. Everything here is pure Node so the gate needs no browser. */
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

/* Everything the generated data depends on. Change a starter, a solution or
   a checkpoint and the hash moves, so validate.js can refuse stale data and
   explanations written for an older version of the lesson. */
function lessonHash(lesson) {
  const basis = JSON.stringify({
    files: (lesson.files || []).map(f => [f.name, f.content]),
    solution: lesson.solution || {},
    steps: (lesson.steps || []).map(s => [s.text, s.test])
  });
  return crypto.createHash("sha256").update(basis).digest("hex").slice(0, 16);
}

/* LCS line diff. Common prefix/suffix are trimmed first so the table only
   spans the region that changed. */
function diffLines(a, b) {
  const n = a.length, m = b.length;
  let pre = 0;
  while (pre < n && pre < m && a[pre] === b[pre]) pre++;
  let suf = 0;
  while (suf < n - pre && suf < m - pre && a[n - 1 - suf] === b[m - 1 - suf]) suf++;
  const A = a.slice(pre, n - suf), B = b.slice(pre, m - suf);
  const N = A.length, M = B.length;
  const L = [];
  for (let i = 0; i <= N; i++) L.push(new Uint32Array(M + 1));
  for (let i = N - 1; i >= 0; i--)
    for (let j = M - 1; j >= 0; j--)
      L[i][j] = A[i] === B[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const ops = [];
  for (let k = 0; k < pre; k++) ops.push({ op: "eq", a: k, b: k });
  let i = 0, j = 0;
  while (i < N || j < M) {
    if (i < N && j < M && A[i] === B[j]) { ops.push({ op: "eq", a: pre + i, b: pre + j }); i++; j++; }
    else if (i < N && (j === M || L[i + 1][j] >= L[i][j + 1])) { ops.push({ op: "del", a: pre + i }); i++; }
    else { ops.push({ op: "add", b: pre + j }); j++; }
  }
  for (let k = 0; k < suf; k++) ops.push({ op: "eq", a: n - suf + k, b: m - suf + k });
  return ops;
}

/* How alike two lines of code are: shared identifiers and numbers over all
   of them, ignoring a trailing // comment. */
function lineTokens(s) {
  return new Set(String(s).replace(/\/\/.*$/, "").match(/[A-Za-z_$][\w$]*|\d+/g) || []);
}
function similarity(x, y) {
  const A = lineTokens(x), B = lineTokens(y);
  if (!A.size || !B.size) return 0;
  let shared = 0;
  A.forEach(t => { if (B.has(t)) shared++; });
  return shared / (A.size + B.size - shared);
}
const PAIR_AT = 0.3;

/* Inside one block of changed lines, decide which new line REPLACES which
   old one. Pairs must keep their order on both sides (old line 2 can't
   become new line 1 if old line 1 became new line 2): crossing pairs would
   put the starter's lines back out of order, and `const key` would land
   below the line that reads `key`. So this is an alignment — the most
   similarity that fits in order — and the path through it interleaves old
   and new lines exactly as both files have them. */
function alignBlock(oldLines, newLines) {
  const p = oldLines.length, q = newLines.length;
  const w = [], S = [];
  for (let i = 0; i < p; i++) {
    w.push(new Float64Array(q));
    for (let j = 0; j < q; j++) {
      const s = similarity(oldLines[i], newLines[j]);
      w[i][j] = s >= PAIR_AT ? s : 0;
    }
  }
  for (let i = 0; i <= p; i++) S.push(new Float64Array(q + 1));
  for (let i = 1; i <= p; i++)
    for (let j = 1; j <= q; j++) {
      let best = Math.max(S[i - 1][j], S[i][j - 1]);
      if (w[i - 1][j - 1] > 0 && S[i - 1][j - 1] + w[i - 1][j - 1] > best) best = S[i - 1][j - 1] + w[i - 1][j - 1];
      S[i][j] = best;
    }
  const path = [];
  let i = p, j = q;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && w[i - 1][j - 1] > 0 && S[i][j] === S[i - 1][j - 1] + w[i - 1][j - 1]) { path.push({ kind: "pair", d: i - 1, a: j - 1 }); i--; j--; }
    else if (j > 0 && S[i][j] === S[i][j - 1]) { path.push({ kind: "add", a: j - 1 }); j--; }
    else { path.push({ kind: "del", d: i - 1 }); i--; }
  }
  return path.reverse();
}

/* Every starter→solution change in a lesson, numbered across its files.

   A block of consecutive changed lines is often several changes at once —
   a new id on one line, new row fields on the next — each for a different
   checkpoint. So a block is cut finer: every replaced line is its own
   change (old and new together), while runs of lines that were only removed
   or only added stay together (a new function body is one change, not one
   per line). `line` is where the change sits in the SOLUTION (1-based),
   which is what the learner is reading toward.

   `seq` is the file as a walk: unchanged lines, and each changed slot tagged
   with the change it belongs to, in an order true to both files. */
function lessonDiff(lesson) {
  const starter = {};
  (lesson.files || []).forEach(f => { starter[f.name] = f.content; });
  const files = [];
  let id = 0;
  for (const f of lesson.files || []) {
    if (!lesson.solution || !Object.prototype.hasOwnProperty.call(lesson.solution, f.name)) continue;
    const a = String(f.content).split("\n"), b = String(lesson.solution[f.name]).split("\n");
    const ops = diffLines(a, b);
    const seq = [], hunks = [];
    let bLine = 0;
    for (let s = 0; s < ops.length; ) {
      if (ops[s].op === "eq") { seq.push({ kind: "eq", a: ops[s].a }); bLine++; s++; continue; }
      let e = s;
      while (e < ops.length && ops[e].op !== "eq") e++;
      const D = [], A = [];
      for (let k = s; k < e; k++) { if (ops[k].op === "del") D.push(ops[k].a); else A.push(ops[k].b); }
      let run = null;
      alignBlock(D.map(x => a[x]), A.map(x => b[x])).forEach(slot => {
        let h;
        /* A blank line ends a run: a new route and the helper below it are
           two changes, even with nothing unchanged between them. The blank
           line stays with the code above it. */
        const lastBlank = run && (run.kind === "del" ? run.hunk.del : run.hunk.add).slice(-1)[0] === "";
        if (lastBlank && run.kind === slot.kind) run = null;
        if (slot.kind !== "pair" && run && run.kind === slot.kind) h = run.hunk;
        else {
          h = { id: id++, file: f.name, line: null, del: [], add: [] };
          hunks.push(h);
          run = slot.kind === "pair" ? null : { kind: slot.kind, hunk: h };
        }
        if (h.line === null) h.line = bLine + 1;
        const entry = { kind: slot.kind, h: h.id };
        if (slot.kind !== "add") { entry.a = D[slot.d]; h.del.push(a[entry.a]); }
        if (slot.kind !== "del") { entry.b = A[slot.a]; h.add.push(b[entry.b]); bLine++; }
        seq.push(entry);
      });
      s = e;
    }
    files.push({ file: f.name, a, b, seq, hunks });
  }
  return { starter, files };
}

/* The solution with some changes put back to their starter lines. An empty
   set gives the solution exactly; every change reverted gives the starter
   exactly. */
function assemble(diff, reverted) {
  const out = Object.assign({}, diff.starter);
  for (const fd of diff.files) {
    const lines = [];
    fd.seq.forEach(en => {
      if (en.kind === "eq") { lines.push(fd.a[en.a]); return; }
      const rev = reverted.has(en.h);
      if (en.kind === "pair") lines.push(rev ? fd.a[en.a] : fd.b[en.b]);
      else if (en.kind === "del") { if (rev) lines.push(fd.a[en.a]); }
      else if (!rev) lines.push(fd.b[en.b]);
    });
    out[fd.file] = lines.join("\n");
  }
  return out;
}

/* Changed lines in a lesson (removed + added), however they are grouped. */
function changedLineCount(diff) {
  return diff.files.reduce((n, f) => n + f.hunks.reduce((x, h) => x + h.del.length + h.add.length, 0), 0);
}

/* The catalog as plain data, the way validate.js phase 0 loads it. */
function loadCatalog(root) {
  global.window = { CODELAB: { courses: [], _byId: {}, positions: [], _posById: {} } };
  require(path.join(root, "core.js"));
  require(path.join(root, "courses.js"));
  for (const c of window.CODELAB.courses) for (const f of c.files) require(path.join(root, f));
  return window.CODELAB;
}

/* A generated course file, or {} if it has not been built yet. */
function loadStepSolutions(file) {
  window.CODELAB._stepSol = {};
  if (!fs.existsSync(file)) return {};
  delete require.cache[require.resolve(file)];
  require(file);
  return window.CODELAB._stepSol;
}

module.exports = { lessonHash, diffLines, alignBlock, lessonDiff, assemble, changedLineCount, loadCatalog, loadStepSolutions };
