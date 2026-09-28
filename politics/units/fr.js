/* ============================================================
   Unit 8 — France 🇫🇷
   Research note and sources: tools/research/fr.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("fr", {
  id: "fr",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "fr-1", kind: "snapshot", asOf: "2026-09-28",
      title: "France in brief",
      dek: "A nuclear power with a strong presidency, a parliament with no majority, and a presidential race in 2027 that the far right leads.",
      blocks: [
        { type: "map", src: "maps/fr.svg",
          alt: "Locator map of western Europe with mainland France and Corsica highlighted, bordering Belgium, Luxembourg, Germany, Switzerland, Italy, Spain and Andorra, with a small globe showing its place in the world.",
          caption: "Mainland France and Corsica. France also includes overseas regions in the Caribbean, South America, the Indian Ocean and the Pacific, not shown here.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Paris"],
          ["People", "About 68 million, including overseas France"],
          ["System", "Semi-presidential republic (the Fifth Republic, since 1958)"],
          ["President", "Emmanuel Macron, since 2017; cannot run again in 2027"],
          ["Prime minister", "Sébastien Lecornu, since September 2025"],
          ["Parliament", "A hung National Assembly since 2024"],
          ["Next presidential election", "April–May 2027"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "France is the EU's only nuclear-armed member, a permanent member of the UN Security Council and, with [[unit:de|Germany]], one of the two countries that drive the European Union. It has Europe's second-largest economy, a world-class defence industry, and territories in every ocean. Its diplomats and soldiers still matter in Africa and the Middle East, even after a painful withdrawal from the Sahel.\n\n" +
          "It is also where some of Europe's big political fights are playing out most sharply: over debt, pensions, immigration and whether the far right can win the presidency." },
        { type: "section", head: "Who holds power", md:
          "Emmanuel Macron, a centrist who founded his own movement to win the presidency in 2017, has dominated French politics for nearly a decade. But since he called a snap parliamentary election in 2024 and lost his majority, the National Assembly has been split into three rival blocs, none close to a majority. Governments survive only as long as the opposition chooses not to bring them down.\n\n" +
          "The prime minister, Sébastien Lecornu, a former defence minister and close Macron ally, is the fifth since the start of 2024." },
        { type: "section", head: "The mood in 2026", md:
          "France's public finances are under strain: the budget deficit is above 5% of GDP and debt near 120%. Ratings agencies have cut its credit score, and every budget is a fight that could topple the government. Many French voters feel that their politicians cannot get anything done and that living standards are slipping. The National Rally, the main party of the far right, has led presidential polls for months." },
        { type: "section", head: "Paris and the rest", md:
          "France is one of the most centralised countries in Europe. Paris is the seat of government, the financial capital, the cultural capital and home to nearly a fifth of the population in its wider region. Many people in small towns and the countryside feel ignored by a Paris elite, a resentment that fuelled the yellow vest protests of 2018 and now feeds support for the National Rally." },
        { type: "section", head: "What France wants", md:
          "Macron's France wants a stronger, more independent Europe: more joint defence spending, a European industrial policy, and less dependence on [[unit:us|the United States]] and [[unit:cn|China]]. It co-leads, with [[unit:gb|the UK]], planning for a force to help guarantee [[unit:ua|Ukraine's]] security after a ceasefire. At home, the government's aim is simpler: to pass budgets that bring the deficit down without being voted out." },
        { type: "callout", tone: "why", md:
          "If the far right wins the French presidency in 2027, it would control a nuclear arsenal, a UN veto and a leading seat at the EU table, changing Europe's direction more than any other single election could." }
      ],
      takeaways: [
        "France is the EU's only nuclear power and, with Germany, the core of the European Union.",
        "Since 2024 the National Assembly has had no majority, and governments survive at the opposition's mercy.",
        "Macron cannot run again; the 2027 presidential election is led in the polls by the far right."
      ],
      check: { q: "Why can't Emmanuel Macron run for president in 2027?",
        choices: ["He is too old", "The constitution limits presidents to two consecutive terms", "He lost a court case"], answer: 1,
        explain: "A 2008 reform limits French presidents to two consecutive five-year terms. Macron was elected in 2017 and re-elected in 2022." },
      sources: [
        { title: "Lecornu governments", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lecornu_governments", date: "2026-09" },
        { title: "France's fresh budget battle threatens to topple another government", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/24/france-budget-debt-deficit-government.html", date: "2026-09-24" },
        { title: "France Seeks to Pare Deficit After Missing Its 2026 Target", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-17/french-premier-eyes-54-billion-effort-to-stop-deficit-blowout", date: "2026-09-17" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "fr-2", kind: "power", asOf: "2026-09-28",
      title: "A president-king and a hung parliament",
      dek: "The Fifth Republic was designed for strong leaders and stable majorities. Since 2024 it has had only one of the two.",
      blocks: [
        { type: "diagram", src: "img/fr/fr-2-power.svg",
          alt: "Diagram of power in France. Voters elect the president and 577 deputies in two rounds. The president, Emmanuel Macron, serves five years with a limit of two terms, runs foreign policy and defence, appoints the prime minister and can dissolve the Assembly. The prime minister, Sébastien Lecornu, runs the government day to day and can pass a text using Article 49.3. The government answers to the 577-seat National Assembly, hung since 2024 in three blocs, which can topple it. The Senate revises laws and the Constitutional Council reviews them. The next presidential election is in April–May 2027.",
          caption: "Two heads of the executive: a president elected by the people, and a prime minister who needs the Assembly's tolerance.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "De Gaulle's design", md:
          "The Fifth Republic's constitution was written in 1958 for Charles de Gaulle, after a weak parliamentary system had collapsed during the war in Algeria. It gives the president great power. Elected directly for five years, the president commands the armed forces and the nuclear deterrent, leads foreign policy, appoints the prime minister, can call referendums and can dissolve the National Assembly, though not more than once a year." },
        { type: "section", head: "The prime minister", md:
          "The prime minister runs the government and domestic policy, but must survive in the National Assembly, which can bring down a government with a vote of no confidence backed by an absolute majority of deputies. When the president's camp controls the Assembly, the prime minister is effectively the president's deputy. When an opposition controls it, the president must appoint someone they will accept, a situation the French call [[cohabitation]]." },
        { type: "section", head: "Article 49.3", md:
          "France's constitution has a tool no other big democracy has. Under [[article-49-3|Article 49.3]], the government can declare a bill adopted without a vote, unless deputies pass a no-confidence motion within 48 hours. Governments without a majority have used it to push through budgets and the 2023 pension reform, and every use sparks accusations of bypassing parliament. In 2025 Lecornu promised not to use it; in January 2026, facing deadlock on the state budget, he did." },
        { type: "section", head: "Two rounds", md:
          "Presidents and deputies are elected in a [[two-round system]]. If no one wins a majority in the first round, the top candidates meet in a run-off two weeks later. The system rewards candidates who can gather broad support in the second round. For decades that has worked against the far right: voters who disagree on almost everything else have united against it, as the 'republican front'. Whether that still holds is one of the big questions for 2027." },
        { type: "section", head: "The other checks", md:
          "The Senate, chosen indirectly by local councillors, revises laws and is dominated by the traditional right. The Constitutional Council can strike down laws before they take effect. France is also highly centralised: Paris decides far more than regional or city governments do, compared with [[unit:de|Germany]] or [[unit:it|Italy]]." },
        { type: "section", head: "Why the hung parliament matters", md:
          "France has little tradition of coalition government. Parties campaign against each other in two rounds and are not used to sharing power afterwards. So instead of a written coalition deal, as in Germany, each government since 2024 has been a minority, surviving vote by vote, with the opposition able to bring it down whenever enough of them agree." },
        { type: "compare", head: "Two views of the Fifth Republic",
          left: { head: "Its defenders", md:
            "A strong president gave France stability for six decades after a chaotic Fourth Republic, and lets it act quickly in a crisis or abroad." },
          right: { head: "Its critics", md:
            "Too much power sits with one person, parliament is sidelined by tools like 49.3, and when the president loses the Assembly, the system jams. Parts of the left want a 'Sixth Republic'." } }
      ],
      takeaways: [
        "The president, elected for five years, runs defence and foreign policy, appoints the PM and can dissolve the Assembly.",
        "The National Assembly can topple the government; Article 49.3 lets a government pass a bill without a vote unless it is toppled.",
        "Two-round elections have long helped mainstream parties unite against the far right."
      ],
      check: { q: "What does Article 49.3 of the French constitution allow?",
        choices: ["The president to rule by decree in wartime", "The government to adopt a bill without a vote unless it loses a no-confidence motion", "The Senate to veto budgets"], answer: 1,
        explain: "Under 49.3 a bill passes without a vote unless deputies bring down the government with a no-confidence motion." },
      sources: [
        { title: "Constitution of 4 October 1958", publisher: "Conseil constitutionnel", url: "https://www.conseil-constitutionnel.fr/en/constitution-of-4-october-1958", date: "n.d." },
        { title: "Lecornu rams France's 2026 budget through without parliamentary vote", publisher: "Yahoo News / AFP", url: "https://www.yahoo.com/news/articles/lecornu-rams-frances-2026-budget-191337849.html", date: "2026-01" },
        { title: "France adopts 2026 budget after two no-confidence votes fail", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/2/france-adopts-2026-budget-after-two-no-confidence-votes-fail", date: "2026-02-02" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "fr-3", kind: "history", asOf: "2026-09-28",
      title: "From de Gaulle to Macron",
      dek: "How the old parties of left and right collapsed, a young outsider took power, and the far right went from pariah to front-runner.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-3-hero.webp",
          alt: "Illustration of a wide Paris boulevard lined with pale stone buildings, with a crowd of protesters in yellow high-visibility vests walking under a grey sky.",
          caption: "The 'yellow vest' protests of 2018–19 began over fuel taxes and grew into a revolt against the cost of living.",
          credit: "AI illustration — not a photograph",
          prompt: "A wide Parisian boulevard lined with pale stone Haussmann buildings, a crowd of protesters seen from behind wearing yellow high-visibility vests, grey winter sky, bare plane trees, a distant monument arch, restless atmosphere, no faces in close-up, no legible signs." },
        { type: "timeline", head: "The short version", items: [
          ["1958", "De Gaulle founds the Fifth Republic"],
          ["1981–2012", "Power alternates between Socialists and Gaullists"],
          ["2017", "Macron wins, sweeping aside the old parties"],
          ["2018–19", "The yellow vest protests"],
          ["2022", "Macron re-elected; loses his majority in parliament"],
          ["2024", "Snap election; a hung Assembly"]
        ] },
        { type: "section", head: "1. The old order", md:
          "For most of the Fifth Republic, power alternated between the Gaullist right and the Socialist left. De Gaulle took France out of NATO's command structure and built an independent nuclear deterrent; François Mitterrand, the Socialist president from 1981 to 1995, tied France closely to Germany and the European project. Both camps shared a belief in a strong state, generous welfare and French independence in the world." },
        { type: "section", head: "2. The far right rises", md:
          "Jean-Marie Le Pen's National Front, founded in 1972, was long treated as a pariah. When he reached the presidential run-off in 2002, voters of all stripes united to give Jacques Chirac 82%. His daughter Marine Le Pen took over in 2011, expelled her father, renamed the party the National Rally and softened its image while keeping a hard line on immigration. She reached the run-off in 2017 and 2022, winning 41.5% the second time." },
        { type: "section", head: "3. Macron's revolution (2017)", md:
          "In 2017 Emmanuel Macron, a 39-year-old former banker and economy minister, won the presidency with a new movement that was 'neither left nor right'. The old parties collapsed: the Socialist candidate won barely 6%. Macron cut taxes on business and capital, loosened labour laws and pushed for a stronger EU. Critics called him 'the president of the rich'. In 2018 a rise in fuel taxes set off the yellow vest protests, weeks of sometimes violent demonstrations by people from small towns and the countryside." },
        { type: "section", head: "4. Losing control (2022–2024)", md:
          "Macron beat Le Pen again in 2022 but lost his majority in parliament weeks later. In 2023 his government raised the pension age from 62 to 64 using 49.3, provoking months of strikes and protests. Then, on 9 June 2024, after the National Rally won the European elections with 31%, Macron suddenly dissolved the Assembly. In the snap election the left united as the New Popular Front and came first in seats, Macron's camp second, and the National Rally and its allies third, after other parties stood down candidates to block it." },
        { type: "section", head: "What changed underneath", md:
          "Behind the headlines, French society was shifting. Deindustrialisation hollowed out towns in the north and east, which moved from the Communists and Socialists to the far right. Terror attacks in 2015 and 2016, including the Bataclan massacre in Paris, hardened debates about Islam, immigration and security. And a growing gap opened between thriving big cities and struggling small towns." },
        { type: "section", head: "5. The carousel (2024–2025)", md:
          "Macron named the conservative Michel Barnier prime minister. In December 2024 Barnier's government became the first since 1962 to be brought down by a no-confidence vote, over its budget. François Bayrou lasted until September 2025, when he lost a confidence vote he had called himself. Sébastien Lecornu followed, resigned within a month, and was reappointed four days later." }
      ],
      takeaways: [
        "For decades power alternated between the Gaullist right and the Socialists; Macron's 2017 win broke that system.",
        "Marine Le Pen turned the far right into a mainstream contender, winning 41.5% in the 2022 run-off.",
        "Macron's 2024 snap election produced a hung parliament, and a string of fragile governments followed."
      ],
      check: { q: "Why did Macron dissolve the National Assembly in June 2024?",
        choices: ["His term had ended", "After the National Rally won the European elections", "The Senate forced him"], answer: 1,
        explain: "After the National Rally won 31% in the European elections, Macron called a snap election to 'clarify' politics. He lost his relative majority." },
      sources: [
        { title: "France profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-europe-17299010", date: "n.d." },
        { title: "Sébastien Lecornu", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/S%C3%A9bastien_Lecornu", date: "2026" },
        { title: "France's Macron reappoints Sebastien Lecornu as prime minister", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/10/10/frances-macron-re-appoints-sebastien-lecornu-as-prime-minister", date: "2025-10-10" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "fr-4", kind: "players", asOf: "2026-09-28",
      title: "Macron's last act and the contenders",
      dek: "A lame-duck president, a prime minister surviving budget to budget, and the candidates lining up to succeed them.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-4-hero.webp",
          alt: "Illustration of the courtyard of a grand eighteenth-century palace in Paris at night, with a gravel yard, guards at the gate and lit windows.",
          caption: "The Élysée Palace, home of the French presidency, whose occupant changes in May 2027.",
          credit: "AI illustration — not a photograph",
          prompt: "The gravel courtyard of a grand eighteenth-century Parisian palace at night, tall lit windows, two ceremonial guards standing at a wrought-iron gate, black cars parked, elegant and quiet, no flags or legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Emmanuel Macron", role: "President, since 2017",
            img: "img/fr/portrait-macron.webp", source: "Official portrait via Wikimedia Commons; confirm the licence on the file page.",
            md: "Cannot run in 2027. Still leads on foreign policy and defence, where the president's powers are greatest, while domestic politics revolves around the Assembly and the race to succeed him." },
          { name: "Sébastien Lecornu", role: "Prime minister, since September 2025",
            img: "img/fr/portrait-lecornu.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A 40-year-old former defence minister who survived by making deals, above all suspending the 2023 pension reform to win the Socialists' tolerance. Now faces a 2027 budget that needs €54 billion of savings." },
          { name: "Jordan Bardella", role: "President of the National Rally",
            img: "img/fr/portrait-bardella.webp", source: "European Parliament official photo (CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "Marine Le Pen's 31-year-old protégé, hugely popular on social media, and the far right's candidate if Le Pen cannot run. Polls in 2026 put him around 35% in the first round, far ahead of anyone else." },
          { name: "Marine Le Pen", role: "National Rally leader in the Assembly",
            img: "img/fr/portrait-le-pen.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Three-time presidential candidate. Convicted in 2025 of misusing EU parliamentary funds and barred from office; an appeals ruling in July 2026 opened the door to her running again." },
          { name: "Édouard Philippe", role: "Former prime minister; leader of Horizons",
            img: "img/fr/portrait-philippe.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Macron's first prime minister (2017–2020) and the centre-right's best-placed candidate, polling around 20% in the first round." },
          { name: "Jean-Luc Mélenchon", role: "Leader of La France Insoumise",
            img: "img/fr/portrait-melenchon.webp", source: "CC-licensed photo via Wikimedia Commons; confirm the licence.",
            md: "The radical left's three-time presidential candidate, who narrowly missed the run-off in 2022. Divisive even on the left, where others hope for a single, more moderate candidate." }
        ] },
        { type: "section", head: "The three blocs", md:
          "The National Assembly elected in 2024 is split three ways. On the left, the New Popular Front alliance of La France Insoumise, the Socialists, Greens and Communists has since fractured. In the centre, Macron's allies govern, with the traditional right, Les Républicains, sometimes backing them and sometimes keeping its distance. And on the right, the National Rally and its allies form the largest single party. Lecornu survives because the Socialists, in return for concessions like the pension freeze, have chosen not to vote to bring him down." },
        { type: "section", head: "The traditional parties", md:
          "The two parties that governed France for decades are now smaller forces. Les Républicains, heirs to de Gaulle, are led by Bruno Retailleau, a hardline former interior minister who left the government in October 2025. The Socialists, led by Olivier Faure, hold the balance of power in the Assembly. Both hope to rebuild after being flattened by Macron in 2017." },
        { type: "section", head: "Ministers to know", md:
          "Beyond the leaders, watch the economy and finance ministry, which must defend the budget and its savings in the Assembly, and the interior ministry, which handles immigration and security, the issues on which the National Rally campaigns hardest." },
        { type: "section", head: "The National Rally today", md:
          "The National Rally wants to cut immigration sharply, give French citizens priority for jobs, housing and benefits, cut energy taxes and restore the retirement age to 62. It no longer calls for leaving the EU or the euro. Its critics say its programme is xenophobic and its sums don't add up. Its supporters see it as the only party that has never been tried in power." }
      ],
      takeaways: [
        "Macron is a lame duck at home but still leads on defence and foreign policy.",
        "Lecornu survives because the Socialists tolerate him in exchange for concessions such as the pension freeze.",
        "Jordan Bardella leads 2027 polls at around 35%; Marine Le Pen may be able to run after a July 2026 appeal ruling."
      ],
      check: { q: "What did Lecornu concede to keep the Socialists from bringing down his government?",
        choices: ["A wealth tax", "Suspending the 2023 pension reform", "Leaving NATO's command"], answer: 1,
        explain: "Lecornu suspended the rise in the retirement age from 62 to 64 until after the 2027 election, a key Socialist demand." },
      sources: [
        { title: "France appeals court opens door for Le Pen presidential run, with ankle tag", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/7/france-appeals-court-opens-door-for-le-pen-presidential-run-with-ankle-tag", date: "2026-07-07" },
        { title: "French far-right leader Marine Le Pen barred from seeking public office for five years after embezzlement verdict", publisher: "PBS NewsHour", url: "https://www.pbs.org/newshour/politics/french-far-right-leader-marine-le-pen-barred-from-seeking-public-office-for-five-years-after-embezzlement-verdict", date: "2025-03-31" },
        { title: "French prime minister backs suspending unpopular pension reform law", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/10/14/french-prime-minister-backs-suspending-unpopular-pension-reform-law", date: "2025-10-14" },
        { title: "First Lecornu government", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/First_Lecornu_government", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "fr-5", kind: "story", asOf: "2026-09-28",
      title: "The pension truce",
      dek: "How a prime minister saved his government by pausing the most contested reform of Macron's presidency.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-5-hero.webp",
          alt: "Illustration of an older man and woman sitting on a park bench in a French town square, watching children play near a fountain.",
          caption: "The age at which French people can retire has been one of the country's most bitter political fights.",
          credit: "AI illustration — not a photograph",
          prompt: "An older couple seen from behind sitting on a green park bench in a French provincial town square, plane trees, a stone fountain, children playing in the distance, warm late-afternoon light, a café terrace at the edge, gentle and reflective, no legible text." },
        { type: "section", head: "What happened", md:
          "In 2023 Macron's government raised the minimum retirement age from 62 to 64, forcing the reform through with [[article-49-3|Article 49.3]] despite months of strikes and protests. It became the symbol of his second term.\n\n" +
          "In October 2025, newly reappointed and facing immediate defeat, Lecornu offered the Socialists a deal: suspend the reform until after the 2027 presidential election. The Assembly voted overwhelmingly for the suspension in November, and in December 2025 parliament adopted the social security budget containing it, the first such budget passed without 49.3 since 2022." },
        { type: "timeline", head: "How it unfolded", items: [
          ["Mar 2023", "Pension age rise to 64 forced through with 49.3"],
          ["Sep 2025", "Bayrou government falls; Lecornu appointed"],
          ["Oct 2025", "Lecornu resigns, is reappointed and proposes a pension pause"],
          ["Dec 2025", "Social security budget with the suspension adopted"],
          ["Feb 2026", "State budget adopted after two no-confidence votes fail"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Without a majority, Lecornu's government needed at least one opposition group to abstain on no-confidence votes. The Socialists, with about 65 deputies, were the only ones open to a deal, and the pension reform was their top demand. For Macron, pausing his signature reform was painful; for Lecornu, the alternative was another fallen government, a possible new dissolution, and fresh market jitters over French debt." },
        { type: "section", head: "The costs", md:
          "Pausing the reform is not free. The government estimated the suspension would cost several hundred million euros in 2026 and more in later years, because people keep retiring earlier than planned. France already spends about 14% of GDP on pensions, one of the highest shares in the world, and its population, like the rest of Europe's, is ageing." },
        { type: "compare", head: "Two views of the deal",
          left: { head: "Its defenders", md:
            "Compromise is how democracies without majorities work. The pause bought France a budget and political stability, and leaves the pension question to the next president and voters." },
          right: { head: "Its critics", md:
            "Freezing the reform costs money France doesn't have and signals to markets that no hard reform can stick. The right says the government has surrendered to the left." } },
        { type: "section", head: "Why it matters", md:
          "The deal shows how French politics now works: a government without a majority survives budget by budget, buying abstentions with concessions. It kept Lecornu in office through 2026, but it also cost money and left a big question for the next president. Most candidates have strong views: the National Rally and much of the left want the retirement age back at 62, the centre-right wants to keep 64 or go higher." },
        { type: "section", head: "What's next", md:
          "The pension age now depends on who wins the presidency in 2027. The next budget battle, over 2027, is already under way, and the Socialists have signalled their price for tolerating it again. If they refuse, the government could fall, and Macron could dissolve the Assembly for a second time." }
      ],
      takeaways: [
        "Macron's 2023 reform raised the retirement age from 62 to 64 without a vote, using Article 49.3.",
        "To survive, Lecornu suspended it until after the 2027 election, winning the Socialists' tolerance.",
        "The social security budget with the pause passed in December 2025 without 49.3, the first such since 2022."
      ],
      check: { q: "To what age did the 2023 reform raise France's minimum retirement age?",
        choices: ["62", "64", "67"], answer: 1,
        explain: "The reform raised it from 62 to 64. Its application is now suspended until after the 2027 presidential election." },
      sources: [
        { title: "French lawmakers adopt 2026 social security budget, suspend Macron's flagship pension reform", publisher: "France 24", url: "https://www.france24.com/en/live-news/20251216-french-lawmakers-adopt-social-security-budget-suspend-macron-s-flagship-pension-reform", date: "2025-12-16" },
        { title: "French National Assembly overwhelmingly votes to suspend controversial pension reform", publisher: "France 24", url: "https://www.france24.com/en/live-news/20251112-french-national-assembly-overwhelmingly-votes-to-suspend-controversial-pension-reform", date: "2025-11-12" },
        { title: "French prime minister backs suspending unpopular pension reform law", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/10/14/french-prime-minister-backs-suspending-unpopular-pension-reform-law", date: "2025-10-14" },
        { title: "France adopts 2026 budget after two no-confidence votes fail", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/2/france-adopts-2026-budget-after-two-no-confidence-votes-fail", date: "2026-02-02" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "fr-6", kind: "story", asOf: "2026-09-28",
      title: "The debt problem",
      dek: "France spends more on its state than almost any rich country, runs one of the EU's largest deficits and has lost its top credit ratings.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-6-hero.webp",
          alt: "Illustration of a grand ministry building beside the Seine at dusk, with a long row of lit office windows.",
          caption: "France's finance ministry, at Bercy in Paris, is preparing €54 billion of savings for 2027.",
          credit: "AI illustration — not a photograph",
          prompt: "A long modern ministry building stretching over a riverbank at dusk, rows of lit office windows reflected in the river, a barge passing, the sky fading from orange to blue, a sense of long working hours, no legible text or flags." },
        { type: "section", head: "What happened", md:
          "France's budget deficit, the gap between what the state spends and what it collects, was 5.4% of GDP in 2026, missing the government's target. Public debt reached about 119% of GDP and is forecast to pass 121% in 2027. In September 2026 Lecornu set out a plan for 2027 with €54 billion of savings and tax measures to bring the deficit down to 5%.\n\n" +
          "Credit ratings agencies have lost patience. Fitch cut France to A+ in September 2025, S&P followed in October 2025, and Moody's had already cut it to Aa3. France now pays more to borrow than Spain or Portugal, which not long ago were seen as riskier." },
        { type: "facts", head: "By the numbers", rows: [
          ["Deficit 2026", "5.4% of GDP (target missed)"],
          ["Deficit target 2027", "5.0% of GDP"],
          ["Savings planned for 2027", "About €54 billion"],
          ["Debt", "About 119% of GDP in 2026; forecast 121.7% in 2027"],
          ["EU limit", "3% deficit, 60% debt"]
        ] },
        { type: "section", head: "Why it happened", md:
          "France has not balanced its budget since 1974. It spends more than most rich countries on pensions, health and welfare, around 57% of GDP in total, and voters strongly resist cuts. The pandemic and the energy crisis added huge sums. Growth has been modest, and political instability makes every saving harder: each government is one budget away from falling, so it avoids painful choices." },
        { type: "compare", head: "How to fix it",
          left: { head: "Cut spending", md:
            "The centre and right argue France's state is too big: freeze spending, reform pensions and benefits, and reduce the number of public agencies. Raising taxes further, they say, would drive away investment." },
          right: { head: "Tax the rich", md:
            "The left argues that tax cuts for business and the wealthy under Macron created the hole. It has backed a minimum tax on the largest fortunes and opposes cuts to public services." } },
        { type: "section", head: "Why fixing it is so hard", md:
          "Every recent government that tried to cut the deficit fell or nearly fell. Barnier was toppled over his 2025 budget; Bayrou lost a confidence vote over his savings plan in 2025. The opposition parties that could topple Lecornu each reject a different part of any plan: the left opposes cuts, the right opposes new taxes, and the National Rally opposes both." },
        { type: "section", head: "Why it matters", md:
          "France is too big to rescue in the way Greece was, so its finances matter to the whole euro area. The EU has placed it under its [[excessive deficit procedure]], which demands a credible plan to get below 3%. Higher borrowing costs eat into money for schools, hospitals and defence. And whoever wins in 2027 will inherit the problem: some of the leading candidates' promises, like lowering the retirement age, would make it worse." },
        { type: "section", head: "What's next", md:
          "The 2027 budget must pass by the end of the year. The Socialists, whose abstention keeps Lecornu in office, oppose deep cuts; the right opposes tax rises. If the budget fails, the government falls, and markets could push borrowing costs up again. Watch the autumn votes in the Assembly and the next ratings reviews." }
      ],
      takeaways: [
        "France's deficit was 5.4% of GDP in 2026 and its debt around 119% of GDP.",
        "Fitch and S&P cut France's credit rating in 2025; it now borrows at higher rates than Spain.",
        "The 2027 budget seeks €54 billion of savings and could topple the government."
      ],
      check: { q: "What is the EU's limit for a member's annual budget deficit?",
        choices: ["1% of GDP", "3% of GDP", "5% of GDP"], answer: 1,
        explain: "EU rules set a 3% deficit limit (and a 60% debt reference). Countries above it, like France, are put under the excessive deficit procedure." },
      sources: [
        { title: "France Seeks to Pare Deficit After Missing Its 2026 Target", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-17/french-premier-eyes-54-billion-effort-to-stop-deficit-blowout", date: "2026-09-17" },
        { title: "France's fresh budget battle threatens to topple another government", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/24/france-budget-debt-deficit-government.html", date: "2026-09-24" },
        { title: "France's borrowing costs rise after Fitch downgrade", publisher: "CNBC", url: "https://www.cnbc.com/2025/09/15/frances-borrowing-costs-rise-after-fitch-downgrade-.html", date: "2025-09-15" },
        { title: "French bond prices decline after unexpected S&P downgrade", publisher: "Euronews", url: "https://www.euronews.com/2025/10/20/french-bond-prices-decline-after-unexpected-sp-downgrade", date: "2025-10-20" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "fr-7", kind: "story", asOf: "2026-09-28",
      title: "The race for 2027",
      dek: "The far right leads, the centre is looking for one candidate, and the left is divided. The first round is on 18 April.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-7-hero.webp",
          alt: "Illustration of a row of empty official election poster boards on a French street, numbered but blank, with a bakery in the background.",
          caption: "Each candidate gets an identical official poster board outside every polling station.",
          credit: "AI illustration — not a photograph",
          prompt: "A row of identical empty metal election poster boards along a French town street, all blank, a boulangerie with a striped awning in the background, morning light, a cyclist passing, anticipation, no legible text or faces." },
        { type: "section", head: "What happened", md:
          "The 2027 presidential election will be held on 18 April, with a run-off on 2 May. Polls through 2026 show the National Rally's candidate, most often tested as Jordan Bardella, winning around 35% in the first round, far ahead of anyone else. Édouard Philippe, the former prime minister, is the best-placed centrist, at around 20%.\n\n" +
          "On 7 July 2026 an appeals court ruled on Marine Le Pen's conviction for misusing European Parliament funds. The ruling opened the door for her to run again, though with a sentence to serve wearing an electronic tag. The party must now choose between Le Pen and Bardella." },
        { type: "section", head: "The candidates", md:
          "- **Far right:** Le Pen or Bardella for the National Rally, promising lower immigration, lower energy taxes and a return to retirement at 62.\n" +
          "- **Centre and centre-right:** Philippe leads the field; others from Macron's camp and Les Républicains may also run, splitting the vote.\n" +
          "- **Left:** Jean-Luc Mélenchon is likely to run again for La France Insoumise, while Socialists, Greens and others debate whether to unite behind a more moderate figure." },
        { type: "section", head: "Why the far right leads", md:
          "The National Rally has spent a decade building a respectable image, dropping its old call to leave the euro and presenting a younger face in Bardella. Many voters are angry about the cost of living, immigration and crime, and feel Macron's centre has failed them. After nine years of Macron and a chaotic parliament since 2024, the party can present itself as the only force that has never had its turn." },
        { type: "compare", head: "Will the 'republican front' hold?",
          left: { head: "Yes", md:
            "Every time the far right has reached a run-off, most other voters have united against it. A centrist such as Philippe could gather left and right voters in the second round, just as Chirac and Macron did." },
          right: { head: "Maybe not", md:
            "Many left-wing voters say they won't vote for a centrist again, and many on the right no longer see the National Rally as beyond the pale. Some 2026 polls show its candidate winning a run-off." } },
        { type: "section", head: "What the polls can't tell you", md:
          "The election is seven months away, and French campaigns can change fast: Macron himself was barely known a year before he won in 2017. The final list of candidates, any scandals, and events abroad could all reshape the race. First-round polls this far out measure mood as much as intention." },
        { type: "section", head: "Why it matters", md:
          "A National Rally president would command the only nuclear arsenal in the EU and would sit at the EU table with a very different agenda: tighter borders, national preference for jobs and benefits, and scepticism of aid to [[unit:ua|Ukraine]] and of EU integration. But they would also need a majority in the Assembly, which could mean another parliamentary election soon after." },
        { type: "section", head: "What's next", md:
          "Watch for the National Rally's choice between Le Pen and Bardella, whether the centre rallies around Philippe, and whether the left can agree on one candidate. Candidates must collect 500 signatures from elected officials to get on the ballot, usually by March." }
      ],
      takeaways: [
        "France votes for a new president on 18 April and 2 May 2027; Macron can't run.",
        "The National Rally's candidate polls around 35% in the first round; Édouard Philippe leads the centre at about 20%.",
        "A July 2026 appeal ruling opened the door for Marine Le Pen to run again."
      ],
      check: { q: "Who is the best-placed centrist candidate in 2026 polls?",
        choices: ["Édouard Philippe", "Jean-Luc Mélenchon", "Jordan Bardella"], answer: 0,
        explain: "Philippe, Macron's first prime minister, polls around 20%. Bardella is the far-right candidate; Mélenchon leads the radical left." },
      sources: [
        { title: "France appeals court opens door for Le Pen presidential run, with ankle tag", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/7/france-appeals-court-opens-door-for-le-pen-presidential-run-with-ankle-tag", date: "2026-07-07" },
        { title: "As French far-right leader Marine Le Pen's appeal trial ends, her presidential bid is at stake", publisher: "AP via Barchart", url: "https://www.barchart.com/story/news/162218/as-french-far-right-leader-marine-le-pen-s-appeal-trial-ends-her-presidential-bid-is-at-stake", date: "2026" },
        { title: "France's fresh budget battle threatens to topple another government", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/24/france-budget-debt-deficit-government.html", date: "2026-09-24" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "fr-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A government surviving on borrowed time, a budget that could bring it down, and seven months to a presidential election.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-8-hero.webp",
          alt: "Illustration of the French National Assembly's semicircular chamber seen from the public gallery, with red seats mostly empty.",
          caption: "The National Assembly, where no group has a majority.",
          credit: "AI illustration — not a photograph",
          prompt: "A grand semicircular parliamentary chamber seen from a high public gallery, rows of red velvet seats mostly empty, a raised marble rostrum, classical columns and a painted ceiling, soft daylight from above, quiet before a vote, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Lecornu's minority government survives with the Socialists' tolerance.\n" +
          "- **Budget:** the 2027 plan needs €54 billion of savings to cut the deficit from 5.4% to 5%; a failed vote could topple the government.\n" +
          "- **Pensions:** the rise to 64 is suspended until after the election.\n" +
          "- **Election:** the National Rally leads; Philippe leads the centre; the left is divided.\n" +
          "- **Abroad:** France co-leads, with the UK, European planning for Ukraine's security guarantees." },
        { type: "section", head: "France in the world", md:
          "Macron has used his final years to push for European 'strategic autonomy': more EU defence spending, joint weapons programmes and a debate about how France's nuclear deterrent could help protect its partners. France has withdrawn its troops from Mali, Burkina Faso, Niger and Chad after military coups and anti-French protests, ending a decade of counter-terrorism operations in the Sahel. It recognised a Palestinian state in September 2025, and keeps close but sometimes tense ties with [[unit:us|the United States]]." },
        { type: "section", head: "What voters want", md:
          "Polls suggest purchasing power is French voters' top concern, followed by immigration, security, health and the environment. Trust in politicians and parties is among the lowest in Europe, and many voters, especially young and working-class ones, don't vote at all. Candidates who can speak to anger about prices and to a sense of a country in decline have the advantage." },
        { type: "section", head: "Macron's legacy", md:
          "Macron came to office promising to modernise France and relaunch Europe. Supporters point to falling unemployment, a boom in start-ups and foreign investment, and his leadership on European defence. Critics point to higher debt, the pension fight, the yellow vests and, above all, a far right stronger than when he arrived. How the 2027 election ends will shape how his presidency is remembered." },
        { type: "section", head: "What the next president inherits", md:
          "Whoever wins in May 2027 will face a deficit far above EU limits, a suspended pension reform, a fragmented Assembly they may choose to dissolve, and a Europe asking France to do more for its own defence and Ukraine's. The honeymoon will be short." },
        { type: "section", head: "Three scenarios", md:
          "- **The government holds.** The 2027 budget passes with Socialist abstention, and France reaches the election without another crisis.\n" +
          "- **Another fall.** The budget fails, Lecornu goes, and Macron names a sixth prime minister or dissolves the Assembly again.\n" +
          "- **A far-right president.** The National Rally wins in May 2027, then seeks a parliamentary majority in a new election." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Oct–Dec 2026:** the 2027 budget debates and possible no-confidence votes\n" +
          "- **Early 2027:** candidate declarations; the 500-signature deadline\n" +
          "- **18 April 2027:** first round of the presidential election\n" +
          "- **2 May 2027:** the run-off" },
        { type: "section", head: "Connections", md:
          "France's story runs through [[unit:de]] (the EU's engine), [[unit:gb]] (nuclear partner and co-leader on Ukraine), [[unit:ua]] (security guarantees), [[unit:it]] (Mediterranean migration and EU budgets), [[unit:us]] (NATO and trade) and [[unit:ru]] (a threat France now names openly)." }
      ],
      takeaways: [
        "Lecornu governs without a majority, surviving on the Socialists' abstention.",
        "The 2027 budget seeks €54 billion in savings; failure could bring the government down.",
        "The presidential election on 18 April and 2 May 2027 could bring the far right to power."
      ],
      check: { q: "When is the first round of France's next presidential election?",
        choices: ["18 April 2027", "2 May 2026", "7 July 2027"], answer: 0,
        explain: "The first round is on 18 April 2027, with a run-off between the top two on 2 May." },
      sources: [
        { title: "France's fresh budget battle threatens to topple another government", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/24/france-budget-debt-deficit-government.html", date: "2026-09-24" },
        { title: "France Seeks to Pare Deficit After Missing Its 2026 Target", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-17/french-premier-eyes-54-billion-effort-to-stop-deficit-blowout", date: "2026-09-17" },
        { title: "Lecornu governments", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lecornu_governments", date: "2026-09" }
      ]
    }
  ]
});
