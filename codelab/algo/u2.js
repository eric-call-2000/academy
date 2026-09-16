/* How Code Scales — Unit 2: Big-O, the language */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var HALVING = function (start) {
    return "let steps = 0;\nfor (let i = " + start + "; i > 1; i = Math.floor(i / 2)) {\n  steps++;\n}\nconsole.log(steps);";
  };

  var INDEX_OF_NAME = R`
function indexOfName(names, target) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === target) {
      return i;
    }
  }
  return -1;
}`;

  var COUNTED_INDEX_OF_NAME = R`
let count = 0;
function indexOfName(names, target) {
  for (let i = 0; i < names.length; i++) {
    count++;
    if (names[i] === target) {
      return i;
    }
  }
  return -1;
}`;

  var COMMON = R`
function common(a, b) {
  return a.filter(x => b.includes(x));
}`;

  window.CODELAB.addUnit("algo", {
    id: "algo-u2",
    title: "Big-O, the language",
    icon: "🔤",
    blurb: "Drop the constants, keep the shape, and say which case you mean. Big-O notation, why halving gives log n, best and worst cases, two inputs at once, and memory as a cost of its own.",
    cheat: [
      { h: "Finding the big-O", lang: "text", code: R`
3n² + 200n + 7   →  O(n²)     keep the fastest-growing term
500n             →  O(n)      drop its constant
7 steps, any n   →  O(1)
n²/2 + 5n        →  O(n²)`,
        note: "Big-O names how the work grows. Two O(n) functions can still differ several times in speed; compare those by counting on the same data." },
      { h: "Growth classes, slowest-growing first", lang: "text", code: R`
O(1)  O(log n)  O(n)  O(n log n)  O(n²)  O(2ⁿ)
at n = 1,000:  1 · 10 · 1,000 · 10,000 · 1,000,000 · (302 digits)`,
        note: "log n comes from halving: 1,000 → 10 steps, 1,000,000 → 20, 1,000,000,000 → 30. Doubling n adds one step." },
      { h: "Best, worst, average", lang: "js", code: R`
for (let i = 0; i < names.length; i++) {
  if (names[i] === target) { return i; }
}
// best 1 · worst n (last or missing) · average about n/2`,
        note: "A single big-O for a function usually means its worst case, because that's a guarantee. O(1) means no growth, not fast." },
      { h: "Two inputs, and memory", lang: "text", code: R`
loop over n inside loop over m   →  O(n·m)
loop over n, then loop over m    →  O(n + m)
Set of every item                →  O(n) extra space`,
        note: "Don't round n·m to n². Space complexity counts extra memory beyond the input; speed is often bought with it." }
    ],
    lessons: [

      {
        id: "algo-u2-1",
        title: "Drop the constants, keep the shape",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { ask: { type: "pick",
              q: "Function A does `3n² + 200n + 7` steps. Function B does `500n` steps. At n = 1,000,000, which one does fewer?",
              choices: ["A, because 3 is a much smaller multiplier than 500", "B, and by a margin of thousands of times", "Neither: at that size the constants balance out", "A, because 200n + 7 is less work than 500n"],
              answer: 1,
              why: [
                "The power matters more than the multiplier. At a million, 3n² is 3,000,000,000,000; 500n is 500,000,000.",
                "A does about 6,000 times as many steps. For large n, the term with the highest power decides.",
                "They don't balance. n² keeps pulling away: each doubling of n quadruples it but only doubles 500n.",
                "That part is smaller, but A also has 3n², which is 3 trillion steps at this size."
              ],
              run: true,
              check: "const n = 1e6;\nconst a = 3 * n * n + 200 * n + 7, b = 500 * n;\nconsole.log(b < a ? 1 : 0);" } },

          { read: "**Big-O** names that shape. To find it:\n\n- keep only the term that grows fastest\n- drop its constant multiplier\n\nSo `3n² + 200n + 7` is **O(n²)**, read \"order n squared\", and `500n` is **O(n)**. A function that does 7 steps whatever the input is **O(1)**.\n\nThe smaller terms and constants still exist. Big-O leaves them out because once n is large, the fastest-growing term decides.",
            ask: { type: "predict",
              q: "What's the big-O of a function that does `4n + 2n + 90` steps?",
              answer: "O(n)",
              accept: ["n", "linear"],
              why: "4n + 2n is 6n. Drop the constant and the + 90: O(n)." } },

          { read: "A common mistake: *\"O(2n) is slower than O(n).\"* It isn't a different class. O(2n) is O(n), because big-O drops constant multipliers.\n\nThe other half of the same mistake: two O(n) functions can differ a lot in real speed. One might do n steps and the other 50n. Big-O tells you both double when n doubles. It doesn't tell you which is faster at a given size; for that, count or measure both on the same data.",
            ask: { type: "pick",
              q: "Functions A and B are both O(n). Which conclusion holds?",
              choices: ["They take the same amount of time as each other on every possible input", "Doubling n roughly doubles the work for both, but one may be several times faster", "Whichever function has more lines of code will be the slower of the two every time", "Neither of them can become slow, however large n gets, because linear is fast"],
              answer: 1,
              why: [
                "The same big-O means the same growth, not the same speed. One could do n steps and the other 50n.",
                "Same class, same growth. Constant factors still decide which is faster at a given n.",
                "Code length isn't work. Only counting, or measuring both on the same data, compares them.",
                "Linear at n = 1,000,000,000 is still a billion steps. O(n) can be too slow when n is large enough."
              ] } },

          { ask: { type: "order", transfer: true,
              q: "Put these growth classes in order, from slowest-growing to fastest-growing.",
              lines: ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
              why: "Constant, then logarithmic, linear, n log n, quadratic and exponential. At n = 1,000 they're roughly 1, 10, 1,000, 10,000 and 1,000,000 steps, and 2¹⁰⁰⁰ has 302 digits." } },

          { ask: { type: "predict", transfer: true,
              q: "What's the big-O of a function that does `n²/2 + 5n` steps?",
              answer: "O(n²)",
              accept: ["n²", "n^2", "quadratic"],
              why: "The n² term grows fastest. Drop the ½ and the 5n: O(n²)." } }
        ]
      },

      {
        id: "algo-u2-2",
        title: "Halving means log n",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "A game first. The lab opens once you've answered.",
            ask: { type: "lab", lab: "halving", params: { max: 1000000 },
              predict: { type: "predict",
                q: "A hidden number is somewhere from 1 to 1,000,000. After each guess you're told \"higher\" or \"lower\". With the best strategy, what's the most guesses you'll ever need? Type a number.",
                answer: "20",
                why: "Each guess at the middle halves the range: 1,000,000, then 500,000, then 250,000 and so on. Twenty halvings get below one number, because 2²⁰ is just over a million.",
                run: true,
                check: R`
// Worst case for a range of "size" numbers when you always guess the middle:
// one guess, then the worse of the two halves that remain.
function worst(size) {
  if (size <= 0) { return 0; }
  const left = Math.floor((size - 1) / 2);
  return 1 + Math.max(worst(left), worst(size - 1 - left));
}
console.log(worst(1000000));` } } },

          { read: "That's **logarithmic** growth. Each step halves what's left, so the number of steps is how many times you can halve n before reaching 1: log₂ n.\n\n- 1,000 items: about 10 halvings\n- 1,000,000 items: about 20\n- 1,000,000,000 items: about 30\n\nIn code, it's a loop that halves its variable on every pass.",
            ask: { type: "predict",
              q: "What does this print?",
              code: HALVING(1024),
              answer: "10",
              why: "1,024 halves to 512, 256 and so on down to 2, and reaching 1 stops the loop: ten passes, because 2¹⁰ = 1,024.",
              run: true } },

          { ask: { type: "predict", transfer: true,
              q: "The same loop, starting at 1,000. What does it print?",
              code: HALVING(1000),
              answer: "9",
              why: "1,000, 500, 250, 125, 62, 31, 15, 7, 3, then 1 stops it: nine passes. Math.floor rounds down each time.",
              run: true } },

          { read: "The striking part: doubling n adds just **one** step, because one more halving undoes the doubling. That's the idea behind database indexes, which find one row among a billion in a few dozen steps.",
            ask: { type: "pick", transfer: true,
              q: "An O(log n) lookup takes 20 steps on 1,000,000 items. About how many steps does it take on 2,000,000?",
              choices: ["About 21 steps", "About 40 steps", "Exactly 20 steps, since it never changes", "About 400 steps"],
              answer: 0,
              why: [
                "Doubling n adds one halving: 21.",
                "Doubling the steps would be linear growth. Logarithmic growth adds one step per doubling.",
                "It does change, just very slowly: one more halving is needed.",
                "That would be 20², quadratic behaviour. log n grows the slowest of these."
              ],
              run: true,
              check: "const a = Math.ceil(Math.log2(1000000)), b = Math.ceil(Math.log2(2000000));\nconsole.log(b - a === 1 ? 0 : -1);" } },

          { ask: { type: "pick", transfer: true,
              q: "Which loop runs about log₂ n times?",
              choices: ["`for (let i = 0; i < n; i += 2)`", "`for (let i = 1; i < n; i *= 2)`", "`for (let i = 0; i < n / 2; i++)`", "`for (let i = n; i > 0; i -= 10)`"],
              answer: 1,
              why: [
                "Adding 2 each time takes n/2 passes: still linear.",
                "i goes 1, 2, 4, 8 and so on, doubling each pass, so it reaches n after about log₂ n passes.",
                "n/2 passes, one step at a time: linear.",
                "Subtracting 10 takes n/10 passes: linear, with a smaller constant."
              ],
              run: true,
              check: R`
const n = 1024;
const counts = [0, 0, 0, 0];
for (let i = 0; i < n; i += 2) { counts[0]++; }
for (let i = 1; i < n; i *= 2) { counts[1]++; }
for (let i = 0; i < n / 2; i++) { counts[2]++; }
for (let i = n; i > 0; i -= 10) { counts[3]++; }
console.log(counts.indexOf(Math.log2(n)));` } }
        ]
      },

      {
        id: "algo-u2-3",
        title: "Best case, worst case, and the input you'll get",
        kind: "concept", xp: 15, mins: 16,
        screens: [
          { ask: { type: "predict",
              q: "`names` holds 10,000 names. In a single call, what's the greatest number of times `names[i] === target` can run?",
              code: INDEX_OF_NAME,
              answer: "10000",
              why: "If `target` is the last name, or isn't in the list at all, the loop compares every one of the 10,000 names before it can answer.",
              run: true,
              check: COUNTED_INDEX_OF_NAME + "\nconst names = Array.from({ length: 10000 }, (_, i) => 'user' + i);\nindexOfName(names, 'nobody');\nconsole.log(count);" } },

          { read: "The same function does very different amounts of work on different inputs:\n\n- **Best case:** the target is first. 1 comparison.\n- **Worst case:** the target is last or missing. n comparisons.\n- **Average case:** if the target is present and equally likely to be anywhere, about n/2.\n\nWhen people give one big-O for a function, they usually mean the **worst case**, because it's a guarantee: no input can do worse. Linear search is O(n).",
            ask: { type: "pick",
              q: "Someone says: \"Linear search is O(1), because the name is usually near the front.\" What's wrong with that?",
              choices: ["Nothing is wrong: big-O describes whichever case happens most often in practice, so it's right", "O(1) is its best case; a missing or last name costs n, and a guarantee has to cover that", "Linear search is really O(log n) in practice, once the list is long enough to matter", "Big-O can only describe searching through data that is already sorted, so it doesn't apply"],
              answer: 1,
              why: [
                "Big-O is usually quoted for the worst case. \"Usually fast\" is a claim about typical inputs, not a guarantee.",
                "Best case O(1), worst case O(n). The worst case is what a user with a missing name gets.",
                "Checking one item at a time is linear. Halving (log n) needs sorted data and a different algorithm.",
                "Big-O describes how any algorithm's work grows, sorted data or not."
              ] } },

          { read: "The opposite mistake: **\"O(1) means fast.\"** O(1) means the work doesn't grow with n. It says nothing about how big that fixed amount is.\n\nChecking a password against a slow hash is deliberately O(1) in the number of users and deliberately slow. Big-O is about growth. Whether a fixed cost is acceptable is a separate question.",
            ask: { type: "pick",
              q: "A function always does exactly 1,000,000,000 steps, whatever its input. How would you describe it?",
              choices: ["O(n), since it does such an enormous amount of work on every call", "O(1), and still far too slow to run on every request", "O(log n), because the count is a power of ten", "It can't be described with big-O at all"],
              answer: 1,
              why: [
                "Big-O is about growth, not size. The count never changes with the input, so it's O(1).",
                "Constant, because it doesn't grow. Slow, because a billion steps is a billion steps.",
                "A power of ten isn't a halving pattern. The count doesn't depend on n at all.",
                "It can: work that doesn't depend on n is O(1)."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A login lookup scans an array of 2,000,000 users, and frequent users sit near the front. Which statement is right?",
              choices: ["It's fine: the average user is found quickly, and the average is what people actually feel", "The worst case matters: a user near the end, or a mistyped name, scans all 2,000,000", "It's O(1) for the frequent users, and they're the ones who log in most, so the lookup is O(1)", "Sorting the array would make this same front-to-back scan fast, without changing anything else"],
              answer: 1,
              why: [
                "Averages hide the slow requests. Every mistyped name is a full scan of 2,000,000 entries.",
                "A guarantee has to cover the worst input, and a missing name is an input you'll definitely get.",
                "The lookup's big-O has to cover every user, including the ones at the end.",
                "Sorting doesn't help a front-to-back scan. It helps only if you switch to halving the range."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "On a list of 500 names, how many comparisons does `indexOfName(names, names[0])` make?",
              code: INDEX_OF_NAME,
              answer: "1",
              why: "The best case: the target is the very first name, so the loop returns on its first comparison.",
              run: true,
              check: COUNTED_INDEX_OF_NAME + "\nconst names = Array.from({ length: 500 }, (_, i) => 'user' + i);\nindexOfName(names, names[0]);\nconsole.log(count);" } },

          { ask: { type: "explain",
              q: "Why do engineers usually quote the worst case for something like a login lookup?",
              model: "Because it's a guarantee. Some request will hit a missing or last item, and that request's cost is the one that times out or slows the server. The average hides the requests that hurt.",
              rubric: ["Calls the worst case a guarantee or an upper bound", "Names a concrete bad input, like a missing or last item", "Says the average can hide the slow requests"] } }
        ]
      },

      {
        id: "algo-u2-4",
        title: "Two inputs, and memory too",
        kind: "concept", xp: 15, mins: 15,
        screens: [
          { ask: { type: "predict",
              q: "What does this print?",
              code: R`
let steps = 0;
const a = Array.from({ length: 300 }, (_, i) => i);
const b = Array.from({ length: 40 }, (_, i) => i);
for (const x of a) {
  for (const y of b) {
    steps++;
  }
}
console.log(steps);`,
              answer: "12000",
              why: "300 outer passes, each running the inner loop 40 times: 300 × 40 = 12,000.",
              run: true } },

          { read: "When a function has two inputs of different sizes, give each its own letter. Say `orders` has **n** items and `products` has **m**:\n\n- a loop over one **inside** a loop over the other is **O(n·m)**\n- a loop over one **after** a loop over the other is **O(n + m)**\n\nDon't round O(n·m) to O(n²). With a million orders and ten products, n·m is ten million, while n² would be a trillion.",
            ask: { type: "pick",
              q: "A function loops over `orders` (n items), and then, separately, loops over `products` (m items). What's its big-O?",
              choices: ["O(n·m), because there are two different loops", "O(n + m)", "O(n²), since two loops of work means n squared", "O(1), because each loop only does one thing"],
              answer: 1,
              why: [
                "Multiplying is for a loop inside a loop. These run one after the other, so they add.",
                "One pass over n, then one pass over m: n + m.",
                "The two sizes are different, and loops in sequence add rather than multiply.",
                "Each loop does one thing per item, so the work still grows with n and with m."
              ] } },

          { read: "Big-O describes memory too. **Space complexity** counts the extra memory a function needs as n grows, not counting its input.\n\n- Adding numbers into one `total` variable: O(1) extra space.\n- Building a new array with an entry per input item: O(n).\n\nOften you trade one for the other. The one-pass `dedupe` from Unit 1 is fast *because* it spends O(n) memory on a `Set`.",
            ask: { type: "pick",
              q: "How much extra memory does the `Set` version of `dedupe` use, in the worst case?",
              choices: ["O(1), since the Set is only one object no matter how many values it ends up holding", "O(n): when every value is new, each one goes into the Set and the result", "O(n²), because two separate structures are growing at the same time as each other", "None, since JavaScript collects the garbage afterwards"],
              answer: 1,
              why: [
                "One object can hold a million entries. Memory grows with what's stored in it.",
                "All-distinct input puts n values in the Set and n in the result: 2n, which is O(n).",
                "Two structures of size n add up to 2n. They'd multiply only if each item stored a structure of size n.",
                "Garbage collection frees memory after the function finishes. While it runs, the Set holds up to n values."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "With n = `a.length` and m = `b.length`, what's the big-O of this function's running time?",
              code: COMMON,
              answer: "O(n·m)",
              accept: ["O(n*m)", "O(nm)", "O(m·n)", "O(m*n)", "O(mn)"],
              why: "`filter` visits each of the n items of `a`, and for each one `includes` may scan all m items of `b`: n × m." } },

          { ask: { type: "pick", transfer: true,
              q: "`common(a, b)` is too slow when both arrays hold 50,000 items. Which change makes it O(n + m)?",
              code: COMMON,
              choices: ["Replace `filter` with a hand-written `for` loop over `a`", "Build `const inB = new Set(b)` once, then filter with `inB.has(x)`", "Sort `a` before calling it, and then call `common(a, b)` the same way as before", "Use `b.indexOf(x) !== -1` in place of `b.includes(x)`"],
              answer: 1,
              why: [
                "The loop was never the problem. The scan of `b` inside it would still be there.",
                "Building the Set is one pass over m, and each `has` takes about constant work: n + m.",
                "Sorting `a` doesn't change the fact that each item still scans `b`.",
                "`indexOf` scans `b` exactly the way `includes` does."
              ] } },

          { ask: { type: "explain",
              q: "Explain in plain English what `common(a, b)` does, and what it costs.",
              model: "It returns the items of `a` that also appear in `b`. For every item of `a`, `includes` scans through `b`, so the work is about n × m comparisons.",
              rubric: ["Says what it returns: the items that are in both arrays", "Says `includes` scans `b` once for each item of `a`", "Gives the cost as n × m (or O(n·m))"] } }
        ]
      },

      {
        id: "algo-quiz-2",
        title: "Unit 2 quiz: Big-O",
        kind: "quiz", xp: 10,
        brief: "Dropping constants, logarithms, best and worst cases, two inputs and memory. 80% to pass.",
        questions: [
          { q: "What's the big-O of `7n³ + 1000n² + 5`?",
            choices: ["O(n³)", "O(7n³)", "O(n³ + n²)", "O(1000n²)"],
            answer: 0, explain: "Keep the fastest-growing term and drop its constant. n³ outgrows 1000n² once n passes 1,000, and big-O is about large n." },
          { q: "Halving a range of 1,000 numbers again and again, about how many halvings get it down to one number?",
            choices: ["About 10", "About 100", "About 500", "About 32"],
            answer: 0, explain: "2¹⁰ is 1,024, so ten halvings take 1,000 below one. That's log₂ n, and it's why doubling n adds only one step." },
          { q: "Linear search over n items is described as O(n). Which case does that describe?",
            choices: ["The worst case, which is a guarantee no input can exceed", "The best case, when the item turns out to be first", "The average case over inputs that come up often in practice", "Only searches over data that has been sorted beforehand"],
            answer: 0, explain: "A single big-O for a function usually means its worst case: the target is last or missing, and all n items are checked. The best case is O(1)." },
          { q: "A function loops over `users` (n items) and, for each user, loops over `roles` (m items). What's its time complexity?",
            choices: ["O(n + m)", "O(n·m)", "O(n²)", "O(m)"],
            answer: 1, explain: "A loop inside a loop multiplies: m passes for each of n users. With two different sizes, write n·m rather than rounding it to n²." },
          { q: "Which statement about O(1) is true?",
            choices: ["The work doesn't grow with n, but the fixed amount can still be large", "It always finishes in under a millisecond, on any machine", "It means the function has exactly one line of code in it", "It means the function body never contains a loop of any kind, even one with a fixed count"],
            answer: 0, explain: "O(1) says the work is the same for every n. A loop of a fixed 1,000,000,000 passes is O(1) and still slow." },
          { q: "`dedupe` with a Set runs in O(n) time. What does it spend to get there?",
            choices: ["O(n) extra memory for the Set", "Nothing, since Sets are free to create and fill", "O(n²) extra memory in the worst case", "It changes the input array in place to save space"],
            answer: 0, explain: "The Set remembers every distinct value, so its memory grows with n. Trading memory for time is one of the most common moves in performance work." }
        ]
      }
    ]
  });
})();
