/* Data Pipelines & ETL — Unit 8: Two projects */
(function () {
  /* Code is written as String.raw templates, so backslashes reach the
     learner's editor and the grader exactly as they appear here. Nothing
     inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  /* ---------- etl-u8-p1: the nightly orders pipeline ---------- */
  var NIGHTLY = R`
// ---------------------------------------------------------------------------
// Three nights of exports, as they arrived. Note the byte order mark on the
// first line of the 10th, the quoted comma and line break in a note, a qty
// that is not a number, one order sent twice, and a renamed column on the 12th.
// ---------------------------------------------------------------------------
const HEADER = "order_id,customer_id,day,qty,amount_cents,updated_at,note";

const DAY1 = "﻿" + HEADER + "\r\n" +
  'ORD-1,C-1,2026-03-10,1,1500,2026-03-10T09:00:00Z,\r\n' +
  'ORD-2,C-2,2026-03-10,2,2000,2026-03-10T10:30:00Z,gift wrap\r\n' +
  'ORD-3,C-1,2026-03-10,1,1000,2026-03-10T11:00:00Z,\r\n';

const DAY2 = HEADER + "\r\n" +
  'ORD-4,C-3,2026-03-11,3,900,2026-03-11T08:00:00Z,\r\n' +
  'ORD-5,C-1,2026-03-11,N/A,700,2026-03-11T08:30:00Z,\r\n' +
  'ORD-6,C-2,2026-03-11,1,1200,2026-03-11T09:00:00Z,"leave it, please\r\nring twice"\r\n' +
  'ORD-6,C-2,2026-03-11,2,2400,2026-03-11T15:00:00Z,"corrected, doubled"\r\n' +
  'ORD-7,C-3,2026-03-11,1,600,2026-03-11T10:00:00Z,\r\n';

// The 12th renamed amount_cents to amount.
const DAY3 = "order_id,customer_id,day,qty,amount,updated_at,note\r\n" +
  'ORD-8,C-1,2026-03-12,1,1100,2026-03-12T09:00:00Z,\r\n';

const FILES = { "2026-03-10": DAY1, "2026-03-11": DAY2, "2026-03-12": DAY3 };

// ---- the pieces you built earlier in this course ----

function stripBOM(text) { return text.charCodeAt(0) === 0xFEFF ? text.slice(1) : text; }

function parseCSV(text) {                       // etl-u1-1
  const records = [];
  let record = [], field = "";
  let quoted = false, started = false;
  let i = 0;
  while (i < text.length) {
    const c = text[i], next = text[i + 1];
    if (quoted) {
      if (c === '"') {
        if (next === '"') { field += '"'; i += 2; continue; }
        quoted = false; i++; continue;
      }
      field += c; i++; continue;
    }
    if (c === ",") { record.push(field); field = ""; started = true; i++; continue; }
    if (c === "\r" && next === "\n") { record.push(field); records.push(record); record = []; field = ""; started = false; i += 2; continue; }
    if (c === "\n") { record.push(field); records.push(record); record = []; field = ""; started = false; i++; continue; }
    if (c === '"' && field === "") { quoted = true; started = true; i++; continue; }
    field += c; started = true; i++;
  }
  if (started || field !== "" || record.length) { record.push(field); records.push(record); }
  return records;
}

const REQUIRED = ["order_id", "customer_id", "day", "qty", "amount_cents", "updated_at"];
const OPTIONAL = ["note"];

class SchemaError extends Error {
  constructor(missing) { super("schema drift: missing " + missing.join(", ")); this.name = "SchemaError"; this.missing = missing; }
}
class BatchRejected extends Error {
  constructor(rejected, total) { super(rejected + " of " + total + " rows rejected"); this.name = "BatchRejected"; this.rejected = rejected; this.total = total; }
}

// Header first, then one { line, raw } per record. Throws SchemaError on drift.
function readRows(csvText) {                    // etl-u3-3
  const records = parseCSV(stripBOM(csvText));
  const header = (records[0] || []).map(h => h.trim());
  const missing = REQUIRED.filter(c => header.indexOf(c) === -1);
  if (missing.length) throw new SchemaError(missing);
  const out = [];
  for (let i = 1; i < records.length; i++) {
    const raw = {};
    for (const c of REQUIRED.concat(OPTIONAL)) {
      const at = header.indexOf(c);
      raw[c] = at === -1 ? "" : records[i][at];
    }
    out.push({ line: i + 1, raw: raw });
  }
  return out;
}

function typeRow(raw) {                         // etl-u2
  const int = column => {
    const v = String(raw[column]).trim();
    if (!/^-?\d+$/.test(v)) throw new TypeError(column + ": not an integer: " + JSON.stringify(raw[column]));
    return Number(v);
  };
  const day = String(raw.day).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) throw new TypeError("day: not a YYYY-MM-DD day: " + JSON.stringify(raw.day));
  const at = String(raw.updated_at).trim();
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(at)) throw new TypeError("updated_at: not a timestamp: " + JSON.stringify(raw.updated_at));
  return {
    order_id: String(raw.order_id).trim(), customer_id: String(raw.customer_id).trim(),
    day: day, qty: int("qty"), amount_cents: int("amount_cents"), updated_at: at,
    note: raw.note === "" ? null : raw.note
  };
}

const CONTRACT = {                              // etl-u3-1
  order_id: { required: true, pattern: "^ORD-\\d+$" },
  qty: { required: true, min: 1, max: 999 },
  amount_cents: { required: true, min: 0 }
};

function checkRow(row) {
  const problems = [];
  for (const column of Object.keys(CONTRACT)) {
    const c = CONTRACT[column], v = row[column];
    if (v === null || v === undefined) { if (c.required) problems.push({ column: column, rule: "required" }); continue; }
    if (c.min != null && v < c.min) problems.push({ column: column, rule: "min" });
    if (c.max != null && v > c.max) problems.push({ column: column, rule: "max" });
    if (c.pattern && !new RegExp(c.pattern).test(String(v))) problems.push({ column: column, rule: "pattern" });
  }
  return problems;
}
`;
  function p1File(body) {
    return NIGHTLY + "\n" + body + R`

console.log(runNight("2026-03-10", FILES["2026-03-10"]));
console.log(runNight("2026-03-11", FILES["2026-03-11"]));
try { runNight("2026-03-12", FILES["2026-03-12"]); } catch (e) { console.log(e.name + ":", e.message); }
console.log(T.rows("load_log"));
`;
  }

  /* ---------- etl-u8-p2: customer history ---------- */
  var HISTORY = R`
// A paged change feed from the CRM. ORD-shaped ids are gone: these are customers,
// and two of the changes share an instant, so the cursor has to be a position.
const FEED = [
  { customer_id: "C-1", name: "Ada", region: "North", updated_at: "2026-03-01T09:00:00Z" },
  { customer_id: "C-2", name: "Bo", region: "East", updated_at: "2026-03-01T09:00:00Z" },
  { customer_id: "C-3", name: "Cy", region: "East", updated_at: "2026-03-01T09:30:00Z" },
  { customer_id: "C-1", name: "Ada", region: "South", updated_at: "2026-03-10T11:00:00Z" }
];

const EPOCH = "1970-01-01T00:00:00Z";
const NO_ID = "";
const FAR_FUTURE = "9999-12-31";
const PAGE = 2;

// Rows after the cursor (ts, lastId), ordered by updated_at then customer_id.
function changesSince(ts, lastId, limit) {
  return FEED
    .filter(r => r.updated_at > ts || (r.updated_at === ts && r.customer_id > lastId))
    .sort((a, b) => (a.updated_at === b.updated_at
      ? (a.customer_id < b.customer_id ? -1 : 1)
      : (a.updated_at < b.updated_at ? -1 : 1)))
    .slice(0, limit)
    .map(r => Object.assign({}, r));
}

// Every id the CRM still has. A customer missing from this list was deleted.
function sourceIds() {
  const ids = [];
  for (const r of FEED) if (ids.indexOf(r.customer_id) === -1) ids.push(r.customer_id);
  return ids;
}

let seq = 0;
function nextVersionId() { seq++; return "V" + seq; }
function dayBefore(day) {
  return new Date(Date.parse(day + "T00:00:00Z") - 86400000).toISOString().slice(0, 10);
}
function currentVersion(customerId) {
  return db.select("customers", r => r.customer_id === customerId && r.is_current)[0] || null;
}
function readCursor() {
  const ts = db.select("meta", { name: "watermark" });
  const id = db.select("meta", { name: "last_id" });
  return { ts: ts.length ? ts[0].value : EPOCH, id: id.length ? id[0].value : NO_ID };
}
`;
  function p2File(body) {
    return HISTORY + "\n" + body + R`

console.log(syncCustomers(), "versions written");
console.log(T.rows("customers").map(c => [c.customer_id, c.region, c.effective_from, c.effective_to, c.is_current].join(" ")));
`;
  }

  window.CODELAB.addUnit("etl", {
    id: "etl-u8",
    title: "Two projects",
    icon: "🏗️",
    blurb: "No new ideas: the whole course applied twice. A nightly file-to-warehouse pipeline that survives a hostile export and a dropped connection, and a change feed that becomes customer history a report can trust.",
    cheat: [
      { h: "The shape of a nightly run", lang: "js", code: R`
readRows(csv)                      // parse, strip the BOM, check the header
  -> typeRow(raw)                  // strings become types, or a TypeError
  -> checkRow(row)                 // contract problems, all of them
  -> quarantine { line, raw, reasons }
  -> dedupe by key, latest updated_at wins
  -> db.tx: replace the day, write the log`,
        note: "Every input row ends up loaded, quarantined, or superseded — and the counts have to add up." },
      { h: "Everything that can go wrong", lang: "js", code: R`
T.failAfterWrites(n)   // the connection drops mid-load: rerun must match a clean run
SchemaError            // a renamed column stops the night before any row
BatchRejected          // too many bad rows: load nothing, page someone
db.tx                  // rows and load_log together, or they disagree`,
        note: "A pipeline that reports success it didn't earn is worse than one that fails loudly." },
      { h: "A feed into history", lang: "js", code: R`
// page with a keyset cursor until a page comes back empty
changesSince(cursor.ts, cursor.id, PAGE)
// close the old version the day before, open the new one, same transaction
// a customer gone from sourceIds() is closed, not deleted and not re-versioned`,
        note: "One current row per customer, no overlaps, no gaps — after every run, including the crashed ones." }
    ],
    lessons: [

      {
        id: "etl-u8-p1",
        title: "Project: The nightly orders pipeline",
        kind: "js", chip: "ETL", xp: 50, mins: 35, project: true,
        warehouse: {
          tables: {
            orders: {
              key: ["order_id"],
              columns: { order_id: "text", customer_id: "text", day: "date", qty: "int", amount_cents: "int", updated_at: "timestamp", note: "text?" }
            },
            load_log: { key: ["day"], columns: { day: "date", rows: "int", quarantined: "int" } }
          }
        },
        brief: "Everything in Units 1 to 4, wired together and pointed at three nights of real-looking exports.\n\nThe pieces you built are already in the file: `readRows` (parse, strip the BOM, check the header), `typeRow`, `checkRow` with a contract, and the `SchemaError` and `BatchRejected` classes. What's missing is the pipeline that runs them.\n\nWrite `runNight(day, csvText)`, returning `{ loaded, quarantined, superseded }`:\n\n1. **Read.** `readRows` throws `SchemaError` on drift. Let it through: the 12th renamed a column, and that night must not load a single row.\n2. **Type and check.** Each record is typed (`typeRow` throws a `TypeError` naming the column) and then checked (`checkRow` returns problems). A failure of either goes to quarantine as `{ line, raw, reasons }` — the type error's message, or each problem as `\"column: rule\"`.\n3. **Account for everything.** Every record read ends up in exactly one of three places: loaded, quarantined, or **superseded** by a later version of the same order. `loaded + quarantined + superseded` must equal the number of records read — a row may be dropped, but never silently.\n4. **Reject a bad night.** More than **20%** quarantined and the whole batch throws `BatchRejected`, loading nothing.\n5. **Dedupe.** One order can appear twice in a file. The version with the later `updated_at` wins, and the one it replaced counts as superseded.\n6. **Load.** Replace that day's partition and write `load_log` for the day — rows, quarantined — in **one** transaction, so a dropped connection leaves neither.\n\nThe checkpoints run each of these against the exports, then cut the connection mid-load and rerun.",
        steps: [
          { text: "The 10th loads cleanly: three orders, a log row, and the byte order mark never reaches the data.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
T.eq(runNight("2026-03-10", FILES["2026-03-10"]), { loaded: 3, quarantined: 0, superseded: 0 }, 'Three good rows, nothing quarantined and nothing superseded');
T.eq(db.count("orders"), 3, 'All three are in the warehouse');
T.eq(db.select("orders", { order_id: "ORD-1" }).length, 1, 'The first order_id is ORD-1, not a BOM followed by ORD-1');
T.eq(T.rows("load_log"), [{ day: "2026-03-10", rows: 3, quarantined: 0 }], 'One log row for the night');
T.eq(db.select("orders").reduce(function (s, r) { return s + r.amount_cents; }, 0), 4500, 'Revenue is in whole cents');
` },
          { text: "The 11th: the bad row is quarantined with its line and reason, the duplicate resolves to the later version, and every record is accounted for.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
var out = runNight("2026-03-11", FILES["2026-03-11"]);
T.eq(out.quarantined, 1, 'ORD-5 has a qty of N/A, so one record is quarantined');
T.eq(out.superseded, 1, 'ORD-6 was sent twice, so one record is superseded by the later version');
T.eq(out.loaded + out.quarantined + out.superseded, 5, 'Five records were read, and every one is accounted for: loaded, quarantined or superseded');
T.eq(db.count("orders", { day: "2026-03-11" }), 3, 'ORD-4, ORD-6 and ORD-7 are loaded: the two ORD-6 records are one order');
var six = db.select("orders", { order_id: "ORD-6" })[0];
T.eq([six.qty, six.amount_cents], [2, 2400], 'The later updated_at wins for a duplicated order');
T.eq(six.note, 'corrected, doubled', 'And its note survives the comma inside the quotes');
T.eq(T.rows("load_log"), [{ day: "2026-03-11", rows: 3, quarantined: 1 }], 'The log records both counts');
` },
          { text: "The 12th renamed a column: the night stops with a `SchemaError` and nothing is loaded or logged for it.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
runNight("2026-03-10", FILES["2026-03-10"]);
var before = { orders: T.rows("orders"), log: T.rows("load_log") };
var err = null;
try { runNight("2026-03-12", FILES["2026-03-12"]); } catch (e) { err = e; }
T.expect(err !== null && err.name === 'SchemaError', 'Drift must stop the night, not load a day of empty amounts. Got: ' + (err && err.name));
T.expect(/amount_cents/.test(String(err.message)), 'And the error names the column that went missing. Got: ' + err.message);
T.eq({ orders: T.rows("orders"), log: T.rows("load_log") }, before, 'Nothing for the 12th was written, and the 10th is untouched');
` },
          { text: "A night that is mostly bad rows is refused outright.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
var bad = HEADER + "\r\n" +
  'ORD-20,C-1,2026-03-13,x,100,2026-03-13T09:00:00Z,\r\n' +
  'ORD-21,C-1,2026-03-13,y,100,2026-03-13T09:00:00Z,\r\n' +
  'ORD-22,C-1,2026-03-13,1,100,2026-03-13T09:00:00Z,\r\n';
var err = null;
try { runNight("2026-03-13", bad); } catch (e) { err = e; }
T.expect(err !== null && err.name === 'BatchRejected', 'Two of three rows bad is well over 20 percent, so the batch is refused. Got: ' + (err && err.name));
T.eq(db.count("orders", { day: "2026-03-13" }), 0, 'And the one good row is not loaded either: the night is rejected as a whole');
T.eq(T.rows("load_log"), [], 'Nothing is logged for a rejected night');
` },
          { text: "Reruns change nothing, and a re-sent file with an order removed drops it.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
runNight("2026-03-10", FILES["2026-03-10"]);
runNight("2026-03-11", FILES["2026-03-11"]);
var settled = { orders: T.rows("orders").length, log: T.rows("load_log") };
runNight("2026-03-10", FILES["2026-03-10"]);
runNight("2026-03-11", FILES["2026-03-11"]);
T.eq({ orders: T.rows("orders").length, log: T.rows("load_log") }, settled, 'Running both nights again changes nothing');
var shrunk = HEADER + "\r\n" + 'ORD-1,C-1,2026-03-10,1,1500,2026-03-10T09:00:00Z,\r\n';
T.eq(runNight("2026-03-10", shrunk), { loaded: 1, quarantined: 0, superseded: 0 }, 'A re-sent file with one order in it');
T.eq(db.select("orders", { day: "2026-03-10" }).map(function (r) { return r.order_id; }), ['ORD-1'], 'replaces the partition, so the orders it no longer mentions are gone');
T.eq(db.count("orders", { day: "2026-03-11" }), 3, 'While the other night is untouched');
` },
          { text: "The connection drops mid-load: nothing is left behind, and the rerun matches a clean run.",
            test: R`
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
runNight("2026-03-10", FILES["2026-03-10"]);
runNight("2026-03-11", FILES["2026-03-11"]);
var clean = { orders: T.rows("orders"), log: T.rows("load_log") };
db.delete("orders", {});
db.delete("load_log", {});
T.clearFaults();
runNight("2026-03-10", FILES["2026-03-10"]);
var before = { orders: T.rows("orders"), log: T.rows("load_log") };
T.failAfterWrites(2);
var threw = null;
try { runNight("2026-03-11", FILES["2026-03-11"]); } catch (e) { threw = e.name; }
T.eq(threw, 'ConnectionLost', 'The crash reaches the caller so the scheduler can retry');
T.eq({ orders: T.rows("orders"), log: T.rows("load_log") }, before, 'And left nothing behind: no half-loaded night, no log row');
T.clearFaults();
runNight("2026-03-11", FILES["2026-03-11"]);
T.eq({ orders: T.rows("orders"), log: T.rows("load_log") }, clean, 'The rerun leaves exactly what the clean pair of runs left');
` }
        ],
        files: [
          { name: "script.js", content: p1File(R`
function runNight(day, csvText) {
  // TODO: read, type, check, quarantine, reject a bad night, dedupe,
  // then replace the day's partition and write load_log in one transaction.
  return { loaded: 0, quarantined: 0, superseded: 0 };
}
`) }
        ],
        hints: [
          "Start with `const records = readRows(csvText);` and let `SchemaError` propagate — don't catch it.",
          "Loop the records into `good` and `quarantine`: `try { row = typeRow(rec.raw); } catch (e) { quarantine.push({ line: rec.line, raw: rec.raw, reasons: [e.message] }); continue; }`, then `checkRow(row)` and push `p.column + \": \" + p.rule` reasons.",
          "Before loading: `if (quarantine.length / records.length > 0.2) throw new BatchRejected(quarantine.length, records.length);`",
          "Dedupe with a `Map` keyed by `order_id`, replacing an entry when the new row's `updated_at` is later. `[...map.values()]` is the batch to load, and `good.length - deduped.length` is how many were superseded.",
          "Load inside one `db.tx`: `db.delete(\"orders\", { day: day })`, upsert the deduped rows stamped with `day`, then `db.upsert(\"load_log\", { day, rows: deduped.length, quarantined: quarantine.length })`."
        ],
        solution: {
          "script.js": p1File(R`
function runNight(day, csvText) {
  const records = readRows(csvText);   // SchemaError stops the night before any row
  const good = [], quarantine = [];

  for (const rec of records) {
    let row;
    try {
      row = typeRow(rec.raw);
    } catch (e) {
      quarantine.push({ line: rec.line, raw: rec.raw, reasons: [e.message] });
      continue;
    }
    const problems = checkRow(row);
    if (problems.length) quarantine.push({ line: rec.line, raw: rec.raw, reasons: problems.map(p => p.column + ": " + p.rule) });
    else good.push(row);
  }

  if (records.length && quarantine.length / records.length > 0.2) {
    throw new BatchRejected(quarantine.length, records.length);   // load nothing
  }

  const latest = new Map();            // one row per order: the later updated_at wins
  for (const row of good) {
    const seen = latest.get(row.order_id);
    if (!seen || row.updated_at > seen.updated_at) latest.set(row.order_id, row);
  }
  const rows = [...latest.values()];

  return db.tx(() => {
    db.delete("orders", { day: day });
    for (const row of rows) db.upsert("orders", Object.assign({}, row, { day: day }));
    db.upsert("load_log", { day: day, rows: rows.length, quarantined: quarantine.length });
    return { loaded: rows.length, quarantined: quarantine.length, superseded: good.length - rows.length };
  });
}
`)
        }
      },

      {
        id: "etl-u8-p2",
        title: "Project: Customer history, incrementally",
        kind: "js", chip: "ETL", xp: 50, mins: 35, project: true,
        warehouse: {
          tables: {
            customers: {
              key: ["version_id"],
              columns: {
                version_id: "text", customer_id: "text", name: "text", region: "text",
                effective_from: "date", effective_to: "date", is_current: "bool"
              }
            },
            meta: { key: ["name"], columns: { name: "text", value: "text" } }
          }
        },
        brief: "Units 5 and 7, joined up: a paged change feed becomes a Type 2 dimension that a report can trust.\n\nThe feed hands out at most `PAGE` rows at a time, and two of its changes share an instant — so the cursor has to be a **position**, `(updated_at, customer_id)`, not just a timestamp. `changesSince`, `readCursor`, `currentVersion`, `nextVersionId`, `dayBefore` and `FAR_FUTURE` are in the file.\n\nWrite two functions.\n\n**`syncCustomers()`** — page through the feed from the stored cursor until a page comes back empty. For each change: if the customer's current version already has that `name` and `region`, do nothing. Otherwise close the current version (`effective_to` = the day before the change, `is_current` false) and open a new one starting on the **change's own day**, the date part of its `updated_at`. Dating versions by the change rather than by the run is what keeps history true when one run carries several days of changes. Save the cursor (both halves) with the rows it came from, in the same transaction. Return how many versions were created.\n\n**`closeMissing(day, ids)`** — the reconciliation from Unit 5, applied to history. A customer whose id the source no longer has is **closed**: its current version gets `effective_to` = the day before `day` and `is_current` false, and **no new version is opened** — there is nothing to record except that it ended. Return how many were closed.\n\nAfter every run, three invariants hold for every customer: at most **one current** version, **no overlapping** ranges, and **no gaps**.",
        steps: [
          { text: "The first sync pages through the feed, tie and all, and gives each customer an open-ended version.",
            test: R`
db.delete("customers", {});
db.delete("meta", {});
T.clearFaults();
seq = 0;
T.eq(syncCustomers(), 4, 'Four changes in the feed, so four versions: three customers plus Ada moving');
T.eq(db.select("customers", r => r.is_current).length, 3, 'One current version per customer');
var ada = db.select("customers", { customer_id: "C-1" }).sort(function (a, b) { return a.effective_from < b.effective_from ? -1 : 1; });
T.eq([ada[0].effective_from, ada[0].effective_to, ada[1].effective_from], ['2026-03-01', '2026-03-09', '2026-03-10'], 'Ada s two versions are dated by the changes themselves, not by the run');
T.eq(db.count("customers"), 4, 'And Ada has two versions in all');
T.eq(readCursor(), { ts: '2026-03-10T11:00:00Z', id: 'C-1' }, 'The cursor is the last change seen, as a position');
` },
          { text: "Running it again does nothing at all: no new versions, no writes.",
            test: R`
db.delete("customers", {});
db.delete("meta", {});
T.clearFaults();
seq = 0;
syncCustomers();
var settled = T.rows("customers");
var writes = T.writes();
T.eq(syncCustomers(), 0, 'Nothing has changed at the source');
T.eq(T.rows("customers"), settled, 'So the dimension is untouched');
T.eq(T.writes(), writes, 'and nothing is written at all');
` },
          { text: "A new change adds exactly one version, and the invariants hold for every customer.",
            test: R`
db.delete("customers", {});
db.delete("meta", {});
T.clearFaults();
seq = 0;
syncCustomers();
FEED.push({ customer_id: "C-2", name: "Bo", region: "West", updated_at: "2026-03-20T09:00:00Z" });
try {
  T.eq(syncCustomers(), 1, 'One change, one new version');
  var bo = db.select("customers", { customer_id: "C-2" }).sort(function (a, b) { return a.effective_from < b.effective_from ? -1 : 1; });
  T.eq([bo[0].region, bo[0].effective_to, bo[0].is_current], ['East', '2026-03-19', false], 'The old version is closed the day before the change happened');
  T.eq([bo[1].region, bo[1].effective_from, bo[1].effective_to, bo[1].is_current], ['West', '2026-03-20', '9999-12-31', true], 'And the new one runs open-ended from the day of the change');
  ['C-1', 'C-2', 'C-3'].forEach(function (id) {
    var versions = db.select("customers", { customer_id: id }).sort(function (a, b) { return a.effective_from < b.effective_from ? -1 : 1; });
    T.eq(versions.filter(function (v) { return v.is_current; }).length, 1, 'Exactly one current version for ' + id);
    for (var i = 0; i + 1 < versions.length; i++) {
      T.expect(versions[i].effective_to < versions[i + 1].effective_from, 'Versions of ' + id + ' must not overlap');
      T.eq(dayBefore(versions[i + 1].effective_from), versions[i].effective_to, 'and must leave no gap for ' + id);
    }
  });
} finally {
  FEED.pop();
}
` },
          { text: "A customer the source has dropped is closed, not versioned and not deleted, and closing is idempotent.",
            test: R`
db.delete("customers", {});
db.delete("meta", {});
T.clearFaults();
seq = 0;
syncCustomers();
var versionsBefore = db.count("customers");
T.eq(closeMissing("2026-03-25", ["C-1", "C-2"]), 1, 'C-3 is gone from the source, so one version is closed');
var cy = db.select("customers", { customer_id: "C-3" });
T.eq(cy.length, 1, 'No new version is opened: there is nothing to record but the ending');
T.eq([cy[0].effective_to, cy[0].is_current], ['2026-03-24', false], 'Its range ends the day before the run');
T.eq(db.count("customers"), versionsBefore, 'And nothing was deleted: the history is still there');
T.eq(closeMissing("2026-03-26", ["C-1", "C-2"]), 0, 'Closing again finds nothing to close');
T.eq(db.select("customers", { customer_id: "C-3" })[0].effective_to, '2026-03-24', 'and must not move the date it already recorded');
` },
          { text: "History still answers point-in-time questions, including for the closed customer.",
            test: R`
db.delete("customers", {});
db.delete("meta", {});
T.clearFaults();
seq = 0;
syncCustomers();
closeMissing("2026-03-25", ["C-1", "C-2"]);
var versionAt = function (id, day) {
  return db.select("customers", function (r) { return r.customer_id === id && r.effective_from <= day && day <= r.effective_to; })[0] || null;
};
T.eq(versionAt("C-1", "2026-03-16").region, 'South', 'Ada moved to the South before the sync ran, so the run day carries her new region');
T.eq(versionAt("C-3", "2026-03-20").region, 'East', 'Cy was still a customer on the 20th');
T.eq(versionAt("C-3", "2026-03-26"), null, 'And is gone from the 25th onwards');
` },
          { text: "A crash mid-sync leaves the dimension and the cursor untouched, and the rerun matches a clean run.",
            test: R`
db.delete("customers", {});
db.delete("meta", {});
T.clearFaults();
seq = 0;
syncCustomers();
var clean = { customers: T.rows("customers").length, cursor: readCursor() };
db.delete("customers", {});
db.delete("meta", {});
T.clearFaults();
seq = 0;
T.failAfterWrites(3);
var threw = null;
try { syncCustomers(); } catch (e) { threw = e.name; }
T.eq(threw, 'ConnectionLost', 'The connection drops partway through the paging');
var stalled = readCursor();
T.expect(db.select("customers", r => r.is_current).length <= 3, 'No customer may be left with two current versions');
T.clearFaults();
syncCustomers();
T.eq({ customers: T.rows("customers").length, cursor: readCursor() }, clean, 'The rerun ends where the clean run ended');
T.expect(stalled.ts <= clean.cursor.ts, 'And the cursor never ran ahead of the versions it had written');
` }
        ],
        files: [
          { name: "script.js", content: p2File(R`
function syncCustomers() {
  // TODO: page from the cursor until a page is empty. Close and open versions
  // only when something changed, dating each one by the change's own day, and
  // save the cursor with the rows it came from.
  return 0;
}

function closeMissing(day, ids) {
  // TODO: close the current version of every customer the source no longer has
  return 0;
}
`) }
        ],
        hints: [
          "The paging loop: `while (true) { const cursor = readCursor(); const page = changesSince(cursor.ts, cursor.id, PAGE); if (!page.length) break; ... }` — one `db.tx` per page, so a crash rolls back only the page it was in.",
          "Inside the page: for each change, compare with `currentVersion(r.customer_id)`; skip when `name` and `region` both match. Otherwise upsert the current version closed (`effective_to: dayBefore(changeDay)`, `is_current: false`) and insert a new one starting on `changeDay`, where `changeDay` is `r.updated_at.slice(0, 10)`.",
          "Save both cursor halves from the page's last row in the same transaction: `{ name: \"watermark\", value: last.updated_at }` and `{ name: \"last_id\", value: last.customer_id }`.",
          "`closeMissing`: put `ids` in a `Set`, then for every current version whose `customer_id` isn't in it, upsert it closed. Don't insert anything, and skip versions that are already closed."
        ],
        solution: {
          "script.js": p2File(R`
function syncCustomers() {
  let created = 0;
  while (true) {
    const cursor = readCursor();
    const page = changesSince(cursor.ts, cursor.id, PAGE);
    if (!page.length) break;
    created += db.tx(() => {
      let added = 0;
      for (const r of page) {
        const current = currentVersion(r.customer_id);
        if (!current || current.name !== r.name || current.region !== r.region) {
          const changeDay = r.updated_at.slice(0, 10);   // when it changed, not when we looked
          if (current) {
            db.upsert("customers", Object.assign({}, current, { effective_to: dayBefore(changeDay), is_current: false }));
          }
          db.insert("customers", {
            version_id: nextVersionId(), customer_id: r.customer_id, name: r.name, region: r.region,
            effective_from: changeDay, effective_to: FAR_FUTURE, is_current: true
          });
          added++;
        }
      }
      const last = page[page.length - 1];  // the cursor moves with the rows it describes
      db.upsert("meta", { name: "watermark", value: last.updated_at });
      db.upsert("meta", { name: "last_id", value: last.customer_id });
      return added;
    });
  }
  return created;
}

function closeMissing(day, ids) {
  const present = new Set(ids);
  return db.tx(() => {
    let closed = 0;
    for (const version of db.select("customers", r => r.is_current)) {
      if (present.has(version.customer_id)) continue;
      db.upsert("customers", Object.assign({}, version, { effective_to: dayBefore(day), is_current: false }));
      closed++;   // no new version: there is nothing to record but the ending
    }
    return closed;
  });
}
`)
        }
      },

      {
        id: "etl-quiz-8",
        title: "Final quiz: Data pipelines",
        kind: "quiz", xp: 10,
        brief: "The whole course: files, types, quality, loads, incremental updates, orchestration and history. 80% to pass.",
        questions: [
          { q: "Which single property makes retries, reruns and backfills all safe at once?",
            choices: ["Every task writes a log row before it starts, so duplicates can be found later", "Running the load again leaves the warehouse exactly as running it once did", "Each load is wrapped in a transaction, so a failure rolls back everything it wrote", "The scheduler never starts a run for a day that already has rows in the warehouse"],
            answer: 1, explain: "Idempotence is what all three depend on. Transactions help you achieve it and logs help you audit it, but neither makes a second run harmless on its own — and a guard on \"the day has rows\" is exactly what strands a crashed load halfway." },
          { q: "A nightly export arrives with 40% of its rows failing the contract, where the usual figure is under 1%. What should the pipeline do?",
            choices: ["Quarantine the bad rows and load the rest, as on any other night", "Load everything and mark the bad rows for review, so no data is lost", "Refuse the batch, load nothing, and hand someone the counts and the quarantine", "Retry the export a few times, since a spike like that is usually transient"],
            answer: 2, explain: "A handful of bad rows is data; 40% is a changed source system, and loading the survivors publishes a skewed picture that looks fine. Loading bad rows corrupts the table, and retrying can't fix a file that is simply different from what was expected." },
          { q: "Why is `updated_at` the right thing to pull changes by, rather than the day the order happened?",
            choices: ["Because event days are not unique, while update timestamps always are", "Because a correction to an old row has a recent updated_at and an old event day", "Because event days are stored as strings and cannot be compared reliably", "Because updated_at is indexed in every warehouse and the event day usually is not"],
            answer: 1, explain: "\"Changed since I last looked\" is a statement about processing time. Filtering by event day asks for rows that *happened* recently, so a correction to an order from last week is never returned. Timestamps aren't unique either, which is why a cursor needs the id too." },
          { q: "A daily job that computes yesterday from the clock is re-run three days late. What is the result?",
            choices: ["It loads the correct day, since the data interval is derived from the file's contents", "It loads the day before the rerun and the original day is never loaded", "It refuses to run, because the scheduler detects the missing partition", "It loads all three missed days, catching up automatically"],
            answer: 1, explain: "Reading the clock makes the output depend on when the job happened to run. The date has to come from the run itself — the logical date — so a rerun or a backfill loads the day it was always meant to load." },
          { q: "In a Type 2 dimension, why does a point-in-time join use the effective date range rather than `is_current`?",
            choices: ["Because is_current is only set correctly after a full reload of the dimension", "Because several versions can be current at once when a load is interrupted", "Because a fact should join to the version that was in force when the fact happened", "Because the range comparison is faster than filtering on a boolean column"],
            answer: 2, explain: "That's the whole purpose of keeping history: last March's revenue belongs to the region the customer lived in last March. Joining on `is_current` throws that away and rebuilds the Type 1 bug. An interrupted load shouldn't leave two current rows — that's what the transaction is for." },
          { q: "A load writes its rows in one transaction and its watermark, or its load log, in another. What is the danger?",
            choices: ["A crash in between leaves the two disagreeing, and the pipeline believes the wrong one", "The second transaction may block the first one, so the load never completes", "The warehouse may reorder the transactions, writing the log before the rows", "Nothing serious: a stale watermark only causes rows to be loaded twice"],
            answer: 0, explain: "Two transactions mean a window between them. Crash there and the log claims a load that isn't there, or a watermark skips rows that were never written — and that second case loses data permanently, because no later run asks for those rows again." }
        ]
      }
    ]
  });
})();
