/* ============================================================
   Relationship — Germany & China 🇩🇪🇨🇳
   'Change through trade': Volkswagen in Shanghai and Merkel's
   twelve visits; a turn to 'systemic rival' after Kuka, Covid
   and Ukraine; and a 2025–26 squeeze of Chinese cars, chips,
   rare earths and a record trade deficit.
   Research note and sources: tools/research/de_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("de_cn", {
  id: "de_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "de_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Cars for China",
      dek: "German carmakers and machine builders found in China their biggest market. Angela Merkel visited twelve times, trusting that trade would bring change as well as profits.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_cn/de_cn-1-hero.webp",
          alt: "Illustration of a busy car factory assembly line with robot arms welding car bodies.",
          caption: "Volkswagen began building cars in Shanghai in the 1980s, and China became its largest market.",
          credit: "Illustration — not a photograph",
          prompt: "A long busy car factory assembly line with orange robot arms welding silver car bodies, sparks flying, workers in overalls in the background, bright industrial lighting, clean modern documentary style, no logos, no flags, no legible text." },
        { type: "timeline", head: "Building the partnership", items: [
          ["11 Oct 1972", "West Germany and China establish diplomatic relations"],
          ["1984", "Shanghai Volkswagen joint venture founded"],
          ["2005–21", "Merkel visits China twelve times as chancellor"],
          ["2014", "Relationship raised to a 'comprehensive strategic partnership'"],
          ["2016", "China becomes Germany's biggest trading partner"],
          ["2016–23", "China stays top partner every year"]
        ] },
        { type: "section", head: "Volkswagen goes east", md:
          "West Germany recognised the People's Republic on 11 October 1972, soon after Nixon's visit to Beijing. Business led the way. In 1984 Volkswagen formed a joint venture in Shanghai with a local partner, one of the first big foreign car ventures in China, and its Santana saloon became the taxi of a generation of Chinese cities. After the 1989 Tiananmen crackdown (see [[lesson:cn-11]]) Germany joined a European arms embargo on China that still stands, but trade soon resumed, and chancellors Helmut Kohl and Gerhard Schröder led business delegations to Beijing. As China opened up, German firms sold it the machine tools, chemical plants and cars it needed to industrialise. For decades China was Volkswagen's largest market, earning it a big share of its profits, and BMW and Mercedes-Benz followed, and German chemical giant BASF built huge plants in China too." },
        { type: "section", head: "Merkel's twelve trips", md:
          "Angela Merkel, chancellor from 2005 to 2021, went to China twelve times, more than any other Western leader of her era, usually with a plane full of business chiefs. She raised human rights privately and sometimes met dissidents, but her main aim was trade and cooperation. German policy followed an old idea, 'Wandel durch Handel', or change through trade: deeper economic ties would make China more open and more tied to the rules-based order. From 2016 China was Germany's largest trading partner, a position it held every year until 2023. German exports to China helped the country recover quickly from the 2008 financial crisis." },
        { type: "section", head: "A good deal for both", md:
          "For China, Germany was the most important source of European technology and a political friend in the European Union; German leaders often argued against tough EU measures on Chinese trade. For Germany, China bought the machines and cars its industry made, and Chinese factories supplied cheap parts in return. The two governments held regular joint cabinet meetings, called intergovernmental consultations, a privilege China gave few countries, and Chinese students became one of the largest groups of foreign students at German universities. Critics warned that Germany was becoming dependent, as it was on Russian gas (see [[lesson:de_ru-1]]), but for years business and government saw only opportunity." },
        { type: "compare", head: "Change through trade?",
          left: { head: "It worked", md:
            "Trade made millions of Germans and Chinese richer and kept the two in constant contact." },
          right: { head: "It failed", md:
            "China grew richer but not freer, and Germany ended up dependent on a rival." } },
        { type: "section", head: "Why it matters", md:
          "Germany is Europe's biggest economy and its biggest exporter to China. Its choices shape how the whole European Union deals with Beijing." }
      ],
      takeaways: [
        "Volkswagen's 1984 Shanghai joint venture began decades in which China became German industry's biggest market.",
        "Merkel visited China twelve times, following the idea of 'change through trade'.",
        "China was Germany's largest trading partner every year from 2016 to 2023."
      ],
      check: { q: "What was the idea behind 'Wandel durch Handel'?",
        choices: ["Trade would make China more open and tied to the rules-based order", "Germany should stop trading with China", "China should buy German gas"], answer: 0,
        explain: "'Change through trade' held that economic ties would bring political change, the same bet Germany made with Russia." },
      sources: [
        { title: "The highs and lows of Angela Merkel's long relationship with China", publisher: "South China Morning Post", url: "https://www.scmp.com/news/china/diplomacy/article/3145935/highs-and-lows-angela-merkels-long-relationship-china", date: "2021" },
        { title: "Germany's policy on China: From win-win to strategic competition", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/in-depth-research-reports/report/germanys-policy-on-china-from-win-win-to-strategic-competition/", date: "2023" },
        { title: "China is Germany's most important trading partner once again in 2025", publisher: "Destatis", url: "https://www.destatis.de/EN/Press/2026/02/PE26_056_51.html", date: "2026-02-20" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "de_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "Partner, competitor, rival",
      dek: "A Chinese takeover of a German robot maker in 2016 set off alarms. By 2023 Berlin officially called China a 'systemic rival' and began removing Huawei from its phone networks.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_cn/de_cn-2-hero.webp",
          alt: "Illustration of orange industrial robot arms in a quiet factory hall.",
          caption: "Midea's 2016 takeover of the robot maker Kuka made Germany rethink Chinese investment.",
          credit: "Illustration — not a photograph",
          prompt: "Several large orange industrial robot arms standing still in a quiet clean factory hall, cool blue light through high windows, reflections on a polished floor, calm and slightly ominous mood, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "The mood shifts", items: [
          ["2016", "Midea bids for Kuka, the robot maker"],
          ["2019", "The EU calls China a 'systemic rival'"],
          ["13 Jul 2023", "Germany's first China strategy"],
          ["Jul 2024", "Huawei and ZTE parts to be removed from 5G core by 2026"],
          ["Oct 2024", "Germany votes against EU tariffs on Chinese EVs"],
          ["Nov 2024", "Volkswagen sells its Xinjiang plant"]
        ] },
        { type: "section", head: "The Kuka shock", md:
          "In 2016 the Chinese appliance maker Midea offered about €4.5 billion for Kuka, one of Germany's leading makers of industrial robots, and ended up with almost 95% of it. The deal was legal, but it alarmed politicians: Kuka's robots were central to 'Industry 4.0', Germany's plan for high-tech manufacturing, and China's 'Made in China 2025' plan aimed to master the same technologies. Germany tightened its rules on foreign takeovers and later blocked several Chinese bids for sensitive firms. In 2022 it let the Chinese state shipping firm Cosco buy into a Hamburg container terminal, but only after cutting its stake to 24.9%. At the same time, German firms complained that they still could not buy Chinese companies on equal terms." },
        { type: "section", head: "A new strategy", md:
          "Covid, China's crackdowns in Hong Kong and Xinjiang (see [[lesson:cn-12]]) and its support for Russia after the invasion of Ukraine hardened opinion further. On 13 July 2023 Olaf Scholz's government published Germany's first China strategy. Echoing the European Union, it called China a 'partner, competitor and systemic rival', and warned that while China was becoming less dependent on Europe, Germany was becoming more dependent on China. 'De-risking', it said, was urgently needed: reducing dependence in critical areas without cutting ties. In July 2024 Germany agreed with its phone companies to remove Huawei and ZTE parts from the core of its 5G networks by the end of 2026." },
        { type: "section", head: "Industry pushes back", md:
          "German business was split. Many large firms, especially carmakers and chemical companies, kept investing in China, arguing that they had to be where the world's biggest car market was. When the European Union voted in October 2024 on tariffs of up to 35% on Chinese electric cars, Germany voted against, fearing Chinese retaliation against German cars; it was outvoted. Pressure on firms over human rights also grew. After years of reports of forced labour affecting Uyghurs, Volkswagen and its Chinese partner sold their plant in Urumqi, Xinjiang, in November 2024, citing 'economic reasons'." },
        { type: "compare", head: "How far to de-risk?",
          left: { head: "Hawks", md:
            "China is a rival that uses dependence as a weapon. Germany must cut exposure in key areas quickly." },
          right: { head: "Business", md:
            "China is too big to leave. De-risking must not hurt the German companies that depend on its market." } },
        { type: "section", head: "Why it matters", md:
          "Germany's shift from 'change through trade' to 'de-risking' mirrors a wider Western turn, but its economy is more tied to China than most. How far it goes decides how far Europe goes." }
      ],
      takeaways: [
        "Midea's 2016 takeover of Kuka led Germany to tighten its rules on foreign takeovers.",
        "Germany's 2023 China strategy called China a 'partner, competitor and systemic rival' and urged 'de-risking'.",
        "Berlin agreed to remove Huawei from its 5G core but voted against EU tariffs on Chinese EVs."
      ],
      check: { q: "How did Germany's 2023 China strategy describe China?",
        choices: ["As an ally", "As a 'partner, competitor and systemic rival'", "As an enemy"], answer: 1,
        explain: "The strategy borrowed the EU's formula and called for 'de-risking' dependence in critical areas." },
      sources: [
        { title: "Germany presents long-awaited strategy on China as a rival and partner", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2023/07/13/germany-china-government-strategy-relations/927d7388-216a-11ee-8994-4b2d0b694a34_story.html", date: "2023-07-13" },
        { title: "The 2023 Federal Government Strategy on China", publisher: "German Federal Foreign Office", url: "https://www.auswaertiges-amt.de/en/aussenpolitik/regionaleschwerpunkte/asien/strategy-on-china/2608618", date: "2023-07-13" },
        { title: "Germany moves to ban China's Huawei, ZTE from its 5G network", publisher: "CNN", url: "https://www.cnn.com/2024/07/11/tech/germany-ban-huawei-zte-5g-network", date: "2024-07-11" },
        { title: "China's Midea completes takeover bid for German robot maker", publisher: "China Daily", url: "https://www.chinadaily.com.cn/business/tech/2016-12/31/content_27830825.htm", date: "2016-12-31" },
        { title: "Volkswagen sells Xinjiang plant linked to Uyghur forced labor", publisher: "Radio Free Asia", url: "https://www.rfa.org/english/uyghur/2024/11/27/volkswagen-sells-xinjiang-plant/", date: "2024-11-27" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "de_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Cars, chips and a deficit",
      dek: "Chinese electric cars now beat German ones, Chinese export bans have halted German factories, and Germany buys twice as much from China as it sells. In 2026 Friedrich Merz went to Beijing to seek a reset.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_cn/de_cn-3-hero.webp",
          alt: "Illustration of a port with rows of new cars lined up beside a giant car-carrier ship.",
          caption: "Chinese car exports have surged while German carmakers lose ground in China.",
          credit: "Illustration — not a photograph",
          prompt: "A huge port terminal with thousands of new shiny cars in neat rows beside a giant car-carrier ship, cranes in the background, low evening sun, wide aerial view, documentary style, no logos, no flags, no legible text." },
        { type: "facts", head: "Trade in 2025", rows: [
          ["Total trade", "€251.8 billion, again ahead of the US (€240.5 billion)"],
          ["Imports from China", "€170.6 billion, up 8.8%"],
          ["Exports to China", "€81.3 billion, down 9.7%"],
          ["Deficit", "About €89 billion, four times the 2020 level"],
          ["Merz visit", "Feb 2026, with 30 business leaders"]
        ] },
        { type: "section", head: "The tables turn", md:
          "For decades Germany sold China advanced products and bought cheaper goods. That has reversed. Chinese carmakers such as BYD now lead the world in electric vehicles and batteries, and German brands have lost market share in China fast. In 2023 BYD overtook Volkswagen as the best-selling car brand in China, and Volkswagen responded by buying a stake in the Chinese electric-car maker Xpeng to help design its cars. German exports to China fell 9.7% in 2025, to €81.3 billion, while imports rose 8.8%, to €170.6 billion. The deficit of almost €90 billion, about 2% of German output, is four times what it was in 2020. With Trump's tariffs cutting German sales to America (see [[lesson:de-7]]), China again became Germany's biggest trading partner in 2025, but for the wrong reasons: Germany buys far more than it sells." },
        { type: "section", head: "Squeezed by export bans", md:
          "Germany has also learned how much it depends on Chinese supplies. In 2025 China tightened controls on exports of rare earths and the magnets made from them, which are vital for car motors and machines, and some German factories warned of shortages. Then on 30 September 2025 the Dutch government took control of Nexperia, a Chinese-owned chipmaker based in the Netherlands. China answered from 4 October by blocking exports of Nexperia chips made in its factories. The small chips are used throughout cars, and Volkswagen warned of production cuts while suppliers such as ZF cut shifts, until deliveries resumed under the US–China truce later that autumn." },
        { type: "section", head: "Merz in Beijing", md:
          "Friedrich Merz (see [[lesson:de-4]]) had called for a tougher line on China, but in late February 2026 he made his first visit as chancellor, taking about 30 business leaders from Volkswagen, BMW, Mercedes-Benz, Siemens and others. He met Xi Jinping, called the trade trend 'unhealthy' and said the two must fix it together. The two sides agreed to restart the regular joint cabinet meetings, and Merz said China would order more Airbus planes, bringing its total to 120. The deeper problems, from Chinese overcapacity to Germany's dependence, remain unresolved, and German business groups keep urging the government to protect them from cheap Chinese imports." },
        { type: "compare", head: "What should Germany do?",
          left: { head: "Engage", md:
            "Only talking to Beijing can open its market and protect German firms there." },
          right: { head: "Defend", md:
            "Europe needs tariffs and its own supplies of chips and rare earths to stop Chinese imports hollowing out its industry." } },
        { type: "section", head: "Why it matters", md:
          "German industry, from carmakers to machine builders, employs millions of people. Competition from China is one of the biggest threats to Germany's economic model." }
      ],
      takeaways: [
        "Germany's trade deficit with China reached almost €90 billion in 2025 as German car sales in China fell.",
        "Chinese controls on rare earths and Nexperia chips in 2025 exposed Germany's dependence.",
        "Merz visited Beijing in February 2026 and agreed to restart joint cabinet talks."
      ],
      check: { q: "Why did China again become Germany's biggest trading partner in 2025?",
        choices: ["German exports to China boomed", "Imports from China rose while exports to the US fell", "Germany stopped trading with the US"], answer: 1,
        explain: "German imports from China grew 8.8% while exports to China and the US both fell, leaving a record deficit." },
      sources: [
        { title: "China is Germany's most important trading partner once again in 2025", publisher: "Destatis", url: "https://www.destatis.de/EN/Press/2026/02/PE26_056_51.html", date: "2026-02-20" },
        { title: "Xi, Merz seek to build on economic ties amid fallout from US tariffs", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/25/germany-merz-arrives-in-china-for-two-day-visit-with-focus-on-trade", date: "2026-02-25" },
        { title: "Germany-China Relations After Merz Official Visit to Beijing", publisher: "China Briefing", url: "https://www.china-briefing.com/news/germany-china-relations-under-merz-what-the-first-official-visit-to-beijing-means-for-business/", date: "2026-03" },
        { title: "Car giant VW warns of production hit from Nexperia chips row", publisher: "France 24 (AFP)", url: "https://www.france24.com/en/live-news/20251022-car-giant-vw-warns-of-production-hit-from-nexperia-chips-row", date: "2025-10-22" }
      ]
    }
  ]
});
