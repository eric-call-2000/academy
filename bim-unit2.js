window.ACADEMY.addUnit("bim", {
  id: "unit-2",
  title: "The BIM Dimensions",
  color: "#1cb0f6",
  icon: "📊",
  description: "The layers of information (3D through 7D) that add value to a model.",
  lessons: [
    {
      id: "l9",
      title: "What Are BIM Dimensions?",
      intro: "BIM dimensions are extra layers of information attached to a model beyond its shape. Each higher dimension links the geometry to new kinds of data, such as time, cost, or operations.",
      questions: [
        {
          type: "mcq",
          q: "What does a BIM dimension add beyond the 3D geometry?",
          choices: [
            "An extra layer of information linked to the model",
            "A brighter color for each element",
            "A second copy of the same geometry",
            "A larger file size only"
          ],
          answer: 0,
          explain: "Each dimension attaches a new kind of information, such as scheduling or cost, to the coordinated geometry."
        },
        {
          type: "truefalse",
          q: "BIM dimensions are only about making the model look more detailed.",
          answer: false,
          explain: "Dimensions add information and connections, not just visual detail. They tie the model to time, cost, and operations data."
        },
        {
          type: "fill",
          q: "The base of the dimensions is the coordinated ____ model that describes geometry.",
          answer: "3D",
          accept: ["3d", "three-dimensional", "three dimensional"],
          explain: "3D is the geometric foundation that every higher dimension builds on."
        },
        {
          type: "order",
          q: "Put these BIM dimensions in ascending order.",
          items: ["3D", "4D", "5D", "6D"],
          explain: "Dimensions count up from 3D geometry to 4D time, 5D cost, and then 6D."
        },
        {
          type: "match",
          q: "Match each dimension to the kind of information it commonly adds.",
          pairs: [
            ["3D", "Geometry"],
            ["4D", "Time"],
            ["5D", "Cost"]
          ],
          explain: "3D is geometry, 4D links time and scheduling, and 5D links cost information."
        },
        {
          type: "mcq",
          q: "Why is it useful to think of BIM in terms of dimensions?",
          choices: [
            "It organizes the different kinds of data a model can carry",
            "It forces every project to use the same software",
            "It replaces the need for a project team",
            "It removes the geometry from the model"
          ],
          answer: 0,
          explain: "The dimension idea is a helpful way to describe the layers of information a model can hold and share."
        },
        {
          type: "truefalse",
          q: "Higher dimensions build on top of the 3D model rather than replacing it.",
          answer: true,
          explain: "Each dimension adds a layer of linked information; the coordinated geometry remains the foundation."
        },
        {
          type: "fill",
          q: "Linking the model to the construction schedule is known as ____ BIM.",
          answer: "4D",
          accept: ["4d", "four-dimensional", "four dimensional"],
          explain: "4D connects the model to time and construction sequencing."
        }
      ]
    },
    {
      id: "l10",
      title: "3D: Geometry",
      intro: "3D is the coordinated three-dimensional model that represents the physical shape of the building. It is the shared geometric foundation that the whole team works from.",
      questions: [
        {
          type: "mcq",
          q: "What does the 3D dimension of BIM primarily represent?",
          choices: [
            "The physical geometry of the building",
            "The construction schedule",
            "The maintenance manuals",
            "The final invoice"
          ],
          answer: 0,
          explain: "3D is the coordinated geometry that describes the shape and spatial arrangement of the asset."
        },
        {
          type: "truefalse",
          q: "A coordinated 3D model can help teams spot spatial clashes between systems.",
          answer: true,
          explain: "Bringing disciplines into one coordinated model makes it possible to detect where elements collide in space."
        },
        {
          type: "fill",
          q: "The coordinated three-dimensional model represents the physical ____ of the building.",
          answer: "geometry",
          accept: ["geometry", "shape", "form"],
          explain: "3D is about geometry, meaning the shape and spatial layout of the asset."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["3D model", "Coordinated geometry"],
            ["Clash", "Two elements occupying the same space"],
            ["Coordination", "Combining disciplines into one model"]
          ],
          explain: "The 3D model holds coordinated geometry, coordination combines disciplines, and a clash is where elements overlap in space."
        },
        {
          type: "mcq",
          q: "Which of these is a benefit of a well-coordinated 3D model?",
          choices: [
            "Fewer surprises and conflicts discovered during construction",
            "A guarantee that the project needs no schedule",
            "Automatic cost data with no input",
            "No need for any drawings ever again"
          ],
          answer: 0,
          explain: "Coordinating geometry up front reduces conflicts that would otherwise be found late during construction."
        },
        {
          type: "truefalse",
          q: "The 3D model is only a picture and cannot carry any other information.",
          answer: false,
          explain: "Even the 3D geometry is made of information-rich elements, and higher dimensions attach still more data."
        },
        {
          type: "order",
          q: "Order these steps from geometry toward coordination.",
          items: [
            "Model each discipline in 3D",
            "Combine the discipline models",
            "Check for clashes",
            "Resolve the conflicts"
          ],
          explain: "Teams model in 3D, combine the models, run clash detection, and then resolve the conflicts found."
        }
      ]
    },
    {
      id: "l11",
      title: "4D: Time",
      intro: "4D BIM links the model to the construction schedule. By connecting elements to time, the team can simulate and study the sequence of construction before work starts.",
      questions: [
        {
          type: "mcq",
          q: "What does 4D BIM add to the model?",
          choices: [
            "A link to time and the construction schedule",
            "A link to the final cost only",
            "A new geometric shape",
            "A facilities manual"
          ],
          answer: 0,
          explain: "4D connects elements to time so the build sequence can be planned and visualized."
        },
        {
          type: "truefalse",
          q: "A 4D simulation lets a team visualize the construction sequence over time.",
          answer: true,
          explain: "Linking geometry to the schedule produces a sequence that can be played back to study the build."
        },
        {
          type: "fill",
          q: "4D BIM links model elements to the construction ____.",
          answer: "schedule",
          accept: ["schedule", "programme", "program", "timeline"],
          explain: "The defining link of 4D is between the model and the project schedule."
        },
        {
          type: "match",
          q: "Match each 4D concept to its description.",
          pairs: [
            ["4D", "Model linked to time"],
            ["Sequencing", "Order in which work happens"],
            ["Simulation", "Playback of the planned build"]
          ],
          explain: "4D links time, sequencing is the order of work, and a simulation plays back the planned construction."
        },
        {
          type: "mcq",
          q: "Which problem can a 4D sequence help a team catch early?",
          choices: [
            "A conflict in the order that trades need site access",
            "A spelling error in the contract",
            "A missing company logo on drawings",
            "An unpainted wall in a photo"
          ],
          answer: 0,
          explain: "Visualizing the sequence over time reveals conflicts in how and when trades occupy the site."
        },
        {
          type: "truefalse",
          q: "4D BIM replaces the need for any construction schedule.",
          answer: false,
          explain: "4D links to the schedule; it depends on a schedule rather than replacing one."
        },
        {
          type: "order",
          q: "Order these steps to create a basic 4D sequence.",
          items: [
            "Build the 3D model",
            "Prepare the construction schedule",
            "Link model elements to schedule tasks",
            "Play back the simulation"
          ],
          explain: "You need geometry and a schedule, then link the two, and finally review the time-based simulation."
        },
        {
          type: "fill",
          q: "Studying the order in which construction happens is called ____.",
          answer: "sequencing",
          accept: ["sequencing", "sequence"],
          explain: "Sequencing is planning the order of construction activities, a core use of 4D."
        }
      ]
    },
    {
      id: "l12",
      title: "5D: Cost",
      intro: "5D BIM links quantities and cost information to the model. As the design changes, quantities can update, helping teams estimate and track cost more closely.",
      questions: [
        {
          type: "mcq",
          q: "What does 5D BIM connect to the model?",
          choices: [
            "Quantities and cost information",
            "Only the paint colors",
            "The weather forecast",
            "The parking layout only"
          ],
          answer: 0,
          explain: "5D links quantities and cost data so estimates can be tied to the model."
        },
        {
          type: "truefalse",
          q: "When the model changes, linked 5D quantities can update to reflect the new design.",
          answer: true,
          explain: "Because quantities come from the model, a design change can flow through to updated quantities and cost estimates."
        },
        {
          type: "fill",
          q: "Extracting how much material a model contains is called quantity ____.",
          answer: "takeoff",
          accept: ["takeoff", "take-off", "take off"],
          explain: "Quantity takeoff pulls measured quantities from the model, a foundation of 5D cost work."
        },
        {
          type: "match",
          q: "Match each 5D term to its meaning.",
          pairs: [
            ["5D", "Model linked to cost"],
            ["Quantity takeoff", "Measuring amounts from the model"],
            ["Estimate", "Predicted project cost"]
          ],
          explain: "5D links cost, quantity takeoff measures amounts from the model, and an estimate is the predicted cost."
        },
        {
          type: "mcq",
          q: "How does 5D help a team respond to a design change?",
          choices: [
            "Updated quantities support a faster, more consistent cost estimate",
            "It hides the change from everyone",
            "It deletes the affected geometry",
            "It freezes the schedule permanently"
          ],
          answer: 0,
          explain: "Model-linked quantities let the team re-estimate cost more quickly and consistently after a change."
        },
        {
          type: "truefalse",
          q: "5D BIM guarantees the final project cost will never change.",
          answer: false,
          explain: "5D improves visibility of cost but does not remove the normal uncertainty and change on a project."
        },
        {
          type: "order",
          q: "Order these steps in a basic 5D cost workflow.",
          items: [
            "Model elements with properties",
            "Run a quantity takeoff",
            "Apply cost rates",
            "Produce the estimate"
          ],
          explain: "You model elements, take off quantities, apply rates, and then generate the cost estimate."
        }
      ]
    },
    {
      id: "l13",
      title: "6D: Sustainability",
      intro: "6D is commonly associated with energy and sustainability analysis, though definitions vary across the industry. It uses model data to study performance such as energy use.",
      questions: [
        {
          type: "mcq",
          q: "What is 6D BIM most commonly associated with?",
          choices: [
            "Energy and sustainability analysis",
            "Cost estimating",
            "Clash detection",
            "Printing drawings"
          ],
          answer: 0,
          explain: "6D is commonly linked to sustainability and energy analysis, though the industry does not fully agree on the definition."
        },
        {
          type: "truefalse",
          q: "The exact definition of 6D is standardized and identical across the whole industry.",
          answer: false,
          explain: "6D and 7D are less standardized; definitions genuinely vary between organizations."
        },
        {
          type: "fill",
          q: "6D is commonly connected to energy and ____ analysis.",
          answer: "sustainability",
          accept: ["sustainability", "sustainable"],
          explain: "The common association for 6D is sustainability and energy performance analysis."
        },
        {
          type: "match",
          q: "Match each idea to its description.",
          pairs: [
            ["6D", "Commonly energy and sustainability"],
            ["Energy analysis", "Studying how much energy is used"],
            ["Varying definitions", "Industry does not fully agree"]
          ],
          explain: "6D commonly covers sustainability, energy analysis studies energy use, and its definitions vary across the industry."
        },
        {
          type: "mcq",
          q: "Why should you be careful stating exactly what 6D means?",
          choices: [
            "Because the industry has not settled on one fixed definition",
            "Because 6D is illegal to use",
            "Because 6D always means cost",
            "Because 6D is the same as 3D"
          ],
          answer: 0,
          explain: "The 6D and 7D labels are not fully standardized, so it is best to present them as common, not absolute."
        },
        {
          type: "truefalse",
          q: "Energy analysis can use information already present in the model.",
          answer: true,
          explain: "A data-rich model can feed energy and sustainability studies rather than starting from scratch."
        },
        {
          type: "order",
          q: "Order these dimensions as they are commonly numbered.",
          items: ["4D time", "5D cost", "6D sustainability"],
          explain: "Counting up, 4D is time, 5D is cost, and 6D is commonly sustainability."
        }
      ]
    },
    {
      id: "l14",
      title: "7D: Facility Management",
      intro: "7D is commonly associated with operations and maintenance of the finished asset, though definitions vary. It carries handover data that supports running the building over its life.",
      questions: [
        {
          type: "mcq",
          q: "What is 7D BIM commonly associated with?",
          choices: [
            "Operations and maintenance of the finished asset",
            "Initial concept sketches only",
            "Demolition permits only",
            "Marketing brochures"
          ],
          answer: 0,
          explain: "7D is commonly linked to facility management, meaning operating and maintaining the asset after handover."
        },
        {
          type: "truefalse",
          q: "7D information is useful mainly after the building is handed over and in use.",
          answer: true,
          explain: "Facility management data supports running and maintaining the asset throughout its operational life."
        },
        {
          type: "fill",
          q: "Handover data that supports running a building is central to ____ BIM.",
          answer: "7D",
          accept: ["7d", "seven-dimensional", "seven dimensional"],
          explain: "7D commonly covers operations, maintenance, and the handover information behind them."
        },
        {
          type: "match",
          q: "Match each facility management term to its meaning.",
          pairs: [
            ["Operations", "Running the building day to day"],
            ["Maintenance", "Keeping equipment working"],
            ["Handover", "Passing information to the operator"]
          ],
          explain: "Operations is running the asset, maintenance keeps it working, and handover passes information to the operator."
        },
        {
          type: "mcq",
          q: "Which kind of information would most likely support 7D use?",
          choices: [
            "Equipment data and maintenance details for installed assets",
            "The architect's favorite color",
            "A list of nearby restaurants",
            "The number of cranes on site"
          ],
          answer: 0,
          explain: "Asset and maintenance data on installed equipment is exactly what facility management relies on."
        },
        {
          type: "truefalse",
          q: "Like 6D, the precise definition of 7D varies across the industry.",
          answer: true,
          explain: "6D and 7D are the less standardized dimensions, and their exact definitions genuinely vary."
        },
        {
          type: "order",
          q: "Order these lifecycle phases from earliest to latest.",
          items: ["Design", "Construction", "Handover", "Operation"],
          explain: "A project is designed, built, handed over, and then operated, where 7D information is used."
        }
      ]
    },
    {
      id: "l15",
      title: "Why Dimensions Matter",
      intro: "The value of BIM grows as more connected data is added. Linking geometry to time, cost, and operations helps teams design, build, and operate the asset more effectively.",
      questions: [
        {
          type: "mcq",
          q: "What is the main reason BIM dimensions add value?",
          choices: [
            "They connect more useful data to the model across the lifecycle",
            "They make the file harder to open",
            "They hide information from the team",
            "They only matter during demolition"
          ],
          answer: 0,
          explain: "More connected data means more value across the design, build, and operate phases."
        },
        {
          type: "truefalse",
          q: "Connecting data across dimensions can support better decisions throughout a project.",
          answer: true,
          explain: "When time, cost, and operations data connect to the geometry, the whole team can make better informed decisions."
        },
        {
          type: "fill",
          q: "More connected data means more ____ across design, build, and operate.",
          answer: "value",
          accept: ["value", "benefit"],
          explain: "The core message is that connected information adds value across the lifecycle."
        },
        {
          type: "match",
          q: "Match each phase to the dimension that most supports it.",
          pairs: [
            ["Build sequencing", "4D time"],
            ["Cost estimating", "5D cost"],
            ["Operating the asset", "7D facility management"]
          ],
          explain: "4D supports sequencing the build, 5D supports cost, and 7D supports operating the finished asset."
        },
        {
          type: "mcq",
          q: "Which statement best reflects the value of connected BIM data?",
          choices: [
            "Data captured once can serve design, construction, and operations",
            "Data must be recreated from scratch at every phase",
            "Only the design team ever benefits from the model",
            "Information should be kept apart from the geometry"
          ],
          answer: 0,
          explain: "A key benefit is that information linked to the model can be reused across the lifecycle instead of being rebuilt."
        },
        {
          type: "truefalse",
          q: "Adding dimensions has value only during the design phase and nowhere else.",
          answer: false,
          explain: "Dimensions add value across design, construction, and operations, not just design."
        },
        {
          type: "order",
          q: "Order the lifecycle stages the dimensions support.",
          items: ["Design", "Build", "Operate"],
          explain: "Connected data flows through design, then build, and finally operation of the asset."
        }
      ]
    },
    {
      id: "l16",
      title: "Dimensions in Practice",
      intro: "On real projects, 4D and 5D show up in familiar workflows. 4D drives sequencing and phasing studies, while 5D drives quantity takeoff and cost estimates tied to the model.",
      questions: [
        {
          type: "mcq",
          q: "How is 4D typically used on a project?",
          choices: [
            "To sequence and phase the construction work",
            "To pick the paint colors",
            "To draft the marketing plan",
            "To design the company logo"
          ],
          answer: 0,
          explain: "In practice, 4D is used to plan sequencing and phasing so the build runs smoothly."
        },
        {
          type: "truefalse",
          q: "5D on a project often involves pulling quantities from the model to support estimates.",
          answer: true,
          explain: "A common 5D workflow is model-based quantity takeoff feeding into cost estimates."
        },
        {
          type: "fill",
          q: "Splitting construction into stages over time is called ____.",
          answer: "phasing",
          accept: ["phasing", "phases"],
          explain: "Phasing breaks the work into time-based stages, a practical use of 4D."
        },
        {
          type: "match",
          q: "Match each practical task to its dimension.",
          pairs: [
            ["Phasing study", "4D"],
            ["Quantity takeoff", "5D"],
            ["Clash coordination", "3D"]
          ],
          explain: "Phasing is a 4D task, quantity takeoff is 5D, and clash coordination works from the 3D model."
        },
        {
          type: "mcq",
          q: "What is a realistic benefit of using 4D and 5D together?",
          choices: [
            "Linking the schedule and cost gives a clearer picture of the plan",
            "It removes the need to build anything",
            "It guarantees zero cost forever",
            "It replaces the whole project team"
          ],
          answer: 0,
          explain: "Combining time and cost views gives the team a fuller picture of how the plan unfolds and what it costs."
        },
        {
          type: "truefalse",
          q: "In practice, 4D and 5D still depend on a well-built, coordinated 3D model.",
          answer: true,
          explain: "Higher dimensions build on the geometry, so a good 3D model underpins reliable 4D and 5D work."
        },
        {
          type: "order",
          q: "Order these practical steps for a 4D phasing study.",
          items: [
            "Coordinate the 3D model",
            "Break work into phases",
            "Link phases to schedule dates",
            "Review the phased simulation"
          ],
          explain: "You coordinate the model, define phases, tie them to dates, and then review the time-based result."
        },
        {
          type: "fill",
          q: "Both 4D and 5D build on the coordinated ____ model.",
          answer: "3D",
          accept: ["3d", "three-dimensional", "three dimensional"],
          explain: "The coordinated 3D geometry is the foundation that 4D time and 5D cost work depend on."
        }
      ]
    }
  ]
});
