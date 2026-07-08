window.ACADEMY.addUnit("cyber", {
  id: "unit-5",
  title: "Website Security: Browsing Safely",
  color: "#ff4b4b",
  icon: "🌐",
  description: "How to tell safe sites from dangerous ones when you're using the web.",
  lessons: [
    {
      id: "l33",
      title: "HTTPS & the Padlock",
      intro: "HTTPS scrambles your traffic on the way to a site, but the padlock only proves the connection is private, not that the site is honest.",
      questions: [
        {
          type: "mcq",
          q: "What does the 'S' in HTTPS mean for your connection?",
          choices: ["The data is encrypted in transit", "The site is guaranteed safe", "The site loads faster", "The site is government-approved"],
          answer: 0,
          explain: "HTTPS uses TLS to encrypt data as it travels, so people in between cannot easily read it."
        },
        {
          type: "truefalse",
          q: "A padlock icon in the address bar proves the website is trustworthy and legitimate.",
          answer: false,
          explain: "The padlock only means the connection is encrypted. Scam sites can have padlocks too."
        },
        {
          type: "fill",
          q: "HTTPS protects your data while it is ____ between your device and the server.",
          answer: "in transit",
          accept: ["in transit", "moving", "traveling", "in motion"],
          explain: "Encryption in transit stops eavesdroppers from reading your data as it moves across the network."
        },
        {
          type: "mcq",
          q: "You visit a login page that uses plain HTTP, not HTTPS. What is the risk?",
          choices: ["Your typed password could be read by someone on the network", "The page will load in black and white", "Your browser will run slower forever", "Nothing, HTTP is just as private"],
          answer: 0,
          explain: "Without HTTPS, data like passwords travels unencrypted and can be intercepted."
        },
        {
          type: "match",
          q: "Match each term to what it really tells you.",
          pairs: [
            ["Padlock icon", "The connection is encrypted"],
            ["HTTPS", "Traffic is protected in transit"],
            ["HTTP (no S)", "Traffic is sent unencrypted"]
          ],
          explain: "Encryption protects the pipe, but it says nothing about who is on the other end."
        },
        {
          type: "truefalse",
          q: "HTTPS helps stop someone on the same public Wi-Fi from reading the pages you send and receive.",
          answer: true,
          explain: "Because the traffic is encrypted, others on the network see scrambled data instead of your content."
        },
        {
          type: "mcq",
          q: "A phishing site set up by a scammer can still show a padlock. Why?",
          choices: ["Anyone can get a certificate to encrypt their site", "Padlocks are handed out by the police", "Only real banks can show a padlock", "The padlock is fake and clickable"],
          answer: 0,
          explain: "Certificates that enable HTTPS are widely available, so a scam site can encrypt traffic too."
        },
        {
          type: "fill",
          q: "The padlock tells you the connection is secure, but not that the site is ____.",
          answer: "trustworthy",
          accept: ["trustworthy", "legitimate", "honest", "safe"],
          explain: "Trust must come from checking the site itself, not just the presence of a padlock."
        }
      ]
    },
    {
      id: "l34",
      title: "Reading URLs",
      intro: "Learning to read a web address helps you catch lookalike and misspelled domains that scammers use to trick you.",
      questions: [
        {
          type: "mcq",
          q: "In the address shop.example.com, which part is the real registered domain?",
          choices: ["example.com", "shop.example", "shop.com", "example"],
          answer: 0,
          explain: "The registered domain is example.com. The word 'shop' in front is a subdomain the owner controls."
        },
        {
          type: "truefalse",
          q: "The part right before the first single slash is the domain, so you should read it carefully.",
          answer: true,
          explain: "Everything up to the first single slash is the host. Scammers hide fakes after the slash to fool you."
        },
        {
          type: "mcq",
          q: "Which of these is most likely a typosquatted lookalike of a well-known site?",
          choices: ["paypa1.com", "paypal.com", "help.paypal.com", "paypal.com/login"],
          answer: 0,
          explain: "paypa1.com swaps the letter l for the number 1, a classic trick to imitate a trusted brand."
        },
        {
          type: "fill",
          q: "Registering a domain that is a common misspelling of a real site is called ____.",
          answer: "typosquatting",
          accept: ["typosquatting", "typo squatting", "typosquat"],
          explain: "Typosquatting relies on you mistyping or not noticing a small spelling change in the address."
        },
        {
          type: "mcq",
          q: "You get a link to secure-login.example.com.attacker.net. What is the true site you would land on?",
          choices: ["attacker.net", "example.com", "secure-login.example.com", "example.com.attacker.net"],
          answer: 0,
          explain: "Read right to left before the first slash: the real domain is attacker.net, and everything before it is just a misleading subdomain."
        },
        {
          type: "order",
          q: "Put these steps in order for checking a link before you click.",
          items: ["Hover to reveal the real address", "Read the domain just before the first slash", "Check for misspellings or extra words", "Decide whether to click"],
          explain: "Slowing down to read the real domain is the single best habit for avoiding fake links."
        },
        {
          type: "match",
          q: "Match each URL trick to its description.",
          pairs: [
            ["Typosquatting", "A misspelled version of a real domain"],
            ["Lookalike characters", "Swapping letters for similar numbers or symbols"],
            ["Misleading subdomain", "Putting a trusted name in front of the real domain"]
          ],
          explain: "All three tricks aim to make a fake address look familiar at a glance."
        },
        {
          type: "truefalse",
          q: "A long, confusing link is a good reason to slow down and read the real domain before clicking.",
          answer: true,
          explain: "Attackers pad links with extra words to bury the real destination, so careful reading pays off."
        }
      ]
    },
    {
      id: "l35",
      title: "Certificates & Trust",
      intro: "TLS certificates are issued by trusted authorities, and your browser warns you when one is invalid or expired for a reason.",
      questions: [
        {
          type: "mcq",
          q: "What is the main job of a TLS certificate?",
          choices: ["To help prove a site is who it claims to be and enable encryption", "To make the site load images faster", "To block ads on the page", "To store your password for you"],
          answer: 0,
          explain: "A certificate ties a site to a verified identity and provides the keys used to encrypt the connection."
        },
        {
          type: "fill",
          q: "The trusted organization that issues TLS certificates is called a Certificate ____.",
          answer: "Authority",
          accept: ["authority", "authorities", "ca"],
          explain: "A Certificate Authority (CA) verifies the requester before issuing a certificate that browsers will trust."
        },
        {
          type: "truefalse",
          q: "If your browser shows a certificate warning, it is safe to just click through it and continue.",
          answer: false,
          explain: "A certificate warning can mean the connection is being tampered with or the site is misconfigured. Do not ignore it."
        },
        {
          type: "mcq",
          q: "Which of these would trigger a browser certificate warning?",
          choices: ["The certificate has expired", "The page has a lot of text", "The site uses a dark theme", "The site has many images"],
          answer: 0,
          explain: "Expired, mismatched, or untrusted certificates all cause the browser to warn you before proceeding."
        },
        {
          type: "match",
          q: "Match each certificate warning to what it usually means.",
          pairs: [
            ["Certificate expired", "The certificate is past its valid date"],
            ["Name mismatch", "The certificate does not match the site address"],
            ["Untrusted issuer", "No recognized authority vouches for it"]
          ],
          explain: "Each warning points to a different way the site's identity cannot be confirmed."
        },
        {
          type: "truefalse",
          q: "Your browser keeps a list of trusted Certificate Authorities and checks a site's certificate against it.",
          answer: true,
          explain: "If the certificate chains back to a trusted authority, the browser accepts it. If not, you get a warning."
        },
        {
          type: "mcq",
          q: "A site you trust suddenly shows a 'name mismatch' certificate error. What is the safest response?",
          choices: ["Stop and do not enter any information until you understand why", "Type your password quickly before it changes", "Turn off your antivirus and retry", "Ignore it because you trust the brand"],
          answer: 0,
          explain: "A mismatch can indicate an attacker impersonating the site, so pause and verify before entering anything."
        },
        {
          type: "order",
          q: "Order what happens when your browser connects to an HTTPS site.",
          items: ["The site presents its certificate", "The browser checks it against trusted authorities", "The browser confirms it is valid", "An encrypted connection is set up"],
          explain: "This handshake lets your browser confirm identity and set up encryption before any private data is sent."
        }
      ]
    },
    {
      id: "l36",
      title: "Cookies & Tracking",
      intro: "Cookies can keep you conveniently logged in, but third-party cookies can also follow you from site to site.",
      questions: [
        {
          type: "mcq",
          q: "What is a session cookie mainly used for?",
          choices: ["Keeping you logged in as you move around a site", "Speeding up your internet connection", "Blocking pop-up ads", "Storing your files on the server"],
          answer: 0,
          explain: "A session cookie lets a site remember that you are logged in so you do not re-enter your password on every page."
        },
        {
          type: "truefalse",
          q: "Third-party cookies can be used to track your activity across many different websites.",
          answer: true,
          explain: "Third-party cookies are set by outside services embedded on pages, letting them link your visits across sites."
        },
        {
          type: "match",
          q: "Match each cookie type to what it does.",
          pairs: [
            ["Session cookie", "Keeps you logged in during a visit"],
            ["First-party cookie", "Set by the site you are actually visiting"],
            ["Third-party cookie", "Set by an outside service to track you across sites"]
          ],
          explain: "First-party cookies support the site you chose to visit, while third-party cookies serve outside trackers."
        },
        {
          type: "fill",
          q: "A cookie set by a site other than the one in your address bar is called a ____ cookie.",
          answer: "third-party",
          accept: ["third-party", "third party", "thirdparty"],
          explain: "Third-party cookies come from embedded content and are the main tool used for cross-site tracking."
        },
        {
          type: "mcq",
          q: "Why might clearing your cookies log you out of websites?",
          choices: ["The cookie that remembered your logged-in session was deleted", "Your password was reset by the site", "Your internet was disconnected", "The website was taken offline"],
          answer: 0,
          explain: "Login state is stored in a cookie, so deleting cookies removes that remembered session."
        },
        {
          type: "truefalse",
          q: "A stolen session cookie can let an attacker act as you without knowing your password.",
          answer: true,
          explain: "If someone gets your active session cookie, the site may treat their requests as if they came from you."
        },
        {
          type: "mcq",
          q: "Which habit best limits cross-site tracking by cookies?",
          choices: ["Blocking or clearing third-party cookies", "Using a bigger monitor", "Increasing your screen brightness", "Turning off HTTPS"],
          answer: 0,
          explain: "Blocking third-party cookies removes the main mechanism trackers use to follow you between sites."
        }
      ]
    },
    {
      id: "l37",
      title: "Browser Security",
      intro: "Keeping your browser updated and being choosy about extensions closes off many common ways attackers get in.",
      questions: [
        {
          type: "mcq",
          q: "Why is keeping your browser updated important for security?",
          choices: ["Updates fix known security holes attackers exploit", "Updates make your fonts prettier", "Updates delete your bookmarks", "Updates are only about new colors"],
          answer: 0,
          explain: "Browser updates patch discovered vulnerabilities, so running old versions leaves known holes open."
        },
        {
          type: "truefalse",
          q: "Browser extensions can request broad permissions, like reading everything you type or view.",
          answer: true,
          explain: "Some extensions ask to read and change all your data on websites, which is powerful and worth scrutinizing."
        },
        {
          type: "mcq",
          q: "You are about to install an extension. What is the safest thing to check first?",
          choices: ["What permissions it asks for and whether the source is reputable", "How colorful its icon is", "Whether it has a fun name", "How large the download file is"],
          answer: 0,
          explain: "Excessive permissions and an unknown publisher are red flags. Install only what you trust and need."
        },
        {
          type: "fill",
          q: "You should install browser extensions only from ____ sources that you trust.",
          answer: "reputable",
          accept: ["reputable", "trusted", "official", "trustworthy"],
          explain: "Sticking to reputable sources reduces the chance of installing a malicious or abandoned extension."
        },
        {
          type: "match",
          q: "Match each browser habit to why it helps.",
          pairs: [
            ["Install updates promptly", "Closes known security holes"],
            ["Review extension permissions", "Avoids over-privileged add-ons"],
            ["Remove unused extensions", "Shrinks your attack surface"]
          ],
          explain: "Fewer, well-vetted, up-to-date components mean fewer ways for an attacker to get in."
        },
        {
          type: "truefalse",
          q: "An extension you no longer use should be left installed just in case, even if it is inactive.",
          answer: false,
          explain: "Unused extensions still carry risk if they update or get compromised, so remove ones you do not need."
        },
        {
          type: "order",
          q: "Order these steps for vetting a new extension.",
          items: ["Check that the publisher is reputable", "Read the permissions it requests", "Confirm you actually need it", "Install it"],
          explain: "Thinking about source, permissions, and need before installing keeps risky add-ons off your browser."
        },
        {
          type: "mcq",
          q: "Why can a compromised extension be dangerous even on secure HTTPS sites?",
          choices: ["It runs inside your browser and can read the pages after they are decrypted", "It turns off your monitor", "It changes your keyboard layout", "It slows your internet plan"],
          answer: 0,
          explain: "HTTPS protects data in transit, but an extension sees the page contents once they are decrypted in your browser."
        }
      ]
    },
    {
      id: "l38",
      title: "Fake & Malicious Sites",
      intro: "Phishing pages copy real logins to steal your password, and some sites try to push malware onto your device just by visiting.",
      questions: [
        {
          type: "mcq",
          q: "What is a phishing page trying to do?",
          choices: ["Trick you into entering your login or personal details on a fake site", "Show you the weather forecast", "Speed up your downloads", "Update your browser for you"],
          answer: 0,
          explain: "Phishing pages imitate a trusted login so you hand over credentials to attackers."
        },
        {
          type: "fill",
          q: "A ____ download tries to install malware just from visiting a booby-trapped page.",
          answer: "drive-by",
          accept: ["drive-by", "drive by", "driveby"],
          explain: "A drive-by download exploits your browser or plugins to install malware without a clear click to accept."
        },
        {
          type: "truefalse",
          q: "A page that looks exactly like your bank's login is automatically safe because it looks familiar.",
          answer: false,
          explain: "Attackers copy real pages pixel for pixel. Always verify the address, not just the appearance."
        },
        {
          type: "mcq",
          q: "An email link opens a login page that looks like your email provider. What should you check first?",
          choices: ["The domain in the address bar matches the real provider", "The background color of the page", "How fast the page loaded", "Whether the logo is animated"],
          answer: 0,
          explain: "The address is the reliable signal. A wrong or lookalike domain reveals a phishing page even if it looks perfect."
        },
        {
          type: "match",
          q: "Match each threat to what it is.",
          pairs: [
            ["Phishing page", "A fake login built to steal your credentials"],
            ["Drive-by download", "Malware pushed just by visiting a page"],
            ["Lookalike domain", "An address that mimics a real one"]
          ],
          explain: "Knowing the name and behavior of each trick helps you spot it in the wild."
        },
        {
          type: "truefalse",
          q: "Keeping your browser updated helps protect against many drive-by download attacks.",
          answer: true,
          explain: "Drive-by attacks target known browser flaws, so patched software blocks many of them."
        },
        {
          type: "order",
          q: "You get an urgent email with a login link. Order the safe response.",
          items: ["Pause and be suspicious of urgency", "Do not click the emailed link", "Type the known address yourself", "Log in only on the site you reached directly"],
          explain: "Reaching the site through an address you know, not the emailed link, defeats most phishing."
        },
        {
          type: "mcq",
          q: "Why do phishing messages often use urgency, like 'your account will be closed today'?",
          choices: ["Pressure makes people act fast and skip careful checks", "Urgent messages load faster", "It is required by email rules", "It makes the message more polite"],
          answer: 0,
          explain: "Creating panic is a social engineering tactic to stop you from pausing to verify."
        }
      ]
    },
    {
      id: "l39",
      title: "Safe Shopping & Banking",
      intro: "Before you type in payment or banking details, take a moment to confirm the site is really the one you meant to use.",
      questions: [
        {
          type: "mcq",
          q: "Before entering card details, what is the most reliable thing to confirm?",
          choices: ["You are on the correct, legitimate domain over HTTPS", "The site has a big checkout button", "The site loaded quickly", "The prices are very low"],
          answer: 0,
          explain: "Confirming the real domain over an encrypted connection is the key check before entering payment info."
        },
        {
          type: "truefalse",
          q: "An unusually large discount and pressure to 'buy now' can be signs of a scam shopping site.",
          answer: true,
          explain: "Too-good-to-be-true deals and urgency are common lures on fake or fraudulent stores."
        },
        {
          type: "fill",
          q: "To reach your bank safely, type the address yourself or use a saved ____ instead of an emailed link.",
          answer: "bookmark",
          accept: ["bookmark", "bookmarks", "favorite"],
          explain: "A trusted bookmark takes you straight to the real site and sidesteps fake links."
        },
        {
          type: "mcq",
          q: "Which of these is a red flag on a checkout page?",
          choices: ["A slightly misspelled domain in the address bar", "A clear list of items in your cart", "A standard shipping options menu", "A visible total price"],
          answer: 0,
          explain: "A misspelled or lookalike domain suggests a fake store trying to harvest your payment details."
        },
        {
          type: "match",
          q: "Match each safe-shopping habit to its benefit.",
          pairs: [
            ["Type the address yourself", "Avoids fake links from emails"],
            ["Check the domain carefully", "Catches lookalike scam stores"],
            ["Confirm HTTPS is used", "Keeps payment data encrypted in transit"]
          ],
          explain: "Reaching the real site and confirming encryption together protect your payment details."
        },
        {
          type: "truefalse",
          q: "Entering your card number on a plain HTTP page is fine as long as the store looks professional.",
          answer: false,
          explain: "Without HTTPS your card number is sent unencrypted, and a polished look does not prove the site is real."
        },
        {
          type: "order",
          q: "Order the steps before entering banking details.",
          items: ["Reach the site by a saved bookmark or typed address", "Confirm the domain is correct", "Confirm the connection is HTTPS", "Enter your details"],
          explain: "Verifying how you arrived, the domain, and encryption before typing keeps your banking info safe."
        },
        {
          type: "mcq",
          q: "A store asks you to pay by an unusual method with no buyer protection and pushes you to hurry. What does this suggest?",
          choices: ["It may be a scam trying to make refunds impossible", "It is a normal secure checkout", "It is faster and therefore safer", "It means the store is well established"],
          answer: 0,
          explain: "Demanding hard-to-reverse payments plus urgency is a classic sign of a fraudulent seller."
        }
      ]
    },
    {
      id: "l40",
      title: "Blocking Ads & Trackers",
      intro: "Reputable blockers cut down on tracking and reduce your exposure to malicious ads that can carry attacks.",
      questions: [
        {
          type: "mcq",
          q: "What does the term 'malvertising' describe?",
          choices: ["Malicious code delivered through online ads", "Ads that are simply annoying but harmless", "A type of email spam", "A browser update"],
          answer: 0,
          explain: "Malvertising hides attacks inside ads, so even legitimate sites can unknowingly serve a harmful one."
        },
        {
          type: "truefalse",
          q: "A reputable ad and tracker blocker can reduce both tracking and exposure to malicious ads.",
          answer: true,
          explain: "By stopping many ads and trackers from loading, a good blocker shrinks the surface for tracking and malvertising."
        },
        {
          type: "fill",
          q: "Attacks delivered through online advertising are known as ____.",
          answer: "malvertising",
          accept: ["malvertising", "mal-advertising", "malicious advertising"],
          explain: "Malvertising is a blend of malware and advertising, describing ads used to deliver attacks."
        },
        {
          type: "mcq",
          q: "Why should you choose a blocker from a reputable, well-reviewed source?",
          choices: ["A malicious or fake blocker could itself spy on your browsing", "Reputable ones have brighter icons", "It makes your screen larger", "It changes your default font"],
          answer: 0,
          explain: "A blocker sees your browsing, so a shady one could become the very tracker you were trying to avoid."
        },
        {
          type: "match",
          q: "Match each tool or term to its role.",
          pairs: [
            ["Ad blocker", "Stops many ads from loading"],
            ["Tracker blocker", "Blocks scripts that follow you across sites"],
            ["Malvertising", "Attacks hidden inside ads"]
          ],
          explain: "Blockers reduce what loads on a page, which limits both tracking and ad-based attacks."
        },
        {
          type: "truefalse",
          q: "Because a blocker can see your browsing, its own trustworthiness matters a lot.",
          answer: true,
          explain: "You are trusting the blocker with visibility into your activity, so pick one with a strong reputation."
        },
        {
          type: "mcq",
          q: "Besides privacy, what security benefit can blocking ads and trackers provide?",
          choices: ["Fewer chances to load a malicious ad", "Guaranteed protection from all viruses", "A faster internet plan from your provider", "Automatic password changes"],
          answer: 0,
          explain: "Fewer loaded ads and scripts means fewer opportunities for malvertising to reach your browser."
        },
        {
          type: "order",
          q: "Order the steps to add a blocker safely.",
          items: ["Pick a well-reviewed, reputable blocker", "Install it from an official source", "Review the permissions it requests", "Keep it updated over time"],
          explain: "Choosing a trusted blocker, installing it properly, and keeping it current maximizes the protection."
        }
      ]
    }
  ]
});
