window.ACADEMY.addUnit("acc", {
  id: "unit-6",
  title: "Autodesk Build: Field Management",
  color: "#2bb3a3",
  icon: "🏗️",
  description: "Running the project and the jobsite.",
  lessons: [
    {
      id: "l41",
      title: "What Is Autodesk Build?",
      intro: "Autodesk Build is the ACC product for running field and project management work in the cloud.",
      questions: [
        {
          type: "mcq",
          q: "What is Autodesk Build mainly used for?",
          choices: ["Field and project management", "3D rendering only", "Payroll accounting", "Email marketing"],
          answer: 0,
          explain: "Autodesk Build handles field and project management tasks like RFIs, submittals, issues, and forms."
        },
        {
          type: "truefalse",
          q: "Autodesk Build is one of the products inside Autodesk Construction Cloud (ACC).",
          answer: true,
          explain: "Build sits alongside Docs, BIM Collaborate, and Takeoff inside ACC."
        },
        {
          type: "mcq",
          q: "Which of these is a core Autodesk Build feature?",
          choices: ["RFIs and submittals", "Video editing", "Tax filing", "Weather forecasting"],
          answer: 0,
          explain: "Build centralizes construction workflows such as RFIs, submittals, issues, forms, and photos."
        },
        {
          type: "fill",
          q: "Autodesk Build keeps field data connected to the rest of the project in the ____.",
          answer: "cloud",
          accept: ["cloud", "acc", "cloud (acc)"],
          explain: "Because Build lives in the cloud, office and field teams see the same up-to-date project data."
        },
        {
          type: "match",
          q: "Match the ACC product to what it does.",
          pairs: [
            ["Autodesk Build", "Field and project management"],
            ["Autodesk Docs", "Common data environment for files"],
            ["Autodesk Takeoff", "Quantity takeoff"]
          ],
          explain: "Each ACC product covers a different part of the design-to-construction workflow."
        },
        {
          type: "truefalse",
          q: "Autodesk rebranded the ACC site (acc.autodesk.com) as Autodesk Forma, so ACC and Forma refer to the same platform.",
          answer: true,
          explain: "ACC and Autodesk Forma are interchangeable names for the same cloud platform."
        },
        {
          type: "mcq",
          q: "Who typically uses Autodesk Build?",
          choices: ["Project engineers, superintendents, and field teams", "Only the software vendor", "Only accountants", "Nobody on the jobsite"],
          answer: 0,
          explain: "Build is built for the people running the project and the jobsite day to day."
        }
      ]
    },
    {
      id: "l42",
      title: "RFIs",
      intro: "An RFI is a formal question about the project, and Autodesk Build tracks it from ask to answer.",
      questions: [
        {
          type: "mcq",
          q: "What does RFI stand for?",
          choices: ["Request for Information", "Report for Inspection", "Record of Field Issues", "Review of Finished Items"],
          answer: 0,
          explain: "An RFI is a Request for Information used to clarify something unclear in the documents."
        },
        {
          type: "truefalse",
          q: "An RFI is used to ask the design team for clarification when the drawings are unclear.",
          answer: true,
          explain: "RFIs formally document questions and the answers so decisions are traceable."
        },
        {
          type: "order",
          q: "Put a typical RFI lifecycle in order.",
          items: ["Create the RFI", "Assign it to a reviewer", "Reviewer answers", "Close the RFI"],
          explain: "Tracking each step in the cloud gives a clear audit trail for every question."
        },
        {
          type: "fill",
          q: "Because RFIs are stored in the cloud, everyone works from a single ____ of truth.",
          answer: "source",
          accept: ["source", "single source"],
          explain: "A single source of truth means no one is working from a stale or lost copy."
        },
        {
          type: "mcq",
          q: "Why track RFIs in Autodesk Build instead of email?",
          choices: ["A searchable record of questions and answers", "It hides the answers from the team", "It deletes old questions automatically", "It replaces the design drawings"],
          answer: 0,
          explain: "Build keeps a searchable, time-stamped history so nothing gets lost in someone's inbox."
        },
        {
          type: "match",
          q: "Match the RFI part to its meaning.",
          pairs: [
            ["Question", "What is being asked"],
            ["Assignee", "Person responsible for answering"],
            ["Status", "Where the RFI is in its lifecycle"]
          ],
          explain: "Clear fields keep everyone aligned on what is asked and who owns the answer."
        },
        {
          type: "truefalse",
          q: "Once an RFI is answered and closed, its history is deleted forever.",
          answer: false,
          explain: "Closed RFIs stay in the record, which is important for documentation and audits."
        }
      ]
    },
    {
      id: "l43",
      title: "Submittals",
      intro: "Submittals track the review and approval of products and materials before they are installed.",
      questions: [
        {
          type: "mcq",
          q: "What is a submittal?",
          choices: ["A product or material sent for review and approval", "A daily weather log", "A payroll form", "A parking permit"],
          answer: 0,
          explain: "Submittals let the design team confirm a product meets the specs before it is bought or installed."
        },
        {
          type: "truefalse",
          q: "Submittals help confirm a product matches the specification before it is installed.",
          answer: true,
          explain: "Approving submittals early avoids costly rework from wrong materials."
        },
        {
          type: "order",
          q: "Put a common submittal flow in order.",
          items: ["Contractor submits the item", "Design team reviews", "Item is approved or revised", "Approved item is installed"],
          explain: "Approval happens before installation so the right product ends up in the building."
        },
        {
          type: "match",
          q: "Match the submittal term to its meaning.",
          pairs: [
            ["Spec section", "Where the requirement comes from"],
            ["Reviewer", "Who approves the item"],
            ["Response", "Approved, revise, or rejected"]
          ],
          explain: "These fields make it clear what was submitted and how it was resolved."
        },
        {
          type: "fill",
          q: "A submittal is reviewed for approval ____ the material is installed.",
          answer: "before",
          accept: ["before", "prior to"],
          explain: "Reviewing before installation is the whole point of the submittal process."
        },
        {
          type: "mcq",
          q: "Why track submittals in Autodesk Build?",
          choices: ["To see status and avoid installing unapproved materials", "To hide product data", "To skip the review step", "To order more paperwork"],
          answer: 0,
          explain: "Build shows where each submittal stands so nothing gets installed without sign-off."
        },
        {
          type: "truefalse",
          q: "A submittal marked revise and resubmit is fully approved as-is.",
          answer: false,
          explain: "Revise and resubmit means changes are needed and the item must come back for another review."
        }
      ]
    },
    {
      id: "l44",
      title: "Issues",
      intro: "Issues capture punch list items and field problems so they get tracked to resolution.",
      questions: [
        {
          type: "mcq",
          q: "In Autodesk Build, what is an issue?",
          choices: ["A tracked problem or task to resolve", "A finished drawing set", "A signed contract", "A model rendering"],
          answer: 0,
          explain: "Issues log problems or to-dos found in the field and follow them to a fix."
        },
        {
          type: "truefalse",
          q: "Punch list items can be tracked as issues in Autodesk Build.",
          answer: true,
          explain: "Punch list work is a common use of issues near the end of a project."
        },
        {
          type: "fill",
          q: "An issue is assigned to a person so it is clear who is ____ for the fix.",
          answer: "responsible",
          accept: ["responsible", "accountable"],
          explain: "Assigning an owner keeps issues from being ignored."
        },
        {
          type: "order",
          q: "Put a typical issue workflow in order.",
          items: ["Identify the problem", "Create the issue", "Assign an owner", "Verify and close"],
          explain: "Tracking each step means problems are actually resolved, not forgotten."
        },
        {
          type: "match",
          q: "Match the issue field to its purpose.",
          pairs: [
            ["Location", "Where the problem is"],
            ["Assignee", "Who fixes it"],
            ["Status", "Open, in review, or closed"]
          ],
          explain: "Good issue fields make it fast to find, fix, and verify a problem."
        },
        {
          type: "mcq",
          q: "Why link an issue to a model or sheet location?",
          choices: ["So the team can find exactly where the problem is", "To make the file bigger", "To hide it from the field", "To delete the drawing"],
          answer: 0,
          explain: "Pinning an issue to a location removes guesswork about where to go and what to fix."
        },
        {
          type: "truefalse",
          q: "Model Coordination in ACC can automatically create issues from detected clashes.",
          answer: true,
          explain: "Cloud clash detection can turn a clash into an issue that a team member then resolves."
        }
      ]
    },
    {
      id: "l45",
      title: "Forms & Checklists",
      intro: "Forms and checklists capture quality and safety documentation in a consistent, repeatable way.",
      questions: [
        {
          type: "mcq",
          q: "What are forms and checklists used for in Autodesk Build?",
          choices: ["Quality and safety documentation", "Rendering 3D models", "Editing payroll", "Booking hotels"],
          answer: 0,
          explain: "Forms standardize things like safety inspections and quality checks so nothing is missed."
        },
        {
          type: "truefalse",
          q: "A daily safety inspection can be recorded using a form in Autodesk Build.",
          answer: true,
          explain: "Safety and quality routines are common uses of forms in the field."
        },
        {
          type: "fill",
          q: "Using a standard form template keeps documentation ____ across the whole project.",
          answer: "consistent",
          accept: ["consistent", "uniform", "standard"],
          explain: "Templates make sure every crew records the same information the same way."
        },
        {
          type: "match",
          q: "Match the form concept to its meaning.",
          pairs: [
            ["Template", "The reusable form layout"],
            ["Checklist item", "A single thing to verify"],
            ["Signature", "Proof the check was completed"]
          ],
          explain: "Templates plus checklist items plus sign-off create trustworthy records."
        },
        {
          type: "mcq",
          q: "Why is it useful that forms are stored in the cloud?",
          choices: ["Records are searchable and shared instantly", "They only exist on one laptop", "They print themselves", "They expire each day"],
          answer: 0,
          explain: "Cloud storage means the office sees completed forms as soon as the field submits them."
        },
        {
          type: "order",
          q: "Put using a checklist in order.",
          items: ["Open the form template", "Complete each item", "Add a signature", "Submit the form"],
          explain: "A clear flow makes it easy to document quality and safety on site."
        },
        {
          type: "truefalse",
          q: "Forms in Autodesk Build must always be filled out on paper first.",
          answer: false,
          explain: "Forms are digital and can be completed directly in the app, often on a mobile device."
        }
      ]
    },
    {
      id: "l46",
      title: "Photos & Sheets",
      intro: "Photos document the jobsite and sheets keep the field working from the current drawings.",
      questions: [
        {
          type: "mcq",
          q: "Why capture jobsite photos in Autodesk Build?",
          choices: ["To document real conditions with a time-stamped record", "To replace the drawings", "To slow down the project", "To hide the work"],
          answer: 0,
          explain: "Photos create a dated visual record of progress and conditions on site."
        },
        {
          type: "truefalse",
          q: "Sheets in Autodesk Build help the field always work from the current drawings.",
          answer: true,
          explain: "Managing sheets in the cloud reduces the risk of building from an outdated print."
        },
        {
          type: "fill",
          q: "When a drawing is updated, the field should always use the ____ version of the sheet.",
          answer: "latest",
          accept: ["latest", "current", "newest", "most recent"],
          explain: "Using the latest sheet prevents costly mistakes from old markups."
        },
        {
          type: "match",
          q: "Match the item to what it documents.",
          pairs: [
            ["Photo", "Actual field conditions"],
            ["Sheet", "The current drawing to build from"],
            ["Version", "Which revision of the sheet it is"]
          ],
          explain: "Photos show reality while sheets and versions keep the team on the right drawing."
        },
        {
          type: "mcq",
          q: "What is a risk of NOT managing sheet versions?",
          choices: ["Crews build from outdated drawings", "The building gets built faster", "Photos upload automatically", "Nothing changes"],
          answer: 0,
          explain: "Without version control, someone may follow a superseded drawing and cause rework."
        },
        {
          type: "truefalse",
          q: "Photos captured in the field can be linked to issues to show a problem.",
          answer: true,
          explain: "Attaching a photo to an issue makes the problem and its location crystal clear."
        },
        {
          type: "order",
          q: "Put a simple sheet update flow in order.",
          items: ["New drawing revision is published", "Sheet is uploaded to ACC", "Old version is superseded", "Field views the current sheet"],
          explain: "Publishing then superseding keeps everyone on the newest drawing automatically."
        }
      ]
    },
    {
      id: "l47",
      title: "Meetings",
      intro: "Meetings in Autodesk Build organize agendas, minutes, and follow-up action items.",
      questions: [
        {
          type: "mcq",
          q: "What does the Meetings feature help teams manage?",
          choices: ["Agendas, minutes, and action items", "3D clash detection", "Payroll runs", "Concrete mix design"],
          answer: 0,
          explain: "Meetings keeps the agenda, the recorded minutes, and the resulting action items together."
        },
        {
          type: "truefalse",
          q: "An action item captured in a meeting can be assigned to a specific person.",
          answer: true,
          explain: "Assigning action items makes follow-up clear and accountable."
        },
        {
          type: "match",
          q: "Match the meeting part to its purpose.",
          pairs: [
            ["Agenda", "The plan for what to discuss"],
            ["Minutes", "The record of what was decided"],
            ["Action item", "A follow-up task with an owner"]
          ],
          explain: "Agenda, minutes, and action items turn a meeting into tracked outcomes."
        },
        {
          type: "fill",
          q: "The ____ is the written record of what was discussed and decided in a meeting.",
          answer: "minutes",
          accept: ["minutes", "meeting minutes"],
          explain: "Minutes capture decisions so no one has to rely on memory later."
        },
        {
          type: "order",
          q: "Put a meeting workflow in order.",
          items: ["Set the agenda", "Hold the meeting", "Record the minutes", "Track the action items"],
          explain: "Following through on action items is what makes the meeting worthwhile."
        },
        {
          type: "mcq",
          q: "Why keep meeting records in Autodesk Build?",
          choices: ["Decisions and follow-ups stay linked to the project", "To lose the notes", "To avoid making decisions", "To replace the schedule"],
          answer: 0,
          explain: "Keeping minutes and action items in Build ties decisions to the rest of the project data."
        },
        {
          type: "truefalse",
          q: "Meeting minutes are only useful during the meeting and can be discarded right after.",
          answer: false,
          explain: "Minutes are a durable record used to confirm decisions and hold people accountable."
        }
      ]
    },
    {
      id: "l48",
      title: "In the Field",
      intro: "The ACC mobile app lets crews use Autodesk Build right on the jobsite.",
      questions: [
        {
          type: "mcq",
          q: "What is a big advantage of using ACC on a mobile device on site?",
          choices: ["Capture and view data where the work happens", "It disables all forms", "It only works at the office", "It deletes photos"],
          answer: 0,
          explain: "Mobile access lets crews log issues, photos, and forms without walking back to the trailer."
        },
        {
          type: "truefalse",
          q: "The ACC mobile app can create issues and capture photos directly on the jobsite.",
          answer: true,
          explain: "Field teams can document problems on the spot instead of writing them down for later."
        },
        {
          type: "fill",
          q: "Some ACC mobile features support working ____ so data syncs once you regain signal.",
          answer: "offline",
          accept: ["offline", "off-line", "off line"],
          explain: "Offline support matters because jobsites often have weak or no connectivity."
        },
        {
          type: "match",
          q: "Match the field task to how mobile helps.",
          pairs: [
            ["Punch item", "Log an issue where you stand"],
            ["Inspection", "Complete a form on a phone or tablet"],
            ["Drawing check", "View the current sheet on site"]
          ],
          explain: "Mobile brings issues, forms, and sheets to the exact spot the work is happening."
        },
        {
          type: "mcq",
          q: "Why does syncing matter for the mobile app?",
          choices: ["Field entries appear for the office team", "It erases the project", "It stops the drawings from updating", "It blocks the field crew"],
          answer: 0,
          explain: "Syncing keeps the field and office looking at the same current project data."
        },
        {
          type: "order",
          q: "Put a field-to-office flow in order.",
          items: ["Crew logs an issue on mobile", "App syncs to the cloud", "Office team sees the issue", "Issue is assigned and resolved"],
          explain: "This loop is why cloud field management beats paper notes that never reach the office."
        },
        {
          type: "truefalse",
          q: "Using ACC on mobile forces the field to wait until they return to the office to record anything.",
          answer: false,
          explain: "The whole point of mobile is capturing data in real time, right at the source."
        }
      ]
    }
  ]
});
