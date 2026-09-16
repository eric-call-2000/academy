# Data Pipelines & ETL — getting data in without getting it wrong (id: `etl`, prefix: `etl`, icon 🚰, level Advanced, 8 units)

## Verdict
STANDALONE, built on the stub's blurb nearly as written. The course needs one small piece of new engine, a `warehouse` harness: tables whose keys, types and transactions the grader enforces, plus fault injection that can kill a load between two row writes. Everything else is plain `kind:"js"` on the existing `lesson.clock`. No shell, no simulator the size of gitsim, dockersim or authsim.

Why it isn't covered already: of 628 built items, the only ones that touch this material are `debug-u3-p` (a CSV row importer that breaks on a quoted comma), `db-u4-1` (build rollback), and `async-u5` "Timeout & retry" (a `retry(fn, times)` loop). A search of every unit file finds `idempot`, `watermark`, `quarantine`, `dead letter`, `JSON Lines` and `formula injection` in no graded step. Yet these are what junior data-engineering screens probe once SQL is done: idempotent reruns, incremental loads and late data, backfills, schema drift, data-quality checks and quarantine, and SCD Type 2 (Dataquest Q19–Q24; Tredence and DataInterview lists, 2026).

Why a harness and not the learner's own `Map`: the insight of the course's middle is that *a load which crashes halfway and is re-run must leave the table exactly as one clean run would*. Proving it means killing the load from outside the learner's code, at a write they don't choose, then running it again. A table the learner implements can't be crashed honestly, and its "unique key" is whatever they wrote. The Docker/auth rule carries over: **fake payloads, never rules.** Rows, files and source systems are fixtures. Key uniqueness, column types, transaction atomicity and the crash are enforced for real by the harness.

Why JavaScript, when real data-engineering screens use Python and SQL: CodeLab is JS-only, and every rule taught here (RFC 4180, idempotent writes, watermarks, SCD2 invariants) is language-neutral. Each warehouse call's brief names the SQL it stands for (`upsert` → `MERGE`/`INSERT … ON CONFLICT`; `replacePartition` → `DELETE … WHERE day = ?` + `INSERT` in one transaction). This is flagged under Risks, not hidden.

