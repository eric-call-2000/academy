/* Data Pipelines & ETL — Unit 2: Types on purpose */
(function () {
  /* Code is written as String.raw templates, so backslashes reach the
     learner's editor and the grader exactly as they appear here. Nothing
     inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  /* ---------- solutions, reused by later lessons ---------- */
  var TO_ID_INT = R`
function toId(s) {
  const v = String(s).trim();
  if (v === "") throw new TypeError("empty id");
  return v;  // never Number(): zeros, length and letters all survive
}

function toInt(s) {
  const v = String(s).trim();
  if (!/^-?\d+$/.test(v)) throw new TypeError("not an integer: " + JSON.stringify(s));
  const n = Number(v);
  if (!Number.isSafeInteger(n)) throw new TypeError("integer out of safe range: " + JSON.stringify(s));
  return n;
}
`;

  var TYPE_ROW = R`
function typeRow(raw, spec) {
  const out = {};
  for (const column of Object.keys(spec)) {
    const value = raw[column];
    if (value === undefined) throw new TypeError(column + ": missing from the row");
    try { out[column] = spec[column] === "id" ? toId(value) : toInt(value); }
    catch (e) { throw new TypeError(column + ": " + e.message); }
  }
  return out;
}
`;

  var PARSE_AMOUNT = R`
function parseAmount(str, locale) {
  const group = locale === "de" ? "." : ",";
  const decimal = locale === "de" ? "," : ".";
  let s = String(str).trim();
  let negative = false;
  if (s[0] === "(" && s[s.length - 1] === ")") { negative = true; s = s.slice(1, -1).trim(); }
  if (s[0] === "-") { negative = true; s = s.slice(1).trim(); }       // -$5.00
  s = s.replace(/^[$€£]\s*/, "").replace(/\s*[$€£]$/, "");
  if (s[0] === "-") { negative = true; s = s.slice(1); }              // $-5.00

  const g = group === "." ? "\\." : ",";
  const d = decimal === "." ? "\\." : ",";
  // Either properly grouped thousands or plain digits, then at most two decimals.
  const m = new RegExp("^(\\d{1,3}(?:" + g + "\\d{3})+|\\d+)(?:" + d + "(\\d{1,2}))?$").exec(s);
  if (!m) throw new TypeError("not a " + locale + " amount: " + JSON.stringify(str));

  const cents = Number(m[1].split(group).join("")) * 100 + Number((m[2] || "").padEnd(2, "0"));
  if (!Number.isSafeInteger(cents)) throw new TypeError("amount too large: " + JSON.stringify(str));
  return negative ? -cents : cents;
}
`;

  var PARSE_DAY = R`
function isLeap(y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; }
function daysIn(y, month) { return [31, isLeap(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]; }
function pad2(n) { return String(n).padStart(2, "0"); }

function parseDay(str, format) {
  let m = null, year, month, day;
  if (format === "YYYY-MM-DD") {
    m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(str);  // ISO is exact: padded, no time
    if (m) { year = m[1]; month = +m[2]; day = +m[3]; }
  } else if (format === "DD/MM/YYYY" || format === "MM/DD/YYYY" || format === "DD.MM.YYYY") {
    const sep = format[2] === "." ? "\\." : "/";
    m = new RegExp("^(\\d{1,2})" + sep + "(\\d{1,2})" + sep + "(\\d{4})$").exec(str);
    if (m) {
      year = m[3];
      if (format[0] === "M") { month = +m[1]; day = +m[2]; } else { day = +m[1]; month = +m[2]; }
    }
  } else {
    throw new TypeError("unknown date format: " + format);
  }
  if (!m || month < 1 || month > 12 || day < 1 || day > daysIn(+year, month))
    throw new TypeError("not a " + format + " date: " + JSON.stringify(str));
  return year + "-" + pad2(month) + "-" + pad2(day);
}
`;

  var DAY_COLUMN = R`
function detectDayOrder(values) {
  let firstIsDay = false, secondIsDay = false;
  for (const v of values) {
    const m = /^(\d{1,2})\/(\d{1,2})\/\d{4}$/.exec(v);
    if (!m) continue;
    if (+m[1] > 12) firstIsDay = true;
    if (+m[2] > 12) secondIsDay = true;
  }
  if (firstIsDay && secondIsDay) return "inconsistent";
  if (firstIsDay) return "DD/MM";
  if (secondIsDay) return "MM/DD";
  return "ambiguous";
}

function parseDayColumn(values, hint) {
  let order = detectDayOrder(values);
  if (order === "inconsistent") throw new TypeError("inconsistent day order: the column mixes DD/MM and MM/DD");
  if (order === "ambiguous") {
    if (!hint) throw new TypeError("ambiguous day order: every value reads both ways, so this source needs a hint");
    order = hint;
  } else if (hint && hint !== order) {
    throw new TypeError("hint " + hint + " contradicts the data, which says " + order);
  }
  const format = order === "DD/MM" ? "DD/MM/YYYY" : "MM/DD/YYYY";
  return { order: order, days: values.map(v => parseDay(v, format)) };
}
`;

  var CONVERT = R`
function convert(value, col) {
  switch (col.type) {
    case "id": return toId(value);
    case "text": return value;
    case "int": return toInt(value);
    case "amount": return parseAmount(value, col.locale);
    case "day": return parseDay(value, col.format);
    default: throw new TypeError("unknown column type " + col.type);
  }
}
`;

  /* ---------- etl-u2-1 ---------- */
  var ACCOUNTS = R`
// Rows from a customer export, still strings, the way parseCSV left them.
const ROWS = [
  { account: "12345678901234567", zip: "07920", qty: "3" },
  { account: "00000000000000451", zip: "94103", qty: "12" },
  { account: "9007199254740993", zip: "02134", qty: "1e3" }
];
const SPEC = { account: "id", zip: "id", qty: "int" };
`;
  function u1File(body) {
    return ACCOUNTS + "\n" + body + R`

for (const row of ROWS) {
  try { console.log(typeRow(row, SPEC)); } catch (e) { console.log("rejected:", e.message); }
}
`;
  }

  /* ---------- etl-u2-2 ---------- */
  var AMOUNTS = R`
// Amounts from two regional exports. Money is stored as integer cents: 1234.50 is 123450.
const US = ["$1,234.50", "12", "0.5", "-3.07", "(12.50)"];
const DE = ["1.234,50", "12,5 €", "€ 0,07", "(1.234,00)"];
`;
  function u2File(body) {
    return AMOUNTS + "\n" + body + R`

for (const s of US) { try { console.log(s, parseAmount(s, "en")); } catch (e) { console.log(s, e.message); } }
for (const s of DE) { try { console.log(s, parseAmount(s, "de")); } catch (e) { console.log(s, e.message); } }
`;
  }

  /* ---------- etl-u2-3 ---------- */
  var DATES = R`
// Order dates from four systems. Every one of these strings means March 8th, 2026.
const DATES = [
  ["2026-03-08", "YYYY-MM-DD"],
  ["08/03/2026", "DD/MM/YYYY"],
  ["03/08/2026", "MM/DD/YYYY"],
  ["08.03.2026", "DD.MM.YYYY"]
];
`;
  function u3File(body) {
    return DATES + "\n" + body + R`

for (const [s, f] of DATES) {
  try { console.log(s, f, "->", parseDay(s, f)); } catch (e) { console.log(s, f, "->", e.message); }
}
`;
  }

  /* ---------- etl-u2-4 ---------- */
  var CUSTOMER = R`
// A customer export. Each source system spells "no value" its own way.
const SPEC = {
  customer_id: { type: "id" },
  surname:     { type: "text" },
  qty:         { type: "int", nullable: true },
  total:       { type: "amount", locale: "en", nullable: true },
  shipped:     { type: "day", format: "DD/MM/YYYY", nullable: true, nulls: ["", "00/00/0000"] }
};
const ROW = { customer_id: "07920", surname: "NULL", qty: "N/A", total: "  ", shipped: "00/00/0000" };

// ---- the converters from this unit ----
` + TO_ID_INT + "\n" + PARSE_AMOUNT + "\n" + PARSE_DAY + "\n" + CONVERT;
  function u4File(body) {
    return CUSTOMER + "\n" + body + R`

try { console.log(applySpec(ROW, SPEC)); } catch (e) { console.log("rejected:", e.message); }
`;
  }

  window.CODELAB.addUnit("etl", {
    id: "etl-u2",
    title: "Types on purpose",
    icon: "🔢",
    blurb: "Keep every value a string until you decide what it is. Ids that aren't numbers, money in integer cents whatever the locale, calendar days that never become instants, and the half-dozen ways a file says nothing.",
    cheat: [
      { h: "Ids are text, ints are strict", lang: "js", code: R`
toId(" 07920 ")        // "07920"  never Number()
toInt("42")            // 42
toInt("1e3")           // TypeError: not an integer
toInt("9007199254740993")  // TypeError: past Number.MAX_SAFE_INTEGER`,
        note: "Declare each column's type in a spec; don't let anything guess. Errors start with the column name." },
      { h: "Money: integer cents", lang: "js", code: R`
parseAmount("$1,234.50", "en")   // 123450
parseAmount("1.234,50", "de")    // 123450
parseAmount("(12.50)", "en")     // -1250
parseAmount("1,234.567", "en")   // TypeError: not an en amount`,
        note: "-3.07 * 100 is -306.99999999999997. Build cents from the digit strings. Groups of exactly three, at most two decimals, otherwise throw." },
      { h: "A day is a string, not a Date", lang: "js", code: R`
new Date("2026-03-08")        // midnight UTC  (March 7th in Chicago)
new Date("2026-03-08T00:00")  // midnight local
parseDay("8/3/2026", "DD/MM/YYYY")  // "2026-03-08", built from the parts`,
        note: "Leap year: divisible by 4, except centuries, except every 400 years. ISO days are exact: 2026-3-8 is not one." },
      { h: "DD/MM or MM/DD: ask the column", lang: "js", code: R`
detectDayOrder(["03/08/2026", "25/08/2026"])  // "DD/MM"  (25 can only be a day)
detectDayOrder(["03/08/2026", "04/09/2026"])  // "ambiguous": require a hint
detectDayOrder(["13/01/2026", "01/13/2026"])  // "inconsistent": mixed formats`,
        note: "Never guess an ambiguous column. A hint that contradicts the data is an error, not a tie-breaker." },
      { h: "Missing, per column", lang: "js", code: R`
const DEFAULT_NULLS = ["", "NULL", "null", "N/A", "n/a", "-"];  // after trim()
// text columns: only "" is missing (NULL can be a surname)
// col.nulls replaces the defaults; missing + nullable → null, else throw`,
        note: "Decide missing before converting, or toInt(\"N/A\") throws on a normal row." }
    ],
    lessons: [

      {
        id: "etl-u2-1",
        title: "IDs are strings: leading zeros and 17-digit numbers",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        brief: "Unit 1 ended with every value a string, and that's the right place to be. The mistake that comes next is letting something *guess* which strings are numbers. Spreadsheets do it, CSV libraries with automatic typing do it, and so does a first-draft importer that runs everything through `Number`.\n\n- **Leading zeros.** `07920` is a New Jersey zip code. As a number it's `7920`, and nothing downstream can reliably put the zero back.\n- **Long identifiers.** JavaScript numbers are exact only up to `Number.MAX_SAFE_INTEGER`, which is 9,007,199,254,740,991. `Number(\"12345678901234567\")` is `12345678901234568`, an account number that now belongs to someone else. Excel keeps only 15 significant digits, which is how exported account numbers lose their tails.\n- **Codes that look like numbers.** `1E5` is a product code, not 100,000.\n\nThe fix is a **column spec**: you decide, per column, what the type is. An `id` is text, trimmed, and never touches `Number`. An `int` is only digits with an optional minus sign, and it must be a safe integer, so `1e3`, `12.0`, `0x10` and `1,000` are errors rather than quietly accepted. When a value fails, the error starts with the column name, because `not an integer` on its own is useless in a 40-column file.\n\nWrite `toId(s)`, `toInt(s)` and `typeRow(raw, spec)`. The output row holds exactly the spec's columns, in the spec's order.",
        steps: [
          { text: "`toId` keeps zeros, length and letters, and trims. An empty id throws.",
            test: R`
T.eq(toId('07920'), '07920', 'A zip code keeps its leading zero');
T.eq(toId('00000000000000451'), '00000000000000451', 'An account number keeps every zero');
T.eq(toId('12345678901234567'), '12345678901234567', 'A 17-digit id stays exact. As a number it would be 12345678901234568');
T.eq(toId(' 1E5 '), '1E5', 'A product code that looks like scientific notation stays a code');
var threw = false; try { toId('   '); } catch (e) { threw = e instanceof TypeError; }
T.expect(threw, 'An empty id is not an id. Throw a TypeError');
` },
          { text: "`toInt` accepts plain integers only, and throws a `TypeError` for anything `Number()` would bend.",
            test: R`
T.eq([toInt('42'), toInt('-7'), toInt(' 3 '), toInt('007')], [42, -7, 3, 7], 'Plain integers convert and surrounding spaces are trimmed');
['1e3', '12.0', '0x10', '', '3 apples', '1,000', '9007199254740993'].forEach(function (s) {
  var threw = false; try { toInt(s); } catch (e) { threw = e instanceof TypeError; }
  T.expect(threw, 'toInt(' + JSON.stringify(s) + ') must throw a TypeError. Number() would accept it or round it');
});
` },
          { text: "`typeRow` applies the spec: ids stay strings, errors start with the column name, and only spec columns come out, in spec order.",
            test: R`
T.eq(typeRow(ROWS[0], SPEC), { account: '12345678901234567', zip: '07920', qty: 3 }, 'Ids stay strings and qty becomes a number');
var m = null; try { typeRow(ROWS[2], SPEC); } catch (e) { m = String(e.message); }
T.expect(m !== null && /^qty\b/.test(m), 'A bad value throws and the message starts with the column name. Got: ' + m);
var m2 = null; try { typeRow({ account: '1', zip: '2' }, SPEC); } catch (e) { m2 = String(e.message); }
T.expect(m2 !== null && /^qty\b/.test(m2), 'A column the spec expects but the row lacks is an error naming it. Got: ' + m2);
T.eq(Object.keys(typeRow({ qty: '1', zip: '2', account: '3', extra: 'x' }, SPEC)), ['account', 'zip', 'qty'], 'The output has the spec columns in spec order and nothing else');
` },
          { text: "A thousand random 17-digit account numbers all survive `typeRow` exactly.",
            test: R`
var seed = 7;
var rnd = function () { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
var bad = 0, example = null;
for (var i = 0; i < 1000; i++) {
  var acct = String(1 + Math.floor(rnd() * 9));
  for (var k = 0; k < 16; k++) acct += String(Math.floor(rnd() * 10));
  var row = typeRow({ account: acct, zip: '0' + (1000 + i), qty: String(i) }, SPEC);
  if (row.account !== acct) { bad++; example = example || [acct, row.account]; }
}
T.eq(bad, 0, 'Every account must round-trip exactly. First mismatch: ' + JSON.stringify(example));
` }
        ],
        files: [
          { name: "script.js", content: u1File(R`
// The first draft: anything that looks like a number becomes one.
function toId(s) {
  return isNaN(s) ? s : Number(s);
}

function toInt(s) {
  return Number(s);
}

function typeRow(raw, spec) {
  const out = {};
  for (const column of Object.keys(spec)) {
    out[column] = spec[column] === "id" ? toId(raw[column]) : toInt(raw[column]);
  }
  return out;
}
`) }
        ],
        hints: [
          "`toId`: `const v = String(s).trim();` then throw a `TypeError` if it's empty, otherwise return `v`. No `Number` anywhere.",
          "`toInt`: trim, test against `/^-?\\d+$/`, convert with `Number`, then check `Number.isSafeInteger(n)`. Throw a `TypeError` when either check fails.",
          "`typeRow`: loop over `Object.keys(spec)`, so the output follows the spec's order. Throw if `raw[column] === undefined`, and wrap each conversion in `try`/`catch` that re-throws `new TypeError(column + \": \" + e.message)`."
        ],
        solution: {
          "script.js": u1File(TO_ID_INT + "\n" + TYPE_ROW)
        }
      },

      {
        id: "etl-u2-2",
        title: "Numbers with commas, currencies and cents",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        brief: "Money in a pipeline has two problems: how it's written, and what you store.\n\n**What you store: integer cents.** Floating point can't represent most decimal fractions exactly. `0.1 + 0.2` is `0.30000000000000004`, and `-3.07 * 100` is `-306.99999999999997`. Add up a million of those and the total is off by cents nobody can explain. Build an integer number of cents from the digit strings instead, and every sum is exact. (Currencies with no minor unit, or three decimal places, need their own scale; this lesson sticks to two.)\n\n**How it's written depends on the locale.**\n\n- `en`: `1,234.50`. The comma groups thousands, the dot marks decimals.\n- `de`: `1.234,50`. The same two characters, swapped.\n- A currency symbol before or after (`$`, `€`, `£`), with or without a space.\n- Negatives as `-5.00`, `$-5.00`, or accounting-style `(12.50)`.\n\nWrite `parseAmount(str, locale)` returning integer cents. The strip-everything starter reads `1.234,50` as `1.2345` and never notices. So be strict: thousands groups must be exactly three digits, at most two decimals, and anything else throws a `TypeError`. `1,234.567` might be a rounding bug upstream or a different currency, and a pipeline that guesses writes the wrong number with full confidence.",
        steps: [
          { text: "US amounts parse to whole numbers of cents.",
            test: R`
var got = ['1234.50', '$1,234.50', '12', '0.5', '-3.07', '1.10'].map(function (s) { return parseAmount(s, 'en'); });
got.forEach(function (c) { T.expect(Number.isInteger(c), 'Every result must be a whole number of cents. Got ' + c); });
T.eq(got, [123450, 123450, 1200, 50, -307, 110], 'US amounts in integer cents');
` },
          { text: "German amounts parse too, and the same money written both ways gives the same cents.",
            test: R`
T.eq(['1.234,50', '12,5 €', '€ 0,07', '0,99'].map(function (s) { return parseAmount(s, 'de'); }), [123450, 1250, 7, 99], 'In German amounts the dot groups thousands and the comma marks decimals');
T.eq(parseAmount('1,234.50', 'en'), parseAmount('1.234,50', 'de'), 'The same money written two ways parses to the same cents');
` },
          { text: "Negatives: accounting parentheses, and a minus sign on either side of the currency symbol.",
            test: R`
T.eq(parseAmount('(12.50)', 'en'), -1250, 'Accounting exports write negatives in parentheses');
T.eq(parseAmount('(1.234,00)', 'de'), -123400, 'Parentheses work in German amounts too');
T.eq(parseAmount('-$5.00', 'en'), -500, 'A minus sign before the currency symbol');
T.eq(parseAmount('$-5.00', 'en'), -500, 'A minus sign after the currency symbol');
` },
          { text: "Anything ambiguous throws a `TypeError`, and ten thousand amounts add up to the exact cent.",
            test: R`
[['1,234.567', 'en'], ['12,34,5', 'en'], ['1.234,50', 'en'], ['1,234.50', 'de'], ['', 'en'], ['abc', 'en'], ['12.5.0', 'en']].forEach(function (pair) {
  var threw = false; try { parseAmount(pair[0], pair[1]); } catch (e) { threw = e instanceof TypeError; }
  T.expect(threw, 'parseAmount(' + JSON.stringify(pair[0]) + ' as ' + pair[1] + ') must throw a TypeError instead of guessing');
});
var total = 0, want = 0;
for (var i = 0; i < 10000; i++) {
  var c = (i * 7919) % 100000;
  want += c;
  total += parseAmount(Math.floor(c / 100) + '.' + String(c % 100).padStart(2, '0'), 'en');
}
T.eq(total, want, 'Ten thousand amounts add up to the exact cent');
` }
        ],
        files: [
          { name: "script.js", content: u2File(R`
function parseAmount(str, locale) {
  // Strip anything that isn't a digit, parse a float, multiply by 100.
  return parseFloat(String(str).replace(/[^0-9.-]/g, "")) * 100;
}
`) }
        ],
        hints: [
          "Pick the separators first: for `de` the group is `.` and the decimal is `,`; for `en` it's the other way round.",
          "Peel the extras off the string in order: parentheses (negative), a leading `-`, a currency symbol at the start or end (`/^[$€£]\\s*/` and `/\\s*[$€£]$/`), then a `-` again for `$-5.00`.",
          "Match what's left against `^(\\d{1,3}(?:G\\d{3})+|\\d+)(?:D(\\d{1,2}))?$`, where G and D are the separators (escape the dot as `\\\\.` inside a `new RegExp` string). No match: throw a `TypeError`.",
          "Cents are `Number(whole without group separators) * 100 + Number(decimals padded to 2 digits)`. Both are whole numbers, so the result is exact."
        ],
        solution: {
          "script.js": u2File(PARSE_AMOUNT)
        }
      },

      {
        id: "etl-u2-3",
        title: "Dates: one string, two days",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        brief: "Dates break imports in two different ways.\n\n**JavaScript's `Date` parses in two time zones.** Per MDN, a date-only string like `\"2026-03-08\"` is read as **midnight UTC**, while `\"2026-03-08T00:00\"` with no offset is read as **local** midnight. On a laptop in Chicago the first one is 6 p.m. on March 7th, and `.getDate()` says 7. Non-standard strings like `\"03/08/2026\"` are parsed however the engine likes. A pipeline whose output depends on the machine it ran on has a bug that only shows up somewhere else. A calendar day isn't an instant, so don't store it as one: keep it a `YYYY-MM-DD` string built from its parts. The checks in this lesson replace `Date` with a function that throws, so a solution can't lean on it.\n\n**`03/08/2026` is March 8th in the US and August 3rd almost everywhere else.** One value can't tell you which. A whole column often can: a first number above 12 can only be a day. When no value in a column is above 12, the honest answer is *ambiguous*, and that source needs a hint rather than a guess. When one value says DD/MM and another says MM/DD, the column mixes formats, which is worse.\n\nWrite `parseDay(str, format)` for `YYYY-MM-DD`, `DD/MM/YYYY`, `MM/DD/YYYY` and `DD.MM.YYYY`. Spreadsheets drop leading zeros, so accept `8/3/2026`, but ISO days must be exactly padded. Check that the day exists, including leap years: divisible by 4, except centuries, except every 400 years. Then write `detectDayOrder(values)`, returning `\"DD/MM\"`, `\"MM/DD\"`, `\"ambiguous\"` or `\"inconsistent\"`, and `parseDayColumn(values, hint)`, returning `{ order, days }`. Invalid input throws a `TypeError`.",
        steps: [
          { text: "ISO days come back as the same string, only real days pass (leap years included), and `Date` is never called.",
            test: R`
var noDate = function (fn) {
  var Real = globalThis.Date;
  globalThis.Date = function () { throw new Error('Date was called. Build the YYYY-MM-DD string from its parts'); };
  try { return fn(); } finally { globalThis.Date = Real; }
};
var rejected = function (s, f) { try { noDate(function () { parseDay(s, f); }); return false; } catch (e) { return e instanceof TypeError; } };
T.eq(noDate(function () { return parseDay('2026-03-08', 'YYYY-MM-DD'); }), '2026-03-08', 'An ISO day comes back as the same string without ever becoming a Date');
T.eq(noDate(function () { return [parseDay('2024-02-29', 'YYYY-MM-DD'), parseDay('2000-02-29', 'YYYY-MM-DD')]; }), ['2024-02-29', '2000-02-29'], 'Leap days exist in 2024 and in 2000');
['2026-02-29', '1900-02-29', '2026-04-31', '2026-13-01', '2026-00-10', '2026-3-8', '26-03-08', '2026-03-08T00:00'].forEach(function (s) {
  T.expect(rejected(s, 'YYYY-MM-DD'), 'parseDay(' + JSON.stringify(s) + ') must throw a TypeError. An ISO day is exactly YYYY-MM-DD and must exist');
});
` },
          { text: "Slash and dot formats, with or without leading zeros, all become `2026-03-08`, and impossible days or wrong formats throw.",
            test: R`
var noDate = function (fn) {
  var Real = globalThis.Date;
  globalThis.Date = function () { throw new Error('Date was called. Build the YYYY-MM-DD string from its parts'); };
  try { return fn(); } finally { globalThis.Date = Real; }
};
var rejected = function (s, f) { try { noDate(function () { parseDay(s, f); }); return false; } catch (e) { return e instanceof TypeError; } };
T.eq(noDate(function () { return [parseDay('08/03/2026', 'DD/MM/YYYY'), parseDay('03/08/2026', 'MM/DD/YYYY'), parseDay('08.03.2026', 'DD.MM.YYYY'), parseDay('8/3/2026', 'DD/MM/YYYY')]; }), ['2026-03-08', '2026-03-08', '2026-03-08', '2026-03-08'], 'Four spellings of March 8th all become 2026-03-08');
T.expect(rejected('31/04/2026', 'DD/MM/YYYY'), 'April has 30 days');
T.expect(rejected('08/13/2026', 'DD/MM/YYYY'), 'There is no month 13');
T.expect(rejected('08-03-2026', 'DD/MM/YYYY'), 'The wrong separator means the wrong format');
T.expect(rejected('08/03/2026', 'YYYY/DD/MM'), 'An unknown format throws a TypeError instead of guessing');
` },
          { text: "`detectDayOrder` reads a whole column: DD/MM, MM/DD, ambiguous, or inconsistent.",
            test: R`
T.eq(detectDayOrder(['03/08/2026', '25/08/2026']), 'DD/MM', 'A first number above 12 can only be a day');
T.eq(detectDayOrder(['12/31/2026', '01/02/2026']), 'MM/DD', 'A second number above 12 can only be a day');
T.eq(detectDayOrder(['03/08/2026', '04/09/2026', '11/12/2026']), 'ambiguous', 'When every value reads both ways the column cannot decide');
T.eq(detectDayOrder(['13/01/2026', '01/13/2026']), 'inconsistent', 'Evidence for both orders means the column mixes formats');
T.eq(detectDayOrder([]), 'ambiguous', 'No values means no evidence');
` },
          { text: "`parseDayColumn` lets the data decide, uses a hint only when it can't, and refuses an ambiguous column with no hint.",
            test: R`
var noDate = function (fn) {
  var Real = globalThis.Date;
  globalThis.Date = function () { throw new Error('Date was called. Build the YYYY-MM-DD string from its parts'); };
  try { return fn(); } finally { globalThis.Date = Real; }
};
var msg = function (fn) { try { noDate(fn); return null; } catch (e) { return String(e.message); } };
T.eq(noDate(function () { return parseDayColumn(['03/08/2026', '25/08/2026']); }), { order: 'DD/MM', days: ['2026-08-03', '2026-08-25'] }, 'The column decides its own order and every value is parsed with it');
var m = msg(function () { parseDayColumn(['03/08/2026', '04/09/2026']); });
T.expect(m !== null && /ambiguous/i.test(m), 'An ambiguous column with no hint must throw and say ambiguous. Got: ' + m);
T.eq(noDate(function () { return parseDayColumn(['03/08/2026', '04/09/2026'], 'MM/DD'); }), { order: 'MM/DD', days: ['2026-03-08', '2026-04-09'] }, 'A hint settles a column the data cannot decide');
var m2 = msg(function () { parseDayColumn(['03/08/2026', '25/08/2026'], 'MM/DD'); });
T.expect(m2 !== null && !/Date was called/.test(m2), 'A hint that contradicts the data is an error. Got: ' + m2);
var m3 = msg(function () { parseDayColumn(['13/01/2026', '01/13/2026'], 'DD/MM'); });
T.expect(m3 !== null && !/Date was called/.test(m3), 'An inconsistent column throws even with a hint. Got: ' + m3);
` }
        ],
        files: [
          { name: "script.js", content: u3File(R`
function parseDay(str, format) {
  // Let Date figure it out.
  return new Date(str).toISOString().slice(0, 10);
}

function detectDayOrder(values) {
  return "MM/DD";
}

function parseDayColumn(values, hint) {
  return { order: "MM/DD", days: values.map(v => parseDay(v, "MM/DD/YYYY")) };
}
`) }
        ],
        hints: [
          "For ISO, match `/^(\\d{4})-(\\d{2})-(\\d{2})$/`. For the others, build a `RegExp` from `(\\d{1,2})`, the separator (`/` or an escaped dot), `(\\d{1,2})`, the separator again and `(\\d{4})`. Swap day and month when the format starts with `MM`.",
          "Validate with numbers, not `Date`: `month` from 1 to 12 and `day` from 1 to the days in that month. February has 29 days when `(y % 4 === 0 && y % 100 !== 0) || y % 400 === 0`.",
          "Build the result with `String(n).padStart(2, \"0\")` for month and day.",
          "`detectDayOrder`: set a flag when any first number is above 12 and another when any second number is. Both means inconsistent, neither means ambiguous. `parseDayColumn` throws on inconsistent, uses the hint only for ambiguous, and throws when a hint disagrees with a decided order."
        ],
        solution: {
          "script.js": u3File(PARSE_DAY + "\n" + DAY_COLUMN)
        }
      },

      {
        id: "etl-u2-4",
        title: "Null has many spellings",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        brief: "Missing values arrive spelled half a dozen ways: an empty field, `NULL`, `null`, `N/A`, `-`, a field of spaces, and system-specific ones like `00/00/0000`. Load them as text and a `qty` column holds the string `N/A`, which breaks the first sum. Convert them blindly and `toInt(\"N/A\")` throws on a perfectly normal row.\n\nSo missing is decided **per column, before conversion**:\n\n- A typed column (`id`, `int`, `amount`, `day`) treats the default spellings as missing, after trimming: `\"\"`, `NULL`, `null`, `N/A`, `n/a`, `-`.\n- A **text** column treats only an empty value as missing. `NULL` is a real surname, and `N/A` might be exactly what someone typed. Destroying that is worse than keeping it.\n- A column may carry its **own** `nulls` list, which replaces the defaults.\n- Missing plus `nullable: true` gives `null`. Missing in a required column is an error naming the column. A column absent from the row entirely counts as missing.\n\nThe converters from this unit are in the file, with a `convert(value, col)` dispatcher. Write `isMissing(value, col)` and `applySpec(raw, spec)`. It returns the typed row with the spec's columns in the spec's order, trims values before converting anything but text, and re-throws conversion errors as `TypeError`s with the column name in front.",
        steps: [
          { text: "Every default spelling of missing becomes `null` in a nullable typed column, and a complete row is fully typed.",
            test: R`
var base = { customer_id: '1', surname: 'Ada', qty: '3', total: '1.00', shipped: '08/03/2026' };
var qtyOf = function (v) { return applySpec(Object.assign({}, base, { qty: v }), SPEC).qty; };
T.eq(['N/A', 'NULL', 'null', '-', '', '   ', 'n/a'].map(qtyOf), [null, null, null, null, null, null, null], 'Every default spelling of missing becomes null in a nullable int column');
T.eq(applySpec(Object.assign({}, base, { total: '  ' }), SPEC).total, null, 'A value of spaces is missing too');
T.eq(applySpec(base, SPEC), { customer_id: '1', surname: 'Ada', qty: 3, total: 100, shipped: '2026-03-08' }, 'A complete row is fully typed');
` },
          { text: "In a text column only an empty value is missing: `NULL` and `N/A` stay text, and an empty required value throws.",
            test: R`
var row = function (s) { return { customer_id: '1', surname: s, qty: '1', total: '1.00', shipped: '' }; };
T.eq(applySpec(row('NULL'), SPEC).surname, 'NULL', 'A surname can really be Null. In a text column only an empty value is missing');
T.eq(applySpec(row('N/A'), SPEC).surname, 'N/A', 'A text column keeps N/A as text unless its own list says otherwise');
var m = null; try { applySpec(row(''), SPEC); } catch (e) { m = String(e.message); }
T.expect(m !== null && /^surname\b/.test(m), 'An empty value in a required column throws and names the column. Got: ' + m);
` },
          { text: "A column's own `nulls` list replaces the defaults, and it applies to that column only.",
            test: R`
var row = function (patch) { return Object.assign({ customer_id: '1', surname: 'Ada', qty: '1', total: '1.00', shipped: '08/03/2026' }, patch); };
T.eq(applySpec(row({ shipped: '00/00/0000' }), SPEC).shipped, null, 'shipped lists 00/00/0000 as its own spelling of missing');
var m = null; try { applySpec(row({ shipped: 'N/A' }), SPEC); } catch (e) { m = String(e.message); }
T.expect(m !== null && /^shipped\b/.test(m), 'A column with its own list uses that list instead of the defaults, so N/A is a bad date there. Got: ' + m);
var m2 = null; try { applySpec(row({ qty: '00/00/0000' }), SPEC); } catch (e) { m2 = String(e.message); }
T.expect(m2 !== null && /^qty\b/.test(m2), 'Another column spelling of missing means nothing in qty. It is a bad integer. Got: ' + m2);
` },
          { text: "Required columns and conversion errors name the column, and the export row types exactly.",
            test: R`
var row = function (patch) { return Object.assign({ customer_id: '07920', surname: 'Ada', qty: '1', total: '1.00', shipped: '' }, patch); };
var msg = function (r) { try { applySpec(r, SPEC); return 'no error'; } catch (e) { return String(e.message); } };
T.expect(/^customer_id\b/.test(msg(row({ customer_id: 'NULL' }))), 'customer_id is required, so NULL there is an error naming the column');
T.expect(/^customer_id\b/.test(msg(row({ customer_id: undefined }))), 'A column absent from the row is missing too');
T.expect(/^qty\b/.test(msg(row({ qty: '3 apples' }))), 'A conversion error is re-thrown with the column name in front');
T.eq(applySpec(ROW, SPEC), { customer_id: '07920', surname: 'NULL', qty: null, total: null, shipped: null }, 'The export row types exactly');
` }
        ],
        files: [
          { name: "script.js", content: u4File(R`
// ---- yours ----
function isMissing(value, col) {
  return false;
}

function applySpec(raw, spec) {
  const out = {};
  for (const column of Object.keys(spec)) out[column] = convert(raw[column], spec[column]);
  return out;
}
`) }
        ],
        hints: [
          "`isMissing`: `undefined` or `null` is missing. Otherwise trim, choose the list (`col.nulls`, else `[\"\"]` for text, else the default six), and check `indexOf(trimmed) !== -1`.",
          "In `applySpec`, check `isMissing` first. Missing and nullable gives `null`; missing and required throws `new TypeError(column + \": required, but missing\")`.",
          "Otherwise convert `col.type === \"text\" ? value : String(value).trim()`, inside `try`, and re-throw `new TypeError(column + \": \" + e.message)`."
        ],
        solution: {
          "script.js": u4File(R`
// ---- yours ----
const DEFAULT_NULLS = ["", "NULL", "null", "N/A", "n/a", "-"];

function isMissing(value, col) {
  if (value === undefined || value === null) return true;
  const spellings = col.nulls || (col.type === "text" ? [""] : DEFAULT_NULLS);
  return spellings.indexOf(String(value).trim()) !== -1;
}

function applySpec(raw, spec) {
  const out = {};
  for (const column of Object.keys(spec)) {
    const col = spec[column], value = raw[column];
    if (isMissing(value, col)) {
      if (!col.nullable) throw new TypeError(column + ": required, but missing");
      out[column] = null;
      continue;
    }
    try { out[column] = convert(col.type === "text" ? value : String(value).trim(), col); }
    catch (e) { throw new TypeError(column + ": " + e.message); }
  }
  return out;
}
`)
        }
      },

      {
        id: "etl-quiz-2",
        title: "Unit 2 quiz: Types",
        kind: "quiz", xp: 10,
        brief: "Ids, integers, money, calendar days and missing values. 80% to pass.",
        questions: [
          { q: "A CSV has a `zip` column containing `07920`. The importer detects types automatically and stores `7920`. What's the right fix?",
            choices: ["Pad every zip back to five digits when the reports are generated", "Declare the column's type in a spec, so zip is text and never goes through Number", "Store zips as floats, so the leading zeros can be recovered later from the precision", "Quote every value in the export, so the parser knows each one is a string"],
            answer: 1, explain: "The damage happens at conversion, so the fix is at conversion: the pipeline, not a guess, decides that zip is text. Padding on output only works for fixed-width codes and still leaves wrong values in storage. Quoting doesn't stop a typing step from converting, and floats don't keep leading zeros." },
          { q: "What does `Number(\"12345678901234567\")` evaluate to in JavaScript?",
            choices: ["12345678901234567, exactly as written in the string", "NaN, because digit strings longer than 16 characters aren't valid numbers in JavaScript", "Infinity, because the value is too large for a number", "12345678901234568, because it's past Number.MAX_SAFE_INTEGER"],
            answer: 3, explain: "Numbers are exact only up to 9,007,199,254,740,991. Beyond that, a value snaps to the nearest representable double, which here is 12345678901234568, a different account number. It's neither NaN nor Infinity; it's quietly wrong, which is worse." },
          { q: "Why should a pipeline store money as integer cents rather than as decimal numbers?",
            choices: ["Floating point can't represent most decimal fractions exactly, while integer sums are exact", "Databases can't reliably store decimal numbers with two digits after the point at all", "Integers take less memory, which matters once there are billions of transactions", "Currency symbols are easier to strip from whole numbers than from decimal ones"],
            answer: 0, explain: "`-3.07 * 100` is `-306.99999999999997`, and those errors add up across a million rows. Integers up to MAX_SAFE_INTEGER add exactly. Real databases do have exact DECIMAL types; the problem is JavaScript's number, which is a binary float." },
          { q: "On a laptop in Chicago, how do `new Date(\"2026-03-08\")` and `new Date(\"2026-03-08T00:00\")` differ?",
            choices: ["They don't: JavaScript always parses dates as UTC when no offset is written in the string", "They don't: JavaScript always uses the local time zone when no offset is written in the string", "The first is midnight UTC, which is March 7th in Chicago; the second is local midnight", "The first throws, because a date-only string is not a valid argument to the Date constructor"],
            answer: 2, explain: "Per the ECMAScript rules MDN documents, a date-only ISO string is parsed as UTC and a date-time string without an offset as local time. Chicago is behind UTC, so UTC midnight is the previous evening there. That's why a calendar day should stay a YYYY-MM-DD string." },
          { q: "A date column holds `03/08/2026`, `04/09/2026` and `11/12/2026`. What should the importer do?",
            choices: ["Assume MM/DD, since most software defaults to the US format", "Assume DD/MM, because a file from a system configured outside the United States usually means that", "Parse each value whichever way gives the date closest to today", "Refuse to guess: every value reads both ways, so require a hint for this source"],
            answer: 3, explain: "No value has a number above 12, so the column itself carries no evidence either way. Any default is a coin flip that silently swaps day and month for some rows. A per-source hint records a decision someone actually made." },
          { q: "In a text `surname` column, which values should count as missing by default?",
            choices: ["Empty, NULL, null, N/A and -, the same list typed columns use by default", "Nothing at all, because text columns always accept whatever the file contains, even an empty value", "Only the empty value, since NULL and N/A can be real text that someone meant", "Any value shorter than two characters, since real surnames are longer than that"],
            answer: 2, explain: "In a number column `N/A` can't be data, so treating it as missing loses nothing. In a text column it might be exactly what was typed, and `NULL` is a real surname. Keep text unless the column's own list says otherwise, and still treat an empty value as missing so required checks work." }
        ]
      }
    ]
  });
})();
