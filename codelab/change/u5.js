/* Changing Live Systems — Unit 5: Deprecating without surprises */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* ---- 5-2: request logs for GET /v1/orders/:id ---- */
  var LOGS = L(
    "function day(d) { return new Date(Date.UTC(2026, 8, 1) + d * 86400000).toISOString(); }",
    "function logs() { return [",
    "  { at: day(0), client: 'ios-4.2', method: 'GET', path: '/v1/orders/17' },",
    "  { at: day(1), client: 'acme-sync', method: 'GET', path: '/v1/orders/9' },",
    "  { at: day(2), client: 'ios-4.2', method: 'GET', path: '/v1/orders/4' },",
    "  { at: day(3), client: 'android-7.0', method: 'GET', path: '/v1/orders/4' },",
    "  { at: day(4), client: 'acme-sync', method: 'GET', path: '/v1/orders/12' },",
    "  { at: day(5), client: 'ios-4.2', method: 'GET', path: '/v1/orders/2' },",
    "  { at: day(6), client: 'web', method: 'GET', path: '/v2/orders/2' },",
    "  { at: day(7), client: 'web', method: 'POST', path: '/v1/orders/2' },",
    "  { at: day(8), client: 'partner-x', method: 'GET', path: '/v1/orders/2/items' },",
    "  { at: day(9), client: 'partner-x', method: 'GET', path: '/v1/orders' },",
    "  { at: day(10), client: 'old-cli', method: 'GET', path: '/v1/orders/77' }",
    "]; }");

  window.CODELAB.addUnit("change", {
    id: "change-u5",
    title: "Deprecating without surprises",
    icon: "🌅",
    blurb: "Removing something people use is the one change that has to break them, so make it the least surprising break you can: tell clients in every response, in a form their tools can read, then remove it only when the logs show nobody is still calling.",
    cheat: [
      { h: "The headers (RFC 9745 and RFC 8594)", lang: "text", code:
"Deprecation: @1782863999\n" +
"Sunset: Thu, 31 Dec 2026 23:59:59 GMT\n" +
"Link: <https://docs.example.com/v1-orders>; rel=\"deprecation\"; type=\"text/html\"",
        note: "Deprecation is \"@\" and Unix seconds (RFC 9745 does not allow \"true\"). Sunset is an HTTP date, and must not be earlier than the deprecation. Link points people to the notice." },
      { h: "In JavaScript", lang: "js", code:
"\"@\" + Math.floor(date.getTime() / 1000)   // Deprecation\n" +
"date.toUTCString()                         // Sunset: an HTTP date",
        note: "toUTCString() produces exactly the HTTP date format, ending in GMT." },
      { h: "Before you remove it", lang: "text", code:
"1 announce: docs, changelog, the headers\n" +
"2 measure: who still calls it, how often, when last\n" +
"3 reach out to the callers by name\n" +
"4 remove after a quiet period, not on a date alone",
        note: "A sunset date is a promise to clients, not permission to break the biggest customer who missed the email." }
    ],
    lessons: [

      {
        id: "change-u5-1",
        title: "Say it in the headers",
        kind: "js", chip: "API", xp: 20, mins: 15,
        brief: "`GET /v1/orders/:id` is being retired. An email to developers isn't enough: plenty of integrations were written by someone who left. Tell clients in **every response**, in headers their tools can read.\n\nWrite `deprecationHeaders({ deprecatedAt, sunsetAt, docs })`. The dates may be `Date` objects or ISO strings; `sunsetAt` and `docs` are optional. Return an object of headers:\n\n- `Deprecation`: `@` followed by the deprecation time in **Unix seconds** (RFC 9745)\n- `Sunset`: the HTTP date when it stops working, only if `sunsetAt` is given (RFC 8594)\n- `Link`: `<docs>; rel=\"deprecation\"; type=\"text/html\"`, only if `docs` is given\n\nRFC 9745 says the sunset **must not** be earlier than the deprecation: throw a `RangeError` if it is.",
        steps: [
          { text: "`Deprecation` is `@` and Unix seconds.",
            test: L(
              "var h = deprecationHeaders({ deprecatedAt: new Date(Date.UTC(2026, 5, 30, 23, 59, 59)) });",
              "T.eq(h.Deprecation, '@1782863999', 'Deprecation should be \"@\" + the time in seconds since 1970. RFC 9745 replaced the older \"true\".');",
              "T.eq(deprecationHeaders({ deprecatedAt: '2026-01-01T00:00:00Z' }).Deprecation, '@1767225600', 'ISO strings should work too.');") },
          { text: "`Sunset` is an HTTP date, and only there when given.",
            test: L(
              "var h = deprecationHeaders({ deprecatedAt: '2026-06-30T23:59:59Z', sunsetAt: '2026-12-31T23:59:59Z' });",
              "T.eq(h.Sunset, 'Thu, 31 Dec 2026 23:59:59 GMT', 'Sunset should be an HTTP date: Date.prototype.toUTCString() writes one.');",
              "T.expect(!('Sunset' in deprecationHeaders({ deprecatedAt: '2026-06-30T23:59:59Z' })), 'Leave Sunset out when there is no sunsetAt, rather than sending \"Invalid Date\".');") },
          { text: "`Link` points to the notice, and only when there is one.",
            test: L(
              "var h = deprecationHeaders({ deprecatedAt: '2026-06-30T23:59:59Z', docs: 'https://docs.example.com/v1-orders' });",
              "T.eq(h.Link, '<https://docs.example.com/v1-orders>; rel=\"deprecation\"; type=\"text/html\"');",
              "T.expect(!('Link' in deprecationHeaders({ deprecatedAt: '2026-06-30T23:59:59Z' })), 'Leave Link out when there are no docs.');") },
          { text: "A sunset before the deprecation is a `RangeError`.",
            test: L(
              "var err = null;",
              "try { deprecationHeaders({ deprecatedAt: '2026-06-30T00:00:00Z', sunsetAt: '2026-01-01T00:00:00Z' }); } catch (e) { err = e; }",
              "T.expect(err instanceof RangeError, 'Throw a RangeError when sunsetAt is earlier than deprecatedAt.');",
              "T.eq(deprecationHeaders({ deprecatedAt: '2026-06-30T00:00:00Z', sunsetAt: '2026-06-30T00:00:00Z' }).Sunset, 'Tue, 30 Jun 2026 00:00:00 GMT', 'The same moment is allowed: it isn\\'t earlier.');") },
          { text: "Milliseconds are dropped, not rounded.", hidden: true,
            test: L(
              "T.eq(deprecationHeaders({ deprecatedAt: '2026-06-30T23:59:59.900Z' }).Deprecation, '@1782863999', 'A deprecation at 23:59:59.900 is still in second 1782863999. Use Math.floor, not Math.round: rounding moves it into the next second, and sometimes the next day.');") }
        ],
        files: [{ name: "script.js", content: L(
          "function deprecationHeaders({ deprecatedAt, sunsetAt, docs }) {",
          "  return {",
          "    Deprecation: \"true\",",
          "    Sunset: String(sunsetAt)",
          "  };",
          "}",
          "",
          "console.log(deprecationHeaders({",
          "  deprecatedAt: \"2026-06-30T23:59:59Z\",",
          "  sunsetAt: \"2026-12-31T23:59:59Z\",",
          "  docs: \"https://docs.example.com/v1-orders\"",
          "}));",
          "") }],
        hints: [
          "new Date(x) accepts a Date or an ISO string. \"@\" + Math.floor(d.getTime() / 1000) is the Deprecation value, and d.toUTCString() is the Sunset value.",
          "Build the object step by step: start with { Deprecation }, then add Sunset if sunsetAt, and Link if docs. Compare the two getTime() values before adding Sunset."
        ],
        solution: { "script.js": L(
          "function deprecationHeaders({ deprecatedAt, sunsetAt, docs }) {",
          "  const from = new Date(deprecatedAt);",
          "  const headers = { Deprecation: \"@\" + Math.floor(from.getTime() / 1000) };",
          "  if (sunsetAt) {",
          "    const until = new Date(sunsetAt);",
          "    if (until.getTime() < from.getTime()) throw new RangeError(\"Sunset must not be earlier than Deprecation\");",
          "    headers.Sunset = until.toUTCString();",
          "  }",
          "  if (docs) headers.Link = \"<\" + docs + \">; rel=\\\"deprecation\\\"; type=\\\"text/html\\\"\";",
          "  return headers;",
          "}",
          "",
          "console.log(deprecationHeaders({",
          "  deprecatedAt: \"2026-06-30T23:59:59Z\",",
          "  sunsetAt: \"2026-12-31T23:59:59Z\",",
          "  docs: \"https://docs.example.com/v1-orders\"",
          "}));",
          "") }
      },

      {
        id: "change-u5-2",
        title: "Who still calls it?",
        kind: "js", chip: "API", xp: 20, mins: 15,
        brief: "The sunset date for `GET /v1/orders/:id` is close. Before anything is removed, find out **who is still calling it**.\n\nEach log entry is `{ at, client, method, path }` (`at` is an ISO string). Write:\n\n- `stillCalling(logs, since)`: one entry `{ client, calls, lastSeen }` per client that called `GET /v1/orders/:id` at or after `since`, most calls first (ties by client name)\n- `readyToRemove(logs, now, quietDays)`: `true` only if nobody has called it in the last `quietDays` days\n\nOnly that endpoint counts: not `POST`, not `/v2/...`, not `/v1/orders` (the list) and not `/v1/orders/2/items`.",
        steps: [
          { text: "`stillCalling` counts each client's calls, most first.",
            test: L(LOGS,
              "var r = stillCalling(logs().filter(function (e) { return e.path.indexOf('/v1/orders/') === 0 && e.method === 'GET' && e.path.split('/').length === 4; }), day(0));",
              "T.eq(r.map(function (x) { return x.client + ':' + x.calls; }).join(' '), 'ios-4.2:3 acme-sync:2 android-7.0:1 old-cli:1', 'Count calls per client, most first, ties by name.');",
              "T.eq(r[0].lastSeen, day(5), 'lastSeen is the client\\'s most recent call.');") },
          { text: "Only `GET /v1/orders/:id` counts.",
            test: L(LOGS,
              "var r = stillCalling(logs(), day(6));",
              "T.eq(JSON.stringify(r), JSON.stringify([{ client: 'old-cli', calls: 1, lastSeen: day(10) }]), 'Since day 6, only old-cli called GET /v1/orders/:id. The other entries are a different method, version or path.');") },
          { text: "`readyToRemove` waits for a quiet period.",
            test: L(LOGS,
              "T.eq(readyToRemove(logs(), day(30), 30), false, 'old-cli called 20 days before: not quiet for 30 days yet.');",
              "T.eq(readyToRemove(logs(), day(41), 30), true, 'The last call was 31 days ago: quiet for 30 days.');",
              "T.eq(readyToRemove(logs().concat([{ at: day(35), client: 'web', method: 'POST', path: '/v1/orders/5' }]), day(41), 30), true, 'A POST is a different endpoint, so it doesn\\'t keep the GET alive.');") },
          { text: "Real request paths count too.", hidden: true,
            test: L(LOGS,
              "var extra = [{ at: day(20), client: 'acme-sync', method: 'GET', path: '/v1/orders/31?expand=items' }];",
              "var r = stillCalling(logs().concat(extra), day(11));",
              "T.eq(JSON.stringify(r), JSON.stringify([{ client: 'acme-sync', calls: 1, lastSeen: day(20) }]), 'Logged paths carry query strings: GET /v1/orders/31?expand=items is still GET /v1/orders/:id. Strip the query before matching.');",
              "T.eq(readyToRemove(logs().concat(extra), day(41), 30), false, 'acme-sync called on day 20 with a query string, so it has not been quiet for 30 days.');") }
        ],
        files: [{ name: "script.js", content: L(
          "const logs = [",
          "  { at: \"2026-09-01T10:00:00Z\", client: \"ios-4.2\", method: \"GET\", path: \"/v1/orders/17\" },",
          "  { at: \"2026-09-02T11:30:00Z\", client: \"acme-sync\", method: \"GET\", path: \"/v1/orders/9\" },",
          "  { at: \"2026-09-03T09:15:00Z\", client: \"web\", method: \"GET\", path: \"/v2/orders/9\" }",
          "];",
          "",
          "function stillCalling(logs, since) {",
          "  return [];",
          "}",
          "",
          "function readyToRemove(logs, now, quietDays) {",
          "  return true;",
          "}",
          "",
          "console.log(stillCalling(logs, \"2026-09-01T00:00:00Z\"));",
          "") }],
        hints: [
          "Write a helper isDeprecatedCall(e): e.method === \"GET\" and the path, split on \"/\", is exactly [\"\", \"v1\", \"orders\", id].",
          "Group the matching entries by client into { client, calls, lastSeen }, then sort by b.calls - a.calls, then a.client.localeCompare(b.client). readyToRemove: stillCalling(logs, now minus quietDays days).length === 0. ISO strings compare correctly as strings, or use new Date(...).getTime()."
        ],
        solution: { "script.js": L(
          "const logs = [",
          "  { at: \"2026-09-01T10:00:00Z\", client: \"ios-4.2\", method: \"GET\", path: \"/v1/orders/17\" },",
          "  { at: \"2026-09-02T11:30:00Z\", client: \"acme-sync\", method: \"GET\", path: \"/v1/orders/9\" },",
          "  { at: \"2026-09-03T09:15:00Z\", client: \"web\", method: \"GET\", path: \"/v2/orders/9\" }",
          "];",
          "",
          "// GET /v1/orders/:id, with or without a query string.",
          "function isDeprecatedCall(e) {",
          "  const parts = e.path.split(\"?\")[0].split(\"/\");",
          "  return e.method === \"GET\" && parts.length === 4 && parts[1] === \"v1\" && parts[2] === \"orders\" && parts[3] !== \"\";",
          "}",
          "",
          "function stillCalling(logs, since) {",
          "  const from = new Date(since).getTime();",
          "  const byClient = {};",
          "  for (const e of logs) {",
          "    if (!isDeprecatedCall(e) || new Date(e.at).getTime() < from) continue;",
          "    const c = byClient[e.client] || (byClient[e.client] = { client: e.client, calls: 0, lastSeen: e.at });",
          "    c.calls++;",
          "    if (e.at > c.lastSeen) c.lastSeen = e.at;",
          "  }",
          "  return Object.values(byClient).sort((a, b) => b.calls - a.calls || a.client.localeCompare(b.client));",
          "}",
          "",
          "function readyToRemove(logs, now, quietDays) {",
          "  const since = new Date(new Date(now).getTime() - quietDays * 86400000).toISOString();",
          "  return stillCalling(logs, since).length === 0;",
          "}",
          "",
          "console.log(stillCalling(logs, \"2026-09-01T00:00:00Z\"));",
          "") }
      },

      {
        id: "change-u5-quiz",
        title: "Unit 5 quiz: Deprecating without surprises",
        kind: "quiz", xp: 10,
        brief: "Deprecation and Sunset headers, and removing by evidence. 80% to pass.",
        questions: [
          { q: "What does the Deprecation header (RFC 9745) carry?",
            choices: ["The word true", "When the resource was or will be deprecated, as @ and Unix seconds", "The URL of the replacement endpoint that clients should move their calls over to", "A version number"],
            answer: 1, explain: "Like Deprecation: @1782863999. A Link with rel=\"deprecation\" points to the details." },
          { q: "What does the Sunset header (RFC 8594) say?",
            choices: ["When the resource is expected to stop working", "When it was deprecated", "When the server restarts", "The time zone of the API"],
            answer: 0, explain: "It's an HTTP date, and must not be earlier than the deprecation." },
          { q: "Why send deprecation in response headers, not just an email?",
            choices: ["Emails are not allowed for this", "Headers are cheaper to send than emails, and a mailing list costs money to run", "The people running the integration today may never have seen the email", "Headers can't be ignored"],
            answer: 2, explain: "Headers reach whoever, or whatever tool, is calling right now." },
          { q: "The sunset date has arrived, and your biggest customer called the endpoint yesterday. What now?",
            choices: ["Remove it: the date was announced", "Reach out to them, and remove once they've moved", "Rename it so they notice", "Raise the price"],
            answer: 1, explain: "The logs say they missed the notice. Breaking them proves nothing." },
          { q: "Why count only GET /v1/orders/:id, not every path that starts with /v1/orders?",
            choices: ["Other paths are slower", "Paths are case-sensitive", "So the report is shorter and easier to read for whoever has to approve the removal", "Other endpoints aren't being removed, and would keep the count up forever"],
            answer: 3, explain: "Measure exactly what you're removing, or you'll never see it go quiet." }
        ]
      }
    ]
  });
})();
