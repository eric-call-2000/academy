window.ACADEMY.addUnit("construction", {
  id: "unit-8",
  title: "Estimating & Blueprint Takeoffs",
  color: "#f25f9c",
  icon: "🧮",
  description: "Turning drawings into numbers: counting and measuring quantities, choosing units, and pricing the work into a bid.",
  lessons: [
    {
      id: "l64",
      title: "Takeoff & Estimate Basics",
      intro: "An estimate starts by measuring quantities off the drawings, then attaching a price to each one.",
      questions: [
        {
          type: "mcq",
          q: "What is a quantity takeoff?",
          choices: ["Counting and measuring the materials and work shown on the drawings", "Removing waste material from a site", "A discount taken off a supplier invoice", "The deadline to submit a bid"],
          answer: 0,
          explain: "A takeoff is the process of measuring and counting every item of work from the plans so it can be priced."
        },
        {
          type: "mcq",
          q: "Which estimate type is the rough, early-stage number based on overall size or capacity, with low accuracy?",
          choices: ["Conceptual (ROM) estimate", "Detailed unit-price estimate", "Assembly estimate", "Subcontractor quote"],
          answer: 0,
          explain: "A conceptual or rough-order-of-magnitude estimate is made early with little design and is the least precise."
        },
        {
          type: "mcq",
          q: "Which is the most accurate estimate, built by pricing every measured item of work?",
          choices: ["Detailed (unit-price) estimate", "Square-foot estimate", "Conceptual estimate", "ROM estimate"],
          answer: 0,
          explain: "A detailed unit-price estimate prices each takeoff quantity individually and is the most accurate but most time-consuming."
        },
        {
          type: "truefalse",
          q: "A budget is the owner's spending target, while a bid is the price a contractor offers to do the work.",
          answer: true,
          explain: "A budget guides how much an owner plans to spend; a bid is a contractor's committed price to perform the work."
        },
        {
          type: "fill",
          q: "The person who prepares the cost estimate and quantity takeoff is called the ____.",
          answer: "estimator",
          accept: ["estimator", "quantity surveyor", "qs"],
          explain: "The estimator, known in many countries as the quantity surveyor, measures quantities and prices the work."
        },
        {
          type: "order",
          q: "Order these estimate types from least accurate to most accurate.",
          items: ["Conceptual / ROM", "Square-foot", "Assembly", "Detailed unit-price"],
          explain: "As design develops, the estimate moves from a rough conceptual number to a precise item-by-item detailed estimate."
        },
        {
          type: "match",
          q: "Match each estimate type to its basis.",
          pairs: [
            ["Square-foot", "Cost per area times building size"],
            ["Assembly", "Cost grouped by building system"],
            ["Detailed", "Each measured item priced separately"],
            ["Conceptual", "Rough cost from size or capacity"]
          ],
          explain: "Each method trades speed for accuracy, from quick square-foot pricing to a full detailed buildup."
        },
        {
          type: "mcq",
          q: "An assembly (systems) estimate prices work by:",
          choices: ["Grouping related items into one unit, like a complete wall per square foot", "Counting only the doors", "Using last year's total job cost", "Guessing from a photo"],
          answer: 0,
          explain: "An assembly estimate bundles materials and labor for a system, such as a finished wall, into a single unit price."
        }
      ]
    },
    {
      id: "l65",
      title: "Reading Plans for Takeoff",
      intro: "Knowing which sheet shows what lets you count and measure each item only once, from the right drawing.",
      questions: [
        {
          type: "mcq",
          q: "On a drawing set, what does the scale tell you?",
          choices: ["How a measured length on paper relates to real-world size", "The total project cost", "The number of sheets", "The crew size needed"],
          answer: 0,
          explain: "Scale, such as 1/4 inch equals 1 foot, converts a measured distance on the sheet into actual dimensions."
        },
        {
          type: "mcq",
          q: "Which sheet schedule lists every door with its size, type and hardware?",
          choices: ["Door schedule", "Finish schedule", "Window schedule", "Equipment schedule"],
          answer: 0,
          explain: "A door schedule tabulates each door so you can count and specify them without scaling the plan."
        },
        {
          type: "truefalse",
          q: "A section is a cut through the building that shows how things stack vertically, while a plan is a horizontal top-down view.",
          answer: true,
          explain: "Plans look down from above; sections slice through to reveal heights, layers and how assemblies are built."
        },
        {
          type: "fill",
          q: "The list at the front of a set that names every sheet is the drawing ____.",
          answer: "index",
          accept: ["index", "drawing index", "sheet index"],
          explain: "The drawing index, often on the cover sheet, helps you find which sheet holds the information you need."
        },
        {
          type: "mcq",
          q: "A continuous line of linked dimensions along a wall is called a:",
          choices: ["Dimension string", "Callout", "Title block", "Revision cloud"],
          answer: 0,
          explain: "A dimension string ties consecutive measurements together so you can read overall and incremental lengths."
        },
        {
          type: "match",
          q: "Match each schedule to what it counts.",
          pairs: [
            ["Door schedule", "Doors and their hardware"],
            ["Window schedule", "Window sizes and types"],
            ["Finish schedule", "Room floor, wall and ceiling finishes"],
            ["Equipment schedule", "Fixed equipment and appliances"]
          ],
          explain: "Schedules organize repeating items in a table so the estimator counts them quickly and accurately."
        },
        {
          type: "order",
          q: "Order these steps for starting a plan takeoff.",
          items: ["Open the drawing index", "Find the relevant sheet", "Confirm the scale", "Measure or count the items"],
          explain: "You locate the right sheet, verify its scale, then measure or count, so every quantity comes from the correct source."
        },
        {
          type: "mcq",
          q: "A callout (detail bubble) on a plan usually points you to:",
          choices: ["An enlarged detail drawing elsewhere in the set", "The contractor's phone number", "The bid due date", "The paint color only"],
          answer: 0,
          explain: "A callout references another sheet or detail where that condition is drawn at a larger, clearer scale."
        }
      ]
    },
    {
      id: "l66",
      title: "Units of Measure",
      intro: "Every item gets measured in the unit that fits it, from each piece to cubic yards of concrete.",
      questions: [
        {
          type: "mcq",
          q: "Items like doors, toilets and light fixtures are taken off in which unit?",
          choices: ["Each (EA), a simple count", "Square foot (SF)", "Cubic yard (CY)", "Linear foot (LF)"],
          answer: 0,
          explain: "Discrete, countable items are measured as Each (EA) rather than by length, area or volume."
        },
        {
          type: "mcq",
          q: "Baseboard trim, pipe and curb are typically measured in:",
          choices: ["Linear feet (LF)", "Square feet (SF)", "Cubic yards (CY)", "Tons"],
          answer: 0,
          explain: "Long, thin items are measured by their length in linear feet (LF)."
        },
        {
          type: "mcq",
          q: "Concrete poured into footings and slabs is measured in:",
          choices: ["Cubic yards (CY)", "Square feet (SF)", "Linear feet (LF)", "Each (EA)"],
          answer: 0,
          explain: "Concrete is a volume, so it is taken off and ordered in cubic yards in the US."
        },
        {
          type: "truefalse",
          q: "A board foot equals a volume of 144 cubic inches, the amount in a 1 inch by 12 inch by 12 inch piece of lumber.",
          answer: true,
          explain: "Lumber is sold by the board foot, the nominal volume of a board one foot square and one inch thick."
        },
        {
          type: "fill",
          q: "Flooring and wall area are usually measured in square ____.",
          answer: "feet",
          accept: ["feet", "foot", "ft"],
          explain: "Area quantities like flooring, drywall and paint are taken off in square feet (SF)."
        },
        {
          type: "match",
          q: "Match each item to its usual unit.",
          pairs: [
            ["Carpet", "Square yard (SY)"],
            ["Structural steel", "Ton"],
            ["Baseboard", "Linear foot (LF)"],
            ["Concrete slab", "Cubic yard (CY)"]
          ],
          explain: "Choosing the right unit, area, weight, length or volume, is the foundation of a correct takeoff."
        },
        {
          type: "mcq",
          q: "Carpet and some paving are often priced by the square yard. One square yard equals how many square feet?",
          choices: ["9", "3", "12", "27"],
          answer: 0,
          explain: "A yard is 3 feet, so a square yard is 3 by 3, which equals 9 square feet."
        },
        {
          type: "fill",
          q: "Structural steel and rebar quantities are often summarized by weight in ____.",
          answer: "tons",
          accept: ["tons", "ton", "pounds", "lbs"],
          explain: "Heavy metals are commonly converted to weight, with steel summarized in tons for pricing and handling."
        }
      ]
    },
    {
      id: "l67",
      title: "Takeoff Methods",
      intro: "Whether scaling by hand or measuring on screen, every quantity is a count, length, area or volume.",
      questions: [
        {
          type: "mcq",
          q: "Which tool is used to measure distances directly on a paper drawing?",
          choices: ["A scale ruler (architect's or engineer's scale)", "A torque wrench", "A laser level", "A moisture meter"],
          answer: 0,
          explain: "A scale ruler reads off true dimensions at the drawing's scale for manual takeoff."
        },
        {
          type: "mcq",
          q: "What is on-screen (digital) takeoff?",
          choices: ["Measuring quantities directly on an electronic drawing with software", "Printing the plans larger", "Faxing the plans to a sub", "Counting by hand only"],
          answer: 0,
          explain: "Digital takeoff lets the estimator click counts and trace lengths and areas right on a PDF or CAD file."
        },
        {
          type: "mcq",
          q: "Which is NOT one of the four basic takeoff measures?",
          choices: ["Color", "Count", "Length", "Area"],
          answer: 0,
          explain: "The four fundamental measures are count, length, area and volume; color is not a quantity measure."
        },
        {
          type: "truefalse",
          q: "Double counting an item, measuring it on two different sheets, inflates the estimate and should be avoided.",
          answer: true,
          explain: "Counting the same work twice adds cost that is not there, so estimators track what has already been measured."
        },
        {
          type: "fill",
          q: "In takeoff software, a saved item with its unit and color used to mark a quantity is called a ____.",
          answer: "condition",
          accept: ["condition", "conditions"],
          explain: "A condition defines what is being measured and how, so each marked item lands in the right quantity bucket."
        },
        {
          type: "order",
          q: "Order the four basic measures from simplest to most dimensional.",
          items: ["Count", "Length", "Area", "Volume"],
          explain: "Count is a tally, length is one dimension, area is two, and volume is three dimensions of measurement."
        },
        {
          type: "match",
          q: "Match each measure to an example item.",
          pairs: [
            ["Count", "Light fixtures"],
            ["Length", "Baseboard trim"],
            ["Area", "Floor tile"],
            ["Volume", "Slab concrete"]
          ],
          explain: "Matching the item to the right measure keeps each quantity in its correct unit."
        },
        {
          type: "mcq",
          q: "An assembly in takeoff is useful because it:",
          choices: ["Counts one item but generates several related quantities at once", "Hides the scope from the estimator", "Replaces the drawings", "Eliminates the need for pricing"],
          answer: 0,
          explain: "An assembly links components, so counting one wall can produce studs, plates, drywall and screws together."
        }
      ]
    },
    {
      id: "l68",
      title: "Concrete & Sitework Takeoff",
      intro: "Concrete is measured by volume, rebar by length and weight, and formwork by the area it touches.",
      questions: [
        {
          type: "mcq",
          q: "To get concrete volume for a footing, you multiply:",
          choices: ["Width by depth by length, then convert to cubic yards", "Length by the price", "Width by the number of doors", "Area by the scale only"],
          answer: 0,
          explain: "Concrete is length times width times depth, then the cubic feet are divided by 27 to get cubic yards."
        },
        {
          type: "fill",
          q: "There are ____ cubic feet in one cubic yard.",
          answer: "27",
          accept: ["27", "twenty-seven", "twenty seven"],
          explain: "A cubic yard is 3 by 3 by 3 feet, which equals 27 cubic feet, the conversion used to order concrete."
        },
        {
          type: "mcq",
          q: "Why do estimators add a waste or shrinkage factor to a concrete quantity?",
          choices: ["To cover spillage, over-excavation and uneven subgrade", "To make the bid look higher", "Because concrete shrinks to nothing", "To pay for rebar separately"],
          answer: 0,
          explain: "A small percentage is added so the order accounts for spillage and ground irregularities, avoiding a short pour."
        },
        {
          type: "truefalse",
          q: "Rebar is typically taken off by total length and then converted to weight for pricing.",
          answer: true,
          explain: "Reinforcing steel is measured in linear feet, then converted to pounds or tons using the bar size weight."
        },
        {
          type: "mcq",
          q: "Formwork is most often measured by:",
          choices: ["Square feet of contact area (SFCA) against the concrete", "Cubic yards", "Each", "Tons"],
          answer: 0,
          explain: "Formwork is quantified as the area of form face touching the concrete, called square feet of contact area."
        },
        {
          type: "match",
          q: "Match each sitework item to its takeoff unit.",
          pairs: [
            ["Slab concrete", "Cubic yard"],
            ["Rebar", "Length then weight"],
            ["Formwork", "Square feet of contact"],
            ["Excavation", "Cubic yard of cut or fill"]
          ],
          explain: "Each component uses the unit that matches how it is bought and placed in the field."
        },
        {
          type: "mcq",
          q: "In earthwork, the difference between cut and fill describes:",
          choices: ["Material removed versus material added to reach grade", "The price of concrete", "The number of footings", "The rebar spacing"],
          answer: 0,
          explain: "Cut is soil excavated away and fill is soil brought in or moved to build the site up to the design grade."
        },
        {
          type: "fill",
          q: "Concrete cubic feet are divided by ____ to convert the quantity to cubic yards.",
          answer: "27",
          accept: ["27", "twenty-seven", "twenty seven"],
          explain: "Dividing total cubic feet by 27 yields cubic yards, the unit suppliers use to batch and deliver concrete."
        }
      ]
    },
    {
      id: "l69",
      title: "Framing & Drywall Takeoff",
      intro: "Lumber is counted by board feet and pieces, while sheet goods are counted by the sheet plus a waste factor.",
      questions: [
        {
          type: "mcq",
          q: "Dimensional lumber volume for pricing is measured in:",
          choices: ["Board feet (BF)", "Square yards", "Tons", "Cubic yards"],
          answer: 0,
          explain: "Framing lumber is quantified in board feet, the nominal volume measure used to price wood."
        },
        {
          type: "mcq",
          q: "To estimate studs in a wall, you mainly use the wall length and the:",
          choices: ["On-center spacing of the studs", "Paint color", "Number of doors only", "Roof pitch"],
          answer: 0,
          explain: "Dividing wall length by the on-center spacing, then adding for corners and openings, gives the stud count."
        },
        {
          type: "fill",
          q: "Horizontal framing members at the top and bottom of a stud wall are called ____.",
          answer: "plates",
          accept: ["plates", "plate"],
          explain: "Top and bottom plates run the length of the wall, so their lumber is taken off by wall length."
        },
        {
          type: "truefalse",
          q: "Plywood and OSB sheathing are taken off by the number of 4 foot by 8 foot sheets.",
          answer: true,
          explain: "Sheet goods cover 32 square feet each, so area is divided by 32, or sheets are counted directly, plus waste."
        },
        {
          type: "mcq",
          q: "Drywall is commonly taken off by:",
          choices: ["Square feet of wall and ceiling, then converted to sheets", "Cubic yards", "Linear feet only", "Tons"],
          answer: 0,
          explain: "Wall and ceiling area is measured in square feet, then divided by the sheet size to get the number of boards."
        },
        {
          type: "mcq",
          q: "Why add a waste factor to framing and drywall quantities?",
          choices: ["To cover cutoffs, breakage and offcuts that cannot be reused", "To inflate profit", "Because lumber evaporates", "To skip ordering plates"],
          answer: 0,
          explain: "A few percent extra accounts for cuts, damage and scrap so the crew does not run short on material."
        },
        {
          type: "order",
          q: "Order the steps to estimate studs for a wall.",
          items: ["Measure the wall length", "Divide by the on-center spacing", "Add studs for corners and openings", "Apply a waste factor"],
          explain: "Length divided by spacing gives the base count, then extras and waste round out a realistic quantity."
        },
        {
          type: "match",
          q: "Match each framing item to how it is counted.",
          pairs: [
            ["Studs", "Wall length divided by spacing"],
            ["Plates", "By total wall length"],
            ["Sheathing", "Number of 4x8 sheets"],
            ["Headers", "Each opening"]
          ],
          explain: "Each member type has a natural counting method tied to how it is placed in the wall."
        }
      ]
    },
    {
      id: "l70",
      title: "Pricing the Takeoff",
      intro: "Each quantity gets a unit cost built from material, labor and equipment, plus markup for overhead and profit.",
      questions: [
        {
          type: "mcq",
          q: "A unit cost is typically built from which three components?",
          choices: ["Material, labor and equipment", "Material, paint and weather", "Labor, taxes and lunch", "Permits, fuel and parking"],
          answer: 0,
          explain: "The unit-price buildup adds the material, labor and equipment cost to do one unit of that work."
        },
        {
          type: "fill",
          q: "How fast a crew installs work, such as squares of shingles per day, is the labor ____ rate.",
          answer: "productivity",
          accept: ["productivity", "production", "output"],
          explain: "Labor productivity, or output rate, tells how much work a crew completes in a unit of time, driving labor cost."
        },
        {
          type: "truefalse",
          q: "Lower labor productivity means it takes more labor hours, which raises the labor cost per unit.",
          answer: true,
          explain: "Slower output means more hours per unit, so each unit carries more labor cost."
        },
        {
          type: "mcq",
          q: "What is markup in an estimate?",
          choices: ["The amount added to direct cost to cover overhead and profit", "A red pen note on the plans", "The drawing scale", "The waste factor"],
          answer: 0,
          explain: "Markup is added on top of direct costs so the contractor recovers overhead and earns a profit."
        },
        {
          type: "mcq",
          q: "Overhead in pricing usually refers to:",
          choices: ["Indirect costs of running the business and the job, like office and supervision", "Only the roof materials", "The crane height", "The architect's fee"],
          answer: 0,
          explain: "Overhead covers indirect costs such as office expenses, insurance and supervision not tied to one work item."
        },
        {
          type: "match",
          q: "Match each cost element to its meaning.",
          pairs: [
            ["Material", "The physical goods installed"],
            ["Labor", "Worker wages and burden"],
            ["Equipment", "Tools and machinery cost"],
            ["Profit", "Earnings above all costs"]
          ],
          explain: "Direct costs are material, labor and equipment; profit is what remains after costs and overhead."
        },
        {
          type: "order",
          q: "Order the steps to build a unit price.",
          items: ["Find the labor output rate", "Add material cost per unit", "Add equipment cost per unit", "Apply overhead and profit"],
          explain: "You combine material, labor and equipment into a direct unit cost, then add markup for overhead and profit."
        },
        {
          type: "fill",
          q: "A group of workers of set composition who perform the work together is called a ____.",
          answer: "crew",
          accept: ["crew", "crews"],
          explain: "A crew is a defined mix of trades and helpers whose combined cost and output set the labor rate."
        }
      ]
    },
    {
      id: "l71",
      title: "From Takeoff to Bid",
      intro: "Extending quantities by unit prices and adding contingency and sub quotes turns the estimate into a bid.",
      questions: [
        {
          type: "mcq",
          q: "Extending a takeoff means:",
          choices: ["Multiplying each quantity by its unit price to get a line item total", "Making the drawings bigger", "Adding more days to the schedule", "Deleting scope"],
          answer: 0,
          explain: "Extension multiplies quantity by unit price for each item, and the line totals are summed into the estimate."
        },
        {
          type: "fill",
          q: "The sheet that totals all line items into the estimate is the summary or ____ sheet.",
          answer: "recap",
          accept: ["recap", "recapitulation", "summary"],
          explain: "The recap or summary sheet rolls up every extended line into the overall estimated cost."
        },
        {
          type: "mcq",
          q: "Contingency in a bid is:",
          choices: ["Money set aside for unknowns and risk", "The profit only", "The drawing scale", "A type of rebar"],
          answer: 0,
          explain: "Contingency is a reserve added to cover unforeseen conditions and estimating uncertainty."
        },
        {
          type: "truefalse",
          q: "An allowance is a placeholder dollar amount carried for work that is not yet fully defined.",
          answer: true,
          explain: "Allowances hold a budgeted sum for items, such as a finish selection, that the owner has not finalized."
        },
        {
          type: "mcq",
          q: "A subcontractor plug or quote in an estimate is:",
          choices: ["A price the sub provides for their scope, inserted into the estimate", "A drywall fastener", "The general's profit", "A type of dimension string"],
          answer: 0,
          explain: "A sub quote is the price a specialty contractor gives for their portion, dropped into the general's estimate."
        },
        {
          type: "fill",
          q: "Comparing competing subcontractor quotes to confirm equal scope is called ____ the bids.",
          answer: "leveling",
          accept: ["leveling", "levelling", "scrubbing"],
          explain: "Leveling, or scrubbing, ensures each sub covered the same scope so quotes can be compared fairly."
        },
        {
          type: "order",
          q: "Order these steps from finished takeoff to submitted bid.",
          items: ["Extend quantities by unit price", "Total the recap sheet", "Add sub quotes, allowances and contingency", "Submit the bid"],
          explain: "Extensions feed the recap, then sub prices and reserves are added before the final number is submitted."
        },
        {
          type: "match",
          q: "Match each bid term to its purpose.",
          pairs: [
            ["Contingency", "Reserve for unknowns"],
            ["Allowance", "Placeholder for undefined work"],
            ["Plug", "Inserted sub price"],
            ["Leveling", "Comparing sub scopes equally"]
          ],
          explain: "These adjustments make the final bid complete, comparable and protected against surprises."
        }
      ]
    },
    {
      id: "l72",
      title: "Tools & Common Pitfalls",
      intro: "Software and cost databases speed the work, but careful checking catches the errors that wreck a bid.",
      questions: [
        {
          type: "mcq",
          q: "A widely used published construction cost database is:",
          choices: ["RSMeans", "The drawing index", "A torque chart", "The door schedule"],
          answer: 0,
          explain: "RSMeans publishes unit costs and productivity rates estimators use as a pricing reference."
        },
        {
          type: "mcq",
          q: "Compared with a spreadsheet, dedicated estimating software mainly helps by:",
          choices: ["Linking takeoff to pricing and reducing manual transfer errors", "Drawing the building", "Pouring the concrete", "Hiring the crew"],
          answer: 0,
          explain: "Estimating software ties quantities to cost data and recaps, cutting the hand transfers where mistakes creep in."
        },
        {
          type: "truefalse",
          q: "Missed scope, where a needed item is left out of the takeoff, is a common cause of a low, losing bid.",
          answer: true,
          explain: "Forgetting scope means the price is too low to cover the work, a frequent and costly estimating error."
        },
        {
          type: "fill",
          q: "Reading a plan at the wrong ____ makes every scaled measurement incorrect.",
          answer: "scale",
          accept: ["scale"],
          explain: "Using the wrong scale throws off all measured lengths and areas, corrupting the whole takeoff."
        },
        {
          type: "mcq",
          q: "Writing 1,250 as 1,520 by accident is an example of a:",
          choices: ["Transposed number error", "Unit mismatch", "Waste factor", "Markup"],
          answer: 0,
          explain: "Transposing digits swaps their order and silently changes a quantity or price, so totals must be checked."
        },
        {
          type: "mcq",
          q: "A unit mismatch error happens when you:",
          choices: ["Multiply a quantity by a price meant for a different unit", "Use the right crew", "Add contingency", "Read the correct scale"],
          answer: 0,
          explain: "Pricing square feet with a per-cubic-yard cost, for example, produces a wildly wrong total."
        },
        {
          type: "order",
          q: "Order these checking steps before finalizing an estimate.",
          items: ["Confirm units match prices", "Verify scale and quantities", "Recheck math and extensions", "Review for missed scope"],
          explain: "A disciplined review of units, quantities, math and scope catches the errors that sink a bid."
        },
        {
          type: "match",
          q: "Match each pitfall to its description.",
          pairs: [
            ["Missed scope", "Work left out of the takeoff"],
            ["Wrong scale", "Measuring at the wrong ratio"],
            ["Unit mismatch", "Price and quantity in different units"],
            ["Transposed number", "Digits entered out of order"]
          ],
          explain: "Knowing the classic errors helps the estimator hunt them down during a final review."
        }
      ]
    }
  ]
});
