window.ACADEMY.addUnit("navisworks", {
  id: "unit-7",
  title: "Reporting & Coordination Workflow",
  color: "#a560e8",
  icon: "📋",
  description: "Communicating issues and running coordination.",
  lessons: [
    {
      id: "l49",
      title: "Clash Reports",
      intro: "Once clashes are found, the results need to leave your screen and reach the people who can fix them. Clash Detective can export the results of a clash test into a shareable report so the whole team sees the same list of issues.",
      questions: [
        {
          type: "mcq",
          q: "What is the main purpose of exporting a clash report?",
          choices: [
            "To archive the clash test so it can be deleted from the NWF",
            "To share the clash results with team members who need to act on them",
            "To push the clash fixes back into each authoring model automatically",
            "To lock the clash results so statuses can no longer change"
          ],
          answer: 1,
          explain: "A clash report packages the found clashes so authoring teams and stakeholders can review and resolve them, even without opening Navisworks."
        },
        {
          type: "truefalse",
          q: "A clash report can include a saved viewpoint image for each clash so viewers can see exactly where the problem is.",
          answer: true,
          explain: "Reports can embed viewpoint images, giving each clash a picture of the location so the reader does not have to hunt for it."
        },
        {
          type: "mcq",
          q: "Which panel in Clash Detective is used to configure and generate a clash report?",
          choices: [
            "The Select tab",
            "The Rules tab",
            "The Report tab",
            "The Results tab only"
          ],
          answer: 2,
          explain: "The Report tab holds the export settings, letting you choose the format, content, and which clashes are included."
        },
        {
          type: "fill",
          q: "A clash ____ is the exported document or file that lists the clashes found in a test.",
          answer: "report",
          accept: ["report"],
          explain: "The clash report is the deliverable that communicates results outside of a live Navisworks session."
        },
        {
          type: "truefalse",
          q: "You can choose to include only clashes with a certain status, such as New or Active, when exporting a report.",
          answer: true,
          explain: "Report settings let you filter by status so you can send, for example, only the unresolved clashes that still need attention."
        },
        {
          type: "mcq",
          q: "Why might you exclude Approved and Resolved clashes from a report sent to the design team?",
          choices: [
            "Because those clashes no longer exist in any model",
            "Because they still need action and would clutter the list of what to fix",
            "Because they are already handled, so the report stays focused on outstanding work",
            "Because Navisworks cannot export those statuses"
          ],
          answer: 2,
          explain: "Filtering out finished items keeps the report focused on the clashes that still require attention."
        },
        {
          type: "match",
          q: "Match each report element to what it provides.",
          pairs: [
            ["Clash list", "The set of intersections found"],
            ["Viewpoint image", "A picture of each clash location"],
            ["Status", "Where each clash stands in the workflow"]
          ],
          explain: "Together the list, images, and statuses tell the reader what clashed, where, and what remains to be done."
        },
        {
          type: "order",
          q: "Put the steps of producing a clash report in order.",
          items: [
            "Run the clash test",
            "Review and assign statuses to results",
            "Open the Report tab and choose settings",
            "Export the report to share"
          ],
          explain: "You detect and triage clashes first, then configure and export the report to communicate them."
        }
      ]
    },
    {
      id: "l50",
      title: "Report Formats",
      intro: "Not every report format is right for every audience. Navisworks can export clash results as HTML, XML, and viewpoint-based reports, and each format serves a different need.",
      questions: [
        {
          type: "mcq",
          q: "Which report format is best for a reader who just wants to open it in a web browser and see clashes with images?",
          choices: [
            "XML",
            "HTML",
            "A raw text dump with no images",
            "A binary NWD"
          ],
          answer: 1,
          explain: "An HTML report opens in any browser and can display clash details alongside embedded viewpoint images for easy human reading."
        },
        {
          type: "mcq",
          q: "What is the main advantage of an XML clash report?",
          choices: [
            "It is the easiest format for people to read in a web browser",
            "It is a structured, machine-readable format other software can import",
            "It embeds a full-size viewpoint image of every clash inside a single page",
            "It stores the full model geometry so no NWD is needed"
          ],
          answer: 1,
          explain: "XML is structured data, so other tools and scripts can parse the clash results programmatically."
        },
        {
          type: "truefalse",
          q: "A viewpoint-based report writes the clashes back into Navisworks as saved viewpoints rather than an external file.",
          answer: true,
          explain: "The viewpoints report creates saved viewpoints inside the model, one per clash, so you can navigate them directly in Navisworks."
        },
        {
          type: "fill",
          q: "An ____ report is the format that opens directly in a web browser.",
          answer: "html",
          accept: ["html"],
          explain: "HTML is the web page format, viewable in any browser without Navisworks."
        },
        {
          type: "match",
          q: "Match each report format to its best use.",
          pairs: [
            ["HTML", "Human-readable report with images in a browser"],
            ["XML", "Structured data another program can import"],
            ["Viewpoints", "Saved viewpoints inside the model"]
          ],
          explain: "Pick HTML for people, XML for software, and viewpoints for navigating clashes live in Navisworks."
        },
        {
          type: "truefalse",
          q: "Because XML is structured data, it is usually the easiest format for a non-technical reviewer to read directly.",
          answer: false,
          explain: "XML is meant for machines. A non-technical reviewer is far better served by an HTML report with images and clear layout."
        },
        {
          type: "mcq",
          q: "You want each clash to become a saved camera position you can click through inside Navisworks. Which format do you choose?",
          choices: [
            "HTML report",
            "XML report",
            "Viewpoints report",
            "A published NWD"
          ],
          answer: 2,
          explain: "The viewpoints report turns each clash into a saved viewpoint so you can navigate directly to it in the model."
        },
        {
          type: "order",
          q: "Order these formats from most human-friendly to most machine-friendly.",
          items: [
            "HTML report opened in a browser",
            "Viewpoints saved in the model",
            "XML structured data file"
          ],
          explain: "HTML is easiest for people to read, viewpoints sit in between as an interactive middle ground, and XML is aimed at software."
        }
      ]
    },
    {
      id: "l51",
      title: "BCF",
      intro: "Different teams use different tools. BCF, the BIM Collaboration Format, is an open standard for exchanging coordination issues between software without sending the whole model, so an issue raised in one tool can be opened and answered in another.",
      questions: [
        {
          type: "fill",
          q: "BCF stands for BIM ____ Format.",
          answer: "collaboration",
          accept: ["collaboration"],
          explain: "BCF is the BIM Collaboration Format, an open standard for passing issues between BIM tools."
        },
        {
          type: "mcq",
          q: "What does a BCF file actually carry?",
          choices: [
            "The complete 3D geometry of every model in the federation",
            "Issue information such as a comment, a camera viewpoint, and a reference to affected elements",
            "The full clash test settings, including selection sets, rules, tolerances and statuses",
            "A plain text note with the issue title but no location or view"
          ],
          answer: 1,
          explain: "BCF is lightweight: it carries the issue text, a viewpoint, and references to elements, not the heavy model geometry itself."
        },
        {
          type: "truefalse",
          q: "BCF is an open format, so it is not tied to a single vendor's software.",
          answer: true,
          explain: "Being an open standard is the whole point of BCF: any compliant tool can read and write it, enabling cross-tool collaboration."
        },
        {
          type: "mcq",
          q: "Why is BCF more efficient than emailing the entire federated model to raise one issue?",
          choices: [
            "Because it compresses the whole federated model into a single small file",
            "Because it carries only the small issue payload instead of gigabytes of geometry",
            "Because it converts the geometry into lightweight 2D drawings",
            "Because it streams the model from the cloud only when opened"
          ],
          answer: 1,
          explain: "BCF transfers just the issue and its viewpoint, which is tiny compared to shipping the full model to communicate one problem."
        },
        {
          type: "truefalse",
          q: "Because BCF contains the full geometry, the receiver does not need their own copy of the model.",
          answer: false,
          explain: "BCF deliberately does not contain geometry. The receiver opens the issue against their own copy of the model."
        },
        {
          type: "match",
          q: "Match each BCF idea to its description.",
          pairs: [
            ["Open standard", "Readable across different vendors' tools"],
            ["Viewpoint", "The saved camera view of the issue"],
            ["Comment", "The written description of the problem"]
          ],
          explain: "BCF bundles an open, cross-tool structure with a viewpoint and a comment so the issue travels with its context."
        },
        {
          type: "mcq",
          q: "A structural engineer uses one BIM tool and the MEP team uses another. How does BCF help them coordinate?",
          choices: [
            "It converts each team's model into the other team's native format",
            "It lets an issue raised in one tool be opened and answered in the other",
            "It merges both models into a single shared authoring file",
            "It requires both teams to license the same coordination software"
          ],
          answer: 1,
          explain: "BCF is exactly for this cross-tool situation: the issue moves between different applications while staying tied to its viewpoint."
        },
        {
          type: "order",
          q: "Order a simple BCF exchange between two tools.",
          items: [
            "Team A creates an issue with a viewpoint and comment",
            "Team A exports the issue as a BCF file",
            "Team B imports the BCF into their own tool",
            "Team B navigates to the viewpoint and replies"
          ],
          explain: "The issue is authored, exported as BCF, imported by the other team, and answered against their own model."
        }
      ]
    },
    {
      id: "l52",
      title: "The Coordination Meeting",
      intro: "A BIM coordination meeting is where the disciplines gather around the federated model to review clashes and agree on fixes. Navisworks is often the shared screen that everyone looks at during the session.",
      questions: [
        {
          type: "mcq",
          q: "What is the main goal of a BIM coordination meeting?",
          choices: [
            "To edit the discipline models live until every clash is gone",
            "To review clashes in the federated model and agree who fixes what",
            "To approve the final design before it goes out for bidding",
            "To merge all discipline models into a single authoring file"
          ],
          answer: 1,
          explain: "Coordination meetings bring the disciplines together to walk the federated model, discuss clashes, and assign ownership of fixes."
        },
        {
          type: "truefalse",
          q: "A federated model that combines every discipline is what makes a coordination meeting productive because everyone sees the same combined picture.",
          answer: true,
          explain: "The federated model is the shared source of truth, so all disciplines discuss the same combined geometry rather than separate files."
        },
        {
          type: "fill",
          q: "The combined multi-discipline model reviewed in the meeting is called the ____ model.",
          answer: "federated",
          accept: ["federated"],
          explain: "A federated model appends the discipline models together into one coordinated view for review."
        },
        {
          type: "mcq",
          q: "During the meeting, what is a good use of saved viewpoints?",
          choices: [
            "To store each clash's geometry so the model can be closed",
            "To jump quickly to each pre-identified clash instead of navigating blindly",
            "To set the clash tolerance for each area of the building",
            "To mark each clash as Resolved as soon as the viewpoint is shown on screen"
          ],
          answer: 1,
          explain: "Pre-saved viewpoints let the facilitator jump straight to each clash, keeping the meeting efficient and focused."
        },
        {
          type: "truefalse",
          q: "Coordination meetings should skip assigning who is responsible for each fix, leaving that to chance.",
          answer: false,
          explain: "Assigning clear ownership for each issue is a core outcome of the meeting; leaving it undefined means fixes fall through the cracks."
        },
        {
          type: "match",
          q: "Match each meeting role or item to its purpose.",
          pairs: [
            ["Facilitator", "Drives the session and navigates the model"],
            ["Saved viewpoints", "Quick jumps to each clash under discussion"],
            ["Action item", "A fix assigned to a specific person"]
          ],
          explain: "A facilitator drives the review, viewpoints speed navigation, and each decision becomes an owned action item."
        },
        {
          type: "mcq",
          q: "Why is a self-contained NWD often used to share the model for a coordination meeting?",
          choices: [
            "Because it links to the live source files, so everyone sees edits as they happen",
            "Because it is a snapshot with geometry baked in that others can open on their own",
            "Because it can be edited in Revit during the meeting and saved back",
            "Because it holds only the clash list, keeping the file very small"
          ],
          answer: 1,
          explain: "An NWD is a self-contained published snapshot with geometry, so attendees can open the coordinated model without the source files."
        },
        {
          type: "order",
          q: "Put a typical coordination meeting flow in order.",
          items: [
            "Open the federated model and load saved viewpoints",
            "Walk through each clash with the disciplines",
            "Agree on a fix and assign an owner",
            "Record action items for follow-up"
          ],
          explain: "You open the combined model, review clashes together, decide fixes with owners, and log the resulting action items."
        }
      ]
    },
    {
      id: "l53",
      title: "Issue Tracking",
      intro: "A clash is not done when it is found; it is done when it is fixed and verified. Tracking follows each issue through its statuses, from a brand new clash all the way to resolved.",
      questions: [
        {
          type: "mcq",
          q: "In Clash Detective, what does the status New usually mean?",
          choices: [
            "The clash has been fixed and verified in the model",
            "The clash was just found and has not been reviewed yet",
            "The clash was reviewed and accepted as allowable",
            "The clash came from a model file added this week"
          ],
          answer: 1,
          explain: "New marks a freshly detected clash that has not yet been triaged by the team."
        },
        {
          type: "order",
          q: "Order these clash statuses along a typical resolution lifecycle.",
          items: [
            "New",
            "Active",
            "Reviewed",
            "Approved",
            "Resolved"
          ],
          explain: "A clash typically moves from New to Active to Reviewed to Approved, and finally to Resolved once the fix is confirmed."
        },
        {
          type: "mcq",
          q: "When a re-run of the clash test no longer finds a previously fixed clash, Navisworks can automatically mark it as what?",
          choices: [
            "New",
            "Resolved",
            "Active",
            "Approved"
          ],
          answer: 1,
          explain: "If a clash is gone on a later run, Navisworks can set it to Resolved automatically, confirming the fix landed."
        },
        {
          type: "truefalse",
          q: "The Approved status can be used to mark a clash that a reviewer has judged acceptable and does not require a physical fix.",
          answer: true,
          explain: "Approved is often used for clashes deemed acceptable, such as an allowed penetration, so they stop demanding attention."
        },
        {
          type: "fill",
          q: "A clash whose fix has been confirmed on a later test run is marked ____.",
          answer: "resolved",
          accept: ["resolved"],
          explain: "Resolved indicates the clash has been dealt with and no longer appears when the test is re-run."
        },
        {
          type: "truefalse",
          q: "Once a clash is marked Resolved, there is no way its status could ever change again.",
          answer: false,
          explain: "If a later model change reintroduces the conflict, the clash can reappear and be reactivated; statuses are not permanently frozen."
        },
        {
          type: "match",
          q: "Match each status to its meaning.",
          pairs: [
            ["New", "Just found, not yet reviewed"],
            ["Active", "Still an open issue to work"],
            ["Resolved", "Fixed and confirmed gone"]
          ],
          explain: "New is untriaged, Active is open work, and Resolved is a confirmed fix, showing progress through the lifecycle."
        },
        {
          type: "mcq",
          q: "Why is assigning statuses valuable when re-running clash tests over several weeks?",
          choices: [
            "It lets the test skip any element that already has a status, so each run finishes faster",
            "It preserves the history so you can tell genuinely new clashes from ones already being handled",
            "It hides resolved and approved clashes from the model geometry",
            "It sends each status change to the authoring model automatically"
          ],
          answer: 1,
          explain: "Carrying statuses across runs lets Navisworks distinguish new issues from ones already in progress, so effort is not duplicated."
        }
      ]
    },
    {
      id: "l54",
      title: "Clear Communication",
      intro: "A coordination issue is only useful if the person receiving it knows exactly what to do. Good issues are specific, actionable, and unambiguous, so the fix happens without a follow-up conversation.",
      questions: [
        {
          type: "mcq",
          q: "Which of these is the most actionable coordination issue?",
          choices: [
            "Level 2 has several duct and beam clashes near the core; the mechanical team should review them",
            "Duct at grid C3, level 2 clashes with the beam; please reroute the duct below the beam",
            "Clash 47 from the latest test run: duct versus beam, hard clash, 150 mm overlap, status New",
            "Please reroute the ductwork so it no longer clashes with the structure anywhere on the job"
          ],
          answer: 1,
          explain: "The strong issue names the element, the location, and a clear requested action, so the receiver can act without guessing."
        },
        {
          type: "truefalse",
          q: "Including a specific location, such as a grid reference or level, makes a coordination issue easier to act on.",
          answer: true,
          explain: "A precise location removes ambiguity so the receiver can navigate straight to the problem and fix the right element."
        },
        {
          type: "truefalse",
          q: "Vague issues like fix this later save time overall because they leave room for interpretation.",
          answer: false,
          explain: "Vague issues cost time: they force follow-up questions and risk the wrong thing being changed or nothing at all."
        },
        {
          type: "match",
          q: "Match each part of a good issue to what it answers.",
          pairs: [
            ["Element and location", "What and where the problem is"],
            ["Requested action", "What the receiver should do"],
            ["Assigned owner", "Who is responsible for the fix"]
          ],
          explain: "Naming the element, the action, and the owner answers what, what to do, and who, leaving no gaps."
        },
        {
          type: "fill",
          q: "An issue that clearly states what the receiver should do next is described as ____, the opposite of vague.",
          answer: "actionable",
          accept: ["actionable"],
          explain: "Actionable issues state a concrete next step, which is what makes them useful to the person receiving them."
        },
        {
          type: "mcq",
          q: "Why should a coordination issue name the responsible discipline or person?",
          choices: [
            "So the person named is blamed for the cost of the rework",
            "So the issue lands with the person who can actually fix it",
            "So the clash is counted against that discipline's score",
            "So Navisworks can move the issue to their model automatically"
          ],
          answer: 1,
          explain: "Naming an owner ensures the issue reaches someone accountable, rather than sitting unclaimed."
        },
        {
          type: "mcq",
          q: "How does an attached viewpoint image improve a coordination issue?",
          choices: [
            "It replaces the written description, so no comment is needed at all",
            "It shows exactly where the problem is, removing doubt about which element is meant",
            "It carries the model geometry with it, so the receiver never needs to open the source files",
            "It updates the clash status automatically once the image is viewed"
          ],
          answer: 1,
          explain: "A viewpoint image pins down the exact location visually, complementing the text so there is no confusion about the element."
        },
        {
          type: "order",
          q: "Order the parts of writing one clear coordination issue.",
          items: [
            "Identify the clashing elements and location",
            "State the requested fix",
            "Assign a responsible owner",
            "Attach a viewpoint image for context"
          ],
          explain: "Describe what and where, say what to do, name who does it, and add a picture so the issue is complete and unambiguous."
        }
      ]
    },
    {
      id: "l55",
      title: "Model Freshness",
      intro: "Coordinating against yesterday's model wastes everyone's time. The value of a federated review depends on every discipline's file being current, so the clashes you discuss are real, not already fixed.",
      questions: [
        {
          type: "mcq",
          q: "Why does coordinating against out-of-date models cause problems?",
          choices: [
            "Old models report fewer clashes, so the results look better than they are",
            "You may chase clashes that were already fixed or miss ones that are new",
            "Navisworks refuses to run clash tests on files older than a week",
            "Outdated models lose their property data when they are appended"
          ],
          answer: 1,
          explain: "Stale models produce misleading clashes: some are already fixed and some new ones are missing, so effort is wasted."
        },
        {
          type: "truefalse",
          q: "An NWF references the source files, so refreshing it can pull in the latest saved versions of each discipline model.",
          answer: true,
          explain: "The NWF holds references rather than baked geometry, so updating the source NWCs keeps the federated model current."
        },
        {
          type: "mcq",
          q: "Which file type contains references to source files rather than baked-in geometry, making it well suited to staying current?",
          choices: [
            "NWD",
            "NWF",
            "A rendered image",
            "An XML report"
          ],
          answer: 1,
          explain: "An NWF references the source files, so when those files update, the federation reflects the latest work."
        },
        {
          type: "fill",
          q: "A lightweight ____ cache is exported from an authoring app and is what the federated model refreshes from.",
          answer: "nwc",
          accept: ["nwc"],
          explain: "The NWC is the lightweight cache produced by authoring tools; refreshing these updates the geometry the NWF references."
        },
        {
          type: "truefalse",
          q: "An NWD published last month always shows the very latest geometry no matter how much the source models have changed since.",
          answer: false,
          explain: "An NWD is a frozen snapshot with baked geometry; it does not update, so an old NWD can be badly out of date."
        },
        {
          type: "mcq",
          q: "Before a coordination meeting, what is the best practice regarding model freshness?",
          choices: [
            "Reuse the federated model from the last meeting so this week's results compare cleanly with last week's",
            "Confirm each discipline has published its latest model so the federation is current",
            "Ask each discipline to send its model during the meeting itself",
            "Refresh only the models that had the most clashes last time"
          ],
          answer: 1,
          explain: "Ensuring every discipline has submitted its current model means the meeting reviews real, up-to-date clashes."
        },
        {
          type: "match",
          q: "Match each file to how it relates to freshness.",
          pairs: [
            ["NWC", "Lightweight cache refreshed from authoring apps"],
            ["NWF", "References sources and reflects their updates"],
            ["NWD", "Frozen snapshot that does not auto-update"]
          ],
          explain: "NWCs refresh from the source, the NWF stays current by reference, and an NWD is a fixed point in time."
        },
        {
          type: "order",
          q: "Order the steps to bring a federated model up to date before review.",
          items: [
            "Each discipline exports a fresh NWC from its authoring app",
            "The NWF references are refreshed to the latest NWCs",
            "Re-run the clash tests on the current geometry",
            "Review the up-to-date clashes"
          ],
          explain: "Fresh caches feed the referenced NWF, clashes are re-run on current geometry, and only then is the review meaningful."
        }
      ]
    },
    {
      id: "l56",
      title: "Desktop to Cloud",
      intro: "Navisworks runs on the desktop, but coordination increasingly lives in the cloud. Autodesk Construction Cloud Model Coordination runs automatic clashes on the cloud, and understanding how the two connect helps you pick the right tool for the job.",
      questions: [
        {
          type: "mcq",
          q: "What does ACC Model Coordination do that complements desktop Navisworks?",
          choices: [
            "It lets teams edit model geometry together in a web browser",
            "It runs automatic clash detection in the cloud as models are uploaded",
            "It publishes NWD files for owners who use Navisworks Freedom",
            "It converts uploaded models into 2D sheets for the field team"
          ],
          answer: 1,
          explain: "ACC Model Coordination automatically clashes uploaded models in the cloud, complementing the deeper manual analysis you do in Navisworks."
        },
        {
          type: "truefalse",
          q: "Publishing an NWD is one way to share a coordinated snapshot that ties into the ACC Model Coordination workflow.",
          answer: true,
          explain: "An NWD is a self-contained coordinated snapshot, and publishing snapshots is part of how desktop work connects to the cloud coordination workflow."
        },
        {
          type: "mcq",
          q: "Which capability is a strength of desktop Navisworks Manage over the automatic cloud clash?",
          choices: [
            "Automatic clash checks that run on their own every time a model is uploaded",
            "Detailed manual control with Clash Detective, custom rules, tolerances, and grouping",
            "Real-time co-editing of model geometry with every authoring team inside one shared session",
            "Viewing models on a phone or tablet in the field without a license"
          ],
          answer: 1,
          explain: "Desktop Navisworks Manage gives fine-grained control over rules, tolerances, and grouping that goes beyond automatic cloud clashing."
        },
        {
          type: "truefalse",
          q: "Cloud Model Coordination and desktop Navisworks are mutually exclusive, so using one means you can never use the other on a project.",
          answer: false,
          explain: "They are complementary. Teams often use cloud automatic clashing for continuous checks and Navisworks for deeper manual analysis."
        },
        {
          type: "fill",
          q: "ACC stands for Autodesk ____ Cloud.",
          answer: "construction",
          accept: ["construction"],
          explain: "ACC is the Autodesk Construction Cloud, which hosts the Model Coordination service among others."
        },
        {
          type: "match",
          q: "Match each environment to a typical strength.",
          pairs: [
            ["ACC Model Coordination", "Automatic cloud clashes as models upload"],
            ["Navisworks Manage", "Detailed manual clash control on the desktop"],
            ["Published NWD", "A shareable coordinated snapshot"]
          ],
          explain: "The cloud handles continuous automatic checks, the desktop offers detailed manual control, and an NWD carries a snapshot between them."
        },
        {
          type: "mcq",
          q: "A team wants continuous, hands-off clash checks every time a model is uploaded, plus occasional deep manual analysis. What is a sensible split?",
          choices: [
            "Use Navisworks Manage for the automatic checks and ACC Model Coordination for the deep analysis",
            "Use ACC Model Coordination for the automatic checks and Navisworks Manage for the deep analysis",
            "Use Navisworks Freedom for the automatic checks and ACC Docs for the deep manual analysis",
            "Use Navisworks Simulate for both, since it includes Clash Detective and cloud automation"
          ],
          answer: 1,
          explain: "Pairing cloud automatic coordination with desktop Navisworks Manage covers both continuous checks and detailed manual review."
        },
        {
          type: "order",
          q: "Order a desktop-to-cloud coordination flow.",
          items: [
            "Disciplines upload models to ACC",
            "ACC Model Coordination runs automatic clashes",
            "The team pulls the coordinated model into Navisworks for deeper analysis",
            "A published NWD snapshot is shared back for the meeting"
          ],
          explain: "Models flow up to the cloud for automatic clashing, come down to Navisworks for detail, and a snapshot is shared back for review."
        }
      ]
    }
  ]
});
