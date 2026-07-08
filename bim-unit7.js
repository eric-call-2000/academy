window.ACADEMY.addUnit("bim", {
  id: "unit-7",
  title: "Open BIM & Data Exchange",
  color: "#a560e8",
  icon: "🔓",
  description: "Sharing model data between different software without lock-in.",
  lessons: [
    {
      id: "l49",
      title: "Interoperability",
      intro: "Interoperability is the ability of different software tools to exchange information reliably and use it without loss of meaning. In BIM, many disciplines use different applications, so models and data must move between them.",
      questions: [
        {
          type: "mcq",
          q: "What does interoperability mean in a BIM context?",
          choices: [
            "Running all software on the same operating system",
            "Different tools exchanging information reliably and using it meaningfully",
            "Storing every file in a single folder",
            "Using only one vendor for every discipline"
          ],
          answer: 1,
          explain: "Interoperability is about different software exchanging data reliably and being able to use it, not about a shared OS or single vendor."
        },
        {
          type: "truefalse",
          q: "Interoperability requires every team member to use the exact same modeling application.",
          answer: false,
          explain: "The whole point of interoperability is that teams can use different tools and still exchange usable information."
        },
        {
          type: "mcq",
          q: "Why is interoperability especially important on multi-discipline projects?",
          choices: [
            "Because architects, engineers, and contractors often use different software",
            "Because it makes files smaller",
            "Because it removes the need for coordination meetings",
            "Because it guarantees zero clashes"
          ],
          answer: 0,
          explain: "Different disciplines typically use different applications, so exchanging data between them is essential."
        },
        {
          type: "fill",
          q: "The ability of different tools to exchange and use information reliably is called ____.",
          answer: "interoperability",
          accept: ["interoperability"],
          explain: "Interoperability is the reliable exchange and use of information between different systems."
        },
        {
          type: "truefalse",
          q: "Poor interoperability can force teams to re-enter data manually, wasting time and introducing errors.",
          answer: true,
          explain: "When tools cannot exchange data cleanly, people re-key information, which is slow and error prone."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Interoperability", "Reliable exchange and use of information between tools"],
            ["Data re-entry", "Manually retyping information lost in exchange"],
            ["Native format", "A file format specific to one application"]
          ],
          explain: "Interoperability reduces data re-entry; native formats are tied to a single application."
        },
        {
          type: "order",
          q: "Order these steps of a typical cross-tool data exchange from first to last.",
          items: [
            "Author a model in one application",
            "Export the model to a shared format",
            "Import the shared file into another application",
            "Use the received data for coordination"
          ],
          explain: "You author, export to a shared format, import elsewhere, then use the data downstream."
        }
      ]
    },
    {
      id: "l50",
      title: "Proprietary vs Open Formats",
      intro: "Proprietary (native) formats are controlled by a single vendor and tied to their software. Open formats are published, neutral, and readable by many tools. Choosing open formats supports long-term access and exchange.",
      questions: [
        {
          type: "mcq",
          q: "What best describes a proprietary file format?",
          choices: [
            "A published neutral format any vendor can implement",
            "A format controlled by one vendor and tied to their software",
            "A format that never changes",
            "A format required by ISO 19650"
          ],
          answer: 1,
          explain: "Proprietary formats are owned and controlled by a single vendor and usually tied to that vendor's tools."
        },
        {
          type: "truefalse",
          q: "Open formats are published so that multiple vendors can read and write them.",
          answer: true,
          explain: "Open formats have public specifications, allowing many tools to support them."
        },
        {
          type: "mcq",
          q: "Which is a key advantage of open formats over proprietary ones?",
          choices: [
            "They always produce smaller files",
            "They reduce dependence on a single vendor",
            "They render 3D faster",
            "They are always newer"
          ],
          answer: 1,
          explain: "Open formats reduce vendor lock-in because they are not controlled by one company."
        },
        {
          type: "fill",
          q: "A format controlled by a single vendor and tied to their software is called a ____ format.",
          answer: "proprietary",
          accept: ["proprietary", "native"],
          explain: "Proprietary (or native) formats belong to a specific vendor's application."
        },
        {
          type: "match",
          q: "Match each format type to its description.",
          pairs: [
            ["Proprietary format", "Vendor-controlled and tied to one application"],
            ["Open format", "Published and readable by many tools"],
            ["Neutral format", "Not favoring any single vendor"]
          ],
          explain: "Open, neutral formats are published and vendor-independent; proprietary ones are not."
        },
        {
          type: "truefalse",
          q: "Using only proprietary formats can make it harder to read your data years later if that software is discontinued.",
          answer: true,
          explain: "If a vendor drops or changes a proprietary format, long-term access to the data can become difficult."
        },
        {
          type: "order",
          q: "Order these from most vendor-dependent to most vendor-independent.",
          items: [
            "Native format of a single application",
            "Exported format shared by a few vendors",
            "Published open standard format"
          ],
          explain: "A native format is most tied to one vendor; a published open standard is the most independent."
        },
        {
          type: "mcq",
          q: "Which of these is an example of an open, neutral BIM format?",
          choices: [
            "IFC",
            "A vendor-only project file",
            "A locked binary backup",
            "A screenshot image"
          ],
          answer: 0,
          explain: "IFC is the open, neutral BIM format; the others are vendor-specific or not model data."
        }
      ]
    },
    {
      id: "l51",
      title: "IFC",
      intro: "Industry Foundation Classes (IFC) is the open, neutral file format for exchanging BIM data. It is maintained by buildingSMART and lets models move between different tools without a proprietary link.",
      questions: [
        {
          type: "fill",
          q: "IFC stands for Industry Foundation ____.",
          answer: "classes",
          accept: ["classes"],
          explain: "IFC stands for Industry Foundation Classes."
        },
        {
          type: "mcq",
          q: "What is the main purpose of IFC?",
          choices: [
            "To render photorealistic images",
            "To exchange BIM data in an open, neutral way",
            "To replace project scheduling software",
            "To compress point clouds"
          ],
          answer: 1,
          explain: "IFC is designed as an open, neutral format for exchanging BIM information between tools."
        },
        {
          type: "truefalse",
          q: "IFC is a proprietary format owned by a single software vendor.",
          answer: false,
          explain: "IFC is an open, neutral format maintained by buildingSMART, not owned by one vendor."
        },
        {
          type: "mcq",
          q: "Which organization maintains the IFC standard?",
          choices: [
            "buildingSMART",
            "A single CAD vendor",
            "A national fire code body",
            "A cloud storage provider"
          ],
          answer: 0,
          explain: "buildingSMART maintains IFC as part of the openBIM effort."
        },
        {
          type: "truefalse",
          q: "IFC can carry both geometry and non-geometric information such as properties about elements.",
          answer: true,
          explain: "IFC represents geometry plus semantic data like element types and properties."
        },
        {
          type: "match",
          q: "Match each item to its role.",
          pairs: [
            ["IFC", "Open, neutral BIM exchange format"],
            ["buildingSMART", "Organization that maintains IFC"],
            ["Property set", "Grouped data attached to IFC elements"]
          ],
          explain: "IFC is the format, buildingSMART maintains it, and property sets carry element data."
        },
        {
          type: "order",
          q: "Order the steps to share a model with a partner using IFC.",
          items: [
            "Model the building in your authoring tool",
            "Export the model to IFC",
            "Send the IFC file to the partner",
            "Partner opens the IFC in their own tool"
          ],
          explain: "You model, export to IFC, send it, and the partner opens it in a different application."
        },
        {
          type: "mcq",
          q: "Why is IFC valuable for openBIM workflows?",
          choices: [
            "It ties every team to one vendor",
            "It lets different tools exchange model data without a proprietary link",
            "It hides the model from other disciplines",
            "It removes the need for a CDE"
          ],
          answer: 1,
          explain: "IFC enables neutral exchange so teams are not locked into a single vendor's format."
        }
      ]
    },
    {
      id: "l52",
      title: "buildingSMART & openBIM",
      intro: "buildingSMART is the organization behind IFC and the openBIM movement. openBIM promotes open standards and neutral formats so that data can flow across tools and organizations without lock-in.",
      questions: [
        {
          type: "mcq",
          q: "What is buildingSMART best known for?",
          choices: [
            "Selling a proprietary modeling application",
            "Maintaining open standards like IFC for openBIM",
            "Certifying construction site safety",
            "Publishing national building codes"
          ],
          answer: 1,
          explain: "buildingSMART maintains open standards such as IFC and drives the openBIM approach."
        },
        {
          type: "truefalse",
          q: "openBIM is an approach that promotes open standards and neutral formats to avoid lock-in.",
          answer: true,
          explain: "openBIM emphasizes open, vendor-neutral standards so data can be shared freely."
        },
        {
          type: "fill",
          q: "The organization that maintains IFC and promotes open standards is ____.",
          answer: "buildingsmart",
          accept: ["buildingsmart", "building smart"],
          explain: "buildingSMART maintains IFC and champions openBIM."
        },
        {
          type: "mcq",
          q: "Which of these best captures the goal of openBIM?",
          choices: [
            "Locking each discipline into one vendor",
            "Enabling collaboration using shared open standards",
            "Eliminating the need for models",
            "Making all data private and unreadable"
          ],
          answer: 1,
          explain: "openBIM aims to enable collaboration through shared, open, neutral standards."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["buildingSMART", "Body behind IFC and openBIM"],
            ["openBIM", "Approach using open, neutral standards"],
            ["IFC", "Open BIM exchange format"]
          ],
          explain: "buildingSMART leads openBIM, which relies on open formats such as IFC."
        },
        {
          type: "truefalse",
          q: "openBIM standards are meant to work with only one specific software product.",
          answer: false,
          explain: "openBIM is deliberately vendor-neutral so many products can participate."
        },
        {
          type: "mcq",
          q: "Besides IFC, which of these is an open standard associated with buildingSMART?",
          choices: [
            "BCF (BIM Collaboration Format)",
            "A vendor's proprietary backup file",
            "A spreadsheet macro",
            "A rendering plugin"
          ],
          answer: 0,
          explain: "BCF is an open buildingSMART standard for exchanging model issues between tools."
        },
        {
          type: "order",
          q: "Order these from broadest concept to most specific deliverable.",
          items: [
            "openBIM as an overall approach",
            "buildingSMART as the body that maintains its standards",
            "IFC as an open exchange format",
            "An IFC file exported for one project"
          ],
          explain: "openBIM is the approach, buildingSMART maintains its standards, IFC is one such format, and an exported IFC file is a specific deliverable."
        }
      ]
    },
    {
      id: "l53",
      title: "COBie",
      intro: "COBie (Construction Operations Building Information Exchange) is a specification for delivering asset and handover data. It structures information about spaces and equipment, often as a spreadsheet, for use in facility operations.",
      questions: [
        {
          type: "mcq",
          q: "What is COBie primarily used to deliver?",
          choices: [
            "Photorealistic renderings",
            "Asset and handover information for operations",
            "Structural analysis results",
            "Point cloud scans"
          ],
          answer: 1,
          explain: "COBie is a specification for delivering asset and handover data, useful in facility management."
        },
        {
          type: "truefalse",
          q: "COBie data is often delivered as a structured spreadsheet.",
          answer: true,
          explain: "COBie is commonly exchanged as a spreadsheet organized into defined sheets and columns."
        },
        {
          type: "mcq",
          q: "Which type of information is COBie most focused on?",
          choices: [
            "Detailed 3D geometry",
            "Asset data such as equipment, spaces, and warranties",
            "Live sensor streams",
            "Camera animation paths"
          ],
          answer: 1,
          explain: "COBie focuses on non-graphical asset and handover data rather than detailed geometry."
        },
        {
          type: "fill",
          q: "COBie is a specification for delivering asset and ____ data.",
          answer: "handover",
          accept: ["handover", "hand over", "hand-over"],
          explain: "COBie supports the handover of asset information from construction to operations."
        },
        {
          type: "truefalse",
          q: "COBie is mainly intended to replace the 3D coordination model.",
          answer: false,
          explain: "COBie complements the model by structuring handover data; it does not replace the 3D model."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["COBie", "Specification for asset and handover data"],
            ["Handover", "Transfer of information to operations"],
            ["Facility management", "Ongoing operation and upkeep of the asset"]
          ],
          explain: "COBie feeds handover data into facility management and operations."
        },
        {
          type: "order",
          q: "Order these lifecycle steps where COBie data is built up and used.",
          items: [
            "Design defines spaces and systems",
            "Construction records installed equipment",
            "Handover delivers the COBie data",
            "Operations uses the data for maintenance"
          ],
          explain: "COBie data accrues through design and construction, is handed over, then used in operations."
        }
      ]
    },
    {
      id: "l54",
      title: "BCF",
      intro: "The BIM Collaboration Format (BCF) is an open standard for exchanging issues and clashes between tools. Instead of sending whole models, BCF sends lightweight issue records with views, comments, and locations.",
      questions: [
        {
          type: "fill",
          q: "BCF stands for BIM ____ Format.",
          answer: "collaboration",
          accept: ["collaboration"],
          explain: "BCF stands for BIM Collaboration Format."
        },
        {
          type: "mcq",
          q: "What does BCF exchange between tools?",
          choices: [
            "Entire model geometry every time",
            "Issues and clashes as lightweight records",
            "Rendering settings",
            "License keys"
          ],
          answer: 1,
          explain: "BCF exchanges issues and clashes as compact records rather than full models."
        },
        {
          type: "truefalse",
          q: "A key benefit of BCF is that you can share an issue without sending the whole model.",
          answer: true,
          explain: "BCF communicates issues with views and locations, so the full model does not need to travel."
        },
        {
          type: "mcq",
          q: "Which of these does a BCF issue typically include?",
          choices: [
            "A saved viewpoint, a comment, and the issue location",
            "A full material library",
            "The entire project schedule",
            "The vendor's source code"
          ],
          answer: 0,
          explain: "A BCF issue carries a viewpoint, comments, and the location of the problem."
        },
        {
          type: "match",
          q: "Match each item to its role.",
          pairs: [
            ["BCF", "Open format for exchanging model issues"],
            ["Viewpoint", "Saved camera view showing the issue"],
            ["Comment", "Discussion attached to an issue"]
          ],
          explain: "BCF bundles a viewpoint and comments so teams can discuss an issue precisely."
        },
        {
          type: "truefalse",
          q: "BCF is a proprietary format that only one clash-detection tool can read.",
          answer: false,
          explain: "BCF is an open buildingSMART standard supported by many tools."
        },
        {
          type: "order",
          q: "Order the steps of a BCF issue workflow.",
          items: [
            "Detect a clash in the model",
            "Create a BCF issue with a viewpoint and comment",
            "Send the BCF file to the responsible party",
            "They open the issue and resolve it in their tool"
          ],
          explain: "You find a clash, capture it as a BCF issue, send it, and the other party resolves it."
        }
      ]
    },
    {
      id: "l55",
      title: "Why Open Matters",
      intro: "Open formats help avoid vendor lock-in and keep data readable over the long term. Since built assets last for decades, being able to read the data long after the original software changes is a real advantage.",
      questions: [
        {
          type: "mcq",
          q: "What is vendor lock-in?",
          choices: [
            "Being dependent on one vendor because switching is hard or costly",
            "A security feature that locks files",
            "A type of open standard",
            "A method of clash detection"
          ],
          answer: 0,
          explain: "Vendor lock-in means you are stuck with one vendor because moving away is difficult or expensive."
        },
        {
          type: "truefalse",
          q: "Open formats make it easier to read project data years later, even if software changes.",
          answer: true,
          explain: "Because open formats are published and neutral, data stays readable over the long term."
        },
        {
          type: "mcq",
          q: "Why does long-term data readability matter for buildings?",
          choices: [
            "Buildings are demolished within a year",
            "Buildings can operate for decades, long after software changes",
            "Data is only needed during design",
            "Owners never reuse project data"
          ],
          answer: 1,
          explain: "Assets last decades, so owners need data that remains readable well beyond the original software."
        },
        {
          type: "fill",
          q: "Being stuck with one vendor because switching is costly is called vendor ____.",
          answer: "lock-in",
          accept: ["lock-in", "lockin", "lock in"],
          explain: "That dependency is known as vendor lock-in, which open formats help avoid."
        },
        {
          type: "match",
          q: "Match each idea to its benefit of using open formats.",
          pairs: [
            ["Avoiding lock-in", "Freedom to change tools later"],
            ["Long-term readability", "Access to data decades from now"],
            ["Neutral exchange", "Sharing across many disciplines"]
          ],
          explain: "Open formats reduce lock-in, protect long-term access, and support neutral exchange."
        },
        {
          type: "truefalse",
          q: "Relying only on a single proprietary format guarantees your data will always be readable.",
          answer: false,
          explain: "If that proprietary software is discontinued or changed, the data may become hard to read."
        },
        {
          type: "order",
          q: "Order these from short-term convenience to long-term data resilience.",
          items: [
            "Keep data only in a single proprietary format",
            "Export key data to an open format for archiving",
            "Maintain open-format archives across the asset lifecycle"
          ],
          explain: "Moving from proprietary-only toward maintained open archives increases long-term resilience."
        }
      ]
    },
    {
      id: "l56",
      title: "Data Loss in Exchange",
      intro: "Moving data between formats can lose information when the target format does not support every concept from the source. Understanding where loss happens helps teams plan exchanges and verify what actually transferred.",
      questions: [
        {
          type: "mcq",
          q: "Why can information be lost when moving between formats?",
          choices: [
            "Files always corrupt during transfer",
            "The target format may not support every concept from the source",
            "Open formats delete data on purpose",
            "Exchange is impossible between different tools"
          ],
          answer: 1,
          explain: "Loss happens when the receiving format cannot represent everything the source contained."
        },
        {
          type: "truefalse",
          q: "You should verify what transferred after an exchange rather than assume everything came through.",
          answer: true,
          explain: "Checking the result catches missing or altered data before it causes downstream problems."
        },
        {
          type: "mcq",
          q: "Which practice most helps reduce surprises from data loss?",
          choices: [
            "Never exporting to open formats",
            "Agreeing on exchange requirements and validating the result",
            "Deleting the original model after export",
            "Ignoring property data entirely"
          ],
          answer: 1,
          explain: "Defining what must be exchanged and validating the output limits unexpected data loss."
        },
        {
          type: "fill",
          q: "When a target format cannot represent everything from the source, the result is data ____.",
          answer: "loss",
          accept: ["loss"],
          explain: "This mismatch causes data loss during exchange."
        },
        {
          type: "truefalse",
          q: "Data loss only ever affects geometry, never properties or relationships.",
          answer: false,
          explain: "Properties, relationships, and other non-graphical data can also be lost, not just geometry."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Data loss", "Information not carried into the target format"],
            ["Validation", "Checking that the exchange transferred correctly"],
            ["Exchange requirement", "Agreed definition of what must transfer"]
          ],
          explain: "Exchange requirements plus validation help detect and limit data loss."
        },
        {
          type: "order",
          q: "Order the steps of a careful data exchange to guard against loss.",
          items: [
            "Agree on what information must be exchanged",
            "Export to the shared format",
            "Import into the receiving tool",
            "Validate that the required data arrived"
          ],
          explain: "Define requirements, export, import, then validate the result to catch any loss."
        }
      ]
    }
  ]
});
