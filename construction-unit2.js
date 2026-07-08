window.ACADEMY.addUnit("construction", {
  id: "unit-2",
  title: "Pre-Construction",
  color: "#1cb0f6",
  icon: "📋",
  description: "Everything that happens before the first shovel: land, permits, design, estimating and contracts.",
  lessons: [
    {
      id: "l10",
      title: "Site Selection & Land",
      intro: "Picking and vetting the dirt you build on.",
      questions: [
        {
          type: "mcq",
          q: "A single legally defined piece of land identified for taxation and ownership is called a:",
          choices: ["Parcel", "Plat", "Quadrant", "Tract bond"],
          answer: 0,
          explain: "A parcel (or lot) is one legally described unit of land with its own boundaries and tax ID."
        },
        {
          type: "mcq",
          q: "An easement on a property is best described as:",
          choices: ["A tax credit for green building", "A right for others to use part of your land for a stated purpose", "The maximum building height allowed", "A discount on the purchase price"],
          answer: 1,
          explain: "An easement grants a third party (like a utility) the legal right to use a defined portion of land."
        },
        {
          type: "mcq",
          q: "Developing previously undeveloped, natural land is called building on a:",
          choices: ["Brownfield", "Greenfield", "Blackfield", "Floodfield"],
          answer: 1,
          explain: "Greenfield sites are raw, undeveloped land, while brownfields are previously used and possibly contaminated."
        },
        {
          type: "truefalse",
          q: "A brownfield is a site that may carry contamination from previous industrial or commercial use.",
          answer: true,
          explain: "Brownfields are former industrial or commercial sites whose reuse can be complicated by hazardous substances."
        },
        {
          type: "fill",
          q: "The minimum required distance a structure must sit back from a property line is called the ____.",
          answer: "setback",
          accept: ["setback", "setbacks", "building setback"],
          explain: "Setbacks define how far buildings must be kept from lot lines, streets, and neighbors."
        },
        {
          type: "mcq",
          q: "The shape and elevation changes of a site (its slopes and contours) are referred to as its:",
          choices: ["Topography", "Typography", "Geography grid", "Datum spread"],
          answer: 0,
          explain: "Topography describes the surface relief of the land, which drives grading and drainage decisions."
        },
        {
          type: "match",
          q: "Match each land term to its meaning:",
          pairs: [
            ["Right-of-way", "Land reserved for roads or utilities"],
            ["Due diligence", "Investigating a site before purchase"],
            ["Easement", "Another party's right to use your land"]
          ],
          explain: "Right-of-way, easements, and due diligence are core concepts when evaluating a potential building site."
        },
        {
          type: "truefalse",
          q: "Due diligence means starting construction immediately to save time before closing on the land.",
          answer: false,
          explain: "Due diligence is the careful research and inspection of a site done before committing to buy it."
        }
      ]
    },
    {
      id: "l11",
      title: "Zoning & Land Use",
      intro: "The rules that decide what you may build and how big.",
      questions: [
        {
          type: "mcq",
          q: "Zoning districts primarily control:",
          choices: ["The color of a building", "The allowed uses and intensity of land", "The contractor you must hire", "The brand of materials used"],
          answer: 1,
          explain: "Zoning divides land into districts that dictate permitted uses such as residential, commercial, or industrial."
        },
        {
          type: "mcq",
          q: "Floor Area Ratio (FAR) compares:",
          choices: ["Total floor area to the lot area", "Wall height to roof height", "Parking spaces to units", "Window area to floor area"],
          answer: 0,
          explain: "FAR is total building floor area divided by lot area, limiting how much you can build on a parcel."
        },
        {
          type: "mcq",
          q: "A property owner who wants to deviate from a strict zoning rule (like a setback) applies for a:",
          choices: ["Variance", "Warranty", "Lien release", "Punch list"],
          answer: 0,
          explain: "A variance is permission to depart from a specific zoning requirement due to hardship or unusual conditions."
        },
        {
          type: "truefalse",
          q: "A conditional use permit allows a use that is not automatically permitted, subject to specific conditions.",
          answer: true,
          explain: "Conditional use permits allow otherwise restricted uses if the applicant meets stated conditions and review."
        },
        {
          type: "fill",
          q: "A zoning district that combines homes, shops, and offices in one area is called ____ use.",
          answer: "mixed",
          accept: ["mixed", "mixed-use", "mixed use"],
          explain: "Mixed-use zoning blends residential, commercial, and sometimes light industrial uses in one district."
        },
        {
          type: "mcq",
          q: "The full set of governmental approvals that legally allow a project to proceed are called:",
          choices: ["Entitlements", "Endowments", "Encumbrances", "Easements"],
          answer: 0,
          explain: "Entitlements are the rights and approvals (zoning, permits, variances) that authorize a development."
        },
        {
          type: "match",
          q: "Match the zoning district to a typical use:",
          pairs: [
            ["Residential", "Houses and apartments"],
            ["Commercial", "Stores and offices"],
            ["Industrial", "Factories and warehouses"]
          ],
          explain: "Each base zoning district targets a category of use, shaping what may legally be built there."
        },
        {
          type: "truefalse",
          q: "Height limits in zoning codes are only advisory and never legally enforced.",
          answer: false,
          explain: "Height limits are enforceable zoning rules that cap how tall a structure may be in a district."
        }
      ]
    },
    {
      id: "l12",
      title: "Permits & Approvals",
      intro: "Getting legal permission to build and to occupy.",
      questions: [
        {
          type: "mcq",
          q: "The government body that enforces building codes and issues permits is the:",
          choices: ["AHJ (authority having jurisdiction)", "ASTM", "OSHA only", "The general contractor"],
          answer: 0,
          explain: "The AHJ is the authority having jurisdiction, typically a local building department that enforces codes."
        },
        {
          type: "mcq",
          q: "A building permit is generally required before you can:",
          choices: ["Buy the land", "Begin most structural construction work", "Advertise the project", "Hire a designer"],
          answer: 1,
          explain: "A building permit grants legal authorization to start regulated construction work on a project."
        },
        {
          type: "mcq",
          q: "Before a permit is issued, the AHJ checks your drawings during:",
          choices: ["Plan review", "Value engineering", "Buyout", "Punch out"],
          answer: 0,
          explain: "Plan review is the AHJ examining submitted drawings for code compliance before issuing a permit."
        },
        {
          type: "truefalse",
          q: "A Certificate of Occupancy (CO) confirms a building is legally safe to occupy and use.",
          answer: true,
          explain: "The CO is issued after final inspections, certifying the building meets code and can be occupied."
        },
        {
          type: "fill",
          q: "Specialized permits for electrical, plumbing, and mechanical work are known as ____ permits.",
          answer: "trade",
          accept: ["trade", "trades"],
          explain: "Trade permits cover electrical, plumbing, and mechanical work separate from the main building permit."
        },
        {
          type: "mcq",
          q: "Inspections during construction usually:",
          choices: ["Happen only after the building is finished", "Gate the work so later phases cannot proceed until earlier ones pass", "Are optional for licensed builders", "Replace the need for a building permit"],
          answer: 1,
          explain: "Inspections are sequenced so each phase must pass before the next is allowed to be covered or built."
        },
        {
          type: "order",
          q: "Put these permit and approval steps in the usual order:",
          items: ["Plan review", "Building permit issued", "Inspections during work", "Certificate of occupancy"],
          explain: "Drawings are reviewed, the permit is issued, work is inspected as it proceeds, then a CO is granted."
        },
        {
          type: "truefalse",
          q: "You can legally occupy a new commercial building before receiving its Certificate of Occupancy.",
          answer: false,
          explain: "Occupying before the CO is issued is generally illegal because final safety sign-off is incomplete."
        }
      ]
    },
    {
      id: "l13",
      title: "Surveying & Site Layout",
      intro: "Measuring the land and marking where things go.",
      questions: [
        {
          type: "mcq",
          q: "A surveyor's job on a project is mainly to:",
          choices: ["Pour the foundation", "Measure and mark boundaries, elevations, and building locations", "Order the steel", "Run the cost estimate"],
          answer: 1,
          explain: "Surveyors establish property lines, elevations, and precise points used to lay out the building."
        },
        {
          type: "mcq",
          q: "A benchmark in surveying is:",
          choices: ["A best-in-class competitor", "A fixed point of known elevation used as a reference", "A type of concrete test", "A bidding milestone"],
          answer: 1,
          explain: "A benchmark is a permanent reference point with a known elevation that other measurements tie back to."
        },
        {
          type: "mcq",
          q: "A detailed boundary and title survey often required for commercial real estate deals is the:",
          choices: ["ALTA survey", "OSHA survey", "ASTM survey", "RFI survey"],
          answer: 0,
          explain: "An ALTA survey is a thorough boundary, easement, and improvement survey used in commercial transactions."
        },
        {
          type: "truefalse",
          q: "A total station is a surveying instrument that measures angles and distances electronically.",
          answer: true,
          explain: "The total station combines an electronic theodolite and distance meter to capture precise coordinates."
        },
        {
          type: "fill",
          q: "Driving stakes into the ground to mark building corners and grades is called ____.",
          answer: "staking",
          accept: ["staking", "stakeout", "layout", "staking out"],
          explain: "Staking, or layout, transfers the design coordinates onto the actual ground with marked stakes."
        },
        {
          type: "mcq",
          q: "Control points on a site are used to:",
          choices: ["Limit who enters the site", "Provide fixed reference locations for accurate layout", "Set the project budget", "Schedule deliveries"],
          answer: 1,
          explain: "Control points are established reference positions that all subsequent layout measurements work from."
        },
        {
          type: "match",
          q: "Match each surveying term to its meaning:",
          pairs: [
            ["Datum", "Reference surface for elevations"],
            ["Property line", "Legal boundary of a parcel"],
            ["GPS layout", "Positioning using satellite signals"]
          ],
          explain: "Datums, property lines, and GPS layout are foundational concepts for locating work accurately."
        },
        {
          type: "truefalse",
          q: "GPS layout can be used to position points on large sites using satellite signals.",
          answer: true,
          explain: "GPS or GNSS layout uses satellite positioning to stake points, useful on large or open sites."
        }
      ]
    },
    {
      id: "l14",
      title: "Geotechnical & Soils",
      intro: "Understanding the ground your building will stand on.",
      questions: [
        {
          type: "mcq",
          q: "A soils report is produced by the:",
          choices: ["Geotechnical engineer", "Electrician", "Roofing foreman", "Estimator"],
          answer: 0,
          explain: "The geotechnical engineer analyzes subsurface conditions and writes the soils (geotechnical) report."
        },
        {
          type: "mcq",
          q: "The maximum load soil can support without failing is its:",
          choices: ["Bearing capacity", "Water table", "Compaction ratio", "Plasticity index"],
          answer: 0,
          explain: "Bearing capacity is how much pressure the soil can carry before it settles or fails, guiding foundation design."
        },
        {
          type: "mcq",
          q: "A vertical hole drilled to sample and study soil layers is called a:",
          choices: ["Boring", "Bench", "Berm", "Bollard"],
          answer: 0,
          explain: "A soil boring extracts samples at depth so engineers can identify soil types and conditions."
        },
        {
          type: "truefalse",
          q: "Compaction increases soil density so it can better support foundations and slabs.",
          answer: true,
          explain: "Compaction packs soil particles together, raising density and strength to reduce future settlement."
        },
        {
          type: "fill",
          q: "Soils that swell when wet and shrink when dry, threatening foundations, are called ____ soils.",
          answer: "expansive",
          accept: ["expansive", "expansive clay", "clay", "expansive soils"],
          explain: "Expansive (clay) soils change volume with moisture and can crack slabs and foundations."
        },
        {
          type: "mcq",
          q: "The water table is:",
          choices: ["A schedule of plumbing fixtures", "The level below which the ground is saturated with water", "A type of concrete additive", "A surveying instrument"],
          answer: 1,
          explain: "The water table marks where soil becomes fully saturated, affecting excavation and foundation choices."
        },
        {
          type: "match",
          q: "Match each geotechnical term to its meaning:",
          pairs: [
            ["Test pit", "Excavation to inspect shallow soils"],
            ["Bearing capacity", "Load the soil can support"],
            ["Compaction", "Densifying soil for stability"]
          ],
          explain: "Test pits, bearing capacity, and compaction are key tools and concepts in evaluating site soils."
        },
        {
          type: "truefalse",
          q: "Expansive clay soils are ideal and need no special foundation design.",
          answer: false,
          explain: "Expansive clays are problematic and usually require special foundations or soil treatment."
        }
      ]
    },
    {
      id: "l15",
      title: "Design Phases",
      intro: "How a building moves from idea to buildable drawings.",
      questions: [
        {
          type: "mcq",
          q: "The earliest design phase, defining the owner's needs and space requirements, is:",
          choices: ["Programming", "Construction documents", "Value engineering", "Closeout"],
          answer: 0,
          explain: "Programming captures the owner's goals, functions, and space needs before any design is drawn."
        },
        {
          type: "mcq",
          q: "In which phase are basic forms, layouts, and concepts first sketched out?",
          choices: ["Schematic design (SD)", "Construction documents (CD)", "Buyout", "Punch list"],
          answer: 0,
          explain: "Schematic design (SD) establishes the overall concept, scale, and relationships of spaces."
        },
        {
          type: "mcq",
          q: "Construction documents (CD) are mainly used to:",
          choices: ["Choose the site", "Permit, bid, and build the project", "Market the building", "Train the staff"],
          answer: 1,
          explain: "CDs are the detailed drawings and specs used to obtain permits, solicit bids, and construct the work."
        },
        {
          type: "truefalse",
          q: "Value engineering looks for ways to deliver the required function at lower cost.",
          answer: true,
          explain: "Value engineering analyzes design choices to cut cost while preserving function and quality."
        },
        {
          type: "fill",
          q: "Reviewing a design for how practical it is to actually build is a ____ review.",
          answer: "constructability",
          accept: ["constructability", "constructibility"],
          explain: "A constructability review checks whether the design can be built efficiently and safely as drawn."
        },
        {
          type: "order",
          q: "Put these design phases in their normal order:",
          items: ["Programming", "Schematic design", "Design development", "Construction documents"],
          explain: "Design flows from programming to schematic design, then design development, then construction documents."
        },
        {
          type: "match",
          q: "Match each phase to its focus:",
          pairs: [
            ["Schematic design", "Overall concept and layout"],
            ["Design development", "Refining systems and details"],
            ["Construction documents", "Drawings to permit and build"]
          ],
          explain: "Each phase adds detail, moving from broad concept toward fully buildable documents."
        },
        {
          type: "truefalse",
          q: "Design development (DD) comes before schematic design (SD).",
          answer: false,
          explain: "Schematic design comes first; design development then refines that concept with more detail."
        }
      ]
    },
    {
      id: "l16",
      title: "Estimating & Takeoffs",
      intro: "Turning drawings into dollars.",
      questions: [
        {
          type: "mcq",
          q: "A quantity takeoff is:",
          choices: ["Removing items from a budget", "Counting and measuring materials from the drawings", "A discount from a supplier", "A safety inspection"],
          answer: 1,
          explain: "A takeoff lists and measures all materials and quantities needed, pulled from the project drawings."
        },
        {
          type: "mcq",
          q: "Costs tied directly to physical work, like concrete and labor to place it, are:",
          choices: ["Direct costs", "Indirect costs", "Soft costs", "Sunk costs"],
          answer: 0,
          explain: "Direct costs are tied to specific work items such as materials, labor, and equipment in place."
        },
        {
          type: "mcq",
          q: "An estimator adds a ____ to cover unforeseen conditions and risk.",
          choices: ["Contingency", "Commission", "Coupon", "Credit"],
          answer: 0,
          explain: "A contingency is money set aside in the estimate to absorb unexpected costs and risk."
        },
        {
          type: "truefalse",
          q: "Hard costs are the physical construction costs, while soft costs include design fees and permits.",
          answer: true,
          explain: "Hard costs are bricks-and-mortar work; soft costs cover design, permits, legal, and financing."
        },
        {
          type: "fill",
          q: "The price for one item or measured unit, like cost per square foot, is the ____ cost.",
          answer: "unit",
          accept: ["unit", "unit price"],
          explain: "Unit cost is the price for a single unit of work, multiplied by quantity to build an estimate."
        },
        {
          type: "mcq",
          q: "Overhead and profit added by a contractor typically covers:",
          choices: ["Company operating costs plus margin", "Only material taxes", "The owner's financing", "Subcontractor permits only"],
          answer: 0,
          explain: "Overhead covers the contractor's general operating expenses, and profit is the markup beyond cost."
        },
        {
          type: "match",
          q: "Match each cost term to its meaning:",
          pairs: [
            ["Direct cost", "Cost of physical work in place"],
            ["Indirect cost", "Project support and overhead"],
            ["Contingency", "Reserve for the unexpected"]
          ],
          explain: "Estimators separate direct, indirect, and contingency costs to build an accurate total."
        },
        {
          type: "truefalse",
          q: "Soft costs include the actual labor and materials that go into the structure.",
          answer: false,
          explain: "Labor and materials are hard costs; soft costs are non-construction items like fees and permits."
        }
      ]
    },
    {
      id: "l17",
      title: "Bidding & Procurement",
      intro: "How work gets priced, awarded, and bought out.",
      questions: [
        {
          type: "mcq",
          q: "An invitation to bid is:",
          choices: ["A request for contractors to submit prices for the work", "A permit application", "A change order", "A safety meeting notice"],
          answer: 0,
          explain: "An invitation to bid asks qualified contractors to submit proposals and pricing for a defined scope."
        },
        {
          type: "mcq",
          q: "A bid bond protects the owner by:",
          choices: ["Guaranteeing the bidder will honor their bid if selected", "Paying all subcontractors directly", "Covering site injuries", "Insuring the finished building"],
          answer: 0,
          explain: "A bid bond guarantees the bidder will enter the contract at their bid price or forfeit the bond."
        },
        {
          type: "mcq",
          q: "A formal change or clarification issued to all bidders during bidding is an:",
          choices: ["Addendum", "Affidavit", "Allowance", "Appraisal"],
          answer: 0,
          explain: "An addendum modifies or clarifies the bid documents and is sent to every bidder before bids are due."
        },
        {
          type: "truefalse",
          q: "Leveling bids means comparing them on an equal basis to ensure each covers the same scope.",
          answer: true,
          explain: "Bid leveling normalizes proposals so the owner compares apples to apples across all bidders."
        },
        {
          type: "fill",
          q: "A missing piece of work that no contractor included in their price is called a scope ____.",
          answer: "gap",
          accept: ["gap", "scope gap"],
          explain: "A scope gap is work that falls between trades or bid packages and risks being left unpriced."
        },
        {
          type: "mcq",
          q: "The process of finalizing and awarding subcontracts after winning a project is called:",
          choices: ["Buyout", "Takeoff", "Closeout", "Programming"],
          answer: 0,
          explain: "Buyout is when the general contractor negotiates and awards the subcontracts and purchase orders."
        },
        {
          type: "match",
          q: "Match each bidding term to its meaning:",
          pairs: [
            ["Bid package", "Documents defining a scope to price"],
            ["General contractor", "Holds the prime construction contract"],
            ["Addendum", "Change issued during bidding"]
          ],
          explain: "Bid packages, the general contractor role, and addenda are central to the bidding process."
        },
        {
          type: "truefalse",
          q: "A prime contractor is one that holds a direct contract with the project owner.",
          answer: true,
          explain: "A prime contractor contracts directly with the owner, unlike subcontractors who work under it."
        }
      ]
    },
    {
      id: "l18",
      title: "Contracts & Delivery Methods",
      intro: "Who designs, who builds, and how the money is structured.",
      questions: [
        {
          type: "mcq",
          q: "In design-bid-build (DBB), the design is fully completed before:",
          choices: ["The project is bid and built", "The owner buys the land", "Programming begins", "The site is surveyed"],
          answer: 0,
          explain: "In DBB, the design is finished first, then contractors bid on those complete documents to build it."
        },
        {
          type: "mcq",
          q: "Design-build (DB) is characterized by:",
          choices: ["One entity responsible for both design and construction", "No contract at all", "The owner doing the design", "Separate owners for each trade"],
          answer: 0,
          explain: "In design-build, a single entity holds responsibility for both designing and constructing the project."
        },
        {
          type: "mcq",
          q: "A Guaranteed Maximum Price (GMP) contract means:",
          choices: ["The owner pays whatever it costs with no cap", "Cost is reimbursed up to a capped maximum", "The price is unknown until completion", "Only materials are paid for"],
          answer: 1,
          explain: "Under a GMP, the owner reimburses costs but the contractor guarantees they will not exceed a set ceiling."
        },
        {
          type: "truefalse",
          q: "In a lump sum contract, the contractor agrees to do the defined work for one fixed price.",
          answer: true,
          explain: "A lump sum (fixed price) contract sets a single total price for the agreed scope of work."
        },
        {
          type: "fill",
          q: "Money withheld from each payment until the work is complete is called ____.",
          answer: "retainage",
          accept: ["retainage", "retention"],
          explain: "Retainage is a percentage held back from progress payments to ensure the work is finished properly."
        },
        {
          type: "mcq",
          q: "In CM at risk (CMAR), the construction manager:",
          choices: ["Only advises and takes no cost risk", "Commits to deliver the project, often under a GMP", "Designs the building alone", "Owns the property"],
          answer: 1,
          explain: "In CMAR, the construction manager takes on cost risk and commits to deliver, frequently under a GMP."
        },
        {
          type: "match",
          q: "Match each contract or method to its meaning:",
          pairs: [
            ["Cost-plus", "Costs plus a fee paid to contractor"],
            ["Design-build", "One entity designs and builds"],
            ["AIA contracts", "Standard industry contract forms"]
          ],
          explain: "Cost-plus, design-build, and AIA standard forms are common contracting concepts in construction."
        },
        {
          type: "truefalse",
          q: "AIA contracts are widely used standardized agreement forms in the construction industry.",
          answer: true,
          explain: "The American Institute of Architects publishes standard contract forms used across many projects."
        }
      ]
    }
  ]
});
