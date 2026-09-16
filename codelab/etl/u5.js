/* Data Pipelines & ETL — Unit 5: Incremental loads */
(function () {
  /* Code is written as String.raw templates, so backslashes reach the
     learner's editor and the grader exactly as they appear here. Nothing
     inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var ORDERS = { order_id: "text", day: "date", amount_cents: "int", updated_at: "timestamp" };

  /* ---------- etl-u5-1 ---------- */
  var SOURCE1 = R`
// The source system, read through an API. Every row carries updated_at.
const SOURCE = [
  { order_id: "ORD-1", day: "2026-03-10", amount_cents: 1500, updated_at: "2026-03-10T09:00:00Z" },
  { order_id: "ORD-2", day: "2026-03-10", amount_cents: 2000, updated_at: "2026-03-10T10:30:00Z" },
  { order_id: "ORD-3", day: "2026-03-11", amount_cents: 1000, updated_at: "2026-03-11T08:15:00Z" }
];
const EPOCH = "1970-01-01T00:00:00Z";

function changesSince(ts) {
  return SOURCE.filter(r => r.updated_at > ts)
    .sort((a, b) => (a.updated_at < b.updated_at ? -1 : 1))
    .map(r => Object.assign({}, r));
}
`;
  function u1File(body) {
    return SOURCE1 + "\n" + body + R`

console.log(sync(), "rows;  watermark:", readWatermark());
console.log(sync(), "rows on the second run");
`;
  }

  /* ---------- etl-u5-2 ---------- */
  var SOURCE2 = R`
// ORD-2 and ORD-3 were written in the same second. The API returns at most
// two rows at a time, oldest first, so a page boundary can fall between them.
const SOURCE = [
  { order_id: "ORD-1", day: "2026-03-10", amount_cents: 1500, updated_at: "2026-03-10T09:00:00Z" },
  { order_id: "ORD-2", day: "2026-03-10", amount_cents: 2000, updated_at: "2026-03-10T10:30:00Z" },
  { order_id: "ORD-3", day: "2026-03-10", amount_cents: 1200, updated_at: "2026-03-10T10:30:00Z" },
  { order_id: "ORD-4", day: "2026-03-11", amount_cents: 1000, updated_at: "2026-03-11T12:00:00Z" }
];
const EPOCH = "1970-01-01T00:00:00Z";
const NO_ID = "";

// Rows after the cursor (ts, lastId), ordered by updated_at then order_id.
// "After" means a later instant, or the same instant and a later id.
function changesSince(ts, lastId, limit) {
  return SOURCE
    .filter(r => r.updated_at > ts || (r.updated_at === ts && r.order_id > lastId))
    .sort((a, b) => (a.updated_at === b.updated_at
      ? (a.order_id < b.order_id ? -1 : 1)
      : (a.updated_at < b.updated_at ? -1 : 1)))
    .slice(0, limit === undefined ? 2 : limit)
    .map(r => Object.assign({}, r));
}
`;
  function u2File(body) {
    return SOURCE2 + "\n" + body + R`

console.log(sync(), sync(), sync(), "rows per run");
console.log(T.rows("orders").map(r => r.order_id), readCursor());
`;
  }

  /* ---------- etl-u5-3 ---------- */
  var SOURCE3 = R`
// day is when the order happened. updated_at is when the row last changed.
// ORD-9 happened on the 8th and was corrected on the 11th: it arrives LATE.
const SOURCE = [
  { order_id: "ORD-1", day: "2026-03-10", amount_cents: 1500, updated_at: "2026-03-10T09:00:00Z" },
  { order_id: "ORD-2", day: "2026-03-10", amount_cents: 2000, updated_at: "2026-03-10T10:30:00Z" },
  { order_id: "ORD-3", day: "2026-03-11", amount_cents: 1000, updated_at: "2026-03-11T08:15:00Z" }
];
const LATE = { order_id: "ORD-9", day: "2026-03-08", amount_cents: 700, updated_at: "2026-03-11T09:00:00Z" };
const EPOCH = "1970-01-01T00:00:00Z";

function changesSince(ts) {
  return SOURCE.filter(r => r.updated_at > ts)
    .sort((a, b) => (a.updated_at < b.updated_at ? -1 : 1))
    .map(r => Object.assign({}, r));
}
function totalFor(day) {
  const t = db.select("totals", { day: day });
  return t.length ? t[0].amount_cents : 0;
}
`;
  function u3File(body) {
    return SOURCE3 + "\n" + body + R`

// The checks push LATE into SOURCE for you. Try it here by hand if you like.
console.log(sync(), "rows loaded");
console.log("the 8th:", totalFor("2026-03-08"), " the 10th:", totalFor("2026-03-10"));
`;
  }

  /* ---------- etl-u5-4 ---------- */
  var SOURCE4 = R`
// The source hard-deletes: a cancelled order is simply not in the list any more,
// and nothing in a changes feed ever mentions it again.
const SOURCE = [
  { order_id: "ORD-1", day: "2026-03-10", amount_cents: 1500, updated_at: "2026-03-10T09:00:00Z" },
  { order_id: "ORD-2", day: "2026-03-10", amount_cents: 2000, updated_at: "2026-03-10T10:30:00Z" },
  { order_id: "ORD-3", day: "2026-03-11", amount_cents: 1000, updated_at: "2026-03-11T08:15:00Z" }
];
function sourceIds() { return SOURCE.map(r => r.order_id); }
function loadAll() { db.tx(() => db.upsert("orders", SOURCE.map(r => Object.assign({}, r, { deleted_at: null })))); }
const NOW = "2026-03-12T06:00:00Z";
`;
  function u4File(body) {
    return SOURCE4 + "\n" + body + R`

loadAll();
console.log("active revenue:", activeRevenue());
// ORD-2 was cancelled at the source, so it is missing from the id list.
console.log(reconcile(["ORD-1", "ORD-3"], NOW), "rows marked deleted");
console.log("active revenue now:", activeRevenue());
`;
  }

  /* ---------- etl-u5-5 ---------- */
  var SOURCE5 = R`
// Everything the source holds, for any day you ask about.
const SOURCE = [
  { order_id: "ORD-1", day: "2026-03-08", amount_cents: 700, updated_at: "2026-03-08T09:00:00Z" },
  { order_id: "ORD-2", day: "2026-03-09", amount_cents: 1500, updated_at: "2026-03-09T09:00:00Z" },
  { order_id: "ORD-3", day: "2026-03-09", amount_cents: 2000, updated_at: "2026-03-09T11:00:00Z" },
  { order_id: "ORD-4", day: "2026-03-11", amount_cents: 1000, updated_at: "2026-03-11T08:15:00Z" }
];
function rowsForDay(day) { return SOURCE.filter(r => r.day === day).map(r => Object.assign({}, r)); }
`;
  function u5File(body) {
    return SOURCE5 + "\n" + body + R`

for (const day of ["2026-03-08", "2026-03-09", "2026-03-10", "2026-03-11"]) runDay(day);
console.log(T.rows("orders").length, "orders;", JSON.stringify(T.rows("totals")));
`;
  }

  window.CODELAB.addUnit("etl", {
    id: "etl-u5",
    title: "Incremental loads",
    icon: "⏩",
    blurb: "Don't reload ten million rows to pick up yesterday's forty. A watermark and where it loses rows, data that arrives after the day it belongs to, deletions the source never mentions, and a backfill that runs the same code as the nightly job.",
    cheat: [
      { h: "A watermark is state", lang: "js", code: R`
db.tx(() => {
  db.upsert("orders", rows);
  db.upsert("meta", { name: "watermark", value: maxUpdatedAt });  // same transaction
});`,
        note: "Write the rows and the watermark together. Advance it first and a crash loses every row in between, permanently: the next run never asks for them again." },
      { h: "Page with a keyset cursor", lang: "js", code: R`
// ts alone cannot separate rows written in the same instant
r.updated_at > ts || (r.updated_at === ts && r.order_id > lastId)
// store BOTH after each page: the last row's updated_at and its id`,
        note: "Exclusive on the timestamp alone loses a tie split across pages; inclusive alone stalls when a tie fills a page. The id breaks the tie." },
      { h: "Late data", lang: "js", code: R`
// pull by updated_at (when the row changed), never by event day
const changed = changesSince(watermark);
const days = new Set(changed.map(r => r.day));   // recompute every day they touch
for (const d of withLookback(days, 3)) refreshTotal(d);`,
        note: "An order from the 8th corrected on the 11th arrives with an old event day. Filtering the pull by event day drops it." },
      { h: "Deletes and backfills", lang: "js", code: R`
// the source hard-deletes, so compare key sets and soft-delete the missing
db.upsert("orders", Object.assign({}, row, { deleted_at: NOW }));
// backfill: the SAME function the nightly run calls, one day at a time
for (const day of days) runDay(day);`,
        note: "A soft delete keeps history and stays idempotent. If a backfill needs its own code path, one of the two will drift." }
    ],
    lessons: [

      {
        id: "etl-u5-1",
        title: "High-watermark on updated_at",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        warehouse: {
          tables: {
            orders: { key: ["order_id"], columns: ORDERS },
            meta: { key: ["name"], columns: { name: "text", value: "text" } }
          }
        },
        brief: "Unit 4 replaced a whole day every run. That's fine for a day, and hopeless for a table of ten million rows that changes by forty. The alternative is to ask the source only for what changed: **give me every row whose `updated_at` is after the last one I saw.** That remembered timestamp is the **watermark**, and it's the pipeline's own state.\n\nWhere it goes wrong is the order of writes. The obvious code records where it got to, then loads the rows. If the connection drops in between, the watermark says the rows arrived and the rows aren't there. The next run asks for changes *after* that watermark, so those rows are never requested again. Not late — **gone**, and nothing in any log says so.\n\nSo the rule is the one from the load log: **the rows and the watermark are written in the same transaction.** Crash anywhere inside it and both roll back, so the next run asks the same question and gets the same answer.\n\nWrite `readWatermark()`, returning the stored value or `EPOCH` the first time, and `sync()`, which pulls `changesSince(watermark)`, upserts the rows, stores the newest `updated_at` it saw, and returns how many rows it loaded. One transaction.",
        steps: [
          { text: "The first sync loads everything and remembers the newest `updated_at` it saw.",
            test: R`
db.delete("orders", {});
db.delete("meta", {});
T.clearFaults();
T.eq(readWatermark(), EPOCH, 'With nothing stored the watermark starts at the epoch, so the first run reads everything');
T.eq(sync(), 3, 'Three rows on the first run');
T.eq(db.count("orders"), 3, 'All three are in the warehouse');
T.eq(readWatermark(), '2026-03-11T08:15:00Z', 'The watermark is the newest updated_at that was loaded');
` },
          { text: "A second run with nothing new loads nothing, and a new source row is picked up on its own.",
            test: R`
db.delete("orders", {});
db.delete("meta", {});
T.clearFaults();
sync();
T.eq(sync(), 0, 'Nothing changed at the source, so nothing is read');
T.eq(db.count("orders"), 3, 'And nothing is written');
SOURCE.push({ order_id: "ORD-4", day: "2026-03-12", amount_cents: 400, updated_at: "2026-03-12T07:00:00Z" });
try {
  T.eq(sync(), 1, 'Only the new row is read: that is the point of an incremental load');
  T.eq(db.count("orders"), 4, 'It lands in the warehouse');
  T.eq(readWatermark(), '2026-03-12T07:00:00Z', 'And the watermark moves with it');
} finally {
  SOURCE.pop();
}
` },
          { text: "An updated row is re-read and replaces the old version, without duplicating it.",
            test: R`
db.delete("orders", {});
db.delete("meta", {});
T.clearFaults();
sync();
var original = SOURCE[0];
SOURCE[0] = Object.assign({}, original, { amount_cents: 1800, updated_at: "2026-03-12T08:00:00Z" });
try {
  T.eq(sync(), 1, 'The corrected row comes back because its updated_at moved');
  T.eq(db.select("orders", { order_id: "ORD-1" })[0].amount_cents, 1800, 'It replaces the old version');
  T.eq(db.count("orders"), 3, 'Still three orders');
} finally {
  SOURCE[0] = original;
}
` },
          { text: "A crash mid-sync must not advance the watermark: after the rerun, every row is there.",
            test: R`
db.delete("orders", {});
db.delete("meta", {});
T.clearFaults();
T.failAfterWrites(2);
var threw = null;
try { sync(); } catch (e) { threw = e.name; }
T.eq(threw, 'ConnectionLost', 'The connection drops partway through the first sync');
T.eq(readWatermark(), EPOCH, 'The watermark must NOT have moved. Advanced past rows that were never written, it would skip them forever');
T.clearFaults();
T.eq(sync(), 3, 'So the rerun asks the same question and gets all three rows');
T.eq(db.count("orders"), 3, 'Nothing was lost');
T.eq(readWatermark(), '2026-03-11T08:15:00Z', 'And now the watermark moves');
` }
        ],
        files: [
          { name: "script.js", content: u1File(R`
function readWatermark() {
  // TODO: the stored watermark, or EPOCH the first time
  return EPOCH;
}

function sync() {
  const since = readWatermark();
  const rows = changesSince(since);
  const newest = rows.length ? rows[rows.length - 1].updated_at : since;
  db.upsert("meta", { name: "watermark", value: newest });   // record where we got to
  for (const r of rows) db.upsert("orders", r);              // ...then load
  return rows.length;
}
`) }
        ],
        hints: [
          "`readWatermark`: `const m = db.select(\"meta\", { name: \"watermark\" }); return m.length ? m[0].value : EPOCH;`",
          "Put the whole of `sync` inside `db.tx(() => { ... })` and return the row count from inside it.",
          "Order inside the transaction doesn't matter, because it all commits together. What matters is that the watermark can never be committed without its rows."
        ],
        solution: {
          "script.js": u1File(R`
function readWatermark() {
  const stored = db.select("meta", { name: "watermark" });
  return stored.length ? stored[0].value : EPOCH;
}

function sync() {
  return db.tx(() => {
    const since = readWatermark();
    const rows = changesSince(since);
    const newest = rows.length ? rows[rows.length - 1].updated_at : since;
    db.upsert("orders", rows);
    db.upsert("meta", { name: "watermark", value: newest });  // with the rows, not before them
    return rows.length;
  });
}
`)
        }
      },

      {
        id: "etl-u5-2",
        title: "The tie that loses a row",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        warehouse: {
          tables: {
            orders: { key: ["order_id"], columns: ORDERS },
            meta: { key: ["name"], columns: { name: "text", value: "text" } }
          }
        },
        brief: "A timestamp is not a position. Two rows can share an `updated_at` — the same second, or the same millisecond, because one batch wrote them both — and a watermark made only of a timestamp can't tell them apart. Put a **page boundary** between them and the trouble starts.\n\nHere the API returns two rows at a time. `ORD-2` and `ORD-3` share `10:30:00Z`, and the first page ends on `ORD-2`.\n\n- Ask for `updated_at > 10:30:00Z` and **`ORD-3` is never returned again, by anyone**. It isn't late; it's invisible, and every report is quietly missing it.\n- Ask for `updated_at >= 10:30:00Z` and nothing is lost, but the page fills with the same tied rows every time, so the watermark can never move past them. The sync **stalls**, re-reading two rows forever and never reaching `ORD-4`.\n\nNeither half works alone. The fix is to make the cursor a **position** rather than an instant: remember the last row's `updated_at` **and** its id, then ask for\n\n> a later instant, **or** the same instant and a later id.\n\nThat's a *keyset cursor*, and it's how pagination is done properly everywhere, not just here. Ties are split at a stable point, every row is returned exactly once, and progress is guaranteed because the id always moves forward within an instant. It works because rows are ordered by `(updated_at, order_id)`, so that pair is unique and sortable.\n\nWrite `readCursor()`, returning `{ ts, id }` (`EPOCH` and `NO_ID` the first time), and `sync()`, which pulls one page from the cursor, upserts the rows, stores the last row's `updated_at` **and** `order_id`, and returns how many rows it loaded. One transaction, as before.",
        steps: [
          { text: "The lab: a cursor made only of a timestamp, asking `>`, loses `ORD-3` for good. The checkpoint expects the loss.",
            test: R`
db.delete("orders", {});
db.delete("meta", {});
T.clearFaults();
var timestampOnlySync = function () {
  return db.tx(function () {
    var since = readCursor().ts;
    var rows = SOURCE.filter(function (r) { return r.updated_at > since; })
      .sort(function (a, b) { return a.updated_at < b.updated_at ? -1 : 1; })
      .slice(0, 2);
    db.upsert("orders", rows);
    if (rows.length) db.upsert("meta", { name: "watermark", value: rows[rows.length - 1].updated_at });
    return rows.length;
  });
};
timestampOnlySync(); timestampOnlySync(); timestampOnlySync();
T.eq(T.rows("orders").map(function (r) { return r.order_id; }).sort(), ['ORD-1', 'ORD-2', 'ORD-4'], 'ORD-3 shares its instant with ORD-2 and sits just past the page boundary, so a > query never returns it');
T.eq(readCursor().ts, '2026-03-11T12:00:00Z', 'And the cursor has moved well past it, so no later run will ask for it either');
` },
          { text: "Your keyset cursor reaches every row: three pages, four orders, no stall.",
            test: R`
db.delete("orders", {});
db.delete("meta", {});
T.clearFaults();
T.eq(sync(), 2, 'The first page holds two rows');
T.eq(sync(), 2, 'The second page starts at the tied row the first page stopped before');
T.eq(T.rows("orders").map(function (r) { return r.order_id; }).sort(), ['ORD-1', 'ORD-2', 'ORD-3', 'ORD-4'], 'Every row arrives, including the one that ties on the boundary');
T.eq(sync(), 0, 'And the source has nothing left: an inclusive timestamp alone would loop on the tie forever');
T.eq(db.count("orders"), 4, 'Exactly four rows, each read once');
` },
          { text: "The cursor stores both halves, and a finished sync does no work at all.",
            test: R`
db.delete("orders", {});
db.delete("meta", {});
T.clearFaults();
sync(); sync(); sync();
T.eq(readCursor(), { ts: '2026-03-11T12:00:00Z', id: 'ORD-4' }, 'The cursor is the last row seen: its instant AND its id');
var settled = T.rows("orders");
var writesBefore = T.writes();
sync(); sync();
T.eq(T.rows("orders"), settled, 'Two more runs change nothing');
T.eq(T.writes(), writesBefore, 'and write nothing: with a keyset cursor there is no boundary row to re-read');
` },
          { text: "Corrections still flow, and the cursor follows them.",
            test: R`
db.delete("orders", {});
db.delete("meta", {});
T.clearFaults();
sync(); sync(); sync();
var original = SOURCE[2];
SOURCE[2] = Object.assign({}, original, { amount_cents: 1250, updated_at: "2026-03-12T09:00:00Z" });
try {
  T.eq(sync(), 1, 'The corrected row is returned again because its updated_at moved');
  T.eq(db.select("orders", { order_id: "ORD-3" })[0].amount_cents, 1250, 'The correction lands');
  T.eq(db.count("orders"), 4, 'Still four orders');
  T.eq(readCursor(), { ts: '2026-03-12T09:00:00Z', id: 'ORD-3' }, 'And the cursor is the corrected row');
} finally {
  SOURCE[2] = original;
}
` }
        ],
        files: [
          { name: "script.js", content: u2File(R`
function readCursor() {
  const ts = db.select("meta", { name: "watermark" });
  // TODO: remember the last id too, or a tie across a page boundary is lost
  return { ts: ts.length ? ts[0].value : EPOCH, id: NO_ID };
}

function sync() {
  return db.tx(() => {
    const cursor = readCursor();
    const rows = changesSince(cursor.ts, cursor.id, 2);
    db.upsert("orders", rows);
    if (rows.length) {
      db.upsert("meta", { name: "watermark", value: rows[rows.length - 1].updated_at });
    }
    return rows.length;
  });
}
`) }
        ],
        hints: [
          "Store the id beside the watermark: another `meta` row, say `{ name: \"last_id\", value: ... }`.",
          "`readCursor` reads both and falls back to `{ ts: EPOCH, id: NO_ID }` on the first run.",
          "After a page, write both halves from its last row: `rows[rows.length - 1].updated_at` and `.order_id`, in the same transaction as the rows.",
          "`changesSince` already implements the comparison. Your job is only to keep a cursor good enough to feed it."
        ],
        solution: {
          "script.js": u2File(R`
function readCursor() {
  const ts = db.select("meta", { name: "watermark" });
  const id = db.select("meta", { name: "last_id" });
  return { ts: ts.length ? ts[0].value : EPOCH, id: id.length ? id[0].value : NO_ID };
}

function sync() {
  return db.tx(() => {
    const cursor = readCursor();
    const rows = changesSince(cursor.ts, cursor.id, 2);
    db.upsert("orders", rows);
    if (rows.length) {
      const last = rows[rows.length - 1];  // the position we reached, not just the instant
      db.upsert("meta", { name: "watermark", value: last.updated_at });
      db.upsert("meta", { name: "last_id", value: last.order_id });
    }
    return rows.length;
  });
}
`)
        }
      },

      {
        id: "etl-u5-3",
        title: "Late-arriving data and the lookback window",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        warehouse: {
          tables: {
            orders: { key: ["order_id"], columns: ORDERS },
            totals: { key: ["day"], columns: { day: "date", amount_cents: "int" } },
            meta: { key: ["name"], columns: { name: "text", value: "text" } }
          }
        },
        brief: "Rows have two different times, and confusing them is one of the most common bugs in this whole subject.\n\n- **`day`** — when the order happened. Event time.\n- **`updated_at`** — when the row last changed. Processing time.\n\nAn order placed on the 8th and corrected on the 11th arrives on the 11th carrying `day: \"2026-03-08\"`. It is **late data**, and it's completely normal: a correction, a delayed upload, a system that was offline.\n\nThe starter pulls changes by **event day** (`r.day >= since`). That silently drops every late row, because the late row's day is older than the window. Pull by **`updated_at`** instead: that's what \"changed since I last looked\" actually means, and late rows come with it.\n\nThen the second half. The daily `totals` for the 8th were computed when the late order wasn't there, so they're wrong, and loading the row does nothing about it. After each sync, recompute the total for **every day the changed rows touch**, plus a **lookback** of the last few days, which catches days whose rows shifted for any other reason. dbt calls it a lookback window, and three days is a common default.\n\nWrite `sync()`: pull by `updated_at`, upsert the rows and the watermark in one transaction, then rebuild `totals` for the affected days (their own days, plus each of the three days before the newest day seen). Return the number of rows loaded.",
        steps: [
          { text: "A first sync loads the rows and builds each day's total.",
            test: R`
db.delete("orders", {});
db.delete("totals", {});
db.delete("meta", {});
T.clearFaults();
T.eq(sync(), 3, 'Three rows on the first run');
T.eq(totalFor("2026-03-10"), 3500, 'The 10th holds two orders');
T.eq(totalFor("2026-03-11"), 1000, 'The 11th holds one');
T.eq(T.rows("totals").length, 2, 'One total row per day that has orders');
` },
          { text: "The late order is pulled by `updated_at`, even though its day is older than everything loaded so far.",
            test: R`
db.delete("orders", {});
db.delete("totals", {});
db.delete("meta", {});
T.clearFaults();
sync();
SOURCE.push(LATE);
try {
  T.eq(sync(), 1, 'The late order is a change since the watermark, whatever day it belongs to');
  T.eq(db.count("orders", { order_id: "ORD-9" }), 1, 'It is in the warehouse. Pulling by event day would have missed it');
} finally {
  SOURCE.pop();
}
` },
          { text: "Its day's total is rebuilt, so the 8th stops being wrong.",
            test: R`
db.delete("orders", {});
db.delete("totals", {});
db.delete("meta", {});
T.clearFaults();
sync();
T.eq(totalFor("2026-03-08"), 0, 'Before the late order arrives, the 8th has nothing');
SOURCE.push(LATE);
try {
  sync();
  T.eq(totalFor("2026-03-08"), 700, 'Loading the row is not enough: the day it belongs to has to be recomputed');
  T.eq(totalFor("2026-03-10"), 3500, 'Other days keep their totals');
  T.eq(totalFor("2026-03-11"), 1000, 'All of them');
} finally {
  SOURCE.pop();
}
` },
          { text: "A correction updates both the row and its day, and reruns change nothing.",
            test: R`
db.delete("orders", {});
db.delete("totals", {});
db.delete("meta", {});
T.clearFaults();
sync();
var original = SOURCE[1];
SOURCE[1] = Object.assign({}, original, { amount_cents: 2600, updated_at: "2026-03-12T07:00:00Z" });
try {
  sync();
  T.eq(db.select("orders", { order_id: "ORD-2" })[0].amount_cents, 2600, 'The corrected amount is loaded');
  T.eq(totalFor("2026-03-10"), 4100, 'And the 10th is recomputed rather than incremented');
  var settled = { orders: T.rows("orders"), totals: T.rows("totals") };
  sync();
  sync();
  T.eq({ orders: T.rows("orders"), totals: T.rows("totals") }, settled, 'Two more syncs change nothing');
} finally {
  SOURCE[1] = original;
}
` }
        ],
        files: [
          { name: "script.js", content: u3File(R`
function readWatermark() {
  const stored = db.select("meta", { name: "watermark" });
  return stored.length ? stored[0].value : EPOCH;
}

function refreshTotal(day) {
  const rows = db.select("orders", { day: day });
  if (!rows.length) { db.delete("totals", { day: day }); return; }
  db.upsert("totals", { day: day, amount_cents: rows.reduce((sum, r) => sum + r.amount_cents, 0) });
}

function sync() {
  return db.tx(() => {
    const since = readWatermark();
    // Pulling by the day the order happened: a correction to an old order never matches.
    const rows = SOURCE.filter(r => r.day >= since.slice(0, 10)).map(r => Object.assign({}, r));
    db.upsert("orders", rows);
    if (rows.length) db.upsert("meta", { name: "watermark", value: rows[rows.length - 1].updated_at });
    for (const day of new Set(rows.map(r => r.day))) refreshTotal(day);
    return rows.length;
  });
}
`) }
        ],
        hints: [
          "Replace the filter with `changesSince(since)`, which compares `updated_at`. That one change is what lets late rows in.",
          "Collect the days to rebuild in a `Set`: every changed row's `day`, plus the three days before the newest day among them.",
          "`refreshTotal` already recomputes a day from the orders table, which is why a rerun can't double a total — it never adds, it recalculates."
        ],
        solution: {
          "script.js": u3File(R`
function readWatermark() {
  const stored = db.select("meta", { name: "watermark" });
  return stored.length ? stored[0].value : EPOCH;
}

function refreshTotal(day) {
  const rows = db.select("orders", { day: day });
  if (!rows.length) { db.delete("totals", { day: day }); return; }
  db.upsert("totals", { day: day, amount_cents: rows.reduce((sum, r) => sum + r.amount_cents, 0) });
}

function daysToRefresh(rows) {
  const days = new Set(rows.map(r => r.day));
  const newest = rows.map(r => r.day).sort().pop();   // a 3-day lookback from the newest day seen
  if (newest) {
    for (let back = 1; back <= 3; back++) {
      days.add(new Date(Date.parse(newest + "T00:00:00Z") - back * 86400000).toISOString().slice(0, 10));
    }
  }
  return days;
}

function sync() {
  return db.tx(() => {
    const since = readWatermark();
    const rows = changesSince(since);   // by updated_at: late rows come with it
    db.upsert("orders", rows);
    if (rows.length) db.upsert("meta", { name: "watermark", value: rows[rows.length - 1].updated_at });
    for (const day of daysToRefresh(rows)) refreshTotal(day);
    return rows.length;
  });
}
`)
        }
      },

      {
        id: "etl-u5-4",
        title: "Deletes the source never tells you about",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        warehouse: {
          tables: {
            orders: {
              key: ["order_id"],
              columns: { order_id: "text", day: "date", amount_cents: "int", updated_at: "timestamp", deleted_at: "timestamp?" }
            }
          }
        },
        brief: "A changes feed can only tell you about rows that exist. When the source **hard-deletes** a cancelled order, there is no row left to carry an `updated_at`, so no incremental pull will ever mention it again. Your warehouse keeps it, and every report counts revenue that was cancelled weeks ago.\n\nThere's no clever fix, only an honest one: **reconciliation.** Periodically, ask the source for the full list of keys it still has — cheap, because it's ids and nothing else — and compare with yours. Anything you hold and it doesn't has been deleted.\n\nThen mark, don't remove:\n\n- **Soft delete.** Set `deleted_at` instead of deleting the row. History survives, an order that comes back can be restored, and someone can still ask what happened. Reports filter on `deleted_at === null`.\n- **Idempotent.** Running reconciliation twice must mark nothing new the second time, and must not move a `deleted_at` that's already set — otherwise every run rewrites history.\n- **Restorable.** If an id reappears at the source, the next load clears `deleted_at`.\n\nWrite `reconcile(ids, at)`, returning how many rows it newly marked, and `activeRevenue()`, the sum of `amount_cents` over rows that aren't deleted.",
        steps: [
          { text: "An order missing from the source's id list is marked deleted, not removed.",
            test: R`
db.delete("orders", {});
T.clearFaults();
loadAll();
T.eq(db.count("orders"), 3, 'Three orders loaded');
T.eq(reconcile(["ORD-1", "ORD-3"], NOW), 1, 'ORD-2 is missing from the source, so one row is marked');
T.eq(db.count("orders"), 3, 'The row is still there: a soft delete keeps history');
T.eq(db.select("orders", { order_id: "ORD-2" })[0].deleted_at, NOW, 'It carries the moment it was found missing');
T.eq(db.select("orders", { order_id: "ORD-1" })[0].deleted_at, null, 'Rows the source still has are untouched');
` },
          { text: "Reports use `deleted_at`: cancelled revenue stops counting.",
            test: R`
db.delete("orders", {});
T.clearFaults();
loadAll();
T.eq(activeRevenue(), 4500, 'Everything counts before the reconciliation');
reconcile(["ORD-1", "ORD-3"], NOW);
T.eq(activeRevenue(), 2500, 'The cancelled order drops out of the total');
T.eq(db.select("orders").reduce(function (s, r) { return s + r.amount_cents; }, 0), 4500, 'While the row itself is still on record');
` },
          { text: "Reconciling again marks nothing new and does not rewrite the timestamp it already set.",
            test: R`
db.delete("orders", {});
T.clearFaults();
loadAll();
reconcile(["ORD-1", "ORD-3"], NOW);
var after = T.rows("orders");
T.eq(reconcile(["ORD-1", "ORD-3"], "2026-03-13T06:00:00Z"), 0, 'Nothing is newly missing, so nothing is marked');
T.eq(T.rows("orders"), after, 'And the deleted_at that is already set must not move: it records when the row went, not when you last looked');
` },
          { text: "An order that comes back at the source is restored by the next load.",
            test: R`
db.delete("orders", {});
T.clearFaults();
loadAll();
reconcile(["ORD-1", "ORD-3"], NOW);
T.eq(activeRevenue(), 2500, 'ORD-2 is deleted');
loadAll();
T.eq(db.select("orders", { order_id: "ORD-2" })[0].deleted_at, null, 'A row that returns at the source has its deleted_at cleared by the load');
T.eq(activeRevenue(), 4500, 'And it counts again');
T.eq(reconcile(["ORD-1", "ORD-2", "ORD-3"], NOW), 0, 'With every id present, reconciliation marks nothing');
` }
        ],
        files: [
          { name: "script.js", content: u4File(R`
function reconcile(ids, at) {
  // TODO: mark every row whose key the source no longer has
  return 0;
}

function activeRevenue() {
  // TODO: only the rows that are not deleted
  return db.select("orders").reduce((sum, r) => sum + r.amount_cents, 0);
}
`) }
        ],
        hints: [
          "Put the ids in a `Set` for lookup, then select the rows the warehouse holds and keep the ones whose `order_id` is not in it.",
          "Skip any row that already has a `deleted_at`: marking it again would overwrite the moment it actually went missing, and would make the count wrong.",
          "Mark with `db.upsert(\"orders\", Object.assign({}, row, { deleted_at: at }))`, all inside one `db.tx`.",
          "`activeRevenue`: `db.select(\"orders\", r => r.deleted_at === null)` and sum from there."
        ],
        solution: {
          "script.js": u4File(R`
function reconcile(ids, at) {
  const present = new Set(ids);
  return db.tx(() => {
    let marked = 0;
    for (const row of db.select("orders")) {
      if (present.has(row.order_id) || row.deleted_at !== null) continue;  // already marked stays as it was
      db.upsert("orders", Object.assign({}, row, { deleted_at: at }));
      marked++;
    }
    return marked;
  });
}

function activeRevenue() {
  return db.select("orders", r => r.deleted_at === null).reduce((sum, r) => sum + r.amount_cents, 0);
}
`)
        }
      },

      {
        id: "etl-u5-5",
        title: "Backfill: the same code, older dates",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        warehouse: {
          tables: {
            orders: { key: ["order_id"], columns: ORDERS },
            totals: { key: ["day"], columns: { day: "date", amount_cents: "int" } }
          }
        },
        brief: "Sooner or later you have to reload the past: a bug is fixed, a column is added, a week of runs failed while nobody was looking. That's a **backfill**, and the rule is short.\n\n> A backfill is the nightly job, run for older days.\n\nNot a script someone writes that afternoon. If the backfill has its own code path, the two drift, and the repaired history ends up subtly different from the days around it — which is much harder to notice than a gap.\n\nSo the daily job is a function of one day: `runDay(day)` replaces that day's partition from the source and recomputes that day's total. Backfilling is a loop over days. Three properties follow, and the checkpoints below test each one:\n\n- **Order-independent.** Running the 8th, 9th and 11th in any order gives the same warehouse.\n- **Repeatable.** Running a day again changes nothing (Unit 4's property, still holding).\n- **Honest about empty days.** A day the source has no rows for must end up with **no** total row, not a stale one from before. That's how a backfill repairs a day whose data was withdrawn.\n\nWrite `runDay(day)`, returning the number of orders that day now holds.",
        steps: [
          { text: "A day at a time: each run replaces its own day and rebuilds that day's total.",
            test: R`
db.delete("orders", {});
db.delete("totals", {});
T.clearFaults();
T.eq(runDay("2026-03-09"), 2, 'The 9th holds two orders');
T.eq(db.select("totals", { day: "2026-03-09" })[0].amount_cents, 3500, 'And its total is the sum of them');
T.eq(runDay("2026-03-11"), 1, 'The 11th holds one');
T.eq(db.count("orders"), 3, 'Only the days that have been run are loaded');
` },
          { text: "A backfill in reverse order gives exactly what running forward gives.",
            test: R`
var days = ["2026-03-08", "2026-03-09", "2026-03-10", "2026-03-11"];
db.delete("orders", {});
db.delete("totals", {});
T.clearFaults();
days.forEach(function (d) { runDay(d); });
var forward = { orders: T.rows("orders"), totals: T.rows("totals") };
db.delete("orders", {});
db.delete("totals", {});
days.slice().reverse().forEach(function (d) { runDay(d); });
var backward = { orders: T.rows("orders"), totals: T.rows("totals") };
var byKey = function (rows, k) { return rows.slice().sort(function (a, b) { return a[k] < b[k] ? -1 : 1; }); };
T.eq(byKey(backward.orders, 'order_id'), byKey(forward.orders, 'order_id'), 'The same orders, whichever order the days ran in');
T.eq(byKey(backward.totals, 'day'), byKey(forward.totals, 'day'), 'And the same totals');
` },
          { text: "A day with no orders leaves no total behind, even if it had one before.",
            test: R`
db.delete("orders", {});
db.delete("totals", {});
T.clearFaults();
T.eq(runDay("2026-03-10"), 0, 'The source has nothing for the 10th');
T.eq(db.count("totals", { day: "2026-03-10" }), 0, 'So there is no total row for it');
db.upsert("totals", { day: "2026-03-10", amount_cents: 9999 });
T.eq(runDay("2026-03-10"), 0, 'Rerunning the day after a wrong total was written');
T.eq(db.count("totals", { day: "2026-03-10" }), 0, 'clears it: a backfill repairs a day whose rows were withdrawn');
` },
          { text: "Repeating a backfill is free, and one day's rerun never touches another day.",
            test: R`
var days = ["2026-03-08", "2026-03-09", "2026-03-11"];
db.delete("orders", {});
db.delete("totals", {});
T.clearFaults();
days.forEach(function (d) { runDay(d); });
var settled = { orders: T.rows("orders"), totals: T.rows("totals") };
days.forEach(function (d) { runDay(d); });
days.forEach(function (d) { runDay(d); });
T.eq({ orders: T.rows("orders"), totals: T.rows("totals") }, settled, 'Three passes over the same days leave the same warehouse');
runDay("2026-03-09");
T.eq(db.select("totals", { day: "2026-03-08" })[0].amount_cents, 700, 'Rerunning the 9th leaves the 8th alone');
T.eq(db.count("orders"), 4, 'And the row count is stable');
` }
        ],
        files: [
          { name: "script.js", content: u5File(R`
function runDay(day) {
  // TODO: replace this day's orders from the source and rebuild its total,
  // all in one transaction. rowsForDay(day) is the source.
  return 0;
}
`) }
        ],
        hints: [
          "The shape is Unit 4's partition replace: `db.tx(() => { db.delete(\"orders\", { day: day }); db.upsert(\"orders\", rowsForDay(day)); ... })`.",
          "Then the total: sum the day's rows and `db.upsert(\"totals\", ...)` — but when the day has no rows, `db.delete(\"totals\", { day: day })` instead, so no stale total survives.",
          "Return `db.count(\"orders\", { day: day })` from inside the transaction."
        ],
        solution: {
          "script.js": u5File(R`
function runDay(day) {
  return db.tx(() => {
    const rows = rowsForDay(day);
    db.delete("orders", { day: day });          // the partition, replaced
    db.upsert("orders", rows);
    if (rows.length) {
      db.upsert("totals", { day: day, amount_cents: rows.reduce((sum, r) => sum + r.amount_cents, 0) });
    } else {
      db.delete("totals", { day: day });        // an empty day leaves no stale total
    }
    return db.count("orders", { day: day });
  });
}
`)
        }
      },

      {
        id: "etl-quiz-5",
        title: "Unit quiz: Incremental loads",
        kind: "quiz", xp: 10,
        brief: "Watermarks, boundaries, late data, invisible deletes and backfills. 80% to pass.",
        questions: [
          { q: "A sync writes its watermark first and its rows afterwards, in separate transactions. The connection drops in between. What happens to those rows?",
            choices: ["They arrive on the next run, because the source still reports them as changed", "They are lost: the next run asks for changes after a watermark they were never written under", "Nothing is lost, since the warehouse rolls back any write that follows a failure", "They are loaded twice, because the watermark was recorded before the rows landed"],
            answer: 1, explain: "The watermark is a promise that everything before it is loaded. Advancing it past rows that were never written makes that promise false, and no later run will ever ask for them again. Writing the rows and the watermark in one transaction is what keeps the promise true." },
          { q: "Two rows share an `updated_at`, and a page boundary falls between them. What does a cursor made only of that timestamp do?",
            choices: ["Asking `>` skips the second row permanently; asking `>=` re-reads the page and never advances", "Asking `>` duplicates the first row, and `>=` fixes it completely", "Either comparison works, because the source orders rows by id within an instant", "It fails outright, because a source cannot page rows that share a timestamp"],
            answer: 0, explain: "That's the trap: neither half of the comparison works on its own. `>` excludes everything at the boundary instant, losing the tied row for good; `>=` keeps returning the same tied rows, so the cursor never moves. A keyset cursor of (updated_at, id) fixes both." },
          { q: "Why does a keyset cursor of `(updated_at, order_id)` guarantee progress?",
            choices: ["Because each page is smaller than the last, so the source eventually runs out", "Because the pair is unique and ordered, so every page starts strictly past the last row returned", "Because ids are always increasing, so the timestamp never has to be stored", "Because the warehouse refuses to write a row it has already seen"],
            answer: 1, explain: "Ordering by the pair makes a total order over rows: \"a later instant, or the same instant and a later id\" always excludes everything already returned and nothing else. The timestamp alone isn't unique, which is the whole problem, and ids only order within an instant." },
          { q: "An order from the 8th is corrected on the 11th. The pipeline pulls changes by event day and rebuilds the totals for the days it loaded. What goes wrong?",
            choices: ["The order is loaded, but the 8th's total keeps its old value", "The order never arrives, because its event day is older than the pull window", "The order arrives twice, once for its event day and once for its update day", "The 8th's total is double-counted when the correction lands"],
            answer: 1, explain: "Pulling by event day asks for rows that *happened* recently, while a correction to an old row happened long ago. It's never returned at all. Pull by `updated_at`, then recompute the totals for whatever days the changed rows turn out to touch." },
          { q: "The source hard-deletes cancelled orders. Why can't an incremental pull notice?",
            choices: ["Deletes have an older updated_at, so they fall below the watermark", "The deleted row no longer exists, so there is nothing for a changes feed to return", "Changes feeds return deletes only when the table has a soft-delete column", "The pull does notice, but an upsert cannot remove a row"],
            answer: 1, explain: "A changes feed reports rows, and a deleted row isn't one. The way to find out is to compare key sets with the source periodically and soft-delete what's missing, which keeps history and stays idempotent." },
          { q: "Why should a backfill run the same code as the nightly job rather than a separate script?",
            choices: ["Backfills would otherwise run too fast and overload the warehouse", "A separate path drifts, so repaired history ends up subtly different from the days around it", "Schedulers refuse to run a job for a date in the past unless it is the daily one", "It is the only way to keep the watermark from moving backwards"],
            answer: 1, explain: "Two code paths for the same job means two sets of rules, and the repaired days end up computed slightly differently — harder to spot than a gap. If the daily job is a function of one day, the backfill is a loop over days, and both stay correct by construction." }
        ]
      }
    ]
  });
})();
