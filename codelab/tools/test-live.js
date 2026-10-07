/* Engine tests for the live-change harness — pure Node, no browser, well under a second.
   Usage:  node tools/test-live.js

   Changing Live Systems grades a migration by what it does to the requests
   still arriving while it runs. A wrong rule here either fails a safe plan
   ("v1 broke") or passes one that would take the site down, with nothing in
   the lesson to show why. This file is the CONTRACT for harnessLive in
   runner.js (opted into with `live: true`):

     T.db(tables)       tables: { name: { columns: { col: { notNull, default } }, rows } }
       insert(t, values)            fills "id" and defaults; unknown column and
                                    NOT NULL violations throw, Postgres-style
       select(t, where, cols)       copies; where = { col: value } (null matches
                                    null) or fn(row); cols names what is read,
                                    so a renamed or dropped column breaks it
       update(t, where, set, limit) set = { col: value } or fn(row); all or
                                    nothing; more than db.maxRows (500) rows
                                    in one statement is a statement timeout
       delete(t, where), count(t, where), columns(t), isNotNull(t, col)
       addColumn(t, col, { notNull, default })  NOT NULL without a default
                                    fails on a table that has rows
       dropColumn, renameColumn, setNotNull (fails if any null), dropNotNull,
       setDefault; db.log records every statement
     T.rollout({ db, apps, start, plan, instances, perTick, traffic, check })
       -> { ok, problems: [{ step, label, version, req, error }], requests, versions }
       traffic after the start, after each migration, and after each instance
       switched in a rolling deploy; a failing migration stops the plan
     T.expectRollout(opts, what)    throws a readable message about the first problem
*/
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SRC = fs.readFileSync(path.join(ROOT, "runner.js"), "utf8");

let passed = 0;
const failures = [];
function test(name, fn) {
  try { fn(); passed++; } catch (e) { failures.push(name + " — " + e.message); }
}
function eq(got, want, msg) {
  const a = JSON.stringify(got), b = JSON.stringify(want);
  if (a !== b) throw new Error((msg ? msg + ": " : "") + "expected " + b + ", got " + a);
}
function ok(cond, msg) { if (!cond) throw new Error(msg || "expected true"); }

/* Same extractor as test-concept.js: `function name(...) { ... }` by brace
   matching, skipping strings and comments. */
function extract(name) {
  const start = SRC.indexOf("function " + name + "(");
  if (start === -1) throw new Error("runner.js has no function " + name);
  let depth = 0;
  for (let i = SRC.indexOf("{", start); i < SRC.length; i++) {
    const c = SRC[i], n = SRC[i + 1];
    if (c === "/" && n === "/") { i = SRC.indexOf("\n", i); continue; }
    if (c === "/" && n === "*") { i = SRC.indexOf("*/", i + 2) + 1; continue; }
    if (c === '"' || c === "'") {
      for (i++; SRC[i] !== c; i++) if (SRC[i] === "\\") i++;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}" && --depth === 0) return SRC.slice(start, i + 1);
  }
  throw new Error("unbalanced braces in " + name);
}

let HARNESS = null;
try { HARNESS = extract("harnessLive"); }
catch (e) { failures.push("runner.js harnessLive — " + e.message); }

function build(src) {
  const G = { console };
  G.self = G;
  vm.createContext(G);
  vm.runInContext("var T = {};", G);
  vm.runInContext("(" + HARNESS + ")();", G);
  if (src) vm.runInContext(src, G);
  return G;
}
const run = (G, js) => vm.runInContext(js, G);
function throws(G, js) {
  try { run(G, js); } catch (e) { return e.message; }
  throw new Error("expected an error from: " + js);
}
const USERS = "var db = T.db({ users: { columns: { id: { notNull: true }, name: { notNull: true }, plan: { default: 'free' } }, rows: [{ id: 1, name: 'Ada' }, { id: 2, name: 'Linus', plan: 'pro' }] } });";

