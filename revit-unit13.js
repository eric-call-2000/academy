window.ACADEMY.addUnit("revit", {
  id: "unit-13",
  title: "Data, Lists & Logic",
  color: "#ce82ff",
  icon: "🔢",
  description: "Lists, lacing, ranges, and the logic that drives Dynamo graphs.",
  lessons: [
    {
      id: "l153",
      title: "Lists 101",
      intro: "What a list is and the core nodes for building and reading one.",
      questions: [
        { type: "mcq", q: "In Dynamo, what is the index of the FIRST item in a list?", choices: ["0", "1", "-1", "It depends on the list length"], answer: 0, explain: "Dynamo lists are zero-based, so the first item lives at index 0, the second at index 1, and so on." },
        { type: "truefalse", q: "A single Dynamo list can hold different data types, such as numbers, points, and Revit elements together.", answer: true, explain: "A list is simply an ordered collection of items; those items can be any data type, and they can even be mixed within one list." },
        { type: "fill", q: "The ____ node returns how many items are in a list.", answer: "List.Count", accept: ["list.count", "count"], explain: "List.Count reports the number of items in a list, which is one more than the highest valid index because indices start at 0." },
        { type: "mcq", q: "Which node pulls a single item out of a list at a specific position?", choices: ["List.Create", "List.GetItemAtIndex", "List.Count", "Watch"], answer: 1, explain: "List.GetItemAtIndex takes a list and an index and returns the item stored at that index." },
        { type: "match", q: "Match each core list node to what it does.", pairs: [["List.Create", "Bundles separate inputs into one list"], ["List.Count", "Returns the number of items"], ["List.GetItemAtIndex", "Returns the item at a given index"], ["Watch", "Reveals a list's structure and indices"]], explain: "These four nodes cover building a list, measuring it, reading from it, and inspecting it." },
        { type: "order", q: "Order these steps to build a list and read its third item.", items: ["Wire values into List.Create", "Feed the list into List.GetItemAtIndex", "Set the index input to 2", "Read the returned item"], explain: "Because lists are zero-based, index 2 corresponds to the third item in the list." },
        { type: "truefalse", q: "The Watch node changes the data flowing through it before passing it on.", answer: false, explain: "Watch is a read-only preview node; it displays a list's structure and indices without altering the data." },
        { type: "fill", q: "The node that bundles several separate inputs into one collection is List.____.", answer: "Create", accept: ["create"], explain: "List.Create takes multiple input ports and combines their values into a single ordered list." }
      ]
    },
    {
      id: "l154",
      title: "Manipulating Lists",
      intro: "Reorder, trim, extend, and de-duplicate lists with the List nodes.",
      questions: [
        { type: "mcq", q: "Which node reverses the order of items in a list?", choices: ["List.ShiftIndices", "List.Reverse", "List.Slice", "List.Sort"], answer: 1, explain: "List.Reverse returns a new list with the same items in the opposite order." },
        { type: "match", q: "Match each node to what it does.", pairs: [["List.Sort", "Orders items ascending"], ["List.SortByKey", "Orders items using a parallel key list"], ["List.UniqueItems", "Removes duplicate items"], ["List.ShiftIndices", "Shifts items by an offset, wrapping around"]], explain: "SortByKey is powerful when you want to reorder one list based on the values of another parallel list." },
        { type: "fill", q: "To remove duplicate values from a list, use List.____.", answer: "UniqueItems", accept: ["uniqueitems", "unique"], explain: "List.UniqueItems returns a list with any repeated values collapsed to a single occurrence." },
        { type: "truefalse", q: "List.TakeItems keeps the first n items while List.DropItems removes the first n items.", answer: true, explain: "TakeItems returns the specified number of items and DropItems discards them, so they are complementary operations." },
        { type: "mcq", q: "Which node adds an item to the very beginning of a list?", choices: ["List.AddItemToEnd", "List.AddItemToFront", "List.Slice", "List.Reverse"], answer: 1, explain: "List.AddItemToFront inserts an item at index 0; List.AddItemToEnd appends it after the last item." },
        { type: "order", q: "Order these nodes by how much of the list they typically return, from a single sublist to the whole reordered list.", items: ["List.Slice", "List.TakeItems", "List.Sort"], explain: "List.Slice extracts a sublist by start, end, and step; TakeItems keeps a leading chunk; Sort returns every item reordered." },
        { type: "fill", q: "List.____ extracts a sublist using start, end, and step values.", answer: "Slice", accept: ["slice"], explain: "List.Slice returns a portion of a list defined by a start index, an end index, and an optional step." },
        { type: "truefalse", q: "List.SortByKey sorts a list using a second, parallel list of key values.", answer: true, explain: "You supply a list to sort and a matching key list; the items are reordered according to the sorted keys." }
      ]
    },
    {
      id: "l155",
      title: "Filtering Lists",
      intro: "Use boolean masks to split lists by criteria.",
      questions: [
        { type: "fill", q: "A ____ mask is a parallel list of true and false values used to filter another list.", answer: "boolean", accept: ["bool", "boolean"], explain: "Each true or false in the mask lines up with an item in the data list and decides whether that item is kept or dropped." },
        { type: "mcq", q: "List.FilterByBoolMask returns which two outputs?", choices: ["true and false", "in and out", "keep and drop", "yes and no"], answer: 1, explain: "The 'in' output holds items where the mask was true; the 'out' output holds items where the mask was false." },
        { type: "truefalse", q: "List.Contains returns a boolean telling you whether a list includes a given item.", answer: true, explain: "List.Contains checks for the presence of an item and returns true or false." },
        { type: "mcq", q: "Which node tells you the position of an item within a list?", choices: ["List.Contains", "List.IndexOf", "List.Count", "List.FilterByBoolMask"], answer: 1, explain: "List.IndexOf searches the list and returns the index at which the item is found." },
        { type: "order", q: "Order the steps to keep only numbers greater than 10 from a list.", items: ["Compare each number using > 10 to build a mask", "Feed the number list and the mask into List.FilterByBoolMask", "Read the 'in' output for values over 10"], explain: "The comparison produces a boolean mask that FilterByBoolMask uses to split the data; the 'in' output holds the passing values." },
        { type: "match", q: "Match each node to its result.", pairs: [["List.FilterByBoolMask", "Splits a list into in and out"], ["List.Contains", "True or false: is the item present"], ["List.IndexOf", "The index where an item is found"]], explain: "Contains and IndexOf answer questions about membership; FilterByBoolMask actually splits the data." },
        { type: "fill", q: "The output of List.FilterByBoolMask that holds items where the mask is true is called ____.", answer: "in", accept: ["in"], explain: "The 'in' output collects the items that passed the mask; the 'out' output collects the rest." },
        { type: "truefalse", q: "A comparison operator such as > 10 applied across a list produces a boolean mask you can filter with.", answer: true, explain: "Comparisons return true or false per item, giving you exactly the parallel boolean list that FilterByBoolMask needs." }
      ]
    },
    {
      id: "l156",
      title: "Lists of Lists & List@Level",
      intro: "Work with nested lists and target a specific level of depth.",
      questions: [
        { type: "fill", q: "A list that contains other lists is called a ____ list.", answer: "nested", accept: ["nested", "2d", "list of lists"], explain: "A nested or 2D list has sublists inside it, and each sublist carries its own set of indices." },
        { type: "mcq", q: "Which node swaps the rows and columns of a 2D list?", choices: ["List.Map", "List.Transpose", "List.Combine", "List.Reverse"], answer: 1, explain: "List.Transpose flips a nested list so that what were rows become columns and vice versa." },
        { type: "mcq", q: "What does the List@Level feature (the @ button on an input port) let a node do?", choices: ["Sort a list alphabetically", "Operate directly on a chosen level of list depth", "Delete the deepest sublist", "Convert a list to a dictionary"], answer: 1, explain: "List@Level lets a node reach into a specific level of a nested list, often replacing List.Map for cleaner graphs." },
        { type: "truefalse", q: "In List@Level, levels are counted from the deepest level (L1) outward.", answer: true, explain: "L1 is the deepest, individual-item level; higher numbers like L2 refer to shallower, more grouped levels." },
        { type: "match", q: "Match each node or feature to its role with nested lists.", pairs: [["List.Transpose", "Swaps rows and columns"], ["List.Map", "Applies a function to each sublist"], ["List.Combine", "Pairs items across lists"], ["List@Level", "Targets a chosen depth level"]], explain: "Map, Combine, and List@Level all help you reach into sublists; Transpose reorganizes the whole 2D structure." },
        { type: "truefalse", q: "List.Map applies a function to each sublist of a nested list.", answer: true, explain: "List.Map runs a supplied function once per sublist, which is a common pattern for processing 2D data." },
        { type: "fill", q: "The level notation for the second level of depth on an input port is written @L____.", answer: "2", accept: ["2", "l2"], explain: "Writing @L2 on a port tells the node to operate at the second level of list depth, counted from the deepest level." },
        { type: "order", q: "Order these from a single flat list to a fully reorganized nested structure.", items: ["A flat list of items", "Group items into sublists to make a 2D list", "Apply List.Transpose to swap its rows and columns"], explain: "You start flat, add a level of nesting to get a 2D list, then Transpose reorganizes rows and columns." }
      ]
    },
    {
      id: "l157",
      title: "Lacing",
      intro: "How a node pairs items when input lists have different lengths.",
      questions: [
        { type: "mcq", q: "What does lacing control on a node?", choices: ["The color of the node", "How items from multiple input lists of different lengths are paired", "The order of items in a single list", "Whether a node runs at all"], answer: 1, explain: "Lacing decides the matching strategy a node uses when its input lists are not the same length." },
        { type: "mcq", q: "Which lacing mode is the DEFAULT and stops when the shorter list runs out?", choices: ["Longest", "Shortest", "Cross Product", "Auto"], answer: 1, explain: "Shortest lacing pairs items one-to-one and stops as soon as the shorter list is exhausted." },
        { type: "truefalse", q: "Longest lacing repeats the last item of the shorter list until the longer list ends.", answer: true, explain: "Longest keeps pairing one-to-one but reuses the final value of the shorter list so every item in the longer list gets a partner." },
        { type: "fill", q: "The lacing mode that produces every combination of items from both lists is called ____ Product.", answer: "Cross", accept: ["cross"], explain: "Cross Product pairs each item of one list with every item of the other, producing a grid or list of lists." },
        { type: "match", q: "Match each lacing mode to its behavior.", pairs: [["Shortest", "Stops at the end of the shorter list"], ["Longest", "Repeats the shorter list's last item"], ["Cross Product", "Every combination of both lists"]], explain: "Shortest is the safe default, Longest fills to the longer list, and Cross Product multiplies the two lists together." },
        { type: "order", q: "Order these lacing modes by how many output items they typically produce for two lists of length 3 and 5, from fewest to most.", items: ["Shortest", "Longest", "Cross Product"], explain: "Shortest gives 3, Longest gives 5, and Cross Product gives 3 times 5 equals 15 results." },
        { type: "truefalse", q: "Lacing is set by right-clicking a node and choosing a Lacing option.", answer: true, explain: "You change lacing through the node's right-click menu, and the chosen mode shows as a small lacing icon on the node." },
        { type: "mcq", q: "For two lists of length 2 and 4, how many results does Cross Product produce?", choices: ["2", "4", "6", "8"], answer: 3, explain: "Cross Product multiplies the lengths, so 2 times 4 gives 8 combinations." }
      ]
    },
    {
      id: "l158",
      title: "Ranges & Sequences",
      intro: "Generate number ranges with code-block syntax and dedicated nodes.",
      questions: [
        { type: "mcq", q: "In a Code Block, what does the range 0..10..1 produce?", choices: ["0, 1, 10", "The numbers 0 through 10 in steps of 1", "0 and 10 only", "10 copies of 0"], answer: 1, explain: "The syntax is start..end..step, so 0..10..1 gives 0, 1, 2, ... up to 10." },
        { type: "truefalse", q: "In a Code Block, 0..10 produces the same result as 0..10..1 because the default step is 1.", answer: true, explain: "When you omit the step, Dynamo assumes a step of 1, so both expressions yield 0 through 10." },
        { type: "fill", q: "In a Code Block range, the ____ symbol specifies a count of evenly spaced values, as in 0..1..#50.", answer: "#", accept: ["#", "hash", "pound"], explain: "The # symbol changes the third value from a step size into a count, so 0..1..#50 gives 50 evenly spaced values between 0 and 1." },
        { type: "mcq", q: "What does 0..10..#5 produce?", choices: ["5 numbers from 0 to 10, evenly spaced", "The numbers 0 through 5", "10 fives", "0, 5, 10 only"], answer: 0, explain: "The #5 means 'give me 5 values,' evenly spaced from 0 to 10, which are 0, 2.5, 5, 7.5, and 10." },
        { type: "truefalse", q: "Descending ranges like -3..-7 are valid and count downward.", answer: true, explain: "Dynamo handles negative and descending ranges, so -3..-7 yields -3, -4, -5, -6, -7." },
        { type: "match", q: "Match each tool to how you define its range.", pairs: [["Number Range node", "Start, end, and step"], ["Number Sequence node", "Start, amount, and step"], ["Code Block range", "start..end..step syntax"]], explain: "Number Range and the code-block syntax both use a step, while Number Sequence asks for an amount instead of an end." },
        { type: "order", q: "Order the parts of the Code Block range expression start..end..step.", items: ["start", "end", "step"], explain: "The first value is the start, the second is the end, and the third is the step size or, with #, the count." },
        { type: "fill", q: "The node that builds a range from a start, an amount, and a step is the Number ____ node.", answer: "Sequence", accept: ["sequence"], explain: "The Number Sequence node uses an amount of values rather than an end point, unlike the Number Range node." }
      ]
    },
    {
      id: "l159",
      title: "Logic & Booleans",
      intro: "Comparison operators, logic nodes, and conditional branching.",
      questions: [
        { type: "mcq", q: "What are the only two possible values of a Boolean?", choices: ["0 and 1", "true and false", "yes and maybe", "on and pause"], answer: 1, explain: "A Boolean represents a logical value that is either true or false." },
        { type: "match", q: "Match each comparison operator to its meaning.", pairs: [["==", "Equal to"], ["!=", "Not equal to"], [">=", "Greater than or equal to"], ["<", "Less than"]], explain: "Comparison operators test two values and return a Boolean; == and != check equality while >, <, >=, <= compare magnitude." },
        { type: "fill", q: "The logic node that inverts a Boolean, turning true into false, is ____.", answer: "Not", accept: ["not"], explain: "The Not node flips a Boolean value; And and Or combine two Booleans instead." },
        { type: "mcq", q: "What three inputs does the If node take?", choices: ["start, end, step", "test, true, false", "list, mask, index", "keys, values, default"], answer: 1, explain: "The If node takes a test Boolean plus a value to return when it is true and a value to return when it is false." },
        { type: "truefalse", q: "ScopeIf evaluates only the branch that is actually taken, which can improve performance and avoid errors on the untaken branch.", answer: true, explain: "Unlike If, ScopeIf does not compute the branch it will not return, so a failing untaken branch will not throw an error." },
        { type: "order", q: "Order these steps to conditionally keep only elements that pass a test.", items: ["Build a Boolean per element with a comparison", "Combine conditions with And or Or if needed", "Feed the Boolean list as a mask into List.FilterByBoolMask", "Read the 'in' output for passing elements"], explain: "Booleans pair naturally with List.FilterByBoolMask to drive conditional data flow through a graph." },
        { type: "truefalse", q: "The And node returns true only when both of its Boolean inputs are true.", answer: true, explain: "And requires both inputs to be true; Or returns true if at least one input is true." },
        { type: "fill", q: "The comparison operator that tests whether two values are NOT equal is ____.", answer: "!=", accept: ["!=", "not equal"], explain: "The != operator returns true when the two values differ and false when they are equal." }
      ]
    },
    {
      id: "l160",
      title: "Math, Strings & Dictionaries",
      intro: "Math nodes, string operations, and key-value dictionaries.",
      questions: [
        { type: "mcq", q: "Which node returns the remainder of an integer division (modulo)?", choices: ["Math.Round", "Math.RemainderInteger", "Math.Pow", "Math.Abs"], answer: 1, explain: "Math.RemainderInteger gives the remainder after dividing one integer by another, which is the modulo operation." },
        { type: "truefalse", q: "Dynamo trig nodes such as Math.Sin, Math.Cos, and Math.Tan expect their angle input in DEGREES.", answer: true, explain: "Unlike many programming languages, Dynamo's trig functions use degrees rather than radians." },
        { type: "match", q: "Match each Math node to what it returns.", pairs: [["Math.Round", "Nearest whole number"], ["Math.Floor", "Rounds down"], ["Math.Ceiling", "Rounds up"], ["Math.Abs", "Absolute value"]], explain: "Floor always rounds toward negative infinity, Ceiling toward positive infinity, Round to the nearest whole number, and Abs strips the sign." },
        { type: "fill", q: "To join several strings into one, use String.____.", answer: "Concat", accept: ["concat"], explain: "String.Concat concatenates its string inputs into a single combined string." },
        { type: "mcq", q: "Which string node breaks one string into a list using a delimiter?", choices: ["String.Concat", "String.Split", "String.Replace", "String.Length"], answer: 1, explain: "String.Split divides a string at each occurrence of a delimiter and returns the pieces as a list." },
        { type: "truefalse", q: "Dictionaries, which store key-to-value pairs, were added in Dynamo 2.0.", answer: true, explain: "Dictionary support arrived in Dynamo 2.0, letting you look up values by key instead of by numeric index." },
        { type: "mcq", q: "Which node looks up a value in a dictionary using its key?", choices: ["Dictionary.Keys", "Dictionary.ValueAtKey", "Dictionary.Values", "Dictionary.ByKeysValues"], answer: 1, explain: "Dictionary.ValueAtKey returns the value stored under a given key; ByKeysValues builds the dictionary in the first place." },
        { type: "order", q: "Order the steps to build and read a dictionary from keys and values.", items: ["Prepare a keys list and a matching values list", "Feed both into Dictionary.ByKeysValues", "Query with Dictionary.ValueAtKey using a key", "Receive the value stored under that key"], explain: "ByKeysValues pairs each key with its value; ValueAtKey then retrieves a value by supplying its key." }
      ]
    }
  ]
});
