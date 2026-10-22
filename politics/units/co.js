/* ============================================================
   Unit 42 — Colombia 🇨🇴
   Research note and sources: tools/research/co.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("co", {
  id: "co",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "co-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Colombia in brief",
      dek: "South America's oldest democracy and its biggest cocaine producer, which swung from its first left-wing president to a hard-right outsider in 2026.",
      blocks: [
        { type: "map", src: "maps/co.svg",
          alt: "Locator map of South America with Colombia highlighted in the north-west, the only South American country with coasts on both the Caribbean and the Pacific, bordering Venezuela, Brazil, Peru, Ecuador and Panama, and a small globe showing its place in the world.",
          caption: "Colombia is the only South American country with coasts on both the Caribbean and the Pacific; three chains of the Andes run through it.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Bogotá"],
          ["People", "About 53 million"],
          ["System", "Presidential republic; one four-year term, no re-election"],
          ["President", "Abelardo de la Espriella, since 7 August 2026"],
          ["Predecessor", "Gustavo Petro (2022–2026), the first left-wing president"],
          ["Congress", "Senate of 103 and House of Representatives, elected March 2026"],
          ["Exports", "Oil, coal, coffee, flowers, and illegally, cocaine"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Colombia is the third most populous country in Latin America and a long-time ally of the [[unit:us|United States]], which spent billions helping it fight drug cartels and guerrillas. It produces most of the world's cocaine. It has also lived through one of the world's longest wars, a conflict with left-wing guerrillas, right-wing paramilitaries and drug traffickers that killed about 450,000 people between 1985 and 2018, and signed a landmark peace deal in 2016." },
        { type: "section", head: "Who holds power", md:
          "The president is head of state and government and can serve only one four-year term. In June 2026 Abelardo de la Espriella, a combative lawyer and political outsider nicknamed 'El Tigre', narrowly beat the left's candidate, Iván Cepeda, with 49.7% to 48.7%. He took office on 7 August, promising to crush armed groups and cut spending. Congress, elected in March, is fragmented: the left's Pacto Histórico is the largest party in the Senate." },
        { type: "section", head: "The mood in 2026", md:
          "The country is polarised and anxious. Outgoing President Gustavo Petro claimed, without evidence accepted by election authorities, that the runoff had been manipulated. Days after De la Espriella's inauguration, a magnitude 7.4 earthquake struck western Colombia, killing about 290 people. The government revealed a budget deficit far worse than expected, and in August it lifted the ban on aerial spraying of coca with herbicides." },
        { type: "section", head: "Regions and peoples", md:
          "Colombia is extraordinarily diverse. The Andean cities of Bogotá, Medellín and Cali hold most of the population; the Caribbean coast, with Barranquilla and Cartagena, has its own culture; the Pacific coast is home to many Afro-Colombian communities; the Amazon and the eastern plains are thinly populated. About a tenth of Colombians identify as Afro-Colombian and several percent as Indigenous. Colombia also took in almost 3 million Venezuelans fleeing their country's collapse." },
        { type: "section", head: "Democracy and violence", md:
          "Colombia has held regular elections for most of its history and has rarely had military rule, yet political violence has been constant. Presidential candidates were assassinated in 1948, 1989 and 1990, and in June 2025 Senator Miguel Uribe Turbay, a likely conservative candidate, was shot at a campaign rally in Bogotá and died two months later. Social leaders and former guerrillas are still killed every year." },
        { type: "callout", tone: "why", md:
          "Colombia shows how a democracy can survive decades of war and drug violence, and how hard it is to make peace stick." },
        { type: "section", head: "The economy", md:
          "Colombia is an upper-middle-income economy that depends heavily on oil and coal exports, along with coffee, flowers and bananas. Inequality is among the highest in Latin America, and about half of workers have informal jobs without contracts or pensions. Growth slowed after the pandemic boom, and in 2026 the government revealed a much larger budget deficit than expected ([[lesson:co-7]])." }
      ],
      takeaways: [
        "Colombia is a large Latin American democracy and the world's biggest cocaine producer.",
        "Hard-right outsider Abelardo de la Espriella won the June 2026 runoff narrowly and took office in August.",
        "A long war with guerrillas, paramilitaries and cartels killed about 450,000 people between 1985 and 2018."
      ],
      check: { q: "How many terms may a Colombian president serve?",
        choices: ["Two consecutive terms", "One four-year term", "Unlimited terms"], answer: 1,
        explain: "Since a 2015 reform, presidents serve a single four-year term without re-election." },
      sources: [
        { title: "What to know about Colombia's 2026 presidential runoff results", publisher: "AS/COA", url: "https://www.as-coa.org/articles/what-know-about-colombias-2026-presidential-runoff-results", date: "2026-06-22" },
        { title: "A deadly earthquake gives Colombia's new president his first test", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/?p=940172", date: "2026-08" },
        { title: "Colombia", publisher: "Britannica", url: "https://www.britannica.com/place/Colombia", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "co-2", kind: "power", asOf: "2026-10-22",
      title: "A strong president and a fragmented Congress",
      dek: "The 1991 constitution created a presidential republic with powerful courts; presidents need shifting coalitions in Congress to pass anything.",
      blocks: [
        { type: "diagram", src: "img/co/co-2-power.svg",
          alt: "Diagram of power in Colombia. Voters elect the president, Abelardo de la Espriella, for a single four-year term, in a two-round system. They also elect a 103-member Senate in a single national constituency and a House of Representatives by department. The Constitutional Court reviews laws and decrees. The next presidential election is in 2030.",
          caption: "The president leads the government but depends on Congress and is checked by strong courts.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The 1991 constitution", md:
          "Colombia's current constitution was written in 1991 by an assembly that included former M-19 guerrillas, Indigenous leaders and traditional parties, at a time of cartel bombings. It replaced a constitution of 1886, declared Colombia a 'social state under the rule of law', recognised Indigenous and Afro-Colombian rights and created a powerful Constitutional Court and the tutela, a fast legal action any citizen can use to defend basic rights." },
        { type: "section", head: "The president", md:
          "The president is head of state and government, commands the armed forces and appoints ministers without Congress's approval. Elections use a [[two-round-system]]: a candidate needs more than half the vote in the first round, or the top two meet in a runoff. Álvaro Uribe changed the rules to win a second term in 2006, and Juan Manuel Santos also served two terms; a 2015 reform restored the single-term rule." },
        { type: "section", head: "Congress", md:
          "The Senate has 103 members in the 2026–2030 term, most elected in one national list vote, with two seats for Indigenous communities; the House of Representatives is elected by department. In the March 2026 election, the Pacto Histórico won 25 Senate seats, Centro Democrático 17 and traditional parties such as the Liberals, Conservatives and Cambio Radical most of the rest. No party has a majority, so presidents trade ministries and budget money for votes." },
        { type: "section", head: "The courts", md:
          "The Constitutional Court has struck down laws and decrees of every recent president and has shaped policy on issues from abortion to drug spraying. In 2015 a court ruling and government decision suspended aerial spraying of coca with glyphosate; a 2017 ruling set strict conditions for any return. The Supreme Court tries members of Congress, and an elected inspector-general and comptroller also oversee officials." },
        { type: "section", head: "Regions", md:
          "Colombia is divided into 32 departments plus the capital district of Bogotá. Governors and mayors are elected, and the mayors of Bogotá, Medellín and Cali are among the country's most prominent politicians. Large areas of the countryside, though, have little state presence; there, armed groups often act as the real authority, collecting 'taxes' and settling disputes." },
        { type: "section", head: "How elections work", md:
          "Presidential elections are held in late May, with a runoff in June if needed, and the winner takes office on 7 August. Congressional elections are held in March of the same year, along with party primaries. Under a rule from the peace process, the runner-up in the presidential runoff gets a seat in the Senate, so Iván Cepeda remains a senator. Voting is voluntary, and turnout has often been low, though it reached a record in the 2026 runoff." },
        { type: "section", head: "Decrees and emergencies", md:
          "Presidents can declare states of economic, social or ecological emergency and govern by decree for limited periods, but the Constitutional Court reviews every decree and has struck many down. De la Espriella has said he will use decrees to start his programme quickly, but analysts say his main reforms, on security, pensions or taxes, need laws passed by Congress." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Supporters", md:
            "Strong courts, regular elections and a single presidential term have kept Colombia a democracy through decades of war." },
          right: { head: "Critics", md:
            "Weak parties and vote-buying in Congress let narrow interests block reform, while the state is absent in much of the country." } }
      ],
      takeaways: [
        "The 1991 constitution created a presidential republic with a powerful Constitutional Court.",
        "Presidents serve one four-year term and are elected in two rounds if needed.",
        "A fragmented Congress forces presidents to build coalitions with ministries and money."
      ],
      check: { q: "What is a 'tutela' in Colombian law?",
        choices: ["A tax on coffee", "A fast legal action any citizen can use to protect basic rights", "A presidential decree"], answer: 1,
        explain: "The 1991 constitution created the tutela, which lets people ask a judge for urgent protection of their rights." },
      sources: [
        { title: "Colombia", publisher: "Britannica", url: "https://www.britannica.com/place/Colombia", date: "n.d." },
        { title: "Colombia's 2026 congressional elections and the road ahead to the presidential race", publisher: "ABColombia", url: "https://www.abcolombia.org.uk/colombias-2026-congressional-elections-and-the-road-ahead-to-the-presidential-race/", date: "2026-03" },
        { title: "Colombia's right rallies behind Valencia as Petro's left holds Congress ground", publisher: "bne IntelliNews", url: "https://new.intellinews.com/articles/colombia-s-right-rallies-behind-valencia-as-petro-s-left-holds-congress-ground-430356", date: "2026-03" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "co-9", kind: "founding", asOf: "2026-10-22",
      title: "Bolívar, Gran Colombia and the two parties",
      dek: "Independence from Spain under Simón Bolívar, the break-up of Gran Colombia, and a century of civil wars between Liberals and Conservatives.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-9-hero.webp",
          alt: "Illustration of a small stone bridge over a stream in a green Andean valley with rolling hills, under a bright sky with towering clouds.",
          caption: "The bridge at Boyacá, where Bolívar's army won the decisive battle on 7 August 1819.",
          credit: "Illustration — not a photograph",
          prompt: "A small old arched stone bridge over a narrow stream in a lush green Andean valley with rolling hills and scattered trees, towering white clouds in a bright blue sky, peaceful and historic, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From colony to republic", items: [
          ["1538", "Spain founds Santa Fe de Bogotá"],
          ["1717", "Viceroyalty of New Granada"],
          ["20 July 1810", "Bogotá declares self-rule"],
          ["7 August 1819", "Bolívar wins at Boyacá"],
          ["1819–1831", "Gran Colombia, with Venezuela and Ecuador"],
          ["1849", "Liberal and Conservative parties form"],
          ["1899–1902", "Thousand Days' War"],
          ["1903", "Panama breaks away with US support"]
        ] },
        { type: "section", head: "New Granada", md:
          "Before the Spanish arrived, the highlands were home to the Muisca, whose gold offerings gave rise to the legend of El Dorado, and the Caribbean coast to the Tairona. Spain conquered the region in the 1530s and founded Bogotá in 1538. Cartagena became one of the empire's great fortified ports and a centre of the slave trade; enslaved Africans worked gold mines and plantations. In 1717 Bogotá became the capital of the Viceroyalty of New Granada." },
        { type: "section", head: "Independence", md:
          "On 20 July 1810 leaders in Bogotá set up a council of self-rule, now the national independence day. Years of war followed between rival patriot factions and Spanish forces. In 1819 Simón Bolívar, from Caracas, marched an army across the Andes and defeated the Spanish at the bridge of Boyacá on 7 August, the date on which Colombian presidents are now inaugurated." },
        { type: "section", head: "Gran Colombia", md:
          "Bolívar created Gran Colombia, uniting today's Colombia, [[unit:ve|Venezuela]], Ecuador and Panama, with Bogotá as its capital. It fell apart in 1830–1831 amid regional rivalries, and Bolívar died disillusioned. Colombia's vice-president Francisco de Paula Santander, champion of laws and institutions, is remembered as the 'man of laws', in contrast to Bolívar's military genius; the two traditions of strongman and lawyer run through Colombian politics." },
        { type: "section", head: "Liberals and Conservatives", md:
          "In the 1840s two parties formed: the Liberals, who wanted federalism, free trade and limits on the Catholic Church, and the Conservatives, who wanted a strong central state and a Catholic nation. They fought many civil wars. The bloodiest, the Thousand Days' War of 1899–1902, killed perhaps 100,000 people. Exhausted, Colombia could not stop the province of Panama from breaking away in 1903 with US backing, so that Washington could build the canal." },
        { type: "section", head: "Slavery and the Pacific", md:
          "Enslaved Africans brought through Cartagena worked in the gold mines of the Pacific lowlands and on haciendas in the Cauca valley. Some escaped and founded free communities, palenques; San Basilio de Palenque, near Cartagena, still keeps its own language. Slavery was abolished in 1851. Afro-Colombian communities on the Pacific coast remain among the poorest in the country, and the 1991 constitution granted them collective land rights." },
        { type: "compare", head: "Two views of the 19th century",
          left: { head: "A lawyers' republic", md:
            "Colombia avoided the caudillo dictatorships of its neighbours and built a tradition of constitutions, courts and elections." },
          right: { head: "A violent elite", md:
            "Two parties of landowners mobilised the poor to kill each other, setting a pattern of violence that lasted into the 20th century." } },
        { type: "section", head: "Why it matters", md:
          "Party loyalties passed down through families for generations shaped the violence of the 20th century ([[lesson:co-10]])." }
      ],
      takeaways: [
        "Bolívar's victory at Boyacá on 7 August 1819 sealed independence; presidents take office on that date.",
        "Gran Colombia, including Venezuela and Ecuador, broke up in 1830–1831.",
        "Liberals and Conservatives fought repeated civil wars; Panama broke away in 1903."
      ],
      check: { q: "Why are Colombian presidents inaugurated on 7 August?",
        choices: ["It is Bolívar's birthday", "It marks the Battle of Boyacá in 1819", "It is the date of the 1991 constitution"], answer: 1,
        explain: "Bolívar's victory at the bridge of Boyacá on 7 August 1819 secured Colombia's independence." },
      sources: [
        { title: "History of Colombia", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Colombia", date: "n.d." },
        { title: "Simón Bolívar", publisher: "Britannica", url: "https://www.britannica.com/biography/Simon-Bolivar", date: "n.d." },
        { title: "Thousand Days' War", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Thousand_Days%27_War", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "co-3", kind: "history", asOf: "2026-10-22",
      title: "Guerrillas, cartels and peace",
      dek: "From La Violencia to the FARC, the Medellín cartel and the paramilitaries, then a peace deal in 2016 that only partly ended the war.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-3-hero.webp",
          alt: "Illustration of steep green Andean mountains covered in cloud forest, with a winding dirt road and a small village of white houses with red roofs.",
          caption: "Much of Colombia's war was fought in remote mountains and jungles where the state was weak.",
          credit: "Illustration — not a photograph",
          prompt: "Steep green Andean mountains covered in misty cloud forest, a winding red dirt road descending to a small village of white houses with red tile roofs and a church, low clouds clinging to the peaks, quiet and remote, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1948–1958", "La Violencia ([[lesson:co-10]])"],
          ["1958–1974", "National Front: parties share power"],
          ["1964", "FARC and ELN guerrillas founded"],
          ["1980s–1993", "Cartel wars; Escobar killed ([[lesson:co-12]])"],
          ["1991", "New constitution"],
          ["2000", "Plan Colombia with US aid"],
          ["2002–2010", "Álvaro Uribe's 'Democratic Security'"],
          ["2016", "Peace deal with the FARC ([[lesson:co-11]])"],
          ["2022", "Gustavo Petro, the first left-wing president"]
        ] },
        { type: "section", head: "1. Guerrillas", md:
          "After La Violencia, Liberals and Conservatives agreed to share power in the National Front, alternating the presidency from 1958 to 1974. Those excluded, including communists and peasant self-defence groups, took up arms. The FARC, founded in 1964 by peasant fighters, became Latin America's largest guerrilla army; the ELN, inspired by the Cuban revolution and liberation theology, also began that year. The urban M-19 seized the Palace of Justice in 1985; the army's assault left about 100 dead, including 11 judges." },
        { type: "section", head: "2. Cartels and paramilitaries", md:
          "From the late 1970s cocaine transformed the war. The Medellín cartel of Pablo Escobar and the Cali cartel made fortunes and corrupted politicians, judges and police. Landowners and traffickers funded right-wing paramilitary groups to fight the guerrillas, and they united in 1997 as the AUC, which massacred thousands of civilians. The guerrillas, too, financed themselves through cocaine, kidnapping and extortion." },
        { type: "section", head: "3. Plan Colombia and Uribe", md:
          "In 2000 the [[unit:us|United States]] launched Plan Colombia, spending about $10 billion over 15 years on the military, police and coca eradication. Álvaro Uribe, elected in 2002 after FARC attacks wrecked peace talks, launched 'Democratic Security': the army pushed the FARC back, killed top commanders and freed hostages. The paramilitaries demobilised in 2003–2006. But soldiers also killed thousands of civilians and presented them as guerrillas, the 'false positives' scandal." },
        { type: "section", head: "4. Peace and its limits", md:
          "Juan Manuel Santos, Uribe's defence minister, opened talks with the FARC in Havana and signed a peace deal in 2016. About 13,000 FARC members laid down their arms and the FARC became a party. But FARC dissidents, the ELN and drug gangs such as the Clan del Golfo moved into the vacuum, and coca cultivation reached records. A truth commission estimated that about 450,000 people were killed in the conflict from 1985 to 2018." },
        { type: "section", head: "5. The left in power", md:
          "In 2022 voters elected Gustavo Petro, a former M-19 guerrilla, and his vice-president Francia Márquez, an Afro-Colombian environmental activist. Petro pursued 'total peace', negotiating with several armed groups at once, and promised to move the economy away from oil and coal. Most talks failed, violence rose in regions such as Catatumbo, and his reforms stalled in Congress. In 2026 voters turned sharply to the right ([[lesson:co-5]])." },
        { type: "compare", head: "Two views of the war's end",
          left: { head: "Peace builders", md:
            "The 2016 deal ended Latin America's oldest insurgency and saved thousands of lives; it must be fully implemented." },
          right: { head: "Hardliners", md:
            "Talking to armed groups rewarded criminals; only military pressure, as under Uribe, brings security." } }
      ],
      takeaways: [
        "The FARC and ELN guerrillas were founded in 1964; cocaine fuelled the war from the 1980s.",
        "Plan Colombia and Uribe's offensive weakened the FARC, which signed a peace deal in 2016.",
        "Armed groups and coca expanded after the deal; Petro's 'total peace' largely failed."
      ],
      check: { q: "What was the 'false positives' scandal?",
        choices: ["Fake election results", "Soldiers killing civilians and presenting them as guerrillas", "Fraudulent coca statistics"], answer: 1,
        explain: "Under pressure to show results, army units killed thousands of civilians and dressed them as rebels." },
      sources: [
        { title: "History of Colombia", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Colombia", date: "n.d." },
        { title: "Revolutionary Armed Forces of Colombia (FARC)", publisher: "Britannica", url: "https://www.britannica.com/topic/FARC", date: "n.d." },
        { title: "Colombian conflict", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Colombian_conflict", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "co-10", kind: "past", asOf: "2026-10-22",
      title: "The Bogotazo and La Violencia",
      dek: "The murder of a popular Liberal leader in 1948 set Bogotá on fire and unleashed a decade of partisan slaughter that killed about 200,000 people.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-10-hero.webp",
          alt: "Illustration of a 1940s city street with colonial buildings and an old tram, with smoke rising from burning buildings under a darkening sky.",
          caption: "Rioters burned much of central Bogotá on 9 April 1948.",
          credit: "Illustration — not a photograph",
          prompt: "A 1940s city street with two-storey colonial buildings with wooden balconies and an overturned old tram, thick smoke and flames rising from burning buildings under a darkening grey sky, debris on the cobblestones, chaotic aftermath, no people close up, no flags, no legible text." },
        { type: "facts", head: "La Violencia", rows: [
          ["Spark", "Assassination of Jorge Eliécer Gaitán, 9 April 1948"],
          ["Bogotazo", "Riots destroy much of central Bogotá"],
          ["Years", "1948–1958"],
          ["Deaths", "About 200,000"],
          ["End", "The National Front power-sharing deal, 1958"]
        ] },
        { type: "section", head: "Gaitán", md:
          "Jorge Eliécer Gaitán was a Liberal lawyer and orator of humble origins who attacked the 'oligarchy' of both parties and drew huge crowds of workers and peasants. He had made his name denouncing the army's massacre of striking banana workers in 1928. He was the favourite to win the 1950 presidential election. On 9 April 1948 he was shot dead outside his office in central Bogotá." },
        { type: "section", head: "The Bogotazo", md:
          "A crowd lynched the suspected gunman and then turned on the city. Rioters burned trams, churches, government buildings and shops; police joined in or vanished. Thousands died in Bogotá and in uprisings elsewhere. A young Fidel Castro, in the city for a student congress, witnessed the chaos. The Conservative government of Mariano Ospina Pérez survived, but trust between the parties collapsed." },
        { type: "section", head: "Neighbour against neighbour", md:
          "Across the countryside, Conservative police and gangs attacked Liberal villages, and Liberal guerrillas struck back. Killings were often horrifically cruel and passed between families for revenge. About 200,000 people died between 1948 and 1958, and millions fled to the cities. In 1953 General Gustavo Rojas Pinilla took power in Colombia's only 20th-century military coup, offering amnesty, but he too was forced out in 1957." },
        { type: "section", head: "The National Front", md:
          "In 1957–1958 the Liberal and Conservative leaders agreed to share power equally: they would alternate the presidency every four years and divide all public posts until 1974. The deal ended the partisan war, but it shut out every other political force. Some armed peasant groups refused to disarm and, under communist influence, became the core of the FARC in 1964." },
        { type: "section", head: "The banana massacre", md:
          "In December 1928 the army opened fire on striking workers of the US-owned United Fruit Company in Ciénaga, on the Caribbean coast, killing dozens or by some accounts hundreds. The massacre became a symbol of foreign exploitation and state violence; Gabriel García Márquez wrote it into his novel One Hundred Years of Solitude. Gaitán's investigation of it in Congress made him famous." },
        { type: "section", head: "The violence in the countryside", md:
          "La Violencia was fought mainly in rural areas of the Andes, such as Tolima, Valle and Boyacá. Small farmers lost land to neighbours and armed groups, and many moved to growing cities like Bogotá, Medellín and Cali. The violence also produced new frontier settlements in the jungle and eastern plains, where the FARC later took root." },
        { type: "compare", head: "Two readings",
          left: { head: "A partisan war", md:
            "A conflict between two party identities, inherited like religion, that elites stirred and then settled among themselves." },
          right: { head: "A social war", md:
            "A war over land and power in which the poor were mobilised and killed, and whose causes were never resolved." } },
        { type: "section", head: "Why it matters", md:
          "La Violencia created the exclusion and rural grievances from which the guerrilla wars grew." }
      ],
      takeaways: [
        "The assassination of the popular Liberal Jorge Eliécer Gaitán on 9 April 1948 sparked the Bogotazo riots.",
        "La Violencia, a decade of partisan killing, left about 200,000 dead.",
        "The 1958 National Front shared power between the two parties but excluded others."
      ],
      check: { q: "What was the National Front?",
        choices: ["A guerrilla alliance", "A deal under which Liberals and Conservatives alternated power from 1958 to 1974", "A military junta"], answer: 1,
        explain: "The two parties alternated the presidency and shared public posts equally to end La Violencia." },
      sources: [
        { title: "La Violencia", publisher: "Britannica", url: "https://www.britannica.com/event/La-Violencia", date: "n.d." },
        { title: "Bogotazo", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bogotazo", date: "n.d." },
        { title: "History of Colombia", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Colombia", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "co-11", kind: "past", asOf: "2026-10-22",
      title: "The 2016 peace deal",
      dek: "Four years of talks in Havana ended Latin America's oldest insurgency, but voters narrowly rejected the deal before a revised version passed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-11-hero.webp",
          alt: "Illustration of a large square in a colonial city at dusk filled with people holding white balloons and candles, with a cathedral behind.",
          caption: "Colombians celebrated the signing of the peace agreement in 2016, though the country was deeply split.",
          credit: "Illustration — not a photograph",
          prompt: "A large stone square in a colonial city at dusk filled with people seen from behind holding white balloons and small candles, a grand cathedral with twin towers behind, warm lamps and a violet sky, hopeful and solemn, no faces, no flags, no legible text." },
        { type: "facts", head: "The deal", rows: [
          ["Talks", "Havana, 2012–2016"],
          ["Signed", "26 September 2016 in Cartagena"],
          ["Referendum", "2 October 2016: 50.2% No"],
          ["Revised deal", "Approved by Congress, November 2016"],
          ["Disarmed", "About 13,000 FARC members"],
          ["Nobel", "Peace prize to President Santos, 2016"]
        ] },
        { type: "section", head: "The talks", md:
          "Juan Manuel Santos, elected in 2010 as Uribe's heir, surprised his patron by opening secret talks with the FARC, then formal negotiations in Havana from 2012, with Cuba and Norway as guarantors. The agenda covered rural development, political participation, drugs, victims' rights and disarmament. Victims of the conflict travelled to Havana to testify. Uribe became the deal's fiercest opponent." },
        { type: "section", head: "The No", md:
          "The deal was signed in Cartagena on 26 September 2016 and put to a referendum on 2 October. Polls predicted an easy yes, but 50.2% voted No, on a turnout of 37%. Opponents, led by Uribe, said the deal let FARC leaders escape prison and gave them guaranteed seats in Congress. Days later Santos won the Nobel peace prize. A revised deal, with some changes, was approved by Congress rather than by a second vote." },
        { type: "section", head: "What it promised", md:
          "The FARC handed over its weapons to the UN and became a political party, now called Comunes, with ten guaranteed seats in Congress for two terms, ending in 2026. A Special Jurisdiction for Peace (JEP) was created to try war crimes, offering reduced sentences for those who confessed. The state promised land reform, development programmes in the worst-hit regions and help for farmers to replace coca." },
        { type: "section", head: "Implementation", md:
          "Implementation has been slow and uneven. The JEP has charged former FARC commanders with kidnapping and army officers over the 'false positives'. But more than 400 former FARC fighters and hundreds of social leaders have been killed since 2016. Some FARC commanders returned to arms, forming dissident groups, while rural reform and crop substitution lagged far behind schedule." },
        { type: "section", head: "Who voted No", md:
          "The No vote was strongest in Antioquia, the coffee region and among evangelical Christians, some of whom objected to the deal's language on gender. The Yes vote was strongest in the regions most affected by the war, on the Pacific and Caribbean coasts and in the south. Abstention was very high, partly because of a hurricane on the Caribbean coast on voting day." },
        { type: "section", head: "The ELN and others", md:
          "The deal covered only the FARC. Talks with the smaller ELN guerrilla army began in 2017, broke down after an ELN car bomb at a police academy in Bogotá killed 22 people in 2019, resumed under Petro and stalled again in 2025. Neither Santos nor Petro reached a deal with the Clan del Golfo, which is treated as a criminal group." },
        { type: "compare", head: "Two judgements",
          left: { head: "Supporters", md:
            "Thousands of fighters disarmed and the guerrilla war with the FARC ended; the failures are the state's, not the deal's." },
          right: { head: "Critics", md:
            "Impunity for war criminals and a vacuum filled by new armed groups show the deal was too generous and badly designed." } },
        { type: "section", head: "Why it matters", md:
          "The deal remains the template, and the warning, for every later negotiation with armed groups." }
      ],
      takeaways: [
        "After four years of talks, the government and the FARC signed a peace deal in 2016.",
        "Voters narrowly rejected it in a referendum; Congress approved a revised version.",
        "About 13,000 FARC members disarmed, but implementation has been slow and violent."
      ],
      check: { q: "What happened in the October 2016 referendum on the peace deal?",
        choices: ["It passed with 70%", "It was narrowly rejected, 50.2% No", "It was cancelled"], answer: 1,
        explain: "Voters rejected the deal by a narrow margin; a revised deal was approved by Congress." },
      sources: [
        { title: "Colombian peace process", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Colombian_peace_process", date: "n.d." },
        { title: "Revolutionary Armed Forces of Colombia (FARC)", publisher: "Britannica", url: "https://www.britannica.com/topic/FARC", date: "n.d." },
        { title: "Juan Manuel Santos", publisher: "Britannica", url: "https://www.britannica.com/biography/Juan-Manuel-Santos", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "co-4", kind: "players", asOf: "2026-10-22",
      title: "El Tigre, Petro and Uribe",
      dek: "A brash lawyer-turned-president, a defeated left still strong in Congress, and the ageing patriarch of the Colombian right.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-4-hero.webp",
          alt: "Illustration of a grand neoclassical government building with a colonnade on a large stone square in Bogotá, with mountains behind and pigeons on the paving.",
          caption: "Bolívar Square in Bogotá, home of Congress; De la Espriella was sworn in in Cali instead.",
          credit: "Illustration — not a photograph",
          prompt: "A grand neoclassical government building with a long stone colonnade on a vast stone-paved square, green mountains rising directly behind the city, pigeons on the paving, overcast bright sky, stately and calm, no people close up, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Abelardo de la Espriella", role: "President, since 7 August 2026",
            img: "img/co/portrait-delaespriella.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A wealthy criminal lawyer and businessman from the Caribbean coast, nicknamed 'El Tigre'; had never held office. Ran on security, austerity and anti-leftism with Trump's backing." },
          { name: "Gustavo Petro", role: "President 2022–2026",
            img: "img/co/portrait-petro.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Former M-19 guerrilla and Bogotá mayor, Colombia's first left-wing president. Disputed the 2026 result and clashed bitterly with Trump." },
          { name: "Iván Cepeda", role: "Senator; left's 2026 presidential candidate",
            img: "img/co/portrait-cepeda.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Human rights campaigner whose father, a communist senator, was murdered in 1994. Lost the runoff by under one point." },
          { name: "Álvaro Uribe", role: "President 2002–2010",
            img: "img/co/portrait-uribe.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Founder of Centro Democrático and long the dominant figure on the right. Convicted of witness tampering in 2025, then acquitted on appeal; failed to win a Senate seat in 2026." },
          { name: "Paloma Valencia", role: "Senator, Centro Democrático",
            img: "img/co/portrait-valencia.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Won the right's March 2026 primary with 3.2 million votes but was overtaken by De la Espriella in the first round." },
          { name: "Francia Márquez", role: "Vice-president 2022–2026",
            img: "img/co/portrait-marquez.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Afro-Colombian environmental activist from Cauca, the first black woman to be vice-president; fell out with Petro." }
        ] },
        { type: "section", head: "The outsider", md:
          "De la Espriella built his reputation defending controversial clients, including a businessman accused of fronting for Venezuela's government, and as a fierce critic of Petro on television and social media. He launched his candidacy through a citizens' movement, collecting signatures rather than joining a party, and promised a 'Patria Milagro' ('miracle homeland') of security and growth. Critics compare his style to El Salvador's Nayib Bukele; he calls Bukele a model." },
        { type: "section", head: "The left regroups", md:
          "Despite losing the presidency, the left remains the largest force in the Senate, and Cepeda's 48.7% was the best result ever for a left-wing candidate who was not an incumbent. Petro, who cannot run again, has said he will lead the opposition from the streets. His relations with the [[unit:us|United States]] collapsed in 2025: Washington revoked his visa and imposed sanctions on him, accusing him of failing to fight drug trafficking, which he denied." },
        { type: "section", head: "The traditional parties", md:
          "De la Espriella's cabinet draws heavily on traditional parties. Miguel Gómez Martínez, an economist, is finance minister in charge of cutting the deficit; Rodrigo Lara of Cambio Radical is interior minister, managing relations with Congress; the Liberal Party, Conservatives and Centro Democrático also hold posts. To pass his reforms, the president needs those parties' votes in a Congress where the left can block him." },
        { type: "section", head: "Where the votes came from", md:
          "De la Espriella won heavily in Antioquia, the coffee region and much of the Caribbean coast, his home region. Cepeda won Bogotá, the Pacific coast and the south-west, including Cali. The map showed how evenly divided Colombia is: the runoff margin was under one percentage point, and both sides drew record numbers of voters." },
        { type: "compare", head: "Two views of De la Espriella",
          left: { head: "Supporters", md:
            "A tough, decisive outsider who will restore order, cut waste and rebuild relations with the United States." },
          right: { head: "Critics", md:
            "A populist with authoritarian instincts, little experience and a history of defending controversial clients." } }
      ],
      takeaways: [
        "Abelardo de la Espriella, a lawyer with no previous office, became president in August 2026.",
        "The left lost the presidency but remains the largest Senate force; Petro leads the opposition.",
        "The new president relies on traditional parties in Congress to pass his agenda."
      ],
      check: { q: "What was Gustavo Petro's background before politics?",
        choices: ["Army general", "Member of the M-19 guerrilla group", "Cattle rancher"], answer: 1,
        explain: "Petro was a member of the M-19, which demobilised in 1990 and helped write the 1991 constitution." },
      sources: [
        { title: "Traditional right-wing technocrats and Christian voices will share Colombia's new cabinet", publisher: "MercoPress", url: "https://en.mercopress.com/2026/08/03/traditional-right-wing-technocrats-and-christian-voices-will-share-colombia-s-new-cabinet", date: "2026-08-03" },
        { title: "Colombia 2026–2030: the 'Patria Milagro' and Abelardo de la Espriella's new power map", publisher: "Directorio Legislativo", url: "https://directoriolegislativo.org/?p=26877", date: "2026" },
        { title: "Colombia's 2026 congressional elections and the road ahead to the presidential race", publisher: "ABColombia", url: "https://www.abcolombia.org.uk/colombias-2026-congressional-elections-and-the-road-ahead-to-the-presidential-race/", date: "2026-03" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "co-5", kind: "story", asOf: "2026-10-22",
      title: "The Tiger takes over",
      dek: "A one-point victory, a recount fight, a president who refused to concede the count and an inauguration held outside Bogotá for the first time.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-5-hero.webp",
          alt: "Illustration of a large outdoor stage set up in a city square at night with bright lights, a crowd in front and palm trees and hills behind.",
          caption: "De la Espriella was sworn in in Cali on 7 August 2026, the first inauguration held outside the capital.",
          credit: "Illustration — not a photograph",
          prompt: "A large outdoor stage with bright white lights and screens in a wide city square at night, a big crowd seen from behind, tall palm trees and dark hills with scattered lights behind the city, festive and tense, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "In the first round on 31 May 2026, De la Espriella came first with about 43.7%, ahead of Iván Cepeda with 40.9%. In the runoff on 21 June, with record turnout of about 63.5%, the preliminary count gave him 49.66% to Cepeda's 48.70%, a margin of about 250,000 votes. Cepeda asked for a recount of 33,000 polling tables; electoral judges rejected most challenges, and the National Electoral Council certified the result on 25 June. Cepeda conceded." },
        { type: "facts", head: "The 2026 election", rows: [
          ["8 March", "Congressional elections and primaries"],
          ["31 May", "First round: De la Espriella 43.7%, Cepeda 40.9%"],
          ["21 June", "Runoff: De la Espriella 49.66%, Cepeda 48.70%"],
          ["25 June", "National Electoral Council certifies the result"],
          ["7 August", "Inauguration in Cali"]
        ] },
        { type: "section", head: "Petro's challenge", md:
          "Petro refused to accept the count for weeks. In a long presentation to journalists he alleged that thousands of tally sheets had been manipulated. Colombian electoral authorities and international observers dismissed the claims, and the handover went ahead. The episode deepened distrust between the two camps and worried those who had seen Colombia's electoral institutions as among the most reliable in the region." },
        { type: "section", head: "A Caribbean presidency", md:
          "De la Espriella was sworn in in Cali rather than Bogotá, a break with two centuries of tradition. He has said he will turn the presidential palace, the Casa de Nariño, into a museum and asked Congress to make Barranquilla, on the Caribbean coast, an alternative capital. In his inaugural speech he promised a hard fight against drug trafficking and austerity to restore economic confidence." },
        { type: "section", head: "Trump's candidate", md:
          "President Trump endorsed De la Espriella before the runoff, calling him a 'strong leader', and promised full support for Colombia if he won. The acting US attorney-general led the US delegation to the inauguration, and Secretary of State Marco Rubio met the new president. After the August earthquake, De la Espriella asked Trump to suspend tariffs on Colombian goods. The new government wants to restore close cooperation on drugs and security." },
        { type: "section", head: "The campaign", md:
          "The campaign was overshadowed by violence. Senator Miguel Uribe Turbay, a leading conservative and grandson of a former president, was shot in the head at a rally in Bogotá in June 2025 by a teenage gunman and died in August; the killing revived memories of the assassinations of the 1980s. Security, the economy and Petro's record dominated debate, and De la Espriella's harsh attacks on the left helped him consolidate the right." },
        { type: "section", head: "Challenges to his candidacy", md:
          "In May 2026 the National Electoral Council considered a request to revoke De la Espriella's candidacy over alleged irregularities in the signatures collected to register his movement. It decided in July not to revoke it, after the election, ending the challenge." },
        { type: "compare", head: "Two views of the result",
          left: { head: "The winners' view", md:
            "Colombians rejected Petro's failed experiment and chose order, growth and the US alliance." },
          right: { head: "The losers' view", md:
            "Half the country voted for change and was narrowly beaten; the new president has no mandate for radical measures." } },
        { type: "section", head: "What's next", md:
          "Watch whether De la Espriella can turn decrees into laws with a fragmented Congress, and how the left uses its Senate strength." }
      ],
      takeaways: [
        "De la Espriella won the 21 June 2026 runoff by about one percentage point.",
        "Petro disputed the count, but electoral authorities and observers rejected his claims.",
        "The new president was sworn in in Cali, with Trump's backing."
      ],
      check: { q: "Where was De la Espriella sworn in on 7 August 2026?",
        choices: ["Bogotá", "Cali", "Barranquilla"], answer: 1,
        explain: "For the first time a Colombian president was inaugurated outside the capital, in Cali." },
      sources: [
        { title: "CNE confirms outcome: Abelardo de la Espriella is Colombia's new president", publisher: "Colombia Reports", url: "https://colombiareports.com/cne-confirms-outcome-abelardo-de-la-espriella-is-colombias-new-president/", date: "2026-06-25" },
        { title: "Colombia's Petro continues to challenge election results", publisher: "World Politics Review", url: "https://www.worldpoliticsreview.com/colombia-gustavo-petro-transition-de-la-espriella/", date: "2026-08" },
        { title: "As he takes office, Colombia's De la Espriella sets agenda", publisher: "AS/COA", url: "https://www.as-coa.org/articles/he-takes-office-colombias-de-la-espriella-sets-agenda", date: "2026-08" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "co-6", kind: "story", asOf: "2026-10-22",
      title: "Coca, spraying and armed groups",
      dek: "With coca at record levels and armed groups expanding, the new government lifted the ban on aerial spraying, and a court quickly blocked its first plan.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-6-hero.webp",
          alt: "Illustration of bright green coca fields on steep jungle hillsides, with a small crop-spraying plane flying low over them and thick forest around.",
          caption: "Colombia grows most of the world's coca; the new government wants to resume aerial spraying.",
          credit: "Illustration — not a photograph",
          prompt: "Bright green coca fields in neat patches on steep jungle hillsides, a small single-engine crop-spraying plane flying low over them, thick dark green rainforest around, a river in the valley, hazy humid light, tense and lush, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "On 18 August 2026, eleven days after taking office, the government repealed the 2015 resolution that had barred aerial spraying of coca fields with glyphosate. The repeal did not restart spraying automatically. In September the police announced a limited pilot programme in Putumayo, on the border with Ecuador, using a different herbicide, glufosinate-ammonium. A court in Putumayo provisionally suspended the plan, saying the government had not shown enough information about its risks." },
        { type: "facts", head: "Coca and conflict", rows: [
          ["Coca", "A record 253,000 hectares in 2023 (UNODC)"],
          ["Spraying ban", "2015, on health grounds; repealed August 2026"],
          ["Court rules", "2017 Constitutional Court conditions for any return"],
          ["Main armed groups", "ELN, FARC dissidents, Clan del Golfo"],
          ["Catatumbo", "Tens of thousands displaced by fighting in 2025"]
        ] },
        { type: "section", head: "The spraying debate", md:
          "From 1994 to 2015 planes sprayed coca fields with glyphosate, with US funding. Santos's government stopped after the World Health Organization's cancer agency classified glyphosate as 'probably carcinogenic'; farmers also complained that spraying destroyed food crops and water. A 2017 Constitutional Court ruling requires an environmental plan and consultation with ethnic communities before any resumption. Supporters say spraying is the only way to cut vast plantations quickly." },
        { type: "section", head: "Armed groups", md:
          "Since the 2016 peace deal, several armed groups have grown. The ELN, Colombia's last major guerrilla army, operates on both sides of the border with [[unit:ve|Venezuela]]. FARC dissident factions control areas of the south-west. The Clan del Golfo, a drug-trafficking army descended from the paramilitaries, is the largest criminal group. In early 2025 fighting between the ELN and FARC dissidents in the Catatumbo region displaced tens of thousands of people." },
        { type: "section", head: "From 'total peace' to iron fist", md:
          "Petro tried to negotiate with all the armed groups at once, offering ceasefires and talks; critics said the groups used the pauses to expand. De la Espriella has ended that approach, promising military offensives, 'mega-prisons' modelled on El Salvador's and closer cooperation with US anti-drug agencies. Human rights groups warn of a return to the abuses of the past." },
        { type: "section", head: "Venezuela and the border", md:
          "The armed groups use the long, porous border with [[unit:ve|Venezuela]] as a refuge and trafficking route. The ELN in particular operates on both sides. Under Petro, Colombia restored relations with Caracas; the new government is hostile to Venezuela's leadership, and US strikes on suspected drug boats in the Caribbean since 2025 have raised fears of conflict in the region. Colombian fishermen were among those killed, Petro said." },
        { type: "compare", head: "Two approaches",
          left: { head: "Hardline", md:
            "Spraying, military pressure and extradition weaken the groups and cut the cocaine money that finances them." },
          right: { head: "Rural development", md:
            "Without roads, land titles and legal markets for farmers, coca will simply move elsewhere, as it always has." } },
        { type: "section", head: "What's next", md:
          "Watch the court cases on spraying, any offensive against the ELN and whether US anti-drug cooperation is fully restored." }
      ],
      takeaways: [
        "In August 2026 the government lifted the 2015 ban on aerial spraying of coca with glyphosate.",
        "A court provisionally suspended the first spraying pilot in Putumayo in September.",
        "The ELN, FARC dissidents and the Clan del Golfo expanded after the 2016 peace deal."
      ],
      check: { q: "Why did Colombia stop aerial spraying of coca in 2015?",
        choices: ["It ran out of planes", "Health concerns after the WHO's cancer agency classified glyphosate as probably carcinogenic", "The FARC asked it to"], answer: 1,
        explain: "The Santos government suspended spraying in 2015 citing health risks." },
      sources: [
        { title: "Colombia plans to start aerial spraying of coca crops despite health worries", publisher: "Hawaii Tribune-Herald / AP", url: "https://www.hawaiitribune-herald.com/?p=377485", date: "2026-09" },
        { title: "De la Espriella abre puerta a la aspersión con glifosato en cultivos de coca en Colombia", publisher: "Bloomberg Línea", url: "https://www.bloomberglinea.com/latinoamerica/colombia/de-la-espriella-abre-puerta-a-la-aspersion-con-glifosato-en-cultivos-de-coca-en-colombia/", date: "2026-08-28" },
        { title: "Colombian conflict", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Colombian_conflict", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "co-7", kind: "story", asOf: "2026-10-22",
      title: "An earthquake and a hole in the budget",
      dek: "The new government's first weeks brought a deadly earthquake and the discovery of a deficit far larger than markets expected.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-7-hero.webp",
          alt: "Illustration of a hillside town with collapsed and cracked houses after an earthquake, rescue tents and trucks in a muddy street, green mountains behind.",
          caption: "The magnitude 7.4 earthquake of 10 August 2026 killed about 290 people.",
          credit: "Illustration — not a photograph",
          prompt: "A hillside town in green mountains with several collapsed and cracked brick and concrete houses after an earthquake, white rescue tents and trucks in a muddy street, dust in the air, grey cloudy light, grief and urgency, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "On 10 August 2026, three days after the inauguration, a magnitude 7.4 earthquake struck near San José del Palmar in Chocó, in western Colombia. It damaged buildings across 15 departments; in Cali at least 25 buildings collapsed, and Pereira and Risaralda were badly hit. The disaster agency reported 287 dead, nearly 4,000 injured and hundreds missing. Weeks later the government revealed that the budget deficit would be far larger than forecast." },
        { type: "facts", head: "A difficult start", rows: [
          ["10 August 2026", "Magnitude 7.4 earthquake in Chocó"],
          ["Toll", "287 dead, about 4,000 injured (disaster agency)"],
          ["2026 deficit", "7.2% of GDP, up from 5.3% forecast"],
          ["2027 deficit", "Up to 9.4% of GDP projected"],
          ["Ratings", "S&P cut to BB- in April 2026; Fitch at BB"]
        ] },
        { type: "section", head: "The response", md:
          "De la Espriella declared a disaster, visited the worst-hit towns and asked for international help. Trump called to offer support. Rescuers worked for days in collapsed buildings in Cali and in remote villages reachable only by river or air in Chocó, one of the poorest departments. The earthquake tested a state already stretched by armed conflict in the same region." },
        { type: "section", head: "The deficit", md:
          "In late August the government presented its 2027 budget, projecting a deficit of 7.2% of GDP for 2026 and as much as 9.4% for 2027, against earlier forecasts of 5.3% and 4.5%. The head of the independent fiscal rule committee warned that debt could reach an unsustainable 67% of GDP. Analysts said Colombia might need help from the [[imf|IMF]], and the peso fell sharply. Fitch warned of further pressure on the rating without spending cuts." },
        { type: "section", head: "Whose fault?", md:
          "The new government blames Petro for overspending and overestimating tax revenue, and promises a 21.9 trillion-peso cut in 2026 spending; the fiscal committee doubted it was achievable. Petro's allies say the previous government raised social spending for the poor and that falling oil prices and slow growth cut revenue. Earthquake reconstruction will add costs. Austerity could make it harder for the president to win support in Congress." },
        { type: "section", head: "Oil and taxes", md:
          "Oil is Colombia's biggest export and an important source of government revenue through the state oil company, Ecopetrol. Petro's halt to new exploration, lower oil prices and weaker growth cut revenue, while a 2022 tax reform raised less than planned. Credit agencies note that Colombia had held investment-grade ratings for a decade until 2021; it has since lost them, which makes borrowing more expensive for the state and companies alike." },
        { type: "compare", head: "Two views of austerity",
          left: { head: "The government's view", md:
            "Deep spending cuts are needed now to restore market confidence and avoid a debt crisis." },
          right: { head: "The opposition's view", md:
            "Cutting social spending after an earthquake will hurt the poor and may deepen the slowdown." } },
        { type: "section", head: "What's next", md:
          "Watch Congress's vote on the 2027 budget, any rating decisions and whether the government seeks an IMF programme." }
      ],
      takeaways: [
        "A magnitude 7.4 earthquake on 10 August 2026 killed about 290 people in western Colombia.",
        "The government projected deficits of 7.2% of GDP in 2026 and up to 9.4% in 2027.",
        "Ratings agencies warned of downgrades, and analysts raised the prospect of IMF help."
      ],
      check: { q: "What did the government project for the 2027 budget deficit?",
        choices: ["About 1% of GDP", "Up to 9.4% of GDP", "A surplus"], answer: 1,
        explain: "The 2027 budget projected a deficit of up to 9.4% of GDP, far above earlier forecasts." },
      sources: [
        { title: "Colombia's deficit worse than feared, may need IMF support, analysts say", publisher: "Times Live / Reuters", url: "https://www.timeslive.co.za/news/world/2026-08-28-colombias-deficit-worse-than-feared-may-need-imf-support-analysts-say/", date: "2026-08-28" },
        { title: "Earthquake Colombia: deaths and building collapses in Cali", publisher: "The Philadelphia Inquirer / AP", url: "https://www.inquirer.com/news/nation-world/earthquake-colombia-deaths-buildings-collapse-cali-20260810", date: "2026-08-10" },
        { title: "Fitch: Colombia's 2027 budget shows deep imbalance", publisher: "Rio Times", url: "https://www.riotimesonline.com/fitch-colombia-2027-budget-deep-imbalance-adjustment-2026/", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "co-12", kind: "spotlight", asOf: "2026-10-22",
      title: "Pablo Escobar and the cartel wars",
      dek: "The Medellín cartel's boss waged war on the Colombian state with bombs and assassinations until he was shot dead on a rooftop in 1993.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-12-hero.webp",
          alt: "Illustration of a valley city of red-brick buildings climbing steep green hillsides at dusk, with cable cars on wires and lights coming on.",
          caption: "Medellín, once the most violent city in the world, now known for its cable cars and urban renewal.",
          credit: "Illustration — not a photograph",
          prompt: "A valley city of red-brick buildings climbing steep green hillsides at dusk, cable car cabins on wires rising over the rooftops, lights coming on across the slopes, a few modern towers in the valley floor, warm orange sky, transformation and memory, no people close up, no flags, no legible text." },
        { type: "facts", head: "The Medellín cartel", rows: [
          ["Leader", "Pablo Escobar (1949–1993)"],
          ["Peak", "1980s; supplied most of the cocaine reaching the US"],
          ["Victims", "Justice minister (1984), presidential candidate Luis Carlos Galán (1989)"],
          ["Avianca bombing", "27 November 1989: 107 killed"],
          ["Death", "Shot dead in Medellín, 2 December 1993"]
        ] },
        { type: "section", head: "The rise", md:
          "Pablo Escobar, from a modest family in Medellín, started as a small-time smuggler and by the early 1980s led a cartel shipping cocaine by the tonne to the [[unit:us|United States]]. Forbes listed him among the world's richest people. He built housing and football pitches for the poor, won a seat in Congress as an alternate in 1982 and tried to present himself as a Robin Hood, while his men killed rivals and police." },
        { type: "section", head: "War on the state", md:
          "When the government began extraditing traffickers to the US, Escobar and his allies, calling themselves the 'Extraditables', declared war, saying they preferred 'a grave in Colombia to a cell in the United States'. They murdered the justice minister in 1984, the presidential frontrunner Luis Carlos Galán in 1989, judges, journalists and hundreds of police. In November 1989 they blew up an Avianca airliner, killing 107 people, and bombed the security police headquarters in Bogotá." },
        { type: "section", head: "Surrender and death", md:
          "In 1991, after the new constitution banned extradition, Escobar surrendered to a luxurious prison he had built himself, 'La Catedral'. He escaped in 1992 when the government tried to move him. A special police unit, aided by US agencies and by the rival Cali cartel and a vigilante group called Los Pepes, hunted him for 16 months. On 2 December 1993 he was shot dead on a Medellín rooftop." },
        { type: "section", head: "After Escobar", md:
          "His death did not end the trade. The Cali cartel took over until its leaders were arrested in 1995; then smaller groups, paramilitaries and guerrillas took control of cocaine, and Mexican cartels took over much of the smuggling to the US. Medellín, which had one of the world's highest murder rates around 1991, transformed itself through public transport, libraries and parks, though gangs remain." },
        { type: "section", head: "Galán and the 1990 election", md:
          "Luis Carlos Galán, a Liberal reformer who supported extradition, was shot dead at a rally near Bogotá in August 1989; he was expected to win the presidency. His adviser César Gaviria took over his campaign and won. Two other presidential candidates, Bernardo Jaramillo of the left-wing Patriotic Union and Carlos Pizarro of the M-19, were also murdered in 1990." },
        { type: "section", head: "Narcoculture", md:
          "Escobar's era left a lasting 'narco' culture of flashy wealth, music and violence that critics say still glamorises trafficking. Successive governments and Medellín's leaders have tried to replace that image, emphasising victims and the city's transformation, while foreign films and series keep the legend alive." },
        { type: "compare", head: "Two legacies",
          left: { head: "The myth", md:
            "TV series and tourist tours have turned Escobar into a pop-culture figure, and some poor neighbourhoods still honour him." },
          right: { head: "The memory of victims", md:
            "Thousands of Colombians were murdered by his war; Medellín demolished his building and opened a memorial park in 2019." } },
        { type: "section", head: "Why it matters", md:
          "The cartel wars made extradition, US cooperation and the fight against cocaine central to Colombian politics, as they still are ([[lesson:co-6]])." }
      ],
      takeaways: [
        "Pablo Escobar's Medellín cartel dominated the cocaine trade to the US in the 1980s.",
        "To stop extradition, the cartel waged war on the state, killing ministers, candidates and passengers.",
        "Escobar was shot dead in 1993; the cocaine trade passed to other groups."
      ],
      check: { q: "Why did Escobar's 'Extraditables' wage war on the Colombian state?",
        choices: ["To seize power in a coup", "To stop their extradition to the United States", "To support the FARC"], answer: 1,
        explain: "They feared trial in the US and used terror to force Colombia to end extradition." },
      sources: [
        { title: "Pablo Escobar", publisher: "Britannica", url: "https://www.britannica.com/biography/Pablo-Escobar", date: "n.d." },
        { title: "Medellín Cartel", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Medell%C3%ADn_Cartel", date: "n.d." },
        { title: "History of Colombia", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Colombia", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "co-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A new right-wing president with a narrow mandate faces a fragmented Congress, a fiscal hole, expanding armed groups and a divided country.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/co/co-8-hero.webp",
          alt: "Illustration of the Bogotá skyline at sunset with modern towers and red-brick buildings beneath steep green mountains with a church on the peak.",
          caption: "Bogotá beneath the Andes, with the church of Monserrate on the mountain.",
          credit: "Illustration — not a photograph",
          prompt: "A city skyline at sunset with modern towers and many red-brick buildings beneath steep dark green mountains, a small white church on the highest peak, low clouds catching orange and pink light, hopeful and uncertain, no people close up, no flags, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Presidency:** De la Espriella, in office since 7 August, governs by decree where he can.\n" +
          "- **Congress:** fragmented; the left is the largest Senate bloc.\n" +
          "- **Security:** spraying ban lifted; 'total peace' ended; armed groups strong.\n" +
          "- **Economy:** deficit far above target; rating pressure; earthquake costs.\n" +
          "- **Abroad:** close to Washington again after the Petro–Trump feud." },
        { type: "section", head: "Colombia in the world", md:
          "The new government is rebuilding ties with the [[unit:us|United States]], Colombia's biggest trade partner and source of security aid, which reached a low point under Petro. Relations with [[unit:ve|Venezuela]], with which Colombia shares a 2,200 km border, are tense; the new president is a fierce critic of its government. Colombia also has close ties with [[unit:mx|Mexico]] and [[unit:br|Brazil]], and exports coal and oil to Europe and Asia." },
        { type: "section", head: "Climate and the Amazon", md:
          "Colombia is one of the world's most biodiverse countries. Deforestation in the Amazon, driven by cattle ranching, coca and land grabbing often controlled by armed groups, fell sharply in 2023 before rising again, and remains a threat. Colombia hosted the UN biodiversity summit in Cali in 2024. Petro wanted to stop new oil and gas exploration; De la Espriella wants to revive it to raise revenue." },
        { type: "section", head: "What voters want", md:
          "Surveys show Colombians most worried about insecurity, corruption, the cost of living and jobs. The country is split almost exactly in half between left and right, and between cities and regions. Young urban voters leaned left; the Caribbean coast and Antioquia leaned heavily right. Many want both safety and the social programmes that Petro expanded." },
        { type: "section", head: "Social programmes and reforms", md:
          "Petro expanded cash transfers for the elderly and the poor and passed a pension reform in 2024 that shifted more savings into the public system; a health reform failed in Congress. De la Espriella has promised to review the pension reform and to restructure the health system, which is in a financial crisis, but his austerity plan limits the money available." },
        { type: "section", head: "Rights and the street", md:
          "Colombia saw mass protests in 2019 and 2021, the latter against a tax reform, in which dozens of people were killed, many by police. Unions and student groups have warned they will resist cuts. Human rights groups count more than 150 social leaders killed each year, and the new government's security policy will be closely watched." },
        { type: "section", head: "Three scenarios", md:
          "- **Order and recovery.** Security improves, the deficit narrows and investment returns.\n" +
          "- **Gridlock.** Congress blocks reforms, austerity bites and approval falls.\n" +
          "- **Escalation.** Offensives against armed groups bring more violence and rights abuses, deepening polarisation." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Late 2026:** Congress votes on the 2027 budget\n" +
          "- **Ongoing:** court rulings on aerial spraying\n" +
          "- **October 2027:** regional and local elections\n" +
          "- **2030:** presidential and congressional elections" },
        { type: "section", head: "Connections", md:
          "Colombia's story runs through [[unit:us]] (ally, cocaine market and source of aid), [[unit:ve]] (neighbour, migrants and armed groups across the border), [[unit:mx]] (cartels and trafficking routes), [[unit:br]] (the Amazon) and [[unit:ar]] (another Latin American country that swung hard to the right)." }
      ],
      takeaways: [
        "De la Espriella governs with a narrow mandate and a fragmented Congress.",
        "Security, the deficit and earthquake reconstruction dominate his first year.",
        "Colombia has turned back toward the United States after the Petro years."
      ],
      check: { q: "When is Colombia's next presidential election?",
        choices: ["2027", "2028", "2030"], answer: 2,
        explain: "Presidents serve one four-year term; De la Espriella's ends in 2030." },
      sources: [
        { title: "As he takes office, Colombia's De la Espriella sets agenda", publisher: "AS/COA", url: "https://www.as-coa.org/articles/he-takes-office-colombias-de-la-espriella-sets-agenda", date: "2026-08" },
        { title: "Colombia's deficit worse than feared, may need IMF support, analysts say", publisher: "Times Live / Reuters", url: "https://www.timeslive.co.za/news/world/2026-08-28-colombias-deficit-worse-than-feared-may-need-imf-support-analysts-say/", date: "2026-08-28" },
        { title: "De la Espriella iniciará su gobierno con decretos, pero sus principales reformas dependerán del Congreso", publisher: "Vanguardia", url: "https://www.vanguardia.com/colombia/2026/06/28/de-la-espriella-iniciara-su-gobierno-con-decretos-pero-sus-principales-reformas-dependeran-del-congreso/", date: "2026-06-28" }
      ]
    }
  ]
});
