window.ACADEMY.addUnit("cyber", {
  id: "unit-4",
  title: "Staying Safe Online",
  color: "#ce82ff",
  icon: "🧑‍💻",
  description: "Everyday personal habits that keep you secure across websites and apps.",
  lessons: [
    {
      id: "l25",
      title: "Safe Browsing Habits",
      intro: "Slow down before you click, check where links really go, and treat unexpected messages with healthy suspicion.",
      questions: [
        {
          type: "mcq",
          q: "You get an email with a link. What is a safe first step before clicking?",
          choices: ["Hover over the link to preview the real destination", "Click it fast so the offer does not expire", "Forward it to friends to test it", "Reply asking if the link is safe"],
          answer: 0,
          explain: "Hovering shows the actual URL, letting you spot a fake or mismatched address before you commit to clicking."
        },
        {
          type: "truefalse",
          q: "A message that pressures you to act immediately is a common trick used by scammers.",
          answer: true,
          explain: "Urgency is a classic pressure tactic. It pushes you to react before you think, which is exactly when mistakes happen."
        },
        {
          type: "fill",
          q: "The trick of ____ over a link to see its true destination before clicking is a quick safety check.",
          answer: "hovering",
          accept: ["hovering", "hover"],
          explain: "Hovering reveals the real link target so you can catch a fake address hiding behind friendly text."
        },
        {
          type: "mcq",
          q: "A link's visible text says one thing but hovering shows a totally different website. What does that suggest?",
          choices: ["The link may be deceptive and unsafe", "The site loads faster that way", "It is a normal, trusted shortcut", "Your browser is broken"],
          answer: 0,
          explain: "A mismatch between the visible text and the real URL is a strong sign of a phishing or scam link."
        },
        {
          type: "match",
          q: "Match each browsing habit with why it helps.",
          pairs: [
            ["Hover before clicking", "Reveals the link's true destination"],
            ["Type the address yourself", "Avoids a spoofed or fake link"],
            ["Pause on unexpected messages", "Gives you time to spot a scam"]
          ],
          explain: "Small habits like checking links and slowing down stop most casual attacks before they start."
        },
        {
          type: "truefalse",
          q: "Because a message comes from a name you recognize, the message is always safe.",
          answer: false,
          explain: "Sender names can be faked or an account can be hacked. Trust the content and context, not just the name."
        },
        {
          type: "order",
          q: "Put these steps in order for handling a surprising link in a message.",
          items: ["Pause and do not click yet", "Hover to check the real URL", "Verify with the sender if unsure", "Then decide whether to open it"],
          explain: "Pausing, checking, and verifying before acting is the core of safe browsing."
        },
        {
          type: "mcq",
          q: "You get an unexpected message from a friend with only a strange link and no words. What is the smart move?",
          choices: ["Verify with your friend through another channel first", "Click it since it is from a friend", "Reply to the message with your password", "Share the link with others right away"],
          answer: 0,
          explain: "Hacked accounts often blast out links. Confirming through a separate channel catches this before you click."
        }
      ]
    },
    {
      id: "l26",
      title: "Public Wi-Fi Risks",
      intro: "Untrusted networks can let others snoop on your traffic, so lean on HTTPS and a VPN and avoid sensitive logins.",
      questions: [
        {
          type: "mcq",
          q: "Why can public Wi-Fi at a cafe be risky?",
          choices: ["Others on the network may be able to snoop on unprotected traffic", "It always installs viruses automatically", "It permanently deletes your files", "It makes your device faster but less private"],
          answer: 0,
          explain: "On an open or shared network, an attacker may be positioned to observe traffic that is not encrypted."
        },
        {
          type: "truefalse",
          q: "Using HTTPS websites protects the contents of your traffic even on public Wi-Fi.",
          answer: true,
          explain: "HTTPS encrypts data in transit, so even on untrusted Wi-Fi the contents of your session stay scrambled to snoopers."
        },
        {
          type: "fill",
          q: "A ____ creates an encrypted tunnel so your traffic stays private on untrusted networks.",
          answer: "vpn",
          accept: ["vpn", "virtual private network"],
          explain: "A VPN wraps your connection in encryption, which is especially useful on public Wi-Fi you do not control."
        },
        {
          type: "mcq",
          q: "On sketchy public Wi-Fi, which activity is riskiest to do?",
          choices: ["Logging into your bank on an unprotected connection", "Reading a public news article", "Checking the weather", "Looking at a map"],
          answer: 0,
          explain: "Sensitive logins expose the most if intercepted, so save them for a trusted network or protect them with a VPN."
        },
        {
          type: "truefalse",
          q: "A Wi-Fi network named after a store is guaranteed to be the real, official network.",
          answer: false,
          explain: "Attackers can set up lookalike hotspots with convincing names to lure you onto a network they control."
        },
        {
          type: "match",
          q: "Match each protection with what it does on public Wi-Fi.",
          pairs: [
            ["HTTPS", "Encrypts the traffic to a website"],
            ["VPN", "Encrypts all your device traffic in a tunnel"],
            ["Avoiding sensitive logins", "Limits what could be exposed"]
          ],
          explain: "Layering HTTPS, a VPN, and good judgment keeps you safe on networks you do not trust."
        },
        {
          type: "order",
          q: "Order these steps for using public Wi-Fi more safely.",
          items: ["Confirm the network name with staff", "Turn on your VPN", "Stick to HTTPS sites", "Skip sensitive logins if unsure"],
          explain: "Verifying the network, then encrypting your traffic, then being careful about logins builds solid protection."
        },
        {
          type: "mcq",
          q: "What is a lookalike or rogue hotspot?",
          choices: ["A fake Wi-Fi network set up to lure and snoop on victims", "A backup network your phone provides", "A faster version of official Wi-Fi", "A network that blocks all ads"],
          answer: 0,
          explain: "A rogue hotspot mimics a trusted network's name so people connect to an attacker-controlled access point."
        }
      ]
    },
    {
      id: "l27",
      title: "What a VPN Does",
      intro: "A VPN encrypts your connection and hides your IP address, but it is not total anonymity and it is not antivirus.",
      questions: [
        {
          type: "mcq",
          q: "What does a VPN actually do?",
          choices: ["Encrypts your connection and hides your IP from sites you visit", "Removes all viruses from your device", "Makes you completely anonymous online", "Blocks every possible scam automatically"],
          answer: 0,
          explain: "A VPN routes your traffic through an encrypted tunnel and swaps your visible IP for the VPN server's."
        },
        {
          type: "truefalse",
          q: "A VPN replaces the need for antivirus software.",
          answer: false,
          explain: "A VPN protects data in transit but does not scan for or remove malware. You still need other protections."
        },
        {
          type: "fill",
          q: "A VPN hides your ____ address so websites see the VPN server instead of you.",
          answer: "ip",
          accept: ["ip", "ip address"],
          explain: "Sites see the VPN server's IP rather than yours, which hides your location and network from them."
        },
        {
          type: "truefalse",
          q: "A VPN gives you complete, guaranteed anonymity online.",
          answer: false,
          explain: "A VPN improves privacy but is not total anonymity. Logins, cookies, and the VPN provider itself can still identify you."
        },
        {
          type: "match",
          q: "Match each statement about VPNs as true or false in meaning.",
          pairs: [
            ["Encrypts your connection", "True, that is a core VPN job"],
            ["Hides your IP from websites", "True, sites see the server instead"],
            ["Removes malware", "False, that is antivirus"],
            ["Total anonymity", "False, it is only partial privacy"]
          ],
          explain: "A VPN is great for encryption and hiding your IP, but it is not antivirus and not full anonymity."
        },
        {
          type: "mcq",
          q: "Since a VPN routes your traffic through its servers, who is one party you must trust?",
          choices: ["The VPN provider itself", "Every website you visit", "Your neighbor", "The Wi-Fi router only"],
          answer: 0,
          explain: "Your traffic passes through the provider's servers, so choosing a trustworthy VPN provider matters."
        },
        {
          type: "order",
          q: "Order what happens to a request when a VPN is on.",
          items: ["Your device encrypts the traffic", "It travels through the encrypted tunnel", "The VPN server sends it on with its own IP", "The website replies to the VPN server"],
          explain: "The tunnel hides your traffic from the local network and swaps your IP for the server's along the way."
        },
        {
          type: "mcq",
          q: "Which is a fair, honest way to describe a VPN to a friend?",
          choices: ["It encrypts your connection and hides your IP, but is not antivirus or total anonymity", "It makes you invisible and unhackable", "It removes viruses and blocks all scams", "It is only useful for streaming and nothing else"],
          answer: 0,
          explain: "Setting realistic expectations helps people use a VPN well without a false sense of total safety."
        }
      ]
    },
    {
      id: "l28",
      title: "Updates & Patching",
      intro: "Installing updates promptly is one of the single most effective security habits you can build.",
      questions: [
        {
          type: "mcq",
          q: "Why do software updates often matter for security?",
          choices: ["They frequently fix known vulnerabilities attackers exploit", "They only change the app's colors", "They always slow your device down", "They remove all your files"],
          answer: 0,
          explain: "Many updates patch security holes. Applying them quickly closes doors attackers already know about."
        },
        {
          type: "fill",
          q: "A software update that fixes a security flaw is often called a security ____.",
          answer: "patch",
          accept: ["patch", "patches"],
          explain: "A patch is a fix that repairs a known flaw, which is why prompt patching is such a strong habit."
        },
        {
          type: "truefalse",
          q: "Turning on automatic updates is a good way to stay patched without having to remember.",
          answer: true,
          explain: "Automatic updates apply fixes promptly, closing security gaps before you have a chance to forget."
        },
        {
          type: "mcq",
          q: "You keep clicking Remind Me Later on an important security update. What is the risk?",
          choices: ["A known vulnerability stays open for attackers longer", "Your device becomes more secure", "Nothing ever changes about risk", "The update becomes unnecessary over time"],
          answer: 0,
          explain: "Delaying leaves a known hole open. The longer you wait, the more time attackers have to use it."
        },
        {
          type: "truefalse",
          q: "Once a device stops receiving security updates, it generally becomes riskier to keep using online.",
          answer: true,
          explain: "End of support means new flaws will not be fixed, so unsupported devices grow more dangerous over time."
        },
        {
          type: "match",
          q: "Match each update habit with its benefit.",
          pairs: [
            ["Enable automatic updates", "Fixes get applied without you remembering"],
            ["Update apps promptly", "Closes known holes quickly"],
            ["Replace unsupported devices", "Avoids running with permanent unpatched flaws"]
          ],
          explain: "Prompt patching and retiring unsupported gear are among the highest-value security habits."
        },
        {
          type: "order",
          q: "Order the good response when a trusted update prompt appears.",
          items: ["Confirm it is the real system or app updater", "Save your work", "Install the update", "Restart if prompted"],
          explain: "Verifying, saving, installing, and restarting gets the fix applied cleanly and safely."
        },
        {
          type: "mcq",
          q: "A pop-up on a random website screams that your device needs an urgent update. What should you suspect?",
          choices: ["It may be a fake update scam trying to install malware", "It is always the official system updater", "It is a helpful reminder you should trust", "It will speed up your device"],
          answer: 0,
          explain: "Real updates come from your system or app store, not surprise website pop-ups, which are a known malware trick."
        }
      ]
    },
    {
      id: "l29",
      title: "Safe Downloads & Attachments",
      intro: "Only download from trusted sources, because unexpected attachments and shady files are a top route for malware.",
      questions: [
        {
          type: "mcq",
          q: "Where is the safest place to get an app for your phone?",
          choices: ["The official app store for your device", "A random link in a text message", "A pop-up ad promising a free version", "An email attachment from a stranger"],
          answer: 0,
          explain: "Official app stores review and sign apps, making them far safer than random links or attachments."
        },
        {
          type: "truefalse",
          q: "Unexpected email attachments are one of the most common ways malware spreads.",
          answer: true,
          explain: "Attackers rely on people opening surprise attachments, so an unexpected file deserves real suspicion."
        },
        {
          type: "fill",
          q: "Software that is designed to harm or spy on your device is broadly called ____.",
          answer: "malware",
          accept: ["malware", "malicious software"],
          explain: "Malware is the umbrella term for harmful software like viruses, worms, trojans, ransomware, and spyware."
        },
        {
          type: "match",
          q: "Match each malware type with a short description.",
          pairs: [
            ["Virus", "Attaches to a file and spreads when run"],
            ["Ransomware", "Locks or encrypts data and demands payment"],
            ["Spyware", "Secretly watches and steals your info"],
            ["Trojan", "Hides inside something that looks harmless"]
          ],
          explain: "Knowing the categories helps you see why unexpected downloads and attachments are so risky."
        },
        {
          type: "mcq",
          q: "A file named invoice.pdf.exe arrives unexpectedly. Why is that a red flag?",
          choices: ["The real ending is .exe, a program, disguised to look like a document", "PDF files can never be dangerous", "The name is too long to be real", "It means the file is empty"],
          answer: 0,
          explain: "A double extension hides that the file is an executable program, a classic trick to get you to run malware."
        },
        {
          type: "truefalse",
          q: "A free cracked version of paid software from an unofficial site is a safe way to save money.",
          answer: false,
          explain: "Pirated software is a well-known malware carrier. The hidden cost is often a compromised device."
        },
        {
          type: "order",
          q: "Order the safe steps before opening a surprising attachment.",
          items: ["Pause and do not open it yet", "Check the sender and whether you expected it", "Verify with the sender if unsure", "Only then decide whether to open"],
          explain: "Slowing down and verifying before opening stops the most common attachment-based attacks."
        },
        {
          type: "mcq",
          q: "What is a good habit when downloading a program you actually need?",
          choices: ["Get it from the official vendor site or app store", "Grab the first result from any download site", "Use whatever link a pop-up ad offers", "Ask a stranger to email it to you"],
          answer: 0,
          explain: "Downloading from the official source reduces the chance of getting a tampered or malicious copy."
        }
      ]
    },
    {
      id: "l30",
      title: "Privacy Settings & Oversharing",
      intro: "Lock down your social profiles and avoid oversharing the little details attackers can stitch together against you.",
      questions: [
        {
          type: "mcq",
          q: "Why does oversharing on social media create security risk?",
          choices: ["Details you post can help attackers guess answers, target you, or impersonate you", "It makes your posts load faster", "It has no effect on your security at all", "It only affects your battery life"],
          answer: 0,
          explain: "Small facts like your pet's name, birthday, or workplace can feed guessing, targeting, and impersonation."
        },
        {
          type: "truefalse",
          q: "Setting a social profile to private is a reasonable step to limit who can see your details.",
          answer: true,
          explain: "Locking down visibility reduces how much strangers and attackers can learn from your profile."
        },
        {
          type: "fill",
          q: "Posting too much personal detail online is called ____ and can help attackers target you.",
          answer: "oversharing",
          accept: ["oversharing", "over sharing", "over-sharing"],
          explain: "Oversharing hands attackers raw material for guessing answers, phishing, and impersonation."
        },
        {
          type: "mcq",
          q: "Which post is riskiest to share publicly?",
          choices: ["A photo tagged with your full home address and that you are away on vacation", "A picture of a sunset with no details", "A quote you like", "A public news link"],
          answer: 0,
          explain: "Revealing that your home is empty plus its location is an open invitation to burglars and stalkers."
        },
        {
          type: "match",
          q: "Match each piece of overshared info with how an attacker could misuse it.",
          pairs: [
            ["Pet or school name", "Guessing security question answers"],
            ["Vacation dates in real time", "Knowing your home is empty"],
            ["Employer and role", "Crafting a targeted phishing lure"]
          ],
          explain: "Attackers combine scattered details into a profile they can weaponize, so share thoughtfully."
        },
        {
          type: "truefalse",
          q: "Only celebrities and executives need to worry about oversharing online.",
          answer: false,
          explain: "Everyday people are targeted too. Anyone's leaked details can fuel phishing, fraud, or account takeover."
        },
        {
          type: "order",
          q: "Order these steps for a quick privacy tune-up on a social account.",
          items: ["Open your account privacy settings", "Set your profile visibility to friends or private", "Review what past posts reveal", "Remove or lock down sensitive details"],
          explain: "Reviewing settings and old posts limits the personal data attackers can collect on you."
        },
        {
          type: "mcq",
          q: "A quiz asks for your first pet, first car, and street you grew up on for fun. Why be cautious?",
          choices: ["Those are common security question answers attackers love to collect", "Quizzes are always completely safe", "It improves your account security to share them", "It has nothing to do with your accounts"],
          answer: 0,
          explain: "Fun quizzes often harvest exactly the details used to reset or guess account credentials."
        }
      ]
    },
    {
      id: "l31",
      title: "Backups: the 3-2-1 Rule",
      intro: "Keep three copies on two kinds of media with one copy offsite so you can recover from ransomware and loss.",
      questions: [
        {
          type: "mcq",
          q: "What does the 3-2-1 backup rule stand for?",
          choices: ["Three copies of your data, on two types of media, with one copy offsite", "Three passwords, two devices, one login", "Three folders, two drives, one week", "Three updates, two reboots, one scan"],
          answer: 0,
          explain: "The 3-2-1 rule spreads risk: multiple copies, different media, and an offsite copy for disasters."
        },
        {
          type: "truefalse",
          q: "Good backups are a key defense that lets you recover from a ransomware attack without paying.",
          answer: true,
          explain: "If clean backups exist, you can restore your data instead of paying attackers to unlock it."
        },
        {
          type: "fill",
          q: "In the 3-2-1 rule, one copy should be kept ____, away from your main location.",
          answer: "offsite",
          accept: ["offsite", "off-site", "off site"],
          explain: "An offsite copy survives local disasters like fire, theft, or flooding that could destroy on-site copies."
        },
        {
          type: "mcq",
          q: "Why keep backups on two different types of media?",
          choices: ["A single failure or type of problem is less likely to wipe out all copies", "It makes files open faster", "It is required by law everywhere", "It reduces the number of copies needed"],
          answer: 0,
          explain: "Different media fail in different ways, so spreading copies lowers the chance of losing everything at once."
        },
        {
          type: "match",
          q: "Match each part of 3-2-1 with what it means.",
          pairs: [
            ["3", "Total copies of your data"],
            ["2", "Different types of storage media"],
            ["1", "Copy kept offsite"]
          ],
          explain: "Remembering what each number means makes the rule easy to apply to your own setup."
        },
        {
          type: "truefalse",
          q: "A backup you have never tested restoring is guaranteed to work when you need it.",
          answer: false,
          explain: "Untested backups can be corrupt or incomplete. Occasionally test a restore so you know it actually works."
        },
        {
          type: "order",
          q: "Order the steps to set up a simple 3-2-1 backup.",
          items: ["Keep your working copy of the data", "Add a second copy on a different medium", "Store a third copy offsite or in the cloud", "Test that a restore actually works"],
          explain: "Building the copies and then testing a restore turns a plan into a recovery you can trust."
        },
        {
          type: "mcq",
          q: "Ransomware encrypts your files and demands payment. What makes recovery much easier?",
          choices: ["Having recent, clean, offline or offsite backups to restore from", "Having no backups at all", "Paying immediately with no other plan", "Turning off your firewall"],
          answer: 0,
          explain: "Clean backups let you wipe and restore instead of negotiating with attackers, which is why offsite copies matter."
        }
      ]
    },
    {
      id: "l32",
      title: "Spotting Red Flags",
      intro: "Urgency, too-good-to-be-true offers, and mismatched sender addresses are signals that a message is a scam.",
      questions: [
        {
          type: "mcq",
          q: "Which of these is a classic red flag of a scam or phishing message?",
          choices: ["Extreme urgency demanding you act right now", "A calm message you were expecting", "A normal newsletter you signed up for", "A receipt for a purchase you made"],
          answer: 0,
          explain: "Manufactured urgency pressures you to act before thinking, a hallmark of phishing and scams."
        },
        {
          type: "truefalse",
          q: "An offer that seems too good to be true is a common sign of a scam.",
          answer: true,
          explain: "Unrealistic rewards are bait. If it seems too good to be true, it very likely is a scam."
        },
        {
          type: "fill",
          q: "Tricking people into giving up passwords or clicking bad links by pretending to be trusted is called ____.",
          answer: "phishing",
          accept: ["phishing", "a phishing attack"],
          explain: "Phishing is a form of social engineering that fakes a trusted sender to steal info or plant malware."
        },
        {
          type: "mcq",
          q: "An email claims to be from your bank, but the sender address is bank-security@random-domain.info. What does that suggest?",
          choices: ["A mismatched sender address is a strong sign of phishing", "It is definitely your real bank", "The domain does not matter at all", "Long addresses are always trustworthy"],
          answer: 0,
          explain: "A sender address that does not match the real organization's domain is a classic phishing tell."
        },
        {
          type: "match",
          q: "Match each red flag with what it looks like.",
          pairs: [
            ["Urgency", "Act now or lose access threats"],
            ["Too good to be true", "You won a prize you never entered for"],
            ["Mismatched sender", "Address that does not match the real company"],
            ["Odd request", "Asking for a password or gift cards"]
          ],
          explain: "Scams usually show several of these signals at once, so spotting one should raise your guard."
        },
        {
          type: "truefalse",
          q: "A legitimate company will typically email you asking to reply with your full password.",
          answer: false,
          explain: "Real organizations do not ask for your password by email. Such a request is a strong scam signal."
        },
        {
          type: "order",
          q: "Order the safe response when a message trips your scam radar.",
          items: ["Stop and do not click or reply yet", "Check the sender address and links carefully", "Contact the company through an official channel", "Report or delete the message if it is a scam"],
          explain: "Pausing, verifying, and using an official channel keeps you out of the trap the scam sets."
        },
        {
          type: "mcq",
          q: "A text says you must pay a fee with gift cards to release a package. Why is this a scam?",
          choices: ["Demanding untraceable gift card payment is a well-known scam tactic", "Gift cards are the standard way to pay shipping fees", "Real couriers always text about gift cards", "It is a normal and safe request"],
          answer: 0,
          explain: "Legitimate businesses do not demand gift cards. Scammers love them because they are hard to trace or reverse."
        }
      ]
    }
  ]
});
