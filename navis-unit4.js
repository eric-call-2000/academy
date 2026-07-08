window.ACADEMY.addUnit("navisworks", {
  id: "unit-4",
  title: "Clash Detective Basics",
  color: "#ce82ff",
  icon: "⚠️",
  description: "Finding interferences between disciplines.",
  lessons: [
    {
      id: "l25",
      title: "What Is a Clash?",
      intro: "A clash is an interference where two model elements try to occupy the same space.",
      questions: [
        {
          type: "mcq",
          q: "In coordination, what is a clash?",
          choices: ["Two elements overlapping in the same space", "A file that will not open", "A missing viewpoint", "A slow computer"],
          answer: 0,
          explain: "A clash is a physical interference where two model elements occupy the same space."
        },
        {
          type: "truefalse",
          q: "A common clash example is a duct passing through a structural beam.",
          answer: true,
          explain: "A duct running through a beam is a classic hard clash between MEP and structure."
        },
        {
          type: "fill",
          q: "Navisworks tool that automatically finds clashes is called Clash ____.",
          answer: "Detective",
          accept: ["detective"],
          explain: "Clash Detective is the Navisworks feature that finds interferences between models."
        },
        {
          type: "mcq",
          q: "Why do we find clashes before construction?",
          choices: ["To fix problems on screen instead of in the field", "To make the model bigger", "To slow down the schedule", "To delete the source files"],
          answer: 0,
          explain: "Catching interferences in the model is far cheaper than fixing them on site."
        },
        {
          type: "truefalse",
          q: "Clashes usually appear where different disciplines share the same space.",
          answer: true,
          explain: "Most clashes happen at the overlap of trades like structure, mechanical, and plumbing."
        },
        {
          type: "match",
          q: "Match each idea to its meaning.",
          pairs: [["Clash", "Two elements in the same space"], ["Interference", "Another word for a clash"], ["Coordination", "Resolving clashes between trades"]],
          explain: "A clash is an interference, and coordination is the work of resolving them."
        },
        {
          type: "mcq",
          q: "Fixing a clash on site instead of in the model usually means it is:",
          choices: ["More expensive and disruptive", "Free and instant", "Impossible to fix", "Better for the schedule"],
          answer: 0,
          explain: "Field rework costs far more time and money than resolving a clash in the model."
        }
      ]
    },
    {
      id: "l26",
      title: "Clash Types",
      intro: "Clash Detective supports hard, hard conservative, clearance, and duplicate clash types.",
      questions: [
        {
          type: "mcq",
          q: "Which clash type flags elements that physically overlap?",
          choices: ["Hard", "Clearance", "Duplicate", "Soft only"],
          answer: 0,
          explain: "A Hard clash is a true geometric overlap where elements intersect."
        },
        {
          type: "match",
          q: "Match each clash type to what it checks.",
          pairs: [["Hard", "Geometry that physically overlaps"], ["Clearance", "Gaps smaller than a required distance"], ["Duplicate", "Identical objects in the same spot"]],
          explain: "Hard checks overlap, Clearance checks required space, and Duplicate finds repeats."
        },
        {
          type: "mcq",
          q: "A clearance clash checks that elements keep a minimum:",
          choices: ["Distance apart", "File size", "Color", "Layer name"],
          answer: 0,
          explain: "Clearance clashes flag elements that are closer than a set separation distance."
        },
        {
          type: "truefalse",
          q: "A duplicate clash test helps find the same object modeled twice.",
          answer: true,
          explain: "Duplicate tests catch identical geometry stacked in the same location."
        },
        {
          type: "mcq",
          q: "Which clash type is useful for keeping space around a valve for maintenance access?",
          choices: ["Clearance", "Duplicate", "Hard", "None of these"],
          answer: 0,
          explain: "Clearance enforces the free space needed to reach and service equipment."
        },
        {
          type: "truefalse",
          q: "Hard (Conservative) is a stricter variation of the hard clash test.",
          answer: true,
          explain: "Hard (Conservative) uses a more cautious overlap check to catch more potential intersections."
        },
        {
          type: "fill",
          q: "A ____ clash flags two identical objects modeled in the exact same place.",
          answer: "duplicate",
          accept: ["duplicate"],
          explain: "Duplicate clashes reveal geometry that was accidentally modeled twice."
        },
        {
          type: "order",
          q: "Order these clash types from strictest overlap check to a spacing check.",
          items: ["Hard (Conservative)", "Hard", "Clearance"],
          explain: "Hard (Conservative) is the strictest overlap, Hard is standard overlap, and Clearance checks spacing."
        }
      ]
    },
    {
      id: "l27",
      title: "The Clash Matrix",
      intro: "A clash test compares one selection against another using the A versus B matrix.",
      questions: [
        {
          type: "mcq",
          q: "A clash test compares which two things?",
          choices: ["Selection A against Selection B", "One file against itself only", "A viewpoint against a schedule", "A markup against a color"],
          answer: 0,
          explain: "Each test pits Selection A against Selection B to look for interferences between them."
        },
        {
          type: "truefalse",
          q: "You can set structure as Selection A and MEP as Selection B in a test.",
          answer: true,
          explain: "Choosing one discipline as A and another as B is the standard way to test between trades."
        },
        {
          type: "fill",
          q: "In a clash test you compare Selection A against Selection ____.",
          answer: "B",
          accept: ["b"],
          explain: "Every clash test is an A versus B comparison of two sets of elements."
        },
        {
          type: "match",
          q: "Match each side of a test to a common choice.",
          pairs: [["Selection A", "Structural steel"], ["Selection B", "Mechanical ductwork"]],
          explain: "Putting steel on one side and ducts on the other tests structure against MEP."
        },
        {
          type: "mcq",
          q: "Using search sets for A and B is helpful because they:",
          choices: ["Update automatically as the model changes", "Delete the source files", "Turn off Clash Detective", "Lock the camera"],
          answer: 0,
          explain: "Search sets are rule based, so an A versus B test built on them stays current."
        },
        {
          type: "truefalse",
          q: "Selecting the same set as both A and B checks a discipline against itself.",
          answer: true,
          explain: "A self test can find internal clashes within a single discipline."
        },
        {
          type: "mcq",
          q: "The A versus B setup is often called the clash:",
          choices: ["Matrix", "Timeline", "Palette", "Cache"],
          answer: 0,
          explain: "The pairing of Selection A against Selection B is known as the clash matrix."
        }
      ]
    },
    {
      id: "l28",
      title: "Running a Test",
      intro: "Setting up a test means choosing selections, a clash type, a tolerance, and then running it.",
      questions: [
        {
          type: "order",
          q: "Order the steps to run a basic clash test.",
          items: ["Choose Selection A and Selection B", "Pick a clash type", "Set the tolerance", "Run the test", "Review the results"],
          explain: "You define the selections, type, and tolerance, run the test, then review results."
        },
        {
          type: "mcq",
          q: "Before running, which setting controls how much overlap counts as a clash?",
          choices: ["Tolerance", "Icon", "Color theme", "File name"],
          answer: 0,
          explain: "Tolerance sets the threshold of overlap or gap that triggers a clash result."
        },
        {
          type: "truefalse",
          q: "You choose a clash type as part of setting up a test.",
          answer: true,
          explain: "Each test uses a clash type such as Hard or Clearance to define what it checks."
        },
        {
          type: "fill",
          q: "After configuring a test you click Run to ____ it and generate results.",
          answer: "run",
          accept: ["run", "execute"],
          explain: "Running the test compares the selections and produces a list of clashes."
        },
        {
          type: "mcq",
          q: "Rule based search sets are a good choice for test selections because they:",
          choices: ["Stay accurate when the model updates", "Cannot be reused", "Only work once", "Delete viewpoints"],
          answer: 0,
          explain: "Search sets refresh with the model, so re running the test stays reliable."
        },
        {
          type: "truefalse",
          q: "A single Clash Detective test can only ever produce one clash.",
          answer: false,
          explain: "One test typically finds many clashes, listed together in the results."
        },
        {
          type: "match",
          q: "Match each setup item to its purpose.",
          pairs: [["Selections", "What to compare"], ["Clash type", "How to check"], ["Tolerance", "How much overlap counts"]],
          explain: "Selections, clash type, and tolerance together define exactly what the test looks for."
        }
      ]
    },
    {
      id: "l29",
      title: "Reading Results",
      intro: "The results list shows each clash and highlights the interfering elements in the model.",
      questions: [
        {
          type: "mcq",
          q: "When you click a clash in the results list, Navisworks usually:",
          choices: ["Zooms to and highlights the two elements", "Closes the file", "Deletes the elements", "Exports an NWD"],
          answer: 0,
          explain: "Selecting a result focuses the view on the clashing elements so you can inspect them."
        },
        {
          type: "match",
          q: "Match each clash status to its meaning.",
          pairs: [["New", "Found on the latest run"], ["Active", "Still an open issue"], ["Reviewed", "Looked at, not yet fixed"], ["Resolved", "No longer clashing"]],
          explain: "Statuses track a clash from newly found through to resolved."
        },
        {
          type: "truefalse",
          q: "A clash marked Resolved no longer appears as an interference on the next run.",
          answer: true,
          explain: "Resolved means the geometry no longer overlaps, so the clash clears."
        },
        {
          type: "fill",
          q: "The two colliding items are usually shown as element ____ in the results.",
          answer: "pair",
          accept: ["pair", "pairs"],
          explain: "Each clash result lists the pair of elements involved, one from A and one from B."
        },
        {
          type: "mcq",
          q: "Grouping and assigning clashes mainly helps you:",
          choices: ["Organize and route issues to the right person", "Increase file size", "Hide the model", "Change the schedule"],
          answer: 0,
          explain: "Grouping related clashes and assigning them keeps coordination organized."
        },
        {
          type: "truefalse",
          q: "SwitchBack can jump from a Navisworks clash element back to the element in Revit.",
          answer: true,
          explain: "SwitchBack links a selected Navisworks item to its source in Revit for editing."
        },
        {
          type: "order",
          q: "Order these statuses as a clash moves from discovery to fixed.",
          items: ["New", "Active", "Reviewed", "Resolved"],
          explain: "A clash typically flows from New to Active to Reviewed and finally Resolved."
        }
      ]
    },
    {
      id: "l30",
      title: "Tolerance",
      intro: "Tolerance sets how much overlap or gap is required before something counts as a clash.",
      questions: [
        {
          type: "mcq",
          q: "What does the tolerance value control?",
          choices: ["How much overlap counts as a clash", "The model color", "The camera angle", "The file format"],
          answer: 0,
          explain: "Tolerance is the threshold of overlap or separation that triggers a reported clash."
        },
        {
          type: "truefalse",
          q: "A very small tolerance can report many tiny, low importance clashes.",
          answer: true,
          explain: "A tight tolerance flags even minor overlaps, producing lots of noise to sort through."
        },
        {
          type: "fill",
          q: "The setting that defines the minimum overlap before a clash is reported is the ____.",
          answer: "tolerance",
          accept: ["tolerance"],
          explain: "Tolerance is the depth of overlap or gap needed for a result to appear."
        },
        {
          type: "mcq",
          q: "If a test is returning too many trivial overlaps, a reasonable step is to:",
          choices: ["Increase the tolerance", "Delete the model", "Turn off Navisworks", "Rename the file"],
          answer: 0,
          explain: "Raising the tolerance filters out tiny overlaps and focuses on real issues."
        },
        {
          type: "truefalse",
          q: "Tolerance is measured as a distance, such as in millimeters or inches.",
          answer: true,
          explain: "Tolerance is a length value describing how deep an overlap must be to count."
        },
        {
          type: "match",
          q: "Match each tolerance choice to its likely effect.",
          pairs: [["Small tolerance", "More clashes, including minor ones"], ["Large tolerance", "Fewer clashes, only bigger overlaps"]],
          explain: "A tighter tolerance reports more; a looser one reports only significant overlaps."
        },
        {
          type: "mcq",
          q: "For a clearance clash, tolerance often represents the:",
          choices: ["Required gap between elements", "Font size", "Number of viewpoints", "File version"],
          answer: 0,
          explain: "In a clearance test, tolerance is the minimum spacing that must be maintained."
        }
      ]
    },
    {
      id: "l31",
      title: "Only in Manage",
      intro: "Clash Detective is a feature of Navisworks Manage, not Simulate or Freedom.",
      questions: [
        {
          type: "mcq",
          q: "Which Navisworks edition includes Clash Detective?",
          choices: ["Manage", "Simulate", "Freedom", "Viewer only"],
          answer: 0,
          explain: "Clash Detective is only available in Navisworks Manage."
        },
        {
          type: "truefalse",
          q: "Navisworks Simulate can run Clash Detective tests.",
          answer: false,
          explain: "Simulate offers review and TimeLiner but does not include Clash Detective."
        },
        {
          type: "truefalse",
          q: "Navisworks Freedom is a free viewer with no clash tools.",
          answer: true,
          explain: "Freedom only views published models and cannot run clash tests."
        },
        {
          type: "match",
          q: "Match each edition to its clash capability.",
          pairs: [["Manage", "Has Clash Detective"], ["Simulate", "No Clash Detective"], ["Freedom", "Free viewer, no clashing"]],
          explain: "Only Manage includes Clash Detective among the three editions."
        },
        {
          type: "fill",
          q: "The Navisworks edition needed for clash detection is ____.",
          answer: "Manage",
          accept: ["manage"],
          explain: "Manage is the full edition that includes Clash Detective."
        },
        {
          type: "mcq",
          q: "A teammate with Simulate wants to run clashes. They need to:",
          choices: ["Upgrade to Manage", "Reinstall Freedom", "Delete the model", "Change the color theme"],
          answer: 0,
          explain: "Only Manage can run Clash Detective, so an upgrade is required."
        },
        {
          type: "truefalse",
          q: "Both Manage and Simulate can review a federated model, even though only Manage runs clashes.",
          answer: true,
          explain: "Review and navigation exist in both, but Clash Detective is exclusive to Manage."
        }
      ]
    },
    {
      id: "l32",
      title: "Discipline vs Discipline",
      intro: "Common tests pit one discipline against another, such as structure versus MEP.",
      questions: [
        {
          type: "mcq",
          q: "A classic coordination test compares:",
          choices: ["Structure against MEP", "One color against another", "A viewpoint against a markup", "A cache against a snapshot"],
          answer: 0,
          explain: "Structure versus MEP is one of the most common discipline to discipline tests."
        },
        {
          type: "match",
          q: "Match each discipline pairing to what it commonly catches.",
          pairs: [["Structure vs MEP", "Ducts or pipes hitting beams"], ["Plumbing vs Electrical", "Pipes crossing conduit runs"], ["Architecture vs MEP", "Equipment hitting walls or ceilings"]],
          explain: "Each pairing targets the interferences most likely between those trades."
        },
        {
          type: "truefalse",
          q: "Running structure against MEP helps find ducts passing through beams.",
          answer: true,
          explain: "This pairing surfaces mechanical elements that collide with structural framing."
        },
        {
          type: "fill",
          q: "Testing structure against mechanical, electrical, and plumbing is a ____ versus discipline test.",
          answer: "discipline",
          accept: ["discipline"],
          explain: "Comparing trades this way is a discipline versus discipline test."
        },
        {
          type: "mcq",
          q: "Why build these tests from search sets by discipline?",
          choices: ["They stay accurate as models are updated", "They hide the model", "They lock the schedule", "They shrink the file"],
          answer: 0,
          explain: "Discipline based search sets keep tests current every time you re run them."
        },
        {
          type: "order",
          q: "Order these steps to coordinate structure versus MEP.",
          items: ["Build a structure search set", "Build an MEP search set", "Run structure against MEP", "Group and assign the clashes"],
          explain: "Create the two discipline sets, run the test, then organize the results."
        },
        {
          type: "truefalse",
          q: "A single project usually needs several discipline versus discipline tests, not just one.",
          answer: true,
          explain: "Real coordination sets up many trade pairings to cover the whole model."
        }
      ]
    }
  ]
});
