window.ACADEMY.addUnit("cyber", {
  id: "unit-1",
  title: "Cybersecurity Foundations",
  color: "#58cc02",
  icon: "🛡️",
  description: "The core ideas behind protecting systems, data, and people from digital attacks.",
  lessons: [
    {
      id: "l1",
      title: "What Is Cybersecurity?",
      intro: "Cybersecurity is protecting systems, networks, data, and people from digital attacks, and it matters for everyone who uses technology.",
      questions: [
        {
          type: "mcq",
          q: "In simple terms, what is cybersecurity?",
          choices: [
            "Protecting systems, data, and people from digital attacks",
            "Making websites load faster",
            "Designing prettier apps",
            "Storing more files on a computer"
          ],
          answer: 0,
          explain: "Cybersecurity is the practice of defending computers, networks, data, and users from attacks, theft, and damage."
        },
        {
          type: "truefalse",
          q: "Cybersecurity only matters for large companies, not regular people.",
          answer: false,
          explain: "Everyone with a phone, email, or bank account is a potential target, so good habits protect all of us."
        },
        {
          type: "mcq",
          q: "Which of these is a common goal of an attacker?",
          choices: [
            "Stealing personal or financial data",
            "Helping you back up your photos",
            "Speeding up your internet",
            "Cleaning your keyboard"
          ],
          answer: 0,
          explain: "Attackers often want money, data, or control, which is why we protect our accounts and devices."
        },
        {
          type: "fill",
          q: "A weakness in a system that an attacker could exploit is called a ____.",
          answer: "vulnerability",
          accept: ["vulnerability", "weakness", "flaw"],
          explain: "A vulnerability is a flaw or weakness that could be used to break into or harm a system."
        },
        {
          type: "match",
          q: "Match each everyday item to the thing it helps protect.",
          pairs: [
            ["Strong password", "Your accounts"],
            ["Antivirus software", "Your device"],
            ["Screen lock", "Your phone if lost"]
          ],
          explain: "Different security tools protect different things, and using several together keeps you safer."
        },
        {
          type: "truefalse",
          q: "Cybersecurity covers both websites and mobile apps.",
          answer: true,
          explain: "Any software that handles data can be attacked, so security applies to websites, apps, and devices alike."
        },
        {
          type: "mcq",
          q: "Why is it useful for regular users to learn security basics?",
          choices: [
            "So they can spot scams and protect their own accounts",
            "So they can build faster computers",
            "So they can write video games",
            "So they never need passwords again"
          ],
          answer: 0,
          explain: "Awareness helps people avoid scams, protect their data, and make safer choices online."
        },
        {
          type: "order",
          q: "Order these from smallest to largest in what security protects.",
          items: ["A single password", "One user account", "An entire company network"],
          explain: "Security scales up from tiny secrets like passwords to whole networks of systems."
        }
      ]
    },
    {
      id: "l2",
      title: "The CIA Triad",
      intro: "The three core goals of security are Confidentiality, Integrity, and Availability, together called the CIA triad.",
      questions: [
        {
          type: "mcq",
          q: "What do the three letters in the CIA triad stand for?",
          choices: [
            "Confidentiality, Integrity, Availability",
            "Control, Internet, Access",
            "Cyber, Information, Attack",
            "Cloud, Identity, Authentication"
          ],
          answer: 0,
          explain: "The CIA triad is the classic model for the three main goals of information security."
        },
        {
          type: "match",
          q: "Match each CIA goal to what it protects.",
          pairs: [
            ["Confidentiality", "Only allowed people can see the data"],
            ["Integrity", "The data has not been changed or tampered with"],
            ["Availability", "The data and systems are up when needed"]
          ],
          explain: "Confidentiality is secrecy, integrity is trustworthiness, and availability is access when you need it."
        },
        {
          type: "fill",
          q: "Keeping data secret so only authorized people can read it is called ____.",
          answer: "confidentiality",
          accept: ["confidentiality", "confidential"],
          explain: "Confidentiality means preventing unauthorized people from seeing private information."
        },
        {
          type: "truefalse",
          q: "Integrity means making sure data has not been secretly altered.",
          answer: true,
          explain: "Integrity is about trust, ensuring data stays accurate and unmodified by attackers or errors."
        },
        {
          type: "mcq",
          q: "A ransomware attack that locks users out of their files mainly harms which CIA goal?",
          choices: [
            "Availability",
            "Confidentiality",
            "Integrity",
            "None of them"
          ],
          answer: 0,
          explain: "If people cannot reach their own data or systems, availability has been broken."
        },
        {
          type: "mcq",
          q: "A leaked list of customer passwords is mainly a failure of which goal?",
          choices: [
            "Confidentiality",
            "Availability",
            "Integrity",
            "Speed"
          ],
          answer: 0,
          explain: "A leak exposes private data to the wrong people, which breaks confidentiality."
        },
        {
          type: "order",
          q: "Order the CIA triad as the letters appear in its name.",
          items: ["Confidentiality", "Integrity", "Availability"],
          explain: "The name spells out the order: Confidentiality, Integrity, Availability."
        },
        {
          type: "truefalse",
          q: "A good security design usually has to balance all three CIA goals at once.",
          answer: true,
          explain: "Real systems must protect secrecy and accuracy while still staying usable and available."
        }
      ]
    },
    {
      id: "l3",
      title: "Threats, Vulnerabilities & Risk",
      intro: "A threat is a possible danger, a vulnerability is a weakness, and risk is the chance and impact of the two meeting.",
      questions: [
        {
          type: "match",
          q: "Match each term to its plain meaning.",
          pairs: [
            ["Threat", "A possible danger that could cause harm"],
            ["Vulnerability", "A weakness that could be exploited"],
            ["Risk", "The chance and impact of harm actually happening"]
          ],
          explain: "A threat needs a vulnerability to exploit, and risk measures how likely and how bad the result could be."
        },
        {
          type: "mcq",
          q: "Which of these is best described as a vulnerability?",
          choices: [
            "Software that has not been updated and has a known flaw",
            "A hacker who wants to steal data",
            "A rainstorm",
            "A well-trained security team"
          ],
          answer: 0,
          explain: "Unpatched software with a known flaw is a weakness an attacker could exploit."
        },
        {
          type: "fill",
          q: "The chance that a threat exploits a vulnerability and causes harm is called ____.",
          answer: "risk",
          accept: ["risk"],
          explain: "Risk combines how likely something bad is with how damaging it would be."
        },
        {
          type: "truefalse",
          q: "A vulnerability with no threat that can reach it may still be a real, urgent danger.",
          answer: false,
          explain: "Risk needs both a weakness and a threat that can reach it, so an unreachable flaw is lower risk."
        },
        {
          type: "mcq",
          q: "Which is an example of a threat?",
          choices: [
            "A phishing attacker trying to trick employees",
            "A missing lock on a door",
            "An outdated password policy",
            "A typo in a document"
          ],
          answer: 0,
          explain: "A threat is the source of possible harm, such as an attacker or malware trying to cause damage."
        },
        {
          type: "order",
          q: "Order how these usually connect to create risk.",
          items: ["A vulnerability exists", "A threat targets that vulnerability", "Risk of harm results"],
          explain: "Risk emerges when a real threat meets an actual weakness in a system."
        },
        {
          type: "mcq",
          q: "What is a common way to reduce risk?",
          choices: [
            "Fix vulnerabilities by patching and adding controls",
            "Ignore the problem and hope",
            "Turn off all logging",
            "Give everyone admin access"
          ],
          answer: 0,
          explain: "Patching flaws and adding controls shrinks the weaknesses that threats can exploit."
        },
        {
          type: "truefalse",
          q: "Risk can rarely be reduced to exactly zero, so we manage it rather than eliminate it.",
          answer: true,
          explain: "Some risk almost always remains, so security is about lowering risk to an acceptable level."
        }
      ]
    },
    {
      id: "l4",
      title: "Who Are the Attackers?",
      intro: "Attackers come in many types with different motives, from ethical hackers to criminals and nation-states.",
      questions: [
        {
          type: "match",
          q: "Match each hacker type to its description.",
          pairs: [
            ["White-hat hacker", "Tests systems with permission to improve security"],
            ["Black-hat hacker", "Breaks in illegally for personal gain or harm"],
            ["Grey-hat hacker", "Acts in a gray area, sometimes without clear permission"]
          ],
          explain: "White-hats have permission and good intent, black-hats are malicious, and grey-hats fall in between."
        },
        {
          type: "mcq",
          q: "What is a white-hat hacker?",
          choices: [
            "An ethical hacker who finds flaws to help fix them, with permission",
            "A criminal who steals money",
            "Someone who never uses computers",
            "A type of firewall"
          ],
          answer: 0,
          explain: "White-hat hackers do authorized testing to help organizations find and fix weaknesses."
        },
        {
          type: "fill",
          q: "An attacker who works inside an organization, like an employee, is called an ____ threat.",
          answer: "insider",
          accept: ["insider", "inside"],
          explain: "Insider threats come from people who already have some trusted access, such as staff or contractors."
        },
        {
          type: "mcq",
          q: "What is a script kiddie?",
          choices: [
            "An unskilled attacker who runs tools others made without deep understanding",
            "A senior security researcher",
            "A children's coding class",
            "A type of antivirus"
          ],
          answer: 0,
          explain: "Script kiddies use ready-made tools without much skill, but they can still cause real damage."
        },
        {
          type: "truefalse",
          q: "Nation-state attackers are often well-funded and highly skilled.",
          answer: true,
          explain: "Governments can back attackers with strong resources, patience, and advanced techniques."
        },
        {
          type: "match",
          q: "Match each attacker to a common motive.",
          pairs: [
            ["Criminal group", "Money"],
            ["Nation-state", "Spying or political advantage"],
            ["Insider", "Revenge or personal gain"]
          ],
          explain: "Understanding motive helps predict what an attacker might target and why."
        },
        {
          type: "truefalse",
          q: "All hackers are criminals trying to do harm.",
          answer: false,
          explain: "Many hackers are ethical professionals who help defend systems, so intent and permission matter."
        },
        {
          type: "mcq",
          q: "Why does knowing the type of attacker help defenders?",
          choices: [
            "It helps predict their goals, skill level, and likely tactics",
            "It makes the network faster",
            "It removes the need for passwords",
            "It guarantees no attacks will happen"
          ],
          answer: 0,
          explain: "Different attackers behave differently, so understanding them guides smarter defenses."
        }
      ]
    },
    {
      id: "l5",
      title: "The Attack Surface",
      intro: "The attack surface is every possible entry point into a system, including websites, apps, devices, and people.",
      questions: [
        {
          type: "mcq",
          q: "What is an attack surface?",
          choices: [
            "The total set of points where an attacker could try to get in",
            "The screen of a laptop",
            "A type of malware",
            "The speed of a network"
          ],
          answer: 0,
          explain: "The attack surface is the sum of all the ways in, so a bigger surface means more chances for attack."
        },
        {
          type: "truefalse",
          q: "A larger attack surface generally means more risk.",
          answer: true,
          explain: "More entry points give attackers more opportunities, so reducing the surface reduces risk."
        },
        {
          type: "match",
          q: "Match each item to the part of the attack surface it represents.",
          pairs: [
            ["A public login page", "A website entry point"],
            ["A phone app permission", "An app entry point"],
            ["An employee who can be phished", "A human entry point"]
          ],
          explain: "The attack surface includes technology and people, since attackers target both."
        },
        {
          type: "fill",
          q: "Removing unused features and accounts to shrink the attack surface is called reducing the ____ surface.",
          answer: "attack",
          accept: ["attack"],
          explain: "Turning off what you do not need reduces the attack surface an intruder can probe."
        },
        {
          type: "mcq",
          q: "Which action shrinks the attack surface?",
          choices: [
            "Disabling unused ports and services",
            "Installing many extra apps you never use",
            "Sharing one admin login with everyone",
            "Turning off all updates"
          ],
          answer: 0,
          explain: "Every unused service or open port is a potential door, so closing them makes you a smaller target."
        },
        {
          type: "order",
          q: "Order these steps to reduce an app's attack surface.",
          items: ["List every entry point", "Remove features you do not need", "Lock down what remains"],
          explain: "You first map the surface, then remove the extra, then protect what is left."
        },
        {
          type: "truefalse",
          q: "People are never part of the attack surface, only machines are.",
          answer: false,
          explain: "People can be tricked through phishing and social engineering, so they are part of the surface too."
        },
        {
          type: "mcq",
          q: "Why do extra, unused accounts increase risk?",
          choices: [
            "Each one is another door an attacker might open",
            "They make the screen brighter",
            "They speed up the app",
            "They improve battery life"
          ],
          answer: 0,
          explain: "Forgotten accounts often go unmonitored, giving attackers a quiet way in."
        }
      ]
    },
    {
      id: "l6",
      title: "Defense in Depth",
      intro: "Defense in depth layers multiple security controls so that no single failure exposes everything.",
      questions: [
        {
          type: "mcq",
          q: "What is defense in depth?",
          choices: [
            "Using several layers of controls so one failure does not break everything",
            "Relying on a single strong password",
            "Turning off the firewall to save resources",
            "Storing all data in one place"
          ],
          answer: 0,
          explain: "Defense in depth stacks multiple defenses, so if one fails, others still protect the system."
        },
        {
          type: "truefalse",
          q: "With defense in depth, one broken control can still leave other layers protecting you.",
          answer: true,
          explain: "That is the whole point: overlapping layers mean a single failure is not catastrophic."
        },
        {
          type: "match",
          q: "Match each layer to what it does.",
          pairs: [
            ["Firewall", "Filters network traffic"],
            ["Multi-factor authentication", "Adds a second login check"],
            ["Encryption", "Protects data if it is stolen"]
          ],
          explain: "Different layers guard different points, and together they form a stronger whole."
        },
        {
          type: "fill",
          q: "Layering many security controls so no single failure exposes everything is called defense in ____.",
          answer: "depth",
          accept: ["depth"],
          explain: "Defense in depth is the strategy of stacking protections rather than trusting just one."
        },
        {
          type: "mcq",
          q: "Why is relying on only one security control risky?",
          choices: [
            "If it fails, there is nothing left to stop the attacker",
            "It uses too much electricity",
            "It always slows down the app",
            "It is against the law"
          ],
          answer: 0,
          explain: "A single control is a single point of failure, which is exactly what layering avoids."
        },
        {
          type: "order",
          q: "Order these layers from the outer edge inward toward the data.",
          items: ["Network firewall", "Login and access controls", "Encrypted database"],
          explain: "An attacker would have to pass through each layer, and the data stays protected at the core."
        },
        {
          type: "truefalse",
          q: "Defense in depth means you can skip patching because other layers will save you.",
          answer: false,
          explain: "Layers help, but each layer should still be kept strong, including keeping software patched."
        },
        {
          type: "mcq",
          q: "Which is a good example of layering controls?",
          choices: [
            "A firewall, plus MFA, plus encrypted storage",
            "Only a firewall and nothing else",
            "Disabling logs to keep things simple",
            "Sharing admin passwords widely"
          ],
          answer: 0,
          explain: "Combining network, identity, and data protections is classic defense in depth."
        }
      ]
    },
    {
      id: "l7",
      title: "Least Privilege & Zero Trust",
      intro: "Least privilege gives the minimum access needed, and zero trust means never automatically trusting, always verifying.",
      questions: [
        {
          type: "mcq",
          q: "What does the principle of least privilege mean?",
          choices: [
            "Give each person or program only the access it truly needs",
            "Give everyone full admin rights",
            "Remove all access from everyone",
            "Let users choose their own permissions"
          ],
          answer: 0,
          explain: "Least privilege limits access to the minimum required, so a compromised account can do less damage."
        },
        {
          type: "truefalse",
          q: "Zero trust means the network never automatically trusts a user or device just because it is inside.",
          answer: true,
          explain: "Zero trust verifies every request rather than assuming inside traffic is safe."
        },
        {
          type: "fill",
          q: "Giving a user only the access they need for their job follows the principle of least ____.",
          answer: "privilege",
          accept: ["privilege", "priviledge"],
          explain: "Least privilege reduces the harm an attacker can do with any single account."
        },
        {
          type: "match",
          q: "Match each idea to its short description.",
          pairs: [
            ["Least privilege", "Minimum access needed to do the job"],
            ["Zero trust", "Always verify, never assume trust"],
            ["Over-privileged account", "Has more access than it needs"]
          ],
          explain: "Least privilege limits access, zero trust checks it, and over-privileged accounts are a risk to fix."
        },
        {
          type: "mcq",
          q: "Why is an over-privileged account dangerous?",
          choices: [
            "If it is compromised, the attacker can reach far more than needed",
            "It makes the app load faster",
            "It uses less memory",
            "It cannot be logged in to"
          ],
          answer: 0,
          explain: "Extra access becomes extra reach for an attacker, which is why we trim permissions."
        },
        {
          type: "truefalse",
          q: "Under zero trust, once you log in you are trusted forever with no more checks.",
          answer: false,
          explain: "Zero trust keeps verifying, so access is continually checked rather than granted permanently."
        },
        {
          type: "order",
          q: "Order these steps to apply least privilege to a new employee.",
          items: ["Identify what the role needs", "Grant only that access", "Review and remove extras over time"],
          explain: "Start from the actual need, grant just enough, and keep pruning access that is no longer used."
        },
        {
          type: "mcq",
          q: "A zero trust approach treats a login request from inside the office how?",
          choices: [
            "It still verifies identity and access, just like any other request",
            "It trusts it completely with no checks",
            "It blocks it forever",
            "It ignores it"
          ],
          answer: 0,
          explain: "Zero trust does not give a free pass to internal requests; it verifies them all."
        }
      ]
    },
    {
      id: "l8",
      title: "The Human Factor",
      intro: "People are often the weakest link in security, so awareness and good habits are a real and important defense.",
      questions: [
        {
          type: "mcq",
          q: "Why are people often called the weakest link in security?",
          choices: [
            "Attackers can trick people into giving up access or information",
            "People type too slowly",
            "Computers dislike humans",
            "People never make good passwords by accident"
          ],
          answer: 0,
          explain: "Even strong technology can be bypassed if a person is fooled, so human behavior matters a lot."
        },
        {
          type: "fill",
          q: "Tricking people into revealing information or clicking bad links is called social ____.",
          answer: "engineering",
          accept: ["engineering"],
          explain: "Social engineering manipulates human trust rather than breaking technology directly."
        },
        {
          type: "truefalse",
          q: "A tricked employee can undo even very strong technical defenses.",
          answer: true,
          explain: "If someone hands over a password or clicks a malicious link, technical controls may be bypassed."
        },
        {
          type: "match",
          q: "Match each good habit to the risk it reduces.",
          pairs: [
            ["Pausing before clicking links", "Phishing"],
            ["Using unique passwords", "One breach unlocking many accounts"],
            ["Locking your screen", "A stranger using your device"]
          ],
          explain: "Small daily habits close off many of the easiest paths attackers rely on."
        },
        {
          type: "mcq",
          q: "Which is a sign of a likely phishing message?",
          choices: [
            "Urgent pressure to click a link and enter your password now",
            "A calm note from a coworker you expected",
            "A normal calendar reminder",
            "A weather update"
          ],
          answer: 0,
          explain: "Phishing often creates false urgency to rush you into acting before you think."
        },
        {
          type: "truefalse",
          q: "Security awareness training has no real effect on how safe an organization is.",
          answer: false,
          explain: "Training people to spot scams and follow good habits is one of the most effective defenses there is."
        },
        {
          type: "order",
          q: "Order the safe steps for handling a suspicious email.",
          items: ["Stop and do not click anything", "Check the sender and links carefully", "Report it to your security team"],
          explain: "Pausing, verifying, and reporting stops many attacks before they start."
        },
        {
          type: "mcq",
          q: "What is a strong personal defense against social engineering?",
          choices: [
            "Verify unusual requests through a separate, trusted channel",
            "Always act instantly when pressured",
            "Share passwords to save time",
            "Ignore all warnings"
          ],
          answer: 0,
          explain: "Confirming odd requests another way, like a phone call you initiate, defeats many scams."
        }
      ]
    }
  ]
});
