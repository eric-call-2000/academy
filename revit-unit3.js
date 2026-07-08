window.ACADEMY.addUnit("revit", {
  id: "unit-3",
  title: "Families & Elements",
  color: "#ff9600",
  icon: "🧩",
  description: "The heart of Revit: categories, families, types, and instances.",
  lessons: [
    {
      id: "l17",
      title: "The Element Hierarchy",
      intro: "Every Revit element sits in a nested order of Category, Family, Type, and Instance.",
      questions: [
        {
          type: "order",
          q: "Put the Revit element hierarchy in order from broadest to most specific.",
          items: ["Category", "Family", "Type", "Instance"],
          explain: "Category is the broadest grouping, Family narrows it, Type is a specific variation, and Instance is a single placed element."
        },
        {
          type: "mcq",
          q: "In Revit, what is a Category?",
          choices: ["A broad classification like Walls, Doors, or Windows", "A single placed element in the model", "A saved view of the project", "A worksharing container"],
          answer: 0,
          explain: "Categories are the top-level grouping of elements, such as Walls, Doors, Furniture, or Lighting Fixtures."
        },
        {
          type: "fill",
          q: "A single placed element in the model, like one specific door, is called an ____.",
          answer: "instance",
          accept: ["instance"],
          explain: "An Instance is one actual element placed in the project; it belongs to a Type, which belongs to a Family, which belongs to a Category."
        },
        {
          type: "truefalse",
          q: "A Type is a specific variation within a Family, such as a 36-inch-wide version of a single door family.",
          answer: true,
          explain: "Types define named variations of a Family, like sizes or finishes, and each placed element is an Instance of a Type."
        },
        {
          type: "match",
          q: "Match each level of the hierarchy to what it represents.",
          pairs: [["Category", "Broad group like Doors"], ["Family", "A door design or product line"], ["Type", "A specific size of that door"], ["Instance", "One door placed in a wall"]],
          explain: "Each level narrows the scope: Category to Family to Type to Instance."
        },
        {
          type: "mcq",
          q: "Two doors of the same Type placed in a project are best described as:",
          choices: ["Two Instances of the same Type", "Two different Families", "Two Categories", "Two separate templates"],
          answer: 0,
          explain: "Identical placed doors are separate Instances that share one Type definition."
        },
        {
          type: "truefalse",
          q: "Category is more specific than Instance in the Revit hierarchy.",
          answer: false,
          explain: "Category is the broadest level and Instance is the most specific, so the statement is reversed."
        }
      ]
    },
    {
      id: "l18",
      title: "System Families",
      intro: "Walls, floors, and roofs are System Families that live inside the project itself.",
      questions: [
        {
          type: "mcq",
          q: "Which of these is a System Family?",
          choices: ["Walls", "A loadable chair", "A door component", "A window component"],
          answer: 0,
          explain: "Walls, floors, roofs, ceilings, and stairs are System Families defined within the project, not loaded from external files."
        },
        {
          type: "truefalse",
          q: "System Families are saved as separate .rfa files that you load into a project.",
          answer: false,
          explain: "System Families are defined inside the project itself; only loadable families come from external .rfa files."
        },
        {
          type: "fill",
          q: "Walls, floors, and roofs are examples of ____ families that are built into the project.",
          answer: "system",
          accept: ["system"],
          explain: "System Families are hosted in the project environment and cannot be created as standalone .rfa files."
        },
        {
          type: "mcq",
          q: "How do you usually create a new wall Type?",
          choices: ["Duplicate an existing wall Type and edit its structure", "Draw a new .rfa file from scratch", "Load one from a manufacturer website only", "Convert a door into a wall"],
          answer: 0,
          explain: "You duplicate an existing System Family Type and adjust its properties, such as the wall structure layers."
        },
        {
          type: "match",
          q: "Match each System Family to its role.",
          pairs: [["Wall", "Vertical enclosing element"], ["Floor", "Horizontal walkable surface"], ["Roof", "Top covering of a building"]],
          explain: "Walls, floors, and roofs are common System Families that define the building envelope and are edited by their layered structure."
        },
        {
          type: "truefalse",
          q: "You can copy System Family Types between projects by copying and pasting a placed element or transferring project standards.",
          answer: true,
          explain: "Because System Families live in the project, their Types move via copy/paste or Transfer Project Standards rather than by loading an .rfa file."
        },
        {
          type: "order",
          q: "Order these steps to make a custom wall Type.",
          items: ["Select an existing wall Type", "Duplicate the Type", "Edit the structure layers", "Rename and apply the new Type"],
          explain: "Duplicating and editing an existing System Family Type is the standard way to build a new wall assembly."
        }
      ]
    },
    {
      id: "l19",
      title: "Loadable Families",
      intro: "Doors, windows, and furniture are Loadable Families you bring in as .rfa files.",
      questions: [
        {
          type: "fill",
          q: "Loadable families are stored in files with the ____ extension.",
          answer: ".rfa",
          accept: [".rfa", "rfa"],
          explain: "Loadable families are saved as .rfa files and loaded into projects as needed."
        },
        {
          type: "mcq",
          q: "Which of these is typically a Loadable Family?",
          choices: ["A door", "A wall", "A floor", "A roof"],
          answer: 0,
          explain: "Doors, windows, furniture, and equipment are Loadable Families that come from external .rfa files."
        },
        {
          type: "truefalse",
          q: "Loadable Families can be created and edited outside the project in the Family Editor.",
          answer: true,
          explain: "Loadable families are authored in the Family Editor as .rfa files and then loaded into projects."
        },
        {
          type: "match",
          q: "Match each item to whether it is a System or Loadable Family.",
          pairs: [["Window", "Loadable"], ["Floor", "System"], ["Furniture", "Loadable"], ["Ceiling", "System"]],
          explain: "Components like windows and furniture load in as .rfa files, while walls, floors, and ceilings are built into the project."
        },
        {
          type: "mcq",
          q: "A benefit of Loadable Families is that they:",
          choices: ["Can be reused across many projects by loading the same .rfa", "Cannot be scheduled", "Are unique to a single view", "Replace all System Families"],
          answer: 0,
          explain: "One .rfa can be loaded into many projects, making Loadable Families a reusable content library."
        },
        {
          type: "order",
          q: "Order the steps to place a manufacturer's chair in your project.",
          items: ["Obtain the .rfa file", "Load the family into the project", "Select a Type", "Place an instance in a view"],
          explain: "You load the .rfa, pick a Type, then place instances where needed."
        },
        {
          type: "truefalse",
          q: "Loadable Families must always be modeled directly inside the project and can never be reused.",
          answer: false,
          explain: "Loadable Families are external .rfa files precisely so they can be reused across projects."
        }
      ]
    },
    {
      id: "l20",
      title: "In-Place Families",
      intro: "In-Place Families let you model one-off custom geometry directly inside the project.",
      questions: [
        {
          type: "mcq",
          q: "When is an In-Place Family the right choice?",
          choices: ["For unique, one-off geometry specific to this project", "For a door reused in many projects", "For a standard catalog window", "For every wall in the model"],
          answer: 0,
          explain: "In-Place Families suit unique geometry that is specific to one project and unlikely to be reused."
        },
        {
          type: "truefalse",
          q: "In-Place Families are created directly within the project rather than in a separate .rfa file.",
          answer: true,
          explain: "In-Place Families are modeled inside the project itself, tied to that specific model."
        },
        {
          type: "fill",
          q: "Because they are project-specific, ____ families are not meant to be shared across many projects.",
          answer: "in-place",
          accept: ["in-place", "inplace", "in place"],
          explain: "In-Place Families live inside a single project and are not reusable content like Loadable Families."
        },
        {
          type: "mcq",
          q: "A downside of overusing In-Place Families is that they:",
          choices: ["Can bloat the model and are hard to reuse", "Cannot have any geometry", "Are always faster than loadable families", "Cannot be assigned a category"],
          answer: 0,
          explain: "Many In-Place Families can increase file size and are not reusable, so use them sparingly."
        },
        {
          type: "match",
          q: "Match each family kind to its best use.",
          pairs: [["Loadable", "Reusable component across projects"], ["In-Place", "One-off custom geometry"], ["System", "Walls, floors, and roofs"]],
          explain: "Loadable for reusable content, In-Place for unique one-offs, System for built-in structural elements."
        },
        {
          type: "truefalse",
          q: "In-Place Families are the best way to build a chair you will use in dozens of projects.",
          answer: false,
          explain: "A reusable chair should be a Loadable Family so it can be shared; In-Place is for one-off geometry."
        },
        {
          type: "mcq",
          q: "When you create an In-Place Family, you first assign it a:",
          choices: ["Category", "Workset only", "View template", "Drawing sheet"],
          answer: 0,
          explain: "You choose a Category for the In-Place Family so it schedules and displays correctly."
        }
      ]
    },
    {
      id: "l21",
      title: "Type vs Instance Parameters",
      intro: "Some parameters are shared by a whole Type while others are set per placed element.",
      questions: [
        {
          type: "mcq",
          q: "Changing a Type parameter affects:",
          choices: ["Every instance of that Type", "Only the one selected instance", "Only the current view", "Nothing until you reload the family"],
          answer: 0,
          explain: "Type parameters are shared, so editing one updates all instances of that Type at once."
        },
        {
          type: "truefalse",
          q: "An Instance parameter can differ from one placed element to another even within the same Type.",
          answer: true,
          explain: "Instance parameters are set per placement, so two elements of the same Type can hold different instance values."
        },
        {
          type: "fill",
          q: "A parameter that changes all elements of the same Type at once is a ____ parameter.",
          answer: "type",
          accept: ["type"],
          explain: "Type parameters apply to the whole Type, so editing one propagates to every instance."
        },
        {
          type: "match",
          q: "Match each parameter to whether it is usually Type or Instance.",
          pairs: [["Door width for a size", "Type"], ["Sill height of one window", "Instance"], ["Fire rating of a wall type", "Type"], ["Comments on one element", "Instance"]],
          explain: "Values that define a size or standard are usually Type; values that vary per placement are Instance."
        },
        {
          type: "mcq",
          q: "Which value is most logical to make an Instance parameter?",
          choices: ["The mounting height of a specific placed light", "The manufacturer name for a Type", "The material assembly of a wall Type", "The fixed leaf width of a door Type"],
          answer: 0,
          explain: "Mounting height often varies per placement, so it fits an Instance parameter."
        },
        {
          type: "truefalse",
          q: "Editing an Instance parameter on one element changes every other element of the same Type.",
          answer: false,
          explain: "Instance parameters affect only the selected element; Type parameters are the ones that change all instances."
        },
        {
          type: "order",
          q: "Order the reasoning to decide if a value should be a Type or Instance parameter.",
          items: ["Ask if the value should be the same for all of this Type", "If yes, make it a Type parameter", "If it varies per placement, make it an Instance parameter", "Assign and test on placed elements"],
          explain: "Shared-across-all values are Type parameters; values that vary per placement are Instance parameters."
        }
      ]
    },
    {
      id: "l22",
      title: "Project vs Shared Parameters",
      intro: "Shared Parameters are needed to schedule and tag custom data consistently across projects.",
      questions: [
        {
          type: "mcq",
          q: "Why are Shared Parameters important?",
          choices: ["They can appear in tags and schedules and stay consistent across files", "They only work in one single view", "They replace all built-in parameters", "They cannot be scheduled"],
          answer: 0,
          explain: "Shared Parameters are stored in an external definition file so they can be tagged, scheduled, and reused consistently across projects and families."
        },
        {
          type: "truefalse",
          q: "A Project Parameter can be used in a tag on a drawing.",
          answer: false,
          explain: "Project Parameters can appear in schedules but not in tags; only Shared Parameters can be tagged."
        },
        {
          type: "fill",
          q: "To tag custom data on a drawing, you must use a ____ parameter.",
          answer: "shared",
          accept: ["shared"],
          explain: "Only Shared Parameters can be referenced by tags, which is why they are required for taggable custom data."
        },
        {
          type: "match",
          q: "Match each parameter kind to what it can do.",
          pairs: [["Project Parameter", "Used in schedules within one project"], ["Shared Parameter", "Used in tags and shared across files"]],
          explain: "Project Parameters live in a single project and schedule only, while Shared Parameters can be tagged and reused across projects and families."
        },
        {
          type: "mcq",
          q: "Shared Parameters are defined in:",
          choices: ["An external shared parameter text file", "Each view template", "A drawing sheet", "The rendering settings"],
          answer: 0,
          explain: "Shared Parameters are stored in an external shared parameter file so their unique definitions stay consistent everywhere they are used."
        },
        {
          type: "truefalse",
          q: "Shared Parameters help keep a data field consistent across multiple projects and families.",
          answer: true,
          explain: "Because they come from one shared definition file, Shared Parameters keep the same data field consistent wherever it is used."
        },
        {
          type: "order",
          q: "Order the steps to tag custom data with a Shared Parameter.",
          items: ["Create or open a shared parameter file", "Add the shared parameter to the family or project", "Enter values on elements", "Place a tag that reports the parameter"],
          explain: "You define the shared parameter, add it to elements, populate values, then tag it."
        }
      ]
    },
    {
      id: "l23",
      title: "Managing the Family Library",
      intro: "Good projects depend on loading, reloading, and organizing families and their Types.",
      questions: [
        {
          type: "mcq",
          q: "What happens when you reload a family that already exists in the project?",
          choices: ["Revit updates the existing family and its placed instances", "Revit deletes all instances", "Revit creates a duplicate project", "Nothing changes at all"],
          answer: 0,
          explain: "Reloading updates the family definition in the project and refreshes its placed instances to match."
        },
        {
          type: "truefalse",
          q: "Loading too many unused families can unnecessarily increase project file size.",
          answer: true,
          explain: "Unused families add weight to the model, so purging unused ones helps keep files lean."
        },
        {
          type: "fill",
          q: "Removing unused families and Types from a project is commonly called ____ unused.",
          answer: "purge",
          accept: ["purge", "purging"],
          explain: "Purge Unused removes families, Types, and other items that are not placed, reducing file size."
        },
        {
          type: "mcq",
          q: "A Type Catalog is useful for a family that:",
          choices: ["Has many sizes, so you load only the Types you need", "Has no parameters", "Cannot be scheduled", "Is only used once"],
          answer: 0,
          explain: "A Type Catalog lets you pick specific sizes to load from a family with many predefined Types, avoiding loading them all."
        },
        {
          type: "match",
          q: "Match each library action to its result.",
          pairs: [["Load Family", "Bring an .rfa into the project"], ["Reload Family", "Update an existing family"], ["Purge Unused", "Remove unplaced content"]],
          explain: "Loading adds content, reloading updates it, and purging removes what is not used."
        },
        {
          type: "order",
          q: "Order these library housekeeping steps.",
          items: ["Load needed families", "Reload updated family versions", "Delete unwanted Types", "Purge unused content before sharing"],
          explain: "Load what you need, keep versions current, clean up Types, then purge before handing off the model."
        },
        {
          type: "truefalse",
          q: "Organizing families into a shared, well-named library helps teams reuse content reliably.",
          answer: true,
          explain: "A consistent, well-organized library makes it easy for a team to find and reuse trusted content."
        }
      ]
    },
    {
      id: "l24",
      title: "The Family Editor",
      intro: "Loadable families are built in the Family Editor using reference planes and parameters.",
      questions: [
        {
          type: "mcq",
          q: "In the Family Editor, reference planes are mainly used to:",
          choices: ["Define the skeleton that geometry is locked to and driven by parameters", "Render the family in color", "Store project sheets", "Replace all categories"],
          answer: 0,
          explain: "Reference planes form the flexible framework; geometry is locked to them and parameters drive their positions."
        },
        {
          type: "truefalse",
          q: "A well-built family flexes correctly when its parameters change because geometry is constrained to reference planes.",
          answer: true,
          explain: "Locking geometry to parameter-driven reference planes lets a family resize cleanly without breaking."
        },
        {
          type: "fill",
          q: "The planes you lock geometry to so a family can flex are called reference ____.",
          answer: "planes",
          accept: ["planes", "plane"],
          explain: "Reference planes are the framework geometry is constrained to, allowing parametric flexing."
        },
        {
          type: "mcq",
          q: "Before you start modeling geometry in a family, you should choose a suitable:",
          choices: ["Family template that sets the category and behavior", "Rendering engine", "Drawing sheet size", "Worksharing model"],
          answer: 0,
          explain: "You start a loadable family from a template (.rft) that sets its category and hosting behavior."
        },
        {
          type: "match",
          q: "Match each Family Editor element to its purpose.",
          pairs: [["Reference plane", "Framework geometry locks to"], ["Parameter", "Drives dimensions or properties"], ["Family template", "Sets category and host behavior"]],
          explain: "Reference planes give structure, parameters drive change, and the template sets category and hosting."
        },
        {
          type: "order",
          q: "Order the typical steps to build a simple loadable family.",
          items: ["Start from a family template", "Lay out reference planes", "Add parameters to drive them", "Model geometry and lock it to the planes", "Load the family into a project"],
          explain: "Template, then framework, then parameters, then constrained geometry, then load and test."
        },
        {
          type: "truefalse",
          q: "Testing a family by flexing its parameters before use helps catch geometry that breaks when sizes change.",
          answer: true,
          explain: "Flexing the parameters in the Family Editor confirms the geometry resizes correctly and stays intact."
        }
      ]
    }
  ]
});
