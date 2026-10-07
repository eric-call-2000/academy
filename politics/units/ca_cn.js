/* ============================================================
   Relationship — Canada & China 🇨🇦🇨🇳
   Head tax to early recognition; the Meng Wanzhou arrest and
   the two Michaels; interference, canola and electric cars,
   and a 2026 reset that angered Washington.
   Research note and sources: tools/research/ca_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ca_cn", {
  id: "ca_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ca_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Railways, wheat and recognition",
      dek: "Chinese workers helped build Canada's railway and were then taxed and shut out. A century later Canada became one of the first Western countries to recognise Communist China, with a formula others copied.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca_cn/ca_cn-1-hero.webp",
          alt: "Illustration of workers laying a railway track through steep forested mountains in the 1880s.",
          caption: "Thousands of Chinese labourers worked on the Canadian Pacific Railway through British Columbia's mountains.",
          credit: "Illustration — not a photograph",
          prompt: "Nineteenth-century labourers in wide hats laying a wooden-sleeper railway track along a steep forested mountainside, a rough trestle bridge over a river gorge, misty snow-capped peaks, sepia-toned historical painting style, no legible text." },
        { type: "timeline", head: "From exclusion to recognition", items: [
          ["1881–85", "Chinese labourers help build the Canadian Pacific Railway"],
          ["1885", "A head tax is imposed on Chinese immigrants"],
          ["1923", "The Chinese Immigration Act all but bans them"],
          ["1947", "The ban is repealed"],
          ["1961", "Large wheat sales to famine-hit China"],
          ["13 Oct 1970", "Canada recognises the People's Republic"]
        ] },
        { type: "section", head: "Built, then barred", md:
          "Thousands of Chinese labourers came to British Columbia in the early 1880s to build the Canadian Pacific Railway through the Rocky Mountains, doing the most dangerous work for the lowest pay; many died. Once the line was finished in 1885, Parliament imposed a head tax of $50 on every Chinese immigrant, raised to $100 in 1900 and $500 in 1903, about two years' wages for a Chinese labourer. No other group of immigrants was taxed this way. In 1923 the Chinese Immigration Act, often called the Exclusion Act, banned almost all Chinese immigration. It was repealed only in 1947. In 2006 Prime Minister Stephen Harper apologised in Parliament for the head tax and the exclusion." },
        { type: "section", head: "A Canadian hero in China", md:
          "One Canadian is famous in China: Norman Bethune, a Montreal surgeon who joined Mao Zedong's Communist forces as a battlefield doctor and died there of blood poisoning in 1939. Mao wrote an essay in his honour that generations of Chinese schoolchildren had to learn. After the Communist victory in 1949 (see [[lesson:cn-9]]) Canada followed the United States in not recognising the new government, and Canadian troops fought Chinese forces in the Korean War. But trade came first: in 1961, during the famine caused by the Great Leap Forward (see [[lesson:cn-10]]), Canada began selling China large quantities of wheat." },
        { type: "section", head: "The Canadian formula", md:
          "In 1968 Prime Minister Pierre Trudeau, father of Justin, set out to recognise Beijing. The talks stuck on Taiwan, which the People's Republic claims (see [[lesson:cn_tw-1]]). The solution, agreed on 13 October 1970, became known as the 'Canadian formula': China declared that Taiwan was an inalienable part of its territory, and Canada said only that it 'takes note' of this position, neither endorsing nor challenging it. Canada cut official ties with Taiwan but kept trade and cultural links. Italy and many others soon followed the same wording, and it helped open the way for the People's Republic to take China's seat at the United Nations in 1971 (see [[lesson:tw-11]]). Trudeau visited China in 1973." },
        { type: "compare", head: "Two legacies",
          left: { head: "A bridge", md:
            "Canada was early and open to China, and has one of the largest Chinese diasporas in the West." },
          right: { head: "A wound", md:
            "For decades Canada taxed and excluded Chinese people, a history many Chinese Canadians still feel." } },
        { type: "section", head: "Why it matters", md:
          "Canada's early recognition gave it goodwill in Beijing for decades, and its formula on Taiwan is still its policy. Today more than 1.7 million Canadians are of Chinese origin." }
      ],
      takeaways: [
        "Chinese labourers helped build Canada's railway, then faced a head tax and a 1923 exclusion law.",
        "Canada recognised the People's Republic on 13 October 1970.",
        "Under the 'Canadian formula' Canada 'takes note' of China's claim to Taiwan without endorsing it."
      ],
      check: { q: "What is the 'Canadian formula'?",
        choices: ["A trade deal on wheat", "Canada 'takes note' of China's claim to Taiwan without endorsing or challenging it", "A ban on Chinese immigration"], answer: 1,
        explain: "Agreed in 1970, it let Canada recognise Beijing without accepting its claim to Taiwan; many countries copied it." },
      sources: [
        { title: "Chinese Head Tax in Canada", publisher: "The Canadian Encyclopedia", url: "https://www.thecanadianencyclopedia.ca/en/article/chinese-head-tax-in-canada", date: "n.d." },
        { title: "Commemorating the 100th Anniversary of the 1923 Chinese Exclusion Act in Canada", publisher: "Canada's History", url: "https://www.canadashistory.ca/education/classroom-resources/the-1923-chinese-exclusion-act", date: "2023" },
        { title: "Parliamentary Committee Notes: Canada-China Diplomatic Relations", publisher: "Public Safety Canada", url: "https://www.publicsafety.gc.ca/cnt/trnsprnc/brfng-mtrls/prlmntry-bndrs/20230623/19-en.aspx", date: "2023-06-23" },
        { title: "Committee Report No. 2 — Special Committee on the Canada–People's Republic of China Relationship", publisher: "House of Commons of Canada", url: "https://www.ourcommons.ca/DocumentViewer/en/44-1/CACN/report-2/page-24", date: "2023" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ca_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "Meng Wanzhou and the two Michaels",
      dek: "In 2018 Canada arrested a Huawei executive at America's request. Nine days later China detained two Canadians, and held them for almost three years, until she went home.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca_cn/ca_cn-2-hero.webp",
          alt: "Illustration of an airport runway at night with a passenger jet taking off under floodlights.",
          caption: "On 24 September 2021 Meng flew home to China, and the two Michaels flew home to Canada.",
          credit: "Illustration — not a photograph",
          prompt: "A passenger jet taking off from an airport runway at night under bright floodlights, wet tarmac reflecting the lights, a second plane waiting in the distance, quiet dramatic mood, no people, no airline logos, no flags, no legible text." },
        { type: "timeline", head: "1,020 days", items: [
          ["1 Dec 2018", "Meng Wanzhou arrested in Vancouver at US request"],
          ["10 Dec 2018", "China detains Michael Kovrig and Michael Spavor"],
          ["Jan 2019", "Canadian Robert Schellenberg's sentence raised to death"],
          ["Mar 2019", "China blocks Canadian canola imports"],
          ["Aug 2021", "Spavor sentenced to 11 years for spying"],
          ["24 Sep 2021", "Meng goes home after a US deal; the Michaels are freed"]
        ] },
        { type: "section", head: "An arrest in Vancouver", md:
          "On 1 December 2018 Canadian police arrested Meng Wanzhou, the chief financial officer of the Chinese telecoms giant Huawei and daughter of its founder, as she changed planes in Vancouver, on the same day Donald Trump and Xi Jinping dined together at the G20 summit in Buenos Aires. The United States wanted her extradited on fraud charges, accusing her of misleading a bank about Huawei's business in Iran, which was under sanctions. Canada said it was simply following its extradition treaty and the law. China saw a political act against one of its national champions, at a time when Washington was pressing allies to keep Huawei out of their 5G networks. Meng spent almost three years on bail in her Vancouver mansion, fighting extradition in the courts." },
        { type: "section", head: "Hostage diplomacy", md:
          "Nine days after the arrest, Chinese state security detained two Canadians: Michael Kovrig, a former diplomat working for the International Crisis Group, and Michael Spavor, a businessman who organised trips to North Korea. They were held in isolation, with lights on day and night, and charged with spying. In August 2021 Spavor was sentenced to 11 years in prison. Beijing also raised the sentence of a Canadian convicted of drug smuggling, Robert Schellenberg, from 15 years to death, and blocked imports of Canadian canola seed. Canada and its allies called this 'hostage diplomacy'; China insisted the cases were unconnected." },
        { type: "section", head: "The swap", md:
          "The deadlock broke on 24 September 2021. Meng reached an agreement with the US Justice Department, admitting some facts in return for the charges being dropped later, and flew to China, where she was welcomed as a hero. Within hours Kovrig and Spavor were released and flown to Canada, after 1,020 days in detention. The timing made the link hard to deny. The affair left deep damage: polls showed Canadians' views of China collapsed, and in 2022 Canada banned Huawei and another Chinese firm, ZTE, from its 5G networks. In 2025 Canada said China had executed four Canadians convicted of drug crimes; Schellenberg was not among them." },
        { type: "compare", head: "Two stories",
          left: { head: "Ottawa's view", md:
            "Canada applied the rule of law, and China took innocent Canadians hostage to punish it." },
          right: { head: "Beijing's view", md:
            "Canada did America's bidding against a Chinese company, and the Michaels' cases were separate legal matters." } },
        { type: "section", head: "Why it matters", md:
          "The affair showed how a middle power can be caught between the United States and China, and how China uses detentions and trade bans as pressure. It still shapes how Canadians see Beijing." }
      ],
      takeaways: [
        "Canada arrested Huawei's Meng Wanzhou in 2018 at the request of the United States.",
        "China then detained Michael Kovrig and Michael Spavor for 1,020 days.",
        "All three went home on the same day, 24 September 2021, after Meng's deal with the US."
      ],
      check: { q: "What happened on 24 September 2021?",
        choices: ["Canada recognised the People's Republic", "Meng Wanzhou flew home and China freed the two Michaels", "China banned Canadian canola"], answer: 1,
        explain: "After Meng's deal with US prosecutors she flew to China; within hours Kovrig and Spavor were released." },
      sources: [
        { title: "Meng Wanzhou Affair (Two Michaels Case)", publisher: "The Canadian Encyclopedia", url: "https://www.thecanadianencyclopedia.ca/en/article/meng-wanzhou-affair", date: "n.d." },
        { title: "The Meng Wanzhou Huawei saga: A timeline", publisher: "CBC News", url: "https://www.cbc.ca/news/meng-wanzhou-huawei-kovrig-spavor-1.6188472", date: "2021-09" },
        { title: "Meng Wanzhou, Huawei, and China's Hostage Diplomacy", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2021/09/28/meng-wanzhou-michael-kovrig-spavor-release-china-canada-huawei/", date: "2021-09-28" },
        { title: "Canada condemns China executions of four Canadian drug convicts", publisher: "CNN", url: "https://www.cnn.com/2025/03/19/americas/canada-condemns-china-drug-execution-intl-hnk/index.html", date: "2025-03-19" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ca_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Interference, canola and a reset",
      dek: "An inquiry named China the most active foreign meddler in Canadian politics. Then, squeezed by Trump's tariffs, Mark Carney went to Beijing in 2026 and cut a deal on canola and electric cars.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca_cn/ca_cn-3-hero.webp",
          alt: "Illustration of a vast yellow canola field on the prairies with grain elevators and a line of electric cars on a road.",
          caption: "The 2026 deal traded lower Chinese tariffs on canola for a quota of Chinese electric cars.",
          credit: "Illustration — not a photograph",
          prompt: "A vast bright yellow canola field on the Canadian prairies under a big blue sky, old wooden grain elevators on the horizon, a straight road with a line of sleek modern electric cars, crisp summer light, no people close up, no flags, no logos, no legible text." },
        { type: "facts", head: "The January 2026 deal", rows: [
          ["Chinese EVs", "Up to 49,000 a year at a 6.1% tariff, rising to about 70,000"],
          ["Canadian canola", "Chinese levies cut from about 85% to about 15%"],
          ["Background", "Canada's 100% EV tariff (2024); China's canola tariffs (2025)"],
          ["Visit", "First by a Canadian prime minister since 2017"],
          ["Reaction", "Trump threatens a 100% tariff on Canada"]
        ] },
        { type: "section", head: "Interference", md:
          "From 2022 Canadian media, using leaked intelligence, reported that Beijing had tried to influence the 2019 and 2021 federal elections, backing favoured candidates in some ridings with large Chinese-Canadian communities. Police investigated suspected Chinese 'police stations' in Toronto and Montreal, and in May 2023 Canada expelled a Chinese diplomat, Zhao Wei, accused of targeting the family of Conservative MP Michael Chong. A public inquiry led by Justice Marie-Josée Hogue reported on 28 January 2025. It called China the 'most active perpetrator' of foreign interference in Canada, but found that the elections' results were not affected, that Canada's democratic institutions 'remained robust', and that there was 'no evidence of traitors in Parliament'." },
        { type: "section", head: "Cars and canola", md:
          "In 2024 Canada followed the United States in putting a 100% tariff on Chinese electric vehicles, to protect its own car industry. China answered in March 2025 with tariffs of 100% on Canadian canola oil, meal and peas, and later heavy duties on canola seed, hurting prairie farmers in Saskatchewan, Alberta and Manitoba. Canada is one of the world's largest canola exporters, and China had been a major buyer. At the same time Donald Trump's tariffs and talk of Canada as a '51st state' (see [[lesson:ca-6]]) pushed Ottawa to find other markets. Mark Carney's government (see [[lesson:ca-4]]) began to talk of China as a partner again." },
        { type: "section", head: "The Beijing deal and Trump's anger", md:
          "In mid-January 2026 Carney became the first Canadian prime minister to visit China since 2017, and met Xi Jinping. On 16 January he announced what he called a landmark deal: Canada would let in up to 49,000 Chinese electric vehicles a year at the normal tariff of 6.1%, rising to about 70,000 within five years, and China would cut levies on Canadian canola from about 85% to about 15% by 1 March. Trump first praised the deal. A week later he threatened a 100% tariff on all Canadian goods if Canada 'makes a deal with China', calling Carney 'Governor'. Carney replied that Canada had no plans for a free trade agreement with China." },
        { type: "compare", head: "Two views of the reset",
          left: { head: "Pragmatists", md:
            "With the United States unreliable, Canada must trade with the world's second-largest economy, eyes open." },
          right: { head: "Critics", md:
            "China interferes in Canadian politics and detains Canadians. Cheap Chinese cars threaten jobs and security." } },
        { type: "section", head: "Why it matters", md:
          "Canada is testing how far a close US ally can go in dealing with China. Whether Washington makes it pay a price, in tariffs or in talks over North American trade, will shape the choices of other allies too." }
      ],
      takeaways: [
        "A 2025 inquiry called China the most active perpetrator of foreign interference in Canada.",
        "Canada's 2024 EV tariffs led China to hit Canadian canola in 2025.",
        "Carney's January 2026 deal cut canola tariffs and let in some Chinese EVs, angering Trump."
      ],
      check: { q: "What did Carney's January 2026 deal with China do?",
        choices: ["Created a full free trade area", "Let in a quota of Chinese EVs at 6.1% and cut Chinese tariffs on canola", "Banned Huawei from Canada"], answer: 1,
        explain: "Up to 49,000 Chinese EVs a year could enter at 6.1%, and China cut its canola levies to about 15%." },
      sources: [
        { title: "Canada and China slash tariffs on EVs and canola in reset of ties", publisher: "CNBC", url: "https://www.cnbc.com/2026/01/17/canada-and-china-slash-tariffs-on-evs-and-canola-in-reset-of-ties.html", date: "2026-01-17" },
        { title: "Trump threatens Canada with 100% tariffs over its new trade deal with China", publisher: "NPR", url: "https://www.npr.org/2026/01/24/nx-s1-5687236/canada-china-tariffs-trump", date: "2026-01-24" },
        { title: "Was the public inquiry into foreign interference worth the trouble?", publisher: "Policy Options", url: "https://policyoptions.irpp.org/2025/02/foreign-interference-inquiry/", date: "2025-02" },
        { title: "Carney says Canada has no plans to pursue China free trade deal after Trump tariff threat", publisher: "The Hill", url: "https://thehill.com/business/5706229-donald-trump-tariffs-threat-canada-china/", date: "2026-01" }
      ]
    }
  ]
});
