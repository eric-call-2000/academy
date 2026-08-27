# Data & Databases

## Verdict
Standalone course — id `data`, prefix `data`, icon 🗄️, level Intermediate, slotted as Course 7.5 (between Back-End Foundations and Full-Stack Capstone). Three reasons it does not fold in. (1) Size: srv is already 38 items / 8h; bolting 40 more on makes a 78-item, 17h course, larger than anything in the catalog and it would bury modeling behind routing. (2) Dependency direction: Units 1–5 need zero HTTP. Modeling and SELECT depend only on Learn JavaScript (Course 4), so folding into srv would gate the most beginner-accessible material in the catalog behind the second-hardest course. (3) It is a different *language*, not a different topic — srv teaches imperative data access (`.filter().sort().slice()`), this teaches declarative. Merging them would blur the one distinction the course exists to draw. The fold-in argument is not zero, though, and I honor it in one place: Unit 8's project is explicitly a *port* of srv/u7's Bookmarks API — same `handleRequest` shape, same HTTP assertions, array store swapped for SQL. That is the seam where the two courses meet, and it belongs in this course rather than srv because it only makes sense once you can already write a JOIN. Recommended catalog blurb framing: "ends by replacing an array with a database inside a real API" — so nobody stops at Unit 5 and thinks they are done.

## Size
40 items, ~9h

## Engine needs
The sandbox lacks a SQL engine — but it also lacked a terminal, and `shell.js` already exists in this repo (444 lines, plain JS, no build step, `kind: "shell"` wired into `runner.js:547` with its own `runShell()`, its own `shellT()` T-builder, its own result-pane renderer, and lesson-level fixture data `lesson.fs` / `lesson.cwd`). So this is not a speculative third runtime; it is the SECOND instance of a pattern that has already shipped. Copy it.

WHAT SHIPS: one new file `db.js` next to `shell.js`, plain `<script src="db.js">` in index.html between shell.js and runner.js. Exports `window.CODELAB.db = { createDB(seed), run(db, sqlText, opts), schema, rows, stats, explain, renderGrid }`.

RUNNER INTEGRATION (~45 lines, a near-verbatim mirror of runShell/shellT): add `runSQL(lesson, files, hooks)` that does `var DB = CODELAB.db; var database = DB.createDB(lesson.db); var result = DB.run(database, files['query.sql'], {maxStatements: 200, maxRowsScanned: 2e6})`, renders `DB.renderGrid(result)` into `hooks.previewEl` as a `<pre class="sql-grid">` (the Result pane becomes a result grid, exactly as it becomes a terminal transcript for shell), streams engine errors to `hooks.onConsole`, builds a `sqlT(database, result)` helper, runs each `steps[i].test` through `new Function("T", …)`, and resolves `{steps, fatal}`. Then one dispatch line: `if (lesson.kind === "sql") return runSQL(...)`. Main thread is safe for the same reason shell.js states in its own comments: the learner types SQL, which is DATA — nothing they write is ever eval'd as JavaScript, so there is no sandbox to escape. It also cannot hang the page: the grammar has no loops, and the two caps above bound every run. Units 1 and 8's JS lessons keep `kind: "js"` and run in the existing Worker unchanged; Unit 8's JS lessons get the db bound via a `lesson.db` injection that mirrors the existing `harnessMock` trick in `buildWorkerSrc` (`"(" + harnessDB.toString() + ")(" + JSON.stringify(lesson.db) + ");"`) — that is a 3-line change, and `harnessDB` must be self-contained like every other stringified harness function.

APP/EDITOR (the part that gets underestimated): `editor.js:langOf()` needs `/\.sql$/i → "sql"` plus an `hlSQL()` in the same style as `hlJS/hlCSS/hlHTML`; `app.js` needs `kind:"sql"` in the three switch points at lines 113, 955, 1069 (chip "SQL", result label "▶ Rows", and the js-only branches). Call it a day of work, separate from the engine.

