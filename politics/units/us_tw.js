/* ============================================================
   Relationship — United States & Taiwan 🇺🇸🇹🇼
   A treaty ally dropped for Beijing in 1979 but protected by
   the Taiwan Relations Act; strategic ambiguity, carriers and
   record arms sales; and Trump's transactional turn, with a
   $14 billion package on hold after the 2026 Beijing summit.
   Research note and sources: tools/research/us_tw.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_tw", {
  id: "us_tw",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_tw-1", kind: "relation", asOf: "2026-09-30",
      title: "From treaty ally to unofficial friend",
      dek: "For 30 years the United States treated the government on Taiwan as the government of China. In 1979 it switched to Beijing, and Congress wrote a law to keep Taiwan armed and close.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_tw/us_tw-1-hero.webp",
          alt: "Illustration of a modern office building in Taipei with a quiet street in front, representing an unofficial embassy.",
          caption: "The American Institute in Taiwan is an embassy in all but name.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern low-rise office compound of pale stone and glass on a tree-lined street in an Asian city, green hills behind, a guard post at the gate, morning light, calm and official mood, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From alliance to 'unofficial' ties", items: [
          ["Jun 1950", "Korean War: the US Seventh Fleet moves into the Taiwan Strait"],
          ["Dec 1954", "US–Republic of China Mutual Defense Treaty"],
          ["Feb 1972", "Nixon in China; the Shanghai Communiqué"],
          ["1 Jan 1979", "The US recognises Beijing and cuts ties with Taipei"],
          ["10 Apr 1979", "Carter signs the Taiwan Relations Act"],
          ["1982", "Reagan's Six Assurances to Taiwan"]
        ] },
        { type: "section", head: "Cold War ally", md:
          "When Chiang Kai-shek's Nationalists fled to Taiwan in 1949 (see [[lesson:tw-9]]), Washington at first seemed ready to let the island fall. The Korean War changed that: in June 1950 President Harry Truman sent the Seventh Fleet into the Taiwan Strait. In December 1954 the United States and the Republic of China signed a Mutual Defense Treaty, and American aid and troops poured in. For two decades Washington recognised Chiang's government in Taipei as the government of all China, and kept Beijing out of the Chinese seat at the United Nations, even as Chiang ruled Taiwan under martial law (see [[lesson:tw-10]])." },
        { type: "section", head: "The switch", md:
          "Richard Nixon wanted China as a partner against the Soviet Union. After his visit in February 1972 the Shanghai Communiqué said the United States 'acknowledges' that Chinese on both sides of the Strait held that there is one China and that Taiwan is part of it, without saying it agreed. On 1 January 1979 President Jimmy Carter recognised the People's Republic, cut diplomatic ties with Taipei and gave notice to end the defence treaty (see [[lesson:tw-11]]). The embassy closed. In its place came the American Institute in Taiwan, a private non-profit organisation staffed by diplomats that works as an embassy in all but name." },
        { type: "section", head: "Congress steps in", md:
          "Many in Congress felt Carter had abandoned an ally. Within months they passed the Taiwan Relations Act, signed on 10 April 1979. It treats Taiwan like a foreign country under American law, says the United States will make available 'defense articles and defense services' so that Taiwan can keep a 'sufficient self-defense capability', and says any attempt to settle Taiwan's future by other than peaceful means, including boycotts or embargoes, is of 'grave concern' to the United States. In 1982, as Ronald Reagan agreed with Beijing to limit arms sales, he gave Taiwan six assurances, including that Washington had not agreed to consult Beijing on arms sales or to take a position on Taiwan's sovereignty." },
        { type: "compare", head: "Two views of 1979",
          left: { head: "Realists", md:
            "Recognising Beijing was essential to win China's help against the Soviet Union, and the TRA protected Taiwan anyway." },
          right: { head: "Critics", md:
            "Washington dropped a loyal ally for a dictatorship, and the price is the danger Taiwan faces today." } },
        { type: "section", head: "Why it matters", md:
          "The 'one China policy', the Taiwan Relations Act and the Six Assurances still form the legal and political base of American policy. Every argument about Taiwan today turns on how to read them." }
      ],
      takeaways: [
        "The United States was Taiwan's treaty ally from 1954 until it recognised Beijing on 1 January 1979.",
        "The Taiwan Relations Act of 1979 keeps unofficial ties and commits America to provide defensive arms.",
        "Reagan's 1982 Six Assurances promised not to consult Beijing on arms sales to Taiwan."
      ],
      check: { q: "What does the Taiwan Relations Act commit the United States to do?",
        choices: ["Defend Taiwan with American troops in any war", "Make available arms so Taiwan can keep a sufficient self-defence capability", "Recognise Taiwan as an independent country"], answer: 1,
        explain: "The 1979 act promises defensive arms and calls non-peaceful pressure a grave concern, but does not require the US to fight." },
      sources: [
        { title: "Taiwan: Background and U.S. Relations", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/IF10275", date: "2025" },
        { title: "President Reagan's Six Assurances to Taiwan", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs_external_products/IF/PDF/IF11665/IF11665.9.pdf", date: "n.d." },
        { title: "22 USC Ch. 48: Taiwan Relations", publisher: "US Code (House of Representatives)", url: "https://uscode.house.gov/view.xhtml?path=%2Fprelim%40title22%2Fchapter48&edition=prelim", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_tw-2", kind: "relation", asOf: "2026-09-30",
      title: "Strategic ambiguity and the porcupine",
      dek: "Washington has never said for certain whether it would fight for Taiwan. Instead it sells Taiwan weapons, including a record $11 billion package in 2025, and urges it to become a 'porcupine' too prickly to swallow.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_tw/us_tw-2-hero.webp",
          alt: "Illustration of an aircraft carrier and escort ships sailing through a grey strait with a mountainous island in the distance.",
          caption: "In 1996 the United States sent two aircraft carrier groups to the waters near Taiwan.",
          credit: "AI illustration — not a photograph",
          prompt: "A large grey aircraft carrier with escort warships sailing through a choppy grey strait, a mountainous green island on the horizon, heavy clouds and shafts of light, tense and powerful documentary mood, no flags, no legible text." },
        { type: "facts", head: "Arms and ambiguity", rows: [
          ["1995–96", "China fires missiles near Taiwan; the US sends two carrier groups"],
          ["Biden, 2021–22", "Said four times the US would defend Taiwan"],
          ["Biden's sales", "19 rounds, about $8.4 billion over four years"],
          ["17 Dec 2025", "Trump notifies a record $11.1 billion in sales"],
          ["Main items", "HIMARS rockets, howitzers, Javelin and TOW missiles, drones"]
        ] },
        { type: "section", head: "Deliberately vague", md:
          "The Taiwan Relations Act promises arms, not troops. Since 1979 American presidents have kept what is called 'strategic ambiguity': they do not say whether the United States would fight if China attacked. The idea is to deter Beijing from attacking, while also deterring Taiwan from declaring formal independence, since it cannot be sure of rescue. In 1995, when Taiwan's president Lee Teng-hui visited his old university in the United States, China answered with missile tests near Taiwan, and more in March 1996 before Taiwan's first direct presidential election. President Bill Clinton sent two aircraft carrier groups to the area, the largest American show of force in Asia since the Vietnam War." },
        { type: "section", head: "Blurring the ambiguity", md:
          "China's military has grown enormously since then, and American policy has grown clearer. President Joe Biden said four times, in 2021 and 2022, that the United States would defend Taiwan if it were attacked; each time his aides said policy had not changed. In August 2022 Nancy Pelosi became the highest-ranking American official to visit Taiwan in 25 years, and China answered with the largest military drills around the island until then (see [[lesson:tw-7]]). Donald Trump, by contrast, has refused to say what he would do, and has complained that Taiwan should pay more for its defence." },
        { type: "section", head: "Arms for a porcupine", md:
          "Arms sales are the heart of the relationship. American officials urge Taiwan to adopt a 'porcupine' strategy: rather than big warships and jets that China could destroy early, buy many smaller, mobile weapons like rocket launchers, anti-ship and anti-tank missiles, and drones that could make an invasion very costly. On 17 December 2025 the Trump administration notified Congress of over $11 billion in sales, the largest package ever, including HIMARS rocket launchers, M109A7 howitzers, Javelin and TOW missiles and drones. Biden had approved 19 rounds worth about $8.4 billion in four years. But deliveries lag: 66 new F-16 fighters ordered in 2019 are years late. Taiwan's own fights over defence budgets have slowed its side of the bargain (see [[lesson:tw-2]])." },
        { type: "compare", head: "Ambiguity or clarity?",
          left: { head: "Keep it vague", md:
            "Ambiguity has kept the peace for decades. A clear promise could provoke Beijing or embolden Taipei." },
          right: { head: "Make it clear", md:
            "China's power has grown. Only a clear commitment to defend Taiwan will deter an attack." } },
        { type: "section", head: "Why it matters", md:
          "Whether China believes America would fight is one of the most important questions for peace in Asia, and weapons in Taiwan's hands are the most concrete answer Washington gives." }
      ],
      takeaways: [
        "Under 'strategic ambiguity', the US does not say whether it would fight for Taiwan.",
        "Clinton sent carriers in 1996; Biden said four times the US would defend Taiwan.",
        "In December 2025 Trump notified a record $11.1 billion in arms for a 'porcupine' defence."
      ],
      check: { q: "What is 'strategic ambiguity'?",
        choices: ["A promise to recognise Taiwan", "Not saying whether the US would fight if China attacked Taiwan", "A ban on arms sales"], answer: 1,
        explain: "The vagueness is meant to deter both a Chinese attack and a Taiwanese declaration of independence." },
      sources: [
        { title: "US approves $11bn in arms sales to Taiwan in deal likely to anger China", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/12/18/us-approves-11bn-in-arms-sales-to-taiwan-in-deal-likely-to-anger-china", date: "2025-12-18" },
        { title: "Feeding the Porcupine: The U.S. December 2025 Arms Sales to Taiwan", publisher: "Prospect Foundation", url: "https://www.pf.org.tw/en/pfen/33-11787.html", date: "2025-12" },
        { title: "The Taiwan Relations Act at 45: Incremental Clarity of Intent", publisher: "Global Taiwan Institute", url: "https://globaltaiwan.org/2024/04/the-taiwan-relations-act-at-45-incremental-clarity-of-intent/", date: "2024-04" },
        { title: "Taiwan Relations Act in a New Era of Security Cooperation", publisher: "Foreign Policy Research Institute", url: "https://www.fpri.org/article/2025/08/taiwan-relations-act-in-a-new-era-of-security-cooperation/", date: "2025-08" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_tw-3", kind: "relation", asOf: "2026-09-30",
      title: "A bargaining chip?",
      dek: "Donald Trump treats Taiwan as a deal: chips, tariffs and payment for protection. After his 2026 summit with Xi Jinping, a $14 billion arms package went on hold, and Taiwan waits to learn what it is worth.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_tw/us_tw-3-hero.webp",
          alt: "Illustration of a chess board with pieces on it, set on a table between two empty chairs in a grand hall.",
          caption: "Taiwan fears being traded away in bargaining between Washington and Beijing.",
          credit: "AI illustration — not a photograph",
          prompt: "A wooden chess board mid-game on a polished table between two empty high-backed chairs in a grand ornate hall, soft window light, one small piece standing alone near the centre, quiet tense mood, no people, no flags, no legible text." },
        { type: "timeline", head: "Trump's second term", items: [
          ["Jul–Aug 2025", "Lai's New York stopover refused; he cancels his trip"],
          ["17 Dec 2025", "Record $11.1 billion arms sales notified"],
          ["Jan 2026", "Trade deal: 15% tariff, $250 billion Taiwanese investment pledge"],
          ["Jan 2026", "A further $14 billion package is announced"],
          ["May 2026", "Trump–Xi summit in Beijing; the $14 billion package stalls"],
          ["29 Sep 2026", "Taiwan: other sales unchanged, the $14 billion still on hold"]
        ] },
        { type: "section", head: "Chips and tariffs", md:
          "Trump's view of Taiwan starts with business. He has accused Taiwan of taking America's chip industry, and pressed its companies to build in the United States. The chipmaker TSMC has pledged $165 billion for factories in Arizona, where its first plant began making advanced chips in late 2024, and a January 2026 trade deal set a 15% American tariff on Taiwanese goods in return for pledges of at least $250 billion in investment (see [[lesson:tw-6]]). Taiwan hopes that this 'silicon shield', the world's dependence on its chips, gives America a reason to protect it. Critics in Taiwan fear that moving chipmaking to Arizona weakens the very shield it relies on." },
        { type: "section", head: "Snubs and signals", md:
          "Taiwanese presidents have long stopped in American cities on their way to allies in Latin America. In summer 2025, during trade talks with Beijing, the Trump administration refused President Lai Ching-te (see [[lesson:tw-4]]) a stopover in New York on a trip to Paraguay, Guatemala and Belize, and Lai called off the trip. Democratic lawmakers called it 'a stark departure from precedent'. Months later came the record arms package, a reminder that Washington's signals often point two ways at once. China, meanwhile, keeps up its military pressure around the island and its front-line islands (see [[lesson:cn_tw-3]])." },
        { type: "section", head: "The Beijing summit", md:
          "Before flying to Beijing in May 2026, Trump told Bloomberg that he would 'have that discussion with President Xi' about arms sales to Taiwan. That broke with the Six Assurances of 1982, under which Washington does not consult Beijing on such sales. The White House statement on the summit did not mention Taiwan; China's said Xi had stressed 'national reunification'. Afterwards Trump said he was unsure whether to approve a $14 billion package announced in January, calling it 'a very good negotiating chip'. On 29 September 2026 Taiwan's defence minister, Wellington Koo, said that other sales were unchanged, but the $14 billion package remained on hold." },
        { type: "compare", head: "Two readings",
          left: { head: "Deal-maker", md:
            "Trump uses every lever for leverage, but Congress and the Pentagon keep support for Taiwan strong." },
          right: { head: "Danger sign", md:
            "Discussing arms with Beijing shows Taiwan's security could be traded for a trade deal." } },
        { type: "section", head: "Why it matters", md:
          "Taiwan's security rests largely on American support. If Washington treats that support as something to bargain over with Beijing, Taiwan, China and America's other allies in Asia will all draw conclusions." }
      ],
      takeaways: [
        "Trump links Taiwan to chips and tariffs; TSMC pledged $165 billion in Arizona.",
        "In 2025 Lai was refused a New York stopover, but a record arms package followed.",
        "After the May 2026 Trump–Xi summit a $14 billion arms package was put on hold."
      ],
      check: { q: "Why was Trump's plan to discuss Taiwan arms sales with Xi controversial?",
        choices: ["Arms sales to Taiwan are illegal", "Under the 1982 Six Assurances the US does not consult Beijing on them", "Taiwan had asked for no more weapons"], answer: 1,
        explain: "Reagan's Six Assurances said Washington had not agreed to consult Beijing on arms sales to Taiwan." },
      sources: [
        { title: "How Taiwan Fared during the 2026 Trump-Xi Summit", publisher: "Global Taiwan Institute", url: "https://globaltaiwan.org/2026/05/how-taiwan-fared-during-the-trump-xi-summit/", date: "2026-05" },
        { title: "Trump waffles on $14 billion arms sale to Taiwan after talking to China's Xi", publisher: "Axios", url: "https://www.axios.com/2026/05/15/trump-taiwan-arms-sale-xi-summit", date: "2026-05-15" },
        { title: "Taiwan says US arms sales to island are unchanged, but a $14B package remains on hold", publisher: "ABC News (AP)", url: "https://abcnews.com/International/wireStory/taiwan-us-arms-sales-island-unchanged-14b-package-136844909", date: "2026-09-29" },
        { title: "Lai drops overseas trip after Trump blocks New York stopover", publisher: "Taiwan News", url: "https://www.taiwannews.com.tw/news/6166093", date: "2025-07" }
      ]
    }
  ]
});
