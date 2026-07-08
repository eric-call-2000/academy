window.ACADEMY.addUnit("cyber", {
  id: "unit-7",
  title: "App Security: Using Apps Safely",
  color: "#a560e8",
  icon: "📱",
  description: "Staying safe with the mobile and desktop apps you install and connect.",
  lessons: [
    {
      id: "l49",
      title: "App Permissions",
      intro: "Apps should only get the access they truly need, so pause when one asks for something unrelated to what it does.",
      questions: [
        {
          type: "mcq",
          q: "What is an app permission?",
          choices: [
            "Approval for an app to use a specific device feature or your data, like the camera or contacts",
            "A fee you pay to unlock an app",
            "A password that logs you into an app",
            "A rating that shows how popular an app is"
          ],
          answer: 0,
          explain: "A permission is your consent for the app to access a feature or type of data, such as location, camera, microphone, or contacts."
        },
        {
          type: "truefalse",
          q: "A simple flashlight app that asks for access to your contacts and location is a reason to be suspicious.",
          answer: true,
          explain: "When an app requests permissions it does not need to work, that mismatch is a red flag worth questioning."
        },
        {
          type: "mcq",
          q: "Which security idea best matches good app permissions?",
          choices: [
            "Least privilege, giving only the access that is actually needed",
            "Always allow, so the app never breaks",
            "Deny everything, even features the app needs",
            "Share as much data as possible to help the app improve"
          ],
          answer: 0,
          explain: "Least privilege means granting the smallest access needed. Apps should follow it, and so should you when granting permissions."
        },
        {
          type: "truefalse",
          q: "You can usually change or revoke an app's permissions in your phone or computer settings after installing it.",
          answer: true,
          explain: "Both mobile and desktop systems let you review and turn off permissions at any time from settings, not just at install."
        },
        {
          type: "match",
          q: "Match each permission to what it lets an app do.",
          pairs: [
            ["Camera", "Take photos or record video"],
            ["Location", "See where your device is"],
            ["Microphone", "Record audio"],
            ["Contacts", "Read the people in your address book"]
          ],
          explain: "Knowing what each permission unlocks helps you spot requests that do not fit the app's purpose."
        },
        {
          type: "fill",
          q: "Granting an app only the access it truly needs follows the principle of least ____.",
          answer: "privilege",
          accept: ["privilege", "privilage"],
          explain: "Least privilege keeps damage small if the app is buggy or malicious, because it can reach less."
        },
        {
          type: "mcq",
          q: "An app asks for a permission that seems unrelated to its job. What is the safest first move?",
          choices: [
            "Deny it and see if the app still works",
            "Grant it immediately so nothing breaks",
            "Grant every permission the app ever requests",
            "Uninstall your security software so the app runs"
          ],
          answer: 0,
          explain: "You can often deny an unneeded permission and keep using the app. If a core feature truly needs it, you can grant it later."
        },
        {
          type: "truefalse",
          q: "Some systems let you grant location only while an app is in use, instead of all the time.",
          answer: true,
          explain: "Scoped choices like 'while using the app' or 'only this once' limit access to when it is genuinely needed."
        }
      ]
    },
    {
      id: "l50",
      title: "Official App Stores",
      intro: "Store review lowers risk but does not remove it, and installing apps from unknown sources is far riskier.",
      questions: [
        {
          type: "mcq",
          q: "Why is installing from an official app store generally safer than random websites?",
          choices: [
            "Stores run review and scanning that catch many bad apps before they reach you",
            "Store apps are guaranteed to be completely free of any risk",
            "Store apps never ask for any permissions",
            "Stores make every app open source so you can read the code"
          ],
          answer: 0,
          explain: "Official stores review and scan submissions, which blocks a lot of malware. It reduces risk but cannot catch everything."
        },
        {
          type: "fill",
          q: "Installing an app from outside the official store, by loading its file directly, is called ____.",
          answer: "sideloading",
          accept: ["sideloading", "side-loading", "side loading"],
          explain: "Sideloading skips the store's review, so you take on the job of judging whether the app is safe."
        },
        {
          type: "truefalse",
          q: "Because an app is in an official store, it is guaranteed to be completely safe and honest.",
          answer: false,
          explain: "Review reduces risk but bad apps still slip through. Store presence is reassuring, not a guarantee."
        },
        {
          type: "truefalse",
          q: "Sideloading an app from an unknown website is generally riskier than installing the same kind of app from an official store.",
          answer: true,
          explain: "An unknown source has had no store review, so trojanized or fake apps are more likely to reach you."
        },
        {
          type: "mcq",
          q: "You get a text with a link to download a 'special version' of a popular app. What is the safest choice?",
          choices: [
            "Ignore the link and get the app from the official store instead",
            "Tap the link and install right away to save time",
            "Forward the link to friends first, then install",
            "Turn off your screen lock, then install"
          ],
          answer: 0,
          explain: "Unsolicited download links are a classic way to push fake or trojanized apps. Go to the official store yourself."
        },
        {
          type: "match",
          q: "Match each install source to its typical risk level.",
          pairs: [
            ["Official app store", "Lower risk, apps are reviewed"],
            ["Unknown website link", "Higher risk, no review"],
            ["Emailed app file from a stranger", "High risk, likely a trap"]
          ],
          explain: "The more review and accountability behind a source, the lower the typical risk. Strangers and random links rank worst."
        },
        {
          type: "mcq",
          q: "Even inside an official store, what helps you avoid a bad app?",
          choices: [
            "Check the developer name, reviews, and download count before installing",
            "Pick whichever app has the flashiest icon",
            "Install the first result no matter who made it",
            "Choose the app that asks for the most permissions"
          ],
          answer: 0,
          explain: "A trusted developer, many genuine reviews, and a sensible permission list all point to a legitimate app."
        },
        {
          type: "truefalse",
          q: "Turning off the setting that blocks installs from unknown sources removes a safety layer on your device.",
          answer: true,
          explain: "That block exists to stop random sideloaded apps. Leaving it on keeps a helpful barrier in place."
        }
      ]
    },
    {
      id: "l51",
      title: "Fake & Malicious Apps",
      intro: "Impersonator apps and tampered copies of real apps try to steal your data, money, or logins.",
      questions: [
        {
          type: "mcq",
          q: "What is an impersonator app?",
          choices: [
            "A fake app that copies a real one's name and icon to trick you into installing it",
            "An app that only works when you are offline",
            "An official app made by the real company",
            "An app that has no icon at all"
          ],
          answer: 0,
          explain: "Impersonators mimic a trusted app's look and name to fool you into handing over data or money."
        },
        {
          type: "fill",
          q: "A real app that has been secretly modified to hide harmful code is often called a ____ copy.",
          answer: "trojanized",
          accept: ["trojanized", "trojanised", "trojan"],
          explain: "A trojanized copy looks and mostly acts like the real app while quietly doing something malicious."
        },
        {
          type: "match",
          q: "Match each malicious app behavior to what it does.",
          pairs: [
            ["Fake login screen", "Steals the username and password you type"],
            ["Hidden data theft", "Sends your files or contacts to an attacker"],
            ["Silent charges", "Signs you up for costly services without clear consent"]
          ],
          explain: "Malicious apps aim at your credentials, your data, or your wallet, often while looking normal on the surface."
        },
        {
          type: "truefalse",
          q: "A very high download count always proves an app is genuine and safe.",
          answer: false,
          explain: "Numbers and reviews can be faked or inflated. Check the developer, permissions, and details too, not just totals."
        },
        {
          type: "mcq",
          q: "Which detail most helps you spot a fake version of a well-known app?",
          choices: [
            "The developer name does not match the real company",
            "The app has a login screen",
            "The app is free to download",
            "The app has an update button"
          ],
          answer: 0,
          explain: "Fakes often copy the icon and name but come from a different, wrong developer. Verify the publisher."
        },
        {
          type: "order",
          q: "Order these steps to safely check an app before installing it.",
          items: [
            "Confirm the developer or publisher is the real company",
            "Read recent reviews for reports of scams or theft",
            "Review the permissions it requests for anything odd",
            "Install only if all of those look legitimate"
          ],
          explain: "Verifying the publisher, reading reviews, and checking permissions before you install catches most fakes."
        },
        {
          type: "truefalse",
          q: "Typos in an app's name or description, like a misspelled brand, can be a sign of a fake app.",
          answer: true,
          explain: "Sloppy spelling and near-miss names are common with impersonators trying to ride on a trusted brand."
        },
        {
          type: "mcq",
          q: "You installed an app and suddenly see strange charges and pop-ups. What is a sensible response?",
          choices: [
            "Uninstall the app, change affected passwords, and watch your accounts",
            "Give it more permissions so it stops misbehaving",
            "Install two more apps from the same developer",
            "Ignore it since apps cannot cause charges"
          ],
          answer: 0,
          explain: "Remove the suspicious app, rotate any passwords it may have seen, and monitor your accounts for further abuse."
        }
      ]
    },
    {
      id: "l52",
      title: "App Privacy & Data Collection",
      intro: "Privacy labels and settings reveal what data an app collects and who it shares that data with.",
      questions: [
        {
          type: "mcq",
          q: "What does an app's privacy label or data section in the store try to show you?",
          choices: [
            "What kinds of data the app collects and how it may be used or shared",
            "How fast the app runs on your device",
            "How many colors the app uses",
            "The exact price of every in-app purchase"
          ],
          answer: 0,
          explain: "Privacy labels summarize the data an app says it collects and shares, so you can decide before installing."
        },
        {
          type: "truefalse",
          q: "A free app can still make money by collecting and sharing your data.",
          answer: true,
          explain: "When an app is free, your data or attention is often part of how it earns revenue, so read the privacy details."
        },
        {
          type: "match",
          q: "Match each data-collection term to its meaning.",
          pairs: [
            ["Collect", "The app gathers this data from you"],
            ["Share", "The app passes data to other companies"],
            ["Track", "Your activity is linked across apps or sites for ads"]
          ],
          explain: "Collect, share, and track describe different privacy impacts. Sharing and tracking usually raise the most concern."
        },
        {
          type: "fill",
          q: "Collecting only the data an app truly needs, and nothing more, is called data ____.",
          answer: "minimization",
          accept: ["minimization", "minimisation", "minimizing"],
          explain: "Data minimization limits what is collected, which reduces harm if the app or its provider is ever breached."
        },
        {
          type: "mcq",
          q: "Where can you often limit what an app collects after installing it?",
          choices: [
            "In your device privacy settings and the app's own settings",
            "Only by deleting your entire operating system",
            "Only by buying a brand-new phone",
            "You can never change it once installed"
          ],
          answer: 0,
          explain: "Device settings and in-app settings let you turn off tracking, limit location, and reduce sharing after install."
        },
        {
          type: "truefalse",
          q: "Reading a privacy label before installing is pointless because all apps collect the exact same data.",
          answer: false,
          explain: "Apps vary widely. Two similar apps can have very different collection and sharing, so the label is worth checking."
        },
        {
          type: "mcq",
          q: "Two similar apps do the same job. Which is the more privacy-friendly choice?",
          choices: [
            "The one that collects and shares less of your data",
            "The one that asks for the most permissions",
            "The one that shares your location with the most partners",
            "The one with the vaguest privacy description"
          ],
          answer: 0,
          explain: "When features are equal, prefer the app that collects and shares the least. Less data means less risk to you."
        },
        {
          type: "truefalse",
          q: "Turning off ad personalization or tracking in settings can reduce how much of your activity is linked for advertising.",
          answer: true,
          explain: "Tracking controls limit cross-app and cross-site linking, cutting how much of your behavior is bundled for ads."
        }
      ]
    },
    {
      id: "l53",
      title: "Scam Apps & Fleeceware",
      intro: "Some apps use deceptive subscriptions and inflated prices to exploit auto-renewal and hard-to-cancel traps.",
      questions: [
        {
          type: "fill",
          q: "Apps that charge wildly high prices for basic features, often through sneaky subscriptions, are nicknamed ____.",
          answer: "fleeceware",
          accept: ["fleeceware", "fleece ware", "fleece-ware"],
          explain: "Fleeceware overcharges for simple functions and leans on confusing subscriptions and auto-renewal to keep billing you."
        },
        {
          type: "mcq",
          q: "How does fleeceware usually keep charging you?",
          choices: [
            "Through auto-renewing subscriptions that are easy to start and hard to cancel",
            "By asking for a one-time payment that is clearly labeled",
            "By being completely free forever",
            "By refusing to open until you call support"
          ],
          answer: 0,
          explain: "The trap is auto-renewal. A quick free-trial signup quietly turns into recurring charges you may not notice."
        },
        {
          type: "truefalse",
          q: "A 'free trial' that requires your payment details can quietly turn into a paid subscription if you do not cancel.",
          answer: true,
          explain: "Many trials auto-convert to paid plans when they end, so track the date or cancel early if you do not want it."
        },
        {
          type: "match",
          q: "Match each deceptive tactic to how it works.",
          pairs: [
            ["Auto-renewal", "Keeps billing you unless you cancel"],
            ["Hidden pricing", "Real cost is buried or shown late"],
            ["Hard-to-find cancel", "Makes stopping the charges confusing"]
          ],
          explain: "Fleeceware relies on friction. It makes starting easy and cancelling hard so charges continue quietly."
        },
        {
          type: "mcq",
          q: "Before tapping 'Start free trial,' what is the smartest thing to check?",
          choices: [
            "The price after the trial and how to cancel the subscription",
            "Whether the app icon is a bright color",
            "How many total apps the developer has published",
            "Whether the app has the longest description"
          ],
          answer: 0,
          explain: "Know the post-trial price and the cancel steps up front, so an auto-renewal cannot surprise you later."
        },
        {
          type: "order",
          q: "Order these steps to avoid getting stuck in a fleeceware subscription.",
          items: [
            "Read the real price and renewal terms before signing up",
            "Set a reminder before any free trial ends",
            "Cancel through your app store subscription settings if unwanted",
            "Watch your statements for unexpected recurring charges"
          ],
          explain: "Reading terms, reminding yourself, cancelling in store settings, and checking statements together stop surprise billing."
        },
        {
          type: "truefalse",
          q: "You manage and cancel most app subscriptions through your app store account settings, not always inside the app itself.",
          answer: true,
          explain: "For store-billed subscriptions, the reliable place to cancel is your app store account, even if the app hides the option."
        },
        {
          type: "mcq",
          q: "Which review pattern is a warning sign of a scam or fleeceware app?",
          choices: [
            "Many reports of surprise charges and being unable to cancel",
            "Reviews mentioning helpful, clear pricing",
            "A calm mix of praise and minor complaints",
            "Reviews noting the app is fully free with no upsells"
          ],
          answer: 0,
          explain: "Clusters of complaints about hidden charges and cancellation trouble are strong signals to avoid the app."
        }
      ]
    },
    {
      id: "l54",
      title: "Revoking Access & OAuth",
      intro: "Third-party apps connected to your accounts should be reviewed and removed when you no longer trust or use them.",
      questions: [
        {
          type: "mcq",
          q: "When you click 'Sign in with' or 'Connect' to link one app to another account, you are usually using what?",
          choices: [
            "OAuth, which grants an app limited access without giving it your password",
            "A virus scanner",
            "A way to share your password in plain text",
            "A tool that deletes the other account"
          ],
          answer: 0,
          explain: "OAuth lets an app get limited, revocable access to your account. It never needs your actual password for that account."
        },
        {
          type: "truefalse",
          q: "With OAuth-style connections, you can revoke an app's access later without changing your main password.",
          answer: true,
          explain: "Connected apps hold a token, not your password, so you can cut off one app while keeping your account and password."
        },
        {
          type: "fill",
          q: "The list in your account settings showing which apps you have connected is often called connected apps or authorized ____.",
          answer: "apps",
          accept: ["apps", "applications", "access"],
          explain: "Reviewing the connected or authorized apps list lets you see and remove access you no longer want."
        },
        {
          type: "mcq",
          q: "Why should you periodically review the third-party apps connected to your accounts?",
          choices: [
            "Old or abandoned apps still holding access are a risk if that app is breached",
            "Reviewing them makes your phone charge faster",
            "It permanently deletes your main account",
            "It is the only way to read your email"
          ],
          answer: 0,
          explain: "Every connected app is a doorway into your account. Removing unused ones shrinks the ways an attacker could get in."
        },
        {
          type: "order",
          q: "Order these steps to remove a third-party app you no longer use.",
          items: [
            "Open your account's security or connected-apps settings",
            "Find the app you no longer trust or use",
            "Revoke or remove its access",
            "Confirm it disappears from the connected list"
          ],
          explain: "You revoke access from the account you connected to, which cuts off that app's token and its reach."
        },
        {
          type: "match",
          q: "Match each term to its meaning in connected-app security.",
          pairs: [
            ["Token", "A key an app holds to access your account"],
            ["Scope", "The specific permissions the app was granted"],
            ["Revoke", "Cancel an app's access to your account"]
          ],
          explain: "A token grants access within a scope, and revoking it ends that access without touching your password."
        },
        {
          type: "truefalse",
          q: "Granting a connected app broad scopes it does not need is a good idea because it keeps things simple.",
          answer: false,
          explain: "Least privilege applies here too. Grant the narrowest scopes the app needs so a breach exposes less."
        }
      ]
    },
    {
      id: "l55",
      title: "Keeping Apps Updated",
      intro: "App updates patch security holes just like operating-system updates, so staying current is a core defense.",
      questions: [
        {
          type: "truefalse",
          q: "App updates often fix security vulnerabilities, not just add new features.",
          answer: true,
          explain: "A large share of updates patch security holes. Delaying them leaves known weaknesses open on your device."
        },
        {
          type: "fill",
          q: "A software update that fixes a security flaw is commonly called a security ____.",
          answer: "patch",
          accept: ["patch", "fix", "update"],
          explain: "A patch closes a known vulnerability. Applying patches promptly is one of the simplest, strongest defenses."
        },
        {
          type: "mcq",
          q: "Why is running an outdated app with a known security flaw risky?",
          choices: [
            "Attackers already know the flaw, so unpatched devices are easier targets",
            "Old apps automatically become more secure over time",
            "Outdated apps cannot connect to the internet at all",
            "Updates only ever change the app's color scheme"
          ],
          answer: 0,
          explain: "Once a flaw is public and fixed, unpatched users stand out as the easy targets attackers focus on."
        },
        {
          type: "truefalse",
          q: "Turning on automatic app updates helps ensure security patches get installed without you remembering.",
          answer: true,
          explain: "Auto-update closes the gap between a fix being released and it reaching your device, without relying on your memory."
        },
        {
          type: "mcq",
          q: "Where should app updates come from to stay safe?",
          choices: [
            "The official app store or the app's built-in updater",
            "A pop-up ad claiming your app is dangerously out of date",
            "A link texted by an unknown number",
            "Any random website offering the newest version free"
          ],
          answer: 0,
          explain: "Fake 'update now' pop-ups and links are a common malware trick. Update only through the store or the app itself."
        },
        {
          type: "match",
          q: "Match each update idea to what it means.",
          pairs: [
            ["Patch", "A fix for a security flaw"],
            ["End of support", "No more security updates for that app"],
            ["Auto-update", "Updates install on their own"]
          ],
          explain: "Patches close holes, auto-update keeps you current, and an app past end of support stops getting fixes and grows risky."
        },
        {
          type: "truefalse",
          q: "An app that is no longer supported and never gets updates is just as safe to keep using long term.",
          answer: false,
          explain: "Unsupported apps stop receiving security fixes, so newly found flaws stay open. Prefer maintained alternatives."
        },
        {
          type: "mcq",
          q: "You see a real update available for an app you trust. What is the best habit?",
          choices: [
            "Install it soon, especially if it mentions security fixes",
            "Ignore all updates to avoid changing anything",
            "Only update apps you never actually use",
            "Wait a year before installing any update"
          ],
          answer: 0,
          explain: "Applying legitimate updates promptly, security ones especially, keeps known vulnerabilities from lingering."
        }
      ]
    },
    {
      id: "l56",
      title: "Device Security for Apps",
      intro: "Screen locks protect your apps, while jailbreaking, rooting, and lost devices all raise the risk to everything installed.",
      questions: [
        {
          type: "mcq",
          q: "Why does a screen lock help protect the apps on your device?",
          choices: [
            "It stops someone who grabs your device from instantly opening your logged-in apps",
            "It makes your apps run faster",
            "It automatically updates every app",
            "It hides your device from the internet entirely"
          ],
          answer: 0,
          explain: "Many apps stay signed in, so a lock is the barrier between a thief and your accounts, messages, and money."
        },
        {
          type: "match",
          q: "Match each screen-lock method to a fair description.",
          pairs: [
            ["Strong passcode", "Hard to guess and protects your data"],
            ["Biometrics", "Face or fingerprint for quick, convenient unlock"],
            ["No lock at all", "Anyone holding the device gets straight in"]
          ],
          explain: "A strong passcode plus biometrics balances security and convenience. No lock leaves every app wide open."
        },
        {
          type: "fill",
          q: "Removing the built-in restrictions on a phone to gain deep system access is called jailbreaking or ____.",
          answer: "rooting",
          accept: ["rooting", "root", "to root"],
          explain: "Jailbreaking and rooting strip away protections the device relies on, which can expose all your apps to greater risk."
        },
        {
          type: "truefalse",
          q: "Jailbreaking or rooting a device weakens built-in security protections that normally shield your apps.",
          answer: true,
          explain: "Those built-in restrictions sandbox apps and block tampering. Removing them lets malicious code reach more of your data."
        },
        {
          type: "truefalse",
          q: "If you lose your phone, having a screen lock and remote-wipe set up can keep your apps and data out of a stranger's hands.",
          answer: true,
          explain: "A lock buys time, and remote wipe lets you erase the device so your logged-in apps and data cannot be misused."
        },
        {
          type: "order",
          q: "Order these steps to take right after you realize your phone is lost or stolen.",
          items: [
            "Use find-my-device to locate or lock it remotely",
            "Change passwords for your most sensitive accounts",
            "Remotely wipe the device if you cannot recover it",
            "Report the loss to your carrier if needed"
          ],
          explain: "Locking, rotating key passwords, and wiping quickly limits what a thief can do with your still-signed-in apps."
        },
        {
          type: "mcq",
          q: "Which combination gives your installed apps the best everyday protection?",
          choices: [
            "A screen lock, current updates, and not rooting or jailbreaking the device",
            "No screen lock so apps open faster",
            "Rooting the device and skipping all updates",
            "Sharing your passcode widely for convenience"
          ],
          answer: 0,
          explain: "A lock, timely updates, and leaving built-in protections intact together defend the apps and data on your device."
        },
        {
          type: "mcq",
          q: "What is a downside of jailbreaking or rooting for someone who just wants to use apps safely?",
          choices: [
            "It can disable protections and let untrusted apps do more harm",
            "It forces every app to auto-update instantly",
            "It makes screen locks impossible to remove",
            "It guarantees apps can never misbehave again"
          ],
          answer: 0,
          explain: "By removing the sandbox and safeguards, rooting gives malicious or trojanized apps far more room to cause damage."
        }
      ]
    }
  ]
});
