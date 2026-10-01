/* ============================================================
   Relationship — United Kingdom & India 🇬🇧🇮🇳
   The Raj, Amritsar and a rushed Partition; the diaspora, the
   Koh-i-Noor and Britain's first Indian-origin prime minister;
   and the trade deal signed in 2025 and in force in 2026.
   India's own story of 1947 is in in-9.
   Research note and sources: tools/research/gb_in.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("gb_in", {
  id: "gb_in",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb_in-1", kind: "relation", asOf: "2026-10-01",
      title: "The Raj, Amritsar and Partition",
      dek: "A trading company became an empire, ruling India for almost two centuries. It ended in 1947 with a border drawn in five weeks and a partition that killed hundreds of thousands. Britain has never formally apologised for the Amritsar massacre.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_in/gb_in-1-hero.webp",
          alt: "Illustration of a crowded train with people on its roof and hanging from its doors, crossing a dry plain in 1947.",
          caption: "Partition in 1947 displaced more than 10 million people.",
          credit: "Illustration — not a photograph",
          prompt: "An overcrowded steam train with people sitting on its roof and clinging to its doors, crossing a flat dusty plain in 1947, bundles and luggage, hazy sky, historical documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Empire and exit", items: [
          ["1757", "East India Company victory at Plassey"],
          ["1857–58", "Indian rebellion; the Crown takes over from the Company"],
          ["13 Apr 1919", "Troops fire on a crowd at Jallianwala Bagh, Amritsar"],
          ["1942", "Gandhi's 'Quit India' campaign"],
          ["Jun 1947", "Mountbatten brings independence forward to August"],
          ["15 Aug 1947", "India and Pakistan become independent"]
        ] },
        { type: "section", head: "From company to Crown", md:
          "The English East India Company arrived to trade in 1600. After its victory at Plassey in Bengal in 1757 it became a ruling power, collecting taxes and raising armies, and by the 1850s it controlled most of the subcontinent. After a great rebellion in 1857, which the British called the Mutiny and many Indians call the First War of Independence, the Crown took over. Queen Victoria became Empress of India in 1877. British rule brought railways, universities and a common administration, but also famines, heavy taxes and the drain of wealth that Indian nationalists denounced." },
        { type: "section", head: "Amritsar", md:
          "On 13 April 1919 Brigadier-General Reginald Dyer ordered his troops to fire on an unarmed crowd in an enclosed garden, the Jallianwala Bagh, in Amritsar. British figures said 379 were killed; Indian estimates were far higher. The massacre turned many Indians, including Gandhi, against British rule for good. No British government has formally apologised. In 2013 David Cameron called it 'deeply shameful', and in 2019 the Archbishop of Canterbury prostrated himself at the memorial, but the state's position remains 'regret'." },
        { type: "section", head: "Partition", md:
          "After the Second World War an exhausted Britain decided to leave. The last viceroy, Lord Mountbatten, arrived in 1947 with a deadline of June 1948 but brought it forward by ten months, to August 1947. A barrister who had never been to India, Cyril Radcliffe, was given about five weeks to draw the borders dividing Punjab and Bengal between India and Pakistan (see [[lesson:in-9]]). In the violence that followed, estimates of the dead range from 200,000 to two million, and over 10 million people fled their homes." },
        { type: "section", head: "Commonwealth and Cold War", md:
          "India chose to stay in the Commonwealth as a republic in 1949, a formula that let other former colonies follow. But Jawaharlal Nehru's India was non-aligned and leaned toward Moscow, while Britain sided with Washington and was seen in Delhi as too friendly to Pakistan. The 1956 Suez invasion appalled Indian leaders. For decades relations were polite but cool, with Britain a fading power and India a poor one." },
        { type: "compare", head: "Two views of the Raj",
          left: { head: "Defenders", md:
            "Britain left railways, law, a civil service and the English language that help India today." },
          right: { head: "Critics", md:
            "Britain drained India's wealth, presided over famines and left it divided in blood." } },
        { type: "section", head: "Why it matters", md:
          "The memory of empire still shapes how Indians see Britain, from debates over apologies to demands for treasures to be returned." }
      ],
      takeaways: [
        "The East India Company ruled much of India from the 18th century; the Crown took over in 1858.",
        "British troops killed hundreds at Amritsar in 1919; Britain has never formally apologised.",
        "Partition in 1947, rushed by Mountbatten, displaced over 10 million and killed hundreds of thousands or more."
      ],
      check: { q: "How long was Cyril Radcliffe given to draw the Partition borders?",
        choices: ["Five years", "About five weeks", "Ten months"], answer: 1,
        explain: "He had never been to India and drew lines that split Punjab and Bengal." },
      sources: [
        { title: "India marks colonial massacre centenary, Britain makes no apology", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2019/4/13/india-marks-colonial-massacre-centenary-britain-makes-no-apology", date: "2019-04-13" },
        { title: "How a British royal's monumental errors made India's partition more painful", publisher: "The Conversation", url: "https://theconversation.com/how-a-british-royals-monumental-errors-made-indias-partition-more-painful-81657", date: "2017" },
        { title: "Independence and Partition, 1947", publisher: "National Army Museum", url: "https://www.nam.ac.uk/explore/independence-and-partition-1947", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb_in-2", kind: "relation", asOf: "2026-10-01",
      title: "Diaspora, a diamond and a prime minister",
      dek: "Nearly two million Britons have Indian roots, and in 2022 one became prime minister. But the Koh-i-Noor stays in the Tower of London, and Sikh separatist protests in London anger Delhi.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_in/gb_in-2-hero.webp",
          alt: "Illustration of a jewelled crown with a large oval diamond on a velvet cushion in a dim display case.",
          caption: "India has asked for the Koh-i-Noor diamond, now in a British crown, to be returned.",
          credit: "Illustration — not a photograph",
          prompt: "An ornate jewelled crown with a large oval diamond at its front resting on a purple velvet cushion inside a glass display case, dim museum lighting, reflections on the glass, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Ties of people", items: [
          ["1947 & 1953", "India asks for the Koh-i-Noor's return; Britain refuses"],
          ["1950s–60s", "Migration from India to Britain's factories and hospitals"],
          ["1972", "Asians expelled from Uganda resettle in Britain"],
          ["Oct 2022", "Rishi Sunak becomes Britain's first prime minister of Indian origin"],
          ["Mar 2023", "Protesters pull down India's flag at its London mission"],
          ["2024", "Labour's Starmer replaces Sunak"]
        ] },
        { type: "section", head: "Britain's Indians", md:
          "After the war, Indians came to Britain to work in textile mills, foundries, transport and the new National Health Service. In 1972 thousands more arrived when Idi Amin expelled Asians from Uganda; many built successful businesses. Today about 1.9 million people of Indian origin live in Britain, the largest Indian diaspora in Europe. They are prominent in medicine, business and politics, and Indian food is a national staple; chicken tikka masala was once called Britain's national dish." },
        { type: "section", head: "Prime Minister Sunak", md:
          "In October 2022 Rishi Sunak, whose grandparents came from Punjab via East Africa, became Britain's first prime minister of Indian origin and its first Hindu leader. His wife, Akshata Murty, is the daughter of the founder of the Indian IT giant Infosys. Indians celebrated, and some saw it as a reversal of history. Sunak lost the 2024 election to Keir Starmer, but Indian-origin politicians remain prominent in both main parties." },
        { type: "section", head: "The Koh-i-Noor", md:
          "The Koh-i-Noor, one of the world's most famous diamonds, passed through Mughal, Persian, Afghan and Sikh hands before the East India Company took it from the boy Maharaja Duleep Singh in 1849 and presented it to Queen Victoria. It now sits in a crown in the Tower of London. India asked for it back in 1947 and 1953, and the demands grew after Queen Elizabeth II died in 2022. Pakistan, Afghanistan and Iran also claim it, and Britain says it has no plans to return it." },
        { type: "section", head: "Khalistan protests", md:
          "Some British Sikhs back Khalistan, the idea of a separate Sikh state in Punjab, which India regards as a terrorist cause. On 19 March 2023 protesters pulled down the Indian flag at India's High Commission in London and broke a window; India summoned Britain's top diplomat in Delhi and accused London of lax security. Delhi has long pressed Britain to act against Khalistan activists, while British officials say peaceful protest is legal." },
        { type: "section", head: "The empire strikes back at cricket", md:
          "Cricket, once the game of the Raj, now shows the shift in power. India's cricket board is the richest in the world, and its Indian Premier League pays English players more for a few weeks than many earn in a season at home. Matches between England and India fill grounds in both countries, with large crowds of Indian fans in the stands in London and Birmingham." },
        { type: "compare", head: "The living bridge",
          left: { head: "Asset", md:
            "The diaspora links business, culture and family across the two countries." },
          right: { head: "Friction", md:
            "Disputes over Khalistan, Kashmir and Hindu nationalism are also fought in British streets." } },
        { type: "section", head: "Why it matters", md:
          "People, not just governments, now bind Britain and India. Both sides call the diaspora a 'living bridge', and it shapes British politics too." }
      ],
      takeaways: [
        "About 1.9 million people of Indian origin live in Britain.",
        "Rishi Sunak became Britain's first prime minister of Indian origin in 2022.",
        "India wants the Koh-i-Noor back, and is angered by Khalistan protests in Britain."
      ],
      check: { q: "What happened at India's High Commission in London in March 2023?",
        choices: ["A trade deal was signed", "Pro-Khalistan protesters pulled down the Indian flag", "The Koh-i-Noor was returned"], answer: 1,
        explain: "India summoned Britain's top diplomat in Delhi over security at its mission." },
      sources: [
        { title: "With Queen Elizabeth's Death, Indians Want Kohinoor Returned", publisher: "TIME", url: "https://time.com/6212113/queen-elizabeth-india-kohinoor-diamond/", date: "2022-09" },
        { title: "It matters that Rishi Sunak has become the UK's first prime minister of Indian descent", publisher: "The Conversation", url: "https://theconversation.com/it-matters-that-rishi-sunak-has-become-the-uks-first-prime-minister-of-indian-descent-193154", date: "2022-10" },
        { title: "Khalistan Supporters Pull Down Indian Flag At London High Commission, India Summons Top British Diplomat In Protest", publisher: "Outlook India", url: "https://www.outlookindia.com/national/khalistan-supporters-pull-down-indian-flag-at-london-high-commission-india-summons-top-british-diplomat-in-protest-news-271459", date: "2023-03-20" },
        { title: "South Asians in the United Kingdom", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/South_Asians_in_the_United_Kingdom", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb_in-3", kind: "relation", asOf: "2026-10-01",
      title: "A trade deal at last",
      dek: "After three years of talks, Starmer and Modi signed a free trade agreement at Chequers in July 2025. It took effect in July 2026, and Andy Burnham now has to make it work.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_in/gb_in-3-hero.webp",
          alt: "Illustration of cases of Scotch whisky being loaded onto a ship at a busy port, with containers stacked behind.",
          caption: "The trade deal cuts India's steep tariffs on Scotch whisky.",
          credit: "Illustration — not a photograph",
          prompt: "Wooden crates and cases of whisky bottles being loaded onto a cargo ship at a busy port, stacked shipping containers and cranes behind, grey northern sky, documentary painting style, no people close up, no logos, no flags, no legible text." },
        { type: "timeline", head: "From talks to treaty", items: [
          ["Jan 2022", "Free trade talks begin"],
          ["Oct 2022", "Johnson's Diwali target is missed"],
          ["24 Jul 2025", "Modi and Starmer sign the deal at Chequers"],
          ["Oct 2025", "Starmer leads a trade mission to Mumbai"],
          ["15 Jul 2026", "The agreement enters into force"],
          ["20 Jul 2026", "Burnham becomes prime minister"]
        ] },
        { type: "section", head: "Missed deadlines", md:
          "After Brexit, Britain wanted trade deals with fast-growing economies, and India, the world's most populous country, topped the list. Talks began in January 2022, and Boris Johnson promised a deal by Diwali that October. The deadline passed, and so did several prime ministers. Sticking points included Indian tariffs on Scotch whisky and cars, British visas for Indian workers, and a British plan to tax carbon-heavy imports." },
        { type: "section", head: "Signed at Chequers", md:
          "On 24 July 2025 Narendra Modi and Keir Starmer signed the Comprehensive Economic and Trade Agreement at Chequers, the prime minister's country house. Britain said it would raise trade by £25.5 billion a year by 2040. About 99% of India's exports to Britain, from textiles to jewellery, enter duty-free or at reduced tariffs, and India will cut its 150% tariff on whisky to 75% at once and 40% over ten years, and lower duties on British cars, medical devices and food." },
        { type: "section", head: "Workers and visas", md:
          "A separate agreement, the Double Contributions Convention, spares Indian workers on short postings in Britain, and their employers, from paying national insurance for up to three years. Critics in Britain called it a giveaway; the government said British workers in India get the same treatment. Britain refused India's broader requests for easier visas, a sensitive issue given voters' concerns about migration (see [[lesson:gb-8]])." },
        { type: "section", head: "From Mumbai to Burnham", md:
          "In October 2025 Starmer made his first official visit to India, taking a large business delegation to Mumbai, where he and Modi spoke at a fintech festival and announced new investments, including British universities opening campuses in India. The agreement came into force on 15 July 2026. Five days later Andy Burnham became prime minister (see [[lesson:gb-6]]), inheriting the deal and the job of making it deliver." },
        { type: "section", head: "Beyond trade", md:
          "Alongside the trade deal, the two governments agreed in July 2025 a 'Vision 2035' roadmap for cooperation in defence, technology, climate and education. In October 2025 they announced a deal for British-made lightweight missiles for the Indian army. Britain sees India as a partner in the Indo-Pacific and a counterweight to China; India wants British technology and investment, and fewer lectures about its human rights record." },
        { type: "compare", head: "Who gains?",
          left: { head: "Britain", md:
            "Cheaper access for whisky, cars and services to a huge, growing market." },
          right: { head: "India", md:
            "Duty-free access for textiles, leather and food, and help for its workers abroad." } },
        { type: "section", head: "Why it matters", md:
          "The deal is Britain's biggest since Brexit and India's most ambitious with a Western economy. It also sets a model for India's talks with the EU and the US (see [[lesson:in-6]])." }
      ],
      takeaways: [
        "Britain and India signed a free trade agreement at Chequers on 24 July 2025.",
        "It cuts tariffs on 99% of Indian exports and halves India's whisky tariff at once.",
        "The deal entered into force on 15 July 2026, days before Burnham became prime minister."
      ],
      check: { q: "When did the UK–India trade agreement enter into force?",
        choices: ["October 2022", "15 July 2026", "January 2025"], answer: 1,
        explain: "It was signed in July 2025 and took effect a year later." },
      sources: [
        { title: "UK and India sign free trade agreement during Modi visit", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/7/24/uk-and-india-sign-free-trade-agreement-during-modi-visit", date: "2025-07-24" },
        { title: "Historic UK-India Free Trade Agreement is now in effect", publisher: "GOV.UK", url: "https://www.gov.uk/government/news/historic-uk-india-free-trade-agreement-is-now-in-effect", date: "2026-07-15" },
        { title: "Modi, Starmer hail UK-India trade deal as new investment revealed", publisher: "Al Jazeera", url: "https://www.aljazeera.com/amp/news/2025/10/9/modi-starmer-hail-uk-india-trade-deal-as-new-investment-revealed", date: "2025-10-09" },
        { title: "UK-India Free Trade Agreement", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10258/", date: "n.d." },
        { title: "New UK PM Andy Burnham Will Inherit Landmark India Trade Deal—What's Next?", publisher: "Outlook Business", url: "https://www.outlookbusiness.com/economy-and-policy/new-uk-pm-andy-burnham-inherits-landmark-india-trade-dealwhats-next", date: "2026-07" }
      ]
    }
  ]
});
