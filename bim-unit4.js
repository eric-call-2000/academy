window.ACADEMY.addUnit("bim", {
  id: "unit-4",
  title: "BIM Roles & the Team",
  color: "#ce82ff",
  icon: "👥",
  description: "Who does what in a BIM project.",
  lessons: [
    {
      id: "l25",
      title: "Why Roles Matter",
      intro: "BIM is a way of working together, so it only succeeds when everyone knows who is responsible for what.",
      questions: [
        {
          type: "mcq",
          q: "Why does BIM need clearly defined roles?",
          choices: ["So responsibilities are agreed and nothing falls through the cracks", "So only one person ever touches the model", "So no standards are ever written down", "So the project avoids using any software"],
          answer: 0,
          explain: "BIM is collaborative. Clear roles make sure each task has an owner and the information stays consistent."
        },
        {
          type: "truefalse",
          q: "On a BIM project, several disciplines contribute information, so it helps to agree who does what before work starts.",
          answer: true,
          explain: "Agreeing responsibilities early prevents gaps and overlaps between disciplines."
        },
        {
          type: "truefalse",
          q: "BIM is only about 3D software, so roles and responsibilities do not matter.",
          answer: false,
          explain: "BIM is a process for managing information, not just software. Clear roles are essential to that process."
        },
        {
          type: "fill",
          q: "Clear roles make sure every task has an ____ who is responsible for it.",
          answer: "owner",
          accept: ["owner", "responsible person"],
          explain: "When each task has an owner, work is less likely to be missed or duplicated."
        },
        {
          type: "mcq",
          q: "What is a likely result of unclear BIM roles?",
          choices: ["Work is missed or duplicated because no one owns it", "The model finishes itself", "Everyone automatically agrees", "No files are ever created"],
          answer: 0,
          explain: "Without clear ownership, tasks can be dropped or done twice, causing confusion and rework."
        },
        {
          type: "match",
          q: "Match each idea to what it gives a BIM project.",
          pairs: [
            ["Clear roles", "Each task has a responsible owner"],
            ["Agreed responsibilities", "Fewer gaps and overlaps between teams"]
          ],
          explain: "Together, clear roles and agreed responsibilities keep a collaborative BIM process running smoothly."
        },
        {
          type: "order",
          q: "Order the sensible way to set up a BIM team.",
          items: ["Agree the goals of the project", "Define the roles needed", "Assign people to each role", "Start producing the models"],
          explain: "You define and assign roles before production so everyone knows their part from the start."
        }
      ]
    },
    {
      id: "l26",
      title: "The BIM Manager",
      intro: "A BIM Manager sets the standards and oversees how BIM is used across a company or a whole project.",
      questions: [
        {
          type: "mcq",
          q: "What does a BIM Manager mainly do?",
          choices: ["Sets BIM standards and oversees BIM strategy across projects or a company", "Only pours concrete on site", "Signs the client's cheques", "Refuses to let anyone use models"],
          answer: 0,
          explain: "The BIM Manager owns the standards, templates, and overall BIM approach at a company or project level."
        },
        {
          type: "truefalse",
          q: "A BIM Manager often works at a higher, company-wide or whole-project level rather than modeling one small element.",
          answer: true,
          explain: "BIM Managers focus on strategy, standards, and consistency across work, not day-to-day modeling of single parts."
        },
        {
          type: "fill",
          q: "A BIM Manager sets the company or project BIM ____ that everyone follows.",
          answer: "standards",
          accept: ["standards", "standard"],
          explain: "Standards, templates, and naming conventions come from the BIM Manager so work stays consistent."
        },
        {
          type: "mcq",
          q: "Which task fits a BIM Manager best?",
          choices: ["Creating the BIM standards and templates the team uses", "Personally installing every door on site", "Approving the client's budget", "Writing the concrete mix design"],
          answer: 0,
          explain: "Defining reusable standards and templates is a core BIM Manager responsibility."
        },
        {
          type: "truefalse",
          q: "A BIM Manager is only allowed to work on a single element in one model and nothing else.",
          answer: false,
          explain: "The role is broad. It spans standards and strategy across many models and projects, not one element."
        },
        {
          type: "match",
          q: "Match each BIM Manager duty to what it means.",
          pairs: [
            ["Set standards", "Define naming, templates, and conventions"],
            ["Oversee strategy", "Guide how BIM is used across the company"],
            ["Support the team", "Help others apply the standards correctly"]
          ],
          explain: "The BIM Manager keeps the whole organization or project aligned on how BIM is done."
        },
        {
          type: "order",
          q: "Order how a BIM Manager typically rolls out a new standard.",
          items: ["Write the standard", "Build a template that follows it", "Train the team on it", "Check that projects apply it"],
          explain: "A standard is written, made usable in a template, taught to the team, and then checked in practice."
        }
      ]
    },
    {
      id: "l27",
      title: "The BIM Coordinator",
      intro: "A BIM Coordinator runs model coordination on a project, combining the discipline models and finding clashes.",
      questions: [
        {
          type: "mcq",
          q: "What is the BIM Coordinator's main job on a project?",
          choices: ["Coordinate the discipline models and run clash detection", "Set every company-wide standard alone", "Hire the client", "Order the site's coffee"],
          answer: 0,
          explain: "The BIM Coordinator federates the models and checks for clashes so the team can resolve them."
        },
        {
          type: "truefalse",
          q: "Running clash detection between discipline models is a typical BIM Coordinator task.",
          answer: true,
          explain: "Coordinators combine models and use clash detection to find where elements conflict."
        },
        {
          type: "fill",
          q: "The BIM Coordinator runs ____ detection to find where discipline models conflict.",
          answer: "clash",
          accept: ["clash"],
          explain: "Clash detection highlights conflicts, such as a duct running through a beam, so they can be fixed early."
        },
        {
          type: "mcq",
          q: "Combining several discipline models into one coordinated model is called...",
          choices: ["Federating the models", "Deleting the models", "Printing the models", "Renaming the client"],
          answer: 0,
          explain: "A federated model brings the separate discipline models together so they can be checked as a whole."
        },
        {
          type: "truefalse",
          q: "A BIM Coordinator usually focuses on one project's coordination rather than setting the whole company's BIM strategy.",
          answer: true,
          explain: "Coordination is project-focused. Company-wide strategy is more the BIM Manager's remit."
        },
        {
          type: "match",
          q: "Match each coordination term to its meaning.",
          pairs: [
            ["Federated model", "Discipline models combined into one"],
            ["Clash detection", "Finding where elements conflict"],
            ["Coordination meeting", "The team reviews and resolves clashes"]
          ],
          explain: "The Coordinator federates models, detects clashes, and drives resolution with the team."
        },
        {
          type: "order",
          q: "Order a simple coordination workflow.",
          items: ["Collect the discipline models", "Federate them into one model", "Run clash detection", "Review and assign clashes to resolve"],
          explain: "Models are gathered, combined, checked for clashes, and then the issues are assigned for fixing."
        }
      ]
    },
    {
      id: "l28",
      title: "The Information Manager",
      intro: "Under ISO 19650, an Information Manager looks after the common data environment and the flow of information.",
      questions: [
        {
          type: "mcq",
          q: "What does an Information Manager mainly look after?",
          choices: ["The common data environment and information workflows", "The physical concrete on site", "The client's holiday schedule", "The color of the building"],
          answer: 0,
          explain: "Under ISO 19650, the Information Manager manages the CDE and the processes that move information through it."
        },
        {
          type: "fill",
          q: "The Information Manager manages the common data ____, the agreed single source of project information.",
          answer: "environment",
          accept: ["environment"],
          explain: "The common data environment (CDE) is the agreed single source of truth for project information."
        },
        {
          type: "truefalse",
          q: "The role of Information Manager is described in the ISO 19650 standard for managing information with BIM.",
          answer: true,
          explain: "ISO 19650 sets out information management responsibilities, including managing the CDE and workflows."
        },
        {
          type: "mcq",
          q: "The CDE, which the Information Manager oversees, is best described as...",
          choices: ["The agreed single source of truth for project information", "A backup nobody uses", "A private folder on one laptop", "A printed set of drawings only"],
          answer: 0,
          explain: "The CDE is the shared, agreed home for project information that the whole team relies on."
        },
        {
          type: "match",
          q: "Match each ISO 19650 CDE state to what it means.",
          pairs: [
            ["Work in Progress", "Information still being developed by one team"],
            ["Shared", "Information released for others to use"],
            ["Published", "Information approved and authorized"],
            ["Archived", "A record of superseded information"]
          ],
          explain: "ISO 19650 defines the CDE states Work in Progress, Shared, Published, and Archived."
        },
        {
          type: "order",
          q: "Order how information typically moves through the CDE states.",
          items: ["Work in Progress", "Shared", "Published", "Archived"],
          explain: "Information is developed (WIP), shared, published when approved, and later archived as a record."
        },
        {
          type: "truefalse",
          q: "An Information Manager makes sure information follows agreed workflows instead of being scattered randomly.",
          answer: true,
          explain: "Managing structured, agreed workflows is central to the Information Manager role."
        }
      ]
    },
    {
      id: "l29",
      title: "Model Authors",
      intro: "Model authors are the modelers who actually build the discipline models, such as architecture, structure, or MEP.",
      questions: [
        {
          type: "mcq",
          q: "Who are the model authors on a BIM project?",
          choices: ["The modelers who build the discipline models", "The people who only sign contracts", "The delivery drivers", "The client's accountants"],
          answer: 0,
          explain: "Model authors are the people who create the actual discipline models used on the project."
        },
        {
          type: "truefalse",
          q: "An architectural technician modeling the walls and doors in the architecture model is acting as a model author.",
          answer: true,
          explain: "Anyone building a discipline model, such as the architecture model, is a model author."
        },
        {
          type: "fill",
          q: "In MEP, the letters stand for mechanical, electrical, and ____.",
          answer: "plumbing",
          accept: ["plumbing"],
          explain: "MEP means mechanical, electrical, and plumbing, three common discipline models."
        },
        {
          type: "match",
          q: "Match each discipline to a model a model author might build.",
          pairs: [
            ["Architecture", "Walls, doors, and spaces"],
            ["Structure", "Beams, columns, and slabs"],
            ["MEP", "Ducts, cables, and pipes"]
          ],
          explain: "Different model authors build different discipline models that are later coordinated together."
        },
        {
          type: "mcq",
          q: "Why should model authors follow the BIM standards?",
          choices: ["So their models are consistent and can be coordinated together", "So no one can ever open the file", "So the model has no information at all", "So the project takes longer on purpose"],
          answer: 0,
          explain: "Consistent, standards-based models are far easier to federate and coordinate across disciplines."
        },
        {
          type: "truefalse",
          q: "Model authors can ignore all naming and standards because only they will ever use their model.",
          answer: false,
          explain: "Models are shared and coordinated, so authors must follow agreed standards for everyone's benefit."
        },
        {
          type: "order",
          q: "Order a simple model author workflow.",
          items: ["Open the discipline template", "Model the elements", "Add the required information", "Share the model to the CDE"],
          explain: "Authors start from a standard template, build and enrich the model, then share it for coordination."
        }
      ]
    },
    {
      id: "l30",
      title: "Appointing & Appointed Parties",
      intro: "ISO 19650 uses appointing party for the client side and appointed parties for the teams delivering the work.",
      questions: [
        {
          type: "mcq",
          q: "In ISO 19650, who is the appointing party?",
          choices: ["The client, who receives the information", "The bricklayer on site", "The software vendor", "The delivery courier"],
          answer: 0,
          explain: "The appointing party is the client side that sets requirements and receives the delivered information."
        },
        {
          type: "fill",
          q: "The team leading delivery on behalf of the client is called the ____ appointed party.",
          answer: "lead",
          accept: ["lead"],
          explain: "The lead appointed party coordinates the delivery team on behalf of the appointing party."
        },
        {
          type: "truefalse",
          q: "In ISO 19650, appointed parties are the teams and suppliers who deliver the work.",
          answer: true,
          explain: "Appointed parties are the delivery-side teams, led by the lead appointed party."
        },
        {
          type: "match",
          q: "Match each ISO 19650 party to its role.",
          pairs: [
            ["Appointing party", "The client who sets requirements"],
            ["Lead appointed party", "Coordinates the delivery team"],
            ["Appointed party", "A team delivering part of the work"]
          ],
          explain: "ISO 19650 splits responsibilities between the client side and the delivery side."
        },
        {
          type: "mcq",
          q: "Which document, agreed by the parties, sets out how the project's information will be delivered?",
          choices: ["The BIM Execution Plan (BEP)", "The site menu", "The paint receipt", "The parking permit"],
          answer: 0,
          explain: "The BIM Execution Plan (BEP) describes how the delivery team will meet the information requirements."
        },
        {
          type: "truefalse",
          q: "In ISO 19650, the appointing party and the appointed parties are just two names for the same single company.",
          answer: false,
          explain: "They are different sides. The appointing party is the client; the appointed parties deliver the work."
        },
        {
          type: "order",
          q: "Order these ISO 19650 steps from the client's request to delivery.",
          items: ["Appointing party sets information requirements", "Lead appointed party plans the delivery", "Appointed parties produce the information", "Information is delivered back to the appointing party"],
          explain: "Requirements flow from the client, the delivery team produces information, and it is returned to the client."
        }
      ]
    },
    {
      id: "l31",
      title: "The Whole Team",
      intro: "Architects, engineers, contractors, and owners all use BIM together, each getting value from the shared information.",
      questions: [
        {
          type: "truefalse",
          q: "BIM is used across the team, including architects, engineers, contractors, and owners.",
          answer: true,
          explain: "BIM connects many roles around shared information, not just one discipline."
        },
        {
          type: "match",
          q: "Match each role to how it typically uses BIM.",
          pairs: [
            ["Architect", "Designs spaces and appearance"],
            ["Engineer", "Designs structure or building systems"],
            ["Contractor", "Plans and builds from the models"],
            ["Owner", "Uses the data to operate the building"]
          ],
          explain: "Each role draws different value from the same shared BIM information."
        },
        {
          type: "mcq",
          q: "Why is it valuable that the whole team shares one set of BIM information?",
          choices: ["Everyone works from the same current information", "Only the architect ever sees anything", "It stops anyone from communicating", "It deletes the data each night"],
          answer: 0,
          explain: "A shared information base keeps every role aligned on the latest, consistent data."
        },
        {
          type: "fill",
          q: "The ____ often cares most about using the building's data to operate it after handover.",
          answer: "owner",
          accept: ["owner", "client"],
          explain: "Owners inherit the building and its data, which they use for operation and maintenance."
        },
        {
          type: "truefalse",
          q: "Only architects benefit from BIM, and no other role gets any value from it.",
          answer: false,
          explain: "Engineers, contractors, and owners all gain value from BIM in different ways."
        },
        {
          type: "mcq",
          q: "A contractor mainly uses the BIM models to...",
          choices: ["Plan and build the project", "Choose the office wallpaper", "Set the client's salary", "Decide the weather"],
          answer: 0,
          explain: "Contractors use the coordinated models to plan sequencing, quantities, and construction on site."
        },
        {
          type: "order",
          q: "Order how information often flows across the team.",
          items: ["Architect and engineers design in models", "Contractor builds from the coordinated models", "Handover information is prepared", "Owner uses the data to operate the building"],
          explain: "Design flows to construction, then to handover, and finally to the owner for operations."
        }
      ]
    },
    {
      id: "l32",
      title: "Skills & Training",
      intro: "BIM professionals need a mix of technical software skills, standards knowledge, and teamwork.",
      questions: [
        {
          type: "mcq",
          q: "Which mix best describes what BIM professionals need?",
          choices: ["Technical software skills, standards knowledge, and teamwork", "Only the ability to type fast", "Just one software button", "No communication at all"],
          answer: 0,
          explain: "Good BIM work blends software skill, understanding of standards like ISO 19650, and collaboration."
        },
        {
          type: "truefalse",
          q: "Understanding standards such as ISO 19650 is a useful skill for BIM professionals.",
          answer: true,
          explain: "Knowing the information-management standards helps professionals work consistently and correctly."
        },
        {
          type: "fill",
          q: "Besides software skills, BIM professionals should understand the ____ that guide how information is managed.",
          answer: "standards",
          accept: ["standards", "standard"],
          explain: "Standards and conventions shape how BIM information is created, named, and exchanged."
        },
        {
          type: "match",
          q: "Match each BIM skill to why it matters.",
          pairs: [
            ["Software skills", "To author and coordinate models"],
            ["Standards knowledge", "To keep information consistent"],
            ["Communication", "To collaborate across disciplines"]
          ],
          explain: "Technical, standards, and people skills together make an effective BIM professional."
        },
        {
          type: "mcq",
          q: "Why is communication an important BIM skill?",
          choices: ["BIM is collaborative and spans many disciplines", "Because models never need coordinating", "Because no one else uses the data", "Because standards do not exist"],
          answer: 0,
          explain: "BIM connects many roles, so clear communication is needed to coordinate the shared information."
        },
        {
          type: "truefalse",
          q: "A BIM professional only needs to click buttons in software and never needs to understand the process.",
          answer: false,
          explain: "BIM is a process. Understanding standards and collaboration matters as much as software skill."
        },
        {
          type: "order",
          q: "Order a sensible way to grow into a BIM role.",
          items: ["Learn the authoring software", "Learn the BIM standards", "Practice coordinating with others", "Take on more responsibility for information"],
          explain: "Skills build up from software to standards to collaboration and greater responsibility."
        }
      ]
    }
  ]
});
