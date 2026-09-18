/* How the Web Works — Unit 5: Headers and content */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  window.CODELAB.addUnit("web", {
    id: "web-u5",
    title: "Headers and content",
    icon: "🏷️",
    blurb: "Headers are the envelope: they say what's inside, what the client will accept, how big it is and how it may be reused. Content negotiation lets one URL serve the right format, in the right encoding, to whoever asked.",
    cheat: [
      { h: "The envelope", lang: "text", code: R`
request                     response
Host: shop.example.com      Content-Type: text/html
Accept: text/html           Content-Length: 1270
Accept-Encoding: br, gzip   Content-Encoding: br
Cookie: sid=...             Cache-Control: max-age=300`,
        note: "Headers are Name: value lines. The request states what it wants and who it is; the response describes what's in the body and how to treat it." },
      { h: "Content negotiation", lang: "text", code: R`
Accept:          which format  (text/html vs application/json)
Accept-Encoding: which packing (br, gzip)
Accept-Language: which language
-> server picks, and says Vary: Accept-Encoding`,
        note: "The client lists what it can take; the server picks one representation and names in Vary which request header it chose on, so caches don't mix them up." },
      { h: "Body facts", lang: "text", code: R`
Content-Type:     text/html; charset=utf-8   (what it is)
Content-Length:   1270                        (how many bytes)
Content-Encoding: br                          (how it's packed)
Range / 206                                   (just part of it)`,
        note: "Text compresses well (gzip/Brotli); already-compressed images barely do. A range request fetches a slice, to resume a download or seek a video." }
    ],
    lessons: [

      {
        id: "web-u5-1",
        title: "The envelope: request and response headers",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "After the first line, both a request and a response carry **headers**: `Name: value` lines that describe the message. They're the envelope around the body — metadata that tells each side how to handle what's inside.\n\nA request's headers say what it wants and who's asking (`Host`, `Accept`, `Cookie`). A response's headers describe the body and how to treat it (`Content-Type`, `Content-Length`, `Cache-Control`).",
            ask: { type: "pick",
              q: "Which header tells the browser what kind of data is in the response body?",
              choices: ["Host", "Content-Type", "Accept", "Cookie"],
              answer: 1,
              why: [
                "Host is a request header naming which site is wanted.",
                "Content-Type describes the body — text/html, application/json, image/png — so the browser knows how to handle it.",
                "Accept is a request header stating what the client would like back.",
                "Cookie is a request header carrying stored data back to the server."
              ] } },

          { read: "A misconception: headers are just optional metadata you can ignore. In fact they're load-bearing. If a response sends JSON but labels it `Content-Type: text/plain`, the browser treats it as plain text and your code that expected to parse JSON breaks. The header isn't decoration — it decides how the body is interpreted.",
            ask: { type: "pick",
              q: "A server returns JSON but sets `Content-Type: text/html`. What's the likely result?",
              choices: ["Nothing changes; the body is the same bytes", "The browser may try to render it as HTML instead of treating it as data", "The request fails with a 400", "The JSON is automatically fixed"],
              answer: 1,
              why: [
                "The bytes are the same, but how they're interpreted is driven by the header.",
                "Content-Type decides handling; labelled as HTML, the browser won't treat it as JSON data.",
                "The request itself was fine; the mislabelling is a response problem, not a 400.",
                "Nothing fixes it automatically — the wrong label misleads the receiver."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Which request header names the site the request is for, so one server hosting many sites knows which one you want? Type it.",
              answer: "Host",
              accept: ["host", "the host header"],
              why: "The Host header names the site. One IP can serve many sites, so the server reads Host to pick the right one." } },

          { ask: { type: "pick", transfer: true,
              q: "Which of these is a **request** header, not a response header?",
              choices: ["Content-Length", "Cache-Control", "Accept", "Content-Type"],
              answer: 2,
              why: [
                "Content-Length describes the response body's size.",
                "Cache-Control (in a response) governs how the response may be cached.",
                "Accept is sent by the client to say which formats it can handle.",
                "Content-Type describes the body the server is sending back."
              ] } }
        ]
      },

      {
        id: "web-u5-2",
        title: "Content-Type and content negotiation",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "One URL can serve different **representations** of the same thing, and the client says which it prefers. This is **content negotiation**. The request sends `Accept` headers listing what it can take, and the server picks one and labels it:\n\n- `Accept: text/html` → the server returns HTML\n- `Accept: application/json` → the same endpoint returns JSON\n\nThe body's `Content-Type` then tells the client which representation it actually got.",
            ask: { type: "predict", transfer: true,
              q: "A request to `/users/42` sends `Accept: application/json`. What `Content-Type` should a cooperating server return? Type it.",
              answer: "application/json",
              why: "The server honours the Accept header by returning JSON and labelling the body Content-Type: application/json." } },

          { read: "The same mechanism chooses a **language** (`Accept-Language: fr` → French) and an **encoding**, which is the next lesson's topic. Because the *same URL* can return different bytes depending on a request header, the server adds a **`Vary`** header naming which header it varied on — so a cache doesn't hand a French page to someone who asked for English.",
            ask: { type: "pick",
              q: "Why does a server that varies its response by `Accept-Language` send `Vary: Accept-Language`?",
              choices: ["To compress the response", "So caches key the stored copy on that header and don't serve the wrong language", "To redirect to a translated URL", "To set a cookie"],
              answer: 1,
              why: [
                "Vary isn't about compression.",
                "Vary tells caches the response depends on that request header, so they store and match separate copies per language.",
                "There's no redirect; the same URL serves different representations.",
                "Vary has nothing to do with cookies."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A mobile app and a web page both call `GET /report/7`. The app wants JSON; the page wants HTML. How can one URL serve both correctly?",
              choices: ["It can't; they need different URLs", "Each sends a different `Accept` header, and the server returns the matching representation", "The server guesses from the IP address", "Both always get HTML"],
              answer: 1,
              why: [
                "Content negotiation is exactly how one URL serves multiple formats.",
                "The app sends Accept: application/json and the page Accept: text/html; the server returns each what it asked for.",
                "The server negotiates on the Accept header, not the IP.",
                "Serving both HTML would break the app expecting JSON."
              ] } },

          { ask: { type: "explain",
              q: "What is content negotiation, and why does the server send a `Vary` header when it uses it?",
              model: "Content negotiation lets one URL return different representations — JSON or HTML, English or French — chosen from the request's Accept headers. The server sends Vary naming the header it chose on so that caches store a separate copy per value and never serve, say, the JSON version to a client that asked for HTML.",
              rubric: ["Says one URL serves multiple representations chosen from Accept headers", "Gives an example (format or language)", "Says Vary tells caches which request header the response depends on"] } }
        ]
      },

      {
        id: "web-u5-3",
        title: "Compression: gzip, Brotli, and why text shrinks",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "Text on the web is repetitive — HTML tags, CSS property names, JavaScript keywords repeat constantly — and repetitive data **compresses** well. So the client offers `Accept-Encoding: br, gzip`, the server packs the body with one of them, and labels it `Content-Encoding: br` (Brotli) or `gzip`. The browser unpacks it before you ever see it.\n\nThis is negotiation again: the client lists the packings it understands, the server picks one.",
            ask: { type: "predict",
              q: "A request sends `Accept-Encoding: br, gzip` and the server supports both. Which `Content-Encoding` will a modern server usually choose, given it compresses text more? Type it.",
              answer: "br",
              accept: ["brotli"],
              why: "Brotli (br) generally compresses text better than gzip, so a server that supports both usually picks br when the client offers it." } },

          { read: "Compression helps **text** enormously — HTML, CSS, JSON and JavaScript often shrink to a third of their size or less. It barely helps files that are **already compressed**: JPEG, PNG, MP4 and the like are already packed, so gzipping them again saves almost nothing and just wastes CPU.",
            ask: { type: "pick",
              q: "Which response body benefits **least** from gzip or Brotli compression?",
              choices: ["A large HTML page", "A JSON API response", "A JPEG photo", "A CSS file"],
              answer: 2,
              why: [
                "HTML is repetitive text and compresses very well.",
                "JSON is text with repeated keys — it compresses well too.",
                "A JPEG is already compressed, so compressing it again saves almost nothing.",
                "CSS is repetitive text and compresses well."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "Why can text like HTML and JSON compress to a fraction of its size?",
              choices: ["Text uses fewer bytes per character", "It's highly repetitive — tags, keys and keywords recur — and compression replaces repeats with short references", "The browser deletes whitespace", "Text is stored as numbers"],
              answer: 1,
              why: [
                "Character size isn't the point; repetition is.",
                "Compressors find repeated sequences and encode them compactly, and web text repeats a lot.",
                "Minification removes whitespace, but that's separate from the compression negotiated here.",
                "How it's stored isn't why it shrinks."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Which request header does the client use to list the compression formats it can accept? Type it.",
              answer: "Accept-Encoding",
              accept: ["the accept-encoding header"],
              why: "Accept-Encoding lists the packings the client understands (like br, gzip); the server replies with Content-Encoding naming the one it used." } }
        ]
      },

      {
        id: "web-u5-4",
        title: "Content-Length, ranges and the body",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "How does the browser know when the body is finished? Usually the response says up front, with **`Content-Length`**: the exact number of bytes to read. When the server doesn't know the size ahead of time (it's generating the body as it goes), it streams the body in **chunks** instead, ending with a zero-length chunk.",
            ask: { type: "pick",
              q: "What does the `Content-Length` response header tell the browser?",
              choices: ["How long the request took", "Exactly how many bytes the body has, so it knows when it's done", "How many headers there are", "The compression ratio"],
              answer: 1,
              why: [
                "It's about the body's size, not timing.",
                "Content-Length is the byte count of the body, so the browser reads exactly that many and stops.",
                "It counts body bytes, not headers.",
                "It's a raw byte count, not a ratio."
              ] } },

          { read: "Sometimes you want only **part** of a body. A **range request** sends `Range: bytes=0-1023` and the server replies `206 Partial Content` with just those bytes. This is how a paused download **resumes** from where it stopped, and how a video player **seeks** to the middle without downloading the whole file first.",
            ask: { type: "pick",
              q: "You drag a video's scrubber to the halfway point and it starts playing there almost immediately. Which mechanism makes that possible?",
              choices: ["The whole file was already downloaded", "A range request fetches just the bytes around that point (206 Partial Content)", "The video is uncompressed", "DNS resolved faster"],
              answer: 1,
              why: [
                "Seeking works without downloading the whole file, so it isn't that.",
                "The player sends a Range request for the bytes near that timestamp and the server returns 206 with just that slice.",
                "Compression is unrelated to seeking.",
                "DNS has nothing to do with fetching a byte range."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A server returns just the requested byte range of a file. What status code does it use? Type the number.",
              answer: "206",
              why: "206 Partial Content is the success code for a range request — the body is only the requested slice, not the whole resource." } },

          { ask: { type: "pick", transfer: true,
              q: "TCP already delivers a reliable stream of bytes (Unit 3). What does the byte stream underneath HTTP connect to in the `nodejs` course?",
              choices: ["The DNS cache", "Streams and Buffers — reading a body chunk by chunk instead of all at once", "The TLS certificate", "The Vary header"],
              answer: 1,
              why: [
                "DNS is the lookup, not the body transfer.",
                "A chunked HTTP body is read as a stream of buffers — exactly what nodejs Streams & Buffers handles.",
                "The certificate is part of TLS setup, not the body.",
                "Vary is a caching hint, unrelated to streaming bytes."
              ] } }
        ]
      },

      {
        id: "web-quiz-5",
        title: "Unit 5 quiz: Headers and content",
        kind: "quiz", xp: 10,
        brief: "Headers, content negotiation, compression, and the body. 80% to pass.",
        questions: [
          { q: "What does the `Content-Type` response header do?",
            choices: ["Sets the body's size", "Describes what kind of data the body is, so the browser handles it correctly", "Lists all of the different formats that the client is willing to accept in the response", "Controls caching"],
            answer: 1, explain: "Content-Type (text/html, application/json, image/png) tells the receiver how to interpret the body. Mislabel it and the body is handled wrongly." },
          { q: "What is content negotiation?",
            choices: ["Two parties agreeing together on a price for something before the transaction may proceed", "One URL returning different representations chosen from the request's Accept headers", "Compressing the response", "Redirecting to a new URL"],
            answer: 1, explain: "The client's Accept, Accept-Language and Accept-Encoding headers let the server return the format, language or encoding it asked for, all from one URL." },
          { q: "Why does a server send a `Vary` header?",
            choices: ["To speed up TLS", "So caches store a separate copy per value of the request header the response depends on", "To set the status code of the response so the browser can tell how the request actually went", "To list cookies"],
            answer: 1, explain: "Vary names which request header the response varied on, so a cache won't serve the French or gzipped version to a client that asked for something else." },
          { q: "Which body compresses the least with gzip or Brotli?",
            choices: ["An HTML page", "A JSON response", "A PNG image", "A JavaScript file"],
            answer: 2, explain: "A PNG is already compressed, so packing it again saves almost nothing. Repetitive text (HTML, JSON, JS) compresses a lot." },
          { q: "What does `Content-Length` tell the browser?",
            choices: ["How long the request took", "The exact number of bytes in the body", "How many separate redirects happened along the way before the final response came back", "The cache lifetime"],
            answer: 1, explain: "Content-Length is the body's byte count, so the browser knows exactly how much to read and when the response is complete." },
          { q: "What is a range request (with a 206 response) used for?",
            choices: ["Fetching only part of a resource, to resume a download or seek in a video", "Encrypting the body", "Redirecting to a mirror", "Listing out every one of the files that the server currently has available to download"],
            answer: 0, explain: "A Range request asks for a slice of bytes and gets 206 Partial Content, which is how paused downloads resume and video players seek without fetching the whole file." }
        ]
      }
    ]
  });
})();
