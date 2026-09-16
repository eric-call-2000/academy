/* How Code Scales — Unit 5: Searching and sorting */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var LIST = "const list = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];";

  var SEARCH = R`
let lo = 0;
let hi = list.length - 1;
while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (list[mid] === target) { return mid; }
  if (list[mid] < target) { lo = mid + 1; }
  else { hi = mid - 1; }
}
return -1;`;

  function traceCheck(target) {
    return LIST + "\nconst target = " + target + ";\nconst rows = [];\nlet lo = 0;\nlet hi = list.length - 1;\nwhile (lo <= hi) {\n  const mid = Math.floor((lo + hi) / 2);\n  rows.push([lo, hi, mid]);\n  if (list[mid] === target) { break; }\n  if (list[mid] < target) { lo = mid + 1; } else { hi = mid - 1; }\n}\nconsole.log(JSON.stringify(rows));";
  }

  var WORST = R`
// Worst case for a range of "size" items when you always look at the middle:
// one look, then the worse of the two halves that remain.
function worst(size) {
  if (size <= 0) { return 0; }
  const left = Math.floor((size - 1) / 2);
  return 1 + Math.max(worst(left), worst(size - 1 - left));
}`;

  var INSERTION = R`
function insertionSort(n) {
  // n items in reverse order: the worst case.
  const a = Array.from({ length: n }, (_, i) => n - i);
  let comparisons = 0;
  for (let i = 1; i < a.length; i++) {
    let j = i;
    while (j > 0) {
      comparisons++;
      if (a[j - 1] <= a[j]) {
        break;
      }
      const t = a[j - 1]; a[j - 1] = a[j]; a[j] = t;
      j--;
    }
  }
  return comparisons;
}`;

  var MERGE = R`
function mergeSort(n) {
  // The same reversed input.
  let comparisons = 0;
  function sort(a) {
    if (a.length <= 1) {
      return a;
    }
    const mid = Math.floor(a.length / 2);
    const left = sort(a.slice(0, mid));
    const right = sort(a.slice(mid));
    const out = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      comparisons++;
      if (left[i] <= right[j]) {
        out.push(left[i]); i++;
      } else {
        out.push(right[j]); j++;
      }
    }
    return out.concat(left.slice(i), right.slice(j));
  }
  sort(Array.from({ length: n }, (_, i) => n - i));
  return comparisons;
}`;

  var BS_STARTER = R`
// sorted is in ascending order and may contain repeats.

// The index of the FIRST x in sorted, or -1.
function indexOf(sorted, x) {
  return sorted.indexOf(x);
}

// The first index where x could be inserted and keep sorted in order:
// the number of items smaller than x.
function insertionPoint(sorted, x) {
  let i = 0;
  while (i < sorted.length && sorted[i] < x) {
    i++;
  }
  return i;
}

console.log(indexOf([2, 4, 4, 4, 9], 4), insertionPoint([2, 4, 4, 4, 9], 5));
`;

  var BS_SOLUTION = R`
// sorted is in ascending order and may contain repeats.

// The index of the FIRST x in sorted, or -1.
function indexOf(sorted, x) {
  const i = insertionPoint(sorted, x);
  if (i < sorted.length && sorted[i] === x) {
    return i;
  }
  return -1;
}

// The first index where x could be inserted and keep sorted in order:
// the number of items smaller than x.
function insertionPoint(sorted, x) {
  let lo = 0;
  let hi = sorted.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (sorted[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

console.log(indexOf([2, 4, 4, 4, 9], 4), insertionPoint([2, 4, 4, 4, 9], 5));
`;

  window.CODELAB.addUnit("algo", {
    id: "algo-u5",
    title: "Searching and sorting",
    icon: "🔍",
    blurb: "Binary search by hand and in code, counted to the element; why sorting costs n log n and when it costs much less; and what JavaScript's own sort promises.",
    cheat: [
      { h: "Binary search", lang: "js", code: R`
let lo = 0, hi = list.length - 1;
while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (list[mid] === target) { return mid; }
  if (list[mid] < target) { lo = mid + 1; } else { hi = mid - 1; }
}
return -1;`,
        note: "Sorted input only. Each look halves what's left: O(log n), at most 20 looks for a million items. <= keeps the last remaining item in play." },
      { h: "First match: the insertion point", lang: "js", code: R`
let lo = 0, hi = sorted.length;       // hi is one past the end
while (lo < hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (sorted[mid] < x) { lo = mid + 1; } else { hi = mid; }
}
return lo;   // count of items < x`,
        note: "With repeats, this finds the first index where x fits. x is present when sorted[lo] === x." },
      { h: "Sorting costs", lang: "text", code: R`
insertion sort   O(n²) worst, about n on nearly sorted input
merge sort       O(n log n): log n levels × n work per level
TimSort (V8)     O(n log n), fast on runs already in order
comparison sorts can't beat n log n in the worst case`,
        note: "Sort once and binary search many times, when lookups outnumber updates." },
      { h: "JavaScript's sort", lang: "js", code: R`
[10, 9, 1].sort()                  // [1, 10, 9]: compares as strings
nums.sort((a, b) => a - b)         // numbers, ascending
[...nums].sort((a, b) => b - a)    // a sorted copy, descending
(a, b) => a > b                    // broken: returns a boolean`,
        note: "sort changes the array in place and returns it. Since ES2019 it's stable: equal items keep their order." }
    ],
    lessons: [

      {
        id: "algo-u5-1",
        title: "Binary search by hand",
        kind: "concept", xp: 15, mins: 17,
        screens: [
          { read: "When a list is **sorted**, you don't need to check every item. Look at the middle one. If it's smaller than what you want, everything to its left is smaller too, so throw that half away. If it's bigger, throw away the right half. Repeat on what's left.\n\nThat's **binary search**, Unit 2's halving applied to an array: O(log n). Two indexes, `lo` and `hi`, mark the part still in play:\n\n```js\n" + SEARCH + "\n```",
            ask: { type: "trace",
              q: "Search this list for **23**. Fill in `lo`, `hi` and `mid` at the start of each pass through the loop.",
              code: LIST,
              columns: ["lo", "hi", "mid"],
              rows: [[0, 9, 4], [5, 9, 7], [5, 6, 5]],
              why: "Pass 1: slot 4 holds 16, less than 23, so lo becomes 5. Pass 2: slot 7 holds 56, more than 23, so hi becomes 6. Pass 3: slot 5 holds 23. Found in three looks.",
              run: true,
              check: traceCheck(23) } },

          { ask: { type: "trace", transfer: true,
              q: "Now search the same list for **6**, which isn't in it. Fill in each pass until the loop stops.",
              code: LIST,
              columns: ["lo", "hi", "mid"],
              rows: [[0, 9, 4], [0, 3, 1], [2, 3, 2]],
              why: "16 is more than 6, so hi becomes 3. Slot 1 holds 5, less than 6, so lo becomes 2. Slot 2 holds 8, more than 6, so hi becomes 1. Now lo (2) is past hi (1), the loop stops, and the answer is -1.",
              run: true,
              check: traceCheck(6) } },

          { ask: { type: "order", transfer: true,
              q: "Build binary search. `list` is sorted; return the index of `target`, or -1.",
              lines: ["let lo = 0;", "let hi = list.length - 1;", "while (lo <= hi) {", "  const mid = Math.floor((lo + hi) / 2);", "  if (list[mid] === target) { return mid; }", "  if (list[mid] < target) { lo = mid + 1; }", "  else { hi = mid - 1; }", "}", "return -1;"],
              groups: [[0, 1]],
              distractors: ["while (lo < hi) {", "  if (list[mid] < target) { lo = mid; }"],
              why: "The two starting bounds can come in either order. `lo <= hi` keeps a last single item in play, and `mid + 1` moves past the item just checked; `lo = mid` can repeat the same look forever." } },

          { ask: { type: "pick", transfer: true,
              q: "In that loop, what goes wrong with `while (lo < hi)` instead of `while (lo <= hi)`?",
              choices: ["Nothing: the two conditions always behave the same way", "When one item is left (lo equals hi), the loop stops without checking it", "The loop can never end whenever the target isn't anywhere in the list", "It ends up checking every single item, so the whole search becomes O(n) instead"],
              answer: 1,
              why: [
                "They differ exactly when lo equals hi, which happens whenever the range narrows to one item.",
                "Searching `[5]` for 5 starts with lo = 0 and hi = 0. With `<` the loop never runs, and it returns -1.",
                "Each pass still moves lo up or hi down, so the loop always ends. It just ends one look too early.",
                "The halving is unchanged, so it's still O(log n). It's wrong, not slow."
              ],
              run: true,
              check: "function search(list, target) {\n  let lo = 0, hi = list.length - 1;\n  while (lo < hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (list[mid] === target) { return mid; }\n    if (list[mid] < target) { lo = mid + 1; } else { hi = mid - 1; }\n  }\n  return -1;\n}\nconsole.log(search([5], 5) === -1 ? 1 : -1);" } },

          { ask: { type: "predict", transfer: true,
              q: "At most, how many items does binary search look at in a sorted list of 1,000,000? Type a number.",
              answer: "20",
              why: "Each look halves what's left, and a million can be halved about 20 times before nothing remains, because 2²⁰ is just over a million.",
              run: true,
              check: WORST + "\nconsole.log(worst(1000000));" } }
        ]
      },

      {
        id: "algo-u5-2",
        title: "Binary search, counted",
        kind: "js", chip: "JS", xp: 15, mins: 16, count: true,
        brief: "Two functions on a **sorted** array that may contain repeats. Both work, and both walk from the front:\n\n- **`insertionPoint(sorted, x)`** is the first index where `x` could be inserted and keep the array sorted. That's also the number of items smaller than `x`. For `[2, 4, 4, 4, 9]`, it's 1 for 4, 4 for 5, and 5 for 10.\n- **`indexOf(sorted, x)`** is the index of the **first** `x`, or -1.\n\nRewrite `insertionPoint` as a binary search. Because of repeats, don't stop when you see `x`; keep narrowing toward the first place it fits:\n\n```js\nlet lo = 0;\nlet hi = sorted.length;   // one past the end\nwhile (lo < hi) {\n  const mid = Math.floor((lo + hi) / 2);\n  // if sorted[mid] < x, the answer is right of mid\n  // otherwise it's mid or left of it\n}\nreturn lo;\n```\n\nThen write `indexOf` using it: `x` is present exactly when the item at the insertion point is `x`.\n\nThe checks count every element your functions read, on a sorted array of 1,000,000 items. A binary search reads about 20. Put braces around every loop body.",
        steps: [
          { text: "`insertionPoint` is right, including repeats and both ends.",
            test: R`
var a = [2, 4, 4, 4, 9];
T.eq([0, 2, 3, 4, 5, 9, 10].map(function (x) { return insertionPoint(a, x); }), [0, 0, 1, 1, 4, 4, 5], 'Insertion points in [2, 4, 4, 4, 9] for 0, 2, 3, 4, 5, 9 and 10');
T.eq(insertionPoint([], 7), 0, 'An empty array: insert at 0');
T.eq(insertionPoint([1, 3], 2), 1, 'Between two items');
` },
          { text: "`indexOf` finds the first copy, or -1.",
            test: R`
var a = [2, 4, 4, 4, 9];
T.eq(indexOf(a, 4), 1, 'The first 4 is at index 1');
T.eq(indexOf(a, 2), 0, 'The first item');
T.eq(indexOf(a, 9), 4, 'The last item');
T.eq(indexOf(a, 5), -1, 'Missing, between items');
T.eq(indexOf(a, 100), -1, 'Missing, past the end');
T.eq(indexOf([], 1), -1, 'An empty array');
` },
          { text: "`insertionPoint` reads at most 21 elements of a 1,000,000-item array.",
            test: R`
var big = T.counted(Array.from({ length: 1000000 }, function (_, i) { return i * 2; }));
[1, 1999998, 777777, -5, 5000000, 0].forEach(function (x) {
  T.resetOps();
  var at = insertionPoint(big, x);
  var reads = T.reads();
  T.expect(reads <= 21, 'insertionPoint(' + x + ') read ' + reads + ' elements; binary search needs at most 21');
  T.eq(at, x <= 0 ? 0 : Math.min(Math.ceil(x / 2), 1000000), 'insertionPoint(' + x + ') is still correct');
});
` },
          { text: "`indexOf` reads at most 22 elements of a 1,000,000-item array.",
            test: R`
var big = T.counted(Array.from({ length: 1000000 }, function (_, i) { return i * 2; }));
[[1999998, 999999], [0, 0], [777778, 388889], [777777, -1], [5000000, -1]].forEach(function (c) {
  T.resetOps();
  var at = indexOf(big, c[0]);
  var reads = T.reads();
  T.expect(reads <= 22, 'indexOf(' + c[0] + ') read ' + reads + ' elements; binary search needs at most 22');
  T.eq(at, c[1], 'indexOf(' + c[0] + ') is still correct');
});
` }
        ],
        files: [{ name: "script.js", content: BS_STARTER }],
        solution: { "script.js": BS_SOLUTION },
        hints: [
          "Inside the loop: `if (sorted[mid] < x) { lo = mid + 1; } else { hi = mid; }`. Everything left of lo is smaller than x, and hi never passes the first place x fits.",
          "Don't return early when `sorted[mid] === x`: with repeats, an earlier copy may be to the left. Keep narrowing until lo equals hi.",
          "indexOf: `const i = insertionPoint(sorted, x);` then return i when `i < sorted.length && sorted[i] === x`, otherwise -1. Don't call the array's own `indexOf`, which reads from the front."
        ]
      },

      {
        id: "algo-u5-3",
        title: "Why sorting costs n log n",
        kind: "concept", xp: 15, mins: 18,
        screens: [
          { read: "Two ways to sort a list that's in reverse order. **Insertion sort** takes each item and walks it left past everything bigger. **Merge sort** splits the list in half, sorts each half, then merges them. The lab counts comparisons.",
            ask: { type: "lab", lab: "doubling",
              params: { fns: [{ label: "Insertion sort", code: INSERTION }, { label: "Merge sort", code: MERGE }], sizes: [250, 500, 1000, 2000] },
              predict: { type: "pick",
                q: "When n doubles, about how many more comparisons does each sort make?",
                choices: ["Both about ×2, since sorting has to look at each item", "Insertion about ×4; merge a little over ×2", "Both about ×4, since sorting compares items against each other", "Insertion about ×2; merge about ×4"],
                answer: 1,
                why: [
                  "Insertion sort walks each item past all the bigger ones, and reversed input makes that every earlier item: n²/2.",
                  "Insertion sort is O(n²), so ×4. Merge sort is O(n log n): ×2 for n, plus a little for log n growing by one.",
                  "Merge sort never compares every pair: it only compares the front items of two sorted halves.",
                  "It's the other way round: insertion sort's nested walk is the n² one."
                ],
                run: true,
                check: INSERTION + "\n" + MERGE + "\nconst ins = insertionSort(2000) / insertionSort(1000), mer = mergeSort(2000) / mergeSort(1000);\nconsole.log(ins > 3.8 && ins < 4.2 && mer > 2 && mer < 2.4 ? 1 : -1);" } } },

          { read: "Merge sort's trick is the **merge**. Two halves that are already sorted can be combined in one pass: compare the front item of each, take the smaller, repeat. When one side runs out, the rest of the other side goes on the end.\n\nThe list can be halved about log₂ n times before the pieces have one item each. At every level of halving, the merges together handle all n items. So merge sort does about n comparisons, log n times: **O(n log n)**.",
            ask: { type: "trace",
              q: "Merge `[3, 8, 12]` (left) and `[5, 6, 20]` (right). Fill in the item taken at each step, and the side it came from (`left` or `right`).",
              code: "const left = [3, 8, 12];\nconst right = [5, 6, 20];",
              columns: ["taken", "from"],
              rows: [[3, "left"], [5, "right"], [6, "right"], [8, "left"], [12, "left"], [20, "right"]],
              why: "3 beats 5, then 5 and 6 beat 8, then 8 and 12 beat 20. Left is now empty, so 20 goes on the end without a comparison.",
              run: true,
              check: "const left = [3, 8, 12], right = [5, 6, 20];\nconst rows = [];\nlet i = 0, j = 0;\nwhile (i < left.length && j < right.length) {\n  if (left[i] <= right[j]) { rows.push([left[i], 'left']); i++; } else { rows.push([right[j], 'right']); j++; }\n}\nwhile (i < left.length) { rows.push([left[i], 'left']); i++; }\nwhile (j < right.length) { rows.push([right[j], 'right']); j++; }\nconsole.log(JSON.stringify(rows));" } },

          { read: "No sort that works by comparing pairs of items can beat O(n log n) in the worst case. V8, the engine in Chrome and Node, implements `sort` with **TimSort**, a merge sort variant that meets that bound.\n\nBig-O is the worst case, though. On a list that's **already almost in order**, insertion sort's items barely move, so it does about n comparisons. TimSort uses exactly that: it looks for stretches already in order and sorts short ones by insertion.",
            ask: { type: "pick", transfer: true,
              q: "A sorted list of 100,000 prices gets 3 new prices added at the end. Which is true about insertion sort on it?",
              choices: ["It would still need about ten billion comparisons to put the three new prices in place", "It does little work, since almost every item is already in its place", "It can't finish, since insertion sort only works on short lists", "It's O(n log n) here, because most of the list is sorted"],
              answer: 1,
              why: [
                "Ten billion is the reversed-input worst case, n². Here only the 3 new items walk left.",
                "The 100,000 sorted items each need one comparison, and the 3 new ones walk left past at most 100,000 each: a few hundred thousand, nowhere near n².",
                "Insertion sort works on any length. It's just slow on badly ordered input.",
                "On this input it's about n, which is better than n log n. Big-O names the worst case, not this one."
              ],
              run: true,
              check: "const a = Array.from({ length: 100000 }, (_, i) => i);\na.push(50000, 7, 99999);\nlet comparisons = 0;\nfor (let i = 1; i < a.length; i++) {\n  let j = i;\n  while (j > 0) {\n    comparisons++;\n    if (a[j - 1] <= a[j]) { break; }\n    const t = a[j - 1]; a[j - 1] = a[j]; a[j] = t;\n    j--;\n  }\n}\nconsole.log(comparisons < 1000000 ? 1 : -1);" } },

          { ask: { type: "pick", transfer: true,
              q: "You'll look up 10,000 different names in a list of 1,000,000. Which plan does the least work?",
              choices: ["Scan the whole list with `includes` for each of the 10,000 names, since that's simplest", "Sort once (about 20 million comparisons), then binary search each name in about 20 steps", "Sort the list again before each of the 10,000 lookups, then binary search it each time", "Scan for each name but stop at its first match, which on average halves the work of a scan"],
              answer: 1,
              why: [
                "10,000 scans of up to 1,000,000 names is up to 10 billion comparisons.",
                "About 20 million to sort plus 10,000 × 20 to search: roughly 20 million in total. A Set would also work, trading memory for the sort.",
                "Sorting 10,000 times is about 200 billion comparisons, far more than scanning.",
                "Half of 10 billion is still 5 billion, and names that aren't in the list scan everything."
              ],
              run: true,
              check: "const n = 1000000, lookups = 10000, log = Math.ceil(Math.log2(n));\nconst costs = [lookups * n, n * log + lookups * log, lookups * n * log, lookups * n / 2];\nconsole.log(costs.indexOf(Math.min(...costs)));" } },

          { ask: { type: "explain",
              q: "In your own words: why is merge sort O(n log n)?",
              model: "The list can only be halved about log n times before the pieces have one item each. At each level of halving, merging all the pieces back together takes about n comparisons, so the total is about n × log n.",
              rubric: ["Says the list is halved about log n times", "Says each level of merging does about n work", "Multiplies the two: n × log n"] } }
        ]
      },

      {
        id: "algo-u5-4",
        title: "JavaScript's sort, honestly",
        kind: "concept", xp: 15, mins: 14,
        screens: [
          { ask: { type: "predict",
              q: "What does this print?",
              code: "console.log(String([10, 9, 1].sort()));",
              answer: "1,10,9",
              why: "With no comparator, `sort` compares items as strings. `\"10\"` comes before `\"9\"` because the character 1 comes before 9.",
              run: true } },

          { read: "With no argument, `sort` converts items to **strings** and compares those character by character, so `\"10\"` sorts before `\"9\"`. For numbers, pass a comparator: `(a, b) => a - b`. You wrote comparators in Learn JavaScript; this lesson is about what `sort` promises beyond that.\n\n`sort` also works **in place**: it changes the array you call it on, and returns that same array rather than a copy.",
            ask: { type: "predict",
              q: "What does this print?",
              code: R`
const nums = [3, 1, 2];
const sorted = nums.sort((a, b) => a - b);
console.log(String(nums), sorted === nums);`,
              answer: "1,2,3 true",
              accept: ["1,2,3, true", "1, 2, 3 true"],
              why: "`sort` rearranged `nums` itself and returned it, so `nums` is now sorted and `sorted` is the very same array. To keep the original, sort a copy: `[...nums].sort(...)`.",
              run: true } },

          { read: "Since ES2019 the language requires `sort` to be **stable**: items that compare as equal keep the order they were in. So you can sort people by age, and people of the same age stay in their previous order.",
            ask: { type: "predict", transfer: true,
              q: "What does this print? Type the names separated by commas.",
              code: R`
const people = [
  { name: "Ann", age: 30 },
  { name: "Bo", age: 25 },
  { name: "Cy", age: 30 },
  { name: "Di", age: 25 }
];
people.sort((a, b) => a.age - b.age);
console.log(people.map(p => p.name).join(","));`,
              answer: "Bo,Di,Ann,Cy",
              accept: ["Bo, Di, Ann, Cy"],
              why: "Everyone aged 25 comes first, then everyone aged 30. Within each age, the order is the original one: Bo before Di, and Ann before Cy.",
              run: true } },

          { read: "A comparator must return a **number**: negative when `a` goes first, positive when `b` does, and 0 for a tie. A common bug returns a boolean instead: `(a, b) => a > b`. `true` counts as 1 and `false` as 0, so whenever `a` is smaller the sort is told the two items tie. The spec then leaves the result up to the engine.",
            ask: { type: "predict",
              q: "In Chrome and Node, what does this print?",
              code: "console.log(String([3, 1, 2].sort((a, b) => a > b)));",
              answer: "3,1,2",
              why: "Every comparison that should say \"a first\" says \"tie\" instead, and V8 keeps tied items where they are, so nothing moves. Other engines may produce something else, which is the point: the order isn't defined.",
              run: true } },

          { ask: { type: "pick", transfer: true,
              q: "`scores` is an array of numbers. Which line sorts it from highest to lowest without changing `scores`?",
              choices: ["`scores.sort()`", "`[...scores].sort((a, b) => b - a)`", "`scores.sort((a, b) => a - b).reverse()`", "`[...scores].sort()`"],
              answer: 1,
              why: [
                "It changes `scores`, and without a comparator it sorts as strings.",
                "The spread makes a copy, and `b - a` puts larger numbers first.",
                "The order ends up right, but both `sort` and `reverse` change `scores` itself.",
                "It sorts a copy, but as strings and in ascending order."
              ],
              run: true,
              check: "const original = [5, 100, 20, 3];\nconst tries = [\n  s => s.sort(),\n  s => [...s].sort((a, b) => b - a),\n  s => s.sort((a, b) => a - b).reverse(),\n  s => [...s].sort()\n];\nconst ok = tries.map(f => { const s = original.slice(); const out = f(s); return String(out) === '100,20,5,3' && String(s) === '5,100,20,3'; });\nconsole.log(ok.indexOf(true) === ok.lastIndexOf(true) ? ok.indexOf(true) : -1);" } }
        ]
      },

      {
        id: "algo-quiz-5",
        title: "Unit 5 quiz: Searching and sorting",
        kind: "quiz", xp: 10,
        brief: "Binary search, merge sort, and JavaScript's sort. 80% to pass.",
        questions: [
          { q: "What must be true of a list before binary search can be used on it?",
            choices: ["It has fewer than a million items", "It's sorted", "It has no repeated values", "It's stored in a Set"],
            answer: 1, explain: "Binary search throws away half the list based on one comparison, which is only valid when everything to one side of the middle is smaller and everything to the other side bigger." },
          { q: "In binary search, why is the loop condition `lo <= hi` rather than `lo < hi`?",
            choices: ["With `<`, a range narrowed to one item is never checked", "With `<=`, the search becomes O(n)", "With `<`, the loop can never end when the target is missing", "They behave identically; it's a style choice"],
            answer: 0, explain: "When lo equals hi there's still one item in play. `lo < hi` stops before checking it, so searching `[5]` for 5 returns -1." },
          { q: "Why is merge sort O(n log n)?",
            choices: ["It compares every pair of items once, but it stops early on about half of those comparisons", "The list is halved about log n times, and each level of merging does about n comparisons", "It sorts log n items at a time, and it repeats that step n times over the whole list", "It uses binary search to find the right place for each item as it adds it to the result"],
            answer: 1, explain: "Halving gives log n levels. At each level every item takes part in one merge, which costs about n comparisons in total across that level." },
          { q: "Which sort can take about n comparisons on a list that's already almost in order?",
            choices: ["Merge sort, always", "Insertion sort", "No comparison sort can", "Only a sort that uses a hash table"],
            answer: 1, explain: "Each item in insertion sort walks left only past bigger items. When almost everything is in place, most items don't move, so it's about one comparison each. TimSort takes advantage of this on runs of ordered data." },
          { q: "What does `[25, 100, 3].sort()` return?",
            choices: ["[3, 25, 100]", "[100, 25, 3]", "[25, 100, 3], unchanged", "It throws, because sort needs a comparator"],
            answer: 1, explain: "With no comparator, items are compared as strings: \"100\" < \"25\" < \"3\", character by character. So the result is [100, 25, 3], which happens to look descending, and the array itself is changed." },
          { q: "What does it mean that `sort` is stable?",
            choices: ["It always returns a brand new array and leaves the original alone", "It never throws, even when the array holds a mix of different types", "Items that compare as equal keep their original order", "It runs in the same amount of time on every input of the same size"],
            answer: 2, explain: "Since ES2019 the spec requires stability: sort people by age, and people of the same age stay in the order they were in before." }
        ]
      }
    ]
  });
})();
