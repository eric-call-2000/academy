/* The contract for apisim.js: the GraphQL executor and the schema checker the
   Advanced API Design course grades against. Runs in ~1s as validate.js phase 0l.

   GraphQL behaviour follows the GraphQL specification (October 2021) and the
   messages graphql-js 16 prints; schema checks follow JSON Schema 2020-12 and
   OpenAPI 3.1 path templating. Written before the engine. A change to
   apisim.js that breaks one of these changes what the course teaches — fix
   the engine, not the test. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SRC = fs.readFileSync(path.join(__dirname, "..", "apisim.js"), "utf8");

/* The engine is copied into the lesson Worker as source text, so it must be
   self-contained: load it into a bare context and install it on a plain
   object, the way runner.js does. */
function engine() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(SRC, ctx);
  const g = {};
  vm.runInContext("(" + ctx.window.CODELAB_APISIM.toString() + ")", vm.createContext({}))(g);
  return g;
}

let passed = 0, failed = 0;
const queue = [];
function test(name, fn) { queue.push([name, fn]); }
function eq(got, want, msg) {
  const a = JSON.stringify(got), b = JSON.stringify(want);
  if (a !== b) throw new Error((msg ? msg + ": " : "") + "expected " + b + " but got " + a);
}
function ok(cond, msg) { if (!cond) throw new Error(msg || "expected truthy"); }
function throwsLike(fn, re) {
  try { fn(); } catch (e) { if (!re.test(e.message)) throw new Error("threw " + JSON.stringify(e.message) + ", expected " + re); return; }
  throw new Error("expected a throw matching " + re);
}

const SDL = `
"""The library."""
type Query {
  book(id: ID!): Book
  books(limit: Int = 10): [Book!]!
  hello(name: String = "world"): String!
  echo(n: Int, f: Float, b: Boolean, s: String, list: [Int!], genre: Genre, input: ReviewInput): String
  fail: String
  failNonNull: String!
  authorOfBook(id: ID!): Author
  numbers: [Int]
}
type Mutation {
  addReview(bookId: ID!, input: ReviewInput!): Review
  bump: Int!
}
type Book {
  id: ID!
  "Display title"
  title: String!
  year: Int
  genre: Genre
  author: Author!
  reviews: [Review!]!
}
type Author { id: ID!, name: String!, books: [Book!]! }
type Review { id: ID! stars: Int! text: String }
input ReviewInput { stars: Int!  text: String = "" }
enum Genre { SCIFI FANTASY HISTORY }
`;
const BOOKS = [
  { id: "b1", title: "Dune", year: 1965, genre: "SCIFI", authorId: "a1" },
  { id: "b2", title: "The Hobbit", year: 1937, genre: "FANTASY", authorId: "a2" },
  { id: "b3", title: "Children of Dune", year: 1976, genre: "SCIFI", authorId: "a1" }
];
const AUTHORS = { a1: { id: "a1", name: "Frank Herbert" }, a2: { id: "a2", name: "J. R. R. Tolkien" } };
function baseResolvers() {
  return {
    Query: {
      book: (_, args) => BOOKS.find(b => b.id === args.id) || null,
      books: (_, args) => BOOKS.slice(0, args.limit),
      hello: (_, args) => "hello " + args.name,
      echo: (_, args) => JSON.stringify(args),
      fail: () => { throw new Error("boom"); },
      failNonNull: () => null,
      authorOfBook: (_, args) => AUTHORS[(BOOKS.find(b => b.id === args.id) || {}).authorId] || null
    },
    Book: { author: b => AUTHORS[b.authorId] },
    Author: { books: a => BOOKS.filter(b => b.authorId === a.id) }
  };
}
const run = (g, query, extra) => g.graphql(Object.assign({ typeDefs: SDL, resolvers: baseResolvers(), query: query }, extra || {}));

/* ---------------- parsing ---------------- */

