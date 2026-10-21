window.ACADEMY.addUnit("construction", {
  id: "unit-13",
  title: "Scheduling & Project Controls",
  color: "#6c5ce7",
  icon: "📅",
  description: "Planning and controlling time and cost: CPM and float, Gantt charts, resource/cost loading, earned value, and delay analysis.",
  lessons: [
    {
      id: "l137",
      title: "Scheduling Basics",
      intro: "A schedule turns the plan of work into a timed sequence of activities so a team can commit to and control a completion date.",
      questions: [
        {
          type: "mcq",
          q: "What is the primary purpose of a construction schedule?",
          choices: ["To sequence work and predict when activities and completion will occur", "To break the contract price into line items for monthly progress billing", "To list every supplier and the materials each will deliver", "To record which workers have completed safety orientation"],
          answer: 0,
          explain: "A schedule sequences activities against time so the team can plan, commit to dates and measure progress."
        },
        {
          type: "mcq",
          q: "What is the baseline schedule?",
          choices: ["The approved, frozen plan that actual progress is measured against", "The latest monthly update showing current forecast dates for every activity", "A summary schedule showing only the major milestones", "The subcontractor's internal plan for its own crews"],
          answer: 0,
          explain: "The baseline is the original approved schedule kept fixed as the yardstick for comparing planned versus actual performance."
        },
        {
          type: "mcq",
          q: "What best defines an activity in a schedule?",
          choices: ["A discrete task with a duration that consumes time and usually resources", "A point in time with zero duration that marks a key event", "A summary bar that rolls up all the tasks in one phase of the project", "A logic link that ties one task's finish to another's start"],
          answer: 0,
          explain: "An activity is a measurable task that takes time and typically resources, unlike a milestone which has zero duration."
        },
        {
          type: "truefalse",
          q: "A milestone is an event with zero duration, such as substantial completion or a permit approval.",
          answer: true,
          explain: "Milestones mark key points in time and carry no duration, so they do not consume days on the schedule."
        },
        {
          type: "fill",
          q: "The hierarchical breakdown of the total scope into progressively smaller deliverables and work packages is the work ____ structure.",
          answer: "breakdown",
          accept: ["breakdown", "wbs", "work breakdown"],
          explain: "The work breakdown structure (WBS) decomposes scope into manageable packages that activities are then built from."
        },
        {
          type: "match",
          q: "Match each scheduling term to its meaning.",
          pairs: [["Activity", "Task that consumes time"], ["Milestone", "Zero-duration event"], ["Baseline", "Frozen approved plan"], ["WBS", "Hierarchical scope breakdown"]],
          explain: "Activities take time, milestones mark events, the baseline is the reference plan and the WBS organizes scope."
        },
        {
          type: "order",
          q: "Order these steps in building a schedule from scope to timeline.",
          items: ["Define scope with the WBS", "List the activities", "Estimate activity durations", "Sequence the activities with logic", "Calculate the completion date"],
          explain: "You break down scope, list and estimate activities, tie them together with logic, then compute the finish."
        },
        {
          type: "mcq",
          q: "What is a master schedule?",
          choices: ["A high-level project-wide schedule showing major phases and milestones", "A detailed daily task list for one crew for the coming week", "The most detailed schedule, listing every single activity on the whole job", "The owner's schedule of payment dates for the contract"],
          answer: 0,
          explain: "The master schedule is the summary-level program of the whole project used to align stakeholders and phases."
        }
      ]
    },
    {
      id: "l138",
      title: "Critical Path Method (CPM)",
      intro: "CPM uses network logic and forward and backward passes to find the longest path that drives the project's finish date.",
      questions: [
        {
          type: "mcq",
          q: "In activity-on-node (AON) logic, what do the nodes and arrows represent?",
          choices: ["Nodes are activities and arrows are the logical relationships", "Nodes are relationships and arrows are the activities", "Nodes are milestones and arrows are the activity durations", "Nodes are resources and arrows are the crew movements"],
          answer: 0,
          explain: "In AON the boxes (nodes) are activities and the connecting arrows show the dependency relationships between them."
        },
        {
          type: "mcq",
          q: "Which relationship means the successor cannot start until the predecessor finishes?",
          choices: ["Finish-to-start (FS)", "Start-to-start (SS)", "Finish-to-finish (FF)", "Start-to-finish (SF)"],
          answer: 0,
          explain: "Finish-to-start is the most common tie: the successor begins only after the predecessor completes."
        },
        {
          type: "match",
          q: "Match each CPM relationship type to its rule.",
          pairs: [["Finish-to-start", "Successor starts after predecessor finishes"], ["Start-to-start", "Both start together or offset from starts"], ["Finish-to-finish", "Both finish together or offset from finishes"]],
          explain: "FS, SS and FF define whether the link is measured from finishes or starts of the linked activities."
        },
        {
          type: "truefalse",
          q: "The forward pass calculates early start and early finish dates by moving from the start toward the end of the network.",
          answer: true,
          explain: "The forward pass adds durations left to right to find the earliest each activity can start and finish."
        },
        {
          type: "mcq",
          q: "What does the backward pass calculate?",
          choices: ["Late start and late finish dates working from the end backward", "Early start and early finish dates working from the start forward", "Actual start and finish dates recorded from the last update", "The critical path by summing the longest chain of durations"],
          answer: 0,
          explain: "The backward pass works right to left from the required finish to derive the latest allowable start and finish dates."
        },
        {
          type: "fill",
          q: "The critical path is the ____ path through the network and the one with zero total float.",
          answer: "longest",
          accept: ["longest", "long"],
          explain: "The critical path is the longest chain of dependent activities, so it has no float and sets the finish date."
        },
        {
          type: "mcq",
          q: "If an activity on the critical path slips by two days, what happens to the project?",
          choices: ["The project finish typically slips by two days", "Nothing, because the activity's float absorbs the delay", "Only that activity moves; the finish date stays the same", "The finish slips by one day, since successors overlap"],
          answer: 0,
          explain: "Critical activities have no float, so a delay to one pushes the overall completion date by the same amount."
        },
        {
          type: "order",
          q: "Order the CPM calculation steps.",
          items: ["Build the activity network with logic", "Run the forward pass for early dates", "Run the backward pass for late dates", "Compute float for each activity", "Identify the zero-float critical path"],
          explain: "You network the logic, pass forward then backward, derive float, and the zero-float chain is the critical path."
        }
      ]
    },
    {
      id: "l139",
      title: "Float & Logic",
      intro: "Float measures scheduling flexibility; understanding total versus free float, lags, and negative float is core to reading a network.",
      questions: [
        {
          type: "mcq",
          q: "What is total float?",
          choices: ["The time an activity can slip without delaying project completion", "The time an activity can slip without delaying its immediate successor", "The lag between two activities", "The total duration of the project"],
          answer: 0,
          explain: "Total float is how much an activity can be delayed before it pushes the project finish date."
        },
        {
          type: "mcq",
          q: "How does free float differ from total float?",
          choices: ["Free float is the delay allowed without impacting any successor's early start", "Free float is the delay allowed without impacting the project finish date", "Free float is always larger than total float on the same activity", "Free float applies only to milestones; total float applies to tasks"],
          answer: 0,
          explain: "Free float is the slack an activity has before it delays the earliest start of its successor, and it is never more than total float."
        },
        {
          type: "fill",
          q: "A ____ is a delay imposed on a relationship, such as a two-day wait for concrete to cure before stripping forms.",
          answer: "lag",
          accept: ["lag", "positive lag"],
          explain: "A lag adds waiting time on a logic tie, while a lead (negative lag) lets a successor overlap and start early."
        },
        {
          type: "truefalse",
          q: "Negative float signals that the current plan finishes later than a required date or constraint and needs recovery.",
          answer: true,
          explain: "Negative float appears when a deadline constraint is violated, showing the plan must be compressed to meet the date."
        },
        {
          type: "mcq",
          q: "What are near-critical activities?",
          choices: ["Activities with small positive float that could easily become critical", "Activities with negative float that have already slipped past the finish date", "Activities with no logical predecessors in the network", "Activities that are already complete but not yet inspected"],
          answer: 0,
          explain: "Near-critical activities carry only a little float, so minor delays can shift them onto the critical path."
        },
        {
          type: "mcq",
          q: "What is the driving path to an activity or milestone?",
          choices: ["The chain of predecessors that actually controls that activity's early dates", "Any path in the network that still has positive float", "The shortest chain of activities from the project start to that activity", "The path that contains the most activities leading up to it"],
          answer: 0,
          explain: "The driving path is the sequence of logic that determines when an activity can start, unlike non-driving feeder paths."
        },
        {
          type: "match",
          q: "Match each float or logic term to its meaning.",
          pairs: [["Total float", "Slack before project delay"], ["Free float", "Slack before successor delay"], ["Lag", "Imposed wait on a link"], ["Negative float", "Behind a required date"]],
          explain: "These terms distinguish project-level slack, successor-level slack, imposed waits and violated deadlines."
        },
        {
          type: "order",
          q: "Order these activities from most to least schedule urgency by float.",
          items: ["Negative float activity", "Zero float (critical) activity", "Near-critical activity with 2 days float", "Activity with 15 days float"],
          explain: "Negative float is behind schedule, zero float is critical, and larger float means more flexibility and less urgency."
        }
      ]
    },
    {
      id: "l140",
      title: "Gantt Charts & Formats",
      intro: "Schedules are communicated through bar charts and varying levels of detail, produced in tools like Primavera P6 and MS Project.",
      questions: [
        {
          type: "mcq",
          q: "What does a Gantt (bar) chart display?",
          choices: ["Activities as horizontal bars positioned and sized along a time axis", "Activities as boxes connected by arrows that show their logic relationships", "Costs by trade as stacked bars for each month of the job", "Crew sizes over time as a histogram for each trade"],
          answer: 0,
          explain: "A Gantt chart plots each activity as a bar whose position and length show its start, finish and duration over time."
        },
        {
          type: "mcq",
          q: "How does a summary schedule differ from a detailed schedule?",
          choices: ["It rolls activities up into fewer high-level bars for an overview", "It adds more activities than the detailed schedule for precision", "It shows only costs and leaves out the activity dates", "It removes all milestones and shows only work activities"],
          answer: 0,
          explain: "A summary schedule rolls detail up into a handful of bars for executives, while the detailed schedule keeps every activity."
        },
        {
          type: "match",
          q: "Match each scheduling tool or format to its description.",
          pairs: [["Primavera P6", "Enterprise CPM scheduling software"], ["MS Project", "Common desktop scheduling tool"], ["Milestone schedule", "Key dates only, no bars of work"], ["Gantt chart", "Bars along a timeline"]],
          explain: "P6 and MS Project are the industry tools; milestone and Gantt views are common output formats."
        },
        {
          type: "truefalse",
          q: "Comparing baseline bars against actual bars on a Gantt chart shows whether work is ahead of or behind plan.",
          answer: true,
          explain: "Overlaying the frozen baseline with actual progress bars reveals slippage or gains at a glance."
        },
        {
          type: "fill",
          q: "Oracle's enterprise scheduling program widely used on large projects is Primavera ____.",
          answer: "p6",
          accept: ["p6", "p 6"],
          explain: "Primavera P6 is the enterprise CPM tool favored on large and infrastructure projects for its power and reporting."
        },
        {
          type: "mcq",
          q: "What is a milestone schedule best used for?",
          choices: ["Communicating key target dates to executives and owners", "Assigning crews to specific tasks for each day of the week", "Calculating float and the critical path for each activity", "Tracking material deliveries against purchase orders"],
          answer: 0,
          explain: "A milestone schedule strips out task detail to show only the critical dates stakeholders care about."
        },
        {
          type: "mcq",
          q: "On a Gantt chart, what does a bar's length represent?",
          choices: ["The duration of the activity", "The cost of the activity", "The crew size assigned to it", "The float available to it"],
          answer: 0,
          explain: "Bar length maps directly to how long the activity takes on the time axis."
        }
      ]
    },
    {
      id: "l141",
      title: "Resource & Cost Loading",
      intro: "Loading resources and cost onto the schedule turns it into a forecast of labor demand, cash flow, and the classic S-curve.",
      questions: [
        {
          type: "mcq",
          q: "What is resource loading a schedule?",
          choices: ["Assigning labor, equipment or materials to activities to forecast demand", "Adding more activities to the schedule to show greater detail", "Shifting activities within their float to smooth out the peaks in crew size", "Locking the baseline dates so progress can be measured"],
          answer: 0,
          explain: "Resource loading attaches crews, equipment and materials to activities so peak demand and totals can be forecast."
        },
        {
          type: "mcq",
          q: "What problem does resource leveling solve?",
          choices: ["Smoothing peaks and valleys so resource demand stays within available limits", "Shortening the critical path by adding extra crews and shifts to every activity", "Balancing the cost of each activity against the schedule of values", "Assigning resources to activities so total demand can be forecast"],
          answer: 0,
          explain: "Leveling shifts activities within their float to flatten spikes so crew sizes stay realistic and steady."
        },
        {
          type: "mcq",
          q: "What is the schedule of values (SOV)?",
          choices: ["A breakdown of the contract sum into line items used to bill progress", "A side-by-side list of subcontractor bids used to award each trade package", "A ranking of activities by their cost and float value", "The estimated value of each change order in the contract"],
          answer: 0,
          explain: "The SOV allocates the contract price across work items so monthly payment applications can be justified."
        },
        {
          type: "truefalse",
          q: "A cost-loaded schedule lets you forecast cash flow by spreading cost across activity durations over time.",
          answer: true,
          explain: "Loading cost onto timed activities produces a time-phased spend forecast, the basis for cash flow projection."
        },
        {
          type: "fill",
          q: "The cumulative cost or progress curve that starts flat, steepens, then flattens is called the ____-curve.",
          answer: "s",
          accept: ["s", "s curve", "scurve"],
          explain: "The S-curve plots cumulative cost or progress over time and takes its shape from slow starts and finishes with a fast middle."
        },
        {
          type: "match",
          q: "Match each cost and resource term to its meaning.",
          pairs: [["Resource loading", "Assign labor and equipment to tasks"], ["Leveling", "Smooth resource peaks"], ["Schedule of values", "Contract broken into billable items"], ["S-curve", "Cumulative spend over time"]],
          explain: "Loading assigns resources, leveling smooths them, the SOV supports billing and the S-curve visualizes cumulative cost."
        },
        {
          type: "order",
          q: "Order the steps to produce a cash flow forecast from a schedule.",
          items: ["Build the logic-driven schedule", "Load cost onto each activity", "Spread cost across activity durations", "Sum cost by period", "Plot the cumulative S-curve"],
          explain: "You schedule the work, load and spread cost over time, total it by period, then draw the cumulative curve."
        }
      ]
    },
    {
      id: "l142",
      title: "Earned Value Management",
      intro: "Earned value integrates scope, schedule and cost into indices that reveal whether a project is over budget or behind plan.",
      questions: [
        {
          type: "mcq",
          q: "What does earned value (EV) measure?",
          choices: ["The budgeted cost of the work actually performed to date", "The actual cost spent on the work performed to date", "The budgeted cost of the work scheduled to be done by now", "The forecast total cost of the project at completion"],
          answer: 0,
          explain: "EV is the budgeted value of work completed, sometimes called the budgeted cost of work performed."
        },
        {
          type: "match",
          q: "Match each earned value term to its definition.",
          pairs: [["Planned value (PV)", "Budgeted cost of scheduled work"], ["Earned value (EV)", "Budgeted cost of completed work"], ["Actual cost (AC)", "Real cost of completed work"], ["BAC", "Total project budget"]],
          explain: "PV is what you planned to have done, EV is what you did in budget terms, AC is real spend and BAC is the total budget."
        },
        {
          type: "mcq",
          q: "How is cost variance (CV) calculated?",
          choices: ["CV = EV minus AC", "CV = PV minus EV", "CV = AC minus EV", "CV = BAC minus EV"],
          answer: 0,
          explain: "Cost variance is EV minus AC; a negative result means the work cost more than budgeted."
        },
        {
          type: "mcq",
          q: "What does a schedule performance index (SPI) below 1.0 indicate?",
          choices: ["The project is behind schedule", "The project is over budget", "The project is ahead of schedule", "The project is under budget"],
          answer: 0,
          explain: "SPI equals EV divided by PV; under 1.0 means less value was earned than planned, so work is behind schedule."
        },
        {
          type: "truefalse",
          q: "A cost performance index (CPI) of 0.90 means the project is spending more than budgeted for the work performed.",
          answer: true,
          explain: "CPI equals EV divided by AC; 0.90 means you earned only 90 cents of value per dollar spent, so it is over budget."
        },
        {
          type: "fill",
          q: "The forecast total cost of the project at completion is the estimate at ____, or EAC.",
          answer: "completion",
          accept: ["completion", "complete"],
          explain: "Estimate at completion (EAC) forecasts the final total cost, often from BAC divided by CPI."
        },
        {
          type: "mcq",
          q: "A project shows CPI of 1.05 and SPI of 0.95. What is the plain reading?",
          choices: ["Under budget but behind schedule", "Over budget but ahead of schedule", "On budget and on schedule", "Over budget and behind schedule"],
          answer: 0,
          explain: "CPI above 1.0 is under budget while SPI below 1.0 is behind schedule, a common trade-off pattern."
        },
        {
          type: "order",
          q: "Order these earned value quantities by typical calculation dependency.",
          items: ["Measure PV, EV and AC", "Compute CV and SV", "Compute CPI and SPI", "Forecast EAC"],
          explain: "You gather the base values, derive variances and indices, then use them to forecast the final cost."
        }
      ]
    },
    {
      id: "l143",
      title: "Updating & Delay",
      intro: "Regular updates with a data date keep the schedule honest, and delay analysis determines who owns lost time and cost.",
      questions: [
        {
          type: "mcq",
          q: "What is the data date in a schedule update?",
          choices: ["The as-of date separating completed work from remaining work", "The date the contract was signed and the baseline was set", "The forecast finish date calculated from the latest update", "The date the schedule file was last saved or exported"],
          answer: 0,
          explain: "The data date is the status line; work left of it is actual and work right of it is the remaining forecast."
        },
        {
          type: "mcq",
          q: "What does percent complete track on an activity?",
          choices: ["How much of the activity's work has been accomplished", "How much of the activity's float has been used up", "How much of the activity's budget has been spent", "How many of the activity's predecessors are finished"],
          answer: 0,
          explain: "Percent complete records progress on an activity and drives remaining duration in the updated schedule."
        },
        {
          type: "match",
          q: "Match each delay type to its meaning.",
          pairs: [["Excusable delay", "Not the contractor's fault, time extension"], ["Compensable delay", "Owner-caused, time and money"], ["Concurrent delay", "Two independent delays overlap"]],
          explain: "Excusable delays earn time, compensable ones earn time and money, and concurrent delays overlap and complicate entitlement."
        },
        {
          type: "truefalse",
          q: "A compensable delay entitles the contractor to both a time extension and additional money.",
          answer: true,
          explain: "Compensable delays are caused by the owner, so the contractor may recover both added time and added cost."
        },
        {
          type: "fill",
          q: "A forward-looking method that inserts a delay fragnet into an update to measure its schedule impact is time ____ analysis.",
          answer: "impact",
          accept: ["impact", "impact analysis"],
          explain: "Time impact analysis (TIA) inserts a modeled delay into the current schedule to quantify its effect on the finish date."
        },
        {
          type: "mcq",
          q: "What does acceleration mean in schedule recovery?",
          choices: ["Adding resources or shifts to complete work faster than currently planned", "Extending the completion date to absorb the delays already incurred", "Deleting scope so the remaining work fits the original dates", "Pausing work to rebaseline the schedule around new dates"],
          answer: 0,
          explain: "Acceleration compresses the schedule using overtime, added crews or resequencing to recover lost time."
        },
        {
          type: "order",
          q: "Order the steps in a routine schedule update.",
          items: ["Set the new data date", "Enter actual start and finish dates", "Update percent complete and remaining durations", "Recalculate the network", "Compare against baseline for variance"],
          explain: "You status the schedule to the data date, recalculate, then compare against the baseline to see slippage."
        }
      ]
    },
    {
      id: "l144",
      title: "Lean & Look-Ahead Planning",
      intro: "Lean planning bridges the CPM schedule and the field through look-ahead windows, pull planning, and reliable weekly commitments.",
      questions: [
        {
          type: "mcq",
          q: "What is a look-ahead (short-interval) schedule?",
          choices: ["A detailed near-term plan, often three to six weeks out, drawn from the master schedule", "A high-level forecast of the whole project used for owner reports", "A record of the work completed over the past several weeks", "A long-range plan, often six to twelve months out, showing only the major phases of work"],
          answer: 0,
          explain: "The look-ahead expands the next few weeks of the master schedule into actionable detail for the field."
        },
        {
          type: "mcq",
          q: "In the Last Planner System, who are the last planners?",
          choices: ["The foremen and superintendents who commit to and control the actual work", "The owner's representatives who approve the final schedule", "The project schedulers who build and update the master schedule in the software", "The design architects who issue the last set of drawings"],
          answer: 0,
          explain: "Last planners are the field leaders who make and keep the weekly commitments closest to the work."
        },
        {
          type: "mcq",
          q: "What is pull planning?",
          choices: ["Working backward from a target milestone so trades hand off in the needed sequence", "Scheduling each trade forward from its earliest possible start date", "Adding float to every activity so trades always have a buffer", "Assigning tasks to crews from the master schedule as soon as they are released"],
          answer: 0,
          explain: "Pull planning starts at a milestone and works backward, letting each trade define what it needs from the prior trade."
        },
        {
          type: "truefalse",
          q: "Make-ready or constraint analysis removes obstacles so an activity can be started when planned.",
          answer: true,
          explain: "Constraint analysis screens upcoming work for missing information, materials or prerequisites and clears them in advance."
        },
        {
          type: "fill",
          q: "The reliable near-term commitment listing what the crews will actually do next week is the weekly work ____.",
          answer: "plan",
          accept: ["plan", "weekly work plan"],
          explain: "The weekly work plan captures only activities that are ready and committed, improving the reliability of promises."
        },
        {
          type: "match",
          q: "Match each lean planning concept to its meaning.",
          pairs: [["Look-ahead", "Detailed near-term window"], ["Pull planning", "Plan backward from a milestone"], ["Constraint analysis", "Clear obstacles before work"], ["Takt planning", "Steady production rhythm"]],
          explain: "These lean tools translate the master schedule into ready, rhythmic and reliable field work."
        },
        {
          type: "mcq",
          q: "What does takt planning emphasize in construction production?",
          choices: ["A steady, balanced rhythm of work moving through zones at a set pace", "Finishing each trade across the whole building before the next starts", "Maximizing float on every task so crews can choose their own pace", "Replacing the master schedule with a daily task list for each crew"],
          answer: 0,
          explain: "Takt planning paces work so trades flow through repeating zones at a consistent beat, smoothing production."
        },
        {
          type: "order",
          q: "Order the lean planning flow from big picture to field commitment.",
          items: ["Master CPM schedule", "Pull plan the phase backward from a milestone", "Build the look-ahead window", "Perform make-ready constraint analysis", "Commit the weekly work plan"],
          explain: "Lean planning refines the master schedule through pull and look-ahead down to constraint-free weekly commitments."
        }
      ]
    }
  ]
});
