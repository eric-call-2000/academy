window.ACADEMY.addUnit("revit", {
  id: "unit-9",
  title: "Annotation & Detailing",
  color: "#58cc02",
  icon: "✏️",
  description: "Documenting the model with dimensions, text, tags, and details.",
  lessons: [
    {
      id: "l65",
      title: "Dimensions",
      intro: "Dimensions measure the model and report distances that update as the model changes.",
      questions: [
        {
          type: "mcq",
          q: "What does an Aligned dimension measure?",
          choices: [
            "The true distance between two parallel references, running parallel to them",
            "The horizontal or vertical part of the distance between two references",
            "The distance from a reference to the nearest grid line in the view",
            "The length along a curved wall measured from one end to the other"
          ],
          answer: 0,
          explain: "Aligned dimensions run parallel to the references you pick, giving the true distance between them."
        },
        {
          type: "mcq",
          q: "What does a Linear dimension measure?",
          choices: [
            "The straight horizontal or vertical distance between references",
            "The true diagonal distance running parallel to the references",
            "The radius or diameter of an arc between two references",
            "The angle between two references measured in degrees"
          ],
          answer: 0,
          explain: "Linear dimensions report only the horizontal or vertical component of the distance, not the diagonal."
        },
        {
          type: "truefalse",
          q: "Dimensions in Revit are annotation and appear only in the view where you place them.",
          answer: true,
          explain: "Dimensions are view-specific annotation; they do not automatically show in other views."
        },
        {
          type: "truefalse",
          q: "A permanent dimension updates its value automatically when the element it measures moves.",
          answer: true,
          explain: "Dimensions read live model geometry, so their values change when the model changes."
        },
        {
          type: "fill",
          q: "A short blue dimension that appears while an element is selected and disappears when you deselect it is called a ____ dimension.",
          answer: "temporary",
          accept: ["temporary", "temp"],
          explain: "Temporary dimensions show while an element is selected and let you type an exact value to move it."
        },
        {
          type: "match",
          q: "Match each dimension type to what it measures.",
          pairs: [
            ["Aligned", "True distance parallel to the picked references"],
            ["Linear", "Horizontal or vertical distance only"],
            ["Angular", "The angle between two references"],
            ["Radial", "The radius of an arc or circle"]
          ],
          explain: "Revit offers Aligned, Linear, Angular, Radial, and Arc Length dimensions for different geometry."
        },
        {
          type: "truefalse",
          q: "You can select a temporary dimension's witness line and drag it to a different reference to change what it measures.",
          answer: true,
          explain: "Temporary dimensions can be re-referenced by moving their witness lines to other faces or points."
        },
        {
          type: "mcq",
          q: "Which setting controls tick marks, text size, and units for a dimension?",
          choices: [
            "Its Type properties (the Dimension Style type)",
            "Its instance properties in the Properties palette",
            "The view's Visibility/Graphics settings",
            "The project's Object Styles for dimensions"
          ],
          answer: 0,
          explain: "A dimension's appearance is driven by its Type, so editing the type changes all dimensions of that style."
        }
      ]
    },
    {
      id: "l66",
      title: "Text & Keynotes",
      intro: "Text and keynotes add notes to a view, with leaders pointing to what they describe.",
      questions: [
        {
          type: "mcq",
          q: "What is a leader on a text note?",
          choices: [
            "A line that points from the note to the element it describes",
            "A heading line placed above a group of notes",
            "The first line of a note, which is shown in bold",
            "A dashed line that links the note to its keynote source file"
          ],
          answer: 0,
          explain: "A leader is a pointer line connecting a text note to the thing it is describing."
        },
        {
          type: "truefalse",
          q: "Text notes are annotation and only appear in the view where they are placed.",
          answer: true,
          explain: "Like other annotation, text is view-specific and does not follow to other views."
        },
        {
          type: "mcq",
          q: "What is the main advantage of keynotes over plain typed text?",
          choices: [
            "They pull standardized note values from a keynote file so wording stays consistent",
            "They update the element's material when you edit the note text in a view",
            "They are placed once and then copied to every sheet in the set automatically",
            "They let you type longer notes that wrap neatly inside the detail view area"
          ],
          answer: 0,
          explain: "Keynotes reference a shared keynote text file, keeping note wording consistent across a project."
        },
        {
          type: "fill",
          q: "A keynote can be tied to an element, a material, or placed as a ____ keynote for general notes.",
          answer: "user",
          accept: ["user", "user keynote"],
          explain: "The three keynote kinds are Element, Material, and User keynotes."
        },
        {
          type: "truefalse",
          q: "Text size in a note scales with the model, so it prints larger at larger view scales.",
          answer: false,
          explain: "Annotation text has a fixed printed size; the model scales, but the text stays the same on paper."
        },
        {
          type: "match",
          q: "Match each keynote kind to its source.",
          pairs: [
            ["Element keynote", "A note value assigned to a model element or family"],
            ["Material keynote", "A note value assigned to a material"],
            ["User keynote", "A note the user picks from the keynote list for a general note"]
          ],
          explain: "Keynotes read from a central keynote text file so numbers and text match a project standard."
        },
        {
          type: "order",
          q: "Order the steps to place a text note with a leader.",
          items: [
            "Start the Text tool and turn on a leader",
            "Click where the leader should point",
            "Click where the note text should sit",
            "Type the note text and click away to finish"
          ],
          explain: "You set the leader start, place the text box, then type the words."
        },
        {
          type: "mcq",
          q: "Where does a keynote get its actual note text from?",
          choices: [
            "A separate keynote text file referenced by the project",
            "A text parameter typed into each element's properties",
            "The material description stored in the materials browser",
            "The shared parameter file loaded into the project"
          ],
          answer: 0,
          explain: "Keynote text lives in an external keynote file, which is why keynotes stay consistent."
        }
      ]
    },
    {
      id: "l67",
      title: "Tags",
      intro: "Tags report an element's data directly in a view without you retyping it.",
      questions: [
        {
          type: "mcq",
          q: "What does a tag display?",
          choices: [
            "Parameter data read live from the element it labels",
            "A fixed text label that you type when placing it",
            "A copy of the element's data saved when placed",
            "The element's category name and nothing else"
          ],
          answer: 0,
          explain: "A tag reads parameter values from the tagged element, so it updates when that data changes."
        },
        {
          type: "truefalse",
          q: "If you change a door's Mark value, its door tag updates automatically.",
          answer: true,
          explain: "Tags report live parameters, so editing the parameter changes the tag text."
        },
        {
          type: "mcq",
          q: "A tag is itself a kind of Revit family. What category of family is it?",
          choices: [
            "An annotation family",
            "A system family",
            "An in-place family",
            "A structural framing family"
          ],
          answer: 0,
          explain: "Tags are annotation families, so they are 2D symbols that live in views, not the 3D model."
        },
        {
          type: "fill",
          q: "The command that places tags on every untagged element of a category in a view at once is Tag ____.",
          answer: "all",
          accept: ["all", "tag all"],
          explain: "Tag All places tags on all untagged elements of chosen categories in the current view."
        },
        {
          type: "truefalse",
          q: "A tag can display a parameter that is empty, in which case it may show a question mark or blank.",
          answer: true,
          explain: "If the tagged parameter has no value, the tag shows nothing or a placeholder like a question mark."
        },
        {
          type: "match",
          q: "Match each tag to the element it typically labels.",
          pairs: [
            ["Door tag", "A door, usually showing its Mark"],
            ["Room tag", "A room, showing name, number, or area"],
            ["Wall tag", "A wall type"],
            ["Window tag", "A window"]
          ],
          explain: "Each category has its own tag family that reads that category's parameters."
        },
        {
          type: "mcq",
          q: "To tag or schedule a custom parameter, and to read it across linked files, that parameter must be a ____.",
          choices: [
            "Shared parameter",
            "Temporary dimension",
            "View template",
            "Workset"
          ],
          answer: 0,
          explain: "A custom parameter must be Shared to be tagged or scheduled, and Shared parameters can be read across linked files."
        }
      ]
    },
    {
      id: "l68",
      title: "Detail Components",
      intro: "Detail components are 2D drafting elements that add real-world profiles to a detail without modeling them in 3D.",
      questions: [
        {
          type: "mcq",
          q: "What is a detail component?",
          choices: [
            "A 2D loadable detail family showing a profile or item in a detail view",
            "A 3D model family placed only in section and detail views",
            "A group of detail lines that is saved and reused inside a single view",
            "A filled region type with a pattern for one material"
          ],
          answer: 0,
          explain: "Detail components are 2D loadable families used to flesh out details without adding 3D geometry."
        },
        {
          type: "truefalse",
          q: "Detail components appear in the 3D model as well as in the detail view.",
          answer: false,
          explain: "Detail components are 2D and view-specific; they do not add anything to the 3D model."
        },
        {
          type: "mcq",
          q: "What is a repeating detail used for?",
          choices: [
            "Arraying one detail component along a path, like a run of brick or blocking",
            "Copying a typical detail view into many sections at the same time",
            "Tiling a fill pattern inside a region, like a brick or concrete hatch",
            "Linking one callout to many views so the detail stays in sync"
          ],
          answer: 0,
          explain: "A repeating detail spaces one detail component repeatedly along a line, such as masonry courses."
        },
        {
          type: "fill",
          q: "A repeating detail places one detail component over and over along a ____ that you draw.",
          answer: "path",
          accept: ["path", "line"],
          explain: "You draw a path and the repeating detail arrays the component along it at a set spacing."
        },
        {
          type: "truefalse",
          q: "Using detail components instead of modeling every small item can keep the model lighter and faster.",
          answer: true,
          explain: "2D detail components avoid heavy 3D geometry, so details stay efficient to produce."
        },
        {
          type: "match",
          q: "Match each item to whether it is 2D detail or 3D model.",
          pairs: [
            ["Detail component", "2D, view-specific"],
            ["Repeating detail", "2D array of a detail component"],
            ["Wall", "3D model element"],
            ["Structural column", "3D model element"]
          ],
          explain: "Detail components and repeating details are 2D; walls and columns are 3D model geometry."
        },
        {
          type: "order",
          q: "Order the steps to build a run of brick coursing with a repeating detail.",
          items: [
            "Have a brick detail component available in the project",
            "Start the Repeating Detail tool and choose that component",
            "Set the spacing so courses sit correctly",
            "Draw the path where the coursing should run"
          ],
          explain: "You pick the component, set spacing, then draw the path to array it."
        },
        {
          type: "mcq",
          q: "Detail components are which kind of family?",
          choices: [
            "Loadable detail families placed in views",
            "System families like walls and floors",
            "In-place families built in the project",
            "Generic model families hosted in 3D"
          ],
          answer: 0,
          explain: "Detail components are loadable families used for 2D detailing within views."
        }
      ]
    },
    {
      id: "l69",
      title: "Drafting Views",
      intro: "Drafting views hold 2D details that are drawn by hand and not tied to any model geometry.",
      questions: [
        {
          type: "mcq",
          q: "What is a drafting view?",
          choices: [
            "A 2D view with no live model geometry, used to draw standalone details",
            "A callout of a section that shows the model at a larger scale",
            "A plan view with model categories hidden so only the annotation shows",
            "A sheet view used to lay out details before printing"
          ],
          answer: 0,
          explain: "A drafting view is a blank 2D canvas for details that are not linked to the model."
        },
        {
          type: "truefalse",
          q: "A drafting view shows no model elements; you build it with detail lines, regions, text, and detail components.",
          answer: true,
          explain: "Drafting views contain only 2D drafting content, not model geometry."
        },
        {
          type: "mcq",
          q: "Why are drafting views useful for reusable typical details?",
          choices: [
            "A standard detail can be saved and reused across projects since it is not tied to model geometry",
            "They update automatically from the model, so typical details always match the design",
            "They are stored in the central file, so every team member can edit the same detail",
            "They print at any scale without changing, so one detail fits every sheet in a set"
          ],
          answer: 0,
          explain: "Because they are pure 2D, drafting views of typical details can be transferred between projects."
        },
        {
          type: "fill",
          q: "Because a drafting view is not cut from the model, its content does not ____ when the model changes.",
          answer: "update",
          accept: ["update", "change"],
          explain: "Drafting views are static 2D drawings; they do not react to model changes like a section would."
        },
        {
          type: "truefalse",
          q: "A callout on a plan can be linked to reference an existing drafting view instead of cutting new detail geometry.",
          answer: true,
          explain: "You can point a reference callout to a drafting view so the sheet callout ties to that detail."
        },
        {
          type: "match",
          q: "Match each view to whether it shows live model geometry.",
          pairs: [
            ["Drafting view", "No model geometry, hand-drawn 2D"],
            ["Section view", "Live geometry cut from the model"],
            ["Detail callout of the model", "Live enlarged model geometry"],
            ["Plan view", "Live geometry cut at a level"]
          ],
          explain: "Only the drafting view is fully 2D; sections, callouts of the model, and plans read the model."
        },
        {
          type: "mcq",
          q: "How can you move a finished drafting view detail into another project?",
          choices: [
            "Save the drafting view to a file and insert it into the other project",
            "Link the first project and copy the view from the linked model",
            "Apply its view template to a drafting view in the other project",
            "Transfer Project Standards from the first project into the other"
          ],
          answer: 0,
          explain: "Drafting views can be saved out and inserted into other projects, making a reusable detail library."
        }
      ]
    },
    {
      id: "l70",
      title: "Legends",
      intro: "Legends explain the symbols and components used in a drawing set and can appear on many sheets.",
      questions: [
        {
          type: "mcq",
          q: "What is a legend view used for?",
          choices: [
            "Explaining symbols, line styles, or component types used in the project",
            "Listing the quantities of every family type that is placed in the model",
            "Showing a cropped 3D view of key assemblies on the cover sheet",
            "Recording the date and description of each revision issued"
          ],
          answer: 0,
          explain: "Legends document the meaning of symbols and components so readers can interpret the drawings."
        },
        {
          type: "truefalse",
          q: "The same legend view can be placed on more than one sheet.",
          answer: true,
          explain: "Legends are the one view type that can be reused on multiple sheets, unlike most views."
        },
        {
          type: "mcq",
          q: "A legend component in a legend is best described as what?",
          choices: [
            "A graphic representation of a family type, shown at a chosen view direction",
            "A live 3D copy of a model element that is included in schedule counts",
            "A detail component drawn by hand to look like the family type in a plan view",
            "An image of the family type pasted in from a rendered view"
          ],
          answer: 0,
          explain: "Legend components display a family type graphically for reference and do not affect schedules or counts."
        },
        {
          type: "truefalse",
          q: "Placing a legend component in a legend adds that element to the model and increases its schedule count.",
          answer: false,
          explain: "Legend components are for reference only; they do not add real elements or affect counts."
        },
        {
          type: "fill",
          q: "Because a legend can go on many sheets, it is ideal for a shared ____ legend used throughout the set.",
          answer: "symbol",
          accept: ["symbol", "symbols"],
          explain: "A symbol legend defines what each drawing symbol means and is reused across sheets."
        },
        {
          type: "match",
          q: "Match each legend content type to what it shows.",
          pairs: [
            ["Symbol legend", "Annotation symbols and their meanings"],
            ["Component legend", "Graphics of family types used in the project"],
            ["Line style key", "Line patterns and what they represent"]
          ],
          explain: "Legends can mix symbols, component graphics, and line-style keys to explain the drawings."
        },
        {
          type: "mcq",
          q: "Which is a key difference between a legend and a schedule?",
          choices: [
            "A legend is graphic and reusable on many sheets; a schedule is tabular live data",
            "A legend counts elements in the model; a schedule shows pictures of each type",
            "A legend updates live from the model; a schedule is drawn by hand as 2D",
            "A legend is a 3D view of components; a schedule is a 2D list of them"
          ],
          answer: 0,
          explain: "Legends explain graphics and can repeat on sheets; schedules are live tables of element data."
        }
      ]
    },
    {
      id: "l71",
      title: "Filled & Masking Regions",
      intro: "Regions add hatching or hide geometry inside a detail using 2D area shapes.",
      questions: [
        {
          type: "mcq",
          q: "What does a filled region do?",
          choices: [
            "Fills a 2D boundary with a hatch or solid fill pattern",
            "Creates a room-bounding area that reports its floor area",
            "Adds a surface pattern to a material in every view",
            "Colors a room by a chosen data value in a plan"
          ],
          answer: 0,
          explain: "A filled region draws a bounded 2D area with a chosen fill pattern, like insulation or concrete hatch."
        },
        {
          type: "mcq",
          q: "What does a masking region do?",
          choices: [
            "Covers or hides geometry behind it within the view",
            "Adds a hatch pattern to show a material in section",
            "Hides a category in every view of the project",
            "Crops the view to a sketched boundary shape"
          ],
          answer: 0,
          explain: "A masking region is an opaque 2D shape that hides whatever is behind it in that view."
        },
        {
          type: "truefalse",
          q: "Filled and masking regions are 2D and only affect the view they are drawn in.",
          answer: true,
          explain: "Both are view-specific 2D detailing elements and do not change the model."
        },
        {
          type: "fill",
          q: "The outer edge of a region is defined by its boundary line, which can be visible or set to ____ so no line prints.",
          answer: "invisible",
          accept: ["invisible", "none"],
          explain: "Region boundary lines can use an Invisible line style when you want the fill without a drawn edge."
        },
        {
          type: "truefalse",
          q: "A masking region can clean up a detail by hiding parts of model geometry you do not want shown.",
          answer: true,
          explain: "Masking regions let you cover unwanted geometry in a detail without editing the model."
        },
        {
          type: "match",
          q: "Match each region to its main purpose.",
          pairs: [
            ["Filled region", "Add a hatch or solid fill to an area"],
            ["Masking region", "Hide geometry behind it in the view"],
            ["Invisible boundary line", "Show a fill with no drawn edge"]
          ],
          explain: "Filled regions add pattern, masking regions cover, and boundary line style controls the edge."
        },
        {
          type: "order",
          q: "Order the steps to draw a filled region.",
          items: [
            "Start the Filled Region tool",
            "Choose a fill pattern type and boundary line style",
            "Sketch a closed loop for the region boundary",
            "Finish the sketch to create the region"
          ],
          explain: "You pick the tool, set pattern and line, sketch a closed loop, then finish."
        }
      ]
    },
    {
      id: "l72",
      title: "Building a Detail",
      intro: "A finished detail layers live model geometry, 2D detail components, and annotation together.",
      questions: [
        {
          type: "order",
          q: "Order a typical workflow for building a section detail on a sheet.",
          items: [
            "Cut a section or callout to get live model geometry",
            "Add detail components and regions to enrich the 2D",
            "Add dimensions, tags, keynotes, and text",
            "Place the detail view on a sheet"
          ],
          explain: "You start from model geometry, layer 2D detailing, add annotation, then compose it on a sheet."
        },
        {
          type: "mcq",
          q: "In a layered detail, what provides the accurate underlying geometry?",
          choices: [
            "The live model, cut by a section or callout",
            "Detail components drawn over a drafting view",
            "An imported CAD detail traced on a sheet",
            "A legend showing each layer of the assembly"
          ],
          answer: 0,
          explain: "The model geometry, cut by a section or callout, gives the correct base for the detail."
        },
        {
          type: "truefalse",
          q: "Detail components and regions are added on top of the model geometry to show items too small or generic to model.",
          answer: true,
          explain: "2D detailing enriches the cut geometry with flashing, sealant, blocking, and similar items."
        },
        {
          type: "fill",
          q: "The final layer of a detail is ____, which includes dimensions, tags, keynotes, and text.",
          answer: "annotation",
          accept: ["annotation", "annotations"],
          explain: "Annotation is the top layer that labels and measures the detail for the reader."
        },
        {
          type: "match",
          q: "Match each detail layer to an example element.",
          pairs: [
            ["Model geometry", "Wall cut by a section"],
            ["2D detailing", "A flashing detail component"],
            ["Annotation", "A dimension or keynote"],
            ["Sheet composition", "The detail placed on a sheet"]
          ],
          explain: "A detail is built from model geometry, 2D detailing, annotation, and finally sheet placement."
        },
        {
          type: "truefalse",
          q: "Once placed on a sheet, a detail's model geometry still updates if the model changes.",
          answer: true,
          explain: "The model-cut part of a detail stays live, so it reflects later model edits."
        },
        {
          type: "mcq",
          q: "Why keep small items as 2D detailing rather than modeling every one in 3D?",
          choices: [
            "It keeps the model efficient while still communicating the construction clearly",
            "2D detail items show up in schedules and material takeoffs automatically",
            "2D detail items are required before any tags can be placed in a view",
            "Small 3D items cannot be cut by sections, so they would never appear"
          ],
          answer: 0,
          explain: "Detailing small, generic items in 2D avoids bloating the model while still documenting intent."
        }
      ]
    }
  ]
});
