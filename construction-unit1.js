window.ACADEMY.addUnit("construction", {
  id: "unit-1",
  title: "Construction Foundations",
  color: "#58cc02",
  icon: "📐",
  description: "The vocabulary, people, drawings, tools and materials every builder needs first.",
  lessons: [
    {
      id: "l1",
      title: "What Is Construction?",
      intro: "How a project moves through its phases, and the major types of building work.",
      questions: [
        {
          type: "mcq",
          q: "Which phase comes BEFORE crews break ground, covering design, permits, budgeting and scheduling?",
          choices: ["Pre-construction", "Closeout", "Commissioning", "Demolition"],
          answer: 0,
          explain: "Pre-construction is the planning stage where design, estimating, permitting and scheduling happen before any building starts."
        },
        {
          type: "order",
          q: "Put the three broad project phases in the order they occur.",
          items: ["Pre-construction", "Construction", "Closeout"],
          explain: "Every project flows from planning (pre-construction) to building (construction) to wrapping up (closeout)."
        },
        {
          type: "mcq",
          q: "A 'ground-up' project means the building is:",
          choices: ["Built new from an empty or cleared site", "Only having its interior remodeled", "A repair of storm damage", "A road resurfacing job"],
          answer: 0,
          explain: "Ground-up (or new) construction starts from bare ground, as opposed to renovating an existing structure."
        },
        {
          type: "truefalse",
          q: "A tenant improvement (TI) is work done to fit out or remodel space inside an existing building for a specific occupant.",
          answer: true,
          explain: "A tenant improvement customizes existing interior space, such as building out an office or retail suite for a new tenant."
        },
        {
          type: "fill",
          q: "Building upward, like towers and offices, is called ____ construction.",
          answer: "vertical",
          accept: ["vertical"],
          explain: "Vertical construction covers buildings, while horizontal construction covers flat, linear infrastructure like roads and pipelines."
        },
        {
          type: "match",
          q: "Match each project type to its description.",
          pairs: [
            ["Renovation", "Updating or restoring an existing structure"],
            ["Vertical", "Buildings such as homes and high-rises"],
            ["Horizontal", "Roads, bridges and utilities"]
          ],
          explain: "Renovation reworks what exists, vertical work makes buildings, and horizontal work makes infrastructure."
        },
        {
          type: "truefalse",
          q: "Closeout is the phase where punch-list items are finished and the project is formally handed over to the owner.",
          answer: true,
          explain: "Closeout finalizes remaining items, paperwork and warranties, then turns the finished building over to the owner."
        },
        {
          type: "mcq",
          q: "Highways, bridges and water mains are examples of:",
          choices: ["Horizontal construction", "Vertical construction", "Tenant improvements", "Closeout"],
          answer: 0,
          explain: "Horizontal (or civil/heavy) construction builds the flat, linear infrastructure that connects places."
        }
      ]
    },
    {
      id: "l2",
      title: "The Project Team",
      intro: "Who does what, from the owner who pays to the foreman who runs the crew.",
      questions: [
        {
          type: "mcq",
          q: "Who holds the prime contract and is responsible for coordinating and completing the whole build?",
          choices: ["General contractor (GC)", "Subcontractor", "Architect", "Owner"],
          answer: 0,
          explain: "The general contractor signs the prime contract and is accountable for delivering the entire project."
        },
        {
          type: "mcq",
          q: "A subcontractor is best described as a company that:",
          choices: ["Performs a specialized trade hired by the GC", "Designs the building", "Owns the property", "Issues the building permit"],
          answer: 0,
          explain: "Subcontractors are trade specialists, such as electricians or plumbers, hired by the general contractor."
        },
        {
          type: "match",
          q: "Match each designer to their focus.",
          pairs: [
            ["Architect", "Overall design, layout and aesthetics"],
            ["Structural engineer", "The load-bearing frame and stability"],
            ["MEP engineer", "Mechanical, electrical and plumbing systems"]
          ],
          explain: "Architects shape the building while engineers design the systems that make it stand and function."
        },
        {
          type: "truefalse",
          q: "The superintendent is the GC's onsite leader who runs day-to-day field operations and coordinates the trades.",
          answer: true,
          explain: "The superintendent is the boots-on-the-ground manager directing daily jobsite work and trade sequencing."
        },
        {
          type: "fill",
          q: "The crew-level leader who directly supervises a group of workers in the field is the ____.",
          answer: "foreman",
          accept: ["foreman", "forewoman", "foreperson"],
          explain: "A foreman leads a specific crew on the ground, reporting up to the superintendent."
        },
        {
          type: "mcq",
          q: "What does a civil engineer typically handle on a project?",
          choices: ["Site grading, drainage and utilities", "Interior paint colors", "The structural steel frame", "Marketing the finished building"],
          answer: 0,
          explain: "Civil engineers design site work such as grading, stormwater drainage, and underground utilities."
        },
        {
          type: "mcq",
          q: "A project manager (PM) on the contractor side mainly handles:",
          choices: ["Budgets, schedules, contracts and paperwork", "Pouring the concrete", "Drawing the floor plans", "Inspecting for the city"],
          answer: 0,
          explain: "The PM runs the business side of the job, managing cost, schedule, contracts and communication."
        },
        {
          type: "match",
          q: "Match each role to what they do.",
          pairs: [
            ["Owner", "Pays for and ultimately uses the project"],
            ["Developer", "Initiates and finances the project for profit"],
            ["Construction manager", "Advises the owner and oversees delivery"]
          ],
          explain: "The owner funds the work, a developer drives the venture, and a construction manager guides delivery for the owner."
        }
      ]
    },
    {
      id: "l3",
      title: "Reading Construction Drawings",
      intro: "The four core views, and what each one shows you about the building.",
      questions: [
        {
          type: "mcq",
          q: "A plan view shows the building as if you are:",
          choices: ["Looking straight down from above", "Standing in front of it", "Slicing it open vertically", "Zoomed into one connection"],
          answer: 0,
          explain: "A plan is a top-down view, like a horizontal cut looking down, used for floor plans and site plans."
        },
        {
          type: "mcq",
          q: "An elevation drawing shows:",
          choices: ["A flat, head-on view of one face of the building", "A bird's-eye top view", "A magnified single joint", "The mechanical ductwork only"],
          answer: 0,
          explain: "An elevation is a straight-on view of an exterior or interior face, showing heights and finishes."
        },
        {
          type: "fill",
          q: "A drawing made by cutting vertically through the building to reveal what is inside is a ____ view.",
          answer: "section",
          accept: ["section", "cross section", "cross-section"],
          explain: "A section slices through the building to expose floors, walls and assemblies stacked vertically."
        },
        {
          type: "truefalse",
          q: "A detail view is a zoomed-in, large-scale drawing of a specific connection or assembly.",
          answer: true,
          explain: "Details enlarge a small area so the exact construction of a joint or assembly is clear."
        },
        {
          type: "match",
          q: "Match each view to what it primarily shows.",
          pairs: [
            ["Plan", "Top-down layout of a floor"],
            ["Elevation", "Head-on view of one facade"],
            ["Section", "Vertical cut through the structure"],
            ["Detail", "Close-up of one assembly"]
          ],
          explain: "Plans show layout, elevations show faces, sections show interiors, and details magnify specific parts."
        },
        {
          type: "mcq",
          q: "To check the exterior finishes and window heights on the front of a house, you would look at the:",
          choices: ["Front elevation", "Roof plan", "Foundation section", "Site plan"],
          answer: 0,
          explain: "Elevations are the go-to view for exterior appearance, material callouts and vertical dimensions of a facade."
        },
        {
          type: "truefalse",
          q: "A floor plan is a type of plan view.",
          answer: true,
          explain: "A floor plan is a plan view taken at a horizontal cut a few feet above the floor."
        },
        {
          type: "order",
          q: "Order these views from the broadest overview to the most zoomed-in.",
          items: ["Site plan", "Floor plan", "Section", "Detail"],
          explain: "You typically read drawings from the big picture (site) down to the smallest assembly (detail)."
        }
      ]
    },
    {
      id: "l4",
      title: "Drawing Sets & Symbols",
      intro: "How sheets are organized by discipline, and the markings that tie a set together.",
      questions: [
        {
          type: "match",
          q: "Match each sheet prefix to its discipline.",
          pairs: [
            ["A", "Architectural"],
            ["S", "Structural"],
            ["E", "Electrical"],
            ["P", "Plumbing"]
          ],
          explain: "Sheets are grouped by discipline letter so you can quickly find the right drawings."
        },
        {
          type: "mcq",
          q: "Which sheet prefix indicates civil drawings?",
          choices: ["C", "M", "A", "FP"],
          answer: 0,
          explain: "C sheets cover civil work such as grading, drainage and site utilities."
        },
        {
          type: "fill",
          q: "The block in the corner of every sheet listing the project, sheet number and date is the ____ block.",
          answer: "title",
          accept: ["title", "titleblock", "title block"],
          explain: "The title block is the standardized data box identifying the sheet, project, scale and revision info."
        },
        {
          type: "mcq",
          q: "On a drawing, the north arrow is used to:",
          choices: ["Show the building's orientation", "Indicate the scale", "Mark an electrical outlet", "Point to the title block"],
          answer: 0,
          explain: "The north arrow orients the drawing so you know which way the building actually faces."
        },
        {
          type: "truefalse",
          q: "Grid lines (column lines) give a coordinate system of labeled letters and numbers to locate elements on a plan.",
          answer: true,
          explain: "Grid lines create a reference grid, like A-1 or B-3, so any column or wall can be precisely located."
        },
        {
          type: "match",
          q: "Match each discipline letter to its system.",
          pairs: [
            ["M", "Mechanical / HVAC"],
            ["FP", "Fire protection / sprinklers"],
            ["C", "Civil / site"]
          ],
          explain: "M handles heating and cooling, FP handles sprinkler systems, and C handles site and civil work."
        },
        {
          type: "mcq",
          q: "A keynote on a drawing is:",
          choices: ["A numbered note referencing a list of standardized notes", "The drawing's scale", "A type of door", "The architect's signature"],
          answer: 0,
          explain: "Keynotes use numbers or codes that point to a shared note legend, keeping drawings clean and consistent."
        },
        {
          type: "fill",
          q: "A drawing at 1/4 inch = 1 foot is showing the building's ____.",
          answer: "scale",
          accept: ["scale", "drawing scale"],
          explain: "Scale tells you the ratio between the drawing and real-world size, like one quarter inch equals one foot."
        },
        {
          type: "truefalse",
          q: "A callout is a symbol that directs you to another drawing, such as a detail or section located elsewhere in the set.",
          answer: true,
          explain: "Callouts cross-reference the set, pointing you to the sheet and number where a detail or section is drawn."
        }
      ]
    },
    {
      id: "l5",
      title: "Hand & Power Tools",
      intro: "Common jobsite tools and the job each one is built to do.",
      questions: [
        {
          type: "mcq",
          q: "A level is used to confirm that a surface is:",
          choices: ["Truly horizontal or vertical", "The correct color", "Strong enough to bear load", "The right temperature"],
          answer: 0,
          explain: "A level uses a bubble vial to verify that something is plumb (vertical) or level (horizontal)."
        },
        {
          type: "match",
          q: "Match each tool to its purpose.",
          pairs: [
            ["Chalk line", "Snaps a long straight reference line"],
            ["Plumb bob", "Finds true vertical with gravity"],
            ["Tape measure", "Measures distances"]
          ],
          explain: "Each layout tool has one job: chalk lines mark straight lines, plumb bobs find vertical, tapes measure length."
        },
        {
          type: "fill",
          q: "The triangular tool used for quickly marking square cuts and angles in framing is the ____ square.",
          answer: "speed",
          accept: ["speed", "speed square", "rafter", "rafter square"],
          explain: "A speed square is a fast triangular guide for marking 90 and 45 degree cuts and checking angles."
        },
        {
          type: "mcq",
          q: "A circular saw is mainly used to:",
          choices: ["Make straight cuts in lumber and sheet goods", "Drive long screws", "Measure level", "Mix concrete"],
          answer: 0,
          explain: "A circular saw uses a spinning toothed blade to make fast straight cuts in wood and panels."
        },
        {
          type: "truefalse",
          q: "An impact driver is designed to drive screws and fasteners with high rotational force.",
          answer: true,
          explain: "An impact driver delivers strong bursts of torque, making it ideal for driving long screws and lag bolts."
        },
        {
          type: "mcq",
          q: "A framing square is most useful for:",
          choices: ["Laying out right angles and stair or rafter cuts", "Cutting metal pipe", "Checking soil compaction", "Lifting heavy beams"],
          answer: 0,
          explain: "The large L-shaped framing square helps lay out 90 degree corners and stair and rafter geometry."
        },
        {
          type: "truefalse",
          q: "A plumb bob relies on gravity, using a weighted point on a string to establish a true vertical line.",
          answer: true,
          explain: "Gravity pulls the pointed weight straight down, giving a reliable vertical reference."
        },
        {
          type: "match",
          q: "Match each tool to what it primarily checks or does.",
          pairs: [
            ["Level", "Horizontal and vertical accuracy"],
            ["Framing square", "Right angles in framing"],
            ["Circular saw", "Straight cuts in lumber"]
          ],
          explain: "Levels check alignment, framing squares set right angles, and circular saws make the cuts."
        }
      ]
    },
    {
      id: "l6",
      title: "Heavy Equipment",
      intro: "The big machines, and the digging, lifting and moving work each one handles.",
      questions: [
        {
          type: "mcq",
          q: "An excavator's main job is to:",
          choices: ["Dig with a boom-mounted bucket", "Pave asphalt", "Pour concrete walls", "Weld steel"],
          answer: 0,
          explain: "An excavator uses a hydraulic boom, arm and bucket to dig trenches and foundations."
        },
        {
          type: "match",
          q: "Match each machine to its primary use.",
          pairs: [
            ["Bulldozer", "Pushing soil and grading"],
            ["Crane", "Lifting heavy loads to height"],
            ["Compactor", "Densifying soil or asphalt"]
          ],
          explain: "Dozers push and grade, cranes lift, and compactors compress material so it stays stable."
        },
        {
          type: "fill",
          q: "The compact machine with a small turning radius and lift arms, often called a Bobcat, is a ____ steer.",
          answer: "skid",
          accept: ["skid", "skid steer", "skidsteer"],
          explain: "A skid steer is a small, nimble loader that turns by driving its left and right wheels at different speeds."
        },
        {
          type: "mcq",
          q: "Which crane is fixed in place and assembled tall for high-rise work?",
          choices: ["Tower crane", "Mobile crane", "Crawler loader", "Telehandler"],
          answer: 0,
          explain: "A tower crane is anchored and climbs as a building rises, ideal for tall vertical projects."
        },
        {
          type: "truefalse",
          q: "A telehandler is a forklift-style machine with an extendable telescoping boom for placing loads up and out.",
          answer: true,
          explain: "A telehandler combines a forklift and a reach boom, letting it lift materials high and over obstacles."
        },
        {
          type: "mcq",
          q: "A concrete pump is used to:",
          choices: ["Move concrete through a hose to hard-to-reach places", "Crush old concrete", "Smooth finished slabs", "Cut control joints"],
          answer: 0,
          explain: "A concrete pump pushes wet concrete through pipes or hoses to reach upper floors or tight spots."
        },
        {
          type: "match",
          q: "Match each machine to its strength.",
          pairs: [
            ["Backhoe", "Digs with a rear arm, loads with a front bucket"],
            ["Loader", "Scoops and carries loose material"],
            ["Excavator", "Heavy digging and trenching"]
          ],
          explain: "Backhoes do double duty, loaders move material, and excavators specialize in serious digging."
        },
        {
          type: "truefalse",
          q: "A mobile crane is mounted on wheels or tracks so it can drive to different locations on or between sites.",
          answer: true,
          explain: "Mobile cranes travel under their own power, unlike a tower crane that stays anchored in one spot."
        }
      ]
    },
    {
      id: "l7",
      title: "Construction Materials 101",
      intro: "The core building materials, their basic properties, and where they are used.",
      questions: [
        {
          type: "mcq",
          q: "Concrete is very strong in compression but weak in tension, so it is reinforced with:",
          choices: ["Rebar (steel reinforcing bar)", "Drywall", "Insulation", "Plywood"],
          answer: 0,
          explain: "Steel rebar is embedded in concrete to carry the tensile (pulling) loads that concrete alone cannot."
        },
        {
          type: "fill",
          q: "The hollow concrete blocks used to build masonry walls are called concrete masonry units, or ____.",
          answer: "cmu",
          accept: ["cmu", "cmus", "block", "concrete block"],
          explain: "CMU are the standard gray hollow blocks used for foundations, walls and commercial structures."
        },
        {
          type: "truefalse",
          q: "Structural steel has a high strength-to-weight ratio, making it common for long spans and tall buildings.",
          answer: true,
          explain: "Steel is strong in both tension and compression and spans long distances efficiently, ideal for big structures."
        },
        {
          type: "mcq",
          q: "Gypsum board, commonly called drywall, is mainly used for:",
          choices: ["Interior wall and ceiling surfaces", "Foundation footings", "Roof shingles", "Exterior paving"],
          answer: 0,
          explain: "Drywall provides a smooth, paintable, fire-resistant surface for interior walls and ceilings."
        },
        {
          type: "match",
          q: "Match each material to a common use.",
          pairs: [
            ["Lumber", "Wood framing for houses"],
            ["Brick", "Durable masonry veneer or walls"],
            ["Structural steel", "Frames for large buildings"]
          ],
          explain: "Lumber frames homes, brick provides masonry, and steel frames larger commercial structures."
        },
        {
          type: "mcq",
          q: "Dimensional lumber sizes like a '2x4' refer to:",
          choices: ["A nominal size that is slightly smaller when finished", "The exact finished size in inches", "The weight of the board", "The grade of the wood only"],
          answer: 0,
          explain: "A 2x4 is a nominal label; the actual milled, dried size is about 1.5 by 3.5 inches."
        },
        {
          type: "truefalse",
          q: "Masonry, such as brick and CMU, is strong in compression and is usually laid up with mortar.",
          answer: true,
          explain: "Masonry units stack and bond with mortar, performing well under the compressive loads of walls."
        },
        {
          type: "fill",
          q: "Wet concrete must cure and harden through a chemical reaction called ____.",
          answer: "hydration",
          accept: ["hydration", "curing"],
          explain: "Hydration is the reaction between cement and water that hardens concrete and develops its strength over time."
        }
      ]
    },
    {
      id: "l8",
      title: "Measurement & Jobsite Math",
      intro: "Reading feet and inches, fractions, scales, and squaring corners with the 3-4-5 rule.",
      questions: [
        {
          type: "mcq",
          q: "In construction notation, the symbol for feet (the foot mark) is:",
          choices: ["A single tick, as in 8'", "A double tick, as in 8''", "The letter F", "A degree sign"],
          answer: 0,
          explain: "A single prime mark means feet and a double prime mark means inches, so 8' 6'' is eight feet six inches."
        },
        {
          type: "fill",
          q: "The 3-4-5 rule helps create a perfect ____ corner.",
          answer: "square",
          accept: ["square", "90", "90 degree", "right angle"],
          explain: "If one leg is 3, another is 4, and the diagonal is 5, the corner is a true 90 degree square."
        },
        {
          type: "truefalse",
          q: "Square footage measures area, while linear footage measures length along a single line.",
          answer: true,
          explain: "Area (square feet) covers a surface, while linear feet count straight-line length, like trim or pipe runs."
        },
        {
          type: "mcq",
          q: "How many inches are in one foot?",
          choices: ["12", "10", "16", "100"],
          answer: 0,
          explain: "There are 12 inches in a foot, the basis for all imperial construction measurement."
        },
        {
          type: "order",
          q: "Order these fractions of an inch from smallest to largest.",
          items: ["1/16", "1/8", "1/4", "1/2"],
          explain: "Tape measures subdivide inches by halving: 1/16 is smallest, doubling up to 1/2."
        },
        {
          type: "mcq",
          q: "To find the square footage of a rectangular room, you:",
          choices: ["Multiply length by width", "Add length and width", "Multiply all four walls", "Divide length by width"],
          answer: 0,
          explain: "Area of a rectangle is length times width, giving the floor space in square feet."
        },
        {
          type: "fill",
          q: "On a 1/4 inch = 1 foot drawing, every quarter inch on paper equals one ____ in reality.",
          answer: "foot",
          accept: ["foot", "feet"],
          explain: "At 1/4 inch scale, a quarter inch on the page represents one real foot of the building."
        },
        {
          type: "truefalse",
          q: "Studs in a typical wall are commonly spaced 16 inches on center.",
          answer: true,
          explain: "16 inches on center is a standard stud spacing, meaning 16 inches from the center of one stud to the next."
        }
      ]
    },
    {
      id: "l9",
      title: "Specs & Documents",
      intro: "The documents that govern a project, and how questions and approvals flow.",
      questions: [
        {
          type: "mcq",
          q: "Construction documents (CDs) are the complete set used to:",
          choices: ["Bid, permit and build the project", "Market the building to buyers", "Train new employees", "Schedule company holidays"],
          answer: 0,
          explain: "CDs are the finalized drawings and specs used for pricing, permitting and actual construction."
        },
        {
          type: "match",
          q: "Match each document to what it conveys.",
          pairs: [
            ["Drawings", "What and where, shown graphically"],
            ["Specifications", "Quality, materials and standards in writing"],
            ["RFI", "A formal question to clarify the documents"]
          ],
          explain: "Drawings show geometry, specs define quality in words, and RFIs ask for clarification."
        },
        {
          type: "truefalse",
          q: "Specifications are written documents that describe materials, quality, and workmanship standards.",
          answer: true,
          explain: "Specs use text to define what the drawings show graphically, covering products, quality and methods."
        },
        {
          type: "fill",
          q: "A formal question a contractor sends the design team to clarify the documents is called an ____.",
          answer: "rfi",
          accept: ["rfi", "request for information"],
          explain: "An RFI, or Request for Information, is the official channel for resolving unclear or conflicting documents."
        },
        {
          type: "mcq",
          q: "A submittal is:",
          choices: ["Product data or samples sent for the designer to approve before installation", "The final invoice", "A safety violation notice", "The construction schedule"],
          answer: 0,
          explain: "Submittals let the design team verify that proposed products and shop drawings meet the specs before work proceeds."
        },
        {
          type: "mcq",
          q: "CSI MasterFormat is a system that:",
          choices: ["Organizes specifications into numbered divisions", "Sets worker wages", "Designs the structural frame", "Schedules deliveries"],
          answer: 0,
          explain: "MasterFormat is the industry standard that sorts specs into consistent numbered divisions, like Division 03 Concrete."
        },
        {
          type: "truefalse",
          q: "If a drawing and a specification conflict, an RFI is a reasonable way to get an official answer.",
          answer: true,
          explain: "When documents disagree, submitting an RFI gets a written, authoritative resolution from the design team."
        },
        {
          type: "fill",
          q: "MasterFormat groups related specifications into numbered ____.",
          answer: "divisions",
          accept: ["divisions", "division"],
          explain: "MasterFormat divisions, such as Division 03 Concrete and Division 26 Electrical, group specs by topic."
        }
      ]
    }
  ]
});
