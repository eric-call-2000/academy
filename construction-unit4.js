window.ACADEMY.addUnit("construction", {
  id: "unit-4",
  title: "Building a House",
  color: "#ce82ff",
  icon: "🏡",
  description: "Residential wood-frame construction from sill plate to rough-in: framing, the dry-in, and the systems inside the walls.",
  lessons: [
    {
      id: "l28",
      title: "Wood Framing Basics",
      intro: "Learn the lumber and the framing methods that make up a wood house.",
      questions: [
        {
          type: "mcq",
          q: "In modern platform framing, each floor is built as a deck before the walls above it are raised. What is the older alternative method called?",
          choices: ["Stick framing", "Balloon framing", "Post-and-beam", "Timber framing"],
          answer: 1,
          explain: "Balloon framing ran continuous studs from the foundation to the roof; platform framing replaced it because it is safer and uses shorter lumber."
        },
        {
          type: "mcq",
          q: "A 2x4 is nominal lumber. What are its actual finished dimensions in inches?",
          choices: ["2 x 4", "1.75 x 3.75", "1.5 x 3.5", "1.5 x 4"],
          answer: 2,
          explain: "Surfacing and drying shrink the rough-cut board, so a nominal 2x4 actually measures 1.5 by 3.5 inches."
        },
        {
          type: "mcq",
          q: "What does the spacing term 16 OC mean for wall studs?",
          choices: ["16 studs per wall", "Centers spaced 16 inches apart", "16-foot stud length", "16 nails per stud"],
          answer: 1,
          explain: "On-center spacing measures from the center of one stud to the center of the next, and 16 inches is the common residential interval."
        },
        {
          type: "fill",
          q: "The horizontal framing member that runs across the top of a window or door opening to carry the load above is called a ____.",
          answer: "header",
          accept: ["header", "lintel"],
          explain: "A header (sometimes called a lintel) transfers the weight from above the opening down into the studs on each side."
        },
        {
          type: "truefalse",
          q: "An LVL (laminated veneer lumber) beam is a type of engineered lumber.",
          answer: true,
          explain: "LVL is made by bonding thin wood veneers together, giving it more consistent strength than a sawn beam of the same size."
        },
        {
          type: "truefalse",
          q: "Nominal lumber size and actual lumber size are always exactly the same.",
          answer: false,
          explain: "Nominal size is the rough name, but the actual planed dimensions are smaller, which is why a 2x4 is really 1.5 by 3.5 inches."
        },
        {
          type: "match",
          q: "Match each framing member to its role in a wall.",
          pairs: [
            ["Stud", "Vertical member of a wall"],
            ["Plate", "Horizontal member at top or bottom of a wall"],
            ["Header", "Beam over an opening"]
          ],
          explain: "Studs stand vertically, plates run horizontally at the top and bottom, and headers span openings."
        },
        {
          type: "mcq",
          q: "An I-joist gets its name from its shape. Why is it used instead of solid lumber for floors?",
          choices: ["It is cheaper than any board", "It spans farther with less weight and resists warping", "It is required by fire code", "It needs no support at the ends"],
          answer: 1,
          explain: "An engineered I-joist uses a tall web and flanges to span long distances with less material and far less warping than sawn lumber."
        }
      ]
    },
    {
      id: "l29",
      title: "Floor Systems",
      intro: "From the sill plate up to the subfloor, see how a floor platform is built.",
      questions: [
        {
          type: "mcq",
          q: "The first piece of wood placed on top of the foundation wall, bolted down, is the:",
          choices: ["Rim joist", "Sill plate (mudsill)", "Subfloor", "Top plate"],
          answer: 1,
          explain: "The sill plate, or mudsill, is anchored to the foundation and gives the floor framing something to rest on."
        },
        {
          type: "mcq",
          q: "What is the purpose of anchor bolts in a floor system?",
          choices: ["To join two joists", "To fasten the sill plate to the foundation", "To level the subfloor", "To support the roof"],
          answer: 1,
          explain: "Anchor bolts are set into the concrete and tie the sill plate down so the house cannot slide off its foundation."
        },
        {
          type: "fill",
          q: "The joist set on edge around the outer perimeter of the floor, capping the ends of the floor joists, is the rim or ____ joist.",
          answer: "band",
          accept: ["band", "rim"],
          explain: "The rim joist (also called a band joist) closes off the floor frame and the joist ends nail into it."
        },
        {
          type: "mcq",
          q: "What is the main reason to glue AND screw a subfloor to the joists?",
          choices: ["To save on nails", "To prevent squeaks and stiffen the floor", "To make it waterproof", "To speed up framing"],
          answer: 1,
          explain: "Construction adhesive plus screws bonds the subfloor to the joists, reducing movement that causes squeaks and creating a stiffer floor."
        },
        {
          type: "truefalse",
          q: "A cantilever is a floor section that extends past its supporting wall with no post beneath the overhang.",
          answer: true,
          explain: "A cantilever lets joists project beyond their support, often used for a bay window or a deck."
        },
        {
          type: "truefalse",
          q: "Joist span is the distance a joist can safely cover between its supports.",
          answer: true,
          explain: "Span tables tie joist size, spacing, and species to the maximum distance a joist can bridge without sagging."
        },
        {
          type: "order",
          q: "Order these floor framing steps from first to last.",
          items: ["Bolt down the sill plate", "Set the rim joist and floor joists", "Add blocking between joists", "Glue and fasten the subfloor"],
          explain: "The platform builds upward: sill plate, then joists, then blocking to stop twist, and finally the subfloor deck."
        },
        {
          type: "mcq",
          q: "Short pieces of lumber installed between joists to keep them from twisting are called:",
          choices: ["Cripples", "Blocking", "Cleats", "Furring"],
          answer: 1,
          explain: "Blocking is fit snugly between joists to brace them and keep them standing straight under load."
        }
      ]
    },
    {
      id: "l30",
      title: "Wall Framing",
      intro: "Build a wall the right way: plates, studs, headers, and the openings between them.",
      questions: [
        {
          type: "mcq",
          q: "Most exterior load-bearing walls are capped with a double top plate. Why use two stacked plates?",
          choices: ["To make the wall taller", "To tie walls together and spread roof loads", "To hold insulation", "It is purely decorative"],
          answer: 1,
          explain: "The doubled top plate laps at corners and intersections, locking walls together and distributing loads from above."
        },
        {
          type: "fill",
          q: "The full-height stud that runs alongside an opening and supports the end of the header is the ____ stud.",
          answer: "king",
          accept: ["king"],
          explain: "The king stud runs from plate to plate beside the opening and is nailed to the shorter jack stud that carries the header."
        },
        {
          type: "mcq",
          q: "The shorter stud that sits under the header and transfers its load to the bottom plate is the:",
          choices: ["King stud", "Cripple stud", "Jack (trimmer) stud", "Sill stud"],
          answer: 2,
          explain: "The jack stud, also called a trimmer, is cut to the header height and carries the header load down to the bottom plate."
        },
        {
          type: "mcq",
          q: "A short stud above a header or below a window sill, filling the gap to the plate, is a:",
          choices: ["Cripple stud", "King stud", "Trimmer", "Post"],
          answer: 0,
          explain: "Cripple studs are short studs that fill in above headers and below sills to maintain the on-center stud pattern."
        },
        {
          type: "truefalse",
          q: "A rough opening is framed slightly larger than the window or door so the unit can be shimmed and squared.",
          answer: true,
          explain: "The rough opening leaves space around the unit for plumbing, leveling, and shimming during installation."
        },
        {
          type: "truefalse",
          q: "Wall sheathing helps resist racking, the tendency of a wall to lean sideways into a parallelogram.",
          answer: true,
          explain: "Sheathing or a braced shear wall triangulates the frame so lateral forces like wind do not push the wall out of square."
        },
        {
          type: "match",
          q: "Match each opening member to its job.",
          pairs: [
            ["King stud", "Full-height stud beside the opening"],
            ["Jack stud", "Supports the header"],
            ["Header", "Spans the top of the opening"]
          ],
          explain: "King studs flank the opening, jack studs hold up the header, and the header carries the load across the gap."
        },
        {
          type: "mcq",
          q: "A wall specifically braced to resist lateral wind or seismic forces is called a:",
          choices: ["Party wall", "Shear wall", "Knee wall", "Curtain wall"],
          answer: 1,
          explain: "A shear wall uses sheathing and a nailing pattern to resist the horizontal forces that would otherwise rack the structure."
        }
      ]
    },
    {
      id: "l31",
      title: "Roof Framing & Trusses",
      intro: "Rafters or trusses, then the ridge, hips, valleys, and the eave details.",
      questions: [
        {
          type: "mcq",
          q: "What is the main difference between rafters and trusses?",
          choices: ["Rafters are steel; trusses are wood", "Trusses are prefab engineered units; rafters are cut and framed on site", "Trusses are only for flat roofs", "There is no difference"],
          answer: 1,
          explain: "Trusses arrive as engineered triangulated assemblies, while rafters are individual sloped members cut and assembled at the site."
        },
        {
          type: "fill",
          q: "The horizontal beam at the very peak of a rafter roof, where opposing rafters meet, is the ____ board.",
          answer: "ridge",
          accept: ["ridge"],
          explain: "Rafters bear against the ridge board at the top of the roof, forming the peak line."
        },
        {
          type: "mcq",
          q: "Where two roof slopes meet to form an inside corner that channels water, that line is a:",
          choices: ["Hip", "Ridge", "Valley", "Eave"],
          answer: 2,
          explain: "A valley is the inward angle where two slopes meet, and it must be flashed because water concentrates there."
        },
        {
          type: "mcq",
          q: "Roof pitch is most often expressed as:",
          choices: ["Degrees only", "Rise in inches per 12 inches of run", "A percentage of total height", "Feet per mile"],
          answer: 1,
          explain: "Residential pitch is written as rise over run, such as 6/12, meaning the roof rises 6 inches for every 12 inches of horizontal run."
        },
        {
          type: "truefalse",
          q: "The soffit is the underside surface of the roof overhang, while the fascia is the vertical board at the edge.",
          answer: true,
          explain: "The fascia closes off the rafter ends along the edge, and the soffit covers the underside of the overhang between fascia and wall."
        },
        {
          type: "truefalse",
          q: "The eave is the part of the roof that overhangs the wall at the lower edge.",
          answer: true,
          explain: "The eave is the lower roof edge that extends past the wall, shading and shedding water away from the siding."
        },
        {
          type: "match",
          q: "Match each roof part to its location.",
          pairs: [
            ["Ridge", "Peak line of the roof"],
            ["Hip", "Outside corner where two slopes meet"],
            ["Fascia", "Board along the eave edge"]
          ],
          explain: "The ridge runs along the top, a hip is the outward sloped corner, and the fascia trims the eave."
        },
        {
          type: "mcq",
          q: "A collar tie connects opposing rafters in the upper third of the roof. What does it mainly resist?",
          choices: ["Rafters sagging at midspan", "Rafters separating at the ridge in wind uplift", "Snow load on the deck", "Wall racking"],
          answer: 1,
          explain: "Collar ties keep opposing rafters from pulling apart at the ridge under uplift and wind forces."
        }
      ]
    },
    {
      id: "l32",
      title: "Sheathing, House Wrap & Flashing",
      intro: "Closing in the shell and managing water so the house can dry in.",
      questions: [
        {
          type: "mcq",
          q: "What does it mean when a house is dried in?",
          choices: ["The drywall is finished", "The shell keeps out rain so interior work can start", "The lumber has fully cured", "The paint has dried"],
          answer: 1,
          explain: "The dry-in is the point where roof, sheathing, wrap, and openings keep weather out so interior trades can work."
        },
        {
          type: "mcq",
          q: "Which is a common structural wall sheathing panel?",
          choices: ["Drywall", "OSB (oriented strand board)", "Particleboard", "MDF"],
          answer: 1,
          explain: "OSB and plywood are the structural panels nailed to the framing to add strength and a surface for the wrap."
        },
        {
          type: "fill",
          q: "The water-shedding membrane wrapped over the sheathing, also called a weather-resistive barrier, is commonly called house ____.",
          answer: "wrap",
          accept: ["wrap", "house wrap", "housewrap"],
          explain: "House wrap is the weather-resistive barrier that sheds bulk water yet lets vapor escape so walls can dry."
        },
        {
          type: "mcq",
          q: "Flashing is installed at penetrations and transitions primarily to:",
          choices: ["Add insulation value", "Direct water away from vulnerable joints", "Hold the siding tight", "Improve appearance only"],
          answer: 1,
          explain: "Flashing is shaped metal or membrane that channels water out and over the barrier instead of letting it into the wall."
        },
        {
          type: "truefalse",
          q: "Drip edge is metal flashing installed along roof edges to direct water off the deck and into the gutter.",
          answer: true,
          explain: "Drip edge guides runoff past the fascia and into the gutter rather than letting it wick back under the roofing."
        },
        {
          type: "truefalse",
          q: "House wrap should be lapped so upper pieces overlap the pieces below, like shingles.",
          answer: true,
          explain: "Shingle-style lapping makes water run down over each lower layer instead of getting behind it."
        },
        {
          type: "order",
          q: "Order these dry-in steps from first to last on a wall.",
          items: ["Nail on the wall sheathing", "Apply the house wrap", "Install window flashing", "Hang the siding"],
          explain: "Sheathing goes on first, then the weather barrier, then flashing at openings, and finally the cladding."
        },
        {
          type: "mcq",
          q: "Why does water management matter so much in wall assemblies?",
          choices: ["Water makes lumber heavier", "Trapped moisture causes rot, mold, and failure", "It changes the paint color", "It only affects the basement"],
          answer: 1,
          explain: "A wall that cannot drain or dry will trap moisture, leading to rot, mold, and structural decay over time."
        }
      ]
    },
    {
      id: "l33",
      title: "Residential Roofing",
      intro: "Underlayment up through shingles, vents, and the metal that keeps it dry.",
      questions: [
        {
          type: "mcq",
          q: "What is laid over the roof sheathing before the shingles go on?",
          choices: ["Drip edge only", "Underlayment", "House wrap", "Insulation batts"],
          answer: 1,
          explain: "Underlayment is the felt or synthetic layer that protects the deck and gives a secondary water barrier under the shingles."
        },
        {
          type: "mcq",
          q: "Ice and water shield is a self-adhering membrane installed mainly at:",
          choices: ["The ridge only", "Eaves and valleys prone to ice dams", "The center of the field", "The chimney top"],
          answer: 1,
          explain: "Ice and water shield seals around fasteners at eaves and valleys, where ice dams and concentrated runoff threaten leaks."
        },
        {
          type: "fill",
          q: "In roofing, one square equals ____ square feet of roof area.",
          answer: "100",
          accept: ["100", "one hundred"],
          explain: "Roofers measure and price work by the square, which is a 100-square-foot unit of coverage."
        },
        {
          type: "mcq",
          q: "Shingle exposure refers to:",
          choices: ["The total shingle length", "The portion of each course left visible to the weather", "How many nails are used", "The color of the shingle"],
          answer: 1,
          explain: "Exposure is the visible part of each shingle course after the next course overlaps it, and it sets the coverage pattern."
        },
        {
          type: "truefalse",
          q: "A ridge vent runs along the peak to let warm attic air escape.",
          answer: true,
          explain: "A ridge vent provides continuous exhaust at the peak, working with soffit intake to ventilate the attic."
        },
        {
          type: "truefalse",
          q: "Step flashing is used where a roof slope meets a vertical wall, like along a dormer side.",
          answer: true,
          explain: "Step flashing is woven shingle by shingle up a sidewall so water steps out over each course."
        },
        {
          type: "match",
          q: "Match each roofing item to its purpose.",
          pairs: [
            ["Underlayment", "Secondary barrier under shingles"],
            ["Ridge vent", "Exhausts attic air at the peak"],
            ["Drip edge", "Sheds water off the roof edge"]
          ],
          explain: "Underlayment backs up the shingles, the ridge vent exhausts air, and drip edge controls the edge runoff."
        },
        {
          type: "mcq",
          q: "Asphalt shingles are the most common residential roofing because they are:",
          choices: ["The most fireproof option", "Affordable, easy to install, and widely available", "Permanent and never wear out", "Required by all building codes"],
          answer: 1,
          explain: "Asphalt shingles dominate residential roofs thanks to low cost, easy installation, and broad availability."
        }
      ]
    },
    {
      id: "l34",
      title: "Windows, Doors & Siding",
      intro: "Set openings, flash them right, and clad the wall.",
      questions: [
        {
          type: "mcq",
          q: "Fenestration is the construction term for:",
          choices: ["The framing of floors", "The arrangement of windows and doors in a wall", "The roof venting system", "The insulation layer"],
          answer: 1,
          explain: "Fenestration covers the openings in a building envelope, mainly its windows and doors."
        },
        {
          type: "fill",
          q: "A door that arrives already mounted in its frame with hinges attached is called a ____ door.",
          answer: "prehung",
          accept: ["prehung", "pre-hung", "pre hung"],
          explain: "A prehung door comes hung in its jamb, so the installer sets the whole assembly into the rough opening at once."
        },
        {
          type: "mcq",
          q: "Pan flashing at the bottom of a window rough opening is there to:",
          choices: ["Hold the window in place", "Catch and drain any water that gets behind the unit", "Insulate the sill", "Hide the fasteners"],
          answer: 1,
          explain: "Pan flashing lines the sill so any intruding water is collected and drained back out to the wrap."
        },
        {
          type: "mcq",
          q: "Which is a common residential siding material?",
          choices: ["Fiber cement", "Reinforced concrete", "Structural steel", "Gypsum board"],
          answer: 0,
          explain: "Fiber cement, vinyl, and lap siding are common cladding choices; gypsum board is an interior product."
        },
        {
          type: "truefalse",
          q: "Weep holes in vinyl siding or window frames let trapped water drain out.",
          answer: true,
          explain: "Weep holes give incidental water a path to escape so it does not pool inside the assembly."
        },
        {
          type: "truefalse",
          q: "Caulk should be used to seal every gap around a window, including the bottom of the unit.",
          answer: false,
          explain: "The sill is usually left uncaulked so any water that gets in can drain out the bottom instead of being trapped."
        },
        {
          type: "match",
          q: "Match each window part to its position.",
          pairs: [
            ["Sill", "Bottom of the window"],
            ["Jamb", "Vertical side of the frame"],
            ["Head", "Top of the window"]
          ],
          explain: "The sill is the bottom, the jambs are the sides, and the head is the top of the frame."
        },
        {
          type: "mcq",
          q: "When installing a window, why flash the sides and head over the house wrap but tuck the sill flashing under it?",
          choices: ["To save material", "So water always sheds outward, layer over layer", "To make it look cleaner", "Code does not allow any other way"],
          answer: 1,
          explain: "Shingling the flashing over the wrap on top and tucking it under at the bottom keeps water moving down and out at every layer."
        }
      ]
    },
    {
      id: "l35",
      title: "Plumbing Rough-In",
      intro: "The two plumbing systems and how they get roughed into the walls.",
      questions: [
        {
          type: "mcq",
          q: "DWV stands for which plumbing system?",
          choices: ["Direct water valve", "Drain-waste-vent", "Domestic water volume", "Dual valve venting"],
          answer: 1,
          explain: "DWV is the drain-waste-vent system that carries used water out and vents the pipes so drains flow freely."
        },
        {
          type: "mcq",
          q: "Which is a common flexible water supply line in modern homes?",
          choices: ["PEX", "PVC", "ABS", "Cast iron"],
          answer: 0,
          explain: "PEX is a flexible plastic tubing widely used for supply lines, while copper is the traditional rigid option."
        },
        {
          type: "fill",
          q: "The curved section of drain pipe under a sink that holds water to block sewer gas is called a ____.",
          answer: "trap",
          accept: ["trap", "p-trap", "p trap"],
          explain: "The trap holds a plug of water that stops sewer gas from rising back into the room."
        },
        {
          type: "mcq",
          q: "Why must drain lines be installed with a consistent slope?",
          choices: ["To save pipe", "So gravity keeps waste flowing toward the sewer", "To reduce noise", "To match the supply lines"],
          answer: 1,
          explain: "Drains rely on gravity, so a steady slope, often a quarter inch per foot, keeps solids and water moving out."
        },
        {
          type: "truefalse",
          q: "A vent stack lets air into the drain system so traps do not get siphoned dry.",
          answer: true,
          explain: "The vent stack equalizes pressure, allowing drains to flow smoothly without sucking the water out of traps."
        },
        {
          type: "truefalse",
          q: "Rough-in plumbing is the same step as setting the toilets and faucets.",
          answer: false,
          explain: "Rough-in runs the pipes inside the framing; trim-out later installs the visible fixtures like toilets and faucets."
        },
        {
          type: "order",
          q: "Order these plumbing phases from earliest to latest.",
          items: ["Run supply and DWV lines in the framing", "Pressure-test the rough-in", "Close the walls", "Trim out the fixtures"],
          explain: "Pipes are roughed in and tested before the walls close, and fixtures are trimmed out near the end."
        },
        {
          type: "mcq",
          q: "A stub-out during rough-in is:",
          choices: ["A capped pipe left projecting for a future fixture", "A removed section of pipe", "A type of vent", "A cleanout cover"],
          answer: 0,
          explain: "A stub-out is a short capped pipe left sticking out of the wall or floor to connect a fixture during trim-out."
        }
      ]
    },
    {
      id: "l36",
      title: "Electrical Rough-In",
      intro: "Panels, circuits, cable, and boxes before the drywall goes up.",
      questions: [
        {
          type: "mcq",
          q: "The main box where power enters the home and divides into circuits is the:",
          choices: ["Junction box", "Service panel (load center)", "Receptacle", "Meter base"],
          answer: 1,
          explain: "The service panel, or load center, holds the breakers that split incoming power into the branch circuits."
        },
        {
          type: "fill",
          q: "The common nonmetallic sheathed cable used for residential branch wiring is often called ____ cable.",
          answer: "romex",
          accept: ["romex", "nm", "nm-b"],
          explain: "Romex is the brand name commonly used for NM (nonmetallic sheathed) cable run through residential walls."
        },
        {
          type: "mcq",
          q: "What does a circuit breaker do?",
          choices: ["Increases voltage", "Trips to stop current when a circuit is overloaded or faulted", "Stores electricity", "Converts AC to DC"],
          answer: 1,
          explain: "A breaker interrupts the circuit when current exceeds a safe level, protecting the wiring from overheating."
        },
        {
          type: "mcq",
          q: "A GFCI device is required near water sources because it:",
          choices: ["Boosts power to appliances", "Shuts off quickly if current leaks to ground", "Filters noise from the line", "Dims the lights"],
          answer: 1,
          explain: "A GFCI senses tiny current leaks to ground and cuts power fast to prevent shock, which is vital near sinks and outdoors."
        },
        {
          type: "truefalse",
          q: "A junction box must remain accessible and cannot be buried inside a finished wall.",
          answer: true,
          explain: "Code requires junction boxes to stay accessible so connections can be inspected and serviced later."
        },
        {
          type: "truefalse",
          q: "Grounding gives fault current a safe path back to the panel and earth.",
          answer: true,
          explain: "The grounding system carries fault current safely so a short trips the breaker instead of energizing metal parts."
        },
        {
          type: "match",
          q: "Match each electrical term to its meaning.",
          pairs: [
            ["Breaker", "Trips to protect a circuit"],
            ["Receptacle", "Outlet you plug into"],
            ["Branch circuit", "Wiring run feeding part of the house"]
          ],
          explain: "Breakers protect circuits, receptacles are the outlets, and a branch circuit feeds one portion of the home."
        },
        {
          type: "mcq",
          q: "During electrical rough-in, what is installed before the drywall goes up?",
          choices: ["Light fixtures and cover plates", "Boxes and cable runs", "Switch faceplates", "The breaker panel labels"],
          answer: 1,
          explain: "Rough-in sets the boxes and pulls the cable through framing; devices and covers go on at trim after drywall."
        }
      ]
    },
    {
      id: "l37",
      title: "HVAC & Insulation",
      intro: "Heating, cooling, ductwork, and the insulation that seals the building envelope.",
      questions: [
        {
          type: "mcq",
          q: "In a typical forced-air system, the furnace heats air and the ____ provides cooling.",
          choices: ["Register", "Condenser (AC unit)", "Return grille", "Plenum"],
          answer: 1,
          explain: "The outdoor condenser, the AC unit, removes heat for cooling while the furnace handles heating through the same blower and ducts."
        },
        {
          type: "mcq",
          q: "What is the difference between supply and return ducts?",
          choices: ["Supply brings conditioned air in; return pulls room air back", "Supply is for cooling only; return for heating only", "They are the same thing", "Return ducts carry water"],
          answer: 0,
          explain: "Supply ducts deliver heated or cooled air to rooms, and return ducts draw room air back to the equipment to recondition it."
        },
        {
          type: "fill",
          q: "Insulation is rated by its resistance to heat flow, a value called its R-____.",
          answer: "value",
          accept: ["value"],
          explain: "R-value measures resistance to heat flow, and a higher R-value means better insulating performance."
        },
        {
          type: "mcq",
          q: "Which insulation type is sprayed in and expands to both insulate and air-seal?",
          choices: ["Fiberglass batt", "Blown cellulose", "Spray foam", "Rigid board"],
          answer: 2,
          explain: "Spray foam expands to fill gaps, providing insulation and an air seal in one application."
        },
        {
          type: "truefalse",
          q: "The building envelope is the boundary separating conditioned indoor space from the outdoors.",
          answer: true,
          explain: "The envelope, walls, roof, and floor with their insulation and air barrier, separates inside from outside."
        },
        {
          type: "truefalse",
          q: "Air sealing is unimportant as long as you install thick insulation.",
          answer: false,
          explain: "Air leaks let conditioned air escape around insulation, so sealing gaps is as important as the R-value itself."
        },
        {
          type: "match",
          q: "Match each HVAC item to its role.",
          pairs: [
            ["Register", "Grille where supply air enters a room"],
            ["Furnace", "Heats the air"],
            ["Ductwork", "Channels air through the house"]
          ],
          explain: "Registers deliver air into rooms, the furnace heats it, and ductwork carries it throughout the home."
        },
        {
          type: "mcq",
          q: "Batt insulation differs from blown insulation mainly because batts are:",
          choices: ["Pre-cut blanket rolls fit between framing", "Sprayed as a liquid", "Loose fill poured into cavities", "Rigid foam panels"],
          answer: 0,
          explain: "Batts are pre-formed blankets cut to fit between studs and joists, while blown insulation is loose fill blown into cavities."
        }
      ]
    }
  ]
});
