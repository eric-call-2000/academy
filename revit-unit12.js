window.ACADEMY.addUnit("revit", {
  id: "unit-12",
  title: "Dynamo Fundamentals",
  color: "#1cb0f6",
  icon: "⚙️",
  description: "Visual programming for BIM: nodes, wires, the Dynamo interface, and how graphs run.",
  lessons: [
    {
      id: "l145",
      title: "What Is Dynamo?",
      intro: "Meet Dynamo: Autodesk's visual programming platform for computational BIM.",
      questions: [
        {
          type: "mcq",
          q: "What best describes Autodesk Dynamo?",
          choices: [
            "A rendering engine for photorealistic images",
            "An open-source visual programming platform that adds computational logic to design and construction",
            "A cloud storage service for Revit models",
            "A clash-detection tool"
          ],
          answer: 1,
          explain: "Dynamo is an open-source visual programming platform by Autodesk. It brings computational, algorithmic logic to BIM, which is why it is often called 'computational BIM'."
        },
        {
          type: "truefalse",
          q: "Visual programming means you build logic by connecting graphical nodes instead of only typing text-based code.",
          answer: true,
          explain: "In visual programming you wire together graphical nodes to define logic. Dynamo still supports text-based code through Code Blocks and Python, but the core interaction is visual."
        },
        {
          type: "fill",
          q: "A Dynamo graph is saved to disk with the ____ file extension.",
          answer: "dyn",
          accept: ["dyn", ".dyn"],
          explain: "A graph saves as a .dyn file. A custom node is saved separately as a .dyf file, so remembering both extensions helps you manage your Dynamo work."
        },
        {
          type: "mcq",
          q: "Which host lets you run Dynamo's geometry and logic WITHOUT Revit installed?",
          choices: [
            "Dynamo for Revit",
            "Dynamo Sandbox",
            "Dynamo Player",
            "Dynamo Cloud"
          ],
          answer: 1,
          explain: "Dynamo Sandbox is the standalone version. It runs geometry and logic without Revit, which is useful for learning or building graphs that do not depend on a Revit model."
        },
        {
          type: "match",
          q: "Match each Dynamo capability to what it accomplishes.",
          pairs: [
            ["Automate repetitive tasks", "Replace slow manual work with a graph"],
            ["Manage and transfer data", "Move and reshape information across a model"],
            ["Generate parametric geometry", "Create forms driven by rules and inputs"]
          ],
          explain: "Dynamo's three headline uses are automating repetitive work, managing or transferring data, and generating parametric geometry. Together they let a modeler solve problems that would be tedious by hand."
        },
        {
          type: "truefalse",
          q: "Dynamo can only be used with Revit and no other Autodesk product.",
          answer: false,
          explain: "Dynamo also runs with Civil 3D, FormIt, and Advance Steel, plus standalone as Dynamo Sandbox. It is not limited to Revit."
        },
        {
          type: "fill",
          q: "A custom node that you build and reuse is saved with the ____ file extension.",
          answer: "dyf",
          accept: ["dyf", ".dyf"],
          explain: "Custom nodes save as .dyf files while full graphs save as .dyn files. Keeping the two extensions straight prevents confusion when sharing your work."
        },
        {
          type: "order",
          q: "Put these steps of a typical first Dynamo session in order, from start to finish.",
          items: [
            "Launch Dynamo from a host such as Revit (or open Dynamo Sandbox)",
            "Build logic by placing and wiring nodes into a graph",
            "Run the graph to execute the logic",
            "Save the finished work as a .dyn file"
          ],
          explain: "You open Dynamo on a host (or Sandbox), assemble a graph by wiring nodes together, run it to execute the logic, and save the result as a .dyn file. Because Dynamo layers algorithmic logic onto BIM, this workflow is often called 'computational BIM'."
        }
      ]
    },
    {
      id: "l146",
      title: "Nodes & Wires",
      intro: "The two building blocks of every graph: nodes that do the work and wires that carry the data.",
      questions: [
        {
          type: "mcq",
          q: "In Dynamo, what is a node?",
          choices: [
            "A saved copy of the whole graph",
            "A building block that performs an action or holds data",
            "A connection line between two other nodes",
            "A background 3D preview window"
          ],
          answer: 1,
          explain: "Nodes are the fundamental building blocks. Each node either performs an action or holds a piece of data, and you combine many of them to build a graph."
        },
        {
          type: "truefalse",
          q: "A wire connects an output port of one node to an input port of another, defining how data flows.",
          answer: true,
          explain: "Wires carry data from a node's output port to another node's input port. This connection is what defines the program flow through the graph."
        },
        {
          type: "fill",
          q: "In a node, input ports are on the left side and ____ ports are on the right side.",
          answer: "output",
          accept: ["output", "outputs"],
          explain: "Data enters a node through input ports on the left and leaves through output ports on the right. This left-to-right layout mirrors the overall direction of data flow."
        },
        {
          type: "mcq",
          q: "In which direction does data generally flow through a Dynamo graph?",
          choices: [
            "Right to left",
            "Top to bottom only",
            "Left to right",
            "In whatever order you click the nodes"
          ],
          answer: 2,
          explain: "Data flows left to right: it enters a node through the input ports on the left and exits through the output ports on the right, so graphs are typically read that way."
        },
        {
          type: "order",
          q: "Order these from smallest concept to the largest whole in Dynamo.",
          items: ["A single node", "A wire between two nodes", "A full graph of many nodes and wires"],
          explain: "A node is one building block, a wire links two nodes, and many nodes plus their wires together make up a complete graph."
        },
        {
          type: "truefalse",
          q: "A node will run before all of its required inputs are supplied.",
          answer: false,
          explain: "A node runs only once all its required inputs are supplied. Until then it cannot produce a result, which is why unconnected nodes sit idle."
        },
        {
          type: "mcq",
          q: "What do nodes and wires together form?",
          choices: [
            "A package",
            "A graph",
            "A watch node",
            "A Code Block"
          ],
          answer: 1,
          explain: "Nodes joined by wires make up a graph. The graph is the complete visual program that Dynamo executes."
        },
        {
          type: "match",
          q: "Match each element to its role in data flow.",
          pairs: [
            ["Node", "Performs an action or holds data"],
            ["Wire", "Carries data from one node to another"],
            ["Input port", "Receives incoming data on the left"]
          ],
          explain: "Nodes do the work, wires move the data between them, and input ports on the left are where a node receives that data. Together they define program flow."
        }
      ]
    },
    {
      id: "l147",
      title: "Anatomy of a Node",
      intro: "Break a node into its five parts and learn the naming convention that reveals what it does.",
      questions: [
        {
          type: "mcq",
          q: "The node named Point.ByCoordinates follows which naming convention?",
          choices: [
            "Action.Object",
            "Category.Name",
            "Input.Output",
            "Package.Version"
          ],
          answer: 1,
          explain: "Node names use the Category.Name convention. In Point.ByCoordinates, 'Point' is the category and 'ByCoordinates' is the specific name, telling you it creates a point from coordinate values."
        },
        {
          type: "match",
          q: "Match each of a node's five parts to its purpose.",
          pairs: [
            ["Name", "Identifies the node using Category.Name"],
            ["Ports", "Receive inputs on the left, send results on the right"],
            ["Lacing icon", "Shows how list inputs are matched"],
            ["Default value", "A preset value some input ports can use"]
          ],
          explain: "A node has a Name, a Main Body, Ports, a Lacing icon, and Default Values. Knowing each part helps you read and troubleshoot any node you encounter."
        },
        {
          type: "truefalse",
          q: "Right-clicking a node's main body gives you options that apply to the whole node.",
          answer: true,
          explain: "The main body is the center of the node, and right-clicking it opens whole-node options such as freeze and preview toggles. This is different from right-clicking an individual port."
        },
        {
          type: "fill",
          q: "The ____ icon on a node shows which lacing option is being used to match list inputs.",
          answer: "lacing",
          accept: ["lacing"],
          explain: "The lacing icon reveals the current lacing option, which controls how Dynamo pairs up items when inputs are lists of different lengths."
        },
        {
          type: "mcq",
          q: "How do you use or ignore a port's default value?",
          choices: [
            "Delete the node and rebuild it",
            "Right-click the specific port",
            "Freeze the entire graph",
            "Switch the run mode to Manual"
          ],
          answer: 1,
          explain: "Some input ports carry a default value, and right-clicking that individual port lets you choose to use or ignore the default. This is a per-port setting, not a whole-node one."
        },
        {
          type: "truefalse",
          q: "Ports accept any data type, so a type mismatch never causes a problem.",
          answer: false,
          explain: "Ports expect specific data types. Feeding a port the wrong type causes an error or a warning, so matching data types is essential for a working graph."
        },
        {
          type: "mcq",
          q: "On a node, where are the input ports located?",
          choices: [
            "On the right side",
            "On the left side",
            "Along the bottom edge",
            "Inside the preview bubble"
          ],
          answer: 1,
          explain: "Input ports sit on the left of a node and receive incoming data, while output ports on the right send results out. This matches Dynamo's left-to-right data flow."
        },
        {
          type: "order",
          q: "Read the node name Surface.Offset from left to right by role.",
          items: ["Surface (the category)", "Offset (the specific name)"],
          explain: "Under the Category.Name convention, 'Surface' is the category and 'Offset' is the specific action, so the name tells you the node offsets a surface."
        }
      ]
    },
    {
      id: "l148",
      title: "Node States & Colors",
      intro: "Read a node's color at a glance to know if it is running, warning, failing, or frozen.",
      questions: [
        {
          type: "match",
          q: "Match each node color to its state.",
          pairs: [
            ["Dark grey", "Active and running"],
            ["Yellow", "Warning"],
            ["Red", "Error"],
            ["Transparent / ghosted", "Frozen"]
          ],
          explain: "Color tells you a node's health at a glance: dark grey is active, yellow is a warning, red is an error, and transparent means frozen. Learning these colors speeds up troubleshooting."
        },
        {
          type: "mcq",
          q: "A node turns yellow. What does that indicate?",
          choices: [
            "It failed to execute at all",
            "It is frozen",
            "It ran but with an issue, such as a null or empty list",
            "It is fully connected and healthy"
          ],
          answer: 2,
          explain: "Yellow is a warning: the node ran but hit an issue like a null value, an empty list, or unexpected data. It is a signal to inspect your inputs."
        },
        {
          type: "truefalse",
          q: "A red node means the node failed to execute.",
          answer: true,
          explain: "Red indicates an error, meaning the node could not execute. You will usually need to fix the input or the connection before the graph will produce a result."
        },
        {
          type: "mcq",
          q: "What does freezing a node do?",
          choices: [
            "Deletes the node from the graph",
            "Suspends execution for that node and everything downstream of it",
            "Changes the run mode to Periodic",
            "Locks the node's position on the canvas"
          ],
          answer: 1,
          explain: "Freeze suspends execution for the frozen node and everything downstream. It is handy for pausing heavy calculations while you keep editing the rest of the graph."
        },
        {
          type: "fill",
          q: "A node that is not fully connected and still needs wires appears in plain grey and is called ____.",
          answer: "inactive",
          accept: ["inactive"],
          explain: "An inactive node is grey because it is missing required connections. Once you wire up its inputs it becomes active and turns dark grey."
        },
        {
          type: "truefalse",
          q: "A selected node is shown with an aqua highlighted border.",
          answer: true,
          explain: "When you select a node, Dynamo draws an aqua highlighted border around it. This makes it easy to see exactly which nodes are currently selected."
        },
        {
          type: "mcq",
          q: "Where does a node's geometry result appear?",
          choices: [
            "Only inside the node's name",
            "In the background 3D preview, which can be toggled per node",
            "It never appears anywhere",
            "In the Library panel"
          ],
          answer: 1,
          explain: "Geometry shows in the background 3D preview, and you can toggle that preview on or off per node. Non-geometry results appear in a small preview bubble on the node."
        },
        {
          type: "order",
          q: "Order these node states from most-broken to fully working.",
          items: ["Error (red)", "Warning (yellow)", "Active (dark grey)"],
          explain: "Red is a full failure, yellow ran but with a problem, and dark grey is a healthy running node. Reading color in this order helps you triage a graph fast."
        }
      ]
    },
    {
      id: "l149",
      title: "The Dynamo Interface",
      intro: "Tour the canvas, library, search, menus, run bar, and the tools that keep a graph organized.",
      questions: [
        {
          type: "mcq",
          q: "What is the Library panel used for?",
          choices: [
            "Running the graph",
            "Browsing and searching all available nodes by category",
            "Storing saved .dyn files",
            "Displaying geometry in 3D"
          ],
          answer: 1,
          explain: "The Library is the left-hand panel where you browse and search every available node, organized by category. It is your main way to find and place nodes."
        },
        {
          type: "match",
          q: "Match each interface element to its function.",
          pairs: [
            ["Workspace / Canvas", "Infinite area where you place nodes"],
            ["Library", "Left panel to browse and search nodes"],
            ["Run bar", "Runs the graph and sets the run mode"],
            ["Groups", "Colored boxes that organize a graph"]
          ],
          explain: "The canvas holds your nodes, the Library finds them, the run bar executes the graph, and Groups keep everything organized. Knowing where each lives makes you far faster in Dynamo."
        },
        {
          type: "truefalse",
          q: "The Dynamo workspace is a fixed-size area, so you can quickly run out of room for nodes.",
          answer: false,
          explain: "The workspace is an infinite canvas. You pan and zoom to navigate it, so you never run out of space for placing nodes."
        },
        {
          type: "fill",
          q: "The run bar that executes the graph is located at the ____ of the Dynamo window.",
          answer: "bottom",
          accept: ["bottom"],
          explain: "The run bar sits at the bottom of the window. It runs the graph and lets you choose the run mode."
        },
        {
          type: "mcq",
          q: "You want to add a plain text label to explain part of your graph. Which tool fits best?",
          choices: [
            "A Note",
            "A Watch node",
            "The Library search",
            "A Number Slider"
          ],
          answer: 0,
          explain: "Notes let you annotate a graph with text explanations, while Groups (colored boxes) visually cluster related nodes. Both help others understand your work."
        },
        {
          type: "order",
          q: "Order the steps to place a specific node using the interface.",
          items: ["Open or focus the Library panel", "Type the node name into search", "Select the node to drop it on the canvas"],
          explain: "You open the Library, type the node's name into search to find it, then place it on the canvas. Search is the quickest route when you already know the node you want."
        },
        {
          type: "truefalse",
          q: "You navigate the canvas by panning and zooming.",
          answer: true,
          explain: "Because the canvas is an infinite area, you move around it by panning and zooming. This lets you work on large graphs comfortably."
        },
        {
          type: "mcq",
          q: "Which of these is one of Dynamo's top menus?",
          choices: [
            "Clash",
            "Packages",
            "Render",
            "Sheets"
          ],
          answer: 1,
          explain: "Dynamo's menus include File, Edit, View, Packages, Settings, and Help. The Packages menu is where you manage add-on node libraries."
        }
      ]
    },
    {
      id: "l150",
      title: "The Node Library: Create, Action, Query",
      intro: "The three functional kinds of node and how to spot each one by its first input.",
      questions: [
        {
          type: "match",
          q: "Match each node kind to what it does.",
          pairs: [
            ["Create", "Constructs a new object"],
            ["Action", "Operates on an existing object"],
            ["Query", "Retrieves a property without changing the object"]
          ],
          explain: "Create nodes build new objects, Action nodes modify existing ones, and Query nodes read a property without altering anything. Recognizing the three kinds helps you predict how a node behaves."
        },
        {
          type: "mcq",
          q: "Point.ByCoordinates and Line.ByStartPointEndPoint are examples of which node kind?",
          choices: [
            "Query nodes",
            "Action nodes",
            "Create nodes",
            "Watch nodes"
          ],
          answer: 2,
          explain: "These are Create nodes because they construct brand-new objects and have no primary object as their first input. The 'By...' pattern often signals a Create node."
        },
        {
          type: "truefalse",
          q: "An Action node takes the object it operates on as its first input.",
          answer: true,
          explain: "Action nodes such as Geometry.Translate operate on an existing object, and that object is supplied as the first input. This is a reliable way to identify an Action node."
        },
        {
          type: "fill",
          q: "A ____ node retrieves a property of an object, like Curve.Length, without changing the object itself.",
          answer: "query",
          accept: ["query"],
          explain: "Query nodes read information such as Curve.Length or Point.X and return it without modifying the source object. They only report; they never alter."
        },
        {
          type: "mcq",
          q: "Which node is a QUERY node?",
          choices: [
            "Geometry.Translate",
            "Point.ByCoordinates",
            "Curve.Length",
            "Line.ByStartPointEndPoint"
          ],
          answer: 2,
          explain: "Curve.Length retrieves the length property of a curve without changing it, making it a Query node. Point.X is another common Query example."
        },
        {
          type: "truefalse",
          q: "The Library only ever shows Dynamo's built-in default nodes.",
          answer: false,
          explain: "The Library shows the default nodes plus any nodes from packages you install. Installing packages expands what is available to you."
        },
        {
          type: "order",
          q: "Order the Library hierarchy from broadest to most specific.",
          items: ["Category", "Sub-category", "Node"],
          explain: "The Library is organized Category, then sub-category, then the individual node. Drilling down this hierarchy is one way to locate a node without searching by name."
        },
        {
          type: "mcq",
          q: "A key clue that a node is a Create node is that it...",
          choices: [
            "Has no primary object as its first input",
            "Always turns red",
            "Cannot be searched for",
            "Only works in Manual run mode"
          ],
          answer: 0,
          explain: "Create nodes construct something new, so they do not take an existing primary object as their first input. Action and Query nodes, by contrast, both start with the object they work on."
        }
      ]
    },
    {
      id: "l151",
      title: "Running a Graph: Run Modes",
      intro: "Choose the right run mode and use Watch nodes to see what your graph is producing.",
      questions: [
        {
          type: "match",
          q: "Match each run mode to its behavior.",
          pairs: [
            ["Automatic", "Re-runs immediately on any change"],
            ["Manual", "Runs only when you press Run"],
            ["Periodic", "Re-runs on a set time interval"]
          ],
          explain: "Automatic re-runs on every change, Manual waits for you to press Run, and Periodic re-runs on a timer. Picking the right mode balances responsiveness against performance."
        },
        {
          type: "mcq",
          q: "You are running a heavy graph that edits a large Revit model. Which run mode is usually best?",
          choices: [
            "Automatic",
            "Manual",
            "Periodic",
            "Freeze"
          ],
          answer: 1,
          explain: "Manual mode is best for heavy graphs or ones that edit Revit, because it runs only when you press Run. That prevents constant re-execution while you are still building the graph."
        },
        {
          type: "truefalse",
          q: "Automatic is the default run mode and works well for small graphs.",
          answer: true,
          explain: "Automatic is the default and re-runs the graph immediately on any change, which is convenient for small graphs. For large or Revit-editing graphs, Manual is safer."
        },
        {
          type: "fill",
          q: "A ____ node shows a node's output data as values or text.",
          answer: "watch",
          accept: ["watch"],
          explain: "A Watch node displays another node's output as values or text, letting you inspect exactly what data is flowing. It is one of the most useful debugging tools in Dynamo."
        },
        {
          type: "mcq",
          q: "Which tool shows geometry inside an embedded viewport within the graph?",
          choices: [
            "Watch node",
            "Watch 3D node",
            "Number Slider",
            "Code Block"
          ],
          answer: 1,
          explain: "The Watch 3D node embeds a small viewport that shows geometry right in the graph. A plain Watch node, by contrast, shows values and text."
        },
        {
          type: "truefalse",
          q: "Hovering over a node shows a preview bubble of its output.",
          answer: true,
          explain: "Hovering a node reveals its preview bubble, a quick way to peek at the output without adding a Watch node. It is great for spot-checking as you build."
        },
        {
          type: "mcq",
          q: "What does Periodic run mode do?",
          choices: [
            "Runs the graph once and stops forever",
            "Re-runs the graph on a set time interval",
            "Prevents the graph from ever running",
            "Runs only the selected nodes"
          ],
          answer: 1,
          explain: "Periodic mode re-runs the graph automatically on a time interval you set. It is useful when your graph needs to refresh on a schedule."
        },
        {
          type: "order",
          q: "Order the workflow for running a heavy graph safely.",
          items: ["Set the run mode to Manual", "Make your edits to the graph", "Press Run to execute when ready"],
          explain: "For heavy graphs you switch to Manual first, build and edit freely without constant re-runs, then press Run when you are ready. This avoids slow, repeated execution."
        }
      ]
    },
    {
      id: "l152",
      title: "Core Data Nodes & Zero-Based Index",
      intro: "The input nodes that feed data into a graph, plus the zero-based rule for reading lists.",
      questions: [
        {
          type: "match",
          q: "Match each input node to what it provides.",
          pairs: [
            ["Number", "A single static number"],
            ["Number Slider", "A value you drag within min, max, and step"],
            ["String", "A piece of text"],
            ["Boolean", "A True or False toggle"]
          ],
          explain: "Number gives a fixed value, a Number Slider lets you drag within a range, String holds text, and Boolean toggles True or False. These are the everyday nodes that feed data into a graph."
        },
        {
          type: "mcq",
          q: "What is the difference between a Number Slider and an Integer Slider?",
          choices: [
            "The Integer Slider produces whole numbers only",
            "The Number Slider cannot be dragged",
            "The Integer Slider holds text",
            "There is no difference"
          ],
          answer: 0,
          explain: "Both are draggable sliders bounded by min, max, and step, but the Integer Slider is constrained to whole numbers. Use it when a fractional value would not make sense."
        },
        {
          type: "truefalse",
          q: "Lists in Dynamo are zero-based, so the first item is at index 0.",
          answer: true,
          explain: "Dynamo lists are ordered and zero-based, meaning the very first element sits at index 0. This is a core rule to remember when picking items out of a list."
        },
        {
          type: "fill",
          q: "In a 5-item list, the last item is at index ____.",
          answer: "4",
          accept: ["4", "four"],
          explain: "Because lists are zero-based, a 5-item list uses indices 0 through 4, so the last item is at index 4. Counting from 0 is essential to avoid off-by-one mistakes."
        },
        {
          type: "mcq",
          q: "Which node lets you type values or logic such as numbers, strings, ranges, or DesignScript directly?",
          choices: [
            "Watch node",
            "Boolean node",
            "Code Block",
            "Number Slider"
          ],
          answer: 2,
          explain: "A Code Block lets you type values and logic directly, including numbers, strings, ranges, and DesignScript. It is a compact, powerful alternative to wiring many small nodes."
        },
        {
          type: "order",
          q: "List the indices of a 4-item list in order.",
          items: ["0", "1", "2", "3"],
          explain: "A 4-item list is zero-based, so its indices run 0, 1, 2, 3. The count of items is four, but the highest index is one less than that."
        },
        {
          type: "truefalse",
          q: "A Boolean node stores a piece of text.",
          answer: false,
          explain: "A Boolean node stores a True or False value, not text. Text is stored in a String node instead."
        },
        {
          type: "mcq",
          q: "You want a value the user can adjust between 0 and 100 by dragging. Which node fits best?",
          choices: [
            "String node",
            "Number Slider",
            "Boolean node",
            "Watch node"
          ],
          answer: 1,
          explain: "A Number Slider is made for dragging to set a value within a defined min, max, and step, which is ideal for an adjustable 0-to-100 input. A plain Number node would be static instead."
        }
      ]
    }
  ]
});
