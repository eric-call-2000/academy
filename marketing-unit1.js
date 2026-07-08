window.ACADEMY.addUnit("marketing", {
  id: "unit-1",
  title: "Marketing Foundations",
  color: "#58cc02",
  icon: "📣",
  description: "What marketing really is, the core framework, and how the pieces fit together.",
  lessons: [
    {
      id: "l1",
      title: "What Is Marketing?",
      intro: "Marketing is how you create, communicate, and deliver value to the people you want to serve.",
      questions: [
        {
          type: "mcq",
          q: "Which best describes marketing?",
          choices: [
            "Creating, communicating, and delivering value to customers",
            "Only running paid ads",
            "Only making a logo look nice",
            "Only cold-calling strangers"
          ],
          answer: 0,
          explain: "Marketing is the whole system of creating and delivering value, not just one tactic like ads."
        },
        {
          type: "truefalse",
          q: "Advertising is just one part of marketing, not the whole thing.",
          answer: true,
          explain: "Advertising is one promotional tactic. Marketing also covers the product, price, and where you sell."
        },
        {
          type: "mcq",
          q: "How does marketing differ from sales?",
          choices: [
            "Marketing creates interest and demand; sales closes the individual deal",
            "They are exactly the same job",
            "Marketing only happens after the sale",
            "Sales creates the product design"
          ],
          answer: 0,
          explain: "Marketing builds awareness and demand at scale; sales turns interested people into buyers one at a time."
        },
        {
          type: "fill",
          q: "At its core, marketing is about creating and delivering ____ to customers.",
          answer: "value",
          accept: ["value"],
          explain: "The whole point of marketing is to offer something customers find valuable."
        },
        {
          type: "match",
          q: "Match each activity to the right label.",
          pairs: [
            ["Advertising", "Paying to promote a message"],
            ["Marketing", "The full system of creating and delivering value"],
            ["Sales", "Closing deals with individual buyers"]
          ],
          explain: "Advertising and sales both live inside the bigger discipline of marketing."
        },
        {
          type: "truefalse",
          q: "Good marketing starts with understanding what customers actually need.",
          answer: true,
          explain: "Marketing works best when it begins with real customer needs, not just a product you want to push."
        },
        {
          type: "mcq",
          q: "Which of these is NOT a core job of marketing?",
          choices: [
            "Manufacturing the physical product on the factory line",
            "Communicating value to the right people",
            "Understanding customer needs",
            "Delivering value through the right channels"
          ],
          answer: 0,
          explain: "Building the product is operations. Marketing focuses on creating, communicating, and delivering value."
        }
      ]
    },
    {
      id: "l2",
      title: "The Marketing Mix (4 Ps)",
      intro: "The 4 Ps are the classic set of levers you control to bring an offer to market.",
      questions: [
        {
          type: "mcq",
          q: "What are the classic 4 Ps of the marketing mix?",
          choices: [
            "Product, Price, Place, Promotion",
            "People, Profit, Purpose, Plan",
            "Product, Profit, Place, Post",
            "Price, People, Promise, Push"
          ],
          answer: 0,
          explain: "The 4 Ps are Product, Price, Place, and Promotion."
        },
        {
          type: "match",
          q: "Match each P to what it decides.",
          pairs: [
            ["Product", "What you offer and how it meets a need"],
            ["Price", "What the customer pays for it"],
            ["Place", "Where and how it is sold or delivered"],
            ["Promotion", "How you tell people about it"]
          ],
          explain: "Each P is a lever you can adjust to shape your offer in the market."
        },
        {
          type: "fill",
          q: "In the 4 Ps, ____ refers to where and how a product reaches the customer.",
          answer: "place",
          accept: ["place", "placement", "distribution"],
          explain: "Place covers your channels and distribution, from a store shelf to an app store."
        },
        {
          type: "truefalse",
          q: "Promotion is the only P that matters, so the others can be ignored.",
          answer: false,
          explain: "All four Ps work together. A great promotion cannot save a bad product or wrong price."
        },
        {
          type: "mcq",
          q: "The extended 7 Ps add three more elements mainly for what kind of offering?",
          choices: [
            "Services",
            "Raw materials",
            "Wholesale grain",
            "Government bonds"
          ],
          answer: 0,
          explain: "The 7 Ps add People, Process, and Physical evidence, which matter a lot for services."
        },
        {
          type: "order",
          q: "Put the four classic Ps in their usual listed order.",
          items: ["Product", "Price", "Place", "Promotion"],
          explain: "The standard order is Product, Price, Place, Promotion."
        },
        {
          type: "mcq",
          q: "Deciding to sell at a premium price to signal quality is a decision about which P?",
          choices: [
            "Price",
            "Place",
            "Promotion",
            "Product"
          ],
          answer: 0,
          explain: "Price is the P that covers what you charge and the signal that price sends."
        }
      ]
    },
    {
      id: "l3",
      title: "Value Proposition",
      intro: "A value proposition is the clear promise of the benefit a customer gets from choosing you.",
      questions: [
        {
          type: "mcq",
          q: "A value proposition is best described as:",
          choices: [
            "The clear promise of value a customer gets from your offer",
            "A list of your company's internal goals",
            "The price tag alone",
            "Your office address"
          ],
          answer: 0,
          explain: "A value proposition states the concrete value a customer receives from choosing you."
        },
        {
          type: "mcq",
          q: "Which of these is a benefit rather than a feature?",
          choices: [
            "You spend less time on paperwork",
            "It has a 12-megapixel sensor",
            "It weighs 200 grams",
            "It uses a lithium battery"
          ],
          answer: 0,
          explain: "A feature is what the product has; a benefit is the outcome the customer feels, like saving time."
        },
        {
          type: "match",
          q: "Match each statement to feature or benefit.",
          pairs: [
            ["Holds 5,000 songs", "Feature"],
            ["Your whole music library in your pocket", "Benefit"]
          ],
          explain: "Features describe the product; benefits describe the customer's payoff."
        },
        {
          type: "truefalse",
          q: "Customers usually buy features, not the benefits those features give them.",
          answer: false,
          explain: "People buy the benefit or outcome. Features are just the reason to believe the benefit is real."
        },
        {
          type: "fill",
          q: "A ____ describes what the product has; a benefit describes what the customer gains.",
          answer: "feature",
          accept: ["feature"],
          explain: "Translate every feature into the benefit it delivers to the customer."
        },
        {
          type: "order",
          q: "Order these steps for turning a feature into a value proposition.",
          items: [
            "Name the feature",
            "Explain what it does",
            "State the benefit for the customer"
          ],
          explain: "Start with the feature, explain its function, then land on the customer benefit."
        },
        {
          type: "truefalse",
          q: "A strong value proposition speaks to a customer's needs, not just your product specs.",
          answer: true,
          explain: "The best value propositions focus on the customer's problem and the payoff they receive."
        }
      ]
    },
    {
      id: "l4",
      title: "Target Audience & Market",
      intro: "Choosing exactly who you serve is often more powerful than trying to reach everyone.",
      questions: [
        {
          type: "mcq",
          q: "What is a target audience?",
          choices: [
            "The specific group of people you aim to serve",
            "Everyone on earth",
            "Only your current employees",
            "The competitor's staff"
          ],
          answer: 0,
          explain: "A target audience is the defined group most likely to want and buy your offer."
        },
        {
          type: "mcq",
          q: "A niche market is best described as:",
          choices: [
            "A focused segment with specific needs",
            "The largest possible mass market",
            "A market with no customers",
            "Only foreign customers"
          ],
          answer: 0,
          explain: "A niche is a narrow, well-defined slice of the market with particular needs."
        },
        {
          type: "truefalse",
          q: "For small businesses, focusing on a niche often works better than chasing everyone.",
          answer: true,
          explain: "A clear niche lets a small business stand out and spend limited resources efficiently."
        },
        {
          type: "match",
          q: "Match the market approach to its description.",
          pairs: [
            ["Mass market", "Aiming a broad offer at nearly everyone"],
            ["Niche market", "Serving a focused group with specific needs"]
          ],
          explain: "Mass goes wide; niche goes deep on a specific group."
        },
        {
          type: "fill",
          q: "Trying to appeal to everyone often means you appeal strongly to ____.",
          answer: "no one",
          accept: ["no one", "nobody", "none"],
          explain: "A message aimed at everyone tends to feel generic and connect with no one in particular."
        },
        {
          type: "mcq",
          q: "Why does niching often win for a solo founder or small business?",
          choices: [
            "You can tailor your message and stand out with fewer resources",
            "Because niches never have any competition ever",
            "Because it guarantees you will go viral",
            "Because you never have to talk to customers"
          ],
          answer: 0,
          explain: "A tight niche lets small players tailor messaging and compete without a huge budget."
        },
        {
          type: "truefalse",
          q: "Defining your target audience helps you decide where to spend limited marketing effort.",
          answer: true,
          explain: "Knowing who you serve tells you which channels and messages are worth your time."
        }
      ]
    },
    {
      id: "l5",
      title: "The Marketing Funnel",
      intro: "The funnel shows how a large audience narrows down to a smaller group of buyers and loyal fans.",
      questions: [
        {
          type: "order",
          q: "Put the common funnel stages in order from top to bottom.",
          items: [
            "Awareness",
            "Interest",
            "Consideration",
            "Conversion",
            "Loyalty"
          ],
          explain: "People move from first hearing of you (awareness) down to buying (conversion) and returning (loyalty)."
        },
        {
          type: "truefalse",
          q: "It is called a funnel because fewer people reach each stage as you go down.",
          answer: true,
          explain: "The shape narrows because not everyone who is aware will consider, and not everyone who considers will buy."
        },
        {
          type: "mcq",
          q: "At which stage does a person actually become a paying customer?",
          choices: [
            "Conversion",
            "Awareness",
            "Interest",
            "Consideration"
          ],
          answer: 0,
          explain: "Conversion is the stage where interest turns into a purchase or signup."
        },
        {
          type: "match",
          q: "Match each funnel stage to what the person is doing.",
          pairs: [
            ["Awareness", "First learning you exist"],
            ["Consideration", "Comparing you against options"],
            ["Loyalty", "Buying again and recommending you"]
          ],
          explain: "Each stage reflects a different mindset on the path from stranger to repeat customer."
        },
        {
          type: "fill",
          q: "The top of the funnel is the ____ stage, where people first learn you exist.",
          answer: "awareness",
          accept: ["awareness"],
          explain: "Awareness sits at the wide top of the funnel."
        },
        {
          type: "mcq",
          q: "The classic AIDA model stands for:",
          choices: [
            "Attention, Interest, Desire, Action",
            "Ads, Income, Data, Analysis",
            "Awareness, Income, Demand, Ads",
            "Attention, Income, Desire, Awareness"
          ],
          answer: 0,
          explain: "AIDA is Attention, Interest, Desire, Action, a simple version of the funnel."
        },
        {
          type: "truefalse",
          q: "Loyalty is a wasted stage because the customer already bought once.",
          answer: false,
          explain: "Loyalty matters a lot. Repeat customers and referrals are often cheaper to earn than brand-new ones."
        }
      ]
    },
    {
      id: "l6",
      title: "The Customer Journey",
      intro: "The customer journey maps every touchpoint a person hits on the way from stranger to repeat buyer.",
      questions: [
        {
          type: "mcq",
          q: "What is a touchpoint?",
          choices: [
            "Any moment a person interacts with your brand",
            "The physical cash register only",
            "A competitor's website",
            "The factory loading dock"
          ],
          answer: 0,
          explain: "A touchpoint is any interaction, like an ad, a review, an email, or a support chat."
        },
        {
          type: "truefalse",
          q: "The customer journey often spans many touchpoints across different channels.",
          answer: true,
          explain: "People usually see you several times, in several places, before and after they buy."
        },
        {
          type: "order",
          q: "Order these touchpoints as a typical journey.",
          items: [
            "Sees a social post",
            "Visits the website",
            "Makes a purchase",
            "Gets a follow-up email"
          ],
          explain: "A common path runs from first exposure to the site, to buying, to post-purchase follow-up."
        },
        {
          type: "match",
          q: "Match the journey phase to a typical touchpoint.",
          pairs: [
            ["Discovery", "Seeing a social post or search result"],
            ["Evaluation", "Reading reviews and comparing"],
            ["Post-purchase", "Getting a thank-you or support email"]
          ],
          explain: "Each phase of the journey has its own natural touchpoints."
        },
        {
          type: "fill",
          q: "Mapping the customer ____ helps you find gaps where people drop off.",
          answer: "journey",
          accept: ["journey"],
          explain: "A journey map shows where the experience breaks down so you can fix it."
        },
        {
          type: "mcq",
          q: "Why map the customer journey?",
          choices: [
            "To understand and improve each step of the experience",
            "To make the process longer on purpose",
            "To hide information from customers",
            "To avoid ever talking to customers"
          ],
          answer: 0,
          explain: "Mapping reveals friction points so you can smooth the path and keep people moving forward."
        },
        {
          type: "truefalse",
          q: "The journey ends the moment someone makes their first purchase.",
          answer: false,
          explain: "The journey continues after purchase through onboarding, support, and repeat buying."
        }
      ]
    },
    {
      id: "l7",
      title: "Marketing vs. Sales",
      intro: "Marketing and sales are different jobs that hand off to each other along the funnel.",
      questions: [
        {
          type: "mcq",
          q: "What is the main role of marketing?",
          choices: [
            "Create demand and generate leads at scale",
            "Sign every contract personally",
            "Ship the physical packages",
            "Handle company payroll"
          ],
          answer: 0,
          explain: "Marketing builds awareness and demand and hands qualified leads to sales."
        },
        {
          type: "mcq",
          q: "What is the main role of sales?",
          choices: [
            "Close individual deals with interested prospects",
            "Design the company logo",
            "Write blog posts for the public",
            "Run the email newsletter"
          ],
          answer: 0,
          explain: "Sales works one-on-one to turn qualified leads into paying customers."
        },
        {
          type: "match",
          q: "Match the function to its focus.",
          pairs: [
            ["Marketing", "Reaches many people to create demand"],
            ["Sales", "Works one-on-one to close deals"]
          ],
          explain: "Marketing is one-to-many; sales is more one-to-one."
        },
        {
          type: "truefalse",
          q: "A lead is a potential customer that marketing passes along to sales.",
          answer: true,
          explain: "A lead is someone who has shown interest and may be ready for a sales conversation."
        },
        {
          type: "order",
          q: "Order the handoff from marketing to sales.",
          items: [
            "Marketing attracts an audience",
            "A person becomes an interested lead",
            "Sales follows up and closes the deal"
          ],
          explain: "Marketing generates the lead, then sales carries it across the finish line."
        },
        {
          type: "fill",
          q: "Marketing generates demand and ____; sales closes them into customers.",
          answer: "leads",
          accept: ["leads", "lead"],
          explain: "Leads are the interested prospects that marketing hands to sales."
        },
        {
          type: "truefalse",
          q: "Marketing and sales work best when they never talk to each other.",
          answer: false,
          explain: "They should align closely so the handoff is smooth and no leads fall through the cracks."
        }
      ]
    },
    {
      id: "l8",
      title: "Inbound vs. Outbound",
      intro: "Inbound pulls customers in with helpful content, while outbound pushes your message out to them.",
      questions: [
        {
          type: "mcq",
          q: "Inbound marketing works by:",
          choices: [
            "Attracting people with useful content they seek out",
            "Cold-calling random phone numbers",
            "Buying billboards on every highway",
            "Sending unsolicited mass mail"
          ],
          answer: 0,
          explain: "Inbound draws people in with content like blogs, videos, and search results they choose to engage with."
        },
        {
          type: "mcq",
          q: "Outbound marketing works by:",
          choices: [
            "Pushing your message out to reach people directly",
            "Waiting for customers to find you by luck",
            "Only publishing help articles",
            "Never contacting anyone"
          ],
          answer: 0,
          explain: "Outbound reaches out to an audience with ads, cold outreach, or direct mail."
        },
        {
          type: "match",
          q: "Match the tactic to inbound or outbound.",
          pairs: [
            ["Blog post that ranks in search", "Inbound"],
            ["Cold email to a prospect", "Outbound"],
            ["Helpful how-to video", "Inbound"],
            ["TV commercial", "Outbound"]
          ],
          explain: "Inbound attracts through content; outbound pushes a message to an audience."
        },
        {
          type: "truefalse",
          q: "Inbound is often described as pull marketing and outbound as push marketing.",
          answer: true,
          explain: "Inbound pulls interested people toward you; outbound pushes your message out to them."
        },
        {
          type: "fill",
          q: "Inbound is a ____ approach, drawing customers in with content.",
          answer: "pull",
          accept: ["pull"],
          explain: "Inbound pulls people in, which is why it is called pull marketing."
        },
        {
          type: "mcq",
          q: "Which is a common strength of inbound marketing?",
          choices: [
            "Content can keep attracting people over time",
            "It guarantees instant results with zero effort",
            "It never requires any content at all",
            "It only works for huge corporations"
          ],
          answer: 0,
          explain: "Good inbound content can keep drawing traffic long after you publish it."
        },
        {
          type: "truefalse",
          q: "A business must pick only one and can never combine inbound and outbound.",
          answer: false,
          explain: "Many businesses blend both, using outbound for reach and inbound for lasting attraction."
        }
      ]
    }
  ]
});
