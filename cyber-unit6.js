window.ACADEMY.addUnit("cyber", {
  id: "unit-6",
  title: "Website Security: Building Secure Sites",
  color: "#2bb3a3",
  icon: "🏗️",
  description: "The most important web app vulnerabilities and how builders defend against them.",
  lessons: [
    {
      id: "l41",
      title: "The OWASP Top 10",
      intro: "A widely used checklist that helps builders spot the most critical web application security risks.",
      questions: [
        {
          type: "mcq",
          q: "What is the OWASP Top 10 best described as?",
          choices: [
            "A widely used list of the most critical web application security risks",
            "A law that all websites must legally follow",
            "A single tool that scans and fixes all bugs automatically",
            "A brand of firewall hardware"
          ],
          answer: 0,
          explain: "The OWASP Top 10 is an awareness list of common, serious web app security risks that builders use as a checklist."
        },
        {
          type: "truefalse",
          q: "The OWASP Top 10 is a fixed list that never changes over time.",
          answer: false,
          explain: "It is updated periodically as threats evolve, so treat it as guidance, not a frozen rulebook."
        },
        {
          type: "mcq",
          q: "Why is a checklist like the OWASP Top 10 useful for a development team?",
          choices: [
            "It gives a shared, prioritized starting point for common risks",
            "It guarantees the site can never be hacked",
            "It replaces the need to test the application",
            "It makes the site load faster"
          ],
          answer: 0,
          explain: "It focuses limited time on the risks most likely to matter, but it is a starting point, not a guarantee."
        },
        {
          type: "match",
          q: "Match each common risk category to its short description.",
          pairs: [
            ["Injection", "Untrusted input handled as code or a query"],
            ["Broken Access Control", "Users reaching data or actions they should not"],
            ["Cross-Site Scripting", "Malicious scripts injected into a page"]
          ],
          explain: "These categories name broad classes of flaws so teams can talk about and defend against them consistently."
        },
        {
          type: "fill",
          q: "The organization behind the Top 10 list is commonly abbreviated as ____.",
          answer: "OWASP",
          accept: ["owasp"],
          explain: "OWASP stands for the Open Worldwide (formerly Web) Application Security Project."
        },
        {
          type: "truefalse",
          q: "Passing an OWASP-style checklist means an app is proven completely secure.",
          answer: false,
          explain: "A checklist reduces common risks but cannot prove an app is free of every possible flaw."
        },
        {
          type: "mcq",
          q: "Which of these is a category you would expect to see discussed in the Top 10?",
          choices: [
            "Broken access control",
            "Slow image loading",
            "Ugly button colors",
            "Too many blog posts"
          ],
          answer: 0,
          explain: "Broken access control is a classic and high-impact web app risk; the others are not security categories."
        }
      ]
    },
    {
      id: "l42",
      title: "Injection & SQL Injection",
      intro: "Injection happens when untrusted input is treated as code or a database query instead of plain data.",
      questions: [
        {
          type: "mcq",
          q: "What is SQL injection?",
          choices: [
            "Tricking an app into running attacker-controlled input as part of a database query",
            "A way to make databases run faster",
            "A method of backing up a database",
            "A type of strong password"
          ],
          answer: 0,
          explain: "In SQL injection, untrusted input changes the meaning of a query, letting attackers read or alter data they should not."
        },
        {
          type: "mcq",
          q: "What is the primary defense against SQL injection?",
          choices: [
            "Parameterized queries (prepared statements)",
            "Making the password longer",
            "Hiding the database server in a closet",
            "Using a faster internet connection"
          ],
          answer: 0,
          explain: "Parameterized queries keep user input as data, separate from the query's code, so it cannot change the query's meaning."
        },
        {
          type: "truefalse",
          q: "Building SQL queries by gluing raw user input into strings is a safe practice.",
          answer: false,
          explain: "Concatenating raw input into query strings is exactly what enables injection; use parameters instead."
        },
        {
          type: "fill",
          q: "The core rule that prevents injection is to keep untrusted input as ____ and never treat it as executable code.",
          answer: "data",
          accept: ["data"],
          explain: "Injection is a confusion between data and code; keeping input strictly as data prevents it."
        },
        {
          type: "match",
          q: "Match each idea to its meaning.",
          pairs: [
            ["Parameterized query", "Input is passed separately from the query text"],
            ["String concatenation", "Input is glued directly into the query"],
            ["Least privilege DB account", "The app connects with only the permissions it needs"]
          ],
          explain: "Parameters plus a limited database account shrink both the chance and the impact of injection."
        },
        {
          type: "order",
          q: "Order these steps a developer takes to safely run a query with user input.",
          items: [
            "Receive input from the user",
            "Write a query with placeholders for values",
            "Bind the input to the placeholders as data",
            "Execute the parameterized query"
          ],
          explain: "Binding input to placeholders keeps it as data, so the database never mistakes it for query code."
        },
        {
          type: "mcq",
          q: "Besides SQL, injection can also affect which of these?",
          choices: [
            "Operating system commands the app runs",
            "The color of the login button",
            "The size of the company logo",
            "The number of pages on the site"
          ],
          answer: 0,
          explain: "Injection is a general problem; command, LDAP, and other injections all come from mixing untrusted input with a command language."
        },
        {
          type: "truefalse",
          q: "Giving the app's database account only the permissions it needs helps limit the damage of a successful injection.",
          answer: true,
          explain: "Least privilege means even a breached query can do less harm, which is defense in depth."
        }
      ]
    },
    {
      id: "l43",
      title: "Cross-Site Scripting (XSS)",
      intro: "XSS lets an attacker run malicious scripts in other users' browsers by injecting them into a page.",
      questions: [
        {
          type: "mcq",
          q: "What does a Cross-Site Scripting (XSS) attack do?",
          choices: [
            "Runs attacker-supplied script in a victim's browser via a trusted page",
            "Physically damages the web server",
            "Encrypts the site's database for ransom",
            "Slows down the user's internet connection"
          ],
          answer: 0,
          explain: "XSS injects script that the victim's browser runs as if it came from the trusted site, letting it steal data or act as the user."
        },
        {
          type: "mcq",
          q: "What is a core defense against XSS?",
          choices: [
            "Encoding output so input is shown as text, not run as code",
            "Using a shorter domain name",
            "Turning off the site's images",
            "Emailing users a warning"
          ],
          answer: 0,
          explain: "Output encoding makes user content display as harmless text instead of executing as HTML or script."
        },
        {
          type: "truefalse",
          q: "Displaying user-submitted content directly in a page without encoding it can create an XSS hole.",
          answer: true,
          explain: "If raw input can include script tags that the browser runs, attackers can inject code through it."
        },
        {
          type: "fill",
          q: "Converting characters like the less-than sign so they display as text instead of running as HTML is called output ____.",
          answer: "encoding",
          accept: ["encoding", "escaping"],
          explain: "Output encoding (also called escaping) neutralizes special characters so content is shown, not executed."
        },
        {
          type: "match",
          q: "Match each defense to what it does.",
          pairs: [
            ["Output encoding", "Shows user input as text, not runnable code"],
            ["Input validation", "Rejects clearly bad or unexpected input"],
            ["Content-Security-Policy", "Limits which scripts the browser will run"]
          ],
          explain: "Encoding, validation, and a CSP work together as layered defenses against XSS."
        },
        {
          type: "mcq",
          q: "One reason XSS is dangerous is that the malicious script runs with which context?",
          choices: [
            "The trusted site's context, so it can access the user's session there",
            "No context at all, so it can do nothing",
            "Only the attacker's own computer",
            "Only offline text files"
          ],
          answer: 0,
          explain: "Because the browser thinks the script came from the trusted site, it can read cookies or act as the logged-in user."
        },
        {
          type: "truefalse",
          q: "A Content-Security-Policy header can reduce the impact of XSS by restricting which scripts run.",
          answer: true,
          explain: "A CSP limits allowed script sources, so injected inline or third-party scripts are less likely to execute."
        },
        {
          type: "order",
          q: "Order these steps for safely showing a user's comment on a page.",
          items: [
            "Accept the comment text from the user",
            "Validate that the input is expected and reasonable",
            "Encode the text for the HTML output context",
            "Insert the encoded text into the page"
          ],
          explain: "Validating then encoding before insertion keeps user content from being run as script."
        }
      ]
    },
    {
      id: "l44",
      title: "Cross-Site Request Forgery (CSRF)",
      intro: "CSRF tricks a logged-in user's browser into sending an unwanted request the user never intended.",
      questions: [
        {
          type: "mcq",
          q: "What is Cross-Site Request Forgery (CSRF)?",
          choices: [
            "Tricking a logged-in user's browser into making a request they did not intend",
            "Guessing a user's password by brute force",
            "Reading data straight from a database file",
            "Installing hardware on a server"
          ],
          answer: 0,
          explain: "CSRF abuses the fact that the browser automatically attaches the user's session, so a forged request looks legitimate."
        },
        {
          type: "mcq",
          q: "What is the standard defense against CSRF?",
          choices: [
            "An anti-CSRF token that must accompany state-changing requests",
            "A longer username",
            "A brighter website color scheme",
            "Disabling JavaScript everywhere"
          ],
          answer: 0,
          explain: "A secret, per-session anti-CSRF token proves the request came from the real site's form, not a forged one."
        },
        {
          type: "truefalse",
          q: "CSRF relies on the victim already being logged in to the target site.",
          answer: true,
          explain: "The attack borrows the victim's active session, so it only works while they are authenticated."
        },
        {
          type: "fill",
          q: "A secret value tied to the user's session that must be sent with a form to block CSRF is called an anti-CSRF ____.",
          answer: "token",
          accept: ["token"],
          explain: "The server checks that the token matches the session; a forged cross-site request cannot supply the correct one."
        },
        {
          type: "match",
          q: "Match each CSRF defense to its idea.",
          pairs: [
            ["Anti-CSRF token", "Unpredictable value the attacker cannot guess"],
            ["SameSite cookies", "Limits cookies from being sent on cross-site requests"],
            ["Re-authentication", "Asks the user to confirm sensitive actions"]
          ],
          explain: "Tokens plus SameSite cookies and confirmation prompts layer up to defeat forged requests."
        },
        {
          type: "truefalse",
          q: "CSRF and XSS are the exact same attack with two different names.",
          answer: false,
          explain: "XSS runs script in the victim's browser; CSRF forges a request using the victim's existing session. They differ."
        },
        {
          type: "mcq",
          q: "Setting a cookie's SameSite attribute helps with CSRF because it can:",
          choices: [
            "Stop the cookie from being sent on many cross-site requests",
            "Encrypt the whole database",
            "Make the password unhashable",
            "Speed up page loads"
          ],
          answer: 0,
          explain: "SameSite tells the browser to withhold the cookie on cross-site requests, cutting off a key CSRF ingredient."
        }
      ]
    },
    {
      id: "l45",
      title: "Input Validation & Sanitization",
      intro: "Never trust user input; validate and sanitize everything on the server before you use it.",
      questions: [
        {
          type: "truefalse",
          q: "Client-side validation in the browser is enough on its own to keep input safe.",
          answer: false,
          explain: "Attackers can bypass the browser entirely, so validation must also happen on the server you control."
        },
        {
          type: "mcq",
          q: "What is the difference between validation and sanitization?",
          choices: [
            "Validation checks input against rules; sanitization cleans or neutralizes it",
            "They are two words for the exact same step",
            "Validation only applies to images",
            "Sanitization means deleting the whole database"
          ],
          answer: 0,
          explain: "Validation rejects input that breaks the rules; sanitization removes or escapes dangerous parts so it is safe to use."
        },
        {
          type: "mcq",
          q: "Which validation approach is generally safer?",
          choices: [
            "Allowlist: accept only known-good input and reject the rest",
            "Blocklist: try to list every bad thing to reject",
            "Accept everything and hope for the best",
            "Trust anything sent from a mobile app"
          ],
          answer: 0,
          explain: "Allowlisting defines what is acceptable, which is more reliable than trying to enumerate every possible bad input."
        },
        {
          type: "fill",
          q: "Because attackers can bypass the browser, the trustworthy place to enforce validation is on the ____.",
          answer: "server",
          accept: ["server", "server side", "backend"],
          explain: "Only the server is under your control, so it must re-check everything even if the client already did."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Validation", "Checking input against expected rules"],
            ["Sanitization", "Removing or escaping dangerous parts of input"],
            ["Allowlist", "Only known-good values are accepted"]
          ],
          explain: "Together these keep untrusted input from reaching sensitive logic in a harmful form."
        },
        {
          type: "truefalse",
          q: "You should validate input for type, length, format, and range where it makes sense.",
          answer: true,
          explain: "Checking type, length, format, and range catches many bad or malicious inputs before they cause harm."
        },
        {
          type: "order",
          q: "Order how a server should handle incoming user input.",
          items: [
            "Receive the input from the request",
            "Validate it against expected rules",
            "Sanitize or encode it for its destination",
            "Use it in the application logic"
          ],
          explain: "Validate first, then sanitize or encode for the specific place the data is used, before trusting it."
        },
        {
          type: "mcq",
          q: "Why is client-side validation still worth including even though it is not sufficient?",
          choices: [
            "It gives fast, friendly feedback to honest users",
            "It replaces the need for server checks",
            "It stores passwords more securely",
            "It encrypts the connection"
          ],
          answer: 0,
          explain: "Client-side checks improve user experience, but the server must still enforce the real rules."
        }
      ]
    },
    {
      id: "l46",
      title: "Secure Authentication & Sessions",
      intro: "Hash passwords instead of storing plaintext, protect session cookies, and expire sessions safely.",
      questions: [
        {
          type: "mcq",
          q: "How should a website store user passwords?",
          choices: [
            "As salted hashes using a strong password-hashing algorithm",
            "As plaintext in the database",
            "Encrypted with a key stored next to the data",
            "In a public file so users can check them"
          ],
          answer: 0,
          explain: "Passwords should be hashed with a slow, salted algorithm so the original is never stored and cannot be simply reversed."
        },
        {
          type: "truefalse",
          q: "Storing passwords in plaintext is acceptable as long as the server is behind a firewall.",
          answer: false,
          explain: "If the database is ever exposed, plaintext passwords are instantly usable; always hash them regardless of the firewall."
        },
        {
          type: "fill",
          q: "A random value added to each password before hashing so identical passwords hash differently is called a ____.",
          answer: "salt",
          accept: ["salt"],
          explain: "A unique salt per password defeats precomputed lookup tables and hides duplicate passwords."
        },
        {
          type: "mcq",
          q: "Why is hashing, not reversible encryption, used for passwords?",
          choices: [
            "You only need to verify a password, not recover it, so one-way hashing is safer",
            "Hashing makes passwords load faster",
            "Encryption is illegal for passwords",
            "Hashing lets the site email passwords back to users"
          ],
          answer: 0,
          explain: "Hashing is one-way; the site compares hashes to check a login and never needs to recover the original password."
        },
        {
          type: "match",
          q: "Match each session-security measure to its purpose.",
          pairs: [
            ["HttpOnly cookie", "Blocks JavaScript from reading the session cookie"],
            ["Secure cookie", "Sends the cookie only over HTTPS"],
            ["Session expiration", "Limits how long a stolen session stays valid"]
          ],
          explain: "HttpOnly, Secure, and expiration together reduce the chance and lifespan of a hijacked session."
        },
        {
          type: "truefalse",
          q: "Regenerating the session identifier after a successful login helps prevent session fixation.",
          answer: true,
          explain: "Issuing a fresh session ID at login stops an attacker who preset an ID from riding the authenticated session."
        },
        {
          type: "mcq",
          q: "Which practice best limits the damage of a stolen session cookie?",
          choices: [
            "Expiring sessions and requiring re-login after inactivity",
            "Making the cookie value very long only",
            "Storing the cookie in plaintext logs",
            "Never logging users out"
          ],
          answer: 0,
          explain: "Session timeouts and re-authentication shrink the window in which a stolen cookie is useful."
        },
        {
          type: "order",
          q: "Order the steps of a safe password login flow.",
          items: [
            "User submits their password over HTTPS",
            "Server hashes the submitted password with the stored salt",
            "Server compares the result to the stored hash",
            "Server starts a new session on a match"
          ],
          explain: "The server compares hashes and issues a fresh session, so the plaintext password is never stored or reused."
        }
      ]
    },
    {
      id: "l47",
      title: "HTTPS, Headers & Config",
      intro: "Serve everything over TLS and add security headers like HSTS and a Content-Security-Policy.",
      questions: [
        {
          type: "mcq",
          q: "What does HTTPS (TLS) provide for a website?",
          choices: [
            "Encryption of data in transit between the browser and server",
            "A guarantee that the site owner is honest",
            "Faster typing for users",
            "Automatic bug-free code"
          ],
          answer: 0,
          explain: "TLS encrypts data moving between browser and server; it protects the connection, not the trustworthiness of the site."
        },
        {
          type: "truefalse",
          q: "A padlock icon in the browser proves the website itself is safe and honest.",
          answer: false,
          explain: "The padlock only means the connection is encrypted; a scam site can also use HTTPS."
        },
        {
          type: "fill",
          q: "The header that tells browsers to always use HTTPS for a site is abbreviated ____.",
          answer: "HSTS",
          accept: ["hsts", "strict-transport-security"],
          explain: "HSTS (HTTP Strict Transport Security) forces browsers to connect over HTTPS, blocking downgrade tricks."
        },
        {
          type: "match",
          q: "Match each security header to what it does.",
          pairs: [
            ["HSTS", "Forces future connections to use HTTPS"],
            ["Content-Security-Policy", "Limits which sources scripts and content can load from"],
            ["X-Content-Type-Options", "Stops the browser from guessing content types"]
          ],
          explain: "Security headers instruct the browser to behave more safely and reduce the impact of several attacks."
        },
        {
          type: "mcq",
          q: "What is the main benefit of a Content-Security-Policy header?",
          choices: [
            "It restricts where scripts and other resources may load from",
            "It compresses images automatically",
            "It hashes the user's password",
            "It backs up the database nightly"
          ],
          answer: 0,
          explain: "A CSP limits allowed sources, which helps contain XSS and blocks many unexpected script loads."
        },
        {
          type: "truefalse",
          q: "Redirecting all HTTP traffic to HTTPS is a good default for a modern site.",
          answer: true,
          explain: "Forcing HTTPS ensures data is always encrypted in transit and prevents accidental plaintext connections."
        },
        {
          type: "mcq",
          q: "Which is an example of insecure configuration a builder should fix?",
          choices: [
            "Leaving detailed error messages and default admin pages exposed in production",
            "Serving the site over HTTPS",
            "Setting a strong Content-Security-Policy",
            "Turning on HSTS"
          ],
          answer: 0,
          explain: "Verbose errors and exposed default pages leak information; secure configuration hides them in production."
        }
      ]
    },
    {
      id: "l48",
      title: "Secrets & Dependencies",
      intro: "Keep API keys out of your code and keep libraries patched to avoid supply-chain vulnerabilities.",
      questions: [
        {
          type: "mcq",
          q: "Where should secrets like API keys and database passwords be kept?",
          choices: [
            "Server-side configuration or a secrets manager, out of the source code",
            "Hardcoded directly in the shipped code",
            "In a public code repository",
            "Printed in the page's HTML"
          ],
          answer: 0,
          explain: "Secrets belong in server-side config or a secrets manager, never hardcoded where they can leak or be extracted."
        },
        {
          type: "truefalse",
          q: "A secret shipped inside a client app or front-end bundle can be extracted by a determined user.",
          answer: true,
          explain: "Anything shipped to the client can be read, so client-side secrets are effectively public; keep them server-side."
        },
        {
          type: "mcq",
          q: "What is a supply-chain vulnerability in software?",
          choices: [
            "A flaw introduced through a third-party library or dependency you rely on",
            "A slow warehouse delivery of servers",
            "A weak Wi-Fi password at the office",
            "A typo in a blog post"
          ],
          answer: 0,
          explain: "Your app inherits the risks of the code it depends on, so a vulnerable or malicious dependency becomes your problem."
        },
        {
          type: "fill",
          q: "Keeping your libraries updated with security fixes is often called keeping them ____.",
          answer: "patched",
          accept: ["patched", "updated", "up to date"],
          explain: "Applying security patches promptly closes known holes before attackers exploit them."
        },
        {
          type: "match",
          q: "Match each practice to its benefit.",
          pairs: [
            ["Environment variables for secrets", "Keeps keys out of the source code"],
            ["Dependency scanning", "Flags libraries with known vulnerabilities"],
            ["Rotating a leaked key", "Makes an exposed secret useless"]
          ],
          explain: "Externalizing secrets, scanning dependencies, and rotating leaked keys are core secret-hygiene practices."
        },
        {
          type: "truefalse",
          q: "If an API key is accidentally committed to a public repository, simply deleting the line later makes it safe again.",
          answer: false,
          explain: "The key may already be copied and stays in history, so you must rotate (replace) the exposed key."
        },
        {
          type: "order",
          q: "Order the response after discovering a secret was committed to a repository.",
          items: [
            "Recognize the secret has been exposed",
            "Revoke or rotate the exposed key",
            "Remove it from the code and configuration",
            "Store the new secret in a secrets manager"
          ],
          explain: "Because the old key may already be copied, rotating it is the priority, then removing and storing it safely."
        },
        {
          type: "mcq",
          q: "Why should you regularly scan and update dependencies?",
          choices: [
            "Newly discovered vulnerabilities in old versions get fixed in updates",
            "It makes the logo look nicer",
            "It removes the need to write any code",
            "It guarantees the app can never fail"
          ],
          answer: 0,
          explain: "Vulnerabilities are found over time; staying updated pulls in the fixes and shrinks your exposure."
        }
      ]
    }
  ]
});