THE ENGINE ITSELF (~1,400 lines, four parts):
1. `tokenize(sql)` → keyword/ident/number/string/punct tokens, `--` comments, `;` splits. ~120 lines.
2. `parse(tokens)` → AST, hand-written recursive descent, one function per production (parseStatement / parseSelect / parseFrom / parseJoin / parseExpr with precedence climbing OR < AND < NOT < comparison < additive < multiplicative < unary < primary). ~450 lines.
3. `evaluate(ast, db)` → nested-loop join → WHERE filter → GROUP BY bucket → aggregate → HAVING → project → DISTINCT → ORDER BY → LIMIT/OFFSET, over a database that is a plain JS object `{tables: {name: {columns:[{name,type,constraints}], rows:[[…]], indexes:{}}}}`. ~400 lines.
4. DDL/DML executor + constraint enforcement (NOT NULL, UNIQUE, PK uniqueness incl. composite, CHECK, FK existence on insert/update, FK restrict on delete), snapshot-based BEGIN/COMMIT/ROLLBACK (deep-copy the tables object on BEGIN, restore on ROLLBACK — ~40 lines), a `rowsScanned` / `queries` counter, hash-map indexes consulted only for `col = value` and `col IN (…)`, and a `explain()` that prints "seq scan on events (5000 rows)" vs "index lookup on events.user_id (3 rows)". ~300 lines. Plus ~80 lines of error messages with Levenshtein did-you-mean ("no such column: nmae — did you mean name?").

IN SCOPE (the grammar the lessons are written against, and it must be frozen in writing BEFORE lesson authoring): SELECT with column lists / `*` / expressions / AS; FROM with table aliases; WHERE with `= != <> < <= > >=`, AND/OR/NOT, IS [NOT] NULL, IN (…), BETWEEN, LIKE with % and _; DISTINCT; INNER JOIN and LEFT [OUTER] JOIN with ON (RIGHT JOIN as a cheap flipped-operand reuse); GROUP BY + COUNT(*)/COUNT(col)/SUM/AVG/MIN/MAX + HAVING; ORDER BY with multiple keys and ASC/DESC; LIMIT/OFFSET; INSERT INTO … VALUES (multi-row, auto-filled INTEGER PRIMARY KEY); UPDATE … SET … WHERE; DELETE FROM … WHERE; CREATE TABLE with INTEGER/TEXT/REAL and PRIMARY KEY / NOT NULL / UNIQUE / DEFAULT / CHECK / REFERENCES / table-level FOREIGN KEY and composite PRIMARY KEY; CREATE INDEX; BEGIN/COMMIT/ROLLBACK; scalar helpers ROUND, LOWER, UPPER, `||` concat, CASE WHEN … THEN … ELSE … END; multiple statements per file.

OUT OF SCOPE, deliberately, and the briefs say so (shell.js's own "WHAT IT IS NOT" section is the house precedent for admitting the edge): subqueries of any kind, CTEs/WITH, window functions, UNION/INTERSECT/EXCEPT, FULL OUTER JOIN, CROSS JOIN, views, triggers, ALTER TABLE beyond ADD COLUMN, EXPLAIN cost estimates, real DATE/TIME types (dates are ISO TEXT and string comparison is taught as the practical trick it is), collations, type coercion subtleties, and any notion of a query planner. Anything the lessons need beyond this list is a lesson that gets rewritten, not a parser that grows.

## Teachable today
Unit 1 in full — 5 items, `kind: "js"`, the existing Web Worker, zero engine, zero runner changes. That is the entire modeling foundation the owner said was the point ("modeling is its own skill"), and it is shippable this week: array-of-objects tables, `isUniqueKey`, `findById`, `orphans`, and the by-hand normalization in lesson 4 are all plain JS graded with `T.eq` deep-equality. Unit 8 lesson 4's HTTP half also works today (it is srv/u7's handleRequest verbatim), but its SQL assertions do not, so it does not count.

Nothing else. All 35 remaining items need the engine — say so plainly rather than padding the number. The eight quizzes need no runtime at all, but a quiz without its unit is not a shippable item.