test("parse: a named query with variables, aliases, arguments and a nested selection", () => {
  const g = engine();
  const doc = g.gqlParse('query Shelf($id: ID!, $n: Int = 2) { first: book(id: $id) { title author { name } } books(limit: $n) { id } }');
  eq(doc.kind, "Document");
  const op = doc.definitions[0];
  eq([op.kind, op.operation, op.name], ["OperationDefinition", "query", "Shelf"]);
  eq(op.variableDefinitions.map(v => [v.name, v.type, v.defaultValue]), [
    ["id", { kind: "NonNullType", type: { kind: "NamedType", name: "ID" } }, null],
    ["n", { kind: "NamedType", name: "Int" }, { kind: "Int", value: 2 }]]);
  const f = op.selectionSet.selections[0];
  eq([f.kind, f.alias, f.name, f.arguments], ["Field", "first", "book", [{ name: "id", value: { kind: "Variable", name: "id" } }]]);
  eq(f.selectionSet.selections.map(s => s.name), ["title", "author"]);
  eq(f.selectionSet.selections[1].selectionSet.selections[0].name, "name");
  eq(f.selectionSet.selections[0].selectionSet, null, "a leaf field has selectionSet null");
});

test("parse: the query shorthand, comments, commas and every literal kind", () => {
  const g = engine();
  const doc = g.gqlParse('# a comment\n{ echo(n: -3, f: 1.5e2, b: true, s: "a\\"b\\u0041", list: [1, 2,3], genre: SCIFI, input: { stars: 5 }, x: null) }');
  const op = doc.definitions[0];
  eq([op.operation, op.name], ["query", null], "shorthand is an anonymous query");
  eq(op.selectionSet.selections[0].arguments.map(a => a.value), [
    { kind: "Int", value: -3 }, { kind: "Float", value: 150 }, { kind: "Boolean", value: true },
    { kind: "String", value: 'a"bA' },
    { kind: "List", values: [{ kind: "Int", value: 1 }, { kind: "Int", value: 2 }, { kind: "Int", value: 3 }] },
    { kind: "Enum", value: "SCIFI" },
    { kind: "Object", fields: [{ name: "stars", value: { kind: "Int", value: 5 } }] },
    { kind: "Null" }]);
});

test("parse: named and inline fragments, and directives", () => {
  const g = engine();
  const doc = g.gqlParse('{ book(id: "b1") { ...Bits ... on Book { year } ... @include(if: true) { id } } } fragment Bits on Book { title @skip(if: false) }');
  const sel = doc.definitions[0].selectionSet.selections[0].selectionSet.selections;
  eq(sel.map(s => s.kind), ["FragmentSpread", "InlineFragment", "InlineFragment"]);
  eq([sel[0].name, sel[1].typeCondition, sel[2].typeCondition], ["Bits", "Book", null]);
  eq(sel[2].directives, [{ name: "include", arguments: [{ name: "if", value: { kind: "Boolean", value: true } }] }]);
  const frag = doc.definitions[1];
  eq([frag.kind, frag.name, frag.typeCondition], ["FragmentDefinition", "Bits", "Book"]);
  eq(frag.selectionSet.selections[0].directives[0].name, "skip");
});

test("parse: a syntax error throws, and graphql() reports it with no data", async () => {
  const g = engine();
  throwsLike(() => g.gqlParse("{ book(id: ) { title } }"), /^Syntax Error: /);
  throwsLike(() => g.gqlParse("{ book { title }"), /^Syntax Error: /);
  const res = await run(g, "{ hello");
  ok(/^Syntax Error: /.test(res.errors[0].message), res.errors[0].message);
  eq("data" in res, false, "a request that does not parse has no data key");
});

/* ---------------- schema ---------------- */

