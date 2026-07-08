window.ACADEMY.addUnit("construction", {
  id: "unit-5",
  title: "Commercial Construction",
  color: "#ff4b4b",
  icon: "🏢",
  description: "How larger commercial buildings go up: structural steel and concrete frames, masonry, glazing, low-slope roofs and building systems.",
  lessons: [
    {
      id: "l38",
      title: "Commercial vs Residential",
      intro: "Commercial buildings differ from houses in scale, structure, codes and who is allowed to build them.",
      questions: [
        {
          type: "mcq",
          q: "Which structural system is most typical of commercial buildings but rare in single-family homes?",
          choices: ["Wood stud walls", "Structural steel or concrete frame", "Slab-on-grade only", "Log construction"],
          answer: 1,
          explain: "Commercial buildings usually carry loads on a steel or concrete frame rather than wood stud bearing walls."
        },
        {
          type: "mcq",
          q: "In building codes, the planned use of a space (office, assembly, mercantile) is called the:",
          choices: ["Occupancy classification", "Floor area ratio", "Egress count", "Setback"],
          answer: 0,
          explain: "Occupancy classification groups buildings by use and drives many of the code requirements that apply."
        },
        {
          type: "mcq",
          q: "Type I and Type II construction are generally described as:",
          choices: ["Combustible", "Non-combustible", "Temporary", "Below grade"],
          answer: 1,
          explain: "Types I and II use non-combustible materials like steel and concrete, while Types III through V allow combustibles such as wood."
        },
        {
          type: "truefalse",
          q: "Prevailing wage requirements often apply to publicly funded commercial projects but rarely to private homes.",
          answer: true,
          explain: "Government-funded work commonly mandates prevailing wages, a rule almost never seen on private residential jobs."
        },
        {
          type: "fill",
          q: "The combustible-versus-non-combustible category assigned to a building in the code is called its type of ____.",
          answer: "construction",
          accept: ["construction"],
          explain: "Type of construction sorts buildings by how their materials resist fire, from non-combustible to fully combustible."
        },
        {
          type: "truefalse",
          q: "Codes are stricter for a 12-story office than a house mainly because more occupants and larger fire and life-safety risks are involved.",
          answer: true,
          explain: "Greater occupant load, height and fire risk push commercial codes well beyond residential requirements."
        },
        {
          type: "match",
          q: "Match each occupancy term to what it describes.",
          pairs: [
            ["Business (B)", "Office and professional space"],
            ["Assembly (A)", "Gathering spaces like theaters"],
            ["Mercantile (M)", "Retail and stores"]
          ],
          explain: "Occupancy groups such as B, A and M each carry their own egress and fire rules."
        },
        {
          type: "order",
          q: "Order these by typical building scale from smallest to largest.",
          items: ["Single-family house", "Strip retail center", "Mid-rise office", "High-rise tower"],
          explain: "Scale climbs from a house up through retail, mid-rise and finally high-rise commercial structures."
        }
      ]
    },
    {
      id: "l39",
      title: "Structural Steel",
      intro: "Structural steel framing relies on shaped members made in a mill, detailed in shop drawings and raised by ironworkers.",
      questions: [
        {
          type: "mcq",
          q: "A common structural shape with a wide center web and broad flanges, written like W12x26, is a:",
          choices: ["Channel", "Wide-flange (W-shape)", "Angle", "Tee"],
          answer: 1,
          explain: "The W-shape, or wide-flange beam, is the workhorse member for steel beams and columns."
        },
        {
          type: "mcq",
          q: "A larger beam that supports other, smaller beams framing into it is called a:",
          choices: ["Girder", "Purlin", "Joist", "Stud"],
          answer: 0,
          explain: "Girders are the heavier members that collect loads from beams framing into them."
        },
        {
          type: "mcq",
          q: "A vertical steel member that carries loads down to the foundation is a:",
          choices: ["Beam", "Column", "Girt", "Brace"],
          answer: 1,
          explain: "Columns run vertically and transfer gravity loads down through the structure."
        },
        {
          type: "fill",
          q: "The slight upward curve built into a beam to offset later deflection is called ____.",
          answer: "camber",
          accept: ["camber"],
          explain: "Camber is an intentional upward bow so the beam ends up level once loaded."
        },
        {
          type: "truefalse",
          q: "The steel fabricator makes and prepares the members in a shop, while the erector raises and connects them in the field.",
          answer: true,
          explain: "Fabricators build the pieces and erectors assemble them on site; they are usually separate trades."
        },
        {
          type: "truefalse",
          q: "Shop drawings are detailed fabrication drawings the steel fabricator submits for approval before cutting steel.",
          answer: true,
          explain: "Shop drawings translate the design into precise fabrication details and must be reviewed first."
        },
        {
          type: "mcq",
          q: "The facility that produces the raw structural steel shapes is the:",
          choices: ["Yard", "Mill", "Foundry pit", "Batch plant"],
          answer: 1,
          explain: "Steel mills roll the raw W-shapes and plates that fabricators then cut and prepare."
        },
        {
          type: "order",
          q: "Order the steel workflow from design to a standing frame.",
          items: ["Engineer designs the frame", "Fabricator makes shop drawings", "Mill supplies the steel", "Erector raises the steel"],
          explain: "Steel moves from design to shop drawings to mill material and finally field erection."
        },
        {
          type: "match",
          q: "Match each steel role or term to its meaning.",
          pairs: [
            ["Ironworker", "Worker who erects steel"],
            ["Fabricator", "Shop that cuts and assembles steel"],
            ["Erector", "Crew that raises steel in the field"]
          ],
          explain: "Ironworkers in the field are directed by the erector, using pieces made by the fabricator."
        }
      ]
    },
    {
      id: "l40",
      title: "Steel Decking & Connections",
      intro: "Metal deck forms the floors and roofs, while bolts and welds tie the steel frame together.",
      questions: [
        {
          type: "mcq",
          q: "Corrugated metal sheet laid over steel beams to form floors or roofs is called:",
          choices: ["Metal deck", "Lath", "Sheathing", "Underlayment"],
          answer: 0,
          explain: "Metal deck spans between members and serves as the working surface and concrete form."
        },
        {
          type: "mcq",
          q: "When deck and concrete act together as one structural unit, it is called:",
          choices: ["Composite deck", "Form deck", "Roof deck", "Cellular deck"],
          answer: 0,
          explain: "Composite deck bonds to the concrete topping so the two share the load together."
        },
        {
          type: "fill",
          q: "Welded steel pins that lock the concrete slab to the beam for composite action are called shear ____.",
          answer: "studs",
          accept: ["studs", "stud"],
          explain: "Shear studs welded to the top flange make the beam and slab act compositely."
        },
        {
          type: "mcq",
          q: "A connection that transfers rotation and resists bending, making the joint rigid, is a:",
          choices: ["Shear connection", "Moment connection", "Slip connection", "Pin only"],
          answer: 1,
          explain: "Moment connections keep the joint rigid and carry bending, unlike simple shear connections."
        },
        {
          type: "truefalse",
          q: "A shear connection mainly carries vertical load and allows the joint to rotate, unlike a moment connection.",
          answer: true,
          explain: "Shear connections support gravity load but let the ends rotate freely."
        },
        {
          type: "mcq",
          q: "The steel plate that joins braces and members at a node, often in bracing, is a:",
          choices: ["Base plate", "Gusset plate", "Cover plate", "Shim"],
          answer: 1,
          explain: "Gusset plates tie braces and members together at a connection point."
        },
        {
          type: "match",
          q: "Match each connection part to its job.",
          pairs: [
            ["Base plate", "Spreads column load to foundation"],
            ["Anchor bolts", "Tie the base plate to concrete"],
            ["Gusset plate", "Joins braces at a node"]
          ],
          explain: "Base plates sit on anchor bolts, while gusset plates connect bracing members."
        },
        {
          type: "order",
          q: "Order these steel erection steps.",
          items: ["Set anchor bolts in foundation", "Set columns on base plates", "Plumb and bolt-up the frame", "Place metal deck"],
          explain: "Crews anchor and set columns, plumb and bolt-up the frame, then lay deck."
        },
        {
          type: "fill",
          q: "Adjusting columns so they are truly vertical before final tightening is called getting the frame ____.",
          answer: "plumb",
          accept: ["plumb"],
          explain: "Plumbing the frame ensures columns are vertical before the bolts are fully tensioned."
        }
      ]
    },
    {
      id: "l41",
      title: "Cast-in-Place & Precast Concrete",
      intro: "Concrete frames can be poured in place with formwork or made off-site as precast pieces and erected by crane.",
      questions: [
        {
          type: "mcq",
          q: "Concrete poured into forms at its final location on site is called:",
          choices: ["Precast", "Cast-in-place (CIP)", "Shotcrete", "Tilt-up"],
          answer: 1,
          explain: "Cast-in-place concrete is formed and poured in its permanent position on the building."
        },
        {
          type: "fill",
          q: "The temporary molds that shape fresh concrete until it cures are called ____.",
          answer: "formwork",
          accept: ["formwork", "forms"],
          explain: "Formwork holds the wet concrete in shape until it gains enough strength."
        },
        {
          type: "mcq",
          q: "Temporary supports that hold up formwork and slabs until concrete is strong enough are called:",
          choices: ["Shoring", "Bracing", "Lagging", "Strongbacks"],
          answer: 0,
          explain: "Shoring carries the load of fresh concrete and forms until the slab can support itself."
        },
        {
          type: "mcq",
          q: "Tensioning steel strands after the concrete cures to add strength is called:",
          choices: ["Pre-tensioning", "Post-tensioning", "Annealing", "Galvanizing"],
          answer: 1,
          explain: "Post-tensioning stresses strands after the pour, letting slabs span farther with less depth."
        },
        {
          type: "mcq",
          q: "A common precast floor member shaped like two side-by-side stems under a flat top is a:",
          choices: ["Double tee", "Box girder", "Waffle slab", "Pan joist"],
          answer: 0,
          explain: "Double tees are precast members used widely for parking and floor systems."
        },
        {
          type: "truefalse",
          q: "Precast concrete is made off-site in a controlled plant and then erected by crane on the job.",
          answer: true,
          explain: "Precast pieces are cast in a plant and lifted into place, speeding field work."
        },
        {
          type: "truefalse",
          q: "A trade-off of cast-in-place is slower on-site curing and more formwork, while precast trades that for trucking and lifting large pieces.",
          answer: true,
          explain: "CIP needs site forming and cure time, while precast shifts effort to plant casting, hauling and erection."
        },
        {
          type: "order",
          q: "Order these cast-in-place slab steps.",
          items: ["Set formwork and shoring", "Place rebar", "Pour concrete", "Cure then strip forms"],
          explain: "Crews form and shore, set rebar, pour, then cure before stripping the forms."
        },
        {
          type: "match",
          q: "Match each concrete term to its meaning.",
          pairs: [
            ["CIP", "Poured in final position on site"],
            ["Precast", "Cast off-site and erected"],
            ["Post-tensioning", "Strands stressed after curing"]
          ],
          explain: "These three terms cover where and how structural concrete gains its strength."
        }
      ]
    },
    {
      id: "l42",
      title: "Tilt-Up & Masonry",
      intro: "Tilt-up casts wall panels flat then stands them up, while masonry stacks block and brick bound by mortar and grout.",
      questions: [
        {
          type: "mcq",
          q: "In tilt-up construction, wall panels are typically cast:",
          choices: ["In a precast plant", "Flat on the building slab, then lifted", "Inside vertical forms", "Underground"],
          answer: 1,
          explain: "Tilt-up panels are cast flat on the slab and then tilted up into place by crane."
        },
        {
          type: "fill",
          q: "A hollow concrete block used to build masonry walls is abbreviated ____.",
          answer: "cmu",
          accept: ["cmu", "concrete masonry unit"],
          explain: "CMU stands for concrete masonry unit, the standard hollow block of masonry walls."
        },
        {
          type: "mcq",
          q: "The thin layer of brick on the outside of a wall that is not the main structure is called:",
          choices: ["Brick veneer", "Bearing brick", "Firebrick", "Pavers"],
          answer: 0,
          explain: "Brick veneer is a non-structural facing supported by the backup wall behind it."
        },
        {
          type: "mcq",
          q: "The paste of cement, sand and lime that bonds masonry units together is:",
          choices: ["Grout", "Mortar", "Slurry", "Stucco"],
          answer: 1,
          explain: "Mortar is the bedding that bonds individual blocks and bricks together."
        },
        {
          type: "truefalse",
          q: "Grout is a flowable mix poured into block cells, often around rebar, to strengthen a masonry wall.",
          answer: true,
          explain: "Grout fills the cells, locking in rebar and adding strength to reinforced masonry."
        },
        {
          type: "truefalse",
          q: "Control joints are placed in masonry to manage cracking from shrinkage and movement.",
          answer: true,
          explain: "Control joints give masonry a planned place to crack, limiting random cracking."
        },
        {
          type: "mcq",
          q: "The skilled tradesperson who lays block and brick is the:",
          choices: ["Mason", "Plasterer", "Finisher", "Tender"],
          answer: 0,
          explain: "The mason is the trade that lays masonry units and tools the mortar joints."
        },
        {
          type: "match",
          q: "Match each masonry term to its role.",
          pairs: [
            ["Mortar", "Bonds units together"],
            ["Grout", "Fills cells around rebar"],
            ["Control joint", "Controls shrinkage cracking"]
          ],
          explain: "Mortar bonds, grout reinforces and control joints manage movement in masonry."
        },
        {
          type: "order",
          q: "Order these tilt-up panel steps.",
          items: ["Cast panels flat on the slab", "Let panels cure", "Crane lifts panels upright", "Brace and connect panels"],
          explain: "Tilt-up panels are cast flat, cured, lifted and then braced and tied together."
        }
      ]
    },
    {
      id: "l43",
      title: "Curtain Walls & Glazing",
      intro: "The building skin is often a curtain wall of glass and metal that hangs on the structure rather than carrying it.",
      questions: [
        {
          type: "mcq",
          q: "A non-load-bearing exterior wall that hangs on the structure and carries only its own weight and wind is a:",
          choices: ["Storefront", "Curtain wall", "Bearing wall", "Shear wall"],
          answer: 1,
          explain: "Curtain walls form the outer skin and transfer only wind and their own weight to the frame."
        },
        {
          type: "mcq",
          q: "The vertical and horizontal framing members that hold glass in a curtain wall are called:",
          choices: ["Mullions", "Studs", "Girts", "Battens"],
          answer: 0,
          explain: "Mullions are the framing members that grid the wall and support the glass."
        },
        {
          type: "fill",
          q: "The process of installing the glass into the wall framing is called ____.",
          answer: "glazing",
          accept: ["glazing"],
          explain: "Glazing is the trade and act of setting glass into the curtain wall or window frames."
        },
        {
          type: "mcq",
          q: "An opaque panel that hides the floor slab edge between vision glass areas is called:",
          choices: ["Spandrel", "Transom", "Sill", "Reveal"],
          answer: 0,
          explain: "Spandrel panels conceal the slab edge and other floor-line elements behind the glass."
        },
        {
          type: "mcq",
          q: "Two glass panes sealed with an air or gas gap for insulation form an:",
          choices: ["IGU (insulated glass unit)", "Float lite", "Laminated pane", "Tempered slab"],
          answer: 0,
          explain: "An insulated glass unit, or IGU, uses a sealed gap between panes to cut heat flow."
        },
        {
          type: "truefalse",
          q: "Unitized curtain wall arrives as large prefabricated panels, while stick-built is assembled piece by piece on site.",
          answer: true,
          explain: "Unitized systems ship pre-built panels; stick-built systems are assembled member by member in place."
        },
        {
          type: "truefalse",
          q: "Storefront systems are typically used at lower floors near the ground, while curtain wall covers taller building skins.",
          answer: true,
          explain: "Storefront is common at entries and ground level, with curtain wall spanning the full facade above."
        },
        {
          type: "match",
          q: "Match each glazing term to its meaning.",
          pairs: [
            ["Mullion", "Frame member holding glass"],
            ["Spandrel", "Opaque panel at the slab edge"],
            ["IGU", "Sealed double-pane unit"]
          ],
          explain: "Mullions frame, spandrels hide the slab line and IGUs provide the insulating glass."
        }
      ]
    },
    {
      id: "l44",
      title: "Commercial Roofing",
      intro: "Most commercial buildings use low-slope roofs built from membranes or asphalt layers over insulation.",
      questions: [
        {
          type: "mcq",
          q: "Most commercial buildings have roofs that are:",
          choices: ["Steep-slope", "Low-slope (nearly flat)", "Thatched", "Gambrel"],
          answer: 1,
          explain: "Commercial roofs are usually low-slope, draining slowly across a nearly flat surface."
        },
        {
          type: "mcq",
          q: "Which is a single-ply membrane roofing material?",
          choices: ["TPO", "Clay tile", "Cedar shake", "Standing seam slate"],
          answer: 0,
          explain: "TPO, along with EPDM and PVC, is a common single-ply membrane for low-slope roofs."
        },
        {
          type: "fill",
          q: "A roof of multiple alternating layers of asphalt and felts is called a built-up roof, abbreviated ____.",
          answer: "bur",
          accept: ["bur", "built-up roof", "built up roof"],
          explain: "BUR, the built-up roof, stacks plies of bitumen and felt into a thick membrane."
        },
        {
          type: "mcq",
          q: "Asphalt roofing reinforced with polymers and applied in rolls is called:",
          choices: ["Modified bitumen", "Spray foam", "Liquid silicone", "Green roof"],
          answer: 0,
          explain: "Modified bitumen adds polymers to asphalt for tougher, roll-applied low-slope roofing."
        },
        {
          type: "truefalse",
          q: "EPDM and PVC are also single-ply membrane roofing systems alongside TPO.",
          answer: true,
          explain: "EPDM, PVC and TPO are the three main single-ply membranes used commercially."
        },
        {
          type: "truefalse",
          q: "Tapered insulation is used to build slope into a flat roof so water drains to the drains.",
          answer: true,
          explain: "Tapered insulation creates positive slope so water flows toward roof drains."
        },
        {
          type: "mcq",
          q: "The low wall that runs around the edge of a flat roof is called a:",
          choices: ["Parapet", "Coping cap only", "Fascia", "Soffit"],
          answer: 0,
          explain: "A parapet is the upturned wall at the roof perimeter, often capped and flashed."
        },
        {
          type: "fill",
          q: "Sheet metal or membrane used to seal joints and edges against water is called ____.",
          answer: "flashing",
          accept: ["flashing"],
          explain: "Flashing waterproofs transitions at parapets, penetrations and roof edges."
        },
        {
          type: "match",
          q: "Match each roofing term to its description.",
          pairs: [
            ["Cover board", "Rigid layer over insulation"],
            ["Parapet", "Low wall at roof edge"],
            ["Single-ply", "One-layer membrane like TPO"]
          ],
          explain: "Cover board protects insulation, the parapet rims the roof, and single-ply is the membrane."
        }
      ]
    },
    {
      id: "l45",
      title: "Fireproofing & Firestopping",
      intro: "Steel loses strength in a fire, so it is protected with fireproofing, while firestopping seals openings between rated spaces.",
      questions: [
        {
          type: "mcq",
          q: "The sprayed-on material that insulates steel from heat in a fire is abbreviated:",
          choices: ["SFRM", "EIFS", "GWB", "OSB"],
          answer: 0,
          explain: "SFRM, spray-applied fire-resistive material, coats steel to slow heat gain in a fire."
        },
        {
          type: "mcq",
          q: "A thin coating that swells and chars when heated to protect steel is called:",
          choices: ["Intumescent coating", "Epoxy primer", "Galvanizing", "Powder coat"],
          answer: 0,
          explain: "Intumescent coatings expand under heat to form an insulating char over the steel."
        },
        {
          type: "truefalse",
          q: "Unprotected structural steel loses strength quickly in a fire, which is why fireproofing is required.",
          answer: true,
          explain: "Steel softens and weakens at high temperatures, so fire protection preserves its strength."
        },
        {
          type: "fill",
          q: "Sealing gaps where pipes or cables pass through a fire-rated wall is called ____.",
          answer: "firestopping",
          accept: ["firestopping", "firestop"],
          explain: "Firestopping reseals penetrations so a rated wall keeps its fire resistance."
        },
        {
          type: "mcq",
          q: "The time a wall or floor can resist fire, stated in hours, is its:",
          choices: ["Fire-resistance rating", "R-value", "STC rating", "Slump"],
          answer: 0,
          explain: "The fire-resistance rating gives how long an assembly holds back fire, in hours."
        },
        {
          type: "truefalse",
          q: "A rated assembly must be built exactly as tested, including any firestopping at penetrations, to keep its rating.",
          answer: true,
          explain: "Rated assemblies only perform as tested when every detail, including firestopping, is followed."
        },
        {
          type: "mcq",
          q: "Firestopping is most needed at:",
          choices: ["Penetrations through rated walls and floors", "The center of solid slabs", "Exterior glazing only", "Painted surfaces"],
          answer: 0,
          explain: "Penetrations are the weak points where fire could pass, so firestopping focuses there."
        },
        {
          type: "match",
          q: "Match each fire-protection term to its meaning.",
          pairs: [
            ["SFRM", "Sprayed fireproofing on steel"],
            ["Intumescent", "Coating that swells in heat"],
            ["Firestopping", "Seals rated-wall penetrations"]
          ],
          explain: "SFRM and intumescent coatings protect steel; firestopping seals openings in rated assemblies."
        }
      ]
    },
    {
      id: "l46",
      title: "Commercial MEP & Fire Sprinklers",
      intro: "Mechanical, electrical, plumbing and fire-protection systems must be coordinated to fit above the ceilings.",
      questions: [
        {
          type: "mcq",
          q: "MEP coordination mainly works to:",
          choices: ["Fit ducts, pipes and conduit together without clashes", "Pick paint colors", "Schedule deliveries", "Design the facade"],
          answer: 0,
          explain: "MEP coordination routes systems so ducts, pipes and conduit do not conflict in tight ceilings."
        },
        {
          type: "mcq",
          q: "A packaged HVAC unit that sits on the roof and serves the spaces below is a:",
          choices: ["RTU (rooftop unit)", "VAV box", "Sump pump", "Cooling tower"],
          answer: 0,
          explain: "A rooftop unit, or RTU, is a packaged HVAC unit mounted on the roof."
        },
        {
          type: "fill",
          q: "A terminal box that controls airflow to a zone in a duct system is a ____ box.",
          answer: "vav",
          accept: ["vav", "variable air volume"],
          explain: "A VAV box, variable air volume, regulates how much conditioned air a zone receives."
        },
        {
          type: "mcq",
          q: "Large electrical equipment that distributes and protects power circuits is called:",
          choices: ["Switchgear", "A junction box", "A receptacle", "A ballast"],
          answer: 0,
          explain: "Switchgear distributes and protects the building electrical supply at a large scale."
        },
        {
          type: "truefalse",
          q: "In a wet fire sprinkler system the pipes are always filled with water, while a dry system holds pressurized air until a head opens.",
          answer: true,
          explain: "Wet systems stay water-filled; dry systems use air to keep pipes dry in cold spaces until needed."
        },
        {
          type: "truefalse",
          q: "A chiller and a boiler are central plant equipment that produce cooling and heating for a building.",
          answer: true,
          explain: "Chillers make chilled water for cooling and boilers make hot water or steam for heating."
        },
        {
          type: "mcq",
          q: "The vertical fire-protection pipe that lets firefighters connect hoses on each floor is a:",
          choices: ["Standpipe", "Riser diagram", "Roof drain", "Vent stack"],
          answer: 0,
          explain: "A standpipe carries water up the building so firefighters can attach hoses at each level."
        },
        {
          type: "fill",
          q: "The control system that monitors and runs a building's HVAC and equipment is the ____.",
          answer: "bas",
          accept: ["bas", "building automation system"],
          explain: "The BAS, building automation system, monitors and controls the mechanical systems."
        },
        {
          type: "match",
          q: "Match each MEP item to its function.",
          pairs: [
            ["RTU", "Packaged rooftop HVAC unit"],
            ["VAV box", "Controls airflow to a zone"],
            ["Switchgear", "Distributes electrical power"]
          ],
          explain: "The RTU conditions air, the VAV box meters it to zones, and switchgear distributes power."
        }
      ]
    },
    {
      id: "l47",
      title: "Elevators & Conveying",
      intro: "Conveying systems move people between floors using elevators and escalators built into vertical shafts.",
      questions: [
        {
          type: "mcq",
          q: "The vertical shaft an elevator car travels in is called the:",
          choices: ["Hoistway", "Plenum", "Chase", "Atrium"],
          answer: 0,
          explain: "The hoistway, or shaft, is the vertical opening the elevator car runs through."
        },
        {
          type: "mcq",
          q: "An elevator driven by a piston pushing the car up is a:",
          choices: ["Traction elevator", "Hydraulic elevator", "Pneumatic tube", "Dumbwaiter only"],
          answer: 1,
          explain: "Hydraulic elevators use a fluid-driven piston and suit lower-rise buildings."
        },
        {
          type: "mcq",
          q: "An elevator that uses cables and a counterweight over a sheave is a:",
          choices: ["Hydraulic elevator", "Traction elevator", "Freight ramp", "Wheelchair lift"],
          answer: 1,
          explain: "Traction elevators move on cables and a counterweight, working well for taller buildings."
        },
        {
          type: "fill",
          q: "The space at the bottom of the hoistway, below the lowest floor, is called the ____.",
          answer: "pit",
          accept: ["pit"],
          explain: "The elevator pit is the recessed space below the bottom landing in the hoistway."
        },
        {
          type: "truefalse",
          q: "A traction elevator typically suits taller buildings, while hydraulic elevators are common for low-rise.",
          answer: true,
          explain: "Traction systems serve high-rise travel; hydraulic systems fit low-rise applications."
        },
        {
          type: "truefalse",
          q: "An escalator is a moving stairway that carries people between two levels.",
          answer: true,
          explain: "Escalators are continuously moving stairs that shuttle people between floors."
        },
        {
          type: "mcq",
          q: "The clearance distance the car can travel above the top floor for safety is the:",
          choices: ["Overrun (overhead)", "Setback", "Reveal", "Plenum"],
          answer: 0,
          explain: "Overrun, or overhead clearance, gives the car safe room to travel above the top landing."
        },
        {
          type: "match",
          q: "Match each conveying term to its meaning.",
          pairs: [
            ["Hoistway", "Vertical shaft for the car"],
            ["Pit", "Space below the lowest floor"],
            ["Machine room", "Houses elevator equipment"]
          ],
          explain: "The hoistway is the shaft, the pit is at its base, and the machine room holds the drive equipment."
        },
        {
          type: "order",
          q: "Order an elevator car's path during one trip up.",
          items: ["Rests in the pit area level", "Doors close", "Travels up the hoistway", "Stops within the overrun limit"],
          explain: "The car closes its doors, rises through the hoistway and stops within the safe overrun clearance."
        }
      ]
    }
  ]
});
