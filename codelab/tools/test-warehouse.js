/* Engine tests for runner.js's harnessWarehouse — pure Node, no browser,
   well under a second.
   Usage:  node tools/test-warehouse.js

   The Data Pipelines & ETL course grades idempotent loads, incremental
   updates and SCD2 history against this harness. Every rule it enforces —
   key uniqueness, column types, transaction atomicity, and the crash that
   lands between two row writes — is the thing the lesson is teaching, so a
   wrong rule here would teach the wrong lesson. This file is the CONTRACT:
   it is written before the engine and freezes the surface below.

   The harness is extracted from runner.js's SOURCE and run in a fresh vm
   context, exactly as the sandbox runs its stringified form — so this tests
   the code that ships, not a copy of it.

   ---- the surface this file freezes ----

   lesson.warehouse = {
     tables: {
       orders: {
         key: ["order_id"],                       // one or more columns, never nullable
         columns: { order_id: "text", day: "date", qty: "int", note: "text?" }
       }
     },
     seed: { orders: [ ... ] }                    // optional, written before the lesson runs
   }

   Column types: "int" (safe integer), "text", "date" (YYYY-MM-DD, a real
   calendar day), "timestamp" (ISO 8601 carrying a zone), "bool". A trailing
   "?" makes the column nullable.

   Injected globals:
     db.insert(table, rows)      -> rows written; DuplicateKey on a clash
     db.upsert(table, rows)      -> { inserted, updated }; a full-row replace
     db.delete(table, predicate) -> rows deleted
     db.select(table, predicate) -> deep copies, in insertion order
     db.count(table, predicate)  -> number
     db.tx(fn)                   -> fn's value; every write commits or none does

   A predicate is an object of column/value equality pairs, or a function
   taking a copy of the row. Errors carry a `name`: UnknownTable,
   UnknownColumn, MissingColumn, TypeMismatch, DuplicateKey, TxError,
   ConnectionLost.

   Grader-only helpers (checkpoints use these; learner code does not):
     T.rows(table)          every row, deep-copied
     T.writes()             row writes performed, including rolled-back ones
     T.failAfterWrites(n)   the next write after n more succeed throws ConnectionLost
     T.clearFaults()        drop a pending fault and reset the write counter

   Autocommit is real: outside db.tx, a batch that fails partway leaves the
   rows written before the failure. That is the whole point of etl-u4. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SRC = fs.readFileSync(path.join(__dirname, "..", "runner.js"), "utf8");

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
/* Run fn and return the error it threw, or null. */
function caught(fn) {
  try { fn(); return null; } catch (e) { return e; }
}
function throwsNamed(fn, name, msg) {
  const e = caught(fn);
  if (!e) throw new Error((msg ? msg + ": " : "") + "expected a " + name + " error, but nothing was thrown");
  if (e.name !== name) throw new Error((msg ? msg + ": " : "") + "expected error name " + name + ", got " + e.name + " (" + e.message + ")");
  return e;
}

/* Pull `function name(...) { ... }` out of runner.js by brace matching,
   skipping strings and comments so a brace inside either can't end it. */
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

const HARNESS = extract("harnessWarehouse");

/* A fresh sandbox per test: the harness attaches db and the T helpers to
   the global, exactly as it does inside the Worker. */
function build(spec) {
  const G = {};
  G.self = G;
  G.T = {};
  G.console = console;
  vm.createContext(G);
  vm.runInContext("(" + HARNESS + ")(" + JSON.stringify(spec) + ");", G);
  return G;
}

const ORDERS = {
  tables: {
    orders: {
      key: ["order_id"],
      columns: { order_id: "text", day: "date", qty: "int", amount_cents: "int", note: "text?" }
    }
  }
};
function row(id, over) {
  return Object.assign({ order_id: id, day: "2026-03-08", qty: 1, amount_cents: 100, note: null }, over || {});
}
/* The standard fixture: a warehouse with three orders already in it. */
function seeded() {
  return build(Object.assign({ seed: { orders: [row("a"), row("b"), row("c")] } }, ORDERS));
}

/* ---------------- schema and types ---------------- */

test("insert then select returns the row", () => {
  const { db } = build(ORDERS);
  eq(db.insert("orders", row("a")), 1, "insert reports one row written");
  eq(db.select("orders"), [row("a")]);
});

test("select returns deep copies, so a caller cannot mutate the table", () => {
  const { db } = seeded();
  const got = db.select("orders");
  got[0].qty = 999;
  got[0].order_id = "hacked";
  eq(db.select("orders")[0], row("a"), "the stored row is untouched");
});

