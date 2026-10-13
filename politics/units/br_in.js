/* ============================================================
   Relationship — Brazil & India 🇧🇷🇮🇳
   Indian zebu cattle that built Brazil's herds, Goa and a cool
   start; the WTO's G20, IBSA, BRICS and the G4, Embraer and a
   sugar dispute; and tariffs, Lula's 2026 state visit, rare
   earths and a 20 billion dollar trade goal.
   Research note and sources: tools/research/br_in.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("br_in", {
  id: "br_in",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "br_in-1", kind: "relation", asOf: "2026-10-12",
      title: "Cattle, Goa and distance",
      dek: "Most of Brazil's huge cattle herd descends from Indian breeds. But for decades the two giants were far apart, and Brazil's sympathy for Portugal over Goa soured early ties.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_in/br_in-1-hero.webp",
          alt: "Illustration of a herd of white humped cattle on a vast green pasture with a cowboy on horseback.",
          caption: "Most Brazilian cattle descend from Indian zebu breeds such as the Ongole, known as Nelore.",
          credit: "Illustration — not a photograph",
          prompt: "A large herd of white humped zebu cattle grazing on a vast green tropical pasture, a cowboy on horseback in the distance, scattered palm trees and low hills under big clouds, documentary painting style, figures small and distant, no flags, no legible text." },
        { type: "timeline", head: "A slow start", items: [
          ["Late 1800s", "Indian zebu cattle first imported into Brazil"],
          ["1948", "Diplomatic relations established"],
          ["1950s", "Brazil backs Portugal's claim to Goa"],
          ["1960s", "New Ongole imports shape the Nelore breed"],
          ["Dec 1961", "India takes Goa from Portugal"],
          ["1968", "Indira Gandhi visits Brazil"]
        ] },
        { type: "section", head: "Indian cattle", md:
          "Europe's cattle struggled in Brazil's heat and ticks. From the late 19th century Brazilian ranchers imported humped zebu cattle from India, which tolerate tropical conditions. Breeds such as the Ongole from Andhra Pradesh, which Brazilians call Nelore, and the Gir from Gujarat were crossed and bred into vast herds. Today the large majority of Brazil's more than 200 million cattle carry zebu blood, and Brazil is the world's largest beef exporter. In a twist, India now imports Gir bulls' genetics back from Brazil to improve its own dairy herds." },
        { type: "section", head: "Goa", md:
          "India and Brazil established diplomatic relations in 1948. But Brazil, the largest former Portuguese colony, felt kinship with Portugal, then ruled by the dictator António Salazar. When India demanded Portugal hand over its colonies of Goa, Daman and Diu, Brazil backed Lisbon. After Indian troops took Goa in December 1961, Brazil criticised the action. The episode cast a shadow over relations for years." },
        { type: "section", head: "Worlds apart", md:
          "For most of the Cold War the two had little to do with each other. Brazil, under military rule from 1964 to 1985, aligned with the United States; India led the Non-Aligned Movement and drew close to the Soviet Union. Trade was tiny, and there were few direct flights or shipping links. Indira Gandhi visited Brazil in 1968, one of few high-level contacts. Both, though, shared a suspicion of the nuclear Non-Proliferation Treaty, which neither signed at first, seeing it as unfair to developing countries." },
        { type: "section", head: "Similar giants", md:
          "By the 1990s both had opened their economies after years of protectionism, and both were vast, diverse democracies with great inequality and ambitions to be recognised as major powers. Diplomats began to see each other as natural partners. Both also wanted to develop their own space and nuclear programmes without outside interference, and both resented rules written by older powers." },
        { type: "section", head: "Distance", md:
          "The two capitals are about 14,000 kilometres apart, and there is still no direct passenger flight between them, so travellers change in Europe, the Gulf or Africa. That distance long kept the relationship thin: few Brazilians knew India beyond yoga, spices and the cattle on their ranches, and few Indians knew Brazil beyond football and carnival. Brazil's Indian community is small, a few thousand people, compared with large Indian diasporas in Britain, the Gulf or the United States." },
        { type: "compare", head: "Mirror images",
          left: { head: "Brazil", md:
            "Portuguese-speaking, Catholic, a food and mineral superpower in the Americas." },
          right: { head: "India", md:
            "Multilingual, mostly Hindu, the world's most populous country, rich in people and services." } },
        { type: "section", head: "Why it matters", md:
          "Brazil and India had to discover each other. Their partnership was built not on history but on a shared ambition to change a world order designed without them." }
      ],
      takeaways: [
        "Most of Brazil's cattle descend from Indian zebu breeds such as the Ongole (Nelore) and Gir.",
        "Brazil backed Portugal over Goa, which India took in 1961, souring early relations.",
        "During the Cold War the two had few ties: Brazil leaned to the US, India to non-alignment."
      ],
      check: { q: "What is the Nelore, so important to Brazil's beef industry?",
        choices: ["A Portuguese cattle breed", "A breed descended from India's Ongole cattle", "A type of soybean"], answer: 1,
        explain: "Zebu cattle from India suited Brazil's tropical climate." },
      sources: [
        { title: "Brazil–India relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brazil%E2%80%93India_relations", date: "n.d." },
        { title: "Nelore", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nelore", date: "n.d." },
        { title: "Annexation of Goa", publisher: "Britannica", url: "https://www.britannica.com/event/Indian-annexation-of-Goa", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "br_in-2", kind: "relation", asOf: "2026-10-12",
      title: "Clubs of the South",
      dek: "From 2003 Brazil and India teamed up at the WTO, in IBSA, in BRICS and in a joint bid for UN Security Council seats. Business ties grew, from Embraer jets to ethanol, though trade disputes flared.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_in/br_in-2-hero.webp",
          alt: "Illustration of a grey military jet with a long radar beam on its back parked on an airfield.",
          caption: "India's Netra early-warning aircraft are built on Brazilian Embraer jets.",
          credit: "Illustration — not a photograph",
          prompt: "A grey twin-engine regional jet with a long flat radar beam mounted on top of its fuselage, parked on an airfield apron in hazy Indian afternoon light, hangars behind, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Partners in diplomacy", items: [
          ["Jun 2003", "IBSA forum founded in Brasília"],
          ["Sep 2003", "Brazil and India lead the G20 trade bloc at the WTO's Cancún talks"],
          ["2004", "The G4 bid for permanent Security Council seats"],
          ["2009", "First BRIC summit, in Russia"],
          ["2019", "Brazil challenges India's sugar subsidies at the WTO"],
          ["Jan 2020", "Bolsonaro is chief guest at India's Republic Day"]
        ] },
        { type: "section", head: "Lula's South", md:
          "When Luiz Inácio Lula da Silva became Brazil's president in 2003, he made ties with other developing countries a priority. Brazil and India led a group of developing countries, known as the G20 at the WTO, that blocked a deal at the trade talks in Cancún in September 2003, demanding that rich countries cut farm subsidies first. The same year they formed the IBSA forum with South Africa. Their alliance at the WTO surprised rich countries, which had been used to negotiating farm and industrial rules among themselves, and it showed that the big emerging economies could block deals they disliked." },
        { type: "section", head: "BRICS and the G4", md:
          "In 2004 Brazil and India joined Germany and Japan in the G4, supporting each other's bids for permanent seats on the UN Security Council; the campaign has stalled for two decades. In 2009 the leaders of Brazil, Russia, India and China held the first BRIC summit, and South Africa joined in 2011. For both, [[BRICS]] became a way to demand a bigger say in the IMF and World Bank and to show they had options beyond the West." },
        { type: "section", head: "Jets and fuel", md:
          "Brazil's aircraft maker Embraer sold India jets for VIP transport and the platform for its Netra airborne early-warning aircraft, carrying an Indian-built radar. Brazil also shared its long experience of making ethanol fuel from sugar cane, which India adopted on a large scale, blending it into petrol. Indian pharmaceutical and IT firms set up in Brazil, and Brazil sold India soybean oil, sugar, crude oil and minerals. Trade grew but stayed modest, around 10 to 15 billion dollars a year." },
        { type: "section", head: "Frictions", md:
          "Both are large farm producers, and they compete. In 2019 Brazil, Australia and Guatemala challenged India's sugar subsidies at the WTO, and a panel ruled against India in 2021; India appealed. Some Brazilian politicians also criticised Indian protectionism. Yet ties survived changes of government. Jair Bolsonaro was chief guest at India's Republic Day parade in January 2020. During COVID, Brazil's deal to buy an Indian vaccine, Covaxin, was suspended in 2021 amid allegations of irregularities in the Brazilian health ministry." },
        { type: "compare", head: "Partners and competitors",
          left: { head: "Together", md:
            "At the WTO, in IBSA, BRICS and the G4, calling for reform of global institutions." },
          right: { head: "Apart", md:
            "Competing farm exporters, with disputes over sugar and protected markets." } },
        { type: "section", head: "Why it matters", md:
          "Brazil and India are the two big democracies of BRICS. Their teamwork has given the developing world a stronger voice in trade talks and global institutions." }
      ],
      takeaways: [
        "Brazil and India led developing countries at the 2003 Cancún WTO talks and founded IBSA.",
        "Both are BRICS founders and joined Germany and Japan in the G4 bid for permanent UN seats.",
        "India's Netra early-warning aircraft use Brazilian Embraer jets; the two clashed over sugar subsidies."
      ],
      check: { q: "What is the G4?",
        choices: ["A trade deal between Brazil and India", "Brazil, India, Germany and Japan supporting each other's bids for permanent UN Security Council seats", "The four BRICS founders"], answer: 1,
        explain: "The campaign began in 2004 but has stalled." },
      sources: [
        { title: "Brazil–India relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brazil%E2%80%93India_relations", date: "n.d." },
        { title: "IBSA Dialogue Forum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/IBSA_Dialogue_Forum", date: "n.d." },
        { title: "G4 nations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/G4_nations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "br_in-3", kind: "relation", asOf: "2026-10-12",
      title: "Tariffs and 'superlatives'",
      dek: "Hit by Trump's tariffs in 2025, Brazil and India drew closer. In February 2026 Lula made a state visit to India with 14 ministers, signing deals on rare earths and setting a 20 billion dollar trade goal.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_in/br_in-3-hero.webp",
          alt: "Illustration of a sandstone colonnaded government building in New Delhi with a line of black cars in front.",
          caption: "Lula's state visit to New Delhi in February 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A grand red and cream sandstone colonnaded government building in New Delhi with domes and a wide forecourt, a line of black cars arriving, winter morning light with haze, documentary painting style, figures small and distant, no flags, no legible text." },
        { type: "timeline", head: "A closer partnership", items: [
          ["Jul 2025", "Modi makes a state visit to Brasília after the BRICS summit in Rio"],
          ["Aug 2025", "US tariffs of 50% on both; Lula and Modi talk"],
          ["2025", "Two-way trade hits a record 15.2 billion dollars"],
          ["18–22 Feb 2026", "Lula's state visit to India"],
          ["Feb 2026", "Rare earths deal; 10-year visas"],
          ["25 Oct 2026", "Brazil's presidential runoff"]
        ] },
        { type: "section", head: "The tariff blow", md:
          "In 2025 President Trump imposed some of his highest tariffs on Brazil and India: 50 per cent on many goods from each. For Brazil the stated reason was the trial of Trump's ally Jair Bolsonaro for plotting a coup; for India, its purchases of Russian oil. In August 2025 Lula and Modi spoke by phone; Lula's office said the two countries were, so far, the most affected by the US measures. Both refused to back down, and both looked for other markets." },
        { type: "section", head: "Modi in Brasília", md:
          "In July 2025 Modi attended the BRICS summit in Rio de Janeiro and then made a state visit to Brasília, the first by an Indian prime minister in decades. Lula received him with a parade, and the two agreed to cooperate on energy, defence, agriculture and digital payments; India has promoted its UPI payment system, and Brazil has its own, Pix." },
        { type: "section", head: "Lula in India", md:
          "Lula returned the visit from 18 to 22 February 2026, bringing about 14 ministers and a large business delegation. He attended India's AI Impact Summit and met Modi on 21 February. Lula called it 'a meeting of superlatives', between the largest democracies of the Americas and of Asia. The two signed agreements on defence, food security, the energy transition, digital technology and industry, including one on rare earths and critical minerals, and extended business and tourist visas from five to ten years." },
        { type: "section", head: "Trade goals", md:
          "Brazil's trade ministry said trade reached a record 15.2 billion dollars in 2025. The two governments set a target of about 20 billion dollars, and Lula suggested it could be raised to 30 billion. Brazil wants to sell more food, ethanol, oil and minerals; India wants to sell more medicines, cars, chemicals and IT services. India is also interested in Brazilian Embraer aircraft and in Brazil's experience with biofuels." },
        { type: "section", head: "What next", md:
          "Brazil votes in a presidential runoff on 25 October 2026. Lula's government has championed the India relationship, and the outcome will shape how far it goes." },
        { type: "compare", head: "Shared interests",
          left: { head: "Brazil", md:
            "Markets for food and minerals, partners for its industry and a seat at the top table." },
          right: { head: "India", md:
            "Secure supplies of food, oil and minerals, and a partner for reforming global institutions." } },
        { type: "section", head: "Why it matters", md:
          "American tariffs pushed two large democracies of the South closer together. If trade grows as planned, Brazil and India could become a real economic partnership, not just a diplomatic one." }
      ],
      takeaways: [
        "Trump imposed 50% tariffs on many goods from both Brazil and India in 2025.",
        "Lula made a state visit to India on 18–22 February 2026 with about 14 ministers, signing a rare earths deal.",
        "Trade hit a record 15.2 billion dollars in 2025; the goal is about 20 billion."
      ],
      check: { q: "What did Lula call his February 2026 meeting with Modi?",
        choices: ["'A meeting of superlatives'", "'A new Bandung'", "'A trade war alliance'"], answer: 0,
        explain: "He meant the meeting of the largest democracies of the Americas and Asia." },
      sources: [
        { title: "'Encounter between India and Brazil is a meeting of superlatives,' says Lula in New Delhi", publisher: "Planalto, Government of Brazil", url: "https://www.gov.br/planalto/en/latest-news/2026/02/201can-encounter-between-india-and-brazil-is-a-meeting-of-superlatives-201d-says-lula-in-new-delhi", date: "2026-02" },
        { title: "Brazil, India sign deal for rare earths, look to increase trade past $20B", publisher: "Yahoo News", url: "https://www.yahoo.com/news/articles/brazil-india-sign-deal-rare-202727053.html", date: "2026-02" },
        { title: "India's Modi, Brazil's Lula speak amid Trump's tariff blitz", publisher: "Free Malaysia Today / Reuters", url: "https://www.freemalaysiatoday.com/category/business/2025/08/08/indias-modi-brazils-lula-speak-amid-trumps-tariff-blitz", date: "2025-08-08" }
      ]
    }
  ]
});
