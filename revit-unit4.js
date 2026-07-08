window.ACADEMY.addUnit("revit", {
  id: "unit-4",
  title: "Levels, Grids & Work Planes",
  color: "#ce82ff",
  icon: "📏",
  description: "The datums that structure and locate the whole model.",
  lessons: [
    {
      id: "l25",
      title: "Levels",
      intro: "Levels are horizontal datums that set floor heights and host most building elements.",
      questions: [
        {
          type: "mcq",
          q: "What is a Level in Revit?",
          choices: ["A horizontal datum plane at a defined height", "A type of wall", "A view template", "A schedule field"],
          answer: 0,
          explain: "A Level is a horizontal datum that marks a height in the model, such as a floor or roof line."
        },
        {
          type: "truefalse",
          q: "Levels are the reference many building elements are hosted to.",
          answer: true,
          explain: "Floors, walls, ceilings, and many other elements are placed relative to a Level."
        },
        {
          type: "mcq",
          q: "In which views are Levels normally created and edited?",
          choices: ["Section and elevation views", "Floor plan views", "Schedules", "3D views only"],
          answer: 0,
          explain: "Because Levels are horizontal, you see and edit them best in sections and elevations where their heights are visible."
        },
        {
          type: "fill",
          q: "Creating a new Level can also create an associated floor ____ view for that height.",
          answer: "plan",
          accept: ["plan", "plan view", "floor plan"],
          explain: "New Levels can generate matching plan views so you have a place to draw at that height."
        },
        {
          type: "truefalse",
          q: "Every Level automatically has a plan view associated with it.",
          answer: false,
          explain: "A Level can exist without a plan view; some Levels (like a top-of-parapet reference) are created without one."
        },
        {
          type: "mcq",
          q: "What does the number shown on a Level line usually represent?",
          choices: ["Its elevation height", "Its area", "Its material", "Its phase"],
          answer: 0,
          explain: "The Level head shows the elevation, the vertical height of that datum relative to a reference."
        },
        {
          type: "order",
          q: "Order these from lowest to highest in a typical building.",
          items: ["Basement", "Level 1", "Level 2", "Roof"],
          explain: "Levels stack by elevation, so the basement sits lowest and the roof highest."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Level", "A horizontal datum at a height"], ["Elevation", "The height value of a datum"]],
          explain: "A Level is the datum itself; its elevation is the number describing how high it sits."
        }
      ]
    },
    {
      id: "l26",
      title: "Grids",
      intro: "Grids are labeled datums used to locate columns and structure across the model.",
      questions: [
        {
          type: "mcq",
          q: "What are Grids mainly used to locate?",
          choices: ["Columns and structural members", "Levels", "Room tags", "Sheet borders"],
          answer: 0,
          explain: "Grids form a labeled reference network that positions columns and other structure."
        },
        {
          type: "truefalse",
          q: "Grid lines are commonly labeled with numbers in one direction and letters in the other.",
          answer: true,
          explain: "A typical convention labels one axis 1, 2, 3 and the crossing axis A, B, C to name intersections like B-3."
        },
        {
          type: "mcq",
          q: "In which view type are Grids usually drawn?",
          choices: ["Plan views", "Schedules", "Legends", "Drafting views"],
          answer: 0,
          explain: "Grids are vertical planes, so you draw them in plan where their positions are easiest to set."
        },
        {
          type: "fill",
          q: "A Grid is a vertical datum ____ that appears as a line in plan and as a line in elevation.",
          answer: "plane",
          accept: ["plane", "datum plane"],
          explain: "Like Levels, a Grid is really a plane; you see it edge-on as a line in different views."
        },
        {
          type: "truefalse",
          q: "Grids only appear in plan views and never in sections or elevations.",
          answer: false,
          explain: "Because a Grid is a vertical plane, it can also cut through and display in sections and elevations."
        },
        {
          type: "order",
          q: "Order these steps for setting up a simple column layout.",
          items: ["Draw grid lines", "Label the grids", "Place columns at grid intersections", "Check alignment"],
          explain: "You lay out the grid and name it first, then snap structure to the intersections."
        },
        {
          type: "match",
          q: "Match the datum to what it primarily locates.",
          pairs: [["Level", "Vertical heights"], ["Grid", "Column and structure positions"]],
          explain: "Levels handle how high things are; Grids handle where columns land in plan."
        },
        {
          type: "mcq",
          q: "What is shown inside the bubble at the end of a Grid line?",
          choices: ["The grid label", "The material", "The area", "The phase"],
          answer: 0,
          explain: "The grid head bubble displays the label, such as 1 or A, used to name intersections."
        }
      ]
    },
    {
      id: "l27",
      title: "Reference Planes",
      intro: "Reference Planes are construction lines you use as work planes and to drive constraints.",
      questions: [
        {
          type: "mcq",
          q: "What is a Reference Plane best described as?",
          choices: ["A construction line used as a work plane or constraint", "A finished wall", "A printed sheet", "A schedule"],
          answer: 0,
          explain: "A Reference Plane is an infinite work-plane you draw to guide geometry and constraints, not a built element."
        },
        {
          type: "truefalse",
          q: "Reference Planes are especially useful when building families.",
          answer: true,
          explain: "In family editing, Reference Planes give geometry a skeleton to flex against as parameters change."
        },
        {
          type: "fill",
          q: "You can name a Reference Plane so it can be picked later as a ____ plane to model on.",
          answer: "work",
          accept: ["work", "work plane"],
          explain: "Naming a Reference Plane lets you select it by name when setting the active work plane."
        },
        {
          type: "mcq",
          q: "How do Reference Planes usually appear on a printed construction sheet?",
          choices: ["They do not print by default", "As bold solid walls", "As dimension strings", "As filled regions"],
          answer: 0,
          explain: "Reference Planes are drafting aids; they guide modeling but normally are not plotted on final sheets."
        },
        {
          type: "truefalse",
          q: "A Reference Plane is a physical building element like a wall or floor.",
          answer: false,
          explain: "It is a non-physical construction line used to organize and constrain real geometry."
        },
        {
          type: "match",
          q: "Match each item to its role.",
          pairs: [["Reference Plane", "Construction line and work plane"], ["Wall", "A built physical element"]],
          explain: "Reference Planes guide modeling; walls are the actual constructed geometry."
        },
        {
          type: "order",
          q: "Order these steps for using a Reference Plane as a work plane.",
          items: ["Draw the reference plane", "Name the reference plane", "Set it as the active work plane", "Model geometry on it"],
          explain: "Draw and name the plane first, then activate it so new geometry lands where you want."
        }
      ]
    },
    {
      id: "l28",
      title: "Hosting to Levels",
      intro: "Elements attach to a Level so they move and update when that Level moves.",
      questions: [
        {
          type: "mcq",
          q: "When a wall is hosted to Level 1 and Level 1 is raised, what happens?",
          choices: ["The wall moves up with the Level", "The wall is deleted", "The wall ignores the change", "The wall becomes a Grid"],
          answer: 0,
          explain: "Hosted elements follow their Level, so moving the Level shifts everything associated to it."
        },
        {
          type: "truefalse",
          q: "A wall usually has a base constraint set to a Level.",
          answer: true,
          explain: "Walls reference a base Level (and often a top constraint) that define where they start and end vertically."
        },
        {
          type: "fill",
          q: "The Level a wall starts from is set by its base ____ property.",
          answer: "constraint",
          accept: ["constraint", "level constraint"],
          explain: "The base constraint tells the wall which Level to sit on."
        },
        {
          type: "mcq",
          q: "Why is Level-hosting helpful when a design changes?",
          choices: ["Hosted elements update together automatically", "It hides the elements", "It prints faster", "It locks the file"],
          answer: 0,
          explain: "Because elements track their Level, one datum edit updates many elements at once, keeping the model coordinated."
        },
        {
          type: "truefalse",
          q: "Moving a Level has no effect on elements hosted to it.",
          answer: false,
          explain: "The whole point of hosting is that those elements move with the Level."
        },
        {
          type: "match",
          q: "Match the property to what it controls.",
          pairs: [["Base constraint", "Which Level a wall starts from"], ["Top constraint", "Where the wall ends vertically"]],
          explain: "Base and top constraints tie a wall to Levels so it flexes when they change."
        },
        {
          type: "order",
          q: "Order what happens when you raise a hosted Level.",
          items: ["Edit the Level elevation", "Level moves to the new height", "Hosted elements follow", "Model stays coordinated"],
          explain: "The datum edit ripples down to everything hosted, keeping heights consistent."
        }
      ]
    },
    {
      id: "l29",
      title: "Setting the Work Plane",
      intro: "The work plane is the surface you model on, and choosing it correctly keeps geometry where you expect.",
      questions: [
        {
          type: "mcq",
          q: "What is the work plane?",
          choices: ["The plane new geometry is drawn on", "The active sheet", "The current schedule", "The print size"],
          answer: 0,
          explain: "The work plane defines the flat surface where sketch and model geometry is placed."
        },
        {
          type: "truefalse",
          q: "A Level, a Grid, or a named Reference Plane can be used as a work plane.",
          answer: true,
          explain: "Any of these datum planes can be picked as the active plane to model against."
        },
        {
          type: "fill",
          q: "Picking the wrong work plane can place geometry at the wrong ____ in the model.",
          answer: "height",
          accept: ["height", "elevation", "location"],
          explain: "Since the work plane sets the reference surface, the wrong one drops geometry at an unexpected height or spot."
        },
        {
          type: "mcq",
          q: "Which is a good habit before sketching model geometry in 3D?",
          choices: ["Confirm the active work plane", "Delete all Levels", "Turn off the model", "Rename the file"],
          answer: 0,
          explain: "Checking the active plane first avoids drawing on the wrong surface."
        },
        {
          type: "truefalse",
          q: "Naming a Reference Plane makes it easier to select as a work plane.",
          answer: true,
          explain: "A named plane can be chosen by name, which is clearer than picking an unnamed line."
        },
        {
          type: "order",
          q: "Order these steps to model on a specific plane.",
          items: ["Choose the work plane", "Verify it is correct", "Sketch or model geometry", "Review the result in 3D"],
          explain: "Set and confirm the plane before drawing so geometry lands where intended."
        },
        {
          type: "match",
          q: "Match each plane to a common use as a work plane.",
          pairs: [["Level", "Model at a floor height"], ["Named reference plane", "Model on a custom surface"]],
          explain: "Levels give you floor heights; named reference planes let you model on any custom orientation."
        }
      ]
    },
    {
      id: "l30",
      title: "Scope Boxes",
      intro: "A Scope Box is a 3D region that controls how far datums extend and can crop the extents of the views assigned to it.",
      questions: [
        {
          type: "mcq",
          q: "What does a Scope Box mainly control?",
          choices: ["The extents of datums like Grids and Reference Planes", "The wall material", "The sheet number", "The text font"],
          answer: 0,
          explain: "A Scope Box crops the extents of Grids and Reference Planes so they behave consistently across views."
        },
        {
          type: "truefalse",
          q: "Assigning Grids to a Scope Box helps keep their extents consistent across many views.",
          answer: true,
          explain: "One Scope Box can drive many datums so they all crop the same way, which is handy on large projects."
        },
        {
          type: "fill",
          q: "A Scope Box is a three-dimensional ____ that you can assign datums and views to.",
          answer: "region",
          accept: ["region", "box", "volume"],
          explain: "It is a 3D region; datums assigned to it are cropped to that volume."
        },
        {
          type: "mcq",
          q: "Why are Scope Boxes useful on large buildings split into areas?",
          choices: ["They limit datums and views to a defined zone", "They speed up printing only", "They change materials", "They rename sheets"],
          answer: 0,
          explain: "You can confine Grids and views to a wing or zone, keeping each area clean."
        },
        {
          type: "truefalse",
          q: "A Scope Box can only affect a single view at a time.",
          answer: false,
          explain: "A Scope Box can control extents across many views and datums at once."
        },
        {
          type: "match",
          q: "Match each item to what a Scope Box does with it.",
          pairs: [["Grids", "Crops their extent to the box"], ["Views", "Can be limited to the box region"]],
          explain: "Scope Boxes crop datum extents and can bound which region a view covers."
        },
        {
          type: "order",
          q: "Order these steps to use a Scope Box for a building wing.",
          items: ["Create the scope box", "Size it around the wing", "Assign grids to the scope box", "Grids crop to that wing"],
          explain: "Make and size the box, assign datums, and they crop to match the zone."
        }
      ]
    },
    {
      id: "l31",
      title: "2D vs 3D Datum Extents",
      intro: "Datums have separate 2D and 3D extents, which explains why a Grid can show in one view but not another.",
      questions: [
        {
          type: "mcq",
          q: "What controls whether a datum reaches into a given view at all?",
          choices: ["Its 3D extent", "Its color", "Its label font", "Its phase"],
          answer: 0,
          explain: "The 3D extent is the model-wide reach; if a view is outside it, the datum will not appear there."
        },
        {
          type: "truefalse",
          q: "The 2D extent of a datum affects only the view you edit it in.",
          answer: true,
          explain: "A 2D drag changes the datum in that single view without moving it everywhere."
        },
        {
          type: "mcq",
          q: "You drag a Grid endpoint in one plan and it does not change elsewhere. Which extent did you edit?",
          choices: ["The 2D extent", "The 3D extent", "The phase", "The scope box"],
          answer: 0,
          explain: "A 2D edit is view-specific, so other views keep their own display."
        },
        {
          type: "fill",
          q: "The extent that applies to the whole model across views is the ____ extent.",
          answer: "3d",
          accept: ["3d", "three dimensional", "three-dimensional", "model"],
          explain: "The 3D extent is global; the 2D extent is per view."
        },
        {
          type: "truefalse",
          q: "A Grid missing from a view is always caused by a deleted Grid.",
          answer: false,
          explain: "More often the view simply sits outside the datum 3D extent or the extent was pulled back."
        },
        {
          type: "match",
          q: "Match each extent to its scope.",
          pairs: [["2D extent", "Only the current view"], ["3D extent", "All applicable views in the model"]],
          explain: "2D is local to one view; 3D reaches across the model."
        },
        {
          type: "order",
          q: "Order these steps to troubleshoot a Grid missing from a view.",
          items: ["Confirm the grid still exists", "Check the 3D extent reaches the view", "Check the 2D extent in that view", "Adjust extents so it shows"],
          explain: "Rule out deletion, then check that the datum reach and per-view display include the view."
        },
        {
          type: "mcq",
          q: "Why does Revit separate 2D and 3D datum extents?",
          choices: ["So you can tidy a view without changing others", "To change materials", "To reduce file size", "To rename sheets"],
          answer: 0,
          explain: "The split lets you clean up one drawing without disturbing the datum everywhere else."
        }
      ]
    },
    {
      id: "l32",
      title: "Base Point & Survey Point",
      intro: "The Project Base Point and Survey Point locate the model in real-world coordinates.",
      questions: [
        {
          type: "mcq",
          q: "What does the Survey Point represent?",
          choices: ["A known real-world reference point on the site", "The wall thickness", "The sheet size", "The print scale"],
          answer: 0,
          explain: "The Survey Point ties the model to a real-world location, such as a surveyed site benchmark."
        },
        {
          type: "truefalse",
          q: "The Project Base Point provides a reference origin for positioning the building in the project.",
          answer: true,
          explain: "The Project Base Point is a project origin used to locate the building relative to the site."
        },
        {
          type: "mcq",
          q: "Why do these points matter when coordinating with other models?",
          choices: ["They enable Shared Coordinates so models line up", "They set the font", "They change phases", "They print faster"],
          answer: 0,
          explain: "Shared Coordinates rely on these points so linked models align in real-world position."
        },
        {
          type: "fill",
          q: "Aligning multiple linked models to a common real-world location uses ____ Coordinates.",
          answer: "shared",
          accept: ["shared"],
          explain: "Shared Coordinates let separate models agree on one real-world position and orientation."
        },
        {
          type: "truefalse",
          q: "The Survey Point and Project Base Point are the same thing.",
          answer: false,
          explain: "They are two distinct points; the Survey Point is the real-world reference and the Base Point is the project origin."
        },
        {
          type: "match",
          q: "Match each point to its role.",
          pairs: [["Survey Point", "Real-world site reference"], ["Project Base Point", "Project origin for the building"]],
          explain: "The Survey Point anchors to the real world; the Base Point anchors the project."
        },
        {
          type: "order",
          q: "Order these steps to coordinate a model with a site survey.",
          items: ["Get the surveyed real-world reference", "Set the survey point to that location", "Establish shared coordinates", "Linked models align in real-world position"],
          explain: "Anchor the survey reference, then share coordinates so links line up correctly."
        },
        {
          type: "mcq",
          q: "Shared Coordinates are mainly about making sure that what happens?",
          choices: ["Linked models sit in the correct relative real-world position", "Walls change color", "Schedules sort faster", "Views print in color"],
          answer: 0,
          explain: "The goal is correct real-world positioning so multiple models overlay accurately."
        }
      ]
    }
  ]
});
