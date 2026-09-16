/* How Code Scales — Unit 6: Recursion and the call stack */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var COUNTDOWN = R`
function countdown(n) {
  if (n === 0) {
    return;
  }
  console.log("before " + n);
  countdown(n - 1);
  console.log("after " + n);
}`;

  var FACTORIAL = R`
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}`;

  var COUNTED_FIB = R`
let calls = 0;
function fib(n) {
  calls++;
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}`;

  var MEMO_STARTER = R`
// Fibonacci: fib(0) = 0, fib(1) = 1, and each one after is the sum of the two before.
function memoFib(n) {
  if (n < 2) {
    return n;
  }
  return memoFib(n - 1) + memoFib(n - 2);
}

// The number of paths from the top-left corner of a rows × cols grid to the
// bottom-right corner, moving only right or down.
function gridPaths(rows, cols) {
  if (rows === 1 || cols === 1) {
    return 1;
  }
  return gridPaths(rows - 1, cols) + gridPaths(rows, cols - 1);
}

console.log(memoFib(10), gridPaths(3, 3));
`;

  var MEMO_SOLUTION = R`
// Fibonacci: fib(0) = 0, fib(1) = 1, and each one after is the sum of the two before.
const fibMemo = new Map();

function memoFib(n) {
  if (n < 2) {
    return n;
  }
  if (fibMemo.has(n)) {
    return fibMemo.get(n);
  }
  const value = memoFib(n - 1) + memoFib(n - 2);
  fibMemo.set(n, value);
  return value;
}

// The number of paths from the top-left corner of a rows × cols grid to the
// bottom-right corner, moving only right or down.
const pathMemo = new Map();

function gridPaths(rows, cols) {
  if (rows === 1 || cols === 1) {
    return 1;
  }
  const key = rows + "," + cols;
  if (pathMemo.has(key)) {
    return pathMemo.get(key);
  }
  const value = gridPaths(rows - 1, cols) + gridPaths(rows, cols - 1);
  pathMemo.set(key, value);
  return value;
}

console.log(memoFib(10), gridPaths(3, 3));
`;

  window.CODELAB.addUnit("algo", {
    id: "algo-u6",
    title: "Recursion and the call stack",
    icon: "🪆",
    blurb: "Frames on a stack, a tree of calls that explodes, remembering results instead of recomputing them, and a stack that runs out of room.",
    cheat: [
      { h: "Frames", lang: "js", code: R`
function countdown(n) {
  if (n === 0) { return; }        // base case: stop
  console.log("before " + n);     // on the way down
  countdown(n - 1);               // this frame waits here
  console.log("after " + n);      // on the way back up
}`,
        note: "Every call gets its own frame with its own parameters. Frames stack up; the newest returns first, and the one below carries on from where it paused." },
      { h: "Memoization", lang: "js", code: R`
const memo = new Map();
function fib(n) {
  if (n < 2) { return n; }
  if (memo.has(n)) { return memo.get(n); }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}`,
        note: "Naive fib(n) makes about 1.6ⁿ calls because it solves the same subproblems again. Remembered, each subproblem is solved once: about 2n calls." },
      { h: "Out of stack", lang: "js", code: R`
const stack = [root];
while (stack.length > 0) {
  const node = stack.pop();
  // ...work on node...
  for (const child of node.children) { stack.push(child); }
}`,
        note: "Deep recursion throws RangeError: Maximum call stack size exceeded. The limit varies by engine. An explicit stack in an array can go as deep as memory allows." }
    ],
    lessons: [

      {
        id: "algo-u6-1",
        title: "Frames on a stack",
        kind: "concept", xp: 15, mins: 14,
        screens: [
          { ask: { type: "predict",
              q: "`countdown(2)` prints four lines. Which line does it print **last**?",
              code: COUNTDOWN + "\ncountdown(2);",
              answer: "after 2",
              why: "The lines go: before 2, before 1, after 1, after 2. The call for 2 is the first to start and the last to finish.",
              run: true,
              check: "const lines = [];\n" + COUNTDOWN.replace(/console\.log/g, "lines.push") + "\ncountdown(2);\nconsole.log(lines[lines.length - 1]);" } },

          { read: "Every call gets its own **frame**: a private copy of its parameters and local variables, plus the place to return to. Frames stack up. `countdown(2)` pauses at its recursive call while `countdown(1)` runs on top of it, and `countdown(1)` pauses while `countdown(0)` runs.\n\nWhen the top frame returns, the frame beneath carries on from where it paused. So the \"before\" lines print on the way down, and the \"after\" lines on the way back up, newest frame first. It's the same stack Debugging & Diagnosis reads when something throws.",
            ask: { type: "trace",
              q: "Trace `factorial(3)`. For each call, in the order the calls start, fill in its `n` and the value it returns.",
              code: FACTORIAL,
              columns: ["call", "n", "returns"],
              given: 1,
              rows: [["1st", 3, 6], ["2nd", 2, 2], ["3rd", 1, 1]],
              why: "factorial(3) calls factorial(2), which calls factorial(1). The base case returns 1, then 2 × 1 = 2 comes back, then 3 × 2 = 6.",
              run: true,
              check: "const rows = [];\nfunction factorial(n) {\n  const row = [['1st', '2nd', '3rd'][rows.length], n, null];\n  rows.push(row);\n  const result = n <= 1 ? 1 : n * factorial(n - 1);\n  row[2] = result;\n  return result;\n}\nfactorial(3);\nconsole.log(JSON.stringify(rows));" } },

          { ask: { type: "pick", transfer: true,
              q: "`countdown(3)` has started and is now running `countdown(1)`. How many `countdown` frames are on the stack at that moment?",
              choices: ["1", "2", "3", "4"],
              answer: 2,
              why: [
                "The frames for 3 and 2 haven't returned: they're waiting underneath.",
                "The frame for 1 is on top, but 3 and 2 are both still waiting.",
                "countdown(3) and countdown(2) are paused at their recursive calls, and countdown(1) runs on top.",
                "countdown(0) hasn't started yet, so its frame isn't there."
              ],
              run: true,
              check: "let depth = 0, atOne = -1;\nfunction countdown(n) {\n  depth++;\n  if (n === 1) { atOne = depth; }\n  if (n > 0) { countdown(n - 1); }\n  depth--;\n}\ncountdown(3);\nconsole.log(atOne - 1);" } },

          { ask: { type: "predict", transfer: true,
              q: "What does this print?",
              code: R`
function sumTo(n) {
  if (n === 0) {
    return 0;
  }
  return n + sumTo(n - 1);
}
console.log(sumTo(4));`,
              answer: "10",
              why: "sumTo(0) returns 0, then each waiting frame adds its own n on the way back up: 1, then 3, then 6, then 10.",
              run: true } },

          { ask: { type: "explain",
              q: "When `countdown(2)` calls `countdown(1)`, how does `countdown(2)` still know its own `n` afterwards?",
              model: "Each call has its own frame holding its own parameters. countdown(1) runs in a new frame on top, while countdown(2)'s frame, with n = 2, waits underneath until countdown(1) returns.",
              rubric: ["Says each call gets its own frame, with its own copy of n", "Says the caller's frame waits underneath until the call returns"] } }
        ]
      },

      {
        id: "algo-u6-2",
        title: "The recursion tree",
        kind: "concept", xp: 15, mins: 16,
        screens: [
          { read: "The classic recursive Fibonacci: `fib(n)` is `fib(n - 1) + fib(n - 2)`, and `fib(0)` and `fib(1)` are the base cases. Predict before the lab draws the calls.",
            ask: { type: "lab", lab: "calltree", params: { sizes: [3, 4, 5, 6], bigger: [10, 20, 30] },
              predict: { type: "predict",
                q: "`fib(5)` calls `fib(4)` and `fib(3)`, which make calls of their own, down to `fib(1)` and `fib(0)`. How many calls to `fib` happen in total, counting `fib(5)` itself? Type a number.",
                answer: "15",
                why: "fib(4) makes 9 calls and fib(3) makes 5, plus fib(5) itself: 15. Switch the lab to n = 5 and count the lines.",
                run: true,
                check: COUNTED_FIB + "\nfib(5);\nconsole.log(calls);" } } },

          { read: "Draw every call and you get a **recursion tree**. Each call above the base cases makes two more, so the tree nearly doubles at each level. The count grows by about ×1.6 for every +1 on n: `fib(30)` makes 2,692,537 calls. That's **exponential** growth.\n\nThe reason is visible in the tree for `fib(5)`: `fib(3)` is worked out twice, and `fib(2)` three times. The same smaller problems are solved again and again.",
            ask: { type: "predict",
              q: "In the calls made by `fib(5)`, how many times is `fib(2)` called? Type a number.",
              answer: "3",
              why: "Once under fib(4) → fib(3), once under fib(4) directly, and once under the fib(3) that fib(5) calls itself.",
              run: true,
              check: "let twos = 0;\nfunction fib(n) {\n  if (n === 2) { twos++; }\n  if (n < 2) { return n; }\n  return fib(n - 1) + fib(n - 2);\n}\nfib(5);\nconsole.log(twos);" } },

          { ask: { type: "pick", transfer: true,
              q: "Why is the recursive `fib` so slow for large n?",
              choices: ["Recursion is always far slower than a loop, whatever problem the function is solving", "It solves the same smaller problems again and again, so the calls grow exponentially", "Each call's frame uses so much memory that the engine slows right down as it runs", "JavaScript engines can't optimize functions that call themselves"],
              answer: 1,
              why: [
                "A recursive function that solves each subproblem once, like binary search, is fast. The slowness here comes from repeating work.",
                "fib(3) is worked out twice for fib(5), and far more often for larger n. Removing the repeats removes the explosion.",
                "The frames at any moment are only n deep. The problem is how many calls happen in total, not how deep they go.",
                "Engines run recursive calls fine. No optimization can make 2.7 million calls cheap."
              ] } },

          { read: "The fix is to **remember** results. The first time `fib(k)` is worked out, store it; every later call for `k` returns the stored value. This is **memoization**.\n\nThere are only n + 1 different subproblems, `fib(0)` to `fib(n)`. Each is computed once, and every repeat is a single lookup, so `fib(n)` makes about 2n calls instead of about 1.6ⁿ. In the lab, the \"Remember results\" switch shows the repeated subtrees shrinking to one line each.",
            ask: { type: "predict", transfer: true,
              q: "With results remembered, how many calls does `fib(10)` make, counting each call that just returns a remembered value? Type a number.",
              answer: "19",
              why: "Each of fib(10) down to fib(2) calls fib(k - 1), which does the work, and fib(k - 2), which is remembered or a base case by then: 2 × 10 − 1 = 19 calls.",
              run: true,
              check: "const memo = new Map();\nlet calls = 0;\nfunction fib(n) {\n  calls++;\n  if (n < 2) { return n; }\n  if (memo.has(n)) { return memo.get(n); }\n  const value = fib(n - 1) + fib(n - 2);\n  memo.set(n, value);\n  return value;\n}\nfib(10);\nconsole.log(calls);" } },

          { ask: { type: "explain",
              q: "Why does remembering results turn exponential work into linear work for `fib`?",
              model: "There are only about n different subproblems, fib(0) to fib(n). With results remembered, each one is computed once and every repeated call returns the stored value, so the work is about 2n calls instead of re-solving the same subproblems exponentially many times.",
              rubric: ["Says there are only about n different subproblems", "Says each is computed once and repeats are looked up", "Gives the result as about 2n calls (linear)"] } }
        ]
      },

      {
        id: "algo-u6-3",
        title: "Remember instead of recompute",
        kind: "js", chip: "JS", xp: 15, mins: 14, count: true,
        brief: "Two recursive functions that repeat their own work:\n\n- **`memoFib(n)`** is the Fibonacci function from the last lesson. `memoFib(25)` makes 242,785 calls, and `memoFib(78)` would make more than there are seconds in a thousand years.\n- **`gridPaths(rows, cols)`** counts the ways to walk from the top-left corner of a grid to the bottom-right, moving only right or down. A path's first step is right or down, so the count is `gridPaths(rows - 1, cols) + gridPaths(rows, cols - 1)`, and a single row or column has exactly 1 path. The same smaller grids come up again and again.\n\nMemoize both. Keep a `Map` outside each function, check it before doing any work, and store each result before returning it. `gridPaths` needs both numbers in its key, for example `rows + \",\" + cols`.\n\nThe checks count calls, so keep both declared as `function memoFib(n)` and `function gridPaths(rows, cols)`, and make the recursive calls to those same names.",
        steps: [
          { text: "`memoFib` returns the right values.",
            test: R`
T.eq([0, 1, 2, 3, 4, 5, 6, 10, 20].map(function (n) { return memoFib(n); }), [0, 1, 1, 2, 3, 5, 8, 55, 6765], 'fib of 0, 1, 2, 3, 4, 5, 6, 10 and 20');
` },
          { text: "`memoFib(25)` makes at most 51 calls, and `memoFib(78)` is exact.",
            test: R`
var original = memoFib;
var counted = T.calls(original);
try { memoFib = counted; } catch (e) { throw new Error('Keep memoFib declared as function memoFib(n) so the checks can count its calls'); }
var value;
try { value = memoFib(25); } finally { memoFib = original; }
T.eq(value, 75025, 'memoFib(25)');
T.expect(counted.count <= 51, 'memoFib(25) made ' + counted.count + ' calls; with results remembered it needs at most 51');
T.eq(memoFib(78), 8944394323791464, 'memoFib(78), the largest Fibonacci number below Number.MAX_SAFE_INTEGER');
` },
          { text: "`gridPaths` returns the right counts.",
            test: R`
T.eq([gridPaths(1, 5), gridPaths(2, 2), gridPaths(3, 3), gridPaths(3, 7)], [1, 2, 6, 28], 'Paths for 1 × 5, 2 × 2, 3 × 3 and 3 × 7 grids');
` },
          { text: "`gridPaths(12, 12)` makes at most 289 calls, and `gridPaths(18, 18)` is exact.",
            test: R`
var original = gridPaths;
var counted = T.calls(original);
try { gridPaths = counted; } catch (e) { throw new Error('Keep gridPaths declared as function gridPaths(rows, cols) so the checks can count its calls'); }
var value;
try { value = gridPaths(12, 12); } finally { gridPaths = original; }
T.eq(value, 705432, 'gridPaths(12, 12)');
T.expect(counted.count <= 289, 'gridPaths(12, 12) made ' + counted.count + ' calls; with results remembered it needs at most 289');
T.eq(gridPaths(18, 18), 2333606220, 'gridPaths(18, 18)');
` }
        ],
        files: [{ name: "script.js", content: MEMO_STARTER }],
        solution: { "script.js": MEMO_SOLUTION },
        hints: [
          "Above memoFib, add `const fibMemo = new Map();`. After the base case, return `fibMemo.get(n)` when `fibMemo.has(n)`.",
          "Work the value out as before, then `fibMemo.set(n, value)` and return it.",
          "gridPaths is the same shape with `const key = rows + \",\" + cols;` as the Map key."
        ]
      },

      {
        id: "algo-u6-4",
        title: "When recursion runs out of stack",
        kind: "concept", xp: 15, mins: 16,
        screens: [
          { ask: { type: "pick",
              q: "What happens when this runs?",
              code: R`
function depth(n) {
  if (n === 0) {
    return 0;
  }
  return 1 + depth(n - 1);
}
depth(1000000);`,
              choices: ["It returns 1,000,000 after a short pause while the calls finish", "It throws a RangeError: the call stack runs out of room", "It never finishes, because the calls keep going around forever", "It returns 0"],
              answer: 1,
              why: [
                "It would, if there were room for a million frames at once. There isn't.",
                "Each waiting call keeps its frame, and a million frames don't fit in the call stack.",
                "Each call gets closer to 0, so it would finish. It runs out of stack first.",
                "0 comes back only from the deepest call, and that call never gets to run."
              ],
              run: true,
              check: "function depth(n) {\n  if (n === 0) { return 0; }\n  return 1 + depth(n - 1);\n}\nlet result;\ntry { depth(1000000); result = 0; } catch (e) { result = e instanceof RangeError ? 1 : -1; }\nconsole.log(result);" } },

          { read: "Every waiting frame takes memory, and the call stack has a fixed size. Nest calls deeply enough, like a million here, and the engine gives up with **`RangeError: Maximum call stack size exceeded`**. The limit depends on the engine and on how big each frame is, so don't rely on a number: a few thousand levels is safe everywhere, and a million never is.\n\nRecursion that goes as deep as the input is long, one level per item, can hit this on real data. Recursion that halves its input goes only log n deep.",
            ask: { type: "pick",
              q: "Which recursive function is most likely to hit the stack limit on real data?",
              choices: ["`sumTo(n)` called with n = 1,000,000, which recurses once per number", "Binary search written recursively, searching a sorted list of 1,000,000 items", "Merge sort written recursively on 1,000,000 items", "A recursive `fib(30)`"],
              answer: 0,
              why: [
                "One frame per number means a million frames waiting at once.",
                "Each call halves the range, so it's only about 20 frames deep.",
                "Merge sort halves too: about 20 levels deep, even though it makes many calls in total.",
                "fib(30) makes millions of calls but is never more than 30 deep. It's slow, not deep."
              ],
              run: true,
              check: "function sumTo(n) { return n === 0 ? 0 : n + sumTo(n - 1); }\nfunction search(a, x, lo, hi) { if (lo > hi) { return -1; } const mid = Math.floor((lo + hi) / 2); if (a[mid] === x) { return mid; } return a[mid] < x ? search(a, x, mid + 1, hi) : search(a, x, lo, mid - 1); }\nfunction msort(a) { if (a.length <= 1) { return a; } const m = Math.floor(a.length / 2); const l = msort(a.slice(0, m)), r = msort(a.slice(m)); const out = []; let i = 0, j = 0; while (i < l.length && j < r.length) { out.push(l[i] <= r[j] ? l[i++] : r[j++]); } return out.concat(l.slice(i), r.slice(j)); }\nfunction fib(n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }\nconst big = Array.from({ length: 1000000 }, (_, i) => i);\nconst tries = [() => sumTo(1000000), () => search(big, 999999, 0, big.length - 1), () => msort(big.slice(0, 200000)), () => fib(20)];\nconst threw = tries.map(t => { try { t(); return false; } catch (e) { return e instanceof RangeError; } });\nconsole.log(threw.indexOf(true) === threw.lastIndexOf(true) ? threw.indexOf(true) : -1);" } },

          { read: "Any recursion can be rewritten as a loop with an **explicit stack**: an array you push work onto and pop work off. The array lives in ordinary memory, which is far larger than the call stack.\n\nHere's a recursive function that adds up every value in a tree:\n\n```js\nfunction total(node) {\n  let sum = node.value;\n  for (const child of node.children) {\n    sum += total(child);\n  }\n  return sum;\n}\n```",
            ask: { type: "order", transfer: true,
              q: "Build the same `total` with a loop and an explicit stack.",
              lines: ["function total(root) {", "  let sum = 0;", "  const stack = [root];", "  while (stack.length > 0) {", "    const node = stack.pop();", "    sum += node.value;", "    for (const child of node.children) {", "      stack.push(child);", "    }", "  }", "  return sum;", "}"],
              groups: [[1, 2]],
              distractors: ["    sum = node.value;", "      total(child);"],
              why: "The stack starts with the root. Each pass takes one node, adds its value and pushes its children to be handled later. `sum = node.value` would throw away everything added so far, and calling `total(child)` brings the recursion back." } },

          { ask: { type: "pick", transfer: true,
              q: "Why doesn't the loop version of `total` hit the call stack limit on a tree 1,000,000 levels deep?",
              choices: ["Loops run faster than function calls, so it finishes before the stack can fill up", "The work still to do is kept in an array, not in waiting stack frames", "`pop` is O(1), unlike a recursive call", "It skips the deepest levels of the tree"],
              answer: 1,
              why: [
                "Speed has nothing to do with it: the recursive version fails because of how many frames wait at once.",
                "The pending nodes sit in an ordinary array in memory. Only one frame, for `total` itself, is ever on the call stack.",
                "A recursive call is O(1) too. The difference is where the waiting work is kept.",
                "It visits every node. It just keeps track of them in an array."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "When is plain recursion still the clearer choice?",
              choices: ["When the depth stays small, as in a balanced tree or binary search", "Never, since a loop with an explicit stack is always the better choice in every case", "Only when the input has fewer than 100 items", "Whenever performance matters most"],
              answer: 0,
              why: [
                "Small depth means no risk to the stack, and recursive code often mirrors the problem's shape more clearly.",
                "The loop version is longer and easier to get wrong. Its benefit only matters when the recursion could go deep.",
                "Depth matters, not size: a balanced tree of a million nodes is only about 20 levels deep.",
                "Recursion and loops cost about the same per step. The deciding question is depth, not speed."
              ] } }
        ]
      },

      {
        id: "algo-quiz-6",
        title: "Unit 6 quiz: Recursion",
        kind: "quiz", xp: 10,
        brief: "Frames, recursion trees, memoization and stack depth. 80% to pass.",
        questions: [
          { q: "What is a stack frame?",
            choices: ["A full copy of the whole program, made fresh for every single call", "The part of an array that push and pop are allowed to work on", "A call's own parameters, local variables and place to return to", "A loop that runs one time for each recursive call the function makes"],
            answer: 2, explain: "Each call gets a frame of its own, which is why a waiting call still has its own n when the call on top of it returns." },
          { q: "How many calls does the naive recursive `fib(5)` make, counting itself?",
            choices: ["5", "9", "15", "32"],
            answer: 2, explain: "fib(4) makes 9 and fib(3) makes 5, plus fib(5) itself: 15. With results remembered it would be 9." },
          { q: "What does memoization do to the recursive `fib`?",
            choices: ["Makes each individual call cheaper, while the total number of calls stays the same", "Turns about 1.6ⁿ calls into about 2n, by computing each fib(k) once", "Removes the need for any base cases, since results are stored instead", "Converts the recursion into a loop behind the scenes, so no frames stack up"],
            answer: 1, explain: "There are only n + 1 subproblems. Storing each result the first time means every later call for it is a single lookup." },
          { q: "What causes `RangeError: Maximum call stack size exceeded`?",
            choices: ["A loop that runs so many times that the engine decides to stop it partway through", "Too many frames waiting at once, from recursion that goes too deep", "An array that grows past a million items and runs out of room to hold them all", "Calling a function before it's defined, which leaves the stack in a broken state"],
            answer: 1, explain: "Each waiting call keeps a frame, and the stack has a fixed size. Depth, not the total number of calls, is what fills it." },
          { q: "Merge sort on 1,000,000 items makes millions of calls. Why doesn't it run out of stack?",
            choices: ["Engines notice sorting functions and give them a much larger stack to work with", "It doesn't really make recursive calls, since the engine rewrites them as a loop", "It halves its input, so only about 20 calls are ever waiting at once", "Each frame is freed before the next call starts, so frames never pile up"],
            answer: 2, explain: "The depth of the recursion is log₂ n, about 20. Many calls happen in total, but only one chain of about 20 is waiting at any moment." },
          { q: "How do you rewrite a deep recursion so it can't overflow the call stack?",
            choices: ["Wrap each recursive call in try/catch, so the error is caught and ignored", "Keep the pending work in an array used as a stack, inside a loop", "Add a second base case, so the recursion stops sooner on every input it gets", "Make the function async, so each call waits in a queue instead of on the stack"],
            answer: 1, explain: "The array lives in ordinary memory, which is far larger than the call stack, so the loop can handle depths that recursion can't." }
        ]
      }
    ]
  });
})();
