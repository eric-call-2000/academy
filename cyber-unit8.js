window.ACADEMY.addUnit("cyber", {
  id: "unit-8",
  title: "App Security: Building Secure Apps",
  color: "#f25f9c",
  icon: "🛠️",
  description: "How developers keep the apps they build - and their users' data - safe.",
  lessons: [
    {
      id: "l57",
      title: "Secure Data Storage",
      intro: "Sensitive data on a device should be encrypted at rest, and passwords or secrets should never sit around in plaintext.",
      questions: [
        {
          type: "mcq",
          q: "What does 'data at rest' mean?",
          choices: ["Data stored on a disk or device", "Data moving over the network", "Data being processed in memory", "Data that has been deleted"],
          answer: 0,
          explain: "Data at rest is stored data - on a phone, a disk, or a database. Encrypting it protects it if the device is lost or stolen."
        },
        {
          type: "truefalse",
          q: "Storing a user's password in plaintext in the app's local database is a safe practice.",
          answer: false,
          explain: "Passwords should never be stored in plaintext. If they must be stored, hash them; better yet, do not store raw passwords on the client at all."
        },
        {
          type: "fill",
          q: "Turning readable data into scrambled data that needs a key to unlock is called ____.",
          answer: "encryption",
          accept: ["encryption", "encrypting"],
          explain: "Encryption scrambles data so it is unreadable without the right key. It is reversible with the key, unlike hashing."
        },
        {
          type: "mcq",
          q: "Where is the SAFEST place to keep a small secret like a login token on a phone?",
          choices: ["The platform's secure keystore or keychain", "A plain text file in app storage", "A hidden folder on the SD card", "The app's log files"],
          answer: 0,
          explain: "Mobile platforms provide a hardware-backed keystore or keychain built for secrets. Plain files, SD cards, and logs are easy to read."
        },
        {
          type: "truefalse",
          q: "Writing sensitive data into app log files is fine because logs are private.",
          answer: false,
          explain: "Logs are often readable by other apps, support tools, or crash reporters. Never log passwords, tokens, or personal data."
        },
        {
          type: "match",
          q: "Match each storage idea to what it means.",
          pairs: [
            ["Data at rest", "Stored data on a disk or device"],
            ["Encryption at rest", "Scrambling stored data so it needs a key"],
            ["Keychain / Keystore", "OS-provided secure vault for secrets"]
          ],
          explain: "Encrypting data at rest and using the platform keystore are the standard ways to protect stored secrets."
        },
        {
          type: "order",
          q: "Order these steps for saving a sensitive value on a device, safest-first design.",
          items: ["Decide the value is sensitive", "Encrypt it or use the secure keystore", "Store it in the protected location", "Avoid writing it to logs or backups"],
          explain: "You classify the data, protect it with encryption or the keystore, store it safely, and keep it out of logs and unencrypted backups."
        },
        {
          type: "mcq",
          q: "Why encrypt data at rest even if the app has a login screen?",
          choices: ["A lost or stolen device can have its raw storage read directly", "It makes the app start faster", "It removes the need for a password", "It stops all network attacks"],
          answer: 0,
          explain: "A login screen does not protect files if someone pulls the storage off a lost device. Encryption at rest is the backstop."
        }
      ]
    },
    {
      id: "l58",
      title: "Secure Communication",
      intro: "Data traveling between an app and a server should always ride over HTTPS/TLS, and certificate pinning can add an extra layer against interception.",
      questions: [
        {
          type: "fill",
          q: "____ encrypts data in transit so eavesdroppers on the network cannot read it.",
          answer: "HTTPS",
          accept: ["https", "tls", "https/tls", "ssl/tls"],
          explain: "HTTPS uses TLS to encrypt data between the app and the server, protecting it while it travels across the network."
        },
        {
          type: "truefalse",
          q: "Sending login credentials over plain HTTP is safe on a trusted home network.",
          answer: false,
          explain: "Plain HTTP is unencrypted anywhere. Credentials can be read on the path between the device and server. Always use HTTPS."
        },
        {
          type: "mcq",
          q: "What does TLS protect against?",
          choices: ["Someone reading or tampering with data in transit", "A weak password", "A user forgetting to log out", "Malware already on the phone"],
          answer: 0,
          explain: "TLS protects the connection - it keeps data confidential and detects tampering while it moves across the network."
        },
        {
          type: "mcq",
          q: "What is certificate pinning?",
          choices: ["The app only trusts a specific known server certificate or key", "Attaching a certificate to every email", "Storing the password inside the certificate", "Turning off HTTPS for speed"],
          answer: 0,
          explain: "Pinning tells the app to accept only a specific expected certificate or public key, making it much harder to swap in a fake one."
        },
        {
          type: "match",
          q: "Match each term to its role.",
          pairs: [
            ["TLS", "Encrypts data in transit"],
            ["Certificate", "Proves the server's identity"],
            ["Certificate pinning", "Trust only a specific known certificate"]
          ],
          explain: "TLS encrypts the channel, the certificate proves who the server is, and pinning narrows trust to the exact expected certificate."
        },
        {
          type: "truefalse",
          q: "A man-in-the-middle attack tries to sit between the app and server to read or change traffic.",
          answer: true,
          explain: "That is exactly what a man-in-the-middle attack does. HTTPS and pinning are the defenses that make it very hard to pull off."
        },
        {
          type: "order",
          q: "Order what happens when an app makes a secure request.",
          items: ["App opens a TLS connection to the server", "Server presents its certificate", "App verifies the certificate", "Encrypted data flows both ways"],
          explain: "The TLS handshake sets up trust by verifying the certificate before any encrypted data is exchanged."
        },
        {
          type: "mcq",
          q: "A developer disables certificate validation to make testing easier and ships it. Why is that dangerous?",
          choices: ["The app will trust fake servers and can be intercepted", "The app will run too slowly", "Users will need to log in twice", "The app will use more battery"],
          answer: 0,
          explain: "Turning off validation means any server, including an attacker's, is trusted. This is a common and serious mistake to leave in production."
        }
      ]
    },
    {
      id: "l59",
      title: "Protecting API Keys & Secrets",
      intro: "Anything you ship inside an app can be pulled back out, so real secrets belong on a server you control, not baked into the client.",
      questions: [
        {
          type: "truefalse",
          q: "A secret key hardcoded into a mobile app can be extracted by someone who inspects the app.",
          answer: true,
          explain: "Shipped code and files can be unpacked and read. Any secret inside the app should be treated as public - keep real secrets server-side."
        },
        {
          type: "mcq",
          q: "Where should a powerful, private API secret live?",
          choices: ["On a backend server the client calls", "Hardcoded in the app's source", "In a config file bundled with the app", "In a comment in the code"],
          answer: 0,
          explain: "Keep the secret on your server. The app asks your server to do the sensitive call, so the secret never ships to users."
        },
        {
          type: "fill",
          q: "Instead of shipping a secret in the app, route the sensitive request through your own ____.",
          answer: "server",
          accept: ["server", "backend", "back-end", "backend server"],
          explain: "A backend proxy holds the real secret and makes the privileged call on the app's behalf, so the client never sees the secret."
        },
        {
          type: "truefalse",
          q: "Obfuscating a key by scrambling the text makes it truly safe to ship in the app.",
          answer: false,
          explain: "Obfuscation only slows someone down. A determined person can still recover the key. It is not a substitute for keeping secrets off the client."
        },
        {
          type: "match",
          q: "Match each item to where it belongs.",
          pairs: [
            ["Private API secret", "On the server, never in the app"],
            ["Public identifier", "Can safely ship in the app"],
            ["Backend proxy", "Makes the secret call for the client"]
          ],
          explain: "Public IDs are fine to ship; private secrets stay server-side, ideally used by a backend proxy the app calls."
        },
        {
          type: "mcq",
          q: "A secret was accidentally committed to a public code repo. What is the right first move?",
          choices: ["Rotate (replace) the secret right away", "Just delete the file in the next commit", "Rename the variable", "Add a comment saying it is private"],
          answer: 0,
          explain: "Once exposed, a secret must be rotated - deleting it later does not help since it lives in the history and may already be copied."
        },
        {
          type: "order",
          q: "Order the safe pattern for using a private third-party API from an app.",
          items: ["Keep the secret on your server", "App sends a request to your server", "Your server adds the secret and calls the third party", "Your server returns only the result to the app"],
          explain: "The app never holds the secret; your server acts as the trusted middleman that attaches it."
        }
      ]
    },
    {
      id: "l60",
      title: "Authentication & Tokens",
      intro: "Auth tokens prove who a user is, so store them securely, expire them, and handle refresh tokens with care.",
      questions: [
        {
          type: "mcq",
          q: "What is an authentication token used for?",
          choices: ["Proving a user is already logged in on later requests", "Encrypting the whole database", "Speeding up the network", "Storing the user's photos"],
          answer: 0,
          explain: "After login, the app sends a token to prove identity on each request, so the user does not re-enter a password every time."
        },
        {
          type: "fill",
          q: "The difference between authentication and authorization is: authentication proves who you are, and ____ decides what you are allowed to do.",
          answer: "authorization",
          accept: ["authorization", "authorisation"],
          explain: "Authentication is identity; authorization is permission. A logged-in user still may not be allowed to do everything."
        },
        {
          type: "truefalse",
          q: "Auth tokens should expire after some time rather than living forever.",
          answer: true,
          explain: "Short-lived tokens limit damage if one is stolen. Expiry means a leaked token stops working before long."
        },
        {
          type: "mcq",
          q: "Why use a short-lived access token together with a refresh token?",
          choices: ["A stolen access token stops working soon, while the refresh token stays better protected", "It removes the need for a password", "It makes tokens impossible to steal", "It lets the app skip HTTPS"],
          answer: 0,
          explain: "The access token expires fast to limit exposure; the refresh token, kept more securely, is used to get new access tokens."
        },
        {
          type: "match",
          q: "Match each token concept to its meaning.",
          pairs: [
            ["Access token", "Short-lived proof used on each request"],
            ["Refresh token", "Used to get a new access token"],
            ["Token expiry", "Limits how long a stolen token works"]
          ],
          explain: "Access tokens are short-lived and used often; refresh tokens renew them; expiry caps the blast radius of a leak."
        },
        {
          type: "truefalse",
          q: "Storing an auth token in a plain, world-readable file is a good idea for convenience.",
          answer: false,
          explain: "A stolen token can impersonate the user. Store tokens in the secure keystore or keychain, not in plain readable files."
        },
        {
          type: "order",
          q: "Order a typical token login flow.",
          items: ["User enters credentials", "Server verifies them and issues tokens", "App stores tokens securely", "App sends the access token on future requests"],
          explain: "Login yields tokens, which the app stores safely and then presents to prove identity on later requests."
        },
        {
          type: "mcq",
          q: "A user logs out. What should the server do with their tokens?",
          choices: ["Invalidate them so they can no longer be used", "Nothing, they expire eventually anyway", "Email the token to the user", "Store the token in a public list"],
          answer: 0,
          explain: "Logout should invalidate the session or refresh token so a copied token cannot keep working after the user leaves."
        }
      ]
    },
    {
      id: "l61",
      title: "Authorization & Least Privilege",
      intro: "Permissions must be checked on the server, and every user and component should get only the access it truly needs.",
      questions: [
        {
          type: "fill",
          q: "Giving each user or part of a system only the access it needs is the principle of least ____.",
          answer: "privilege",
          accept: ["privilege", "priviledge"],
          explain: "Least privilege limits damage: if an account is misused, it can only reach the small slice of things it was granted."
        },
        {
          type: "truefalse",
          q: "It is safe to hide a delete button in the app and skip the server-side permission check.",
          answer: false,
          explain: "Hiding UI is not security. The server must verify the user is allowed to delete, because requests can be sent without the app."
        },
        {
          type: "mcq",
          q: "Broken access control means what?",
          choices: ["Users can do or see things they should not be allowed to", "The login page is slow", "Passwords are too short", "The server ran out of disk space"],
          answer: 0,
          explain: "Broken access control lets someone reach data or actions beyond their rights - a top web application risk and squarely an authorization failure."
        },
        {
          type: "mcq",
          q: "A user changes the id in a request from their own to someone else's and sees that person's data. What flaw is this?",
          choices: ["Missing authorization check on the object", "A slow database", "A weak TLS cipher", "A spelling mistake"],
          answer: 0,
          explain: "The server should confirm the user owns or may access that object. Trusting the id alone is a classic access-control bug."
        },
        {
          type: "match",
          q: "Match each idea to its meaning.",
          pairs: [
            ["Authentication", "Proving who you are"],
            ["Authorization", "Checking what you may do"],
            ["Least privilege", "Grant only the access needed"]
          ],
          explain: "First you prove identity, then the server checks permission, and you keep those permissions as small as possible."
        },
        {
          type: "truefalse",
          q: "Least privilege applies to backend services and API keys, not just human users.",
          answer: true,
          explain: "A service, key, or token should also have only the permissions it needs, so a compromise of one part cannot reach everything."
        },
        {
          type: "order",
          q: "Order how the server should handle a request that changes data.",
          items: ["Authenticate the user from their token", "Check they are authorized for this action and object", "Perform the action if allowed", "Reject with an error if not allowed"],
          explain: "Identity first, then a permission check on the specific action and object, then act or deny - never assume the client checked."
        }
      ]
    },
    {
      id: "l62",
      title: "Validate on the Server",
      intro: "Client-side checks make the app feel nice, but they can be bypassed, so the backend must validate everything for real.",
      questions: [
        {
          type: "truefalse",
          q: "Because the app already checks that a form field is not empty, the server can skip checking it.",
          answer: false,
          explain: "Client checks improve UX but can be bypassed by editing requests. The server must re-validate all input it receives."
        },
        {
          type: "mcq",
          q: "Why can't you trust client-side validation alone?",
          choices: ["Requests can be sent to the server without using the app", "The app is written in a slow language", "Users always type correctly", "The server has no CPU"],
          answer: 0,
          explain: "Anyone can send raw requests directly to your API, skipping the app entirely, so the server is the only place validation is enforced."
        },
        {
          type: "fill",
          q: "The safe rule for handling incoming data is: never ____ user input.",
          answer: "trust",
          accept: ["trust"],
          explain: "Treat all input as untrusted and validate it on the server. This mindset underlies defenses against injection and many other attacks."
        },
        {
          type: "mcq",
          q: "The standard defense against SQL injection is to use what?",
          choices: ["Parameterized queries (prepared statements)", "A longer password", "A faster database", "More client-side checks"],
          answer: 0,
          explain: "Parameterized queries keep user input as data, never as executable SQL, which stops the input from changing the query's meaning."
        },
        {
          type: "mcq",
          q: "What is the standard defense against cross-site scripting (XSS)?",
          choices: ["Encode or escape output so input is not run as code", "Hide the page source", "Use a shorter URL", "Turn off cookies"],
          answer: 0,
          explain: "Output encoding makes user-supplied text display as text rather than execute as script in the page."
        },
        {
          type: "match",
          q: "Match each attack to its standard defense.",
          pairs: [
            ["SQL injection", "Parameterized queries"],
            ["Cross-site scripting", "Output encoding"],
            ["Cross-site request forgery", "Anti-CSRF token"]
          ],
          explain: "These are the classic pairings: parameterize database queries, encode output, and use anti-CSRF tokens on state-changing requests."
        },
        {
          type: "truefalse",
          q: "Server-side validation should check the type, length, and format of input, not just that a value exists.",
          answer: true,
          explain: "Good validation confirms input matches what you expect, rejecting unexpected types, oversized values, and malformed formats."
        },
        {
          type: "order",
          q: "Order how the server should handle input for a new record.",
          items: ["Receive the request", "Validate and sanitize the input", "Use a parameterized query to save it", "Return a safe, encoded response"],
          explain: "Validate on arrival, use parameterized queries to store, and encode output - each step trusts nothing from the client."
        }
      ]
    },
    {
      id: "l63",
      title: "Mobile-Specific Risks",
      intro: "Mobile apps face extra dangers like reverse engineering, insecure local storage, and the risks tracked by the OWASP Mobile Top 10.",
      questions: [
        {
          type: "mcq",
          q: "What is reverse engineering of an app?",
          choices: ["Taking the shipped app apart to study its code and data", "Making the app run backward", "Deleting the app from the store", "Translating the app to another language"],
          answer: 0,
          explain: "Reverse engineering unpacks and inspects the app to find secrets, logic, or weaknesses - a reason not to hide secrets in the client."
        },
        {
          type: "truefalse",
          q: "The OWASP Mobile Top 10 is a widely used list of common mobile app security risks.",
          answer: true,
          explain: "OWASP publishes awareness lists, including one focused on mobile, to help teams learn about and defend against common risks."
        },
        {
          type: "mcq",
          q: "Which is an example of insecure data storage on a mobile device?",
          choices: ["Saving auth tokens in a plain, readable file", "Using the secure keychain for secrets", "Encrypting the local database", "Sending data over HTTPS"],
          answer: 0,
          explain: "Plain readable files are insecure storage. Use the platform keychain or keystore and encrypt sensitive local data."
        },
        {
          type: "match",
          q: "Match each mobile risk to a fitting defense.",
          pairs: [
            ["Reverse engineering", "Keep secrets off the client"],
            ["Insecure local storage", "Use the secure keystore and encryption"],
            ["Traffic interception", "HTTPS and certificate pinning"]
          ],
          explain: "Each mobile risk has a practical defense: keep secrets server-side, store data securely, and encrypt traffic with pinning."
        },
        {
          type: "truefalse",
          q: "Running an app on a jailbroken or rooted device can weaken the OS security protections it relies on.",
          answer: true,
          explain: "Rooting or jailbreaking removes safeguards, so sensitive apps may detect it and reduce trust in the device's protections."
        },
        {
          type: "fill",
          q: "Because a shipped app can be taken apart, developers must keep real secrets on the ____, not in the app.",
          answer: "server",
          accept: ["server", "backend", "back-end"],
          explain: "This ties the mobile lessons together: reverse engineering means the client is not a safe place for secrets."
        },
        {
          type: "mcq",
          q: "Why is it risky to rely on the app's UI to enforce a rule like a spending limit?",
          choices: ["The request can be sent without the UI, bypassing the rule", "The UI uses too much memory", "The UI cannot show numbers", "The rule would slow the phone down"],
          answer: 0,
          explain: "Client controls can be skipped by sending direct requests, so critical rules must be enforced on the server too."
        },
        {
          type: "order",
          q: "Order a sensible way to protect a sensitive value in a mobile app.",
          items: ["Do not hardcode the secret in the app", "Store any needed token in the keystore", "Send traffic over HTTPS", "Enforce the real rules on the server"],
          explain: "Layer the defenses: no client secrets, secure storage, encrypted transport, and server-side enforcement."
        }
      ]
    },
    {
      id: "l64",
      title: "Secure Updates & Monitoring",
      intro: "Shipping signed updates and watching for crashes and suspicious activity keeps an app safe after it launches.",
      questions: [
        {
          type: "mcq",
          q: "Why should app updates be digitally signed?",
          choices: ["So the device can verify the update is genuine and untampered", "So the update downloads faster", "So the app uses less storage", "So users skip the login screen"],
          answer: 0,
          explain: "A signature lets the device confirm the update really came from the developer and was not altered on the way."
        },
        {
          type: "fill",
          q: "A digital ____ lets a device confirm that an update is genuine and has not been tampered with.",
          answer: "signature",
          accept: ["signature", "signing"],
          explain: "Code signing uses cryptography so only updates from the real developer's key are trusted and installed."
        },
        {
          type: "truefalse",
          q: "Keeping dependencies and libraries updated helps close known security holes.",
          answer: true,
          explain: "Old libraries can contain publicly known weaknesses. Updating them is a core part of keeping an app secure over time."
        },
        {
          type: "mcq",
          q: "What is the security value of monitoring crashes and error logs?",
          choices: ["Unusual patterns can reveal attacks or bugs early", "It makes the app free to run", "It replaces the need for HTTPS", "It stops users from logging in"],
          answer: 0,
          explain: "Spikes in crashes, errors, or odd requests can be the first sign of an attack or a serious flaw, so monitoring buys early warning."
        },
        {
          type: "match",
          q: "Match each practice to its benefit.",
          pairs: [
            ["Signed updates", "Only genuine updates are installed"],
            ["Dependency updates", "Closes known vulnerabilities"],
            ["Monitoring and alerts", "Spot attacks and bugs early"]
          ],
          explain: "Signing verifies updates, patching removes known holes, and monitoring gives you early warning of trouble."
        },
        {
          type: "truefalse",
          q: "Security is finished once the app ships, so no further attention is needed.",
          answer: false,
          explain: "Security is ongoing. New flaws appear, dependencies age, and attackers probe, so apps need patches and monitoring after launch."
        },
        {
          type: "order",
          q: "Order how to respond when monitoring flags a possible security incident.",
          items: ["Detect the unusual activity via alerts", "Investigate what is happening", "Contain and fix the issue", "Ship a signed update and keep watching"],
          explain: "Detection leads to investigation, then containment and a fix, then a trusted update - with monitoring continuing throughout."
        },
        {
          type: "mcq",
          q: "An update mechanism downloads code over plain HTTP with no signature check. Why is that dangerous?",
          choices: ["An attacker could replace it with malicious code the app would run", "The update would be too large", "Users would need to re-register", "The app would look outdated"],
          answer: 0,
          explain: "Without HTTPS and signature checks, an attacker on the network can swap in malware, so updates must be both encrypted and signed."
        }
      ]
    }
  ]
});
