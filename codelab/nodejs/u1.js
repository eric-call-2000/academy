/* Node.js Deep Dive — Unit 1: The Event Loop & Async Model */
window.CODELAB.addUnit("nodejs", {
  id: "nodejs-u1",
  title: "The Event Loop & Async Model",
  icon: "⚡",
  blurb: "How Node.js handles concurrency without threads: the event loop, call stack, callback queue, and microtasks.",
  cheat: [
    { h: "The event loop in one picture", lang: "js", code: "// Call stack (sync code) runs to empty\n// Then: microtasks → macrotasks → repeat\n\nsetTimeout(() => console.log('macrotask'), 0);\nPromise.resolve().then(() => console.log('microtask'));\nconsole.log('sync');\n// Output: sync → microtask → macrotask", note: "Microtasks (Promises) run BEFORE macrotasks (setTimeout), even with 0 delay." },
    { h: "Blocking the event loop", lang: "js", code: "// BAD: blocks EVERYTHING\nwhile (true) { } // infinite loop\n\n// BETTER: break work into chunks\nfunction processChunk(items, start, end) {\n  const chunk = items.slice(start, end);\n  chunk.forEach(process);\n  if (end < items.length) {\n    setImmediate(() => processChunk(items, end, end + 1000));\n  }\n}", note: "Never block the call stack. Use setImmediate/process.nextTick to yield." },
    { h: "Error handling in async code", lang: "js", code: "// Callbacks: first arg is error\nfs.readFile('file.txt', (err, data) => {\n  if (err) throw err; // handle it\n  console.log(data);\n});\n\n// Promises: .catch()\nreadFile('file.txt')\n  .then(data => console.log(data))\n  .catch(err => console.error(err));", note: "Unhandled Promise rejections crash Node.js — always catch." },
    { h: "The rule of thumb", lang: "js", code: "// I/O = async (fs, network, timers)\n// CPU = sync (crypto, compression, heavy math)\n\n// For CPU work: use worker threads or child processes\nconst { Worker } = require('worker_threads');", note: "Node.js is single-threaded by design. Offload CPU work to workers." }
  ],
  lessons: [

    {
      id: "nodejs-u1-1",
      title: "The single-threaded model",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Node.js runs on **one thread** — but handles thousands of connections. How? The **event loop**.\n\nUnlike servers that spawn a thread per request (expensive), Node.js uses a single thread that:\n1. Executes JavaScript (call stack)\n2. Hands off I/O to the OS (non-blocking)\n3. Processes callbacks when I/O completes\n\nWe'll simulate this model: a task queue, a call stack, and an event loop that processes them. The key insight: **I/O never blocks the thread** — only JavaScript execution does.",
      example: { lang: "js", code: "// Simulated Node.js runtime\nconst runtime = {\n  callStack: [],\n  taskQueue: [],\n  eventLoop() {\n    while (this.callStack.length > 0) {\n      const task = this.callStack.shift();\n      task();\n    }\n    if (this.taskQueue.length > 0) {\n      this.callStack.push(...this.taskQueue);\n      this.taskQueue = [];\n      this.eventLoop();\n    }\n  }\n};" },
      steps: [
        { text: "Create a `runtime` object with `callStack` array and `taskQueue` array.",
          test: "T.expect(typeof runtime === 'object', 'Create runtime object');\nT.expect(Array.isArray(runtime.callStack), 'runtime.callStack should be an array');\nT.expect(Array.isArray(runtime.taskQueue), 'runtime.taskQueue should be an array');" },
        { text: "Add `run(task)` method: pushes task to callStack and starts event loop if not running.",
          test: "T.expect(typeof runtime.run === 'function', 'Add runtime.run(task) method');\nlet executed = false;\nruntime.run(() => { executed = true; });\nT.expect(executed, 'The task should execute immediately');" },
        { text: "Add `setTimeout(callback, delay)` method: pushes callback to taskQueue after delay.",
          test: "let order = [];\nruntime.run(() => {\n  order.push('sync');\n  runtime.setTimeout(() => order.push('async'), 0);\n});\nT.expect(order.join(','), 'sync,async', 'Async callback should run after sync code');" },
        { text: "Add `eventLoop()` method: processes call stack, then moves taskQueue to callStack and repeats.",
          test: "let results = [];\nruntime.callStack.push(() => results.push('first'));\nruntime.taskQueue.push(() => results.push('second'));\nruntime.eventLoop();\nT.expect(results.join(','), 'first,second', 'Event loop should process call stack then task queue');" }
      ],
      files: [
        { name: "script.js", content: "// Simulated Node.js runtime\nconst runtime = {\n  callStack: [],\n  taskQueue: [],\n  running: false,\n\n  run(task) {\n    // Push to call stack and start event loop\n  },\n\n  setTimeout(callback, delay) {\n    // Push to taskQueue after delay (use setTimeout for simulation)\n  },\n\n  eventLoop() {\n    // Process call stack, then taskQueue, repeat until empty\n  }\n};\n\n// Test it\nruntime.run(() => console.log('sync'));\nruntime.setTimeout(() => console.log('async'), 0);\n" }
      ],
      hints: [
        "In `run()`: `this.callStack.push(task); if (!this.running) { this.running = true; this.eventLoop(); }`",
        "In `setTimeout()`: use real `setTimeout` to simulate delay: `setTimeout(() => this.taskQueue.push(callback), delay);`",
        "In `eventLoop()`: `while (this.callStack.length > 0) { this.callStack.shift()(); }` then move taskQueue to callStack and recurse if not empty."
      ],
      solution: {
        "script.js": "// Simulated Node.js runtime\nconst runtime = {\n  callStack: [],\n  taskQueue: [],\n  running: false,\n\n  run(task) {\n    this.callStack.push(task);\n    if (!this.running) {\n      this.running = true;\n      this.eventLoop();\n    }\n  },\n\n  setTimeout(callback, delay) {\n    setTimeout(() => this.taskQueue.push(callback), delay);\n  },\n\n  eventLoop() {\n    while (this.callStack.length > 0) {\n      this.callStack.shift()();\n    }\n    if (this.taskQueue.length > 0) {\n      this.callStack.push(...this.taskQueue);\n      this.taskQueue = [];\n      this.eventLoop();\n    } else {\n      this.running = false;\n    }\n  }\n};\n\n// Test it\nruntime.run(() => console.log('sync'));\nruntime.setTimeout(() => console.log('async'), 0);\n"
      }
    },

    {
      id: "nodejs-u1-2",
      title: "Microtasks vs macrotasks",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Not all async tasks are equal. **Microtasks** (Promises, queueMicrotask) run **before** **macrotasks** (setTimeout, setInterval, I/O callbacks).\n\nThis explains why `Promise.resolve().then(() => console.log('promise'))` runs before `setTimeout(() => console.log('timeout'), 0)` even with 0 delay. The event loop processes:\n\n1. All sync code (call stack)\n2. **All** microtasks (until empty)\n3. One macrotask\n4. Back to step 2\n\nUnderstanding this order prevents race conditions and timing bugs.",
      example: { lang: "js", code: "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');\n// Output: 1 → 4 → 3 → 2" },
      steps: [
        { text: "Create `taskScheduler` with `microtaskQueue` and `macrotaskQueue` arrays.",
          test: "T.expect(typeof taskScheduler === 'object', 'Create taskScheduler object');\nT.expect(Array.isArray(taskScheduler.microtaskQueue), 'Need microtaskQueue array');\nT.expect(Array.isArray(taskScheduler.macrotaskQueue), 'Need macrotaskQueue array');" },
        { text: "Add `queueMicrotask(fn)` method: pushes to microtaskQueue.",
          test: "T.expect(typeof taskScheduler.queueMicrotask === 'function', 'Add queueMicrotask method');\ntaskScheduler.queueMicrotask(() => {});\nT.expect(taskScheduler.microtaskQueue.length, 1, 'Should add to microtaskQueue');" },
        { text: "Add `setTimeout(fn, delay)` method: pushes to macrotaskQueue after delay.",
          test: "T.expect(typeof taskScheduler.setTimeout === 'function', 'Add setTimeout method');\ntaskScheduler.setTimeout(() => {}, 0);\nT.expect(taskScheduler.macrotaskQueue.length, 1, 'Should add to macrotaskQueue');" },
        { text: "Add `run()` method: executes sync code, then ALL microtasks, then ONE macrotask, repeat.",
          test: "let order = [];\ntaskScheduler.queueMicrotask(() => order.push('micro'));\ntaskScheduler.setTimeout(() => order.push('macro'), 0);\ntaskScheduler.run(() => order.push('sync'));\nT.expect(order.join(','), 'sync,micro,macro', 'Microtasks must run before macrotasks');" }
      ],
      files: [
        { name: "script.js", content: "// Task scheduler simulating microtask/macrotask priority\nconst taskScheduler = {\n  microtaskQueue: [],\n  macrotaskQueue: [],\n\n  queueMicrotask(fn) {\n    // Add to microtask queue\n  },\n\n  setTimeout(fn, delay) {\n    // Add to macrotask queue after delay\n  },\n\n  run(syncTask) {\n    // Execute sync, then all microtasks, then one macrotask, repeat\n  }\n};\n\n// Test the order\ntaskScheduler.queueMicrotask(() => console.log('microtask'));\ntaskScheduler.setTimeout(() => console.log('macrotask'), 0);\ntaskScheduler.run(() => console.log('sync'));\n" }
      ],
      hints: [
        "In `run()`: first execute `syncTask()`, then `while (microtaskQueue.length > 0) microtaskQueue.shift()();`",
        "After microtasks: if macrotaskQueue has items, shift ONE and execute it, then recurse to process any new microtasks",
        "The key is processing ALL microtasks before taking ONE macrotask — that's the Promise vs setTimeout difference."
      ],
      solution: {
        "script.js": "// Task scheduler simulating microtask/macrotask priority\nconst taskScheduler = {\n  microtaskQueue: [],\n  macrotaskQueue: [],\n\n  queueMicrotask(fn) {\n    this.microtaskQueue.push(fn);\n  },\n\n  setTimeout(fn, delay) {\n    setTimeout(() => this.macrotaskQueue.push(fn), delay);\n  },\n\n  run(syncTask) {\n    syncTask();\n    while (this.microtaskQueue.length > 0) {\n      this.microtaskQueue.shift()();\n    }\n    if (this.macrotaskQueue.length > 0) {\n      const macrotask = this.macrotaskQueue.shift();\n      macrotask();\n      if (this.microtaskQueue.length > 0 || this.macrotaskQueue.length > 0) {\n        this.run(() => {});\n      }\n    }\n  }\n};\n\n// Test the order\ntaskScheduler.queueMicrotask(() => console.log('microtask'));\ntaskScheduler.setTimeout(() => console.log('macrotask'), 0);\ntaskScheduler.run(() => console.log('sync'));\n"
      }
    },

    {
      id: "nodejs-u1-3",
      title: "Blocking the event loop",
      kind: "js", chip: "NODE", xp: 15, mins: 13,
      brief: "The single thread is both Node.js's superpower and its Achilles' heel. **Never block the event loop** with CPU-intensive work — it freezes ALL requests.\n\nBlocking operations: `while (true)`, heavy loops, crypto operations, large JSON parsing. They hold the call stack and nothing else runs.\n\nThe fix: **yield control** back to the event loop. Use `setImmediate` (Node.js) or break work into chunks. For truly heavy CPU work, use worker threads (separate OS threads).\n\nYou'll build a non-blocking processor that handles large arrays without freezing.",
      example: { lang: "js", code: "// BLOCKING: freezes everything\nfunction processAll(items) {\n  items.forEach(item => heavyWork(item)); // takes 5 seconds\n}\n\n// NON-BLOCKING: yields control\nfunction processChunk(items, start, end) {\n  const chunk = items.slice(start, end);\n  chunk.forEach(item => heavyWork(item));\n  if (end < items.length) {\n    setImmediate(() => processChunk(items, end, end + 1000));\n  }\n}" },
      steps: [
        { text: "Create `heavyWork(item)` function that simulates CPU work (count to 1M).",
          test: "T.expect(typeof heavyWork === 'function', 'Define heavyWork(item) function');\nlet count = 0;\nheavyWork('test');\nT.expect(count > 0, 'heavyWork should do some work');" },
        { text: "Create `processBlocking(items)` that processes all items synchronously (blocks).",
          test: "T.expect(typeof processBlocking === 'function', 'Define processBlocking(items)');\nprocessBlocking(['a', 'b']);\nT.expect(T.logged('processed a'), 'Should process each item');" },
        { text: "Create `processNonBlocking(items, chunkSize)` that processes in chunks with setImmediate.",
          test: "T.expect(typeof processNonBlocking === 'function', 'Define processNonBlocking(items, chunkSize)');\nprocessNonBlocking(['a', 'b', 'c'], 2);\nT.expect(T.logged('chunk complete'), 'Should process in chunks');" },
        { text: "Test that non-blocking version allows other code to run between chunks.",
          test: "let otherRan = false;\nprocessNonBlocking(['a', 'b', 'c', 'd', 'e'], 2);\nsetImmediate(() => otherRan = true);\nsetTimeout(() => T.expect(otherRan, 'Other code should run between chunks'), 100);" }
      ],
      files: [
        { name: "script.js", content: "// Simulating CPU work\nfunction heavyWork(item) {\n  // Simulate CPU-intensive operation\n  let count = 0;\n  for (let i = 0; i < 1000000; i++) {\n    count++;\n  }\n  console.log('processed', item);\n}\n\n// BLOCKING: processes everything at once\nfunction processBlocking(items) {\n  // Process all items synchronously\n}\n\n// NON-BLOCKING: processes in chunks, yields control\nfunction processNonBlocking(items, chunkSize = 1000) {\n  // Process items in chunks, use setImmediate to yield\n}\n\n// Test with a large array\nconst largeArray = Array.from({ length: 10000 }, (_, i) => `item-${i}`);\n\nconsole.log('Starting blocking process...');\n// processBlocking(largeArray.slice(0, 100)); // Comment out to test non-blocking\n\nconsole.log('Starting non-blocking process...');\nprocessNonBlocking(largeArray, 1000);\n" }
      ],
      hints: [
        "For `processBlocking`: just `items.forEach(item => heavyWork(item));` — this blocks the event loop",
        "For `processNonBlocking`: `const chunk = items.slice(0, chunkSize); chunk.forEach(heavyWork);` then `setImmediate(() => processNonBlocking(items.slice(chunkSize), chunkSize));`",
        "The key is `setImmediate` — it yields control to the event loop before continuing, allowing other callbacks to run."
      ],
      solution: {
        "script.js": "// Simulating CPU work\nfunction heavyWork(item) {\n  let count = 0;\n  for (let i = 0; i < 1000000; i++) {\n    count++;\n  }\n  console.log('processed', item);\n}\n\n// BLOCKING: processes everything at once\nfunction processBlocking(items) {\n  items.forEach(item => heavyWork(item));\n}\n\n// NON-BLOCKING: processes in chunks, yields control\nfunction processNonBlocking(items, chunkSize = 1000) {\n  const chunk = items.slice(0, chunkSize);\n  chunk.forEach(heavyWork);\n  console.log('chunk complete');\n  const remaining = items.slice(chunkSize);\n  if (remaining.length > 0) {\n    setImmediate(() => processNonBlocking(remaining, chunkSize));\n  } else {\n    console.log('all done');\n  }\n}\n\n// Test with a large array\nconst largeArray = Array.from({ length: 10000 }, (_, i) => `item-${i}`);\n\nconsole.log('Starting non-blocking process...');\nprocessNonBlocking(largeArray, 1000);\n"
      }
    },

    {
      id: "nodejs-u1-4",
      title: "Error handling in async code",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Async errors are tricky. They don't throw in the usual try/catch sense — they happen in a different tick of the event loop.\n\n**Callbacks**: first argument is error (`err, data` pattern). Always check `if (err)`.\n\n**Promises**: use `.catch()` or `try/catch` with `await`. Unhandled rejections crash Node.js (in older versions) or emit warnings.\n\n**Async/await**: looks sync, but errors still need handling. Use try/catch blocks.\n\nYou'll build an async error handler that wraps all three patterns and surfaces errors consistently.",
      example: { lang: "js", code: "// Callback pattern\nfs.readFile('file.txt', (err, data) => {\n  if (err) {\n    console.error('Failed:', err);\n    return;\n  }\n  console.log(data);\n});\n\n// Promise pattern\nreadFile('file.txt')\n  .then(data => console.log(data))\n  .catch(err => console.error(err));\n\n// Async/await\ntry {\n  const data = await readFile('file.txt');\n  console.log(data);\n} catch (err) {\n  console.error(err);\n}" },
      steps: [
        { text: "Create `asyncOperation(callback)` that simulates async work with 50% failure rate.",
          test: "T.expect(typeof asyncOperation === 'function', 'Define asyncOperation(callback)');\nlet called = false;\nasyncOperation(() => called = true);\nT.expect(called, 'Callback should be called');" },
        { text: "Callback should receive `(err, result)` — err on failure, result on success.",
          test: "let err, result;\nasyncOperation((e, r) => { err = e; result = r; });\nT.expect(err === null || typeof err === 'object', 'First arg should be error or null');\nT.expect(result === undefined || typeof result === 'string', 'Second arg should be result or undefined');" },
        { text: "Create `safeCallback(fn)` wrapper that catches errors and logs them.",
          test: "T.expect(typeof safeCallback === 'function', 'Define safeCallback(fn) wrapper');\nsafeCallback((err, data) => { if (err) throw err; });\n// Should not throw even if callback does" },
        { text: "Create `promiseOperation()` that returns a Promise, rejects on failure.",
          test: "T.expect(typeof promiseOperation === 'function', 'Define promiseOperation() returning Promise');\nconst p = promiseOperation();\nT.expect(p instanceof Promise, 'Should return a Promise');" },
        { text: "Create `safePromise(p)` wrapper that catches and logs unhandled rejections.",
          test: "T.expect(typeof safePromise === 'function', 'Define safePromise(p) wrapper');\nsafePromise(promiseOperation());\n// Should handle rejection gracefully" }
      ],
      files: [
        { name: "script.js", content: "// Simulated async operation with random failure\nfunction asyncOperation(callback) {\n  // Simulate async work with setTimeout\n  // 50% chance of failure: callback(err, null)\n  // 50% chance of success: callback(null, result)\n}\n\n// Wrapper to make callbacks safe from throwing\nfunction safeCallback(fn) {\n  // Wrap callback to catch errors\n}\n\n// Promise version of async operation\nfunction promiseOperation() {\n  // Return Promise that resolves or rejects\n}\n\n// Wrapper to handle unhandled rejections\nfunction safePromise(promise) {\n  // Attach .catch() to prevent unhandled rejection\n}\n\n// Test all patterns\nconsole.log('Testing callback pattern...');\nasyncOperation((err, result) => {\n  if (err) console.error('Callback error:', err.message);\n  else console.log('Callback result:', result);\n});\n\nconsole.log('Testing promise pattern...');\nsafePromise(promiseOperation())\n  .then(result => console.log('Promise result:', result))\n  .catch(err => console.error('Promise error:', err.message));\n" }
      ],
      hints: [
        "In `asyncOperation`: use `setTimeout(() => { const success = Math.random() > 0.5; if (success) callback(null, 'success'); else callback(new Error('failed'), null); }, 100);`",
        "In `safeCallback`: return a function that try/catches the original: `return (...args) => { try { fn(...args); } catch (err) { console.error('Callback threw:', err); } };`",
        "In `promiseOperation`: return `new Promise((resolve, reject) => { asyncOperation((err, result) => { if (err) reject(err); else resolve(result); }); });`",
        "In `safePromise`: just `promise.catch(err => console.error('Unhandled rejection:', err.message));`"
      ],
      solution: {
        "script.js": "// Simulated async operation with random failure\nfunction asyncOperation(callback) {\n  setTimeout(() => {\n    const success = Math.random() > 0.5;\n    if (success) {\n      callback(null, 'success');\n    } else {\n      callback(new Error('failed'), null);\n    }\n  }, 100);\n}\n\n// Wrapper to make callbacks safe from throwing\nfunction safeCallback(fn) {\n  return (...args) => {\n    try {\n      fn(...args);\n    } catch (err) {\n      console.error('Callback threw:', err.message);\n    }\n  };\n}\n\n// Promise version of async operation\nfunction promiseOperation() {\n  return new Promise((resolve, reject) => {\n    asyncOperation((err, result) => {\n      if (err) reject(err);\n      else resolve(result);\n    });\n  });\n}\n\n// Wrapper to handle unhandled rejections\nfunction safePromise(promise) {\n  promise.catch(err => console.error('Unhandled rejection:', err.message));\n}\n\n// Test all patterns\nconsole.log('Testing callback pattern...');\nasyncOperation((err, result) => {\n  if (err) console.error('Callback error:', err.message);\n  else console.log('Callback result:', result);\n});\n\nconsole.log('Testing promise pattern...');\nsafePromise(promiseOperation())\n  .then(result => console.log('Promise result:', result))\n  .catch(err => console.error('Promise error:', err.message));\n"
      }
    },

    {
      id: "nodejs-u1-5",
      title: "setImmediate vs process.nextTick vs setTimeout",
      kind: "js", chip: "NODE", xp: 15, mins: 13,
      brief: "Three ways to defer execution in Node.js, with different timing:\n\n- `process.nextTick()`: **immediately after** current operation, before I/O callbacks. Use for critical cleanup.\n- `setImmediate()`: **after I/O callbacks**, in the next event loop iteration. Use for less urgent work.\n- `setTimeout(fn, 0)`: **after macrotask queue**, minimum 1ms delay. Slowest of the three.\n\nThe order: `nextTick` → `setImmediate` → `setTimeout(..., 0)`. Misusing these can cause performance issues or starvation.",
      example: { lang: "js", code: "console.log('start');\nprocess.nextTick(() => console.log('nextTick'));\nsetImmediate(() => console.log('setImmediate'));\nsetTimeout(() => console.log('setTimeout'), 0);\nconsole.log('end');\n// Output: start → end → nextTick → setImmediate → setTimeout" },
      steps: [
        { text: "Create `defer(fn, method)` function that supports 'nextTick', 'setImmediate', 'setTimeout'.",
          test: "T.expect(typeof defer === 'function', 'Define defer(fn, method)');\nlet called = false;\ndefer(() => called = true, 'setTimeout');\nsetTimeout(() => T.expect(called, 'Deferred function should be called'), 50);" },
        { text: "Implement 'nextTick' using process.nextTick (or queueMicrotask in browser).",
          test: "let order = [];\ndefer(() => order.push('nextTick'), 'nextTick');\ndefer(() => order.push('sync'), 'sync');\nT.expect(order.join(','), 'sync,nextTick', 'nextTick should run after sync but before other deferrals');" },
        { text: "Implement 'setImmediate' using setImmediate (or setTimeout 0 in browser).",
          test: "let order = [];\ndefer(() => order.push('immediate'), 'setImmediate');\ndefer(() => order.push('timeout'), 'setTimeout');\nsetTimeout(() => T.expect(order.join(','), 'immediate,timeout', 'setImmediate should run before setTimeout 0'), 50);" },
        { text: "Test the full ordering: sync → nextTick → setImmediate → setTimeout.",
          test: "let fullOrder = [];\nconsole.log('sync');\nfullOrder.push('sync');\ndefer(() => { console.log('nextTick'); fullOrder.push('nextTick'); }, 'nextTick');\ndefer(() => { console.log('immediate'); fullOrder.push('immediate'); }, 'setImmediate');\ndefer(() => { console.log('timeout'); fullOrder.push('timeout'); }, 'setTimeout');\nsetTimeout(() => T.expect(fullOrder.join(','), 'sync,nextTick,immediate,timeout', 'Full order must be correct'), 100);" }
      ],
      files: [
        { name: "script.js", content: "// Universal defer function supporting different timing methods\nfunction defer(fn, method = 'setImmediate') {\n  // Support: 'nextTick', 'setImmediate', 'setTimeout'\n  // In browser, use queueMicrotask for nextTick, setTimeout for others\n}\n\n// Test the ordering\nconsole.log('1. sync start');\n\ndefer(() => console.log('2. nextTick'), 'nextTick');\n\ndefer(() => console.log('3. setImmediate'), 'setImmediate');\n\ndefer(() => console.log('4. setTimeout'), 'setTimeout');\n\nconsole.log('5. sync end');\n\n// Expected order: 1, 5, 2, 3, 4\n" }
      ],
      hints: [
        "For browser compatibility: `method === 'nextTick' ? queueMicrotask(fn) : method === 'setImmediate' ? setTimeout(fn, 0) : setTimeout(fn, 1);`",
        "In Node.js you'd use `process.nextTick` and `setImmediate`, but in browser we use `queueMicrotask` and `setTimeout`",
        "The key is that queueMicrotask runs before setTimeout 0, mimicking the nextTick vs setImmediate difference."
      ],
      solution: {
        "script.js": "// Universal defer function supporting different timing methods\nfunction defer(fn, method = 'setImmediate') {\n  switch (method) {\n    case 'nextTick':\n      queueMicrotask(fn);\n      break;\n    case 'setImmediate':\n      setTimeout(fn, 0);\n      break;\n    case 'setTimeout':\n      setTimeout(fn, 1);\n      break;\n    default:\n      setTimeout(fn, 0);\n  }\n}\n\n// Test the ordering\nconsole.log('1. sync start');\n\ndefer(() => console.log('2. nextTick'), 'nextTick');\n\ndefer(() => console.log('3. setImmediate'), 'setImmediate');\n\ndefer(() => console.log('4. setTimeout'), 'setTimeout');\n\nconsole.log('5. sync end');\n\n// Expected order: 1, 5, 2, 3, 4\n"
      }
    },

    {
      id: "nodejs-quiz-1",
      title: "Unit 1 quiz: Event loop & async model",
      kind: "quiz", xp: 10,
      brief: "The single-threaded model, microtasks vs macrotasks, blocking, error handling, and timing methods. 80% to pass.",
      questions: [
        { q: "Node.js handles thousands of concurrent connections with how many threads?",
          choices: ["One thread per connection", "A fixed thread pool", "A single thread with an event loop", "No threads — pure kernel scheduling"],
          answer: 2, explain: "One thread runs JavaScript, but I/O is offloaded to the OS. The event loop coordinates callbacks when I/O completes — that's how one thread serves many connections." },
        { q: "What's the output order?",
          code: "console.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');",
          lang: "js",
          choices: ["A → B → C → D", "A → D → C → B", "A → D → B → C", "D → A → C → B"],
          answer: 1, explain: "Sync code runs first (A, D), then ALL microtasks (C), then ONE macrotask (B). Promises are microtasks, setTimeout is a macrotask." },
        { q: "Which operation BLOCKS the event loop?",
          choices: ["fs.readFile()", "http.request()", "A while(true) loop", "setTimeout()"],
          answer: 2, explain: "I/O (fs, network, timers) is non-blocking in Node.js. CPU work (loops, crypto, heavy computation) blocks the single thread while it runs." },
        { q: "How do you handle errors in a callback?",
          choices: ["try/catch around the callback call", "First argument is error, check if (err)", "The callback throws on error", "Callbacks can't have errors"],
          answer: 1, explain: "Node.js callbacks follow the error-first callback pattern: `callback(err, result)`. Always check `if (err)` before using the result." },
        { q: "Which runs FIRST?",
          choices: ["setTimeout(fn, 0)", "setImmediate(fn)", "process.nextTick(fn)", "They all run at the same time"],
          answer: 2, explain: "process.nextTick runs immediately after the current operation, before I/O callbacks. setImmediate runs after I/O, setTimeout(..., 0) runs after macrotasks with minimum 1ms delay." },
        { q: "What happens if you don't catch a Promise rejection?",
          choices: ["Nothing, it's silently ignored", "It throws in the current try/catch", "Node.js logs a warning (or crashes in older versions)", "The promise retries automatically"],
          answer: 2, explain: "Unhandled Promise rejections are a bug. In Node.js < 15 they crash the process; in newer versions they emit warnings. Always chain .catch()." }
      ]
    }
  ]
});