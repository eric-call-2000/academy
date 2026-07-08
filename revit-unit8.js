window.ACADEMY.addUnit("revit", {
  id: "unit-8",
  title: "Rooms, Areas & Schedules",
  color: "#f25f9c",
  icon: "📊",
  description: "Turning the model into structured, reportable data.",
  lessons: [
    {
      id: "l57",
      title: "Rooms",
      intro: "A Room is a data object that measures and reports an enclosed space in your model.",
      questions: [
        {
          type: "mcq",
          q: "What is a Room in Revit?",
          choices: ["A data element that occupies and measures an enclosed space", "A separate drawing file", "A type of wall", "A camera view"],
          answer: 0,
          explain: "A Room is a model element that fills a bounded space and reports its area, perimeter, and other data."
        },
        {
          type: "truefalse",
          q: "Rooms need bounding elements to know where their edges are.",
          answer: true,
          explain: "Room-bounding elements such as walls tell a Room where its boundary is."
        },
        {
          type: "mcq",
          q: "Which of these is a room-bounding element by default?",
          choices: ["Wall", "Text note", "Dimension", "Tag"],
          answer: 0,
          explain: "Walls are room-bounding by default; annotation like text and tags never bounds a room."
        },
        {
          type: "fill",
          q: "When no wall exists to close a space, you can draw a Room Separation ____ to bound the Room.",
          answer: "line",
          accept: ["line", "separation line", "separator"],
          explain: "A Room Separation Line is a sketch line that bounds a Room where there is no physical element."
        },
        {
          type: "truefalse",
          q: "If a Room is not fully enclosed, Revit warns that the room is not in a properly enclosed region.",
          answer: true,
          explain: "A gap in the boundary lets the Room bleed out, so Revit flags it as not enclosed."
        },
        {
          type: "match",
          q: "Match each item to what it does for Rooms.",
          pairs: [["Wall", "Bounds a room by default"], ["Room Separation Line", "Bounds a room where no wall exists"], ["Text note", "Never bounds a room"]],
          explain: "Physical elements and separation lines bound rooms; annotation does not."
        },
        {
          type: "order",
          q: "Order the steps to place a Room in an enclosed space.",
          items: ["Enclose the space with walls or separation lines", "Start the Room tool", "Click inside the enclosed area to place the Room", "Confirm the Room reports its area"],
          explain: "You bound the space first, then place the Room, and it reports area once placed."
        },
        {
          type: "truefalse",
          q: "A Room can be unbounded so long as you never plan to report its area.",
          answer: false,
          explain: "An unbounded Room reports an unreliable or missing area, so you should always enclose it."
        }
      ]
    },
    {
      id: "l58",
      title: "Room Tags & Data",
      intro: "A Room Tag displays the Room's name, number, and area right on the plan.",
      questions: [
        {
          type: "mcq",
          q: "What does a Room Tag display?",
          choices: ["Data stored in the Room, such as name and number", "A hard-typed label you must maintain by hand", "The wall material", "The view scale"],
          answer: 0,
          explain: "A tag reads live data from the Room element, so it stays in sync with the model."
        },
        {
          type: "truefalse",
          q: "Changing a Room's name in its properties updates the Room Tag automatically.",
          answer: true,
          explain: "The tag reports the Room's data, so editing the data updates the tag."
        },
        {
          type: "mcq",
          q: "Which value does a Room compute for you rather than requiring you to type it?",
          choices: ["Area", "Name", "Department", "Comments"],
          answer: 0,
          explain: "Area is measured from the Room's boundary, while values like Name are entered by the user."
        },
        {
          type: "fill",
          q: "Each Room carries a name and a ____ that together identify it.",
          answer: "number",
          accept: ["number", "room number"],
          explain: "Name and number are the two core identifiers stored on every Room."
        },
        {
          type: "match",
          q: "Match the Room value to how it is set.",
          pairs: [["Area", "Calculated from the boundary"], ["Name", "Typed by the user"], ["Number", "Auto-assigned on placement, then editable"]],
          explain: "Area is computed, Name is typed, and Number is auto-assigned when the Room is placed but can be edited."
        },
        {
          type: "truefalse",
          q: "A Room Tag is a separate object from the Room it labels.",
          answer: true,
          explain: "The Room is the data element and the tag is a separate annotation that displays that data."
        },
        {
          type: "order",
          q: "Order the workflow to label a placed Room.",
          items: ["Select the Room", "Set its name and number in properties", "Tag the Room so the data shows on the plan", "Read the area the Room reports"],
          explain: "Enter the identifying data, then tag the Room to surface it on the sheet."
        }
      ]
    },
    {
      id: "l59",
      title: "Area Plans & Areas",
      intro: "Area Plans use Area elements and boundaries to measure space by scheme, such as gross or rentable.",
      questions: [
        {
          type: "mcq",
          q: "How does an Area differ from a Room?",
          choices: ["An Area is defined by Area Boundary lines you draw, independent of walls", "An Area is the same object as a Room", "An Area cannot be scheduled", "An Area has no measurable value"],
          answer: 0,
          explain: "Areas are measured to Area Boundary lines you place, so their limits do not have to match walls."
        },
        {
          type: "truefalse",
          q: "Area Plans are created for a specific Area Scheme.",
          answer: true,
          explain: "Each Area Plan belongs to an Area Scheme such as Gross Building or Rentable."
        },
        {
          type: "mcq",
          q: "Which built-in Area Scheme measures the full outer footprint of the building?",
          choices: ["Gross Building", "Rentable", "Circulation", "Furniture"],
          answer: 0,
          explain: "The Gross Building scheme measures to the outside of the exterior enclosure."
        },
        {
          type: "match",
          q: "Match the Area Scheme to what it measures.",
          pairs: [["Gross Building", "Full outer footprint"], ["Rentable", "Leasable floor area per standard"]],
          explain: "Gross captures the whole footprint; rentable follows a leasing standard."
        },
        {
          type: "fill",
          q: "You draw Area Boundary ____ to tell an Area where its edges are.",
          answer: "lines",
          accept: ["lines", "line", "boundary lines"],
          explain: "Area Boundary Lines set the limits of an Area, similar to how walls bound a Room."
        },
        {
          type: "order",
          q: "Order the steps to measure a rentable area.",
          items: ["Create an Area Plan for the Rentable scheme", "Draw Area Boundary Lines", "Place an Area inside the boundary", "Read the area value it reports"],
          explain: "You set up the scheme plan, draw boundaries, place the Area, then read its value."
        },
        {
          type: "truefalse",
          q: "One Area Scheme is enough because gross and rentable areas are always identical.",
          answer: false,
          explain: "Gross and rentable measure differently, so they usually need separate schemes."
        }
      ]
    },
    {
      id: "l60",
      title: "Color Schemes",
      intro: "A Color Scheme fills rooms or areas with color based on their data so patterns are easy to see.",
      questions: [
        {
          type: "mcq",
          q: "What does a Color Scheme do?",
          choices: ["Colors rooms or areas by a chosen data value", "Changes the color of every wall type", "Renders the model photo-realistically", "Prints the sheet in grayscale"],
          answer: 0,
          explain: "A Color Scheme applies a color fill driven by a parameter such as Name or Department."
        },
        {
          type: "truefalse",
          q: "A Color Scheme can color rooms by their Department value.",
          answer: true,
          explain: "You choose the parameter that drives the colors, and Department is a common choice."
        },
        {
          type: "mcq",
          q: "Where does the key that explains the colors come from?",
          choices: ["A Color Scheme Legend placed in the view", "A separate spreadsheet", "The title block only", "It cannot be shown"],
          answer: 0,
          explain: "A Color Scheme Legend lists each value and its color so readers can decode the fill."
        },
        {
          type: "fill",
          q: "The color fill is driven by a ____ such as Name or Department.",
          answer: "parameter",
          accept: ["parameter", "value", "field"],
          explain: "You pick the parameter whose values map to colors."
        },
        {
          type: "match",
          q: "Match each piece of a Color Scheme to its role.",
          pairs: [["Color fill", "Shades rooms by data"], ["Legend", "Explains what each color means"]],
          explain: "The fill shows the pattern and the legend decodes it."
        },
        {
          type: "truefalse",
          q: "A Color Scheme changes the actual data stored in the rooms.",
          answer: false,
          explain: "It only changes how the view displays the data; it does not edit the underlying values."
        },
        {
          type: "order",
          q: "Order the steps to color a plan by department.",
          items: ["Assign a Color Scheme to the view", "Choose the parameter to color by", "Let Revit assign colors to each value", "Place a legend to explain the colors"],
          explain: "Apply the scheme, pick the parameter, get the colors, then add a legend."
        }
      ]
    },
    {
      id: "l61",
      title: "What Is a Schedule?",
      intro: "A schedule is a live table of model data that updates whenever the model changes.",
      questions: [
        {
          type: "mcq",
          q: "What is a Revit schedule?",
          choices: ["A live table view of model data", "A static picture pasted into the project", "A rendering setting", "A type of family"],
          answer: 0,
          explain: "A schedule is a view that reads the model, so it is always current."
        },
        {
          type: "truefalse",
          q: "Editing a value in a schedule can change the element in the model.",
          answer: true,
          explain: "A schedule is bidirectional for editable parameters, so a change there updates the element."
        },
        {
          type: "truefalse",
          q: "If you add ten more doors to the model, a door schedule must be redrawn by hand.",
          answer: false,
          explain: "Schedules update automatically, so the new doors appear without redrawing anything."
        },
        {
          type: "mcq",
          q: "Because a schedule is a view, where can you place it?",
          choices: ["On a sheet, like any other view", "Only in an external file", "Only in a rendering", "Nowhere; it cannot be printed"],
          answer: 0,
          explain: "A schedule is a view, so you drag it onto a sheet to document it."
        },
        {
          type: "fill",
          q: "A schedule stays current because it reads ____ data straight from the model.",
          answer: "live",
          accept: ["live", "model", "real"],
          explain: "The table pulls live model data rather than a saved snapshot."
        },
        {
          type: "match",
          q: "Match the trait to why it matters.",
          pairs: [["Live data", "Never goes stale"], ["Bidirectional", "Edits can flow back to the model"], ["Placeable on a sheet", "Can be documented like a drawing"]],
          explain: "These traits make schedules a trustworthy, editable part of your documents."
        },
        {
          type: "truefalse",
          q: "A schedule and a floor plan of the same project draw from the same single database.",
          answer: true,
          explain: "Revit keeps one project database, so views and schedules share the same data."
        }
      ]
    },
    {
      id: "l62",
      title: "Creating a Schedule",
      intro: "You build a schedule by choosing fields and then filtering, sorting, grouping, and formatting them.",
      questions: [
        {
          type: "mcq",
          q: "What does adding a Field to a schedule do?",
          choices: ["Adds a column for that parameter", "Deletes elements from the model", "Renames the category", "Changes the view scale"],
          answer: 0,
          explain: "Each Field becomes a column showing that parameter's value for every element."
        },
        {
          type: "mcq",
          q: "What does a Filter on a schedule control?",
          choices: ["Which rows are shown based on their values", "The font of the header", "The sheet number", "The wall thickness"],
          answer: 0,
          explain: "A Filter limits the schedule to rows that meet a condition, hiding the rest."
        },
        {
          type: "fill",
          q: "The Sorting and ____ tab lets you group like rows and optionally show a total count.",
          answer: "grouping",
          accept: ["grouping", "group"],
          explain: "Sorting and Grouping orders rows and can collapse them into grouped totals."
        },
        {
          type: "truefalse",
          q: "Turning on an itemized list shows one row per element, while turning it off collapses duplicates.",
          answer: true,
          explain: "Itemize every instance lists each element; unchecking it groups identical rows together."
        },
        {
          type: "match",
          q: "Match each schedule tab to its job.",
          pairs: [["Fields", "Choose the columns"], ["Filter", "Limit which rows appear"], ["Sorting/Grouping", "Order and group rows"], ["Formatting", "Set column headings and units"]],
          explain: "Each tab handles one part of building a clean, readable schedule."
        },
        {
          type: "order",
          q: "Order a sensible workflow for building a door schedule.",
          items: ["Pick the Doors category", "Add fields as columns", "Filter to the doors you want", "Sort and group the rows", "Format headings and units"],
          explain: "Choose the category, add columns, then filter, sort, and format for a tidy result."
        },
        {
          type: "truefalse",
          q: "The Formatting tab is where you can hide a column while still using it to sort.",
          answer: true,
          explain: "Formatting includes a Hidden Field option so a column can drive sorting without being shown."
        }
      ]
    },
    {
      id: "l63",
      title: "Key Schedules & Calculated Values",
      intro: "Key schedules define reusable data sets, and calculated values compute new fields from existing ones.",
      questions: [
        {
          type: "mcq",
          q: "What is a Key Schedule?",
          choices: ["A schedule of reusable keys you apply to fill several fields at once", "A schedule that unlocks the file", "A list of keyboard shortcuts", "A schedule of doors only"],
          answer: 0,
          explain: "A Key Schedule defines named keys that carry a set of values you can assign in bulk."
        },
        {
          type: "truefalse",
          q: "Assigning a key to an element fills in all the fields defined by that key at once.",
          answer: true,
          explain: "That is the point of a key: pick it once and the linked values populate together."
        },
        {
          type: "mcq",
          q: "What is a Calculated Value in a schedule?",
          choices: ["A field computed from a formula or other fields", "A field you must type for each row", "A photo of the element", "A link to another file"],
          answer: 0,
          explain: "A Calculated Value derives its result from a formula, so it updates as its inputs change."
        },
        {
          type: "fill",
          q: "A calculated value uses a ____ to combine existing fields into a new one.",
          answer: "formula",
          accept: ["formula", "equation"],
          explain: "You write a formula referencing other fields to produce the computed column."
        },
        {
          type: "truefalse",
          q: "A room finish key schedule lets you set floor, base, and wall finishes by picking one style name.",
          answer: true,
          explain: "The finish key bundles those finishes so one selection applies the whole set."
        },
        {
          type: "match",
          q: "Match each concept to its purpose.",
          pairs: [["Key Schedule", "Apply a reusable set of values at once"], ["Calculated Value", "Compute a field from a formula"]],
          explain: "Keys reuse data; calculated values derive new data."
        },
        {
          type: "order",
          q: "Order the steps to use a room finish key.",
          items: ["Create a room finish Key Schedule", "Define a key with its finish values", "Apply that key to rooms in the room schedule", "See the finish fields fill automatically"],
          explain: "Build the key set, define its values, apply it, and the fields populate."
        }
      ]
    },
    {
      id: "l64",
      title: "Material Takeoffs",
      intro: "A Material Takeoff schedule pulls quantities of materials out of the model for counting and costing.",
      questions: [
        {
          type: "mcq",
          q: "What does a Material Takeoff schedule report?",
          choices: ["Quantities of materials used by elements", "Only the room names", "The view template list", "The sheet index"],
          answer: 0,
          explain: "A Material Takeoff totals material quantities such as area or volume across elements."
        },
        {
          type: "truefalse",
          q: "A Material Takeoff can report the volume of concrete in the model.",
          answer: true,
          explain: "It reads material quantities like volume, so concrete volume is a typical output."
        },
        {
          type: "mcq",
          q: "How does a Material Takeoff differ from an ordinary schedule?",
          choices: ["It breaks elements down by their materials", "It cannot be placed on a sheet", "It only counts rooms", "It ignores the model entirely"],
          answer: 0,
          explain: "A takeoff drills into each element's materials, so one wall can list several material rows."
        },
        {
          type: "fill",
          q: "Material Takeoffs depend on elements having ____ assigned to them.",
          answer: "materials",
          accept: ["materials", "material"],
          explain: "No material assignments means no quantities to take off."
        },
        {
          type: "match",
          q: "Match each material quantity field to what it measures.",
          pairs: [["Material Area", "Surface amount of a material"], ["Material Volume", "Space a material fills"]],
          explain: "Area and volume are the core material quantities a takeoff reports."
        },
        {
          type: "truefalse",
          q: "Because a takeoff is live, fixing a wall's material updates its quantities automatically.",
          answer: true,
          explain: "Like any schedule, a takeoff reads live data and recomputes when the model changes."
        },
        {
          type: "order",
          q: "Order the steps to quantify concrete with a takeoff.",
          items: ["Assign a concrete material to the elements", "Create a Material Takeoff schedule", "Add the material volume field", "Read the total concrete volume"],
          explain: "Materials must exist first, then the takeoff totals their quantities."
        }
      ]
    }
  ]
});
