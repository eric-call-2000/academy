window.ACADEMY.addUnit("construction", {
  id: "unit-3",
  title: "Sitework & Foundations",
  color: "#ff9600",
  icon: "🏗️",
  description: "Breaking ground: earthwork, utilities, concrete, rebar, formwork and the foundation systems that carry the building.",
  lessons: [
    {
      id: "l19",
      title: "Site Prep & Demolition",
      intro: "Before anything gets built, the site has to be cleared, controlled and made ready for work.",
      questions: [
        {
          type: "mcq",
          q: "What does clearing and grubbing remove from a site?",
          choices: ["Trees, brush, stumps and roots", "Old concrete footings", "Existing utility lines", "The water table"],
          answer: 0,
          explain: "Clearing removes surface vegetation and grubbing pulls out the roots and stumps below grade."
        },
        {
          type: "mcq",
          q: "Why is topsoil stripped and stockpiled separately rather than mixed into fill?",
          choices: ["It is too heavy to haul", "It is organic and compresses, making it a poor structural base", "It is radioactive", "It speeds up concrete curing"],
          answer: 1,
          explain: "Organic topsoil decomposes and settles, so it is removed from structural areas and saved for final landscaping."
        },
        {
          type: "truefalse",
          q: "A silt fence is installed to keep sediment-laden runoff from leaving the site.",
          answer: true,
          explain: "Silt fence is a temporary erosion control barrier that traps soil while letting water filter through."
        },
        {
          type: "fill",
          q: "The federally required erosion plan for a construction site is called a ____.",
          answer: "swppp",
          accept: ["swppp", "storm water pollution prevention plan", "stormwater pollution prevention plan"],
          explain: "A SWPPP (Storm Water Pollution Prevention Plan) documents how a site will control erosion and runoff."
        },
        {
          type: "mcq",
          q: "What is a laydown or staging area used for?",
          choices: ["Pouring concrete", "Storing materials, equipment and deliveries on site", "Testing soil compaction", "Connecting to the sewer"],
          answer: 1,
          explain: "The laydown or staging area is the organized space where materials and equipment are received and stored."
        },
        {
          type: "match",
          q: "Match each temporary site item to its purpose.",
          pairs: [
            ["Silt fence", "Traps sediment in runoff"],
            ["Construction fence", "Secures the site perimeter"],
            ["Portable toilet", "Temporary worker facilities"]
          ],
          explain: "Temporary facilities and controls keep a site safe, legal and functional during construction."
        },
        {
          type: "order",
          q: "Put these early site activities in the order they typically happen.",
          items: ["Install erosion control", "Clear and grub", "Strip and stockpile topsoil", "Set up staging area"],
          explain: "Erosion control goes in first to protect the site, then vegetation is cleared, topsoil saved, and staging set up."
        },
        {
          type: "truefalse",
          q: "Demolition of an existing structure always happens after new foundations are poured.",
          answer: false,
          explain: "Demolition clears the way and is done early, long before any new foundation work begins."
        }
      ]
    },
    {
      id: "l20",
      title: "Excavation & Earthwork",
      intro: "Moving dirt to the right shape and elevation is the foundation of every foundation.",
      questions: [
        {
          type: "mcq",
          q: "In earthwork, what do cut and fill describe?",
          choices: ["Two types of rebar", "Removing soil (cut) and adding soil (fill)", "Concrete admixtures", "Trench shoring methods"],
          answer: 1,
          explain: "Cut is soil excavated and removed; fill is soil placed and compacted to raise an area to grade."
        },
        {
          type: "fill",
          q: "Excavated dirt that is hauled off site is commonly called ____.",
          answer: "spoils",
          accept: ["spoils", "spoil"],
          explain: "Spoils are the excess excavated soil that must be moved off site or relocated."
        },
        {
          type: "mcq",
          q: "What is over-excavation?",
          choices: ["Digging beyond design limits, often to remove bad soil and replace with engineered fill", "Excavating in the rain", "Digging without a permit", "Reusing topsoil as structural fill"],
          answer: 0,
          explain: "Over-excavation removes unsuitable soil below the planned depth so it can be replaced with compacted engineered fill."
        },
        {
          type: "truefalse",
          q: "Shoring is a system used to support the walls of a trench or excavation and prevent collapse.",
          answer: true,
          explain: "Shoring braces excavation walls so soil cannot cave in on workers below."
        },
        {
          type: "mcq",
          q: "Benching and sloping are two trench-safety methods that protect workers by doing what?",
          choices: ["Adding rebar to the walls", "Cutting the walls back at an angle or in steps so they cannot collapse", "Filling the trench with water", "Speeding up the dig"],
          answer: 1,
          explain: "Sloping angles the walls back and benching cuts them in steps so the soil stays stable."
        },
        {
          type: "fill",
          q: "Pumping groundwater out of an excavation to keep it dry is called ____.",
          answer: "dewatering",
          accept: ["dewatering", "de-watering"],
          explain: "Dewatering lowers the water table or removes accumulated water so work can proceed in dry conditions."
        },
        {
          type: "match",
          q: "Match each earthwork term to its meaning.",
          pairs: [
            ["Cut", "Soil removed from an area"],
            ["Fill", "Soil added and compacted"],
            ["Spoils", "Excess dirt hauled away"]
          ],
          explain: "Balancing cut and fill on a site reduces how much spoil must be imported or exported."
        },
        {
          type: "mcq",
          q: "Who is the excavation subcontractor on most projects?",
          choices: ["The framing crew", "The earthwork or grading contractor who digs, moves and compacts soil", "The concrete finisher", "The electrician"],
          answer: 1,
          explain: "The excavation or earthwork sub handles digging, grading, hauling and soil compaction before structures go in."
        }
      ]
    },
    {
      id: "l21",
      title: "Grading & Drainage",
      intro: "Getting the ground to the right shape and slope keeps water away from the building.",
      questions: [
        {
          type: "mcq",
          q: "What is the difference between rough grading and fine grading?",
          choices: ["Rough is done by hand, fine by machine", "Rough gets the site near final elevation; fine sets exact, smooth final grade", "They are the same thing", "Rough is for concrete, fine is for asphalt"],
          answer: 1,
          explain: "Rough grading brings the site close to design elevations; fine grading dials in the precise finished surface."
        },
        {
          type: "fill",
          q: "Sloping the ground so water flows away from the building is called ____ drainage.",
          answer: "positive",
          accept: ["positive"],
          explain: "Positive drainage directs surface water away from foundations to prevent moisture problems."
        },
        {
          type: "mcq",
          q: "A swale is best described as what?",
          choices: ["A buried pipe", "A shallow, graded channel that directs surface water", "A type of compactor", "A concrete curb"],
          answer: 1,
          explain: "A swale is a low, gently sloped channel that collects and carries runoff away from structures."
        },
        {
          type: "truefalse",
          q: "Subgrade is the compacted native or fill soil that supports a slab or pavement above it.",
          answer: true,
          explain: "The subgrade is the prepared soil layer that everything structural sits on top of."
        },
        {
          type: "mcq",
          q: "A Proctor test measures what property of soil?",
          choices: ["Its color", "Its maximum density and optimum moisture for compaction", "Its acidity", "Its rebar content"],
          answer: 1,
          explain: "The Proctor test establishes a soil's target density and moisture so field compaction can be verified against it."
        },
        {
          type: "fill",
          q: "Slope is often expressed as a ____ percentage, such as 2 percent away from the building.",
          answer: "grade",
          accept: ["grade", "slope"],
          explain: "Grade percentage states vertical rise or fall over horizontal distance, like 2 percent for drainage away from a wall."
        },
        {
          type: "match",
          q: "Match each grading and drainage term to its role.",
          pairs: [
            ["Swale", "Channel that carries runoff"],
            ["Subgrade", "Compacted soil under a slab"],
            ["Geotextile fabric", "Separates soil layers and adds stability"]
          ],
          explain: "Each element manages water or soil so the finished surface stays stable and dry."
        },
        {
          type: "mcq",
          q: "Why is geotextile fabric placed between soil and gravel base?",
          choices: ["To add color", "To separate layers, stop soil from mixing into the gravel, and improve stability", "To waterproof the concrete", "To slow concrete curing"],
          answer: 1,
          explain: "Geotextile fabric keeps subgrade soil and aggregate from intermixing, which preserves drainage and load capacity."
        }
      ]
    },
    {
      id: "l22",
      title: "Underground Utilities",
      intro: "Water, sewer, gas and power lines all go in the ground before the building rises.",
      questions: [
        {
          type: "mcq",
          q: "Which underground line carries wastewater away from the building?",
          choices: ["Storm drain", "Sanitary sewer", "Water main", "Gas line"],
          answer: 1,
          explain: "The sanitary sewer carries wastewater from fixtures, while the storm drain handles rainwater runoff."
        },
        {
          type: "mcq",
          q: "What is the difference between a sanitary sewer and a storm drain?",
          choices: ["There is no difference", "Sanitary carries wastewater; storm drain carries rainwater runoff", "Sanitary carries gas; storm carries water", "Storm is indoors, sanitary is outdoors"],
          answer: 1,
          explain: "Sanitary sewers take building wastewater; storm drains collect and route surface rainwater separately."
        },
        {
          type: "fill",
          q: "The inside-bottom elevation of a pipe, which sets its slope, is the ____ elevation.",
          answer: "invert",
          accept: ["invert"],
          explain: "The invert is the lowest inside surface of a pipe, used to control gravity flow and slope."
        },
        {
          type: "truefalse",
          q: "Bedding is the prepared layer of material a pipe is laid on to support it evenly.",
          answer: true,
          explain: "Pipe bedding, usually sand or fine gravel, cradles the pipe so it is supported uniformly and not damaged."
        },
        {
          type: "mcq",
          q: "Before digging, crews call a locate service to do what?",
          choices: ["Order concrete", "Mark existing buried utilities so they are not struck", "Schedule inspections", "Test the soil"],
          answer: 1,
          explain: "Call-before-you-dig services locate and mark existing utilities to prevent dangerous, costly strikes."
        },
        {
          type: "fill",
          q: "Electrical wire run underground is usually pulled through protective ____.",
          answer: "conduit",
          accept: ["conduit"],
          explain: "Conduit is the protective pipe or tubing that houses and shields underground electrical conductors."
        },
        {
          type: "order",
          q: "Order these steps for installing an underground utility line.",
          items: ["Call for utility locates", "Excavate the trench", "Place bedding", "Lay and connect the pipe", "Backfill"],
          explain: "Locates first prevent strikes, then the trench is dug, bedded, the pipe laid, and the trench backfilled."
        },
        {
          type: "match",
          q: "Match each utility term to its meaning.",
          pairs: [
            ["Invert", "Inside bottom of a pipe"],
            ["Tie-in", "Connection to an existing main"],
            ["Bedding", "Support layer under a pipe"]
          ],
          explain: "A tie-in joins new pipe to the existing system, sitting on bedding and set to a designed invert."
        }
      ]
    },
    {
      id: "l23",
      title: "Concrete Fundamentals",
      intro: "Concrete is the workhorse of foundations, and knowing its ingredients matters.",
      questions: [
        {
          type: "mcq",
          q: "What is the relationship between cement and concrete?",
          choices: ["They are the same material", "Cement is an ingredient; concrete is the finished mix of cement, water and aggregate", "Concrete is an ingredient of cement", "Cement is only used in roads"],
          answer: 1,
          explain: "Cement is the binder; concrete is the cured product made from cement, water, sand and stone (aggregate)."
        },
        {
          type: "fill",
          q: "The crushed stone and sand mixed into concrete are called ____.",
          answer: "aggregate",
          accept: ["aggregate", "aggregates"],
          explain: "Aggregate, the sand and gravel, gives concrete bulk, strength and stability while reducing cost."
        },
        {
          type: "mcq",
          q: "Why does a lower water-cement ratio generally produce stronger concrete?",
          choices: ["More water always means more strength", "Less excess water leaves fewer voids, yielding a denser, stronger paste", "Water has no effect on strength", "It speeds delivery"],
          answer: 1,
          explain: "Excess water creates voids as it evaporates; a lower water-cement ratio gives denser, stronger concrete."
        },
        {
          type: "mcq",
          q: "What does a slump test measure?",
          choices: ["The color of concrete", "The workability or consistency of fresh concrete", "The rebar spacing", "The cure time"],
          answer: 1,
          explain: "Slump measures how much fresh concrete settles, indicating its workability and water content."
        },
        {
          type: "truefalse",
          q: "Concrete gains strength through curing, a chemical reaction called hydration, not simply by drying out.",
          answer: true,
          explain: "Hydration is the reaction between cement and water; keeping concrete moist during curing builds strength."
        },
        {
          type: "fill",
          q: "Concrete compressive strength is specified in ____, pounds per square inch.",
          answer: "psi",
          accept: ["psi", "pounds per square inch"],
          explain: "PSI rates how much compressive load concrete can carry; residential mixes are often 2500 to 4000 PSI."
        },
        {
          type: "mcq",
          q: "What are admixtures in concrete?",
          choices: ["The steel bars", "Chemicals added to modify properties like set time, workability or air content", "The wooden forms", "The aggregate"],
          answer: 1,
          explain: "Admixtures are additives that tune concrete behavior, such as accelerators, retarders or air-entraining agents."
        },
        {
          type: "match",
          q: "Match each concrete term to its meaning.",
          pairs: [
            ["Slump", "Workability of fresh concrete"],
            ["Hydration", "Cement-water reaction that builds strength"],
            ["Ready-mix", "Concrete batched off site and trucked in"]
          ],
          explain: "Ready-mix arrives pre-batched; its slump reflects workability, and hydration gives it final strength."
        }
      ]
    },
    {
      id: "l24",
      title: "Rebar & Reinforcement",
      intro: "Steel inside concrete carries the loads concrete alone cannot.",
      questions: [
        {
          type: "mcq",
          q: "Why are steel and concrete combined in reinforced concrete?",
          choices: ["Steel is cheaper than concrete", "Concrete is strong in compression but weak in tension, and steel handles the tension", "Steel makes concrete cure faster", "It only improves the color"],
          answer: 1,
          explain: "Concrete resists compression well but cracks under tension; embedded steel carries those tensile forces."
        },
        {
          type: "fill",
          q: "Reinforcing steel embedded in concrete is commonly called ____.",
          answer: "rebar",
          accept: ["rebar", "reinforcing bar", "reinforcing steel"],
          explain: "Rebar, short for reinforcing bar, is the deformed steel rod that strengthens concrete."
        },
        {
          type: "mcq",
          q: "A rebar size number like number 4 generally refers to what?",
          choices: ["Its length in feet", "Its diameter in eighths of an inch", "Its weight per foot", "Its grade of steel"],
          answer: 1,
          explain: "A bar number gives the diameter in eighths of an inch, so a number 4 bar is 4/8, or 1/2 inch."
        },
        {
          type: "mcq",
          q: "What is a lap splice?",
          choices: ["A bend at the end of a bar", "Overlapping two bars so loads transfer between them", "A weld between bars", "A coating on the steel"],
          answer: 1,
          explain: "A lap splice overlaps two bars a specified length so forces transfer continuously through the concrete."
        },
        {
          type: "truefalse",
          q: "Concrete cover is the layer of concrete between the rebar and the surface that protects steel from corrosion.",
          answer: true,
          explain: "Adequate cover shields rebar from moisture and fire, preventing rust that would crack the concrete."
        },
        {
          type: "mcq",
          q: "Welded wire mesh is most often used to reinforce what?",
          choices: ["Tall columns", "Flat slabs and slabs on grade", "Deep foundation piers", "Rebar splices"],
          answer: 1,
          explain: "Welded wire mesh is a grid of light wires used to control cracking in slabs and flatwork."
        },
        {
          type: "fill",
          q: "A bent end on a rebar that anchors it into the concrete is called a ____.",
          answer: "hook",
          accept: ["hook"],
          explain: "A hook is a standard bend at a bar end that develops anchorage where a straight lap will not fit."
        },
        {
          type: "match",
          q: "Match each reinforcement term to its meaning.",
          pairs: [
            ["Lap splice", "Overlap that joins two bars"],
            ["Cover", "Concrete protecting the steel"],
            ["Hook", "Bent anchor at a bar end"]
          ],
          explain: "Splices, hooks and cover all ensure the steel stays bonded, anchored and protected inside the concrete."
        }
      ]
    },
    {
      id: "l25",
      title: "Formwork",
      intro: "Forms are the temporary molds that shape concrete until it can stand on its own.",
      questions: [
        {
          type: "mcq",
          q: "What is formwork?",
          choices: ["The steel reinforcement", "The temporary mold that holds concrete in shape until it cures", "The finished concrete surface", "The curing compound"],
          answer: 1,
          explain: "Formwork is the temporary structure that contains and shapes wet concrete until it hardens."
        },
        {
          type: "fill",
          q: "A coating applied to forms so concrete will not stick is called form ____ agent.",
          answer: "release",
          accept: ["release", "release agent"],
          explain: "Form release agent lets forms strip cleanly away from the cured concrete without bonding."
        },
        {
          type: "mcq",
          q: "What is falsework?",
          choices: ["Defective formwork", "Temporary support that holds up forms and fresh concrete until it is self-supporting", "Permanent steel framing", "A waterproofing layer"],
          answer: 1,
          explain: "Falsework is the temporary supporting structure beneath formwork that carries loads until concrete cures."
        },
        {
          type: "truefalse",
          q: "Stripping forms means removing the formwork after the concrete has cured enough to hold its shape.",
          answer: true,
          explain: "Forms are stripped once the concrete has gained enough strength to support itself."
        },
        {
          type: "mcq",
          q: "Snap ties are used in formwork to do what?",
          choices: ["Lift the concrete trucks", "Hold opposing form walls at the correct spacing against concrete pressure", "Cut the rebar", "Smooth the surface"],
          answer: 1,
          explain: "Snap ties connect opposing form faces and resist the outward pressure of fresh concrete, keeping wall thickness uniform."
        },
        {
          type: "mcq",
          q: "Why is strong bracing of formwork so important?",
          choices: ["To make it look neat", "Because fresh concrete is heavy and exerts large outward pressure that can blow out the forms", "To speed up curing", "To reduce rebar"],
          answer: 1,
          explain: "Wet concrete behaves like a heavy fluid and pushes hard on forms, so adequate bracing prevents blowouts."
        },
        {
          type: "order",
          q: "Order these formwork steps in sequence.",
          items: ["Build and brace the forms", "Apply form release agent", "Place rebar and pour concrete", "Let concrete cure", "Strip the forms"],
          explain: "Forms are built and braced, treated with release agent, filled, cured, then stripped once strong enough."
        },
        {
          type: "match",
          q: "Match each formwork term to its meaning.",
          pairs: [
            ["Snap tie", "Holds form walls at correct spacing"],
            ["Falsework", "Temporary support under the forms"],
            ["Stripping", "Removing forms after curing"]
          ],
          explain: "These elements work together to shape, support and then release the concrete safely."
        }
      ]
    },
    {
      id: "l26",
      title: "Footings & Foundations",
      intro: "Footings spread the building load into the soil so the structure does not sink.",
      questions: [
        {
          type: "mcq",
          q: "What is the main job of a footing?",
          choices: ["To waterproof the basement", "To spread the building load over enough soil to prevent settlement", "To hold rebar in place", "To drain rainwater"],
          answer: 1,
          explain: "A footing widens the base of a wall or column to distribute loads across more bearing soil."
        },
        {
          type: "mcq",
          q: "How does a spread footing differ from a continuous (strip) footing?",
          choices: ["Spread supports a single column; continuous runs under a wall", "They are identical", "Spread is only for basements", "Continuous is only for columns"],
          answer: 0,
          explain: "A spread footing carries an isolated point load like a column; a continuous strip footing runs under a wall."
        },
        {
          type: "fill",
          q: "Footings must be placed below the ____ line so they are not heaved by freezing soil.",
          answer: "frost",
          accept: ["frost", "frost line", "frost depth"],
          explain: "Placing footings below the frost line prevents frost heave from lifting and cracking the foundation."
        },
        {
          type: "truefalse",
          q: "A stem wall is a short foundation wall that rises from the footing to support the structure above.",
          answer: true,
          explain: "A stem wall sits on the footing and carries the building load up to floor or grade level."
        },
        {
          type: "mcq",
          q: "What is bearing capacity?",
          choices: ["How much weight the soil can safely support", "The PSI of the concrete", "The depth of the basement", "The amount of rebar used"],
          answer: 0,
          explain: "Bearing capacity is the maximum load the soil can carry safely without excessive settlement or failure."
        },
        {
          type: "mcq",
          q: "What is a grade beam?",
          choices: ["A tool for leveling soil", "A reinforced concrete beam spanning between piers or supports near grade", "A type of rebar", "A drainage pipe"],
          answer: 1,
          explain: "A grade beam is a reinforced concrete beam at or near ground level that ties supports together and spans between piers."
        },
        {
          type: "fill",
          q: "A deep, column-like foundation element that carries load down to firm soil or rock is a ____.",
          answer: "pier",
          accept: ["pier", "pier or pile", "pile"],
          explain: "A pier is a vertical foundation element that transfers loads down to a deeper, stronger bearing layer."
        },
        {
          type: "match",
          q: "Match each foundation term to its meaning.",
          pairs: [
            ["Spread footing", "Pad under a single column"],
            ["Stem wall", "Short wall from footing to grade"],
            ["Frost line", "Depth below which soil does not freeze"]
          ],
          explain: "Footings, stem walls and frost depth together keep the foundation stable and protected from heave."
        }
      ]
    },
    {
      id: "l27",
      title: "Slabs, Basements & Waterproofing",
      intro: "Floors that sit on the ground and the systems that keep them dry.",
      questions: [
        {
          type: "mcq",
          q: "What is a slab on grade?",
          choices: ["A raised concrete floor on piers", "A concrete floor poured directly on prepared ground", "A basement floor", "A waterproof membrane"],
          answer: 1,
          explain: "A slab on grade is a concrete floor cast directly on the prepared subgrade, common in homes without basements."
        },
        {
          type: "fill",
          q: "A plastic sheet placed under a slab to stop ground moisture from rising is a ____ barrier.",
          answer: "vapor",
          accept: ["vapor", "vapour", "moisture"],
          explain: "A vapor barrier blocks moisture migration from the soil up through the slab into the building."
        },
        {
          type: "mcq",
          q: "Why are control joints cut into concrete slabs?",
          choices: ["To add color", "To create planned weak lines so cracks form there instead of randomly", "To hold rebar", "To drain water"],
          answer: 1,
          explain: "Control joints encourage concrete to crack along straight, planned lines rather than randomly across the slab."
        },
        {
          type: "truefalse",
          q: "Waterproofing is more robust than dampproofing and is meant to resist liquid water under pressure.",
          answer: true,
          explain: "Dampproofing only slows moisture vapor, while waterproofing resists actual hydrostatic water pressure."
        },
        {
          type: "mcq",
          q: "What is the difference between a basement and a crawlspace?",
          choices: ["A basement is a full-height usable level; a crawlspace is a short, unfinished void under the floor", "They are the same", "A crawlspace is taller", "A basement has no foundation"],
          answer: 0,
          explain: "A basement is a full, occupiable below-grade story; a crawlspace is a low space only tall enough to access utilities."
        },
        {
          type: "fill",
          q: "The perforated pipe at the base of a foundation that collects and carries water away is a footing ____.",
          answer: "drain",
          accept: ["drain", "drainage tile", "drain tile"],
          explain: "A footing drain, or drainage tile, collects groundwater at the footing and routes it away from the foundation."
        },
        {
          type: "mcq",
          q: "Why are expansion joints used in large concrete areas?",
          choices: ["To reinforce the steel", "To allow concrete to expand and contract with temperature without cracking", "To speed curing", "To hold the vapor barrier"],
          answer: 1,
          explain: "Expansion joints give concrete room to move with temperature changes, preventing buckling and cracking."
        },
        {
          type: "match",
          q: "Match each term to its purpose.",
          pairs: [
            ["Vapor barrier", "Blocks ground moisture under a slab"],
            ["Footing drain", "Carries groundwater away from the foundation"],
            ["Control joint", "Directs where the slab cracks"]
          ],
          explain: "Together these manage moisture and cracking to keep below-grade and slab areas dry and durable."
        }
      ]
    }
  ]
});