SEQUENCING FALLS OUT OF THE ENGINE PHASES, and each phase ships one complete unit:
- Ship now: Unit 1 (5 items).
- Phase A — tokenizer + parser + SELECT/FROM/WHERE/ORDER BY/LIMIT/DISTINCT/aliases/expressions (~700 LOC) + the runner `runSQL`/`sqlT` mirror + editor `.sql` support → unlocks Units 2 and 3 (10 items). This is the big one; everything after it is incremental.
- Phase B — JOIN, qualified names, ambiguity errors (~200 LOC) → Unit 4 (5 items).
- Phase C — GROUP BY, aggregates, HAVING (~200 LOC) → Unit 5 (5 items).
- Phase D — DDL, constraint enforcement, `schema()` introspection (~300 LOC) → Unit 6 (5 items).
- Phase E — INSERT/UPDATE/DELETE, snapshot transactions (~150 LOC) → Unit 7 (5 items).
- Phase F — indexes, rowsScanned/queries counters, explain() (~150 LOC) → Unit 8 (5 items).

Practical consequence: the course can go live in the catalog at 15 items (Units 1–3) after Phase A and grow, exactly the way courses.js's `targetHours` field was designed to support ("courses still sitting at one unit… when a course is filled out, raise hours and drop targetHours"). Register it as `hours: 3, targetHours: 9` on day one.

## Overlaps
Six real collisions, each with a specific avoidance rather than a hope.

1. srv/u2-1 "An in-memory database" (CRUD over an array, `nextId++`, find/filter) vs my Unit 1. Same substrate, and the risk is a learner feeling they already did this. Avoidance: Unit 1 never re-teaches create/update/delete over an array — srv owns that permanently. Unit 1 only asks a question srv never asks: is this array SHAPED right? Key uniqueness, referential integrity, dedup. The Unit 1 brief says it out loud: "You already built CRUD over an array in Back-End Foundations. This unit asks a different question of the same array."

2. srv/u3 "Query params & headers" (filtering, searching, sorting, limit) and srv/u6-4 "Pagination" vs my Unit 3 (WHERE/ORDER BY/LIMIT). This is the biggest overlap — identical semantics, different language. Three-part avoidance: (a) different domain and seed data — srv uses todos/bookmarks, this uses products/orders/customers, so nothing looks like a re-run; (b) the briefs turn the overlap into transfer, explicitly: "the same three moves you hand-wrote with .filter().sort().slice() — now declared instead of coded, and the database decides how"; (c) pagination does NOT get a lesson here. LIMIT/OFFSET is one step inside Unit 3 lesson 4, and the pagination ENVELOPE (`{items, page, total, hasNext}`) stays srv/u6-4's alone — Unit 8's project consumes that envelope rather than rebuilding it.

3. js/u5 (loops) and js/u7 (objects, map/filter/reduce) vs Unit 1 and Unit 8-3. Avoidance: no lesson here is ever ABOUT an array method. `map`/`filter`/`reduce` are assumed fluent and appear only as the means; every checkpoint asserts a data SHAPE (dedup counts, join-table pair lists, orphan id arrays), never "did you use filter".

4. srv/u6-1 "Validate the body" vs Unit 6's constraints. These genuinely collide conceptually and a learner could reasonably think constraints replace validation. Avoidance: Unit 6 draws the line as its thesis — srv validates the REQUEST (fast, friendly, returns 400 with a message a human reads); the database enforces the TRUTH (last line of defense, fires even when the bug is in your own code or someone runs SQL by hand). Unit 6 lessons never touch a request body; they only write DDL and prove the engine refuses bad rows. Two quiz questions make that distinction the assessed point, and Unit 8's project keeps BOTH layers so the learner sees them coexist.

5. srv/u5 "Auth-lite" per-user filtering (`notes.filter(n => n.userName === userName)`) vs Unit 4's JOINs. Adjacent but not duplicative — srv filters one flat array by an owner column, Unit 4 resolves relationships across tables. Avoidance: no auth in this course at all. Ownership scoping is mentioned once, in the Unit 8 cheatsheet, as `WHERE user_id = ?` beside srv's array version.

6. srv/u7 "Project: Bookmarks API" vs Unit 8's project. Deliberate and total — same API surface, on purpose. Avoidance is the framing: it is a PORT, not a rebuild. The starter file ships srv/u7's FINISHED handleRequest with its array store intact, the HTTP checkpoints are copied verbatim from srv/u7 and must keep passing, and every new checkpoint is about replacing array code with SQL plus the query-count budget that catches N+1. Making the duplication explicit ("your Unit 7 API, same tests, new storage") converts the biggest overlap in the course into its best lesson.

