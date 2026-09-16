/* Data Pipelines & ETL — Unit 7: History, and handing data back out */
(function () {
  /* Code is written as String.raw templates, so backslashes reach the
     learner's editor and the grader exactly as they appear here. Nothing
     inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var DIM = {
    version_id: "text", customer_id: "text", name: "text", region: "text",
    effective_from: "date", effective_to: "date", is_current: "bool"
  };
  var ORDERS = { order_id: "text", customer_id: "text", day: "date", amount_cents: "int" };

  /* ---------- etl-u7-1 ---------- */
  var T1 = R`
// Ada moved from North to South on the 10th. Her orders did not move with her.
const MARCH_1 = [
  { customer_id: "C-1", name: "Ada", region: "North" },
  { customer_id: "C-2", name: "Bo", region: "East" }
];
const MARCH_10 = [
  { customer_id: "C-1", name: "Ada", region: "South" },
  { customer_id: "C-2", name: "Bo", region: "East" }
];
const ORDERS = [
  { order_id: "ORD-1", customer_id: "C-1", day: "2026-03-02", amount_cents: 1500 },
  { order_id: "ORD-2", customer_id: "C-2", day: "2026-03-03", amount_cents: 2000 },
  { order_id: "ORD-3", customer_id: "C-1", day: "2026-03-12", amount_cents: 1000 }
];
`;
  function u1File(body) {
    return T1 + "\n" + body + R`

db.upsert("orders", ORDERS);
applyType1(MARCH_1);
console.log("before the move:", JSON.stringify(revenueByRegion()));
applyType1(MARCH_10);
console.log("after the move: ", JSON.stringify(revenueByRegion()));
`;
  }

  /* ---------- etl-u7-2 and etl-u7-3 ---------- */
  var T2 = R`
const MARCH_1 = [
  { customer_id: "C-1", name: "Ada", region: "North" },
  { customer_id: "C-2", name: "Bo", region: "East" }
];
const MARCH_10 = [
  { customer_id: "C-1", name: "Ada", region: "South" },  // moved
  { customer_id: "C-2", name: "Bo", region: "East" }     // unchanged
];
const FAR_FUTURE = "9999-12-31";

let seq = 0;
function nextVersionId() { seq++; return "V" + seq; }
function dayBefore(day) {
  return new Date(Date.parse(day + "T00:00:00Z") - 86400000).toISOString().slice(0, 10);
}
function currentVersion(customerId) {
  return db.select("customers", r => r.customer_id === customerId && r.is_current)[0] || null;
}
`;
  function u2File(body) {
    return T2 + "\n" + body + R`

applyChanges("2026-03-01", MARCH_1);
applyChanges("2026-03-10", MARCH_10);
console.log(T.rows("customers").map(r => [r.customer_id, r.region, r.effective_from, r.effective_to, r.is_current].join(" ")));
`;
  }

  var PIT = T2 + R`
const ORDERS = [
  { order_id: "ORD-1", customer_id: "C-1", day: "2026-03-02", amount_cents: 1500 },
  { order_id: "ORD-2", customer_id: "C-2", day: "2026-03-03", amount_cents: 2000 },
  { order_id: "ORD-3", customer_id: "C-1", day: "2026-03-12", amount_cents: 1000 }
];

// Unit 7 lesson 2's loader, so the dimension already holds Ada's two versions.
function applyChanges(day, rows) {
  return db.tx(() => {
    let added = 0;
    for (const r of rows) {
      const current = currentVersion(r.customer_id);
      if (current && current.name === r.name && current.region === r.region) continue;
      if (current) db.upsert("customers", Object.assign({}, current, { effective_to: dayBefore(day), is_current: false }));
      db.insert("customers", {
        version_id: nextVersionId(), customer_id: r.customer_id, name: r.name, region: r.region,
        effective_from: day, effective_to: FAR_FUTURE, is_current: true
      });
      added++;
    }
    return added;
  });
}

function loadHistory() {
  db.delete("customers", {});
  db.delete("orders", {});
  seq = 0;
  applyChanges("2026-03-01", MARCH_1);
  applyChanges("2026-03-10", MARCH_10);
  db.upsert("orders", ORDERS);
}
`;
  function u3File(body) {
    return PIT + "\n" + body + R`

loadHistory();
console.log("as of the order date:", JSON.stringify(revenueByRegion()));
console.log("Ada on the 2nd:", (versionAt("C-1", "2026-03-02") || {}).region);
console.log("Ada on the 12th:", (versionAt("C-1", "2026-03-12") || {}).region);
`;
  }

  /* ---------- etl-u7-4 ---------- */
  var EXPORT = R`
// The parser from etl-u1-1, so a round trip can be checked here.
function parseCSV(text) {
  const records = [];
  let record = [], field = "";
  let quoted = false, afterQuote = false, started = false;
  let i = 0;
  while (i < text.length) {
    const c = text[i], next = text[i + 1];
    if (quoted) {
      if (c === '"') {
        if (next === '"') { field += '"'; i += 2; continue; }
        quoted = false; afterQuote = true; i++; continue;
      }
      field += c; i++; continue;
    }
    if (c === ",") { record.push(field); field = ""; afterQuote = false; started = true; i++; continue; }
    if (c === "\r" && next === "\n") { record.push(field); records.push(record); record = []; field = ""; afterQuote = false; started = false; i += 2; continue; }
    if (c === "\n") { record.push(field); records.push(record); record = []; field = ""; afterQuote = false; started = false; i++; continue; }
    if (c === '"' && field === "") { quoted = true; started = true; i++; continue; }
    field += c; started = true; i++;
  }
  if (started || field !== "" || record.length) { record.push(field); records.push(record); }
  return records;
}

// What the finance team asked for, including the rows that fight back.
const COLUMNS = ["order_id", "zip", "note", "amount"];
const ROWS = [
  { order_id: "ORD-1", zip: "07920", note: "Ada said \"ship it\"", amount: "15.00" },
  { order_id: "ORD-2", zip: "94103", note: "two\r\nlines, actually", amount: "20.00" },
  { order_id: "ORD-3", zip: "02134", note: "=1+1", amount: "10.00" }
];
`;
  function u4File(body) {
    return EXPORT + "\n" + body + R`

const csv = toCSV(COLUMNS, ROWS);
console.log(JSON.stringify(csv));
console.log(parseCSV(csv).length, "records, including the header");
`;
  }

  window.CODELAB.addUnit("etl", {
    id: "etl-u7",
    title: "History, and handing data back out",
    icon: "🕰️",
    blurb: "Which address did this customer have when they placed that order? Type 1 forgets, Type 2 remembers, and a point-in-time join uses it. Then the last mile: writing a CSV that survives the spreadsheet it will be opened in.",
    cheat: [
      { h: "Type 1 versus Type 2", lang: "js", code: R`
// Type 1: one row per key, overwritten. Last year's report changes too.
db.upsert("customers", { customer_id: "C-1", region: "South" });
// Type 2: a new row per change, the old one closed off
{ version_id: "V2", customer_id: "C-1", region: "South",
  effective_from: "2026-03-10", effective_to: "9999-12-31", is_current: true }`,
        note: "Type 1 is right for a corrected typo. Type 2 is right for a fact that was true and then stopped being true." },
      { h: "Close, then open", lang: "js", code: R`
db.upsert("customers", Object.assign({}, current,
  { effective_to: dayBefore(day), is_current: false }));   // close the old version
db.insert("customers", { version_id: nextVersionId(), ...,
  effective_from: day, effective_to: FAR_FUTURE, is_current: true });`,
        note: "Both writes in one transaction. Invariants: exactly one current row per key, no overlapping ranges, no gaps between them." },
      { h: "Point in time", lang: "js", code: R`
// the version that was in force on the day of the order, not today's
db.select("customers", r => r.customer_id === id &&
  r.effective_from <= day && day <= r.effective_to)[0];`,
        note: "Joining a fact to the CURRENT version is the mistake Type 2 exists to prevent: it moves last year's revenue to this year's region." },
      { h: "CSV that survives Excel", lang: "js", code: R`
// quote when the value holds a comma, a quote, CR or LF; double the quotes
'"' + value.split('"').join('""') + '"'
// neutralise a leading = + - @ tab or CR: a spreadsheet would run it
if (/^[=+\-@\t\r]/.test(value)) value = "'" + value;`,
        note: "Leading zeros survive because CSV has no types: write 07920 as text and never through Number. The formula rule is OWASP's." }
    ],
    lessons: [

      {
        id: "etl-u7-1",
        title: "Type 1 overwrites, and last year's report changes",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        warehouse: {
          tables: {
            customers: { key: ["customer_id"], columns: { customer_id: "text", name: "text", region: "text" } },
            orders: { key: ["order_id"], columns: ORDERS }
          }
        },
        brief: "Every dimension table has to answer one question before anything else: **when an attribute changes, what happens to the old value?**\n\nThe simplest answer is *overwrite it*. One row per customer, `upsert` on the key, done. That's a **Type 1** slowly changing dimension, and for a corrected spelling or a fixed typo it's exactly right: the old value was never true, so nothing should remember it.\n\nBut when Ada genuinely **moves** from North to South, the old value *was* true, for every order she placed before the move. Overwrite it and a report of March revenue by region silently changes: orders from the 2nd, placed while she was in the North, are now counted in the South. Nothing is logged, the numbers just quietly differ from the ones in last week's email — and anyone comparing the two has no way to tell which is right.\n\nThis lesson builds that failure so the next one can fix it. Write `applyType1(rows)`, which upserts each customer, and `revenueByRegion()`, which joins every order to its customer's region and totals `amount_cents` per region, returning an object like `{ North: 1500, East: 2000 }`.\n\nThe last checkpoint expects the history to change. That's the bug, and it's the argument for Type 2.",
        steps: [
          { text: "`applyType1` keeps one row per customer, and `revenueByRegion` joins orders to it.",
            test: R`
db.delete("customers", {});
db.delete("orders", {});
T.clearFaults();
db.upsert("orders", ORDERS);
T.eq(applyType1(MARCH_1), 2, 'Two customers loaded');
T.eq(db.count("customers"), 2, 'One row per customer');
T.eq(revenueByRegion(), { North: 2500, East: 2000 }, 'Ada is in the North, so both of her orders count there');
` },
          { text: "A second load of the same file changes nothing.",
            test: R`
db.delete("customers", {});
db.delete("orders", {});
T.clearFaults();
db.upsert("orders", ORDERS);
applyType1(MARCH_1);
var after = T.rows("customers");
applyType1(MARCH_1);
T.eq(T.rows("customers"), after, 'Type 1 is idempotent: the same file leaves the same row');
T.eq(db.count("customers"), 2, 'Still two customers');
` },
          { text: "After the move, the current region is right.",
            test: R`
db.delete("customers", {});
db.delete("orders", {});
T.clearFaults();
db.upsert("orders", ORDERS);
applyType1(MARCH_1);
applyType1(MARCH_10);
T.eq(db.select("customers", { customer_id: "C-1" })[0].region, 'South', 'Ada is in the South now');
T.eq(db.count("customers"), 2, 'Still one row per customer: the old value is simply gone');
` },
          { text: "The lab: last year's report changed with it. The checkpoint expects the rewritten history.",
            test: R`
db.delete("customers", {});
db.delete("orders", {});
T.clearFaults();
db.upsert("orders", ORDERS);
applyType1(MARCH_1);
var before = revenueByRegion();
T.eq(before, { North: 2500, East: 2000 }, 'Before the move, March looks like this');
applyType1(MARCH_10);
T.eq(revenueByRegion(), { South: 2500, East: 2000 }, 'And afterwards the order from the 2nd counts in the South, where Ada did not live when she placed it');
T.expect(before.North === 2500 && revenueByRegion().North === undefined, 'A published number changed because a customer moved. Nothing warned anyone, and nothing in the warehouse remembers the old answer');
` }
        ],
        files: [
          { name: "script.js", content: u1File(R`
function applyType1(rows) {
  // TODO: one row per customer, overwritten in place. Return how many rows were written.
  return 0;
}

function revenueByRegion() {
  // TODO: join every order to its customer's region and total amount_cents
  return {};
}
`) }
        ],
        hints: [
          "`applyType1`: `db.upsert(\"customers\", rows)` inside a `db.tx`, returning `rows.length`.",
          "`revenueByRegion`: loop over `db.select(\"orders\")`, look the customer up with `db.select(\"customers\", { customer_id: o.customer_id })[0]`, and add `o.amount_cents` into an object keyed by region.",
          "Skip an order whose customer isn't in the dimension rather than counting it under `undefined`."
        ],
        solution: {
          "script.js": u1File(R`
function applyType1(rows) {
  return db.tx(() => {
    db.upsert("customers", rows);  // the old value is overwritten, and gone
    return rows.length;
  });
}

function revenueByRegion() {
  const totals = {};
  for (const order of db.select("orders")) {
    const customer = db.select("customers", { customer_id: order.customer_id })[0];
    if (!customer) continue;
    totals[customer.region] = (totals[customer.region] || 0) + order.amount_cents;
  }
  return totals;
}
`)
        }
      },

      {
        id: "etl-u7-2",
        title: "Type 2 by the book",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        warehouse: {
          tables: { customers: { key: ["version_id"], columns: DIM } }
        },
        brief: "A **Type 2** dimension keeps every version of a row. Kimball's recipe, which is what warehouses have used for thirty years:\n\n- The table is keyed by a **surrogate key** (`version_id`), not by the customer. One customer has many rows, so the customer id can't be the key any more — it becomes the **natural key** you group by.\n- Each version carries a **`effective_from`** and an **`effective_to`** date, and the current one carries a far-future date (`9999-12-31`) rather than `null`, so a date comparison never has to special-case it.\n- Each version carries **`is_current`**, which is redundant with the dates and worth having anyway, because \"the row as it is now\" is the most common query in the warehouse.\n\nApplying a change is two writes in one transaction: **close** the current version by setting its `effective_to` to the day before the change and `is_current` to false, then **open** a new version starting on the change day.\n\nThree invariants have to hold after every batch, and the checkpoints test all three:\n\n1. Exactly **one current row** per customer.\n2. **No overlapping** ranges for a customer.\n3. **No gaps**: each version starts the day after the previous one ends.\n\nAnd one behaviour that isn't an invariant but matters just as much: a row that **hasn't changed** must not produce a new version, or every nightly run doubles the table.\n\nWrite `applyChanges(day, rows)`, returning how many new versions it created. `nextVersionId()`, `dayBefore(day)`, `currentVersion(id)` and `FAR_FUTURE` are in the file.",
        steps: [
          { text: "The first load opens one open-ended version per customer.",
            test: R`
db.delete("customers", {});
T.clearFaults();
seq = 0;
T.eq(applyChanges("2026-03-01", MARCH_1), 2, 'Two new versions');
var ada = db.select("customers", { customer_id: "C-1" });
T.eq(ada.length, 1, 'One version for Ada so far');
T.eq([ada[0].region, ada[0].effective_from, ada[0].effective_to, ada[0].is_current], ['North', '2026-03-01', '9999-12-31', true], 'It runs from the load day to the far future and is current');
` },
          { text: "A change closes the old version the day before and opens a new one, with no gap and no overlap.",
            test: R`
db.delete("customers", {});
T.clearFaults();
seq = 0;
applyChanges("2026-03-01", MARCH_1);
T.eq(applyChanges("2026-03-10", MARCH_10), 1, 'Only Ada changed, so only one new version');
var ada = db.select("customers", { customer_id: "C-1" }).sort(function (a, b) { return a.effective_from < b.effective_from ? -1 : 1; });
T.eq(ada.length, 2, 'Ada now has two versions');
T.eq([ada[0].region, ada[0].effective_from, ada[0].effective_to, ada[0].is_current], ['North', '2026-03-01', '2026-03-09', false], 'The old version is closed the day BEFORE the change and is no longer current');
T.eq([ada[1].region, ada[1].effective_from, ada[1].effective_to, ada[1].is_current], ['South', '2026-03-10', '9999-12-31', true], 'The new version starts on the change day and runs open-ended');
` },
          { text: "A customer who did not change gets no new version, and re-applying a batch is a no-op.",
            test: R`
db.delete("customers", {});
T.clearFaults();
seq = 0;
applyChanges("2026-03-01", MARCH_1);
applyChanges("2026-03-10", MARCH_10);
T.eq(db.select("customers", { customer_id: "C-2" }).length, 1, 'Bo did not move, so Bo still has one version');
var settled = T.rows("customers");
T.eq(applyChanges("2026-03-11", MARCH_10), 0, 'Applying the same attributes again creates nothing');
T.eq(applyChanges("2026-03-12", MARCH_10), 0, 'However many times it runs');
T.eq(T.rows("customers"), settled, 'And the table is untouched: a nightly Type 2 load must not grow on its own');
` },
          { text: "The three invariants hold after a third change.",
            test: R`
db.delete("customers", {});
T.clearFaults();
seq = 0;
applyChanges("2026-03-01", MARCH_1);
applyChanges("2026-03-10", MARCH_10);
applyChanges("2026-03-20", [{ customer_id: "C-1", name: "Ada", region: "West" }, { customer_id: "C-2", name: "Bo", region: "East" }]);
['C-1', 'C-2'].forEach(function (id) {
  var versions = db.select("customers", { customer_id: id }).sort(function (a, b) { return a.effective_from < b.effective_from ? -1 : 1; });
  T.eq(versions.filter(function (v) { return v.is_current; }).length, 1, 'Exactly one current version for ' + id);
  T.eq(versions[versions.length - 1].effective_to, '9999-12-31', 'The newest version of ' + id + ' is the open-ended one');
  for (var i = 0; i + 1 < versions.length; i++) {
    T.expect(versions[i].effective_to < versions[i + 1].effective_from, 'Versions of ' + id + ' must not overlap');
    T.eq(dayBefore(versions[i + 1].effective_from), versions[i].effective_to, 'And must leave no gap: version ' + (i + 1) + ' of ' + id + ' starts the day after the previous one ends');
  }
});
T.eq(db.select("customers", { customer_id: "C-1" }).length, 3, 'Ada has three versions');
` }
        ],
        files: [
          { name: "script.js", content: u2File(R`
function applyChanges(day, rows) {
  // TODO: close the current version and open a new one, but only when
  // something actually changed. Return how many versions were created.
  return 0;
}
`) }
        ],
        hints: [
          "For each row: `const current = currentVersion(r.customer_id)`. If there is one and its `name` and `region` already match, skip it — that's the no-change rule.",
          "Close the old one by upserting a copy: `Object.assign({}, current, { effective_to: dayBefore(day), is_current: false })`. Upsert, because it already has a version_id.",
          "Open the new one with `db.insert` and a fresh `nextVersionId()`, `effective_from: day`, `effective_to: FAR_FUTURE`, `is_current: true`.",
          "Wrap the loop in one `db.tx` so a crash can never leave a customer with two current versions, or none."
        ],
        solution: {
          "script.js": u2File(R`
function applyChanges(day, rows) {
  return db.tx(() => {
    let added = 0;
    for (const r of rows) {
      const current = currentVersion(r.customer_id);
      if (current && current.name === r.name && current.region === r.region) continue;  // nothing changed
      if (current) {
        db.upsert("customers", Object.assign({}, current, { effective_to: dayBefore(day), is_current: false }));
      }
      db.insert("customers", {
        version_id: nextVersionId(), customer_id: r.customer_id, name: r.name, region: r.region,
        effective_from: day, effective_to: FAR_FUTURE, is_current: true
      });
      added++;
    }
    return added;
  });
}
`)
        }
      },

      {
        id: "etl-u7-3",
        title: "Point-in-time joins",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        warehouse: {
          tables: {
            customers: { key: ["version_id"], columns: DIM },
            orders: { key: ["order_id"], columns: ORDERS }
          }
        },
        brief: "A Type 2 dimension is only worth building if the queries use it. The one that matters is the **point-in-time join**: for each fact, find the version of the dimension that was in force **on the day of the fact**, not the version that's in force now.\n\nThe condition is exactly the range you stored:\n\n> `effective_from <= day && day <= effective_to`\n\nBecause the current version carries `9999-12-31` rather than `null`, that single comparison covers it too. This is also where the ISO date format from Unit 2 pays off a third time: those comparisons are plain string comparisons.\n\nThe contrast is the point of the lesson. `revenueByRegion()` joins each order to the version current **on the order's day**, so March's numbers stay what they were. `revenueByCurrentRegion()` joins to `is_current` instead — which is the Type 1 bug rebuilt on a Type 2 table, and a genuinely common mistake, because `is_current` is so convenient.\n\nWrite `versionAt(customerId, day)`, returning that version or `null`, and both report functions. `loadHistory()` sets up the dimension and the orders.",
        steps: [
          { text: "`versionAt` picks the version in force on a given day.",
            test: R`
T.clearFaults();
loadHistory();
T.eq(versionAt("C-1", "2026-03-02").region, 'North', 'On the 2nd, Ada was in the North');
T.eq(versionAt("C-1", "2026-03-09").region, 'North', 'The old version runs to the 9th inclusive');
T.eq(versionAt("C-1", "2026-03-10").region, 'South', 'And the new one starts on the 10th');
T.eq(versionAt("C-1", "2026-03-12").region, 'South', 'The current version has a far-future end date, so the same comparison covers it');
T.eq(versionAt("C-1", "2026-02-28"), null, 'Before the first version there is nothing to find');
T.eq(versionAt("C-9", "2026-03-12"), null, 'And an unknown customer has no version');
` },
          { text: "The point-in-time report leaves history alone.",
            test: R`
T.clearFaults();
loadHistory();
T.eq(revenueByRegion(), { North: 1500, East: 2000, South: 1000 }, 'The order from the 2nd counts in the North, where Ada was when she placed it, and the one from the 12th counts in the South');
` },
          { text: "Joining on `is_current` instead rebuilds the Type 1 bug on a Type 2 table.",
            test: R`
T.clearFaults();
loadHistory();
T.eq(revenueByCurrentRegion(), { South: 2500, East: 2000 }, 'Joining to the current version moves the March 2nd order to the South, exactly as Type 1 did');
T.expect(JSON.stringify(revenueByRegion()) !== JSON.stringify(revenueByCurrentRegion()), 'The two reports disagree, and only one of them answers what was true at the time');
` },
          { text: "A new version changes today's answer and leaves the point-in-time answer alone.",
            test: R`
T.clearFaults();
loadHistory();
var before = revenueByRegion();
applyChanges("2026-03-25", [{ customer_id: "C-1", name: "Ada", region: "West" }, { customer_id: "C-2", name: "Bo", region: "East" }]);
T.eq(revenueByRegion(), before, 'A move in a later month cannot change March: that is what the effective dates are for');
T.eq(versionAt("C-1", "2026-03-26").region, 'West', 'While a query about today gets the new version');
T.eq(revenueByCurrentRegion(), { West: 2500, East: 2000 }, 'And the is_current report has rewritten March again');
` }
        ],
        files: [
          { name: "script.js", content: u3File(R`
function versionAt(customerId, day) {
  // TODO: the version whose range covers that day, or null
  return null;
}

function revenueByRegion() {
  // TODO: join each order to the version in force on the order's day
  return {};
}

function revenueByCurrentRegion() {
  // TODO: the same report, joined to is_current instead
  return {};
}
`) }
        ],
        hints: [
          "`versionAt`: `db.select(\"customers\", r => r.customer_id === customerId && r.effective_from <= day && day <= r.effective_to)[0] || null`.",
          "Both reports have the same shape as Unit 7 lesson 1's: total `amount_cents` into an object keyed by region.",
          "The only difference between them is which version they look up: `versionAt(o.customer_id, o.day)` versus `currentVersion(o.customer_id)`."
        ],
        solution: {
          "script.js": u3File(R`
function versionAt(customerId, day) {
  const hit = db.select("customers", r =>
    r.customer_id === customerId && r.effective_from <= day && day <= r.effective_to);
  return hit.length ? hit[0] : null;
}

function totalBy(lookup) {
  const totals = {};
  for (const order of db.select("orders")) {
    const version = lookup(order);
    if (!version) continue;
    totals[version.region] = (totals[version.region] || 0) + order.amount_cents;
  }
  return totals;
}

function revenueByRegion() {
  return totalBy(order => versionAt(order.customer_id, order.day));  // as of the order date
}

function revenueByCurrentRegion() {
  return totalBy(order => currentVersion(order.customer_id));        // the Type 1 bug, rebuilt
}
`)
        }
      },

      {
        id: "etl-u7-4",
        title: "Writing CSV people will open in Excel",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        brief: "The last mile of a pipeline is usually a file someone opens in a spreadsheet, and the same format that was hard to read is now hard to write.\n\n- **Quote what needs quoting.** A value holding a comma, a double quote, CR or LF goes in double quotes, and every quote inside it is doubled. That's RFC 4180 from the other side: what Unit 1's parser expects.\n- **Don't let numbers happen to text.** `07920` is a zip code. CSV has no types, so it survives — as long as nothing in your code puts it through `Number` on the way out.\n- **Neutralise formulas.** A cell beginning `=`, `+`, `-`, `@`, a tab or a CR is executed as a formula by spreadsheet software. A row of user-supplied text is then a small program running on someone's laptop, which is OWASP's **CSV injection**. The fix is to prefix such a value with a single quote (`'`), so the spreadsheet treats it as text, and to quote the field as well.\n- **Check the round trip.** Everything you write should parse back to what you started with. `parseCSV` from Unit 1 is in the file for exactly that.\n\nWrite `toCSV(columns, rows)`: a header line of the column names, then one line per row, CRLF-terminated (including after the last row), values taken in column order and missing values written as empty.",
        steps: [
          { text: "Plain values, a header, and CRLF line endings.",
            test: R`
var csv = toCSV(['a', 'b'], [{ a: '1', b: 'x' }, { a: '2', b: 'y' }]);
T.eq(csv, 'a,b\r\n1,x\r\n2,y\r\n', 'A header line, then a line per row, each ending CRLF');
T.eq(toCSV(['a', 'b'], []), 'a,b\r\n', 'A file with no rows is still a header');
T.eq(toCSV(['a', 'b'], [{ a: '1' }]), 'a,b\r\n1,\r\n', 'A missing value is an empty field');
` },
          { text: "Commas, quotes and line breaks are quoted the way Unit 1's parser expects.",
            test: R`
T.eq(toCSV(['note'], [{ note: 'a,b' }]), 'note\r\n"a,b"\r\n', 'A comma forces quotes');
T.eq(toCSV(['note'], [{ note: 'Ada said "hi"' }]), 'note\r\n"Ada said ""hi"""\r\n', 'A quote is doubled and the field is quoted');
T.eq(toCSV(['note'], [{ note: 'two\r\nlines' }]), 'note\r\n"two\r\nlines"\r\n', 'A line break inside a value is quoted, not escaped');
T.eq(toCSV(['note'], [{ note: 'plain' }]), 'note\r\nplain\r\n', 'And a value that needs no quotes does not get any');
` },
          { text: "A cell that would run as a formula is neutralised, per OWASP.",
            test: R`
var csv = toCSV(['note'], [{ note: '=1+1' }, { note: '+SUM(A1:A9)' }, { note: '-2' }, { note: '@here' }, { note: 'safe=1' }]);
var rows = parseCSV(csv);
T.eq(rows[1][0], "'=1+1", 'A leading = is prefixed with a single quote so the spreadsheet sees text');
T.eq(rows[2][0], "'+SUM(A1:A9)", 'So is a leading +');
T.eq(rows[3][0], "'-2", 'And a leading -');
T.eq(rows[4][0], "'@here", 'And a leading @');
T.eq(rows[5][0], 'safe=1', 'An = in the middle of a value is ordinary text and is left alone');
` },
          { text: "The export round-trips through `parseCSV`, and leading zeros survive.",
            test: R`
var csv = toCSV(COLUMNS, ROWS);
var rows = parseCSV(csv);
T.eq(rows[0], COLUMNS, 'The first record is the header');
T.eq(rows.length, 4, 'Three rows and a header, even though one note contains a line break');
T.eq(rows[1], ['ORD-1', '07920', 'Ada said "ship it"', '15.00'], 'The first row survives its quotes intact');
T.eq(rows[2][2], 'two\r\nlines, actually', 'The multi-line note comes back as one field with its CRLF');
T.eq(rows[1][1], '07920', 'The zip keeps its leading zero: CSV has no types, so nothing converted it');
T.eq(rows[3][2], "'=1+1", 'And the formula cell is neutralised');
` }
        ],
        files: [
          { name: "script.js", content: u4File(R`
function toCSV(columns, rows) {
  // TODO: header, then a CRLF-terminated line per row.
  // Quote what needs it, double inner quotes, and neutralise leading = + - @ tab CR.
  return "";
}
`) }
        ],
        hints: [
          "Write one `cell(value)` helper and map every field through it, then `join(\",\")` the line and `join(\"\")` the lines, each ending in `\\r\\n`.",
          "In `cell`: start from `value === undefined || value === null ? \"\" : String(value)`.",
          "Neutralise first: `if (/^[=+\\-@\\t\\r]/.test(v)) v = \"'\" + v;` — note the escaped `-` inside the character class.",
          "Then quote: if the value contains `\"`, `,`, CR or LF (or you just neutralised it), return `'\"' + v.split('\"').join('\"\"') + '\"'`."
        ],
        solution: {
          "script.js": u4File(R`
const FORMULA_START = /^[=+\-@\t\r]/;

function cell(value) {
  let v = value === undefined || value === null ? "" : String(value);
  let mustQuote = /[",\r\n]/.test(v);
  if (FORMULA_START.test(v)) {   // OWASP: a spreadsheet would run this
    v = "'" + v;
    mustQuote = true;
  }
  return mustQuote ? '"' + v.split('"').join('""') + '"' : v;
}

function toCSV(columns, rows) {
  const lines = [columns.map(cell).join(",")];
  for (const row of rows) lines.push(columns.map(c => cell(row[c])).join(","));
  return lines.join("\r\n") + "\r\n";
}
`)
        }
      },

      {
        id: "etl-quiz-7",
        title: "Unit quiz: History and export",
        kind: "quiz", xp: 10,
        brief: "Type 1 and Type 2, effective dates, point-in-time joins and CSV export. 80% to pass.",
        questions: [
          { q: "A customer's region is corrected from a misspelling to the right name. Which treatment fits?",
            choices: ["Type 2, because every change to a dimension should be versioned for the audit trail", "Type 1: the old value was never true, so nothing should remember it", "Neither: corrections belong in a separate errata table that reports join to", "Type 2 with the effective date set to the day the mistake was originally made"],
            answer: 1, explain: "Type 2 exists for facts that were true and then stopped being true. A typo was never true, so keeping a version of it only invites someone to report on it. Versioning everything indiscriminately is how dimension tables become unusable." },
          { q: "In a Type 2 dimension, why can't `customer_id` be the table's key?",
            choices: ["Because warehouses require keys to be numbers rather than text", "Because a customer has several rows, one per version, so the id no longer identifies a row", "Because the natural key changes whenever the customer's attributes change", "Because joins are faster against a surrogate key than against a natural one"],
            answer: 1, explain: "That's the structural change Type 2 brings: one customer, many rows. A surrogate version key identifies a row, and the customer id becomes the natural key you group and filter by. It doesn't change, and speed isn't the reason." },
          { q: "Why does the current version carry `9999-12-31` rather than `null` as its `effective_to`?",
            choices: ["Because a null would make the row invisible to the is_current flag", "So one range comparison covers current and historical rows alike, with no special case", "Because warehouses cannot store null in a date column", "So the row sorts last when versions are ordered by their end date"],
            answer: 1, explain: "The point-in-time condition is `effective_from <= day && day <= effective_to`. With a null end date that comparison fails and every query needs an extra branch. A far-future date keeps one condition covering every version." },
          { q: "A report joins orders to the customer dimension on `is_current`. What does it produce?",
            choices: ["The Type 1 result: last year's orders counted under today's attributes", "The point-in-time result, since only one version is current at a time", "An error, because several versions share the same customer id", "Correct totals, but only for customers who have never changed"],
            answer: 0, explain: "Joining on `is_current` throws away exactly the history Type 2 was built to keep, so March's orders move to the region the customer lives in now. It's a common mistake precisely because the flag is so convenient. The fix is to join on the date range." },
          { q: "An export writes a note containing `Ada said \"hi\"`. What should the field look like?",
            choices: ["Ada said \\\"hi\\\" — the quotes escaped with backslashes", "\"Ada said \"\"hi\"\"\" — wrapped in quotes with each inner quote doubled", "Ada said 'hi' — inner quotes replaced with apostrophes so no quoting is needed", "'Ada said \"hi\"' — prefixed with a single quote, like a formula cell"],
            answer: 1, explain: "RFC 4180 has one escape: a doubled quote inside a quoted field. Backslashes aren't part of CSV, and rewriting the data to avoid quoting changes what the source actually said. The single-quote prefix is for formula neutralisation, which is a different problem." },
          { q: "Why prefix a cell beginning with `=` with a single quote before exporting?",
            choices: ["To keep the parser from treating the cell as a comment line", "So spreadsheet software shows it as text instead of running it as a formula", "Because CSV reserves the equals sign for header definitions", "To preserve leading zeros in numeric-looking values"],
            answer: 1, explain: "A spreadsheet evaluates a cell starting with =, +, -, @, tab or CR, so user-supplied text becomes a small program on someone's laptop — OWASP's CSV injection. The single quote makes it literal text. Leading zeros survive for a different reason: CSV has no types." }
        ]
      }
    ]
  });
})();
