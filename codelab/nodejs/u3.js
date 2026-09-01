/* Node.js Deep Dive — Unit 3: File System & Path Operations */
window.CODELAB.addUnit("nodejs", {
  id: "nodejs-u3",
  title: "File System & Path Operations",
  icon: "📁",
  blurb: "Reading, writing, and manipulating files: async vs sync file operations, path handling, and file system streams.",
  cheat: [
    { h: "Async vs sync file operations", lang: "js", code: "// Async (non-blocking, preferred)\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n\n// Sync (blocking, use only in startup scripts)\nconst data = fs.readFileSync('file.txt', 'utf8');", note: "Always prefer async. Sync operations block the event loop." },
    { h: "Path operations", lang: "js", code: "const path = require('path');\n\npath.join('folder', 'file.txt'); // 'folder/file.txt'\npath.resolve('/folder', './file.txt'); // '/folder/file.txt'\npath.basename('/path/to/file.txt'); // 'file.txt'\npath.dirname('/path/to/file.txt'); // '/path/to'\npath.extname('file.txt'); // '.txt'", note: "Never use string concatenation for paths. Use path.join() for cross-platform compatibility." },
    { h: "File system streams", lang: "js", code: "const readStream = fs.createReadStream('bigfile.txt');\nconst writeStream = fs.createWriteStream('output.txt');\n\nreadStream.pipe(writeStream);\n\n// With progress\nreadStream.on('data', (chunk) => {\n  console.log('Received', chunk.length, 'bytes');\n});", note: "Streams handle large files without loading everything into memory." },
    { h: "File stats and checking", lang: "js", code: "fs.stat('file.txt', (err, stats) => {\n  console.log(stats.isFile()); // true\n  console.log(stats.isDirectory()); // false\n  console.log(stats.size); // bytes\n  console.log(stats.mtime); // modified time\n});\n\nfs.access('file.txt', fs.constants.R_OK, (err) => {\n  if (err) console.log('not readable');\n});", note: "Use fs.stat() to check file type and fs.access() to check permissions." }
  ],
  lessons: [

    {
      id: "nodejs-u3-1",
      title: "Reading files: async vs sync",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Node.js provides both **async** and **sync** file operations. **Always use async** — sync operations block the event loop and freeze your server.\n\nAsync: `fs.readFile(path, encoding, callback)`\nSync: `fs.readFileSync(path, encoding)`\n\nThe async version takes a callback with `(err, data)`. Always check for errors — files might not exist, or you might lack permissions.",
      example: { lang: "js", code: "const fs = require('fs');\n\n// Async (non-blocking)\nfs.readFile('config.json', 'utf8', (err, data) => {\n  if (err) {\n    console.error('Failed to read:', err);\n    return;\n  }\n  console.log(data);\n});\n\n// Sync (blocking, avoid in request handlers)\ntry {\n  const data = fs.readFileSync('config.json', 'utf8');\n  console.log(data);\n} catch (err) {\n  console.error('Failed to read:', err);\n}" },
      steps: [
        { text: "Create a simulated file system object with `files` object storing file contents.",
          test: "T.expect(typeof mockFS === 'object', 'Create mockFS object');\nT.expect(typeof mockFS.files === 'object', 'mockFS should have files object');" },
        { text: "Add `readFile(path, encoding, callback)` method that simulates async reading.",
          test: "T.expect(typeof mockFS.readFile === 'function', 'Add readFile method');\nmockFS.files['test.txt'] = 'hello';\nmockFS.readFile('test.txt', 'utf8', (err, data) => T.eq(data, 'hello', 'Should read file contents'));" },
        { text: "Callback should receive error if file doesn't exist.",
          test: "mockFS.readFile('missing.txt', 'utf8', (err, data) => T.expect(err instanceof Error, 'Should return error for missing file'));" },
        { text: "Add `readFileSync(path, encoding)` method that reads synchronously.",
          test: "T.expect(typeof mockFS.readFileSync === 'function', 'Add readFileSync method');\nconst data = mockFS.readFileSync('test.txt', 'utf8');\nT.eq(data, 'hello', 'Sync read should return file contents');" },
        { text: "Sync version should throw error if file doesn't exist.",
          test: "let threw = false;\ntry { mockFS.readFileSync('missing.txt', 'utf8'); } catch (e) { threw = true; }\nT.expect(threw, 'Sync read should throw for missing file');" }
      ],
      files: [
        { name: "script.js", content: "// Simulated file system with async and sync read operations\nconst mockFS = {\n  files: {\n    'config.json': '{ \"port\": 3000 }',\n    'README.md': '# My Project'\n  },\n\n  readFile(path, encoding, callback) {\n    // Simulate async file read with setTimeout\n    // Check if file exists, return error if not\n  },\n\n  readFileSync(path, encoding) {\n    // Synchronous file read\n    // Throw error if file doesn't exist\n  }\n};\n\n// Test async read\nconsole.log('Starting async read...');\nmockFS.readFile('config.json', 'utf8', (err, data) => {\n  if (err) {\n    console.error('Async error:', err.message);\n  } else {\n    console.log('Async data:', data);\n  }\n});\n\n// Test sync read\nconsole.log('Starting sync read...');\ntry {\n  const data = mockFS.readFileSync('README.md', 'utf8');\n  console.log('Sync data:', data);\n} catch (err) {\n  console.error('Sync error:', err.message);\n}\n\n// Test missing file\nmockFS.readFile('missing.txt', 'utf8', (err, data) => {\n  if (err) console.error('Missing file error:', err.message);\n});\n" }
      ],
      hints: [
        "In `readFile()`: use `setTimeout(() => { if (this.files[path]) callback(null, this.files[path]); else callback(new Error('File not found'), null); }, 10);`",
        "In `readFileSync()`: `if (this.files[path]) return this.files[path]; else throw new Error('File not found');`",
        "The async version uses callback pattern, sync version throws"
      ],
      solution: {
        "script.js": "// Simulated file system with async and sync read operations\nconst mockFS = {\n  files: {\n    'config.json': '{ \"port\": 3000 }',\n    'README.md': '# My Project'\n  },\n\n  readFile(path, encoding, callback) {\n    setTimeout(() => {\n      if (this.files[path]) {\n        callback(null, this.files[path]);\n      } else {\n        callback(new Error('File not found'), null);\n      }\n    }, 10);\n  },\n\n  readFileSync(path, encoding) {\n    if (this.files[path]) {\n      return this.files[path];\n    } else {\n      throw new Error('File not found');\n    }\n  }\n};\n\n// Test async read\nconsole.log('Starting async read...');\nmockFS.readFile('config.json', 'utf8', (err, data) => {\n  if (err) {\n    console.error('Async error:', err.message);\n  } else {\n    console.log('Async data:', data);\n  }\n});\n\n// Test sync read\nconsole.log('Starting sync read...');\ntry {\n  const data = mockFS.readFileSync('README.md', 'utf8');\n  console.log('Sync data:', data);\n} catch (err) {\n  console.error('Sync error:', err.message);\n}\n\n// Test missing file\nmockFS.readFile('missing.txt', 'utf8', (err, data) => {\n  if (err) console.error('Missing file error:', err.message);\n});\n"
      }
    },

    {
      id: "nodejs-u3-2",
      title: "Writing files and creating directories",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Writing files is similar to reading: `fs.writeFile()` (async) and `fs.writeFileSync()` (sync). For directories, use `fs.mkdir()`.\n\n**Warning**: `writeFile` overwrites existing files. Use `fs.appendFile()` to add content instead.\n\nFor directories, `fs.mkdir()` can create nested paths with the `recursive: true` option.",
      example: { lang: "js", code: "const fs = require('fs');\n\n// Write (overwrites if exists)\nfs.writeFile('output.txt', 'Hello', (err) => {\n  if (err) throw err;\n  console.log('Written');\n});\n\n// Append (adds to end)\nfs.appendFile('output.txt', ' World', (err) => {\n  if (err) throw err;\n});\n\n// Create directory (recursive)\nfs.mkdir('path/to/dir', { recursive: true }, (err) => {\n  if (err) throw err;\n});" },
      steps: [
        { text: "Add `writeFile(path, content, callback)` method to mockFS.",
          test: "T.expect(typeof mockFS.writeFile === 'function', 'Add writeFile method');\nmockFS.writeFile('new.txt', 'content', () => {});\nT.eq(mockFS.files['new.txt'], 'content', 'Should create file with content');" },
        { text: "Add `appendFile(path, content, callback)` method that adds to existing content.",
          test: "mockFS.files['test.txt'] = 'hello';\nmockFS.appendFile('test.txt', ' world', () => {});\nT.eq(mockFS.files['test.txt'], 'hello world', 'Should append to existing content');" },
        { text: "Add `mkdir(path, options, callback)` method for creating directories.",
          test: "T.expect(typeof mockFS.mkdir === 'function', 'Add mkdir method');\nmockFS.mkdir('folder', {}, () => {});\nT.expect(typeof mockFS.dirs === 'object', 'Should have dirs object for directories');" },
        { text: "Support recursive directory creation with { recursive: true }.",
          test: "mockFS.mkdir('a/b/c', { recursive: true }, () => {});\nT.expect(mockFS.dirs['a'] && mockFS.dirs['a/b'] && mockFS.dirs['a/b/c'], 'Should create nested directories recursively');" }
      ],
      files: [
        { name: "script.js", content: "// Extended mock file system with write and directory operations\nconst mockFS = {\n  files: {},\n  dirs: {},\n\n  writeFile(path, content, callback) {\n    // Write or overwrite file\n  },\n\n  appendFile(path, content, callback) {\n    // Append to existing file or create new\n  },\n\n  mkdir(path, options, callback) {\n    // Create directory, support recursive option\n  }\n};\n\n// Test writeFile\nmockFS.writeFile('hello.txt', 'Hello World', (err) => {\n  if (err) console.error('Write error:', err.message);\n  else console.log('Written:', mockFS.files['hello.txt']);\n});\n\n// Test appendFile\nmockFS.appendFile('hello.txt', '!', (err) => {\n  if (err) console.error('Append error:', err.message);\n  else console.log('Appended:', mockFS.files['hello.txt']);\n});\n\n// Test mkdir\nmockFS.mkdir('logs', {}, (err) => {\n  if (err) console.error('Mkdir error:', err.message);\n  else console.log('Created dir:', Object.keys(mockFS.dirs));\n});\n\n// Test recursive mkdir\nmockFS.mkdir('app/views/pages', { recursive: true }, (err) => {\n  if (err) console.error('Recursive mkdir error:', err.message);\n  else console.log('Created nested dirs:', Object.keys(mockFS.dirs));\n});\n" }
      ],
      hints: [
        "In `writeFile()`: `this.files[path] = content; callback(null);`",
        "In `appendFile()`: `if (this.files[path]) this.files[path] += content; else this.files[path] = content; callback(null);`",
        "In `mkdir()`: if `options.recursive`, split path by '/' and create each level; otherwise just create the single directory"
      ],
      solution: {
        "script.js": "// Extended mock file system with write and directory operations\nconst mockFS = {\n  files: {},\n  dirs: {},\n\n  writeFile(path, content, callback) {\n    this.files[path] = content;\n    callback(null);\n  },\n\n  appendFile(path, content, callback) {\n    if (this.files[path]) {\n      this.files[path] += content;\n    } else {\n      this.files[path] = content;\n    }\n    callback(null);\n  },\n\n  mkdir(path, options, callback) {\n    if (options.recursive) {\n      const parts = path.split('/');\n      let current = '';\n      for (const part of parts) {\n        current = current ? current + '/' + part : part;\n        this.dirs[current] = true;\n      }\n    } else {\n      this.dirs[path] = true;\n    }\n    callback(null);\n  }\n};\n\n// Test writeFile\nmockFS.writeFile('hello.txt', 'Hello World', (err) => {\n  if (err) console.error('Write error:', err.message);\n  else console.log('Written:', mockFS.files['hello.txt']);\n});\n\n// Test appendFile\nmockFS.appendFile('hello.txt', '!', (err) => {\n  if (err) console.error('Append error:', err.message);\n  else console.log('Appended:', mockFS.files['hello.txt']);\n});\n\n// Test mkdir\nmockFS.mkdir('logs', {}, (err) => {\n  if (err) console.error('Mkdir error:', err.message);\n  else console.log('Created dir:', Object.keys(mockFS.dirs));\n});\n\n// Test recursive mkdir\nmockFS.mkdir('app/views/pages', { recursive: true }, (err) => {\n  if (err) console.error('Recursive mkdir error:', err.message);\n  else console.log('Created nested dirs:', Object.keys(mockFS.dirs));\n});\n"
      }
    },

    {
      id: "nodejs-u3-3",
      title: "Path operations with path module",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Never use string concatenation for file paths — it breaks on Windows vs Linux. Use the **path module** for cross-platform path operations.\n\nKey methods:\n- `path.join(...segments)` — joins path segments\n- `path.resolve(...segments)` — resolves to absolute path\n- `path.basename(path)` — filename with extension\n- `path.dirname(path)` — directory path\n- `path.extname(path)` — file extension",
      example: { lang: "js", code: "const path = require('path');\n\npath.join('folder', 'subfolder', 'file.txt');\n// 'folder/subfolder/file.txt' (Linux)\n// 'folder\\\\subfolder\\\\file.txt' (Windows)\n\npath.resolve('/folder', './file.txt');\n// '/folder/file.txt'\n\npath.basename('/path/to/file.txt'); // 'file.txt'\npath.dirname('/path/to/file.txt'); // '/path/to'\npath.extname('file.txt'); // '.txt'" },
      steps: [
        { text: "Create a mock path module with `join()` method.",
          test: "T.expect(typeof path.join === 'function', 'Create path.join method');\nT.eq(path.join('folder', 'file.txt'), 'folder/file.txt', 'Should join path segments');" },
        { text: "join() should handle multiple segments and normalize slashes.",
          test: "T.eq(path.join('a', 'b', 'c'), 'a/b/c', 'Should join multiple segments');\nT.eq(path.join('a/', 'b'), 'a/b', 'Should normalize extra slashes');" },
        { text: "Add `resolve()` method that resolves to absolute paths.",
          test: "T.expect(typeof path.resolve === 'function', 'Add path.resolve method');\nT.eq(path.resolve('/folder', './file.txt'), '/folder/file.txt', 'Should resolve to absolute path');" },
        { text: "Add `basename()`, `dirname()`, and `extname()` methods.",
          test: "T.eq(path.basename('/path/to/file.txt'), 'file.txt', 'Should extract filename');\nT.eq(path.dirname('/path/to/file.txt'), '/path/to', 'Should extract directory');\nT.eq(path.extname('file.txt'), '.txt', 'Should extract extension');" }
      ],
      files: [
        { name: "script.js", content: "// Mock path module for cross-platform path operations\nconst path = {\n  join(...segments) {\n    // Join path segments with correct separator\n  },\n\n  resolve(...segments) {\n    // Resolve to absolute path\n  },\n\n  basename(filePath) {\n    // Extract filename with extension\n  },\n\n  dirname(filePath) {\n    // Extract directory path\n  },\n\n  extname(filePath) {\n    // Extract file extension\n  }\n};\n\n// Test the path module\nconsole.log('Join:', path.join('folder', 'subfolder', 'file.txt'));\nconsole.log('Join with slashes:', path.join('folder/', 'subfolder/', 'file.txt'));\nconsole.log('Resolve:', path.resolve('/home', './user', 'docs'));\nconsole.log('Basename:', path.basename('/path/to/file.txt'));\nconsole.log('Dirname:', path.dirname('/path/to/file.txt'));\nconsole.log('Extname:', path.extname('file.txt'));\nconsole.log('Extname (no extension):', path.extname('file'));\n" }
      ],
      hints: [
        "In `join()`: `segments.join('/').replace(/\\/+/g, '/')` — join with forward slash, normalize multiple slashes",
        "In `resolve()`: for now, just join and ensure leading `/` for absolute paths: `let result = this.join(...segments); if (!result.startsWith('/')) result = '/' + result; return result;`",
        "In `basename()`: `filePath.split('/').pop()` — get last segment",
        "In `dirname()`: `filePath.split('/').slice(0, -1).join('/') || '/'` — everything except last segment",
        "In `extname()`: `filePath.includes('.') ? '.' + filePath.split('.').pop() : ''` — everything after last dot"
      ],
      solution: {
        "script.js": "// Mock path module for cross-platform path operations\nconst path = {\n  join(...segments) {\n    return segments.join('/').replace(/\\/+/g, '/');\n  },\n\n  resolve(...segments) {\n    let result = this.join(...segments);\n    if (!result.startsWith('/')) {\n      result = '/' + result;\n    }\n    return result;\n  },\n\n  basename(filePath) {\n    return filePath.split('/').pop();\n  },\n\n  dirname(filePath) {\n    const parts = filePath.split('/');\n    const dir = parts.slice(0, -1).join('/');\n    return dir || '/';\n  },\n\n  extname(filePath) {\n    if (filePath.includes('.')) {\n      return '.' + filePath.split('.').pop();\n    }\n    return '';\n  }\n};\n\n// Test the path module\nconsole.log('Join:', path.join('folder', 'subfolder', 'file.txt'));\nconsole.log('Join with slashes:', path.join('folder/', 'subfolder/', 'file.txt'));\nconsole.log('Resolve:', path.resolve('/home', './user', 'docs'));\nconsole.log('Basename:', path.basename('/path/to/file.txt'));\nconsole.log('Dirname:', path.dirname('/path/to/file.txt'));\nconsole.log('Extname:', path.extname('file.txt'));\nconsole.log('Extname (no extension):', path.extname('file'));\n"
      }
    },

    {
      id: "nodejs-u3-4",
      title: "File system streams for large files",
      kind: "js", chip: "NODE", xp: 15, mins: 13,
      brief: "For large files, use **streams** instead of `readFile`/`writeFile`. Streams process data chunk by chunk without loading everything into memory.\n\n`fs.createReadStream(path)` — readable stream for files\n`fs.createWriteStream(path)` — writable stream for files\n\nPipe them together: `readStream.pipe(writeStream)` for efficient file copying.",
      example: { lang: "js", code: "const fs = require('fs');\n\nconst readStream = fs.createReadStream('large-file.txt');\nconst writeStream = fs.createWriteStream('copy.txt');\n\nreadStream.pipe(writeStream);\n\nwriteStream.on('finish', () => {\n  console.log('Copy complete');\n});\n\n// With progress tracking\nlet bytesCopied = 0;\nreadStream.on('data', (chunk) => {\n  bytesCopied += chunk.length;\n  console.log('Copied:', bytesCopied, 'bytes');\n});" },
      steps: [
        { text: "Add `createReadStream(path)` method to mockFS that returns a readable stream.",
          test: "T.expect(typeof mockFS.createReadStream === 'function', 'Add createReadStream method');\nconst stream = mockFS.createReadStream('test.txt');\nT.expect(typeof stream.on === 'function', 'Should return a readable stream');" },
        { text: "Stream should emit data chunks based on file content.",
          test: "mockFS.files['test.txt'] = 'hello world';\nconst s = mockFS.createReadStream('test.txt');\nlet received = '';\ns.on('data', (chunk) => received += chunk);\ns.on('end', () => T.eq(received, 'hello world', 'Should stream file content'));" },
        { text: "Add `createWriteStream(path)` method that returns a writable stream.",
          test: "T.expect(typeof mockFS.createWriteStream === 'function', 'Add createWriteStream method');\nconst ws = mockFS.createWriteStream('out.txt');\nT.expect(typeof ws.write === 'function', 'Should return a writable stream');" },
        { text: "Write stream should accumulate data and write to file on finish.",
          test: "const ws2 = mockFS.createWriteStream('out.txt');\nws2.write('hello');\nws2.end();\nsetTimeout(() => T.eq(mockFS.files['out.txt'], 'hello', 'Should write to file on finish'), 50);" }
      ],
      files: [
        { name: "script.js", content: "// Extended mock file system with stream support\nconst mockFS = {\n  files: {},\n\n  createReadStream(path) {\n    // Return a readable stream that emits file content in chunks\n  },\n\n  createWriteStream(path) {\n    // Return a writable stream that accumulates data\n  }\n};\n\n// Populate a test file\nmockFS.files['source.txt'] = 'This is a large file that we want to copy using streams.';\n\n// Create streams and pipe them\nconst readStream = mockFS.createReadStream('source.txt');\nconst writeStream = mockFS.createWriteStream('destination.txt');\n\n// Track progress\nlet totalBytes = 0;\nreadStream.on('data', (chunk) => {\n  totalBytes += chunk.length;\n  console.log('Received chunk:', chunk.length, 'bytes');\n});\n\nwriteStream.on('finish', () => {\n  console.log('Write complete. Total bytes:', totalBytes);\n  console.log('Destination file:', mockFS.files['destination.txt']);\n});\n\n// Pipe the streams\nreadStream.pipe(writeStream);\n" }
      ],
      hints: [
        "For `createReadStream()`: return a MockReadable that pushes the file content in chunks (e.g., 10 characters at a time)",
        "For `createWriteStream()`: return a MockWritable that accumulates writes and writes to `this.files[path]` on `end()`",
        "Use the MockReadable and MockWritable classes from the previous unit"
      ],
      solution: {
        "script.js": "// Extended mock file system with stream support\nconst mockFS = {\n  files: {},\n\n  createReadStream(path) {\n    const content = this.files[path] || '';\n    const stream = new MockReadable();\n    let offset = 0;\n    const chunkSize = 10;\n\n    const pushChunk = () => {\n      if (offset < content.length) {\n        const chunk = content.slice(offset, offset + chunkSize);\n        stream.push(chunk);\n        offset += chunkSize;\n        setTimeout(pushChunk, 10);\n      } else {\n        stream.end();\n      }\n    };\n\n    setTimeout(pushChunk, 10);\n    return stream;\n  },\n\n  createWriteStream(path) {\n    const stream = new MockWritable();\n    stream.buffer = [];\n    stream.path = path;\n    stream.originalEnd = stream.end;\n    stream.end = function() {\n      this.originalEnd();\n      mockFS.files[this.path] = this.buffer.join('');\n    };\n    return stream;\n  }\n};\n\n// Populate a test file\nmockFS.files['source.txt'] = 'This is a large file that we want to copy using streams.';\n\n// Create streams and pipe them\nconst readStream = mockFS.createReadStream('source.txt');\nconst writeStream = mockFS.createWriteStream('destination.txt');\n\n// Track progress\nlet totalBytes = 0;\nreadStream.on('data', (chunk) => {\n  totalBytes += chunk.length;\n  console.log('Received chunk:', chunk.length, 'bytes');\n});\n\nwriteStream.on('finish', () => {\n  console.log('Write complete. Total bytes:', totalBytes);\n  console.log('Destination file:', mockFS.files['destination.txt']);\n});\n\n// Pipe the streams\nreadStream.pipe(writeStream);\n"
      }
    },

    {
      id: "nodejs-u3-5",
      title: "File stats and permissions",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Use `fs.stat()` to get file information: size, type (file/directory), permissions, timestamps. Use `fs.access()` to check if you can read/write/execute a file.\n\nStats object methods:\n- `stats.isFile()` — true if regular file\n- `stats.isDirectory()` — true if directory\n- `stats.size` — file size in bytes\n- `stats.mtime` — last modified time",
      example: { lang: "js", code: "const fs = require('fs');\n\nfs.stat('file.txt', (err, stats) => {\n  if (err) throw err;\n  console.log('Is file:', stats.isFile());\n  console.log('Is directory:', stats.isDirectory());\n  console.log('Size:', stats.size, 'bytes');\n  console.log('Modified:', stats.mtime);\n});\n\nfs.access('file.txt', fs.constants.R_OK, (err) => {\n  if (err) console.log('Not readable');\n  else console.log('Readable');\n});" },
      steps: [
        { text: "Add `stat(path, callback)` method to mockFS.",
          test: "T.expect(typeof mockFS.stat === 'function', 'Add stat method');\nmockFS.files['test.txt'] = 'hello';\nmockFS.stat('test.txt', (err, stats) => T.expect(stats, 'Should return stats object'));" },
        { text: "Stats object should have isFile(), isDirectory(), size, and mtime.",
          test: "mockFS.stat('test.txt', (err, stats) => {\n  T.expect(stats.isFile(), 'Should be a file');\n  T.expect(!stats.isDirectory(), 'Should not be a directory');\n  T.expect(stats.size > 0, 'Should have size');\n});" },
        { text: "Add `access(path, mode, callback)` method to check permissions.",
          test: "T.expect(typeof mockFS.access === 'function', 'Add access method');\nmockFS.access('test.txt', 1, (err) => T.expect(!err, 'Should have read access'));" },
        { text: "access() should return error for missing file or insufficient permissions.",
          test: "mockFS.access('missing.txt', 1, (err) => T.expect(err, 'Should error for missing file'));" }
      ],
      files: [
        { name: "script.js", content: "// Extended mock file system with stats and permissions\nconst mockFS = {\n  files: {},\n  permissions: {},\n\n  stat(path, callback) {\n    // Return stats object with file info\n  },\n\n  access(path, mode, callback) {\n    // Check if file exists and has requested permissions\n    // mode: 1 = read, 2 = write, 4 = execute\n  }\n};\n\n// Setup test files\nmockFS.files['document.txt'] = 'Important document';\nmockFS.files['data.json'] = '{ \"key\": \"value\" }';\nmockFS.permissions['document.txt'] = 1; // read only\nmockFS.permissions['data.json'] = 3; // read + write\n\n// Test stat\nmockFS.stat('document.txt', (err, stats) => {\n  if (err) {\n    console.error('Stat error:', err.message);\n  } else {\n    console.log('Document stats:');\n    console.log('  Is file:', stats.isFile());\n    console.log('  Is directory:', stats.isDirectory());\n    console.log('  Size:', stats.size, 'bytes');\n    console.log('  Modified:', stats.mtime);\n  }\n});\n\n// Test access\nmockFS.access('document.txt', 1, (err) => {\n  if (err) console.log('Document not readable');\n  else console.log('Document is readable');\n});\n\nmockFS.access('document.txt', 2, (err) => {\n  if (err) console.log('Document not writable (expected)');\n  else console.log('Document is writable');\n});\n\nmockFS.access('missing.txt', 1, (err) => {\n  if (err) console.log('Missing file error (expected)');\n  else console.log('File exists');\n});\n" }
      ],
      hints: [
        "In `stat()`: return an object with `isFile: () => true`, `isDirectory: () => false`, `size: this.files[path].length`, `mtime: new Date()`",
        "In `access()`: check if file exists and if `(this.permissions[path] & mode) === mode` for permission check",
        "Use bitwise AND (&) to check permissions: read=1, write=2, execute=4"
      ],
      solution: {
        "script.js": "// Extended mock file system with stats and permissions\nconst mockFS = {\n  files: {},\n  permissions: {},\n\n  stat(path, callback) {\n    if (!this.files[path]) {\n      callback(new Error('File not found'), null);\n      return;\n    }\n    const stats = {\n      isFile: () => true,\n      isDirectory: () => false,\n      size: this.files[path].length,\n      mtime: new Date()\n    };\n    callback(null, stats);\n  },\n\n  access(path, mode, callback) {\n    if (!this.files[path]) {\n      callback(new Error('File not found'));\n      return;\n    }\n    const perms = this.permissions[path] || 7; // default: all permissions\n    if ((perms & mode) === mode) {\n      callback(null);\n    } else {\n      callback(new Error('Permission denied'));\n    }\n  }\n};\n\n// Setup test files\nmockFS.files['document.txt'] = 'Important document';\nmockFS.files['data.json'] = '{ \"key\": \"value\" }';\nmockFS.permissions['document.txt'] = 1; // read only\nmockFS.permissions['data.json'] = 3; // read + write\n\n// Test stat\nmockFS.stat('document.txt', (err, stats) => {\n  if (err) {\n    console.error('Stat error:', err.message);\n  } else {\n    console.log('Document stats:');\n    console.log('  Is file:', stats.isFile());\n    console.log('  Is directory:', stats.isDirectory());\n    console.log('  Size:', stats.size, 'bytes');\n    console.log('  Modified:', stats.mtime);\n  }\n});\n\n// Test access\nmockFS.access('document.txt', 1, (err) => {\n  if (err) console.log('Document not readable');\n  else console.log('Document is readable');\n});\n\nmockFS.access('document.txt', 2, (err) => {\n  if (err) console.log('Document not writable (expected)');\n  else console.log('Document is writable');\n});\n\nmockFS.access('missing.txt', 1, (err) => {\n  if (err) console.log('Missing file error (expected)');\n  else console.log('File exists');\n});\n"
      }
    },

    {
      id: "nodejs-quiz-3",
      title: "Unit 3 quiz: File System & Path Operations",
      kind: "quiz", xp: 10,
      brief: "Async vs sync file operations, path handling, streams, and file stats. 80% to pass.",
      questions: [
        { q: "When should you use sync file operations?",
          choices: ["Always, they're simpler", "In request handlers", "Only in startup scripts and CLI tools", "Never, always use async"],
          answer: 2, explain: "Sync operations block the event loop. Use them only in startup scripts where blocking doesn't matter. Never in request handlers." },
        { q: "What does path.join('folder', 'file.txt') return?",
          choices: ["'folder/file.txt'", "'folder\\\\file.txt'", "'folder file.txt'", "'folderfile.txt'"],
          answer: 0, explain: "path.join() joins segments with the correct separator for the OS. It normalizes to forward slashes in the mock." },
        { q: "What happens if you writeFile() to an existing file?",
          choices: ["It appends to the file", "It overwrites the file", "It throws an error", "It creates a new file with a number suffix"],
          answer: 1, explain: "writeFile() overwrites existing files completely. Use appendFile() to add content without overwriting." },
        { q: "Why use streams for large files?",
          choices: ["They're faster to write", "They process data chunk by chunk without loading everything into memory", "They automatically compress files", "They're the only way to read files"],
          answer: 1, explain: "Streams process data piece by piece, so you can handle multi-gigabyte files with only a few megabytes of RAM." },
        { q: "What does stats.isFile() return for a directory?",
          choices: ["true", "false", "undefined", "It throws an error"],
          answer: 1, explain: "isFile() returns true only for regular files. For directories, use isDirectory() instead." },
        { q: "How do you check if you can read a file?",
          choices: ["fs.readFile() and catch the error", "fs.stat() and check permissions", "fs.access() with fs.constants.R_OK", "fs.exists()"],
          answer: 2, explain: "fs.access(path, fs.constants.R_OK, callback) specifically checks read permissions without reading the file." }
      ]
    }
  ]
});