test("schema: descriptions are allowed and an unknown type is refused", async () => {
  const g = engine();
  const s = g.gqlSchema(SDL);
  eq([s.queryType, s.mutationType], ["Query", "Mutation"]);
  eq(Object.keys(s.types.Book.fields), ["id", "title", "year", "genre", "author", "reviews"]);
  throwsLike(() => g.gqlSchema("type Query { a: Nope }"), /^Unknown type "Nope"\.$/);
  throwsLike(() => g.gqlSchema("type Thing { a: Int }"), /Query/);
  throwsLike(() => g.gqlSchema("type Query { a(x: Book): Int } type Book { id: ID }"), /input type/);
});

/* ---------------- execution ---------------- */

test("execute: resolvers, the default resolver, arguments and argument defaults", async () => {
  const g = engine();
  const res = await run(g, '{ book(id: "b2") { id title year } hello greeting: hello(name: "Ada") }');
  eq(res, { data: { book: { id: "b2", title: "The Hobbit", year: 1937 }, hello: "hello world", greeting: "hello Ada" } });
  eq((await run(g, '{ book(id: "zz") { title } }')).data, { book: null }, "a nullable field can resolve to null");
});

test("execute: nested resolvers get their parent, and __typename names the type", async () => {
  const g = engine();
  const res = await run(g, '{ book(id: "b1") { __typename title author { __typename name books { title } } } }');
  eq(res.data, { book: { __typename: "Book", title: "Dune", author: { __typename: "Author", name: "Frank Herbert", books: [{ title: "Dune" }, { title: "Children of Dune" }] } } });
});

test("execute: variables, their defaults, and fragments", async () => {
  const g = engine();
  const q = 'query Q($id: ID!, $n: Int = 2) { book(id: $id) { ...F } books(limit: $n) { id } } fragment F on Book { title ... on Book { year } }';
  eq((await run(g, q, { variables: { id: "b3" } })).data, { book: { title: "Children of Dune", year: 1976 }, books: [{ id: "b1" }, { id: "b2" }] });
  eq((await run(g, q, { variables: { id: "b3", n: 1 } })).data.books, [{ id: "b1" }]);
  const missing = await run(g, q, { variables: {} });
  eq(missing.errors.map(e => e.message), ['Variable "$id" of required type "ID!" was not provided.']);
  eq("data" in missing, false, "variable errors stop execution");
  const bad = await run(g, 'query ($n: Int) { books(limit: $n) { id } }', { variables: { n: "two" } });
  eq(bad.errors[0].message, 'Variable "$n" got invalid value "two"; Int cannot represent non-integer value: "two"');
});

test("execute: @skip and @include", async () => {
  const g = engine();
  const res = await run(g, 'query ($s: Boolean!) { book(id: "b1") { title @skip(if: $s) year @include(if: $s) id @include(if: false) } }', { variables: { s: true } });
  eq(res.data, { book: { year: 1965 } });
});

test("execute: choosing among several operations", async () => {
  const g = engine();
  const q = "query A { hello } query B { greeting: hello(name: \"B\") }";
  eq((await run(g, q, { operationName: "B" })).data, { greeting: "hello B" });
  eq((await run(g, q)).errors[0].message, "Must provide operation name if query contains multiple operations.");
  eq((await run(g, q, { operationName: "C" })).errors[0].message, 'Unknown operation named "C".');
});

/* ---------------- validation ---------------- */

test("validation: unknown fields, leaf and non-leaf selections", async () => {
  const g = engine();
  const r1 = await run(g, '{ book(id: "b1") { title isbn } }');
  eq(r1, { errors: [{ message: 'Cannot query field "isbn" on type "Book".' }] }, "an unknown field fails the whole request, with no data");
  eq((await run(g, '{ book(id: "b1") { title { length } } }')).errors[0].message, 'Field "title" must not have a selection since type "String!" has no subfields.');
  eq((await run(g, '{ book(id: "b1") { author } }')).errors[0].message, 'Field "author" of type "Author!" must have a selection of subfields. Did you mean "author { ... }"?');
  eq((await run(g, '{ book(id: "b1") }')).errors[0].message, 'Field "book" of type "Book" must have a selection of subfields. Did you mean "book { ... }"?');
});

