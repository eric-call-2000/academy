/* Node.js Deep Dive — Unit 6: Performance & Clustering */
window.CODELAB.addUnit("nodejs", {
  id: "nodejs-u6",
  title: "Performance & Clustering",
  icon: "🚀",
  blurb: "Optimizing Node.js performance: profiling, clustering for multi-core CPUs, memory management, and production patterns.",
  cheat: [
    { h: "Cluster module for multi-core", lang: "js", code: "const cluster = require('cluster');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n} else {\n  // Worker process\n  require('./server');\n}", note: "Node.js is single-threaded by default. Clustering forks workers across CPU cores for parallel processing." },
    { h: "Memory leaks detection", lang: "js", code: "// Enable heap snapshots\nnode --inspect app.js\n\n// In Chrome DevTools:\n// 1. Take initial snapshot\n// 2. Perform actions\n// 3. Take comparison snapshot\n// 4. Look for objects that shouldn't be retained\n\n// Or use heapdump package\nconst heapdump = require('heapdump');\nheapdump.writeSnapshot('/path/to/snapshot.heapsnapshot');", note: "Common leaks: global variables, unclosed event emitters, cache without limits, callbacks with closures." },
    { h: "Performance profiling", lang: "js", code: "const { performance, PerformanceObserver } = require('perf_hooks');\n\nconst obs = new PerformanceObserver((list) => {\n  const entries = list.getEntries();\n  entries.forEach(entry => {\n    console.log(entry.name, entry.duration);\n  });\n});\nobs.observe({ entryTypes: ['measure'] });\n\nperformance.mark('start');\n// ... code ...\nperformance.mark('end');\nperformance.measure('operation', 'start', 'end');", note: "Use built-in perf_hooks for micro-benchmarks. Use clinic.js for production profiling." },
    { h: "Production patterns", lang: "js", code: "// Graceful shutdown\nprocess.on('SIGTERM', () => {\n  server.close(() => {\n    console.log('Server closed');\n    process.exit(0);\n  });\n  // Force close after timeout\n  setTimeout(() => process.exit(1), 10000);\n});\n\n// Health check\napp.get('/health', (req, res) => {\n  res.json({ status: 'healthy', uptime: process.uptime() });\n});", note: "Always implement graceful shutdown. Keep connections open until in-flight requests complete. Add health checks for load balancers." }
  ],
  lessons: [

    {
      id: "nodejs-u6-1",
      title: "Understanding Node.js single-threaded limitations",
      node: true, kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Node.js runs on a single CPU core by default. Even with async I/O, CPU-intensive tasks block the event loop and limit throughput.\n\n**The problem**: A 4-core server running Node.js only uses 25% of its CPU capacity by default.\n\n**The solution**: **Clustering** — fork multiple Node.js processes, one per CPU core. Each process handles its own event loop, sharing the server port.\n\nYou'll simulate a cluster to understand how it distributes load.",
      example: { lang: "js", code: "const cluster = require('cluster');\nconst os = require('os');\n\nif (cluster.isMaster) {\n  const numCPUs = os.cpus().length;\n  console.log(`Master ${process.pid} is running`);\n  \n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n} else {\n  console.log(`Worker ${process.pid} started`);\n  // Worker runs your server\n}" },
      steps: [
        { text: "Create a mock cluster system with master and worker processes.",
          test: "T.expect(typeof cluster === 'object', 'Create cluster object');\nT.expect(typeof cluster.isMaster === 'boolean', 'Should have isMaster property');" },
        { text: "Implement cluster.fork() to create worker processes.",
          test: "T.expect(typeof cluster.fork === 'function', 'Add fork() method');\nconst worker = cluster.fork();\nT.expect(worker.pid, 'Worker should have pid');" },
        { text: "Simulate CPU cores detection and fork one worker per core.",
          test: "const numCPUs = 4; // Simulated\ncluster.workers.length = 0;      // steps share one session — reset first\nfor (let i = 0; i < numCPUs; i++) {\n  cluster.fork();\n}\nT.eq(cluster.workers.length, 4, 'Should fork one worker per CPU core');" },
        { text: "Workers should share the same server port (simulated).",
          test: "cluster.workers.forEach(w => w.port = 3000);\nconst uniquePorts = [...new Set(cluster.workers.map(w => w.port))];\nT.eq(uniquePorts.length, 1, 'All workers should share the same port');" }
      ],
      files: [
        { name: "script.js", content: "// Mock cluster system for multi-core processing\n\nconst cluster = {\n  isMaster: true,\n  workers: [],\n  nextPid: 1000,\n\n  fork() {\n    // TODO: build a worker { pid, isWorker, connected, port }, taking the next\n    // pid from this.nextPid, push it onto this.workers, log that it started,\n    // and return it.\n  },\n\n  disconnect(worker) {\n    worker.connected = false;\n    console.log(`Worker ${worker.pid} disconnected`);\n  },\n\n  getWorkerCount() {\n    return this.workers.filter(w => w.connected).length;\n  }\n};\n\nconst os = {\n  cpus() {\n    // Simulate CPU detection\n    return Array(4).fill({ model: 'CPU Core' });\n  }\n};\n\n// Simulate cluster setup\nif (cluster.isMaster) {\n  console.log(`Master ${process.pid} is running`);\n  \n  const numCPUs = os.cpus().length;\n  console.log(`Detected ${numCPUs} CPU cores`);\n  \n  // Fork one worker per CPU core\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n  \n  console.log(`Cluster running with ${cluster.getWorkerCount()} workers`);\n  \n  // Simulate worker disconnect\n  setTimeout(() => {\n    console.log('\\nSimulating worker disconnect...');\n    cluster.disconnect(cluster.workers[0]);\n    console.log(`Active workers: ${cluster.getWorkerCount()}`);\n  }, 1000);\n} else {\n  console.log(`Worker ${process.pid} started`);\n}\n" }
      ],
      hints: [
        "Create a cluster object that tracks workers with PIDs and connection status",
        "The isMaster property determines if the process is the master or a worker",
        "In real Node.js, workers automatically share the server port — the OS handles load balancing"
      ],
      solution: {
        "script.js": "// Mock cluster system for multi-core processing\n\nconst cluster = {\n  isMaster: true,\n  workers: [],\n  nextPid: 1000,\n\n  fork() {\n    const worker = {\n      pid: this.nextPid++,\n      isWorker: true,\n      connected: true,\n      port: 3000\n    };\n    this.workers.push(worker);\n    console.log(`Worker ${worker.pid} started`);\n    return worker;\n  },\n\n  disconnect(worker) {\n    worker.connected = false;\n    console.log(`Worker ${worker.pid} disconnected`);\n  },\n\n  getWorkerCount() {\n    return this.workers.filter(w => w.connected).length;\n  }\n};\n\nconst os = {\n  cpus() {\n    return Array(4).fill({ model: 'CPU Core' });\n  }\n};\n\n// Simulate cluster setup\nif (cluster.isMaster) {\n  console.log(`Master ${process.pid} is running`);\n  \n  const numCPUs = os.cpus().length;\n  console.log(`Detected ${numCPUs} CPU cores`);\n  \n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n  \n  console.log(`Cluster running with ${cluster.getWorkerCount()} workers`);\n  \n  setTimeout(() => {\n    console.log('\\nSimulating worker disconnect...');\n    cluster.disconnect(cluster.workers[0]);\n    console.log(`Active workers: ${cluster.getWorkerCount()}`);\n  }, 1000);\n} else {\n  console.log(`Worker ${process.pid} started`);\n}\n"
      }
    },

    {
      id: "nodejs-u6-2",
      title: "Load balancing in clusters",
      kind: "js", chip: "NODE", xp: 15, mins: 13,
      brief: "When you have multiple workers, how do requests get distributed? **Load balancing**.\n\nNode.js clusters use **round-robin** load balancing by default (except on Windows). The OS distributes incoming connections across workers.\n\n**Worker communication**: Workers can send messages to each other via the master process using `process.send()` and `process.on('message')`.\n\nYou'll implement a simple load balancer that distributes requests across workers.",
      example: { lang: "js", code: "const cluster = require('cluster');\n\nif (cluster.isMaster) {\n  let workerIndex = 0;\n  \n  // Simple round-robin load balancer\n  function getNextWorker() {\n    const worker = Object.values(cluster.workers)[workerIndex];\n    workerIndex = (workerIndex + 1) % Object.keys(cluster.workers).length;\n    return worker;\n  }\n  \n  // Handle incoming requests\n  server.on('request', (req) => {\n    const worker = getNextWorker();\n    worker.send({ request: req });\n  });\n}" },
      steps: [
        { text: "Create a load balancer that tracks requests and distributes them.",
          test: "T.expect(typeof loadBalancer === 'object', 'Create loadBalancer object');\nT.expect(typeof loadBalancer.getNextWorker === 'function', 'Should have getNextWorker method');" },
        { text: "Implement round-robin distribution across workers.",
          test: "const workers = [{ id: 1 }, { id: 2 }, { id: 3 }];\nloadBalancer.workers = workers;\nconst w1 = loadBalancer.getNextWorker();\nconst w2 = loadBalancer.getNextWorker();\nconst w3 = loadBalancer.getNextWorker();\nT.eq(w1.id, 1, 'First request to worker 1');\nT.eq(w2.id, 2, 'Second request to worker 2');\nT.eq(w3.id, 3, 'Third request to worker 3');" },
        { text: "Load balancer should cycle back to first worker after last.",
          test: "const w4 = loadBalancer.getNextWorker();\nT.eq(w4.id, 1, 'Should cycle back to first worker');" },
        { text: "Track request count per worker for monitoring.",
          test: "loadBalancer.workers.forEach(w => w.requestCount = 0);\nfor (let i = 0; i < 6; i++) loadBalancer.getNextWorker();\nT.eq(loadBalancer.workers[0].requestCount, 2, 'Each worker should get equal requests');" }
      ],
      files: [
        { name: "script.js", content: "// Load balancer for cluster\n\nconst loadBalancer = {\n  workers: [],\n  currentIndex: 0,\n  totalRequests: 0,\n\n  setWorkers(workers) {\n    this.workers = workers.map(w => ({\n      ...w,\n      requestCount: 0,\n      activeConnections: 0\n    }));\n    this.currentIndex = 0;\n  },\n\n  getNextWorker() {\n    // TODO: throw if there are no workers. Otherwise take the worker at\n    // currentIndex, count the request against it, advance currentIndex with\n    // modulo so it wraps back to 0, and return the worker.\n  },\n\n  releaseWorker(worker) {\n    worker.activeConnections--;\n  },\n\n  getStats() {\n    return {\n      totalRequests: this.totalRequests,\n      workers: this.workers.map(w => ({\n        id: w.id,\n        requestCount: w.requestCount,\n        activeConnections: w.activeConnections\n      }))\n    };\n  }\n};\n\n// Simulate workers\nconst workers = [\n  { id: 'worker-1', pid: 1001 },\n  { id: 'worker-2', pid: 1002 },\n  { id: 'worker-3', pid: 1003 },\n  { id: 'worker-4', pid: 1004 }\n];\n\nloadBalancer.setWorkers(workers);\n\nconsole.log('=== Load Balancer Demo ===');\nconsole.log(`Workers: ${workers.length}`);\n\n// Simulate incoming requests\nfor (let i = 1; i <= 12; i++) {\n  const worker = loadBalancer.getNextWorker();\n  console.log(`Request ${i} → ${worker.id} (PID: ${worker.pid})`);\n  \n  // Simulate request completion\n  setTimeout(() => loadBalancer.releaseWorker(worker), 50);\n}\n\nconsole.log('\\n=== Load Balancer Stats ===');\nconst stats = loadBalancer.getStats();\nconsole.log(`Total requests: ${stats.totalRequests}`);\nstats.workers.forEach(w => {\n  console.log(`${w.id}: ${w.requestCount} requests, ${w.activeConnections} active`);\n});\n" }
      ],
      hints: [
        "Implement round-robin by cycling through workers array with modulo operator",
        "Track request count and active connections per worker for monitoring",
        "Release workers when requests complete to track active connections accurately"
      ],
      solution: {
        "script.js": "// Load balancer for cluster\n\nconst loadBalancer = {\n  workers: [],\n  currentIndex: 0,\n  totalRequests: 0,\n\n  setWorkers(workers) {\n    this.workers = workers.map(w => ({\n      ...w,\n      requestCount: 0,\n      activeConnections: 0\n    }));\n    this.currentIndex = 0;\n  },\n\n  getNextWorker() {\n    if (this.workers.length === 0) {\n      throw new Error('No workers available');\n    }\n    \n    const worker = this.workers[this.currentIndex];\n    worker.requestCount++;\n    worker.activeConnections++;\n    \n    this.currentIndex = (this.currentIndex + 1) % this.workers.length;\n    this.totalRequests++;\n    \n    return worker;\n  },\n\n  releaseWorker(worker) {\n    worker.activeConnections--;\n  },\n\n  getStats() {\n    return {\n      totalRequests: this.totalRequests,\n      workers: this.workers.map(w => ({\n        id: w.id,\n        requestCount: w.requestCount,\n        activeConnections: w.activeConnections\n      }))\n    };\n  }\n};\n\n// Simulate workers\nconst workers = [\n  { id: 'worker-1', pid: 1001 },\n  { id: 'worker-2', pid: 1002 },\n  { id: 'worker-3', pid: 1003 },\n  { id: 'worker-4', pid: 1004 }\n];\n\nloadBalancer.setWorkers(workers);\n\nconsole.log('=== Load Balancer Demo ===');\nconsole.log(`Workers: ${workers.length}`);\n\n// Simulate incoming requests\nfor (let i = 1; i <= 12; i++) {\n  const worker = loadBalancer.getNextWorker();\n  console.log(`Request ${i} → ${worker.id} (PID: ${worker.pid})`);\n  \n  setTimeout(() => loadBalancer.releaseWorker(worker), 50);\n}\n\nconsole.log('\\n=== Load Balancer Stats ===');\nconst stats = loadBalancer.getStats();\nconsole.log(`Total requests: ${stats.totalRequests}`);\nstats.workers.forEach(w => {\n  console.log(`${w.id}: ${w.requestCount} requests, ${w.activeConnections} active`);\n});\n"
      }
    },

    {
      id: "nodejs-u6-3",
      title: "Memory management and garbage collection",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Node.js has automatic garbage collection, but memory leaks still happen. Understanding GC helps you write better code.\n\n**Memory leak sources**:\n- Global variables\n- Unclosed event emitters\n- Caches without limits\n- Closures holding references\n- Timers not cleared\n\n**GC triggers**: When heap approaches limit, Node.js runs garbage collection. You can force it with `--gc-global` or `--expose-gc` flags.",
      example: { lang: "js", code: "// Memory leak: growing cache\nconst cache = {};\n\nfunction addToCache(key, value) {\n  cache[key] = value; // Never removes old entries\n}\n\n// Fixed: use LRU cache with size limit\nconst LRU = require('lru-cache');\nconst cache = new LRU({ max: 1000 });\n\n// Memory leak: uncleared timer\nsetInterval(() => {\n  heavyOperation();\n}, 1000); // Never cleared\n\n// Fixed: save timer ID and clear it\nconst timer = setInterval(() => heavyOperation(), 1000);\nclearInterval(timer);" },
      steps: [
        { text: "Create a memory tracker that simulates heap usage.",
          test: "T.expect(typeof memoryTracker === 'object', 'Create memoryTracker object');\nT.expect(typeof memoryTracker.allocate === 'function', 'Should have allocate method');" },
        { text: "Implement allocate(size) that increases heap usage.",
          test: "memoryTracker.heapUsed = 0;          // the demo above already allocated\nmemoryTracker.allocate(100);\nT.eq(memoryTracker.heapUsed, 100, 'Should track heap usage');" },
        { text: "Implement free(size) that decreases heap usage (simulate GC).",
          test: "memoryTracker.free(50);\nT.eq(memoryTracker.heapUsed, 50, 'Should decrease heap when memory is freed');\nmemoryTracker.free(999);\nT.eq(memoryTracker.heapUsed, 0, 'Freeing more than is held should floor at zero, not go negative');" },
        { text: "Detect memory leaks when heap grows without being freed.",
          test: "memoryTracker.heapUsed = 0;\nmemoryTracker.allocationsSinceFree = 0;\nT.expect(!memoryTracker.detectLeak(), 'A healthy heap is not a leak');\nfor (let i = 0; i < 10; i++) memoryTracker.allocate(100);\nT.expect(memoryTracker.detectLeak(), 'Should detect memory leak when heap grows');" }
      ],
      files: [
        { name: "script.js", content: "// Memory tracker and leak detection\nconst memoryTracker = {\n  heapUsed: 0,\n  heapLimit: 1000,\n  allocationsSinceFree: 0,\n\n  allocate(size) {\n    // TODO: grow heapUsed by size, count the allocation, log it, and call\n    // triggerGC() if the heap has gone past heapLimit.\n  },\n\n  free(size) {\n    // TODO: shrink heapUsed by size (never below 0), reset the\n    // allocations-since-free counter, and log it.\n  },\n\n  triggerGC() {\n    console.log('Garbage collection triggered');\n  },\n\n  detectLeak() {\n    // TODO: report a leak when the heap is at 80% of the limit, or when more\n    // than five allocations have gone by without a single free.\n  },\n\n  getStats() {\n    return {\n      heapUsed: this.heapUsed,\n      heapLimit: this.heapLimit,\n      allocationsSinceFree: this.allocationsSinceFree\n    };\n  }\n};\n\nconsole.log('=== Memory demo ===');\nmemoryTracker.allocate(100);\nmemoryTracker.allocate(200);\nmemoryTracker.free(100);\nconsole.log('Stats:', memoryTracker.getStats());\n" }
      ],
      hints: [
        "Track allocations with IDs, sizes, and timestamps to detect old unfreed allocations",
        "Simulate GC by freeing old allocations when heap limit is approached",
        "Detect leaks when many old allocations remain unfreed"
      ],
      solution: {
        "script.js": "// Memory tracker and leak detection\nconst memoryTracker = {\n  heapUsed: 0,\n  heapLimit: 1000,\n  allocationsSinceFree: 0,\n\n  allocate(size) {\n    this.heapUsed += size;\n    this.allocationsSinceFree++;\n    console.log(`Allocated ${size} (heap: ${this.heapUsed})`);\n    if (this.heapUsed > this.heapLimit) {\n      this.triggerGC();\n    }\n    return this.heapUsed;\n  },\n\n  free(size) {\n    this.heapUsed = Math.max(0, this.heapUsed - size);\n    this.allocationsSinceFree = 0;\n    console.log(`Freed ${size} (heap: ${this.heapUsed})`);\n    return this.heapUsed;\n  },\n\n  triggerGC() {\n    console.log('Garbage collection triggered');\n  },\n\n  // A leak is growth nobody ever reclaims: either the heap is close to its\n  // limit, or a long run of allocations has gone by without a single free.\n  detectLeak() {\n    return this.heapUsed >= this.heapLimit * 0.8 || this.allocationsSinceFree > 5;\n  },\n\n  getStats() {\n    return {\n      heapUsed: this.heapUsed,\n      heapLimit: this.heapLimit,\n      allocationsSinceFree: this.allocationsSinceFree\n    };\n  }\n};\n\n// Normal usage: allocate, then give it back\nconsole.log('=== Memory demo ===');\nmemoryTracker.allocate(100);\nmemoryTracker.allocate(200);\nmemoryTracker.free(100);\nconsole.log('Stats:', memoryTracker.getStats());\nconsole.log('Leaking?', memoryTracker.detectLeak());\n"
      }
    },

    {
      id: "nodejs-u6-4",
      title: "Performance profiling with perf_hooks",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Node.js has built-in performance measurement with the `perf_hooks` module. It's perfect for micro-benchmarks and measuring specific operations.\n\n**Key functions**:\n- `performance.mark(name)` — create a timestamp marker\n- `performance.measure(name, start, end)` — measure duration between marks\n- `PerformanceObserver` — observe performance entries\n\nFor production profiling, use tools like `clinic.js` or Chrome DevTools.",
      example: { lang: "js", code: "const { performance, PerformanceObserver } = require('perf_hooks');\n\nconst obs = new PerformanceObserver((list) => {\n  const entries = list.getEntries();\n  entries.forEach(entry => {\n    console.log(`${entry.name}: ${entry.duration}ms`);\n  });\n});\nobs.observe({ entryTypes: ['measure'] });\n\nperformance.mark('start');\n// ... code to measure ...\nperformance.mark('end');\nperformance.measure('operation', 'start', 'end');" },
      steps: [
        { text: "Create a mock performance module with mark() and measure() functions.",
          test: "T.expect(typeof performance === 'object', 'Create performance object');\nT.expect(typeof performance.mark === 'function', 'Should have mark method');\nT.expect(typeof performance.measure === 'function', 'Should have measure method');" },
        { text: "mark() should store timestamps with unique names.",
          test: "performance.mark('start');\nT.expect(performance.marks['start'], 'Should store mark timestamp');" },
        { text: "measure() should calculate duration between two marks.",
          test: "performance.mark('start');\nperformance.mark('end');\nconst duration = performance.measure('operation', 'start', 'end');\nT.expect(duration >= 0, 'Should calculate non-negative duration');" },
        { text: "Create PerformanceObserver to listen for measurements.",
          test: "T.expect(typeof PerformanceObserver === 'function', 'Create PerformanceObserver class');\nconst obs = new PerformanceObserver((entries) => {});\nT.expect(typeof obs.observe === 'function', 'Should have observe method');" }
      ],
      files: [
        { name: "script.js", content: "// Performance measurement with perf_hooks\n\nconst performance = {\n  marks: {},\n  measures: [],\n\n  mark(name) {\n    // TODO: record the current timestamp under `name` and log it.\n  },\n\n  measure(name, startMark, endMark) {\n    if (!this.marks[startMark] || !this.marks[endMark]) {\n      throw new Error('Marks not found');\n    }\n    \n    const duration = this.marks[endMark] - this.marks[startMark];\n    const measure = {\n      name: name,\n      start: this.marks[startMark],\n      end: this.marks[endMark],\n      duration: duration\n    };\n    \n    this.measures.push(measure);\n    console.log(`Measure: ${name} = ${duration}ms`);\n    \n    return duration;\n  },\n\n  getEntries() {\n    return this.measures;\n  },\n\n  clearMarks() {\n    this.marks = {};\n  },\n\n  clearMeasures() {\n    this.measures = [];\n  }\n};\n\nclass PerformanceObserver {\n  constructor(callback) {\n    this.callback = callback;\n    this.observed = false;\n  }\n\n  observe(options) {\n    this.observed = true;\n    this.entryTypes = options.entryTypes;\n    console.log(`Observing: ${this.entryTypes.join(', ')}`);\n    \n    // Call callback when new measures are added\n    const originalMeasure = performance.measure.bind(performance);\n    performance.measure = (name, start, end) => {\n      const result = originalMeasure(name, start, end);\n      if (this.observed && this.entryTypes.includes('measure')) {\n        this.callback(performance.getEntries());\n      }\n      return result;\n    };\n  }\n}\n\n// Test performance measurement\nconsole.log('=== Performance Measurement Demo ===');\n\nconst obs = new PerformanceObserver((entries) => {\n  console.log('Performance entries:', entries);\n});\nobs.observe({ entryTypes: ['measure'] });\n\n// Measure a simple operation\nperformance.mark('start-array');\nconst arr = Array(10000).fill(0).map((_, i) => i * 2);\nperformance.mark('end-array');\nperformance.measure('array-operation', 'start-array', 'end-array');\n\n// Measure another operation\nperformance.mark('start-sort');\nconst sorted = arr.slice().sort((a, b) => a - b);\nperformance.mark('end-sort');\nperformance.measure('sort-operation', 'start-sort', 'end-sort');\n\nconsole.log('\\n=== All Measurements ===');\nconst allMeasures = performance.getEntries();\nallMeasures.forEach(m => {\n  console.log(`${m.name}: ${m.duration}ms`);\n});\n" }
      ],
      hints: [
        "Store marks with timestamps in an object, calculate duration between marks",
        "PerformanceObserver wraps the measure function to call the callback when new measurements are added",
        "Measure duration is end timestamp minus start timestamp"
      ],
      solution: {
        "script.js": "// Performance measurement with perf_hooks\n\nconst performance = {\n  marks: {},\n  measures: [],\n\n  mark(name) {\n    this.marks[name] = Date.now();\n    console.log(`Mark: ${name}`);\n  },\n\n  measure(name, startMark, endMark) {\n    if (!this.marks[startMark] || !this.marks[endMark]) {\n      throw new Error('Marks not found');\n    }\n    \n    const duration = this.marks[endMark] - this.marks[startMark];\n    const measure = {\n      name: name,\n      start: this.marks[startMark],\n      end: this.marks[endMark],\n      duration: duration\n    };\n    \n    this.measures.push(measure);\n    console.log(`Measure: ${name} = ${duration}ms`);\n    \n    return duration;\n  },\n\n  getEntries() {\n    return this.measures;\n  },\n\n  clearMarks() {\n    this.marks = {};\n  },\n\n  clearMeasures() {\n    this.measures = [];\n  }\n};\n\nclass PerformanceObserver {\n  constructor(callback) {\n    this.callback = callback;\n    this.observed = false;\n  }\n\n  observe(options) {\n    this.observed = true;\n    this.entryTypes = options.entryTypes;\n    console.log(`Observing: ${this.entryTypes.join(', ')}`);\n    \n    const originalMeasure = performance.measure.bind(performance);\n    performance.measure = (name, start, end) => {\n      const result = originalMeasure(name, start, end);\n      if (this.observed && this.entryTypes.includes('measure')) {\n        this.callback(performance.getEntries());\n      }\n      return result;\n    };\n  }\n}\n\n// Test performance measurement\nconsole.log('=== Performance Measurement Demo ===');\n\nconst obs = new PerformanceObserver((entries) => {\n  console.log('Performance entries:', entries);\n});\nobs.observe({ entryTypes: ['measure'] });\n\nperformance.mark('start-array');\nconst arr = Array(10000).fill(0).map((_, i) => i * 2);\nperformance.mark('end-array');\nperformance.measure('array-operation', 'start-array', 'end-array');\n\nperformance.mark('start-sort');\nconst sorted = arr.slice().sort((a, b) => a - b);\nperformance.mark('end-sort');\nperformance.measure('sort-operation', 'start-sort', 'end-sort');\n\nconsole.log('\\n=== All Measurements ===');\nconst allMeasures = performance.getEntries();\nallMeasures.forEach(m => {\n  console.log(`${m.name}: ${m.duration}ms`);\n});\n"
      }
    },

    {
      id: "nodejs-u6-5",
      title: "Graceful shutdown and health checks",
      node: true, kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Production Node.js apps need **graceful shutdown** — finish in-flight requests, close connections, cleanup resources before exiting.\n\n**Signals to handle**:\n- `SIGTERM` — graceful shutdown request (from systemd, Kubernetes, etc.)\n- `SIGINT` — interrupt (Ctrl+C)\n\n**Health checks** are endpoints that report if the service is healthy. Load balancers use them to route traffic away from unhealthy instances.",
      example: { lang: "js", code: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.end('Hello');\n});\n\n// Graceful shutdown\nlet isShuttingDown = false;\n\nprocess.on('SIGTERM', () => {\n  console.log('SIGTERM received');\n  isShuttingDown = true;\n  \n  server.close(() => {\n    console.log('Server closed');\n    process.exit(0);\n  });\n  \n  // Force exit after timeout\n  setTimeout(() => process.exit(1), 10000);\n});\n\n// Health check\napp.get('/health', (req, res) => {\n  if (isShuttingDown) {\n    res.status(503).json({ status: 'shutting_down' });\n  } else {\n    res.json({ status: 'healthy', uptime: process.uptime() });\n  }\n});" },
      steps: [
        { text: "Create a mock server with graceful shutdown support.",
          test: "T.expect(typeof server === 'object', 'Create server object');\nT.expect(typeof server.close === 'function', 'Should have close method');" },
        { text: "Implement signal handlers for SIGTERM and SIGINT.",
          test: "T.expect(typeof process.on === 'function', 'process should have on method');\nprocess.on('SIGTERM', shutdownHandler);\nprocess.on('SIGINT', shutdownHandler);" },
        { text: "Shutdown should close server and cleanup resources.",
          test: "server.isShuttingDown = false;\nprocess.emit('SIGTERM');\nT.expect(T.logged('Received shutdown signal'), 'The SIGTERM handler should run');\nT.expect(server.isShuttingDown, 'Shutdown should mark the server as closing');\nawait T.sleep(160);\nT.expect(T.logged('Server closed'), 'The server should finish closing');\nT.expect(T.logged('Cleanup complete'), 'and cleanup should run afterwards');" },
        { text: "Add health check endpoint that reports server status.",
          test: "T.expect(typeof healthCheck === 'function', 'Create healthCheck function');\nconst health = healthCheck();\nT.expect(health.status, 'Should return status');\nT.eq(health.status, 'shutting_down', 'A closing server must not report itself healthy');\nT.expect(typeof health.uptime === 'number', 'Health should report uptime');" }
      ],
      files: [
        { name: "script.js", content: "// Graceful shutdown and health checks\n\nconst server = {\n  listening: false,\n  connections: 0,\n  isShuttingDown: false,\n\n  listen(port) {\n    this.listening = true;\n    console.log(`Server listening on port ${port}`);\n  },\n\n  close(callback) {\n    console.log('Closing server...');\n    this.listening = false;\n    this.isShuttingDown = true;\n    setTimeout(() => {\n      console.log('Server closed');\n      if (callback) callback();\n    }, 100);\n  },\n\n  trackConnection() {\n    this.connections++;\n  },\n\n  releaseConnection() {\n    this.connections--;\n  }\n};\n\nconst process = {\n  handlers: {},\n  exitCode: 0,\n  startedAt: 0,\n  // Health checks report uptime, so the mock has to offer it too.\n  uptime() { return 42; },\n\n  on(signal, handler) {\n    this.handlers[signal] = handler;\n  },\n\n  emit(signal) {\n    if (this.handlers[signal]) {\n      this.handlers[signal]();\n    }\n  },\n\n  exit(code) {\n    this.exitCode = code;\n    console.log(`Process exiting with code ${code}`);\n  }\n};\n\nfunction shutdownHandler() {\n  // TODO: log that a shutdown signal arrived, close the server and on its\n  // callback log cleanup and exit(0). Also arm a timer that force-exits with\n  // code 1 if the close takes too long.\n}\n\nfunction healthCheck() {\n  // TODO: return { status, uptime, connections, listening } — status is\n  // 'shutting_down' while the server is closing, otherwise 'healthy'.\n}\n\n// Register signal handlers\nprocess.on('SIGTERM', shutdownHandler);\nprocess.on('SIGINT', shutdownHandler);\n\n// Start server\nserver.listen(3000);\n\n// Simulate some connections\nserver.trackConnection();\nserver.trackConnection();\nconsole.log('Active connections:', server.connections);\n\n// Check health\nconsole.log('\\nHealth check:', healthCheck());\n\n// Simulate shutdown signal\nconsole.log('\\n=== Simulating SIGTERM ===');\nprocess.emit('SIGTERM');\n\n// Check health after shutdown\nsetTimeout(() => {\n  console.log('\\nHealth check after shutdown:', healthCheck());\n}, 200);\n" }
      ],
      hints: [
        "Create mock server and process objects to simulate shutdown behavior",
        "Shutdown handler should close the server and exit the process",
        "Health check should reflect server state including shutdown status"
      ],
      solution: {
        "script.js": "// Graceful shutdown and health checks\n\nconst server = {\n  listening: false,\n  connections: 0,\n  isShuttingDown: false,\n\n  listen(port) {\n    this.listening = true;\n    console.log(`Server listening on port ${port}`);\n  },\n\n  close(callback) {\n    console.log('Closing server...');\n    this.listening = false;\n    this.isShuttingDown = true;\n    setTimeout(() => {\n      console.log('Server closed');\n      if (callback) callback();\n    }, 100);\n  },\n\n  trackConnection() {\n    this.connections++;\n  },\n\n  releaseConnection() {\n    this.connections--;\n  }\n};\n\nconst process = {\n  handlers: {},\n  exitCode: 0,\n  startedAt: 0,\n  // Health checks report uptime, so the mock has to offer it too.\n  uptime() { return 42; },\n\n  on(signal, handler) {\n    this.handlers[signal] = handler;\n  },\n\n  emit(signal) {\n    if (this.handlers[signal]) {\n      this.handlers[signal]();\n    }\n  },\n\n  exit(code) {\n    this.exitCode = code;\n    console.log(`Process exiting with code ${code}`);\n  }\n};\n\nfunction shutdownHandler() {\n  console.log('Received shutdown signal');\n  \n  server.close(() => {\n    console.log('Cleanup complete');\n    process.exit(0);\n  });\n  \n  setTimeout(() => {\n    console.log('Forced exit after timeout');\n    process.exit(1);\n  }, 5000);\n}\n\nfunction healthCheck() {\n  return {\n    status: server.isShuttingDown ? 'shutting_down' : 'healthy',\n    uptime: process.uptime(),\n    connections: server.connections,\n    listening: server.listening\n  };\n}\n\nprocess.on('SIGTERM', shutdownHandler);\nprocess.on('SIGINT', shutdownHandler);\n\nserver.listen(3000);\n\nserver.trackConnection();\nserver.trackConnection();\nconsole.log('Active connections:', server.connections);\n\nconsole.log('\\nHealth check:', healthCheck());\n\nconsole.log('\\n=== Simulating SIGTERM ===');\nprocess.emit('SIGTERM');\n\nsetTimeout(() => {\n  console.log('\\nHealth check after shutdown:', healthCheck());\n}, 200);\n"
      }
    },

    {
      id: "nodejs-quiz-6",
      title: "Unit 6 quiz: Performance & Clustering",
      kind: "quiz", xp: 10,
      brief: "Clustering, load balancing, memory management, profiling, and graceful shutdown. 80% to pass.",
      questions: [
        { q: "Why does Node.js only use one CPU core by default?",
          choices: ["It's a limitation of JavaScript", "Node.js is single-threaded by design", "Multiple cores cause bugs", "It's more efficient to use one core"],
          answer: 1, explain: "Node.js runs on a single thread by design. The cluster module forks multiple processes to utilize multiple CPU cores." },
        { q: "How does load balancing work in Node.js clusters?",
          choices: ["Random assignment", "Round-robin distribution", "Master process handles all requests", "Workers bid for requests"],
          answer: 1, explain: "Node.js clusters use round-robin load balancing by default. The OS distributes connections across workers sequentially." },
        { q: "What's a common source of memory leaks in Node.js?",
          choices: ["Using too many variables", "Unclosed event emitters and growing caches", "Async operations", "Using modules"],
          answer: 1, explain: "Common leaks: global variables, unclosed event emitters, caches without size limits, timers not cleared, closures holding references." },
        { q: "How do you measure performance of specific operations?",
          choices: ["console.log with timestamps", "The perf_hooks module with mark() and measure()", "The time command", "Counting operations manually"],
          answer: 1, explain: "Use perf_hooks: performance.mark() for timestamps, performance.measure() to calculate duration between marks. PerformanceObserver to monitor entries." },
        { q: "What signal should you handle for graceful shutdown?",
          choices: ["SIGKILL", "SIGTERM", "SIGUSR1", "SIGPIPE"],
          answer: 1, explain: "SIGTERM is the standard signal for graceful shutdown (from systemd, Kubernetes, etc.). Handle it to close connections and cleanup before exiting." },
        { q: "What's the purpose of a health check endpoint?",
          choices: ["To debug the application", "To report service health to load balancers", "To monitor user activity", "To restart the server"],
          answer: 1, explain: "Health checks report if the service is healthy. Load balancers use them to route traffic away from unhealthy or shutting-down instances." }
      ]
    }
  ]
});