if (HARNESS) {
  /* ---- rows ---- */
  test("insert: fills the next id and column defaults", () => {
    const G = build(USERS);
    eq(run(G, "db.insert('users', { name: 'Grace' })"), { id: 3, name: "Grace", plan: "free" });
    eq(run(G, "db.count('users')"), 3);
  });
  test("insert: an unknown column is an error naming it", () => {
    const G = build(USERS);
    ok(/column "email" of relation "users" does not exist/.test(throws(G, "db.insert('users', { name: 'x', email: 'a@b' })")));
    eq(run(G, "db.count('users')"), 2, "nothing was written");
  });
  test("insert: a missing NOT NULL column is a not-null violation", () => {
    const G = build(USERS);
    ok(/null value in column "name" of relation "users" violates not-null constraint/.test(throws(G, "db.insert('users', {})")));
  });
  test("an unknown table is an error", () => {
    const G = build(USERS);
    ok(/relation "people" does not exist/.test(throws(G, "db.select('people')")));
  });
  test("select: where by value, null matches null, and named columns only", () => {
    const G = build(USERS + "db.addColumn('users', 'email');");
    eq(run(G, "db.select('users', { plan: 'pro' }, ['name'])"), [{ name: "Linus" }]);
    eq(run(G, "db.select('users', { email: null }).length"), 2);
    eq(run(G, "db.select('users', function (r) { return r.id > 1; }).length"), 1);
  });
  test("select: returns copies, so changing them changes nothing", () => {
    const G = build(USERS);
    run(G, "db.select('users')[0].name = 'Mallory'");
    eq(run(G, "db.select('users', { id: 1 })[0].name"), "Ada");
  });
  test("select: naming a column that isn't there is an error", () => {
    const G = build(USERS);
    ok(/column "full_name" of relation "users" does not exist/.test(throws(G, "db.select('users', null, ['id', 'full_name'])")));
    ok(/column "nme"/.test(throws(G, "db.select('users', { nme: 'Ada' })")));
  });
  test("update: an object or a function of the row, with a limit", () => {
    const G = build(USERS);
    eq(run(G, "db.update('users', { plan: 'free' }, { plan: 'pro' })"), 1);
    eq(run(G, "db.update('users', null, function (r) { return { name: r.name.toUpperCase() }; }, 1)"), 1);
    eq(run(G, "db.select('users', null, ['name']).map(function (r) { return r.name; })"), ["ADA", "Linus"]);
  });
  test("update: all or nothing when one row breaks a constraint", () => {
    const G = build(USERS);
    throws(G, "db.update('users', null, function (r) { return { name: r.id === 2 ? null : 'X' }; })");
    eq(run(G, "db.select('users', null, ['name']).map(function (r) { return r.name; })"), ["Ada", "Linus"]);
  });
  test("update: more rows than maxRows in one statement times out, and writes nothing", () => {
    const G = build("var rows = []; for (var i = 1; i <= 1200; i++) rows.push({ id: i, n: i }); var db = T.db({ t: { columns: { id: {}, n: {}, m: {} }, rows: rows } });");
    ok(/statement timeout.*1200 rows.*500 per statement/.test(throws(G, "db.update('t', null, { m: 1 })")));
    eq(run(G, "db.count('t', { m: 1 })"), 0);
    eq(run(G, "db.update('t', { m: null }, { m: 1 }, 500)"), 500);
    eq(run(G, "db.update('t', { m: null }, { m: 1 }, 500) + db.update('t', { m: null }, { m: 1 }, 500)"), 700);
    eq(run(G, "db.count('t', { m: null })"), 0);
  });
  test("delete removes matching rows", () => {
    const G = build(USERS);
    eq(run(G, "db.delete('users', { id: 1 })"), 1);
    eq(run(G, "db.count('users')"), 1);
  });

  /* ---- migrations ---- */
  test("addColumn: nullable is null on old rows; a default fills them", () => {
    const G = build(USERS);
    run(G, "db.addColumn('users', 'email'); db.addColumn('users', 'verified', { notNull: true, default: false })");
    eq(run(G, "db.select('users', { id: 1 })[0]"), { id: 1, name: "Ada", plan: "free", email: null, verified: false });
    eq(run(G, "db.insert('users', { name: 'G' }).verified"), false);
  });
  test("addColumn: NOT NULL without a default fails on a table with rows, works on an empty one", () => {
    const G = build(USERS + "var e = T.db({ t: { columns: { id: {} } } });");
    ok(/column "email" of relation "users" contains null values/.test(throws(G, "db.addColumn('users', 'email', { notNull: true })")));
    eq(run(G, "db.columns('users')"), ["id", "name", "plan"], "nothing added");
    run(G, "e.addColumn('t', 'x', { notNull: true })");
    eq(run(G, "e.isNotNull('t', 'x')"), true);
  });
  test("addColumn: an existing column is an error", () => {
    const G = build(USERS);
    ok(/already exists/.test(throws(G, "db.addColumn('users', 'name')")));
  });
  test("renameColumn: old readers break at once", () => {
    const G = build(USERS);
    run(G, "db.renameColumn('users', 'name', 'full_name')");
    ok(/column "name"/.test(throws(G, "db.select('users', null, ['id', 'name'])")));
    eq(run(G, "db.select('users', { id: 1 }, ['full_name'])"), [{ full_name: "Ada" }]);
    eq(run(G, "db.isNotNull('users', 'full_name')"), true, "constraints move with the column");
  });
  test("dropColumn: the data is gone", () => {
    const G = build(USERS);
    run(G, "db.dropColumn('users', 'plan')");
    eq(run(G, "db.select('users', { id: 2 })[0]"), { id: 2, name: "Linus" });
  });
  test("setNotNull: fails while any row is null, works after", () => {
    const G = build(USERS + "db.addColumn('users', 'email');");
    ok(/contains null values/.test(throws(G, "db.setNotNull('users', 'email')")));
    run(G, "db.update('users', null, function (r) { return { email: r.name + '@x' }; }); db.setNotNull('users', 'email')");
    ok(/not-null/.test(throws(G, "db.insert('users', { name: 'G' })")));
  });
  test("dropNotNull and setDefault", () => {
    const G = build(USERS);
    run(G, "db.dropNotNull('users', 'name'); db.setDefault('users', 'plan', 'trial')");
    eq(run(G, "db.insert('users', {})"), { id: 3, name: null, plan: "trial" });
  });
  test("the log records statements in order", () => {
    const G = build(USERS);
    run(G, "db.addColumn('users', 'email'); db.update('users', null, { email: 'x' })");
    eq(run(G, "db.log.map(function (e) { return e.op + ':' + (e.rows === undefined ? e.column : e.rows); })"), ["addColumn:email", "update:2"]);
  });

  /* ---- rollout ---- */
  const RENAME = USERS + [
    "var apps = {",
    "  v1: function (db, req) { if (req.op === 'add') return db.insert('users', { name: req.name }).id; return db.select('users', { id: req.id }, ['name'])[0].name; },",
    "  v2: function (db, req) { if (req.op === 'add') return db.insert('users', { name: req.name, full_name: req.name }).id;",
    "    var r = db.select('users', { id: req.id }, ['name', 'full_name'])[0]; return r.full_name == null ? r.name : r.full_name; }",
    "};",
    "function traffic(n) { return n % 2 ? { op: 'add', name: 'u' + n } : { op: 'get', id: 1 }; }",
    "function check(req, res) { return req.op === 'get' && res !== 'Ada' ? 'returned ' + res : null; }"
  ].join("\n");
  test("rollout: a naive rename breaks the old version still serving", () => {
    const G = build(RENAME);
    const r = run(G, "T.rollout({ db: db, apps: apps, start: 'v1', traffic: traffic, check: check, plan: [{ migrate: function rename(db) { db.renameColumn('users', 'name', 'full_name'); } }] })");
    eq(r.ok, false);
    eq(r.problems[0].step, 1);
    eq(r.problems[0].label, "migrate rename");
    eq(r.problems[0].version, "v1");
    ok(/column "name" of relation "users" does not exist/.test(r.problems[0].error), r.problems[0].error);
  });
  test("rollout: expand, then deploy, works with no problems", () => {
    const G = build(RENAME);
    const r = run(G, "T.rollout({ db: db, apps: apps, start: 'v1', traffic: traffic, check: check, plan: [{ migrate: function (db) { db.addColumn('users', 'full_name'); } }, { deploy: 'v2' }] })");
    eq(r.ok, true, JSON.stringify(r.problems));
    eq(r.versions, ["v2", "v2", "v2"]);
    eq(r.requests, 4 * (1 + 1 + 3));
  });
  test("rollout: during a rolling deploy both versions serve traffic", () => {
    const G = build(RENAME + "\nvar seen = {}; function spy(req, res, v) { seen[v] = (seen[v] || 0) + 1; return null; }");
    run(G, "T.rollout({ db: db, apps: apps, start: 'v1', traffic: function () { return { op: 'get', id: 1 }; }, check: spy, instances: 3, perTick: 3, plan: [{ migrate: function (db) { db.addColumn('users', 'full_name'); } }, { deploy: 'v2' }] })");
    /* start 3 + migrate 3 on v1; deploy ticks: (v2,v1,v1) (v2,v2,v1) (v2,v2,v2) */
    eq(run(G, "seen"), { v1: 9, v2: 6 });
  });
  test("rollout: a check's complaint is a problem too", () => {
    const G = build(RENAME);
    const r = run(G, "T.rollout({ db: db, apps: { v1: apps.v1, bad: function () { return 'Bob'; } }, start: 'v1', traffic: traffic, check: check, plan: [{ deploy: 'bad' }] })");
    eq(r.problems[0].error, "returned Bob");
    eq(r.problems[0].version, "bad");
    eq(r.problems[0].label, "deploy bad (1 of 3 instances switched)");
  });
  test("rollout: a failing migration stops the plan there", () => {
    const G = build(RENAME);
    const r = run(G, "T.rollout({ db: db, apps: apps, start: 'v1', traffic: traffic, check: check, plan: [function (db) { db.addColumn('users', 'email', { notNull: true }); }, { deploy: 'v2' }] })");
    eq(r.stopped, 1);
    ok(/the migration failed: column "email".*contains null values/.test(r.problems[0].error), r.problems[0].error);
    eq(r.versions, ["v1", "v1", "v1"], "never deployed");
  });
  test("rollout: a bad plan step or unknown version is a clear error", () => {
    const G = build(RENAME);
    ok(/deploys "v9", but the versions are v1, v2/.test(throws(G, "T.rollout({ db: db, apps: apps, start: 'v1', traffic: traffic, plan: [{ deploy: 'v9' }] })")));
    ok(/Step 1 of the plan should be/.test(throws(G, "T.rollout({ db: db, apps: apps, start: 'v1', traffic: traffic, plan: ['deploy v2'] })")));
    ok(/should be an array/.test(throws(G, "T.rollout({ db: db, apps: apps, start: 'v1', traffic: traffic, plan: {} })")));
  });
  test("rollout: requests get copies, so an app can't change the next request", () => {
    const G = build(RENAME + "\nvar reqs = [{ op: 'get', id: 1 }];");
    run(G, "T.rollout({ db: db, apps: { v1: function (db, req) { req.id = 99; return 'Ada'; } }, start: 'v1', traffic: function () { return reqs[0]; }, check: check, plan: [] })");
    eq(run(G, "reqs[0].id"), 1);
  });
  test("expectRollout: names the step, the version and the request", () => {
    const G = build(RENAME);
    const msg = throws(G, "T.expectRollout({ db: db, apps: apps, start: 'v1', traffic: traffic, check: check, plan: [{ migrate: function rename(db) { db.renameColumn('users', 'name', 'full_name'); } }] }, 'Renaming')");
    ok(/^Renaming: Step 1 \(migrate rename\): a request to v1 \{"op":"get","id":1\} threw column "name" of relation "users" does not exist \(\d+ problems in all\)$/.test(msg), msg);
    const G2 = build(RENAME);
    eq(run(G2, "T.expectRollout({ db: db, apps: apps, start: 'v1', traffic: traffic, check: check, plan: [] }).ok"), true);
  });
}

if (failures.length) {
  console.log("  ✗ live: " + passed + " passed, " + failures.length + " failed");
  failures.forEach(f => console.log("    ✗ " + f));
  process.exit(1);
}
console.log("  ✓ live: " + passed + " passed, 0 failed");
