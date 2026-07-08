window.ACADEMY.addUnit("revit", {
  id: "unit-1",
  title: "Getting Started with Revit",
  color: "#58cc02",
  icon: "📐",
  description: "What Revit is and how it models a building as data, not just lines.",
  lessons: [
    {
      id: "l1",
      title: "What Is Revit?",
      intro: "Revit is Autodesk's BIM authoring app that builds one smart model of your building instead of a pile of separate drawings.",
      questions: [
        {
          type: "mcq",
          q: "What is Revit, in one sentence?",
          choices: [
            "A BIM authoring app that builds a parametric model of a building",
            "A spreadsheet program for cost estimates",
            "A photo editor for renderings",
            "A file-sharing website for drawings"
          ],
          answer: 0,
          explain: "Revit is Autodesk's BIM authoring application for architecture, structure, and MEP. It creates a model, not just drawings."
        },
        {
          type: "fill",
          q: "BIM stands for Building Information ____.",
          answer: "modeling",
          accept: ["modeling", "modelling"],
          explain: "BIM means Building Information Modeling: a model that carries data, not only geometry."
        },
        {
          type: "truefalse",
          q: "A Revit project is stored as one parametric database rather than many loose drawing files.",
          answer: true,
          explain: "Everything lives in a single model. Plans, sections, and schedules are all views of that one database."
        },
        {
          type: "mcq",
          q: "Which company makes Revit?",
          choices: ["Autodesk", "Adobe", "Microsoft", "Trimble"],
          answer: 0,
          explain: "Revit is an Autodesk product, part of the Autodesk AEC family of tools."
        },
        {
          type: "truefalse",
          q: "In Revit, a floor plan and a section can show the same wall because they read from the same model.",
          answer: true,
          explain: "Views are windows into one model, so any element you place appears in every relevant view automatically."
        },
        {
          type: "match",
          q: "Match each idea to what it means.",
          pairs: [
            ["BIM", "A model that carries data, not just lines"],
            ["Authoring app", "Software you use to create the model"],
            ["Parametric", "Geometry driven by adjustable values"]
          ],
          explain: "Revit is a parametric BIM authoring app, so its objects hold information and respond to changes in their values."
        },
        {
          type: "mcq",
          q: "Which of these is NOT a good description of Revit?",
          choices: [
            "Just a 2D line-drawing tool like a digital drafting board",
            "A tool that models real building elements",
            "A single-database BIM application",
            "Software used across architecture, structure, and MEP"
          ],
          answer: 0,
          explain: "Revit can produce 2D drawings, but it is far more than a line tool. It models intelligent building elements."
        }
      ]
    },
    {
      id: "l2",
      title: "BIM vs CAD",
      intro: "CAD draws dumb lines while Revit places intelligent objects that carry data and update everywhere at once.",
      questions: [
        {
          type: "mcq",
          q: "What is the key difference between BIM and traditional CAD?",
          choices: [
            "BIM objects carry data and relationships; CAD lines usually do not",
            "BIM is only for 2D and CAD is only for 3D",
            "CAD is newer than BIM",
            "BIM cannot produce printed drawings"
          ],
          answer: 0,
          explain: "In BIM a wall knows it is a wall with height, material, and cost. In CAD a wall is often just lines."
        },
        {
          type: "truefalse",
          q: "In a BIM model, changing an element in one view can update it in all other views automatically.",
          answer: true,
          explain: "Because every view reads the same model, editing an element once updates it everywhere it appears."
        },
        {
          type: "truefalse",
          q: "In traditional CAD, moving a door in a plan automatically fixes the door in every elevation for you.",
          answer: false,
          explain: "Plain CAD drawings are separate, so you often edit each view by hand. BIM keeps them coordinated."
        },
        {
          type: "match",
          q: "Match each tool style to how it stores a wall.",
          pairs: [
            ["CAD", "A set of lines with no built-in meaning"],
            ["BIM", "An object that knows its height, material, and type"]
          ],
          explain: "CAD stores geometry; BIM stores intelligent objects that carry information about the real building part."
        },
        {
          type: "fill",
          q: "In BIM you change something ____ and it updates everywhere it appears.",
          answer: "once",
          accept: ["once", "one time"],
          explain: "Single source of truth: one edit to the model flows to every view, schedule, and tag."
        },
        {
          type: "mcq",
          q: "Why does BIM reduce coordination errors compared to loose CAD files?",
          choices: [
            "All views come from one coordinated model",
            "It prints faster",
            "It uses fewer colors",
            "It hides all dimensions"
          ],
          answer: 0,
          explain: "One model means plans, sections, and schedules stay in sync, so they are far less likely to disagree."
        },
        {
          type: "truefalse",
          q: "A Revit schedule is just a static table you type by hand.",
          answer: false,
          explain: "Schedules read live data from the model. Change the model and the schedule updates itself."
        }
      ]
    },
    {
      id: "l3",
      title: "Revit File Types",
      intro: "Revit uses a small set of file types: rvt for projects, rte for templates, rfa for families, plus links to other models.",
      questions: [
        {
          type: "match",
          q: "Match each Revit file extension to what it is.",
          pairs: [
            [".rvt", "A Revit project model"],
            [".rte", "A Revit project template"],
            [".rfa", "A loadable Revit family"]
          ],
          explain: "rvt is the project you work in, rte is a starting-point template, and rfa is a loadable family like a door."
        },
        {
          type: "mcq",
          q: "Which file type is the actual project you open and build in?",
          choices: [".rvt", ".rte", ".rfa", ".dwg"],
          answer: 0,
          explain: "The .rvt file is the project model. That is the file your whole team works inside."
        },
        {
          type: "fill",
          q: "A reusable starting point with your standards preloaded is a Revit ____ file, ending in rte.",
          answer: "template",
          accept: ["template"],
          explain: "An rte template holds standards and settings so new projects start consistent instead of blank."
        },
        {
          type: "truefalse",
          q: "A loadable family such as a door or window is saved as an rfa file.",
          answer: true,
          explain: "Loadable families live in .rfa files and get loaded into projects. Doors, windows, and furniture are common examples."
        },
        {
          type: "mcq",
          q: "What is a linked model in Revit?",
          choices: [
            "Another model referenced into yours without merging into it",
            "A backup copy of your project",
            "A printed PDF of the model",
            "A deleted file in the recycle bin"
          ],
          answer: 0,
          explain: "Linking references another file (RVT, CAD, or IFC) so you can see it while it stays a separate model."
        },
        {
          type: "truefalse",
          q: "You can link CAD and IFC files into a Revit project, not only other rvt models.",
          answer: true,
          explain: "Revit links RVT, CAD, and IFC files, which helps you coordinate with other teams and software."
        },
        {
          type: "order",
          q: "Order these from smallest scope to largest scope.",
          items: [
            "A single loadable family (rfa)",
            "A project template (rte)",
            "A full project model (rvt)"
          ],
          explain: "A family is one component, a template seeds a project, and the project model contains the whole building."
        }
      ]
    },
    {
      id: "l4",
      title: "The Disciplines",
      intro: "Architecture, Structure, and MEP are all authored in the same Revit platform so teams can coordinate in one place.",
      questions: [
        {
          type: "fill",
          q: "In Revit, MEP stands for Mechanical, Electrical, and ____.",
          answer: "plumbing",
          accept: ["plumbing"],
          explain: "MEP covers Mechanical, Electrical, and Plumbing systems, the building services side of a project."
        },
        {
          type: "match",
          q: "Match each discipline to an example of what it models.",
          pairs: [
            ["Architecture", "Walls, doors, and floors"],
            ["Structure", "Columns, beams, and foundations"],
            ["MEP", "Ducts, wiring, and pipes"]
          ],
          explain: "Each discipline focuses on different elements, but all three are built inside the same Revit platform."
        },
        {
          type: "mcq",
          q: "Which statement about Revit disciplines is true?",
          choices: [
            "Architecture, Structure, and MEP share the same Revit platform",
            "Each discipline needs a totally different program",
            "Only architects can use Revit",
            "MEP work must be done in a spreadsheet"
          ],
          answer: 0,
          explain: "One platform serves all three disciplines, which is a big reason Revit is strong for coordination."
        },
        {
          type: "truefalse",
          q: "Structural engineers model columns, beams, and foundations in Revit.",
          answer: true,
          explain: "The Structure discipline handles the load-carrying frame: columns, beams, braces, and foundations."
        },
        {
          type: "truefalse",
          q: "Ducts and pipes are typically part of the Architecture discipline, not MEP.",
          answer: false,
          explain: "Ducts, pipes, and wiring belong to MEP. Architecture handles walls, doors, floors, and finishes."
        },
        {
          type: "mcq",
          q: "How do separate discipline models usually work together in Revit?",
          choices: [
            "They are linked so each team sees the others while keeping its own model",
            "They are all forced into one person's file",
            "They never see each other",
            "They are emailed as printed pages only"
          ],
          answer: 0,
          explain: "Teams often keep separate models and link them, so each discipline coordinates without merging files."
        },
        {
          type: "order",
          q: "Order these disciplines by what they typically model, from the outer shell inward.",
          items: [
            "Architecture: walls and finishes",
            "Structure: the load-bearing frame",
            "MEP: services running through the building"
          ],
          explain: "This is just one helpful way to picture the layers. All three are authored in the same Revit platform."
        }
      ]
    },
    {
      id: "l5",
      title: "Parametric Thinking",
      intro: "Revit elements are driven by parameters and relationships, so you change values instead of redrawing fixed geometry.",
      questions: [
        {
          type: "mcq",
          q: "What does parametric mean in Revit?",
          choices: [
            "Geometry is driven by adjustable values and rules",
            "Every shape is locked and cannot change",
            "Only colors can be changed",
            "The model is a flat picture"
          ],
          answer: 0,
          explain: "Parametric means values like height or width drive the geometry, so editing a number reshapes the element."
        },
        {
          type: "truefalse",
          q: "To make a wall taller in Revit, you usually change a height parameter rather than redraw it.",
          answer: true,
          explain: "You edit the parameter and the wall updates. That is faster and less error-prone than redrawing."
        },
        {
          type: "match",
          q: "Match each parameter scope to what it controls.",
          pairs: [
            ["Type parameter", "Applies to every instance of that type"],
            ["Instance parameter", "Applies to one placed element"]
          ],
          explain: "Type parameters change all elements of a type at once; instance parameters change a single placed element."
        },
        {
          type: "fill",
          q: "A value that drives how an element looks or behaves is called a ____.",
          answer: "parameter",
          accept: ["parameter", "parameters"],
          explain: "Parameters are the adjustable inputs that make Revit elements smart and editable."
        },
        {
          type: "truefalse",
          q: "Changing a Type parameter affects only one single element in the whole project.",
          answer: false,
          explain: "A Type parameter changes every element of that type. Use an Instance parameter to change just one."
        },
        {
          type: "mcq",
          q: "Which is an example of a relationship Revit maintains for you?",
          choices: [
            "A door stays hosted in its wall when the wall moves",
            "A door detaches and floats when the wall moves",
            "Walls delete themselves at random",
            "Levels ignore the elements on them"
          ],
          answer: 0,
          explain: "A door is hosted by its wall, so moving the wall moves the door too. Revit keeps that relationship intact."
        },
        {
          type: "mcq",
          q: "What are the two Type-or-Instance scopes actually about?",
          choices: [
            "Whether a change hits all elements of a type or just one placed element",
            "Whether the file is saved or not",
            "Whether the model is 2D or 3D",
            "Whether the view is a plan or a section"
          ],
          answer: 0,
          explain: "Type versus Instance is about how widely a parameter change spreads, not about views or file state."
        }
      ]
    },
    {
      id: "l6",
      title: "Starting a Project",
      intro: "A good template and clean project setup are the foundation of a healthy model, so start from the right rte.",
      questions: [
        {
          type: "mcq",
          q: "Why start a new project from a template (rte) instead of a blank file?",
          choices: [
            "It preloads standards, settings, and content so you work faster and more consistently",
            "It makes the file smaller",
            "It hides the model from your team",
            "It removes all views permanently"
          ],
          answer: 0,
          explain: "Templates carry your standards, families, and settings, so every project starts consistent instead of from scratch."
        },
        {
          type: "truefalse",
          q: "Levels are datums that host most elements and set the floor-to-floor heights of a building.",
          answer: true,
          explain: "Levels are horizontal datums. Most elements are placed relative to a Level, so setting them up early matters."
        },
        {
          type: "match",
          q: "Match each datum to its main job.",
          pairs: [
            ["Levels", "Set heights and host most elements"],
            ["Grids", "Locate columns and structure in plan"],
            ["Reference planes", "Define work planes for sketching"]
          ],
          explain: "Levels handle height, grids handle horizontal locating of structure, and reference planes define work surfaces."
        },
        {
          type: "order",
          q: "Order these early project-setup steps in a sensible sequence.",
          items: [
            "Pick a suitable template",
            "Set up Levels and Grids",
            "Begin modeling walls and columns"
          ],
          explain: "Choose the template, lay down datums like Levels and Grids, then start placing elements against them."
        },
        {
          type: "fill",
          q: "Datums used mainly to locate columns and structure in plan are called ____.",
          answer: "grids",
          accept: ["grids", "grid"],
          explain: "Grids run through the plan to locate columns and framing. Setting them early keeps structure organized."
        },
        {
          type: "truefalse",
          q: "The template you choose has no effect on the quality of the finished model.",
          answer: false,
          explain: "The template sets your foundation. A weak template leads to rework, so choosing well pays off later."
        },
        {
          type: "mcq",
          q: "Which datum type is used to set floor-to-floor heights?",
          choices: ["Levels", "Grids", "Reference planes", "Section lines"],
          answer: 0,
          explain: "Levels define heights and host most elements. Grids locate structure and reference planes define work planes."
        }
      ]
    },
    {
      id: "l7",
      title: "Saving & Backups",
      intro: "Understanding how rvt files save, how backups work, and why file hygiene matters keeps your work safe.",
      questions: [
        {
          type: "mcq",
          q: "Why does saving often and keeping backups matter in Revit?",
          choices: [
            "Models are large and complex, so losing unsaved work is costly",
            "Saving changes the building design",
            "Backups delete your project",
            "Revit cannot recover from any crash ever"
          ],
          answer: 0,
          explain: "Revit models represent a lot of work. Frequent saves and backups protect you from crashes and mistakes."
        },
        {
          type: "truefalse",
          q: "Revit can keep several numbered backup copies of a non-workshared project as you save.",
          answer: true,
          explain: "Revit keeps a set of numbered backups so you can roll back to an earlier save if something goes wrong."
        },
        {
          type: "truefalse",
          q: "Once you save a Revit model, there is never any way to go back to an earlier version.",
          answer: false,
          explain: "Backup copies exist for exactly this reason. You can often recover an earlier state from them."
        },
        {
          type: "match",
          q: "Match each habit to why it helps.",
          pairs: [
            ["Save often", "Limits how much work a crash can cost"],
            ["Keep backups", "Lets you roll back to an earlier state"],
            ["Organize files", "Makes the right file easy to find"]
          ],
          explain: "Good file hygiene is cheap insurance: frequent saves, real backups, and tidy folders prevent painful loss."
        },
        {
          type: "mcq",
          q: "What is good file hygiene for a Revit project?",
          choices: [
            "Clear names, organized folders, and reliable backups",
            "Many copies named final, final2, and reallyfinal in one folder",
            "Saving only once at the very end",
            "Storing the only copy on a random desktop"
          ],
          answer: 0,
          explain: "Clear naming, organized storage, and dependable backups make projects safe and easy to manage."
        },
        {
          type: "fill",
          q: "The habit of naming, organizing, and backing up files well is called file ____.",
          answer: "hygiene",
          accept: ["hygiene"],
          explain: "File hygiene keeps your project safe and findable, which matters more as the model grows."
        },
        {
          type: "truefalse",
          q: "In a workshared setup, users save their changes into the model by synchronizing with the central file.",
          answer: true,
          explain: "Worksharing uses a central model and local copies. Users Synchronize With Central to share their edits."
        }
      ]
    },
    {
      id: "l8",
      title: "Keeping a Clean Model",
      intro: "Consistent naming, tidy organization, and purging unused content keep a Revit model fast and healthy.",
      questions: [
        {
          type: "mcq",
          q: "What does purging do to a Revit model?",
          choices: [
            "Removes unused families, types, and other content to slim the file",
            "Deletes all of your walls",
            "Prints every sheet",
            "Locks the model so no one can edit it"
          ],
          answer: 0,
          explain: "Purging removes unused items the model is not actually using, which reduces bloat and can improve performance."
        },
        {
          type: "truefalse",
          q: "Consistent naming of views, families, and types makes a model easier for the whole team to use.",
          answer: true,
          explain: "Clear, consistent names help everyone find and trust content, which is a core part of a clean model."
        },
        {
          type: "match",
          q: "Match each clean-model habit to its benefit.",
          pairs: [
            ["Consistent naming", "Content is easy to find and trust"],
            ["Purging unused items", "Smaller, faster file"],
            ["Organized views", "Team navigates the model easily"]
          ],
          explain: "Naming, purging, and organizing views together keep a model healthy, quick, and pleasant to work in."
        },
        {
          type: "truefalse",
          q: "Leaving lots of unused families and types in a model always makes it faster.",
          answer: false,
          explain: "Unused content adds bloat. Purging it keeps the file leaner and often more responsive."
        },
        {
          type: "fill",
          q: "Removing unused families and types from a model is called ____ the model.",
          answer: "purging",
          accept: ["purging", "purge"],
          explain: "Purging clears out content the model no longer needs, helping keep the file size and performance in check."
        },
        {
          type: "order",
          q: "Order these steps for tidying a model near the end of a work session.",
          items: [
            "Rename messy views and types clearly",
            "Purge unused families and types",
            "Save the cleaned-up model"
          ],
          explain: "Clean up names, purge what is unused, then save so your tidy state is preserved for next time."
        },
        {
          type: "mcq",
          q: "Which practice best supports a healthy, long-lived Revit model?",
          choices: [
            "Regular naming, organizing, and purging",
            "Never saving until the deadline",
            "Random file names with no folders",
            "Keeping every unused family forever"
          ],
          answer: 0,
          explain: "Ongoing naming, organizing, and purging keep a model clean, coordinated, and fast as it grows."
        }
      ]
    }
  ]
});