test("validation: arguments — unknown, missing required, and literal types", async () => {
  const g = engine();
  eq((await run(g, '{ book(id: "b1", isbn: "x") { id } }')).errors[0].message, 'Unknown argument "isbn" on field "Query.book".');
  eq((await run(g, "{ book { id } }")).errors[0].message, 'Field "book" argument "id" of type "ID!" is required, but it was not provided.');
  eq((await run(g, '{ books(limit: "two") { id } }')).errors[0].message, 'Int cannot represent non-integer value: "two"');
  eq((await run(g, "{ echo(genre: ROMANCE) }")).errors[0].message, 'Value "ROMANCE" does not exist in "Genre" enum.');
  eq((await run(g, "{ echo(input: { text: \"x\" }) }")).errors[0].message, 'Field "ReviewInput.stars" of required type "Int!" was not provided.');
  eq((await run(g, "{ echo(input: { stars: 1, mood: \"x\" }) }")).errors[0].message, 'Field "mood" is not defined by type "ReviewInput".');
});

test("validation: variables, fragments and directives must be defined", async () => {
  const g = engine();
  eq((await run(g, "{ book(id: $id) { id } }")).errors[0].message, 'Variable "$id" is not defined.');
  eq((await run(g, "query Q { book(id: $id) { id } }")).errors[0].message, 'Variable "$id" is not defined by operation "Q".');
  eq((await run(g, '{ book(id: "b1") { ...Nope } }')).errors[0].message, 'Unknown fragment "Nope".');
  eq((await run(g, '{ book(id: "b1") { ...A } } fragment A on Book { ...A }')).errors[0].message, 'Cannot spread fragment "A" within itself.');
  eq((await run(g, '{ book(id: "b1") { ...A } } fragment A on Book { ...B } fragment B on Book { ...A }')).errors[0].message, 'Cannot spread fragment "A" within itself via "B".');
  eq((await run(g, '{ book(id: "b1") { id @cache } }')).errors[0].message, 'Unknown directive "@cache".');
  eq((await run(g, '{ book(id: "b1") { ... on Nope { id } } }')).errors[0].message, 'Unknown type "Nope".');
});

/* ---------------- errors and null propagation ---------------- */

test("errors: a resolver that throws makes its nullable field null, with the error and its path", async () => {
  const g = engine();
  const res = await run(g, "{ fail hello }");
  eq(res, { errors: [{ message: "boom", path: ["fail"] }], data: { fail: null, hello: "hello world" } });
});

test("errors: GraphQLError carries extensions", async () => {
  const g = engine();
  const res = await g.graphql({ typeDefs: "type Query { a: Int }", resolvers: { Query: { a: () => { throw new g.GraphQLError("Bad input", { extensions: { code: "BAD_USER_INPUT" } }); } } }, query: "{ a }" });
  eq(res.errors, [{ message: "Bad input", path: ["a"], extensions: { code: "BAD_USER_INPUT" } }]);
  const e = new g.GraphQLError("x");
  eq([e.name, e.message, typeof e.stack], ["GraphQLError", "x", "string"], "GraphQLError is an Error subclass");
});

test("null propagation: a non-null field that fails nulls its nearest nullable parent", async () => {
  const g = engine();
  const r = { Query: { book: () => ({ id: "b9", title: null, year: 2000 }) } };
  const res = await g.graphql({ typeDefs: SDL, resolvers: r, query: "{ book(id: \"b9\") { id title } }" });
  eq(res.errors, [{ message: "Cannot return null for non-nullable field Book.title.", path: ["book", "title"] }]);
  eq(res.data, { book: null }, "book is nullable, so it becomes null instead of the whole response");
  const root = await run(g, "{ failNonNull hello }");
  eq(root, { errors: [{ message: "Cannot return null for non-nullable field Query.failNonNull.", path: ["failNonNull"] }], data: null }, "with no nullable ancestor, data itself is null");
});

