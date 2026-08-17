window.ACADEMY.addUnit("sysdesign", {
  id: "unit-13",
  title: "Security by Design",
  color: "#eab308",
  icon: "\u{1F510}",
  description: "Security is an architecture property, not a checklist you run at the end.",
  lessons: [
    {
      id: "l97",
      title: "Threat modeling: assets, actors, trust boundaries",
      intro: "How to reason about what you are protecting, from whom, and where trust changes hands.",
      questions: [
        {
          type: "mcq",
          q: "What is a trust boundary in a threat model?",
          choices: [
            "The physical perimeter of the datacenter that hosts the service",
            "The maximum number of privileged accounts an organization allows",
            "A point where data or control crosses between components with different privilege or trust levels",
            "The list of third-party vendors that have signed a security addendum"
          ],
          answer: 2,
          explain: "A trust boundary is where data crosses from one trust level to another, such as browser to server or service to database. Those crossings are exactly where validation and authorization must be enforced."
        },
        {
          type: "fill",
          q: "The STRIDE mnemonic covers spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of ____.",
          answer: "privilege",
          accept: ["privilege", "privileges", "privilege escalation"],
          explain: "STRIDE, developed at Microsoft, is a checklist of threat categories used to walk a data flow diagram systematically instead of brainstorming at random."
        },
        {
          type: "order",
          q: "Order the steps of a basic threat modeling exercise.",
          items: [
            "Diagram the system and mark where data flows cross trust boundaries",
            "Enumerate threats against each asset and boundary crossing",
            "Rank the threats by likelihood and impact",
            "Choose mitigations and record the risks you accept"
          ],
          explain: "You cannot enumerate threats meaningfully until you have drawn the system. Ranking before mitigating keeps effort proportional to risk instead of spread evenly."
        },
        {
          type: "truefalse",
          q: "Client-side validation can be relied on as a security control because the client code is written by your own team.",
          answer: false,
          explain: "Anything running on a machine the attacker controls can be modified or bypassed. Client validation is a usability feature; the server must revalidate every input."
        },
        {
          type: "match",
          q: "Match each threat modeling term to its meaning.",
          pairs: [
            ["Asset", "Something of value you are trying to protect, such as user data or funds"],
            ["Threat actor", "A party with motive and capability to attack, such as an insider or a criminal group"],
            ["Attack surface", "The total set of entry points an attacker can reach and interact with"]
          ],
          explain: "Assets are what you protect, actors are who attacks, and attack surface is where they can touch the system. Reducing attack surface is one of the cheapest defenses available."
        },
        {
          type: "mcq",
          q: "A public API endpoint returns different error text for a valid versus invalid account id. Which threat modeling concern does this most directly raise?",
          choices: [
            "Information disclosure, since the response leaks whether an account exists",
            "Denial of service, since error handling costs extra CPU cycles",
            "Repudiation, since the caller can deny having made the request",
            "Tampering, since the caller can modify the error message in transit"
          ],
          answer: 0,
          explain: "Differential responses leak internal state. That is information disclosure in STRIDE terms and it enables account enumeration."
        },
        {
          type: "truefalse",
          q: "A threat model should be revisited when the architecture changes, not written once at project start and filed away.",
          answer: true,
          explain: "New integrations, new data stores, and new user roles all create new boundary crossings. A stale threat model describes a system that no longer exists."
        }
      ]
    },
    {
      id: "l98",
      title: "Authentication: sessions, tokens, OAuth 2.0 and OIDC",
      intro: "Proving who a caller is, and the standards people routinely misapply when doing it.",
      questions: [
        {
          type: "mcq",
          q: "Which statement about OAuth 2.0 is correct?",
          choices: [
            "It is an authentication protocol that returns a verified user identity",
            "It is a delegated authorization framework; OpenID Connect is the identity layer built on top of it",
            "It replaces TLS by encrypting tokens at the application layer",
            "It defines a standard password hashing scheme for identity providers"
          ],
          answer: 1,
          explain: "OAuth 2.0 lets a user delegate access to a resource without sharing credentials. It says nothing standard about who the user is; OpenID Connect adds the ID token and userinfo endpoint for that."
        },
        {
          type: "fill",
          q: "OpenID Connect returns a signed JWT called the ____ token, which carries claims about the authenticated user.",
          answer: "ID",
          accept: ["ID", "id", "identity", "ID token", "id token"],
          explain: "The ID token is the piece OAuth 2.0 alone does not give you. An access token is for calling APIs and should never be parsed by the client as proof of identity."
        },
        {
          type: "truefalse",
          q: "Authentication answers who you are, and authorization answers what you are permitted to do.",
          answer: true,
          explain: "Conflating the two is the root of many access control bugs. A correctly authenticated user can still be entirely unauthorized for the action they attempted."
        },
        {
          type: "mcq",
          q: "Why should passwords be hashed with bcrypt, scrypt, or Argon2 rather than SHA-256?",
          choices: [
            "SHA-256 output is too short to store safely in a database column",
            "SHA-256 is reversible, so an attacker can decrypt the stored digest directly",
            "SHA-256 lacks a standard library implementation in most languages",
            "Those KDFs are deliberately slow and salted, so offline guessing costs the attacker far more per candidate"
          ],
          answer: 3,
          explain: "Fast hashes let an attacker test enormous numbers of candidate passwords per second. A tunable work factor plus a per-user salt is the entire point of a password KDF."
        },
        {
          type: "match",
          q: "Match each credential concept to its role.",
          pairs: [
            ["Salt", "Unique per-password value that defeats precomputed rainbow tables"],
            ["Refresh token", "Long-lived credential exchanged for new short-lived access tokens"],
            ["Session cookie", "Browser-held identifier that the server maps to server-side session state"]
          ],
          explain: "Each solves a different problem. Confusing a refresh token with a session cookie leads to tokens that live far longer than intended in browser storage."
        },
        {
          type: "order",
          q: "Order the OAuth 2.0 authorization code flow steps.",
          items: [
            "Client redirects the user to the authorization server",
            "User authenticates and consents to the requested scopes",
            "Authorization server redirects back with a short-lived authorization code",
            "Client exchanges the code plus its secret or PKCE verifier for tokens"
          ],
          explain: "The code exchange happens on a separate back channel so the token itself never travels through the browser URL. PKCE extends this protection to public clients that cannot hold a secret."
        },
        {
          type: "mcq",
          q: "A stateless JWT access token is issued with a one hour lifetime and no server-side lookup. What is the main consequence?",
          choices: [
            "The token cannot carry any claims about the user",
            "Revocation is not immediate; a stolen or logged-out token stays valid until it expires",
            "The signature can be forged by anyone who can read the token",
            "The token must be re-signed by the client on every request"
          ],
          answer: 1,
          explain: "Statelessness buys you a skipped database read and costs you instant revocation. Short lifetimes plus a deny-list are the usual compromises."
        }
      ]
    },
    {
      id: "l99",
      title: "Authorization models: RBAC and ABAC",
      intro: "Deciding what an authenticated caller may do, and where that decision belongs.",
      questions: [
        {
          type: "mcq",
          q: "What is the core difference between RBAC and ABAC?",
          choices: [
            "RBAC works only for internal tools while ABAC is required for public APIs",
            "RBAC assigns permissions through named roles; ABAC evaluates policies over attributes of the subject, resource, action, and environment",
            "RBAC is enforced in the database while ABAC is enforced in the load balancer",
            "RBAC requires encryption at rest while ABAC does not"
          ],
          answer: 1,
          explain: "RBAC is coarse and easy to reason about. ABAC handles rules like owner of the record, during business hours, from a managed device, which do not compress into role names."
        },
        {
          type: "truefalse",
          q: "Broken access control has ranked as the number one category in the OWASP Top 10.",
          answer: true,
          explain: "It is both extremely common and easy to miss, because a correct-looking endpoint with a missing ownership check gives no visible error at all."
        },
        {
          type: "fill",
          q: "Changing a URL from /orders/1001 to /orders/1002 to read someone else's order is an insecure direct object ____ vulnerability.",
          answer: "reference",
          accept: ["reference", "references", "reference (IDOR)", "idor"],
          explain: "IDOR is the classic broken access control bug. The fix is an ownership or policy check on every request, not unguessable identifiers."
        },
        {
          type: "mcq",
          q: "Where should the authorization decision for a resource ideally be enforced?",
          choices: [
            "In the frontend router, which already knows the user's role",
            "In the API gateway alone, since it sees every request",
            "In the service that owns the resource, on every request, after authentication",
            "In a nightly audit job that revokes access retroactively"
          ],
          answer: 2,
          explain: "Only the owning service knows the resource's attributes, such as who created it. Gateways can enforce coarse rules but cannot answer per-object ownership questions."
        },
        {
          type: "match",
          q: "Match each authorization concept to its description.",
          pairs: [
            ["Policy decision point", "The component that evaluates rules and returns permit or deny"],
            ["Policy enforcement point", "The component that intercepts the request and applies the decision"],
            ["Role explosion", "Proliferation of narrow roles created to encode conditions RBAC cannot express"]
          ],
          explain: "Separating decision from enforcement lets you change policy without redeploying every service. Role explosion is the usual symptom that you needed attributes, not more roles."
        },
        {
          type: "truefalse",
          q: "Hiding a button in the user interface is an acceptable substitute for a server-side permission check when the audience is internal employees.",
          answer: false,
          explain: "The endpoint is still reachable directly. Insider threat and simple curiosity both defeat interface-only controls, and audit logs will show the access as legitimate."
        },
        {
          type: "mcq",
          q: "A rule states that a physician may read a chart only for patients currently assigned to them. Which model expresses this most directly?",
          choices: [
            "ABAC, comparing the subject's identity to the assignment attribute on the record",
            "RBAC, by creating a physician role with chart read permission",
            "RBAC, by creating one role per patient and granting it to the physician",
            "Neither; this rule must be enforced by database column-level grants"
          ],
          answer: 0,
          explain: "The condition depends on a relationship between the subject and the specific record, which is exactly what attribute-based policy is for. Encoding it as roles produces one role per patient."
        }
      ]
    },
    {
      id: "l100",
      title: "Secrets management and key rotation",
      intro: "Where credentials live, how they reach running code, and how you replace them without downtime.",
      questions: [
        {
          type: "mcq",
          q: "Why is committing a secret to a git repository dangerous even after you delete it in a later commit?",
          choices: [
            "Git compresses deleted blobs in a way that corrupts them",
            "The value remains in history, in clones, and in any fork or CI cache that pulled it",
            "Deleting a file rewrites the repository default branch protection rules",
            "The secret becomes readable only to users with write access, which is most of the team"
          ],
          answer: 1,
          explain: "History is the whole point of git. Once a secret is pushed anywhere, assume it is disclosed and rotate it rather than trying to scrub every copy."
        },
        {
          type: "truefalse",
          q: "A key rotation procedure should support two valid keys at once during the transition window.",
          answer: true,
          explain: "Overlapping validity lets issuers move to the new key while verifiers still accept the old one, which is what makes rotation possible without a synchronized flag day."
        },
        {
          type: "fill",
          q: "A secret with no long-lived stored value, minted on demand for a short lifetime, is called an ____ credential.",
          answer: "ephemeral",
          accept: ["ephemeral", "short-lived", "dynamic", "temporary"],
          explain: "Short-lived dynamically issued credentials shrink the window in which a leaked value is useful, which is often a bigger win than making the value harder to guess."
        },
        {
          type: "order",
          q: "Order a safe rotation of a signing key used by many verifiers.",
          items: [
            "Publish the new public key alongside the old one so verifiers accept both",
            "Wait for verifiers to refresh their key sets",
            "Switch the issuer to sign with the new key",
            "Retire the old key once no valid tokens signed with it remain"
          ],
          explain: "Publishing before signing prevents a window where issued tokens cannot be verified. Retiring only after the maximum token lifetime elapses avoids rejecting still-valid tokens."
        },
        {
          type: "mcq",
          q: "Which practice best limits damage from a leaked application secret?",
          choices: [
            "Storing the secret base64 encoded in the deployment manifest",
            "Requiring engineers to memorize secrets rather than write them down",
            "Renaming the environment variable to something non-obvious",
            "Scoping the credential narrowly and rotating it automatically on a schedule"
          ],
          answer: 3,
          explain: "Encoding and renaming are obfuscation, not protection. Narrow scope limits what a leak reaches and automatic rotation limits how long it works."
        },
        {
          type: "match",
          q: "Match each secrets handling mechanism to what it provides.",
          pairs: [
            ["Envelope encryption", "Data encrypted with a data key, which is itself encrypted by a master key"],
            ["Secret scanning in CI", "Automated detection of credential patterns before they reach the default branch"],
            ["Workload identity", "A running service proving what it is to obtain credentials without a stored secret"]
          ],
          explain: "Envelope encryption makes rotating the master key cheap because only the wrapped data keys must be re-encrypted, not the whole dataset."
        },
        {
          type: "truefalse",
          q: "Passing a secret as a command-line argument is safe because the process exits quickly.",
          answer: false,
          explain: "Command lines are visible to other processes on the host and are commonly captured in shell history, process listings, and crash or audit logs."
        }
      ]
    },
    {
      id: "l101",
      title: "The OWASP Top 10, in practice",
      intro: "The recurring web vulnerability classes and the concrete mechanisms that actually fix them.",
      questions: [
        {
          type: "mcq",
          q: "What is the correct fix for SQL injection?",
          choices: [
            "Parameterized queries, so user input is never parsed as SQL",
            "Escaping quotes and backslashes in every user-supplied string",
            "Rejecting requests containing SQL keywords such as SELECT or UNION",
            "Running the database with a read-only replica for user queries"
          ],
          answer: 0,
          explain: "Parameterized queries send the SQL structure and the data over separate channels, so no amount of clever input can change the query's shape. Escaping is error-prone and dialect-specific."
        },
        {
          type: "fill",
          q: "Injecting attacker-controlled script that runs in another user's browser session is called cross-site ____.",
          answer: "scripting",
          accept: ["scripting", "scripting (XSS)", "xss"],
          explain: "Contextual output encoding plus a strict Content Security Policy are the durable defenses. Blocklisting tag names has been defeated repeatedly."
        },
        {
          type: "truefalse",
          q: "The OWASP Top 10 is an awareness document of common risk categories rather than a complete security standard you can certify against.",
          answer: true,
          explain: "It is a consensus list of the categories seen most often, including broken access control at the top. Treating it as the finish line is a mistake; a verification standard such as ASVS is the tool for exhaustive coverage."
        },
        {
          type: "mcq",
          q: "An application fetches a URL supplied by the user to generate a link preview. Which vulnerability class does this most directly risk?",
          choices: [
            "Cross-site request forgery, since the request originates from a browser",
            "Server-side request forgery, letting the attacker reach internal hosts and metadata endpoints",
            "Insecure deserialization, since the response body is parsed",
            "Security misconfiguration, since preview generation is optional"
          ],
          answer: 1,
          explain: "SSRF turns your server into a proxy inside your own network. Allow-list destinations and block link-local and private ranges, including after DNS resolution and redirects."
        },
        {
          type: "match",
          q: "Match each vulnerability to its primary mitigation.",
          pairs: [
            ["SQL injection", "Parameterized queries that separate code from data"],
            ["Cross-site request forgery", "Anti-forgery tokens and SameSite cookie attributes"],
            ["Vulnerable dependencies", "Automated inventory and patching driven by a software bill of materials"]
          ],
          explain: "Each class has a specific structural fix. Generic input filtering is a weak substitute for any of them."
        },
        {
          type: "mcq",
          q: "Why is a blocklist of dangerous input patterns a weak primary defense?",
          choices: [
            "Blocklists cannot be expressed in regular expressions",
            "Blocklists require encrypting the request body before inspection",
            "Blocklists must enumerate every attack encoding, and attackers only need one the list missed",
            "Blocklists are prohibited by the OWASP standards documents"
          ],
          answer: 2,
          explain: "Defense by enumeration of the bad requires completeness you can never prove. Structural fixes such as parameterization and output encoding do not depend on predicting the payload."
        },
        {
          type: "truefalse",
          q: "Cryptographic failures in the Top 10 include transmitting sensitive data without TLS and using outdated or homegrown algorithms.",
          answer: true,
          explain: "The category covers everything from missing encryption to weak modes and hardcoded keys. Never roll your own crypto; use vetted libraries and standard constructions."
        }
      ]
    },
    {
      id: "l102",
      title: "Encryption in transit and at rest",
      intro: "What TLS and disk encryption actually protect against, and where each one stops helping.",
      questions: [
        {
          type: "mcq",
          q: "What threat does full-disk or volume encryption at rest primarily address?",
          choices: [
            "An application bug that returns another user's records",
            "Physical loss of the media, such as a stolen drive or a decommissioned disk",
            "An attacker with valid database credentials querying the tables",
            "A compromised TLS certificate authority issuing a rogue certificate"
          ],
          answer: 1,
          explain: "Once the volume is mounted and the service is running, encryption at rest is transparent to anything with legitimate access. It defends the offline copy, not the live query path."
        },
        {
          type: "truefalse",
          q: "TLS provides confidentiality, integrity, and server authentication for data in transit.",
          answer: true,
          explain: "Authentication of the server via its certificate chain is what stops an attacker from simply terminating the encrypted channel themselves."
        },
        {
          type: "fill",
          q: "A key exchange property where compromise of the long-term private key does not decrypt past recorded sessions is called forward ____.",
          answer: "secrecy",
          accept: ["secrecy", "secrecy (PFS)", "perfect forward secrecy"],
          explain: "Ephemeral Diffie-Hellman exchanges give each session its own key, so a later key compromise does not unlock previously captured traffic."
        },
        {
          type: "mcq",
          q: "Why should you prefer an authenticated encryption mode such as AES-GCM over a plain confidentiality-only mode?",
          choices: [
            "It uses a shorter key, which reduces storage cost",
            "It removes the need to generate a unique nonce per message",
            "It detects tampering with the ciphertext instead of silently decrypting altered data",
            "It allows the same ciphertext to be decrypted with multiple different keys"
          ],
          answer: 2,
          explain: "Confidentiality without integrity lets an attacker flip bits in ciphertext and have the plaintext change in predictable ways. AEAD modes bind an authentication tag to the ciphertext."
        },
        {
          type: "match",
          q: "Match each protection to the exposure it addresses.",
          pairs: [
            ["TLS between services", "Network eavesdropping and tampering inside and outside your perimeter"],
            ["Application-level field encryption", "A specific sensitive column being readable by anyone with database access"],
            ["Hashing with a slow salted KDF", "Password verification without ever storing a recoverable secret"]
          ],
          explain: "Note that password hashing is not encryption at all: it is deliberately one-way, because the system never needs to recover the original value."
        },
        {
          type: "truefalse",
          q: "Because encryption at rest is enabled on the database volume, an SQL injection flaw cannot expose customer data.",
          answer: false,
          explain: "The database decrypts transparently for authorized queries, and an injected query is authorized. At-rest encryption does nothing against application-layer compromise."
        },
        {
          type: "mcq",
          q: "A team wants to design a custom stream cipher to avoid library dependencies. What is the correct guidance?",
          choices: [
            "Acceptable if the algorithm is kept secret from users and reviewed internally",
            "Acceptable for internal traffic only, since attackers rarely target internal links",
            "Do not roll your own crypto; use vetted implementations of standard primitives",
            "Acceptable if the key length matches or exceeds 256 bits"
          ],
          answer: 2,
          explain: "Cryptographic strength comes from public analysis over years, not from secrecy of design. Most real breaks come from implementation details rather than the core algorithm."
        }
      ]
    },
    {
      id: "l103",
      title: "Least privilege and shrinking the blast radius",
      intro: "Designing so that one compromised component does not hand over the whole system.",
      questions: [
        {
          type: "fill",
          q: "The principle that every component should have only the permissions it needs to do its job is called least ____.",
          answer: "privilege",
          accept: ["privilege", "privileges"],
          explain: "Saltzer and Schroeder named this in their 1975 paper on protection in computer systems, alongside fail-safe defaults and economy of mechanism."
        },
        {
          type: "mcq",
          q: "A read-only reporting service currently uses the same database credentials as the write path. What is the most direct least-privilege improvement?",
          choices: [
            "Rate limit the reporting service so it cannot issue many queries",
            "Give the reporting service its own account with read-only grants on the tables it needs",
            "Move the reporting service to a different availability zone",
            "Cache reporting results so the database is queried less often"
          ],
          answer: 1,
          explain: "A separate scoped identity means a compromise of the reporting service cannot write or drop data, and its activity is separable in audit logs."
        },
        {
          type: "truefalse",
          q: "Blast radius describes how much of a system an attacker can reach after compromising one component.",
          answer: true,
          explain: "Segmentation, scoped credentials, and separate accounts all exist to keep that radius small, because assuming no component will ever be compromised is not a plan."
        },
        {
          type: "match",
          q: "Match each containment technique to its effect.",
          pairs: [
            ["Network segmentation", "Prevents a compromised host from reaching services it never needed to call"],
            ["Separate deployment accounts per environment", "Stops a staging compromise from touching production resources"],
            ["Break-glass account with alerting", "Provides rare emergency access that is loud and reviewable when used"]
          ],
          explain: "Each narrows a different dimension: network reach, environment boundary, and privileged access over time."
        },
        {
          type: "mcq",
          q: "Which design most reduces the value of stealing a single service's credentials?",
          choices: [
            "Rotating credentials once per year on a fixed calendar date",
            "Sharing one high-privilege role across services to simplify auditing",
            "Issuing short-lived, narrowly scoped credentials per workload",
            "Storing credentials in an encrypted file on each host"
          ],
          answer: 2,
          explain: "Short lifetime limits the window and narrow scope limits the reach. Shared high-privilege roles do the opposite of both."
        },
        {
          type: "order",
          q: "Order these steps for tightening an over-permissioned service identity safely.",
          items: [
            "Audit which permissions the service actually exercised over a representative period",
            "Draft a narrower policy covering only the observed and clearly required actions",
            "Run the narrower policy in a warn-only or dry-run mode and watch for denials",
            "Enforce the narrower policy and remove the broad grant"
          ],
          explain: "Measuring before cutting avoids outages, and a warn-only phase catches rare code paths that the observation window missed."
        },
        {
          type: "truefalse",
          q: "Defense in depth is redundant effort; once a strong perimeter firewall is in place, internal controls add little value.",
          answer: false,
          explain: "Perimeter-only security fails completely the moment anything inside is compromised, which is why layered internal authentication and authorization are standard."
        }
      ]
    },
    {
      id: "l104",
      title: "Abuse resistance: rate limits, bots, and enumeration",
      intro: "Defending against callers who are technically authorized but behaving badly.",
      questions: [
        {
          type: "mcq",
          q: "A signup form reports Email already registered for existing accounts and Account created otherwise. What is the security problem?",
          choices: [
            "It performs an extra database read, increasing latency",
            "It allows account enumeration, letting an attacker confirm which emails are registered",
            "It violates the requirement that error messages be localized",
            "It exposes the database schema through the error string"
          ],
          answer: 1,
          explain: "Enumeration turns a list of leaked emails into a list of confirmed users of your service. Generic responses plus an emailed confirmation avoid leaking membership."
        },
        {
          type: "fill",
          q: "A rate limiting algorithm that refills allowance at a steady rate and permits short bursts up to its capacity is the ____ bucket.",
          answer: "token",
          accept: ["token", "token bucket"],
          explain: "Token bucket permits bursts up to the bucket size while bounding the long-run average. Leaky bucket instead smooths output to a fixed drain rate with no burst allowance."
        },
        {
          type: "truefalse",
          q: "Rate limiting only by source IP address is sufficient for protecting a login endpoint.",
          answer: false,
          explain: "Attackers rotate across large address pools, and many legitimate users share an address behind NAT. Limit per account and per credential attempt as well as per IP."
        },
        {
          type: "mcq",
          q: "In credential stuffing, what is the attacker actually doing?",
          choices: [
            "Guessing many passwords against a single high-value account",
            "Replaying username and password pairs leaked from other breached services",
            "Injecting oversized values into login form fields to crash the parser",
            "Registering many accounts to exhaust the username namespace"
          ],
          answer: 1,
          explain: "The attempts succeed because of password reuse, not weak passwords. Breached-password screening and multi-factor authentication are the effective defenses."
        },
        {
          type: "match",
          q: "Match each abuse control to its purpose.",
          pairs: [
            ["Exponential backoff after failed logins", "Makes sustained password guessing against one account impractically slow"],
            ["Proof of work or challenge on signup", "Raises the per-request cost for automated mass account creation"],
            ["Uniform timing on credential checks", "Prevents timing differences from revealing whether an account exists"]
          ],
          explain: "Abuse controls raise cost rather than block absolutely, so the goal is to make the attack uneconomic while barely affecting legitimate users."
        },
        {
          type: "truefalse",
          q: "Rate limit responses should use HTTP status 429 and can include a Retry-After header telling well-behaved clients when to retry.",
          answer: true,
          explain: "429 Too Many Requests plus Retry-After lets legitimate clients back off correctly instead of hammering with retries that deepen the overload."
        },
        {
          type: "order",
          q: "Order these abuse defenses from lowest to highest friction for a legitimate user.",
          items: [
            "Silent per-account rate limiting under a generous threshold",
            "Progressive delay after repeated failures",
            "Interactive challenge before allowing another attempt",
            "Temporary account lockout requiring an email or support step"
          ],
          explain: "Escalating friction only as suspicion rises keeps normal users unaffected. Jumping straight to lockout also creates a denial of service against the real account owner."
        }
      ]
    }
  ]
});