test("T.rows returns deep copies too", () => {
  const { db, T } = seeded();
  const rows = T.rows("orders");
  rows[0].qty = 999;
  eq(T.rows("orders")[0].qty, 1);
  eq(rows.length, 3);
  void db;
});

test("an unknown table is UnknownTable on every operation", () => {
  const { db } = seeded();
  throwsNamed(() => db.insert("nope", row("x")), "UnknownTable", "insert");
  throwsNamed(() => db.select("nope"), "UnknownTable", "select");
  throwsNamed(() => db.upsert("nope", row("x")), "UnknownTable", "upsert");
  throwsNamed(() => db.delete("nope", {}), "UnknownTable", "delete");
  throwsNamed(() => db.count("nope"), "UnknownTable", "count");
});

test("a column the table does not have is UnknownColumn, and nothing is written", () => {
  const { db, T } = build(ORDERS);
  const e = throwsNamed(() => db.insert("orders", row("a", { total: 5 })), "UnknownColumn");
  ok(/total/.test(e.message), "the message names the column: " + e.message);
  eq(db.count("orders"), 0, "the bad row was not written");
  eq(T.writes(), 0);
});

test("a missing required column is MissingColumn", () => {
  const { db } = build(ORDERS);
  const bad = row("a");
  delete bad.qty;
  const e = throwsNamed(() => db.insert("orders", bad), "MissingColumn");
  ok(/qty/.test(e.message), "the message names the column: " + e.message);
});

test("a missing nullable column is stored as null", () => {
  const { db } = build(ORDERS);
  const r = row("a");
  delete r.note;
  db.insert("orders", r);
  eq(db.select("orders")[0].note, null);
});

test("an explicit null in a non-nullable column is TypeMismatch", () => {
  const { db } = build(ORDERS);
  const e = throwsNamed(() => db.insert("orders", row("a", { qty: null })), "TypeMismatch");
  ok(/qty/.test(e.message), "the message names the column: " + e.message);
});

test("null is allowed in a nullable column", () => {
  const { db } = build(ORDERS);
  db.insert("orders", row("a", { note: null }));
  eq(db.select("orders")[0].note, null);
});

test("int accepts whole numbers and rejects everything else", () => {
  const { db } = build(ORDERS);
  db.insert("orders", row("zero", { qty: 0 }));
  db.insert("orders", row("neg", { qty: -5 }));
  db.insert("orders", row("big", { qty: 9007199254740991 }));
  eq(db.count("orders"), 3);
  for (const bad of [1.5, "3", NaN, Infinity, 9007199254740993, true, {}]) {
    throwsNamed(() => db.insert("orders", row("x" + String(bad), { qty: bad })), "TypeMismatch", "qty " + String(bad));
  }
});

test("text accepts strings, including empty, and rejects other types", () => {
  const { db } = build(ORDERS);
  db.insert("orders", row("a", { note: "" }));
  eq(db.select("orders")[0].note, "");
  for (const bad of [3, true, {}, []]) {
    throwsNamed(() => db.insert("orders", row("b" + String(bad), { note: bad })), "TypeMismatch", "note " + String(bad));
  }
});

test("date accepts real YYYY-MM-DD days only", () => {
  const { db } = build(ORDERS);
  db.insert("orders", row("a", { day: "2026-03-08" }));
  db.insert("orders", row("leap", { day: "2028-02-29" }));
  for (const bad of ["2026-2-8", "2026-02-30", "2026-13-01", "2026-02-29", "2026-03-08T00:00:00Z", "08/03/2026", "", 20260308]) {
    throwsNamed(() => db.insert("orders", row("x" + String(bad), { day: bad })), "TypeMismatch", "day " + String(bad));
  }
});

test("timestamp requires a zone", () => {
  const spec = {
    tables: { events: { key: ["id"], columns: { id: "text", at: "timestamp", seen: "timestamp?" } } }
  };
  const { db } = build(spec);
  db.insert("events", { id: "a", at: "2026-03-08T11:30:00Z", seen: null });
  db.insert("events", { id: "b", at: "2026-03-08T11:30:00.250Z", seen: null });
  db.insert("events", { id: "c", at: "2026-03-08T11:30:00+02:00", seen: null });
  eq(db.count("events"), 3);
  for (const bad of ["2026-03-08", "2026-03-08T11:30:00", "2026-03-08 11:30:00Z", "not a time"]) {
    throwsNamed(() => db.insert("events", { id: "x" + bad, at: bad, seen: null }), "TypeMismatch", "at " + bad);
  }
});

