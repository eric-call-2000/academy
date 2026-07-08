window.ACADEMY.addUnit("navisworks", {
  id: "unit-2",
  title: "Navigating & Reviewing Models",
  color: "#1cb0f6",
  icon: "🧭",
  description: "Moving through and marking up a coordinated model.",
  lessons: [
    {
      id: "l9",
      title: "Navigation Modes",
      intro: "Learn the main ways to move around a federated model so you can get to any part of the building quickly.",
      questions: [
        {
          type: "mcq",
          q: "What does Walk mode do in Navisworks?",
          choices: ["Moves you through the model at a set eye height like walking", "Deletes selected objects", "Runs a clash test", "Publishes an NWD"],
          answer: 0,
          explain: "Walk moves you forward, back, and side to side as if you were on foot inside the model."
        },
        {
          type: "mcq",
          q: "Which mode spins the model around a center point so you can inspect an object from all sides?",
          choices: ["Orbit", "Walk", "Fly", "Publish"],
          answer: 0,
          explain: "Orbit rotates the view around a pivot, which is great for studying a single part."
        },
        {
          type: "truefalse",
          q: "Fly mode lets you move freely in any direction, including up and down, like a drone.",
          answer: true,
          explain: "Fly is not locked to an eye height, so you can rise above the model or dive under it."
        },
        {
          type: "truefalse",
          q: "Examine mode is meant for moving long distances across a whole site plan.",
          answer: false,
          explain: "Examine keeps you focused on rotating around a chosen object, not traveling far."
        },
        {
          type: "match",
          q: "Match each navigation mode to what it is best for.",
          pairs: [
            ["Walk", "Touring at eye level inside a space"],
            ["Orbit", "Spinning around one object to inspect it"],
            ["Fly", "Moving freely up, down, and around"]
          ],
          explain: "Each mode suits a different review task, so switch modes to match what you need to see."
        },
        {
          type: "fill",
          q: "The ____ mode moves you through the model at a fixed eye height, as if you were on foot.",
          answer: "walk",
          accept: ["walk", "walk mode"],
          explain: "Walk is the go-to mode for a natural first-person tour of a coordinated model."
        },
        {
          type: "mcq",
          q: "Why do coordinators switch between navigation modes during a review?",
          choices: ["Different modes make it easier to reach and study different areas", "It changes the file format", "It runs Quantification automatically", "It hides all clashes"],
          answer: 0,
          explain: "Picking the right mode gets your camera where you need it faster and with less effort."
        }
      ]
    },
    {
      id: "l10",
      title: "Viewpoints",
      intro: "See how saved viewpoints let you capture and return to exact camera positions during coordination.",
      questions: [
        {
          type: "mcq",
          q: "What does a saved viewpoint capture?",
          choices: ["The camera position and view state you set up", "The whole schedule", "The clash tolerance value", "Every material cost"],
          answer: 0,
          explain: "A viewpoint stores where the camera is and how the scene looks so you can come right back to it."
        },
        {
          type: "truefalse",
          q: "Viewpoints can save redline markups along with the camera angle.",
          answer: true,
          explain: "A viewpoint can carry redlines and comments, which is why they are so useful in meetings."
        },
        {
          type: "truefalse",
          q: "A saved viewpoint changes the geometry of the model.",
          answer: false,
          explain: "Viewpoints only save how you look at the model, not the model itself."
        },
        {
          type: "fill",
          q: "A saved ____ lets you return to an exact camera position with one click.",
          answer: "viewpoint",
          accept: ["viewpoint", "view point"],
          explain: "Saving viewpoints means you never have to hunt for the same angle twice."
        },
        {
          type: "match",
          q: "Match each item to whether a viewpoint typically saves it.",
          pairs: [
            ["Camera position", "Saved"],
            ["Redline markups", "Saved"],
            ["Source Revit families", "Not saved"]
          ],
          explain: "Viewpoints save how you see the model plus your markups, not the authoring data itself."
        },
        {
          type: "order",
          q: "Put the steps for using a viewpoint in order.",
          items: ["Navigate to the view you want", "Save it as a viewpoint", "Name the viewpoint", "Recall it later during the meeting"],
          explain: "Set up the shot, save and name it, then bring it back whenever you need it."
        },
        {
          type: "mcq",
          q: "Why are viewpoints valuable for coordination?",
          choices: ["They let the team jump straight to a known problem area", "They compress the NWD file", "They replace Clash Detective", "They edit the schedule"],
          answer: 0,
          explain: "Instead of describing where an issue is, you just recall the viewpoint everyone can see."
        }
      ]
    },
    {
      id: "l11",
      title: "Sectioning",
      intro: "Use cutting planes and section boxes to slice the model open and see what is hidden inside.",
      questions: [
        {
          type: "mcq",
          q: "What is the point of sectioning a model?",
          choices: ["To cut away parts so you can see inside", "To publish an NWF", "To assign a clash", "To change navigation mode"],
          answer: 0,
          explain: "Sectioning removes part of the view so hidden interior elements become visible."
        },
        {
          type: "truefalse",
          q: "A section plane cuts the model along a single flat plane.",
          answer: true,
          explain: "A section plane is one flat cut, letting you peel away everything on one side."
        },
        {
          type: "truefalse",
          q: "A section box can only cut in one direction at a time.",
          answer: false,
          explain: "A section box uses multiple planes at once to isolate a 3D region of the model."
        },
        {
          type: "match",
          q: "Match each sectioning tool to what it does.",
          pairs: [
            ["Section plane", "One flat cut through the model"],
            ["Section box", "A box that isolates a 3D region"]
          ],
          explain: "Use a plane for a simple slice and a box to focus on a contained volume."
        },
        {
          type: "fill",
          q: "A section ____ uses several planes at once to isolate a 3D region of the model.",
          answer: "box",
          accept: ["box"],
          explain: "The section box is like a glass cube you shrink around just the area you care about."
        },
        {
          type: "mcq",
          q: "When reviewing a congested ceiling, why would you section the model?",
          choices: ["To expose ducts and pipes hidden above the ceiling", "To run Quantification", "To merge NWC files", "To change the color palette"],
          answer: 0,
          explain: "Cutting away the ceiling reveals the MEP routing you need to coordinate."
        },
        {
          type: "truefalse",
          q: "Sectioning permanently deletes the cut-away geometry from the model.",
          answer: false,
          explain: "Sectioning only hides geometry in the current view; nothing is actually deleted."
        }
      ]
    },
    {
      id: "l12",
      title: "Measuring",
      intro: "Measure distances, angles, and areas to sanity-check clearances and dimensions during review.",
      questions: [
        {
          type: "mcq",
          q: "What can the measure tools in Navisworks check?",
          choices: ["Distances, angles, and areas", "Only the file size", "The project schedule", "The clash status only"],
          answer: 0,
          explain: "Measure tools cover point-to-point distances, angles, and areas for quick checks."
        },
        {
          type: "truefalse",
          q: "You can measure the distance between two points to check a clearance.",
          answer: true,
          explain: "Point-to-point measurement is a fast way to verify a gap meets a clearance requirement."
        },
        {
          type: "fill",
          q: "To confirm a duct has enough room above a beam, you can ____ the distance between them.",
          answer: "measure",
          accept: ["measure"],
          explain: "Measuring the gap tells you at a glance whether the clearance is adequate."
        },
        {
          type: "match",
          q: "Match each measurement type to a coordination use.",
          pairs: [
            ["Distance", "Checking clearance between a pipe and a beam"],
            ["Angle", "Verifying a sloped ramp or brace"],
            ["Area", "Estimating a floor or wall surface"]
          ],
          explain: "Different measurements answer different questions during a model review."
        },
        {
          type: "order",
          q: "Put the steps of a point-to-point measurement in order.",
          items: ["Pick the measure tool", "Click the first point", "Click the second point", "Read the distance shown"],
          explain: "Choose the tool, click both points, and the readout gives you the distance."
        },
        {
          type: "truefalse",
          q: "Measurements in Navisworks change the real dimensions of the model.",
          answer: false,
          explain: "Measuring only reports values; it never edits the geometry."
        },
        {
          type: "mcq",
          q: "Why is measuring useful before flagging a clash?",
          choices: ["It helps you judge how serious the interference or tight clearance really is", "It publishes the model", "It assigns the clash to a trade", "It runs the animation"],
          answer: 0,
          explain: "A quick measurement shows whether a tight spot is a real problem or acceptable."
        }
      ]
    },
    {
      id: "l13",
      title: "Redlines & Comments",
      intro: "Add redline markups and comments so the team knows exactly what needs attention and where.",
      questions: [
        {
          type: "mcq",
          q: "What is a redline in Navisworks?",
          choices: ["A markup drawn on a viewpoint to point out an issue", "A type of clash test", "A file format", "A navigation mode"],
          answer: 0,
          explain: "Redlines are markups like arrows, clouds, and text drawn onto a viewpoint."
        },
        {
          type: "truefalse",
          q: "Redlines are saved with the viewpoint they were drawn on.",
          answer: true,
          explain: "Because redlines live on a viewpoint, recalling the viewpoint brings the markups back."
        },
        {
          type: "fill",
          q: "A ____ is a markup such as an arrow or text drawn on a viewpoint to highlight an issue.",
          answer: "redline",
          accept: ["redline", "red line"],
          explain: "Redlines make an issue visible so anyone opening the viewpoint sees the concern."
        },
        {
          type: "match",
          q: "Match each markup or note to its purpose.",
          pairs: [
            ["Arrow redline", "Pointing directly at the problem"],
            ["Text redline", "Writing a short note on the view"],
            ["Comment", "Adding a threaded remark to a viewpoint or clash"]
          ],
          explain: "Redlines mark the geometry visually while comments add written context."
        },
        {
          type: "truefalse",
          q: "Comments can be attached to clash results as well as viewpoints.",
          answer: true,
          explain: "Adding comments to clashes keeps the discussion tied to the exact issue."
        },
        {
          type: "order",
          q: "Put the coordination markup steps in order.",
          items: ["Navigate to the problem area", "Save a viewpoint", "Draw a redline on it", "Add a comment explaining the fix"],
          explain: "Frame the issue, save it, mark it, then explain it so the team can act."
        },
        {
          type: "mcq",
          q: "Why do coordinators use redlines and comments together?",
          choices: ["The redline shows where and the comment says what to do", "It speeds up the file export", "It runs a clash test", "It hides the model"],
          answer: 0,
          explain: "Visual markup plus a written note removes guesswork for the trade fixing it."
        }
      ]
    },
    {
      id: "l14",
      title: "Visual Settings",
      intro: "Adjust appearance and realism options so the model is easier to read during review.",
      questions: [
        {
          type: "mcq",
          q: "Why would you change visual settings during a review?",
          choices: ["To make elements clearer and easier to tell apart", "To delete elements", "To change the schedule", "To publish the file"],
          answer: 0,
          explain: "The right rendering and lighting make congested areas much easier to understand."
        },
        {
          type: "truefalse",
          q: "Turning on a shaded or full-render mode can help you read curved and complex shapes.",
          answer: true,
          explain: "Shading and lighting add depth cues that make 3D geometry easier to interpret."
        },
        {
          type: "match",
          q: "Match each visual option to what it helps with.",
          pairs: [
            ["Shaded render", "Adding depth so shapes read clearly"],
            ["Wireframe", "Seeing through to hidden edges"],
            ["Hidden line", "A clean line drawing look"]
          ],
          explain: "Switching render styles changes how much detail and depth you see."
        },
        {
          type: "fill",
          q: "Switching to a ____ mode shows only edges so you can see through to what is behind.",
          answer: "wireframe",
          accept: ["wireframe", "wire frame"],
          explain: "Wireframe strips out surfaces, which is handy for spotting hidden runs."
        },
        {
          type: "truefalse",
          q: "Changing visual settings edits the real materials stored in the source models.",
          answer: false,
          explain: "Visual settings only affect how the model is displayed in your review session."
        },
        {
          type: "mcq",
          q: "Which visual style gives a clean line-drawing look with no shading?",
          choices: ["Hidden line", "Full render", "Shaded", "Realistic"],
          answer: 0,
          explain: "Hidden line shows edges as clean lines without surface shading."
        },
        {
          type: "mcq",
          q: "How do visual settings support coordination?",
          choices: ["Clearer views make it easier to spot conflicts and explain them", "They compute quantities", "They assign clashes", "They save the schedule"],
          answer: 0,
          explain: "A readable view means the team catches issues faster and agrees on them sooner."
        }
      ]
    },
    {
      id: "l15",
      title: "Hide & Isolate",
      intro: "Focus your review by hiding clutter and isolating just the elements that matter.",
      questions: [
        {
          type: "mcq",
          q: "What does hiding an element do in a review?",
          choices: ["Removes it from view so you can see what is behind", "Deletes it from the source file", "Runs a clash test on it", "Publishes it as an NWD"],
          answer: 0,
          explain: "Hiding just clears it from view; the element still exists in the model."
        },
        {
          type: "truefalse",
          q: "Isolating a selection hides everything except the elements you chose.",
          answer: true,
          explain: "Isolate keeps your selection visible and drops everything else so you can focus."
        },
        {
          type: "fill",
          q: "Using ____ shows only the elements you picked and hides everything else.",
          answer: "isolate",
          accept: ["isolate", "isolation"],
          explain: "Isolate is perfect for studying one trade or system without distraction."
        },
        {
          type: "match",
          q: "Match each action to its result.",
          pairs: [
            ["Hide", "Removes the chosen elements from view"],
            ["Isolate", "Keeps only the chosen elements visible"],
            ["Unhide all", "Brings everything back into view"]
          ],
          explain: "Hide and isolate are opposites, and unhide all resets the view."
        },
        {
          type: "truefalse",
          q: "Hiding an element in Navisworks permanently removes it from the source model.",
          answer: false,
          explain: "Hiding only affects the current view; the source geometry is untouched."
        },
        {
          type: "order",
          q: "Put the steps for focusing on the plumbing run in order.",
          items: ["Select the plumbing elements", "Isolate the selection", "Review the run closely", "Unhide all to restore the view"],
          explain: "Select, isolate, study, then bring everything back when you are done."
        },
        {
          type: "mcq",
          q: "Why isolate a system during coordination?",
          choices: ["It removes clutter so you can study that system clearly", "It exports the schedule", "It changes the clash tolerance", "It renames the file"],
          answer: 0,
          explain: "With everything else hidden, conflicts within that system stand out."
        }
      ]
    },
    {
      id: "l16",
      title: "Viewpoints for Meetings",
      intro: "Organize saved viewpoints into a clear set so coordination meetings run smoothly.",
      questions: [
        {
          type: "mcq",
          q: "Why organize viewpoints before a coordination meeting?",
          choices: ["So the team can move quickly through the issues in order", "To delete the model", "To run Quantification", "To change navigation modes"],
          answer: 0,
          explain: "A tidy, ordered set keeps the meeting moving and makes sure nothing is missed."
        },
        {
          type: "truefalse",
          q: "Viewpoints can be grouped into folders to keep related issues together.",
          answer: true,
          explain: "Grouping viewpoints into folders lets you organize by area, trade, or agenda."
        },
        {
          type: "fill",
          q: "Grouping related viewpoints into ____ keeps meeting topics organized.",
          answer: "folders",
          accept: ["folders", "folder"],
          explain: "Folders let you sort viewpoints by level, zone, or discipline for easy navigation."
        },
        {
          type: "match",
          q: "Match each meeting-prep habit to its benefit.",
          pairs: [
            ["Naming viewpoints clearly", "Everyone knows the issue at a glance"],
            ["Ordering viewpoints", "The meeting flows through issues in sequence"],
            ["Grouping into folders", "Related items stay together"]
          ],
          explain: "Clear names, a logical order, and folders make a review session efficient."
        },
        {
          type: "order",
          q: "Put the meeting-prep steps in order.",
          items: ["Capture a viewpoint for each issue", "Name each one clearly", "Group them into folders", "Order them for the agenda"],
          explain: "Capture, name, group, and order so the meeting runs top to bottom without fumbling."
        },
        {
          type: "truefalse",
          q: "A well-named viewpoint set can be shared so absent team members can review the same issues.",
          answer: true,
          explain: "Sharing an organized viewpoint set lets others walk the same issues on their own."
        },
        {
          type: "mcq",
          q: "What is the payoff of an organized viewpoint set?",
          choices: ["Faster, clearer coordination meetings with fewer missed issues", "A smaller NWC cache", "Automatic clash resolution", "A new file format"],
          answer: 0,
          explain: "Organization turns scattered notes into a smooth, repeatable review agenda."
        }
      ]
    }
  ]
});
