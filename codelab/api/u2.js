/* Advanced API Design — Unit 2: Pagination that survives writes */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var PROBLEM_FN = R`
const PROBLEMS = "https://api.example.com/problems/";
function problem(statusCode, slug, title, detail, extra) {
  const body = { type: PROBLEMS + slug, title: title, status: statusCode, detail: detail };
  Object.assign(body, extra || {});
  return { status: statusCode, headers: { "content-type": "application/problem+json" }, body: body };
}
`;

  /* ---------- api-u2-2: cursor pagination ---------- */
  var FEED_HEAD = R`
// GET /events?limit=3&after=<cursor>  →  { data, next_cursor, has_more }
// Newest first: by at (descending), then by id (descending) to break ties.
const EVENTS = [
  { id: 1, at: 100, type: "signup" },
  { id: 2, at: 100, type: "login" },
  { id: 3, at: 160, type: "login" },
  { id: 4, at: 200, type: "purchase" },
  { id: 5, at: 200, type: "login" },
  { id: 6, at: 200, type: "logout" },
  { id: 7, at: 260, type: "login" }
];

function newestFirst(a, b) {
  return (b.at - a.at) || (b.id - a.id);
}
`;

  var FEED_STARTER = FEED_HEAD + R`
// 1) A cursor is the sort key of the last row the client saw, made opaque:
//      encodeCursor(e)      → btoa(JSON.stringify([e.at, e.id]))
//      decodeCursor(cursor) → the [at, id] array back again
function encodeCursor(e) {
}
function decodeCursor(cursor) {
}

// 3) Is event e further down the newest-first list than the position [at, id]?
//    An older at — or the SAME at and a smaller id (that's the tiebreaker).
function comesAfter(e, pos) {
}

function handleRequest(req) {
  if (req.method !== "GET" || req.path !== "/events") {
    return { status: 404, headers: {}, body: null };
  }
  const query = req.query || {};
  const limit = Number(query.limit || 3);
  const rows = EVENTS.slice().sort(newestFirst);
  // 2) With ?after, keep only the rows that come after the decoded cursor.
  //    data = the first limit rows · has_more = rows remain beyond them
  //    next_cursor = encodeCursor(the last row of data), or null when nothing is left
  const data = rows.slice(0, limit);
  return { status: 200, headers: {}, body: { data: data, next_cursor: null, has_more: false } };
}

console.log(handleRequest({ method: "GET", path: "/events", query: { limit: "3" }, headers: {}, body: null }).body.data);
`;

  var FEED_SOLUTION = FEED_HEAD + R`
// A cursor is the sort key of the last row the client saw, made opaque.
function encodeCursor(e) {
  return btoa(JSON.stringify([e.at, e.id]));
}
function decodeCursor(cursor) {
  return JSON.parse(atob(cursor));
}

// Is event e further down the newest-first list than the position [at, id]?
function comesAfter(e, pos) {
  return e.at < pos[0] || (e.at === pos[0] && e.id < pos[1]);
}

function handleRequest(req) {
  if (req.method !== "GET" || req.path !== "/events") {
    return { status: 404, headers: {}, body: null };
  }
  const query = req.query || {};
  const limit = Number(query.limit || 3);
  let rows = EVENTS.slice().sort(newestFirst);
  if (query.after) {
    const pos = decodeCursor(query.after);
    rows = rows.filter(e => comesAfter(e, pos));
  }
  const data = rows.slice(0, limit);
  const hasMore = rows.length > limit;
  return { status: 200, headers: {}, body: {
    data: data,
    next_cursor: hasMore ? encodeCursor(data[data.length - 1]) : null,
    has_more: hasMore
  } };
}

console.log(handleRequest({ method: "GET", path: "/events", query: { limit: "3" }, headers: {}, body: null }).body.data);
`;

  /* ---------- api-u2-3: limits, bad cursors and link ---------- */
  var LIMITS_HEAD = PROBLEM_FN + R`
const MAX_LIMIT = 10;
const EVENTS = [
  { id: 1, at: 100 }, { id: 2, at: 100 }, { id: 3, at: 130 }, { id: 4, at: 160 },
  { id: 5, at: 160 }, { id: 6, at: 190 }, { id: 7, at: 220 }, { id: 8, at: 250 },
  { id: 9, at: 250 }, { id: 10, at: 250 }, { id: 11, at: 280 }, { id: 12, at: 310 }
];

function newestFirst(a, b) { return (b.at - a.at) || (b.id - a.id); }
function encodeCursor(e) { return btoa(JSON.stringify([e.at, e.id])); }
function comesAfter(e, pos) { return e.at < pos[0] || (e.at === pos[0] && e.id < pos[1]); }
`;

  var LIMITS_STARTER = LIMITS_HEAD + R`
// 2) Return the [at, id] position — or null when the text is not a cursor this
//    API issued: atob can throw, JSON.parse can throw, and a decoded value must be
//    an array of exactly two integers.
function decodeCursor(cursor) {
  return JSON.parse(atob(cursor));
}

// 1) Absent → 3. Otherwise only a whole number of at least 1 (digits only)
//    is valid; anything else → null. Above MAX_LIMIT → MAX_LIMIT (coerce, don't refuse).
function parseLimit(text) {
  return Number(text || 3);
}

function handleRequest(req) {
  if (req.method !== "GET" || req.path !== "/events") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const query = req.query || {};
  const limit = parseLimit(query.limit);
  // 1) limit === null → problem(400, "invalid-parameter", "Invalid parameter",
  //                             "limit must be a whole number of at least 1")
  let rows = EVENTS.slice().sort(newestFirst);
  if (query.after !== undefined) {
    const pos = decodeCursor(query.after);
    // 2) pos === null → the same 400, detail "after is not a cursor this API issued"
    rows = rows.filter(e => comesAfter(e, pos));
  }
  const data = rows.slice(0, limit);
  const hasMore = rows.length > limit;
  const next = hasMore ? encodeCursor(data[data.length - 1]) : null;
  // 3) When there is a next page, add a link header (RFC 8288):
  //      </events?limit=<limit>&after=<next, URL-encoded>>; rel="next"
  return { status: 200, headers: {}, body: { data: data, next_cursor: next, has_more: hasMore } };
}
`;

  var LIMITS_SOLUTION = LIMITS_HEAD + R`
// The [at, id] position — or null when the text is not a cursor this API issued.
function decodeCursor(cursor) {
  try {
    const pos = JSON.parse(atob(cursor));
    if (Array.isArray(pos) && pos.length === 2 && Number.isInteger(pos[0]) && Number.isInteger(pos[1])) {
      return pos;
    }
  } catch (err) {}
  return null;
}

// Absent → 3; a whole number of at least 1 → itself, at most MAX_LIMIT; else null.
function parseLimit(text) {
  if (text === undefined) return 3;
  if (!/^[1-9][0-9]*$/.test(text)) return null;
  return Math.min(Number(text), MAX_LIMIT);
}

function handleRequest(req) {
  if (req.method !== "GET" || req.path !== "/events") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const query = req.query || {};
  const limit = parseLimit(query.limit);
  if (limit === null) {
    return problem(400, "invalid-parameter", "Invalid parameter", "limit must be a whole number of at least 1");
  }
  let rows = EVENTS.slice().sort(newestFirst);
  if (query.after !== undefined) {
    const pos = decodeCursor(query.after);
    if (pos === null) {
      return problem(400, "invalid-parameter", "Invalid parameter", "after is not a cursor this API issued");
    }
    rows = rows.filter(e => comesAfter(e, pos));
  }
  const data = rows.slice(0, limit);
  const hasMore = rows.length > limit;
  const next = hasMore ? encodeCursor(data[data.length - 1]) : null;
  const headers = {};
  if (next) {
    headers.link = "</events?limit=" + limit + "&after=" + encodeURIComponent(next) + ">; rel=\"next\"";
  }
  return { status: 200, headers: headers, body: { data: data, next_cursor: next, has_more: hasMore } };
}
`;

  /* ---------- api-u2-4: filters, sorts and the cursor contract ---------- */
  var TICKETS_HEAD = PROBLEM_FN + R`
const TICKETS = [
  { id: 1, status: "open", priority: 2, created: 10 },
  { id: 2, status: "closed", priority: 3, created: 20 },
  { id: 3, status: "open", priority: 3, created: 30 },
  { id: 4, status: "open", priority: 1, created: 40 },
  { id: 5, status: "open", priority: 3, created: 50 },
  { id: 6, status: "closed", priority: 1, created: 60 },
  { id: 7, status: "open", priority: 2, created: 70 },
  { id: 8, status: "open", priority: 3, created: 80 }
];
const PARAMS = ["status", "sort", "limit", "after"];
const SORTS = ["created", "-created", "priority", "-priority"];

function invalid(detail, extra) {
  return problem(400, "invalid-parameter", "Invalid parameter", detail, extra);
}

// "-priority" → { field: "priority", dir: -1 }   "created" → { field: "created", dir: 1 }
function parseSort(sort) {
  return sort.charAt(0) === "-" ? { field: sort.slice(1), dir: -1 } : { field: sort, dir: 1 };
}
// Negative: a comes first. A tie on the field is broken by id, in the same direction.
function compare(a, b, s) {
  return ((a[s.field] - b[s.field]) || (a.id - b.id)) * s.dir;
}
`;

  var TICKETS_STARTER = TICKETS_HEAD + R`
function handleRequest(req) {
  if (req.method !== "GET" || req.path !== "/tickets") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const query = req.query || {};
  // 1) Refuse what you don't support — never silently ignore it:
  //    a key not in PARAMS → invalid("Unknown query parameter: " + key, { allowed: PARAMS })
  //    status present but not "open"/"closed" → invalid("status must be open or closed")
  //    sort not in SORTS → invalid("sort must be one of " + SORTS.join(", "))
  const sort = query.sort === undefined ? "-created" : query.sort;
  const s = parseSort(sort);
  const limit = Number(query.limit || 2);

  let rows = TICKETS.filter(t => query.status === undefined || t.status === query.status);
  rows.sort((a, b) => compare(a, b, s));
  if (query.after !== undefined) {
    // 2) A cursor that doesn't decode → invalid("after is not a cursor this API issued")
    // 3) The cursor must carry the query it was made for (status and sort — NOT limit),
    //    and a mismatch → invalid("after was issued for a different query")
    const cur = JSON.parse(atob(query.after));
    const pos = { id: cur.v[1] };
    pos[s.field] = cur.v[0];
    rows = rows.filter(t => compare(t, pos, s) > 0);
  }
  const data = rows.slice(0, limit);
  const hasMore = rows.length > limit;
  const last = data[data.length - 1];
  const next = hasMore ? btoa(JSON.stringify({ v: [last[s.field], last.id] })) : null;
  return { status: 200, headers: {}, body: { data: data, next_cursor: next, has_more: hasMore } };
}
`;

  var TICKETS_SOLUTION = TICKETS_HEAD + R`
function handleRequest(req) {
  if (req.method !== "GET" || req.path !== "/tickets") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const query = req.query || {};
  const unknown = Object.keys(query).find(k => !PARAMS.includes(k));
  if (unknown) return invalid("Unknown query parameter: " + unknown, { allowed: PARAMS });
  if (query.status !== undefined && query.status !== "open" && query.status !== "closed") {
    return invalid("status must be open or closed");
  }
  const sort = query.sort === undefined ? "-created" : query.sort;
  if (!SORTS.includes(sort)) return invalid("sort must be one of " + SORTS.join(", "));
  const s = parseSort(sort);
  const limit = Number(query.limit || 2);
  const fingerprint = (query.status || "") + "|" + sort;

  let rows = TICKETS.filter(t => query.status === undefined || t.status === query.status);
  rows.sort((a, b) => compare(a, b, s));
  if (query.after !== undefined) {
    let cur = null;
    try { cur = JSON.parse(atob(query.after)); } catch (err) {}
    if (!cur || !Array.isArray(cur.v)) return invalid("after is not a cursor this API issued");
    if (cur.q !== fingerprint) return invalid("after was issued for a different query");
    const pos = { id: cur.v[1] };
    pos[s.field] = cur.v[0];
    rows = rows.filter(t => compare(t, pos, s) > 0);
  }
  const data = rows.slice(0, limit);
  const hasMore = rows.length > limit;
  const last = data[data.length - 1];
  const next = hasMore ? btoa(JSON.stringify({ q: fingerprint, v: [last[s.field], last.id] })) : null;
  return { status: 200, headers: {}, body: { data: data, next_cursor: next, has_more: hasMore } };
}
`;

  window.CODELAB.addUnit("api", {
    id: "api-u2",
    title: "Pagination that survives writes",
    icon: "📜",
    blurb: "Offset pages repeat and skip rows the moment the list changes. Cursors don't — once they break ties, refuse bad input and stay bound to the query that made them.",
    cheat: [
      { h: "Why offset breaks", lang: "text", code: "page 1: skip 0, take 3   → F E D\n(someone posts G at the top)\npage 2: skip 3, take 3   → D C B     ← D again\n\nOFFSET 100000 LIMIT 20   → reads and discards 100,000 rows first", note: "An insert above the reader shifts every later page down; a delete shifts it up and a row is never seen. And deep pages get slower in proportion to the offset." },
      { h: "Keyset (cursor) pagination", lang: "sql", code: "SELECT * FROM events\nWHERE (at, id) < (:last_at, :last_id)\nORDER BY at DESC, id DESC\nLIMIT :limit + 1;      -- one extra row = has_more", note: "'Continue after the last row I saw' instead of 'skip N'. An index on (at, id) jumps straight there, and an insert above the reader moves nothing." },
      { h: "The cursor and has_more", lang: "js", code: "const cursor = btoa(JSON.stringify([last.at, last.id]));\n// …next request:\nconst pos = JSON.parse(atob(query.after));\nrows = rows.filter(e => e.at < pos[0] ||\n  (e.at === pos[0] && e.id < pos[1]));\nconst hasMore = rows.length > limit;   // NOT data.length === limit", note: "Always end the sort on a unique key (id), or rows that tie on the sort value get skipped. Make the cursor opaque so clients pass it back instead of building one." },
      { h: "Limits, bad cursors and link", lang: "text", code: "?limit=50  (max 10)    → serve 10   (Google AIP-158: coerce)\n?limit=abc | 0 | -2    → 400 problem\n?after=<garbage>       → 400 problem, never a 500\n\nlink: </events?limit=10&after=WzEzMCwzXQ%3D%3D>; rel=\"next\"", note: "base64 contains + / =, so URL-encode the cursor inside the link. No next page → no link header at all." },
      { h: "Filters, sorts and the contract", lang: "js", code: "const PARAMS = [\"status\", \"sort\", \"limit\", \"after\"];\n// unknown key → 400 + allowed: PARAMS (a typo must not return everything)\nconst fingerprint = (query.status || \"\") + \"|\" + sort;\ncursor = btoa(JSON.stringify({ q: fingerprint, v: [value, id] }));\n// cur.q !== fingerprint → 400 \"issued for a different query\"", note: "A cursor's position only means something in the order and subset that produced it. Changing limit between pages is fine; changing the filter or sort is not." },
      { h: "How real APIs spell it", lang: "text", code: "Stripe   ?limit=3&starting_after=ch_123   → has_more\nSlack    ?cursor=…          → response_metadata.next_cursor\nGitHub   link: <…?page=2>; rel=\"next\"\nGoogle   page_token / next_page_token (AIP-158)", note: "Different names, one idea: the server hands back an opaque token for 'where you left off', and the client returns it unchanged." }
    ],
    lessons: [

      {
        id: "api-u2-1",
        title: "Why offset pagination breaks",
        kind: "concept", xp: 15, mins: 14,
        screens: [
          { read: "`srv` paginated by **offset**: page 2 at 3 per page means *skip 3 rows, take 3*. That is fine for a list that never changes. A feed is not that list.\n\nSorted newest first, a new post lands at the **top** — and every row below it moves down one place. A client that read page 1 and then asks for page 2 skips 3 rows of a list that is now one longer, so the last thing it already saw comes round again. A **delete** does the opposite: everything moves up, and one row is never shown at all.",
            ask: { type: "predict", run: true,
              q: "The client reads page 1, someone posts `G`, then the client asks for page 2. What does the last line print?",
              code: "const feed = [\"F\", \"E\", \"D\", \"C\", \"B\", \"A\"];   // newest first\nconst page = (n) => feed.slice((n - 1) * 3, n * 3);\n\nconst seen = page(1);        // F E D\nfeed.unshift(\"G\");           // a new post arrives at the top\nconsole.log(page(2).join(\"\"));",
              answer: "DCB",
              why: "G pushed every row down one place. Skipping 3 now skips G, F and E, so D — already shown at the bottom of page 1 — comes back at the top of page 2." } },

          { read: "Offsets also get **slower the deeper you go**. `OFFSET 100000 LIMIT 20` does not jump to row 100,000: the database finds the first 100,020 rows in order and throws 100,000 of them away. Markus Winand's *Use The Index, Luke* calls this out as the reason infinite-scroll feeds die on long sessions — the page you are on is cheap, the page a busy user reaches is not.",
            ask: { type: "pick",
              q: "Page 1 of a 20-per-page list takes 2 ms. Roughly what happens at page 50,000?",
              choices: ["About the same 2 ms: LIMIT 20 means the database never reads more than 20 rows", "Much slower: the database reads and discards about a million rows first", "It fails, because OFFSET is capped at 10,000 rows", "Faster, because later pages are already in the cache"],
              answer: 1,
              why: [
                "LIMIT caps what is returned, not what is read. To know which 20 rows come after a million others, it has to walk past the million.",
                "Offset 999,980 means producing and discarding nearly a million rows in sort order before the 20 you wanted. The cost grows with the offset.",
                "There is no general cap like that; the query runs, just slowly.",
                "Nothing makes deep pages cached; if anything they are the ones nobody else has asked for."
              ] } },

          { read: "**Keyset pagination** — what APIs call a *cursor* — asks a different question. Not *skip N rows* but *continue after the last row I saw*:\n\n`WHERE (at, id) < (last_at, last_id) ORDER BY at DESC, id DESC LIMIT 3`\n\nThe position is a **value**, not a count, so a row inserted above it moves nothing, and an index on `(at, id)` jumps straight there however deep the page is.",
            ask: { type: "predict", run: true, transfer: true,
              q: "Same feed, same new post — but page 2 now means 'the rows older than the last one I saw'. What prints?",
              code: "const feed = [{ id: 6, t: 60 }, { id: 5, t: 50 }, { id: 4, t: 40 },\n              { id: 3, t: 30 }, { id: 2, t: 20 }, { id: 1, t: 10 }];\nconst page1 = feed.slice(0, 3);          // ids 6, 5, 4\nfeed.unshift({ id: 7, t: 70 });           // a new post at the top\n\nconst last = page1[2];\nconst page2 = feed.filter(e => e.t < last.t).slice(0, 3);\nconsole.log(page2.map(e => e.id).join(\",\"));",
              answer: "3,2,1",
              why: "The cursor is 'older than t = 40', a value. The new row at t = 70 is above it and changes nothing below, so page 2 is exactly 3, 2, 1 — no repeat, no gap." } },

          { read: "Two details make a cursor correct.\n\n**End the sort on a unique key.** If two rows share `at`, then 'older than the last `at` I saw' skips the twin of the last row. Sorting by `(at, id)` makes every position unique.\n\n**Make it opaque.** Encode the position (base64 of `[at, id]` is enough) so clients treat it as a token to hand back, not a number to compute. Then you can change what is inside it later without breaking anyone.",
            ask: { type: "pick",
              q: "Rows 9 and 8 were both created at 12:00:00. Page 1 ends with row 9, and page 2 asks only for rows created before 12:00:00. What happens to row 8?",
              choices: ["It appears on page 2 as normal, because ids break the tie automatically", "It is never shown: it is not older than 12:00:00, only equal to it", "It appears twice", "The query fails"],
              answer: 1,
              why: [
                "Nothing breaks the tie unless the condition includes the id. Here it compares the time alone.",
                "Row 8 ties with the cursor's time, and 'before 12:00:00' excludes it — it falls in the gap between pages. `(at, id) < (12:00:00, 9)` would include it.",
                "It cannot repeat: it was not on page 1 either. The failure is a skip.",
                "The query is valid; it is just wrong about ties."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "What does cursor pagination give up compared with offset pagination?",
              choices: ["Stable pages while rows are being inserted", "Fast pages deep into a large table", "Jumping straight to page 37", "Working on a sorted list"],
              answer: 2,
              why: [
                "That is what cursors are good at — offset is the one that drifts.",
                "Cursors are the fast one deep down: an index seek, not a scan past every earlier row.",
                "A cursor names a position you reached, so 'page 37' has no cursor until you walk there. That is why feeds use next and previous rather than page numbers.",
                "Cursors need a sort, and work on any sort that ends on a unique key."
              ] } }
        ]
      },

      {
        id: "api-u2-2",
        title: "Cursor pagination",
        kind: "js", chip: "API", xp: 15, mins: 15,
        brief: "Build keyset pagination for an event feed, newest first.\n\n- the order is `at` descending, then `id` descending — the `id` breaks ties, and three events share `at: 200`\n- `GET /events?limit=3` answers `{ data, next_cursor, has_more }`, the shape Stripe and Slack use\n- `next_cursor` is the position of the **last row returned**, encoded: `btoa(JSON.stringify([e.at, e.id]))`\n- `GET /events?limit=3&after=<cursor>` continues from that position\n\n`has_more` must be honest: *are there rows beyond this page?* — not *is this page full?* A page of exactly the last 3 rows is full and has nothing after it. (In SQL you fetch `limit + 1` rows to find out; here the array is in memory, so compare lengths.)\n\nThe last check inserts events **between** page requests. Offset pagination fails it; yours must not.",
        steps: [
          { text: "Write `encodeCursor(e)` → `btoa(JSON.stringify([e.at, e.id]))` and `decodeCursor(cursor)` → the `[at, id]` array again.",
            test: R`
T.expect(typeof encodeCursor === 'function' && typeof decodeCursor === 'function', 'Define encodeCursor and decodeCursor');
var c = encodeCursor({ id: 5, at: 200, type: 'login' });
T.eq(c, btoa('[200,5]'), 'encodeCursor is btoa(JSON.stringify([e.at, e.id]))');
T.expect(c.indexOf('200') === -1, 'The cursor must be opaque — not the raw numbers');
T.eq(decodeCursor(c), [200, 5], 'decodeCursor gives back [at, id]');
` },
          { text: "Answer the first page: `data` is the first `limit` rows in order, `has_more` says whether any rows remain, and `next_cursor` encodes the last row returned — or is `null` when nothing is left.",
            test: R`
function get(q) { return handleRequest({ method: 'GET', path: '/events', query: q, headers: {}, body: null }); }
var res = get({ limit: '3' });
T.eq(res.body.data.map(function (e) { return e.id; }), [7, 6, 5], 'Newest first: 7 (at 260), then the at-200 events by id descending');
T.eq(res.body.has_more, true, 'Four events remain, so has_more is true');
T.eq(res.body.next_cursor, btoa('[200,5]'), 'next_cursor encodes the LAST row returned: event 5 at 200');
var all = get({ limit: '7' });
T.eq([all.body.data.length, all.body.has_more, all.body.next_cursor], [7, false, null], 'A full page with nothing after it: has_more false, next_cursor null');
T.eq(get({ limit: '4' }).body.has_more, true, 'limit 4 leaves three events: has_more true');
` },
          { text: "Follow the cursors. Write `comesAfter(e, pos)` and use it for `?after=`: every event must appear exactly once, in order, at any page size — including the tie at `at: 200` that falls across a page boundary.",
            test: R`
function walk(limit) {
  var ids = [], after = null, guard = 0;
  do {
    var q = { limit: String(limit) };
    if (after) q.after = after;
    var res = handleRequest({ method: 'GET', path: '/events', query: q, headers: {}, body: null });
    res.body.data.forEach(function (e) { ids.push(e.id); });
    after = res.body.next_cursor;
  } while (after && ++guard < 20);
  return ids;
}
T.expect(typeof comesAfter === 'function', 'Define comesAfter(e, pos)');
T.eq(comesAfter({ id: 4, at: 200 }, [200, 5]), true, 'Same at, smaller id → comes after (the tiebreaker)');
T.eq(comesAfter({ id: 6, at: 200 }, [200, 5]), false, 'Same at, larger id → came before');
T.eq(walk(3), [7, 6, 5, 4, 3, 2, 1], 'Pages of 3: every event once — page 2 starts with 4, the twin of 5');
T.eq(walk(2), [7, 6, 5, 4, 3, 2, 1], 'Pages of 2 too');
T.eq(walk(1), [7, 6, 5, 4, 3, 2, 1], 'And pages of 1, which cross every tie');
` },
          { text: "The point of all this: rows inserted **between** page requests — one newer than everything, one older than the cursor — must cause no repeat and no gap.",
            test: R`
function get(q) { return handleRequest({ method: 'GET', path: '/events', query: q, headers: {}, body: null }); }
var p1 = get({ limit: '3' });
T.eq(p1.body.data.map(function (e) { return e.id; }), [7, 6, 5], 'Page 1');
EVENTS.push({ id: 8, at: 300, type: 'login' });
EVENTS.push({ id: 9, at: 120, type: 'signup' });
var p2 = get({ limit: '3', after: p1.body.next_cursor });
T.eq(p2.body.data.map(function (e) { return e.id; }), [4, 3, 9], 'Page 2 continues after 5: event 8 is above the cursor and changes nothing, event 9 slots in where it belongs');
var p3 = get({ limit: '3', after: p2.body.next_cursor });
T.eq([p3.body.data.map(function (e) { return e.id; }), p3.body.has_more], [[2, 1], false], 'Page 3 is the last two');
` }
        ],
        files: [{ name: "script.js", content: FEED_STARTER }],
        hints: [
          "Both cursor helpers are one line: `return btoa(JSON.stringify([e.at, e.id]));` and `return JSON.parse(atob(cursor));`.",
          "`comesAfter`: `return e.at < pos[0] || (e.at === pos[0] && e.id < pos[1]);` — the list is descending, so 'after' means smaller.",
          "Make `rows` a `let`, filter it with `rows.filter(e => comesAfter(e, decodeCursor(query.after)))` when `query.after` is set, then `const hasMore = rows.length > limit;` and `next_cursor: hasMore ? encodeCursor(data[data.length - 1]) : null`."
        ],
        solution: { "script.js": FEED_SOLUTION }
      },

      {
        id: "api-u2-3",
        title: "Limits, bad cursors and Link headers",
        kind: "js", chip: "API", xp: 15, mins: 14,
        brief: "The last lesson trusted its input. A public API can't.\n\n- **`limit`** — absent means 3. Only a whole number of at least 1 is valid (`abc`, `0`, `-2` and `2.5` are a **400** problem). Above `MAX_LIMIT` (10), **coerce it down** and serve 10, as Google's AIP-158 recommends: the client asked for *as many as you'll give*\n- **`after`** — a cursor is input like any other. A client that edits it, truncates it, or pastes one from somewhere else must get a **400**, never a 500 from `atob` or `JSON.parse` throwing\n- **`link`** — RFC 8288 lets the response say where the next page is: `link: </events?limit=3&after=…>; rel=\"next\"`, with the **effective** limit and the cursor URL-encoded (base64 contains `+`, `/` and `=`). No next page, no `link` header\n\nThe feed now has 12 events. `problem()` is provided.",
        steps: [
          { text: "Write `parseLimit(text)`: absent → 3, a whole number ≥ 1 → itself capped at `MAX_LIMIT`, anything else → `null`. A `null` limit answers 400 `invalid-parameter` with detail `limit must be a whole number of at least 1`.",
            test: R`
function get(q) { return handleRequest({ method: 'GET', path: '/events', query: q, headers: {}, body: null }); }
['abc', '0', '-2', '2.5'].forEach(function (bad) {
  var res = get({ limit: bad });
  T.eq([res.status, res.body.type, res.body.detail], [400, 'https://api.example.com/problems/invalid-parameter', 'limit must be a whole number of at least 1'], 'limit=' + bad + ' → 400 problem');
});
T.eq(get({}).body.data.length, 3, 'No limit → 3');
var big = get({ limit: '50' });
T.eq([big.status, big.body.data.length, big.body.has_more], [200, 10, true], 'limit=50 is coerced to MAX_LIMIT: 10 events, more remain');
T.eq(get({ limit: '10' }).body.data.length, 10, 'limit=10 is exactly the maximum');
` },
          { text: "Make `decodeCursor` return `null` for anything that is not a cursor this API issued, and answer those with a 400 whose detail is `after is not a cursor this API issued`.",
            test: R`
function get(q) { return handleRequest({ method: 'GET', path: '/events', query: q, headers: {}, body: null }); }
var bad = { 'not base64 at all': 'garbage!!', 'base64 of plain text': btoa('hello'), 'an object, not [at, id]': btoa('{"at":250}'), 'an id that is a string': btoa('[250,"10"]'), 'only one number': btoa('[250]') };
Object.keys(bad).forEach(function (why) {
  var res;
  try { res = get({ after: bad[why] }); } catch (e) { throw new Error(why + ': handleRequest threw "' + e.message + '" — a bad cursor must come back as a 400, not a crash'); }
  T.eq([res.status, res.body.detail], [400, 'after is not a cursor this API issued'], why + ' → 400');
});
T.eq(get({ after: btoa('[250,10]') }).body.data.map(function (e) { return e.id; }), [9, 8, 7], 'A real cursor still works');
` },
          { text: "When there is a next page, add `link: </events?limit=<limit>&after=<cursor>>; rel=\"next\"` — the effective limit, the cursor through `encodeURIComponent`. The last page has no `link` header.",
            test: R`
function get(q) { return handleRequest({ method: 'GET', path: '/events', query: q, headers: {}, body: null }); }
var p1 = get({ limit: '3' });
T.eq(p1.body.next_cursor, btoa('[250,10]'), 'Page 1 ends at event 10');
T.eq(p1.headers.link, '</events?limit=3&after=' + encodeURIComponent(btoa('[250,10]')) + '>; rel="next"', 'The link header points at page 2, cursor URL-encoded');
T.expect(p1.headers.link.indexOf('=>') === -1, 'base64 ends in = here: it must be encoded as %3D inside the URL');
var big = get({ limit: '50' });
T.eq(big.headers.link, '</events?limit=10&after=' + encodeURIComponent(btoa('[130,3]')) + '>; rel="next"', 'The link carries the EFFECTIVE limit, 10, not the 50 that was asked for');
var last = get({ limit: '3', after: btoa('[160,4]') });
T.eq([last.body.data.map(function (e) { return e.id; }), last.body.has_more], [[3, 2, 1], false], 'The last page');
T.eq(last.headers.link, undefined, 'No next page → no link header at all');
` },
          { text: "A client that only ever follows `rel=\"next\"` must see all 12 events, once each, in order.",
            test: R`
var ids = [], url = '/events?limit=5', guard = 0;
while (url && guard++ < 20) {
  var m = /^\/events\?limit=(\d+)(?:&after=([^&]+))?$/.exec(url);
  T.expect(m, 'Could not read the next URL: ' + url);
  var q = { limit: m[1] };
  if (m[2]) q.after = decodeURIComponent(m[2]);
  var res = handleRequest({ method: 'GET', path: '/events', query: q, headers: {}, body: null });
  res.body.data.forEach(function (e) { ids.push(e.id); });
  var link = res.headers.link;
  url = link ? /^<([^>]+)>; rel="next"$/.exec(link)[1] : null;
}
T.eq(ids, [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Following link from page to page reaches every event exactly once');
` }
        ],
        files: [{ name: "script.js", content: LIMITS_STARTER }],
        hints: [
          "`parseLimit`: `if (text === undefined) return 3;` then `if (!/^[1-9][0-9]*$/.test(text)) return null;` then `return Math.min(Number(text), MAX_LIMIT);`.",
          "In `decodeCursor`, put the decode in a `try`, keep the result only if `Array.isArray(pos) && pos.length === 2 && Number.isInteger(pos[0]) && Number.isInteger(pos[1])`, and `return null` after the `catch`.",
          "Build headers last: `const headers = {}; if (next) headers.link = \"</events?limit=\" + limit + \"&after=\" + encodeURIComponent(next) + \">; rel=\\\"next\\\"\";` and return `headers` instead of `{}`."
        ],
        solution: { "script.js": LIMITS_SOLUTION }
      },

      {
        id: "api-u2-4",
        title: "Filters, sorts and the cursor contract",
        kind: "js", chip: "API", xp: 15, mins: 15,
        brief: "Real lists are filtered and sorted: `GET /tickets?status=open&sort=-priority&limit=2`. Two rules keep that honest.\n\n**Refuse what you don't support.** An API that ignores unknown parameters turns a typo into a wrong answer — `?statsu=open` silently returns *every* ticket. Allowlist the keys (`PARAMS`), the `status` values and the `sort` values, and answer anything else with a 400 that says what *is* allowed.\n\n**A cursor belongs to its query.** A position like *priority 3, id 5* only means something in the order and subset that produced it. Put the query's **fingerprint** — `status` and `sort` — inside the cursor, and refuse it with a different one, as Google's AIP-158 requires for page tokens. `limit` is not part of it: a client may ask for bigger pages halfway through.\n\nThe sort mechanics are provided: `parseSort` and `compare`, which breaks ties by `id` in the same direction.",
        steps: [
          { text: "Allowlist the input: an unknown key → `invalid(\"Unknown query parameter: \" + key, { allowed: PARAMS })`; a bad `status` → `invalid(\"status must be open or closed\")`; a bad `sort` → `invalid(\"sort must be one of \" + SORTS.join(\", \"))`.",
            test: R`
function get(q) { return handleRequest({ method: 'GET', path: '/tickets', query: q, headers: {}, body: null }); }
var typo = get({ statsu: 'open' });
T.eq([typo.status, typo.body.detail], [400, 'Unknown query parameter: statsu'], 'A typo is refused, not ignored');
T.eq(typo.body.allowed, ['status', 'sort', 'limit', 'after'], 'and the problem lists what IS allowed');
var st = get({ status: 'pending' });
T.eq([st.status, st.body.detail], [400, 'status must be open or closed'], 'status=pending → 400');
var so = get({ sort: 'title' });
T.eq([so.status, so.body.detail], [400, 'sort must be one of created, -created, priority, -priority'], 'sort=title → 400');
T.eq(get({ sort: '-priority' }).status, 200, 'A supported sort still works');
` },
          { text: "Check the first pages. With the validation in front, filtering and sorting already work — confirm them, ties broken by `id`.",
            test: R`
function ids(q) { return handleRequest({ method: 'GET', path: '/tickets', query: q, headers: {}, body: null }).body.data.map(function (t) { return t.id; }); }
T.eq(ids({}), [8, 7], 'Default: newest created first, 2 per page');
T.eq(ids({ status: 'open', sort: '-priority' }), [8, 5], 'Open tickets, highest priority first; 8 and 5 tie on priority 3, so the higher id leads');
T.eq(ids({ status: 'closed' }), [6, 2], 'Closed tickets only');
T.eq(ids({ sort: 'priority', limit: '8' }), [4, 6, 1, 7, 2, 3, 5, 8], 'Ascending priority, ties by ascending id');
` },
          { text: "Walk filtered and sorted lists to the end by following `next_cursor` with the same query. Put the fingerprint in the cursor now — `{ q: (status || \"\") + \"|\" + sort, v: [value, id] }` — and refuse a cursor that doesn't decode with `invalid(\"after is not a cursor this API issued\")`.",
            test: R`
function walk(q) {
  var out = [], after = null, guard = 0;
  do {
    var query = Object.assign({}, q);
    if (after) query.after = after;
    var res = handleRequest({ method: 'GET', path: '/tickets', query: query, headers: {}, body: null });
    T.expect(res.status === 200, 'A page request failed: ' + res.status + ' ' + JSON.stringify(res.body));
    res.body.data.forEach(function (t) { out.push(t.id); });
    after = res.body.next_cursor;
  } while (after && ++guard < 20);
  return out;
}
T.eq(walk({ status: 'open', sort: '-priority', limit: '2' }), [8, 5, 3, 7, 1, 4], 'Every open ticket, by priority, once each');
T.eq(walk({ sort: 'priority', limit: '3' }), [4, 6, 1, 7, 2, 3, 5, 8], 'Every ticket by ascending priority, in pages of 3');
var junk = handleRequest({ method: 'GET', path: '/tickets', query: { after: 'nope' }, headers: {}, body: null });
T.eq([junk.status, junk.body.detail], [400, 'after is not a cursor this API issued'], 'A cursor that does not decode → 400');
` },
          { text: "Bind the cursor to its query: reused with a different `status` or `sort` it answers `invalid(\"after was issued for a different query\")`. A different `limit` is fine.",
            test: R`
function get(q) { return handleRequest({ method: 'GET', path: '/tickets', query: q, headers: {}, body: null }); }
var c = get({ status: 'open', sort: '-priority', limit: '2' }).body.next_cursor;
var otherSort = get({ status: 'open', sort: '-created', limit: '2', after: c });
T.eq([otherSort.status, otherSort.body.detail], [400, 'after was issued for a different query'], 'Same cursor, different sort → 400');
T.eq(get({ status: 'closed', sort: '-priority', limit: '2', after: c }).status, 400, 'Same cursor, different filter → 400');
T.eq(get({ sort: '-priority', limit: '2', after: c }).status, 400, 'Dropping the filter changes the query too → 400');
var bigger = get({ status: 'open', sort: '-priority', limit: '3', after: c });
T.eq([bigger.status, bigger.body.data.map(function (t) { return t.id; })], [200, [3, 7, 1]], 'Only limit changed — the cursor still applies');
` }
        ],
        files: [{ name: "script.js", content: TICKETS_STARTER }],
        hints: [
          "Find the first unknown key with `Object.keys(query).find(k => !PARAMS.includes(k))` and check it before anything else; then the status, then `SORTS.includes(sort)`.",
          "Compute `const fingerprint = (query.status || \"\") + \"|\" + sort;` and put it in the cursor: `btoa(JSON.stringify({ q: fingerprint, v: [last[s.field], last.id] }))`.",
          "Decode inside a `try` (`let cur = null; try { cur = JSON.parse(atob(query.after)); } catch (err) {}`), then `if (!cur || !Array.isArray(cur.v))` → not a cursor, and `if (cur.q !== fingerprint)` → a different query."
        ],
        solution: { "script.js": TICKETS_SOLUTION }
      },

      {
        id: "api-quiz-2",
        title: "Unit 2 quiz: Pagination that survives writes",
        kind: "quiz", xp: 10,
        brief: "Offsets, cursors, limits and the cursor contract. 80% to pass.",
        questions: [
          { q: "Offset pagination, newest first, 10 per page. Between a client's page 1 and page 2 requests, 3 new items are posted. What does page 2 show?",
            choices: ["Exactly the next 10 items with no repeats, because the offset is still 10", "3 items the client already saw on page 1, then 7 it hasn't seen", "Only the 3 new items", "An error, because the total changed"],
            answer: 1, explain: "The 3 new rows went in at the top and pushed everything down 3 places. Skipping 10 now lands 3 rows earlier in the old list, so the last 3 rows of page 1 come round again. A delete would cause the opposite: rows skipped and never shown." },
          { q: "Why must a keyset sort end with a unique column such as `id`?",
            choices: ["It makes the cursor shorter", "So the client can work out the next cursor itself", "Rows that tie on the sort value would be skipped across a page boundary", "Databases refuse to run ORDER BY on a non-unique column unless an index covers it"],
            answer: 2, explain: "A cursor is the sort value of the last row. If that value isn't unique, 'after this value' excludes every other row with the same value, and they fall in the gap between pages. Adding id makes every position unique." },
          { q: "A client sends `?limit=500` and the documented maximum is 100. Following Google's AIP-158, what should the API do?",
            choices: ["Serve 500 items", "Serve an empty page", "Return a 400 problem, because any value above the documented maximum is invalid input", "Serve 100 items, coercing the page size down to the maximum"],
            answer: 3, explain: "AIP-158 says a page size above the maximum should be coerced to the maximum. The client asked for 'as many as you'll give', and 100 is that. Values that can't be a size at all, like 0 or 'abc', are still errors." },
          { q: "A client edits an `after` cursor and it no longer decodes. What should the response be?",
            choices: ["A 400 problem saying the cursor is not one this API issued", "500 Internal Server Error, since decoding threw inside the server's own code", "200 with the first page", "200 with an empty page"],
            answer: 0, explain: "The cursor is client input, and bad input is a 4xx. Letting atob or JSON.parse throw makes it a 500, which tells the client your server is broken. Quietly serving page 1 or an empty page hides the bug in the client." },
          { q: "A cursor came from `?status=open&sort=-priority`. A client reuses it with `?sort=-created`. Why should the API reject it?",
            choices: ["Cursors are single-use by design, so any second request with one must fail, whatever its query", "The cursor holds a priority and an id, which mean nothing as a position in a list ordered by created", "Changing the sort requires a POST", "It shouldn't: any cursor works with any query"],
            answer: 1, explain: "A position is only meaningful in the order and subset that produced it. Applied to a different sort it lands somewhere arbitrary and silently skips or repeats rows. Cursors are not single-use: following the same one twice gives the same page." },
          { q: "What does `link: </events?limit=3&after=WzI1MCwxMF0%3D>; rel=\"next\"` tell a client?",
            choices: ["That the client must follow a redirect before it can read the rest", "The URL of the previous page", "That the cursor has expired", "The URL of the next page, ready to request as it is"],
            answer: 3, explain: "RFC 8288 web links name related resources, and rel=\"next\" is the next page. The cursor is already URL-encoded (%3D is =), so the client requests the URL unchanged. GitHub's API paginates the same way." }
        ]
      }
    ]
  });
})();