test("bool accepts only true and false", () => {
  const spec = { tables: { flags: { key: ["id"], columns: { id: "text", on: "bool" } } } };
  const { db } = build(spec);
  db.insert("flags", [{ id: "a", on: true }, { id: "b", on: false }]);
  eq(db.count("flags"), 2);
  for (const bad of ["true", 0, 1, null]) {
    throwsNamed(() => db.insert("flags", { id: "x" + String(bad), on: bad }), "TypeMismatch", "on " + String(bad));
  }
});

test("a nullable column of every type accepts null", () => {
  const spec = {
    tables: { t: { key: ["id"], columns: { id: "text", i: "int?", s: "text?", d: "date?", ts: "timestamp?", b: "bool?" } } }
  };
  const { db } = build(spec);
  db.insert("t", { id: "a", i: null, s: null, d: null, ts: null, b: null });
  eq(db.select("t"), [{ id: "a", i: null, s: null, d: null, ts: null, b: null }]);
});

test("a table spec whose key column is nullable is refused when the harness is built", () => {
  const e = caught(() => build({ tables: { t: { key: ["id"], columns: { id: "text?" } } } }));
  ok(e, "a nullable key column must be refused");
  ok(/id/.test(e.message), "the message names the column: " + e.message);
});

test("a table spec whose key column is not declared is refused when the harness is built", () => {
  const e = caught(() => build({ tables: { t: { key: ["missing"], columns: { id: "text" } } } }));
  ok(e, "a key column that is not a column must be refused");
});

/* ---------------- keys ---------------- */

test("a duplicate key is DuplicateKey and names the value", () => {
  const { db } = seeded();
  const e = throwsNamed(() => db.insert("orders", row("b")), "DuplicateKey");
  ok(/b/.test(e.message), "the message names the key: " + e.message);
  eq(db.count("orders"), 3);
});

test("a duplicate inside one batch is caught, and earlier rows of that batch stay (autocommit)", () => {
  const { db, T } = build(ORDERS);
  throwsNamed(() => db.insert("orders", [row("a"), row("b"), row("a"), row("c")]), "DuplicateKey");
  eq(db.select("orders").map(r => r.order_id), ["a", "b"], "the rows before the clash are committed");
  eq(T.writes(), 2);
});

test("a composite key is compared on every column", () => {
  const spec = {
    tables: { daily: { key: ["day", "sku"], columns: { day: "date", sku: "text", qty: "int" } } }
  };
  const { db } = build(spec);
  db.insert("daily", [
    { day: "2026-03-08", sku: "A", qty: 1 },
    { day: "2026-03-08", sku: "B", qty: 2 },
    { day: "2026-03-09", sku: "A", qty: 3 }
  ]);
  eq(db.count("daily"), 3, "same day different sku, and same sku different day, are different rows");
  throwsNamed(() => db.insert("daily", { day: "2026-03-09", sku: "A", qty: 9 }), "DuplicateKey");
});

test("key values of different types do not collide through string joining", () => {
  const spec = {
    tables: { t: { key: ["a", "b"], columns: { a: "text", b: "text", v: "int" } } }
  };
  const { db } = build(spec);
  db.insert("t", { a: "x", b: "yz", v: 1 });
  db.insert("t", { a: "xy", b: "z", v: 2 });
  eq(db.count("t"), 2, "x|yz and xy|z are different keys");
});

/* ---------------- select, count, delete ---------------- */

test("select and count take an object predicate", () => {
  const { db } = build(ORDERS);
  db.insert("orders", [row("a", { qty: 1 }), row("b", { qty: 2 }), row("c", { qty: 2 })]);
  eq(db.select("orders", { qty: 2 }).map(r => r.order_id), ["b", "c"]);
  eq(db.count("orders", { qty: 2 }), 2);
  eq(db.count("orders"), 3, "no predicate counts everything");
  eq(db.select("orders", { qty: 2, order_id: "c" }).length, 1, "every pair must match");
  eq(db.select("orders", { qty: 99 }), [], "no match is an empty array");
});

test("select and delete take a function predicate", () => {
  const { db } = build(ORDERS);
  db.insert("orders", [row("a", { qty: 1 }), row("b", { qty: 5 }), row("c", { qty: 9 })]);
  eq(db.select("orders", r => r.qty > 4).map(r => r.order_id), ["b", "c"]);
  eq(db.delete("orders", r => r.qty > 4), 2, "delete reports how many rows went");
  eq(db.select("orders").map(r => r.order_id), ["a"]);
});

