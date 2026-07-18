window.ACADEMY.addUnit("behaviorism", {
  id: "unit-9",
  title: "Schedules of Reinforcement",
  color: "#14a58f",
  icon: "⏱️",
  description: "Explore how the timing and pattern of reinforcement, from continuous reward to complex schedules, shape the rate and persistence of behavior.",
  lessons: [
    {
      id: "l65",
      title: "Continuous Reinforcement",
      intro: "Continuous reinforcement delivers a reward for every single response and is the fastest way to teach a brand-new behavior.",
      questions: [
        {
          type: "mcq",
          q: "Under a continuous reinforcement (CRF) schedule, how often is a response reinforced?",
          choices: ["Only after a variable number of responses", "Every single response", "After a fixed time interval passes", "Never, extinction begins immediately"],
          answer: 1,
          explain: "CRF (also written FR-1) delivers reinforcement after every correct response, giving the densest possible reinforcement."
        },
        {
          type: "truefalse",
          q: "Continuous reinforcement is the most effective schedule for the initial acquisition of a new behavior.",
          answer: true,
          explain: "Because every response is rewarded, CRF produces the fastest learning of a new response, so it is ideal during acquisition."
        },
        {
          type: "truefalse",
          q: "Behavior established with continuous reinforcement is highly resistant to extinction once the reward stops.",
          answer: false,
          explain: "CRF actually produces rapid extinction; the sudden absence of an expected reward is easy to detect, so responding drops off quickly."
        },
        {
          type: "fill",
          q: "A continuous reinforcement schedule can also be written as an FR-____ schedule, since reinforcement follows every one response.",
          answer: "1",
          accept: ["1", "one"],
          explain: "Continuous reinforcement is equivalent to a fixed-ratio schedule with a ratio of 1: one reward per one response."
        },
        {
          type: "mcq",
          q: "Why do trainers usually switch from continuous to intermittent reinforcement after a behavior is learned?",
          choices: ["Continuous reinforcement teaches the behavior too slowly", "Intermittent schedules make the behavior more durable and resistant to extinction", "Continuous reinforcement is physically impossible to deliver", "Intermittent schedules stop the behavior faster"],
          answer: 1,
          explain: "Once acquired, thinning to an intermittent schedule builds persistence, so the behavior survives longer without constant reward."
        },
        {
          type: "match",
          q: "Match each term with its description.",
          pairs: [["Continuous reinforcement", "Reward after every response"], ["Acquisition", "The stage where a new behavior is being learned"], ["Extinction", "Decline in responding when reinforcement stops"]],
          explain: "CRF is used during acquisition to build a behavior quickly, but it leads to fast extinction once reinforcement ends."
        },
        {
          type: "order",
          q: "Order these stages of using continuous reinforcement to train and then maintain a behavior.",
          items: ["Reinforce every correct response to build the behavior", "Confirm the behavior occurs reliably", "Thin the schedule to intermittent reinforcement"],
          explain: "You begin with dense CRF for fast acquisition, verify the behavior is established, then thin the schedule to make it durable."
        }
      ]
    },
    {
      id: "l66",
      title: "Fixed-Ratio Schedules",
      intro: "A fixed-ratio schedule delivers reinforcement after a set, unchanging number of responses, producing bursts of high-rate responding.",
      questions: [
        {
          type: "mcq",
          q: "On a fixed-ratio 10 (FR-10) schedule, reinforcement is delivered after:",
          choices: ["Exactly 10 responses", "An average of 10 responses", "The first response after 10 seconds", "10 seconds regardless of responding"],
          answer: 0,
          explain: "FR-10 means every 10th response is reinforced; the ratio is fixed and never changes."
        },
        {
          type: "truefalse",
          q: "Fixed-ratio schedules typically produce a post-reinforcement pause right after each reward is delivered.",
          answer: true,
          explain: "After earning reinforcement, the organism briefly pauses before starting the next run of responses; this is the post-reinforcement pause characteristic of FR schedules."
        },
        {
          type: "fill",
          q: "The brief break in responding that follows each reinforcer on a fixed-ratio schedule is called the post-reinforcement ____.",
          answer: "pause",
          accept: ["pause", "break"],
          explain: "The post-reinforcement pause is the pause after reinforcement before the organism resumes the ratio run."
        },
        {
          type: "mcq",
          q: "A factory paying workers for every 12 units assembled is an everyday example of which schedule?",
          choices: ["Variable-interval", "Fixed-interval", "Fixed-ratio", "Variable-ratio"],
          answer: 2,
          explain: "Piece-rate pay reinforces a fixed number of completed units (12), which is a fixed-ratio arrangement."
        },
        {
          type: "truefalse",
          q: "Stretching a fixed ratio too high too quickly can cause 'ratio strain,' where responding breaks down.",
          answer: true,
          explain: "If the required number of responses is raised too fast, the organism may stop responding altogether, a breakdown called ratio strain."
        },
        {
          type: "mcq",
          q: "Compared with lower ratios, higher fixed ratios generally produce:",
          choices: ["Shorter post-reinforcement pauses", "Longer post-reinforcement pauses", "No change in pausing", "Continuous reinforcement"],
          answer: 1,
          explain: "Larger ratios require more work per reward, which lengthens the post-reinforcement pause before the next run begins."
        },
        {
          type: "match",
          q: "Match each fixed-ratio term with its meaning.",
          pairs: [["FR-1", "Reinforcement after every response (continuous)"], ["Post-reinforcement pause", "Break in responding after each reward"], ["Ratio strain", "Breakdown of responding when the ratio is too high"]],
          explain: "These terms describe how fixed-ratio schedules behave, from the special case FR-1 to the pause and to strain at high ratios."
        }
      ]
    },
    {
      id: "l67",
      title: "Variable-Ratio Schedules",
      intro: "A variable-ratio schedule reinforces after an unpredictable number of responses, generating the highest and steadiest response rates of any schedule.",
      questions: [
        {
          type: "mcq",
          q: "On a variable-ratio 10 (VR-10) schedule, reinforcement occurs after:",
          choices: ["Exactly 10 responses each time", "An average of 10 responses that varies from trial to trial", "The first response after 10 seconds", "10 minutes have passed"],
          answer: 1,
          explain: "In VR-10 the number of responses per reinforcement varies around an average of 10, so it is unpredictable on any given occasion."
        },
        {
          type: "truefalse",
          q: "Slot machines and other gambling devices operate on a variable-ratio schedule.",
          answer: true,
          explain: "Slot machines pay off after an unpredictable number of plays, the defining feature of a variable-ratio schedule, which helps explain gambling's persistence."
        },
        {
          type: "mcq",
          q: "Variable-ratio schedules are best known for producing:",
          choices: ["Low, irregular response rates", "Very high, steady response rates", "A scalloped pattern", "Long pauses after every reward"],
          answer: 1,
          explain: "Because the next response could always be the one that pays off, VR schedules produce the highest and most consistent rates of responding."
        },
        {
          type: "fill",
          q: "Because the payoff could come at any moment, variable-ratio schedules produce almost no post-reinforcement ____.",
          answer: "pause",
          accept: ["pause", "pausing", "break"],
          explain: "Unlike fixed-ratio schedules, VR schedules show little or no post-reinforcement pause, since the very next response might be reinforced."
        },
        {
          type: "truefalse",
          q: "Behavior on a variable-ratio schedule extinguishes just as quickly as behavior on continuous reinforcement.",
          answer: false,
          explain: "VR behavior is highly resistant to extinction; unpredictable payoffs make the absence of reward hard to detect, so responding persists."
        },
        {
          type: "match",
          q: "Match each schedule with an everyday example.",
          pairs: [["Variable-ratio", "Playing a slot machine"], ["Fixed-ratio", "Being paid per 20 items packed"], ["Continuous reinforcement", "A vending machine that always dispenses"]],
          explain: "VR is unpredictable payoff (gambling), FR is a fixed count (piece work), and CRF rewards every response (a working vending machine)."
        },
        {
          type: "mcq",
          q: "Which feature of variable-ratio schedules best explains why gambling is so hard to quit?",
          choices: ["Rewards are guaranteed on every play", "Rewards come after a predictable count", "Reinforcement is unpredictable and resistant to extinction", "Reinforcement depends only on time passing"],
          answer: 2,
          explain: "Unpredictable reinforcement produces persistent, high-rate responding that resists extinction, which underlies compulsive gambling."
        }
      ]
    },
    {
      id: "l68",
      title: "Fixed-Interval Schedules",
      intro: "A fixed-interval schedule reinforces the first response after a fixed amount of time has elapsed, producing a distinctive scalloped pattern of responding.",
      questions: [
        {
          type: "mcq",
          q: "On a fixed-interval 60-second (FI-60s) schedule, reinforcement is available for:",
          choices: ["Every 60th response", "The first response after 60 seconds have passed", "An average of one response per 60 seconds", "Any response within the first 60 seconds"],
          answer: 1,
          explain: "In FI-60s the first response after the 60-second interval elapses is reinforced; responses made before the interval ends earn nothing."
        },
        {
          type: "fill",
          q: "The curved cumulative-record pattern of fixed-interval schedules, with slow responding early and rapid responding near the end, is called the fixed-interval ____.",
          answer: "scallop",
          accept: ["scallop", "scalloping", "scallop pattern"],
          explain: "The fixed-interval scallop shows little responding just after reinforcement and accelerating responding as the interval's end approaches."
        },
        {
          type: "truefalse",
          q: "On a fixed-interval schedule, responding is fastest right after reinforcement and slows as the interval's end approaches.",
          answer: false,
          explain: "It is the reverse: responding is slow just after reinforcement and accelerates as the end of the interval nears, creating the scallop."
        },
        {
          type: "mcq",
          q: "A student who studies little right after an exam and then intensifies studying as the next scheduled exam approaches illustrates which schedule?",
          choices: ["Variable-ratio", "Fixed-ratio", "Fixed-interval", "Variable-interval"],
          answer: 2,
          explain: "Exams occur at fixed times, and effort accelerates as each fixed deadline nears, mirroring the fixed-interval scallop."
        },
        {
          type: "truefalse",
          q: "Responses made early in a fixed interval, before the interval has elapsed, do not speed up delivery of the reinforcer.",
          answer: true,
          explain: "Reinforcement depends only on the first response after the time passes, so early responses are wasted and cannot hasten the reward."
        },
        {
          type: "order",
          q: "Order the phases of responding within a single fixed interval.",
          items: ["Reinforcement is delivered", "A pause with little responding", "Responding accelerates as the interval's end nears", "The first response after the interval is reinforced"],
          explain: "Each interval shows a post-reinforcement pause, then an accelerating scallop, ending when the first response after the interval earns the next reinforcer."
        },
        {
          type: "mcq",
          q: "The scalloped pattern of fixed-interval schedules suggests that organisms are sensitive to:",
          choices: ["The number of responses made", "The passage of time", "The identity of the reinforcer", "The presence of other organisms"],
          answer: 1,
          explain: "Because responding tracks the interval's timing rather than a response count, FI behavior shows sensitivity to elapsed time."
        }
      ]
    },
    {
      id: "l69",
      title: "Variable-Interval Schedules",
      intro: "A variable-interval schedule reinforces the first response after an unpredictable amount of time, producing steady, moderate rates of responding.",
      questions: [
        {
          type: "mcq",
          q: "On a variable-interval 30-second (VI-30s) schedule, reinforcement becomes available after:",
          choices: ["Exactly 30 seconds every time", "An unpredictable interval averaging 30 seconds", "The 30th response", "An average of 30 responses"],
          answer: 1,
          explain: "VI-30s makes reinforcement available for the first response after time intervals that vary around an average of 30 seconds."
        },
        {
          type: "truefalse",
          q: "Variable-interval schedules typically produce steady, moderate rates of responding without the scallop seen in fixed-interval schedules.",
          answer: true,
          explain: "Because the timing is unpredictable, the organism responds at a steady moderate pace and shows no fixed-interval scallop."
        },
        {
          type: "mcq",
          q: "Repeatedly checking your phone for a reply that could arrive at any unpredictable time is an everyday example of which schedule?",
          choices: ["Fixed-ratio", "Fixed-interval", "Variable-interval", "Continuous reinforcement"],
          answer: 2,
          explain: "A reply can arrive after an unpredictable amount of time, and the first check after it arrives is reinforced, matching a variable-interval schedule."
        },
        {
          type: "fill",
          q: "Like the other interval schedules, variable-interval reinforcement depends on the passage of ____ rather than the number of responses.",
          answer: "time",
          accept: ["time", "elapsed time"],
          explain: "Interval schedules make reinforcement contingent on time elapsing, so extra responding does not speed up the reward."
        },
        {
          type: "truefalse",
          q: "Variable-interval schedules produce higher response rates than variable-ratio schedules.",
          answer: false,
          explain: "Ratio schedules produce higher rates because faster responding earns more rewards; on interval schedules extra responses do not speed delivery, so VI rates stay below VR rates."
        },
        {
          type: "match",
          q: "Match each schedule with its typical response pattern.",
          pairs: [["Variable-interval", "Steady, moderate responding"], ["Fixed-interval", "Scalloped responding"], ["Variable-ratio", "Very high, steady responding"]],
          explain: "VI gives steady moderate rates, FI gives a scallop, and VR gives the highest steady rates of all."
        },
        {
          type: "mcq",
          q: "Why do variable-interval schedules produce such steady responding?",
          choices: ["Reinforcement is guaranteed on every response", "Responding faster always speeds up the reward", "Reinforcement can become available at any unpredictable moment", "Reinforcement depends on a fixed count"],
          answer: 2,
          explain: "Because reward can become available at any unpredictable time, the organism responds at a constant steady pace to catch it whenever it appears."
        }
      ]
    },
    {
      id: "l70",
      title: "Schedule Signatures",
      intro: "Each schedule of reinforcement leaves a characteristic signature on the cumulative record, letting us tell them apart by their response patterns.",
      questions: [
        {
          type: "mcq",
          q: "The device Skinner used to plot responses over time, whose slope reveals response rate, is the:",
          choices: ["Operant chamber", "Cumulative recorder", "Shuttle box", "Puzzle box"],
          answer: 1,
          explain: "The cumulative recorder draws an ever-rising line whose steepness represents the rate of responding over time."
        },
        {
          type: "truefalse",
          q: "On a cumulative record, a steeper slope indicates a higher rate of responding.",
          answer: true,
          explain: "The cumulative recorder's pen advances with each response, so a steeper line means responses are occurring more rapidly."
        },
        {
          type: "match",
          q: "Match each schedule with its characteristic cumulative-record signature.",
          pairs: [["Fixed-ratio", "High rate with a pause after each reinforcer"], ["Variable-ratio", "Very high, steady rate with no pauses"], ["Fixed-interval", "Scalloped curve"], ["Variable-interval", "Steady, moderate rate"]],
          explain: "FR shows a stepwise pause-and-run pattern, VR a high steady line, FI a scallop, and VI a moderate steady line."
        },
        {
          type: "mcq",
          q: "In general, which class of schedules produces higher response rates?",
          choices: ["Interval schedules", "Ratio schedules", "Both produce identical rates", "Continuous reinforcement only"],
          answer: 1,
          explain: "Ratio schedules tie reinforcement to the number of responses, so faster responding earns more rewards, yielding higher rates than interval schedules."
        },
        {
          type: "truefalse",
          q: "A scalloped cumulative record is the signature of a variable-ratio schedule.",
          answer: false,
          explain: "The scallop is the signature of a fixed-interval schedule; variable-ratio schedules show a high, steady line with no scallop."
        },
        {
          type: "order",
          q: "Order these schedules from lowest to highest typical response rate.",
          items: ["Fixed-interval", "Variable-interval", "Fixed-ratio", "Variable-ratio"],
          explain: "Interval schedules generally yield lower rates than ratio schedules, and variable-ratio produces the highest steady rate of all."
        },
        {
          type: "fill",
          q: "Because faster responding does not speed up reinforcement on ____ schedules, they produce lower response rates than ratio schedules.",
          answer: "interval",
          accept: ["interval", "time-based"],
          explain: "On interval schedules reinforcement depends on time, so responding faster earns nothing extra, keeping rates lower than on ratio schedules."
        }
      ]
    },
    {
      id: "l71",
      title: "Partial Reinforcement Extinction Effect",
      intro: "The partial reinforcement extinction effect shows that behaviors rewarded only some of the time resist extinction far better than continuously rewarded ones.",
      questions: [
        {
          type: "mcq",
          q: "The partial reinforcement extinction effect (PREE) states that behavior is more resistant to extinction when it was previously reinforced:",
          choices: ["Continuously, every time", "Intermittently, only some of the time", "Never at all", "Only by punishment"],
          answer: 1,
          explain: "PREE means intermittently reinforced behavior persists longer during extinction than continuously reinforced behavior."
        },
        {
          type: "truefalse",
          q: "Behavior maintained on a partial (intermittent) schedule extinguishes more slowly than behavior maintained on continuous reinforcement.",
          answer: true,
          explain: "This slower extinction after intermittent reinforcement is precisely the partial reinforcement extinction effect."
        },
        {
          type: "fill",
          q: "The finding that intermittently reinforced behavior is harder to extinguish is abbreviated ____.",
          answer: "pree",
          accept: ["pree", "the pree", "partial reinforcement extinction effect"],
          explain: "PREE stands for the partial reinforcement extinction effect, the greater persistence of intermittently reinforced behavior."
        },
        {
          type: "mcq",
          q: "One explanation of the PREE is the discrimination hypothesis, which says intermittent reinforcement makes it harder to:",
          choices: ["Detect that reinforcement has stopped", "Perform the response at all", "Remember the response", "Receive any reward"],
          answer: 0,
          explain: "When rewards were already sporadic, the shift to no reward during extinction is hard to discriminate, so responding continues longer."
        },
        {
          type: "truefalse",
          q: "Amsel's frustration theory explains the PREE by proposing that organisms learn to keep responding even amid the frustration caused by non-reward.",
          answer: true,
          explain: "Abram Amsel's frustration theory holds that intermittent non-reward conditions the organism to keep responding despite frustration, boosting extinction resistance."
        },
        {
          type: "mcq",
          q: "A parent who 'gives in' only occasionally to a child's tantrums is unintentionally making the tantrums:",
          choices: ["Extinguish quickly", "More resistant to extinction", "Impossible to perform", "Reinforced continuously"],
          answer: 1,
          explain: "Occasional reinforcement is an intermittent schedule, and by the PREE it makes the tantrums more persistent and hard to extinguish."
        },
        {
          type: "match",
          q: "Match each account of the PREE with its core idea.",
          pairs: [["Discrimination hypothesis", "Extinction is hard to tell apart from lean reinforcement"], ["Frustration theory (Amsel)", "Responding is conditioned to persist despite non-reward"], ["Continuous reinforcement", "Makes the switch to no reward easy to detect"]],
          explain: "The discrimination and frustration accounts explain why intermittent schedules resist extinction, while continuous reinforcement makes non-reward obvious and extinction fast."
        }
      ]
    },
    {
      id: "l72",
      title: "Complex Schedules",
      intro: "Complex schedules combine simple schedules through concurrent, chained, and multiple arrangements to model more realistic behavior.",
      questions: [
        {
          type: "mcq",
          q: "A concurrent schedule is one in which:",
          choices: ["Two or more schedules are available at the same time and the organism chooses between them", "Two schedules must be completed in a fixed sequence", "One schedule alternates with another signaled by different stimuli", "Reinforcement is delivered continuously"],
          answer: 0,
          explain: "Concurrent schedules present two or more schedules simultaneously, letting the organism distribute responses (choice) between them."
        },
        {
          type: "truefalse",
          q: "Herrnstein's matching law, derived from concurrent schedules, states that the proportion of responses to an option matches the proportion of reinforcement it provides.",
          answer: true,
          explain: "Richard Herrnstein's 1961 matching law found that relative response rates match relative reinforcement rates across concurrently available options."
        },
        {
          type: "mcq",
          q: "In a chained schedule, each component is signaled by a distinct stimulus and its completion leads to:",
          choices: ["Immediate primary reinforcement at every step", "The next component, with primary reinforcement only after the final link", "Two options available at once", "Random alternation of unsignaled schedules"],
          answer: 1,
          explain: "Chained schedules require components in a fixed order, each with its own stimulus, and the primary reinforcer arrives only after the last link."
        },
        {
          type: "fill",
          q: "A ____ schedule presents two or more simple schedules in alternation, each signaled by its own distinctive stimulus, without requiring them in a set sequence.",
          answer: "multiple",
          accept: ["multiple", "mult"],
          explain: "In a multiple schedule, different component schedules alternate, each under its own discriminative stimulus, unlike a chain, which requires a fixed order toward one final reinforcer."
        },
        {
          type: "truefalse",
          q: "A tandem schedule is like a chained schedule except that the components are NOT signaled by different stimuli.",
          answer: true,
          explain: "A tandem schedule sequences components like a chain but without distinctive stimuli marking each link; a mixed schedule is the unsignaled counterpart of a multiple schedule."
        },
        {
          type: "match",
          q: "Match each complex schedule with its defining feature.",
          pairs: [["Concurrent", "Two schedules available simultaneously (choice)"], ["Chained", "Sequential components, each with a distinct stimulus, one final reward"], ["Multiple", "Alternating components, each with its own stimulus"]],
          explain: "Concurrent schedules involve simultaneous choice, chained schedules a signaled sequence toward one reinforcer, and multiple schedules signaled alternation."
        },
        {
          type: "mcq",
          q: "The matching law is most directly associated with which type of complex schedule?",
          choices: ["Chained schedules", "Multiple schedules", "Concurrent schedules", "Tandem schedules"],
          answer: 2,
          explain: "The matching law describes how responding is distributed across concurrently available schedules, so it is tied to concurrent schedules."
        }
      ]
    }
  ]
});
