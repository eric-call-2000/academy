window.ACADEMY.addUnit("cyber", {
  id: "unit-10",
  title: "Defending, Responding & the Future",
  color: "#1cb0f6",
  icon: "🚨",
  description: "Putting it together: defend, detect, respond, and keep up as threats evolve.",
  lessons: [
    {
      id: "l73",
      title: "Networks & Firewalls",
      intro: "A firewall decides which traffic gets in and out, and a few simple habits keep your home network locked down.",
      questions: [
        {
          type: "mcq",
          q: "What is the main job of a firewall?",
          choices: [
            "Filter network traffic and allow or block it based on rules",
            "Speed up your internet connection",
            "Store all your passwords",
            "Scan documents for spelling errors"
          ],
          answer: 0,
          explain: "A firewall inspects traffic and allows or blocks it based on a set of rules, acting like a gatekeeper for your network."
        },
        {
          type: "truefalse",
          q: "Leaving your Wi-Fi router set to its default admin password is safe because attackers cannot guess it.",
          answer: false,
          explain: "Default router passwords are published online and easy to look up, so you should always change them to something unique."
        },
        {
          type: "mcq",
          q: "Which Wi-Fi setting gives the strongest protection today?",
          choices: [
            "WPA3 (or WPA2 if WPA3 is unavailable)",
            "WEP",
            "An open network with no password",
            "Hiding the network name only"
          ],
          answer: 0,
          explain: "WPA3 is the current strong standard, with WPA2 as an acceptable fallback. WEP is old and broken, and an open network has no encryption at all."
        },
        {
          type: "fill",
          q: "A firewall that blocks everything by default and only allows what you explicitly permit follows a ____ rule.",
          answer: "default-deny",
          accept: ["default-deny", "default deny", "deny by default", "deny-by-default"],
          explain: "Default-deny means nothing gets through unless a rule explicitly allows it, which is safer than allowing everything by default."
        },
        {
          type: "order",
          q: "Order these steps to better secure a new home router, from first to last.",
          items: [
            "Change the default admin password",
            "Turn on WPA3 or WPA2 encryption",
            "Update the router firmware",
            "Disable remote management if you do not need it"
          ],
          explain: "Lock down the admin login first, then enable strong encryption, patch the firmware, and finally reduce the attack surface by turning off features you do not use."
        },
        {
          type: "match",
          q: "Match each networking term to its meaning.",
          pairs: [
            ["Firewall", "Filters traffic using allow/block rules"],
            ["Router", "Directs data between your network and the internet"],
            ["VPN", "Encrypts your traffic over an untrusted network"],
            ["Port", "A numbered channel a service listens on"]
          ],
          explain: "Each device or concept plays a distinct role: firewalls filter, routers direct, VPNs encrypt, and ports identify services."
        },
        {
          type: "truefalse",
          q: "A firewall alone makes your network completely secure with nothing else needed.",
          answer: false,
          explain: "A firewall is one important layer, but real security uses many layers: updates, strong passwords, encryption, and good habits."
        },
        {
          type: "mcq",
          q: "Why should you keep your router's firmware updated?",
          choices: [
            "Updates fix known security holes attackers could exploit",
            "It makes the router lights brighter",
            "It deletes your saved websites",
            "Updates are only about changing the logo"
          ],
          answer: 0,
          explain: "Firmware updates patch known vulnerabilities, so keeping the router current closes doors that attackers would otherwise use."
        }
      ]
    },
    {
      id: "l74",
      title: "Monitoring & Logging",
      intro: "Logs are the records that let you notice something is wrong and figure out what happened after the fact.",
      questions: [
        {
          type: "mcq",
          q: "What is a log in security terms?",
          choices: [
            "A record of events like logins, errors, and actions",
            "A wooden object used to start fires",
            "A type of firewall rule",
            "A password stored in plaintext"
          ],
          answer: 0,
          explain: "A log is a timestamped record of events, and reviewing logs helps you detect and investigate suspicious activity."
        },
        {
          type: "truefalse",
          q: "If you never keep any logs, investigating a break-in after it happens becomes much harder.",
          answer: true,
          explain: "Without logs you have little evidence of what an attacker did, so good logging is essential for detection and investigation."
        },
        {
          type: "fill",
          q: "Watching systems in real time for signs of trouble is called ____.",
          answer: "monitoring",
          accept: ["monitoring", "monitor"],
          explain: "Monitoring means actively watching for problems as they happen, while logging is the recorded history you can review later."
        },
        {
          type: "mcq",
          q: "Why should you avoid writing passwords or full credit card numbers into log files?",
          choices: [
            "Anyone who reads the logs would then see those secrets",
            "Logs cannot store numbers at all",
            "It makes the logs load faster",
            "Passwords automatically encrypt themselves in logs"
          ],
          answer: 0,
          explain: "Logs are often widely readable and kept a long time, so putting secrets in them turns a log leak into a secrets leak."
        },
        {
          type: "match",
          q: "Match each log-related term to its meaning.",
          pairs: [
            ["Alert", "A notification that something suspicious happened"],
            ["Audit trail", "A record of who did what and when"],
            ["Timestamp", "The exact time an event occurred"],
            ["Retention", "How long logs are kept before deletion"]
          ],
          explain: "Alerts flag problems, audit trails show accountability, timestamps order events, and retention policies decide how long records live."
        },
        {
          type: "order",
          q: "Order how logs typically help you catch an intruder, from first to last.",
          items: [
            "Systems record events into logs",
            "Monitoring spots an unusual pattern",
            "An alert notifies the team",
            "Logs are reviewed to investigate what happened"
          ],
          explain: "Logs are collected first, monitoring notices anomalies, alerts raise the flag, and detailed log review reconstructs the incident."
        },
        {
          type: "truefalse",
          q: "Sending logs to a separate, protected system makes it harder for an attacker to erase their tracks.",
          answer: true,
          explain: "If logs live only on the hacked machine, an attacker can delete them, so shipping copies to a protected location preserves the evidence."
        },
        {
          type: "mcq",
          q: "What is a good sign to alert on in login logs?",
          choices: [
            "Many failed login attempts in a short time",
            "A user logging in once during work hours",
            "A page loading successfully",
            "A file being saved normally"
          ],
          answer: 0,
          explain: "A burst of failed logins can signal a password-guessing attack, so it is a classic thing to alert on."
        }
      ]
    },
    {
      id: "l75",
      title: "Incident Response",
      intro: "When a breach happens, a calm, ordered plan helps you contain the damage and come back stronger.",
      questions: [
        {
          type: "order",
          q: "Put the standard incident response stages in order, from first to last.",
          items: [
            "Prepare",
            "Detect",
            "Contain",
            "Eradicate",
            "Recover",
            "Learn"
          ],
          explain: "A common incident response flow is prepare, detect, contain, eradicate, recover, and finally learn from what happened."
        },
        {
          type: "mcq",
          q: "What does the 'contain' stage aim to do?",
          choices: [
            "Stop the incident from spreading further",
            "Permanently delete all company data",
            "Ignore the problem until it goes away",
            "Announce the breach to competitors"
          ],
          answer: 0,
          explain: "Containment limits the blast radius, for example by isolating an infected machine so the attacker cannot reach more systems."
        },
        {
          type: "truefalse",
          q: "Having an incident response plan ready before anything goes wrong makes a real breach easier to handle.",
          answer: true,
          explain: "Preparation, including a written plan and clear roles, lets a team respond quickly instead of panicking during a crisis."
        },
        {
          type: "fill",
          q: "The step where you remove the attacker's malware and access from your systems is called ____.",
          answer: "eradication",
          accept: ["eradication", "eradicate", "eradicating"],
          explain: "Eradication means fully removing the threat, such as deleting malware and closing the hole the attacker used to get in."
        },
        {
          type: "match",
          q: "Match each incident response stage to what happens in it.",
          pairs: [
            ["Detect", "Notice that an incident is occurring"],
            ["Contain", "Stop it from spreading"],
            ["Recover", "Restore systems to normal operation"],
            ["Learn", "Review what happened to prevent a repeat"]
          ],
          explain: "Each stage has a clear goal, and the final learn stage feeds lessons back into better preparation for next time."
        },
        {
          type: "mcq",
          q: "Why is the 'learn' or post-incident review stage important?",
          choices: [
            "It turns the incident into lessons that prevent future ones",
            "It assigns blame and punishes people",
            "It is optional paperwork with no value",
            "It reopens the breach on purpose"
          ],
          answer: 0,
          explain: "A blameless review finds root causes and improvements, so the same mistake is less likely to happen again."
        },
        {
          type: "truefalse",
          q: "The best first move during a breach is to immediately wipe everything without recording any evidence.",
          answer: false,
          explain: "Wiping too fast destroys evidence and may miss how the attacker got in, so you should contain carefully and preserve information first."
        },
        {
          type: "mcq",
          q: "During recovery, what should you confirm before putting a system back online?",
          choices: [
            "That the threat is actually removed and the hole is patched",
            "That the logo looks nice",
            "That marketing approved the color scheme",
            "That the printer has paper"
          ],
          answer: 0,
          explain: "Recovery only works if the attacker is truly gone and the vulnerability is fixed, otherwise they can simply return."
        }
      ]
    },
    {
      id: "l76",
      title: "The Security Mindset",
      intro: "Thinking like an attacker and questioning your assumptions helps you find weaknesses before the bad guys do.",
      questions: [
        {
          type: "mcq",
          q: "What does 'thinking like an attacker' mean?",
          choices: [
            "Asking how a system could be misused or broken, to defend it better",
            "Actually breaking into systems you do not own",
            "Trusting that all input is safe",
            "Ignoring edge cases"
          ],
          answer: 0,
          explain: "The security mindset means imagining how something could be abused so you can defend it, not committing real attacks."
        },
        {
          type: "truefalse",
          q: "A good security mindset means questioning assumptions like 'users will only enter valid data.'",
          answer: true,
          explain: "Attackers deliberately break assumptions, so questioning them helps you find gaps like unexpected or malicious input."
        },
        {
          type: "fill",
          q: "The idea that no user or request should be automatically trusted is called ____ trust.",
          answer: "zero",
          accept: ["zero", "zero-trust", "zero trust"],
          explain: "Zero trust means verifying every request rather than assuming anything inside the network is safe by default."
        },
        {
          type: "mcq",
          q: "Which question best reflects a security mindset when designing a login form?",
          choices: [
            "What happens if someone tries thousands of guesses?",
            "What font looks the nicest?",
            "Should the button be blue or green?",
            "How can we make the page load a bit faster?"
          ],
          answer: 0,
          explain: "Anticipating abuse, like automated guessing, leads to defenses such as rate limits and account lockouts."
        },
        {
          type: "match",
          q: "Match each mindset idea to its meaning.",
          pairs: [
            ["Attacker's view", "Imagine how a feature could be abused"],
            ["Question assumptions", "Do not assume input or users are safe"],
            ["Defense in depth", "Use many layers so one failure is not fatal"],
            ["Assume breach", "Plan as if attackers may already be inside"]
          ],
          explain: "These habits shift your thinking from 'it should work' to 'how could this fail or be abused,' which is the heart of security."
        },
        {
          type: "truefalse",
          q: "Assuming your systems might already be compromised is a useful way to plan stronger defenses.",
          answer: true,
          explain: "The 'assume breach' mindset pushes you to limit damage and detect intruders, rather than trusting that walls are never crossed."
        },
        {
          type: "mcq",
          q: "What is the safest default assumption about data coming from a user?",
          choices: [
            "Treat it as untrusted until validated",
            "Assume it is always clean and safe",
            "Assume it only contains numbers",
            "Assume no one will ever send bad input"
          ],
          answer: 0,
          explain: "Treating all user input as untrusted until checked is a core defensive habit that prevents many attacks."
        }
      ]
    },
    {
      id: "l77",
      title: "Secure Development Lifecycle",
      intro: "Security works best when it is built in from the start of a project, not bolted on at the very end.",
      questions: [
        {
          type: "mcq",
          q: "What is the main idea of a Secure Development Lifecycle?",
          choices: [
            "Build security into every stage of development, from design to release",
            "Add all security only on the last day before launch",
            "Let users handle security themselves",
            "Skip security to ship faster"
          ],
          answer: 0,
          explain: "A Secure Development Lifecycle weaves security into design, coding, testing, and deployment instead of treating it as an afterthought."
        },
        {
          type: "truefalse",
          q: "Fixing a security flaw is usually cheaper and easier the earlier it is caught in development.",
          answer: true,
          explain: "Catching flaws during design or coding costs far less than fixing them after release, so early attention pays off."
        },
        {
          type: "order",
          q: "Order these secure development activities by when they typically happen, from first to last.",
          items: [
            "Threat modeling during design",
            "Secure coding while building",
            "Security testing before release",
            "Monitoring and patching after release"
          ],
          explain: "Security spans the whole lifecycle: think about threats early, code carefully, test before shipping, and keep watching after launch."
        },
        {
          type: "fill",
          q: "Reviewing a design to find how it could be attacked is called ____ modeling.",
          answer: "threat",
          accept: ["threat", "threat modeling", "threat-modeling"],
          explain: "Threat modeling asks what could go wrong and how an attacker might strike, so you can design defenses before writing code."
        },
        {
          type: "match",
          q: "Match each secure development practice to its purpose.",
          pairs: [
            ["Threat modeling", "Find risks in the design early"],
            ["Code review", "Catch bugs and flaws in the code"],
            ["Dependency scanning", "Find known vulnerabilities in libraries"],
            ["Security testing", "Probe the app for weaknesses before release"]
          ],
          explain: "Each practice targets a different stage, and together they reduce the chance a flaw survives all the way to production."
        },
        {
          type: "mcq",
          q: "Why is keeping third-party libraries updated part of secure development?",
          choices: [
            "Old libraries may contain known vulnerabilities attackers can exploit",
            "New libraries always have prettier documentation",
            "Updates are only about performance, never security",
            "Libraries never have security bugs"
          ],
          answer: 0,
          explain: "Your app inherits the flaws of the code it depends on, so patching libraries closes vulnerabilities you did not write yourself."
        },
        {
          type: "truefalse",
          q: "Bolting security on at the very end is just as effective as building it in from the start.",
          answer: false,
          explain: "Last-minute security often misses design-level flaws and is costly to retrofit, which is why security should be built in throughout."
        }
      ]
    },
    {
      id: "l78",
      title: "Backups & Recovery",
      intro: "Tested, encrypted backups are your last line of defense when ransomware or disaster strikes.",
      questions: [
        {
          type: "mcq",
          q: "Why are backups especially important against ransomware?",
          choices: [
            "You can restore your files instead of paying the attacker",
            "Backups delete the ransomware automatically over the network",
            "Backups make your computer immune to all viruses",
            "Ransomware cannot exist if you have any file at all"
          ],
          answer: 0,
          explain: "If ransomware encrypts your files, good backups let you restore them without paying, which is why they are a key defense."
        },
        {
          type: "fill",
          q: "A common guideline says to keep ____ copies of your data on 2 types of media with 1 copy offsite (the 3-2-1 rule).",
          answer: "3",
          accept: ["3", "three"],
          explain: "The 3-2-1 rule suggests 3 copies of data, on 2 different media, with 1 copy kept offsite, so no single failure wipes everything."
        },
        {
          type: "truefalse",
          q: "A backup you have never tried to restore might not actually work when you need it.",
          answer: true,
          explain: "Backups can silently fail or be incomplete, so testing restores regularly is the only way to trust them."
        },
        {
          type: "mcq",
          q: "Why should backups be encrypted?",
          choices: [
            "So the data stays confidential even if the backup is stolen or lost",
            "So the backup takes up more space",
            "So the backup runs slower on purpose",
            "Encryption is not useful for backups"
          ],
          answer: 0,
          explain: "A backup holds a full copy of your data, so encrypting it keeps that data confidential if the backup falls into the wrong hands."
        },
        {
          type: "mcq",
          q: "Why is keeping a backup offline or off the network a smart move against ransomware?",
          choices: [
            "Ransomware on the main system cannot reach and encrypt it",
            "Offline backups charge faster",
            "It makes the backup glow in the dark",
            "Offline backups do not need to be tested"
          ],
          answer: 0,
          explain: "Ransomware often spreads to connected backups, so an offline or isolated copy stays safe and ready to restore."
        },
        {
          type: "order",
          q: "Order the steps of recovering from a ransomware attack using backups, from first to last.",
          items: [
            "Isolate the infected systems",
            "Remove the ransomware and confirm it is gone",
            "Restore clean data from a trusted backup",
            "Verify the restored systems work correctly"
          ],
          explain: "Contain first, clean out the threat, restore from a known-good backup, and finally verify everything works before returning to normal."
        },
        {
          type: "match",
          q: "Match each backup concept to its meaning.",
          pairs: [
            ["Offsite copy", "A backup stored in a different location"],
            ["Restore test", "Practicing recovery to confirm backups work"],
            ["Encryption", "Protecting backup data with a key"],
            ["Versioning", "Keeping multiple points in time to roll back to"]
          ],
          explain: "Strong backup practice combines separate locations, tested restores, encryption, and multiple versions to recover from many kinds of trouble."
        },
        {
          type: "truefalse",
          q: "Keeping every backup on the same computer as your live data is a reliable strategy.",
          answer: false,
          explain: "If that computer is stolen, fails, or is hit by ransomware, both the data and its backups are lost together, so copies should be separated."
        }
      ]
    },
    {
      id: "l79",
      title: "AI in Cybersecurity",
      intro: "AI is a double-edged sword, powering both smarter attacks and stronger defenses at massive scale.",
      questions: [
        {
          type: "mcq",
          q: "How can attackers misuse AI?",
          choices: [
            "To create convincing deepfakes and more believable phishing messages",
            "To make their attacks automatically legal",
            "To guarantee they never get caught",
            "AI cannot be misused by attackers at all"
          ],
          answer: 0,
          explain: "AI can generate realistic fake voices, videos, and polished phishing text, making scams harder to spot."
        },
        {
          type: "fill",
          q: "A realistic fake video or audio clip generated by AI to impersonate someone is called a ____.",
          answer: "deepfake",
          accept: ["deepfake", "deep fake", "deep-fake"],
          explain: "A deepfake uses AI to fabricate lifelike video or audio, which attackers can use to impersonate real people."
        },
        {
          type: "truefalse",
          q: "AI can help defenders by spotting unusual patterns across huge amounts of data quickly.",
          answer: true,
          explain: "AI shines at sifting massive logs and traffic to flag anomalies a human might miss, strengthening detection at scale."
        },
        {
          type: "mcq",
          q: "A caller sounds exactly like your boss and urgently demands a wire transfer. What is the safe response?",
          choices: [
            "Verify through a separate trusted channel before acting",
            "Send the money immediately since the voice matches",
            "Reply to the caller with your password",
            "Assume voices can never be faked"
          ],
          answer: 0,
          explain: "AI voice cloning can fake a familiar voice, so verifying urgent requests through a known separate channel protects you from deepfake scams."
        },
        {
          type: "match",
          q: "Match each AI-and-security idea to whether it mainly helps attackers or defenders.",
          pairs: [
            ["Deepfakes", "Help attackers impersonate people"],
            ["AI-written phishing", "Helps attackers craft believable scams"],
            ["Anomaly detection", "Helps defenders spot unusual activity"],
            ["Automated log analysis", "Helps defenders review data at scale"]
          ],
          explain: "The same AI power cuts both ways: it can craft attacks and it can accelerate defense, so both sides are racing to use it."
        },
        {
          type: "truefalse",
          q: "Because AI-generated phishing can be flawless, spotting bad grammar is no longer a reliable way to catch every scam.",
          answer: true,
          explain: "AI can write clean, professional messages, so you must rely on verifying requests and links rather than just hunting for typos."
        },
        {
          type: "mcq",
          q: "What is a healthy way to think about AI security tools?",
          choices: [
            "They are helpful aids, but human judgment and layered defenses still matter",
            "They completely replace the need for any other security",
            "They are useless and should be ignored",
            "They make you immune to every attack"
          ],
          answer: 0,
          explain: "AI is a powerful helper, not a silver bullet, so it works best combined with human oversight and other security layers."
        }
      ]
    },
    {
      id: "l80",
      title: "Staying Current",
      intro: "Threats keep changing, so lasting security comes from continuous learning and a healthy, questioning mindset.",
      questions: [
        {
          type: "truefalse",
          q: "Once you learn security basics, you can stop paying attention because threats never change.",
          answer: false,
          explain: "Attack techniques and technologies evolve constantly, so staying secure means continuing to learn and adapt over time."
        },
        {
          type: "mcq",
          q: "What is a healthy default attitude toward an unexpected urgent message asking you to act fast?",
          choices: [
            "Slow down and verify before acting",
            "Trust it fully because it feels urgent",
            "Click every link right away",
            "Share your password to be safe"
          ],
          answer: 0,
          explain: "Urgency is a classic manipulation tactic, so pausing to verify is one of the strongest everyday defenses."
        },
        {
          type: "fill",
          q: "Fixing known software flaws by installing updates is commonly called ____.",
          answer: "patching",
          accept: ["patching", "patch", "patches"],
          explain: "Patching means applying updates that fix security holes, and doing it promptly closes doors before attackers use them."
        },
        {
          type: "match",
          q: "Match each durable security principle to its meaning.",
          pairs: [
            ["CIA triad", "Confidentiality, Integrity, and Availability"],
            ["Least privilege", "Give only the access truly needed"],
            ["Defense in depth", "Use multiple protective layers"],
            ["MFA", "Require a second factor to log in"]
          ],
          explain: "These core ideas stay relevant even as specific threats change, which is why they anchor a lasting security mindset."
        },
        {
          type: "order",
          q: "Order these good habits for keeping yourself secure over time, from a strong starting point onward.",
          items: [
            "Use strong, unique passwords with a password manager",
            "Turn on multi-factor authentication",
            "Keep software and devices updated",
            "Stay alert to phishing and verify requests"
          ],
          explain: "Layered everyday habits, from strong passwords and MFA to updates and phishing awareness, add up to durable protection."
        },
        {
          type: "mcq",
          q: "Which statement about the padlock icon in a browser is correct?",
          choices: [
            "It means the connection is encrypted, not that the site is trustworthy",
            "It guarantees the website is honest and safe",
            "It means the site can never be a scam",
            "It proves the company behind the site is legitimate"
          ],
          answer: 0,
          explain: "The padlock only shows the connection is encrypted with HTTPS, and even scam sites can have it, so it is not a trust badge."
        },
        {
          type: "truefalse",
          q: "A questioning mindset, asking 'is this really who it claims to be,' is a key defense as threats evolve.",
          answer: true,
          explain: "Technology changes but the habit of verifying and questioning stays valuable, protecting you against new and old tricks alike."
        },
        {
          type: "mcq",
          q: "What is a good way to keep learning about new threats?",
          choices: [
            "Follow reputable security news and guidance regularly",
            "Assume you already know everything",
            "Only learn after you have been hacked",
            "Ignore all security advice"
          ],
          answer: 0,
          explain: "Following trustworthy security sources keeps your knowledge fresh, so you can recognize and respond to emerging threats."
        }
      ]
    }
  ]
});
