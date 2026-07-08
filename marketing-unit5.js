window.ACADEMY.addUnit("marketing", {
  id: "unit-5",
  title: "Digital Marketing Channels",
  color: "#ff4b4b",
  icon: "🌐",
  description: "The main paid and owned channels and how to run them.",
  lessons: [
    {
      id: "l33",
      title: "Email Marketing",
      intro: "Learn why owning an email list beats renting an audience, plus newsletters, welcome sequences, and simple automation.",
      questions: [
        {
          type: "mcq",
          q: "Why is an email list called an owned channel?",
          choices: ["You control it and can reach subscribers directly", "The email provider owns your contacts", "It costs nothing to send unlimited emails forever", "It only works for big companies"],
          answer: 0,
          explain: "An email list is an owned channel because you keep the contacts and can reach them directly, without depending on a social platform's algorithm."
        },
        {
          type: "truefalse",
          q: "A welcome sequence is a set of automated emails sent to a new subscriber after they sign up.",
          answer: true,
          explain: "A welcome sequence greets new subscribers automatically and introduces your brand over the first few emails."
        },
        {
          type: "fill",
          q: "Sending emails automatically based on a trigger, like a signup, is called ____.",
          answer: "automation",
          accept: ["automation", "email automation", "marketing automation"],
          explain: "Automation lets emails go out on their own when a trigger happens, so you do not send each one by hand."
        },
        {
          type: "match",
          q: "Match each email term to its meaning.",
          pairs: [["Newsletter", "Regular update sent to your whole list"], ["Welcome sequence", "Automated emails for brand-new subscribers"], ["Open rate", "Share of recipients who opened the email"]],
          explain: "Newsletters keep your list warm, welcome sequences onboard new subscribers, and open rate measures how many opened."
        },
        {
          type: "order",
          q: "Order the steps of a basic email welcome flow.",
          items: ["Visitor subscribes", "Trigger fires automatically", "Welcome email is sent", "Later nurture emails follow"],
          explain: "A signup triggers the automation, the welcome email goes out, and nurture emails follow to build the relationship."
        },
        {
          type: "mcq",
          q: "What is a healthy reason to keep your email list clean?",
          choices: ["Removing inactive or invalid addresses improves deliverability", "A smaller list always makes more money", "Providers reward you for deleting all contacts", "Clean lists never need any content"],
          answer: 0,
          explain: "Removing dead or inactive addresses helps your emails land in inboxes instead of spam, improving deliverability."
        },
        {
          type: "truefalse",
          q: "You should buy random email lists to grow fast.",
          answer: false,
          explain: "Bought lists hurt deliverability and trust, and often break anti-spam rules. Grow your list with people who opt in."
        },
        {
          type: "fill",
          q: "A recurring email that shares updates or content with your whole list is a ____.",
          answer: "newsletter",
          accept: ["newsletter", "news letter"],
          explain: "A newsletter is a regular email that keeps subscribers engaged with news, tips, or offers."
        }
      ]
    },
    {
      id: "l34",
      title: "Search & Paid Ads (PPC)",
      intro: "Understand search engine marketing: bidding on keywords and the basics of pay-per-click advertising.",
      questions: [
        {
          type: "mcq",
          q: "What does PPC stand for?",
          choices: ["Pay-per-click", "Price-per-customer", "Post-per-campaign", "Pay-per-conversion"],
          answer: 0,
          explain: "PPC means pay-per-click: you pay each time someone clicks your ad."
        },
        {
          type: "fill",
          q: "In search ads, you bid on ____ that people type into a search engine.",
          answer: "keywords",
          accept: ["keywords", "keyword", "search terms"],
          explain: "You bid on keywords so your ad can appear when someone searches those words."
        },
        {
          type: "truefalse",
          q: "With pay-per-click, you are charged only when someone actually clicks your ad.",
          answer: true,
          explain: "PPC charges you per click, not just for showing the ad."
        },
        {
          type: "match",
          q: "Match each paid-search term to its meaning.",
          pairs: [["Keyword", "A word or phrase you bid to appear for"], ["Bid", "The most you will pay for a click"], ["CTR", "Share of people who clicked after seeing the ad"]],
          explain: "Keywords decide when your ad shows, your bid caps the cost per click, and CTR measures click interest."
        },
        {
          type: "mcq",
          q: "Why is a relevant landing page important for a search ad?",
          choices: ["It improves the visitor experience and often lowers costs", "It has no effect on ad performance", "It replaces the need for any keywords", "It stops people from ever clicking"],
          answer: 0,
          explain: "A relevant landing page matches what the searcher wanted, improving conversions and often ad quality and cost."
        },
        {
          type: "order",
          q: "Order how a simple search ad reaches a sale.",
          items: ["User searches a keyword", "Your ad appears", "User clicks the ad", "User lands on your page and buys"],
          explain: "The search triggers your ad, the click sends the user to your page, and a good page turns the visit into a sale."
        },
        {
          type: "fill",
          q: "The percentage of people who click your ad after seeing it is the ____ rate.",
          answer: "click-through",
          accept: ["click-through", "click through", "clickthrough", "ctr"],
          explain: "Click-through rate (CTR) is clicks divided by impressions, showing how appealing your ad is."
        },
        {
          type: "truefalse",
          q: "A higher bid guarantees your ad always appears in the top spot.",
          answer: false,
          explain: "Bid matters, but search engines also weigh relevance and quality, so the highest bid does not always win."
        }
      ]
    },
    {
      id: "l35",
      title: "Social Media Advertising",
      intro: "Explore paid social: how audience targeting works and the common ad formats you can run.",
      questions: [
        {
          type: "mcq",
          q: "What is the main advantage of paid social advertising?",
          choices: ["Detailed audience targeting to reach specific groups", "It is always completely free", "It removes the need for any creative", "It only reaches your existing followers"],
          answer: 0,
          explain: "Paid social lets you target specific audiences by traits and interests, reaching beyond just your followers."
        },
        {
          type: "match",
          q: "Match each social targeting type to its example.",
          pairs: [["Demographic", "Age, gender, or income"], ["Geographic", "City or region"], ["Interest-based", "Hobbies and topics people follow"]],
          explain: "Targeting can be demographic, geographic, or interest-based, letting you focus your spend on the right people."
        },
        {
          type: "truefalse",
          q: "A carousel is an ad format that lets people swipe through several images or cards.",
          answer: true,
          explain: "A carousel ad shows multiple swipeable images or cards in one unit."
        },
        {
          type: "fill",
          q: "Reusing the same message across email, social, and your site keeps your brand ____.",
          answer: "consistent",
          accept: ["consistent", "consistency", "the same"],
          explain: "Consistent messaging across channels builds trust and recognition."
        },
        {
          type: "mcq",
          q: "Which is a common paid social ad format?",
          choices: ["Video ad", "A printed newspaper insert", "A cold sales call", "A billboard on a highway"],
          answer: 0,
          explain: "Video, image, and carousel ads are common paid social formats; the others are offline channels."
        },
        {
          type: "order",
          q: "Order the steps of launching a simple paid social ad.",
          items: ["Define your target audience", "Create the ad creative", "Set the budget", "Publish and monitor results"],
          explain: "You pick who to reach, build the creative, set a budget, then publish and watch performance."
        },
        {
          type: "truefalse",
          q: "You should never check an ad again once it is running.",
          answer: false,
          explain: "Monitoring lets you pause weak ads and put more budget behind winners."
        },
        {
          type: "fill",
          q: "The specific group of people you choose to show your ad to is your target ____.",
          answer: "audience",
          accept: ["audience", "market"],
          explain: "Your target audience is the defined group you aim your ad at."
        }
      ]
    },
    {
      id: "l36",
      title: "Landing Pages & CRO",
      intro: "See how focused landing pages built to convert work, and how conversion rate optimization and strong CTAs lift results.",
      questions: [
        {
          type: "mcq",
          q: "What is the main purpose of a landing page?",
          choices: ["To get the visitor to take one specific action", "To list every product you sell", "To share your full company history", "To collect as many outbound links as possible"],
          answer: 0,
          explain: "A landing page is focused on a single goal or action, which is why it converts better than a busy page."
        },
        {
          type: "fill",
          q: "The button or link that tells a visitor what to do next is the ____.",
          answer: "call to action",
          accept: ["call to action", "cta", "call-to-action"],
          explain: "A call to action (CTA) prompts the visitor to click, buy, or sign up."
        },
        {
          type: "truefalse",
          q: "CRO stands for conversion rate optimization.",
          answer: true,
          explain: "CRO is the practice of improving the share of visitors who take the desired action."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Landing page", "Focused page built for one action"], ["CTA", "Prompt telling visitors what to do"], ["Conversion rate", "Share of visitors who take the action"]],
          explain: "The landing page hosts one goal, the CTA drives the click, and conversion rate measures success."
        },
        {
          type: "mcq",
          q: "Which change is most likely to improve a landing page conversion rate?",
          choices: ["Making the CTA clearer and removing distractions", "Adding many unrelated links", "Hiding the offer below lots of text", "Slowing the page load"],
          answer: 0,
          explain: "A clear CTA and fewer distractions help more visitors complete the one action you want."
        },
        {
          type: "order",
          q: "Order a simple conversion rate optimization loop.",
          items: ["Measure the current conversion rate", "Form a hypothesis to improve it", "Test the change", "Keep the winner and repeat"],
          explain: "CRO is a cycle: measure, hypothesize, test, then keep what works and iterate."
        },
        {
          type: "fill",
          q: "The percentage of visitors who complete the desired action is the ____ rate.",
          answer: "conversion",
          accept: ["conversion", "conversions"],
          explain: "Conversion rate is conversions divided by visitors, the key number CRO tries to raise."
        }
      ]
    },
    {
      id: "l37",
      title: "Lead Magnets & Funnels",
      intro: "Learn how offering value like a guide or discount captures leads, then how you nurture them through a funnel.",
      questions: [
        {
          type: "mcq",
          q: "What is a lead magnet?",
          choices: ["A free offer given in exchange for contact info", "A paid ad on a search engine", "A tool that deletes old leads", "A magnet-shaped promotional gift only"],
          answer: 0,
          explain: "A lead magnet is a valuable free item, like a guide or discount, offered in exchange for an email address."
        },
        {
          type: "fill",
          q: "Guiding a lead from first interest toward a purchase over time is called lead ____.",
          answer: "nurturing",
          accept: ["nurturing", "nurture"],
          explain: "Lead nurturing builds the relationship with helpful content until the lead is ready to buy."
        },
        {
          type: "order",
          q: "Order the stages of a simple marketing funnel.",
          items: ["Attention", "Interest", "Desire", "Action"],
          explain: "The AIDA funnel moves people from Attention to Interest to Desire to Action."
        },
        {
          type: "match",
          q: "Match each funnel stage to what the person feels.",
          pairs: [["Attention", "First notices your brand"], ["Interest", "Wants to learn more"], ["Action", "Buys or signs up"]],
          explain: "People move from noticing you, to learning more, to finally taking action."
        },
        {
          type: "truefalse",
          q: "A funnel is wide at the top and narrows as people move toward buying.",
          answer: true,
          explain: "Many people enter at the top, and fewer reach the bottom, so the shape narrows toward the sale."
        },
        {
          type: "mcq",
          q: "Which is a good lead magnet for a small bakery?",
          choices: ["A free guide to pairing pastries with coffee", "A random unrelated stock photo", "A blank page with no offer", "A demand for payment up front"],
          answer: 0,
          explain: "A useful, relevant freebie attracts the right leads and gives them a reason to share their email."
        },
        {
          type: "fill",
          q: "A person who has shown interest and shared their contact info is a ____.",
          answer: "lead",
          accept: ["lead", "prospect"],
          explain: "A lead is a potential customer who has engaged and given you a way to reach them."
        },
        {
          type: "truefalse",
          q: "You should ask a brand-new lead to buy your most expensive product immediately.",
          answer: false,
          explain: "New leads usually need nurturing first; pushing the biggest sale too early often backfires."
        }
      ]
    },
    {
      id: "l38",
      title: "Affiliate & Referral Marketing",
      intro: "Discover how rewarding partners and happy customers for bringing you new business can grow your reach.",
      questions: [
        {
          type: "mcq",
          q: "How does affiliate marketing work?",
          choices: ["Partners earn a commission for sales they refer", "You pay for every ad impression", "Customers pay to join your list", "You buy a list of leads"],
          answer: 0,
          explain: "Affiliates promote your product and earn a commission when their referrals result in a sale."
        },
        {
          type: "truefalse",
          q: "A referral program rewards existing customers for bringing in new customers.",
          answer: true,
          explain: "Referral programs give a reward, like a discount or credit, when a customer refers a friend."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Affiliate", "Partner paid a commission per referred sale"], ["Referral", "New customer sent by an existing one"], ["Commission", "The reward paid for a successful referral"]],
          explain: "Affiliates are paid partners, referrals come from happy customers, and commission is the reward."
        },
        {
          type: "fill",
          q: "The percentage or fee an affiliate earns per sale is called a ____.",
          answer: "commission",
          accept: ["commission", "commissions"],
          explain: "A commission is the payout an affiliate receives for each sale they drive."
        },
        {
          type: "mcq",
          q: "Why does referral marketing often work well?",
          choices: ["People trust recommendations from friends", "Referrals are always free forever", "It removes the need for a good product", "It only works for online stores"],
          answer: 0,
          explain: "Word of mouth carries trust, so a friend's recommendation often converts better than an ad."
        },
        {
          type: "order",
          q: "Order how a referral turns into a new customer.",
          items: ["Happy customer shares a referral link", "Friend clicks the link", "Friend makes a purchase", "Referrer earns a reward"],
          explain: "The customer shares, the friend buys, and the referrer gets rewarded, encouraging more sharing."
        },
        {
          type: "truefalse",
          q: "Affiliates and referrers should be paid before you confirm the sale actually happened.",
          answer: false,
          explain: "Rewards are normally tied to a confirmed sale to avoid paying for referrals that did not convert."
        }
      ]
    },
    {
      id: "l39",
      title: "Retargeting",
      intro: "Learn how to re-reach people who already engaged with you, using pixels and warm audiences.",
      questions: [
        {
          type: "mcq",
          q: "What is retargeting?",
          choices: ["Showing ads to people who already visited or engaged", "Finding brand-new audiences who never heard of you", "Deleting your ad accounts", "Sending only printed mail"],
          answer: 0,
          explain: "Retargeting re-reaches people who already interacted with you, since they are more likely to convert."
        },
        {
          type: "fill",
          q: "A small snippet of code on your site that tracks visitors for retargeting is called a ____.",
          answer: "pixel",
          accept: ["pixel", "tracking pixel"],
          explain: "A pixel is a piece of tracking code that records visitors so you can retarget them later."
        },
        {
          type: "truefalse",
          q: "A warm audience is made up of people who have already engaged with your brand.",
          answer: true,
          explain: "Warm audiences already know you, so they usually respond better than cold, first-time viewers."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [["Pixel", "Tracking code that records site visitors"], ["Warm audience", "People who already engaged with you"], ["Cold audience", "People who have never heard of you"]],
          explain: "The pixel builds your warm audience of past visitors, distinct from a cold, brand-new audience."
        },
        {
          type: "mcq",
          q: "Why is retargeting often cost-effective?",
          choices: ["Warm audiences tend to convert at a higher rate", "It reaches people who dislike your brand", "It never requires any creative", "It only works with billboards"],
          answer: 0,
          explain: "Because retargeted people already know you, they often convert more efficiently than cold audiences."
        },
        {
          type: "order",
          q: "Order how a retargeting campaign works.",
          items: ["Install a pixel on your site", "Visitor browses your site", "Pixel adds them to a warm audience", "You show them a retargeting ad"],
          explain: "The pixel captures visitors into a warm audience, which you can then target with follow-up ads."
        },
        {
          type: "fill",
          q: "People who have never interacted with your brand are called a ____ audience.",
          answer: "cold",
          accept: ["cold"],
          explain: "A cold audience has no prior relationship with you, unlike a warm, retargetable audience."
        }
      ]
    },
    {
      id: "l40",
      title: "Omnichannel Marketing",
      intro: "Understand how to give customers one consistent experience across every channel they touch.",
      questions: [
        {
          type: "mcq",
          q: "What does omnichannel marketing aim to do?",
          choices: ["Give a consistent, connected experience across all channels", "Use only a single channel forever", "Keep each channel totally separate and unrelated", "Stop using digital channels entirely"],
          answer: 0,
          explain: "Omnichannel means every channel works together to give the customer one seamless experience."
        },
        {
          type: "truefalse",
          q: "Omnichannel marketing means the customer experience should feel connected whether they use email, social, or your website.",
          answer: true,
          explain: "The goal is a joined-up experience so the customer feels recognized across every touchpoint."
        },
        {
          type: "fill",
          q: "Any point where a customer interacts with your brand is called a ____.",
          answer: "touchpoint",
          accept: ["touchpoint", "touch point"],
          explain: "A touchpoint is any interaction, like an email, ad, or store visit, along the customer journey."
        },
        {
          type: "match",
          q: "Match each approach to its description.",
          pairs: [["Single-channel", "Uses just one channel"], ["Multichannel", "Uses several channels separately"], ["Omnichannel", "Connects all channels into one experience"]],
          explain: "Omnichannel goes beyond multichannel by making the channels work together, not in isolation."
        },
        {
          type: "mcq",
          q: "Which is an example of a good omnichannel experience?",
          choices: ["A cart saved online is still there in the mobile app", "Each channel shows a different, conflicting price", "Support cannot see any past emails", "Every channel uses a different brand name"],
          answer: 0,
          explain: "A shared cart across web and app shows the channels are connected, which is the point of omnichannel."
        },
        {
          type: "order",
          q: "Order a simple omnichannel customer journey.",
          items: ["Sees a social ad", "Visits the website", "Gets a follow-up email", "Buys in the mobile app"],
          explain: "The customer moves smoothly across channels, and a good omnichannel setup keeps the experience consistent."
        },
        {
          type: "truefalse",
          q: "In omnichannel marketing, each channel should tell a completely different brand story.",
          answer: false,
          explain: "Omnichannel relies on a consistent message and brand, not conflicting stories on each channel."
        },
        {
          type: "fill",
          q: "Keeping the same look, message, and tone everywhere gives customers a ____ brand experience.",
          answer: "consistent",
          accept: ["consistent", "unified", "seamless"],
          explain: "Consistency across channels is what makes an omnichannel experience feel unified and trustworthy."
        }
      ]
    }
  ]
});
