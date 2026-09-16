/* How Code Scales — Unit 4: Hash maps and sets */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var FIRST_LETTER = R`
function firstLetter(key) {
  return key.charCodeAt(0);
}`;

  var ALL_LETTERS = R`
function allLetters(key) {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) >>> 0;
  }
  return h;
}`;

  var GROUP_STARTER = R`
// 1) How many items fall under each key. Returns { key: count }.
function countBy(items, keyOf) {
  const out = {};
  for (const item of items) {
    const key = keyOf(item);
    out[key] = items.filter(other => keyOf(other) === key).length;
  }
  return out;
}

// 2) The items under each key, in their original order. Returns { key: [items] }.
function groupBy(items, keyOf) {
  const out = {};
  for (const item of items) {
    const key = keyOf(item);
    out[key] = items.filter(other => keyOf(other) === key);
  }
  return out;
}

// 3) Each order with its customer attached (null when there's no such customer).
function joinOrders(orders, customers) {
  return orders.map(order => ({
    ...order,
    customer: customers.find(c => c.id === order.customerId) || null
  }));
}

console.log(countBy(["red", "blue", "red"], color => color));
`;

  var GROUP_SOLUTION = R`
// 1) How many items fall under each key. Returns { key: count }.
function countBy(items, keyOf) {
  const out = {};
  for (const item of items) {
    const key = keyOf(item);
    out[key] = (out[key] || 0) + 1;
  }
  return out;
}

// 2) The items under each key, in their original order. Returns { key: [items] }.
function groupBy(items, keyOf) {
  const out = {};
  for (const item of items) {
    const key = keyOf(item);
    if (!out[key]) {
      out[key] = [];
    }
    out[key].push(item);
  }
  return out;
}

// 3) Each order with its customer attached (null when there's no such customer).
function joinOrders(orders, customers) {
  const byId = new Map();
  for (const customer of customers) {
    byId.set(customer.id, customer);
  }
  return orders.map(order => ({
    ...order,
    customer: byId.get(order.customerId) || null
  }));
}

console.log(countBy(["red", "blue", "red"], color => color));
`;

  var PAIRS_STARTER = R`
// true when two different items add up to target.
function hasPairWithSum(nums, target) {
  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// The first pair [i, j], with i < j, that adds up to target: the pair with
// the smallest j, and for that j the smallest i. null when there isn't one.
function pairIndices(nums, target) {
  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(pairIndices([2, 7, 11, 15], 9));
`;

  var PAIRS_SOLUTION = R`
// true when two different items add up to target.
function hasPairWithSum(nums, target) {
  return pairIndices(nums, target) !== null;
}

// The first pair [i, j], with i < j, that adds up to target: the pair with
// the smallest j, and for that j the smallest i. null when there isn't one.
function pairIndices(nums, target) {
  const firstIndex = new Map();
  for (let j = 0; j < nums.length; j++) {
    const need = target - nums[j];
    if (firstIndex.has(need)) {
      return [firstIndex.get(need), j];
    }
    if (!firstIndex.has(nums[j])) {
      firstIndex.set(nums[j], j);
    }
  }
  return null;
}

console.log(pairIndices([2, 7, 11, 15], 9));
`;

  function linear(label, make, work) {
    return "var g = T.growth(" + make + ", " + work + ");\n" +
      "T.eq(g.band, 'linear', '" + label + ": operation counts at n = 250, 500, 1000 and 2000 were ' + g.counts.join(', ') + ' (ratios ' + g.ratios.join(', ') + ')');";
  }

  window.CODELAB.addUnit("algo", {
    id: "algo-u4",
    title: "Hash maps and sets",
    icon: "🗂️",
    blurb: "How a key is found without a search, why that's O(1) only on average, what makes two keys \"the same\", and the one-pass counting, grouping, joining and pair-finding it unlocks.",
    cheat: [
      { h: "How a hash table finds a key", lang: "text", code: R`
bucket = hash(key) % bucketCount
store:  put the key in that bucket
lookup: recompute the bucket, compare only the keys in it`,
        note: "A good hash spreads keys evenly, so buckets hold about one key and lookups are O(1) on average. Many keys in one bucket make it a list to search: O(n) worst case." },
      { h: "What counts as the same key", lang: "js", code: R`
obj[{ id: 1 }] = 1;          // key becomes "[object Object]"
new Map([[1, "a"], ["1", "b"]]).size   // 2: 1 and "1" differ
new Set([NaN, NaN]).size               // 1: NaN matches NaN
new Set([{}, {}]).size                 // 2: different objects`,
        note: "Plain object keys are strings. Map and Set keep keys as they are and compare with SameValueZero: values for primitives, identity for objects." },
      { h: "One-pass patterns", lang: "js", code: R`
counts[key] = (counts[key] || 0) + 1;          // count
(groups[key] = groups[key] || []).push(item);  // group
const byId = new Map(list.map(x => [x.id, x]));  // index, then byId.get(id)
if (seen.has(target - x)) { }                  // pairs`,
        note: "Replace a search inside a loop (find, filter, includes) with one pass that builds a Map or object, then O(1) lookups." }
    ],
    lessons: [

      {
        id: "algo-u4-1",
        title: "How a hash table finds a key",
        kind: "concept", xp: 15, mins: 16,
        screens: [
          { read: "A table with 16 buckets. To store a word it turns the word into a number, then keeps the remainder after dividing by 16: that's the bucket. Here the number is just the first letter's character code (`a` is 97, `b` is 98).",
            ask: { type: "lab", lab: "buckets",
              params: { size: 16, keys: ["ant", "apple", "avocado", "bee", "bear", "cat", "cow", "apricot", "dog", "eel"],
                hashes: [{ label: "First letter", code: FIRST_LETTER }, { label: "All letters", code: ALL_LETTERS }] },
              predict: { type: "pick",
                q: "With the first-letter hash, `ant`, `apple` and `avocado` go in. Where do they land?",
                choices: ["Each in a different bucket, spread out evenly", "All three in the same bucket", "In buckets 1, 2 and 3, one each in alphabetical order", "Wherever there's space, filling bucket 0 first"],
                answer: 1,
                why: [
                  "Spreading depends on the hash. This one only looks at the first letter, and they all start with `a`.",
                  "Every word starting with `a` has hash 97, and 97 % 16 is 1. So they all go in bucket 1.",
                  "Alphabetical order plays no part: the bucket is the remainder of the hash divided by 16, and all three hashes are 97.",
                  "A hash table never looks for free space: the hash alone decides the bucket."
                ],
                run: true,
                check: FIRST_LETTER + "\nconst buckets = ['ant', 'apple', 'avocado'].map(k => firstLetter(k) % 16);\nconsole.log(new Set(buckets).size === 1 ? 1 : -1);" } } },

          { read: "That's a **hash table**, the structure behind `Map`, `Set` and object keys. To store a key it computes a number from the key (its **hash**), then uses `hash % buckets` to choose a bucket. To find the key later, it computes the same number and looks in that one bucket instead of searching everything.\n\nWhen the hash spreads keys evenly, each bucket holds about one key, so a lookup is **O(1) on average**. Real tables also grow: when they fill up, they add buckets and redistribute the keys.",
            ask: { type: "predict",
              q: "A table has 16 buckets and a key's hash is 100. Which bucket does the key go in? Type a number.",
              answer: "4",
              why: "100 divided by 16 is 6 with 4 left over, so `100 % 16` is 4.",
              run: true,
              check: "console.log(100 % 16);" } },

          { read: "A common belief: *\"a hash lookup is always O(1).\"* It's O(1) **on average**. When many keys land in the same bucket, that bucket becomes a list to search, and a lookup there is O(n) in the worst case. The first-letter hash shows how: every word starting with `a` piles up together.\n\nA good hash mixes every part of the key, so similar keys land far apart. JavaScript engines use good hashes for `Map` and `Set`, which is why you can treat `has`, `get` and `set` as constant work.",
            ask: { type: "pick",
              q: "When is a hash table lookup slow?",
              choices: ["When the table holds more than about a thousand keys in total, whatever their hashes are", "When many keys land in the same bucket, so that bucket has to be searched", "When the keys are strings rather than numbers", "When the key being looked up isn't in the table"],
              answer: 1,
              why: [
                "Size alone doesn't slow it down: the table adds buckets as it grows, so each bucket stays short.",
                "Collisions turn a bucket into a list to search. With a good hash they're rare, so lookups stay O(1) on average.",
                "Strings hash fine: a good hash mixes every character.",
                "A missing key is known to be missing after checking one bucket, which is just as quick."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "For each of n incoming emails, you check whether its sender is on a blocklist of m addresses. Which approach is O(n + m)?",
              choices: ["`blocklist.includes(sender)` for each email", "Build `new Set(blocklist)` once, then `blocked.has(sender)` for each email", "Sort the incoming emails by sender first, then call `blocklist.includes(sender)` for each", "`blocklist.indexOf(sender) !== -1` for each email"],
              answer: 1,
              why: [
                "Each `includes` scans up to m addresses, and there are n emails: O(n·m).",
                "Building the Set is one pass over m, then each `has` is constant work: n + m.",
                "Sorting the emails doesn't change how `includes` works: every call still scans the blocklist.",
                "`indexOf` scans the array exactly as `includes` does: O(n·m)."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "16 buckets and the first-letter hash. After inserting `bee`, `bear`, `bat` and `cow`, how many keys does a lookup for `bat` compare, at most? Type a number.",
              answer: "3",
              why: "`bee`, `bear` and `bat` all have hash 98, and 98 % 16 is 2, so they share bucket 2. `cow` (99) goes to bucket 3. A lookup for `bat` compares up to the 3 keys in bucket 2.",
              run: true,
              check: FIRST_LETTER + "\nconst target = firstLetter('bat') % 16;\nconsole.log(['bee', 'bear', 'bat', 'cow'].filter(k => firstLetter(k) % 16 === target).length);" } }
        ]
      },

      {
        id: "algo-u4-2",
        title: "Map, Set, and what counts as the same key",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { ask: { type: "predict",
              q: "What does this print?",
              code: R`
const labels = {};
labels[{ id: 1 }] = "first";
labels[{ id: 2 }] = "second";
console.log(Object.keys(labels).length);`,
              answer: "1",
              why: "Both objects turn into the same string key, `\"[object Object]\"`, so the second assignment overwrites the first. One key.",
              run: true } },

          { read: "Plain objects only have **string** keys. Anything else you use as a key is turned into a string first: `1` becomes `\"1\"`, and every plain object becomes `\"[object Object]\"`. That's how two different objects ended up as one key.\n\n`Map` keeps keys as they are. Its rule for \"the same key\" is called **SameValueZero**: numbers and strings compare by value, `NaN` matches `NaN`, `0` matches `-0`, and an object matches only *the same object*. `Set` uses the same rule.",
            ask: { type: "predict",
              q: "What does this print?",
              code: R`
const m = new Map();
m.set(1, "number");
m.set("1", "string");
console.log(m.size);`,
              answer: "2",
              why: "A Map doesn't turn keys into strings, so the number 1 and the string \"1\" are two different keys.",
              run: true } },

          { ask: { type: "predict", transfer: true,
              q: "What does this print?",
              code: R`
const seen = new Set();
seen.add({ id: 7 });
console.log(seen.has({ id: 7 }));`,
              answer: "false",
              why: "Each `{ id: 7 }` creates a new object. A Set compares objects by identity, so the second one isn't the object that was added. To look things up by id, store the ids themselves.",
              run: true } },

          { ask: { type: "pick", transfer: true,
              q: "Which of these evaluates to `2`?",
              choices: ["`new Set([NaN, NaN]).size`", "`new Set([0, -0]).size`", "`new Set([1, '1']).size`", "`new Set(['a', 'a']).size`"],
              answer: 2,
              why: [
                "SameValueZero treats NaN as equal to NaN, so the Set keeps one.",
                "SameValueZero treats 0 and -0 as the same value: size 1.",
                "The number 1 and the string '1' are different values, and a Set doesn't convert them.",
                "Two identical strings are the same value: size 1."
              ],
              run: true,
              check: "const sizes = [new Set([NaN, NaN]).size, new Set([0, -0]).size, new Set([1, '1']).size, new Set(['a', 'a']).size];\nconsole.log(sizes.indexOf(2) === sizes.lastIndexOf(2) ? sizes.indexOf(2) : -1);" } },

          { ask: { type: "explain",
              q: "Why can a Set hold two objects that look exactly the same?",
              model: "A Set compares objects by identity, not by their contents. Two object literals are two separate objects, even with the same properties, so the Set keeps both.",
              rubric: ["Says objects are compared by identity (the same object), not by contents", "Says two literals with the same properties are still two separate objects"] } }
        ]
      },

      {
        id: "algo-u4-3",
        title: "Count, group, index",
        kind: "js", chip: "JS", xp: 15, mins: 16, count: true,
        brief: "Three everyday jobs, each written with a search inside a loop:\n\n- **`countBy(items, keyOf)`** counts how many items share each key, by calling `filter` over the whole list for every item.\n- **`groupBy(items, keyOf)`** collects the items under each key, the same way.\n- **`joinOrders(orders, customers)`** attaches each order's customer, calling `find` over every customer for every order.\n\nEach is O(n²). Make each one a single pass that builds a lookup as it goes:\n\n- count with `out[key] = (out[key] || 0) + 1`\n- group by creating `out[key]` the first time a key appears, then pushing to it\n- index the customers once in a `Map` from id to customer, then `get` each order's customer\n\nThe results must not change. Keys keep the order they first appear in, groups keep items in their original order, and an order whose customer doesn't exist gets `customer: null`. Put braces around every loop body.",
        steps: [
          { text: "`countBy` and `groupBy` return the same results as before.",
            test: R`
T.eq(countBy(['red', 'blue', 'red'], function (c) { return c; }), { red: 2, blue: 1 }, 'Counts per key, keys in first-seen order');
T.eq(countBy([], function (c) { return c; }), {}, 'No items, no keys');
var people = [{ name: 'Ann', team: 'red' }, { name: 'Bo', team: 'blue' }, { name: 'Cy', team: 'red' }];
T.eq(groupBy(people, function (p) { return p.team; }), { red: [people[0], people[2]], blue: [people[1]] }, 'Items grouped under each key, in their original order');
T.eq(groupBy([], function (p) { return p.team; }), {}, 'No items, no groups');
T.eq(countBy(['apple', 'fig', 'plum', 'kiwi'], function (w) { return 'len' + w.length; }), { len5: 1, len3: 1, len4: 2 }, 'Keys come from keyOf');
` },
          { text: "`joinOrders` attaches each customer, or `null`, and doesn't change the orders.",
            test: R`
var customers = [{ id: 1, name: 'Ann' }, { id: 2, name: 'Bo' }];
var orders = [{ id: 'a', customerId: 2 }, { id: 'b', customerId: 1 }, { id: 'c', customerId: 9 }];
T.eq(joinOrders(orders, customers), [
  { id: 'a', customerId: 2, customer: { id: 2, name: 'Bo' } },
  { id: 'b', customerId: 1, customer: { id: 1, name: 'Ann' } },
  { id: 'c', customerId: 9, customer: null }
], 'Each order gets its customer, and a missing one is null');
T.eq(orders[0], { id: 'a', customerId: 2 }, 'The original order objects are not changed');
T.eq(joinOrders([], customers), [], 'No orders, no results');
` },
          { text: "`countBy` and `groupBy` are linear.",
            test: [
              linear("countBy", "function (n) { return Array.from({ length: n }, function (_, i) { return 'k' + (i % 10); }); }", "function (items) { countBy(items, function (x) { return x; }); }"),
              linear("groupBy", "function (n) { return Array.from({ length: n }, function (_, i) { return 'k' + (i % 10); }); }", "function (items) { groupBy(items, function (x) { return x; }); }")
            ].join("\n") },
          { text: "`joinOrders` is linear.",
            test: linear("joinOrders",
              "function (n) { return { orders: Array.from({ length: n }, function (_, i) { return { id: i, customerId: i }; }), customers: Array.from({ length: n }, function (_, i) { return { id: i }; }) }; }",
              "function (data) { joinOrders(data.orders, data.customers); }") }
        ],
        files: [{ name: "script.js", content: GROUP_STARTER }],
        solution: { "script.js": GROUP_SOLUTION },
        hints: [
          "countBy: don't filter. On each item, add one to `out[key]`, starting from 0 the first time: `out[key] = (out[key] || 0) + 1;`",
          "groupBy: create the array the first time a key appears (`if (!out[key]) { out[key] = []; }`), then `out[key].push(item);`",
          "joinOrders: build `const byId = new Map();` with one loop over customers, then use `byId.get(order.customerId) || null` inside `map`."
        ]
      },

      {
        id: "algo-u4-4",
        title: "Pairs that add up",
        kind: "js", chip: "JS", xp: 15, mins: 14, count: true,
        brief: "Given a list of numbers and a target, do any two different items add up to the target? The first draft checks every pair: for each item `j`, it tries every earlier item `i`. That's n² / 2 pairs.\n\nThere's a one-pass version. Walk the list once. At item `j`, the number that would complete a pair is `target - nums[j]`. If you've **already seen** that number, you've found the pair. Otherwise, remember `nums[j]` and move on. \"Have I seen this?\" is a `Map` lookup.\n\n`pairIndices(nums, target)` returns `[i, j]` with `i < j`: the pair with the smallest `j`, and for that `j` the smallest `i`, or `null` when there's no pair. That's exactly the pair the first draft finds, so keep that behaviour:\n\n- store each number's **first** index only, so `i` is the smallest one\n- check for the partner **before** storing `nums[j]`, so an item is never paired with itself\n\nThen make `hasPairWithSum` use it.",
        steps: [
          { text: "`pairIndices` finds the right pair, and never uses one item twice.",
            test: R`
T.eq(pairIndices([2, 7, 11, 15], 9), [0, 1], '2 + 7');
T.eq(pairIndices([3, 3], 6), [0, 1], 'Two equal items can pair');
T.eq(pairIndices([3], 6), null, 'One 3 can not pair with itself');
T.eq(pairIndices([3, 2, 4], 6), [1, 2], '3 + 3 would need the 3 twice, so the pair is 2 + 4');
T.eq(pairIndices([4, 1, 2, 3, 4], 8), [0, 4], 'The smallest i for the smallest j');
T.eq(pairIndices([-2, 7, 5, -5], 0), [2, 3], 'Negative numbers work');
T.eq(pairIndices([1, 2, 3], 100), null, 'No pair gives null');
T.eq(pairIndices([], 1), null, 'An empty list gives null');
` },
          { text: "`hasPairWithSum` agrees with `pairIndices`.",
            test: R`
T.eq(hasPairWithSum([2, 7, 11, 15], 9), true, '2 + 7 is 9');
T.eq(hasPairWithSum([3], 6), false, 'One item can not pair with itself');
T.eq(hasPairWithSum([5, 1, 5, 1], 6), true, '5 + 1');
T.eq(hasPairWithSum([1, 2, 3], 100), false, 'No pair');
` },
          { text: "Both are linear, even when there's no pair and every item has to be checked.",
            test: [
              linear("pairIndices", "function (n) { return Array.from({ length: n }, function (_, i) { return i; }); }", "function (nums) { pairIndices(nums, -1); }"),
              linear("hasPairWithSum", "function (n) { return Array.from({ length: n }, function (_, i) { return i; }); }", "function (nums) { hasPairWithSum(nums, -1); }")
            ].join("\n") }
        ],
        files: [{ name: "script.js", content: PAIRS_STARTER }],
        solution: { "script.js": PAIRS_SOLUTION },
        hints: [
          "Keep `const firstIndex = new Map();` of number → the first index it appeared at.",
          "In one loop over j: `const need = target - nums[j];` and if `firstIndex.has(need)`, return `[firstIndex.get(need), j]`.",
          "Only after that check, store `nums[j]` if it isn't in the Map yet. Then `hasPairWithSum` can return `pairIndices(nums, target) !== null`."
        ]
      },

      {
        id: "algo-quiz-4",
        title: "Unit 4 quiz: Hash maps and sets",
        kind: "quiz", xp: 10,
        brief: "Buckets and collisions, what counts as the same key, and one-pass patterns. 80% to pass.",
        questions: [
          { q: "How does a hash table find a key without searching every entry?",
            choices: ["It keeps all of its keys sorted, then halves the range of keys still in play on each step", "It remembers where the most recent lookup ended and starts the next search from there", "It computes the key's hash, picks a bucket from it and looks only in that bucket", "It checks the keys from newest to oldest, because recent keys are the most likely to be looked up"],
            answer: 2, explain: "The hash decides the bucket both when storing and when looking up, so a lookup only compares the few keys in one bucket. With a good hash that's about one key: O(1) on average." },
          { q: "What makes a hash table lookup O(n) in the worst case?",
            choices: ["Looking up a key that isn't in the table, so every bucket has to be checked", "Many keys landing in the same bucket, which then has to be searched", "Using strings as the keys instead of numbers, since strings take longer to compare", "The table growing and adding more buckets, which spreads the keys too thinly"],
            answer: 1, explain: "Collisions put keys together in one bucket. If every key collided, the bucket would hold all n keys, and a lookup would search them all." },
          { q: "What does `new Map([[1, 'a'], ['1', 'b']]).size` evaluate to?",
            choices: ["1", "2", "0", "It throws"],
            answer: 1, explain: "A Map keeps keys as they are and compares them with SameValueZero, so the number 1 and the string '1' are different keys." },
          { q: "Why does `obj[{ id: 1 }] = 'x'` followed by `obj[{ id: 2 }] = 'y'` leave `obj` with one key?",
            choices: ["Objects can't be used as keys at all, so the second assignment is silently ignored", "The ids are compared, and 1 and 2 happen to hash to the same bucket in the object", "Plain object keys are strings, and both objects become `\"[object Object]\"`", "Assigning a new key to a plain object always replaces the key it had before"],
            answer: 2, explain: "A plain object converts non-string keys to strings, and every plain object converts to the same string. A Map would keep both objects as separate keys." },
          { q: "A loop over n orders calls `customers.find(c => c.id === order.customerId)`. What's the O(n + m) fix?",
            choices: ["Sort the customers by id before the loop, so `find` reaches each customer sooner", "Replace `find` with `filter(...)[0]`, which returns the same customer in fewer steps", "Loop over the customers inside a plain `for` loop instead of calling `find` each time", "Build a Map from id to customer once, then get each order's customer from it"],
            answer: 3, explain: "One pass over m customers builds the Map, and each of n lookups is O(1). Sorting alone doesn't change find, and filter or a hand-written loop still scan every customer." },
          { q: "In the one-pass pair finder, why check for `target - nums[j]` before storing `nums[j]`?",
            choices: ["So an item is never paired with itself", "Because Map lookups must come before Map writes", "To keep the Map sorted", "To use less memory"],
            answer: 0, explain: "If `nums[j]` were stored first, a target of twice `nums[j]` would find it and pair the item with itself. Checking first means only earlier items can complete the pair." }
        ]
      }
    ]
  });
})();
