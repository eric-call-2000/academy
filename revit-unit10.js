window.ACADEMY.addUnit("revit", {
  id: "unit-10",
  title: "Sheets & Documentation",
  color: "#1cb0f6",
  icon: "📄",
  description: "Assembling views into a printable, issued drawing set.",
  lessons: [
    {
      id: "l73",
      title: "Sheets & Title Blocks",
      intro: "A sheet is the printable page in your set, and the title block is the border and info panel that frames it.",
      questions: [
        {
          type: "mcq",
          q: "What is a sheet in Revit?",
          choices: ["A printable page that holds views and a title block", "A saved 3D camera angle", "A type of wall family", "A backup of the project database"],
          answer: 0,
          explain: "Sheets are the pages of your drawing set; you drop views onto them and print or export them."
        },
        {
          type: "truefalse",
          q: "A title block is itself a loadable family (an .rfa file).",
          answer: true,
          explain: "Title blocks are loadable families, so you can create, edit, and load different border and label layouts."
        },
        {
          type: "fill",
          q: "The border and information panel placed on every sheet is called the ____ block.",
          answer: "title",
          accept: ["title", "titleblock", "title block"],
          explain: "The title block frames the sheet and shows project name, sheet number, date, and other standard info."
        },
        {
          type: "match",
          q: "Match each item to what it does on a sheet.",
          pairs: [["Sheet", "The printable page in the set"], ["Title block", "The border and info panel around the page"], ["Sheet number", "The unique code that identifies the sheet"]],
          explain: "Every sheet has a number and title, framed by a title block family."
        },
        {
          type: "mcq",
          q: "Where do fields like project name and client usually come from in a title block?",
          choices: ["Project Information parameters shared across the model", "A separate text file you edit by hand", "The Windows system clock only", "A linked spreadsheet that must stay open"],
          answer: 0,
          explain: "Title block labels can read Project Information parameters so one edit updates every sheet at once."
        },
        {
          type: "truefalse",
          q: "You can have several different title block sizes (for example A1 and A3) available in one project.",
          answer: true,
          explain: "Load multiple title block types so different sheets can use different page sizes as needed."
        },
        {
          type: "order",
          q: "Order these steps to start a new sheet.",
          items: ["Create a new sheet", "Choose a title block", "Fill in the sheet number and name", "Place views on the sheet"],
          explain: "You create the sheet with a title block, label it, then add views."
        }
      ]
    },
    {
      id: "l74",
      title: "Placing Views on Sheets",
      intro: "Dragging a view onto a sheet creates a viewport that shows that view at a set scale and position.",
      questions: [
        {
          type: "mcq",
          q: "What is created when you place a view on a sheet?",
          choices: ["A viewport", "A new level", "A duplicate project file", "A revision cloud"],
          answer: 0,
          explain: "A viewport is the framed instance of a view sitting on a sheet."
        },
        {
          type: "truefalse",
          q: "A single view can be placed on more than one sheet at the same time.",
          answer: false,
          explain: "Each view can live on only one sheet at a time; duplicate the view if you need it on another sheet."
        },
        {
          type: "fill",
          q: "The scale shown in a viewport is controlled by the view's ____ setting.",
          answer: "scale",
          accept: ["scale", "view scale"],
          explain: "A view's scale determines how large its viewport prints on the sheet."
        },
        {
          type: "mcq",
          q: "Why does changing a view's scale matter for sheet layout?",
          choices: ["It changes how much space the viewport takes on the sheet", "It renames the sheet automatically", "It deletes other viewports", "It changes the file type to CAD"],
          answer: 0,
          explain: "Scale sets the printed size of the drawing, so it drives how views fit on the page."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["View", "The plan, section, or 3D you author"], ["Viewport", "That view framed and placed on a sheet"], ["Scale", "The ratio that sizes the drawing"]],
          explain: "A viewport is a view placed on a sheet, sized by its scale."
        },
        {
          type: "truefalse",
          q: "Editing the model in a view updates its viewport on the sheet automatically.",
          answer: true,
          explain: "Sheets show live views, so model changes flow through to the placed viewport with no re-import."
        },
        {
          type: "order",
          q: "Order these steps to place a view on a sheet.",
          items: ["Open or create the target sheet", "Drag the view onto the sheet", "Position the viewport within the border", "Adjust the view scale if needed"],
          explain: "Drag the view on, place it inside the title block, then fine-tune scale and position."
        }
      ]
    },
    {
      id: "l75",
      title: "View Titles & Reference Bubbles",
      intro: "A view title labels each viewport, and section or callout bubbles auto-fill the sheet number and detail number once the view is placed.",
      questions: [
        {
          type: "mcq",
          q: "What does a view title show beneath a viewport?",
          choices: ["The view name, detail number, and scale", "The full model file path", "The list of every working user", "The print driver name"],
          answer: 0,
          explain: "A view title typically labels the drawing with its name, detail number, and scale."
        },
        {
          type: "fill",
          q: "The number in a section or callout bubble that points to a detail is called the ____ number.",
          answer: "detail",
          accept: ["detail", "detail number"],
          explain: "The detail number identifies a view on its sheet, and reference bubbles display it."
        },
        {
          type: "truefalse",
          q: "Section and callout bubbles show blank references until the view they point to is placed on a sheet.",
          answer: true,
          explain: "Bubbles have nothing to reference until the target view lives on a sheet, so they stay empty first."
        },
        {
          type: "mcq",
          q: "Once a referenced view is placed on a sheet, what happens to its bubbles elsewhere?",
          choices: ["They auto-fill with the correct sheet and detail number", "They must be typed in by hand", "They turn into revision clouds", "They delete the view"],
          answer: 0,
          explain: "Revit links the bubble to the placed view, so the sheet and detail numbers fill in automatically."
        },
        {
          type: "match",
          q: "Match each callout part to what it reports.",
          pairs: [["Detail number", "Which view on the sheet"], ["Sheet number", "Which sheet the view lives on"], ["View title", "The label under the viewport"]],
          explain: "Reference bubbles pair a detail number with a sheet number to point readers to the right drawing."
        },
        {
          type: "truefalse",
          q: "If you move a view to a different sheet, its reference bubbles update to the new sheet number.",
          answer: true,
          explain: "Because references are live links, moving the view updates every bubble that points to it."
        },
        {
          type: "order",
          q: "Order what happens with an auto-filling reference.",
          items: ["Create a section that cuts the model", "The section bubble shows a blank reference", "Place the section view on a sheet", "The bubble fills in the sheet and detail number"],
          explain: "References fill in only after the target view is placed on a sheet."
        }
      ]
    },
    {
      id: "l76",
      title: "Revisions & Revision Clouds",
      intro: "Revisions track changes issued after a drawing set goes out, and revision clouds mark exactly what changed on each sheet.",
      questions: [
        {
          type: "mcq",
          q: "What is a revision cloud used for?",
          choices: ["Marking an area of a drawing that changed", "Rendering realistic sky", "Hiding a wall temporarily", "Backing up the model"],
          answer: 0,
          explain: "A revision cloud outlines the region that changed so reviewers can spot updates quickly."
        },
        {
          type: "truefalse",
          q: "Each revision cloud is assigned to a numbered revision entry.",
          answer: true,
          explain: "Clouds belong to a revision, which carries a number, description, and date."
        },
        {
          type: "fill",
          q: "The small numbered marker placed next to a revision cloud is called a revision ____.",
          answer: "tag",
          accept: ["tag", "revision tag"],
          explain: "A revision tag labels the cloud with its revision number so it matches the revision schedule."
        },
        {
          type: "mcq",
          q: "Where does the list of revisions on a sheet usually appear?",
          choices: ["In a revision schedule inside the title block", "In the 3D view only", "In the print dialog", "In the material browser"],
          answer: 0,
          explain: "Title blocks include a revision schedule that lists the number, description, and date for that sheet."
        },
        {
          type: "match",
          q: "Match each revision item to its role.",
          pairs: [["Revision cloud", "Outlines the changed area"], ["Revision tag", "Numbers the cloud"], ["Revision schedule", "Lists revisions in the title block"]],
          explain: "Clouds mark changes, tags number them, and the schedule summarizes them on the sheet."
        },
        {
          type: "truefalse",
          q: "Revisions are meant to record changes made before a set has ever been issued.",
          answer: false,
          explain: "Revisions track changes issued after the first set goes out, so recipients can see what is new."
        },
        {
          type: "order",
          q: "Order the steps to issue a revision.",
          items: ["Create a numbered revision entry", "Draw a cloud around the change", "Assign the cloud to that revision", "Reissue the affected sheets"],
          explain: "Define the revision, cloud the change, link them, then reissue the sheets."
        }
      ]
    },
    {
      id: "l77",
      title: "Sheet Lists",
      intro: "A sheet list is a schedule that builds your drawing index automatically from the sheets in the project.",
      questions: [
        {
          type: "mcq",
          q: "What is a sheet list in Revit?",
          choices: ["A schedule that indexes all the sheets in the set", "A list of every family loaded", "A backup of print settings", "A folder of exported PDFs"],
          answer: 0,
          explain: "A sheet list is a special schedule that reads sheet numbers and names to build the drawing index."
        },
        {
          type: "truefalse",
          q: "A sheet list updates automatically when you add or rename a sheet.",
          answer: true,
          explain: "Because it is a live schedule, adding or renaming sheets refreshes the index with no manual typing."
        },
        {
          type: "fill",
          q: "A sheet list is a kind of ____ that reads live data from the sheets.",
          answer: "schedule",
          accept: ["schedule", "sheet schedule"],
          explain: "Sheet lists are schedules, so they stay in sync with the model like any other schedule."
        },
        {
          type: "mcq",
          q: "Which columns would you typically show in a sheet list?",
          choices: ["Sheet number and sheet name", "Wall thickness and area", "Room finishes", "Camera positions"],
          answer: 0,
          explain: "A drawing index lists each sheet by its number and name so readers can find pages."
        },
        {
          type: "match",
          q: "Match each idea to its meaning.",
          pairs: [["Sheet list", "The auto-built drawing index"], ["Sheet number", "A column in the index"], ["Schedule", "The engine behind the list"]],
          explain: "A sheet list is a schedule whose rows are sheets and whose columns are sheet fields."
        },
        {
          type: "truefalse",
          q: "You can place a sheet list on a sheet, such as the cover page.",
          answer: true,
          explain: "Like other schedules, a sheet list can be dropped on a sheet to print the index in the set."
        },
        {
          type: "order",
          q: "Order the steps to build a drawing index.",
          items: ["Create a sheet list schedule", "Choose sheet number and name fields", "Sort the rows in order", "Place the list on the cover sheet"],
          explain: "Make the sheet list, pick fields, sort, then place it where it prints."
        }
      ]
    },
    {
      id: "l78",
      title: "Printing & PDF Export",
      intro: "Publishing your set means printing or exporting the selected sheets, usually to PDF, at the right size and scale.",
      questions: [
        {
          type: "mcq",
          q: "What is the most common way to publish a Revit drawing set today?",
          choices: ["Export or print the sheets to PDF", "Screenshot each view manually", "Email the .rvt file", "Copy the title block only"],
          answer: 0,
          explain: "Sheets are typically exported or printed to PDF so recipients get a fixed, viewable set."
        },
        {
          type: "truefalse",
          q: "You can select multiple sheets at once and publish them in a single batch.",
          answer: true,
          explain: "Batch publishing lets you output the whole set or a chosen group of sheets in one operation."
        },
        {
          type: "fill",
          q: "When you print a sheet at full size on the correct page size, each drawing comes out at its intended ____.",
          answer: "scale",
          accept: ["scale"],
          explain: "Each viewport already carries its scale, so printing the sheet at full size preserves those drawing scales."
        },
        {
          type: "mcq",
          q: "Why do offices often export to PDF instead of sending the .rvt file?",
          choices: ["PDFs are fixed, easy to view, and do not need Revit", "PDFs are always smaller than the model", "PDFs can be edited in Revit directly", "PDFs update the model automatically"],
          answer: 0,
          explain: "PDFs freeze the issued set into a portable format anyone can open without Revit."
        },
        {
          type: "match",
          q: "Match each choice to what it controls when publishing.",
          pairs: [["Paper size", "The physical page dimensions"], ["Sheet selection", "Which sheets get published"], ["File format", "PDF or a plotted print"]],
          explain: "You pick which sheets, at what page size, in what output format when you publish."
        },
        {
          type: "truefalse",
          q: "Because sheets show live views, re-exporting after a model change gives you an updated PDF set.",
          answer: true,
          explain: "The set always reflects the current model, so a fresh export captures the latest changes."
        },
        {
          type: "order",
          q: "Order the steps to publish a set to PDF.",
          items: ["Select the sheets to publish", "Choose PDF and page size", "Set the output folder", "Export the set"],
          explain: "Pick the sheets, set format and size, choose a location, then export."
        }
      ]
    },
    {
      id: "l79",
      title: "Exporting to CAD & IFC",
      intro: "Beyond PDF, you can export views to CAD formats or the whole model to IFC so other teams and tools can use your data.",
      questions: [
        {
          type: "mcq",
          q: "When exporting to CAD, what does Revit typically produce?",
          choices: ["DWG or DXF files of the views", "A single PDF only", "A new Revit template", "A rendered image"],
          answer: 0,
          explain: "CAD export writes DWG or DXF files so teams using AutoCAD can open the geometry."
        },
        {
          type: "fill",
          q: "The open, neutral BIM exchange format used to share a model between different software is ____.",
          answer: "IFC",
          accept: ["ifc"],
          explain: "IFC is a vendor-neutral standard that lets non-Revit tools read the model and its data."
        },
        {
          type: "truefalse",
          q: "IFC is an open standard, not tied to a single software vendor.",
          answer: true,
          explain: "IFC is an openBIM standard, which is why it is used to hand models to other applications."
        },
        {
          type: "mcq",
          q: "Why would you export to IFC instead of DWG?",
          choices: ["IFC carries 3D objects and their data for other BIM tools", "IFC prints faster than DWG", "IFC is only for 2D line work", "IFC replaces the need for sheets"],
          answer: 0,
          explain: "IFC preserves 3D elements and parameters, so it suits model coordination across BIM platforms."
        },
        {
          type: "match",
          q: "Match each format to its main use.",
          pairs: [["DWG", "2D CAD geometry for AutoCAD"], ["IFC", "Open 3D BIM exchange"], ["PDF", "Fixed, viewable drawing set"]],
          explain: "DWG shares CAD linework, IFC shares the BIM model, and PDF shares the printed set."
        },
        {
          type: "truefalse",
          q: "Mapping Revit categories to layer names is a common step when setting up a CAD export.",
          answer: true,
          explain: "Export setups map categories to CAD layers so the DWG matches the receiving office's standards."
        },
        {
          type: "order",
          q: "Order the steps to export views to CAD.",
          items: ["Choose the export format like DWG", "Select the views or sheets to export", "Set the layer mapping", "Export the files"],
          explain: "Pick the format, choose what to export, map layers, then write the files."
        }
      ]
    },
    {
      id: "l80",
      title: "Organizing the Set",
      intro: "A clear numbering scheme and a tidy Project Browser keep a large drawing set easy to navigate and issue.",
      questions: [
        {
          type: "mcq",
          q: "Why does a consistent sheet numbering scheme matter?",
          choices: ["It keeps the set ordered and easy to find pages in", "It makes the model render faster", "It changes the model units", "It hides revision clouds"],
          answer: 0,
          explain: "A logical numbering scheme groups disciplines and sorts sheets so readers can navigate the set."
        },
        {
          type: "truefalse",
          q: "Discipline prefixes like A for architectural and S for structural are a common numbering convention.",
          answer: true,
          explain: "Prefix letters group sheets by discipline, a widely used industry numbering habit."
        },
        {
          type: "fill",
          q: "The panel that lists views, sheets, and schedules for navigation is the Project ____.",
          answer: "Browser",
          accept: ["browser", "project browser"],
          explain: "The Project Browser is the navigation tree; organizing it makes a big set manageable."
        },
        {
          type: "mcq",
          q: "How can you group and sort sheets in the Project Browser?",
          choices: ["With browser organization rules based on parameters", "By deleting sheets you do not want to see", "By changing the print driver", "By exporting to IFC"],
          answer: 0,
          explain: "Browser organization sorts and groups sheets and views by parameter values you choose."
        },
        {
          type: "match",
          q: "Match each tool to how it keeps the set organized.",
          pairs: [["Sheet numbering", "Orders and groups the pages"], ["Project Browser", "The navigation tree"], ["Browser organization", "Rules that sort and group entries"]],
          explain: "Numbering, the browser, and organization rules together make a large set easy to work in."
        },
        {
          type: "truefalse",
          q: "Browser organization rules can group sheets by a discipline or phase parameter.",
          answer: true,
          explain: "You can sort and group by parameters like discipline or phase to structure the browser tree."
        },
        {
          type: "order",
          q: "Order the steps to organize a sheet set.",
          items: ["Decide a numbering scheme", "Number and name the sheets", "Set up browser organization rules", "Review the sorted set for gaps"],
          explain: "Plan the scheme, apply it, set browser rules, then check the ordered result."
        }
      ]
    }
  ]
});
