window.ACADEMY.addUnit("acc", {
  id: "unit-2",
  title: "Autodesk Docs & the CDE",
  color: "#1cb0f6",
  icon: "📁",
  description: "The common data environment at the core of ACC.",
  lessons: [
    {
      id: "l9",
      title: "Autodesk Docs",
      intro: "Autodesk Docs is the common data environment where all project files live in the cloud.",
      questions: [
        {
          type: "mcq",
          q: "What is Autodesk Docs in ACC?",
          choices: ["The common data environment for project files", "A clash detection tool", "A cost estimating tool", "A scheduling tool"],
          answer: 0,
          explain: "Autodesk Docs is the CDE where project files are stored, shared, and controlled."
        },
        {
          type: "fill",
          q: "The letters CDE stand for common data ____.",
          answer: "environment",
          accept: ["environment"],
          explain: "A CDE is a common data environment: one trusted place for project information."
        },
        {
          type: "truefalse",
          q: "Autodesk Docs stores files in the cloud rather than on one person's computer.",
          answer: true,
          explain: "Docs is cloud-based, so the whole team reaches the same files from anywhere."
        },
        {
          type: "mcq",
          q: "Why is a single CDE useful on a project?",
          choices: ["Everyone works from one trusted source of files", "It replaces the need for a design team", "It deletes old projects automatically", "It writes the contract for you"],
          answer: 0,
          explain: "A CDE gives the team one shared, trusted source instead of scattered copies."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Autodesk Docs", "The CDE for project files"], ["Cloud", "Files reachable from anywhere"], ["Single source", "One trusted set of files"]],
          explain: "Docs is the cloud-hosted CDE that acts as the single source of project files."
        },
        {
          type: "truefalse",
          q: "Autodesk Docs is only for Revit models and cannot hold PDFs.",
          answer: false,
          explain: "Docs holds many file types including PDFs, drawings, models, and documents."
        },
        {
          type: "mcq",
          q: "Which is NOT a job of Autodesk Docs?",
          choices: ["Automatic clash detection on models", "Storing files", "Managing folders", "Controlling access"],
          answer: 0,
          explain: "Clash detection is Model Coordination's job; Docs handles storage, folders, and access."
        }
      ]
    },
    {
      id: "l10",
      title: "Folders & Structure",
      intro: "A clear folder structure keeps thousands of project files easy to find.",
      questions: [
        {
          type: "mcq",
          q: "Why does a project need a clear folder structure?",
          choices: ["So people can find files quickly and consistently", "So files upload faster", "To reduce the price of software", "To hide files from the team"],
          answer: 0,
          explain: "A logical structure makes files predictable to find and reduces mistakes."
        },
        {
          type: "truefalse",
          q: "Folders in Autodesk Docs can be nested inside other folders.",
          answer: true,
          explain: "You can create subfolders to organize files by discipline, phase, or type."
        },
        {
          type: "fill",
          q: "A folder placed inside another folder is called a ____.",
          answer: "subfolder",
          accept: ["subfolder", "sub-folder", "child folder"],
          explain: "A subfolder sits inside a parent folder to break work into smaller groups."
        },
        {
          type: "order",
          q: "Order these from broadest to most specific in a typical structure.",
          items: ["Project", "Discipline folder", "Individual file"],
          explain: "You move from the whole project, down to a discipline, down to one file."
        },
        {
          type: "match",
          q: "Match each folder idea to what it groups.",
          pairs: [["Discipline folder", "Files by trade like structural"], ["Phase folder", "Files by project stage"], ["Shared folder", "Files ready for others"]],
          explain: "Folders can be organized by discipline, by phase, or by sharing status."
        },
        {
          type: "truefalse",
          q: "A messy, inconsistent folder structure has no downside on a big project.",
          answer: false,
          explain: "Poor structure wastes time and leads to lost files and wrong versions being used."
        },
        {
          type: "mcq",
          q: "Who typically sets up the project folder structure?",
          choices: ["A project admin at the start of the project", "Every team member independently", "The clash detection engine", "The web viewer"],
          answer: 0,
          explain: "A project admin usually defines a standard folder layout up front for consistency."
        }
      ]
    },
    {
      id: "l11",
      title: "Permissions",
      intro: "Permissions control who can view, edit, or manage each folder and file.",
      questions: [
        {
          type: "mcq",
          q: "What do permissions in Autodesk Docs control?",
          choices: ["Who can see and edit files", "How fast files download", "The color of the interface", "The clash tolerance"],
          answer: 0,
          explain: "Permissions decide who can view, edit, upload, or manage content."
        },
        {
          type: "order",
          q: "Order these permission levels from least to most access.",
          items: ["View only", "View and download", "Edit", "Manage"],
          explain: "Access grows from viewing, to downloading, to editing, to full folder control."
        },
        {
          type: "truefalse",
          q: "Permissions can be set at the folder level in Autodesk Docs.",
          answer: true,
          explain: "You assign permissions per folder, and subfolders can inherit them."
        },
        {
          type: "fill",
          q: "The highest permission level, which can control a folder and its settings, is called ____.",
          answer: "manage",
          accept: ["manage", "manager", "control"],
          explain: "The highest folder permission (called Manage, and labeled Control in current ACC) lets a user control a folder, its members, and its permissions."
        },
        {
          type: "match",
          q: "Match each permission level to what it allows.",
          pairs: [["View only", "See files but not change them"], ["Edit", "Upload and change files"], ["Manage", "Control the folder and access"]],
          explain: "Each level grants more control, from viewing up to managing the folder."
        },
        {
          type: "truefalse",
          q: "Giving everyone full manage access to every folder is a safe default.",
          answer: false,
          explain: "Least-privilege is safer: give each person only the access they need."
        },
        {
          type: "mcq",
          q: "Permissions can be assigned to which of these?",
          choices: ["Individuals, roles, and companies", "Only the account owner", "Only external guests", "Only Revit files"],
          answer: 0,
          explain: "You can grant access to individual users, to roles, or to companies on the project."
        }
      ]
    },
    {
      id: "l12",
      title: "Version Control",
      intro: "Autodesk Docs keeps a new version every time a file is uploaded, so nothing is lost.",
      questions: [
        {
          type: "truefalse",
          q: "Uploading a new copy of an existing file creates a new version in Docs.",
          answer: true,
          explain: "Docs versions files automatically, keeping the history instead of overwriting."
        },
        {
          type: "mcq",
          q: "What happens to the old version when you upload a newer one?",
          choices: ["It is kept in the version history", "It is deleted permanently", "It is emailed to everyone", "It is moved off the cloud"],
          answer: 0,
          explain: "Older versions stay in the history, so you can review or roll back."
        },
        {
          type: "fill",
          q: "The list of all past versions of a file is called its version ____.",
          answer: "history",
          accept: ["history"],
          explain: "The version history shows every uploaded version in order over time."
        },
        {
          type: "order",
          q: "Order these versions of a file from oldest to newest.",
          items: ["V1", "V2", "V3"],
          explain: "Each upload increments the version number, so V3 is the most recent."
        },
        {
          type: "truefalse",
          q: "Automatic versioning means the file name must change with every upload.",
          answer: false,
          explain: "You keep the same file name; Docs tracks versions behind the scenes."
        },
        {
          type: "mcq",
          q: "Why is automatic version control valuable?",
          choices: ["You can see history and roll back if needed", "It doubles your storage cost", "It prevents anyone from uploading", "It hides who made changes"],
          answer: 0,
          explain: "Version control preserves history and lets you return to an earlier version safely."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Version", "A saved state of a file"], ["Current version", "The latest uploaded copy"], ["Roll back", "Return to an older version"]],
          explain: "Versioning saves each state so the current one is newest and older ones remain."
        }
      ]
    },
    {
      id: "l13",
      title: "The ISO 19650 CDE",
      intro: "ISO 19650 describes a CDE with controlled states that create a single source of truth.",
      questions: [
        {
          type: "mcq",
          q: "What does ISO 19650 describe for managing project information?",
          choices: ["A common data environment with controlled states", "A brand of laptop", "A clash detection formula", "A paint color standard"],
          answer: 0,
          explain: "ISO 19650 is a standard for information management using a controlled CDE."
        },
        {
          type: "fill",
          q: "A CDE aims to be the single source of ____ for the project.",
          answer: "truth",
          accept: ["truth"],
          explain: "A single source of truth means one trusted, current set of information."
        },
        {
          type: "order",
          q: "Order these ISO 19650 information states in a typical flow.",
          items: ["Work in progress", "Shared", "Published", "Archived"],
          explain: "Information moves from work in progress, to shared, to published, then archived."
        },
        {
          type: "match",
          q: "Match each ISO 19650 state to its meaning.",
          pairs: [["Work in progress", "Not yet shared with others"], ["Shared", "Checked and shared for coordination"], ["Published", "Approved for use or issue"]],
          explain: "The states control how ready and trusted a piece of information is."
        },
        {
          type: "truefalse",
          q: "ISO 19650 promotes controlling information rather than sharing everything raw.",
          answer: true,
          explain: "Controlled states ensure only checked, appropriate information is shared and used."
        },
        {
          type: "truefalse",
          q: "A single source of truth means every person keeps a private copy of the files.",
          answer: false,
          explain: "It means one shared, controlled set that everyone relies on, not private copies."
        },
        {
          type: "mcq",
          q: "How does Autodesk Docs support ISO 19650?",
          choices: ["It provides a controlled CDE with folders, permissions, and versions", "It writes the standard for you", "It replaces the whole design team", "It bans file sharing"],
          answer: 0,
          explain: "Docs gives the controlled environment the standard calls for through its core features."
        }
      ]
    },
    {
      id: "l14",
      title: "Viewing Files",
      intro: "The web viewer opens models, drawings, and documents in a browser with no extra software.",
      questions: [
        {
          type: "mcq",
          q: "What does the Autodesk Docs web viewer let you do?",
          choices: ["Open files in a browser without special software", "Run payroll", "Compile source code", "Order materials"],
          answer: 0,
          explain: "The viewer opens models, sheets, and documents right in the browser."
        },
        {
          type: "truefalse",
          q: "You can view a Revit or IFC model in the web viewer without opening Revit.",
          answer: true,
          explain: "The viewer renders models in the browser, so you do not need the authoring app."
        },
        {
          type: "fill",
          q: "The tool that opens files right in your browser is the web ____.",
          answer: "viewer",
          accept: ["viewer"],
          explain: "The web viewer displays 2D and 3D content without installed software."
        },
        {
          type: "match",
          q: "Match each file type to how the viewer shows it.",
          pairs: [["3D model", "A rotatable model in 3D"], ["Drawing sheet", "A 2D sheet you can zoom"], ["Document", "A readable page view"]],
          explain: "The viewer handles 3D models, 2D sheets, and documents in one browser tool."
        },
        {
          type: "mcq",
          q: "Which of these can you typically do in the viewer?",
          choices: ["Measure, markup, and add issues", "Change the project price", "Delete other users", "Reinstall the operating system"],
          answer: 0,
          explain: "The viewer supports measuring, markups, and creating issues on the content."
        },
        {
          type: "truefalse",
          q: "You must download every file before you can look at it.",
          answer: false,
          explain: "The viewer lets you review files online without downloading them first."
        },
        {
          type: "order",
          q: "Order these steps to review a drawing in the viewer.",
          items: ["Open the folder", "Select the file", "View it in the browser", "Add a markup"],
          explain: "You navigate to the file, open it in the viewer, then review and mark it up."
        }
      ]
    },
    {
      id: "l15",
      title: "Managing Sheets",
      intro: "The Sheets area organizes the drawing set so the team always finds the current drawings.",
      questions: [
        {
          type: "mcq",
          q: "What does the Sheets area in Autodesk Docs help you manage?",
          choices: ["The project drawing set", "The project budget", "Staff payroll", "Email inboxes"],
          answer: 0,
          explain: "Sheets organizes drawings so the team can find the right current sheet."
        },
        {
          type: "truefalse",
          q: "When you publish a newer version of a sheet, the older version is kept in its history.",
          answer: true,
          explain: "Sheets keep version history, so superseded drawings remain available to review."
        },
        {
          type: "fill",
          q: "A published sheet set is often grouped by a version or ____ set.",
          answer: "issue",
          accept: ["issue", "revision"],
          explain: "Sheets are commonly grouped by version or issue set so it is clear what was released."
        },
        {
          type: "match",
          q: "Match each sheet term to its meaning.",
          pairs: [["Sheet", "A single drawing page"], ["Version set", "Sheets published together"], ["Current sheet", "The latest published drawing"]],
          explain: "Sheets are individual drawings, grouped into version sets, with a current version each."
        },
        {
          type: "mcq",
          q: "Why does organizing sheets matter on site?",
          choices: ["The field team must build from the current drawing", "It changes the weather", "It lowers material weight", "It picks the paint color"],
          answer: 0,
          explain: "Building from an outdated sheet causes rework, so the current version must be clear."
        },
        {
          type: "truefalse",
          q: "Sheets can be extracted from uploaded PDF or model files.",
          answer: true,
          explain: "Docs can pull individual sheets from a multi-page PDF or a published model."
        },
        {
          type: "order",
          q: "Order these steps for getting drawings into Sheets.",
          items: ["Upload the drawing file", "Extract the sheets", "Review the set", "Publish to the team"],
          explain: "You upload, extract sheets, review them, then publish for the team to use."
        }
      ]
    },
    {
      id: "l16",
      title: "Transmittals",
      intro: "A transmittal packages a set of files and formally issues them with a record of what was sent.",
      questions: [
        {
          type: "mcq",
          q: "What is a transmittal in Autodesk Docs?",
          choices: ["A formal package of issued files with a record", "A clash report", "A cost estimate", "A staffing plan"],
          answer: 0,
          explain: "A transmittal bundles files and formally issues them, keeping a record of the exchange."
        },
        {
          type: "truefalse",
          q: "A transmittal keeps a record of what files were sent and to whom.",
          answer: true,
          explain: "Transmittals create an auditable record of the package, recipients, and time."
        },
        {
          type: "fill",
          q: "Formally issuing a package of files is done with a ____.",
          answer: "transmittal",
          accept: ["transmittal"],
          explain: "A transmittal is the formal method for issuing a defined set of files."
        },
        {
          type: "match",
          q: "Match each transmittal part to its purpose.",
          pairs: [["Package", "The set of files being sent"], ["Recipients", "Who receives the files"], ["Record", "Proof of what was issued"]],
          explain: "A transmittal ties together the files, the recipients, and a lasting record."
        },
        {
          type: "order",
          q: "Order these steps to send a transmittal.",
          items: ["Select the files", "Choose recipients", "Add a message", "Issue the transmittal"],
          explain: "You gather files, pick recipients, add context, then issue the package."
        },
        {
          type: "truefalse",
          q: "A transmittal is just an informal chat message with no record.",
          answer: false,
          explain: "A transmittal is a formal, recorded issue of files, not a casual message."
        },
        {
          type: "mcq",
          q: "Why are transmittals useful on a project?",
          choices: ["They prove what was formally issued and when", "They render 3D models faster", "They set the project budget", "They replace permissions"],
          answer: 0,
          explain: "Transmittals provide accountability by recording exactly what was issued and when."
        }
      ]
    }
  ]
});
