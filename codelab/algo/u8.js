/* How Code Scales — Unit 8: Choosing under constraints */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var SEARCH_STARTER = R`
// A product search module. It works, and it gets slow as the catalog grows.
// products: [{ id, name, brandId, tags: [...], sales }]
// brands:   [{ id, name }]

// 1) Every tag used by any product, in first-seen order, with no repeats.
function uniqueTags(products) {
  const tags = [];
  for (const product of products) {
    for (const tag of product.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    }
  }
  return tags;
}

// 2) Each product with brandName added ("Unknown" when there's no such brand).
function attachBrands(products, brands) {
  return products.map(product => {
    const brand = brands.find(b => b.id === product.brandId);
    return { ...product, brandName: brand ? brand.name : "Unknown" };
  });
}

// 3) Products whose name contains query (ignoring case): best sellers first,
//    then by name.
function rankMatches(products, query) {
  const q = query.toLowerCase();
  const results = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(q)) {
      results.push(product);
      results.sort((a, b) => b.sales - a.sales || a.name.localeCompare(b.name));
    }
  }
  return results;
}

// The search page: ranked matches with brands, and the tags among them.
function searchPage(products, brands, query) {
  const matches = rankMatches(products, query);
  return { results: attachBrands(matches, brands), tags: uniqueTags(matches) };
}
`;

  var SEARCH_SOLUTION = R`
// A product search module. It works, and it gets slow as the catalog grows.
// products: [{ id, name, brandId, tags: [...], sales }]
// brands:   [{ id, name }]

// 1) Every tag used by any product, in first-seen order, with no repeats.
function uniqueTags(products) {
  const seen = new Set();
  const tags = [];
  for (const product of products) {
    for (const tag of product.tags) {
      if (!seen.has(tag)) {
        seen.add(tag);
        tags.push(tag);
      }
    }
  }
  return tags;
}

// 2) Each product with brandName added ("Unknown" when there's no such brand).
function attachBrands(products, brands) {
  const byId = new Map();
  for (const brand of brands) {
    byId.set(brand.id, brand);
  }
  return products.map(product => {
    const brand = byId.get(product.brandId);
    return { ...product, brandName: brand ? brand.name : "Unknown" };
  });
}

// 3) Products whose name contains query (ignoring case): best sellers first,
//    then by name.
function rankMatches(products, query) {
  const q = query.toLowerCase();
  const results = products.filter(product => product.name.toLowerCase().includes(q));
  results.sort((a, b) => b.sales - a.sales || a.name.localeCompare(b.name));
  return results;
}

// The search page: ranked matches with brands, and the tags among them.
function searchPage(products, brands, query) {
  const matches = rankMatches(products, query);
  return { results: attachBrands(matches, brands), tags: uniqueTags(matches) };
}
`;

  var FIXTURE = R`
var PRODUCTS = [
  { id: 1, name: 'Red Mug', brandId: 10, tags: ['kitchen', 'red'], sales: 5 },
  { id: 2, name: 'Blue Mug', brandId: 11, tags: ['kitchen', 'blue'], sales: 9 },
  { id: 3, name: 'Red Pen', brandId: 99, tags: ['office', 'red'], sales: 5 },
  { id: 4, name: 'mug rack', brandId: 10, tags: ['kitchen'], sales: 9 }
];
var BRANDS = [{ id: 10, name: 'Acme' }, { id: 11, name: 'Bolt' }];
`;

  function linear(label, make, work, sizes) {
    return "var g = T.growth(" + make + ", " + work + (sizes ? ", { sizes: " + JSON.stringify(sizes) + " }" : "") + ");\n" +
      "T.eq(g.band, 'linear', '" + label + ": operation counts at n = " + (sizes || [250, 500, 1000, 2000]).join(", ") + " were ' + g.counts.join(', ') + ' (ratios ' + g.ratios.join(', ') + ')');";
  }
  var MAKE_PRODUCTS = "function (n) { var p = []; for (var i = 0; i < n; i++) { p.push({ id: i, name: 'Item ' + i, brandId: i, tags: ['t' + i], sales: i % 7 }); } var b = []; for (var j = 0; j < n; j++) { b.push({ id: j, name: 'Brand ' + j }); } return { products: p, brands: b }; }";

  var BEFORE = R`
// before
function recentOrders(orders, userId) {
  return orders
    .filter(o => o.userId === userId)
    .sort((a, b) => b.placedAt - a.placedAt)
    .slice(0, 5);
}`;

  var AFTER = R`
// after
function recentOrders(ordersByUser, userId) {
  const mine = ordersByUser.get(userId) || [];
  return mine.slice(mine.length - 5).reverse();
}`;

  window.CODELAB.addUnit("algo", {
    id: "algo-u8",
    title: "Choosing under constraints",
    icon: "🧭",
    blurb: "No new ideas: reading the cost of code you didn't write, deciding like an engineer who has to defend the choice, then a slow search module to fix and a pull request to review.",
    cheat: [
      { h: "Reading cost", lang: "text", code: R`
one pass, or several in sequence       O(n)
a scan (includes, find) inside a loop  O(n²), or O(n·m) for two inputs
sort                                   O(n log n)
halving                                O(log n)
Map / Set lookup, index, push, pop     O(1)`,
        note: "Look for hidden loops inside method calls and for sorts inside loops. A quadratic loop in a Node request handler blocks every other request while it runs." },
      { h: "Deciding", lang: "text", code: R`
lookups outnumber changes    build a Set/Map once, look up many times
tight memory                 one pass keeping only what you need
order matters                stack (newest first) or queue (oldest first)
tiny n                       the simplest code wins`,
        note: "Name the constraint that decides it: n, how often it runs, memory, or order. Don't optimize 3 × 20 lookups." }
    ],
    lessons: [

      {
        id: "algo-u8-1",
        title: "Reading a cost you didn't write",
        kind: "concept", xp: 15, mins: 14,
        screens: [
          { read: "Code review, a slow page, a slow endpoint: most of the time you're working out the cost of code someone else wrote. Look for the loops, including the ones hidden inside method calls, and for sorts.\n\nAnswer each question with one of **O(1)**, **O(log n)**, **O(n)**, **O(n log n)**, **O(n²)** or **O(n·m)**.",
            ask: { type: "predict",
              q: "What's the big-O of `visibleNames`, for n items?",
              code: R`
function visibleNames(items) {
  return items
    .filter(item => item.visible)
    .map(item => item.name)
    .join(", ");
}`,
              answer: "O(n)",
              why: "filter, map and join each make one pass. Passes one after another add up to 3n at most: O(n)." } },

          { ask: { type: "predict",
              q: "What's the big-O of `topThree`, for n scores?",
              code: R`
function topThree(scores) {
  return [...scores].sort((a, b) => b - a).slice(0, 3);
}`,
              answer: "O(n log n)",
              accept: ["O(nlogn)"],
              why: "The copy is O(n) and slicing 3 is O(1), but sorting the copy is O(n log n), which dominates. A single pass keeping the best 3 would be O(n)." } },

          { ask: { type: "predict",
              q: "What's the big-O of `uniqueIds`, for n orders?",
              code: R`
function uniqueIds(orders) {
  const ids = [];
  for (const order of orders) {
    if (!ids.includes(order.id)) {
      ids.push(order.id);
    }
  }
  return ids;
}`,
              answer: "O(n²)",
              accept: ["O(n^2)"],
              why: "`includes` scans `ids`, which grows toward n, once per order: the hidden loop from Unit 1." } },

          { ask: { type: "predict", transfer: true,
              q: "What's the big-O of `canEdit`, with n = `user.roles.length` and m = `rules.length`?",
              code: R`
function canEdit(user, rules) {
  return user.roles.some(role =>
    rules.some(rule => rule.role === role && rule.canEdit)
  );
}`,
              answer: "O(n·m)",
              accept: ["O(n*m)", "O(nm)", "O(m·n)", "O(m*n)", "O(mn)"],
              why: "For each of the user's n roles, the inner `some` may scan all m rules. Two different inputs, nested: O(n·m)." } },

          { ask: { type: "predict", transfer: true,
              q: "`admins` is a `Set` of user ids. What's the big-O of `isAdmin`, for n admins?",
              code: R`
function isAdmin(admins, userId) {
  return admins.has(userId);
}`,
              answer: "O(1)",
              why: "A Set lookup hashes the id and checks one bucket, however many admins there are: O(1) on average." } },

          { read: "Cost matters most where code runs often, and in a server it can hurt everyone. Node runs your JavaScript one piece at a time: while a request handler is busy in a loop, no other request's code runs.",
            ask: { type: "pick",
              q: "A Node server runs the O(n²) `uniqueIds` on 50,000 orders inside a request handler. What happens to other requests while it runs?",
              choices: ["They're handled in parallel as usual on the other CPU cores of the machine", "They wait, because the loop blocks Node's single event loop until it finishes", "They fail straight away with an error, since the server is marked busy until then", "They're answered from a cache that Node keeps for exactly this kind of slow request"],
              answer: 1,
              why: [
                "Node runs your JavaScript on one thread. Other cores don't help unless you add workers or more processes.",
                "Up to 50,000 × 50,000 comparisons run without a break, and every other request waits behind them. Node.js Deep Dive calls this blocking the event loop.",
                "Nothing fails: the other requests are queued and simply wait.",
                "Node keeps no such cache. The requests wait for the loop to finish."
              ] } }
        ]
      },

      {
        id: "algo-u8-2",
        title: "Scenario decisions",
        kind: "concept", xp: 15, mins: 15,
        screens: [
          { read: "Real decisions come with constraints: how big n is, how often the code runs, how often the data changes, how much memory there is, whether order matters. Pick the option that meets the constraints, not the cleverest one.",
            ask: { type: "pick",
              q: "An autocomplete box checks, on every keystroke, whether the typed word is one of 200,000 dictionary words. The word list changes once a day.",
              choices: ["Scan the array with `includes` on each keystroke", "Build a Set once a day and call `has` on each keystroke", "Sort the array on each keystroke, then binary search it", "Store the words in an object and loop over its keys on each keystroke"],
              answer: 1,
              why: [
                "200,000 comparisons per keystroke, when the list barely changes.",
                "One O(n) build per day, then an O(1) lookup per keystroke. Lookups vastly outnumber changes.",
                "Sorting is O(n log n): far worse than scanning, and repeated every keystroke.",
                "Looping over the keys is the same scan with extra steps. `word in obj` would be O(1), but the loop throws that away."
              ] } },

          { ask: { type: "pick",
              q: "A leaderboard shows the top 10 of 5,000,000 scores, recomputed once an hour. Memory is tight: a second copy of the scores won't fit.",
              choices: ["Sort a copy of all the scores and take the first 10", "One pass over the scores, keeping the best 10 seen so far", "Put every score into a Set first, then read the largest ten back out of it", "Binary search the scores for the top 10"],
              answer: 1,
              why: [
                "O(n log n) is fine once an hour, but the copy is the second array of 5,000,000 that won't fit.",
                "O(n) time, and memory for only 10 scores. The memory limit decides it.",
                "A Set is another full copy, and it has no order to read the largest from.",
                "Binary search needs sorted data, and it finds one value, not the top 10."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A chat server must deliver messages in the order they were sent, to thousands of users, all day long.",
              choices: ["A stack of messages, popped for delivery", "A queue with a head index, so sending and delivering are both O(1)", "An array where each delivery calls `shift()`", "A Set of messages, so no message can ever be delivered to anyone twice"],
              answer: 1,
              why: [
                "A stack delivers the newest message first, scrambling conversations.",
                "Oldest first, and both ends stay O(1) however busy it gets.",
                "The order is right, but every delivery moves every waiting message: O(n) each, all day.",
                "A Set doesn't give messages back in the order they were sent."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A product page looks up prices for 3 items in a list of 20 products, using `find`.",
              choices: ["Replace `find` with a Map right away, since every `find` call is an O(n) scan", "Leave it: 3 × 20 comparisons is tiny, and the simplest code wins", "Sort the products first so that `find` is faster", "Rewrite the lookups with binary search"],
              answer: 1,
              why: [
                "It is a scan, but n is 20. A Map adds code and saves nothing anyone could notice.",
                "Big-O is about growth. When n is small and stays small, clarity is worth more.",
                "Sorting doesn't make `find` faster: it still scans from the front.",
                "More code, a sort to maintain, and no measurable gain at n = 20."
              ] } },

          { ask: { type: "explain",
              q: "Defend the leaderboard choice to a teammate who wants to sort a copy because it's simpler.",
              model: "Sorting a copy is simpler and fast enough once an hour, but it needs a second array of 5 million scores, and that won't fit. One pass that keeps the best 10 is O(n) and needs memory for only 10 scores, so it meets the memory limit, and it's faster too.",
              rubric: ["Names the memory limit as the deciding constraint", "Says the one-pass version keeps only 10 scores in memory", "Compares the time costs: O(n) against O(n log n)"] } }
        ]
      },

      {
        id: "algo-u8-3",
        title: "Project: Why is the search box slow?",
        kind: "js", chip: "JS", xp: 40, mins: 40, project: true, count: true,
        brief: "A product search page got slow as the catalog grew. Its module has four functions, and three of them hide quadratic work:\n\n- **`uniqueTags`** checks each tag with `includes` against the tags found so far.\n- **`attachBrands`** calls `find` over every brand for every product.\n- **`rankMatches`** re-sorts the whole results array every time it adds a match.\n\n`searchPage` just combines them, so it's as slow as the slowest.\n\nFix all three using what the course has covered. The outputs must not change at all: tags in first-seen order, `brandName` of `\"Unknown\"` for a missing brand, the original products left unchanged, and matches sorted by sales (highest first) then by name. Sorting once, after filtering, gives the same order, because the comparator decides every pair.\n\nThe checks run a doubling test on each function, and on the whole page. Put braces around every loop body.",
        steps: [
          { text: "`uniqueTags` lists every tag once, in first-seen order.",
            test: FIXTURE + R`
T.eq(uniqueTags(PRODUCTS), ['kitchen', 'red', 'blue', 'office'], 'Tags in first-seen order');
T.eq(uniqueTags([]), [], 'No products, no tags');
` },
          { text: "`uniqueTags` is linear.",
            test: linear("uniqueTags", MAKE_PRODUCTS, "function (d) { uniqueTags(d.products); }") },
          { text: "`attachBrands` adds each brand name, or \"Unknown\", without changing the products.",
            test: FIXTURE + R`
var out = attachBrands(PRODUCTS, BRANDS);
T.eq(out.map(function (p) { return [p.id, p.brandName]; }), [[1, 'Acme'], [2, 'Bolt'], [3, 'Unknown'], [4, 'Acme']], 'Brand names, with Unknown for brand 99');
T.eq(out[0].tags, ['kitchen', 'red'], 'Every other field is kept');
T.expect(!('brandName' in PRODUCTS[0]), 'The original products must not be changed');
` },
          { text: "`attachBrands` is linear.",
            test: linear("attachBrands", MAKE_PRODUCTS, "function (d) { attachBrands(d.products, d.brands); }") },
          { text: "`rankMatches` finds matches ignoring case, best sellers first, then by name.",
            test: FIXTURE + R`
T.eq(rankMatches(PRODUCTS, 'MUG').map(function (p) { return p.id; }), [2, 4, 1], 'Blue Mug and mug rack (9 sales) before Red Mug, ties by name');
T.eq(rankMatches(PRODUCTS, 'red').map(function (p) { return p.id; }), [1, 3], 'Red Mug and Red Pen, tied on sales, by name');
T.eq(rankMatches(PRODUCTS, '').map(function (p) { return p.id; }), [2, 4, 1, 3], 'An empty query matches everything');
T.eq(rankMatches(PRODUCTS, 'zzz'), [], 'No matches');
T.eq(PRODUCTS.map(function (p) { return p.id; }), [1, 2, 3, 4], 'The products array itself is not reordered');
` },
          { text: "`rankMatches` sorts once: its work grows like n log n, in the linear band.",
            test: linear("rankMatches", MAKE_PRODUCTS, "function (d) { rankMatches(d.products, 'item'); }", [100, 200, 400, 800]) },
          { text: "`searchPage` still returns the same page.",
            test: FIXTURE + R`
T.eq(searchPage(PRODUCTS, BRANDS, 'red'), {
  results: [
    { id: 1, name: 'Red Mug', brandId: 10, tags: ['kitchen', 'red'], sales: 5, brandName: 'Acme' },
    { id: 3, name: 'Red Pen', brandId: 99, tags: ['office', 'red'], sales: 5, brandName: 'Unknown' }
  ],
  tags: ['kitchen', 'red', 'office']
}, 'The page for "red"');
` },
          { text: "The whole page is linear as the catalog grows.",
            test: linear("searchPage", MAKE_PRODUCTS, "function (d) { searchPage(d.products, d.brands, 'item'); }", [100, 200, 400, 800]) }
        ],
        files: [{ name: "script.js", content: SEARCH_STARTER }],
        solution: { "script.js": SEARCH_SOLUTION },
        hints: [
          "uniqueTags: keep the `tags` array for the order, and add a `Set` to answer \"seen it already?\" (Unit 1).",
          "attachBrands: build a `Map` from brand id to brand with one loop over `brands`, then `get` inside `map` (Unit 4).",
          "rankMatches: `filter` the matching products first, then call `sort` once on the result (Unit 5). The comparator stays the same."
        ]
      },

      {
        id: "algo-u8-4",
        title: "Project: The code review",
        kind: "concept", xp: 40, mins: 28, project: true,
        screens: [
          { read: "A teammate opens a pull request to speed up the order history page, which shows a user's 5 most recent orders, newest first:\n\n```js\n" + BEFORE + "\n```\n\n```js\n" + AFTER + "\n```\n\n`ordersByUser` is a new Map from user id to that user's orders, **oldest first**. It's kept up to date as orders come in.",
            ask: { type: "pick",
              q: "With n = all orders and k = this user's orders, what does the **before** version cost?",
              choices: ["O(n + k log k)", "O(n log n + k)", "O(k log k)", "O(n·k)"],
              answer: 0,
              why: [
                "filter scans all n orders, then only this user's k orders are sorted.",
                "The sort runs on the filtered array of k orders, not on all n.",
                "filter still has to look at every one of the n orders to find the k.",
                "Nothing is nested: the filter pass and the sort run one after the other."
              ] } },

          { ask: { type: "pick",
              q: "And the **after** version, not counting keeping the Map up to date?",
              choices: ["O(1)", "O(k)", "O(n)", "O(k log k)"],
              answer: 0,
              why: [
                "A Map lookup, then a slice of at most 5 items and a reverse of those 5: constant work however many orders there are.",
                "It never walks all k orders: slice copies at most 5.",
                "It never looks at other users' orders at all.",
                "Nothing is sorted: the Map keeps each user's orders in order already."
              ] } },

          { ask: { type: "trace", transfer: true,
              q: "Trace the **after** version for a user with 3 orders, `[o1, o2, o3]`, oldest first. Fill in each value; separate array items with spaces.",
              code: AFTER,
              columns: ["expression", "value"],
              given: 1,
              rows: [["mine.length", 3], ["mine.length - 5", -2], ["mine.slice(mine.length - 5)", "o2 o3"], ["the returned array", "o3 o2"]],
              why: "3 − 5 is −2, and a negative slice start counts from the end, so slice(−2) is the last 2 orders. o1 disappears: this user should see all 3.",
              run: true,
              check: "const mine = ['o1', 'o2', 'o3'];\nconst sliced = mine.slice(mine.length - 5);\nconsole.log(JSON.stringify([['mine.length', mine.length], ['mine.length - 5', mine.length - 5], ['mine.slice(mine.length - 5)', sliced.join(' ')], ['the returned array', sliced.slice().reverse().join(' ')]]));" } },

          { ask: { type: "pick", transfer: true,
              q: "Which review comment is correct?",
              choices: ["Looks good to me: the new version is much faster and returns exactly the same orders as before for every user", "With fewer than 5 orders, `mine.length - 5` is negative, so `slice` drops the oldest orders; use `slice(-5)`", "`reverse` changes the array stored in the Map, so every later call for this user returns orders in the wrong order", "The Map makes the page slower overall, because every Map lookup is an O(log n) search through the keys"],
              answer: 1,
              why: [
                "It's much faster, but not the same: a user with 3 orders now sees only 2.",
                "slice(-5) gives the last 5 when there are more, and all of them when there are fewer. Math.max(0, mine.length - 5) works too.",
                "slice returns a new array, so reverse changes only that copy. The Map's array is untouched.",
                "Map lookups are O(1) on average: a hash, not a search."
              ],
              run: true,
              check: "const mine = ['o1', 'o2', 'o3'];\nconst bug = mine.slice(mine.length - 5).length;\nconst fixed = mine.slice(-5).length;\nconst before = mine.slice();\nmine.slice(-5).reverse();\nconsole.log(bug === 2 && fixed === 3 && String(mine) === String(before) ? 1 : -1);" } },

          { ask: { type: "pick", transfer: true,
              q: "The Map has to be kept up to date. What does that cost each time an order is placed?",
              choices: ["O(1): get the user's array and push the new order onto its end", "O(n), because the whole Map has to be rebuilt from every order whenever one is added", "O(k log k), because the user's orders have to be sorted again", "O(n log n), because all the orders are sorted again"],
              answer: 0,
              why: [
                "New orders arrive newest last, so pushing keeps each array oldest first with no sorting.",
                "Only one user's array changes, and only at its end.",
                "The array is already in order; pushing the newest order onto the end keeps it that way.",
                "Other users' orders aren't touched at all."
              ] } },

          { ask: { type: "explain",
              q: "Write the review comment you'd leave on this pull request, in plain English, for a teammate who isn't a performance specialist.",
              model: "Nice speedup: looking up one user's orders in a Map, instead of filtering and sorting every order, makes this constant work per page view. One bug: for a user with fewer than 5 orders, mine.length - 5 is negative, so slice drops their oldest orders. slice(-5) returns up to the last 5.",
              rubric: ["Explains the speedup: a lookup instead of filtering and sorting every order", "Points out the bug for users with fewer than 5 orders", "Suggests a fix, such as slice(-5)", "Is understandable without big-O jargon, or explains any it uses"] } }
        ]
      },

      {
        id: "algo-quiz-8",
        title: "Final quiz: How code scales",
        kind: "quiz", xp: 10,
        brief: "The whole course: counting work, big-O, arrays, hash maps, searching and sorting, recursion, graphs, and choosing under constraints. 80% to pass.",
        questions: [
          { q: "Why does this course measure code by counting operations rather than timing it?",
            choices: ["Counting is far more precise than a stopwatch when the code being measured is very fast", "Timings change with the machine and the run; counts change only with the input", "Browsers don't allow JavaScript code to be timed, so counting is the only option there is", "Operation counts also include the time spent waiting on the network, which timings leave out"],
            answer: 1, explain: "A timing mixes the code with the hardware and whatever else is running. How the count changes as n grows is a property of the code alone." },
          { q: "A function's operation count goes 1,000 → 4,000 → 16,000 as n doubles twice. What's its growth?",
            choices: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
            answer: 1, explain: "×4 per doubling is the signature of n². Linear would be ×2, and n log n a little over ×2." },
          { q: "What makes `for (const x of list) { if (!out.includes(x)) { out.push(x); } }` quadratic?",
            choices: ["`push` copies the array", "`includes` scans `out` on every pass", "`for...of` is slower than an index loop", "`out` is declared outside the loop"],
            answer: 1, explain: "The scan is hidden inside a method call. A Set's has and add replace it with O(1) work, making the loop O(n)." },
          { q: "What is binary search's cost, and what does it need?",
            choices: ["O(log n), and sorted data", "O(n), and data sorted in advance", "O(log n), and the data in a Set", "O(1), and a Map of the data"],
            answer: 0, explain: "Each comparison halves the range still in play, which only works when everything on one side of the middle is smaller." },
          { q: "Which change fixes `find` inside a loop over n orders, with m customers?",
            choices: ["Sort the customers by id first, so `find` reaches each customer sooner", "Use `filter(...)[0]` instead of `find`, which gives the same customer back", "Use `some` instead of `find`, since it stops at the first customer that matches", "Build a Map from id to customer once, then look each one up"],
            answer: 3, explain: "One O(m) pass builds the Map, then n O(1) lookups: O(n + m) instead of O(n·m)." },
          { q: "Why is the naive recursive `fib(40)` so slow, and what fixes it?",
            choices: ["Recursion is always slow in JavaScript, and rewriting it as a plain loop fixes it", "It uses too much stack at once, and giving the engine a larger stack fixes it", "It solves the same subproblems again and again; remembering results fixes it", "It does all its maths in floating point, and switching to BigInt values fixes it"],
            answer: 2, explain: "The calls grow by about ×1.6 per step of n. With memoization each fib(k) is computed once: about 2n calls." },
          { q: "Which search finds a fewest-steps path on a grid where every step costs the same?",
            choices: ["Depth-first search", "Breadth-first search", "Binary search", "Either BFS or DFS, always"],
            answer: 1, explain: "BFS visits cells in order of distance, so the first time it reaches a cell it's by a shortest route. DFS can find a much longer path first." },
          { q: "A function does 3 lookups in a list of 20 items with `find`. What should you do?",
            choices: ["Leave it: n is tiny, and the simple code is fine", "Replace the list with a Map right away, since find scans", "Sort the list once and use binary search for each lookup", "Cache every result in a Set so that no lookup repeats"],
            answer: 0, explain: "Big-O describes growth. When n is small and stays small, extra structure costs clarity and saves nothing measurable." }
        ]
      }
    ]
  });
})();
