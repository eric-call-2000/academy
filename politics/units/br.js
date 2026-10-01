/* ============================================================
   Unit 26 — Brazil 🇧🇷
   Research note and sources: tools/research/br.md
   Current as of 29 Sep 2026, five days before the 4 October
   first round.
   ============================================================ */
window.POLITICS.addUnit("br", {
  id: "br",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "br-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Brazil in brief",
      dek: "Latin America's giant votes on 4 October in a rematch of sorts: Lula against the son of the jailed ex-president he beat.",
      blocks: [
        { type: "map", src: "maps/br.svg",
          alt: "Locator map of South America with Brazil highlighted, covering nearly half the continent, bordering every South American country except Chile and Ecuador, with a long Atlantic coastline, and a small globe showing its place in the world.",
          caption: "Brazil covers nearly half of South America and borders ten countries.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Brasília (largest city: São Paulo)"],
          ["People", "About 213 million"],
          ["System", "Federal presidential republic"],
          ["President", "Luiz Inácio Lula da Silva (Workers' Party), since January 2023"],
          ["Congress", "513 deputies and 81 senators, dominated by centre-right parties"],
          ["Election", "4 October 2026; runoff 25 October if needed"],
          ["Biggest trading partner", "China"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Brazil is the world's seventh most populous country and one of its ten biggest economies. It is a farming superpower, the top exporter of soybeans, beef, coffee, sugar and orange juice, and a major producer of oil and iron ore. It holds about 60% of the Amazon rainforest, which makes it central to any fight against climate change; it hosted the COP30 climate summit in the Amazon city of Belém in November 2025.\n\n" +
          "It is also a founding member of [[BRICS]] and a leader of the 'Global South', trading heavily with [[unit:cn|China]] while keeping ties with the [[unit:us|United States]] and Europe. And it is a test of how a democracy deals with an attempted coup: in 2025 its Supreme Court convicted a former president of plotting to overturn an election." },
        { type: "section", head: "Who holds power", md:
          "Luiz Inácio Lula da Silva, a former metalworker and union leader, is serving his third term as president, having governed first from 2003 to 2010. He narrowly beat the far-right incumbent Jair Bolsonaro in 2022. Congress is dominated by a loose bloc of centre-right parties, the 'Centrão', which trades votes for budget money, and by right-wing parties including Bolsonaro's Liberal Party (PL)." },
        { type: "section", head: "The mood in 2026", md:
          "Brazil is split almost exactly in half. Lula, now 80, is running for a fourth term. His main rival is Senator Flávio Bolsonaro, eldest son of Jair Bolsonaro, who is in prison serving a 27-year sentence for the coup plot. In late September polls showed Lula ahead in the first round, around 40% to 36% in Datafolha, but a runoff on 25 October too close to call. Inflation and interest rates have eased from their peaks, but many voters say their lives have not improved." },
        { type: "section", head: "What Brazil wants", md:
          "Lula wants to reduce poverty and inequality, protect the Amazon, reform taxes, and make Brazil a bridge between rich and developing countries, independent of both Washington and Beijing. Flávio Bolsonaro promises lower taxes, a hard line on crime, closer ties with Trump's America, and freedom for his father." },
        { type: "section", head: "Land and people", md:
          "Most Brazilians live near the Atlantic coast, in huge cities such as São Paulo and Rio de Janeiro. The south and south-east are richer and more industrial; the north-east is poorer and Lula's stronghold; the centre-west is the booming farm frontier and Bolsonaro country. More than half of Brazilians identify as Black or of mixed race, and racial and regional inequality remain among the highest in the world." },
        { type: "callout", tone: "why", md:
          "Brazil's election will decide the direction of Latin America's largest country, the fate of the Amazon, and whether the political movement of a president convicted of plotting a coup returns to power." }
      ],
      takeaways: [
        "Brazil is a farming, mining and oil giant that holds most of the Amazon rainforest.",
        "Lula, 80, faces Flávio Bolsonaro, son of the jailed ex-president, in the 4 October election.",
        "Polls show Lula ahead in the first round but a runoff too close to call."
      ],
      check: { q: "Who is Lula's main challenger in 2026?",
        choices: ["Jair Bolsonaro", "Flávio Bolsonaro", "Tarcísio de Freitas"], answer: 1,
        explain: "Jair Bolsonaro is barred from office and in prison; his eldest son Flávio is the Liberal Party's candidate. Tarcísio chose to seek re-election as governor of São Paulo." },
      sources: [
        { title: "Poll Tracker: Brazil's 2026 Presidential Election", publisher: "AS/COA", url: "https://www.as-coa.org/articles/poll-tracker-brazils-2026-presidential-election", date: "2026-09" },
        { title: "Lula Holds Lead Over Flavio Bolsonaro Ahead of Brazil Election, Datafolha Poll Shows", publisher: "Reuters via US News", url: "https://www.usnews.com/news/world/articles/2026-09-24/lula-holds-lead-over-flavio-bolsonaro-ahead-of-brazil-election-datafolha-poll-shows", date: "2026-09-24" },
        { title: "Brazil: Meet the Candidates 2026", publisher: "Americas Quarterly", url: "https://www.americasquarterly.org/article/brazil-meet-the-candidates-2026/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "br-2", kind: "power", asOf: "2026-09-29",
      title: "A strong president and a stronger Congress",
      dek: "Brazil's president needs a coalition of dozens of parties, and its Supreme Court is among the most powerful in the world.",
      blocks: [
        { type: "diagram", src: "img/br/br-2-power.svg",
          alt: "Diagram of power in Brazil. Voting is compulsory, and the president is elected in two rounds for a four-year term, renewable once in a row; Lula holds the office. The president governs with a coalition in Congress, which has 513 deputies and 81 senators, dominated by the centre-right 'Centrão' and the right, and controls a large share of the budget through amendments. The eleven-member Supreme Federal Court judges politicians and can strike down laws; it convicted Jair Bolsonaro in 2025. Twenty-six states and the Federal District have elected governors.",
          caption: "Presidents must buy support from a fragmented Congress, and the courts often have the last word.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The president", md:
          "The president is head of state and government, elected for four years and allowed one consecutive re-election; a former president may run again after a gap, which is how Lula returned in 2022. Voting is compulsory for literate citizens aged 18 to 70, and elections use electronic voting machines that count results within hours. If no candidate wins more than half the valid votes on the first Sunday of October, the top two meet in a runoff three weeks later." },
        { type: "section", head: "Coalition presidentialism", md:
          "Brazil has one of the most fragmented legislatures in the world, with about 20 parties in the Chamber of Deputies. No president's party comes close to a majority, so every president must assemble a coalition, handing out ministries and budget money. Scholars call this 'coalition presidentialism'. The key swing bloc is the Centrão, a group of pragmatic centre-right parties that have backed governments of left and right in return for patronage." },
        { type: "section", head: "Congress holds the purse", md:
          "Over the past decade Congress has taken control of a growing share of the budget through 'parliamentary amendments', money that individual lawmakers direct to projects in their home areas. Critics say the system is opaque and wasteful; the Supreme Court has ordered more transparency. The presidents of the Chamber, Hugo Motta, and of the Senate, Davi Alcolumbre, are among the most powerful people in Brasília. In 2026 Congress overrode Lula's veto of a law to cut sentences for the 2023 riots and the coup plot." },
        { type: "section", head: "The Supreme Court", md:
          "The Supreme Federal Tribunal (STF) has 11 justices appointed by the president and confirmed by the Senate, serving until 75. It interprets the constitution and tries sitting politicians. Justice Alexandre de Moraes led the investigations into online disinformation, the 8 January 2023 riots and the coup plot, and his panel convicted Bolsonaro in 2025. To his supporters he saved Brazilian democracy; to his critics he is a judge with too much power, who has ordered social media accounts and even the platform X blocked." },
        { type: "section", head: "States and governors", md:
          "Brazil is a federation of 26 states and the Federal District around Brasília. Governors command state police forces, run schools and hospitals, and are often presidential contenders: São Paulo's governor runs an economy larger than most countries'. States also control much of the fight against crime, which is why the violence of drug gangs and militias in cities such as Rio de Janeiro is as much a state as a federal issue. In October 2025 a police raid against a gang in Rio's favelas killed more than 120 people, the deadliest in the city's history, and split opinion along the same lines as the national election." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "Broad coalitions force compromise, and strong courts and electoral authorities stopped an attempted coup when other institutions wavered." },
          right: { head: "Its critics", md:
            "Coalitions are bought with pork and ministries, Congress controls too much money with too little accountability, and unelected judges have become political actors." } }
      ],
      takeaways: [
        "Brazil's president must govern through coalitions in a Congress of about 20 parties.",
        "Congress controls a growing share of the budget through lawmakers' amendments.",
        "The Supreme Court, which convicted Bolsonaro, is one of the most powerful and contested institutions."
      ],
      check: { q: "What is the Centrão?",
        choices: ["Brazil's central bank", "A bloc of pragmatic centre-right parties that trade support for patronage", "A left-wing party"], answer: 1,
        explain: "The Centrão has backed governments of left and right in return for ministries and budget money." },
      sources: [
        { title: "Brazil", publisher: "Britannica", url: "https://www.britannica.com/place/Brazil", date: "n.d." },
        { title: "Congress Overrides Lula Veto, Cuts Bolsonaro Sentence to 22 Years", publisher: "The Rio Times", url: "https://www.riotimesonline.com/brazil-dosimetria-law-bolsonaro-veto-override/", date: "2026" },
        { title: "Brazil profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-latin-america-18909529", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "br-9", kind: "founding", asOf: "2026-09-29",
      title: "Independence or death: 1822",
      dek: "Brazil broke from Portugal not through a long revolutionary war but when the Portuguese king's own son declared it independent. It became an empire, and only in 1889 a republic.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-9-hero.webp",
          alt: "Illustration of horsemen in early-19th-century uniforms on a grassy riverbank near São Paulo, seen from behind, with one rider raising a hat.",
          caption: "Prince Pedro declared independence beside the Ipiranga stream on 7 September 1822.",
          credit: "Illustration — not a photograph",
          prompt: "A group of horsemen in early-19th-century military uniforms on a grassy riverbank beside a small stream near São Paulo, seen from behind, the leading rider raising his hat in the air, tropical trees and rolling hills, bright afternoon light, heroic historical painting style, no faces, no flags, no legible text." },
        { type: "timeline", head: "Colony to republic", items: [
          ["1500", "Portuguese fleet reaches Brazil"],
          ["1808", "Portuguese royal court arrives in Rio"],
          ["1815", "Brazil raised to a kingdom alongside Portugal"],
          ["7 Sep 1822", "Pedro declares independence"],
          ["1825", "Portugal recognises Brazil"],
          ["1831–1889", "Reign of Pedro II (from 1840 in person)"],
          ["15 Nov 1889", "The army proclaims a republic"]
        ] },
        { type: "section", head: "A court in the tropics", md:
          "In 1807 Napoleon's armies invaded Portugal. The royal family and some 10,000 courtiers fled to Rio de Janeiro under British naval escort, making Brazil the only colony in history to become the seat of its empire. The prince regent, later King João VI, opened Brazil's ports to foreign trade, founded a bank, a press and schools, and in 1815 raised Brazil to a kingdom equal to Portugal. When João returned to Lisbon in 1821, he left his son Pedro in charge." },
        { type: "section", head: "The cry of Ipiranga", md:
          "Portugal's parliament then tried to reduce Brazil to a colony again and ordered Pedro home. Encouraged by Brazilian elites and advisers such as José Bonifácio, he refused. On 7 September 1822, beside the Ipiranga stream near São Paulo, he is said to have drawn his sword and cried 'Independence or death!'. He was crowned Emperor Pedro I in December. Portuguese troops held out in some provinces into 1823, and Portugal recognised independence in 1825, after Britain mediated and Brazil agreed to pay compensation." },
        { type: "section", head: "One empire, not many republics", md:
          "Spain's American empire broke into many republics after long wars. Brazil stayed a single country, and a monarchy. Historians credit the continuity of the crown, a landowning elite united by fear of slave revolts, and the suppression of regional rebellions in the 1830s and 1840s. Pedro I, unpopular and autocratic, abdicated in 1831 in favour of his five-year-old son. Pedro II ruled for nearly half a century, a stable if slave-based parliamentary monarchy that fought the devastating Paraguayan War of 1864–70." },
        { type: "section", head: "The republic", md:
          "The monarchy fell soon after it abolished slavery in 1888 ([[lesson:br-10]]), losing the support of planters, while army officers influenced by positivism wanted a modern republic. On 15 November 1889 Marshal Deodoro da Fonseca led a bloodless coup, and the imperial family went into exile. The motto on the new flag, 'Order and Progress', comes from that positivist movement. The 1891 constitution created a federal republic, dominated by the coffee and dairy elites of São Paulo and Minas Gerais." },
        { type: "compare", head: "Two readings of 1822",
          left: { head: "A national achievement", md:
            "Brazil won independence with little bloodshed and kept its vast territory whole, the base of today's continental country." },
          right: { head: "A change at the top", md:
            "Independence was arranged by elites to keep power and slavery intact; ordinary Brazilians had little say." } },
        { type: "section", head: "Why it still matters", md:
          "Brazil's size, its single language and its sense of being a nation apart from Spanish-speaking neighbours go back to this peaceful, top-down independence. So does a political tradition in which change is often negotiated among elites, and in which the army sees itself as the guardian of the republic it founded in 1889, a self-image that shaped the 1964 coup and the 2022–23 plot (briefings [[lesson:br-11|#]] and [[lesson:br-5|#]]). 7 September remains Independence Day, marked with military parades." }
      ],
      takeaways: [
        "The Portuguese court moved to Rio in 1808, and Brazil became a kingdom equal to Portugal.",
        "Prince Pedro declared independence on 7 September 1822 and became emperor.",
        "Brazil stayed a united monarchy until the army proclaimed a republic on 15 November 1889."
      ],
      check: { q: "Who declared Brazil's independence in 1822?",
        choices: ["A slave rebellion", "Pedro, son of the Portuguese king", "Marshal Deodoro da Fonseca"], answer: 1,
        explain: "Pedro, left in charge by his father João VI, declared independence and became Emperor Pedro I." },
      sources: [
        { title: "Brazil: Independence", publisher: "Britannica", url: "https://www.britannica.com/place/Brazil/Independence", date: "n.d." },
        { title: "Pedro I", publisher: "Britannica", url: "https://www.britannica.com/biography/Pedro-I", date: "n.d." },
        { title: "Proclamation of the Republic (Brazil)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Proclamation_of_the_Republic_(Brazil)", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "br-3", kind: "history", asOf: "2026-09-29",
      title: "Empire, dictatorship, democracy",
      dek: "A former Portuguese colony that was once an empire, lived under military rule for two decades, and has been polarised since the 2010s.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-3-hero.webp",
          alt: "Illustration of a modernist capital city with a pair of tall twin towers, two dome-shaped buildings, one upturned and one inverted, and a long reflecting pool under a vast sky.",
          caption: "Brasília, the planned capital inaugurated in 1960.",
          credit: "Illustration — not a photograph",
          prompt: "A modernist government complex on a flat plain, twin tall slender office towers between a shallow upturned white bowl and an inverted white dome, a long reflecting pool, enormous blue sky with scattered clouds, clean lines, no people, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1822", "Independence from Portugal as an empire"],
          ["1888", "Slavery abolished, the last in the Americas"],
          ["1964", "Military coup; 21 years of dictatorship"],
          ["1988", "Democratic constitution"],
          ["2003", "Lula's first term begins"],
          ["2016", "Dilma Rousseff impeached"],
          ["2018", "Jair Bolsonaro elected"],
          ["2022", "Lula defeats Bolsonaro"]
        ] },
        { type: "section", head: "1. Colony and empire", md:
          "Portugal colonised Brazil from 1500, and some 4 to 5 million enslaved Africans were shipped there, more than to any other country. When Napoleon invaded Portugal in 1807, the royal court fled to Rio de Janeiro. In 1822 the king's son declared Brazil independent as an empire, which lasted until 1889. Brazil was the last country in the Americas to abolish slavery, in 1888, a legacy still visible in stark racial inequality." },
        { type: "section", head: "2. Vargas and the generals", md:
          "Getúlio Vargas ruled from 1930 to 1945 and again in the 1950s, building a modern state, labour laws and the oil company Petrobras. In 1964 the military overthrew a left-leaning president, with US support, and ruled for 21 years, torturing and killing opponents while presiding over an 'economic miracle' and heavy borrowing. The generals handed power back gradually, and a new constitution in 1988 guaranteed broad rights and social spending." },
        { type: "section", head: "3. The Real and the Lula years", md:
          "After years of hyperinflation, Fernando Henrique Cardoso's 'Real Plan' stabilised the currency in 1994. Lula, elected in 2002, rode a commodity boom to expand welfare, notably the Bolsa Família cash transfers, and lifted tens of millions out of poverty. He left office in 2010 with approval above 80%. His successor, Dilma Rousseff, faced recession and the 'Car Wash' (Lava Jato) investigation into bribery at Petrobras, which implicated politicians of almost every party." },
        { type: "section", head: "4. Impeachment and the rise of Bolsonaro", md:
          "Rousseff was impeached and removed in 2016 over budget manipulation, which her supporters call a parliamentary coup. Lula was convicted of corruption in 2017 and jailed in 2018, which kept him out of that year's election; the Supreme Court later annulled his convictions on procedural grounds. Jair Bolsonaro, a former army captain and fringe congressman who praised the dictatorship, won in 2018 on anger at crime and corruption." },
        { type: "section", head: "5. 2022 and 8 January", md:
          "In 2022 Lula beat Bolsonaro in the runoff by 50.9% to 49.1%, the closest result since democracy returned. Bolsonaro never clearly conceded. On 8 January 2023, a week after Lula took office, thousands of his supporters stormed and ransacked Congress, the Supreme Court and the presidential palace in Brasília, demanding military intervention. Investigators later uncovered a wider plot, which [[lesson:br-5]] explains. More than a thousand rioters were charged, and hundreds were convicted by the Supreme Court, some to sentences of more than a decade; those sentences, and calls for an amnesty, became a rallying cause for the right." }
      ],
      takeaways: [
        "Brazil was a Portuguese colony and an empire, and the last country in the Americas to abolish slavery.",
        "A military dictatorship ruled from 1964 to 1985; the 1988 constitution restored democracy.",
        "Lula beat Bolsonaro by 50.9% to 49.1% in 2022, and Bolsonaro's supporters stormed Brasília's institutions on 8 January 2023."
      ],
      check: { q: "Why did Lula not run in the 2018 election?",
        choices: ["He retired", "He had been convicted of corruption and was in prison", "He was term-limited"], answer: 1,
        explain: "Lula was jailed in 2018 after a Car Wash conviction; the Supreme Court later annulled his convictions, letting him run in 2022." },
      sources: [
        { title: "Brazil: History", publisher: "Britannica", url: "https://www.britannica.com/place/Brazil/History", date: "n.d." },
        { title: "Brazil profile: Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-latin-america-19359111", date: "n.d." },
        { title: "Jair Bolsonaro", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jair_Bolsonaro", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "br-10", kind: "past", asOf: "2026-09-29",
      title: "Slavery and its legacy",
      dek: "Brazil received more enslaved Africans than any other country and was the last in the Americas to abolish slavery, in 1888. The inequalities it created are still visible.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-10-hero.webp",
          alt: "Illustration of the old colonial centre of Salvador, Bahia, with pastel houses and cobbled streets climbing a hill, and a church at the top.",
          caption: "Salvador, Bahia, was a centre of the slave trade and is now the heart of Afro-Brazilian culture.",
          credit: "Illustration — not a photograph",
          prompt: "The historic colonial centre of Salvador, Bahia, with pastel-coloured baroque houses and steep cobbled streets climbing a hill toward a church, a few people seen from behind walking, warm tropical afternoon light, dignified and reflective mood, no faces, no legible text." },
        { type: "facts", head: "By the numbers", rows: [
          ["Enslaved Africans brought to Brazil", "About 4 to 5 million, around 40% of all brought to the Americas"],
          ["Slave trade banned", "1850 (effectively)"],
          ["Abolition", "13 May 1888, the 'Golden Law'"],
          ["Freed in 1888", "More than 700,000 people"],
          ["Black or mixed-race today", "55.5% of Brazilians (2022 census)"]
        ] },
        { type: "section", head: "Built on slavery", md:
          "From the 1500s, Portuguese settlers brought enslaved Africans to work sugar plantations in the northeast, then gold mines in Minas Gerais in the 1700s and coffee farms in the southeast in the 1800s. Brazil received about 4 to 5 million people, far more than the United States. Conditions were brutal, and it was often cheaper for owners to buy new captives than to keep people alive. Enslaved people resisted: escaped communities called *quilombos* formed in the interior, the largest, Palmares, holding out for most of the 1600s under leaders such as Zumbi." },
        { type: "section", head: "Slow abolition", md:
          "Under British pressure, Brazil banned the Atlantic slave trade in 1831, but the law was ignored and hundreds of thousands more were brought in until the trade was effectively ended in 1850. Abolition came step by step: the 1871 'Law of the Free Womb' freed children born to enslaved mothers, and an 1885 law freed those over 60. A mass abolitionist movement grew, and enslaved people fled plantations in large numbers. On 13 May 1888 Princess Isabel signed the Golden Law, abolishing slavery without compensation to owners, or to the freed." },
        { type: "section", head: "Freedom without land", md:
          "The freed received no land, education or support. Governments instead encouraged European immigration, partly with the declared aim of 'whitening' the population. Many former slaves and their descendants moved to the edges of cities, the start of the favelas. For much of the twentieth century Brazil called itself a 'racial democracy', where mixing had made racism irrelevant; activists argued that this myth hid deep discrimination." },
        { type: "section", head: "Race today", md:
          "In the 2022 census, 45.3% of Brazilians identified as *pardo* (mixed) and 10.2% as *preto* (Black): together a majority. Black and mixed-race Brazilians earn much less on average, are over-represented in prisons, and make up most of the victims of homicide and of police killings ([[lesson:br-12]]). Since 2012 a quota law has reserved half of the places at federal universities for public-school students, with shares for Black, mixed-race and Indigenous students, transforming campuses. 20 November, the anniversary of Zumbi's death, became a national holiday in 2024." },
        { type: "compare", head: "Two views of affirmative action",
          left: { head: "Supporters", md:
            "Quotas are a modest correction to centuries of exclusion, and have opened universities and the civil service to Black Brazilians." },
          right: { head: "Critics", md:
            "In a deeply mixed country, racial categories are hard to define; help should be based on income, not colour." } },
        { type: "section", head: "Why it matters", md:
          "Brazil has the largest population of African descent outside Africa, and race shapes its politics: Lula's coalition is strongest among poorer, darker-skinned voters, especially in the northeast, while Bolsonaro's movement has opposed quotas. Debates over reparations, the recognition of quilombo communities' land and the representation of Black Brazilians in politics, where they remain under-represented, are all legacies of 1888." }
      ],
      takeaways: [
        "Brazil received about 4 to 5 million enslaved Africans, more than any other country.",
        "It was the last country in the Americas to abolish slavery, on 13 May 1888, with no help for the freed.",
        "Black and mixed-race Brazilians are now a majority but face deep inequality; university quotas began in 2012."
      ],
      check: { q: "When did Brazil abolish slavery?",
        choices: ["1822", "1850", "1888"], answer: 2,
        explain: "Princess Isabel signed the Golden Law on 13 May 1888, making Brazil the last country in the Americas to abolish slavery." },
      sources: [
        { title: "Lei Áurea", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lei_%C3%81urea", date: "n.d." },
        { title: "Afro-Brazilians in Brazil", publisher: "Minority Rights Group", url: "https://minorityrights.org/communities/afro-brazilians/", date: "n.d." },
        { title: "Affirmative action in Brazil: global lessons on racial justice", publisher: "Oxford Review of Economic Policy", url: "https://academic.oup.com/oxrep/article/40/3/642/7907282", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "br-11", kind: "past", asOf: "2026-09-29",
      title: "The dictatorship, 1964–1985",
      dek: "For 21 years generals ruled Brazil, torturing opponents and presiding over an economic boom. An amnesty let everyone move on without trials, which is why the past keeps returning.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-11-hero.webp",
          alt: "Illustration of a huge crowd seen from behind filling a wide avenue in São Paulo in 1984, holding plain yellow banners.",
          caption: "Millions rallied for direct presidential elections, the 'Diretas Já' campaign, in 1984.",
          credit: "Illustration — not a photograph",
          prompt: "A huge crowd in 1980s clothing seen from behind filling a wide city avenue in São Paulo lined with modernist buildings, many holding plain yellow banners and balloons without text, evening light, hopeful and massive, no faces, no legible text, no flags." },
        { type: "timeline", head: "The military years", items: [
          ["31 Mar–1 Apr 1964", "Coup against President João Goulart"],
          ["13 Dec 1968", "Institutional Act No. 5 (AI-5)"],
          ["1968–73", "The 'economic miracle'"],
          ["1979", "Amnesty law; exiles return"],
          ["1984", "Diretas Já protests"],
          ["1985", "Civilian president chosen"],
          ["1988", "New democratic constitution"],
          ["2014", "National Truth Commission reports"]
        ] },
        { type: "section", head: "The coup", md:
          "In the early 1960s, amid high inflation and Cold War fears, President João Goulart promised land reform and reached out to unions and the left. Conservatives, business leaders, the Church hierarchy and much of the press feared a communist takeover. On 31 March 1964 the army moved against him, and he fled to Uruguay without a fight. The United States, which had prepared naval support in case of resistance, recognised the new regime at once. Many Brazilians expected a brief intervention; the generals stayed 21 years." },
        { type: "section", head: "Years of lead", md:
          "The regime kept a tame Congress and held elections for some posts, but chose presidents itself. In December 1968, facing student protests and armed left-wing groups, it issued Institutional Act No. 5, which closed Congress, suspended habeas corpus and imposed censorship. The 'years of lead' followed: the 2014 National Truth Commission confirmed 434 people killed or disappeared, and found torture was systematic, with estimates of 20,000 victims. Among the tortured was a young guerrilla, Dilma Rousseff, later president." },
        { type: "section", head: "Miracle and debt", md:
          "The regime delivered spectacular growth, over 10% a year between 1968 and 1973, the 'Brazilian miracle', along with dams, highways into the Amazon and big state companies. But the gains went mostly to the better-off, and growth was financed by foreign borrowing. When oil prices and interest rates soared, Brazil was left with huge debts and inflation that would plague the 1980s." },
        { type: "section", head: "Slow opening", md:
          "From the mid-1970s the generals began a slow 'opening'. The 1979 amnesty let exiles return and freed political prisoners, but also protected soldiers and police from prosecution; the Supreme Court upheld it in 2010. Strikes led by a union leader named Lula shook the car factories of São Paulo. In 1984 millions rallied for direct elections, the Diretas Já campaign; Congress refused, but in 1985 its electoral college chose an opposition civilian. The 1988 constitution restored full democracy." },
        { type: "compare", head: "Two views of 1964",
          left: { head: "Defenders", md:
            "The armed forces saved Brazil from communism and modernised the economy; abuses were limited and answered by left-wing violence." },
          right: { head: "Most historians and victims", md:
            "It was a coup that destroyed democracy, tortured thousands and left its crimes unpunished, a lesson for 2023." } },
        { type: "section", head: "Why it still matters", md:
          "Jair Bolsonaro, a former army captain, praised the dictatorship and a notorious torturer throughout his career. His conviction in 2025 for plotting a coup after the 2022 election was the first time senior military officers were convicted of attacking democracy, something the 1979 amnesty had prevented for the dictatorship's crimes ([[lesson:br-5]]). The Oscar-winning 2024 film I'm Still Here, about the family of a congressman who disappeared in 1971, brought the era to a new generation." }
      ],
      takeaways: [
        "The military overthrew President Goulart in 1964 and ruled until 1985.",
        "Under AI-5 from 1968, torture was systematic; a truth commission confirmed 434 killed or disappeared.",
        "A 1979 amnesty protected the torturers, and debate over the dictatorship shaped reactions to Bolsonaro's coup plot."
      ],
      check: { q: "What did the 1979 amnesty law do?",
        choices: ["Punished the military's crimes", "Freed political prisoners and also protected state agents from prosecution", "Created direct presidential elections"], answer: 1,
        explain: "It allowed exiles to return but also shielded soldiers and police accused of torture and killings." },
      sources: [
        { title: "Brazil: Panel Details 'Dirty War' Atrocities", publisher: "Human Rights Watch", url: "https://www.hrw.org/news/2014/12/10/brazil-panel-details-dirty-war-atrocities", date: "2014-12-10" },
        { title: "Brazil panel details dictatorship's brutality", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2014/12/11/brazil-panel-details-dictatorships-brutality", date: "2014-12-11" },
        { title: "ICTJ Welcomes the Historic Final Report from Brazil's National Truth Commission", publisher: "International Center for Transitional Justice", url: "https://www.ictj.org/latest-news/ictj-welcomes-historic-final-report-brazil%E2%80%99s-national-truth-commission", date: "2014" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "br-4", kind: "players", asOf: "2026-09-29",
      title: "Lula, the Bolsonaros and the judge",
      dek: "An 80-year-old president seeking a fourth term, a jailed ex-president, his son, and the judge who convicted him.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-4-hero.webp",
          alt: "Illustration of a crowded political rally at night on a wide avenue, a sea of people seen from behind waving blank flags in red and in green and yellow.",
          caption: "Brazil's politics has split into two camps: red for Lula's Workers' Party, green and yellow for Bolsonaro's supporters.",
          credit: "Illustration — not a photograph",
          prompt: "A huge political rally at night on a wide city avenue seen from behind the crowd, half the crowd waving plain red flags and half plain green-and-yellow flags with no symbols, stage lights and smoke in the distance, energetic and divided, no faces, no legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Luiz Inácio Lula da Silva", role: "President (Workers' Party), 2003–10 and since 2023",
            img: "img/br/portrait-lula.webp", source: "Official portrait (Agência Brasil, CC BY) via Wikimedia Commons; confirm the licence.",
            md: "Born into poverty in the north-east, lost a finger in a factory accident, led strikes against the dictatorship and founded the Workers' Party. Jailed in 2018, cleared, and elected again in 2022." },
          { name: "Flávio Bolsonaro", role: "Senator for Rio de Janeiro; Liberal Party candidate",
            img: "img/br/portrait-flavio-bolsonaro.webp", source: "Official portrait (Agência Senado, CC BY) via Wikimedia Commons; confirm the licence.",
            md: "Jair Bolsonaro's eldest son, chosen as the right's candidate with his father's blessing in December 2025; a more measured speaker than his father, promising to pardon him." },
          { name: "Jair Bolsonaro", role: "President 2019–22; in prison since November 2025",
            img: "img/br/portrait-jair-bolsonaro.webp", source: "Official portrait (Agência Brasil, CC BY) via Wikimedia Commons; confirm the licence.",
            md: "Serving 27 years and 3 months for plotting to overturn the 2022 election; barred from office. Still the dominant figure on the right." },
          { name: "Alexandre de Moraes", role: "Supreme Court justice",
            img: "img/br/portrait-moraes.webp", source: "Official portrait (STF) via Wikimedia Commons; confirm the licence.",
            md: "Led the coup case and the fight against online disinformation; sanctioned by the US in 2025, a measure lifted that December. Hero to one half of Brazil, villain to the other." },
          { name: "Tarcísio de Freitas", role: "Governor of São Paulo",
            img: "img/br/portrait-tarcisio.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Bolsonaro's former infrastructure minister, seen by markets as the right's strongest candidate, who chose instead to seek re-election as governor. A likely contender in 2030." }
        ] },
        { type: "section", head: "Lula's third term", md:
          "Lula returned with a pragmatic coalition stretching from the left to the centre-right. His government restored Bolsa Família, cut Amazon deforestation sharply, passed a long-awaited reform of consumption taxes, and exempted people earning up to 5,000 reais a month from income tax from 2026, paid for by a minimum tax on the very rich. But growth has been modest, the central bank raised its key rate to 15% to fight inflation, and his approval has hovered in the low 40s, with disapproval slightly higher." },
        { type: "section", head: "The right after Bolsonaro", md:
          "Bolsonaro's conviction left the right without its leader. Governors such as Tarcísio de Freitas of São Paulo, Ratinho Júnior of Paraná and Romeu Zema of Minas Gerais all had ambitions, but Bolsonaro's family insisted on keeping control of the movement. Flávio's candidacy, confirmed at the Liberal Party convention on 25 July 2026, disappointed some business leaders who preferred Tarcísio, but his poll numbers have climbed. Newer faces include Renan Santos of the anti-establishment Missão party, popular with young voters." },
        { type: "section", head: "The Workers' Party", md:
          "Lula's Workers' Party (PT), founded in 1980 by unionists, Catholic activists and intellectuals, is Brazil's largest left-wing party and has won five of the last six presidential elections it contested. It is strongest in the north-east and among poorer voters, and weakest among evangelicals and the middle classes of the south. Much of its identity still rests on Lula himself." },
        { type: "section", head: "Lula's age", md:
          "Lula turns 81 in October. He had emergency surgery for bleeding on the brain after a fall in late 2024. His Workers' Party has no obvious successor, which is one reason he chose to run again; his opponents make his age an issue, and his supporters point to his energy on the campaign trail." }
      ],
      takeaways: [
        "Lula's third term brought an income-tax exemption for lower earners and falling deforestation, but only modest growth.",
        "Jair Bolsonaro is in prison; his son Flávio carries the family's banner.",
        "Justice Alexandre de Moraes is the most polarising figure in Brazil's institutions."
      ],
      check: { q: "Why is Tarcísio de Freitas not running for president?",
        choices: ["He was convicted", "He chose to seek re-election as governor of São Paulo", "He is too young"], answer: 1,
        explain: "Tarcísio opted to run again for governor, leaving the right's presidential nomination to Flávio Bolsonaro." },
      sources: [
        { title: "Brazil's 2026 Presidential Candidates: Lula, Bolsonaro, and Other Top Contenders", publisher: "AS/COA", url: "https://www.as-coa.org/articles/brazils-2026-presidential-candidates-lula-bolsonaro-and-other-top-contenders", date: "2026" },
        { title: "Brazil's Flávio Bolsonaro secures presidential bid despite challenges", publisher: "CNBC", url: "https://www.cnbc.com/2026/07/25/brazils-flvio-bolsonaro-secures-presidential-bid-despite-challenges.html", date: "2026-07-25" },
        { title: "Flavio Bolsonaro enters Brazil's 2026 presidential race with father's nod", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/12/6/flavio-bolsonaro-enters-brazils-2026-presidential-race-with-fathers-nod", date: "2025-12-06" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "br-5", kind: "story", asOf: "2026-09-29",
      title: "A president convicted",
      dek: "In September 2025 Brazil's Supreme Court found Jair Bolsonaro guilty of plotting a coup. Two months later he was in prison.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-5-hero.webp",
          alt: "Illustration of a modernist courtroom with a long curved bench of empty high-backed chairs beneath a large crucifix and tall windows.",
          caption: "Bolsonaro was tried by a five-judge panel of the Supreme Federal Court.",
          credit: "Illustration — not a photograph",
          prompt: "A modernist courtroom with a long curved wooden judges' bench and five empty high-backed black leather chairs, a simple wooden crucifix on a pale wall above, tall narrow windows with afternoon light, polished floor, solemn and still, no people, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "Federal police concluded in 2024 that Bolsonaro and his inner circle had plotted to stay in power after losing the 2022 election. According to prosecutors, the plan included a draft decree to annul the result, pressure on military commanders to back it, and a scheme called 'Green and Yellow Dagger' to assassinate Lula, his vice-president and Justice Moraes. The army and air force chiefs refused to go along.\n\n" +
          "On 11 September 2025 a five-judge panel of the Supreme Court convicted Bolsonaro, by four votes to one, of five crimes, including attempting a coup and leading an armed criminal organisation, and sentenced him to 27 years and 3 months. Several generals and former ministers were also convicted, the first time senior officers have been punished for a coup attempt in Brazil's history." },
        { type: "facts", head: "The case", rows: [
          ["Verdict", "11 September 2025, by 4 votes to 1"],
          ["Sentence", "27 years and 3 months"],
          ["Arrested", "22 November 2025, after tampering with his ankle monitor"],
          ["Final appeals rejected", "25 November 2025"],
          ["Sentence-cutting law", "Passed over Lula's veto, then suspended by Moraes on 9 May 2026"]
        ] },
        { type: "section", head: "Prison and the fight over his sentence", md:
          "Bolsonaro had been under house arrest. On 22 November 2025 police took him into custody after he damaged his electronic ankle monitor, which the court treated as an escape attempt; he said he had been confused by medication. His final appeals were rejected days later. Congress then passed a 'dosimetry' law reducing sentences for the 8 January rioters and the coup plotters. Lula vetoed it in January 2026; Congress overrode the veto; and on 9 May, a day after it took effect, Moraes suspended it pending a full court ruling." },
        { type: "compare", head: "Two views",
          left: { head: "Supporters of the verdict", md:
            "Brazil did what few countries have done: held a former president and generals accountable for trying to destroy democracy, after a fair trial with extensive evidence." },
          right: { head: "Bolsonaro's supporters", md:
            "The trial was political persecution by a biased court that also acted as investigator and victim. Bolsonaro never carried out a coup, and he should be free to run." } },
        { type: "section", head: "Why it matters", md:
          "The case split Brazil and drew in Washington: Donald Trump called the trial a 'witch hunt' and cited it when imposing 50% tariffs on Brazil in 2025 ([[lesson:br-6]]). An amnesty or pardon for Bolsonaro is now a central issue in the election: Flávio Bolsonaro has promised one if he wins." },
        { type: "section", head: "What's next", md:
          "The Supreme Court still has to rule on the sentence-cutting law, and the next president's stance on a pardon could decide how long Bolsonaro stays in prison. His lawyers have repeatedly sought house arrest on health grounds, and he has left prison for hospital treatment, then returned. Whether he stays behind bars could depend on the vote." }
      ],
      takeaways: [
        "Bolsonaro was convicted on 11 September 2025 of plotting a coup and sentenced to 27 years and 3 months.",
        "He was jailed in November 2025 after tampering with his ankle monitor.",
        "Congress passed a law to cut his sentence over Lula's veto, but Justice Moraes suspended it in May 2026."
      ],
      check: { q: "What was the 'Green and Yellow Dagger' plan, according to prosecutors?",
        choices: ["A tax reform", "A scheme to assassinate Lula, his vice-president and Justice Moraes", "An Amazon protection plan"], answer: 1,
        explain: "Prosecutors said the plot included plans to kill the president-elect, his running mate and the Supreme Court justice." },
      sources: [
        { title: "Brazil's former president Bolsonaro sentenced to 27 years for plotting attempted coup", publisher: "Euronews", url: "https://www.euronews.com/embed/2830625", date: "2025-09-11" },
        { title: "Brazil judge bars law that could reduce Bolsonaro's 27-year prison sentence", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/5/9/brazil-judge-bars-law-that-could-reduce-bolsonaros-27-year-prison-sentence", date: "2026-05-09" },
        { title: "Brazil's President Lula vetoes bill to trim Bolsonaro prison sentence", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/1/9/brazils-president-lula-vetoes-bill-to-trim-bolsonaro-prison-sentence", date: "2026-01-09" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "br-6", kind: "story", asOf: "2026-09-29",
      title: "Trump's tariffs and a thaw that didn't last",
      dek: "Washington punished Brazil over Bolsonaro's trial, then made up with Lula, then hit Brazil again in 2026.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-6-hero.webp",
          alt: "Illustration of a coffee plantation on rolling green hills with rows of coffee bushes and sacks of beans stacked beside a farm road.",
          caption: "Coffee and beef were among the Brazilian exports hit, then spared, by US tariffs.",
          credit: "Illustration — not a photograph",
          prompt: "Rolling green hills covered in neat rows of coffee bushes, burlap sacks of coffee beans stacked beside a red dirt farm road, a small farmhouse in the distance, warm late-afternoon light, peaceful and agricultural, no people close up, no legible text or logos." },
        { type: "section", head: "What happened", md:
          "In July 2025 Donald Trump announced a 50% [[tariff]] on Brazilian goods, one of the highest on any country, explicitly citing the 'witch hunt' against Bolsonaro and Brazilian court orders against US social media platforms. Many products, including aircraft and orange juice, were exempted. Washington also imposed Magnitsky [[sanctions]] on Justice Alexandre de Moraes and revoked visas for other judges.\n\n" +
          "Lula refused to back down, calling it an attack on Brazil's sovereignty, and his approval rose. Then the tone changed: after Trump and Lula met in the autumn, Washington dropped tariffs on beef, coffee and fruit in November 2025 and lifted the sanctions on Moraes in December." },
        { type: "section", head: "Round two", md:
          "The thaw did not last. In February 2026 the US Supreme Court struck down Trump's emergency tariffs (see [[unit:us]]). Trump turned to other trade laws, and on 15 July 2026, after an investigation, imposed 25% tariffs on a range of Brazilian goods, accusing Brazil of disadvantaging US payment companies by promoting PIX, its free instant-payment system, and of censoring US platforms. Lula called Trump in August to seek new talks." },
        { type: "section", head: "What is PIX?", md:
          "PIX is a free instant-payment system launched by Brazil's central bank in 2020. Anyone can send money in seconds using a phone number or ID, and it is now used by most adults, from street vendors to large firms, cutting into the fees earned by card companies. Washington says it gives a state-run system an unfair advantage over American firms such as Visa and Mastercard; Brazil calls it a public good and a model copied by other countries." },
        { type: "section", head: "Brazil's response", md:
          "Brazil passed a 'reciprocity law' in 2025 allowing it to retaliate against trade measures, and complained to the World Trade Organization, but Lula chose to negotiate rather than hit back. Exporters of coffee, beef and machinery have looked harder at China, the Middle East and Europe, and Brazil pushed to conclude the long-delayed trade deal between the EU and the Mercosur bloc." },
        { type: "facts", head: "The tariff saga", rows: [
          ["July 2025", "50% tariffs announced, citing Bolsonaro's trial"],
          ["July 2025", "US sanctions on Justice Moraes"],
          ["November 2025", "Tariffs on beef, coffee and fruit lifted"],
          ["December 2025", "Sanctions on Moraes lifted"],
          ["15 July 2026", "New 25% tariffs over PIX and platform rules"]
        ] },
        { type: "compare", head: "Two views",
          left: { head: "Lula's camp", md:
            "Brazil stood up to bullying, defended its courts and its payment system, and found new markets in Asia and Europe." },
          right: { head: "The Bolsonaro camp", md:
            "Lula's hostility to Trump and closeness to China cost Brazilian exporters dearly. A friendlier government would get a better deal." } },
        { type: "section", head: "Why it matters", md:
          "The US is Brazil's second-biggest trading partner after [[unit:cn|China]], which buys most of its soybeans and iron ore. The tariffs pushed Brazil further toward China and the [[BRICS]], and in the election they cut both ways: Lula gained from a rally-round-the-flag effect in 2025, while Flávio Bolsonaro argues he could repair relations with Trump." },
        { type: "section", head: "What's next", md:
          "A new US–Brazil negotiation, and possibly Trump's comments on the election, could affect the runoff." }
      ],
      takeaways: [
        "Trump imposed 50% tariffs on Brazil in 2025, citing Bolsonaro's trial, and sanctioned Justice Moraes.",
        "Relations thawed in late 2025, with tariffs on food eased and the sanctions lifted.",
        "In July 2026 Washington imposed new 25% tariffs over PIX and platform rules."
      ],
      check: { q: "What reason did Washington give for its July 2026 tariffs on Brazil?",
        choices: ["Deforestation", "Brazil's PIX payment system disadvantaging US companies, and censorship of US platforms", "Brazil's BRICS membership"], answer: 1,
        explain: "The US said PIX disadvantaged American payment firms and that court orders censored US social media platforms." },
      sources: [
        { title: "2025–2026 Brazil–United States diplomatic dispute", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025%E2%80%932026_Brazil%E2%80%93United_States_diplomatic_dispute", date: "2026" },
        { title: "Understanding Trump's Shift on Brazil", publisher: "Americas Quarterly", url: "https://www.americasquarterly.org/article/understanding-trumps-shift-on-brazil/", date: "2025" },
        { title: "Lula Calls Trump to Seek Renewed Talks Over US Tariffs on Brazil", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-21/lula-calls-trump-to-seek-renewed-talks-over-us-tariffs-on-brazil", date: "2026-08-21" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "br-7", kind: "story", asOf: "2026-09-29",
      title: "The race for 4 October",
      dek: "Lula leads the first round, but the runoff is a coin toss.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-7-hero.webp",
          alt: "Illustration of an electronic voting machine on a small table behind a cardboard privacy screen, with a numeric keypad and a small screen.",
          caption: "Brazilians vote on electronic machines by typing their candidate's number.",
          credit: "Illustration — not a photograph",
          prompt: "A simple electronic voting machine with a large numeric keypad and a small blank screen on a school table behind a grey cardboard privacy screen, a classroom polling station, soft daylight, civic and ordinary, no people, no legible text or logos." },
        { type: "section", head: "What's happening", md:
          "More than 150 million Brazilians are due to vote on 4 October for president, governors, the whole Chamber of Deputies, two-thirds of the Senate and state assemblies. If no presidential candidate wins over half the valid votes, the top two meet in a runoff on 25 October.\n\n" +
          "Lula, of the Workers' Party, with Vice-President Geraldo Alckmin again as his running mate, leads the first round in most polls. Flávio Bolsonaro, of the Liberal Party, with Alagoas deputy Alfredo Gaspar as his running mate, is close behind. Behind them come Renan Santos of Missão, Ronaldo Caiado and Romeu Zema." },
        { type: "facts", head: "Late-September polls", rows: [
          ["Datafolha, 22–24 Sep (first round)", "Lula 40%, Flávio Bolsonaro 36%"],
          ["Datafolha (runoff)", "Lula 47%, Flávio Bolsonaro 45%"],
          ["Quaest, late Sep (first round)", "Lula 37%, Flávio Bolsonaro 33%"],
          ["Quaest (runoff)", "Tied at 41% each"]
        ] },
        { type: "section", head: "The issues", md:
          "Lula runs on his record: the income-tax exemption for lower earners, higher minimum wages, social programmes and falling unemployment, and he warns that the Bolsonaros threaten democracy. Flávio Bolsonaro runs on crime, which is the top worry for many voters, on taxes and the cost of living, and on an amnesty for his father. Quaest found 48% of voters thought the economy had worsened over the past year, and Lula's disapproval has risen even in his north-eastern heartland." },
        { type: "section", head: "Why it's so close", md:
          "Brazil has been split into two roughly equal camps since 2014. Most voters have made up their minds and deeply distrust the other side, so the campaign is about turning out the base and winning the few undecided, above all evangelical Christians, now about a third of the population and leaning right, and poorer voters in the big south-eastern cities. Lula's age, 80, and the Bolsonaro family's legal troubles weigh on each side." },
        { type: "section", head: "Beyond the presidency", md:
          "The same ballot will decide who controls Congress and the states. The right is expected to stay strong in the Chamber and Senate, where two-thirds of seats are up, which matters for any future amnesty, for impeachment and for confirming Supreme Court justices. In São Paulo, Tarcísio de Freitas is the favourite to be re-elected governor, making him the right's natural leader if Flávio loses." },
        { type: "compare", head: "Two pitches",
          left: { head: "Lula", md:
            "Stability, social protection and democracy: 'Brazil is back' in the world, and poverty is falling." },
          right: { head: "Flávio Bolsonaro", md:
            "Change: less tax, a tough line on crime, better relations with the US, and an end to what he calls judicial persecution." } },
        { type: "section", head: "What to watch", md:
          "Whether Lula can win outright on 4 October (unlikely, on current polls), how the minor candidates' voters split in a runoff, and whether the loser accepts the result. Brazil's electoral court counts the votes within hours, and it has warned that it will act quickly against disinformation and deepfakes." }
      ],
      takeaways: [
        "Brazil votes on 4 October 2026, with a runoff on 25 October if no one wins a majority.",
        "Lula leads the first round in late-September polls; the runoff against Flávio Bolsonaro is roughly tied.",
        "Crime, the economy and an amnesty for Jair Bolsonaro are central issues."
      ],
      check: { q: "What did late-September polls suggest about a Lula–Flávio Bolsonaro runoff?",
        choices: ["A Lula landslide", "A near-tie", "A clear Bolsonaro win"], answer: 1,
        explain: "Datafolha had Lula ahead 47–45, and Quaest had them tied at 41%, both within the margin of error." },
      sources: [
        { title: "Brazil election: Lula and Flavio Bolsonaro tied in latest polls", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/22/brazil-election-lula-and-flavio-bolsonaro-tied-in-latest-polls", date: "2026-09-22" },
        { title: "Lula Holds Lead Over Flavio Bolsonaro Ahead of Brazil Election, Datafolha Poll Shows", publisher: "Reuters via US News", url: "https://www.usnews.com/news/world/articles/2026-09-24/lula-holds-lead-over-flavio-bolsonaro-ahead-of-brazil-election-datafolha-poll-shows", date: "2026-09-24" },
        { title: "Quaest Poll Shows Lula and Flávio Bolsonaro Tied at 41 in the Runoff a Week Before Brazil Votes", publisher: "The Rio Times", url: "https://www.riotimesonline.com/quaest-poll-lula-flavio-tied-41-runoff-september-28-2026/", date: "2026-09-28" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "br-12", kind: "spotlight", asOf: "2026-09-29",
      title: "Crime, police and the favelas",
      dek: "Brazil has one of the world's highest numbers of murders and of killings by police. Organised crime has spread nationwide, and security is a top issue in the 2026 election.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-12-hero.webp",
          alt: "Illustration of a Rio de Janeiro favela of brick houses stacked up a steep green hillside at dusk, with lights coming on and the city below.",
          caption: "About a fifth of Rio's population lives in favelas, many controlled by gangs or militias.",
          credit: "Illustration — not a photograph",
          prompt: "A Rio de Janeiro favela of unpainted brick and colourful houses stacked densely up a steep green hillside at dusk, small lights coming on, the city and the sea below, purple sky, atmospheric and complex mood, no people visible up close, no legible text." },
        { type: "facts", head: "Violence in numbers", rows: [
          ["Killings by police, 2024", "6,243, more than 17 a day"],
          ["Deadliest police raid", "At least 121 dead, Rio, 28 October 2025"],
          ["Biggest gangs", "PCC (São Paulo), Comando Vermelho (Rio)"],
          ["Victims", "Mostly young, Black and poor men"]
        ] },
        { type: "section", head: "Gangs from the prisons", md:
          "Brazil's biggest criminal organisations were born in its overcrowded prisons: the Comando Vermelho (Red Command) in Rio in the 1970s and the Primeiro Comando da Capital (PCC) in São Paulo in 1993. They grew rich from cocaine passing from the Andes to Europe and Africa, and have since spread across the country and into fuel, gold mining in the Amazon and even financial markets. In Rio, 'militias' of former and serving police control whole neighbourhoods, charging for security, gas and internet." },
        { type: "section", head: "The raid", md:
          "On 28 October 2025 about 2,500 police entered the Alemão and Penha favela complexes in Rio to target the Comando Vermelho. At least 121 people were killed, including four police officers, making it the deadliest police operation in the city's history. Residents laid dozens of bodies in a square. The state's governor called it a success against 'narco-terrorists'; the UN and the Inter-American Commission on Human Rights condemned it and called for investigations. Polls suggested many Rio residents supported the operation." },
        { type: "section", head: "Police who kill", md:
          "Brazilian police killed 6,243 people in 2024, according to the Brazilian Public Security Forum, more than 17 a day; most were young Black men. Some states, such as São Paulo, cut killings for a time by giving officers body cameras, while others, like Bahia, now record the most. At the same time, dozens of police officers are killed each year, and many Brazilians support tough tactics, summed up in the slogan 'a good criminal is a dead criminal'." },
        { type: "section", head: "Falling murders", md:
          "Overall, murders have fallen in recent years from their peak in 2017, when more than 60,000 people were killed. Experts credit demographic change, better policing in some states and truces between gangs, which can break down at any time. Lula's government has proposed a constitutional amendment giving the federal government a bigger role in public security, traditionally run by the states, and laws to seize organised crime's money." },
        { type: "compare", head: "Two approaches",
          left: { head: "The right", md:
            "Treat the gangs as terrorists, back the police, build more prisons and lower the age of criminal responsibility." },
          right: { head: "The left and many experts", md:
            "Raids kill many but change little; follow the money, reform the prisons and bring services to the favelas." } },
        { type: "section", head: "Why it matters", md:
          "Security is one of voters' top concerns and favours the right, whose candidates promise to confront the gangs head on ([[lesson:br-7]]). It also affects Brazil's foreign relations: the Trump administration has discussed designating the PCC and Comando Vermelho as terrorist organisations, which Brasília fears could justify foreign interference. And it lies at the root of deep inequalities of race and place ([[lesson:br-10]])." }
      ],
      takeaways: [
        "Gangs born in prisons, the PCC and the Comando Vermelho, now operate nationwide and abroad.",
        "Police killed more than 6,000 people in 2024; a Rio raid in October 2025 left at least 121 dead.",
        "Murders have fallen since 2017, but security remains a central election issue."
      ],
      check: { q: "What happened in Rio de Janeiro on 28 October 2025?",
        choices: ["A peace deal with gangs", "The deadliest police raid in the city's history", "The COP30 climate summit"], answer: 1,
        explain: "At least 121 people, including four police officers, were killed in an operation against the Comando Vermelho." },
      sources: [
        { title: "At least 121 dead in Brazil after largest and most lethal police raid", publisher: "ABC News", url: "https://abcnews.com/International/121-dead-brazil-after-largest-lethal-police-raid/story?id=126983426", date: "2025-10-30" },
        { title: "Behind Rio's deadly raid: Brazil's billion-dollar criminal gangs", publisher: "CNN", url: "https://www.cnn.com/2025/11/09/americas/brazil-rio-deadly-raid-criminal-gangs-latam-intl", date: "2025-11-09" },
        { title: "Polícia matou mais de 17 pessoas por dia no Brasil em 2024, diz estudo", publisher: "CNN Brasil", url: "https://www.cnnbrasil.com.br/nacional/brasil/policia-matou-mais-de-17-pessoas-por-dia-no-brasil-em-2024-diz-estudo/", date: "2025" },
        { title: "IACHR strongly condemns police raid that left 121 people dead in Rio de Janeiro", publisher: "Inter-American Commission on Human Rights", url: "https://www.oas.org/en/iachr/jsForm/?File=%2Fen%2Fiachr%2Fmedia_center%2Fpreleases%2F2025%2F221.asp", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "br-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "Five days before the vote: a divided country, a president in prison, and a race that could go either way.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br/br-8-hero.webp",
          alt: "Illustration of the edge of the Amazon rainforest seen from the air, dense green forest on one side and cleared cattle pasture on the other, with a winding river.",
          caption: "The Amazon: deforestation fell sharply under Lula, but the frontier is still under pressure.",
          credit: "Illustration — not a photograph",
          prompt: "An aerial view of the edge of a dense tropical rainforest, lush green canopy on one side and cleared brown and pale-green cattle pasture on the other, a brown river winding between them, scattered white clouds casting shadows, striking contrast, no people, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Election:** first round 4 October, runoff 25 October; Lula slightly ahead.\n" +
          "- **Bolsonaro:** in prison; a sentence-cutting law suspended by the Supreme Court.\n" +
          "- **Economy:** inflation about 4.5%; the key rate cut from 15% to 13.75% since March.\n" +
          "- **US:** new 25% tariffs since July; talks sought.\n" +
          "- **Climate:** Amazon deforestation down sharply since 2022." },
        { type: "section", head: "The Amazon", md:
          "Under Bolsonaro, deforestation in the Amazon reached its highest level in more than a decade. Under Lula, enforcement returned and clearing fell by about half by 2024. Brazil hosted the COP30 climate summit in Belém in November 2025 and launched a fund to pay countries to keep tropical forests standing. But Lula has also backed oil exploration off the mouth of the Amazon, angering environmentalists, and the farm lobby in Congress has loosened environmental licensing rules." },
        { type: "section", head: "Brazil in the world", md:
          "Lula has sought an independent foreign policy: close to [[unit:cn|China]], active in the [[BRICS]], critical of Israel's war in Gaza, and cautious over [[unit:ua|Ukraine]], while hosting global summits. He condemned the US raid that captured Venezuela's Nicolás Maduro in January 2026 as a violation of sovereignty, even though he had refused to recognise Maduro's 2024 re-election. A Bolsonaro victory would realign Brazil with Trump's Washington and with right-wing governments such as Argentina's." },
        { type: "section", head: "The economy", md:
          "Unemployment fell to record lows in 2025, and the minimum wage has risen above inflation, but prices of food and services have strained household budgets. Inflation of about 4.5% sits at the top of the central bank's target range, and after holding its key rate at 15% for months, the bank has cut it to 13.75%. Investors worry about rising public debt and the cost of Lula's election-year spending." },
        { type: "section", head: "After the vote", md:
          "Whoever wins will face a fragmented Congress, a Supreme Court at the centre of politics, and a country where half the voters will feel they lost. The transition in 2022 ended in a riot; a smooth one in 2026, whoever wins, would be a sign of real democratic resilience, watched closely across Latin America." },
        { type: "section", head: "Three scenarios", md:
          "- **Lula wins a fourth term.** Continuity at home and abroad, but a hostile Congress and a fight over Bolsonaro's sentence.\n" +
          "- **Flávio Bolsonaro wins.** A pardon or amnesty for his father, closer ties with Trump, and a clash with the Supreme Court.\n" +
          "- **Contested result.** A narrow margin and claims of fraud test Brazil's institutions again, as in 2022." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **4 October 2026:** first round\n" +
          "- **25 October 2026:** runoff, if needed\n" +
          "- **1 January 2027:** inauguration\n" +
          "- **Pending:** the Supreme Court's ruling on the sentence-cutting law" },
        { type: "section", head: "Connections", md:
          "Brazil's story runs through [[unit:us]] (tariffs and the Bolsonaro trial), [[unit:cn]] (its biggest customer), [[unit:ar]] (its neighbour and rival, now under a Bolsonaro ally), [[unit:ve]] (a crisis on its northern border), [[unit:in]] and [[unit:za]] (BRICS partners)." }
      ],
      takeaways: [
        "Brazil votes on 4 October; a Lula–Flávio Bolsonaro runoff on 25 October looks likely and close.",
        "Amazon deforestation fell sharply under Lula, and Brazil hosted COP30 in 2025.",
        "The result will decide Bolsonaro's fate and Brazil's alignment between Washington and its BRICS partners."
      ],
      check: { q: "When would a presidential runoff be held?",
        choices: ["4 October", "25 October", "1 January"], answer: 1,
        explain: "If no one wins a majority on 4 October, the top two meet on 25 October; the winner takes office on 1 January 2027." },
      sources: [
        { title: "Brazil Elections 2026: Dates, Polls, Candidates", publisher: "The Rio Times", url: "https://www.riotimesonline.com/brazil-elections-2026-complete-guide", date: "2026-09" },
        { title: "Elections to Watch in 2026: Brazil", publisher: "ISPI", url: "https://www.ispionline.it/en/publication/elections-to-watch-in-2026-brazil-226491", date: "2026" },
        { title: "Trump's tariffs are giving Lula a boost and shifting Brazil's geopolitics", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/blogs/new-atlanticist/trumps-tariffs-are-giving-lula-a-boost-and-shifting-brazils-geopolitics/", date: "2025" }
      ]
    }

  ]
});
