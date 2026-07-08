window.ACADEMY.addUnit("revit", {
  id: "unit-5",
  title: "Views & Visibility Control",
  color: "#ff4b4b",
  icon: "👁️",
  description: "Getting the model to show exactly what you want, where you want.",
  lessons: [
    {
      id: "l33",
      title: "View Types",
      intro: "Revit gives you many kinds of views, and picking the right one is the first step to a clear drawing.",
      questions: [
        {
          type: "mcq",
          q: "In Revit, a plan, section, and 3D view of the same building all come from what?",
          choices: ["The same single model database", "Three separate drawing files", "Imported CAD files", "A rendered image"],
          answer: 0,
          explain: "Every view is a live window into the one project database, so a change shows up everywhere."
        },
        {
          type: "truefalse",
          q: "A drafting view contains live 3D model geometry cut from the building.",
          answer: false,
          explain: "A drafting view is a standalone 2D view with no model geometry; you draw details by hand in it."
        },
        {
          type: "mcq",
          q: "Which view type is a horizontal cut looking down at a floor?",
          choices: ["Floor plan", "Elevation", "Section", "Legend"],
          answer: 0,
          explain: "A floor plan cuts horizontally through the level and looks down at what is below the cut."
        },
        {
          type: "match",
          q: "Match each view type to what it does.",
          pairs: [
            ["Elevation", "Looks straight at a vertical face of the building"],
            ["Section", "Cuts through the model to show the inside"],
            ["Callout", "Enlarges a small area of a parent view"],
            ["Legend", "Shows sample graphics that are not counted in schedules"]
          ],
          explain: "Each view type answers a different question about the model."
        },
        {
          type: "fill",
          q: "A ____ view is a purely 2D view used for typical details that do not need model geometry.",
          answer: "drafting",
          accept: ["drafting", "drafting view"],
          explain: "Drafting views hold reusable 2D details and carry no live model."
        },
        {
          type: "truefalse",
          q: "A legend view can be placed on more than one sheet.",
          answer: true,
          explain: "Legends are special because the same legend can appear on multiple sheets, unlike most views."
        },
        {
          type: "mcq",
          q: "Which view shows the building as a three-dimensional object you can orbit?",
          choices: ["3D view", "Floor plan", "Drafting view", "Schedule"],
          answer: 0,
          explain: "A 3D view presents the model in three dimensions and can be orbited and sectioned."
        }
      ]
    },
    {
      id: "l34",
      title: "View Range",
      intro: "View Range is the set of invisible horizontal planes that decide what a plan view actually shows.",
      questions: [
        {
          type: "mcq",
          q: "What does the View Range setting control in a plan view?",
          choices: ["Which horizontal slices of the model are visible", "The drawing scale", "The line color of walls", "The rendering quality"],
          answer: 0,
          explain: "View Range defines the top, cut, and bottom planes that decide what the plan displays."
        },
        {
          type: "match",
          q: "Match each View Range plane to its job.",
          pairs: [
            ["Cut plane", "Height where the plan slices through elements"],
            ["Top", "Upper limit of what the primary range shows"],
            ["Bottom", "Lower limit of the primary range"],
            ["View depth", "How far below the bottom you can still see"]
          ],
          explain: "The primary range is Top to Bottom, and view depth extends how far down you can see."
        },
        {
          type: "truefalse",
          q: "Elements below the cut plane but above the bottom show in plan without needing to be cut.",
          answer: true,
          explain: "Things under the cut plane are seen in projection, not sliced, so they appear as normal lines."
        },
        {
          type: "fill",
          q: "The ____ plane is the height at which the plan view slices through walls and other elements.",
          answer: "cut",
          accept: ["cut", "cut plane"],
          explain: "Whatever the cut plane passes through is drawn as a cut, usually with heavier lines."
        },
        {
          type: "mcq",
          q: "A window sits above the cut plane and is not appearing in your floor plan. What likely fixes it?",
          choices: ["Raise the top of the view range or the cut plane", "Change the scale", "Delete the level", "Turn off crop region"],
          answer: 0,
          explain: "If an element is above the range, extend the range or cut plane so the view can see it."
        },
        {
          type: "order",
          q: "Order these View Range planes from highest to lowest.",
          items: ["Top", "Cut plane", "Bottom", "View depth"],
          explain: "Top is highest, then the cut plane, then the bottom, and view depth reaches lowest of all."
        },
        {
          type: "truefalse",
          q: "View Range only exists on plan and reflected ceiling plan views, not on sections.",
          answer: true,
          explain: "View Range is a plan-view concept; sections and elevations use a far clip instead."
        }
      ]
    },
    {
      id: "l35",
      title: "Visibility/Graphics Overrides",
      intro: "Visibility and Graphics overrides let you switch categories on or off and restyle them in one view only.",
      questions: [
        {
          type: "mcq",
          q: "What does the Visibility/Graphics dialog let you do?",
          choices: ["Turn categories on or off and override their graphics per view", "Change the project units", "Rename the project", "Create a new level"],
          answer: 0,
          explain: "VG controls which categories show and how they look, and it applies to that one view."
        },
        {
          type: "truefalse",
          q: "Hiding the Furniture category in one view also hides furniture in every other view.",
          answer: false,
          explain: "A Visibility/Graphics change is view-specific, so other views are unaffected."
        },
        {
          type: "fill",
          q: "The keyboard shortcut commonly used to open Visibility/Graphics is ____.",
          answer: "vg",
          accept: ["vg", "vv"],
          explain: "VG (or VV) is a well-known default that opens the Visibility/Graphics dialog for the current view."
        },
        {
          type: "match",
          q: "Match each visibility action to its result.",
          pairs: [
            ["Uncheck a category", "That category is hidden in this view"],
            ["Override line weight", "Category draws with a different pen thickness here"],
            ["Override color", "Category draws in a new color in this view only"]
          ],
          explain: "Each override changes appearance for the current view without touching the model."
        },
        {
          type: "mcq",
          q: "You want just the current view to show walls in red. Which tool is the cleanest choice?",
          choices: ["A Visibility/Graphics override on the wall category", "Editing every wall type", "Changing project materials", "Deleting and redrawing walls"],
          answer: 0,
          explain: "A category override in VG recolors walls in that one view without changing the model."
        },
        {
          type: "truefalse",
          q: "Temporarily hiding an element with Hide in View is the same as a permanent VG override.",
          answer: false,
          explain: "Temporary hide is a quick toggle you can reset; VG overrides are saved with the view."
        },
        {
          type: "order",
          q: "Order the steps to hide the plumbing category in one plan.",
          items: ["Open the plan view", "Open Visibility/Graphics", "Uncheck the plumbing category", "Click OK to apply"],
          explain: "Open the view, open VG, uncheck the category, and apply."
        }
      ]
    },
    {
      id: "l36",
      title: "View Templates",
      intro: "A View Template stores a bundle of view settings so you can apply the same look to many views at once.",
      questions: [
        {
          type: "mcq",
          q: "What is the main purpose of a View Template?",
          choices: ["Apply consistent settings across many views", "Store 3D model geometry", "Save a rendering", "Define a family type"],
          answer: 0,
          explain: "A View Template packages settings like scale, detail level, and visibility so views stay consistent."
        },
        {
          type: "truefalse",
          q: "Assigning a View Template can lock the controlled settings so users cannot change them in that view.",
          answer: true,
          explain: "A template assigned to a view grays out and enforces the settings it controls."
        },
        {
          type: "match",
          q: "Match each item to whether a View Template usually controls it.",
          pairs: [
            ["View scale", "Controlled by the template"],
            ["Detail level", "Controlled by the template"],
            ["Visibility/Graphics", "Controlled by the template"],
            ["The specific crop boundary shape", "Not typically controlled"]
          ],
          explain: "Templates handle scale, detail level, and visibility; the exact crop extents stay per view."
        },
        {
          type: "fill",
          q: "Applying one View ____ to twenty sections makes them all share the same graphic settings.",
          answer: "template",
          accept: ["template", "view template"],
          explain: "One template keeps a whole set of views consistent from a single definition."
        },
        {
          type: "truefalse",
          q: "Editing a View Template updates every view that has that template assigned.",
          answer: true,
          explain: "That is the point: change the template once and all assigned views follow."
        },
        {
          type: "mcq",
          q: "Which is a good reason to use View Templates on a big project?",
          choices: ["Consistency and less repeated setup across many views", "To reduce the file size", "To speed up rendering only", "To hide the model from other users"],
          answer: 0,
          explain: "Templates enforce standards and save you from restyling each view by hand."
        },
        {
          type: "order",
          q: "Order the steps to standardize a set of plans with a template.",
          items: ["Set up one plan the way you want", "Create a view template from it", "Assign that template to the other plans", "Confirm they all match"],
          explain: "Build one good view, capture it as a template, apply it, and verify."
        }
      ]
    },
    {
      id: "l37",
      title: "Detail Level & Visual Style",
      intro: "Detail Level and Visual Style change how much detail and what shading a view shows without changing the model.",
      questions: [
        {
          type: "order",
          q: "Order the three Detail Level settings from least to most detail.",
          items: ["Coarse", "Medium", "Fine"],
          explain: "Coarse shows the least, Medium adds more, and Fine shows the most component detail."
        },
        {
          type: "mcq",
          q: "At Coarse detail level, a wall usually shows as what?",
          choices: ["A simple outline without its layers", "A photo-realistic surface", "Its full internal layers", "An exploded view"],
          answer: 0,
          explain: "Coarse hides internal layers and shows walls as simplified outlines for speed and clarity."
        },
        {
          type: "match",
          q: "Match each Visual Style to what it shows.",
          pairs: [
            ["Wireframe", "Only edges, no surfaces filled"],
            ["Hidden Line", "Solid surfaces with hidden edges removed"],
            ["Shaded", "Surfaces filled with material color and light"],
            ["Realistic", "Surfaces with material textures shown"]
          ],
          explain: "Visual styles range from bare edges up to textured, realistic surfaces."
        },
        {
          type: "truefalse",
          q: "Changing the Visual Style to Realistic permanently changes the model geometry.",
          answer: false,
          explain: "Visual Style only changes how the view is drawn, not the underlying model."
        },
        {
          type: "fill",
          q: "The three Detail Level options are Coarse, Medium, and ____.",
          answer: "fine",
          accept: ["fine"],
          explain: "Fine is the most detailed of the three levels."
        },
        {
          type: "mcq",
          q: "A pipe shows as a single line in one view but full 3D in another. What setting differs?",
          choices: ["Detail Level", "Project units", "The level name", "The sheet number"],
          answer: 0,
          explain: "Many MEP components draw as single lines at Coarse and as full geometry at Fine."
        },
        {
          type: "truefalse",
          q: "Wireframe visual style is often the fastest to display because surfaces are not shaded.",
          answer: true,
          explain: "Wireframe draws only edges, so it is light for the graphics to render."
        }
      ]
    },
    {
      id: "l38",
      title: "Crop Regions & Scale",
      intro: "The crop region frames what part of a view you see, and the scale sets how big it prints.",
      questions: [
        {
          type: "mcq",
          q: "What does a crop region do to a view?",
          choices: ["Limits the visible area to a chosen boundary", "Deletes elements outside it from the model", "Changes the detail level", "Renders the view"],
          answer: 0,
          explain: "The crop boundary trims what you see; the hidden elements still exist in the model."
        },
        {
          type: "truefalse",
          q: "Cropping a view deletes the elements that fall outside the crop boundary.",
          answer: false,
          explain: "Crop only hides them from that view; the model keeps everything."
        },
        {
          type: "mcq",
          q: "What does a view scale of 1:100 mean compared to 1:50?",
          choices: ["1:100 shows the model smaller on the sheet", "1:100 shows the model larger", "They are identical", "1:100 renders in color"],
          answer: 0,
          explain: "A larger denominator means a smaller drawing, so 1:100 is smaller than 1:50."
        },
        {
          type: "truefalse",
          q: "In Revit, annotation such as text tags and dimensions keeps a fixed printed size, so it stays readable as the view scale changes.",
          answer: true,
          explain: "Annotation is sized for the paper, so it stays a constant printed size while the model geometry scales."
        },
        {
          type: "fill",
          q: "The boundary you drag to frame a view is called the crop ____.",
          answer: "region",
          accept: ["region", "boundary", "crop region"],
          explain: "The crop region (or crop boundary) sets what part of the view is shown."
        },
        {
          type: "match",
          q: "Match each control to what it changes.",
          pairs: [
            ["Crop region", "The framed extent of the view"],
            ["View scale", "How large the view prints on the sheet"],
            ["Annotation crop", "The border where tags and text are trimmed"]
          ],
          explain: "The model crop frames geometry, and the annotation crop trims tags and text."
        },
        {
          type: "mcq",
          q: "A detail needs to look bigger on the sheet. Which change helps?",
          choices: ["Use a smaller scale denominator like 1:20", "Use 1:200", "Change the visual style", "Hide the crop region"],
          answer: 0,
          explain: "A smaller denominator, such as 1:20, draws the view larger on paper."
        }
      ]
    },
    {
      id: "l39",
      title: "Sections & Callouts",
      intro: "Sections cut through the model to reveal the inside, and callouts enlarge a piece of a view for detail.",
      questions: [
        {
          type: "mcq",
          q: "What does a section view do?",
          choices: ["Cuts through the model to show its interior", "Looks at an outside face only", "Lists quantities in a table", "Renders a photo"],
          answer: 0,
          explain: "A section slices the model along a line so you can see what is inside."
        },
        {
          type: "truefalse",
          q: "A section view is a live view that updates when the model changes.",
          answer: true,
          explain: "Sections read the same model, so edits show up automatically."
        },
        {
          type: "mcq",
          q: "What is a callout best used for?",
          choices: ["Enlarging a small area for more detail", "Cutting the whole building in half", "Creating a schedule", "Setting the project base point"],
          answer: 0,
          explain: "A callout zooms into a region of a parent view and can use a finer scale."
        },
        {
          type: "match",
          q: "Match each tool to its typical use.",
          pairs: [
            ["Section", "Cut through walls to show construction"],
            ["Callout", "Enlarge a corner or joint detail"],
            ["Elevation", "View an interior or exterior wall face"]
          ],
          explain: "Sections cut, callouts enlarge, and elevations view faces."
        },
        {
          type: "fill",
          q: "A ____ enlarges a portion of a parent view so you can add finer detail at a bigger scale.",
          answer: "callout",
          accept: ["callout"],
          explain: "A callout creates a detailed, zoomed-in view referenced from its parent."
        },
        {
          type: "truefalse",
          q: "You must redraw a section by hand every time the walls move.",
          answer: false,
          explain: "Sections are live views, so they update themselves when the model changes."
        },
        {
          type: "order",
          q: "Order the steps to detail a wall base with a callout.",
          items: ["Open the section view", "Draw a callout around the wall base", "Open the new callout view", "Add detail annotation at a finer scale"],
          explain: "Cut the section, place the callout, open it, and detail it."
        }
      ]
    },
    {
      id: "l40",
      title: "Duplicating Views",
      intro: "Duplicating lets you reuse a view in different ways, from a clean copy to a dependent view that stays linked.",
      questions: [
        {
          type: "match",
          q: "Match each duplicate option to what it copies.",
          pairs: [
            ["Duplicate", "The view with no view-specific detailing"],
            ["Duplicate with Detailing", "The view plus its annotations and detail items"],
            ["Duplicate as Dependent", "A linked child view tied to the parent"]
          ],
          explain: "Plain duplicate drops annotation, with detailing keeps it, and dependent stays linked."
        },
        {
          type: "truefalse",
          q: "Duplicate with Detailing copies the view-specific annotations like dimensions and tags.",
          answer: true,
          explain: "That option is chosen precisely when you want to keep the existing detailing."
        },
        {
          type: "mcq",
          q: "What is special about a dependent view?",
          choices: ["Many of its settings stay tied to the parent view", "It renders faster", "It cannot be placed on a sheet", "It has no crop region"],
          answer: 0,
          explain: "A dependent view shares settings with its parent, which is great for splitting a big plan across sheets."
        },
        {
          type: "truefalse",
          q: "A plain Duplicate copies all of the dimensions and tags from the original view.",
          answer: false,
          explain: "Plain Duplicate leaves out view-specific annotation; only the model is shared."
        },
        {
          type: "fill",
          q: "To split one large plan across several sheets while keeping settings synced, use a ____ view.",
          answer: "dependent",
          accept: ["dependent", "dependent view"],
          explain: "Dependent views let one big plan be broken up and still stay coordinated."
        },
        {
          type: "mcq",
          q: "You want a second copy of a plan to try different tags without touching the first. Which is safest?",
          choices: ["Duplicate the view so annotation is not shared", "Duplicate as Dependent", "Edit the original directly", "Delete the original"],
          answer: 0,
          explain: "A plain duplicate gives an independent view so your annotation changes stay separate."
        },
        {
          type: "order",
          q: "Order the steps to create an independent copy of a plan for a new layout study.",
          items: ["Select the source plan view", "Choose Duplicate View", "Pick the plain Duplicate option", "Rename the new view"],
          explain: "Select the view, choose duplicate, pick plain duplicate, and rename it."
        }
      ]
    }
  ]
});