Scope carved OFF, each given a cheatsheet card and no graded step: Spark and distributed shuffles; Kafka and true streaming (exactly-once semantics, consumer offsets); Airflow/Dagster/dbt as products (their *ideas*, DAGs, logical dates and incremental models, are taught; their config isn't); columnar formats (Parquet, Avro, Arrow); cloud warehouse specifics (BigQuery partitions, Snowflake streams); CDC from database logs (Debezium); and schema registries.

Path position: directly after Database Mastery, which the stub's Quality & Data track slot already gives it. The course leans on `db` (keys, normalization, transactions), `nodejs-u2` (streams, which U1 contrasts rather than re-teaches), `async-u5` (retry) and `debug-u3-p` (the split-on-comma bug). Level: Advanced, as the stub has it, since `db` and `nodejs` are both Advanced.

## Size
40 items: 29 lessons, 3 projects, 8 quizzes → **4 credits {data 4}**, exactly the stub's `plannedCredits`, so `positions.js` needs no change. Advertise 8h.

How that's checked: `validate.js` models each item at its `mins` (defaults 10 / 30 / 5) and derives credits as `Math.round(modelHours / 2)`. At the flat defaults, 40 items come to 420 min, exactly the floor for an honest 4. At the `mins` sibling courses use (12 per lesson, 40 per project), they come to 508 min ≈ 8.5h, still 4. Set real `mins` per lesson and confirm the derived credit; if lessons are cut below 420 modelled minutes, drop to 3 and re-check the sheet (below).

**Position impact, verified against today's phase 0 output:** Junior Data Engineer currently reads `data 3/6 (short 3, roadmap +4) · requires unwritten etl`. With `etl` built at 4 data credits, data becomes 7/6 and the sheet's last missing course is gone, so it should flip to reachable (**6 of 7** positions). One subtlety: its eight required courses total only 32 credits and fnd 7 against a floor of 8, so a learner closes it with an elective carrying ≥1 fnd (e.g. `debug`, fnd 1 + qa 3 → 36). That's the sheet working as designed (total = required + ~3); no change needed.

## Engine needs
About 700 lines total, in three pieces. Piece 1 is the only real engine work.

1. **`harnessWarehouse` in runner.js — ~300 lines, gated on `lesson.warehouse`.** REQUIRED BY: U4, U5, U7, both U8 projects, the U4 project.
Declared per lesson: `warehouse: { tables: { orders: { key: ["order_id"], columns: { order_id: "text", qty: "int", day: "date", amount_cents: "int", note: "text?" } } }, seed: { orders: [...] } }`. Injected as a global `db`:
   - `db.insert(table, rows)` — throws `DuplicateKey` on a key collision (with the key named). Outside a transaction, rows before the collision stay written, which is the real behaviour of autocommit and the point of U4-1.
   - `db.upsert(table, rows)` — insert-or-replace on the key. `db.delete(table, pred)`, `db.select(table, pred?)` (returns deep copies, so learners can't mutate the table through a result).
   - `db.tx(fn)` — every write inside commits together or not at all. A throw rolls back; nesting is refused with an error (keeps the model exact).
   - Column types enforced on every write: `int` (safe integer), `text`, `date` (`YYYY-MM-DD` only), `timestamp` (ISO 8601 with `Z` or offset only), `bool`; a trailing `?` allows `null`. A wrong type throws `TypeMismatch` with the column. This is what a strict warehouse does, and it's what makes U2's type work load-bearing.
   - Fault injection, grader-only: `T.failAfterWrites(n)` throws `ConnectionLost` on the (n+1)th row write; inside `db.tx` that rolls the transaction back, outside it leaves n rows. `T.rows(table)`, `T.writes()` (count), `T.clearFaults()`.
   - **Contract first, as with gitsim/dockersim/authsim:** `tools/test-warehouse.js` (~40 cases, written before the harness) freezes this surface: duplicate-key partial-write semantics outside tx, rollback on throw and on injected fault, type rejections per column kind, deep-copy selects, nested tx refused. Runs as validate.js **phase 0j**.

2. **validate.js gates — ~25 lines.** Extend the auth real-clock gate from `auth-` to `etl-` (every incremental, retry and logical-date lesson needs `lesson.clock`). An `etl-` lesson calling `db.insert|upsert|delete|select|tx` must set `warehouse` unless it defines `db` itself (the `node: true` precedent); `warehouse` requires `kind: "js"`. A `T.failAfterWrites` call without `warehouse` fails.

3. **Fixtures, not engine — `etl/fixtures.js` helpers inlined into starters (~150 lines of data).** Messy CSV and JSON Lines as strings and `Uint8Array`s: a UTF-8 BOM, a windows-1252 export (`café` as byte `0xE9`), CRLF, embedded newlines in quoted fields, `""` escapes, 17-digit IDs, `07920` zip codes, `1.234,50` amounts, `03/04/2026`-style dates. Generated deterministically from a seed, like `debug-u3-p`'s `exportFile()`. `TextDecoder` (including `windows-1252`, per the WHATWG Encoding Standard) is available in the Worker, so encoding lessons use the real decoder. **Verify with a validate.js Chromium probe** before authoring U1-2.

EXPLICITLY NOT NEEDED: shell.js, a SQL interpreter, real `Date.now()`, the network, a Worker transpile change, or a new simulator loaded via index.html.

## Teachable today
U1, U2, U3 and U6 need nothing beyond the clock-gate extension: they're pure transform code on fixtures, and U6's DAG runner uses the existing `lesson.clock`. That's 20 items. Recommended tranches:
- **Tranche A — gate extension + fixtures, then U1, U2, U3, U6.** 20 items, no warehouse. Parsing, typing, validation/quarantine and orchestration.
- **Tranche B — `harnessWarehouse` + test-warehouse.js, then U4, U5, U7, U8.** 20 items. Don't close the Data sheet until B lands: idempotent loads and incremental updates are the first thing a screener asks after SQL.

## Overlaps
Six collisions, each with a deliberate boundary.

1. **`debug-u3-p` "The import that fails at row ???".** Its `parseRowV1` is `line.split(",")`, and the learner's fix handles a quoted comma. AVOIDANCE: U1-1 never re-grades the quoted comma alone. It opens by naming that project, then goes where a *line*-based parser can't: a quoted field containing a newline (so `text.split("\n")` is already wrong before any comma is seen), `""` escapes, CRLF, and a final record with no line break, all per RFC 4180 §2. A checkpoint feeds that project's minimal bad line and expects it to parse, as the handshake between the two courses.
2. **`db-u4-1` "ACID transactions: atomicity".** The learner builds `rollback()`. AVOIDANCE: this course never implements a transaction. `db.tx` is given, and U4 grades the *pipeline-level* consequence: what a crash between row 400 and 401 leaves behind, with and without it.
3. **`async-u5` "Timeout & retry".** `retry(fn, times)` with no backoff and no error classification. AVOIDANCE: U6-2 imports the idea by name and grades only what's new: retry transient errors only (a `ValidationError` is never retried), exponential backoff with jitter measured on the fake clock, a dead-letter record after N attempts, and the argument that a retry is only safe because U4 made the task idempotent.
4. **`nodejs-u2` "Streams & Buffers".** Mock `Readable`/`Transform` classes. AVOIDANCE: U1-3 doesn't build a stream class. It builds a *push parser* (`feed(chunk)` / `end()`) and is graded on the chunk-boundary cases a stream exposes: a quoted field, a CRLF pair and a multi-byte UTF-8 character each split across two chunks. The brief says this is what goes inside nodejs-u2's `transform()`.
5. **`db-u2` keys and normalization.** AVOIDANCE: natural vs surrogate keys are assumed. U7 uses them for SCD2 without re-teaching normal forms.
6. **Web Security (`sec`) has no CSV injection.** Checked: no unit mentions formula injection. AVOIDANCE of scope creep rather than overlap: exactly one checkpoint (U7-4, writing CSV for Excel) neutralises leading `=`, `+`, `-`, `@`, tab and CR per OWASP, cited, and it stays one checkpoint.

## Units

### 1. Unit 1 — Reading files honestly
A file is bytes until you prove otherwise. RFC 4180 as a state machine, encodings and the BOM, parsing a file that arrives in chunks, and JSON Lines that tell you which line broke.

Lessons:
  - CSV is not `split(",")`: RFC 4180 as a state machine
  - Bytes, encodings and the BOM
  - A parser that survives chunk boundaries
  - JSON Lines, and the line number that saves an hour
  - Unit 1 quiz: Reading files

Graded how:
All `js`. (1) `parseCSV(text)` → array of string arrays. Checks: a quoted field with an embedded CRLF is ONE record; `"He said ""hi"""` → `He said "hi"`; spaces inside fields preserved (§2 rule 4); final record with and without a trailing line break; a stray quote inside an unquoted field → an error naming line and column, not silent garbage. `debug-u3-p`'s minimal bad line parses. (2) `decode(bytes)`: strips a UTF-8 BOM (the first header must equal `id`, not `﻿id`); a windows-1252 fixture decoded as UTF-8 yields `U+FFFD`, detected and re-decoded as windows-1252 so `café` survives; the grader asserts the detection runs on the bytes, not on a hard-coded filename. (3) `createParser()` with `feed(chunk)`/`end()`: the grader replays the fixture in random chunk sizes (seeded, 1–7 bytes), and every split must yield records identical to one-shot parsing, including splits inside `""`, between `\r` and `\n`, and inside a 3-byte UTF-8 character (`TextDecoder` with `{stream: true}`). (4) `parseJSONL(text)`: blank lines are errors per jsonlines.org, CRLF tolerated, and a malformed line reports `line 812` with the rest still parsed into `{rows, errors}`.

### 2. Unit 2 — Types on purpose
Keep every value a string until you decide what it is. IDs that aren't numbers, numbers that aren't in your locale, dates that mean two different days, and the six ways a file says "nothing".

Lessons:
  - IDs are strings: leading zeros and 17-digit numbers
  - Numbers with commas, currencies and cents
  - Dates: one string, two days
  - Null has many spellings
  - Unit 2 quiz: Types

Graded how:
All `js`. (1) A converter spec per column. Checks: `07920` stays `"07920"`; `12345678901234567` stays exact (the naive `Number()` version is shown rounding to `…568`, and the checkpoint expects that loss on the starter); a column declared `int` rejects `1e3` and `12.0`. (2) `parseAmount("1.234,50", "de")` → `123450` cents; `"$1,234.50"` with `en` → `123450`; money is integer cents, and a checkpoint asserts `0.1 + 0.2`-style float sums never appear (the result is an integer). (3) The MDN rule made concrete: `new Date("2026-03-08")` is UTC midnight, `new Date("2026-03-08T00:00")` is local. The learner writes `parseDay(str, format)` returning `YYYY-MM-DD` strings with no `Date` object at all, and `detectDayOrder(column)` that decides DD/MM vs MM/DD from values > 12 and returns `"ambiguous"` when every value is ≤ 12, rather than guessing. (4) `""`, `"NULL"`, `"null"`, `"N/A"`, `"-"` and `"   "` map to `null` per a column's declared list, while the *string* `"None"` in a `name` column survives as a name.

### 3. Unit 3 — Validate, quarantine, and never drop a row silently
Bad rows are data too. Collect every reason a row fails, route it somewhere a human can see it, fail the whole batch when too much is wrong, and notice when the source changed shape.

Lessons:
  - Row contracts: every reason, not the first
  - Quarantine: the row, its line, and why
  - Schema drift: new columns, missing columns, renamed headers
  - Duplicates inside one file
  - Unit 3 quiz: Data quality

Graded how:
All `js`. (1) `checkRow(row, contract)` → list of `{column, rule}` for required, type, range and enum rules; a row with three problems returns three. (2) `runBatch(rows)` → `{good, quarantine}`; each quarantined entry holds the original raw line, line number and reasons. Invariant checked on every fixture: `good.length + quarantine.length === input.length` (nothing vanishes). Then a threshold: over 2% quarantined → the batch throws `BatchRejected` and returns no good rows at all. (3) Header comparison against the contract: an added column → tolerated and reported; a missing required column → fail before any row is read; `amount` renamed `amt` → reported as missing + added, not auto-mapped. (4) Exact duplicate lines collapse; two versions of one `order_id` keep the latest `updated_at`, and a tie on `updated_at` is quarantined as a conflict, not decided by file order.

### 4. Unit 4 — Loading, and loading again
The run that crashed at 3 a.m. will be re-run at 9. Make that safe. Built on `warehouse`.

Lessons:
  - The lab: rerun an append and count the duplicates
  - Upsert on the natural key
  - Replace a partition in one transaction
  - Crash halfway, run again
  - Project: Fix the loader
  - Unit 4 quiz: Idempotent loads

Graded how:
All `js` with `warehouse`. (1) The starter `db.insert`s a day's orders. Running it twice with the key removed from the table spec doubles revenue (the checkpoint expects exactly that); with the key restored, the second run throws `DuplicateKey` after partial writes. It's labelled a lab. (2) `load(rows)` with `db.upsert`: run 1, 2 and 3 times → `T.rows("orders")` identical, and a corrected amount in a re-sent file updates the row. (3) `loadDay(day, rows)` replaces every row for that day inside `db.tx`: a re-sent file with one order *removed* removes it (upsert alone can't), and other days are untouched. (4) `T.failAfterWrites(400)` on a 1,000-row load, then a clean rerun: the table equals a single clean run, byte for byte, and no half-day is ever observable. The version without `tx` is shown leaving 400 rows. PROJECT (`etl-u4-p`): a loader with four planted flaws (append instead of upsert; delete and insert in separate transactions; the partition key taken from `now()` instead of the file's day; a `catch` that swallows `ConnectionLost` and reports success), one checkpoint group per flaw, each proven by a rerun or an injected crash.

### 5. Unit 5 — Incremental loads
Don't reload ten million rows to pick up yesterday's forty. Watermarks, the tie that loses rows, data that arrives late, deletes you never see, and backfills that use the same code.

Lessons:
  - High-watermark on `updated_at`
  - `>` vs `>=`: the tie that loses a row
  - Late-arriving data and the lookback window
  - Deletes the source never tells you about
  - Backfill: same code, older dates
  - Unit 5 quiz: Incremental loads

Graded how:
All `js` with `warehouse` and `clock`. (1) A source API fixture `changesSince(ts)`; the learner stores the watermark in a `meta` table *in the same transaction* as the rows, and a crash between the two (`T.failAfterWrites`) leaves them consistent. (2) Two rows share an `updated_at` and the page boundary falls between them: `>` loses one (the starter checkpoint expects the loss); `>=` plus upsert gets both with no duplicate. (3) An event stamped 2 days ago arrives today: a pure watermark on `event_time` misses it; a 3-day lookback re-reads the window and upserts, and the grader asserts the daily total is corrected. (4) The source hard-deletes a customer; incremental pulls can't see it. A weekly full-key reconciliation marks it `deleted_at`, and a checkpoint asserts the row is soft-deleted, not removed. (5) `run(logicalDay)` for 2026-09-01..07 in any order and any number of times → identical table, and the backfill shares the daily function (asserted by call counting), not a copy.

### 6. Unit 6 — Pipelines that run themselves
A DAG, retries that know which errors are worth retrying, a logical date instead of the wall clock, and an alert when "succeeded" means zero rows.

Lessons:
  - Tasks as a DAG: order, and refusing a cycle
  - Retry what's transient, dead-letter the rest
  - The logical date: run Monday's job on Wednesday
  - Row counts, freshness, and "succeeded with zero rows"
  - Unit 6 quiz: Orchestration

Graded how:
All `js` with `clock`. (1) `plan(tasks)` returns a topological order (any valid one is accepted; the grader checks every edge), runs independent tasks' dependencies first, and throws naming the cycle `a → b → c → a`. A failed task marks its descendants `skipped`, not `failed`. (2) `runWithRetry(task)`: `TransientError` retried at 1s, 2s, 4s (±20% jitter, checked as a range on `now()` via `T.advance`); `ValidationError` never retried; after 4 attempts a dead-letter entry is written with the last error. References `async-u5` by name. (3) Every task receives `{logicalDay}`; the validate.js gate forbids `Date.now`, and a checkpoint runs `2026-09-14`'s job with the clock set to the 16th and expects the 14th's partition. (4) `checkRun(stats, history)`: zero rows on a day whose 14-day median is 10,000 → alert; latest `updated_at` older than 26h → stale; an actual quiet holiday listed in a calendar → no alert.

### 7. Unit 7 — History, and handing data back out
Which address did this customer have when they placed the order? Type 1 overwrites, Type 2 remembers, and a point-in-time join uses it. Then writing CSV that survives Excel.

Lessons:
  - SCD Type 1 vs Type 2
  - Type 2 by the book: surrogate key, effective, expiry, current
  - Point-in-time joins
  - Writing CSV people will open in Excel
  - Unit 7 quiz: History & export

Graded how:
All `js` with `warehouse` (lessons 1–3). (1) The same change applied both ways; a report "revenue by customer region" shows why Type 1 rewrites last year's numbers. (2) `applyChanges(dim, changes)` per Kimball: new surrogate key, `effective_from`, `effective_to` (`9999-12-31` for current), `is_current`. Invariants graded after every batch: exactly one current row per natural key, no overlapping ranges, no gaps; an unchanged attribute produces no new version; re-applying the same batch changes nothing (U4's rule again). (3) `regionAt(customerId, day)` and a fact join by order date: an order from March joins the March address, not today's. (4) `toCSV(rows)`: quotes fields containing `,` `"` CR LF, doubles quotes, keeps `07920` as text, and neutralises cells beginning `=`, `+`, `-`, `@`, tab or CR per OWASP. The round trip through U1's `parseCSV` returns the input exactly (except the neutralised cells, which are checked separately).

### 8. Unit 8 — Two projects
No new ideas: the whole course applied twice.

Lessons:
  - Project: The nightly orders pipeline
  - Project: Customer history, incrementally
  - Final quiz: Data pipelines

Graded how:
P1 (`warehouse`, `clock`; ~9 checkpoints): three days of messy CSV exports (BOM, windows-1252 day, embedded newlines, a renamed column on day 3) through parse → type → validate/quarantine → partition load. Checks: quarantine accounts for every rejected line; day 3 fails loudly on the renamed column; a crash mid-load on day 2 plus rerun matches a clean run; re-running all three days changes nothing; totals in integer cents. P2 (~8 checkpoints): a paged `changesSince` feed into an SCD2 customer dimension. Checks: the page-boundary tie, a late change inside the lookback, a hard delete caught by reconciliation, SCD2 invariants after every run, a 7-day backfill in reverse order equal to the forward run, and a point-in-time order report.

## Projects
- Project: Fix the loader (etl-u4-p) — four planted flaws (append, split transactions, `now()` partition, swallowed crash); each checkpoint group is a rerun or an injected crash that must stop corrupting the table.
- Project: The nightly orders pipeline (etl-u8-p1) — three days of hostile exports end to end, graded on quarantine accounting, drift, crash-rerun equality and idempotent backfill.
- Project: Customer history, incrementally (etl-u8-p2) — watermark, lookback, delete reconciliation and SCD Type 2 invariants on a paged change feed.

## Risks
- **Language mismatch with real screens.** Junior DE interviews are Python + SQL; this course is JS. Mitigation: every rule is language-neutral, every warehouse call's brief shows the SQL it stands for, and the course blurb says "the rules, in the language CodeLab runs". The open flag already recorded for the Data sheet stays open; this course doesn't close it.
- **Time zones on the learner's machine.** The Worker runs in the learner's local zone, and a machine set to UTC makes the local-vs-UTC bug invisible. Mitigation: no checkpoint may depend on the grader's zone. U2-3 asserts the learner's `parseDay` never constructs a `Date` (source check plus a poisoned `Date` constructor in that step), instead of asserting a wrong local value. The brief demonstrates the bug in prose with both outputs shown.
- **Harness fidelity.** Real warehouses differ (autocommit defaults, MERGE semantics, type coercion). Mitigation: the harness picks the *strict* behaviour everywhere (no coercion, no nested tx), `test-warehouse.js` freezes it, and briefs say "a strict warehouse" rather than naming a product.
- **Credit arithmetic at the floor if cut.** 420 modelled minutes at default `mins` is exactly the floor for 4. Real `mins` put it near 8.5h, but cutting two lessons without raising `mins` makes 4 dishonest. If cuts happen, recompute; at 3 credits the Data sheet's data floor (6) is still met (db 3 + etl 3), so reachability survives.
- **Fixture bloat.** Messy files written inline would be unreadable. Mitigation: seeded generators (the `debug-u3-p` precedent) with the planted defects listed at the top of each fixture.
- **Scope creep into streaming and tools.** Kafka, Spark, Airflow, dbt all feel adjacent. Cheatsheet cards only; the ideas they implement are what's graded.

## Sources
- RFC 4180 — CSV format (§2 rules 1–7; embedded CRLF/quote/comma must be quoted; `""` escape; spaces are part of a field): https://www.rfc-editor.org/rfc/rfc4180
- JSON Lines (UTF-8, no BOM, `\n` separator with `\r\n` tolerated, blank lines invalid, `.jsonl`): https://jsonlines.org/
- MDN — `Date.parse()` (date-only forms are UTC; date-time without offset is local; non-standard strings implementation-specific): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
- Apache Airflow — Best Practices (tasks like transactions; UPSERT not INSERT on rerun; read a data interval, not "latest"; avoid `now()`): https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html
- Kimball Group — Type 2: Add New Row (surrogate key, row effective/expiration dates, current row indicator): https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/type-2/
- OWASP — CSV Injection (leading `=`, `+`, `-`, `@`, tab, CR, LF; mitigations and their Excel caveats): https://community.owasp.org/attacks/CSV_Injection
- dbt incremental models in production (unique_key merge, lookback for late arrivals, periodic full refresh): https://www.datalane-data.blog/blog/dbt-incremental-models-in-production/ and https://www.vertexdataconsulting.com/blog/dbt-incremental-models-guide
- Dead-letter / quarantine patterns and core quality checks (key uniqueness, nulls, schema drift handling): https://oneuptime.com/blog/post/2026-02-13-etl-best-practices/view and https://www.bigeye.com/blog/strategies-for-handling-bad-data-in-data-pipelines
- SCD2 validation invariants (one current row per key, non-overlapping ranges): https://www.analyticsengineering.com/resources/slowly-changing-dimensions-type-2-explained
- CSV import pitfalls (BOM, leading zeros, 15-digit precision, date reinterpretation): https://www.filefeed.io/blog/common-csv-import-errors
- Junior DE interview coverage (ETL vs ELT, DAGs, idempotency, backfills, data quality): https://www.dataquest.io/blog/data-engineering-interview-questions-and-answers/ ; https://www.tredence.com/blog/data-engineer-interview-questions-2026 ; https://www.datainterview.com/blog/etl-and-data-pipelines-interview-questions
- Built-catalog overlap checked 2026-09-15 by searching every unit file: `debug-u3-p` (parseRowV1 = `split(",")`), `db-u4-1` (rollback), `async-u5` "Timeout & retry" (no backoff), `nodejs-u2` (mock streams); no unit mentions idempotency, watermarks, quarantine, JSON Lines or formula injection. Data sheet status read from phase 0 on main 2c0c78a.
