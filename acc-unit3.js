window.ACADEMY.addUnit("acc", {
  id: "unit-3",
  title: "Reviews, Markups & Approvals",
  color: "#ff9600",
  icon: "🖊️",
  description: "Controlled review and sign-off of documents.",
  lessons: [
    {
      id: "l17",
      title: "Review Workflows",
      intro: "A review workflow routes a document through defined steps so the right people check and approve it.",
      questions: [
        {
          type: "mcq",
          q: "What does a review workflow do?",
          choices: [
            "Routes a document through defined steps to the right reviewers",
            "Deletes old file versions automatically",
            "Renders a 3D model faster",
            "Sends the file to everyone at once with no order"
          ],
          answer: 0,
          explain: "A review workflow moves a document through a set sequence so the correct people review and act on it in order."
        },
        {
          type: "truefalse",
          q: "A review workflow uses defined steps rather than an unstructured free-for-all.",
          answer: true,
          explain: "The point of a workflow is structure: each step has an owner and an expected action."
        },
        {
          type: "fill",
          q: "In Autodesk Build, a review moves a document through a defined ____ before it is approved.",
          answer: "workflow",
          accept: ["workflow", "process", "sequence"],
          explain: "The workflow defines the ordered steps and who is responsible at each one."
        },
        {
          type: "order",
          q: "Put a simple document review in order.",
          items: [
            "Someone submits the document for review",
            "Reviewers examine it and add comments",
            "An approver sets a status",
            "The result is recorded and shared"
          ],
          explain: "Submit, review, decide, then record and share the outcome."
        },
        {
          type: "match",
          q: "Match each review role to what it does.",
          pairs: [
            ["Initiator", "Starts the review by submitting the document"],
            ["Reviewer", "Examines the document and adds feedback"],
            ["Approver", "Makes the final call and sets a status"]
          ],
          explain: "Each role has a clear responsibility so reviews are controlled and traceable."
        },
        {
          type: "mcq",
          q: "Why route reviews through defined steps instead of email?",
          choices: [
            "It keeps a controlled, traceable record of who did what",
            "It hides the document from the team",
            "It removes the need for any approver",
            "It prevents any comments from being added"
          ],
          answer: 0,
          explain: "A structured workflow gives visibility and an auditable trail that scattered emails cannot."
        },
        {
          type: "truefalse",
          q: "Every review workflow must skip the approval step.",
          answer: false,
          explain: "Approval is usually the whole point of a review; it is a core step, not one to skip."
        }
      ]
    },
    {
      id: "l18",
      title: "Markups",
      intro: "Markups are comments, clouds, and annotations placed right on a drawing or model so feedback is tied to the exact spot.",
      questions: [
        {
          type: "mcq",
          q: "What is a markup?",
          choices: [
            "A comment or annotation placed on a drawing or model",
            "A permission setting for a folder",
            "A backup copy of a file",
            "A type of user account"
          ],
          answer: 0,
          explain: "Markups are visual notes on the document itself, tied to the exact location of the feedback."
        },
        {
          type: "truefalse",
          q: "Markups let feedback stay attached to the exact spot on a drawing.",
          answer: true,
          explain: "Because a markup sits on the sheet or model, reviewers know precisely what it refers to."
        },
        {
          type: "match",
          q: "Match each markup tool to its use.",
          pairs: [
            ["Cloud", "Circles an area that needs attention"],
            ["Text note", "Adds a written comment"],
            ["Arrow", "Points at a specific element"]
          ],
          explain: "Different markup tools make feedback clear and specific on the document."
        },
        {
          type: "fill",
          q: "A revision ____ is drawn around an area to flag that it needs attention.",
          answer: "cloud",
          accept: ["cloud"],
          explain: "A revision cloud is a common markup that circles the region needing review or change."
        },
        {
          type: "mcq",
          q: "Why put a markup on the sheet instead of describing it in a plain email?",
          choices: [
            "It ties the comment to the exact location, removing guesswork",
            "It automatically approves the document",
            "It hides the comment from other reviewers",
            "It permanently locks the file"
          ],
          answer: 0,
          explain: "On-sheet markups remove ambiguity because everyone can see exactly where the comment applies."
        },
        {
          type: "truefalse",
          q: "Markups can be added to both 2D sheets and 3D models in ACC.",
          answer: true,
          explain: "The platform supports markups on 2D drawings and on 3D model views so feedback works either way."
        },
        {
          type: "order",
          q: "Order the steps to leave a markup on a sheet.",
          items: [
            "Open the sheet or drawing",
            "Pick a markup tool such as a cloud",
            "Place it on the area you mean",
            "Add a note explaining the issue"
          ],
          explain: "Open the document, choose a tool, place it, then explain the point."
        }
      ]
    },
    {
      id: "l19",
      title: "Approvals",
      intro: "An approval is the formal sign-off step where a document is given a clear status such as approved or revise and resubmit.",
      questions: [
        {
          type: "mcq",
          q: "What is an approval in a document review?",
          choices: [
            "A formal sign-off that sets a clear status on the document",
            "A way to email a file to a client",
            "A backup of every version",
            "A tool for measuring quantities"
          ],
          answer: 0,
          explain: "Approval is the decision step that records an official status for the document."
        },
        {
          type: "match",
          q: "Match each approval status to its meaning.",
          pairs: [
            ["Approved", "Accepted for use as is"],
            ["Approved with comments", "Usable but with noted changes"],
            ["Revise and resubmit", "Not accepted yet; fix and send again"],
            ["Rejected", "Not accepted"]
          ],
          explain: "Clear status labels tell the team exactly what to do next with the document."
        },
        {
          type: "truefalse",
          q: "An approval status makes it clear whether a document can be used.",
          answer: true,
          explain: "The status is the signal that tells everyone if the document is good to go."
        },
        {
          type: "fill",
          q: "When a reviewer wants changes before acceptance, they set the status to revise and ____.",
          answer: "resubmit",
          accept: ["resubmit", "resubmitted"],
          explain: "Revise and resubmit means fix the noted issues and send the document back through review."
        },
        {
          type: "mcq",
          q: "Who typically holds the approver role?",
          choices: [
            "A designated person with authority to sign off",
            "Anyone who happens to open the file",
            "The software itself with no human",
            "Only external clients"
          ],
          answer: 0,
          explain: "Approval is assigned to a specific responsible person so the decision is accountable."
        },
        {
          type: "order",
          q: "Order what happens around an approval decision.",
          items: [
            "Reviewers finish their comments",
            "The approver weighs the feedback",
            "A status is applied",
            "The team acts on that status"
          ],
          explain: "Comments come first, the approver decides, a status is set, and the team responds."
        },
        {
          type: "truefalse",
          q: "Once approved, a status has no effect on what the team does next.",
          answer: false,
          explain: "The status directly drives the next actions, such as building from an approved sheet or reworking a rejected one."
        }
      ]
    },
    {
      id: "l20",
      title: "Notifications",
      intro: "Notifications alert reviewers and approvers when something needs their attention so nothing stalls.",
      questions: [
        {
          type: "mcq",
          q: "What is the main purpose of notifications in a review?",
          choices: [
            "To alert people when an item needs their action",
            "To render models in higher quality",
            "To delete completed reviews",
            "To measure quantities on a sheet"
          ],
          answer: 0,
          explain: "Notifications tell the right person that a task is waiting so reviews keep moving."
        },
        {
          type: "truefalse",
          q: "Notifications help prevent reviews from stalling because someone forgot to look.",
          answer: true,
          explain: "A timely alert nudges the responsible person before the review sits idle."
        },
        {
          type: "match",
          q: "Match each notification trigger to what it tells someone.",
          pairs: [
            ["Assigned to review", "It is your turn to review"],
            ["Comment added", "New feedback needs your attention"],
            ["Status changed", "A decision has been made"]
          ],
          explain: "Each trigger maps to a specific action a person may need to take."
        },
        {
          type: "fill",
          q: "An email or in-app ____ tells a reviewer that an item is waiting for them.",
          answer: "notification",
          accept: ["notification", "alert"],
          explain: "Notifications can arrive by email or inside the app to prompt action."
        },
        {
          type: "mcq",
          q: "A reviewer is overwhelmed by messages. What is a reasonable fix?",
          choices: [
            "Tune notification settings so only relevant alerts arrive",
            "Turn off the whole project",
            "Delete every document in review",
            "Ignore all reviews from now on"
          ],
          answer: 0,
          explain: "Adjusting settings keeps useful alerts while cutting the noise, rather than abandoning reviews."
        },
        {
          type: "order",
          q: "Order how a notification prompts action in a review.",
          items: [
            "An item is assigned or its status changes",
            "The system generates a notification",
            "The responsible person receives the alert",
            "They open the item and take the next step"
          ],
          explain: "A trigger fires, the alert is sent, the right person sees it, and they act."
        },
        {
          type: "truefalse",
          q: "Good notifications should reach the person responsible for the next step.",
          answer: true,
          explain: "A notification is only useful if it lands with whoever needs to act."
        }
      ]
    },
    {
      id: "l21",
      title: "Version Compare",
      intro: "Version compare shows exactly what changed between two versions of a sheet or model so nothing slips by unnoticed.",
      questions: [
        {
          type: "mcq",
          q: "What does version compare show you?",
          choices: [
            "The differences between two versions of a document",
            "The total file size only",
            "A list of every project member",
            "The weather on the job site"
          ],
          answer: 0,
          explain: "Version compare highlights what changed from one version to the next."
        },
        {
          type: "truefalse",
          q: "Version compare helps reviewers spot changes without checking the whole sheet by eye.",
          answer: true,
          explain: "By highlighting differences, it saves reviewers from hunting for changes manually."
        },
        {
          type: "fill",
          q: "Autodesk Docs keeps a full version ____ so you can compare an older version with the newest one.",
          answer: "history",
          accept: ["history"],
          explain: "Automatic versioning keeps prior versions available for comparison."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Version", "A saved state of a file at a point in time"],
            ["Compare", "Highlighting what differs between two versions"],
            ["Overlay", "Placing two versions on top of each other to see changes"]
          ],
          explain: "These tools together let you see how a document evolved."
        },
        {
          type: "mcq",
          q: "Why is version compare useful during a review?",
          choices: [
            "It focuses attention on what actually changed",
            "It approves the document automatically",
            "It deletes the previous version",
            "It hides all the markups"
          ],
          answer: 0,
          explain: "Reviewers can confirm whether requested changes were made without re-reading everything."
        },
        {
          type: "order",
          q: "Order the steps to compare two versions.",
          items: [
            "Open the current version of the sheet",
            "Choose the earlier version to compare against",
            "Let the tool highlight the differences",
            "Review the changes it found"
          ],
          explain: "Pick the two versions, then let the tool surface and review the differences."
        },
        {
          type: "truefalse",
          q: "Because Docs versions files automatically, you usually do not need to rename files v1, v2, v3.",
          answer: true,
          explain: "Automatic versioning removes the messy manual naming that leads to using the wrong file."
        }
      ]
    },
    {
      id: "l22",
      title: "Issues on Documents",
      intro: "An issue flags a problem tied directly to a spot on a document so it can be tracked to resolution.",
      questions: [
        {
          type: "mcq",
          q: "What is a document issue?",
          choices: [
            "A tracked problem pinned to a location on a document",
            "A new version of the whole project",
            "A permission level for a folder",
            "A dashboard chart"
          ],
          answer: 0,
          explain: "An issue records a problem, its location, an owner, and a status so it can be resolved."
        },
        {
          type: "truefalse",
          q: "An issue can be placed directly on the spot of a drawing where the problem is.",
          answer: true,
          explain: "Pinning the issue to the exact location makes it clear what needs fixing."
        },
        {
          type: "match",
          q: "Match each issue field to its purpose.",
          pairs: [
            ["Assignee", "The person responsible for resolving it"],
            ["Status", "Whether it is open, in review, or closed"],
            ["Location", "Where on the document the problem is"]
          ],
          explain: "These fields turn a vague complaint into a trackable, assignable task."
        },
        {
          type: "fill",
          q: "An issue is not finished until its status is set to ____.",
          answer: "closed",
          accept: ["closed", "resolved"],
          explain: "Closing the issue records that the problem was addressed."
        },
        {
          type: "order",
          q: "Order the life of a document issue.",
          items: [
            "Someone creates the issue on the document",
            "It is assigned to a responsible person",
            "That person resolves the problem",
            "The issue is closed"
          ],
          explain: "Create, assign, resolve, then close to complete the loop."
        },
        {
          type: "mcq",
          q: "How does an issue differ from a plain markup?",
          choices: [
            "An issue is tracked with an owner and status until it is closed",
            "An issue can never be seen by others",
            "A markup automatically deletes itself",
            "There is no difference at all"
          ],
          answer: 0,
          explain: "A markup is a note; an issue is a managed task with accountability and a lifecycle."
        },
        {
          type: "truefalse",
          q: "Cloud Model Coordination can create issues automatically when it detects clashes.",
          answer: true,
          explain: "Model Coordination turns detected clashes into issues so the team can track and resolve them."
        }
      ]
    },
    {
      id: "l23",
      title: "Audit Trail",
      intro: "An audit trail is the automatic record of who did what and when, giving accountability across the project.",
      questions: [
        {
          type: "mcq",
          q: "What is an audit trail?",
          choices: [
            "A record of who did what and when",
            "A tool that renders 3D views",
            "A pricing calculator",
            "A folder for finished drawings"
          ],
          answer: 0,
          explain: "The audit trail logs actions and their authors and times, so history is traceable."
        },
        {
          type: "truefalse",
          q: "An audit trail supports accountability by showing who took each action.",
          answer: true,
          explain: "Because actions are attributed and timestamped, responsibility is clear."
        },
        {
          type: "fill",
          q: "Each entry in an audit trail records the user, the action, and a ____ so you know when it happened.",
          answer: "timestamp",
          accept: ["timestamp", "time", "date"],
          explain: "The timestamp anchors each action to a specific moment in time."
        },
        {
          type: "match",
          q: "Match each audit trail entry part to what it captures.",
          pairs: [
            ["User", "Who performed the action"],
            ["Action", "What was done"],
            ["Timestamp", "When it occurred"]
          ],
          explain: "Together these answer who, what, and when for every logged event."
        },
        {
          type: "mcq",
          q: "Why does an audit trail matter for a controlled review process?",
          choices: [
            "It proves the process was followed and who made each decision",
            "It speeds up model rendering",
            "It replaces the need for approvals",
            "It hides changes from managers"
          ],
          answer: 0,
          explain: "A clear record shows the review was done properly and stands up to later scrutiny."
        },
        {
          type: "truefalse",
          q: "You can freely edit the audit trail to change what it says happened.",
          answer: false,
          explain: "An audit trail is meant to be a reliable, tamper-resistant record, not something users rewrite."
        },
        {
          type: "order",
          q: "Order how an action reaches the audit trail.",
          items: [
            "A user performs an action such as approving a sheet",
            "The system captures who did it and when",
            "It writes an entry to the log",
            "Anyone with access can review the history later"
          ],
          explain: "The action is captured, logged, and available for later review."
        }
      ]
    },
    {
      id: "l24",
      title: "Controlled Distribution",
      intro: "Controlled distribution makes sure people are always working from the right, current version of a document.",
      questions: [
        {
          type: "mcq",
          q: "What is the goal of controlled distribution?",
          choices: [
            "To ensure everyone uses the correct current version",
            "To give everyone a random old copy",
            "To delete the document after one use",
            "To keep the document secret from the whole team"
          ],
          answer: 0,
          explain: "Controlled distribution keeps the team aligned on one correct, current source of truth."
        },
        {
          type: "truefalse",
          q: "Building from an outdated drawing is exactly the risk controlled distribution guards against.",
          answer: true,
          explain: "Using superseded documents causes costly rework, which controlled distribution helps prevent."
        },
        {
          type: "fill",
          q: "A common data environment acts as a single source of ____ so the team relies on one current set of documents.",
          answer: "truth",
          accept: ["truth"],
          explain: "The CDE gives one controlled place everyone trusts for the current information."
        },
        {
          type: "match",
          q: "Match each concept to its role in controlled distribution.",
          pairs: [
            ["Autodesk Docs", "The CDE that stores the controlled current files"],
            ["Transmittal", "A recorded package of documents sent to a party"],
            ["Superseded", "An older version replaced by a newer one"]
          ],
          explain: "These pieces work together so people receive and use the right documents."
        },
        {
          type: "mcq",
          q: "How does the CDE align with the ISO 19650 standard?",
          choices: [
            "It provides a controlled single source of truth for project information",
            "It requires all files to be printed on paper",
            "It bans version history entirely",
            "It forces every user to have admin rights"
          ],
          answer: 0,
          explain: "ISO 19650 centers on a controlled single source of truth, which the CDE is built to provide."
        },
        {
          type: "order",
          q: "Order a controlled distribution of a document.",
          items: [
            "The current approved version sits in the CDE",
            "A transmittal package is prepared",
            "It is sent to the intended recipients",
            "The send is recorded for the audit trail"
          ],
          explain: "Approved file, packaged transmittal, delivery, and a record of what was sent."
        },
        {
          type: "truefalse",
          q: "A transmittal helps prove which documents were issued to whom and when.",
          answer: true,
          explain: "Transmittals create a record of the exact package sent, supporting accountability."
        },
        {
          type: "match",
          q: "Match each ACC or Forma module to its part in controlled document handling.",
          pairs: [
            ["Autodesk Docs", "Stores and versions the controlled files"],
            ["Autodesk Build", "Manages field work, reviews, and issues"]
          ],
          explain: "Docs is the CDE for files, while Build handles project and field management on top of it."
        }
      ]
    }
  ]
});
