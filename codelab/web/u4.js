/* How the Web Works — Unit 4: Methods, status and redirects */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var METHOD_STARTER = R`
// A request's METHOD says what to do. Two properties decide whether it's
// safe to send it automatically:
//   safe        - read-only: it doesn't change anything on the server
//   idempotent  - sending it twice has the same effect as sending it once
// Per the HTTP spec:
//   GET, HEAD           safe AND idempotent
//   PUT, DELETE         idempotent, but NOT safe (they change state)
//   POST, PATCH         neither
function isSafe(method) {
  // First draft: wrong — treats everything as safe.
  return true;
}

function isIdempotent(method) {
  return true;
}

// A client may automatically retry a failed request only if repeating it
// can't cause harm — that is, only if the method is idempotent.
function canRetryAutomatically(method) {
  return true;
}

console.log(isSafe("GET"), isIdempotent("PUT"), canRetryAutomatically("POST"));
`;

  var METHOD_SOLUTION = R`
const SAFE = new Set(["GET", "HEAD"]);
const IDEMPOTENT = new Set(["GET", "HEAD", "PUT", "DELETE"]);

function isSafe(method) {
  return SAFE.has(method);
}

function isIdempotent(method) {
  return IDEMPOTENT.has(method);
}

// A client may automatically retry a failed request only if repeating it
// can't cause harm — that is, only if the method is idempotent.
function canRetryAutomatically(method) {
  return isIdempotent(method);
}

console.log(isSafe("GET"), isIdempotent("PUT"), canRetryAutomatically("POST"));
`;

  window.CODELAB.addUnit("web", {
    id: "web-u4",
    title: "Methods, status and redirects",
    icon: "🚦",
    blurb: "The request says what to do; the response says how it went. The method properties that decide whether a retry is safe, the five status classes, the codes you'll actually meet, and the redirects people trip over.",
    cheat: [
      { h: "Methods", lang: "text", code: R`
GET, HEAD      safe (read-only) and idempotent
PUT, DELETE    idempotent, not safe (they change state)
POST, PATCH    neither: repeating can do harm`,
        note: "Safe = no change. Idempotent = doing it twice equals doing it once. A client may auto-retry only idempotent methods; a retried POST could charge a card twice." },
      { h: "Status classes", lang: "text", code: R`
1xx  informational   (rare)
2xx  success         200 OK, 201 Created, 204 No Content
3xx  redirection     301, 302, 304, 307, 308
4xx  client error    400, 401, 403, 404, 429
5xx  server error    500, 503`,
        note: "The first digit is the headline. 4xx means the request was wrong; 5xx means the server failed a valid request. 404 is the server up and saying \"not here.\"" },
      { h: "Redirects", lang: "text", code: R`
301 / 308   permanent  (308 keeps the method)
302 / 307   temporary  (307 keeps the method)
304                    NOT a redirect - it's "use your cache"`,
        note: "307 and 308 preserve the method and body; 301 and 302 historically let a POST turn into a GET. 304 lives in the 3xx block but means \"not modified,\" a caching answer." }
    ],
    lessons: [

      {
        id: "web-u4-1",
        title: "Safe and idempotent: which methods you can retry",
        kind: "js", chip: "WEB", xp: 15, mins: 14,
        brief: "Every request has a **method** — `GET`, `POST`, `PUT`, `DELETE` and so on — and the HTTP spec gives each two properties that decide how it may be treated:\n\n- **safe** — read-only: applying it has no effect on the server's state. `GET` and `HEAD` are safe.\n- **idempotent** — sending it twice has the same effect as sending it once. `GET`, `HEAD`, `PUT` and `DELETE` are idempotent. (`DELETE` twice still leaves the thing deleted.) `POST` and `PATCH` are neither.\n\nThis matters for **retries**. When a request fails (a dropped connection, a timeout), a client may quietly retry it — but only if repeating it can't cause harm, i.e. only if the method is **idempotent**. Retrying a `POST` that places an order could place it twice.\n\nImplement `isSafe(method)`, `isIdempotent(method)` and `canRetryAutomatically(method)` (which is true exactly when the method is idempotent).",
        steps: [
          { text: "`isSafe` is true only for the read-only methods.",
            test: R`
T.eq(["GET", "HEAD"].map(isSafe), [true, true], "GET and HEAD are safe");
T.eq(["POST", "PUT", "DELETE", "PATCH"].map(isSafe), [false, false, false, false], "Anything that can change state is not safe");
` },
          { text: "`isIdempotent` is true for GET, HEAD, PUT and DELETE, but not POST or PATCH.",
            test: R`
T.eq(["GET", "HEAD", "PUT", "DELETE"].map(isIdempotent), [true, true, true, true], "These give the same result however many times you send them");
T.eq(["POST", "PATCH"].map(isIdempotent), [false, false], "POST and PATCH are not idempotent");
` },
          { text: "`canRetryAutomatically` matches idempotency exactly.",
            test: R`
T.eq(["GET", "HEAD", "PUT", "DELETE"].map(canRetryAutomatically), [true, true, true, true], "Idempotent methods are safe to retry");
T.eq(["POST", "PATCH"].map(canRetryAutomatically), [false, false], "A retried POST could take effect twice — do not auto-retry it");
T.expect(["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH"].every(function (m) { return canRetryAutomatically(m) === isIdempotent(m); }), "canRetryAutomatically is exactly isIdempotent");
` }
        ],
        files: [{ name: "script.js", content: METHOD_STARTER }],
        solution: { "script.js": METHOD_SOLUTION },
        hints: [
          "Keep two Sets: the safe methods (GET, HEAD) and the idempotent ones (GET, HEAD, PUT, DELETE).",
          "isSafe and isIdempotent each just check membership: `return SAFE.has(method);`",
          "canRetryAutomatically returns isIdempotent(method) — a request is safe to retry exactly when repeating it changes nothing extra."
        ]
      },

      {
        id: "web-u4-2",
        title: "The five status classes",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "Every response opens with a **status code**, and its **first digit** tells you the whole story before you read the rest:\n\n- **1xx** informational (rare)\n- **2xx** success\n- **3xx** redirection — more to do to finish\n- **4xx** client error — the request was wrong\n- **5xx** server error — the request was fine, the server failed\n\nLearn the classes and you can read any code you've never seen: a `418` you don't recognise is still a client error.",
            ask: { type: "pick",
              q: "A response comes back with status `503`. Without knowing what 503 means exactly, what do you know?",
              choices: ["The request succeeded", "The client sent a bad request", "The server failed to fulfil a valid request", "The response is a redirect"],
              answer: 2,
              why: [
                "Success is 2xx; 503 starts with 5.",
                "A bad request from the client is 4xx; this is 5xx.",
                "5xx is the server-error class: the request was fine, but the server couldn't complete it.",
                "Redirects are 3xx; 503 is 5xx."
              ] } },

          { read: "The most important line to draw is between **4xx** and **5xx**. A 4xx says *you* got the request wrong — a bad URL, missing permission, malformed data — and retrying it unchanged won't help. A 5xx says *the server* failed something that should have worked, so the same request might succeed if you try again later.",
            ask: { type: "pick",
              q: "Which class of error is worth retrying the same request for, a little later?",
              choices: ["4xx, because the client can fix it", "5xx, because the server may recover", "Both equally", "Neither — errors are final"],
              answer: 1,
              why: [
                "A 4xx means the request itself was wrong; sending it again unchanged gets the same 4xx.",
                "A 5xx is a server-side failure on a valid request, so a retry may succeed once the server recovers.",
                "They're different: 4xx won't fix itself on retry, 5xx might.",
                "5xx errors in particular are often transient."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A brand-new response code, `299`, appears. Which class is it, so what does it broadly mean? Type the class as a digit followed by xx (like `4xx`).",
              answer: "2xx",
              why: "The first digit is 2, so it's the success class — the request was received, understood and accepted." } },

          { ask: { type: "pick", transfer: true,
              q: "Match the situation to its class: a request asks for a page that doesn't exist.",
              choices: ["2xx success", "3xx redirection", "4xx client error", "5xx server error"],
              answer: 2,
              why: [
                "Nothing succeeded — there's no such page.",
                "There's nowhere to redirect to; the resource isn't there.",
                "Asking for something that doesn't exist is a client error (404 Not Found).",
                "The server is fine and answering; the request was for a missing resource."
              ] } },

          { ask: { type: "explain",
              q: "What's the difference between a 4xx and a 5xx status, and why does it change what you do next?",
              model: "A 4xx means the request was wrong — a bad URL, missing auth, malformed data — so retrying it unchanged won't help; you have to fix the request. A 5xx means the server failed a valid request, so the same request might succeed on a later retry.",
              rubric: ["Says 4xx is a client/request error", "Says 5xx is a server-side failure of a valid request", "Says a 5xx is worth retrying but a 4xx needs the request fixed"] } }
        ]
      },

      {
        id: "web-u4-3",
        title: "The status codes you'll actually meet",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "A handful of codes cover almost everything you'll see:\n\n- **200 OK** — success, here's the result\n- **201 Created** — success, and a new resource now exists (after a POST)\n- **204 No Content** — success, nothing to send back (after a DELETE)\n- **400 Bad Request** — the request was malformed\n- **404 Not Found** — no such resource\n- **500 Internal Server Error** — the server threw",
            ask: { type: "predict",
              q: "A POST creates a new user successfully. Which status code best fits? Type the number.",
              answer: "201",
              why: "201 Created means the request succeeded and made a new resource — exactly what a successful POST that creates something returns." } },

          { read: "Two codes are about **who you are**, and they're easy to mix up:\n\n- **401 Unauthorized** — you're not authenticated: the server doesn't know who you are. (Log in.)\n- **403 Forbidden** — you're authenticated, but you're not allowed to do this. (Logging in again won't help.)\n\nAnd one is about **too much**: **429 Too Many Requests** — you're being rate-limited; slow down.",
            ask: { type: "pick",
              q: "A logged-in user tries to open another user's private settings and is refused. Which code fits?",
              choices: ["401 Unauthorized", "403 Forbidden", "404 Not Found", "400 Bad Request"],
              answer: 1,
              why: [
                "401 is for when the server doesn't know who you are; here it does — you're logged in.",
                "403 Forbidden: you're known, but not permitted to access this. Re-authenticating won't help.",
                "404 hides existence, sometimes used for privacy, but the direct meaning of \"known user, not allowed\" is 403.",
                "The request is well-formed; the problem is permission, not syntax."
              ] } },

          { read: "A misconception worth killing: **404 does not mean the server is down**. A 404 is the server **up and answering**, telling you the specific thing you asked for isn't there. A server that's actually down gives you no HTTP response at all (a connection error), or a 5xx if something upstream is broken.",
            ask: { type: "pick", transfer: true,
              q: "You get a clean `404 Not Found` for `/produtcs` (a typo). What does that tell you about the server?",
              choices: ["The server is down", "The server is up and running, and there's no resource at that path", "The database crashed", "The connection failed"],
              answer: 1,
              why: [
                "A down server can't send you a 404; it sends nothing.",
                "A 404 is a normal HTTP response: the server is fine and is telling you that path has nothing.",
                "A crash would more likely surface as a 500, not a clean 404.",
                "You got a response, so the connection worked."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A `DELETE /sessions/42` succeeds and there's nothing meaningful to return. Which status code fits best? Type the number.",
              answer: "204",
              why: "204 No Content means the request succeeded but the response has no body — a natural fit for a successful DELETE." } },

          { ask: { type: "pick", transfer: true,
              q: "An app hammers an API and starts getting `429`. What should it do?",
              choices: ["Retry immediately and faster", "Slow down and retry after a delay", "Switch to POST requests", "Treat it as a permanent failure and give up"],
              answer: 1,
              why: [
                "429 means you're already sending too many requests; faster makes it worse.",
                "429 is a rate limit — back off and retry later, ideally after the delay the server suggests.",
                "The method isn't the issue; the request rate is.",
                "It's temporary: once you slow down, requests succeed again."
              ] } }
        ]
      },

      {
        id: "web-u4-4",
        title: "Redirects: 301 vs 302 vs 307 vs 308, and 304 is not a redirect",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "A **3xx redirect** says \"what you want is somewhere else\" and points the browser at a new URL with a `Location` header. The browser then makes a second request to that URL. There are two things a redirect can vary: whether it's **permanent** or **temporary**, and whether it **keeps the method**.\n\n- **301 Moved Permanently** / **308 Permanent Redirect** — the resource has moved for good; browsers and search engines remember it.\n- **302 Found** / **307 Temporary Redirect** — a temporary detour; don't remember it.",
            ask: { type: "pick",
              q: "A site permanently moves from `http://` to `https://`. Which redirect should it send?",
              choices: ["302 Found", "301 Moved Permanently", "307 Temporary Redirect", "304 Not Modified"],
              answer: 1,
              why: [
                "302 is temporary; the move is permanent, and you want browsers to remember it.",
                "301 Moved Permanently tells browsers and search engines to update to the new URL for good.",
                "307 is a temporary redirect; this move is permanent.",
                "304 isn't a redirect at all — it's a caching response."
              ] } },

          { read: "The **method** difference is the subtle one. The old codes, **301** and **302**, historically let the browser change the method — a `POST` could become a `GET` on the redirect. The newer **307** and **308** were added to **preserve the method and body**: a `POST` stays a `POST`. When redirecting a form submission, that difference matters.",
            ask: { type: "pick",
              q: "You need to redirect a `POST` and be sure it stays a `POST` (same method and body). Which code guarantees that?",
              choices: ["301", "302", "307", "Any 3xx does"],
              answer: 2,
              why: [
                "301 is permanent but historically allowed the method to change to GET.",
                "302 likewise may turn a POST into a GET.",
                "307 Temporary Redirect is defined to preserve the method and body exactly.",
                "301 and 302 don't guarantee it; only 307 and 308 do."
              ] } },

          { read: "Now the trap: **304 Not Modified is not a redirect**, even though it sits in the 3xx block. It's a **caching** answer — the response to a conditional request that says \"your cached copy is still good, don't download it again.\" No `Location`, no second request to a new URL. The next unit is all about it.",
            ask: { type: "pick", transfer: true,
              q: "Which 3xx code does **not** send the browser to a different URL?",
              choices: ["301", "302", "304", "307"],
              answer: 2,
              why: [
                "301 redirects permanently to a new URL.",
                "302 redirects temporarily to a new URL.",
                "304 Not Modified tells the browser its cached copy is still valid — no new URL, no redirect.",
                "307 redirects temporarily, preserving the method."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A URL redirects with `308`. Is that permanent or temporary? Type one word.",
              answer: "permanent",
              why: "308 Permanent Redirect is the method-preserving permanent redirect — the permanent partner of 307." } },

          { ask: { type: "pick", transfer: true,
              q: "Why were 307 and 308 added when 301 and 302 already existed?",
              choices: ["To be faster", "To preserve the request's method and body across the redirect, which 301/302 didn't guarantee", "To encrypt the redirect", "To skip DNS on the second request"],
              answer: 1,
              why: [
                "They're not about speed.",
                "301/302 historically allowed a POST to become a GET; 307/308 guarantee the method and body carry over unchanged.",
                "Encryption is TLS's job, unrelated to the redirect code.",
                "The second request still resolves and connects normally."
              ] } }
        ]
      },

      {
        id: "web-quiz-4",
        title: "Unit 4 quiz: Methods and status",
        kind: "quiz", xp: 10,
        brief: "Safe and idempotent methods, the status classes, the common codes, and redirects. 80% to pass.",
        questions: [
          { q: "What does it mean that a method is idempotent?",
            choices: ["It's read-only", "Sending it twice has the same effect as sending it once", "It's encrypted", "It never fails and always returns a successful response every single time"],
            answer: 1, explain: "Idempotent means repeating the request changes nothing beyond the first. GET, HEAD, PUT and DELETE are idempotent; POST and PATCH are not." },
          { q: "Which method is safe (read-only) AND idempotent?",
            choices: ["POST", "GET", "PATCH", "DELETE"],
            answer: 1, explain: "GET (and HEAD) are safe and idempotent. DELETE is idempotent but not safe; POST and PATCH are neither." },
          { q: "Why should a client auto-retry a failed GET but not a failed POST?",
            choices: ["GET requests are simply much faster to send and process than POST requests are on any server", "GET is idempotent, so a retry is harmless; a retried POST could take effect twice", "POST can't be retried at all", "GET responses are cached"],
            answer: 1, explain: "Retrying an idempotent request can't cause extra effect; retrying a POST (say, placing an order) could do it twice." },
          { q: "A response is `500`. What does the first digit tell you?",
            choices: ["The request succeeded and the server sent back its result correctly", "It's a redirect", "The client sent a bad request", "The server failed to fulfil a valid request"],
            answer: 3, explain: "5xx is the server-error class: the request was fine, but the server couldn't complete it, so a later retry may work." },
          { q: "A logged-in user is refused access to something they're not allowed to see. Which code fits best?",
            choices: ["401 Unauthorized", "403 Forbidden", "404 Not Found", "400 Bad Request"],
            answer: 1, explain: "401 means the server doesn't know who you are; 403 means it does, but you're not permitted. Re-authenticating won't change a 403." },
          { q: "Which statement about 304 Not Modified is correct?",
            choices: ["It redirects the browser to a new URL", "It's a caching response meaning the cached copy is still valid, not a redirect", "It means the origin server has gone completely down and cannot answer any requests at all", "It's a client error"],
            answer: 1, explain: "Though it's in the 3xx block, 304 has no Location and sends no new URL — it tells the browser its cached copy is still good." }
        ]
      }
    ]
  });
})();
