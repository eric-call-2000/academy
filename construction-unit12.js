window.ACADEMY.addUnit("construction", {
  id: "unit-12",
  title: "Site, Civil & Earthwork",
  color: "#5a8f3c",
  icon: "🚜",
  description: "The work below and around the building: grading, soils, drainage and stormwater, site utilities, paving and retaining structures.",
  lessons: [
    {
      id: "l129",
      title: "Site & Civil Basics",
      intro: "The civil scope, the C-sheets, and the benchmark and datum that tie everything to the ground.",
      questions: [
        { type: "mcq", q: "Site and civil work is often called what, versus the vertical construction of the building itself?", choices: ["Horizontal construction", "Lateral construction", "Superstructure", "Interior fit-out"], answer: 0, explain: "Grading, paving, and utilities are horizontal construction, the flat work in and around the site." },
        { type: "mcq", q: "Which discipline typically designs grading, drainage, and site utilities?", choices: ["The structural engineer", "The civil engineer", "The mechanical engineer", "The geotechnical driller"], answer: 1, explain: "The civil engineer handles the site: earthwork, storm and sanitary systems, and site layout." },
        { type: "mcq", q: "In a drawing set, which sheet prefix identifies the civil drawings?", choices: ["A", "S", "C", "M"], answer: 2, explain: "C-sheets are civil; A is architectural, S is structural, and M is mechanical." },
        { type: "fill", q: "A permanent, known reference point of fixed elevation on or near a site is called a ____.", answer: "benchmark", accept: ["benchmark", "bench mark"], explain: "Surveyors reference the benchmark to set every other elevation on the project consistently." },
        { type: "truefalse", q: "A datum is the established zero reference elevation that all other elevations on the project are measured from.", answer: true, explain: "Elevations are given relative to a datum, such as a site datum or mean sea level." },
        { type: "mcq", q: "On a site plan, existing conditions versus proposed conditions refers to what?", choices: ["Two contractors bidding", "The ground as it is now versus how it will be built", "Interior versus exterior", "Day versus night work"], answer: 1, explain: "Existing shows the current site; proposed shows the finished design the contractor must build to." },
        { type: "truefalse", q: "A survey establishes property lines, existing elevations, and utilities before civil design begins.", answer: true, explain: "The survey gives the civil engineer the accurate baseline of the real site to design from." },
        { type: "match", q: "Match each civil term to its meaning.", pairs: [["C-sheets", "Civil drawings in the set"], ["Benchmark", "Fixed known elevation reference"], ["Datum", "Zero reference for elevations"], ["Survey", "Measured record of existing site"]], explain: "These reference elements tie the design to the real ground and to a common vertical baseline." }
      ]
    },
    {
      id: "l130",
      title: "Grading & Earthwork",
      intro: "Cut and fill, balancing the site, and reading the grading plan.",
      questions: [
        { type: "mcq", q: "In earthwork, cut refers to what?", choices: ["Soil added to raise an area", "Soil removed to lower an area", "Compacting soil", "Watering soil"], answer: 1, explain: "Cut is excavated material removed to bring high ground down to the design grade." },
        { type: "mcq", q: "Fill refers to what?", choices: ["Soil removed to lower an area", "Soil placed to raise an area to design grade", "Testing soil moisture", "Removing topsoil"], answer: 1, explain: "Fill is imported or relocated soil placed and compacted to build low ground up." },
        { type: "truefalse", q: "A balanced site is one where the volume of cut roughly equals the volume of fill, minimizing hauling.", answer: true, explain: "Balancing cut and fill on site avoids the cost of importing or hauling away large volumes." },
        { type: "fill", q: "Planning the most efficient movement of earth across a site, from cut areas to fill areas, is called mass ____.", answer: "haul", accept: ["haul", "hauling"], explain: "Mass haul analysis minimizes how far and how much soil must be moved during earthwork." },
        { type: "mcq", q: "What is the difference between rough grade and finish grade?", choices: ["They are the same", "Rough grade is approximate; finish grade is the exact final surface", "Rough grade is only for roads", "Finish grade is done first"], answer: 1, explain: "Rough grading gets close; finish grading trims to the precise elevations before paving or landscaping." },
        { type: "mcq", q: "The prepared soil surface directly beneath a pavement or slab is called the what?", choices: ["Topsoil", "Subgrade", "Base course", "Wearing course"], answer: 1, explain: "The subgrade is the compacted native or fill soil that supports the pavement structure above." },
        { type: "match", q: "Match each earthwork term to its meaning.", pairs: [["Borrow", "Soil brought in from off site"], ["Spoil", "Excess soil hauled away"], ["Cut", "Soil removed to lower grade"], ["Fill", "Soil placed to raise grade"]], explain: "Borrow and spoil handle the imbalance when a site cannot be perfectly balanced." },
        { type: "mcq", q: "On a grading plan, contour lines connect points of what?", choices: ["Equal cost", "Equal elevation", "Equal slope", "Equal soil type"], answer: 1, explain: "Each contour line follows a constant elevation; closely spaced lines mean steep ground." },
        { type: "truefalse", q: "A spot elevation gives the exact height at a single specific point, unlike a contour that follows a whole line.", answer: true, explain: "Spot elevations pin down key points like corners, drains, and door thresholds precisely." }
      ]
    },
    {
      id: "l131",
      title: "Soils, Compaction & Testing",
      intro: "Soil types, the Proctor, and proving compaction in the field.",
      questions: [
        { type: "mcq", q: "Which soil type generally drains well and compacts to a strong load-bearing base?", choices: ["Organic topsoil", "Well-graded gravel and sand", "Soft clay", "Peat"], answer: 1, explain: "Granular gravels and sands drain freely and make stable, strong subgrade and base material." },
        { type: "mcq", q: "Optimum moisture content is the water content at which soil can be compacted to what?", choices: ["Its lowest strength", "Its maximum dry density", "Its wettest state", "Its highest air voids"], answer: 1, explain: "At optimum moisture the soil particles pack most tightly, giving the greatest dry density." },
        { type: "mcq", q: "The lab test that determines a soil's maximum dry density and optimum moisture content is the what?", choices: ["Slump test", "Proctor test", "Sieve analysis", "Cylinder break"], answer: 1, explain: "The Proctor test compacts soil at various moisture contents to find its density curve." },
        { type: "fill", q: "Compaction achieved in the field is expressed as a percent of the Proctor maximum, called relative ____.", answer: "compaction", accept: ["compaction"], explain: "A spec such as 95 percent relative compaction means the field density must reach 95 percent of the Proctor maximum." },
        { type: "truefalse", q: "A nuclear density gauge measures the in-place density and moisture of compacted soil in the field.", answer: true, explain: "The gauge uses radiation to read density and moisture quickly so crews can verify compaction as they go." },
        { type: "mcq", q: "Soil is placed and compacted in thin layers called lifts because why?", choices: ["It looks neater", "Thin layers can be compacted uniformly to the required density", "It uses less soil", "Thick layers dry faster"], answer: 1, explain: "A compactor can only densify a limited thickness, so soil is built up in controlled lifts." },
        { type: "match", q: "Match each soil term to its meaning.", pairs: [["Proctor test", "Finds max dry density"], ["Lift", "Thin layer of placed soil"], ["Nuclear gauge", "Measures field density"], ["Subgrade prep", "Readying soil below pavement"]], explain: "These tools and steps ensure the soil beneath structures is dense and stable." },
        { type: "order", q: "Order the steps to place and verify a compacted fill.", items: ["Spread soil in a thin lift", "Adjust moisture toward optimum", "Compact with a roller or plate", "Test density with a gauge", "Move to the next lift if it passes"], explain: "Compaction is verified lift by lift so problems are caught before more soil is placed on top." },
        { type: "truefalse", q: "Soil that is too dry or too wet will not reach its required compaction, so moisture is controlled during placement.", answer: true, explain: "Both extremes prevent tight packing, so crews add water or aerate to hit optimum moisture." }
      ]
    },
    {
      id: "l132",
      title: "Drainage & Stormwater",
      intro: "Positive drainage, swales and catch basins, and detention versus retention.",
      questions: [
        { type: "mcq", q: "Positive drainage means the site is graded so that water does what?", choices: ["Ponds against the building", "Flows away from structures to a discharge point", "Soaks straight down under the slab", "Stays perfectly level"], answer: 1, explain: "Sloping surfaces away from buildings keeps water from pooling and infiltrating foundations." },
        { type: "fill", q: "The steepness of a graded surface, expressed as rise over run in percent, is the ____ percent.", answer: "slope", accept: ["slope", "grade"], explain: "A common minimum slope for drainage away from a building is about 2 percent over the first several feet." },
        { type: "mcq", q: "A swale is what?", choices: ["A buried pipe", "A shallow graded channel that directs surface runoff", "A concrete wall", "A type of manhole"], answer: 1, explain: "Swales are gently sloped channels, often grassed, that convey stormwater across a site." },
        { type: "mcq", q: "A catch basin does what in a storm drainage system?", choices: ["Stores drinking water", "Collects surface runoff and directs it into the storm sewer", "Pumps sewage", "Detects gas leaks"], answer: 1, explain: "Catch basins are inlets with a grate that capture runoff and pass it into buried storm piping." },
        { type: "truefalse", q: "A storm sewer carries rainwater runoff and is a separate system from the sanitary sewer that carries wastewater.", answer: true, explain: "Storm and sanitary systems are kept separate so stormwater does not overload treatment plants." },
        { type: "mcq", q: "What is the difference between a detention basin and a retention basin?", choices: ["They are identical", "Detention holds water temporarily then releases it; retention keeps a permanent pool", "Detention is always dry", "Retention drains instantly"], answer: 1, explain: "Detention slows and releases runoff to limit peak flow; retention holds a permanent pond." },
        { type: "match", q: "Match each stormwater feature to its role.", pairs: [["Swale", "Surface channel for runoff"], ["Catch basin", "Inlet into the storm sewer"], ["Detention", "Temporary storage, slow release"], ["Retention", "Permanent pool of water"]], explain: "Together these convey, capture, and control the rate of stormwater leaving a site." },
        { type: "fill", q: "Practices used to control the quality and rate of stormwater runoff are called best management practices, or ____.", answer: "BMPs", accept: ["bmps", "bmp", "best management practices"], explain: "BMPs include swales, basins, silt fences, and other measures that manage runoff and pollutants." },
        { type: "truefalse", q: "The SWPPP, or Stormwater Pollution Prevention Plan, sets the erosion and sediment controls a site must follow.", answer: true, explain: "The SWPPP is a required plan that lists the BMPs and inspections keeping runoff clean during construction." }
      ]
    },
    {
      id: "l133",
      title: "Site Utilities",
      intro: "Water, sewer, gas and electric below grade, plus trenching and invert elevations.",
      questions: [
        { type: "mcq", q: "Which of these is a site utility a civil set typically routes underground?", choices: ["Roof drains only", "Water, sanitary sewer, storm, gas, and electric", "Interior partitions", "Ceiling grid"], answer: 1, explain: "Wet and dry utilities are run below grade from the mains into the building." },
        { type: "mcq", q: "The invert elevation of a pipe refers to what?", choices: ["The top of the pipe", "The inside bottom of the pipe", "The pipe centerline", "The trench top"], answer: 1, explain: "Invert is the inside-bottom elevation, and it controls the slope that lets gravity pipes flow." },
        { type: "fill", q: "The compacted material placed around and under a pipe to support it in the trench is called pipe ____.", answer: "bedding", accept: ["bedding"], explain: "Proper bedding cradles the pipe and spreads loads so it does not crack or deflect." },
        { type: "truefalse", q: "Sanitary sewer and storm pipes usually flow by gravity, so they must be laid on a continuous downhill slope.", answer: true, explain: "Gravity systems rely on invert slope, which is why inverts are shown precisely on the plans." },
        { type: "mcq", q: "A manhole in a sewer or storm system primarily provides what?", choices: ["A water supply", "Access for inspection and cleaning at junctions and changes", "Electrical grounding", "A gas shutoff"], answer: 1, explain: "Manholes give crews access where pipes join, change direction, or change slope." },
        { type: "mcq", q: "Before excavating, crews must have underground utilities located, a step often called what?", choices: ["Call before you dig", "Punch list", "Topping out", "Dewatering"], answer: 0, explain: "One-call locating (811 in the US) marks existing lines so digging does not strike them." },
        { type: "fill", q: "The vertical distance of soil over the top of a buried pipe is called depth of ____.", answer: "cover", accept: ["cover"], explain: "Minimum cover protects pipes from surface loads and, for water lines, from freezing." },
        { type: "match", q: "Match each utility term to its meaning.", pairs: [["Invert", "Inside bottom of a pipe"], ["Bedding", "Support material around a pipe"], ["Tie-in", "Connection to an existing main"], ["Manhole", "Access point in a sewer"]], explain: "These terms describe how buried utilities are laid, supported, and connected." },
        { type: "truefalse", q: "A tie-in is where a new utility line connects to an existing public main or another line.", answer: true, explain: "Tie-ins join the new site service to the municipal system and are often carefully coordinated." }
      ]
    },
    {
      id: "l134",
      title: "Paving & Asphalt",
      intro: "The pavement layers, asphalt versus concrete, and compaction of the mat.",
      questions: [
        { type: "mcq", q: "In a flexible pavement, the compacted crushed stone layer between the subgrade and the asphalt is the what?", choices: ["Wearing course", "Aggregate base", "Curb", "Tack coat"], answer: 1, explain: "The aggregate base spreads traffic loads and provides a stable, drainable platform for the asphalt." },
        { type: "mcq", q: "HMA in paving stands for what?", choices: ["High modulus aggregate", "Hot-mix asphalt", "Heavy metal agent", "Hydraulic mortar admix"], answer: 1, explain: "Hot-mix asphalt is heated asphalt binder mixed with aggregate, placed and compacted while hot." },
        { type: "mcq", q: "Which is a key difference between asphalt and concrete paving?", choices: ["Asphalt is rigid; concrete is flexible", "Asphalt is flexible and faster to open; concrete is rigid and longer lasting", "They perform identically", "Concrete cannot carry trucks"], answer: 1, explain: "Flexible asphalt flexes with loads and cures fast; rigid concrete lasts longer but costs more upfront." },
        { type: "fill", q: "In multi-lift asphalt, the lower structural layer is the binder course and the top layer is the ____ course.", answer: "wearing", accept: ["wearing", "surface"], explain: "The wearing or surface course is the smooth top that carries traffic and sheds water." },
        { type: "truefalse", q: "Freshly placed hot-mix asphalt must be compacted with rollers while it is still hot to reach proper density.", answer: true, explain: "Rolling while hot removes air voids; asphalt that cools too much will not densify properly." },
        { type: "mcq", q: "Curb and gutter along a pavement edge mainly serves what purpose?", choices: ["Decoration only", "Containing and directing surface drainage along the pavement", "Structural support for the building", "Electrical conduit routing"], answer: 1, explain: "Curb and gutter channels runoff to inlets and defines the pavement edge." },
        { type: "match", q: "Match each pavement layer to its position.", pairs: [["Subgrade", "Prepared native soil below all layers"], ["Aggregate base", "Crushed stone over the subgrade"], ["Binder course", "Lower asphalt structural layer"], ["Wearing course", "Top asphalt surface layer"]], explain: "Loads pass from the surface down through each layer to the subgrade below." },
        { type: "order", q: "Order the layers of a flexible pavement from bottom to top.", items: ["Compacted subgrade", "Aggregate base course", "Asphalt binder course", "Asphalt wearing course"], explain: "Each layer is placed and compacted in turn to build the pavement structure up from the soil." },
        { type: "truefalse", q: "Pavement striping is applied after paving to mark lanes, stalls, and traffic control on the finished surface.", answer: true, explain: "Striping and markings are among the last steps, once the wearing course has cured enough." }
      ]
    },
    {
      id: "l135",
      title: "Retaining & Site Structures",
      intro: "Retaining wall types, geogrid, drainage behind walls, and flatwork.",
      questions: [
        { type: "mcq", q: "A gravity retaining wall resists soil pressure primarily by what?", choices: ["Steel reinforcement in a thin stem", "Its own mass and weight", "Anchors drilled into rock", "Interior bracing"], answer: 1, explain: "Gravity walls are heavy enough that their own weight holds back the soil behind them." },
        { type: "mcq", q: "A cantilever retaining wall uses what to resist overturning?", choices: ["Only its weight", "A reinforced stem and footing that leverages the soil weight on the base", "A water seal", "A layer of asphalt"], answer: 1, explain: "The footing extends under the retained soil so its weight, plus reinforcement, resists overturning." },
        { type: "mcq", q: "MSE stands for what type of retaining wall system?", choices: ["Mass structural embankment", "Mechanically stabilized earth", "Masonry side elevation", "Modular slab edge"], answer: 1, explain: "MSE walls reinforce the backfill with layers of geogrid or straps, often faced with segmental block." },
        { type: "fill", q: "The polymer grid laid in layers within the backfill to reinforce an MSE or segmental wall is called ____.", answer: "geogrid", accept: ["geogrid", "geo grid"], explain: "Geogrid ties the soil mass together so the reinforced earth acts as a stable block." },
        { type: "truefalse", q: "Drainage behind a retaining wall is critical because trapped water adds hydrostatic pressure that can push the wall over.", answer: true, explain: "Gravel backfill and drain pipe relieve water pressure that would otherwise overload the wall." },
        { type: "mcq", q: "A surcharge load on a retaining wall refers to what?", choices: ["An extra fee", "An added load on the soil behind the wall, such as a building or vehicle", "The wall's own weight", "A drainage pipe"], answer: 1, explain: "Surcharge is any load behind the wall that increases the pressure the wall must resist." },
        { type: "match", q: "Match each retaining wall type to its key trait.", pairs: [["Gravity", "Held by its own mass"], ["Cantilever", "Reinforced stem and footing"], ["MSE / segmental", "Geogrid-reinforced backfill"], ["Surcharge", "Extra load behind the wall"]], explain: "Wall choice depends on height, loads, and site space for reinforced backfill." },
        { type: "truefalse", q: "Sidewalks, curbs, and pads are commonly grouped under the term flatwork on a site.", answer: true, explain: "Flatwork covers the flat concrete site elements like walks, aprons, and slabs on grade." },
        { type: "mcq", q: "Why is a drainage layer of gravel and a perforated pipe placed behind many retaining walls?", choices: ["To add weight only", "To collect and remove water, reducing hydrostatic pressure", "For appearance", "To carry electrical lines"], answer: 1, explain: "The drain relieves water buildup so the wall only resists soil, not soil plus water pressure." }
      ]
    },
    {
      id: "l136",
      title: "Erosion Control & Site Safety",
      intro: "Sediment controls, SWPPP inspections, dust control, and excavation safety.",
      questions: [
        { type: "mcq", q: "Erosion and sediment control measures are meant to do what?", choices: ["Speed up runoff", "Keep soil on site and out of storm systems and waterways", "Increase dust", "Remove all vegetation"], answer: 1, explain: "Controls keep disturbed soil from washing off site and polluting drainage and streams." },
        { type: "mcq", q: "A silt fence works by doing what?", choices: ["Pumping water uphill", "Filtering runoff and trapping sediment while letting water slowly pass", "Blocking all water completely", "Spraying dust"], answer: 1, explain: "Silt fence is a fabric barrier that slows runoff so sediment drops out before water leaves the site." },
        { type: "fill", q: "Straw or fiber rolls placed across slopes to slow runoff and catch sediment are called ____.", answer: "wattles", accept: ["wattles", "wattle", "fiber rolls"], explain: "Wattles break up slope length and trap sediment, protecting exposed ground between rains." },
        { type: "truefalse", q: "A stabilized construction entrance of crushed stone helps knock mud off tires so trucks do not track soil onto public roads.", answer: true, explain: "The rock entrance reduces off-site tracking, a common SWPPP requirement." },
        { type: "mcq", q: "Under a SWPPP, site inspections of erosion controls are typically required when?", choices: ["Once at project end", "Regularly and after significant rain events", "Only if a neighbor complains", "Never"], answer: 1, explain: "Routine and post-rain inspections confirm BMPs are working and repaired promptly." },
        { type: "mcq", q: "Dust control on a site is commonly achieved by what?", choices: ["Adding more soil", "Applying water or a suppressant to disturbed areas", "Removing all barriers", "Increasing truck speed"], answer: 1, explain: "Watering or suppressants keep fine particles down, protecting air quality and visibility." },
        { type: "match", q: "Match each control to its purpose.", pairs: [["Silt fence", "Traps sediment in runoff"], ["Wattle", "Slows runoff on slopes"], ["Stabilized entrance", "Reduces mud tracking"], ["Dust control", "Suppresses airborne soil"]], explain: "Each measure targets a different way soil can leave the site, by water, wheels, or wind." },
        { type: "mcq", q: "In excavation safety, protecting a trench from cave-in can be done by sloping, shoring, or what?", choices: ["Painting the walls", "Shielding with a trench box", "Adding more workers", "Ignoring the depth"], answer: 1, explain: "Trench boxes, shoring, and sloping are the recognized methods to protect workers in trenches." },
        { type: "truefalse", q: "Deeper trenches generally require engineered protective systems because the risk of a fatal cave-in rises with depth.", answer: true, explain: "Regulations require protective systems for trenches at and beyond a set depth, commonly five feet." }
      ]
    }
  ]
});