test("null propagation: one bad item in [Book!]! nulls the list up to the nullable author", async () => {
  const g = engine();
  const r = baseResolvers();
  r.Author.books = () => [BOOKS[0], null];
  const res = await g.graphql({ typeDefs: SDL, resolvers: r, query: '{ authorOfBook(id: "b1") { name books { title } } }' });
  eq(res.errors[0], { message: "Cannot return null for non-nullable field Author.books.", path: ["authorOfBook", "books", 1] });
  eq(res.data, { authorOfBook: null });
  const nums = await g.graphql({ typeDefs: SDL, resolvers: { Query: { numbers: () => [1, null, 3] } }, query: "{ numbers }" });
  eq(nums, { data: { numbers: [1, null, 3] } }, "[Int] allows null items");
});

test("result coercion: scalars and enums", async () => {
  const g = engine();
  const sdl = "type Query { i: Int f: Float s: String b: Boolean id: ID e: E big: Int } enum E { A B }";
  const res = await g.graphql({ typeDefs: sdl, resolvers: { Query: { i: () => 1.5, f: () => "x", s: () => 5, b: () => "yes", id: () => 7, e: () => "C", big: () => 3000000000 } }, query: "{ i f s b id e big }" });
  eq(res.data, { i: null, f: null, s: "5", b: null, id: "7", e: null, big: null });
  eq(res.errors.map(e => e.message), [
    "Int cannot represent non-integer value: 1.5",
    'Float cannot represent non numeric value: "x"',
    'Boolean cannot represent a non boolean value: "yes"',
    'Enum "E" cannot represent value: "C"',
    "Int cannot represent non 32-bit signed integer value: 3000000000"]);
  const list = await g.graphql({ typeDefs: "type Query { l: [Int] }", resolvers: { Query: { l: () => 5 } }, query: "{ l }" });
  eq(list.errors[0].message, 'Expected Iterable, but did not find one for field "Query.l".');
});

test("input coercion: defaults, enums, input objects and single values as lists", async () => {
  const g = engine();
  const res = await run(g, 'query ($in: ReviewInput, $l: [Int!]) { a: echo(input: { stars: 4 }) b: echo(genre: FANTASY, list: 7) c: echo(input: $in, list: $l) }', { variables: { in: { stars: 2 }, l: 3 } });
  eq(JSON.parse(res.data.a), { input: { stars: 4, text: "" } }, "an input field default is applied");
  eq(JSON.parse(res.data.b), { list: [7], genre: "FANTASY" }, "a single value is coerced to a one-item list; args come in the order the schema defines them");
  eq(JSON.parse(res.data.c), { list: [3], input: { stars: 2, text: "" } }, "variables are coerced the same way");
  const bad = await run(g, "query ($in: ReviewInput) { echo(input: $in) }", { variables: { in: { stars: 2, mood: 1 } } });
  eq(bad.errors[0].message, 'Variable "$in" got invalid value {"stars":2,"mood":1}; Field "mood" is not defined by type "ReviewInput".');
});

test("mutations run their top-level fields one after another", async () => {
  const g = engine();
  let n = 0;
  const order = [];
  const r = { Mutation: { bump: () => new Promise(res => { const mine = ++n; setTimeout(() => { order.push(mine); res(mine); }, mine === 1 ? 30 : 1); }) } };
  const res = await g.graphql({ typeDefs: SDL, resolvers: r, query: "mutation { a: bump b: bump }" });
  eq(res.data, { a: 1, b: 2 });
  eq(order, [1, 2], "the second bump only starts after the first finished, although the first is slower");
  const none = await g.graphql({ typeDefs: "type Query { a: Int }", resolvers: {}, query: "mutation { a }" });
  eq(none.errors[0].message, "Schema is not configured to execute mutation operation.");
});

