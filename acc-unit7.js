window.ACADEMY.addUnit("acc", {
  id: "unit-7",
  title: "Takeoff & Cost",
  color: "#a560e8",
  icon: "💲",
  description: "Quantities and money, connected to the model.",
  lessons: [
    {
      id: "l49",
      title: "Autodesk Takeoff",
      intro: "Autodesk Takeoff is the ACC (Autodesk Forma) tool for measuring quantities from 2D drawings and 3D models in the cloud.",
      questions: [
        {
          type: "mcq",
          q: "What is Autodesk Takeoff mainly used for?",
          choices: ["Quantity takeoff from drawings and models", "Sending RFIs to the design team", "Storing project contracts", "Running a Revit render"],
          answer: 0,
          explain: "Autodesk Takeoff measures quantities (counts, lengths, areas, volumes) from 2D sheets and 3D models to feed an estimate."
        },
        {
          type: "truefalse",
          q: "Autodesk Takeoff runs in the cloud as part of ACC (Autodesk Forma).",
          answer: true,
          explain: "Takeoff is a cloud product in the ACC platform, so quantities live with the rest of the project data."
        },
        {
          type: "mcq",
          q: "Which two kinds of takeoff does Autodesk Takeoff support?",
          choices: ["2D and 3D", "Manual and hand-written only", "Audio and video", "Paper and fax"],
          answer: 0,
          explain: "Autodesk Takeoff handles both 2D takeoff from drawings and 3D model-based takeoff."
        },
        {
          type: "fill",
          q: "A takeoff is the process of measuring ____ from the project documents.",
          answer: "quantities",
          accept: ["quantities", "quantity"],
          explain: "A takeoff pulls quantities like counts, lengths, areas, and volumes out of the drawings and models."
        },
        {
          type: "match",
          q: "Match each ACC product to what it does.",
          pairs: [
            ["Autodesk Takeoff", "Measure quantities from drawings and models"],
            ["Autodesk Docs", "Store files in the common data environment"],
            ["Autodesk Build", "Manage RFIs, submittals, and issues in the field"]
          ],
          explain: "Takeoff handles quantities, Docs is the CDE for files, and Build covers field and project management."
        },
        {
          type: "truefalse",
          q: "Because Takeoff is in ACC, the quantities can connect to Cost Management in the same platform.",
          answer: true,
          explain: "Keeping takeoff in ACC lets quantities flow into budgets and estimating without leaving the platform."
        },
        {
          type: "order",
          q: "Order these steps of a basic takeoff workflow from first to last.",
          items: ["Publish drawings or model to ACC", "Open Autodesk Takeoff", "Measure the quantities", "Review the results for the estimate"],
          explain: "You publish the documents, open Takeoff, measure, then review the totals for the estimate."
        },
        {
          type: "mcq",
          q: "Where do the quantities from Autodesk Takeoff live?",
          choices: ["In the cloud with the rest of the project data", "Only on one estimator's laptop", "In a printed binder only", "Nowhere, they are deleted after use"],
          answer: 0,
          explain: "Cloud takeoff keeps quantities alongside the project so the whole team can see and reuse them."
        }
      ]
    },
    {
      id: "l50",
      title: "2D Takeoff",
      intro: "2D takeoff means measuring counts, lengths, and areas directly on published 2D drawings.",
      questions: [
        {
          type: "mcq",
          q: "What is 2D takeoff?",
          choices: ["Measuring quantities from flat drawings", "Rotating a 3D model", "Writing a contract", "Sending a transmittal"],
          answer: 0,
          explain: "2D takeoff measures quantities directly from 2D sheets like plans and elevations."
        },
        {
          type: "match",
          q: "Match each 2D measurement type to what it captures.",
          pairs: [
            ["Count", "How many of an item"],
            ["Linear", "A length along a line"],
            ["Area", "A flat surface region"]
          ],
          explain: "Count tallies items, linear measures lengths, and area measures flat regions on the sheet."
        },
        {
          type: "truefalse",
          q: "For 2D takeoff to be accurate, the drawing must be calibrated to the correct scale.",
          answer: true,
          explain: "If the sheet scale is wrong, every length and area measured from it will be wrong too."
        },
        {
          type: "fill",
          q: "Setting the drawing so measured distances match real dimensions is called ____.",
          answer: "calibration",
          accept: ["calibration", "calibrating", "calibrate"],
          explain: "Calibration ties the on-screen scale to real-world units so measurements come out correct."
        },
        {
          type: "order",
          q: "Order these steps for a 2D count takeoff.",
          items: ["Open the 2D sheet", "Confirm the scale", "Pick a takeoff type such as count", "Click each item to tally it"],
          explain: "Open the sheet, confirm scale, choose the takeoff type, then click each item to count it."
        },
        {
          type: "mcq",
          q: "Which measurement type would you use to total the number of doors on a floor plan?",
          choices: ["Count", "Volume", "Area", "Linear"],
          answer: 0,
          explain: "Counting discrete items like doors uses a count takeoff, not a length or area."
        },
        {
          type: "truefalse",
          q: "You can color-code different 2D takeoff types so they are easy to tell apart on the sheet.",
          answer: true,
          explain: "Assigning colors to takeoff types keeps a busy sheet readable and helps avoid double-counting."
        },
        {
          type: "mcq",
          q: "Why does 2D takeoff still matter when a 3D model exists?",
          choices: ["Not everything is modeled, so drawings fill the gaps", "3D models cannot be measured at all", "2D is always more accurate than 3D", "Drawings replace the model entirely"],
          answer: 0,
          explain: "Some scope is only shown in 2D, so estimators use 2D takeoff to capture what the model does not include."
        }
      ]
    },
    {
      id: "l51",
      title: "Model-Based Takeoff",
      intro: "Model-based takeoff pulls quantities directly from the 3D model instead of measuring them by hand.",
      questions: [
        {
          type: "mcq",
          q: "What is model-based takeoff?",
          choices: ["Pulling quantities straight from the 3D model", "Printing the drawings", "Reviewing an RFI", "Setting folder permissions"],
          answer: 0,
          explain: "Model-based takeoff reads quantities from the objects in the 3D model automatically."
        },
        {
          type: "truefalse",
          q: "Model-based takeoff can be faster and less error-prone than measuring by hand.",
          answer: true,
          explain: "Pulling quantities from model objects reduces manual clicking and the mistakes that come with it."
        },
        {
          type: "fill",
          q: "In a model, the built-in data attached to an object such as material or size is called its ____.",
          answer: "properties",
          accept: ["properties", "property", "parameters", "metadata"],
          explain: "Object properties like material and dimensions let Takeoff report accurate quantities automatically."
        },
        {
          type: "mcq",
          q: "Why does good model quality matter for model-based takeoff?",
          choices: ["Quantities are only as reliable as the model", "It makes the model render faster", "It changes the project budget by itself", "It has no effect on quantities"],
          answer: 0,
          explain: "If objects are missing or mislabeled, the pulled quantities will be wrong, so garbage in means garbage out."
        },
        {
          type: "match",
          q: "Match each model object to a quantity it can provide.",
          pairs: [
            ["Wall", "Area or length"],
            ["Concrete slab", "Volume"],
            ["Door", "Count"]
          ],
          explain: "Different object types naturally provide different quantities, such as wall area, slab volume, or door count."
        },
        {
          type: "truefalse",
          q: "Model-based takeoff completely removes the need for any 2D takeoff on every project.",
          answer: false,
          explain: "Scope that is not modeled still needs 2D takeoff, so the two methods are usually used together."
        },
        {
          type: "order",
          q: "Order these steps for a model-based takeoff.",
          items: ["Publish the 3D model to ACC", "Open the model in Takeoff", "Select objects to measure", "Read the reported quantities"],
          explain: "Publish the model, open it in Takeoff, select the objects, then read the quantities it reports."
        },
        {
          type: "mcq",
          q: "What happens to takeoff numbers if the model updates with a new version?",
          choices: ["They can be re-pulled to match the new version", "They are locked forever", "They delete the whole project", "They convert to a contract"],
          answer: 0,
          explain: "When the model changes, you can update the takeoff so quantities reflect the latest design."
        }
      ]
    },
    {
      id: "l52",
      title: "Takeoff Packages",
      intro: "Takeoff packages group your quantities so the estimate stays organized and easy to follow.",
      questions: [
        {
          type: "mcq",
          q: "What is a takeoff package?",
          choices: ["A way to group and organize quantities", "A cloud storage plan", "A type of RFI", "A rendering setting"],
          answer: 0,
          explain: "A package organizes related takeoff work so quantities are grouped instead of scattered."
        },
        {
          type: "truefalse",
          q: "Organizing takeoff into packages helps different trades or scopes stay separate.",
          answer: true,
          explain: "Packages let you split quantities by scope or trade so each estimate section is clear."
        },
        {
          type: "fill",
          q: "Grouping quantities by scope or trade keeps the ____ organized and easy to read.",
          answer: "estimate",
          accept: ["estimate", "takeoff"],
          explain: "Well-structured packages make the estimate easier to review, compare, and hand off."
        },
        {
          type: "match",
          q: "Match each package example to its likely scope.",
          pairs: [
            ["Concrete package", "Footings and slabs"],
            ["Drywall package", "Interior partitions"],
            ["Door package", "Door counts and hardware"]
          ],
          explain: "Naming packages by scope, like concrete or drywall, keeps each set of quantities focused and findable."
        },
        {
          type: "order",
          q: "Order these steps for using a takeoff package.",
          items: ["Create a package for a scope", "Add takeoff types to the package", "Measure the quantities", "Review the package totals"],
          explain: "Create the package, add the takeoff types, measure, then review the totals for that scope."
        },
        {
          type: "mcq",
          q: "Why use packages instead of putting all quantities in one big list?",
          choices: ["Grouping makes review and handoff easier", "It makes the model larger", "It hides quantities from the team", "It deletes old drawings"],
          answer: 0,
          explain: "Grouping quantities by scope makes the estimate easier to review, compare, and hand off cleanly."
        },
        {
          type: "truefalse",
          q: "A takeoff package can combine both 2D and model-based quantities for the same scope.",
          answer: true,
          explain: "A package can hold whatever quantities belong to that scope, whether measured in 2D or pulled from the model."
        }
      ]
    },
    {
      id: "l53",
      title: "Cost Management",
      intro: "Cost Management in ACC tracks the project budget, contracts, and actual spending in one place.",
      questions: [
        {
          type: "mcq",
          q: "What does Cost Management in ACC track?",
          choices: ["Budgets, contracts, and cost changes", "Only design geometry", "Only email threads", "Only camera renders"],
          answer: 0,
          explain: "Cost Management brings budgets, contracts, changes, and actual costs together in ACC."
        },
        {
          type: "fill",
          q: "The planned amount of money for the project is called the ____.",
          answer: "budget",
          accept: ["budget"],
          explain: "The budget is the planned cost that Cost Management tracks actuals and changes against."
        },
        {
          type: "match",
          q: "Match each cost term to its meaning.",
          pairs: [
            ["Budget", "The planned cost"],
            ["Contract", "An agreement to pay for scope"],
            ["Change order", "An approved change to the cost"]
          ],
          explain: "Budget is the plan, a contract commits scope and dollars, and a change order revises the cost."
        },
        {
          type: "truefalse",
          q: "Keeping cost data in ACC lets it connect with the rest of the project information.",
          answer: true,
          explain: "Because cost lives in the same platform, it can link to documents, quantities, and field data."
        },
        {
          type: "mcq",
          q: "What is a contract in Cost Management?",
          choices: ["An agreement to pay for a scope of work", "A 3D clash report", "A folder permission", "A drawing scale"],
          answer: 0,
          explain: "A contract records the commitment to pay a party for an agreed scope of work."
        },
        {
          type: "truefalse",
          q: "Cost Management only stores the original budget and never tracks changes.",
          answer: false,
          explain: "It tracks the budget plus contracts, change orders, and actuals so you see the current cost picture."
        },
        {
          type: "order",
          q: "Order these cost steps from earliest to latest.",
          items: ["Set the budget", "Award contracts", "Track actual costs", "Process change orders as needed"],
          explain: "You set a budget, award contracts, track actuals, and handle change orders as the job evolves."
        },
        {
          type: "mcq",
          q: "Why is it useful to see budget, contracts, and actuals together?",
          choices: ["It shows whether the project is on budget", "It renders the model faster", "It replaces the schedule", "It hides costs from the owner"],
          answer: 0,
          explain: "Seeing planned, committed, and actual costs together tells you if the project is tracking to budget."
        }
      ]
    },
    {
      id: "l54",
      title: "Change Orders",
      intro: "A change order is a formal, approved change to the project cost or scope after the budget is set.",
      questions: [
        {
          type: "mcq",
          q: "What is a change order?",
          choices: ["An approved change to cost or scope", "A type of drawing sheet", "A model clash", "A folder in Docs"],
          answer: 0,
          explain: "A change order formally revises the cost or scope after the original budget or contract is set."
        },
        {
          type: "truefalse",
          q: "Change orders should be reviewed and approved before they affect the budget.",
          answer: true,
          explain: "An approval step keeps cost changes controlled instead of silently altering the budget."
        },
        {
          type: "fill",
          q: "A change order can increase or decrease the project ____.",
          answer: "cost",
          accept: ["cost", "budget"],
          explain: "Change orders adjust the cost up or down and update the current budget picture."
        },
        {
          type: "match",
          q: "Match each cause to the change it may create.",
          pairs: [
            ["Owner adds scope", "Cost increase"],
            ["Scope removed", "Cost decrease"],
            ["Unforeseen field condition", "New change order"]
          ],
          explain: "Added scope raises cost, removed scope lowers it, and surprises in the field often trigger change orders."
        },
        {
          type: "order",
          q: "Order the typical change order steps.",
          items: ["Identify the change", "Price the change", "Get approval", "Update the budget"],
          explain: "You identify the change, price it, get it approved, then update the budget to reflect it."
        },
        {
          type: "truefalse",
          q: "Tracking change orders in ACC keeps a clear record of why the cost moved.",
          answer: true,
          explain: "Logging change orders creates an audit trail showing every reason the budget changed."
        },
        {
          type: "mcq",
          q: "Why control change orders carefully?",
          choices: ["Uncontrolled changes can blow the budget", "They speed up rendering", "They delete RFIs", "They are required for every model save"],
          answer: 0,
          explain: "Without control, small changes add up and push the project over budget without anyone noticing."
        }
      ]
    },
    {
      id: "l55",
      title: "Model to Cost",
      intro: "Connecting model quantities to estimating turns measured quantities into dollars.",
      questions: [
        {
          type: "mcq",
          q: "What does connecting model to cost let you do?",
          choices: ["Turn model quantities into cost estimates", "Delete the model", "Send transmittals", "Set drawing scales"],
          answer: 0,
          explain: "Linking quantities to unit prices converts measured amounts into estimated dollars."
        },
        {
          type: "fill",
          q: "Multiplying a quantity by a ____ price gives an estimated cost for that item.",
          answer: "unit",
          accept: ["unit", "unit cost"],
          explain: "Quantity times unit price equals the estimated cost for a line item."
        },
        {
          type: "truefalse",
          q: "Because takeoff and cost both live in ACC, quantities can flow toward the estimate more easily.",
          answer: true,
          explain: "Keeping takeoff and cost in one platform reduces manual re-entry between quantities and estimating."
        },
        {
          type: "order",
          q: "Order these steps from model to cost.",
          items: ["Pull quantities from the model", "Assign unit prices", "Calculate line item costs", "Roll up the total estimate"],
          explain: "Pull quantities, assign unit prices, compute each line, then roll everything up into a total."
        },
        {
          type: "match",
          q: "Match each piece to its role in the estimate.",
          pairs: [
            ["Quantity", "How much of an item"],
            ["Unit price", "Cost per unit"],
            ["Line item cost", "Quantity times unit price"]
          ],
          explain: "Quantity and unit price combine into a line item cost, and the line items build the estimate."
        },
        {
          type: "mcq",
          q: "What is the main benefit of connecting model quantities to cost?",
          choices: ["Faster, more consistent estimates", "Larger file sizes", "Fewer team members can see it", "It removes the need for a budget"],
          answer: 0,
          explain: "Linking quantities to pricing makes estimates faster to produce and easier to keep consistent."
        },
        {
          type: "truefalse",
          q: "When the model changes, re-pulling quantities helps keep the estimate current.",
          answer: true,
          explain: "Refreshing quantities after a model update keeps the estimate aligned with the latest design."
        }
      ]
    },
    {
      id: "l56",
      title: "Reporting Quantities",
      intro: "Exporting and reporting takeoff shares the quantities so estimators and other tools can use them.",
      questions: [
        {
          type: "mcq",
          q: "Why export takeoff quantities?",
          choices: ["To share them with estimators and other tools", "To delete the model", "To render the project", "To set folder permissions"],
          answer: 0,
          explain: "Exporting lets quantities move into estimating spreadsheets or software for pricing."
        },
        {
          type: "fill",
          q: "A common file format for exporting takeoff quantities to a spreadsheet is ____.",
          answer: "csv",
          accept: ["csv", "excel", "xlsx", "spreadsheet"],
          explain: "Exporting to CSV or Excel is a common way to move quantities into an estimating spreadsheet."
        },
        {
          type: "truefalse",
          q: "Reporting quantities creates a record the team can review and reuse.",
          answer: true,
          explain: "A quantity report gives a shareable, reviewable record instead of numbers stuck in one person's head."
        },
        {
          type: "match",
          q: "Match each output to its purpose.",
          pairs: [
            ["Quantity report", "Review totals by scope"],
            ["Spreadsheet export", "Feed the estimate"],
            ["Package summary", "See quantities per package"]
          ],
          explain: "Reports show totals, exports feed the estimate, and package summaries organize quantities by scope."
        },
        {
          type: "order",
          q: "Order these steps to report quantities for the estimate.",
          items: ["Finish the takeoff", "Review the totals", "Export the quantities", "Hand off to the estimator"],
          explain: "Finish measuring, review the totals, export, then hand the quantities to the estimator."
        },
        {
          type: "mcq",
          q: "What is a good reason to review totals before exporting?",
          choices: ["To catch missing or double-counted items", "To make the file smaller", "To hide the quantities", "To render faster"],
          answer: 0,
          explain: "A quick review catches gaps or double counts before the numbers reach the estimate."
        },
        {
          type: "truefalse",
          q: "Because reporting happens in ACC, the exported quantities stay connected to the project record.",
          answer: true,
          explain: "Reporting from ACC keeps a traceable link between the quantities and the rest of the project data."
        }
      ]
    }
  ]
});
