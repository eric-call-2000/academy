/* ============================================================
   Relationship — Japan & South Korea 🇯🇵🇰🇷
   The colonial past and the deals meant to settle it, the 2019
   trade war over forced-labour rulings, and the pragmatic
   partnership of Lee and Takaichi. Colonial rule itself is in
   kr-9; the Japan–China rift in jp_cn.
   Research note and sources: tools/research/jp_kr.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("jp_kr", {
  id: "jp_kr",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "jp_kr-1", kind: "relation", asOf: "2026-09-30",
      title: "Colony and its wounds",
      dek: "Japan ruled Korea from 1910 to 1945. Two democracies, both American allies, have spent 80 years arguing over how that rule should be remembered and paid for.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_kr/jp_kr-1-hero.webp",
          alt: "Illustration of a bronze statue of a young girl in traditional dress seated on a chair beside an empty chair, on a city pavement.",
          caption: "Statues of a girl beside an empty chair, honouring the 'comfort women', stand in Seoul and dozens of other cities.",
          credit: "AI illustration — not a photograph",
          prompt: "A bronze statue of a young girl in a simple traditional Korean dress sitting on a chair with her hands on her knees, an empty bronze chair beside her, on a city pavement with autumn leaves, soft afternoon light, quiet and poignant, no people, no legible text." },
        { type: "timeline", head: "Deals and disputes", items: [
          ["1910", "Japan annexes Korea"],
          ["1 Mar 1919", "Independence protests, brutally crushed"],
          ["1945", "Japan's defeat ends colonial rule"],
          ["1965", "Treaty normalises relations; Japan pays $800 million in grants and loans"],
          ["1993", "Kono statement on the 'comfort women'"],
          ["1998", "Kim Dae-jung and Obuchi declare a new partnership"],
          ["2015", "Deal on the comfort women; later shelved by Seoul"]
        ] },
        { type: "section", head: "Colonial rule", md:
          "Japan made Korea a protectorate in 1905 and annexed it in 1910. For 35 years it ruled through a governor-general, building railways, ports and factories, but also crushing protest, most famously the independence movement of 1 March 1919. In its later years it pressed Koreans to take Japanese names, banned the Korean language in schools and mobilised hundreds of thousands of Koreans to work in mines and factories in Japan. Tens of thousands of women, many of them Korean, were forced or deceived into working in military brothels; Japan called them 'comfort women' (see [[lesson:kr-9]])." },
        { type: "section", head: "The 1965 settlement", md:
          "The two countries restored relations only in 1965, under South Korea's military ruler Park Chung-hee, who needed money for industrialisation (see [[lesson:kr-10]]). Japan paid $300 million in grants and $200 million in loans, and private credits followed; the treaty said property claims were 'settled completely and finally'. Japan's position ever since is that this closed the matter. Many South Koreans reply that the deal was made by a dictatorship without their consent, and that individuals never gave up their right to compensation." },
        { type: "section", head: "Apologies and a deal", md:
          "Japan has apologised repeatedly. In 1993 Chief Cabinet Secretary Yohei Kono acknowledged the military's involvement in the comfort stations, and in 1998 Prime Minister Keizo Obuchi and President Kim Dae-jung signed a declaration expressing 'deep remorse'. But visits by Japanese leaders to the Yasukuni Shrine, textbook disputes and nationalist statements kept reopening wounds. In December 2015 the two governments reached a 'final and irreversible' deal on the comfort women: Japan apologised and paid ¥1 billion into a fund for survivors. Many survivors rejected it because they had not been consulted, and in 2018 President Moon Jae-in's government dissolved the fund." },
        { type: "compare", head: "Two views",
          left: { head: "Many in Japan", md:
            "Japan has apologised and paid many times. South Korea keeps moving the goalposts, and deals signed by one government are undone by the next." },
          right: { head: "Many in South Korea", md:
            "Apologies were undercut by denials and shrine visits, and deals were made over victims' heads. True reconciliation needs sincerity, not money." } },
        { type: "section", head: "Why it matters", md:
          "Japan and South Korea are neighbours, democracies, big trading partners and American allies facing the same threats from North Korea and China. History has repeatedly kept them from acting together. Rocky outcrops in the sea between them, called Dokdo by Korea, which holds them, and Takeshima by Japan, which claims them, remain another reminder of the colonial era." }
      ],
      takeaways: [
        "Japan ruled Korea from 1910 to 1945, including forced labour and the 'comfort women' system.",
        "The 1965 treaty restored relations with payments Japan says settled all claims; many Koreans disagree.",
        "Apologies and a 2015 deal on the comfort women have repeatedly been undercut or undone."
      ],
      check: { q: "What does Japan say the 1965 treaty did?",
        choices: ["Returned Dokdo to Korea", "Settled colonial-era claims 'completely and finally'", "Created a joint government"], answer: 1,
        explain: "Japan paid grants and loans in 1965 and holds that the treaty settled all property claims, a view many South Koreans reject." },
      sources: [
        { title: "Korea under Japanese rule", publisher: "Britannica", url: "https://www.britannica.com/topic/Korea-Under-Japanese-Rule", date: "n.d." },
        { title: "Yeo Woon Taek v. New Nippon Steel Corporation", publisher: "American Journal of International Law", url: "https://www.cambridge.org/core/journals/american-journal-of-international-law/article/yeo-woon-taek-v-new-nippon-steel-corporation/87D93583A2469B327743936289FF3B14", date: "2019" },
        { title: "Japan-Republic of Korea Relations", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/a_o/na/kr/pageite_000001_00556.html", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "jp_kr-2", kind: "relation", asOf: "2026-09-30",
      title: "The 2019 trade war",
      dek: "A Korean court ordered Japanese firms to compensate wartime labourers. Japan answered by restricting chemicals Korea's chip industry needed, and Koreans boycotted Japanese beer and cars.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_kr/jp_kr-2-hero.webp",
          alt: "Illustration of a semiconductor cleanroom with workers in white protective suits beside large machines under yellow light.",
          caption: "Japan restricted exports of three chemicals used to make semiconductors, South Korea's biggest export.",
          credit: "AI illustration — not a photograph",
          prompt: "A semiconductor factory cleanroom lit with yellow light, workers in full white protective suits and masks seen from behind beside large wafer-processing machines, gleaming floors, precise and high-tech, no faces visible, no flags, no legible text or logos." },
        { type: "timeline", head: "Escalation and repair", items: [
          ["30 Oct 2018", "Korea's Supreme Court orders Nippon Steel to pay wartime labourers"],
          ["Jul 2019", "Japan restricts three chip-making chemicals"],
          ["Aug 2019", "Japan removes Korea from its trusted trade list; boycotts spread"],
          ["Nov 2019", "Seoul backs off ending an intelligence-sharing pact"],
          ["6 Mar 2023", "Yoon's plan: a Korean fund pays the compensation"],
          ["Aug 2023", "Camp David summit with the United States"]
        ] },
        { type: "section", head: "The court rulings", md:
          "On 30 October 2018 South Korea's Supreme Court, by 11 votes to 2, ordered Nippon Steel to pay 100 million won, about $84,000, to each of four Koreans forced to work in its mills during the war. The court said the 1965 treaty could not stop individuals claiming damages for 'acts of illegality against humanity' linked to an illegal occupation. A ruling against Mitsubishi Heavy Industries followed. Japan's government called the rulings a violation of international law and told the companies not to pay. Plaintiffs began moves to seize the firms' assets in Korea." },
        { type: "section", head: "Chemicals and boycotts", md:
          "In July 2019 Japan tightened export controls on three chemicals essential to making semiconductors, fluorinated polyimide, photoresist and hydrogen fluoride, citing security concerns; almost everyone saw it as retaliation. In August it removed South Korea from its 'white list' of trusted trading partners. Korean consumers responded with a boycott: sales of Japanese beer, Uniqlo clothes and Japanese cars fell sharply, and trips to Japan dropped. Seoul threatened to end GSOMIA, a pact for sharing military intelligence on North Korea, before backing down under American pressure. Japanese exports of hydrogen fluoride to Korea fell by almost 90%, and Korean firms rushed to find local and other foreign suppliers." },
        { type: "section", head: "Yoon's gamble", md:
          "President Yoon Suk Yeol, elected in 2022, decided to break the deadlock. On 6 March 2023 his government announced that a Korean foundation, funded by Korean companies that had benefited from the 1965 money, would pay the court awards instead of the Japanese firms. Some victims' families refused it. Japan lifted its export controls, the two restored each other to their trusted trade lists, and in August 2023 Yoon, Japan's Fumio Kishida and Joe Biden met at Camp David to launch regular three-way summits. Lawsuits continue: in August 2026 a Korean court again ordered Nippon Steel to compensate a labourer's family." },
        { type: "compare", head: "Yoon's deal",
          left: { head: "Supporters", md:
            "It was a brave step that ended a damaging feud and let the two democracies face North Korea and China together." },
          right: { head: "Critics", md:
            "It let Japanese companies off the hook, overrode the victims and the courts, and got little in return from Tokyo." } },
        { type: "section", head: "Why it matters", md:
          "The trade war showed how history can spill into economics and security, and how deeply the two economies depend on each other. It also showed the fragility of any settlement: each new South Korean president can reopen what the last one closed, and each court ruling can restart the cycle." }
      ],
      takeaways: [
        "A 2018 Korean Supreme Court ruling ordered Japanese firms to compensate wartime forced labourers.",
        "Japan responded in 2019 with export controls on chip chemicals; Koreans boycotted Japanese goods.",
        "In 2023 Yoon had a Korean fund pay the awards instead, ending the feud and opening a three-way partnership with the US."
      ],
      check: { q: "How did Yoon Suk Yeol's 2023 plan resolve the forced-labour rulings?",
        choices: ["Japan's government paid the victims", "A Korean foundation paid the court awards instead of Japanese firms", "The rulings were overturned"], answer: 1,
        explain: "Under the 6 March 2023 plan, a Korean foundation funded by Korean companies paid the compensation, and Japan lifted its trade curbs." },
      sources: [
        { title: "The impact of export controls on international trade: Evidence from the Japan–Korea trade dispute in the semiconductor industry", publisher: "CEPR VoxEU", url: "https://cepr.org/voxeu/columns/impact-export-controls-international-trade-evidence-japan-korea-trade-dispute", date: "2023" },
        { title: "South Korea Announces Plan to Resolve Forced Labor Disputes With Japan", publisher: "The Diplomat", url: "https://thediplomat.com/2023/03/south-korea-announces-plan-to-resolve-forced-labor-disputes-with-japan/", date: "2023-03" },
        { title: "S. Korea court orders Nippon Steel to compensate forced-labor family", publisher: "UPI", url: "https://www.upi.com/Top_News/World-News/2026/08/12/court-orders-nippon-steel-compensate-forced-labor-family/3791786576997/", date: "2026-08-12" },
        { title: "Disrupting Supply Chains: Evidence on the Japan-Korea Conflict", publisher: "Korea Economic Institute of America", url: "https://keia.org/analysis/disrupting-supply-chains-evidence-on-the-japan-korea-conflict/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "jp_kr-3", kind: "relation", asOf: "2026-09-30",
      title: "Lee and Takaichi: unlikely partners",
      dek: "A progressive Korean president once critical of Japan and a Japanese nationalist prime minister have met again and again. China, North Korea and an unpredictable America have pushed them together.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_kr/jp_kr-3-hero.webp",
          alt: "Illustration of an ancient wooden temple hall with deer grazing on a lawn in front, under autumn trees.",
          caption: "Lee and Takaichi held their first bilateral summit in Nara, Takaichi's home region, in January 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "An ancient large wooden Japanese temple hall with sweeping dark roofs, a few deer grazing on a lawn in front, maple trees in red and gold, soft winter morning light, calm and historic, no people, no flags, no legible text." },
        { type: "timeline", head: "Shuttle diplomacy", items: [
          ["Jun 2025", "Lee Jae-myung becomes president"],
          ["Oct 2025", "Takaichi becomes prime minister"],
          ["Jan 2026", "Summit in Nara, Japan"],
          ["19 May 2026", "Summit in Andong, Lee's home town"],
          ["Sep 2026", "US–Japan–Korea foreign ministers launch economic-security talks"]
        ] },
        { type: "section", head: "An odd couple", md:
          "On paper, Lee Jae-myung and Sanae Takaichi should clash. Lee, a left-leaning Democrat, criticised the Yoon government's 2023 deal with Japan as humiliating. Takaichi, a protégé of Shinzo Abe, has visited the Yasukuni Shrine in the past and takes a conservative view of wartime history. Yet once in office, both chose pragmatism. Lee kept Yoon's compensation arrangement and continued 'shuttle diplomacy', with leaders visiting each other's countries regularly. In August 2025 he deliberately stopped in Tokyo to meet Takaichi's predecessor, Shigeru Ishiba, before flying on to his first summit with Donald Trump in Washington, a signal that Seoul would treat Japan as a partner, not a rival. By May 2026 the two had met four times in six months." },
        { type: "section", head: "Summits", md:
          "In January 2026 Lee visited Nara, in Takaichi's home region; a video of the two leaders drumming together at the end of the first day was widely shared. On 19 May 2026 Takaichi visited Andong, Lee's home town in South Korea. They agreed to cooperate on energy supply chains, artificial intelligence and economic security, and reached a deal on DNA testing to identify Korean wartime labourers who died in Japan, a small but symbolic step on history. Disputes such as Dokdo and textbooks were not resolved, but they were set aside rather than allowed to dominate." },
        { type: "section", head: "Why now", md:
          "Analysts point to three pressures. China: Japan's bitter dispute with Beijing since November 2025 (see [[lesson:jp_cn-3]]) has made Tokyo value a stable neighbour. North Korea, which has declared the South a hostile state and fought for Russia. And the United States: Donald Trump's tariffs and demands on both allies have encouraged them to lean on each other. In September 2026 the American, Japanese and Korean foreign ministers, meeting in New York, launched talks on economic security and pledged to resist economic coercion." },
        { type: "compare", head: "Will it last?",
          left: { head: "Optimists", md:
            "Shared threats and deep economic ties now outweigh history. Both leaders have shown they can manage disputes quietly." },
          right: { head: "Sceptics", md:
            "Nothing has been settled. A new court ruling, a shrine visit or a change of leader could revive the old quarrels at any moment." } },
        { type: "section", head: "Why it matters", md:
          "Japan and South Korea together host most of America's forces in East Asia and are world leaders in chips, cars and shipbuilding. A lasting partnership between them would reshape the region's balance. Ordinary ties are already strong: South Koreans are among the largest groups of foreign visitors to Japan, and Japanese interest in Korean music, dramas and food has never been greater." }
      ],
      takeaways: [
        "Lee Jae-myung and Sanae Takaichi have held frequent 'shuttle' summits since late 2025, despite their politics.",
        "They agreed on cooperation in energy, AI and economic security, and DNA testing for Korean wartime labourers.",
        "Pressure from China, North Korea and US tariffs has pushed the two neighbours together."
      ],
      check: { q: "What has pushed Lee and Takaichi toward cooperation?",
        choices: ["A resolution of the Dokdo dispute", "Shared pressure from China, North Korea and the United States", "A new peace treaty"], answer: 1,
        explain: "Tensions with China and North Korea and uncertainty about the US have encouraged both to set history aside for now." },
      sources: [
        { title: "Takaichi and South Korea's Lee to take ties to 'new heights' amid Japan-China rift", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/01/13/japan/politics/japan-south-korea-takaichi-lee-nara/", date: "2026-01-13" },
        { title: "Japan and South Korea: Friends, With Limits", publisher: "The Diplomat", url: "https://thediplomat.com/2026/05/japan-and-south-korea-friends-with-limits/", date: "2026-05" },
        { title: "Japan and South Korea Advance Strategic Coordination Amid Global Instability", publisher: "Nippon.com", url: "https://www.nippon.com/en/in-depth/d01238/japan-and-south-korea-advance-strategic-coordination-amid-global-instability.html", date: "2026" },
        { title: "Joint Statement from the Trilateral Meeting of the United States of America, Japan, and the Republic of Korea in New York City", publisher: "US Department of State", url: "https://www.state.gov/releases/office-of-the-spokesman/2026/09/joint-statement-from-the-trilateral-meeting-of-the-united-states-of-america-japan-and-the-republic-of-korea-in-new-york-city-2", date: "2026-09" }
      ]
    }
  ]
});
