window.ACADEMY.addUnit("acc", {
  id: "unit-5",
  title: "Model Coordination & Clash",
  color: "#ff4b4b",
  icon: "⚠️",
  description: "Cloud clash detection that complements Navisworks.",
  lessons: [
    {
      id: "l33",
      title: "Cloud Clash Detection",
      intro: "Model Coordination in ACC (Autodesk Forma) finds where models overlap automatically in the cloud.",
      questions: [
        {
          type: "mcq",
          q: "What does clash detection look for between models?",
          choices: ["Places where parts of different models occupy the same space", "Spelling errors in sheet titles", "Missing paint colors", "Late timesheets"],
          answer: 0,
          explain: "A clash is a physical conflict where two model elements overlap or interfere with each other."
        },
        {
          type: "truefalse",
          q: "In ACC Model Coordination, clashes are found automatically when models are uploaded to a coordination space.",
          answer: true,
          explain: "Model Coordination runs clash checks in the cloud automatically as models arrive, without you starting each check by hand."
        },
        {
          type: "mcq",
          q: "Which ACC capability provides automatic cloud clash detection?",
          choices: ["Model Coordination", "Autodesk Takeoff", "Desktop Connector", "Account Admin"],
          answer: 0,
          explain: "Model Coordination is the ACC feature that automatically checks aggregated models for clashes in the cloud."
        },
        {
          type: "fill",
          q: "A physical conflict where two elements overlap in space is called a ____.",
          answer: "clash",
          accept: ["clash", "conflict"],
          explain: "The word clash describes elements that interfere with one another in 3D space."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Clash", "Two elements overlapping in space"], ["Model Coordination", "ACC feature that clashes models in the cloud"], ["Automatic", "Runs without you starting each check"]],
          explain: "Model Coordination automatically produces clash results when models are added to a coordination space."
        },
        {
          type: "truefalse",
          q: "Clash detection can only be run once at the very end of a project.",
          answer: false,
          explain: "Coordination is ongoing; clashes are re-checked continually as models change, not just at the end."
        },
        {
          type: "mcq",
          q: "Why is finding clashes early valuable?",
          choices: ["Fixing conflicts on screen is cheaper than fixing them in the field", "It makes the model file smaller", "It removes the need for drawings", "It hides errors from the team"],
          answer: 0,
          explain: "Catching conflicts digitally avoids costly rework, delays, and change orders during construction."
        }
      ]
    },
    {
      id: "l34",
      title: "Aggregating Models",
      intro: "Coordination starts by combining discipline models together in one cloud space.",
      questions: [
        {
          type: "fill",
          q: "Combining several discipline models into one view for checking is called ____ the models.",
          answer: "aggregating",
          accept: ["aggregating", "aggregate", "combining"],
          explain: "Aggregating brings architectural, structural, and MEP models together so they can be checked as a whole."
        },
        {
          type: "mcq",
          q: "Which set of models are typically aggregated for coordination?",
          choices: ["Architectural, structural, and MEP", "Only the site logo", "Only the cover sheet", "Only the schedule bar chart"],
          answer: 0,
          explain: "Coordination usually combines the main disciplines like architecture, structure, and MEP so overlaps show up."
        },
        {
          type: "truefalse",
          q: "In ACC, models are aggregated in the cloud rather than only on one person's desktop.",
          answer: true,
          explain: "Model Coordination aggregates models in the cloud so the whole team sees the same combined result."
        },
        {
          type: "match",
          q: "Match each discipline to what it contributes to the aggregate.",
          pairs: [["Architectural", "Walls, doors, and rooms"], ["Structural", "Beams, columns, and slabs"], ["MEP", "Ducts, pipes, and conduit"]],
          explain: "Each discipline model adds its own elements, and aggregating them reveals where they conflict."
        },
        {
          type: "order",
          q: "Put the aggregation steps in order.",
          items: ["Publish each discipline model to the cloud", "Add the models to a coordination space", "Aggregate them into one combined view", "Review the automatic clash results"],
          explain: "Models are published, added to a space, aggregated, and then the clash results are reviewed."
        },
        {
          type: "mcq",
          q: "Where are the models organized so Model Coordination can aggregate them?",
          choices: ["A coordination space (folder) in the project", "A printed binder", "A personal email inbox", "A spreadsheet of pixel colors"],
          answer: 0,
          explain: "Models placed in the designated coordination folder or space are aggregated and clashed automatically."
        },
        {
          type: "truefalse",
          q: "Every team member needs their own separate combined model on their laptop for cloud coordination.",
          answer: false,
          explain: "The aggregate lives in the cloud, so the team shares one combined result instead of many local copies."
        }
      ]
    },
    {
      id: "l35",
      title: "Clashes to Issues",
      intro: "Coordination turns a clash into a trackable issue so someone owns fixing it.",
      questions: [
        {
          type: "mcq",
          q: "What can you create from a clash so it can be tracked to resolution?",
          choices: ["An issue", "A print job", "A new company", "A screensaver"],
          answer: 0,
          explain: "Cloud Model Coordination lets you promote a clash into an issue that has an owner, status, and history."
        },
        {
          type: "fill",
          q: "A trackable item with an owner and a status, created from a clash, is called an ____.",
          answer: "issue",
          accept: ["issue"],
          explain: "An issue carries an assignee, a due date, and a status so the conflict is followed to closure."
        },
        {
          type: "truefalse",
          q: "Issues created from clashes are shared with the project team, not just kept on one person's screen.",
          answer: true,
          explain: "Issues are stored in the project so the whole team can see, assign, and update them."
        },
        {
          type: "match",
          q: "Match each part of an issue to what it does.",
          pairs: [["Assignee", "The person responsible for the fix"], ["Status", "Whether it is open, in review, or closed"], ["Description", "Explains the conflict to fix"]],
          explain: "An issue bundles who owns it, where it stands, and what needs fixing into one trackable record."
        },
        {
          type: "order",
          q: "Order the steps to turn a clash into a tracked item.",
          items: ["Model Coordination finds a clash", "Select the clash in the browser", "Create an issue from it", "Assign the issue to a person"],
          explain: "You find the clash, select it, create an issue, and assign an owner to drive it to closure."
        },
        {
          type: "mcq",
          q: "Why promote a clash to an issue instead of just noting it?",
          choices: ["An issue has an owner and status so it does not get forgotten", "It deletes the model", "It hides the clash forever", "It prints the whole set"],
          answer: 0,
          explain: "Turning a clash into an issue gives it accountability and a paper trail through to resolution."
        },
        {
          type: "truefalse",
          q: "Once an issue is created from a clash, it cannot be assigned to anyone.",
          answer: false,
          explain: "Issues are made to be assigned; giving one an owner is exactly how it gets resolved."
        }
      ]
    },
    {
      id: "l36",
      title: "Automatic Updates",
      intro: "As models change, Model Coordination re-runs the clash checks for you.",
      questions: [
        {
          type: "truefalse",
          q: "When a new model version is published to the coordination space, ACC re-runs the clash check automatically.",
          answer: true,
          explain: "Model Coordination detects updated models and refreshes the clash results without a manual re-run."
        },
        {
          type: "mcq",
          q: "What triggers a fresh clash check in Model Coordination?",
          choices: ["A new version of a model added to the space", "Changing the sheet border color", "Renaming a folder icon", "Logging out"],
          answer: 0,
          explain: "Publishing an updated model to the coordination space prompts ACC to re-clash the aggregate."
        },
        {
          type: "fill",
          q: "Because clashes are re-checked as models change, coordination is a ____ process, not a one-time event.",
          answer: "continuous",
          accept: ["continuous", "ongoing", "iterative"],
          explain: "Coordination is continuous; every model update refreshes the results so the team stays current."
        },
        {
          type: "match",
          q: "Match each event to its coordination result.",
          pairs: [["Model updated", "Clash check re-runs automatically"], ["Clash fixed", "It stops appearing as active"], ["New clash appears", "Team reviews and assigns it"]],
          explain: "Automatic re-runs keep the clash list in step with the latest models."
        },
        {
          type: "mcq",
          q: "What is a benefit of automatic re-runs?",
          choices: ["Resolved clashes drop off and only real conflicts remain", "The model is deleted", "Drawings are no longer needed", "Everyone must re-upload by hand daily"],
          answer: 0,
          explain: "Automatic re-runs keep the list honest, showing fixed items as cleared and surfacing new conflicts."
        },
        {
          type: "truefalse",
          q: "If a clash is fixed in the model, you must manually delete it from the results every time.",
          answer: false,
          explain: "When the conflict is gone in the updated model, the automatic re-run reflects that on its own."
        },
        {
          type: "order",
          q: "Order what happens after a designer updates their model.",
          items: ["Designer publishes the new model version", "ACC detects the update in the space", "Clash check re-runs on the aggregate", "Refreshed results appear for the team"],
          explain: "Publish, detect, re-clash, and refresh: automatic updates keep coordination current."
        }
      ]
    },
    {
      id: "l37",
      title: "Assigning & Tracking",
      intro: "Coordination issues are routed to the right person and followed until they close.",
      questions: [
        {
          type: "mcq",
          q: "What do you set on an issue so the right person knows to act?",
          choices: ["An assignee", "A font size", "A paper size", "A wallpaper"],
          answer: 0,
          explain: "Assigning an issue routes it to a responsible person or company so ownership is clear."
        },
        {
          type: "match",
          q: "Match each issue status to its meaning.",
          pairs: [["Open", "Work still needs to happen"], ["In review", "Waiting on someone to check it"], ["Closed", "Resolved and verified"]],
          explain: "Status shows exactly where each issue stands as it moves toward closure."
        },
        {
          type: "order",
          q: "Order an issue as it moves to closure.",
          items: ["Open", "Assigned", "In review", "Closed"],
          explain: "An issue is opened, assigned, reviewed, and finally closed once the fix is confirmed."
        },
        {
          type: "truefalse",
          q: "A due date on a coordination issue helps the team track whether fixes are on time.",
          answer: true,
          explain: "Due dates make overdue conflicts easy to spot so nothing quietly slips."
        },
        {
          type: "fill",
          q: "Sending an issue to the responsible person is called ____ it.",
          answer: "assigning",
          accept: ["assigning", "assign", "routing"],
          explain: "Assigning gives the issue an owner who is expected to resolve it."
        },
        {
          type: "mcq",
          q: "How can you see all open coordination issues in one place?",
          choices: ["The project issue list", "The printer queue", "The login screen", "The recycle bin"],
          answer: 0,
          explain: "ACC keeps issues in a project-wide list you can filter by assignee, status, and due date."
        },
        {
          type: "truefalse",
          q: "Once assigned, an issue can never change owners.",
          answer: false,
          explain: "Issues can be reassigned as responsibility shifts between team members or companies."
        }
      ]
    },
    {
      id: "l38",
      title: "Navisworks + ACC",
      intro: "Desktop Navisworks and cloud Model Coordination work together, not against each other.",
      questions: [
        {
          type: "truefalse",
          q: "Cloud Model Coordination complements desktop Navisworks rather than fully replacing it.",
          answer: true,
          explain: "Cloud coordination automates continuous checks, while Navisworks still offers deep desktop control and detailed rules."
        },
        {
          type: "mcq",
          q: "What is a strength of cloud Model Coordination compared to only using desktop tools?",
          choices: ["Automatic, always-current checks shared with the whole team", "It runs entirely offline with no account", "It removes the need for any model", "It only works on one computer"],
          answer: 0,
          explain: "The cloud automatically re-clashes and shares results, keeping everyone on the same up-to-date picture."
        },
        {
          type: "mcq",
          q: "What is a strength that desktop Navisworks brings to coordination?",
          choices: ["Detailed clash rules and grouping for deep review", "Automatic team-wide re-runs in the cloud", "Emailing waitlist confirmations", "Publishing sheets to print"],
          answer: 0,
          explain: "Navisworks offers fine-grained clash rules, tolerances, and grouping that suit detailed manual review."
        },
        {
          type: "match",
          q: "Match each tool to what it is best known for.",
          pairs: [["Cloud Model Coordination", "Automatic checks shared with the team"], ["Desktop Navisworks", "Detailed rule-based clash review"]],
          explain: "The two complement each other: automation and sharing in the cloud, depth and control on the desktop."
        },
        {
          type: "truefalse",
          q: "Teams sometimes use both cloud coordination and Navisworks on the same project.",
          answer: true,
          explain: "Many teams run continuous cloud checks and use Navisworks for detailed sessions when needed."
        },
        {
          type: "fill",
          q: "Rather than replacing Navisworks, cloud coordination ____ it by adding automatic team-wide checks.",
          answer: "complements",
          accept: ["complements", "complement", "supplements"],
          explain: "Cloud coordination complements Navisworks by covering continuous, shared checking."
        },
        {
          type: "mcq",
          q: "Where do the results of cloud Model Coordination live?",
          choices: ["In the ACC project, viewable in a browser", "Only on one designer's hard drive", "In a paper logbook", "Inside the printer"],
          answer: 0,
          explain: "Cloud results are stored in the ACC project and viewed in the browser by the whole team."
        }
      ]
    },
    {
      id: "l39",
      title: "The Coordination Space",
      intro: "You can review the aggregated models and clashes right in the web browser.",
      questions: [
        {
          type: "mcq",
          q: "Where can you review coordinated models and clashes in ACC?",
          choices: ["In a web browser viewer", "Only in a printed report", "Only inside a spreadsheet", "Only on a phone call"],
          answer: 0,
          explain: "The coordination space opens in the browser, so no special desktop install is needed to review."
        },
        {
          type: "truefalse",
          q: "Reviewing coordinated models in the browser lets team members without heavy desktop software still participate.",
          answer: true,
          explain: "A browser viewer lowers the barrier so more of the team can review clashes and issues."
        },
        {
          type: "fill",
          q: "The place in ACC where models are aggregated and clashed is called the coordination ____.",
          answer: "space",
          accept: ["space", "folder"],
          explain: "The coordination space is the designated area where models are aggregated and automatically clashed."
        },
        {
          type: "match",
          q: "Match each browser review action to its purpose.",
          pairs: [["Isolate a clash", "Focus on one conflict at a time"], ["Create an issue", "Make the clash trackable"], ["Comment", "Add context for the team"]],
          explain: "The browser viewer lets you inspect a clash, capture it as an issue, and discuss it in place."
        },
        {
          type: "mcq",
          q: "What is an advantage of browser-based review over emailing screenshots?",
          choices: ["Everyone sees the same live models and issues", "It uses more paper", "It hides the models", "It needs a fax machine"],
          answer: 0,
          explain: "Working in the shared space keeps everyone on the same live data instead of stale screenshots."
        },
        {
          type: "truefalse",
          q: "You must install desktop coordination software before you can view any clash in ACC.",
          answer: false,
          explain: "The coordination space is viewable in a web browser, so no desktop install is required to review."
        },
        {
          type: "order",
          q: "Order a browser review session.",
          items: ["Open the coordination space", "Select a clash to inspect", "Create an issue from it", "Assign the issue to a person"],
          explain: "Open the space, inspect a clash, make it an issue, and assign an owner."
        }
      ]
    },
    {
      id: "l40",
      title: "Closing the Loop",
      intro: "Coordination finishes by resolving the clash, verifying the fix, and documenting it.",
      questions: [
        {
          type: "order",
          q: "Order the steps that close the coordination loop.",
          items: ["Fix the conflict in the model", "Publish the updated model", "Confirm the clash re-check clears it", "Close and document the issue"],
          explain: "Fix, publish, verify with the re-check, then close and record it so the loop is complete."
        },
        {
          type: "mcq",
          q: "How do you verify a clash was truly fixed?",
          choices: ["Confirm it no longer appears after the model is updated and re-clashed", "Delete the whole model", "Ignore it and move on", "Rename the project"],
          answer: 0,
          explain: "Publishing the fix and letting the automatic re-check confirm it is gone verifies the resolution."
        },
        {
          type: "truefalse",
          q: "Closing an issue with a note leaves a record of how the conflict was resolved.",
          answer: true,
          explain: "Documenting the resolution creates an audit trail useful for later reference and accountability."
        },
        {
          type: "fill",
          q: "Confirming the fix actually cleared the conflict is called ____ the resolution.",
          answer: "verifying",
          accept: ["verifying", "verify", "validating"],
          explain: "Verifying means checking that the updated model really removed the clash before closing it."
        },
        {
          type: "match",
          q: "Match each closing step to what it does.",
          pairs: [["Resolve", "Fix the conflict in the model"], ["Verify", "Confirm the re-check shows it gone"], ["Document", "Record how it was closed"]],
          explain: "Resolve, verify, and document together ensure the conflict is truly handled and traceable."
        },
        {
          type: "mcq",
          q: "Why document a closed coordination issue?",
          choices: ["It creates a record for accountability and future reference", "It hides the fix", "It deletes the project history", "It prints a poster"],
          answer: 0,
          explain: "A documented closure keeps a clear trail of what was found, who fixed it, and how."
        },
        {
          type: "truefalse",
          q: "It is safe to close a coordination issue before the model is updated to remove the clash.",
          answer: false,
          explain: "Close an issue only after verifying the updated model actually cleared the conflict."
        }
      ]
    }
  ]
});
