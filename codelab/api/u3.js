/* Advanced API Design — Unit 3: Pagination that survives writes */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  window.CODELAB.addUnit("api", {
    id: "api-u3",
    title: "Pagination that survives writes",
    icon: "📑",
    blurb: "Back-End Foundations built ?page=&perPage= and it worked perfectly — on a list nobody was writing to. This is what happens when somebody is, and the cursor that fixes it.",
    cheat: [
      { h: "Offset drifts under a write", lang: "js", code: "// rows newest-first: 10 9 8 7 6 5\n// page 1 = slice(0, 3)   -> 10 9 8\n// …someone posts 11…\n// rows:        11 10 9 8 7 6 5\n// page 2 = slice(3, 6)   -> 8 7 6", note: "8 arrives twice. One insert above your window shifts every later row down by one, and OFFSET counts positions, not rows." },
      { h: "Keyset remembers the row", lang: "js", code: "// page 1 -> 10 9 8, cursor = 8\n// …someone posts 11…\n// page 2 = id < 8, take 3  -> 7 6 5", note: "The cursor names WHERE you were, not HOW FAR you had counted. Inserts above the window cannot move it." },
      { h: "A non-unique sort key needs a tiebreak", lang: "js", code: "// order by createdAt DESC only:\n//   cursor \"createdAt < 100\" SKIPS every\n//   other row that also has createdAt 100\n// order by (createdAt, id) DESC:\n//   createdAt < 100\n//   OR (createdAt === 100 AND id < 4)", note: "The cursor must name a position in a TOTAL order. Any sort column that can tie needs a unique column appended to break it." },
      { h: "Opaque cursors", lang: "js", code: "const encode = c => btoa(JSON.stringify(c));\nconst decode = s => JSON.parse(atob(s));\n// \"eyJpZCI6OH0\" — not \"8\"", note: "Not security: it is a free hand. A client that can read `?after_id=8` will build one, and then your cursor format is a public API you can never change." },
      { h: "The Link header", lang: "js", code: "Link: </api/posts?cursor=eyJpZCI6OH0>; rel=\"next\"", note: "RFC 8288. The server hands back the whole next URL, so the client follows a link instead of assembling one. On the last page you simply omit it — absence IS the end." },
      { h: "Offset is not always wrong", lang: "js", code: "// fine:   a numbered page picker over\n//         a table nobody is writing to\n// broken: an infinite scroll over a feed", note: "Offset is the right tool when the user must jump to page 7, and the wrong one whenever rows can appear above the window mid-scroll." }
    ],
    lessons: [

      /* ---------- api-u3-1 ---------- */
      {
        id: "api-u3-1",
        title: "What offset does under a write",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "`?page=2&perPage=3` is the pagination you already know how to build, and on a static list it is correct. This lesson is about the list not being static.\n\nA feed is ordered newest-first. A client reads page 1, a user posts something, and the client reads page 2. `OFFSET` counts **positions**, and one insert above the window has moved every later row down by one — so the row that was last on page 1 is now first on page 2.\n\nThe client sees it **twice**. Scroll a feed long enough and you will watch this happen in a real app.\n\nBuild the offset pager, confirm it is fine when nothing changes, then reproduce the duplicate. You are grading the bug on purpose: it is the reason the rest of the unit exists.",
        steps: [
          { text: "`offsetPage(rows, page, perPage)` returns the rows for a 1-based page. Pages past the end are empty, never an error.",
            test: R`
T.expect(typeof offsetPage === 'function', 'Define offsetPage(rows, page, perPage).');
const rows = [10, 9, 8, 7, 6, 5];
T.eq(offsetPage(rows, 1, 3), [10, 9, 8], 'page 1 is the first three');
T.eq(offsetPage(rows, 2, 3), [7, 6, 5], 'page 2 is the next three');
T.eq(offsetPage(rows, 3, 3), [], 'past the end is an empty page, not a throw and not a 404');
T.eq(rows, [10, 9, 8, 7, 6, 5], 'slice copies — the caller\'s array must be untouched');
` },
          { text: "With nobody writing, paging through sees each row exactly once. Prove it.",
            test: R`
const feed = [10, 9, 8, 7, 6, 5];
const seen = offsetPage(feed, 1, 3).concat(offsetPage(feed, 2, 3));
T.eq(seen, [10, 9, 8, 7, 6, 5], 'two quiet pages see the whole feed in order');
T.eq(new Set(seen).size, 6, 'and see every row exactly once');
` },
          { text: "Now the write. Read page 1, insert a newer post at the head, then read page 2 — and show that a row arrives twice.",
            test: R`
T.expect(typeof readAcrossAnInsert === 'function', 'Define readAcrossAnInsert().');
const out = readAcrossAnInsert();
T.eq(out.page1, [10, 9, 8], 'page 1 is read BEFORE the insert');
T.eq(out.page2, [8, 7, 6], 'after 11 is posted every row shifts down one, so offset 3 now lands on 8 again');
T.eq(out.duplicated, [8], 'the client has been handed 8 twice in one scroll');
T.expect(out.page2.indexOf(11) === -1, 'and 11 — the post that caused it — is never shown at all');
T.expect(T.logged("8"), 'log the duplicate so you can see what the client saw');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// OFFSET counts POSITIONS. One insert above the window moves every",
            "// later row down by one — and the client sees a row twice.",
            "",
            "function offsetPage(rows, page, perPage) {",
            "  // 1-based page. start = (page - 1) * perPage, then slice perPage rows.",
            "}",
            "",
            "function readAcrossAnInsert() {",
            "  const feed = [10, 9, 8, 7, 6, 5];   // newest first",
            "  // 1) page1 = offsetPage(feed, 1, 3)",
            "  // 2) someone posts 11:  feed.unshift(11)",
            "  // 3) page2 = offsetPage(feed, 2, 3)",
            "  // 4) duplicated = the rows that appear in BOTH pages",
            "  // return { page1, page2, duplicated }",
            "}",
            "",
            "// log the duplicate",
            "") }
        ],
        hints: [
          "`offsetPage` is two lines: `const start = (page - 1) * perPage;` then `return rows.slice(start, start + perPage);` — `slice` already handles running off the end by returning fewer rows, or none.",
          "Order matters in `readAcrossAnInsert`: read page 1 first, THEN `feed.unshift(11)`, then read page 2. Reading both pages before the insert shows nothing.",
          "The overlap is a filter: `const duplicated = page2.filter(r => page1.includes(r));`",
          "Finish with `console.log(\"client saw \" + out.duplicated.join() + \" twice\");` — or log `readAcrossAnInsert().duplicated` directly."
        ],
        solution: {
          "script.js": L(
            "// OFFSET counts POSITIONS. One insert above the window moves every",
            "// later row down by one — and the client sees a row twice.",
            "",
            "function offsetPage(rows, page, perPage) {",
            "  const start = (page - 1) * perPage;",
            "  return rows.slice(start, start + perPage);",
            "}",
            "",
            "function readAcrossAnInsert() {",
            "  const feed = [10, 9, 8, 7, 6, 5];   // newest first",
            "  const page1 = offsetPage(feed, 1, 3);",
            "  feed.unshift(11);                   // someone posts while we read",
            "  const page2 = offsetPage(feed, 2, 3);",
            "  const duplicated = page2.filter(r => page1.indexOf(r) !== -1);",
            "  return { page1: page1, page2: page2, duplicated: duplicated };",
            "}",
            "",
            "// log the duplicate",
            "const out = readAcrossAnInsert();",
            "console.log(\"client saw \" + out.duplicated.join() + \" twice\");",
            "")
        }
      },

      /* ---------- api-u3-2 ---------- */
      {
        id: "api-u3-2",
        title: "Keyset: remember the row, not the count",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "The fix follows directly from the diagnosis. Offset breaks because it remembers **how far you had counted**, and counting is relative to the top of the list — which moves.\n\nSo remember **where you were** instead. The client sends back the key of the last row it saw, and the server answers *the rows after that one*. An insert above the window changes nothing, because the window is anchored to a row rather than to a position.\n\nFor a newest-first feed ordered by descending id, \"after\" means a **smaller** id:\n\n```\npage 1:  take 3                -> 10 9 8\npage 2:  id < 8, take 3        -> 7 6 5\n```\n\nOne consequence is worth stating plainly, because it looks like a bug and is not: the post made *after* you started paging is never shown. A keyset cursor gives you a stable window over the list as it was, not a live view. For a feed that is exactly right — the new post is at the top, where the client will see it on refresh.",
        steps: [
          { text: "`keysetPage(rows, afterId, limit)` returns up to `limit` rows whose id is below `afterId`. A null cursor starts at the beginning.",
            test: R`
T.expect(typeof keysetPage === 'function', 'Define keysetPage(rows, afterId, limit).');
const rows = [{ id: 10 }, { id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }];
T.eq(keysetPage(rows, null, 3), [{ id: 10 }, { id: 9 }, { id: 8 }], 'a null cursor means "from the start"');
T.eq(keysetPage(rows, 8, 3), [{ id: 7 }, { id: 6 }, { id: 5 }], 'after id 8 comes 7, 6, 5 — the cursor row itself is NOT repeated');
T.eq(keysetPage(rows, 5, 3), [], 'past the last row is an empty page');
T.eq(keysetPage(rows, null, 10), rows, 'a limit larger than the list returns the whole list');
` },
          { text: "Now the same insert that broke offset. Read page 1, post a newer row, read page 2 by cursor — and show no duplicate and no skip.",
            test: R`
T.expect(typeof readAcrossAnInsert === 'function', 'Define readAcrossAnInsert().');
const out = readAcrossAnInsert();
T.eq(out.page1.map(r => r.id), [10, 9, 8], 'page 1 is unchanged');
T.eq(out.cursor, 8, 'the cursor is the id of the LAST row of page 1');
T.eq(out.page2.map(r => r.id), [7, 6, 5], 'page 2 picks up exactly where page 1 stopped, insert or no insert');
T.eq(out.duplicated, [], 'nothing is shown twice');
` },
          { text: "State the trade-off in code: the row inserted mid-scroll is absent from both pages, and that is correct behaviour for a stable window.",
            test: R`
const out = readAcrossAnInsert();
const everything = out.page1.concat(out.page2).map(r => r.id);
T.eq(everything, [10, 9, 8, 7, 6, 5], 'the two pages together are exactly the feed as it stood when paging began');
T.expect(everything.indexOf(11) === -1, 'the post made mid-scroll is not spliced into the middle of the scroll');
T.eq(out.feedNow.map(r => r.id), [11, 10, 9, 8, 7, 6, 5], 'it IS in the feed — a client that starts again from a null cursor sees it first');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// A cursor names a ROW. Inserts above the window cannot move a row.",
            "",
            "function keysetPage(rows, afterId, limit) {",
            "  // afterId === null  -> start at the beginning",
            "  // otherwise         -> only rows with id < afterId",
            "  // then take at most `limit` of them",
            "}",
            "",
            "function readAcrossAnInsert() {",
            "  const feed = [{ id: 10 }, { id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }];",
            "  // 1) page1  = keysetPage(feed, null, 3)",
            "  // 2) cursor = the id of the last row of page1",
            "  // 3) someone posts 11:  feed.unshift({ id: 11 })",
            "  // 4) page2  = keysetPage(feed, cursor, 3)",
            "  // 5) duplicated = rows in BOTH pages (by id)",
            "  // return { page1, cursor, page2, duplicated, feedNow: feed }",
            "}",
            "") }
        ],
        hints: [
          "Filter first, then take: `const after = afterId === null ? rows : rows.filter(r => r.id < afterId);` then `return after.slice(0, limit);`",
          "`afterId === null` rather than `!afterId` — an id of 0 is a real row, and `!0` is true, which would silently restart paging from the top.",
          "The cursor is the last row of the page you just sent: `const cursor = page1[page1.length - 1].id;`",
          "Compare by id, not by object identity — `feed.unshift` makes new objects elsewhere but these are the same references, so either works here; `page2.filter(r => page1.some(p => p.id === r.id))` is the version that keeps working when the rows are re-fetched."
        ],
        solution: {
          "script.js": L(
            "// A cursor names a ROW. Inserts above the window cannot move a row.",
            "",
            "function keysetPage(rows, afterId, limit) {",
            "  const after = afterId === null ? rows : rows.filter(r => r.id < afterId);",
            "  return after.slice(0, limit);",
            "}",
            "",
            "function readAcrossAnInsert() {",
            "  const feed = [{ id: 10 }, { id: 9 }, { id: 8 }, { id: 7 }, { id: 6 }, { id: 5 }];",
            "  const page1 = keysetPage(feed, null, 3);",
            "  const cursor = page1[page1.length - 1].id;",
            "  feed.unshift({ id: 11 });            // someone posts while we read",
            "  const page2 = keysetPage(feed, cursor, 3);",
            "  const duplicated = page2.filter(r => page1.some(p => p.id === r.id));",
            "  return { page1: page1, cursor: cursor, page2: page2, duplicated: duplicated, feedNow: feed };",
            "}",
            "")
        }
      },

      /* ---------- api-u3-3 ---------- */
      {
        id: "api-u3-3",
        title: "The tiebreak, and why the cursor is opaque",
        kind: "js", chip: "API", xp: 20, mins: 14,
        brief: "Ids are unique, so the last lesson's cursor worked. Real feeds sort by something that is **not** unique — `createdAt` — and three posts can share a timestamp.\n\nWatch what a single-column cursor does then. Page 1 ends on a row with `createdAt: 100`, so the cursor says \"give me rows with `createdAt < 100`\" — and every *other* row that also has `createdAt: 100` is silently **skipped**. Not duplicated this time: lost.\n\nThe rule: **a cursor must name a position in a total order.** If the sort column can tie, append a unique column and compare the pair:\n\n```\ncreatedAt < 100  OR  (createdAt === 100 AND id < 4)\n```\n\nThen make the cursor **opaque**. This is not security — anyone can decode base64. It is about keeping your hands free: the moment a client can read `?after_id=8`, somebody constructs one by hand, and your cursor format becomes a public API you can never change.",
        steps: [
          { text: "Show the skip. `brokenPage(rows, afterTime, limit)` filters on `createdAt` alone — page 2 loses a row.",
            test: R`
T.expect(typeof brokenPage === 'function', 'Define brokenPage(rows, afterTime, limit).');
const rows = [
  { id: 5, createdAt: 100 }, { id: 4, createdAt: 100 }, { id: 3, createdAt: 100 },
  { id: 2, createdAt: 90 }, { id: 1, createdAt: 80 }
];
const p1 = brokenPage(rows, null, 2);
T.eq(p1.map(r => r.id), [5, 4], 'page 1 is the two newest');
const p2 = brokenPage(rows, p1[p1.length - 1].createdAt, 2);
T.eq(p2.map(r => r.id), [2, 1], 'page 2 jumps to createdAt < 100 — and row 3 is gone');
T.expect(p1.concat(p2).every(r => r.id !== 3), 'row 3 shares a timestamp with the cursor row and is never shown by either page');
` },
          { text: "`keysetPage(rows, cursor, limit)` takes a `{ createdAt, id }` cursor and compares the pair. Nothing is skipped.",
            test: R`
T.expect(typeof keysetPage === 'function', 'Define keysetPage(rows, cursor, limit).');
const rows = [
  { id: 5, createdAt: 100 }, { id: 4, createdAt: 100 }, { id: 3, createdAt: 100 },
  { id: 2, createdAt: 90 }, { id: 1, createdAt: 80 }
];
const a = keysetPage(rows, null, 2);
T.eq(a.map(r => r.id), [5, 4], 'page 1 unchanged');
const b = keysetPage(rows, { createdAt: 100, id: 4 }, 2);
T.eq(b.map(r => r.id), [3, 2], 'row 3 ties on createdAt but has a lower id, so it comes next');
const c = keysetPage(rows, { createdAt: 90, id: 2 }, 2);
T.eq(c.map(r => r.id), [1], 'and the last page is the remainder');
T.eq(a.concat(b).concat(c).map(r => r.id), [5, 4, 3, 2, 1], 'paging right through sees all five rows, in order, exactly once');
` },
          { text: "Make it opaque. `encodeCursor` / `decodeCursor` round-trip through base64, and the token must not be a readable id.",
            test: R`
T.expect(typeof encodeCursor === 'function', 'Define encodeCursor(cursor).');
T.expect(typeof decodeCursor === 'function', 'Define decodeCursor(token).');
const c = { createdAt: 100, id: 4 };
const token = encodeCursor(c);
T.expect(typeof token === 'string', 'a cursor encodes to a string the client can put in a query param');
T.eq(decodeCursor(token), c, 'and decodes back to exactly the same cursor');
T.expect(token !== "4" && token.indexOf("createdAt") === -1, 'the token must not be the bare id, nor readable JSON — a client that can read it will start building its own');
T.eq(decodeCursor(encodeCursor({ createdAt: 80, id: 1 })), { createdAt: 80, id: 1 }, 'the round trip works for any cursor');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// A cursor must name a position in a TOTAL order. createdAt alone is",
            "// not one — rows can tie, and a tie is a row that gets skipped.",
            "",
            "function brokenPage(rows, afterTime, limit) {",
            "  const after = afterTime === null ? rows : rows.filter(r => r.createdAt < afterTime);",
            "  return after.slice(0, limit);",
            "}",
            "",
            "function keysetPage(rows, cursor, limit) {",
            "  // cursor === null -> from the start",
            "  // otherwise keep a row when:",
            "  //   r.createdAt < cursor.createdAt",
            "  //   OR (r.createdAt === cursor.createdAt AND r.id < cursor.id)",
            "}",
            "",
            "function encodeCursor(cursor) {",
            "  // JSON, then base64 — btoa() is available here",
            "}",
            "",
            "function decodeCursor(token) {",
            "  // the inverse",
            "}",
            "") }
        ],
        hints: [
          "The pair comparison is one predicate: `r.createdAt < cursor.createdAt || (r.createdAt === cursor.createdAt && r.id < cursor.id)`.",
          "Wrap it the same way as before: filter, then `.slice(0, limit)`.",
          "`return btoa(JSON.stringify(cursor));` and `return JSON.parse(atob(token));` — both are available in this sandbox.",
          "Note what makes it opaque: base64 of JSON is trivially decodable by anyone who tries, and that is fine. The point is that it does not *invite* a client to construct one, so you stay free to change what is inside it."
        ],
        solution: {
          "script.js": L(
            "// A cursor must name a position in a TOTAL order. createdAt alone is",
            "// not one — rows can tie, and a tie is a row that gets skipped.",
            "",
            "function brokenPage(rows, afterTime, limit) {",
            "  const after = afterTime === null ? rows : rows.filter(r => r.createdAt < afterTime);",
            "  return after.slice(0, limit);",
            "}",
            "",
            "function keysetPage(rows, cursor, limit) {",
            "  const after = cursor === null ? rows : rows.filter(function (r) {",
            "    return r.createdAt < cursor.createdAt ||",
            "      (r.createdAt === cursor.createdAt && r.id < cursor.id);",
            "  });",
            "  return after.slice(0, limit);",
            "}",
            "",
            "function encodeCursor(cursor) {",
            "  return btoa(JSON.stringify(cursor));",
            "}",
            "",
            "function decodeCursor(token) {",
            "  return JSON.parse(atob(token));",
            "}",
            "")
        }
      },

      /* ---------- api-u3-4 ---------- */
      {
        id: "api-u3-4",
        title: "Serving it: the Link header",
        kind: "js", chip: "API", xp: 20, mins: 14,
        brief: "Last piece: how the client is told there is more.\n\nIt should not have to build the next URL. If it does, your query-parameter names and your cursor format are both part of every client's code, and neither can ever change. Instead the server hands back **the whole next URL**, and the client just follows it.\n\nThat is [RFC 8288](https://www.rfc-editor.org/rfc/rfc8288.html), the `Link` header:\n\n```\nLink: </api/posts?limit=2&cursor=eyJpZCI6OH0>; rel=\"next\"\n```\n\nAnd the end condition is the clean part: on the last page you **omit the header**. There is no `next` link because there is no next page — absence is the signal, so a client loop is `while (there is a next link) follow it`.\n\nNotice what this costs you to change later: nothing. Rename the parameter, change the cursor contents, switch from keyset to something else entirely — every client keeps working, because none of them ever built the URL.",
        steps: [
          { text: "`GET /api/posts?limit=2` returns the first page and a `Link` header pointing at the next one.",
            test: R`
T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');
const p1 = handleRequest({ method: "GET", path: "/api/posts", query: { limit: "2" } });
T.eq(p1.status, 200, 'a page is a 200');
T.eq(p1.body.items.map(i => i.id), [5, 4], 'the newest two posts');
T.expect(typeof p1.headers["Link"] === 'string', 'there are more posts, so there must be a Link header');
T.eq(p1.headers["Link"], '</api/posts?limit=2&cursor=' + encodeCursor({ createdAt: 100, id: 4 }) + '>; rel="next"', 'the Link is the WHOLE next URL, in angle brackets, with rel="next"');
` },
          { text: "Following that link returns the next page — including the row that ties on `createdAt`.",
            test: R`
const p1 = handleRequest({ method: "GET", path: "/api/posts", query: { limit: "2" } });
const nextUrl = p1.headers["Link"].slice(1, p1.headers["Link"].indexOf(">"));
const token = nextUrl.split("cursor=")[1];
const p2 = handleRequest({ method: "GET", path: "/api/posts", query: { limit: "2", cursor: token } });
T.eq(p2.body.items.map(i => i.id), [3, 2], 'the tie-breaking cursor picks up row 3, then row 2');
T.expect(typeof p2.headers["Link"] === 'string', 'one post is still left, so there is still a next link');
` },
          { text: "The last page omits `Link` entirely. Walk the whole feed by following links until there are none.",
            test: R`
let req = { method: "GET", path: "/api/posts", query: { limit: "2" } };
const seen = [];
let guard = 0;
while (guard++ < 10) {
  const res = handleRequest(req);
  res.body.items.forEach(i => seen.push(i.id));
  const link = res.headers["Link"];
  if (!link) break;
  const url = link.slice(1, link.indexOf(">"));
  req = { method: "GET", path: "/api/posts", query: { limit: "2", cursor: url.split("cursor=")[1] } };
}
T.eq(seen, [5, 4, 3, 2, 1], 'following next links walks the whole feed, in order, with nothing skipped or repeated');
T.expect(guard < 10, 'the loop must END — the last page omits Link, which is how the client knows to stop');
const last = handleRequest({ method: "GET", path: "/api/posts", query: { limit: "2", cursor: encodeCursor({ createdAt: 90, id: 2 }) } });
T.eq(last.body.items.map(i => i.id), [1], 'the final page holds the remaining row');
T.expect(last.headers["Link"] === undefined, 'and carries no Link header at all');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// The server hands back the next URL. The client never builds one —",
            "// which is what keeps your cursor format yours to change.",
            "",
            "const posts = [",
            "  { id: 5, createdAt: 100 }, { id: 4, createdAt: 100 }, { id: 3, createdAt: 100 },",
            "  { id: 2, createdAt: 90 }, { id: 1, createdAt: 80 }",
            "];",
            "",
            "function encodeCursor(cursor) { return btoa(JSON.stringify(cursor)); }",
            "function decodeCursor(token) { return JSON.parse(atob(token)); }",
            "",
            "function keysetPage(rows, cursor, limit) {",
            "  const after = cursor === null ? rows : rows.filter(function (r) {",
            "    return r.createdAt < cursor.createdAt ||",
            "      (r.createdAt === cursor.createdAt && r.id < cursor.id);",
            "  });",
            "  return after.slice(0, limit);",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path === \"/api/posts\") {",
            "    const limit = Number(req.query.limit);",
            "    const cursor = req.query.cursor ? decodeCursor(req.query.cursor) : null;",
            "    const items = keysetPage(posts, cursor, limit);",
            "    // Is there anything AFTER this page? Ask for one more row past it.",
            "    // If there is, build:",
            "    //   Link: </api/posts?limit=N&cursor=TOKEN>; rel=\"next\"",
            "    // where TOKEN encodes the last item of THIS page.",
            "    // If there isn't, send no Link header at all.",
            "    return { status: 200, headers: { \"Content-Type\": \"application/json\" }, body: { items: items } };",
            "  }",
            "  return { status: 404, headers: { \"Content-Type\": \"application/json\" }, body: { error: \"not found\" } };",
            "}",
            "") }
        ],
        hints: [
          "Decide whether a next page exists by looking past the one you are sending: `const last = items[items.length - 1];` then `const more = last ? keysetPage(posts, { createdAt: last.createdAt, id: last.id }, 1).length > 0 : false;`",
          "Only build the header when `more` is true — and build it from `last`, which is the end of THIS page: `const token = encodeCursor({ createdAt: last.createdAt, id: last.id });`",
          "The format is exact, angle brackets included: `headers[\"Link\"] = \"</api/posts?limit=\" + limit + \"&cursor=\" + token + '>; rel=\"next\"';`",
          "Build the headers object first with just Content-Type, add Link conditionally, then return it — that way the last page genuinely has no Link key rather than one set to undefined."
        ],
        solution: {
          "script.js": L(
            "// The server hands back the next URL. The client never builds one —",
            "// which is what keeps your cursor format yours to change.",
            "",
            "const posts = [",
            "  { id: 5, createdAt: 100 }, { id: 4, createdAt: 100 }, { id: 3, createdAt: 100 },",
            "  { id: 2, createdAt: 90 }, { id: 1, createdAt: 80 }",
            "];",
            "",
            "function encodeCursor(cursor) { return btoa(JSON.stringify(cursor)); }",
            "function decodeCursor(token) { return JSON.parse(atob(token)); }",
            "",
            "function keysetPage(rows, cursor, limit) {",
            "  const after = cursor === null ? rows : rows.filter(function (r) {",
            "    return r.createdAt < cursor.createdAt ||",
            "      (r.createdAt === cursor.createdAt && r.id < cursor.id);",
            "  });",
            "  return after.slice(0, limit);",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path === \"/api/posts\") {",
            "    const limit = Number(req.query.limit);",
            "    const cursor = req.query.cursor ? decodeCursor(req.query.cursor) : null;",
            "    const items = keysetPage(posts, cursor, limit);",
            "",
            "    const headers = { \"Content-Type\": \"application/json\" };",
            "    const last = items[items.length - 1];",
            "    if (last) {",
            "      const nextCursor = { createdAt: last.createdAt, id: last.id };",
            "      const more = keysetPage(posts, nextCursor, 1).length > 0;",
            "      if (more) {",
            "        headers[\"Link\"] = \"</api/posts?limit=\" + limit +",
            "          \"&cursor=\" + encodeCursor(nextCursor) + \">; rel=\\\"next\\\"\";",
            "      }",
            "    }",
            "    return { status: 200, headers: headers, body: { items: items } };",
            "  }",
            "  return { status: 404, headers: { \"Content-Type\": \"application/json\" }, body: { error: \"not found\" } };",
            "}",
            "")
        }
      },

      /* ---------- api-quiz-3 ---------- */
      {
        id: "api-quiz-3",
        title: "Unit 3 quiz: cursors",
        kind: "quiz", chip: "API", xp: 20, mins: 6,
        questions: [
          {
            q: "A client reads page 1 of a newest-first feed with `?page=1&perPage=3`. Before it reads page 2, a new post is created. What does it see?",
            choices: [
              "A post it already saw on page 1, because every row shifted down one position",
              "The new post inserted at the top of page 2, which is where the extra row went",
              "Exactly the right rows, since the server recalculates the offset against the new total",
              "An error, because the collection changed between two requests in the same sequence"
            ],
            answer: 0,
            explain: "`OFFSET` counts positions from the top of the list. One insert above the window pushes every later row down by one, so offset 3 now lands on the row that was last on page 1. Nothing recalculates and nothing errors — the client is simply handed a duplicate and never shown the new post at all."
          },
          {
            q: "Why is a keyset cursor immune to that problem?",
            choices: [
              "It locks the collection for the duration of the client's paging session",
              "It anchors the next page to a row, and an insert elsewhere cannot move a row",
              "It re-sorts the collection on every request so positions stay stable",
              "It caches the full result set on first request and serves later pages from that snapshot"
            ],
            answer: 1,
            explain: "\"Rows after id 8\" means the same thing no matter how many rows appear above id 8. There is no lock, no snapshot and no re-sort — the cursor is just a different question, asked about a row rather than about a count."
          },
          {
            q: "Your feed sorts by `createdAt` descending, and three posts share a timestamp. The cursor stores only `createdAt`. What goes wrong?",
            choices: [
              "Rows that tie with the cursor row are skipped, because the next page asks for strictly earlier timestamps",
              "Rows that tie are returned twice, once on each page, since both pages match their timestamp",
              "Pagination is unaffected — ties are resolved by the order rows happen to sit in the table",
              "The cursor becomes ambiguous and the server must reject it with a 400"
            ],
            answer: 0,
            explain: "The next page asks for `createdAt < 100`, which excludes every other row that also has `createdAt: 100` — they are silently lost, not duplicated. Fixing it means making the sort a total order by appending a unique column and comparing the pair."
          },
          {
            q: "Cursors are usually base64-encoded. What does that actually buy you?",
            choices: [
              "Confidentiality, since the position cannot be read without the server's key",
              "Freedom to change the cursor's contents later, because clients never learned to build one",
              "A smaller token, as base64 compresses the JSON before it goes on the wire",
              "Protection against a client paging through records it is not permitted to see"
            ],
            answer: 1,
            explain: "Base64 is encoding, not encryption — anyone can decode it in a second. The value is that an opaque token does not *invite* clients to construct their own, so the format stays yours. Base64 actually makes the token about a third larger, and access control is a separate concern entirely."
          },
          {
            q: "Why should the server send the next page's full URL in a `Link` header instead of just returning the cursor token?",
            choices: [
              "Because `Link` is required by RFC 8288 for any response that returns a partial collection",
              "So the client follows a link rather than assembling a URL, leaving the parameters yours to change",
              "Because a header is read before the body, so the client can start the next request sooner",
              "Because cursors placed in a response body are not cacheable by intermediaries"
            ],
            answer: 1,
            explain: "If clients assemble `?limit=…&cursor=…` themselves, your parameter names become part of their code and can never be renamed. Hand back the whole URL and you can change anything behind it. RFC 8288 defines the header but requires nothing of the sort, and header-versus-body ordering is not a meaningful speed difference here."
          },
          {
            q: "How does a client know it has reached the last page?",
            choices: [
              "The response body contains `hasMore: false`, which is the convention `Link` is built on",
              "There is no `Link` header — its absence is the signal that there is nothing after this",
              "The page comes back with fewer items than the requested limit",
              "The server answers 204 No Content once the cursor passes the final row"
            ],
            answer: 1,
            explain: "Omitting the header is the signal, which makes the client loop simply \"while there is a next link, follow it\". A short page is not reliable — the last page can be exactly full — and a 204 would be wrong, since a request for a valid page that happens to be empty still succeeded with a body."
          },
          {
            q: "When is offset pagination still the right choice?",
            choices: [
              "Whenever the collection is small enough that the performance difference will not be noticeable",
              "When users must jump to an arbitrary numbered page in data that is not being written to",
              "When the sort column is unique, which removes the drift that cursors are designed to prevent",
              "Never — cursor pagination is strictly better and offset is retained only for older clients"
            ],
            answer: 1,
            explain: "A cursor can only go forwards from somewhere you have been, so it cannot express \"page 7 of 94\". For a report or an admin table with a page picker and no concurrent writes, offset is the correct tool. A unique sort column does not help: drift comes from rows being *inserted*, not from ties."
          }
        ]
      }
    ]
  });
})();
