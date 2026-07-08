window.ACADEMY.addUnit("construction", {
  id: "unit-7",
  title: "Concrete Formwork Deep Dive",
  color: "#c0883a",
  icon: "🪵",
  description: "The temporary structures that shape and support poured concrete: form systems, ties, pressure, and safe stripping.",
  lessons: [
    {
      id: "l56",
      title: "Formwork Fundamentals",
      intro: "Formwork is the temporary mold that gives fresh concrete its shape and holds it until it can carry its own weight.",
      questions: [
        {
          type: "mcq",
          q: "What is the primary purpose of concrete formwork?",
          choices: ["To shape the concrete and support it until it cures", "To cure the concrete faster", "To reinforce the concrete permanently", "To waterproof the finished slab"],
          answer: 0,
          explain: "Formwork molds the concrete to the desired shape and carries its loads until the concrete hardens enough to be self-supporting."
        },
        {
          type: "mcq",
          q: "The surface of the form that the wet concrete actually touches is called the:",
          choices: ["Form face or sheathing", "Wale", "Strongback", "Kicker"],
          answer: 0,
          explain: "The form face, also called the sheathing or contact surface, is what imprints the finished texture onto the concrete."
        },
        {
          type: "mcq",
          q: "Falsework most accurately refers to the temporary structure that:",
          choices: ["Supports forms and loads above the ground, such as for bridges or elevated decks", "Imprints a texture into the concrete face", "Permanently reinforces a beam", "Seals construction joints"],
          answer: 0,
          explain: "Falsework is the temporary supporting framework, commonly the towers and bracing that hold up elevated formwork until the concrete is self-supporting."
        },
        {
          type: "truefalse",
          q: "Formwork is a temporary structure that is removed once the concrete has gained enough strength.",
          answer: true,
          explain: "Forms are stripped after the concrete cures; only permanent forms like stay-in-place metal decking remain in the structure."
        },
        {
          type: "fill",
          q: "Vertical posts placed under fresh concrete to carry its weight until it cures are called ____.",
          answer: "shores",
          accept: ["shores", "shoring", "shore"],
          explain: "Shores are the vertical supports that hold up slab and beam forms while the concrete gains strength."
        },
        {
          type: "fill",
          q: "Placing temporary posts back under a slab after the original forms are removed is called ____.",
          answer: "reshoring",
          accept: ["reshoring", "reshore", "re-shoring"],
          explain: "Reshoring removes the original shores then re-installs posts so a young slab can share load with the floors below."
        },
        {
          type: "match",
          q: "Match each formwork term to its meaning.",
          pairs: [
            ["Formwork", "The mold that shapes the concrete"],
            ["Falsework", "Temporary frame that supports the forms"],
            ["Shoring", "Vertical posts carrying fresh-concrete load"],
            ["Sheathing", "The form face the concrete contacts"]
          ],
          explain: "Knowing these terms keeps shape, support, and contact-surface roles distinct on the job."
        },
        {
          type: "truefalse",
          q: "Formwork only needs to shape the concrete; it does not have to carry any structural load.",
          answer: false,
          explain: "Formwork has two jobs: it shapes the concrete AND supports the heavy fluid load plus construction loads until curing."
        }
      ]
    },
    {
      id: "l57",
      title: "Form Materials & Systems",
      intro: "Forms are built from many materials and assembled as job-built lumber, modular panels, or large gangs depending on reuse.",
      questions: [
        {
          type: "mcq",
          q: "Which plywood product is specially manufactured with a smooth, treated face for concrete forming?",
          choices: ["Plyform", "OSB", "MDF", "Lauan underlayment"],
          answer: 0,
          explain: "Plyform is APA-rated exterior plywood made for forming, with a sanded or overlaid face that releases cleanly and resists moisture."
        },
        {
          type: "mcq",
          q: "An advantage of aluminum and steel forms over job-built lumber forms is that they:",
          choices: ["Are durable and reusable for many pours", "Are cheaper for a single one-off pour", "Cannot rust or corrode ever", "Require no form release agent"],
          answer: 0,
          explain: "Metal forms cost more up front but stay true and survive hundreds of reuses, lowering cost per pour on repetitive work."
        },
        {
          type: "mcq",
          q: "What is the key difference between handset forms and gang forms?",
          choices: ["Gang forms are large preassembled panels lifted by crane; handset panels are placed by hand", "Handset forms are always steel", "Gang forms can only be used for footings", "Handset forms need no ties"],
          answer: 0,
          explain: "Handset panels are sized for one or two workers to carry, while gangs are ganged into big units that a crane flies into place."
        },
        {
          type: "truefalse",
          q: "Job-built forms are constructed on site, usually from lumber and plywood, for a specific application.",
          answer: true,
          explain: "Job-built or stick-built forms are custom assembled on site, flexible for odd shapes but more labor-intensive than modular panels."
        },
        {
          type: "fill",
          q: "Prefabricated form units made of repeating panels that connect together are called ____ panel systems.",
          answer: "modular",
          accept: ["modular", "prefabricated", "prefab"],
          explain: "Modular panel systems use standardized, reusable panels with built-in connectors for fast assembly and many reuses."
        },
        {
          type: "fill",
          q: "Plastic and ____ forms are valued for being lightweight and producing smooth, curved, or molded concrete shapes.",
          answer: "fiberglass",
          accept: ["fiberglass", "frp", "glass fiber"],
          explain: "Fiberglass forms hold complex curved or architectural shapes well and are light enough to handle easily."
        },
        {
          type: "order",
          q: "Order these form materials from generally lowest to highest number of reuses you would expect.",
          items: ["Single-use lumber form", "Plyform panel", "Aluminum panel", "Steel form"],
          explain: "Reusability rises with material durability, so steel and aluminum forms far outlast a one-time lumber form."
        },
        {
          type: "match",
          q: "Match each form material to a typical strength or trait.",
          pairs: [
            ["Plyform", "Smooth face, moderate reuse"],
            ["Steel", "Very durable, high reuse"],
            ["Aluminum", "Lightweight and reusable"],
            ["Fiberglass", "Good for curved shapes"]
          ],
          explain: "Material choice balances cost, weight, surface finish, and how many times the form will be reused."
        }
      ]
    },
    {
      id: "l58",
      title: "Wall Forms",
      intro: "Wall forms must resist the heavy lateral pressure of fresh concrete using sheathing, studs, wales, ties, and braces.",
      questions: [
        {
          type: "mcq",
          q: "In a wall form, the horizontal members that gather the load from the studs and hold the form line are called:",
          choices: ["Wales (walers)", "Joists", "Stringers", "Sole plates"],
          answer: 0,
          explain: "Wales, also spelled walers, run horizontally across the studs to align the form and transfer pressure to the ties."
        },
        {
          type: "mcq",
          q: "What is the main job of a form tie in a wall form?",
          choices: ["To hold the two form faces together against the outward pressure of the concrete", "To support the slab above", "To vibrate the concrete", "To level the footing"],
          answer: 0,
          explain: "Ties pass through the wall and connect both sides, resisting the bursting lateral pressure that tries to push the forms apart."
        },
        {
          type: "mcq",
          q: "Which of these is a common type of wall form tie?",
          choices: ["Snap tie", "Lag screw", "Anchor bolt", "Rebar chair"],
          answer: 0,
          explain: "Snap ties, she-bolts, taper ties, and coil ties are standard wall-form ties; snap ties break off behind the surface after stripping."
        },
        {
          type: "truefalse",
          q: "A taper tie can be removed entirely after the pour, leaving a clean hole through the wall.",
          answer: true,
          explain: "A taper tie is tapered so it pulls out completely after stripping, useful for water-resistant walls where no metal can remain."
        },
        {
          type: "fill",
          q: "Diagonal members that hold a wall form upright and plumb against wind and placement loads are called ____.",
          answer: "braces",
          accept: ["braces", "bracing", "brace"],
          explain: "Braces, often kickers or strongbacks, keep the form plumb and stable so it does not lean or shift during the pour."
        },
        {
          type: "fill",
          q: "The vertical members directly behind the sheathing that stiffen the form face are the ____.",
          answer: "studs",
          accept: ["studs", "stud"],
          explain: "Studs back the sheathing and carry the pressure to the wales, just like wall studs back drywall."
        },
        {
          type: "order",
          q: "Order these wall-form parts from the concrete face outward.",
          items: ["Sheathing", "Studs", "Wales", "Ties anchoring through"],
          explain: "Pressure flows from the sheathing to the studs to the wales and finally into the ties that hold both faces together."
        },
        {
          type: "match",
          q: "Match each wall-form component to its role.",
          pairs: [
            ["Sheathing", "Forms the concrete face"],
            ["Stud", "Backs and stiffens the sheathing"],
            ["Wale", "Aligns form and gathers stud loads"],
            ["Tie", "Holds the two faces together"]
          ],
          explain: "Each layer hands the concrete pressure to the next, ending at the ties that keep the form from bursting apart."
        }
      ]
    },
    {
      id: "l59",
      title: "Slab & Deck Forms",
      intro: "Elevated slabs are formed on decking carried by joists and stringers, all held up by shores until the slab cures.",
      questions: [
        {
          type: "mcq",
          q: "In a slab form, what carries the decking and transfers its load down to the stringers?",
          choices: ["Joists", "Wales", "Ties", "Chamfer strips"],
          answer: 0,
          explain: "Decking rests on joists, joists bear on stringers, and stringers transfer the load to the shores below."
        },
        {
          type: "mcq",
          q: "Large preassembled slab form units flown from floor to floor by crane are known as:",
          choices: ["Flying forms or table forms", "Snap ties", "Sonotubes", "Keyways"],
          answer: 0,
          explain: "Flying or table forms are big reusable assemblies of decking, joists, and shores that a crane lifts to the next level intact."
        },
        {
          type: "mcq",
          q: "A drop-head or quick-strip shore is designed to:",
          choices: ["Let the deck and joists be removed while shores stay in place supporting the slab", "Pour the concrete faster", "Replace rebar in the slab", "Vibrate air pockets out of the slab"],
          answer: 0,
          explain: "Drop-head shores lower the deck slightly so forms strip early while the shore keeps supporting the young slab, freeing form material for reuse."
        },
        {
          type: "truefalse",
          q: "Post shores are adjustable vertical supports used to hold up slab and beam forms.",
          answer: true,
          explain: "Post shores, often adjustable steel or aluminum, are set to height to carry the formwork and fresh concrete loads."
        },
        {
          type: "fill",
          q: "The flat form surface that the slab concrete is poured directly onto is called the ____.",
          answer: "decking",
          accept: ["decking", "deck", "plywood deck"],
          explain: "Decking, usually plywood or plyform, is the contact surface that shapes the underside of the slab."
        },
        {
          type: "fill",
          q: "A beam is formed with a bottom plus two ____ to mold its sides.",
          answer: "sides",
          accept: ["sides", "side forms", "beam sides"],
          explain: "A beam form has a bottom that carries the load and side forms that shape and contain the beam pour."
        },
        {
          type: "order",
          q: "Order these slab-form members from the top (concrete) down to the support.",
          items: ["Decking", "Joists", "Stringers", "Shores"],
          explain: "Load flows downward from the decking through joists and stringers into the shores, then to the floor below."
        },
        {
          type: "match",
          q: "Match each slab-form term to its description.",
          pairs: [
            ["Decking", "Surface the slab is poured on"],
            ["Joist", "Supports the decking"],
            ["Stringer", "Carries the joists to the shores"],
            ["Flying form", "Crane-lifted reusable deck unit"]
          ],
          explain: "Slab forms stack decking on joists on stringers on shores, and flying forms package that whole assembly for reuse."
        }
      ]
    },
    {
      id: "l60",
      title: "Column & Footing Forms",
      intro: "Columns, footings, and piers each use specialized forms and clamps to hold their shape against concrete pressure.",
      questions: [
        {
          type: "mcq",
          q: "A round cardboard tube commonly used to form round concrete columns is branded as a:",
          choices: ["Sonotube", "She-bolt", "Strongback", "Waler"],
          answer: 0,
          explain: "Sonotube is a common trade name for the spiral-wound fiber tube that forms round columns and piers."
        },
        {
          type: "mcq",
          q: "Column clamps or yokes wrap around a column form mainly to:",
          choices: ["Resist the outward pressure and keep the form from spreading", "Speed up curing", "Hold the rebar cage", "Provide a smooth finish"],
          answer: 0,
          explain: "Clamps and yokes band the column form at intervals to contain the high lateral pressure that builds in a tall, narrow pour."
        },
        {
          type: "mcq",
          q: "Why are column clamps usually spaced closer together near the bottom of a column form?",
          choices: ["Lateral pressure is greatest at the bottom where the concrete head is tallest", "The top concrete is heavier", "It looks better", "The rebar is denser at the bottom"],
          answer: 0,
          explain: "Pressure increases with the height of fluid concrete above a point, so the base sees the most pressure and needs tighter clamp spacing."
        },
        {
          type: "truefalse",
          q: "A keyway is a groove formed into a footing to help lock the next concrete pour, like a wall, in place.",
          answer: true,
          explain: "A keyway, often a beveled strip in the footing top, creates a shear key that ties the footing to the wall poured on top of it."
        },
        {
          type: "fill",
          q: "Low side forms placed around the perimeter of a slab to contain the edge are called ____ forms.",
          answer: "edge",
          accept: ["edge", "edge form", "screed"],
          explain: "Edge forms set the slab thickness and contain the concrete at the perimeter, doubling as a screed guide."
        },
        {
          type: "fill",
          q: "A widened concrete base that spreads a column or wall load into the soil is a ____.",
          answer: "footing",
          accept: ["footing", "footings", "spread footing"],
          explain: "Footing forms shape the spread base that transfers structural loads to the bearing soil below."
        },
        {
          type: "order",
          q: "Order these vertical-element forms from smallest to largest typical footprint.",
          items: ["Round column form", "Square column form", "Pier form", "Spread footing form"],
          explain: "Columns are the slender vertical members, piers are stockier supports, and footings spread the widest to reach bearing soil."
        },
        {
          type: "match",
          q: "Match each form to what it shapes.",
          pairs: [
            ["Sonotube", "Round column"],
            ["Column clamp", "Bands a column form"],
            ["Keyway", "Shear key in a footing"],
            ["Edge form", "Slab perimeter"]
          ],
          explain: "Each accessory addresses a specific element so the pour holds its intended shape under pressure."
        }
      ]
    },
    {
      id: "l61",
      title: "Concrete Pressure & Design",
      intro: "Fresh concrete acts like a heavy fluid, and several factors raise the lateral pressure that formwork must be designed to resist.",
      questions: [
        {
          type: "mcq",
          q: "Fresh concrete pushes outward on wall forms because it behaves like a:",
          choices: ["Heavy fluid that exerts lateral pressure", "Solid that exerts no side load", "Gas under suction", "Lightweight foam"],
          answer: 0,
          explain: "Until it stiffens, fresh concrete acts as a dense liquid, so it presses sideways on the forms in proportion to its depth."
        },
        {
          type: "mcq",
          q: "Which of these INCREASES the lateral pressure on a wall form?",
          choices: ["A faster rate of placement", "Warmer concrete that sets faster", "A lower slump, stiffer mix", "A slower pour with a quick set"],
          answer: 0,
          explain: "A faster placement rate keeps more concrete fluid at once, raising the effective fluid head and the lateral pressure."
        },
        {
          type: "mcq",
          q: "Which condition generally lowers the maximum lateral form pressure?",
          choices: ["Higher concrete temperature that speeds setting", "A higher rate of placement", "A more fluid, high-slump mix", "A taller continuous pour", "Adding more water"],
          answer: 0,
          explain: "Warmer concrete sets faster, so lower layers stiffen and stop transmitting full fluid pressure before the form fills."
        },
        {
          type: "truefalse",
          q: "ACI 347 is the industry guide for formwork design loads and pressures on concrete forms.",
          answer: true,
          explain: "ACI 347, Guide to Formwork for Concrete, gives the recommended design pressures, loads, and safety practices for formwork."
        },
        {
          type: "fill",
          q: "The vertical depth of fluid concrete above a point in the form, which drives pressure, is called the ____.",
          answer: "head",
          accept: ["head", "concrete head", "fluid head"],
          explain: "Pressure at any point rises with the head, the height of still-fluid concrete standing above that point."
        },
        {
          type: "fill",
          q: "Designers multiply expected loads by a ____ factor so forms can carry more than the anticipated load.",
          answer: "safety",
          accept: ["safety", "factor of safety"],
          explain: "A safety factor builds in reserve capacity to cover overloads, impact, and variability so forms do not fail."
        },
        {
          type: "order",
          q: "Order these by their effect: arrange from generally LOWER to HIGHER resulting form pressure.",
          items: ["Stiff low-slump mix poured slowly", "Moderate slump at a moderate rate", "High-slump fluid mix", "Fast placement of a fluid mix in cold weather"],
          explain: "Higher fluidity, faster placement, and cold temperatures each keep concrete liquid longer, stacking up to the greatest pressure."
        },
        {
          type: "match",
          q: "Match each factor to its effect on lateral form pressure.",
          pairs: [
            ["Faster placement", "Increases pressure"],
            ["Higher temperature", "Decreases pressure"],
            ["Higher slump (more fluid)", "Increases pressure"],
            ["Greater pour height", "Increases pressure"]
          ],
          explain: "Rate, temperature, fluidity, and height all govern how much of the concrete stays liquid and presses on the form."
        }
      ]
    },
    {
      id: "l62",
      title: "Ties, Accessories & Hardware",
      intro: "Beyond panels and shores, formwork relies on ties, spreaders, chamfers, liners, and release agents to deliver a clean pour.",
      questions: [
        {
          type: "mcq",
          q: "After stripping, a snap tie is twisted so it breaks off at a point set back from the surface. This is called the:",
          choices: ["Breakback", "Slump", "Keyway", "Camber"],
          answer: 0,
          explain: "The breakback is the inset break point, so the metal end snaps below the surface and the hole can be patched and protected from rust."
        },
        {
          type: "mcq",
          q: "A spreader in a form is used to:",
          choices: ["Hold the two form faces apart at the correct wall thickness", "Push the forms apart during stripping", "Smooth the concrete surface", "Mix the concrete"],
          answer: 0,
          explain: "Spreaders set and maintain the gap, the wall thickness, while ties resist the inward pull; some ties have built-in spreader washers."
        },
        {
          type: "mcq",
          q: "A chamfer strip is placed in the corner of a form to:",
          choices: ["Create a beveled edge instead of a sharp, chip-prone corner", "Hold the rebar", "Stop the concrete from leaking", "Add color to the concrete"],
          answer: 0,
          explain: "A chamfer strip molds a clean 45-degree bevel that resists chipping and looks better than a fragile square corner."
        },
        {
          type: "truefalse",
          q: "Form release agent is applied to the form face to keep concrete from bonding so the form strips cleanly.",
          answer: true,
          explain: "Release agent, also called form oil, prevents the concrete from sticking, easing stripping and protecting the form face for reuse."
        },
        {
          type: "fill",
          q: "A boxed-out void left in the concrete for a future pipe, door, or opening is called a blockout or ____.",
          answer: "buck",
          accept: ["buck", "bucks", "blockout"],
          explain: "Blockouts and bucks reserve openings, like door and window bucks, so concrete is not poured where a void is needed."
        },
        {
          type: "fill",
          q: "A patterned ____ is attached to the form face to imprint a texture or design into the finished concrete.",
          answer: "liner",
          accept: ["liner", "form liner", "form-liner"],
          explain: "Form liners are textured sheets, such as brick or wood-grain patterns, that mold decorative surfaces into the concrete."
        },
        {
          type: "match",
          q: "Match each accessory to its function.",
          pairs: [
            ["Chamfer strip", "Bevels a corner"],
            ["Form liner", "Imprints surface texture"],
            ["Blockout", "Reserves an opening"],
            ["Release agent", "Prevents concrete from sticking"]
          ],
          explain: "Accessories control corners, texture, voids, and stripping, all contributing to a clean, intentional finish."
        },
        {
          type: "mcq",
          q: "Rustication strips are added to a form to:",
          choices: ["Create recessed grooves or reveal lines in the concrete face", "Speed curing", "Reinforce the form", "Remove air bubbles"],
          answer: 0,
          explain: "Rustication strips mold intentional reveal grooves that break up large flat surfaces and hide joints between pours."
        }
      ]
    },
    {
      id: "l63",
      title: "Placing, Stripping & Reshoring",
      intro: "Forms must be braced and plumbed, poured carefully, and stripped only after the concrete has gained enough strength.",
      questions: [
        {
          type: "mcq",
          q: "Before the pour, wall forms must be braced and made plumb. Plumb means the form is:",
          choices: ["Truly vertical", "Perfectly level horizontally", "Slightly tilted", "Watertight"],
          answer: 0,
          explain: "Plumbing the forms sets them dead vertical so the finished wall is straight; bracing holds that position during placement."
        },
        {
          type: "mcq",
          q: "The single most important factor in deciding when forms can be safely stripped is:",
          choices: ["The strength the concrete has gained", "The color of the concrete", "The brand of form release used", "The outside humidity only"],
          answer: 0,
          explain: "Forms come off only once the concrete has gained enough strength to support itself and any loads, verified by time and cylinder tests."
        },
        {
          type: "mcq",
          q: "What is the difference between reshoring and backshoring?",
          choices: ["In reshoring the slab is allowed to deflect and carry its own weight before new shores go in; in backshoring shores are placed snug so the slab never fully deflects", "They are the same thing", "Backshoring is only for footings", "Reshoring uses no posts"],
          answer: 0,
          explain: "Reshores let the slab deflect and carry itself, then add posts; backshores are set tight so the slab never deflects under its own weight."
        },
        {
          type: "truefalse",
          q: "Stripping forms too early can cause the young concrete to crack, sag, or even fail structurally.",
          answer: true,
          explain: "Removing support before the concrete is strong enough can overload it, leading to deflection, cracking, or collapse."
        },
        {
          type: "fill",
          q: "Keeping the concrete moist while it hardens, including the moisture held in by the forms, is called ____.",
          answer: "curing",
          accept: ["curing", "cure"],
          explain: "Curing maintains moisture and temperature so the concrete keeps gaining strength; leaving forms on helps retain that moisture."
        },
        {
          type: "fill",
          q: "Removing the forms from cured concrete is commonly called stripping or form ____.",
          answer: "removal",
          accept: ["removal", "stripping"],
          explain: "Stripping, or form removal, takes the forms off once the concrete can stand on its own, often leaving shores in place."
        },
        {
          type: "order",
          q: "Order these formwork steps from start to finish.",
          items: ["Erect and align the forms", "Brace and plumb the forms", "Place and consolidate the concrete", "Cure, then strip the forms"],
          explain: "Forms are set up, braced plumb, filled and vibrated, then cured before stripping in the proper sequence."
        },
        {
          type: "match",
          q: "Match each closeout term to its meaning.",
          pairs: [
            ["Stripping", "Removing the forms"],
            ["Reshoring", "Re-posting after the slab deflects"],
            ["Backshoring", "Snug posts so slab does not deflect"],
            ["Curing", "Keeping concrete moist to gain strength"]
          ],
          explain: "Timing the strip, then reshoring or backshoring while the concrete cures, keeps young slabs safe as floors stack up."
        },
        {
          type: "mcq",
          q: "A key formwork safety practice during stripping and reshoring is to:",
          choices: ["Follow an engineered shoring and reshoring plan and never overload a young slab", "Strip everything at once to save time", "Skip bracing on short walls", "Remove all shores the same day as the pour"],
          answer: 0,
          explain: "Formwork failures are dangerous, so crews follow the engineer's strip and reshore sequence to avoid overloading immature concrete."
        }
      ]
    }
  ]
});
