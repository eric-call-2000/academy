/* ============================================================
   Relationship — UAE & India 🇦🇪🇮🇳
   Dhows, the Gulf rupee and the Indian workers who built Dubai;
   Modi's 2015 visit, a free trade deal and a Hindu temple in Abu
   Dhabi; and gas, defence and the 2026 Iran war.
   The UAE's migrant economy is in ae-12.
   Research note and sources: tools/research/ae_in.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ae_in", {
  id: "ae_in",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ae_in-1", kind: "relation", asOf: "2026-10-01",
      title: "Dhows, rupees and workers",
      dek: "Before oil, the Gulf traded with India and used the Indian rupee. After oil, Indians built and staffed the UAE. Today more than four million live there, the country's largest community.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae_in/ae_in-1-hero.webp",
          alt: "Illustration of wooden dhows loaded with goods moored along a creek with old wind towers and modern towers behind.",
          caption: "Wooden dhows still carry goods between Dubai Creek and India's west coast.",
          credit: "AI illustration — not a photograph",
          prompt: "Several wooden dhows loaded with sacks and boxes moored along a busy creek, old buildings with traditional wind towers on one bank and glass skyscrapers in the hazy distance, warm afternoon light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Old ties", items: [
          ["Centuries", "Dhows carry dates, pearls, spices and timber across the Arabian Sea"],
          ["1959–66", "The Reserve Bank of India issues a 'Gulf rupee'"],
          ["1971", "The UAE is founded"],
          ["1970s", "Oil boom brings Indian workers in large numbers"],
          ["1981", "Indira Gandhi visits"],
          ["2024", "More than 4 million Indians in the UAE"]
        ] },
        { type: "section", head: "Across the Arabian Sea", md:
          "For centuries wooden dhows sailed between the pearling towns of the lower Gulf and India's west coast, carrying dates and pearls one way and rice, spices, cloth and timber the other. Indian merchants settled in Dubai and Sharjah. The Gulf was so tied to India that the Indian rupee was its currency; from 1959 to 1966 the Reserve Bank of India even issued a special 'Gulf rupee' for use there. Many families in today's UAE still speak some Hindi or Urdu." },
        { type: "section", head: "Building the Emirates", md:
          "After the UAE was founded in 1971 (see [[lesson:ae-9]]) and oil money flowed, it needed workers on an enormous scale. Indians came in their hundreds of thousands, many from Kerala, to build roads, towers and airports, and to work in shops, hospitals, offices and homes. By 2024 more than 4 million Indians lived in the UAE, more than a third of its population and its largest national group, over half of them in Dubai (see [[lesson:ae-12]])." },
        { type: "section", head: "Two sides of migration", md:
          "For India, the Gulf is a lifeline: Indians in Gulf states send home about 40% of all the money Indian migrants remit, supporting millions of families. For many workers, the UAE offers wages far higher than at home. But low-paid labourers have long faced harsh conditions: passports kept by employers, crowded camps, summer heat and debts to recruitment agents. The UAE has reformed some rules, and India has pressed for better protection." },
        { type: "section", head: "Politics lagged behind", md:
          "For decades the political relationship did not match the human one. The UAE was close to Pakistan, a fellow Muslim state, and Indian prime ministers rarely visited; after Indira Gandhi in 1981, no Indian prime minister came for 34 years. Business boomed regardless, as Dubai became a trading hub for Indian gold, diamonds and goods re-exported across the region and Africa." },
        { type: "section", head: "Cricket and cinema", md:
          "Indian culture is everywhere in the Emirates. Bollywood stars own homes in Dubai and premiere films there, and Indian cricket has found a second home in the desert: when security or the pandemic made India unsafe, the Indian Premier League moved matches to the UAE, in 2014 and again in 2020 and 2021. Dubai's stadiums fill with Indian fans whenever India plays." },
        { type: "compare", head: "Who needs whom",
          left: { head: "UAE", md:
            "Indian workers, professionals and businesses run much of its economy." },
          right: { head: "India", md:
            "Gulf jobs and remittances support millions of families, especially in Kerala." } },
        { type: "section", head: "Why it matters", md:
          "People came first in this relationship; politics caught up only in 2015. That human foundation makes it one of India's steadiest partnerships." }
      ],
      takeaways: [
        "The Gulf used the Indian rupee until the 1960s, including a special 'Gulf rupee' from 1959 to 1966.",
        "More than 4 million Indians live in the UAE, its largest national community.",
        "No Indian prime minister visited for 34 years after 1981, even as trade boomed."
      ],
      check: { q: "What currency did the Gulf use before the 1960s?",
        choices: ["The British pound", "The Indian rupee, including a special 'Gulf rupee'", "The US dollar"], answer: 1,
        explain: "The Reserve Bank of India issued Gulf rupees from 1959 to 1966." },
      sources: [
        { title: "Dubai or Mumbai? Over half of UAE's 4.36 million Indians now live in one city", publisher: "Gulf News", url: "https://gulfnews.com/uae/people/indian-expat-population-in-uae-doubles-to-436-million-more-than-half-live-in-dubai-envoys-1.500129223", date: "2025" },
        { title: "Indians in the United Arab Emirates", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Indians_in_the_United_Arab_Emirates", date: "n.d." },
        { title: "Despite small diaspora share, Gulf-based Indians send home 40% of remittances", publisher: "Arab News", url: "https://www.arabnews.com/node/2597684/world", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ae_in-2", kind: "relation", asOf: "2026-10-01",
      title: "Modi, MBZ and a temple",
      dek: "Modi's 2015 visit started a close friendship with Mohamed bin Zayed. A free trade deal followed, and in 2024 Modi opened a grand Hindu temple in Abu Dhabi.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae_in/ae_in-2-hero.webp",
          alt: "Illustration of a large carved pink sandstone Hindu temple with spires standing in a desert landscape at sunset.",
          caption: "The BAPS Hindu Mandir near Abu Dhabi opened in February 2024.",
          credit: "AI illustration — not a photograph",
          prompt: "A large intricately carved pink sandstone Hindu temple with several ornate spires standing in a flat desert landscape at sunset, a reflecting pool in front, warm golden light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A strategic partnership", items: [
          ["Aug 2015", "Modi visits, the first Indian PM in 34 years"],
          ["Jan 2017", "MBZ is chief guest at Republic Day"],
          ["2019", "UAE awards Modi the Order of Zayed"],
          ["Feb 2022", "Free trade agreement (CEPA) signed"],
          ["2023", "First trade settled in rupees and dirhams"],
          ["14 Feb 2024", "BAPS Hindu temple opens in Abu Dhabi"]
        ] },
        { type: "section", head: "2015", md:
          "In August 2015 Narendra Modi became the first Indian prime minister to visit the UAE since 1981. Crown Prince Mohamed bin Zayed (MBZ) greeted him at the airport, and the UAE offered land for a Hindu temple. MBZ was chief guest at India's Republic Day in 2017, and the two signed a 'comprehensive strategic partnership'. In 2019, weeks after India revoked Kashmir's special status, the UAE awarded Modi the Order of Zayed, its highest civilian honour, a sign of how far it had moved from automatically siding with Pakistan." },
        { type: "section", head: "The trade deal", md:
          "In February 2022 India and the UAE signed a Comprehensive Economic Partnership Agreement, India's first big trade deal in a decade and the UAE's first ever, which took effect that May. It cut tariffs on most goods, from Indian jewellery and textiles to Emirati petrochemicals, aiming to raise non-oil trade above $100 billion within five years. The UAE has become one of India's largest trading partners and investors, and in 2023 the two began settling some trade in rupees and dirhams." },
        { type: "section", head: "A temple in the desert", md:
          "On 14 February 2024 Modi inaugurated the BAPS Hindu Mandir near Abu Dhabi, the first traditional stone Hindu temple in the Middle East, built of pink sandstone from Rajasthan on land donated by the UAE. For the UAE, it showcased the tolerance it promotes as a brand. For Modi, speaking to a stadium of Indian expatriates, it was a powerful image weeks before India's general election." },
        { type: "section", head: "Quiet diplomacy", md:
          "The UAE has also played a quiet role between India and Pakistan. Reports said Emirati officials helped broker back-channel talks that led to a ceasefire along the Line of Control in Kashmir in February 2021. Both countries also joined the India–Middle East–Europe corridor announced at the 2023 Delhi G20 (see [[lesson:in_sa-2]]), in which the UAE's ports would be a key link." },
        { type: "section", head: "Digital money", md:
          "The two have also linked their payment systems. In February 2024 they connected India's UPI instant-payment network with the UAE's own, and Indian RuPay cards can be used in the Emirates, making it cheaper and quicker for workers to send money home and for tourists to pay in shops." },
        { type: "compare", head: "Why the UAE chose India",
          left: { head: "Economics", md:
            "A huge, growing market for its oil, gas and investments as Western demand fades." },
          right: { head: "Strategy", md:
            "A rising power and a counterweight to rivals, without lectures about democracy." } },
        { type: "section", head: "Why it matters", md:
          "Modi and MBZ turned an old trading relationship into a strategic one. It is now among India's closest partnerships anywhere." }
      ],
      takeaways: [
        "Modi's 2015 visit, the first by an Indian PM in 34 years, launched a strategic partnership with MBZ.",
        "India and the UAE signed a free trade agreement in February 2022.",
        "Modi opened the first traditional stone Hindu temple in the Middle East near Abu Dhabi in 2024."
      ],
      check: { q: "What did India and the UAE sign in February 2022?",
        choices: ["A defence alliance", "A comprehensive free trade agreement", "A border treaty"], answer: 1,
        explain: "It was the UAE's first such agreement and India's first big trade deal in a decade." },
      sources: [
        { title: "Indian PM Modi Opens Hindu Temple in UAE Ahead of Elections", publisher: "VOA", url: "https://www.voanews.com/a/indian-pm-modi-opens-hindu-temple-in-uae-ahead-of-elections/7487172.html", date: "2024-02-14" },
        { title: "CEPA shifts India-UAE trade into high gear", publisher: "Asia Business Law Journal", url: "https://law.asia/india-uae-cepa-trade-agreement/", date: "n.d." },
        { title: "UAE Embassy in New Delhi – Economic Cooperation", publisher: "UAE Ministry of Foreign Affairs", url: "https://www.mofa.gov.ae/en/missions/new-delhi/uae-relationships/economic-cooperation", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ae_in-3", kind: "relation", asOf: "2026-10-01",
      title: "Gas, defence and a war",
      dek: "In 2026 India became the UAE's biggest gas customer and the two agreed a defence partnership, as Iranian missiles flew over the Emirates and millions of Indians there waited anxiously.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae_in/ae_in-3-hero.webp",
          alt: "Illustration of a liquefied gas carrier sailing past a modern port with cranes, under a hazy sky streaked with contrails.",
          caption: "India agreed in 2026 to become the UAE's biggest buyer of liquefied natural gas.",
          credit: "AI illustration — not a photograph",
          prompt: "A large liquefied natural gas carrier with domed tanks sailing past a modern Gulf port with cranes and storage tanks, a hazy sky with faint contrails, calm sea, documentary painting style, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "Deepening in a storm", items: [
          ["19 Jan 2026", "MBZ's three-hour visit to Delhi: LNG deal and defence pledge"],
          ["28 Feb 2026", "Iran war begins"],
          ["13 Mar 2026", "Iranian missiles and drones over the UAE; India issues advisories"],
          ["15 May 2026", "Modi in Abu Dhabi, his eighth UAE visit"],
          ["May 2026", "Defence partnership framework; oil reserve deal"],
          ["2032", "Target: $200 billion in two-way trade"]
        ] },
        { type: "section", head: "MBZ's dash to Delhi", md:
          "On 19 January 2026 MBZ, now the UAE's president, flew to Delhi for a visit of about three hours. Modi met him at the airport. They agreed a $3 billion deal under which ADNOC Gas will supply India with liquefied natural gas for ten years, making India the UAE's top LNG customer, pledged to double trade to $200 billion in six years, and agreed to work toward a strategic defence partnership." },
        { type: "section", head: "The war", md:
          "Weeks later the Iran war began (see [[lesson:ir-7]]). Iran fired missiles and drones at Gulf states hosting American forces, including the UAE (see [[lesson:ae-7]]). On the night of 13 March 2026 a wave of attacks was intercepted over the Emirates. India's embassy and consulate issued advisories to the Indian community, opened a 24-hour helpline and asked employers to keep track of their staff. India also evacuated thousands of its citizens from Iran itself." },
        { type: "section", head: "Modi in Abu Dhabi", md:
          "On 15 May 2026 Modi made his eighth visit to the UAE in twelve years. The two signed a framework for a Strategic Defence Partnership, an agreement for ADNOC to store up to 30 million barrels of crude in India's strategic petroleum reserves, a long-term deal for cooking gas, and an Emirati pledge of $5 billion in new investment. Critics in India questioned tying India's security to a Gulf state in the middle of a war; the government said the deals protected India's energy supply in a dangerous time." },
        { type: "section", head: "Balancing Iran", md:
          "India is friendly with both the UAE and Iran, and it buys energy from both. It called for de-escalation and has avoided taking sides in the war. In a sign of India's role, the presidents of Iran and the UAE met on the sidelines of a BRICS gathering in Delhi in 2026. India's ties with Israel, close to the UAE since the Abraham Accords (see [[lesson:ae_il-1]]), add another layer." },
        { type: "compare", head: "The partnership",
          left: { head: "Strengths", md:
            "Gas and oil for India; a huge market and workforce for the UAE; shared worries about extremism." },
          right: { head: "Risks", md:
            "War in the Gulf threatens millions of Indians and the energy flows both depend on." } },
        { type: "section", head: "Why it matters", md:
          "The UAE is now one of India's most important partners for energy, investment and security. Whether the Gulf stays calm matters to millions of Indian families and to India's economy." }
      ],
      takeaways: [
        "In January 2026 India agreed to buy $3 billion of UAE gas and the two pledged to double trade to $200 billion.",
        "Iranian missiles and drones targeted the UAE in the 2026 war, home to more than 4 million Indians.",
        "In May 2026 Modi and MBZ agreed a strategic defence partnership framework and an oil-storage deal."
      ],
      check: { q: "What did Modi and MBZ agree in May 2026?",
        choices: ["A common currency", "A framework for a strategic defence partnership and an oil-storage deal", "Indian troops in Dubai"], answer: 1,
        explain: "ADNOC can store up to 30 million barrels in India's strategic reserves." },
      sources: [
        { title: "India, UAE sign $3 billion LNG deal, agree to boost trade and defence ties at leaders' meeting", publisher: "Dawn (Reuters)", url: "https://www.dawn.com/news/1967871/india-uae-agree-to-boost-trade-and-defence-ties-finalise-lng-deal", date: "2026-01-19" },
        { title: "India and UAE sign defence pacts, as Iran war tensions simmer", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/5/15/india_and_uae_sign_defence-pacts_as_iran_war_tensions_simmer", date: "2026-05-15" },
        { title: "India and UAE sign defence and energy deals during Modi's state visit", publisher: "Middle East Eye", url: "https://www.middleeasteye.net/news/india-and-uae-sign-defence-and-energy-deals-during-modi-state-visit", date: "2026-05" },
        { title: "Evacuation Planning For A Volatile Gulf", publisher: "IMPRI", url: "https://www.impriindia.com/insights/policy-update/evacuation-planning-for-a-gulf/", date: "2026" },
        { title: "Pezeshkian-MBZ Meet In Delhi: How India's BRICS Platform Created Space For Iran-UAE Engagement", publisher: "Outlook India", url: "https://www.outlookindia.com/international/pezeshkian-mbz-meet-in-delhi-how-indias-brics-platform-created-space-for-iran-uae-engagement-amid-west-asia-tensions", date: "2026" }
      ]
    }
  ]
});
