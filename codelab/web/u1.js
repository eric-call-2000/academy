/* How the Web Works — Unit 1: A URL, and the trip it starts */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var PARSE_STARTER = R`
// Split a URL into its parts, WITHOUT using the built-in URL class.
// Return { scheme, host, port, path, query, hash }, matching what the
// browser's URL object exposes:
//   port  is the explicit port as a string, or "" when it's left out
//   path  is "/" when there's nothing after the host
//   query is the text after "?" (no "?"), or ""
//   hash  is the text after "#" (no "#"), or ""
// Throw a TypeError for a string with no "://", or one with "user@host".
function parseUrl(str) {
  // First draft: handles the simplest case only.
  const afterScheme = str.split("://")[1];
  const host = afterScheme.split("/")[0];
  return { scheme: str.split("://")[0], host: host, port: "", path: "/", query: "", hash: "" };
}

console.log(parseUrl("https://example.com/"));
`;

  var PARSE_SOLUTION = R`
// Split a URL into its parts, WITHOUT using the built-in URL class.
function parseUrl(str) {
  if (typeof str !== "string" || str.indexOf("://") === -1) {
    throw new TypeError("not an absolute URL: " + JSON.stringify(str));
  }
  const scheme = str.slice(0, str.indexOf("://"));
  let rest = str.slice(str.indexOf("://") + 3);

  let hash = "";
  const h = rest.indexOf("#");
  if (h !== -1) { hash = rest.slice(h + 1); rest = rest.slice(0, h); }

  let query = "";
  const q = rest.indexOf("?");
  if (q !== -1) { query = rest.slice(q + 1); rest = rest.slice(0, q); }

  let path = "/";
  let authority = rest;
  const slash = rest.indexOf("/");
  if (slash !== -1) { authority = rest.slice(0, slash); path = rest.slice(slash); }

  if (authority.indexOf("@") !== -1) {
    throw new TypeError("userinfo is not allowed: " + JSON.stringify(str));
  }

  let host = authority;
  let port = "";
  const colon = authority.indexOf(":");
  if (colon !== -1) { host = authority.slice(0, colon); port = authority.slice(colon + 1); }

  return { scheme: scheme, host: host, port: port, path: path, query: query, hash: hash };
}

console.log(parseUrl("https://example.com/"));
`;

  window.CODELAB.addUnit("web", {
    id: "web-u1",
    title: "A URL, and the trip it starts",
    icon: "🔗",
    blurb: "A URL is a little instruction sheet, and pressing Enter kicks off a fixed sequence. Name the parts, define an origin, see a request and response as plain messages, and meet the five stops between Enter and the first byte.",
    cheat: [
      { h: "The parts of a URL", lang: "text", code: R`
https://shop.example.com:8443/products?color=red#reviews
\____/   \_______________/ \__/\_______/\________/\______/
scheme        host         port  path    query    fragment`,
        note: "scheme = how to talk (https). host = which machine. port = which door (default 443 for https, 80 for http). path = which resource. query = extra parameters. fragment = a spot on the page, never sent to the server." },
      { h: "Origin", lang: "js", code: R`
origin = scheme + host + port
https://a.com  and  https://a.com:443   // same origin (443 is the default)
https://a.com  and  http://a.com        // different: scheme
https://a.com  and  https://sub.a.com   // different: host`,
        note: "Two URLs share an origin only when scheme, host AND port all match. The browser's security rules are built on this." },
      { h: "A request and a response", lang: "text", code: R`
GET /products HTTP/1.1        |  HTTP/1.1 200 OK
Host: shop.example.com        |  Content-Type: text/html
Accept: text/html             |  Content-Length: 1270
                              |
(no body on a GET)            |  <!doctype html>...`,
        note: "Both are just text: a first line, some headers, a blank line, then an optional body. The browser writes the left, the server writes the right." },
      { h: "The five stops", lang: "text", code: R`
1. DNS    name  -> IP address
2. TCP    open a connection (a handshake)
3. TLS    make it private (another handshake, for https)
4. HTTP   send the request
5.        read the response`,
        note: "Every https request that isn't reusing a connection goes through all five before a single byte of page comes back." }
    ],
    lessons: [

      {
        id: "web-u1-1",
        title: "The parts of a URL",
        kind: "js", chip: "WEB", xp: 15, mins: 14,
        brief: "A URL packs several things into one string, and the browser pulls them apart before it can do anything. Build `parseUrl(str)` that does the same, **without** using the built-in `URL` class — so you understand what it's splitting.\n\nReturn `{ scheme, host, port, path, query, hash }`, matching the fields the browser's `URL` object exposes:\n\n- **scheme** — `https`, no colon\n- **host** — `shop.example.com`, no port\n- **port** — the explicit port as a string (`\"8443\"`), or `\"\"` when it's left out\n- **path** — everything from the first `/`, or `\"/\"` when there's nothing after the host\n- **query** — the text after `?` with no `?`, or `\"\"`\n- **hash** — the text after `#` with no `#`, or `\"\"`\n\nStrip the fragment first (it's never part of the query), then the query, then split the rest into the host part and the path. Throw a `TypeError` for a string with no `\"://\"`, and for one that carries `user@host` (userinfo, which this course doesn't allow).\n\nAt the end you'll see the browser's own `URL` object does exactly this — but now you know what it's doing.",
        steps: [
          { text: "A full URL splits into all six parts.",
            test: R`
T.eq(parseUrl("https://shop.example.com:8443/products/42?color=red&size=l#reviews"),
  { scheme: "https", host: "shop.example.com", port: "8443", path: "/products/42", query: "color=red&size=l", hash: "reviews" },
  "Every part separated");
` },
          { text: "Missing parts take their defaults: no port is \"\", an empty path is \"/\".",
            test: R`
T.eq(parseUrl("http://example.com/"), { scheme: "http", host: "example.com", port: "", path: "/", query: "", hash: "" }, "A bare host and root path");
T.eq(parseUrl("https://example.com"), { scheme: "https", host: "example.com", port: "", path: "/", query: "", hash: "" }, "No trailing slash still gives path /");
T.eq(parseUrl("https://example.com/a/b/c"), { scheme: "https", host: "example.com", port: "", path: "/a/b/c", query: "", hash: "" }, "A deeper path");
` },
          { text: "Query and fragment are peeled off correctly, in any combination.",
            test: R`
T.eq(parseUrl("https://example.com?q=1"), { scheme: "https", host: "example.com", port: "", path: "/", query: "q=1", hash: "" }, "A query with no path");
T.eq(parseUrl("https://example.com#top"), { scheme: "https", host: "example.com", port: "", path: "/", query: "", hash: "top" }, "A fragment with no path or query");
T.eq(parseUrl("https://a.com/p?x=1&x=2#h"), { scheme: "https", host: "a.com", port: "", path: "/p", query: "x=1&x=2", hash: "h" }, "Path, query and fragment together; a repeated key stays in the query text");
` },
          { text: "A string with no \"://\", and one with userinfo, each throw a TypeError.",
            test: R`
var noScheme = false; try { parseUrl("example.com/path"); } catch (e) { noScheme = e instanceof TypeError; }
T.expect(noScheme, "A string with no :// is not an absolute URL — throw a TypeError");
var userinfo = false; try { parseUrl("https://user:pass@a.com/"); } catch (e) { userinfo = e instanceof TypeError; }
T.expect(userinfo, "A user@host form must throw a TypeError");
` },
          { text: "You built it by hand — the browser's own URL object does the same, which you may use from now on.",
            test: R`
T.expect(!/\bnew\s+URL\b|(^|[^.\w$])URL\s*\(/.test(__FILES["script.js"]), "For this lesson, split the string yourself instead of using the URL class");
var u = new URL("https://shop.example.com:8443/products?color=red#reviews");
T.eq([u.protocol.replace(/:$/, ""), u.hostname, u.port, u.pathname, u.search.replace(/^\?/, ""), u.hash.replace(/^#/, "")],
  ["https", "shop.example.com", "8443", "/products", "color=red", "reviews"],
  "new URL exposes exactly the parts you just parsed");
` }
        ],
        files: [{ name: "script.js", content: PARSE_STARTER }],
        solution: { "script.js": PARSE_SOLUTION },
        hints: [
          "Peel the string from the outside in: take the scheme off the front (before ://), then the #fragment off the end, then the ?query, then split what's left into host and path at the first /.",
          "Use indexOf and slice, not split — split loses information when a value itself contains the separator (a path can contain more slashes).",
          "For the errors: throw if indexOf('://') is -1, and throw if the host part (before the first /) contains '@'."
        ]
      },

      {
        id: "web-u1-2",
        title: "Origin: scheme, host and port",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Three parts of a URL together make its **origin**: the scheme, the host and the port. The origin is the browser's idea of \"where a page came from\", and almost every security rule you'll meet later is written in terms of it.\n\nTwo URLs share an origin only when **all three** match. The path, query and fragment are *not* part of the origin, so two pages on the same site always share it.",
            ask: { type: "predict",
              q: "Do `https://shop.com/cart` and `https://shop.com/checkout` share an origin? Answer yes or no.",
              answer: "yes",
              why: "Same scheme (https), same host (shop.com), same port (both default). The path differs, but the path isn't part of the origin.",
              run: true,
              check: "console.log(new URL('https://shop.com/cart').origin === new URL('https://shop.com/checkout').origin ? 'yes' : 'no');" } },

          { read: "The port is the part people forget. When you don't write a port, the scheme's **default** is filled in: **443** for `https`, **80** for `http`. So `https://a.com` and `https://a.com:443` are the same origin — the second just spells out the default.\n\nBut a *different* port is a different origin, even on the same host. That's why a frontend on `localhost:3000` and an API on `localhost:8080` are treated as two different places.",
            ask: { type: "pick",
              q: "Which pair is **different** origins?",
              choices: ["`https://a.com` and `https://a.com:443`", "`https://a.com/x` and `https://a.com/y`", "`http://a.com:3000` and `http://a.com:8080`", "`https://a.com?q=1` and `https://a.com?q=2`"],
              answer: 2,
              why: [
                "443 is the default port for https, so writing it out changes nothing: same origin.",
                "Only the path differs, and the path isn't part of the origin.",
                "Same scheme and host, but ports 3000 and 8080 differ — that's a different origin.",
                "Only the query differs, and the query isn't part of the origin."
              ] } },

          { read: "A subdomain is a different host, so it's a different origin too. `https://api.shop.com` and `https://shop.com` do **not** match — `api.shop.com` is its own host, however closely related it looks.",
            ask: { type: "predict", transfer: true,
              q: "Do `https://api.shop.com` and `https://shop.com` share an origin? Answer yes or no.",
              answer: "no",
              why: "The hosts differ: api.shop.com is not shop.com. A subdomain is a separate origin.",
              run: true,
              check: "console.log(new URL('https://api.shop.com').origin === new URL('https://shop.com').origin ? 'yes' : 'no');" } },

          { ask: { type: "pick", transfer: true,
              q: "A page at `http://mysite.com` loads a script from `https://mysite.com`. Same origin?",
              choices: ["Yes — it is the same host name, and https is really just the secure version of ordinary http", "No — the scheme differs (http vs https), so the origin differs", "Yes — the port is the same", "Only if the ports are written out explicitly"],
              answer: 1,
              why: [
                "The scheme is part of the origin. http and https never share an origin, even on one host.",
                "http and https are different schemes, so different origins — this is exactly the \"mixed content\" case browsers warn about.",
                "The default ports actually differ too (80 vs 443), but the scheme alone already settles it.",
                "Writing the ports out wouldn't help: 80 and 443 differ, and so do the schemes."
              ] } },

          { ask: { type: "explain",
              q: "In your own words, what makes two URLs \"the same origin\", and why isn't the path part of it?",
              model: "Two URLs are the same origin when their scheme, host and port all match. The path isn't part of it because every page and resource on one site shares a scheme, host and port — the origin identifies the site, and the path identifies a resource within it.",
              rubric: ["Names all three: scheme, host and port", "Says all three must match", "Says the path (and query/fragment) are not part of the origin"] } }
        ]
      },

      {
        id: "web-u1-3",
        title: "A request and a response are just text",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "For all the machinery underneath, an HTTP request is **plain text** with a simple shape:\n\n```\nGET /products HTTP/1.1\nHost: shop.example.com\nAccept: text/html\n\n```\n\nA first line (the method, the path, the HTTP version), then some **headers** (`Name: value`, one per line), then a blank line. A `GET` has no body; a `POST` would put its data after that blank line.",
            ask: { type: "order",
              q: "Put a raw HTTP request in order, top to bottom.",
              lines: ["POST /login HTTP/1.1", "Host: shop.example.com", "Content-Type: application/json", "", "{\"user\":\"ada\"}"],
              why: "The request line first, then headers, then a blank line marks the end of the headers, then the body. The blank line is required — it's how the server knows the headers are done." } },

          { read: "The response has the same shape, mirrored. A **status line** (the HTTP version, a status code, a short reason), then headers, then a blank line, then the body:\n\n```\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 1270\n\n<!doctype html>...\n```\n\nThe status code (here `200`) is the response's headline: it says how the request went before you read anything else.",
            ask: { type: "predict",
              q: "In the status line `HTTP/1.1 404 Not Found`, what is the status code? Type it.",
              answer: "404",
              why: "The status code is the number: 404. \"Not Found\" is just its human-readable reason phrase." } },

          { read: "Because it's only text, you can read a request and know exactly what was asked, and read a response and know exactly what came back — which is what you do every time you open the Network tab in your browser's dev tools.",
            ask: { type: "pick", transfer: true,
              q: "What does the blank line in a request or response separate?",
              choices: ["The headers from the body", "The request from the response", "One header from the next", "The scheme from the host"],
              answer: 0,
              why: [
                "The blank line ends the headers; anything after it is the body.",
                "Requests and responses are separate messages, not two halves of one.",
                "Headers are separated by newlines; the blank line is the bigger divider that ends them all.",
                "Scheme and host live in the URL, not in the message layout."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A response begins `HTTP/1.1 201 Created`. Type its status code.",
              answer: "201",
              why: "201 is the code; \"Created\" is the reason phrase. 201 means the request succeeded and made a new resource." } },

          { ask: { type: "pick", transfer: true,
              q: "Which line is a **request** line, not a response status line?",
              choices: ["`HTTP/1.1 200 OK`", "`GET /users/42 HTTP/1.1`", "`HTTP/1.1 500 Internal Server Error`", "`HTTP/1.1 301 Moved Permanently`"],
              answer: 1,
              why: [
                "This starts with the HTTP version and a code — that's a response status line.",
                "A method, a path and the version: that's a request line, written by the browser.",
                "Version then code then reason — a response status line.",
                "Version then code then reason — a response status line."
              ] } }
        ]
      },

      {
        id: "web-u1-4",
        title: "The five stops between Enter and the first byte",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "When you type an `https` address and press Enter, the same five stops happen every time (unless the browser is reusing an open connection):\n\n1. **DNS** — turn the host name into an IP address.\n2. **TCP** — open a connection to that address.\n3. **TLS** — make the connection private (the `s` in https).\n4. **HTTP request** — send `GET /...`.\n5. **Response** — read what comes back.\n\nThe next units take these one at a time.",
            ask: { type: "order",
              q: "Put the five stops in the order they happen.",
              lines: ["DNS: find the server's IP address", "TCP: open a connection", "TLS: make it private", "Send the HTTP request", "Read the response"],
              why: "You need an address before you can connect (DNS, then TCP), a private channel before you send anything secret (TLS), and only then the request and its response." } },

          { read: "A common picture is wrong: the browser does **not** download the whole website at once. The first response is usually just the HTML. The browser reads it, discovers it mentions a stylesheet, some scripts and images, and then makes **more** requests for those — each its own trip. A page is dozens of requests, not one.",
            ask: { type: "pick",
              q: "You load a page with 1 HTML file, 2 stylesheets and 5 images. Roughly how many HTTP requests is that?",
              choices: ["1 — the whole page comes in one response", "8 — the HTML, then a request for each resource it references", "2 — one for text, one for images", "0 — on a first visit the whole page arrives together from the browser cache"],
              answer: 1,
              why: [
                "The first response is just the HTML. The other files are separate requests.",
                "One for the HTML, then one each for the 2 stylesheets and 5 images the HTML points to: about 8.",
                "Each file is its own request; they aren't bundled into \"text\" and \"images\".",
                "A first visit has nothing cached, so every file is fetched."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "Why does TLS come after TCP, and not before?",
              choices: ["TLS makes a connection private, so there has to be a connection first", "TLS is slower, so it's done last to save time", "TCP depends on the TLS encryption keys before it can open the connection at all", "The order doesn't matter; browsers pick either one"],
              answer: 0,
              why: [
                "TLS secures an existing TCP connection, so TCP must open first.",
                "Order isn't about speed; TLS needs a connection to secure.",
                "It's the other way round: TLS runs on top of the TCP connection.",
                "The order is fixed: you can't secure a connection that doesn't exist yet."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Which stop turns a host name like `shop.example.com` into a numeric address? Type its three-letter name.",
              answer: "DNS",
              why: "DNS (the Domain Name System) is the lookup that maps a name to an IP address. It's the first stop, in the next unit." } },

          { ask: { type: "explain",
              q: "Someone says \"when I press Enter, the browser downloads the website.\" What's the more accurate picture?",
              model: "Pressing Enter starts one request that usually returns just the HTML. The browser reads that HTML, finds the stylesheets, scripts and images it references, and makes a separate request for each. A page load is many requests, not one download.",
              rubric: ["Says the first response is usually just the HTML", "Says the browser then requests the other resources it references", "Says a page is many requests, not a single download"] } }
        ]
      },

      {
        id: "web-quiz-1",
        title: "Unit 1 quiz: The URL and the request",
        kind: "quiz", xp: 10,
        brief: "URL parts, origins, the request/response message, and the five stops. 80% to pass.",
        questions: [
          { q: "In `https://shop.com:8443/cart?item=42#top`, which part is `8443`?",
            choices: ["The path", "The port", "The query", "The fragment"],
            answer: 1, explain: "The number after the colon following the host is the port. The path is /cart, the query is item=42, and the fragment is top." },
          { q: "Which two URLs share an origin?",
            choices: ["`https://a.com` and `https://a.com:443`", "`https://a.com` and `http://a.com`", "`https://a.com` and `https://api.a.com`", "`https://a.com:80` and `https://a.com:443`"],
            answer: 0, explain: "443 is the default port for https, so writing it out changes nothing. Different scheme, different subdomain, or different port would each be a different origin." },
          { q: "What does the fragment (the part after `#`) get used for?",
            choices: ["It is sent along to the server so it can pick which resource on the page to return to you first", "It stays in the browser to point at a spot on the page, and is never sent to the server", "It sets the port", "It carries form data"],
            answer: 1, explain: "The fragment is handled entirely by the browser (to scroll to an element, for example) and is not included in the request sent to the server." },
          { q: "In an HTTP request or response, what does the blank line mark?",
            choices: ["The end of the headers, before the body", "The end of the whole message, after which nothing else at all follows", "The gap between two headers", "The start of the URL"],
            answer: 0, explain: "The message is a first line, then headers, then a blank line, then an optional body. The blank line tells the receiver the headers are finished." },
          { q: "What is the status code in `HTTP/1.1 403 Forbidden`?",
            choices: ["403", "1.1", "Forbidden", "HTTP"],
            answer: 0, explain: "The status code is the number, 403. \"Forbidden\" is its reason phrase, and HTTP/1.1 is the protocol version." },
          { q: "Which is the correct order of the first steps when you open an https page?",
            choices: ["TCP, then DNS, then TLS", "DNS, then TCP, then TLS", "TLS, then TCP, then DNS", "DNS, then TLS, then TCP"],
            answer: 1, explain: "You need the address first (DNS), then a connection to it (TCP), then privacy over that connection (TLS), before sending the HTTP request." }
        ]
      }
    ]
  });
})();
