/* ============================================================
   Unit 22 — Indonesia 🇮🇩
   Research note and sources: tools/research/id.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("id", {
  id: "id",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "id-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Indonesia in brief",
      dek: "The world's fourth most populous country and largest Muslim-majority democracy, led by a former general with a big-state agenda.",
      blocks: [
        { type: "map", src: "maps/id.svg",
          alt: "Locator map of South-East Asia with Indonesia highlighted: an archipelago stretching from Sumatra through Java, Borneo's southern part (Kalimantan), Sulawesi and the Maluku islands to the western half of New Guinea, with a small globe showing its place in the world.",
          caption: "Indonesia stretches about 5,000 km across more than 17,000 islands, sharing Borneo with Malaysia and Brunei, Timor with Timor-Leste, and New Guinea with Papua New Guinea.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Jakarta (a new capital, Nusantara, is under construction on Borneo)"],
          ["People", "About 280 million, the world's fourth-largest population"],
          ["Religion", "About 87% Muslim; significant Christian, Hindu and Buddhist minorities"],
          ["System", "Presidential republic"],
          ["President", "Prabowo Subianto, since October 2024"],
          ["Vice-president", "Gibran Rakabuming Raka, son of former president Joko Widodo"],
          ["Economy", "South-East Asia's largest; the world's biggest nickel producer"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Indonesia is the world's largest Muslim-majority country and third-largest democracy. It is South-East Asia's biggest economy and the anchor of ASEAN, the regional bloc. It produces around half of the world's nickel, a key ingredient in electric-vehicle batteries, and sits astride the sea lanes between the Indian and Pacific oceans, through which much of the world's trade passes.\n\n" +
          "It plays both sides of the great-power contest: it joined the BRICS group in 2025, trades heavily with [[unit:cn|China]], and holds military exercises with [[unit:us|the United States]] and [[unit:au|Australia]]." },
        { type: "section", head: "Who holds power", md:
          "President Prabowo Subianto, a former special-forces general, won the February 2024 election in a landslide with 58.6% of the vote. He was once a pariah, dismissed from the army in 1998 over the abduction of pro-democracy activists; he lost two presidential races to Joko Widodo, 'Jokowi', and then joined his government as defence minister. Jokowi's son, Gibran Rakabuming Raka, became his vice-president. Almost every party in parliament has joined Prabowo's coalition." },
        { type: "section", head: "The mood in 2026", md:
          "Prabowo remains personally popular, but unease is growing. Deadly protests in August 2025, sparked by lawmakers' perks and the killing of a delivery driver by a police vehicle, shook the government. The rupiah has fallen to record lows, investors worry about fiscal discipline, and in September 2026 Prabowo replaced his finance minister for the second time in a year." },
        { type: "section", head: "Unity in diversity", md:
          "Indonesia has hundreds of ethnic groups and languages, from Javanese, who make up about 40% of the population, to Papuans in the far east. The national language, Bahasa Indonesia, and the state philosophy of Pancasila hold it together. Java, with more than half the population, dominates politics and the economy, and people on the outer islands often complain of being neglected." },
        { type: "section", head: "Islam and politics", md:
          "Most Indonesian Muslims follow a moderate, pluralist Islam, and the country is not an Islamic state. But conservative currents have grown: in 2017 Jakarta's Christian governor was jailed for blasphemy after mass protests. Islamic parties and organisations are important coalition partners." },
        { type: "section", head: "What Indonesia wants", md:
          "Prabowo wants 8% annual growth by 2029, food and energy self-sufficiency, free meals for schoolchildren, more processing of raw materials at home, and a bigger role for the state in the economy. Abroad, he wants Indonesia to be a respected middle power, friendly with everyone and aligned with no bloc." },
        { type: "callout", tone: "why", md:
          "Indonesia shows whether a large, diverse, Muslim-majority democracy can keep its institutions strong while pursuing rapid growth, and whether the democratic reforms of 1998 can survive a president with an authoritarian past." }
      ],
      takeaways: [
        "Indonesia is the world's fourth most populous country and largest Muslim-majority democracy.",
        "President Prabowo Subianto, a former general, won a landslide in 2024 and governs with almost every party.",
        "Protests in 2025 and investor jitters in 2026 have tested his government."
      ],
      check: { q: "Whose son is Indonesia's vice-president?",
        choices: ["Suharto's", "Former president Joko Widodo's", "Prabowo's"], answer: 1,
        explain: "Gibran Rakabuming Raka is the eldest son of Joko Widodo, who was president from 2014 to 2024." },
      sources: [
        { title: "Indonesia in 2026: Prabowo's First 'Real' Year of Ambition", publisher: "FULCRUM (ISEAS)", url: "https://fulcrum.sg/indonesia-in-2026-prabowos-first-real-year-of-ambition-and-why-we-should-care/", date: "2026" },
        { title: "Indonesia's interventionist presidency and its looming crisis of economic confidence", publisher: "East Asia Forum", url: "https://eastasiaforum.org/2026/06/15/indonesias-interventionist-presidency-and-its-looming-crisis-of-confidence/", date: "2026-06-15" },
        { title: "Prabowo Removes Finance Minister Purbaya in Cabinet Reshuffle", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-14/prabowo-removes-finance-minister-purbaya-in-cabinet-reshuffle", date: "2026-09-14" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "id-2", kind: "power", asOf: "2026-09-29",
      title: "A presidential democracy with a big coalition",
      dek: "Direct elections, decentralised regions, a parliament with almost no opposition, and a military edging back into civilian life.",
      blocks: [
        { type: "diagram", src: "img/id/id-2-power.svg",
          alt: "Diagram of power in Indonesia. About 200 million voters directly elect the president. President Prabowo Subianto is head of state and government, with a five-year term and a two-term limit. He is backed by the 580-seat House of Representatives, the DPR, where nearly every party is in the coalition and which passes laws and the budget. Power is shared with 38 provinces and over 500 districts, with elected governors and mayors. The military, the TNI, is watched closely: a 2025 law widened its civilian roles, and critics fear a return to the past. The next elections are for president and parliament in 2029.",
          caption: "A strong presidency, a sprawling coalition and powerful regions.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The presidency", md:
          "Since 2004 Indonesians have directly elected their president, who serves up to two five-year terms and is both head of state and head of government. Until January 2025, candidates had to be nominated by parties or coalitions holding at least 20% of parliamentary seats or 25% of the vote, which encouraged big alliances; the Constitutional Court then struck that threshold down, which could open the 2029 race to more candidates. Presidential elections are huge: more than 200 million people were eligible to vote in 2024, in what is often called the world's largest single-day election." },
        { type: "section", head: "Parliament and parties", md:
          "The House of Representatives (DPR), with 580 members, passes laws and the budget together with the government. A Regional Representative Council gives the provinces a voice. Indonesian parties are mostly built around personalities rather than ideologies, and presidents traditionally build 'big tent' coalitions. Under Prabowo nearly every party is in government; the PDI-P of former president Megawati Sukarnoputri stays outside but avoids calling itself an opposition." },
        { type: "section", head: "Decentralisation", md:
          "After the fall of Suharto in 1998, Indonesia handed large powers and budgets to its provinces and more than 500 districts and cities, whose governors, regents and mayors are directly elected. Aceh, at the northern tip of Sumatra, has special autonomy and applies Islamic law; the Papua region, in the far east, has its own special status and a long-running separatist conflict." },
        { type: "section", head: "The military's return", md:
          "Under Suharto the armed forces (TNI) had a 'dual function', running politics and the economy as well as defence. Reformasi ended it. In March 2025 parliament passed amendments allowing active officers to hold posts in 14 civilian institutions, including the Attorney General's Office, and raising retirement ages. Thousands protested, fearing a return of the dual function; the government says the changes are modest and needed for national development. The army also plays a large role in the free-meals programme and food-security projects." },
        { type: "section", head: "Courts and corruption", md:
          "The Constitutional Court, created after 1998, has made landmark rulings, but its 2023 decision allowing Gibran to run damaged its reputation. The Corruption Eradication Commission (KPK), once one of the most trusted institutions in the country, lost much of its independence after a 2019 law change. Corruption remains widespread, from local governments to state companies." },
        { type: "section", head: "The police", md:
          "The national police, separated from the army in 1999, are powerful and widely distrusted. Their paramilitary Mobile Brigade (Brimob) handles protests. Promised reforms after the 2025 unrest are a test of whether the government will rein them in and hold officers accountable." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Supporters", md:
            "A broad coalition gives Indonesia stable government and lets a popular president deliver his programme without paralysis." },
          right: { head: "Critics", md:
            "Without a real opposition, and with the military and police gaining power, checks and balances are eroding, as democracy watchdogs have reported." } }
      ],
      takeaways: [
        "Indonesia directly elects its president for up to two five-year terms.",
        "Almost every party is in Prabowo's coalition, leaving parliament with little opposition.",
        "A 2025 law widened the military's civilian roles, reviving fears of its old 'dual function'."
      ],
      check: { q: "What did the March 2025 TNI law change?",
        choices: ["It abolished the army", "It allowed active officers to hold more civilian posts", "It banned protests"], answer: 1,
        explain: "The amendments let active officers serve in 14 civilian institutions and raised retirement ages, prompting protests." },
      sources: [
        { title: "Indonesia: Parliament Passes Controversial Amendments to Law on the Military", publisher: "Library of Congress", url: "https://www.loc.gov/item/global-legal-monitor/2025-05-27/indonesia-parliament-passes-controversial-amendments-to-law-on-the-military/", date: "2025-05-27" },
        { title: "House passes contentious TNI Law amendments", publisher: "The Jakarta Post", url: "https://www.thejakartapost.com/indonesia/2025/03/20/house-passes-contentious-tni-law-amendments", date: "2025-03-20" },
        { title: "Indonesia profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-pacific-14921238", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "id-9", kind: "founding", asOf: "2026-09-29",
      title: "Merdeka: the revolution of 1945–49",
      dek: "Indonesia declared independence two days after Japan surrendered, then fought four years against the returning Dutch. The compromises of those years still define the state.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-9-hero.webp",
          alt: "Illustration of a modest veranda of a colonial-era house in Jakarta in 1945, with a small group of people in white clothing seen from behind listening to a reading.",
          caption: "Independence was proclaimed on 17 August 1945 outside Sukarno's house in Jakarta.",
          credit: "AI illustration — not a photograph",
          prompt: "The front veranda of a modest colonial-era house in Jakarta in 1945, tropical trees, a small crowd in white and khaki 1940s clothing seen from behind listening quietly, a simple bamboo flagpole without a flag, bright morning light, historic and hopeful, no faces, no legible text." },
        { type: "timeline", head: "From colony to republic", items: [
          ["1928", "Youth Pledge: one homeland, one nation, one language"],
          ["1942–45", "Japanese occupation"],
          ["1 Jun 1945", "Sukarno sets out Pancasila"],
          ["17 Aug 1945", "Sukarno and Hatta proclaim independence"],
          ["Nov 1945", "Battle of Surabaya"],
          ["1947, 1948", "Dutch 'police actions'"],
          ["27 Dec 1949", "The Netherlands transfers sovereignty"],
          ["Aug 1950", "Unitary Republic of Indonesia"]
        ] },
        { type: "section", head: "An archipelago becomes a nation", md:
          "The Dutch East Indies were a patchwork of sultanates, islands and peoples, brought under Dutch control over three centuries. An Indonesian identity was largely the creation of educated nationalists in the early twentieth century. In the 1928 Youth Pledge, young activists declared one homeland, one nation and one language, Indonesian, a form of Malay rather than the Javanese spoken by the largest group. That choice of a shared, neutral language is one reason Indonesia held together." },
        { type: "section", head: "The Japanese interlude", md:
          "Japan conquered the Indies in 1942. Its occupation was brutal; millions of Indonesians were forced into labour and hundreds of thousands died, many in famine. But the Japanese also jailed the Dutch, gave nationalist leaders such as Sukarno and Mohammad Hatta a public role and trained Indonesian militias. As defeat neared, they allowed a committee to prepare independence. On 1 June 1945 Sukarno set out Pancasila, five principles for the new state, including belief in God without making Indonesia an Islamic state." },
        { type: "section", head: "The proclamation", md:
          "Japan surrendered on 15 August 1945. Pushed by impatient young activists, who briefly kidnapped them, Sukarno and Hatta read a two-sentence proclamation of independence on the morning of 17 August. The next day a constitution was adopted, the 1945 Constitution still in force today, and Sukarno became president. In a key compromise, seven words that would have obliged Muslims to follow Islamic law were dropped from the preamble, to keep the Christian and Hindu east inside the republic." },
        { type: "section", head: "War with the Dutch", md:
          "The Netherlands wanted its colony back. British troops arriving to accept the Japanese surrender fought a bloody battle at Surabaya in November 1945, now marked as Heroes' Day. Dutch forces then launched two large offensives, which they called 'police actions', in 1947 and 1948, and captured Sukarno. Guerrilla resistance continued, and the United States, fearing communism would profit, threatened to cut Marshall Plan aid. The Dutch transferred sovereignty on 27 December 1949, and a federal state became a unitary republic in 1950." },
        { type: "compare", head: "Two readings of the revolution",
          left: { head: "Indonesia's national story", md:
            "A people united across the islands won their freedom by their own struggle, proclaimed on 17 August 1945." },
          right: { head: "Historians' additions", md:
            "The revolution was also a civil war, with violence against Chinese, Eurasians and rivals; diplomacy and US pressure mattered as much as arms." } },
        { type: "section", head: "A late apology", md:
          "Only in 2005 did the Netherlands accept 17 August 1945 'politically and morally' as the date of independence. In 2022 a large Dutch study concluded that its forces used systematic, extreme violence in the war, and the Dutch prime minister apologised. In 2023 the government said it recognised the 1945 date in full. For Indonesians, 17 August, with flags on every house and village games, is the biggest national celebration of the year." },
        { type: "section", head: "Why it still matters", md:
          "Pancasila, the 1945 Constitution and the unitary state are treated as fixed pillars that no party openly challenges, and any group seen to threaten them, whether Islamist, communist or separatist, can be banned. The army traces its political role to the revolution, when it saw itself as the guardian of the nation, a claim that returned with the 2025 changes to the military law (briefing 2)." }
      ],
      takeaways: [
        "Sukarno and Hatta proclaimed independence on 17 August 1945, two days after Japan's surrender.",
        "The Pancasila principles and a shared Indonesian language helped hold a diverse archipelago together.",
        "The Netherlands fought to return until 1949; it has since apologised for its forces' extreme violence."
      ],
      check: { q: "What is Pancasila?",
        choices: ["Indonesia's national language", "The five founding principles of the Indonesian state", "The Dutch colonial legal code"], answer: 1,
        explain: "Sukarno set out Pancasila in June 1945 as the philosophy of the new state; it includes belief in God without an Islamic state." },
      sources: [
        { title: "Sukarno", publisher: "Britannica", url: "https://www.britannica.com/biography/Sukarno", date: "n.d." },
        { title: "Indonesia: Toward independence", publisher: "Britannica", url: "https://www.britannica.com/place/Indonesia/Toward-independence", date: "n.d." },
        { title: "Indonesia: Independent Indonesia to 1965", publisher: "Britannica", url: "https://www.britannica.com/place/Indonesia/Independent-Indonesia-to-1965", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "id-3", kind: "history", asOf: "2026-09-29",
      title: "Independence, massacre, New Order, Reformasi",
      dek: "From a colony to a dictatorship built on mass killings, and then to one of Asia's most unexpected democracies.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-3-hero.webp",
          alt: "Illustration of students occupying the steps and green dome of a parliament building in Jakarta in 1998, seen from a distance.",
          caption: "In May 1998 students occupied the parliament building, helping force Suharto to resign after 32 years.",
          credit: "AI illustration — not a photograph",
          prompt: "Thousands of students occupying the steps and the roof of a parliament building with a distinctive green curved dome, seen from a distance in 1998, tropical afternoon light, jubilant and historic, muted film colours, no legible banners, no faces in close-up." },
        { type: "timeline", head: "The short version", items: [
          ["1945", "Sukarno declares independence from the Netherlands"],
          ["1965–66", "Mass killings of suspected communists"],
          ["1967–98", "Suharto's New Order"],
          ["1998", "The Asian financial crisis; Suharto resigns"],
          ["1999", "East Timor votes for independence"],
          ["2004", "First direct presidential election"],
          ["2014–24", "The Jokowi era"]
        ] },
        { type: "section", head: "1. Independence", md:
          "The Dutch ruled most of the archipelago for over three centuries. After Japanese occupation in the Second World War, nationalist leader Sukarno declared independence on 17 August 1945; the Netherlands recognised it in 1949 after a war. Sukarno promoted *Pancasila*, a state philosophy of unity in diversity and belief in God without making Indonesia an Islamic state, and led the non-aligned movement." },
        { type: "section", head: "2. 1965", md:
          "In 1965 a failed coup attempt, blamed on the Communist Party, gave the army under General Suharto the pretext for a campaign of mass killing. Between 500,000 and a million people accused of being communists were killed in 1965–66, often by militias with army backing, and hundreds of thousands more were imprisoned. The killings were not openly discussed for decades." },
        { type: "section", head: "3. The New Order", md:
          "Suharto sidelined Sukarno and ruled from 1967 to 1998. His 'New Order' delivered rapid growth and falling poverty, backed by Western governments as an anti-communist ally, while the army ran politics, dissent was crushed, and corruption enriched his family and cronies. Indonesia invaded East Timor in 1975; the occupation killed an estimated 100,000 or more people." },
        { type: "section", head: "4. Reformasi", md:
          "The 1997–98 Asian financial crisis collapsed the rupiah and brought riots, including violence against the Chinese-Indonesian minority. Students occupied parliament, and in May 1998 Suharto resigned. The *Reformasi* era that followed brought free elections, a free press, decentralisation and an end to the army's political role. East Timor voted for independence in 1999, and a 2005 peace deal ended a separatist war in Aceh." },
        { type: "section", head: "The first reform presidents", md:
          "Four presidents led Indonesia in the six years after Suharto, including Megawati Sukarnoputri, Sukarno's daughter. Susilo Bambang Yudhoyono, a reform-minded retired general, won the first direct election in 2004 and served two terms, bringing stability, growth and the Aceh peace deal. Under him Indonesia joined the G20 and became a leading voice for emerging economies and developing nations." },
        { type: "section", head: "5. Jokowi", md:
          "Joko Widodo, a former furniture exporter and mayor of Solo and then Jakarta, won the presidency in 2014 as the first leader from outside the political and military elite. He built roads, ports and airports across the archipelago, banned nickel ore exports to force processing at home, and started building a new capital on Borneo. He left office in 2024 with high approval, but critics say he weakened democratic institutions in his last years, especially when a court led by his brother-in-law cleared the way for his son to run for vice-president." }
      ],
      takeaways: [
        "Sukarno declared independence in 1945; mass killings in 1965–66 brought Suharto to power.",
        "Suharto's New Order ruled until 1998, when the Asian financial crisis and protests forced him out.",
        "Reformasi built a democracy; Jokowi (2014–24) was the first president from outside the old elite."
      ],
      check: { q: "What ended Suharto's rule in 1998?",
        choices: ["An election defeat", "The Asian financial crisis and mass protests", "A military coup"], answer: 1,
        explain: "The crisis collapsed the economy and students occupied parliament; Suharto resigned in May 1998." },
      sources: [
        { title: "Indonesia profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-pacific-15114517", date: "n.d." },
        { title: "Indonesia", publisher: "Britannica", url: "https://www.britannica.com/place/Indonesia", date: "n.d." },
        { title: "Prabowo Subianto", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prabowo_Subianto", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "id-10", kind: "past", asOf: "2026-09-29",
      title: "1965: the killings",
      dek: "After a failed coup attempt, the army and allied militias killed around half a million people accused of being communists. For decades it could not be discussed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-10-hero.webp",
          alt: "Illustration of a quiet river in rural Java at dawn, with rice fields and palm trees and an empty wooden bridge.",
          caption: "Many victims of the 1965–66 killings were buried in unmarked graves or thrown into rivers.",
          credit: "AI illustration — not a photograph",
          prompt: "A quiet brown river in rural Java at dawn, rice paddies and coconut palms on the banks, an empty weathered wooden footbridge, low mist, muted and mournful atmosphere, no people, no legible text." },
        { type: "timeline", head: "1965–1998", items: [
          ["30 Sep–1 Oct 1965", "'30 September Movement' kills six generals"],
          ["Oct 1965–1966", "Mass killings across Java, Bali and Sumatra"],
          ["Mar 1966", "Sukarno hands power to Suharto"],
          ["1966", "Communist Party banned"],
          ["1969–79", "Thousands of prisoners held on Buru island"],
          ["1998", "Suharto falls"],
          ["Jan 2023", "Jokowi acknowledges gross rights violations"]
        ] },
        { type: "section", head: "The coup attempt", md:
          "By 1965 Sukarno balanced two great rival forces: the army and the Communist Party of Indonesia (PKI), then the largest communist party outside China and the Soviet Union, with millions of members. On the night of 30 September, a group of junior officers calling themselves the '30 September Movement' kidnapped and killed six senior generals, saying they were preventing a coup. Within a day General Suharto, commander of the army's strategic reserve, crushed the movement and blamed the PKI." },
        { type: "section", head: "The killings", md:
          "What followed was one of the worst mass killings of the twentieth century. Between late 1965 and 1966 the army, and civilian militias it armed and encouraged, including Muslim youth groups in Java and nationalist gangs in Bali, killed people accused of being communists: party members, union and peasant activists, teachers, ethnic Chinese and people denounced by neighbours. Most estimates put the dead at around 500,000, some up to a million. Hundreds of thousands more were imprisoned without trial, some for over a decade." },
        { type: "section", head: "The New Order's story", md:
          "Suharto took power from Sukarno in March 1966 and ruled for 32 years. His regime taught that the PKI had been a treacherous enemy defeated by the army. A state film shown to schoolchildren every year on 30 September depicted the generals' murders in lurid detail, and said nothing about the killings. Former prisoners and their families had 'ET' (ex-political prisoner) marked on their identity cards and were barred from jobs such as teaching and the civil service." },
        { type: "section", head: "Outside powers", md:
          "Western governments welcomed the fall of the PKI. US embassy documents declassified in 2017 show American officials followed the killings closely as they happened, and earlier accounts say US diplomats gave the army lists of communist names; Britain ran propaganda against the PKI. For the West, Indonesia's turn from Sukarno's leftward drift was a great Cold War victory, and Suharto became a valued partner." },
        { type: "compare", head: "Two views of 1965",
          left: { head: "The official and conservative view", md:
            "The PKI tried to seize power; the army saved the nation from communism, and reopening the past risks new divisions." },
          right: { head: "Historians and survivors", md:
            "The coup attempt became a pretext for the organised slaughter of unarmed civilians, for which no one has been held to account." } },
        { type: "section", head: "Breaking the silence", md:
          "After 1998 the silence slowly broke. Films such as The Act of Killing (2012), in which perpetrators re-enact their crimes, and an international people's tribunal in 2015 drew attention. In January 2023 President Joko Widodo acknowledged twelve cases of gross human rights violations, including the '1965–66 events', and expressed regret, though without an apology or prosecutions. The PKI and the spreading of communism remain banned by law." },
        { type: "section", head: "Why it still matters", md:
          "1965 created the New Order and the army's dominance that defined Indonesia for a generation. Accusations of communism are still used to smear opponents, and the question of justice for past abuses, from 1965 to East Timor and 1998, hangs over a president, Prabowo Subianto, who was a Suharto-era general (briefing 5)." }
      ],
      takeaways: [
        "A failed coup attempt in 1965 was blamed on the Communist Party.",
        "The army and allied militias killed around 500,000 people, perhaps up to a million, in 1965–66.",
        "Suharto's New Order suppressed the memory; the state acknowledged the violations only in 2023."
      ],
      check: { q: "Who was targeted in the 1965–66 killings?",
        choices: ["Dutch settlers", "People accused of being communists", "Army generals"], answer: 1,
        explain: "The army and allied militias killed people accused of links to the Communist Party of Indonesia." },
      sources: [
        { title: "Indonesia's Jokowi Admits to Serious Past Human Rights Abuses", publisher: "The Diplomat", url: "https://thediplomat.com/2023/01/indonesias-jokowi-admits-to-serious-past-human-rights-abuses/", date: "2023-01" },
        { title: "Indonesia: historical violations", publisher: "UN Office of the High Commissioner for Human Rights", url: "https://www.ohchr.org/en/press-releases/2023/01/indonesia-historical-violations", date: "2023-01" },
        { title: "Indonesia: Independent Indonesia to 1965", publisher: "Britannica", url: "https://www.britannica.com/place/Indonesia/Independent-Indonesia-to-1965", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "id-11", kind: "past", asOf: "2026-09-29",
      title: "East Timor",
      dek: "Indonesia invaded the former Portuguese colony in 1975 and ruled it for 24 years. In 1999 its people voted for independence, and the army's militias burned the country.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-11-hero.webp",
          alt: "Illustration of a long queue of people in simple clothing seen from behind waiting outside a small school building on a hillside in Timor, early morning.",
          caption: "Almost everyone registered voted in the 1999 referendum, many queuing from before dawn.",
          credit: "AI illustration — not a photograph",
          prompt: "A long queue of people in simple 1990s clothing seen from behind waiting outside a small whitewashed school building on a dry hillside in Timor, eucalyptus trees, early morning light, calm determination, no faces, no flags, no legible text." },
        { type: "facts", head: "Occupation in numbers", rows: [
          ["Occupation", "December 1975 to October 1999"],
          ["Deaths, 1974–1999", "At least 102,800, most from hunger and disease (truth commission)"],
          ["1999 vote", "78.5% for independence"],
          ["Independence", "20 May 2002"],
          ["ASEAN", "Joined as the 11th member, October 2025"]
        ] },
        { type: "section", head: "Invasion", md:
          "East Timor, the eastern half of an island in the Lesser Sundas, was a neglected Portuguese colony. When Portugal's dictatorship fell in 1974 and it began to leave its empire, a short civil war left the left-leaning Fretilin party in control, and it declared independence in November 1975. Nine days later, on 7 December, Indonesia invaded. The day before, US President Gerald Ford and Secretary of State Henry Kissinger had met Suharto in Jakarta and did not object. Indonesia annexed the territory as its 27th province in 1976." },
        { type: "section", head: "Occupation", md:
          "The resistance fled to the mountains, and the army answered with bombing, forced resettlement and the destruction of crops. East Timor's truth commission later found that at least 102,800 people died as a result of the conflict between 1974 and 1999, the great majority from hunger and illness in the late 1970s. On 12 November 1991 soldiers fired on mourners at the Santa Cruz cemetery in Dili, killing more than 200 people; foreign journalists filmed it, and the footage turned the world's attention to Timor." },
        { type: "section", head: "The 1999 vote", md:
          "After Suharto fell, his successor, B. J. Habibie, surprised his own generals by offering the East Timorese a choice between autonomy within Indonesia and independence. On 30 August 1999, in a UN-run ballot, 78.5% voted for independence. Pro-Indonesian militias, organised and backed by the army, then killed an estimated 1,400 people, drove hundreds of thousands from their homes and destroyed most buildings. An Australian-led international force landed in September, and the UN ran the territory until independence in 2002." },
        { type: "section", head: "Justice and reconciliation", md:
          "Indonesian ad hoc courts tried a handful of officers and militia leaders; almost all were acquitted on appeal. Timor-Leste's leaders, notably Xanana Gusmão and José Ramos-Horta, chose to prioritise good relations with their large neighbour over prosecutions, and a joint Indonesia–Timor-Leste truth commission in 2008 found the Indonesian state responsible for gross violations. Today the two countries are friendly, and Indonesia backed Timor-Leste's entry into ASEAN, completed in October 2025." },
        { type: "compare", head: "Two views of the occupation",
          left: { head: "The Indonesian government's view at the time", md:
            "Indonesia acted to stop a communist civil war on its border and to integrate a people who wanted to join it." },
          right: { head: "Timor-Leste, the UN and most historians", md:
            "It was an illegal invasion and occupation marked by mass atrocities; the 1999 vote showed what Timorese wanted." } },
        { type: "section", head: "Why it still matters", md:
          "Losing East Timor made Indonesia's generals and nationalists fearful that other regions, especially Papua (briefing 12), might follow. Several officers who served there went on to high office, including Prabowo Subianto, who led special forces operations in Timor. And the gap between the East Timor referendum and Papua's 1969 'Act of Free Choice' is the heart of Papuan activists' argument." }
      ],
      takeaways: [
        "Indonesia invaded East Timor in 1975, days after it declared independence from Portugal.",
        "At least 102,800 people died as a result of the conflict, most from hunger and disease.",
        "In 1999 78.5% voted for independence; army-backed militias then devastated the territory."
      ],
      check: { q: "What happened in East Timor in August 1999?",
        choices: ["Indonesia annexed it", "Its people voted for independence in a UN-run ballot", "It joined ASEAN"], answer: 1,
        explain: "78.5% voted for independence, after which pro-Indonesian militias unleashed violence." },
      sources: [
        { title: "Timor-Leste independence", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Timor-Leste_independence", date: "n.d." },
        { title: "Timor-Leste FAQs (CAVR mortality estimates)", publisher: "Human Rights Data Analysis Group", url: "https://hrdag.org/timorlestefaqs/", date: "n.d." },
        { title: "Why ASEAN membership matters for Timor-Leste", publisher: "Fortune", url: "https://fortune.com/2025/10/30/why-timor-leste-joined-asean/", date: "2025-10-30" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "id-4", kind: "players", asOf: "2026-09-29",
      title: "Prabowo, Jokowi and the technocrats",
      dek: "A president with a big vision, a predecessor whose son is vice-president, and a revolving door at the finance ministry.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-4-hero.webp",
          alt: "Illustration of a white colonial-era presidential palace in Jakarta with columns and a manicured lawn, under a tropical sky.",
          caption: "Merdeka Palace in Jakarta, the president's official residence.",
          credit: "AI illustration — not a photograph",
          prompt: "A white neoclassical colonial-era palace with tall columns and a wide manicured lawn in a tropical city, palm trees, dramatic tropical clouds, soft afternoon light, stately and calm, no people close up, no flags or legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Prabowo Subianto", role: "President, since October 2024",
            img: "img/id/portrait-prabowo.webp", source: "Official portrait (Setneg / Kemhan, public domain in Indonesia) via Wikimedia Commons; confirm the licence.",
            md: "A former commander of the special forces and once Suharto's son-in-law. Dismissed from the army in 1998; later a businessman, party founder and defence minister. Prone to fiery rhetoric, and known for his big ambitions." },
          { name: "Gibran Rakabuming Raka", role: "Vice-president",
            img: "img/id/portrait-gibran.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Jokowi's eldest son and former mayor of Solo, who became vice-president at 37 after a Constitutional Court ruling that critics called nepotistic." },
          { name: "Joko Widodo", role: "President 2014–2024",
            img: "img/id/portrait-jokowi.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Still influential through his son and his network, though his relations with Prabowo's camp are closely watched." },
          { name: "Suahasil Nazara", role: "Finance minister, since September 2026",
            img: "img/id/portrait-suahasil.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A technocrat and long-serving deputy finance minister who replaced Purbaya Yudhi Sadewa on 14 September 2026, a move seen as an effort to reassure investors." },
          { name: "Sri Mulyani Indrawati", role: "Finance minister 2005–10 and 2016–25",
            img: "img/id/portrait-sri-mulyani.webp", source: "Official photo (World Bank or Kemenkeu) via Wikimedia Commons; confirm the licence.",
            md: "A former World Bank managing director, respected by markets as a guardian of fiscal discipline, replaced in September 2025 after the protests." }
        ] },
        { type: "section", head: "Megawati and the PDI-P", md:
          "Megawati Sukarnoputri, president from 2001 to 2004, still leads the PDI-P, the largest party in parliament. She fell out with Jokowi, once her party's candidate, when he backed Prabowo and his son in 2024. Her party has kept its distance from the government without fully opposing it." },
        { type: "section", head: "Prabowo's style", md:
          "Prabowo governs in a top-down, energetic style. He has created many new ministries, making his cabinet one of the largest in the world, and uses state companies, the military and a new sovereign fund to drive his priorities. He often speaks of Indonesia's wealth being drained abroad and of the need for self-reliance. His supporters see a patriot getting things done; critics see an old-style strongman sidelining technocrats." },
        { type: "section", head: "The finance ministry", md:
          "The finance ministry has become the barometer of investor confidence. Sri Mulyani, a symbol of prudence for two decades, was removed in September 2025. Her successor, Purbaya Yudhi Sadewa, pushed for more spending and lower interest rates, unsettling markets. On 14 September 2026 Prabowo replaced him with his deputy, Suahasil Nazara, a technocrat, in what analysts saw as a bid to restore fiscal credibility." },
        { type: "section", head: "Who else matters", md:
          "Prabowo's inner circle includes Sjafrie Sjamsoeddin, a fellow former general and defence minister, and Rosan Roeslani, a businessman who heads Danantara. His Gerindra party has become the centre of a coalition that also includes Golkar, the old party of the Suharto era, and several Islamic parties. The army chief and police chief are key players in delivering his programmes and keeping order across the archipelago." },
        { type: "section", head: "Civil society", md:
          "Indonesia has a lively civil society: student unions, labour groups, Islamic mass organisations such as Nahdlatul Ulama and Muhammadiyah, each with tens of millions of members, and a free if pressured press. Online, young Indonesians have mounted protest campaigns such as 'Indonesia Gelap' ('Dark Indonesia') against spending cuts and the military law." }
      ],
      takeaways: [
        "Prabowo governs in a top-down style with one of the world's largest cabinets.",
        "Jokowi's son Gibran is vice-president; Jokowi remains influential.",
        "Three finance ministers in a year: Sri Mulyani, Purbaya, and since September 2026 Suahasil Nazara."
      ],
      check: { q: "Who became Indonesia's finance minister on 14 September 2026?",
        choices: ["Sri Mulyani Indrawati", "Suahasil Nazara", "Purbaya Yudhi Sadewa"], answer: 1,
        explain: "Prabowo replaced Purbaya Yudhi Sadewa with his deputy, the technocrat Suahasil Nazara." },
      sources: [
        { title: "Prabowo replaces Purbaya with Suahasil as finance minister", publisher: "Indonesia Business Post", url: "https://indonesiabusinesspost.com/7339/national-resilience/prabowo-replaces-purbaya-with-suahasil-as-finance-minister", date: "2026-09-14" },
        { title: "Indonesia's new finance minister faces an uphill battle on fiscal credibility", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/16/indonesia-finance-minister-msci-prabowo-.html", date: "2026-09-16" },
        { title: "Indonesian Finance Minister Sri Mulyani Removed in Cabinet Reshuffle", publisher: "The Diplomat", url: "https://thediplomat.com/2025/09/indonesian-finance-minister-sri-mulyani-removed-in-cabinet-reshuffle/", date: "2025-09" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "id-5", kind: "story", asOf: "2026-09-29",
      title: "The general's return",
      dek: "How a man dismissed from the army over the abduction of activists became president with a landslide.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-5-hero.webp",
          alt: "Illustration of a huge campaign rally in a stadium at night with confetti, cartoonish animated screens and a crowd dancing.",
          caption: "Prabowo's 2024 campaign rebranded him with a cuddly, dancing image aimed at young voters.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge campaign rally in a football stadium at night, colourful confetti and stage lights, large screens showing cheerful cartoon animations without faces or text, a young crowd dancing seen from behind, festive energy, no legible text or faces." },
        { type: "section", head: "What happened", md:
          "Prabowo's career has been an extraordinary arc. As a special-forces commander in 1997–98 his men abducted pro-democracy activists; several were never found. He was discharged from the army in 1998 and spent years abroad. He came back as a businessman and founder of the Gerindra party, and ran for president in 2014 and 2019, losing both times to Jokowi and disputing the results; in 2019 protests over his defeat turned deadly.\n\n" +
          "Then he joined Jokowi's government as defence minister. In 2024, with Jokowi's son as his running mate and Jokowi's tacit support, he won 58.6% of the vote in the first round, defeating Anies Baswedan and Ganjar Pranowo." },
        { type: "timeline", head: "The road to power", items: [
          ["1998", "Discharged from the army over activist abductions"],
          ["2014, 2019", "Loses presidential races to Jokowi"],
          ["2019", "Becomes Jokowi's defence minister"],
          ["Oct 2023", "Court ruling lets Gibran run as his vice-president"],
          ["Feb 2024", "Wins with 58.6% in the first round"],
          ["Oct 2024", "Takes office"]
        ] },
        { type: "section", head: "Why he won", md:
          "Prabowo ran as Jokowi's successor, promising continuity of popular programmes and new ones such as free school meals. A social-media makeover presented him as a cuddly, dancing grandfather, appealing to young voters with little memory of 1998. Jokowi's popularity and state resources, critics argue, tilted the field. His opponents were divided." },
        { type: "section", head: "The court ruling", md:
          "Gibran, then 36, was too young to run under the rule that vice-presidential candidates must be 40. In October 2023 the Constitutional Court, then led by Jokowi's brother-in-law Anwar Usman, created an exception for candidates who had held elected regional office. An ethics panel later removed Usman as chief justice for a serious ethics violation, but the ruling stood." },
        { type: "section", head: "Jokowi's role", md:
          "Jokowi never formally endorsed Prabowo, but his visible closeness to the campaign, his son on the ticket and the timing of welfare handouts led critics to accuse him of using the state to help. His supporters say he simply chose continuity." },
        { type: "compare", head: "Two views of his victory",
          left: { head: "Supporters", md:
            "Voters chose experience, continuity and a strong leader. The past is the past; he has been elected in a free vote." },
          right: { head: "Critics", md:
            "The election was shaped by Jokowi's use of state power and a court ruling favouring his son. Prabowo's human-rights record has never been properly examined." } },
        { type: "section", head: "Since taking office", md:
          "In office Prabowo has moved quickly: expanding the cabinet, launching free meals and Danantara, pardoning or granting clemency to thousands of prisoners, and bringing former rivals into government. He has also granted amnesty to some opposition figures, a gesture of reconciliation that critics saw as political dealmaking." },
        { type: "section", head: "Why it matters", md:
          "Prabowo's rise shows how memories of the Suharto era have faded for a young electorate, and how Indonesia's elites reconcile after bitter contests. His victory raised concern among rights groups about whether Reformasi's gains would be protected." }
      ],
      takeaways: [
        "Prabowo was discharged from the army in 1998 over the abduction of activists.",
        "After losing to Jokowi twice, he joined his government and then won in 2024 with Jokowi's son as running mate.",
        "A social-media rebrand and Jokowi's backing helped him win 58.6% in the first round."
      ],
      check: { q: "Whom did Prabowo lose to in 2014 and 2019?",
        choices: ["Megawati Sukarnoputri", "Joko Widodo", "Anies Baswedan"], answer: 1,
        explain: "Jokowi beat Prabowo in both 2014 and 2019; Prabowo later joined his cabinet as defence minister." },
      sources: [
        { title: "Prabowo Subianto", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prabowo_Subianto", date: "2026" },
        { title: "Indonesia profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-pacific-15114517", date: "n.d." },
        { title: "Prabowo's policies won't fix Indonesia's problems", publisher: "Lowy Institute", url: "https://www.lowyinstitute.org/the-interpreter/prabowo-s-policies-won-t-fix-indonesia-s-problems", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "id-6", kind: "story", asOf: "2026-09-29",
      title: "The big-state agenda",
      dek: "Free meals for 80 million, a giant sovereign fund, and a bigger role for the army: Prabowo's plan to make Indonesia rich by 2045.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-6-hero.webp",
          alt: "Illustration of schoolchildren in uniforms sitting at long tables in a school hall, each with a metal lunch tray of rice, vegetables and egg.",
          caption: "The free meals programme aims to feed tens of millions of schoolchildren and pregnant women.",
          credit: "AI illustration — not a photograph",
          prompt: "Schoolchildren in red and white uniforms seen from behind sitting at long tables in a simple school hall, each with a compartmented metal lunch tray of rice, vegetables and egg, fans on the ceiling, warm light, hopeful, no faces, no legible text." },
        { type: "section", head: "What happened", md:
          "Prabowo's flagship is the Free Nutritious Meals programme, launched in January 2025 to feed schoolchildren and pregnant women, with a target of more than 80 million recipients and a cost of about $15 billion a year. It is run by a new national agency with help from the army and police. Outbreaks of food poisoning affecting thousands of pupils, and a corruption probe that led Prabowo to fire the programme's head in June 2026, have dogged it.\n\n" +
          "In February 2025 he launched Danantara, a sovereign wealth fund that took control of stakes in major state companies worth an estimated $900 billion, modelled on Singapore's Temasek. It is meant to invest in downstream industries, energy and food." },
        { type: "facts", head: "The flagships", rows: [
          ["Free meals", "Launched January 2025; target over 80 million recipients; about $15 billion a year"],
          ["Danantara", "Sovereign fund launched February 2025; assets estimated at around $900 billion"],
          ["Growth target", "8% a year by 2029"],
          ["Budget cuts", "About Rp 300 trillion (roughly $19 billion) of 'efficiencies' ordered in 2025"]
        ] },
        { type: "section", head: "Why", md:
          "Prabowo argues that malnourished children cannot build a rich country, that too much of Indonesia's wealth has flowed abroad, and that the state must lead industrialisation. He wants Indonesia to become a high-income country by its centenary in 2045. To pay for his programmes he has ordered deep cuts in other spending, which protesters blamed for reduced services." },
        { type: "section", head: "Food and energy", md:
          "Prabowo has also launched programmes to make Indonesia self-sufficient in rice, corn and sugar, including large new farm estates in Papua and Kalimantan, some run with the army, and a push for biofuels made from palm oil. Environmental groups warn of forest clearance and conflicts with Indigenous communities." },
        { type: "compare", head: "Two views of the agenda",
          left: { head: "Supporters", md:
            "Feeding children is a sound investment, and a strong state is needed to turn Indonesia's resources into industry and jobs." },
          right: { head: "Critics", md:
            "The programmes are costly, poorly run and centralised; they strain the budget, crowd out other spending and give the army too big a role." } },
        { type: "section", head: "Nickel and downstreaming", md:
          "The policy of banning raw ore exports and requiring processing at home, begun under Jokowi, made Indonesia the world's top producer of refined nickel, mostly through Chinese-built smelters on Sulawesi and Halmahera. It brought investment and jobs, but also pollution, deforestation and deadly industrial accidents, and a glut that pushed down world nickel prices." },
        { type: "section", head: "The new capital", md:
          "Jokowi's plan to move the capital from sinking, congested Jakarta to Nusantara, a new city in the forests of East Kalimantan, has slowed under Prabowo, who has cut its funding while insisting the project will continue. Foreign investors have been slow to commit." },
        { type: "section", head: "What's next", md:
          "Investors are watching the budget deficit, which Indonesian law caps at 3% of GDP, and whether the new finance minister can restore confidence while funding Prabowo's priorities." }
      ],
      takeaways: [
        "Free school meals, launched in 2025, aim to reach over 80 million people at about $15 billion a year.",
        "Danantara, launched in February 2025, controls state-company stakes worth an estimated $900 billion.",
        "Critics warn of fiscal strain, poor implementation and the army's growing role."
      ],
      check: { q: "What is Danantara?",
        choices: ["A new capital city", "Indonesia's sovereign wealth fund", "A political party"], answer: 1,
        explain: "Launched in February 2025, Danantara manages the state's stakes in major companies and invests in priority sectors." },
      sources: [
        { title: "Free Meal Program (Indonesia)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Free_Meal_Program_(Indonesia)", date: "2026" },
        { title: "Indonesia's Prabowo Taps Danantara to Drive Agenda, Testing Fund's Capacity", publisher: "US News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-06-18/analysis-indonesias-prabowo-taps-danantara-to-drive-agenda-testing-funds-capacity", date: "2026-06-18" },
        { title: "Prabowonomics: Can Indonesia Really Grow at 8%?", publisher: "Bulletin of Indonesian Economic Studies", url: "https://www.tandfonline.com/doi/full/10.1080/00074918.2026.2638632", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "id-7", kind: "story", asOf: "2026-09-29",
      title: "The August protests",
      dek: "Anger at lawmakers' perks exploded when a police vehicle ran over a young delivery driver. The unrest cost the finance minister her job.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-7-hero.webp",
          alt: "Illustration of a crowd of motorbike taxi drivers in green jackets gathered at a busy Jakarta intersection at dusk, seen from above.",
          caption: "Online motorbike-taxi drivers joined the protests after one of their own was killed.",
          credit: "AI illustration — not a photograph",
          prompt: "A large crowd of motorbike taxi drivers in green jackets and helmets gathered at a busy tropical city intersection at dusk, seen from above, stalled traffic, smoke in the distance, tense and angry mood, no legible text or logos, no faces in close-up." },
        { type: "section", head: "What happened", md:
          "In late August 2025 protests erupted in Jakarta over generous housing allowances for members of parliament, at a time of layoffs and rising prices. On 28 August a paramilitary police armoured vehicle ran over and killed Affan Kurniawan, a 21-year-old motorbike-taxi driver who had been delivering a food order near the protests. Video of the incident spread instantly.\n\n" +
          "Riots spread to cities across the country. Protesters set fire to regional parliament buildings; in Makassar three people died trapped in a burning building. Homes of several lawmakers and of Sri Mulyani were looted. By early September the government had cut lawmakers' allowances, dismissed the officer involved, promised police reform, and replaced several ministers, including Sri Mulyani." },
        { type: "timeline", head: "How it unfolded", items: [
          ["25 Aug 2025", "Protests over lawmakers' allowances begin"],
          ["28 Aug 2025", "Affan Kurniawan killed by a police vehicle"],
          ["29–31 Aug 2025", "Riots and arson across the country"],
          ["8 Sep 2025", "Sri Mulyani replaced by Purbaya Yudhi Sadewa"],
          ["Jun 2026", "New student protests over economic strain"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The protests tapped deep frustrations: a shortage of good jobs for young people, rising living costs, spending cuts to fund the president's programmes, and a political class seen as self-serving, with almost no opposition in parliament to channel anger. Police brutality turned a protest about perks into a national uprising." },
        { type: "section", head: "Online anger", md:
          "Much of the mobilisation happened online, through TikTok, X and messaging groups, and delivery drivers used their ride-hailing networks to gather quickly. TikTok temporarily suspended its live-streaming feature in Indonesia during the worst of the unrest, and the government warned platforms against 'provocative' content. Young protesters borrowed a pirate flag from the manga One Piece as their symbol." },
        { type: "section", head: "The toll", md:
          "At least ten people died during the unrest, according to Indonesian rights groups, and thousands were arrested. Several activists were charged with incitement, which rights groups called an attempt to criminalise protest." },
        { type: "compare", head: "Two views of the unrest",
          left: { head: "The government", md:
            "Peaceful protest is legitimate, and the government listened; but rioters and looters, some organised, exploited the moment and had to be stopped." },
          right: { head: "Protesters and rights groups", md:
            "The unrest was a cry against an elite that ignores ordinary people. Heavy-handed policing and arrests of activists show democratic space is shrinking." } },
        { type: "section", head: "Why it matters", md:
          "The protests were the most serious of Prabowo's presidency and showed the limits of governing without an opposition. Removing Sri Mulyani, a symbol of fiscal prudence, unsettled markets and began the year of finance-ministry turnover described in the players briefing. In June 2026 students protested again, amid a weakening rupiah." },
        { type: "section", head: "The response", md:
          "Prabowo first blamed 'treason and terrorism' for the riots, then met labour and student leaders and promised to listen. He revoked some lawmakers' perks and ordered an investigation into the police. Critics said the reforms were cosmetic." },
        { type: "section", head: "What's next", md:
          "Watch whether promised police reforms happen, how the government handles future protests, and whether economic pressure, especially food and fuel prices, sparks new unrest." }
      ],
      takeaways: [
        "Protests over MPs' housing allowances began in late August 2025.",
        "The killing of delivery driver Affan Kurniawan by a police vehicle turned them into nationwide riots.",
        "The government cut perks and replaced finance minister Sri Mulyani, unsettling investors."
      ],
      check: { q: "What first sparked the August 2025 protests?",
        choices: ["A fuel price rise", "Generous housing allowances for members of parliament", "A disputed election"], answer: 1,
        explain: "Anger at lawmakers' allowances started the protests; the killing of a delivery driver by a police vehicle escalated them." },
      sources: [
        { title: "August 2025 Indonesian protests", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/August_2025_Indonesian_protests", date: "2025" },
        { title: "Delivery Driver's Death Unleashes Rage at Indonesia's Elites", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-08-31/delivery-driver-s-death-unleashes-fury-against-indonesia-elites", date: "2025-08-31" },
        { title: "Protest wave challenges Indonesia's authoritarian drift", publisher: "East Asia Forum", url: "https://eastasiaforum.org/2025/10/20/protest-wave-challenges-indonesias-authoritarian-drift/", date: "2025-10-20" },
        { title: "Indonesian students protest gov't policies amid economic strain", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/12/indonesian-students-protest-govt-policies-amid-economic-strain", date: "2026-06-12" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "id-12", kind: "spotlight", asOf: "2026-09-29",
      title: "Papua",
      dek: "Indonesia's easternmost region is rich in minerals and forests, poor in almost every other measure, and home to the country's longest-running separatist conflict.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-12-hero.webp",
          alt: "Illustration of steep green highlands in Papua with mist in the valleys and a traditional round thatched hut, a person seen from behind on a path.",
          caption: "Most Indigenous Papuans live in the highlands and along the coasts of the western half of New Guinea.",
          credit: "AI illustration — not a photograph",
          prompt: "Steep lush green highlands of Papua with low mist in the valleys, a traditional round thatched honai hut, sweet potato gardens, a single person seen from far behind walking on a mountain path, soft morning light, beautiful and remote, no faces, no legible text, no flags." },
        { type: "facts", head: "Papua at a glance", rows: [
          ["Where", "The western half of New Guinea"],
          ["Provinces", "Six since 2022 (previously two)"],
          ["People", "About 5.5 million; Indigenous Papuans are Melanesian"],
          ["Resources", "Grasberg copper and gold mine; forests; gas"],
          ["Joined Indonesia", "1963 under UN arrangements; 'Act of Free Choice' 1969"]
        ] },
        { type: "section", head: "Left out in 1949", md:
          "When the Dutch handed over the East Indies in 1949, they kept western New Guinea, arguing that its Melanesian peoples were distinct and preparing them for self-government; a Papuan council raised the Morning Star flag in 1961. Sukarno threatened war. Under American pressure, the 1962 New York Agreement, negotiated without Papuans, handed the territory to a brief UN administration and then to Indonesia in 1963, on condition that Papuans would later decide their future." },
        { type: "section", head: "The 'Act of Free Choice'", md:
          "The vote came in 1969. Instead of a referendum, Indonesia selected 1,025 representatives, who voted unanimously to remain part of Indonesia, under heavy military pressure. The UN General Assembly took note of the result and accepted it. Indonesia regards the matter as closed. Papuan independence activists call it the 'Act of No Choice' and say their right to self-determination was never exercised." },
        { type: "section", head: "Conflict and grievance", md:
          "An armed movement, the Free Papua Movement (OPM), has fought a low-level insurgency since the 1960s; its armed wing has attacked soldiers, police, construction workers and, in 2023, took a New Zealand pilot hostage for 19 months. The security forces have been accused of killings, torture and displacement of villagers; thousands have fled fighting in the highlands. Rights groups and journalists face tight restrictions on access, so reliable figures are scarce." },
        { type: "section", head: "Riches and poverty", md:
          "Papua holds Grasberg, one of the world's largest copper and gold mines, run by Freeport-McMoRan with the Indonesian state now the majority owner. Yet Papua has Indonesia's highest poverty rates and lowest life expectancy. Decades of migration from other islands, partly under the government's transmigration programme, have made Indigenous Papuans a minority in many towns and much of the economy. Special autonomy, granted in 2001 and renewed in 2021, brought large budgets but, critics say, little change." },
        { type: "compare", head: "Two views of Papua",
          left: { head: "Jakarta", md:
            "Papua is an inseparable part of Indonesia; development, roads and special autonomy are closing the gap, and separatists are criminals." },
          right: { head: "Papuan activists", md:
            "Papuans were never allowed to choose; development serves outsiders, and they face racism and military repression." } },
        { type: "section", head: "Why it matters", md:
          "Papua tests Indonesia's promise of unity in diversity. Racist abuse of Papuan students in Surabaya in 2019 set off the biggest protests in the region for years. Prabowo's plans for giant rice and sugarcane estates in the south, backed by more troops, worry Indigenous communities and environmental groups (briefing 8). Pacific island states, many of them fellow Melanesians, regularly raise Papua at the UN, and Jakarta pushes back hard." }
      ],
      takeaways: [
        "Papua joined Indonesia through the 1962 New York Agreement and a 1969 'Act of Free Choice' in which 1,025 selected representatives voted.",
        "A low-level independence insurgency and rights abuses by security forces continue.",
        "Papua is rich in minerals but has Indonesia's highest poverty rates."
      ],
      check: { q: "How many people voted in Papua's 1969 'Act of Free Choice'?",
        choices: ["About 1,000 selected representatives", "Every adult Papuan", "About 100,000 registered voters"], answer: 0,
        explain: "Indonesia chose 1,025 representatives, who voted unanimously for integration." },
      sources: [
        { title: "Act of Free Choice", publisher: "International Parliamentarians for West Papua", url: "https://www.ipwp.org/background/act-of-free-choice/", date: "n.d." },
        { title: "Fifty Years after the 'Act of Free Choice': The West Papua Issue", publisher: "ANU Open Research", url: "https://openresearch-repository.anu.edu.au/bitstreams/1c20aaec-95da-4b17-a61e-2c8f561a03c1/download", date: "n.d." },
        { title: "Papua", publisher: "Britannica", url: "https://www.britannica.com/place/Papua", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "id-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "A popular president, a jittery market, a big agenda and three years to the next election.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id/id-8-hero.webp",
          alt: "Illustration of a nickel smelter complex on a tropical coast, with chimneys releasing plumes over green hills and a port with ore ships.",
          caption: "Nickel smelters on Sulawesi and Halmahera have made Indonesia the world's biggest nickel producer.",
          credit: "AI illustration — not a photograph",
          prompt: "A large industrial smelter complex on a tropical coastline, tall chimneys releasing grey plumes over green forested hills, a port with bulk ore ships, turquoise sea, contrast of industry and nature, no people close up, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Power:** Prabowo is popular and faces almost no parliamentary opposition.\n" +
          "- **Economy:** growth of about 5%, below his 8% goal; the rupiah hit record lows in 2026.\n" +
          "- **Finance:** Suahasil Nazara, a technocrat, took over the finance ministry on 14 September 2026.\n" +
          "- **Democracy:** watchdogs report shrinking civic space and a growing military role.\n" +
          "- **Abroad:** a BRICS member, courted by China and the US, and offering troops for Gaza." },
        { type: "section", head: "Indonesia in the world", md:
          "Prabowo has travelled widely, visiting Beijing, Washington, Moscow and the Gulf. Indonesia joined BRICS in January 2025, reached a trade deal with the United States that set a 19% tariff on its exports, and offered thousands of troops for a Gaza stabilisation force. It is a leading voice for the Palestinians and does not recognise [[unit:il|Israel]]. In the South China Sea, it quietly contests Chinese claims near its Natuna Islands." },
        { type: "section", head: "Markets", md:
          "Foreign investors have been selling Indonesian stocks and bonds amid worries about the budget, the independence of the central bank and the growing role of the state. The appointment of Suahasil Nazara was meant to reassure them; whether it works depends on the 2027 budget and on whether Prabowo lets his finance minister say no." },
        { type: "section", head: "Papua", md:
          "In the Papua region, a low-level separatist insurgency continues, with clashes between armed groups and security forces and reports of abuses on both sides. Government plans for new farm estates and more troops there have raised tensions with Indigenous Papuans." },
        { type: "section", head: "What voters want", md:
          "Surveys suggest Indonesians' biggest concerns are prices, jobs and corruption. Prabowo's approval ratings have remained high, above 70% in several polls, even as confidence in parliament, parties and the police is low. Young, urban Indonesians are the most critical, and most active online." },
        { type: "section", head: "The climate question", md:
          "Indonesia is one of the world's biggest emitters because of coal power and deforestation. It has pledged to phase out coal plants with Western financing, but Prabowo's push for industrial growth, nickel processing and food estates pulls the other way, and new coal plants built for smelters are still being added." },
        { type: "section", head: "Three scenarios", md:
          "- **Growth and stability.** Confidence returns, investment flows, and Prabowo cruises toward re-election in 2029.\n" +
          "- **Economic squeeze.** A weak rupiah, fiscal strain and new protests force spending cuts.\n" +
          "- **Democratic backsliding.** Critics' fears come true as the military, police and presidency gather more power." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Ongoing:** the rupiah and investor confidence under the new finance minister\n" +
          "- **Late 2026:** the 2027 budget and the 3% deficit ceiling\n" +
          "- **Ongoing:** protests, police reform and the free meals programme\n" +
          "- **2029:** presidential and parliamentary elections" },
        { type: "section", head: "Connections", md:
          "Indonesia's story runs through [[unit:cn]] (trade, nickel smelters and the South China Sea), [[unit:us]] (tariffs and defence ties), [[unit:au]] (its southern neighbour), [[unit:in]] and [[unit:jp]] (partners), [[unit:ru]] (arms and diplomacy) and [[unit:sa]] (Hajj and Gulf investment)." }
      ],
      takeaways: [
        "Prabowo is popular and faces little opposition, but investors are nervous.",
        "Growth is around 5%, far below his 8% goal, and the rupiah has hit record lows.",
        "Indonesia balances BRICS membership, ties with China and a trade deal with the US."
      ],
      check: { q: "Which bloc did Indonesia join in January 2025?",
        choices: ["NATO", "BRICS", "The European Union"], answer: 1,
        explain: "Indonesia joined BRICS in January 2025, while keeping close ties with the US and other partners." },
      sources: [
        { title: "Indonesia's new finance minister faces an uphill battle on fiscal credibility", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/16/indonesia-finance-minister-msci-prabowo-.html", date: "2026-09-16" },
        { title: "ADB sees Indonesia's economy to grow 5.2% in 2026, below gov't target", publisher: "IDN Financials", url: "https://www.idnfinancials.com/news/62915/adb-sees-indonesias-economy-to-grow-5-2-in-2026-below-govt-target", date: "2026" },
        { title: "Indonesia: Protests maintain the government under pressure", publisher: "Credendo", url: "https://credendo.com/en/knowledge-hub/indonesia-protests-maintain-government-under-pressure-improve-socioeconomic", date: "2026" }
      ]
    }
  ]
});
