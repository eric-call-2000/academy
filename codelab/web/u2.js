/* How the Web Works — Unit 2: Finding the server: DNS */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var RESOLVER_STARTER = R`
// --- provided: the network lookup, and a counter so the checks can see it ---
// lookup(name) is the slow part: the recursive resolver walking out to the
// root, TLD and authoritative servers. It returns { ip, ttl } (ttl in
// seconds) and counts as ONE upstream query. Don't change this block.
let __queries = 0;
const ZONE = {
  "example.com": { ip: "93.184.16.1", ttl: 120 },
  "shop.example.com": { ip: "93.184.16.34", ttl: 60 },
  "api.shop.example.com": { ip: "93.184.16.99", ttl: 30 }
};
function lookup(name) {
  __queries++;
  if (!ZONE[name]) throw new Error("NXDOMAIN: no such name " + name);
  return { ip: ZONE[name].ip, ttl: ZONE[name].ttl };
}
function queryCount() { return __queries; }

// --- your job: a caching resolver ---
// resolve(name) returns the IP. Use a cache so a repeat within the name's
// TTL does NOT call lookup again. now() gives the current time in
// milliseconds; a record fetched with ttl seconds is good until
// now() + ttl * 1000.
const cache = new Map();

function resolve(name) {
  // First draft: always asks the network.
  return lookup(name).ip;
}

console.log(resolve("example.com")); // a warm-up lookup for a different name
`;

  var RESOLVER_SOLUTION = R`
// --- provided: the network lookup, and a counter so the checks can see it ---
let __queries = 0;
const ZONE = {
  "example.com": { ip: "93.184.16.1", ttl: 120 },
  "shop.example.com": { ip: "93.184.16.34", ttl: 60 },
  "api.shop.example.com": { ip: "93.184.16.99", ttl: 30 }
};
function lookup(name) {
  __queries++;
  if (!ZONE[name]) throw new Error("NXDOMAIN: no such name " + name);
  return { ip: ZONE[name].ip, ttl: ZONE[name].ttl };
}
function queryCount() { return __queries; }

// --- your job: a caching resolver ---
const cache = new Map();

function resolve(name) {
  const hit = cache.get(name);
  if (hit && hit.expiresAt > now()) {
    return hit.ip;
  }
  const answer = lookup(name);
  cache.set(name, { ip: answer.ip, expiresAt: now() + answer.ttl * 1000 });
  return answer.ip;
}

console.log(resolve("example.com")); // a warm-up lookup for a different name
`;

  window.CODELAB.addUnit("web", {
    id: "web-u2",
    title: "Finding the server: DNS",
    icon: "📇",
    blurb: "The URL names a host, but the network needs a number. Follow a name to an IP address through the resolver chain, and see why the answer is cached and why the first visit is the slow one.",
    cheat: [
      { h: "A name is not an address", lang: "text", code: R`
shop.example.com   ->   93.184.16.34
(what you type)         (what the network routes to)`,
        note: "DNS, the Domain Name System, is the phone book that maps a host name to an IP address. Nothing can connect until this lookup returns." },
      { h: "The resolver chain", lang: "text", code: R`
your resolver -> root server   : where is .com?
              -> .com server   : where is example.com?
              -> example.com   : the IP is 93.184.16.34`,
        note: "Read the name right to left. Each server knows only where the next level down lives; only the authoritative server at the end knows the actual IP." },
      { h: "TTL: cache the answer", lang: "text", code: R`
answer: 93.184.16.34, TTL 300s
-> reuse it for 300 seconds, no lookup
-> after 300s, ask again`,
        note: "Every answer comes with a Time To Live. Resolvers and your own machine cache it until the TTL expires, which is why the second visit is instant." }
    ],
    lessons: [

      {
        id: "web-u2-1",
        title: "A name is not an address",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "You type `shop.example.com`, but the network doesn't route to names — it routes to **IP addresses** like `93.184.16.34`. Before anything else can happen, the browser has to turn the name into an address. That lookup is **DNS**, the Domain Name System: the web's phone book.\n\nA name is read **right to left**, from the most general part to the most specific: `com` is the top-level domain, `example` is registered inside it, and `shop` is a subdomain the owner made.",
            ask: { type: "pick",
              q: "In `mail.google.com`, which part is the top-level domain?",
              choices: ["mail", "google", "com", "the whole thing"],
              answer: 2,
              why: [
                "mail is the most specific part, a subdomain — it's read last, not first.",
                "google is the registered domain, sitting inside .com.",
                "com is the top-level domain, the most general part, read first in the chain.",
                "The name has three levels; the TLD is just the rightmost one."
              ] } },

          { read: "Why a lookup at all, instead of just using addresses? Because names are for people and addresses are for machines, and the address behind a name can change — a site can move servers, or sit behind many, without its name ever changing. DNS is the layer of indirection that lets `example.com` mean \"wherever example.com lives right now.\"",
            ask: { type: "pick", transfer: true,
              q: "A company moves its site to a new server with a new IP address. What has to change for visitors?",
              choices: ["Everyone who visits the site has to learn and memorise the brand-new address", "Just the DNS record; the name stays the same", "The domain name has to be re-registered", "Nothing works until browsers update"],
              answer: 1,
              why: [
                "No one memorises IPs — that's the whole point of names.",
                "The name maps to the new IP by updating one DNS record; visitors keep using the same name.",
                "The name is unchanged; only what it points to changes.",
                "Once the record updates, the name resolves to the new address."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "What does DNS turn a host name into? Give the two-letter abbreviation for the kind of address.",
              answer: "IP",
              accept: ["ip address", "an ip address"],
              why: "DNS maps a name to an IP address — the numeric address the network actually routes packets to." } },

          { ask: { type: "explain",
              q: "Why does the web use names that map to addresses, instead of just using the addresses directly?",
              model: "Names are memorable for people, and the address behind a name can change without the name changing. DNS is a layer of indirection: a site can move servers or use many, and visitors keep using the same name while the record points to wherever it lives now.",
              rubric: ["Says names are easier for people than numeric addresses", "Says the address behind a name can change", "Says the name stays the same while the record is updated"] } }
        ]
      },

      {
        id: "web-u2-2",
        title: "The resolver chain: root, TLD, authoritative",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "No single server knows every name on the internet. The lookup is a **chain**. Your machine asks a **recursive resolver** (usually your ISP's or one like `1.1.1.1`), and that resolver walks down the hierarchy for you:\n\n- the **root** servers know where each top-level domain (`.com`, `.org`) lives\n- the **TLD** server for `.com` knows where each `example.com` lives\n- the **authoritative** server for `example.com` knows its actual IP\n\nEach step hands back not the answer, but where to ask next.",
            ask: { type: "order",
              q: "Order the servers the resolver asks to look up `shop.example.com`, first to last.",
              lines: ["Root server: the .com servers are over there", "The .com (TLD) server: example.com's server is over there", "example.com's authoritative server: the IP is 93.184.16.34"],
              why: "The resolver starts at the root (which knows the TLDs), is sent to the .com server (which knows the domains under .com), and is sent to example.com's own server, which finally knows the IP." } },

          { read: "The key idea: each server only knows **one level down**. The root server does **not** know `example.com`'s IP — it knows only where the `.com` servers are. The `.com` server doesn't know the IP either — only where `example.com`'s authoritative server is. Only that last server, the authoritative one, holds the real answer.",
            ask: { type: "pick",
              q: "What does a **root** DNS server know about `shop.example.com`?",
              choices: ["Its IP address", "Where the `.com` servers are", "Where `example.com`'s server is", "Nothing about it at all"],
              answer: 1,
              why: [
                "The root never holds a site's IP; it's the top of the hierarchy.",
                "The root knows where each top-level domain's servers live — here, the `.com` servers.",
                "That's what the `.com` TLD server knows, not the root.",
                "It knows the first step: where `.com` lives."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "Which server actually holds the final IP address for `example.com`?",
              choices: ["The root server", "The `.com` TLD server", "`example.com`'s authoritative server", "The recursive resolver that walks the whole chain on your behalf"],
              answer: 2,
              why: [
                "The root only points toward the TLD.",
                "The TLD only points toward the domain's own server.",
                "The authoritative server for the domain is the one that holds its records, including its IP.",
                "The resolver does the asking and caches the result, but the answer originates at the authoritative server."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "To resolve `blog.news.example.org`, which top-level domain's servers does the root point the resolver to? Type it (including the dot).",
              answer: ".org",
              accept: ["org"],
              why: "The rightmost label is the TLD. Here it's .org, so the root sends the resolver to the .org servers first." } },

          { ask: { type: "explain",
              q: "Why is DNS built as a chain of servers, each knowing only one level, instead of one big server with every name?",
              model: "No single machine could hold or update every name on the internet, and it would be a single point of failure. Splitting it so the root knows the TLDs, each TLD knows its domains, and each domain runs its own authoritative server spreads the load and lets each owner manage their own records.",
              rubric: ["Says one server couldn't hold or keep up with every name", "Says the hierarchy splits the work across levels", "Mentions each level/owner managing its own part (or avoiding a single point of failure)"] } }
        ]
      },

      {
        id: "web-u2-3",
        title: "TTL: why the second visit skips all that",
        kind: "js", chip: "WEB", xp: 15, mins: 15, clock: 0,
        brief: "Walking the whole root → TLD → authoritative chain for every request would be painfully slow. It only happens once, because every DNS answer comes with a **TTL** (Time To Live) — how many seconds it may be reused. Your machine and the resolvers cache the answer and skip the lookup until the TTL runs out.\n\nBuild a caching `resolve(name)`. The provided `lookup(name)` is the slow chain-walk: it returns `{ ip, ttl }` (ttl in **seconds**) and counts as one upstream query. Your resolver should:\n\n- call `lookup` only when it has no fresh answer, then cache it\n- on a repeat within the TTL, return the cached IP and make **no** new query\n- treat a record fetched with `ttl` seconds as good until `now() + ttl * 1000` (`now()` is the clock, in milliseconds)\n\nThe checks read `queryCount()` and move time forward with `T.advance(ms)` to expire an entry. Don't read the real clock — use `now()`.",
        steps: [
          { text: "The first lookup for a name returns its IP and makes exactly one upstream query.",
            test: R`
var before = queryCount();
T.eq(resolve("shop.example.com"), "93.184.16.34", "Returns the IP");
T.eq(queryCount() - before, 1, "A cold name costs one upstream query");
` },
          { text: "A repeat within the TTL is served from the cache, with no new query.",
            test: R`
resolve("shop.example.com");
var before = queryCount();
T.eq(resolve("shop.example.com"), "93.184.16.34", "Still the right IP");
T.advance(59000);
resolve("shop.example.com");
T.eq(queryCount() - before, 0, "Within the 60s TTL, no lookup happens");
` },
          { text: "Once the TTL expires, the next resolve looks it up again.",
            test: R`
resolve("shop.example.com");
var before = queryCount();
T.advance(61000);
T.eq(resolve("shop.example.com"), "93.184.16.34", "Re-resolves to the same IP");
T.eq(queryCount() - before, 1, "Past the 60s TTL, one fresh lookup");
` },
          { text: "Different names are cached independently, each with its own TTL.",
            test: R`
var before = queryCount();
T.eq(resolve("api.shop.example.com"), "93.184.16.99", "A new name is looked up");
resolve("api.shop.example.com");
T.eq(queryCount() - before, 1, "The second call is cached");
T.advance(31000);
resolve("api.shop.example.com");
T.eq(queryCount() - before, 2, "Its shorter 30s TTL expires on its own schedule");
` }
        ],
        files: [{ name: "script.js", content: RESOLVER_STARTER }],
        solution: { "script.js": RESOLVER_SOLUTION },
        hints: [
          "Store each answer as `{ ip, expiresAt }` in the cache, where `expiresAt = now() + answer.ttl * 1000`.",
          "At the top of resolve, read the cache: if there's an entry and `entry.expiresAt > now()`, return `entry.ip` without calling lookup.",
          "Otherwise call lookup, save the new entry with a fresh expiresAt, and return its ip."
        ]
      },

      {
        id: "web-u2-4",
        title: "When DNS is the reason it's slow",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Because the answer is cached, DNS is usually invisible — but it shows up in two situations worth recognising.\n\nThe **first visit** to a site you've never opened has nothing cached, so the full chain runs before the connection can even begin. That's part of why a brand-new site \"feels\" slower on the very first load and snappy afterwards.",
            ask: { type: "pick",
              q: "A page is slow the very first time you open it, then fast on every later visit the same day. Which is a likely cause?",
              choices: ["The server itself somehow warmed up and became much faster right after it handled your first visit", "The first load paid for a cold DNS lookup (and connection) that later loads reused from cache", "DNS is slow only in the morning", "The browser downloads the whole site once, then nothing"],
              answer: 1,
              why: [
                "The server didn't change; the client's caches did.",
                "The first load walks the DNS chain and opens a fresh connection; later loads reuse the cached IP and often the connection.",
                "Time of day doesn't enter into it; the cache does.",
                "Each visit still fetches resources; what changed is the cached DNS answer and connection."
              ] } },

          { read: "The second situation is **change**. Because answers are cached for their whole TTL, an update to a DNS record isn't seen by everyone at once — resolvers keep serving the old answer until their cached copy expires. A record with a one-day TTL can take up to a day to fully take effect. That's why teams **lower the TTL before** a planned move, so the switch propagates quickly.",
            ask: { type: "pick", transfer: true,
              q: "You change a domain's IP, but some visitors still reach the old server for hours. Why?",
              choices: ["Their browsers are broken", "Resolvers cached the old record and keep serving it until its TTL expires", "The new server has not finished registering the domain name with the registrar just yet", "DNS changes always take exactly 24 hours"],
              answer: 1,
              why: [
                "It's not a bug; it's caching working as designed.",
                "The old answer lives in caches until its TTL runs out, so the change spreads gradually.",
                "Registration isn't the issue; the record was updated, but cached copies linger.",
                "The delay is however long the TTL was, not a fixed 24 hours."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A team is moving servers next week and wants the switch to take effect fast. Should they raise or lower the record's TTL beforehand?",
              answer: "lower",
              accept: ["lower it", "lower the ttl", "decrease", "reduce"],
              why: "A lower TTL means caches hold the answer for less time, so the new record propagates quickly once it changes. They lower it a day or two before, then raise it again after." } },

          { read: "One more distinction: DNS is separate from configuring your domain — buying a name, pointing its records at your host. That setup lives in the **Deploying Your App** course. This unit is about what a *lookup* does, not how you register records.",
            ask: { type: "pick", transfer: true,
              q: "Which of these is a DNS **resolution** concern, the subject of this unit?",
              choices: ["Choosing which domain registrar company you want to buy the name through", "How a name is turned into an IP through the resolver chain", "Buying the domain name", "Setting up billing for your host"],
              answer: 1,
              why: [
                "Choosing a registrar is part of setting up a domain — the Deploying course.",
                "Turning a name into an IP via the chain is DNS resolution, what this unit covers.",
                "Buying a name is registration, not resolution.",
                "Billing is unrelated to how a lookup works."
              ] } }
        ]
      },

      {
        id: "web-quiz-2",
        title: "Unit 2 quiz: DNS",
        kind: "quiz", xp: 10,
        brief: "Names and addresses, the resolver chain, and TTL caching. 80% to pass.",
        questions: [
          { q: "What does DNS do?",
            choices: ["Encrypts the connection so that nobody in between can read it", "Maps a host name to an IP address", "Splits a URL into parts", "Compresses the response"],
            answer: 1, explain: "DNS is the lookup that turns a name like example.com into a numeric IP address the network can route to. It happens before the connection opens." },
          { q: "What does a root DNS server know about `shop.example.com`?",
            choices: ["Its IP address", "Where the `.com` servers are", "Where `example.com`'s server is", "Its TTL"],
            answer: 1, explain: "Each level knows only the next one down. The root knows where the TLDs (.com) live; the .com server knows where example.com lives; only the authoritative server holds the IP." },
          { q: "Which server holds the actual IP address for a domain?",
            choices: ["The root server", "The TLD server", "The domain's authoritative server", "Every single server all along the resolution chain"],
            answer: 2, explain: "The authoritative server for the domain holds its records. The root and TLD servers only point the resolver toward the next step." },
          { q: "What is a DNS record's TTL?",
            choices: ["The version number of the IP address that the lookup returned", "How long the answer may be cached before asking again", "The time the lookup took", "The number of servers in the chain"],
            answer: 1, explain: "TTL (Time To Live) is how many seconds a resolver or your machine may reuse the cached answer before doing the lookup again." },
          { q: "Why is a site often slow on its very first visit but fast afterwards the same day?",
            choices: ["The server warms up", "The first visit pays for a cold DNS lookup and connection that later visits reuse from cache", "DNS resolution only starts working properly after you have visited the site at least once before", "The browser caches the entire site after one load"],
            answer: 1, explain: "Nothing is cached on the first visit, so the DNS chain runs and a fresh connection opens; later visits reuse the cached IP and connection." },
          { q: "A team plans to move their site to a new IP next week. What should they do to the DNS record's TTL beforehand, and why?",
            choices: ["Raise it, so the old cached answer is kept around and lasts much longer everywhere", "Lower it, so caches refresh sooner and the change propagates quickly", "Delete it, so there's no cache", "Nothing; TTL can't be changed"],
            answer: 1, explain: "A lower TTL means cached copies expire sooner, so when the record changes the new IP spreads quickly instead of lingering for the old TTL's duration." }
        ]
      }
    ]
  });
})();
