/* ============================================================
   Relationship — China & Taiwan 🇨🇳🇹🇼
   Consensus, trade and Kinmen: the formula that let the two sides
   talk, the economic embrace Taiwan is loosening, and the islands
   within sight of the mainland. Drills and deterrence are in tw-7;
   Taiwan's status in tw-9 and tw-11.
   Research note and sources: tools/research/cn_tw.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("cn_tw", {
  id: "cn_tw",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "cn_tw-1", kind: "relation", asOf: "2026-09-30",
      title: "The 1992 Consensus",
      dek: "A deliberately vague formula let Beijing and Taipei talk for two decades without settling who governs China. Whether Taiwan accepts it still decides whether they talk at all.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_tw/cn_tw-1-hero.webp",
          alt: "Illustration of a long polished negotiating table in a hotel conference room with two rows of empty chairs facing each other and teacups set out.",
          caption: "The 1993 talks in Singapore were the first high-level meeting between the two sides since 1949.",
          credit: "Illustration — not a photograph",
          prompt: "A long polished wooden negotiating table in a 1990s hotel conference room, two rows of empty leather chairs facing each other, porcelain teacups and folders neatly set out, large windows with a tropical city skyline, soft daylight, formal and expectant mood, no people, no flags, no legible text." },
        { type: "timeline", head: "Talking without agreeing", items: [
          ["1991–92", "Taiwan and China set up 'unofficial' bodies to talk"],
          ["Oct 1992", "Hong Kong meeting: the future '1992 Consensus'"],
          ["Apr 1993", "Koo–Wang talks in Singapore"],
          ["2008–16", "Under Ma Ying-jeou, 23 agreements, direct flights, ECFA"],
          ["Nov 2015", "Ma meets Xi Jinping in Singapore"],
          ["2016", "Beijing cuts official contact after Tsai Ing-wen's election"],
          ["Apr 2026", "KMT chair Cheng Li-wun meets Xi in Beijing"]
        ] },
        { type: "section", head: "Talking without recognising", md:
          "Neither government recognised the other, so in the early 1990s each set up a 'private' body to talk: Taiwan's Straits Exchange Foundation and China's Association for Relations Across the Taiwan Straits. At a meeting in Hong Kong in October 1992 they reached an understanding later called the [[1992-consensus|'1992 Consensus']]: both sides accepted that there is 'one China', while each kept its own interpretation of what that means. For Beijing, it is the People's Republic; for the Kuomintang (KMT), the Republic of China. The phrase itself was coined only in 2000." },
        { type: "section", head: "What it made possible", md:
          "The formula opened the door to the first high-level talks, between Koo Chen-fu and Wang Daohan in Singapore in April 1993. Talks froze during the 1995–96 missile crisis and the pro-independence presidencies of Lee Teng-hui's later years and Chen Shui-bian. They flourished under the KMT's Ma Ying-jeou (2008–16), who embraced the consensus: the two sides signed 23 agreements, opened direct flights and Chinese tourism, and signed a trade pact, ECFA, in 2010. In November 2015 Ma met Xi Jinping in Singapore, the first meeting of the two sides' leaders since 1949." },
        { type: "section", head: "The formula breaks", md:
          "The rapprochement also provoked a backlash. In 2014 students occupied Taiwan's legislature for three weeks to block a services trade deal with China, the Sunflower Movement. The Democratic Progressive Party (DPP) has never accepted the consensus, arguing that it hides Beijing's aim of unification. When Tsai Ing-wen won in 2016 without endorsing it, Beijing cut official contact. In 2019 Xi tied the consensus to unification under 'one country, two systems', the model used in Hong Kong, which most Taiwanese reject." },
        { type: "compare", head: "Two views of the consensus",
          left: { head: "Beijing and the KMT", md:
            "It is the common political foundation for dialogue; accepting it keeps the peace, and rejecting it is provocation." },
          right: { head: "The DPP", md:
            "There was never a real consensus; the formula traps Taiwan in Beijing's 'one China' and erases its democracy's choice." } },
        { type: "section", head: "Why it matters", md:
          "The consensus remains the dividing line in Taiwan's politics (see [[unit:tw]], [[lesson:tw-4]]). In April 2026 the KMT chair, Cheng Li-wun, met Xi in Beijing, the first such meeting in a decade, and both reaffirmed the formula. Beijing talks to the KMT while refusing to talk to President Lai, whom it calls a separatist. The 2028 presidential election will again turn partly on it, as the parties argue over whether accepting a vague formula is a price worth paying for calm." }
      ],
      takeaways: [
        "The '1992 Consensus' says there is one China while letting each side keep its own interpretation.",
        "It enabled talks and 23 agreements under Ma Ying-jeou (2008–16), including the ECFA trade pact.",
        "The DPP rejects it; Beijing has refused official contact with DPP governments since 2016."
      ],
      check: { q: "Why did Beijing cut official contact with Taiwan's government in 2016?",
        choices: ["Taiwan declared independence", "President Tsai Ing-wen didn't endorse the '1992 Consensus'", "Taiwan joined the UN"], answer: 1,
        explain: "Beijing makes acceptance of the 1992 Consensus a condition for official talks; the DPP rejects it." },
      sources: [
        { title: "1992 Consensus", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/1992_Consensus", date: "n.d." },
        { title: "Wang–Koo summit", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wang%E2%80%93Koo_summit", date: "n.d." },
        { title: "KMT's Cheng Li-wun meets Xi Jinping in China", publisher: "Taipei Times", url: "https://www.taipeitimes.com/News/front/archives/2026/04/11/2003855400", date: "2026-04-11" },
        { title: "How do Taiwanese feel about the Cheng-Xi meeting?", publisher: "Brookings", url: "https://www.brookings.edu/articles/how-do-taiwanese-feel-about-the-cheng-xi-meeting/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "cn_tw-2", kind: "relation", asOf: "2026-09-30",
      title: "An economic embrace, loosening",
      dek: "Taiwanese companies built much of China's export industry, and for decades China was Taiwan's biggest market. In 2025, for the first time since 1999, the United States overtook it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_tw/cn_tw-2-hero.webp",
          alt: "Illustration of a vast electronics factory campus in southern China at dusk, with dormitory blocks and workers walking in the distance.",
          caption: "Taiwanese firms such as Foxconn built giant factories in China from the 1990s.",
          credit: "Illustration — not a photograph",
          prompt: "A vast electronics factory campus in southern China at dusk, long white factory buildings and dormitory blocks with lit windows, rows of shuttle buses, small figures of workers walking in the distance, hazy pink sky, industrial scale, no faces, no legible text or logos." },
        { type: "facts", head: "Trade and investment", rows: [
          ["China and Hong Kong's share of Taiwan's exports", "26.6% in 2025, down from 43.9% in 2020"],
          ["United States' share", "30.9% in 2025, the largest market for the first time since 1999"],
          ["China's share of Taiwan's outbound investment", "About 84% in 2010; under 4% in 2024"],
          ["ECFA tariff cuts", "Signed 2010; China suspended them on 146 products in 2024"]
        ] },
        { type: "section", head: "Building China's factories", md:
          "From the late 1980s, as wages rose at home, Taiwanese businesspeople moved production across the Strait. They brought money, management and connections to global brands, and built much of China's export economy: Foxconn, a Taiwanese company, assembled most of the world's iPhones in giant Chinese factories. Hundreds of thousands of Taiwanese lived in China. For Taiwan, China became the largest export market, buying components, chemicals and machinery for those factories.\n\n" +
          "The ties ran deep enough that Taiwan's politics began to follow them: business leaders with factories in China often backed the KMT and closer relations, while critics warned that Taiwan was becoming dependent on a government that wanted to absorb it." },
        { type: "section", head: "Economics as leverage", md:
          "Beijing hoped economic ties would draw Taiwan toward unification, and has used them as rewards and punishments. It offered Taiwan tariff cuts under the 2010 ECFA agreement, and invited Taiwanese farmers and firms to sell in China. When relations soured, it stopped them: bans on Taiwanese pineapples (2021), grouper fish and some other foods, and in 2024 the suspension of ECFA tariff concessions on well over a hundred products, including petrochemicals and machinery, after the DPP won again. Chinese tourist groups, once millions a year, largely stopped." },
        { type: "section", head: "Taking the eggs out of the basket", md:
          "Taiwan's governments have tried to reduce the risk. They encouraged companies to invest in Southeast Asia, India and the United States, and tightened screening of investment in China. Rising Chinese wages, US tariffs on China and fears of war did the rest. China's share of Taiwan's outbound investment has fallen from about 84% in 2010 to under 4%. In 2025, as American demand for AI servers and chips boomed, the US bought 30.9% of Taiwan's exports, overtaking China and Hong Kong combined (26.6%) for the first time since 1999 (see [[lesson:tw-6]])." },
        { type: "compare", head: "Two views of economic ties",
          left: { head: "Engagement", md:
            "Trade across the Strait makes both sides richer and war more costly; cutting ties only raises tensions." },
          right: { head: "De-risking", md:
            "Dependence gives Beijing a weapon; Taiwan is safer building its economy with democracies." } },
        { type: "section", head: "Why it matters", md:
          "China and Hong Kong still buy more than a quarter of Taiwan's exports, and exports to them rose in 2025, so the two economies remain entwined. But the balance of leverage has shifted: Taiwan's chips matter more to the world than China's market matters to Taiwan, which is part of the 'silicon shield' argument for Taiwan's security (see [[unit:cn]])." }
      ],
      takeaways: [
        "Taiwanese companies built much of China's export industry, and China long bought the most Taiwanese exports.",
        "Beijing has used trade as a reward and a punishment, suspending ECFA tariff cuts in 2024.",
        "Taiwan's investment in China has collapsed, and in 2025 the US overtook China as its biggest market."
      ],
      check: { q: "What happened to Taiwan's export markets in 2025?",
        choices: ["China's share rose above half", "The United States became the largest market for the first time since 1999", "Japan became the largest market"], answer: 1,
        explain: "AI-driven demand lifted the US share to 30.9%, above China and Hong Kong's combined 26.6%." },
      sources: [
        { title: "U.S. overtakes China as No. 1 Taiwan export market in 2025, 1st since 1999", publisher: "MarketScreener (Focus Taiwan)", url: "https://www.marketscreener.com/news/u-s-overtakes-china-as-no-1-taiwan-export-market-in-2025-1st-since-1999-ce7e5bdede8af52d", date: "2026-01" },
        { title: "Taiwan's exports, imports, trade surplus smash records in 2025", publisher: "Focus Taiwan", url: "https://focustaiwan.tw/business/202601090021", date: "2026-01-09" },
        { title: "Taiwan cuts China share of outbound investment to 3.7%", publisher: "Taiwan News", url: "https://www.taiwannews.com.tw/news/6332968", date: "2026" },
        { title: "China suspends tariff concessions on 134 items under Taiwan trade deal", publisher: "The Globe and Mail (Reuters)", url: "https://www.theglobeandmail.com/world/article-china-suspends-tariff-concessions-on-134-items-under-taiwan-trade-deal/", date: "2024-05-31" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "cn_tw-3", kind: "relation", asOf: "2026-09-30",
      title: "Kinmen: the front-line islands",
      dek: "Taiwan governs a group of islands just off the Chinese city of Xiamen. Once shelled for twenty years, Kinmen became a bridge between the two sides, and is now a front line again.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_tw/cn_tw-3-hero.webp",
          alt: "Illustration of a sandy beach on Kinmen lined with rusting anti-landing spikes, with the high-rise skyline of Xiamen across the water at dusk.",
          caption: "From Kinmen's beaches, the towers of Xiamen are clearly visible across the water.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet sandy beach on a small island lined with rows of rusting anti-landing steel spikes, the high-rise skyline of a modern Chinese city across a narrow stretch of water at dusk, city lights beginning to glow, calm sea, poignant contrast, no people, no flags, no legible text." },
        { type: "timeline", head: "From battlefield to bridge and back", items: [
          ["Oct 1949", "Communist landing on Kinmen defeated at Guningtou"],
          ["1954–55", "First Taiwan Strait crisis"],
          ["23 Aug 1958", "Mass shelling begins the second crisis"],
          ["1958–79", "Shelling on alternate days"],
          ["1992", "Military rule on Kinmen ends"],
          ["2001", "'Mini three links': ferries to Xiamen"],
          ["2018", "Undersea pipeline brings water from Fujian"],
          ["Feb 2024", "Speedboat deaths; China Coast Guard patrols begin"]
        ] },
        { type: "section", head: "Islands at the front", md:
          "When the Nationalists retreated to Taiwan in 1949, they kept several island groups right off the Chinese coast, above all Kinmen (Quemoy) and Matsu. In October 1949 a Communist landing on Kinmen was crushed at Guningtou, a defeat that helped keep Taiwan out of Beijing's hands. Kinmen lies just a few kilometres from the Chinese city of Xiamen, while Taiwan itself is about 180 kilometres away." },
        { type: "section", head: "Twenty years of shells", md:
          "Twice in the 1950s Mao's forces bombarded the islands, and the US hinted at nuclear weapons in their defence. On 23 August 1958 Chinese guns fired tens of thousands of shells in a few hours. The crisis eased, but a strange ritual followed: Communist guns shelled Kinmen on odd-numbered days, often with propaganda leaflets rather than explosives, and the Nationalists fired back on even days, until 1979, when the US recognised Beijing. Kinmen was a military zone under martial law until 1992; its beaches are still lined with anti-landing spikes." },
        { type: "section", head: "A bridge", md:
          "After martial law, Kinmen became the gateway between the two sides. From 2001, the 'mini three links' allowed direct ferries, post and trade with Xiamen, years before direct flights to Taiwan itself; tens of millions of trips have been made. Since 2018 an undersea pipeline from Fujian has supplied much of Kinmen's drinking water. Many islanders have business and family ties across the water, and Kinmen votes mostly for the KMT." },
        { type: "section", head: "Front line again", md:
          "In February 2024 a Chinese speedboat fled a Taiwanese coast guard vessel in Kinmen's restricted waters and capsized; two of its crew died. Beijing then declared that it didn't recognise the restricted zone and began regular China Coast Guard 'law enforcement patrols' around Kinmen, once boarding a Taiwanese tourist boat. Taiwan reports dozens of incursions a year. Analysts call this 'grey-zone' pressure: testing control without firing a shot, in a place Taiwan would find hard to defend (see [[lesson:tw-7]])." },
        { type: "compare", head: "Two views of Kinmen",
          left: { head: "A bridge", md:
            "Kinmen's ties to Xiamen show that people across the Strait can live and trade together; the island should stay a place of exchange." },
          right: { head: "A pressure point", md:
            "Kinmen's dependence on Chinese water and trade, and its closeness, make it the easiest place for Beijing to squeeze Taiwan." } },
        { type: "section", head: "Why it matters", md:
          "Kinmen shows the whole cross-Strait relationship in miniature: war, then decades of exchange, and now pressure. If Beijing wanted to test Taiwan and the United States without an invasion, a blockade or seizure of the offshore islands would be one scenario military planners study." }
      ],
      takeaways: [
        "Kinmen, just off Xiamen, has been held by Taiwan's government since 1949 and was shelled on alternate days until 1979.",
        "From 2001 it became a bridge, with direct ferries to China and, from 2018, water piped from Fujian.",
        "Since 2024 China's coast guard has patrolled its waters, part of Beijing's 'grey-zone' pressure."
      ],
      check: { q: "What were the 'mini three links' of 2001?",
        choices: ["Military alliances", "Direct ferries, post and trade between Kinmen and Xiamen", "Three undersea cables"], answer: 1,
        explain: "They let Kinmen trade and travel directly with the Chinese coast years before direct flights to Taiwan." },
      sources: [
        { title: "Second Taiwan Strait Crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Second_Taiwan_Strait_Crisis", date: "n.d." },
        { title: "Guns Of August In The Taiwan Strait, 1958", publisher: "Hoover Institution", url: "https://www.hoover.org/research/guns-august-taiwan-strait-1958", date: "n.d." },
        { title: "A New Normal for the China Coast Guard at Kinmen and Matsu", publisher: "CSIS Asia Maritime Transparency Initiative", url: "https://amti.csis.org/a-new-normal-for-the-china-coast-guard-at-kinmen-and-matsu/", date: "2024" },
        { title: "Taiwan accuses China of 60 incursions into restricted waters", publisher: "Radio Free Asia", url: "https://www.rfa.org/english/china/2025/03/24/china-taiwan-kinmen/", date: "2025-03-24" },
        { title: "Jinjiang–Kinmen Pipeline", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jinjiang%E2%80%93Kinmen_Pipeline", date: "n.d." }
      ]
    }
  ]
});
