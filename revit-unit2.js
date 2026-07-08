window.ACADEMY.addUnit("revit", {
  id: "unit-2",
  title: "The Revit Interface",
  color: "#1cb0f6",
  icon: "🖥️",
  description: "Finding your way around the ribbon, palettes, and browser.",
  lessons: [
    {
      id: "l9",
      title: "The Ribbon",
      intro: "The ribbon is the strip of tools across the top, sorted into tabs so related commands sit together.",
      questions: [
        {
          type: "mcq",
          q: "What is the ribbon in Revit?",
          choices: ["The horizontal strip of command tabs at the top of the window", "A list of all views in the project", "The panel showing element properties", "A pop-up that names your file"],
          answer: 0,
          explain: "The ribbon holds Revit's commands, grouped into tabs like Architecture, Structure, and View."
        },
        {
          type: "mcq",
          q: "Tabs on the ribbon (like Architecture or Insert) are best described as:",
          choices: ["Groups of related commands", "Separate open files", "Different projects", "Saved views"],
          answer: 0,
          explain: "Each tab collects commands for a task area, so wall and door tools live under Architecture."
        },
        {
          type: "truefalse",
          q: "A contextual tab appears on the ribbon when you select or start placing certain elements.",
          answer: true,
          explain: "Contextual tabs give you tools that only make sense for the thing you currently have selected or are placing."
        },
        {
          type: "truefalse",
          q: "The ribbon tabs never change no matter what you select in the model.",
          answer: false,
          explain: "Selecting an element can add a contextual tab with tools specific to that element."
        },
        {
          type: "fill",
          q: "Within a ribbon tab, commands are further grouped into named ____ such as Build or Circulation.",
          answer: "panels",
          accept: ["panels", "panel"],
          explain: "A tab is split into panels, and each panel bundles a few closely related buttons."
        },
        {
          type: "match",
          q: "Match each ribbon tab to a tool you would expect to find there.",
          pairs: [["Architecture", "Wall tool"], ["View", "Section tool"], ["Insert", "Link a CAD file"]],
          explain: "Tabs are organized by task, so modeling tools, view tools, and import tools each have a home."
        },
        {
          type: "mcq",
          q: "You select a wall and a new tab labeled Modify appears with wall-specific tools. This is:",
          choices: ["A contextual tab", "A new project", "A schedule", "The Project Browser"],
          answer: 0,
          explain: "The Modify contextual tab shows editing tools tied to whatever you have selected."
        },
        {
          type: "truefalse",
          q: "The Modify tab is a common place to find general editing tools like Move, Copy, and Trim.",
          answer: true,
          explain: "Modify holds the everyday editing commands you use across most element types."
        }
      ]
    },
    {
      id: "l10",
      title: "The Properties Palette",
      intro: "The Properties palette is where you read and change the instance properties of whatever is currently selected.",
      questions: [
        {
          type: "mcq",
          q: "The Properties palette mainly lets you:",
          choices: ["Read and edit properties of the selected element", "Browse every view in the file", "Change ribbon tabs", "Save the project"],
          answer: 0,
          explain: "Properties shows the settings for your current selection so you can adjust them directly."
        },
        {
          type: "truefalse",
          q: "When nothing is selected, the Properties palette shows properties for the active view.",
          answer: true,
          explain: "With no selection, Properties reflects the current view, such as its scale or view template."
        },
        {
          type: "fill",
          q: "The properties you edit in this palette for a single placed element are its ____ properties.",
          answer: "instance",
          accept: ["instance"],
          explain: "The palette exposes instance properties, which affect only the selected placement by default."
        },
        {
          type: "mcq",
          q: "At the top of the Properties palette, the Type Selector lets you:",
          choices: ["Swap the selected element to a different type", "Delete the element", "Rename the project", "Open a new view"],
          answer: 0,
          explain: "The Type Selector changes which type the selected element uses, like a different door size."
        },
        {
          type: "truefalse",
          q: "The Properties palette and the Project Browser are the same panel.",
          answer: false,
          explain: "Properties edits the current selection; the Project Browser lists views, sheets, and more."
        },
        {
          type: "match",
          q: "Match each part of the Properties palette to what it does.",
          pairs: [["Type Selector", "Pick which type the element uses"], ["Instance parameters", "Values for this one placement"], ["Edit Type button", "Open type-level settings"]],
          explain: "The palette shows the type at top, this instance's values below, and a way to jump to type settings."
        },
        {
          type: "mcq",
          q: "After editing a value in the Properties palette, the change usually applies:",
          choices: ["To the selected element (or elements)", "To the whole project database at once", "Only after you restart Revit", "To a random view"],
          answer: 0,
          explain: "Instance edits affect what you have selected, whether that is one element or several."
        },
        {
          type: "truefalse",
          q: "You can dock the Properties palette to the side of the screen or float it.",
          answer: true,
          explain: "Palettes in Revit can be docked or floated to fit how you like to work."
        }
      ]
    },
    {
      id: "l11",
      title: "The Project Browser",
      intro: "The Project Browser is the tree that lists every view, sheet, schedule, family, and group in your project.",
      questions: [
        {
          type: "mcq",
          q: "What does the Project Browser list?",
          choices: ["Views, sheets, schedules, families, and groups", "Only 3D views", "The ribbon tabs", "Your keyboard shortcuts"],
          answer: 0,
          explain: "The browser is the organized index of everything in the project you can open or manage."
        },
        {
          type: "truefalse",
          q: "Double-clicking a view in the Project Browser opens that view.",
          answer: true,
          explain: "The browser is how you navigate between views and sheets by opening them."
        },
        {
          type: "match",
          q: "Match each Project Browser branch to what it contains.",
          pairs: [["Views", "Plans, elevations, and 3D views"], ["Sheets", "Drawings laid out for printing"], ["Families", "Loaded content like doors"]],
          explain: "The browser groups content by type so you can find views, sheets, and families quickly."
        },
        {
          type: "fill",
          q: "Drawings arranged for printing and plotting are collected under the ____ branch of the browser.",
          answer: "sheets",
          accept: ["sheets", "sheet"],
          explain: "Sheets hold views placed and titled for output, ready to print or export."
        },
        {
          type: "truefalse",
          q: "The Project Browser can only ever be sorted one fixed way that you cannot change.",
          answer: false,
          explain: "Browser organization can be customized to group and sort views to match your standards."
        },
        {
          type: "mcq",
          q: "Where would you look in the browser to find a room or door schedule?",
          choices: ["Under Schedules/Quantities", "Under Sheets only", "In the Properties palette", "On the ViewCube"],
          answer: 0,
          explain: "Schedules appear in their own browser branch since they are a kind of view of model data."
        },
        {
          type: "truefalse",
          q: "Right-clicking an item in the Project Browser gives you options like Rename or Duplicate.",
          answer: true,
          explain: "The right-click menu is how you manage views and sheets without leaving the browser."
        },
        {
          type: "mcq",
          q: "A quick way to reduce clutter and find one view among many in the browser is to:",
          choices: ["Search or filter the browser list", "Delete the ribbon", "Close the project", "Change the view scale"],
          answer: 0,
          explain: "The browser offers search and filtering so long project trees stay manageable."
        }
      ]
    },
    {
      id: "l12",
      title: "The View Control Bar",
      intro: "The View Control Bar sits at the bottom of each view and controls its scale, detail, look, and crop.",
      questions: [
        {
          type: "mcq",
          q: "Where does the View Control Bar appear?",
          choices: ["Along the bottom edge of the active view", "At the top with the ribbon", "Inside the Properties palette", "On every sheet title block"],
          answer: 0,
          explain: "It runs across the bottom of the drawing area and controls the view you are looking at."
        },
        {
          type: "match",
          q: "Match each View Control Bar setting to what it changes.",
          pairs: [["Scale", "Ratio of drawing to real size"], ["Detail Level", "How much detail geometry shows"], ["Visual Style", "Wireframe, shaded, or realistic look"]],
          explain: "These controls tune how the current view is drawn without changing the model itself."
        },
        {
          type: "mcq",
          q: "Detail Level in a view offers which set of options?",
          choices: ["Coarse, Medium, Fine", "Small, Big, Huge", "Draft, Final, Print", "Low, Mid, Ultra"],
          answer: 0,
          explain: "Coarse, Medium, and Fine control how much internal detail elements display."
        },
        {
          type: "truefalse",
          q: "Changing a view's scale changes the actual size of the building model.",
          answer: false,
          explain: "Scale is a display setting for that view only; the model stays real-world size."
        },
        {
          type: "fill",
          q: "The ____ region of a view is the boundary that limits how much of the model is shown.",
          answer: "crop",
          accept: ["crop", "crop region", "cropping"],
          explain: "The crop region trims the view to the area you want, and it can be turned on or off."
        },
        {
          type: "truefalse",
          q: "Visual Style lets you switch a view between options like Wireframe, Hidden Line, and Shaded.",
          answer: true,
          explain: "Visual Style sets how surfaces and edges are drawn, from plain wireframe to shaded views."
        },
        {
          type: "mcq",
          q: "A drafter sets a plan to 1/4 inch equals 1 foot. Which View Control Bar tool did they use?",
          choices: ["Scale", "Detail Level", "Visual Style", "Crop"],
          answer: 0,
          explain: "Scale sets the drawing ratio, and it also drives how text and annotations size on the sheet."
        },
        {
          type: "truefalse",
          q: "Each view can have its own scale, detail level, and visual style.",
          answer: true,
          explain: "These are per-view settings, so a coarse overall plan and a fine detail plan can coexist."
        }
      ]
    },
    {
      id: "l13",
      title: "Selecting Elements",
      intro: "Selecting is how you tell Revit what to act on, using clicks, windows, Tab-cycling, and filters.",
      questions: [
        {
          type: "mcq",
          q: "The simplest way to select a single element is to:",
          choices: ["Click it", "Delete it", "Zoom to it", "Rename it"],
          answer: 0,
          explain: "A single left-click picks the element under the cursor."
        },
        {
          type: "mcq",
          q: "You drag a selection box from left to right. What gets selected?",
          choices: ["Only elements fully inside the box", "Everything the box touches", "Nothing", "Only walls"],
          answer: 0,
          explain: "A left-to-right window selection grabs only elements completely enclosed by the box."
        },
        {
          type: "truefalse",
          q: "Dragging right-to-left makes a crossing selection that grabs anything the box touches.",
          answer: true,
          explain: "A crossing (right-to-left) selection catches elements the box even partially overlaps."
        },
        {
          type: "match",
          q: "Match each selection method to what it does.",
          pairs: [["Window (left to right)", "Selects fully enclosed elements"], ["Crossing (right to left)", "Selects anything touched"], ["Tab key", "Cycles through overlapping elements"]],
          explain: "Window is precise, crossing is broad, and Tab helps you reach elements stacked under others."
        },
        {
          type: "fill",
          q: "Pressing ____ hovers over stacked elements to cycle the highlight between them before you click.",
          answer: "Tab",
          accept: ["tab", "the tab key"],
          explain: "Tab-cycling lets you reach an element hidden beneath or behind another before selecting it."
        },
        {
          type: "mcq",
          q: "You selected many elements and want to keep only the doors. The best tool is:",
          choices: ["The selection Filter", "Delete", "Undo", "The ViewCube"],
          answer: 0,
          explain: "The Filter lets you narrow a mixed selection down to chosen categories like doors."
        },
        {
          type: "truefalse",
          q: "Holding Ctrl while clicking adds more elements to your current selection.",
          answer: true,
          explain: "Ctrl-click adds to a selection, and Shift-click removes from it."
        },
        {
          type: "mcq",
          q: "Clicking on empty space in the drawing area usually:",
          choices: ["Clears the current selection", "Deletes selected elements", "Opens a new sheet", "Changes the scale"],
          answer: 0,
          explain: "Clicking blank space deselects, giving you a clean slate to start a new selection."
        }
      ]
    },
    {
      id: "l14",
      title: "Type vs Instance Properties",
      intro: "Some properties change just one placement while others change every element of that type at once.",
      questions: [
        {
          type: "mcq",
          q: "An instance property change affects:",
          choices: ["Only the selected placement", "Every element of that type", "The whole project template", "All open files"],
          answer: 0,
          explain: "Instance properties are per-placement, so editing one does not touch its siblings."
        },
        {
          type: "mcq",
          q: "A type property change affects:",
          choices: ["Every element that uses that type", "Only the one you selected", "Nothing until you save", "Just the active view"],
          answer: 0,
          explain: "Type properties are shared by all instances of the type, so one edit updates them all."
        },
        {
          type: "truefalse",
          q: "Changing a door type's width updates every door of that type in the project.",
          answer: true,
          explain: "Width lives at the type level here, so all instances of that door type follow the change."
        },
        {
          type: "truefalse",
          q: "A single window's Sill Height is typically an instance property.",
          answer: true,
          explain: "Sill Height usually varies per placement, so it is an instance property you set individually."
        },
        {
          type: "match",
          q: "Match each property kind to how far its change reaches.",
          pairs: [["Instance", "Just this one placement"], ["Type", "All elements of the type"]],
          explain: "Instance edits are local; type edits ripple to every instance sharing that type."
        },
        {
          type: "fill",
          q: "To reach type properties from the Properties palette, you click the Edit ____ button.",
          answer: "Type",
          accept: ["type", "edit type"],
          explain: "Edit Type opens the type-level settings shared across all instances of that type."
        },
        {
          type: "mcq",
          q: "You want to nudge one column slightly without moving the others. You should edit:",
          choices: ["An instance property", "A type property", "The project template", "The view scale"],
          answer: 0,
          explain: "Position is instance-level, so moving one column leaves the rest of the type untouched."
        },
        {
          type: "truefalse",
          q: "It is safe to assume every property is a type property, so edits never affect other elements.",
          answer: false,
          explain: "Type edits reach every instance of the type, so always check whether a property is type or instance."
        }
      ]
    },
    {
      id: "l15",
      title: "Navigating a View",
      intro: "Zoom, pan, orbit, and the ViewCube let you move around 2D drawings and 3D models smoothly.",
      questions: [
        {
          type: "mcq",
          q: "Rolling the mouse wheel in a view usually:",
          choices: ["Zooms in and out", "Deletes elements", "Opens a schedule", "Renames the view"],
          answer: 0,
          explain: "The scroll wheel zooms toward or away from the point under your cursor."
        },
        {
          type: "match",
          q: "Match each navigation action to what it does.",
          pairs: [["Zoom", "Move closer or farther"], ["Pan", "Slide the view sideways"], ["Orbit", "Spin around a 3D model"]],
          explain: "Zoom changes distance, pan shifts the view, and orbit rotates your angle in 3D."
        },
        {
          type: "mcq",
          q: "The ViewCube is most useful for:",
          choices: ["Reorienting a 3D view to a standard direction", "Editing element properties", "Listing all sheets", "Setting the view scale"],
          answer: 0,
          explain: "Clicking the ViewCube's faces or corners snaps a 3D view to top, front, or corner angles."
        },
        {
          type: "truefalse",
          q: "The ViewCube appears in the corner of 3D views to help you reorient them.",
          answer: true,
          explain: "The ViewCube sits in a 3D view corner and shows which way you are looking."
        },
        {
          type: "fill",
          q: "Sliding a view sideways without zooming is called ____.",
          answer: "panning",
          accept: ["panning", "pan"],
          explain: "Panning shifts the view left, right, up, or down while keeping the same zoom."
        },
        {
          type: "truefalse",
          q: "Orbit is generally used in 3D views rather than flat 2D plans.",
          answer: true,
          explain: "Orbit spins your viewpoint in 3D; a flat plan has no depth to rotate around."
        },
        {
          type: "mcq",
          q: "You want to quickly fit the whole drawing in the window. The best move is a:",
          choices: ["Zoom to Fit command", "Type property edit", "Crossing selection", "New sheet"],
          answer: 0,
          explain: "Zoom to Fit frames the entire view so nothing is off-screen."
        },
        {
          type: "order",
          q: "Order these steps to inspect a corner of a 3D model up close.",
          items: ["Orbit to face the corner", "Pan to center the corner", "Zoom in to see detail"],
          explain: "You typically orient first with orbit, reposition with pan, then zoom for the close look."
        }
      ]
    },
    {
      id: "l16",
      title: "Options & Shortcuts",
      intro: "Settings live in Revit's Options and File menus, and keyboard shortcuts speed up commands you use often.",
      questions: [
        {
          type: "mcq",
          q: "General preferences like username and file locations are found in:",
          choices: ["The Options dialog", "The Project Browser", "The View Control Bar", "The ViewCube"],
          answer: 0,
          explain: "Options is the central place for application-wide settings and preferences."
        },
        {
          type: "truefalse",
          q: "Keyboard shortcuts let you start a command by typing a couple of letters instead of clicking.",
          answer: true,
          explain: "Shortcuts trigger commands quickly, which adds up over a long modeling session."
        },
        {
          type: "fill",
          q: "A keyboard ____ is a short key combination that runs a command without hunting through the ribbon.",
          answer: "shortcut",
          accept: ["shortcut", "shortcuts"],
          explain: "Shortcuts map keys to commands so common tools are always a keystroke away."
        },
        {
          type: "truefalse",
          q: "Keyboard shortcuts in Revit can be customized to fit your own habits.",
          answer: true,
          explain: "You can review and reassign shortcuts, so the point is understanding the idea, not memorizing every key."
        },
        {
          type: "mcq",
          q: "The best reason to learn a few shortcuts is that they:",
          choices: ["Speed up commands you repeat often", "Change the building geometry", "Replace the Project Browser", "Print sheets automatically"],
          answer: 0,
          explain: "Shortcuts save time on frequent actions; they do not alter the model on their own."
        },
        {
          type: "match",
          q: "Match each place to what you would set or do there.",
          pairs: [["Options dialog", "Application preferences"], ["Keyboard shortcuts", "Assign keys to commands"], ["File menu", "New, Open, Save, and Print"]],
          explain: "Preferences live in Options, key assignments in the shortcuts editor, and file actions in the File menu."
        },
        {
          type: "truefalse",
          q: "You must memorize every keyboard shortcut before you can use Revit at all.",
          answer: false,
          explain: "You can work entirely from the ribbon; shortcuts are an optional speed boost you learn over time."
        },
        {
          type: "order",
          q: "Order these steps to work a little faster with a command you use constantly.",
          items: ["Notice you repeat a command often", "Learn or set its keyboard shortcut", "Use the shortcut to save clicks"],
          explain: "Spotting a repeated action is the cue to adopt a shortcut and save time on it."
        }
      ]
    }
  ]
});
