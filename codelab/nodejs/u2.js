/* Node.js Deep Dive — Unit 2: Streams & Buffers */
window.CODELAB.addUnit("nodejs", {
  id: "nodejs-u2",
  title: "Streams & Buffers",
  icon: "🌊",
  blurb: "Efficient data processing: buffers for binary data, streams for chunked I/O, and the pipeline pattern.",
  cheat: [
    { h: "Buffer basics", lang: "js", code: "const buf = Buffer.from('hello');\nconsole.log(buf); // <Buffer 68 65 6c 6c 6f>\nconsole.log(buf.toString()); // 'hello'\nconsole.log(buf[0]); // 104 (ASCII 'h')", note: "Buffers are fixed-size raw binary memory. Use for file I/O, network protocols, image processing." },
    { h: "Stream types", lang: "js", code: "// Readable: data flows out\nfs.createReadStream('file.txt').on('data', chunk => console.log(chunk));\n\n// Writable: data flows in\nfs.createWriteStream('out.txt').write('hello');\n\n// Duplex: both directions\nnet.Socket;\n\n// Transform: modifies data\nzlib.createGzip();", note: "Streams handle data piece by piece instead of loading everything into memory." },
    { h: "The pipeline pattern", lang: "js", code: "const { pipeline } = require('stream');\nconst fs = require('fs');\nconst zlib = require('zlib');\n\npipeline(\n  fs.createReadStream('input.txt'),\n  zlib.createGzip(),\n  fs.createWriteStream('output.gz'),\n  (err) => console.log('done', err)\n);", note: "pipeline() handles errors and cleanup automatically. Never pipe() manually in production." },
    { h: "Backpressure handling", lang: "js", code: "readable.on('data', (chunk) => {\n  const canWrite = writable.write(chunk);\n  if (!canWrite) {\n    readable.pause();\n    writable.once('drain', () => readable.resume());\n  }\n});", note: "When the writable stream is full, pause the readable. Streams handle this automatically with pipeline()." }
  ],
  lessons: [

    {
      id: "nodejs-u2-1",
      title: "Buffers: binary data in JavaScript",
      node: true, kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "JavaScript doesn't have a binary type — strings are UTF-16. Node.js adds **Buffer**: a fixed-size raw memory allocation for binary data.\n\nBuffers are how Node.js handles files, network packets, images, and any data that isn't text. You'll create buffers, convert between strings and binary, and understand buffer sizing.\n\nKey insight: buffers are **mutable** and **fixed-size**. Changing a buffer changes the underlying bytes, and you can't resize a buffer after creation.",
      example: { lang: "js", code: "const buf = Buffer.from('hello');\nconsole.log(buf); // <Buffer 68 65 6c 6c 6f>\nconsole.log(buf.toString()); // 'hello'\nconsole.log(buf.length); // 5\nbuf[0] = 72; // Change 'h' (104) to 'H' (72)\nconsole.log(buf.toString()); // 'Hello'" },
      steps: [
        { text: "Create a buffer from the string 'node.js' using Buffer.from().",
          test: "T.expect(myBuffer instanceof Buffer, 'Create a Buffer using Buffer.from(\"node.js\")');\nT.eq(myBuffer.length, 7, 'A 7-character ASCII string is 7 bytes');" },
        { text: "Log the buffer to see its raw byte representation.",
          test: "T.expect(T.logged('Buffer bytes'), 'Log the buffer to see its binary representation');" },
        { text: "Access and log the first byte (index 0) as a number.",
          test: "T.expect(typeof firstByte === 'number', 'Access buffer[0] to get the first byte as a number');\nT.eq(firstByte, 110, \"The first byte is 110 — the ASCII code for 'n'\");" },
        { text: "Modify the first byte to uppercase the first letter, then log the buffer.",
          test: "T.eq(myBuffer.toString(), 'Node.js', 'Setting byte 0 to 78 uppercases the first letter');\nT.eq(myBuffer[0], 78, 'Byte 0 should now hold the ASCII code for N');" }
      ],
      files: [
        { name: "script.js", content: "// Working with Buffers\n\n// Create a buffer from a string\nconst myBuffer = Buffer.from('node.js');\n\n// Log the buffer to see its raw bytes\n\n\n// Access the first byte as a number\nconst firstByte = myBuffer[0];\n\n// Modify the first byte to uppercase the first letter\n// 'n' = 110, 'N' = 78 (ASCII)\n\n\n// Log the modified buffer\n" }
      ],
      hints: [
        "Just `console.log(myBuffer);` to see the binary representation like `<Buffer 6e 6f 64 65 2e 6a 73>`",
        "The first byte is `myBuffer[0]` — it's the ASCII code for 'n' (110)",
        "To uppercase: 'n' (110) to 'N' (78), so `myBuffer[0] = 78;`"
      ],
      solution: {
        "script.js": "// Working with Buffers\n\n// Create a buffer from a string\nconst myBuffer = Buffer.from('node.js');\n\n// Log the buffer to see its raw bytes\nconsole.log('Buffer bytes:', myBuffer);\n\n// Access the first byte as a number\nconst firstByte = myBuffer[0];\nconsole.log('First byte:', firstByte);   // 110, the ASCII code for 'n'\n\n// Modify the first byte to uppercase the first letter\n// 'n' = 110, 'N' = 78 (ASCII)\nmyBuffer[0] = 78;\n\n// Log the modified buffer\nconsole.log('Modified:', myBuffer.toString());\n"
      }
    },

    {
      id: "nodejs-u2-2",
      title: "Buffer operations: slicing, copying, concatenating",
      node: true, kind: "js", chip: "NODE", xp: 15, mins: 13,
      brief: "Buffers support common operations: **slicing** (view), **copying** (duplicate), and **concatenating** (join).\n\n- `buf.slice(start, end)` returns a view — shares memory with the original\n- `Buffer.copy(target)` copies bytes to another buffer\n- `Buffer.concat([buf1, buf2])` joins buffers into one\n\nUnderstanding which operations share memory vs copy is critical for performance and bugs.",
      example: { lang: "js", code: "const buf1 = Buffer.from('hello');\nconst buf2 = Buffer.from('world');\n\n// Slicing (shares memory)\nconst slice = buf1.slice(0, 2); // 'he'\nslice[0] = 72; // 'H'\nconsole.log(buf1.toString()); // 'Hello' — changed!\n\n// Copying (independent)\nconst copy = Buffer.alloc(5);\nbuf1.copy(copy);\n\n// Concatenating\nconst combined = Buffer.concat([buf1, Buffer.from(' '), buf2]);" },
      steps: [
        { text: "Create two buffers: buf1 = 'hello', buf2 = 'world'.",
          test: "T.expect(buf1 instanceof Buffer && buf2 instanceof Buffer, 'Create buf1 and buf2 with Buffer.from()');\nT.eq(buf2.toString(), 'world', 'buf2 is never modified, so it still reads \"world\"');\nT.eq(buf1.length, 5, 'buf1 should be 5 bytes');" },
        { text: "Slice buf1 to get first 3 letters ('hel').",
          test: "T.expect(slice instanceof Buffer, 'Create a slice with buf1.slice(0, 3)');\nT.eq(slice.length, 3, 'The slice should be 3 bytes long');\nT.eq(slice.toString(), buf1.slice(0, 3).toString(), 'The slice is a window onto buf1');" },
        { text: "Modify the slice to uppercase first letter, verify buf1 also changes.",
          test: "T.eq(buf1.toString(), 'Hello', 'slice() SHARES memory — writing slice[0] = 72 must change buf1 too');\nT.eq(slice[0], 72, 'and the slice itself holds the new byte');" },
        { text: "Create a copy of buf1 using Buffer.alloc and buf1.copy().",
          test: "T.expect(copy instanceof Buffer, 'Create an independent copy with Buffer.alloc()');\nT.eq(copy.length, 5, 'The copy should be the same size as the original');\nT.eq(copy.slice(1).toString(), 'ello', 'buf1.copy(copy) should have copied the bytes across');" },
        { text: "Modify the copy, verify buf1 does NOT change.",
          test: "T.eq(copy[0], 104, \"Set copy[0] = 104 to lowercase the copy's first letter\");\nT.eq(buf1.toString(), 'Hello', 'copy() gives INDEPENDENT memory — changing the copy must NOT touch buf1');" },
        { text: "Concatenate buf1, space buffer, and buf2 into one buffer.",
          test: "const a = Buffer.from('Hello');\nconst b = Buffer.from(' world');\nconst joined = Buffer.concat([a, b]);\nT.eq(joined.toString(), 'Hello world', 'Buffer.concat() joins buffers end to end');\nT.eq(joined.length, a.length + b.length, 'The result is as long as its parts combined');" }
      ],
      files: [
        { name: "script.js", content: "// Buffer operations\nconst buf1 = Buffer.from('hello');\nconst buf2 = Buffer.from('world');\n\n// Slicing (shares memory with original)\nconst slice = buf1.slice(0, 3);\n\n// Modify the slice and check if original changes\n\n// Copying (independent memory)\nconst copy = Buffer.alloc(5);\n\n// Copy buf1 into copy\n\n// Modify the copy and check if original changes\n\n// Concatenating\nconst combined = Buffer.concat([buf1, Buffer.from(' '), buf2]);\nconsole.log('Combined:', combined.toString());\n" }
      ],
      hints: [
        "For slicing: `const slice = buf1.slice(0, 3);` gets first 3 bytes",
        "For copying: `buf1.copy(copy);` copies all bytes from buf1 to copy",
        "The key difference: slice shares memory, copy is independent"
      ],
      solution: {
        "script.js": "// Buffer operations\nconst buf1 = Buffer.from('hello');\nconst buf2 = Buffer.from('world');\n\n// Slicing (shares memory with original)\nconst slice = buf1.slice(0, 3);\n\n// Modify the slice and check if original changes\nslice[0] = 72; // 'H'\nconsole.log('After slice modification:');\nconsole.log('slice:', slice.toString());\nconsole.log('buf1:', buf1.toString()); // Should be 'Hello'\n\n// Copying (independent memory)\nconst copy = Buffer.alloc(5);\n\n// Copy buf1 into copy\nbuf1.copy(copy);\nconsole.log('copy:', copy.toString());\n\n// Modify the copy and check if original changes\ncopy[0] = 104; // 'h'\nconsole.log('After copy modification:');\nconsole.log('copy:', copy.toString());\nconsole.log('buf1:', buf1.toString()); // Should still be 'Hello'\n\n// Concatenating\nconst combined = Buffer.concat([buf1, Buffer.from(' '), buf2]);\nconsole.log('Combined:', combined.toString());\n"
      }
    },

    {
      id: "nodejs-u2-3",
      title: "Readable streams: data flowing out",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "Streams process data **chunk by chunk** instead of loading everything into memory. A **Readable stream** emits data events as chunks arrive.\n\nStreams are how Node.js handles large files, network requests, and any data source that doesn't fit in memory at once.\n\nYou'll build a simulated readable stream that emits data chunks, then consume it with the data event.",
      example: { lang: "js", code: "const fs = require('fs');\nconst readable = fs.createReadStream('bigfile.txt');\n\nreadable.on('data', (chunk) => {\n  console.log('Got chunk:', chunk.length, 'bytes');\n});\n\nreadable.on('end', () => {\n  console.log('Done reading');\n});" },
      steps: [
        { text: "Create a `MockReadable` class with `data` event emitter.",
          test: "T.expect(typeof MockReadable === 'function', 'Create MockReadable class');\nconst stream = new MockReadable();\nT.expect(typeof stream.on === 'function', 'Stream should have .on() method for events');" },
        { text: "Add `push(chunk)` method that emits 'data' event with the chunk.",
          test: "let receivedChunk = null;\nstream.on('data', (chunk) => receivedChunk = chunk);\nstream.push('hello');\nT.eq(receivedChunk, 'hello', 'push() should emit data event with the chunk');" },
        { text: "Add `end()` method that emits 'end' event.",
          test: "let ended = false;\nstream.on('end', () => ended = true);\nstream.end();\nT.expect(ended, 'end() should emit end event');" },
        { text: "Create a stream that pushes chunks from an array, then ends.",
          test: "const arrStream = new MockReadable();\nlet chunks = [];\nlet ended = false;\narrStream.on('data', (c) => chunks.push(c));\narrStream.on('end', () => { ended = true; });\n['a', 'b', 'c'].forEach(c => arrStream.push(c));\narrStream.end();\nT.eq(chunks.length, 3, 'Should push all chunks then end');\nT.expect(ended, 'end() should still fire after the chunks');" }
      ],
      files: [
        { name: "script.js", content: "// Simulated Readable stream\nclass MockReadable {\n  constructor() {\n    this.listeners = {};\n  }\n\n  on(event, callback) {\n    // Register event listener\n  }\n\n  push(chunk) {\n    // Emit 'data' event with chunk\n  }\n\n  end() {\n    // Emit 'end' event\n  }\n}\n\n// Create a stream and use it\nconst stream = new MockReadable();\n\nstream.on('data', (chunk) => {\n  console.log('Received:', chunk);\n});\n\nstream.on('end', () => {\n  console.log('Stream ended');\n});\n\n// Push some data\nstream.push('Hello');\nstream.push('World');\nstream.end();\n" }
      ],
      hints: [
        "In `on()`: `if (!this.listeners[event]) this.listeners[event] = []; this.listeners[event].push(callback);`",
        "In `push()`: `if (this.listeners.data) this.listeners.data.forEach(cb => cb(chunk));`",
        "In `end()`: `if (this.listeners.end) this.listeners.end.forEach(cb => cb());`"
      ],
      solution: {
        "script.js": "// Simulated Readable stream\nclass MockReadable {\n  constructor() {\n    this.listeners = {};\n  }\n\n  on(event, callback) {\n    if (!this.listeners[event]) {\n      this.listeners[event] = [];\n    }\n    this.listeners[event].push(callback);\n  }\n\n  push(chunk) {\n    if (this.listeners.data) {\n      this.listeners.data.forEach(cb => cb(chunk));\n    }\n  }\n\n  end() {\n    if (this.listeners.end) {\n      this.listeners.end.forEach(cb => cb());\n    }\n  }\n}\n\n// Create a stream and use it\nconst stream = new MockReadable();\n\nstream.on('data', (chunk) => {\n  console.log('Received:', chunk);\n});\n\nstream.on('end', () => {\n  console.log('Stream ended');\n});\n\n// Push some data\nstream.push('Hello');\nstream.push('World');\nstream.end();\n"
      }
    },

    {
      id: "nodejs-u2-4",
      title: "Writable streams: data flowing in",
      kind: "js", chip: "NODE", xp: 15, mins: 12,
      brief: "A **Writable stream** receives data chunks. It can handle backpressure (when it can't keep up) and signals when it's ready for more.\n\nKey events: `'drain'` (ready for more data), `'finish'` (all writes done), `'error'` (write failed).\n\nYou'll build a writable stream that buffers data and simulates async write operations.",
      example: { lang: "js", code: "const fs = require('fs');\nconst writable = fs.createWriteStream('output.txt');\n\nwritable.write('Hello');\nwritable.write('World');\nwritable.end();\n\nwritable.on('finish', () => {\n  console.log('Done writing');\n});" },
      steps: [
        { text: "Create `MockWritable` class with event emitter and internal buffer.",
          test: "T.expect(typeof MockWritable === 'function', 'Create MockWritable class');\nconst writable = new MockWritable();\nT.expect(Array.isArray(writable.buffer), 'Writable should have internal buffer array');" },
        { text: "Add `write(chunk)` method that adds to buffer and returns true if ready.",
          test: "const fresh = new MockWritable();\nconst result = fresh.write('hello');\nT.expect(typeof result === 'boolean', 'write() should return boolean indicating if ready');\nT.eq(fresh.buffer.length, 1, 'Chunk should be added to buffer');\nT.eq(fresh.buffer[0], 'hello', 'The chunk itself should be what was written');" },
        { text: "Add `end()` method that emits 'finish' event.",
          test: "let finished = false;\nwritable.on('finish', () => finished = true);\nwritable.end();\nT.expect(finished, 'end() should emit finish event');" },
        { text: "Simulate backpressure: return false when buffer has 3+ chunks.",
          test: "const busy = new MockWritable();\nbusy.write('a');\nbusy.write('b');\nT.eq(busy.write('c'), false, 'Should return false when buffer is full (3+ chunks)');" }
      ],
      files: [
        { name: "script.js", content: "// Simulated Writable stream\nclass MockWritable {\n  constructor() {\n    this.listeners = {};\n    this.buffer = [];\n    this.maxBuffer = 3; // Simulate backpressure limit\n  }\n\n  on(event, callback) {\n    // Register event listener\n  }\n\n  write(chunk) {\n    // Add to buffer, return false if full\n  }\n\n  end() {\n    // Emit 'finish' event\n  }\n}\n\n// Create a writable stream\nconst writable = new MockWritable();\n\nwritable.on('finish', () => {\n  console.log('Writing finished');\n  console.log('Buffer contents:', writable.buffer);\n});\n\n// Write some data\nconsole.log('Writing hello:', writable.write('Hello'));\nconsole.log('Writing world:', writable.write('World'));\nconsole.log('Writing !:', writable.write('!'));\nconsole.log('Writing extra:', writable.write('Extra'));\n\nwritable.end();\n" }
      ],
      hints: [
        "In `write()`: add to buffer, return `this.buffer.length < this.maxBuffer`",
        "When returning false, the stream is experiencing backpressure and shouldn't receive more data",
        "In `end()`: emit the 'finish' event like the readable stream emits 'end'"
      ],
      solution: {
        "script.js": "// Simulated Writable stream\nclass MockWritable {\n  constructor() {\n    this.listeners = {};\n    this.buffer = [];\n    this.maxBuffer = 3; // Simulate backpressure limit\n  }\n\n  on(event, callback) {\n    if (!this.listeners[event]) {\n      this.listeners[event] = [];\n    }\n    this.listeners[event].push(callback);\n  }\n\n  write(chunk) {\n    this.buffer.push(chunk);\n    return this.buffer.length < this.maxBuffer;\n  }\n\n  end() {\n    if (this.listeners.finish) {\n      this.listeners.finish.forEach(cb => cb());\n    }\n  }\n}\n\n// Create a writable stream\nconst writable = new MockWritable();\n\nwritable.on('finish', () => {\n  console.log('Writing finished');\n  console.log('Buffer contents:', writable.buffer);\n});\n\n// Write some data\nconsole.log('Writing hello:', writable.write('Hello'));\nconsole.log('Writing world:', writable.write('World'));\nconsole.log('Writing !:', writable.write('!'));\nconsole.log('Writing extra:', writable.write('Extra'));\n\nwritable.end();\n"
      }
    },

    {
      id: "nodejs-u2-5",
      title: "Pipe: connecting readable to writable",
      node: true, kind: "js", chip: "NODE", xp: 15, mins: 13,
      brief: "The **pipe** method connects a readable stream to a writable stream, handling data flow and backpressure automatically.\n\n`readable.pipe(writable)` is the pattern for: file copying, HTTP responses, compression, encryption, and any data transformation.\n\nYou'll implement a simple pipe function that connects your mock streams.",
      example: { lang: "js", code: "const fs = require('fs');\n\nreadable.pipe(writable);\n\n// Equivalent to:\nreadable.on('data', (chunk) => {\n  writable.write(chunk);\n});\nreadable.on('end', () => {\n  writable.end();\n});" },
      steps: [
        { text: "Create `pipe(readable, writable)` function.",
          test: "T.expect(typeof pipe === 'function', 'Create pipe(readable, writable) function');" },
        { text: "Pipe should forward data from readable to writable.",
          test: "const r = new MockReadable();\nconst w = new MockWritable();\npipe(r, w);\nr.push('hello');\nT.eq(w.buffer[0], 'hello', 'Data should flow from readable to writable');" },
        { text: "Pipe should end writable when readable ends.",
          test: "const r2 = new MockReadable();\nconst w2 = new MockWritable();\nlet finished = false;\nw2.on('finish', () => finished = true);\npipe(r2, w2);\nr2.end();\nT.expect(finished, 'Writable should end when readable ends');" },
        { text: "Handle backpressure: pause readable when writable returns false.",
          test: "const r3 = new MockReadable();\nconst w3 = new MockWritable();\nlet paused = false;\nr3.pause = () => paused = true;\npipe(r3, w3);\nr3.push('a'); r3.push('b'); r3.push('c'); // Should trigger backpressure\nT.expect(paused, 'Readable should pause when writable is full');" }
      ],
      files: [
        { name: "script.js", content: "// Pipe function to connect readable and writable streams\nfunction pipe(readable, writable) {\n  // Forward data from readable to writable\n  // Handle backpressure\n  // End writable when readable ends\n}\n\n// Use the pipe function\nconst readable = new MockReadable();\nconst writable = new MockWritable();\n\nwritable.on('finish', () => {\n  console.log('Pipe finished');\n  console.log('Writable buffer:', writable.buffer);\n});\n\npipe(readable, writable);\n\n// Push data through the pipe\nreadable.push('Chunk 1');\nreadable.push('Chunk 2');\nreadable.push('Chunk 3');\nreadable.end();\n" }
      ],
      hints: [
        "In `pipe()`: `readable.on('data', (chunk) => { const canWrite = writable.write(chunk); if (!canWrite) readable.pause(); });`",
        "Resume readable when writable drains: `writable.on('drain', () => readable.resume());`",
        "End writable when readable ends: `readable.on('end', () => writable.end());`"
      ],
      solution: {
        "script.js": "// Pipe function to connect readable and writable streams\nfunction pipe(readable, writable) {\n  readable.on('data', (chunk) => {\n    const canWrite = writable.write(chunk);\n    if (!canWrite) {\n      readable.pause();\n      writable.once('drain', () => readable.resume());\n    }\n  });\n  readable.on('end', () => {\n    writable.end();\n  });\n}\n\n// Use the pipe function\nconst readable = new MockReadable();\nconst writable = new MockWritable();\n\nwritable.on('finish', () => {\n  console.log('Pipe finished');\n  console.log('Writable buffer:', writable.buffer);\n});\n\npipe(readable, writable);\n\n// Push data through the pipe\nreadable.push('Chunk 1');\nreadable.push('Chunk 2');\nreadable.push('Chunk 3');\nreadable.end();\n"
      }
    },

    {
      id: "nodejs-u2-6",
      title: "Transform streams: modifying data in flight",
      node: true, kind: "js", chip: "NODE", xp: 15, mins: 13,
      brief: "A **Transform stream** is both readable and writable — it modifies data as it passes through. Examples: compression (zlib), encryption (crypto), encoding (iconv).\n\nTransform streams are the middle of a pipeline: `readable.pipe(transform).pipe(writable)`.\n\nYou'll build a transform stream that converts text to uppercase as it flows through.",
      example: { lang: "js", code: "const { Transform } = require('stream');\n\nconst upper = new Transform({\n  transform(chunk, encoding, callback) {\n    this.push(chunk.toString().toUpperCase());\n    callback();\n  }\n});\n\nreadable.pipe(upper).pipe(writable);" },
      steps: [
        { text: "Create `MockTransform` class that extends both readable and writable.",
          test: "T.expect(typeof MockTransform === 'function', 'Create MockTransform class');\nconst transform = new MockTransform();\nT.expect(typeof transform.on === 'function', 'Should have readable interface');\nT.expect(typeof transform.write === 'function', 'Should have writable interface');" },
        { text: "Add `transform(chunk)` method that processes and emits modified data.",
          test: "const t = new MockTransform();\nlet transformed = null;\nt.on('data', (c) => transformed = c);\nt.transform('hello');\nT.eq(transformed, 'HELLO', 'Transform should uppercase the chunk');" },
        { text: "Transform should act as both readable and writable in a pipeline.",
          test: "const r = new MockReadable();\nconst t = new MockTransform();\nconst w = new MockWritable();\nr.pipe(t);\nt.pipe(w);\nr.push('hello');\nT.eq(w.buffer[0], 'HELLO', 'Data should flow through transform');\nr.end();\nT.expect(w.finished, 'Ending the source should end the destination');" }
      ],
      files: [
        { name: "script.js", content: "// Transform stream that uppercases text\nclass MockTransform extends MockReadable {\n  constructor() {\n    super();\n    this.writableBuffer = [];\n  }\n\n  // Writable side: accept a chunk\n  write(chunk) {\n    this.transform(chunk);\n  }\n\n  // Transform it and push it out the readable side\n  transform(chunk) {\n    // Process chunk and push result\n  }\n}\n\n// Use transform in a pipeline\nconst readable = new MockReadable();\nconst transform = new MockTransform();\nconst writable = new MockWritable();\n\nwritable.on('finish', () => {\n  console.log('Final output:', writable.buffer);\n});\n\nreadable.pipe(transform);\ntransform.pipe(writable);\n\nreadable.push('hello');\nreadable.push('world');\nreadable.end();\n" }
      ],
      hints: [
        "In `transform()`: `this.push(chunk.toString().toUpperCase());` — process and emit as readable data",
        "The transform stream receives data via `write()` (writable interface) and emits it via `push()` (readable interface)",
        "This makes it a perfect middle piece in a pipeline"
      ],
      solution: {
        "script.js": "// Transform stream that uppercases text\nclass MockTransform extends MockReadable {\n  constructor() {\n    super();\n    this.writableBuffer = [];\n  }\n\n  // Writable side: accept a chunk\n  write(chunk) {\n    this.transform(chunk);\n  }\n\n  // Transform it and push it out the readable side\n  transform(chunk) {\n    this.push(chunk.toString().toUpperCase());\n  }\n}\n\n// Use transform in a pipeline\nconst readable = new MockReadable();\nconst transform = new MockTransform();\nconst writable = new MockWritable();\n\nwritable.on('finish', () => {\n  console.log('Final output:', writable.buffer);\n});\n\nreadable.pipe(transform);\ntransform.pipe(writable);\n\nreadable.push('hello');\nreadable.push('world');\nreadable.end();\n"
      }
    },

    {
      id: "nodejs-quiz-2",
      title: "Unit 2 quiz: Streams & Buffers",
      kind: "quiz", xp: 10,
      brief: "Buffers, stream types, piping, backpressure, and transforms. 80% to pass.",
      questions: [
        { q: "What does Buffer.from('hello') create?",
          choices: ["A string", "A fixed-size binary memory allocation", "A file handle", "An array of characters with automatic resizing"],
          answer: 1, explain: "Buffers are fixed-size raw binary memory. They're how Node.js handles binary data like files and network packets." },
        { q: "What happens when you modify a buffer slice?",
          choices: ["Only the slice changes", "Only the original buffer changes", "Both change (they share memory)", "Neither changes (slices are read-only)"],
          answer: 2, explain: "buf.slice() returns a view that shares memory with the original. Modifying the slice modifies the original buffer." },
        { q: "Which stream type emits data events?",
          choices: ["Writable only", "Readable only", "Both readable and writable", "Transform only"],
          answer: 1, explain: "Readable streams emit 'data' events as chunks arrive. Writable streams receive data via write()." },
        { q: "What does pipe() handle automatically?",
          choices: ["Compressing files before they are written", "Data flow and backpressure", "Network connections", "Database queries"],
          answer: 1, explain: "pipe() connects readable to writable, handling data flow and pausing the readable when the writable can't keep up (backpressure)." },
        { q: "What is a transform stream?",
          choices: ["A stream that only reads", "A stream that only writes", "A stream that modifies data as it passes through", "A stream that compresses data before writing it to disk"],
          answer: 2, explain: "Transform streams are both readable and writable — they modify data in flight. Examples: compression, encryption, encoding." },
        { q: "When does a writable stream emit 'drain'?",
          choices: ["When it's full", "When it's ready for more data", "When it has finished flushing every queued write", "When it encounters an error"],
          answer: 1, explain: "The 'drain' event signals the writable stream is ready for more data after being full (backpressure relieved)." }
      ]
    }
  ]
});