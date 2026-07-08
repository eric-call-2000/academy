window.ACADEMY.addUnit("acc", {
  id: "unit-4",
  title: "BIM Collaborate & Cloud Worksharing",
  color: "#ce82ff",
  icon: "🔗",
  description: "Designing together on cloud-hosted models.",
  lessons: [
    {
      id: "l25",
      title: "Collaborate vs Collaborate Pro",
      intro: "Learn how the two BIM Collaborate tiers differ and which one you need for cloud worksharing.",
      questions: [
        {
          type: "mcq",
          q: "What is the main extra capability that BIM Collaborate Pro adds over BIM Collaborate?",
          choices: ["Revit Cloud Worksharing on cloud-hosted models", "Free unlimited storage", "Access to Autodesk Takeoff", "The ability to send email"],
          answer: 0,
          explain: "Collaborate Pro adds Revit Cloud Worksharing (and Cloud Models for Revit) so teams can co-author a Revit model hosted in the cloud."
        },
        {
          type: "truefalse",
          q: "Both BIM Collaborate and BIM Collaborate Pro include Model Coordination for automatic clash detection.",
          answer: true,
          explain: "Both tiers include Design Collaboration and Model Coordination. Pro adds cloud worksharing on top."
        },
        {
          type: "mcq",
          q: "Which product family are BIM Collaborate and Collaborate Pro part of?",
          choices: ["Autodesk Construction Cloud (ACC), also branded Autodesk Forma", "Microsoft Office", "AutoCAD LT", "Fusion 360"],
          answer: 0,
          explain: "They are ACC products. Autodesk rebranded the ACC site as Autodesk Forma, so ACC and Forma are the same platform."
        },
        {
          type: "fill",
          q: "To let several people co-author one Revit central model in the cloud, you need Collaborate ____.",
          answer: "pro",
          accept: ["pro", "collaborate pro"],
          explain: "Cloud worksharing on a shared Revit model is a Collaborate Pro feature."
        },
        {
          type: "match",
          q: "Match each tier to what it is best known for.",
          pairs: [
            ["BIM Collaborate", "Design Collaboration and Model Coordination"],
            ["BIM Collaborate Pro", "Adds Revit Cloud Worksharing"]
          ],
          explain: "The standard tier handles coordination and package sharing; Pro unlocks live co-authoring of Revit models."
        },
        {
          type: "truefalse",
          q: "You must have Collaborate Pro just to view clash results in Model Coordination.",
          answer: false,
          explain: "Model Coordination is available in the standard BIM Collaborate tier, not just Pro."
        },
        {
          type: "mcq",
          q: "Which task specifically requires Collaborate Pro?",
          choices: ["Multiple people editing the same cloud-hosted Revit model", "Downloading a PDF", "Viewing an issue list", "Reading a folder in Autodesk Docs"],
          answer: 0,
          explain: "Simultaneous authoring of a cloud Revit central model is the signature Pro capability."
        }
      ]
    },
    {
      id: "l26",
      title: "Revit Cloud Worksharing",
      intro: "See how a Revit central model can live in the cloud so teammates edit it together.",
      questions: [
        {
          type: "fill",
          q: "Cloud worksharing hosts the Revit ____ model in the cloud instead of on a local server.",
          answer: "central",
          accept: ["central", "central model"],
          explain: "The central model that everyone syncs to is stored in the cloud rather than on a file server."
        },
        {
          type: "mcq",
          q: "In Revit worksharing, what does each user save changes into and pull changes from?",
          choices: ["Their local copy synced with the central model", "A printed drawing", "An email attachment", "The recycle bin"],
          answer: 0,
          explain: "Each user works in a local copy and uses Sync with Central to exchange changes with the shared central model."
        },
        {
          type: "truefalse",
          q: "Cloud worksharing lets people in different offices work on the same Revit model without a shared local network.",
          answer: true,
          explain: "Because the central model is in the cloud, users do not need to be on the same office LAN."
        },
        {
          type: "order",
          q: "Order the typical cloud worksharing steps for a new project model.",
          items: ["Enable worksharing in Revit", "Publish the model to the cloud project", "Team members open their own local copy", "Each person syncs with the central model"],
          explain: "You enable worksharing, save it to the cloud, then everyone opens a local copy and syncs to share edits."
        },
        {
          type: "mcq",
          q: "What is the safe habit before ending a Revit worksharing session?",
          choices: ["Sync with Central so your work is saved to the shared model", "Delete your local copy", "Turn off your monitor", "Rename the project"],
          answer: 0,
          explain: "Syncing with Central publishes your changes and pulls in others' work so nothing is lost."
        },
        {
          type: "match",
          q: "Match each worksharing term to its meaning.",
          pairs: [
            ["Central model", "The shared cloud master everyone syncs to"],
            ["Local copy", "Your personal working file on your machine"],
            ["Sync with Central", "Exchange your changes with the shared model"]
          ],
          explain: "You edit a local copy and periodically sync it with the cloud-hosted central model."
        },
        {
          type: "truefalse",
          q: "With cloud worksharing you must email your model to teammates every time you make a change.",
          answer: false,
          explain: "Changes flow through Sync with Central automatically; there is no need to email files around."
        }
      ]
    },
    {
      id: "l27",
      title: "Design Collaboration",
      intro: "Understand how separate teams share their work in a controlled, timeline-based way.",
      questions: [
        {
          type: "mcq",
          q: "What is the main purpose of Design Collaboration in BIM Collaborate?",
          choices: ["Let teams share and consume each other's work in a controlled timeline", "Estimate project cost", "Print title blocks", "Manage payroll"],
          answer: 0,
          explain: "Design Collaboration gives each team its own space and a timeline for sharing and receiving work packages."
        },
        {
          type: "fill",
          q: "In Design Collaboration, each discipline or team typically has its own ____ to organize their models.",
          answer: "team",
          accept: ["team", "team space", "space"],
          explain: "Work is organized by team spaces so each discipline controls what it shares and consumes."
        },
        {
          type: "truefalse",
          q: "Design Collaboration only works if every team is inside the same single Revit model.",
          answer: false,
          explain: "Teams keep their own models and share deliberately as packages, so they stay decoupled until they choose to share."
        },
        {
          type: "match",
          q: "Match the Design Collaboration idea to its role.",
          pairs: [
            ["Team space", "Where a discipline keeps and manages its models"],
            ["Timeline", "Visual history of what was shared and when"],
            ["Shared folder", "Where published packages become available to others"]
          ],
          explain: "Team spaces, a timeline, and a shared area together give a controlled way to exchange work."
        },
        {
          type: "mcq",
          q: "Why is controlled sharing better than everyone editing one giant model at once?",
          choices: ["Teams share stable versions on purpose instead of being disrupted by every unfinished edit", "It makes files bigger on purpose", "It disables version history", "It removes permissions"],
          answer: 0,
          explain: "Sharing curated packages means teams consume steady, intentional updates rather than half-finished work."
        },
        {
          type: "truefalse",
          q: "The Design Collaboration timeline helps you see the history of shared work over time.",
          answer: true,
          explain: "The timeline is a visual record of packages shared and consumed across the project."
        },
        {
          type: "order",
          q: "Order the basic Design Collaboration flow between two teams.",
          items: ["A team finishes work in its own space", "The team publishes a package", "The other team sees it on the timeline", "The other team consumes the package"],
          explain: "One team publishes, the other sees it appear and then chooses to consume it."
        }
      ]
    },
    {
      id: "l28",
      title: "Packages",
      intro: "Learn what a package is and how publishing and consuming keeps shared work deliberate.",
      questions: [
        {
          type: "fill",
          q: "A ____ is a curated snapshot of a team's work that is shared for others to use.",
          answer: "package",
          accept: ["package"],
          explain: "A package bundles a team's chosen models or files as a deliberate share point."
        },
        {
          type: "mcq",
          q: "What does it mean to publish a package?",
          choices: ["Make a chosen version of your work available to other teams", "Delete the project", "Print all sheets", "Lock everyone out"],
          answer: 0,
          explain: "Publishing shares a curated version of your models so other teams can pull it in when ready."
        },
        {
          type: "mcq",
          q: "What does it mean to consume a package?",
          choices: ["Bring another team's shared work into your own space to reference", "Erase it permanently", "Email it to a client", "Convert it to a spreadsheet"],
          answer: 0,
          explain: "Consuming pulls a published package into your team space so you can coordinate against it."
        },
        {
          type: "truefalse",
          q: "You are forced to consume a new package the instant another team publishes it.",
          answer: false,
          explain: "Consuming is a deliberate choice, so you decide when to update to the latest shared version."
        },
        {
          type: "order",
          q: "Order the lifecycle of a package between two teams.",
          items: ["Team prepares its work", "Team publishes a package", "Package appears to other teams", "Other team consumes the package"],
          explain: "Prepare, publish, appear, then consume is the deliberate share cycle."
        },
        {
          type: "match",
          q: "Match each package action to what it does.",
          pairs: [
            ["Publish", "Share a chosen version of your work"],
            ["Consume", "Pull someone else's shared version in"]
          ],
          explain: "Publishing gives; consuming receives. Both are intentional steps."
        },
        {
          type: "truefalse",
          q: "Packages let teams control exactly which version of their work others see.",
          answer: true,
          explain: "Because you publish on purpose, you decide the stable version other teams receive."
        }
      ]
    },
    {
      id: "l29",
      title: "Desktop Connector",
      intro: "See how Desktop Connector bridges your cloud project files and your local desktop.",
      questions: [
        {
          type: "mcq",
          q: "What does Autodesk Desktop Connector do?",
          choices: ["Syncs ACC cloud files to a folder on your desktop", "Renders 3D animations", "Manages your email inbox", "Estimates costs"],
          answer: 0,
          explain: "Desktop Connector maps cloud project files to a local drive folder so desktop apps can open and save them."
        },
        {
          type: "fill",
          q: "Desktop Connector makes your Autodesk Docs files appear like a ____ folder on your computer.",
          answer: "local",
          accept: ["local", "local drive", "drive"],
          explain: "The connected folder behaves like a normal local drive that stays synced with the cloud."
        },
        {
          type: "truefalse",
          q: "With Desktop Connector, saving a file in the local folder can update the cloud version automatically.",
          answer: true,
          explain: "Changes sync between the local connected folder and the cloud project."
        },
        {
          type: "mcq",
          q: "Why is Desktop Connector useful for apps that are not cloud-native?",
          choices: ["It lets them open cloud files through a normal file path", "It converts them to PDFs", "It hides the files", "It disables versioning"],
          answer: 0,
          explain: "Desktop apps that expect a file path can reach cloud files through the connected folder."
        },
        {
          type: "match",
          q: "Match each item to its role in the sync workflow.",
          pairs: [
            ["Autodesk Docs", "The cloud common data environment storing files"],
            ["Desktop Connector", "The bridge syncing cloud files to your desktop"],
            ["Local connected folder", "Where synced cloud files appear on your machine"]
          ],
          explain: "Docs holds the files, Desktop Connector syncs them, and they show up in a local folder."
        },
        {
          type: "truefalse",
          q: "Desktop Connector replaces Autodesk Docs and stores the master copy locally.",
          answer: false,
          explain: "The cloud (Autodesk Docs) stays the source of truth; Desktop Connector only syncs a local copy."
        },
        {
          type: "order",
          q: "Order what happens when you edit a cloud file through Desktop Connector.",
          items: ["Open the file from the connected local folder", "Edit and save it in your desktop app", "Desktop Connector uploads the change", "The cloud version updates to a new version"],
          explain: "You work locally, and the connector pushes the saved change up to a new cloud version."
        }
      ]
    },
    {
      id: "l30",
      title: "Live vs Consumed Work",
      intro: "Learn the difference between a teammate's newest work and the version you have chosen to use.",
      questions: [
        {
          type: "mcq",
          q: "What is consumed work in Design Collaboration?",
          choices: ["A published version you have pulled into your space to reference", "Work that was deleted", "A printed sheet", "An unsaved local edit"],
          answer: 0,
          explain: "Consumed work is a specific published package you brought in, giving you a stable reference."
        },
        {
          type: "fill",
          q: "Working from a ____ package means you reference a stable, chosen version rather than every unfinished edit.",
          answer: "consumed",
          accept: ["consumed", "consumed package"],
          explain: "Consuming a package gives you a deliberate, steady version to coordinate against."
        },
        {
          type: "truefalse",
          q: "The latest live work from another team may be newer than the package you have consumed.",
          answer: true,
          explain: "Teams keep working after publishing, so their live model can be ahead of the version you consumed."
        },
        {
          type: "mcq",
          q: "Why might you keep using a consumed version instead of always jumping to the newest work?",
          choices: ["To coordinate against a stable, known state and avoid churn", "Because new work is always broken", "To save disk space only", "To disable clash detection"],
          answer: 0,
          explain: "A stable consumed version keeps your coordination steady until you deliberately update."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Live work", "A team's newest in-progress model"],
            ["Consumed work", "The chosen published version you reference"]
          ],
          explain: "Live is the moving target; consumed is the stable snapshot you decided to use."
        },
        {
          type: "truefalse",
          q: "Once you consume a package you can never update to a newer one.",
          answer: false,
          explain: "You can consume a newer package whenever you are ready to move to the latest shared version."
        },
        {
          type: "order",
          q: "Order how you move from an old reference to the newest shared work.",
          items: ["You are referencing an older consumed package", "The other team publishes a newer package", "You review the newer package", "You consume the newer package"],
          explain: "A newer package appears, you review it, then you deliberately consume it."
        }
      ]
    },
    {
      id: "l31",
      title: "Change Visualization",
      intro: "Discover how the timeline and change tools help you see what teammates modified.",
      questions: [
        {
          type: "mcq",
          q: "What does change visualization in Design Collaboration help you do?",
          choices: ["See what changed between shared versions of a model", "Delete old versions", "Estimate cost", "Send invoices"],
          answer: 0,
          explain: "It highlights differences so you can quickly understand what a team modified between packages."
        },
        {
          type: "truefalse",
          q: "Seeing changes between versions helps you coordinate and catch surprises early.",
          answer: true,
          explain: "Spotting what moved or was added lets you react before it becomes a clash or rework."
        },
        {
          type: "fill",
          q: "The Design Collaboration ____ shows a visual history of shared packages over time.",
          answer: "timeline",
          accept: ["timeline"],
          explain: "The timeline is the visual record you use to trace and compare shared work."
        },
        {
          type: "mcq",
          q: "Comparing a new package to an older one mainly helps you answer which question?",
          choices: ["What did the other team change since last time?", "What is the weather?", "Who owns the license?", "How big is the office?"],
          answer: 0,
          explain: "Change visualization answers what is different between two shared versions."
        },
        {
          type: "match",
          q: "Match each tool or idea to what it reveals.",
          pairs: [
            ["Timeline", "History of what was shared and consumed"],
            ["Change comparison", "Differences between two model versions"]
          ],
          explain: "The timeline gives history; comparison highlights the specific differences."
        },
        {
          type: "truefalse",
          q: "Change visualization is only useful after a project is fully finished.",
          answer: false,
          explain: "It is most valuable during active design so teams catch and coordinate changes as they happen."
        },
        {
          type: "order",
          q: "Order how you use change visualization to review a new package.",
          items: ["A newer package appears on the timeline", "You compare it against the version you had", "You identify what changed", "You decide whether to consume it"],
          explain: "Compare, identify the differences, then decide whether to adopt the new version."
        }
      ]
    },
    {
      id: "l32",
      title: "Remote Teams",
      intro: "See how cloud collaboration lets people in different offices work as one project team.",
      questions: [
        {
          type: "mcq",
          q: "How does cloud collaboration help teams in different cities work together?",
          choices: ["Everyone connects to the same cloud project instead of a shared office server", "They must fly to one office", "They mail hard drives", "They stop using Revit"],
          answer: 0,
          explain: "A shared cloud project removes the need for a common local network, so distributed teams collaborate directly."
        },
        {
          type: "truefalse",
          q: "Cloud worksharing and Design Collaboration reduce the need to email large model files between offices.",
          answer: true,
          explain: "Shared cloud models and packages replace slow, error-prone file emailing."
        },
        {
          type: "fill",
          q: "A shared cloud project acts as a single source of ____ for distributed teams.",
          answer: "truth",
          accept: ["truth"],
          explain: "A controlled cloud environment gives everyone one authoritative place for the current data."
        },
        {
          type: "mcq",
          q: "Which ACC piece stores the shared files that remote teams all work from?",
          choices: ["Autodesk Docs, the common data environment", "A personal USB drive", "A paper binder", "The recycle bin"],
          answer: 0,
          explain: "Autodesk Docs is the cloud CDE that holds the shared project files for everyone."
        },
        {
          type: "match",
          q: "Match each capability to how it supports remote teams.",
          pairs: [
            ["Cloud worksharing", "Co-author one Revit model from any location"],
            ["Design Collaboration", "Share work as packages between remote teams"],
            ["Autodesk Docs", "One cloud home for the project files"]
          ],
          explain: "Together these let scattered teams author, share, and store work in one place."
        },
        {
          type: "truefalse",
          q: "Remote teams must be on the same office LAN to use cloud worksharing.",
          answer: false,
          explain: "The whole point of cloud hosting is that teams do not need a shared local network."
        },
        {
          type: "order",
          q: "Order how two remote offices coordinate on a shared cloud project.",
          items: ["Each office works in the cloud project", "One team publishes a package", "The other office consumes it", "Both compare changes and coordinate"],
          explain: "They work in the same cloud project, share packages, and review changes together."
        }
      ]
    }
  ]
});
