window.ACADEMY.addUnit("bim", {
  id: "unit-6",
  title: "The Common Data Environment",
  color: "#2bb3a3",
  icon: "🗂️",
  description: "The single source of truth for all project information.",
  lessons: [
    {
      id: "l41",
      title: "What Is a CDE?",
      intro: "A Common Data Environment (CDE) is the single agreed source of information for a project or asset. It is where models, drawings, documents, and data are collected, managed, and shared so that everyone works from the same trusted set of information.",
      questions: [
        {
          type: "mcq",
          q: "What does the abbreviation CDE stand for?",
          choices: [
            "Common Data Environment",
            "Coordinated Design Exchange",
            "Central Document Editor",
            "Collaborative Delivery Engine"
          ],
          answer: 0,
          explain: "CDE stands for Common Data Environment: the agreed single source of project information."
        },
        {
          type: "truefalse",
          q: "A CDE is intended to be the single source of truth for a project's information.",
          answer: true,
          explain: "The whole point of a CDE is to give everyone one agreed, trusted place to find current project information."
        },
        {
          type: "mcq",
          q: "Which of these best describes what a CDE is?",
          choices: [
            "A managed environment for collecting and sharing project information",
            "A single 3D modeling program",
            "A type of construction contract",
            "A rendering engine for producing images"
          ],
          answer: 0,
          explain: "A CDE is a managed environment (people, process, and technology) for collecting, managing, and sharing information, not a single piece of modeling software."
        },
        {
          type: "fill",
          q: "A CDE acts as the single agreed source of ____ for a project.",
          answer: "information",
          accept: ["information", "truth", "data"],
          explain: "The CDE is the single agreed source of information (often called the single source of truth) for the project."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["CDE", "Agreed single source of project information"],
            ["Single source of truth", "One trusted place everyone works from"],
            ["Information", "Models, drawings, documents, and data"]
          ],
          explain: "The CDE provides one trusted source of truth holding all the project's models, drawings, documents, and data."
        },
        {
          type: "truefalse",
          q: "A CDE only stores 3D geometry and nothing else.",
          answer: false,
          explain: "A CDE holds all kinds of project information, including models, 2D drawings, documents, and structured data, not just geometry."
        },
        {
          type: "mcq",
          q: "Why is having a single agreed source of information valuable on a project?",
          choices: [
            "It reduces the risk of people working from different or outdated information",
            "It removes the need for any project team members",
            "It guarantees the project finishes early",
            "It replaces the need for a contract"
          ],
          answer: 0,
          explain: "A single agreed source reduces confusion and rework caused by people relying on conflicting or out-of-date information."
        },
        {
          type: "fill",
          q: "A CDE combines process and ____ so that a team can collect, manage, and share information.",
          answer: "technology",
          accept: ["technology", "tools", "software"],
          explain: "A CDE is more than software: it combines an agreed process with the technology that supports collecting, managing, and sharing information."
        }
      ]
    },
    {
      id: "l42",
      title: "Why a CDE?",
      intro: "A CDE keeps information controlled, current, and coordinated. It reduces the chance that people use the wrong version, makes it clear who is responsible for information, and creates an auditable record of how information changed over time.",
      questions: [
        {
          type: "mcq",
          q: "Which problem is a CDE mainly designed to reduce?",
          choices: [
            "People working from outdated or conflicting versions of information",
            "The need to hire a design team",
            "The cost of physical building materials",
            "The weather delays on a construction site"
          ],
          answer: 0,
          explain: "By controlling versions and access, a CDE helps ensure everyone uses current, coordinated information rather than conflicting copies."
        },
        {
          type: "truefalse",
          q: "A well-run CDE provides an auditable record of how information has changed over time.",
          answer: true,
          explain: "Because the CDE tracks revisions and status, it creates a traceable history of how information matured and changed."
        },
        {
          type: "match",
          q: "Match each benefit to what it provides.",
          pairs: [
            ["Controlled", "Access and status are managed"],
            ["Current", "Everyone can find the latest information"],
            ["Coordinated", "Information from different teams fits together"]
          ],
          explain: "A CDE aims to keep information controlled, current, and coordinated across all the teams contributing to a project."
        },
        {
          type: "mcq",
          q: "How does a CDE help with accountability?",
          choices: [
            "It makes clear who produced and shared each piece of information",
            "It hides the author of every document",
            "It prevents anyone from editing information",
            "It deletes information after each week"
          ],
          answer: 0,
          explain: "By tracking authorship, status, and revisions, a CDE makes it clear who is responsible for each piece of information."
        },
        {
          type: "fill",
          q: "A key benefit of a CDE is reducing ____ caused by teams using different versions of the same file.",
          answer: "rework",
          accept: ["rework", "errors", "mistakes", "confusion"],
          explain: "Using one controlled source reduces the rework and errors that happen when teams build from mismatched versions."
        },
        {
          type: "truefalse",
          q: "A CDE removes all need to coordinate between disciplines.",
          answer: false,
          explain: "A CDE supports coordination by centralizing information, but teams still have to actively coordinate their design and data."
        },
        {
          type: "order",
          q: "Order these outcomes from the most immediate benefit of a CDE to a longer-term one.",
          items: [
            "Everyone accesses the same current information",
            "Fewer version conflicts and errors",
            "Reliable audit trail across the project lifecycle"
          ],
          explain: "First everyone shares current information, which then reduces conflicts, and over time this builds a reliable lifecycle audit trail."
        }
      ]
    },
    {
      id: "l43",
      title: "CDE States",
      intro: "Information in a CDE moves through defined states. In ISO 19650 these are Work in Progress (WIP), Shared, Published, and Archived. Each state tells you how mature and how usable the information is.",
      questions: [
        {
          type: "order",
          q: "Put the ISO 19650 CDE states in the usual order information passes through.",
          items: [
            "Work in Progress",
            "Shared",
            "Published",
            "Archived"
          ],
          explain: "Information typically starts as Work in Progress, then becomes Shared, then Published, and older versions are Archived."
        },
        {
          type: "mcq",
          q: "In which state is information still being developed by one team and not yet visible to others?",
          choices: [
            "Work in Progress",
            "Shared",
            "Published",
            "Archived"
          ],
          answer: 0,
          explain: "Work in Progress (WIP) holds information a team is still developing before it is checked and shared."
        },
        {
          type: "match",
          q: "Match each CDE state to its meaning.",
          pairs: [
            ["Work in Progress", "Being developed by one team, not yet shared"],
            ["Shared", "Checked and available to other teams to use"],
            ["Published", "Authorized and issued for a defined purpose"],
            ["Archived", "Retained record of superseded information"]
          ],
          explain: "The four ISO 19650 states describe increasing maturity: WIP, then Shared, then Published, with superseded information kept in Archived."
        },
        {
          type: "truefalse",
          q: "Archived information is a retained record of superseded or previously issued information.",
          answer: true,
          explain: "The Archived state keeps a record of information that has been superseded or issued, supporting traceability."
        },
        {
          type: "fill",
          q: "The CDE state where information is authorized and issued for a defined purpose is called ____.",
          answer: "published",
          accept: ["published", "publish"],
          explain: "Published information has been authorized and issued for a specific purpose, such as for construction or approval."
        },
        {
          type: "mcq",
          q: "What does the Shared state mean for a piece of information?",
          choices: [
            "It has been checked and made available for other teams to reference",
            "It has been deleted from the project",
            "It is still private to its author only",
            "It can never be changed again"
          ],
          answer: 0,
          explain: "Shared information has passed a check and is available for other teams to use, though it may still be developed further."
        },
        {
          type: "truefalse",
          q: "Information must be Published before any other team can see it in the Shared area.",
          answer: false,
          explain: "Information becomes visible to other teams once it is Shared; Publishing is a later, more formal state for authorized issue."
        },
        {
          type: "fill",
          q: "The abbreviation WIP in a CDE stands for Work in ____.",
          answer: "progress",
          accept: ["progress"],
          explain: "WIP stands for Work in Progress, the state for information a team is still actively developing."
        }
      ]
    },
    {
      id: "l44",
      title: "From WIP to Shared",
      intro: "Before others rely on information, it moves from Work in Progress to Shared. This transition involves checking, reviewing, and approving the information so that it is suitable for others to reference in their own work.",
      questions: [
        {
          type: "order",
          q: "Order the steps as information moves from WIP to Shared.",
          items: [
            "Author develops information in WIP",
            "Information is checked and reviewed",
            "Information is approved for sharing",
            "Information is placed in the Shared area"
          ],
          explain: "Information is developed in WIP, then checked and reviewed, then approved, and finally moved to Shared for others to use."
        },
        {
          type: "mcq",
          q: "Why is information checked before it moves from WIP to Shared?",
          choices: [
            "So other teams can rely on it with more confidence",
            "So it can be deleted from the project",
            "So it becomes invisible to everyone",
            "So the author no longer has any responsibility"
          ],
          answer: 0,
          explain: "Checking and reviewing before sharing gives other teams confidence that the information is suitable to build on."
        },
        {
          type: "truefalse",
          q: "Once information is Shared, other teams may reference it in their own work.",
          answer: true,
          explain: "Shared is the state where information is made available for other teams to coordinate and reference their own work against."
        },
        {
          type: "fill",
          q: "The process of maturing information before others rely on it involves checking, reviewing, and ____.",
          answer: "approving",
          accept: ["approving", "approval", "approve"],
          explain: "Information is checked, reviewed, and approved before it is shared so that it is trustworthy for others."
        },
        {
          type: "match",
          q: "Match each step to its role in maturing information.",
          pairs: [
            ["Check", "Confirm the information meets requirements"],
            ["Review", "Assess suitability for the intended use"],
            ["Approve", "Authorize the move to Shared"]
          ],
          explain: "Checking confirms requirements, review assesses suitability, and approval authorizes moving the information to Shared."
        },
        {
          type: "truefalse",
          q: "Information in WIP should be treated as final and fully coordinated by other teams.",
          answer: false,
          explain: "WIP information is still being developed and has not yet been checked, so other teams should not rely on it as final."
        },
        {
          type: "mcq",
          q: "Who is typically responsible for information while it is still in WIP?",
          choices: [
            "The team or author developing it",
            "Every team on the project equally",
            "Only the client",
            "Nobody, because it is unassigned"
          ],
          answer: 0,
          explain: "While in WIP, information belongs to the team or author developing it, before it is checked and shared more widely."
        }
      ]
    },
    {
      id: "l45",
      title: "Access & Permissions",
      intro: "A CDE controls who can see and edit information. Permissions make sure that people can access what they need while protecting information from unauthorized changes. Access is often aligned with the CDE states and with each person's role.",
      questions: [
        {
          type: "mcq",
          q: "What is the main purpose of access permissions in a CDE?",
          choices: [
            "To control who can view and edit each piece of information",
            "To make every file public to anyone on the internet",
            "To automatically design the building",
            "To calculate the project budget"
          ],
          answer: 0,
          explain: "Permissions control who can view, edit, or manage information, protecting it from unauthorized access or changes."
        },
        {
          type: "truefalse",
          q: "In a CDE, a team's Work in Progress is usually restricted so other teams cannot edit it.",
          answer: true,
          explain: "WIP is typically private to the owning team, so others cannot see or edit it until it is checked and shared."
        },
        {
          type: "match",
          q: "Match each access concept to its meaning.",
          pairs: [
            ["Read access", "Can view information but not change it"],
            ["Edit access", "Can view and modify information"],
            ["Role-based access", "Permissions assigned according to a person's role"]
          ],
          explain: "Read access allows viewing, edit access allows changing, and role-based access assigns permissions based on each person's role."
        },
        {
          type: "fill",
          q: "Assigning permissions based on a person's job function is known as ____-based access control.",
          answer: "role",
          accept: ["role"],
          explain: "Role-based access control grants permissions according to a person's role, keeping access appropriate to their responsibilities."
        },
        {
          type: "mcq",
          q: "Why might a viewer be given read access rather than edit access?",
          choices: [
            "So they can reference information without accidentally changing it",
            "So they can delete any file they open",
            "So they can approve their own work",
            "So they can take ownership of every model"
          ],
          answer: 0,
          explain: "Read access lets someone reference information safely without the ability to alter it, protecting the source data."
        },
        {
          type: "truefalse",
          q: "Everyone on a project should always have full edit rights to every file in the CDE.",
          answer: false,
          explain: "Access is deliberately limited by role and state so that information is protected from unauthorized or accidental changes."
        },
        {
          type: "order",
          q: "Order these access levels from most limited to most capable.",
          items: [
            "No access",
            "Read only",
            "Read and edit",
            "Manage permissions"
          ],
          explain: "From least to most capable: no access, then read only, then read and edit, and finally the ability to manage others' permissions."
        }
      ]
    },
    {
      id: "l46",
      title: "Versioning & Status",
      intro: "Information in a CDE carries revisions and a suitability status. Revisions track how a file changes over time, while status codes indicate what the information is fit for, such as review, coordination, or construction.",
      questions: [
        {
          type: "mcq",
          q: "What does a revision on a document in a CDE indicate?",
          choices: [
            "That the information has changed and this is an identified new version",
            "That the file has been deleted permanently",
            "That the file has no author",
            "That the file cannot be opened"
          ],
          answer: 0,
          explain: "A revision identifies a new version of a file, so teams can tell which version they are looking at and track changes."
        },
        {
          type: "truefalse",
          q: "A suitability status code tells you what a piece of information is fit to be used for.",
          answer: true,
          explain: "Suitability status codes communicate the intended use of information, for example for review, coordination, or construction."
        },
        {
          type: "match",
          q: "Match each idea to what it tracks.",
          pairs: [
            ["Revision", "Which version of the information this is"],
            ["Suitability status", "What the information may be used for"],
            ["Superseded", "An earlier version replaced by a newer one"]
          ],
          explain: "Revisions track versions, suitability status tracks allowed use, and superseded marks earlier versions replaced by newer ones."
        },
        {
          type: "fill",
          q: "When a newer revision replaces an older one, the older version is marked as ____.",
          answer: "superseded",
          accept: ["superseded", "superceded"],
          explain: "The older version is marked superseded so people know a newer, replacing revision now exists."
        },
        {
          type: "mcq",
          q: "Why is it useful to keep superseded revisions rather than delete them?",
          choices: [
            "They provide a traceable history of how the information changed",
            "They let the newest version be hidden",
            "They stop anyone from making new revisions",
            "They make the current version harder to find"
          ],
          answer: 0,
          explain: "Retaining superseded revisions supports traceability, showing how and when information changed across the project."
        },
        {
          type: "truefalse",
          q: "A status code of information suitable only for review means it is automatically approved for construction.",
          answer: false,
          explain: "A review status means the information is only fit for review, not for construction, until it reaches a suitable published status."
        },
        {
          type: "order",
          q: "Order these suitability stages from least to most mature use.",
          items: [
            "Suitable for review only",
            "Suitable for coordination",
            "Suitable for construction"
          ],
          explain: "Information typically matures from being suitable only for review, to coordination, and finally to construction."
        },
        {
          type: "fill",
          q: "Tracking how a file changes over time through numbered or lettered versions is called ____.",
          answer: "versioning",
          accept: ["versioning", "revisioning", "version control"],
          explain: "Versioning (or revision control) tracks how a file changes over time through identified versions."
        }
      ]
    },
    {
      id: "l47",
      title: "CDE Tools",
      intro: "Many cloud platforms can act as a CDE. What matters is not the brand but that the platform supports the CDE workflow: collecting, managing, and sharing information with control over states, access, and revisions.",
      questions: [
        {
          type: "truefalse",
          q: "A CDE is defined by its workflow and controls, not by any single brand of software.",
          answer: true,
          explain: "Any platform that supports the CDE workflow of managed states, access, and revisions can serve as a CDE; the brand is not the point."
        },
        {
          type: "mcq",
          q: "Which capability is essential for a platform to function as a CDE?",
          choices: [
            "Managing information states, access, and revisions",
            "Playing background music for the team",
            "Generating marketing brochures",
            "Predicting the weather on site"
          ],
          answer: 0,
          explain: "A CDE platform must manage information states, access permissions, and revisions to control the flow of information."
        },
        {
          type: "match",
          q: "Match each CDE capability to what it supports.",
          pairs: [
            ["State management", "Moving information through WIP, Shared, Published"],
            ["Access control", "Deciding who can view or edit"],
            ["Revision tracking", "Keeping a history of versions"]
          ],
          explain: "A capable CDE platform supports state management, access control, and revision tracking together."
        },
        {
          type: "fill",
          q: "Modern CDE platforms are often hosted in the ____, so distributed teams can access the same information.",
          answer: "cloud",
          accept: ["cloud"],
          explain: "Cloud hosting lets distributed teams reach the same up-to-date information from anywhere with permission."
        },
        {
          type: "truefalse",
          q: "Because it is a process, a CDE can only ever be a single spreadsheet file.",
          answer: false,
          explain: "A CDE is a managed environment, usually a platform with workflows, not merely a single spreadsheet file."
        },
        {
          type: "mcq",
          q: "What advantage does a cloud-based CDE offer distributed teams?",
          choices: [
            "Everyone can access the same current information from different locations",
            "It prevents anyone from ever collaborating",
            "It requires all files to be printed",
            "It stops information from being updated"
          ],
          answer: 0,
          explain: "Cloud hosting means teams in different places can access one shared, current source of information with the right permissions."
        },
        {
          type: "order",
          q: "Order these when choosing a CDE platform, from most fundamental need to a later convenience.",
          items: [
            "Supports controlled information states",
            "Manages access and revisions",
            "Offers convenient dashboards and reports"
          ],
          explain: "First a CDE must support controlled states, then access and revision management, with reporting features as an added convenience."
        }
      ]
    },
    {
      id: "l48",
      title: "ISO 19650 & the CDE",
      intro: "ISO 19650 is the international standard for managing information using BIM. It defines the CDE workflow, including the states information passes through and the roles that produce, check, and approve it, so information is managed consistently across the asset lifecycle.",
      questions: [
        {
          type: "mcq",
          q: "What is ISO 19650?",
          choices: [
            "The international standard for managing information using BIM",
            "A brand of modeling software",
            "A type of concrete mix",
            "A national building fire code"
          ],
          answer: 0,
          explain: "ISO 19650 is the international standard for organizing and managing information over the whole life of a built asset using BIM."
        },
        {
          type: "truefalse",
          q: "ISO 19650 defines the CDE workflow and the information states such as WIP, Shared, Published, and Archived.",
          answer: true,
          explain: "ISO 19650 sets out the CDE concept and the states through which information moves as it matures."
        },
        {
          type: "match",
          q: "Match each ISO 19650 party to its role.",
          pairs: [
            ["Appointing party", "The client who receives the information"],
            ["Lead appointed party", "Leads and coordinates a delivery team"],
            ["Appointed party", "Delivers information as part of a team"]
          ],
          explain: "ISO 19650 defines the appointing party (client), the lead appointed party who coordinates delivery, and appointed parties who deliver information."
        },
        {
          type: "fill",
          q: "In ISO 19650, the client who receives the information is called the ____ party.",
          answer: "appointing",
          accept: ["appointing"],
          explain: "ISO 19650 calls the client the appointing party, who sets requirements and receives the delivered information."
        },
        {
          type: "mcq",
          q: "Which document, defined in ISO 19650 practice, sets out how a team will deliver information using BIM?",
          choices: [
            "The BIM Execution Plan (BEP)",
            "The building's fire certificate",
            "The site safety poster",
            "The paint schedule"
          ],
          answer: 0,
          explain: "The BIM Execution Plan (BEP) sets out how the team will meet the information requirements and manage delivery."
        },
        {
          type: "truefalse",
          q: "Under ISO 19650, the CDE is only relevant during design and is not used during operation of the asset.",
          answer: false,
          explain: "ISO 19650 applies the CDE across the whole asset lifecycle, including operation, not just the design stage."
        },
        {
          type: "order",
          q: "Order these ISO 19650 steps in the flow of an information request.",
          items: [
            "Appointing party sets information requirements",
            "Delivery team plans delivery in a BEP",
            "Information is produced and checked in the CDE",
            "Information is delivered to the appointing party"
          ],
          explain: "The appointing party sets requirements, the team plans delivery in a BEP, information is produced and checked in the CDE, then delivered."
        },
        {
          type: "fill",
          q: "ISO 19650 manages information across the whole ____ of a built asset.",
          answer: "lifecycle",
          accept: ["lifecycle", "life cycle", "life-cycle"],
          explain: "ISO 19650 is concerned with managing information across the entire lifecycle of a built asset, from design to operation."
        }
      ]
    }
  ]
});
