/* Node.js Deep Dive — Unit 4: Modules & npm Ecosystem */
window.CODELAB.addUnit("nodejs", {
  id: "nodejs-u4",
  title: "Modules & npm Ecosystem",
  icon: "📦",
  blurb: "Organizing code with modules: CommonJS vs ES modules, package.json, dependencies, and the npm registry.",
  cheat: [
    { h: "CommonJS (Node.js default)", lang: "js", code: "// Exporting\nmodule.exports.myFunc = () => {};\n// or\nmodule.exports = class MyClass {};\n\n// Importing\nconst { myFunc } = require('./myModule');\nconst MyClass = require('./MyClass');", note: "Node.js uses CommonJS by default. Files are modules, variables are file-scoped." },
    { h: "ES Modules (modern)", lang: "js", code: "// Exporting\nexport const myFunc = () => {};\nexport default class MyClass {}\n\n// Importing\nimport { myFunc } from './myModule.js';\nimport MyClass from './MyClass.js';\n\n// Enable in package.json: \"type\": \"module\"", note: "ES modules use import/export syntax. Require .js extensions in imports. Set \"type\": \"module\" in package.json." },
    { h: "package.json essentials", lang: "json", code: "{\n  \"name\": \"my-project\",\n  \"version\": \"1.0.0\",\n  \"main\": \"index.js\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"start\": \"node index.js\",\n    \"test\": \"jest\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.18.0\"\n  },\n  \"devDependencies\": {\n    \"jest\": \"^29.0.0\"\n  }\n}", note: "package.json defines your project: entry point, scripts, dependencies. Always commit this file." },
    { h: "Dependency version ranges", lang: "json", code: "\"dependencies\": {\n  \"express\": \"4.18.0\",      // exact\n  \"express\": \"^4.18.0\",     // >=4.18.0 <5.0.0 (compatible)\n  \"express\": \"~4.18.0\",     // >=4.18.0 <4.19.0 (patch)\n  \"express\": \"*\",           // any (dangerous)\n  \"express\": \"latest\"       // latest (dangerous)\n}", note: "^ allows compatible updates (minor), ~ allows patch updates only. Exact versions prevent breaking changes." }
  ],
  lessons: [

    {
      id: "nodejs-u4-1",
      title: "CommonJS modules: require and module.exports",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Node.js uses **CommonJS** modules by default. Every file is a module — variables are scoped to that file unless explicitly exported.\n\n**Exporting**: `module.exports` or `exports`\n**Importing**: `require()`\n\nThe `require()` function is synchronous and caches the result — subsequent requires return the same module instance.",
      example: { lang: "js", code: "// math.js\nmodule.exports.add = (a, b) => a + b;\nmodule.exports.subtract = (a, b) => a - b;\n\n// main.js\nconst math = require('./math.js');\nconsole.log(math.add(2, 3)); // 5\n\n// Or destructuring\nconst { add } = require('./math.js');\nconsole.log(add(2, 3)); // 5" },
      steps: [
        { text: "Create a mock module system with `require()` function and module cache.",
          test: "T.expect(typeof require === 'function', 'Create require() function');\nT.expect(typeof moduleCache === 'object', 'Create moduleCache object');" },
        { text: "Implement `defineModule(id, exports)` to register modules.",
          test: "T.expect(typeof defineModule === 'function', 'Add defineModule() function');\ndefineModule('math', { add: (a,b) => a+b });\nT.expect(moduleCache['math'], 'Module should be cached');" },
        { text: "require() should return cached module if already loaded.",
          test: "defineModule('test', { value: 42 });\nconst r1 = require('test');\nconst r2 = require('test');\nT.expect(r1 === r2, 'require() should return same cached instance');" },
        { text: "Support destructuring from required modules.",
          test: "defineModule('utils', { greet: (name) => `Hello ${name}` });\nconst { greet } = require('utils');\nT.eq(greet('World'), 'Hello World', 'Should support destructuring');" }
      ],
      files: [
        { name: "script.js", content: "// Mock CommonJS module system\nconst moduleCache = {};\n\nfunction defineModule(id, exports) {\n  // Register a module in the cache\n}\n\nfunction require(id) {\n  // Return module from cache, or load it\n}\n\n// Define some modules\ndefineModule('math', {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b,\n  multiply: (a, b) => a * b\n});\n\ndefineModule('string', {\n  reverse: (str) => str.split('').reverse().join(''),\n  uppercase: (str) => str.toUpperCase()\n});\n\n// Use the modules\nconst math = require('math');\nconsole.log('Math module:', math);\nconsole.log('2 + 3 =', math.add(2, 3));\nconsole.log('5 - 2 =', math.subtract(5, 2));\n\n// Destructuring\nconst { reverse, uppercase } = require('string');\nconsole.log('Reverse hello:', reverse('hello'));\nconsole.log('Uppercase world:', uppercase('world'));\n\n// Test caching\nconst math2 = require('math');\nconsole.log('Same instance?', math === math2);\n" }
      ],
      hints: [
        "In `defineModule()`: `moduleCache[id] = exports;`",
        "In `require()`: `if (moduleCache[id]) return moduleCache[id]; else throw new Error('Module not found: ' + id);`",
        "The cache ensures modules are only loaded once and shared across all requires"
      ],
      solution: {
        "script.js": "// Mock CommonJS module system\nconst moduleCache = {};\n\nfunction defineModule(id, exports) {\n  moduleCache[id] = exports;\n}\n\nfunction require(id) {\n  if (moduleCache[id]) {\n    return moduleCache[id];\n  }\n  throw new Error('Module not found: ' + id);\n}\n\n// Define some modules\ndefineModule('math', {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b,\n  multiply: (a, b) => a * b\n});\n\ndefineModule('string', {\n  reverse: (str) => str.split('').reverse().join(''),\n  uppercase: (str) => str.toUpperCase()\n});\n\n// Use the modules\nconst math = require('math');\nconsole.log('Math module:', math);\nconsole.log('2 + 3 =', math.add(2, 3));\nconsole.log('5 - 2 =', math.subtract(5, 2));\n\n// Destructuring\nconst { reverse, uppercase } = require('string');\nconsole.log('Reverse hello:', reverse('hello'));\nconsole.log('Uppercase world:', uppercase('world'));\n\n// Test caching\nconst math2 = require('math');\nconsole.log('Same instance?', math === math2);\n"
      }
    },

    {
      id: "nodejs-u4-2",
      title: "ES modules: import and export",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "**ES modules** are the modern standard (import/export syntax). Node.js supports them when you set `\"type\": \"module\"` in package.json or use `.mjs` file extension.\n\n**Exporting**: `export` (named) or `export default` (default)\n**Importing**: `import ... from ...`\n\nES modules are async by design and use file extensions in imports.",
      example: { lang: "js", code: "// math.js\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\nexport default class Calculator {}\n\n// main.js\nimport { add, subtract } from './math.js';\nimport Calculator from './math.js';\n\nconsole.log(add(2, 3)); // 5" },
      steps: [
        { text: "Create a mock ES module system with `import()` function.",
          test: "T.expect(typeof importFunc === 'function', 'Create import() function');\nT.expect(typeof esModuleCache === 'object', 'Create esModuleCache object');" },
        { text: "Implement `defineESModule(id, exports)` with named and default exports.",
          test: "T.expect(typeof defineESModule === 'function', 'Add defineESModule() function');\ndefineESModule('utils', { named: { greet: (n) => `Hi ${n}` }, default: 'default value' });\nT.expect(esModuleCache['utils'], 'ES module should be cached');" },
        { text: "import() should support named imports via destructuring.",
          test: "defineESModule('math', { named: { add: (a,b) => a+b }, default: null });\nconst { add } = importFunc('math');\nT.eq(add(2,3), 5, 'Should support named imports');" },
        { text: "import() should support default imports.",
          test: "defineESModule('config', { named: {}, default: { port: 3000 } });\nconst config = importFunc('config', { default: true });\nT.eq(config.port, 3000, 'Should support default imports');" }
      ],
      files: [
        { name: "script.js", content: "// Mock ES module system\nconst esModuleCache = {};\n\nfunction defineESModule(id, exports) {\n  // Register ES module with named and default exports\n}\n\nfunction importFunc(id, options = {}) {\n  // Import module, support named and default imports\n}\n\n// Define ES modules\ndefineESModule('math', {\n  named: {\n    add: (a, b) => a + b,\n    subtract: (a, b) => a - b\n  },\n  default: null\n});\n\ndefineESModule('logger', {\n  named: {\n    log: (msg) => console.log('[LOG]', msg),\n    error: (msg) => console.error('[ERROR]', msg)\n  },\n  default: (msg) => console.log('[DEFAULT]', msg)\n});\n\n// Use named imports\nconst { add, subtract } = importFunc('math');\nconsole.log('2 + 3 =', add(2, 3));\nconsole.log('5 - 2 =', subtract(5, 2));\n\n// Use default import\nconst logger = importFunc('logger', { default: true });\nlogger('This is a default import');\n\n// Mix named and default\nconst { log } = importFunc('logger');\nlog('Named import works too');\n" }
      ],
      hints: [
        "In `defineESModule()`: `esModuleCache[id] = { named: exports.named || {}, default: exports.default };`",
        "In `importFunc()`: if `options.default`, return `esModuleCache[id].default`, otherwise return `esModuleCache[id].named`",
        "ES modules separate named exports from the default export, unlike CommonJS's single exports object"
      ],
      solution: {
        "script.js": "// Mock ES module system\nconst esModuleCache = {};\n\nfunction defineESModule(id, exports) {\n  esModuleCache[id] = {\n    named: exports.named || {},\n    default: exports.default\n  };\n}\n\nfunction importFunc(id, options = {}) {\n  if (!esModuleCache[id]) {\n    throw new Error('Module not found: ' + id);\n  }\n  if (options.default) {\n    return esModuleCache[id].default;\n  }\n  return esModuleCache[id].named;\n}\n\n// Define ES modules\ndefineESModule('math', {\n  named: {\n    add: (a, b) => a + b,\n    subtract: (a, b) => a - b\n  },\n  default: null\n});\n\ndefineESModule('logger', {\n  named: {\n    log: (msg) => console.log('[LOG]', msg),\n    error: (msg) => console.error('[ERROR]', msg)\n  },\n  default: (msg) => console.log('[DEFAULT]', msg)\n});\n\n// Use named imports\nconst { add, subtract } = importFunc('math');\nconsole.log('2 + 3 =', add(2, 3));\nconsole.log('5 - 2 =', subtract(5, 2));\n\n// Use default import\nconst logger = importFunc('logger', { default: true });\nlogger('This is a default import');\n\n// Mix named and default\nconst { log } = importFunc('logger');\nlog('Named import works too');\n"
      }
    },

    {
      id: "nodejs-u4-3",
      title: "package.json and project metadata",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "**package.json** is the heart of every Node.js project. It defines metadata, dependencies, scripts, and configuration.\n\nEssential fields:\n- `name` — project identifier\n- `version` — semver version\n- `main` — entry point\n- `type` — \"module\" for ES modules\n- `scripts` — npm scripts\n- `dependencies` — production deps\n- `devDependencies` — dev-only deps",
      example: { lang: "json", code: "{\n  \"name\": \"my-api\",\n  \"version\": \"1.0.0\",\n  \"main\": \"src/index.js\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"start\": \"node src/index.js\",\n    \"dev\": \"nodemon src/index.js\",\n    \"test\": \"jest\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.18.0\"\n  },\n  \"devDependencies\": {\n    \"jest\": \"^29.0.0\",\n    \"nodemon\": \"^2.0.0\"\n  }\n}" },
      steps: [
        { text: "Create a mock package.json object with essential fields.",
          test: "T.expect(typeof packageJson === 'object', 'Create packageJson object');\nT.expect(packageJson.name, 'Should have name field');\nT.expect(packageJson.version, 'Should have version field');" },
        { text: "Add dependencies and devDependencies objects.",
          test: "T.expect(typeof packageJson.dependencies === 'object', 'Should have dependencies object');\nT.expect(typeof packageJson.devDependencies === 'object', 'Should have devDependencies object');" },
        { text: "Add scripts object with start, dev, and test scripts.",
          test: "T.expect(typeof packageJson.scripts === 'object', 'Should have scripts object');\nT.expect(packageJson.scripts.start, 'Should have start script');" },
        { text: "Create a function to read package.json and return parsed object.",
          test: "T.expect(typeof readPackageJson === 'function', 'Create readPackageJson() function');\nconst pkg = readPackageJson();\nT.expect(pkg.name, 'Should return parsed package.json');" }
      ],
      files: [
        { name: "script.js", content: "// Mock package.json handling\nconst packageJson = {\n  // Add essential package.json fields\n};\n\nfunction readPackageJson() {\n  // Return the package.json object\n}\n\n// Display package.json info\nconst pkg = readPackageJson();\nconsole.log('Project:', pkg.name);\nconsole.log('Version:', pkg.version);\nconsole.log('Entry point:', pkg.main || 'index.js');\nconsole.log('Module type:', pkg.type || 'commonjs');\nconsole.log('\\nScripts:');\nObject.entries(pkg.scripts || {}).forEach(([name, script]) => {\n  console.log(`  ${name}: ${script}`);\n});\n\nconsole.log('\\nDependencies:');\nObject.entries(pkg.dependencies || {}).forEach(([name, version]) => {\n  console.log(`  ${name}: ${version}`);\n});\n\nconsole.log('\\nDev Dependencies:');\nObject.entries(pkg.devDependencies || {}).forEach(([name, version]) => {\n  console.log(`  ${name}: ${version}`);\n});\n" }
      ],
      hints: [
        "Create a realistic package.json with name, version, main, type, scripts, dependencies, devDependencies",
        "In `readPackageJson()`: just return the packageJson object",
        "Include common dependencies like express, lodash and devDependencies like jest, nodemon"
      ],
      solution: {
        "script.js": "// Mock package.json handling\nconst packageJson = {\n  name: \"my-awesome-project\",\n  version: \"1.0.0\",\n  description: \"An awesome Node.js project\",\n  main: \"src/index.js\",\n  type: \"module\",\n  scripts: {\n    start: \"node src/index.js\",\n    dev: \"nodemon src/index.js\",\n    test: \"jest\",\n    build: \"webpack --mode production\"\n  },\n  dependencies: {\n    express: \"^4.18.0\",\n    lodash: \"^4.17.0\"\n  },\n  devDependencies: {\n    jest: \"^29.0.0\",\n    nodemon: \"^2.0.0\",\n    webpack: \"^5.0.0\"\n  }\n};\n\nfunction readPackageJson() {\n  return packageJson;\n}\n\n// Display package.json info\nconst pkg = readPackageJson();\nconsole.log('Project:', pkg.name);\nconsole.log('Version:', pkg.version);\nconsole.log('Entry point:', pkg.main || 'index.js');\nconsole.log('Module type:', pkg.type || 'commonjs');\nconsole.log('\\nScripts:');\nObject.entries(pkg.scripts || {}).forEach(([name, script]) => {\n  console.log(`  ${name}: ${script}`);\n});\n\nconsole.log('\\nDependencies:');\nObject.entries(pkg.dependencies || {}).forEach(([name, version]) => {\n  console.log(`  ${name}: ${version}`);\n});\n\nconsole.log('\\nDev Dependencies:');\nObject.entries(pkg.devDependencies || {}).forEach(([name, version]) => {\n  console.log(`  ${name}: ${version}`);\n});\n"
      }
    },

    {
      id: "nodejs-u4-4",
      title: "Dependency version ranges and semver",
      kind: "js", chip: "NODE", xp: 15, mins: 13,
      brief: "npm uses **semantic versioning (semver)**: `MAJOR.MINOR.PATCH`. Dependencies specify version ranges to control updates.\n\n**Version ranges**:\n- `4.18.0` — exact version\n- `^4.18.0` — compatible with >=4.18.0 <5.0.0 (minor updates OK)\n- `~4.18.0` — >=4.18.0 <4.19.0 (patch updates only)\n- `*` or `latest` — any version (dangerous in production)\n\nCareful versioning prevents breaking changes from unexpected updates.",
      example: { lang: "js", code: "// Version range examples\n\"dependencies\": {\n  \"express\": \"4.18.0\",      // exact version\n  \"lodash\": \"^4.17.0\",     // 4.17.0 <= x < 5.0.0\n  \"axios\": \"~0.27.0\",      // 0.27.0 <= x < 0.28.0\n  \"jquery\": \"*\"            // any version (risky)\n}\n\n// Semver breakdown\n// 4.18.0\n// |  |  |\n// |  |  └─ PATCH: bug fixes\n// |  └──── MINOR: new features, backwards compatible\n// └─────── MAJOR: breaking changes" },
      steps: [
        { text: "Create a function to parse semver version string.",
          test: "T.expect(typeof parseSemver === 'function', 'Create parseSemver() function');\nconst v = parseSemver('4.18.0');\nT.eq(v.major, 4, 'Should parse major version');\nT.eq(v.minor, 18, 'Should parse minor version');\nT.eq(v.patch, 0, 'Should parse patch version');" },
        { text: "Create function to check if version satisfies ^ range.",
          test: "T.expect(typeof satisfiesCaret === 'function', 'Create satisfiesCaret() function');\nT.expect(satisfiesCaret('4.18.0', '^4.18.0'), 'Exact version should satisfy');\nT.expect(satisfiesCaret('4.19.0', '^4.18.0'), 'Minor update should satisfy');\nT.expect(!satisfiesCaret('5.0.0', '^4.18.0'), 'Major update should not satisfy');" },
        { text: "Create function to check if version satisfies ~ range.",
          test: "T.expect(typeof satisfiesTilde === 'function', 'Create satisfiesTilde() function');\nT.expect(satisfiesTilde('4.18.1', '~4.18.0'), 'Patch update should satisfy');\nT.expect(!satisfiesTilde('4.19.0', '~4.18.0'), 'Minor update should not satisfy');" },
        { text: "Create function to resolve dependency versions to latest satisfying range.",
          test: "T.expect(typeof resolveVersion === 'function', 'Create resolveVersion() function');\nconst available = ['4.18.0', '4.18.1', '4.19.0', '5.0.0'];\nT.eq(resolveVersion('^4.18.0', available), '4.19.0', 'Should resolve to latest satisfying version');" }
      ],
      files: [
        { name: "script.js", content: "// Semver and version range handling\n\nfunction parseSemver(version) {\n  // Parse version string into { major, minor, patch }\n}\n\nfunction satisfiesCaret(version, range) {\n  // Check if version satisfies ^X.Y.Z range\n  // Allows minor and patch updates, not major\n}\n\nfunction satisfiesTilde(version, range) {\n  // Check if version satisfies ~X.Y.Z range\n  // Allows patch updates only\n}\n\nfunction resolveVersion(range, availableVersions) {\n  // Find the latest version that satisfies the range\n}\n\n// Test the functions\nconsole.log('Parsing versions:');\nconsole.log('4.18.0:', parseSemver('4.18.0'));\nconsole.log('1.2.3:', parseSemver('1.2.3'));\n\nconsole.log('\\nCaret ranges (^):');\nconsole.log('4.18.0 satisfies ^4.18.0:', satisfiesCaret('4.18.0', '^4.18.0'));\nconsole.log('4.19.0 satisfies ^4.18.0:', satisfiesCaret('4.19.0', '^4.18.0'));\nconsole.log('5.0.0 satisfies ^4.18.0:', satisfiesCaret('5.0.0', '^4.18.0'));\n\nconsole.log('\\nTilde ranges (~):');\nconsole.log('4.18.1 satisfies ~4.18.0:', satisfiesTilde('4.18.1', '~4.18.0'));\nconsole.log('4.19.0 satisfies ~4.18.0:', satisfiesTilde('4.19.0', '~4.18.0'));\n\nconsole.log('\\nResolving versions:');\nconst available = ['4.18.0', '4.18.1', '4.19.0', '5.0.0'];\nconsole.log('Latest for ^4.18.0:', resolveVersion('^4.18.0', available));\nconsole.log('Latest for ~4.18.0:', resolveVersion('~4.18.0', available));\n" }
      ],
      hints: [
        "In `parseSemver()`: split by '.', convert to numbers, return `{ major, minor, patch }`",
        "In `satisfiesCaret()`: check if major matches and version >= base, but major must not increase",
        "In `satisfiesTilde()`: check if major and minor match exactly, patch can increase",
        "In `resolveVersion()`: filter versions that satisfy the range, return the max"
      ],
      solution: {
        "script.js": "// Semver and version range handling\n\nfunction parseSemver(version) {\n  const [major, minor, patch] = version.split('.').map(Number);\n  return { major, minor, patch };\n}\n\nfunction satisfiesCaret(version, range) {\n  const v = parseSemver(version);\n  const r = parseSemver(range.replace('^', ''));\n  if (v.major !== r.major) return false;\n  if (v.minor < r.minor) return false;\n  if (v.minor === r.minor && v.patch < r.patch) return false;\n  return true;\n}\n\nfunction satisfiesTilde(version, range) {\n  const v = parseSemver(version);\n  const r = parseSemver(range.replace('~', ''));\n  if (v.major !== r.major) return false;\n  if (v.minor !== r.minor) return false;\n  return v.patch >= r.patch;\n}\n\nfunction resolveVersion(range, availableVersions) {\n  const satisfying = availableVersions.filter(v => {\n    if (range.startsWith('^')) return satisfiesCaret(v, range);\n    if (range.startsWith('~')) return satisfiesTilde(v, range);\n    return v === range;\n  });\n  return satisfying.sort().reverse()[0];\n}\n\n// Test the functions\nconsole.log('Parsing versions:');\nconsole.log('4.18.0:', parseSemver('4.18.0'));\nconsole.log('1.2.3:', parseSemver('1.2.3'));\n\nconsole.log('\\nCaret ranges (^):');\nconsole.log('4.18.0 satisfies ^4.18.0:', satisfiesCaret('4.18.0', '^4.18.0'));\nconsole.log('4.19.0 satisfies ^4.18.0:', satisfiesCaret('4.19.0', '^4.18.0'));\nconsole.log('5.0.0 satisfies ^4.18.0:', satisfiesCaret('5.0.0', '^4.18.0'));\n\nconsole.log('\\nTilde ranges (~):');\nconsole.log('4.18.1 satisfies ~4.18.0:', satisfiesTilde('4.18.1', '~4.18.0'));\nconsole.log('4.19.0 satisfies ~4.18.0:', satisfiesTilde('4.19.0', '~4.18.0'));\n\nconsole.log('\\nResolving versions:');\nconst available = ['4.18.0', '4.18.1', '4.19.0', '5.0.0'];\nconsole.log('Latest for ^4.18.0:', resolveVersion('^4.18.0', available));\nconsole.log('Latest for ~4.18.0:', resolveVersion('~4.18.0', available));\n"
      }
    },

    {
      id: "nodejs-u4-5",
      title: "npm scripts and lifecycle hooks",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "**npm scripts** are shortcuts for common commands. They're defined in package.json and run with `npm run <script>`.\n\n**Lifecycle hooks** run automatically:\n- `preinstall` — before npm install\n- `postinstall` — after npm install\n- `prestart` — before npm start\n- `pretest` — before npm test\n\nCustom scripts can run any shell command and are cross-platform.",
      example: { lang: "json", code: "\"scripts\": {\n  \"start\": \"node src/index.js\",\n  \"dev\": \"nodemon src/index.js\",\n  \"build\": \"webpack --mode production\",\n  \"test\": \"jest\",\n  \"lint\": \"eslint src/**/*.js\",\n  \"prestart\": \"npm run build\",\n  \"postinstall\": \"node scripts/setup.js\"\n}" },
      steps: [
        { text: "Create a mock npm script runner with predefined scripts.",
          test: "T.expect(typeof npmScripts === 'object', 'Create npmScripts object');\nT.expect(typeof npmScripts.start === 'string', 'Should have start script');" },
        { text: "Implement `npmRun(scriptName)` function that executes scripts.",
          test: "T.expect(typeof npmRun === 'function', 'Create npmRun() function');\nnpmRun('start');\nT.expect(T.logged('Running start'), 'Should execute start script');" },
        { text: "Support lifecycle hooks (pre* and post* scripts).",
          test: "npmScripts.prestart = 'echo \"Pre-start hook\"';\nnpmScripts.poststart = 'echo \"Post-start hook\"';\nnpmRun('start');\nT.expect(T.logged('Pre-start hook'), 'Should run prestart before start');\nT.expect(T.logged('Post-start hook'), 'Should run poststart after start');" },
        { text: "Handle missing scripts with helpful error message.",
          test: "let errored = false;\ntry { npmRun('missing'); } catch (e) { errored = true; }\nT.expect(errored, 'Should throw error for missing script');" }
      ],
      files: [
        { name: "script.js", content: "// Mock npm script runner\nconst npmScripts = {\n  start: 'node src/index.js',\n  dev: 'nodemon src/index.js',\n  build: 'webpack --mode production',\n  test: 'jest',\n  lint: 'eslint src/**/*.js'\n};\n\nfunction npmRun(scriptName) {\n  // Execute the script, running lifecycle hooks\n}\n\n// Test basic script execution\nconsole.log('Running npm start...');\nnpmRun('start');\n\n// Add lifecycle hooks\nnpmScripts.prestart = 'echo \"Building project...\"';\nnpmScripts.poststart = 'echo \"Server started on port 3000\"';\n\nconsole.log('\\nRunning npm start with hooks...');\nnpmRun('start');\n\n// Test custom script\nnpmScripts.deploy = 'echo \"Deploying to production...\"';\nnpmScripts.predeploy = 'echo \"Running tests...\"';\nnpmScripts.postdeploy = 'echo \"Deployment complete!\"';\n\nconsole.log('\\nRunning npm deploy...');\nnpmRun('deploy');\n" }
      ],
      hints: [
        "In `npmRun()`: first check for `pre${scriptName}`, run it if exists, then run the main script, then `post${scriptName}`",
        "For the mock, just log the script being executed: `console.log('Running:', script);`",
        "Throw error if script doesn't exist: `throw new Error('Script not found: ' + scriptName);`"
      ],
      solution: {
        "script.js": "// Mock npm script runner\nconst npmScripts = {\n  start: 'node src/index.js',\n  dev: 'nodemon src/index.js',\n  build: 'webpack --mode production',\n  test: 'jest',\n  lint: 'eslint src/**/*.js'\n};\n\nfunction npmRun(scriptName) {\n  const preScript = 'pre' + scriptName;\n  const postScript = 'post' + scriptName;\n\n  if (npmScripts[preScript]) {\n    console.log('Running:', preScript, '-', npmScripts[preScript]);\n  }\n\n  if (!npmScripts[scriptName]) {\n    throw new Error('Script not found: ' + scriptName);\n  }\n  console.log('Running:', scriptName, '-', npmScripts[scriptName]);\n\n  if (npmScripts[postScript]) {\n    console.log('Running:', postScript, '-', npmScripts[postScript]);\n  }\n}\n\n// Test basic script execution\nconsole.log('Running npm start...');\nnpmRun('start');\n\n// Add lifecycle hooks\nnpmScripts.prestart = 'echo \"Building project...\"';\nnpmScripts.poststart = 'echo \"Server started on port 3000\"';\n\nconsole.log('\\nRunning npm start with hooks...');\nnpmRun('start');\n\n// Test custom script\nnpmScripts.deploy = 'echo \"Deploying to production...\"';\nnpmScripts.predeploy = 'echo \"Running tests...\"';\nnpmScripts.postdeploy = 'echo \"Deployment complete!\"';\n\nconsole.log('\\nRunning npm deploy...');\nnpmRun('deploy');\n"
      }
    },

    {
      id: "nodejs-quiz-4",
      title: "Unit 4 quiz: Modules & npm Ecosystem",
      kind: "quiz", xp: 10,
      brief: "CommonJS vs ES modules, package.json, version ranges, and npm scripts. 80% to pass.",
      questions: [
        { q: "How do you export a function in CommonJS?",
          choices: ["export function myFunc() {}", "module.exports.myFunc = () => {}", "export default myFunc", "export { myFunc }"],
          answer: 1, explain: "CommonJS uses module.exports. You can export individual properties: module.exports.myFunc = function() {}" },
        { q: "What enables ES modules in a Node.js project?",
          choices: ["Adding 'use strict' at the top", "Setting \"type\": \"module\" in package.json", "Using .js file extension", "Importing with require()"],
          answer: 1, explain: "Set \"type\": \"module\" in package.json to enable ES modules. Alternatively, use .mjs file extension." },
        { q: "What's the difference between dependencies and devDependencies?",
          choices: ["No difference, they're the same", "Dependencies are for production, devDependencies for development only", "Dependencies are manually installed, devDependencies are auto-installed", "devDependencies are required, dependencies are optional"],
          answer: 1, explain: "dependencies are needed in production (express, lodash). devDependencies are only for development (jest, webpack, testing tools)." },
        { q: "What does ^4.18.0 mean in a version range?",
          choices: ["Exact version 4.18.0 only", "Any version >= 4.18.0", ">= 4.18.0 but < 5.0.0", ">= 4.18.0 but < 4.19.0"],
          answer: 2, explain: "^ allows compatible updates: same major version, but minor and patch can increase. ^4.18.0 accepts 4.18.1, 4.19.0, but not 5.0.0." },
        { q: "When does the prestart script run?",
          choices: ["After npm start", "Before npm install", "Before npm start", "Only when explicitly called"],
          answer: 2, explain: "Lifecycle hooks: prestart runs before start, poststart runs after start. This pattern applies to all scripts (pretest, posttest, etc.)." },
        { q: "What's the purpose of package.json?",
          choices: ["Only for project documentation", "To define project metadata, dependencies, and scripts", "To store source code", "To configure the Node.js runtime"],
          answer: 1, explain: "package.json is the project manifest: name, version, entry point, dependencies, scripts, and configuration. It's required for npm to work." }
      ]
    }
  ]
});