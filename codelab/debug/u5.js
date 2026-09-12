/* Debugging & Diagnosis — Unit 5: Breakpoints and the paused program */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var HONEST = "\n\n*A note on this unit: the CodeLab sandbox has no debugger to pause. Each lesson hands you a snapshot of exactly what DevTools shows at a breakpoint and grades the reasoning — which is the hard part, and the part that transfers. The try-it-for-real steps are in each brief.*";

  var PAUSED_SRC = L(
    "// DevTools, \"Pause on uncaught exceptions\" ticked: the moment",
    "// applyCoupon threw, everything froze. This is what the panels showed.",
    "const PAUSED = {",
    "  error: \"TypeError: Cannot read properties of undefined (reading 'percent')\",",
    "  file: \"cart.js\", line: 42, fn: \"applyCoupon\",",
    "  scope: {",
    "    local: { cart: { total: 80, code: \"SAVE20\" }, coupon: undefined, rate: 0.2, note: null }",
    "  }",
    "};");

  var SCOPE_SRC = L(
    "// Paused on line 18 of cart.js, inside total(). The Scope panel:",
    "const PAUSE = {",
    "  file: \"cart.js\", line: 18, fn: \"total\",",
    "  scope: {",
    "    local:   { items: [{ id: 7, price: 12 }], i: 0, sum: 0, coupon: undefined },",
    "    closure: [                                  // nearest first",
    "      { name: \"makeCart\", vars: { items: [], rate: 0.2 } },",
    "      { name: \"module\",   vars: { TAX: 0.08, rate: 0.5 } }",
    "    ],",
    "    global:  { VERSION: \"2.3.0\" },",
    "    this:    { owner: \"ada\" }",
    "  }",
    "};");

  var STACK_SRC = L(
    "// Paused inside applyCoupon. The Call Stack panel, newest frame first,",
    "// with the arguments each frame was called with:",
    "const PAUSE = {",
    "  callStack: [",
    "    { fn: \"applyCoupon\", file: \"cart.js\",     line: 42, args: [{ total: 80 }, 20] },",
    "    { fn: \"priceCart\",   file: \"cart.js\",     line: 18, args: [{ total: 80 }, 20] },",
    "    { fn: \"checkout\",    file: \"checkout.js\", line: 7,  args: [{ total: 80 }, \"SAVE20\"] },",
    "    { fn: \"onClick\",     file: \"ui.js\",       line: 31, args: [{ type: \"click\" }] }",
    "  ]",
    "};");

  var PROGRAM_SRC = L(
    "// The program you're stepping through. Line numbers are the file's.",
    "//",
    "//  10  function checkout(cart) {",
    "//  11    const code = cart.code;",
    "//  12    const total = priceCart(cart, code);",
    "//  13    saveOrder(cart, total);        // saveOrder is a library call",
    "//  14    return total;",
    "//  15  }",
    "//",
    "//  20  function priceCart(cart, code) {",
    "//  21    const rate = lookupRate(code);   // lookupRate is a library call",
    "//  22    const price = applyCoupon(cart.total, rate);",
    "//  23    return price;",
    "//  24  }",
    "//",
    "//  30  function applyCoupon(total, rate) {",
    "//  31    const off = total * rate;",
    "//  32    const price = total - off;",
    "//  33    return price;",
    "//  34  }",
    "//",
    "// The same program as data: each function's first and last line of",
    "// body, and which lines call something.",
    "const PROGRAM = {",
    "  functions: {",
    "    checkout:    { body: 11, end: 14 },",
    "    priceCart:   { body: 21, end: 23 },",
    "    applyCoupon: { body: 31, end: 33 }",
    "  },",
    "  calls: { 12: \"priceCart\", 13: \"saveOrder\", 21: \"lookupRate\", 22: \"applyCoupon\" }",
    "};",
    "",
    "// Paused on line 12, inside checkout, which was called from ui.js line 5.",
    "const PAUSE = {",
    "  line: 12,",
    "  callStack: [{ fn: \"checkout\", line: 12 }, { fn: \"onClick\", line: 5 }]",
    "};");

  window.CODELAB.addUnit("debug", {
    id: "debug-u5",
    title: "Breakpoints and the paused program",
    icon: "⏸️",
    blurb: "What a breakpoint is FOR: reading scope at a moment, reading the call stack, predicting where each step lands, and writing the condition that stops on iteration 137 instead of clicking Resume 137 times.",
    cheat: [
      { h: "Ways to pause", lang: "js", code: L(
        "debugger;          // pauses here — but only while DevTools is open",
        "// Sources panel: click a line number → breakpoint",
        "// Right-click it → \"Add conditional breakpoint…\" → i === 137",
        "// Tick \"Pause on exceptions\" → pause exactly where it throws"),
        note: "`debugger` does nothing without DevTools attached — which is why it's harmless in this sandbox, and why you should never ship one." },
      { h: "Reading a paused frame", lang: "text", code: L(
        "Scope",
        "  Local       items, i, sum        ← checked first",
        "  Closure     rate, TAX            ← then each enclosing function, nearest first",
        "  Global      VERSION              ← last",
        "  this        { owner: \"ada\" }"),
        note: "A name resolves to the FIRST scope that has it — an inner `items` hides an outer one." },
      { h: "The call stack", lang: "text", code: L(
        "applyCoupon  cart.js:42      ← you are here",
        "priceCart    cart.js:18      ← called you",
        "checkout     checkout.js:7   ← called that"),
        note: "Click any frame to see ITS scope as it was when it made the call." },
      { h: "Stepping", lang: "text", code: L(
        "Step over  (F10)  run this line; stop on the next one here",
        "Step into  (F11)  if this line calls YOUR function, stop inside it",
        "Step out   (⇧F11) finish this function; stop back in the caller",
        "Resume     (F8)   run until the next breakpoint"),
        note: "Stepping into a library call you have no source for behaves like stepping over." },
      { h: "Conditional breakpoints", lang: "js", code: L(
        "// not: i === 137   (true for today's data only)",
        "// but the bug's signature:",
        "Number.isNaN(total + row.price * row.qty) && !Number.isNaN(total)"),
        note: "Describe what the bad moment LOOKS like, and the breakpoint finds it on any data." }
    ],
    lessons: [

      {
        id: "debug-u5-1",
        title: "When a log is not enough — and the debugger keyword",
        kind: "js", chip: "DEBUG", xp: 15, mins: 12,
        brief: "Logging works when you know what to ask. Sometimes you don't: the state is huge, or you have no idea which of twenty variables is wrong, or the failure happens on the 137th pass of a loop. For those, you **stop the program** and look at *everything* at once.\n\nThat is a breakpoint. Put a `debugger;` statement in your code (or click a line number in DevTools' Sources panel) and, while DevTools is open, execution freezes right there. Nothing runs. Every variable in scope sits in the **Scope** panel, and the chain of calls that got you there sits in **Call Stack**.\n\nThe most useful breakpoint of all needs no line number: tick **Pause on exceptions**, and the program freezes at the exact moment an error is thrown — with the offending values still in scope.\n\n`PAUSED` is that moment for a coupon bug. Write `where(pause)` — `\"applyCoupon (cart.js:42)\"` — and `suspects(pause)`, the names of local variables holding `null` or `undefined`, in order. Then `culprit(pause)`: the error message says *what kind* of empty value was read, and the scope tells you *which* variable held it — return the first local whose value matches.\n\n**Try it for real:** open DevTools on any page (F12), go to Sources, tick *Pause on uncaught exceptions*, then run `null.x` in the Console." + HONEST,
        steps: [
          { text: "`where(pause)` returns `\"applyCoupon (cart.js:42)\"`.",
            test: L(
              "T.eq(where(PAUSED), 'applyCoupon (cart.js:42)', 'function name, then file:line in parentheses');",
              "T.eq(where({ fn: 'render', file: 'ui.js', line: 9, scope: { local: {} } }), 'render (ui.js:9)', 'any pause, not just this one');") },
          { text: "`suspects(pause)` lists the locals that hold `null` or `undefined`, in order.",
            test: L(
              "T.eq(suspects(PAUSED), ['coupon', 'note'], 'coupon is undefined and note is null — both are suspects; cart and rate are not');",
              "T.eq(suspects({ scope: { local: { a: 0, b: '', c: false } } }), [], '0, \"\" and false are falsy but they are real values — only null and undefined are suspects');") },
          { text: "`culprit(pause)` matches the message to the scope: the first local holding the kind of empty value the error read.",
            test: L(
              "T.eq(culprit(PAUSED), 'coupon', 'the message says it read a property of undefined — note is null, so it is not the one');",
              "var P2 = {",
              "  error: \"TypeError: Cannot read properties of null (reading 'id')\",",
              "  fn: 'save', file: 'form.js', line: 12,",
              "  scope: { local: { draft: undefined, user: null, retries: 0 } }",
              "};",
              "T.eq(culprit(P2), 'user', 'this time the message says null — draft is undefined, so it is not the one');",
              "T.eq(culprit({ error: 'TypeError: x.map is not a function', scope: { local: { x: 5 } } }), null, 'a message that is not about reading from null/undefined has no culprit of this kind');") }
        ],
        files: [
          { name: "script.js", content: L(
            PAUSED_SRC,
            "",
            "// where(pause) → \"fn (file:line)\"",
            "function where(pause) {",
            "  return \"\";",
            "}",
            "",
            "// suspects(pause) → names of locals holding null or undefined, in order",
            "function suspects(pause) {",
            "  return [];",
            "}",
            "",
            "// culprit(pause) → the first local whose value is the kind the error",
            "// message read (\"of undefined\" / \"of null\"), or null",
            "function culprit(pause) {",
            "  return null;",
            "}",
            "",
            "console.log(where(PAUSED), suspects(PAUSED), culprit(PAUSED));",
            "") }
        ],
        hints: [
          "`where`: `` `${pause.fn} (${pause.file}:${pause.line})` ``.",
          "`suspects`: `Object.keys(pause.scope.local).filter(k => pause.scope.local[k] === null || pause.scope.local[k] === undefined)`.",
          "`culprit`: pull the kind out of the message with `/properties of (null|undefined)/`; if there's no match return `null`; otherwise find the first local whose value is `null` (for \"null\") or `undefined` (for \"undefined\")."
        ],
        solution: {
          "script.js": L(
            PAUSED_SRC,
            "",
            "function where(pause) {",
            "  return `${pause.fn} (${pause.file}:${pause.line})`;",
            "}",
            "",
            "function suspects(pause) {",
            "  const local = pause.scope.local;",
            "  return Object.keys(local).filter(k => local[k] === null || local[k] === undefined);",
            "}",
            "",
            "function culprit(pause) {",
            "  const m = /properties of (null|undefined)/.exec(pause.error);",
            "  if (!m) return null;",
            "  const want = m[1] === \"null\" ? null : undefined;",
            "  const local = pause.scope.local;",
            "  const hit = Object.keys(local).find(k => local[k] === want);",
            "  return hit === undefined ? null : hit;",
            "}",
            "",
            "console.log(where(PAUSED), suspects(PAUSED), culprit(PAUSED));",
            "")
        }
      },

      {
        id: "debug-u5-2",
        title: "Reading a paused frame: locals, closure, this",
        kind: "js", chip: "DEBUG", xp: 15, mins: 14,
        brief: "When the program is paused, the **Scope** panel shows every variable the current line could reach, grouped the way JavaScript actually looks them up:\n\n- **Local** — the current function's own variables and parameters. Checked first.\n- **Closure** — variables of each enclosing function, **nearest first**.\n- **Global** — checked last.\n- **this** — shown on its own line.\n\nA name resolves to the **first** scope that has it. That's why a local `items` hides — *shadows* — a closure's `items`, and why a debugger showing two different `rate`s isn't contradicting itself: only the nearest one is visible from the paused line. Misreading which one is live is one of the most common ways to stare at a paused frame and draw the wrong conclusion.\n\nWrite `lookup(pause, name)`: resolve a name exactly as the engine would at the paused line. `\"this\"` reads the frame's `this`. A variable that **exists but holds `undefined`** is found — return `undefined`. A name found **nowhere** is what the engine would throw on: throw a `ReferenceError` whose message is `<name> is not defined`, just like Unit 1's.\n\n**Try it for real:** put `debugger;` inside any function in a page's script, reload with DevTools open, and expand Scope." + HONEST,
        steps: [
          { text: "Locals first: `sum` is `0`, and the local `items` shadows the closure's.",
            test: L(
              "T.eq(lookup(PAUSE, 'sum'), 0, 'sum is a local');",
              "T.eq(lookup(PAUSE, 'items'), [{ id: 7, price: 12 }], 'both Local and the makeCart closure have items — the local one hides the other');") },
          { text: "Then closures, nearest first, then global — and `\"this\"`.",
            test: L(
              "T.eq(lookup(PAUSE, 'rate'), 0.2, 'makeCart (nearest) and module both define rate — the nearest wins');",
              "T.eq(lookup(PAUSE, 'TAX'), 0.08, 'only the module closure has TAX');",
              "T.eq(lookup(PAUSE, 'VERSION'), '2.3.0', 'VERSION is global');",
              "T.eq(lookup(PAUSE, 'this'), { owner: 'ada' }, 'this is its own entry in the Scope panel');") },
          { text: "A variable holding `undefined` is found; a name found nowhere throws `ReferenceError: <name> is not defined`.",
            test: L(
              "var threw = null, v = 'unset';",
              "try { v = lookup(PAUSE, 'coupon'); } catch (e) { threw = e; }",
              "T.expect(threw === null, 'coupon EXISTS (it holds undefined) — lookup threw ' + (threw && threw.name) + ' instead of returning undefined. Check whether the key is present, not whether its value is truthy.');",
              "T.expect(v === undefined, 'lookup(PAUSE, \"coupon\") should return undefined');",
              "var e2 = null;",
              "try { lookup(PAUSE, 'tax'); } catch (e) { e2 = e; }",
              "T.expect(e2 instanceof ReferenceError, 'tax is in no scope at all (TAX is, but names are case-sensitive) — throw a ReferenceError, as the engine would');",
              "T.eq(e2.message, 'tax is not defined', 'the engine\\'s own wording');",
              "var zero = { scope: { local: { n: 0 }, closure: [{ name: 'f', vars: { n: 99 } }], global: {} } };",
              "T.eq(lookup(zero, 'n'), 0, 'a local holding 0 is still the local — falsy is not missing');") }
        ],
        files: [
          { name: "script.js", content: L(
            SCOPE_SRC,
            "",
            "// lookup(pause, name): resolve a name the way the engine does —",
            "// local, then each closure (nearest first), then global.",
            "// \"this\" reads scope.this. Not found anywhere → throw",
            "// new ReferenceError(name + \" is not defined\").",
            "function lookup(pause, name) {",
            "  return pause.scope.local[name];",
            "}",
            "",
            "console.log(lookup(PAUSE, \"rate\"));",
            "") }
        ],
        hints: [
          "Presence, not truthiness: `name in scopeObject` is true for a key holding `undefined` or `0`, which `if (scope[name])` would miss.",
          "Walk the chain in order: `if (name === \"this\") return pause.scope.this;` then local, then `for (const c of pause.scope.closure)` checking `name in c.vars`, then global.",
          "After the last scope: `throw new ReferenceError(name + \" is not defined\");` Some pauses have no closures — `pause.scope.closure || []` keeps the loop safe."
        ],
        solution: {
          "script.js": L(
            SCOPE_SRC,
            "",
            "function lookup(pause, name) {",
            "  const s = pause.scope;",
            "  if (name === \"this\") return s.this;",
            "  if (name in s.local) return s.local[name];",
            "  for (const c of s.closure || []) {",
            "    if (name in c.vars) return c.vars[name];",
            "  }",
            "  if (s.global && name in s.global) return s.global[name];",
            "  throw new ReferenceError(name + \" is not defined\");",
            "}",
            "",
            "console.log(lookup(PAUSE, \"rate\"));",
            "")
        }
      },

      {
        id: "debug-u5-3",
        title: "The call stack: who called me, and with what",
        kind: "js", chip: "DEBUG", xp: 15, mins: 14,
        brief: "Unit 2 read the call stack *after* the crash, as text. Paused, it's live: DevTools' **Call Stack** panel lists every frame, newest first, and clicking one shows that frame's own variables *as they were when it made its call*. It's a stack trace you can walk around in.\n\nThe move it enables is the most valuable one in debugging: **following a bad value backwards**. `applyCoupon` received a `rate` of `20` where it expected `0.2`. Where did the 20 come from? Look one frame down: did `priceCart` *receive* 20 as an argument too? Then it only passed it along. Keep going. The first frame that did **not** receive the bad value — but passed it up — is where it was **made**. That's where the fix goes.\n\nWrite `whoCalled(pause)`, `argsAt(pause, depth)` (depth 0 is the top frame), `path(pause)` — the chain from the oldest frame to the newest, joined with `\" > \"` — and `madeBy(pause, value)`: the function that created a value and passed it up, or `null` if even the oldest frame received it.\n\n**Try it for real:** at any breakpoint, click the second row in the Call Stack panel and watch the Scope panel change to that frame." + HONEST,
        steps: [
          { text: "`whoCalled` and `argsAt`: the frame below the top, and any frame's arguments.",
            test: L(
              "T.eq(whoCalled(PAUSE), 'priceCart', 'applyCoupon (depth 0) was called by the frame below it');",
              "T.eq(argsAt(PAUSE, 0), [{ total: 80 }, 20], 'the top frame\\'s arguments');",
              "T.eq(argsAt(PAUSE, 2), [{ total: 80 }, 'SAVE20'], 'checkout, two frames down');",
              "T.eq(whoCalled({ callStack: [{ fn: 'main', args: [] }] }), null, 'a single frame has no caller');") },
          { text: "`path(pause)` tells the story oldest-first: `\"onClick > checkout > priceCart > applyCoupon\"`.",
            test: L(
              "T.eq(path(PAUSE), 'onClick > checkout > priceCart > applyCoupon', 'oldest frame first, joined with \" > \"');",
              "T.eq(PAUSE.callStack[0].fn, 'applyCoupon', 'path() must not reorder the real call stack — copy before reversing');") },
          { text: "`madeBy(pause, value)` follows a bad value down the stack to the frame that created it.",
            test: L(
              "T.eq(madeBy(PAUSE, 20), 'checkout', 'applyCoupon and priceCart both RECEIVED 20; checkout did not — so checkout made it and passed it up');",
              "var P2 = { callStack: [",
              "  { fn: 'render', args: [null] },",
              "  { fn: 'loadUser', args: [42] },",
              "  { fn: 'init', args: [] }",
              "] };",
              "T.eq(madeBy(P2, null), 'loadUser', 'render got null; loadUser did not receive it — it produced it');",
              "var P3 = { callStack: [",
              "  { fn: 'format', args: ['NaN'] },",
              "  { fn: 'main', args: ['NaN'] }",
              "] };",
              "T.eq(madeBy(P3, 'NaN'), null, 'even the oldest frame received it — it came from outside this stack');",
              "T.eq(madeBy(PAUSE, { total: 80 }), 'onClick', 'objects compare by contents: every frame down to checkout received the same cart; onClick did not, so onClick built it');") }
        ],
        files: [
          { name: "script.js", content: L(
            STACK_SRC,
            "",
            "// whoCalled(pause) → fn of the frame below the top, or null",
            "function whoCalled(pause) {",
            "  return null;",
            "}",
            "",
            "// argsAt(pause, depth) → the args of callStack[depth]",
            "function argsAt(pause, depth) {",
            "  return [];",
            "}",
            "",
            "// path(pause) → \"oldest > … > newest\"",
            "function path(pause) {",
            "  return \"\";",
            "}",
            "",
            "// madeBy(pause, value): walk DOWN from the top while each frame's args",
            "// include value. The first frame that does NOT receive it made it →",
            "// return its fn. If every frame received it → null.",
            "// (Compare with JSON.stringify so objects match by contents.)",
            "function madeBy(pause, value) {",
            "  return null;",
            "}",
            "",
            "console.log(path(PAUSE), madeBy(PAUSE, 20));",
            "") }
        ],
        hints: [
          "`whoCalled`: `const c = pause.callStack[1]; return c ? c.fn : null;` — and `argsAt` is just `pause.callStack[depth].args`.",
          "`path`: `pause.callStack.slice().reverse().map(f => f.fn).join(\" > \")` — `slice()` first, because `reverse()` changes the array in place.",
          "`madeBy`: `const has = f => f.args.some(a => JSON.stringify(a) === JSON.stringify(value));` then loop `i` from 0: the first frame where `!has(frame)` is the maker. If you run off the end, return null."
        ],
        solution: {
          "script.js": L(
            STACK_SRC,
            "",
            "function whoCalled(pause) {",
            "  const c = pause.callStack[1];",
            "  return c ? c.fn : null;",
            "}",
            "",
            "function argsAt(pause, depth) {",
            "  return pause.callStack[depth].args;",
            "}",
            "",
            "function path(pause) {",
            "  return pause.callStack.slice().reverse().map(f => f.fn).join(\" > \");",
            "}",
            "",
            "function madeBy(pause, value) {",
            "  const want = JSON.stringify(value);",
            "  const has = f => f.args.some(a => JSON.stringify(a) === want);",
            "  for (const frame of pause.callStack) {",
            "    if (!has(frame)) return frame.fn;",
            "  }",
            "  return null;",
            "}",
            "",
            "console.log(path(PAUSE), madeBy(PAUSE, 20));",
            "")
        }
      },

      {
        id: "debug-u5-4",
        title: "Step over, into, out — predict the next line",
        kind: "js", chip: "DEBUG", xp: 15, mins: 15,
        brief: "Once paused, you move through the program one step at a time. Three buttons do almost all the work, and using them well means **predicting where each will land** before you press it:\n\n- **Step over** — run the current line completely, including any function it calls, and stop on the **next line of this function**. On the function's last line, the next place to stop is back in the **caller**.\n- **Step into** — if the current line calls one of **your** functions, stop on the **first line of its body**. If it calls nothing, or a library function you have no source for, it behaves exactly like step over.\n- **Step out** — run the rest of this function and stop back in the **caller**, on the line that made the call.\n\nPredicting matters because stepping is slow and it's easy to overshoot — step *over* the call you needed to step *into*, and the moment is gone.\n\n`PROGRAM` describes a small checkout flow: each function's first and last body line, and which lines make calls. Write `nextLine(pause, command, program)` returning the line a step would land on (or `null` when there's nowhere to go). A pause is `{ line, callStack }`, where `callStack[1].line` is the caller's line.\n\n**Try it for real:** the three buttons sit at the top of DevTools' Sources panel — F10, F11 and Shift+F11." + HONEST,
        steps: [
          { text: "At line 12 of `checkout`: over → 13, into → the first line of `priceCart`, out → back to the caller.",
            test: L(
              "T.eq(nextLine(PAUSE, 'over', PROGRAM), 13, 'step over runs priceCart completely and stops on the next line of checkout');",
              "T.eq(nextLine(PAUSE, 'into', PROGRAM), 21, 'line 12 calls priceCart — one of yours — so step into lands on its first body line');",
              "T.eq(nextLine(PAUSE, 'out', PROGRAM), 5, 'step out finishes checkout and stops in its caller, onClick, on line 5');") },
          { text: "Into a call you have no source for, or on a line with no call at all, acts like step over.",
            test: L(
              "var P13 = { line: 13, callStack: [{ fn: 'checkout', line: 13 }, { fn: 'onClick', line: 5 }] };",
              "T.eq(nextLine(P13, 'into', PROGRAM), 14, 'saveOrder is a library call — nothing of yours to step into, so it behaves like over');",
              "var P31 = { line: 31, callStack: [{ fn: 'applyCoupon', line: 31 }, { fn: 'priceCart', line: 22 }, { fn: 'checkout', line: 12 }] };",
              "T.eq(nextLine(P31, 'into', PROGRAM), 32, 'line 31 calls nothing');",
              "T.eq(nextLine(P31, 'over', PROGRAM), 32, 'and over is the next line');") },
          { text: "On a function's last line, over and into both return to the caller — and with no caller there's nowhere to go.",
            test: L(
              "var P33 = { line: 33, callStack: [{ fn: 'applyCoupon', line: 33 }, { fn: 'priceCart', line: 22 }, { fn: 'checkout', line: 12 }] };",
              "T.eq(nextLine(P33, 'over', PROGRAM), 22, 'line 33 is applyCoupon\\'s last — over returns to the caller, priceCart, at line 22');",
              "T.eq(nextLine(P33, 'into', PROGRAM), 22, 'no call on line 33, so into acts like over');",
              "T.eq(nextLine(P33, 'out', PROGRAM), 22, 'out lands in the caller too');",
              "var P22 = { line: 22, callStack: [{ fn: 'priceCart', line: 22 }, { fn: 'checkout', line: 12 }] };",
              "T.eq(nextLine(P22, 'into', PROGRAM), 31, 'priceCart line 22 calls applyCoupon');",
              "var TOP = { line: 14, callStack: [{ fn: 'checkout', line: 14 }] };",
              "T.eq(nextLine(TOP, 'over', PROGRAM), null, 'the last line of the outermost frame — nowhere left to step');",
              "T.eq(nextLine(TOP, 'out', PROGRAM), null, 'and no caller to step out to');") }
        ],
        files: [
          { name: "script.js", content: L(
            PROGRAM_SRC,
            "",
            "// nextLine(pause, command, program) → the line a step lands on, or null.",
            "//   \"over\" — next line of this function; past its last line → the caller's line",
            "//   \"into\" — if this line calls a function IN program.functions → its body line;",
            "//            otherwise the same as \"over\"",
            "//   \"out\"  — the caller's line",
            "// The current function is pause.callStack[0].fn; the caller is callStack[1].",
            "function nextLine(pause, command, program) {",
            "  return pause.line + 1;",
            "}",
            "",
            "console.log(nextLine(PAUSE, \"into\", PROGRAM));",
            "") }
        ],
        hints: [
          "Write a helper for the caller's line first: `const caller = pause.callStack[1]; const back = caller ? caller.line : null;` — both \"out\" and \"over at the end\" use it.",
          "\"over\": `const fn = program.functions[pause.callStack[0].fn]; return pause.line < fn.end ? pause.line + 1 : back;`",
          "\"into\": `const callee = program.calls[pause.line]; if (callee && program.functions[callee]) return program.functions[callee].body;` — otherwise fall through to the \"over\" answer."
        ],
        solution: {
          "script.js": L(
            PROGRAM_SRC,
            "",
            "function nextLine(pause, command, program) {",
            "  const caller = pause.callStack[1];",
            "  const back = caller ? caller.line : null;",
            "  const here = program.functions[pause.callStack[0].fn];",
            "  const over = pause.line < here.end ? pause.line + 1 : back;",
            "  if (command === \"out\") return back;",
            "  if (command === \"into\") {",
            "    const callee = program.calls[pause.line];",
            "    if (callee && program.functions[callee]) return program.functions[callee].body;",
            "  }",
            "  return over;",
            "}",
            "",
            "console.log(nextLine(PAUSE, \"into\", PROGRAM));",
            "")
        }
      },

      {
        id: "debug-u5-5",
        title: "Conditional breakpoints: write the condition, not 137 clicks",
        kind: "js", chip: "DEBUG", xp: 15, mins: 13,
        brief: "The order total becomes `NaN` somewhere in a 200-row import. A breakpoint on the loop body stops on **every** row: finding the bad one means clicking Resume up to 199 times and not blinking.\n\nA **conditional breakpoint** pauses only when an expression you write is true. The instinct is to write `i === 137` — you counted, you know which row it is. Today. Tomorrow's file has the bad row somewhere else, and that condition stops nowhere, or on the wrong row.\n\nA good condition describes the bug's **signature** — what the bad moment *looks like*, not where it happened to be. Here: this row turns a total that was a number **into** `NaN`. A string price like `\"3.50\"` isn't the bug (multiplication converts it); a `null` price with a quantity of 0 isn't either (`null * 0` is `0`). And once the total is `NaN`, every later row keeps it `NaN` — so a condition that only asks *\"is the total about to be NaN?\"* fires on every row after the bad one, too.\n\nWrite `condition(i, row, total)` — the expression you would type into DevTools — where `total` is the running total *before* this row is added. The checks run it across three different files: it must fire **exactly once**, on the row that caused the damage.\n\n**Try it for real:** right-click a line number in the Sources panel → *Add conditional breakpoint…*" + HONEST,
        steps: [
          { text: "On today's file, it fires exactly once — on row 137.",
            test: L(
              "function rows(n, bad) { var r = []; for (var i = 0; i < n; i++) r.push({ price: i === bad ? undefined : (i === 50 ? '3.50' : (i === 80 ? null : 2)), qty: i === 80 ? 0 : 1 }); return r; }",
              "function hits(data) { var total = 0, out = []; data.forEach(function (row, i) { if (condition(i, row, total)) out.push(i); total = total + row.price * row.qty; }); return out; }",
              "T.eq(hits(rows(200, 137)), [137], 'the condition should be true on row 137 and nowhere else');") },
          { text: "On tomorrow's file the bad row has moved — the condition still finds it, and only it.",
            test: L(
              "function rows(n, bad) { var r = []; for (var i = 0; i < n; i++) r.push({ price: i === bad ? undefined : (i === 50 ? '3.50' : (i === 80 ? null : 2)), qty: i === 80 ? 0 : 1 }); return r; }",
              "function hits(data) { var total = 0, out = []; data.forEach(function (row, i) { if (condition(i, row, total)) out.push(i); total = total + row.price * row.qty; }); return out; }",
              "T.eq(hits(rows(200, 12)), [12], 'Tomorrow the bad row is 12. A condition that names a row number finds nothing — describe what the bad row DOES instead.');",
              "T.eq(hits(rows(200, 199)), [199], 'and on a file where it is the very last row');") },
          { text: "Not too loose: silent on a clean file, and quiet on the rows after the damage is done.",
            test: L(
              "function rows(n, bad) { var r = []; for (var i = 0; i < n; i++) r.push({ price: i === bad ? undefined : (i === 50 ? '3.50' : (i === 80 ? null : 2)), qty: i === 80 ? 0 : 1 }); return r; }",
              "function hits(data) { var total = 0, out = []; data.forEach(function (row, i) { if (condition(i, row, total)) out.push(i); total = total + row.price * row.qty; }); return out; }",
              "T.eq(hits(rows(200, -1)), [], 'a clean file (the string price on row 50 and the null-price, zero-qty row 80 are both harmless) — the condition must never fire');",
              "var twoBad = rows(200, 30); twoBad[90] = { price: 'n/a', qty: 3 };",
              "T.eq(hits(twoBad), [30], 'row 30 makes the total NaN; row 90 is also junk, but by then the total was ALREADY NaN — a breakpoint there shows you the aftermath, not the cause');") }
        ],
        files: [
          { name: "script.js", content: L(
            "// The loop the breakpoint sits in (don't edit — this is the app):",
            "//",
            "//   let total = 0;",
            "//   rows.forEach((row, i) => {",
            "//     /* ◆ conditional breakpoint here */",
            "//     total = total + row.price * row.qty;",
            "//   });",
            "//",
            "// condition(i, row, total) is the expression you'd type into DevTools.",
            "// total is the running total BEFORE this row is added.",
            "// Pause exactly once: on the row that turns a numeric total into NaN.",
            "function condition(i, row, total) {",
            "  return i === 137;   // true for today's file only",
            "}",
            "") }
        ],
        hints: [
          "After this row, the total would be `total + row.price * row.qty`. The bug is that value being `NaN` — `Number.isNaN(...)` tests exactly that (the global `isNaN` would also convert strings).",
          "Guard against the aftermath: once the total is already NaN, every row keeps it NaN. Add `&& !Number.isNaN(total)` so it only fires on the row that CAUSED it.",
          "`return Number.isNaN(total + row.price * row.qty) && !Number.isNaN(total);` — no row numbers anywhere."
        ],
        solution: {
          "script.js": L(
            "// Pause exactly once: on the row that turns a numeric total into NaN.",
            "function condition(i, row, total) {",
            "  return Number.isNaN(total + row.price * row.qty) && !Number.isNaN(total);",
            "}",
            "")
        }
      },

      {
        id: "debug-quiz-5",
        title: "Unit 5 quiz: Breakpoints",
        kind: "quiz", xp: 10,
        brief: "Pausing, reading scope and the call stack, stepping, and conditions. 80% to pass.",
        questions: [
          { q: "You add `debugger;` to a function and run the page with DevTools closed. What happens at that line?",
            choices: ["The page freezes until you reload it", "Nothing — execution carries straight on", "A ReferenceError: debugger is not defined", "The browser opens DevTools automatically"],
            answer: 1, explain: "`debugger` is a statement that means \"pause here if a debugger is attached\". With DevTools closed there's nothing attached, so it's a no-op and the code keeps running. That's why forgotten `debugger` lines usually go unnoticed until a developer with DevTools open hits them — remove them before you ship." },
          { q: "Paused, the Scope panel shows `items` under both Local and Closure. Which one does the paused line see?",
            choices: ["The Local one — the nearest scope wins", "The Closure one — it was declared first", "Both, merged into a single array", "Whichever of the two holds more items"],
            answer: 0, explain: "Name lookup starts in the innermost scope and stops at the first match, so the local `items` shadows the closure's. The outer one still exists — other code in that closure sees it — but it's invisible from this line. Confusing the two is a classic way to misread a paused frame." },
          { q: "Paused on a line that calls `formatPrice()`, one of your own functions. Which button stops you on its first line?",
            choices: ["Step over", "Step out", "Step into", "Resume"],
            answer: 2, explain: "Step into enters a function called on the current line, stopping on the first line of its body. Step over would run formatPrice completely and stop on the next line of the current function; step out would leave the current function altogether. If the call were into a library with no source, step into would act like step over." },
          { q: "`applyCoupon` received a bad rate of 20. `priceCart`, one frame down, also received 20. `checkout`, below that, did not. Where was the bad value made?",
            choices: ["In `applyCoupon`, where it was noticed", "In `priceCart`, the frame that passed it on", "Outside the stack entirely — none of these frames could have made it", "In `checkout`, the first frame that didn't receive it"],
            answer: 3, explain: "Follow the value down: each frame that received 20 as an argument just passed it along. The first frame that DIDN'T receive it, but handed it up, must have produced it — so the fix belongs in `checkout`. Fixing it where it was noticed, in applyCoupon, would only paper over the cause." },
          { q: "Why is `i === 137` a weak conditional breakpoint for \"the row that makes the total NaN\"?",
            choices: ["Conditions can't reference loop variables", "It only works for the file where row 137 is the bad one", "Numeric comparisons are slow in breakpoints", "DevTools silently ignores any condition that mentions an array index"],
            answer: 1, explain: "A row number describes where the bug happened to be in one dataset, not what the bug is. With different data it pauses on a healthy row or never at all. A condition that states the bug's signature — this row turns a numeric total into NaN — finds the bad row wherever it is." },
          { q: "Paused on the last line of a function, you press Step over. Where do you stop next?",
            choices: ["Back in the caller, on the line that made the call", "On the first line of the same function", "On the next breakpoint set anywhere else in the program, wherever it is", "Nowhere — the program ends"],
            answer: 0, explain: "Stepping over the final line finishes the function, so the next line to run belongs to the caller: execution resumes on the line that made the call, which may still have work to do with the returned value. Only in the outermost frame is there nowhere left to step." }
        ]
      }
    ]
  });
})();
