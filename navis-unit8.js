window.ACADEMY.addUnit("navisworks", {
  id: "unit-8",
  title: "Quantification & Publishing",
  color: "#f25f9c",
  icon: "📦",
  description: "Takeoff, sharing, and where Navisworks fits.",
  lessons: [
    {
      id: "l57",
      title: "Quantification",
      intro: "Quantification lets you pull quantities straight from the federated model for estimating and 5D work.",
      questions: [
        {
          type: "mcq",
          q: "What does the Quantification tool in Navisworks do?",
          choices: ["Model-based quantity takeoff", "Finds clashes between models", "Renders photorealistic images", "Edits Revit families"],
          answer: 0,
          explain: "Quantification measures quantities from the model, giving you counts, lengths, areas, and volumes for estimating."
        },
        {
          type: "truefalse",
          q: "Quantification is available in the Manage and Simulate editions.",
          answer: true,
          explain: "Both Manage and Simulate include Quantification; Freedom is a viewer only."
        },
        {
          type: "mcq",
          q: "In BIM terms, adding cost and quantity data to a model is often called what dimension?",
          choices: ["5D", "2D", "3D", "6D"],
          answer: 0,
          explain: "3D is geometry, 4D adds time (scheduling), and 5D adds cost and quantities."
        },
        {
          type: "fill",
          q: "Quantification pulls quantities directly from the ____ instead of measuring drawings by hand.",
          answer: "model",
          accept: ["model", "3d model", "bim model"],
          explain: "Model-based takeoff reads geometry from the federated model, reducing manual measuring errors."
        },
        {
          type: "match",
          q: "Match each measurement to what it describes.",
          pairs: [["Count", "How many items"], ["Length", "Linear distance"], ["Area", "Surface coverage"], ["Volume", "Space filled"]],
          explain: "Different items are taken off differently: pipe by length, drywall by area, concrete by volume, fixtures by count."
        },
        {
          type: "truefalse",
          q: "A big advantage of model-based takeoff is that quantities update when the model changes.",
          answer: true,
          explain: "Because quantities are tied to model objects, re-measuring after a design change is far faster than by hand."
        },
        {
          type: "mcq",
          q: "Why do estimators like pulling takeoff from a federated Navisworks model?",
          choices: ["One combined model covers many trades at once", "It removes the need for any pricing", "It automatically wins the bid", "It deletes clashes"],
          answer: 0,
          explain: "A federated model brings many source files together so you can measure across trades in one place."
        },
        {
          type: "order",
          q: "Order these quantities from smallest to largest number of geometric dimensions measured.",
          items: ["Count", "Length", "Area", "Volume"],
          explain: "Count has no spatial dimension, length is one dimension, area is two, and volume is three."
        }
      ]
    },
    {
      id: "l58",
      title: "Catalogs & Items",
      intro: "A takeoff catalog defines the items you measure against so your quantities stay organized and consistent.",
      questions: [
        {
          type: "mcq",
          q: "What is a Quantification catalog?",
          choices: ["A structured list of items you take off against", "A saved camera view", "A clash test matrix", "A published NWD snapshot"],
          answer: 0,
          explain: "The catalog holds items and groups so every quantity is assigned to a defined line item."
        },
        {
          type: "truefalse",
          q: "You can start Quantification from an industry-standard catalog or build a custom one.",
          answer: true,
          explain: "Navisworks ships standard catalogs, and you can also create a catalog tailored to your project."
        },
        {
          type: "match",
          q: "Match each Quantification term to its meaning.",
          pairs: [["Catalog", "The list of items to measure"], ["Item", "A single line you take off to"], ["Takeoff", "Assigning model objects to items"]],
          explain: "You take off model objects into items, and those items live inside the catalog."
        },
        {
          type: "order",
          q: "Order these steps for a model takeoff.",
          items: ["Set up or import a catalog", "Select objects in the model", "Take them off to a catalog item", "Review the totals in the workbook"],
          explain: "Structure the catalog first, then map model selections to items, and read totals in the Quantification workbook."
        },
        {
          type: "fill",
          q: "Objects you assign to a catalog item are said to be ____ off.",
          answer: "taken",
          accept: ["taken"],
          explain: "Taking off means assigning selected model objects to a catalog item so their quantities are counted."
        },
        {
          type: "mcq",
          q: "Which is a benefit of using Search Sets when doing takeoff?",
          choices: ["Rules auto-capture matching objects for consistent takeoff", "It bakes geometry into an NWD", "It disables clash tests", "It hides all viewpoints"],
          answer: 0,
          explain: "Rule-based Search Sets grab all matching objects, so takeoff stays consistent as the model grows."
        },
        {
          type: "truefalse",
          q: "The Quantification workbook shows your running totals by item and group.",
          answer: true,
          explain: "The workbook rolls quantities up by item and group so you can see totals as you go."
        }
      ]
    },
    {
      id: "l59",
      title: "Publishing an NWD",
      intro: "Publishing writes an NWD, a self-contained snapshot that carries the geometry and coordination work with it.",
      questions: [
        {
          type: "mcq",
          q: "What does publishing an NWD produce?",
          choices: ["A self-contained file with geometry baked in", "A lightweight cache that needs source files", "A live link to Revit", "A clash matrix only"],
          answer: 0,
          explain: "An NWD bakes in geometry and review data, so it opens on its own without the original source files."
        },
        {
          type: "truefalse",
          q: "An NWD does not need the original source models to open.",
          answer: true,
          explain: "Because the NWD contains its own geometry, it is a standalone snapshot you can hand off."
        },
        {
          type: "fill",
          q: "An NWD is best described as a self-contained ____ of the coordinated model.",
          answer: "snapshot",
          accept: ["snapshot", "publish", "published snapshot"],
          explain: "Publishing freezes the current state into a snapshot for sharing or archiving."
        },
        {
          type: "match",
          q: "Match each Navisworks file type to what it holds.",
          pairs: [["NWC", "Lightweight cache from an authoring app"], ["NWF", "References to source files plus your analysis"], ["NWD", "Baked geometry in one self-contained file"]],
          explain: "NWC is an export cache, NWF references sources and saves your work, and NWD is a published snapshot with geometry."
        },
        {
          type: "mcq",
          q: "When publishing an NWD, what extra info can you attach?",
          choices: ["Title, author, and an expiry or password", "New Revit families", "A clash tolerance override", "A schedule import path"],
          answer: 0,
          explain: "Publishing lets you embed document details and optional security like a password or expiry date."
        },
        {
          type: "truefalse",
          q: "Because an NWD carries geometry, it is usually larger than the matching NWF.",
          answer: true,
          explain: "The NWF only references sources, while the NWD stores geometry, so the NWD is typically the bigger file."
        },
        {
          type: "order",
          q: "Order the steps to share a coordinated snapshot.",
          items: ["Append the source models", "Run coordination and save viewpoints", "Publish to NWD", "Send the NWD to the team"],
          explain: "Federate the models, do the review work, then publish and distribute the standalone NWD."
        }
      ]
    },
    {
      id: "l60",
      title: "NWD vs NWF",
      intro: "Choosing between a published NWD and a referenced NWF comes down to whether you want a frozen snapshot or a living link.",
      questions: [
        {
          type: "mcq",
          q: "Which file keeps live references to the source models and updates when they change?",
          choices: ["NWF", "NWD", "NWC only", "Freedom viewer"],
          answer: 0,
          explain: "An NWF references source files, so reopening it can reflect updated geometry from those sources."
        },
        {
          type: "truefalse",
          q: "An NWD is the better choice when you want a frozen record that will not change.",
          answer: true,
          explain: "The NWD is a self-contained snapshot, ideal for milestones, archives, and audits."
        },
        {
          type: "match",
          q: "Match each need to the better file to share.",
          pairs: [["Frozen milestone record", "NWD"], ["Working file that tracks source updates", "NWF"], ["Standalone file for someone without the sources", "NWD"]],
          explain: "Use NWD for snapshots and standalone sharing; use NWF as the living coordination file tied to sources."
        },
        {
          type: "fill",
          q: "An NWF stores your saved viewpoints and clash results but does not bake in the ____.",
          answer: "geometry",
          accept: ["geometry", "geo"],
          explain: "The NWF references source geometry rather than storing it, keeping the file lean and linkable."
        },
        {
          type: "mcq",
          q: "A subcontractor has no access to your source models. What do you send?",
          choices: ["An NWD", "An NWF", "The raw NWC files", "A Revit link"],
          answer: 0,
          explain: "Only the NWD is fully self-contained, so it opens without the original source files."
        },
        {
          type: "truefalse",
          q: "If you send only an NWF but not the referenced sources, the model may open empty or incomplete.",
          answer: true,
          explain: "An NWF depends on its source files, so without them the geometry will not load."
        },
        {
          type: "order",
          q: "Order these files from lightest to heaviest in typical file size.",
          items: ["NWF", "NWC", "NWD"],
          explain: "The NWF is usually smallest since it only references, then the NWC cache, then the geometry-laden NWD."
        }
      ]
    },
    {
      id: "l61",
      title: "Appearance Profiler",
      intro: "The Appearance Profiler color-codes elements by their properties so a busy model becomes easy to read.",
      questions: [
        {
          type: "mcq",
          q: "What does the Appearance Profiler do?",
          choices: ["Colors elements based on their properties", "Runs the schedule simulation", "Finds hard clashes", "Publishes an NWD"],
          answer: 0,
          explain: "It applies colors and transparency by rule, so you can visually separate systems or statuses."
        },
        {
          type: "truefalse",
          q: "You can drive Appearance Profiler colors from a property value or from a selection or search set.",
          answer: true,
          explain: "Profiles can be based on property values or on defined sets, then applied across the model."
        },
        {
          type: "fill",
          q: "Appearance Profiler is mainly a ____-coding tool for making the model easier to read.",
          answer: "color",
          accept: ["color", "colour", "colour-coding", "color-coding"],
          explain: "Color coding by property or set helps trades, phases, or statuses stand out at a glance."
        },
        {
          type: "match",
          q: "Match each use to a helpful color scheme.",
          pairs: [["Show trades", "Color by discipline"], ["Show phases", "Color by phase property"], ["Show status", "Color by review status"]],
          explain: "Picking the property to color by turns raw geometry into a readable, purpose-driven view."
        },
        {
          type: "mcq",
          q: "Why is color-coding by property useful in coordination reviews?",
          choices: ["It quickly separates systems so problems stand out", "It exports quantities", "It repairs clashes automatically", "It replaces the Selection Tree"],
          answer: 0,
          explain: "Color makes it easy to spot which system an element belongs to and where issues concentrate."
        },
        {
          type: "truefalse",
          q: "Appearance Profiler changes the actual geometry of the source models.",
          answer: false,
          explain: "It only overrides display appearance in Navisworks; the source geometry is untouched."
        },
        {
          type: "order",
          q: "Order these steps to color-code a model with the Appearance Profiler.",
          items: ["Choose a property or a selection or search set to drive the colors", "Assign a color and transparency to the selector", "Run the profiler to apply the appearances", "Review the color-coded model"],
          explain: "Pick what drives the color, set the appearance, apply the profile, then read the result."
        }
      ]
    },
    {
      id: "l62",
      title: "Animator",
      intro: "The Animator tool creates object animations and smooth camera flythroughs for presentations and studies.",
      questions: [
        {
          type: "mcq",
          q: "What is the Animator used for?",
          choices: ["Moving objects and creating camera flythroughs", "Model-based takeoff", "Publishing NWDs", "Running clash tests"],
          answer: 0,
          explain: "Animator animates objects and the camera, useful for flythroughs and simple motion studies."
        },
        {
          type: "truefalse",
          q: "Animator can move, rotate, or scale objects over time using keyframes.",
          answer: true,
          explain: "You set keyframes for position, rotation, scale, color, or transparency and Animator interpolates between them."
        },
        {
          type: "fill",
          q: "Animator interpolates motion between the frames you set, called ____.",
          answer: "keyframes",
          accept: ["keyframes", "key frames", "keyframe"],
          explain: "Keyframes mark states at points in time, and Animator fills in the movement between them."
        },
        {
          type: "match",
          q: "Match each tool to its main job.",
          pairs: [["Animator", "Create object and camera animation"], ["Scripter", "Trigger animations from events"], ["TimeLiner", "Link objects to a schedule for 4D"]],
          explain: "Animator makes motion, Scripter triggers it interactively, and TimeLiner ties objects to schedule dates."
        },
        {
          type: "mcq",
          q: "A camera path that flies the viewer through the building is called a what?",
          choices: ["Flythrough", "Clash test", "Takeoff", "Search set"],
          answer: 0,
          explain: "A flythrough is an animated camera route through the model, great for walkthrough videos."
        },
        {
          type: "truefalse",
          q: "Animator is the same feature as TimeLiner's schedule-driven 4D simulation.",
          answer: false,
          explain: "They differ: Animator makes custom motion, while TimeLiner drives visuals from a construction schedule."
        },
        {
          type: "order",
          q: "Order these steps to build a simple flythrough.",
          items: ["Add a camera animation set", "Capture viewpoints along the path", "Set keyframes at each point", "Play or export the flythrough"],
          explain: "Create the animation, place camera positions as keyframes, then play back or export the result."
        }
      ]
    },
    {
      id: "l63",
      title: "Freedom for Stakeholders",
      intro: "Navisworks Freedom is a free viewer that lets stakeholders open a published NWD without buying a license.",
      questions: [
        {
          type: "mcq",
          q: "What is Navisworks Freedom?",
          choices: ["A free viewer for published models", "The full clash edition", "A takeoff catalog", "A Revit plugin"],
          answer: 0,
          explain: "Freedom is a no-cost viewer, ideal for owners and stakeholders who only need to look at the model."
        },
        {
          type: "truefalse",
          q: "Freedom can run Clash Detective and edit the model.",
          answer: false,
          explain: "Freedom is view-only; Clash Detective and editing require the Manage edition."
        },
        {
          type: "mcq",
          q: "Which file type is the natural choice to send to someone using Freedom?",
          choices: ["NWD", "NWF", "NWC", "RVT"],
          answer: 0,
          explain: "Freedom opens self-contained NWD files, so recipients do not need the source models."
        },
        {
          type: "match",
          q: "Match each edition to what it offers.",
          pairs: [["Manage", "Full toolset including Clash Detective"], ["Simulate", "Review plus TimeLiner and Quantification"], ["Freedom", "Free view-only viewer"]],
          explain: "Manage is the full package, Simulate reviews without Clash Detective, and Freedom just views."
        },
        {
          type: "fill",
          q: "Freedom lets stakeholders review a model at ____ cost.",
          answer: "no",
          accept: ["no", "zero", "free"],
          explain: "Freedom is free, so you can share coordinated models widely without extra licenses."
        },
        {
          type: "truefalse",
          q: "With Freedom, a stakeholder can still navigate, measure, and read saved viewpoints in the NWD.",
          answer: true,
          explain: "Freedom supports viewing, navigation, and the viewpoints and markups saved into the NWD."
        },
        {
          type: "order",
          q: "Order the steps to let a stakeholder review a model with Freedom.",
          items: ["Publish the coordinated model to an NWD", "Send the NWD to the stakeholder", "The stakeholder installs the free Freedom viewer", "They open the NWD and navigate it"],
          explain: "Publish the standalone NWD, share it, and the stakeholder opens it in the no-cost Freedom viewer."
        }
      ]
    },
    {
      id: "l64",
      title: "Where Navisworks Fits",
      intro: "Navisworks sits in the middle of the BIM workflow, federating authoring models for review and increasingly connecting to the cloud.",
      questions: [
        {
          type: "mcq",
          q: "Where does Navisworks sit in the BIM workflow?",
          choices: ["Between authoring apps and project review", "As the primary modeling authoring tool", "As an accounting system", "As a rendering-only engine"],
          answer: 0,
          explain: "Authoring apps like Revit create geometry; Navisworks federates and reviews it for coordination."
        },
        {
          type: "truefalse",
          q: "Navisworks federates models from many authoring tools rather than being where you model.",
          answer: true,
          explain: "It aggregates exported models for review and coordination; the modeling happens in authoring apps."
        },
        {
          type: "match",
          q: "Match each stage to a typical tool or output.",
          pairs: [["Authoring", "Revit or other modelers"], ["Coordination", "Navisworks federated model"], ["Cloud coordination", "ACC Model Coordination"]],
          explain: "Design happens in authoring apps, Navisworks coordinates, and ACC extends coordination to the cloud."
        },
        {
          type: "fill",
          q: "Bringing many source models together in Navisworks creates a ____ model.",
          answer: "federated",
          accept: ["federated", "combined", "aggregate"],
          explain: "A federated model combines separate discipline files into one reviewable whole."
        },
        {
          type: "order",
          q: "Order a typical end-to-end coordination flow.",
          items: ["Model in authoring apps", "Export NWC files", "Federate in Navisworks", "Run clash and review", "Publish NWD for the team"],
          explain: "Author, export lightweight caches, federate, coordinate, then publish the snapshot."
        },
        {
          type: "mcq",
          q: "Navisworks coordination increasingly connects to which Autodesk cloud service?",
          choices: ["ACC Model Coordination", "AutoCAD Web", "Fusion Manage", "PlanGrid Field"],
          answer: 0,
          explain: "Model Coordination in Autodesk Construction Cloud extends clash and review workflows to the cloud."
        },
        {
          type: "truefalse",
          q: "Cloud coordination and desktop Navisworks can complement each other rather than fully replacing one.",
          answer: true,
          explain: "Many teams use ACC for cloud-based clash and Navisworks for deep desktop review side by side."
        }
      ]
    }
  ]
});