No overlap with cap (localStorage persistence in the browser) — and a note in the Unit 8 brief prevents the obvious confusion: SQL does not replace localStorage on the client; the database lives on the server side of the line cap/u2 draws.

## Units

### 1. Unit 1 — Records, keys and relationships
Modeling, in plain JS, before any SQL exists. A table is an array of objects; a primary key is a column that is provably unique; a foreign key is a number that points at another table's key; one-to-many vs many-to-many and why the second one needs a third table. This is the unit the owner actually asked for ('modeling is its own skill') and it is the only unit that needs no new engine.

Lessons:
  - A table is an array of objects
  - Primary keys: the id that never lies
  - Foreign keys: pointing at another table
  - One-to-many, many-to-many, and the join table
  - Unit 1 quiz: How data is shaped

Graded how:
kind: "js", runs in the existing Web Worker today. Learner types plain JS functions over seeded arrays; tests deep-equal the returned structures. L2: learner writes `isUniqueKey(rows, col)` and `findById(rows, id)` — test asserts `isUniqueKey(orders,'customer_id') === false`, `isUniqueKey(orders,'id') === true`, `findById(products,3).name === 'Kettle'`. L3: learner writes `orphans(orders, customers)` returning order ids whose customer_id matches nobody — test asserts `T.eq(orphans(orders,customers), [7,11])`, so a hand-wave passes nothing. L4 is the money lesson: given a flat spreadsheet-shaped array with repeated author names and comma-joined tag strings, the learner writes `splitOut(rows)` returning `{books, authors, bookTags}` — test asserts `authors.length === 3` (deduped, not 9), `bookTags.length === 7` and `T.eq(bookTags[0], {book_id:1, tag_id:2})`, and `T.expect(books[0].author === undefined && typeof books[0].author_id === 'number')`. That is normalization performed by hand and graded exactly.

### 2. Unit 2 — SELECT: asking a table questions
The first SQL. SELECT * vs a column list (and that column ORDER is yours to choose), AS aliases, DISTINCT, arithmetic inside the SELECT list, statement terminators, and how to read the engine's error messages.

Lessons:
  - Your first query
  - Picking columns
  - AS, DISTINCT, and doing math in the SELECT
  - Reading an error the database gives you
  - Unit 2 quiz: SELECT

Graded how:
kind: "sql" (new). Learner types SQL into `query.sql`; the engine runs it against `lesson.db` and the test helper exposes `T.result` = `{columns:[…], rows:[[…]]}` plus `T.error`. L1: `SELECT * FROM products;` → `T.eq(T.result.columns, ['id','name','category','price','stock'])`, `T.eq(T.result.rows.length, 12)`. L2: `SELECT name, price FROM products;` → asserts `T.eq(T.result.columns, ['name','price'])`, order-sensitive, so `price, name` fails with 'columns come back in the order you list them'. L3: `SELECT DISTINCT category …` → `rows.length === 4`; `SELECT name, price * 0.9 AS sale_price …` → `T.eq(T.result.columns[1],'sale_price')` and `T.close(T.result.rows[0][1], 8.091, 0.001)`. L4: learner is handed `SELECT nmae FROM products;` and must fix it — step asserts `T.error === null` AND `T.result.columns.length === 1`, so pasting `SELECT *` to make the error go away still fails. General authoring rule: wherever `SELECT *` could satisfy a check, assert the exact `columns` array.

### 3. Unit 3 — WHERE, ORDER BY, LIMIT
Precision. Comparison and boolean operators, LIKE / IN / BETWEEN, the NULL trap, sorting on multiple keys, and top-N with LIMIT/OFFSET. Briefs frame it as 'the same three moves you hand-coded in Back-End Foundations, declared instead of written'.

Lessons:
  - WHERE: keep only the rows you meant
  - Matching text: LIKE, IN, BETWEEN
  - NULL is not a value
  - ORDER BY, LIMIT, and the top-N question
  - Unit 3 quiz: Filtering and sorting

