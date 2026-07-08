window.ACADEMY.addUnit("bim", {
  id: "unit-5",
  title: "Standards & the BEP",
  color: "#ff4b4b",
  icon: "📋",
  description: "The rules and plans that make BIM information consistent and shareable.",
  lessons: [
    {
      id: "l33",
      title: "Why Standards?",
      intro: "Standards let a whole project team create and exchange information the same way, so files, models, and data stay consistent and usable no matter who produced them.",
      questions: [
        {
          type: "mcq",
          q: "What is the main reason a project adopts BIM standards?",
          choices: [
            "To make the geometry look more realistic",
            "To keep information consistent and shareable across the whole team",
            "To reduce the number of people on the project",
            "To force everyone to use the same software brand"
          ],
          answer: 1,
          explain: "Standards exist so that consistent, structured information can be shared and reused by everyone, regardless of who authored it."
        },
        {
          type: "truefalse",
          q: "BIM standards only matter to the design team and can be ignored by contractors and owners.",
          answer: false,
          explain: "Standards benefit the entire supply chain including contractors and owners, who all consume and rely on the shared information."
        },
        {
          type: "mcq",
          q: "Which problem is a shared standard most likely to prevent?",
          choices: [
            "Two firms naming and structuring their models in totally different ways",
            "A building being taller than planned",
            "A client changing their mind about a room",
            "A rainstorm delaying site work"
          ],
          answer: 0,
          explain: "Standards remove ambiguity by making structure and naming predictable, so mismatched conventions do not derail collaboration."
        },
        {
          type: "fill",
          q: "Standards aim to make information ____ so it can be reused across the project.",
          answer: "consistent",
          accept: ["consistent", "consistency", "standardized", "standardised"],
          explain: "Consistency is the core goal: predictable information that many parties can trust and reuse."
        },
        {
          type: "truefalse",
          q: "Without agreed standards, combining models from several companies is usually harder and more error-prone.",
          answer: true,
          explain: "When each company follows its own conventions, coordinating and merging information becomes slow and mistake-prone."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Standard", "An agreed way of doing something"],
            ["Convention", "A shared rule the team follows"],
            ["Consistency", "Information structured the same way each time"]
          ],
          explain: "A standard is the agreed approach, a convention is a shared rule, and consistency is the result the team is aiming for."
        },
        {
          type: "mcq",
          q: "Who benefits when project information follows a common standard?",
          choices: [
            "Only the BIM manager",
            "Only the software vendor",
            "The whole project team and the client over the asset lifecycle",
            "Nobody, it just adds paperwork"
          ],
          answer: 2,
          explain: "Everyone who creates or consumes the information benefits, including the client who operates the asset after handover."
        },
        {
          type: "order",
          q: "Order these steps for adopting a project standard, from first to last.",
          items: [
            "Agree the standard with the team",
            "Document it so everyone can follow it",
            "Apply it consistently on the project",
            "Check the work against it"
          ],
          explain: "You agree the approach, document it, apply it, and then verify that the work actually meets it."
        }
      ]
    },
    {
      id: "l34",
      title: "ISO 19650",
      intro: "ISO 19650 is the international standard for managing information over the whole life of a built asset using BIM. It defines roles, processes, and a shared environment for exchanging information.",
      questions: [
        {
          type: "mcq",
          q: "What does ISO 19650 primarily address?",
          choices: [
            "How to draw walls in 3D",
            "Managing information over the life of a built asset using BIM",
            "The maximum height of a building",
            "Which laptop to buy for modeling"
          ],
          answer: 1,
          explain: "ISO 19650 is about information management processes, not about geometry or specific software."
        },
        {
          type: "match",
          q: "Match each ISO 19650 role to its description.",
          pairs: [
            ["Appointing party", "The client who requests the information"],
            ["Lead appointed party", "The party coordinating delivery for the client"],
            ["Appointed party", "A supplier delivering part of the information"]
          ],
          explain: "The appointing party is the client, the lead appointed party coordinates the delivery team, and appointed parties are the individual suppliers."
        },
        {
          type: "truefalse",
          q: "In ISO 19650 language, the appointing party is essentially the client who sets the information requirements.",
          answer: true,
          explain: "The appointing party is the client role that defines what information is needed and appoints others to deliver it."
        },
        {
          type: "fill",
          q: "ISO 19650 is an ____ standard, meaning it is used across many countries.",
          answer: "international",
          accept: ["international", "iso", "global"],
          explain: "ISO standards are international, giving teams a common framework that crosses national borders."
        },
        {
          type: "mcq",
          q: "Which document does ISO 19650 expect the delivery team to produce to explain how they will manage information?",
          choices: [
            "A BIM Execution Plan (BEP)",
            "A fire evacuation plan",
            "A marketing brochure",
            "A staff holiday calendar"
          ],
          answer: 0,
          explain: "The BIM Execution Plan sets out how the team will meet the information requirements under ISO 19650."
        },
        {
          type: "order",
          q: "Order these ISO 19650 information terms from the client's high-level needs down to the specific exchange.",
          items: [
            "OIR (organizational information requirements)",
            "AIR (asset information requirements)",
            "PIR (project information requirements)",
            "EIR (exchange information requirements)"
          ],
          explain: "A common way to relate them runs from broad organizational needs, to asset needs, to project delivery needs, and finally to the specific exchanges (EIR) requested for an appointment. The exact relationships have nuance, but the trend is from strategic to project level."
        },
        {
          type: "truefalse",
          q: "ISO 19650 forces every team to use one specific commercial BIM software product.",
          answer: false,
          explain: "ISO 19650 is vendor-neutral. It defines processes and roles, not a mandatory software brand."
        },
        {
          type: "mcq",
          q: "The single agreed source of project information under ISO 19650 is called the:",
          choices: [
            "Common Data Environment (CDE)",
            "Common Room",
            "Central Model Bank",
            "Shared Drive Standard"
          ],
          answer: 0,
          explain: "The Common Data Environment (CDE) is the agreed single source of truth for the project's information."
        }
      ]
    },
    {
      id: "l35",
      title: "Information Requirements",
      intro: "Information requirements state what information is needed, in what form, and when. ISO 19650 groups them into OIR, AIR, EIR, and PIR so the right data is delivered at the right time.",
      questions: [
        {
          type: "match",
          q: "Match each information requirement to what it captures.",
          pairs: [
            ["OIR", "The organization's broad information needs"],
            ["AIR", "Information needed to operate the asset"],
            ["EIR", "What must be exchanged and when"],
            ["PIR", "Information needed to deliver the project"]
          ],
          explain: "OIR is organizational, AIR supports operating the asset, EIR defines the exchanges, and PIR covers delivering the project."
        },
        {
          type: "mcq",
          q: "What do exchange information requirements (EIR) mainly define?",
          choices: [
            "The color scheme of the building",
            "What information must be delivered, and when, during appointments",
            "The lunch menu for the site team",
            "The brand of hard hats to wear"
          ],
          answer: 1,
          explain: "EIR specify the information to be exchanged and the timing and format expected from appointed parties."
        },
        {
          type: "truefalse",
          q: "Information requirements describe not just what data is needed but also when it should be delivered.",
          answer: true,
          explain: "Requirements cover content, format, and timing so information arrives when decisions actually need it."
        },
        {
          type: "fill",
          q: "The ____ information requirements describe what is needed to operate and maintain the finished asset.",
          answer: "asset",
          accept: ["asset", "air"],
          explain: "Asset information requirements (AIR) focus on the data needed to run and maintain the building once it is in use."
        },
        {
          type: "mcq",
          q: "Why is it useful to define information requirements early?",
          choices: [
            "So teams deliver the right information instead of guessing",
            "So the building can be taller",
            "So fewer standards are needed",
            "So the model file is smaller"
          ],
          answer: 0,
          explain: "Clear requirements let teams target exactly what is needed, avoiding wasted effort and missing data."
        },
        {
          type: "truefalse",
          q: "PIR stands for the information needed to deliver the project itself.",
          answer: true,
          explain: "Project information requirements (PIR) capture what information the project needs during its delivery."
        },
        {
          type: "order",
          q: "Order these requirement types from broadest and most strategic to most project-specific.",
          items: [
            "OIR (organizational information requirements)",
            "AIR (asset information requirements)",
            "PIR (project information requirements)",
            "EIR (exchange information requirements)"
          ],
          explain: "This progression moves from the organization's strategic needs, to asset operation needs, to project delivery needs, and finally to the specific exchanges. The exact relationships have nuance, but the trend is from broad to specific."
        },
        {
          type: "match",
          q: "Match each abbreviation to its full name.",
          pairs: [
            ["OIR", "Organizational information requirements"],
            ["EIR", "Exchange information requirements"],
            ["PIR", "Project information requirements"]
          ],
          explain: "OIR, EIR, and PIR are the organizational, exchange, and project information requirements respectively."
        }
      ]
    },
    {
      id: "l36",
      title: "The BIM Execution Plan",
      intro: "The BIM Execution Plan, or BEP, is the team's plan for how they will actually deliver BIM: the goals, roles, standards, methods, and deliverables agreed for the project.",
      questions: [
        {
          type: "mcq",
          q: "What does the BEP describe?",
          choices: [
            "How the team will actually deliver BIM on the project",
            "The client's personal budget",
            "The weather forecast for the site",
            "The history of the construction industry"
          ],
          answer: 0,
          explain: "The BIM Execution Plan sets out how the team will meet the information requirements: roles, standards, methods, and deliverables."
        },
        {
          type: "fill",
          q: "BEP stands for BIM ____ Plan.",
          answer: "execution",
          accept: ["execution"],
          explain: "BEP is the BIM Execution Plan, the document explaining how BIM will be executed on the project."
        },
        {
          type: "truefalse",
          q: "A BEP is written once at the very end of a project after handover.",
          answer: false,
          explain: "A BEP is prepared early to guide delivery, and it is updated as the project progresses, not written after it ends."
        },
        {
          type: "match",
          q: "Match each BEP topic to what it covers.",
          pairs: [
            ["Roles", "Who is responsible for what"],
            ["Standards", "Which conventions the team will follow"],
            ["Deliverables", "What information will be produced and when"]
          ],
          explain: "A BEP typically defines responsibilities, the standards to follow, and the deliverables expected from the team."
        },
        {
          type: "mcq",
          q: "Under ISO 19650, a BEP is essentially the delivery team's response to the client's:",
          choices: [
            "Information requirements",
            "Choice of paint color",
            "Marketing plan",
            "Office location"
          ],
          answer: 0,
          explain: "The BEP explains how the team will satisfy the client's information requirements, such as the EIR."
        },
        {
          type: "truefalse",
          q: "A BEP can identify which software and formats the team will use to exchange information.",
          answer: true,
          explain: "The BEP commonly records tools, formats, and methods so exchanges are compatible across the team."
        },
        {
          type: "order",
          q: "Order these BEP-related steps from earliest to latest.",
          items: [
            "Client issues information requirements",
            "Team drafts the BEP in response",
            "Team delivers information following the BEP",
            "BEP is reviewed and updated as needed"
          ],
          explain: "Requirements come first, the team plans in the BEP, delivers accordingly, and keeps the BEP current as the project evolves."
        },
        {
          type: "mcq",
          q: "Which of these is NOT a typical purpose of a BEP?",
          choices: [
            "Setting shared standards and naming rules",
            "Assigning roles and responsibilities",
            "Defining exchange formats and milestones",
            "Approving the client's mortgage application"
          ],
          answer: 3,
          explain: "A BEP covers how BIM information is produced and exchanged; it has nothing to do with a client's financing."
        }
      ]
    },
    {
      id: "l37",
      title: "Naming Conventions",
      intro: "A naming convention is an agreed structure for naming files and models so everyone can find, sort, and understand them at a glance. Consistent names prevent confusion and lost work.",
      questions: [
        {
          type: "mcq",
          q: "What is the main benefit of a file naming convention?",
          choices: [
            "It makes files download faster",
            "Everyone can find and identify files predictably",
            "It reduces the size of the model",
            "It changes the geometry automatically"
          ],
          answer: 1,
          explain: "A convention makes names predictable, so people can locate and understand files without guessing."
        },
        {
          type: "truefalse",
          q: "A good naming convention uses agreed fields in a fixed order, such as project, originator, and type.",
          answer: true,
          explain: "Structured names built from agreed, ordered fields make files sortable and self-describing."
        },
        {
          type: "fill",
          q: "A naming ____ is the agreed structure the whole team uses for file names.",
          answer: "convention",
          accept: ["convention", "standard"],
          explain: "The naming convention is the shared rule everyone follows so names stay consistent."
        },
        {
          type: "mcq",
          q: "Which file name is most consistent with a structured naming convention?",
          choices: [
            "final_final_v2 REAL (copy).rvt",
            "ProjA-ARC-M3-ZZ-Model-Architecture.rvt",
            "stuff.rvt",
            "new model 3 (2).rvt"
          ],
          answer: 1,
          explain: "The structured name uses ordered, meaningful fields, unlike vague or ad-hoc names that tell you little."
        },
        {
          type: "truefalse",
          q: "It is fine for each person to invent their own file names as long as the model opens.",
          answer: false,
          explain: "Ad-hoc names defeat the purpose of a convention and make files hard to find, sort, and trust across the team."
        },
        {
          type: "match",
          q: "Match each name field to what it usually identifies.",
          pairs: [
            ["Project code", "Which project the file belongs to"],
            ["Originator", "Which company or team produced it"],
            ["Type", "What kind of file it is, such as a model"]
          ],
          explain: "Common fields identify the project, the originator, and the type of file, among others agreed by the team."
        },
        {
          type: "order",
          q: "Order these steps for using a naming convention on a project.",
          items: [
            "Agree the naming fields and order",
            "Record them in the BEP or standard",
            "Name every file to match",
            "Audit names to catch mistakes"
          ],
          explain: "You agree the structure, document it, apply it to every file, and then check that names actually comply."
        },
        {
          type: "mcq",
          q: "Where would a project's naming convention typically be recorded?",
          choices: [
            "In the BEP or an information standard",
            "On a sticky note only",
            "Nowhere, people just remember it",
            "In the building's foundations"
          ],
          answer: 0,
          explain: "The convention is documented in the BEP or an information standard so everyone can reference the same rules."
        }
      ]
    },
    {
      id: "l38",
      title: "MIDP & TIDP",
      intro: "Delivery plans schedule the information a team will produce. The TIDP lists one task team's deliverables and dates; the MIDP combines all the TIDPs into one master plan for the project.",
      questions: [
        {
          type: "match",
          q: "Match each delivery plan to its scope.",
          pairs: [
            ["TIDP", "One task team's information deliverables"],
            ["MIDP", "All the TIDPs combined for the whole project"]
          ],
          explain: "A TIDP is a single task team's plan; the MIDP aggregates every TIDP into the master delivery plan."
        },
        {
          type: "fill",
          q: "The ____ Information Delivery Plan combines all the task team plans into one master plan.",
          answer: "master",
          accept: ["master", "midp"],
          explain: "The Master Information Delivery Plan (MIDP) rolls up all the individual TIDPs for the project."
        },
        {
          type: "mcq",
          q: "What does a TIDP mainly list?",
          choices: [
            "A single task team's deliverables and their dates",
            "The client's travel schedule",
            "The colors used in the model",
            "The site security roster"
          ],
          answer: 0,
          explain: "A Task Information Delivery Plan lists what one task team will deliver and when."
        },
        {
          type: "truefalse",
          q: "The MIDP is built up from the individual TIDPs.",
          answer: true,
          explain: "The master plan aggregates the task-level plans, so the MIDP is assembled from the TIDPs."
        },
        {
          type: "order",
          q: "Order these steps from producing task plans to the master plan.",
          items: [
            "Each task team drafts its TIDP",
            "Deliverables and dates are agreed",
            "TIDPs are combined into the MIDP",
            "The MIDP guides overall delivery"
          ],
          explain: "Task teams draft TIDPs, agree deliverables and dates, combine them into the MIDP, and use it to steer delivery."
        },
        {
          type: "fill",
          q: "TIDP stands for Task Information Delivery ____.",
          answer: "plan",
          accept: ["plan"],
          explain: "TIDP is the Task Information Delivery Plan for a single task team."
        },
        {
          type: "truefalse",
          q: "There is normally only one TIDP for an entire large project across all disciplines.",
          answer: false,
          explain: "Each task team usually has its own TIDP; the many TIDPs are then combined into one MIDP."
        },
        {
          type: "mcq",
          q: "Why combine TIDPs into an MIDP?",
          choices: [
            "To see the whole project's information delivery in one coordinated plan",
            "To hide deliverables from the client",
            "To make the model render faster",
            "To reduce the number of task teams"
          ],
          answer: 0,
          explain: "The MIDP gives a single coordinated view of all deliverables and dates across the project."
        }
      ]
    },
    {
      id: "l39",
      title: "Other Standards",
      intro: "ISO 19650 is not the only rulebook. National standards, company standards, and open-format specifications like IFC and COBie also shape how BIM information is created and exchanged.",
      questions: [
        {
          type: "mcq",
          q: "Besides ISO 19650, what other kinds of standards commonly apply to a BIM project?",
          choices: [
            "National and company standards",
            "Only the client's personal preferences",
            "Cooking standards",
            "Traffic laws only"
          ],
          answer: 0,
          explain: "Projects often follow national standards and company standards alongside international ones like ISO 19650."
        },
        {
          type: "match",
          q: "Match each open specification to its purpose.",
          pairs: [
            ["IFC", "An open, neutral format for exchanging models"],
            ["COBie", "A specification for delivering asset handover data"],
            ["BCF", "A format for exchanging issues and clashes"]
          ],
          explain: "IFC is the open model exchange format, COBie structures handover data, and BCF carries issues between tools."
        },
        {
          type: "truefalse",
          q: "IFC is an open, vendor-neutral file format maintained by buildingSMART.",
          answer: true,
          explain: "Industry Foundation Classes (IFC) is the open, neutral format for exchanging BIM data, stewarded by buildingSMART."
        },
        {
          type: "fill",
          q: "____ is often delivered as a spreadsheet of asset data for handover to the owner.",
          answer: "cobie",
          accept: ["cobie"],
          explain: "COBie is a specification for delivering structured asset and handover information, frequently as a spreadsheet."
        },
        {
          type: "mcq",
          q: "What is BCF (BIM Collaboration Format) used for?",
          choices: [
            "Exchanging issues and clashes between different tools",
            "Storing the client's payments",
            "Rendering photorealistic images",
            "Measuring wind loads"
          ],
          answer: 0,
          explain: "BCF lets teams pass issues, comments, and clash reports between software without sharing the whole model."
        },
        {
          type: "truefalse",
          q: "Company standards may add extra rules on top of national and international standards.",
          answer: true,
          explain: "Firms often layer their own standards over national and international ones to suit their workflows."
        },
        {
          type: "order",
          q: "Order these standards from broadest reach to narrowest.",
          items: [
            "International standard",
            "National standard",
            "Company standard",
            "Project-specific rules"
          ],
          explain: "Reach narrows from international, to national, to company, down to the rules set for one specific project."
        },
        {
          type: "mcq",
          q: "The term openBIM refers to:",
          choices: [
            "Sharing information using open, neutral formats and standards",
            "A single company's proprietary file type",
            "Leaving the model unlocked with no password",
            "A free trial of modeling software"
          ],
          answer: 0,
          explain: "openBIM is about collaborating with open, vendor-neutral formats and standards such as IFC, so tools can interoperate."
        }
      ]
    },
    {
      id: "l40",
      title: "Quality & Model Checking",
      intro: "Model checking keeps information healthy. Teams audit models for accuracy, completeness, and compliance with the standards before information is shared or published.",
      questions: [
        {
          type: "mcq",
          q: "What is the goal of model checking and quality audits?",
          choices: [
            "To confirm information is accurate, complete, and follows the standards",
            "To make the model look prettier",
            "To delete old projects",
            "To increase the file size"
          ],
          answer: 0,
          explain: "Quality checks verify that models are accurate, complete, and compliant before information is trusted and shared."
        },
        {
          type: "truefalse",
          q: "Checking a model against the naming convention is a legitimate part of a quality audit.",
          answer: true,
          explain: "Compliance with agreed conventions, including naming, is a standard part of validating model quality."
        },
        {
          type: "fill",
          q: "Reviewing a model for errors and compliance before sharing it is a form of quality ____.",
          answer: "check",
          accept: ["check", "checking", "control", "assurance", "audit"],
          explain: "This review is a quality check, sometimes described as quality control, assurance, or an audit."
        },
        {
          type: "match",
          q: "Match each quality check to what it looks for.",
          pairs: [
            ["Accuracy check", "Whether the information is correct"],
            ["Completeness check", "Whether required information is present"],
            ["Compliance check", "Whether it follows the agreed standards"]
          ],
          explain: "Audits commonly test accuracy, completeness, and compliance with the standards agreed for the project."
        },
        {
          type: "mcq",
          q: "In an ISO 19650 CDE, information should be checked and approved before it moves from Work in Progress to which state?",
          choices: [
            "Shared",
            "Deleted",
            "Rendered",
            "Encrypted"
          ],
          answer: 0,
          explain: "The CDE states progress from Work in Progress to Shared, then Published and Archived; a review gate sits before Shared."
        },
        {
          type: "truefalse",
          q: "Model checking is only ever done by hand and can never be assisted by software rules.",
          answer: false,
          explain: "Many checks can be automated with rule sets and clash tools, though human review still matters."
        },
        {
          type: "order",
          q: "Order these steps in a typical model quality check.",
          items: [
            "Run checks against the agreed standards",
            "Record any issues found",
            "Fix the issues",
            "Approve the model for sharing"
          ],
          explain: "You check against the standards, log issues, resolve them, and then approve the model so it can be shared."
        },
        {
          type: "mcq",
          q: "Why check a model before sharing it in the CDE?",
          choices: [
            "So others rely on information that is trustworthy",
            "To make the file impossible to open",
            "To remove all the geometry",
            "To hide the model from the team"
          ],
          answer: 0,
          explain: "Checking before sharing means downstream users can trust the information they receive from the CDE."
        }
      ]
    }
  ]
});
