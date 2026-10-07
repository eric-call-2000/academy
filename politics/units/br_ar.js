/* ============================================================
   Relationship — Brazil & Argentina 🇧🇷🇦🇷
   South America's two giants: rivals who gave up a nuclear race
   and built Mercosur together, and whose presidents now barely
   speak. Brazil's election is in br-7; Milei's policies in ar-5.
   Research note and sources: tools/research/br_ar.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("br_ar", {
  id: "br_ar",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "br_ar-1", kind: "relation", asOf: "2026-09-30",
      title: "Rivals who gave up the bomb",
      dek: "For more than a century Brazil and Argentina competed to lead South America, and in the 1970s both secretly worked toward nuclear weapons. Then, as their generals left power, they chose to trust each other.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_ar/br_ar-1-hero.webp",
          alt: "Illustration of enormous waterfalls plunging into a misty gorge surrounded by subtropical forest.",
          caption: "The Iguazu Falls on the border, near where the two presidents signed their 1985 declaration on nuclear cooperation.",
          credit: "Illustration — not a photograph",
          prompt: "Enormous curtains of waterfalls plunging into a misty horseshoe gorge surrounded by lush green subtropical forest, a rainbow in the spray, birds in the air, powerful and majestic, no people, no walkways, no flags, no legible text." },
        { type: "timeline", head: "From rivals to partners", items: [
          ["1825–28", "War over the Banda Oriental ends with an independent Uruguay"],
          ["1864–70", "Allies with Uruguay in the war against Paraguay"],
          ["1970s", "Secret nuclear programmes and a dispute over the Itaipu dam"],
          ["1979", "Itaipu–Corpus agreement settles the river dispute"],
          ["1985", "Alfonsín and Sarney sign the Foz do Iguaçu declaration"],
          ["1991", "ABACC: a joint agency to inspect each other's nuclear sites"]
        ] },
        { type: "section", head: "An old rivalry", md:
          "The rivalry began with the empires of Portugal and Spain, which fought over the lands east of the River Plate. After independence, Brazil and Argentina went to war over the same territory from 1825 to 1828; the British-brokered peace created Uruguay as a buffer between them. They fought as allies in the devastating war against Paraguay in 1864–70, but distrust persisted. For much of the 20th century each saw the other as its main military threat, and each built its army, ports and railways partly with the other in mind. Their football rivalry, from Pelé against Maradona to Messi against Neymar, remains one of the fiercest in the world." },
        { type: "section", head: "The nuclear race", md:
          "Between the 1950s and the 1980s both countries built nuclear programmes that outsiders, and each other, suspected were aimed at weapons. Neither joined the Nuclear Non-Proliferation Treaty. Under their military governments, Argentina secretly built a uranium enrichment plant, and Brazil's navy ran a parallel programme. At the same time they quarrelled over the Paraná river, where Brazil and Paraguay's giant Itaipu dam threatened Argentina's own plans downstream. That dispute was settled by a three-way agreement in 1979, the first sign of a thaw." },
        { type: "section", head: "Choosing trust", md:
          "When democracy returned, Presidents Raúl Alfonsín of Argentina and José Sarney of Brazil met at Foz do Iguaçu in November 1985 and pledged nuclear cooperation. They began visiting each other's secret facilities. In July 1991 the two created the Brazilian–Argentine Agency for Accounting and Control of Nuclear Materials, ABACC, whose inspectors from each country check the other's sites, and in 1994 accepted international inspections. Both later joined the Non-Proliferation Treaty. One loose end remains: Brazil is building a nuclear-powered submarine, and the inspectors are still working out how to check its fuel. Analysts often cite this as one of the rare cases of neighbours stepping back from a nuclear race." },
        { type: "compare", head: "Why did they stop?",
          left: { head: "Democracy", md:
            "Civilian leaders replaced generals who had driven the programmes, and saw cooperation as a way to keep the military in check." },
          right: { head: "Economics", md:
            "Both were deep in debt and wanted trade, investment and Western approval. A costly arms race made no sense." } },
        { type: "section", head: "Why it matters", md:
          "The nuclear rapprochement cleared the way for Mercosur (see [[lesson:br_ar-2]]) and turned South America into one of the world's most peaceful regions between states. It is still studied as a model for rivals elsewhere, from the Korean peninsula to the Middle East." }
      ],
      takeaways: [
        "Brazil and Argentina competed for regional leadership for over a century and fought over what became Uruguay.",
        "Under military rule both pursued nuclear programmes suspected of aiming at weapons.",
        "Democratic leaders ended the race: the 1985 Foz do Iguaçu declaration and the 1991 ABACC inspection agency."
      ],
      check: { q: "What does ABACC do?",
        choices: ["Organises football tournaments", "Lets Brazilian and Argentine inspectors check each other's nuclear sites", "Runs the Itaipu dam"], answer: 1,
        explain: "Created in 1991, the agency verifies that both countries use nuclear materials only for peaceful purposes." },
      sources: [
        { title: "Brazilian-Argentine Agency for Accounting and Control of Nuclear Materials (ABACC)", publisher: "Nuclear Threat Initiative", url: "https://www.nti.org/education-center/treaties-and-regimes/brazilian-argentine-agency-accounting-and-control-nuclear-materials-abacc/", date: "n.d." },
        { title: "Nuclear Diplomacy Between Brazil and Argentina: An Imperfect But Important History Lesson", publisher: "War on the Rocks", url: "https://warontherocks.com/2018/05/nuclear-diplomacy-between-brazil-and-argentina-an-imperfect-but-important-history-lesson/", date: "2018-05" },
        { title: "Looking Back: Lessons From the Denuclearization of Brazil and Argentina", publisher: "Arms Control Association", url: "https://www.armscontrol.org/act/2006-04/looking-back-lessons-denuclearization-brazil-and-argentina", date: "2006-04" },
        { title: "Itaipu Hydroelectric Dam", publisher: "Global Infrastructure Hub", url: "https://www.gihub.org/connectivity-across-borders/case-studies/itaipu-hydroelectric-dam/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "br_ar-2", kind: "relation", asOf: "2026-09-30",
      title: "Mercosur and its discontents",
      dek: "In 1991 the two built a common market with Paraguay and Uruguay. It made them each other's key partners, but has never quite worked as planned, and Milei wants out of its rules.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_ar/br_ar-2-hero.webp",
          alt: "Illustration of a long line of trucks on a highway approaching a border checkpoint on a bridge over a wide river.",
          caption: "Car parts, grain and machinery cross the Brazil–Argentina border every day.",
          credit: "Illustration — not a photograph",
          prompt: "A long line of cargo trucks on a highway approaching a border checkpoint on a bridge over a wide brown river, flat green farmland on both sides, a hazy morning sun, busy and industrial, no people close up, no flags, no legible text or logos." },
        { type: "facts", head: "Mercosur", rows: [
          ["Founded", "26 March 1991, Treaty of Asunción"],
          ["Founders", "Argentina, Brazil, Paraguay, Uruguay (Bolivia joined later)"],
          ["Common external tariff", "Since 1995, with many exceptions"],
          ["EU deal", "Signed 17 January 2026; provisionally in force from 1 May 2026"],
          ["Tension", "Argentina's separate tariff deal with the US, February 2026"]
        ] },
        { type: "section", head: "A common market", md:
          "Mercosur, the Southern Common Market, was founded by the Treaty of Asunción on 26 March 1991, largely to lock in the new friendship between Brazil and Argentina. Trade among members boomed in the 1990s, especially in cars: carmakers built integrated supply chains across the border, with engines made in one country and assembled in the other. Brazil became Argentina's largest export market, and Argentina one of Brazil's biggest. But the bloc struggled. When Brazil devalued its currency in 1999, Argentine industry was hammered, feeding its 2001 collapse. Both countries have repeatedly broken the rules with import licences and exceptions to the common tariff. Venezuela joined in 2012 but was suspended in 2016. And China, hungry for soybeans, iron ore and beef, has become Brazil's largest trading partner and one of Argentina's two biggest, loosening the pull of the regional market." },
        { type: "section", head: "The EU deal", md:
          "For 25 years Mercosur negotiated a free trade agreement with the European Union. It was finally signed in Asunción on 17 January 2026, and began to apply provisionally on 1 May 2026, removing tariffs on over 90% of trade between the two blocs, with a combined market of more than 700 million people. Milei called it 'the most important achievement in Mercosur's history'. Lula, who had pushed hard for the deal, stayed away from the signing ceremony amid tensions with Milei and signed separately." },
        { type: "section", head: "Milei's challenge", md:
          "Milei, a free-market economist, sees Mercosur's common tariff as a cage. He wants each member free to sign its own trade deals, above all with the United States, and in February 2026 Argentina signed a tariff agreement with Washington. Brazil worries that American goods could enter the bloc through Argentina and undercut Brazilian industry. At the June 2026 summit the dispute was aired openly. Brazil, the bloc's biggest economy, prefers a common front, and Lula has sought stronger ties with China and the BRICS group." },
        { type: "compare", head: "What should Mercosur be?",
          left: { head: "Brazil's view", md:
            "A customs union that negotiates as one, giving small members more clout and protecting regional industry." },
          right: { head: "Milei's view", md:
            "A free trade zone at most. Each country should be free to cut its own tariffs and sign deals with whoever it wants." } },
        { type: "section", head: "Why it matters", md:
          "Mercosur, with more than 270 million people, is one of Latin America's main achievements in integration. Whether it survives as a customs union depends above all on whether Brasília and Buenos Aires can agree on what it is for, and on who wins Brazil's election." }
      ],
      takeaways: [
        "Mercosur, founded in 1991, tied Brazil and Argentina's economies together, especially their car industries.",
        "The long-awaited EU–Mercosur deal was signed in January 2026 and began to apply in May.",
        "Milei wants to loosen Mercosur's rules to sign his own deals, which Brazil opposes."
      ],
      check: { q: "Why is Brazil uneasy about Argentina's 2026 tariff deal with the US?",
        choices: ["It ends Mercosur", "It could let US goods undercut Brazilian industry through Argentina", "It raises tariffs on Brazil"], answer: 1,
        explain: "Brazil fears the separate deal breaks the common tariff and lets American goods into the bloc through Argentina." },
      sources: [
        { title: "Mercosur: South America's Fractious Trade Bloc", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/backgrounders/mercosur-south-americas-fractious-trade-bloc", date: "2024" },
        { title: "Treaty of Asunción", publisher: "Britannica", url: "https://www.britannica.com/topic/Treaty-of-Asuncion", date: "n.d." },
        { title: "With Milei present and Lula absent, Mercosur and EU sign landmark deal in Asunción", publisher: "MercoPress", url: "https://en.mercopress.com/2026/01/18/with-milei-present-and-lula-absent-mercosur-and-eu-sign-landmark-deal-in-asuncion", date: "2026-01-18" },
        { title: "Milei brings open disputes with Brazil to a Mercosur summit focused on trade deals", publisher: "MercoPress", url: "https://en.mercopress.com/2026/06/29/milei-brings-open-disputes-with-brazil-to-a-mercosur-summit-focused-on-trade-deals", date: "2026-06-29" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "br_ar-3", kind: "relation", asOf: "2026-09-30",
      title: "Milei against Lula",
      dek: "Argentina's libertarian president calls Brazil's leftist president a thief and campaigns for his rival. In August 2026 Brazil pulled its ambassador from Buenos Aires.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_ar/br_ar-3-hero.webp",
          alt: "Illustration of an empty grand embassy building behind a closed iron gate on a leafy city street at dusk.",
          caption: "Since August 2026 neither country has an ambassador in the other's capital.",
          credit: "Illustration — not a photograph",
          prompt: "An elegant empty embassy building of pale stone behind a closed black iron gate on a leafy city street at dusk, street lamps just lit, one window glowing, quiet and chilly atmosphere, no people, no flags, no legible text." },
        { type: "timeline", head: "A personal feud", items: [
          ["2023", "Candidate Milei calls Lula a 'corrupt communist'"],
          ["Dec 2023", "Lula skips Milei's inauguration"],
          ["2024", "Dozens of Bolsonaro supporters convicted over 8 January 2023 are found in Argentina"],
          ["Jan 2026", "Lula stays away from the EU–Mercosur signing"],
          ["Jul 2026", "Milei appears at Flávio Bolsonaro's campaign launch"],
          ["4 Aug 2026", "Brazil downgrades relations to chargé d'affaires level"],
          ["4 Oct 2026", "Brazil's presidential election"]
        ] },
        { type: "section", head: "Ideological enemies", md:
          "Milei and Luiz Inácio Lula da Silva could hardly be more different: a libertarian who wields a chainsaw at rallies and a veteran of the left who built his career in trade unions. During his 2023 campaign Milei called Lula a 'corrupt communist'. Lula backed Milei's Peronist opponent, and after Milei won he skipped his inauguration. Milei, in turn, is a close ally of Jair Bolsonaro, the former Brazilian president convicted in 2025 of plotting a coup (see [[lesson:br-5]]). For most of Milei's term the two leaders met only on the margins of summits. Their foreign policies clash too: Lula is close to China and the BRICS, while Milei calls Argentina an unconditional ally of the United States and Israel." },
        { type: "section", head: "Fugitives", md:
          "After the riot in Brasília on 8 January 2023, when Bolsonaro supporters stormed Congress, the Supreme Court and the presidential palace, dozens of those later convicted fled to Argentina, some seeking asylum. Brazil asked for their extradition; an Argentine judge ordered the arrest of 61 of them in 2024. Milei has expressed sympathy for them, though judicial cooperation between the two countries has continued." },
        { type: "section", head: "The downgrade", md:
          "In July 2026 Milei appeared at the launch of Flávio Bolsonaro's campaign to unseat Lula, endorsing him and calling Lula a 'convict' and a 'totalitarian'. After Milei again called Lula a 'thief' and 'corrupt' in a television interview, Brazil told Argentina on 4 August that relations would be conducted at the level of chargé d'affaires; its ambassador would not return to Buenos Aires. It was the lowest point in decades. Argentina's foreign minister, Pablo Quirno, said Buenos Aires would not retaliate. Brazil's election on 4 October will decide whether the feud continues (see [[lesson:br-7]])." },
        { type: "compare", head: "Who is to blame?",
          left: { head: "Lula's supporters", md:
            "Milei is interfering in Brazil's election and insulting its president. No country would accept that from a neighbour." },
          right: { head: "Milei's supporters", md:
            "Milei speaks his mind about corruption and backs his allies openly. Brazil's reaction is thin-skinned and itself political." } },
        { type: "section", head: "Why it matters", md:
          "Brazil and Argentina need each other: they share borders, rivers, energy links and Mercosur, and trade tens of billions of dollars a year. Their quarrel weakens South America's voice at a time when the United States and China are both courting the region, and shows how personal politics can override decades of patient partnership between two neighbours." }
      ],
      takeaways: [
        "Milei and Lula are ideological enemies; Milei backs the Bolsonaro family and has repeatedly insulted Lula.",
        "Dozens of Bolsonaro supporters convicted over the 8 January 2023 riot fled to Argentina.",
        "On 4 August 2026 Brazil downgraded relations, leaving neither country with an ambassador in the other."
      ],
      check: { q: "What did Brazil do on 4 August 2026?",
        choices: ["Left Mercosur", "Downgraded relations with Argentina to chargé d'affaires level", "Closed the border"], answer: 1,
        explain: "After Milei called Lula a thief, Brazil said its ambassador would not return and relations would run through a chargé d'affaires." },
      sources: [
        { title: "Brazil - Argentina diplomatic relations downgrade to 'Chargé d'Affaires'", publisher: "Euronews", url: "https://www.euronews.com/2026/08/05/brazil-argentina-diplomatic-relations-downgrade-to-charge-daffaires", date: "2026-08-05" },
        { title: "Argentina won't retaliate after Brazil downgrades diplomatic ties", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/6/argentina-wont-retaliate-after-brazil-downgrades-diplomatic-ties", date: "2026-08-06" },
        { title: "Judge orders arrest of 61 fugitive Bolsonaristas in Argentina", publisher: "Buenos Aires Herald", url: "https://buenosairesherald.com/world/international-relations/judge-orders-61-fugitive-bolsonaristas-in-argentina-be-arrested/amp", date: "2024" },
        { title: "Milei tests his right-wing magic on Flavio Bolsonaro's shaky campaign in Brazil", publisher: "Buenos Aires Times", url: "https://www.batimes.com.ar/news/latin-america/milei-tests-his-right-wing-magic-on-flavio-bolsonaros-shaky-campaign-in-brazil.phtml", date: "2026" }
      ]
    }
  ]
});
