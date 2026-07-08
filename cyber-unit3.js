window.ACADEMY.addUnit("cyber", {
  id: "unit-3",
  title: "Threats & Attacks",
  color: "#ff9600",
  icon: "🦠",
  description: "The common ways attackers try to get in — so you can spot them.",
  lessons: [
    {
      id: "l17",
      title: "Malware 101",
      intro: "Malware is any software built to harm or hijack a device, and it comes in a few classic flavors.",
      questions: [
        {
          type: "fill",
          q: "The word ____ is short for malicious software.",
          answer: "malware",
          accept: ["malware"],
          explain: "Malware is a catch-all term for any software written to harm, spy on, or take control of a device."
        },
        {
          type: "match",
          q: "Match each malware type to how it behaves.",
          pairs: [
            ["Virus", "Attaches to a file and spreads when that file is run"],
            ["Worm", "Copies itself across a network with no user action"],
            ["Trojan", "Pretends to be something useful to get you to run it"]
          ],
          explain: "A virus needs a host file and a user to run it, a worm self-spreads over networks, and a trojan hides inside something that looks safe."
        },
        {
          type: "mcq",
          q: "What makes a worm different from a classic virus?",
          choices: [
            "A worm can spread by itself across a network without a user opening anything",
            "A worm can only run on phones",
            "A worm always encrypts your files",
            "A worm is completely harmless"
          ],
          answer: 0,
          explain: "The defining trait of a worm is self-propagation. It spreads on its own, while a virus needs a user to run an infected file."
        },
        {
          type: "truefalse",
          q: "A trojan gets its name because it disguises itself as something harmless or useful.",
          answer: true,
          explain: "Like the wooden horse story, a trojan looks like a normal or helpful program but hides malicious code inside."
        },
        {
          type: "mcq",
          q: "Which habit best lowers your risk of getting malware?",
          choices: [
            "Only install software from trusted sources and keep systems updated",
            "Turn off all updates so nothing changes",
            "Open every email attachment to check it",
            "Disable your firewall for speed"
          ],
          answer: 0,
          explain: "Sticking to trusted sources and applying updates closes off the most common ways malware sneaks onto a device."
        },
        {
          type: "truefalse",
          q: "Malware can only infect Windows computers, never phones or Macs.",
          answer: false,
          explain: "Malware exists for every major platform, including phones and Macs. No device is automatically immune."
        },
        {
          type: "order",
          q: "Order a typical malware infection from start to finish.",
          items: [
            "Attacker hides malicious code in a file or link",
            "Victim opens or runs the item",
            "Malicious code executes on the device",
            "Malware does its job or spreads further"
          ],
          explain: "Most infections follow this chain: a lure is delivered, the victim triggers it, the code runs, and then it acts or spreads."
        },
        {
          type: "mcq",
          q: "What is a 'payload' in the context of malware?",
          choices: [
            "The harmful action the malware is designed to carry out",
            "The size of the malware file in megabytes",
            "The antivirus that removes it",
            "The email it arrived in"
          ],
          answer: 0,
          explain: "The payload is what the malware actually does once it runs, such as stealing data, encrypting files, or opening a backdoor."
        }
      ]
    },
    {
      id: "l18",
      title: "Ransomware",
      intro: "Ransomware locks up your files and demands payment, which is why good backups are the real hero.",
      questions: [
        {
          type: "fill",
          q: "Ransomware typically ____ your files so you cannot open them without a key.",
          answer: "encrypts",
          accept: ["encrypts", "encrypt", "locks"],
          explain: "Ransomware scrambles your files with encryption, then demands payment for the key that would unlock them."
        },
        {
          type: "mcq",
          q: "What is the single best defense against ransomware?",
          choices: [
            "Recent, tested backups kept offline or separate from your main system",
            "Paying the ransom quickly",
            "Renaming all your files",
            "Turning your screen brightness down"
          ],
          answer: 0,
          explain: "If you have clean backups you can restore instead of paying. Keep them offline or separate so the ransomware cannot reach them too."
        },
        {
          type: "truefalse",
          q: "Paying the ransom guarantees you will get all your files back.",
          answer: false,
          explain: "There is no guarantee. Attackers may take the money and vanish, send a broken key, or come back to demand more."
        },
        {
          type: "match",
          q: "Match each ransomware term to its meaning.",
          pairs: [
            ["Ransom note", "The message demanding payment to unlock files"],
            ["Decryption key", "What is needed to restore the encrypted files"],
            ["Offline backup", "A copy the malware cannot reach or encrypt"]
          ],
          explain: "The note demands payment, the decryption key would unlock the files, and an offline backup gives you a safe way to recover."
        },
        {
          type: "order",
          q: "Order how a ransomware attack usually unfolds.",
          items: [
            "Malware gets onto the system, often via a phishing link or bad download",
            "It quietly encrypts files in the background",
            "It shows a ransom note demanding payment",
            "The victim restores from backup or faces losing the files"
          ],
          explain: "Ransomware sneaks in, encrypts, then reveals itself with a demand. A backup is what turns disaster into an inconvenience."
        },
        {
          type: "mcq",
          q: "Why do experts advise following the '3-2-1' idea for backups?",
          choices: [
            "Keep multiple copies, on different media, with at least one kept offsite or offline",
            "Back up exactly three files per day",
            "Only back up on the first of the month",
            "Store all backups on the same drive as the originals"
          ],
          answer: 0,
          explain: "Several copies, on different media, with one kept away from the main system means a single incident cannot wipe out everything."
        },
        {
          type: "truefalse",
          q: "Keeping a backup connected to your computer at all times makes it safe from ransomware.",
          answer: false,
          explain: "Ransomware can encrypt any drive it can reach, including an always-connected backup. Offline or separated copies are safer."
        },
        {
          type: "mcq",
          q: "You get hit by ransomware. What is a smart first step?",
          choices: [
            "Disconnect the device from the network to stop it spreading, then get help",
            "Immediately pay in cryptocurrency",
            "Reboot repeatedly and hope it clears",
            "Forward the ransom note to all your coworkers"
          ],
          answer: 0,
          explain: "Isolating the machine limits the damage. Then involve the right people and recover from backups rather than rushing to pay."
        }
      ]
    },
    {
      id: "l19",
      title: "Spyware, Adware & Keyloggers",
      intro: "Some malware does not lock your files — it quietly watches you and steals what you type.",
      questions: [
        {
          type: "match",
          q: "Match each sneaky program to what it does.",
          pairs: [
            ["Spyware", "Secretly collects information about you and your activity"],
            ["Adware", "Bombards you with unwanted ads, sometimes tracking you too"],
            ["Keylogger", "Records the keystrokes you type, including passwords"]
          ],
          explain: "Spyware watches, adware pushes ads, and a keylogger captures every key you press."
        },
        {
          type: "fill",
          q: "A ____ records every key you press, which can capture passwords and card numbers.",
          answer: "keylogger",
          accept: ["keylogger", "key logger"],
          explain: "A keylogger silently logs keystrokes, which is why typing a password on an infected device is so dangerous."
        },
        {
          type: "mcq",
          q: "Why is spyware especially dangerous?",
          choices: [
            "It can steal sensitive data quietly for a long time before anyone notices",
            "It instantly destroys the hard drive",
            "It only affects the volume settings",
            "It always announces itself with a loud alarm"
          ],
          answer: 0,
          explain: "Spyware is built to stay hidden, so it can harvest logins, messages, and habits over long periods without being spotted."
        },
        {
          type: "truefalse",
          q: "A keylogger on your device could capture a password even if the website itself is secure.",
          answer: true,
          explain: "The keylogger records your keystrokes before they ever reach the site, so a secure website cannot protect you from it."
        },
        {
          type: "mcq",
          q: "Which is a good way to reduce the risk of spyware and keyloggers?",
          choices: [
            "Keep software updated and avoid installing unknown or 'free' bundled programs",
            "Type slower so it cannot keep up",
            "Only use uppercase letters",
            "Cover your keyboard with a cloth"
          ],
          answer: 0,
          explain: "Most spyware and keyloggers arrive with sketchy downloads or bundled installers, so caution about what you install matters most."
        },
        {
          type: "truefalse",
          q: "Adware is always completely harmless and never tracks you.",
          answer: false,
          explain: "Adware ranges from merely annoying to genuinely invasive. Plenty of it tracks your browsing to target ads or worse."
        },
        {
          type: "mcq",
          q: "A free tool asks to install several extra 'partner offers' during setup. What is the safe move?",
          choices: [
            "Decline the extras and only install what you actually came for",
            "Accept all of them to be polite",
            "Install them, then uninstall later",
            "Enter your bank details to speed it up"
          ],
          answer: 0,
          explain: "Bundled 'offers' are a classic delivery method for adware and spyware. Uncheck or decline anything you did not ask for."
        }
      ]
    },
    {
      id: "l20",
      title: "Phishing",
      intro: "Phishing uses fake messages to trick you into handing over info or clicking something bad.",
      questions: [
        {
          type: "fill",
          q: "____ is a deceptive message designed to trick you into revealing info or clicking a bad link.",
          answer: "phishing",
          accept: ["phishing"],
          explain: "Phishing baits you with a message that looks legitimate so you will click, log in, or share sensitive details."
        },
        {
          type: "mcq",
          q: "How does spear phishing differ from ordinary phishing?",
          choices: [
            "It targets a specific person or group using details tailored to them",
            "It is sent by regular mail",
            "It only happens over the phone",
            "It is always caught by spam filters"
          ],
          answer: 0,
          explain: "Spear phishing is personalized. The attacker uses your name, job, or context to make the lure far more convincing."
        },
        {
          type: "match",
          q: "Match each phishing warning sign to what it looks like.",
          pairs: [
            ["Urgency", "Act now or your account will be closed"],
            ["Mismatched link", "Text says one site but the URL points somewhere else"],
            ["Unexpected attachment", "A file you did not ask for, urging you to open it"]
          ],
          explain: "Manufactured urgency, links that do not match their text, and surprise attachments are three classic phishing tells."
        },
        {
          type: "truefalse",
          q: "A message can look like it comes from a real company yet still be a phishing attempt.",
          answer: true,
          explain: "Attackers copy logos, wording, and sender names. Looking official is not proof that a message is genuine."
        },
        {
          type: "order",
          q: "Order the safe steps when a suspicious 'account alert' email arrives.",
          items: [
            "Pause instead of clicking the link right away",
            "Check the sender address and hover over links to see the real URL",
            "Go to the site directly by typing its address, not via the email",
            "Report the message if it turns out to be phishing"
          ],
          explain: "Slow down, inspect the sender and links, reach the site on your own, and report fakes so others are warned."
        },
        {
          type: "mcq",
          q: "An email says your package is held and asks you to log in through its link. Safest response?",
          choices: [
            "Do not use the link; visit the carrier's website directly to check",
            "Click the link and enter your password to be safe",
            "Reply with your address and card number",
            "Forward it to friends so they can log in too"
          ],
          answer: 0,
          explain: "Never trust the link in an unexpected message. Navigate to the real site yourself to verify any claim."
        },
        {
          type: "mcq",
          q: "What is 'smishing'?",
          choices: [
            "Phishing carried out through SMS text messages",
            "A type of firewall",
            "A password manager",
            "A secure backup method"
          ],
          answer: 0,
          explain: "Smishing is phishing over text messages. Vishing is the voice-call version. The trick is the same, only the channel changes."
        },
        {
          type: "truefalse",
          q: "Hovering over a link to preview its real destination can help you spot a fake before clicking.",
          answer: true,
          explain: "Previewing the true URL often reveals a mismatch between what the text claims and where the link actually goes."
        }
      ]
    },
    {
      id: "l21",
      title: "Social Engineering",
      intro: "Social engineering hacks people, not machines, by manipulating trust and helpfulness.",
      questions: [
        {
          type: "mcq",
          q: "What does 'social engineering' mean in security?",
          choices: [
            "Manipulating people into giving up access or information",
            "Building social media apps",
            "Encrypting a hard drive",
            "Designing a company's seating chart"
          ],
          answer: 0,
          explain: "Social engineering targets human psychology, tricking people into breaking normal security rules rather than hacking code."
        },
        {
          type: "match",
          q: "Match each social engineering tactic to its description.",
          pairs: [
            ["Pretexting", "Inventing a fake story or role to earn your trust"],
            ["Baiting", "Leaving a tempting item, like a USB drive, hoping you use it"],
            ["Tailgating", "Following an authorized person through a secure door"]
          ],
          explain: "Pretexting uses a made-up story, baiting dangles temptation, and tailgating slips in behind someone with real access."
        },
        {
          type: "truefalse",
          q: "A caller claiming to be from IT and pressuring you to share your password is a social engineering attempt.",
          answer: true,
          explain: "Real IT will not need your password. Pressure plus an authority claim is a textbook social engineering move."
        },
        {
          type: "fill",
          q: "____ is when someone follows an authorized person through a secure door without their own badge.",
          answer: "tailgating",
          accept: ["tailgating", "piggybacking"],
          explain: "Tailgating relies on politeness. People hold doors open, letting an unauthorized person walk right in."
        },
        {
          type: "mcq",
          q: "Why do attackers often create a sense of urgency or fear?",
          choices: [
            "Rushed, anxious people are less likely to stop and verify",
            "It makes emails load faster",
            "Urgency improves grammar",
            "It is required by email providers"
          ],
          answer: 0,
          explain: "Pressure short-circuits careful thinking. When you feel rushed you are more likely to skip the check that would catch the scam."
        },
        {
          type: "order",
          q: "Order the safe response to an urgent, unusual request 'from your boss'.",
          items: [
            "Notice that the request is urgent and out of the ordinary",
            "Resist acting on it immediately",
            "Verify through a separate, known channel like a direct phone call",
            "Proceed only after you have confirmed it is real"
          ],
          explain: "Spot the pressure, pause, confirm through a trusted channel you already know, and only then act."
        },
        {
          type: "mcq",
          q: "A stranger holding boxes asks you to badge them into a secure office. Best move?",
          choices: [
            "Politely direct them to reception or security to be signed in",
            "Badge them in since their hands are full",
            "Give them your badge to keep",
            "Prop the door open for the rest of the day"
          ],
          answer: 0,
          explain: "Helpfulness is exactly what tailgaters exploit. Sending them through the proper check protects everyone without being rude."
        }
      ]
    },
    {
      id: "l22",
      title: "Scams & Fraud",
      intro: "Scams turn trust into money — from fake tech support to romance cons to bogus invoices.",
      questions: [
        {
          type: "match",
          q: "Match each scam to how it works.",
          pairs: [
            ["Tech-support scam", "A fake alert says your PC is infected and to call a number"],
            ["Romance scam", "A fake online relationship leads to money requests"],
            ["Fake-invoice fraud", "A bill for goods or services you never ordered"]
          ],
          explain: "Each scam has a different hook, but all aim to pressure you into paying or sharing access."
        },
        {
          type: "truefalse",
          q: "A pop-up warning that your computer is infected and telling you to call a phone number is usually a scam.",
          answer: true,
          explain: "Legitimate security software does not put a phone number in a scary pop-up. That is a hallmark of a tech-support scam."
        },
        {
          type: "mcq",
          q: "A big red warning says to call 'Microsoft Support' now. What should you do?",
          choices: [
            "Ignore the number and close the page; contact the vendor through its official site if worried",
            "Call the number and give remote access to your PC",
            "Read them your passwords",
            "Pay whatever they ask by gift card"
          ],
          answer: 0,
          explain: "Real vendors do not cold-demand remote access or gift cards. Reach out through official channels you find yourself."
        },
        {
          type: "mcq",
          q: "Which payment demand is a strong sign of a scam?",
          choices: [
            "Being asked to pay with gift cards, wire transfer, or crypto and to keep it secret",
            "A normal card payment with a receipt",
            "Paying an invoice you actually requested",
            "A refund back to your card"
          ],
          answer: 0,
          explain: "Gift cards, wires, and crypto are hard to reverse and favored by scammers. Secrecy plus urgency makes it worse."
        },
        {
          type: "truefalse",
          q: "In a romance scam, being asked for money for an 'emergency' by someone you have never met in person is a major red flag.",
          answer: true,
          explain: "Romance scammers build trust over time, then invent emergencies. Money requests from an unmet partner are a classic warning sign."
        },
        {
          type: "order",
          q: "Order the safe steps when an unexpected invoice arrives.",
          items: [
            "Do not pay based on the email alone",
            "Check whether you or your company actually ordered anything",
            "Verify the vendor using contact details you already trust",
            "Report or discard it if it turns out to be fake"
          ],
          explain: "Fake-invoice fraud counts on quick payment. Confirm the order and the vendor before any money moves."
        },
        {
          type: "fill",
          q: "Scammers love ____ cards as payment because they are almost impossible to trace or reverse.",
          answer: "gift",
          accept: ["gift", "gift card", "gift cards"],
          explain: "A request to pay in gift cards is a huge red flag. No real business or agency collects debts that way."
        }
      ]
    },
    {
      id: "l23",
      title: "Man-in-the-Middle Attacks",
      intro: "A man-in-the-middle attacker secretly sits between two parties to listen in or change what is sent.",
      questions: [
        {
          type: "mcq",
          q: "What is a man-in-the-middle (MITM) attack?",
          choices: [
            "An attacker secretly intercepts communication between two parties",
            "A physical break-in through a window",
            "A slow internet connection",
            "A backup that runs at midnight"
          ],
          answer: 0,
          explain: "In a MITM attack the attacker sits between two parties, able to eavesdrop on or tamper with the messages flowing between them."
        },
        {
          type: "truefalse",
          q: "Using HTTPS helps protect against a man-in-the-middle attacker reading your data in transit.",
          answer: true,
          explain: "HTTPS encrypts the connection, so even if traffic is intercepted, an eavesdropper sees scrambled data rather than plain text."
        },
        {
          type: "mcq",
          q: "Why is unsecured public Wi-Fi a common setting for MITM attacks?",
          choices: [
            "Attackers on the same network can more easily intercept unencrypted traffic",
            "Public Wi-Fi is always faster",
            "It automatically installs antivirus",
            "It encrypts everything by default"
          ],
          answer: 0,
          explain: "On open networks, others nearby can position themselves in your traffic path, so encryption and caution matter even more."
        },
        {
          type: "match",
          q: "Match each defense to what it protects.",
          pairs: [
            ["HTTPS / TLS", "Encrypts data between your browser and the site"],
            ["VPN", "Encrypts your traffic across an untrusted network"],
            ["Certificate warning", "Alerts you that a connection may not be trustworthy"]
          ],
          explain: "TLS secures the site connection, a VPN wraps your whole connection, and a certificate warning is a red flag not to ignore."
        },
        {
          type: "truefalse",
          q: "You should ignore browser certificate warnings and click through them to save time.",
          answer: false,
          explain: "A certificate warning can mean someone is intercepting your connection. Do not click through it, especially on a login page."
        },
        {
          type: "order",
          q: "Order what happens in a basic MITM eavesdrop on an unencrypted connection.",
          items: [
            "Two parties begin communicating over a network",
            "The attacker positions between them and relays the traffic",
            "The attacker reads or alters the messages passing through",
            "Neither party realizes their data was intercepted"
          ],
          explain: "The attacker quietly relays traffic while reading or changing it, so both sides think they are talking directly."
        },
        {
          type: "mcq",
          q: "You must check your bank on public Wi-Fi. What is the safest approach?",
          choices: [
            "Use a trusted VPN and confirm the site shows HTTPS before logging in",
            "Log in over plain HTTP to be quick",
            "Turn off encryption for a faster page",
            "Share your password with a nearby stranger for help"
          ],
          answer: 0,
          explain: "A VPN plus a verified HTTPS connection keeps your login encrypted even on an untrusted network."
        }
      ]
    },
    {
      id: "l24",
      title: "Zero-Days & Exploits",
      intro: "A zero-day is a flaw the vendor does not yet know about, exploited before any patch exists.",
      questions: [
        {
          type: "fill",
          q: "A ____ vulnerability is one the vendor does not yet know about, so no patch exists yet.",
          answer: "zero-day",
          accept: ["zero-day", "zero day", "zeroday"],
          explain: "It is called zero-day because the vendor has had zero days to fix it. Attackers who find it first hold a big advantage."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Vulnerability", "A weakness or flaw in software"],
            ["Exploit", "Code or a technique that takes advantage of a flaw"],
            ["Patch", "An update that fixes the flaw"]
          ],
          explain: "A vulnerability is the hole, an exploit is what abuses it, and a patch is the fix that closes it."
        },
        {
          type: "mcq",
          q: "Why are zero-days especially dangerous?",
          choices: [
            "No fix exists yet, so normal defenses may not stop the attack",
            "They only work on turned-off computers",
            "They are always announced weeks in advance",
            "They automatically fix themselves"
          ],
          answer: 0,
          explain: "Because the vendor has not shipped a patch, defenders are caught off guard until a fix becomes available."
        },
        {
          type: "truefalse",
          q: "Applying security updates promptly is one of the most effective habits against known exploits.",
          answer: true,
          explain: "Most real-world attacks reuse known flaws. Patching quickly closes those holes before attackers can use them on you."
        },
        {
          type: "mcq",
          q: "Once a vendor releases a patch for a serious flaw, why should you install it quickly?",
          choices: [
            "Attackers study patches and rush to exploit anyone who has not updated yet",
            "Patches expire after one hour",
            "Updates make your screen brighter",
            "Waiting makes the patch stronger"
          ],
          answer: 0,
          explain: "A released patch reveals the flaw, so attackers race to hit unpatched systems. Updating fast keeps you off that list."
        },
        {
          type: "order",
          q: "Order the lifecycle of a vulnerability from discovery to safety.",
          items: [
            "A flaw exists in the software, unknown to the vendor",
            "Someone discovers it and it may be exploited",
            "The vendor learns of it and develops a patch",
            "Users apply the patch and are protected"
          ],
          explain: "A flaw is found, possibly exploited, the vendor patches it, and safety arrives only once users actually install the update."
        },
        {
          type: "truefalse",
          q: "Turning on automatic updates is a reasonable way to shrink the window that exploits can use.",
          answer: true,
          explain: "Automatic updates apply fixes soon after release, shortening the time your system stays exposed to known flaws."
        },
        {
          type: "mcq",
          q: "What does 'responsible disclosure' generally mean?",
          choices: [
            "A researcher privately tells the vendor so a fix can be made before details go public",
            "Posting the exploit online immediately for anyone to use",
            "Selling the flaw to the highest bidder",
            "Ignoring the flaw entirely"
          ],
          answer: 0,
          explain: "Responsible disclosure gives the vendor a chance to patch before the flaw is public, protecting users in the meantime."
        }
      ]
    }
  ]
});
