/* Advanced API Design — Unit 3: Shaping responses */
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

  /* Checkpoints compare objects with their keys sorted, so a learner who
     builds { name, id } instead of { id, name } is not failed for it. */
  var SORTED = "function sorted(o) { if (Array.isArray(o)) return o.map(sorted); if (o && typeof o === 'object') { var r = {}; Object.keys(o).sort().forEach(function (k) { r[k] = sorted(o[k]); }); return r; } return o; }\n";

  /* ---------- api-u3-1: sparse fieldsets ---------- */
  var FIELDS_HEAD = PROBLEM_FN + R`
const FIELDS = ["id", "name", "price", "stock", "description", "tags"];
const PRODUCTS = [
  { id: "p_1", name: "Desk lamp", price: { amount: 3499, currency: "USD" }, stock: 12,
    description: "Warm white LED with three brightness levels", tags: ["lighting", "desk"] },
  { id: "p_2", name: "Bookshelf", price: { amount: 12900, currency: "USD" }, stock: 3,
    description: "Oak veneer, five shelves", tags: ["storage"] },
  { id: "p_3", name: "Armchair", price: { amount: 24900, currency: "USD" }, stock: 0,
    description: "Linen, with a removable cover", tags: ["seating"] }
];
`;

  var FIELDS_STARTER = FIELDS_HEAD + R`
// 1) The field names ?fields= asks for: absent → every field in FIELDS.
//    Otherwise split on commas, trim each name, and drop empty entries.
function parseFields(text) {
  return FIELDS;
}

// 1) A copy of the product with only the wanted fields — and id, always.
function pick(product, wanted) {
  return product;
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  if (req.method !== "GET" || parts[0] !== "products" || parts.length > 2) {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const query = req.query || {};
  const wanted = parseFields(query.fields);
  // 3) no names at all → problem(400, "invalid-parameter", "Invalid parameter", "fields must name at least one field")
  //    a name not in FIELDS → the same 400 with detail "Unknown field: " + name and { allowed: FIELDS }

  if (parts.length === 1) {
    // 2) the list answers { data: [...] } — apply pick to every product
    return { status: 200, headers: {}, body: { data: PRODUCTS } };
  }
  const product = PRODUCTS.find(p => p.id === parts[1]);
  if (!product) return problem(404, "not-found", "Not Found", "No product " + parts[1]);
  return { status: 200, headers: {}, body: pick(product, wanted) };
}
`;

  var FIELDS_SOLUTION = FIELDS_HEAD + R`
// The field names ?fields= asks for: absent → every field.
function parseFields(text) {
  if (text === undefined) return FIELDS;
  return text.split(",").map(f => f.trim()).filter(Boolean);
}

// A copy of the product with only the wanted fields — and id, always.
function pick(product, wanted) {
  const out = {};
  FIELDS.forEach(f => {
    if (f === "id" || wanted.includes(f)) out[f] = product[f];
  });
  return out;
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  if (req.method !== "GET" || parts[0] !== "products" || parts.length > 2) {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const query = req.query || {};
  const wanted = parseFields(query.fields);
  if (wanted.length === 0) {
    return problem(400, "invalid-parameter", "Invalid parameter", "fields must name at least one field");
  }
  const unknown = wanted.find(f => !FIELDS.includes(f));
  if (unknown) {
    return problem(400, "invalid-parameter", "Invalid parameter", "Unknown field: " + unknown, { allowed: FIELDS });
  }

  if (parts.length === 1) {
    return { status: 200, headers: {}, body: { data: PRODUCTS.map(p => pick(p, wanted)) } };
  }
  const product = PRODUCTS.find(p => p.id === parts[1]);
  if (!product) return problem(404, "not-found", "Not Found", "No product " + parts[1]);
  return { status: 200, headers: {}, body: pick(product, wanted) };
}
`;

  /* ---------- api-u3-2: ?expand= without N+1 ---------- */
  var EXPAND_HEAD = PROBLEM_FN + R`
const USERS = {
  u_1: { id: "u_1", name: "Ada Lovelace" },
  u_2: { id: "u_2", name: "Grace Hopper" },
  u_3: { id: "u_3", name: "Linus Torvalds" }
};

// The data layer. Every call is one round trip, and each is recorded in db.calls.
const db = {
  calls: [],
  getUser(id) {
    db.calls.push("getUser " + id);
    return USERS[id] || null;
  },
  getUsers(ids) {
    db.calls.push("getUsers " + ids.join(","));
    return ids.map(id => USERS[id] || null);
  }
};

const POSTS = [
  { id: 1, title: "Notes on the engine", author: "u_1" },
  { id: 2, title: "Bugs in the relay", author: "u_2" },
  { id: 3, title: "The first program", author: "u_1" },
  { id: 4, title: "Just a hobby kernel", author: "u_3" },
  { id: 5, title: "Compilers for everyone", author: "u_2" },
  { id: 6, title: "Poetical science", author: "u_1" },
  { id: 7, title: "An orphaned post", author: "u_9" }
];
const EXPANDABLE = ["author"];
`;

  var EXPAND_STARTER = EXPAND_HEAD + R`
// Replace each post's author id with the user object.
// 1) This makes one round trip PER POST — and it rewrites the stored posts.
//    Collect the unique author ids (in first-seen order), load them with ONE
//    db.getUsers call, and build NEW post objects instead of editing POSTS.
//    An author that no longer exists expands to null.
function expandAuthors(posts) {
  return posts.map(p => {
    p.author = db.getUser(p.author);
    return p;
  });
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  if (req.method !== "GET" || parts[0] !== "posts" || parts.length > 2) {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const query = req.query || {};
  const expand = query.expand === undefined ? [] : query.expand.split(",");
  // 2) a name not in EXPANDABLE → problem(400, "invalid-parameter", "Invalid parameter",
  //      "Cannot expand: " + name, { allowed: EXPANDABLE })

  let posts = POSTS;
  if (parts.length === 2) {
    posts = POSTS.filter(p => p.id === Number(parts[1]));
    if (!posts.length) return problem(404, "not-found", "Not Found", "No post " + parts[1]);
  }
  if (expand.includes("author")) posts = expandAuthors(posts);
  return { status: 200, headers: {}, body: parts.length === 2 ? posts[0] : { data: posts } };
}
`;

  var EXPAND_SOLUTION = EXPAND_HEAD + R`
// Replace each post's author id with the user — ONE round trip for all of them.
function expandAuthors(posts) {
  const ids = [];
  posts.forEach(p => {
    if (!ids.includes(p.author)) ids.push(p.author);
  });
  const users = db.getUsers(ids);
  return posts.map(p => Object.assign({}, p, { author: users[ids.indexOf(p.author)] }));
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  if (req.method !== "GET" || parts[0] !== "posts" || parts.length > 2) {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const query = req.query || {};
  const expand = query.expand === undefined ? [] : query.expand.split(",");
  const unknown = expand.find(e => !EXPANDABLE.includes(e));
  if (unknown) {
    return problem(400, "invalid-parameter", "Invalid parameter", "Cannot expand: " + unknown, { allowed: EXPANDABLE });
  }

  let posts = POSTS;
  if (parts.length === 2) {
    posts = POSTS.filter(p => p.id === Number(parts[1]));
    if (!posts.length) return problem(404, "not-found", "Not Found", "No post " + parts[1]);
  }
  if (expand.includes("author")) posts = expandAuthors(posts);
  return { status: 200, headers: {}, body: parts.length === 2 ? posts[0] : { data: posts } };
}
`;

  /* ---------- api-u3-4: JSON Merge Patch ---------- */
  var MERGE_HEAD = PROBLEM_FN + R`
const READ_ONLY = ["id", "created"];
let profiles = {
  u_1: {
    id: "u_1", created: "2026-01-04T09:00:00Z", name: "Ada", nickname: "countess",
    address: { city: "London", zip: "N1 9GU" }, tags: ["math", "poetry"]
  }
};

function isObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}
`;

  var MERGE_STARTER = MERGE_HEAD + R`
// RFC 7396, section 2 — return the result WITHOUT changing target:
//   patch is not an object → the result is the patch itself
//   otherwise start from a copy of target (or {} if target isn't an object), then
//   for each member of the patch: null → delete it; anything else → mergePatch(old, new)
function mergePatch(target, patch) {
  return Object.assign({}, target, patch);
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  const profile = parts[0] === "profiles" && parts.length === 2 ? profiles[parts[1]] : undefined;
  if (!profile || !Object.prototype.hasOwnProperty.call(profiles, parts[1])) {
    return problem(404, "not-found", "Not Found", "No resource at " + req.path);
  }
  if (req.method === "GET") return { status: 200, headers: {}, body: profile };
  if (req.method === "PATCH") {
    // 3) the content-type (ignore any ";charset=…") must be application/merge-patch+json, else
    //    problem(415, "unsupported-media-type", "Unsupported Media Type",
    //            "PATCH accepts application/merge-patch+json"), with an
    //    accept-patch: "application/merge-patch+json" header
    // 4) a patch that touches a READ_ONLY member → 422 validation, one error per member:
    //    { detail: "is read-only", pointer: "#/" + member }
    const updated = mergePatch(profile, req.body);
    profiles[parts[1]] = updated;
    return { status: 200, headers: {}, body: updated };
  }
  return problem(405, "method-not-allowed", "Method Not Allowed", req.method + " is not supported here");
}
`;

  var MERGE_SOLUTION = MERGE_HEAD + R`
// RFC 7396, section 2 — returns the result without changing target.
function mergePatch(target, patch) {
  if (!isObject(patch)) return patch;
  const result = isObject(target) ? Object.assign({}, target) : {};
  Object.keys(patch).forEach(key => {
    if (patch[key] === null) delete result[key];
    else result[key] = mergePatch(result[key], patch[key]);
  });
  return result;
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  const profile = parts[0] === "profiles" && parts.length === 2 ? profiles[parts[1]] : undefined;
  if (!profile || !Object.prototype.hasOwnProperty.call(profiles, parts[1])) {
    return problem(404, "not-found", "Not Found", "No resource at " + req.path);
  }
  if (req.method === "GET") return { status: 200, headers: {}, body: profile };
  if (req.method === "PATCH") {
    const type = String((req.headers || {})["content-type"] || "").split(";")[0].trim();
    if (type !== "application/merge-patch+json") {
      const res = problem(415, "unsupported-media-type", "Unsupported Media Type", "PATCH accepts application/merge-patch+json");
      res.headers["accept-patch"] = "application/merge-patch+json";
      return res;
    }
    const touched = READ_ONLY.filter(k => isObject(req.body) && k in req.body);
    if (touched.length) {
      return problem(422, "validation", "Invalid request", "See errors for the fields to fix.",
        { errors: touched.map(k => ({ detail: "is read-only", pointer: "#/" + k })) });
    }
    const updated = mergePatch(profile, req.body);
    profiles[parts[1]] = updated;
    return { status: 200, headers: {}, body: updated };
  }
  return problem(405, "method-not-allowed", "Method Not Allowed", req.method + " is not supported here");
}
`;

  window.CODELAB.addUnit("api", {
    id: "api-u3",
    title: "Shaping responses",
    icon: "🧩",
    blurb: "Let clients ask for less (?fields=) and more (?expand=) without N+1 queries, pick representations that won't bite in five years, and make PATCH mean exactly one thing.",
    cheat: [
      { h: "Sparse fieldsets", lang: "text", code: "GET /products/p_2?fields=name,price\n→ { \"id\": \"p_2\", \"name\": \"Bookshelf\", \"price\": {…} }\n\n?fields=colour   → 400  Unknown field: colour  + allowed\n?fields=         → 400  fields must name at least one field", note: "id always comes back, so the client can still tell rows apart. JSON:API spells it fields[products]=…; Google's AIPs use a read mask. Same idea." },
      { h: "Expand without N+1", lang: "js", code: "const ids = [];\nposts.forEach(p => { if (!ids.includes(p.author)) ids.push(p.author); });\nconst users = db.getUsers(ids);            // ONE round trip\nreturn posts.map(p => Object.assign({}, p,\n  { author: users[ids.indexOf(p.author)] }));  // new objects", note: "One lookup per row is N+1 round trips: fine at 3 rows, a timeout at 3,000. Stripe's ?expand[]= replaces an id with the object it names, exactly like this." },
      { h: "Representations that age well", lang: "json", code: "{\n  \"id\": \"9007199254740993\",              // string: past 2^53\n  \"price\": { \"amount\": 1999, \"currency\": \"USD\" },  // minor units\n  \"created\": \"2026-10-07T14:03:00Z\"       // RFC 3339, UTC\n}", note: "0.1 + 0.2 is 0.30000000000000004, so money is an integer of cents. JavaScript rounds integers above 2^53, so big ids are strings (Twitter's id_str). A timestamp with a Z means the same instant everywhere." },
      { h: "JSON Merge Patch (RFC 7396)", lang: "js", code: "function mergePatch(target, patch) {\n  if (!isObject(patch)) return patch;           // arrays & scalars replace\n  const result = isObject(target) ? Object.assign({}, target) : {};\n  Object.keys(patch).forEach(key => {\n    if (patch[key] === null) delete result[key]; // null = remove\n    else result[key] = mergePatch(result[key], patch[key]);\n  });\n  return result;\n}", note: "Absent means leave it alone; null means remove it; objects merge recursively; arrays are replaced whole. You cannot set a value TO null with a merge patch — that is its one known limit." },
      { h: "PATCH's media type", lang: "text", code: "PATCH /profiles/u_1\ncontent-type: application/merge-patch+json\n\n415 Unsupported Media Type\naccept-patch: application/merge-patch+json", note: "The media type says which patch format the body is in (merge patch, or RFC 6902 JSON Patch). Accept-Patch (RFC 5789) tells the client which ones the resource takes." }
    ],
    lessons: [

      {
        id: "api-u3-1",
        title: "Sparse fieldsets: ?fields=",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "A product list for a phone's search results needs a name and a price. The full product carries a description, tags and stock too, and over a slow connection every byte is a cost the client pays. **Sparse fieldsets** let the client ask for less: `GET /products?fields=name,price`.\n\nThe rules this API keeps:\n\n- `fields` absent → every field\n- `fields=name,price` → only those, **plus `id`, always**, so rows can still be told apart and fetched again\n- names are trimmed and duplicates are harmless: `name, name ,stock` is fine\n- a name the resource doesn't have → **400** that lists what is allowed. A typo must not silently return less than the client thinks it asked for\n- `fields=` with no names → **400**\n\nIt works the same on the list (`{ data: [...] }`) and on one product. `problem()` is provided.",
        steps: [
          { text: "Write `parseFields(text)` and `pick(product, wanted)`. `GET /products/p_2?fields=name` answers just `id` and `name`.",
            test: SORTED + R`
function get(p, q) { return handleRequest({ method: 'GET', path: p, query: q, headers: {}, body: null }); }
T.eq(sorted(get('/products/p_2', { fields: 'name' }).body), sorted({ id: 'p_2', name: 'Bookshelf' }), 'fields=name → id and name only');
T.eq(sorted(get('/products/p_2', { fields: 'stock' }).body), sorted({ id: 'p_2', stock: 3 }), 'fields=stock → id and stock');
T.eq(sorted(get('/products/p_2', { fields: 'id' }).body), sorted({ id: 'p_2' }), 'fields=id → just the id');
T.eq(Object.keys(get('/products/p_2', {}).body).length, 6, 'No fields → all six fields');
T.eq(sorted(PRODUCTS[1]), sorted({ id: 'p_2', name: 'Bookshelf', price: { amount: 12900, currency: 'USD' }, stock: 3, description: 'Oak veneer, five shelves', tags: ['storage'] }), 'pick builds a COPY — the stored product keeps every field');
` },
          { text: "Apply it to the list: `GET /products?fields=name,price` answers `{ data: [...] }` with every product trimmed the same way. Names are trimmed, and repeating one is harmless.",
            test: SORTED + R`
function get(p, q) { return handleRequest({ method: 'GET', path: p, query: q, headers: {}, body: null }); }
var res = get('/products', { fields: 'name,price' });
T.eq(sorted(res.body.data), sorted([
  { id: 'p_1', name: 'Desk lamp', price: { amount: 3499, currency: 'USD' } },
  { id: 'p_2', name: 'Bookshelf', price: { amount: 12900, currency: 'USD' } },
  { id: 'p_3', name: 'Armchair', price: { amount: 24900, currency: 'USD' } }
]), 'Every product: id, name and price');
T.eq(sorted(get('/products', { fields: 'name, name ,stock' }).body.data[2]), sorted({ id: 'p_3', name: 'Armchair', stock: 0 }), 'Spaces are trimmed and a repeated name is fine');
T.eq(Object.keys(get('/products', {}).body.data[0]).length, 6, 'No fields on the list → full products');
` },
          { text: "Refuse what can't be honoured: an unknown name is a 400 with detail `Unknown field: <name>` and `allowed: FIELDS`; a `fields` that names nothing is a 400 with detail `fields must name at least one field`.",
            test: R`
function get(p, q) { return handleRequest({ method: 'GET', path: p, query: q, headers: {}, body: null }); }
var res = get('/products', { fields: 'name,colour' });
T.eq([res.status, res.body.type, res.body.detail], [400, 'https://api.example.com/problems/invalid-parameter', 'Unknown field: colour'], 'An unknown field → 400');
T.eq(res.body.allowed, ['id', 'name', 'price', 'stock', 'description', 'tags'], 'and the problem lists the fields that exist');
T.eq(get('/products/p_1', { fields: 'cost' }).status, 400, 'The single-product route refuses it too');
var empty = get('/products', { fields: ' , ' });
T.eq([empty.status, empty.body.detail], [400, 'fields must name at least one field'], 'fields= with no names → 400');
T.eq(get('/products/p_9', { fields: 'name' }).status, 404, 'A missing product is still a 404');
` }
        ],
        files: [{ name: "script.js", content: FIELDS_STARTER }],
        hints: [
          "`parseFields`: `if (text === undefined) return FIELDS;` then `return text.split(\",\").map(f => f.trim()).filter(Boolean);`.",
          "`pick` walks FIELDS rather than the request, so the order is always the resource's own: `const out = {}; FIELDS.forEach(f => { if (f === \"id\" || wanted.includes(f)) out[f] = product[f]; }); return out;`.",
          "Validate right after `parseFields`: `if (wanted.length === 0) …`, then `const unknown = wanted.find(f => !FIELDS.includes(f));` — and map the list: `PRODUCTS.map(p => pick(p, wanted))`."
        ],
        solution: { "script.js": FIELDS_SOLUTION }
      },

      {
        id: "api-u3-2",
        title: "Expanding related resources without N+1",
        kind: "js", chip: "API", xp: 15, mins: 14,
        brief: "A post names its author by id: `author: \"u_1\"`. A client that shows the author's name then makes one more request per post. **`?expand=author`** lets it ask the server to replace the id with the user object, the way Stripe's `expand[]` does.\n\nThe naive version is in the starter, and it has two bugs a reviewer should catch.\n\n- **N+1.** It calls `db.getUser` once per post. Seven posts make seven round trips to the user store, and a page of 500 would make 500. Collect the **unique** author ids first, in the order you first meet them, and make **one** `db.getUsers(ids)` call.\n- **It edits the store.** `p.author = …` rewrites the posts in `POSTS`, so the next request *without* expand gets user objects too. Build new objects instead: `Object.assign({}, p, { author: … })`.\n\nAn author who no longer exists (post 7's `u_9`) expands to `null` — `getUsers` already returns that. An expansion this API can't do is a 400. `db.calls` records every round trip, and the checks read it.",
        steps: [
          { text: "Without `expand`, nothing about authors is loaded: the posts come back with author ids and `db.calls` stays empty.",
            test: R`
db.calls.length = 0;
var res = handleRequest({ method: 'GET', path: '/posts', query: {}, headers: {}, body: null });
T.eq(res.body.data.map(function (p) { return p.author; }), ['u_1', 'u_2', 'u_1', 'u_3', 'u_2', 'u_1', 'u_9'], 'Plain posts carry author ids');
T.eq(db.calls, [], 'No expand → no user lookups at all');
` },
          { text: "`?expand=author` replaces every author id with the user, using **one** `db.getUsers` call with each id once, in first-seen order — and leaves `POSTS` untouched.",
            test: R`
db.calls.length = 0;
var res = handleRequest({ method: 'GET', path: '/posts', query: { expand: 'author' }, headers: {}, body: null });
T.eq(res.body.data.map(function (p) { return p.author && p.author.name; }), ['Ada Lovelace', 'Grace Hopper', 'Ada Lovelace', 'Linus Torvalds', 'Grace Hopper', 'Ada Lovelace', null], 'Each author expanded; the missing u_9 expands to null');
T.eq(db.calls, ['getUsers u_1,u_2,u_3,u_9'], 'ONE batched round trip, each author once, in the order first seen — not one getUser per post');
var plain = handleRequest({ method: 'GET', path: '/posts', query: {}, headers: {}, body: null });
T.eq(plain.body.data.map(function (p) { return p.author; }), ['u_1', 'u_2', 'u_1', 'u_3', 'u_2', 'u_1', 'u_9'], 'Expanding must not rewrite the stored posts — the next plain request still gets ids');
` },
          { text: "A single post expands with one call as well. An expansion that isn't in `EXPANDABLE` is a 400 with detail `Cannot expand: <name>` and `allowed: EXPANDABLE`, and a missing post is still a 404.",
            test: R`
db.calls.length = 0;
var one = handleRequest({ method: 'GET', path: '/posts/4', query: { expand: 'author' }, headers: {}, body: null });
T.eq(one.body, { id: 4, title: 'Just a hobby kernel', author: { id: 'u_3', name: 'Linus Torvalds' } }, 'Post 4 with its author');
T.eq(db.calls.length, 1, 'One round trip for one post');
var bad = handleRequest({ method: 'GET', path: '/posts', query: { expand: 'author,comments' }, headers: {}, body: null });
T.eq([bad.status, bad.body.detail, bad.body.allowed], [400, 'Cannot expand: comments', ['author']], 'An unknown expansion → 400 naming it and listing what can be expanded');
T.eq(handleRequest({ method: 'GET', path: '/posts/99', query: { expand: 'author' }, headers: {}, body: null }).status, 404, 'No post 99 → 404');
` }
        ],
        files: [{ name: "script.js", content: EXPAND_STARTER }],
        hints: [
          "Collect the ids first: `const ids = []; posts.forEach(p => { if (!ids.includes(p.author)) ids.push(p.author); });` then `const users = db.getUsers(ids);` — that is the only call.",
          "Map to NEW objects: `return posts.map(p => Object.assign({}, p, { author: users[ids.indexOf(p.author)] }));` — the user for an id sits at the same index as the id.",
          "Before loading anything: `const unknown = expand.find(e => !EXPANDABLE.includes(e));` and return the 400 if it finds one."
        ],
        solution: { "script.js": EXPAND_SOLUTION }
      },

      {
        id: "api-u3-3",
        title: "Representations that age well",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "Once a field ships, clients parse it in ways you will never see, and changing its type later breaks them. So pick representations that are still right in five years.\n\n**Money.** Binary floating point cannot hold most decimal fractions exactly, so a price stored as `19.99` is already slightly wrong, and sums drift further. Stripe sends `{ amount: 1999, currency: \"usd\" }`: an **integer of the smallest unit** plus a currency code, because not every currency has two decimals (yen has none).",
            ask: { type: "predict", run: true,
              q: "A cart adds two prices held as JavaScript numbers. What prints?",
              code: "console.log(0.1 + 0.2);",
              answer: "0.30000000000000004",
              why: "Neither 0.1 nor 0.2 is exact in binary floating point, and their sum lands just above 0.3. Integers of cents (10 + 20 = 30) are exact." } },

          { read: "**Identifiers.** JSON numbers have no size limit, but JavaScript reads them into doubles, and a double holds integers exactly only up to 2^53 (9,007,199,254,740,991). A larger id is silently rounded to a *different* id. Twitter hit this with 64-bit tweet ids and added `id_str` alongside `id`. Send ids as **strings** from the start, and clients will never do arithmetic on them either.",
            ask: { type: "predict", run: true, transfer: true,
              q: "The server sends a 64-bit id as a plain JSON number. What does a JavaScript client see?",
              code: "const order = JSON.parse('{\"id\": 9007199254740993}');\nconsole.log(order.id);",
              answer: "9007199254740992",
              why: "9007199254740993 is past 2^53 and cannot be held exactly, so it rounds to the nearest double, which is 9007199254740992. The client now holds a different order's id. As a string, \"9007199254740993\" survives untouched." } },

          { read: "**Time.** `10/07/2026` is the 10th of July in most of the world and the 7th of October in the US. A bare number like `1791381780` does not say whether it counts seconds or milliseconds, or from when. **RFC 3339** (a profile of ISO 8601) removes the guesswork: `2026-10-07T14:03:00Z`. The `Z` means UTC, so every client reads the same instant and converts to local time itself.",
            ask: { type: "pick",
              q: "Which `created` value will every client, in every country and language, read as the same instant?",
              choices: ["\"10/07/2026 2:03 PM\"", "1791381780, a Unix timestamp in seconds", "\"2026-10-07T14:03:00Z\"", "\"Oct 7, 2026, 14:03 in the server's local time\""],
              answer: 2,
              why: [
                "Day and month order depend on the reader's locale, and there is no time zone at all.",
                "Nothing in the value says it is seconds rather than milliseconds — clients guess, and some guess wrong by a factor of 1,000.",
                "RFC 3339 with a Z: unambiguous order, unambiguous zone, and it sorts correctly as text.",
                "The client doesn't know the server's zone, and that zone changes twice a year with daylight saving."
              ] } },

          { read: "**Absent versus null.** In a response, decide whether an empty optional field is omitted or sent as `null`, then do the same everywhere. In a **PATCH**, the difference carries meaning. Under JSON Merge Patch (RFC 7396, next lesson), a member that is **absent** means *leave it alone*, and a member set to **`null`** means *remove it*. `{ \"name\": \"Ada\" }` changes the name and nothing else.",
            ask: { type: "pick",
              q: "A merge-patch body is `{\"nickname\": null}`. What does it ask the server to do?",
              choices: ["Leave the nickname as it is", "Store the text \"null\" as the nickname", "Remove the nickname", "Nothing — null is not allowed in a PATCH body"],
              answer: 2,
              why: [
                "Leaving a member alone is what ABSENT means. A member that is present with null is an instruction.",
                "null is a JSON literal, not text — nothing turns it into the string \"null\".",
                "In a merge patch, null removes the member. That is how a client clears a field it set before.",
                "null is allowed and meaningful. It is the only way a merge patch can delete something."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A product costs 19.99 US dollars. Which representation should the API send?",
              choices: ["{ \"price\": 19.99 }", "{ \"price\": { \"dollars\": 19, \"cents\": 99, \"symbol\": \"$\" } }", "{ \"price\": \"$19.99\" }", "{ \"price\": { \"amount\": 1999, \"currency\": \"USD\" } }"],
              answer: 3,
              why: [
                "A float: inexact already, and it says nothing about the currency.",
                "It assumes every currency has 100 subunits (yen has none) and gives a display symbol where a code belongs.",
                "Formatted text: every client has to parse it, and '$' is used by a dozen currencies.",
                "An integer in the smallest unit plus an ISO 4217 code — exact, and correct for any currency."
              ] } }
        ]
      },

      {
        id: "api-u3-4",
        title: "PATCH with JSON Merge Patch",
        kind: "js", chip: "API", xp: 15, mins: 15,
        brief: "`srv` taught that PATCH changes *some* fields. What a PATCH body *means* is defined by its media type, and the simplest standard one is **JSON Merge Patch, RFC 7396** (`application/merge-patch+json`). Its whole algorithm fits on one screen:\n\n- if the patch is **not an object** — an array, a string, `null` — the result is the patch itself\n- otherwise start from the target (or `{}` if the target isn't an object), and for each member of the patch: **`null` removes** that member; anything else is **merged recursively**\n\nSo objects merge, arrays are **replaced whole** (an array is not an object here), and absent members are left alone. Return a **new** value and leave `target` unchanged — the route stores the result.\n\nThen wire it to `PATCH /profiles/<id>`:\n\n- any other media type → **415 Unsupported Media Type**, with an `accept-patch` header naming the one this resource accepts (RFC 5789)\n- members a client may never write (`id`, `created`) → **422**, one error per member\n\nThe first two checks are RFC 7396's own examples, from its Appendix A.",
        steps: [
          { text: "Write `mergePatch(target, patch)` for objects: replace a member, add one, remove one with `null`, and merge nested objects recursively.",
            test: SORTED + R`
function mp(t, p, want, why) { T.eq(sorted(mergePatch(t, p)), sorted(want), why + ' — mergePatch(' + JSON.stringify(t) + ', ' + JSON.stringify(p) + ')'); }
mp({ a: 'b' }, { a: 'c' }, { a: 'c' }, 'A member is replaced');
mp({ a: 'b' }, { b: 'c' }, { a: 'b', b: 'c' }, 'A new member is added; absent members stay');
mp({ a: 'b' }, { a: null }, {}, 'null removes a member');
mp({ a: 'b', b: 'c' }, { a: null }, { b: 'c' }, 'null removes only that member');
mp({ a: { b: 'c' } }, { a: { b: 'd', c: null } }, { a: { b: 'd' } }, 'Objects merge recursively, null works at any depth');
mp({ e: null }, { a: 1 }, { e: null, a: 1 }, 'A null already in the TARGET is just a value');
mp({}, { a: { bb: { ccc: null } } }, { a: { bb: {} } }, 'Merging into a missing member starts from {}');
` },
          { text: "Handle what isn't an object: arrays and scalars **replace** the target, a non-object target becomes `{}` before merging, and `target` itself is never changed.",
            test: SORTED + R`
function mp(t, p, want, why) { T.eq(sorted(mergePatch(t, p)), sorted(want), why + ' — mergePatch(' + JSON.stringify(t) + ', ' + JSON.stringify(p) + ')'); }
mp({ a: ['b'] }, { a: 'c' }, { a: 'c' }, 'A scalar replaces an array');
mp({ a: 'c' }, { a: ['b'] }, { a: ['b'] }, 'An array replaces a scalar');
mp({ a: [{ b: 'c' }] }, { a: [1] }, { a: [1] }, 'Arrays are replaced whole, never merged');
mp(['a', 'b'], ['c', 'd'], ['c', 'd'], 'An array patch is the result');
mp({ a: 'b' }, ['c'], ['c'], 'An array patch replaces an object');
mp({ a: 'foo' }, null, null, 'A null patch is the result');
mp({ a: 'foo' }, 'bar', 'bar', 'A string patch is the result');
mp(['a', 'b'], { a: 'b', c: null }, { a: 'b' }, 'An object patch on an array target starts from {}');
var target = { a: { b: 1 }, c: 2 };
mergePatch(target, { a: { b: null }, c: null });
T.eq(target, { a: { b: 1 }, c: 2 }, 'mergePatch must not change its target — copy, then edit the copy');
` },
          { text: "Use it in `PATCH /profiles/<id>` with `content-type: application/merge-patch+json`: a nested change, a removal and an array replacement, each answered 200 with the stored result.",
            test: R`
function patch(id, body) { return handleRequest({ method: 'PATCH', path: '/profiles/' + id, query: {}, headers: { 'content-type': 'application/merge-patch+json' }, body: body }); }
var res = patch('u_1', { nickname: null, address: { zip: 'N1 7AA' } });
T.eq(res.status, 200, 'A valid merge patch → 200');
T.eq('nickname' in res.body, false, 'nickname: null removed the nickname');
T.eq(res.body.address, { city: 'London', zip: 'N1 7AA' }, 'address merged: zip changed, city kept');
T.eq(res.body.tags, ['math', 'poetry'], 'tags were absent from the patch, so they are unchanged');
var tags = patch('u_1', { tags: ['chess'] });
T.eq(tags.body.tags, ['chess'], 'An array in the patch replaces the whole array');
var stored = handleRequest({ method: 'GET', path: '/profiles/u_1', query: {}, headers: {}, body: null }).body;
T.eq([stored.name, stored.address.zip, stored.tags], ['Ada', 'N1 7AA', ['chess']], 'GET shows the stored result');
` },
          { text: "Guard the route: another media type is a **415** with `accept-patch: application/merge-patch+json` (a `; charset=utf-8` suffix is fine); a patch touching `id` or `created` is a **422** with one `is read-only` error per member.",
            test: R`
function patch(type, body) { return handleRequest({ method: 'PATCH', path: '/profiles/u_1', query: {}, headers: { 'content-type': type }, body: body }); }
var wrong = patch('application/json', { name: 'Augusta' });
T.eq([wrong.status, wrong.body.type, wrong.body.detail], [415, 'https://api.example.com/problems/unsupported-media-type', 'PATCH accepts application/merge-patch+json'], 'Plain application/json → 415');
T.eq(wrong.headers['accept-patch'], 'application/merge-patch+json', 'A 415 says which patch format this resource accepts');
T.eq(patch('application/merge-patch+json; charset=utf-8', { name: 'Augusta' }).body.name, 'Augusta', 'A charset parameter does not change the media type');
var ro = patch('application/merge-patch+json', { id: 'u_2', created: null, name: 'Mallory' });
T.eq(ro.status, 422, 'Writing read-only members → 422');
T.eq(ro.body.errors, [{ detail: 'is read-only', pointer: '#/id' }, { detail: 'is read-only', pointer: '#/created' }], 'One error per read-only member, in READ_ONLY order');
var after = handleRequest({ method: 'GET', path: '/profiles/u_1', query: {}, headers: {}, body: null }).body;
T.eq([after.id, after.name, after.created], ['u_1', 'Augusta', '2026-01-04T09:00:00Z'], 'A refused patch changes nothing — not even the allowed members');
T.eq(handleRequest({ method: 'PATCH', path: '/profiles/u_7', query: {}, headers: { 'content-type': 'application/merge-patch+json' }, body: {} }).status, 404, 'No profile u_7 → 404');
` }
        ],
        files: [{ name: "script.js", content: MERGE_STARTER }],
        hints: [
          "Start `mergePatch` with the non-object case: `if (!isObject(patch)) return patch;` — then `const result = isObject(target) ? Object.assign({}, target) : {};`.",
          "Loop the patch's keys: `if (patch[key] === null) delete result[key]; else result[key] = mergePatch(result[key], patch[key]);` and `return result;`. The recursion copies nested objects too, so the target is never touched.",
          "Media type first: `String(req.headers[\"content-type\"] || \"\").split(\";\")[0].trim()`. Then `const touched = READ_ONLY.filter(k => k in req.body);` and, if any, return the 422 BEFORE merging."
        ],
        solution: { "script.js": MERGE_SOLUTION }
      },

      {
        id: "api-quiz-3",
        title: "Unit 3 quiz: Shaping responses",
        kind: "quiz", xp: 10,
        brief: "Fieldsets, expansion, representations and merge patch. 80% to pass.",
        questions: [
          { q: "`GET /products/p_2?fields=name` — which body follows this unit's rules?",
            choices: ["The full product, since fields is only a hint", "`{ \"id\": \"p_2\", \"name\": \"Bookshelf\" }`", "`{ \"name\": \"Bookshelf\" }`", "400, because id was not requested"],
            answer: 1, explain: "The client gets what it asked for plus id, always — so it can still tell rows apart and fetch the full resource later. Ignoring fields wastes the bytes it was trying to save." },
          { q: "Listing 50 posts with `?expand=author` by calling `getUser` once per post costs how many round trips to the user store, and what is the fix?",
            choices: ["1, because the database caches repeated lookups", "2: one for the posts and one for the users", "50, and there is no way around it short of adding a cache in front of the database", "50; collect the unique ids and load them in one batched call"],
            answer: 3, explain: "One lookup per row is the N+1 problem. Collecting the distinct ids and loading them in one call makes it a single round trip at any page size. A cache only hides the problem until it is cold." },
          { q: "A client sends `?expand=comments`, which this API cannot expand. What is the best response?",
            choices: ["A 400 problem naming the field and listing what can be expanded", "200 with the posts unexpanded, since the client can check whether the field came back as an object", "404 Not Found", "500 Internal Server Error"],
            answer: 0, explain: "Silently ignoring it makes a typo look like a server bug (\"why is comments missing?\"). A 400 that lists the allowed values tells the client exactly what to fix." },
          { q: "Under JSON Merge Patch, what does `{\"address\": {\"zip\": null}}` do to a profile whose address is `{ city, zip }`?",
            choices: ["Replaces address with an empty object", "Removes the whole address", "Removes zip and keeps city", "Sets zip to the value null"],
            answer: 2, explain: "Objects merge recursively, so only address.zip is addressed, and null removes it. city was absent from the patch, so it is left alone." },
          { q: "A profile has `tags: [\"math\", \"poetry\"]` and a merge patch sends `{\"tags\": [\"chess\"]}`. What are the tags afterwards?",
            choices: ["`[\"math\", \"poetry\", \"chess\"]`", "`[\"chess\"]`", "`[\"chess\", \"poetry\"]`", "Unchanged, because arrays can't be merge-patched"],
            answer: 1, explain: "In RFC 7396 an array is not an object, so it is replaced whole. Appending or editing one element needs a different format, RFC 6902 JSON Patch, with operations like add and remove." },
          { q: "A PATCH arrives with `content-type: application/json` at a resource that only accepts `application/merge-patch+json`. What should it answer?",
            choices: ["400 Bad Request", "200 after treating the body as a merge patch anyway, since the JSON itself parses fine", "406 Not Acceptable", "415 Unsupported Media Type, with an `accept-patch` header"],
            answer: 3, explain: "The media type says how to interpret the body, and this resource doesn't speak that one: 415. Accept-Patch (RFC 5789) names the formats it does accept. 406 is about what the client will accept in the RESPONSE." },
          { q: "Why do APIs such as Twitter's send large ids as strings (`id_str`)?",
            choices: ["JavaScript numbers are exact only up to 2^53, so a larger numeric id is silently rounded", "JSON only allows numbers up to 2^31, so anything larger must be quoted to be valid JSON at all", "Strings compress better than numbers", "Strings sort faster than numbers"],
            answer: 0, explain: "JSON itself has no limit, but JavaScript parses numbers into doubles, which hold integers exactly only to 2^53. A 64-bit id past that rounds to a different id. As a string it survives every parser." }
        ]
      }
    ]
  });
})();
