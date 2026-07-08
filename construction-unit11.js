window.ACADEMY.addUnit("construction", {
  id: "unit-11",
  title: "Fire Protection",
  color: "#eb3b5a",
  icon: "🧯",
  description: "Keeping buildings and people safe from fire: sprinklers and standpipes, alarm and detection, passive rated construction, and means of egress.",
  lessons: [
    {
      id: "l121",
      title: "Fire Protection Basics",
      intro: "Active versus passive protection, the fire triangle, and the codes that drive it all.",
      questions: [
        { type: "mcq", q: "Which is an example of ACTIVE fire protection?", choices: ["A 2-hour rated wall", "An automatic sprinkler system", "A fire-rated door", "Firestopping at a pipe penetration"], answer: 1, explain: "Active systems detect or fight fire by doing something, like sprinklers discharging water." },
        { type: "mcq", q: "Which is an example of PASSIVE fire protection?", choices: ["Smoke detector", "Fire pump", "Fire-resistance-rated floor assembly", "Horn/strobe notification"], answer: 2, explain: "Passive protection is built into the construction itself to resist fire and contain it without moving parts." },
        { type: "mcq", q: "The three elements of the fire triangle are heat, fuel, and what?", choices: ["Smoke", "Oxygen", "Pressure", "Carbon"], answer: 1, explain: "Removing heat, fuel, or oxygen extinguishes a fire; the triangle shows all three are required." },
        { type: "truefalse", q: "The primary goal of building fire protection is life safety, with property protection as a second objective.", answer: true, explain: "Codes prioritize getting occupants out alive first, then limiting damage to the building and contents." },
        { type: "fill", q: "In the US, the model building code that governs fire and life safety provisions is the International ____ Code, or IBC.", answer: "building", accept: ["building"], explain: "The IBC sets construction and fire-safety requirements, while NFPA standards provide detailed design rules." },
        { type: "truefalse", q: "NFPA standards such as NFPA 13 and NFPA 72 are referenced by the building code rather than replacing it.", answer: true, explain: "The IBC adopts NFPA standards by reference, so both work together on a project." },
        { type: "match", q: "Match the term to its meaning.", pairs: [["Active", "System that acts during a fire"], ["Passive", "Built-in resistance and containment"], ["IBC", "Model building code"], ["NFPA", "Fire-standards organization"]], explain: "Active and passive strategies plus the IBC and NFPA framework form the foundation of fire protection." },
        { type: "mcq", q: "Which best describes the role of passive fire protection?", choices: ["Suppress flames with water", "Sound an alarm", "Contain fire and slow its spread to allow escape", "Pump water to upper floors"], answer: 2, explain: "Passive assemblies compartmentalize a building, buying time for egress and for the fire service." }
      ]
    },
    {
      id: "l122",
      title: "Fire Sprinkler Systems",
      intro: "Wet, dry, preaction, and deluge systems plus the heads, riser, and FDC.",
      questions: [
        { type: "mcq", q: "A wet pipe sprinkler system contains what in the pipes at all times?", choices: ["Pressurized air", "Water under pressure", "Nitrogen", "Foam concentrate"], answer: 1, explain: "Wet systems keep water in the pipes so heads discharge instantly when activated." },
        { type: "mcq", q: "Why is a DRY pipe system used in an unheated space like a parking garage?", choices: ["It discharges foam", "Water in the pipes would freeze", "It is cheaper to install", "It needs no water supply"], answer: 1, explain: "Dry systems hold pressurized air instead of water so the piping will not freeze in cold areas." },
        { type: "mcq", q: "Which system requires a separate detection event before water enters the piping, protecting against accidental discharge?", choices: ["Wet pipe", "Preaction", "Standpipe", "Gravity tank"], answer: 1, explain: "Preaction systems are common in data centers and museums where an accidental leak would be costly." },
        { type: "truefalse", q: "In a deluge system all sprinkler heads are open and water floods the entire area at once when the system trips.", answer: true, explain: "Deluge systems use open heads for high-hazard areas like aircraft hangars where fire spreads rapidly." },
        { type: "fill", q: "The vertical assembly of valves, gauges, and the alarm device where the sprinkler system connects to the water supply is called the ____.", answer: "riser", accept: ["riser", "sprinkler riser"], explain: "The riser is the control center of the system, housing the main control valve and alarm check valve." },
        { type: "fill", q: "Firefighters pump supplemental water into the sprinkler or standpipe system through the FDC, which stands for fire department ____.", answer: "connection", accept: ["connection"], explain: "The FDC lets the fire department boost pressure and flow into the building system from their apparatus." },
        { type: "match", q: "Match each sprinkler system to where it fits best.", pairs: [["Wet pipe", "Heated office building"], ["Dry pipe", "Unheated freezer or garage"], ["Preaction", "Data center"], ["Deluge", "Aircraft hangar"]], explain: "System selection depends on freezing risk, water-damage sensitivity, and fire-growth speed." },
        { type: "order", q: "Order what happens in a wet pipe system when fire occurs.", items: ["Heat rises to the sprinkler head", "Fusible link or glass bulb breaks", "Water discharges from that head", "Flow triggers the waterflow alarm"], explain: "Only the individual heads exposed to heat open, which limits water damage to the fire area." },
        { type: "truefalse", q: "A common myth is that all sprinkler heads in a building open at once during a fire; in a wet pipe system only heated heads activate.", answer: true, explain: "Movies exaggerate this; in standard wet systems each head opens independently based on local heat." }
      ]
    },
    {
      id: "l123",
      title: "Standpipes & Water Supply",
      intro: "Standpipe classes, the fire pump, hydrants, and hose valves in stairwells.",
      questions: [
        { type: "mcq", q: "A Class I standpipe provides 2.5 inch hose connections intended for use by whom?", choices: ["Trained occupants", "The fire department", "Building maintenance", "Sprinkler contractors"], answer: 1, explain: "Class I systems serve the fire service with large outlets for high-flow firefighting." },
        { type: "mcq", q: "A Class II standpipe provides 1.5 inch hose stations intended primarily for use by whom?", choices: ["The fire department only", "Occupants or building staff for first-aid firefighting", "Utility crews", "Nobody, it is decorative"], answer: 1, explain: "Class II hose stations let trained occupants attack a small fire before the fire department arrives." },
        { type: "fill", q: "A Class ____ standpipe combines both Class I and Class II features, serving firefighters and occupants.", answer: "III", accept: ["iii", "3", "three"], explain: "Class III systems carry both 2.5 inch and 1.5 inch connections for the broadest coverage." },
        { type: "truefalse", q: "A fire pump is used to boost water pressure when the public supply cannot meet the demand of upper floors.", answer: true, explain: "Tall buildings rely on fire pumps to overcome the pressure loss from elevation and friction." },
        { type: "mcq", q: "Where are standpipe hose valve connections most commonly located in a high-rise?", choices: ["On the roof only", "In exit stairwells at each floor landing", "In every office", "In the parking garage only"], answer: 1, explain: "Placing valves in protected stairwells lets firefighters connect hose on the fire floor safely." },
        { type: "mcq", q: "What is the purpose of a fire hydrant?", choices: ["Sound an alarm", "Provide an outdoor connection to the water main for fire apparatus", "Pressurize the elevator", "Detect smoke"], answer: 1, explain: "Hydrants give engines a reliable supply from the municipal main near the building." },
        { type: "match", q: "Match each standpipe class to its hose size or user.", pairs: [["Class I", "2.5 in, fire department"], ["Class II", "1.5 in, occupants"], ["Class III", "Both sizes, both users"]], explain: "Standpipe class is defined by outlet size and who is expected to operate it." },
        { type: "order", q: "Order the water path from city to a high-rise hose valve.", items: ["City water main", "Hydrant or service connection", "Fire pump boosts pressure", "Standpipe riser", "Hose valve at stair landing"], explain: "Understanding this path explains why fire pumps and FDCs exist in tall buildings." }
      ]
    },
    {
      id: "l124",
      title: "Fire Alarm & Detection",
      intro: "Detectors, pull stations, notification appliances, the FACP, and monitoring.",
      questions: [
        { type: "mcq", q: "A smoke detector is generally preferred over a heat detector in which space?", choices: ["A boiler room with normal smoke from operation", "A sleeping area or corridor", "A commercial kitchen over the range", "A dusty workshop"], answer: 1, explain: "Smoke detectors give the earliest warning where people sleep or travel, before heat builds." },
        { type: "mcq", q: "A heat detector is chosen instead of a smoke detector in which environment?", choices: ["A hotel hallway", "A clean office", "A kitchen or garage where smoke or fumes are normal", "A library"], answer: 2, explain: "Heat detectors avoid nuisance alarms where smoke, steam, or dust is part of normal use." },
        { type: "fill", q: "The brain of a fire alarm system that monitors devices and controls outputs is the fire alarm control panel, abbreviated ____.", answer: "FACP", accept: ["facp", "fire alarm control panel"], explain: "The FACP receives inputs from detectors and pull stations and activates the notification appliances." },
        { type: "truefalse", q: "A manual pull station lets an occupant initiate the fire alarm by hand without waiting for a detector.", answer: true, explain: "Pull stations are placed near exits so a person who sees fire can alert everyone immediately." },
        { type: "mcq", q: "Horn/strobe devices are examples of what category of fire alarm equipment?", choices: ["Initiating devices", "Notification appliances", "Control valves", "Suppression agents"], answer: 1, explain: "Notification appliances alert occupants with sound and light; the strobe serves the hearing impaired." },
        { type: "mcq", q: "What is the key advantage of an ADDRESSABLE fire alarm system over a conventional one?", choices: ["It needs no power", "Each device reports its exact location to the panel", "It uses no wiring", "It cannot have false alarms"], answer: 1, explain: "Addressable systems pinpoint the specific device in alarm, speeding response in large buildings." },
        { type: "truefalse", q: "Central-station monitoring means an off-site service is notified automatically so they can dispatch the fire department.", answer: true, explain: "Monitoring ensures help is called even when the building is unoccupied or no one notices the alarm." },
        { type: "match", q: "Match each device to its role.", pairs: [["Smoke detector", "Senses combustion particles"], ["Pull station", "Manual alarm activation"], ["Horn/strobe", "Notifies occupants"], ["FACP", "Controls the system"]], explain: "Initiating devices detect, the panel decides, and notification appliances warn occupants." },
        { type: "order", q: "Order the fire alarm sequence of events.", items: ["Detector or pull station activates", "Signal reaches the FACP", "FACP sounds notification appliances", "Central station is notified", "Fire department is dispatched"], explain: "This chain turns one sensor or person into a building-wide warning and a dispatched response." }
      ]
    },
    {
      id: "l125",
      title: "Passive Fire Protection",
      intro: "Rated assemblies, fire walls, barriers, partitions, firestopping, dampers, and fire doors.",
      questions: [
        { type: "mcq", q: "What does a 2-hour fire-resistance rating on a wall mean?", choices: ["It self-extinguishes in 2 hours", "It resists fire passage for 2 hours under a standard test", "It can be on fire for only 2 hours", "It needs inspection every 2 hours"], answer: 1, explain: "Ratings come from standardized furnace tests measuring how long the assembly contains fire." },
        { type: "mcq", q: "Which assembly is structurally independent and designed to stop fire spread between buildings or large areas, even if one side collapses?", choices: ["Fire partition", "Fire barrier", "Fire wall", "Smoke curtain"], answer: 2, explain: "A fire wall has the highest performance and structural stability so collapse on one side does not breach it." },
        { type: "fill", q: "Sealing the gaps where pipes, cables, or ducts pass through a rated wall to maintain its rating is called ____.", answer: "firestopping", accept: ["firestopping", "fire stopping", "firestop"], explain: "An unsealed penetration would let fire and smoke bypass the wall, defeating its rating." },
        { type: "truefalse", q: "A fire damper closes automatically in a duct to block fire from spreading through a rated wall or floor.", answer: true, explain: "Dampers restore the integrity of a rated assembly where ductwork has to pass through it." },
        { type: "mcq", q: "What is the main difference between a fire damper and a smoke damper?", choices: ["They are identical", "A fire damper responds to heat; a smoke damper responds to smoke detection", "A smoke damper only works at night", "A fire damper is decorative"], answer: 1, explain: "Combination fire/smoke dampers respond to both, closing on heat via a fusible link or on a smoke signal." },
        { type: "mcq", q: "Fire-rated doors are an example of which category?", choices: ["Notification appliances", "Opening protectives", "Suppression agents", "Initiating devices"], answer: 1, explain: "Opening protectives like rated doors and windows preserve a wall rating where an opening is needed." },
        { type: "match", q: "Match each rated element to its general purpose.", pairs: [["Fire wall", "Separates buildings or areas, structurally stable"], ["Fire barrier", "Encloses shafts, exits, or occupancy separations"], ["Fire partition", "Lighter separation, such as corridor or tenant walls"], ["Firestop", "Seals penetrations through rated assemblies"]], explain: "Fire walls, barriers, and partitions have decreasing performance for different separation jobs." },
        { type: "truefalse", q: "A fire-rated door is allowed to be propped open with a wood wedge as long as someone is nearby.", answer: false, explain: "Rated doors must be self-closing and kept closed or held by listed devices that release on alarm." },
        { type: "order", q: "Order the steps to keep a rated wall effective at a new conduit penetration.", items: ["Build the rated wall", "Run conduit through a sleeve", "Install listed firestop sealant around the conduit", "Inspect that the rating is maintained"], explain: "A penetration is only acceptable when sealed with a tested firestop system matching the wall rating." }
      ]
    },
    {
      id: "l126",
      title: "Special Suppression",
      intro: "Clean agent, CO2, wet-chemical hood, and foam systems and where each belongs.",
      questions: [
        { type: "mcq", q: "Why are clean agent systems preferred for protecting data centers and server rooms?", choices: ["They are the cheapest option", "They suppress fire without leaving residue or damaging electronics", "They use ordinary tap water", "They require no detection"], answer: 1, explain: "Clean agents like FM-200 or inert gases extinguish fire while leaving sensitive equipment intact." },
        { type: "mcq", q: "A wet-chemical system is the required type of suppression for which hazard?", choices: ["Electrical switchgear", "A commercial kitchen cooking hood", "A paint storage room", "A computer server rack"], answer: 1, explain: "Wet chemical saponifies cooking grease, smothering hot oil fires under kitchen exhaust hoods." },
        { type: "truefalse", q: "CO2 suppression systems are hazardous to people because they work by displacing oxygen in the protected space.", answer: true, explain: "CO2 floods a space and can asphyxiate occupants, so it is used in normally unoccupied areas with warnings." },
        { type: "fill", q: "For flammable liquid fires such as fuel storage, a ____ blanket is spread to smother the surface and block vapors.", answer: "foam", accept: ["foam"], explain: "Foam forms a film over flammable liquids, separating the fuel from oxygen and cooling it." },
        { type: "mcq", q: "Which system would best protect an aircraft hangar or a fuel loading rack?", choices: ["Wet-chemical hood system", "Foam-water suppression", "Clean agent only", "Heat detection only"], answer: 1, explain: "Foam handles large flammable-liquid hazards that plain water cannot control effectively." },
        { type: "match", q: "Match each suppression type to its typical hazard.", pairs: [["Clean agent", "Data center"], ["Wet chemical", "Commercial kitchen hood"], ["CO2", "Unoccupied equipment space"], ["Foam", "Flammable liquid or fuel"]], explain: "Agent choice depends on the fuel, the equipment value, and whether people occupy the space." },
        { type: "truefalse", q: "Clean agent systems are designed to leave no residue, which is why they suit telecom and electronics rooms.", answer: true, explain: "Unlike water or dry chemical, clean agents evaporate and do not foul or short out equipment." },
        { type: "mcq", q: "What is a key safety feature required with CO2 total-flooding systems?", choices: ["A second water supply", "Pre-discharge alarms and time delay to let people exit", "A larger riser", "Smoke-only detectors"], answer: 1, explain: "Because CO2 can asphyxiate, codes require warning alarms and a delay so occupants can evacuate first." }
      ]
    },
    {
      id: "l127",
      title: "Egress & Life Safety",
      intro: "The three parts of egress, occupant load, travel distance, signs, and rated stairs.",
      questions: [
        { type: "mcq", q: "The means of egress is divided into three parts: exit access, the exit, and what?", choices: ["Exit discharge", "Exit corridor", "Exit lobby", "Exit ramp"], answer: 0, explain: "Exit discharge is the path from the exit to the public way, completing the route to safety." },
        { type: "fill", q: "The number of people a room or building is designed to hold, used to size exits, is called the occupant ____.", answer: "load", accept: ["load"], explain: "Occupant load drives how many exits and how much exit width a space must provide." },
        { type: "mcq", q: "Travel distance in egress design refers to what?", choices: ["The width of a corridor", "The maximum distance from any point to an exit", "The height of a stair", "The length of a fire hose"], answer: 1, explain: "Codes limit travel distance so occupants can reach an exit before conditions become untenable." },
        { type: "truefalse", q: "Emergency lighting must illuminate the egress path automatically when normal power fails.", answer: true, explain: "Battery or generator backup keeps exit routes visible during a power loss so people can escape." },
        { type: "mcq", q: "An exit enclosure such as an interior exit stairway must be separated from the rest of the building by what?", choices: ["A glass partition", "Fire-resistance-rated construction", "A curtain", "Nothing special"], answer: 1, explain: "Rated stair enclosures protect the escape route from fire and smoke as occupants descend." },
        { type: "mcq", q: "What is the purpose of an illuminated EXIT sign?", choices: ["Decoration", "Mark the path of egress so occupants can find the way out", "Indicate a fire alarm pull", "Show the fire pump location"], answer: 1, explain: "Exit signs guide occupants to and along the egress path, even in smoke or darkness." },
        { type: "match", q: "Match each egress component to its definition.", pairs: [["Exit access", "Path leading to the exit"], ["Exit", "Protected portion, such as a rated stair"], ["Exit discharge", "Path from exit to the public way"]], explain: "The three parts form a continuous, protected route from any occupied point to safety outside." },
        { type: "order", q: "Order the parts of the means of egress an occupant travels through.", items: ["Exit access (corridor)", "Exit (rated stair)", "Exit discharge", "Public way outside"], explain: "Egress flows from the room, through the protected exit, and out to a public way." },
        { type: "truefalse", q: "Two separate exits are required whenever occupant load or travel distance exceeds code limits, so a single blocked path does not trap people.", answer: true, explain: "Remote, redundant exits ensure occupants still have a way out if one route is blocked by fire." }
      ]
    },
    {
      id: "l128",
      title: "Smoke Control & Fireproofing",
      intro: "Stair pressurization, compartmentation, and structural fireproofing with SFRM and intumescent.",
      questions: [
        { type: "mcq", q: "What is the purpose of stair pressurization in a high-rise?", choices: ["Cool the stairs", "Keep smoke out of the exit stair by maintaining higher pressure inside", "Speed up the elevators", "Heat the building"], answer: 1, explain: "Fans hold the stairwell at higher pressure so smoke cannot infiltrate the protected escape route." },
        { type: "mcq", q: "Smoke control systems generally work by doing what with smoke?", choices: ["Igniting it", "Managing its movement through exhaust, pressurization, or containment", "Cooling it to water", "Ignoring it"], answer: 1, explain: "Smoke control keeps tenable conditions on egress paths by exhausting or confining smoke." },
        { type: "fill", q: "Dividing a building into fire-resistant compartments to limit fire and smoke spread is called ____.", answer: "compartmentation", accept: ["compartmentation", "compartmentalization"], explain: "Compartmentation uses rated walls and floors to keep a fire confined to its area of origin." },
        { type: "truefalse", q: "Spray-applied fire-resistive material, or SFRM, is sprayed on steel to give it a fire-resistance rating.", answer: true, explain: "Bare steel weakens quickly in fire, so SFRM insulates it to maintain structural capacity longer." },
        { type: "mcq", q: "Intumescent fireproofing protects steel by doing what when heated?", choices: ["Melting away", "Swelling into an insulating char layer", "Releasing water", "Turning to gas"], answer: 1, explain: "Intumescent coatings expand many times their thickness, forming a char that insulates the steel." },
        { type: "mcq", q: "Why does structural steel need fireproofing?", choices: ["To prevent rust only", "Because steel loses strength at high temperatures and can fail", "For appearance", "To carry electrical current"], answer: 1, explain: "Unprotected steel softens and can buckle in a fire, so its rating protects it long enough for egress." },
        { type: "match", q: "Match each fireproofing or smoke-control item to its description.", pairs: [["SFRM", "Sprayed-on steel fireproofing"], ["Intumescent", "Coating that swells when heated"], ["Stair pressurization", "Keeps smoke out of exit stairs"], ["Compartmentation", "Confines fire with rated separations"]], explain: "These methods protect the structure and keep egress paths usable during a fire." },
        { type: "truefalse", q: "An architecturally exposed steel column in a lobby is more likely to use intumescent coating than rough spray-applied SFRM.", answer: true, explain: "Intumescent paint provides a finished, attractive surface where the steel is meant to be seen." },
        { type: "order", q: "Order how fireproofing preserves the structure during a fire.", items: ["Fire raises the air temperature", "Fireproofing slows heat transfer to the steel", "Steel stays below its failure temperature longer", "Occupants have more time to evacuate"], explain: "Delaying the rise in steel temperature is what buys time for life safety and fire response." }
      ]
    }
  ]
});
