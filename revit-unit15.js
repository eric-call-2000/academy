window.ACADEMY.addUnit("revit", {
  id: "unit-15",
  title: "Dynamo for Revit",
  color: "#2bb3a3",
  icon: "🏗️",
  description: "Automating Revit: selecting, reading, editing, and creating BIM elements with Dynamo.",
  lessons: [
    {
      id: "l169",
      title: "How Dynamo Talks to Revit",
      intro: "Where Dynamo runs, how it changes the model, and what a transaction is.",
      questions: [
        {
          type: "mcq",
          q: "When you run a Dynamo graph that edits geometry, where does it read and write the model data?",
          choices: [
            "In a separate copy of the model on disk",
            "In the currently open Revit session and its document",
            "In a cloud database, then synced later",
            "In an exported IFC file"
          ],
          answer: 1,
          explain: "Dynamo for Revit runs inside a live Revit session and reads and writes the document that is currently open. There is no separate copy."
        },
        {
          type: "truefalse",
          q: "Standalone Dynamo Sandbox (no Revit running) can create and edit elements in a Revit model.",
          answer: false,
          explain: "Editing or creating Revit elements requires Revit open with a document. Sandbox has no Revit document to write to, so it cannot change a model."
        },
        {
          type: "fill",
          q: "Model changes in Revit must happen inside a ____, which standard Dynamo nodes open and close for you automatically.",
          answer: "transaction",
          accept: ["transaction", "revit transaction"],
          explain: "Revit wraps every model change in a transaction so it can be committed or rolled back. Out-of-the-box Dynamo nodes manage this transaction automatically."
        },
        {
          type: "mcq",
          q: "In the Dynamo library, where do the nodes that specifically read and write Revit elements live?",
          choices: [
            "Under the Core category",
            "Under the Geometry category",
            "Under the Revit category",
            "Under the List category"
          ],
          answer: 2,
          explain: "Revit-specific nodes (selection, parameters, element creation) are grouped under the Revit category in the library, separate from the generic Core and Geometry nodes."
        },
        {
          type: "truefalse",
          q: "After a graph edits the model, the result is generally NOT live or associative, so you re-run the graph to update it (except where element binding applies).",
          answer: true,
          explain: "Unlike a live Revit formula, a Dynamo graph that edits the model produces a one-time result. You re-run it to refresh, and element binding is the special case that keeps re-runs tied to the same elements."
        },
        {
          type: "order",
          q: "Order the flow of a typical Dynamo-to-Revit edit, from start to result.",
          items: [
            "Revit is open with a document",
            "Dynamo runs the graph inside the session",
            "A transaction opens for the model change",
            "The elements are updated in the model"
          ],
          explain: "Revit must be open, Dynamo runs against that session, a transaction wraps the change, and the elements are updated. The transaction step is handled automatically by standard nodes."
        },
        {
          type: "match",
          q: "Match each idea about how Dynamo talks to Revit with its correct description.",
          pairs: [
            ["Transaction", "The wrapper Revit requires around any model change"],
            ["Revit category", "Where Revit-specific nodes live in the library"],
            ["Live session", "The open Revit document Dynamo reads and writes"],
            ["Re-run", "How you refresh a non-associative graph result"]
          ],
          explain: "These four ideas frame every Dynamo edit: it needs a live session, its Revit nodes come from the Revit category, model changes ride inside a transaction, and re-running refreshes the result."
        },
        {
          type: "mcq",
          q: "Why can't you rely on a model-editing graph to keep updating on its own after it finishes running?",
          choices: [
            "Dynamo deletes the graph after running",
            "The graph result is generally not associative with the model",
            "Revit locks the file permanently",
            "The transaction stays open forever"
          ],
          answer: 1,
          explain: "A graph that edits the model produces a one-time, non-associative result. To reflect new changes you re-run the graph; only element binding ties re-runs back to the same elements."
        }
      ]
    },
    {
      id: "l170",
      title: "Categories, Types & Elements",
      intro: "The Revit hierarchy Dynamo works with: Category, Family, Type, and Instance.",
      questions: [
        {
          type: "order",
          q: "Order the Revit classification hierarchy from broadest to most specific.",
          items: ["Category", "Family", "Type", "Instance"],
          explain: "Category is the broad classification (Walls, Doors), a Family holds Types, a Type is a specific configuration, and an Instance is one placed element. Dynamo nodes step through this hierarchy."
        },
        {
          type: "mcq",
          q: "Which of these is a Revit Category?",
          choices: [
            "A single 36x84 door placed in a wall",
            "A door family named Single-Flush",
            "Doors",
            "The 36x84 type inside a door family"
          ],
          answer: 2,
          explain: "Doors is a top-level Category. The named family, its 36x84 type, and a placed door are progressively more specific levels below the Category."
        },
        {
          type: "fill",
          q: "The ____ node lists the built-in Revit categories so you can pick one to feed downstream.",
          answer: "categories",
          accept: ["categories", "the categories node"],
          explain: "The Categories node exposes Revit's built-in categories as a dropdown, letting you select Walls, Doors, and so on to drive selection nodes."
        },
        {
          type: "truefalse",
          q: "An Element in Revit is an actual placed instance in the model, not just a definition.",
          answer: true,
          explain: "An element (instance) is a real object placed in the model. It differs from a Type, which is a reusable definition, and a Family, which contains Types."
        },
        {
          type: "mcq",
          q: "In Dynamo, which node lets you select a specific element type, such as a particular 36x84 door type?",
          choices: [
            "Categories",
            "Family Types",
            "Element.Geometry",
            "Select Face"
          ],
          answer: 1,
          explain: "The Family Types node lets you pick a specific type (element type) from a family. Categories only lists broad categories, and the other two do unrelated jobs."
        },
        {
          type: "match",
          q: "Match each level of the Revit hierarchy with what it represents.",
          pairs: [
            ["Category", "Top-level classification like Walls or Doors"],
            ["Family", "A container that holds one or more Types"],
            ["Type", "A specific configuration such as a 36x84 door"],
            ["Instance", "A single element actually placed in the model"]
          ],
          explain: "Category is the broadest bucket, a Family groups Types, a Type is a specific configuration, and an Instance is a placed element. Naming these correctly keeps your selection logic clear."
        },
        {
          type: "truefalse",
          q: "A Family and a Type are the same thing in Revit.",
          answer: false,
          explain: "A Family is a container that can hold multiple Types. For example, one door family can contain a 30x80 type and a 36x84 type."
        },
        {
          type: "fill",
          q: "A specific configuration inside a family, such as a 36x84 door, is called a ____ (also known as an element type).",
          answer: "type",
          accept: ["type", "family type", "element type"],
          explain: "A Type (element type) is a named configuration within a family. Every placed instance of that door inherits its type parameters from this type."
        }
      ]
    },
    {
      id: "l171",
      title: "Selecting Elements",
      intro: "The nodes that gather elements from the model to feed everything downstream.",
      questions: [
        {
          type: "mcq",
          q: "You want every wall in the model with no manual clicking. Which node fits best?",
          choices: [
            "Select Model Element",
            "All Elements of Category",
            "Select Face",
            "Family Types"
          ],
          answer: 1,
          explain: "All Elements of Category returns every element of a chosen category, so pointing it at Walls grabs them all. Select Model Element requires a manual pick."
        },
        {
          type: "truefalse",
          q: "Select Model Element and Select Model Elements let you manually pick one or more elements directly in the Revit view.",
          answer: true,
          explain: "These nodes pause the graph so you click elements in the Revit view. Select Model Element takes one; Select Model Elements takes several."
        },
        {
          type: "fill",
          q: "To return every placed instance of one specific type, use All Elements of ____ (also called All Elements of Family Type).",
          answer: "type",
          accept: ["type", "family type"],
          explain: "All Elements of Type / All Elements of Family Type returns every instance of a given type, which is handy for batch-editing just one door type across the model."
        },
        {
          type: "mcq",
          q: "Which selection node is used to pick a reference geometry, not a whole element?",
          choices: [
            "All Elements of Category",
            "Select Model Elements",
            "Select Face",
            "Family Types"
          ],
          answer: 2,
          explain: "Select Face (like Select Edge and Select Point) picks a reference rather than a whole element. The other nodes return full elements or types."
        },
        {
          type: "order",
          q: "Order these selection scopes from a single manual pick to the whole category, broadest last.",
          items: [
            "Select Model Element (one element)",
            "All Elements of Type (one type's instances)",
            "All Elements of Category (a whole category)"
          ],
          explain: "Select Model Element grabs one, All Elements of Type grabs every instance of a single type, and All Elements of Category grabs an entire category. Pick the narrowest node that gets the job done."
        },
        {
          type: "match",
          q: "Match each selection node with what it returns.",
          pairs: [
            ["Select Model Element", "One manually picked element"],
            ["All Elements of Category", "Every element in a chosen category"],
            ["All Elements of Type", "Every instance of one given type"],
            ["Select Edge", "A picked reference, not a whole element"]
          ],
          explain: "Manual picks (Select Model Element) differ from bulk queries (All Elements of Category / Type), and reference pickers (Select Edge, Select Face) return geometry references instead of elements."
        },
        {
          type: "mcq",
          q: "What is the main purpose of any of these selection nodes in a graph?",
          choices: [
            "To open a transaction",
            "To feed elements downstream for reading or editing",
            "To export the model to Excel",
            "To render the view"
          ],
          answer: 1,
          explain: "Selection nodes are the front of the pipeline: they gather elements and feed them downstream to nodes that read parameters, edit them, or extract geometry."
        },
        {
          type: "truefalse",
          q: "Select Point picks a reference in the model, similar to how Select Face and Select Edge pick references.",
          answer: true,
          explain: "Select Point, Select Face, and Select Edge all pick geometric references rather than whole elements, which is useful when a create node needs a hosting reference."
        }
      ]
    },
    {
      id: "l172",
      title: "Reading Parameters",
      intro: "Pulling parameter values off elements, and the difference between instance and type parameters.",
      questions: [
        {
          type: "mcq",
          q: "Which node returns a single parameter's value when you give it an element and the parameter name as a string?",
          choices: [
            "Element.Parameters",
            "Element.GetParameterValueByName",
            "Element.SetParameterByName",
            "Element.Geometry"
          ],
          answer: 1,
          explain: "Element.GetParameterValueByName takes the element plus the parameter name (a string) and returns that one value. Element.Parameters instead lists them all."
        },
        {
          type: "truefalse",
          q: "The parameter name you pass to Element.GetParameterValueByName is case-sensitive and must match the Revit name exactly.",
          answer: true,
          explain: "The name is a case-sensitive string match. Mistyping the case or spelling means the node cannot find the parameter and will not return its value."
        },
        {
          type: "fill",
          q: "To see every parameter name and value on an element at once, use the Element.____ node.",
          answer: "parameters",
          accept: ["parameters", "element.parameters"],
          explain: "Element.Parameters lists all parameters, names and values, for an element. It is a quick way to discover the exact parameter name you need before reading a specific one."
        },
        {
          type: "mcq",
          q: "Which statement about instance versus type parameters is correct?",
          choices: [
            "Type parameters vary per placed instance",
            "Instance parameters can vary per instance; type parameters are shared by every instance of that type",
            "Instance and type parameters are always identical",
            "Only type parameters can be read in Dynamo"
          ],
          answer: 1,
          explain: "Instance parameters can differ from one placed element to the next, while type parameters are shared across every instance of that type. This matters when you decide what to read or edit."
        },
        {
          type: "order",
          q: "Order the steps to read one parameter value off a set of elements.",
          items: [
            "Select the elements",
            "Provide the exact parameter name string",
            "Run Element.GetParameterValueByName",
            "Receive the parameter values"
          ],
          explain: "You gather elements, supply the exact name string, run GetParameterValueByName, and read the values out. An exact, case-correct name is what makes the read succeed."
        },
        {
          type: "match",
          q: "Match each parameter-reading concept with its meaning.",
          pairs: [
            ["Element.GetParameterValueByName", "Returns one parameter's value by name"],
            ["Element.Parameters", "Lists all parameters on an element"],
            ["Instance parameter", "Can vary per placed instance"],
            ["Type parameter", "Shared by all instances of the type"]
          ],
          explain: "GetParameterValueByName reads one value while Element.Parameters lists them all, and instance parameters vary per element whereas type parameters are shared across the type."
        },
        {
          type: "truefalse",
          q: "The data type that Element.GetParameterValueByName outputs depends on the parameter you read.",
          answer: true,
          explain: "The output can be a number, a string, an element, and so on, depending on the parameter. You may need to convert or handle the value differently based on that type."
        },
        {
          type: "mcq",
          q: "A read returns nothing for a parameter you know exists. What is the most likely cause?",
          choices: [
            "The model is not saved",
            "The parameter name string does not match Revit exactly, including case",
            "Dynamo cannot read type parameters",
            "You must open a transaction to read"
          ],
          answer: 1,
          explain: "Reads fail silently when the name string is misspelled or has wrong case, since the match is exact. Saving and transactions are not required just to read a value."
        }
      ]
    },
    {
      id: "l173",
      title: "Writing Parameters",
      intro: "Setting parameter values on elements, including lacing when you batch-edit.",
      questions: [
        {
          type: "mcq",
          q: "Which node sets a parameter value, taking an element, a parameter name, and a value?",
          choices: [
            "Element.GetParameterValueByName",
            "Element.SetParameterByName",
            "Element.Parameters",
            "FamilyInstance.ByPoint"
          ],
          answer: 1,
          explain: "Element.SetParameterByName writes a value to a parameter, with inputs for the element, the parameter name, and the value. GetParameterValueByName only reads."
        },
        {
          type: "truefalse",
          q: "Element.SetParameterByName can directly set a type parameter without any extra step.",
          answer: false,
          explain: "It works on instance parameters and does NOT set type parameters directly. To change a type parameter you first get the element's Type and set the parameter on that type."
        },
        {
          type: "fill",
          q: "When you feed a list of elements and a list of values into SetParameterByName, watch the ____ (or list levels) so each element gets the right value.",
          answer: "lacing",
          accept: ["lacing", "list lacing"],
          explain: "Lacing and list levels control how the two lists pair up. Getting them wrong can assign every element the same value or misalign the pairs during a batch edit."
        },
        {
          type: "truefalse",
          q: "Element.SetParameterByName runs inside a transaction, which is handled automatically by the standard node.",
          answer: true,
          explain: "Writing a parameter is a model change, so it runs inside a transaction. The standard node opens and commits that transaction for you."
        },
        {
          type: "order",
          q: "Order the steps to change a TYPE parameter on an element with Dynamo.",
          items: [
            "Select the element",
            "Get the element's Type",
            "Set the parameter on the Type",
            "Re-run to apply the change"
          ],
          explain: "Because SetParameterByName only writes instance parameters, you first get the element's Type, then set the parameter on that type so every instance updates."
        },
        {
          type: "match",
          q: "Match each writing concept with its correct description.",
          pairs: [
            ["SetParameterByName", "Sets a parameter value on an element"],
            ["Instance parameter", "What SetParameterByName can write directly"],
            ["Type parameter", "Requires getting the Type first to change"],
            ["Lacing", "Controls how element and value lists pair up"]
          ],
          explain: "SetParameterByName writes instance parameters directly; type parameters need the Type first; and lacing governs how the element and value lists line up in a batch."
        },
        {
          type: "mcq",
          q: "A batch parameter write throws an error about the value. What is a common cause?",
          choices: [
            "The value's data type does not match the parameter",
            "The model is too large",
            "You used All Elements of Category",
            "Reading is disabled"
          ],
          answer: 0,
          explain: "SetParameterByName requires the value's data type to match the parameter (a number for a numeric parameter, text for a text parameter). A mismatch causes an error."
        },
        {
          type: "fill",
          q: "The parameter name passed to SetParameterByName must match Revit exactly and is ____-sensitive.",
          answer: "case",
          accept: ["case", "case sensitive"],
          explain: "Just like reading, the name is a case-sensitive exact match. Wrong case or spelling means the write targets nothing and does not update the element."
        }
      ]
    },
    {
      id: "l174",
      title: "Creating & Placing Elements",
      intro: "The nodes that build new Revit elements from types, points, curves, and levels.",
      questions: [
        {
          type: "mcq",
          q: "Which node places a family instance and hosts it to a level?",
          choices: [
            "FamilyInstance.ByPoint",
            "FamilyInstance.ByPointAndLevel",
            "Element.SetParameterByName",
            "Select Model Element"
          ],
          answer: 1,
          explain: "FamilyInstance.ByPointAndLevel places the instance at a point and hosts it to a level. FamilyInstance.ByPoint places at a point without that level hosting."
        },
        {
          type: "truefalse",
          q: "To create a wall by drawing a curve at a given height, you can use Wall.ByCurveAndHeight.",
          answer: true,
          explain: "Wall.ByCurveAndHeight builds a wall from a curve and a height (Wall.ByCurve is a related option). It needs the wall type and location inputs to create the wall."
        },
        {
          type: "fill",
          q: "Creation nodes require a location input plus the FamilyType or ____ that defines what is being made.",
          answer: "type",
          accept: ["type", "element type", "family type"],
          explain: "Every create node needs both the type (what to build) and location inputs (where to build it), such as a point, a curve, or a level."
        },
        {
          type: "mcq",
          q: "You want to place fifty columns in one run instead of one at a time. What do you feed the create node?",
          choices: [
            "A single point",
            "A list of points",
            "A parameter name string",
            "A transaction node"
          ],
          answer: 1,
          explain: "Feeding a list of points (or curves) to a create node produces many elements at once. This is the standard way to place elements in bulk."
        },
        {
          type: "order",
          q: "Order the inputs and result of placing a family instance hosted to a level.",
          items: [
            "Choose the family type",
            "Provide the placement point",
            "Provide the level to host to",
            "Element is created in the model"
          ],
          explain: "FamilyInstance.ByPointAndLevel needs the type, a point, and a level, then creates the hosted instance. Missing any required input means no element is made."
        },
        {
          type: "match",
          q: "Match each create node with what it builds.",
          pairs: [
            ["FamilyInstance.ByPoint", "A family instance at a point"],
            ["Wall.ByCurveAndHeight", "A wall from a curve and a height"],
            ["Floor.ByOutlineTypeAndLevel", "A floor from an outline, type, and level"],
            ["Level.ByElevation", "A level at a given elevation"]
          ],
          explain: "Each create node maps to a Revit element kind and needs the matching inputs: points for instances, curves for walls, an outline for floors, and an elevation for levels."
        },
        {
          type: "mcq",
          q: "Which node creates a floor from an outline, a type, and a level?",
          choices: [
            "Wall.ByCurve",
            "Floor.ByOutlineTypeAndLevel",
            "Level.ByElevation",
            "FamilyInstance.ByPoint"
          ],
          answer: 1,
          explain: "Floor.ByOutlineTypeAndLevel builds a floor from its boundary outline plus a floor type and a level. The other nodes create walls, levels, or family instances."
        },
        {
          type: "truefalse",
          q: "Dynamo create nodes exist for elements like walls, floors, levels, grids, and sheets.",
          answer: true,
          explain: "Beyond family instances, Dynamo offers create nodes for walls, floors, levels, and other elements such as grids and sheets, each needing its own type and location inputs."
        }
      ]
    },
    {
      id: "l175",
      title: "Element Binding & Data Exchange",
      intro: "How Dynamo remembers what it created, plus moving data in and out with Excel and geometry.",
      questions: [
        {
          type: "mcq",
          q: "What does element binding do when you re-run a graph that created elements?",
          choices: [
            "It creates a fresh duplicate set every run",
            "It updates the same elements it created before instead of duplicating them",
            "It deletes all elements of that category",
            "It exports the elements to Excel"
          ],
          answer: 1,
          explain: "Element binding makes Dynamo remember which elements a graph created, so re-running updates those same elements rather than piling up duplicates."
        },
        {
          type: "truefalse",
          q: "Deleting the creating node or graph can delete the elements that were bound to it, so you should use caution.",
          answer: true,
          explain: "Because bound elements are tied to the node that made them, removing that node or the graph can remove those elements. Treat binding-created elements carefully."
        },
        {
          type: "fill",
          q: "To pull spreadsheet data into a graph and drive parameters from it, use Data.____Excel.",
          answer: "import",
          accept: ["import", "importexcel", "data.importexcel"],
          explain: "Data.ImportExcel reads spreadsheet data into Dynamo, which you can then map to elements and feed into SetParameterByName to drive parameters from Excel."
        },
        {
          type: "mcq",
          q: "Which node extracts an element's geometry into Dynamo for analysis or QA?",
          choices: [
            "Data.ExportExcel",
            "Element.Geometry",
            "Element.SetParameterByName",
            "FamilyInstance.ByPoint"
          ],
          answer: 1,
          explain: "Element.Geometry pulls an element's geometry into Dynamo, which is useful for checks, clash-style comparisons, and other QA work."
        },
        {
          type: "match",
          q: "Match each data-exchange node or feature with its job.",
          pairs: [
            ["Element binding", "Re-run updates the same created elements"],
            ["Data.ImportExcel", "Reads spreadsheet data into Dynamo"],
            ["Data.ExportExcel", "Writes Dynamo data out to a spreadsheet"],
            ["Element.Geometry", "Extracts an element's geometry"]
          ],
          explain: "Binding keeps re-runs tied to the same elements, the Excel nodes move data in and out, and Element.Geometry pulls geometry into Dynamo for downstream use."
        },
        {
          type: "order",
          q: "Order the steps of an Excel-driven parameter update.",
          items: [
            "Data.ImportExcel reads the spreadsheet",
            "Match rows to model elements",
            "SetParameterByName writes the values",
            "Re-run to apply updated data"
          ],
          explain: "You import the sheet, align rows to elements, set the parameters, and re-run when the data changes. This drives many parameters from one spreadsheet."
        },
        {
          type: "truefalse",
          q: "BoundingBox.ByElement and element location nodes are useful for QA, audits, and mass parameter updates.",
          answer: true,
          explain: "BoundingBox.ByElement and location nodes give you spatial data about elements, which supports audits, QA checks, and bulk updates that depend on where elements sit."
        },
        {
          type: "fill",
          q: "To write schedule-like data out of Dynamo into a spreadsheet, use Data.____Excel.",
          answer: "export",
          accept: ["export", "exportexcel", "data.exportexcel"],
          explain: "Data.ExportExcel writes Dynamo data out to a spreadsheet, letting you dump parameter values or computed results into an Excel file."
        }
      ]
    },
    {
      id: "l176",
      title: "Deploying with Dynamo Player",
      intro: "Running finished graphs from within Revit without opening the Dynamo editor.",
      questions: [
        {
          type: "mcq",
          q: "What is the main benefit of Dynamo Player over the Dynamo editor?",
          choices: [
            "It rewrites graphs automatically",
            "It runs .dyn graphs from within Revit without opening the Dynamo editor",
            "It replaces Revit entirely",
            "It only works in Sandbox"
          ],
          answer: 1,
          explain: "Dynamo Player lets users run finished .dyn graphs from inside Revit without opening the editor, so teammates who do not know Dynamo can still use the automation."
        },
        {
          type: "truefalse",
          q: "Marking a node with Is Input turns it into an editable field in the Dynamo Player UI.",
          answer: true,
          explain: "Right-clicking a node and choosing Is Input exposes it in the Player as an editable field, letting the operator change values before pressing play."
        },
        {
          type: "fill",
          q: "You expose a node in the Player by right-clicking it and choosing Is ____.",
          answer: "input",
          accept: ["input", "is input"],
          explain: "The Is Input toggle promotes a node to a Player input field. Nodes marked to output show their results in the Player after the run."
        },
        {
          type: "mcq",
          q: "How does Dynamo Player execute a graph?",
          choices: [
            "It runs the graph continuously in the background",
            "It runs the graph once, on demand, when you press play",
            "It runs the graph only when the model is saved",
            "It schedules the graph nightly"
          ],
          answer: 1,
          explain: "Player runs the graph once on demand when you press play. That fits repetitive tasks like renumbering, renaming, model checks, or placing elements."
        },
        {
          type: "match",
          q: "Match each Dynamo Player concept with its description.",
          pairs: [
            ["Dynamo Player", "Runs .dyn graphs inside Revit without the editor"],
            ["Is Input", "Exposes a node as an editable Player field"],
            ["Press play", "Runs the graph once, on demand"],
            ["Data-Shapes", "Package adding rich custom input forms"]
          ],
          explain: "Player runs graphs without the editor, Is Input surfaces editable fields, pressing play runs it once, and the Data-Shapes package adds richer input UI."
        },
        {
          type: "order",
          q: "Order the steps to deploy a graph to a non-Dynamo teammate via Player.",
          items: [
            "Build and test the graph in the editor",
            "Mark the needed nodes Is Input",
            "Open Dynamo Player in Revit",
            "The teammate presses play to run it"
          ],
          explain: "You build and test the graph, expose inputs, then the teammate opens Player and presses play. They never touch the Dynamo editor."
        },
        {
          type: "truefalse",
          q: "The Data-Shapes package adds rich custom input forms and UI for Player-style workflows.",
          answer: true,
          explain: "Data-Shapes lets you build richer input dialogs and forms, going beyond the basic Is Input fields for more polished Player-style tools."
        },
        {
          type: "mcq",
          q: "Which task is a good fit for a Dynamo Player graph?",
          choices: [
            "A one-time creative design exploration",
            "A repetitive task like renumbering or renaming many elements",
            "Editing the Dynamo node engine",
            "Writing Revit's source code"
          ],
          answer: 1,
          explain: "Player shines on repetitive, on-demand tasks such as renumbering, renaming, model checks, or placing elements, where non-Dynamo users just press play."
        }
      ]
    }
  ]
});
