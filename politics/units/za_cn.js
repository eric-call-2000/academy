/* ============================================================
   Relationship — South Africa & China 🇿🇦🇨🇳
   Mao's blessing, the PAC and Mandela's slow switch from Taipei;
   BRICS, party schools and the Dalai Lama's missing visa; and
   steel, cars, zero tariffs and a trade deal as Trump's tariffs
   bite. Trump's quarrel with Pretoria is in za-5.
   Research note and sources: tools/research/za_cn.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("za_cn", {
  id: "za_cn",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "za_cn-1", kind: "relation", asOf: "2026-10-01",
      title: "Mandela's choice",
      dek: "China backed the rival of the ANC during the liberation struggle, while quietly trading with apartheid. Democratic South Africa recognised Taiwan for four years before Mandela, under pressure, switched to Beijing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za_cn/za_cn-1-hero.webp",
          alt: "Illustration of an empty diplomatic office with packed boxes and a desk cleared of papers, in Pretoria.",
          caption: "South Africa ended relations with Taiwan and recognised Beijing in January 1998.",
          credit: "AI illustration — not a photograph",
          prompt: "An empty diplomatic office with cardboard boxes packed on the floor, a cleared wooden desk, bare picture hooks on the wall, jacaranda trees visible through the window in Pretoria, late afternoon light, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Two Chinas", items: [
          ["1960s", "China backs the ANC, then its rival, the PAC"],
          ["1976–94", "Apartheid South Africa recognises Taiwan"],
          ["1993", "Taiwan reportedly funds the ANC's election campaign"],
          ["1994", "Mandela becomes president; ties with Taipei continue"],
          ["Nov 1996", "Mandela announces the switch"],
          ["Jan 1998", "South Africa recognises the People's Republic"]
        ] },
        { type: "section", head: "Liberation and rivalry", md:
          "China's Communist Party was an early supporter of the African National Congress, and Mao is said to have blessed its turn to armed struggle around 1960. But when China and the Soviet Union split, Moscow backed the ANC (see [[lesson:za_ru-1]]) and Beijing switched to its rival, the Pan Africanist Congress, training some of its fighters and trying to steer them toward Maoism. Declassified records later suggested that China was also selling weapons to the apartheid military from at least 1980." },
        { type: "section", head: "Apartheid's friend in Taipei", md:
          "From 1976 apartheid South Africa had full relations with the Republic of China on Taiwan, two pariah states trading with each other. When Nelson Mandela took office in 1994, Taiwan was South Africa's sixth-largest trading partner and a big investor, and it had reportedly given the ANC $10 million for its 1993 election campaign. Mandela, grateful and wary of being bullied, hoped to recognise both Chinas." },
        { type: "section", head: "Thirty months", md:
          "Beijing refused any dual recognition. It had a veto at the UN Security Council and was about to take back Hong Kong, where many South African businesses had interests. Inside the ANC, many members felt Communist China, not Taiwan, was the natural friend. After about thirty months of deliberation, Mandela announced in November 1996 that South Africa would switch, and on 1 January 1998 it recognised the People's Republic. Taiwan kept a liaison office in Pretoria." },
        { type: "section", head: "Building the partnership", md:
          "Trade boomed as China's economy grew. China bought South African iron ore, manganese, chrome and platinum, and sold it clothes, electronics and, later, cars. Chinese textile imports hit South Africa's clothing factories hard in the 2000s, and Pretoria persuaded Beijing to accept temporary quotas in 2006. By 2009 China had become South Africa's largest trading partner." },
        { type: "section", head: "Chinese South Africans", md:
          "The ties are older than the states. Between 1904 and 1910 tens of thousands of indentured Chinese labourers were brought to work the Witwatersrand gold mines, then sent home after a political outcry. A small Chinese community stayed, and under apartheid it suffered racial discrimination. In 2008 a South African court ruled that Chinese South Africans who had suffered under apartheid qualified for black economic empowerment programmes." },
        { type: "compare", head: "The 1996 decision",
          left: { head: "Principle", md:
            "Taiwan had backed apartheid; China had long backed liberation, and South Africa needed Beijing's goodwill." },
          right: { head: "Price", md:
            "South Africa dropped a generous friend under pressure, and Taiwan's investors left." } },
        { type: "section", head: "Why it matters", md:
          "The switch set a pattern: South Africa's leaders see China as a fellow champion of the Global South, even when its economic weight costs South African jobs." }
      ],
      takeaways: [
        "China backed the PAC, the ANC's rival, after the Sino-Soviet split, and traded quietly with apartheid.",
        "Mandela kept ties with Taiwan at first, then switched to Beijing on 1 January 1998.",
        "China became South Africa's largest trading partner by 2009."
      ],
      check: { q: "Which liberation movement did China back after the Sino-Soviet split?",
        choices: ["The ANC", "The Pan Africanist Congress", "The Inkatha Freedom Party"], answer: 1,
        explain: "Moscow backed the ANC, so Beijing switched its support to the PAC." },
      sources: [
        { title: "The backstory of how South Africa ditched Taiwan for China", publisher: "Quartz", url: "https://qz.com/africa/1343031/how-nelson-mandelas-south-africa-ditched-taiwan-for-china", date: "2018" },
        { title: "A tale of two Chinas: The story of South Africa's switch from Taipei to Beijing", publisher: "Mail & Guardian", url: "https://mg.co.za/article/2018-07-24-a-tale-of-two-chinas-the-story-of-south-africas-switch-from-taipei-to-beijing/", date: "2018-07-24" },
        { title: "Declassified: Apartheid Profits – China's support for apartheid revealed", publisher: "Daily Maverick", url: "https://www.dailymaverick.co.za/article/2017-10-31-declassified-apartheid-profits-chinas-support-for-apartheid-revealed/", date: "2017-10-31" },
        { title: "China–South Africa relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/China%E2%80%93South_Africa_relations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "za_cn-2", kind: "relation", asOf: "2026-10-01",
      title: "BRICS, party schools and the Dalai Lama",
      dek: "China invited South Africa into BRICS, trained hundreds of ANC cadres and held naval drills off Durban. In return, Pretoria kept the Dalai Lama out.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za_cn/za_cn-2-hero.webp",
          alt: "Illustration of grey warships sailing in formation off a city harbour with high-rise buildings and a beach.",
          caption: "South Africa held naval exercises with China and Russia off Durban in 2023.",
          credit: "AI illustration — not a photograph",
          prompt: "Several grey warships sailing in formation off a subtropical harbour city with high-rise buildings and a long beach, blue Indian Ocean, light clouds, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "A political friendship", items: [
          ["2010", "China invites South Africa to join BRIC, making it BRICS"],
          ["2010", "ANC plans a party school modelled on China's"],
          ["2011", "No visa in time for the Dalai Lama to attend Tutu's birthday"],
          ["2014", "The Dalai Lama is refused again"],
          ["Feb 2023", "Mosi II naval drills with China and Russia"],
          ["2023", "Johannesburg BRICS summit expands the group"]
        ] },
        { type: "section", head: "Into BRICS", md:
          "In late 2010 China invited South Africa to join the BRIC group of big emerging economies, Brazil, Russia, India and China, which became BRICS. South Africa's economy was far smaller than the others, and its membership was widely seen as China's choice, giving the club an African member. South Africa hosted BRICS summits in 2013, 2018 and 2023; at the 2023 Johannesburg summit the group agreed to expand, inviting Egypt, Iran, the UAE and others. The New Development Bank, the BRICS lender based in Shanghai, opened its Africa regional centre in Johannesburg." },
        { type: "section", head: "Learning from the Party", md:
          "The ANC has studied the Chinese Communist Party as a model of how a liberation movement can stay in power and run the economy. Hundreds of ANC officials have trained at Chinese party schools, and in 2010 the ANC bought a farm at Venterskroon to build a political school modelled on China's cadre academies. Since 2022 a party school in Tanzania, funded by China, has trained officials from six southern African liberation movements, including the ANC." },
        { type: "section", head: "The Dalai Lama", md:
          "In 2011 Archbishop Desmond Tutu invited his friend the Dalai Lama to his 80th birthday in Cape Town. South Africa's government failed to issue a visa in time, and the Tibetan leader withdrew. Tutu said the government was worse than apartheid's, and a court later ruled the delay unlawful. In 2014 the Dalai Lama was refused again, for a summit of Nobel peace laureates, which was cancelled. China thanked Pretoria for its 'correct' position (see [[lesson:cn_in-3]]). Critics said South Africa, famous for its own freedom struggle, had let a foreign power decide who could visit." },
        { type: "section", head: "Warships off Durban", md:
          "In February 2023, around the first anniversary of Russia's invasion of Ukraine, South Africa hosted the Mosi II naval exercise with China and Russia off Durban and Richards Bay. American lawmakers condemned it, and it fed doubts about South Africa's claimed neutrality (see [[lesson:za_ru-2]]). China later said it would lead further joint drills with BRICS navies in South African waters." },
        { type: "compare", head: "Non-aligned?",
          left: { head: "Pretoria's view", md:
            "South Africa trades and trains with everyone, East and West; BRICS gives the Global South a voice." },
          right: { head: "Critics' view", md:
            "Excluding the Dalai Lama and drilling with China and Russia show a tilt toward Beijing." } },
        { type: "section", head: "Why it matters", md:
          "South Africa is China's most important political partner in Africa. That closeness has become a source of friction with the United States, which lists South Africa's ties with China among its grievances." }
      ],
      takeaways: [
        "China brought South Africa into BRICS in 2010.",
        "Hundreds of ANC officials have trained at Chinese Communist Party schools.",
        "South Africa kept the Dalai Lama out in 2011 and 2014 and drilled with Chinese and Russian warships in 2023."
      ],
      check: { q: "Why did the Dalai Lama miss Desmond Tutu's 80th birthday in 2011?",
        choices: ["He was ill", "South Africa did not issue his visa in time", "China arrested him"], answer: 1,
        explain: "A court later ruled the government's delay unlawful; critics said it was to please China." },
      sources: [
        { title: "Dalai Lama forced to cancel S Africa visit", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2011/10/4/dalai-lama-forced-to-cancel-s-africa-visit", date: "2011-10-04" },
        { title: "China thanks SA for 'support' over Dalai Lama", publisher: "Mail & Guardian", url: "https://mg.co.za/article/2014-09-05-china-thanks-sa-for-correct-position-on-dalai-lama/", date: "2014-09-05" },
        { title: "China Escalates Its Political Party Training in Africa", publisher: "Africa Center for Strategic Studies", url: "https://africacenter.org/spotlight/china-escalates-its-political-party-training-in-africa/", date: "n.d." },
        { title: "South Africa: ANC Looks to Learn from Chinese Communist Party", publisher: "TIME", url: "https://time.com/3601968/anc-south-africa-china-communist-party/", date: "2014" },
        { title: "South Africa hosts joint maritime exercises involving China and Russia", publisher: "Africanews", url: "https://www.africanews.com/2023/02/21/south-africa-hosts-joint-maritime-exercises-involving-china-and-russia/", date: "2023-02-21" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "za_cn-3", kind: "relation", asOf: "2026-10-01",
      title: "Steel, cars and zero tariffs",
      dek: "Cheap Chinese steel helped close South African mills, and Chinese cars now make up one in five sold. But with Trump's tariffs shutting the US market, Pretoria signed a new trade framework with Beijing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za_cn/za_cn-3-hero.webp",
          alt: "Illustration of rows of new cars lined up at a port car terminal next to a large car-carrier ship.",
          caption: "Chinese brands took about a fifth of South Africa's car market in 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "Long rows of new cars in many colours lined up at a port car terminal next to a huge car-carrier ship, cranes and a harbour city behind, bright sky, documentary painting style, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "Trade under pressure", items: [
          ["2025", "ArcelorMittal South Africa winds down its long-steel business"],
          ["2025", "Chinese brands take 16.8% of car sales"],
          ["2025", "US tariffs hit South Africa"],
          ["Feb 2026", "Framework agreement on a new China trade deal"],
          ["1 May 2026", "China's zero tariffs for 53 African countries take effect"],
          ["Q2 2026", "Chinese car sales up 72%; 22% of the market"]
        ] },
        { type: "section", head: "Steel", md:
          "South Africa's steel industry has been battered by high electricity and transport costs and a flood of cheap imports, much of it from China. In 2025 ArcelorMittal South Africa, the biggest producer, began winding down its long-steel business, putting thousands of jobs at risk. South Africa imposed anti-dumping duties of up to about 75% on some Chinese structural steel. Unions blame Chinese overcapacity; others blame the state power company's failures." },
        { type: "section", head: "Cars", md:
          "South Africa builds cars for export, mostly for German and Japanese brands, and the industry is one of its biggest employers. Now Chinese brands such as Chery, Haval and BYD are winning buyers with cheaper prices: their share of passenger car sales rose to 16.8% in 2025 from 11.2% a year earlier, and their sales jumped 72% in the second quarter of 2026, reaching about 22% of the market. Pretoria is pressing Chinese makers to build factories in South Africa rather than just ship cars in." },
        { type: "section", head: "Trump pushes Pretoria east", md:
          "Relations with Washington collapsed in 2025: Trump cut aid, accused South Africa of persecuting white farmers, expelled its ambassador and imposed some of the highest tariffs on any country in Africa (see [[lesson:za-5]]). In February 2026 South Africa signed a framework agreement with China for a new trade deal, and from 1 May China gave zero-tariff access to all products from 53 African countries, South Africa included. Ramaphosa thanked Xi and promised to make good use of it." },
        { type: "section", head: "Unequal trade", md:
          "South Africa still mostly sells China raw materials, iron ore, manganese, chrome and platinum, and buys manufactured goods, and it runs a large trade deficit with China. Business groups warn that zero tariffs matter little unless South Africa can make more products China wants, from citrus and wine to processed metals. China also invests in mining, energy and telecoms, with Huawei a big supplier to South Africa's mobile networks." },
        { type: "compare", head: "China and South African industry",
          left: { head: "Threat", md:
            "Cheap steel and cars destroy factories and jobs that South Africa cannot afford to lose." },
          right: { head: "Opportunity", md:
            "A huge tariff-free market and investors willing to build, as America closes its doors." } },
        { type: "section", head: "Why it matters", md:
          "With the US market shrinking, South Africa is leaning on China more than ever, even though Chinese competition is part of what is hollowing out its industry. Finding a balance between the two giants is now one of Pretoria's biggest tests." }
      ],
      takeaways: [
        "Cheap imports, much of them Chinese, helped push ArcelorMittal South Africa to wind down a steel business in 2025.",
        "Chinese car brands reached about 22% of South African sales in 2026.",
        "After Trump's tariffs, South Africa signed a trade framework with China, which gave Africa zero tariffs from May 2026."
      ],
      check: { q: "What did China offer 53 African countries from 1 May 2026?",
        choices: ["Free cars", "Zero tariffs on all their exports to China", "Debt forgiveness"], answer: 1,
        explain: "The zero-tariff treatment covers every tariff line for African countries with ties to Beijing." },
      sources: [
        { title: "Facing high Trump tariffs, Africa's leading economy says it's close to a new trade deal with China", publisher: "PBS NewsHour (AP)", url: "https://www.pbs.org/newshour/amp/world/facing-high-trump-tariffs-africas-leading-economy-says-its-close-to-a-new-trade-deal-with-china", date: "2026-02-06" },
        { title: "China implements historic zero tariffs for all African nations with diplomatic ties", publisher: "Xinhua via gov.cn", url: "https://english.www.gov.cn/policies/policywatch/202605/01/content_WS69f45e35c6d00ca5f9a0ac01.html", date: "2026-05-01" },
        { title: "Chinese vehicle brands surge 72% in South Africa", publisher: "BusinessDay", url: "https://www.businessday.co.za/motoring/2026-09-17-chinese-vehicle-brands-surge-72-in-south-africa/", date: "2026-09-17" },
        { title: "Chinese Automakers South Africa Market Share Growth", publisher: "The China-Global South Project", url: "https://chinaglobalsouth.com/2026/05/16/chinese-automakers-expand-south-africa-market-share-2025/", date: "2026-05-16" },
        { title: "South Africa hits structural steel from China and Thailand with AD duties", publisher: "SteelOrbis", url: "https://www.steelorbis.com/steel-news/latest-news/south-africa-hits-structural-steel-from-china-and-thailand-with-ad-duties-1443054.htm", date: "n.d." }
      ]
    }
  ]
});
