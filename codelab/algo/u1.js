/* How Code Scales — Unit 1: What "slow" means */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var SETUP_THEN_PASS = R`
function a(n) {
  let steps = 0;
  for (let i = 0; i < 1000; i++) {
    steps++;
  }
  for (let i = 0; i < n; i++) {
    steps++;
  }
  return steps;
}`;

  var EVERY_PAIR = R`
function b(n) {
  let steps = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      steps++;
    }
  }
  return steps;
}`;

  var FIXED = R`
function fixed(n) {
  let steps = 0;
  for (let i = 0; i < 7; i++) {
    steps++;
  }
  return steps;
}`;

  var ONE_PASS = R`
function onePass(n) {
  let steps = 0;
  for (let i = 0; i < n; i++) {
    steps++;
  }
  return steps;
}`;

  var PAIRS = R`
function pairs(n) {
  let steps = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      steps++;
    }
  }
  return steps;
}`;

  var DEDUPE_STARTER = R`
// Keep the first copy of every value, in order.
function dedupe(list) {
  const result = [];
  for (const value of list) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
}

console.log(dedupe([3, 1, 3, 2, 1]));
`;

  var DEDUPE_SOLUTION = R`
// Keep the first copy of every value, in order.
function dedupe(list) {
  const seen = new Set();
  const result = [];
  for (const value of list) {
    if (!seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
  }
  return result;
}

console.log(dedupe([3, 1, 3, 2, 1]));
`;

  window.CODELAB.addUnit("algo", {
    id: "algo-u1",
    title: "What \"slow\" means",
    icon: "⏱️",
    blurb: "Timing a function tells you about your laptop. Counting its steps tells you about the code: how to count loops, the doubling test that shows how work grows, and the loop hiding inside a method call.",
    cheat: [
      { h: "Count steps, not seconds", lang: "js", code: R`
// A timing answers: this input, this machine, right now.
// A step count answers: how does the work change with n?
let steps = 0;
for (const item of list) {
  steps++;          // one step per item: n steps
}`,
        note: "Pick the operation a function repeats (a comparison, a loop pass) and count it for an input of size n. The count is the same on every machine." },
      { h: "Loops add or multiply", lang: "js", code: R`
for (a of list) { }  for (b of list) { }   // n + n = 2n
for (a of list) { for (b of list) { } }  // n × n
for (a of list) { for (k = 0; k < 5; k++) { } }  // 5n`,
        note: "One loop after another: add. A loop inside a loop: multiply. An inner loop of fixed length is a constant, not another n." },
      { h: "The doubling test", lang: "text", code: R`
steps at n, then at 2n, divide:
  ×1  barely grows with n
  ×2  linear      (n)
  ×4  quadratic   (n²)
  ×8  cubic       (n³)`,
        note: "The ratio cancels constants: 3n and 300n both show ×2. Look at a few doublings; small extras fade as n grows." },
      { h: "Hidden loops", lang: "js", code: R`
for (const v of list) {
  if (!result.includes(v)) { }   // includes walks result: n × n
}
const seen = new Set();
for (const v of list) {
  if (!seen.has(v)) { }          // has doesn't walk: n
}`,
        note: "includes, indexOf, find, filter, some and spread all walk an array. Inside a loop over n, each one multiplies." }
    ],
    lessons: [

      {
        id: "algo-u1-1",
        title: "The stopwatch lies",
        kind: "concept", xp: 15, mins: 16,
        screens: [
          { read: "Two functions do the same job. **A** spends 1,000 steps on setup, then one step per item. **B** compares every item with every item, so it does n × n steps.\n\nBefore the lab opens, commit to an answer.",
            ask: { type: "lab", lab: "doubling",
              params: { fns: [{ label: "A: setup, then one pass", code: SETUP_THEN_PASS }, { label: "B: every pair", code: EVERY_PAIR }], sizes: [10, 30, 100, 300, 1000, 3000] },
              predict: { type: "pick",
                q: "At n = 10, which function does fewer steps? And at n = 3,000?",
                choices: ["A at both sizes, since it has the simpler loops", "B at both sizes, since it doesn't have any setup", "B at n = 10, then A at n = 3,000", "A at n = 10, then B at n = 3,000"],
                answer: 2,
                why: [
                  "At n = 10, A does 1,010 steps and B only 100. On a small input, A's fixed setup dominates.",
                  "B's n × n passes A once n is about 32. At 3,000 it's 9,000,000 steps against A's 4,000.",
                  "At 10, B does 100 steps to A's 1,010. At 3,000, B does 9,000,000 to A's 4,000. Which one is faster depends on n.",
                  "It's the other way round: A's fixed 1,000 steps lose at n = 10 (1,010 against 100), and B's n × n loses badly at 3,000."
                ],
                run: true,
                check: SETUP_THEN_PASS + "\n" + EVERY_PAIR + "\nconst key = (a(10) < b(10) ? 'A' : 'B') + (a(3000) < b(3000) ? 'A' : 'B');\nconsole.log({ AA: 0, BB: 1, BA: 2, AB: 3 }[key]);" } } },

          { read: "Timing is still useful. A single timing just answers a narrow question: *how long did this input take, on this machine, right now?*\n\n- Back-to-back runs of the same function often report different times, because other work shares the machine.\n- The first run is often the slowest, because the JavaScript engine optimizes code after it has run a few times.\n- Your laptop isn't the server, and your test data usually isn't production data.\n\nNone of that tells you what happens when the input gets 100 times bigger.",
            ask: { type: "pick",
              q: "A teammate times `findUser` on their laptop with 50 test users and gets 3 ms. What does that tell you?",
              choices: ["It will take about 3 ms in production too", "It's quick for 50 users on that laptop, and says little about 500,000", "It's O(1), because 3 ms is too quick for a function that loops", "Nothing at all, so the team should stop timing its code"],
              answer: 1,
              why: [
                "Production has different hardware, other load and far more users. A timing on 50 test users doesn't carry over.",
                "The timing is real, but it describes that input on that machine. How the work grows is a separate question.",
                "A loop over 50 items can easily finish in 3 ms. Speed on a small input says nothing about how the work grows.",
                "Timing is useful. It just answers a narrower question than \"will this scale?\""
              ] } },

          { read: "So count instead. Pick the operation a function repeats (a comparison, a loop pass, a lookup) and count how many times it happens for an input of size **n**.\n\nA step count is the same on every machine and every run. It changes only when the input changes, which is exactly what you want to know about. Seconds are steps multiplied by how fast one machine is. The steps are the part your code controls.",
            ask: { type: "pick", transfer: true,
              q: "Which measurement tells you how a function will behave when its input grows 100 times larger?",
              choices: ["Its running time on the fastest machine you can find", "How its step count changes as n grows", "How many lines of code its body has", "Its running time on the smallest input you have"],
              answer: 1,
              why: [
                "A faster machine shrinks every timing by about the same factor. It doesn't show how the work grows.",
                "The step count as a function of n is what predicts the 100× case.",
                "A three-line function can loop over every pair of items. The length of code isn't the amount of work.",
                "A small input hides growth. It's the input on which every approach looks fast."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "The loop body runs once per price. If `prices` has 500 items, how many times does `sum += p` run?",
              code: R`
function total(prices) {
  let sum = 0;
  for (const p of prices) {
    sum += p;
  }
  return sum;
}`,
              answer: "500",
              why: "One pass over the array runs the body once per item: 500 items, 500 additions.",
              run: true,
              check: R`
let count = 0;
function total(prices) {
  let sum = 0;
  for (const p of prices) {
    sum += p;
    count++;
  }
  return sum;
}
total(new Array(500).fill(1));
console.log(count);` } },

          { ask: { type: "explain",
              q: "In one or two sentences: why is \"it ran fast on my laptop\" weak evidence that code will be fine in production?",
              model: "A timing depends on the machine and on the input you tried. If the work grows quickly with n, code can be quick on small test data and far too slow on production-sized data.",
              rubric: ["Says a timing depends on the machine or the conditions", "Says the test input can be much smaller than the real input", "Mentions how the work grows as the input grows"] } }
        ]
      },

      {
        id: "algo-u1-2",
        title: "Counting steps",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "Counting starts with loops, because a loop is where a few lines of code turn into a lot of work. Predict first; the rules come after.",
            ask: { type: "predict",
              q: "What does this print?",
              code: R`
let steps = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    steps++;
  }
}
console.log(steps);`,
              answer: "12",
              why: "The inner loop runs 3 times for each of the 4 passes of the outer loop: 4 × 3 = 12.",
              run: true } },

          { read: "Two rules cover most code:\n\n- **One loop after another: add.** A loop over n items followed by another loop over n items is n + n = 2n steps.\n- **A loop inside a loop: multiply.** An inner loop of n passes, run once for each of n outer passes, is n × n steps.\n\nWorked example: a function loops over `list` to find the largest value, then loops again to count how often it appears. Two loops in sequence, each over n items: n + n = **2n**.",
            ask: { type: "predict",
              q: "What does this print?",
              code: R`
function work(n) {
  let steps = 0;
  for (let i = 0; i < n; i++) {
    steps++;
  }
  for (let j = 0; j < n; j++) {
    steps++;
  }
  return steps;
}
console.log(work(50));`,
              answer: "100",
              why: "Two loops one after the other: 50 + 50 = 100.",
              run: true } },

          { read: "This time one step is done for you: the inner loop always runs exactly 5 times, whatever n is, so it's a constant 5. The nesting rule finishes the count.",
            ask: { type: "predict",
              q: "What does this print?",
              code: R`
function grid(n) {
  let steps = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 5; j++) {
      steps++;
    }
  }
  return steps;
}
console.log(grid(40));`,
              answer: "200",
              why: "Nesting multiplies: 40 outer passes × 5 inner passes = 200. The inner loop doesn't depend on n, so this grows like 5n, not n².",
              run: true } },

          { read: "A loop doesn't have to move one at a time. Count the values the loop variable actually takes.",
            ask: { type: "predict",
              q: "What does this print?",
              code: R`
let steps = 0;
for (let i = 0; i < 100; i += 2) {
  steps++;
}
console.log(steps);`,
              answer: "50",
              why: "`i` takes 0, 2, 4, … 98: fifty values. Skipping every other item halves the count, but the count still grows in step with n.",
              run: true } },

          { ask: { type: "predict", transfer: true,
              q: "No hints this time. What does this print?",
              code: PAIRS + "\nconsole.log(pairs(10));",
              answer: "45",
              why: "For i = 0 the inner loop runs 9 times, then 8, 7, and so on down to 0: 9 + 8 + … + 1 = 45. Each pair of items is counted once.",
              run: true } },

          { ask: { type: "pick", transfer: true,
              q: "As n grows, how does the step count of `pairs(n)` grow?",
              code: PAIRS,
              choices: ["Like n: doubling n doubles the steps", "Like n²: doubling n roughly quadruples the steps", "It levels off, because the inner loop keeps getting shorter", "Like 2n, because the function has two loops in it"],
              answer: 1,
              why: [
                "pairs(10) is 45 but pairs(20) is 190, more than four times as many. That isn't linear.",
                "The count is n(n − 1)/2, and its n² term dominates: doubling n multiplies it by about 4.",
                "The inner loop does get shorter, but on average it's still about n/2 long, and it runs n times: about n²/2.",
                "Two loops in sequence would add. These are nested, so they multiply."
              ],
              run: true,
              check: PAIRS + "\nconst r = pairs(2000) / pairs(1000);\nconsole.log(r > 3.9 && r < 4.1 ? 1 : -1);" } }
        ]
      },

      {
        id: "algo-u1-3",
        title: "The doubling test",
        kind: "concept", xp: 15, mins: 17,
        screens: [
          { ask: { type: "pick",
              q: "A function does 1,200 steps at n = 1,000 and 4,800 steps at n = 2,000. About how many steps will it do at n = 4,000?",
              choices: ["About 9,600 steps", "About 19,200 steps", "About 12,000 steps", "About 8,400 steps"],
              answer: 1,
              why: [
                "That would be doubling. But 1,200 to 4,800 was ×4, not ×2.",
                "Doubling n multiplied the steps by 4, so doubling again gives 4,800 × 4 = 19,200. That's the signature of n².",
                "That's 1,200 × 10, as if the work grew in step with n. The data says ×4 per doubling.",
                "That adds another 3,600, as if the growth were a fixed amount. It's a ratio: ×4 per doubling."
              ],
              run: true,
              check: "const ratio = 4800 / 1200;\nconsole.log(4800 * ratio === 19200 ? 1 : -1);" } },

          { read: "That's the **doubling test**. Count the steps at some n, then at 2n, and divide:\n\n- about **×1**: the work barely depends on n\n- about **×2**: it grows in step with n (**linear**)\n- about **×4**: it grows like n² (**quadratic**)\n- about **×8**: it grows like n³\n\nThe ratio ignores constants: a function doing 3n steps and one doing 300n steps both show ×2.",
            ask: { type: "lab", lab: "doubling",
              params: { fns: [{ label: "Fixed: always 7 steps", code: FIXED }, { label: "One pass", code: ONE_PASS }, { label: "Every pair", code: EVERY_PAIR }], sizes: [250, 500, 1000, 2000] },
              predict: { type: "pick",
                q: "In the lab, n doubles from 1,000 to 2,000. What ratio will the every-pair function show?",
                choices: ["About ×1", "About ×2", "About ×4", "About ×8"],
                answer: 2,
                why: [
                  "×1 is a function whose work doesn't depend on n, like the fixed 7-step loop.",
                  "×2 is one pass over n. The every-pair function does n passes for each of n.",
                  "n × n is 4,000,000 at 2,000 and 1,000,000 at 1,000: four times as many.",
                  "×8 would take three nested loops: n × n × n."
                ],
                run: true,
                check: EVERY_PAIR + "\nconst r = b(2000) / b(1000);\nconsole.log({ 1: 0, 2: 1, 4: 2, 8: 3 }[r]);" } } },

          { read: "Real code has setup and small extras, so real ratios come out like ×2.1 or ×3.8 rather than exact. Look at the trend over a few doublings: the extras matter less as n grows, and the ratio settles.",
            ask: { type: "predict", transfer: true,
              q: "A function's step counts at n = 100, 200, 400 and 800 are 300, 600, 1,200 and 2,400. What ratio does each doubling show? Type a number.",
              answer: "2",
              accept: ["×2", "x2", "2x", "2.0"],
              why: "Each count is twice the one before: ×2 per doubling, so the work grows linearly (here, 3 steps per item).",
              run: true,
              check: "console.log(600 / 300);" } },

          { ask: { type: "pick", transfer: true,
              q: "Step counts at n = 100, 200 and 400 are 5,000, 5,004 and 5,008. How does this function grow?",
              choices: ["Like n²: the counts are already in the thousands", "Like n: every time n doubles, the step count goes up along with it", "It barely grows: each doubling gives a ratio of about ×1", "You can't tell without timing it on a real machine"],
              answer: 2,
              why: [
                "Big numbers aren't the same as fast growth. 5,000 to 5,004 is almost no change.",
                "It does go up, but by 4 steps, not by double. Linear growth would show ×2.",
                "5,004 ÷ 5,000 is about 1.0. Nearly all the work is a fixed cost, and growing n adds almost nothing.",
                "The counts already answer it. Step counts are the machine-independent way to see growth."
              ],
              run: true,
              check: "const r = 5004 / 5000;\nconsole.log(r < 1.3 ? 2 : -1);" } },

          { ask: { type: "predict", transfer: true,
              q: "`-1` isn't in the list. What does this print?",
              code: R`
function scan(list, target) {
  let steps = 0;
  for (const item of list) {
    steps++;
    if (item === target) {
      break;
    }
  }
  return steps;
}
const list = Array.from({ length: 2000 }, (_, i) => i);
console.log(scan(list, -1));`,
              answer: "2000",
              why: "The loop never finds the target, so it never breaks: it visits all 2,000 items.",
              run: true } },

          { ask: { type: "explain",
              q: "Why does the doubling test compare the counts at n and 2n, instead of looking at one count on its own?",
              model: "One count mixes fixed setup with the per-item work, so it can't show a trend. The ratio between n and 2n cancels constant factors and shows how the work grows: about ×1, ×2 or ×4.",
              rubric: ["Says one number on its own doesn't show the trend", "Mentions constants or setup cancelling out", "Names the ratio (×1, ×2, ×4) as the thing to read"] } }
        ]
      },

      {
        id: "algo-u1-4",
        title: "Find the hidden loop",
        kind: "js", chip: "JS", xp: 15, mins: 12, count: true,
        brief: "This function looks like it has one loop:\n\n```js\nfor (const value of list) {\n  if (!result.includes(value)) {\n    result.push(value);\n  }\n}\n```\n\nIt has two. `result.includes(value)` walks `result` from the start until it finds `value` or runs out. When most values are new, `result` grows toward n items and every pass walks it: a loop inside a loop, hidden in a method call. That's roughly n × n / 2 comparisons.\n\nA `Set` answers \"have I seen this?\" without walking anything. `seen.has(value)` and `seen.add(value)` take about the same work however many values are stored (Unit 4 shows why).\n\nRewrite `dedupe(list)` so it makes one pass. It must still keep the **first** copy of each value, in the original order, and treat values the way `includes` does: `NaN` matches `NaN`, and `0` matches `-0`. A `Set` compares values exactly that way.\n\nThe checks run a doubling test on your function: they count the passes of your loops and the elements that built-in methods like `includes` may scan, at four input sizes. Put braces around every loop body so the count can see inside it.",
        steps: [
          { text: "`dedupe` returns the first copy of each value, in order, comparing values the way `includes` does.",
            test: R`
T.eq(dedupe([3, 1, 3, 2, 1]), [3, 1, 2], 'First copies, in their original order');
T.eq(dedupe([]), [], 'An empty list stays empty');
T.eq(dedupe(['b', 'a', 'b', 'c']), ['b', 'a', 'c'], 'Strings work the same way');
T.eq(dedupe(['1', 1, '1']), ['1', 1], 'The string 1 and the number 1 are different values');
var r = dedupe([NaN, 0, NaN, -0, 5]);
T.eq(r.length, 3, 'NaN matches NaN and 0 matches -0, as they do for includes');
T.expect(Number.isNaN(r[0]) && r[1] === 0 && r[2] === 5, 'Expected the first NaN, then 0, then 5');
var a = {}, b = {};
T.eq(dedupe([a, b, a]).length, 2, 'Objects are the same value only when they are the same object');
` },
          { text: "`dedupe` returns a new array and leaves the one it was given alone.",
            test: R`
var input = [4, 4, 2];
var copy = input.slice();
var out = dedupe(input);
T.eq(input, copy, 'dedupe must not change the array it was given');
T.expect(out !== input, 'Return a new array, not the input itself');
` },
          { text: "Doubling the input about doubles the work (linear), instead of quadrupling it.",
            test: R`
var g = T.growth(function (n) {
  return Array.from({ length: n }, function (_, i) { return i; });
}, function (list) {
  dedupe(list);
});
T.eq(g.band, 'linear', 'Operation counts at n = 250, 500, 1000 and 2000 were ' + g.counts.join(', ') + ' (ratios ' + g.ratios.join(', ') + ')');
` }
        ],
        files: [{ name: "script.js", content: DEDUPE_STARTER }],
        solution: { "script.js": DEDUPE_SOLUTION },
        hints: [
          "`result.includes(value)` is the hidden loop: it walks `result` on every pass. Replace that check, not the outer loop.",
          "Keep `result` for the order, and add `const seen = new Set();` to remember what you've already kept.",
          "Inside the loop: `if (!seen.has(value)) { seen.add(value); result.push(value); }`"
        ]
      },

      {
        id: "algo-quiz-1",
        title: "Unit 1 quiz: What \"slow\" means",
        kind: "quiz", xp: 10,
        brief: "Step counts, loops that add or multiply, the doubling test and hidden loops. 80% to pass.",
        questions: [
          { q: "Why do step counts describe code better than timings do?",
            choices: ["A step count is the same on every machine and every run, and changes only with the input", "Step counts are smaller numbers than milliseconds, so they are easier to compare side by side at a glance", "Timing JavaScript isn't possible in a browser without installing extra developer tools first", "Step counts also include the time a function spends waiting on the network or the disk"],
            answer: 0, explain: "A timing mixes the code with the machine, the other work running and the input you tried. The step count depends only on the code and the input, so it shows how the work grows." },
          { q: "How many times does `steps++` run?",
            code: "for (let i = 0; i < 6; i++) {\n  for (let j = 0; j < 4; j++) {\n    steps++;\n  }\n}",
            choices: ["10", "24", "36", "6"],
            answer: 1, explain: "Nested loops multiply: the inner loop's 4 passes run once for each of the outer loop's 6 passes, so 6 × 4 = 24. Adding them (10) is the rule for loops in sequence." },
          { q: "A function's step count goes from 2,000 at n = 500 to 8,000 at n = 1,000. How does it grow?",
            choices: ["Linearly, because the count went up by 6,000", "Quadratically, because doubling n gave ×4", "Constantly, because both counts are in the thousands", "Cubically, because the count grew by more than ×2"],
            answer: 1, explain: "The doubling test reads the ratio: 8,000 ÷ 2,000 = 4 when n doubled, which is n² growth. The size of the jump in absolute terms doesn't tell you the shape; ×8 would be cubic." },
          { q: "Why is `result.includes(value)` inside a loop over `list` a hidden loop?",
            choices: ["`includes` walks `result` from the start on every pass, so the passes multiply", "`includes` sorts `result` first, which takes n log n work every single time it's called", "`includes` copies `result` into a new array before it searches through the copy", "It isn't hidden: `includes` looks a value up directly, whatever the array's size"],
            answer: 0, explain: "`includes` checks elements one by one until it finds a match or reaches the end. Inside a loop over n items, with `result` growing toward n, that's a loop inside a loop: about n × n / 2 comparisons." },
          { q: "Two loops over the same n items run one after the other. How many steps do they take together?",
            choices: ["n × n", "n + n, which is 2n", "n, since the second loop reuses the first", "log n"],
            answer: 1, explain: "Loops in sequence add: n passes, then n more. Multiplying is the rule for a loop inside a loop." },
          { q: "In the doubling test, why do a 3n-step function and a 300n-step function both show about ×2?",
            choices: ["The ratio cancels the constant: 3 × 2n ÷ 3n and 300 × 2n ÷ 300n are both 2", "They don't: the 300n function shows ×200, since its constant is so much bigger", "Both are rounded to the nearest power of two before the test compares them", "The test only works on functions whose constant is below 10"],
            answer: 0, explain: "Dividing the count at 2n by the count at n cancels any constant multiplier. That's why the ratio shows the shape of the growth and not the size of the constant." }
        ]
      }
    ]
  });
})();
