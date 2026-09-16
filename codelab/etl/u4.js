/* Data Pipelines & ETL — Unit 4: Loading, and loading again */
(function () {
  /* Code is written as String.raw templates, so backslashes reach the
     learner's editor and the grader exactly as they appear here. Nothing
     inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var ORDERS_TABLE = {
    order_id: "text", day: "date", sku: "text", qty: "int", amount_cents: "int"
  };

  /* ---------- etl-u4-1 ---------- */
  var RAW = R`
// Tuesday's export: three orders, 45.00 in all.
const TUESDAY = [
  { order_id: "ORD-1", day: "2026-03-10", amount_cents: 1500 },
  { order_id: "ORD-2", day: "2026-03-10", amount_cents: 2000 },
  { order_id: "ORD-3", day: "2026-03-10", amount_cents: 1000 }
];

// orders_raw has a surrogate key, the way an auto-increment id works:
// every insert makes a new row, whatever the row contains.
let nextId = 0;
function rowId() { nextId++; return "r" + nextId; }
`;
  function u1File(body) {
    return RAW + "\n" + body + R`

loadFile(TUESDAY);
loadFile(TUESDAY);  // the retry that nobody thought about
console.log(T.rows("orders_raw").length, "rows,", revenueFor("2026-03-10"), "cents");
`;
  }

  /* ---------- etl-u4-2 ---------- */
  var UPSERT = R`
// Tuesday's export, and the same export re-sent after ORD-2 was corrected.
const TUESDAY = [
  { order_id: "ORD-1", day: "2026-03-10", sku: "A-7", qty: 1, amount_cents: 1500 },
  { order_id: "ORD-2", day: "2026-03-10", sku: "B-2", qty: 2, amount_cents: 2000 },
  { order_id: "ORD-3", day: "2026-03-10", sku: "C-9", qty: 1, amount_cents: 1000 }
];
const TUESDAY_FIXED = TUESDAY.map(r => (r.order_id === "ORD-2" ? Object.assign({}, r, { amount_cents: 2500 }) : r));
const WEDNESDAY = [
  { order_id: "ORD-2", day: "2026-03-10", sku: "B-2", qty: 2, amount_cents: 2500 },  // yesterday, corrected
  { order_id: "ORD-4", day: "2026-03-11", sku: "D-1", qty: 3, amount_cents: 900 }
];
`;
  function u2File(body) {
    return UPSERT + "\n" + body + R`

console.log(load(TUESDAY));
console.log(load(TUESDAY), "rows now:", T.rows("orders").length);
`;
  }

  /* ---------- etl-u4-3 ---------- */
  var PARTITION = R`
const TUESDAY = [
  { order_id: "ORD-1", day: "2026-03-10", sku: "A-7", qty: 1, amount_cents: 1500 },
  { order_id: "ORD-2", day: "2026-03-10", sku: "B-2", qty: 2, amount_cents: 2000 },
  { order_id: "ORD-3", day: "2026-03-10", sku: "C-9", qty: 1, amount_cents: 1000 }
];
// Tuesday, re-sent on Thursday: ORD-2 was cancelled, so it is simply not in the file.
const TUESDAY_V2 = TUESDAY.filter(r => r.order_id !== "ORD-2");
const WEDNESDAY = [
  { order_id: "ORD-4", day: "2026-03-11", sku: "D-1", qty: 3, amount_cents: 900 },
  { order_id: "ORD-5", day: "2026-03-11", sku: "E-4", qty: 1, amount_cents: 700 }
];
`;
  function u3File(body) {
    return PARTITION + "\n" + body + R`

loadDay("2026-03-10", TUESDAY);
loadDay("2026-03-11", WEDNESDAY);
loadDay("2026-03-10", TUESDAY_V2);
console.log(T.rows("orders").map(r => r.order_id));
`;
  }

  /* ---------- etl-u4-4 ---------- */
  var CRASH = R`
const TUESDAY = [
  { order_id: "ORD-1", day: "2026-03-10", sku: "A-7", qty: 1, amount_cents: 1500 },
  { order_id: "ORD-2", day: "2026-03-10", sku: "B-2", qty: 2, amount_cents: 2000 },
  { order_id: "ORD-3", day: "2026-03-10", sku: "C-9", qty: 1, amount_cents: 1000 }
];
const WEDNESDAY = [
  { order_id: "ORD-4", day: "2026-03-11", sku: "D-1", qty: 3, amount_cents: 900 }
];
`;
  function u4File(body) {
    return CRASH + "\n" + body + R`

runLoad("2026-03-10", TUESDAY);
runLoad("2026-03-10", TUESDAY);  // the same export, twice
console.log(T.rows("orders").length, "orders;", JSON.stringify(T.rows("load_log")));
`;
  }

  /* ---------- etl-u4-p ---------- */
  var PROJECT = R`
// Two nights of exports, each keyed by the day the file is FOR.
const FILES = {
  "2026-03-10": [
    { order_id: "ORD-1", sku: "A-7", qty: 1, amount_cents: 1500 },
    { order_id: "ORD-2", sku: "B-2", qty: 2, amount_cents: 2000 },
    { order_id: "ORD-3", sku: "C-9", qty: 1, amount_cents: 1000 }
  ],
  "2026-03-11": [
    { order_id: "ORD-4", sku: "D-1", qty: 3, amount_cents: 900 },
    { order_id: "ORD-5", sku: "E-4", qty: 1, amount_cents: 700 }
  ]
};

// The clock says the small hours of March 12th. The files are for the 10th and 11th.
function todayFromClock() { return new Date(now()).toISOString().slice(0, 10); }
`;
  function upFile(body) {
    return PROJECT + "\n" + body + R`

console.log(loadExport("2026-03-10", FILES["2026-03-10"]));
console.log(T.rows("orders").map(r => r.order_id + " " + r.day));
`;
  }

  window.CODELAB.addUnit("etl", {
    id: "etl-u4",
    title: "Loading, and loading again",
    icon: "📥",
    blurb: "The run that crashed at 3 a.m. gets re-run at 9. Make that safe: keys instead of appends, a partition replaced inside one transaction, and a load whose second attempt leaves exactly what one clean run would.",
    cheat: [
      { h: "Append is not a load", lang: "js", code: R`
db.insert("orders_raw", row);   // a second run doubles the day
db.upsert("orders", row);       // keyed on order_id: the second run changes nothing
// upsert replaces the WHOLE row, so a column left out becomes null`,
        note: "A natural key is what makes a rerun safe. A guard like \"skip if the day has rows\" breaks the moment a load crashes halfway." },
      { h: "Replace a partition atomically", lang: "js", code: R`
db.tx(() => {
  db.delete("orders", { day: day });   // rows that vanished from the file go too
  for (const r of rows) db.upsert("orders", Object.assign({}, r, { day: day }));
});`,
        note: "Upsert alone can never remove a row the source deleted. Delete-then-insert must be one transaction, or a crash between them empties the day." },
      { h: "Crash, then run again", lang: "js", code: R`
T.failAfterWrites(2);            // the grader cuts the connection mid-load
// inside db.tx  → nothing was written; outside it → two rows are stranded
T.clearFaults();                 // then the rerun must match a clean run`,
        note: "Write the load log in the same transaction as the rows, or the log will claim a load that isn't there." },
      { h: "What the warehouse enforces", lang: "js", code: R`
db.insert  // DuplicateKey if the key is taken; TypeMismatch on a bad value
db.select("orders", { day: "2026-03-10" })   // or a function predicate
db.count("orders")        T.rows("orders")   // deep copies
db.tx(fn)                 // returns fn's value; a throw rolls everything back`,
        note: "Types are strict: int is a safe integer, date is a real YYYY-MM-DD day, timestamp must carry a zone." }
    ],
    lessons: [

      {
        id: "etl-u4-1",
        title: "The lab: rerun an append and count the duplicates",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        warehouse: {
          tables: {
            orders_raw: { key: ["row_id"], columns: { row_id: "text", order_id: "text", day: "date", amount_cents: "int" } }
          }
        },
        brief: "Here is the bug this unit exists to remove, and the first job is to watch it happen. It's a lab: the checkpoints below expect the **wrong** result, because seeing it is the point.\n\nThe warehouse is real from here on. `db.insert`, `db.upsert`, `db.delete`, `db.select`, `db.count` and `db.tx` are provided, and the tables enforce their keys and column types. `T.rows(table)` shows you everything in a table.\n\n`orders_raw` has a **surrogate key** (`row_id`), the way an auto-increment column works: every insert creates a new row, no matter what's in it. That's exactly what a staging table looks like, and it's why an append-style loader can't tell a retry from new data.\n\nThree steps:\n\n1. `loadFile(rows)` appends every row, and `revenueFor(day)` adds up that day's `amount_cents`.\n2. Load Tuesday's file twice, the way a retried upload does, and watch revenue double.\n3. Try the obvious guard: `loadOnce(day, rows)` skips the load when that day already has rows. It fixes the clean case.\n4. Then the grader cuts the connection two rows into the first load. The guard now sees a day that \"already has rows\" and skips forever, so the day keeps 2 of its 3 orders and revenue is wrong for good.\n\nThat last checkpoint is the argument for the rest of the unit: **a load has to be safe to run twice, not guarded against running twice.**",
        steps: [
          { text: "`loadFile` appends the file and `revenueFor` adds up a day: three rows, 4500 cents.",
            test: R`
db.delete("orders_raw", {});
T.clearFaults();
T.eq(loadFile(TUESDAY), 3, 'loadFile reports how many rows it wrote');
T.eq(T.rows("orders_raw").length, 3, 'Three rows land in orders_raw');
T.eq(revenueFor("2026-03-10"), 4500, 'Revenue for the day is the sum of amount_cents');
T.eq(revenueFor("2026-03-11"), 0, 'A day with no rows has no revenue');
` },
          { text: "The lab: load the same file a second time and the day is counted twice. The checkpoint expects the duplicates.",
            test: R`
db.delete("orders_raw", {});
T.clearFaults();
loadFile(TUESDAY);
loadFile(TUESDAY);
T.eq(T.rows("orders_raw").length, 6, 'A surrogate key cannot tell a retry from new data, so the second run appends everything again');
T.eq(revenueFor("2026-03-10"), 9000, 'Tuesday now claims 90.00 of revenue. Nothing threw, and no report will say so');
` },
          { text: "`loadOnce(day, rows)` skips a day that already has rows, so a clean rerun is harmless.",
            test: R`
db.delete("orders_raw", {});
T.clearFaults();
T.eq(loadOnce("2026-03-10", TUESDAY), 3, 'The first run loads the file');
T.eq(loadOnce("2026-03-10", TUESDAY), 0, 'The second run sees rows for that day and skips, reporting 0 written');
T.eq(T.rows("orders_raw").length, 3, 'Three rows, not six');
T.eq(revenueFor("2026-03-10"), 4500, 'Revenue is right again');
` },
          { text: "The guard's hole: a load that crashed halfway leaves the day looking loaded, so the rerun skips it and 4500 becomes 3500 forever.",
            test: R`
db.delete("orders_raw", {});
T.clearFaults();
T.failAfterWrites(2);
var crashed = null;
try { loadOnce("2026-03-10", TUESDAY); } catch (e) { crashed = e.name; }
T.eq(crashed, 'ConnectionLost', 'The connection drops two rows in, so the load throws');
T.eq(T.rows("orders_raw").length, 2, 'Two rows were already committed: outside a transaction they stay');
T.clearFaults();
T.eq(loadOnce("2026-03-10", TUESDAY), 0, 'The rerun sees rows for that day and skips');
T.eq(revenueFor("2026-03-10"), 3500, 'The day is stuck at 35.00 with no error anywhere. A guard is not idempotency');
` }
        ],
        files: [
          { name: "script.js", content: u1File(R`
function loadFile(rows) {
  for (const r of rows) {
    db.insert("orders_raw", { row_id: rowId(), order_id: r.order_id, day: r.day, amount_cents: r.amount_cents });
  }
  return rows.length;
}

function revenueFor(day) {
  // TODO: add up amount_cents for that day
  return 0;
}

function loadOnce(day, rows) {
  // TODO: skip the load when that day already has rows, and report 0
  return loadFile(rows);
}
`) }
        ],
        hints: [
          "`revenueFor`: `db.select(\"orders_raw\", { day: day })` gives that day's rows; add up `amount_cents` with `reduce`.",
          "`loadOnce`: `if (db.count(\"orders_raw\", { day: day }) > 0) return 0;` then call `loadFile(rows)`.",
          "The last checkpoint is meant to fail the *pipeline*, not your code: it proves the guard leaves a half-loaded day looking finished."
        ],
        solution: {
          "script.js": u1File(R`
function loadFile(rows) {
  for (const r of rows) {
    db.insert("orders_raw", { row_id: rowId(), order_id: r.order_id, day: r.day, amount_cents: r.amount_cents });
  }
  return rows.length;
}

function revenueFor(day) {
  return db.select("orders_raw", { day: day }).reduce((sum, r) => sum + r.amount_cents, 0);
}

function loadOnce(day, rows) {
  if (db.count("orders_raw", { day: day }) > 0) return 0;  // looks safe, and is not
  return loadFile(rows);
}
`)
        }
      },

      {
        id: "etl-u4-2",
        title: "Upsert on the natural key",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        warehouse: { tables: { orders: { key: ["order_id"], columns: ORDERS_TABLE } } },
        brief: "The fix for the last lesson isn't a guard. It's a **key**.\n\n`orders` is keyed on `order_id`, the id the source system already gives every order: its *natural* key. Now the warehouse can tell a retry from new data, and two things follow.\n\n- `db.insert` **refuses** a row whose key is taken, with `DuplicateKey`. That's better than silent duplicates, but it still makes a rerun fail.\n- `db.upsert` writes the row whether or not it's there: insert when the key is new, replace when it isn't. Running the same file twice leaves the table exactly as running it once did. That property has a name — **idempotent** — and it's what makes retries, reruns and backfills safe.\n\nTwo details worth knowing now. Upsert replaces the **whole row**, so a column missing from the new version becomes `null` rather than keeping its old value; that's what makes the table match the file. And `db.upsert` returns `{ inserted, updated }`, which is how a run tells you it did what you thought: the second run of the same file should report `inserted: 0`.\n\nWrite `load(rows)`, returning the upsert counts, and `revenue()`, the sum of every row's `amount_cents`.",
        steps: [
          { text: "The first load writes the file and reports three inserts.",
            test: R`
db.delete("orders", {});
T.clearFaults();
T.eq(load(TUESDAY), { inserted: 3, updated: 0 }, 'A new key is an insert');
T.eq(db.count("orders"), 3, 'Three orders');
T.eq(revenue(), 4500, 'Revenue is 45.00');
` },
          { text: "Running the same file two more times changes nothing at all.",
            test: R`
db.delete("orders", {});
T.clearFaults();
load(TUESDAY);
var after = T.rows("orders");
T.eq(load(TUESDAY), { inserted: 0, updated: 3 }, 'The second run updates rows that are already there');
load(TUESDAY);
T.eq(T.rows("orders"), after, 'The table after three runs is identical to the table after one');
T.eq(revenue(), 4500, 'Revenue does not drift');
` },
          { text: "A corrected file updates in place: ORD-2 changes, the row count does not.",
            test: R`
db.delete("orders", {});
T.clearFaults();
load(TUESDAY);
T.eq(load(TUESDAY_FIXED), { inserted: 0, updated: 3 }, 'The corrected export updates the same three keys');
T.eq(db.select("orders", { order_id: "ORD-2" })[0].amount_cents, 2500, 'ORD-2 now holds the corrected amount');
T.eq(db.count("orders"), 3, 'Still three orders, not six');
T.eq(revenue(), 5000, 'Revenue reflects the correction');
` },
          { text: "A mixed file inserts what's new and updates what changed — and `db.insert` would have thrown.",
            test: R`
db.delete("orders", {});
T.clearFaults();
load(TUESDAY);
T.eq(load(WEDNESDAY), { inserted: 1, updated: 1 }, 'ORD-4 is new and ORD-2 changed');
T.eq(db.count("orders"), 4, 'Four orders across the two days');
T.eq(db.select("orders", { day: "2026-03-11" }).map(function (r) { return r.order_id; }), ['ORD-4'], 'Wednesday holds only the new order');
var threw = null;
try { db.insert("orders", { order_id: "ORD-1", day: "2026-03-10", sku: "A-7", qty: 1, amount_cents: 1500 }); } catch (e) { threw = e.name; }
T.eq(threw, 'DuplicateKey', 'An insert of a key that exists is refused. That is why the loader upserts');
` }
        ],
        files: [
          { name: "script.js", content: u2File(R`
function load(rows) {
  // The second run of this dies on DuplicateKey.
  for (const r of rows) db.insert("orders", r);
  return { inserted: rows.length, updated: 0 };
}

function revenue() {
  // TODO: every row's amount_cents
  return 0;
}
`) }
        ],
        hints: [
          "`db.upsert(\"orders\", rows)` takes the whole array at once and returns `{ inserted, updated }` for the batch, so `load` can be one line plus a return.",
          "`revenue`: `db.select(\"orders\").reduce((sum, r) => sum + r.amount_cents, 0)`.",
          "Idempotent means running it again is a no-op. Check it the way the second checkpoint does: keep `T.rows(...)` from after the first run and compare."
        ],
        solution: {
          "script.js": u2File(R`
function load(rows) {
  return db.upsert("orders", rows);  // insert what is new, replace what is not
}

function revenue() {
  return db.select("orders").reduce((sum, r) => sum + r.amount_cents, 0);
}
`)
        }
      },

      {
        id: "etl-u4-3",
        title: "Replace a partition in one transaction",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        warehouse: { tables: { orders: { key: ["order_id"], columns: ORDERS_TABLE } } },
        brief: "Upsert has a blind spot: it can only write rows that are *in* the file. When Tuesday's export is re-sent on Thursday with a cancelled order simply **absent**, upsert leaves that order sitting in the warehouse forever. Nothing in the new file mentions it, so nothing removes it.\n\nThe fix is to treat a day as a **partition** — everything the warehouse holds for that day — and replace it wholesale:\n\n1. Delete every row for that day.\n2. Insert the file's rows.\n\nBoth inside **one transaction**. If they aren't, a crash between them leaves the day empty, which is worse than the stale row you were fixing: a report that reads zero looks like a quiet day rather than a broken load. `db.tx(fn)` gives you that: every write inside commits together, and a throw rolls all of them back.\n\nThis is what `DELETE … WHERE day = ? ; INSERT …` in one transaction does in SQL, and what dbt's `insert_overwrite` and a warehouse's partition overwrite do underneath.\n\nWrite `loadDay(day, rows)`. It stamps each row with `day`, returns how many rows the day now holds, and leaves every other day untouched.",
        steps: [
          { text: "Two days load independently.",
            test: R`
db.delete("orders", {});
T.clearFaults();
T.eq(loadDay("2026-03-10", TUESDAY), 3, 'Tuesday holds three orders');
T.eq(loadDay("2026-03-11", WEDNESDAY), 2, 'Wednesday holds two');
T.eq(db.count("orders"), 5, 'Five rows in all');
T.eq(db.select("orders", { day: "2026-03-10" }).map(function (r) { return r.order_id; }), ['ORD-1', 'ORD-2', 'ORD-3'], 'Tuesday has its own three orders');
` },
          { text: "A re-sent file without ORD-2 removes it — the thing upsert alone can't do — and Wednesday is untouched.",
            test: R`
db.delete("orders", {});
T.clearFaults();
loadDay("2026-03-10", TUESDAY);
loadDay("2026-03-11", WEDNESDAY);
T.eq(loadDay("2026-03-10", TUESDAY_V2), 2, 'The re-sent Tuesday holds two orders');
T.eq(db.select("orders", { day: "2026-03-10" }).map(function (r) { return r.order_id; }), ['ORD-1', 'ORD-3'], 'The cancelled order is gone because it was absent from the file');
T.eq(db.select("orders", { day: "2026-03-11" }).length, 2, 'Wednesday is untouched: only the named partition is replaced');
` },
          { text: "It is still idempotent, and an empty file empties exactly one day.",
            test: R`
db.delete("orders", {});
T.clearFaults();
loadDay("2026-03-10", TUESDAY);
loadDay("2026-03-11", WEDNESDAY);
var byId = function (rows) { return rows.slice().sort(function (x, y) { return x.order_id < y.order_id ? -1 : 1; }); };
var after = byId(T.rows("orders"));
loadDay("2026-03-10", TUESDAY);
loadDay("2026-03-10", TUESDAY);
T.eq(byId(T.rows("orders")), after, 'Replacing a partition with the same file leaves the same rows. A replace re-inserts them, so compare by key rather than by position');
T.eq(loadDay("2026-03-11", []), 0, 'An empty export empties that day');
T.eq(db.count("orders"), 3, 'Tuesday survives');
` },
          { text: "Atomic: when the connection drops partway through the replace, the day is left exactly as it was.",
            test: R`
db.delete("orders", {});
T.clearFaults();
loadDay("2026-03-10", TUESDAY);
var before = T.rows("orders");
T.failAfterWrites(4);
var threw = null;
try { loadDay("2026-03-10", TUESDAY_V2); } catch (e) { threw = e.name; }
T.eq(threw, 'ConnectionLost', 'The crash reaches the caller');
T.eq(T.rows("orders"), before, 'Delete plus insert must be ONE transaction: the day is neither emptied nor half replaced');
T.clearFaults();
T.eq(loadDay("2026-03-10", TUESDAY_V2), 2, 'And the rerun completes the replace');
` }
        ],
        files: [
          { name: "script.js", content: u3File(R`
function loadDay(day, rows) {
  // Two statements, two transactions: a crash between them empties the day.
  db.delete("orders", { day: day });
  for (const r of rows) db.upsert("orders", Object.assign({}, r, { day: day }));
  return db.count("orders", { day: day });
}
`) }
        ],
        hints: [
          "Wrap the whole body in `db.tx(() => { ... })` and return its value. Everything written inside commits together or not at all.",
          "`Object.assign({}, r, { day: day })` stamps the partition onto a copy of the row, so a file row cannot carry a different day than the partition it went into.",
          "Count with `db.count(\"orders\", { day: day })` inside the transaction: a transaction sees its own writes."
        ],
        solution: {
          "script.js": u3File(R`
function loadDay(day, rows) {
  return db.tx(() => {
    db.delete("orders", { day: day });  // rows missing from the file go too
    for (const r of rows) db.upsert("orders", Object.assign({}, r, { day: day }));
    return db.count("orders", { day: day });
  });
}
`)
        }
      },

      {
        id: "etl-u4-4",
        title: "Crash halfway, run again",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        warehouse: {
          tables: {
            orders: { key: ["order_id"], columns: ORDERS_TABLE },
            load_log: { key: ["day"], columns: { day: "date", rows: "int" } }
          }
        },
        brief: "This is the property the whole unit is for:\n\n> **A load that crashes partway, plus a rerun, must leave exactly what one clean run would leave.**\n\nThe grader can now cut the connection between any two row writes with `T.failAfterWrites(n)`, the way a warehouse connection really does drop at 3 a.m. Your load has to survive that.\n\nThere's a second table now: `load_log`, one row per day recording how many rows that day holds. It's the thing a person looks at in the morning, and it's where a subtle bug lives. If the rows and the log are written in **separate** transactions, a crash in between leaves them disagreeing: either the log claims a load that isn't in the table, or the table holds a day the log never recorded. Write both in **one** transaction and they can't drift apart.\n\nWrite `runLoad(day, rows)`: replace the day's partition, upsert the log row for that day, and return the number of rows loaded. One transaction, keyed writes, and a crash that reaches the caller rather than being swallowed.",
        steps: [
          { text: "A clean run loads the day and records exactly one log row.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
T.eq(runLoad("2026-03-10", TUESDAY), 3, 'runLoad reports the rows it loaded');
T.eq(T.rows("orders").length, 3, 'The orders are in');
T.eq(T.rows("load_log"), [{ day: "2026-03-10", rows: 3 }], 'One log row for the day');
` },
          { text: "A crash leaves nothing behind, whether it lands among the rows or on the log write itself.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
T.failAfterWrites(2);
var threw = null;
try { runLoad("2026-03-10", TUESDAY); } catch (e) { threw = e.name; }
T.eq(threw, 'ConnectionLost', 'The crash is not swallowed: it reaches the caller so the scheduler can retry');
T.eq(T.rows("orders"), [], 'One transaction means a crash leaves no half-loaded day');
T.eq(T.rows("load_log"), [], 'And no log row. A log written separately would claim a load that is not there');
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
T.failAfterWrites(3);
var late = null;
try { runLoad("2026-03-10", TUESDAY); } catch (e) { late = e.name; }
T.eq(late, 'ConnectionLost', 'This time the connection survives all three rows and drops on the log write');
T.eq(T.rows("orders"), [], 'The rows must roll back with it. Written in their own transaction they would stay, leaving a loaded day that the log never recorded');
T.eq(T.rows("load_log"), [], 'And still no log row');
` },
          { text: "The rerun after the crash leaves exactly what a clean run leaves.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
runLoad("2026-03-10", TUESDAY);
runLoad("2026-03-11", WEDNESDAY);
var clean = { orders: T.rows("orders"), log: T.rows("load_log") };
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
runLoad("2026-03-10", TUESDAY);
T.failAfterWrites(2);
try { runLoad("2026-03-11", WEDNESDAY); } catch (e) {}
T.clearFaults();
runLoad("2026-03-11", WEDNESDAY);
T.eq({ orders: T.rows("orders"), log: T.rows("load_log") }, clean, 'Crash plus rerun equals one clean run, in both tables');
` },
          { text: "Running the same day again and again keeps one log row with the right count, and the log follows a shrinking file.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
runLoad("2026-03-10", TUESDAY);
runLoad("2026-03-10", TUESDAY);
runLoad("2026-03-10", TUESDAY);
T.eq(T.rows("load_log"), [{ day: "2026-03-10", rows: 3 }], 'One log row per day, upserted rather than appended');
T.eq(db.count("orders"), 3, 'And still three orders');
T.eq(runLoad("2026-03-10", TUESDAY.slice(0, 2)), 2, 'A shorter export replaces the day');
T.eq(T.rows("load_log"), [{ day: "2026-03-10", rows: 2 }], 'The log says 2, because the day now holds 2');
` }
        ],
        files: [
          { name: "script.js", content: u4File(R`
function runLoad(day, rows) {
  // Rows first, log afterwards, each in its own transaction.
  db.tx(() => {
    db.delete("orders", { day: day });
    for (const r of rows) db.upsert("orders", Object.assign({}, r, { day: day }));
  });
  db.tx(() => db.upsert("load_log", { day: day, rows: rows.length }));
  return rows.length;
}
`) }
        ],
        hints: [
          "One `db.tx` around everything: the delete, the row upserts, and the log upsert.",
          "Upsert the log on `day`, so a second run replaces that day's log row instead of adding another.",
          "Don't catch `ConnectionLost`. A load that swallows it reports success for a day it never loaded — the scheduler needs the throw so it can retry."
        ],
        solution: {
          "script.js": u4File(R`
function runLoad(day, rows) {
  return db.tx(() => {
    db.delete("orders", { day: day });
    for (const r of rows) db.upsert("orders", Object.assign({}, r, { day: day }));
    db.upsert("load_log", { day: day, rows: rows.length });  // same transaction as the rows
    return rows.length;
  });
}
`)
        }
      },

      {
        id: "etl-u4-p",
        title: "Project: Fix the loader",
        kind: "js", chip: "ETL", xp: 50, mins: 40, project: true,
        clock: Date.UTC(2026, 2, 12, 3, 0, 0),
        warehouse: {
          tables: {
            orders: { key: ["order_id"], columns: ORDERS_TABLE },
            load_log: { key: ["day"], columns: { day: "date", rows: "int" } }
          }
        },
        brief: "A loader is in production. It has **four** flaws, one for each idea in this unit, and every one of them is the kind that reports success while corrupting a table.\n\n1. **It appends.** `db.insert` on a key that exists throws, and on a keyless day it duplicates. A rerun should change nothing.\n2. **Its delete and its insert are in separate transactions.** A crash in between empties the day.\n3. **It takes the partition from the clock, not from the file.** The clock here says March 12th while the files are for the 10th and 11th, so every row lands in the wrong day — the logical-date bug, one unit early.\n4. **It swallows `ConnectionLost`** and returns `{ ok: true }`. The scheduler believes it, so nothing is retried and the day stays half-loaded.\n\nRewrite `loadExport(day, rows)` so that:\n\n- every row is stamped with the **file's** day, never the clock's;\n- the day's partition is replaced, so an order absent from a re-sent file disappears;\n- the rows and the `load_log` row are written in **one** transaction;\n- a `ConnectionLost` reaches the caller, and leaves the warehouse exactly as it was;\n- it returns `{ ok: true, rows: <rows loaded> }`.",
        steps: [
          { text: "The partition comes from the file, not the clock: loading the 10th on the 12th stores `day: \"2026-03-10\"`.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
T.eq(loadExport("2026-03-10", FILES["2026-03-10"]), { ok: true, rows: 3 }, 'loadExport reports what it loaded');
T.eq(T.rows("orders").map(function (r) { return r.day; }), ['2026-03-10', '2026-03-10', '2026-03-10'], 'Every row carries the day of the FILE, even though the clock says the 12th');
T.eq(T.rows("load_log"), [{ day: "2026-03-10", rows: 3 }], 'The log is keyed by the same day');
T.eq(db.count("orders", { day: "2026-03-12" }), 0, 'Nothing lands in the day the clock happens to name');
` },
          { text: "Reruns are safe, and both days stay independent.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
loadExport("2026-03-10", FILES["2026-03-10"]);
loadExport("2026-03-11", FILES["2026-03-11"]);
var after = { orders: T.rows("orders"), log: T.rows("load_log") };
loadExport("2026-03-10", FILES["2026-03-10"]);
loadExport("2026-03-11", FILES["2026-03-11"]);
T.eq({ orders: T.rows("orders"), log: T.rows("load_log") }, after, 'Running both exports twice changes nothing');
T.eq(db.count("orders"), 5, 'Five orders across two days, not ten');
` },
          { text: "A re-sent file with an order removed drops that order, and only from its own day.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
loadExport("2026-03-10", FILES["2026-03-10"]);
loadExport("2026-03-11", FILES["2026-03-11"]);
var shrunk = FILES["2026-03-10"].filter(function (r) { return r.order_id !== "ORD-2"; });
T.eq(loadExport("2026-03-10", shrunk), { ok: true, rows: 2 }, 'The shorter export loads two rows');
T.eq(db.select("orders", { day: "2026-03-10" }).map(function (r) { return r.order_id; }), ['ORD-1', 'ORD-3'], 'The cancelled order is gone');
T.eq(db.count("orders", { day: "2026-03-11" }), 2, 'The other day is untouched');
T.eq(T.rows("load_log").filter(function (r) { return r.day === "2026-03-10"; })[0].rows, 2, 'The log follows the day it describes');
` },
          { text: "A crash is reported, not swallowed, and leaves the warehouse exactly as it was.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
loadExport("2026-03-10", FILES["2026-03-10"]);
var before = { orders: T.rows("orders"), log: T.rows("load_log") };
T.failAfterWrites(2);
var outcome = null;
try { outcome = loadExport("2026-03-11", FILES["2026-03-11"]); } catch (e) { outcome = e.name; }
T.eq(outcome, 'ConnectionLost', 'A dropped connection must reach the caller. Reporting ok: true means nothing gets retried');
T.eq({ orders: T.rows("orders"), log: T.rows("load_log") }, before, 'And the crash left nothing behind: one transaction, rolled back');
` },
          { text: "After the crash, the rerun produces exactly what an uninterrupted pair of runs produces.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
loadExport("2026-03-10", FILES["2026-03-10"]);
loadExport("2026-03-11", FILES["2026-03-11"]);
var clean = { orders: T.rows("orders"), log: T.rows("load_log") };
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
loadExport("2026-03-10", FILES["2026-03-10"]);
T.failAfterWrites(1);
try { loadExport("2026-03-11", FILES["2026-03-11"]); } catch (e) {}
T.clearFaults();
loadExport("2026-03-11", FILES["2026-03-11"]);
T.eq({ orders: T.rows("orders"), log: T.rows("load_log") }, clean, 'Crash plus rerun equals one clean run');
` }
        ],
        files: [
          { name: "script.js", content: upFile(R`
function loadExport(day, rows) {
  const partition = todayFromClock();       // flaw: the clock, not the file
  db.delete("orders", { day: partition });  // flaw: its own transaction
  try {
    for (const r of rows) {
      db.insert("orders", Object.assign({}, r, { day: partition }));  // flaw: insert, not upsert
    }
  } catch (e) {
    if (e.name === "ConnectionLost") return { ok: true, rows: 0 };    // flaw: swallowed
    throw e;
  }
  db.upsert("load_log", { day: partition, rows: rows.length });
  return { ok: true, rows: rows.length };
}
`) }
        ],
        hints: [
          "Start by deleting `todayFromClock()` from the function. The `day` argument is the only partition this run is about.",
          "One `db.tx(() => { ... })` around the delete, the upserts and the log write, returning `{ ok: true, rows: rows.length }` from inside it.",
          "Replace `db.insert` with `db.upsert` so a rerun rewrites rows instead of throwing.",
          "Remove the `catch` entirely. If the connection drops, the transaction rolls back and the error should reach the caller."
        ],
        solution: {
          "script.js": upFile(R`
function loadExport(day, rows) {
  return db.tx(() => {
    db.delete("orders", { day: day });  // the file's day, never the clock's
    for (const r of rows) db.upsert("orders", Object.assign({}, r, { day: day }));
    db.upsert("load_log", { day: day, rows: rows.length });
    return { ok: true, rows: rows.length };
  });
}
`)
        }
      },

      {
        id: "etl-quiz-4",
        title: "Unit quiz: Idempotent loads",
        kind: "quiz", xp: 10,
        brief: "Appends, natural keys, partitions, transactions and crashes. 80% to pass.",
        questions: [
          { q: "What does it mean for a load to be idempotent?",
            choices: ["It refuses to run a second time for a day it has already loaded", "Running it again leaves exactly what running it once left", "It writes every row inside a transaction, so a crash rolls the load back", "It records each run in a log table, so duplicate runs can be found and undone afterwards"],
            answer: 1, explain: "Idempotence is about the result, not the mechanism: the second run may do plenty of work, as long as the table ends up the same. Transactions and logs help you get there, and refusing to re-run is the guard that breaks as soon as a load crashes partway." },
          { q: "A nightly loader appends rows into a table with a surrogate key. The upload is retried after a timeout. What does a revenue report show?",
            choices: ["An error, because the second load violates the table's key", "Double the real revenue, with nothing in the logs to say why", "The correct revenue, since the retry writes identical values", "Nothing changes, because the warehouse ignores rows that already exist"],
            answer: 1, explain: "A surrogate key is unique per row, not per order, so the retried rows are simply new rows. Nothing throws and nothing is logged; the day is just counted twice. A natural key is what lets the warehouse recognise the retry." },
          { q: "Tuesday's export is re-sent with one cancelled order simply absent. The loader upserts every row in the file. What happens to the cancelled order?",
            choices: ["It is deleted, because upsert replaces the whole day", "It stays in the warehouse, since nothing in the file refers to it", "It is flagged for review, because its key is missing from the new file", "The upsert fails with a key error until the row is deleted by hand"],
            answer: 1, explain: "Upsert can only act on rows it's given, and a row absent from the file is never mentioned. That's why a day is replaced as a partition: delete everything for the day, then load the file, inside one transaction." },
          { q: "Why must the delete and the insert of a partition replace happen in the same transaction?",
            choices: ["To make the load faster, since the warehouse batches both statements together", "Because a warehouse refuses a delete and an insert on the same table in one run otherwise", "So a crash between them can't leave the day empty, which reads as a quiet day rather than a failure", "So the delete can see the rows the insert is about to write"],
            answer: 2, explain: "Separately, the window between the two statements is a state where the day exists in no form at all. A dashboard reading it sees zero and shows a flat line. In one transaction there is no such window: the day is either its old contents or its new ones." },
          { q: "A loader catches `ConnectionLost` and returns `{ ok: true, rows: 0 }`. Why is that worse than letting the error through?",
            choices: ["The scheduler believes the run succeeded, so nothing retries the half-loaded day", "It loses the stack trace, which makes the failure harder to debug later on", "Returning zero rows makes the run look like a quiet day in the row-count check", "Catching an error inside a transaction prevents the warehouse from rolling it back"],
            answer: 0, explain: "The retry only happens if the failure is visible. Swallowing it converts a recoverable outage into silent missing data, and the run log will happily record a success. The rollback itself isn't affected by the catch." },
          { q: "A load writes its rows in one transaction and its `load_log` row in a second one. What can go wrong?",
            choices: ["Nothing: the log is only for humans, so it can lag behind the data", "The log row can be written twice if the load is retried after a crash", "A crash between the two leaves rows and log disagreeing about what was loaded", "The log write may block the row write, because both touch the same day"],
            answer: 2, explain: "Two transactions mean a window between them. Crash there and the rows are committed while the log says nothing, or (in the other order) the log claims a load that isn't in the table. Writing both together removes the window, and keyed log writes make a retry harmless." }
        ]
      }
    ]
  });
})();
