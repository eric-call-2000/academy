window.ACADEMY.addUnit("revit", {
  id: "unit-11",
  title: "Worksharing, Links & Coordination",
  color: "#ff9600",
  icon: "🔗",
  description: "Working as a team and combining models across disciplines.",
  lessons: [
    {
      id: "l81",
      title: "What Is Worksharing?",
      intro: "Worksharing lets many people work on one shared model at the same time.",
      questions: [
        {
          type: "mcq",
          q: "What does worksharing let a team do?",
          choices: [
            "Many people work on one shared model at once",
            "Only one person can ever open the file",
            "Split a project into separate drawing files",
            "Export the model to a spreadsheet"
          ],
          answer: 0,
          explain: "Worksharing enables multiple people to author the same Revit project together."
        },
        {
          type: "truefalse",
          q: "Worksharing must be enabled before a team can collaborate on one Revit file.",
          answer: true,
          explain: "Enabling worksharing turns a normal project into a shared model with a central file."
        },
        {
          type: "mcq",
          q: "In a shared project, where does everyone's work ultimately get saved?",
          choices: [
            "The central model",
            "Each person's desktop only",
            "A separate PDF",
            "The Revit template file"
          ],
          answer: 0,
          explain: "The central model holds the shared, up-to-date state of the project."
        },
        {
          type: "truefalse",
          q: "Once worksharing is on, only one person can edit the model at a time.",
          answer: false,
          explain: "The whole point is that several people edit at once, each in their own local copy."
        },
        {
          type: "fill",
          q: "The single shared file that stores everyone's combined work is called the ____ model.",
          answer: "central",
          accept: ["central", "central model"],
          explain: "The central model is the master; team members work against it."
        },
        {
          type: "match",
          q: "Match each idea to what it means.",
          pairs: [
            ["Worksharing", "Feature that lets many users share one model"],
            ["Central model", "The shared master copy of the project"],
            ["Team", "The people collaborating on that project"]
          ],
          explain: "Worksharing connects a team to one central model."
        },
        {
          type: "mcq",
          q: "Why use worksharing instead of emailing copies of the file around?",
          choices: [
            "Everyone stays in sync on one live model",
            "It makes the file smaller",
            "It removes the need for backups",
            "It prints faster"
          ],
          answer: 0,
          explain: "Worksharing keeps a single source of truth so edits do not conflict or get lost."
        },
        {
          type: "truefalse",
          q: "Worksharing is meant for solo work on a small project.",
          answer: false,
          explain: "It is designed for team collaboration, not solo modeling."
        }
      ]
    },
    {
      id: "l82",
      title: "Central & Local Models",
      intro: "You work in a local copy and push changes to the central model.",
      questions: [
        {
          type: "mcq",
          q: "What is a local model?",
          choices: [
            "Your personal working copy of the central model",
            "A separate unrelated project",
            "A PDF export of the model",
            "The template used to start the project"
          ],
          answer: 0,
          explain: "Each team member works in a local copy synced to the central model."
        },
        {
          type: "fill",
          q: "The command that pushes your changes to the central file and pulls in others' work is Synchronize With ____.",
          answer: "central",
          accept: ["central", "synchronize with central"],
          explain: "Synchronize With Central (SWC) exchanges your edits with the central model."
        },
        {
          type: "truefalse",
          q: "Synchronize With Central both sends your changes and receives changes made by others.",
          answer: true,
          explain: "SWC is two-way: it saves your work to central and updates your local copy."
        },
        {
          type: "order",
          q: "Put a typical worksharing day in order.",
          items: [
            "Open your local copy",
            "Make edits to the model",
            "Synchronize With Central",
            "Close Revit"
          ],
          explain: "You open local, work, sync to share, then close."
        },
        {
          type: "mcq",
          q: "Where should each person's local copy live?",
          choices: [
            "On their own computer",
            "Inside the central file",
            "On a printed sheet",
            "In a schedule"
          ],
          answer: 0,
          explain: "A local copy is stored on the user's machine so they can work without locking others."
        },
        {
          type: "truefalse",
          q: "You should edit the central model directly instead of using a local copy.",
          answer: false,
          explain: "Best practice is to work in a local copy and sync, not open central directly."
        },
        {
          type: "match",
          q: "Match each term to its role.",
          pairs: [
            ["Central model", "Shared master file for the team"],
            ["Local model", "Your personal working copy"],
            ["Synchronize With Central", "Exchanges edits between local and central"]
          ],
          explain: "Local copies stay in sync with central through SWC."
        },
        {
          type: "mcq",
          q: "What happens to your unsaved local edits until you synchronize?",
          choices: [
            "They stay only in your local copy",
            "They appear in everyone's model instantly",
            "They are deleted automatically",
            "They print to a sheet"
          ],
          answer: 0,
          explain: "Other users see your changes only after you Synchronize With Central."
        }
      ]
    },
    {
      id: "l83",
      title: "Worksets",
      intro: "Worksets group elements so teams can divide the model and control what loads.",
      questions: [
        {
          type: "mcq",
          q: "What is a workset?",
          choices: [
            "A named group of elements in a shared model",
            "A type of wall",
            "A printed drawing set",
            "A backup file"
          ],
          answer: 0,
          explain: "Worksets are collections of elements used to organize a worksharing project."
        },
        {
          type: "truefalse",
          q: "Worksets are only available in worksharing (shared) projects.",
          answer: true,
          explain: "Worksets exist once worksharing is enabled, to divide the model among the team."
        },
        {
          type: "mcq",
          q: "One practical benefit of closing worksets you are not using is that it can help Revit:",
          choices: [
            "Open and run faster on large models",
            "Print in color",
            "Delete elements",
            "Create new families"
          ],
          answer: 0,
          explain: "Not opening every workset reduces what Revit loads, improving performance."
        },
        {
          type: "fill",
          q: "Grouping model elements for team collaboration and visibility is done with ____.",
          answer: "worksets",
          accept: ["worksets", "workset"],
          explain: "Worksets divide a shared model into manageable groups."
        },
        {
          type: "match",
          q: "Match each item to its description.",
          pairs: [
            ["Workset", "Named group of elements"],
            ["Open workset", "Loaded and visible for editing"],
            ["Closed workset", "Not loaded, to save resources"]
          ],
          explain: "Opening or closing worksets controls what is loaded in your session."
        },
        {
          type: "truefalse",
          q: "A closed workset is permanently deleted from the project.",
          answer: false,
          explain: "Closing a workset just unloads it from your view; the elements remain in the model."
        },
        {
          type: "mcq",
          q: "A good way to split worksets on a building project might be by:",
          choices: [
            "Building zones or systems, like Shell or Interiors",
            "The color of each element",
            "The alphabet order of family names",
            "The day of the week"
          ],
          answer: 0,
          explain: "Teams commonly divide worksets by area, floor, or system to reduce conflicts."
        },
        {
          type: "order",
          q: "Order the steps to use a workset while modeling.",
          items: [
            "Enable worksharing",
            "Create or choose worksets",
            "Set an element's workset as you model",
            "Synchronize With Central"
          ],
          explain: "You set up worksets first, assign elements to them, then sync your work."
        }
      ]
    },
    {
      id: "l84",
      title: "Linked Revit Models",
      intro: "Linking brings other disciplines' Revit files into your project to coordinate.",
      questions: [
        {
          type: "mcq",
          q: "What is a linked Revit model?",
          choices: [
            "Another RVT file referenced inside your project",
            "A copy pasted into your walls",
            "A schedule of doors",
            "A backup of your file"
          ],
          answer: 0,
          explain: "A link references a separate RVT so you can see and coordinate with it."
        },
        {
          type: "truefalse",
          q: "You can edit the elements inside a linked Revit model directly from your host project.",
          answer: false,
          explain: "Linked models are read-only in the host; each discipline edits its own file."
        },
        {
          type: "mcq",
          q: "Why would a structural team link the architectural Revit model?",
          choices: [
            "To coordinate structure with the architecture",
            "To delete the architect's walls",
            "To rename the architect's views",
            "To print the architect's sheets"
          ],
          answer: 0,
          explain: "Links let each discipline see the others to coordinate a shared building."
        },
        {
          type: "fill",
          q: "Combining architecture, structure, and MEP files is done by ____ the Revit models together.",
          answer: "linking",
          accept: ["linking", "link"],
          explain: "Linking references each discipline's RVT into a coordinated whole."
        },
        {
          type: "match",
          q: "Match each discipline to what it typically models.",
          pairs: [
            ["Architecture", "Walls, doors, and spaces"],
            ["Structure", "Beams, columns, and foundations"],
            ["MEP", "Mechanical, electrical, and plumbing systems"]
          ],
          explain: "Separate discipline models are linked together for coordination."
        },
        {
          type: "truefalse",
          q: "When a linked model is updated and reloaded, your host project shows the newer version.",
          answer: true,
          explain: "Reloading a link pulls in the latest saved state of that file."
        },
        {
          type: "mcq",
          q: "A benefit of keeping each discipline in its own file and linking is:",
          choices: [
            "Teams work in parallel without fighting over one file",
            "It makes the model impossible to view",
            "It removes the need for coordination",
            "It merges everything into one wall"
          ],
          answer: 0,
          explain: "Links keep files separate for ownership while still coordinating together."
        },
        {
          type: "truefalse",
          q: "A linked model can itself be a worksharing (shared) project.",
          answer: true,
          explain: "The linked file can be workshared internally; you just reference it as a link."
        }
      ]
    },
    {
      id: "l85",
      title: "Copy/Monitor",
      intro: "Copy/Monitor watches shared elements like levels and grids across linked models.",
      questions: [
        {
          type: "mcq",
          q: "What does Copy/Monitor do?",
          choices: [
            "Copies key elements and alerts you when the originals change",
            "Deletes duplicate elements",
            "Prints coordination sheets",
            "Exports the model to CAD"
          ],
          answer: 0,
          explain: "Copy/Monitor copies elements and warns you if the monitored originals move or change."
        },
        {
          type: "mcq",
          q: "Which elements are commonly set up with Copy/Monitor between models?",
          choices: [
            "Levels, grids, and columns",
            "Dimension text only",
            "Sheet borders",
            "View titles"
          ],
          answer: 0,
          explain: "Datums like levels and grids, plus columns, are typical Copy/Monitor targets."
        },
        {
          type: "truefalse",
          q: "If a monitored grid moves in the linked model, Copy/Monitor can warn you about the change.",
          answer: true,
          explain: "Monitoring flags a coordination alert when the original element changes."
        },
        {
          type: "fill",
          q: "Watching levels and grids so you get alerted when they change across links is done with Copy and ____.",
          answer: "monitor",
          accept: ["monitor", "copymonitor", "copy/monitor"],
          explain: "Copy/Monitor keeps shared datums coordinated between models."
        },
        {
          type: "match",
          q: "Match each part of the workflow.",
          pairs: [
            ["Copy", "Reproduce the element in your model"],
            ["Monitor", "Track the original for changes"],
            ["Alert", "Warning shown when the original changes"]
          ],
          explain: "You copy an element, monitor its source, and get alerts on change."
        },
        {
          type: "truefalse",
          q: "Copy/Monitor is used to keep shared datums aligned between coordinating teams.",
          answer: true,
          explain: "It helps teams keep levels and grids consistent across their models."
        },
        {
          type: "mcq",
          q: "What is the main value of monitoring instead of just copying once?",
          choices: [
            "You are told when the source changes so you can respond",
            "It makes the file open faster",
            "It hides the linked model",
            "It renames your levels"
          ],
          answer: 0,
          explain: "Monitoring provides ongoing awareness, not a one-time copy."
        }
      ]
    },
    {
      id: "l86",
      title: "Shared Coordinates",
      intro: "Shared Coordinates put every linked model in the same real-world location.",
      questions: [
        {
          type: "mcq",
          q: "What problem do Shared Coordinates solve?",
          choices: [
            "Placing every model in one common location",
            "Making walls thicker",
            "Speeding up printing",
            "Counting doors"
          ],
          answer: 0,
          explain: "Shared Coordinates give all linked models a single agreed position and orientation."
        },
        {
          type: "truefalse",
          q: "Shared Coordinates help linked models line up in the same place instead of overlapping at the wrong spot.",
          answer: true,
          explain: "A shared coordinate system aligns each model to the same real-world location."
        },
        {
          type: "mcq",
          q: "One common way to bring a link in already positioned to a shared system is to place it by:",
          choices: [
            "Shared Coordinates",
            "Element color",
            "Sheet number",
            "Family name"
          ],
          answer: 0,
          explain: "Positioning a link by Shared Coordinates uses the agreed common location."
        },
        {
          type: "fill",
          q: "Aligning many linked models to one common real-world location uses ____ coordinates.",
          answer: "shared",
          accept: ["shared", "shared coordinates"],
          explain: "Shared Coordinates define one location that all models agree on."
        },
        {
          type: "match",
          q: "Match each point to its role.",
          pairs: [
            ["Project Base Point", "Origin used for measuring the design"],
            ["Survey Point", "Real-world reference for the site"],
            ["Shared Coordinates", "Common location shared across models"]
          ],
          explain: "The Survey Point ties the model to real-world shared coordinates."
        },
        {
          type: "truefalse",
          q: "Without agreed shared coordinates, two linked models could sit far apart or rotated.",
          answer: true,
          explain: "Mismatched coordinates cause models to misalign, so teams agree on one system."
        },
        {
          type: "mcq",
          q: "Who should agree on the coordinate system on a project?",
          choices: [
            "All disciplines coordinating together",
            "Only the printer",
            "Only the software vendor",
            "No one, it is automatic and never discussed"
          ],
          answer: 0,
          explain: "Teams agree on a shared origin early so every model lines up."
        },
        {
          type: "order",
          q: "Order a simple shared-coordinates workflow.",
          items: [
            "Agree on a common site location",
            "Set up Shared Coordinates in the host model",
            "Link the other models by Shared Coordinates",
            "Confirm the models line up"
          ],
          explain: "You agree, define the coordinates, link by them, then verify alignment."
        }
      ]
    },
    {
      id: "l87",
      title: "Coordination Review",
      intro: "Revit can check for clashes and flag coordination issues between models.",
      questions: [
        {
          type: "mcq",
          q: "What does an Interference Check (clash check) find?",
          choices: [
            "Elements that physically overlap or collide",
            "Spelling mistakes in sheet names",
            "Missing dimensions",
            "Unused families"
          ],
          answer: 0,
          explain: "Interference Check reports where elements clash, like a duct hitting a beam."
        },
        {
          type: "truefalse",
          q: "Interference Check can look for clashes between your model and a linked model.",
          answer: true,
          explain: "You can run the check within your model or against elements in a link."
        },
        {
          type: "fill",
          q: "The Revit tool that reports overlapping elements is the ____ Check.",
          answer: "interference",
          accept: ["interference", "clash", "interference check"],
          explain: "Interference Check is Revit's built-in clash detection."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Clash", "Two elements occupying the same space"],
            ["Interference Check", "Tool that reports clashes"],
            ["Coordination Review", "Tool for handling monitored change alerts"]
          ],
          explain: "Interference Check finds clashes; Coordination Review handles monitor alerts."
        },
        {
          type: "mcq",
          q: "When Copy/Monitor detects a change in a link, which tool helps you review and resolve it?",
          choices: [
            "Coordination Review",
            "The wall tool",
            "The text tool",
            "The print dialog"
          ],
          answer: 0,
          explain: "Coordination Review lists monitor warnings so you can accept or reject changes."
        },
        {
          type: "truefalse",
          q: "Finding a clash automatically fixes it for you.",
          answer: false,
          explain: "The check only reports clashes; a person must decide how to resolve each one."
        },
        {
          type: "mcq",
          q: "Why run clash checks regularly during design?",
          choices: [
            "Catch conflicts early before they reach the field",
            "To make the file larger",
            "To delete the linked models",
            "To change the units"
          ],
          answer: 0,
          explain: "Early clash detection prevents costly conflicts during construction."
        },
        {
          type: "order",
          q: "Order a basic clash-checking flow.",
          items: [
            "Link the other discipline's model",
            "Run the Interference Check",
            "Review the reported clashes",
            "Coordinate a fix with the team"
          ],
          explain: "You link, run the check, review results, then resolve with the team."
        }
      ]
    },
    {
      id: "l88",
      title: "Linking CAD & IFC",
      intro: "You can bring non-Revit formats like CAD and IFC into your project.",
      questions: [
        {
          type: "mcq",
          q: "What is IFC used for?",
          choices: [
            "A neutral, open format for exchanging BIM data between programs",
            "A Revit family category",
            "A type of wall",
            "A printing setting"
          ],
          answer: 0,
          explain: "IFC (Industry Foundation Classes) is an open standard for sharing BIM across software."
        },
        {
          type: "truefalse",
          q: "Linking is generally preferred over importing CAD because a link stays connected to its source file.",
          answer: true,
          explain: "A linked CAD file updates when reloaded and keeps your project cleaner than an import."
        },
        {
          type: "mcq",
          q: "Which of these is a common CAD format you might link into Revit?",
          choices: [
            "DWG",
            "RVT",
            "RTE",
            "RFA"
          ],
          answer: 0,
          explain: "DWG is a typical CAD format; RVT, RTE, and RFA are all Revit files."
        },
        {
          type: "fill",
          q: "The open exchange format often used to share models between different BIM tools is ____.",
          answer: "ifc",
          accept: ["ifc", "industry foundation classes"],
          explain: "IFC lets teams exchange model data even when they use different software."
        },
        {
          type: "match",
          q: "Match each format to what it is.",
          pairs: [
            ["DWG", "A common CAD drawing format"],
            ["IFC", "An open BIM exchange format"],
            ["RVT", "A native Revit project file"]
          ],
          explain: "DWG and IFC are non-native formats you can bring in; RVT is native Revit."
        },
        {
          type: "truefalse",
          q: "IFC is owned by a single software company and works only in Revit.",
          answer: false,
          explain: "IFC is a vendor-neutral open standard used across many BIM applications."
        },
        {
          type: "mcq",
          q: "A reason to link a CAD site plan rather than import it is:",
          choices: [
            "Reloading updates it and it is easier to remove later",
            "It permanently merges into your walls",
            "It prints faster than everything else",
            "It converts to a Revit family automatically"
          ],
          answer: 0,
          explain: "Links keep external data separate and updatable, unlike a baked-in import."
        }
      ]
    }
  ]
});
