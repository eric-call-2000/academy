window.ACADEMY.addUnit("acc", {
  id: "unit-1",
  title: "What Is Autodesk Construction Cloud?",
  color: "#58cc02",
  icon: "☁️",
  description: "The cloud platform that connects design and construction data.",
  lessons: [
    {
      id: "l1",
      title: "The Cloud Platform",
      intro: "Autodesk Construction Cloud, or ACC, keeps design and construction data together in one online place.",
      questions: [
        {
          type: "mcq",
          q: "What does ACC stand for?",
          choices: ["Autodesk Construction Cloud", "Advanced CAD Console", "Autodesk Contractor Center", "Automated Clash Checker"],
          answer: 0,
          explain: "ACC is short for Autodesk Construction Cloud, Autodesk's platform for construction projects."
        },
        {
          type: "truefalse",
          q: "ACC is a cloud platform, so your project data lives online rather than only on one computer.",
          answer: true,
          explain: "Because it is cloud based, the data is hosted online and reachable from many places."
        },
        {
          type: "mcq",
          q: "What is the main goal of ACC?",
          choices: ["Connect design and construction data in one place", "Replace all your email", "Print paper drawings faster", "Manage your payroll"],
          answer: 0,
          explain: "ACC's purpose is to bring design and construction information together on one connected platform."
        },
        {
          type: "fill",
          q: "ACC connects design and construction ____ in one place.",
          answer: "data",
          accept: ["data", "information"],
          explain: "The whole idea is keeping project data connected instead of scattered."
        },
        {
          type: "truefalse",
          q: "ACC is made by Autodesk.",
          answer: true,
          explain: "Autodesk builds and hosts ACC, alongside tools like Revit and AutoCAD."
        },
        {
          type: "mcq",
          q: "Which best describes the value of putting everyone's data in one place?",
          choices: ["Teams work from the same information", "Everyone must use paper", "Files can never change", "Only one person can log in"],
          answer: 0,
          explain: "A shared home for data means the whole team works from the same, current information."
        },
        {
          type: "match",
          q: "Match each phrase to what it means.",
          pairs: [
            ["Cloud", "Hosted online, not just on one PC"],
            ["Platform", "A shared base that many tools plug into"]
          ],
          explain: "ACC is a cloud platform: an online base that different construction tools share."
        }
      ]
    },
    {
      id: "l2",
      title: "ACC and Autodesk Forma",
      intro: "Autodesk rebranded the ACC website as Autodesk Forma, so the two names point to the same platform.",
      questions: [
        {
          type: "truefalse",
          q: "Autodesk rebranded the ACC site (acc.autodesk.com) as Autodesk Forma.",
          answer: true,
          explain: "The site was renamed to Autodesk Forma, but it is the same platform you knew as ACC."
        },
        {
          type: "mcq",
          q: "If a coworker says Forma and you say ACC, you are talking about...",
          choices: ["The same platform", "Two competing products", "Two different companies", "Nothing in common"],
          answer: 0,
          explain: "ACC and Autodesk Forma are interchangeable names for the same platform."
        },
        {
          type: "truefalse",
          q: "Autodesk Forma is only an early conceptual design tool and cannot handle real construction data.",
          answer: false,
          explain: "That is a common mix-up. As the rebrand of ACC, Forma covers full design and construction work, not just early concepts."
        },
        {
          type: "fill",
          q: "The web address acc.autodesk.com is now branded as Autodesk ____.",
          answer: "forma",
          accept: ["forma"],
          explain: "The ACC site is presented under the Autodesk Forma name after the rebrand."
        },
        {
          type: "mcq",
          q: "Why is it useful to know both names?",
          choices: ["Documents and coworkers may use either name", "They are unrelated tools", "One is free and one is paid", "Forma deletes your data"],
          answer: 0,
          explain: "Knowing they mean the same thing avoids confusion when older docs say ACC and newer ones say Forma."
        },
        {
          type: "match",
          q: "Match the name to a true statement.",
          pairs: [
            ["ACC", "The original name of the platform"],
            ["Autodesk Forma", "The rebranded name of the same platform"]
          ],
          explain: "Both names describe one platform; only the branding changed."
        },
        {
          type: "truefalse",
          q: "Your projects and data change completely just because the name changed to Forma.",
          answer: false,
          explain: "A rebrand is a name change; the same platform and your data carry over."
        }
      ]
    },
    {
      id: "l3",
      title: "One Unified Platform",
      intro: "One login and one shared set of data flow across all the ACC tools you use.",
      questions: [
        {
          type: "truefalse",
          q: "With ACC you generally use one login to reach the different tools.",
          answer: true,
          explain: "A unified platform means a single sign-in gives you access across the modules."
        },
        {
          type: "mcq",
          q: "What does it mean that ACC is 'unified'?",
          choices: ["The tools share one platform and dataset", "Each tool has a separate password and file store", "It only works offline", "You must reinstall it daily"],
          answer: 0,
          explain: "Unified means the modules sit on one platform and work from the same shared data."
        },
        {
          type: "fill",
          q: "A unified platform means you sign in once and share the same ____ across tools.",
          answer: "data",
          accept: ["data", "information"],
          explain: "Shared data is the point: what one module sees, the others can use too."
        },
        {
          type: "truefalse",
          q: "In a unified platform, each module keeps its own separate copy of the files that never talk to each other.",
          answer: false,
          explain: "The opposite is true. Modules share the same data so information stays consistent."
        },
        {
          type: "mcq",
          q: "A benefit of one shared dataset is that...",
          choices: ["Everyone sees consistent, current information", "Files disappear at night", "Only admins can read anything", "Each tool needs its own upload"],
          answer: 0,
          explain: "Sharing one dataset keeps information consistent and up to date for everyone."
        },
        {
          type: "match",
          q: "Match the idea to its meaning.",
          pairs: [
            ["Single sign-in", "Log in once to reach the tools"],
            ["Shared dataset", "Modules work from the same data"]
          ],
          explain: "One login plus one dataset is what makes ACC feel like a single platform."
        },
        {
          type: "order",
          q: "Order the simple flow of using a unified platform.",
          items: ["Sign in once", "Open a module", "Work on the shared data", "Other modules see your update"],
          explain: "Because data is shared, an update in one place shows up for the others."
        }
      ]
    },
    {
      id: "l4",
      title: "The Modules",
      intro: "ACC is built from modules like Autodesk Docs, Autodesk Build, BIM Collaborate, and Autodesk Takeoff.",
      questions: [
        {
          type: "match",
          q: "Match each ACC module to what it mainly does.",
          pairs: [
            ["Autodesk Docs", "Stores files with permissions and versions"],
            ["Autodesk Build", "Field and project management like RFIs and issues"],
            ["Autodesk Takeoff", "2D and 3D quantity takeoff"],
            ["BIM Collaborate", "Design collaboration and model coordination"]
          ],
          explain: "Docs is the file home, Build runs the field, Takeoff measures quantities, and BIM Collaborate connects design teams."
        },
        {
          type: "mcq",
          q: "Which module is the common data environment for files, folders, and versions?",
          choices: ["Autodesk Docs", "Autodesk Takeoff", "Autodesk Build", "Insight"],
          answer: 0,
          explain: "Autodesk Docs is the CDE: it stores files with folders, permissions, reviews, and automatic versioning."
        },
        {
          type: "mcq",
          q: "Where would you manage RFIs, submittals, and site issues?",
          choices: ["Autodesk Build", "Autodesk Takeoff", "Autodesk Docs", "Desktop Connector"],
          answer: 0,
          explain: "Autodesk Build handles field and project management, including RFIs, submittals, forms, photos, and issues."
        },
        {
          type: "mcq",
          q: "Which module handles 2D and 3D quantity takeoff?",
          choices: ["Autodesk Takeoff", "BIM Collaborate", "Autodesk Docs", "Autodesk Build"],
          answer: 0,
          explain: "Autodesk Takeoff measures quantities from 2D sheets and 3D models."
        },
        {
          type: "truefalse",
          q: "BIM Collaborate and BIM Collaborate Pro support design collaboration, and Pro adds Revit cloud worksharing.",
          answer: true,
          explain: "BIM Collaborate covers Design Collaboration and Model Coordination; the Pro tier also enables Revit cloud worksharing."
        },
        {
          type: "fill",
          q: "Autodesk ____ is the file storage and common data environment module.",
          answer: "docs",
          accept: ["docs"],
          explain: "Autodesk Docs is the CDE that the other modules build on."
        },
        {
          type: "truefalse",
          q: "Insight in ACC is used for analytics and dashboards.",
          answer: true,
          explain: "Insight provides analytics and dashboards to help teams see project trends."
        }
      ]
    },
    {
      id: "l5",
      title: "Projects & Accounts",
      intro: "In ACC a company sets up an account, and each job is organized as a project inside it.",
      questions: [
        {
          type: "match",
          q: "Match each level to what it organizes.",
          pairs: [
            ["Account", "The company-wide container"],
            ["Project", "A single job with its own team and data"]
          ],
          explain: "A company account holds many projects; each project is one job."
        },
        {
          type: "mcq",
          q: "Who manages members, roles, and settings for the whole company?",
          choices: ["Account Admin", "Project Admin", "Every guest", "No one"],
          answer: 0,
          explain: "Account Admin handles company-wide members, roles, and settings."
        },
        {
          type: "mcq",
          q: "Who manages members and settings for a single job?",
          choices: ["Project Admin", "Account Admin", "The general public", "Autodesk support"],
          answer: 0,
          explain: "Project Admin controls the members, roles, and settings within one project."
        },
        {
          type: "truefalse",
          q: "One account can hold many projects.",
          answer: true,
          explain: "A company's account is the container for all of its projects."
        },
        {
          type: "fill",
          q: "Each individual job in ACC is set up as a ____.",
          answer: "project",
          accept: ["project"],
          explain: "Work is organized job by job, and each job is a project."
        },
        {
          type: "truefalse",
          q: "A Project Admin automatically controls settings for every project in the company.",
          answer: false,
          explain: "Project Admin power is limited to that project; company-wide control belongs to Account Admin."
        },
        {
          type: "order",
          q: "Order these from broadest to most specific.",
          items: ["Account", "Project", "Project member"],
          explain: "The account contains projects, and each project contains its members."
        }
      ]
    },
    {
      id: "l6",
      title: "Who Uses It",
      intro: "Designers, general contractors, subcontractors, and owners all share the same platform.",
      questions: [
        {
          type: "truefalse",
          q: "ACC is meant for many roles to work together, not just one company.",
          answer: true,
          explain: "Designers, contractors, subs, and owners can collaborate on the same project data."
        },
        {
          type: "match",
          q: "Match each role to a typical focus on a project.",
          pairs: [
            ["Designer", "Creates the models and drawings"],
            ["General contractor", "Coordinates the build in the field"],
            ["Owner", "Wants status and a lasting record"]
          ],
          explain: "Different roles need different views, and ACC lets them share one source of data."
        },
        {
          type: "mcq",
          q: "Why is it helpful for subs and the GC to share one platform?",
          choices: ["Everyone works from the same current information", "Only the GC can see anything", "It hides all the drawings", "It removes the need to communicate"],
          answer: 0,
          explain: "A shared platform keeps every trade aligned on the latest information."
        },
        {
          type: "fill",
          q: "A ____ typically wants project status and a lasting record of the build.",
          answer: "owner",
          accept: ["owner"],
          explain: "Owners care about progress and about the record they inherit at the end."
        },
        {
          type: "truefalse",
          q: "Only the design team is ever allowed to log in to an ACC project.",
          answer: false,
          explain: "Many roles use ACC together; permissions decide what each one can see and do."
        },
        {
          type: "mcq",
          q: "Permissions in ACC mainly decide...",
          choices: ["What each person can see and do", "The color of the logo", "The weather on site", "How fast files download"],
          answer: 0,
          explain: "Permissions control access so each role sees the right information."
        },
        {
          type: "order",
          q: "Order how roles typically join a project.",
          items: ["Owner starts the project", "Designer builds the models", "General contractor plans the build", "Subcontractors do the trade work"],
          explain: "Many roles work in sequence and together on one shared platform."
        }
      ]
    },
    {
      id: "l7",
      title: "Web, Desktop & Mobile",
      intro: "You can reach ACC from a web browser, from the desktop, and from a phone or tablet in the field.",
      questions: [
        {
          type: "match",
          q: "Match each access method to a typical use.",
          pairs: [
            ["Web browser", "Open the project from any office computer"],
            ["Mobile app", "Check sheets and log issues on site"],
            ["Desktop Connector", "Sync cloud files to your desktop folders"]
          ],
          explain: "Web is the main door, mobile is for the field, and Desktop Connector links cloud files to your PC."
        },
        {
          type: "mcq",
          q: "What does Desktop Connector do?",
          choices: ["Syncs cloud files to the desktop", "Prints your drawings", "Sends text messages", "Runs clash detection"],
          answer: 0,
          explain: "Desktop Connector makes ACC cloud files appear and sync in your desktop file system."
        },
        {
          type: "truefalse",
          q: "A worker in the field can use the mobile app to view sheets and log issues.",
          answer: true,
          explain: "The mobile app brings the current project data to phones and tablets on the jobsite."
        },
        {
          type: "fill",
          q: "You can open an ACC project in a web ____ from almost any computer.",
          answer: "browser",
          accept: ["browser"],
          explain: "The web browser is the main way most people reach the platform."
        },
        {
          type: "truefalse",
          q: "ACC can only be opened from a single office computer.",
          answer: false,
          explain: "It is reachable from web, desktop, and mobile, so the field and office stay connected."
        },
        {
          type: "mcq",
          q: "Why does mobile access matter on a construction project?",
          choices: ["The field can see current info without going back to the trailer", "It replaces all the workers", "It stops the internet", "It hides the drawings from subs"],
          answer: 0,
          explain: "Mobile access puts the latest sheets and issues in the hands of people on site."
        },
        {
          type: "order",
          q: "Order a simple field-to-office flow.",
          items: ["Open the mobile app on site", "Log an issue with a photo", "The issue syncs to the cloud", "The office sees it in the browser"],
          explain: "Because everything is one dataset, a field entry shows up for the office right away."
        }
      ]
    },
    {
      id: "l8",
      title: "Why a CDE Matters",
      intro: "A common data environment gives a project one trusted source of truth for its information.",
      questions: [
        {
          type: "mcq",
          q: "What does CDE stand for?",
          choices: ["Common Data Environment", "Central Design Engine", "Cloud Document Editor", "Construction Data Export"],
          answer: 0,
          explain: "CDE means Common Data Environment: one controlled home for a project's data."
        },
        {
          type: "truefalse",
          q: "A CDE is meant to be a single source of truth for the project.",
          answer: true,
          explain: "The point of a CDE is one trusted place everyone relies on for current information."
        },
        {
          type: "fill",
          q: "In Autodesk Docs, uploading a new file version keeps the old ones through automatic ____.",
          answer: "versioning",
          accept: ["versioning", "version control", "versions"],
          explain: "Automatic versioning keeps a history so you can trace what changed and when."
        },
        {
          type: "match",
          q: "Match each CDE benefit to why it helps.",
          pairs: [
            ["Single source of truth", "Everyone uses the same current files"],
            ["Automatic versioning", "You can see and recover past versions"],
            ["Permissions", "The right people see the right data"]
          ],
          explain: "Together these keep a project organized, traceable, and trustworthy."
        },
        {
          type: "truefalse",
          q: "The idea of a controlled single source of truth aligns with the ISO 19650 standard.",
          answer: true,
          explain: "ISO 19650 describes managing information through a controlled CDE, which is exactly what Autodesk Docs supports."
        },
        {
          type: "mcq",
          q: "What is a risk of NOT having a CDE?",
          choices: ["People work from different, outdated files", "Files version themselves too often", "Everyone is forced to agree", "The project ends early"],
          answer: 0,
          explain: "Without a shared source of truth, teams drift onto old or conflicting copies."
        },
        {
          type: "order",
          q: "Order the simple document flow in a CDE.",
          items: ["Upload a file to Autodesk Docs", "Set folder permissions", "Team reviews the file", "A new version is saved on the next upload"],
          explain: "A CDE controls who sees files, supports review, and versions each update automatically."
        }
      ]
    }
  ]
});
