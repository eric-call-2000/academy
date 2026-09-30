/* ============================================================
   Unit 25 — Mexico 🇲🇽
   Research note and sources: tools/research/mx.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("mx", {
  id: "mx",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "mx-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Mexico in brief",
      dek: "A popular president with a supermajority, a cartel war, and a neighbour threatening tariffs and troops.",
      blocks: [
        { type: "map", src: "maps/mx.svg",
          alt: "Locator map of Mexico highlighted between the United States to the north and Guatemala and Belize to the south-east, with the Baja California peninsula and the Yucatán peninsula, and a small globe showing its place in the world.",
          caption: "Mexico shares a 3,100-kilometre border with the United States, the busiest in the world.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Mexico City"],
          ["People", "About 133 million"],
          ["System", "Federal presidential republic; one six-year term"],
          ["President", "Claudia Sheinbaum (Morena), since October 2024"],
          ["Congress", "Morena and its allies hold two-thirds of both houses"],
          ["Biggest trading partner", "The United States, which buys about 80% of its exports"],
          ["Next election", "Midterms in June 2027"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Mexico is the world's 13th-largest economy and, since 2023, the [[unit:us|United States']] biggest trading partner, ahead of Canada and China. Factories in its north build cars, televisions and aircraft parts for American markets, and more firms have moved there to avoid tariffs on China. It is also the main route for drugs, including fentanyl, and migrants heading north, which makes it central to American politics.\n\n" +
          "Mexico matters too as a test of democracy. Its ruling party, Morena, has used a huge majority to remake the courts and the state, and critics fear the return of a one-party system like the one that ruled for most of the 20th century." },
        { type: "section", head: "Who holds power", md:
          "Claudia Sheinbaum, a climate scientist and former mayor of Mexico City, won the 2024 election with about 60% of the vote, becoming Mexico's first woman president. She succeeded her mentor, Andrés Manuel López Obrador ('AMLO'), who founded Morena. With its allies, Morena holds the two-thirds majorities in Congress needed to change the constitution, and it governs most of the 32 states." },
        { type: "section", head: "The mood in 2026", md:
          "Sheinbaum remains one of the most popular leaders in the world, with approval near 70% in El Financiero's polls, thanks largely to welfare payments and a rising minimum wage. Her government says homicides have fallen by about half since 2024. But voters rate its record on crime and corruption poorly, a cartel boss's death in February 2026 set off a wave of violence, and Donald Trump's tariffs and threats of military action against the cartels hang over everything." },
        { type: "section", head: "What Mexico wants", md:
          "Sheinbaum wants to keep the [[USMCA]] free-trade deal alive and win relief from US tariffs, cooperate with Washington on drugs and migration while ruling out American troops on Mexican soil, and expand state control over energy and social spending. Her motto on the US is 'cooperation, not subordination'." },
        { type: "section", head: "Land and people", md:
          "Mexico stretches from the deserts of the north, tied by industry to Texas and California, to the tropical, poorer and more Indigenous south, where Mayan and other languages are still widely spoken. About four in five Mexicans live in cities, and Greater Mexico City, home to more than 20 million, is one of the largest urban areas on earth. Some 37 million people of Mexican origin live in the United States, and the money they send home, more than $60 billion a year, is a lifeline for millions of families." },
        { type: "callout", tone: "why", md:
          "Mexico is where America's trade war, drug war and immigration debate meet, and where a powerful elected government is reshaping democratic institutions with broad popular support." }
      ],
      takeaways: [
        "Mexico is the United States' largest trading partner and the main route for drugs and migrants heading north.",
        "Claudia Sheinbaum, Mexico's first woman president, is highly popular and controls two-thirds of Congress.",
        "Critics fear her party is dismantling checks on its power; supporters say it is serving the poor."
      ],
      check: { q: "Who founded Mexico's ruling party, Morena?",
        choices: ["Claudia Sheinbaum", "Andrés Manuel López Obrador", "Vicente Fox"], answer: 1,
        explain: "López Obrador founded Morena and was president from 2018 to 2024; Sheinbaum is his chosen successor." },
      sources: [
        { title: "Presidency of Claudia Sheinbaum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Presidency_of_Claudia_Sheinbaum", date: "2026-09" },
        { title: "Approval Tracker: Mexico's President Claudia Sheinbaum", publisher: "AS/COA", url: "https://www.as-coa.org/articles/approval-tracker-mexicos-president-claudia-sheinbaum", date: "2026" },
        { title: "Mexico's Sheinbaum Says Agreements Reached With Trump, as Washington Races Toward Trade Deal", publisher: "Reuters via US News", url: "https://www.usnews.com/news/top-news/articles/2026-09-18/mexicos-sheinbaum-says-agreements-reached-with-trump-as-washington-races-toward-trade-deal", date: "2026-09-18" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "mx-2", kind: "power", asOf: "2026-09-29",
      title: "One term, a supermajority and elected judges",
      dek: "A president who can never be re-elected, a Congress that can rewrite the constitution, and judges now chosen by popular vote.",
      blocks: [
        { type: "diagram", src: "img/mx/mx-2-power.svg",
          alt: "Diagram of power in Mexico. Voters elect the president for a single six-year term; Claudia Sheinbaum holds the office. Congress, with a 500-seat Chamber of Deputies and a 128-seat Senate, is controlled by Morena and its allies with two-thirds majorities, enough to amend the constitution with most state legislatures. Since 2025 judges, including the nine Supreme Court justices, are elected by popular vote. Thirty-two states have governors, most of them from Morena. The military runs the National Guard, ports, customs and big projects.",
          caption: "Mexico's checks on power have been rebuilt around one dominant party.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The president", md:
          "Mexico's president is elected for one six-year term, the sexenio, and can never run again, a rule born of the revolution's slogan 'effective suffrage, no re-election'. The president is head of state and government, commands the armed forces, and proposes most major laws. López Obrador and Sheinbaum have also used a daily morning press conference, the mañanera, to set the national agenda, speaking to the country for two hours or more almost every weekday." },
        { type: "section", head: "Congress and the constitution", md:
          "Congress has a 500-seat Chamber of Deputies, elected every three years, and a 128-seat Senate, elected every six. Changing the constitution needs two-thirds of both houses and a majority of state legislatures. After the 2024 election, Morena and its allies, the Greens (PVEM) and the Labour Party (PT), reached two-thirds in both, partly thanks to a disputed reading of rules on seats allocated by proportional representation. Since then the constitution has been amended dozens of times." },
        { type: "section", head: "Elected judges", md:
          "In September 2024, days before leaving office, López Obrador's Congress passed a reform replacing appointed judges with elected ones. In June 2025 voters chose all nine Supreme Court justices and hundreds of other judges. Only about 13% of voters took part, and candidates backed by Morena won every Supreme Court seat. [[lesson:mx-5|Briefing #]] tells that story." },
        { type: "section", head: "The states and the military", md:
          "Mexico is a federation of 31 states and Mexico City, each with an elected governor; Morena holds most of them. The armed forces have gained a far bigger role than in most democracies: they run the National Guard, which polices the country, as well as customs, ports, airports and major infrastructure projects. The independent watchdogs created after 2000, for transparency, competition and energy regulation, were abolished in 2024–25 and their work handed to ministries." },
        { type: "section", head: "How elections work", md:
          "Of the 500 deputies, 300 are elected in single-member districts and 200 from party lists by proportional representation; the Senate mixes 96 senators elected by state with 32 from a national list. Elections are run by the National Electoral Institute (INE), an independent body created in the 1990s and trusted across parties for ending the fraud of the PRI era. Morena has tried repeatedly to cut its budget and change how its leaders are chosen, which critics see as a threat to clean elections." },
        { type: "section", head: "Violence and local power", md:
          "In many regions, cartels shape local politics: dozens of candidates were murdered in the 2024 campaign, and mayors who defy criminal groups risk their lives. That makes the state's reach uneven, however strong the national government looks." },
        { type: "compare", head: "Two views of the changes",
          left: { head: "Morena's case", md:
            "The old courts and watchdogs protected elites and blocked the people's will. Voters gave Morena a mandate to transform the state, and elected judges answer to citizens." },
          right: { head: "Critics' case", md:
            "Mexico is sliding back toward single-party rule: courts, watchdogs and the electoral system are being captured, and the military has too much power." } }
      ],
      takeaways: [
        "Mexico's president serves one six-year term and can never be re-elected.",
        "Morena and its allies hold two-thirds of Congress, enough to amend the constitution.",
        "Judges, including the Supreme Court, are now elected by popular vote, and the military's role has grown sharply."
      ],
      check: { q: "How long is a Mexican president's term?",
        choices: ["Four years, renewable once", "One six-year term, with no re-election", "Five years"], answer: 1,
        explain: "The sexenio is a single six-year term; the ban on re-election dates from the Mexican Revolution." },
      sources: [
        { title: "Six Facts to Understand Mexico's 2025 Judicial Elections", publisher: "AS/COA", url: "https://www.as-coa.org/articles/six-facts-understand-mexicos-2025-judicial-elections", date: "2025" },
        { title: "Mexico's Constitutional Reforms Series: Electoral Reform", publisher: "Wilson Center", url: "https://www.wilsoncenter.org/article/mexicos-constitutional-reforms-series-electoral-reform", date: "2026" },
        { title: "Mexico", publisher: "Britannica", url: "https://www.britannica.com/place/Mexico", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "mx-9", kind: "founding", asOf: "2026-09-29",
      title: "Independence: from Hidalgo to the republic",
      dek: "A village priest's call to revolt in 1810 began Mexico's war of independence. It took eleven years, an unlikely alliance and a short-lived emperor before a republic emerged.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-9-hero.webp",
          alt: "Illustration of a colonial stone church with a bell tower in a small Mexican town at dawn, with a crowd of villagers in early-19th-century clothing gathered in front, seen from behind.",
          caption: "Miguel Hidalgo rang the church bell in Dolores on 16 September 1810 to call his parishioners to revolt.",
          credit: "AI illustration — not a photograph",
          prompt: "A colonial stone church with a tall bell tower in a small Mexican town at dawn, a crowd of villagers in early-19th-century clothing with sombreros and rebozos seen from behind gathered in the plaza, some carrying farm tools, warm orange sky, dramatic and historic, no faces, no flags, no legible text." },
        { type: "timeline", head: "From New Spain to Mexico", items: [
          ["1521", "Spanish conquest of the Aztec capital"],
          ["16 Sep 1810", "Hidalgo's 'Grito de Dolores'"],
          ["1811", "Hidalgo captured and executed"],
          ["1815", "Morelos executed"],
          ["1821", "Plan of Iguala; Spain accepts independence"],
          ["1822–23", "Iturbide rules as Emperor Agustín I"],
          ["1824", "First federal republican constitution"]
        ] },
        { type: "section", head: "New Spain", md:
          "For three centuries after Hernán Cortés conquered the Aztec capital, Tenochtitlan, in 1521, Mexico was New Spain, the richest part of Spain's empire, its wealth built on silver and on Indigenous labour. Society was a strict hierarchy. At the top were officials born in Spain, the *peninsulares*; below them American-born Spaniards, the *criollos*, who resented being shut out of high office; then people of mixed descent, the *mestizos*; and at the bottom Indigenous and African people." },
        { type: "section", head: "The Grito", md:
          "In 1808 Napoleon invaded Spain and deposed its king, throwing the empire into confusion. Criollo conspirators in Mexico plotted to take control. When their plot was discovered, one of them, Father Miguel Hidalgo, parish priest of the town of Dolores, rang his church bell before dawn on 16 September 1810 and called on his parishioners to rise up against bad government. Tens of thousands of peasants and Indigenous people joined his march, and the violence against Spaniards frightened the criollo elite. Hidalgo was captured and executed in 1811." },
        { type: "section", head: "Morelos and the long war", md:
          "Another priest, José María Morelos, turned the rebellion into a disciplined army and a political programme. In 1813 a congress he called declared independence and demanded the abolition of slavery and of distinctions of caste. He was captured and executed in 1815. Afterwards only guerrilla bands, led by figures such as Vicente Guerrero in the southern mountains, kept the cause alive." },
        { type: "section", head: "Independence by alliance", md:
          "Independence came from an unexpected direction. In 1820 a liberal revolution in Spain alarmed Mexico's conservatives and the Church. Agustín de Iturbide, a royalist officer who had fought the rebels, switched sides and allied with Guerrero. Their 1821 Plan of Iguala promised independence, the Catholic religion and equality between Spaniards and Mexicans. The Spanish viceroy accepted it, and Iturbide's army entered Mexico City in September 1821. In 1822 Iturbide had himself crowned Emperor Agustín I; he was overthrown within a year, and a federal republic was proclaimed with the 1824 constitution." },
        { type: "compare", head: "Two founding stories",
          left: { head: "The popular revolution", md:
            "Independence began with Hidalgo and Morelos, champions of the poor, which is why Mexico celebrates 16 September." },
          right: { head: "The elite settlement", md:
            "Independence was actually won in 1821 by conservative officers and the Church, who kept the old social order." } },
        { type: "section", head: "Why it still matters", md:
          "Every 15 September at night, Mexico's president rings the bell from the balcony of the National Palace and repeats the Grito, a ritual Sheinbaum performed in 2025 as the first woman to do so. The struggles of independence, between federalists and centralists, liberals and conservatives, Church and state, dominated the nineteenth century. The weak, divided republic that emerged was soon to lose half its territory to the United States ([[lesson:mx-10]])." }
      ],
      takeaways: [
        "Father Miguel Hidalgo's call to revolt on 16 September 1810 began the war of independence.",
        "Independence was achieved in 1821 when the royalist officer Iturbide allied with the rebel Guerrero.",
        "After a brief empire, Mexico became a federal republic with the 1824 constitution."
      ],
      check: { q: "What is commemorated by the 'Grito' each September?",
        choices: ["The 1917 constitution", "Hidalgo's 1810 call to revolt against Spanish rule", "The end of the Mexican Revolution"], answer: 1,
        explain: "Hidalgo's 'Grito de Dolores' on 16 September 1810 began the independence struggle." },
      sources: [
        { title: "Grito de Dolores", publisher: "Britannica", url: "https://www.britannica.com/event/Grito-de-Dolores", date: "n.d." },
        { title: "Miguel Hidalgo y Costilla", publisher: "Britannica", url: "https://www.britannica.com/biography/Miguel-Hidalgo-y-Costilla", date: "n.d." },
        { title: "Mexico: Independence", publisher: "Britannica", url: "https://www.britannica.com/place/Mexico/Independence", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "mx-3", kind: "history", asOf: "2026-09-29",
      title: "From revolution to Morena",
      dek: "A century of one-party rule, a democratic opening in 2000, a drug war, and the rise of López Obrador.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-3-hero.webp",
          alt: "Illustration of a huge central city square at dawn with a giant flagpole, a cathedral and a long colonial palace façade.",
          caption: "Mexico City's Zócalo, faced by the cathedral and the National Palace, where the president lives and works.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast empty stone city square at dawn, a huge baroque cathedral on one side and a long red-stone colonial palace on another, an enormous bare flagpole in the centre, soft pink sky, pigeons, grand and quiet, no flags, no legible text, no people close up." },
        { type: "timeline", head: "The short version", items: [
          ["1910–20", "The Mexican Revolution"],
          ["1929", "Founding of the party that became the PRI"],
          ["1994", "NAFTA takes effect; Zapatista uprising"],
          ["2000", "Vicente Fox ends 71 years of PRI rule"],
          ["2006", "Felipe Calderón launches the drug war"],
          ["2018", "López Obrador wins in a landslide"],
          ["2024", "Claudia Sheinbaum elected"]
        ] },
        { type: "section", head: "1. Revolution and the 'perfect dictatorship'", md:
          "The revolution of 1910–20 overthrew the dictator Porfirio Díaz and cost perhaps a million lives. Out of it grew a single ruling party, founded in 1929 and later called the Institutional Revolutionary Party (PRI), which won every presidential election for 71 years through patronage, control of unions and farmers, and fraud when needed. The Peruvian novelist Mario Vargas Llosa called it 'the perfect dictatorship', because it looked like a democracy. It nationalised oil in 1938, and each president picked his successor." },
        { type: "section", head: "2. Crisis and opening", md:
          "Debt crises in 1982 and 1994 pushed Mexico toward free markets and [[unit:us|the United States]]; the NAFTA trade pact took effect in 1994. The same year Zapatista rebels rose up in the south, and a presidential candidate was assassinated. Pressure for democracy produced an independent electoral institute, and in 2000 Vicente Fox of the conservative National Action Party (PAN) won, ending the PRI's rule peacefully." },
        { type: "section", head: "3. The drug war", md:
          "In 2006 President Felipe Calderón sent the army against the drug cartels. Killings soared as cartels fought the state and each other; hundreds of thousands have been murdered since, and more than 100,000 people are listed as missing. In 2014, 43 students from a teachers' college in Ayotzinapa disappeared in Guerrero, a case still unsolved, in which police and possibly soldiers were involved. Calderón's own security minister, Genaro García Luna, was convicted in the US of taking cartel bribes." },
        { type: "section", head: "4. López Obrador's transformation", md:
          "Andrés Manuel López Obrador, a left-wing populist who said he was robbed of the presidency in 2006, founded Morena and won a landslide in 2018. He raised the minimum wage sharply, expanded cash transfers to the elderly and students, favoured the state oil company Pemex, gave the military new roles, and attacked the press, courts and watchdogs as tools of a corrupt elite. He left office in 2024 with approval above 60%, and his chosen successor, Sheinbaum, won easily." },
        { type: "section", head: "6. Sheinbaum's landslide", md:
          "On 2 June 2024 Sheinbaum won about 60% of the vote, against about 28% for Xóchitl Gálvez, the joint candidate of the PAN, PRI and PRD, the biggest margin in decades. Morena and its allies also won the congressional supermajority that made the judicial reform possible. The campaign was one of the most violent in Mexico's history, with dozens of local candidates killed." },
        { type: "section", head: "5. The morning pulpit", md:
          "AMLO's daily mañanera press conferences became the heart of his government: long, combative sessions where he announced policy, attacked critics by name and dominated the news. Sheinbaum kept the tradition, in a calmer, more technical style." }
      ],
      takeaways: [
        "The PRI ruled Mexico for 71 years until Vicente Fox's victory in 2000.",
        "The drug war launched in 2006 has cost hundreds of thousands of lives.",
        "López Obrador founded Morena, won in 2018 and passed power to his protégé Sheinbaum in 2024."
      ],
      check: { q: "What ended 71 years of PRI rule?",
        choices: ["The 1910 revolution", "Vicente Fox's election victory in 2000", "López Obrador's win in 2018"], answer: 1,
        explain: "Fox, of the PAN, won the 2000 presidential election, the first time an opposition candidate had won since the PRI's founding." },
      sources: [
        { title: "Mexico: History", publisher: "Britannica", url: "https://www.britannica.com/place/Mexico/History", date: "n.d." },
        { title: "Mexico profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-latin-america-18095241", date: "n.d." },
        { title: "Sheinbaum announces new report on Ayotzinapa ahead of 12th anniversary of mass kidnapping", publisher: "Mexico News Daily", url: "https://mexiconewsdaily.com/politics/sheinbaum-report-ayotzinapa-mananera-monday/", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "mx-10", kind: "past", asOf: "2026-09-29",
      title: "The war of 1846–48",
      dek: "In two years of war the United States took more than half of Mexico's territory. Americans have largely forgotten it; Mexicans have not.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-10-hero.webp",
          alt: "Illustration of a hilltop castle above a green park in Mexico City, with a stone monument of tall columns in the foreground.",
          caption: "Chapultepec Castle, where young cadets died defending Mexico City in September 1847.",
          credit: "AI illustration — not a photograph",
          prompt: "A historic castle on a wooded hilltop above a green park in Mexico City, a white marble monument of six tall columns in the foreground, clear afternoon light, solemn and dignified mood, a few people seen from far behind walking, no faces, no flags, no legible text." },
        { type: "timeline", head: "Losing the north", items: [
          ["1836", "Texas breaks away from Mexico"],
          ["1845", "The United States annexes Texas"],
          ["Apr 1846", "Clash on the disputed Texas border; war declared"],
          ["Mar 1847", "US forces land at Veracruz"],
          ["13 Sep 1847", "Chapultepec falls; Mexico City occupied"],
          ["2 Feb 1848", "Treaty of Guadalupe Hidalgo"],
          ["1853", "Gadsden Purchase"]
        ] },
        { type: "section", head: "Texas", md:
          "Newly independent Mexico invited American settlers into its thinly populated province of Texas. By the 1830s they far outnumbered Mexicans there, and many had brought enslaved people, though Mexico had abolished slavery in 1829. When President Antonio López de Santa Anna centralised power, the Texans revolted and, after defeating him in 1836, declared independence. Mexico never recognised it, and warned that annexation by the United States would mean war. In 1845 Washington annexed Texas." },
        { type: "section", head: "Polk's war", md:
          "President James K. Polk, a believer in 'manifest destiny', wanted California and the lands between. After Mexico refused to sell, he sent troops into territory between the Nueces River and the Rio Grande that both countries claimed. When Mexican forces attacked a patrol in April 1846, Polk told Congress that Mexico had 'shed American blood upon American soil'. A young congressman, Abraham Lincoln, challenged him to name the spot. US armies took California and New Mexico, and in 1847 General Winfield Scott landed at Veracruz and marched on the capital." },
        { type: "section", head: "Defeat", md:
          "Mexico was divided and nearly bankrupt, and its armies were beaten repeatedly. On 13 September 1847 US troops stormed Chapultepec Castle, the military academy above Mexico City; according to Mexican tradition, six young cadets, the Niños Héroes, died rather than surrender, one wrapping himself in the flag. The capital was occupied. Around 25,000 Mexicans and 13,000 Americans died, most of them Americans from disease." },
        { type: "facts", head: "What Mexico lost", rows: [
          ["Treaty", "Guadalupe Hidalgo, 2 February 1848"],
          ["Territory", "More than half of Mexico, about 1.36 million km²"],
          ["Now part of", "California, Nevada, Utah, Arizona, New Mexico and parts of five other US states, plus Texas"],
          ["Payment", "$15 million, plus about $3 million in debts assumed"],
          ["Later", "Gadsden Purchase of 1853 sold another strip"]
        ] },
        { type: "compare", head: "Two memories",
          left: { head: "In Mexico", md:
            "An unjust war of conquest, the 'American intervention', taught in every school; the Niños Héroes are national heroes." },
          right: { head: "In the United States", md:
            "Often a brief chapter of westward expansion, though historians, like Lincoln and Grant at the time, now largely see it as a war of aggression." } },
        { type: "section", head: "Why it still matters", md:
          "The war is why Mexican governments of all colours guard their sovereignty so fiercely, and why US threats to send troops or drones against cartels on Mexican soil touch a raw nerve ([[lesson:mx-7]]). Tens of thousands of Mexicans living in the ceded lands became Americans overnight; their descendants and later migrants make the border region deeply Mexican in culture. Trump's renaming of the Gulf of Mexico as the 'Gulf of America' in 2025 was received in Mexico as the latest in a long history of slights." }
      ],
      takeaways: [
        "After Texas broke away and was annexed by the US, the two countries went to war in 1846.",
        "US forces occupied Mexico City, and in 1848 Mexico ceded more than half its territory.",
        "The war is central to Mexico's defence of its sovereignty against the United States."
      ],
      check: { q: "What did the Treaty of Guadalupe Hidalgo (1848) do?",
        choices: ["Gave Mexico independence from Spain", "Transferred more than half of Mexico's territory to the United States", "Created NAFTA"], answer: 1,
        explain: "Mexico ceded California and much of today's US Southwest in exchange for $15 million." },
      sources: [
        { title: "Mexican-American War", publisher: "Britannica", url: "https://www.britannica.com/event/Mexican-American-War", date: "n.d." },
        { title: "Mexican Cession", publisher: "Britannica", url: "https://www.britannica.com/event/Mexican-Cession", date: "n.d." },
        { title: "Treaty of Guadalupe Hidalgo", publisher: "Britannica", url: "https://www.britannica.com/event/Treaty-of-Guadalupe-Hidalgo", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "mx-11", kind: "past", asOf: "2026-09-29",
      title: "The Revolution and the 1917 Constitution",
      dek: "The revolution that began in 1910 killed perhaps a million people and produced a constitution promising land, labour rights and national control of oil. Its promises still shape Mexican politics.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-11-hero.webp",
          alt: "Illustration of revolutionary horsemen in wide sombreros and bandoliers riding across a dusty plain toward distant mountains, seen from behind.",
          caption: "Peasant armies led by Emiliano Zapata and Pancho Villa fought for land and power.",
          credit: "AI illustration — not a photograph",
          prompt: "A group of revolutionary horsemen in wide straw sombreros and cotton clothing with bandoliers riding across a dusty Mexican plain toward distant blue mountains, seen from behind, agave plants, golden late afternoon light and dust, epic historical mood, no faces, no flags, no legible text." },
        { type: "timeline", head: "Revolution and after", items: [
          ["1876–1911", "Porfirio Díaz rules"],
          ["Nov 1910", "Madero calls for revolt"],
          ["1913", "Madero murdered in General Huerta's coup"],
          ["1914–15", "Revolutionaries fight each other"],
          ["5 Feb 1917", "New constitution adopted at Querétaro"],
          ["1919", "Zapata assassinated"],
          ["1929", "Ruling party founded"],
          ["18 Mar 1938", "Cárdenas nationalises oil"]
        ] },
        { type: "section", head: "Order and progress", md:
          "Porfirio Díaz ruled Mexico for more than three decades, an era known as the Porfiriato. He brought stability, railways and foreign investment, much of it American and British, in mining and oil. But by 1910 a tiny elite owned most of the land, many peasants were landless labourers tied to haciendas by debt, and elections were a sham. When the 80-year-old Díaz claimed yet another victory in 1910, Francisco Madero, a wealthy liberal he had jailed, called for revolt." },
        { type: "section", head: "A decade of war", md:
          "Díaz fled in 1911 and Madero became president, but in 1913 he was overthrown and murdered in a coup by General Victoriano Huerta, with the encouragement of the US ambassador. Revolutionary armies rose against Huerta: Emiliano Zapata's peasants in the south demanding 'land and liberty', Pancho Villa's cavalry in the north, and the 'Constitutionalists' of Venustiano Carranza and Álvaro Obregón. After Huerta fell in 1914 the victors turned on each other. Carranza's side won, but Zapata was killed in 1919 and Carranza himself in 1920." },
        { type: "section", head: "The 1917 Constitution", md:
          "Carranza's constitution, drafted at Querétaro in 1917 and still in force though amended hundreds of times, was among the most radical of its time. Article 27 declared that land, water and subsoil resources belong to the nation, allowing land to be redistributed and foreign-owned mines and oil fields to be claimed. Article 123 guaranteed an eight-hour day, the right to strike and a minimum wage. Article 3 made education secular, and other articles sharply limited the Catholic Church, provoking the Cristero War of 1926–29." },
        { type: "section", head: "Cárdenas", md:
          "The revolution's promises were largely fulfilled by President Lázaro Cárdenas (1934–40). He distributed millions of hectares to peasant communities as *ejidos*, communal farms, organised workers and peasants into the ruling party, and on 18 March 1938 nationalised the oil industry after foreign companies defied a court ruling on wages, creating Pemex. Mexicans celebrated with mass donations to pay the compensation, and 18 March is still commemorated." },
        { type: "compare", head: "Two views of the Revolution's legacy",
          left: { head: "A social revolution", md:
            "It broke the old landowning class, gave land and rights to peasants and workers and built a national identity celebrated in murals and schools." },
          right: { head: "A new elite", md:
            "Its winners became a ruling party that held power for 71 years through patronage and fraud, using revolutionary slogans to justify control." } },
        { type: "section", head: "Why it still matters", md:
          "The revolution's symbols are everywhere. Morena, founded by López Obrador, presents itself as the 'Fourth Transformation', after independence, the liberal Reform of the 1850s and the Revolution. Its defence of Pemex and national energy sovereignty echoes Cárdenas, and its judicial and constitutional reforms are fought over in the language of 1917 (briefings [[lesson:mx-2|#]] and [[lesson:mx-5|#]]). The party that grew out of the revolution, the PRI, now a small opposition force, ruled until 2000 ([[lesson:mx-3]])." }
      ],
      takeaways: [
        "The revolution of 1910–20 overthrew Porfirio Díaz and cost perhaps a million lives.",
        "The 1917 Constitution gave the nation ownership of land and subsoil and guaranteed labour rights.",
        "Lázaro Cárdenas redistributed land and nationalised oil in 1938, founding Pemex."
      ],
      check: { q: "What did President Cárdenas do on 18 March 1938?",
        choices: ["Signed NAFTA", "Nationalised the oil industry", "Overthrew Porfirio Díaz"], answer: 1,
        explain: "He expropriated foreign oil companies, creating the state oil company Pemex." },
      sources: [
        { title: "Mexico: The Mexican Revolution and its aftermath, 1910–40", publisher: "Britannica", url: "https://www.britannica.com/place/Mexico/The-Mexican-Revolution-and-its-aftermath-1910-40", date: "n.d." },
        { title: "Constitution of 1917", publisher: "Britannica", url: "https://www.britannica.com/topic/Constitution-of-1917", date: "n.d." },
        { title: "Emiliano Zapata", publisher: "Britannica", url: "https://www.britannica.com/biography/Emiliano-Zapata", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "mx-4", kind: "players", asOf: "2026-09-29",
      title: "Sheinbaum and her circle",
      dek: "A scientist president, the security chief who leads the cartel war, a mentor in retirement, and a weak opposition.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-4-hero.webp",
          alt: "Illustration of a long lectern in an ornate colonial hall with microphones and rows of empty chairs for reporters, early in the morning.",
          caption: "The mañanera: the president's daily morning press conference at the National Palace.",
          credit: "AI illustration — not a photograph",
          prompt: "An ornate colonial-era hall with carved wooden ceilings and stone arches, a simple lectern with a cluster of microphones facing rows of empty folding chairs for reporters, a large blank screen behind, early morning light through tall windows, no people, no flags, no legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Claudia Sheinbaum", role: "President, since October 2024",
            img: "img/mx/portrait-sheinbaum.webp", source: "Official portrait (Government of Mexico) via Wikimedia Commons; confirm the licence.",
            md: "A physicist and environmental engineer who contributed to UN climate reports; mayor of Mexico City 2018–23. More disciplined and data-driven than her mentor, but loyal to his project." },
          { name: "Omar García Harfuch", role: "Security minister",
            img: "img/mx/portrait-garcia-harfuch.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A former police chief of Mexico City who survived a cartel assassination attempt in 2020; the face of the government's campaign against the cartels and its cooperation with Washington." },
          { name: "Andrés Manuel López Obrador", role: "Former president, 2018–24",
            img: "img/mx/portrait-amlo.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Retired to his ranch in Chiapas and largely silent, but his movement, his allies in Congress and his son in Morena's leadership keep his influence alive." },
          { name: "Marcelo Ebrard", role: "Economy minister",
            img: "img/mx/portrait-ebrard.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A former foreign minister and Sheinbaum's rival for the 2024 nomination; now leads trade negotiations with Washington over tariffs and the USMCA review." },
          { name: "Luisa María Alcalde", role: "Morena party president",
            img: "img/mx/portrait-alcalde.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Runs the ruling party ahead of the 2027 midterms, managing its sometimes unruly allies and factions." }
        ] },
        { type: "section", head: "Sheinbaum's style", md:
          "Where López Obrador improvised, Sheinbaum is methodical. She has kept his welfare programmes and his attacks on the old elites, but has been more willing to work with business and far more active against the cartels, sending record numbers of suspects to the United States. She has handled Trump with a mix of calm negotiation and firm lines, refusing any US military action on Mexican soil. Her approval has stayed near 70% through two years in office." },
        { type: "section", head: "The welfare state", md:
          "Morena's popularity rests on cash. López Obrador made pensions for everyone over 65 a constitutional right, created scholarships for students and paid young apprentices, and more than doubled the real minimum wage. Sheinbaum has added a pension for women aged 60 to 64 and grants for schoolchildren. Around a third of households receive at least one programme. Critics say the spending is unsustainable and buys loyalty; supporters point to official data showing millions lifted out of poverty since 2018." },
        { type: "section", head: "Tensions inside the movement", md:
          "Morena is a broad coalition, from left-wing activists to politicians who defected from the old parties. Several of its senior figures have faced corruption allegations, and in March 2026 its allies, the Greens and the Labour Party, broke ranks for the first time to defeat Sheinbaum's electoral reform, which would have cut the seats and funding they depend on." },
        { type: "section", head: "The opposition", md:
          "The old parties are weak. The conservative PAN and the PRI, which ran together in 2024, won barely a third of the vote, and the small Citizens' Movement (MC) competes for urban and young voters. New anti-Morena energy has come from outside the parties: the 'Generation Z' marches of November 2025, after the murder of Carlos Manzo, an outspoken anti-cartel mayor of Uruapan in Michoacán. Tens of thousands marched in some 50 cities, and a few clashed with police outside the National Palace." }
      ],
      takeaways: [
        "Sheinbaum is more methodical than her mentor and tougher on the cartels, and has kept approval near 70%.",
        "Security minister Omar García Harfuch leads the campaign against the cartels.",
        "The opposition parties are weak; Morena's own allies defeated Sheinbaum's electoral reform in March 2026."
      ],
      check: { q: "Who is Omar García Harfuch?",
        choices: ["Morena's party president", "Mexico's security minister, who leads the fight against the cartels", "The leader of the PAN"], answer: 1,
        explain: "García Harfuch, a former Mexico City police chief, runs the government's security strategy." },
      sources: [
        { title: "Cabinet of Claudia Sheinbaum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cabinet_of_Claudia_Sheinbaum", date: "2026-09" },
        { title: "Mexico's Electoral Reform", publisher: "Inter-American Dialogue", url: "https://thedialogue.org/blogs/2026/03/mexicos-electoral-reform", date: "2026-03" },
        { title: "Gen-Z Anti-Corruption Protests Erupt in Mexico", publisher: "OCCRP", url: "https://www.occrp.org/en/news/gen-z-anti-corruption-protests-erupt-in-mexico", date: "2025-11" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "mx-5", kind: "story", asOf: "2026-09-29",
      title: "Electing the judges",
      dek: "In June 2025 Mexico became the first country to elect all its judges by popular vote. Turnout was 13%, and Morena's candidates swept the Supreme Court.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-5-hero.webp",
          alt: "Illustration of a polling station in a school courtyard with cardboard voting booths and very long ballot sheets, and only a few voters.",
          caption: "Voters faced long ballots listing candidates few had heard of.",
          credit: "AI illustration — not a photograph",
          prompt: "A school courtyard used as a polling station, simple cardboard voting booths, extremely long folded ballot papers on a table, only two or three voters seen from behind, bright midday sun and a painted wall, quiet and sparse, no legible text, no faces." },
        { type: "section", head: "What happened", md:
          "On 1 June 2025 Mexicans voted for all nine Supreme Court justices, members of a new disciplinary tribunal for judges, electoral magistrates and hundreds of federal judges and magistrates. The candidates had been screened by committees of the three branches of government, then placed on ballots with dozens of names, and could not be backed by parties.\n\n" +
          "Only about 13% of voters took part, among the lowest turnouts ever recorded in Latin America according to the OAS. Candidates who appeared on 'guides' circulated by Morena supporters won all nine Supreme Court seats. The new court took office on 1 September 2025, led by Hugo Aguilar, an Indigenous lawyer." },
        { type: "facts", head: "The first judicial election", rows: [
          ["Date", "1 June 2025"],
          ["Turnout", "About 13%"],
          ["Posts filled", "Nine Supreme Court justices and more than 800 other judges and magistrates"],
          ["Result", "Candidates close to Morena won every Supreme Court seat"],
          ["New court sworn in", "1 September 2025"]
        ] },
        { type: "section", head: "Why it happened", md:
          "López Obrador repeatedly clashed with the old Supreme Court, which blocked parts of his energy, security and electoral reforms. He accused judges of corruption and of freeing criminals, and argued that the only cure was to let the people choose them. After Morena won its supermajority in 2024, the reform passed within weeks, despite strikes by court staff and protests by law students." },
        { type: "section", head: "How the ballot worked", md:
          "Voters received as many as six ballots, some with dozens of names and no party labels. Few knew who the candidates were, so Morena supporters and some unions circulated printed 'accordions', folded cheat sheets listing whom to choose; the winners matched them closely. Most of the old Supreme Court, including its chief justice, Norma Piña, who had clashed with López Obrador, chose not to run and stepped down on 31 August 2025. Thousands of experienced judges lost their posts." },
        { type: "compare", head: "Two views",
          left: { head: "Supporters", md:
            "The old judiciary was an unaccountable elite that served the rich. Elections make judges answer to the public, and the new court looks more like Mexico." },
          right: { head: "Critics", md:
            "An election with 13% turnout, party-guided voting and little information captured the courts for one party. Cartels may also find it easier to influence cheap local races." } },
        { type: "section", head: "Why it matters", md:
          "Courts were one of the last checks on Morena's power. Business groups and the US government warned that the reform could weaken investors' protections, a point Washington has raised in the [[USMCA]] review. A second round of judicial elections is due in 2027, alongside the midterms." },
        { type: "section", head: "What's next", md:
          "Watch how the new court rules on cases involving the government, especially on taxes, energy and security, and whether turnout rises when judicial races coincide with the 2027 congressional vote. Law schools and bar associations are also watching whether elected judges can resist pressure from governors, parties and criminal groups in the lower courts, where most ordinary cases are heard." }
      ],
      takeaways: [
        "Mexico elected all nine Supreme Court justices and hundreds of judges on 1 June 2025.",
        "Turnout was about 13%, and candidates close to Morena won every Supreme Court seat.",
        "Supporters call it democratisation of the courts; critics call it capture by one party."
      ],
      check: { q: "What was the turnout in Mexico's first judicial election?",
        choices: ["About 13%", "About 50%", "About 70%"], answer: 0,
        explain: "Roughly 13% of eligible voters took part, one of the lowest turnouts recorded in the region." },
      sources: [
        { title: "Mexico's ruling party expands power in Supreme Court after elections marred by low turnout", publisher: "CNN", url: "https://www.cnn.com/2025/06/03/americas/mexico-morena-supreme-court-judicial-elections-intl-latam", date: "2025-06-03" },
        { title: "Morena Candidates Sweep SCJN Seats in 2025 Mexican Judicial Elections", publisher: "Justice in Mexico", url: "https://justiceinmexico.org/morena-sweeps-scjn/", date: "2025" },
        { title: "Six Facts to Understand Mexico's 2025 Judicial Elections", publisher: "AS/COA", url: "https://www.as-coa.org/articles/six-facts-understand-mexicos-2025-judicial-elections", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "mx-6", kind: "story", asOf: "2026-09-29",
      title: "The death of El Mencho",
      dek: "In February 2026 soldiers killed the leader of Mexico's most powerful cartel. His followers set the country ablaze.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-6-hero.webp",
          alt: "Illustration of a highway at night blocked by burning vehicles, with smoke rising against the orange glow of a city on the hills.",
          caption: "Cartel gunmen blocked roads with burning vehicles across 20 states.",
          credit: "AI illustration — not a photograph",
          prompt: "A multi-lane highway at night blocked by two burning abandoned vehicles, thick smoke rising, the orange glow of a city on hills in the distance, empty roadside, tense and ominous, no people, no weapons, no legible text." },
        { type: "section", head: "What happened", md:
          "On 22 February 2026 Mexican troops, with US intelligence support, raided a hideout in Tapalpa, Jalisco, and seriously wounded Nemesio Oseguera Cervantes, known as 'El Mencho', the founder and leader of the Jalisco New Generation Cartel (CJNG). He died on the way to Mexico City. The US had offered a $15 million reward for him.\n\n" +
          "The cartel's response was immediate. Gunmen set up 252 roadblocks with burning vehicles in 20 states, attacked petrol stations and businesses, and stormed a prison in Puerto Vallarta, freeing 23 inmates. Twenty-five National Guard members were killed in the fighting in Jalisco, along with about 30 suspected gunmen." },
        { type: "facts", head: "The raid and its aftermath", rows: [
          ["Date", "22 February 2026"],
          ["Target", "Nemesio Oseguera, 'El Mencho', leader of the CJNG"],
          ["Roadblocks", "252 in 20 states"],
          ["Killed", "25 National Guard members; about 34 suspected gunmen"],
          ["Epicentre", "Guadalajara, a 2026 World Cup host city"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The CJNG grew over the 2010s into Mexico's most powerful and violent cartel, trafficking fentanyl and methamphetamine and controlling extortion rackets in many states. Washington designated it and other cartels as foreign terrorist organisations in 2025 and pressed Mexico to go after their leaders. Sheinbaum's government had already sent 92 high-value prisoners to the US in three mass transfers between February 2025 and January 2026." },
        { type: "section", head: "The wider picture", md:
          "The government reports that homicides fell by about half between September 2024 and August 2026, to their lowest rate in more than a decade, and killings fell further during the opening days of the World Cup, which Mexico co-hosted with the US and Canada from June 2026. Critics warn that the official figures do not capture disappearances and extortion, which remain widespread, and that killing leaders can splinter cartels into smaller, more violent groups." },
        { type: "section", head: "The fentanyl question", md:
          "For Washington, the cartels matter above all because of fentanyl, a synthetic opioid that killed tens of thousands of Americans a year at the height of the crisis. US officials say Mexican cartels make it in clandestine labs from chemicals largely shipped from China. Mexico has stepped up seizures and lab raids, and US overdose deaths have fallen since 2023. Mexico, in turn, blames American demand and the flood of guns smuggled south from US shops, which arm the cartels." },
        { type: "compare", head: "Two views",
          left: { head: "The government", md:
            "Intelligence-led operations and arrests, not the old 'hugs, not bullets' approach, are cutting violence. Mexico is taking on the cartels itself." },
          right: { head: "Sceptics", md:
            "Decapitating cartels has been tried before and fuels succession wars. Homicide statistics can be massaged, and the missing are not counted." } },
        { type: "section", head: "What's next", md:
          "Who succeeds El Mencho, and whether the CJNG fractures, will shape violence in western Mexico for years. Rival factions of the Sinaloa Cartel, at war with each other since 2024, keep the north-west violent too." }
      ],
      takeaways: [
        "Mexican forces killed CJNG leader 'El Mencho' on 22 February 2026, with US intelligence help.",
        "The cartel retaliated with 252 roadblocks in 20 states; 25 National Guard members died.",
        "The government says homicides have fallen by about half since 2024; critics question the figures."
      ],
      check: { q: "What was El Mencho's cartel?",
        choices: ["The Sinaloa Cartel", "The Jalisco New Generation Cartel (CJNG)", "The Gulf Cartel"], answer: 1,
        explain: "Nemesio Oseguera founded and led the CJNG, Mexico's most powerful cartel." },
      sources: [
        { title: "Mexico cartel leader 'El Mencho' killing sparks chaos", publisher: "CNN", url: "https://www.cnn.com/world/live-news/mexico-el-mencho-killed-travel-chaos-02-23-26-intl-hnk", date: "2026-02-23" },
        { title: "The Security Implications of Decapitating the Cártel de Jalisco Nueva Generación", publisher: "The Soufan Center", url: "https://thesoufancenter.org/intelbrief-2026-february-25/", date: "2026-02-25" },
        { title: "Mexico's Homicides Are Falling, but a Broader Violence Crisis Persists", publisher: "Americas Quarterly", url: "https://americasquarterly.org/article/mexicos-homicides-are-falling-but-a-broader-violence-crisis-persists/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "mx-7", kind: "story", asOf: "2026-09-29",
      title: "Trump, tariffs and sovereignty",
      dek: "Washington wants a new trade deal and a free hand against the cartels. Sheinbaum wants tariff relief and no American troops.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-7-hero.webp",
          alt: "Illustration of a car assembly line in a large factory with robotic arms and car bodies moving along the line.",
          caption: "Mexico's car factories are built into supply chains that cross the US border.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern car assembly line inside a vast bright factory, orange robotic arms welding bare car bodies moving along the line, sparks, clean floors, a few workers in the distance, industrial and precise, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "Trump imposed 25% 'fentanyl' tariffs on Mexico in March 2025, exempting goods that met [[USMCA]] rules, which covered most trade, and added 50% on steel and aluminium and 25% on cars. Sheinbaum avoided retaliation, sent 10,000 National Guard troops to the border, and transferred cartel prisoners to the US. That calm approach won her repeated delays of harsher measures.\n\n" +
          "In 2026 the fight moved to the formal review of the USMCA. By September the two sides had held four rounds of talks. Mexico says US demands fell from 54 to 14, but the biggest remains: Washington wants half of every vehicle to be made in the US, which Mexico rejects. On 16 September Sheinbaum and Trump spoke by phone and she said 'some agreements' had been reached." },
        { type: "section", head: "Troops and strikes", md:
          "The harder issue is security. The Trump administration designated cartels as terrorist groups, and Trump has repeatedly suggested US forces could strike them on Mexican soil. At the UN in September 2026 he called Mexico an 'epicentre' of cartel violence. Sheinbaum has said there will be no US military action in Mexico without her permission: 'Sovereignty is not for sale.' Behind the rhetoric, intelligence sharing has deepened, as the El Mencho raid showed." },
        { type: "facts", head: "The pressure in numbers", rows: [
          ["US tariffs", "50% on steel and aluminium; 25% on non-USMCA cars"],
          ["Mexico's steel exports to the US", "Down 36.6% in 2025"],
          ["Prisoners sent to the US", "92, in three transfers, Feb 2025 to Jan 2026"],
          ["USMCA review", "Fourth round held in September 2026"]
        ] },
        { type: "section", head: "Migration", md:
          "Migration was the other lever. After Trump closed asylum routes in 2025, crossings at the southern US border fell to their lowest level in decades, with Mexico deploying troops to its own borders and routes. Deportations of Mexicans from the US have risen, and Mexico has set up shelters to receive them. Remittances, a key source of income, have come under pressure from a new US tax on money transfers." },
        { type: "compare", head: "Two views",
          left: { head: "Sheinbaum's supporters", md:
            "Her cool head has spared Mexico the worst of Trump's tariffs and kept US troops out, while showing results against the cartels." },
          right: { head: "Her critics", md:
            "Mexico is giving up too much, sending prisoners and troops on demand, without winning real relief, and Washington keeps raising the price." } },
        { type: "section", head: "Why it matters", md:
          "About four-fifths of Mexico's exports go to the US, and millions of jobs depend on the USMCA. If the review fails, the agreement would begin a countdown to expiry in 2036 with annual reviews in the meantime, a cloud over investment. Mexico and Canada are negotiating separately, and both fear being played against each other." },
        { type: "section", head: "What's next", md:
          "Both governments say they want a deal before the US midterms on 3 November. The car rules and the cartel question are the tests." }
      ],
      takeaways: [
        "Sheinbaum has avoided retaliating against Trump's tariffs, preferring negotiation and cooperation on security.",
        "The USMCA review is stuck mainly on US demands that half of every vehicle be made in the US.",
        "Sheinbaum rules out US military action in Mexico without her consent, even as intelligence cooperation deepens."
      ],
      check: { q: "What is the main sticking point in the US–Mexico USMCA talks?",
        choices: ["Oil exports", "US demands for 50% US-made content in vehicles", "Avocado quotas"], answer: 1,
        explain: "Washington wants half of each vehicle's value made in the US; Mexico sees that as an unacceptable precedent." },
      sources: [
        { title: "Tracking the U.S.-Mexico Talks in the USMCA Review", publisher: "AS/COA", url: "https://www.as-coa.org/articles/tracking-us-mexico-talks-usmca-review", date: "2026-09" },
        { title: "Mexico Says US Demands in USMCA Review Fall From 54 to 14", publisher: "Mexico Business News", url: "https://mexicobusiness.news/trade-and-investment/news/mexico-says-us-demands-usmca-review-fall-54-14", date: "2026" },
        { title: "The U.S. and Mexico aren't breaking up over cartels. They're arguing over who's to blame.", publisher: "Houston Public Media", url: "https://www.houstonpublicmedia.org/articles/news/texas/2026/09/28/563004/the-u-s-and-mexico-arent-breaking-up-over-cartels-theyre-arguing-over-whos-to-blame/", date: "2026-09-28" },
        { title: "Mexico's Sheinbaum Says Agreements Reached With Trump, as Washington Races Toward Trade Deal", publisher: "Reuters via US News", url: "https://www.usnews.com/news/top-news/articles/2026-09-18/mexicos-sheinbaum-says-agreements-reached-with-trump-as-washington-races-toward-trade-deal", date: "2026-09-18" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "mx-12", kind: "spotlight", asOf: "2026-09-29",
      title: "The disappeared",
      dek: "More than 130,000 people are registered as missing in Mexico. Their families, most often mothers, search the countryside themselves, digging for remains the state has not found.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-12-hero.webp",
          alt: "Illustration of a group of women in wide hats seen from behind walking across dry scrubland with shovels and long metal rods, under a hot sky.",
          caption: "Searching mothers probe the ground with metal rods to detect the smell of graves.",
          credit: "AI illustration — not a photograph",
          prompt: "A small group of women in wide-brimmed hats and long sleeves seen from behind walking across dry desert scrubland in northern Mexico carrying shovels and long thin metal rods, hot hazy sky, cacti, determined and sorrowful mood, no faces, no legible text." },
        { type: "facts", head: "The crisis in numbers", rows: [
          ["Registered missing", "About 134,000"],
          ["Since", "Most since 2006, when the drug war began"],
          ["Possibly alive", "About 40,000 entries show later activity, a 2026 review found"],
          ["Ayotzinapa", "43 students missing since 2014"],
          ["Teuchitlán", "Ranch found by searchers in Jalisco, March 2025"]
        ] },
        { type: "section", head: "How people disappear", md:
          "Since the government sent the army against the drug cartels in 2006, violence has made disappearance a mass phenomenon. Cartels kidnap rivals, forcibly recruit young men, extort migrants and dispose of bodies in hidden graves, acid or ovens; police and soldiers have also been involved in many cases. Most victims are young men, but women and children disappear too. Very few cases are solved; most families say prosecutors did little until they pushed." },
        { type: "section", head: "Searching mothers", md:
          "In response, families formed search collectives, the *madres buscadoras*. They share tips, probe the ground with metal rods and sniff them for the smell of decomposition, and dig up clandestine graves. Their work has uncovered thousands of bodies. It is dangerous: several searchers have been murdered or have themselves disappeared, and many receive threats. Their slogan, 'Because they took them alive, we want them back alive', is painted on walls across the country." },
        { type: "section", head: "Teuchitlán", md:
          "In March 2025 a search group in Jalisco entered a ranch at Teuchitlán, outside Guadalajara, and found crematoriums, bone fragments and hundreds of shoes and items of clothing. Prosecutors said the cartel used it to recruit and train young men lured by fake job offers. The images caused national outrage; officials initially disputed the collective's account, deepening families' mistrust. The case became a symbol of the state's failure, and the missing were a theme of protests during the 2026 World Cup that Mexico co-hosted." },
        { type: "section", head: "Counting the missing", md:
          "President Sheinbaum's government strengthened the national search commission and the registry and passed laws in 2025 linking it to a biometric identity database. In 2026 it reported that about 40,000 of the registered cases showed signs of life in other official records, such as tax filings. Families and experts welcomed checking but warned against using it to shrink the problem, noting that thousands of unidentified bodies lie in morgues and that many disappearances are never reported." },
        { type: "compare", head: "Two views",
          left: { head: "The government", md:
            "The state is modernising search and identification, and a cleaner registry will focus resources on real cases." },
          right: { head: "Families and rights groups", md:
            "Authorities minimise the crisis, protect local officials tied to cartels and leave mothers to do the state's job." } },
        { type: "section", head: "Why it matters", md:
          "Disappearances measure the reach of organised crime and the weakness of justice more starkly than murder rates. They are also a political test for Morena, which promised to resolve the Ayotzinapa case and has not, and a source of friction with the United States, which cites them in pressing Mexico to act against cartels ([[lesson:mx-6]]). For thousands of families, there is no ending, only the search." }
      ],
      takeaways: [
        "About 134,000 people are registered as missing in Mexico, most since the drug war began in 2006.",
        "Families, mostly mothers, organise their own searches, often at great risk.",
        "The Teuchitlán ranch discovered in 2025 became a symbol of the state's failure to find the missing."
      ],
      check: { q: "Who are the 'madres buscadoras'?",
        choices: ["A cartel", "Mothers who search for their missing relatives", "A government agency"], answer: 1,
        explain: "They are collectives of relatives, mostly mothers, who search for the disappeared and their remains." },
      sources: [
        { title: "Mexico says 40,000 of country's 130,000 disappeared people may be locatable", publisher: "The Spokesman-Review (AP)", url: "https://www.spokesman.com/stories/2026/mar/27/mexico-says-40000-of-countrys-130000-disappeared-p/", date: "2026-03-27" },
        { title: "Mexico's 'missing persons' crisis takes centre stage at the World Cup", publisher: "Euronews", url: "https://www.euronews.com/2026/06/12/mexicos-missing-persons-crisis-takes-centre-stage-at-the-world-cup", date: "2026-06-12" },
        { title: "Madres buscadoras", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Madres_buscadoras", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "mx-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "A dominant president halfway through her term, a trade deal in the balance, and midterms coming in 2027.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/mx/mx-8-hero.webp",
          alt: "Illustration of a busy border crossing at dawn with lanes of trucks and cars waiting to cross, and a desert city beyond.",
          caption: "The border is where trade, migration and security meet.",
          credit: "AI illustration — not a photograph",
          prompt: "A wide border crossing at dawn, many lanes of trucks and cars queued under a long canopy of inspection booths, a sprawling desert city and brown hills beyond, pale golden light and haze, busy but orderly, no flags, no legible text, no faces." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Sheinbaum, two years into a six-year term; approval near 70%.\n" +
          "- **Congress:** Morena and allies hold two-thirds, but the allies defeated her electoral reform.\n" +
          "- **Security:** homicides down sharply, per official figures; the CJNG in flux after El Mencho.\n" +
          "- **Trade:** USMCA review under way; US tariffs on steel, aluminium and cars remain.\n" +
          "- **Next vote:** midterms and judicial elections in June 2027." },
        { type: "section", head: "The economy", md:
          "Growth has been weak since 2024, held back by US tariffs, uncertainty over the USMCA and tight government budgets. Sheinbaum's 'Plan México' aims to attract investment and replace imports from Asia. Her government reported record foreign investment in her second annual report on 1 September. Pemex, the heavily indebted state oil company, remains a drain on public finances." },
        { type: "section", head: "Democracy under strain", md:
          "Sheinbaum's first electoral reform, which would have cut party funding and changed how seats are allocated by proportional representation, failed in March 2026 when her allies voted against it; a smaller 'Plan B' followed. The electoral institute, INE, has lost funding and staff, and journalists continue to be killed at among the highest rates in the world. Morena's supporters see a government finally serving ordinary Mexicans; its critics see institutions being hollowed out, and warn that a party which controls the courts, the watchdogs and the electoral rules could be very hard to vote out." },
        { type: "section", head: "The 2027 midterms", md:
          "In June 2027 Mexicans elect a new Chamber of Deputies, 17 governors and a second batch of judges. It will be Sheinbaum's first test at the ballot box. Morena starts as the clear favourite against a divided opposition, but its allies' rebellion over electoral reform shows that the coalition behind the supermajority can fracture." },
        { type: "section", head: "Energy", md:
          "A 2025 reform restored the state's dominance over oil and electricity, giving Pemex and the state power company priority over private firms. Pemex carries debts of around $100 billion and needs regular government support. Investors worry that favouring state firms will slow the build-out of renewable energy and power lines that new factories need, a key concern for companies moving production from Asia." },
        { type: "section", head: "Three scenarios", md:
          "- **Deal and consolidation.** A USMCA agreement lifts tariffs, and Morena sweeps the 2027 midterms.\n" +
          "- **Squeeze.** Talks drag on, the economy stalls, and violence returns after the World Cup lull.\n" +
          "- **Confrontation.** A US strike on cartels inside Mexico triggers a crisis between the neighbours." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **1 October 2026:** Sheinbaum's second anniversary in office\n" +
          "- **Ongoing:** the fate of the CJNG after El Mencho\n" +
          "- **3 November 2026:** US midterms, the informal deadline for a trade deal\n" +
          "- **Ongoing:** the USMCA review\n" +
          "- **June 2027:** midterm and judicial elections" },
        { type: "section", head: "Connections", md:
          "Mexico's story runs through [[unit:us]] (trade, drugs, migration and security), [[unit:ca]] (its USMCA partner), [[unit:cn]] (whose exports Washington wants Mexico to keep out), [[unit:ve]] (US military action in the region) and [[unit:br]] (Latin America's other giant)." }
      ],
      takeaways: [
        "Sheinbaum remains highly popular two years into her term.",
        "The USMCA review and US tariffs are the biggest economic risks.",
        "Critics warn of weakened institutions; the June 2027 midterms are the next test."
      ],
      check: { q: "What happened to Sheinbaum's first electoral reform in March 2026?",
        choices: ["It passed unanimously", "It failed when Morena's allies voted against it", "The Supreme Court struck it down"], answer: 1,
        explain: "The Greens and the Labour Party broke ranks, leaving the reform short of the two-thirds majority it needed." },
      sources: [
        { title: "Claudia Sheinbaum presenta su segundo informe de gobierno", publisher: "SIPAZ", url: "https://sipaz.wordpress.com/2026/09/03/nacional-claudia-sheinbaum-presenta-su-segundo-informe-de-gobierno/", date: "2026-09-03" },
        { title: "New Electoral Laws Could Accelerate Mexico's Democratic Decline", publisher: "Baker Institute", url: "https://www.bakerinstitute.org/research/new-electoral-laws-could-accelerate-mexicos-democratic-decline", date: "2026" },
        { title: "USMCA Review 2026", publisher: "CSIS", url: "https://www.csis.org/analysis/usmca-review-2026", date: "2026" }
      ]
    }

  ]
});
