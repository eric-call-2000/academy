window.ACADEMY.addUnit("revit", {
  id: "unit-16",
  title: "Advanced Dynamo",
  color: "#ff4b4b",
  icon: "🐍",
  description: "Code Blocks, DesignScript, Python, custom nodes, packages, and Generative Design.",
  lessons: [
    {
      id: "l177",
      title: "Code Blocks & DesignScript I",
      intro: "The Code Block node and the basic DesignScript syntax you type inside it.",
      questions: [
        {
          type: "mcq",
          q: "What do you type inside a Code Block node?",
          choices: [
            "DesignScript text such as numbers, strings, math, ranges, and logic",
            "Only Python code",
            "C# compiled classes",
            "Raw Revit journal commands"
          ],
          answer: 0,
          explain: "A Code Block is a node where you write DesignScript directly, letting you replace many small nodes with one compact block of text."
        },
        {
          type: "fill",
          q: "In DesignScript every statement must end with a ____ .",
          answer: "semicolon",
          accept: ["semicolon", ";"],
          explain: "Each statement in a Code Block ends with a semicolon (;), and assignment is done with =, for example x = 5;."
        },
        {
          type: "truefalse",
          q: "In Dynamo 2.0 a list inside a Code Block is written with square brackets, like [a, b, c].",
          answer: true,
          explain: "Dynamo 2.0 switched list syntax to square brackets [a, b, c]; older versions used curly braces {a, b, c}."
        },
        {
          type: "mcq",
          q: "Which Code Block expression produces a range from 0 to 10 with exactly 5 evenly spaced values?",
          choices: [
            "0..10..1;",
            "0..10..#5;",
            "0..10..*5;",
            "0..10..5;"
          ],
          answer: 1,
          explain: "The # count form 0..10..#5 makes a sequence of 5 evenly spaced values; 0..10..1 instead steps by 1, and start..end..#count is the count form."
        },
        {
          type: "match",
          q: "Match each Code Block syntax element to its meaning.",
          pairs: [
            ["0..10..1", "Range stepping by 1"],
            ["0..10..#5", "Range of exactly 5 values"],
            ["myList[0]", "Access the first item"],
            ["// text", "Single-line comment"]
          ],
          explain: "Ranges use start..end..step or the # count form, items are read with square-bracket indexing, and // begins a single-line comment."
        },
        {
          type: "fill",
          q: "To read the first item of a list named myList in a Code Block you write myList[____] .",
          answer: "0",
          accept: ["0", "zero"],
          explain: "Indexing is zero-based, so myList[0] is the first item and nested access uses myList[0][1]."
        },
        {
          type: "order",
          q: "Order these from a single value to a nested list access.",
          items: ["x = 5;", "myList = [1, 2, 3];", "myList[0];", "myList[0][1];"],
          explain: "You assign a value, build a list, index into it, then index into a nested list; nested items are reached with chained square brackets."
        },
        {
          type: "mcq",
          q: "In a Code Block, what happens to a line that is just a value with no assignment, e.g. 42;?",
          choices: [
            "It errors because every line needs a variable",
            "It is ignored entirely",
            "It auto-creates an output on the node",
            "It becomes a comment"
          ],
          answer: 2,
          explain: "A bare value line auto-creates an output port, while assigning to a named variable creates an output port carrying that variable's name."
        }
      ]
    },
    {
      id: "l178",
      title: "DesignScript II: Functions & Node-to-Code",
      intro: "Calling methods in DesignScript, replication guides, and converting nodes to code.",
      questions: [
        {
          type: "mcq",
          q: "Which DesignScript line correctly creates a point using a Create method?",
          choices: [
            "Point.ByCoordinates(0,10,0);",
            "CreatePoint 0 10 0;",
            "new Point(0,10,0);",
            "Point = 0,10,0;"
          ],
          answer: 0,
          explain: "Create methods are called directly on the type, so Point.ByCoordinates(0,10,0) builds a point at those coordinates."
        },
        {
          type: "match",
          q: "Match each DesignScript call to its kind.",
          pairs: [
            ["Point.ByCoordinates(0,0,0)", "Create method"],
            ["pt.Translate(Vector.ZAxis(), 5)", "Action on an object"],
            ["pt.X", "Query returning a property"],
            ["crv.Length", "Query returning a property"]
          ],
          explain: "Create methods make new geometry, Actions operate on an object with dot notation, and Query methods return a property value such as X or Length."
        },
        {
          type: "fill",
          q: "Calling pt.Translate(Vector.ZAxis(), 5); is an example of an ____ performed on an object.",
          answer: "action",
          accept: ["action", "action method"],
          explain: "Actions run on an existing object via dot notation; pt.Translate(Vector.ZAxis(), 5) equals Geometry.Translate(pt, vector, dist)."
        },
        {
          type: "truefalse",
          q: "You can feed a Code Block variable into ordinary nodes and feed node outputs back into a Code Block.",
          answer: true,
          explain: "Code and nodes mix freely, so you can pass a code-block variable into nodes and wire node outputs into a Code Block."
        },
        {
          type: "mcq",
          q: "What do the replication guides <1> and <2> control in a line like Point.ByCoordinates(x<1>, y<2>)?",
          choices: [
            "The order that inputs are evaluated",
            "How lists pair, similar to lacing (here a cross product / grid)",
            "The number of decimal places",
            "Which Revit view is active"
          ],
          answer: 1,
          explain: "Replication guides <1> <2> control how lists pair, much like lacing; using different guide numbers builds a grid via a cross product."
        },
        {
          type: "fill",
          q: "Right-clicking a selection of nodes and choosing 'Node to ____ ' turns them into one compact Code Block.",
          answer: "code",
          accept: ["code"],
          explain: "Node to Code selects a cluster of nodes and converts them into a single compact Code Block, which cleans up a graph."
        },
        {
          type: "order",
          q: "Order the steps to collapse several nodes into one Code Block.",
          items: ["Select a cluster of nodes", "Right-click the selection", "Choose Node to Code", "Read the compact Code Block Dynamo generates"],
          explain: "You select the nodes, right-click, choose Node to Code, and Dynamo rewrites that logic as one Code Block."
        },
        {
          type: "mcq",
          q: "Which line is a Query method that returns a property rather than creating new geometry?",
          choices: [
            "Point.ByCoordinates(1,2,3);",
            "pt.Translate(v, 5);",
            "crv.Length;",
            "Line.ByStartPointEndPoint(a, b);"
          ],
          answer: 2,
          explain: "crv.Length is a Query that returns a property; the others create geometry or perform an action on an object."
        }
      ]
    },
    {
      id: "l179",
      title: "Python Nodes",
      intro: "Writing Python inside Dynamo, handling inputs and outputs, and choosing an engine.",
      questions: [
        {
          type: "mcq",
          q: "In a Python Script node, how do you read the second input port?",
          choices: [
            "input(1)",
            "IN[1]",
            "PORT.2",
            "args[1]"
          ],
          answer: 1,
          explain: "Inputs arrive in the IN list, so IN[0] is the first port and IN[1] is the second; the + button adds more input ports."
        },
        {
          type: "fill",
          q: "To send data back out of a Python Script node you assign your result to ____ .",
          answer: "OUT",
          accept: ["out"],
          explain: "The node returns whatever you assign to OUT, for example OUT = result."
        },
        {
          type: "order",
          q: "Order these lines to make Dynamo geometry available inside a Python node.",
          items: ["import clr", "clr.AddReference('ProtoGeometry')", "from Autodesk.DesignScript.Geometry import *", "OUT = Point.ByCoordinates(0,0,0)"],
          explain: "You import clr, add the ProtoGeometry reference, import the geometry namespace, then use it and assign to OUT."
        },
        {
          type: "truefalse",
          q: "Dynamo 2.x lets you choose between CPython3 (the current default) and legacy IronPython2.",
          answer: true,
          explain: "Dynamo 2.x supports CPython3 as the default engine and still offers legacy IronPython2, and you pick which engine runs."
        },
        {
          type: "match",
          q: "Match each Python-node element to its purpose.",
          pairs: [
            ["IN[0]", "First input value"],
            ["OUT", "Value returned from the node"],
            ["import clr", "Enable .NET references"],
            ["+ button", "Add another input port"]
          ],
          explain: "IN holds inputs, OUT returns the result, import clr enables .NET references like ProtoGeometry, and + adds input ports."
        },
        {
          type: "mcq",
          q: "What is a good reason to reach for a Python Script node?",
          choices: [
            "To perform loops, conditionals, and operations not available as nodes",
            "To avoid learning any DesignScript",
            "Because Python is the only way to see geometry previews",
            "Because nodes cannot pass lists"
          ],
          answer: 0,
          explain: "Python is ideal for loops, conditionals, and logic that has no ready-made node, extending what the shipped nodes can do."
        },
        {
          type: "fill",
          q: "The statement clr.AddReference('____') loads Dynamo's geometry library into a Python node.",
          answer: "ProtoGeometry",
          accept: ["protogeometry"],
          explain: "clr.AddReference('ProtoGeometry') loads the geometry assembly so you can then import from Autodesk.DesignScript.Geometry."
        },
        {
          type: "mcq",
          q: "How do you add more input ports to a Python Script node?",
          choices: [
            "Retype the whole script",
            "Click the + button on the node",
            "Add a Watch node",
            "Rename the node"
          ],
          answer: 1,
          explain: "The + button on the Python Script node adds input ports, which then appear as IN[2], IN[3], and so on."
        }
      ]
    },
    {
      id: "l180",
      title: "Python + the Revit API",
      intro: "Reaching the Revit API from Python to read and modify the model safely.",
      questions: [
        {
          type: "mcq",
          q: "Which Python line gets the current Revit document?",
          choices: [
            "doc = Revit.ActiveDocument",
            "doc = DocumentManager.Instance.CurrentDBDocument",
            "doc = TransactionManager.Document",
            "doc = clr.CurrentDoc()"
          ],
          answer: 1,
          explain: "doc = DocumentManager.Instance.CurrentDBDocument returns the active Revit database document you will read from and edit."
        },
        {
          type: "order",
          q: "Order the Revit API setup imports in a Python node.",
          items: ["import clr", "clr.AddReference('RevitAPI')", "clr.AddReference('RevitServices')", "from Autodesk.Revit.DB import *"],
          explain: "You import clr, add references to RevitAPI and RevitServices, then import the Revit DB namespace before touching the model."
        },
        {
          type: "truefalse",
          q: "Any change to the Revit model from Python must be wrapped in a transaction.",
          answer: true,
          explain: "You open a transaction with TransactionManager.Instance.EnsureInTransaction(doc) and close it with TransactionManager.Instance.TransactionTaskDone() around model changes."
        },
        {
          type: "fill",
          q: "____ () converts a Dynamo element into a Revit API element inside Python.",
          answer: "UnwrapElement",
          accept: ["unwrapelement", "unwrap element"],
          explain: "UnwrapElement() unwraps a Dynamo element into its underlying Revit API element so you can call Revit API methods on it."
        },
        {
          type: "match",
          q: "Match each Revit-API helper to its role.",
          pairs: [
            ["DocumentManager", "Access the current document"],
            ["TransactionManager", "Open and close transactions"],
            ["UnwrapElement()", "Dynamo element to Revit element"],
            ["Autodesk.Revit.DB", "The Revit API namespace"]
          ],
          explain: "DocumentManager gets the doc, TransactionManager frames edits, UnwrapElement converts elements, and Autodesk.Revit.DB is the core API namespace."
        },
        {
          type: "mcq",
          q: "Why reach the Revit API from Python instead of only using shipped nodes?",
          choices: [
            "It renders geometry faster",
            "It unlocks anything the Revit API supports, beyond the built-in nodes",
            "It removes the need for transactions",
            "It automatically fixes null values"
          ],
          answer: 1,
          explain: "The Revit API exposes far more than the shipped nodes, so Python lets you do anything the API supports."
        },
        {
          type: "fill",
          q: "You start editing the model with TransactionManager.Instance.EnsureIn____ (doc).",
          answer: "Transaction",
          accept: ["transaction"],
          explain: "EnsureInTransaction(doc) opens a transaction; you finish with TransactionTaskDone() to commit the changes safely."
        },
        {
          type: "mcq",
          q: "Which pair of references is needed for the document and transaction helpers?",
          choices: [
            "ProtoGeometry and DynamoCore",
            "RevitAPI and RevitServices",
            "RevitAPIUI and System.Windows",
            "IronPython and CPython3"
          ],
          answer: 1,
          explain: "clr.AddReference for RevitAPI and RevitServices provides Autodesk.Revit.DB plus DocumentManager and TransactionManager from RevitServices.Persistence and RevitServices.Transactions."
        }
      ]
    },
    {
      id: "l181",
      title: "Custom Nodes",
      intro: "Building reusable custom nodes from a graph and sharing them.",
      questions: [
        {
          type: "mcq",
          q: "What is a Custom Node?",
          choices: [
            "A reusable node you build from a graph, saved as a .dyf file",
            "A one-time throwaway Code Block",
            "A Revit family type",
            "A Python-only wrapper that cannot be shared"
          ],
          answer: 0,
          explain: "A Custom Node packages a graph into a reusable node saved as a .dyf file that you can drop into many graphs."
        },
        {
          type: "fill",
          q: "A Custom Node is saved with the file extension .____ .",
          answer: "dyf",
          accept: ["dyf"],
          explain: "Custom Nodes are stored as .dyf files, distinct from a normal Dynamo graph which is a .dyn file."
        },
        {
          type: "match",
          q: "Match each part of a Custom Node to its job.",
          pairs: [
            ["Input node", "Defines an input port"],
            ["Output node", "Defines an output port"],
            [".dyf file", "Where the custom node is saved"],
            ["Category / description", "Organizes and documents it"]
          ],
          explain: "Input and Output nodes define the ports, the .dyf file stores the node, and a category plus description keep it organized and documented."
        },
        {
          type: "order",
          q: "Order the steps to create a Custom Node from existing nodes.",
          items: ["Select the nodes", "Right-click and choose Create Custom Node", "Name it and give it a category and description", "Reuse it in other graphs"],
          explain: "You select nodes, choose Create Custom Node, name and categorize it, then reuse it wherever you need that logic."
        },
        {
          type: "truefalse",
          q: "Editing a Custom Node updates every graph that uses it.",
          answer: true,
          explain: "Because graphs reference the same .dyf, editing the Custom Node propagates the change to every graph that uses it."
        },
        {
          type: "mcq",
          q: "What defines the input ports of a Custom Node?",
          choices: [
            "Watch nodes",
            "Input nodes placed inside the custom node graph",
            "The color of the node",
            "The number of comments"
          ],
          answer: 1,
          explain: "Input nodes inside the custom node graph create its input ports, and Output nodes create its outputs."
        },
        {
          type: "mcq",
          q: "What is a key benefit of using Custom Nodes?",
          choices: [
            "They keep graphs clean by hiding complexity and can be reused and shared",
            "They disable the Revit API",
            "They replace the need to ever save a file",
            "They force every graph to run automatically"
          ],
          answer: 0,
          explain: "Custom Nodes hide complexity, keep graphs tidy, and can be published to share reusable logic across projects and teammates."
        },
        {
          type: "fill",
          q: "You can ____ a Custom Node to share it with other people or graphs.",
          answer: "publish",
          accept: ["publish", "share"],
          explain: "A finished Custom Node can be published to share it, so others can install and reuse the same node."
        }
      ]
    },
    {
      id: "l182",
      title: "Packages",
      intro: "Installing shared node collections and knowing which popular packages solve which problems.",
      questions: [
        {
          type: "mcq",
          q: "How do you install a package in Dynamo?",
          choices: [
            "Copy files into the Revit install folder by hand",
            "Through the Package Manager (Packages menu > Search for a Package)",
            "By writing a Python script",
            "You cannot add packages, only custom nodes"
          ],
          answer: 1,
          explain: "Packages are shared collections of custom nodes and extensions installed via the Package Manager under the Packages menu."
        },
        {
          type: "match",
          q: "Match each package to what it is known for.",
          pairs: [
            ["Clockwork", "450+ general-purpose nodes"],
            ["Rhythm", "Bulk Revit elements and parameters"],
            ["Data-Shapes", "Custom UI forms and input dialogs"],
            ["LunchBox", "Panelization and generative geometry"]
          ],
          explain: "Clockwork is the general go-to, Rhythm handles Revit elements and parameters in bulk, Data-Shapes builds input dialogs, and LunchBox panelizes geometry."
        },
        {
          type: "fill",
          q: "The ____ package is the go-to set of 450+ general-purpose nodes when a simple node seems missing.",
          answer: "Clockwork",
          accept: ["clockwork"],
          explain: "Clockwork offers 450+ list, math, string, geometry, and Revit nodes, so it is the first place to look when a basic node seems missing."
        },
        {
          type: "mcq",
          q: "Which package is best known for panelization and generative geometry such as diamond and hex patterns?",
          choices: [
            "Rhythm",
            "Data-Shapes",
            "LunchBox",
            "Genius Loci"
          ],
          answer: 2,
          explain: "LunchBox, by Proving Ground, specializes in panelization and generative geometry including grids and diamond or hex patterns."
        },
        {
          type: "truefalse",
          q: "Data-Shapes is used to build custom UI forms and input dialogs, which pairs well with Dynamo Player.",
          answer: true,
          explain: "Data-Shapes provides custom user-input forms and dialogs, making graphs interactive and well suited to Dynamo Player."
        },
        {
          type: "mcq",
          q: "Which package extends Revit interaction and includes the Analysis Visualization Framework (AVF) nodes?",
          choices: [
            "archi-lab",
            "spring nodes",
            "Clockwork",
            "LunchBox"
          ],
          answer: 0,
          explain: "archi-lab extends Revit interaction and includes AVF (Analysis Visualization Framework) nodes for displaying analysis results."
        },
        {
          type: "order",
          q: "Order the steps to add a package.",
          items: ["Open the Packages menu", "Choose Search for a Package", "Find the package you need", "Install it and use its nodes"],
          explain: "You open the Packages menu, search for a package, pick the one you need, and install it so its nodes appear in your library."
        },
        {
          type: "match",
          q: "Match each remaining package to its focus.",
          pairs: [
            ["spring nodes", "File, geometry, and Revit workflow helpers"],
            ["Genius Loci", "300+ nodes for export, materials, dimensions, linked files"],
            ["archi-lab", "Revit interaction plus AVF nodes"],
            ["Rhythm", "Retrieve, filter, and modify Revit elements"]
          ],
          explain: "spring nodes helps with files, geometry, and Revit workflows, Genius Loci adds 300+ export and documentation nodes, archi-lab adds AVF, and Rhythm works Revit elements in bulk."
        }
      ]
    },
    {
      id: "l183",
      title: "Generative Design",
      intro: "Using Generative Design to explore, measure, and pick from many design options.",
      questions: [
        {
          type: "mcq",
          q: "What does Generative Design in Revit do?",
          choices: [
            "Runs a graph exactly once like Dynamo Player",
            "Explores many design options so you can evaluate and pick one",
            "Automatically models the final building",
            "Replaces the Revit API"
          ],
          answer: 1,
          explain: "Generative Design explores many options for a problem, measuring each so you can compare and choose the best one."
        },
        {
          type: "fill",
          q: "Generative Design needs inputs to vary and ____ that act as goals or fitness functions to measure each option.",
          answer: "outputs",
          accept: ["outputs", "output"],
          explain: "You define inputs (variables to vary) and outputs (goals or fitness functions) that the study measures for each option."
        },
        {
          type: "match",
          q: "Match each study method to what it does.",
          pairs: [
            ["Randomize", "Tries random input values"],
            ["Optimize", "Evolutionary search toward the best outcomes"],
            ["Cross Product", "Tries all combinations"],
            ["Like This", "Variations near a chosen option"]
          ],
          explain: "Randomize samples random inputs, Optimize evolves toward the best goals, Cross Product covers every combination, and Like This refines around a chosen option."
        },
        {
          type: "truefalse",
          q: "Because it runs the graph many times to measure options, a Generative Design graph should not create model elements on each run.",
          answer: true,
          explain: "Generative Design runs the graph many times just to measure options, so it should not place model elements on each run; you integrate the chosen option afterward."
        },
        {
          type: "mcq",
          q: "Which method uses an evolutionary search to push toward the best outcomes?",
          choices: [
            "Randomize",
            "Cross Product",
            "Optimize",
            "Like This"
          ],
          answer: 2,
          explain: "Optimize uses an evolutionary search that iterates toward inputs producing the best measured outcomes."
        },
        {
          type: "order",
          q: "Order a typical Generative Design workflow.",
          items: ["Define inputs to vary", "Define outputs as goals", "Pick a study method and run", "Evaluate options and integrate the chosen one"],
          explain: "You set inputs, define output goals, run a study method, then evaluate the generated options and bring the winner into the model."
        },
        {
          type: "mcq",
          q: "Which is a good use case for Generative Design?",
          choices: [
            "Renaming a single wall",
            "Layout optimization weighing daylight, area, and adjacency trade-offs",
            "Opening a Revit view",
            "Publishing a custom node"
          ],
          answer: 1,
          explain: "Generative Design shines on optimization problems like layouts that balance daylight, area, and adjacency trade-offs."
        },
        {
          type: "fill",
          q: "The ____ study method generates variations near a chosen option you liked.",
          answer: "Like This",
          accept: ["like this", "likethis"],
          explain: "Like This takes an option you selected and produces new variations near it, letting you refine a promising direction."
        }
      ]
    },
    {
      id: "l184",
      title: "Best Practices & Troubleshooting",
      intro: "Keeping graphs clean and fast, and diagnosing the most common Dynamo problems.",
      questions: [
        {
          type: "mcq",
          q: "Which tools help organize a graph visually?",
          choices: [
            "Groups (colored boxes) and Notes, plus renaming nodes",
            "Only the Python engine selector",
            "The Revit API alone",
            "Deleting all wires"
          ],
          answer: 0,
          explain: "Groups (colored boxes), Notes, and renamed nodes keep a graph readable, while Code Blocks and Custom Nodes reduce clutter."
        },
        {
          type: "match",
          q: "Match each performance technique to its effect.",
          pairs: [
            ["Manual run", "Stops heavy graphs auto-running"],
            ["Freeze nodes", "Pauses a branch"],
            ["Turn off geometry preview", "Skips drawing heavy previews"],
            ["Groups and Notes", "Organize the layout"]
          ],
          explain: "Manual run avoids constant recompute, Freeze pauses branches, disabling geometry preview lightens heavy nodes, and Groups plus Notes organize the graph."
        },
        {
          type: "fill",
          q: "For heavy or Revit-editing graphs, switch the graph from Automatic to ____ run so it does not recompute on every change.",
          answer: "Manual",
          accept: ["manual"],
          explain: "Manual run lets you control when a heavy or Revit graph executes, avoiding constant recomputation."
        },
        {
          type: "truefalse",
          q: "A yellow node signals a warning and a red node signals an error.",
          answer: true,
          explain: "Node colors are diagnostic: yellow means a warning and red means an error, which guides you to the problem quickly."
        },
        {
          type: "mcq",
          q: "A common cause of null values in a Dynamo graph is:",
          choices: [
            "Using a Group",
            "A missing or misspelled, case-wrong parameter name",
            "Adding a Note",
            "Renaming a node"
          ],
          answer: 1,
          explain: "Nulls often come from a parameter name that is missing, misspelled, or the wrong case; empty lists and lacing or list-level mismatches are other frequent culprits."
        },
        {
          type: "order",
          q: "Order a sensible debugging sequence for a misbehaving graph.",
          items: ["Read node colors for yellow warnings or red errors", "Add a Watch node to inspect the data", "Check for nulls, empty lists, or lacing mismatches", "Fix the parameter name or list level"],
          explain: "You read node colors, add Watch nodes to see the data, look for nulls, empty lists, and lacing or list-level issues, then fix the root cause."
        },
        {
          type: "mcq",
          q: "Which node is used to inspect the data flowing through a wire while debugging?",
          choices: [
            "Watch node",
            "Freeze node",
            "Group",
            "Custom Node"
          ],
          answer: 0,
          explain: "A Watch node displays the data passing through it, making it the primary tool for inspecting values while debugging."
        },
        {
          type: "fill",
          q: "Dynamo 2.0 changed list syntax to square brackets and introduced ____ , which can make some older graphs and packages behave differently.",
          answer: "Dictionaries",
          accept: ["dictionaries", "dictionary"],
          explain: "Dynamo 2.0 moved list syntax to [] and added Dictionaries, so older graphs and packages built for earlier versions may behave differently."
        }
      ]
    }
  ]
});
