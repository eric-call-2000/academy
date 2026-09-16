/* How Code Scales — Unit 3: Arrays under the hood */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  /* A Proxy that counts element reads, writes, existence checks and deletes
     the way T.counted does. Run-verified checks use it to measure what the
     spec's algorithms really touch. */
  var COUNTING = R`
let ops = 0;
function isIndex(k) { return typeof k === "string" && /^(0|[1-9]\d*)$/.test(k); }
function counted(arr) {
  return new Proxy(arr, {
    get(t, k, r) { if (isIndex(k)) { ops++; } return Reflect.get(t, k, r); },
    set(t, k, v, r) { if (isIndex(k)) { ops++; } return Reflect.set(t, k, v, r); },
    has(t, k) { if (isIndex(k)) { ops++; } return Reflect.has(t, k); },
    deleteProperty(t, k) { if (isIndex(k)) { ops++; } return Reflect.deleteProperty(t, k); }
  });
}
function range(n) { return Array.from({ length: n }, (_, i) => i); }
`;

  var TAKE_FROM_END = R`
function takeFromEnd(n) {
  // pop() removes the last slot. Nothing else moves.
  let moves = 0;
  for (let left = n; left > 0; left--) {
    moves += 1;
  }
  return moves;
}`;

  var TAKE_FROM_FRONT = R`
function takeFromFront(n) {
  // shift() removes slot 0, then moves every remaining
  // element down one slot so the array starts at 0 again.
  let moves = 0;
  for (let left = n; left > 0; left--) {
    moves += left;
  }
  return moves;
}`;

  var STARTER = R`
// 1) Every list joined into one array, in order.
function flatten(lists) {
  return lists.reduce((acc, list) => [...acc, ...list], []);
}

// 2) Run each job, front of the queue first. Returns the results in order.
function processAll(jobs, run) {
  const queue = jobs.slice();
  const results = [];
  while (queue.length > 0) {
    results.push(run(queue.shift()));
  }
  return results;
}

// 3) Split items into groups of size (the last group may be shorter).
function chunks(items, size) {
  const out = [];
  let rest = items;
  while (rest.length > 0) {
    out.push(rest.slice(0, size));
    rest = rest.slice(size);
  }
  return out;
}

console.log(flatten([[1, 2], [3], []]));
console.log(processAll([1, 2, 3], n => n * 10));
console.log(chunks([1, 2, 3, 4, 5], 2));
`;

  var SOLUTION = R`
// 1) Every list joined into one array, in order.
function flatten(lists) {
  const out = [];
  for (const list of lists) {
    for (const item of list) {
      out.push(item);
    }
  }
  return out;
}

// 2) Run each job, front of the queue first. Returns the results in order.
function processAll(jobs, run) {
  const results = [];
  for (let head = 0; head < jobs.length; head++) {
    results.push(run(jobs[head]));
  }
  return results;
}

// 3) Split items into groups of size (the last group may be shorter).
function chunks(items, size) {
  const out = [];
  for (let start = 0; start < items.length; start += size) {
    out.push(items.slice(start, start + size));
  }
  return out;
}

console.log(flatten([[1, 2], [3], []]));
console.log(processAll([1, 2, 3], n => n * 10));
console.log(chunks([1, 2, 3, 4, 5], 2));
`;

  function growthStep(label, make, work) {
    return "var g = T.growth(" + make + ", " + work + ");\n" +
      "T.eq(g.band, 'linear', '" + label + ": operation counts at n = 250, 500, 1000 and 2000 were ' + g.counts.join(', ') + ' (ratios ' + g.ratios.join(', ') + ')');";
  }

  window.CODELAB.addUnit("algo", {
    id: "algo-u3",
    title: "Arrays under the hood",
    icon: "🧮",
    blurb: "An index is a jump, a search is a walk, the front of an array is expensive, and some copies are invisible. What array operations really cost, and three functions to make linear.",
    cheat: [
      { h: "Jump or walk", lang: "js", code: R`
list[i]  list.at(-1)  list.length         // O(1): straight to a slot
list.includes(x)  list.indexOf(x)         // O(n): check slots in turn
list.find(fn)  list.some(fn)  list.filter(fn)   // O(n)`,
        note: "Slots are numbered, so reading one by index is a single step. A value has no address, so finding one means checking slots from the start." },
      { h: "Ends are cheap, the front isn't", lang: "js", code: R`
queue.push(x)   queue.pop()          // O(1): only the end changes
queue.shift()   queue.unshift(x)     // O(n): everything moves one slot
queue.splice(0, 1)                   // O(n) for the same reason`,
        note: "By the spec, one shift on n elements touches about 3n of them. Engines sometimes optimize it; don't rely on that. Read a queue with a head index instead." },
      { h: "Hidden copies", lang: "js", code: R`
acc = [...acc, x]          // copies acc: O(n) each, O(n²) in a loop
acc = acc.concat([x])      // same
rest = rest.slice(1)       // copies what's left, every time
out.push(x)                // adds in place: O(1)`,
        note: "Spread, slice and concat build a new array and copy into it. Once is fine; inside a loop over a growing array, the copies add up to n²." }
    ],
    lessons: [

      {
        id: "algo-u3-1",
        title: "Where an element lives: index vs search",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { ask: { type: "predict",
              q: "`scores` holds 1,000,000 numbers. How many elements does `scores[750000]` have to look at? Type a number.",
              answer: "1",
              accept: ["one"],
              why: "An index is an address: the engine goes straight to slot 750,000. It doesn't walk past the first 750,000 to get there.",
              run: true,
              check: COUNTING + "\nconst scores = counted(new Array(1000000).fill(0));\nops = 0;\nscores[750000];\nconsole.log(ops);" } },

          { read: "An array keeps its elements in numbered slots, one after another. Because every slot has a number, reading slot 750,000 is a single step: the engine works out where that slot is and goes there. That's **O(1)**.\n\nFinding a *value* is different. `scores.includes(98)` has no address to go to, so it checks slot 0, slot 1, slot 2 and so on until it finds 98 or runs out: **O(n)** in the worst case. `indexOf`, `find`, `findIndex` and `some` work the same way.",
            ask: { type: "pick",
              q: "Which of these is O(1) on an array of n items?",
              choices: ["`list.includes(target)`", "`list[list.length - 1]`", "`list.indexOf(target)`", "`list.find(x => x.id === id)`"],
              answer: 1,
              why: [
                "`includes` checks elements one at a time until it finds a match: up to n of them.",
                "The last slot has a number, `length - 1`, so reading it is one step however long the list is.",
                "`indexOf` walks the array from the start just like `includes`: O(n).",
                "`find` calls its function on each element in turn until one matches: O(n)."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "`names` has 5,000 names, and `'Zed'` isn't one of them. How many elements does `names.includes('Zed')` read? Type a number.",
              answer: "5000",
              why: "Nothing matches, so `includes` has to read every one of the 5,000 names before it can say no.",
              run: true,
              check: COUNTING + "\nconst names = counted(Array.from({ length: 5000 }, (_, i) => 'name' + i));\nops = 0;\nnames.includes('Zed');\nconsole.log(ops);" } },

          { ask: { type: "pick", transfer: true,
              q: "`findUser(users, id)` calls `users.find(u => u.id === id)`. A page calls `findUser` once for each of n orders, with a list of n users. What does rendering the page cost?",
              choices: ["O(n), because there is exactly one find call for each order", "O(n²), because each of the n calls may scan all n users", "O(1), because find stops at the first match", "O(log n), because find is built in and searches the array cleverly"],
              answer: 1,
              why: [
                "One call per order is n calls, but each call is itself a scan of up to n users.",
                "n calls × up to n comparisons each. A Map from id to user would make each lookup O(1).",
                "Stopping early helps when the match is near the front. The worst case, a user at the end or missing, still scans all n.",
                "Built-in methods follow the same rules as your code: `find` checks elements one at a time."
              ] } },

          { ask: { type: "explain",
              q: "Explain the difference in work between `list[i]` and `list.includes(x)`.",
              model: "`list[i]` goes straight to slot i, so it's one step however long the list is. `list.includes(x)` has no address for a value, so it checks slots from the start until it finds x: up to n steps.",
              rubric: ["Says indexing goes straight to a slot (O(1))", "Says includes checks elements one at a time", "Gives includes as up to n steps (O(n))"] } }
        ]
      },

      {
        id: "algo-u3-2",
        title: "The front of the line is expensive",
        kind: "concept", xp: 15, mins: 15,
        screens: [
          { read: "A print queue: jobs join at the end and leave from the front. There are two ways to take all n jobs off an array, and the lab counts the elements each one moves.",
            ask: { type: "lab", lab: "doubling",
              params: { fns: [{ label: "pop() from the end", code: TAKE_FROM_END }, { label: "shift() from the front", code: TAKE_FROM_FRONT }], sizes: [250, 500, 1000, 2000] },
              predict: { type: "pick",
                q: "Taking all n jobs off with `shift()`: when n doubles, about how much more work is it?",
                choices: ["About the same", "About ×2", "About ×4", "About ×8"],
                answer: 2,
                why: [
                  "Each shift moves every job still waiting, and there are more of them when n is bigger.",
                  "×2 would be one step per job. But each shift moves all the jobs behind it: n + (n − 1) + … + 1.",
                  "The moves add up to about n²/2, so doubling n quadruples them.",
                  "×8 would take a third level of nesting. This is two: n shifts, each moving up to n jobs."
                ],
                run: true,
                check: COUNTING + "\nfunction drain(n) {\n  const q = counted(range(n));\n  ops = 0;\n  while (q.length > 0) { q.shift(); }\n  return ops;\n}\nconst r = drain(500) / drain(250);\nconsole.log(r > 3.6 && r < 4.4 ? 2 : -1);" } } },

          { read: "The language spec defines `shift()` step by step: take slot 0, then move slot 1 to slot 0, slot 2 to slot 1, and so on to the end. Counted that way, one `shift()` on n elements touches about 3n of them (it checks, reads and writes each one it moves), and `unshift(x)` does the same in reverse. `push` and `pop` touch only the end: one or two.\n\nEngines sometimes optimize `shift` internally, so a timing might not show the cost. Don't rely on that. By the spec it's O(n).",
            ask: { type: "pick",
              q: "By the spec, which pair of operations is O(n) on an array of n items?",
              choices: ["`push` and `pop`", "`shift` and `unshift`", "`arr[i]` and `arr.length`", "`pop` and `arr[i]`"],
              answer: 1,
              why: [
                "Both work at the end of the array, where nothing else has to move.",
                "Removing or adding at slot 0 moves every other element by one slot.",
                "Reading a slot by number and reading the length are both single steps.",
                "`pop` changes only the last slot, and `arr[i]` jumps straight to slot i."
              ],
              run: true,
              check: COUNTING + "\nfunction cost(op) {\n  const small = counted(range(1000)), big = counted(range(2000));\n  ops = 0; op(small); const a = ops;\n  ops = 0; op(big); const b = ops;\n  return b / Math.max(a, 1);\n}\nconst growsWithN = [a => { a.push(1); a.pop(); }, a => { a.shift(); a.unshift(1); }, a => { a[5]; a.length; }, a => { a.pop(); a[5]; }]\n  .map(op => cost(op) > 1.5);\nconsole.log(growsWithN.indexOf(true) === growsWithN.lastIndexOf(true) ? growsWithN.indexOf(true) : -1);" } },

          { read: "The fix for a queue is to not remove anything from the front. Keep a **head index** that says where the front is, and move it forward. Each job then costs one read, so draining n jobs is O(n). The array still holds the finished jobs, and that's fine when the whole batch is processed and then thrown away.",
            ask: { type: "order", transfer: true,
              q: "Build a loop that runs every job in `jobs`, front first, without removing any.",
              lines: ["let head = 0;", "while (head < jobs.length) {", "  run(jobs[head]);", "  head++;", "}"],
              distractors: ["  run(jobs.shift());", "  head--;"],
              why: "`head` starts at the front and moves one slot per job, so the array never shifts. `jobs.shift()` would move every waiting job on every pass." } },

          { ask: { type: "pick", transfer: true,
              q: "An undo history adds each new action with `history.unshift(action)`, so `history[0]` is always the latest. After n actions, what did adding them cost?",
              choices: ["O(n) in total, because each action is only one unshift call", "O(n²) in total, since each unshift moves everything already there", "O(1) in total, since unshift is a built-in method that runs natively", "O(log n) in total, since the history is only ever read from the front"],
              answer: 1,
              why: [
                "One call per action, but each call moves every action already stored: 1 + 2 + … + n.",
                "unshift makes room at slot 0 by moving everything up one. Using `push`, and reading `history[history.length - 1]`, makes each action O(1).",
                "Built-in doesn't mean free: by the spec, unshift moves every element.",
                "How the history is read doesn't change what adding to it costs."
              ],
              run: true,
              check: COUNTING + "\nfunction build(n) {\n  const h = counted([]);\n  ops = 0;\n  for (let i = 0; i < n; i++) { h.unshift(i); }\n  return ops;\n}\nconst r = build(500) / build(250);\nconsole.log(r > 3.5 ? 1 : -1);" } },

          { ask: { type: "explain",
              q: "Why does removing from the front of an array cost more than removing from the end?",
              model: "Arrays keep elements in slots numbered from 0. Removing slot 0 means moving every remaining element down one slot, which is about n moves. Removing the last slot moves nothing.",
              rubric: ["Says elements live in numbered slots starting at 0", "Says shift moves every remaining element", "Says pop at the end moves nothing (O(1))"] } }
        ]
      },

      {
        id: "algo-u3-3",
        title: "Copies you didn't see",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { ask: { type: "predict",
              q: "Each spread copies every element it spreads. What does this print?",
              code: R`
let copied = 0;
const lists = [[1], [2], [3], [4], [5]];
let all = [];
for (const list of lists) {
  copied += all.length + list.length;
  all = [...all, ...list];
}
console.log(copied);`,
              answer: "15",
              why: "The copies grow as `all` grows: 1, 2, 3, 4, 5. Together that's 15 copies to build a 5-item array, and 1 + 2 + … + n grows like n².",
              run: true } },

          { read: "Spread, `slice` and `concat` build a **new** array and copy every element into it. That's fine once. Inside a loop, where the array being copied keeps growing, the copies add up to 1 + 2 + 3 + … + n: **O(n²)**.\n\nThe classic example builds a result in `reduce`:\n\n```js\nlists.reduce((acc, list) => [...acc, ...list], [])\n```\n\nIt reads cleanly, and it copies `acc` again on every step.",
            ask: { type: "pick",
              q: "Inside a loop over n items, which line makes the loop O(n²)?",
              choices: ["`out.push(item)`", "`out = [...out, item]`", "`count = count + item.length`", "`seen.add(item.id)`"],
              answer: 1,
              why: [
                "`push` adds to the end of the same array: O(1).",
                "Every pass copies all of `out` into a new array, and `out` keeps growing.",
                "Adding a number is one step, however long `item` is.",
                "Adding to a Set is constant work on average."
              ] } },

          { read: "The fix keeps one array and adds to it in place. Build the function from these lines. It must return the same flat array, in the same order.",
            ask: { type: "order", transfer: true,
              q: "Build `flatten(lists)` so it runs in O(total items).",
              lines: ["function flatten(lists) {", "  const out = [];", "  for (const list of lists) {", "    out.push(...list);", "  }", "  return out;", "}"],
              distractors: ["    out = [...out, ...list];", "    out.concat(list);"],
              why: "One array, and `push` adds each list's items to its end. Rebuilding `out` with a spread copies everything again on each pass, and `concat` returns a new array without changing `out` at all." } },

          { ask: { type: "predict", transfer: true,
              q: "What's the big-O of `copyAll` for n items?",
              code: R`
function copyAll(items) {
  let result = [];
  for (const item of items) {
    result = result.concat([item]);
  }
  return result;
}`,
              answer: "O(n²)",
              accept: ["O(n^2)", "n²", "n^2", "quadratic"],
              why: "`concat` builds a new array holding everything already in `result` plus the new item: 1 + 2 + … + n copies, which is O(n²)." } },

          { ask: { type: "pick", transfer: true,
              q: "`rest = rest.slice(1)` runs inside a loop until `rest` is empty. For n items, what's the total cost?",
              choices: ["O(n), since each slice(1) only drops a single item from the front", "O(n²), since each slice copies everything that's left", "O(log n), since the array keeps shrinking", "O(1), since slice doesn't change the original array"],
              answer: 1,
              why: [
                "It drops one item, but it copies the other n − 1 to do it, then n − 2, and so on.",
                "(n − 1) + (n − 2) + … + 1 copies is about n²/2. Walking an index forward instead costs one step per item.",
                "Shrinking by one each time isn't halving: it takes n passes, not log n.",
                "Not changing the original is exactly why it copies: it has to build a new array."
              ],
              run: true,
              check: COUNTING + "\nfunction eat(n) {\n  let rest = range(n);\n  let copied = 0;\n  while (rest.length > 0) { rest = rest.slice(1); copied += rest.length; }\n  return copied;\n}\nconst r = eat(2000) / eat(1000);\nconsole.log(r > 3.6 ? 1 : -1);" } }
        ]
      },

      {
        id: "algo-u3-4",
        title: "Make it linear",
        kind: "js", chip: "JS", xp: 15, mins: 16, count: true,
        brief: "Three functions that work, each with a quadratic cost hiding in it:\n\n- **`flatten(lists)`** copies the whole result with a spread on every step of `reduce`.\n- **`processAll(jobs, run)`** takes jobs off a queue with `shift()`, which moves every waiting job each time.\n- **`chunks(items, size)`** keeps `rest = rest.slice(size)`, which copies everything that's left on each pass.\n\nRewrite each one so it's linear. The outputs must stay exactly the same: the same items, in the same order. `processAll` must call `run` once per job, front first, and neither it nor the others may change the arrays they're given.\n\nAs in Unit 1, the checks run a doubling test: they count the passes of your loops and the elements built-in methods like `slice`, spread and `shift` touch. Put braces around every loop body.",
        steps: [
          { text: "`flatten` joins the lists in order and leaves its input alone.",
            test: R`
T.eq(flatten([[1, 2], [3], []]), [1, 2, 3], 'Lists joined in order');
T.eq(flatten([]), [], 'No lists gives an empty array');
T.eq(flatten([[], []]), [], 'Empty lists add nothing');
T.eq(flatten([[[1]], [2]]), [[1], 2], 'Only one level is flattened: an inner array stays an array');
var input = [[1], [2, 3]];
flatten(input);
T.eq(input, [[1], [2, 3]], 'flatten must not change the lists it was given');
` },
          { text: "`flatten` is linear.",
            test: growthStep("flatten", "function (n) { return Array.from({ length: n }, function (_, i) { return [i]; }); }", "function (lists) { flatten(lists); }") },
          { text: "`processAll` runs every job once, front first, and leaves `jobs` alone.",
            test: R`
var seen = [];
var out = processAll(['a', 'b', 'c'], function (job) { seen.push(job); return job.toUpperCase(); });
T.eq(out, ['A', 'B', 'C'], 'Results come back in job order');
T.eq(seen, ['a', 'b', 'c'], 'run is called once per job, front of the queue first');
T.eq(processAll([], function () { return 1; }), [], 'No jobs, no results');
var jobs = [1, 2, 3];
processAll(jobs, function (n) { return n; });
T.eq(jobs, [1, 2, 3], 'processAll must not empty or change the array it was given');
` },
          { text: "`processAll` is linear.",
            test: growthStep("processAll", "function (n) { return Array.from({ length: n }, function (_, i) { return i; }); }", "function (jobs) { processAll(jobs, function (j) { return j; }); }") },
          { text: "`chunks` splits into groups of `size`, with a shorter last group, and leaves `items` alone.",
            test: R`
T.eq(chunks([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]], 'Groups of 2, last one shorter');
T.eq(chunks([1, 2, 3], 3), [[1, 2, 3]], 'An exact fit is one group');
T.eq(chunks([1, 2], 5), [[1, 2]], 'A size bigger than the list is one group');
T.eq(chunks([], 3), [], 'No items, no groups');
var items = [1, 2, 3, 4];
chunks(items, 2);
T.eq(items, [1, 2, 3, 4], 'chunks must not change the array it was given');
` },
          { text: "`chunks` is linear.",
            test: growthStep("chunks", "function (n) { return Array.from({ length: n }, function (_, i) { return i; }); }", "function (items) { chunks(items, 2); }") }
        ],
        files: [{ name: "script.js", content: STARTER }],
        solution: { "script.js": SOLUTION },
        hints: [
          "flatten: start with `const out = [];` and push each item of each list onto it, instead of rebuilding `acc` with a spread.",
          "processAll: don't copy and shift. Walk an index from 0 to `jobs.length - 1` and call `run(jobs[head])`.",
          "chunks: step a start index by `size`, and slice just one group each time: `items.slice(start, start + size)`."
        ]
      },

      {
        id: "algo-quiz-3",
        title: "Unit 3 quiz: Arrays under the hood",
        kind: "quiz", xp: 10,
        brief: "Indexing, searching, the cost of the front of an array, and copies inside loops. 80% to pass.",
        questions: [
          { q: "Why is `list[i]` O(1) while `list.includes(x)` is O(n)?",
            choices: ["`includes` sorts the whole list before it searches it, and the sorting is what takes the extra time", "Slots are numbered, so an index goes straight to one slot; a value is looked for slot by slot", "Reading by index is cached after the first read, so every later read of that slot costs nothing", "`includes` makes a full copy of the array first, then starts searching through the copy it made"],
            answer: 1, explain: "An array's elements sit in numbered slots, so the engine can go straight to slot i. A value has no address, so `includes` checks slots from the start until it finds a match or runs out." },
          { q: "By the spec, what does one `shift()` do to an array of n elements?",
            choices: ["Removes the last element of the array and leaves every other element where it is", "Removes slot 0 and moves every remaining element down one slot", "Marks slot 0 as an empty hole and leaves all of the remaining elements where they are", "Swaps slot 0 with the very last slot, and then removes the last slot from the array"],
            answer: 1, explain: "shift returns slot 0 and then moves slot 1 to 0, slot 2 to 1, and so on, so the array starts at 0 again. That's about n moves: O(n). pop is the one that only touches the end." },
          { q: "A queue of jobs is drained with a head index instead of `shift()`. What does draining n jobs cost?",
            choices: ["O(n²)", "O(n)", "O(log n)", "O(1)"],
            answer: 1, explain: "Each job is one read at `jobs[head]` followed by `head++`. Nothing moves, so n jobs cost n steps." },
          { q: "What's the cost of this loop over n items?",
            code: "let out = [];\nfor (const item of items) {\n  out = [...out, item];\n}",
            choices: ["O(n), since each pass through the loop adds exactly one item to out", "O(1), since spread syntax is handled natively by the JavaScript engine", "O(n log n), since the engine makes the copies in chunks behind the scenes", "O(n²), since each pass copies all of out into a new array"],
            answer: 3, explain: "The spread copies every element already in `out`, and `out` grows by one each pass: 1 + 2 + … + n copies. `out.push(item)` adds in place in O(1)." },
          { q: "Which change makes `rest = rest.slice(1)` inside a loop linear?",
            choices: ["Use `rest.slice(1, rest.length)`, which names both ends of the part to keep", "Keep the array and move an index forward instead of slicing", "Replace `slice` with `concat`, which joins arrays rather than cutting them apart", "Call `rest.shift()` instead, which removes the first item without making a copy"],
            answer: 1, explain: "Any slice copies what's left, and so does concat. shift doesn't copy but moves every element instead. An index that moves forward touches each item once." },
          { q: "An undo history adds each action with `unshift`. What's the simplest O(1)-per-action fix?",
            choices: ["Add with `push` and read the latest from the end", "Add with `splice(0, 0, action)` instead", "Reverse the whole array after each unshift", "Copy the history with a spread before each unshift"],
            answer: 0, explain: "push touches only the end, and the latest action is then `history[history.length - 1]`. splice at index 0 moves everything just like unshift, and reversing or copying costs O(n) each time." }
        ]
      }
    ]
  });
})();
