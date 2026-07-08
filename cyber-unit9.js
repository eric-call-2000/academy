window.ACADEMY.addUnit("cyber", {
  id: "unit-9",
  title: "Data, Privacy & Encryption",
  color: "#58cc02",
  icon: "🔒",
  description: "Protecting sensitive information — the thing attackers are usually after.",
  lessons: [
    {
      id: "l65",
      title: "Encryption Basics",
      intro: "Encryption scrambles data so only authorized parties can read it, whether it is sitting on a disk or moving across a network.",
      questions: [
        {
          type: "mcq",
          q: "What does encryption do to data?",
          choices: [
            "Scrambles it so only someone with the key can read it",
            "Deletes it permanently",
            "Compresses it to save space",
            "Copies it to a backup server"
          ],
          answer: 0,
          explain: "Encryption turns readable data into scrambled ciphertext that only an authorized party with the right key can turn back into the original."
        },
        {
          type: "fill",
          q: "The readable, original form of data before encryption is called ____.",
          answer: "plaintext",
          accept: ["plaintext", "plain text", "cleartext"],
          explain: "Plaintext is the original readable data; after encryption it becomes ciphertext."
        },
        {
          type: "truefalse",
          q: "Encrypting a laptop's hard drive protects the data even if the laptop is stolen.",
          answer: true,
          explain: "Full-disk encryption means a thief who cannot supply the key just sees scrambled data, not your files."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Plaintext", "The readable original data"],
            ["Ciphertext", "The scrambled encrypted output"],
            ["Key", "The secret needed to encrypt or decrypt"]
          ],
          explain: "A key transforms plaintext into ciphertext and back; without the key the ciphertext stays unreadable."
        },
        {
          type: "match",
          q: "Match each state of data to what it means.",
          pairs: [
            ["Data at rest", "Stored on a disk, database, or backup"],
            ["Data in transit", "Moving across a network between two points"]
          ],
          explain: "Encrypting at rest protects stored data; encrypting in transit protects data as it travels."
        },
        {
          type: "mcq",
          q: "Which is an example of protecting data in transit?",
          choices: [
            "Using HTTPS so a login travels over an encrypted connection",
            "Storing files in a locked filing cabinet",
            "Encrypting an old backup drive in a closet",
            "Deleting a spreadsheet you no longer need"
          ],
          answer: 0,
          explain: "HTTPS encrypts the connection, protecting data while it moves between your browser and the server."
        },
        {
          type: "truefalse",
          q: "Once data is encrypted, you never need the key again to read it.",
          answer: false,
          explain: "You need the correct key to decrypt the data back into readable plaintext; lose the key and the data stays scrambled."
        },
        {
          type: "mcq",
          q: "Why do we bother encrypting data at rest if it is already behind a login?",
          choices: [
            "So a stolen disk or leaked backup is still unreadable without the key",
            "Because encryption makes data load faster",
            "Because logins never actually work",
            "So the data takes up less storage"
          ],
          answer: 0,
          explain: "Defense in depth: if someone bypasses the login and grabs the raw storage, encryption keeps the contents unreadable."
        }
      ]
    },
    {
      id: "l66",
      title: "Symmetric vs. Asymmetric",
      intro: "Symmetric encryption uses one shared key while asymmetric uses a public and private key pair, which is the idea behind how HTTPS gets started.",
      questions: [
        {
          type: "mcq",
          q: "What is symmetric encryption?",
          choices: [
            "The same shared key is used to encrypt and decrypt",
            "A public key encrypts and a different private key decrypts",
            "Data that can never be decrypted",
            "A key that changes on every keystroke"
          ],
          answer: 0,
          explain: "Symmetric encryption uses one shared secret key for both encryption and decryption."
        },
        {
          type: "mcq",
          q: "In asymmetric encryption, if someone encrypts a message with your public key, who can read it?",
          choices: [
            "Only you, using your matching private key",
            "Anyone who has your public key",
            "Only the sender",
            "Nobody, ever"
          ],
          answer: 0,
          explain: "The public key encrypts and only the matching private key can decrypt, so only the private-key holder can read it."
        },
        {
          type: "truefalse",
          q: "In asymmetric encryption, the public key can be shared openly.",
          answer: true,
          explain: "The public key is meant to be shared; the private key is the one you must keep secret."
        },
        {
          type: "match",
          q: "Match each key type to how it is handled.",
          pairs: [
            ["Public key", "Shared openly with anyone"],
            ["Private key", "Kept secret by its owner"]
          ],
          explain: "The pair works together: what the public key encrypts, only the private key can decrypt."
        },
        {
          type: "match",
          q: "Match each approach to its defining trait.",
          pairs: [
            ["Symmetric", "One shared key, fast for large data"],
            ["Asymmetric", "A key pair, great for exchanging a secret safely"]
          ],
          explain: "Symmetric is fast but both sides need the same key; asymmetric solves the problem of safely agreeing on that key."
        },
        {
          type: "truefalse",
          q: "HTTPS often uses asymmetric encryption to safely set up a connection, then switches to faster symmetric encryption for the rest.",
          answer: true,
          explain: "At a high level, the key pair helps both sides agree on a shared symmetric key, which then encrypts the bulk of the traffic quickly."
        },
        {
          type: "fill",
          q: "The secret key you must never share in an asymmetric pair is the ____ key.",
          answer: "private",
          accept: ["private"],
          explain: "The private key must stay secret; exposing it lets others decrypt or impersonate you."
        },
        {
          type: "mcq",
          q: "Why not just use asymmetric encryption for everything?",
          choices: [
            "It is much slower, so it is best used to set up a shared symmetric key",
            "It is not secure at all",
            "Public keys must be kept secret",
            "It only works on text, never files"
          ],
          answer: 0,
          explain: "Asymmetric math is slower, so systems commonly use it to exchange a symmetric key and then encrypt the actual data symmetrically."
        }
      ]
    },
    {
      id: "l67",
      title: "Hashing vs. Encryption",
      intro: "Hashing is a one-way transformation used for passwords and integrity checks, while encryption is reversible when you have the key.",
      questions: [
        {
          type: "mcq",
          q: "What is the key difference between hashing and encryption?",
          choices: [
            "Hashing is one-way; encryption is reversible with a key",
            "Hashing is reversible; encryption is one-way",
            "They are exactly the same thing",
            "Hashing needs a key but encryption does not"
          ],
          answer: 0,
          explain: "You cannot un-hash back to the original, but you can decrypt encrypted data if you hold the key."
        },
        {
          type: "truefalse",
          q: "You can reverse a hash to recover the original input if you have the right key.",
          answer: false,
          explain: "Hashing is one-way by design; there is no key that turns a hash back into the original input."
        },
        {
          type: "mcq",
          q: "How should a website store user passwords?",
          choices: [
            "Hashed (ideally salted), never as plaintext",
            "As plaintext so support can read them",
            "Encrypted with the key stored next to them",
            "In a public spreadsheet"
          ],
          answer: 0,
          explain: "Store a hash of the password so that even a database leak does not reveal the actual passwords."
        },
        {
          type: "fill",
          q: "Adding a unique random value to each password before hashing is called a ____.",
          answer: "salt",
          accept: ["salt", "salting"],
          explain: "A salt makes each hash unique, so identical passwords look different and precomputed attacks are much harder."
        },
        {
          type: "match",
          q: "Match each tool to its main job.",
          pairs: [
            ["Hashing", "Verify a password or check data integrity"],
            ["Encryption", "Keep data secret but recoverable with a key"]
          ],
          explain: "Use hashing when you only need to check a match; use encryption when you need to get the data back."
        },
        {
          type: "truefalse",
          q: "If two files have different contents, a good hash function will normally produce different hash values.",
          answer: true,
          explain: "A tiny change in input produces a very different hash, which is why hashes are useful for detecting tampering."
        },
        {
          type: "mcq",
          q: "A website checks your login by hashing what you typed and comparing it to the stored hash. Why is this smart?",
          choices: [
            "It never needs to store or see your actual password",
            "It makes the password load faster",
            "It lets support staff read your password",
            "It encrypts the password with a shared key"
          ],
          answer: 0,
          explain: "Comparing hashes means the real password is never stored, so a leaked database does not hand attackers the passwords."
        },
        {
          type: "match",
          q: "Match each scenario to what you would use.",
          pairs: [
            ["Checking a downloaded file was not altered", "Hashing"],
            ["Sending a private message someone must read later", "Encryption"]
          ],
          explain: "Integrity checks fit hashing; confidential data that must be read again fits encryption."
        }
      ]
    },
    {
      id: "l68",
      title: "PII & Sensitive Data",
      intro: "Personally identifiable information and other sensitive data deserve extra protection because they are exactly what attackers want.",
      questions: [
        {
          type: "fill",
          q: "Data that can identify a specific person, like a name plus a Social Security number, is called ____.",
          answer: "pii",
          accept: ["pii", "personally identifiable information", "personal data"],
          explain: "PII stands for personally identifiable information, data that points to a specific individual."
        },
        {
          type: "mcq",
          q: "Which of these is generally considered sensitive personal data needing extra care?",
          choices: [
            "A medical record",
            "A public press release",
            "A company's published logo",
            "A weather forecast"
          ],
          answer: 0,
          explain: "Health, financial, and identity data are sensitive because misuse can seriously harm the person."
        },
        {
          type: "truefalse",
          q: "A person's full credit card number should be treated as sensitive data.",
          answer: true,
          explain: "Payment card data is highly sensitive and is subject to strict handling and storage rules."
        },
        {
          type: "match",
          q: "Match each item to whether it is typically sensitive.",
          pairs: [
            ["Social Security number", "Sensitive"],
            ["Home address plus full name", "Personal data"],
            ["A published company blog post", "Public, not sensitive"]
          ],
          explain: "Identity and financial details are sensitive; already-public content generally is not."
        },
        {
          type: "mcq",
          q: "What is a good practice when you must display a stored card or ID number?",
          choices: [
            "Mask most of it and show only the last few digits",
            "Show the whole number to be helpful",
            "Post it in a shared chat channel",
            "Email it in plaintext to the user"
          ],
          answer: 0,
          explain: "Masking (showing only the last few digits) limits exposure if the screen or log is seen by the wrong person."
        },
        {
          type: "truefalse",
          q: "Because email addresses are common, they never count as personal data.",
          answer: false,
          explain: "An email address can identify or contact a specific person, so it is usually treated as personal data."
        },
        {
          type: "mcq",
          q: "Why is PII the thing attackers usually go after?",
          choices: [
            "It can be sold, used for identity theft, or used to target people",
            "It is fun to look at",
            "It makes servers run faster",
            "It is never actually valuable"
          ],
          answer: 0,
          explain: "PII fuels identity theft, fraud, and targeted phishing, which is why it must be protected carefully."
        }
      ]
    },
    {
      id: "l69",
      title: "Data Breaches",
      intro: "A data breach exposes information to people who should not have it, and knowing how to respond limits the damage.",
      questions: [
        {
          type: "mcq",
          q: "What is a data breach?",
          choices: [
            "Sensitive data is exposed to or taken by unauthorized people",
            "A scheduled backup finishing successfully",
            "A user logging in normally",
            "A website getting more visitors than usual"
          ],
          answer: 0,
          explain: "A breach means information ended up in the hands of people who were not authorized to have it."
        },
        {
          type: "mcq",
          q: "You learn your password was exposed in a breach. What should you do first?",
          choices: [
            "Change that password and any place you reused it",
            "Ignore it since breaches are common",
            "Post about it publicly with the password",
            "Wait a year to see if anything happens"
          ],
          answer: 0,
          explain: "Change the exposed password immediately, especially anywhere you reused it, to cut off attacker access."
        },
        {
          type: "truefalse",
          q: "Enabling MFA on an account helps protect it even if your password later leaks in a breach.",
          answer: true,
          explain: "With MFA, a leaked password alone is not enough because the attacker still lacks your second factor."
        },
        {
          type: "order",
          q: "Order the steps to take after your account is caught in a breach.",
          items: [
            "Change the exposed password",
            "Update that password everywhere you reused it",
            "Turn on MFA for the account",
            "Watch for suspicious activity and phishing"
          ],
          explain: "Stop the bleeding first (new password), remove reuse risk, add MFA, then stay alert for follow-on attacks."
        },
        {
          type: "match",
          q: "Match each cause to the kind of breach it can lead to.",
          pairs: [
            ["Reused, leaked password", "Attacker logs into other accounts"],
            ["Misconfigured cloud storage", "Files exposed publicly by mistake"],
            ["A phishing email that steals credentials", "Attacker gains access as the victim"]
          ],
          explain: "Breaches often come from reused passwords, misconfiguration, or stolen credentials rather than fancy hacking."
        },
        {
          type: "fill",
          q: "Using the same password on many sites is dangerous because one leak leads to ____ attacks against your other accounts.",
          answer: "credential stuffing",
          accept: ["credential stuffing", "credential-stuffing", "password reuse"],
          explain: "Credential stuffing is when attackers try a leaked username and password on many other sites hoping you reused it."
        },
        {
          type: "truefalse",
          q: "The safest assumption is that a leaked password will be tried on all your other accounts.",
          answer: true,
          explain: "Attackers automate reuse attempts, so treat any leaked password as burned everywhere it was used."
        },
        {
          type: "mcq",
          q: "A tool that checks whether your email appeared in known breaches is useful because it lets you",
          choices: [
            "Act quickly to change affected passwords",
            "Recover the attacker's identity",
            "Undo the breach entirely",
            "Get your data deleted from every site"
          ],
          answer: 0,
          explain: "Breach-notification tools help you react fast by changing passwords and enabling MFA where needed."
        }
      ]
    },
    {
      id: "l70",
      title: "Privacy Basics & Laws",
      intro: "Privacy is about consent and giving people control over their data, which is the idea behind rules like GDPR and CCPA.",
      questions: [
        {
          type: "mcq",
          q: "What is the core idea behind modern privacy laws?",
          choices: [
            "People should have consent and control over their personal data",
            "Companies can use any data however they like",
            "Data can never be collected at all",
            "Only governments are allowed to hold data"
          ],
          answer: 0,
          explain: "Privacy laws center on informed consent and giving individuals rights over their own data."
        },
        {
          type: "fill",
          q: "Getting a user's clear permission before collecting or using their data is called ____.",
          answer: "consent",
          accept: ["consent"],
          explain: "Consent means the user knowingly agrees to how their data will be collected and used."
        },
        {
          type: "truefalse",
          q: "GDPR is a European Union privacy regulation, and CCPA is a California privacy law.",
          answer: true,
          explain: "GDPR (EU) and CCPA (California) both give people rights over their personal data, at a high level."
        },
        {
          type: "match",
          q: "Match each privacy law to where it applies.",
          pairs: [
            ["GDPR", "European Union"],
            ["CCPA", "California, USA"]
          ],
          explain: "Both aim to protect personal data and grant user rights, but they come from different jurisdictions."
        },
        {
          type: "match",
          q: "Match each common user right to what it lets a person do.",
          pairs: [
            ["Right to access", "See what data a company holds about them"],
            ["Right to deletion", "Ask a company to erase their data"]
          ],
          explain: "Access and deletion are common data rights that put control back in the user's hands."
        },
        {
          type: "truefalse",
          q: "A clear privacy policy that explains what you collect and why helps meet privacy expectations.",
          answer: true,
          explain: "Being transparent about what data you collect and why is a foundation of good privacy practice and most laws."
        },
        {
          type: "mcq",
          q: "Which practice best respects user privacy when signing people up?",
          choices: [
            "Ask only for the data you actually need and explain why",
            "Pre-check every optional consent box for them",
            "Collect everything just in case",
            "Hide the privacy policy so nobody reads it"
          ],
          answer: 0,
          explain: "Asking only for what you need, with clear reasons, respects consent and reduces your risk."
        }
      ]
    },
    {
      id: "l71",
      title: "Data Minimization",
      intro: "Data minimization means collecting only what you actually need and deleting it when you are done, because data you do not hold cannot be stolen.",
      questions: [
        {
          type: "mcq",
          q: "What does data minimization mean?",
          choices: [
            "Collect only the data you truly need, and keep it only as long as needed",
            "Collect as much data as possible for later",
            "Never collect any data at all",
            "Store every log forever"
          ],
          answer: 0,
          explain: "Minimization is about limiting both what you collect and how long you keep it."
        },
        {
          type: "truefalse",
          q: "Data you never collected cannot be exposed in a breach.",
          answer: true,
          explain: "The safest data is the data you do not have, which is the whole point of minimization."
        },
        {
          type: "fill",
          q: "The policy for how long you keep data before deleting it is called a data ____ policy.",
          answer: "retention",
          accept: ["retention"],
          explain: "A retention policy defines how long data is kept and when it must be deleted."
        },
        {
          type: "mcq",
          q: "A sign-up form asks for a birthdate the app never uses. What does minimization suggest?",
          choices: [
            "Stop collecting it, since it adds risk with no benefit",
            "Collect it and two more fields for safety",
            "Store it in plaintext forever",
            "Sell it to make up the difference"
          ],
          answer: 0,
          explain: "If a field is not needed, collecting it only increases your breach exposure and liability, so drop it."
        },
        {
          type: "match",
          q: "Match each practice to how it reduces risk.",
          pairs: [
            ["Collect fewer fields", "Less sensitive data to protect"],
            ["Delete data when done", "Shrinks the window it can be stolen"],
            ["Anonymize where possible", "Leaked data reveals less about people"]
          ],
          explain: "Collecting less, keeping it shorter, and anonymizing all shrink the value and risk of your data."
        },
        {
          type: "truefalse",
          q: "Keeping every piece of data forever is a good security strategy.",
          answer: false,
          explain: "Hoarding data grows your attack surface and legal risk; deleting what you no longer need is safer."
        },
        {
          type: "mcq",
          q: "How does data minimization reduce the impact of a breach?",
          choices: [
            "There is simply less sensitive data available to steal",
            "It makes servers run faster",
            "It encrypts the attacker's computer",
            "It hides the breach from the public"
          ],
          answer: 0,
          explain: "A smaller data footprint means a breach exposes less, limiting harm to users and the business."
        }
      ]
    },
    {
      id: "l72",
      title: "End-to-End Encryption",
      intro: "End-to-end encryption means only the sender and recipient can read the messages, and not even the service provider in the middle can.",
      questions: [
        {
          type: "mcq",
          q: "What does end-to-end encryption (E2EE) guarantee?",
          choices: [
            "Only the sender and recipient can read the messages",
            "The provider can read messages for support",
            "Messages are stored in plaintext on the server",
            "Anyone on the network can read the messages"
          ],
          answer: 0,
          explain: "With E2EE, messages are encrypted on the sender's device and only decrypted on the recipient's, so no one in between can read them."
        },
        {
          type: "truefalse",
          q: "With true end-to-end encryption, even the service provider cannot read the message contents.",
          answer: true,
          explain: "The provider only ever handles ciphertext because it lacks the keys held on the users' devices."
        },
        {
          type: "mcq",
          q: "How is E2EE different from ordinary HTTPS to a website?",
          choices: [
            "HTTPS protects data to the server, which can still read it; E2EE keeps even the server out",
            "They are exactly the same thing",
            "HTTPS is one-way and E2EE is reversible",
            "E2EE only works for images"
          ],
          answer: 0,
          explain: "HTTPS encrypts data in transit to the server, but the server can decrypt it; E2EE keeps the content readable only to the endpoints."
        },
        {
          type: "match",
          q: "Match each party to what they can see under E2EE.",
          pairs: [
            ["Sender", "The readable message"],
            ["Recipient", "The readable message"],
            ["Service provider", "Only scrambled ciphertext"]
          ],
          explain: "Only the two endpoints hold the keys; the provider relays ciphertext it cannot decrypt."
        },
        {
          type: "order",
          q: "Order how an end-to-end encrypted message travels.",
          items: [
            "Sender's device encrypts the message",
            "The provider relays the scrambled message",
            "Recipient's device decrypts and reads it"
          ],
          explain: "Encryption happens on the sender's device and decryption only on the recipient's, so the middle only ever sees ciphertext."
        },
        {
          type: "truefalse",
          q: "End-to-end encryption removes the need to keep the device itself secure.",
          answer: false,
          explain: "E2EE protects data in transit, but if someone unlocks your device they can read the decrypted messages, so device security still matters."
        },
        {
          type: "fill",
          q: "In E2EE, the message is decrypted only on the ____ device.",
          answer: "recipient",
          accept: ["recipient", "recipient's", "receiver", "receiving"],
          explain: "Only the recipient's device holds the key to decrypt, which is what keeps the provider out."
        },
        {
          type: "mcq",
          q: "Why do private messaging apps advertise end-to-end encryption?",
          choices: [
            "It assures users that not even the company can read their chats",
            "It makes messages send faster",
            "It lets the company scan messages for ads",
            "It stores messages in plaintext for backup"
          ],
          answer: 0,
          explain: "E2EE is a strong privacy promise: the content is readable only by the people in the conversation."
        }
      ]
    }
  ]
});
