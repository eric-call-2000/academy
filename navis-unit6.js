window.ACADEMY.addUnit("navisworks", {
  id: "unit-6",
  title: "TimeLiner (4D)",
  color: "#2bb3a3",
  icon: "🗓️",
  description: "Adding the dimension of time to the model.",
  lessons: [
    {
      id: "l41",
      title: "What Is 4D?",
      intro: "4D means the 3D model is linked to a construction schedule so you can see the building take shape over time. TimeLiner is the Navisworks tool that connects model objects to schedule tasks and plays the sequence back.",
      questions: [
        {
          type: "mcq",
          q: "What does the fourth dimension in 4D refer to?",
          choices: ["Cost", "Time", "Weight", "Color"],
          answer: 1,
          explain: "4D adds time to the three spatial dimensions of the model, showing construction sequenced over the schedule."
        },
        {
          type: "truefalse",
          q: "TimeLiner links model objects to a construction schedule.",
          answer: true,
          explain: "TimeLiner is the Navisworks feature that ties model geometry to schedule tasks to create a 4D simulation."
        },
        {
          type: "mcq",
          q: "Which Navisworks tool is used to create a 4D simulation?",
          choices: ["Clash Detective", "TimeLiner", "Quantification", "Selection Tree"],
          answer: 1,
          explain: "TimeLiner is the tool that combines the model with a schedule for 4D playback."
        },
        {
          type: "fill",
          q: "A 4D model is the 3D model linked to a construction ____.",
          answer: "schedule",
          accept: ["schedule", "program", "programme"],
          explain: "The schedule supplies task dates that drive when each linked object appears or disappears in the simulation."
        },
        {
          type: "truefalse",
          q: "TimeLiner is available only in the Manage edition of Navisworks.",
          answer: false,
          explain: "TimeLiner is in both Manage and Simulate. Only Clash Detective is restricted to Manage."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["3D", "Geometry in space"],
            ["4D", "Geometry plus time"]
          ],
          explain: "4D keeps the spatial geometry of 3D and adds the schedule dimension of time."
        },
        {
          type: "mcq",
          q: "What is the main benefit of a 4D model over a static 3D model?",
          choices: ["It shows the build sequence over time", "It reduces the file size", "It removes the need for a schedule", "It replaces clash detection"],
          answer: 0,
          explain: "A 4D model visualizes how and when the project is constructed rather than just its final state."
        },
        {
          type: "truefalse",
          q: "A 4D simulation can reveal sequencing problems before work starts on site.",
          answer: true,
          explain: "Seeing the planned sequence lets teams catch out-of-order or conflicting work before it happens in the field."
        }
      ]
    },
    {
      id: "l42",
      title: "Adding Tasks",
      intro: "Every 4D simulation needs tasks. In TimeLiner you can build tasks manually in the Tasks tab, giving each a name and planned start and end dates, or import them from external scheduling software.",
      questions: [
        {
          type: "mcq",
          q: "Where in TimeLiner do you build or view the list of tasks?",
          choices: ["The Tasks tab", "The Clash tab", "The Sets tab", "The Render tab"],
          answer: 0,
          explain: "The Tasks tab in the TimeLiner window holds the list of schedule tasks and their dates."
        },
        {
          type: "truefalse",
          q: "Tasks can be created manually inside TimeLiner without importing anything.",
          answer: true,
          explain: "You can add tasks by hand in the Tasks tab, typing names and planned dates directly."
        },
        {
          type: "fill",
          q: "Each TimeLiner task needs a planned start date and a planned ____ date.",
          answer: "end",
          accept: ["end", "finish"],
          explain: "Start and end dates define the window during which a task is active in the simulation."
        },
        {
          type: "mcq",
          q: "Which pair of fields most defines when a task happens in the simulation?",
          choices: ["Start and end dates", "Color and icon", "Author and reviewer", "Layer and material"],
          answer: 0,
          explain: "Planned start and end dates control when a task runs during the 4D playback."
        },
        {
          type: "truefalse",
          q: "A task in TimeLiner must always be typed in by hand and can never come from a file.",
          answer: false,
          explain: "Tasks can be created manually or imported from external scheduling software through a data source."
        },
        {
          type: "order",
          q: "Order these steps for building a task manually in TimeLiner.",
          items: ["Open the Tasks tab", "Add a new task", "Name the task", "Set its planned dates"],
          explain: "You open the Tasks tab, add the task, give it a name, and then set its planned start and end dates."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Task name", "Human-readable label"],
            ["Planned dates", "When the task is active"]
          ],
          explain: "The name identifies the task and the planned dates place it in the timeline."
        },
        {
          type: "truefalse",
          q: "A TimeLiner schedule can contain many tasks representing different phases of work.",
          answer: true,
          explain: "A realistic schedule has many tasks so the simulation can reflect each phase of construction."
        }
      ]
    },
    {
      id: "l43",
      title: "Linking Tasks to Objects",
      intro: "A task only animates when it is attached to model objects. In TimeLiner you link a task to a selection set or search set so those objects behave according to the task and its dates.",
      questions: [
        {
          type: "mcq",
          q: "What do you attach to a task so it has something to animate?",
          choices: ["A set of model objects", "A viewpoint camera", "A clash tolerance", "A material library"],
          answer: 0,
          explain: "You attach model objects, usually via a selection or search set, so the task drives those objects."
        },
        {
          type: "truefalse",
          q: "A task with no objects attached will still show geometry appearing in the simulation.",
          answer: false,
          explain: "Without attached objects a task has nothing to animate, so no geometry changes for it."
        },
        {
          type: "mcq",
          q: "Which kind of set updates automatically as the model changes, making it ideal for task links?",
          choices: ["Search set", "Selection set", "Viewpoint", "Render preset"],
          answer: 0,
          explain: "Search sets are rule-based and update dynamically, so linked tasks stay current as the model changes."
        },
        {
          type: "fill",
          q: "Rule-based sets that update automatically are called ____ sets.",
          answer: "search",
          accept: ["search"],
          explain: "Search sets use rules to gather matching objects and refresh as the model updates, unlike static selection sets."
        },
        {
          type: "truefalse",
          q: "Linking tasks to search sets helps the 4D model stay accurate when the design updates.",
          answer: true,
          explain: "Because search sets re-evaluate their rules, newly added matching objects are automatically included in the linked task."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Selection set", "Manual, static list of objects"],
            ["Search set", "Rule-based, dynamic list of objects"]
          ],
          explain: "Selection sets are fixed once made, while search sets refresh from their rules as the model changes."
        },
        {
          type: "order",
          q: "Order the steps to link a task to model objects.",
          items: ["Create a set of objects", "Select the task", "Attach the set to the task", "Confirm the link"],
          explain: "You build a set, choose the task, attach the set, and confirm so the objects animate with the task."
        },
        {
          type: "mcq",
          q: "Why are search sets often preferred over selection sets for 4D links?",
          choices: ["They update automatically with the model", "They are always smaller", "They store camera angles", "They run clash tests"],
          answer: 0,
          explain: "Search sets re-run their rules, so links stay valid as objects are added or changed in the model."
        }
      ]
    },
    {
      id: "l44",
      title: "Simulating the Build",
      intro: "Once tasks are linked, the Simulate tab plays the construction sequence back. A playback slider and date readout let you scrub through time and watch the model assemble according to the schedule.",
      questions: [
        {
          type: "mcq",
          q: "Which TimeLiner tab plays back the construction sequence?",
          choices: ["The Simulate tab", "The Tasks tab", "The Configure tab", "The Sets tab"],
          answer: 0,
          explain: "The Simulate tab drives playback, showing objects appear and disappear according to their task dates."
        },
        {
          type: "truefalse",
          q: "During playback you can scrub to any point in time to inspect the model state.",
          answer: true,
          explain: "The playback slider lets you jump to any date to see exactly what is built at that moment."
        },
        {
          type: "fill",
          q: "The Simulate tab plays back the construction ____ over time.",
          answer: "sequence",
          accept: ["sequence"],
          explain: "Playback animates the sequence, so you see the order in which work is planned to happen."
        },
        {
          type: "mcq",
          q: "What typically appears on screen during playback to show the current point in the schedule?",
          choices: ["A date or time readout", "A clash matrix", "A quantity takeoff", "A material palette"],
          answer: 0,
          explain: "A date or time readout tells you where in the schedule the current frame sits."
        },
        {
          type: "truefalse",
          q: "Playback can only ever run at real speed, one day per second, with no adjustment.",
          answer: false,
          explain: "You can control playback speed and interval so a long schedule compresses into a short animation."
        },
        {
          type: "order",
          q: "Order these steps to run a simulation.",
          items: ["Link tasks to objects", "Open the Simulate tab", "Press play", "Watch the model build over time"],
          explain: "With tasks linked, you open Simulate, press play, and watch the sequence unfold."
        },
        {
          type: "mcq",
          q: "What does the playback slider let you do?",
          choices: ["Move to any moment in the schedule", "Change the clash tolerance", "Rename a search set", "Export an NWD"],
          answer: 0,
          explain: "The slider scrubs through time so you can pause at any date and inspect the build state."
        },
        {
          type: "truefalse",
          q: "Simulating the build helps confirm the planned order of work looks correct.",
          answer: true,
          explain: "Watching the sequence play back reveals whether tasks happen in a sensible, buildable order."
        }
      ]
    },
    {
      id: "l45",
      title: "Task Types",
      intro: "TimeLiner tasks have a task type that controls how attached objects behave. Construct makes objects appear, Demolish makes them disappear, and Temporary shows objects that appear then vanish, like formwork or scaffolding.",
      questions: [
        {
          type: "mcq",
          q: "What does a Construct task type do to its attached objects?",
          choices: ["Makes them appear", "Makes them disappear permanently", "Turns them red only", "Runs a clash test"],
          answer: 0,
          explain: "Construct tasks bring objects into the model over their date range, representing new work being built."
        },
        {
          type: "mcq",
          q: "What does a Demolish task type do to its attached objects?",
          choices: ["Makes them disappear", "Makes them appear", "Freezes the camera", "Creates a search set"],
          answer: 0,
          explain: "Demolish tasks remove objects during their date range, representing existing work being torn down."
        },
        {
          type: "truefalse",
          q: "A Temporary task shows objects that appear and then are removed later.",
          answer: true,
          explain: "Temporary tasks suit items like scaffolding or shoring that are installed then taken away."
        },
        {
          type: "fill",
          q: "A task type that makes objects appear as new work is called ____.",
          answer: "construct",
          accept: ["construct"],
          explain: "Construct is the task type for building new elements into the model."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Construct", "Objects appear"],
            ["Demolish", "Objects disappear"],
            ["Temporary", "Objects appear then disappear"]
          ],
          explain: "The three common task types cover new work, removals, and temporary items."
        },
        {
          type: "mcq",
          q: "Which task type best fits scaffolding that is put up and later taken down?",
          choices: ["Temporary", "Construct", "Demolish", "Duplicate"],
          answer: 0,
          explain: "Temporary tasks display objects for part of the schedule and then remove them, matching scaffolding."
        },
        {
          type: "truefalse",
          q: "The task type changes how attached objects behave during the simulation.",
          answer: true,
          explain: "Task type determines whether objects appear, disappear, or appear then vanish over the task dates."
        },
        {
          type: "order",
          q: "Order these tasks by when their objects leave the model, from stay to removed early.",
          items: ["Construct", "Temporary", "Demolish"],
          explain: "Construct objects stay after appearing, Temporary objects come and go, and Demolish objects are removed."
        }
      ]
    },
    {
      id: "l46",
      title: "Data Sources",
      intro: "Rather than typing every task, TimeLiner can import a schedule from external scheduling software through a data source. Once linked, the schedule can be refreshed so the 4D model updates when the plan changes.",
      questions: [
        {
          type: "mcq",
          q: "What is the purpose of a TimeLiner data source?",
          choices: ["To import tasks from external scheduling software", "To store viewpoints", "To run clash tests", "To publish an NWD"],
          answer: 0,
          explain: "A data source connects TimeLiner to an external schedule so tasks are imported rather than typed by hand."
        },
        {
          type: "truefalse",
          q: "Importing a schedule from a data source avoids retyping every task manually.",
          answer: true,
          explain: "A data source pulls the existing schedule in, saving the effort of recreating tasks by hand."
        },
        {
          type: "fill",
          q: "TimeLiner connects to external scheduling software through a data ____.",
          answer: "source",
          accept: ["source"],
          explain: "The data source is the link between TimeLiner and the external schedule file or database."
        },
        {
          type: "mcq",
          q: "After the external schedule changes, what lets the imported tasks update in TimeLiner?",
          choices: ["Refreshing the data source", "Deleting all sets", "Running a clash", "Rotating the camera"],
          answer: 0,
          explain: "Refreshing the data source re-imports the current schedule so the 4D model reflects the latest plan."
        },
        {
          type: "truefalse",
          q: "A data source can only ever be imported once and can never be refreshed.",
          answer: false,
          explain: "Data sources can be refreshed so schedule changes flow back into the TimeLiner tasks."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Data source", "Link to an external schedule"],
            ["Refresh", "Pull in the latest schedule changes"]
          ],
          explain: "The data source establishes the link and a refresh keeps the imported tasks current."
        },
        {
          type: "order",
          q: "Order these steps for using an external schedule in TimeLiner.",
          items: ["Add a data source", "Import the schedule tasks", "Link tasks to objects", "Refresh when the plan changes"],
          explain: "You add the source, import tasks, link them to objects, and refresh as the schedule evolves."
        },
        {
          type: "mcq",
          q: "Why is importing from a data source useful for large projects?",
          choices: ["It keeps 4D in sync with the real schedule", "It removes the need for a model", "It disables playback", "It deletes search sets"],
          answer: 0,
          explain: "Large schedules change often, so a refreshable data source keeps the 4D model aligned with the real plan."
        }
      ]
    },
    {
      id: "l47",
      title: "Exporting the Simulation",
      intro: "A 4D simulation is most useful when stakeholders can see it. TimeLiner can export the simulation as a video animation so people without Navisworks can watch the planned sequence in a common media player.",
      questions: [
        {
          type: "mcq",
          q: "How can a TimeLiner simulation be shared with people who do not have Navisworks?",
          choices: ["Export it as a video animation", "Email the search sets", "Print the clash matrix", "Send only the NWC cache"],
          answer: 0,
          explain: "Exporting to a video lets anyone watch the sequence in a standard media player, no Navisworks needed."
        },
        {
          type: "truefalse",
          q: "Exporting the simulation to video lets stakeholders view the sequence without the software.",
          answer: true,
          explain: "A rendered video plays in ordinary media players, so stakeholders can review the plan easily."
        },
        {
          type: "fill",
          q: "TimeLiner can export the 4D simulation as a ____ that plays in a media player.",
          answer: "video",
          accept: ["video", "animation", "movie"],
          explain: "The exported video or animation captures the playback so it can be shared and replayed anywhere."
        },
        {
          type: "mcq",
          q: "What is a key advantage of a video export over sharing the live model?",
          choices: ["Viewers need no Navisworks license", "It always halves the model size", "It runs clash detection", "It edits the schedule"],
          answer: 0,
          explain: "A video needs no special software or license, making the sequence accessible to any stakeholder."
        },
        {
          type: "truefalse",
          q: "Only people with a Navisworks Manage license can ever watch an exported simulation video.",
          answer: false,
          explain: "Once exported to video, the file plays in common media players and needs no Navisworks at all."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Live simulation", "Needs Navisworks to view"],
            ["Exported video", "Plays in any media player"]
          ],
          explain: "The live simulation runs in Navisworks, while the exported video is broadly shareable."
        },
        {
          type: "order",
          q: "Order these steps to share a 4D simulation as a video.",
          items: ["Build and link the tasks", "Simulate the sequence", "Export the animation to video", "Send the file to stakeholders"],
          explain: "You prepare the tasks, simulate, export to video, and distribute the file for review."
        },
        {
          type: "mcq",
          q: "Who typically benefits from an exported 4D video?",
          choices: ["Stakeholders reviewing the plan", "Only the clash engine", "Only the NWC cache", "Only the Selection Tree"],
          answer: 0,
          explain: "Owners, trades, and other stakeholders can review the planned sequence from a simple video."
        }
      ]
    },
    {
      id: "l48",
      title: "Why 4D Helps",
      intro: "4D planning pays off by exposing sequencing issues, site logistics problems, and time-based conflicts early. Seeing crews and materials move through time helps teams avoid clashes that a static 3D model cannot show.",
      questions: [
        {
          type: "mcq",
          q: "Which problem is 4D especially good at revealing that a static 3D model cannot?",
          choices: ["Time-based conflicts between activities", "The final material colors", "The number of layers", "The file format"],
          answer: 0,
          explain: "4D shows when activities overlap in time and space, exposing conflicts a static model would miss."
        },
        {
          type: "truefalse",
          q: "4D can help plan site logistics such as crane and material staging over time.",
          answer: true,
          explain: "Because 4D shows the sequence, teams can plan where cranes, deliveries, and storage go at each stage."
        },
        {
          type: "fill",
          q: "4D helps expose ____ conflicts, where two activities compete for the same space at the same time.",
          answer: "time-based",
          accept: ["time-based", "time based", "temporal", "timing"],
          explain: "Time-based conflicts occur when activities collide in both space and schedule, which 4D makes visible."
        },
        {
          type: "mcq",
          q: "How does 4D improve construction sequencing?",
          choices: ["It shows the planned order of work visually", "It removes the schedule", "It hides the model", "It prints drawings"],
          answer: 0,
          explain: "Seeing the order play out helps teams confirm and refine a buildable sequence before work starts."
        },
        {
          type: "truefalse",
          q: "A static 3D clash test can catch conflicts that only occur because of timing.",
          answer: false,
          explain: "A static clash ignores time, so it cannot catch conflicts that arise only when activities overlap in schedule."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Sequencing", "Confirming a buildable order of work"],
            ["Site logistics", "Planning cranes and staging over time"],
            ["Time-based conflict", "Two activities clashing in space and schedule"]
          ],
          explain: "4D supports all three: it confirms sequence, aids logistics, and reveals timing conflicts."
        },
        {
          type: "mcq",
          q: "What is the overall value of adding 4D to a project?",
          choices: ["Catching schedule and space problems before the field does", "Reducing the number of trades", "Removing the need for coordination", "Eliminating the model"],
          answer: 0,
          explain: "4D lets teams find and fix sequencing and logistics issues in planning rather than on site."
        },
        {
          type: "order",
          q: "Order the value of 4D from planning insight to field payoff.",
          items: ["Visualize the sequence", "Spot time-based conflicts", "Adjust the plan", "Avoid delays on site"],
          explain: "You visualize the sequence, spot conflicts, adjust the plan, and thereby avoid delays in the field."
        }
      ]
    }
  ]
});