test("query fields and list items all start before any is awaited (DataLoader batches)", async () => {
  const g = engine();
  const batches = [];
  function loader(fn) {
    let queue = null;
    return function load(key) {
      if (!queue) {
        queue = [];
        const q = queue;
        Promise.resolve().then(() => { queue = null; batches.push(q.map(x => x.key)); const out = fn(q.map(x => x.key)); q.forEach((x, i) => x.resolve(out[i])); });
      }
      return new Promise(resolve => queue.push({ key: key, resolve: resolve }));
    };
  }
  const authors = loader(ids => ids.map(id => AUTHORS[id]));
  const booksOf = loader(ids => ids.map(id => BOOKS.filter(b => b.authorId === id)));
  const r = {
    Query: { books: async () => BOOKS },
    Book: { author: b => authors(b.authorId) },
    Author: { books: a => booksOf(a.id) }
  };
  const res = await g.graphql({ typeDefs: SDL, resolvers: r, query: "{ books { title author { name books { title } } } }" });
  eq(res.data.books.map(b => b.author.name), ["Frank Herbert", "J. R. R. Tolkien", "Frank Herbert"]);
  eq(batches, [["a1", "a2", "a1"], ["a1", "a2", "a1"]], "one batch per level: every author load in one tick, every books load in the next");
});

test("resolvers receive (parent, args, context, info)", async () => {
  const g = engine();
  let seen = null;
  const r = { Query: { book: (parent, args, ctx, info) => { seen = [parent, args, ctx, info.fieldName, info.parentType, info.returnType, info.path]; return BOOKS[0]; } } };
  await g.graphql({ typeDefs: SDL, resolvers: r, query: '{ x: book(id: "b1") { id } }', context: { user: "u1" }, rootValue: { root: true } });
  eq(seen, [{ root: true }, { id: "b1" }, { user: "u1" }, "book", "Query", "Book", ["x"]]);
});

/* ---------------- JSON Schema ---------------- */

const BOOK_SCHEMA = {
  type: "object",
  required: ["id", "title"],
  additionalProperties: false,
  properties: {
    id: { type: "string", pattern: "^b[0-9]+$" },
    title: { type: "string", minLength: 1, maxLength: 80 },
    year: { type: ["integer", "null"], minimum: 1450, maximum: 2100 },
    genre: { enum: ["SCIFI", "FANTASY"] },
    tags: { type: "array", items: { type: "string" }, maxItems: 3 },
    format: { const: "hardcover" }
  }
};

test("checkSchema: a valid value has no errors", () => {
  const g = engine();
  eq(g.checkSchema(BOOK_SCHEMA, { id: "b1", title: "Dune", year: 1965, genre: "SCIFI", tags: ["classic"], format: "hardcover" }), []);
  eq(g.checkSchema(BOOK_SCHEMA, { id: "b1", title: "Dune", year: null }), [], "a type list allows null");
});

