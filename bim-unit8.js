window.ACADEMY.addUnit("bim", {
  id: "unit-8",
  title: "BIM Across the Lifecycle",
  color: "#f25f9c",
  icon: "🔄",
  description: "How BIM delivers value from first design through operating the building.",
  lessons: [
    {
      id: "l57",
      title: "The Asset Lifecycle",
      intro: "A built asset moves through design, construction, and a long operation phase. BIM aims to carry useful information across all of these stages instead of losing it at each handoff.",
      questions: [
        {
          type: "mcq",
          q: "Which sequence best describes the broad phases of a built asset's life?",
          choices: ["Design, construction, operation", "Operation, design, demolition", "Construction, design, tender", "Marketing, sales, storage"],
          answer: 0,
          explain: "An asset is generally designed, then constructed, then operated (used and maintained) for many years."
        },
        {
          type: "truefalse",
          q: "For most buildings, the operation phase lasts far longer than design and construction combined.",
          answer: true,
          explain: "Design and construction take months or a few years, but a building may be operated for decades."
        },
        {
          type: "mcq",
          q: "What is a key promise of BIM across the lifecycle?",
          choices: ["Information is carried forward instead of lost at each handoff", "Only the design team ever sees the model", "Paper drawings replace all data", "Costs are hidden from the owner"],
          answer: 0,
          explain: "BIM's lifecycle value comes from reusing information downstream rather than recreating it each phase."
        },
        {
          type: "fill",
          q: "The longest phase of a typical building's life is usually ____.",
          answer: "operation",
          accept: ["operation", "operations", "use", "the operation phase"],
          explain: "Once built, a building is operated and maintained for a very long time compared to the build itself."
        },
        {
          type: "order",
          q: "Order these lifecycle phases from earliest to latest.",
          items: ["Design", "Construction", "Operation"],
          explain: "The natural order is to design the asset, build it, then operate it."
        },
        {
          type: "match",
          q: "Match each lifecycle phase to what happens in it.",
          pairs: [
            ["Design", "Deciding what to build and how"],
            ["Construction", "Physically building the asset"],
            ["Operation", "Running and maintaining the finished asset"]
          ],
          explain: "Each phase has a distinct purpose, and BIM tries to connect the information across them."
        },
        {
          type: "truefalse",
          q: "Information created during design has no possible value once the building is in operation.",
          answer: false,
          explain: "Design and construction data can be very useful for operating and maintaining the building later."
        },
        {
          type: "mcq",
          q: "Why do handoffs between phases matter so much for BIM?",
          choices: ["Information can be lost or re-entered by hand at each handoff", "They make the model smaller", "They remove the need for an owner", "They delete the schedule"],
          answer: 0,
          explain: "Traditionally each handoff loses data; BIM tries to pass structured information forward instead."
        }
      ]
    },
    {
      id: "l58",
      title: "BIM in Design",
      intro: "In design, BIM supports coordinating disciplines, running analysis on the model, and comparing options before anything is built.",
      questions: [
        {
          type: "mcq",
          q: "What does coordination in design BIM mainly help with?",
          choices: ["Finding conflicts between disciplines before construction", "Printing invoices", "Hiring the site crew", "Ordering coffee"],
          answer: 0,
          explain: "Coordination brings discipline models together so clashes and conflicts are caught early."
        },
        {
          type: "truefalse",
          q: "Comparing design options is easier when they are modeled, because you can measure and analyze each one.",
          answer: true,
          explain: "A model lets you quantify area, cost, energy, and other factors to compare options objectively."
        },
        {
          type: "fill",
          q: "Running energy or daylight studies on a model is a form of design ____.",
          answer: "analysis",
          accept: ["analysis", "simulation"],
          explain: "Analysis uses the model to predict performance such as energy use or daylight."
        },
        {
          type: "mcq",
          q: "Which is an example of analysis done on a design model?",
          choices: ["Estimating energy performance", "Signing the lease", "Painting the walls", "Mailing the keys"],
          answer: 0,
          explain: "Energy, structural, and daylight studies are analyses run against the model geometry and data."
        },
        {
          type: "match",
          q: "Match each design BIM activity to its purpose.",
          pairs: [
            ["Coordination", "Catch clashes between disciplines"],
            ["Analysis", "Predict performance like energy or light"],
            ["Option comparison", "Choose between design alternatives"]
          ],
          explain: "Design BIM supports coordinating, analyzing, and comparing before construction begins."
        },
        {
          type: "order",
          q: "Order a simple design coordination workflow.",
          items: ["Combine discipline models", "Run clash detection", "Review the issues found", "Resolve the conflicts in design"],
          explain: "You federate the models, detect clashes, review them, then fix the design."
        },
        {
          type: "truefalse",
          q: "Design BIM only produces pretty pictures and cannot support real analysis.",
          answer: false,
          explain: "The information in the model supports genuine analysis such as energy, structural, and cost studies."
        },
        {
          type: "mcq",
          q: "Why is it valuable to compare options early in design?",
          choices: ["Changes are cheaper and easier before construction", "The building is already finished", "It makes the model bigger", "It avoids ever needing a client"],
          answer: 0,
          explain: "Early changes cost far less than changes made once construction has started."
        }
      ]
    },
    {
      id: "l59",
      title: "BIM in Construction",
      intro: "During construction, BIM links the model to time (4D) and cost (5D), supports prefabrication, and puts model information into the hands of people in the field.",
      questions: [
        {
          type: "mcq",
          q: "What does 4D BIM add to the 3D model?",
          choices: ["Time and scheduling", "Extra colors", "More paper drawings", "A second owner"],
          answer: 0,
          explain: "4D links the geometry to time, so you can see and plan the construction sequence."
        },
        {
          type: "mcq",
          q: "What does 5D BIM add?",
          choices: ["Cost information", "Wind speed", "Employee names", "Paint brands"],
          answer: 0,
          explain: "5D associates cost data with model elements to support estimating and cost control."
        },
        {
          type: "truefalse",
          q: "Prefabrication can benefit from an accurate model because components can be built off site to fit precisely.",
          answer: true,
          explain: "A reliable model lets fabricators build accurate parts off site that install cleanly on site."
        },
        {
          type: "fill",
          q: "Linking the model to the construction schedule is known as ____ BIM.",
          answer: "4d",
          accept: ["4d", "four d", "4-d"],
          explain: "4D BIM connects model elements to time so the build sequence can be simulated."
        },
        {
          type: "match",
          q: "Match each BIM dimension to what it adds.",
          pairs: [
            ["3D", "Geometry"],
            ["4D", "Time and scheduling"],
            ["5D", "Cost"]
          ],
          explain: "3D is geometry, 4D adds time, and 5D adds cost information."
        },
        {
          type: "order",
          q: "Order a simple prefabrication flow that uses the model.",
          items: ["Model the component accurately", "Fabricate it off site", "Deliver it to site", "Install it in place"],
          explain: "An accurate model drives off-site fabrication, delivery, and precise installation."
        },
        {
          type: "truefalse",
          q: "Field crews can use model information on tablets to check what to build.",
          answer: true,
          explain: "Taking the model to the field lets crews reference current, coordinated information on site."
        },
        {
          type: "mcq",
          q: "Why is using the model in the field valuable?",
          choices: ["Crews work from current, coordinated information", "It removes the need to build anything", "It hides the schedule", "It deletes the cost data"],
          answer: 0,
          explain: "Field access keeps the crew aligned with the latest coordinated design and reduces rework."
        }
      ]
    },
    {
      id: "l60",
      title: "Handover",
      intro: "Handover is where the project team delivers the finished asset to the owner, including as-built models and structured asset data rather than only paper.",
      questions: [
        {
          type: "mcq",
          q: "What is an as-built model?",
          choices: ["A model updated to reflect what was actually built", "A model of a different project", "A blank template", "A cost report only"],
          answer: 0,
          explain: "As-built (or as-constructed) models capture what was really built, including on-site changes."
        },
        {
          type: "truefalse",
          q: "Good handover delivers structured asset data to the owner, not just drawings.",
          answer: true,
          explain: "Modern handover includes organized data about equipment and spaces the owner can actually use."
        },
        {
          type: "fill",
          q: "A common specification for delivering structured asset and handover data is ____.",
          answer: "cobie",
          accept: ["cobie", "co-bie"],
          explain: "COBie is a specification for delivering asset and handover information, often as a spreadsheet."
        },
        {
          type: "mcq",
          q: "Who is the main recipient of the handover deliverables?",
          choices: ["The owner or operator", "The paint supplier", "A random passerby", "The design software vendor"],
          answer: 0,
          explain: "Handover transfers the asset and its information to the owner, who will operate it."
        },
        {
          type: "match",
          q: "Match each handover item to what it is.",
          pairs: [
            ["As-built model", "Model matching what was built"],
            ["COBie", "Spec for asset and handover data"],
            ["Owner", "Party who receives the asset"]
          ],
          explain: "Handover typically pairs an as-built model with structured data, delivered to the owner."
        },
        {
          type: "order",
          q: "Order a simple handover flow.",
          items: ["Update the model to as-built", "Compile the asset data", "Deliver to the owner", "Owner uses it for operations"],
          explain: "You finalize the as-built model, gather the data, hand it over, and the owner puts it to use."
        },
        {
          type: "truefalse",
          q: "COBie data is always delivered only as a 3D geometric model and never as a spreadsheet.",
          answer: false,
          explain: "COBie is frequently delivered as a structured spreadsheet, though it can come from a model."
        },
        {
          type: "mcq",
          q: "Why does structured handover data matter to an owner?",
          choices: ["It makes operating and maintaining the asset easier", "It makes the building taller", "It replaces the roof", "It ends the lifecycle"],
          answer: 0,
          explain: "Ready-to-use asset data helps the owner run and maintain the building efficiently."
        }
      ]
    },
    {
      id: "l61",
      title: "BIM for Operations",
      intro: "Once handed over, the model and its data can support facility management: finding equipment, planning maintenance, and understanding spaces throughout the building's life.",
      questions: [
        {
          type: "mcq",
          q: "How can operations teams use BIM data?",
          choices: ["To locate equipment and plan maintenance", "To design a new city", "To replace the owner", "To delete the building"],
          answer: 0,
          explain: "Operators use asset data to find equipment, schedule maintenance, and manage spaces."
        },
        {
          type: "truefalse",
          q: "Higher BIM dimensions such as 6D and 7D are commonly linked to sustainability and operations, but their exact definitions vary across the industry.",
          answer: true,
          explain: "3D, 4D (time), and 5D (cost) are well established, but 6D and 7D are less standardized and their meanings genuinely differ between sources."
        },
        {
          type: "fill",
          q: "Using the model and its data to run and maintain a building is part of facility ____.",
          answer: "management",
          accept: ["management", "operations"],
          explain: "Facility management uses the handed-over information to operate and maintain the asset."
        },
        {
          type: "mcq",
          q: "Which is a realistic operations use of a good asset dataset?",
          choices: ["Knowing a pump's model and service history", "Predicting tomorrow's weather", "Choosing the owner's lunch", "Rendering a marketing video"],
          answer: 0,
          explain: "Structured asset data lets operators look up equipment details and maintenance records."
        },
        {
          type: "match",
          q: "Match each operations task to how BIM data helps.",
          pairs: [
            ["Maintenance", "Plan service from asset records"],
            ["Space management", "Understand and allocate rooms"],
            ["Asset lookup", "Find equipment details quickly"]
          ],
          explain: "Operations relies on the handed-over data to maintain equipment, manage space, and look up assets."
        },
        {
          type: "order",
          q: "Order a simple maintenance workflow that uses asset data.",
          items: ["Find the asset in the data", "Check its service history", "Schedule the maintenance", "Record the work done"],
          explain: "Good operations data lets you find the asset, review history, plan work, and log it."
        },
        {
          type: "truefalse",
          q: "Once a building is in operation, the model and its data become completely useless.",
          answer: false,
          explain: "During operation the model and data are valuable for maintenance, space planning, and asset lookup."
        },
        {
          type: "mcq",
          q: "Why keep the asset data current during operations?",
          choices: ["So future decisions rely on accurate information", "So the building gets shorter", "So the owner can ignore it", "So the model deletes itself"],
          answer: 0,
          explain: "Up-to-date data keeps maintenance, upgrades, and space decisions grounded in reality."
        }
      ]
    },
    {
      id: "l62",
      title: "Digital Twins",
      intro: "A digital twin is a live, data-connected virtual replica of a physical asset. It goes beyond a static model by linking to real, current data such as sensors.",
      questions: [
        {
          type: "mcq",
          q: "What best describes a digital twin?",
          choices: ["A live, data-connected virtual replica of a physical asset", "A paper drawing", "A single photograph", "A blank spreadsheet"],
          answer: 0,
          explain: "A digital twin is a virtual replica kept connected to live data from the real asset."
        },
        {
          type: "truefalse",
          q: "A digital twin is different from a static as-built model because it stays connected to live data.",
          answer: true,
          explain: "The live data connection is what separates a digital twin from a static model."
        },
        {
          type: "fill",
          q: "A digital twin often takes in real-time readings from ____ on the physical asset.",
          answer: "sensors",
          accept: ["sensors", "sensor", "iot sensors"],
          explain: "Sensors feed live data into the twin so it reflects the current state of the asset."
        },
        {
          type: "mcq",
          q: "Which capability does a digital twin add beyond a plain 3D model?",
          choices: ["A live connection to current operating data", "A larger file only", "More paper copies", "A different color scheme"],
          answer: 0,
          explain: "The defining addition is the live link to current data, not just extra geometry."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Static model", "A fixed snapshot of the asset"],
            ["Digital twin", "A live, data-connected replica"],
            ["Sensor", "A device sending live readings"]
          ],
          explain: "A digital twin extends a static model with live data, often from sensors."
        },
        {
          type: "order",
          q: "Order how a digital twin is typically kept current.",
          items: ["Install sensors on the asset", "Stream their data to the twin", "The twin reflects the current state", "Operators act on the insight"],
          explain: "Sensors feed data to the twin, which mirrors reality so operators can respond."
        },
        {
          type: "truefalse",
          q: "Every 3D model automatically qualifies as a digital twin.",
          answer: false,
          explain: "Without a live data connection, a 3D model is just a model, not a digital twin."
        },
        {
          type: "mcq",
          q: "Why is a live data connection central to a digital twin?",
          choices: ["It lets the virtual replica reflect the real asset's current state", "It makes the asset invisible", "It removes the need for the asset", "It stops all sensors"],
          answer: 0,
          explain: "The connection keeps the twin synchronized with what is actually happening on the asset."
        }
      ]
    },
    {
      id: "l63",
      title: "Scan-to-BIM",
      intro: "Scan-to-BIM captures an existing space with laser scanners, producing a point cloud that is then used to build an accurate model of what is really there.",
      questions: [
        {
          type: "mcq",
          q: "What does a laser scanner produce as its raw output?",
          choices: ["A point cloud", "A finished IFC file", "A cost estimate", "A paper drawing"],
          answer: 0,
          explain: "Laser scanning captures many measured points, forming a point cloud of the space."
        },
        {
          type: "fill",
          q: "The dense set of measured points captured by a scanner is called a point ____.",
          answer: "cloud",
          accept: ["cloud"],
          explain: "A point cloud is the collection of 3D points a laser scanner measures."
        },
        {
          type: "truefalse",
          q: "Scan-to-BIM is especially useful for capturing existing buildings that lack accurate models.",
          answer: true,
          explain: "For older or undocumented buildings, scanning provides accurate current conditions to model from."
        },
        {
          type: "mcq",
          q: "What is the goal of the Scan-to-BIM process?",
          choices: ["Turn scan data into a usable model", "Erase the building", "Print more paper", "Hide the point cloud"],
          answer: 0,
          explain: "The point is to convert captured reality into a structured, usable model."
        },
        {
          type: "match",
          q: "Match each Scan-to-BIM term to its meaning.",
          pairs: [
            ["Laser scanner", "Device that measures the space"],
            ["Point cloud", "Dense set of measured points"],
            ["Model", "Structured result built from the scan"]
          ],
          explain: "A scanner captures a point cloud, which is used to build a structured model."
        },
        {
          type: "order",
          q: "Order the basic Scan-to-BIM workflow.",
          items: ["Scan the existing space", "Generate the point cloud", "Model elements from the cloud", "Use the resulting model"],
          explain: "You scan, produce a point cloud, model from it, then use the model."
        },
        {
          type: "truefalse",
          q: "A point cloud is already a finished, intelligent BIM model on its own.",
          answer: false,
          explain: "A point cloud is raw measured points; it must be interpreted and modeled to become BIM."
        },
        {
          type: "mcq",
          q: "Why capture existing conditions before renovation work?",
          choices: ["To design accurately against what really exists", "To make the walls thicker", "To avoid ever measuring", "To delete the building"],
          answer: 0,
          explain: "Accurate existing conditions let designers plan renovations that fit the real space."
        }
      ]
    },
    {
      id: "l64",
      title: "The Future of BIM",
      intro: "BIM keeps evolving with cloud collaboration, automation of repetitive tasks, and AI-assisted analysis, while its core value remains connected, reliable information.",
      questions: [
        {
          type: "mcq",
          q: "Which trend is shaping the future of BIM?",
          choices: ["Cloud-based collaboration", "Removing all data", "Only paper drawings", "Working fully offline forever"],
          answer: 0,
          explain: "Cloud collaboration lets distributed teams work from shared, current information."
        },
        {
          type: "truefalse",
          q: "Automation can help by handling repetitive modeling and checking tasks.",
          answer: true,
          explain: "Automation is well suited to repetitive, rule-based work such as routine checks."
        },
        {
          type: "fill",
          q: "Using algorithms to assist analysis and pattern-finding in BIM often involves ____.",
          answer: "ai",
          accept: ["ai", "artificial intelligence", "machine learning"],
          explain: "AI and machine learning can assist with analysis, prediction, and pattern-finding."
        },
        {
          type: "mcq",
          q: "Even as tools change, what stays at the core of BIM's value?",
          choices: ["Connected, reliable information", "The largest possible file size", "Avoiding all collaboration", "Never sharing data"],
          answer: 0,
          explain: "BIM's enduring value is trustworthy, connected information, whatever the tooling."
        },
        {
          type: "match",
          q: "Match each future direction to what it enables.",
          pairs: [
            ["Cloud", "Shared collaboration from anywhere"],
            ["Automation", "Handling repetitive tasks"],
            ["AI", "Assisting analysis and prediction"]
          ],
          explain: "Cloud, automation, and AI each extend how BIM information is created and used."
        },
        {
          type: "order",
          q: "Order how a new capability tends to reach everyday BIM practice.",
          items: ["Explore the new technology", "Pilot it on a project", "Refine the workflow", "Adopt it more widely"],
          explain: "New capabilities are usually explored, piloted, refined, then adopted broadly."
        },
        {
          type: "truefalse",
          q: "New tools remove the need for reliable, well-structured information.",
          answer: false,
          explain: "Better tools still depend on good information; reliable data stays essential."
        },
        {
          type: "mcq",
          q: "Why treat BIM as a process rather than just software?",
          choices: ["Because value comes from managing information, not one tool", "Because software never changes", "Because data is unimportant", "Because owners are irrelevant"],
          answer: 0,
          explain: "BIM is fundamentally about managing information across the lifecycle, beyond any single tool."
        }
      ]
    }
  ]
});
