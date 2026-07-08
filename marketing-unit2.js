window.ACADEMY.addUnit("marketing", {
  id: "unit-2",
  title: "Know Your Customer",
  color: "#1cb0f6",
  icon: "🔍",
  description: "Research, segmentation, and positioning so your marketing lands with the right people.",
  lessons: [
    {
      id: "l9",
      title: "Market Research",
      intro: "Learn how to gather facts about your customers and market before you spend a dollar.",
      questions: [
        {
          type: "mcq",
          q: "What is market research?",
          choices: [
            "Gathering information about customers, competitors, and the market",
            "Buying ads on as many platforms as possible",
            "Setting the highest price you can",
            "Hiring a full-time sales team"
          ],
          answer: 0,
          explain: "Market research is the work of collecting and analyzing information about your customers and market so you can make smarter decisions."
        },
        {
          type: "mcq",
          q: "Which is an example of PRIMARY research?",
          choices: [
            "Interviewing your own customers directly",
            "Reading a published industry report",
            "Looking up census data online",
            "Checking a competitor's public price list"
          ],
          answer: 0,
          explain: "Primary research is data you collect yourself and firsthand, such as interviews, surveys, or observation."
        },
        {
          type: "truefalse",
          q: "Secondary research uses data that someone else has already gathered.",
          answer: true,
          explain: "Secondary research relies on existing sources like reports, articles, and public datasets rather than data you collect yourself."
        },
        {
          type: "fill",
          q: "A short set of standard questions sent to many people at once is called a ____.",
          answer: "survey",
          accept: ["survey", "questionnaire"],
          explain: "Surveys let you collect answers from many people quickly, making them a common primary-research tool."
        },
        {
          type: "match",
          q: "Match each method to whether it is primary or secondary research.",
          pairs: [
            ["Customer interview", "Primary"],
            ["Published market report", "Secondary"],
            ["Your own survey", "Primary"],
            ["Government statistics", "Secondary"]
          ],
          explain: "Primary means you collect it firsthand; secondary means you reuse data others already collected."
        },
        {
          type: "truefalse",
          q: "Talking to just one friend is enough to fully understand your whole market.",
          answer: false,
          explain: "A single opinion is a starting point, not a conclusion. Good research draws from a broader, more representative group."
        },
        {
          type: "order",
          q: "Put these research steps in a sensible order.",
          items: [
            "Decide what you want to learn",
            "Choose a research method",
            "Collect the data",
            "Analyze and act on findings"
          ],
          explain: "Start with a clear question, pick a fitting method, gather the data, then turn findings into decisions."
        },
        {
          type: "mcq",
          q: "Which pairing best describes qualitative research?",
          choices: [
            "Open-ended interviews that explore why people feel a certain way",
            "Counting how many units sold each month",
            "Measuring website clicks",
            "Tracking exact revenue totals"
          ],
          answer: 0,
          explain: "Qualitative research explores reasons, feelings, and motivations, often through open-ended conversations rather than numbers."
        }
      ]
    },
    {
      id: "l10",
      title: "Market Segmentation",
      intro: "Discover how to divide a broad market into smaller groups you can actually serve well.",
      questions: [
        {
          type: "mcq",
          q: "What is market segmentation?",
          choices: [
            "Splitting a broad market into smaller groups with shared traits",
            "Merging all customers into one giant audience",
            "Lowering prices for everyone at once",
            "Sending the same message to every person"
          ],
          answer: 0,
          explain: "Segmentation breaks a large market into smaller groups that share needs or traits, so you can target them more precisely."
        },
        {
          type: "match",
          q: "Match each segmentation type to its example.",
          pairs: [
            ["Demographic", "Age 25 to 34"],
            ["Geographic", "Lives in Utah"],
            ["Psychographic", "Values sustainability"],
            ["Behavioral", "Buys every month"]
          ],
          explain: "Demographic is about who people are, geographic is where they are, psychographic is what they value, and behavioral is what they do."
        },
        {
          type: "fill",
          q: "Splitting a market by traits like values, interests, and lifestyle is called ____ segmentation.",
          answer: "psychographic",
          accept: ["psychographic", "psychographics"],
          explain: "Psychographic segmentation groups people by attitudes, values, and lifestyle rather than surface facts like age."
        },
        {
          type: "truefalse",
          q: "Grouping customers by location such as city or climate is geographic segmentation.",
          answer: true,
          explain: "Geographic segmentation divides a market by physical location, such as country, region, city, or climate."
        },
        {
          type: "mcq",
          q: "Segmenting by purchase frequency or loyalty is which type?",
          choices: [
            "Behavioral",
            "Demographic",
            "Geographic",
            "Psychographic"
          ],
          answer: 0,
          explain: "Behavioral segmentation groups people by how they act, such as how often they buy or how loyal they are."
        },
        {
          type: "truefalse",
          q: "Age, gender, and income are examples of demographic segmentation.",
          answer: true,
          explain: "Demographic segmentation uses measurable population facts like age, gender, income, and education."
        },
        {
          type: "mcq",
          q: "Why is segmentation useful for a small business?",
          choices: [
            "It lets you focus limited budget on the groups most likely to buy",
            "It guarantees every person will buy",
            "It removes the need to know your customers",
            "It makes your product free to produce"
          ],
          answer: 0,
          explain: "By focusing on the best-fit segments, a small business spends its limited time and money where it matters most."
        },
        {
          type: "order",
          q: "Order these steps for using segmentation.",
          items: [
            "Divide the market into segments",
            "Evaluate which segments fit your business",
            "Target the most promising segment",
            "Tailor your message to that segment"
          ],
          explain: "Segment the market, judge the options, choose a target, then craft a message that fits that group."
        }
      ]
    },
    {
      id: "l11",
      title: "Buyer Personas",
      intro: "Build a clear profile of your ideal customer so every marketing choice has a face behind it.",
      questions: [
        {
          type: "mcq",
          q: "What is a buyer persona?",
          choices: [
            "A semi-fictional profile of your ideal customer",
            "A real named person who must approve your ads",
            "A legal contract with a customer",
            "A list of everyone who ever visited your site"
          ],
          answer: 0,
          explain: "A buyer persona is a semi-fictional character that represents your ideal customer, built from research and real patterns."
        },
        {
          type: "truefalse",
          q: "A good buyer persona is based on research, not pure guesswork.",
          answer: true,
          explain: "Strong personas draw on real data from interviews, surveys, and customer behavior rather than assumptions alone."
        },
        {
          type: "mcq",
          q: "Which detail is LEAST useful in a buyer persona?",
          choices: [
            "Their favorite random color for no clear reason",
            "Their main goals and challenges",
            "Where they look for information",
            "What objections stop them from buying"
          ],
          answer: 0,
          explain: "Personas should focus on goals, challenges, and buying behavior, not trivia that does not affect decisions."
        },
        {
          type: "fill",
          q: "Giving your persona a name and a short backstory helps the whole team ____ that customer.",
          answer: "picture",
          accept: ["picture", "imagine", "visualize", "understand"],
          explain: "A name and story make the persona memorable so everyone can picture the same customer when making decisions."
        },
        {
          type: "match",
          q: "Match each persona element to what it captures.",
          pairs: [
            ["Goals", "What they want to achieve"],
            ["Pain points", "What frustrates them"],
            ["Channels", "Where they spend time"]
          ],
          explain: "Goals, pain points, and preferred channels together tell you what to say and where to say it."
        },
        {
          type: "truefalse",
          q: "A business can only ever have one buyer persona.",
          answer: false,
          explain: "Many businesses serve several distinct customer types, so having a few well-defined personas is common and useful."
        },
        {
          type: "order",
          q: "Order the steps to build a buyer persona.",
          items: [
            "Gather data from real customers",
            "Spot common patterns and traits",
            "Draft the persona profile",
            "Use it to guide marketing decisions"
          ],
          explain: "Collect real data, find the patterns, write the profile, then let it steer your messaging and targeting."
        }
      ]
    },
    {
      id: "l12",
      title: "Pain Points & Jobs to Be Done",
      intro: "See your product through the customer's eyes: the problem they are hiring you to solve.",
      questions: [
        {
          type: "mcq",
          q: "What is a customer pain point?",
          choices: [
            "A specific problem or frustration the customer wants solved",
            "The color of your logo",
            "The name of your company",
            "The number of employees you have"
          ],
          answer: 0,
          explain: "A pain point is a real problem or frustration your customer feels, and solving it is the reason they buy."
        },
        {
          type: "mcq",
          q: "The Jobs to Be Done idea says customers 'hire' a product to do what?",
          choices: [
            "Make progress on a job or goal in their life",
            "Match a trendy color scheme",
            "Fill up warehouse space",
            "Impress the marketing team"
          ],
          answer: 0,
          explain: "Jobs to Be Done frames a purchase as hiring a product to make progress on a real goal or task."
        },
        {
          type: "truefalse",
          q: "People often buy a product for the outcome it delivers, not the product itself.",
          answer: true,
          explain: "Customers care about the result, the classic idea that they want a hole, not the drill itself."
        },
        {
          type: "fill",
          q: "A ____ point is a specific frustration your product aims to relieve.",
          answer: "pain",
          accept: ["pain"],
          explain: "Identifying pain points tells you exactly what problem your marketing should promise to solve."
        },
        {
          type: "match",
          q: "Match each customer statement to the job they are hiring for.",
          pairs: [
            ["I need to look professional on calls", "Feel confident at work"],
            ["I want dinner fast after a long day", "Save time on cooking"],
            ["I want to remember appointments", "Stay organized"]
          ],
          explain: "Behind each request is a deeper job, and marketing that names that job resonates more strongly."
        },
        {
          type: "truefalse",
          q: "Understanding pain points has no effect on how you write your marketing message.",
          answer: false,
          explain: "Pain points shape your message directly, since good copy names the problem and promises relief."
        },
        {
          type: "order",
          q: "Order these steps for using Jobs to Be Done.",
          items: [
            "Ask customers what they were trying to accomplish",
            "Identify the underlying job or goal",
            "Show how your product does that job",
            "Speak to that job in your marketing"
          ],
          explain: "Learn the goal, name the job, connect your product to it, then reflect it in your messaging."
        }
      ]
    },
    {
      id: "l13",
      title: "Positioning",
      intro: "Claim a clear, distinct place in your customer's mind compared to the alternatives.",
      questions: [
        {
          type: "mcq",
          q: "What does positioning mean in marketing?",
          choices: [
            "The distinct place your brand holds in the customer's mind versus alternatives",
            "Where your store physically sits on a map",
            "The order of items on a shelf",
            "The time of day you post ads"
          ],
          answer: 0,
          explain: "Positioning is how customers perceive your brand relative to competitors, the space you own in their mind."
        },
        {
          type: "truefalse",
          q: "Good positioning makes it clear why a customer should choose you over alternatives.",
          answer: true,
          explain: "Effective positioning answers the customer's question of why you and not someone else."
        },
        {
          type: "fill",
          q: "The one clear benefit that sets you apart is often called your value ____.",
          answer: "proposition",
          accept: ["proposition"],
          explain: "A value proposition sums up the specific benefit you offer and why it beats the alternatives."
        },
        {
          type: "mcq",
          q: "Which is the strongest positioning statement?",
          choices: [
            "Affordable meal kits for busy parents who want healthy dinners fast",
            "We sell many good things to everyone",
            "The usual products at usual prices",
            "A company that exists and does business"
          ],
          answer: 0,
          explain: "Strong positioning is specific about who it serves and the distinct benefit it delivers."
        },
        {
          type: "truefalse",
          q: "Trying to be everything to everyone usually strengthens your positioning.",
          answer: false,
          explain: "Trying to appeal to everyone blurs your message; sharp positioning targets a clear audience and benefit."
        },
        {
          type: "match",
          q: "Match each positioning angle to its example.",
          pairs: [
            ["Price", "The budget-friendly choice"],
            ["Quality", "The premium, long-lasting option"],
            ["Speed", "The fastest delivery in town"]
          ],
          explain: "Brands often position around a single strong angle such as price, quality, or speed."
        },
        {
          type: "order",
          q: "Order the steps to craft a positioning statement.",
          items: [
            "Define your target customer",
            "Identify their key need",
            "State your unique benefit",
            "Show why it beats alternatives"
          ],
          explain: "Name the audience, their need, your benefit, and your edge over the competition."
        }
      ]
    },
    {
      id: "l14",
      title: "Competitive Analysis",
      intro: "Size up your rivals and turn what you learn into an advantage using the SWOT framework.",
      questions: [
        {
          type: "mcq",
          q: "What is competitive analysis?",
          choices: [
            "Studying your rivals to understand their strengths, weaknesses, and strategy",
            "Copying every move a competitor makes",
            "Ignoring other companies entirely",
            "Lowering your price below cost no matter what"
          ],
          answer: 0,
          explain: "Competitive analysis means studying rivals so you can find gaps, avoid their mistakes, and stand out."
        },
        {
          type: "fill",
          q: "The framework covering Strengths, Weaknesses, Opportunities, and Threats is called ____.",
          answer: "swot",
          accept: ["swot", "swot analysis"],
          explain: "SWOT is a simple grid that maps internal strengths and weaknesses against external opportunities and threats."
        },
        {
          type: "match",
          q: "Match each SWOT letter to what it covers.",
          pairs: [
            ["Strengths", "Internal advantages you have"],
            ["Weaknesses", "Internal areas you lack"],
            ["Opportunities", "External chances to grow"],
            ["Threats", "External risks you face"]
          ],
          explain: "Strengths and weaknesses are internal to your business; opportunities and threats come from the outside world."
        },
        {
          type: "truefalse",
          q: "In SWOT, opportunities and threats are external factors outside your company.",
          answer: true,
          explain: "Opportunities and threats describe outside forces like market trends or new competitors, not internal traits."
        },
        {
          type: "mcq",
          q: "Which is an example of a THREAT in a SWOT analysis?",
          choices: [
            "A new competitor entering your market",
            "Your loyal customer base",
            "Your skilled team",
            "Your strong brand name"
          ],
          answer: 0,
          explain: "A threat is an external risk, such as a new rival, that could hurt your business."
        },
        {
          type: "truefalse",
          q: "The point of competitive analysis is to help you find gaps and differentiate.",
          answer: true,
          explain: "Understanding rivals reveals underserved needs and helps you position your offering distinctly."
        },
        {
          type: "order",
          q: "Order the steps of a basic competitive analysis.",
          items: [
            "List your main competitors",
            "Gather information on each one",
            "Compare strengths and weaknesses",
            "Find gaps you can fill"
          ],
          explain: "Identify rivals, collect data, compare them, then spot the openings you can own."
        }
      ]
    },
    {
      id: "l15",
      title: "Product-Market Fit",
      intro: "Learn what it feels like when a product truly satisfies a real market need.",
      questions: [
        {
          type: "mcq",
          q: "What is product-market fit?",
          choices: [
            "When a product strongly satisfies a real demand in its market",
            "When a product has the most features possible",
            "When a product is the cheapest available",
            "When a product wins a design award"
          ],
          answer: 0,
          explain: "Product-market fit is the point where your product clearly meets a real need for a real group of customers."
        },
        {
          type: "truefalse",
          q: "Strong word-of-mouth and repeat use are signals of product-market fit.",
          answer: true,
          explain: "When customers keep coming back and tell others, it is a good sign the product fits the market."
        },
        {
          type: "mcq",
          q: "Which is a warning sign that you have NOT reached product-market fit?",
          choices: [
            "Most customers try it once and never return",
            "Customers refer their friends",
            "Demand grows steadily on its own",
            "Users say they would be upset to lose it"
          ],
          answer: 0,
          explain: "High churn and low return usage suggest the product is not yet solving the problem well enough."
        },
        {
          type: "fill",
          q: "Before scaling spend, it is wise to reach product-market ____ first.",
          answer: "fit",
          accept: ["fit"],
          explain: "Chasing growth before fit often wastes money, since a leaky product loses customers as fast as it gains them."
        },
        {
          type: "truefalse",
          q: "You should pour a huge ad budget into a product before knowing it has any fit.",
          answer: false,
          explain: "Heavy spending before fit tends to amplify a weak product; validate fit first, then scale."
        },
        {
          type: "match",
          q: "Match each signal to whether it suggests fit or a lack of fit.",
          pairs: [
            ["High repeat usage", "Signals fit"],
            ["Rapid word of mouth", "Signals fit"],
            ["High churn after one use", "Signals lack of fit"]
          ],
          explain: "Retention and referrals point to fit, while quick drop-off points to a gap between product and need."
        },
        {
          type: "order",
          q: "Order these steps toward product-market fit.",
          items: [
            "Identify a real customer problem",
            "Build a focused solution",
            "Test it with real users",
            "Refine until customers stick"
          ],
          explain: "Start from a real problem, build a focused solution, test it, and refine until retention shows fit."
        }
      ]
    },
    {
      id: "l16",
      title: "Voice of the Customer",
      intro: "Tune in to reviews, feedback, and social chatter to learn what customers really want.",
      questions: [
        {
          type: "mcq",
          q: "What does Voice of the Customer mean?",
          choices: [
            "Systematically listening to customer feedback to guide decisions",
            "The literal sound of a customer talking",
            "A jingle in your radio ad",
            "The tone of your brand's logo"
          ],
          answer: 0,
          explain: "Voice of the Customer is the practice of gathering and acting on what customers say about their needs and experience."
        },
        {
          type: "match",
          q: "Match each source to the feedback it provides.",
          pairs: [
            ["Product reviews", "Ratings and written opinions"],
            ["Support tickets", "Problems and complaints"],
            ["Social media", "Public reactions and mentions"]
          ],
          explain: "Reviews, support tickets, and social posts each reveal a different slice of what customers are experiencing."
        },
        {
          type: "truefalse",
          q: "Negative reviews can be a valuable source of ideas for improvement.",
          answer: true,
          explain: "Complaints point directly to weaknesses, making them a rich source of concrete improvements."
        },
        {
          type: "fill",
          q: "Reading customer ____ on sites and stores is a simple way to hear their voice.",
          answer: "reviews",
          accept: ["reviews", "feedback"],
          explain: "Public reviews are an easy, honest window into what customers love and what frustrates them."
        },
        {
          type: "mcq",
          q: "What is the best response to a pattern of the same complaint?",
          choices: [
            "Treat it as a signal and fix the underlying issue",
            "Delete every complaint you see",
            "Ignore it because customers complain too much",
            "Argue with each reviewer publicly"
          ],
          answer: 0,
          explain: "A repeated complaint is a clear signal; fixing the root cause improves the product and the customer relationship."
        },
        {
          type: "truefalse",
          q: "Voice of the Customer should be a one-time project you never repeat.",
          answer: false,
          explain: "Customer needs shift over time, so listening should be ongoing rather than a single event."
        },
        {
          type: "order",
          q: "Order the steps of a Voice of the Customer loop.",
          items: [
            "Collect feedback from many sources",
            "Group it into common themes",
            "Prioritize the most important issues",
            "Act and then close the loop with customers"
          ],
          explain: "Gather feedback, find the themes, prioritize, then act and let customers know you listened."
        }
      ]
    }
  ]
});
