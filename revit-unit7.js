window.ACADEMY.addUnit("revit", {
  id: "unit-7",
  title: "Doors, Windows, Stairs & Components",
  color: "#a560e8",
  icon: "🚪",
  description: "Adding the components that fill out a building.",
  lessons: [
    {
      id: "l49",
      title: "Hosted Families",
      intro: "Doors and windows are hosted families that live inside a wall and cannot exist without it.",
      questions: [
        {
          type: "mcq",
          q: "What does it mean that a door is a hosted family?",
          choices: ["It must be placed in a host element like a wall", "It can float anywhere in space", "It is a system family defined in the project", "It never appears in schedules"],
          answer: 0,
          explain: "A hosted family needs a host element to exist. Doors and windows are hosted by walls, so they are placed into a wall rather than in empty space."
        },
        {
          type: "truefalse",
          q: "If you delete the wall that hosts a door, the door is deleted too.",
          answer: true,
          explain: "A hosted element depends on its host. Delete the host wall and the door or window it carries goes with it."
        },
        {
          type: "mcq",
          q: "Doors and windows are which kind of family?",
          choices: ["Loadable families (.rfa)", "System families defined in the project", "In-place families only", "Not families at all"],
          answer: 0,
          explain: "Doors and windows are loadable families saved as .rfa files that you load into a project. Walls, floors, and roofs are system families."
        },
        {
          type: "fill",
          q: "A hosted family requires a ____ element in order to be placed.",
          answer: "host",
          accept: ["host", "hosting"],
          explain: "The host is the element that carries the hosted family. For a door or window that host is a wall."
        },
        {
          type: "match",
          q: "Match each family type to a fitting example.",
          pairs: [["System family", "Wall"], ["Loadable family", "Door"], ["In-place family", "One-off custom shape"]],
          explain: "System families are built into the project, loadable families come from .rfa files, and in-place families are modeled uniquely for a single project."
        },
        {
          type: "truefalse",
          q: "A window can be placed in empty space with no wall present.",
          answer: false,
          explain: "A window is wall-hosted. Without a host wall there is nothing for the opening to cut, so it cannot be placed there."
        },
        {
          type: "mcq",
          q: "When you place a door in a wall, what happens to the wall automatically?",
          choices: ["The wall is cut to create the opening", "The wall is deleted", "The wall becomes a floor", "Nothing changes in the wall"],
          answer: 0,
          explain: "A hosted door or window cuts its own opening in the host wall, so you do not model the hole separately."
        },
        {
          type: "order",
          q: "Order these steps to add a door to a plan.",
          items: ["Draw or select a host wall", "Choose a door type", "Place the door in the wall", "Tag or schedule the door"],
          explain: "You need a wall first, then a door type, then placement, and finally documentation like a tag or schedule entry."
        }
      ]
    },
    {
      id: "l50",
      title: "Placing Doors & Windows",
      intro: "Placing doors and windows involves picking a type, flipping the swing, and tagging for documentation.",
      questions: [
        {
          type: "mcq",
          q: "While placing a door, how do you change which side the door swings toward?",
          choices: ["Flip the door with the flip controls", "Redraw the wall", "Change the level", "Delete and reload the family"],
          answer: 0,
          explain: "Doors have flip controls that let you reverse the swing direction and the hand of the door after placement."
        },
        {
          type: "truefalse",
          q: "A door tag can report information such as the door number or type.",
          answer: true,
          explain: "Tags display parameter values from the element. A door tag can show the mark, type, or other scheduled data."
        },
        {
          type: "fill",
          q: "The ____ dimensions that appear while placing a door help you position it a set distance from a wall corner.",
          answer: "temporary",
          accept: ["temporary", "temp"],
          explain: "Temporary dimensions appear during placement so you can type an exact distance from a nearby reference such as a wall face or corner."
        },
        {
          type: "mcq",
          q: "To use a door size that is not currently in the project, you should first:",
          choices: ["Load the family or duplicate a type", "Draw it by hand", "Change the project template", "Delete a wall"],
          answer: 0,
          explain: "New sizes come from loading a family with that type or duplicating an existing type and editing its dimensions."
        },
        {
          type: "match",
          q: "Match each placement control to what it does.",
          pairs: [["Flip swing", "Reverse the door hand"], ["Tag", "Show element data in the view"], ["Temporary dimension", "Set exact placement distance"]],
          explain: "Flip changes orientation, a tag documents the element, and a temporary dimension controls precise positioning."
        },
        {
          type: "truefalse",
          q: "Windows and doors keep their position relative to the host wall if the wall is moved.",
          answer: true,
          explain: "Because they are hosted, they travel with the wall. Move the wall and the openings move with it."
        },
        {
          type: "order",
          q: "Order the typical steps to place and label a window.",
          items: ["Select the window type", "Hover over a host wall", "Click to place the window", "Add a window tag"],
          explain: "Choose the type, hover over the host wall, click to place, then tag it for the drawings."
        },
        {
          type: "mcq",
          q: "What is the main purpose of a tag on a door or window?",
          choices: ["To display its identifying data on drawings", "To change its size", "To host another element", "To create a new level"],
          answer: 0,
          explain: "A tag is an annotation that reads live data from the element, so drawings stay coordinated with the model."
        }
      ]
    },
    {
      id: "l51",
      title: "Stairs",
      intro: "Stair by component builds a stair from runs and landings that you can shape and edit.",
      questions: [
        {
          type: "mcq",
          q: "In stair by component, a stair is assembled from runs and:",
          choices: ["Landings", "Windows", "Grids", "Roofs"],
          answer: 0,
          explain: "The component method builds a stair from run pieces connected by landings, which you can edit individually."
        },
        {
          type: "truefalse",
          q: "A stair typically connects two levels in the model.",
          answer: true,
          explain: "Stairs are commonly defined between a base level and a top level, and the stair calculates risers to span that height."
        },
        {
          type: "fill",
          q: "A single flight of steps between landings is called a ____.",
          answer: "run",
          accept: ["run", "flight"],
          explain: "A run is one continuous flight of treads and risers. Landings connect runs and let the stair turn or pause."
        },
        {
          type: "mcq",
          q: "What mostly determines how many risers a stair needs?",
          choices: ["The height between the base and top levels", "The color of the stair", "The number of windows nearby", "The view scale"],
          answer: 0,
          explain: "The total floor-to-floor height divided by a target riser height sets the number of risers the stair must have."
        },
        {
          type: "match",
          q: "Match each stair part to its role.",
          pairs: [["Run", "A flight of steps"], ["Landing", "A flat area between runs"], ["Riser", "The vertical face of a step"]],
          explain: "Runs are the sloped flights, landings are flat connectors, and risers are the vertical faces between treads."
        },
        {
          type: "order",
          q: "Order these steps to make an L-shaped stair by component.",
          items: ["Set the base and top levels", "Draw the first run", "Add a landing", "Draw the second run to finish"],
          explain: "Define the levels, draw one run, place a landing where the stair turns, then draw the second run up to the top level."
        },
        {
          type: "truefalse",
          q: "A landing lets a stair change direction or provide a resting point.",
          answer: true,
          explain: "Landings connect runs and are where a stair can turn a corner or pause partway up."
        },
        {
          type: "mcq",
          q: "The flat, horizontal surface you step on is the:",
          choices: ["Tread", "Riser", "Landing edge", "Nosing radius"],
          answer: 0,
          explain: "The tread is the horizontal walking surface. The riser is the vertical face between one tread and the next."
        }
      ]
    },
    {
      id: "l52",
      title: "Railings",
      intro: "Railings can be hosted to a stair or ramp so they follow its path, or placed directly on a floor.",
      questions: [
        {
          type: "mcq",
          q: "When a railing is hosted to a stair, what happens if you edit the stair path?",
          choices: ["The railing follows the stair", "The railing is deleted", "The railing turns into a wall", "Nothing, they are unrelated"],
          answer: 0,
          explain: "A railing hosted to a stair is associated with it, so changing the stair updates the railing along with it."
        },
        {
          type: "truefalse",
          q: "A railing can be sketched directly on a floor as a free-standing guard.",
          answer: true,
          explain: "Railings can be hosted to a stair or ramp, or placed on a floor by sketching a path, for example at a balcony edge."
        },
        {
          type: "fill",
          q: "A railing placed at the edge of an opening or balcony acts as a ____ for safety.",
          answer: "guard",
          accept: ["guard", "guardrail", "guard rail"],
          explain: "At an open edge a railing serves as a guard that protects people from the drop."
        },
        {
          type: "mcq",
          q: "A railing type usually controls the top rail and which repeating vertical element?",
          choices: ["Balusters", "Treads", "Risers", "Grids"],
          answer: 0,
          explain: "The railing type defines the top rail plus balusters, the repeating vertical members, and their spacing pattern."
        },
        {
          type: "match",
          q: "Match each railing part to its description.",
          pairs: [["Top rail", "The rail you hold"], ["Baluster", "A repeating vertical member"], ["Rail path", "The line the railing follows"]],
          explain: "The top rail is the handhold, balusters are the vertical infill, and the path defines where the railing runs."
        },
        {
          type: "truefalse",
          q: "Hosting a railing to a stair means you must draw the railing path by hand every time.",
          answer: false,
          explain: "When a railing is hosted to a stair, it can follow the stair automatically rather than requiring a hand-drawn path."
        },
        {
          type: "order",
          q: "Order the steps to add a floor-hosted railing at a balcony.",
          items: ["Choose a railing type", "Sketch the railing path", "Set the host level", "Finish to create the railing"],
          explain: "Pick a type, sketch the path along the edge, confirm the host level, then finish to generate the railing."
        }
      ]
    },
    {
      id: "l53",
      title: "Ramps",
      intro: "Ramps model sloped paths for grade changes and accessible routes between levels.",
      questions: [
        {
          type: "mcq",
          q: "What is a ramp used for in a model?",
          choices: ["A sloped path between levels or grades", "A flat parking surface only", "A vertical column", "A window opening"],
          answer: 0,
          explain: "A ramp is a sloped surface that connects different heights, often used for accessibility instead of stairs."
        },
        {
          type: "truefalse",
          q: "Ramps are often used to provide accessible routes where stairs would create a barrier.",
          answer: true,
          explain: "Ramps give a gradual slope so people who cannot use stairs can move between levels."
        },
        {
          type: "fill",
          q: "The steepness of a ramp is described by its ____, such as one unit of rise per twelve of run.",
          answer: "slope",
          accept: ["slope", "grade"],
          explain: "Slope, sometimes given as a ratio like 1:12, describes how much a ramp rises over a given horizontal distance."
        },
        {
          type: "mcq",
          q: "Like a stair, a ramp is usually defined between which two things?",
          choices: ["A base level and a top level", "Two windows", "Two grids", "Two tags"],
          answer: 0,
          explain: "A ramp spans from a base level to a top level, and its length depends on the height and the allowed slope."
        },
        {
          type: "truefalse",
          q: "A gentler ramp slope requires a longer ramp to reach the same height.",
          answer: true,
          explain: "Slope trades height for length. To climb the same height at a shallower slope, the ramp must run farther."
        },
        {
          type: "match",
          q: "Match each ramp idea to its meaning.",
          pairs: [["Slope", "Steepness of the ramp"], ["Run", "Sloped length of ramp"], ["Landing", "Flat rest area on a long ramp"]],
          explain: "Slope sets steepness, the run is the sloped portion, and landings give flat resting points on long ramps."
        },
        {
          type: "order",
          q: "Order these steps to create a ramp.",
          items: ["Set the base and top levels", "Set the ramp slope or type", "Draw the ramp run", "Finish to build the ramp"],
          explain: "Define the levels the ramp connects, set the slope, draw the run, and finish to generate the ramp."
        },
        {
          type: "mcq",
          q: "Why might a long ramp need one or more landings?",
          choices: ["To provide flat resting points", "To add windows", "To host a door", "To increase the slope"],
          answer: 0,
          explain: "Landings break up a long ramp with flat areas, which are important for rest and accessibility."
        }
      ]
    },
    {
      id: "l54",
      title: "Placing Components",
      intro: "Furniture, fixtures, and equipment are loadable components you place to furnish and detail a model.",
      questions: [
        {
          type: "mcq",
          q: "Furniture, plumbing fixtures, and equipment are usually placed as:",
          choices: ["Loadable component families", "System families", "Levels", "Grids"],
          answer: 0,
          explain: "Most furniture, fixtures, and equipment come from loadable .rfa families that you place as components in the model."
        },
        {
          type: "truefalse",
          q: "A component you place can carry parameters that show up in a schedule.",
          answer: true,
          explain: "Components hold parameter data, so a furniture or equipment schedule can count and describe them automatically."
        },
        {
          type: "fill",
          q: "If a component type is not in the project, you first ____ its family into the project.",
          answer: "load",
          accept: ["load", "import"],
          explain: "You load the .rfa family so its types become available, then you can place instances of it."
        },
        {
          type: "mcq",
          q: "Some components, like a wall-mounted sink, are:",
          choices: ["Wall-hosted and need a host wall", "Always free-standing only", "System families", "Unable to schedule"],
          answer: 0,
          explain: "Certain fixtures are wall-hosted and require a host wall, while others are free-standing and sit on a level or floor."
        },
        {
          type: "match",
          q: "Match each component to a fitting category example.",
          pairs: [["Chair", "Furniture"], ["Sink", "Plumbing fixture"], ["Refrigerator", "Equipment"]],
          explain: "Loadable components fall into categories like furniture, plumbing fixtures, and equipment, which drive scheduling and visibility."
        },
        {
          type: "truefalse",
          q: "Every component in Revit must be hosted by a wall.",
          answer: false,
          explain: "Only some components are wall-hosted. Many, like a chair or table, are free-standing and rest on a level or floor."
        },
        {
          type: "order",
          q: "Order the steps to place a piece of furniture.",
          items: ["Load the furniture family", "Select the component type", "Place it in the view", "Adjust its position"],
          explain: "Load the family if needed, pick the type, place an instance, then nudge or rotate it into position."
        },
        {
          type: "mcq",
          q: "Placing components correctly matters because schedules:",
          choices: ["Read live data from the placed components", "Ignore all components", "Delete components", "Change their category"],
          answer: 0,
          explain: "Schedules read the live model, so correctly placed and categorized components produce accurate counts and data."
        }
      ]
    },
    {
      id: "l55",
      title: "Openings",
      intro: "Dedicated opening tools cut holes through walls, floors, roofs, and shafts where you need them.",
      questions: [
        {
          type: "mcq",
          q: "A shaft opening is useful for cutting a hole through:",
          choices: ["Multiple floors and roofs at once", "A single window", "A door tag", "A grid line"],
          answer: 0,
          explain: "A shaft opening cuts vertically through the floors and roofs it passes, which is handy for elevators or stairwells."
        },
        {
          type: "truefalse",
          q: "A wall opening can create a hole in a wall without placing a door or window.",
          answer: true,
          explain: "The wall opening tool cuts a rectangular hole directly in a wall when you do not want a hosted door or window."
        },
        {
          type: "fill",
          q: "A ____ opening cuts vertically through every floor and roof it crosses.",
          answer: "shaft",
          accept: ["shaft"],
          explain: "A shaft opening spans a range of levels and cuts every floor and roof within that range."
        },
        {
          type: "mcq",
          q: "To cut a hole for a skylight through a sloped roof, you would use a:",
          choices: ["Vertical or by-face roof opening", "Wall opening", "Door", "Grid"],
          answer: 0,
          explain: "Roof openings can be cut vertically or by face to make holes for elements like skylights or dormers."
        },
        {
          type: "match",
          q: "Match each opening type to what it cuts.",
          pairs: [["Wall opening", "A hole in a wall"], ["Shaft opening", "A vertical hole through floors"], ["Dormer opening", "A hole in a roof for a dormer"]],
          explain: "Each opening tool targets a specific host: walls, stacked floors, or a roof for a dormer."
        },
        {
          type: "truefalse",
          q: "A shaft opening only affects the single floor it is drawn on.",
          answer: false,
          explain: "A shaft opening cuts through all floors and roofs within its defined level range, not just one floor."
        },
        {
          type: "order",
          q: "Order the steps to add a shaft opening for a stairwell.",
          items: ["Start the shaft opening tool", "Sketch the opening boundary", "Set the base and top constraints", "Finish to cut the floors"],
          explain: "Begin the tool, sketch the shape, set how far up and down it reaches, then finish to cut the affected floors."
        }
      ]
    },
    {
      id: "l56",
      title: "Constraints & Alignment",
      intro: "Align, lock, and dimensional constraints keep elements related so the model updates predictably.",
      questions: [
        {
          type: "mcq",
          q: "The Align tool is used to:",
          choices: ["Line up one element with a reference", "Delete an element", "Create a new level", "Change a category"],
          answer: 0,
          explain: "Align lets you match one element to a reference edge or line, and you can then lock that relationship."
        },
        {
          type: "truefalse",
          q: "After aligning two elements you can lock the alignment so they move together.",
          answer: true,
          explain: "A locked alignment creates a constraint, so moving the reference also moves the aligned element."
        },
        {
          type: "fill",
          q: "Clicking the padlock icon after aligning adds a ____ so the relationship is preserved.",
          answer: "constraint",
          accept: ["constraint", "lock"],
          explain: "The lock turns a one-time alignment into a persistent constraint that the model maintains as things change."
        },
        {
          type: "mcq",
          q: "A locked dimension between two walls does what if you move one wall?",
          choices: ["Keeps the set distance by moving the other", "Deletes both walls", "Changes the level", "Removes the dimension"],
          answer: 0,
          explain: "A locked dimensional constraint holds the distance, so adjusting one element drives the other to keep the value."
        },
        {
          type: "match",
          q: "Match each constraint tool to its effect.",
          pairs: [["Align and lock", "Keep edges lined up"], ["Locked dimension", "Hold a fixed distance"], ["Padlock icon", "Toggle a constraint on"]],
          explain: "Align and lock keeps edges together, a locked dimension fixes a distance, and the padlock toggles the constraint."
        },
        {
          type: "truefalse",
          q: "Over-constraining a model can make Revit warn that it cannot satisfy all constraints.",
          answer: true,
          explain: "If constraints conflict, Revit reports that it cannot keep them all, so use locks purposefully."
        },
        {
          type: "order",
          q: "Order the steps to align and lock a door to a wall face.",
          items: ["Start the Align tool", "Pick the reference face", "Pick the element to move", "Click the padlock to lock it"],
          explain: "Start Align, select the reference, select the element, and click the padlock to make the alignment a constraint."
        },
        {
          type: "mcq",
          q: "Why use locked constraints instead of just moving elements by eye?",
          choices: ["The model keeps relationships as it changes", "It hides elements", "It deletes dimensions", "It changes the view scale"],
          answer: 0,
          explain: "Constraints capture design intent so the model stays coordinated automatically when you edit related elements."
        }
      ]
    }
  ]
});
