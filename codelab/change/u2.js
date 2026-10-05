/* Changing Live Systems — Unit 2: Expand and contract */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* The checks' world: 40 users, signups and profile reads arriving the
     whole time, and a check that every profile shows the name its owner
     signed up with. `cols` is the users schema the lesson starts from;
     `rows` adds columns to the seed rows. */
  function world(cols, rowExtra) {
    return L(
      "function world(o) {",
      "  o = o || {};",
      "  var seed = [];",
      "  for (var i = 1; i <= 40; i++) seed.push(Object.assign({ id: i, name: 'User ' + i }, " + (rowExtra || "{}") + "));",
      "  seed.forEach(function (r) { Object.keys(r).forEach(function (k) { if (r[k] === '$name') r[k] = r.name; }); });",
      "  var db = T.db({ users: { columns: " + cols + ", rows: seed } });",
      "  var expected = {}, added = [];",
      "  seed.forEach(function (r) { expected[r.id] = r.name; });",
      "  var every = o.signupEvery || 3;",
      "  function traffic(n) {",
      "    if (n % every === 1) return { op: 'signup', name: 'New ' + n };",
      "    var id = added.length && n % 2 ? added[n % added.length] : (n * 7) % 40 + 1;",
      "    return { op: 'profile', id: id };",
      "  }",
      "  function check(req, res) {",
      "    if (req.op === 'signup') {",
      "      if (typeof res !== 'number') return 'returned ' + JSON.stringify(res) + ' instead of the new user id';",
      "      expected[res] = req.name; added.push(res); return null;",
      "    }",
      "    if (res !== expected[req.id]) return 'showed ' + JSON.stringify(res) + ' for user ' + req.id + ' (expected ' + JSON.stringify(expected[req.id]) + ')';",
      "    return null;",
      "  }",
      "  return { db: db, traffic: traffic, check: check, expected: expected };",
      "}");
  }

  var V1 = L(
    "// v1: in production now.",
    "function v1(db, req) {",
    "  if (req.op === \"signup\") return db.insert(\"users\", { name: req.name }).id;",
    "  return db.select(\"users\", { id: req.id }, [\"name\"])[0].name;",
    "}");
  var V2 = L(
    "// v2: writes both columns, reads full_name and falls back to name",
    "// for rows nobody has copied yet.",
    "function v2(db, req) {",
    "  if (req.op === \"signup\") return db.insert(\"users\", { name: req.name, full_name: req.name }).id;",
    "  const u = db.select(\"users\", { id: req.id }, [\"name\", \"full_name\"])[0];",
    "  return u.full_name ?? u.name;",
    "}");
  var V3 = L(
    "// v3, from a teammate: only knows full_name.",
    "function v3(db, req) {",
    "  if (req.op === \"signup\") return db.insert(\"users\", { full_name: req.name }).id;",
    "  return db.select(\"users\", { id: req.id }, [\"full_name\"])[0].full_name;",
    "}");

  /* 2-2 starts from users(id, name). */
  var W22 = world("{ id: { notNull: true }, name: { notNull: true } }");
  /* 2-3 starts where 2-2 ended: both columns, every row copied, v2 live. */
  var W23 = world("{ id: { notNull: true }, name: { notNull: true }, full_name: {} }", "{ full_name: '$name' }");

  window.CODELAB.addUnit("change", {
    id: "change-u2",
    title: "Expand and contract",
    icon: "🪗",
    blurb: "The pattern behind almost every safe change to a running system: add the new thing beside the old, move everything over, and only then take the old away. You'll rename a column with traffic arriving the whole time, and not drop a single request.",
    cheat: [
      { h: "Parallel change (Danilo Sato)", lang: "text", code:
"expand     add the new column; old code ignores it\n" +
"migrate    deploy code that writes both, reads new-or-old;\n" +
"           copy the old rows over (backfill)\n" +
"contract   deploy code that uses only the new column;\n" +
"           then drop the old one",
        note: "Each phase ships on its own. Until the contract, you can still roll back." },
      { h: "A plan in this course", lang: "js", code:
"const plan = [\n" +
"  { migrate: expand },   // runs, then traffic arrives\n" +
"  { deploy: \"v2\" },      // instances switch one by one,\n" +
"                         // traffic between each switch\n" +
"  { migrate: backfill }\n" +
"];",
        note: "The checks run your plan against live traffic and report the first request that failed: which step, which version, which request." },
      { h: "The database", lang: "js", code:
"db.addColumn(\"users\", \"full_name\")          // nullable\n" +
"db.update(\"users\", { full_name: null },\n" +
"  row => ({ full_name: row.name }))         // a function of each row\n" +
"db.dropNotNull(\"users\", \"name\")\n" +
"db.setNotNull(\"users\", \"full_name\")        // fails while any is null\n" +
"db.dropColumn(\"users\", \"name\")",
        note: "Selects name their columns, like real queries do, so code that names a dropped column breaks." }
    ],
    lessons: [

      {
        id: "change-u2-1",
        title: "Expand, migrate, contract",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "Danilo Sato's name for it, on Martin Fowler's site, is **parallel change**; most teams call it **expand and contract**. To rename `users.name` to `full_name`:\n\n1. **Expand.** Add `full_name`, nullable. Old code never mentions it.\n2. **Migrate.** Deploy code that writes **both** columns and reads `full_name`, falling back to `name`. Then copy the old rows over.\n3. **Contract.** Deploy code that only uses `full_name`. Then drop `name`.\n\nEvery step is safe with whatever else is running at the time.",
            ask: { type: "order", transfer: true,
              q: "Put the rename in a safe order.",
              lines: ["Add full_name as a nullable column", "Deploy v2: write both, read full_name or name", "Copy name into full_name where it's missing", "Deploy v3: use only full_name", "Drop the name column"],
              why: "Expand, migrate (code, then data), contract (code, then the column). Nothing is removed while anything still reads it." } },
          { read: "The order **inside** the migrate phase matters too. Copying rows (the **backfill**) before every server writes both columns leaves a gap: a v1 server still running during the deploy inserts users with only `name`, after the copy has already run.\n\nSo: first every writer writes the new column, **then** backfill. After that, no row is missing it, and none can become missing.",
            ask: { type: "pick", transfer: true,
              q: "You backfill full_name, then deploy v2 (which writes both). A week later some users have an empty full_name. Why?",
              choices: [
                "The backfill skipped rows it couldn't lock",
                "v1 servers kept inserting users without full_name during v2's deploy",
                "v2's dual write is buggy",
                "The column default was wrong"
              ],
              answer: 1,
              why: [
                "Possible in some databases, but the timeline here explains it on its own.",
                "Right. Everything inserted between the backfill and the last v1 server going away is missing it.",
                "v2 writes both. The rows came from v1.",
                "There's no default here; the rows are null because nothing wrote them."
              ] } },
          { read: "Why not contract straight away? Because **rollback**. Until `name` is dropped, you can put v1 back and it finds everything it needs: v2 kept writing `name` on every signup.\n\nThe contract is the one step you can't undo, so it waits until the new version has run long enough to trust. Often that's days, and the contract ships as its own small change.",
            ask: { type: "pick",
              q: "v2 is live and the backfill is done. You find a bug in v2. Which statement is true?",
              choices: [
                "You can't go back: the backfill changed the data",
                "Rolling back to v1 is safe: name is still there and up to date",
                "You must drop full_name before v1 can run again",
                "Rolling back is safe only if no one signed up since v2 went out"
              ],
              answer: 1,
              why: [
                "The backfill only added data to a column v1 ignores.",
                "Right. That's why the old column stays until the contract.",
                "v1 never mentions full_name, so it doesn't care that it's there.",
                "v2 wrote name for every signup too, so v1 sees them all."
              ] } }
        ]
      },

      {
        id: "change-u2-2",
        title: "A rename that drops nothing",
        kind: "js", chip: "LIVE", xp: 25, mins: 20, live: true,
        brief: "Product wants `users.name` called `full_name`. A teammate wrote the migration and a `v2` that uses the new column. Their plan renames the column and deploys.\n\nThe checks run your `plan` against live traffic: 3 servers on `v1`, signups and profile views arriving the whole time.\n\nRewrite the plan so **no request fails** and by the end **every user has a `full_name`**, with all servers on `v2`. Don't remove anything yet: the contract is the next lesson.",
        steps: [
          { text: "No request fails while the plan runs.",
            test: L(W22,
              "var w = world();",
              "T.expectRollout({ db: w.db, apps: { v1: v1, v2: v2 }, start: 'v1', plan: plan, traffic: w.traffic, check: w.check }, 'Your plan');") },
          { text: "Afterwards every user has a `full_name` equal to their name, and every server runs v2.",
            test: L(W22,
              "var w = world();",
              "var r = T.rollout({ db: w.db, apps: { v1: v1, v2: v2 }, start: 'v1', plan: plan, traffic: w.traffic, check: w.check });",
              "T.expect(r.ok, 'Make the plan run cleanly first.');",
              "T.eq(r.versions.join(','), 'v2,v2,v2', 'Deploy v2 to every server.');",
              "var rows = w.db.select('users', null, ['id', 'full_name']);",
              "var missing = rows.filter(function (u) { return u.full_name == null; });",
              "T.expect(missing.length === 0, missing.length + ' users have no full_name after the plan (user ' + (missing[0] && missing[0].id) + ', for one). Some rows were written after your copy ran: copy them once every server writes both columns.');",
              "rows.forEach(function (u) { T.eq(u.full_name, w.expected[u.id], 'full_name of user ' + u.id); });") },
          { text: "You can still roll back to v1.", hidden: true,
            test: L(W22,
              "var w = world();",
              "T.expectRollout({ db: w.db, apps: { v1: v1, v2: v2 }, start: 'v1', plan: plan, traffic: w.traffic, check: w.check });",
              "T.expectRollout({ db: w.db, apps: { v1: v1, v2: v2 }, start: 'v2', plan: [{ deploy: 'v1' }], traffic: w.traffic, check: w.check }, 'Rolling back to v1 after your plan');") }
        ],
        files: [{ name: "script.js", content: L(
          V1,
          "",
          V2,
          "",
          "function rename(db) {",
          "  db.renameColumn(\"users\", \"name\", \"full_name\");",
          "}",
          "",
          "const plan = [",
          "  { migrate: rename },",
          "  { deploy: \"v2\" }",
          "];",
          "") }],
        hints: [
          "v2 needs full_name to exist, and v1 needs name to stay. So the first step adds full_name and touches nothing else: db.addColumn(\"users\", \"full_name\").",
          "Copy the old rows with db.update(\"users\", { full_name: null }, row => ({ full_name: row.name })), and put that step after { deploy: \"v2\" }, when no server writes only name any more."
        ],
        solution: { "script.js": L(
          V1,
          "",
          V2,
          "",
          "function expand(db) {",
          "  db.addColumn(\"users\", \"full_name\");",
          "}",
          "",
          "// After v2 is everywhere, so no server is still writing only name.",
          "function backfill(db) {",
          "  db.update(\"users\", { full_name: null }, row => ({ full_name: row.name }));",
          "}",
          "",
          "const plan = [",
          "  { migrate: expand },",
          "  { deploy: \"v2\" },",
          "  { migrate: backfill }",
          "];",
          "") }
      },

      {
        id: "change-u2-3",
        title: "The contract",
        kind: "js", chip: "LIVE", xp: 25, mins: 20, live: true,
        brief: "Last lesson's plan ran. Now `users` has both `name` (still **NOT NULL**) and `full_name`, every row is copied, and all 3 servers run `v2`.\n\nA teammate wrote `v3`, which only knows `full_name`, and a plan to finish the job. Make the plan work against live traffic. When it's done:\n\n- every server runs `v3`\n- `name` is gone\n- `full_name` is **NOT NULL**, the way `name` was",
        steps: [
          { text: "No request fails while the plan runs.",
            test: L(W23,
              "var w = world();",
              "T.expectRollout({ db: w.db, apps: { v2: v2, v3: v3 }, start: 'v2', plan: plan, traffic: w.traffic, check: w.check }, 'Your plan');") },
          { text: "Afterwards every server runs v3, `name` is gone and `full_name` is NOT NULL.",
            test: L(W23,
              "var w = world();",
              "var r = T.rollout({ db: w.db, apps: { v2: v2, v3: v3 }, start: 'v2', plan: plan, traffic: w.traffic, check: w.check });",
              "T.expect(r.ok, 'Make the plan run cleanly first.');",
              "T.eq(r.versions.join(','), 'v3,v3,v3', 'Deploy v3 to every server.');",
              "T.expect(w.db.columns('users').indexOf('name') === -1, 'The name column is still there. Dropping it is the contract.');",
              "T.expect(w.db.isNotNull('users', 'full_name'), 'full_name should be NOT NULL at the end, like name was: db.setNotNull(\"users\", \"full_name\").');") },
          { text: "It also works on a busier day.", hidden: true,
            test: L(W23,
              "var w = world({ signupEvery: 2 });",
              "T.expectRollout({ db: w.db, apps: { v2: v2, v3: v3 }, start: 'v2', plan: plan, traffic: w.traffic, check: w.check, instances: 5, perTick: 7 }, 'With 5 servers and twice the signups');") }
        ],
        files: [{ name: "script.js", content: L(
          V2,
          "",
          V3,
          "",
          "function contract(db) {",
          "  db.dropColumn(\"users\", \"name\");",
          "  db.setNotNull(\"users\", \"full_name\");",
          "}",
          "",
          "const plan = [",
          "  { migrate: contract },",
          "  { deploy: \"v3\" }",
          "];",
          "") }],
        hints: [
          "Dropping name while v2 servers still read it breaks them, so the drop comes after v3 is on every server.",
          "v3 inserts users without a name, but name is still NOT NULL. Before v3 goes out, relax it: db.dropNotNull(\"users\", \"name\")."
        ],
        solution: { "script.js": L(
          V2,
          "",
          V3,
          "",
          "// v3 doesn't write name, so it can't stay required.",
          "function relaxName(db) {",
          "  db.dropNotNull(\"users\", \"name\");",
          "}",
          "",
          "// Only once nothing reads name.",
          "function contract(db) {",
          "  db.setNotNull(\"users\", \"full_name\");",
          "  db.dropColumn(\"users\", \"name\");",
          "}",
          "",
          "const plan = [",
          "  { migrate: relaxName },",
          "  { deploy: \"v3\" },",
          "  { migrate: contract }",
          "];",
          "") }
      },

      {
        id: "change-u2-quiz",
        title: "Unit 2 quiz: Expand and contract",
        kind: "quiz", xp: 10,
        brief: "Parallel change, backfills, and when to drop. 80% to pass.",
        questions: [
          { q: "What happens in the expand phase?",
            choices: ["The new column is added, and old code ignores it", "The old column is dropped and replaced by the new one in a single step", "Every server is restarted at once", "The data is copied"],
            answer: 0, explain: "Expand only adds, so it's safe with every version running." },
          { q: "When should the backfill run?",
            choices: ["Before the new column exists", "After every server writes both columns", "Before deploying the dual-writing code", "After the old column is dropped"],
            answer: 1, explain: "Otherwise old servers keep writing rows the backfill already passed." },
          { q: "Why does v2 write both columns instead of just the new one?",
            choices: ["Writing the value twice protects the data if one of the two columns gets corrupted", "The database requires it", "So v1, still running or rolled back to, sees every new row", "It's faster"],
            answer: 2, explain: "The dual write keeps the old column complete, which is what makes v1 and rollback work." },
          { q: "What's the one step of expand/contract you can't undo?",
            choices: ["The expand", "The backfill", "Deploying v2", "Dropping the old column"],
            answer: 3, explain: "Everything before it leaves the old column intact." },
          { q: "v3 only writes full_name, but name is still NOT NULL. What happens when v3 goes out?",
            choices: ["Nothing: unused columns are skipped", "Every v3 signup fails", "The database copies full_name into name", "name gets an empty string"],
            answer: 1, explain: "Make name nullable before v3 ships." }
        ]
      }
    ]
  });
})();
