window.ACADEMY.addUnit("content", {
  id: "unit-8",
  title: "Analytics, Monetization & What Works",
  color: "#ff0033",
  icon: "📊",
  description: "Read the data that matters, turn a channel into income, and build a durable creative career.",
  lessons: [
    {
      id: "l57",
      title: "The Metrics That Matter",
      intro: "Focus on the few numbers that predict growth: CTR, average view duration, and retention.",
      questions: [
        {
          type: "match",
          q: "Match each key metric to what it tells you.",
          pairs: [
            ["Click-through rate", "Is the packaging working?"],
            ["Average view duration", "Are people staying?"],
            ["Retention graph", "Where are they leaving?"]
          ],
          explain: "CTR, AVD, and retention are the core diagnostic trio."
        },
        {
          type: "mcq",
          q: "Which metric best indicates your packaging is compelling?",
          choices: [
            "Click-through rate",
            "Number of tags",
            "Upload time",
            "Description length"
          ],
          answer: 0,
          explain: "CTR reflects how well the title and thumbnail earn the click."
        },
        {
          type: "truefalse",
          q: "Average view duration shows how long the typical viewer watches.",
          answer: true,
          explain: "AVD is the average time viewers spend on the video."
        },
        {
          type: "fill",
          q: "Average view ____ measures how long the typical viewer watches.",
          answer: "duration",
          accept: ["duration"],
          explain: "This is average view duration (AVD)."
        },
        {
          type: "truefalse",
          q: "Chasing vanity metrics like raw likes tells you more than CTR and retention.",
          answer: false,
          explain: "CTR and retention are far more diagnostic than vanity counts."
        },
        {
          type: "mcq",
          q: "The most actionable place to improve after a video is:",
          choices: [
            "The metric that is weakest (packaging or retention)",
            "The metric that is strongest, to double down on it",
            "The subscriber count, since it sums up the rest",
            "The total view count, since it reflects the rest"
          ],
          answer: 0,
          explain: "Fix the weakest link: low CTR means packaging, low retention means content."
        }
      ]
    },
    {
      id: "l58",
      title: "Diagnosing a Video",
      intro: "Low CTR and low retention point to different problems; the metrics tell you what to fix.",
      questions: [
        {
          type: "match",
          q: "Match the symptom to the likely fix.",
          pairs: [
            ["Low CTR", "Better title/thumbnail"],
            ["High CTR, low retention", "Fix the content/hook"],
            ["Low impressions", "Rethink the idea/topic"]
          ],
          explain: "Each metric pattern points to a specific area to improve."
        },
        {
          type: "mcq",
          q: "A video with strong CTR but weak retention suggests:",
          choices: [
            "The packaging worked but the content did not deliver",
            "The thumbnail was weak, but the content was strong",
            "Few people saw the video in their feed at all",
            "The upload time was wrong for most of your audience"
          ],
          answer: 0,
          explain: "People clicked but left, so the content or hook underdelivered."
        },
        {
          type: "truefalse",
          q: "Low impressions can mean YouTube is not yet confident enough to show the video widely.",
          answer: true,
          explain: "Weak early signals or a niche topic can limit impressions."
        },
        {
          type: "fill",
          q: "Using metrics to find what went wrong is called ____ the video.",
          answer: "diagnosing",
          accept: ["diagnosing", "diagnosis"],
          explain: "This analysis is diagnosing the video."
        },
        {
          type: "truefalse",
          q: "One weak video means you should immediately quit your channel.",
          answer: false,
          explain: "A single result is noise; diagnose, learn, and keep going."
        },
        {
          type: "mcq",
          q: "The value of diagnosis is that it:",
          choices: [
            "Turns each result into a specific lesson for next time",
            "Tells you exactly how many views the next video will get",
            "Lets you blame the algorithm when a video underperforms",
            "Shows you which competitor videos to copy next"
          ],
          answer: 0,
          explain: "Diagnosis converts outcomes into actionable improvements."
        }
      ]
    },
    {
      id: "l59",
      title: "Understanding Your Audience",
      intro: "Audience analytics reveal who watches, when, and what else they enjoy, guiding your strategy.",
      questions: [
        {
          type: "mcq",
          q: "Audience analytics can show you:",
          choices: [
            "When your viewers are online and what else they watch",
            "The names and contact details of each of your viewers",
            "Which of your viewers will cancel their subscription",
            "How each viewer rated your video out of five stars"
          ],
          answer: 0,
          explain: "It reveals viewing times, demographics, and related interests."
        },
        {
          type: "truefalse",
          q: "Knowing when your audience is active can inform when you publish.",
          answer: true,
          explain: "Publishing near peak activity can help a video get early traction."
        },
        {
          type: "fill",
          q: "Seeing what else your viewers watch helps you find new content ____.",
          answer: "ideas",
          accept: ["ideas", "opportunities"],
          explain: "Related viewing reveals ideas your audience already wants."
        },
        {
          type: "match",
          q: "Match the audience insight to its use.",
          pairs: [
            ["Peak online times", "When to publish"],
            ["Other channels watched", "Collab and idea targets"],
            ["Returning viewers", "How loyal your audience is"]
          ],
          explain: "Audience data guides timing, ideas, and loyalty strategy."
        },
        {
          type: "truefalse",
          q: "Returning-viewer data shows how well you retain a loyal audience over time.",
          answer: true,
          explain: "Returning viewers indicate genuine loyalty to your channel."
        },
        {
          type: "mcq",
          q: "Audience insights are most useful for:",
          choices: [
            "Shaping content and timing around real viewers",
            "Proving to sponsors that every viewer is a buyer",
            "Replacing retention data when judging videos",
            "Finding which viewers to message directly"
          ],
          answer: 0,
          explain: "They ground your decisions in who is actually watching."
        }
      ]
    },
    {
      id: "l60",
      title: "The Path to Monetization",
      intro: "The YouTube Partner Program has thresholds; reaching them unlocks ad revenue and more.",
      questions: [
        {
          type: "mcq",
          q: "The YouTube Partner Program (YPP) generally requires:",
          choices: [
            "Meeting subscriber and watch-time (or Shorts views) thresholds",
            "Paying for a YouTube Premium membership on the channel's account",
            "Publishing at least one hundred videos over the past twelve months",
            "Receiving a personal invitation from a YouTube partner manager"
          ],
          answer: 0,
          explain: "YPP eligibility is based on subscriber and watch-time/Shorts thresholds."
        },
        {
          type: "truefalse",
          q: "Joining the Partner Program is what enables earning ad revenue on your videos.",
          answer: true,
          explain: "YPP unlocks ad revenue and other monetization features."
        },
        {
          type: "fill",
          q: "The program that lets creators earn from YouTube is the YouTube ____ Program.",
          answer: "partner",
          accept: ["partner"],
          explain: "It is the YouTube Partner Program (YPP)."
        },
        {
          type: "match",
          q: "Match the requirement type to what it counts.",
          pairs: [
            ["Subscribers", "Your audience size"],
            ["Watch hours", "Long-form watch time"],
            ["Shorts views", "Short-form performance"]
          ],
          explain: "Thresholds combine subscribers with watch time or Shorts views."
        },
        {
          type: "truefalse",
          q: "You must be monetized before your videos are allowed to get any views.",
          answer: false,
          explain: "Videos get views regardless; monetization just lets you earn from them."
        },
        {
          type: "mcq",
          q: "A healthy way to approach monetization is to:",
          choices: [
            "Focus on making good videos; the thresholds follow",
            "Pick topics only by which ones pay the highest ad rates",
            "Post as many videos as you can to hit the thresholds",
            "Turn on every income stream before you have an audience"
          ],
          answer: 0,
          explain: "Great videos build the audience and watch time that unlock monetization."
        }
      ]
    },
    {
      id: "l61",
      title: "How Ad Revenue Works",
      intro: "Ad revenue depends on views, watch time, and rates like CPM and RPM, which vary by niche.",
      questions: [
        {
          type: "match",
          q: "Match the term to its meaning.",
          pairs: [
            ["CPM", "What advertisers pay per 1,000 ad views"],
            ["RPM", "What you earn per 1,000 video views (after the split)"],
            ["Watch time", "Fuels more ad opportunities"]
          ],
          explain: "CPM is the advertiser rate; RPM is your actual take per 1,000 views."
        },
        {
          type: "mcq",
          q: "Ad rates (CPM/RPM) vary a lot mainly by:",
          choices: [
            "Niche, audience, and season",
            "Video quality and resolution",
            "Upload time and day of week",
            "Number of tags and hashtags"
          ],
          answer: 0,
          explain: "Finance or tech niches often pay more than others, and rates rise near the holidays."
        },
        {
          type: "truefalse",
          q: "RPM reflects your earnings per 1,000 views after YouTube's share.",
          answer: true,
          explain: "RPM is your revenue per 1,000 views, net of the platform's cut."
        },
        {
          type: "fill",
          q: "Your earnings per 1,000 views after the split is your ____.",
          answer: "rpm",
          accept: ["rpm"],
          explain: "This is RPM (revenue per mille)."
        },
        {
          type: "truefalse",
          q: "Every niche earns exactly the same ad rate.",
          answer: false,
          explain: "Rates vary widely by niche, audience, and time of year."
        },
        {
          type: "mcq",
          q: "A creator wanting higher ad revenue might:",
          choices: [
            "Grow watch time and consider higher-value niches or longer videos",
            "Switch to posting only Shorts, since they get the most views by far",
            "Add more tags so the videos match more of the high-paying ad keywords",
            "Upload in the summer, when ad rates are highest for most channels"
          ],
          answer: 0,
          explain: "More watch time and higher-value content improve ad earnings."
        }
      ]
    },
    {
      id: "l62",
      title: "Beyond Ads: Diversifying",
      intro: "Ad revenue is just one stream; sponsorships, products, memberships, and affiliates add stability.",
      questions: [
        {
          type: "match",
          q: "Match each income stream to what it is.",
          pairs: [
            ["Sponsorships", "Brands pay to be featured"],
            ["Affiliate links", "Commission on referred sales"],
            ["Memberships", "Fans pay for perks"],
            ["Own products", "You sell your own goods/courses"]
          ],
          explain: "Sponsors, affiliates, memberships, and products diversify income."
        },
        {
          type: "mcq",
          q: "Relying only on ad revenue is risky because:",
          choices: [
            "Rates fluctuate and a single stream is fragile",
            "Ad revenue is capped past a set view count",
            "YouTube keeps all ad revenue in year one",
            "Ads are only shown in a few countries"
          ],
          answer: 0,
          explain: "Ad rates swing seasonally; multiple streams add stability."
        },
        {
          type: "truefalse",
          q: "Many full-time creators earn more from sponsorships or products than from ads.",
          answer: true,
          explain: "Direct deals and products often outearn ad revenue for established creators."
        },
        {
          type: "fill",
          q: "Earning from several sources instead of one is called ____ your income.",
          answer: "diversifying",
          accept: ["diversifying", "diversify"],
          explain: "Spreading across streams is diversifying."
        },
        {
          type: "truefalse",
          q: "An engaged, trusting audience makes non-ad income streams more effective.",
          answer: true,
          explain: "Trust drives sponsorships, product sales, and memberships."
        },
        {
          type: "mcq",
          q: "A sensible long-term monetization mindset is to:",
          choices: [
            "Build trust, then add multiple aligned income streams",
            "Add affiliate links and sponsors from video one",
            "Rely on ads alone, since other streams hurt trust",
            "Sell products early, then build trust with viewers"
          ],
          answer: 0,
          explain: "Trust first, then layer in aligned, diverse revenue."
        }
      ]
    },
    {
      id: "l63",
      title: "Avoiding Burnout",
      intro: "A long YouTube career depends on sustainable systems and protecting your motivation.",
      questions: [
        {
          type: "mcq",
          q: "A major cause of creators quitting is:",
          choices: [
            "Burnout from an unsustainable pace or pressure",
            "Running out of video ideas after the first year",
            "Lacking the expensive gear that big creators use",
            "A lack of natural talent for being on camera"
          ],
          answer: 0,
          explain: "Burnout, not lack of talent, ends many channels."
        },
        {
          type: "truefalse",
          q: "Building systems like batching filming can make the workload more sustainable.",
          answer: true,
          explain: "Batching and templates reduce repeated effort and stress."
        },
        {
          type: "fill",
          q: "Filming several videos in one session is called ____ your content.",
          answer: "batching",
          accept: ["batching", "batch"],
          explain: "Producing in bulk is batching."
        },
        {
          type: "match",
          q: "Match the habit to how it protects you.",
          pairs: [
            ["Batch production", "Less repeated setup"],
            ["Sustainable schedule", "Avoids overload"],
            ["Breaks and boundaries", "Protects motivation"]
          ],
          explain: "Systems and boundaries keep the work sustainable."
        },
        {
          type: "truefalse",
          q: "Comparing yourself constantly to huge channels can harm your motivation.",
          answer: true,
          explain: "Endless comparison breeds discouragement; focus on your own progress."
        },
        {
          type: "mcq",
          q: "The key to a lasting channel is:",
          choices: [
            "A pace and system you can maintain for years",
            "Uploading every day for the first year, then easing off",
            "Jumping on every trend to keep growth moving",
            "Pushing through burnout to keep up your streak"
          ],
          answer: 0,
          explain: "Sustainability is what lets consistency and growth compound."
        }
      ]
    },
    {
      id: "l64",
      title: "What Actually Works",
      intro: "Pulling it together: serve the viewer, package honestly, hold attention, and improve every video.",
      questions: [
        {
          type: "order",
          q: "Order the loop that reliably grows a channel.",
          items: [
            "Pick a validated, packaged idea",
            "Make a video that delivers on its promise",
            "Study the analytics",
            "Apply the lessons to the next video"
          ],
          explain: "Idea, deliver, measure, improve, repeat."
        },
        {
          type: "mcq",
          q: "The single most durable principle for YouTube success is:",
          choices: [
            "Genuinely serve and satisfy the viewer",
            "Learn and exploit the algorithm's latest hacks",
            "Post as often as humanly possible",
            "Follow every trend the moment it starts"
          ],
          answer: 0,
          explain: "Everything that works ladders up to satisfying the viewer."
        },
        {
          type: "truefalse",
          q: "Consistency, honest packaging, and iteration matter more than any single hack.",
          answer: true,
          explain: "Durable growth comes from fundamentals repeated over time, not tricks."
        },
        {
          type: "fill",
          q: "The whole strategy comes down to serving the ____ and improving each video.",
          answer: "viewer",
          accept: ["viewer", "audience"],
          explain: "Serving the viewer is the throughline of everything that works."
        },
        {
          type: "match",
          q: "Match the pillar to its role in what works.",
          pairs: [
            ["Strong packaging", "Earns the click"],
            ["Good content & retention", "Keeps them watching"],
            ["Iteration on data", "Improves over time"]
          ],
          explain: "Packaging, content, and iteration together are what actually works."
        },
        {
          type: "truefalse",
          q: "There is a secret shortcut that replaces making genuinely good videos.",
          answer: false,
          explain: "No shortcut replaces satisfying videos improved over time."
        },
        {
          type: "mcq",
          q: "The best next step after finishing this course is to:",
          choices: [
            "Publish, measure, and keep improving with each video",
            "Plan your first fifty videos before publishing any of them",
            "Buy better gear before making your next upload",
            "Wait until you have the perfect idea before you start"
          ],
          answer: 0,
          explain: "Applying the loop consistently is what turns knowledge into growth."
        }
      ]
    }
  ]
});