Graded how:
kind: "sql". Tests assert the exact ORDERED array of one key column, which no wrong predicate or wrong sort key can reproduce: `T.eq(T.result.rows.map(r => r[0]), [2,5,9])`. L3 is graded as a deliberate two-step failure-then-fix: step 1 has the learner write `WHERE stock = NULL` and the test asserts `T.result.rows.length === 0` with the message 'zero rows — nothing is ever equal to NULL, not even NULL'; step 2 requires `IS NULL` and asserts `rows.length === 3` with the exact ids. L4 asserts a full ordered id list under a two-key sort (`ORDER BY category ASC, price DESC`) so a single-key sort produces a visibly different array. Authoring rule enforced in tools/validate.js: any checkpoint that asserts row order must have an ORDER BY in the solution, or assert a set instead.

### 4. Unit 4 — JOINs: questions that span tables
The payoff for Unit 1. INNER JOIN … ON, LEFT JOIN and the NULL side, the anti-join idiom for 'find the ones with none', walking a many-to-many through its join table, table aliases and qualified columns, and the ambiguous-column error.

Lessons:
  - INNER JOIN … ON
  - LEFT JOIN and the NULL side
  - Three tables: walking the join table
  - Aliases, qualified columns, and the ambiguous-column error
  - Unit 4 quiz: JOINs

Graded how:
kind: "sql", over a seeded db of customers(5) / orders(11, two deliberately orphaned) / products / order_items. L1: INNER JOIN → `T.eq(T.result.rows.length, 9)` and `T.eq(T.result.rows[0], [101,'Ada'])`. L2: the same query as LEFT JOIN → `rows.length === 11` and `T.expect(T.result.rows.some(r => r[1] === null))` — the count difference 9 vs 11 IS the lesson, and no other query produces both. Second step is the anti-join `LEFT JOIN … WHERE c.id IS NULL` → asserts exactly `[[104],[110]]`. L3: orders → order_items → products, asserting the full result set for one order id. L4 is another deliberate error: step 1 requires an unqualified `id` and asserts `T.error.message` contains 'ambiguous'; step 2 requires the fix AND `T.eq(T.result.columns, ['order_id','customer_name'])`, forcing both qualification and AS.

### 5. Unit 5 — GROUP BY and aggregates
Questions about the whole set rather than about rows. COUNT/SUM/AVG/MIN/MAX, COUNT(*) vs COUNT(col) over NULLs, GROUP BY as 'one row per bucket', HAVING vs WHERE, and aggregating across a join.

Lessons:
  - COUNT, SUM, AVG, MIN, MAX
  - GROUP BY: one row per bucket
  - HAVING vs WHERE
  - Project: The sales report
  - Unit 5 quiz: Aggregates

Graded how:
kind: "sql". L1: `T.close(T.result.rows[0][1], 24.31, 0.01)` for AVG, and a step contrasting `COUNT(*)` = 12 with `COUNT(stock)` = 9 on the NULL column — two numbers only the right pair of queries produces. L2: asserts the exact grouped result `T.eq(T.result.rows, [['tools',5],['kitchen',4],['garden',2],['office',1]])`. L3 is failure-then-fix again: step 1 puts the aggregate in WHERE and asserts `T.error.message` contains 'HAVING'; step 2 asserts the corrected grouped rows exactly. The project is six independent numbered queries in one `report.sql`; the harness runs each statement and the six checkpoints assert one result set each (revenue per customer top-3 by `T.close`, orders per city, best-selling product, customers with zero orders, average order value, categories with 3+ products). Float money always via `T.close`, never `T.eq`.

### 6. Unit 6 — Designing the schema: CREATE TABLE and constraints
Turning the Unit 1 model into real tables the database will defend. Column types, PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, CHECK, FOREIGN KEY … REFERENCES, composite primary keys on a join table, and the line between validating a request (srv/u6's job) and enforcing truth (the database's job, and the last line of defense).

Lessons:
  - CREATE TABLE: types, PRIMARY KEY, NOT NULL
  - UNIQUE, DEFAULT and CHECK
  - FOREIGN KEY: the database refuses to lie
  - Project: Model a library
  - Unit 6 quiz: Schema design

