window.ACADEMY.addUnit("content", {
  id: "unit-1",
  title: "YouTube Foundations & the Algorithm",
  color: "#ff0033",
  icon: "▶️",
  description: "How YouTube actually decides what to show, and the two numbers that drive everything.",
  lessons: [
    {
      id: "l1",
      title: "What the Algorithm Wants",
      intro: "YouTube's goal is viewer satisfaction and watch time; it recommends videos that keep people happy on the platform.",
      questions: [
        {
          type: "mcq",
          q: "YouTube's recommendation system mainly tries to:",
          choices: [
            "Keep viewers watching and satisfied on the platform",
            "Reward whoever uploads most often",
            "Promote the newest channels only",
            "Show every video to everyone equally"
          ],
          answer: 0,
          explain: "The system optimizes for viewer satisfaction and time spent, not upload count."
        },
        {
          type: "truefalse",
          q: "YouTube recommends videos it predicts a specific viewer will want to watch.",
          answer: true,
          explain: "Recommendations are personalized to each viewer's predicted interest."
        },
        {
          type: "fill",
          q: "The algorithm is really trying to serve the ____, not the creator.",
          answer: "viewer",
          accept: ["viewer", "audience", "user"],
          explain: "It optimizes for the viewer's satisfaction, which in turn rewards creators."
        },
        {
          type: "match",
          q: "Match the myth to the reality.",
          pairs: [
            ["'The algorithm hates small channels'", "It shows any video people click and watch"],
            ["'Upload daily or die'", "Quality and satisfaction matter more"],
            ["'Tags drive views'", "Packaging and retention matter far more"]
          ],
          explain: "The system rewards satisfying videos, not size, frequency, or tags."
        },
        {
          type: "truefalse",
          q: "A brand-new channel's video can be recommended widely if viewers respond well to it.",
          answer: true,
          explain: "YouTube tests videos with small audiences and expands reach when they perform."
        },
        {
          type: "mcq",
          q: "The best way to 'beat the algorithm' is to:",
          choices: [
            "Make videos people genuinely want to click and finish",
            "Use hidden tricks and hacks",
            "Buy views",
            "Spam upload"
          ],
          answer: 0,
          explain: "Serving the viewer is the durable strategy; there is no magic hack."
        }
      ]
    },
    {
      id: "l2",
      title: "CTR and Watch Time",
      intro: "Two numbers dominate: click-through rate (do people click?) and watch time (do they stay?).",
      questions: [
        {
          type: "match",
          q: "Match each metric to what it measures.",
          pairs: [
            ["Click-through rate (CTR)", "How often people click after seeing it"],
            ["Watch time", "Total time viewers spend watching"],
            ["Average view duration", "How long the typical viewer stays"]
          ],
          explain: "CTR is the click; watch time and AVD are how long they stay."
        },
        {
          type: "mcq",
          q: "CTR (click-through rate) is driven mostly by:",
          choices: [
            "Your title and thumbnail (the packaging)",
            "Your upload time of day",
            "The number of tags",
            "Your subscriber count alone"
          ],
          answer: 0,
          explain: "Packaging (title + thumbnail) determines whether an impression becomes a click."
        },
        {
          type: "truefalse",
          q: "A great thumbnail with a weak video can still fail because people click but do not stay.",
          answer: true,
          explain: "High CTR without retention signals a mismatch; both numbers must work together."
        },
        {
          type: "fill",
          q: "The percentage of people who click a video after seeing it is the click-through ____.",
          answer: "rate",
          accept: ["rate"],
          explain: "CTR stands for click-through rate."
        },
        {
          type: "mcq",
          q: "Why does YouTube care about watch time?",
          choices: [
            "Time watched signals the video satisfied the viewer",
            "It measures how many tags you used",
            "It counts your subscribers",
            "It tracks your upload streak"
          ],
          answer: 0,
          explain: "Sustained watching is a strong signal of viewer satisfaction."
        },
        {
          type: "truefalse",
          q: "Improving both CTR and watch time tends to grow a video's reach.",
          answer: true,
          explain: "Clicks plus retention together drive YouTube to recommend a video more."
        }
      ]
    },
    {
      id: "l3",
      title: "Impressions and Reach",
      intro: "An impression is a chance to be clicked; how many convert decides whether reach grows.",
      questions: [
        {
          type: "mcq",
          q: "An impression on YouTube is:",
          choices: [
            "A time your thumbnail was shown to someone",
            "A completed view",
            "A subscription",
            "A comment"
          ],
          answer: 0,
          explain: "An impression is a display of your thumbnail, not yet a click."
        },
        {
          type: "truefalse",
          q: "More impressions with a low CTR can mean your packaging is not compelling.",
          answer: true,
          explain: "If you get shown a lot but rarely clicked, the title/thumbnail need work."
        },
        {
          type: "fill",
          q: "Each time your thumbnail is shown to a viewer counts as an ____.",
          answer: "impression",
          accept: ["impression"],
          explain: "A shown thumbnail is an impression."
        },
        {
          type: "match",
          q: "Order the funnel from most to least common.",
          pairs: [
            ["Impressions", "Times shown"],
            ["Clicks", "Times chosen"],
            ["Watch time", "Time actually spent"]
          ],
          explain: "Many impressions become fewer clicks, which become watch time."
        },
        {
          type: "truefalse",
          q: "If a video performs well, YouTube tends to give it more impressions.",
          answer: true,
          explain: "Good early performance earns wider distribution and more impressions."
        },
        {
          type: "mcq",
          q: "A video with high impressions but very low CTR usually needs:",
          choices: [
            "Better title and thumbnail",
            "More tags",
            "A longer description",
            "A different upload time"
          ],
          answer: 0,
          explain: "Low CTR at high impressions points squarely at packaging."
        }
      ]
    },
    {
      id: "l4",
      title: "How Videos Get Discovered",
      intro: "Views come from browse, search, suggested videos, and external sources, each with its own logic.",
      questions: [
        {
          type: "match",
          q: "Match each traffic source to what it is.",
          pairs: [
            ["Browse features", "Home feed and recommendations"],
            ["Search", "Viewers typing a query"],
            ["Suggested videos", "Shown beside/after other videos"],
            ["External", "Links from outside YouTube"]
          ],
          explain: "Browse, search, suggested, and external are the main discovery paths."
        },
        {
          type: "mcq",
          q: "Search traffic rewards videos that:",
          choices: [
            "Clearly match what people are searching for",
            "Have the most tags",
            "Are the newest uploads",
            "Have the longest titles"
          ],
          answer: 0,
          explain: "Search favors relevance to the query and viewer satisfaction."
        },
        {
          type: "truefalse",
          q: "Suggested videos are a major source of views for many channels.",
          answer: true,
          explain: "The suggested column and end-of-video recommendations drive lots of traffic."
        },
        {
          type: "fill",
          q: "The home page recommendations fall under the ____ traffic source.",
          answer: "browse",
          accept: ["browse", "browse features"],
          explain: "Home-feed recommendations are 'Browse features'."
        },
        {
          type: "truefalse",
          q: "A search-focused video and a browse-focused video can be packaged differently.",
          answer: true,
          explain: "Search rewards clear keyword-matching; browse rewards curiosity and appeal."
        },
        {
          type: "mcq",
          q: "Checking your traffic sources in analytics helps you:",
          choices: [
            "Understand where views come from and lean into what works",
            "Increase your resolution",
            "Change your camera",
            "Edit faster"
          ],
          answer: 0,
          explain: "Knowing your sources tells you how viewers find you and what to optimize."
        }
      ]
    },
    {
      id: "l5",
      title: "Session Time",
      intro: "YouTube values videos that keep viewers on the platform afterward, not just on your video.",
      questions: [
        {
          type: "mcq",
          q: "Session time refers to:",
          choices: [
            "How long a viewer stays on YouTube overall, including after your video",
            "How long you spend editing",
            "Your upload frequency",
            "The length of your intro"
          ],
          answer: 0,
          explain: "Session time is the viewer's whole visit, which YouTube wants to extend."
        },
        {
          type: "truefalse",
          q: "A video that sends viewers deeper into YouTube can be favored by the system.",
          answer: true,
          explain: "Content that starts or extends a viewing session is valuable to YouTube."
        },
        {
          type: "fill",
          q: "The total time a viewer spends on YouTube in one visit is their ____ time.",
          answer: "session",
          accept: ["session"],
          explain: "This whole-visit metric is session time."
        },
        {
          type: "match",
          q: "Match the outcome to its effect on session time.",
          pairs: [
            ["Viewer keeps watching more videos", "Longer session"],
            ["Viewer leaves the platform", "Shorter session"]
          ],
          explain: "Keeping people on YouTube extends the session."
        },
        {
          type: "truefalse",
          q: "End screens and playlists can help extend session time.",
          answer: true,
          explain: "Guiding viewers to another video keeps the session going."
        },
        {
          type: "mcq",
          q: "A practical way to support session time is to:",
          choices: [
            "Point viewers to a relevant next video",
            "Tell them to close the app",
            "Add more tags",
            "Make the intro longer"
          ],
          answer: 0,
          explain: "Suggesting a great next watch keeps the viewer on YouTube."
        }
      ]
    },
    {
      id: "l6",
      title: "Views vs. Subscribers",
      intro: "In the modern feed, a video's own appeal matters more than your subscriber count.",
      questions: [
        {
          type: "mcq",
          q: "In today's YouTube, what a video is shown to viewers depends most on:",
          choices: [
            "The video's own packaging and performance",
            "Only your subscriber count",
            "How many videos you have uploaded total",
            "The day of the week"
          ],
          answer: 0,
          explain: "The feed is video-first; a strong video can outperform a big subscriber base."
        },
        {
          type: "truefalse",
          q: "Subscribers do not guarantee views; many subscribers may never see a given video.",
          answer: true,
          explain: "Subscribers are potential reach, but the feed still decides based on performance."
        },
        {
          type: "fill",
          q: "The modern YouTube home feed is ____-first, meaning each video is judged on its own.",
          answer: "video",
          accept: ["video"],
          explain: "YouTube recommends individual videos, not just channels."
        },
        {
          type: "match",
          q: "Match the metric to what it really tells you.",
          pairs: [
            ["Subscribers", "People who opted into your channel"],
            ["Views", "How a specific video actually did"],
            ["CTR + retention", "Whether that video earns more reach"]
          ],
          explain: "Subs are a soft signal; per-video performance drives reach."
        },
        {
          type: "truefalse",
          q: "Chasing subscriber count is more important than making videos people finish.",
          answer: false,
          explain: "Finished, satisfying videos drive growth; subs follow good videos, not the reverse."
        },
        {
          type: "mcq",
          q: "A healthy mindset for a new creator is to:",
          choices: [
            "Focus on making each video click-worthy and satisfying",
            "Only celebrate subscriber milestones",
            "Ignore retention entirely",
            "Upload without watching analytics"
          ],
          answer: 0,
          explain: "Per-video quality compounds into subscribers and long-term growth."
        }
      ]
    },
    {
      id: "l7",
      title: "Shorts vs. Long-Form",
      intro: "Shorts and long-form serve different goals; understand what each is good at.",
      questions: [
        {
          type: "match",
          q: "Match each format to its typical strength.",
          pairs: [
            ["Shorts", "Fast reach and discovery"],
            ["Long-form", "Deep watch time and connection"]
          ],
          explain: "Shorts are great for reach; long-form builds depth and revenue."
        },
        {
          type: "mcq",
          q: "A common limitation of Shorts is that they:",
          choices: [
            "Often convert to loyal subscribers and revenue less efficiently than long-form",
            "Cannot be watched on phones",
            "Are never recommended",
            "Require a green screen"
          ],
          answer: 0,
          explain: "Shorts can rack up views but often convert to loyalty and revenue less than long-form."
        },
        {
          type: "truefalse",
          q: "Shorts can be a discovery tool that funnels viewers toward your long-form videos.",
          answer: true,
          explain: "Many creators use Shorts to attract viewers who then watch long-form."
        },
        {
          type: "fill",
          q: "Vertical, under-a-minute videos on YouTube are called ____.",
          answer: "shorts",
          accept: ["shorts", "short"],
          explain: "YouTube's short-form vertical videos are Shorts."
        },
        {
          type: "truefalse",
          q: "Long-form videos generally earn more ad revenue per view than Shorts.",
          answer: true,
          explain: "Long-form monetizes watch time more richly than the Shorts revenue pool."
        },
        {
          type: "mcq",
          q: "A sensible strategy for many creators is to:",
          choices: [
            "Use Shorts for reach and long-form for depth and revenue",
            "Only ever post Shorts",
            "Only ever post long-form and ignore Shorts",
            "Post random lengths with no plan"
          ],
          answer: 0,
          explain: "Combining formats plays to each one's strength."
        }
      ]
    },
    {
      id: "l8",
      title: "The Growth Mindset",
      intro: "Sustainable YouTube growth comes from iteration: make, measure, learn, and improve.",
      questions: [
        {
          type: "order",
          q: "Order the healthy creator improvement loop.",
          items: [
            "Publish a video",
            "Study the analytics",
            "Learn what worked and what did not",
            "Apply the lesson to the next video"
          ],
          explain: "Publish, measure, learn, improve, and repeat."
        },
        {
          type: "mcq",
          q: "The most reliable path to growth is:",
          choices: [
            "Consistently improving based on what your data shows",
            "Hoping one video goes viral by luck",
            "Copying trends you do not understand",
            "Buying subscribers"
          ],
          answer: 0,
          explain: "Steady, data-informed iteration beats chasing luck."
        },
        {
          type: "truefalse",
          q: "Most successful channels improved gradually rather than exploding overnight.",
          answer: true,
          explain: "Overnight success is rare; sustained iteration is the norm."
        },
        {
          type: "fill",
          q: "Treat each video as an ____ you learn from, not a make-or-break moment.",
          answer: "experiment",
          accept: ["experiment"],
          explain: "Framing videos as experiments keeps you learning and improving."
        },
        {
          type: "match",
          q: "Match the mindset to its outcome.",
          pairs: [
            ["Iterate on data", "Steady improvement"],
            ["Chase random trends", "Inconsistent results"],
            ["Give up after one flop", "No learning at all"]
          ],
          explain: "A learning loop compounds; quitting or guessing does not."
        },
        {
          type: "truefalse",
          q: "Consistency plus improvement matters more than any single upload.",
          answer: true,
          explain: "The trend across many videos, not one hit, defines a channel's growth."
        },
        {
          type: "mcq",
          q: "A good question to ask after every video is:",
          choices: [
            "What can I learn to make the next one better?",
            "How can I blame the algorithm?",
            "Should I quit?",
            "How do I get more tags?"
          ],
          answer: 0,
          explain: "Focusing on the next improvement turns every video into progress."
        }
      ]
    }
  ]
});
