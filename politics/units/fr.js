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

    /* ---------------------------------------------------------- 9 */
    {
      id: "fr-9", kind: "founding", asOf: "2026-09-28",
      title: "1789: the Revolution",
      dek: "The French Revolution overthrew an absolute monarchy, proclaimed the rights of man, and gave the world the idea of left and right.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-9-hero.webp",
          alt: "Illustration of a crowd seen from behind surging toward a massive medieval stone fortress with round towers, under smoke and a summer sky.",
          caption: "The storming of the Bastille on 14 July 1789, now France's national day.",
          credit: "Illustration — not a photograph",
          prompt: "A huge crowd in 18th-century clothes seen from behind surging toward a massive medieval stone fortress with round towers, smoke drifting across a bright summer sky, dramatic painterly style, no faces visible, no flags, no legible text." },
        { type: "timeline", head: "From monarchy to republic", items: [
          ["May 1789", "Estates-General meets at Versailles"],
          ["14 July 1789", "Storming of the Bastille"],
          ["Aug 1789", "Declaration of the Rights of Man and of the Citizen"],
          ["1792", "Monarchy abolished; the First Republic"],
          ["1793–94", "The Terror; Louis XVI executed"],
          ["1799", "Napoleon Bonaparte seizes power"],
          ["1958", "The Fifth Republic, France's current regime"]
        ] },
        { type: "section", head: "The old regime", md:
          "In the 18th century France was Europe's most populous and powerful kingdom, ruled by an absolute monarch at Versailles. Society was divided into three 'estates': the clergy, the nobility, and everyone else, who paid most of the taxes. Wars, including support for the American Revolution, had bankrupted the state, and bad harvests sent bread prices soaring. Enlightenment thinkers such as Voltaire and Rousseau had spread ideas of reason, rights and popular sovereignty." },
        { type: "section", head: "1789", md:
          "To raise money, Louis XVI summoned the Estates-General in May 1789 for the first time since 1614. The Third Estate declared itself a National Assembly and swore not to disband until France had a constitution. When the king massed troops, Parisians stormed the Bastille prison on 14 July, and peasants rose against their lords across the country. In August the Assembly abolished feudal privileges and adopted the Declaration of the Rights of Man and of the Citizen: 'Men are born and remain free and equal in rights'." },
        { type: "section", head: "Republic and Terror", md:
          "The revolution radicalised as war broke out with Austria and Prussia in 1792. The monarchy was abolished that September and Louis XVI was guillotined in January 1793. Seats in the assembly gave us our political vocabulary: radicals sat on the left, moderates and royalists on the right. Under Robespierre's Committee of Public Safety, the Terror of 1793–94 executed about 17,000 people after trials and killed many more without them, while a royalist revolt in the Vendée was crushed with mass killings. Robespierre was himself guillotined in July 1794." },
        { type: "section", head: "Napoleon and after", md:
          "In 1799 General Napoleon Bonaparte seized power and in 1804 crowned himself emperor. His Civil Code, centralised administration and education system outlasted his conquests. Over the next century and a half France swung between monarchies, empires and republics, five republics in all; the Third lasted from 1870 to 1940. The current Fifth Republic, created by Charles de Gaulle in 1958, is the second-longest-lasting regime since 1789." },
        { type: "compare", head: "Two readings of the Revolution",
          left: { head: "The republican tradition", md:
            "1789 founded modern democracy: equality before the law, rights for citizens and the end of hereditary privilege, ideas that spread worldwide." },
          right: { head: "Its critics", md:
            "From Edmund Burke onward, critics have argued that tearing down every institution led to terror, war and dictatorship." } },
        { type: "section", head: "Why it still matters", md:
          "The Republic's motto, 'Liberty, equality, fraternity', its tricolour flag, its anthem, the Marseillaise, and its insistence on a secular, centralised state all come from the Revolution. French politicians still invoke 1789, and French citizens still take to the streets to defend their rights, from the 1968 protests to the gilets jaunes and the pension strikes." }
      ],
      takeaways: [
        "A bankrupt monarchy summoned the Estates-General in 1789, setting off a revolution that stormed the Bastille on 14 July.",
        "The Declaration of the Rights of Man proclaimed equality; the monarchy fell in 1792 and the Terror followed.",
        "France has since had five republics; the Fifth, de Gaulle's, dates from 1958."
      ],
      check: { q: "Where do the political terms 'left' and 'right' come from?",
        choices: ["The British Parliament", "Where factions sat in France's revolutionary assembly", "The US Congress"], answer: 1,
        explain: "In the revolutionary assemblies, radicals sat to the president's left and conservatives to the right." },
      sources: [
        { title: "French Revolution", publisher: "Britannica", url: "https://www.britannica.com/event/French-Revolution", date: "n.d." },
        { title: "Declaration of the Rights of Man and of the Citizen", publisher: "Conseil constitutionnel", url: "https://www.conseil-constitutionnel.fr/en/declaration-of-human-and-civic-rights-of-26-august-1789", date: "1789" },
        { title: "Reign of Terror", publisher: "Britannica", url: "https://www.britannica.com/event/Reign-of-Terror", date: "n.d." }
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
          credit: "Illustration — not a photograph",
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

    /* ---------------------------------------------------------- 10 */
    {
      id: "fr-10", kind: "past", asOf: "2026-09-28",
      title: "The Algerian War",
      dek: "France fought a brutal eight-year war to keep Algeria. It lost, the Fourth Republic collapsed, and the wounds shape French politics today.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-10-hero.webp",
          alt: "Illustration of a whitewashed Mediterranean city climbing a hillside above a harbour, with a casbah of narrow streets and a large colonial boulevard.",
          caption: "Algiers, where the Battle of Algiers was fought in 1957.",
          credit: "Illustration — not a photograph",
          prompt: "A whitewashed Mediterranean city climbing steeply above a harbour, a dense casbah of narrow alleys and flat roofs beside grand colonial arcaded boulevards, bright hard sunlight and deep blue sea, tense stillness, no people close up, no flags, no legible text." },
        { type: "facts", head: "The war", rows: [
          ["Years", "1954–1962"],
          ["French colonial rule", "1830–1962"],
          ["European settlers ('pieds-noirs')", "About 1 million"],
          ["Algerian deaths", "Estimates range from about 300,000 to 1.5 million (the Algerian government's figure)"],
          ["Independence", "5 July 1962, after the Évian Accords"]
        ] },
        { type: "section", head: "French Algeria", md:
          "France invaded Algeria in 1830 and, unlike its other colonies, made it part of France itself, divided into French departments. About a million European settlers, known as pieds-noirs, lived there, with full rights, while most of the nine million Muslim Algerians were subjects without equal citizenship. Nationalist demands grew after the Second World War; in May 1945 protests at Sétif were put down with massacres that killed thousands of Algerians." },
        { type: "section", head: "The war", md:
          "On 1 November 1954 the National Liberation Front (FLN) launched an armed uprising. France sent hundreds of thousands of conscripts. The FLN used bombings against civilians and killed rival nationalists and Algerians who sided with France; the French army used torture systematically, forced about two million villagers into camps, and in the 1957 Battle of Algiers broke the FLN's network in the capital. Algerians who fought for France, the harkis, were left to reprisals after independence." },
        { type: "section", head: "The Republic falls", md:
          "The war destroyed France's Fourth Republic. In May 1958, fearing that Paris would negotiate, settlers and generals seized power in Algiers and threatened to take Paris. Parliament called back Charles de Gaulle, who wrote a new constitution with a strong presidency, founding the Fifth Republic. To the fury of the settlers, he concluded that Algeria must be independent. Generals attempted a putsch in 1961, and a settler terrorist group, the OAS, tried to assassinate him. The Évian Accords of March 1962 ended the war; Algeria became independent in July, and nearly all the pieds-noirs fled to France." },
        { type: "section", head: "Violence in Paris", md:
          "The war came to France itself. On 17 October 1961, police in Paris attacked a peaceful demonstration of Algerians against a curfew; dozens were killed, by Macron's own account, with some historians putting the toll above a hundred, and bodies were thrown into the Seine. The massacre was covered up for decades. In 2021 President Macron called it 'inexcusable'." },
        { type: "compare", head: "Memories in conflict",
          left: { head: "Calls for recognition", md:
            "France should fully acknowledge torture, massacres and colonial injustice, as Macron has begun to do, to heal relations with Algeria and with French citizens of Algerian descent." },
          right: { head: "Resistance to 'repentance'", md:
            "Many pieds-noirs, harkis and veterans resent a one-sided account that ignores FLN atrocities and the suffering of those who lost their homes." } },
        { type: "section", head: "Why it still matters", md:
          "Several million French citizens have Algerian roots, making Algeria's history part of France's. Relations with Algiers swing between rapprochement and crisis, including a sharp downturn in 2024–25 after France backed Morocco's position on Western Sahara. The far right's founder, Jean-Marie Le Pen, served in Algeria, and debates over immigration, national identity and colonial memory continue to echo the war." }
      ],
      takeaways: [
        "France ruled Algeria from 1830 as part of France itself, with a million European settlers.",
        "The 1954–62 war of independence involved terrorism, systematic torture and hundreds of thousands of deaths.",
        "The crisis brought de Gaulle back and created the Fifth Republic; Algeria became independent in 1962."
      ],
      check: { q: "What political change did the Algerian crisis bring about in France?",
        choices: ["The end of the monarchy", "The collapse of the Fourth Republic and the founding of the Fifth under de Gaulle", "France leaving NATO"], answer: 1,
        explain: "The May 1958 crisis in Algiers led parliament to recall de Gaulle, who created the Fifth Republic." },
      sources: [
        { title: "Algerian War", publisher: "Britannica", url: "https://www.britannica.com/event/Algerian-War", date: "n.d." },
        { title: "Macron condemns 'inexcusable' police crackdown on 1961 Paris protest", publisher: "France 24", url: "https://www.france24.com/en/europe/20211016-macron-to-participate-in-commemorations-of-paris-algeria-protest-massacre", date: "2021-10-16" },
        { title: "Algeria: History", publisher: "Britannica", url: "https://www.britannica.com/place/Algeria/History", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "fr-11", kind: "past", asOf: "2026-09-28",
      title: "May 1968",
      dek: "A student revolt turned into the largest general strike in French history. De Gaulle survived, but France changed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-11-hero.webp",
          alt: "Illustration of a narrow Paris street with cobblestones piled into a barricade, overturned chairs and smoke, below tall stone apartment buildings.",
          caption: "Barricades in the Latin Quarter of Paris, May 1968.",
          credit: "Illustration — not a photograph",
          prompt: "A narrow Parisian street of tall cream stone apartment buildings with wrought-iron balconies, cobblestones piled into a makeshift barricade with overturned chairs and a toppled car, drifting smoke, early morning light, rebellious and tense, no people, no legible text or graffiti." },
        { type: "timeline", head: "Spring 1968", items: [
          ["22 March", "Students occupy a building at Nanterre university"],
          ["3 May", "Police clear the Sorbonne"],
          ["10–11 May", "'Night of the barricades' in the Latin Quarter"],
          ["13 May onward", "General strike; about 10 million workers stop"],
          ["27 May", "Grenelle agreements raise the minimum wage by about a third"],
          ["30 May", "De Gaulle dissolves the Assembly; huge rally in his support"],
          ["June", "Gaullists win a landslide"]
        ] },
        { type: "section", head: "A society in a hurry", md:
          "France in the 1960s was booming, modernising fast, and governed by Charles de Gaulle, a war hero then in his late seventies whose style struck many young people as authoritarian and paternalistic. Universities were overcrowded and old-fashioned; state television was controlled by the government; and a baby-boom generation, influenced by opposition to the Vietnam War and new ideas about sex and authority, was restless." },
        { type: "section", head: "The student revolt", md:
          "Protests began at the new suburban university of Nanterre, where students occupied buildings in March. When police cleared the Sorbonne in central Paris on 3 May, students fought back. On the 'night of the barricades', 10–11 May, they tore up cobblestones and built barricades in the Latin Quarter; riot police charged, and hundreds were injured. Slogans such as 'Be realistic, demand the impossible' and 'Beneath the paving stones, the beach!' became famous." },
        { type: "section", head: "The general strike", md:
          "Outraged by the police violence, unions called a general strike on 13 May. Workers occupied factories across the country, and within days about 10 million people, over a fifth of the population, were on strike: the largest general strike in French history. Transport, post and fuel supplies stopped. On 27 May the government and unions agreed the Grenelle accords, raising the minimum wage by about a third, but many strikers rejected them. For a few days the regime looked as if it might fall." },
        { type: "section", head: "De Gaulle's comeback", md:
          "On 29 May de Gaulle secretly flew to a French army base in Germany, apparently to ensure the military's support. The next day he returned, dissolved the National Assembly and called elections, warning of communist subversion. Hundreds of thousands of his supporters marched on the Champs-Élysées. In June the Gaullists won a landslide. But de Gaulle had been shaken; he resigned in 1969 after losing a referendum on regional reform." },
        { type: "compare", head: "Two legacies",
          left: { head: "Liberation", md:
            "1968 swept away stuffy hierarchies in universities, workplaces and families, and opened the way for feminism, gay rights and a freer culture." },
          right: { head: "Its critics", md:
            "Nicolas Sarkozy called for 'liquidating' its legacy, blaming it for undermining authority, respect and the value of work." } },
        { type: "section", head: "Why it still matters", md:
          "May 1968 set a template: in France, big change often comes from the street. The strikes against pension reform in 1995, 2019 and 2023, and the gilets jaunes of 2018–19, all drew comparisons with 1968, as has every standoff between a determined president and mass protest." }
      ],
      takeaways: [
        "In May 1968 a student revolt in Paris spread into a general strike of about 10 million workers.",
        "The Grenelle accords raised the minimum wage by about a third, and de Gaulle called elections, which he won.",
        "May 1968 transformed French society and remains a template for protest."
      ],
      check: { q: "How did de Gaulle respond at the height of the crisis?",
        choices: ["He resigned at once", "He dissolved the National Assembly and called elections, which his party won", "He imposed martial law"], answer: 1,
        explain: "De Gaulle called snap elections on 30 May and won a landslide in June, though he resigned the following year." },
      sources: [
        { title: "Events of May 1968", publisher: "Britannica", url: "https://www.britannica.com/event/events-of-May-1968", date: "n.d." },
        { title: "Charles de Gaulle", publisher: "Britannica", url: "https://www.britannica.com/biography/Charles-de-Gaulle", date: "n.d." },
        { title: "May 1968, France in revolt", publisher: "France 24", url: "https://www.france24.com/en/20180320-may-1968-france-revolt", date: "2018-03-20" }
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
          credit: "Illustration — not a photograph",
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
          credit: "Illustration — not a photograph",
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
          credit: "Illustration — not a photograph",
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
          credit: "Illustration — not a photograph",
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

    /* ---------------------------------------------------------- 12 */
    {
      id: "fr-12", kind: "spotlight", asOf: "2026-09-28",
      title: "Laïcité, Islam and the banlieues",
      dek: "France's strict secularism was designed to keep the Church out of the state. Today it is at the centre of fierce debates about Islam, identity and the suburbs.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr/fr-12-hero.webp",
          alt: "Illustration of large concrete housing towers in a suburb at dusk, with a tram line in front and a small mosque with a green dome between the blocks.",
          caption: "The banlieues around Paris and other cities, built in the 1960s and 1970s, are home to many families of immigrant origin.",
          credit: "Illustration — not a photograph",
          prompt: "Large concrete housing tower blocks in a French suburb at dusk, a modern tram line passing in front, a small mosque with a modest green dome between the blocks, lit windows, a mix of hope and neglect, no people close up, no legible text or graffiti." },
        { type: "facts", head: "Key facts", rows: [
          ["Law separating churches and state", "1905"],
          ["Muslims in France", "Estimated 5–6 million, the largest Muslim population in western Europe"],
          ["Headscarf ban in state schools", "2004"],
          ["Face-covering ban in public", "2010"],
          ["'Separatism' law", "2021"]
        ] },
        { type: "section", head: "What laïcité means", md:
          "After a long struggle between republicans and the Catholic Church, the law of 1905 separated churches and state: the Republic recognises and funds no religion and guarantees freedom of conscience. Laïcité means the state is neutral, and its agents, from teachers to judges, may not display their faith at work. Most French people across the spectrum see it as a founding value of the Republic, as important as liberty and equality." },
        { type: "section", head: "Islam in France", md:
          "Immigration from France's former colonies in North and West Africa after the Second World War made Islam France's second religion. Many immigrant families settled in the banlieues, large housing estates on city outskirts, where unemployment is often high and public services weak. In 2005, after two teenagers died fleeing police in Clichy-sous-Bois, riots spread across the country for three weeks. In 2023 the police killing of a 17-year-old, Nahel Merzouk, set off another week of riots." },
        { type: "section", head: "Headscarves and burkinis", md:
          "Since the 1980s arguments over Muslim dress have repeatedly divided France. A 2004 law banned conspicuous religious symbols, including headscarves, in state schools; a 2010 law banned face coverings such as the niqab in public. Towns tried to ban the 'burkini' on beaches in 2016, until courts stepped in, and in 2023 the government banned the abaya, a long robe, in schools. Supporters see these measures as protecting laïcité and women's equality; critics say they single out Muslims." },
        { type: "section", head: "Terror and 'separatism'", md:
          "France suffered a wave of jihadist attacks: on the satirical magazine Charlie Hebdo in January 2015, on the Bataclan concert hall and other sites in Paris in November 2015, killing 130, and in Nice in 2016, killing 86. In 2020 a teacher, Samuel Paty, was beheaded after showing cartoons of the Prophet Muhammad in a class on free speech. President Macron responded with a 2021 law against 'Islamist separatism', tightening control over home schooling, associations and foreign funding of mosques." },
        { type: "compare", head: "Two views",
          left: { head: "Defenders of strict laïcité", md:
            "A shared secular public space is what holds a diverse nation together, and it must be defended against Islamist pressure." },
          right: { head: "Critics", md:
            "Laïcité has been turned from state neutrality into a tool to police Muslims, deepening their sense of exclusion." } },
        { type: "section", head: "Why it matters", md:
          "These debates feed the rise of the National Rally, shape the 2027 presidential race, and test whether France's model of integration, which recognises citizens, not communities, can work for millions of French Muslims. The 1905 law bound the state to neutrality; the argument now is how far that neutrality should extend to what citizens themselves wear and do in public." }
      ],
      takeaways: [
        "Laïcité, founded in the 1905 law separating churches and state, keeps religion out of public institutions.",
        "France has western Europe's largest Muslim population, concentrated in often deprived suburbs.",
        "Bans on headscarves in schools and face coverings, and responses to terror attacks, fuel debate about Islam and identity."
      ],
      check: { q: "What did France's 2004 law ban?",
        choices: ["All mosques", "Conspicuous religious symbols, including headscarves, in state schools", "Religious marriage"], answer: 1,
        explain: "The law applies to pupils in state schools and covers all conspicuous religious symbols, though headscarves were its focus." },
      sources: [
        { title: "100th Anniversary of Secularism in France", publisher: "Pew Research Center", url: "https://www.pewresearch.org/religion/2005/12/09/100th-anniversary-of-secularism-in-france/", date: "2005-12-09" },
        { title: "France's 1905 Law of Separation of Church and State", publisher: "World History Encyclopedia", url: "https://www.worldhistory.org/article/2094/frances-1905-law-of-separation-of-church-and-state/", date: "n.d." },
        { title: "Eight sentenced in France in connection with murder of teacher Samuel Paty", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2024/12/21/french-court-jails-eight-people-involved-in-beheading-of-teacher", date: "2024-12-21" }
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
          credit: "Illustration — not a photograph",
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
