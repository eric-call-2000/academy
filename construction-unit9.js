window.ACADEMY.addUnit("construction", {
  id: "unit-9",
  title: "Structural Systems Deep Dive",
  color: "#4a69bd",
  icon: "🏛️",
  description: "How buildings carry load: forces and load paths, the major steel, concrete and wood systems, and how structures resist wind and seismic.",
  lessons: [
    {
      id: "l105",
      title: "Loads & Forces",
      intro: "Every structure exists to collect the loads acting on it and carry them safely to the ground.",
      questions: [
        {
          type: "mcq",
          q: "Which best describes dead load?",
          choices: ["The permanent self-weight of the structure and fixed components", "The weight of occupants, furniture and other movable contents", "The lateral pressure that wind places on the building facade", "The weight of snow and rain that collects on the roof"],
          answer: 0,
          explain: "Dead load is the permanent, fixed weight of the structure itself plus cladding, finishes and permanently attached equipment."
        },
        {
          type: "mcq",
          q: "Which of these is a live load?",
          choices: ["Occupants, furniture and movable contents", "The self-weight of the concrete floor slab", "Permanently mounted HVAC ductwork and piping", "The weight of the exterior cladding panels"],
          answer: 0,
          explain: "Live loads are transient gravity loads from use and occupancy, so they can change in magnitude and position over time."
        },
        {
          type: "mcq",
          q: "Wind, snow and seismic loads are grouped together as which category?",
          choices: ["Environmental loads", "Dead loads", "Point loads", "Construction loads"],
          answer: 0,
          explain: "Environmental loads arise from nature and the site, and codes assign them based on location, exposure and risk."
        },
        {
          type: "mcq",
          q: "What distinguishes a point load from a uniform distributed load?",
          choices: ["A point load acts at one location; a uniform load spreads evenly along a length or area", "A point load is always larger than a uniform load on the same member", "A uniform load acts only on columns; a point load acts only on beams", "A point load is permanent dead weight; a uniform load is a live load that comes and goes with occupancy"],
          answer: 0,
          explain: "A point (concentrated) load acts at a single spot, while a uniform load is spread evenly and is often expressed per foot or per square foot."
        },
        {
          type: "truefalse",
          q: "Gravity loads act vertically downward, while wind and seismic forces act mainly as lateral (horizontal) loads.",
          answer: true,
          explain: "Designers separate the vertical gravity system from the lateral system because the two demand different load paths and members."
        },
        {
          type: "fill",
          q: "An earthquake shakes the ground and induces inertial forces, making seismic load primarily a ____ load.",
          answer: "lateral",
          accept: ["lateral", "horizontal"],
          explain: "Seismic ground motion drives the building mass sideways, so seismic demand is treated as a lateral load on the structure."
        },
        {
          type: "match",
          q: "Match each load to its source.",
          pairs: [
            ["Dead load", "Permanent self-weight"],
            ["Live load", "Occupants and contents"],
            ["Snow load", "Accumulation on the roof"],
            ["Seismic load", "Ground shaking inertia"]
          ],
          explain: "Identifying each load source correctly is the first step in selecting the right load combinations for design."
        },
        {
          type: "order",
          q: "Order these steps a designer takes when accounting for loads on a structure.",
          items: ["Identify the load types acting", "Quantify each load magnitude", "Combine loads per code combinations", "Size members for the governing case"],
          explain: "Codes require checking several factored load combinations, and the member is sized for whichever combination governs."
        }
      ]
    },
    {
      id: "l106",
      title: "Resisting Loads",
      intro: "Members resist loads through internal forces, and the load path is the chain that carries gravity to the foundation.",
      questions: [
        {
          type: "mcq",
          q: "A member being pulled apart along its length experiences which internal force?",
          choices: ["Tension", "Compression", "Shear", "Torsion"],
          answer: 0,
          explain: "Tension stretches a member, and steel ties and truss bottom chords are common tension members."
        },
        {
          type: "mcq",
          q: "Which internal force tends to make a slender column buckle?",
          choices: ["Compression", "Tension", "Pure torsion", "Bending only"],
          answer: 0,
          explain: "Compression squeezes a member, and long slender compression members can fail by buckling before reaching their crushing strength."
        },
        {
          type: "mcq",
          q: "When a beam supports a load between its ends, what is the dominant internal effect across its depth?",
          choices: ["Bending (flexure), with tension on one face and compression on the other", "Pure torsion, twisting the beam about its long axis", "Axial compression spread evenly through the full depth of the section", "Uniform tension along the whole beam pulling it straight"],
          answer: 0,
          explain: "Bending puts one face in tension and the opposite face in compression, with the neutral axis carrying no axial stress."
        },
        {
          type: "truefalse",
          q: "Shear is an internal force that tends to make adjacent parts of a member slide past one another.",
          answer: true,
          explain: "Shear acts across the section, and in beams it is usually highest near the supports."
        },
        {
          type: "fill",
          q: "A twisting force that rotates a member about its own axis is called ____.",
          answer: "torsion",
          accept: ["torsion", "torque"],
          explain: "Torsion twists a member, and it commonly appears in spandrel beams loaded eccentrically along an edge."
        },
        {
          type: "mcq",
          q: "What does the term load path describe?",
          choices: ["The route forces take from where they are applied down through members to the foundation and soil", "The sequence in which dead and live loads are added to the structure as each floor is completed", "The route a crane follows when lifting members into place on the frame", "The direction wind travels across a building as it flows around the facade"],
          answer: 0,
          explain: "A complete and continuous load path is essential; if any link is missing the structure cannot safely carry the load."
        },
        {
          type: "order",
          q: "Order the gravity load path from where load is applied down to the ground.",
          items: ["Roof or floor deck and slab", "Beams and joists", "Girders", "Columns", "Foundation and soil"],
          explain: "Gravity collects on the deck, flows through beams to girders, into columns, and finally into the foundation and soil."
        },
        {
          type: "match",
          q: "Match each internal force to a typical member that resists it.",
          pairs: [
            ["Tension", "Truss bottom chord or tie"],
            ["Compression", "Column or truss top chord"],
            ["Bending", "Floor beam"],
            ["Shear", "Beam web near a support"]
          ],
          explain: "Real members often carry several forces at once, but each member type tends to be dominated by one."
        }
      ]
    },
    {
      id: "l107",
      title: "Structural Members",
      intro: "Beams, columns, girders, joists, trusses, slabs and braces each play a defined role in carrying load.",
      questions: [
        {
          type: "mcq",
          q: "What is the primary role of a column?",
          choices: ["Carry axial compression and deliver gravity load downward", "Span horizontally between supports and resist bending", "Resist lateral wind load by acting as a diagonal brace", "Distribute load evenly across a floor area to the beams"],
          answer: 0,
          explain: "A column is a vertical compression member that collects load from beams and girders and passes it down to the foundation."
        },
        {
          type: "mcq",
          q: "How does a girder differ from a typical beam?",
          choices: ["A girder is a larger beam that supports other beams", "A girder is a smaller beam that spans between joists", "A girder is a vertical member that carries axial load", "A girder carries only tension, like a cable or tie rod"],
          answer: 0,
          explain: "Girders are heavier primary beams that gather load from smaller beams or joists framing into them."
        },
        {
          type: "mcq",
          q: "What is a joist?",
          choices: ["A closely spaced, repetitive light beam supporting a floor or roof deck", "A large primary beam that collects load from smaller beams", "A diagonal member that braces the frame against lateral load", "A short vertical post that transfers load from a beam to a footing"],
          answer: 0,
          explain: "Joists are repetitive members spaced close together to support decking and spread the floor load to beams."
        },
        {
          type: "mcq",
          q: "Why is a truss efficient over long spans?",
          choices: ["Triangulated members carry load mostly as axial tension and compression, using less material", "Its solid deep web resists bending along the full length of the span, so it needs no diagonals", "Every member works only in compression, so slender steel is enough", "Its rigid welded connections let it bend without needing extra depth"],
          answer: 0,
          explain: "Triangulation converts bending into axial forces in slender members, letting a truss span far with little material."
        },
        {
          type: "truefalse",
          q: "A brace is a diagonal member added mainly to resist lateral loads and provide stability.",
          answer: true,
          explain: "Diagonal braces triangulate a frame so it can resist sideways forces from wind and seismic loads."
        },
        {
          type: "fill",
          q: "The clear horizontal distance a beam or slab covers between its supports is called its ____.",
          answer: "span",
          accept: ["span", "clear span"],
          explain: "Span drives member depth and size; longer spans generally require deeper or stronger members."
        },
        {
          type: "fill",
          q: "The floor area whose load a single beam or column must carry is its ____ area.",
          answer: "tributary",
          accept: ["tributary", "tributary area"],
          explain: "Tributary area is the share of floor that drains its gravity load onto a given member, setting the load it must carry."
        },
        {
          type: "match",
          q: "Match each member to its function.",
          pairs: [
            ["Beam", "Spans and resists bending"],
            ["Column", "Carries axial compression down"],
            ["Slab", "Spreads load over an area"],
            ["Brace", "Resists lateral force"]
          ],
          explain: "Knowing the intended function of each member helps you read a structural model and spot the load path."
        }
      ]
    },
    {
      id: "l108",
      title: "Steel Structural Systems",
      intro: "Steel framing carries gravity on beams and columns and resists lateral load through moment or braced frames.",
      questions: [
        {
          type: "mcq",
          q: "How does a moment frame resist lateral load?",
          choices: ["Through rigid beam-to-column connections that transfer bending moments", "Through diagonal steel braces that carry the sideways force as axial tension", "Through concrete shear walls placed around the stair cores", "Through pinned connections that let the frame sway freely"],
          answer: 0,
          explain: "Moment frames rely on stiff, fixed connections so the frame resists sway by bending the beams and columns."
        },
        {
          type: "mcq",
          q: "How does a braced frame primarily resist lateral load?",
          choices: ["With diagonal braces that carry the lateral force as axial tension and compression", "With rigid beam-to-column connections that resist sway through bending", "With post-tensioned tendons that squeeze the frame together against sway", "With thicker floor slabs that add weight and stiffness to every level"],
          answer: 0,
          explain: "Braces triangulate the frame, so lateral load travels as efficient axial force rather than bending."
        },
        {
          type: "mcq",
          q: "What does a W-shape (wide-flange) section refer to in steel framing?",
          choices: ["An I-shaped rolled section used for beams and columns", "A hollow square or round tube used for columns and braces", "A flat steel plate welded into built-up members", "An L-shaped angle used for bracing and connections"],
          answer: 0,
          explain: "Wide-flange W-shapes are the workhorse rolled sections, efficient in bending for beams and in compression for columns."
        },
        {
          type: "mcq",
          q: "What is the key difference between a shear connection and a moment connection?",
          choices: ["A shear connection transfers vertical shear only; a moment connection also transfers bending moment", "A moment connection is always bolted; a shear connection is always field welded", "A shear connection resists bending; a moment connection only carries vertical shear", "A shear connection joins columns to their footings; a moment connection joins beams to other beams"],
          answer: 0,
          explain: "Simple shear connections are treated as pinned, while moment connections are rigid and part of the lateral system."
        },
        {
          type: "truefalse",
          q: "In composite beam construction, shear studs link the steel beam to the concrete slab so they act together.",
          answer: true,
          explain: "Welded shear studs make the slab and beam share bending, increasing stiffness and strength over the bare steel beam."
        },
        {
          type: "fill",
          q: "Corrugated steel sheet that supports the concrete floor and often serves as its formwork is called metal ____.",
          answer: "deck",
          accept: ["deck", "decking"],
          explain: "Metal deck spans between beams to carry the wet concrete and the deck profile can also act compositely with the slab."
        },
        {
          type: "order",
          q: "Order how gravity load travels through a typical steel floor framing system.",
          items: ["Concrete slab on metal deck", "Infill beams", "Girders", "Columns"],
          explain: "Load drains from the slab into infill beams, then into girders, and down the columns to the foundation."
        },
        {
          type: "match",
          q: "Match each steel framing term to its description.",
          pairs: [
            ["Moment frame", "Rigid joints resist sway"],
            ["Braced frame", "Diagonals resist sway"],
            ["Composite beam", "Steel and slab act together"],
            ["Shear connection", "Transfers vertical shear only"]
          ],
          explain: "Most steel buildings combine simple gravity connections with a dedicated lateral system of moment or braced frames."
        }
      ]
    },
    {
      id: "l109",
      title: "Concrete Structural Systems",
      intro: "Reinforced concrete combines concrete in compression with steel reinforcing in tension across many slab systems.",
      questions: [
        {
          type: "mcq",
          q: "Why is steel reinforcing added to structural concrete?",
          choices: ["Concrete is strong in compression but weak in tension, so steel carries the tension", "Steel is strong in compression, so it carries the weight and concrete only protects it from rust", "Steel helps the concrete cure faster so forms can be stripped sooner", "Steel reduces the overall weight of the concrete member"],
          answer: 0,
          explain: "Concrete cracks under tension, so reinforcing bars are placed where tension occurs to carry those forces."
        },
        {
          type: "mcq",
          q: "What defines a one-way slab?",
          choices: ["It bends and spans primarily in one direction to its supports", "It spans equally in both directions to beams on all four sides", "It is poured in one continuous placement with no joints", "It has reinforcing steel in only one face of the slab"],
          answer: 0,
          explain: "A one-way slab carries load in a single direction, typically when one span is much longer than the other."
        },
        {
          type: "mcq",
          q: "What is the difference between a flat plate and a flat slab?",
          choices: ["A flat slab adds drop panels or column capitals at columns; a flat plate has neither", "A flat plate adds drop panels or capitals at columns; a flat slab has neither", "A flat slab spans one way to beams; a flat plate spans two ways with no beams", "A flat plate is post-tensioned; a flat slab uses only conventional rebar"],
          answer: 0,
          explain: "Flat slabs thicken the slab at columns with drop panels or capitals to resist punching shear, while flat plates rely on the uniform slab alone."
        },
        {
          type: "mcq",
          q: "What is the main advantage of a post-tensioned slab?",
          choices: ["Tensioned tendons compress the slab, allowing longer spans and thinner slabs with less cracking", "Tendons replace all the rebar, so the slab can be poured without any inspection", "The tendons add weight that holds the slab down against wind uplift", "The tendons let the slab be cored or cut anywhere later without any risk to the structure"],
          answer: 0,
          explain: "Stressing high-strength tendons after the concrete cures pre-compresses the slab, controlling deflection and cracking over long spans."
        },
        {
          type: "truefalse",
          q: "A two-way slab is designed to span and carry load in two perpendicular directions.",
          answer: true,
          explain: "When a slab panel is roughly square it bends both ways, so reinforcing runs in two directions."
        },
        {
          type: "fill",
          q: "A two-way slab with a grid of voids that create regularly spaced ribs is called a ____ slab.",
          answer: "waffle",
          accept: ["waffle", "waffle slab"],
          explain: "Waffle slabs use molded voids to cut weight while keeping deep ribs that span efficiently in two directions."
        },
        {
          type: "match",
          q: "Match each concrete slab system to a defining feature.",
          pairs: [
            ["Flat plate", "Uniform slab, no drop panels"],
            ["Flat slab", "Drop panels at columns"],
            ["Waffle slab", "Grid of ribs and voids"],
            ["Post-tensioned slab", "Stressed tendons pre-compress"]
          ],
          explain: "Slab system selection balances span, floor depth, weight and forming cost."
        },
        {
          type: "order",
          q: "Order these reinforced concrete framing elements from the one nearest the load to its support.",
          items: ["Slab", "Beam", "Girder", "Column"],
          explain: "In beam-and-girder framing the slab feeds beams, beams feed girders, and girders deliver load to columns."
        }
      ]
    },
    {
      id: "l110",
      title: "Wood & Mass Timber",
      intro: "Wood structures range from light-frame lumber to engineered products and modern mass timber panels.",
      questions: [
        {
          type: "mcq",
          q: "What is dimensional lumber?",
          choices: ["Standard sawn solid-wood members like 2x4 and 2x10 used in framing", "Engineered members like LVL and I-joists made by gluing wood layers", "Lumber cut to exact custom dimensions for each job", "Timber graded only by its moisture content at delivery"],
          answer: 0,
          explain: "Dimensional lumber is solid sawn wood in standard sizes that forms the studs, joists and rafters of light-frame construction."
        },
        {
          type: "mcq",
          q: "What is glulam?",
          choices: ["Glued laminated timber, made by bonding lumber laminations into large beams and columns", "Cross-laminated timber, made of boards glued at right angles into wall and floor panels", "Laminated veneer lumber, made by gluing thin veneers into headers and beams", "Oriented strand board, made by pressing wood strands with resin into panels"],
          answer: 0,
          explain: "Glulam stacks and glues smaller boards into large straight or curved members that can span well beyond solid sawn timber."
        },
        {
          type: "mcq",
          q: "What is an I-joist?",
          choices: ["An engineered joist with lumber or LVL flanges and a thin web, shaped like an I", "A steel wide-flange beam used in place of a wood girder", "An open-web floor truss made of 2x4 chords joined by metal plate connectors", "A solid sawn joist notched at the ends to sit on an I-shaped beam"],
          answer: 0,
          explain: "Engineered I-joists are light, straight and dimensionally stable, making them popular for long, consistent floor framing."
        },
        {
          type: "mcq",
          q: "In light-frame wood buildings, what resists lateral load in the walls?",
          choices: ["Shear walls formed by sheathing nailed to the framing", "The headers and jack studs around door and window openings", "The double top plate tying the walls together", "Hold-down anchors alone, without any sheathing"],
          answer: 0,
          explain: "Wood structural panel sheathing nailed to studs turns a wall into a shear wall that resists racking from wind or seismic."
        },
        {
          type: "truefalse",
          q: "A roof or floor diaphragm collects lateral load and delivers it to the shear walls below.",
          answer: true,
          explain: "The sheathed floor and roof planes act as horizontal diaphragms, transferring lateral force to the vertical shear walls."
        },
        {
          type: "fill",
          q: "Cross-laminated timber, a mass timber panel of layers stacked at right angles, is abbreviated ____.",
          answer: "CLT",
          accept: ["clt", "cross-laminated timber", "cross laminated timber"],
          explain: "CLT layers boards in alternating directions, creating strong two-way panels used for mass timber floors and walls."
        },
        {
          type: "match",
          q: "Match each wood product to its description.",
          pairs: [
            ["Glulam", "Glued laminated large beam"],
            ["LVL", "Laminated veneer lumber"],
            ["I-joist", "Engineered I-shaped joist"],
            ["CLT", "Cross-laminated mass panel"]
          ],
          explain: "Engineered wood products give more consistent strength and longer spans than solid sawn lumber."
        },
        {
          type: "order",
          q: "Order these wood floor framing elements along the gravity load path.",
          items: ["Sheathing", "Joists", "Beam", "Post"],
          explain: "Floor sheathing spans to joists, joists bear on a beam, and the beam transfers load to a post or wall below."
        }
      ]
    },
    {
      id: "l111",
      title: "Lateral Systems",
      intro: "Lateral systems resist wind and seismic forces and tie the whole building together as it sways.",
      questions: [
        {
          type: "mcq",
          q: "Which three elements are the common vertical lateral-force-resisting systems?",
          choices: ["Shear walls, braced frames and moment frames", "Floor diaphragms, drag struts and chord members", "Columns, girders and transfer beams", "Footings, piles and grade beams"],
          answer: 0,
          explain: "Shear walls, braced frames and moment frames are the three principal vertical systems that carry lateral load to the foundation."
        },
        {
          type: "mcq",
          q: "What is the role of a floor or roof diaphragm in the lateral system?",
          choices: ["It collects horizontal load and distributes it to the vertical lateral elements", "It carries only gravity load from the floor down to the beams", "It resists overturning by anchoring the building's walls directly to the foundation", "It stiffens the columns so they do not buckle under axial load"],
          answer: 0,
          explain: "The diaphragm acts like a deep horizontal beam, gathering lateral force from each floor and delivering it to shear walls or frames."
        },
        {
          type: "mcq",
          q: "What is the function of a collector (drag strut) in a diaphragm?",
          choices: ["It gathers diaphragm forces and drags them into the vertical lateral element", "It carries gravity load from the deck down to the columns below", "It ties the cladding back to the floor edge against wind suction", "It braces the top of a retaining wall against lateral soil pressure"],
          answer: 0,
          explain: "Collectors transfer accumulated diaphragm shear into the shear walls or braced frames that do not span the full diaphragm width."
        },
        {
          type: "truefalse",
          q: "Chords are the edge members of a diaphragm that resist the tension and compression from its bending.",
          answer: true,
          explain: "Just like the flanges of a beam, diaphragm chords pick up the tension and compression at the diaphragm edges."
        },
        {
          type: "fill",
          q: "The total horizontal seismic force a building must resist at its base is called the base ____.",
          answer: "shear",
          accept: ["shear", "base shear"],
          explain: "Base shear is the design lateral force at the foundation, distributed up the building to each floor level."
        },
        {
          type: "mcq",
          q: "Which statement about wind versus seismic load is most accurate?",
          choices: ["Wind is an applied external pressure, while seismic force comes from the building mass responding to ground motion", "Seismic is an applied external pressure on the facade, while wind force comes from the building's own mass swaying", "Both come from the same source, so a building designed for wind is automatically safe for earthquakes", "Seismic force grows as a building gets lighter, while wind force grows as it gets heavier"],
          answer: 0,
          explain: "Wind pushes on surfaces, but seismic demand grows with the building mass, so heavier buildings attract larger seismic forces."
        },
        {
          type: "order",
          q: "Order the lateral load path from where wind or seismic force enters to where it leaves the building.",
          items: ["Diaphragm collects the load", "Collectors drag it to vertical elements", "Shear walls or frames carry it down", "Foundation transfers it to the soil"],
          explain: "Lateral force flows through the diaphragm and collectors into the vertical system and finally into the foundation and soil."
        },
        {
          type: "match",
          q: "Match each lateral-system component to its job.",
          pairs: [
            ["Diaphragm", "Distributes lateral load horizontally"],
            ["Chord", "Resists diaphragm edge tension and compression"],
            ["Collector", "Drags load into vertical elements"],
            ["Shear wall", "Carries lateral load to the base"]
          ],
          explain: "A complete lateral path needs every link, from diaphragm and chords through collectors to the vertical resisting elements."
        }
      ]
    },
    {
      id: "l112",
      title: "Foundations & Soil",
      intro: "Foundations transfer building loads into the soil or rock, choosing shallow or deep systems based on the ground.",
      questions: [
        {
          type: "mcq",
          q: "What distinguishes a shallow foundation from a deep foundation?",
          choices: ["Shallow foundations bear near the surface; deep foundations reach down to stronger strata", "Shallow foundations are used only for houses; deep foundations only for high-rises", "Shallow foundations rely on side friction; deep foundations rely only on a wide pad", "Shallow foundations are cast in place; deep foundations are always precast piles"],
          answer: 0,
          explain: "Shallow systems spread load into competent soil near grade, while deep systems extend to firmer soil or rock far below."
        },
        {
          type: "mcq",
          q: "What is a spread footing?",
          choices: ["A widened pad that spreads a column or wall load over enough soil area", "A long pile driven deep to reach firm soil or rock", "A steel base plate bolted to the bottom of a column", "A thick continuous slab that supports the entire building in one large pour"],
          answer: 0,
          explain: "A spread footing enlarges the bearing area so the soil pressure stays within the soil safe bearing capacity."
        },
        {
          type: "mcq",
          q: "When is a mat (raft) foundation typically used?",
          choices: ["When loads are heavy or soil is weak, so one large slab supports the whole structure", "When rock is right at the surface, so no footings are needed at all", "When the building is very light, so individual footings would be wasteful", "When groundwater is low, so the slab can be poured without any waterproofing"],
          answer: 0,
          explain: "A mat spreads the entire building load across a large area, useful where individual footings would overlap or soil is poor."
        },
        {
          type: "mcq",
          q: "How do piles and drilled shafts carry load into the ground?",
          choices: ["Through end bearing on deep strata and friction along their sides", "Through a wide bearing pad that spreads load near the surface", "Through their weight alone, which anchors them against uplift", "Through lateral pressure against the soil at the top of the pile"],
          answer: 0,
          explain: "Deep foundations develop capacity from end bearing at the tip and skin friction along the shaft surface."
        },
        {
          type: "truefalse",
          q: "Bearing capacity is the maximum load per unit area the soil can support without failing.",
          answer: true,
          explain: "Foundations must keep applied soil pressure below the allowable bearing capacity to avoid a soil shear failure."
        },
        {
          type: "fill",
          q: "The gradual downward movement of a foundation as the soil compresses under load is called ____.",
          answer: "settlement",
          accept: ["settlement", "settling"],
          explain: "Total and differential settlement must be controlled, since uneven settlement can crack and distort the structure."
        },
        {
          type: "fill",
          q: "A drilled deep foundation, a large bored concrete shaft, is also known as a drilled shaft or ____.",
          answer: "caisson",
          accept: ["caisson", "caissons", "drilled pier"],
          explain: "Drilled shafts, also called caissons or drilled piers, are bored and filled with concrete to reach deep bearing strata."
        },
        {
          type: "match",
          q: "Match each foundation element to its role.",
          pairs: [
            ["Spread footing", "Shallow pad under a column"],
            ["Mat foundation", "One slab for the whole building"],
            ["Pile", "Deep driven load-carrying member"],
            ["Retaining wall", "Holds back soil and resists earth pressure"]
          ],
          explain: "Choosing the right foundation depends on the loads, the soil profile and acceptable settlement."
        }
      ]
    }
  ]
});
