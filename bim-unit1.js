window.ACADEMY.addUnit("bim", {
  id: "unit-1",
  title: "What Is BIM?",
  color: "#58cc02",
  icon: "🏢",
  description: "BIM as a process for creating and managing building information, not just 3D software.",
  lessons: [
    {
      id: "l1",
      title: "BIM Defined",
      intro: "BIM stands for Building Information Modeling. It is a way of working: a process for creating and managing information about a built asset across its whole life, not simply a piece of drawing software.",
      questions: [
        {
          type: "mcq",
          q: "What does the abbreviation BIM stand for?",
          choices: [
            "Building Information Modeling",
            "Better Interior Measurement",
            "Building Integration Method",
            "Balanced Infrastructure Management"
          ],
          answer: 0,
          explain: "BIM stands for Building Information Modeling, the process of creating and managing information about a built asset."
        },
        {
          type: "truefalse",
          q: "BIM is best understood as just a type of 3D modeling software you install.",
          answer: false,
          explain: "BIM is a process or methodology for managing building information across the lifecycle, not merely a software product."
        },
        {
          type: "fill",
          q: "BIM is a ____ for creating and managing information about a built asset.",
          answer: "process",
          accept: ["process", "methodology", "workflow"],
          explain: "BIM is fundamentally a process (or methodology) for creating and managing information, supported by technology."
        },
        {
          type: "mcq",
          q: "Over what span does BIM aim to manage information about a built asset?",
          choices: [
            "Only during the design phase",
            "Only during construction",
            "Across the whole lifecycle of the asset",
            "Only after the building is demolished"
          ],
          answer: 2,
          explain: "BIM manages information across the entire lifecycle, from planning and design through construction and operation."
        },
        {
          type: "truefalse",
          q: "The 'I' in BIM stands for Information.",
          answer: true,
          explain: "BIM is Building Information Modeling; the Information is the data attached to and shared about the asset."
        },
        {
          type: "match",
          q: "Match each letter of BIM to what it represents.",
          pairs: [
            ["B", "Building"],
            ["I", "Information"],
            ["M", "Modeling"]
          ],
          explain: "BIM expands to Building Information Modeling, three ideas that together describe managing a built asset's data."
        },
        {
          type: "order",
          q: "Put these lifecycle phases of a built asset in their usual order.",
          items: ["Planning and design", "Construction", "Operation and maintenance"],
          explain: "Information created in planning and design carries forward into construction and then into operation and maintenance."
        }
      ]
    },
    {
      id: "l2",
      title: "Model Plus Information",
      intro: "A BIM model is geometry plus data. The geometry shows shape and position, but the attached information, the 'I', is where much of the real value lies.",
      questions: [
        {
          type: "mcq",
          q: "A BIM model is best described as which combination?",
          choices: [
            "Geometry plus attached information",
            "Only geometry with no data",
            "Only a spreadsheet with no shapes",
            "Only rendered images"
          ],
          answer: 0,
          explain: "A BIM model combines geometry (shape and position) with attached information (data), and both matter."
        },
        {
          type: "truefalse",
          q: "In BIM, the information attached to objects often carries as much value as the geometry itself.",
          answer: true,
          explain: "The 'I' in BIM, the data such as materials, properties, and identifiers, is frequently where the real value lies."
        },
        {
          type: "fill",
          q: "A BIM object stores geometry plus ____ such as material, manufacturer, or fire rating.",
          answer: "data",
          accept: ["data", "information", "attributes", "properties"],
          explain: "Objects carry data (information) such as materials and performance properties alongside their geometry."
        },
        {
          type: "match",
          q: "Match each piece of a BIM door object to its category.",
          pairs: [
            ["Width and height", "Geometry"],
            ["Fire rating", "Information"],
            ["Manufacturer name", "Information"]
          ],
          explain: "Dimensions describe geometry, while fire rating and manufacturer are information attributes attached to the object."
        },
        {
          type: "mcq",
          q: "Which of these is an example of the 'I' (information) in a BIM model?",
          choices: [
            "The color used to shade the screen",
            "A wall's thermal U-value stored as a property",
            "The zoom level of the view",
            "The name of the person logged in"
          ],
          answer: 1,
          explain: "A thermal U-value stored as an object property is data about the asset, an example of the information in BIM."
        },
        {
          type: "truefalse",
          q: "A pretty 3D picture with no attached data still delivers the full benefit of BIM.",
          answer: false,
          explain: "Without structured information attached to the geometry, most of the BIM value is missing."
        },
        {
          type: "order",
          q: "Order these from purely geometric toward information-rich.",
          items: ["A plain line drawing", "A 3D shape with no data", "A 3D object with attached properties"],
          explain: "BIM value grows as objects move from bare geometry toward carrying structured information."
        }
      ]
    },
    {
      id: "l3",
      title: "BIM vs CAD",
      intro: "Traditional CAD draws lines and produces separate drawings. BIM uses intelligent, data-rich objects held in a coordinated database, so a change updates related views together.",
      questions: [
        {
          type: "mcq",
          q: "What is the core difference between traditional CAD and BIM?",
          choices: [
            "CAD draws lines and separate drawings; BIM uses data-rich objects in a database",
            "CAD is always 3D and BIM is always 2D",
            "CAD stores information and BIM cannot",
            "There is no meaningful difference"
          ],
          answer: 0,
          explain: "Traditional CAD produces lines and independent drawings, while BIM uses intelligent objects held in a coordinated database."
        },
        {
          type: "truefalse",
          q: "In BIM, editing an element can update related views because they share a single model.",
          answer: true,
          explain: "Because BIM objects live in one coordinated model, a change to an element updates the associated views together."
        },
        {
          type: "truefalse",
          q: "In traditional 2D CAD, each drawing is typically an independent file that must be updated separately.",
          answer: true,
          explain: "Classic CAD drawings are separate, so a change in one often must be repeated by hand in the others."
        },
        {
          type: "fill",
          q: "BIM holds intelligent objects in a coordinated ____ rather than a set of disconnected drawings.",
          answer: "database",
          accept: ["database", "model", "data model"],
          explain: "BIM behaves like a database of objects, so information stays connected across views and schedules."
        },
        {
          type: "match",
          q: "Match each approach to how it represents a wall.",
          pairs: [
            ["Traditional CAD", "A set of lines on a drawing"],
            ["BIM", "An intelligent object with properties"]
          ],
          explain: "CAD represents a wall as lines, while BIM represents it as a data-rich object that knows what it is."
        },
        {
          type: "mcq",
          q: "In BIM, a wall element typically knows things such as its type, material, and dimensions. In plain CAD, a wall is usually:",
          choices: [
            "Just lines with no built-in knowledge of being a wall",
            "A live database record",
            "An object that schedules itself",
            "A material takeoff by default"
          ],
          answer: 0,
          explain: "In plain CAD a wall is only geometry (lines), whereas a BIM wall is an object carrying meaning and data."
        },
        {
          type: "order",
          q: "Order these representations from least to most information-rich.",
          items: ["2D CAD lines", "A basic 3D solid", "A BIM object with data properties"],
          explain: "Information richness increases from bare 2D lines, to unlabeled 3D geometry, to a full BIM object."
        }
      ]
    },
    {
      id: "l4",
      title: "Why BIM?",
      intro: "BIM aims to reduce errors, improve coordination between disciplines, and carry reliable data through the whole lifecycle, so information created early keeps paying off later.",
      questions: [
        {
          type: "mcq",
          q: "Which is a commonly cited benefit of using BIM?",
          choices: [
            "Better coordination and fewer clashes between disciplines",
            "Guaranteed zero cost on every project",
            "Removing the need for any people",
            "Making all data secret"
          ],
          answer: 0,
          explain: "BIM improves coordination and helps catch clashes early, reducing errors between disciplines."
        },
        {
          type: "truefalse",
          q: "A goal of BIM is that information created early can be reused later in the lifecycle.",
          answer: true,
          explain: "BIM aims to let reliable data carry forward, so effort spent early keeps paying off in later phases."
        },
        {
          type: "fill",
          q: "Coordinating discipline models helps teams find and resolve ____ before they reach the site.",
          answer: "clashes",
          accept: ["clashes", "clash", "conflicts", "collisions"],
          explain: "Coordinating models lets teams detect clashes (conflicts) virtually and fix them before construction."
        },
        {
          type: "mcq",
          q: "Catching a pipe-versus-duct conflict in the model before construction is an example of:",
          choices: [
            "Clash detection improving coordination",
            "Rendering a marketing image",
            "Deleting project data",
            "Increasing rework on site"
          ],
          answer: 0,
          explain: "Finding conflicts in the model is clash detection, which improves coordination and reduces on-site rework."
        },
        {
          type: "truefalse",
          q: "BIM offers no advantage for coordinating between different disciplines.",
          answer: false,
          explain: "Improved multi-discipline coordination is one of the most commonly cited advantages of BIM."
        },
        {
          type: "match",
          q: "Match each BIM benefit to a matching outcome.",
          pairs: [
            ["Clash detection", "Fewer conflicts on site"],
            ["Shared data", "Better coordination"],
            ["Lifecycle information", "Data reused in operation"]
          ],
          explain: "Each capability leads to a practical outcome: fewer conflicts, better coordination, and reusable operational data."
        },
        {
          type: "order",
          q: "Order these so a clash is handled the least costly way.",
          items: ["Find the clash in the coordinated model", "Adjust the design digitally", "Build correctly on site"],
          explain: "Catching and fixing a clash in the model first, then building, is far cheaper than fixing it after construction."
        }
      ]
    },
    {
      id: "l5",
      title: "The Federated Model",
      intro: "A federated model combines each discipline's separate model, such as architecture, structure, and services, into one coordinated whole for review, while each author keeps ownership of their own model.",
      questions: [
        {
          type: "mcq",
          q: "What is a federated model?",
          choices: [
            "Several discipline models combined into one coordinated whole for review",
            "A single file that erases all discipline models",
            "A model owned by one person only",
            "A 2D drawing set with no data"
          ],
          answer: 0,
          explain: "A federated model brings separate discipline models together into one coordinated view while each stays authored separately."
        },
        {
          type: "truefalse",
          q: "In a federated model, each discipline generally keeps ownership of and edits its own source model.",
          answer: true,
          explain: "Federation combines models for coordination, but each author retains and edits their own model."
        },
        {
          type: "fill",
          q: "Combining separate discipline models into one coordinated view is called ____.",
          answer: "federation",
          accept: ["federation", "federating", "a federated model"],
          explain: "Bringing the discipline models together for coordination is known as federation, producing a federated model."
        },
        {
          type: "match",
          q: "Match each discipline to the model it typically authors.",
          pairs: [
            ["Architect", "Architectural model"],
            ["Structural engineer", "Structural model"],
            ["MEP engineer", "Services model"]
          ],
          explain: "Each discipline authors its own model, and these are federated together for coordinated review."
        },
        {
          type: "mcq",
          q: "A key reason to federate models is to:",
          choices: [
            "Check how the disciplines fit together and spot clashes",
            "Prevent anyone from ever editing again",
            "Delete the structural model",
            "Hide the architecture from the team"
          ],
          answer: 0,
          explain: "Federation lets the team see how disciplines coordinate and detect clashes between them."
        },
        {
          type: "truefalse",
          q: "Federating models forces every discipline to work inside one single shared file with no separation.",
          answer: false,
          explain: "Federation combines separate models for review; the disciplines still keep their own distinct source models."
        },
        {
          type: "order",
          q: "Order the steps to produce a coordinated federated model.",
          items: ["Each discipline builds its own model", "Combine the models into one view", "Review and coordinate for clashes"],
          explain: "Disciplines author separately, the models are federated, and then the combined result is reviewed for coordination."
        }
      ]
    },
    {
      id: "l6",
      title: "Process, Not Just Software",
      intro: "BIM succeeds through people, process, and technology together. Tools alone do not deliver BIM; agreed workflows, standards, and skilled people are just as essential.",
      questions: [
        {
          type: "match",
          q: "Match each pillar of BIM to an example.",
          pairs: [
            ["People", "Trained, collaborating team members"],
            ["Process", "Agreed workflows and standards"],
            ["Technology", "The modeling software and tools"]
          ],
          explain: "BIM depends on all three pillars together: people, process, and technology, not technology alone."
        },
        {
          type: "mcq",
          q: "Which statement best reflects the nature of BIM?",
          choices: [
            "BIM is people, process, and technology working together",
            "BIM is only the software you buy",
            "BIM is only a file format",
            "BIM is only a 3D picture"
          ],
          answer: 0,
          explain: "BIM is delivered by people, process, and technology combined, not by any single one of them."
        },
        {
          type: "truefalse",
          q: "Simply buying modeling software is enough to say a team is doing BIM well.",
          answer: false,
          explain: "Without agreed processes, standards, and skilled people, owning software alone does not deliver good BIM."
        },
        {
          type: "fill",
          q: "Besides people and technology, BIM also relies on an agreed ____ with standards and workflows.",
          answer: "process",
          accept: ["process", "processes", "workflow", "workflows"],
          explain: "Agreed processes, standards, and workflows are essential alongside people and technology."
        },
        {
          type: "mcq",
          q: "Which item is an example of the 'process' pillar of BIM?",
          choices: [
            "An agreed naming and information workflow the team follows",
            "A laptop",
            "A rendered sunset image",
            "A single wall object"
          ],
          answer: 0,
          explain: "An agreed workflow, such as naming and information exchange rules, is part of the process pillar."
        },
        {
          type: "truefalse",
          q: "Skilled, collaborating people are an important part of successful BIM.",
          answer: true,
          explain: "People are one of the three pillars; skilled collaboration is essential for BIM to succeed."
        },
        {
          type: "order",
          q: "Order these to set up BIM well before modeling begins.",
          items: ["Agree the process and standards", "Train and organize the people", "Configure the technology and tools"],
          explain: "Strong BIM starts by agreeing process and standards, preparing people, and then setting up the tools."
        }
      ]
    },
    {
      id: "l7",
      title: "BIM Maturity Levels",
      intro: "Maturity levels describe how far a team's ways of working have advanced, from paper-based work (Level 0) toward increasingly integrated, collaborative use of shared information.",
      questions: [
        {
          type: "mcq",
          q: "What do BIM maturity levels describe?",
          choices: [
            "How advanced and collaborative a team's ways of working are",
            "The exact price of the software",
            "The height of the building",
            "The color of the model"
          ],
          answer: 0,
          explain: "Maturity levels describe how advanced and integrated the ways of working are, from paper toward full collaboration."
        },
        {
          type: "truefalse",
          q: "Level 0 maturity is associated with paper-based or unmanaged 2D work.",
          answer: true,
          explain: "Level 0 represents paper-based or unmanaged 2D drafting with little or no collaboration on shared data."
        },
        {
          type: "fill",
          q: "In the maturity idea, ____ 0 represents paper-based or unmanaged 2D working.",
          answer: "level",
          accept: ["level"],
          explain: "Level 0 is the starting point: paper-based or unmanaged 2D work with minimal collaboration."
        },
        {
          type: "mcq",
          q: "As maturity increases, ways of working generally move toward:",
          choices: [
            "More integrated collaboration around shared information",
            "Less sharing of information",
            "Only handwritten notes",
            "Abandoning all standards"
          ],
          answer: 0,
          explain: "Higher maturity means more integrated, collaborative working built around shared, managed information."
        },
        {
          type: "order",
          q: "Order these ways of working from lower to higher maturity.",
          items: ["Paper-based 2D drafting", "Managed 2D or 3D CAD files", "Collaborative work around shared information"],
          explain: "Maturity climbs from paper, to managed CAD, toward integrated collaboration on shared information."
        },
        {
          type: "match",
          q: "Match each maturity idea to its description.",
          pairs: [
            ["Level 0", "Paper-based, unmanaged 2D"],
            ["Higher maturity", "Integrated, collaborative working"]
          ],
          explain: "Level 0 is paper-based and unmanaged, while higher maturity means integrated, collaborative use of shared data."
        },
        {
          type: "truefalse",
          q: "Higher BIM maturity means a team shares and collaborates on information less than before.",
          answer: false,
          explain: "Higher maturity means more collaboration and sharing of managed information, not less."
        }
      ]
    },
    {
      id: "l8",
      title: "BIM Myths",
      intro: "Several myths surround BIM. It is not just 3D, not a single program, and not only for large projects. Clearing these up helps teams adopt BIM for the right reasons.",
      questions: [
        {
          type: "truefalse",
          q: "Myth: BIM is only about producing 3D geometry.",
          answer: false,
          explain: "This is a myth. BIM is about managing information across the lifecycle, with geometry as only one part."
        },
        {
          type: "truefalse",
          q: "Myth: BIM can only ever be done with one specific software program.",
          answer: false,
          explain: "This is a myth. BIM is a process that many tools can support, and openBIM formats let tools exchange data."
        },
        {
          type: "truefalse",
          q: "Myth: BIM is useful only for very large projects.",
          answer: false,
          explain: "This is a myth. Smaller projects can also benefit from the coordination and information BIM provides."
        },
        {
          type: "mcq",
          q: "Which statement is TRUE rather than a myth?",
          choices: [
            "BIM is a process for managing information, supported by various tools",
            "BIM is nothing more than a 3D picture",
            "BIM requires one single mandatory program",
            "BIM only helps skyscrapers"
          ],
          answer: 0,
          explain: "The true statement is that BIM is an information-management process supported by a range of tools."
        },
        {
          type: "fill",
          q: "It is a myth that BIM is just ____ geometry with no data behind it.",
          answer: "3d",
          accept: ["3d", "three dimensional", "three-dimensional"],
          explain: "Reducing BIM to just 3D geometry ignores the information that gives BIM most of its value."
        },
        {
          type: "match",
          q: "Match each BIM myth to the reality that corrects it.",
          pairs: [
            ["BIM is only 3D", "It is really about managing information"],
            ["BIM is one program", "Many tools can support the process"],
            ["BIM is only for big projects", "Small projects benefit too"]
          ],
          explain: "Each myth has a corrective reality: BIM is about information, is tool-agnostic, and helps projects of many sizes."
        },
        {
          type: "order",
          q: "Order these to correct a BIM misconception before adopting it.",
          items: ["Recognize the myth", "Learn the reality behind it", "Adopt BIM for the right reasons"],
          explain: "Clearing up a myth means naming it, understanding the reality, and then adopting BIM with correct expectations."
        }
      ]
    }
  ]
});