test("delete with no match deletes nothing and reports 0", () => {
  const { db } = seeded();
  eq(db.delete("orders", { order_id: "nope" }), 0);
  eq(db.count("orders"), 3);
});

test("rows keep insertion order, including after a delete in the middle", () => {
  const { db } = seeded();
  db.delete("orders", { order_id: "b" });
  db.insert("orders", row("d"));
  eq(db.select("orders").map(r => r.order_id), ["a", "c", "d"]);
});

/* ---------------- upsert ---------------- */

test("upsert inserts a new key and replaces an existing one", () => {
  const { db } = seeded();
  eq(db.upsert("orders", row("d", { qty: 4 })), { inserted: 1, updated: 0 });
  eq(db.upsert("orders", row("a", { qty: 7 })), { inserted: 0, updated: 1 });
  eq(db.select("orders", { order_id: "a" })[0].qty, 7);
  eq(db.count("orders"), 4);
});

test("upsert replaces the whole row: a column left out becomes null, not the old value", () => {
  const { db } = build(ORDERS);
  db.insert("orders", row("a", { note: "first" }));
  const replacement = row("a", { qty: 2 });
  delete replacement.note;
  db.upsert("orders", replacement);
  eq(db.select("orders")[0], row("a", { qty: 2, note: null }));
});

test("upsert keeps the row in its original position", () => {
  const { db } = seeded();
  db.upsert("orders", row("a", { qty: 99 }));
  eq(db.select("orders").map(r => r.order_id), ["a", "b", "c"]);
});

test("upsert is idempotent: the same batch twice leaves the same table", () => {
  const { db } = seeded();
  const batch = [row("a", { qty: 5 }), row("d", { qty: 6 })];
  db.upsert("orders", batch);
  const after = db.select("orders");
  eq(db.upsert("orders", batch), { inserted: 0, updated: 2 }, "the second run updates instead of inserting");
  eq(db.select("orders"), after, "and the table is unchanged");
});

test("upsert validates like insert", () => {
  const { db } = seeded();
  throwsNamed(() => db.upsert("orders", row("a", { qty: "x" })), "TypeMismatch");
  throwsNamed(() => db.upsert("orders", row("a", { nope: 1 })), "UnknownColumn");
});

test("a batch with the same key twice in one upsert applies both in order", () => {
  const { db } = build(ORDERS);
  eq(db.upsert("orders", [row("a", { qty: 1 }), row("a", { qty: 2 })]), { inserted: 1, updated: 1 });
  eq(db.select("orders")[0].qty, 2);
});

/* ---------------- transactions ---------------- */

test("db.tx returns the function's value and commits its writes", () => {
  const { db } = build(ORDERS);
  const got = db.tx(() => { db.insert("orders", row("a")); return "done"; });
  eq(got, "done");
  eq(db.count("orders"), 1);
});

test("a throw inside db.tx rolls back every write and re-throws", () => {
  const { db } = seeded();
  const e = caught(() => db.tx(() => {
    db.delete("orders", { order_id: "a" });
    db.insert("orders", row("d"));
    throw new Error("upstream said no");
  }));
  ok(e && /upstream said no/.test(e.message), "the original error reaches the caller");
  eq(db.select("orders").map(r => r.order_id), ["a", "b", "c"], "the delete and the insert are both undone");
});

test("a failed insert inside db.tx leaves nothing behind, unlike autocommit", () => {
  const { db } = build(ORDERS);
  throwsNamed(() => db.tx(() => db.insert("orders", [row("a"), row("b"), row("a")])), "DuplicateKey");
  eq(db.count("orders"), 0, "the rows written before the clash are rolled back");
});

test("rollback restores upserted rows to their previous contents", () => {
  const { db } = seeded();
  caught(() => db.tx(() => {
    db.upsert("orders", row("a", { qty: 42 }));
    throw new Error("nope");
  }));
  eq(db.select("orders", { order_id: "a" })[0].qty, 1);
});

test("a nested db.tx is refused with TxError and the outer transaction is unaffected", () => {
  const { db } = build(ORDERS);
  const e = caught(() => db.tx(() => {
    db.insert("orders", row("a"));
    db.tx(() => db.insert("orders", row("b")));
  }));
  ok(e && e.name === "TxError", "expected TxError, got " + (e && e.name));
  eq(db.count("orders"), 0, "the outer transaction rolled back");
  db.tx(() => db.insert("orders", row("c")));
  eq(db.count("orders"), 1, "and a later transaction still works");
});