test("checkSchema: each keyword reports a JSON pointer and a message", () => {
  const g = engine();
  eq(g.checkSchema(BOOK_SCHEMA, { title: "" }), [
    { pointer: "/id", message: "is required" },
    { pointer: "/title", message: "must be at least 1 characters" }]);
  eq(g.checkSchema(BOOK_SCHEMA, { id: "x1", title: "Dune", isbn: "1" }), [
    { pointer: "/id", message: "must match pattern ^b[0-9]+$" },
    { pointer: "/isbn", message: "is not allowed" }]);
  eq(g.checkSchema(BOOK_SCHEMA, { id: "b1", title: "Dune", year: 1965.5, genre: "HISTORY", tags: ["a", 2, "c", "d"], format: "paperback" }), [
    { pointer: "/year", message: "must be integer or null" },
    { pointer: "/genre", message: "must be one of: SCIFI, FANTASY" },
    { pointer: "/tags", message: "must have at most 3 items" },
    { pointer: "/tags/1", message: "must be string" },
    { pointer: "/format", message: "must be hardcover" }]);
  eq(g.checkSchema(BOOK_SCHEMA, { id: "b1", title: "Dune", year: 1200 }), [{ pointer: "/year", message: "must be >= 1450" }]);
  eq(g.checkSchema(BOOK_SCHEMA, "Dune"), [{ pointer: "", message: "must be object" }], "the root pointer is the empty string");
  eq(g.checkSchema({ type: "number" }, 3), [], "an integer is a number");
  eq(g.checkSchema({ type: "integer" }, 3.5), [{ pointer: "", message: "must be integer" }]);
  eq(g.checkSchema({ type: "array", minItems: 1 }, []), [{ pointer: "", message: "must have at least 1 items" }]);
  eq(g.checkSchema({ type: "object" }, []), [{ pointer: "", message: "must be object" }], "an array is not an object");
  eq(g.checkSchema({ type: "object", properties: { "a/b": { type: "string" } } }, { "a/b": 1 }), [{ pointer: "/a~1b", message: "must be string" }], "RFC 6901 escaping");
});

test("checkSchema: $ref resolves against the root document", () => {
  const g = engine();
  const spec = { components: { schemas: { Book: BOOK_SCHEMA, Shelf: { type: "object", properties: { books: { type: "array", items: { $ref: "#/components/schemas/Book" } } } } } } };
  eq(g.checkSchema({ $ref: "#/components/schemas/Shelf" }, { books: [{ id: "b1", title: "Dune" }, { id: "b2" }] }, spec), [{ pointer: "/books/1/title", message: "is required" }]);
  throwsLike(() => g.checkSchema({ $ref: "#/components/schemas/Nope" }, {}, spec), /Cannot resolve \$ref #\/components\/schemas\/Nope/);
});

/* ---------------- OpenAPI paths ---------------- */

const SPEC = {
  openapi: "3.1.0",
  info: { title: "Books", version: "1.0.0" },
  paths: {
    "/books": { get: { operationId: "listBooks", responses: {} }, post: { operationId: "createBook", responses: {} } },
    "/books/{id}": { get: { operationId: "getBook", responses: {} }, delete: { operationId: "deleteBook", responses: {} } },
    "/books/search": { get: { operationId: "searchBooks", responses: {} } },
    "/authors/{authorId}/books/{bookId}": { get: { operationId: "authorBook", responses: {} } }
  }
};

test("oasFind: templated paths, parameters and the preferred concrete path", () => {
  const g = engine();
  const m = g.oasFind(SPEC, "GET", "/books/b%207");
  eq([m.template, m.operation.operationId, m.params], ["/books/{id}", "getBook", { id: "b 7" }]);
  eq(g.oasFind(SPEC, "get", "/books/search").operation.operationId, "searchBooks", "a concrete path wins over a template");
  eq(g.oasFind(SPEC, "GET", "/authors/a1/books/b2").params, { authorId: "a1", bookId: "b2" });
  eq(g.oasFind(SPEC, "POST", "/books").operation.operationId, "createBook");
});

test("oasFind: a known path with an undocumented method, and an unknown path", () => {
  const g = engine();
  const m = g.oasFind(SPEC, "PATCH", "/books/b1");
  eq([m.template, m.operation, m.allowed], ["/books/{id}", null, ["GET", "DELETE"]]);
  eq(g.oasFind(SPEC, "GET", "/shelves"), null);
  eq(g.oasFind(SPEC, "GET", "/books/"), null, "an empty segment matches no parameter");
  eq(g.oasFind(SPEC, "GET", "/books/b1/extra"), null);
});

(async () => {
  for (const [name, fn] of queue) {
    try { await fn(); passed++; }
    catch (e) { failed++; console.log("✗ " + name + "\n    " + e.message); }
  }
  console.log(`apisim: ${passed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0);
})();
