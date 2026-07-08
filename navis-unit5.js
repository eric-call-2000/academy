window.ACADEMY.addUnit("navisworks", {
  id: "unit-5",
  title: "Managing & Resolving Clashes",
  color: "#ff4b4b",
  icon: "✅",
  description: "Turning a pile of clashes into a coordinated model.",
  lessons: [
    {
      id: "l33",
      title: "Clash Statuses",
      intro: "Every clash carries a status that tracks it from first discovery to final fix.",
      questions: [
        {
          type: "mcq",
          q: "What status does Navisworks give a clash the very first time a test finds it?",
          choices: ["New", "Active", "Approved", "Resolved"],
          answer: 0,
          explain: "A clash found for the first time is marked New. Later re-runs will change it to Active if it is still there."
        },
        {
          type: "mcq",
          q: "A clash was New last week; you re-run the test and it is still there. What status does it get now?",
          choices: ["Active", "New", "Resolved", "Approved"],
          answer: 0,
          explain: "Active means the clash existed on a previous run and is still present. It is no longer brand new."
        },
        {
          type: "truefalse",
          q: "Navisworks sets a clash to Resolved automatically when the interference no longer exists in the model.",
          answer: true,
          explain: "When you re-run a test and a clash is gone, Navisworks flips it to Resolved on its own."
        },
        {
          type: "truefalse",
          q: "Approved is a status the software assigns by itself without any human input.",
          answer: false,
          explain: "Approved is a manual decision. A person marks a clash Approved to say it is acceptable and can be ignored."
        },
        {
          type: "match",
          q: "Match each status to what it means.",
          pairs: [
            ["New", "Found for the first time on this run"],
            ["Active", "Was there before and is still there"],
            ["Approved", "A person accepts it and it can be ignored"],
            ["Resolved", "The interference is gone from the model"]
          ],
          explain: "New and Active are set automatically, Approved is a human choice, and Resolved is set when the clash disappears."
        },
        {
          type: "fill",
          q: "A clash you have looked at but not yet accepted or fixed can be set to ____ to show it has had eyes on it.",
          answer: "reviewed",
          accept: ["reviewed", "review"],
          explain: "Reviewed is a manual status meaning someone examined the clash but has not made a final call yet."
        },
        {
          type: "order",
          q: "Put these clash statuses in a typical life-cycle order from first appearance to done.",
          items: ["New", "Active", "Reviewed", "Approved", "Resolved"],
          explain: "A clash usually starts New, becomes Active on re-runs, gets Reviewed, may be Approved, and ends Resolved when fixed."
        },
        {
          type: "mcq",
          q: "Why do statuses matter in coordination?",
          choices: ["They tell the team what still needs action versus what is handled", "They change the color of the whole model", "They export the model to Revit", "They control camera angles"],
          answer: 0,
          explain: "Statuses turn a raw clash list into a to-do list, separating open work from things already handled."
        }
      ]
    },
    {
      id: "l34",
      title: "Grouping Clashes",
      intro: "One real-world problem can trigger dozens of clashes, so grouping keeps the list manageable.",
      questions: [
        {
          type: "mcq",
          q: "A duct crosses a whole run of conduit, creating 20 clashes from one issue. What is the smart move?",
          choices: ["Group the 20 clashes together", "Delete the whole test", "Ignore all clashes", "Approve every clash blindly"],
          answer: 0,
          explain: "Grouping bundles clashes that share one root cause so you handle them as a single coordination item."
        },
        {
          type: "truefalse",
          q: "A clash group can be given a single status that applies to all clashes inside it.",
          answer: true,
          explain: "Setting a status on the group cascades to its members, so you can resolve many clashes at once."
        },
        {
          type: "truefalse",
          q: "Grouping clashes deletes the individual clash results permanently.",
          answer: false,
          explain: "Grouping only organizes results. The individual clashes still exist inside the group and can be inspected."
        },
        {
          type: "fill",
          q: "Bundling several related clash results under one parent item in the Clash Detective is called ____.",
          answer: "grouping",
          accept: ["grouping", "group"],
          explain: "Grouping collapses many related results into one manageable coordination item."
        },
        {
          type: "match",
          q: "Match the grouping idea to its benefit.",
          pairs: [
            ["Group by location", "Handle all clashes in one room together"],
            ["Group by trade pair", "Deal with all duct vs conduit hits at once"],
            ["Group by root cause", "Fix one design issue, clear many clashes"]
          ],
          explain: "Sensible grouping mirrors how the fix actually happens, so one decision clears a batch of results."
        },
        {
          type: "mcq",
          q: "What is a good reason to group clashes rather than review each one alone?",
          choices: ["It cuts a huge list down to a handful of real problems", "It hides the model geometry", "It publishes an NWD", "It links the schedule for 4D"],
          answer: 0,
          explain: "Grouping shrinks noise into a short list of genuine issues, which is faster to coordinate."
        },
        {
          type: "order",
          q: "Order these steps for tidying a big clash result set.",
          items: ["Run the test", "Sort or select related clashes", "Group them", "Assign or status the group"],
          explain: "You run the test, gather related hits, group them, then act on the group as one unit."
        }
      ]
    },
    {
      id: "l35",
      title: "Assigning Clashes",
      intro: "Assigning routes each clash or group to the person or trade responsible for fixing it.",
      questions: [
        {
          type: "mcq",
          q: "What does assigning a clash accomplish?",
          choices: ["It notes who is responsible for resolving the issue", "It deletes the clash", "It exports an NWC file", "It changes the tolerance value"],
          answer: 0,
          explain: "Assigning attaches an owner to the clash so everyone knows whose job it is to fix it."
        },
        {
          type: "truefalse",
          q: "You can assign a whole clash group to one person in a single action.",
          answer: true,
          explain: "Assigning a group hands the entire batch to one owner, saving you from assigning each clash by hand."
        },
        {
          type: "truefalse",
          q: "Assigning a clash automatically moves the clashing geometry to fix the problem.",
          answer: false,
          explain: "Assigning only records responsibility. The actual fix happens in the authoring model by the assigned person."
        },
        {
          type: "fill",
          q: "Routing a clash to the trade or person responsible for the fix is called ____ it.",
          answer: "assigning",
          accept: ["assigning", "assign"],
          explain: "Assigning gives a clash an owner so it does not sit in limbo with nobody accountable."
        },
        {
          type: "match",
          q: "Match the clash to a sensible owner.",
          pairs: [
            ["Duct vs beam", "Mechanical"],
            ["Pipe vs duct", "Plumbing or mechanical lead"],
            ["Conduit vs wall", "Electrical"]
          ],
          explain: "Assigning to the right trade means the person who can actually move the element gets the task."
        },
        {
          type: "mcq",
          q: "Why is assigning important in a coordination meeting?",
          choices: ["It makes accountability clear so issues do not stall", "It speeds up the graphics card", "It renames the NWF file", "It merges two selection trees"],
          answer: 0,
          explain: "Clear ownership prevents the classic problem of a clash everyone assumes someone else will handle."
        },
        {
          type: "order",
          q: "Order the flow of handling a clash after a meeting.",
          items: ["Review the clash", "Decide the responsible trade", "Assign it to them", "Track it to resolution"],
          explain: "You review, decide who owns it, assign it, then follow up until it is resolved."
        }
      ]
    },
    {
      id: "l36",
      title: "SwitchBack to Revit",
      intro: "SwitchBack jumps from a clashing element in Navisworks straight to that same element in Revit.",
      questions: [
        {
          type: "mcq",
          q: "What does SwitchBack do?",
          choices: ["Selects the clashing element back in the authoring app like Revit", "Publishes an NWD", "Deletes the clash test", "Rebuilds the search sets"],
          answer: 0,
          explain: "SwitchBack sends you from Navisworks to the exact element in Revit so you can fix it at the source."
        },
        {
          type: "truefalse",
          q: "SwitchBack requires the authoring application, such as Revit, to be open and connected.",
          answer: true,
          explain: "SwitchBack needs Revit running with the model open so it can select the matching element there."
        },
        {
          type: "truefalse",
          q: "SwitchBack lets you edit and move geometry directly inside Navisworks.",
          answer: false,
          explain: "Navisworks is a review tool and does not edit source geometry. SwitchBack takes you to Revit to make the change."
        },
        {
          type: "fill",
          q: "The Navisworks feature that jumps you to the matching element in Revit is called ____.",
          answer: "switchback",
          accept: ["switchback", "switch back", "switch-back"],
          explain: "SwitchBack bridges the review model and the authoring model so fixes happen where the geometry lives."
        },
        {
          type: "mcq",
          q: "Why is SwitchBack so useful during clash resolution?",
          choices: ["It saves time finding the right element among thousands in Revit", "It compresses the NWC cache", "It sets the clash tolerance", "It assigns clashes automatically"],
          answer: 0,
          explain: "Instead of hunting for the element by hand in Revit, SwitchBack selects it for you instantly."
        },
        {
          type: "order",
          q: "Order the SwitchBack workflow to fix a clash.",
          items: ["Select the clashing item in Navisworks", "Use SwitchBack", "Revit selects the same element", "Edit the element in Revit"],
          explain: "You pick the item, trigger SwitchBack, Revit highlights the same element, and you fix it there."
        },
        {
          type: "match",
          q: "Match each tool to its job.",
          pairs: [
            ["Navisworks", "Federate models and find clashes"],
            ["SwitchBack", "Jump to the element in the authoring app"],
            ["Revit", "Actually move or edit the geometry"]
          ],
          explain: "Navisworks reviews and finds, SwitchBack bridges, and Revit edits the real design."
        }
      ]
    },
    {
      id: "l37",
      title: "Viewpoints from Clashes",
      intro: "Saving a clash as a viewpoint captures the exact camera and markups so the issue can be shared.",
      questions: [
        {
          type: "mcq",
          q: "What does a viewpoint save?",
          choices: ["The camera angle plus any redlines or markups", "The entire schedule", "Only the file name", "The clash tolerance"],
          answer: 0,
          explain: "A viewpoint stores the saved camera position along with redline markups, so others see exactly what you saw."
        },
        {
          type: "truefalse",
          q: "Turning clashes into viewpoints makes it easy to review issues without opening the Clash Detective each time.",
          answer: true,
          explain: "Viewpoints give you a quick visual list of issues you can click through in coordination meetings."
        },
        {
          type: "truefalse",
          q: "A viewpoint permanently changes the geometry of the model.",
          answer: false,
          explain: "A viewpoint only saves a view and markups. It never alters the underlying model geometry."
        },
        {
          type: "fill",
          q: "A saved camera position with redlines that you can jump back to is called a ____.",
          answer: "viewpoint",
          accept: ["viewpoint", "view point"],
          explain: "Viewpoints let you and the team return to the exact framing of an issue at any time."
        },
        {
          type: "mcq",
          q: "Why generate viewpoints straight from clash results?",
          choices: ["Each issue gets a shareable, easy-to-find view", "It lowers the file size of the NWC", "It re-runs every test", "It assigns owners automatically"],
          answer: 0,
          explain: "Viewpoints turn abstract clash rows into pictures the whole team can open and discuss."
        },
        {
          type: "match",
          q: "Match each item to what it captures or does.",
          pairs: [
            ["Viewpoint", "Saved camera and markups"],
            ["Redline", "A markup drawn on the view"],
            ["Clash result", "The interference the viewpoint documents"]
          ],
          explain: "A viewpoint bundles the camera and redlines to document a specific clash result visually."
        },
        {
          type: "order",
          q: "Order the steps to document a clash as a viewpoint.",
          items: ["Select the clash", "Frame the camera on it", "Add redlines if needed", "Save the viewpoint"],
          explain: "You select, frame the shot, mark it up, and save it so anyone can revisit the exact issue."
        }
      ]
    },
    {
      id: "l38",
      title: "Updating Tests",
      intro: "After the design team fixes issues, you re-run tests to see what really changed.",
      questions: [
        {
          type: "mcq",
          q: "What happens when you re-run a clash test after models are updated?",
          choices: ["Navisworks updates statuses to show what is fixed and what remains", "It deletes all viewpoints", "It uninstalls Revit", "It publishes an NWD automatically"],
          answer: 0,
          explain: "Re-running compares the fresh model to the old results, flipping fixed clashes to Resolved and keeping open ones Active."
        },
        {
          type: "truefalse",
          q: "Re-running a test keeps the statuses and groups you set on the previous run where the clashes still exist.",
          answer: true,
          explain: "Navisworks preserves your grouping and status work for clashes that persist, so you do not start from scratch."
        },
        {
          type: "truefalse",
          q: "You must delete a clash test and build it again every time the model changes.",
          answer: false,
          explain: "You just re-run the existing test. Rebuilding from scratch would throw away all your grouping and status work."
        },
        {
          type: "fill",
          q: "Loading the newest model files so Navisworks reflects the latest design is called ____ the model or files.",
          answer: "refreshing",
          accept: ["refreshing", "refresh", "updating", "reload", "reloading"],
          explain: "Refreshing pulls the latest source files in so a re-run tests the current design, not an old copy."
        },
        {
          type: "mcq",
          q: "Why is using an NWF important when tests will be re-run over time?",
          choices: ["It references the live source files so refreshes pick up changes", "It bakes geometry and never updates", "It cannot store clash tests", "It only works in Freedom"],
          answer: 0,
          explain: "An NWF references the source files instead of freezing geometry, so refreshing and re-running reflects new design work."
        },
        {
          type: "order",
          q: "Order the update cycle after the model changes.",
          items: ["Receive updated source files", "Refresh the model", "Re-run the clash test", "Review the new results"],
          explain: "You bring in fresh files, refresh, re-run, and then check what got fixed and what is new."
        },
        {
          type: "match",
          q: "Match the file type to how it behaves on a re-run.",
          pairs: [
            ["NWF", "References live files and updates on refresh"],
            ["NWD", "A frozen snapshot that does not update"],
            ["NWC", "A lightweight cache exported from an authoring app"]
          ],
          explain: "You save your ongoing coordination in an NWF so re-runs reflect the latest models, then publish an NWD to share a snapshot."
        }
      ]
    },
    {
      id: "l39",
      title: "Filtering Results",
      intro: "Filtering hides the noise so you spend meeting time only on clashes that truly matter.",
      questions: [
        {
          type: "mcq",
          q: "Why filter clash results before a coordination meeting?",
          choices: ["To focus on real, actionable clashes and skip the noise", "To delete the model", "To change the app edition", "To disable SwitchBack"],
          answer: 0,
          explain: "Filtering surfaces the clashes worth discussing so the team is not buried under trivial or already-handled results."
        },
        {
          type: "truefalse",
          q: "Hiding Approved and Resolved clashes helps you concentrate on issues that still need action.",
          answer: true,
          explain: "Filtering out handled clashes leaves only the open work, keeping the review sharp and short."
        },
        {
          type: "truefalse",
          q: "Filtering results changes their status from Active to Resolved.",
          answer: false,
          explain: "Filtering only controls what is shown. It never changes a clash status or fixes anything."
        },
        {
          type: "fill",
          q: "A tiny gap that clashes technically but is not a real construction problem is sometimes called a ____ positive.",
          answer: "false",
          accept: ["false"],
          explain: "A false positive is a clash the software flags that is not truly a buildability problem, so filtering and tolerance help hide it."
        },
        {
          type: "mcq",
          q: "Which is a common way to cut down noise in results?",
          choices: ["Set a sensible tolerance so tiny overlaps are ignored", "Turn off the monitor", "Delete the selection tree", "Publish more NWD files"],
          answer: 0,
          explain: "A reasonable tolerance keeps trivial overlaps from ever being reported, cutting the noise at the source."
        },
        {
          type: "match",
          q: "Match the filter choice to what it hides.",
          pairs: [
            ["Hide Approved", "Clashes a person already accepted"],
            ["Hide Resolved", "Clashes that are already fixed"],
            ["Show New only", "Everything except freshly found issues"]
          ],
          explain: "Filtering by status lets you look at exactly the slice of clashes you care about right now."
        },
        {
          type: "order",
          q: "Order the steps to prepare a focused clash list.",
          items: ["Re-run the test", "Filter out Approved and Resolved", "Group the rest", "Assign the real issues"],
          explain: "Re-run for fresh data, filter to the open items, group them, then assign the genuine problems."
        }
      ]
    },
    {
      id: "l40",
      title: "The Coordination Loop",
      intro: "Coordination is a repeating loop of resolving issues, re-running tests, and verifying the fixes.",
      questions: [
        {
          type: "mcq",
          q: "What best describes the coordination loop?",
          choices: ["Resolve issues, re-run tests, then verify the results", "Run one test and never look again", "Only publish NWD files", "Edit geometry inside Navisworks"],
          answer: 0,
          explain: "Coordination repeats: teams fix issues, you re-run tests, and you verify that fixes worked and nothing new broke."
        },
        {
          type: "truefalse",
          q: "Fixing one clash can sometimes create a new clash somewhere else, which is why you keep re-running tests.",
          answer: true,
          explain: "Moving an element to clear one clash may push it into another, so re-running catches those side effects."
        },
        {
          type: "truefalse",
          q: "Once the first clash test comes back clean the coordination loop is finished for good.",
          answer: false,
          explain: "Models keep changing, so you loop again after each update until the design is stable and clean."
        },
        {
          type: "fill",
          q: "Sharing a self-contained coordinated snapshot at a milestone is done by publishing an ____ file.",
          answer: "nwd",
          accept: ["nwd", ".nwd"],
          explain: "An NWD is a self-contained snapshot with geometry baked in, perfect for sharing a coordinated milestone."
        },
        {
          type: "mcq",
          q: "How does this workflow increasingly connect to the cloud?",
          choices: ["Through ACC Model Coordination for cloud-based clash review", "By emailing screenshots only", "By printing paper drawings", "By disabling all tests"],
          answer: 0,
          explain: "ACC Model Coordination brings federated models and clash review into the cloud alongside desktop Navisworks."
        },
        {
          type: "order",
          q: "Order one full pass of the coordination loop.",
          items: ["Refresh updated models", "Re-run clash tests", "Resolve or assign open issues", "Verify fixes and publish a snapshot"],
          explain: "Each pass refreshes models, re-runs tests, resolves what is open, then verifies and shares the result."
        },
        {
          type: "match",
          q: "Match each loop action to its purpose.",
          pairs: [
            ["Resolve", "Fix the issue in the authoring model"],
            ["Re-run", "Test the updated model again"],
            ["Verify", "Confirm the fix worked and nothing new broke"],
            ["Publish", "Share a coordinated snapshot as an NWD"]
          ],
          explain: "Resolve, re-run, verify, and publish are the core moves that turn a clashy model into a coordinated one."
        }
      ]
    }
  ]
});
