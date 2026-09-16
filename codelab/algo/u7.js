/* How Code Scales — Unit 7: Stacks, queues, trees and graphs */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var LAB_GRID = ["....", ".##.", "....", ".#..", "...."];

  var LINKS = R`
const links = {
  a: ["b", "c"],
  b: ["d"],
  c: ["d", "e"],
  d: [],
  e: []
};`;

  var BRACKETS_STARTER = R`
// true when every (, [ and { is closed by the matching bracket, in the right
// order. Every other character is ignored.
function balanced(text) {
  let s = text.replace(/[^()[\]{}]/g, "");
  let before;
  do {
    before = s;
    s = s.replaceAll("()", "").replaceAll("[]", "").replaceAll("{}", "");
  } while (s !== before);
  return s === "";
}

// First in, first out. size is the number of items waiting.
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  get size() {
    return this.items.length;
  }
}

console.log(balanced("fn(a[0], { b: 1 })"), balanced("([)]"));
`;

  var BRACKETS_SOLUTION = R`
// true when every (, [ and { is closed by the matching bracket, in the right
// order. Every other character is ignored.
function balanced(text) {
  const opener = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (const ch of text) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      if (stack.pop() !== opener[ch]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// First in, first out. size is the number of items waiting.
class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.head === this.items.length) {
      return undefined;
    }
    const item = this.items[this.head];
    this.items[this.head] = undefined;
    this.head++;
    if (this.head === this.items.length) {
      this.items = [];
      this.head = 0;
    }
    return item;
  }
  get size() {
    return this.items.length - this.head;
  }
}

console.log(balanced("fn(a[0], { b: 1 })"), balanced("([)]"));
`;

  var GRID_STARTER = R`
const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

// The fewest steps from start to goal, moving up, down, left or right through
// open cells ("." ). Walls are "#". -1 when goal can't be reached.
function shortestSteps(grid, start, goal) {
  const rows = grid.length;
  const cols = grid[0].length;
  const seen = new Set();
  function explore(r, c, steps) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "#") {
      return -1;
    }
    const key = r + "," + c;
    if (seen.has(key)) {
      return -1;
    }
    seen.add(key);
    if (r === goal[0] && c === goal[1]) {
      return steps;
    }
    for (const [dr, dc] of DIRS) {
      const found = explore(r + dr, c + dc, steps + 1);
      if (found !== -1) {
        return found;
      }
    }
    return -1;
  }
  return explore(start[0], start[1], 0);
}

console.log(shortestSteps(["...", "...", "..."], [0, 0], [1, 0]));
`;

  var GRID_SOLUTION = R`
const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

// The fewest steps from start to goal, moving up, down, left or right through
// open cells ("." ). Walls are "#". -1 when goal can't be reached.
function shortestSteps(grid, start, goal) {
  const rows = grid.length;
  const cols = grid[0].length;
  const open = (r, c) => r >= 0 && c >= 0 && r < rows && c < cols && grid[r][c] !== "#";
  if (!open(start[0], start[1]) || !open(goal[0], goal[1])) {
    return -1;
  }
  const seen = new Set([start[0] + "," + start[1]]);
  const queue = [[start[0], start[1], 0]];
  for (let head = 0; head < queue.length; head++) {
    const [r, c, steps] = queue[head];
    if (r === goal[0] && c === goal[1]) {
      return steps;
    }
    for (const [dr, dc] of DIRS) {
      const nr = r + dr;
      const nc = c + dc;
      const key = nr + "," + nc;
      if (open(nr, nc) && !seen.has(key)) {
        seen.add(key);
        queue.push([nr, nc, steps + 1]);
      }
    }
  }
  return -1;
}

console.log(shortestSteps(["...", "...", "..."], [0, 0], [1, 0]));
`;

  function band(label, make, work, allowed) {
    return "var g = T.growth(" + make + ", " + work + ");\n" +
      "T.expect(" + JSON.stringify(allowed) + ".indexOf(g.band) !== -1, '" + label + ": the work should grow no faster than n, but operation counts at n = 250, 500, 1000 and 2000 were ' + g.counts.join(', ') + ' (ratios ' + g.ratios.join(', ') + ')');";
  }

  window.CODELAB.addUnit("algo", {
    id: "algo-u7",
    title: "Stacks, queues, trees and graphs",
    icon: "🌳",
    blurb: "Choose a structure by the order you need things back, then explore trees and graphs two ways: breadth-first for the fewest steps, depth-first to dive in. Brackets, a proper queue and a shortest path to build.",
    cheat: [
      { h: "Stack or queue", lang: "js", code: R`
stack.push(x); stack.pop();        // newest first (LIFO): undo, back button, brackets
queue.enqueue(x); queue.dequeue(); // oldest first (FIFO): jobs, messages, BFS`,
        note: "Choose by the order you need items back. Arrays are stacks already; a queue needs a head index (or a class) so leaving from the front stays O(1)." },
      { h: "BFS: a queue", lang: "js", code: R`
const seen = new Set([start]);
const queue = [start];
for (let head = 0; head < queue.length; head++) {
  const node = queue[head];
  for (const next of neighbours(node)) {
    if (!seen.has(next)) { seen.add(next); queue.push(next); }
  }
}`,
        note: "Visits nodes in order of distance, so the first time it reaches one, it got there by a fewest-steps path. O(nodes + connections)." },
      { h: "DFS: a stack", lang: "js", code: R`
const stack = [start];
while (stack.length > 0) {
  const node = stack.pop();
  if (seen.has(node)) { continue; }
  seen.add(node);
  for (const next of neighbours(node)) { stack.push(next); }
}`,
        note: "Dives down one route before backing up. Also O(nodes + connections), but its first path to a node can be long." }
    ],
    lessons: [

      {
        id: "algo-u7-1",
        title: "Stacks and queues: choose by the order you need",
        kind: "concept", xp: 15, mins: 14,
        screens: [
          { ask: { type: "predict",
              q: "What does this print?",
              code: R`
const stack = [];
stack.push("a");
stack.push("b");
stack.push("c");
stack.pop();
stack.push("d");
console.log(stack.pop(), stack.pop());`,
              answer: "d b",
              accept: ["d, b", "d,b"],
              why: "pop takes the newest item: c is removed, then d goes on top. The next two pops give d, then b.",
              run: true } },

          { read: "A **stack** gives things back newest first: last in, first out. Push onto the top, pop off the top. An array's `push` and `pop` are exactly that, and both are O(1).\n\nA **queue** gives things back oldest first: first in, first out. Items join at the back and leave from the front. Unit 3 showed why `shift` is a slow way to leave from the front; a head index keeps both ends O(1).\n\nChoose by the order you need things back in.",
            ask: { type: "pick",
              q: "A browser's Back button returns to the page you visited most recently. Which structure fits?",
              choices: ["A stack: the newest page comes back first", "A queue: the oldest page comes back first", "A Set, so no page can repeat", "A sorted array, with pages in alphabetical order"],
              answer: 0,
              why: [
                "Each new page is pushed; Back pops the most recent one.",
                "A queue would take you back to the first page you opened, not the last one.",
                "You can visit the same page twice, and a Set has no order for Back to follow.",
                "Back follows the order you visited pages, not their names."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A print server must handle jobs in the order they arrived. Which structure fits?",
              choices: ["A stack, so the job sent most recently always prints first", "A queue, so the job that has waited longest prints first", "A Map from each job's name to the job, so any job can be found", "A stack, since push and pop are both O(1) however many jobs wait"],
              answer: 1,
              why: [
                "The newest job would jump ahead of everyone who was waiting.",
                "First in, first out is exactly \"in the order they arrived\".",
                "A Map finds a job by name, but it doesn't say which job is next.",
                "Speed matters less than order here, and a queue with a head index is O(1) too."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "An editor's Undo must reverse the most recent change first. Which structure fits?",
              choices: ["A queue of changes, so undo removes the oldest change first", "A stack of changes, so undo pops the newest one", "A Set of changes, so none is undone twice", "An object keyed by the time of each change"],
              answer: 1,
              why: [
                "Undoing the oldest change first would reverse your edits in the wrong order.",
                "Each change is pushed as you make it, and Undo pops the latest.",
                "A Set has no notion of which change is newest.",
                "You'd have to search the keys for the latest time on every undo. A stack keeps it on top."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "`q` is a queue. After `q.enqueue(1)`, `q.enqueue(2)`, `q.dequeue()` and `q.enqueue(3)`, what does the next `q.dequeue()` return?",
              answer: "2",
              why: "1 left first. 2 is now the oldest item waiting, ahead of 3.",
              run: true,
              check: "const q = [];\nq.push(1); q.push(2); q.shift(); q.push(3);\nconsole.log(q.shift());" } },

          { ask: { type: "explain",
              q: "How do you decide between a stack and a queue?",
              model: "By the order you need items back. If the most recent item should come back first, like undo or the back button, use a stack. If the oldest should come first, like jobs or messages in arrival order, use a queue.",
              rubric: ["Says the choice depends on the order items come back", "A stack gives back the newest first, with an example", "A queue gives back the oldest first, with an example"] } }
        ]
      },

      {
        id: "algo-u7-2",
        title: "Brackets, and a queue that doesn't shift",
        kind: "js", chip: "JS", xp: 15, mins: 16, count: true,
        brief: "Two structures to build properly.\n\n**`balanced(text)`** checks that every `(`, `[` and `{` is closed by the matching bracket in the right order; other characters don't matter. The first draft keeps deleting `()`, `[]` and `{}` pairs until nothing changes. That's correct, but on deeply nested text like `((((…))))` each pass removes one pair and rewrites the whole string: O(n²). A **stack** does it in one pass: push each opening bracket, and on a closing bracket pop and check that the popped one matches. The text is balanced when nothing is left over.\n\n**`Queue`** hands items back oldest first. The first draft's `dequeue` calls `shift`, which moves every waiting item. Keep a `head` index to the front item instead: `dequeue` reads `items[head]` and moves `head` forward. `dequeue` on an empty queue returns `undefined`, and `size` counts only the items still waiting.\n\nThe checks count loop passes and the elements methods like `replaceAll` and `shift` touch. Put braces around every loop body.",
        steps: [
          { text: "`balanced` gets every case right.",
            test: R`
var cases = [['', true], ['()', true], ['([]{})', true], ['fn(a[0], { b: 1 })', true], ['([)]', false], ['((', false], ['))', false], [')(', false], ['{[}', false], ['no brackets at all', true]];
cases.forEach(function (c) {
  T.eq(balanced(c[0]), c[1], 'balanced(' + JSON.stringify(c[0]) + ')');
});
` },
          { text: "`balanced` is linear, even on deeply nested text.",
            test: band("balanced", "function (n) { return '('.repeat(n / 2) + ')'.repeat(n / 2); }", "function (text) { balanced(text); }", ["linear"]) },
          { text: "`Queue` hands items back oldest first, and `size` is right.",
            test: R`
var q = new Queue();
T.eq(q.size, 0, 'A new queue is empty');
T.eq(q.dequeue(), undefined, 'Dequeuing an empty queue gives undefined');
q.enqueue('a');
q.enqueue('b');
T.eq(q.dequeue(), 'a', 'Oldest first');
q.enqueue('c');
T.eq([q.size, q.dequeue(), q.dequeue(), q.size, q.dequeue()], [2, 'b', 'c', 0, undefined], 'b, then c, then empty');
var ref = [], refHead = 0, bad = null, next = 0;
for (var i = 0; i < 10000; i++) {
  if (i % 3 === 2) {
    var got = q.dequeue();
    var want = refHead < ref.length ? ref[refHead++] : undefined;
    if (got !== want && bad === null) { bad = [i, want, got]; }
  } else {
    q.enqueue(next); ref.push(next); next++;
  }
}
T.eq(bad, null, 'Across 10,000 mixed operations every dequeue returns the oldest item. First mismatch as [operation, expected, got]');
T.eq(q.size, ref.length - refHead, 'size is the number of items still waiting');
` },
          { text: "Draining a `Queue` of n items costs about n in total, not n².",
            test: band("Queue", "function (n) { return n; }", "function (n) { var q = new Queue(); for (var i = 0; i < n; i++) { q.enqueue(i); } while (q.size > 0) { q.dequeue(); } }", ["sublinear", "linear"]) }
        ],
        files: [{ name: "script.js", content: BRACKETS_STARTER }],
        solution: { "script.js": BRACKETS_SOLUTION },
        hints: [
          "balanced: `const stack = [];` then loop over each character. Push opening brackets. For a closing bracket, `stack.pop()` must be its matching opener, or return false.",
          "Return `stack.length === 0` at the end: anything left over was never closed.",
          "Queue: add `this.head = 0;` in the constructor. dequeue returns undefined when `head === items.length`, otherwise reads `items[head]` and does `head++`. size is `items.length - head`."
        ]
      },

      {
        id: "algo-u7-3",
        title: "Trees and graphs: BFS vs DFS",
        kind: "concept", xp: 15, mins: 17,
        screens: [
          { read: "A **graph** is things connected to other things: pages linking to pages, friends of friends, squares on a map next to other squares. A **tree** is a graph with no loops, like the DOM or folders on a disk.\n\nTo explore one, keep a list of places discovered but not yet visited, and a rule for which to visit next:\n\n- take the **oldest** next (a queue): **breadth-first search**, BFS\n- take the **newest** next (a stack): **depth-first search**, DFS",
            ask: { type: "lab", lab: "grid", params: { grid: LAB_GRID, start: [0, 0], goal: [4, 0] },
              predict: { type: "pick",
                q: "Both searches start in the top-left corner and try neighbours right, down, left, up. Which one reaches the bottom-left corner by a shortest path?",
                choices: ["BFS, because it visits cells in order of distance from the start", "DFS, because it heads straight for the far side of the grid before anything else", "Both, since every path through the same grid has to be the same length", "Neither: a shortest path always needs a different, weighted algorithm"],
                answer: 0,
                why: [
                  "Everything 1 step away is visited before anything 2 steps away, so the first arrival is by a fewest-steps route.",
                  "DFS commits to one direction first. Here it goes right, all the way round, and arrives by a 10-step path.",
                  "Paths differ a lot: in this grid BFS finds 4 steps and DFS finds 10.",
                  "When every step costs the same, BFS already finds a shortest path."
                ],
                run: true,
                check: "const G = " + JSON.stringify(LAB_GRID) + ";\nconst DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];\nfunction bfs() {\n  const q = [[0, 0, 0]]; const seen = new Set(['0,0']);\n  for (let h = 0; h < q.length; h++) {\n    const [r, c, d] = q[h];\n    if (r === 4 && c === 0) { return d; }\n    for (const [dr, dc] of DIRS) {\n      const nr = r + dr, nc = c + dc, k = nr + ',' + nc;\n      if (nr >= 0 && nc >= 0 && nr < 5 && nc < 4 && G[nr][nc] !== '#' && !seen.has(k)) { seen.add(k); q.push([nr, nc, d + 1]); }\n    }\n  }\n  return -1;\n}\nconst seen = new Set();\nfunction dfs(r, c, d) {\n  if (r < 0 || c < 0 || r >= 5 || c >= 4 || G[r][c] === '#' || seen.has(r + ',' + c)) { return -1; }\n  seen.add(r + ',' + c);\n  if (r === 4 && c === 0) { return d; }\n  for (const [dr, dc] of DIRS) { const f = dfs(r + dr, c + dc, d + 1); if (f !== -1) { return f; } }\n  return -1;\n}\nconst b = bfs(), d = dfs(0, 0, 0);\nconsole.log(b === 4 && d > b ? 0 : -1);" } } },

          { read: "BFS visits cells in rings: everything 1 step from the start, then everything 2 steps away, and so on. So the first time it reaches a cell, it got there by a fewest-steps path. (That's why the Database course suggests BFS for a shortest path.) DFS follows one route as far as it can before backing up, so the first path it finds can be long.\n\nBoth visit each cell at most once: **O(nodes + connections)**. The difference is the order.",
            ask: { type: "trace",
              q: "BFS on this graph from `a`, with each node's neighbours taken in the order listed. For each visit, fill in the queue afterwards, oldest first, separated by spaces (type `-` when it's empty).",
              code: LINKS,
              columns: ["visit", "queue after"],
              given: 1,
              rows: [["a", "b c"], ["b", "c d"], ["c", "d e"], ["d", "e"], ["e", "-"]],
              why: "Visiting a queues b and c. b adds d. c finds d already queued and adds only e. Then d and e are visited in turn and the queue empties.",
              run: true,
              check: LINKS + "\nconst rows = [];\nconst queue = ['a'];\nconst seen = new Set(['a']);\nwhile (queue.length > 0) {\n  const node = queue.shift();\n  for (const next of links[node]) {\n    if (!seen.has(next)) { seen.add(next); queue.push(next); }\n  }\n  rows.push([node, queue.length ? queue.join(' ') : '-']);\n}\nconsole.log(JSON.stringify(rows));" } },

          { ask: { type: "predict", transfer: true,
              q: "Now DFS on the same graph: take the newest node from a stack, and push each node's neighbours in reverse so `b` is tried before `c`. In what order are the nodes visited? Type them separated by spaces.",
              code: LINKS,
              answer: "a b d c e",
              why: "From a, b is on top, so DFS goes to b and straight on to d before backing up to c, then e.",
              run: true,
              check: LINKS + "\nconst order = [];\nconst stack = ['a'];\nconst seen = new Set();\nwhile (stack.length > 0) {\n  const node = stack.pop();\n  if (seen.has(node)) { continue; }\n  seen.add(node);\n  order.push(node);\n  const next = links[node].slice().reverse();\n  for (const n of next) { if (!seen.has(n)) { stack.push(n); } }\n}\nconsole.log(order.join(' '));" } },

          { ask: { type: "pick", transfer: true,
              q: "In a social network, you want everyone within 2 introductions of a person. Which search fits best?",
              choices: ["DFS, since it goes deep and so reaches everyone faster", "BFS, which reaches people in order of distance and can stop after 2", "Either one, since both of them visit the same people in exactly the same order", "Neither, since this needs a sorted list of every person"],
              answer: 1,
              why: [
                "Going deep is the problem: DFS can wander far past 2 introductions before it comes back to close friends.",
                "Ring 1 is direct friends, ring 2 their friends. BFS finishes those rings first and never needs to look further.",
                "They visit the same people eventually, in very different orders, and only BFS respects distance.",
                "Sorting people doesn't tell you who's connected to whom. The connections are the graph."
              ] } },

          { ask: { type: "explain",
              q: "Why does BFS find a shortest path on a grid, when DFS might not?",
              model: "BFS visits cells in order of distance from the start, ring by ring, so the first time it reaches a cell it has used the fewest possible steps. DFS follows one route as deep as it can before trying others, so the first path it finds can be much longer.",
              rubric: ["Says BFS visits cells in order of distance, ring by ring", "Says BFS's first arrival at a cell is by a fewest-steps path", "Says DFS follows one route deep first, so its first path can be longer"] } }
        ]
      },

      {
        id: "algo-u7-4",
        title: "Shortest path on a grid",
        kind: "js", chip: "JS", xp: 15, mins: 16, count: true,
        brief: "`shortestSteps(grid, start, goal)` should return the fewest steps from `start` to `goal`, moving up, down, left or right through open cells. `grid` is an array of strings where `.` is open and `#` is a wall; `start` and `goal` are `[row, col]`. When `goal` can't be reached, or either end is a wall, it returns -1.\n\nThe first draft uses depth-first search. It finds *a* path, but on an open grid it can wander all the way round before reaching a cell right next to the start.\n\nRewrite it as **breadth-first search**:\n\n- a queue of `[row, col, steps]`, starting with `[start[0], start[1], 0]`, read with a head index\n- a `Set` of cells already queued, keyed `row + \",\" + col`, so nothing is queued twice\n- for each cell, return its steps if it's the goal, otherwise queue its open, unseen neighbours with `steps + 1`\n\nThe checks also count the work as the grid grows: BFS should be linear in the number of cells. Put braces around every loop body.",
        steps: [
          { text: "Open grids: the fewest steps, including a goal right next to the start.",
            test: R`
T.eq(shortestSteps(['...', '...', '...'], [0, 0], [1, 0]), 1, 'The cell below the start is 1 step away');
T.eq(shortestSteps(['....', '....', '....'], [0, 0], [2, 3]), 5, 'Opposite corners of a 3 × 4 grid');
T.eq(shortestSteps(['.'], [0, 0], [0, 0]), 0, 'Start and goal are the same cell');
` },
          { text: "Walls, and goals that can't be reached.",
            test: R`
T.eq(shortestSteps(['.#.', '.#.', '...'], [0, 0], [0, 2]), 6, 'Around the wall');
T.eq(shortestSteps(['.#.', '.#.', '.#.'], [0, 0], [0, 2]), -1, 'A wall that cuts the grid in two');
T.eq(shortestSteps(['..#', '...'], [0, 0], [0, 2]), -1, 'The goal is a wall');
T.eq(shortestSteps(['....', '.##.', '....', '.#..', '....'], [0, 0], [4, 0]), 4, 'The lab grid: straight down the left side');
` },
          { text: "The work grows linearly with the number of cells.",
            test: band("shortestSteps", "function (n) { var cols = n / 10; var rows = []; for (var i = 0; i < 10; i++) { rows.push('.'.repeat(cols)); } return { grid: rows, goal: [9, cols - 1] }; }", "function (d) { shortestSteps(d.grid, [0, 0], d.goal); }", ["linear"]) }
        ],
        files: [{ name: "script.js", content: GRID_STARTER }],
        solution: { "script.js": GRID_SOLUTION },
        hints: [
          "Start with `const queue = [[start[0], start[1], 0]];` and `const seen = new Set([start[0] + \",\" + start[1]]);`.",
          "Loop `for (let head = 0; head < queue.length; head++)`, take `const [r, c, steps] = queue[head];`, and return `steps` when that cell is the goal.",
          "For each direction in DIRS, work out the neighbour; if it's inside the grid, not a wall and not in `seen`, add it to `seen` and push `[nr, nc, steps + 1]`. Check both ends are open before starting."
        ]
      },

      {
        id: "algo-quiz-7",
        title: "Unit 7 quiz: Structures",
        kind: "quiz", xp: 10,
        brief: "Stacks, queues, BFS and DFS. 80% to pass.",
        questions: [
          { q: "Which structure gives items back oldest first?",
            choices: ["A stack", "A queue", "A Set", "A Map"],
            answer: 1, explain: "A queue is first in, first out. A stack is last in, first out, and Sets and Maps have no \"next item\" order to follow." },
          { q: "Checking that brackets are balanced uses which structure, and why?",
            choices: ["A queue, because the brackets are read in order from left to right across the text", "A Set, because each kind of bracket only needs to be recorded a single time", "A sorted array of every bracket's position, so each pair can be matched up afterwards", "A stack, because the most recently opened bracket must be closed first"],
            answer: 3, explain: "`([)]` fails because `[` was opened last but `)` tries to close first. Checking against the top of a stack catches exactly that." },
          { q: "Why does BFS find the fewest-steps path when every step costs the same?",
            choices: ["It tries every possible path through the grid, then keeps whichever one turned out shortest", "It visits nodes in order of distance, so it reaches each first by a shortest route", "It always heads in the direction of the goal, so it never wanders off the best route", "It sorts each node's neighbours by distance to the goal before it visits any of them"],
            answer: 1, explain: "BFS finishes everything 1 step away before anything 2 steps away. It never compares whole paths; the order does the work." },
          { q: "What do BFS and DFS each use to decide what to visit next?",
            choices: ["BFS uses a stack, DFS uses a queue", "BFS uses a queue, DFS uses a stack", "Both use a queue", "Both use a Set"],
            answer: 1, explain: "Oldest discovered first (a queue) gives the ring-by-ring order of BFS; newest first (a stack) gives the dive-deep order of DFS. Both also use a Set to skip nodes already seen." },
          { q: "What's the cost of BFS over a grid of n cells?",
            choices: ["O(n²), because each cell has to be checked against every other cell in the grid", "O(n), because each cell is queued once and has at most 4 neighbours", "O(log n), because every ring of the search cuts the remaining grid in half", "O(1), because the goal cell is fixed before the search even starts"],
            answer: 1, explain: "The seen Set stops any cell being queued twice, and each cell looks at 4 neighbours: about 4n checks, which is O(n)." },
          { q: "Why does a queue built on `shift()` make BFS slow on a big graph?",
            choices: ["`shift` returns items in the wrong order, so cells get visited out of turn", "`shift` moves every waiting item, so each dequeue costs O(n)", "`shift` can't handle arrays like [row, col], so each one has to be copied first", "It doesn't: `shift` is always O(1), because it only touches the front item"],
            answer: 1, explain: "By the spec, shift moves every remaining element down one slot. A head index reads the front without moving anything." }
        ]
      }
    ]
  });
})();