Graded how:
kind: "sql", learner types DDL into `schema.sql`; graded on two things no essay can fake. (a) INTROSPECTED SHAPE via `T.schema(name)`: `T.eq(T.schema('books').columns.map(c=>c.name), ['id','title','author_id','published'])`, `T.eq(T.schema('books').primaryKey, 'id')`, `T.eq(T.schema('books').foreignKeys, [{column:'author_id', table:'authors', references:'id'}])`, and for the join table `T.eq(T.schema('book_tags').primaryKey, ['book_id','tag_id'])` (composite). (b) REFUSAL: the test runs specific illegal statements and asserts the engine throws with the right reason — `T.throws("INSERT INTO books (id) VALUES (1)", 'NOT NULL')`, `T.throws("INSERT INTO authors (id,email) VALUES (9,'ada@x.io')", 'UNIQUE')`, `T.throws("INSERT INTO books (id,title,author_id) VALUES (5,'X',99)", 'author')`, `T.throws("DELETE FROM authors WHERE id = 1", 'referenced')`, and after the referencing books are deleted the same DELETE must succeed. DEFAULT is graded by inserting without the column and asserting the stored cell equals the default. Modeling becomes gradeable as shape plus refusal — that pair is the whole trick.

### 7. Unit 7 — Writing data: INSERT, UPDATE, DELETE, transactions
Changing what is stored, and undoing it. Multi-row INSERT, auto-filled INTEGER PRIMARY KEY, UPDATE … SET … WHERE and the missing-WHERE disaster, DELETE against a foreign-key restriction, and BEGIN/COMMIT/ROLLBACK as the all-or-nothing envelope.

Lessons:
  - INSERT INTO … VALUES
  - UPDATE … SET … WHERE (and the missing WHERE)
  - DELETE FROM … WHERE
  - Transactions: the transfer that must not half-happen
  - Unit 7 quiz: Changing data

Graded how:
kind: "sql", graded on resulting DATABASE STATE rather than a result set, via `T.rows(table)`. L1: `T.eq(T.rows('customers').length, 6)` and `T.eq(T.rows('customers')[5], [6,'Zed','Lima'])` — the auto id 6 proves the PK was omitted, not typed. L2 failure-then-fix: step 1 runs the unqualified UPDATE and the test asserts EVERY row changed, message 'all 12 rows — that is what a missing WHERE does'; step 2 asserts exactly one row moved and the other eleven are byte-identical to the seed. L4: the account-transfer classic — `BEGIN; UPDATE accounts SET balance = balance - 200 WHERE id=1; UPDATE accounts SET balance = balance + 200 WHERE id=2; COMMIT;` asserts both balances; then a second block where the credit violates a `CHECK (balance <= 5000)` and the test asserts BOTH balances equal their pre-transaction values — the debit was rolled back too. Explicitly out of reach and said so in the brief: isolation levels, dirty reads, deadlocks. A single-threaded worker has no concurrency; those get the cheatsheet and two quiz questions, not a fake checkpoint.

### 8. Unit 8 — Making it fast, and wiring it to the API
What the database is actually doing, and how this course meets Course 7. Sequential scan vs index lookup measured in rows examined, when an index does nothing, the N+1 query problem, and porting a real handleRequest from an array store to SQL.

Lessons:
  - What the database actually does: rows scanned
  - CREATE INDEX — and the cost you just paid
  - The N+1 query problem
  - Project: Give the Bookmarks API a real database
  - Unit 8 quiz: Databases behind an API

Graded how:
L1–L2 are kind: "sql" over a seeded 5,000-row `events` table, graded on an honest counter rather than a fake stopwatch: `T.eq(T.stats().rowsScanned, 5000)` before, `T.expect(T.stats().rowsScanned <= 40)` after `CREATE INDEX idx_events_user ON events(user_id);`, plus `T.expect(T.explain().indexOf('index lookup') !== -1)`. Two more steps prove the limits: an index on the wrong column puts rowsScanned back to 5000, and `LIKE '%foo'` cannot use one. L3–L4 are kind: "js" with the db bound in — the learner writes JS that calls `db.query(sql, params)`. L3: rewrite a given loop-of-queries as one JOIN; test asserts `T.eq(out, expected)` AND `T.eq(T.stats().queries, 1)`, so a correct-but-N+1 answer fails on the count. L4 project: the starter ships srv/u7's finished array-backed `handleRequest`; checkpoints call it exactly as srv does today — `T.eq(handleRequest({method:'GET', path:'/api/bookmarks', query:{tag:'js', page:2}}), {status:200, body:[…]})` — and add two SQL-only assertions per route: `T.eq(T.stats().queries <= 2, true)` and, after a DELETE request, `T.eq(T.rows('bookmarks').length, 7)` plus a 404 when zero rows were affected. Old tests still pass, storage is new.

