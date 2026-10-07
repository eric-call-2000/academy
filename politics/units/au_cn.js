/* ============================================================
   Relationship — Australia & China 🇦🇺🇨🇳
   A mine-and-market economic marriage, China's 2020–24 trade
   punishment and how Australia rode it out, and a security
   rivalry over ports, submarines and warships. Australian
   politics is in au-4 and au-5.
   Research note and sources: tools/research/au_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("au_cn", {
  id: "au_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "au_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Quarry and customer",
      dek: "Australia digs up iron ore; China turns it into steel. For two decades that simple exchange made Australia rich, and made China its most important customer by far.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au_cn/au_cn-1-hero.webp",
          alt: "Illustration of a vast open-cut iron ore mine with terraced red earth and huge haul trucks, under a blue outback sky.",
          caption: "Most of Australia's iron ore comes from the Pilbara in Western Australia, and most of it goes to China.",
          credit: "Illustration — not a photograph",
          prompt: "A vast open-cut iron ore mine with terraced deep red earth walls, enormous yellow haul trucks on winding ramps, a long ore train in the distance, a hard blue outback sky, heat haze, industrial and immense, no people close up, no legible text or logos." },
        { type: "facts", head: "The economic ties", rows: [
          ["China's share of exports", "About a third of Australia's goods exports"],
          ["Main export", "Iron ore, most of it from the Pilbara"],
          ["Free trade agreement", "Signed 2015"],
          ["Students", "China is the largest source of international students"],
          ["People", "About 1.4 million Australians have Chinese ancestry"]
        ] },
        { type: "section", head: "The boom", md:
          "Australia recognised the People's Republic in 1972 under Gough Whitlam, who had visited Beijing as opposition leader the year before. Trade grew slowly until the 2000s, when China's building boom created an almost limitless appetite for iron ore, coal and gas. Australia's economy rode the boom through the 2008 financial crisis without a recession. A free trade agreement came into force in 2015. Chinese students filled Australian universities, Chinese tourists its beaches, and Chinese investors bought farms, dairies and property. By the 2021 census, Mandarin had become the most common language other than English spoken in Australian homes." },
        { type: "section", head: "Iron ore", md:
          "Iron ore is the heart of the relationship. Australian miners, led by BHP, Rio Tinto and Fortescue, supply the majority of the ore China imports, and China buys the large majority of Australia's output. That makes each dependent on the other: Australia on China's steel mills, China on Australian mines it cannot easily replace. In late 2025 China's state iron ore buyer reportedly told traders to stop buying some BHP cargoes priced in dollars, and the dispute ended with an agreement partly linking prices to the yuan. With China's property sector in trouble and its steel output falling, Australia is trying to diversify, into critical minerals, green metals and new markets such as India." },
        { type: "compare", head: "Two views of dependence",
          left: { head: "Pragmatists", md:
            "China is Australia's natural customer. Trade has made Australians richer, and stable economic ties give both sides a stake in peace." },
          right: { head: "Hawks", md:
            "Depending on one authoritarian buyer gives Beijing leverage over Australian policy. Australia must spread its risks." } },
        { type: "section", head: "Influence at home", md:
          "Deep ties brought worries about influence. In 2017 a Labor senator, Sam Dastyari, resigned after revelations about his links to a Chinese political donor, and in 2018 Australia passed laws against foreign interference and banned Chinese firms such as Huawei from its 5G network, the first country to do so. China saw these moves as hostile, and relations cooled before the pandemic brought them to a crisis (see [[lesson:au_cn-2]])." },
        { type: "section", head: "Why it matters", md:
          "Australia is a test case of how a middle-sized democracy can live with an economic giant that is also a strategic rival. It sells China the raw materials for its growth while hosting American forces and planning to build nuclear submarines with the United States and Britain. Public opinion has swung: in the Lowy Institute's annual poll, the share of Australians who trust China fell from about half in 2018 to barely one in eight by 2022." }
      ],
      takeaways: [
        "China buys about a third of Australia's goods exports, above all iron ore.",
        "The Chinese boom from the 2000s helped Australia avoid recession for decades.",
        "Concern about influence led to foreign interference laws and a ban on Huawei from 5G in 2018."
      ],
      check: { q: "What is Australia's main export to China?",
        choices: ["Wine", "Iron ore", "Wool"], answer: 1,
        explain: "Iron ore, mainly from Western Australia's Pilbara, is by far the biggest export to China, feeding its steel mills." },
      sources: [
        { title: "Australia and China: Embracing while sparring", publisher: "Lowy Institute", url: "https://www.lowyinstitute.org/publications/australia-and-china-embracing-while-sparring", date: "n.d." },
        { title: "Can the China-Australia relationship stay on track in 2026? This is how experts in China see it", publisher: "The Conversation", url: "https://theconversation.com/can-the-china-australia-relationship-stay-on-track-in-2026-this-is-how-experts-in-china-see-it-271941", date: "2026" },
        { title: "Australia's economic security outlook: Trends and possible responses for 2026", publisher: "United States Studies Centre", url: "https://www.ussc.edu.au/australias-economic-security-outlook-trends-and-possible-responses-for-2026", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "au_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "The trade war, 2020–24",
      dek: "When Australia called for an inquiry into the origins of Covid, China hit its barley, wine, beef, coal and lobsters. Australia did not back down, and four years later the bans were gone.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au_cn/au_cn-2-hero.webp",
          alt: "Illustration of rows of grapevines in a sunny valley with rolling hills and a winery shed, under a clear sky.",
          caption: "Tariffs of up to 218% closed China, then Australian wine's biggest market, from 2020 to 2024.",
          credit: "Illustration — not a photograph",
          prompt: "Neat rows of grapevines in a sunny South Australian valley, rolling golden hills, a corrugated-iron winery shed and gum trees, clear blue sky, peaceful rural scene, no people, no legible text or labels." },
        { type: "timeline", head: "Punishment and thaw", items: [
          ["Apr 2020", "Australia calls for an independent inquiry into Covid's origins"],
          ["May 2020", "China imposes an 80.5% duty on Australian barley"],
          ["Late 2020", "Curbs on beef, coal, timber, lobsters; wine duties of up to 218%"],
          ["Nov 2020", "Chinese diplomats hand journalists a list of 14 grievances"],
          ["May 2022", "Albanese government elected"],
          ["2023", "Coal, timber and barley restrictions lifted"],
          ["2024", "Wine and beef curbs lifted; lobsters last, in December"]
        ] },
        { type: "section", head: "The punishment", md:
          "In April 2020 Prime Minister Scott Morrison's government called for an independent international inquiry into the origins of the coronavirus. Beijing saw it as siding with Washington's attempt to blame China. Within weeks it imposed an 80.5% duty on Australian barley and suspended beef imports from several abattoirs. Coal ships were left waiting off Chinese ports, and timber, cotton and live lobsters were blocked. In November China slapped duties of up to 218% on Australian wine, whose biggest market it was. Exports worth more than A$20 billion a year were affected. Beijing never admitted the measures were political, citing dumping, pests and paperwork instead. A Chinese embassy official gave Australian journalists a list of 14 grievances, from Huawei's 5G ban to critical media coverage." },
        { type: "section", head: "Riding it out", md:
          "The damage was real for wine makers and lobster fishers, but smaller than feared overall. Coal found buyers in India and elsewhere, barley went to Saudi Arabia and Southeast Asia, and above all China kept buying iron ore, which it could not replace, at high prices. Australia refused to change course and took China to the World Trade Organization over barley and wine. Two Australians, the journalist Cheng Lei and the writer Yang Hengjun, were detained in China during the dispute on national-security charges." },
        { type: "section", head: "Stabilisation", md:
          "Anthony Albanese's Labor government, elected in May 2022, promised to 'cooperate where we can, disagree where we must'. Ministers resumed meetings, and one by one the bans were lifted: coal, timber and barley in 2023, wine and beef in 2024, and lobsters in December 2024. Cheng Lei was released in October 2023, weeks before Albanese visited Beijing; Yang Hengjun was given a suspended death sentence in February 2024. Albanese returned to China in July 2025." },
        { type: "compare", head: "Who won?",
          left: { head: "Australia held firm", md:
            "Beijing's coercion failed: Australia did not change its policies, diversified markets, and the bans were lifted anyway." },
          right: { head: "A costly lesson", md:
            "Some industries were badly hurt, and Canberra softened its tone. Other countries learned that crossing China carries a price." } },
        { type: "section", head: "Why it matters", md:
          "The dispute is one of the clearest cases of China using trade as punishment, and of a target resisting. It showed the limits of coercion when the target sells something China badly needs, and it is studied closely in Japan, Lithuania and other countries that have faced similar pressure." }
      ],
      takeaways: [
        "After Australia called for a Covid inquiry in 2020, China restricted barley, wine, beef, coal, lobsters and more.",
        "Exports worth over A$20 billion a year were affected, but iron ore kept flowing and Australia did not back down.",
        "Under Albanese, the restrictions were lifted between 2023 and December 2024."
      ],
      check: { q: "What triggered China's trade punishment of Australia in 2020?",
        choices: ["A free trade agreement with the US", "Australia's call for an inquiry into Covid's origins", "An Australian ban on Chinese students"], answer: 1,
        explain: "Australia's April 2020 call for an independent inquiry into the virus's origins angered Beijing, which soon targeted Australian exports." },
      sources: [
        { title: "China's trade restrictions on Australian exports", publisher: "United States Studies Centre", url: "https://www.ussc.edu.au/chinas-trade-restrictions-on-australian-exports", date: "2024" },
        { title: "China's government officially abolishes heavy tariffs on Australian wine", publisher: "ABC News", url: "https://www.abc.net.au/news/2024-03-28/china-government-officially-abolishes-heavy-tariffs-on-wine/103644884", date: "2024-03-28" },
        { title: "China lifts rock lobster ban, bringing end to Australian trade barriers", publisher: "France 24", url: "https://www.france24.com/en/live-news/20241220-china-lifts-rock-lobster-ban-bringing-end-to-australian-trade-barriers", date: "2024-12-20" },
        { title: "China lifts ban on Australian beef exporters in the latest sign of thaw", publisher: "Al Jazeera", url: "https://www.aljazeera.com/economy/2024/5/30/china-lifts-ban-on-australian-beef-exporters-in-the-latest-sign-of-thaw", date: "2024-05-30" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "au_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Ports, submarines and warships",
      dek: "Australia is buying nuclear submarines to deter China and trying to take back a port leased to a Chinese company. China has sent warships around Australia for the first time.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au_cn/au_cn-3-hero.webp",
          alt: "Illustration of a tropical harbour with container cranes and a wharf at sunset, with a grey warship anchored offshore.",
          caption: "The Port of Darwin, leased to China's Landbridge in 2015, faces American marines stationed nearby.",
          credit: "Illustration — not a photograph",
          prompt: "A tropical harbour at sunset with a few container cranes and a long wharf, palm trees and mangroves on the shore, a grey warship anchored offshore, warm orange sky reflected in calm water, strategic and quiet, no people, no flags, no legible text." },
        { type: "timeline", head: "Security rivalry", items: [
          ["2015", "Darwin port leased to China's Landbridge for 99 years"],
          ["Sep 2021", "AUKUS: Australia to acquire nuclear-powered submarines"],
          ["2022", "China signs a security pact with Solomon Islands"],
          ["Feb–Mar 2025", "Chinese warships circle Australia and hold live-fire drills"],
          ["2025", "Albanese pledges to return Darwin port to Australian hands"],
          ["May 2026", "Landbridge launches international legal action"]
        ] },
        { type: "section", head: "AUKUS", md:
          "In September 2021 Australia, Britain and the United States announced AUKUS, under which Australia will acquire nuclear-powered submarines: first American Virginia-class boats in the 2030s, then a new design built with Britain. It cancelled a French submarine deal to do so, enraging Paris: Emmanuel Macron publicly accused Prime Minister Morrison of lying to him. Donald Trump's administration reviewed the pact in 2025, and in October that year Trump told Albanese it was going 'full steam ahead'. The programme is expected to cost up to A$368 billion over three decades, Australia's largest-ever defence project. China condemned it as a Cold War bloc. Australia says long-range submarines are needed to keep sea lanes open as China's navy grows." },
        { type: "section", head: "The port", md:
          "In 2015 the Northern Territory government leased the Port of Darwin, near where US Marines train every year, to the Chinese company Landbridge for 99 years and A$506 million. Washington was not consulted and was unhappy. Albanese promised during the 2025 election to return the port to Australian ownership, with Australian pension funds as possible buyers, and said the government would force a sale if necessary. In May 2026 Landbridge started proceedings at the World Bank's investment tribunal, calling the forced sale discriminatory and a breach of the free trade agreement. Beijing has said it will protect Chinese companies' interests." },
        { type: "section", head: "Warships and the Pacific", md:
          "In February and March 2025 a Chinese naval task group, led by a large Type 055 cruiser, sailed all the way around Australia for the first time, and held two live-fire exercises in the Tasman Sea at short notice, forcing airlines to divert flights. China described them as routine. Beijing is also competing for influence in the Pacific islands, where it signed a security pact with Solomon Islands in 2022. In 2026 Canberra has taken a harder line again, including legal action to force Chinese investors out of critical minerals projects." },
        { type: "compare", head: "How far to push?",
          left: { head: "Canberra's hawks", md:
            "China is building the power to threaten Australia's approaches. Deterrence and control of strategic assets are essential." },
          right: { head: "Canberra's pragmatists", md:
            "Australia's prosperity depends on China. Needless provocation risks another round of punishment without making Australia safer." } },
        { type: "section", head: "Why it matters", md:
          "Australia is America's closest ally in the region and China's quarry. How it balances the two, as Premier Li Qiang prepares a visit later in 2026, is a model that other US allies in Asia and Europe watch closely." }
      ],
      takeaways: [
        "Under AUKUS, Australia will acquire nuclear-powered submarines at a cost of up to A$368 billion.",
        "Albanese is trying to force the sale of Darwin port from its Chinese leaseholder, which has sued.",
        "A Chinese naval group circled Australia for the first time in early 2025, holding live-fire drills."
      ],
      check: { q: "What is Landbridge?",
        choices: ["An Australian mining company", "The Chinese company that leases the Port of Darwin", "A bridge between Australia and New Guinea"], answer: 1,
        explain: "Landbridge leased Darwin port in 2015; the Albanese government wants to force its sale to Australian owners." },
      sources: [
        { title: "Chinese-owned Landbridge launches international legal action over forced sale of Port of Darwin", publisher: "ABC News", url: "https://www.abc.net.au/news/2026-05-01/chinese-owned-darwin-port-launches-legal-action/106633362", date: "2026-05-01" },
        { title: "Chinese Task Force Circumnavigates Australia, Causing Local Stir", publisher: "Naval News", url: "https://www.navalnews.com/naval-news/2025/03/chinese-task-force-circumnavigates-australia-causing-local-stir/", date: "2025-03" },
        { title: "Commercial Flights Rerouted After Chinese Navy Announces Last-Minute Live-Fire Drills Near Australia", publisher: "USNI News", url: "https://news.usni.org/2025/02/21/commercial-flights-rerouted-after-chinese-navy-announces-last-minute-live-fire-drills-near-australia", date: "2025-02-21" },
        { title: "Why Australia's Getting Tough on China Again", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2026/08/17/australia-china-getting-tough-trump/", date: "2026-08-17" }
      ]
    }
  ]
});
