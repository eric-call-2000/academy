/* Data Pipelines & ETL — Unit 1: Reading files honestly */
(function () {
  /* Code is written as String.raw templates, so backslashes (\r\n, \uFEFF)
     reach the learner's editor and the grader exactly as they appear here.
     Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  /* etl-u1-1's solution, handed to etl-u1-3 for comparison. */
  var PARSE_CSV = R`
function parseCSV(text) {
  const records = [];
  let record = [], field = "";
  let quoted = false;      // inside "..."
  let afterQuote = false;  // a quoted field just closed
  let started = false;     // the current record has begun
  let line = 1;            // physical line, for error messages

  function fail(msg) { throw new SyntaxError("line " + line + ": " + msg); }
  function endField() { record.push(field); field = ""; afterQuote = false; }
  function endRecord() { endField(); records.push(record); record = []; started = false; }

  let i = 0;
  while (i < text.length) {
    const c = text[i], next = text[i + 1];
    if (quoted) {
      if (c === '"') {
        if (next === '"') { field += '"'; i += 2; continue; }  // "" is one quote
        quoted = false; afterQuote = true; i++; continue;
      }
      if (c === "\n") line++;
      field += c; i++; continue;                              // commas and line breaks are data
    }
    if (c === ",") { endField(); started = true; i++; continue; }
    if (c === "\r" && next === "\n") { endRecord(); line++; i += 2; continue; }
    if (c === "\n") { endRecord(); line++; i++; continue; }
    if (afterQuote) fail("unexpected " + JSON.stringify(c) + " after a closing quote");
    if (c === '"') {
      if (field !== "") fail("a quote inside an unquoted field");
      quoted = true; started = true; i++; continue;
    }
    field += c; started = true; i++;
  }
  if (quoted) fail("unterminated quoted field");
  if (started || field !== "" || record.length) endRecord();
  return records;
}
`;

  /* ---------- etl-u1-1 ---------- */
  var ORDERS = R`
// A nightly export, as it arrives. Three of these rows break a split(",") parser.
const ORDERS = 'id,sku,note\r\n' +
  '1,A-7,"Widget, large"\r\n' +
  '2,B-2,"He said ""ship it"""\r\n' +
  '3,C-9,"two\r\nlines"\r\n';
`;
  function u1File(body) { return ORDERS + "\n" + body + "\nconsole.log(parseCSV(ORDERS));\n"; }

  /* ---------- etl-u1-2 ---------- */
  var BYTES = R`
// The same kind of file, exported three ways. Only one decodes correctly by accident.
const PLAIN = new TextEncoder().encode("id,name\n1,café ✓\n");
const WITH_BOM = Uint8Array.from([0xEF, 0xBB, 0xBF, ...PLAIN]);  // Excel's "CSV UTF-8"
// "id,name\n2,café €5\n" from an old Windows export: é is the byte 0xE9 and € is 0x80.
const LEGACY = Uint8Array.from([0x69, 0x64, 0x2C, 0x6E, 0x61, 0x6D, 0x65, 0x0A,
  0x32, 0x2C, 0x63, 0x61, 0x66, 0xE9, 0x20, 0x80, 0x35, 0x0A]);
// What reading the Excel file as a string in Node gives you: the BOM survives.
const FROM_NODE = "\uFEFFid,name\n1,café ✓\n";
`;
  function u2File(body) {
    return BYTES + "\n" + body + R`

console.log(JSON.stringify(stripBOM(FROM_NODE).split(",")[0]));
console.log(detectEncoding(LEGACY), JSON.stringify(decodeFile(LEGACY)));
`;
  }

  /* ---------- etl-u1-3 ---------- */
  var CHUNK_HEAD = "// A big export arrives in pieces. parseCSV from etl-u1-1 is here for comparison.\n" + PARSE_CSV + R`
const FILE = new TextEncoder().encode(
  'id,note\r\n1,"a, b"\r\n2,"say ""hi"""\r\n3,"two\r\nlines"\r\n4,café ✓\r\n');
`;
  function u3File(body) {
    return CHUNK_HEAD + "\n" + body + R`

const demo = createParser();
console.log(demo.feed(FILE.slice(0, 20)), demo.feed(FILE.slice(20)), demo.end());
`;
  }

  /* ---------- etl-u1-4 ---------- */
  var EVENTS = R`
// Events exported one JSON value per line. Line 3 was cut off mid-write.
const EVENTS = '{"id":1,"type":"view"}\n' +
  '{"id":2,"type":"cart"}\n' +
  '{"id":3,"type":"buy",\n' +
  '{"id":4,"type":"view"}\n';
`;
  function u4File(body) {
    return EVENTS + "\n" + body + R`

try { console.log(parseJSONL(EVENTS)); } catch (e) { console.log("import failed:", e.message); }
`;
  }

  window.CODELAB.addUnit("etl", {
    id: "etl-u1",
    title: "Reading files honestly",
    icon: "📄",
    blurb: "A file is bytes until you prove otherwise. CSV parsed by the RFC instead of by split, encodings and the byte order mark, input that arrives in chunks, and JSON Lines that name the line that broke.",
    cheat: [
      { h: "CSV: one bit of state", lang: "js", code: R`
if (quoted) {
  if (c === '"' && next === '"') { field += '"'; i += 2; }  // "" is one quote
  else if (c === '"') { quoted = false; i++; }             // the closing quote
  else { field += c; i++; }                                // commas and line breaks are data
}
// outside quotes: "," ends a field, \r\n or \n ends a record`,
        note: "Accept CRLF and LF. Spaces belong to the field. Throw on a quote inside an unquoted field, and name the physical line, counting line breaks inside quotes." },
      { h: "Detect, then decode", lang: "js", code: R`
if (b[0] === 0xEF && b[1] === 0xBB && b[2] === 0xBF)       // UTF-8 with a BOM
try { new TextDecoder("utf-8", { fatal: true }).decode(b) } // valid UTF-8
catch (e) { new TextDecoder("windows-1252").decode(b) }     // legacy export
text.charCodeAt(0) === 0xFEFF ? text.slice(1) : text        // a string that kept its BOM`,
        note: "new TextDecoder() strips a BOM from bytes; a string read as utf8 in Node keeps it. U+FFFD in your data means something was decoded with the wrong encoding." },
      { h: "Parsing in chunks", lang: "js", code: R`
const decoder = new TextDecoder("utf-8");
buf += decoder.decode(chunk, { stream: true });  // half a character waits
// hold a trailing " or \r back: only the next character says what it was
buf += decoder.decode();                          // end(): flush`,
        note: "Keep parser state (quoted, field, record) between feeds. Records come out as soon as their line break arrives." },
      { h: "JSON Lines", lang: "js", code: R`
const lines = text.split("\n");
if (lines[lines.length - 1] === "") lines.pop();  // the final terminator
// each line: blank → error; JSON.parse in try → a row, or { line: i + 1, message }`,
        note: "One JSON value per line, UTF-8, \\n separators (a \\r before it is harmless). Blank lines are invalid. One bad line should cost one row, not the file." }
    ],
    lessons: [

      {
        id: "etl-u1-1",
        title: "CSV is not split(\",\"): RFC 4180 as a state machine",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        brief: "`debug-u3-p` ended with a parser that survives a quoted comma. That was one symptom. This lesson writes the whole parser, because CSV has one real rule that `split` can't see: **inside double quotes, nothing is a separator.** Not a comma, and not a line break either.\n\nRFC 4180 in five lines:\n\n- A record ends at CRLF. Real files also use a bare LF, so accept both. The last record may have no line break.\n- Fields are separated by commas, and spaces belong to the field.\n- A field containing a comma, a quote or a line break is wrapped in double quotes.\n- Inside quotes, a literal quote is written twice: `\"\"`.\n- An unquoted field never contains a quote.\n\nThe line-break rule is why `text.split(\"\\n\")` is wrong before a single comma is examined: a note with a line break in it becomes two broken records. So read **one character at a time** and keep one bit of state, *am I inside quotes?* That's a state machine, and it's about 30 lines.\n\nWhen the input breaks the rules, throw. Guessing turns one bad row into silently wrong data. The error should name the **physical line**, counting the line breaks inside quoted fields, because that's the line someone opens the file to look at.",
        steps: [
          { text: "Plain rows work: spaces are kept, CRLF and LF both end a record, and a final line break doesn't add an empty record.",
            test: R`
T.eq(parseCSV('id,sku,qty\n1, A-7 ,3\n2,B-2,5'), [['id','sku','qty'],['1',' A-7 ','3'],['2','B-2','5']], 'Plain rows split on commas and spaces belong to the field (RFC 4180 rule 4)');
T.eq(parseCSV('a,b\r\n1,2\r\n'), [['a','b'],['1','2']], 'CRLF ends a record and a final line break does not start an empty one');
T.eq(parseCSV('a,b\n1,2'), [['a','b'],['1','2']], 'The last record may have no line break at all');
T.eq(parseCSV(''), [], 'An empty file has no records');
T.eq(parseCSV('a,,c,\n'), [['a','','c','']], 'Empty fields are empty strings including a trailing one');
` },
          { text: "Quoted fields: a comma inside quotes is data, `\"\"` is one literal quote, and `\"\"` alone is an empty field.",
            test: R`
T.eq(parseCSV('1,"Widget, large",3'), [['1','Widget, large','3']], 'A comma inside quotes is data and not a separator');
T.eq(parseCSV('2,"He said ""ship it""",4'), [['2','He said "ship it"','4']], 'Inside quotes a doubled quote is one literal quote (rule 7)');
T.eq(parseCSV('3,"",5'), [['3','','5']], 'A quoted empty field is an empty string');
T.eq(parseCSV('7,"KIT,2",2,3.50'), [['7','KIT,2','2','3.50']], 'The kind of line that broke debug-u3-p now parses with qty back in field 3');
` },
          { text: "A line break inside quotes belongs to the field, so every record in `ORDERS` has exactly three fields.",
            test: R`
var r = parseCSV('id,note\r\n1,"line one\r\nline two"\r\n2,ok\r\n');
T.eq(r.length, 3, 'A line break inside quotes belongs to the field, so this file has 3 records and not 4');
T.eq(r[1], ['1', 'line one\r\nline two'], 'The note keeps its own CRLF');
T.eq(r[2], ['2', 'ok'], 'The record after a multi-line field parses normally');
T.eq(parseCSV(ORDERS).map(function (rec) { return rec.length; }), [3, 3, 3, 3], 'Every record in ORDERS has exactly 3 fields');
` },
          { text: "Malformed input throws, and the message names the physical line: a stray quote, a quote that never closes, and text after a closing quote.",
            test: R`
var threw = function (text) { try { parseCSV(text); return null; } catch (e) { return String(e.message); } };
var m1 = threw('id,sku\n1,ok\n2,ab"c');
T.expect(m1 !== null, 'A quote in the middle of an unquoted field is malformed. Throw instead of guessing');
T.expect(/line 3\b/.test(m1), 'Name the line so someone can find it. Expected the message to mention line 3 but got: ' + m1);
var m2 = threw('a\n"x\ny"\nb"c');
T.expect(m2 !== null && /line 4\b/.test(m2), 'Count physical lines including the ones inside a quoted field. The bad quote is on line 4. Got: ' + m2);
var m3 = threw('id\n"never closed');
T.expect(m3 !== null && /unterminated/i.test(m3), 'A quote that never closes must throw and say unterminated. Got: ' + m3);
T.expect(threw('"ab"c,d') !== null, 'After a closing quote only a comma or a line break may follow');
` }
        ],
        files: [
          { name: "script.js", content: u1File(R`
function parseCSV(text) {
  // debug-u3-p shipped this idea: split first, ask questions later.
  return text.split(/\r?\n/).map(line => line.split(","));
}
`) }
        ],
        hints: [
          "Walk the text with an index `i`, looking at `text[i]` and `text[i + 1]`. Keep `record` (the fields so far), `field` (the characters so far), `quoted`, and a `line` counter.",
          "Inside quotes: `\"\"` appends one quote and skips two characters, a single `\"` closes the field, and anything else, commas and line breaks included, is appended. A `\\n` inside quotes still adds 1 to `line`.",
          "Outside quotes: `,` ends a field, `\\r\\n` or `\\n` ends a record, and `\"` opens quotes only when the field is still empty; otherwise throw. After a closing quote, anything other than a comma or line break is an error too.",
          "At the end: throw if you're still inside quotes. Otherwise push the last record, unless the text ended right after a line break (track whether the current record has started)."
        ],
        solution: {
          "script.js": u1File(PARSE_CSV)
        }
      },

      {
        id: "etl-u1-2",
        title: "Bytes, encodings and the BOM",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        brief: "Before a file is text it's bytes, and the bytes don't say which encoding wrote them. Three cases cover almost every export a pipeline sees.\n\n- **UTF-8.** `é` is two bytes (`C3 A9`) and `✓` is three. Decoding one byte per character turns `café` into `cafÃ©`, and once that's loaded it's permanent.\n- **UTF-8 with a BOM.** Excel's \"CSV UTF-8\" starts the file with the bytes `EF BB BF`. `new TextDecoder()` removes them for you, but reading the file as a string in Node (`readFileSync(path, \"utf8\")`) keeps them as the character `U+FEFF`. Your first header is now `\"\\uFEFFid\"`, and every `row.id` quietly returns `undefined`.\n- **windows-1252.** Older Windows exports store `é` as the single byte `E9` and `€` as `80`. That isn't valid UTF-8, so a lenient decoder writes `U+FFFD` (�) and the character is gone.\n\nThe move is **detect, then decode.** A BOM is certain. After that, ask a strict decoder: `new TextDecoder(\"utf-8\", { fatal: true })` throws on invalid bytes. If it throws, you have a legacy file, and `new TextDecoder(\"windows-1252\")` reads it correctly. Text in a legacy encoding with any accented letters almost never happens to form valid UTF-8, which is why the strict check works so well in practice.\n\nWrite `stripBOM(text)` for strings that kept their BOM, `detectEncoding(bytes)` returning `\"utf-8-bom\"`, `\"utf-8\"` or `\"windows-1252\"`, and `decodeFile(bytes)`.",
        steps: [
          { text: "`stripBOM(text)` removes one `U+FEFF` from the very start, and only from the start.",
            test: R`
T.eq(stripBOM(FROM_NODE).split(',')[0], 'id', 'The first header must be id and not an invisible U+FEFF followed by id');
T.eq(stripBOM('id,name'), 'id,name', 'Text with no BOM is returned unchanged');
T.eq(stripBOM('a\uFEFFb'), 'a\uFEFFb', 'Only a BOM at the very start is a BOM. Leave one in the middle alone');
T.eq(stripBOM(''), '', 'An empty string stays empty');
` },
          { text: "`detectEncoding(bytes)` tells the three exports apart from their bytes alone.",
            test: R`
T.eq(detectEncoding(WITH_BOM), 'utf-8-bom', 'EF BB BF at the start is the UTF-8 byte order mark');
T.eq(detectEncoding(PLAIN), 'utf-8', 'Valid UTF-8 with no BOM is utf-8');
T.eq(detectEncoding(LEGACY), 'windows-1252', 'The byte 0xE9 on its own is not valid UTF-8, so this file is windows-1252');
T.eq(detectEncoding(new TextEncoder().encode('id,qty\n1,2\n')), 'utf-8', 'Plain ASCII is valid UTF-8');
T.eq(detectEncoding(Uint8Array.from([0xEF, 0xBB])), 'windows-1252', 'Two bytes of a BOM are not a BOM, and EF BB alone is not valid UTF-8 either');
` },
          { text: "`decodeFile(bytes)` decodes UTF-8 correctly, with or without a BOM, and the BOM never reaches the text.",
            test: R`
T.eq(decodeFile(PLAIN), 'id,name\n1,café ✓\n', 'UTF-8 bytes decode to the text they encode: é is two bytes and ✓ is three');
var d = decodeFile(WITH_BOM);
T.eq(d.charCodeAt(0) === 0xFEFF, false, 'The BOM is not part of the text. Remove it when you decode');
T.eq(d, 'id,name\n1,café ✓\n', 'With the BOM gone the Excel export decodes to the same text as the plain one');
` },
          { text: "The legacy export decodes as windows-1252, with no replacement characters.",
            test: R`
var d = decodeFile(LEGACY);
T.expect(d.indexOf('\uFFFD') === -1, 'U+FFFD is what a decoder writes when the bytes are not the encoding it assumed. Detect first and decode second');
T.eq(d, 'id,name\n2,café €5\n', 'Decoded as windows-1252 the byte 0xE9 is é and 0x80 is €');
T.eq(decodeFile(new Uint8Array(0)), '', 'An empty file decodes to an empty string');
` }
        ],
        files: [
          { name: "script.js", content: u2File(R`
function stripBOM(text) {
  return text;
}

function detectEncoding(bytes) {
  // "utf-8-bom", "utf-8" or "windows-1252"
  return "utf-8";
}

function decodeFile(bytes) {
  // One byte, one character: fine for ASCII, wrong for everything else.
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return s;
}
`) }
        ],
        hints: [
          "`stripBOM`: `text.charCodeAt(0) === 0xFEFF ? text.slice(1) : text`.",
          "`detectEncoding`: check `bytes[0]`, `bytes[1]` and `bytes[2]` against `0xEF 0xBB 0xBF` first. Then `try { new TextDecoder(\"utf-8\", { fatal: true }).decode(bytes); return \"utf-8\"; } catch (e) { return \"windows-1252\"; }`.",
          "`decodeFile`: call `detectEncoding`, then decode with `new TextDecoder(\"windows-1252\")` for legacy files and `new TextDecoder(\"utf-8\")` for the rest. The UTF-8 decoder removes a leading BOM on its own."
        ],
        solution: {
          "script.js": u2File(R`
function stripBOM(text) {
  return text.charCodeAt(0) === 0xFEFF ? text.slice(1) : text;
}

function detectEncoding(bytes) {
  if (bytes[0] === 0xEF && bytes[1] === 0xBB && bytes[2] === 0xBF) return "utf-8-bom";
  try {
    new TextDecoder("utf-8", { fatal: true }).decode(bytes);  // throws on invalid UTF-8
    return "utf-8";
  } catch (e) {
    return "windows-1252";
  }
}

function decodeFile(bytes) {
  if (detectEncoding(bytes) === "windows-1252") return new TextDecoder("windows-1252").decode(bytes);
  return new TextDecoder("utf-8").decode(bytes);  // also removes a leading BOM
}
`)
        }
      },

      {
        id: "etl-u1-3",
        title: "A parser that survives chunk boundaries",
        kind: "js", chip: "ETL", xp: 15, mins: 16,
        brief: "Nobody hands a pipeline a 40 MB export as one string. It arrives in chunks: from a stream (`nodejs-u2`'s `Transform` is exactly where this code would live), from a `fetch` body reader, from a file read in blocks. Each chunk boundary lands wherever it lands, and three places break a parser that treats every chunk as a fresh start:\n\n- **Inside a quoted field.** The quoted state has to carry over to the next chunk.\n- **Between the two characters of a pair.** A chunk ending in `\\r` may be the first half of CRLF. A chunk ending in `\"` inside quotes might be a closing quote, or the first half of `\"\"`. You can't tell until the next character arrives, so hold it back.\n- **Inside a character.** `✓` is three bytes. Decode each chunk on its own and the pieces become `U+FFFD`. `decoder.decode(chunk, { stream: true })` keeps an unfinished sequence for the next call, and a final `decoder.decode()` flushes it.\n\nBuild `createParser()` returning `{ feed(chunk), end() }`. `feed` takes a `Uint8Array` and returns the records that **completed** in it. `end()` returns the last record and throws if a quote is still open. Your `parseCSV` from the first lesson is in the file for comparison: whatever the chunk sizes, the records must come out identical.",
        steps: [
          { text: "Records come out of `feed` as soon as their line break arrives, `end()` flushes the last one, and one big chunk gives what `parseCSV` gives.",
            test: R`
var enc = function (s) { return new TextEncoder().encode(s); };
var p = createParser();
T.eq(p.feed(enc('id,note\r\n1,')), [['id', 'note']], 'feed returns each record as soon as its line break arrives and holds the unfinished one');
T.eq(p.feed(enc('x\r\n2,y')), [['1', 'x']], 'The held record finishes when the rest of it arrives');
T.eq(p.end(), [['2', 'y']], 'end() flushes the last record, which had no line break');
var q = createParser();
T.eq([].concat(q.feed(FILE), q.end()), parseCSV(new TextDecoder().decode(FILE)), 'The whole file fed in one chunk gives exactly what parseCSV gives');
` },
          { text: "Splits in the worst places: between CR and LF, between the quotes of `\"\"`, and inside quoted fields.",
            test: R`
var text = new TextDecoder().decode(FILE);
var want = parseCSV(text);
var run = function (cuts) {
  var p = createParser(), got = [], last = 0;
  cuts.concat([FILE.length]).forEach(function (c) { got = got.concat(p.feed(FILE.slice(last, c))); last = c; });
  return got.concat(p.end());
};
T.eq(run([text.indexOf('\r\n') + 1]), want, 'Split between CR and LF: a CR at the end of a chunk is not a line break yet');
T.eq(run([text.indexOf('""hi') + 1]), want, 'Split between the two quotes of an escape: a quote at the end of a chunk might be the first half of one');
T.eq(run([text.indexOf('a, b') + 2]), want, 'Split just after a comma inside quotes: the quoted state must survive the chunk');
T.eq(run([text.indexOf('two\r\n') + 4]), want, 'Split inside a line break that belongs to a quoted field');
` },
          { text: "Splits inside a character: `é` cut in half, and `✓` cut into three pieces.",
            test: R`
var text = new TextDecoder().decode(FILE);
var want = parseCSV(text);
var bytePos = function (s) { return new TextEncoder().encode(text.slice(0, text.indexOf(s))).length; };
var run = function (cuts) {
  var p = createParser(), got = [], last = 0;
  cuts.concat([FILE.length]).forEach(function (c) { got = got.concat(p.feed(FILE.slice(last, c))); last = c; });
  return got.concat(p.end());
};
var e = run([bytePos('é') + 1]);
T.expect(JSON.stringify(e).indexOf('\uFFFD') === -1, 'Half of é became U+FFFD. Decode with { stream: true } so an unfinished character waits for the next chunk');
T.eq(e, want, 'Split inside é (2 bytes)');
T.eq(run([bytePos('✓') + 1, bytePos('✓') + 2]), want, 'Split twice inside ✓ (3 bytes)');
` },
          { text: "200 runs with random chunk sizes from 1 to 7 bytes all match, and a quote still open at `end()` throws.",
            test: R`
var want = parseCSV(new TextDecoder().decode(FILE));
var seed = 20260915;
var rnd = function () { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
for (var trial = 0; trial < 200; trial++) {
  var p = createParser(), got = [], at = 0, sizes = [];
  while (at < FILE.length) {
    var n = 1 + Math.floor(rnd() * 7);
    sizes.push(n);
    got = got.concat(p.feed(FILE.slice(at, at + n)));
    at += n;
  }
  got = got.concat(p.end());
  T.eq(got, want, 'Run ' + trial + ' with chunk sizes ' + sizes.join(' ') + ' gave different records');
}
var bad = createParser();
var msg = null;
try { bad.feed(new TextEncoder().encode('1,"open')); bad.end(); } catch (err) { msg = String(err.message); }
T.expect(msg !== null && /unterminated/i.test(msg), 'A quote still open when the input ends is an error raised by end(). Got: ' + msg);
` }
        ],
        files: [
          { name: "script.js", content: u3File(R`
function createParser() {
  return {
    // Decode and parse every chunk as if it were a whole file.
    feed(chunk) { return parseCSV(new TextDecoder().decode(chunk)); },
    end() { return []; }
  };
}
`) }
        ],
        hints: [
          "Move `parseCSV`'s variables (`record`, `field`, `quoted`, `afterQuote`, `started`, `line`) into `createParser`, so they live between calls. Add `buf` for decoded text not consumed yet, and `out` for records finished during this call.",
          "`feed(chunk)`: `buf += decoder.decode(chunk, { stream: true })`, using one `TextDecoder` created once. `end()`: `buf += decoder.decode()`. Both then run the same loop over `buf` and return `out`, resetting it to `[]`.",
          "In the loop, if the character is `\"` or `\\r` and it's the last one in `buf`, stop (unless this is `end()`), and keep it with `buf = buf.slice(i)`. The next feed decides what it was.",
          "Only `end()` checks for an unterminated quote and pushes the final record."
        ],
        solution: {
          "script.js": u3File(R`
function createParser() {
  const decoder = new TextDecoder("utf-8");
  let buf = "";              // decoded text not consumed yet
  let record = [], field = "", out = [];
  let quoted = false, afterQuote = false, started = false, line = 1;

  function fail(msg) { throw new SyntaxError("line " + line + ": " + msg); }
  function endField() { record.push(field); field = ""; afterQuote = false; }
  function endRecord() { endField(); out.push(record); record = []; started = false; }

  function run(final) {
    let i = 0;
    while (i < buf.length) {
      const c = buf[i], next = buf[i + 1];
      // A trailing quote could be "" or a closing quote; a trailing CR could be CRLF. Wait.
      if ((c === '"' || c === "\r") && next === undefined && !final) break;
      if (quoted) {
        if (c === '"') {
          if (next === '"') { field += '"'; i += 2; continue; }
          quoted = false; afterQuote = true; i++; continue;
        }
        if (c === "\n") line++;
        field += c; i++; continue;
      }
      if (c === ",") { endField(); started = true; i++; continue; }
      if (c === "\r" && next === "\n") { endRecord(); line++; i += 2; continue; }
      if (c === "\n") { endRecord(); line++; i++; continue; }
      if (afterQuote) fail("unexpected " + JSON.stringify(c) + " after a closing quote");
      if (c === '"') {
        if (field !== "") fail("a quote inside an unquoted field");
        quoted = true; started = true; i++; continue;
      }
      field += c; started = true; i++;
    }
    buf = buf.slice(i);
    if (final) {
      if (quoted) fail("unterminated quoted field");
      if (started || field !== "" || record.length) endRecord();
    }
    const done = out;
    out = [];
    return done;
  }

  return {
    feed(chunk) { buf += decoder.decode(chunk, { stream: true }); return run(false); },
    end() { buf += decoder.decode(); return run(true); }
  };
}
`)
        }
      },

      {
        id: "etl-u1-4",
        title: "JSON Lines, and the line number that saves an hour",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        brief: "JSON Lines (`.jsonl`) is one JSON value per line. Event exports, log shippers and bulk APIs use it because a file can be appended to and read one line at a time. The format has few rules (jsonlines.org):\n\n- UTF-8, with lines separated by `\\n`. A `\\r` before it is harmless, since `JSON.parse` ignores surrounding whitespace.\n- Every line is one valid JSON value. Usually an object, but `null` and arrays count too.\n- **Blank lines are not allowed.** A line break after the last value is recommended, and it doesn't create a blank line.\n\nThe starter treats the file as one big array. A single line cut off mid-write takes down every row, and the error says `Unexpected token` with no idea where.\n\nParse **line by line** instead. Good lines go into `rows`. Each bad line becomes `{ line, message }`, with its line number counted from 1 and the parser's message, and the lines after it still load. Whether a batch with errors should load at all is Unit 3's question. This lesson makes sure the answer can be based on facts.",
        steps: [
          { text: "A clean file loads: CRLF is fine, the final line break is optional, and an empty file has no rows.",
            test: R`
var r = parseJSONL('{"id":1}\r\n{"id":2}\r\n{"id":3}\r\n');
T.eq(r.rows, [{ id: 1 }, { id: 2 }, { id: 3 }], 'Three lines give three rows, and CRLF is fine because JSON.parse ignores the trailing CR');
T.eq(r.errors, [], 'A clean file has no errors');
T.eq(parseJSONL('{"id":1}').rows, [{ id: 1 }], 'The final line break is recommended but not required');
T.eq(parseJSONL('').rows, [], 'An empty file has no rows');
` },
          { text: "One broken line costs one row: the rest of `EVENTS` loads, and the error names line 3.",
            test: R`
var r = parseJSONL(EVENTS);
T.eq(r.rows.map(function (x) { return x.id; }), [1, 2, 4], 'The good lines still load when one line is broken');
T.eq(r.errors.length, 1, 'One broken line gives one error');
T.eq(r.errors[0].line, 3, 'The error says which line, counting from 1');
T.expect(typeof r.errors[0].message === 'string' && r.errors[0].message.length > 0, 'Keep the parser message so the person reading it knows what was wrong');
` },
          { text: "Blank lines in the middle are errors (a line of spaces too), and any JSON value is a valid line.",
            test: R`
var r = parseJSONL('{"a":1}\n\n{"a":2}\n   \n');
T.eq(r.rows, [{ a: 1 }, { a: 2 }], 'Blank lines hold no value');
T.eq(r.errors.map(function (e) { return e.line; }), [2, 4], 'A blank line in the middle is an error under JSON Lines and so is a line of spaces');
T.expect(/blank/i.test(r.errors[0].message), 'Say the line was blank rather than reporting a JSON syntax error');
T.eq(parseJSONL('null\n[1,2]\n"x"\n').rows, [null, [1, 2], 'x'], 'Any JSON value is a valid line including null');
` },
          { text: "Line numbers stay exact deep into a 1,000-line file, and row order survives the gaps.",
            test: R`
var lines = [];
for (var i = 1; i <= 1000; i++) lines.push(i === 17 || i === 500 || i === 1000 ? '{"id":' + i + ',}' : '{"id":' + i + '}');
var r = parseJSONL(lines.join('\n') + '\n');
T.eq(r.errors.map(function (e) { return e.line; }), [17, 500, 1000], 'Line numbers stay exact deep into the file');
T.eq(r.rows.length, 997, 'Every other line loaded');
T.eq(r.rows[16].id, 18, 'Row order is preserved around a bad line');
` }
        ],
        files: [
          { name: "script.js", content: u4File(R`
function parseJSONL(text) {
  // One bad line and the whole file is gone, with no line number.
  const rows = JSON.parse("[" + text.trim().split("\n").join(",") + "]");
  return { rows: rows, errors: [] };
}
`) }
        ],
        hints: [
          "Split on `\"\\n\"`. If the last element is `\"\"`, that came from the final line break, so `pop()` it.",
          "Loop with the index: the line number is `i + 1`. A line whose `trim()` is empty is `{ line: i + 1, message: \"blank line\" }`.",
          "Everything else goes through `JSON.parse` inside `try`. On success push the value to `rows`; in `catch` push `{ line: i + 1, message: e.message }`."
        ],
        solution: {
          "script.js": u4File(R`
function parseJSONL(text) {
  const lines = text.split("\n");
  if (lines[lines.length - 1] === "") lines.pop();  // the final terminator, not a blank line
  const rows = [], errors = [];
  lines.forEach((raw, i) => {
    if (raw.trim() === "") { errors.push({ line: i + 1, message: "blank line" }); return; }
    try { rows.push(JSON.parse(raw)); }
    catch (e) { errors.push({ line: i + 1, message: e.message }); }
  });
  return { rows: rows, errors: errors };
}
`)
        }
      },

      {
        id: "etl-quiz-1",
        title: "Unit 1 quiz: Reading files",
        kind: "quiz", xp: 10,
        brief: "CSV quoting, encodings and the BOM, chunked input and JSON Lines. 80% to pass.",
        questions: [
          { q: "Why can't a CSV importer split the file into lines before it looks at commas?",
            choices: ["Windows and Unix use different line endings, so the split would leave a stray CR at the end of every row", "A quoted field may contain a line break, and only a quote-aware parser can tell it apart", "Splitting a large string first allocates too much memory for a nightly export", "RFC 4180 forbids line breaks anywhere except between the records of a file"],
            answer: 1, explain: "Inside double quotes, a line break is data. Splitting on line breaks first cuts that record in two before the quotes are ever seen. Stray CRs are real but easy to trim, memory isn't the issue, and RFC 4180 explicitly allows line breaks inside quoted fields." },
          { q: "A CSV saved from Excel as \"CSV UTF-8\" is read in Node with `readFileSync(path, \"utf8\")`. Every `row.id` is `undefined`, and the first header prints as `id`. What happened?",
            choices: ["The download was interrupted, which corrupted the first byte; fetch the file again", "Windows line endings leaked into the header row, and calling trim() on each header fixes it", "Excel added a zero-width space in front of the first column to protect formulas", "The string starts with a byte order mark, U+FEFF, which has to be stripped"],
            answer: 3, explain: "Excel writes the bytes EF BB BF at the start of a UTF-8 CSV. A TextDecoder removes them, but a string read as utf8 in Node keeps them as U+FEFF, which is invisible when printed. The first header is really \"\\uFEFFid\", so `row.id` finds nothing. Strip one U+FEFF from the start." },
          { q: "An import shows `caf�` where the source system says `café`. What does the `�` (U+FFFD) tell you?",
            choices: ["The bytes weren't valid in the encoding the decoder assumed, so it substituted a replacement", "The terminal's font has no glyph for é, but the stored value is still correct", "The é was stored as two bytes and one was lost in transit, so the file is truncated beyond repair", "JSON.stringify escaped a character it could not print"],
            answer: 0, explain: "U+FFFD is what a lenient decoder writes when bytes don't form a valid character in its encoding, typically a windows-1252 file read as UTF-8. The original character is discarded from the decoded text, so detect the encoding from the bytes before decoding." },
          { q: "A chunked CSV parser gets a chunk whose last character is `\"`, and it's inside a quoted field. Why hold that quote back instead of processing it?",
            choices: ["Quotes are multi-byte characters in UTF-8, so the chunk may have cut this one in half", "The TextDecoder drops trailing quotes unless the stream option is set on every call", "It might be the first half of a doubled quote, and only the next character decides", "Holding it keeps memory flat, because quoted fields can be arbitrarily large"],
            answer: 2, explain: "Inside quotes, `\"` followed by `\"` is one literal quote, and `\"` followed by anything else closes the field. At a chunk boundary the next character hasn't arrived, so the parser waits. The same goes for a trailing `\\r` that may be half of CRLF. A quote is one byte in UTF-8." },
          { q: "A JSON Lines export has two million lines, and line 1,204,331 was cut off mid-write. What should the parsing step do?",
            choices: ["Stop at the first bad line so that no partial data is loaded, and report its byte offset", "Skip bad lines silently, since one row in two million is statistically irrelevant", "Wrap the file in brackets and parse it as one JSON array to find the error", "Load the good lines, and record line 1,204,331 with the parser's message"],
            answer: 3, explain: "Parsing should keep going and report precisely: the good rows plus `{ line, message }` for each bad one. Whether the batch as a whole is acceptable is a separate decision (Unit 3's threshold). Stopping throws away information, silence hides it, and one big array gives no line number at all." },
          { q: "What does `{ stream: true }` do in `decoder.decode(chunk, { stream: true })`?",
            choices: ["It keeps an unfinished multi-byte sequence for the next call instead of emitting U+FFFD", "It makes the decoder skip the byte order mark on every chunk rather than only on the first chunk", "It switches the decoder into fatal mode, so invalid bytes throw instead of being replaced", "It lets the decoder avoid copying each chunk into a new string, so large files decode faster"],
            answer: 0, explain: "A character like ✓ is three bytes, and a chunk boundary can fall between them. With `stream: true` the decoder holds the partial sequence and completes it on the next call; a final `decode()` with no arguments flushes it. Fatal mode is a separate constructor option." }
        ]
      }
    ]
  });
})();
