/* Changing Live Systems — Unit 3: Moving data */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* ---- 3-1: email_lower ---- */
  var W31 = L(
    "function world(o) {",
    "  o = o || {};",
    "  var seed = [];",
    "  for (var i = 1; i <= 300; i++) seed.push({ id: i, email: (i % 3 ? 'User' : 'USER') + i + '@Example.com' });",
    "  var db = T.db({ users: { columns: { id: { notNull: true }, email: { notNull: true } }, rows: seed } });",
    "  var ids = {}, added = [];",
    "  seed.forEach(function (r) { ids[r.email.toLowerCase()] = r.id; });",
    "  var every = o.signupEvery || 3;",
    "  function traffic(n) {",
    "    if (n % every === 1) return { op: 'signup', email: 'New' + n + '@Mail.COM' };",
    "    var email = added.length && n % 2 ? added[n % added.length] : 'user' + ((n * 37) % 300 + 1) + '@example.com';",
    "    return { op: 'login', email: n % 4 === 0 ? email.toUpperCase() : email };",
    "  }",
    "  function check(req, res) {",
    "    if (req.op === 'signup') {",
    "      if (typeof res !== 'number') return 'returned ' + JSON.stringify(res) + ' instead of the new user id';",
    "      ids[req.email.toLowerCase()] = res; added.push(req.email.toLowerCase()); return null;",
    "    }",
    "    var want = ids[req.email.toLowerCase()];",
    "    if (res !== want) return 'logged in as ' + JSON.stringify(res) + ' (expected user ' + want + ')';",
    "    return null;",
    "  }",
    "  return { db: db, traffic: traffic, check: check };",
    "}");
  var V1_31 = L(
    "// v1: in production. Lower-cases every user's email on every",
    "// login: a full scan. v2 looks it up in a column instead.",
    "function v1(db, req) {",
    "  if (req.op === \"signup\") return db.insert(\"users\", { email: req.email }).id;",
    "  const all = db.select(\"users\", null, [\"id\", \"email\"]);",
    "  const u = all.find(r => r.email.toLowerCase() === req.email.toLowerCase());",
    "  return u ? u.id : null;",
    "}");
  var V2_31 = L(
    "// v2: looks users up by email_lower (indexed, in real life), and",
    "// falls back to a slow scan for rows that don't have it yet.",
    "function v2(db, req) {",
    "  const key = req.email.toLowerCase();",
    "  if (req.op === \"signup\") return db.insert(\"users\", { email: req.email, email_lower: key }).id;",
    "  const hit = db.select(\"users\", { email_lower: key }, [\"id\"])[0];",
    "  if (hit) return hit.id;",
    "  const old = db.select(\"users\", { email_lower: null }, [\"id\", \"email\"])",
    "    .find(r => r.email.toLowerCase() === key);",
    "  return old ? old.id : null;",
    "}");

  /* ---- 3-2: total_cents ---- */
  var W32 = L(
    "function world() {",
    "  var seed = [], s = 7;",
    "  function r() { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }",
    "  for (var i = 1; i <= 2400; i++) seed.push({ id: i, total: Math.round(r() * 50000) / 100 });",
    "  seed[10].total = 1.005; seed[11].total = 0; seed[12].total = 19.99;",
    "  var db = T.db({ orders: { columns: { id: { notNull: true }, total: { notNull: true }, total_cents: {} }, rows: seed } });",
    "  var want = {}, added = [];",
    "  seed.forEach(function (o) { want[o.id] = Math.round(o.total * 100); });",
    "  function traffic(n) {",
    "    if (n % 3 === 1) return { op: 'create', cents: 1000 + n * 17 };",
    "    return { op: 'receipt', id: added.length && n % 2 ? added[n % added.length] : (n * 131) % 2400 + 1 };",
    "  }",
    "  function check(req, res) {",
    "    if (req.op === 'create') { want[res] = req.cents; added.push(res); return null; }",
    "    if (res !== want[req.id]) return 'showed ' + res + ' cents for order ' + req.id + ' (expected ' + want[req.id] + ')';",
    "    return null;",
    "  }",
    "  return { db: db, traffic: traffic, check: check, want: want };",
    "}");
  var V2_32 = L(
    "// v2: live on every server. Writes both columns; reads total_cents",
    "// and works it out from total for rows that don't have it yet.",
    "function v2(db, req) {",
    "  if (req.op === \"create\") return db.insert(\"orders\", { total: req.cents / 100, total_cents: req.cents }).id;",
    "  const o = db.select(\"orders\", { id: req.id }, [\"total\", \"total_cents\"])[0];",
    "  return o.total_cents ?? Math.round(o.total * 100);",
    "}");
  var ENFORCE = L(
    "function enforce(db) {",
    "  db.setNotNull(\"orders\", \"total_cents\");",
    "}");

  window.CODELAB.addUnit("change", {
    id: "change-u3",
    title: "Moving data",
    icon: "🚚",
    blurb: "A new column is the easy part. Filling it for millions of existing rows, while people keep writing new ones, is where migrations go wrong: defaults that look like data, and one giant UPDATE that locks the table until it times out.",
    cheat: [
      { h: "A required column, safely", lang: "text", code:
"1 add it nullable\n" +
"2 deploy code that always writes it\n" +
"3 backfill the old rows with the REAL value\n" +
"4 then make it NOT NULL",
        note: "A default is right only when it's the true value for every old row. Otherwise it hides missing data behind a plausible one." },
      { h: "Backfill in batches", lang: "js", code:
"let n;\n" +
"do {\n" +
"  n = db.update(\"orders\", { total_cents: null },\n" +
"    o => ({ total_cents: Math.round(o.total * 100) }), 500);\n" +
"} while (n > 0);",
        note: "Each statement touches at most 500 rows (the last argument is a LIMIT). Selecting on \"still null\" makes it safe to stop and resume." },
      { h: "Why not one UPDATE?", lang: "text", code:
"one statement   locks every row it touches until it ends,\n" +
"                runs past statement timeouts, bloats the log,\n" +
"                and when it fails, it all rolls back\n" +
"batches         short locks, progress kept, can pause",
        note: "Strong Migrations, GitLab's batched background migrations and GitHub's gh-ost all work this way." }
    ],
    lessons: [

      {
        id: "change-u3-1",
        title: "A default isn't a backfill",
        kind: "js", chip: "LIVE", xp: 25, mins: 20, live: true,
        brief: "Logins ignore capitalization by scanning every user. `v2` looks users up by a new column instead, `email_lower`, which has to end up **NOT NULL** and correct for **every** user, old ones included.\n\nA teammate's plan adds the column NOT NULL with a default of `\"\"`, since that's what Postgres needs to add a NOT NULL column to a table with rows.\n\nWrite a plan where no request fails, every server ends on `v2`, and every user's `email_lower` is their email in lower case.",
        steps: [
          { text: "No request fails while the plan runs.",
            test: L(W31,
              "var w = world();",
              "T.expectRollout({ db: w.db, apps: { v1: v1, v2: v2 }, start: 'v1', plan: plan, traffic: w.traffic, check: w.check }, 'Your plan');") },
          { text: "Afterwards `email_lower` is NOT NULL and right for every user, and every server runs v2.",
            test: L(W31,
              "var w = world();",
              "var r = T.rollout({ db: w.db, apps: { v1: v1, v2: v2 }, start: 'v1', plan: plan, traffic: w.traffic, check: w.check });",
              "T.expect(r.ok, 'Make the plan run cleanly first.');",
              "T.eq(r.versions.join(','), 'v2,v2,v2', 'Deploy v2 to every server.');",
              "T.expect(w.db.isNotNull('users', 'email_lower'), 'email_lower should end NOT NULL: db.setNotNull(\"users\", \"email_lower\") once every row has it.');",
              "var wrong = w.db.select('users', null, ['id', 'email', 'email_lower']).filter(function (u) { return u.email_lower !== u.email.toLowerCase(); });",
              "T.expect(wrong.length === 0, wrong.length + ' users have the wrong email_lower (user ' + (wrong[0] && wrong[0].id) + ' has ' + JSON.stringify(wrong[0] && wrong[0].email_lower) + '). Fill it from each row\\'s email.');") },
          { text: "It also works on a busier day.", hidden: true,
            test: L(W31,
              "var w = world({ signupEvery: 2 });",
              "T.expectRollout({ db: w.db, apps: { v1: v1, v2: v2 }, start: 'v1', plan: plan, traffic: w.traffic, check: w.check, instances: 5, perTick: 7 }, 'With 5 servers and more signups');") }
        ],
        files: [{ name: "script.js", content: L(
          V1_31,
          "",
          V2_31,
          "",
          "function addEmailLower(db) {",
          "  db.addColumn(\"users\", \"email_lower\", { notNull: true, default: \"\" });",
          "}",
          "",
          "const plan = [",
          "  { migrate: addEmailLower },",
          "  { deploy: \"v2\" }",
          "];",
          "") }],
        hints: [
          "With a default of \"\", v2 finds no row for an old user: \"\" isn't their email, and it isn't null either, so the fallback skips them too. Add the column nullable instead.",
          "Add it nullable, deploy v2 (it writes email_lower on every signup), then fill the old rows with db.update(\"users\", { email_lower: null }, u => ({ email_lower: u.email.toLowerCase() })), then db.setNotNull."
        ],
        solution: { "script.js": L(
          V1_31,
          "",
          V2_31,
          "",
          "function addEmailLower(db) {",
          "  db.addColumn(\"users\", \"email_lower\");",
          "}",
          "",
          "// Every server writes email_lower now, so nothing can add a null after this.",
          "function backfill(db) {",
          "  db.update(\"users\", { email_lower: null }, u => ({ email_lower: u.email.toLowerCase() }));",
          "}",
          "",
          "function enforce(db) {",
          "  db.setNotNull(\"users\", \"email_lower\");",
          "}",
          "",
          "const plan = [",
          "  { migrate: addEmailLower },",
          "  { deploy: \"v2\" },",
          "  { migrate: backfill },",
          "  { migrate: enforce }",
          "];",
          "") }
      },

      {
        id: "change-u3-2",
        title: "Backfill in batches",
        kind: "js", chip: "LIVE", xp: 25, mins: 20, live: true,
        brief: "`orders` has 2,400 rows and a new `total_cents` column (an integer, so money stops being a float). `v2`, which writes both, is already on every server.\n\nWhat's left is the plan's first step, `backfill`: fill `total_cents` with `Math.round(total * 100)` for every old order. Then `enforce` makes it NOT NULL.\n\nThis database cancels any statement that touches more than **500 rows**, the way a statement timeout does on a big table. `db.update` takes a fourth argument, a row limit.",
        steps: [
          { text: "The plan runs without a failed statement or request.",
            test: L(W32,
              "var w = world();",
              "T.expectRollout({ db: w.db, apps: { v2: v2 }, start: 'v2', plan: plan, traffic: w.traffic, check: w.check }, 'Your plan');") },
          { text: "Every order's `total_cents` is `Math.round(total * 100)`, and the column is NOT NULL.",
            test: L(W32,
              "var w = world();",
              "var r = T.rollout({ db: w.db, apps: { v2: v2 }, start: 'v2', plan: plan, traffic: w.traffic, check: w.check });",
              "T.expect(r.ok, 'Make the plan run cleanly first.');",
              "T.expect(w.db.isNotNull('orders', 'total_cents'), 'Keep the enforce step: total_cents should end NOT NULL.');",
              "var bad = w.db.select('orders', null, ['id', 'total', 'total_cents']).filter(function (o) { return o.total_cents !== w.want[o.id]; });",
              "T.expect(bad.length === 0, bad.length + ' orders have the wrong total_cents (order ' + (bad[0] && bad[0].id) + ': total ' + (bad[0] && bad[0].total) + ', total_cents ' + (bad[0] && bad[0].total_cents) + '). Use Math.round(total * 100).');") },
          { text: "The batches are a sensible size.", hidden: true,
            test: L(W32,
              "var w = world();",
              "T.rollout({ db: w.db, apps: { v2: v2 }, start: 'v2', plan: [{ migrate: backfill }], traffic: function () { return { op: 'receipt', id: 1 }; }, check: function () { return null; }, perTick: 1 });",
              "var updates = w.db.log.filter(function (e) { return e.op === 'update' && e.rows > 0; });",
              "T.expect(updates.length <= 60, 'Your backfill sent ' + updates.length + ' UPDATE statements for 2,400 rows. One row at a time is a round trip per row: on 50 million rows, that takes days. Use batches of a few hundred.');") }
        ],
        files: [{ name: "script.js", content: L(
          V2_32,
          "",
          "function backfill(db) {",
          "  db.update(\"orders\", { total_cents: null }, o => ({ total_cents: Math.round(o.total * 100) }));",
          "}",
          "",
          ENFORCE,
          "",
          "const plan = [",
          "  { migrate: backfill },",
          "  { migrate: enforce }",
          "];",
          "") }],
        hints: [
          "db.update(table, where, set, 500) touches at most 500 rows and returns how many it touched. Call it in a loop until it touches 0.",
          "The where clause has to skip rows already done, or each batch updates the same first 500 forever: { total_cents: null } does that, and also means a backfill that stops halfway can just be run again."
        ],
        solution: { "script.js": L(
          V2_32,
          "",
          "// 500 rows per statement; { total_cents: null } skips finished rows,",
          "// so this can stop halfway and be run again.",
          "function backfill(db) {",
          "  let n;",
          "  do {",
          "    n = db.update(\"orders\", { total_cents: null }, o => ({ total_cents: Math.round(o.total * 100) }), 500);",
          "  } while (n > 0);",
          "}",
          "",
          ENFORCE,
          "",
          "const plan = [",
          "  { migrate: backfill },",
          "  { migrate: enforce }",
          "];",
          "") }
      },

      {
        id: "change-u3-quiz",
        title: "Unit 3 quiz: Moving data",
        kind: "quiz", xp: 10,
        brief: "Required columns, defaults and batched backfills. 80% to pass.",
        questions: [
          { q: "When is a default the right way to fill a new NOT NULL column on old rows?",
            choices: ["Always: a NOT NULL column on a table with rows can't be added any other way", "When it's the true value for every existing row", "Never", "Only for text columns"],
            answer: 1, explain: "Otherwise the default is wrong data that looks like real data." },
          { q: "What's the safe order for a new required column whose value is computed?",
            choices: ["Add it NOT NULL, then deploy, then backfill", "Backfill, then add it", "Add nullable, deploy writers, backfill, then NOT NULL", "Deploy readers first, then add it"],
            answer: 2, explain: "Nothing can insert a null once every writer sets it, so the constraint goes last." },
          { q: "Why backfill in batches rather than one UPDATE?",
            choices: ["Batches use less disk space in the end because the log is written in smaller pieces", "One statement holds locks and times out, and a failure rolls back everything", "Databases can't update more than 1,000 rows", "Batches are required by SQL"],
            answer: 1, explain: "Short statements keep locks short and keep the progress already made." },
          { q: "Your batch loop updates WHERE id <= 500 each time. What goes wrong?",
            choices: ["Nothing: it fills every row eventually, just more slowly than one big UPDATE", "It updates the same first 500 rows forever", "It skips the last row", "It locks the table"],
            answer: 1, explain: "Each batch has to select rows that still need doing: WHERE new_column IS NULL, or a moving id range." },
          { q: "What makes a backfill safe to stop and run again?",
            choices: ["Running it at night when traffic is low", "Selecting only rows that still need the change", "A bigger batch size", "Running it twice at once"],
            answer: 1, explain: "Then a rerun simply carries on where the last one stopped." }
        ]
      }
    ]
  });
})();
