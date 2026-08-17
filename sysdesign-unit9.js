window.ACADEMY.addUnit("sysdesign", {
  id: "unit-9",
  title: "API Design & Contracts",
  color: "#eab308",
  icon: "\u{1F50C}",
  description: "The contract is the product; everything downstream is an implementation detail.",
  lessons: [
    {
      id: "l65",
      title: "Designing resources, and the REST maturity ladder",
      intro: "How to model URLs as resources and where a given API sits on the Richardson maturity model.",
      questions: [
        {
          type: "mcq",
          q: "Which URL design best follows resource-oriented REST conventions for cancelling an order?",
          choices: [
            "GET /api?action=cancelOrder&id=812",
            "POST /orders/812/cancellations",
            "POST /cancelOrderById/812",
            "GET /orders/cancel/812/now"
          ],
          answer: 1,
          explain: "REST names things, not procedures: the state change is modelled as a subordinate resource created with POST. GET must never be used to cause a state change."
        },
        {
          type: "order",
          q: "Put the Richardson maturity model levels in order from lowest to highest.",
          items: [
            "Level 0: a single endpoint tunnelling RPC calls over HTTP",
            "Level 1: multiple resources with their own URIs",
            "Level 2: correct use of HTTP verbs and status codes",
            "Level 3: hypermedia controls (HATEOAS) in responses"
          ],
          explain: "Leonard Richardson's model describes increasing use of the web's own machinery: resources, then verbs and status codes, then hypermedia links that tell a client what it can do next."
        },
        {
          type: "truefalse",
          q: "Most APIs marketed as RESTful stop at Richardson level 2 and never implement hypermedia controls.",
          answer: true,
          explain: "Level 2 - resources plus proper verbs and status codes - is the practical industry norm; level 3 HATEOAS is rare because few clients navigate links dynamically."
        },
        {
          type: "fill",
          q: "An HTTP method is called ____ when it has no observable side effects on server state, so GET and HEAD qualify.",
          answer: "safe",
          accept: ["safe", "a safe method", "safe method"],
          explain: "Safety and idempotency are different properties: GET is both safe and idempotent, while DELETE is idempotent but not safe."
        },
        {
          type: "match",
          q: "Match each HTTP method to the property that distinguishes it.",
          pairs: [
            ["GET", "Safe: intended only to read, never to change server state"],
            ["PUT", "Idempotent but not safe: repeating it leaves the same final resource state"],
            ["POST", "Neither safe nor idempotent by default: each call may create another resource"]
          ],
          explain: "Knowing which methods are safe and which are idempotent is what lets proxies cache, clients retry, and gateways replay requests correctly."
        },
        {
          type: "mcq",
          q: "A team exposes /getUser, /getUserOrders, and /updateUserEmail, all accepting POST. Where does this sit on the maturity ladder?",
          choices: [
            "Level 3, because every operation has a distinct URI",
            "Level 2, because it uses POST correctly everywhere",
            "Level 1, since there are several URIs but verbs carry no meaning",
            "Level 0, since HTTP is used only as a transport"
          ],
          answer: 2,
          explain: "There is more than one URI, so it is past level 0, but the URIs are named after procedures and every call is POST, so HTTP verbs and status codes carry no semantics."
        },
        {
          type: "truefalse",
          q: "Putting a verb in the URL path, such as /orders/812/delete, is required for clients that cannot send DELETE.",
          answer: false,
          explain: "It is a workaround, not a requirement. The standard escape hatch is a method-override header on POST; the underlying design still models orders as a resource."
        }
      ]
    },
    {
      id: "l66",
      title: "Pagination: offset vs cursor",
      intro: "Why LIMIT/OFFSET breaks on live data and how keyset pagination fixes it.",
      questions: [
        {
          type: "mcq",
          q: "A client pages through newest-first posts with LIMIT 20 OFFSET 20 while new posts are being inserted. What is the most likely defect?",
          choices: [
            "The client sees duplicate rows it already saw on the previous page",
            "The database silently truncates the result set to one page",
            "The client receives rows in a randomized order every request",
            "The offset causes rows to be locked until the scan finishes"
          ],
          answer: 0,
          explain: "Inserting ahead of the cursor shifts every later row down by one position, so rows from page 1 reappear on page 2. Deletions cause the mirror-image bug: rows get skipped entirely."
        },
        {
          type: "fill",
          q: "Cursor pagination is also known as ____ pagination, because it filters on the sort key of the last row seen instead of counting rows.",
          answer: "keyset",
          accept: ["keyset", "key-set", "key set", "seek"],
          explain: "Keyset (or seek) pagination turns the page boundary into a WHERE predicate such as WHERE (created_at, id) < (:last_ts, :last_id), which an index can seek to directly."
        },
        {
          type: "truefalse",
          q: "OFFSET 100000 is cheap because the database can jump straight to row 100001.",
          answer: false,
          explain: "The engine must generate and discard the skipped rows, so cost grows linearly with the offset. Keyset pagination stays roughly constant per page."
        },
        {
          type: "mcq",
          q: "What must a cursor be built from for keyset pagination to be correct and stable?",
          choices: [
            "A hash of the full page payload returned to the client",
            "The client IP plus a monotonically increasing request counter",
            "The row count consumed so far in this scan session",
            "The exact sort key of the last row, made unique with a tiebreaker"
          ],
          answer: 3,
          explain: "The cursor encodes the ordering columns of the last row. If the sort key is not unique, ties must be broken by a unique column such as the primary key, or rows at the boundary get skipped or repeated."
        },
        {
          type: "match",
          q: "Match each pagination need to the technique that serves it.",
          pairs: [
            ["Deep paging over a large, actively changing feed", "Cursor pagination on an indexed, unique sort key"],
            ["A UI that must render numbered page links and a total", "Offset pagination, accepting its drift on live data"],
            ["A bulk export that must not miss or repeat a row", "A scan pinned to one transaction snapshot for the whole job"]
          ],
          explain: "Offset is not always wrong: it is the only easy way to jump to page 47. It is just the wrong default for large or live sets. A bulk export needs more than a paging trick: it needs a stable snapshot, so every page reads the same version of the table."
        },
        {
          type: "truefalse",
          q: "An opaque, server-encoded cursor string lets the API change its internal ordering strategy without breaking clients.",
          answer: true,
          explain: "If clients treat the cursor as an opaque token rather than parsing a timestamp out of it, the server can change what it encodes. Signing or encoding it also discourages tampering."
        },
        {
          type: "mcq",
          q: "Which response field pair is the healthier default for a cursor-paginated collection endpoint?",
          choices: [
            "total_count and total_pages computed on every request",
            "next_cursor and has_more, with total counts optional or omitted",
            "current_offset and page_size echoed back to the client",
            "last_modified and etag in place of any paging metadata"
          ],
          answer: 1,
          explain: "An exact total often requires a full count scan of the matching set, which costs more than the page itself. Returning next_cursor plus a has_more flag keeps each request bounded."
        }
      ]
    },
    {
      id: "l67",
      title: "Error shapes and status-code discipline",
      intro: "Choosing the right status code and returning a machine-readable error body.",
      questions: [
        {
          type: "mcq",
          q: "A request is well-formed JSON but asks to book a room that is already taken. Which status best fits?",
          choices: [
            "400 Bad Request, since the booking cannot be satisfied",
            "500 Internal Server Error, since the write failed",
            "409 Conflict, since the request conflicts with current resource state",
            "422 Unprocessable Content, since the room id is unusable"
          ],
          answer: 2,
          explain: "409 signals a conflict with the present state of the target resource, which a client may resolve by re-reading and retrying. 400 implies a malformed request; 500 wrongly blames the server; 422 is for a body that is semantically invalid on its own terms, not for one that clashes with state that may change a second later."
        },
        {
          type: "truefalse",
          q: "Returning HTTP 200 with a body containing an error field is fine as long as the body is documented.",
          answer: false,
          explain: "It breaks every generic layer that reads status codes - proxies, retry logic, dashboards, client SDKs - because failures are indistinguishable from successes without parsing the body."
        },
        {
          type: "fill",
          q: "Status codes in the ____ range mean the server failed and the client's request was not necessarily at fault.",
          answer: "5xx",
          accept: ["5xx", "500", "5xx range", "500s"],
          explain: "4xx blames the request; 5xx blames the server. The split matters because it drives whether a client should fix and resend, or simply retry with backoff."
        },
        {
          type: "match",
          q: "Match each status code to the situation it describes.",
          pairs: [
            ["401 Unauthorized", "Credentials are missing or invalid, so identity is unproven"],
            ["403 Forbidden", "Identity is known but lacks permission for this action"],
            ["404 Not Found", "No resource exists at this URI, or its existence is hidden"]
          ],
          explain: "401 is really unauthenticated despite its name; 403 is authenticated but unauthorized. Some APIs deliberately return 404 instead of 403 to avoid confirming that a hidden resource exists."
        },
        {
          type: "mcq",
          q: "Which error body is most useful to a client that must handle failures programmatically?",
          choices: [
            "A stack trace from the server plus the failing SQL statement",
            "A plain-text sentence describing what the user did wrong",
            "A stable machine-readable code, a human message, and per-field details",
            "A numeric code that is unique to each deployment of the service"
          ],
          answer: 2,
          explain: "Clients branch on stable codes, humans read the message, and forms need field-level detail. Leaking stack traces or SQL is a security problem, and per-deploy codes cannot be coded against."
        },
        {
          type: "truefalse",
          q: "RFC 9457 problem details defines a standard JSON error body using fields such as type, title, status, and detail.",
          answer: true,
          explain: "Problem Details for HTTP APIs (RFC 9457, which obsoletes RFC 7807) gives a ready-made error shape with the media type application/problem+json, so teams do not have to invent one."
        },
        {
          type: "mcq",
          q: "A validation library rejects a syntactically valid JSON body because an email field fails a format rule. Which code is the more precise choice?",
          choices: [
            "422 Unprocessable Content",
            "406 Not Acceptable",
            "412 Precondition Failed",
            "400 Bad Request only, since 422 is not a real code"
          ],
          answer: 0,
          explain: "422 means the syntax was understood but the content was semantically invalid. 400 is also defensible and widely used; 406 concerns content negotiation and 412 concerns conditional request headers."
        }
      ]
    },
    {
      id: "l68",
      title: "Versioning and backward compatibility",
      intro: "Which changes are safe to ship in place and which need a new version.",
      questions: [
        {
          type: "mcq",
          q: "Which change to an existing endpoint is backward compatible for current clients?",
          choices: [
            "Renaming the field user_name to username in responses",
            "Making a previously optional request field required",
            "Tightening an existing field from any string to an enum",
            "Adding a new optional response field that old clients ignore"
          ],
          answer: 3,
          explain: "Additive changes are safe when clients tolerate unknown fields. Renaming, removing, or narrowing accepted values breaks callers that were correct yesterday."
        },
        {
          type: "truefalse",
          q: "Adding a new value to an existing enum returned by an API is always a safe, non-breaking change.",
          answer: false,
          explain: "It is additive on the wire but can break clients whose parsers or exhaustive switch statements reject unknown values. Enum extensibility must be part of the documented contract from day one."
        },
        {
          type: "fill",
          q: "The rule that a service should be liberal in what it accepts and conservative in what it sends is called the ____ principle, also known as Postel's law.",
          answer: "robustness",
          accept: ["robustness", "robustness principle", "postel"],
          explain: "Named for Jon Postel. It is useful for tolerating unknown fields, but taken too far it hides producer bugs, so modern practice pairs it with strict schema validation at the edge."
        },
        {
          type: "match",
          q: "Match each versioning strategy to its defining trait.",
          pairs: [
            ["URI versioning (/v2/orders)", "Version is visible in the path, so routing and caching are trivial"],
            ["Header versioning (Accept with a version parameter)", "Keeps URIs stable but hides the version from logs and browsers"],
            ["Date-pinned versions per API key", "Each client is frozen at the contract that existed on its chosen date"]
          ],
          explain: "All three work; they differ in who bears the cost. Date pinning shifts the burden onto the server, which must maintain translation layers between contract dates."
        },
        {
          type: "mcq",
          q: "A field must be removed from a widely used response. What is the safest sequence?",
          choices: [
            "Announce deprecation, keep serving the field, measure remaining callers, then remove",
            "Remove it behind a feature flag and roll forward if error rates stay flat",
            "Null the field first so the shape is stable, then delete it the next day",
            "Remove it in a patch release and publish a migration guide afterward"
          ],
          answer: 0,
          explain: "You cannot remove what you cannot see being used. Deprecation plus per-field usage telemetry turns a breaking change into a measurable one; nulling a field is itself a breaking change for callers that read it."
        },
        {
          type: "truefalse",
          q: "Maintaining two live major versions of an API roughly doubles the surface that every bug fix and security patch must cover.",
          answer: true,
          explain: "This is why teams prefer expand-and-contract migrations over version proliferation: each parallel version is code, tests, docs, and on-call load that must be carried until sunset."
        },
        {
          type: "order",
          q: "Order the steps of an expand-and-contract (parallel change) field migration.",
          items: [
            "Add the new field alongside the old one and populate both",
            "Migrate readers to the new field and mark the old one deprecated",
            "Verify from telemetry that no caller reads the old field",
            "Remove the old field and stop writing it"
          ],
          explain: "Expand, migrate, then contract. Each step is independently deployable and reversible, which is what makes the overall change safe."
        }
      ]
    },
    {
      id: "l69",
      title: "Idempotency keys for unsafe operations",
      intro: "How a client-supplied key makes retrying a POST safe.",
      questions: [
        {
          type: "mcq",
          q: "A payment POST times out at the client but actually succeeded on the server. What does a Stripe-style idempotency key give the client?",
          choices: [
            "A guarantee that the first attempt was rolled back before the retry runs",
            "A promise that the server will finish the request within the timeout",
            "The ability to retry and receive the original result without double-charging",
            "Automatic ordering of the retry ahead of other queued requests"
          ],
          answer: 2,
          explain: "The server records the key with the outcome of the first successful attempt. A retry carrying the same key returns that stored response instead of performing the operation again."
        },
        {
          type: "fill",
          q: "The idempotency key must be generated by the ____ , since only it knows that two requests represent the same logical operation.",
          answer: "client",
          accept: ["client", "caller", "the client"],
          explain: "A server-generated key cannot help: by the time the client has it, the request has already been processed once. Clients typically use a UUID minted before the first attempt."
        },
        {
          type: "truefalse",
          q: "Idempotency keys are unnecessary for PUT and DELETE because those methods are already idempotent by specification.",
          answer: true,
          explain: "Correctly implemented PUT and DELETE are inherently idempotent, so keys add little. Keys exist mainly for POST and other operations whose repetition creates duplicates."
        },
        {
          type: "order",
          q: "Order the server-side steps for handling a request carrying an idempotency key.",
          items: [
            "Look up the key; if a completed record exists, return the stored response",
            "Atomically insert the key in an in-progress state, rejecting concurrent duplicates",
            "Execute the operation and persist its result with the key in one transaction",
            "Return the response and retain the key record for a bounded retention window"
          ],
          explain: "The atomic insert is the load-bearing step: without it, two simultaneous retries both see no record and both execute. A unique constraint on the key column provides that atomicity."
        },
        {
          type: "mcq",
          q: "A client reuses the same idempotency key but sends a different request body. What should a careful server do?",
          choices: [
            "Silently process the new body and overwrite the stored response",
            "Reject the request with an error, since the key was bound to different parameters",
            "Merge the two bodies and apply the union of the requested changes",
            "Ignore the key entirely and treat it as a fresh, unkeyed request"
          ],
          answer: 1,
          explain: "Servers commonly fingerprint the request body alongside the key. A mismatch means a client bug, and processing it anyway would let one key mask two different operations."
        },
        {
          type: "truefalse",
          q: "Idempotency key records must be stored forever to remain correct.",
          answer: false,
          explain: "Keys are retained for a bounded window - typically around a day - long enough to cover realistic retry behavior. Beyond that, a repeat is almost certainly a genuinely new request."
        },
        {
          type: "match",
          q: "Match each concept to its precise meaning.",
          pairs: [
            ["Idempotent operation", "Applying it more than once leaves the same end state as once"],
            ["Deduplication window", "The bounded period during which a repeated key is recognized"],
            ["Exactly-once delivery", "An end-to-end illusion built from at-least-once plus deduplication"]
          ],
          explain: "No network gives exactly-once delivery. What systems actually do is retry until acknowledged and then discard duplicates by key, which is exactly-once effect, not exactly-once delivery."
        }
      ]
    },
    {
      id: "l70",
      title: "Rate limiting and quotas, from the API side",
      intro: "Algorithms, headers, and what to do when a client exceeds its budget.",
      questions: [
        {
          type: "mcq",
          q: "Which limiter algorithm naturally allows a short burst up to a configured capacity while enforcing a steady long-run rate?",
          choices: [
            "Fixed window counter reset at each interval boundary",
            "Token bucket refilled at a constant rate up to a maximum",
            "Leaky bucket that drains queued requests at a fixed rate",
            "Sliding window log storing a timestamp per request"
          ],
          answer: 1,
          explain: "A token bucket accumulates tokens up to its capacity, so an idle client can spend a burst at once and then is limited by the refill rate. A leaky bucket smooths output and does not permit that burst."
        },
        {
          type: "truefalse",
          q: "A fixed window counter can let a client send close to twice the intended limit around a window boundary.",
          answer: true,
          explain: "A client can spend its full allowance at the end of one window and its full allowance at the start of the next. Sliding window counters exist specifically to smooth this edge effect."
        },
        {
          type: "fill",
          q: "The correct status code for a client that has exceeded its rate limit is ____ Too Many Requests.",
          answer: "429",
          accept: ["429", "http 429"],
          explain: "429 tells the client the request was rejected for rate reasons and may succeed later, which is different from 403 (never allowed) or 503 (server is unhealthy)."
        },
        {
          type: "mcq",
          q: "Which response header most directly tells a client how long to wait before retrying?",
          choices: [
            "Cache-Control with a max-age directive",
            "X-Request-Id echoed from the rejected call",
            "Retry-After, in seconds or as an HTTP date",
            "Expires, indicating when the quota resets"
          ],
          answer: 2,
          explain: "Retry-After is the standard signal on 429 and 503. Publishing it removes the client's need to guess, and well-behaved SDKs honor it instead of hammering."
        },
        {
          type: "match",
          q: "Match each limiting scope to the abuse it is meant to contain.",
          pairs: [
            ["Per API key or account", "One paying tenant consuming capacity meant for everyone"],
            ["Per source IP on unauthenticated routes", "Anonymous scraping or credential stuffing before login"],
            ["Per expensive endpoint", "A single costly query starving cheap traffic of resources"]
          ],
          explain: "Real systems layer several scopes. A single global limit either throttles legitimate large tenants or leaves cheap endpoints needlessly restricted."
        },
        {
          type: "truefalse",
          q: "Clients that retry on 429 should use exponential backoff with jitter rather than a fixed retry interval.",
          answer: true,
          explain: "Fixed intervals synchronize retries into a thundering herd that re-hits the limit together. Randomized jitter spreads them, which is why AWS and others document jittered backoff."
        },
        {
          type: "mcq",
          q: "Why is a distributed rate limiter usually built on a shared counter store rather than per-instance memory?",
          choices: [
            "Shared stores are faster than local memory for counter increments",
            "Per-instance counters multiply the effective limit by the number of instances",
            "Local memory cannot represent token bucket state accurately",
            "Shared stores remove the need for any client-side backoff"
          ],
          answer: 1,
          explain: "With N gateway instances each enforcing the limit locally, a client spread across them can send up to N times the intended rate. A shared store, or a coordinated share-per-instance scheme, avoids that."
        }
      ]
    },
    {
      id: "l71",
      title: "gRPC and GraphQL - what each actually wins",
      intro: "The concrete tradeoffs behind the two most common alternatives to plain REST.",
      questions: [
        {
          type: "mcq",
          q: "What does GraphQL primarily solve that a fixed REST endpoint does not?",
          choices: [
            "Guaranteed lower database load for every query shape",
            "Transport-level compression of large response payloads",
            "Client-specified field selection, ending over- and under-fetching",
            "Built-in authorization enforcement at the field level"
          ],
          answer: 2,
          explain: "The client declares exactly which fields it needs, so one endpoint serves many screens without shipping unused data or forcing extra round trips. Authorization is still the server's job to implement."
        },
        {
          type: "fill",
          q: "A naive GraphQL resolver that fires one database query per item in a returned list has the classic ____ problem, usually fixed with a batching loader.",
          answer: "N+1",
          accept: ["N+1", "n+1", "n + 1", "n+1 query", "n+1 queries", "n plus 1", "N plus one"],
          explain: "One query for the list plus one per element. The standard remedy is a per-request batching and caching layer such as DataLoader, which coalesces the child lookups into a single batched query."
        },
        {
          type: "truefalse",
          q: "gRPC's efficiency comes mainly from Protocol Buffers binary encoding plus HTTP/2 multiplexing.",
          answer: true,
          explain: "Protobuf is compact and schema-driven, avoiding field-name repetition and text parsing, while HTTP/2 lets many concurrent calls share one connection with header compression."
        },
        {
          type: "match",
          q: "Match each protocol to the capability it is strongest at.",
          pairs: [
            ["gRPC", "Bidirectional streaming and compact binary calls between services"],
            ["GraphQL", "One flexible query surface for many client screens"],
            ["REST over JSON", "Broad tooling, cacheability, and human-readable debugging"]
          ],
          explain: "These are not ranked; they answer different pressures. Internal service meshes lean gRPC, product clients with varied views lean GraphQL, and public integrations usually stay REST."
        },
        {
          type: "mcq",
          q: "Which is a real operational cost of adopting GraphQL that teams routinely underestimate?",
          choices: [
            "It cannot be secured with standard bearer-token authentication",
            "Arbitrary client queries make cost control and caching much harder",
            "It requires abandoning the existing relational database",
            "It forbids returning errors alongside partial data"
          ],
          answer: 1,
          explain: "A single crafted query can be arbitrarily deep or wide, so teams add depth limits, complexity scoring, and persisted queries. HTTP caching also weakens because most requests are POSTs to one URL."
        },
        {
          type: "truefalse",
          q: "gRPC-Web exists because browsers cannot expose the raw HTTP/2 frame control that standard gRPC requires.",
          answer: true,
          explain: "Browser fetch APIs do not give the low-level control gRPC needs, so gRPC-Web defines a browser-compatible wire format that a proxy translates for the backend, at the cost of some streaming modes."
        },
        {
          type: "mcq",
          q: "Two teams own services that exchange high-volume, strongly typed messages inside one datacenter. Which choice fits best?",
          choices: [
            "GraphQL, so each team can select only the fields it needs",
            "REST with JSON, for the widest debugging tool support",
            "gRPC with a shared .proto contract and generated stubs",
            "Long-polling JSON endpoints to avoid a schema dependency"
          ],
          answer: 2,
          explain: "Internal, high-volume, strongly typed traffic is exactly gRPC's sweet spot: a compiled schema gives both sides generated clients, and binary framing cuts bandwidth and parse cost."
        }
      ]
    },
    {
      id: "l72",
      title: "Webhooks and callbacks",
      intro: "Delivering events to someone else's server without creating a security hole.",
      questions: [
        {
          type: "mcq",
          q: "What is the standard way for a webhook receiver to confirm that a payload really came from the sender?",
          choices: [
            "Check that the source IP belongs to the sender's published range",
            "Verify an HMAC signature over the raw body using a shared secret",
            "Require the sender to include an API key in a query parameter",
            "Confirm the request arrived over TLS with a valid certificate"
          ],
          answer: 1,
          explain: "An HMAC over the exact raw bytes, compared in constant time, proves both origin and integrity. IP allowlists are brittle, TLS only authenticates the receiver, and secrets in URLs leak into logs."
        },
        {
          type: "truefalse",
          q: "Including a timestamp in the signed payload and rejecting old timestamps protects against replay attacks.",
          answer: true,
          explain: "Without it, a captured valid request can be resent forever. Signing a timestamp and refusing anything outside a tolerance window bounds the replay opportunity; recording seen event ids closes it further."
        },
        {
          type: "fill",
          q: "Webhook receivers must be ____ , because at-least-once delivery means the same event can legitimately arrive more than once.",
          answer: "idempotent",
          accept: ["idempotent", "idempotent handlers", "de-duplicating"],
          explain: "Senders retry on timeout or non-2xx responses, and a response can be lost after the work was done. Handlers therefore key on the event id and discard repeats."
        },
        {
          type: "order",
          q: "Order a robust webhook receiver's handling steps.",
          items: [
            "Verify the signature over the raw request body before parsing it",
            "Reject stale timestamps and already-seen event ids",
            "Enqueue the event for asynchronous processing",
            "Return 2xx quickly so the sender does not retry"
          ],
          explain: "Verify before you parse, because parsing untrusted input is itself attack surface, and re-serializing the body can change the bytes the signature covered. Acknowledge fast and do the real work off the request path."
        },
        {
          type: "mcq",
          q: "A receiver's endpoint has been down for an hour. What should a well-designed sender do?",
          choices: [
            "Drop the events, since the receiver was responsible for uptime",
            "Retry immediately in a tight loop until the endpoint recovers",
            "Retry with exponential backoff, then park failures in a dead-letter queue",
            "Hold the connection open until the receiver responds successfully"
          ],
          answer: 2,
          explain: "Backoff avoids hammering a struggling endpoint, and a dead-letter queue plus a replay or history API lets the receiver recover events after a long outage rather than losing them."
        },
        {
          type: "truefalse",
          q: "Webhook delivery order is guaranteed, so a receiver can assume events arrive in the order they occurred.",
          answer: false,
          explain: "Retries and parallel delivery workers reorder events routinely. Receivers should carry a sequence number or version on the payload and ignore updates older than the state they already hold."
        },
        {
          type: "match",
          q: "Match each webhook risk to its mitigation.",
          pairs: [
            ["Forged payloads from an attacker", "HMAC signature over the raw body with a shared secret"],
            ["A captured request resent later", "Signed timestamp plus a rejection window"],
            ["Slow handler work causing sender timeouts", "Acknowledge immediately and process from a queue"]
          ],
          explain: "These three failures account for most broken webhook integrations, and each has a well-understood, cheap mitigation that belongs in the receiver from day one."
        }
      ]
    }
  ]
});
