window.ACADEMY.addUnit("construction", {
  id: "unit-6",
  title: "Finishes, Systems & Closeout",
  color: "#2bb3a3",
  icon: "🎯",
  description: "From bare studs to keys-in-hand: interior finishes, codes and inspections, scheduling, paperwork, safety and project closeout.",
  lessons: [
    {
      id: "l48",
      title: "Drywall & Interior Walls",
      intro: "Hanging, taping and finishing gypsum board turns a framed cavity into a paintable wall.",
      questions: [
        {
          type: "mcq",
          q: "What is the common interior wall panel made of a gypsum core wrapped in paper?",
          choices: ["Drywall (gypsum board)", "Plywood", "Cement board", "Particle board"],
          answer: 0,
          explain: "Drywall, also called gypsum board, sheetrock or wallboard, is the standard interior wall and ceiling surface."
        },
        {
          type: "fill",
          q: "The wet plaster-like material used to fill joints and screw holes in drywall is called joint ____.",
          answer: "compound",
          accept: ["compound", "mud"],
          explain: "Joint compound, nicknamed mud, embeds tape and fills fasteners so seams disappear."
        },
        {
          type: "truefalse",
          q: "Type X drywall is manufactured to provide a fire-resistance rating.",
          answer: true,
          explain: "Type X board contains glass fibers and additives that slow burn-through, used in rated assemblies like garages and corridors."
        },
        {
          type: "mcq",
          q: "What product reinforces and protects an outside drywall corner?",
          choices: ["Corner bead", "Drip edge", "Furring strip", "Ledger board"],
          answer: 0,
          explain: "Corner bead, metal or paper-faced, gives an outside corner a straight, durable edge for mudding."
        },
        {
          type: "order",
          q: "Order the basic drywall finishing steps after sheets are screwed up.",
          items: ["Tape the joints", "Apply first coat of mud", "Apply additional coats", "Sand smooth"],
          explain: "Tape embeds the seam, then successive coats are built up wider and feathered before final sanding."
        },
        {
          type: "match",
          q: "Match each drywall term to its meaning.",
          pairs: [
            ["Hanging", "Screwing the boards to the studs"],
            ["Taping", "Embedding tape over the seams"],
            ["Mudding", "Spreading joint compound"],
            ["Level 5", "Highest smooth finish with skim coat"]
          ],
          explain: "Hang, tape, mud and finish is the standard drywall workflow, with Level 5 the smoothest of the six finish levels."
        },
        {
          type: "mcq",
          q: "Which framing material is non-combustible and commonly used in commercial interior partitions?",
          choices: ["Metal (steel) studs", "Wood studs", "Bamboo poles", "PVC pipe"],
          answer: 0,
          explain: "Light-gauge steel studs are straight, non-combustible and standard in commercial walls; wood studs are common in homes."
        },
        {
          type: "truefalse",
          q: "There are defined levels of drywall finish, from Level 0 up to Level 5.",
          answer: true,
          explain: "The industry recognizes six finish levels (0 to 5); higher levels add coats and smoothness for critical lighting or sheen."
        },
        {
          type: "fill",
          q: "Drywall sheets are fastened to studs primarily with drywall ____.",
          answer: "screws",
          accept: ["screws", "screw"],
          explain: "Coarse-thread drywall screws set just below the surface (dimpled) so the head can be hidden with mud."
        }
      ]
    },
    {
      id: "l49",
      title: "Interior Finishes",
      intro: "Paint, trim and flooring are the visible surfaces installed in a deliberate sequence near the end of a build.",
      questions: [
        {
          type: "mcq",
          q: "What is applied to drywall before the finish paint to seal the surface and improve adhesion?",
          choices: ["Primer", "Sealant caulk", "Topcoat", "Wax"],
          answer: 0,
          explain: "Primer seals porous drywall and gives the finish coats a uniform base to bond to."
        },
        {
          type: "fill",
          q: "The decorative wood molding that runs along the bottom of a wall at the floor is the ____ board.",
          answer: "base",
          accept: ["base", "baseboard"],
          explain: "Baseboard covers the joint between the wall and floor and protects the wall bottom."
        },
        {
          type: "truefalse",
          q: "LVP stands for luxury vinyl plank, a resilient click-together flooring product.",
          answer: true,
          explain: "Luxury vinyl plank is a popular waterproof flooring that mimics wood and often floats over an underlayment."
        },
        {
          type: "mcq",
          q: "Which trade installs trim, casing, doors and baseboard with tight, finished joints?",
          choices: ["Finish carpenter", "Ironworker", "Mason", "Glazier"],
          answer: 0,
          explain: "The finish carpenter handles the detailed visible woodwork, as opposed to the framer who does rough structure."
        },
        {
          type: "match",
          q: "Match each flooring type to its description.",
          pairs: [
            ["Tile", "Ceramic or porcelain set in thinset"],
            ["Carpet", "Soft textile over padding"],
            ["Hardwood", "Solid or engineered wood planks"],
            ["LVP", "Resilient waterproof vinyl plank"]
          ],
          explain: "Each flooring type has its own substrate prep, underlayment and installation method."
        },
        {
          type: "order",
          q: "Order a typical interior finish sequence in a room.",
          items: ["Prime and paint walls", "Install flooring", "Install baseboard and trim", "Final touch-up paint"],
          explain: "Walls are usually primed and painted first, then flooring, then trim, finishing with caulk and touch-up."
        },
        {
          type: "mcq",
          q: "What thin layer is installed between the subfloor and finish flooring for smoothness, sound or moisture control?",
          choices: ["Underlayment", "Flashing", "Vapor barrier on the roof", "Sheathing"],
          answer: 0,
          explain: "Underlayment is the intermediate layer that levels and protects beneath the finished floor."
        },
        {
          type: "truefalse",
          q: "The molding that frames a door or window opening is called casing.",
          answer: true,
          explain: "Casing is the trim around openings; it conceals the gap between the jamb and the wall."
        }
      ]
    },
    {
      id: "l50",
      title: "Cabinets, Countertops & Millwork",
      intro: "Casework and architectural woodwork are templated, fabricated and installed in a set order.",
      questions: [
        {
          type: "mcq",
          q: "In construction, what is the general term for built cabinets and storage units?",
          choices: ["Casework", "Decking", "Lath", "Soffit"],
          answer: 0,
          explain: "Casework refers to the cabinetry boxes, both base and upper, installed as built-in storage."
        },
        {
          type: "fill",
          q: "Cabinets that sit on the floor and support the countertop are called ____ cabinets.",
          answer: "base",
          accept: ["base", "lower"],
          explain: "Base cabinets rest on the floor and carry the counter; upper (wall) cabinets hang above."
        },
        {
          type: "truefalse",
          q: "Quartz countertops are an engineered stone product, not a single slab of natural rock.",
          answer: true,
          explain: "Quartz counters combine crushed quartz with resin, while granite is quarried natural stone."
        },
        {
          type: "mcq",
          q: "Which countertop material is the lowest-cost and is a printed surface bonded to a substrate?",
          choices: ["Laminate", "Granite", "Quartz", "Soapstone"],
          answer: 0,
          explain: "Laminate is an inexpensive plastic-laminate surface; granite and quartz are higher-end stone options."
        },
        {
          type: "match",
          q: "Match each woodwork term to its meaning.",
          pairs: [
            ["Millwork", "Wood products made in a mill"],
            ["Casework", "Cabinets and built-in boxes"],
            ["Templating", "Measuring the exact counter shape"],
            ["Architectural woodwork", "Custom high-end finish woodwork"]
          ],
          explain: "Millwork and architectural woodwork cover the shaped and custom wood elements of a fit-out."
        },
        {
          type: "order",
          q: "Order the typical countertop and cabinet install steps.",
          items: ["Set and level base cabinets", "Install upper cabinets", "Template the countertop", "Fabricate and install the counter"],
          explain: "Cabinets are set first, then the counter is templated to the actual cabinets before fabrication and install."
        },
        {
          type: "mcq",
          q: "Why is templating done after cabinets are installed rather than from the drawings alone?",
          choices: ["To capture real-world dimensions and out-of-square conditions", "To pick the paint color", "To order the appliances", "To schedule the inspection"],
          answer: 0,
          explain: "Templating measures the as-built cabinets so the stone fits precisely despite field variations."
        },
        {
          type: "truefalse",
          q: "Upper cabinets are also referred to as wall cabinets.",
          answer: true,
          explain: "Upper or wall cabinets mount to the wall above the counter, distinct from floor-mounted base cabinets."
        }
      ]
    },
    {
      id: "l51",
      title: "Codes, ADA & Inspections",
      intro: "Building codes and the local authority govern what gets built and when inspectors sign off.",
      questions: [
        {
          type: "mcq",
          q: "Which code primarily governs commercial buildings, while the IRC governs one- and two-family homes?",
          choices: ["IBC (International Building Code)", "NEC", "ASTM", "ADA"],
          answer: 0,
          explain: "The IBC covers commercial and larger structures; the IRC (International Residential Code) covers houses."
        },
        {
          type: "fill",
          q: "The local agency that adopts and enforces the code is the AHJ, the Authority Having ____.",
          answer: "jurisdiction",
          accept: ["jurisdiction"],
          explain: "The AHJ, the Authority Having Jurisdiction, interprets and enforces code in a given area."
        },
        {
          type: "truefalse",
          q: "ADA stands for the Americans with Disabilities Act and drives accessibility requirements.",
          answer: true,
          explain: "ADA accessibility rules set requirements for ramps, door widths, restrooms and reach ranges."
        },
        {
          type: "mcq",
          q: "What term describes the path occupants use to exit a building safely?",
          choices: ["Egress", "Ingress", "Setback", "Easement"],
          answer: 0,
          explain: "The means of egress includes exit doors, corridors and stairs sized for safe evacuation."
        },
        {
          type: "match",
          q: "Match each inspection term to its meaning.",
          pairs: [
            ["Rough inspection", "Check framing, wiring, plumbing before cover-up"],
            ["Final inspection", "Verify completed work meets code"],
            ["Red-tag", "Stop-work notice for a violation"],
            ["CO", "Certificate of Occupancy to use the building"]
          ],
          explain: "Rough inspections happen before walls close; the final and CO allow legal occupancy."
        },
        {
          type: "order",
          q: "Order these milestones from earliest to latest.",
          items: ["Rough inspection", "Insulation and drywall", "Final inspection", "Certificate of Occupancy"],
          explain: "Rough-ins must pass before cover-up, then final inspection clears the way for the CO."
        },
        {
          type: "mcq",
          q: "What does a red-tag from an inspector mean?",
          choices: ["Work is stopped until a violation is corrected", "Work passed inspection", "The permit is paid in full", "The building is for sale"],
          answer: 0,
          explain: "A red-tag is a failed or stop-work notice requiring correction before proceeding."
        },
        {
          type: "truefalse",
          q: "A Certificate of Occupancy is required before a new building may be legally occupied.",
          answer: true,
          explain: "The CO certifies the building meets code and is safe to occupy for its intended use."
        }
      ]
    },
    {
      id: "l52",
      title: "Construction Scheduling",
      intro: "The critical path and a Gantt chart let the superintendent sequence the work and protect the deadline.",
      questions: [
        {
          type: "mcq",
          q: "What is the longest sequence of dependent tasks that determines the project finish date?",
          choices: ["The critical path", "The float line", "The submittal log", "The punch list"],
          answer: 0,
          explain: "The critical path is the chain of activities with no float; delaying any of them delays the whole job."
        },
        {
          type: "fill",
          q: "The horizontal bar chart that plots tasks against time is called a ____ chart.",
          answer: "gantt",
          accept: ["gantt"],
          explain: "A Gantt chart shows each activity as a bar across a timeline, revealing overlap and sequence."
        },
        {
          type: "truefalse",
          q: "Float, also called slack, is the time an activity can slip without delaying the project.",
          answer: true,
          explain: "Float is the scheduling cushion; critical-path activities have zero float."
        },
        {
          type: "mcq",
          q: "An activity that must finish before another can start is that activity's what?",
          choices: ["Predecessor", "Successor", "Milestone", "Lag"],
          answer: 0,
          explain: "A predecessor comes before; the activity that follows is the successor."
        },
        {
          type: "match",
          q: "Match each scheduling term to its meaning.",
          pairs: [
            ["Milestone", "A key date with zero duration"],
            ["Lag", "Required delay between two tasks"],
            ["Lead", "Overlap letting a task start early"],
            ["Look-ahead", "Short-term schedule of upcoming work"]
          ],
          explain: "Lead and lag adjust task relationships; look-aheads zoom in on the next few weeks."
        },
        {
          type: "mcq",
          q: "Whose job is it to run the daily field operations and keep the schedule on track?",
          choices: ["The superintendent", "The architect", "The bank", "The building inspector"],
          answer: 0,
          explain: "The superintendent, or super, coordinates the trades on site and drives the schedule day to day."
        },
        {
          type: "truefalse",
          q: "CPM stands for the Critical Path Method of scheduling.",
          answer: true,
          explain: "CPM models task durations and dependencies to compute the critical path and finish date."
        },
        {
          type: "order",
          q: "Order these scheduling steps from first to last.",
          items: ["List all activities", "Set durations and dependencies", "Calculate the critical path", "Issue a weekly look-ahead"],
          explain: "You define and sequence activities, compute the critical path, then publish short-term look-aheads."
        }
      ]
    },
    {
      id: "l53",
      title: "Submittals, RFIs & Change Orders",
      intro: "Project paperwork keeps the design intent, the field and the money in sync.",
      questions: [
        {
          type: "mcq",
          q: "What document does a contractor send to the design team to confirm a product meets the spec before ordering?",
          choices: ["A submittal", "A red-tag", "A milestone", "A toolbox talk"],
          answer: 0,
          explain: "A submittal (shop drawings, product data or samples) is reviewed and approved before fabrication or order."
        },
        {
          type: "fill",
          q: "A written question from the contractor to the architect seeking clarification is an ____.",
          answer: "rfi",
          accept: ["rfi", "request for information"],
          explain: "An RFI, Request for Information, documents a question and its formal answer."
        },
        {
          type: "truefalse",
          q: "A change order modifies the contract scope, price or schedule.",
          answer: true,
          explain: "A change order is a signed amendment adjusting cost, time or work from the original contract."
        },
        {
          type: "mcq",
          q: "What is a fabricator-produced drawing showing exactly how a component will be built and installed?",
          choices: ["Shop drawing", "As-built", "Plat", "Punch list"],
          answer: 0,
          explain: "Shop drawings are detailed submittals from the supplier showing the actual product to be made."
        },
        {
          type: "match",
          q: "Match each document to its purpose.",
          pairs: [
            ["Schedule of values", "Breakdown of contract cost by item"],
            ["Pay application", "Monthly request for payment of work done"],
            ["Product data", "Manufacturer specs submitted for review"],
            ["Punch list", "Remaining items to finish or fix"]
          ],
          explain: "These documents track scope, completion and money flowing through the project."
        },
        {
          type: "order",
          q: "Order the typical submittal workflow.",
          items: ["Contractor prepares the submittal", "Submittal sent to architect", "Architect reviews and stamps", "Contractor orders the product"],
          explain: "Nothing is fabricated until the submittal is reviewed and returned approved."
        },
        {
          type: "mcq",
          q: "The contractor's monthly billing tied to the schedule of values is called the what?",
          choices: ["Pay application", "Bid bond", "RFI log", "Lien waiver only"],
          answer: 0,
          explain: "The pay application requests payment for the percentage of each line item completed that period."
        },
        {
          type: "truefalse",
          q: "A punch list is the list of incomplete or deficient items found near the end of a project.",
          answer: true,
          explain: "The punch list captures minor items to correct before final acceptance and closeout."
        }
      ]
    },
    {
      id: "l54",
      title: "Safety & OSHA",
      intro: "OSHA rules and the Focus Four hazards drive every safe jobsite practice.",
      questions: [
        {
          type: "mcq",
          q: "Which federal agency sets and enforces workplace safety standards in U.S. construction?",
          choices: ["OSHA", "FEMA", "EPA", "HUD"],
          answer: 0,
          explain: "OSHA, the Occupational Safety and Health Administration, regulates jobsite safety."
        },
        {
          type: "fill",
          q: "The single deadliest of the Focus Four construction hazards is ____.",
          answer: "falls",
          accept: ["falls", "fall", "falling"],
          explain: "Falls are the leading cause of construction deaths, making fall protection a top priority."
        },
        {
          type: "truefalse",
          q: "PPE stands for personal protective equipment, such as hard hats, glasses and gloves.",
          answer: true,
          explain: "PPE is the gear worn to protect workers when hazards cannot be fully engineered out."
        },
        {
          type: "match",
          q: "Match each Focus Four hazard to an example.",
          pairs: [
            ["Falls", "Worker off an unguarded edge"],
            ["Struck-by", "Hit by a swinging load"],
            ["Caught-in", "Trapped in a trench collapse"],
            ["Electrocution", "Contact with a live wire"]
          ],
          explain: "The Focus Four (or Fatal Four) cause the majority of construction fatalities."
        },
        {
          type: "mcq",
          q: "What is a short, informal pre-shift safety meeting on a specific hazard called?",
          choices: ["Toolbox talk", "Change order", "Pay app", "Punch walk"],
          answer: 0,
          explain: "A toolbox talk is a brief crew safety briefing held before work begins."
        },
        {
          type: "mcq",
          q: "What does JHA stand for in jobsite safety planning?",
          choices: ["Job Hazard Analysis", "Joint Header Assembly", "Job History Audit", "Joist Hanger Allowance"],
          answer: 0,
          explain: "A Job Hazard Analysis breaks a task into steps to identify and control its hazards."
        },
        {
          type: "truefalse",
          q: "OSHA defines a competent person as someone able to identify hazards and authorized to correct them.",
          answer: true,
          explain: "A competent person can spot existing and predictable hazards and has authority to take corrective action."
        },
        {
          type: "order",
          q: "Order a basic daily safety routine on site.",
          items: ["Hold the toolbox talk", "Inspect PPE and equipment", "Perform the work safely", "Report any incidents"],
          explain: "Brief the crew, verify gear, work to the plan, then document and report anything that goes wrong."
        }
      ]
    },
    {
      id: "l55",
      title: "Closeout & Commissioning",
      intro: "The final phase verifies the building works, documents it and hands the keys to the owner.",
      questions: [
        {
          type: "mcq",
          q: "What milestone marks when the owner can occupy and use the project for its intended purpose?",
          choices: ["Substantial completion", "Notice to proceed", "Groundbreaking", "Mobilization"],
          answer: 0,
          explain: "Substantial completion means the work is usable for its intended purpose, even with minor punch items left."
        },
        {
          type: "fill",
          q: "Drawings updated to show how the project was actually built are called ____ drawings.",
          answer: "as-built",
          accept: ["as-built", "as built", "asbuilt", "record"],
          explain: "As-built (record) drawings capture field changes so the owner has an accurate set."
        },
        {
          type: "truefalse",
          q: "Commissioning (Cx) is the process of testing and verifying that building systems perform as designed.",
          answer: true,
          explain: "Commissioning checks HVAC, electrical and controls against the design intent before handover."
        },
        {
          type: "mcq",
          q: "Which manuals tell the owner how to operate and maintain the installed equipment?",
          choices: ["O&M manuals", "Bid documents", "Geotech reports", "Soils reports"],
          answer: 0,
          explain: "O&M (Operations and Maintenance) manuals collect equipment data, warranties and service instructions."
        },
        {
          type: "match",
          q: "Match each closeout item to its meaning.",
          pairs: [
            ["Punch list", "Final items to fix before acceptance"],
            ["Warranty", "Promise to repair defects for a period"],
            ["As-builts", "Record of how it was actually built"],
            ["Cx", "Commissioning of building systems"]
          ],
          explain: "Closeout bundles the punch list, warranties, record drawings and commissioning results."
        },
        {
          type: "order",
          q: "Order the closeout sequence from first to last.",
          items: ["Reach substantial completion", "Complete the punch list", "Commission systems and collect O&M docs", "Final handover and CO"],
          explain: "After substantial completion the punch is cleared, systems are commissioned, then the owner takes over."
        },
        {
          type: "mcq",
          q: "What does LEED certify in green building?",
          choices: ["A building's environmental and energy performance", "The contractor's bonding capacity", "The soil bearing capacity", "The paint color palette"],
          answer: 0,
          explain: "LEED (Leadership in Energy and Environmental Design) rates sustainability and energy efficiency."
        },
        {
          type: "truefalse",
          q: "A warranty obligates the contractor to correct covered defects for a defined period after completion.",
          answer: true,
          explain: "Warranties give the owner recourse for defects, commonly for one year or longer on specific systems."
        }
      ]
    }
  ]
});
