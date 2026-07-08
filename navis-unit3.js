window.ACADEMY.addUnit("navisworks", {
  id: "unit-3",
  title: "Selection Tree & Sets",
  color: "#ff9600",
  icon: "🌳",
  description: "Organizing model elements so downstream tools can use them.",
  lessons: [
    {
      id: "l17",
      title: "The Selection Tree",
      intro: "The Selection Tree is the model hierarchy that shows every file, layer, and object in your federated model.",
      questions: [
        {
          type: "mcq",
          q: "What does the Selection Tree show you?",
          choices: ["The model hierarchy of files, layers, and objects", "Only clash results", "Only the 4D schedule", "A list of saved viewpoints"],
          answer: 0,
          explain: "The Selection Tree is a structured, tree-shaped view of the whole federated model, from files down to individual objects."
        },
        {
          type: "truefalse",
          q: "The Selection Tree can display several appended models in one hierarchy at the same time.",
          answer: true,
          explain: "Because Navisworks federates many files, the Selection Tree lists each appended model together in one combined hierarchy."
        },
        {
          type: "fill",
          q: "The Selection Tree presents the model as a branching ____ of files and objects.",
          answer: "hierarchy",
          accept: ["hierarchy", "tree"],
          explain: "A hierarchy is a nested, parent-child structure, which is exactly how the tree organizes the model."
        },
        {
          type: "order",
          q: "Put these Selection Tree levels in order from broadest to most specific.",
          items: ["File", "Layer", "Object"],
          explain: "Each appended file sits at the top, layers group content inside it, and individual objects are the most specific level."
        },
        {
          type: "match",
          q: "Match each Selection Tree level to what it represents.",
          pairs: [["File", "An appended source model"], ["Layer", "A grouping inside a file"], ["Object", "A single model element"]],
          explain: "The tree nests objects inside layers, and layers inside each appended file."
        },
        {
          type: "mcq",
          q: "Why is the Selection Tree useful for coordination?",
          choices: ["It lets you find and select exactly the objects you care about", "It publishes an NWD", "It runs clash tests by itself", "It edits Revit geometry directly"],
          answer: 0,
          explain: "The tree is your map for locating and selecting the right elements before you group, search, or analyze them."
        },
        {
          type: "truefalse",
          q: "The Selection Tree only ever shows one model file, never a federation of several.",
          answer: false,
          explain: "Navisworks is built to federate many models, so the tree commonly shows several appended files together."
        }
      ]
    },
    {
      id: "l18",
      title: "Selecting Objects",
      intro: "Selecting objects in Navisworks means picking them in the scene or the tree, with selection resolution controlling how much of the hierarchy you grab.",
      questions: [
        {
          type: "mcq",
          q: "What does clicking an object in the scene do by default?",
          choices: ["Highlights it and reveals its place in the Selection Tree", "Deletes it from the model", "Publishes an NWD", "Starts a clash test"],
          answer: 0,
          explain: "A pick in the scene selects the object and the tree scrolls to show where that object lives."
        },
        {
          type: "fill",
          q: "Selection ____ controls how far up or down the hierarchy a click selects.",
          answer: "resolution",
          accept: ["resolution"],
          explain: "Selection resolution decides whether a click grabs a single object, its parent group, or a whole file."
        },
        {
          type: "truefalse",
          q: "Selection resolution lets a single click grab a whole group instead of just one object.",
          answer: true,
          explain: "By raising the resolution, one pick can select a parent branch such as a layer or group rather than a lone object."
        },
        {
          type: "match",
          q: "Match each selection action to its result.",
          pairs: [["Click in scene", "Select that object"], ["Click in tree", "Select that branch"], ["Select Same", "Grab objects sharing a property"]],
          explain: "You can select from the scene, from the tree, or by matching a shared property with Select Same."
        },
        {
          type: "mcq",
          q: "Where does a selection appear besides the 3D scene?",
          choices: ["Highlighted in the Selection Tree", "Only in the clash report", "Only in the TimeLiner", "Nowhere, selections are invisible"],
          answer: 0,
          explain: "The scene and the Selection Tree stay in sync, so a selection is shown in both places."
        },
        {
          type: "order",
          q: "Order the steps of selecting a specific pipe in the scene.",
          items: ["Click the pipe", "See it highlight", "Check its branch in the tree"],
          explain: "You click, the object highlights, and the tree reveals exactly where that object sits in the hierarchy."
        },
        {
          type: "truefalse",
          q: "You can only ever select objects from the 3D scene, never from the Selection Tree.",
          answer: false,
          explain: "You can select from either the scene or the tree, and the two views stay in sync."
        }
      ]
    },
    {
      id: "l19",
      title: "Object Properties",
      intro: "Every model element carries properties, and the Properties window lets you read that attached data.",
      questions: [
        {
          type: "mcq",
          q: "What does the Properties window show for a selected object?",
          choices: ["The data attached to that element", "The camera position", "The full clash matrix", "The list of appended files"],
          answer: 0,
          explain: "Properties lists the attribute data an object carries, often organized into tabs by source."
        },
        {
          type: "truefalse",
          q: "Object properties come from the original authoring application, such as Revit.",
          answer: true,
          explain: "Most properties are authored upstream and travel into Navisworks through the exported NWC."
        },
        {
          type: "fill",
          q: "Rule-based search sets rely on object ____ to decide which elements match.",
          answer: "properties",
          accept: ["properties", "property"],
          explain: "Search sets test property values, so clean, consistent properties make searches reliable."
        },
        {
          type: "match",
          q: "Match each property example to its likely meaning.",
          pairs: [["Category", "The kind of element, like Wall"], ["Material", "What the element is made of"], ["Item Name", "The element type name"]],
          explain: "Properties describe what an element is, what it is made of, and how it is named."
        },
        {
          type: "mcq",
          q: "Why do object properties matter for coordination?",
          choices: ["They power search sets and grouping", "They set the render quality", "They control the file format", "They change the toolbar layout"],
          answer: 0,
          explain: "Consistent properties let you build reliable search sets and organize clash results by trade or system."
        },
        {
          type: "truefalse",
          q: "Reading an object property in Navisworks edits the geometry in the source Revit model.",
          answer: false,
          explain: "Navisworks is a review tool, so reading properties never changes the authoring model."
        },
        {
          type: "order",
          q: "Order the steps to inspect an object's data.",
          items: ["Select the object", "Open the Properties window", "Read its property tabs"],
          explain: "Select first, open Properties, then read the tabs of data attached to that element."
        }
      ]
    },
    {
      id: "l20",
      title: "Selection Sets",
      intro: "Selection Sets are manual, static groups of objects that you save by hand for reuse.",
      questions: [
        {
          type: "mcq",
          q: "How is a Selection Set built?",
          choices: ["By manually picking objects and saving them", "By writing a property rule", "By running a clash test", "By publishing an NWD"],
          answer: 0,
          explain: "You hand-pick the objects you want and save that exact list as a Selection Set."
        },
        {
          type: "truefalse",
          q: "A Selection Set is static, so it does not update when the model changes.",
          answer: true,
          explain: "A Selection Set remembers a fixed list of objects and will not add new ones on its own."
        },
        {
          type: "fill",
          q: "A Selection Set stores a fixed, ____ list of objects you picked by hand.",
          answer: "static",
          accept: ["static", "manual"],
          explain: "Static means the membership is frozen at save time and does not recalculate."
        },
        {
          type: "mcq",
          q: "When is a Selection Set a good choice?",
          choices: ["For a one-off group that no rule cleanly describes", "For a group that must auto-update every reload", "For running clash detection", "For exporting an NWC"],
          answer: 0,
          explain: "Manual sets shine for special one-off groupings that would be hard to capture with a rule."
        },
        {
          type: "match",
          q: "Match each trait to Selection Sets.",
          pairs: [["Membership", "Fixed at save time"], ["How built", "Picked by hand"], ["Updates", "Not automatic"]],
          explain: "Selection Sets are hand-built, fixed, and do not refresh when the model updates."
        },
        {
          type: "order",
          q: "Order the steps to create a Selection Set.",
          items: ["Pick the objects", "Save as a Selection Set", "Name the set"],
          explain: "Select your objects, save the selection, and give the set a clear name for reuse."
        },
        {
          type: "truefalse",
          q: "If you add new ducts to the model, an existing Selection Set adds them for you automatically.",
          answer: false,
          explain: "Static Selection Sets never pick up new objects on their own, unlike rule-based search sets."
        }
      ]
    },
    {
      id: "l21",
      title: "Search Sets",
      intro: "Search Sets are rule-based, dynamic groups that recalculate their members from property rules whenever the model changes.",
      questions: [
        {
          type: "mcq",
          q: "How does a Search Set decide its membership?",
          choices: ["By property-based rules that find matching objects", "By a hand-picked list", "By clash status", "By the current camera view"],
          answer: 0,
          explain: "A Search Set stores rules that test properties, so it gathers every object that matches."
        },
        {
          type: "truefalse",
          q: "A Search Set is dynamic and re-runs its rules to update when the model reloads.",
          answer: true,
          explain: "Because it stores rules rather than a fixed list, a Search Set refreshes its members automatically."
        },
        {
          type: "fill",
          q: "A Search Set updates automatically because it stores ____ instead of a fixed list.",
          answer: "rules",
          accept: ["rules", "a rule"],
          explain: "The set keeps the search criteria, so it recalculates matches every time it runs."
        },
        {
          type: "match",
          q: "Match each set type to how it works.",
          pairs: [["Selection Set", "Manual and static"], ["Search Set", "Rule-based and dynamic"]],
          explain: "Selection Sets hold a fixed list, while Search Sets hold rules that keep them current."
        },
        {
          type: "mcq",
          q: "Why are Search Sets great for a living model?",
          choices: ["They capture new matching objects on every reload", "They freeze membership forever", "They disable clash detection", "They publish the model"],
          answer: 0,
          explain: "As the design changes, a Search Set automatically includes newly matching elements."
        },
        {
          type: "order",
          q: "Order the steps to build a Search Set.",
          items: ["Define property rules", "Run the search", "Save as a Search Set"],
          explain: "Set the rules, run them to preview matches, then save the reusable Search Set."
        },
        {
          type: "truefalse",
          q: "A Search Set and a Selection Set behave identically when new objects are added.",
          answer: false,
          explain: "A Search Set adds new matching objects, while a static Selection Set does not."
        }
      ]
    },
    {
      id: "l22",
      title: "Sets for Clash & TimeLiner",
      intro: "The real payoff of sets is reusing them as inputs in Clash Detective and TimeLiner.",
      questions: [
        {
          type: "mcq",
          q: "How are sets used in Clash Detective?",
          choices: ["As Selection A or Selection B in a clash test", "As the render engine", "As the file format", "As the camera path"],
          answer: 0,
          explain: "You point a clash test at a set for Selection A and another set for Selection B."
        },
        {
          type: "truefalse",
          q: "In TimeLiner, sets can be linked to schedule tasks to drive the 4D simulation.",
          answer: true,
          explain: "Attaching a set to a task tells TimeLiner which objects appear or disappear at that step."
        },
        {
          type: "match",
          q: "Match each tool to how it consumes a set.",
          pairs: [["Clash Detective", "Selection A vs Selection B"], ["TimeLiner", "Objects linked to a task"]],
          explain: "Clash tests compare two selections, and TimeLiner ties a selection to a schedule task."
        },
        {
          type: "fill",
          q: "In Clash Detective a set can serve as Selection A or Selection ____.",
          answer: "B",
          accept: ["b"],
          explain: "A clash test compares Selection A against Selection B, and each can be a set."
        },
        {
          type: "mcq",
          q: "Why prefer a Search Set over a manual list when linking TimeLiner tasks?",
          choices: ["It keeps the task current as objects are added", "It disables the schedule", "It hides the objects", "It converts the file to NWC"],
          answer: 0,
          explain: "A dynamic Search Set keeps a task pointed at the right objects even as the model grows."
        },
        {
          type: "order",
          q: "Order the steps to run a clash between two trades using sets.",
          items: ["Build a set per trade", "Set them as Selection A and B", "Run the clash test"],
          explain: "Prepare a set for each trade, assign them as the two selections, then run the test."
        },
        {
          type: "truefalse",
          q: "Reusing the same set in both Clash Detective and TimeLiner keeps your object groups consistent.",
          answer: true,
          explain: "One shared set means clash and 4D reference the exact same objects, avoiding mismatches."
        }
      ]
    },
    {
      id: "l23",
      title: "Find Items",
      intro: "Find Items lets you search the whole model by property values to build selections and sets.",
      questions: [
        {
          type: "mcq",
          q: "What does Find Items do?",
          choices: ["Searches the model by property criteria", "Renders a walkthrough", "Publishes an NWD", "Opens the TimeLiner"],
          answer: 0,
          explain: "Find Items builds property-based rules and returns every object that matches."
        },
        {
          type: "truefalse",
          q: "The results of a Find Items search can be saved directly as a Search Set.",
          answer: true,
          explain: "Because the search is rule-based, saving it creates a dynamic Search Set."
        },
        {
          type: "fill",
          q: "A Find Items rule tests a property against a ____ to decide matches.",
          answer: "value",
          accept: ["value", "condition"],
          explain: "Each rule compares a chosen property to a value, such as Category equals Wall."
        },
        {
          type: "match",
          q: "Match each Find Items rule part to its job.",
          pairs: [["Category", "Which property group to look in"], ["Property", "The specific field to test"], ["Value", "What the field must equal"]],
          explain: "A rule names a category, a property inside it, and the value to match."
        },
        {
          type: "mcq",
          q: "How does Find Items relate to Search Sets?",
          choices: ["It is the search behind a Search Set", "It replaces clash detection", "It only works on NWD files", "It edits object geometry"],
          answer: 0,
          explain: "Find Items is the searching engine, and a saved search becomes a reusable Search Set."
        },
        {
          type: "order",
          q: "Order the steps to search with Find Items.",
          items: ["Choose category and property", "Enter the value to match", "Run Find All"],
          explain: "Pick the property, give it a value to match, then run the search to collect results."
        },
        {
          type: "truefalse",
          q: "Find Items can only match one object at a time and never returns a batch.",
          answer: false,
          explain: "Find Items returns every object that satisfies the rules, often many at once."
        }
      ]
    },
    {
      id: "l24",
      title: "Why Sets Matter",
      intro: "Good sets are the foundation that makes coordination and 4D scale across large projects.",
      questions: [
        {
          type: "mcq",
          q: "Why do well-built sets make coordination scale?",
          choices: ["They let clash and 4D reuse the same reliable groups", "They shrink the file to zero", "They remove the need for models", "They disable properties"],
          answer: 0,
          explain: "Clean, reusable sets feed clash tests and schedules consistently, saving rework on big jobs."
        },
        {
          type: "truefalse",
          q: "Dynamic Search Sets reduce manual rework as a large model keeps changing.",
          answer: true,
          explain: "Because they auto-update, Search Sets keep clash and 4D accurate without re-picking objects."
        },
        {
          type: "fill",
          q: "Sets depend on clean, consistent object ____ to work reliably at scale.",
          answer: "properties",
          accept: ["properties", "data"],
          explain: "If properties are messy, rule-based sets miss objects, so good data is essential."
        },
        {
          type: "match",
          q: "Match each downstream use to how sets help it scale.",
          pairs: [["Clash Detective", "Consistent groups per trade"], ["TimeLiner", "Tasks stay linked as work grows"], ["Quantification", "Repeatable selections for takeoff"]],
          explain: "Reusable sets give clash, 4D, and takeoff steady, consistent inputs across the project."
        },
        {
          type: "mcq",
          q: "What is a sign of poor set discipline on a project?",
          choices: ["Clash tests aimed at stale, hand-picked lists", "Search Sets that auto-update", "Consistent property data", "Reused trade sets"],
          answer: 0,
          explain: "Stale manual lists mean clash tests miss new objects, a common source of missed conflicts."
        },
        {
          type: "order",
          q: "Order how good sets flow into a scalable workflow.",
          items: ["Author clean properties", "Build reusable Search Sets", "Feed them to clash and 4D"],
          explain: "Clean data enables reliable sets, and those sets power clash detection and the 4D schedule."
        },
        {
          type: "truefalse",
          q: "Investing in good sets early pays off as the model and coordination effort grow.",
          answer: true,
          explain: "Early set discipline compounds, keeping downstream tools accurate as scope expands."
        }
      ]
    }
  ]
});
