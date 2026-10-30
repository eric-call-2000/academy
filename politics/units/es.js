/* ============================================================
   Unit 32 — Spain 🇪🇸
   Research note and sources: tools/research/es.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("es", {
  id: "es",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "es-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Spain in brief",
      dek: "Europe's fastest-growing big economy, a fragmented parliament, a housing crisis, and an election on 29 November 2026.",
      blocks: [
        { type: "map", src: "maps/es.svg",
          alt: "Locator map of the Iberian Peninsula with Spain highlighted, bordering Portugal to the west and France to the north-east, with the Balearic Islands in the Mediterranean and a small globe showing its place in the world.",
          caption: "Spain covers most of the Iberian Peninsula. The Canary Islands, off north-west Africa, and the cities of Ceuta and Melilla in North Africa are also Spanish but lie outside this frame.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Madrid"],
          ["People", "About 49 million"],
          ["System", "Parliamentary monarchy with 17 autonomous communities"],
          ["Head of state", "King Felipe VI, since 2014"],
          ["Prime minister", "Pedro Sánchez (Socialist PSOE), since 2018"],
          ["Economy", "Fourth largest in the eurozone; growth about 2.5% in 2026"],
          ["Next election", "29 November 2026, called early"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Spain is the EU's fourth-largest economy and, for the third year running, the fastest-growing big economy in the rich world. It is a bridge to Latin America, where hundreds of millions speak Spanish, and to North Africa, which lies 14 kilometres away across the Strait of Gibraltar. Its government has also become one of Europe's most outspoken voices on two hot issues: it refused NATO's new spending target and has been the sharpest Western critic of Israel's war in Gaza." },
        { type: "section", head: "Who holds power", md:
          "Pedro Sánchez, a Socialist, has been prime minister since 2018 without ever having a majority of his own. Since 2023 he has led a minority coalition with the left-wing alliance Sumar, depending on votes from Basque and Catalan parties, some of which want independence. When the Catalan party Junts withdrew its support in October 2025, the government lost its working majority, and in October 2026 Congress rejected its emergency housing decrees. Sánchez called an election for 29 November." },
        { type: "section", head: "The mood in 2026", md:
          "The economy is strong on paper: record employment, rising wages and booming tourism. But rents in Madrid, Barcelona and other cities have soared, unemployment is still about 10%, the highest in the EU alongside Finland's, and young Spaniards struggle to leave home. Corruption cases touching Sánchez's party and family have hurt the government. Polls suggest the conservative People's Party (PP) and the far-right Vox could together win a majority." },
        { type: "section", head: "A country of nations", md:
          "Spain is one of Europe's most decentralised states. Catalonia, the Basque Country and Galicia have their own languages, and Catalonia and the Basque Country have strong movements that see themselves as nations. Catalonia's failed independence bid in 2017 ([[lesson:es-11]]) still shapes national politics, because the parties that led it now hold the balance of power in Madrid." },
        { type: "section", head: "What Spain wants", md:
          "Spain wants a strong, more integrated EU with shared debt for investment and defence, a two-state solution in the Middle East, open trade with Latin America, and EU help with migration from Africa. Under Sánchez it argues that social spending and the green transition matter as much as military budgets. A PP government would keep most of this but move closer to NATO's targets and to Washington." },
        { type: "callout", tone: "why", md:
          "Spain shows the two faces of today's Europe: an economy that is doing better than its neighbours', and a politics that is splintering. The 29 November vote will decide whether one of the EU's last big left-led governments survives." }
      ],
      takeaways: [
        "Spain is the EU's fourth-largest economy and has grown faster than any other big advanced economy for three years.",
        "Pedro Sánchez has governed since 2018 without a majority, relying on Basque and Catalan parties.",
        "After Congress rejected his housing decrees, he called an election for 29 November 2026."
      ],
      check: { q: "Why did Sánchez call an early election?",
        choices: ["He lost a no-confidence vote", "Congress rejected his emergency housing decrees", "The king dissolved parliament"], answer: 1,
        explain: "On 2 October 2026 Congress rejected two housing decrees, with PP, Vox and Junts voting against; three days later Sánchez called an election." },
      sources: [
        { title: "Spain's Pedro Sanchez announces snap election amid housing crisis", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/10/5/spanish-prime-minister-pedro-sanchez-announces-snap-election", date: "2026-10-05" },
        { title: "Spain ranked the fastest-growing major advanced economy for the third year running", publisher: "Majorca Daily Bulletin", url: "https://www.majorcadailybulletin.com/news/local/2026/10/13/146559/spain-ranked-the-fastest-growing-major-advanced-economy-for-the-third-year-running.html", date: "2026-10-13" },
        { title: "Spain", publisher: "Britannica", url: "https://www.britannica.com/place/Spain", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "es-2", kind: "power", asOf: "2026-10-22",
      title: "A king, a Congress and 17 regions",
      dek: "Spain's 1978 constitution gives power to a prime minister chosen by Congress, and much of daily government to the regions.",
      blocks: [
        { type: "diagram", src: "img/es/es-2-power.svg",
          alt: "Diagram of power in Spain. Voters elect the 350-seat Congress of Deputies by province, plus most of the Senate. Congress invests the prime minister, Pedro Sánchez, who governs with a minority coalition and depends on regional parties. Congress must also approve his decree-laws within 30 days. King Felipe VI is head of state and proposes candidates for prime minister. Seventeen autonomous communities run health, schools and policing in some regions. The next election is on 29 November 2026.",
          caption: "A Spanish prime minister needs Congress to take office and to keep governing by decree.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "Congress and the Senate", md:
          "The Cortes Generales has two chambers. The 350-member Congress of Deputies is the one that matters. Its members are elected by proportional representation in 52 constituencies, the 50 provinces plus Ceuta and Melilla, which gives small rural provinces more weight per voter than Madrid or Barcelona. Parties with concentrated support, like Catalan and Basque nationalists, win seats easily; small national parties struggle. The Senate reviews laws but can be overruled by Congress." },
        { type: "section", head: "Investiture", md:
          "After an election, the king consults party leaders and proposes a candidate, who needs an absolute majority of 176 votes in a first vote, or more yes than no votes in a second. In 2023 the PP won the most seats but its leader, Alberto Núñez Feijóo, failed to be invested. Sánchez then won 179 votes by striking deals with Catalan and Basque parties, including an amnesty for those involved in Catalonia's 2017 independence bid." },
        { type: "section", head: "Governing by decree", md:
          "A government without a majority can still govern by royal decree-law in urgent cases, but Congress must validate each decree within 30 days or it falls. Sánchez used decrees often. That is exactly how his housing plan died on 2 October 2026: the PP, Vox and Junts voted it down. Without a budget passed since 2023, the government had been rolling over old spending plans, the longest stretch in Spain's democratic history." },
        { type: "section", head: "The king", md:
          "Felipe VI has reigned since 2014, when his father, Juan Carlos I, abdicated amid scandals. The king is head of state and of the armed forces, signs laws and proposes candidates for prime minister, but acts on the government's advice. His most political moment was a televised speech in October 2017 condemning Catalonia's independence referendum, praised in most of Spain and resented by many Catalans." },
        { type: "section", head: "The regions", md:
          "Spain has 17 autonomous communities, each with a parliament and president, plus Ceuta and Melilla. They run hospitals and schools, and the Basque Country and Navarre even collect most of their own taxes. Catalonia and the Basque Country have their own police forces. Regional elections are national tests: the PP governs most regions, including Madrid and Andalusia, while the Socialists run Catalonia under Salvador Illa." },
        { type: "section", head: "The courts", md:
          "Spain's judges are independent, but the bodies that appoint senior judges are chosen by parliament, which makes them political battlegrounds. The council that governs the judiciary went five years without renewal, from 2018 to 2024, because the PP and PSOE could not agree, until the European Commission brokered a deal. The 12-member Constitutional Court, which rules on laws such as the amnesty, has a progressive majority; the PP accuses the government of packing it, and the government says the PP blocked appointments for years." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Supporters", md:
            "The 1978 settlement turned a dictatorship into a stable democracy and gave Spain's nations self-rule without breaking the country." },
          right: { head: "Critics", md:
            "The electoral map gives small regional parties outsized leverage, and it leaves minority governments hostage to whoever holds the last few votes." } }
      ],
      takeaways: [
        "Congress, elected by province, invests the prime minister and must validate government decrees within 30 days.",
        "Sánchez was re-invested in 2023 with 179 votes thanks to deals with Catalan and Basque parties.",
        "King Felipe VI is head of state; 17 autonomous communities run health, schools and, in some regions, policing."
      ],
      check: { q: "What happens to a Spanish decree-law that Congress does not validate within 30 days?",
        choices: ["It becomes permanent", "It falls", "The Senate decides"], answer: 1,
        explain: "A decree-law must be validated by Congress within 30 days; the housing decrees fell this way on 2 October 2026." },
      sources: [
        { title: "Spanish Constitution of 1978", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Spanish_Constitution_of_1978", date: "n.d." },
        { title: "2023 Spanish general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2023_Spanish_general_election", date: "2023" },
        { title: "Spain's parliament rejects gov't housing decrees amid mass protests", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/10/2/spains-parliament-rejects-govt-housing-decrees-amid-mass-protests", date: "2026-10-02" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "es-9", kind: "founding", asOf: "2026-10-22",
      title: "From Al-Andalus to empire",
      dek: "Eight centuries of Muslim and Christian kingdoms ended in 1492, the year Spain also reached the Americas and began a global empire.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-9-hero.webp",
          alt: "Illustration of a red-walled hilltop palace and fortress with towers above a city of white houses, with snow-capped mountains behind at sunset.",
          caption: "The Alhambra in Granada, palace of the last Muslim kingdom in Iberia, which fell in January 1492.",
          credit: "Illustration — not a photograph",
          prompt: "A red-walled hilltop palace and fortress with square towers above a city of white houses and cypress trees, snow-capped mountains behind, warm sunset light, majestic and quiet, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Kingdoms to empire", items: [
          ["711", "Muslim armies cross from North Africa and conquer most of Iberia"],
          ["929", "Córdoba becomes the seat of a caliphate"],
          ["1469", "Isabella of Castile marries Ferdinand of Aragon"],
          ["1492", "Granada falls; Jews expelled; Columbus reaches the Americas"],
          ["1500s", "Habsburg Spain rules an empire across the globe"],
          ["1714", "Barcelona falls in the War of the Spanish Succession"],
          ["1898", "War with the US ends the overseas empire"]
        ] },
        { type: "section", head: "Al-Andalus", md:
          "In 711 Arab and Berber armies from North Africa crossed into Iberia and within a few years ruled most of it. Muslim Spain, Al-Andalus, became one of Europe's richest and most learned societies; Córdoba, seat of a caliphate from 929, was perhaps the largest city in western Europe. Christians and Jews lived under Muslim rule with restrictions but often prospered. Small Christian kingdoms survived in the mountains of the north." },
        { type: "section", head: "The 'Reconquista'", md:
          "Over the next 750 years those northern kingdoms, Castile, Aragon, Portugal and others, pushed south in wars Spanish history later called the Reconquista, the 'reconquest'. The marriage of Isabella of Castile and Ferdinand of Aragon in 1469 united the two biggest. In January 1492 they took Granada, the last Muslim kingdom. That March they ordered Jews to convert or leave; Muslims were later forced to convert too, and their descendants were expelled in 1609." },
        { type: "section", head: "Empire", md:
          "In 1492 the same monarchs also sponsored Christopher Columbus's voyage. Within decades conquistadors had overthrown the Aztec and Inca empires, and American silver made Spain Europe's dominant power. Under the Habsburgs Charles V and Philip II, it ruled the Netherlands, much of Italy, the Philippines and, for a time, Portugal: an empire 'on which the sun never set'. The conquest killed millions of Indigenous people, through war, forced labour and, above all, disease." },
        { type: "section", head: "Decline and loss", md:
          "Wars, debt and inflation wore the empire down. In 1714, at the end of the War of the Spanish Succession, Barcelona fell to the new Bourbon king, who abolished Catalonia's own institutions; Catalans mark the date, 11 September, as their national day. Napoleon's invasion in 1808 led to a liberal constitution drafted at Cádiz in 1812 and to independence movements across Latin America. Defeat by the United States in 1898 took Cuba, Puerto Rico and the Philippines." },
        { type: "compare", head: "Two views of 1492",
          left: { head: "A founding moment", md:
            "Spain's unity, its faith and a global language and culture shared today by 500 million people began with the Catholic Monarchs." },
          right: { head: "A darker legacy", md:
            "The same year began religious expulsions at home and a conquest abroad that devastated Indigenous peoples; Mexico has asked Spain to apologise." } },
        { type: "section", head: "Why it matters", md:
          "The empire left Spanish spoken across the Americas and close ties that make Spain Latin America's gateway to Europe. The Bourbon victory of 1714 is still invoked by Catalan nationalists, and the debate about what Spain owes to its past runs through its politics today." }
      ],
      takeaways: [
        "Muslim rulers governed much of Iberia from 711; the last Muslim kingdom, Granada, fell in 1492.",
        "The same year Jews were expelled and Columbus reached the Americas, beginning a global empire.",
        "Barcelona's fall in 1714 ended Catalonia's own institutions; defeat in 1898 ended the overseas empire."
      ],
      check: { q: "What do Catalans commemorate on 11 September?",
        choices: ["Columbus's voyage", "The fall of Barcelona in 1714", "The 2017 referendum"], answer: 1,
        explain: "The Diada marks Barcelona's fall to Bourbon forces in 1714, after which Catalonia's institutions were abolished." },
      sources: [
        { title: "Spain: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Spain", date: "n.d." },
        { title: "Al-Andalus", publisher: "Britannica", url: "https://www.britannica.com/place/Al-Andalus", date: "n.d." },
        { title: "Reconquista", publisher: "Britannica", url: "https://www.britannica.com/event/Reconquista", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "es-3", kind: "history", asOf: "2026-10-22",
      title: "Republic, war, dictatorship, democracy",
      dek: "In one lifetime Spain went from civil war and dictatorship to one of Europe's most open democracies.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-3-hero.webp",
          alt: "Illustration of a semicircular parliament chamber with red benches, seen from the public gallery, with figures standing in the aisles.",
          caption: "The Congress of Deputies in Madrid, where an attempted coup on 23 February 1981 was defeated within a day.",
          credit: "Illustration — not a photograph",
          prompt: "A semicircular parliament chamber with rows of red velvet benches and a carved wooden rostrum seen from the public gallery, a few small figures standing in the aisles, warm chandelier light, tense and historic, no faces, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1931", "The Second Republic replaces the monarchy"],
          ["1936–39", "Civil war; Franco's Nationalists win"],
          ["1975", "Franco dies; Juan Carlos becomes king"],
          ["1978", "A democratic constitution is approved by referendum"],
          ["1981", "A coup attempt in Congress fails"],
          ["1986", "Spain joins the European Community"],
          ["2018", "Sánchez wins a no-confidence vote and takes office"]
        ] },
        { type: "section", head: "1. Republic and civil war", md:
          "In 1931 King Alfonso XIII left the country and Spain became a republic, which tried to cut the power of the Church, the army and landowners. Society split into hostile camps. In July 1936 army officers led by General Francisco Franco rose against the elected left-wing government. The war that followed killed about half a million people ([[lesson:es-10]]). Franco won in 1939 with help from Hitler and Mussolini." },
        { type: "section", head: "2. Franco's Spain", md:
          "Franco ruled as dictator until his death in 1975. His regime was Catholic, nationalist and anti-communist; it banned parties and unions, and suppressed the Catalan and Basque languages in public life. Isolated after the Second World War, it was rescued by the Cold War: a 1953 deal gave the US air and naval bases. From the 1960s tourism and industry brought fast growth, and millions moved from the countryside to the cities." },
        { type: "section", head: "3. The transition", md:
          "Franco had named Juan Carlos, grandson of the last king, as his successor. Instead of continuing the dictatorship, Juan Carlos and Prime Minister Adolfo Suárez dismantled it. Parties, including the Communists, were legalised, elections were held in 1977, and a constitution was approved in 1978. An amnesty law covered crimes on all sides. On 23 February 1981 Civil Guards stormed Congress in a coup attempt; the king went on television in uniform to oppose it, and it collapsed." },
        { type: "section", head: "4. Spain in Europe", md:
          "The Socialists under Felipe González governed from 1982 to 1996, took Spain into the European Community in 1986 and confirmed it in NATO. EU funds and the euro brought motorways, high-speed trains and a property boom. Meanwhile the Basque separatist group ETA killed more than 800 people before declaring a permanent ceasefire in 2011 and dissolving in 2018. Spain also suffered Europe's deadliest jihadist attack, the Madrid train bombings of 11 March 2004, which killed 193." },
        { type: "section", head: "5. Crisis and fragmentation", md:
          "The 2008 crash burst Spain's housing bubble; unemployment passed 26% in 2013 and youth unemployment 50%. Protests in 2011 gave rise to Podemos on the left, and later to Ciudadanos and Vox, breaking the old two-party system of the PSOE and PP. In 2017 Catalonia's government held an illegal independence referendum ([[lesson:es-11]]). In 2018 Sánchez ousted the PP's Mariano Rajoy in Spain's first successful no-confidence vote, after a corruption ruling against the PP." },
        { type: "section", head: "6. Pandemic and recovery", md:
          "Spain was hit hard by Covid-19 in 2020 and imposed one of Europe's strictest lockdowns; the Constitutional Court later ruled parts of the state of emergency unconstitutional. The EU's recovery fund then gave Spain one of the largest allocations of any member, tens of billions of euros in grants for green and digital investment, which helped power the boom of 2023–26." },
      ],
      takeaways: [
        "Franco won the 1936–39 civil war and ruled as dictator until 1975.",
        "King Juan Carlos and Adolfo Suárez led a peaceful transition to democracy, sealed by the 1978 constitution.",
        "After the 2008 crash, new parties broke the two-party system; Sánchez came to power by a no-confidence vote in 2018."
      ],
      check: { q: "How did Pedro Sánchez first become prime minister in 2018?",
        choices: ["He won a general election outright", "He won a no-confidence vote against Rajoy", "The king appointed him"], answer: 1,
        explain: "In June 2018 Congress passed Spain's first successful no-confidence motion, ousting Mariano Rajoy after a corruption ruling against the PP." },
      sources: [
        { title: "Spain: History", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Spain", date: "n.d." },
        { title: "Spanish Civil War", publisher: "Britannica", url: "https://www.britannica.com/event/Spanish-Civil-War", date: "n.d." },
        { title: "Spanish Constitution of 1978", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Spanish_Constitution_of_1978", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "es-10", kind: "past", asOf: "2026-10-22",
      title: "The civil war and its graves",
      dek: "The war of 1936–39 and the dictatorship that followed left tens of thousands in unmarked graves, and Spain still argues about them.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-10-hero.webp",
          alt: "Illustration of a dry hillside with olive trees and a field dug open with small white markers, under a pale, hot sky.",
          caption: "Volunteers and archaeologists have opened hundreds of mass graves from the civil war and its aftermath.",
          credit: "Illustration — not a photograph",
          prompt: "A dry Spanish hillside with silver-green olive trees and a field where the earth has been carefully dug open, small white markers and string grids on the ground, a pale hot sky, a few small figures far away, sombre and still, no faces, no flags, no legible text." },
        { type: "facts", head: "The war in numbers", rows: [
          ["Began", "17–18 July 1936, with a military uprising"],
          ["Ended", "1 April 1939, with Franco's victory"],
          ["Killed", "About 500,000, including executions behind the lines"],
          ["Exiled", "About 450,000 fled to France in 1939"],
          ["Still missing", "An estimated 100,000 or more in unmarked graves"]
        ] },
        { type: "section", head: "Two Spains at war", md:
          "When officers rose against the Republic in July 1936, the country split. The Republic held Madrid, Barcelona, Valencia and the industrial north; the rebels, who called themselves Nationalists, held the rural centre and west. Germany and Italy sent Franco planes, tanks and troops; the Soviet Union armed the Republic, and about 35,000 foreign volunteers fought in its International Brigades. In April 1937 German and Italian planes bombed the Basque town of Guernica, which Picasso made the subject of his most famous painting." },
        { type: "section", head: "Terror on both sides", md:
          "Both sides killed civilians behind their lines. In the Republican zone, anarchist and communist militias murdered thousands of priests, landowners and conservatives, especially in 1936. In the Nationalist zone, killing was more systematic and continued long after the war: tens of thousands of Republicans were shot in the 1940s, and many were buried in mass graves by roadsides and cemeteries. Most historians estimate that Franco's side killed about three times as many civilians as the Republic's." },
        { type: "section", head: "The pact of silence", md:
          "The 1977 amnesty law, which freed political prisoners, also barred prosecution of crimes committed under the dictatorship. The transition worked partly because politicians agreed not to fight over the past. For decades families searched for missing relatives on their own. In 2007 a Socialist government passed a Historical Memory Law; a Democratic Memory Law in 2022 made the state responsible for finding and identifying the missing." },
        { type: "section", head: "Franco's tomb", md:
          "Franco was buried in a vast basilica carved into a mountain outside Madrid, built partly by political prisoners, alongside tens of thousands of dead from both sides. In 2019 Sánchez's government had his body exhumed and moved to a family cemetery, and the site was renamed the Valley of Cuelgamuros. In 2025, the 50th anniversary of Franco's death, a state poll found about one in five Spaniards describing the Franco years as good or very good, which alarmed historians." },
        { type: "compare", head: "Two views of memory",
          left: { head: "The left's view", md:
            "A democracy owes the victims their names and their graves, and must not leave monuments to a dictator standing." },
          right: { head: "The right's view", md:
            "The transition chose reconciliation; reopening the war's wounds for political gain divides Spaniards again." } },
        { type: "section", head: "Why it matters", md:
          "Memory remains a dividing line: PP and Vox regional governments have passed 'concord laws' that critics say equate the dictatorship's victims with its perpetrators, and the left accuses Vox of nostalgia for Franco. The anniversary of Franco's death, 20 November, falls nine days before the 2026 election." }
      ],
      takeaways: [
        "The 1936–39 civil war killed about half a million people; Franco's side won with German and Italian help.",
        "A 1977 amnesty and a 'pact of silence' helped the transition but left many victims in unmarked graves.",
        "Sánchez's government moved Franco's remains in 2019 and passed a 2022 law making the state search for the missing."
      ],
      check: { q: "What did Spain's 1977 amnesty law do?",
        choices: ["Put Franco's ministers on trial", "Freed political prisoners and barred prosecution of dictatorship-era crimes", "Banned the Communist Party"], answer: 1,
        explain: "The amnesty freed political prisoners and, in effect, shielded crimes of the dictatorship from prosecution." },
      sources: [
        { title: "Spanish Civil War", publisher: "Britannica", url: "https://www.britannica.com/event/Spanish-Civil-War", date: "n.d." },
        { title: "Francisco Franco", publisher: "Britannica", url: "https://www.britannica.com/biography/Francisco-Franco", date: "n.d." },
        { title: "Democratic Memory Law", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Democratic_Memory_Law", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "es-11", kind: "past", asOf: "2026-10-22",
      title: "Catalonia, October 2017",
      dek: "A banned referendum, a declaration of independence and direct rule from Madrid: Spain's worst constitutional crisis since 1981.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-11-hero.webp",
          alt: "Illustration of people seen from behind queuing at the entrance of a school in a narrow city street at dawn, with police vans parked at the end of the street.",
          caption: "On 1 October 2017 Catalans voted in a referendum Spain's courts had banned; police raided some polling stations.",
          credit: "Illustration — not a photograph",
          prompt: "A narrow Mediterranean city street at dawn with balconies and plane trees, people seen from behind queuing at the entrance of a school, several police vans parked at the far end of the street, rain-wet paving, tense calm, no faces, no flags, no legible text." },
        { type: "facts", head: "The crisis", rows: [
          ["Referendum", "1 October 2017, suspended by the Constitutional Court"],
          ["Official result", "About 90% yes, on about 43% turnout"],
          ["Declaration", "27 October 2017, by the Catalan parliament"],
          ["Response", "Direct rule under Article 155 of the constitution"],
          ["Sentences", "9 to 13 years for sedition for nine leaders (2019); pardoned in 2021"]
        ] },
        { type: "section", head: "What happened", md:
          "Support for Catalan independence grew after 2010, when the Constitutional Court struck down parts of a new statute of autonomy, and during the economic crisis. In 2017 the separatist government of Carles Puigdemont called a referendum. The court suspended it as unconstitutional. It went ahead on 1 October; national police tried to stop it, and images of officers striking voters went round the world. The Catalan government said 90% had voted yes on 43% turnout; opponents had mostly stayed away." },
        { type: "section", head: "Declaration and direct rule", md:
          "On 27 October the Catalan parliament declared independence in a vote boycotted by the opposition. Within hours the Senate approved direct rule under Article 155, never used before: Madrid dismissed the Catalan government and called new regional elections. No country recognised the declaration. Puigdemont fled to Belgium. His deputy, Oriol Junqueras, stayed and was jailed." },
        { type: "section", head: "Trials and pardons", md:
          "In 2019 the Supreme Court sentenced nine leaders to between 9 and 13 years for sedition, and some for misuse of public funds, setting off days of riots in Barcelona. In 2021 Sánchez's government pardoned them, saying it was time for reconciliation. In 2023, needing Catalan votes to stay in power, it went further and agreed an amnesty for everyone involved ([[lesson:es-12]])." },
        { type: "section", head: "Catalonia since", md:
          "Support for independence has fallen from about half of Catalans in 2017 to roughly a third or 40% in recent polls. In 2024 the separatist parties lost their majority in the Catalan parliament for the first time in over a decade, and the Socialist Salvador Illa became regional president. The independence parties remain powerful in Madrid, where their few seats can make or break a government." },
        { type: "section", head: "Puigdemont in exile", md:
          "From Belgium, Puigdemont fought extradition. Courts in Belgium and Germany refused to hand him over on the most serious charges, and he was elected to the European Parliament in 2019, which gave him immunity for a time. In August 2024 he slipped back into Barcelona, gave a short speech to supporters near the Catalan parliament and vanished again before police could arrest him, an episode that embarrassed the Catalan police and delighted his followers." },
        { type: "compare", head: "Two views of 2017",
          left: { head: "The separatists' view", md:
            "Catalans have the right to decide their future; Madrid answered a peaceful vote with batons, prison and the suspension of self-rule." },
          right: { head: "The Spanish government's view", md:
            "A regional government broke the constitution and the courts' orders to impose a secession most Catalans did not vote for." } },
        { type: "section", head: "Why it matters", md:
          "The crisis made Catalonia the axis of Spanish politics. It fed the rise of Vox, which grew on opposition to separatism, and it explains why the amnesty, Puigdemont's return and Junts's votes matter so much in 2026." }
      ],
      takeaways: [
        "Catalonia's government held a banned independence referendum on 1 October 2017 and declared independence on 27 October.",
        "Madrid imposed direct rule, Puigdemont fled to Belgium, and nine leaders were jailed for sedition in 2019.",
        "Support for independence has since fallen, but separatist parties still hold the balance in Madrid."
      ],
      check: { q: "What did Article 155 allow Madrid to do in 2017?",
        choices: ["Recognise independence", "Take direct control of Catalonia's government", "Hold a national referendum"], answer: 1,
        explain: "Article 155 let the Senate authorise direct rule: Madrid dismissed the Catalan government and called new elections." },
      sources: [
        { title: "2017 Catalan independence referendum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2017_Catalan_independence_referendum", date: "n.d." },
        { title: "Catalonia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Catalonia", date: "n.d." },
        { title: "Catalan separatist Puigdemont to return to Spain after warrant lifted", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/10/6/catalan-separatist-leader-puigdemont-to-return-home-after-warrant-lifted", date: "2026-10-06" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "es-4", kind: "players", asOf: "2026-10-22",
      title: "Sánchez, Feijóo, Abascal",
      dek: "A prime minister famous for surviving, a cautious conservative favourite, and a far-right party that may decide the next government.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-4-hero.webp",
          alt: "Illustration of a low palace with a white facade and a red-tiled roof behind iron gates and pine trees, on a sunny day.",
          caption: "The Moncloa Palace in Madrid, the prime minister's residence and office.",
          credit: "Illustration — not a photograph",
          prompt: "A low two-storey palace with a white and pale-ochre facade and a red-tiled roof seen through tall black iron gates, umbrella pine trees around it, bright Madrid sunshine and blue sky, calm and formal, no people close up, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Pedro Sánchez", role: "Prime minister, since 2018 (PSOE)",
            img: "img/es/portrait-sanchez.webp", source: "La Moncloa official photo via Wikimedia Commons; confirm the licence.",
            md: "An economist who was pushed out as Socialist leader in 2016, won it back from the members and ousted the PP in 2018. Known for political comebacks; running again on 29 November." },
          { name: "Alberto Núñez Feijóo", role: "Leader of the People's Party (PP)",
            img: "img/es/portrait-feijoo.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Four-time president of Galicia with absolute majorities, a moderate by PP standards. Won the most seats in 2023 but could not form a government; leads every private poll for 29 November." },
          { name: "Santiago Abascal", role: "Leader of Vox",
            img: "img/es/portrait-abascal.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A former PP member from the Basque Country who helped found Vox in 2013 and has led it since 2014. Hard line on immigration, Catalan separatism and 'gender ideology'; Vox's polling has roughly doubled since 2023." },
          { name: "Carles Puigdemont", role: "Leader of Junts",
            img: "img/es/portrait-puigdemont.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Catalan president during the 2017 referendum, in exile in Belgium since. His party's seven seats kept Sánchez in power until it broke with him in 2025. The amnesty now covers him." },
          { name: "Isabel Díaz Ayuso", role: "President of the Madrid region (PP)",
            img: "img/es/portrait-ayuso.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A combative conservative with an absolute majority in Madrid and a national following; often seen as a rival to Feijóo and a future PP leader." },
          { name: "Yolanda Díaz", role: "Deputy prime minister and labour minister",
            img: "img/es/portrait-diaz.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Led the left-wing Sumar alliance into government in 2023 and raised the minimum wage. Said in February 2026 she would not run again; the left is negotiating a new joint list." }
        ] },
        { type: "section", head: "The great survivor", md:
          "Sánchez's career is a string of escapes. He was forced out as party leader in 2016, won it back, toppled Rajoy in 2018, called a snap election in 2023 after losing regional votes, and stayed in office despite finishing second. In 2024 he took five days off to consider resigning after a court opened an inquiry into his wife, then stayed. His critics call him an opportunist willing to trade anything for power; supporters say he has kept a progressive government going against the odds." },
        { type: "section", head: "The right's dilemma", md:
          "Feijóo's PP has led polls for years, but it may need Vox to govern. Vox entered regional governments with the PP in 2023, then walked out of them in 2024 over the distribution of migrant children. A PP–Vox national government would be Spain's first with the far right since the dictatorship. Feijóo has avoided ruling it out, while trying to win enough votes to govern alone." },
        { type: "section", head: "The kingmakers", md:
          "Below the big parties sit the regional ones: Junts and the left-wing ERC in Catalonia, the PNV and EH Bildu in the Basque Country. Their leverage comes from the electoral map ([[lesson:es-2]]). Bildu, which includes politicians who were close to ETA, is especially controversial; the PP says Sánchez's reliance on it is shameful, the PSOE says it has renounced violence and must be treated as a democratic party." },
        { type: "compare", head: "Two views of Sánchez",
          left: { head: "Supporters", md:
            "He delivered growth, higher wages, a calmer Catalonia and a progressive foreign policy with a minority government." },
          right: { head: "Critics", md:
            "He traded an amnesty for power, governed by decree without a budget and presided over party corruption." } }
      ],
      takeaways: [
        "Pedro Sánchez has survived repeated crises and is running again on 29 November 2026.",
        "Alberto Núñez Feijóo's PP leads private polls but may need Vox, led by Santiago Abascal, to govern.",
        "Regional parties such as Junts, ERC, the PNV and Bildu have often decided who governs Spain."
      ],
      check: { q: "Which party leader helped found Vox in 2013?",
        choices: ["Alberto Núñez Feijóo", "Santiago Abascal", "Carles Puigdemont"], answer: 1,
        explain: "Santiago Abascal, a former PP member, helped found Vox in 2013 and has led it since 2014." },
      sources: [
        { title: "Who is Alberto Núñez Feijóo? Spain's likely next leader", publisher: "Rio Times", url: "https://www.riotimesonline.com/who-is-alberto-nunez-feijoo-spain-pp-leader-2026/", date: "2026" },
        { title: "Goodbye to Yolanda Díaz: she will not be a candidate in the elections again", publisher: "Ara", url: "https://en.ara.cat/politics/goodbye-to-yolanda-diaz-she-will-not-be-candidate-in-the-elections-again_1_5658760.html", date: "2026-02" },
        { title: "Pedro Sánchez", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pedro_S%C3%A1nchez", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "es-5", kind: "story", asOf: "2026-10-22",
      title: "The economy that outran Europe",
      dek: "While Germany stalled, Spain grew three times as fast as the eurozone, powered by migrants, tourists and cheap clean energy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-5-hero.webp",
          alt: "Illustration of rows of solar panels and wind turbines on a dry plain, with a hilltop town of white houses behind, under a bright sky.",
          caption: "Cheap solar and wind power has given Spain some of the lowest electricity prices for industry in Europe.",
          credit: "Illustration — not a photograph",
          prompt: "Long rows of solar panels and tall white wind turbines across a dry golden plain, a hilltop town of white houses with a church tower behind, a bright blue sky with a few clouds, optimistic and spacious, no people close up, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "Since 2023 Spain has been the star of Europe's economy. Growth was above 3% in 2024 and close to 3% in 2025, and the IMF expects about 2.5% in 2026, against roughly 1% for the eurozone. The number of people in work passed 22 million, a record, and Spain's economy is now the fourth-largest in the eurozone. Rating agencies have upgraded its debt, and it borrows more cheaply than Italy." },
        { type: "facts", head: "By the numbers", rows: [
          ["Growth 2026", "About 2.5% (IMF); euro area about 1%"],
          ["Unemployment", "About 10%, down from over 26% in 2013"],
          ["Foreign tourists", "Over 90 million a year, among the most in the world"],
          ["Public debt", "Close to 100% of GDP"],
          ["Migrants regularised", "A 2026 plan for about 500,000"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Three things stand out. First, people: Spain's population has grown by about two million in five years, almost all through immigration, much of it from Latin America, which adds workers and consumers. Second, tourism, which broke records after the pandemic. Third, energy: Spain built huge amounts of solar and wind power, and had little exposure to Russian gas, so it weathered the 2022 energy shock better than most. EU recovery funds paid for investment too." },
        { type: "section", head: "The other side", md:
          "Spain is still poorer per person than the EU's core, and its productivity has grown slowly. Unemployment, at about 10%, remains the highest in the EU with Finland's, and youth unemployment is more than twice that. Wages have risen but many jobs are low-paid, in tourism and services. And the boom has made housing scarcer and dearer ([[lesson:es-6]]). A nationwide blackout on 28 April 2025, which shut down the Iberian grid for hours, raised questions about relying so much on renewables, though investigators pointed to failures in voltage control." },
        { type: "section", head: "Tourism's two faces", md:
          "Record tourism brings jobs but also resentment. In 2024 and 2025 residents in Barcelona, Málaga, Mallorca and the Canary Islands protested against crowds and tourist flats, some spraying visitors with water pistols. Barcelona plans to end licences for short-term tourist flats by 2028, and the government has tightened rules on holiday lets nationwide." },
        { type: "section", head: "Migration as policy", md:
          "Unlike most of Europe, Sánchez's government argues openly that Spain needs migrants. In 2026 it began regularising about half a million undocumented migrants, mostly Latin Americans already working. Irregular arrivals by sea to the Canary Islands fell sharply in 2026, partly through cooperation with Mauritania, Senegal and Morocco. The PP and Vox say regularisation encourages more arrivals; Vox calls for mass deportations." },
        { type: "compare", head: "Two views of the boom",
          left: { head: "The government's view", md:
            "Progressive policies, a higher minimum wage, green energy and openness to migrants made Spain Europe's growth engine." },
          right: { head: "The opposition's view", md:
            "Growth comes from population and tourism, not productivity; ordinary Spaniards feel it in rents, not wages." } },
        { type: "section", head: "What's next", md:
          "Whoever wins in November will inherit strong growth but a debt near 100% of GDP, EU fiscal rules to meet and pressure from NATO to spend more on defence." }
      ],
      takeaways: [
        "Spain has grown faster than any other big advanced economy for three years, with record employment.",
        "Immigration, tourism and cheap renewable energy drove the boom.",
        "Unemployment is still about 10%, productivity is weak and the boom has made housing harder to afford."
      ],
      check: { q: "Which of these was a main driver of Spain's recent growth?",
        choices: ["Cheap Russian gas", "Immigration and population growth", "A fall in tourism"], answer: 1,
        explain: "Spain's population grew by about two million in five years, mostly through immigration, adding workers and consumers." },
      sources: [
        { title: "Why Spain's economy is growing three times faster than the euro area", publisher: "Goldman Sachs", url: "https://www.goldmansachs.com/insights/articles/why-spains-economy-is-growing-three-times-faster-than-the-euro-area", date: "2026" },
        { title: "Brussels only revises upwards the forecasts for Spain", publisher: "Ara", url: "https://en.ara.cat/economy/brussels-only-revises-upwards-the-forecasts-for-spain-and-places-it-as-the-locomotive-of-europe_1_5743956.html", date: "2026-05" },
        { title: "Human rights at sea and Spain's 2026 migration paradox", publisher: "Opinio Juris", url: "https://opiniojuris.org/2026/08/26/human-rights-at-sea-and-spains-2026-migration-paradox/", date: "2026-08-26" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "es-6", kind: "story", asOf: "2026-10-22",
      title: "Housing, scandal and a snap vote",
      dek: "The eviction of an 87-year-old woman set off mass protests, Congress sank the government's response, and Sánchez called an election.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-6-hero.webp",
          alt: "Illustration of a huge crowd marching down a wide Madrid avenue between ornate buildings, carrying blank banners, seen from above and behind.",
          caption: "On 3 October 2026 a huge crowd marched in Madrid over housing; organisers said 500,000, the authorities about 70,000.",
          credit: "Illustration — not a photograph",
          prompt: "A huge crowd seen from above and behind marching down a wide avenue between ornate early-twentieth-century buildings with domes, carrying long blank banners, warm autumn afternoon light, determined and peaceful, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "Rents in Spain's big cities have roughly doubled in a decade, driven by population growth, tourist flats and a shortage of new building. Young Spaniards leave home at about 30 on average. In late September 2026 the eviction of an 87-year-old pensioner in Madrid caused national outrage. The government responded with two emergency decrees: one to halt evictions of vulnerable tenants and curb speculation, the other to make rental contracts renew automatically." },
        { type: "facts", head: "Ten days", rows: [
          ["29 September", "Cabinet approves two housing decrees"],
          ["2 October", "Congress rejects them; the first falls 178–172"],
          ["3 October", "Mass housing march in Madrid"],
          ["5 October", "Sánchez calls an election for 29 November"],
          ["6 October", "Constitutional Court rules the amnesty covers Puigdemont"]
        ] },
        { type: "section", head: "Why the decrees fell", md:
          "The PP and Vox said the decrees would scare off landlords and shrink the supply of rentals. The decisive votes came from Junts, the Catalan party that had kept Sánchez in office until it broke with him in 2025. Without it, the government had no majority. Sánchez said he would let voters decide, ten months before the term's end, after three years without a new budget." },
        { type: "section", head: "What each side proposes", md:
          "The PSOE and Sumar want more public housing, rent caps in high-pressure areas, which a 2023 law allows regions to impose, and limits on tourist flats and speculative buyers. The PP and Vox say controls drive landlords away; they promise to free up land for building, cut taxes on buying a home and speed up the eviction of squatters, an issue known as 'okupación'. Most economists agree that Spain simply builds too few homes." },
        { type: "section", head: "The scandals", md:
          "The campaign opens under a cloud of court cases. In June 2026 the Supreme Court sentenced José Luis Ábalos, Sánchez's former transport minister and party organiser, to 24 years for running a bribery ring around pandemic mask contracts; he calls the trial political. Another former party organisation chief, Santos Cerdán, was jailed pending investigation in 2025. A Madrid court has sent Sánchez's wife, Begoña Gómez, to trial for influence peddling and embezzlement, which she denies; Sánchez calls the case baseless." },
        { type: "section", head: "The race", md:
          "Polls in October put the PP at about 32%, the PSOE at about 26% and Vox at about 19%, its highest ever. Several pollsters project that the PP and Vox together would win more than 176 of the 350 seats, a majority. The state pollster CIS still puts the Socialists first. The left of the PSOE is split and weak after Yolanda Díaz's decision not to run." },
        { type: "compare", head: "Two views of the campaign",
          left: { head: "Sánchez's case", md:
            "The right blocked help for tenants; a PP–Vox government would roll back rights, cut social spending and bring the far right into power." },
          right: { head: "Feijóo's case", md:
            "A government that cannot pass a budget, depends on separatists and is mired in corruption must go; housing needs supply, not controls." } },
        { type: "section", head: "What's next", md:
          "Spain votes on 29 November. If no bloc wins 176 seats, Spain could face weeks or months of talks, as in 2016, 2019 and 2023." }
      ],
      takeaways: [
        "Soaring rents and an 87-year-old's eviction set off mass protests in autumn 2026.",
        "Congress rejected the government's emergency housing decrees on 2 October, with Junts joining PP and Vox.",
        "Sánchez called an election for 29 November; polls favour a PP–Vox majority amid corruption cases touching his party."
      ],
      check: { q: "Which party's votes sank the housing decrees together with the PP and Vox?",
        choices: ["Sumar", "Junts", "The PNV"], answer: 1,
        explain: "Junts, the Catalan party led by Puigdemont, had broken with Sánchez in 2025 and voted against the decrees." },
      sources: [
        { title: "Spain's parliament rejects gov't housing decrees amid mass protests", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/10/2/spains-parliament-rejects-govt-housing-decrees-amid-mass-protests", date: "2026-10-02" },
        { title: "Nearly 500,000 people protest in Madrid over Spain's housing crisis", publisher: "Euronews", url: "https://euronews.com/2026/10/03/nearly-500000-people-protest-in-madrid-over-spains-housing-crisis", date: "2026-10-03" },
        { title: "Spain's Supreme Court sentences former minister to 24 years in landmark pandemic graft case", publisher: "OCCRP", url: "https://www.occrp.org/en/news/spains-supreme-court-sentences-former-minister-to-24-years-in-landmark-pandemic-graft-case", date: "2026-06" },
        { title: "Spain election poll: PP and Vox could secure big majority", publisher: "The Spanish Eye", url: "https://www.thespanisheye.com/2026/10/12/spain-election-poll-pp-and-vox-could-secure-big-majority-with-up-to-197-seats/", date: "2026-10-12" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "es-7", kind: "story", asOf: "2026-10-22",
      title: "The ally that said no",
      dek: "Spain refused NATO's 5% target, barred US strikes on Iran from its bases and led Europe's criticism of Israel. Trump threatened to cut off trade.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-7-hero.webp",
          alt: "Illustration of a naval base on a sunny bay with grey warships moored at a long pier and a lighthouse on a point, with a white town behind.",
          caption: "Rota, on the Bay of Cádiz, hosts US Navy destroyers under a 1953 agreement.",
          credit: "Illustration — not a photograph",
          prompt: "A naval base on a sunny bay with several grey warships moored along a long concrete pier, cranes and low hangars, a lighthouse on a point and a white Andalusian town behind, hazy blue sky, calm and strategic, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "At NATO's summit in June 2025, allies pledged to spend 5% of GDP on defence by 2035. Spain alone secured an exemption: Sánchez said about 2.1% was 'sufficient and realistic' and that Spain would meet its military commitments anyway. In March 2026, when the [[unit:us|United States]] and [[unit:il|Israel]] went to war with [[unit:ir|Iran]], Spain refused to let US forces use the joint bases at Rota and Morón for the strikes. President Trump threatened to cut off trade with Spain and said NATO should consider expelling it." },
        { type: "section", head: "Why Spain says no", md:
          "Sánchez argues that Spain's contribution should be measured in troops and missions, not only budgets: Spanish soldiers serve with NATO in Latvia, Slovakia and Romania. Spanish public opinion is among Europe's least enthusiastic about military spending, and his coalition partners on the left oppose rearmament. On Iran, the government said the strikes lacked a basis in international law. Spain's defence spending has still risen, from about 1.4% of GDP in 2021 to 2.1% in 2025." },
        { type: "section", head: "Gaza", md:
          "In May 2024 Spain recognised a Palestinian state together with Ireland and Norway. In September 2025 Sánchez announced measures he said were meant to 'stop the genocide in Gaza', including an embargo on arms trade with Israel and a ban on goods from settlements, and called for Israel to be barred from international sport. Spain's broadcaster said it would skip Eurovision if Israel took part. Israel's government accused Sánchez of antisemitism; he said criticising a government is not hating a people." },
        { type: "section", head: "Trump's threats", md:
          "Trump has repeatedly called Spain a bad ally and threatened 'terrible' tariffs, and in July 2026, standing next to NATO's secretary general Mark Rutte, he called for cutting off all trade with Spain. No such measures have been imposed: trade policy is set by the EU, and US courts have limited his tariff powers. Rutte has defended Spain's contribution while saying issues remain." },
        { type: "section", head: "Looking south", md:
          "Spanish governments of both parties argue that the threats Spain faces come mainly from the south: instability in the Sahel, irregular migration and jihadist terrorism, rather than [[unit:ru|Russia]]. Spaniards are less worried about Russia than Poles or Balts, and more about North Africa. Spain has pushed NATO to give its southern flank more attention, and it is a big contributor to EU missions in Africa and the Mediterranean." },
        { type: "compare", head: "Two views of Spain's stance",
          left: { head: "Supporters", md:
            "Spain stands up for international law and Europe's own judgement, and its troops and bases already serve the alliance." },
          right: { head: "Critics", md:
            "Spain free-rides on allies' defence, weakens NATO's unity and picks fights with Washington for domestic political gain." } },
        { type: "section", head: "What's next", md:
          "A PP government would likely move toward NATO's targets and repair ties with Washington, but keep Spain's recognition of Palestine. The bases at Rota and Morón remain under a long-standing agreement, and the US Navy plans to add destroyers at Rota." }
      ],
      takeaways: [
        "Spain is the only NATO member exempt from the 5% target and spends about 2.1% of GDP on defence.",
        "In March 2026 it barred the US from using Rota and Morón to strike Iran; Trump threatened to cut off trade.",
        "Spain recognised Palestine in 2024 and imposed an arms embargo on Israel in 2025."
      ],
      check: { q: "Which two bases did Spain refuse to let the US use for strikes on Iran?",
        choices: ["Rota and Morón", "Ramstein and Aviano", "Incirlik and Souda Bay"], answer: 0,
        explain: "Rota (a naval base) and Morón (an air base) in Andalusia are used by US forces under a 1953 agreement." },
      sources: [
        { title: "Trump threatens to cut off trade with Spain after it disallowed US use of joint bases in Iran war", publisher: "OPB / AP", url: "https://www.opb.org/article/2026/03/03/trump-threatens-to-cut-off-trade-with-spain-after-it-disallowed-us-use-of-joint-bases-in-iran-war/", date: "2026-03-03" },
        { title: "Trump orders end of US trade with Spain after Madrid rejects NATO spending target", publisher: "Latin Times", url: "https://www.latintimes.com/trump-orders-end-us-trade-spain-after-madrid-rejects-nato-spending-target-terrible-partner-598170", date: "2026-07" },
        { title: "Spanish PM calls for Israel to be barred from international sport", publisher: "EWN", url: "https://www.ewn.co.za/2025/09/15/spanish-pm-calls-for-israel-to-be-barred-from-international-sport", date: "2025-09-15" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "es-12", kind: "spotlight", asOf: "2026-10-22",
      title: "The amnesty",
      dek: "Sánchez traded an amnesty for Catalan separatists for the votes to stay in power. In October 2026 it finally reached Puigdemont.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-12-hero.webp",
          alt: "Illustration of a road crossing a mountain pass between France and Spain, with a border post and a car driving south toward a valley at dawn.",
          caption: "Puigdemont has lived in exile in Belgium since 2017; the court ruling of October 2026 cleared the way for his return.",
          credit: "Illustration — not a photograph",
          prompt: "A winding road crossing a green Pyrenees mountain pass at dawn, a small empty border post with a barrier raised, a single car driving south toward a misty valley with a stone village, soft pink light, a sense of return, no people close up, no flags, no legible text." },
        { type: "facts", head: "The amnesty", rows: [
          ["Agreed", "November 2023, in return for Junts's and ERC's votes"],
          ["In force", "June 2024"],
          ["Covers", "Acts linked to the independence push from 2011 to 2023"],
          ["Upheld", "By the Constitutional Court in 2025"],
          ["Puigdemont", "Covered by a ruling on 6 October 2026"]
        ] },
        { type: "section", head: "The deal", md:
          "After the 2023 election, Sánchez needed the seven votes of Puigdemont's Junts to stay in office. Its price was an amnesty for everyone prosecuted over Catalonia's independence push, from politicians to police officers and protesters. Sánchez had said during the campaign that an amnesty was not possible under the constitution; he then argued it was the best way to close the conflict. Hundreds of thousands protested in Madrid, and the PP called it a betrayal." },
        { type: "section", head: "The courts", md:
          "Congress passed the law in 2024. Judges at the Supreme Court resisted applying it to Puigdemont, arguing that the embezzlement charges against him, for spending public money on the referendum, were not covered because he had personally benefited. In 2025 the Constitutional Court upheld the law as a whole. On 6 October 2026 it ruled that the amnesty must also cover Puigdemont's embezzlement charge, and within an hour Judge Pablo Llarena lifted his arrest warrant." },
        { type: "section", head: "Who it covers", md:
          "The law covers acts linked to the independence push between 2011 and 2023: organising the referendum, public disorder at protests, and some misuse of public money for the cause. It also covers police officers accused of using excessive force on 1 October 2017. Terrorism and crimes for personal enrichment are excluded, which is why courts argued over Puigdemont. Some Spanish judges asked the EU's Court of Justice whether parts of it break EU law on protecting EU funds." },
        { type: "section", head: "Did it work?", md:
          "Supporters point to results: support for independence has fallen, the separatists lost their majority in Catalonia in 2024, and the streets are calm. Critics note that Junts still broke with Sánchez in October 2025 and helped sink his housing decrees a year later, so the amnesty bought him two years, not a stable majority. The Council of Europe's Venice Commission said in 2024 that amnesties can be legitimate, but criticised how quickly and divisively this one was passed." },
        { type: "compare", head: "Two views of the amnesty",
          left: { head: "Supporters", md:
            "Prison and exile deepened the conflict; an amnesty turned a constitutional crisis into normal politics, and it is working." },
          right: { head: "Opponents", md:
            "It rewrote the law to keep one man in power and told those who broke the constitution that it carries no cost." } },
        { type: "section", head: "Why it matters", md:
          "Puigdemont's possible return in the middle of the campaign puts Catalonia back at the centre of the 29 November vote, which is exactly what the PP and Vox want and what Sánchez would rather avoid. For the separatists, it reopens the question of what Catalonia should ask for next." }
      ],
      takeaways: [
        "Sánchez agreed an amnesty for Catalan separatists in 2023 in return for the votes to stay in office.",
        "The Constitutional Court upheld it in 2025 and ruled on 6 October 2026 that it covers Puigdemont.",
        "Supporters say it calmed Catalonia; opponents say it traded the rule of law for power."
      ],
      check: { q: "What did the amnesty give Sánchez in 2023?",
        choices: ["A two-thirds majority", "The votes of Junts and ERC to be re-invested", "Control of the Senate"], answer: 1,
        explain: "Catalan parties' votes, including Junts's seven, let Sánchez win the investiture with 179 votes." },
      sources: [
        { title: "Catalan separatist Puigdemont to return to Spain after warrant lifted", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/10/6/catalan-separatist-leader-puigdemont-to-return-home-after-warrant-lifted", date: "2026-10-06" },
        { title: "The Constitutional Court orders the Supreme Court to amnesty the 1-O leaders", publisher: "Ara", url: "https://en.ara.cat/politics/the-constitutional-court-orders-the-supreme-court-to-amnesty-the-1-leaders-in-preferential-and-urgent-manner_1_5870772.html", date: "2026-10-06" },
        { title: "Junts members endorse breaking with Sánchez with 87% support", publisher: "Ara", url: "https://en.ara.cat/politics/junts-members-endorse-breaking-with-sanchez-with-87-support_1_5546089.html", date: "2025-10" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "es-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A strong economy, a weak government and an election that could bring the far right into national power for the first time since Franco.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/es/es-8-hero.webp",
          alt: "Illustration of a wide boulevard in Madrid at dusk with a domed early-twentieth-century building on a corner and traffic lights glowing.",
          caption: "Madrid's Gran Vía at dusk, five weeks before the vote.",
          credit: "Illustration — not a photograph",
          prompt: "A wide city boulevard at dusk lined with ornate early-twentieth-century buildings, a tall corner building topped by a dome and a small statue, warm shop lights and car headlights, a violet sky, lively and expectant, no legible text, no logos, no faces." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Sánchez's PSOE–Sumar minority coalition in caretaker mode until the vote.\n" +
          "- **Election:** 29 November 2026; PP ahead, Vox at a record, PSOE second.\n" +
          "- **Catalonia:** the amnesty now covers Puigdemont; his return is expected.\n" +
          "- **Economy:** about 2.5% growth, unemployment about 10%, debt near 100% of GDP.\n" +
          "- **Abroad:** at odds with Trump over NATO and Iran; Europe's leading critic of Israel." },
        { type: "section", head: "Spain in the world", md:
          "Spain is a core member of the EU and NATO, and Latin America's main link to Europe. It has pushed for the EU–Mercosur trade deal with [[unit:br|Brazil]] and [[unit:ar|Argentina]], and has close ties with [[unit:mx|Mexico]], though Mexico's demand for an apology over the conquest strained them. Its relationship with Morocco, which controls migration routes and claims Ceuta and Melilla, improved after Spain backed Morocco's autonomy plan for Western Sahara in 2022, which angered Algeria, a key gas supplier." },
        { type: "section", head: "What voters want", md:
          "Housing tops voters' worries in most polls, followed by the cost of living, unemployment, immigration and corruption. Young voters, once the base of Podemos, have moved toward Vox and the PP in large numbers, especially young men. Women and older voters lean more to the PSOE. Turnout will matter: Spain's last three elections were all close." },
        { type: "section", head: "Three scenarios", md:
          "- **PP–Vox majority.** Feijóo becomes prime minister with Vox's support or in coalition, the first national government with the far right since the dictatorship.\n" +
          "- **PP alone, short of a majority.** Feijóo needs abstentions from regional parties, or faces another blocked parliament.\n" +
          "- **Sánchez survives again.** A late swing and a fragmented right let the PSOE form another minority government with regional allies." },
        { type: "section", head: "The economy and the next government", md:
          "Whoever governs will need a budget, the first since 2023, and will face EU rules requiring the deficit to keep falling. A PP government has promised tax cuts and more defence spending, which would be hard to square without spending cuts elsewhere. The left warns that this would mean less for housing and pensions. Investors have been calm: growth is strong and Spain's borrowing costs are low." },
        { type: "section", head: "The Catalan question", md:
          "Catalonia is quieter than at any time since 2012, but not settled. Junts and ERC want a referendum one day and more tax powers now; ERC agreed with Sánchez in 2024 that Catalonia should collect its own taxes, a deal other regions oppose. A PP–Vox government would end such talks, which separatists say could revive the conflict." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Late October 2026:** the Supreme Court archives Puigdemont's case; his return\n" +
          "- **13 November:** the official campaign begins\n" +
          "- **29 November:** general election\n" +
          "- **December:** investiture votes in Congress\n" +
          "- **2027:** the Begoña Gómez trial; regional and local elections in May" },
        { type: "section", head: "Connections", md:
          "Spain's story runs through [[unit:us]] (NATO, bases and Trump's threats), [[unit:il]] (Gaza and Palestinian recognition), [[unit:fr]] (its neighbour and EU partner), [[unit:mx]], [[unit:ar]] and [[unit:ve]] (Latin American ties and migration) and [[unit:de]] (the EU's debates on debt and defence)." }
      ],
      takeaways: [
        "Spain votes on 29 November 2026 with the PP leading and Vox at a record high.",
        "A PP–Vox majority would bring the far right into national government for the first time since Franco.",
        "Housing, the cost of living and corruption dominate the campaign."
      ],
      check: { q: "What is voters' top concern in most Spanish polls in 2026?",
        choices: ["Defence spending", "Housing", "Catalan independence"], answer: 1,
        explain: "Housing costs, which have roughly doubled in big cities in a decade, top most polls." },
      sources: [
        { title: "Spain's snap election: will Pedro Sánchez's latest gamble pay off?", publisher: "The Conversation", url: "https://theconversation.com/spains-snap-election-will-pedro-sanchezs-latest-gamble-pay-off-293716", date: "2026-10" },
        { title: "Spain's right leads in polls as Vox support surges before November election", publisher: "The Olive Press", url: "https://www.theolivepress.es/spain-news/2026/10/09/spains-right-leads-in-polls-ahead-of-november-general-election/", date: "2026-10-09" },
        { title: "Sánchez calls a November election", publisher: "Brussels Signal", url: "https://brusselssignal.eu/2026/10/sanchez-dissolves-parliament-and-calls-a-november-election/", date: "2026-10" }
      ]
    }
  ]
});
