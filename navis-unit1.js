window.ACADEMY.addUnit("navisworks", {
  id: "unit-1",
  title: "Getting Started with Navisworks",
  color: "#58cc02",
  icon: "🔍",
  description: "What Navisworks is and how it federates whole projects for review.",
  lessons: [
    {
      id: "l1",
      title: "What Is Navisworks?",
      intro: "Navisworks is Autodesk's project review and coordination tool that brings many separate models together into one place.",
      questions: [
        {
          type: "mcq",
          q: "What is Navisworks mainly used for?",
          choices: ["Project review and coordination of combined models", "Authoring detailed Revit families", "Running structural analysis calculations", "Rendering marketing images only"],
          answer: 0,
          explain: "Navisworks is a review and coordination tool that combines models from many sources so teams can check the whole project together."
        },
        {
          type: "truefalse",
          q: "Navisworks is designed to be your primary tool for creating and editing model geometry.",
          answer: false,
          explain: "Navisworks reviews and coordinates models made in other apps; you author geometry in tools like Revit or AutoCAD, not in Navisworks."
        },
        {
          type: "mcq",
          q: "Who makes Navisworks?",
          choices: ["Autodesk", "Bentley", "Trimble", "Graphisoft"],
          answer: 0,
          explain: "Navisworks is an Autodesk product, part of the same family as Revit and AutoCAD."
        },
        {
          type: "fill",
          q: "Navisworks lets you combine models from many disciplines into one ____ model for review.",
          answer: "federated",
          accept: ["federated", "combined", "aggregated"],
          explain: "A federated model is many source models referenced together into a single coordinated view."
        },
        {
          type: "truefalse",
          q: "Navisworks can pull together models made in different software into a single view.",
          answer: true,
          explain: "That is its core strength: it federates models from many authoring tools regardless of who made them."
        },
        {
          type: "mcq",
          q: "Which task is a natural fit for Navisworks?",
          choices: ["Reviewing a whole building from several teams at once", "Drawing a single door detail", "Editing a spreadsheet of quantities by hand", "Writing structural design code"],
          answer: 0,
          explain: "Navisworks shines at whole-project review where models from many teams need to be seen together."
        },
        {
          type: "match",
          q: "Match each tool to what it is mainly for.",
          pairs: [["Revit", "Authoring building models"], ["Navisworks", "Reviewing and coordinating combined models"]],
          explain: "You author in Revit and similar tools, then review and coordinate the combined result in Navisworks."
        }
      ]
    },
    {
      id: "l2",
      title: "Manage, Simulate & Freedom",
      intro: "Navisworks comes in three editions, and knowing what each one can do helps you pick the right one for the job.",
      questions: [
        {
          type: "mcq",
          q: "Which edition includes Clash Detective?",
          choices: ["Manage", "Simulate", "Freedom", "None of them"],
          answer: 0,
          explain: "Clash Detective is only in Navisworks Manage, the full edition used for clash coordination."
        },
        {
          type: "truefalse",
          q: "Navisworks Freedom is a free viewer with no clash or takeoff tools.",
          answer: true,
          explain: "Freedom is a free viewer for opening and navigating published models; it has no Clash Detective, TimeLiner, or Quantification."
        },
        {
          type: "mcq",
          q: "Which edition is the free viewer?",
          choices: ["Freedom", "Simulate", "Manage", "Review"],
          answer: 0,
          explain: "Freedom is the free edition that lets anyone open and walk through a published model."
        },
        {
          type: "match",
          q: "Match each edition to what it can do.",
          pairs: [["Manage", "Full edition with Clash Detective"], ["Simulate", "Review plus TimeLiner and Quantification, no clash"], ["Freedom", "Free viewer only"]],
          explain: "Manage is the full tool, Simulate reviews and does 4D and takeoff but no clash, and Freedom just views."
        },
        {
          type: "truefalse",
          q: "Navisworks Simulate includes Clash Detective.",
          answer: false,
          explain: "Simulate includes TimeLiner and Quantification but not Clash Detective; only Manage has clash detection."
        },
        {
          type: "fill",
          q: "The full edition of Navisworks that includes clash detection is called ____.",
          answer: "manage",
          accept: ["manage", "navisworks manage"],
          explain: "Manage is the full edition and the one you need for Clash Detective."
        },
        {
          type: "mcq",
          q: "A subcontractor just needs to open and look at a coordinated model. Which edition fits best?",
          choices: ["Freedom", "Manage", "Simulate", "Any paid edition only"],
          answer: 0,
          explain: "Freedom is free and made exactly for viewing, so it is ideal for someone who only needs to look."
        },
        {
          type: "order",
          q: "Order these editions from most capable to least capable.",
          items: ["Manage", "Simulate", "Freedom"],
          explain: "Manage is the fullest, Simulate is in the middle with 4D and takeoff, and Freedom is just a viewer."
        }
      ]
    },
    {
      id: "l3",
      title: "File Formats: NWC, NWF, NWD",
      intro: "Navisworks uses three native file types, and each one has a very different job.",
      questions: [
        {
          type: "match",
          q: "Match each Navisworks file format to what it is.",
          pairs: [["NWC", "Lightweight cache exported from an authoring app"], ["NWF", "References source files plus saved analysis and markups"], ["NWD", "Published snapshot that contains the geometry"]],
          explain: "NWC is a cache, NWF points back to sources and holds your work, and NWD bakes in geometry as a shareable snapshot."
        },
        {
          type: "mcq",
          q: "Which format is a self-contained published snapshot that includes the geometry?",
          choices: ["NWD", "NWC", "NWF", "RVT"],
          answer: 0,
          explain: "An NWD contains the geometry and is self-contained, making it ideal for sharing a fixed snapshot."
        },
        {
          type: "truefalse",
          q: "An NWF file bakes in all the geometry so it works even if the source files are gone.",
          answer: false,
          explain: "An NWF only references the source files; if those sources go missing, the NWF cannot show their geometry. NWD is the one that bakes geometry in."
        },
        {
          type: "mcq",
          q: "What is an NWC file best described as?",
          choices: ["A lightweight cache exported from the authoring app", "A published snapshot for clients", "A file that stores all your clash results", "A native Revit project file"],
          answer: 0,
          explain: "NWC is a lightweight cache that speeds up loading a source model into Navisworks."
        },
        {
          type: "fill",
          q: "To send a coordinated snapshot that opens without the original files, you publish an ____ file.",
          answer: "nwd",
          accept: ["nwd", ".nwd"],
          explain: "NWD is self-contained with geometry, so the recipient does not need the source models."
        },
        {
          type: "truefalse",
          q: "The NWF file is the one that holds your saved viewpoints, markups, and clash setup while pointing to the live source files.",
          answer: true,
          explain: "The NWF is your working file: it references the sources and stores the analysis and redlines you build up."
        },
        {
          type: "mcq",
          q: "Which format should you keep as your working coordination file so it updates when sources change?",
          choices: ["NWF", "NWD", "NWC", "PDF"],
          answer: 0,
          explain: "The NWF references live sources, so reopening it can reflect updated models while keeping your saved work."
        }
      ]
    },
    {
      id: "l4",
      title: "Appending Models",
      intro: "You build a federated model by appending many files into one Navisworks scene.",
      questions: [
        {
          type: "mcq",
          q: "How do you build a federated model in Navisworks?",
          choices: ["Append or merge many files into one scene", "Draw every discipline by hand", "Open one file at a time and never combine them", "Export a single Revit view"],
          answer: 0,
          explain: "You append (or merge) files together so several source models coexist in one federated scene."
        },
        {
          type: "truefalse",
          q: "Appending a file adds it to the current Navisworks scene alongside what is already loaded.",
          answer: true,
          explain: "Append brings another model in without replacing what is there, which is how the federation grows."
        },
        {
          type: "order",
          q: "Order the basic steps to start a federated model.",
          items: ["Open Navisworks", "Append the architectural model", "Append the structural model", "Append the MEP model"],
          explain: "You open Navisworks and then append each discipline in turn to assemble the combined scene."
        },
        {
          type: "fill",
          q: "The command that adds another model to the current scene is called ____.",
          answer: "append",
          accept: ["append"],
          explain: "Append is how you keep adding source files to grow the federated model."
        },
        {
          type: "mcq",
          q: "After appending three discipline models, what do you have?",
          choices: ["A federated model showing all three together", "Three separate files that cannot be seen together", "Only the last file appended", "A merged Revit project"],
          answer: 0,
          explain: "Appending each model results in one federated scene where all appended models appear together."
        },
        {
          type: "truefalse",
          q: "You can only append one model into a Navisworks scene.",
          answer: false,
          explain: "You can append many models; that is exactly how a whole-project federation is assembled."
        },
        {
          type: "match",
          q: "Match the action to its result.",
          pairs: [["Append a model", "It joins the current scene"], ["Federate several models", "Whole project is seen together"]],
          explain: "Each append joins the scene, and doing it for every discipline produces the federated whole-project view."
        }
      ]
    },
    {
      id: "l5",
      title: "Supported Formats",
      intro: "Navisworks can bring in Revit, CAD, and a wide range of other model and geometry formats.",
      questions: [
        {
          type: "mcq",
          q: "Which of these can Navisworks typically bring in?",
          choices: ["Revit and AutoCAD models", "Only Navisworks-native files", "Only image files", "Only spreadsheets"],
          answer: 0,
          explain: "Navisworks reads many formats, including Revit and AutoCAD, which is why it can federate such varied models."
        },
        {
          type: "truefalse",
          q: "Navisworks supports models from many different authoring tools, not just Autodesk ones.",
          answer: true,
          explain: "A wide range of formats is supported, so models from many vendors can be combined together."
        },
        {
          type: "fill",
          q: "A common Autodesk building modeling format that Navisworks can bring in is ____.",
          answer: "revit",
          accept: ["revit", "rvt", ".rvt"],
          explain: "Revit models are a very common source; they can be exported to NWC or read directly."
        },
        {
          type: "mcq",
          q: "Why does supporting many formats matter for coordination?",
          choices: ["Different teams use different tools, and all their models must come together", "It makes the file smaller", "It replaces the need for a schedule", "It removes the need for clash detection"],
          answer: 0,
          explain: "On a real project, teams use varied software, so reading many formats is what makes a full federation possible."
        },
        {
          type: "match",
          q: "Match each source to how it commonly reaches Navisworks.",
          pairs: [["Revit", "Exported or read as a model"], ["AutoCAD", "Read as a CAD drawing or model"]],
          explain: "Navisworks can read these common formats so their content shows up in the federated scene."
        },
        {
          type: "truefalse",
          q: "Because Navisworks only reads one file type, teams must convert everything to Revit first.",
          answer: false,
          explain: "Navisworks reads many formats, so teams do not have to standardize on a single authoring tool."
        },
        {
          type: "mcq",
          q: "What is the benefit of Navisworks reading CAD as well as BIM formats?",
          choices: ["Older CAD deliverables can still join the federated model", "It disables clash detection", "It hides the geometry", "It forces everyone onto one vendor"],
          answer: 0,
          explain: "Reading both CAD and BIM lets legacy drawings and modern models coexist in one review."
        }
      ]
    },
    {
      id: "l6",
      title: "The Federated Model",
      intro: "A federated model combines every discipline so the whole project can be reviewed together.",
      questions: [
        {
          type: "fill",
          q: "A model made by combining many discipline models for whole-project review is called a ____ model.",
          answer: "federated",
          accept: ["federated", "combined", "aggregated"],
          explain: "Federated means many source models are referenced together into one coordinated view."
        },
        {
          type: "mcq",
          q: "What is the main benefit of a federated model?",
          choices: ["You can review all disciplines together and catch conflicts", "It edits the source geometry for you", "It removes the need for any source files", "It automatically designs the building"],
          answer: 0,
          explain: "Seeing everything together is what lets teams spot conflicts and coordinate across disciplines."
        },
        {
          type: "truefalse",
          q: "A federated model keeps each discipline's model separate on disk while showing them together.",
          answer: true,
          explain: "Federation references the separate source files and displays them together without merging them into one master file."
        },
        {
          type: "match",
          q: "Match each discipline to a typical model it contributes.",
          pairs: [["Architecture", "Walls, floors, and rooms"], ["Structure", "Beams, columns, and slabs"], ["MEP", "Ducts, pipes, and cable trays"]],
          explain: "Each discipline brings its own model, and together they form the federated whole-project view."
        },
        {
          type: "order",
          q: "Order the flow from source models to a federated review.",
          items: ["Each team authors its own model", "Models are appended into Navisworks", "Disciplines appear together as one federation", "The team reviews the whole project"],
          explain: "Teams author separately, you append them, they federate, and then the whole project can be reviewed."
        },
        {
          type: "truefalse",
          q: "In a federated model you must delete a discipline's file to hide it from the view.",
          answer: false,
          explain: "You can turn discipline models on or off for review; you do not delete source files to hide them."
        },
        {
          type: "mcq",
          q: "Federating disciplines mainly helps a project by enabling what?",
          choices: ["Whole-project review and coordination", "Faster rendering of marketing images", "Automatic cost estimating with no input", "Replacing the design team"],
          answer: 0,
          explain: "The point of federation is coordinated, whole-project review across every discipline."
        }
      ]
    },
    {
      id: "l7",
      title: "Why Navisworks?",
      intro: "Navisworks is built for lightweight review of very large models pulled from many sources.",
      questions: [
        {
          type: "mcq",
          q: "What is a key reason teams use Navisworks instead of their authoring tools for review?",
          choices: ["It handles very large, multi-source models lightly and quickly", "It has more drawing tools than Revit", "It is the only tool that can open a PDF", "It automatically fixes clashes for you"],
          answer: 0,
          explain: "Navisworks is optimized to open and navigate huge combined models smoothly, which authoring tools struggle to do."
        },
        {
          type: "truefalse",
          q: "Navisworks can smoothly navigate models that are too large or heavy to combine in a single authoring tool.",
          answer: true,
          explain: "Its lightweight review approach is exactly why it handles very large federations that would bog down authoring software."
        },
        {
          type: "fill",
          q: "Navisworks is well suited to reviewing very ____ models built from many sources.",
          answer: "large",
          accept: ["large", "big", "heavy"],
          explain: "Handling very large, multi-source models with good performance is one of Navisworks's main strengths."
        },
        {
          type: "mcq",
          q: "Why not just open every discipline's file in its own native app for review?",
          choices: ["They may use different software and be too heavy to combine there", "Native apps cannot save files", "It is illegal to open two apps", "Native apps have no 3D view"],
          answer: 0,
          explain: "Teams use varied software and the combined size is often too heavy for a single authoring tool, so a review tool is needed."
        },
        {
          type: "match",
          q: "Match each strength to what it enables.",
          pairs: [["Lightweight performance", "Navigate huge models smoothly"], ["Multi-source support", "Combine models from many tools"]],
          explain: "Being lightweight and format-friendly is what lets Navisworks review big, mixed federations."
        },
        {
          type: "truefalse",
          q: "Navisworks is meant to replace the design software each team uses.",
          answer: false,
          explain: "It complements authoring tools; teams keep designing in their own software and use Navisworks to review together."
        },
        {
          type: "mcq",
          q: "A federation is very large and comes from five different software packages. Navisworks helps because it is:",
          choices: ["Lightweight and reads many formats", "The only tool with a mouse", "A spreadsheet program", "A cloud-only chat app"],
          answer: 0,
          explain: "Lightweight performance plus broad format support is exactly the situation Navisworks is built for."
        }
      ]
    },
    {
      id: "l8",
      title: "Refreshing Models",
      intro: "Because source models keep changing, Navisworks lets you refresh the aggregated model to stay current.",
      questions: [
        {
          type: "mcq",
          q: "What happens when you refresh in Navisworks?",
          choices: ["It reloads the referenced source files so the scene reflects their latest state", "It deletes your saved viewpoints", "It rebuilds the source models from scratch", "It permanently freezes the model"],
          answer: 0,
          explain: "Refreshing rereads the referenced sources so your federation shows the most recent versions."
        },
        {
          type: "truefalse",
          q: "An NWF file is well suited to refreshing because it references live source files.",
          answer: true,
          explain: "Since the NWF points to the sources, refreshing picks up their newest content while keeping your saved work."
        },
        {
          type: "fill",
          q: "To pull the newest versions of the source models into your scene, you ____ the model.",
          answer: "refresh",
          accept: ["refresh", "reload", "update"],
          explain: "Refreshing rereads the referenced sources so the aggregated model stays up to date."
        },
        {
          type: "mcq",
          q: "Why is refreshing important on a live project?",
          choices: ["Source models change often, and reviews must use current data", "It makes the file smaller each time", "It is required to open Navisworks", "It converts everything to PDF"],
          answer: 0,
          explain: "Design changes constantly, so refreshing keeps coordination decisions based on current models."
        },
        {
          type: "order",
          q: "Order the steps to keep a coordination model current.",
          items: ["A team updates its source model", "You reopen or refresh the NWF", "Navisworks reloads the updated source", "You review against the current models"],
          explain: "When a source changes, refreshing the NWF reloads it so your review uses the latest data."
        },
        {
          type: "truefalse",
          q: "Once you publish an NWD, it keeps updating itself automatically as the sources change.",
          answer: false,
          explain: "An NWD is a fixed snapshot; it does not update. You refresh the NWF and publish a new NWD to share current data."
        },
        {
          type: "match",
          q: "Match each file to how it behaves over time.",
          pairs: [["NWF", "Refreshes to show updated sources"], ["NWD", "Stays a fixed snapshot"]],
          explain: "The NWF stays live with its sources, while an NWD captures a moment in time and does not change."
        }
      ]
    }
  ]
});
