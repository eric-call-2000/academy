window.ACADEMY.addUnit("acc", {
  id: "unit-8",
  title: "Insight, Admin & the Ecosystem",
  color: "#f25f9c",
  icon: "⚙️",
  description: "Analytics, administration, and how it all ties together.",
  lessons: [
    {
      id: "l57",
      title: "Insight & Dashboards",
      intro: "Insight turns your project data into charts and dashboards so the team can see how work is going.",
      questions: [
        {
          type: "mcq",
          q: "What does Insight give you in ACC?",
          choices: ["Analytics and dashboards from project data", "A place to store PDF files", "A clash detection engine", "A tool to draw floor plans"],
          answer: 0,
          explain: "Insight collects data from across the project and shows it as analytics and dashboards."
        },
        {
          type: "truefalse",
          q: "A dashboard is a visual summary made of cards and charts.",
          answer: true,
          explain: "Dashboards use cards and charts to summarize data at a glance, so you do not have to read raw lists."
        },
        {
          type: "mcq",
          q: "Why do teams look at dashboards instead of raw data lists?",
          choices: ["Charts reveal trends and problems faster", "Dashboards delete old files", "Charts replace the need for models", "Dashboards send emails automatically"],
          answer: 0,
          explain: "A good chart shows a trend or a problem area far faster than scrolling a long list of records."
        },
        {
          type: "fill",
          q: "Insight is the ACC area focused on analytics and ____ that report on project health.",
          answer: "dashboards",
          accept: ["dashboards", "dashboard"],
          explain: "Insight is where analytics live and where dashboards are built to report on project health."
        },
        {
          type: "match",
          q: "Match each item to what it does.",
          pairs: [
            ["Dashboard", "Visual summary of many data points"],
            ["Card", "A single tile showing one metric or chart"],
            ["Insight", "The analytics area of ACC"]
          ],
          explain: "Insight is the area, a dashboard is a summary view, and a card is one tile inside that view."
        },
        {
          type: "truefalse",
          q: "Dashboards can pull data from more than one ACC module at once.",
          answer: true,
          explain: "A project dashboard can combine data from issues, RFIs, submittals, and more into one view."
        },
        {
          type: "mcq",
          q: "Which is a good use of a dashboard on a job?",
          choices: ["Tracking open issues by status over time", "Rendering a photorealistic image", "Editing a Revit family", "Signing a legal contract"],
          answer: 0,
          explain: "Tracking counts and trends, like open issues over time, is exactly what dashboards are for."
        }
      ]
    },
    {
      id: "l58",
      title: "Account Admin",
      intro: "Account Admin is where a company manages settings that apply across all of its ACC projects.",
      questions: [
        {
          type: "mcq",
          q: "What does Account Admin control?",
          choices: ["Company-wide settings across all projects", "Only a single project's folders", "The clash results of one model", "A user's personal phone contacts"],
          answer: 0,
          explain: "Account Admin operates at the company level and its settings can apply across every project."
        },
        {
          type: "truefalse",
          q: "Account Admin sits above individual projects in the ACC hierarchy.",
          answer: true,
          explain: "The account is the top level, and projects live underneath it, so account settings can reach all of them."
        },
        {
          type: "fill",
          q: "The ____ Admin area manages members, roles, and settings for the whole company.",
          answer: "account",
          accept: ["account"],
          explain: "Account Admin is the company-level control center for members, roles, and shared settings."
        },
        {
          type: "match",
          q: "Match the admin level to its scope.",
          pairs: [
            ["Account Admin", "The whole company"],
            ["Project Admin", "One project"]
          ],
          explain: "Account Admin is company-wide, while Project Admin is scoped to a single project."
        },
        {
          type: "mcq",
          q: "Which task belongs in Account Admin?",
          choices: ["Managing the full list of company members", "Answering an RFI on one job", "Running a takeoff on a sheet", "Placing a photo in a report"],
          answer: 0,
          explain: "The master member directory for the company is an account-level responsibility."
        },
        {
          type: "truefalse",
          q: "Anyone with a login is automatically an Account Admin.",
          answer: false,
          explain: "Account Admin is a specific elevated role, granted deliberately, not given to every user."
        },
        {
          type: "mcq",
          q: "Why keep company-wide settings in one Account Admin area?",
          choices: ["So standards stay consistent across every project", "So files load faster", "So models render in color", "So RFIs close themselves"],
          answer: 0,
          explain: "Centralizing settings keeps naming, roles, and standards consistent from project to project."
        }
      ]
    },
    {
      id: "l59",
      title: "Members & Roles",
      intro: "Adding people and setting the right access level keeps data secure and gives everyone what they need.",
      questions: [
        {
          type: "mcq",
          q: "What is the main purpose of assigning roles to members?",
          choices: ["To control what each person can see and do", "To change the file format", "To speed up the internet", "To pick the model color"],
          answer: 0,
          explain: "Roles map to permissions, which decide what each member can view, edit, or manage."
        },
        {
          type: "truefalse",
          q: "Giving every user full admin rights is a safe default.",
          answer: false,
          explain: "Least privilege is safer; give people only the access their job needs to reduce mistakes and risk."
        },
        {
          type: "fill",
          q: "A person's ____ determines the permissions they get on a project.",
          answer: "role",
          accept: ["role"],
          explain: "The role assigned to a member controls their level of access and permissions."
        },
        {
          type: "order",
          q: "Put the steps to give someone project access in order.",
          items: ["Invite the person to the account or project", "Assign them a role", "Set their permissions on folders or modules", "They log in and start working"],
          explain: "You invite the person, assign a role, tune their permissions, and then they can work."
        },
        {
          type: "match",
          q: "Match each access level to what it usually allows.",
          pairs: [
            ["View", "Open and read, but not change"],
            ["Edit", "Open and make changes"],
            ["Manage", "Change content plus control others' access"]
          ],
          explain: "View is read-only, Edit allows changes, and Manage adds control over permissions."
        },
        {
          type: "truefalse",
          q: "You can invite people to a project by email address.",
          answer: true,
          explain: "Members are typically invited by email, which ties their access to their identity."
        },
        {
          type: "mcq",
          q: "Which principle keeps access safe?",
          choices: ["Least privilege, give only what is needed", "Give everyone everything", "Share one login for the whole team", "Turn off all permissions"],
          answer: 0,
          explain: "Least privilege limits risk by granting each member only the access their work requires."
        }
      ]
    },
    {
      id: "l60",
      title: "Project Admin",
      intro: "Project Admin is where you turn on modules and configure the settings for a single project.",
      questions: [
        {
          type: "mcq",
          q: "What does Project Admin let you do?",
          choices: ["Configure one project's modules and settings", "Manage the whole company account", "Author a Revit model", "Run a rendering farm"],
          answer: 0,
          explain: "Project Admin is scoped to a single project, where you enable modules and set them up."
        },
        {
          type: "truefalse",
          q: "You can activate or deactivate modules for a project in Project Admin.",
          answer: true,
          explain: "Project Admin controls which modules, like RFIs or submittals, are turned on for that job."
        },
        {
          type: "fill",
          q: "____ Admin configures the modules and settings for a single job.",
          answer: "project",
          accept: ["project"],
          explain: "Project Admin is the per-project control area, separate from the company-wide Account Admin."
        },
        {
          type: "match",
          q: "Match each Project Admin task to what it affects.",
          pairs: [
            ["Activate a module", "Turns a feature on for this project"],
            ["Add a member", "Grants a person access to this project"],
            ["Set a role", "Defines what that member can do here"]
          ],
          explain: "Project Admin handles modules, members, and roles at the level of one project."
        },
        {
          type: "mcq",
          q: "Which setting is a Project Admin job, not an Account Admin job?",
          choices: ["Turning on the RFIs module for this project", "Managing the company member directory", "Setting company-wide standards", "Controlling the whole account"],
          answer: 0,
          explain: "Enabling a module for one project is done in Project Admin, not at the account level."
        },
        {
          type: "truefalse",
          q: "Project Admin settings can differ from one project to another.",
          answer: true,
          explain: "Each project is configured on its own, so modules and members can vary between jobs."
        },
        {
          type: "order",
          q: "Order the steps to stand up a new project's tools.",
          items: ["Create or open the project", "Activate the modules you need", "Add members and set roles", "Team begins working in the modules"],
          explain: "You open the project, turn on modules, add people with roles, and then work begins."
        }
      ]
    },
    {
      id: "l61",
      title: "Templates & Standards",
      intro: "Project templates let you start new jobs with the same folders, roles, and settings every time.",
      questions: [
        {
          type: "mcq",
          q: "What is a project template used for?",
          choices: ["Starting new projects with consistent setup", "Rendering a walkthrough video", "Detecting clashes in a model", "Measuring quantities from a drawing"],
          answer: 0,
          explain: "A template captures a standard setup so every new project starts the same, consistent way."
        },
        {
          type: "truefalse",
          q: "Templates help enforce company standards across projects.",
          answer: true,
          explain: "By reusing a template, folder structures, roles, and settings stay consistent from job to job."
        },
        {
          type: "fill",
          q: "A project ____ copies a standard folder and settings structure into each new job.",
          answer: "template",
          accept: ["template"],
          explain: "A template is a reusable starting point that copies your standard structure into new projects."
        },
        {
          type: "mcq",
          q: "What is a benefit of standardizing folder names across projects?",
          choices: ["People find files fast on any project", "Files render faster", "Models auto-coordinate", "RFIs answer themselves"],
          answer: 0,
          explain: "Consistent naming means anyone can find files quickly no matter which project they open."
        },
        {
          type: "match",
          q: "Match the term to its meaning.",
          pairs: [
            ["Template", "A reusable project starting point"],
            ["Standard", "An agreed rule for how things are set up"],
            ["Consistency", "The result of applying the same standards"]
          ],
          explain: "Standards define the rules, templates apply them, and the payoff is consistency."
        },
        {
          type: "truefalse",
          q: "Using a template means every project must be identical forever.",
          answer: false,
          explain: "A template is a starting point; you can still adjust an individual project after it is created."
        },
        {
          type: "order",
          q: "Order how a template speeds up new project setup.",
          items: ["Build a template once with your standards", "Create a new project from that template", "Adjust only the project-specific details", "Team starts with the setup already in place"],
          explain: "Build the template once, create projects from it, tweak specifics, and skip repetitive setup."
        }
      ]
    },
    {
      id: "l62",
      title: "Integrations",
      intro: "Integrations connect other software to ACC so data flows between tools instead of being retyped.",
      questions: [
        {
          type: "mcq",
          q: "What does an integration do?",
          choices: ["Connects another tool to ACC to share data", "Deletes old model files", "Renders a photorealistic image", "Prints paper drawings"],
          answer: 0,
          explain: "An integration links ACC with another system so data can move between them automatically."
        },
        {
          type: "truefalse",
          q: "Integrations help avoid retyping the same data in two systems.",
          answer: true,
          explain: "When tools are connected, data can flow across them, cutting duplicate manual entry and errors."
        },
        {
          type: "fill",
          q: "An ____ lets ACC exchange data with other software like scheduling or accounting tools.",
          answer: "integration",
          accept: ["integration"],
          explain: "An integration is the connection that lets ACC share data with outside software."
        },
        {
          type: "mcq",
          q: "Which is a realistic reason to integrate ACC with another system?",
          choices: ["Sync cost data with accounting software", "Make models render in 3D", "Turn RFIs into photos", "Change the app's font"],
          answer: 0,
          explain: "Connecting ACC cost data to accounting is a common, practical integration."
        },
        {
          type: "truefalse",
          q: "An open platform is easier to connect to other tools than a closed one.",
          answer: true,
          explain: "Platforms built to be open expose ways to connect, making integrations far simpler to build."
        },
        {
          type: "match",
          q: "Match each connected tool to a likely integration purpose.",
          pairs: [
            ["Accounting software", "Share cost and budget data"],
            ["Scheduling tool", "Link tasks and timelines"],
            ["Analytics platform", "Pull project data for reporting"]
          ],
          explain: "Integrations connect ACC to accounting, scheduling, and analytics tools to share the right data."
        },
        {
          type: "mcq",
          q: "What is the main risk of NOT integrating your tools?",
          choices: ["Duplicate manual entry and mismatched data", "Faster reporting", "Cleaner models", "Automatic clash detection"],
          answer: 0,
          explain: "Without integration, people rekey data by hand, which is slow and causes mismatches."
        }
      ]
    },
    {
      id: "l63",
      title: "Revit + Navisworks + ACC",
      intro: "Authoring, coordination, and cloud tools each play a role and connect to form one workflow.",
      questions: [
        {
          type: "mcq",
          q: "What is Revit's main role in this workflow?",
          choices: ["Authoring the design model", "Detecting clashes", "Storing final PDFs only", "Sending RFIs"],
          answer: 0,
          explain: "Revit is an authoring tool where teams build the design model itself."
        },
        {
          type: "mcq",
          q: "What is Navisworks best known for?",
          choices: ["Combining models and detecting clashes", "Drawing structural steel", "Hosting the CDE", "Writing submittals"],
          answer: 0,
          explain: "Navisworks aggregates many models and runs clash detection on the desktop."
        },
        {
          type: "truefalse",
          q: "Cloud Model Coordination in ACC complements desktop Navisworks rather than fully replacing it.",
          answer: true,
          explain: "Cloud Model Coordination runs clashes in ACC and works alongside desktop Navisworks."
        },
        {
          type: "match",
          q: "Match each tool to its primary job.",
          pairs: [
            ["Revit", "Author the model"],
            ["Navisworks", "Coordinate and clash on the desktop"],
            ["ACC", "Store and share data in the cloud"]
          ],
          explain: "Revit authors, Navisworks coordinates on the desktop, and ACC connects the data in the cloud."
        },
        {
          type: "fill",
          q: "Cloud ____ lets several people work on the same Revit model hosted in ACC.",
          answer: "worksharing",
          accept: ["worksharing", "work sharing"],
          explain: "Cloud worksharing hosts a Revit model in ACC so multiple people can work in it at once."
        },
        {
          type: "order",
          q: "Order a simple design-to-coordination flow.",
          items: ["Author the model in Revit", "Publish or share it to ACC", "Coordinate and run clash detection", "Create issues from the clashes to resolve"],
          explain: "You author, share to the cloud, coordinate and clash, then turn clashes into issues to fix."
        },
        {
          type: "truefalse",
          q: "Model Coordination in ACC can turn clashes into issues automatically.",
          answer: true,
          explain: "Cloud Model Coordination detects clashes and can generate issues for the team to track and close."
        }
      ]
    },
    {
      id: "l64",
      title: "Data as the Deliverable",
      intro: "The real value of ACC is connected data that stays useful long after the drawings are done.",
      questions: [
        {
          type: "mcq",
          q: "What is the big-picture value of connecting design and construction data?",
          choices: ["One reliable source everyone can trust and reuse", "Prettier fonts in reports", "Faster video rendering", "More paper drawings"],
          answer: 0,
          explain: "Connected data becomes a single trusted source the whole team can rely on and reuse."
        },
        {
          type: "truefalse",
          q: "ACC is Autodesk's cloud platform connecting design and construction data.",
          answer: true,
          explain: "That is exactly what ACC does; it links design and construction data in the cloud."
        },
        {
          type: "truefalse",
          q: "Autodesk rebranded the ACC site as Autodesk Forma, so the two names refer to the same platform.",
          answer: true,
          explain: "The ACC site was rebranded Autodesk Forma; ACC and Forma are interchangeable names for it."
        },
        {
          type: "fill",
          q: "A well-run CDE gives the project a single source of ____ that everyone can rely on.",
          answer: "truth",
          accept: ["truth"],
          explain: "The common data environment provides a single source of truth for the project."
        },
        {
          type: "mcq",
          q: "Which standard does a controlled CDE align with?",
          choices: ["ISO 19650", "A random file format", "A rendering codec", "A phone standard"],
          answer: 0,
          explain: "ISO 19650 describes managing information in a controlled CDE, the single source of truth."
        },
        {
          type: "match",
          q: "Match the idea to why it matters.",
          pairs: [
            ["Connected data", "Fewer errors from mismatched copies"],
            ["Single source of truth", "Everyone works from the same info"],
            ["Reusable data", "Value continues after handover"]
          ],
          explain: "Connected, single-source, reusable data reduces errors and keeps paying off after the job ends."
        },
        {
          type: "truefalse",
          q: "Once construction ends, the project data has no further value.",
          answer: false,
          explain: "Handover data supports operations and future work, so its value continues well past construction."
        },
        {
          type: "mcq",
          q: "Why is data called the deliverable, not just the drawings?",
          choices: ["Connected data outlives any single drawing set", "Drawings never matter", "Data is only for admins", "Data cannot be shared"],
          answer: 0,
          explain: "Structured, connected data keeps serving the owner and team long after a drawing set is done."
        }
      ]
    }
  ]
});
