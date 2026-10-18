/* Advanced API Design — Unit 4: Conditional writes */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  window.CODELAB.addUnit("api", {
    id: "api-u4",
    title: "Conditional writes",
    icon: "🔒",
    blurb: "You met ETags in How the Web Works, where they saved bytes on a GET. The same validator on a write path is how two clients stop silently overwriting each other.",
    cheat: [
      { h: "The lost update", lang: "js", code: "// A reads  { title: \"Draft\", tags: [\"a\"] }\n// B reads  { title: \"Draft\", tags: [\"a\"] }\n// A writes { title: \"Final\", tags: [\"a\"] }\n// B writes { title: \"Draft\", tags: [\"a\",\"b\"] }\n// -> title is \"Draft\" again. A's edit is gone.", note: "Nothing errored. Both writes succeeded. The last writer simply wrote a document built from a snapshot that was already out of date." },
      { h: "An ETag is a version you can compare", lang: "js", code: "const etag = '\"' + sha256(JSON.stringify(doc)) + '\"';\n// GET -> 200 + ETag: \"9f2b…\"", note: "Derived from the content, so it changes exactly when the content does. The quotes are part of the syntax, not decoration." },
      { h: "If-Match turns a write into a bet", lang: "js", code: "// PUT /api/docs/1\n// If-Match: \"9f2b…\"\n//   still current -> 200, write applied\n//   moved on      -> 412 Precondition Failed", note: "\"Apply this only if the thing I read is still the thing you have.\" The server compares, the client never has to lock anything." },
      { h: "412 vs 409", lang: "js", code: "412  // your validator is stale; re-read and retry\n409  // the request conflicts with the\n     // resource's state, and re-reading\n     // will not help", note: "412 is a precondition you supplied that did not hold. 409 is a genuine conflict in the domain — merging two branches, double-booking a seat." },
      { h: "428 refuses to guess", lang: "js", code: "// PUT with no If-Match at all\n// -> 428 Precondition Required", note: "RFC 6585. An unconditional write to a contended resource is a lost update waiting to happen, so the server declines to accept one rather than silently taking the risk." },
      { h: "If-None-Match: * means \"only if absent\"", lang: "js", code: "// PUT /api/docs/7\n// If-None-Match: *\n//   does not exist -> 201 created\n//   already there  -> 412", note: "The create-exactly-once bet. The mirror image of If-Match, and the reason a retried create does not quietly overwrite the original." }
    ],
    lessons: [

      /* ---------- api-u4-1 ---------- */
      {
        id: "api-u4-1",
        title: "The lost update",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "Two people open the same document. One fixes the title, the other adds a tag. Both save. One of those edits is now gone, and **nothing anywhere reported an error**.\n\nThis is the lost update, and it is the single most common data-loss bug in CRUD APIs. It needs no concurrency primitives to reproduce — just two reads of the same snapshot followed by two writes, which is what every \"read, modify, write\" client does.\n\nDatabase Mastery showed you the mechanism at the storage layer. This unit is its HTTP expression: the fix is not a lock, it is a **conditional request** — but first, reproduce the loss and see exactly how quiet it is.\n\nYou are grading the bug again. Make it happen, then prove which edit survived.",
        steps: [
          { text: "`readDoc()` returns a copy of the stored document, and `writeDoc(next)` replaces it wholesale — a plain PUT, the way most APIs start.",
            test: R`
T.expect(typeof readDoc === 'function', 'Define readDoc().');
T.expect(typeof writeDoc === 'function', 'Define writeDoc(next).');
/* The file's own demo call has already run, so start from a known store. */
stored = { id: 1, title: "Draft", tags: ["a"] };
const a = readDoc();
T.eq(a, { id: 1, title: "Draft", tags: ["a"] }, 'readDoc returns the stored document');
a.title = "Changed locally";
T.eq(readDoc().title, "Draft", 'readDoc must return a COPY — editing what it returned must not reach the store');
writeDoc({ id: 1, title: "Written", tags: ["a"] });
T.eq(readDoc().title, "Written", 'writeDoc replaces the stored document');
` },
          { text: "Run the two clients. A reads and renames; B reads the *same* snapshot and adds a tag; both write, A first.",
            test: R`
T.expect(typeof twoClients === 'function', 'Define twoClients().');
const out = twoClients();
T.eq(out.aWrote, { id: 1, title: "Final", tags: ["a"] }, 'A renamed the document and wrote it');
T.eq(out.bWrote, { id: 1, title: "Draft", tags: ["a", "b"] }, 'B added a tag — but B\'s copy still says "Draft", because B read before A wrote');
` },
          { text: "Now show the damage: B's write was accepted, and A's rename is gone.",
            test: R`
const out = twoClients();
T.eq(out.after, { id: 1, title: "Draft", tags: ["a", "b"] }, 'the stored document has B\'s tag and has lost A\'s title');
T.eq(out.lost, "Final", 'A\'s edit — the title "Final" — is what vanished');
T.expect(out.errors === 0, 'and the quiet part: BOTH writes succeeded. Nothing failed, nothing warned, nobody found out.');
T.expect(T.logged("Final"), 'log the edit that was lost so you can see what the user lost');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// Read-modify-write, twice, against one snapshot. No locks, no errors,",
            "// and one of the two edits is simply gone.",
            "",
            "let stored = { id: 1, title: \"Draft\", tags: [\"a\"] };",
            "",
            "function readDoc() {",
            "  // return a COPY, the way a real GET would — the client cannot",
            "  // reach into your store by holding the object you returned",
            "}",
            "",
            "function writeDoc(next) {",
            "  // replace the stored document wholesale, like an unconditional PUT",
            "}",
            "",
            "function twoClients() {",
            "  stored = { id: 1, title: \"Draft\", tags: [\"a\"] };   // reset",
            "  // 1) const a = readDoc();  a.title = \"Final\";",
            "  // 2) const b = readDoc();  b.tags = b.tags.concat(\"b\");   <- B read the SAME snapshot",
            "  // 3) writeDoc(a);  then  writeDoc(b);",
            "  // 4) return { aWrote: a, bWrote: b, after: readDoc(), lost: \"Final\", errors: 0 }",
            "}",
            "",
            "// log the lost edit",
            "") }
        ],
        hints: [
          "A deep copy is the honest one here, because the document holds an array: `return JSON.parse(JSON.stringify(stored));`",
          "`writeDoc` is the same move in reverse: `stored = JSON.parse(JSON.stringify(next));`",
          "The ordering is the whole lesson — BOTH reads happen before EITHER write. If you write A before B reads, there is no bug to see.",
          "`b.tags = b.tags.concat(\"b\")` rather than `b.tags.push(\"b\")` reads better, but either works since `b` is already a copy."
        ],
        solution: {
          "script.js": L(
            "// Read-modify-write, twice, against one snapshot. No locks, no errors,",
            "// and one of the two edits is simply gone.",
            "",
            "let stored = { id: 1, title: \"Draft\", tags: [\"a\"] };",
            "",
            "function readDoc() {",
            "  return JSON.parse(JSON.stringify(stored));",
            "}",
            "",
            "function writeDoc(next) {",
            "  stored = JSON.parse(JSON.stringify(next));",
            "}",
            "",
            "function twoClients() {",
            "  stored = { id: 1, title: \"Draft\", tags: [\"a\"] };   // reset",
            "",
            "  const a = readDoc();          // A opens the document",
            "  const b = readDoc();          // B opens it too, same snapshot",
            "",
            "  a.title = \"Final\";            // A renames it",
            "  b.tags = b.tags.concat(\"b\");  // B adds a tag",
            "",
            "  writeDoc(a);                  // A saves — fine",
            "  writeDoc(b);                  // B saves — and clobbers A",
            "",
            "  return { aWrote: a, bWrote: b, after: readDoc(), lost: \"Final\", errors: 0 };",
            "}",
            "",
            "// log the lost edit",
            "console.log(\"lost edit: \" + twoClients().lost);",
            "")
        }
      },

      /* ---------- api-u4-2 ---------- */
      {
        id: "api-u4-2",
        title: "ETag and If-Match",
        kind: "js", chip: "API", xp: 20, mins: 14,
        crypto: true,
        brief: "You already know what an ETag is: How the Web Works used one to turn a repeat `GET` into a `304` with no bytes. The validator was a way to ask *\"is my copy still current?\"*\n\nA write asks the **same question**, for a different reason. Instead of *\"may I skip the download?\"* it asks *\"may I apply this edit?\"* — and the answer is the difference between saving a change and destroying someone else's.\n\nThe client sends the validator back in `If-Match`:\n\n- the document still has that ETag → the write applies\n- it has moved on → **`412 Precondition Failed`**, nothing is written, and the client re-reads and retries\n\nDerive the ETag from the content with `sha256`, so it changes exactly when the document does. The quotes around it are part of the syntax.\n\nThen run the two clients from the last lesson against it. B is refused instead of being allowed to destroy A's work.",
        steps: [
          { text: "`etagFor(doc)` is a quoted sha256 of the document, and `GET` returns it in an `ETag` header.",
            test: R`
T.expect(typeof etagFor === 'function', 'Define etagFor(doc).');
const tag = etagFor({ id: 1, title: "Draft", tags: ["a"] });
T.expect(/^"[0-9a-f]{64}"$/.test(tag), 'an ETag here is a sha256 hex digest wrapped in double quotes — the quotes are part of the header syntax');
T.expect(etagFor({ id: 1, title: "Draft", tags: ["a"] }) === tag, 'the same content must always produce the same ETag');
T.expect(etagFor({ id: 1, title: "Final", tags: ["a"] }) !== tag, 'different content must produce a different one');
const res = handleRequest({ method: "GET", path: "/api/docs/1", headers: {} });
T.eq(res.status, 200, 'GET returns the document');
T.eq(res.headers["ETag"], etagFor(res.body), 'and its ETag, matching the body it just sent');
` },
          { text: "`PUT` with a matching `If-Match` applies the write and returns the **new** ETag. With a stale one it answers `412` and changes nothing.",
            test: R`
const read = handleRequest({ method: "GET", path: "/api/docs/1", headers: {} });
const tag = read.headers["ETag"];
const ok = handleRequest({ method: "PUT", path: "/api/docs/1", headers: { "If-Match": tag }, body: { id: 1, title: "Final", tags: ["a"] } });
T.eq(ok.status, 200, 'a matching If-Match lets the write through');
T.eq(ok.body.title, "Final", 'and the write took effect');
T.eq(ok.headers["ETag"], etagFor(ok.body), 'the response carries the NEW ETag, so the client can keep writing without re-reading');
T.expect(ok.headers["ETag"] !== tag, 'which is necessarily different from the one it sent');
const stale = handleRequest({ method: "PUT", path: "/api/docs/1", headers: { "If-Match": tag }, body: { id: 1, title: "Something else", tags: [] } });
T.eq(stale.status, 412, 'the same now-stale ETag is refused with 412 Precondition Failed');
T.eq(handleRequest({ method: "GET", path: "/api/docs/1", headers: {} }).body.title, "Final", 'and the refused write changed nothing at all');
` },
          { text: "Re-run the two clients through the API. A succeeds, B is refused, and nothing is lost.",
            test: R`
T.expect(typeof twoClients === 'function', 'Define twoClients().');
const out = twoClients();
T.eq(out.aStatus, 200, 'A read, edited and wrote against a current ETag — accepted');
T.eq(out.bStatus, 412, 'B wrote against the ETag it read BEFORE A\'s write — refused');
T.eq(out.after.title, "Final", 'A\'s rename survives');
T.eq(out.after.tags, ["a"], 'and B\'s write never landed');
T.eq(out.bRetryStatus, 200, 'B re-reads, re-applies its change to the current document, and writes again — now it is accepted');
T.eq(out.finalDoc, { id: 1, title: "Final", tags: ["a", "b"] }, 'and the end state has BOTH edits — which is what was lost last lesson');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// The same validator you used to skip a download, used to refuse a write.",
            "",
            "let stored = { id: 1, title: \"Draft\", tags: [\"a\"] };",
            "",
            "function etagFor(doc) {",
            "  // a quoted sha256 of the document's JSON — sha256() is available here",
            "}",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.path !== \"/api/docs/1\") return json(404, { error: \"not found\" });",
            "",
            "  if (req.method === \"GET\") {",
            "    // 200, the document, and its ETag",
            "  }",
            "",
            "  if (req.method === \"PUT\") {",
            "    // If-Match matches etagFor(stored) -> write, 200, NEW ETag",
            "    // otherwise                        -> 412, write nothing",
            "  }",
            "  return json(405, { error: \"method not allowed\" });",
            "}",
            "",
            "function twoClients() {",
            "  stored = { id: 1, title: \"Draft\", tags: [\"a\"] };   // reset",
            "  // A: GET, rename to \"Final\", PUT with the ETag it read   -> 200",
            "  // B: GET happened BEFORE A's PUT, so B holds the old ETag -> 412",
            "  // B then re-reads, re-applies \"add tag b\", and PUTs again -> 200",
            "  // return { aStatus, bStatus, after, bRetryStatus, finalDoc }",
            "}",
            "") }
        ],
        hints: [
          "`return '\"' + sha256(JSON.stringify(doc)) + '\"';` — build the quotes into the value so every comparison is apples to apples.",
          "The PUT branch is one comparison: `if (req.headers[\"If-Match\"] !== etagFor(stored)) return json(412, { error: \"precondition failed\" });` then write and `return json(200, stored, { ETag: etagFor(stored) });`",
          "In `twoClients`, capture B's ETag BEFORE A writes — that is the whole scenario: `const bTag = handleRequest({ method: \"GET\", path: \"/api/docs/1\", headers: {} }).headers[\"ETag\"];` up at the top, next to A's read.",
          "B's retry re-reads to get both the current document and the current ETag, then applies its change to THAT: `const fresh = handleRequest({ method: \"GET\", path: \"/api/docs/1\", headers: {} }); const merged = Object.assign({}, fresh.body, { tags: fresh.body.tags.concat(\"b\") });`"
        ],
        solution: {
          "script.js": L(
            "// The same validator you used to skip a download, used to refuse a write.",
            "",
            "let stored = { id: 1, title: \"Draft\", tags: [\"a\"] };",
            "",
            "function etagFor(doc) {",
            "  return '\"' + sha256(JSON.stringify(doc)) + '\"';",
            "}",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.path !== \"/api/docs/1\") return json(404, { error: \"not found\" });",
            "",
            "  if (req.method === \"GET\") {",
            "    return json(200, JSON.parse(JSON.stringify(stored)), { \"ETag\": etagFor(stored) });",
            "  }",
            "",
            "  if (req.method === \"PUT\") {",
            "    if (req.headers[\"If-Match\"] !== etagFor(stored)) {",
            "      return json(412, { error: \"precondition failed\" });",
            "    }",
            "    stored = JSON.parse(JSON.stringify(req.body));",
            "    return json(200, JSON.parse(JSON.stringify(stored)), { \"ETag\": etagFor(stored) });",
            "  }",
            "  return json(405, { error: \"method not allowed\" });",
            "}",
            "",
            "function twoClients() {",
            "  stored = { id: 1, title: \"Draft\", tags: [\"a\"] };   // reset",
            "",
            "  const aRead = handleRequest({ method: \"GET\", path: \"/api/docs/1\", headers: {} });",
            "  const bRead = handleRequest({ method: \"GET\", path: \"/api/docs/1\", headers: {} });",
            "",
            "  const aDoc = Object.assign({}, aRead.body, { title: \"Final\" });",
            "  const aRes = handleRequest({ method: \"PUT\", path: \"/api/docs/1\",",
            "    headers: { \"If-Match\": aRead.headers[\"ETag\"] }, body: aDoc });",
            "",
            "  const bDoc = Object.assign({}, bRead.body, { tags: bRead.body.tags.concat(\"b\") });",
            "  const bRes = handleRequest({ method: \"PUT\", path: \"/api/docs/1\",",
            "    headers: { \"If-Match\": bRead.headers[\"ETag\"] }, body: bDoc });",
            "",
            "  const after = handleRequest({ method: \"GET\", path: \"/api/docs/1\", headers: {} }).body;",
            "",
            "  // B does what a 412 tells it to: read again, re-apply, retry.",
            "  const fresh = handleRequest({ method: \"GET\", path: \"/api/docs/1\", headers: {} });",
            "  const merged = Object.assign({}, fresh.body, { tags: fresh.body.tags.concat(\"b\") });",
            "  const bRetry = handleRequest({ method: \"PUT\", path: \"/api/docs/1\",",
            "    headers: { \"If-Match\": fresh.headers[\"ETag\"] }, body: merged });",
            "",
            "  return {",
            "    aStatus: aRes.status,",
            "    bStatus: bRes.status,",
            "    after: after,",
            "    bRetryStatus: bRetry.status,",
            "    finalDoc: handleRequest({ method: \"GET\", path: \"/api/docs/1\", headers: {} }).body",
            "  };",
            "}",
            "")
        }
      },

      /* ---------- api-u4-3 ---------- */
      {
        id: "api-u4-3",
        title: "428, and refusing to guess",
        kind: "js", chip: "API", xp: 15, mins: 12,
        crypto: true,
        brief: "The last lesson left a hole. A client that sends **no** `If-Match` at all still gets its write applied — so the lost update is one forgetful client away from coming straight back.\n\nYou have two options, and both are defensible:\n\n- **Accept it.** Fine for a resource with one writer, where there is nothing to lose.\n- **Refuse it.** For anything genuinely contended, answer **`428 Precondition Required`** ([RFC 6585](https://www.rfc-editor.org/rfc/rfc6585.html#section-3)) — \"I will not take this write without a precondition, because doing so risks destroying someone's work.\"\n\n428 exists precisely so the server does not have to choose between silently taking the risk and inventing a non-standard error. Note what it is *not*: it is not 400 (the request was well-formed) and not 412 (no precondition failed — there wasn't one).\n\nThere is one more distinction to get right. A **`409 Conflict`** is a conflict in your domain that re-reading will not fix. A 412 means *your validator is stale; go re-read*. Telling a client to retry when retrying cannot help is worse than no answer at all.",
        steps: [
          { text: "A `PUT` with no `If-Match` is now a `428`, and nothing is written.",
            test: R`
const before = handleRequest({ method: "GET", path: "/api/docs/1", headers: {} }).body;
const res = handleRequest({ method: "PUT", path: "/api/docs/1", headers: {}, body: { id: 1, title: "Sneaky", tags: [] } });
T.eq(res.status, 428, 'an unconditional write is refused with 428 Precondition Required');
T.eq(handleRequest({ method: "GET", path: "/api/docs/1", headers: {} }).body, before, 'and the document is untouched');
T.expect(res.status !== 400, 'it is not a 400 — the request was perfectly well-formed');
T.expect(res.status !== 412, 'and not a 412 — no precondition FAILED, there simply was not one');
` },
          { text: "`If-Match: *` means \"only if it exists at all\" — the one unconditional form that is still safe, because it cannot clobber a document that was replaced by a different one.",
            test: R`
const star = handleRequest({ method: "PUT", path: "/api/docs/1", headers: { "If-Match": "*" }, body: { id: 1, title: "Starred", tags: [] } });
T.eq(star.status, 200, 'If-Match: * is accepted while the document exists');
T.eq(handleRequest({ method: "GET", path: "/api/docs/1", headers: {} }).body.title, "Starred", 'and the write landed');
const gone = handleRequest({ method: "PUT", path: "/api/docs/99", headers: { "If-Match": "*" }, body: { id: 99 } });
T.eq(gone.status, 404, 'on a document that does not exist there is nothing to match, so it is a 404');
` },
          { text: "Distinguish 412 from 409: `classify(situation)` returns the status each case deserves.",
            test: R`
T.expect(typeof classify === 'function', 'Define classify(situation).');
T.eq(classify("stale-etag"), 412, 'a validator that has moved on: re-read and retry — 412');
T.eq(classify("no-precondition"), 428, 'no precondition offered on a contended resource — 428');
T.eq(classify("seat-already-booked"), 409, 'someone else took the last seat: re-reading will not help, the request can never succeed as written — 409');
T.eq(classify("unparseable-body"), 400, 'a body the server cannot read at all is still a plain 400');
T.eq(classify("anything-else"), 200, 'nothing wrong — 200');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// 412: your validator is stale, re-read and retry.",
            "// 428: you offered no validator and this resource is contended.",
            "// 409: the domain says no, and retrying will not change that.",
            "",
            "let docs = { 1: { id: 1, title: \"Draft\", tags: [\"a\"] } };",
            "",
            "function etagFor(doc) { return '\"' + sha256(JSON.stringify(doc)) + '\"'; }",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function handleRequest(req) {",
            "  const id = Number(req.path.split(\"/\")[3]);",
            "  const doc = docs[id];",
            "",
            "  if (req.method === \"GET\") {",
            "    if (!doc) return json(404, { error: \"not found\" });",
            "    return json(200, JSON.parse(JSON.stringify(doc)), { \"ETag\": etagFor(doc) });",
            "  }",
            "",
            "  if (req.method === \"PUT\") {",
            "    if (!doc) return json(404, { error: \"not found\" });",
            "    const ifMatch = req.headers[\"If-Match\"];",
            "    // missing            -> 428",
            "    // \"*\"                -> allowed (the document exists; we checked)",
            "    // equal to etagFor   -> allowed",
            "    // anything else      -> 412",
            "  }",
            "  return json(405, { error: \"method not allowed\" });",
            "}",
            "",
            "function classify(situation) {",
            "  // \"stale-etag\" -> 412, \"no-precondition\" -> 428,",
            "  // \"seat-already-booked\" -> 409, \"unparseable-body\" -> 400, else 200",
            "}",
            "") }
        ],
        hints: [
          "Order the PUT guards exactly as listed — the 404 first, then the missing header, then `*`, then the comparison: `if (ifMatch === undefined) return json(428, { error: \"precondition required\" });`",
          "`if (ifMatch !== \"*\" && ifMatch !== etagFor(doc)) return json(412, { error: \"precondition failed\" });` handles the last two cases in one line.",
          "Then apply the write: `docs[id] = JSON.parse(JSON.stringify(req.body)); return json(200, docs[id], { ETag: etagFor(docs[id]) });`",
          "`classify` is a lookup with a default: `const BY = { \"stale-etag\": 412, \"no-precondition\": 428, \"seat-already-booked\": 409, \"unparseable-body\": 400 }; return BY[situation] || 200;`"
        ],
        solution: {
          "script.js": L(
            "// 412: your validator is stale, re-read and retry.",
            "// 428: you offered no validator and this resource is contended.",
            "// 409: the domain says no, and retrying will not change that.",
            "",
            "let docs = { 1: { id: 1, title: \"Draft\", tags: [\"a\"] } };",
            "",
            "function etagFor(doc) { return '\"' + sha256(JSON.stringify(doc)) + '\"'; }",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function handleRequest(req) {",
            "  const id = Number(req.path.split(\"/\")[3]);",
            "  const doc = docs[id];",
            "",
            "  if (req.method === \"GET\") {",
            "    if (!doc) return json(404, { error: \"not found\" });",
            "    return json(200, JSON.parse(JSON.stringify(doc)), { \"ETag\": etagFor(doc) });",
            "  }",
            "",
            "  if (req.method === \"PUT\") {",
            "    if (!doc) return json(404, { error: \"not found\" });",
            "    const ifMatch = req.headers[\"If-Match\"];",
            "    if (ifMatch === undefined) {",
            "      return json(428, { error: \"precondition required\" });",
            "    }",
            "    if (ifMatch !== \"*\" && ifMatch !== etagFor(doc)) {",
            "      return json(412, { error: \"precondition failed\" });",
            "    }",
            "    docs[id] = JSON.parse(JSON.stringify(req.body));",
            "    return json(200, JSON.parse(JSON.stringify(docs[id])), { \"ETag\": etagFor(docs[id]) });",
            "  }",
            "  return json(405, { error: \"method not allowed\" });",
            "}",
            "",
            "function classify(situation) {",
            "  const BY = {",
            "    \"stale-etag\": 412,",
            "    \"no-precondition\": 428,",
            "    \"seat-already-booked\": 409,",
            "    \"unparseable-body\": 400",
            "  };",
            "  return BY[situation] || 200;",
            "}",
            "")
        }
      },

      /* ---------- api-u4-4 ---------- */
      {
        id: "api-u4-4",
        title: "If-None-Match: * — create exactly once",
        kind: "js", chip: "API", xp: 20, mins: 14,
        crypto: true,
        brief: "`If-Match` is a bet that something **is** what you last saw. Its mirror image is a bet that something **is not there at all**, and that one solves a different problem.\n\nA client PUTs a document to a URL it chose — `/api/docs/invoice-2026-04`. It gets no response (the connection drops) and retries. Without a precondition the retry **overwrites** whatever is there, which might be a completely different document someone else created in between.\n\n`If-None-Match: *` makes the create conditional on absence:\n\n- nothing there → `201 Created`\n- something there → `412`, and the client knows not to touch it\n\nThat is the create-exactly-once bet, and it is why a retried create does not quietly destroy the original.\n\nFinish the resource: conditional create, conditional update, conditional delete. Yes — `DELETE` takes `If-Match` too, for exactly the same reason a `PUT` does.",
        steps: [
          { text: "`PUT` with `If-None-Match: *` creates when absent and returns `201` with a `Location` and an `ETag`.",
            test: R`
const made = handleRequest({ method: "PUT", path: "/api/docs/invoice-2026-04", headers: { "If-None-Match": "*" }, body: { total: 120 } });
T.eq(made.status, 201, 'creating something that was not there is a 201');
T.eq(made.headers["Location"], "/api/docs/invoice-2026-04", 'with a Location — the client chose the URL, and the server confirms it');
T.expect(/^"[0-9a-f]{64}"$/.test(made.headers["ETag"]), 'and an ETag for the document just created');
T.eq(handleRequest({ method: "GET", path: "/api/docs/invoice-2026-04", headers: {} }).body, { total: 120 }, 'the document is really there');
` },
          { text: "The retry. The same request again must NOT overwrite — it is a `412`, and the stored document is untouched.",
            test: R`
handleRequest({ method: "PUT", path: "/api/docs/note", headers: { "If-None-Match": "*" }, body: { v: "first" } });
const retry = handleRequest({ method: "PUT", path: "/api/docs/note", headers: { "If-None-Match": "*" }, body: { v: "second" } });
T.eq(retry.status, 412, 'the document now exists, so "only if absent" fails — 412');
T.eq(handleRequest({ method: "GET", path: "/api/docs/note", headers: {} }).body, { v: "first" }, 'and the original is untouched — this is what stops a retried create destroying the real one');
` },
          { text: "`DELETE` is a write too. It takes `If-Match`, refuses a stale validator with `412`, refuses no validator with `428`, and succeeds with `204`.",
            test: R`
handleRequest({ method: "PUT", path: "/api/docs/temp", headers: { "If-None-Match": "*" }, body: { v: 1 } });
const read = handleRequest({ method: "GET", path: "/api/docs/temp", headers: {} });
T.eq(handleRequest({ method: "DELETE", path: "/api/docs/temp", headers: {} }).status, 428, 'an unconditional DELETE is refused — deleting the wrong version is as bad as overwriting it');
T.eq(handleRequest({ method: "DELETE", path: "/api/docs/temp", headers: { "If-Match": '"deadbeef"' } }).status, 412, 'a stale validator on a DELETE is a 412');
T.eq(handleRequest({ method: "GET", path: "/api/docs/temp", headers: {} }).status, 200, 'and neither refusal deleted anything');
const gone = handleRequest({ method: "DELETE", path: "/api/docs/temp", headers: { "If-Match": read.headers["ETag"] } });
T.eq(gone.status, 204, 'the current validator lets the delete through');
T.expect(gone.body === undefined, 'and a 204 carries no body');
T.eq(handleRequest({ method: "GET", path: "/api/docs/temp", headers: {} }).status, 404, 'the document is gone');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// If-Match:      only if it is still what I read.",
            "// If-None-Match: * -> only if it is not there at all.",
            "",
            "const docs = {};   // name -> document",
            "",
            "function etagFor(doc) { return '\"' + sha256(JSON.stringify(doc)) + '\"'; }",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function noContent() { return { status: 204, headers: {}, body: undefined }; }",
            "",
            "function handleRequest(req) {",
            "  const name = req.path.split(\"/\")[3];",
            "  const doc = docs[name];",
            "",
            "  if (req.method === \"GET\") {",
            "    if (!doc) return json(404, { error: \"not found\" });",
            "    return json(200, doc, { \"ETag\": etagFor(doc) });",
            "  }",
            "",
            "  if (req.method === \"PUT\") {",
            "    // If-None-Match: \"*\"  -> absent: create, 201 + Location + ETag",
            "    //                        present: 412",
            "    // otherwise           -> the If-Match rules from the last lesson",
            "  }",
            "",
            "  if (req.method === \"DELETE\") {",
            "    // 404 if absent, 428 if no If-Match, 412 if stale, else delete and 204",
            "  }",
            "  return json(405, { error: \"method not allowed\" });",
            "}",
            "") }
        ],
        hints: [
          "Handle `If-None-Match` first, since it is a different question from `If-Match`: `if (req.headers[\"If-None-Match\"] === \"*\") { if (doc) return json(412, { error: \"precondition failed\" }); … }`",
          "On the create path: `docs[name] = req.body; return json(201, docs[name], { \"Location\": req.path, \"ETag\": etagFor(docs[name]) });`",
          "DELETE mirrors PUT exactly, which is the point — `if (!doc) return json(404, …); if (req.headers[\"If-Match\"] === undefined) return json(428, …); if (req.headers[\"If-Match\"] !== etagFor(doc)) return json(412, …);` then `delete docs[name]; return noContent();`",
          "Read the ETag for the successful delete from a GET first — it has to be the validator for the document as it stands right now."
        ],
        solution: {
          "script.js": L(
            "// If-Match:      only if it is still what I read.",
            "// If-None-Match: * -> only if it is not there at all.",
            "",
            "const docs = {};   // name -> document",
            "",
            "function etagFor(doc) { return '\"' + sha256(JSON.stringify(doc)) + '\"'; }",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function noContent() { return { status: 204, headers: {}, body: undefined }; }",
            "",
            "function handleRequest(req) {",
            "  const name = req.path.split(\"/\")[3];",
            "  const doc = docs[name];",
            "",
            "  if (req.method === \"GET\") {",
            "    if (!doc) return json(404, { error: \"not found\" });",
            "    return json(200, doc, { \"ETag\": etagFor(doc) });",
            "  }",
            "",
            "  if (req.method === \"PUT\") {",
            "    if (req.headers[\"If-None-Match\"] === \"*\") {",
            "      if (doc) return json(412, { error: \"precondition failed\" });",
            "      docs[name] = req.body;",
            "      return json(201, docs[name], {",
            "        \"Location\": req.path,",
            "        \"ETag\": etagFor(docs[name])",
            "      });",
            "    }",
            "    if (!doc) return json(404, { error: \"not found\" });",
            "    const ifMatch = req.headers[\"If-Match\"];",
            "    if (ifMatch === undefined) return json(428, { error: \"precondition required\" });",
            "    if (ifMatch !== \"*\" && ifMatch !== etagFor(doc)) return json(412, { error: \"precondition failed\" });",
            "    docs[name] = req.body;",
            "    return json(200, docs[name], { \"ETag\": etagFor(docs[name]) });",
            "  }",
            "",
            "  if (req.method === \"DELETE\") {",
            "    if (!doc) return json(404, { error: \"not found\" });",
            "    const ifMatch = req.headers[\"If-Match\"];",
            "    if (ifMatch === undefined) return json(428, { error: \"precondition required\" });",
            "    if (ifMatch !== \"*\" && ifMatch !== etagFor(doc)) return json(412, { error: \"precondition failed\" });",
            "    delete docs[name];",
            "    return noContent();",
            "  }",
            "  return json(405, { error: \"method not allowed\" });",
            "}",
            "")
        }
      },

      /* ---------- api-quiz-4 ---------- */
      {
        id: "api-quiz-4",
        title: "Unit 4 quiz: conditional requests",
        kind: "quiz", chip: "API", xp: 20, mins: 6,
        questions: [
          {
            q: "Two clients read the same document, each change a different field, and both PUT it back. What happens, and what does the API report?",
            choices: [
              "The second write is rejected, because the document changed after it was read",
              "The second write wins completely and the first client's change is gone, with no error reported anywhere",
              "The two changes are merged field by field, since they did not touch the same property",
              "Both writes are applied in order, so the final document contains whichever change was written last plus a warning"
            ],
            answer: 1,
            explain: "A plain PUT replaces the whole document with a body the second client built from a snapshot taken before the first write. Nothing merges — the server has no idea the body was stale — and nothing is rejected, because nothing was asked. The silence is what makes this bug expensive."
          },
          {
            q: "What is an `ETag` actually for on a write path, as opposed to on a GET?",
            choices: [
              "It identifies which client last modified the resource, so the server can attribute the change",
              "It lets the client say \"apply this only if the version I read is still current\"",
              "It compresses the request body by letting the client send only the fields that changed",
              "It authenticates the writer, since only a client that has read the resource can produce a valid one"
            ],
            answer: 1,
            explain: "On a GET the validator answers \"may I skip the download?\". On a write it answers \"may I apply this edit?\" — the same comparison serving a different decision. It carries no identity and no authorisation: anyone who can read the resource can read its ETag."
          },
          {
            q: "A `PUT` arrives with `If-Match` set to a validator that no longer matches. What must the server do?",
            choices: [
              "Apply the write and return the new ETag, since the client clearly intends the change",
              "Return `412 Precondition Failed` and change nothing",
              "Return `409 Conflict`, because two versions of the resource are in conflict",
              "Merge the submitted body with the current resource and return `200`"
            ],
            answer: 1,
            explain: "The client staked its write on a condition, the condition did not hold, so the write does not happen — that is exactly what 412 means. 409 would be misleading: it implies a conflict that re-reading cannot resolve, whereas here re-reading and retrying is precisely the fix."
          },
          {
            q: "When is `428 Precondition Required` the right answer?",
            choices: [
              "When the client supplied a precondition that turned out not to hold against the resource's current version",
              "When the client supplied no precondition and the server refuses to risk a lost update",
              "When the request body is missing a field the resource requires",
              "When the resource exists but the client is not permitted to modify it"
            ],
            answer: 1,
            explain: "428 is for the absence of a precondition, not its failure — that is 412. It lets a server say \"I will not accept an unconditional write to this\" instead of quietly taking the risk or inventing a non-standard error. A missing field is 422, and a permission problem is 403."
          },
          {
            q: "A client PUTs to a URL it chose, gets no response, and retries. Why does `If-None-Match: *` make that retry safe?",
            choices: [
              "It makes the request idempotent, so the server can safely apply it any number of times",
              "The second attempt fails with 412 rather than overwriting whatever is now at that URL",
              "It tells the server to deduplicate the two requests and apply only the first",
              "It causes the server to merge the retried body with the document already stored there"
            ],
            answer: 1,
            explain: "`If-None-Match: *` means \"only if nothing is there\". If the first attempt did land — or if someone else created a different document at that URL — the retry is refused instead of destroying it. The server does no deduplication and no merging; the condition simply stops being true."
          },
          {
            q: "Why would a `DELETE` ever need an `If-Match` header?",
            choices: [
              "It does not — DELETE is idempotent, so repeating it is harmless by definition",
              "Because deleting a version you have not seen is the same mistake as overwriting one",
              "Because without it the server cannot tell whether the resource still exists",
              "Because `If-Match` is what makes the delete recoverable from the server's history"
            ],
            answer: 1,
            explain: "Idempotency says repeating the *same* delete is harmless. It says nothing about deleting a document that someone else has changed since you looked at it — you would be destroying an edit you never saw. Conditioning the delete on a validator closes exactly the same hole `If-Match` closes on a PUT."
          }
        ]
      }
    ]
  });
})();
