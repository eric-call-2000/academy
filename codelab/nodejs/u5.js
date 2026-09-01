/* Node.js Deep Dive — Unit 5: Error Handling & Debugging */
window.CODELAB.addUnit("nodejs", {
  id: "nodejs-u5",
  title: "Error Handling & Debugging",
  icon: "🐛",
  blurb: "Robust error handling patterns, debugging techniques, logging, and monitoring production Node.js applications.",
  cheat: [
    { h: "Error handling patterns", lang: "js", code: "// Synchronous errors\ntry {\n  JSON.parse(invalidJson);\n} catch (err) {\n  console.error('Parse error:', err.message);\n}\n\n// Async errors (Promises)\npromise.catch(err => console.error(err));\n\n// Async errors (async/await)\ntry {\n  await asyncOperation();\n} catch (err) {\n  console.error(err);\n}", note: "Always handle errors. Unhandled rejections crash Node.js (older versions) or emit warnings." },
    { h: "Custom error classes", lang: "js", code: "class AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n    this.isOperational = true;\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\nthrow new AppError('Resource not found', 404);", note: "Custom errors carry additional context (status codes, error codes) and distinguish operational errors from bugs." },
    { h: "Debugging with node inspect", lang: "js", code: "// Start with debugger\nnode inspect app.js\n\n// Or add debugger statement\ndebugger;\n\n// Debug commands\n// cont, next, step, out, repl\n// watchers, backtrace", note: "Use Chrome DevTools with node --inspect for graphical debugging. Much better than console.log debugging." },
    { h: "Production logging", lang: "js", code: "const pino = require('pino');\nconst logger = pino({\n  level: 'info',\n  transport: {\n    target: 'pino-pretty',\n    options: { colorize: true }\n  }\n});\n\nlogger.info({ userId: 123 }, 'User logged in');\nlogger.error(err, 'Operation failed');", note: "Use structured logging (JSON) for production. Include context (userId, requestId) in every log entry. Avoid console.log in production." }
  ],
  lessons: [

    {
      id: "nodejs-u5-1",
      title: "Error types: operational vs programmer errors",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Not all errors are equal. **Operational errors** are expected (file not found, network timeout). **Programmer errors** are bugs (undefined is not a function, typos).\n\n**Operational**: Handle gracefully with try/catch, inform user, retry if appropriate.\n**Programmer**: Should crash the process (fail fast) and be fixed in code.\n\nDistinguishing between them is critical for error handling strategy.",
      example: { lang: "js", code: "// Operational error (expected)\ntry {\n  const data = fs.readFileSync('config.json');\n} catch (err) {\n  if (err.code === 'ENOENT') {\n    console.log('Config not found, using defaults');\n  } else {\n    throw err; // unexpected\n  }\n}\n\n// Programmer error (bug)\nconst user = getUser();\nconsole.log(user.name); // CRASH if user is undefined\n// Should have: if (!user) throw new Error('User not found');" },
      steps: [
        { text: "Create `isOperationalError(error)` function to classify errors.",
          test: "T.expect(typeof isOperationalError === 'function', 'Create isOperationalError() function');\nconst opErr = { code: 'ENOENT', message: 'File not found' };\nT.expect(isOperationalError(opErr), 'ENOENT should be operational');" },
        { text: "Recognize common operational error codes (ENOENT, EACCES, ETIMEDOUT).",
          test: "T.expect(isOperationalError({ code: 'EACCES' }), 'EACCES should be operational');\nT.expect(isOperationalError({ code: 'ETIMEDOUT' }), 'ETIMEDOUT should be operational');" },
        { text: "Programmer errors (TypeError, ReferenceError) should return false.",
          test: "const progErr = new TypeError('undefined is not a function');\nT.expect(!isOperationalError(progErr), 'TypeError should be programmer error');" },
        { text: "Create error handler that handles operational errors differently.",
          test: "T.expect(typeof handleError === 'function', 'Create handleError() function');\nhandleError({ code: 'ENOENT' });\nT.expect(T.logged('Operational error'), 'Should handle operational errors gracefully');" }
      ],
      files: [
        { name: "script.js", content: "// Error classification and handling\n\nfunction isOperationalError(error) {\n  // Return true for operational errors, false for programmer errors\n  // Operational: ENOENT, EACCES, ETIMEDOUT, ECONNREFUSED\n  // Programmer: TypeError, ReferenceError, SyntaxError\n}\n\nfunction handleError(error) {\n  if (isOperationalError(error)) {\n    console.log('Operational error:', error.message);\n    console.log('Handling gracefully...');\n  } else {\n    console.error('Programmer error (bug):', error.message);\n    console.error('This should be fixed in code!');\n    // In production, this would crash the process\n  }\n}\n\n// Test with different error types\nconst operationalErrors = [\n  { code: 'ENOENT', message: 'File not found' },\n  { code: 'EACCES', message: 'Permission denied' },\n  { code: 'ETIMEDOUT', message: 'Connection timeout' },\n  { code: 'ECONNREFUSED', message: 'Connection refused' }\n];\n\nconst programmerErrors = [\n  new TypeError('undefined is not a function'),\n  new ReferenceError('user is not defined'),\n  new SyntaxError('Unexpected token')\n];\n\nconsole.log('Testing operational errors:');\noperationalErrors.forEach(err => handleError(err));\n\nconsole.log('\\nTesting programmer errors:');\nprogrammerErrors.forEach(err => handleError(err));\n" }
      ],
      hints: [
        "In `isOperationalError()`: check if error has an operational code or is an instance of common programmer error types",
        "Operational codes: ENOENT, EACCES, ETIMEDOUT, ECONNREFUSED, EPIPE",
        "Programmer errors: TypeError, ReferenceError, SyntaxError — these are bugs in code"
      ],
      solution: {
        "script.js": "// Error classification and handling\n\nfunction isOperationalError(error) {\n  const operationalCodes = ['ENOENT', 'EACCES', 'ETIMEDOUT', 'ECONNREFUSED', 'EPIPE'];\n  if (error.code && operationalCodes.includes(error.code)) {\n    return true;\n  }\n  if (error instanceof TypeError || error instanceof ReferenceError || error instanceof SyntaxError) {\n    return false;\n  }\n  return true; // default to operational for unknown errors\n}\n\nfunction handleError(error) {\n  if (isOperationalError(error)) {\n    console.log('Operational error:', error.message);\n    console.log('Handling gracefully...');\n  } else {\n    console.error('Programmer error (bug):', error.message);\n    console.error('This should be fixed in code!');\n  }\n}\n\n// Test with different error types\nconst operationalErrors = [\n  { code: 'ENOENT', message: 'File not found' },\n  { code: 'EACCES', message: 'Permission denied' },\n  { code: 'ETIMEDOUT', message: 'Connection timeout' },\n  { code: 'ECONNREFUSED', message: 'Connection refused' }\n];\n\nconst programmerErrors = [\n  new TypeError('undefined is not a function'),\n  new ReferenceError('user is not defined'),\n  new SyntaxError('Unexpected token')\n];\n\nconsole.log('Testing operational errors:');\noperationalErrors.forEach(err => handleError(err));\n\nconsole.log('\\nTesting programmer errors:');\nprogrammerErrors.forEach(err => handleError(err));\n"
      }
    },

    {
      id: "nodejs-u5-2",
      title: "Custom error classes",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Built-in Error objects are generic. **Custom error classes** carry additional context: HTTP status codes, error codes, user-friendly messages.\n\nExtend `Error` and add custom properties. Use `Error.captureStackTrace()` for proper stack traces.\n\nCustom errors make error handling more precise and user-friendly.",
      example: { lang: "js", code: "class AppError extends Error {\n  constructor(message, statusCode, errorCode) {\n    super(message);\n    this.statusCode = statusCode;\n    this.errorCode = errorCode;\n    this.isOperational = true;\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\nclass NotFoundError extends AppError {\n  constructor(resource) {\n    super(`${resource} not found`, 404, 'NOT_FOUND');\n  }\n}\n\nthrow new NotFoundError('User');\n// { message: 'User not found', statusCode: 404, errorCode: 'NOT_FOUND' }" },
      steps: [
        { text: "Create `AppError` base class extending Error.",
          test: "T.expect(typeof AppError === 'function', 'Create AppError class');\nconst err = new AppError('test', 500);\nT.expect(err instanceof Error, 'Should extend Error');\nT.expect(err.message, 'test', 'Should have message');" },
        { text: "Add statusCode, errorCode, and isOperational properties.",
          test: "const err2 = new AppError('fail', 404, 'NOT_FOUND');\nT.eq(err2.statusCode, 404, 'Should have statusCode');\nT.eq(err2.errorCode, 'NOT_FOUND', 'Should have errorCode');\nT.expect(err2.isOperational, 'Should be marked operational');" },
        { text: "Create specific error classes: NotFoundError, ValidationError.",
          test: "T.expect(typeof NotFoundError === 'function', 'Create NotFoundError class');\nT.expect(typeof ValidationError === 'function', 'Create ValidationError class');\nconst notFound = new NotFoundError('User');\nT.eq(notFound.statusCode, 404, 'NotFoundError should have 404 status');" },
        { text: "ValidationError should accept field and message details.",
          test: "const validation = new ValidationError('email', 'Invalid email format');\nT.eq(validation.field, 'email', 'Should have field property');\nT.eq(validation.statusCode, 400, 'ValidationError should have 400 status');" }
      ],
      files: [
        { name: "script.js", content: "// Custom error classes\n\nclass AppError extends Error {\n  constructor(message, statusCode = 500, errorCode = 'INTERNAL_ERROR') {\n    super(message);\n    this.statusCode = statusCode;\n    this.errorCode = errorCode;\n    this.isOperational = true;\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\nclass NotFoundError extends AppError {\n  constructor(resource) {\n    super(`${resource} not found`, 404, 'NOT_FOUND');\n    this.resource = resource;\n  }\n}\n\nclass ValidationError extends AppError {\n  constructor(field, message) {\n    super(`Validation failed: ${message}`, 400, 'VALIDATION_ERROR');\n    this.field = field;\n  }\n}\n\nclass UnauthorizedError extends AppError {\n  constructor(message = 'Unauthorized') {\n    super(message, 401, 'UNAUTHORIZED');\n  }\n}\n\n// Test the custom errors\nconsole.log('Testing NotFoundError:');\ntry {\n  throw new NotFoundError('User');\n} catch (err) {\n  console.log('Message:', err.message);\n  console.log('Status:', err.statusCode);\n  console.log('Code:', err.errorCode);\n  console.log('Resource:', err.resource);\n}\n\nconsole.log('\\nTesting ValidationError:');\ntry {\n  throw new ValidationError('email', 'Invalid email format');\n} catch (err) {\n  console.log('Message:', err.message);\n  console.log('Status:', err.statusCode);\n  console.log('Field:', err.field);\n}\n\nconsole.log('\\nTesting UnauthorizedError:');\ntry {\n  throw new UnauthorizedError('Invalid token');\n} catch (err) {\n  console.log('Message:', err.message);\n  console.log('Status:', err.statusCode);\n  console.log('Code:', err.errorCode);\n}\n\nconsole.log('\\nTesting error instance checks:');\nconst err = new NotFoundError('Test');\nconsole.log('Is AppError?', err instanceof AppError);\nconsole.log('Is Error?', err instanceof Error);\nconsole.log('Is operational?', err.isOperational);\n" }
      ],
      hints: [
        "For AppError: set custom properties in constructor, call Error.captureStackTrace for proper stack traces",
        "For NotFoundError: call super with message, set this.resource",
        "For ValidationError: call super with message, set this.field and this.message"
      ],
      solution: {
        "script.js": "// Custom error classes\n\nclass AppError extends Error {\n  constructor(message, statusCode = 500, errorCode = 'INTERNAL_ERROR') {\n    super(message);\n    this.statusCode = statusCode;\n    this.errorCode = errorCode;\n    this.isOperational = true;\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\nclass NotFoundError extends AppError {\n  constructor(resource) {\n    super(`${resource} not found`, 404, 'NOT_FOUND');\n    this.resource = resource;\n  }\n}\n\nclass ValidationError extends AppError {\n  constructor(field, message) {\n    super(`Validation failed: ${message}`, 400, 'VALIDATION_ERROR');\n    this.field = field;\n  }\n}\n\nclass UnauthorizedError extends AppError {\n  constructor(message = 'Unauthorized') {\n    super(message, 401, 'UNAUTHORIZED');\n  }\n}\n\n// Test the custom errors\nconsole.log('Testing NotFoundError:');\ntry {\n  throw new NotFoundError('User');\n} catch (err) {\n  console.log('Message:', err.message);\n  console.log('Status:', err.statusCode);\n  console.log('Code:', err.errorCode);\n  console.log('Resource:', err.resource);\n}\n\nconsole.log('\\nTesting ValidationError:');\ntry {\n  throw new ValidationError('email', 'Invalid email format');\n} catch (err) {\n  console.log('Message:', err.message);\n  console.log('Status:', err.statusCode);\n  console.log('Field:', err.field);\n}\n\nconsole.log('\\nTesting UnauthorizedError:');\ntry {\n  throw new UnauthorizedError('Invalid token');\n} catch (err) {\n  console.log('Message:', err.message);\n  console.log('Status:', err.statusCode);\n  console.log('Code:', err.errorCode);\n}\n\nconsole.log('\\nTesting error instance checks:');\nconst err = new NotFoundError('Test');\nconsole.log('Is AppError?', err instanceof AppError);\nconsole.log('Is Error?', err instanceof Error);\nconsole.log('Is operational?', err.isOperational);\n"
      }
    },

    {
      id: "nodejs-u5-3",
      title: "Global error handling and uncaught exceptions",
      kind: "js", chip: "NODE", xp: 15, mins: 13,
      brief: "Errors can escape your try/catch blocks. Node.js provides global handlers for these cases:\n\n- `uncaughtException` — synchronous exceptions that bubble to the top\n- `unhandledRejection` — Promise rejections without .catch()\n- `unhandledRejection` is now a warning (not crash) in newer Node.js\n\nThese handlers are your last line of defense. Log the error, cleanup, then exit.",
      example: { lang: "js", code: "process.on('uncaughtException', (err) => {\n  console.error('UNCAUGHT EXCEPTION:', err);\n  // Cleanup: close connections, flush logs\n  process.exit(1); // Always exit\n});\n\nprocess.on('unhandledRejection', (reason, promise) => {\n  console.error('UNHANDLED REJECTION:', reason);\n  // Log and monitor, but don't necessarily exit\n});\n\n// Test\nPromise.reject(new Error('test')); // triggers unhandledRejection\nthrow new Error('test'); // triggers uncaughtException" },
      steps: [
        { text: "Create global error handlers for uncaughtException and unhandledRejection.",
          test: "T.expect(typeof uncaughtHandler === 'function', 'Create uncaughtHandler function');\nT.expect(typeof rejectionHandler === 'function', 'Create rejectionHandler function');" },
        { text: "Register handlers with process.on (simulated with callbacks).",
          test: "T.expect(typeof process.on === 'function', 'process should have .on() method');\nprocess.on('uncaughtException', uncaughtHandler);\nprocess.on('unhandledRejection', rejectionHandler);" },
        { text: "Simulate uncaught exception and verify handler is called.",
          test: "simulateUncaughtException(new Error('Test error'));\nT.expect(T.logged('UNCAUGHT EXCEPTION'), 'Should log uncaught exception');" },
        { text: "Simulate unhandled rejection and verify handler is called.",
          test: "simulateUnhandledRejection(new Error('Test rejection'));\nT.expect(T.logged('UNHANDLED REJECTION'), 'Should log unhandled rejection');" }
      ],
      files: [
        { name: "script.js", content: "// Global error handling\n\nconst process = {\n  handlers: {},\n  on(event, handler) {\n    if (!this.handlers[event]) {\n      this.handlers[event] = [];\n    }\n    this.handlers[event].push(handler);\n  },\n  emit(event, ...args) {\n    if (this.handlers[event]) {\n      this.handlers[event].forEach(handler => handler(...args));\n    }\n  }\n};\n\nfunction uncaughtHandler(err) {\n  console.error('UNCAUGHT EXCEPTION:', err.message);\n  console.error('Stack:', err.stack);\n  console.log('Cleaning up and exiting...');\n  // In real Node.js: process.exit(1);\n}\n\nfunction rejectionHandler(reason, promise) {\n  console.error('UNHANDLED REJECTION:', reason.message || reason);\n  console.log('Promise:', promise);\n  // Log for monitoring, but don't exit\n}\n\n// Register handlers\nprocess.on('uncaughtException', uncaughtHandler);\nprocess.on('unhandledRejection', rejectionHandler);\n\n// Simulate errors\nfunction simulateUncaughtException(err) {\n  process.emit('uncaughtException', err);\n}\n\nfunction simulateUnhandledRejection(reason) {\n  process.emit('unhandledRejection', reason, Promise.reject(reason));\n}\n\nconsole.log('Testing uncaught exception...');\nsimulateUncaughtException(new Error('Something went wrong'));\n\nconsole.log('\\nTesting unhandled rejection...');\nsimulateUnhandledRejection(new Error('Async operation failed'));\n\nconsole.log('\\nApplication continues (in real Node.js, uncaughtException would exit)');\n" }
      ],
      hints: [
        "Create a mock process object with on() and emit() methods to simulate event handling",
        "In handlers, log the error details including message and stack trace",
        "In real Node.js, uncaughtException should always exit the process — the state is corrupted"
      ],
      solution: {
        "script.js": "// Global error handling\n\nconst process = {\n  handlers: {},\n  on(event, handler) {\n    if (!this.handlers[event]) {\n      this.handlers[event] = [];\n    }\n    this.handlers[event].push(handler);\n  },\n  emit(event, ...args) {\n    if (this.handlers[event]) {\n      this.handlers[event].forEach(handler => handler(...args));\n    }\n  }\n};\n\nfunction uncaughtHandler(err) {\n  console.error('UNCAUGHT EXCEPTION:', err.message);\n  console.error('Stack:', err.stack);\n  console.log('Cleaning up and exiting...');\n}\n\nfunction rejectionHandler(reason, promise) {\n  console.error('UNHANDLED REJECTION:', reason.message || reason);\n  console.log('Promise:', promise);\n}\n\n// Register handlers\nprocess.on('uncaughtException', uncaughtHandler);\nprocess.on('unhandledRejection', rejectionHandler);\n\n// Simulate errors\nfunction simulateUncaughtException(err) {\n  process.emit('uncaughtException', err);\n}\n\nfunction simulateUnhandledRejection(reason) {\n  process.emit('unhandledRejection', reason, Promise.reject(reason));\n}\n\nconsole.log('Testing uncaught exception...');\nsimulateUncaughtException(new Error('Something went wrong'));\n\nconsole.log('\\nTesting unhandled rejection...');\nsimulateUnhandledRejection(new Error('Async operation failed'));\n\nconsole.log('\\nApplication continues (in real Node.js, uncaughtException would exit)');\n"
      }
    },

    {
      id: "nodejs-u5-4",
      title: "Debugging techniques and tools",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Debugging Node.js goes beyond console.log. Key techniques:\n\n- **node inspect** — CLI debugger with breakpoints, stepping\n- **Chrome DevTools** — graphical debugging with `node --inspect`\n- **debugger statement** — programmatic breakpoint\n- **--inspect-brk** — pause on first line\n- **NODE_DEBUG** — debug specific modules\n\nChrome DevTools is the most powerful — set breakpoints, inspect variables, step through code.",
      example: { lang: "js", code: "// app.js\nfunction buggyFunction(arr) {\n  debugger; // breakpoint here\n  return arr.map(x => x * 2).filter(x => x > 10);\n}\n\n// Run with: node --inspect-brk app.js\n// Then open chrome://inspect in Chrome\n\n// Or use CLI debugger\n// $ node inspect app.js\n// < debugger listening on ws://127.0.0.1:9229\n// debug> cont\n// debug> next\n// debug> repl\n// debug> quit" },
      steps: [
        { text: "Create a mock debugger with breakpoint support.",
          test: "T.expect(typeof debugger === 'object', 'Create debugger object');\nT.expect(typeof debugger.setBreakpoint === 'function', 'Should have setBreakpoint method');" },
        { text: "Implement step execution: step into, step over, step out.",
          test: "T.expect(typeof debugger.stepInto === 'function', 'Should have stepInto method');\nT.expect(typeof debugger.stepOver === 'function', 'Should have stepOver method');\nT.expect(typeof debugger.stepOut === 'function', 'Should have stepOut method');" },
        { text: "Add variable inspection at breakpoints.",
          test: "T.expect(typeof debugger.inspect === 'function', 'Should have inspect method');\nconst context = { x: 5, y: 10 };\nT.eq(debugger.inspect('x', context), 5, 'Should inspect variable in context');" },
        { text: "Simulate debugging a buggy function with breakpoints.",
          test: "debugger.setBreakpoint('buggyFunction', 1);\nconst result = buggyFunction([1, 2, 3, 4, 5]);\nT.expect(T.logged('Breakpoint hit'), 'Should hit breakpoint');" }
      ],
      files: [
        { name: "script.js", content: "// Mock debugger for debugging techniques\n\nconst debugger = {\n  breakpoints: new Map(),\n  callStack: [],\n  currentContext: {},\n\n  setBreakpoint(functionName, lineNumber) {\n    console.log(`Breakpoint set at ${functionName}:${lineNumber}`);\n    this.breakpoints.set(`${functionName}:${lineNumber}`, true);\n  },\n\n  hitBreakpoint(functionName, lineNumber, context) {\n    const key = `${functionName}:${lineNumber}`;\n    if (this.breakpoints.has(key)) {\n      console.log(`\\n=== Breakpoint hit at ${functionName}:${lineNumber} ===`);\n      this.currentContext = context;\n      this.callStack.push({ function: functionName, line: lineNumber, context });\n      return true;\n    }\n    return false;\n  },\n\n  stepInto() {\n    console.log('Stepping into function...');\n  },\n\n  stepOver() {\n    console.log('Stepping over line...');\n  },\n\n  stepOut() {\n    console.log('Stepping out of function...');\n  },\n\n  inspect(variableName) {\n    if (variableName in this.currentContext) {\n      console.log(`${variableName} =`, this.currentContext[variableName]);\n      return this.currentContext[variableName];\n    }\n    console.log(`${variableName} is not defined in current context`);\n    return undefined;\n  },\n\n  continue() {\n    console.log('Continuing execution...');\n  },\n\n  getCallStack() {\n    return this.callStack;\n  }\n};\n\n// Buggy function to debug\nfunction buggyFunction(arr) {\n  let result = [];\n  \n  // Breakpoint here\n  if (debugger.hitBreakpoint('buggyFunction', 1, { arr, result })) {\n    debugger.inspect('arr');\n    debugger.stepOver();\n  }\n  \n  for (let i = 0; i < arr.length; i++) {\n    const doubled = arr[i] * 2;\n    \n    // Another breakpoint\n    if (debugger.hitBreakpoint('buggyFunction', 2, { i, arr, doubled })) {\n      debugger.inspect('i');\n      debugger.inspect('doubled');\n    }\n    \n    if (doubled > 10) {\n      result.push(doubled);\n    }\n  }\n  \n  return result;\n}\n\n// Set breakpoints and debug\nconsole.log('=== Starting debugging session ===');\ndebugger.setBreakpoint('buggyFunction', 1);\ndebugger.setBreakpoint('buggyFunction', 2);\n\nconsole.log('\\nCalling buggyFunction...');\nconst input = [1, 2, 3, 4, 5, 6, 7];\nconst output = buggyFunction(input);\n\nconsole.log('\\n=== Debugging session complete ===');\nconsole.log('Input:', input);\nconsole.log('Output:', output);\nconsole.log('\\nCall stack:', debugger.getCallStack());\n" }
      ],
      hints: [
        "Create a debugger object that tracks breakpoints, call stack, and current execution context",
        "When a breakpoint is hit, pause execution and allow inspection of variables",
        "Support basic debugger commands: stepInto, stepOver, stepOut, continue, inspect"
      ],
      solution: {
        "script.js": "// Mock debugger for debugging techniques\n\nconst debugger = {\n  breakpoints: new Map(),\n  callStack: [],\n  currentContext: {},\n\n  setBreakpoint(functionName, lineNumber) {\n    console.log(`Breakpoint set at ${functionName}:${lineNumber}`);\n    this.breakpoints.set(`${functionName}:${lineNumber}`, true);\n  },\n\n  hitBreakpoint(functionName, lineNumber, context) {\n    const key = `${functionName}:${lineNumber}`;\n    if (this.breakpoints.has(key)) {\n      console.log(`\\n=== Breakpoint hit at ${functionName}:${lineNumber} ===`);\n      this.currentContext = context;\n      this.callStack.push({ function: functionName, line: lineNumber, context });\n      return true;\n    }\n    return false;\n  },\n\n  stepInto() {\n    console.log('Stepping into function...');\n  },\n\n  stepOver() {\n    console.log('Stepping over line...');\n  },\n\n  stepOut() {\n    console.log('Stepping out of function...');\n  },\n\n  inspect(variableName) {\n    if (variableName in this.currentContext) {\n      console.log(`${variableName} =`, this.currentContext[variableName]);\n      return this.currentContext[variableName];\n    }\n    console.log(`${variableName} is not defined in current context`);\n    return undefined;\n  },\n\n  continue() {\n    console.log('Continuing execution...');\n  },\n\n  getCallStack() {\n    return this.callStack;\n  }\n};\n\n// Buggy function to debug\nfunction buggyFunction(arr) {\n  let result = [];\n  \n  if (debugger.hitBreakpoint('buggyFunction', 1, { arr, result })) {\n    debugger.inspect('arr');\n    debugger.stepOver();\n  }\n  \n  for (let i = 0; i < arr.length; i++) {\n    const doubled = arr[i] * 2;\n    \n    if (debugger.hitBreakpoint('buggyFunction', 2, { i, arr, doubled })) {\n      debugger.inspect('i');\n      debugger.inspect('doubled');\n    }\n    \n    if (doubled > 10) {\n      result.push(doubled);\n    }\n  }\n  \n  return result;\n}\n\n// Set breakpoints and debug\nconsole.log('=== Starting debugging session ===');\ndebugger.setBreakpoint('buggyFunction', 1);\ndebugger.setBreakpoint('buggyFunction', 2);\n\nconsole.log('\\nCalling buggyFunction...');\nconst input = [1, 2, 3, 4, 5, 6, 7];\nconst output = buggyFunction(input);\n\nconsole.log('\\n=== Debugging session complete ===');\nconsole.log('Input:', input);\nconsole.log('Output:', output);\nconsole.log('\\nCall stack:', debugger.getCallStack());\n"
      }
    },

    {
      id: "nodejs-u5-5",
      title: "Logging and monitoring",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Production logging is different from console.log. Use **structured logging** (JSON format) with context: userId, requestId, timestamps.\n\n**Log levels**: error, warn, info, debug, trace\n**Context**: always include relevant metadata\n**Output**: JSON for parsing, pretty-printed in dev\n**Rotation**: prevent log files from growing indefinitely\n\nStructured logs are machine-readable and searchable in log aggregators.",
      example: { lang: "js", code: "const pino = require('pino');\n\nconst logger = pino({\n  level: 'info',\n  base: { pid: process.pid },\n  timestamp: pino.stdTimeFunctions.isoTime\n});\n\nlogger.info({ userId: 123, action: 'login' }, 'User logged in');\nlogger.error({ err, userId: 123 }, 'Login failed');\n\n// Output:\n// {\"level\":\"info\",\"time\":...,\"msg\":\"User logged in\",\"userId\":123,\"action\":\"login\"}" },
      steps: [
        { text: "Create a structured logger with log levels.",
          test: "T.expect(typeof logger === 'object', 'Create logger object');\nT.expect(typeof logger.info === 'function', 'Should have info method');\nT.expect(typeof logger.error === 'function', 'Should have error method');" },
        { text: "Logger should output JSON format with timestamp and level.",
          test: "logger.info('test message');\nT.expect(T.logged('\"level\"'), 'Should output JSON with level field');\nT.expect(T.logged('\"timestamp\"'), 'Should output JSON with timestamp');" },
        { text: "Support context objects merged into log output.",
          test: "logger.info({ userId: 123 }, 'User action');\nT.expect(T.logged('\"userId\"'), 'Should include context in JSON output');" },
        { text: "Add log level filtering (only show logs at or above set level).",
          test: "logger.level = 'warn';\nlogger.info('info message');\nlogger.warn('warn message');\nT.expect(!T.logged('info message'), 'Should filter info logs when level is warn');\nT.expect(T.logged('warn message'), 'Should show warn logs');" }
      ],
      files: [
        { name: "script.js", content: "// Structured logger\n\nconst logger = {\n  level: 'info',\n  levels: { trace: 0, debug: 1, info: 2, warn: 3, error: 4 },\n\n  log(level, context, message) {\n    if (this.levels[level] < this.levels[this.level]) {\n      return; // Skip logs below current level\n    }\n    const logEntry = {\n      timestamp: new Date().toISOString(),\n      level: level,\n      message: message,\n      ...context\n    };\n    console.log(JSON.stringify(logEntry));\n  },\n\n  trace(context, message) {\n    this.log('trace', context, message);\n  },\n\n  debug(context, message) {\n    this.log('debug', context, message);\n  },\n\n  info(context, message) {\n    this.log('info', context, message);\n  },\n\n  warn(context, message) {\n    this.log('warn', context, message);\n  },\n\n  error(context, message) {\n    this.log('error', context, message);\n  },\n\n  setLevel(level) {\n    if (level in this.levels) {\n      this.level = level;\n      console.log(`Log level set to: ${level}`);\n    }\n  }\n};\n\n// Test the logger\nconsole.log('=== Testing structured logger ===');\n\nlogger.info({ userId: 123, action: 'login' }, 'User logged in');\nlogger.warn({ userId: 123, attempt: 3 }, 'Multiple failed login attempts');\nlogger.error({ userId: 123, error: 'Invalid credentials' }, 'Login failed');\nlogger.debug({ userId: 123, session: 'abc123' }, 'Session created');\n\nconsole.log('\\n=== Setting log level to warn ===');\nlogger.setLevel('warn');\n\nlogger.info({ userId: 456 }, 'This info log should not appear');\nlogger.warn({ userId: 456 }, 'This warn log should appear');\nlogger.error({ userId: 456 }, 'This error log should appear');\n\nconsole.log('\\n=== Setting log level to debug ===');\nlogger.setLevel('debug');\n\nlogger.debug({ userId: 789 }, 'Debug information');\nlogger.trace({ userId: 789 }, 'Trace information (should not appear)');\n" }
      ],
      hints: [
        "Create a logger object with methods for each log level (trace, debug, info, warn, error)",
        "Each method should log JSON with timestamp, level, message, and any context object",
        "Implement level filtering: only log if the level is >= the current set level"
      ],
      solution: {
        "script.js": "// Structured logger\n\nconst logger = {\n  level: 'info',\n  levels: { trace: 0, debug: 1, info: 2, warn: 3, error: 4 },\n\n  log(level, context, message) {\n    if (this.levels[level] < this.levels[this.level]) {\n      return;\n    }\n    const logEntry = {\n      timestamp: new Date().toISOString(),\n      level: level,\n      message: message,\n      ...context\n    };\n    console.log(JSON.stringify(logEntry));\n  },\n\n  trace(context, message) {\n    this.log('trace', context, message);\n  },\n\n  debug(context, message) {\n    this.log('debug', context, message);\n  },\n\n  info(context, message) {\n    this.log('info', context, message);\n  },\n\n  warn(context, message) {\n    this.log('warn', context, message);\n  },\n\n  error(context, message) {\n    this.log('error', context, message);\n  },\n\n  setLevel(level) {\n    if (level in this.levels) {\n      this.level = level;\n      console.log(`Log level set to: ${level}`);\n    }\n  }\n};\n\n// Test the logger\nconsole.log('=== Testing structured logger ===');\n\nlogger.info({ userId: 123, action: 'login' }, 'User logged in');\nlogger.warn({ userId: 123, attempt: 3 }, 'Multiple failed login attempts');\nlogger.error({ userId: 123, error: 'Invalid credentials' }, 'Login failed');\nlogger.debug({ userId: 123, session: 'abc123' }, 'Session created');\n\nconsole.log('\\n=== Setting log level to warn ===');\nlogger.setLevel('warn');\n\nlogger.info({ userId: 456 }, 'This info log should not appear');\nlogger.warn({ userId: 456 }, 'This warn log should appear');\nlogger.error({ userId: 456 }, 'This error log should appear');\n\nconsole.log('\\n=== Setting log level to debug ===');\nlogger.setLevel('debug');\n\nlogger.debug({ userId: 789 }, 'Debug information');\nlogger.trace({ userId: 789 }, 'Trace information (should not appear)');\n"
      }
    },

    {
      id: "nodejs-quiz-5",
      title: "Unit 5 quiz: Error Handling & Debugging",
      kind: "quiz", xp: 10,
      brief: "Error types, custom errors, global handlers, debugging, and logging. 80% to pass.",
      questions: [
        { q: "What's the difference between operational and programmer errors?",
          choices: ["No difference, they're the same", "Operational errors are expected, programmer errors are bugs", "Operational errors crash the process, programmer errors are handled", "Programmer errors are expected, operational errors are bugs"],
          answer: 1, explain: "Operational errors (file not found, network timeout) are expected and should be handled. Programmer errors (undefined is not a function) are bugs that should be fixed." },
        { q: "Why use custom error classes?",
          choices: ["They make errors prettier", "They carry additional context like status codes and error codes", "They prevent errors from happening", "They're required by Node.js"],
          answer: 1, explain: "Custom errors carry context: HTTP status codes, error codes, user-friendly messages. This makes error handling more precise and user-friendly." },
        { q: "What does the uncaughtException handler do?",
          choices: ["Logs warnings for unhandled Promise rejections", "Catches synchronous exceptions that bubble to the top", "Handles HTTP errors", "Validates user input"],
          answer: 1, explain: "uncaughtException catches synchronous exceptions that escape all try/catch blocks. It's your last line of defense — log and exit." },
        { q: "How do you debug Node.js with Chrome DevTools?",
          choices: ["node --debug app.js", "node --inspect app.js then open chrome://inspect", "node app.js --chrome", "Add // debug comments to code"],
          answer: 1, explain: "Run with node --inspect, then open chrome://inspect in Chrome. This gives you a full graphical debugger with breakpoints and variable inspection." },
        { q: "Why use structured logging (JSON) instead of console.log?",
          choices: ["JSON is faster to write", "Structured logs are machine-readable and searchable in log aggregators", "console.log doesn't work in production", "JSON uses less disk space"],
          answer: 1, explain: "Structured logging outputs JSON with consistent fields (timestamp, level, context). This makes logs searchable and parseable by tools like ELK, Splunk, etc." },
        { q: "What should you do when an uncaught exception occurs?",
          choices: ["Ignore it and continue", "Log the error and continue", "Log the error, cleanup resources, and exit the process", "Restart the server immediately"],
          answer: 2, explain: "Log the error details, cleanup (close connections, flush logs), then exit. The process state is corrupted after an uncaught exception — continuing is dangerous." }
      ]
    }
  ]
});