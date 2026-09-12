/* Debugging & Diagnosis — Unit 2: Stack traces */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var TRACE_SRC = L(
    "const TRACE = `TypeError: Cannot read properties of undefined (reading 'price')",
    "    at applyCoupon (cart.js:42:9)",
    "    at cart.js:57:14",
    "    at Array.map (<anonymous>)",
    "    at total (cart.js:18:22)",
    "    at checkout (checkout.js:7:15)",
    "    at HTMLButtonElement.onClick (ui.js:31:5)",
    "    at mountButtons (ui.js:12:3)`;");

  var CRASH_SRC = L(
    "// A crash, already parsed into frames — newest first.",
    "const CRASH = [",
    "  { fn: \"baseGet\",   file: \"node_modules/lodash/lodash.js\", line: 3108 },",
    "  { fn: \"get\",       file: \"node_modules/lodash/lodash.js\", line: 13235 },",
    "  { fn: \"Array.map\", file: \"<anonymous>\",                   line: null },",
    "  { fn: \"priceOf\",   file: \"src/cart.js\",                   line: 42 },",
    "  { fn: \"total\",     file: \"src/cart.js\",                   line: 18 },",
    "  { fn: \"checkout\",  file: \"src/checkout.js\",               line: 7 }",
    "];");

  var MAP_SRC = L(
    "// A source map for a one-line minified bundle: each row says \"from this",
    "// generated column onward, you are looking at this spot in this file\".",
    "const SOURCE_MAP = {",
    "  file: \"bundle.min.js\",",
    "  mappings: [",
    "    { genCol: 0,    file: \"src/main.js\",     line: 1,  col: 0 },",
    "    { genCol: 312,  file: \"src/main.js\",     line: 14, col: 2 },",
    "    { genCol: 1804, file: \"src/cart.js\",     line: 1,  col: 0 },",
    "    { genCol: 2290, file: \"src/cart.js\",     line: 18, col: 2 },",
    "    { genCol: 2511, file: \"src/cart.js\",     line: 42, col: 9 },",
    "    { genCol: 2560, file: \"src/cart.js\",     line: 43, col: 4 },",
    "    { genCol: 3977, file: \"src/checkout.js\", line: 1,  col: 0 },",
    "    { genCol: 4105, file: \"src/checkout.js\", line: 7,  col: 15 },",
    "    { genCol: 5120, file: \"src/ui.js\",       line: 1,  col: 0 },",
    "    { genCol: 5388, file: \"src/ui.js\",       line: 12, col: 3 },",
    "    { genCol: 5761, file: \"src/ui.js\",       line: 31, col: 5 },",
    "    { genCol: 6044, file: \"src/ui.js\",       line: 40, col: 0 }",
    "  ]",
    "};");

  window.CODELAB.addUnit("debug", {
    id: "debug-u2",
    title: "Stack traces",
    icon: "🥞",
    blurb: "A trace is the call stack printed newest-first. Read it top-down, find the first frame you own, understand async's missing middle, and map a minified frame back to real code.",
    cheat: [
      { h: "Reading a trace", lang: "text", code: L(
        "TypeError: Cannot read properties of undefined (reading 'price')",
        "    at applyCoupon (cart.js:42:9)     ← thrown HERE (newest)",
        "    at total (cart.js:18:22)          ← which was called from here",
        "    at checkout (checkout.js:7:15)    ← …from here (oldest)"),
        note: "Top frame = where it was thrown. Each line down = who called the line above." },
      { h: "Frame shapes", lang: "text", code: L(
        "at fn (file:line:col)      a named function",
        "at file:line:col           an anonymous function (arrow, callback)",
        "at Array.map (<anonymous>) built-in code — no file, no line",
        "at async loadCart (…)      a caller that was suspended at an await"),
        note: "Split the location from the right: URLs contain colons too." },
      { h: "Your frames vs theirs", lang: "text", code: L(
        "at baseGet (node_modules/lodash/lodash.js:3108)  ← library",
        "at priceOf (src/cart.js:42)                     ← FIRST FRAME YOU OWN",
        "at total   (src/cart.js:18)                     ← where the bad value came from?"),
        note: "The bug is almost never in the library. It is in what you handed it." },
      { h: "The missing middle", lang: "js", code: L(
        "setTimeout(flush, 100);   // later, flush throws…",
        "// …and the trace is just \"at flush (queue.js:4)\" — nothing called it",
        "// directly. Search for who SCHEDULED it; don't guess a caller."),
        note: "DevTools can stitch async traces together — look for the \"async\" separators in its Call Stack panel." },
      { h: "Source maps", lang: "text", code: L(
        "at t (bundle.min.js:1:2530)",
        "   → the map's row with the largest genCol ≤ 2530 is genCol 2511",
        "   → src/cart.js:42:9"),
        note: "In a real browser, DevTools applies the map for you once the .map file is served." }
    ],
    lessons: [

      {
        id: "debug-u2-1",
        title: "Reading a trace: newest call on top",
        kind: "js", chip: "DEBUG", xp: 15, mins: 14,
        brief: "A stack trace is the **call stack at the moment of the throw**, printed newest first. Line one is the error itself. Every line after it is a *frame*: one function that was still running, waiting on the one above it.\n\n`at applyCoupon (cart.js:42:9)` reads: *inside `applyCoupon`, in `cart.js`, line 42, column 9*. The next frame down called that one, and so on down to whatever started it all.\n\nFrames come in three shapes, and a parser has to survive all of them:\n\n- `at applyCoupon (cart.js:42:9)` — a named function, location in parentheses.\n- `at cart.js:57:14` — an **anonymous** function (an arrow or callback): no name, just a location.\n- `at Array.map (<anonymous>)` — **built-in** code: a name, but no file, line or column.\n\nThis is the one lesson in the course that parses raw trace text. Write `parseTrace(text)` returning one `{ fn, file, line, col }` per frame — `fn` is `null` for an anonymous frame; `line` and `col` are numbers, or `null` when there are none. One trap: locations can be URLs, and URLs have colons of their own. Take the line and column from the **right**.",
        example: { lang: "js", code: "parseTrace(TRACE)[0]\n// { fn: \"applyCoupon\", file: \"cart.js\", line: 42, col: 9 }" },
        steps: [
          { text: "`parseTrace(TRACE)` returns one entry per frame — seven — and skips the error line itself.",
            test: L(
              "var f = parseTrace(TRACE);",
              "T.expect(Array.isArray(f), 'parseTrace must return an array of frames.');",
              "T.eq(f.length, 7, 'TRACE has 7 \"at\" lines; the first line is the error message, not a frame');",
              "T.expect(f[0] && f[0].fn === 'applyCoupon', 'Frame 0 is the newest call, applyCoupon — got ' + JSON.stringify(f[0]) + '.');") },
          { text: "Named and anonymous frames: `{ fn, file, line, col }` with numbers, `fn: null` when there's no name.",
            test: L(
              "var f = parseTrace(TRACE);",
              "T.eq(f[0], { fn: 'applyCoupon', file: 'cart.js', line: 42, col: 9 }, 'frame 0');",
              "T.eq(f[1], { fn: null, file: 'cart.js', line: 57, col: 14 }, 'frame 1 is an anonymous function — no name, just a location');",
              "T.eq(f[6], { fn: 'mountButtons', file: 'ui.js', line: 12, col: 3 }, 'frame 6, the oldest');") },
          { text: "Built-in frames get `null` line and column — and URL locations keep their own colons.",
            test: L(
              "var f = parseTrace(TRACE);",
              "T.eq(f[2], { fn: 'Array.map', file: '<anonymous>', line: null, col: null }, 'a built-in frame has no line or column');",
              "T.eq(f[5], { fn: 'HTMLButtonElement.onClick', file: 'ui.js', line: 31, col: 5 }, 'dotted names are still one name');",
              "var web = parseTrace('Error: boom\\n    at render (https://shop.example/js/app.js:120:7)\\n    at https://shop.example/js/app.js:88:15');",
              "T.eq(web, [",
              "  { fn: 'render', file: 'https://shop.example/js/app.js', line: 120, col: 7 },",
              "  { fn: null, file: 'https://shop.example/js/app.js', line: 88, col: 15 }",
              "], 'a trace from a real site: take line and col from the RIGHT');") }
        ],
        files: [
          { name: "script.js", content: L(
            "// A trace from a bug report, pasted in as text.",
            TRACE_SRC,
            "",
            "// parseTrace(text) → [{ fn, file, line, col }, …], one per \"at\" line.",
            "//   \"at name (file:line:col)\"   → fn: \"name\"",
            "//   \"at file:line:col\"          → fn: null            (anonymous)",
            "//   \"at name (<anonymous>)\"     → line: null, col: null (built-in)",
            "function parseTrace(text) {",
            "  return [];",
            "}",
            "",
            "console.log(parseTrace(TRACE));",
            "") }
        ],
        hints: [
          "Keep only the frame lines: `text.split(\"\\n\").filter(l => l.trim().startsWith(\"at \"))`. Then strip the leading `at `.",
          "If the rest ends in `)`, it is `name (location)`: `/^(.*) \\((.*)\\)$/` gives both. Otherwise the whole thing is the location and `fn` is `null`.",
          "Split the location from the right with `/^(.*):(\\d+):(\\d+)$/` — the greedy `(.*)` swallows a URL's own colons. If it doesn't match (`<anonymous>`), the file is the whole location and line/col are `null`."
        ],
        solution: {
          "script.js": L(
            TRACE_SRC,
            "",
            "function parseFrame(raw) {",
            "  const s = raw.trim().replace(/^at /, \"\");",
            "  let fn = null, loc = s;",
            "  const named = /^(.*) \\((.*)\\)$/.exec(s);",
            "  if (named) { fn = named[1]; loc = named[2]; }",
            "  const p = /^(.*):(\\d+):(\\d+)$/.exec(loc);",
            "  if (!p) return { fn, file: loc, line: null, col: null };",
            "  return { fn, file: p[1], line: Number(p[2]), col: Number(p[3]) };",
            "}",
            "",
            "function parseTrace(text) {",
            "  return text.split(\"\\n\").filter(l => l.trim().startsWith(\"at \")).map(parseFrame);",
            "}",
            "",
            "console.log(parseTrace(TRACE));",
            "")
        }
      },

      {
        id: "debug-u2-2",
        title: "Your code vs. their code: the first frame you own",
        kind: "js", chip: "DEBUG", xp: 15, mins: 13,
        brief: "Real traces are mostly **other people's code**: a framework's event plumbing, a library's internals, built-ins like `Array.map`. The top frame is where the error was *thrown* — but when that frame is inside lodash, lodash is almost never the bug. The bug is in what **you handed it**.\n\nSo the first real skill with a trace is to skip down to the **first frame you own**. That's the line where your code made the call that went wrong. And the *next* frame you own — below it — is usually where the bad value came from.\n\nIn this project your own code lives under `src/`. Everything else — `node_modules/…`, `<anonymous>` built-ins — belongs to somebody else.\n\nFrom here on, traces arrive **already parsed** into frames. Write `blame(frames)`, returning `\"file:line\"` for the first frame you own (or `null` if there is none), and `caller(frames)`, returning the same for the *second* frame you own.",
        example: { lang: "js", code: "blame(CRASH)   // \"src/cart.js:42\" — skip the 3 library frames above it\ncaller(CRASH)  // \"src/cart.js:18\" — the code that called priceOf" },
        steps: [
          { text: "`blame(CRASH)` skips the library frames and returns `\"src/cart.js:42\"`.",
            test: L(
              "T.eq(blame(CRASH), 'src/cart.js:42', 'The top three frames are lodash and a built-in — your first frame is priceOf in src/cart.js');") },
          { text: "It judges each trace on its own — sometimes the top frame *is* yours, sometimes none are.",
            test: L(
              "var FORM = [",
              "  { fn: 'validate', file: 'src/form.js', line: 12 },",
              "  { fn: 'onSubmit', file: 'src/form.js', line: 40 },",
              "  { fn: 'callCallback', file: 'node_modules/react-dom/cjs/react-dom.development.js', line: 4164 }",
              "];",
              "T.eq(blame(FORM), 'src/form.js:12', 'Here the very top frame is yours — skipping a fixed number of frames would miss it');",
              "var LIBS = [",
              "  { fn: 'x', file: 'node_modules/chart.js/dist/chart.umd.js', line: 13 },",
              "  { fn: 'Array.forEach', file: '<anonymous>', line: null }",
              "];",
              "T.eq(blame(LIBS), null, 'No frame in this trace is under src/ — return null rather than a library frame');") },
          { text: "`caller(frames)` returns the *second* frame you own — where the bad value probably came from.",
            test: L(
              "T.eq(caller(CRASH), 'src/cart.js:18', 'Below priceOf, the next frame you own is total in src/cart.js');",
              "var FORM = [",
              "  { fn: 'validate', file: 'src/form.js', line: 12 },",
              "  { fn: 'dispatch', file: 'node_modules/redux/dist/redux.js', line: 290 },",
              "  { fn: 'onSubmit', file: 'src/form.js', line: 40 }",
              "];",
              "T.eq(caller(FORM), 'src/form.js:40', 'library frames between your two frames are skipped too');",
              "var ONE = [",
              "  { fn: 'y', file: 'node_modules/lib/index.js', line: 2 },",
              "  { fn: 'init', file: 'src/main.js', line: 3 }",
              "];",
              "T.eq(blame(ONE), 'src/main.js:3', 'blame of a trace with one frame you own');",
              "T.eq(caller(ONE), null, 'only one frame you own, so there is no caller to report');") }
        ],
        files: [
          { name: "script.js", content: L(
            CRASH_SRC,
            "",
            "// Your code lives under src/. Everything else is somebody else's.",
            "// blame(frames)  → \"file:line\" of the FIRST frame you own, or null",
            "// caller(frames) → \"file:line\" of the SECOND frame you own, or null",
            "function blame(frames) {",
            "  const f = frames[0];",
            "  return f.file + \":\" + f.line;",
            "}",
            "",
            "function caller(frames) {",
            "  return null;",
            "}",
            "",
            "console.log(blame(CRASH), caller(CRASH));",
            "") }
        ],
        hints: [
          "Keep only your frames first: `const mine = frames.filter(f => f.file.startsWith(\"src/\"));`",
          "Then `blame` is about `mine[0]` and `caller` is about `mine[1]` — each turned into `f.file + \":\" + f.line`.",
          "Either may not exist: `return mine[0] ? mine[0].file + \":\" + mine[0].line : null;`"
        ],
        solution: {
          "script.js": L(
            CRASH_SRC,
            "",
            "function mine(frames) {",
            "  return frames.filter(f => f.file.startsWith(\"src/\"));",
            "}",
            "",
            "function at(f) {",
            "  return f ? f.file + \":\" + f.line : null;",
            "}",
            "",
            "function blame(frames) {",
            "  return at(mine(frames)[0]);",
            "}",
            "",
            "function caller(frames) {",
            "  return at(mine(frames)[1]);",
            "}",
            "",
            "console.log(blame(CRASH), caller(CRASH));",
            "")
        }
      },

      {
        id: "debug-u2-3",
        title: "Async traces and the missing middle",
        kind: "js", chip: "DEBUG", xp: 15, mins: 13,
        brief: "Everything so far assumed the frames below the top one are its **callers**. With asynchronous code that stops being quite true.\n\nWhen an `async` function hits `await`, it is taken **off** the stack entirely. When the awaited promise settles, it resumes on a fresh stack. Chrome makes up for this: it rebuilds the chain of *awaiting* functions and marks each one — `at async loadCart (src/cart.js:12:5)`. Those frames are real callers, just ones that were suspended.\n\nCallbacks get no such help. A function run by `setTimeout`, an event listener or a `.then()` callback starts on an **empty** stack: nothing called it directly — something *scheduled* it earlier, and that part of the story is simply gone from the trace. That's the missing middle. The honest move is to say so, and go search for who registered the callback, rather than invent a caller.\n\nFrames now carry `async: true` when Chrome marked them. Write `whoCalled(frames)` — `{ fn, via: \"call\" }` or `{ fn, via: \"await\" }` for the frame below the top, or `{ fn: null, via: null }` when there isn't one — and `awaitChain(frames)`, the names of every `async` frame, in order.",
        example: { lang: "js", code: "whoCalled(ASYNC_CRASH)   // { fn: \"loadCart\", via: \"await\" }\nawaitChain(ASYNC_CRASH)  // [\"loadCart\", \"init\"]\nwhoCalled(TIMER_CRASH)   // { fn: null, via: null } — scheduled, not called" },
        steps: [
          { text: "`whoCalled` reads the frame below the top: a plain caller is `via: \"call\"`, an async one is `via: \"await\"`.",
            test: L(
              "T.eq(whoCalled(SYNC_CRASH), { fn: 'total', via: 'call' }, 'price was called by total — an ordinary call');",
              "T.eq(whoCalled(ASYNC_CRASH), { fn: 'loadCart', via: 'await' }, 'renderCart threw after loadCart resumed from an await — Chrome marked that frame async');") },
          { text: "`awaitChain(frames)` lists the suspended callers, in order.",
            test: L(
              "T.eq(awaitChain(ASYNC_CRASH), ['loadCart', 'init'], 'every frame marked async, top to bottom');",
              "T.eq(awaitChain(SYNC_CRASH), [], 'a plain synchronous trace has no await chain');",
              "var DEEP = [",
              "  { fn: 'parse', file: 'src/api.js', line: 30 },",
              "  { fn: 'getJSON', file: 'src/api.js', line: 12, async: true },",
              "  { fn: 'loadUser', file: 'src/user.js', line: 8, async: true },",
              "  { fn: 'boot', file: 'src/main.js', line: 2, async: true }",
              "];",
              "T.eq(awaitChain(DEEP), ['getJSON', 'loadUser', 'boot'], 'a deeper chain');") },
          { text: "A scheduled callback has no caller on the stack — report `{ fn: null, via: null }`, don't invent one.",
            test: L(
              "T.eq(whoCalled(TIMER_CRASH), { fn: null, via: null }, 'flush ran from setTimeout — nothing on the stack called it, so there is no caller to report');",
              "var THEN = [{ fn: null, file: 'src/cart.js', line: 30 }];",
              "T.eq(whoCalled(THEN), { fn: null, via: null }, 'an anonymous .then() callback: same missing middle');",
              "T.eq(awaitChain(TIMER_CRASH), [], 'and no await chain either');") }
        ],
        files: [
          { name: "script.js", content: L(
            "// Three crashes, already parsed. Chrome marks suspended callers async.",
            "const SYNC_CRASH = [",
            "  { fn: \"price\",    file: \"src/cart.js\",     line: 9 },",
            "  { fn: \"total\",    file: \"src/cart.js\",     line: 21 },",
            "  { fn: \"checkout\", file: \"src/checkout.js\", line: 7 }",
            "];",
            "",
            "const ASYNC_CRASH = [",
            "  { fn: \"renderCart\", file: \"src/cart.js\", line: 40 },",
            "  { fn: \"loadCart\",   file: \"src/cart.js\", line: 12, async: true },",
            "  { fn: \"init\",       file: \"src/app.js\",  line: 3,  async: true }",
            "];",
            "",
            "// flush() was scheduled with setTimeout(flush, 100) — and then threw.",
            "const TIMER_CRASH = [",
            "  { fn: \"flush\", file: \"src/queue.js\", line: 4 }",
            "];",
            "",
            "// whoCalled(frames) → the frame BELOW the top:",
            "//   { fn, via: \"call\" }   an ordinary caller",
            "//   { fn, via: \"await\" }  a caller Chrome marked async",
            "//   { fn: null, via: null } when there is no such frame",
            "function whoCalled(frames) {",
            "  return { fn: frames[0].fn, via: \"call\" };",
            "}",
            "",
            "// awaitChain(frames) → names of every async frame, top to bottom",
            "function awaitChain(frames) {",
            "  return [];",
            "}",
            "",
            "console.log(whoCalled(ASYNC_CRASH), awaitChain(ASYNC_CRASH));",
            "") }
        ],
        hints: [
          "The caller is `frames[1]` — the top frame, `frames[0]`, is the function that threw, not its caller.",
          "`const c = frames[1]; if (!c) return { fn: null, via: null }; return { fn: c.fn, via: c.async ? \"await\" : \"call\" };`",
          "awaitChain is a filter and a map: `frames.filter(f => f.async).map(f => f.fn)`."
        ],
        solution: {
          "script.js": L(
            "const SYNC_CRASH = [",
            "  { fn: \"price\",    file: \"src/cart.js\",     line: 9 },",
            "  { fn: \"total\",    file: \"src/cart.js\",     line: 21 },",
            "  { fn: \"checkout\", file: \"src/checkout.js\", line: 7 }",
            "];",
            "",
            "const ASYNC_CRASH = [",
            "  { fn: \"renderCart\", file: \"src/cart.js\", line: 40 },",
            "  { fn: \"loadCart\",   file: \"src/cart.js\", line: 12, async: true },",
            "  { fn: \"init\",       file: \"src/app.js\",  line: 3,  async: true }",
            "];",
            "",
            "const TIMER_CRASH = [",
            "  { fn: \"flush\", file: \"src/queue.js\", line: 4 }",
            "];",
            "",
            "function whoCalled(frames) {",
            "  const c = frames[1];",
            "  if (!c) return { fn: null, via: null };",
            "  return { fn: c.fn, via: c.async ? \"await\" : \"call\" };",
            "}",
            "",
            "function awaitChain(frames) {",
            "  return frames.filter(f => f.async).map(f => f.fn);",
            "}",
            "",
            "console.log(whoCalled(ASYNC_CRASH), awaitChain(ASYNC_CRASH));",
            "")
        }
      },

      {
        id: "debug-u2-4",
        title: "Minified frames and source maps",
        kind: "js", chip: "DEBUG", xp: 15, mins: 15,
        brief: "In production your code is **bundled and minified**: every file squashed into one enormous line, every variable renamed to a letter. A trace from a real user looks like `at t (bundle.min.js:1:2530)` — accurate, and useless.\n\nA **source map** is the translation table the bundler writes alongside the bundle. The idea is simple enough to do by hand. Each row says: *from this generated column onward, you are looking at this line and column of this original file*. To translate a column, find the row with the **largest `genCol` that is ≤ your column** — the last row that starts at or before it. That row's `file`, `line` and `col` is the original position.\n\nWrite `demangle(frame, map)`: for a frame in the map's bundle (on line 1 — the bundle is one line), return the original `{ file, line, col }`; for anything else, return `null`. Then `demangleTrace(frames, map)` translates a whole trace, keeping each frame's `fn` and leaving frames it can't translate exactly as they were.\n\nReal source maps pack these rows into a compact encoding (Base64 VLQ) and DevTools decodes them for you, as long as the `.map` file is served. The lookup underneath is exactly this one.",
        example: { lang: "js", code: "demangle({ file: \"bundle.min.js\", line: 1, col: 2530 }, SOURCE_MAP)\n// { file: \"src/cart.js\", line: 42, col: 9 } — the row starting at genCol 2511" },
        steps: [
          { text: "`demangle` finds the row whose `genCol` is the largest one ≤ the frame's column.",
            test: L(
              "var B = function (col) { return { file: 'bundle.min.js', line: 1, col: col }; };",
              "T.eq(demangle(B(2511), SOURCE_MAP), { file: 'src/cart.js', line: 42, col: 9 }, 'column 2511 is exactly where a row starts');",
              "T.eq(demangle(B(2530), SOURCE_MAP), { file: 'src/cart.js', line: 42, col: 9 }, 'column 2530 is past 2511 but before 2560 — it still belongs to the row at 2511');",
              "T.eq(demangle(B(4200), SOURCE_MAP), { file: 'src/checkout.js', line: 7, col: 15 }, 'column 4200');") },
          { text: "The edges: the first and last rows, and frames the map doesn't cover (`null`).",
            test: L(
              "var B = function (col) { return { file: 'bundle.min.js', line: 1, col: col }; };",
              "T.eq(demangle(B(5), SOURCE_MAP), { file: 'src/main.js', line: 1, col: 0 }, 'column 5 is in the very first row');",
              "T.eq(demangle(B(9999), SOURCE_MAP), { file: 'src/ui.js', line: 40, col: 0 }, 'past the last row start, the last row still applies');",
              "T.eq(demangle({ file: 'vendor.js', line: 1, col: 10 }, SOURCE_MAP), null, 'this map only covers bundle.min.js');",
              "T.eq(demangle({ file: 'bundle.min.js', line: 2, col: 10 }, SOURCE_MAP), null, 'the map describes line 1 only');") },
          { text: "`demangleTrace` translates a whole trace, keeping each `fn` and leaving untranslatable frames alone.",
            test: L(
              "var trace = [",
              "  { fn: 't', file: 'bundle.min.js', line: 1, col: 2530 },",
              "  { fn: 'n', file: 'bundle.min.js', line: 1, col: 2300 },",
              "  { fn: 'Array.map', file: '<anonymous>', line: null, col: null },",
              "  { fn: 'r', file: 'bundle.min.js', line: 1, col: 5770 }",
              "];",
              "T.eq(demangleTrace(trace, SOURCE_MAP), [",
              "  { fn: 't', file: 'src/cart.js', line: 42, col: 9 },",
              "  { fn: 'n', file: 'src/cart.js', line: 18, col: 2 },",
              "  { fn: 'Array.map', file: '<anonymous>', line: null, col: null },",
              "  { fn: 'r', file: 'src/ui.js', line: 31, col: 5 }",
              "], 'the whole trace, translated');",
              "T.eq(trace[0].file, 'bundle.min.js', 'demangleTrace should build NEW frames, not rewrite the ones it was given');") }
        ],
        files: [
          { name: "script.js", content: L(
            MAP_SRC,
            "",
            "// demangle(frame, map) → { file, line, col } in the ORIGINAL code:",
            "//   the row with the largest genCol that is <= frame.col.",
            "//   Frames not in map.file, or not on line 1, → null.",
            "function demangle(frame, map) {",
            "  return null;",
            "}",
            "",
            "// demangleTrace(frames, map) → a new array: each frame translated,",
            "// keeping its fn; frames demangle can't translate stay as they were.",
            "function demangleTrace(frames, map) {",
            "  return frames;",
            "}",
            "",
            "console.log(demangle({ file: \"bundle.min.js\", line: 1, col: 2530 }, SOURCE_MAP));",
            "") }
        ],
        hints: [
          "Guard first: `if (frame.file !== map.file || frame.line !== 1) return null;`",
          "Walk the rows keeping the last one that starts at or before the column: `let hit = null; for (const r of map.mappings) if (r.genCol <= frame.col) hit = r;` — the rows are sorted, so the last match is the largest.",
          "demangleTrace: `frames.map(f => { const o = demangle(f, map); return o ? { fn: f.fn, file: o.file, line: o.line, col: o.col } : f; })`."
        ],
        solution: {
          "script.js": L(
            MAP_SRC,
            "",
            "function demangle(frame, map) {",
            "  if (frame.file !== map.file || frame.line !== 1) return null;",
            "  let hit = null;",
            "  for (const row of map.mappings) {",
            "    if (row.genCol <= frame.col) hit = row;",
            "  }",
            "  return hit ? { file: hit.file, line: hit.line, col: hit.col } : null;",
            "}",
            "",
            "function demangleTrace(frames, map) {",
            "  return frames.map(f => {",
            "    const o = demangle(f, map);",
            "    return o ? { fn: f.fn, file: o.file, line: o.line, col: o.col } : f;",
            "  });",
            "}",
            "",
            "console.log(demangle({ file: \"bundle.min.js\", line: 1, col: 2530 }, SOURCE_MAP));",
            "")
        }
      },

      {
        id: "debug-quiz-2",
        title: "Unit 2 quiz: Stack traces",
        kind: "quiz", xp: 10,
        brief: "Reading frames top-down, finding your own code, async gaps and source maps. 80% to pass.",
        questions: [
          { q: "In this trace, which function called `total`?",
            code: "TypeError: Cannot read properties of undefined (reading 'price')\n    at priceOf (src/cart.js:42:9)\n    at total (src/cart.js:18:22)\n    at checkout (src/checkout.js:7:15)",
            lang: "text",
            choices: ["`priceOf`, the frame printed above it", "`checkout`, the frame printed below it", "Nothing — `total` is where the error began", "The TypeError itself, printed on line one"],
            answer: 1, explain: "Frames are printed newest first: each line was called by the line beneath it. So `checkout` called `total`, which called `priceOf`, which threw. Reading upward gives you the call order; reading downward gives you who asked for each call." },
          { q: "The top three frames are all in `node_modules/lodash`. Where is the bug most likely?",
            choices: ["In lodash, in the frame at the very top", "In Node's module loader, below lodash", "In your first frame below the lodash frames", "Nowhere — errors from libraries are mostly noise"],
            answer: 2, explain: "Popular libraries are heavily used and tested; the likeliest story is that your code handed lodash something it didn't expect. The first frame you own is the call site where that happened, so start there. Check what you passed in before suspecting the library." },
          { q: "A function scheduled with `setTimeout(flush, 100)` throws. Its trace shows only `at flush (queue.js:4)`. Why?",
            choices: ["The trace was cut off by the browser's stack frame depth limit", "`flush` was called from the global scope directly", "Timers erase every stack frame that is older than 100ms", "It ran on a fresh stack; its scheduler had already returned"],
            answer: 3, explain: "The code that called `setTimeout` finished long before the timer fired, so nothing is on the stack beneath `flush` — the event loop started it. That's the missing middle. Don't invent a caller; search the code for where `flush` was scheduled." },
          { q: "What does a frame printed as `at async loadCart (src/cart.js:12:5)` mean?",
            choices: ["`loadCart` awaited something and was resumed later", "`loadCart` threw an error that nobody caught", "`loadCart` was invoked using the `async` keyword at its call site", "`loadCart` is running on a separate thread"],
            answer: 0, explain: "When an async function awaits, it leaves the stack. Chrome remembers the chain of awaiting functions and prints them marked `async` when an error surfaces after resumption. `loadCart` is a real caller that was suspended at an await on line 12." },
          { q: "`demangle` looks for the row with the largest `genCol` that is less than or equal to the frame's column. Why not the row with the nearest `genCol`?",
            choices: ["Nearest would be slower on a map this large", "Each row covers the columns from its start up to the next row", "The rows are stored in reverse order in a map", "Bundlers always round a column down to the start of the nearest row"],
            answer: 1, explain: "A mapping row marks where a stretch of generated code BEGINS; everything after it, up to the next row, came from that original position. Column 2559 belongs to the row starting at 2511 even if 2560 is numerically closer, because 2560 is where the next piece of code starts." },
          { q: "Why do production traces read `at t (bundle.min.js:1:2530)` without a source map?",
            choices: ["The browser hides real file names from pages to protect the source code", "Errors thrown in production are anonymized", "Minification merged the files onto one line and renamed variables", "Only the first line of any file is ever reported"],
            answer: 2, explain: "Bundlers concatenate every module into one file and minifiers strip whitespace and shorten names, so everything sits on line 1 and your function became `t`. The location is accurate — it's just in code nobody wrote. A source map translates it back to the file and line you'd recognize." }
        ]
      }
    ]
  });
})();
