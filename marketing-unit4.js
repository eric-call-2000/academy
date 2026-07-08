window.ACADEMY.addUnit("marketing", {
  id: "unit-4",
  title: "Content & Social Media",
  color: "#ce82ff",
  icon: "📝",
  description: "Attracting an audience with content and showing up where they hang out.",
  lessons: [
    {
      id: "l25",
      title: "Content Marketing 101",
      intro: "Attracting and keeping customers by publishing content that is genuinely useful to them.",
      questions: [
        {
          type: "mcq",
          q: "What is the core idea of content marketing?",
          choices: [
            "Creating useful content to attract and keep an audience",
            "Buying as many ads as your budget allows",
            "Cold-calling strangers from a purchased list",
            "Sending the same coupon to everyone every day"
          ],
          answer: 0,
          explain: "Content marketing earns attention by publishing genuinely helpful content, rather than interrupting people with ads."
        },
        {
          type: "truefalse",
          q: "Good content marketing focuses on helping the reader, not just selling to them.",
          answer: true,
          explain: "Leading with real value builds trust, which makes the eventual sale much easier."
        },
        {
          type: "fill",
          q: "Content marketing is a form of ____ marketing, where you draw people in instead of pushing messages out.",
          answer: "inbound",
          accept: ["inbound"],
          explain: "Inbound marketing pulls interested people toward you; outbound pushes messages out to a broad audience."
        },
        {
          type: "mcq",
          q: "Which of these is a typical goal of content marketing?",
          choices: [
            "Building trust and authority over time",
            "Guaranteeing a sale from the very first post",
            "Avoiding any contact with customers",
            "Hiding what your business actually does"
          ],
          answer: 0,
          explain: "Content works over time by building trust and positioning you as a helpful expert."
        },
        {
          type: "order",
          q: "Put a simple content-marketing flow in order, from stranger to customer.",
          items: [
            "A stranger finds your helpful article",
            "They read more of your content and trust you",
            "They join your email list",
            "They buy when they are ready"
          ],
          explain: "Content nurtures people through a journey from first discovery to a confident purchase."
        },
        {
          type: "truefalse",
          q: "Content marketing usually delivers results instantly, within a day or two.",
          answer: false,
          explain: "Content marketing is a long game; trust and search visibility build up over weeks and months."
        },
        {
          type: "match",
          q: "Match each content-marketing idea to its meaning.",
          pairs: [
            ["Value-first", "Help the reader before asking for anything"],
            ["Evergreen", "Content that stays useful for a long time"],
            ["Lead magnet", "A free resource offered in exchange for an email"]
          ],
          explain: "These are common building blocks of a practical content strategy."
        },
        {
          type: "mcq",
          q: "What is a lead magnet?",
          choices: [
            "A free, useful resource offered in exchange for contact info",
            "A magnet you mail to every household",
            "A paid ad on a search engine",
            "A discount code printed on a receipt"
          ],
          answer: 0,
          explain: "A lead magnet (like a checklist or guide) trades genuine value for an email address so you can keep in touch."
        }
      ]
    },
    {
      id: "l26",
      title: "Types of Content",
      intro: "Matching the right format, from blogs to video to newsletters, to your audience and message.",
      questions: [
        {
          type: "match",
          q: "Match each content format to a good use for it.",
          pairs: [
            ["Blog post", "Explaining a topic in depth for search"],
            ["Short video", "Quick, engaging tips that grab attention"],
            ["Infographic", "Making data or steps easy to scan"],
            ["Podcast", "Long conversations people listen to on the go"]
          ],
          explain: "Each format has natural strengths; pick the one that fits your message and audience."
        },
        {
          type: "mcq",
          q: "What is a newsletter mainly used for?",
          choices: [
            "Regularly reaching an audience directly by email",
            "Ranking first on a search engine automatically",
            "Replacing your entire website",
            "Blocking customers from contacting you"
          ],
          answer: 0,
          explain: "A newsletter is a direct channel to people who chose to hear from you, which you own and control."
        },
        {
          type: "truefalse",
          q: "One strong piece of content can often be repurposed into several formats.",
          answer: true,
          explain: "A single blog post can become a video, a few social posts, and a newsletter section, saving time."
        },
        {
          type: "fill",
          q: "An ____ is a visual format that turns data or steps into an easy-to-scan graphic.",
          answer: "infographic",
          accept: ["infographic"],
          explain: "Infographics package information visually so readers can absorb it quickly."
        },
        {
          type: "mcq",
          q: "Which format is best when you want to demonstrate something visually, like a how-to?",
          choices: [
            "Video",
            "A plain text-only email",
            "A spreadsheet with no labels",
            "A blank landing page"
          ],
          answer: 0,
          explain: "Video shines for demonstrations, showing motion, tone, and steps that text struggles to convey."
        },
        {
          type: "truefalse",
          q: "You must be active in every content format at once to succeed.",
          answer: false,
          explain: "It is better to do one or two formats well than to spread yourself thin across all of them."
        },
        {
          type: "order",
          q: "Order these steps for repurposing one big piece of content.",
          items: [
            "Write a detailed blog post",
            "Turn key points into a short video",
            "Pull quotes into several social posts",
            "Summarize it in your newsletter"
          ],
          explain: "Starting with one substantial piece and repurposing it stretches your effort across channels."
        }
      ]
    },
    {
      id: "l27",
      title: "SEO Basics",
      intro: "Helping your content show up in search through keywords, useful content, and simple on-page basics.",
      questions: [
        {
          type: "fill",
          q: "SEO stands for search engine ____.",
          answer: "optimization",
          accept: ["optimization", "optimisation"],
          explain: "SEO is the practice of optimizing content so search engines can find, understand, and rank it."
        },
        {
          type: "mcq",
          q: "What is a keyword in SEO?",
          choices: [
            "A word or phrase people type into search",
            "A password for your website",
            "The name of your hosting company",
            "A secret code only search engines know"
          ],
          answer: 0,
          explain: "Keywords are the terms your audience searches for, and matching them helps the right people find you."
        },
        {
          type: "truefalse",
          q: "Publishing genuinely useful, well-organized content is one of the best things you can do for SEO.",
          answer: true,
          explain: "Search engines aim to reward content that truly answers what people are looking for."
        },
        {
          type: "match",
          q: "Match each on-page SEO element to what it does.",
          pairs: [
            ["Title tag", "The clickable headline shown in search results"],
            ["Meta description", "A short summary under the title in results"],
            ["Alt text", "Describes an image for search and accessibility"]
          ],
          explain: "These on-page basics help search engines and people understand your page."
        },
        {
          type: "mcq",
          q: "Which practice hurts SEO rather than helping it?",
          choices: [
            "Stuffing a page with the same keyword unnaturally",
            "Writing a clear, helpful title",
            "Answering the reader's question fully",
            "Adding descriptive alt text to images"
          ],
          answer: 0,
          explain: "Keyword stuffing reads badly and search engines discount it; natural, helpful writing wins."
        },
        {
          type: "truefalse",
          q: "SEO results are usually instant, appearing minutes after you publish.",
          answer: false,
          explain: "SEO builds over time as search engines crawl your pages and trust grows."
        },
        {
          type: "order",
          q: "Order a simple SEO workflow for a new page.",
          items: [
            "Research what your audience searches for",
            "Write helpful content around that topic",
            "Add a clear title and description",
            "Publish and improve it over time"
          ],
          explain: "Good SEO starts with understanding search intent, then serving it well on the page."
        },
        {
          type: "fill",
          q: "The ____ tag is the clickable headline that appears for your page in search results.",
          answer: "title",
          accept: ["title", "title tag"],
          explain: "A clear, relevant title tag helps both search engines and searchers understand your page."
        }
      ]
    },
    {
      id: "l28",
      title: "Choosing Social Platforms",
      intro: "Finding where your audience already spends time and focusing there instead of spreading thin.",
      questions: [
        {
          type: "mcq",
          q: "How should a small business choose which social platforms to use?",
          choices: [
            "Pick the ones where your audience already spends time",
            "Join every platform that exists",
            "Only use whichever launched most recently",
            "Avoid social media entirely no matter what"
          ],
          answer: 0,
          explain: "Go where your customers are, rather than trying to be everywhere at once."
        },
        {
          type: "match",
          q: "Match each platform to a common strength.",
          pairs: [
            ["LinkedIn", "Professional and business-to-business audiences"],
            ["Instagram", "Visual brands and photo-driven content"],
            ["TikTok", "Short-form video and trends"],
            ["YouTube", "Longer video and how-to content"]
          ],
          explain: "Different platforms attract different audiences and reward different formats."
        },
        {
          type: "truefalse",
          q: "It is usually better to do one or two platforms well than to spread yourself thin across many.",
          answer: true,
          explain: "Focused, consistent presence beats a thin presence everywhere, especially for a solo founder."
        },
        {
          type: "fill",
          q: "Posting content on social media to reach and communicate with customers is part of the ____ in the 4 Ps of the marketing mix.",
          answer: "promotion",
          accept: ["promotion"],
          explain: "Promotion is one of the 4 Ps and covers advertising, social media, and how you communicate with your audience; Place refers to distribution, meaning where the product is sold."
        },
        {
          type: "mcq",
          q: "Which platform is most associated with professional and business-to-business networking?",
          choices: [
            "LinkedIn",
            "TikTok",
            "A photo-only hobby app",
            "A gaming-only chat app"
          ],
          answer: 0,
          explain: "LinkedIn centers on careers and business, making it strong for B2B and professional content."
        },
        {
          type: "truefalse",
          q: "Every business should focus on the exact same platform.",
          answer: false,
          explain: "The best platform depends on who your audience is and where they already hang out."
        },
        {
          type: "order",
          q: "Order the steps for choosing a social platform.",
          items: [
            "Define who your audience is",
            "Find where that audience spends time",
            "Pick one or two platforms to focus on",
            "Post consistently and learn what works"
          ],
          explain: "Start from the audience, then commit to a focused, consistent presence."
        }
      ]
    },
    {
      id: "l29",
      title: "Content Calendar",
      intro: "Planning what to post and when, so you stay consistent instead of scrambling.",
      questions: [
        {
          type: "mcq",
          q: "What is a content calendar?",
          choices: [
            "A plan of what content to publish and when",
            "A list of your competitors' phone numbers",
            "A single one-time social post",
            "A calendar app used only for holidays"
          ],
          answer: 0,
          explain: "A content calendar maps out topics and dates so you stay organized and consistent."
        },
        {
          type: "truefalse",
          q: "Consistency matters more than posting a huge amount all at once and then going quiet.",
          answer: true,
          explain: "A steady, reliable rhythm keeps your audience engaged better than bursts followed by silence."
        },
        {
          type: "fill",
          q: "Planning posts in advance is called ____ your content.",
          answer: "scheduling",
          accept: ["scheduling", "batching"],
          explain: "Scheduling ahead lets you plan and often batch-create content in advance so you never scramble."
        },
        {
          type: "match",
          q: "Match each content-calendar term to its meaning.",
          pairs: [
            ["Cadence", "How often you post"],
            ["Batching", "Creating several posts in one sitting"],
            ["Theme day", "A recurring topic tied to a day"]
          ],
          explain: "These planning tools help a small team publish reliably without burning out."
        },
        {
          type: "order",
          q: "Order the steps to build a simple content calendar.",
          items: [
            "Decide how often you can post",
            "Brainstorm topics and themes",
            "Assign topics to specific dates",
            "Create and schedule the posts"
          ],
          explain: "Planning cadence first, then topics and dates, keeps the workload realistic."
        },
        {
          type: "mcq",
          q: "What is a realistic first step for a busy solo founder building a calendar?",
          choices: [
            "Choose a posting frequency you can actually sustain",
            "Commit to ten posts a day forever",
            "Never plan and post randomly",
            "Copy a competitor's calendar exactly"
          ],
          answer: 0,
          explain: "Pick a cadence you can keep long-term; consistency you can sustain beats an unrealistic pace."
        },
        {
          type: "truefalse",
          q: "A content calendar should be locked forever and never adjusted.",
          answer: false,
          explain: "Calendars are living plans; adjust them as you learn what resonates and what does not."
        }
      ]
    },
    {
      id: "l30",
      title: "Engagement & Community",
      intro: "Turning followers into fans through replies, DMs, and content your customers create themselves.",
      questions: [
        {
          type: "mcq",
          q: "What does engagement usually refer to on social media?",
          choices: [
            "Interactions like comments, replies, shares, and DMs",
            "The number of employees you have",
            "How much you spend on office rent",
            "The color scheme of your logo"
          ],
          answer: 0,
          explain: "Engagement measures how people interact with your content, not just how many see it."
        },
        {
          type: "fill",
          q: "Content created by your customers about your brand is called user-____ content.",
          answer: "generated",
          accept: ["generated"],
          explain: "User-generated content (UGC) is authentic material from real customers, which builds trust."
        },
        {
          type: "truefalse",
          q: "Replying to comments and DMs can help turn casual followers into loyal fans.",
          answer: true,
          explain: "Genuine two-way interaction makes people feel seen and deepens their connection to your brand."
        },
        {
          type: "match",
          q: "Match each community term to its meaning.",
          pairs: [
            ["UGC", "Content made by your customers"],
            ["Engagement", "Likes, comments, shares, and replies"],
            ["Community", "An audience that interacts and returns"]
          ],
          explain: "Strong communities are built on real interaction, not just follower counts."
        },
        {
          type: "mcq",
          q: "Why is user-generated content valuable?",
          choices: [
            "It feels authentic and builds trust with new customers",
            "It is always more expensive than ads",
            "It hides what customers really think",
            "It replaces the need for any product"
          ],
          answer: 0,
          explain: "People trust other customers, so real UGC can be more persuasive than polished ads."
        },
        {
          type: "truefalse",
          q: "A large follower count with no interaction is always better than a small, engaged community.",
          answer: false,
          explain: "An engaged community of real fans usually drives more sales and word of mouth than idle followers."
        },
        {
          type: "order",
          q: "Order steps to encourage user-generated content.",
          items: [
            "Create a product experience worth sharing",
            "Invite customers to post about it",
            "Reshare and thank people who do",
            "Feature the best posts to inspire more"
          ],
          explain: "Encouraging and celebrating customer posts creates a cycle of authentic content."
        }
      ]
    },
    {
      id: "l31",
      title: "Hooks, Trends & Virality",
      intro: "Understanding what makes content shareable, from strong opening hooks to riding timely trends.",
      questions: [
        {
          type: "mcq",
          q: "What is a hook in a piece of content?",
          choices: [
            "The opening that grabs attention right away",
            "The legal disclaimer at the very end",
            "The price listed in the caption",
            "The username of the account"
          ],
          answer: 0,
          explain: "A hook is the first line or moment that stops the scroll and pulls people in."
        },
        {
          type: "truefalse",
          q: "The first few seconds of a video are especially important for holding attention.",
          answer: true,
          explain: "If the opening does not hook viewers fast, most will scroll away before the message lands."
        },
        {
          type: "fill",
          q: "When content spreads rapidly as people share it widely, we say it went ____.",
          answer: "viral",
          accept: ["viral"],
          explain: "Viral content is shared so much that its reach grows quickly on its own."
        },
        {
          type: "mcq",
          q: "What is a smart, realistic way to think about going viral?",
          choices: [
            "Focus on consistently useful content; virality is a bonus you cannot guarantee",
            "Assume every post will go viral if you try hard",
            "Copy trends exactly with no relevance to your brand",
            "Post once and wait for fame"
          ],
          answer: 0,
          explain: "Virality is unpredictable, so build a steady content habit and let occasional hits be a bonus."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Hook", "The attention-grabbing opening"],
            ["Trend", "A popular format or topic of the moment"],
            ["Shareable", "Content people want to pass along"]
          ],
          explain: "Hooks earn attention, trends supply timely relevance, and shareability spreads reach."
        },
        {
          type: "truefalse",
          q: "You should jump on every trend even if it has nothing to do with your brand.",
          answer: false,
          explain: "Chasing irrelevant trends can confuse your audience; pick trends that fit your brand and message."
        },
        {
          type: "order",
          q: "Order the parts of a strong short video.",
          items: [
            "Open with a hook that grabs attention",
            "Deliver value or a clear point",
            "Keep it tight and engaging",
            "End with a call to action"
          ],
          explain: "Lead with the hook, deliver value, and close by telling viewers what to do next."
        }
      ]
    },
    {
      id: "l32",
      title: "Influencer & Creator Marketing",
      intro: "Partnering with creators who already have the trust of the audience you want to reach.",
      questions: [
        {
          type: "mcq",
          q: "What is influencer or creator marketing?",
          choices: [
            "Partnering with creators to reach their audience",
            "Buying billboards in every city",
            "Sending mass spam emails",
            "Deleting your own social accounts"
          ],
          answer: 0,
          explain: "You collaborate with a creator so their engaged, trusting audience learns about you."
        },
        {
          type: "fill",
          q: "A creator with a smaller but highly engaged audience is often called a ____-influencer.",
          answer: "micro",
          accept: ["micro"],
          explain: "Micro-influencers have smaller followings but often deliver strong engagement and trust for a lower cost."
        },
        {
          type: "truefalse",
          q: "The main value of an influencer partnership is borrowing the trust they have built with their audience.",
          answer: true,
          explain: "A recommendation from a trusted creator carries more weight than a plain ad."
        },
        {
          type: "match",
          q: "Match each influencer-marketing term to its meaning.",
          pairs: [
            ["Micro-influencer", "Smaller but highly engaged following"],
            ["Sponsored post", "Paid content promoting a brand"],
            ["Reach", "How many people see the content"]
          ],
          explain: "These terms describe the size, type, and impact of creator partnerships."
        },
        {
          type: "mcq",
          q: "What is the most important factor when choosing a creator to partner with?",
          choices: [
            "How well their audience matches your target customer",
            "Only their total follower count",
            "Whether they are the cheapest option available",
            "How many posts they make per hour"
          ],
          answer: 0,
          explain: "A relevant, well-matched audience matters more than raw follower numbers."
        },
        {
          type: "truefalse",
          q: "In many places, creators are expected to clearly disclose when a post is sponsored.",
          answer: true,
          explain: "Honest disclosure of paid partnerships keeps trust and follows common advertising guidelines."
        },
        {
          type: "order",
          q: "Order the steps to run a simple creator partnership.",
          items: [
            "Define your goal and target audience",
            "Find creators whose audience matches",
            "Agree on the content and terms",
            "Publish and measure the results"
          ],
          explain: "Start with your goal, pick a well-matched creator, agree on terms, then measure the outcome."
        }
      ]
    }
  ]
});
