window.ACADEMY.addUnit("marketing", {
  id: "unit-6",
  title: "Metrics & Analytics",
  color: "#2bb3a3",
  icon: "📊",
  description: "Measuring what works so you spend time and money where it pays off.",
  lessons: [
    {
      id: "l41",
      title: "Why Measure?",
      intro: "Data-driven marketing means making decisions from evidence, not gut feelings.",
      questions: [
        {
          type: "mcq",
          q: "What does 'data-driven marketing' mean?",
          choices: ["Making decisions based on measured evidence", "Guessing what customers want", "Copying whatever competitors do", "Spending more money every month"],
          answer: 0,
          explain: "Data-driven marketing bases choices on real numbers and results rather than hunches."
        },
        {
          type: "truefalse",
          q: "Tracking results lets you repeat what works and stop what does not.",
          answer: true,
          explain: "Measurement shows you which efforts pay off so you can double down or cut them."
        },
        {
          type: "fill",
          q: "A number you track to judge marketing performance is called a ____.",
          answer: "metric",
          accept: ["metric", "kpi", "measure"],
          explain: "A metric is any measurable value, like clicks or sales, used to gauge performance."
        },
        {
          type: "mcq",
          q: "Which is a good reason to measure marketing?",
          choices: ["To learn where your budget pays off", "To make reports look busy", "To avoid ever changing anything", "To impress people with big words"],
          answer: 0,
          explain: "The point of measuring is to steer time and money toward what actually works."
        },
        {
          type: "truefalse",
          q: "A KPI is a key performance indicator, the metric that matters most for a goal.",
          answer: true,
          explain: "A KPI is the headline metric you watch most closely to know if you are on track."
        },
        {
          type: "match",
          q: "Match each term to its plain meaning.",
          pairs: [["Metric", "A number you can measure"], ["KPI", "The most important metric for a goal"], ["Baseline", "A starting number to compare against"]],
          explain: "A baseline is your 'before' number, so you can see whether things improved."
        },
        {
          type: "mcq",
          q: "What is a 'baseline' in measurement?",
          choices: ["Your starting number to compare future results against", "The most money you can spend", "A type of social media post", "A competitor's ad budget"],
          answer: 0,
          explain: "Without a baseline you cannot tell whether a change made things better or worse."
        },
        {
          type: "truefalse",
          q: "It is fine to run marketing forever without ever checking the results.",
          answer: false,
          explain: "If you never measure, you cannot tell which efforts are worth continuing."
        }
      ]
    },
    {
      id: "l42",
      title: "Core Metrics",
      intro: "Impressions, reach, clicks, click-through rate, and conversion rate are the everyday numbers to know.",
      questions: [
        {
          type: "match",
          q: "Match each core metric to its meaning.",
          pairs: [["Impressions", "Times your content was shown"], ["Reach", "Number of unique people who saw it"], ["Clicks", "Times people clicked your link"], ["Conversion", "A desired action completed"]],
          explain: "Impressions count views, reach counts people, clicks count taps, conversions count goals met."
        },
        {
          type: "mcq",
          q: "What does CTR (click-through rate) measure?",
          choices: ["Clicks divided by impressions", "Total money spent", "Number of followers", "Sales divided by profit"],
          answer: 0,
          explain: "CTR = clicks / impressions, showing how often people who see your content click it."
        },
        {
          type: "fill",
          q: "The percentage of visitors who complete a desired action is the ____ rate.",
          answer: "conversion",
          accept: ["conversion", "conversion rate"],
          explain: "Conversion rate = conversions / visitors, measuring how many people take the action you want."
        },
        {
          type: "truefalse",
          q: "Reach counts unique people, while impressions can count the same person more than once.",
          answer: true,
          explain: "One person can create many impressions but only counts once toward reach."
        },
        {
          type: "mcq",
          q: "If 1,000 people see an ad and 20 click it, what is the CTR?",
          choices: ["2%", "20%", "50%", "0.2%"],
          answer: 0,
          explain: "20 clicks divided by 1,000 impressions equals 0.02, or 2%."
        },
        {
          type: "truefalse",
          q: "A high CTR always guarantees lots of sales.",
          answer: false,
          explain: "Clicks are a start, but you also need those visitors to convert into sales."
        },
        {
          type: "order",
          q: "Order these steps in the order a typical visitor moves through them.",
          items: ["Impression", "Click", "Conversion"],
          explain: "First someone sees your content, then clicks it, then completes the action you want."
        },
        {
          type: "fill",
          q: "The metric 'clicks divided by impressions' is called ____.",
          answer: "ctr",
          accept: ["ctr", "click-through rate", "click through rate"],
          explain: "Click-through rate (CTR) tells you how compelling your content is to viewers."
        }
      ]
    },
    {
      id: "l43",
      title: "CAC & LTV",
      intro: "Customer acquisition cost and lifetime value tell you whether winning a customer is worth it.",
      questions: [
        {
          type: "fill",
          q: "The average money you spend to gain one new customer is your ____.",
          answer: "cac",
          accept: ["cac", "customer acquisition cost", "acquisition cost"],
          explain: "CAC is total acquisition spend divided by the number of new customers gained."
        },
        {
          type: "mcq",
          q: "What does LTV (lifetime value) represent?",
          choices: ["Total profit a customer brings over their relationship with you", "The cost of one ad", "The number of website visits", "A customer's age"],
          answer: 0,
          explain: "LTV estimates how much a customer is worth across all their purchases over time."
        },
        {
          type: "truefalse",
          q: "For a healthy business, LTV should be greater than CAC.",
          answer: true,
          explain: "If a customer is worth more than they cost to acquire, acquisition is profitable."
        },
        {
          type: "mcq",
          q: "If CAC is $50 and LTV is $30, what does that signal?",
          choices: ["You are losing money on each customer", "You are highly profitable", "You should spend much more", "Nothing, the numbers do not relate"],
          answer: 0,
          explain: "Spending $50 to earn $30 back per customer means each one loses you money."
        },
        {
          type: "match",
          q: "Match each term to what it measures.",
          pairs: [["CAC", "Cost to gain a customer"], ["LTV", "Value a customer brings over time"]],
          explain: "CAC is what you pay to get them; LTV is what they are worth once you have them."
        },
        {
          type: "fill",
          q: "The total value a customer brings over their whole relationship is their ____.",
          answer: "ltv",
          accept: ["ltv", "lifetime value", "customer lifetime value"],
          explain: "Lifetime value (LTV) helps you decide how much you can afford to spend on acquisition."
        },
        {
          type: "truefalse",
          q: "Lowering CAC or raising LTV both improve the health of your unit economics.",
          answer: true,
          explain: "A wider gap between LTV and CAC means more profit per customer."
        },
        {
          type: "mcq",
          q: "Which change would improve the LTV-to-CAC ratio?",
          choices: ["Getting customers to buy again and stay longer", "Raising your acquisition costs", "Losing customers faster", "Ignoring repeat buyers"],
          answer: 0,
          explain: "Repeat purchases and retention raise LTV, widening the gap over CAC."
        }
      ]
    },
    {
      id: "l44",
      title: "ROI & ROAS",
      intro: "Return on investment and return on ad spend answer one question: is the marketing paying off?",
      questions: [
        {
          type: "mcq",
          q: "What does ROI (return on investment) measure?",
          choices: ["Profit gained relative to money spent", "Number of ad clicks", "Total website visitors", "How many emails you sent"],
          answer: 0,
          explain: "ROI compares the profit you earned against what you invested to earn it."
        },
        {
          type: "fill",
          q: "Revenue from ads divided by ad spend is called ____.",
          answer: "roas",
          accept: ["roas", "return on ad spend"],
          explain: "ROAS = revenue from ads / ad spend, showing dollars earned per dollar of ads."
        },
        {
          type: "truefalse",
          q: "A ROAS of 4 means you earned four dollars in revenue for every dollar of ad spend.",
          answer: true,
          explain: "ROAS is a ratio of revenue to ad cost, so 4 means $4 back per $1 spent."
        },
        {
          type: "match",
          q: "Match each metric to what it compares.",
          pairs: [["ROI", "Profit versus total investment"], ["ROAS", "Ad revenue versus ad spend"]],
          explain: "ROI looks at overall profit; ROAS focuses narrowly on ad revenue versus ad cost."
        },
        {
          type: "mcq",
          q: "You spend $100 on ads and earn $500 in revenue. What is your ROAS?",
          choices: ["5", "500", "0.2", "400"],
          answer: 0,
          explain: "$500 revenue divided by $100 spend equals a ROAS of 5."
        },
        {
          type: "truefalse",
          q: "ROI accounts for costs and profit, while ROAS looks only at revenue against ad spend.",
          answer: true,
          explain: "ROAS ignores other costs, so a high ROAS can still hide a thin profit margin."
        },
        {
          type: "mcq",
          q: "Why can a high ROAS still mean low actual profit?",
          choices: ["It ignores costs beyond ads, like product and shipping", "It counts profit twice", "It only measures clicks", "It always overstates revenue"],
          answer: 0,
          explain: "ROAS looks at ad revenue alone, so other business costs can eat the margin."
        },
        {
          type: "fill",
          q: "Profit gained compared to money invested is measured by ____.",
          answer: "roi",
          accept: ["roi", "return on investment"],
          explain: "ROI is the broad measure of whether an investment produced a worthwhile return."
        }
      ]
    },
    {
      id: "l45",
      title: "A/B Testing",
      intro: "Comparing two versions head to head shows which one actually performs better.",
      questions: [
        {
          type: "mcq",
          q: "What is an A/B test?",
          choices: ["Comparing two versions to see which performs better", "Running two businesses at once", "Testing a product for defects", "Grading customers A or B"],
          answer: 0,
          explain: "In an A/B test you show version A to some people and version B to others, then compare."
        },
        {
          type: "truefalse",
          q: "To keep an A/B test fair, you should change only one element at a time.",
          answer: true,
          explain: "Changing one thing lets you know which change caused any difference in results."
        },
        {
          type: "fill",
          q: "The unchanged original version in an A/B test is often called the ____.",
          answer: "control",
          accept: ["control", "control version", "version a"],
          explain: "The control is your baseline; the variant is the new version you test against it."
        },
        {
          type: "order",
          q: "Order the steps of running an A/B test.",
          items: ["Form a hypothesis", "Create two versions", "Split traffic and run the test", "Compare results and pick a winner"],
          explain: "A clean test starts with a guess, creates variants, runs them, then measures the outcome."
        },
        {
          type: "mcq",
          q: "You test two email subject lines. Which metric best shows which one won?",
          choices: ["Open rate of each version", "The color of the email", "How long the email is", "Your personal favorite"],
          answer: 0,
          explain: "For subject lines, open rate directly reflects which one got more people to open."
        },
        {
          type: "truefalse",
          q: "Ending an A/B test after just a few clicks gives you a reliable answer.",
          answer: false,
          explain: "Too little data is unreliable; you need enough responses before trusting the result."
        },
        {
          type: "match",
          q: "Match each A/B testing term to its meaning.",
          pairs: [["Control", "The original version"], ["Variant", "The changed version being tested"], ["Hypothesis", "The change you predict will help"]],
          explain: "You compare a variant against the control to test whether your hypothesis holds."
        }
      ]
    },
    {
      id: "l46",
      title: "Attribution",
      intro: "Attribution decides which channel or touchpoint gets credit when a customer converts.",
      questions: [
        {
          type: "mcq",
          q: "What does attribution try to answer?",
          choices: ["Which channel or touchpoint gets credit for a conversion", "How much a product costs to make", "Who your competitors are", "What time to post online"],
          answer: 0,
          explain: "Attribution assigns credit for a sale to the marketing that helped make it happen."
        },
        {
          type: "fill",
          q: "A single interaction a customer has with your brand on the way to buying is called a ____.",
          answer: "touchpoint",
          accept: ["touchpoint", "touch point", "touch"],
          explain: "A touchpoint is any contact, like an ad view, email open, or website visit."
        },
        {
          type: "match",
          q: "Match each attribution model to how it gives credit.",
          pairs: [["First-touch", "All credit to the first touchpoint"], ["Last-touch", "All credit to the final touchpoint"], ["Multi-touch", "Credit shared across touchpoints"]],
          explain: "Different models split credit differently, which changes which channels look best."
        },
        {
          type: "truefalse",
          q: "Last-touch attribution gives all the credit to the final step before a conversion.",
          answer: true,
          explain: "Last-touch credits only the last interaction, ignoring earlier steps that helped."
        },
        {
          type: "mcq",
          q: "Why can single-touch attribution be misleading?",
          choices: ["It ignores the other touchpoints that helped along the way", "It counts every sale twice", "It only works for email", "It always favors the newest channel"],
          answer: 0,
          explain: "Customers often need several touches, so crediting just one can undervalue the rest."
        },
        {
          type: "truefalse",
          q: "Most customers convert after seeing your brand only one single time.",
          answer: false,
          explain: "People usually interact with a brand multiple times before they buy."
        },
        {
          type: "mcq",
          q: "Which attribution approach shares credit across several touchpoints?",
          choices: ["Multi-touch attribution", "First-touch attribution", "Last-touch attribution", "No attribution"],
          answer: 0,
          explain: "Multi-touch spreads credit so several channels each get their fair share."
        }
      ]
    },
    {
      id: "l47",
      title: "Analytics Tools & UTMs",
      intro: "Web analytics plus tagged links let you see exactly what is driving your results.",
      questions: [
        {
          type: "mcq",
          q: "What is a UTM?",
          choices: ["A tag added to a link so analytics can track where clicks came from", "A type of paid ad", "A social media platform", "A pricing strategy"],
          answer: 0,
          explain: "UTM parameters are small tags on a URL that tell analytics the traffic's source."
        },
        {
          type: "fill",
          q: "Software that reports website traffic and visitor behavior is called web ____.",
          answer: "analytics",
          accept: ["analytics", "analytics tool", "analytics software"],
          explain: "Web analytics tools record visits, sources, and actions so you can measure results."
        },
        {
          type: "truefalse",
          q: "UTM tags help you tell which campaign or link sent visitors to your site.",
          answer: true,
          explain: "By tagging links, you can see in analytics which email, ad, or post drove each visit."
        },
        {
          type: "match",
          q: "Match each common UTM parameter to what it labels.",
          pairs: [["utm_source", "Where traffic came from"], ["utm_medium", "The type of channel"], ["utm_campaign", "The specific campaign name"]],
          explain: "Source names the site, medium names the channel type, and campaign names the effort."
        },
        {
          type: "mcq",
          q: "A link with utm_source=newsletter tells your analytics that the visitor came from where?",
          choices: ["Your newsletter", "A paid ad", "A random search", "A competitor"],
          answer: 0,
          explain: "The utm_source value labels the traffic origin, here your newsletter."
        },
        {
          type: "truefalse",
          q: "You must build every UTM link entirely by hand with no tools to help.",
          answer: false,
          explain: "Free UTM builder tools help you create tagged links quickly and consistently."
        },
        {
          type: "order",
          q: "Order the steps to track a campaign link with UTMs.",
          items: ["Add UTM tags to your link", "Share the tagged link", "People click it", "See the source in your analytics"],
          explain: "Tagging first means analytics can attribute each click back to the right campaign."
        },
        {
          type: "mcq",
          q: "What is the main benefit of using UTMs?",
          choices: ["Knowing which channels actually drive traffic and conversions", "Making links look longer", "Hiding your website from search engines", "Increasing your ad prices"],
          answer: 0,
          explain: "UTMs let you attribute results to specific channels so you invest where it works."
        }
      ]
    },
    {
      id: "l48",
      title: "Reading the Funnel",
      intro: "Spotting where people drop off lets you fix the weakest step and lift results.",
      questions: [
        {
          type: "order",
          q: "Order the classic AIDA funnel stages from first to last.",
          items: ["Attention", "Interest", "Desire", "Action"],
          explain: "AIDA describes the journey: grab attention, build interest and desire, then drive action."
        },
        {
          type: "mcq",
          q: "In a marketing funnel, what is a 'drop-off'?",
          choices: ["Where people leave before completing the next step", "A discount on products", "A drop in ad prices", "A type of email"],
          answer: 0,
          explain: "A drop-off is a stage where you lose people, showing a weak point to fix."
        },
        {
          type: "truefalse",
          q: "The funnel gets narrower at each stage as some people drop off.",
          answer: true,
          explain: "Fewer people reach each later stage, which is why it is drawn as a funnel."
        },
        {
          type: "fill",
          q: "The stage where you have the biggest drop-off is your funnel ____.",
          answer: "bottleneck",
          accept: ["bottleneck", "weak point", "weakest step", "leak"],
          explain: "The bottleneck is the weakest step; fixing it usually gives the biggest lift."
        },
        {
          type: "mcq",
          q: "Many people visit your page but few click 'buy'. Where should you focus?",
          choices: ["Improving the step where they drop off", "Getting even more visitors", "Deleting the page", "Ignoring the numbers"],
          answer: 0,
          explain: "Fixing the leaky step converts more of the traffic you already have."
        },
        {
          type: "match",
          q: "Match each AIDA stage to what it aims to do.",
          pairs: [["Attention", "Get noticed"], ["Interest", "Spark curiosity"], ["Desire", "Build wanting"], ["Action", "Prompt the purchase"]],
          explain: "AIDA moves a prospect from first noticing you to actually taking action."
        },
        {
          type: "truefalse",
          q: "Adding more traffic to the top always fixes a funnel that leaks in the middle.",
          answer: false,
          explain: "If a middle step leaks, more traffic just wastes; fix the leak first."
        },
        {
          type: "fill",
          q: "The step-by-step path from first awareness to purchase is called the marketing ____.",
          answer: "funnel",
          accept: ["funnel", "marketing funnel", "sales funnel"],
          explain: "The funnel maps how prospects move toward becoming customers, stage by stage."
        }
      ]
    }
  ]
});