test("select inside a transaction sees the transaction's own writes", () => {
  const { db } = build(ORDERS);
  db.tx(() => {
    db.insert("orders", row("a"));
    eq(db.count("orders"), 1, "a write is visible to the rest of its transaction");
  });
});

/* ---------------- fault injection ---------------- */

test("T.writes counts each row written", () => {
  const { db, T } = build(ORDERS);
  eq(T.writes(), 0, "a seedless warehouse starts at zero");
  db.insert("orders", [row("a"), row("b"), row("c")]);
  eq(T.writes(), 3);
  db.upsert("orders", row("a", { qty: 2 }));
  eq(T.writes(), 4, "an upsert is a write");
  db.delete("orders", { order_id: "c" });
  eq(T.writes(), 5, "a delete is a write");
});

test("seed rows are not writes", () => {
  const { T } = seeded();
  eq(T.writes(), 0);
});

test("T.failAfterWrites(n) throws ConnectionLost on the next write after n more", () => {
  const { db, T } = build(ORDERS);
  T.failAfterWrites(2);
  const e = throwsNamed(() => db.insert("orders", [row("a"), row("b"), row("c"), row("d")]), "ConnectionLost");
  ok(/lost|connection/i.test(e.message), "the message says what happened: " + e.message);
  eq(db.select("orders").map(r => r.order_id), ["a", "b"], "the first two rows are committed (autocommit)");
  eq(T.writes(), 2, "the failed write did not happen");
});

test("the same crash inside db.tx leaves the table exactly as it was", () => {
  const { db, T } = seeded();
  T.failAfterWrites(2);
  throwsNamed(() => db.tx(() => db.insert("orders", [row("d"), row("e"), row("f")])), "ConnectionLost");
  eq(db.select("orders").map(r => r.order_id), ["a", "b", "c"], "a crash mid-transaction rolls the whole thing back");
  eq(T.writes(), 2, "the two writes still happened, even though they were rolled back");
});

test("T.failAfterWrites(0) fails the very next write", () => {
  const { db } = build(ORDERS);
  const { db: db2 } = build(ORDERS);
  void db2;
  const G = build(ORDERS);
  G.T.failAfterWrites(0);
  throwsNamed(() => G.db.insert("orders", row("a")), "ConnectionLost");
  eq(G.db.count("orders"), 0);
  void db;
});

test("a fault fires once: the next attempt goes through", () => {
  const { db, T } = build(ORDERS);
  T.failAfterWrites(1);
  throwsNamed(() => db.insert("orders", [row("a"), row("b")]), "ConnectionLost");
  eq(db.count("orders"), 1);
  db.insert("orders", row("b"));
  eq(db.select("orders").map(r => r.order_id), ["a", "b"], "the retry succeeds");
});

test("faults hit upserts and deletes too", () => {
  const { db, T } = seeded();
  T.failAfterWrites(0);
  throwsNamed(() => db.upsert("orders", row("a", { qty: 9 })), "ConnectionLost");
  eq(db.select("orders", { order_id: "a" })[0].qty, 1);
  T.failAfterWrites(0);
  throwsNamed(() => db.delete("orders", { order_id: "a" }), "ConnectionLost");
  eq(db.count("orders"), 3);
});

test("T.clearFaults drops a pending fault and resets the counter", () => {
  const { db, T } = build(ORDERS);
  db.insert("orders", row("a"));
  T.failAfterWrites(1);
  T.clearFaults();
  eq(T.writes(), 0, "the counter is reset");
  db.insert("orders", [row("b"), row("c")]);
  eq(T.writes(), 2, "and no fault fires");
  eq(db.count("orders"), 3);
});

test("a crash during a rerun leaves the table equal to one clean run (the U4 property)", () => {
  const clean = build(ORDERS);
  const load = g => g.db.tx(() => g.db.upsert("orders", [row("a"), row("b"), row("c")]));
  load(clean);
  const crashed = build(ORDERS);
  crashed.T.failAfterWrites(2);
  caught(() => load(crashed));
  eq(crashed.db.count("orders"), 0, "the half-finished load left nothing");
  crashed.T.clearFaults();
  load(crashed);
  eq(crashed.db.select("orders"), clean.db.select("orders"), "after the rerun both warehouses match");
});

/* ---------------- report ---------------- */

if (failures.length) {
  console.log("  ✗ warehouse: " + passed + " passed, " + failures.length + " failed");
  failures.forEach(f => console.log("    ✗ " + f));
  process.exit(1);
}
console.log("  ✓ warehouse: " + passed + " passed, 0 failed");
