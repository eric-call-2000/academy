/* Changing Live Systems — Unit 4: APIs old clients still call */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* ---- 4-2: a tolerant reader ---- */
  var STRICT = L(
    "const LABELS = { pending: \"Order received\", shipped: \"On its way\", delivered: \"Delivered\" };",
    "",
    "function parseOrder(json) {",
    "  const data = JSON.parse(json);",
    "  const known = [\"id\", \"status\", \"total\", \"items\", \"note\"];",
    "  for (const k of Object.keys(data)) {",
    "    if (!known.includes(k)) throw new Error(\"Unexpected field: \" + k);",
    "  }",
    "  if (typeof data.note !== \"string\") throw new Error(\"note is missing\");",
    "  if (!(data.status in LABELS)) throw new Error(\"Unknown status: \" + data.status);",
    "  return {",
    "    id: data.id,",
    "    total: data.total,",
    "    itemCount: data.items.length,",
    "    note: data.note,",
    "    label: LABELS[data.status]",
    "  };",
    "}");
  var TOLERANT = L(
    "const LABELS = { pending: \"Order received\", shipped: \"On its way\", delivered: \"Delivered\" };",
    "",
    "// Read what this screen needs and ignore the rest. Fail only on what",
    "// it can't do without.",
    "function parseOrder(json) {",
    "  const data = JSON.parse(json);",
    "  if (typeof data.id !== \"string\") throw new Error(\"order has no id\");",
    "  if (typeof data.total !== \"number\") throw new Error(\"order has no total\");",
    "  return {",
    "    id: data.id,",
    "    total: data.total,",
    "    itemCount: Array.isArray(data.items) ? data.items.length : 0,",
    "    note: typeof data.note === \"string\" ? data.note : \"\",",
    "    label: LABELS[data.status] || \"Status unavailable\"",
    "  };",
    "}");
  var TODAY = "JSON.stringify({ id: 'o_1', status: 'shipped', total: 42.5, items: [{ sku: 'a' }, { sku: 'b' }], note: 'Leave at the door' })";

  /* ---- 4-3: version changes ---- */
  var LATEST = L(
    "// The current shape (2026-09-01). Built fresh on every call.",
    "function latest(order) {",
    "  return {",
    "    id: order.id,",
    "    amount: order.amountCents,",
    "    currency: order.currency,",
    "    customer: { name: order.customer.name, email: order.customer.email }",
    "  };",
    "}");
  var ORDER = "{ id: 'o_9', amountCents: 1999, currency: 'usd', customer: { name: 'Ada Lovelace', email: 'ada@example.com' } }";
  var SHAPES = {
    "2026-09-01": "{ id: 'o_9', amount: 1999, currency: 'usd', customer: { name: 'Ada Lovelace', email: 'ada@example.com' } }",
    "2026-03-01": "{ id: 'o_9', price: 19.99, customer: { name: 'Ada Lovelace', email: 'ada@example.com' } }",
    "2025-06-01": "{ id: 'o_9', cost: 19.99, customer: { name: 'Ada Lovelace', email: 'ada@example.com' } }",
    "2025-01-01": "{ id: 'o_9', cost: 19.99, customer: 'Ada Lovelace' }"
  };
  function shapeCheck(versions) {
    return versions.map(function (v) {
      return "T.eq(JSON.stringify(sortKeys(render(order(), '" + v[0] + "'))), JSON.stringify(sortKeys(" + SHAPES[v[1]] + ")), 'render(order, \"" + v[0] + "\")');";
    });
  }
  var SORT = "function sortKeys(v) { if (Array.isArray(v)) return v.map(sortKeys); if (v && typeof v === 'object') { var o = {}; Object.keys(v).sort().forEach(function (k) { o[k] = sortKeys(v[k]); }); return o; } return v; }\nfunction order() { return " + ORDER + "; }";

  window.CODELAB.addUnit("change", {
    id: "change-u4",
    title: "APIs old clients still call",
    icon: "📡",
    blurb: "Your API has clients you can't update: phone apps from last year, partners' integrations, scripts somebody wrote once. What you can change without breaking them, how clients should read so they survive your changes, and how Stripe keeps every old version working.",
    cheat: [
      { h: "Safe and breaking API changes", lang: "text", code:
"safe       new endpoint, new optional request field,\n" +
"           new response field\n" +
"breaking   remove or rename a field, change its type or\n" +
"           meaning, require a new request field,\n" +
"           reject what used to be accepted",
        note: "New enum values are in between: safe only for clients that handle values they don't know." },
      { h: "A tolerant reader (Martin Fowler)", lang: "js", code:
"const note = typeof data.note === \"string\" ? data.note : \"\";\n" +
"const label = LABELS[data.status] || \"Status unavailable\";\n" +
"// and never: throw on fields you don't know",
        note: "Take only what you need, default what's optional, ignore the rest. Still fail on what you truly can't work without." },
      { h: "Version changes, newest first (Stripe)", lang: "js", code:
"let res = latest(order);\n" +
"for (const c of CHANGES)          // newest first\n" +
"  if (c.version > asked) res = c.down(res);",
        note: "The code only knows the latest shape. Each change knows how to undo itself, so old versions cost one small function each." }
    ],
    lessons: [

      {
        id: "change-u4-1",
        title: "What old clients see",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "A database has a handful of clients, all yours, and you deploy them. An API's clients belong to other people: an app on a phone that hasn't updated since March, a partner's nightly script, a customer's spreadsheet macro.\n\nYou can't redeploy them, so every API change has to work for **every client ever released**, until you can prove nobody runs it any more.\n\nAdding is safe: a new endpoint, a new optional request field, a new field in a response. Removing, renaming, retyping, or requiring something new breaks somebody.",
            ask: { type: "pick", transfer: true,
              q: "Which change to `POST /orders` is safe for every existing client?",
              choices: [
                "Requiring a new `currency` field in the request",
                "Accepting an optional `currency` field, defaulting to \"usd\"",
                "Rejecting orders over $10,000 that were accepted before",
                "Renaming `total` to `amount` in the response"
              ],
              answer: 1,
              why: [
                "Old clients don't send it, so every one of their orders fails.",
                "Right. Old clients don't send it and get what they always got.",
                "That's a new rule old clients didn't know about. Sometimes necessary, never invisible.",
                "Old clients look for total and find nothing."
              ] } },
          { read: "Half of compatibility is the **reader's** job. Fowler's **tolerant reader**: a client takes only the fields it needs, gives optional ones a default, and ignores everything else.\n\nA client that rejects responses with unknown fields turns every additive change into a breaking one. So does a `switch` over status values that throws on a new one.\n\nTolerant isn't careless: if the field you truly need is missing, fail loudly.",
            ask: { type: "pick", transfer: true,
              q: "The server adds `\"status\": \"returned\"`. Which client survives?",
              choices: [
                "One that throws on statuses it doesn't know",
                "One that validates the response against a schema listing every allowed status",
                "One that shows a generic label for statuses it doesn't know",
                "None of them can: a new status always needs a client release"
              ],
              answer: 2,
              why: [
                "It crashes on every returned order.",
                "A closed schema is the same as throwing, just earlier.",
                "Right. It keeps working, and the next release can add a proper label.",
                "Tolerant clients don't need one to keep working."
              ] } },
          { read: "Sometimes you must break something. Common ways to keep old clients working:\n\n- **A version in the URL**, `/v1/orders` and `/v2/orders`: simple, but each version tends to become a separate codebase.\n- **Stripe's dated versions.** Each account is pinned to the version it first used. The code builds only the **latest** response, then runs a list of small **version changes** backwards, newest first, each undoing one change, until the response looks like the version the client asked for.\n\nOld versions cost one small function each, not a fork.",
            ask: { type: "pick",
              q: "A client is pinned to 2025-01-01. Changes shipped on 2025-06-01, 2026-03-01 and 2026-09-01. Which ones are undone for this client?",
              choices: [
                "Only the 2025-06-01 change",
                "All three, newest first",
                "All three, oldest first",
                "None: the client asked for an old version, so it gets the latest"
              ],
              answer: 1,
              why: [
                "Every change after the pinned date has to be undone.",
                "Right. Each later change is undone, starting from the latest shape and walking back.",
                "Each undo expects the shape the next newer one left, so it has to start at the newest.",
                "Then the pin would mean nothing."
              ] } }
        ]
      },

      {
        id: "change-u4-2",
        title: "Be a tolerant reader",
        kind: "js", chip: "CLIENT", xp: 20, mins: 15,
        brief: "This is the order screen in your mobile app. The server team is about to ship additive changes: a few new fields, `note` becoming optional, and a new status, `\"returned\"`. Every one of them crashes `parseOrder()` today, and users don't update their app for months.\n\nMake it a tolerant reader:\n\n- ignore fields it doesn't use\n- missing `note` → `\"\"`; missing `items` → `itemCount` 0\n- a status it doesn't know → label `\"Status unavailable\"`\n\nIt should still throw when `id` (a string) or `total` (a number) is missing. The screen can't work without those.",
        steps: [
          { text: "Today's response reads exactly as before.",
            test: L(
              "T.eq(JSON.stringify(parseOrder(" + TODAY + ")), JSON.stringify({ id: 'o_1', total: 42.5, itemCount: 2, note: 'Leave at the door', label: 'On its way' }));") },
          { text: "New fields the screen doesn't use are ignored.",
            test: L(
              "var r = parseOrder(JSON.stringify({ id: 'o_2', status: 'pending', total: 10, items: [], note: '', gift: true, carrier: { name: 'UPS' } }));",
              "T.eq(r.label, 'Order received');",
              "T.eq(Object.keys(r).sort().join(','), 'id,itemCount,label,note,total', 'Return only the fields the screen uses.');") },
          { text: "A missing `note` or `items`, and an unknown status, all still work.",
            test: L(
              "var r = parseOrder(JSON.stringify({ id: 'o_3', status: 'returned', total: 5 }));",
              "T.eq(r.note, '', 'A missing note should read as \"\".');",
              "T.eq(r.itemCount, 0, 'Missing items should read as 0 items.');",
              "T.eq(r.label, 'Status unavailable', 'An unknown status should get the generic label.');") },
          { text: "Tolerant isn't credulous: no `id` or no `total` still throws.", hidden: true,
            test: L(
              "function throws(o) { try { parseOrder(JSON.stringify(o)); } catch (e) { return true; } return false; }",
              "T.expect(throws({ status: 'shipped', total: 5 }), 'An order with no id should throw. The screen can\\'t show or link an order it can\\'t identify.');",
              "T.expect(throws({ id: 'o_4', status: 'shipped' }), 'An order with no total should throw rather than show $undefined.');",
              "T.expect(throws({ id: 'o_5', status: 'shipped', total: '5' }), 'A total that isn\\'t a number should throw too.');") }
        ],
        files: [{ name: "script.js", content: L(
          STRICT,
          "",
          "console.log(parseOrder(" + JSON.stringify("{\"id\":\"o_1\",\"status\":\"returned\",\"total\":42.5,\"items\":[],\"gift\":true}") + "));",
          "") }],
        hints: [
          "Delete the loop over Object.keys: the fields you don't read can't hurt you. Read each field you need on its own.",
          "note: typeof data.note === \"string\" ? data.note : \"\", and label: LABELS[data.status] || \"Status unavailable\". Keep a check that id is a string and total is a number, and throw if not."
        ],
        solution: { "script.js": L(
          TOLERANT,
          "",
          "console.log(parseOrder(" + JSON.stringify("{\"id\":\"o_1\",\"status\":\"returned\",\"total\":42.5,\"items\":[],\"gift\":true}") + "));",
          "") }
      },

      {
        id: "change-u4-3",
        title: "Version changes, newest first",
        kind: "js", chip: "API", xp: 25, mins: 20,
        brief: "Your API uses dated versions, like Stripe's. `latest(order)` builds the current response (version `2026-09-01`). Three breaking changes shipped over time, and clients pinned to older versions must keep getting the old shapes:\n\n- **2026-09-01**: `price` (dollars) became `amount` (cents) plus `currency`\n- **2026-03-01**: `cost` was renamed `price`\n- **2025-06-01**: `customer` became an object `{ name, email }`; before, it was just the name\n\nFill in `CHANGES` with one `down(res)` per change that turns a response back into the shape from before it, and write `render(order, version)`: build `latest(order)`, then undo every change newer than `version`, newest first.",
        steps: [
          { text: "The current version gets the latest shape.",
            test: L(SORT, shapeCheck([["2026-09-01", "2026-09-01"]]).join("\n")) },
          { text: "Clients on 2026-03-01 get `price` in dollars.",
            test: L(SORT, shapeCheck([["2026-03-01", "2026-03-01"]]).join("\n")) },
          { text: "Clients on 2025-06-01 get `cost`, and on 2025-01-01 also a plain `customer` name.",
            test: L(SORT, shapeCheck([["2025-06-01", "2025-06-01"], ["2025-01-01", "2025-01-01"]]).join("\n")) },
          { text: "Accounts pinned to a date between releases get the right shape too.", hidden: true,
            test: L(SORT,
              "/* Accounts pin to the day they signed up, not to a release date. */",
              shapeCheck([["2026-05-20", "2026-03-01"], ["2025-12-15", "2025-06-01"], ["2024-11-30", "2025-01-01"], ["2026-10-01", "2026-09-01"]]).join("\n")) }
        ],
        files: [{ name: "script.js", content: L(
          LATEST,
          "",
          "// One entry per breaking change: { version, down(res) }.",
          "const CHANGES = [",
          "];",
          "",
          "function render(order, version) {",
          "  return latest(order);",
          "}",
          "",
          "const order = " + ORDER.replace(/'/g, "\"") + ";",
          "console.log(render(order, \"2025-01-01\"));",
          "") }],
        hints: [
          "Each down() undoes one change. For 2026-09-01: res.price = res.amount / 100; delete res.amount; delete res.currency; return res.",
          "In render, loop over CHANGES sorted newest first (\"2026-09-01\" > \"2026-03-01\" works on these strings) and apply down() when change.version > version. Then 2026-03-01's down finds the price that 2026-09-01's left."
        ],
        solution: { "script.js": L(
          LATEST,
          "",
          "// One entry per breaking change, newest first. Each undoes only its own change.",
          "const CHANGES = [",
          "  { version: \"2026-09-01\", down(res) {",
          "      res.price = res.amount / 100;",
          "      delete res.amount;",
          "      delete res.currency;",
          "      return res;",
          "  } },",
          "  { version: \"2026-03-01\", down(res) {",
          "      res.cost = res.price;",
          "      delete res.price;",
          "      return res;",
          "  } },",
          "  { version: \"2025-06-01\", down(res) {",
          "      res.customer = res.customer.name;",
          "      return res;",
          "  } }",
          "];",
          "",
          "function render(order, version) {",
          "  let res = latest(order);",
          "  for (const change of CHANGES) {",
          "    if (change.version > version) res = change.down(res);",
          "  }",
          "  return res;",
          "}",
          "",
          "const order = " + ORDER.replace(/'/g, "\"") + ";",
          "console.log(render(order, \"2025-01-01\"));",
          "") }
      },

      {
        id: "change-u4-quiz",
        title: "Unit 4 quiz: APIs old clients still call",
        kind: "quiz", xp: 10,
        brief: "Safe API changes, tolerant readers and version changes. 80% to pass.",
        questions: [
          { q: "Which API change is safe for every existing client?",
            choices: ["Adding a field to a response", "Renaming a response field", "Requiring a new request field", "Changing a field from dollars to cents"],
            answer: 0, explain: "Old clients don't read the new field. The others all break someone." },
          { q: "What does a tolerant reader do with a field it doesn't know?",
            choices: ["Throws, to be safe", "Logs an error and retries", "Ignores it", "Shows it to the user"],
            answer: 2, explain: "Fields it doesn't use can't hurt it, and ignoring them keeps additive changes additive." },
          { q: "Why should a tolerant reader still throw when the order id is missing?",
            choices: ["A tolerant reader has to validate every field in exactly the same strict way", "The screen can't work without it, so failing loudly beats showing nonsense", "JSON requires ids", "It shouldn't"],
            answer: 1, explain: "Tolerance is for what you can do without, not for what you need." },
          { q: "In Stripe-style versioning, what does the main code build?",
            choices: ["Every version's response in full", "The oldest response, upgraded forward", "A diff between versions", "Only the latest response"],
            answer: 3, explain: "Version changes then walk it back to the client's version." },
          { q: "Why are version changes undone newest first?",
            choices: ["It's faster, since the newest changes are usually the smallest ones", "Each undo expects the shape the next newer undo left behind", "Dates sort that way", "It doesn't matter"],
            answer: 1, explain: "Undoing the cost→price rename only works once the price field has been put back." }
        ]
      }
    ]
  });
})();
