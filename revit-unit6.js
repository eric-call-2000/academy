window.ACADEMY.addUnit("revit", {
  id: "unit-6",
  title: "Modeling Walls, Floors & Roofs",
  color: "#2bb3a3",
  icon: "🧱",
  description: "Building the core shell elements of a model.",
  lessons: [
    {
      id: "l41",
      title: "Placing Walls",
      intro: "Learn how wall height, location line, and sketch direction shape a wall as you place it.",
      questions: [
        {
          type: "mcq",
          q: "What kind of family are basic Revit walls?",
          choices: ["System family", "Loadable family", "In-place family", "Annotation family"],
          answer: 0,
          explain: "Walls, floors, and roofs are System families defined inside the project, not loaded from .rfa files."
        },
        {
          type: "mcq",
          q: "The wall Location Line setting controls what?",
          choices: ["Which plane of the wall follows the line you draw", "The wall material", "The wall color in a view", "The room the wall belongs to"],
          answer: 0,
          explain: "Location Line (for example Wall Centerline or Finish Face) decides which plane of the wall lands on the sketch line."
        },
        {
          type: "truefalse",
          q: "A wall can be set to reach up to a level using an unconnected height instead of a top constraint.",
          answer: true,
          explain: "You can give a wall an explicit Unconnected Height or constrain its top to a level; both are valid ways to set height."
        },
        {
          type: "fill",
          q: "The setting that ties a wall top or base to a level is called a ____.",
          answer: "constraint",
          accept: ["constraint", "top constraint", "base constraint"],
          explain: "Constraining a wall to a level means it updates automatically if that level moves."
        },
        {
          type: "match",
          q: "Match each wall placement setting to what it does.",
          pairs: [
            ["Base Constraint", "The level the wall starts from"],
            ["Top Constraint", "The level or height the wall reaches"],
            ["Location Line", "Which wall plane follows the sketch line"]
          ],
          explain: "These instance settings define where a wall begins, ends, and how it aligns to your line."
        },
        {
          type: "truefalse",
          q: "The direction you draw a wall can flip which side is treated as the exterior face.",
          answer: true,
          explain: "Sketch direction sets the wall orientation; you can flip it later with the flip control if the exterior face is on the wrong side."
        },
        {
          type: "order",
          q: "Order these steps for placing a straight wall.",
          items: ["Start the Wall tool", "Pick the wall Type", "Set height and location line", "Click a start and end point"],
          explain: "Choose the type and options first so the wall is drawn with the right settings from the start."
        }
      ]
    },
    {
      id: "l42",
      title: "Wall Structure & Layers",
      intro: "See how compound walls are built from material layers, each with a function and thickness.",
      questions: [
        {
          type: "mcq",
          q: "Where do you define the layers of a compound wall?",
          choices: ["In the wall Type's Structure (Edit Assembly)", "In the Materials browser only", "In the project Levels", "In a schedule"],
          answer: 0,
          explain: "Editing the wall Type's Structure opens the assembly where you add, order, and size material layers."
        },
        {
          type: "mcq",
          q: "Which layer function usually carries the main load in a wall assembly?",
          choices: ["Structure", "Finish 1", "Thermal/Air", "Membrane Layer"],
          answer: 0,
          explain: "The Structure function marks the core structural layer; other functions handle finishes, insulation, or barriers."
        },
        {
          type: "truefalse",
          q: "The Core Boundary separates the structural core layers from the finish layers in a compound wall.",
          answer: true,
          explain: "Core Boundaries wrap the core layers, and settings like Location Line can reference the core face."
        },
        {
          type: "fill",
          q: "A wall made of several stacked material layers is called a ____ wall.",
          answer: "compound",
          accept: ["compound"],
          explain: "A compound wall has multiple layers, unlike a single-layer basic wall."
        },
        {
          type: "match",
          q: "Match each layer function to its typical role.",
          pairs: [
            ["Structure", "Load-bearing core layer"],
            ["Thermal/Air", "Insulation or air gap"],
            ["Finish 1", "Exterior or interior finish"]
          ],
          explain: "Layer functions control priority for joins and clarify each layer's purpose."
        },
        {
          type: "truefalse",
          q: "Every material layer in a wall must have the same thickness.",
          answer: false,
          explain: "Each layer has its own thickness; you set them independently in the assembly."
        },
        {
          type: "mcq",
          q: "Layer function priority mainly affects what during modeling?",
          choices: ["How layers clean up when walls join", "The wall's color on screen", "Which level hosts the wall", "The wall's tag text"],
          answer: 0,
          explain: "Function priority tells Revit which layers connect through at wall joins for correct cleanup."
        }
      ]
    },
    {
      id: "l43",
      title: "Floors",
      intro: "Create floors by sketching a closed boundary, then set structure and slope.",
      questions: [
        {
          type: "mcq",
          q: "How is a floor's shape defined in Revit?",
          choices: ["By sketching a closed boundary loop", "By dragging a corner handle", "By picking two points like a wall", "By typing an area value"],
          answer: 0,
          explain: "A floor is created from a closed 2D sketch boundary that Revit extrudes down to the floor thickness."
        },
        {
          type: "truefalse",
          q: "A floor boundary sketch must form a closed loop with no gaps.",
          answer: true,
          explain: "Open or crossing sketch lines will not create a valid floor; the loop must close."
        },
        {
          type: "fill",
          q: "Like walls, a floor's layers are edited in its Type ____ (the Edit Assembly).",
          answer: "structure",
          accept: ["structure", "assembly"],
          explain: "Floors are compound too; you edit their material layers in the Type's structure."
        },
        {
          type: "mcq",
          q: "Which tool adds a slope to a flat floor sketch?",
          choices: ["A slope arrow", "A grid line", "A reference plane", "A room separator"],
          answer: 0,
          explain: "A slope arrow drawn in the floor sketch tells Revit the direction and amount of fall."
        },
        {
          type: "match",
          q: "Match each floor concept to its meaning.",
          pairs: [
            ["Boundary", "The closed edge of the floor"],
            ["Slope Arrow", "Direction and amount of fall"],
            ["Structure", "The material layers of the floor"]
          ],
          explain: "Boundary sets shape, slope arrow sets tilt, and structure sets the layer makeup."
        },
        {
          type: "order",
          q: "Order these steps to make a sloped floor.",
          items: ["Start the Floor tool", "Sketch the closed boundary", "Add a slope arrow", "Finish the sketch"],
          explain: "Draw the boundary first, add slope inside it, then finish to create the floor."
        },
        {
          type: "truefalse",
          q: "Editing a floor's boundary later requires re-entering its sketch mode.",
          answer: true,
          explain: "Selecting the floor and choosing Edit Boundary reopens the sketch so you can change its shape."
        }
      ]
    },
    {
      id: "l44",
      title: "Roofs",
      intro: "Compare roof by footprint, which uses a plan outline, with roof by extrusion, which uses a profile.",
      questions: [
        {
          type: "mcq",
          q: "Roof by Footprint creates a roof from what?",
          choices: ["A closed plan outline with slope-defining edges", "A single side profile", "A picked pair of points", "An imported mesh"],
          answer: 0,
          explain: "Footprint roofs use a plan-view boundary where you flag which edges define slopes."
        },
        {
          type: "mcq",
          q: "Roof by Extrusion is best for what kind of roof?",
          choices: ["A curved or shaped profile pushed along a length", "A simple flat pad", "A four-sided hip on a rectangle", "A floor opening"],
          answer: 0,
          explain: "Extrusion roofs sweep a side profile you sketch, which suits curved or unusual shapes."
        },
        {
          type: "truefalse",
          q: "In Roof by Footprint you flag which boundary edges define a slope.",
          answer: true,
          explain: "Each footprint edge can be set to define a slope or stay flat, controlling the roof form."
        },
        {
          type: "fill",
          q: "Roof by Extrusion sweeps a side ____ that you sketch on a work plane.",
          answer: "profile",
          accept: ["profile"],
          explain: "You draw the roof's profile in section or elevation, and Revit extrudes it along the building."
        },
        {
          type: "match",
          q: "Match each roof method to how you define it.",
          pairs: [
            ["Roof by Footprint", "Plan outline with sloped edges"],
            ["Roof by Extrusion", "Side profile pushed along a length"]
          ],
          explain: "Footprint works from a plan boundary; extrusion works from a profile shape."
        },
        {
          type: "truefalse",
          q: "Roof by Extrusion is usually sketched in a plan view.",
          answer: false,
          explain: "Extrusion profiles are sketched in an elevation or section on a vertical work plane, not in plan."
        },
        {
          type: "order",
          q: "Order these steps for a footprint roof.",
          items: ["Open a plan at the roof level", "Start Roof by Footprint", "Sketch the boundary and set sloped edges", "Finish the sketch"],
          explain: "You work in plan, sketch the outline, flag slopes, then finish to generate the roof."
        }
      ]
    },
    {
      id: "l45",
      title: "Ceilings",
      intro: "Place ceilings automatically inside bounded rooms or draw them with a sketched boundary.",
      questions: [
        {
          type: "mcq",
          q: "The Automatic Ceiling option places a ceiling how?",
          choices: ["By clicking inside a space enclosed by walls", "By picking two corner points", "By importing a CAD file", "By copying a floor"],
          answer: 0,
          explain: "Automatic ceilings fill a bounded region when you click inside walls that enclose it."
        },
        {
          type: "mcq",
          q: "When would you use a sketched ceiling instead of an automatic one?",
          choices: ["When the space is not fully bounded or needs a custom shape", "When the room is a simple rectangle", "When you want no ceiling", "When placing a door"],
          answer: 0,
          explain: "Sketching lets you draw any boundary, useful when walls do not fully enclose the area."
        },
        {
          type: "truefalse",
          q: "Ceilings are typically placed and viewed in a reflected ceiling plan.",
          answer: true,
          explain: "Reflected ceiling plans look upward, so they are the natural view for ceiling work."
        },
        {
          type: "fill",
          q: "A ceiling can be raised above the floor by setting its height offset from the ____.",
          answer: "level",
          accept: ["level", "level below"],
          explain: "The Height Offset From Level parameter lifts the ceiling to the correct elevation."
        },
        {
          type: "match",
          q: "Match each ceiling approach to when it fits.",
          pairs: [
            ["Automatic Ceiling", "Click inside a fully bounded room"],
            ["Sketch Ceiling", "Draw a custom or open boundary"]
          ],
          explain: "Automatic is fast for closed rooms; sketching handles anything irregular."
        },
        {
          type: "truefalse",
          q: "An automatic ceiling can fill a room even when the walls leave a large gap.",
          answer: false,
          explain: "Automatic placement needs an enclosed boundary; a gap usually means you must sketch it instead."
        },
        {
          type: "mcq",
          q: "Which view type is designed to show ceiling layouts?",
          choices: ["Reflected ceiling plan", "Structural plan", "Drafting view", "Legend"],
          answer: 0,
          explain: "A reflected ceiling plan is the standard view for laying out and reading ceilings."
        }
      ]
    },
    {
      id: "l46",
      title: "Joining & Attaching",
      intro: "Clean up connections between elements with wall joins and by attaching walls to roofs and floors.",
      questions: [
        {
          type: "mcq",
          q: "What does the Attach Top/Base command do to a wall?",
          choices: ["Extends or trims the wall to meet a roof, floor, or ceiling", "Changes the wall material", "Deletes the wall", "Moves the wall to a new level"],
          answer: 0,
          explain: "Attaching lets a wall follow the shape of a target element like a sloped roof instead of stopping flat."
        },
        {
          type: "truefalse",
          q: "Attaching a wall to a roof keeps the wall linked so it updates if the roof changes.",
          answer: true,
          explain: "The attachment is a live relationship, so the wall reshapes when the target roof is edited."
        },
        {
          type: "mcq",
          q: "Wall joins mainly control what?",
          choices: ["How layers clean up where walls meet", "The wall's height", "The wall's phase", "The room name"],
          answer: 0,
          explain: "Join settings decide whether meeting walls miter, butt, or square off, cleaning up shared corners."
        },
        {
          type: "fill",
          q: "To make a wall follow a sloped roof above it, you ____ the wall to that roof.",
          answer: "attach",
          accept: ["attach"],
          explain: "Attaching the wall top to the roof extends each part of the wall up to the roof surface."
        },
        {
          type: "match",
          q: "Match each command to its result.",
          pairs: [
            ["Attach Top/Base", "Wall follows a roof or floor shape"],
            ["Detach Top/Base", "Wall returns to its own height"],
            ["Edit Wall Joins", "Change how corners clean up"]
          ],
          explain: "Attach and detach control the relationship; join editing controls corner cleanup."
        },
        {
          type: "truefalse",
          q: "Once attached, a wall can never be returned to a plain height.",
          answer: false,
          explain: "Detach Top/Base releases the wall so it goes back to its own constraint or height."
        },
        {
          type: "order",
          q: "Order these steps to make a wall meet a sloped roof.",
          items: ["Model the wall and the roof", "Select the wall", "Use Attach Top/Base", "Pick the roof as the target"],
          explain: "Build both elements, select the wall, run Attach, then pick the roof to follow."
        }
      ]
    },
    {
      id: "l47",
      title: "Editing Profiles & Openings",
      intro: "Reshape walls with Edit Profile and cut holes in walls, floors, and roofs with opening tools.",
      questions: [
        {
          type: "mcq",
          q: "What does Edit Profile let you do to a wall?",
          choices: ["Reshape its elevation outline, such as a gable or arch", "Change its wall type", "Move it to another level", "Rename it"],
          answer: 0,
          explain: "Edit Profile opens the wall's boundary sketch in elevation so you can change its silhouette."
        },
        {
          type: "truefalse",
          q: "Edit Profile can add a gable shape to the top of a straight wall.",
          answer: true,
          explain: "By editing the profile sketch, you can angle the top of a wall into a gable or other shape."
        },
        {
          type: "mcq",
          q: "Which tool cuts a vertical hole through a floor or roof?",
          choices: ["A shaft or vertical opening", "A slope arrow", "A grid", "A dimension"],
          answer: 0,
          explain: "Opening tools like a shaft or vertical opening cut a sketched hole through host elements."
        },
        {
          type: "fill",
          q: "To change a wall's silhouette you use the Edit ____ command.",
          answer: "profile",
          accept: ["profile"],
          explain: "Edit Profile is the command that exposes the wall's outline sketch for editing."
        },
        {
          type: "match",
          q: "Match each editing tool to its use.",
          pairs: [
            ["Edit Profile", "Reshape a wall's outline"],
            ["Wall Opening", "Cut a rectangular hole in a wall"],
            ["Shaft Opening", "Cut a hole through multiple floors"]
          ],
          explain: "Each tool targets a different way of reshaping or cutting a host element."
        },
        {
          type: "truefalse",
          q: "A shaft opening can cut through several floors at once across a range of levels.",
          answer: true,
          explain: "Shaft openings are defined between levels, so a single shaft can pass through many floors."
        },
        {
          type: "order",
          q: "Order these steps to cut a hole in a floor with a vertical opening.",
          items: ["Select the floor", "Start the Vertical or Shaft Opening tool", "Sketch the opening boundary", "Finish the sketch"],
          explain: "Pick the host, start the opening tool, sketch the hole, then finish to cut it."
        }
      ]
    },
    {
      id: "l48",
      title: "Model vs Detail Lines",
      intro: "Understand the difference between 3D model lines that live in space and 2D detail lines that live in one view.",
      questions: [
        {
          type: "mcq",
          q: "Where do model lines exist?",
          choices: ["In 3D space, visible in many views", "Only in the view you drew them", "Only in schedules", "Only on sheets"],
          answer: 0,
          explain: "Model lines are true 3D geometry, so they show up in plans, sections, and 3D views."
        },
        {
          type: "mcq",
          q: "Where do detail lines appear?",
          choices: ["Only in the single view where they were drawn", "In every 3D view", "In the schedule only", "In linked models"],
          answer: 0,
          explain: "Detail lines are 2D annotation that belong to just one view and do not appear elsewhere."
        },
        {
          type: "truefalse",
          q: "Detail lines are a kind of view-specific annotation.",
          answer: true,
          explain: "Detail lines live in one view like other annotation and are used to add 2D drafting information."
        },
        {
          type: "fill",
          q: "Lines that exist in real 3D space and show across views are called ____ lines.",
          answer: "model",
          accept: ["model"],
          explain: "Model lines are 3D and appear in any view that can see them."
        },
        {
          type: "match",
          q: "Match each line type to how it behaves.",
          pairs: [
            ["Model Line", "3D, shows in many views"],
            ["Detail Line", "2D, shows in one view only"]
          ],
          explain: "The key difference is whether the line lives in 3D space or in a single view."
        },
        {
          type: "truefalse",
          q: "A detail line drawn in a plan will automatically appear in the 3D view.",
          answer: false,
          explain: "Detail lines are view-specific, so they never carry over to other views like the 3D view."
        },
        {
          type: "mcq",
          q: "Which is the better choice for drawing an edge that must be seen in both plan and section?",
          choices: ["A model line", "A detail line", "A dimension", "A text note"],
          answer: 0,
          explain: "Because it is 3D, a model line will show in both the plan and the section."
        }
      ]
    }
  ]
});