## Projects
- Project: The sales report (Unit 5) — answer six business questions, one query each, over customers/orders/order_items/products
- Project: Model a library (Unit 6) — full DDL for authors, books, tags, book_tags, loans, graded on introspected schema shape plus the illegal INSERTs it refuses
- Project: Give the Bookmarks API a real database (Unit 8) — port srv/u7's handleRequest from an array store to SQL, same HTTP assertions, plus a no-N+1 query-count budget

## Risks
- Parser scope creep is the project killer. The moment one lesson wants a subquery or a window function, the grammar doubles and the schedule dies. Mitigation: freeze the IN-SCOPE grammar list in a comment block at the top of db.js BEFORE authoring any lesson (shell.js's own 'WHAT IT IS NOT' section is the house precedent), and extend tools/validate.js to run every lesson's `solution` SQL through the engine and diff the result against the expected rows — so a lesson that drifts outside the grammar fails CI, not the learner.
- Error-message quality IS the product. A parser that says 'Unexpected token at position 43' makes the whole course miserable, and a self-taught learner alone with it has no one to ask. Budget as much effort on messages and did-you-mean as on the evaluator; every parse error must name the statement, quote the offending word, and suggest the nearest table or column.
- Grading on row order without an ORDER BY is a silent footgun — the engine must return rows in deterministic insertion order and lessons must not lean on that accidentally. Enforce as an authoring rule in validate.js: any checkpoint asserting `rows[i]` positionally requires an ORDER BY in the solution, or must assert a set instead.
- Performance can be dishonest. A 12-row in-memory table makes no query measurably slow, so any lesson that claims 'now it is fast' would be lying. The rowsScanned counter on a 5,000-row table measures the thing indexes actually do; do not add a millisecond timer, and say in the Unit 8 brief that this course simulates the mechanism, not the speed.
- Compute limits: a nested-loop join has no optimizer, and a 5,000 x 5,000 join would blow the run budget even on the main thread. Rule: the big table in Unit 8 is only ever scanned, never joined to another big table; every joined pair in Units 4-5 stays under 200 x 200.
- The editor/app surface is the second-biggest cost after the parser and the easiest to underestimate — .sql in editor.js langOf, an hlSQL highlighter, a result-grid renderer, and three kind switches in app.js. Scope it as its own day, not as a footnote to the engine.
- Learner drift: someone finishes Units 2-5, can write a JOIN, and never wires a database to anything. Mitigation: Unit 8 is not optional, the catalog blurb promises the wiring, and Unit 5's project is deliberately query-only so the contrast with Unit 8 lands.
- Overclaiming. Nobody finishes this course knowing Postgres — they have never installed one, opened psql, written a connection string, run a migration, or hit a connection pool. Every unit cheatsheet must show the real psql / node-postgres / migration equivalent beside the simulated move (srv/u1 already does exactly this with its Express side-by-sides), and the final quiz must include a question on what this course did NOT simulate.
- Concurrency is genuinely unteachable here — one thread, no other clients, so isolation levels, dirty reads, lost updates and deadlocks cannot be demonstrated, only asserted. Transactions get a real checkpoint (rollback of a half-finished transfer, which IS observable); isolation gets a cheatsheet and two quiz questions and an honest sentence saying why there is no exercise.
- Document databases are out of scope and someone will ask. Mongo-style embedding vs referencing gets a Unit 6 cheatsheet entry and two quiz questions, not a lesson. If it later deserves more, it is a separate course, not a ninth unit bolted onto this one.
