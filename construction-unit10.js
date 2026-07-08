window.ACADEMY.addUnit("construction", {
  id: "unit-10",
  title: "MEP Systems",
  color: "#2d98da",
  icon: "⚙️",
  description: "The building's working systems: HVAC, plumbing supply and drainage, electrical power and devices, plus MEP coordination and commissioning.",
  lessons: [
    {
      id: "l113",
      title: "MEP Overview",
      intro: "MEP covers the mechanical, electrical and plumbing systems that make a building habitable and operational.",
      questions: [
        {
          type: "mcq",
          q: "In MEP, what do the letters M, E and P stand for?",
          choices: ["Mechanical, Electrical, Plumbing", "Masonry, Electrical, Painting", "Mechanical, Engineering, Piping", "Metal, Electrical, Precast"],
          answer: 0,
          explain: "MEP groups the mechanical (HVAC), electrical (power and lighting) and plumbing (water and drainage) trades."
        },
        {
          type: "mcq",
          q: "What does the term rough-in refer to on an MEP project?",
          choices: ["Installing pipe, duct, conduit and boxes before walls and ceilings are closed", "The final connection of fixtures and trim", "The demolition of existing systems", "Painting the mechanical room"],
          answer: 0,
          explain: "Rough-in is the concealed work installed in the structure before drywall; trim-out is the visible finish work that follows."
        },
        {
          type: "mcq",
          q: "Why do MEP systems require especially heavy coordination during design and construction?",
          choices: ["Many systems compete for the same limited space above ceilings and in chases", "They all use the same electrical voltage", "They are installed by a single trade", "They never cross structural members"],
          answer: 0,
          explain: "Duct, pipe, conduit, sprinkler and structure all share tight plenum space, so clash-free routing must be coordinated."
        },
        {
          type: "fill",
          q: "The final phase where fixtures, devices and equipment are connected and made operational is called trim-____.",
          answer: "out",
          accept: ["out", "trim-out", "trimout"],
          explain: "Trim-out (or finish) happens after finishes are in, installing receptacles, faucets, diffusers and similar visible items."
        },
        {
          type: "truefalse",
          q: "Commercial MEP systems are generally larger, more centralized and more code-intensive than residential systems.",
          answer: true,
          explain: "Commercial buildings use central plants, three-phase power and engineered systems, while homes use small packaged equipment."
        },
        {
          type: "truefalse",
          q: "The mechanical M in MEP primarily refers to the HVAC heating, ventilation and air-conditioning systems.",
          answer: true,
          explain: "Mechanical chiefly means HVAC, though it can also include items like fuel piping and some specialty mechanical equipment."
        },
        {
          type: "match",
          q: "Match each MEP discipline to the professional who typically engineers it.",
          pairs: [
            ["Mechanical", "Mechanical engineer (HVAC)"],
            ["Electrical", "Electrical engineer"],
            ["Plumbing", "Plumbing engineer"],
            ["Fire protection", "Fire protection engineer"]
          ],
          explain: "MEP design is split among specialized engineers, often working under one MEP or building-services firm."
        },
        {
          type: "order",
          q: "Order these MEP install phases from earliest to latest in construction.",
          items: ["Underground rough-in", "Overhead rough-in", "Insulation and cover", "Trim-out and devices", "Test and commissioning"],
          explain: "Concealed work goes in first, the building is closed up, and finally fixtures are trimmed out and systems are tested."
        }
      ]
    },
    {
      id: "l114",
      title: "HVAC: Heating & Cooling",
      intro: "HVAC heating and cooling equipment moves thermal energy into or out of a building using combustion or refrigeration.",
      questions: [
        {
          type: "mcq",
          q: "Which piece of equipment heats water and circulates it to radiators, coils or radiant loops?",
          choices: ["Boiler", "Chiller", "Air handler", "Cooling tower"],
          answer: 0,
          explain: "A boiler heats water or makes steam for hydronic heating; a furnace by contrast heats air directly."
        },
        {
          type: "mcq",
          q: "What does a chiller produce for a commercial cooling system?",
          choices: ["Chilled water sent to cooling coils", "Hot air for the ducts", "Domestic hot water for fixtures", "Compressed natural gas"],
          answer: 0,
          explain: "A chiller removes heat from water; that chilled water is pumped to air-handler coils to cool the supply air."
        },
        {
          type: "mcq",
          q: "A packaged rooftop unit (RTU) is best described as which of the following?",
          choices: ["A self-contained HVAC unit with heating and cooling in one cabinet on the roof", "A water-only heating boiler", "A standby electrical generator", "A plumbing booster pump"],
          answer: 0,
          explain: "An RTU packages compressor, coils, fan and often gas heat in one rooftop cabinet ducted into the space below."
        },
        {
          type: "mcq",
          q: "How does a heat pump differ from a basic air conditioner?",
          choices: ["It can reverse its refrigerant flow to provide heating as well as cooling", "It burns fuel oil for heat", "It only works below freezing", "It uses no compressor"],
          answer: 0,
          explain: "A reversing valve lets a heat pump move heat either direction, so the same unit both heats and cools."
        },
        {
          type: "fill",
          q: "In the refrigeration cycle the ____ raises refrigerant pressure and temperature before the condenser.",
          answer: "compressor",
          accept: ["compressor"],
          explain: "The compressor pressurizes refrigerant vapor so it can reject heat at the condenser, the heart of the vapor-compression cycle."
        },
        {
          type: "truefalse",
          q: "One ton of cooling equals 12,000 BTU per hour.",
          answer: true,
          explain: "A ton of refrigeration is defined as 12,000 BTU/hr, originally the cooling from melting one ton of ice in a day."
        },
        {
          type: "truefalse",
          q: "A split system places the compressor and condenser outdoors and the evaporator coil indoors.",
          answer: true,
          explain: "Split systems separate the condensing unit outside from the indoor coil, linked by refrigerant lines."
        },
        {
          type: "order",
          q: "Order the four main stages of the vapor-compression refrigeration cycle.",
          items: ["Compressor", "Condenser", "Expansion valve", "Evaporator"],
          explain: "Refrigerant is compressed, rejects heat at the condenser, drops pressure at the expansion valve, then absorbs heat in the evaporator."
        },
        {
          type: "match",
          q: "Match each heating or cooling unit to what it does.",
          pairs: [
            ["Furnace", "Heats air directly with fuel or electricity"],
            ["Boiler", "Heats water for hydronic loops"],
            ["Chiller", "Produces chilled water for cooling"],
            ["Heat pump", "Moves heat to heat or cool"]
          ],
          explain: "Each device handles thermal energy differently, by combustion, by water, or by reversible refrigeration."
        }
      ]
    },
    {
      id: "l115",
      title: "HVAC: Air Distribution",
      intro: "Air distribution moves conditioned air from the air handler through ductwork to the spaces and back again.",
      questions: [
        {
          type: "mcq",
          q: "What is the primary job of an air handling unit (AHU)?",
          choices: ["Filter, condition and blow air into the duct system", "Generate electricity for the building", "Pump domestic water to fixtures", "Store rainwater for reuse"],
          answer: 0,
          explain: "An AHU contains the fan, coils and filters that condition air and push it through supply ductwork."
        },
        {
          type: "mcq",
          q: "What is the difference between supply air and return air?",
          choices: ["Supply air is delivered to the space; return air is drawn back to the AHU", "Supply air is outdoor only; return air is exhaust only", "They are the same thing", "Supply air is always unconditioned"],
          answer: 0,
          explain: "Supply ducts deliver conditioned air to rooms, and return ducts bring room air back to be reconditioned."
        },
        {
          type: "mcq",
          q: "What does a VAV box do in a variable-air-volume system?",
          choices: ["Modulates the volume of supply air to a zone to hold setpoint", "Generates chilled water", "Boosts water pressure", "Filters the outdoor air intake"],
          answer: 0,
          explain: "A VAV terminal box throttles airflow (and may reheat) so each zone gets only the air it needs at the moment."
        },
        {
          type: "mcq",
          q: "Airflow rate in HVAC ductwork is most commonly measured in which unit?",
          choices: ["CFM (cubic feet per minute)", "PSI (pounds per square inch)", "GPM (gallons per minute)", "kWh (kilowatt-hours)"],
          answer: 0,
          explain: "CFM measures the volume of air moved per minute, the key sizing metric for fans and ducts."
        },
        {
          type: "fill",
          q: "A large air cavity or chamber that distributes or collects air, such as above a drop ceiling, is called a ____.",
          answer: "plenum",
          accept: ["plenum", "plenum space"],
          explain: "A plenum is a pressurized cavity used to route supply or return air, common in ceiling return systems."
        },
        {
          type: "truefalse",
          q: "Air balancing adjusts dampers and devices so each zone receives its designed airflow.",
          answer: true,
          explain: "A balancing technician measures and trims airflow at each outlet so the building matches the design CFM distribution."
        },
        {
          type: "truefalse",
          q: "A diffuser is a supply outlet designed to spread and mix conditioned air into a room.",
          answer: true,
          explain: "Diffusers throw and mix supply air, while a grille typically covers a return or simple opening."
        },
        {
          type: "match",
          q: "Match each air terminal to its usual role.",
          pairs: [
            ["Diffuser", "Spreads supply air into the room"],
            ["Register", "Outlet with an adjustable damper"],
            ["Grille", "Return or exhaust opening, no damper"],
            ["VAV box", "Controls airflow to a zone"]
          ],
          explain: "Terminals differ by whether they supply or return air and whether they include a volume-control damper."
        },
        {
          type: "order",
          q: "Order the path of conditioned air from the AHU back to the unit.",
          items: ["Air handler fan", "Supply duct", "Diffuser into room", "Return grille", "Return duct to AHU"],
          explain: "Air is pushed out through supply ductwork and diffusers, then pulled back through return grilles and ducts."
        }
      ]
    },
    {
      id: "l116",
      title: "Plumbing: Water Supply",
      intro: "The water supply system brings pressurized potable water into a building and distributes hot and cold to fixtures.",
      questions: [
        {
          type: "mcq",
          q: "What is the water service in a plumbing system?",
          choices: ["The pipe bringing potable water from the main into the building", "The drain leaving the building", "The vent through the roof", "The electrical feed to the pump"],
          answer: 0,
          explain: "The water service line connects the public or private main to the building's water meter and distribution piping."
        },
        {
          type: "mcq",
          q: "Which pair are common modern water supply pipe materials inside buildings?",
          choices: ["PEX and copper", "Cast iron and clay", "Galvanized steel and lead", "PVC and concrete"],
          answer: 0,
          explain: "PEX (flexible cross-linked polyethylene) and copper dominate pressurized supply piping; cast iron and PVC are for drainage."
        },
        {
          type: "mcq",
          q: "Why is backflow prevention required on a potable water system?",
          choices: ["To stop contaminated water from reversing into the clean supply", "To raise the water temperature", "To reduce the water bill", "To soften the water"],
          answer: 0,
          explain: "Backflow preventers and air gaps keep cross-connected or contaminated water from siphoning back into potable lines."
        },
        {
          type: "mcq",
          q: "What does a water heater provide to the distribution system?",
          choices: ["Hot water on a separate set of distribution lines", "Cold water pressure boosting", "Drainage venting", "Electrical grounding"],
          answer: 0,
          explain: "A storage or tankless water heater feeds the hot-water side, run in parallel with the cold-water distribution."
        },
        {
          type: "fill",
          q: "Residential and commercial water supply pressure is typically measured in ____, pounds per square inch.",
          answer: "psi",
          accept: ["psi", "pounds per square inch", "pressure"],
          explain: "Supply pressure is measured in psi; codes commonly target roughly 40 to 80 psi at fixtures."
        },
        {
          type: "truefalse",
          q: "Excessively high static water pressure can require a pressure-reducing valve at the service entrance.",
          answer: true,
          explain: "When street pressure exceeds about 80 psi a PRV is installed to protect fixtures and reduce noise and waste."
        },
        {
          type: "truefalse",
          q: "Cold and hot water are distributed on the same single pipe to each fixture.",
          answer: false,
          explain: "Fixtures needing hot water receive two lines, a cold supply and a separate hot supply from the water heater."
        },
        {
          type: "match",
          q: "Match each water-supply component to its function.",
          pairs: [
            ["Water meter", "Measures water entering the building"],
            ["PRV", "Reduces high incoming pressure"],
            ["Backflow preventer", "Stops reverse contamination"],
            ["Water heater", "Supplies the hot-water side"]
          ],
          explain: "Each device conditions or protects the potable supply between the main and the fixtures."
        },
        {
          type: "order",
          q: "Order the path of potable water from the street to a faucet.",
          items: ["City main", "Water service line", "Water meter", "Distribution piping", "Fixture supply"],
          explain: "Water flows from the main through the service and meter, then branches through distribution to each fixture."
        }
      ]
    },
    {
      id: "l117",
      title: "Plumbing: Drain-Waste-Vent",
      intro: "The DWV system carries wastewater away by gravity while venting keeps drains flowing and trap seals intact.",
      questions: [
        {
          type: "mcq",
          q: "What do the letters DWV stand for in plumbing?",
          choices: ["Drain, Waste, Vent", "Domestic Water Valve", "Down, Waste, Vacuum", "Dry, Wet, Vertical"],
          answer: 0,
          explain: "DWV covers the drain and waste piping that removes sewage plus the vent piping that lets the system breathe."
        },
        {
          type: "mcq",
          q: "What is the main purpose of a P-trap under a fixture?",
          choices: ["Hold a water seal that blocks sewer gas from entering the room", "Increase water pressure", "Filter solids from the supply", "Heat the drain water"],
          answer: 0,
          explain: "The curved trap retains water that seals against sewer gases while still letting waste pass through."
        },
        {
          type: "mcq",
          q: "Why must drain lines be installed with proper slope or fall?",
          choices: ["So gravity carries solids and liquids without clogging", "So water flows uphill", "To increase supply pressure", "To vent the roof"],
          answer: 0,
          explain: "A typical fall of about a quarter inch per foot keeps flow fast enough to carry solids but not so fast it leaves them behind."
        },
        {
          type: "mcq",
          q: "What is the difference between sanitary and storm drainage?",
          choices: ["Sanitary carries sewage; storm carries rainwater runoff", "They are identical systems", "Sanitary carries rain; storm carries sewage", "Storm only carries hot water"],
          answer: 0,
          explain: "Sanitary systems handle building sewage to treatment, while storm systems route rain runoff, and codes keep them separate."
        },
        {
          type: "fill",
          q: "A vertical drain pipe that collects waste from multiple floors is called a ____.",
          answer: "stack",
          accept: ["stack", "soil stack", "waste stack"],
          explain: "A soil or waste stack is the main vertical drain that branches connect into on each floor."
        },
        {
          type: "truefalse",
          q: "Venting is needed so that draining water does not siphon the water out of fixture traps.",
          answer: true,
          explain: "Vents admit air to equalize pressure, preventing siphonage that would empty trap seals and let sewer gas in."
        },
        {
          type: "truefalse",
          q: "A cleanout provides an access point to clear blockages in a drain line.",
          answer: true,
          explain: "Cleanouts are capped fittings placed at intervals and turns so a drain snake can reach and clear clogs."
        },
        {
          type: "match",
          q: "Match each DWV component to its role.",
          pairs: [
            ["Trap", "Holds water seal against sewer gas"],
            ["Vent", "Admits air to balance pressure"],
            ["Stack", "Vertical drain serving floors"],
            ["Cleanout", "Access to clear blockages"]
          ],
          explain: "Drains carry waste, traps seal, vents balance pressure, and cleanouts give maintenance access."
        },
        {
          type: "order",
          q: "Order the path of wastewater from a sink to the public sewer.",
          items: ["Fixture drain", "P-trap", "Branch drain", "Soil stack", "Building sewer"],
          explain: "Waste leaves the fixture through the trap into branch piping, drops down the stack, and exits via the building sewer."
        }
      ]
    },
    {
      id: "l118",
      title: "Electrical: Power Distribution",
      intro: "Power distribution takes utility power and steps it down and divides it into circuits throughout a building.",
      questions: [
        {
          type: "mcq",
          q: "What does a transformer do in a building's electrical service?",
          choices: ["Steps voltage up or down between systems", "Stores electricity in batteries", "Generates power from fuel", "Measures energy usage for billing"],
          answer: 0,
          explain: "Transformers change voltage levels, for example stepping utility medium voltage down to usable building voltage."
        },
        {
          type: "mcq",
          q: "What is the role of a panelboard or load center?",
          choices: ["Distributes power to branch circuits and houses their breakers", "Generates standby power", "Steps down medium voltage", "Meters the utility feed"],
          answer: 0,
          explain: "A panelboard divides incoming power into individual branch circuits, each protected by an overcurrent device."
        },
        {
          type: "mcq",
          q: "What is the difference between a feeder and a branch circuit?",
          choices: ["A feeder supplies a panel; a branch circuit serves the final loads", "A feeder is low voltage; a branch is high voltage", "They are the same thing", "A branch circuit feeds the utility"],
          answer: 0,
          explain: "Feeders carry power between distribution equipment, while branch circuits run from the last panel to outlets and devices."
        },
        {
          type: "mcq",
          q: "What does a circuit breaker primarily protect against?",
          choices: ["Overcurrent from overloads and short circuits", "Low water pressure", "Static electricity only", "Voltage that is too low"],
          answer: 0,
          explain: "A breaker trips to interrupt current when an overload or fault would otherwise overheat conductors."
        },
        {
          type: "fill",
          q: "Large commercial buildings are typically served by three-____ power for efficient motor and equipment loads.",
          answer: "phase",
          accept: ["phase", "three-phase", "3-phase"],
          explain: "Three-phase power delivers steadier, more efficient energy for large motors and equipment than single-phase."
        },
        {
          type: "truefalse",
          q: "Switchgear is heavy-duty equipment that switches, protects and controls electrical power at higher capacities.",
          answer: true,
          explain: "Switchgear houses large breakers and protective devices to control and isolate sizable portions of the distribution system."
        },
        {
          type: "truefalse",
          q: "Most North American homes use single-phase service while large commercial buildings often use three-phase.",
          answer: true,
          explain: "Single-phase suits residential loads, but three-phase is standard where motors and heavy equipment dominate."
        },
        {
          type: "match",
          q: "Match each electrical distribution component to its function.",
          pairs: [
            ["Transformer", "Changes voltage level"],
            ["Switchgear", "Switches and protects large feeds"],
            ["Panelboard", "Splits power into branch circuits"],
            ["Breaker", "Trips on overcurrent"]
          ],
          explain: "Power steps down, is controlled by switchgear, divided at panels, and protected by breakers."
        },
        {
          type: "order",
          q: "Order the path of electricity from the utility to a wall outlet.",
          items: ["Utility service", "Transformer", "Switchgear or main", "Panelboard", "Branch circuit to outlet"],
          explain: "Utility power is transformed, controlled at the main, divided at a panel, and carried by a branch circuit to the device."
        }
      ]
    },
    {
      id: "l119",
      title: "Electrical: Devices & Systems",
      intro: "Devices and systems wiring includes the conduit, conductors, receptacles, protection and low-voltage systems users touch.",
      questions: [
        {
          type: "mcq",
          q: "What is the difference between conduit and conductors?",
          choices: ["Conduit is the protective raceway; conductors are the wires inside it", "Conduit is the wire; conductors are the pipe", "They are the same thing", "Conduit carries water"],
          answer: 0,
          explain: "Conduit is the tube or raceway that protects and routes the conductors, the metal wires that actually carry current."
        },
        {
          type: "mcq",
          q: "Where is GFCI protection most required by code?",
          choices: ["Near water, such as bathrooms, kitchens and outdoors", "Only in attics", "Only on lighting circuits", "Only in mechanical rooms"],
          answer: 0,
          explain: "A GFCI trips on small ground-fault current to prevent shock, so it is required at wet and damp locations."
        },
        {
          type: "mcq",
          q: "What hazard does an AFCI breaker specifically guard against?",
          choices: ["Arcing faults that can start fires", "Water leaks", "Low voltage", "High water pressure"],
          answer: 0,
          explain: "An arc-fault circuit interrupter detects dangerous arcing in wiring and trips to reduce electrical fire risk."
        },
        {
          type: "mcq",
          q: "Why are grounding and bonding important in an electrical system?",
          choices: ["They provide a safe path for fault current and a common reference", "They increase the voltage", "They reduce the lighting level", "They heat the conduit"],
          answer: 0,
          explain: "Grounding ties the system to earth and bonding ties metal parts together so faults trip protection safely."
        },
        {
          type: "fill",
          q: "A device you plug a cord into, also called an outlet, is a ____.",
          answer: "receptacle",
          accept: ["receptacle", "outlet"],
          explain: "Receptacle is the formal term for the outlet that accepts a plug to power equipment."
        },
        {
          type: "truefalse",
          q: "Low-voltage systems such as data, fire alarm and access control are often called systems or structured cabling.",
          answer: true,
          explain: "Low-voltage or systems wiring covers data, telecom, fire alarm, security and controls, distinct from line-voltage power."
        },
        {
          type: "truefalse",
          q: "Bonding connects metallic parts together so they stay at the same electrical potential.",
          answer: true,
          explain: "Bonding ties conductive equipment and enclosures together, reducing shock risk and helping fault current return."
        },
        {
          type: "match",
          q: "Match each electrical item to what it does.",
          pairs: [
            ["Conduit", "Protects and routes conductors"],
            ["GFCI", "Trips on ground fault near water"],
            ["AFCI", "Trips on dangerous arcing"],
            ["Grounding", "Safe path for fault current"]
          ],
          explain: "Raceways carry conductors while protective devices and grounding keep people and wiring safe."
        },
        {
          type: "order",
          q: "Order these rough-to-finish electrical steps for a branch circuit.",
          items: ["Set boxes", "Run conduit and pull conductors", "Make up connections", "Install device and plate", "Test circuit"],
          explain: "Boxes and raceway go in first, conductors are pulled and connected, then devices are trimmed and the circuit is tested."
        }
      ]
    },
    {
      id: "l120",
      title: "MEP Coordination & Commissioning",
      intro: "MEP coordination resolves clashes and access, while commissioning proves the installed systems actually perform.",
      questions: [
        {
          type: "mcq",
          q: "What is the main goal of MEP coordination above ceilings and in shafts?",
          choices: ["Route systems clash-free while keeping required clearances", "Choose the paint color", "Pour the foundation", "Size the parking lot"],
          answer: 0,
          explain: "Coordination stacks duct, pipe, conduit and sprinkler in tight space so nothing clashes and access is preserved."
        },
        {
          type: "mcq",
          q: "What is a chase in a building?",
          choices: ["A concealed vertical or horizontal space for routing MEP systems", "A type of breaker", "A rooftop fan", "A water meter"],
          answer: 0,
          explain: "A chase is a dedicated cavity, like a wall pocket or shaft, that hides risers and runs of pipe, duct and conduit."
        },
        {
          type: "mcq",
          q: "What does a building automation system (BAS) do?",
          choices: ["Monitors and controls HVAC and other systems through sensors and controllers", "Generates electricity", "Stores domestic water", "Frames the building structure"],
          answer: 0,
          explain: "A BAS uses controllers and sensors to run HVAC, lighting and equipment efficiently and to alarm on faults."
        },
        {
          type: "mcq",
          q: "Why must equipment access and clearance be planned in MEP layouts?",
          choices: ["So units can be serviced, replaced and code clearances are met", "So they look symmetrical only", "To reduce the electrical bill", "To increase duct pressure"],
          answer: 0,
          explain: "Service access and code clearances let technicians reach filters, coils, valves and panels safely for maintenance."
        },
        {
          type: "fill",
          q: "The process of measuring and adjusting HVAC airflow and water flow to design values is testing, adjusting and ____.",
          answer: "balancing",
          accept: ["balancing", "balance"],
          explain: "TAB stands for testing, adjusting and balancing, confirming each system delivers its designed flow."
        },
        {
          type: "truefalse",
          q: "Commissioning (Cx) verifies that installed systems perform as the owner intended before and after occupancy.",
          answer: true,
          explain: "Commissioning is a quality process of testing and documenting that systems meet the owner's project requirements."
        },
        {
          type: "truefalse",
          q: "Clash detection in a coordinated BIM model can find conflicts between duct, pipe and structure before installation.",
          answer: true,
          explain: "Running clash detection on a federated model catches interferences early, avoiding costly rework in the field."
        },
        {
          type: "match",
          q: "Match each coordination or commissioning term to its meaning.",
          pairs: [
            ["BAS", "Controls and monitors building systems"],
            ["TAB", "Tests, adjusts and balances flow"],
            ["Cx", "Verifies systems meet owner needs"],
            ["Chase", "Concealed route for MEP systems"]
          ],
          explain: "These cover the controls, balancing, verification and routing space that finish out an MEP project."
        },
        {
          type: "order",
          q: "Order these closeout steps for an MEP system.",
          items: ["Coordinate and clash-check model", "Install per coordinated layout", "Test and balance (TAB)", "Commissioning (Cx) verification", "Owner training and handover"],
          explain: "Coordination precedes install, then balancing and commissioning prove performance before the owner takes over."
        }
      ]
    }
  ]
});
