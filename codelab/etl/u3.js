/* Data Pipelines & ETL — Unit 3: Validate, quarantine, and never drop a row silently */
(function () {
  /* Code is written as String.raw templates, so backslashes reach the
     learner's editor and the grader exactly as they appear here. Nothing
     inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var CONTRACT = R`
const CONTRACT = {
  columns: {
    order_id:     { required: true, pattern: "^ORD-\\d{6}$" },
    status_code:  { required: true, oneOf: ["new", "paid", "shipped", "refunded"] },
    qty:          { required: true, min: 1, max: 999 },
    amount_cents: { required: true, min: 0 },
    country:      { required: false, pattern: "^[A-Z]{2}$" },
    note:         { required: false, maxLength: 200 },
    ordered:      { required: true },
    shipped:      { required: false }
  },
  rowRules: [
    { rule: "shipped_not_before_ordered", test: r => r.shipped === null || r.shipped >= r.ordered },
    { rule: "refund_has_amount", test: r => r.status_code !== "refunded" || r.amount_cents > 0 }
  ]
};
`;

  var CHECK_ROW = R`
function checkRow(row, contract) {
  const problems = [];
  for (const column of Object.keys(contract.columns)) {
    const c = contract.columns[column], v = row[column];
    if (v === null || v === undefined) {
      if (c.required) problems.push({ column: column, rule: "required" });
      continue;  // nothing else to check on a missing value
    }
    if (c.min != null && v < c.min) problems.push({ column: column, rule: "min" });
    if (c.max != null && v > c.max) problems.push({ column: column, rule: "max" });
    if (c.oneOf && c.oneOf.indexOf(v) === -1) problems.push({ column: column, rule: "oneOf" });
    if (c.pattern && !new RegExp(c.pattern).test(String(v))) problems.push({ column: column, rule: "pattern" });
    if (c.maxLength != null && String(v).length > c.maxLength) problems.push({ column: column, rule: "maxLength" });
  }
  if (problems.length === 0) {  // cross-field rules assume the fields themselves are valid
    for (const r of contract.rowRules || []) if (!r.test(row)) problems.push({ column: "(row)", rule: r.rule });
  }
  return problems;
}
`;

  /* ---------- etl-u3-1 ---------- */
  var GOOD_ROW = R`
// A typed order, the way Unit 2 left it.
const ORDER = {
  order_id: "ORD-100042", status_code: "paid", qty: 3, amount_cents: 4500,
  country: "US", note: null, ordered: "2026-03-08", shipped: "2026-03-09"
};
`;
  function u1File(body) {
    return CONTRACT + GOOD_ROW + "\n" + body + R`

console.log(checkRow(ORDER, CONTRACT));
console.log(checkRow(Object.assign({}, ORDER, { qty: 0, country: "usa" }), CONTRACT));
`;
  }

  /* ---------- etl-u3-2 ---------- */
  var BATCH = CONTRACT + "\n" + CHECK_ROW + R`
// Typing from Unit 2, cut down to this file's columns. Throws "column: reason".
function typeOrder(raw) {
  const int = column => {
    const v = String(raw[column]).trim();
    if (!/^-?\d+$/.test(v)) throw new TypeError(column + ": not an integer: " + JSON.stringify(raw[column]));
    return Number(v);
  };
  const day = (column, nullable) => {
    const v = String(raw[column] || "").trim();
    if (v === "" && nullable) return null;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) throw new TypeError(column + ": not a YYYY-MM-DD day: " + JSON.stringify(raw[column]));
    return v;
  };
  const text = column => (raw[column] === undefined || raw[column] === "" ? null : raw[column]);
  return {
    order_id: text("order_id"), status_code: text("status_code"), qty: int("qty"), amount_cents: int("amount_cents"),
    country: text("country"), note: text("note"), ordered: day("ordered", false), shipped: day("shipped", true)
  };
}

class BatchRejected extends Error {
  constructor(rejected, total, quarantine) {
    super(rejected + " of " + total + " rows rejected");
    this.name = "BatchRejected";
    this.rejected = rejected;
    this.total = total;
    this.quarantine = quarantine;
  }
}

// n records { line, raw }, all valid except the lines patched in badLines.
function makeRecords(n, badLines) {
  const records = [];
  for (let i = 0; i < n; i++) {
    const line = i + 2;  // line 1 is the header
    const raw = { order_id: "ORD-" + (100000 + i), status_code: "paid", qty: String(1 + (i % 5)),
      amount_cents: String(1000 + i), country: "US", note: "", ordered: "2026-03-08", shipped: "" };
    records.push({ line: line, raw: Object.assign(raw, badLines[line] || {}) });
  }
  return records;
}

const NIGHTLY = makeRecords(100, { 17: { qty: "3 apples" } });
const MESSY = makeRecords(100, { 5: { qty: "0" }, 40: { status_code: "Paid", country: "usa" }, 88: { ordered: "03/08/2026" } });
`;
  function u2File(body) {
    return BATCH + "\n" + body + R`

console.log(runBatch(NIGHTLY).quarantine);
try { runBatch(MESSY); } catch (e) { console.log(e.name, e.message); }
`;
  }

  /* ---------- etl-u3-3 ---------- */
  var HEADERS = R`
const EXPECTED = { required: ["order_id", "qty", "amount"], optional: ["note"] };

// Three nights of the same export.
const MONDAY = ["order_id", "qty", "amount", "note"];
const TUESDAY = ["qty", "order_id", "amount", "coupon"];
const WEDNESDAY = ["order_id", "qty", "Amount "];

class SchemaError extends Error {
  constructor(report) {
    super("schema drift: missing " + report.missing.join(", "));
    this.name = "SchemaError";
    this.report = report;
  }
}
`;
  function u3File(body) {
    return HEADERS + "\n" + body + R`

for (const header of [MONDAY, TUESDAY, WEDNESDAY]) console.log(JSON.stringify(checkHeader(header, EXPECTED)));
`;
  }

  /* ---------- etl-u3-4 ---------- */
  var DUPES = R`
// Typed rows from one change export, with their line numbers.
const ROWS = [
  { line: 2, order_id: "ORD-1", updated_at: "2026-03-08T09:00:00Z", qty: 1 },
  { line: 3, order_id: "ORD-2", updated_at: "2026-03-08T09:05:00Z", qty: 4 },
  { line: 4, order_id: "ORD-1", updated_at: "2026-03-08T09:00:00Z", qty: 1 },  // an upload retried
  { line: 5, order_id: "ORD-2", updated_at: "2026-03-08T11:30:00Z", qty: 3 },  // ORD-2 corrected later
  { line: 6, order_id: "ORD-3", updated_at: "2026-03-08T10:00:00Z", qty: 2 },
  { line: 7, order_id: "ORD-3", updated_at: "2026-03-08T10:00:00Z", qty: 7 }   // same moment, different qty
];
`;
  function u4File(body) {
    return DUPES + "\n" + body + R`

console.log(JSON.stringify(dedupe(ROWS), null, 2));
`;
  }

  window.CODELAB.addUnit("etl", {
    id: "etl-u3",
    title: "Validate, quarantine, and never drop a row silently",
    icon: "🚧",
    blurb: "Bad rows are data too. Collect every reason a row fails, route it somewhere a person can see it, reject the whole batch when too much is wrong, notice when the source changes shape, and settle duplicates by evidence instead of file order.",
    cheat: [
      { h: "Row contracts", lang: "js", code: R`
qty:     { required: true, min: 1, max: 999 }
country: { required: false, pattern: "^[A-Z]{2}$" }
rowRules: [{ rule: "shipped_not_before_ordered", test: r => r.shipped === null || r.shipped >= r.ordered }]
// checkRow → [{ column: "qty", rule: "min" }, { column: "country", rule: "pattern" }]`,
        note: "Collect every problem. A missing value skips its column's other rules; row rules run only when every column passed." },
      { h: "Quarantine, then threshold", lang: "js", code: R`
// every record ends up in exactly one place
quarantine.push({ line: rec.line, raw: rec.raw, reasons: ["qty: min"] });
if (quarantine.length / records.length > maxRejectRate)
  throw new BatchRejected(quarantine.length, records.length, quarantine);`,
        note: "good + quarantine === input, always. Over the limit, load nothing: many bad rows at once means the source changed." },
      { h: "Check the header first", lang: "js", code: R`
checkHeader(["order_id", "qty", "Amount "], { required: ["order_id", "qty", "amount"] })
// { ok: false, missing: ["amount"], added: ["Amount"],
//   possibleRenames: [{ from: "amount", to: "Amount" }] }`,
        note: "Map by name, never by position. Added columns are reported, missing required ones stop the read, renames are flagged but never auto-mapped." },
      { h: "Duplicates by evidence", lang: "js", code: R`
// same content (ignoring line)        → { line, duplicateOf }
// same key, older updated_at          → { line, supersededBy }
// different content, tied latest time → conflicts: { order_id, lines }`,
        note: "File order isn't evidence. ISO timestamps in one format and zone compare correctly as strings." }
    ],
    lessons: [

      {
        id: "etl-u3-1",
        title: "Row contracts: every reason, not the first",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        brief: "Unit 2 made every value the right type. Types aren't the whole contract, though: `qty` can be a perfectly good integer and still be `0`, and a `shipped` day can be a real date that comes before the order was placed. Those are rules about the data, and a pipeline should write them down.\n\nA **row contract** lists rules per column, checked in this order:\n\n- `required`: the value can't be `null`. A missing value skips the column's other rules, since there's nothing to check.\n- `min` and `max`: inclusive bounds.\n- `oneOf`: the value must be in the list exactly, so case matters.\n- `pattern`: a regular expression the value must match. Anchor it with `^` and `$`, or `xORD-123456` sneaks past.\n- `maxLength`: for text.\n\nThen **row rules**, which compare fields: `shipped` not before `ordered`, a refund with a positive amount. They run only when every column passed, because a cross-field rule assumes its fields are valid. ISO days compare correctly as plain strings, one more payoff from Unit 2.\n\nThe important part: **collect every problem, not just the first.** An importer that stops at the first failure makes whoever fixes the source rerun it once per problem. `checkRow(row, contract)` returns every `{ column, rule }` in contract order, with row rules reported under the column `\"(row)\"`, and `[]` for a clean row.",
        steps: [
          { text: "A clean row has no problems, and a row with three problems reports all three, in contract order.",
            test: R`
T.eq(checkRow(ORDER, CONTRACT), [], 'A clean row has no problems');
var three = Object.assign({}, ORDER, { qty: 0, country: 'usa', note: new Array(251).join('x') });
T.eq(checkRow(three, CONTRACT), [{ column: 'qty', rule: 'min' }, { column: 'country', rule: 'pattern' }, { column: 'note', rule: 'maxLength' }], 'Three problems give three entries in contract column order');
` },
          { text: "`required` and bounds: a missing required value reports only `required`, a missing optional one is fine, and `min`/`max` are inclusive.",
            test: R`
T.eq(checkRow(Object.assign({}, ORDER, { order_id: null }), CONTRACT), [{ column: 'order_id', rule: 'required' }], 'A missing required value reports required and nothing else for that column');
T.eq(checkRow(Object.assign({}, ORDER, { country: null, shipped: null }), CONTRACT), [], 'Missing optional values are fine');
T.eq(checkRow(Object.assign({}, ORDER, { amount_cents: 0, qty: 999 }), CONTRACT), [], 'Bounds are inclusive: 0 cents and 999 units are allowed');
T.eq(checkRow(Object.assign({}, ORDER, { qty: 1000 }), CONTRACT), [{ column: 'qty', rule: 'max' }], 'Above max is a max problem');
` },
          { text: "`oneOf` is exact, and `pattern` must match the whole value.",
            test: R`
T.eq(checkRow(Object.assign({}, ORDER, { status_code: 'Paid' }), CONTRACT), [{ column: 'status_code', rule: 'oneOf' }], 'oneOf is case sensitive');
T.eq(checkRow(Object.assign({}, ORDER, { order_id: 'ORD-12345' }), CONTRACT), [{ column: 'order_id', rule: 'pattern' }], 'Five digits do not match ORD- plus six digits');
T.eq(checkRow(Object.assign({}, ORDER, { order_id: 'xORD-123456' }), CONTRACT), [{ column: 'order_id', rule: 'pattern' }], 'The pattern is anchored, so a prefix fails');
T.eq(checkRow(Object.assign({}, ORDER, { status_code: 'shipped', qty: 999 }), CONTRACT), [], 'A value in the list passes');
` },
          { text: "Row rules compare fields, run only when every column passed, and report under `(row)`.",
            test: R`
T.eq(checkRow(Object.assign({}, ORDER, { shipped: '2026-03-07' }), CONTRACT), [{ column: '(row)', rule: 'shipped_not_before_ordered' }], 'Shipped the day before it was ordered breaks a row rule');
T.eq(checkRow(Object.assign({}, ORDER, { status_code: 'refunded', amount_cents: 0 }), CONTRACT), [{ column: '(row)', rule: 'refund_has_amount' }], 'A refund with no amount breaks the other row rule');
T.eq(checkRow(Object.assign({}, ORDER, { qty: 0, shipped: '2026-03-07' }), CONTRACT), [{ column: 'qty', rule: 'min' }], 'With a column problem present the row rules do not run');
T.eq(checkRow(Object.assign({}, ORDER, { shipped: '2026-03-08' }), CONTRACT), [], 'Shipping the same day is fine');
` }
        ],
        files: [
          { name: "script.js", content: u1File(R`
function checkRow(row, contract) {
  // Report the first thing wrong and stop.
  for (const column of Object.keys(contract.columns)) {
    const c = contract.columns[column], v = row[column];
    if (c.required && v == null) return [{ column: column, rule: "required" }];
    if (c.min != null && v < c.min) return [{ column: column, rule: "min" }];
  }
  return [];
}
`) }
        ],
        hints: [
          "Keep a `problems` array and push `{ column: column, rule: \"min\" }` (in that key order) instead of returning.",
          "For each column: if the value is `null` or `undefined`, push `required` only when `c.required`, then `continue`. Otherwise check min, max, oneOf, pattern (`new RegExp(c.pattern).test(String(v))`) and maxLength, in that order.",
          "After the loop, only when `problems.length === 0`, run each of `contract.rowRules` and push `{ column: \"(row)\", rule: r.rule }` when `r.test(row)` is false."
        ],
        solution: {
          "script.js": u1File(CHECK_ROW)
        }
      },

      {
        id: "etl-u3-2",
        title: "Quarantine: the row, its line, and why",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        brief: "Unit 1's `parseJSONL` refused to let one bad line sink a file. This lesson does the same for the typing and checking stage, and adds the part that keeps it honest.\n\n**Quarantine, don't drop.** A row that fails typing or its contract goes to a quarantine list with everything someone needs to fix it: the **line number**, the **raw values exactly as they arrived**, and **every reason**. Dropping it silently means a load of 99,000 rows looks identical to a load of 100,000, and nobody finds out until a report is wrong. The invariant to hold on every batch: `good.length + quarantine.length === input.length`.\n\n**Then decide whether the batch is acceptable.** One bad row in a hundred is a bad row. Thirty in a hundred is a changed source system, and loading the other seventy as if nothing happened is how a dashboard goes quietly wrong. So `runBatch` has a limit, `maxRejectRate` (default `0.02`). If the rejected share is **over** it, throw `BatchRejected` and load nothing. The error carries `rejected`, `total` and the `quarantine`, because the person paged at 3 a.m. needs them.\n\n`typeOrder(raw)` (which throws a `TypeError` naming the column), `checkRow`, `CONTRACT` and `BatchRejected` are in the file. Write `runBatch(records, opts)`. Each record is `{ line, raw }`. Each quarantine entry is `{ line, raw, reasons }`, where `reasons` holds the type error's message, or `\"column: rule\"` for each contract problem. An empty batch is not an error.",
        steps: [
          { text: "The nightly file: 99 good rows, and line 17 quarantined with its raw values and the type error. Nothing vanishes.",
            test: R`
var out = runBatch(NIGHTLY);
T.eq(out.good.length + out.quarantine.length, NIGHTLY.length, 'Every input row is either good or quarantined. Nothing vanishes');
T.eq(out.quarantine.length, 1, 'One bad row in the nightly file');
var q = out.quarantine[0];
T.eq(q.line, 17, 'The quarantined entry keeps its line number');
T.eq(q.raw, NIGHTLY[15].raw, 'It keeps the raw values exactly as they arrived');
T.expect(Array.isArray(q.reasons) && q.reasons.length === 1 && /^qty\b/.test(q.reasons[0]), 'The reason is the type error naming qty. Got: ' + JSON.stringify(q.reasons));
` },
          { text: "Contract failures are quarantined too, with every reason written as `column: rule`.",
            test: R`
var out = runBatch(MESSY, { maxRejectRate: 0.05 });
T.eq(out.quarantine.map(function (q) { return q.line; }), [5, 40, 88], 'Contract failures are quarantined as well as type errors, in file order');
T.eq(out.quarantine[0].reasons, ['qty: min'], 'A zero quantity is a contract problem');
T.eq(out.quarantine[1].reasons, ['status_code: oneOf', 'country: pattern'], 'Every reason for a row, each written as column: rule');
T.expect(/^ordered\b/.test(out.quarantine[2].reasons[0]), 'A day in the wrong format fails at typing and says ordered');
T.eq(out.good.length, 97, 'The other 97 rows are good');
T.expect(out.good.every(function (r) { return typeof r.qty === 'number'; }), 'Good rows are the typed rows');
` },
          { text: "Over the default 2% limit, the batch throws `BatchRejected` carrying the counts and the quarantine. Exactly 2% still loads.",
            test: R`
var err = null;
try { runBatch(MESSY); } catch (e) { err = e; }
T.expect(err !== null && err.name === 'BatchRejected', 'Three percent bad is over the default two percent. Throw BatchRejected and load nothing');
T.eq([err.rejected, err.total, err.quarantine.length], [3, 100, 3], 'The error carries the counts and the quarantine so someone can act on it');
var two = makeRecords(100, { 9: { qty: 'x' }, 10: { qty: 'y' } });
T.eq(runBatch(two).quarantine.length, 2, 'Exactly two percent is still within the limit');
` },
          { text: "The limit is configurable: zero rejects any bad row, a clean batch passes it, and an empty batch is not an error.",
            test: R`
var err = null;
try { runBatch(NIGHTLY, { maxRejectRate: 0 }); } catch (e) { err = e; }
T.expect(err !== null && err.name === 'BatchRejected', 'A limit of zero rejects a batch with any bad row');
T.eq(runBatch(makeRecords(10, {}), { maxRejectRate: 0 }).good.length, 10, 'A clean batch passes even a zero limit');
T.eq(runBatch([]), { good: [], quarantine: [] }, 'An empty batch is not an error');
` }
        ],
        files: [
          { name: "script.js", content: u2File(R`
function runBatch(records, opts) {
  const good = [];
  for (const rec of records) {
    try { good.push(typeOrder(rec.raw)); } catch (e) { /* skip the bad ones */ }
  }
  return { good: good, quarantine: [] };
}
`) }
        ],
        hints: [
          "Read the limit with a default: `const maxRejectRate = opts && opts.maxRejectRate != null ? opts.maxRejectRate : 0.02;` (a limit of `0` is falsy, so don't use `||`).",
          "For each record: try `typeOrder(rec.raw)`. If it throws, quarantine `{ line, raw, reasons: [e.message] }` and move on. Otherwise run `checkRow(row, CONTRACT)`: problems become `reasons` via `p.column + \": \" + p.rule`; no problems means the row is good.",
          "After the loop: if there were records and `quarantine.length / records.length > maxRejectRate`, `throw new BatchRejected(quarantine.length, records.length, quarantine)`."
        ],
        solution: {
          "script.js": u2File(R`
function runBatch(records, opts) {
  const maxRejectRate = opts && opts.maxRejectRate != null ? opts.maxRejectRate : 0.02;
  const good = [], quarantine = [];
  for (const rec of records) {
    let row;
    try { row = typeOrder(rec.raw); }
    catch (e) { quarantine.push({ line: rec.line, raw: rec.raw, reasons: [e.message] }); continue; }
    const problems = checkRow(row, CONTRACT);
    if (problems.length) quarantine.push({ line: rec.line, raw: rec.raw, reasons: problems.map(p => p.column + ": " + p.rule) });
    else good.push(row);
  }
  if (records.length && quarantine.length / records.length > maxRejectRate)
    throw new BatchRejected(quarantine.length, records.length, quarantine);  // load nothing
  return { good: good, quarantine: quarantine };
}
`)
        }
      },

      {
        id: "etl-u3-3",
        title: "Schema drift: new columns, missing columns, renamed headers",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        brief: "The export that worked for a year changes on a Tuesday: a column gets added, one gets renamed, one disappears. A reader that maps fields by position loads amounts into the quantity column. One that maps by name but never checks loads empty values and reports success. **Check the header before reading a single row.**\n\n- **Columns in a different order** are fine. Map by name.\n- **An added column** is tolerated and reported. It might be useful, but the pipeline shouldn't start loading it just because it showed up.\n- **A missing required column** stops the read with a `SchemaError`, before any row. A missing optional column is fine.\n- **A rename looks like one missing plus one added**, and that's how it's reported. When the two names differ only in case, spaces or punctuation (`amount` and `Amount`), also add a `possibleRenames` hint. Don't map it automatically: a person should confirm that the column still means the same thing.\n- **A duplicate header name** is an error, since there's no way to know which one is meant.\n\nHeader names are trimmed before comparing. Write `checkHeader(header, expected)`, returning `{ ok, missing, added, possibleRenames }`, with `missing` in expected order and `added` in header order. Then write `readWithHeader(records, expected)`. It takes the parsed CSV records (the header first) and returns `{ rows, added }`, each row keyed by the expected columns in expected order, with `\"\"` for an absent optional column. It throws a `SchemaError` on drift, and an error naming the line when a record has the wrong number of fields (record `i` is line `i + 1`).",
        steps: [
          { text: "The same columns in a different order are fine.",
            test: R`
T.eq(checkHeader(['qty', 'order_id', 'amount'], EXPECTED), { ok: true, missing: [], added: [], possibleRenames: [] }, 'Order does not matter and a missing optional column is fine');
T.eq(checkHeader(MONDAY, EXPECTED), { ok: true, missing: [], added: [], possibleRenames: [] }, 'Monday matches exactly');
` },
          { text: "Added columns are reported but tolerated, and a missing required column makes the header not ok.",
            test: R`
T.eq(checkHeader(TUESDAY, EXPECTED), { ok: true, missing: [], added: ['coupon'], possibleRenames: [] }, 'Tuesday added coupon: reported and tolerated');
T.eq(checkHeader(['order_id', 'qty'], EXPECTED), { ok: false, missing: ['amount'], added: [], possibleRenames: [] }, 'A missing required column is not ok');
T.eq(checkHeader(['note', 'x', 'y'], EXPECTED).missing, ['order_id', 'qty', 'amount'], 'Missing columns are listed in expected order');
` },
          { text: "A rename is missing plus added, with a hint only when the names differ by case, spaces or punctuation. Duplicate names throw.",
            test: R`
T.eq(checkHeader(WEDNESDAY, EXPECTED), { ok: false, missing: ['amount'], added: ['Amount'], possibleRenames: [{ from: 'amount', to: 'Amount' }] }, 'Wednesday renamed amount. Trim the header, report it as missing plus added and flag the likely rename');
T.eq(checkHeader(['order_id', 'qty', 'amt'], EXPECTED), { ok: false, missing: ['amount'], added: ['amt'], possibleRenames: [] }, 'amt might be amount, but that is a guess. No hint');
var m = null; try { checkHeader(['order_id', 'qty', 'qty', 'amount'], EXPECTED); } catch (e) { m = String(e.message); }
T.expect(m !== null && /duplicate/i.test(m), 'A duplicate header name must throw and say duplicate. Got: ' + m);
` },
          { text: "`readWithHeader` maps rows by name, stops on drift with a `SchemaError`, and names the line of a record with the wrong field count.",
            test: R`
var out = readWithHeader([['qty', 'order_id', 'amount', 'coupon'], ['3', 'ORD-1', '1.00', 'X'], ['5', 'ORD-2', '2.50', '']], EXPECTED);
T.eq(out.rows, [{ order_id: 'ORD-1', qty: '3', amount: '1.00', note: '' }, { order_id: 'ORD-2', qty: '5', amount: '2.50', note: '' }], 'Rows are keyed by name in expected order. An absent optional column is empty and the added column is left out');
T.eq(out.added, ['coupon'], 'The added column is reported');
var err = null; try { readWithHeader([['order_id', 'qty'], ['ORD-1', '3']], EXPECTED); } catch (e) { err = e; }
T.expect(err !== null && err.name === 'SchemaError' && /amount/.test(err.message), 'A missing required column stops the read with a SchemaError naming it');
var m = null; try { readWithHeader([['order_id', 'qty', 'amount'], ['ORD-1', '3', '1.00'], ['ORD-2', '5']], EXPECTED); } catch (e) { m = String(e.message); }
T.expect(m !== null && /line 3\b/.test(m), 'A record with the wrong number of fields is an error naming its line. Got: ' + m);
` }
        ],
        files: [
          { name: "script.js", content: u3File(R`
function checkHeader(header, expected) {
  // The export never changes. Right?
  return { ok: true, missing: [], added: [], possibleRenames: [] };
}

function readWithHeader(records, expected) {
  const header = records[0];
  const rows = records.slice(1).map(rec => {
    const row = {};
    header.forEach((h, i) => { row[h] = rec[i]; });
    return row;
  });
  return { rows: rows, added: [] };
}
`) }
        ],
        hints: [
          "`checkHeader`: trim every name, then walk them with a `Set` and throw on a name you've already seen. `missing` is the required names not in the set; `added` is the header names in neither `required` nor `optional`.",
          "For `possibleRenames`, compare a normalised form: `h.toLowerCase().replace(/[^a-z0-9]/g, \"\")`. For each missing name, find an added name with the same normalised form and push `{ from: missing, to: added }`.",
          "`readWithHeader`: run `checkHeader` on the trimmed header and `throw new SchemaError(report)` when it isn't ok. For each later record, check `rec.length` against the header length (`\"line \" + (i + 1)`), then build the row from the expected columns with `header.indexOf(column)`, using `\"\"` when it's -1."
        ],
        solution: {
          "script.js": u3File(R`
function normalize(h) { return h.toLowerCase().replace(/[^a-z0-9]/g, ""); }

function checkHeader(header, expected) {
  const names = header.map(h => String(h).trim());
  const seen = new Set();
  for (const h of names) {
    if (seen.has(h)) throw new Error("duplicate column in header: " + h);
    seen.add(h);
  }
  const known = expected.required.concat(expected.optional || []);
  const missing = expected.required.filter(c => !seen.has(c));
  const added = names.filter(h => known.indexOf(h) === -1);
  const possibleRenames = [];
  for (const m of missing) {
    const match = added.find(a => normalize(a) === normalize(m));
    if (match) possibleRenames.push({ from: m, to: match });  // a hint, never a mapping
  }
  return { ok: missing.length === 0, missing: missing, added: added, possibleRenames: possibleRenames };
}

function readWithHeader(records, expected) {
  const header = records[0].map(h => String(h).trim());
  const report = checkHeader(header, expected);
  if (!report.ok) throw new SchemaError(report);  // before a single row
  const columns = expected.required.concat(expected.optional || []);
  const rows = [];
  for (let i = 1; i < records.length; i++) {
    const rec = records[i];
    if (rec.length !== header.length)
      throw new Error("line " + (i + 1) + ": expected " + header.length + " fields, got " + rec.length);
    const row = {};
    for (const c of columns) {
      const at = header.indexOf(c);
      row[c] = at === -1 ? "" : rec[at];
    }
    rows.push(row);
  }
  return { rows: rows, added: report.added };
}
`)
        }
      },

      {
        id: "etl-u3-4",
        title: "Duplicates inside one file",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        brief: "Exports repeat rows. A retried upload appends the same batch twice, and a change export sends every version of an order that changed during the day. Loading all of them double-counts. Loading \"the last one in the file\" trusts file order, and nothing guarantees it.\n\nThree cases:\n\n- **Exact copies.** Every field equal, ignoring the line number. Keep the first occurrence and report each copy as `{ line, duplicateOf }`.\n- **Versions of the same key.** Same `order_id`, different content. Keep the one with the latest `updated_at` and report the others as `{ line, supersededBy }`. ISO timestamps in one format and one zone (`2026-03-08T11:30:00Z`) sort correctly as plain strings.\n- **A tie at the top.** Two different versions share the latest `updated_at`. Nothing in the data says which is right, so **neither loads**: every distinct version of that key goes to `conflicts` as `{ order_id, lines }`. If a later version exists, the tie doesn't matter, and the tied rows are simply superseded.\n\nWrite `dedupe(rows)` returning `{ rows, dropped, conflicts }`. Kept rows come in order of each key's first appearance, `dropped` is sorted by line, and the input rows aren't modified. The accounting rule from quarantine applies here too: every input line is kept, dropped with a reason, or in a conflict.",
        steps: [
          { text: "An exact copy collapses to the first occurrence and is reported as a duplicate.",
            test: R`
var out = dedupe([ROWS[0], ROWS[2]]);
T.eq(out.rows, [ROWS[0]], 'An exact copy collapses to the first occurrence');
T.eq(out.dropped, [{ line: 4, duplicateOf: 2 }], 'The copy is reported with the line it duplicates');
T.eq(out.conflicts, [], 'A copy is not a conflict');
` },
          { text: "The latest `updated_at` wins, even when it comes first in the file.",
            test: R`
T.eq(dedupe([ROWS[1], ROWS[3]]).rows, [ROWS[3]], 'The version with the later updated_at is kept');
var reversed = dedupe([ROWS[3], ROWS[1]]);
T.eq(reversed.rows, [ROWS[3]], 'File order is not evidence: the later updated_at wins even when it comes first');
T.eq(reversed.dropped, [{ line: 3, supersededBy: 5 }], 'The older version is reported as superseded by the kept line');
` },
          { text: "Different versions tied at the latest time are a conflict, unless a later version settles it.",
            test: R`
var out = dedupe([ROWS[4], ROWS[5]]);
T.eq(out.rows, [], 'Two different versions with the same updated_at cannot be decided, so neither is loaded');
T.eq(out.conflicts, [{ order_id: 'ORD-3', lines: [6, 7] }], 'Both lines go to conflicts for a person to resolve');
var later = { line: 8, order_id: 'ORD-3', updated_at: '2026-03-08T12:00:00Z', qty: 9 };
var settled = dedupe([ROWS[4], ROWS[5], later]);
T.eq([settled.rows, settled.conflicts], [[later], []], 'A tie among older versions does not matter once a later version exists');
T.eq(settled.dropped, [{ line: 6, supersededBy: 8 }, { line: 7, supersededBy: 8 }], 'The tied older versions are simply superseded');
` },
          { text: "The whole export: every line accounted for, results in the right order, and the input untouched.",
            test: R`
var before = JSON.stringify(ROWS);
var out = dedupe(ROWS);
T.eq(out.rows.map(function (r) { return r.line; }), [2, 5], 'Kept rows in order of first appearance: ORD-1 from line 2 and ORD-2 from line 5');
T.eq(out.dropped, [{ line: 3, supersededBy: 5 }, { line: 4, duplicateOf: 2 }], 'Dropped rows sorted by line');
T.eq(out.conflicts, [{ order_id: 'ORD-3', lines: [6, 7] }], 'ORD-3 is a conflict');
var accounted = out.rows.length + out.dropped.length + out.conflicts.reduce(function (n, c) { return n + c.lines.length; }, 0);
T.eq(accounted, ROWS.length, 'Every input line is kept or dropped with a reason or in a conflict');
T.eq(JSON.stringify(ROWS), before, 'dedupe must not modify the rows it was given');
` }
        ],
        files: [
          { name: "script.js", content: u4File(R`
function dedupe(rows) {
  // Last one wins: a later row in the file replaces an earlier one.
  const byKey = new Map();
  for (const r of rows) byKey.set(r.order_id, r);
  return { rows: [...byKey.values()], dropped: [], conflicts: [] };
}
`) }
        ],
        hints: [
          "Group first: a `Map` from `order_id` to that key's rows in file order. A `Map` remembers insertion order, which gives you \"order of first appearance\" for free.",
          "Within a group, drop exact copies: compare rows with `line` removed (copy with `Object.assign({}, r)`, `delete copy.line`, then `JSON.stringify`). Keep the distinct ones.",
          "Find the latest `updated_at` among the distinct versions. More than one version at that time: push `{ order_id, lines }` for all distinct versions. Exactly one: keep it, and push `{ line, supersededBy }` for the rest.",
          "Sort `dropped` by `line` at the end."
        ],
        solution: {
          "script.js": u4File(R`
function sameContent(a, b) {
  const strip = r => { const c = Object.assign({}, r); delete c.line; return JSON.stringify(c); };
  return strip(a) === strip(b);
}

function dedupe(rows) {
  const byKey = new Map();  // order_id -> versions in file order
  for (const r of rows) {
    if (!byKey.has(r.order_id)) byKey.set(r.order_id, []);
    byKey.get(r.order_id).push(r);
  }
  const kept = [], dropped = [], conflicts = [];
  for (const [key, versions] of byKey) {
    const distinct = [];
    for (const v of versions) {
      const twin = distinct.find(d => sameContent(d, v));
      if (twin) dropped.push({ line: v.line, duplicateOf: twin.line });
      else distinct.push(v);
    }
    const latest = distinct.reduce((max, v) => (v.updated_at > max ? v.updated_at : max), "");
    const top = distinct.filter(v => v.updated_at === latest);
    if (top.length > 1) {  // no evidence for either: a person decides
      conflicts.push({ order_id: key, lines: distinct.map(v => v.line) });
      continue;
    }
    kept.push(top[0]);
    for (const v of distinct) if (v !== top[0]) dropped.push({ line: v.line, supersededBy: top[0].line });
  }
  dropped.sort((a, b) => a.line - b.line);
  return { rows: kept, dropped: dropped, conflicts: conflicts };
}
`)
        }
      },

      {
        id: "etl-quiz-3",
        title: "Unit 3 quiz: Data quality",
        kind: "quiz", xp: 10,
        brief: "Contracts, quarantine and thresholds, schema drift and duplicates. 80% to pass.",
        questions: [
          { q: "Why should `checkRow` collect every problem in a row instead of returning at the first one?",
            choices: ["Returning early is slower, because the function has to read the rest of the row anyway", "Whoever fixes the source sees every problem at once instead of one per rerun", "Databases require a complete list of violations before they will accept any insert at all", "The first problem is usually a false alarm caused by the one right after it"],
            answer: 1, explain: "A report of one problem per run turns a ten-minute fix into ten reruns. Collecting everything costs almost nothing, since the row is already in memory. Databases don't need the list, and problems aren't usually false alarms." },
          { q: "A nightly load skips rows it can't parse and reports success. What's the core problem?",
            choices: ["Skipping rows is slower than quarantining them, since each skip still needs its own log line written", "The load should instead crash on the first bad row, so the whole file gets fixed by hand", "Data disappears silently: nobody can tell 99,000 loaded rows from 100,000", "Parse errors ought to be retried, because most of them turn out to be transient"],
            answer: 2, explain: "A silent skip makes a partial load indistinguishable from a complete one. Quarantine keeps the line, the raw values and the reasons, so good + quarantine always equals the input. Crashing on one bad row is the opposite mistake, and parse errors don't fix themselves on retry." },
          { q: "What does a batch-level limit like `maxRejectRate: 0.02` protect against?",
            choices: ["A source change that breaks many rows at once being loaded like any normal night", "Quarantine storage filling up when too many bad rows arrive during a single nightly batch", "Individual bad rows, which should stop the whole batch as soon as one is found", "Slow batches, since quarantining a row takes longer than loading it"],
            answer: 0, explain: "A few bad rows are normal and belong in quarantine. A lot of bad rows at once usually means the source changed, and loading the survivors would publish a skewed picture. Over the limit, load nothing and hand someone the counts and the quarantine." },
          { q: "Wednesday's export has a column `Amount ` where Monday's had `amount`. What should the reader do?",
            choices: ["Map it automatically, since names differing only in capital letters and spaces always mean the same column", "Ignore the unexpected column and load the rows with amount left empty", "Load the rows as usual, since added columns are tolerated by the reader", "Stop before reading any rows, report the drift and flag a possible rename"],
            answer: 3, explain: "amount is a required column, and it's missing, so nothing should load. The near-identical added name is worth flagging as a likely rename, but mapping it automatically assumes the meaning didn't change too. Loading with empty amounts or treating it as a harmless addition hides the drift." },
          { q: "Two versions of ORD-3 have the same `updated_at` but a different `qty`. Which should load?",
            choices: ["The later line in the file, since exports are usually written in the order the changes happened", "Neither: both go to conflicts, because nothing in the data says which is right", "The one with the larger qty, since corrections usually increase a quantity", "Both, and let the warehouse's unique key reject whichever one arrives second"],
            answer: 1, explain: "File order isn't guaranteed evidence of anything, and neither is the size of a value. With a tie at the latest timestamp there's no basis for choosing, so a person resolves it. Letting a unique key pick means the choice is made by load order, which is the same guess in disguise." },
          { q: "Why does comparing `updated_at` values as plain strings work in `dedupe`?",
            choices: ["JavaScript converts both strings to Date objects when they're compared with `>`", "It doesn't: timestamps always have to be parsed into numbers before comparing", "String comparison ignores time zones, so the offsets don't affect the result", "ISO timestamps in one fixed format and zone sort lexicographically in time order"],
            answer: 3, explain: "In `2026-03-08T11:30:00Z` the fields run from most to least significant, all zero-padded, so character-by-character comparison matches time order. That only holds when every value uses the same format and zone, which is exactly what the typing step guarantees. `>` on two strings compares them as strings." }
        ]
      }
    ]
  });
})();
