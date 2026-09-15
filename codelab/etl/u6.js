/* Data Pipelines & ETL — Unit 6: Pipelines that run themselves */
(function () {
  /* Code is written as String.raw templates, so backslashes reach the
     learner's editor and the grader exactly as they appear here. Nothing
     inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  /* ---------- etl-u6-1 ---------- */
  var DAG = R`
// The nightly pipeline. deps lists the tasks each one needs first.
const TASKS = [
  { id: "load_orders", deps: ["clean_orders"] },
  { id: "extract_orders", deps: [] },
  { id: "extract_customers", deps: [] },
  { id: "clean_orders", deps: ["extract_orders"] },
  { id: "clean_customers", deps: ["extract_customers"] },
  { id: "load_customers", deps: ["clean_customers"] },
  { id: "daily_report", deps: ["load_orders", "load_customers"] }
];
`;
  function u1File(body) {
    return DAG + "\n" + body + R`

console.log(plan(TASKS));
console.log(runDag(TASKS, id => { if (id === "clean_customers") throw new Error("bad file"); }).results);
`;
  }

  /* ---------- etl-u6-2 ---------- */
  var FLAKY = R`
class TransientError extends Error {
  constructor(msg) { super(msg); this.name = "TransientError"; }
}
class ValidationError extends Error {
  constructor(msg) { super(msg); this.name = "ValidationError"; }
}

// A task that fails for its first "failures" calls, then works.
function flaky(failures, kind) {
  let calls = 0;
  return function () {
    calls++;
    if (calls <= failures) {
      throw kind === "validation" ? new ValidationError("row 12: qty is not a number") : new TransientError("warehouse timeout");
    }
    return "loaded";
  };
}
`;
  function u2File(body) {
    return FLAKY + "\n" + body + R`

const deadLetter = [];
const opts = { attempts: 4, baseMs: 1000, deadLetter: deadLetter, random: () => 0.5,
  wait: ms => console.log("waiting", ms, "ms") };
console.log(runWithRetry(flaky(2), opts));
try { runWithRetry(flaky(1, "validation"), opts); } catch (e) { console.log("gave up:", e.message); }
console.log(deadLetter);
`;
  }

  /* ---------- etl-u6-3 ---------- */
  var EVENTS = R`
// Click events, timestamped in UTC. The clock says it's the morning of 2026-09-16.
const EVENTS = [
  { id: 1, ts: "2026-09-12T23:59:59Z" },
  { id: 2, ts: "2026-09-13T00:00:00Z" },
  { id: 3, ts: "2026-09-13T17:45:10Z" },
  { id: 4, ts: "2026-09-14T00:00:00Z" },
  { id: 5, ts: "2026-09-14T09:30:00Z" },
  { id: 6, ts: "2026-09-14T23:59:59Z" },
  { id: 7, ts: "2026-09-15T00:00:00Z" },
  { id: 8, ts: "2026-09-15T12:00:00Z" }
];
`;
  function u3File(body) {
    return EVENTS + "\n" + body + R`

// The 14th's run failed. Someone reruns it this morning.
console.log(dailyJob({ logicalDay: "2026-09-14" }));
`;
  }

  /* ---------- etl-u6-4 ---------- */
  var HISTORY = R`
// Row counts from the last three weeks of the nightly orders load, oldest first.
const RECENT = [9800, 10100, 9900, 10300, 9700, 10000, 10200, 9950, 10050, 9850, 10150, 9750, 10250, 10000];
const HISTORY = [];
for (let i = 0; i < 21; i++) {
  HISTORY.push({
    logicalDay: new Date(Date.UTC(2026, 7, 26) + i * 86400000).toISOString().slice(0, 10),  // Aug 26 to Sep 15
    rows: i < 7 ? 20000 : RECENT[i - 7]  // a busy week, then the last fourteen nights
  });
}
`;
  function u4File(body) {
    return HISTORY + "\n" + body + R`

// Last night: the job succeeded. It loaded nothing, from a source last updated 31 hours ago.
console.log(checkRun({ logicalDay: "2026-09-16", rows: 0, latestUpdatedAt: "2026-09-15T23:00:00Z" }, HISTORY));
`;
  }

  window.CODELAB.addUnit("etl", {
    id: "etl-u6",
    title: "Pipelines that run themselves",
    icon: "⏱️",
    blurb: "A pipeline is a graph of tasks that runs at 3 a.m. with nobody watching. Plan it and refuse cycles, retry only what can succeed next time, run each job for its logical date instead of the clock, and alert when success means zero rows.",
    cheat: [
      { h: "Plan the DAG", lang: "js", code: R`
function visit(id) {
  if (state.get(id) === "done") return;
  if (state.get(id) === "visiting") throw new Error("cycle: " + path.slice(path.indexOf(id)).concat(id).join(" → "));
  state.set(id, "visiting"); path.push(id);
  byId.get(id).deps.forEach(visit);
  path.pop(); state.set(id, "done"); order.push(id);
}`,
        note: "Throw on unknown dependencies and cycles before anything runs. When a task fails, everything downstream is skipped (it never ran), and independent branches carry on." },
      { h: "Retry what's transient", lang: "js", code: R`
if (!(e instanceof TransientError) || attempt === attempts) {
  deadLetter.push({ attempts: attempt, error: e.name + ": " + e.message, at: now() });
  throw e;
}
wait(Math.round(baseMs * 2 ** (attempt - 1) * (0.8 + 0.4 * random())));  // ±20%`,
        note: "Validation errors and bugs fail the same way every time. Jitter spreads out jobs that failed together. A retry is only safe for an idempotent task." },
      { h: "The logical date", lang: "js", code: R`
const start = logicalDay + "T00:00:00Z";
const end = new Date(Date.parse(start) + 86400000).toISOString().slice(0, 10) + "T00:00:00Z";
events.filter(e => e.ts >= start && e.ts < end)   // half-open
// partition "day=" + logicalDay, never "yesterday" from now()`,
        note: "A rerun on Wednesday loads Monday. An explicit Z makes Date.parse independent of the machine's time zone." },
      { h: "Success isn't correctness", lang: "js", code: R`
const med = median(history.slice(-14).map(h => h.rows));  // null under 7 runs
if (rows === 0 && med > 0) alerts.push("zero_rows");
else if (rows > 0 && rows < med / 2) alerts.push("low_volume");
if (now() - Date.parse(latestUpdatedAt) > 26 * 3600e3) alerts.push("stale");`,
        note: "Median, not mean: one backfill night drags a mean. Quiet days skip volume alerts but not freshness." }
    ],
    lessons: [

      {
        id: "etl-u6-1",
        title: "Tasks as a DAG: order, and refusing a cycle",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        brief: "A real pipeline is a few dozen small tasks, and some can't start until others finish: you can't clean orders before extracting them, and the daily report needs both loads. That dependency structure is a **directed acyclic graph** (DAG), and it's the core idea of every orchestrator, Airflow and Dagster included.\n\nThe scheduler has two jobs.\n\n**Plan.** Put the tasks in an order where every task comes after everything it needs, called a topological order. Many orders are valid, and any one is fine. Before running anything, refuse two things: a dependency on a task that doesn't exist (usually a typo), and a **cycle**, which can never finish. Name the cycle so someone can break it: `a → b → c → a`, where each arrow means *needs*.\n\n**Run.** Walk the plan. A task whose dependencies all succeeded runs. A task that throws is `failed`. A task with a dependency that failed or was skipped is `skipped`: it never ran, and calling it failed would send someone looking for an error that doesn't exist. A failure in one branch doesn't stop the branches that don't depend on it.\n\nWrite `plan(tasks)`, returning task ids in a valid order, and `runDag(tasks, run)`, which calls `run(id)` for each task that should run and returns `{ order, results }`, with `results` mapping every task id to `\"ok\"`, `\"failed\"` or `\"skipped\"`.",
        steps: [
          { text: "`plan` puts every task after everything it needs, and each task appears exactly once.",
            test: R`
var order = plan(TASKS);
T.eq(order.slice().sort(), TASKS.map(function (t) { return t.id; }).sort(), 'Every task appears exactly once');
var pos = {};
order.forEach(function (id, i) { pos[id] = i; });
TASKS.forEach(function (t) {
  t.deps.forEach(function (d) { T.expect(pos[d] < pos[t.id], t.id + ' needs ' + d + ' so ' + d + ' must come first. Your order: ' + order.join(' ')); });
});
` },
          { text: "A cycle throws before anything runs, and the message names it as `a → b → … → a`, where each arrow means *needs*.",
            test: R`
var cyc = [{ id: 'a', deps: ['c'] }, { id: 'b', deps: ['a'] }, { id: 'c', deps: ['b'] }, { id: 'd', deps: [] }];
var m = null;
try { plan(cyc); } catch (e) { m = String(e.message); }
T.expect(m !== null, 'A cycle can never finish, so plan must throw');
var path = (m.match(/[\w-]+(?: → [\w-]+)+/) || [''])[0].split(' → ');
T.expect(path.length >= 2 && path[0] === path[path.length - 1], 'Name the cycle as a → b → ... → a ending where it starts. Got: ' + m);
var byId = {};
cyc.forEach(function (t) { byId[t.id] = t; });
for (var i = 0; i + 1 < path.length; i++) {
  T.expect(byId[path[i]] && byId[path[i]].deps.indexOf(path[i + 1]) !== -1, 'Each arrow means needs, but ' + path[i] + ' does not need ' + path[i + 1] + '. Got: ' + m);
}
T.eq(path.length, 4, 'The cycle is a and b and c and back to the start, with d left out');
var m2 = null;
try { plan([{ id: 'x', deps: ['x'] }]); } catch (e) { m2 = String(e.message); }
T.expect(m2 !== null && /x → x/.test(m2), 'A task that needs itself is a cycle too. Got: ' + m2);
` },
          { text: "A dependency on a task that doesn't exist throws, naming it, and a shared dependency is planned once.",
            test: R`
var m = null;
try { plan([{ id: 'report', deps: ['load_ordres'] }]); } catch (e) { m = String(e.message); }
T.expect(m !== null && /load_ordres/.test(m), 'A dependency on a task that does not exist is a typo. Throw and name it. Got: ' + m);
var diamond = [{ id: 'report', deps: ['left', 'right'] }, { id: 'left', deps: ['base'] }, { id: 'right', deps: ['base'] }, { id: 'base', deps: [] }];
var o = plan(diamond);
T.eq(o.length, 4, 'A dependency shared by two tasks is planned once');
T.expect(o[0] === 'base' && o[3] === 'report', 'base comes first and report last. Got: ' + o.join(' '));
` },
          { text: "`runDag`: a failure skips everything downstream without running it, and independent branches still run.",
            test: R`
var ran = [];
var out = runDag(TASKS, function (id) { ran.push(id); if (id === 'clean_customers') throw new Error('bad file'); });
T.eq(out.results.clean_customers, 'failed', 'The task that threw is failed');
T.eq([out.results.load_customers, out.results.daily_report], ['skipped', 'skipped'], 'Everything downstream of a failure is skipped because it never ran');
T.eq([out.results.extract_orders, out.results.clean_orders, out.results.load_orders], ['ok', 'ok', 'ok'], 'The orders branch does not need customers, so it still runs');
T.expect(ran.indexOf('load_customers') === -1 && ran.indexOf('daily_report') === -1, 'Skipped tasks must not be run at all. Ran: ' + ran.join(' '));
T.eq(Object.keys(out.results).length, TASKS.length, 'Every task has a result');
T.eq(out.order, plan(TASKS), 'order is the plan that was followed');
` }
        ],
        files: [
          { name: "script.js", content: u1File(R`
function plan(tasks) {
  // Run them in the order they're listed.
  return tasks.map(t => t.id);
}

function runDag(tasks, run) {
  const order = plan(tasks);
  const results = {};
  for (const id of order) {
    try { run(id); results[id] = "ok"; } catch (e) { results[id] = "failed"; }
  }
  return { order: order, results: results };
}
`) }
        ],
        hints: [
          "Index the tasks with `new Map(tasks.map(t => [t.id, t]))`, then check every dependency exists before planning.",
          "Depth-first: `visit(id)` visits each dependency first and pushes `id` onto `order` afterwards. Track a state per id: \"visiting\" while its dependencies are being visited, \"done\" after.",
          "Reaching an id that's still \"visiting\" means a cycle. Keep a `path` stack of the ids being visited; the cycle is `path.slice(path.indexOf(id)).concat(id).join(\" → \")`.",
          "In `runDag`, before calling a task, check its dependencies: if any result isn't `\"ok\"`, record `\"skipped\"` and don't call it."
        ],
        solution: {
          "script.js": u1File(R`
function plan(tasks) {
  const byId = new Map(tasks.map(t => [t.id, t]));
  for (const t of tasks) {
    for (const d of t.deps) if (!byId.has(d)) throw new Error("unknown dependency: " + t.id + " needs " + d);
  }
  const order = [], state = new Map(), path = [];
  function visit(id) {
    if (state.get(id) === "done") return;
    if (state.get(id) === "visiting") {
      throw new Error("cycle: " + path.slice(path.indexOf(id)).concat(id).join(" → "));
    }
    state.set(id, "visiting");
    path.push(id);
    for (const d of byId.get(id).deps) visit(d);
    path.pop();
    state.set(id, "done");
    order.push(id);  // after everything it needs
  }
  for (const t of tasks) visit(t.id);
  return order;
}

function runDag(tasks, run) {
  const order = plan(tasks);
  const byId = new Map(tasks.map(t => [t.id, t]));
  const results = {};
  for (const id of order) {
    if (byId.get(id).deps.some(d => results[d] !== "ok")) { results[id] = "skipped"; continue; }
    try { run(id); results[id] = "ok"; }
    catch (e) { results[id] = "failed"; }
  }
  return { order: order, results: results };
}
`)
        }
      },

      {
        id: "etl-u6-2",
        title: "Retry what's transient, dead-letter the rest",
        kind: "js", chip: "ETL", xp: 15, mins: 14,
        clock: 1760000000000,
        brief: "`async-u5` built `retry(fn, times)`: call it again until it works. A pipeline needs more than that before retrying is safe.\n\n**Retry only what's transient.** A warehouse timeout may well succeed a second later. A `ValidationError` saying row 12's quantity isn't a number will fail the same way forever, and so will a `TypeError` from a bug. Retrying those only delays the alert. Retry a `TransientError`, and nothing else.\n\n**Back off, with jitter.** Retrying immediately hammers a service that's already struggling. Wait `baseMs`, then double it each time: 1s, 2s, 4s. Then add **jitter**, a random ±20%, so a hundred jobs that failed in the same outage don't all retry in the same millisecond.\n\n**When it gives up, leave a record.** After the last attempt, or straight away for a non-transient error, push a **dead letter** `{ attempts, error, at }`, with `error` as `name: message` and `at` as `now()`. Then re-throw, so the caller sees the failure too. The dead-letter list is what someone reads in the morning.\n\nAnd the condition that makes any of this allowed: a retried task may run twice, which is only harmless if running it twice leaves the same result. The loading unit makes loads work that way.\n\nWaiting and randomness are **injected**, the way real schedulers make them testable. Write `runWithRetry(task, opts)` using `opts.attempts`, `opts.baseMs`, `opts.wait(ms)`, `opts.random()` and `opts.deadLetter`. The delay before retry *n* is `Math.round(baseMs * 2 ** (n - 1) * (0.8 + 0.4 * random()))`, and there's no wait after the final attempt.",
        steps: [
          { text: "Two timeouts then success: the result comes back after waits of 1s and 2s, with no dead letter.",
            test: R`
var setup = function (rnd) { var o = { attempts: 4, baseMs: 1000, waits: [], deadLetter: [], random: rnd || function () { return 0.5; } }; o.wait = function (ms) { o.waits.push(ms); T.advance(ms); }; return o; };
var o = setup(), calls = 0, inner = flaky(2), t0 = now();
var result = runWithRetry(function () { calls++; return inner(); }, o);
T.eq(result, 'loaded', 'The third try succeeds and its result is returned');
T.eq(calls, 3, 'Two failures then a success is three calls');
T.eq(o.waits, [1000, 2000], 'Back off before each retry: 1s then 2s (random() returned 0.5 so there is no jitter)');
T.eq(now() - t0, 3000, 'Waiting goes through opts.wait, which moves the clock');
T.eq(o.deadLetter, [], 'A task that eventually succeeds leaves no dead letter');
` },
          { text: "A `ValidationError`, or a bug, isn't retried: one call, no waiting, a dead letter, and the error re-thrown.",
            test: R`
var setup = function (rnd) { var o = { attempts: 4, baseMs: 1000, waits: [], deadLetter: [], random: rnd || function () { return 0.5; } }; o.wait = function (ms) { o.waits.push(ms); T.advance(ms); }; return o; };
var o = setup(), calls = 0, inner = flaky(5, 'validation'), t0 = now(), err = null;
try { runWithRetry(function () { calls++; return inner(); }, o); } catch (e) { err = e; }
T.expect(err instanceof ValidationError, 'The ValidationError is re-thrown to the caller');
T.eq(calls, 1, 'Bad data is just as bad a second later. A ValidationError is never retried');
T.eq(o.waits, [], 'No waiting before giving up on a ValidationError');
T.eq(o.deadLetter, [{ attempts: 1, error: 'ValidationError: row 12: qty is not a number', at: t0 }], 'It goes straight to the dead-letter list');
var o2 = setup(), calls2 = 0;
try { runWithRetry(function () { calls2++; throw new TypeError('rows is undefined'); }, o2); } catch (e) {}
T.eq(calls2, 1, 'A bug (here a TypeError) is not transient either');
` },
          { text: "Still failing after four attempts: three doubling waits, a dead letter recording when it gave up, and the last error re-thrown.",
            test: R`
var setup = function (rnd) { var o = { attempts: 4, baseMs: 1000, waits: [], deadLetter: [], random: rnd || function () { return 0.5; } }; o.wait = function (ms) { o.waits.push(ms); T.advance(ms); }; return o; };
var o = setup(), calls = 0, inner = flaky(10), t0 = now(), err = null;
try { runWithRetry(function () { calls++; return inner(); }, o); } catch (e) { err = e; }
T.expect(err instanceof TransientError, 'After the last attempt the TransientError is re-thrown');
T.eq(calls, 4, 'attempts: 4 means four calls in total');
T.eq(o.waits, [1000, 2000, 4000], 'Three waits between four attempts, doubling each time, with no wait after the last');
T.eq(o.deadLetter, [{ attempts: 4, error: 'TransientError: warehouse timeout', at: t0 + 7000 }], 'The dead letter records the attempts and the last error and when it gave up');
var o3 = setup();
o3.attempts = 2;
var c3 = 0, f3 = flaky(10);
try { runWithRetry(function () { c3++; return f3(); }, o3); } catch (e) {}
T.eq([c3, o3.waits], [2, [1000]], 'The number of attempts comes from opts');
` },
          { text: "Jitter: `random()` at 0 gives 80% of each delay, near 1 gives 120%, and seeded random delays all stay within ±20%.",
            test: R`
var setup = function (rnd) { var o = { attempts: 4, baseMs: 1000, waits: [], deadLetter: [], random: rnd || function () { return 0.5; } }; o.wait = function (ms) { o.waits.push(ms); T.advance(ms); }; return o; };
var low = setup(function () { return 0; });
try { runWithRetry(flaky(10), low); } catch (e) {}
T.eq(low.waits, [800, 1600, 3200], 'random() of 0 is the low end: 80 percent of each delay');
var high = setup(function () { return 0.9999; });
try { runWithRetry(flaky(10), high); } catch (e) {}
T.eq(high.waits, [1200, 2400, 4800], 'Near 1 is the high end: 120 percent of each delay rounded to whole milliseconds');
var seed = 99;
var spread = setup(function () { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; });
try { runWithRetry(flaky(10), spread); } catch (e) {}
T.expect(spread.waits.length === 3 && spread.waits.every(function (ms, i) { var nominal = 1000 * Math.pow(2, i); return ms >= nominal * 0.8 && ms <= nominal * 1.2 && ms === Math.round(ms); }), 'Every jittered wait stays within 20 percent of its nominal delay. Got: ' + spread.waits.join(' '));
T.expect(spread.waits.some(function (ms, i) { return ms !== 1000 * Math.pow(2, i); }), 'Jitter should actually move the delays so that jobs retrying together spread out');
` }
        ],
        files: [
          { name: "script.js", content: u2File(R`
function runWithRetry(task, opts) {
  // Retry everything, immediately.
  let lastError;
  for (let i = 0; i < 10; i++) {
    try { return task(); } catch (e) { lastError = e; }
  }
  throw lastError;
}
`) }
        ],
        hints: [
          "Loop with `attempt` starting at 1. `try { return task(); }`; everything interesting happens in `catch (e)`.",
          "Give up when `!(e instanceof TransientError) || attempt === opts.attempts`: push `{ attempts: attempt, error: e.name + \": \" + e.message, at: now() }` onto `opts.deadLetter`, then `throw e`.",
          "Otherwise wait before the next attempt: `opts.wait(Math.round(opts.baseMs * 2 ** (attempt - 1) * (0.8 + 0.4 * opts.random())))`."
        ],
        solution: {
          "script.js": u2File(R`
function runWithRetry(task, opts) {
  for (let attempt = 1; ; attempt++) {
    try {
      return task();
    } catch (e) {
      if (!(e instanceof TransientError) || attempt === opts.attempts) {
        opts.deadLetter.push({ attempts: attempt, error: e.name + ": " + e.message, at: now() });
        throw e;
      }
      const nominal = opts.baseMs * 2 ** (attempt - 1);
      opts.wait(Math.round(nominal * (0.8 + 0.4 * opts.random())));  // ±20% jitter
    }
  }
}
`)
        }
      },

      {
        id: "etl-u6-3",
        title: "The logical date: run Monday's job on Wednesday",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        clock: Date.UTC(2026, 8, 16, 8, 0, 0),
        brief: "Every orchestrator gives each run a **logical date**: the day of data the run is *for*, which isn't the moment it happens to execute. The 14th's job normally runs early on the 15th. If it fails and someone reruns it on the 16th, it must still load the 14th. If someone backfills last month, each run loads its own day.\n\nThe starter does what most first drafts do: it works out \"yesterday\" from the clock. Rerun on the 16th, it loads the 15th into the 15th's partition, and the 14th is never loaded at all. Airflow's best-practices guide says it plainly: don't compute results from the current time; read the data for the run's interval.\n\nThree pieces:\n\n- `dataInterval(logicalDay)` returns `{ start, end }` as ISO timestamps: midnight UTC at the start of that day, and midnight UTC at the start of the next. Crossing a month, a year or February 29th has to work. `Date.parse(day + \"T00:00:00Z\")` is safe *because* of the explicit `Z`: the machine's time zone can't move it. Unit 2's warning was about strings **without** one. Throw a `TypeError` if the day isn't `YYYY-MM-DD`.\n- `selectForDay(events, logicalDay)` keeps the events with `start <= ts < end`. The interval is **half-open**: an event at exactly midnight belongs to the new day, so no event lands in two partitions.\n- `dailyJob(ctx)` returns `{ partition: \"day=\" + the day, rows }`, using **only** `ctx.logicalDay`. The last check makes `now()` throw while it runs.",
        steps: [
          { text: "`dataInterval` spans midnight to midnight UTC, across month ends, year ends and leap days, and rejects a day that isn't `YYYY-MM-DD`.",
            test: R`
T.eq(dataInterval('2026-09-14'), { start: '2026-09-14T00:00:00Z', end: '2026-09-15T00:00:00Z' }, 'The interval for the 14th is its own day, whatever the clock says');
T.eq([dataInterval('2026-12-31').end, dataInterval('2028-02-28').end, dataInterval('2026-02-28').end], ['2027-01-01T00:00:00Z', '2028-02-29T00:00:00Z', '2026-03-01T00:00:00Z'], 'The next day crosses a year end and knows 2028 is a leap year and 2026 is not');
var threw = false;
try { dataInterval('Sept 14'); } catch (e) { threw = e instanceof TypeError; }
T.expect(threw, 'A logical day that is not YYYY-MM-DD throws a TypeError');
` },
          { text: "`selectForDay` uses a half-open interval: midnight belongs to the new day.",
            test: R`
var ids = function (day) { return selectForDay(EVENTS, day).map(function (e) { return e.id; }); };
T.eq(ids('2026-09-14'), [4, 5, 6], 'The 14th holds its own midnight and everything before the next one');
T.eq(ids('2026-09-13'), [2, 3], 'An event at exactly midnight on the 14th is not the 13th');
T.eq(ids('2026-09-15'), [7, 8], 'The 15th starts at its own midnight');
` },
          { text: "Rerun two days late, the 14th's job produces exactly what it would have on time.",
            test: R`
var first = dailyJob({ logicalDay: '2026-09-14' });
T.eq(first.partition, 'day=2026-09-14', 'The partition is named for the logical day');
T.eq(first.rows.map(function (e) { return e.id; }), [4, 5, 6], 'The rows are the 14th events');
T.advance(2 * 86400000);
T.eq(dailyJob({ logicalDay: '2026-09-14' }), first, 'Two days later the same logical day gives the same output');
` },
          { text: "A backfill of four days in reverse order loads every event exactly once, repeats identically, and never calls `now()`.",
            test: R`
var noNow = function (fn) {
  var real = globalThis.now;
  globalThis.now = function () { throw new Error('now() was called. The job must depend only on ctx.logicalDay'); };
  try { return fn(); } finally { globalThis.now = real; }
};
var days = ['2026-09-15', '2026-09-14', '2026-09-13', '2026-09-12'];
var runs = noNow(function () { return days.map(function (d) { return dailyJob({ logicalDay: d }); }); });
T.eq(runs.map(function (r) { return r.partition; }), ['day=2026-09-15', 'day=2026-09-14', 'day=2026-09-13', 'day=2026-09-12'], 'Each run writes the partition for its own logical day');
var all = [];
runs.forEach(function (r) { r.rows.forEach(function (e) { all.push(e.id); }); });
T.eq(all.sort(function (a, b) { return a - b; }), [1, 2, 3, 4, 5, 6, 7, 8], 'Backfilling four days in reverse order loads every event exactly once');
T.eq(noNow(function () { return days.map(function (d) { return dailyJob({ logicalDay: d }); }); }), runs, 'Running the same days again gives identical output');
` }
        ],
        files: [
          { name: "script.js", content: u3File(R`
function dataInterval(logicalDay) {
  // "Tonight's run loads yesterday": the day is whatever the clock says.
  const today = new Date(now()).toISOString().slice(0, 10);
  const yesterday = new Date(now() - 86400000).toISOString().slice(0, 10);
  return { start: yesterday + "T00:00:00Z", end: today + "T00:00:00Z" };
}

function selectForDay(events, logicalDay) {
  const interval = dataInterval(logicalDay);
  return events.filter(e => e.ts >= interval.start && e.ts <= interval.end);
}

function dailyJob(ctx) {
  const interval = dataInterval(ctx.logicalDay);
  return { partition: "day=" + interval.start.slice(0, 10), rows: selectForDay(EVENTS, ctx.logicalDay) };
}
`) }
        ],
        hints: [
          "Check the day against `/^\\d{4}-\\d{2}-\\d{2}$/` and throw a `TypeError` if it doesn't match.",
          "`start` is `logicalDay + \"T00:00:00Z\"`. The next day is `new Date(Date.parse(start) + 86400000).toISOString().slice(0, 10)`. Every step is UTC, so month ends and leap days take care of themselves.",
          "Filter with `e.ts >= start && e.ts < end`. ISO timestamps in one format with a Z compare correctly as strings.",
          "`dailyJob` names the partition from `ctx.logicalDay` directly, and never mentions `now()`."
        ],
        solution: {
          "script.js": u3File(R`
const DAY_MS = 24 * 60 * 60 * 1000;

function dataInterval(logicalDay) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(logicalDay)) throw new TypeError("logicalDay must be YYYY-MM-DD, got " + JSON.stringify(logicalDay));
  const start = logicalDay + "T00:00:00Z";  // an explicit Z: the machine's zone can't move it
  const next = new Date(Date.parse(start) + DAY_MS).toISOString().slice(0, 10);
  return { start: start, end: next + "T00:00:00Z" };
}

function selectForDay(events, logicalDay) {
  const interval = dataInterval(logicalDay);
  return events.filter(e => e.ts >= interval.start && e.ts < interval.end);  // half-open
}

function dailyJob(ctx) {
  return { partition: "day=" + ctx.logicalDay, rows: selectForDay(EVENTS, ctx.logicalDay) };
}
`)
        }
      },

      {
        id: "etl-u6-4",
        title: "Row counts, freshness, and \"succeeded with zero rows\"",
        kind: "js", chip: "ETL", xp: 15, mins: 12,
        clock: Date.UTC(2026, 8, 17, 6, 0, 0),
        brief: "A job that finishes without throwing has *succeeded*, as far as the scheduler knows. It can still be completely wrong: the source sent an empty file, a filter quietly dropped most of the rows, or the upstream system stopped updating two days ago and the pipeline keeps faithfully reloading stale data. None of those throws. They show up in the **numbers**, so check the numbers after every run.\n\n- **Volume.** Compare tonight's row count with the **median** of the last 14 runs. Use the median, not the mean: one backfill night with a million rows drags a mean so far up that a normal night looks like a collapse. Zero rows against a positive median is `zero_rows`. Fewer than half the median is `low_volume`. With fewer than 7 runs of history there's no baseline yet, so report `median: null` and skip the volume alerts.\n- **Quiet days.** Some days really are empty. A day listed in `opts.quietDays` raises no volume alert, though freshness still applies.\n- **Freshness.** `latestUpdatedAt` is the newest `updated_at` seen in the source. If it's more than `opts.maxStalenessHours` (default 26) behind `now()`, raise `stale`, however many rows loaded.\n\nWrite `checkRun(run, history, opts)` returning `{ alerts, median }`, with a volume alert (if any) before `stale`. `history` is oldest first, and `opts` may be missing. Parsing `latestUpdatedAt` with `Date.parse` is fine, because it always carries a `Z`.",
        steps: [
          { text: "Zero rows against a median of 10,000 is an alert even though the job succeeded, and the median uses only the last 14 runs.",
            test: R`
var fresh = new Date(now() - 3600000).toISOString();
T.eq(checkRun({ logicalDay: '2026-09-16', rows: 0, latestUpdatedAt: fresh }, HISTORY), { alerts: ['zero_rows'], median: 10000 }, 'Zero rows against a recent median of 10000 is an alert. The median covers only the last 14 runs, not the busy week before');
T.eq(checkRun({ logicalDay: '2026-09-16', rows: 9900, latestUpdatedAt: fresh }, HISTORY), { alerts: [], median: 10000 }, 'A normal night raises nothing');
` },
          { text: "Under half the median is `low_volume`; exactly half isn't; one enormous night doesn't move the median.",
            test: R`
var fresh = new Date(now() - 3600000).toISOString();
var alertsFor = function (rows, hist) { return checkRun({ logicalDay: '2026-09-16', rows: rows, latestUpdatedAt: fresh }, hist || HISTORY).alerts; };
T.eq(alertsFor(4000), ['low_volume'], 'Under half the median is low volume');
T.eq(alertsFor(5000), [], 'Exactly half is not under half');
var spiky = [];
for (var i = 0; i < 14; i++) spiky.push({ logicalDay: 'd' + i, rows: i === 5 ? 1000000 : 10000 });
T.eq(alertsFor(9000, spiky), [], 'One huge night does not move the median. A mean of about 80000 would have flagged a normal night');
var eight = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) { return { logicalDay: 'd' + n, rows: n }; });
T.eq(checkRun({ logicalDay: 'x', rows: 1, latestUpdatedAt: fresh }, eight).median, 4.5, 'With an even count the median is the mean of the two middle values');
` },
          { text: "Quiet days raise no volume alert, and under 7 runs of history there's no baseline.",
            test: R`
var fresh = new Date(now() - 3600000).toISOString();
T.eq(checkRun({ logicalDay: '2026-12-25', rows: 0, latestUpdatedAt: fresh }, HISTORY, { quietDays: ['2026-12-25'] }).alerts, [], 'A day listed as quiet raises no volume alert');
T.eq(checkRun({ logicalDay: '2026-09-16', rows: 0, latestUpdatedAt: fresh }, HISTORY.slice(-6)), { alerts: [], median: null }, 'With fewer than 7 runs of history there is no baseline yet: median null and no volume alert');
T.eq(checkRun({ logicalDay: '2026-09-16', rows: 0, latestUpdatedAt: fresh }, HISTORY.slice(-7)).alerts, ['zero_rows'], 'Seven runs is enough');
` },
          { text: "A source more than 26 hours behind `now()` is `stale`, the limit is configurable, and the same timestamp goes stale as time passes.",
            test: R`
var at = function (hoursAgo) { return new Date(now() - hoursAgo * 3600000).toISOString(); };
var base = { logicalDay: '2026-09-16', rows: 9900 };
T.eq(checkRun(Object.assign({}, base, { latestUpdatedAt: at(27) }), HISTORY).alerts, ['stale'], 'The newest source row is 27 hours old, so the source stopped updating however many rows loaded');
T.eq(checkRun(Object.assign({}, base, { latestUpdatedAt: at(25) }), HISTORY).alerts, [], '25 hours is within the default 26');
T.eq(checkRun(Object.assign({}, base, { latestUpdatedAt: at(27) }), HISTORY, { maxStalenessHours: 48 }).alerts, [], 'maxStalenessHours comes from opts');
var stamp = at(24);
T.advance(3 * 3600000);
T.eq(checkRun({ logicalDay: '2026-09-16', rows: 0, latestUpdatedAt: stamp }, HISTORY).alerts, ['zero_rows', 'stale'], 'Freshness is measured against now(), and the volume alert comes first');
` }
        ],
        files: [
          { name: "script.js", content: u4File(R`
function checkRun(run, history, opts) {
  // The job didn't throw, so everything is fine.
  return { alerts: [], median: null };
}
`) }
        ],
        hints: [
          "Median: copy, sort numerically with `(a, b) => a - b`, then take the middle value, or the mean of the two middle values when the count is even.",
          "Take `history.slice(-14).map(h => h.rows)`. Under 7 values, the median is `null` and there are no volume alerts. Otherwise, unless `run.logicalDay` is in `opts.quietDays`, push `zero_rows` or `low_volume` (`rows > 0 && rows < median / 2`).",
          "Freshness: `now() - Date.parse(run.latestUpdatedAt) > hours * 3600 * 1000`, with `hours` from `opts.maxStalenessHours` or 26. Remember `opts` may be undefined."
        ],
        solution: {
          "script.js": u4File(R`
function median(values) {
  const s = values.slice().sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

function checkRun(run, history, opts) {
  opts = opts || {};
  const alerts = [];
  const recent = history.slice(-14).map(h => h.rows);
  const med = recent.length >= 7 ? median(recent) : null;  // no baseline yet under 7 runs
  const quiet = (opts.quietDays || []).indexOf(run.logicalDay) !== -1;
  if (med !== null && !quiet) {
    if (run.rows === 0 && med > 0) alerts.push("zero_rows");
    else if (run.rows > 0 && run.rows < med / 2) alerts.push("low_volume");
  }
  const maxHours = opts.maxStalenessHours != null ? opts.maxStalenessHours : 26;
  if (now() - Date.parse(run.latestUpdatedAt) > maxHours * 3600 * 1000) alerts.push("stale");
  return { alerts: alerts, median: med };
}
`)
        }
      },

      {
        id: "etl-quiz-6",
        title: "Unit quiz: Orchestration",
        kind: "quiz", xp: 10,
        brief: "DAGs, retries, logical dates and run checks. 80% to pass.",
        questions: [
          { q: "Why should a scheduler reject a dependency cycle when it plans the DAG, rather than discover it while running?",
            choices: ["A cycle can never finish, so finding it at plan time fails fast, before any task touches data", "Cycles are fine as long as each task in the loop completes quickly enough to avoid its timeout", "Running a cycle only wastes compute, since every task in it is idempotent anyway", "The scheduler can break the cycle safely by running its tasks in the order they were listed"],
            answer: 0, explain: "No order satisfies a cycle, so the run can't complete, and anything it did before getting stuck is a partial result. Checking at plan time costs nothing and names the loop so a person can break it. Running tasks in listed order just ignores the dependencies that were declared." },
          { q: "In the nightly DAG, `clean_customers` fails. What should happen to `load_customers` and `extract_orders`?",
            choices: ["Both are skipped, because one failure should stop the whole DAG to keep everything consistent", "load_customers is skipped because its input never arrived; extract_orders still runs", "load_customers runs on yesterday's cleaned data, and extract_orders waits for a retry", "Both run, and load_customers reports its own error when its input turns out to be missing"],
            answer: 1, explain: "A task downstream of a failure is skipped: it never ran, so it has no error of its own. extract_orders doesn't depend on customers, so stopping it would turn one failure into two late datasets. Loading yesterday's data would silently publish stale results." },
          { q: "Which of these errors should an automatic retry loop retry?",
            choices: ["A ValidationError saying row 12's qty isn't a number", "A TypeError from a bug in the transform code", "A timeout connecting to the warehouse", "Any error at all, since retries with backoff are cheap and plenty of errors turn out to resolve themselves"],
            answer: 2, explain: "A timeout is transient: the same call may succeed a moment later. Bad data and bugs fail identically on every attempt, so retrying them only delays the dead letter and the alert. Retrying everything also re-runs tasks that may not be safe to run twice." },
          { q: "Why add random jitter to exponential backoff?",
            choices: ["Jitter makes the total waiting time shorter than plain exponential backoff on average", "Random delays hide the retry pattern from rate limiters, which would otherwise block the retries", "It guarantees the final attempt happens before the job's deadline", "So jobs that failed together don't all retry at the same instant"],
            answer: 3, explain: "When an outage fails a hundred jobs at once, identical backoff schedules make all hundred retry at 1s, then 2s, then 4s, hitting the recovering service in synchronized waves. ±20% spreads them out. On average the total wait is unchanged, and it isn't about evading rate limits." },
          { q: "A daily job computes \"yesterday\" from the clock. The run for the 14th fails and is rerun on the morning of the 16th. What gets loaded?",
            choices: ["The 14th's data, since a rerun keeps the date of the original failed attempt", "Nothing, because schedulers refuse to rerun a job more than one day after it was originally due", "The 15th's data into the 15th's partition, so the 14th is never loaded", "Both days, because the job notices the gap and catches up automatically"],
            answer: 2, explain: "On the 16th, yesterday is the 15th, so the rerun loads the wrong day and nothing ever loads the 14th. A rerun only keeps its date if the job reads it from the run's logical date. That's why the logical date comes from the scheduler, not from now()." },
          { q: "Why compare tonight's row count with the median of recent runs rather than the mean?",
            choices: ["The median is cheaper to compute, since it doesn't have to add up every value in the window", "One unusual night, like a backfill, moves a mean a lot and a median barely at all", "A mean can't be computed when some nights loaded zero rows", "Medians are always lower than means, so they raise fewer false alarms"],
            answer: 1, explain: "A single million-row backfill night can push a 14-night mean to 80,000, making every normal night look like a collapse. The median ignores one outlier. Sorting actually costs more than summing, and medians aren't always lower than means." }
        ]
      }
    ]
  });
})();
