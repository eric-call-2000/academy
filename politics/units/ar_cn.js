/* ============================================================
   Relationship — Argentina & China 🇦🇷🇨🇳
   Recognition in 1972, the soy boom and the Kirchners' dams;
   squid boats, lithium and a Chinese space station in Patagonia;
   and Milei, who swore off 'communists' and then kept the
   currency swap. The US side is in us_ar.
   Research note and sources: tools/research/ar_cn.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ar_cn", {
  id: "ar_cn",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ar_cn-1", kind: "relation", asOf: "2026-10-01",
      title: "Soybeans and the Kirchners' dams",
      dek: "China's appetite for soybeans made it one of Argentina's biggest customers. The Kirchners turned trade into a 'strategic partnership', with Chinese loans for dams named after the family.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar_cn/ar_cn-1-hero.webp",
          alt: "Illustration of a vast flat field of soybeans under a wide sky, with grain silos and a combine harvester.",
          caption: "Most of Argentina's soybean exports go to China.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast flat field of green soybeans on the Argentine pampas under a huge sky with white clouds, a red combine harvester working, tall metal grain silos in the distance, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A partnership grows", items: [
          ["1972", "Argentina switches recognition from Taipei to Beijing"],
          ["2004", "Néstor Kirchner and Hu Jintao agree a strategic partnership"],
          ["2009", "First currency swap between the central banks"],
          ["2013", "Chinese-led group wins the Santa Cruz dams contract"],
          ["2014", "A 'comprehensive strategic partnership' under Cristina Kirchner"],
          ["2016", "Macri halts the dams, then restarts them"]
        ] },
        { type: "section", head: "Recognition", md:
          "Argentina recognised Taiwan as China's government until 1972, when, like many countries after Beijing took China's UN seat, it switched. Argentina's military rulers of the 1970s were fiercely anti-communist at home, but trade with China grew anyway: Argentina sold grain and Beijing needed food." },
        { type: "section", head: "The soy boom", md:
          "From the late 1990s China's growing middle class ate more pork, and its pigs ate soybean meal. Argentina's pampas turned to soy, much of it sold to China, which also bought beef, lithium and other commodities. The boom helped Argentina recover from its 2001 crash (see [[lesson:ar-3]]). In 2004 President Néstor Kirchner and China's Hu Jintao agreed a strategic partnership, and in 2009 the two central banks signed their first currency swap, letting Argentina borrow yuan when it ran short of dollars." },
        { type: "section", head: "Cristina's deals", md:
          "Néstor's wife and successor, Cristina Fernández de Kirchner, went further. Shut out of international markets after Argentina's defaults, she turned to Chinese banks. In 2014 the relationship became a 'comprehensive strategic partnership', with deals for railways, a nuclear plant and, above all, two hydroelectric dams on the Santa Cruz river in Patagonia, the Kirchners' home province, financed with a $4.7 billion Chinese loan. One dam was named after Néstor Kirchner, who died in 2010." },
        { type: "section", head: "Macri tries to say no", md:
          "Mauricio Macri, elected in 2015, promised to turn back toward the West and halted work on the dams over cost and environmental concerns. In 2016 the China Development Bank reminded him of a 'cross-default' clause: if Argentina cancelled the dams, China could cancel funding for railways in the north. Macri restarted the project, and kept most of the Kirchner-era deals with China. Researchers have since cited the case as a lesson in how hard it is to say no to Chinese finance." },
        { type: "section", head: "Unequal trade", md:
          "Argentina mostly sells China raw materials and buys manufactured goods, from phones to machinery, and it usually runs a trade deficit with China. Argentine industrialists complain about cheap Chinese imports, while farmers depend on Chinese buyers. That tension, between those who gain and those who lose from China trade, runs through Argentine politics." },
        { type: "compare", head: "The Kirchner bet",
          left: { head: "Supporters", md:
            "China lent when Wall Street wouldn't and built infrastructure Argentina needed." },
          right: { head: "Critics", md:
            "The loans came with strings, favoured the Kirchners' home province and tied Argentina to Beijing." } },
        { type: "section", head: "Why it matters", md:
          "The dams and swaps built by the Kirchners are still there, and every Argentine president since has found them hard to undo." }
      ],
      takeaways: [
        "Argentina recognised Beijing in 1972, and China became a major buyer of its soybeans.",
        "Cristina Kirchner borrowed heavily from China, including $4.7 billion for the Santa Cruz dams.",
        "Macri tried to halt the dams in 2016 but restarted them under pressure from a cross-default clause."
      ],
      check: { q: "Why did Macri restart the Santa Cruz dams?",
        choices: ["The dams were almost finished", "China's bank warned it could cancel railway funding under a cross-default clause", "The IMF required it"], answer: 1,
        explain: "Cancelling the dams would have let China pull funding for other projects." },
      sources: [
        { title: "Is it Possible to Say No to China? The Case of the Kirchner-Cepernic Dams in Argentine Patagonia", publisher: "Stanford CDDRL", url: "https://cddrl.fsi.stanford.edu/lad/publication/it-possible-say-no-china-case-kirchner-cepernic-dams-argentine-patagonia", date: "n.d." },
        { title: "Argentina–China relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Argentina%E2%80%93China_relations", date: "n.d." },
        { title: "Argentina: Beijing's Global Media Influence 2022", publisher: "Freedom House", url: "https://freedomhouse.org/country/argentina/beijings-global-media-influence/2022", date: "2022" },
        { title: "Chinese Hydropower Project in Argentina Is Stuck in Limbo", publisher: "The Diplomat", url: "https://thediplomat.com/2021/12/chinese-hydropower-project-in-argentina-is-stuck-in-limbo/", date: "2021-12" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ar_cn-2", kind: "relation", asOf: "2026-10-01",
      title: "Squid, lithium and a space station",
      dek: "Chinese fishing fleets crowd the edge of Argentina's waters, Chinese firms dig its lithium, and a Chinese space station in Patagonia operates under a 50-year lease that worries Washington.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar_cn/ar_cn-2-hero.webp",
          alt: "Illustration of a large white radio dish antenna on a windswept Patagonian plateau.",
          caption: "China's deep-space station in Neuquén has operated since 2017.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge white radio dish antenna on a windswept dry Patagonian plateau, low buildings beside it, distant snow-capped Andes, wide blue sky, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "China's footprint", items: [
          ["2014–15", "Deal for a Chinese space station in Neuquén"],
          ["2016", "Argentine coastguard sinks a Chinese fishing boat"],
          ["2017", "Espacio Lejano station begins operating"],
          ["2020s", "Chinese firms invest in lithium in Jujuy and Salta"],
          ["Feb 2025", "Navy intercepts Chinese boats near Argentina's zone"],
          ["2025", "Record soybean sales to China"]
        ] },
        { type: "section", head: "Squid boats", md:
          "Every year hundreds of Chinese fishing vessels gather along the edge of Argentina's exclusive economic zone in the South Atlantic, fishing for squid at night under powerful lights. Many are suspected of slipping into Argentine waters or switching off their tracking beacons. In 2016 Argentina's coastguard sank a Chinese trawler it said was fishing illegally, and in 2025 the navy intercepted Chinese boats near its zone. Some Chinese-owned boats are legally registered in Argentina, making up a large part of its squid fleet." },
        { type: "section", head: "Lithium", md:
          "Argentina sits in the 'lithium triangle' with Chile and Bolivia, and its salt flats hold some of the world's biggest reserves of the metal used in electric-car batteries. Chinese companies have moved in fast. Ganfeng Lithium owns the largest stake in the Cauchari-Olaroz project in Jujuy, and other Chinese firms such as Tsingshan and Gotion have signed deals with the province. Milei's government has approved incentives for lithium projects with Chinese partners. Because Argentina's provinces own their minerals, Chinese firms negotiate directly with provincial governments such as Jujuy's, not just with Buenos Aires." },
        { type: "section", head: "A station in the desert", md:
          "In 2014–15 Argentina agreed to let China's space agency build a deep-space tracking station in Neuquén province, with a 35-metre antenna, on 200 hectares leased for 50 years. It began operating in 2017. The station supports China's Moon and Mars missions, but the agreement says Argentina will 'not interfere or interrupt' its work, and it is run by a body linked to China's military. American officials and think tanks such as CSIS have warned it could be used to track or spy on satellites; China says it is purely scientific." },
        { type: "section", head: "Who buys what", md:
          "China is Argentina's second-biggest trading partner after Brazil, and the main market for its soybeans and beef. In September 2025, when Milei briefly suspended grain export taxes, Chinese importers bought millions of tonnes of Argentine soybeans in days, the most in seven years, just as Washington was preparing a bailout and American farmers were shut out of China by the trade war." },
        { type: "compare", head: "Two views of China's presence",
          left: { head: "Investment", md:
            "China buys Argentina's harvest, invests in lithium and builds infrastructure others won't." },
          right: { head: "Strategic risk", md:
            "Fishing fleets strip its seas and a military-linked station sits on its soil." } },
        { type: "section", head: "Why it matters", md:
          "China's presence in Argentina, from the sea to the salt flats to space, is part of a wider contest with the United States for influence in South America, where China is now the biggest trading partner of several countries." }
      ],
      takeaways: [
        "Hundreds of Chinese squid boats fish at the edge of Argentina's waters, some illegally.",
        "Chinese firms have major stakes in Argentina's lithium.",
        "A Chinese deep-space station in Neuquén, operating since 2017 under a 50-year lease, worries Washington."
      ],
      check: { q: "Why does China's station in Neuquén worry Washington?",
        choices: ["It pumps oil", "It is run by a military-linked body and Argentina has agreed not to interfere with it", "It is a naval base"], answer: 1,
        explain: "China says it serves Moon and Mars missions; critics fear it could track satellites." },
      sources: [
        { title: "Espacio Lejano Station", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Espacio_Lejano_Station", date: "n.d." },
        { title: "Eyes on the Skies: China's Growing Space Footprint in South America", publisher: "CSIS", url: "https://features.csis.org/hiddenreach/china-ground-stations-space/", date: "n.d." },
        { title: "Oceana Finds Hundreds of 'Hidden' Chinese Vessels Pillaging Waters Off Argentina", publisher: "Oceana", url: "https://usa.oceana.org/press-releases/oceana-finds-hundreds-hidden-chinese-vessels-pillaging-waters-argentina/", date: "n.d." },
        { title: "Chinese fishermen advance in Argentine waters: group", publisher: "Radio Free Asia", url: "https://www.rfa.org/english/china/2025/03/03/illegal-fishing-argentina-south-america/", date: "2025-03-03" },
        { title: "Argentina Soybean Exports Fueling China U.S. Tensions", publisher: "The China-Global South Project", url: "https://chinaglobalsouth.com/2025/10/01/argentina-soybean-exports-china-us-tensions/", date: "2025-10-01" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ar_cn-3", kind: "relation", asOf: "2026-10-01",
      title: "Milei's U-turn",
      dek: "Milei campaigned against doing business with 'communists'. In office he kept China's currency swap, restarted its dams and plans a trip to Beijing, even as Washington bailed him out and warned against Huawei.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar_cn/ar_cn-3-hero.webp",
          alt: "Illustration of a concrete dam under construction across a turquoise Patagonian river, with cranes.",
          caption: "Work on the Chinese-financed Santa Cruz dams resumed under Milei.",
          credit: "AI illustration — not a photograph",
          prompt: "A large concrete dam under construction across a wide turquoise river in dry Patagonian steppe, tall cranes and trucks, distant mountains under a pale sky, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Between two powers", items: [
          ["2023", "Milei campaigns against dealing with 'communists'"],
          ["Late 2024", "Milei calls China 'a very interesting commercial partner'"],
          ["Apr 2025", "Argentina renews $5 billion of the China swap"],
          ["Oct 2025", "US offers a $20 billion swap line"],
          ["Aug 2026", "China swap extended to five years; Huawei dispute"],
          ["2026", "Milei plans a visit to China"]
        ] },
        { type: "section", head: "From insult to partner", md:
          "During the 2023 campaign Javier Milei said he would not do business with communists, naming China, and promised to align Argentina with the United States and Israel. In office he discovered that China bought much of Argentina's farm output and held a currency swap that propped up its thin reserves. By late 2024 he was calling China 'a very interesting commercial partner' and saying it asked nothing of Argentina. He met Xi Jinping at the G20 in Rio in November 2024." },
        { type: "section", head: "The swap", md:
          "Argentina's swap with the People's Bank of China is worth about 130 billion yuan, roughly $18–19 billion, of which about $5 billion has been drawn. In April 2025 Argentina renewed the drawn part, despite a Trump administration official calling the arrangement 'extortionary'. After Washington offered its own $20 billion swap in October 2025 (see [[lesson:us_ar-3]]), US Treasury Secretary Scott Bessent said he expected Argentina to be able to pay off the China swap. Instead, on 5 August 2026, Argentina extended it for five years." },
        { type: "section", head: "Huawei and visas", md:
          "In July 2026 CALF, the biggest electricity co-operative in Argentina's south, said it would expand a partnership with Huawei to build out its network in Neuquén. Its executives then said they had been warned, including by WhatsApp messages, that their US visas could be revoked. China's embassy accused the United States of 'arrogance and prejudice'. Milei's government stayed quiet, reluctant to choose between its political ally and its customer. The US ambassador, Peter Lamelas, had promised at his confirmation hearing to work with Argentina's provinces to counter Chinese influence." },
        { type: "section", head: "Dams and a trip", md:
          "Milei's government has confirmed that work resumed on the Santa Cruz dams, financed by Chinese banks and built by China's Gezhouba, and Santa Cruz province received a new Chinese loan to keep going. Milei has said he will travel to China in 2026, saying Argentina must 'trade with all the countries in the world'. His foreign policy is pro-American in words and votes, but his economy cannot do without Chinese buyers and credit." },
        { type: "compare", head: "Milei's balance",
          left: { head: "With Washington", md:
            "Politics, security and the bailout; votes with the US at the UN and backs Israel." },
          right: { head: "With Beijing", md:
            "Soybeans, the swap, dams and lithium; no break, whatever the rhetoric." } },
        { type: "section", head: "Why it matters", md:
          "Argentina shows the limits of US pressure in South America: even Trump's closest ally in the region keeps China's money and markets. China, for its part, has shown it will deal with any Argentine government, left or right, as long as trade flows." }
      ],
      takeaways: [
        "Milei campaigned against dealing with China but now calls it an important commercial partner.",
        "Argentina extended its currency swap with China for five years in August 2026, despite US pressure.",
        "A 2026 row over Huawei and US visa threats showed the pressure Argentina faces from both sides."
      ],
      check: { q: "What did Argentina do with its China currency swap in August 2026?",
        choices: ["Cancelled it at US request", "Extended it for five years", "Converted it into dollars"], answer: 1,
        explain: "The swap, about $18–19 billion, was renewed for five years instead of the usual three." },
      sources: [
        { title: "Argentina Renews Part of China Swap Ahead of Bessent Visit", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-04-10/argentina-renews-part-of-its-china-swap-ahead-of-bessent-visit", date: "2025-04-10" },
        { title: "China rebukes US over Huawei dispute as Argentina's Milei balances ties with Washington and Beijing", publisher: "The Washington Post (AP)", url: "https://www.washingtonpost.com/business/2026/08/06/argentina-china-united-states-washington-lamelas-visa-sanctions-huawei-trump/9ea3fefe-91e5-11f1-9fdc-0a725c989a7b_story.html", date: "2026-08-06" },
        { title: "Argentina's Milei plans China trip for 2026 as US pressures Buenos Aires to curb ties", publisher: "South China Morning Post", url: "https://www.scmp.com/news/china/article/3339649/argentinas-milei-plans-china-trip-2026-us-pressures-buenos-aires-curb-ties", date: "2026" },
        { title: "Milei reactivates dams, consolidating strategic rapprochement with China", publisher: "Buenos Aires Times", url: "https://www.batimes.com.ar/news/economy/milei-reactivates-santa-cruz-dams-consolidating-strategic-rapprochement-with-china.phtml", date: "2025" },
        { title: "Bessent expects Argentina to be able to pay off China swap", publisher: "Buenos Aires Times", url: "https://www.batimes.com.ar/news/economy/bessent-expects-argentina-to-be-able-to-pay-off-china-swap.phtml", date: "2025" }
      ]
    }
  ]
});
