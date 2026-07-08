window.ACADEMY.addUnit("cyber", {
  id: "unit-2",
  title: "Passwords & Authentication",
  color: "#1cb0f6",
  icon: "🔑",
  description: "Proving who you are safely — the front door to every website and app.",
  lessons: [
    {
      id: "l9",
      title: "What Makes a Strong Password",
      intro: "Length and uniqueness beat clever symbols — a long passphrase is both strong and easy to remember.",
      questions: [
        {
          type: "mcq",
          q: "What matters most for a password's strength?",
          choices: ["Its length", "Having one capital letter", "Using your pet's name", "Changing it every day"],
          answer: 0,
          explain: "More characters means far more possible combinations, so length is the biggest factor in strength."
        },
        {
          type: "truefalse",
          q: "A long passphrase like 'correct-horse-battery-staple' can be stronger than a short 'P@ss1'.",
          answer: true,
          explain: "Length adds far more possibilities than a few symbols, and passphrases are easier to remember too."
        },
        {
          type: "mcq",
          q: "Why is reusing the same password across sites dangerous?",
          choices: ["It slows down login", "One breach exposes all those accounts", "It uses more storage", "It confuses your browser"],
          answer: 1,
          explain: "If one site is breached, attackers try that same password everywhere else you used it."
        },
        {
          type: "fill",
          q: "A password built from several random words strung together is called a ____.",
          answer: "passphrase",
          accept: ["passphrase", "pass phrase"],
          explain: "A passphrase is long and memorable, which makes it both strong and practical."
        },
        {
          type: "match",
          q: "Match each password habit to its verdict.",
          pairs: [
            ["Unique password per site", "Strong habit"],
            ["Reusing one password everywhere", "Risky habit"],
            ["A long random passphrase", "Strong habit"],
            ["Your birthday as a password", "Weak habit"]
          ],
          explain: "Unique and long wins; reused and guessable loses."
        },
        {
          type: "mcq",
          q: "Which password is the weakest here?",
          choices: ["A 20-character passphrase", "password123", "A manager-generated random string", "A unique phrase per account"],
          answer: 1,
          explain: "Common, short, guessable passwords like 'password123' are the first thing attackers try."
        },
        {
          type: "truefalse",
          q: "Forcing users to change passwords every 30 days is the single best security rule.",
          answer: false,
          explain: "Frequent forced changes often lead to weaker, predictable passwords; unique and long matters more."
        },
        {
          type: "order",
          q: "Order these passwords from weakest to strongest.",
          items: ["1234", "summer2024", "Blue-River-Cactus-92", "9f!Xk2$mQ7wLp4zR8vT"],
          explain: "Length and unpredictability climb as you go; a long random string tops a short guessable one."
        }
      ]
    },
    {
      id: "l10",
      title: "Password Managers",
      intro: "A password manager generates and stores a unique password for every account so you never reuse or forget one.",
      questions: [
        {
          type: "mcq",
          q: "What is the main job of a password manager?",
          choices: ["To speed up your internet", "To store a unique password for every account", "To block ads", "To back up your photos"],
          answer: 1,
          explain: "It creates and remembers a strong, unique password per site so you don't have to."
        },
        {
          type: "fill",
          q: "The one password you must remember to unlock a password manager is called the ____ password.",
          answer: "master",
          accept: ["master", "master password"],
          explain: "The master password unlocks the vault, so it should be long, unique, and never reused."
        },
        {
          type: "truefalse",
          q: "A good password manager can auto-fill logins, which also helps you avoid fake phishing sites.",
          answer: true,
          explain: "Managers match the exact site address, so they won't auto-fill on a look-alike phishing page."
        },
        {
          type: "mcq",
          q: "Why should your master password be extra strong?",
          choices: ["It unlocks every other password", "It is shown to websites", "It is your username", "It expires hourly"],
          answer: 0,
          explain: "The master password protects the whole vault, so it is the one to make truly strong."
        },
        {
          type: "match",
          q: "Match each password-manager feature to what it does.",
          pairs: [
            ["Generator", "Creates strong random passwords"],
            ["Vault", "Stores your saved logins"],
            ["Auto-fill", "Types credentials on the right site"],
            ["Master password", "Unlocks the whole vault"]
          ],
          explain: "Each piece works together so you keep unique passwords without memorizing them."
        },
        {
          type: "truefalse",
          q: "Because a manager lets you have unique passwords, a breach at one site won't unlock your others.",
          answer: true,
          explain: "Unique passwords contain the damage: a leak at one site can't be reused against another."
        },
        {
          type: "mcq",
          q: "What is a smart extra step to protect the manager itself?",
          choices: ["Turn on two-factor for the vault", "Email yourself the master password", "Use '1234' so it's easy", "Share it with friends"],
          answer: 0,
          explain: "Adding a second factor means a stolen master password alone still can't open the vault."
        },
        {
          type: "order",
          q: "Order the steps to save a new login in a password manager.",
          items: ["Open the manager and generate a password", "Sign up on the website with it", "Save the login to the vault", "Let auto-fill use it next visit"],
          explain: "Generate, use, save, then reuse effortlessly on future visits."
        }
      ]
    },
    {
      id: "l11",
      title: "Two-Factor & MFA",
      intro: "Multi-factor authentication adds a second proof on top of your password so a stolen password isn't enough.",
      questions: [
        {
          type: "fill",
          q: "Requiring a password plus a second proof is called ____-factor authentication.",
          answer: "two",
          accept: ["two", "2", "multi", "multi-factor"],
          explain: "A second factor means an attacker needs more than just your password to get in."
        },
        {
          type: "match",
          q: "Match each factor to its category.",
          pairs: [
            ["Your password", "Something you know"],
            ["A code from your phone app", "Something you have"],
            ["Your fingerprint", "Something you are"]
          ],
          explain: "MFA is strongest when it combines different categories, not two of the same."
        },
        {
          type: "mcq",
          q: "Why does MFA help even if your password leaks?",
          choices: ["It changes your password", "The attacker still lacks the second factor", "It hides your username", "It deletes the leak"],
          answer: 1,
          explain: "Without the second factor, a stolen password alone can't complete the login."
        },
        {
          type: "mcq",
          q: "Which second factor is generally the most phishing-resistant?",
          choices: ["A code texted by SMS", "A physical security key", "An emailed link", "A security question"],
          answer: 1,
          explain: "Hardware security keys verify the real site and resist phishing better than SMS codes."
        },
        {
          type: "truefalse",
          q: "SMS text codes are a weaker second factor than an authenticator app or security key.",
          answer: true,
          explain: "SMS can be intercepted or SIM-swapped, so app-based codes or keys are stronger."
        },
        {
          type: "mcq",
          q: "An 'authenticator app' proves you have your phone by showing what?",
          choices: ["A rotating one-time code", "Your home address", "Your password", "Your email inbox"],
          answer: 0,
          explain: "Authenticator apps generate short-lived codes that refresh every 30 seconds or so."
        },
        {
          type: "truefalse",
          q: "Using your password twice counts as two-factor authentication.",
          answer: false,
          explain: "Two of the same factor isn't MFA; you need a different category like something you have."
        },
        {
          type: "order",
          q: "Order a typical login with a one-time code.",
          items: ["Enter username and password", "Site asks for a second factor", "Open your authenticator app", "Type the current 6-digit code"],
          explain: "Password first, then the second factor confirms it's really you."
        }
      ]
    },
    {
      id: "l12",
      title: "Passkeys & Biometrics",
      intro: "Passkeys and Face or Touch ID let you sign in without typing a password, using a key stored on your device.",
      questions: [
        {
          type: "mcq",
          q: "What is a passkey?",
          choices: ["A password you write down", "A device-stored key that logs you in without a typed password", "A backup email", "A type of virus"],
          answer: 1,
          explain: "A passkey is a secure key on your device that replaces the typed password entirely."
        },
        {
          type: "truefalse",
          q: "With a passkey, there is no shared secret password for a site to leak in a breach.",
          answer: true,
          explain: "Passkeys use a private key that never leaves your device, so there's nothing reusable to steal from the site."
        },
        {
          type: "fill",
          q: "Passkeys are built on the open standard often called ____.",
          answer: "fido",
          accept: ["fido", "fido2", "webauthn"],
          explain: "FIDO and WebAuthn are the standards behind passwordless passkey sign-in."
        },
        {
          type: "mcq",
          q: "When you unlock a passkey with Face ID, what does the fingerprint or face scan do?",
          choices: ["Sends your face to the website", "Unlocks the key stored on your device", "Replaces your username", "Encrypts the whole internet"],
          answer: 1,
          explain: "The biometric only unlocks the local key; your face or fingerprint never leaves the device."
        },
        {
          type: "match",
          q: "Match each passwordless term to its meaning.",
          pairs: [
            ["Passkey", "A device-stored login key"],
            ["Biometric", "Face or fingerprint check"],
            ["Private key", "Secret half that stays on your device"],
            ["Public key", "Shared half the site stores"]
          ],
          explain: "Passkeys use a key pair: the private half stays with you, the public half sits at the site."
        },
        {
          type: "truefalse",
          q: "Because a passkey verifies the real site, it strongly resists phishing.",
          answer: true,
          explain: "A passkey is bound to the genuine site's address, so it won't work on a fake look-alike page."
        },
        {
          type: "mcq",
          q: "Which is a real benefit of passkeys over passwords?",
          choices: ["Nothing to type, remember, or reuse", "They work without any device", "They never need a screen", "They print themselves out"],
          answer: 0,
          explain: "Passkeys remove typed passwords, so there's nothing to forget, reuse, or leak."
        }
      ]
    },
    {
      id: "l13",
      title: "How Passwords Get Cracked",
      intro: "Attackers use brute force, dictionary lists, and passwords leaked from other breaches to break into accounts.",
      questions: [
        {
          type: "match",
          q: "Match each attack to how it works.",
          pairs: [
            ["Brute force", "Tries every possible combination"],
            ["Dictionary attack", "Tries common words and known passwords"],
            ["Credential stuffing", "Reuses passwords leaked from other sites"]
          ],
          explain: "Each attack exploits weak or reused passwords in a different way."
        },
        {
          type: "mcq",
          q: "Why does a longer password resist brute force so well?",
          choices: ["It looks nicer", "Each extra character multiplies the guesses needed", "It loads faster", "It uses less memory"],
          answer: 1,
          explain: "Every added character hugely increases the number of combinations to try."
        },
        {
          type: "truefalse",
          q: "Credential stuffing works because many people reuse the same password across sites.",
          answer: true,
          explain: "Attackers take passwords leaked from one breach and try them everywhere else."
        },
        {
          type: "fill",
          q: "An attack that tries a list of common words and known passwords is a ____ attack.",
          answer: "dictionary",
          accept: ["dictionary"],
          explain: "Dictionary attacks are fast because they try likely guesses before rare ones."
        },
        {
          type: "mcq",
          q: "Which habit best defends against credential stuffing?",
          choices: ["A unique password for every site", "Using the same password everywhere", "Short passwords", "Sharing passwords with friends"],
          answer: 0,
          explain: "Unique passwords mean a leak at one site can't be reused to break into another."
        },
        {
          type: "mcq",
          q: "How does turning on MFA help even after a password leaks?",
          choices: ["It hides the password", "The attacker still needs the second factor", "It deletes the breach", "It slows the website"],
          answer: 1,
          explain: "Even a correct stolen password fails without the second factor."
        },
        {
          type: "truefalse",
          q: "If a site is breached and your password leaks, you only need to worry about that one site.",
          answer: false,
          explain: "If you reused that password, every site sharing it is now at risk through credential stuffing."
        },
        {
          type: "order",
          q: "Order the safe response after learning a site you use was breached.",
          items: ["Change the password on that site", "Change it anywhere you reused it", "Turn on MFA where available", "Watch the account for odd activity"],
          explain: "Stop the reuse first, then add MFA and stay alert."
        }
      ]
    },
    {
      id: "l14",
      title: "Account Recovery",
      intro: "The recovery path is a back door to your account, so attackers target it too — secure it as carefully as your password.",
      questions: [
        {
          type: "mcq",
          q: "Why do attackers target the account recovery path?",
          choices: ["It is often the weakest way in", "It is more colorful", "It is faster to type", "It uses less data"],
          answer: 0,
          explain: "If recovery is weak, an attacker can reset your password and skip it entirely."
        },
        {
          type: "fill",
          q: "One-time codes you save in case you lose your second factor are called ____ codes.",
          answer: "backup",
          accept: ["backup", "recovery", "back up"],
          explain: "Backup codes let you back into your account if you lose your phone or key."
        },
        {
          type: "truefalse",
          q: "A weak or hacked recovery email can undo even a strong account password.",
          answer: true,
          explain: "If someone controls your recovery email, they can reset the password and lock you out."
        },
        {
          type: "mcq",
          q: "What makes classic security questions a weak recovery method?",
          choices: ["Answers are often public or guessable", "They take too long", "They cost money", "They need MFA"],
          answer: 0,
          explain: "Answers like a mother's maiden name or first pet can often be found or guessed."
        },
        {
          type: "match",
          q: "Match each recovery item to a good practice.",
          pairs: [
            ["Backup codes", "Store them somewhere safe and offline"],
            ["Recovery email", "Protect it with its own strong password and MFA"],
            ["Security questions", "Use random answers, not real facts"]
          ],
          explain: "Treat every recovery route as a door worth locking."
        },
        {
          type: "truefalse",
          q: "It's fine to store backup codes as a screenshot in an unlocked, unprotected photo cloud.",
          answer: false,
          explain: "If that cloud is breached, the codes hand over your account; store them securely."
        },
        {
          type: "mcq",
          q: "Why should your recovery email itself have MFA turned on?",
          choices: ["It controls resets for other accounts", "It sends faster", "It saves storage", "It blocks spam only"],
          answer: 0,
          explain: "Because resets flow through it, the recovery email is a high-value target worth extra protection."
        }
      ]
    },
    {
      id: "l15",
      title: "Authentication vs Authorization",
      intro: "Authentication proves who you are; authorization decides what you're allowed to do once you're in.",
      questions: [
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Authentication", "Proving who you are"],
            ["Authorization", "What you're allowed to do"]
          ],
          explain: "First the system confirms your identity, then it checks your permissions."
        },
        {
          type: "mcq",
          q: "Logging in with a correct password is an example of what?",
          choices: ["Authentication", "Authorization", "Encryption", "Compression"],
          answer: 0,
          explain: "Verifying who you are is authentication; it happens before permission checks."
        },
        {
          type: "mcq",
          q: "Blocking a regular user from an admin-only page is an example of what?",
          choices: ["Authorization", "Authentication", "Hashing", "Phishing"],
          answer: 0,
          explain: "Deciding what an identified user may access is authorization."
        },
        {
          type: "fill",
          q: "Giving each account only the access it truly needs is called the principle of least ____.",
          answer: "privilege",
          accept: ["privilege", "privileges"],
          explain: "Least privilege limits the damage if an account is ever compromised."
        },
        {
          type: "truefalse",
          q: "Authentication always comes before authorization in a login flow.",
          answer: true,
          explain: "The system must know who you are before it can decide what you may do."
        },
        {
          type: "mcq",
          q: "Broken access control means a user can reach things they shouldn't. What kind of failure is that?",
          choices: ["An authorization failure", "An authentication failure", "A hashing failure", "A network speed problem"],
          answer: 0,
          explain: "The user is identified fine, but the permission checks are wrong, so it's an authorization flaw."
        },
        {
          type: "truefalse",
          q: "Least privilege means giving everyone full admin access to keep things simple.",
          answer: false,
          explain: "It's the opposite: grant only the minimum access each account actually needs."
        },
        {
          type: "order",
          q: "Order what happens when you open a protected page.",
          items: ["You prove your identity (authentication)", "The system checks your permissions (authorization)", "Allowed content is shown", "Forbidden content is blocked"],
          explain: "Identity first, permissions second, then allow or deny."
        }
      ]
    },
    {
      id: "l16",
      title: "Single Sign-On & 'Sign in with'",
      intro: "Single sign-on lets you use one trusted account to log in elsewhere — convenient, but with trade-offs to understand.",
      questions: [
        {
          type: "mcq",
          q: "What does 'Sign in with Google' let you do?",
          choices: ["Use one trusted account to log into other apps", "Copy Google's password to every site", "Send Google your fingerprint", "Disable all security"],
          answer: 0,
          explain: "The other app trusts your identity from the provider instead of making a new password."
        },
        {
          type: "fill",
          q: "The common standard that lets one app grant access on your behalf without sharing your password is ____.",
          answer: "oauth",
          accept: ["oauth", "oauth2", "oauth 2"],
          explain: "OAuth lets an app act with limited access to your account without handing over your password."
        },
        {
          type: "truefalse",
          q: "With 'Sign in with' you avoid creating and remembering yet another password.",
          answer: true,
          explain: "You reuse one trusted login, so there's one fewer password to manage or leak."
        },
        {
          type: "mcq",
          q: "What is a real trade-off of single sign-on?",
          choices: ["If that one account is compromised, many apps are at risk", "It uses more paper", "It only works offline", "It deletes your data"],
          answer: 0,
          explain: "One key account unlocks many places, so protecting it becomes especially important."
        },
        {
          type: "match",
          q: "Match each single sign-on idea to its description.",
          pairs: [
            ["SSO", "One login used across many apps"],
            ["OAuth", "Grants access without sharing your password"],
            ["Identity provider", "The trusted account you sign in with"]
          ],
          explain: "SSO is the convenience; OAuth is the mechanism; the provider is the trusted source."
        },
        {
          type: "mcq",
          q: "Because SSO makes one account so valuable, what should you do with it?",
          choices: ["Protect it with a strong password and MFA", "Reuse its password everywhere", "Share it widely", "Skip its security settings"],
          answer: 0,
          explain: "The account that unlocks everything deserves your strongest protection."
        },
        {
          type: "truefalse",
          q: "When an app asks for permissions during 'Sign in with', it's smart to review what access it's requesting.",
          answer: true,
          explain: "OAuth shows what the app wants; grant only what makes sense and revoke it later if unused."
        },
        {
          type: "order",
          q: "Order a typical 'Sign in with' flow.",
          items: ["Click 'Sign in with' the provider", "The provider verifies your identity", "Confirm the requested permissions", "The app logs you in"],
          explain: "You choose the provider, it confirms who you are, you approve the access it asks for, and the app trusts the result."
        }
      ]
    }
  ]
});
