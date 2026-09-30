/* ============================================================
   Relationship — Ukraine & Poland 🇺🇦🇵🇱
   Ukraine's most important neighbour in war: a painful shared
   history centred on the Volhynia massacres, the refugees and
   the grain disputes of 2022–24, and the 2026 crisis over how
   the past is honoured. Poland as front-line state is in pl-5.
   Research note and sources: tools/research/ua_pl.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ua_pl", {
  id: "ua_pl",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ua_pl-1", kind: "relation", asOf: "2026-09-30",
      title: "A hard shared past",
      dek: "For centuries Poles ruled much of what is now Ukraine. In 1943–44 Ukrainian nationalists massacred tens of thousands of Poles in Volhynia. That memory still divides two nations that need each other.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua_pl/ua_pl-1-hero.webp",
          alt: "Illustration of a simple wooden cross in a field of tall grass at the edge of a forest, where a village once stood.",
          caption: "Many Polish villages in Volhynia were destroyed in 1943; often only crosses mark where they stood.",
          credit: "AI illustration — not a photograph",
          prompt: "A simple weathered wooden cross in a field of tall summer grass at the edge of a dark forest, no buildings, a few wildflowers, soft overcast light, quiet and mournful, no people, no legible text." },
        { type: "timeline", head: "Shared and divided", items: [
          ["1569–1795", "Much of Ukraine is ruled by the Polish-Lithuanian Commonwealth"],
          ["1648", "Khmelnytsky's Cossack uprising against Polish rule"],
          ["1918–21", "Poland and Ukrainian nationalists fight over Lviv"],
          ["1943–44", "Volhynia massacres of Poles by the UPA"],
          ["1947", "Operation Vistula deports about 140,000 Ukrainians within Poland"],
          ["2 Dec 1991", "Poland is the first country to recognise Ukraine's independence"]
        ] },
        { type: "section", head: "Rulers and rebels", md:
          "From the 16th century the Polish-Lithuanian Commonwealth ruled much of today's Ukraine, where Polish nobles owned great estates worked by Ukrainian peasants. In 1648 the Cossack leader Bohdan Khmelnytsky led a huge uprising against Polish rule, a founding story for Ukrainians and a catastrophe in Polish memory. After the First World War, Poles and Ukrainian nationalists fought over the city of Lviv, and interwar Poland included millions of Ukrainians, many of whom resented Polish rule and discrimination." },
        { type: "section", head: "Volhynia", md:
          "During the Second World War, in 1943–44, the Ukrainian Insurgent Army (UPA), a nationalist force fighting for an independent Ukraine, massacred Polish villagers in the region of Volhynia and in eastern Galicia. Historians estimate that some 60,000 to 100,000 Poles were killed, often with extreme brutality; Polish reprisals killed thousands of Ukrainians. Poland's parliament calls it genocide. In Ukraine the UPA is also remembered as a force that fought both Nazi Germany and the Soviet Union, and many Ukrainians honour its leaders as freedom fighters. In 1947 communist Poland's Operation Vistula forcibly moved about 140,000 Ukrainians from south-eastern Poland to the former German west." },
        { type: "section", head: "Lviv and Lwów", md:
          "No place captures the tangle better than Lviv, called Lwów in Polish. For centuries it was a largely Polish and Jewish city and a centre of Polish culture. In 1945 Stalin gave it to Soviet Ukraine, and most of its Poles were moved west, many to Wrocław. Today Lviv is the heart of Ukrainian national feeling, while Polish visitors still come to find the graves and churches of their grandparents." },
        { type: "section", head: "Partners after 1991", md:
          "Despite this history, independent Poland championed Ukraine. On 2 December 1991 it became the first country to recognise Ukraine's independence. Polish leaders backed Ukraine's Orange Revolution in 2004 and the Maidan protests in 2014, and argued for bringing Ukraine closer to the EU and NATO. Millions of Ukrainians came to work in Poland in the 2010s, especially after Russia's 2014 seizure of Crimea." },
        { type: "compare", head: "Two memories of the UPA",
          left: { head: "Polish", md:
            "The UPA murdered tens of thousands of Polish civilians. Honouring it is like honouring the perpetrators of genocide." },
          right: { head: "Ukrainian", md:
            "The UPA fought for Ukraine's independence against Nazis and Soviets. Crimes happened on both sides and should be mourned together." } },
        { type: "section", head: "Why it matters", md:
          "History is not academic here. Every Polish government has raised Volhynia, and Russia exploits the dispute to divide two allies. How the two countries remember the 1940s shapes whether their wartime partnership can last (see [[lesson:ua_pl-3]])." }
      ],
      takeaways: [
        "Poland ruled much of Ukraine for centuries, and the two fought over Lviv after the First World War.",
        "In 1943–44 the Ukrainian Insurgent Army massacred tens of thousands of Poles in Volhynia.",
        "Poland was the first country to recognise Ukraine's independence in 1991 and became its advocate."
      ],
      check: { q: "What were the Volhynia massacres?",
        choices: ["A Soviet famine", "Killings of Polish civilians by Ukrainian nationalists in 1943–44", "A battle between Poland and Russia"], answer: 1,
        explain: "The Ukrainian Insurgent Army killed an estimated 60,000–100,000 Poles, a memory that still divides the two countries." },
      sources: [
        { title: "Poland and Ukraine's historical dispute: how did we get here and where do we go now?", publisher: "Notes from Poland", url: "https://notesfrompoland.com/2026/06/22/poland-and-ukraines-historical-dispute-how-did-we-get-here-and-where-do-we-go-now/", date: "2026-06-22" },
        { title: "Poland, Ukraine, and the Ongoing Battle Over the Ukrainian Insurgent Army", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2026/06/23/ukraine-russia-poland-zelenksy-history-nazis-world-war-two/", date: "2026-06-23" },
        { title: "Poland and Ukraine agree to exhume WW2 Volhynia massacre victims", publisher: "Euronews", url: "https://www.euronews.com/my-europe/2025/01/11/poland-and-ukraine-agree-to-exhume-ww2-volhynia-massacre-victims", date: "2025-01-11" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ua_pl-2", kind: "relation", asOf: "2026-09-30",
      title: "Refugees, grain and trucks",
      dek: "In 2022 Poles opened their homes to millions of Ukrainians fleeing war. Within a year, Ukrainian grain and trucks had sparked blockades, and Polish sympathy began to fade.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua_pl/ua_pl-2-hero.webp",
          alt: "Illustration of a long line of lorries stopped on a rural road at a border crossing in winter, with farm tractors parked across the road.",
          caption: "Polish truckers and farmers blocked border crossings with Ukraine in 2023–24.",
          credit: "AI illustration — not a photograph",
          prompt: "A long line of cargo lorries stopped on a flat rural road in winter at a border crossing, several farm tractors parked across the road, bare trees and snowy fields, grey sky, frustrated standstill, no people close up, no flags, no legible text." },
        { type: "facts", head: "The strains", rows: [
          ["Refugees", "Millions crossed in 2022; about 1 million remain under protection"],
          ["Apr 2023", "Poland bans imports of Ukrainian grain and food"],
          ["Nov 2023 – Apr 2024", "Truckers and farmers blockade border crossings"],
          ["Feb 2026", "Child benefit for Ukrainians tied to work"],
          ["Jul 2026", "52% of Poles oppose accepting Ukrainian refugees"]
        ] },
        { type: "section", head: "Open doors", md:
          "When Russia invaded in February 2022, millions of Ukrainians, mostly women and children, crossed into Poland. Poles met them at railway stations with food and took them into their homes; there were almost no refugee camps. Poland became the hub through which Western weapons flowed into Ukraine, and one of its biggest suppliers of tanks and aircraft (see [[lesson:pl-5]]). About a million Ukrainians still live in Poland under temporary protection, and many work there; a study for the UN refugee agency by Deloitte estimated they added 0.7–1.1% to Poland's GDP in 2023." },
        { type: "section", head: "Grain and trucks", md:
          "With Black Sea ports blockaded, Ukraine sent grain overland through Europe. Much of it stayed in Poland and neighbouring countries, pushing down prices for local farmers. In April 2023 Poland's PiS government banned imports of Ukrainian grain and food, defying EU trade rules; Ukraine complained to the World Trade Organization, and President Zelensky accused some allies at the UN of 'political theatre'. From November 2023 Polish truckers, angry at competition from Ukrainian hauliers, and then farmers blocked border crossings for months, causing huge queues until April 2024." },
        { type: "section", head: "Fading welcome", md:
          "Polish support for taking in Ukrainian refugees, 94% in 2022, has fallen steadily; by July 2026, 52% opposed it. Social media has spread resentment, much of it exaggerated, about benefits and competition for jobs. President Karol Nawrocki, elected in 2025, vetoed benefits for unemployed Ukrainians, and from February 2026 Ukrainian families have had to show that a parent is working to receive Poland's 800-złoty monthly child benefit." },
        { type: "section", head: "Still indispensable", md:
          "Yet the practical ties remain strong. Rzeszów airport in south-east Poland is the main hub for Western weapons and aid to Ukraine, and most foreign leaders travel to Kyiv by train through Poland. Polish companies expect a large share of Ukraine's reconstruction, and the two governments still coordinate closely on Russia." },
        { type: "compare", head: "Two views",
          left: { head: "Many Poles", md:
            "Poland has given more than almost anyone. Ukrainians should work, pay taxes and respect Polish farmers' livelihoods." },
          right: { head: "Many Ukrainians", md:
            "Ukraine is fighting for Europe's security. Trade blockades and cuts to support in wartime feel like betrayal." } },
        { type: "section", head: "Why it matters", md:
          "Ukraine's hopes of joining the EU depend on neighbours like Poland accepting competition from its huge farm sector. The grain dispute is a preview of the hard bargaining that membership will require, over farm subsidies, trucking rules and the EU budget, in which Poland could be Ukraine's strongest ally or its toughest critic." }
      ],
      takeaways: [
        "In 2022 Poland took in millions of Ukrainian refugees and became the hub for Western aid to Ukraine.",
        "Disputes over grain imports and trucking led to bans and border blockades in 2023–24.",
        "Polish public support for refugees has fallen sharply, and benefits have been tied to work."
      ],
      check: { q: "Why did Poland ban Ukrainian grain imports in 2023?",
        choices: ["Because of disease", "Because cheap Ukrainian grain was pushing down prices for Polish farmers", "Because of EU sanctions on Ukraine"], answer: 1,
        explain: "Grain meant to transit Europe stayed in Poland and neighbouring states, angering local farmers, and the government imposed a ban." },
      sources: [
        { title: "Poland suspends food imports from Ukraine to assist its farmers", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2023/4/15/poland-suspends-food-imports-from-ukraine-to-assist-its-farmers", date: "2023-04-15" },
        { title: "Polish farmers suspend blockade of Ukraine border", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2024/4/29/polish-farmers-suspend-blockade-of-ukraine-border", date: "2024-04-29" },
        { title: "What changes for Ukrainians in Poland starting Feb. 2026", publisher: "The New Voice of Ukraine", url: "https://english.nv.ua/nation/poland-tightens-aid-rules-for-ukrainians-under-temporary-protection-50580497.html", date: "2026-01" },
        { title: "From social media to politics: Poland's Ukraine debate", publisher: "New Eastern Europe", url: "https://neweasterneurope.eu/2026/08/24/from-social-media-to-politics-polands-ukraine-debate/", date: "2026-08-24" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ua_pl-3", kind: "relation", asOf: "2026-09-30",
      title: "The 2026 crisis over the past",
      dek: "When Kyiv named a military unit after the UPA, Poland's president stripped Zelensky of Poland's highest honour. Ukraine sent it back. Then both sides pulled back, and the exhumations went ahead.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ua_pl/ua_pl-3-hero.webp",
          alt: "Illustration of an ornate enamel medal in the shape of a white eagle on a red ribbon, lying in an open presentation box.",
          caption: "Poland's Order of the White Eagle, awarded to Zelensky in 2023 and withdrawn in June 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "An ornate enamel and gold medal shaped like a white eagle with outstretched wings on a deep red ribbon, lying in an open velvet presentation box on a dark wooden table, soft dramatic light, formal and symbolic, no legible text." },
        { type: "timeline", head: "Crisis and repair", items: [
          ["Jan 2025", "Agreement to allow exhumations of Volhynia victims"],
          ["Apr 2025", "First exhumations at Puźniki"],
          ["Jun 2026", "A Ukrainian special forces unit is named after the UPA"],
          ["19 Jun 2026", "Nawrocki strips Zelensky of the Order of the White Eagle"],
          ["17 Jul 2026", "Zelensky opens security-service archives on Volhynia"],
          ["Jul–Aug 2026", "Exhumations at Ostrówki recover 55 victims"]
        ] },
        { type: "section", head: "Exhumations", md:
          "For years Poland asked to exhume and rebury the victims of Volhynia, whose remains lie in unmarked pits in Ukraine. Kyiv had halted Polish searches in 2017 in a separate row over monuments. In January 2025, under Tusk's government, the two agreed to resume, and in April 2025 Polish and Ukrainian specialists began work at Puźniki, a former Polish village in western Ukraine. Families finally reburied relatives killed 80 years earlier. It was hailed as a breakthrough." },
        { type: "section", head: "The White Eagle", md:
          "In June 2026 Ukraine named a special forces unit after the UPA, part of a tradition of honouring the insurgents as independence fighters. In Poland the reaction was furious. On 19 June President Karol Nawrocki, a nationalist historian, announced that he was stripping Zelensky of the Order of the White Eagle, Poland's highest honour, awarded to him in 2023. 'Just as we reject the symbols of German Nazism and Soviet communism,' he said, 'we must reject the cult of the perpetrators of the Volhynia massacre.' Zelensky sent the order back, and three former Ukrainian presidents returned theirs. Ukraine's foreign minister called the move a 'strategic mistake' that would only benefit Moscow; Tusk said the row had 'delighted Putin and shocked our allies'." },
        { type: "section", head: "Pulling back", md:
          "Both governments then moved to limit the damage. On 17 July 2026 Zelensky announced that Ukraine's security and foreign intelligence archives on the massacres would be opened and that many more exhumation permits would be granted. From 13 July to 7 August Polish specialists worked at the sites of Ostrówki and Wola Ostrowiecka, recovering the remains of 55 people for identification." },
        { type: "section", head: "Two leaders, two lines", md:
          "The crisis also exposed a split in Warsaw. Tusk's government, which runs foreign policy, favours quiet diplomacy with Kyiv; Nawrocki, who has his own powers and an eye on the 2027 election (see [[lesson:pl-7]]), has taken a harder line on history and refugees." },
        { type: "compare", head: "Who went too far?",
          left: { head: "Nawrocki's supporters", md:
            "Poland cannot stay silent while an ally honours those who murdered Poles. Symbols matter." },
          right: { head: "His critics", md:
            "Humiliating a wartime ally over a unit's name helps Russia. History should be handled by historians and quiet diplomacy." } },
        { type: "section", head: "Why it matters", md:
          "Poland is Ukraine's lifeline to the West. If disputes over history, refugees and farming harden, they could weaken support for Ukraine in its most important neighbour, and complicate its path to the EU, which Poland has long championed." }
      ],
      takeaways: [
        "Exhumations of Volhynia victims resumed in 2025 after years of dispute.",
        "In June 2026 Nawrocki stripped Zelensky of Poland's highest honour after Kyiv named a unit after the UPA.",
        "Kyiv then opened archives and allowed more exhumations; 55 victims were recovered at Ostrówki."
      ],
      check: { q: "Why did Poland's president strip Zelensky of the Order of the White Eagle?",
        choices: ["Over grain imports", "Because Ukraine named a military unit after the UPA", "Over refugee benefits"], answer: 1,
        explain: "Nawrocki said honouring the UPA, responsible for the Volhynia massacres, was unacceptable; Zelensky returned the order." },
      sources: [
        { title: "Polish president strips Zelenskyy of Poland's highest state honour", publisher: "Euronews", url: "https://www.euronews.com/my-europe/2026/06/20/polish-president-strips-zelenskyy-of-polands-highest-state-honour", date: "2026-06-20" },
        { title: "Polish president decides to strip Zelensky of honour for naming unit after group that massacred Poles", publisher: "Notes from Poland", url: "https://notesfrompoland.com/2026/06/19/polish-president-decides-to-strip-zelensky-of-honour-for-naming-unit-after-group-that-massacred-poles/", date: "2026-06-19" },
        { title: "Analysis: Ukrainian-Polish Breakthrough in Volhynia Dispute With Exhumations", publisher: "Kyiv Post", url: "https://www.kyivpost.com/analysis/51410", date: "2025" },
        { title: "Polish president strips Zelensky of honor after special forces unit's renaming", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2026/06/20/polish-president-strips-zelensky-honor-after-special-forces-units-renaming/", date: "2026-06-20" }
      ]
    }
  ]
});
