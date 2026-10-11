/* ============================================================
   Relationship — France & China 🇫🇷🇨🇳
   Opium wars, the burning of the Summer Palace, worker-students
   and de Gaulle's recognition of Beijing in 1964; Tiananmen,
   frigates for Taiwan, nuclear plants and Airbus; and Macron's
   'third pole', cognac, EVs and a widening trade deficit.
   Research note and sources: tools/research/fr_cn.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("fr_cn", {
  id: "fr_cn",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "fr_cn-1", kind: "relation", asOf: "2026-10-11",
      title: "A burned palace and de Gaulle's gamble",
      dek: "French and British troops looted and burned the Summer Palace in 1860. A century later Charles de Gaulle made France the first major Western power to recognise Communist China.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_cn/fr_cn-1-hero.webp",
          alt: "Illustration of the stone ruins of a European-style palace with broken columns beside a lake in a Chinese garden.",
          caption: "The ruins of the Old Summer Palace in Beijing, burned by British and French troops in 1860.",
          credit: "Illustration — not a photograph",
          prompt: "Stone ruins of an ornate European-style palace with broken carved columns and arches beside a quiet lake in a Chinese garden, willow trees and lotus leaves, misty autumn light, historical documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Empire to recognition", items: [
          ["1844", "Treaty of Whampoa opens Chinese ports to France"],
          ["Oct 1860", "British and French troops sack the Summer Palace"],
          ["1916–20", "About 140,000 Chinese labourers work in France"],
          ["1920s", "Zhou Enlai and Deng Xiaoping work and study in France"],
          ["27 Jan 1964", "France and the People's Republic establish relations"],
          ["1973", "Pompidou becomes the first French president to visit China"]
        ] },
        { type: "section", head: "Unequal treaties", md:
          "France joined Britain in forcing China open in the 19th century. After the First Opium War, France won trading rights and protection for Catholic missionaries in the 1844 Treaty of Whampoa. In the Second Opium War, in October 1860, British and French troops marched on Beijing and looted the Yuanmingyuan, the emperor's vast Summer Palace, before the British set it on fire. Treasures from the palace still fill a Chinese museum at the château of Fontainebleau. Victor Hugo condemned the looting as the work of 'two bandits'. China counts it among the worst humiliations of its 'century of humiliation'." },
        { type: "section", head: "Concessions and workers", md:
          "France held a concession in Shanghai, a leased territory in the south, and its Indochina colony bordered China. During the First World War about 140,000 Chinese labourers came to France and Belgium to dig trenches, unload ships and work in factories. In the 1920s a work-study programme brought young Chinese to France, among them Zhou Enlai and a teenage Deng Xiaoping, who became communists there. Both later led the People's Republic." },
        { type: "section", head: "De Gaulle's recognition", md:
          "On 27 January 1964 France and the People's Republic of China announced that they would establish diplomatic relations, making France the first major Western power to recognise Beijing (see [[lesson:cn-9]]). The United States still recognised the Nationalist government on Taiwan. Charles de Gaulle wanted an independent foreign policy between the two superpowers and saw China as a great nation that could not be ignored. Taipei broke off relations with Paris. Mao welcomed the move as a crack in Western unity; Washington was furious." },
        { type: "section", head: "First visits", md:
          "Georges Pompidou became the first French head of state to visit China in 1973, meeting Mao. China still honours de Gaulle as a farsighted friend, and Chinese leaders regularly invoke the 'spirit of 1964'. Every French president since has visited China, usually with planeloads of business leaders." },
        { type: "section", head: "Remembering the palace", md:
          "The Summer Palace remains a live issue: Chinese collectors and companies have bought back looted objects at auction, and in 2013 the French Pinault family donated two bronze animal heads from the palace to China." },
        { type: "compare", head: "Two French legacies in China",
          left: { head: "Humiliation", md:
            "Opium wars, looting and a colonial concession." },
          right: { head: "Respect", md:
            "De Gaulle's early recognition, still honoured in Beijing." } },
        { type: "section", head: "Why it matters", md:
          "France's mix of colonial guilt and Gaullist independence still shapes how Paris deals with Beijing, and how Beijing tries to separate France from America." }
      ],
      takeaways: [
        "British and French troops looted and burned the Summer Palace in Beijing in October 1860.",
        "Zhou Enlai and Deng Xiaoping became communists while working and studying in France in the 1920s.",
        "On 27 January 1964 de Gaulle made France the first major Western power to recognise the People's Republic."
      ],
      check: { q: "What did France do on 27 January 1964?",
        choices: ["Returned the Summer Palace treasures", "Established diplomatic relations with the People's Republic of China", "Left NATO"], answer: 1,
        explain: "It was the first major Western power to do so." },
      sources: [
        { title: "'France Must Be Able to Listen to China Directly'", publisher: "Ministry of Foreign Affairs of the People's Republic of China", url: "https://www.fmprc.gov.cn/mfa_eng//zy/jj/zggcddwjw100ggs/jszgddzg/202406/t20240606_11377948.html", date: "2024-06" },
        { title: "China Dossier: France-China relations in history", publisher: "COM-CHINE", url: "https://com-chine.fr/en/dossier-france-china-relations/", date: "n.d." },
        { title: "France–Taiwan relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/France%E2%80%93Taiwan_relations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "fr_cn-2", kind: "relation", asOf: "2026-10-11",
      title: "Tiananmen, Taiwan and Airbus",
      dek: "After 1989 France sold frigates and fighters to Taiwan, and Beijing punished it. Then Paris chose business: nuclear plants, Airbus factories and luxury goods, interrupted by rows over Tibet.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_cn/fr_cn-2-hero.webp",
          alt: "Illustration of a nuclear power station with two domed reactor buildings on a green coastal headland in southern China.",
          caption: "French technology built China's first large nuclear power station at Daya Bay.",
          credit: "Illustration — not a photograph",
          prompt: "A nuclear power station with two white domed reactor buildings and turbine halls on a green coastal headland in southern China, calm bay and hills behind, hazy subtropical light, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Business and quarrels", items: [
          ["Jun 1989", "Tiananmen; EU imposes an arms embargo on China"],
          ["1991–92", "France sells frigates and Mirage jets to Taiwan"],
          ["1994", "France pledges no more arms sales to Taiwan"],
          ["1994", "Daya Bay nuclear plant, built with French technology, starts up"],
          ["Apr 2008", "Olympic torch relay disrupted in Paris"],
          ["2008", "Airbus assembly line opens in Tianjin"]
        ] },
        { type: "section", head: "Tiananmen and Taiwan", md:
          "After the Tiananmen crackdown in June 1989 (see [[lesson:cn-11]]), France sheltered fleeing dissidents and joined the European arms embargo on China, which remains in force. It then agreed to sell Taiwan six Lafayette-class frigates in 1991 and 60 Mirage 2000 fighters in 1992. Beijing retaliated by closing France's consulate in Guangzhou and excluding French firms from contracts. In January 1994 France promised not to sell more weapons to Taiwan, and relations were restored. The frigate deal later became a scandal over bribes paid to officials in Taiwan and France." },
        { type: "section", head: "Nuclear and planes", md:
          "France became a key supplier of technology China wanted. Framatome, with Britain's GEC, built China's first large nuclear power station at Daya Bay near Hong Kong, which began producing electricity in 1994, and French reactor designs shaped China's early nuclear industry; in 2018 the Taishan plant became the first in the world to run the French-designed EPR reactor. Airbus, partly French-owned, opened a final assembly line in Tianjin in 2008 and now sells more planes in China than its American rival, Boeing. French luxury brands, wine and cognac found eager Chinese buyers." },
        { type: "section", head: "Tibet and the torch", md:
          "In April 2008, as the Olympic torch passed through Paris, protesters supporting Tibet tried to snatch it, and officials had to extinguish it several times. Chinese nationalists called for a boycott of the French supermarket chain Carrefour. When President Nicolas Sarkozy met the Dalai Lama in December 2008, Beijing cancelled an EU–China summit." },
        { type: "section", head: "Students and tourists", md:
          "Tens of thousands of Chinese students study in France, and before the pandemic Chinese tourists were among Paris's biggest spenders. France has one of Europe's largest ethnic Chinese communities, concentrated in Paris's Belleville and 13th arrondissement, many of them descendants of migrants from the Wenzhou region and of ethnic Chinese refugees from Vietnam, Cambodia and Laos." },
        { type: "section", head: "Spies", md:
          "French intelligence has warned repeatedly of Chinese espionage, including attempts to recruit officials and to steal aerospace and nuclear technology. In 2020 two former French intelligence officers were convicted of spying for China." },
        { type: "compare", head: "France's China policy",
          left: { head: "Commerce", md:
            "Sell planes, reactors and luxury goods to a vast market." },
          right: { head: "Values", md:
            "Speak up on Tibet, human rights and Taiwan's security." } },
        { type: "section", head: "Why it matters", md:
          "France's experience in the 1990s taught it that Beijing would punish arms sales to Taiwan. Since then commerce has usually won over confrontation." }
      ],
      takeaways: [
        "France sold frigates and Mirage fighters to Taiwan in 1991–92; Beijing retaliated, and France pledged no more sales in 1994.",
        "French technology built China's first large nuclear plant at Daya Bay; Airbus opened an assembly line in Tianjin in 2008.",
        "Protests over Tibet during the 2008 Olympic torch relay in Paris led to Chinese calls to boycott French goods."
      ],
      check: { q: "How did China respond to France's arms sales to Taiwan in the early 1990s?",
        choices: ["It bought French arms too", "It closed France's consulate in Guangzhou and excluded French firms from contracts", "It broke off diplomatic relations"], answer: 1,
        explain: "France promised in 1994 not to sell more weapons to Taiwan." },
      sources: [
        { title: "France–Taiwan relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/France%E2%80%93Taiwan_relations", date: "n.d." },
        { title: "The relevance of 60 years of Sino-French diplomacy", publisher: "China Daily", url: "https://www.chinadaily.com.cn/a/202405/06/WS663842d4a31082fc043c5662.html", date: "2024-05-06" },
        { title: "State visits by Xi Jinping to France, Serbia and Hungary", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/State_visits_by_Xi_Jinping_to_France,_Serbia_and_Hungary", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "fr_cn-3", kind: "relation", asOf: "2026-10-11",
      title: "Macron's 'third pole', cognac and cars",
      dek: "Macron says Europe must not simply follow America on China. He has courted Xi, but also pushed EU tariffs on Chinese cars, and Beijing hit back at French cognac. France's trade deficit with China keeps growing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_cn/fr_cn-3-hero.webp",
          alt: "Illustration of a cognac distillery with copper stills inside a stone barn, barrels stacked beside vineyards outside.",
          caption: "China imposed anti-dumping duties on European brandy, mostly French cognac, in July 2025.",
          credit: "Illustration — not a photograph",
          prompt: "Gleaming copper pot stills inside an old stone barn of a cognac distillery, oak barrels stacked along the walls, a doorway opening onto rows of vineyards in golden autumn light, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Balancing act", items: [
          ["Apr 2023", "Macron in Beijing; says Europe must not be America's 'followers'"],
          ["May 2024", "Xi's state visit to France for the 60th anniversary"],
          ["Oct 2024", "EU tariffs on Chinese electric cars, backed by France"],
          ["Jul 2025", "China imposes duties on brandy; big cognac houses spared"],
          ["3–5 Dec 2025", "Macron's state visit to China"],
          ["Oct 2026", "EU–China trade talks in Beijing"]
        ] },
        { type: "section", head: "Strategic autonomy", md:
          "Emmanuel Macron believes Europe should be a 'third pole' between the United States and China, a modern version of de Gaulle's independence. Returning from a state visit to China in April 2023, he told reporters that Europe must not become 'just America's followers' on Taiwan and should avoid being drawn into crises that are not its own. Allies in Washington and Eastern Europe were dismayed; Macron later insisted France supported the status quo on Taiwan and that its position had not changed." },
        { type: "section", head: "Cars and cognac", md:
          "At the same time France has led calls for Europe to protect its industry from a flood of cheap Chinese goods (see [[lesson:cn-6]]). It backed the EU's tariffs of up to 35% on Chinese electric cars in 2024. China retaliated with an anti-dumping investigation into European brandy, aimed squarely at French cognac. In July 2025 it imposed duties of up to 34.9% but exempted the big cognac houses that agreed minimum prices, a gesture Macron welcomed as a step toward ending the dispute." },
        { type: "section", head: "Xi and Macron", md:
          "Xi Jinping made a state visit to France in May 2024 to mark 60 years of relations, and Macron took him to the Pyrenees, where he had spent childhood holidays. Macron returned the visit from 3 to 5 December 2025, pressing Xi to use his influence with Russia over Ukraine and calling the trade imbalance 'unsustainable'. The two signed 12 cooperation agreements on nuclear energy, farming and education, but a long-awaited Chinese order for hundreds of Airbus planes did not come." },
        { type: "section", head: "The deficit", md:
          "France's goods trade deficit with China was close to €47 billion in 2024, and the EU's more than €300 billion. China's export controls on rare earths, critical for French industry, are another grievance. In October 2026, as EU officials held trade talks in Beijing, France and Germany proposed a fast-response mechanism to counter what they call Chinese trade aggression." },
        { type: "section", head: "Ukraine", md:
          "France presses China to stop supplying Russia with components for weapons; Beijing says it is neutral. Macron has asked Xi several times to help end the war, with little result." },
        { type: "section", head: "Leverage", md:
          "France holds the G7 presidency in 2026, while China chairs APEC, giving both a platform to shape the agenda." },
        { type: "compare", head: "Macron's two messages to Beijing",
          left: { head: "Partner", md:
            "France wants dialogue, investment and a Europe independent of Washington." },
          right: { head: "Competitor", md:
            "Europe will defend its industry against unfair Chinese trade." } },
        { type: "section", head: "Why it matters", md:
          "China sees France as the European country most likely to resist American pressure. France wants Chinese markets, but not at the cost of its own factories." }
      ],
      takeaways: [
        "Macron argues Europe should be a 'third pole'; in 2023 he said it must not simply follow the US on Taiwan.",
        "France backed EU tariffs on Chinese electric cars; China retaliated with duties on brandy, mostly cognac.",
        "Macron visited China in December 2025; France's trade deficit with China was about €47 billion in 2024."
      ],
      check: { q: "Why did China investigate European brandy?",
        choices: ["Health concerns", "It was widely seen as retaliation for EU tariffs on Chinese electric cars", "A dispute over Taiwan"], answer: 1,
        explain: "The biggest cognac houses were later spared in return for minimum prices." },
      sources: [
        { title: "Analysis: 'Tone deaf' Macron faces backlash over Taiwan comments", publisher: "CNN", url: "https://www.cnn.com/2023/04/13/europe/macron-taiwan-comments-transatlantic-relationship-intl-cmd/index.html", date: "2023-04-13" },
        { title: "China spares major cognac makers from EU brandy dumping duties", publisher: "Taipei Times (Reuters)", url: "https://www.taipeitimes.com/News/biz/archives/2025/07/05/2003839754", date: "2025-07-05" },
        { title: "Macron arrives in China for talks with Xi on Ukraine war, trade", publisher: "France 24", url: "https://www.france24.com/en/live-news/20251203-france-s-macron-visits-china-with-ukraine-on-the-agenda", date: "2025-12-03" },
        { title: "Macron, Pandas, and Ping Pong", publisher: "CEPA", url: "https://cepa.org/article/macron-pandas-and-ping-pong/", date: "2025-12" },
        { title: "EU-China trade talks begin in Beijing amid escalating pressure", publisher: "Al Jazeera", url: "https://www.aljazeera.com/economy/2026/10/7/eu-china-trade-talks-begin-in-beijing-amid-escalating-pressure", date: "2026-10-07" }
      ]
    }
  ]
});
