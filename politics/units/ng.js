/* ============================================================
   Unit 30 — Nigeria 🇳🇬
   Research note and sources: tools/research/ng.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ng", {
  id: "ng",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ng-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Nigeria in brief",
      dek: "Africa's most populous country, three years into painful reforms and four months from a presidential election.",
      blocks: [
        { type: "map", src: "maps/ng.svg",
          alt: "Locator map of West Africa with Nigeria highlighted on the Gulf of Guinea, bordered by Benin to the west, Niger to the north, Chad to the north-east and Cameroon to the east, and a small globe showing its place in the world.",
          caption: "Nigeria stretches from the Gulf of Guinea's mangroves and oil fields to the dry Sahel on the edge of the Sahara.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Abuja (largest city: Lagos)"],
          ["People", "About 230 million, the most in Africa; half are under 19"],
          ["System", "Federal presidential republic of 36 states"],
          ["President", "Bola Ahmed Tinubu (APC), since May 2023"],
          ["Inflation", "15.4% in August 2026, down from over 30% in 2024"],
          ["Oil", "Africa's largest producer; oil is most of its exports"],
          ["Next election", "16 January 2027"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "One in every six Africans is Nigerian, and by 2050 Nigeria is projected to be the world's third most populous country, after India and China. It is Africa's biggest oil producer and one of its largest economies, home to the continent's richest man, Aliko Dangote, and a cultural superpower whose Afrobeats music and Nollywood films are known worldwide. Its tech start-ups in Lagos have drawn billions in investment.\n\n" +
          "It also faces some of the world's worst insecurity outside a war zone: jihadist insurgencies in the north-east, armed kidnapping gangs in the north-west, and deadly clashes between farmers and herders in the centre. How Nigeria fares shapes the whole of West Africa, where a string of coups since 2020 has left it as the region's main democracy." },
        { type: "section", head: "Who holds power", md:
          "Bola Tinubu, a veteran political boss and former governor of Lagos, won the 2023 election for the All Progressives Congress (APC) with 37% of the vote, in a three-way race that his rivals challenged in court and lost. On his first day he announced the end of the fuel subsidy, and he soon let the naira float, the most sweeping economic reforms in decades. The APC controls the National Assembly and most of the 36 states." },
        { type: "section", head: "The mood in 2026", md:
          "The reforms have begun to show results in the statistics: inflation has fallen to 15.4%, growth reached 4.4% in the second quarter, and the naira has stabilised. But many families are poorer than before Tinubu took office, food prices remain crippling, and insecurity continues. The opposition is split, which works in Tinubu's favour ahead of the January 2027 vote." },
        { type: "section", head: "What Nigeria wants", md:
          "Tinubu wants to show that his reforms are paying off, attract investment into oil, gas and manufacturing, and win re-election. Nigerians want lower food prices, jobs for a huge young population, and safety on the roads and in their villages." },
        { type: "section", head: "Land and people", md:
          "Nigeria is roughly divided between a mainly Muslim north, drier and poorer, and a mainly Christian south, more urban and commercial, with a mixed Middle Belt between them. Lagos, with perhaps 20 million people, is the commercial hub; Kano is the great city of the north. Nigerians are young, entrepreneurial and increasingly urban, and millions have emigrated, to Britain, the US and across Africa, sending home more than $20 billion a year." },
        { type: "callout", tone: "why", md:
          "Nigeria's size makes it central to Africa's future: whether its democracy and economy work will affect hundreds of millions of people and the stability of a region shaken by coups and jihadism." }
      ],
      takeaways: [
        "Nigeria has about 230 million people, Africa's largest population, and is its biggest oil producer.",
        "President Bola Tinubu ended the fuel subsidy and floated the naira; inflation is now falling.",
        "The presidential election is on 16 January 2027, with a divided opposition."
      ],
      check: { q: "What did Tinubu announce on his first day in office?",
        choices: ["A state of emergency", "The end of the fuel subsidy", "A new capital"], answer: 1,
        explain: "In his inaugural address on 29 May 2023 he declared 'the fuel subsidy is gone', and petrol prices soared." },
      sources: [
        { title: "Tinubu Begins Reelection Campaign With Growth Yet to Reach Nigerians", publisher: "Ecofin Agency", url: "https://www.ecofinagency.com/news-finances/0109-58497-tinubu-begins-reelection-campaign-with-growth-yet-to-reach-nigerians", date: "2026-09-01" },
        { title: "Nigeria Inflation Rate", publisher: "Trading Economics", url: "https://tradingeconomics.com/nigeria/inflation-cpi", date: "2026-09" },
        { title: "Nigeria profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-africa-13949550", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ng-2", kind: "power", asOf: "2026-09-29",
      title: "A president, 36 governors and an unwritten rotation",
      dek: "An American-style federal system, with a winning formula that forces candidates to campaign nationwide.",
      blocks: [
        { type: "diagram", src: "img/ng/ng-2-power.svg",
          alt: "Diagram of power in Nigeria. Voters elect the president for four years, with a maximum of two terms; to win, a candidate needs the most votes and at least 25% in two-thirds of the 36 states. Bola Tinubu of the APC holds the office. The National Assembly has a 109-seat Senate and a 360-seat House of Representatives; the APC holds majorities. Thirty-six state governors control large budgets and state politics. The courts, up to the Supreme Court, decide election disputes. The military is powerful but under civilian rule since 1999.",
          caption: "A federal presidency modelled on the United States, with very powerful governors.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The president", md:
          "Nigeria's 1999 constitution, written as the military handed back power, created a presidency modelled on the American one. The president is elected for four years and can serve two terms. To win in the first round, a candidate needs the most votes nationwide and at least 25% of the vote in two-thirds of the 36 states and the capital territory, a rule meant to force candidates to seek support across ethnic and religious lines. Otherwise, a runoff is held." },
        { type: "section", head: "Zoning", md:
          "An unwritten rule, 'zoning', holds that the presidency should rotate between the mainly Muslim north and the mainly Christian south, and that the president and vice-president should come from different regions and faiths. Tinubu, a Yoruba Muslim from the south-west, broke convention by choosing another Muslim, Kashim Shettima from the north-east, as his running mate in 2023. Zoning shapes every party's choice of candidates." },
        { type: "section", head: "Congress and the governors", md:
          "The National Assembly has a 109-member Senate, three per state plus one for Abuja, and a 360-member House of Representatives. Nigeria's 36 governors are among its most powerful politicians: they control large budgets from oil revenue shared out by the federal government, dominate their state parties and legislatures, and deliver votes. In recent years several opposition governors have defected to the ruling APC, hollowing out the old main opposition party, the PDP." },
        { type: "section", head: "Courts and the military", md:
          "Almost every major election result ends up in court. The Supreme Court upheld Tinubu's 2023 victory against challenges by his rivals. The military ruled Nigeria for most of the period from 1966 to 1999 and remains powerful, deployed in most states against insurgents and bandits. The arrest of officers accused of plotting a coup in 2025 showed that civilian rule cannot be taken for granted." },
        { type: "section", head: "Emergency powers", md:
          "In March 2025 Tinubu declared a state of emergency in oil-rich Rivers State after a feud between its governor and state lawmakers, suspending the elected governor for six months and appointing an administrator. The courts and many lawyers questioned whether the constitution allowed it; the governor was restored in September 2025." },
        { type: "section", head: "Local government and the police", md:
          "Below the states are 774 local government areas, which receive federal money directly but have often been controlled by governors in practice; a 2024 Supreme Court ruling ordered their funds paid to them directly. Nigeria has a single national police force, centrally controlled from Abuja, which many governors blame for insecurity. Tinubu has backed creating state police forces, a change that would need a constitutional amendment." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "Federalism and the 25% rule hold together a hugely diverse country of more than 250 ethnic groups, and democracy has survived for over 25 years, the longest stretch in Nigeria's history." },
          right: { head: "Its critics", md:
            "Power is too concentrated in the presidency and the governors, elections are expensive and often rigged, and oil money funds patronage rather than services." } }
      ],
      takeaways: [
        "Nigeria's president needs the most votes and 25% in two-thirds of the states to win outright.",
        "Informal 'zoning' rotates the presidency between north and south.",
        "The 36 governors are very powerful, and the military remains a force in politics."
      ],
      check: { q: "What does Nigeria's '25% rule' require?",
        choices: ["25% turnout", "At least 25% of the vote in two-thirds of the states", "A 25-seat majority"], answer: 1,
        explain: "A winning candidate needs the most votes plus at least a quarter of the vote in two-thirds of the states and the capital territory." },
      sources: [
        { title: "Nigeria", publisher: "Britannica", url: "https://www.britannica.com/place/Nigeria", date: "n.d." },
        { title: "BTI 2026 Nigeria Country Report", publisher: "Bertelsmann Stiftung", url: "https://bti-project.org/en/reports/country-report/NGA", date: "2026" },
        { title: "World Report 2026: Nigeria", publisher: "Human Rights Watch", url: "https://www.hrw.org/world-report/2026/country-chapters/nigeria", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "ng-9", kind: "founding", asOf: "2026-09-29",
      title: "Amalgamation to independence, 1914–1960",
      dek: "Britain created Nigeria in 1914 by joining two colonies with very different peoples. Nigerians won independence in 1960, but the question of how to hold the country together was never settled.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-9-hero.webp",
          alt: "Illustration of a crowd in colourful 1960 clothing, agbadas and wrappers, seen from behind in a stadium at night, with fireworks overhead.",
          caption: "Nigeria celebrated independence at midnight on 1 October 1960 in Lagos.",
          credit: "AI illustration — not a photograph",
          prompt: "A large festive crowd in colourful 1960 West African clothing, flowing agbadas, wrappers and head ties, seen from behind in an open stadium at night, fireworks bursting in the sky, joyful and historic, no faces, no flags, no legible text." },
        { type: "timeline", head: "Making Nigeria", items: [
          ["1861", "Britain annexes Lagos"],
          ["1900", "Northern and Southern protectorates"],
          ["1 Jan 1914", "Lugard amalgamates them into one colony"],
          ["1946–54", "Constitutions create regional governments and a federation"],
          ["1 Oct 1960", "Independence; Balewa prime minister"],
          ["1963", "Nigeria becomes a republic"],
          ["Jan 1966", "First military coup"]
        ] },
        { type: "section", head: "A British creation", md:
          "Britain expanded from Lagos, annexed in 1861, and the trading posts of the Niger Delta, and conquered the Sokoto Caliphate in the north by 1903. The name 'Nigeria', after the Niger River, was suggested by the journalist Flora Shaw in 1897. On 1 January 1914 Frederick Lugard merged the Northern and Southern Protectorates into a single colony, mainly to use the richer south's revenues to fund the north. Nigerians still debate the 'mistake of 1914'." },
        { type: "section", head: "Indirect rule", md:
          "Lugard governed the Muslim north through its emirs, a system called indirect rule, and kept Christian missionaries and Western schools largely out. The south, especially Lagos and the Yoruba and Igbo areas, gained schools, newspapers and a Western-educated elite much earlier. The result was a colony of very unequal regions, with the north much larger in population but behind in education, a gap that shaped politics for decades." },
        { type: "section", head: "The road to independence", md:
          "After the Second World War nationalists such as Nnamdi Azikiwe, Obafemi Awolowo and Ahmadu Bello pushed for self-rule. But their parties were rooted in the three big regions: the Northern People's Congress in the Hausa-Fulani north, the Action Group in the Yoruba west and the NCNC in the Igbo-led east. Britain granted a federal constitution in 1954, giving each region wide powers. Northern leaders, worried about southern dominance, asked to delay independence until their region was ready." },
        { type: "section", head: "Independence", md:
          "Nigeria became independent on 1 October 1960, with Abubakar Tafawa Balewa, a northerner, as prime minister and Azikiwe as governor-general, then president when Nigeria became a republic in 1963. The new federation was fragile: the north held more than half the seats in parliament, disputed censuses and elections inflamed rivalries, and violence in the west in 1964–65 led to the coup of January 1966 that ended the First Republic ([[lesson:ng-3]])." },
        { type: "compare", head: "Two views of 1914",
          left: { head: "A nation in the making", md:
            "Amalgamation created a large, diverse country with the size and resources to be a leading power in Africa." },
          right: { head: "A forced marriage", md:
            "Britain joined peoples who never chose to live together, and the imbalance it built in has fuelled conflict ever since." } },
        { type: "section", head: "Why it still matters", md:
          "Nigeria's politics still turns on balancing north and south, Muslims and Christians, and the major ethnic groups. The unwritten rule of rotating the presidency between north and south ([[lesson:ng-2]]), demands for 'restructuring' to give states more power and control over resources, and separatist movements all go back to the way the country was created and to the regional rivalries of the 1950s." }
      ],
      takeaways: [
        "Britain created Nigeria on 1 January 1914 by merging its northern and southern protectorates.",
        "Indirect rule in the north and faster Western education in the south left the regions deeply unequal.",
        "Nigeria won independence on 1 October 1960 as a federation of three powerful regions."
      ],
      check: { q: "What did Frederick Lugard do in 1914?",
        choices: ["Granted Nigeria independence", "Merged the Northern and Southern Protectorates into one colony", "Founded Lagos"], answer: 1,
        explain: "The amalgamation of 1 January 1914 created a single colony called Nigeria." },
      sources: [
        { title: "History of Nigeria: Nigeria as a colony", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Nigeria/Nigeria-as-a-colony", date: "n.d." },
        { title: "Frederick Lugard", publisher: "Britannica", url: "https://www.britannica.com/biography/Frederick-Lugard", date: "n.d." },
        { title: "Nigeria: Independent Nigeria", publisher: "Britannica", url: "https://www.britannica.com/place/Nigeria/Independent-Nigeria", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ng-3", kind: "history", asOf: "2026-09-29",
      title: "Colony, civil war, coups, democracy",
      dek: "A British creation of hundreds of peoples, torn by civil war and ruled by generals, now in its longest spell of democracy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-3-hero.webp",
          alt: "Illustration of a vast granite monolith rising above a modern capital city with a large gold-domed mosque and green hills.",
          caption: "Abuja, the planned capital built in the centre of the country, beneath the granite of Aso Rock.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast smooth granite monolith rising above a modern planned capital city, a large mosque with a golden dome and slender minarets in the foreground, green hills, wide boulevards, bright tropical afternoon light, grand and calm, no people, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1914", "Britain merges north and south into one colony"],
          ["1960", "Independence"],
          ["1966", "Two coups; ethnic massacres"],
          ["1967–70", "Biafran civil war"],
          ["1993", "Military annuls a presidential election"],
          ["1999", "Return to civilian rule"],
          ["2015", "First opposition victory: Buhari"],
          ["2023", "Tinubu elected"]
        ] },
        { type: "section", head: "1. A British creation", md:
          "The land that became Nigeria held powerful states, from the Sokoto Caliphate in the north to the Yoruba kingdoms and the Benin Kingdom in the south, and hundreds of peoples speaking more than 500 languages. Britain conquered them in the 19th century and in 1914 merged its northern and southern territories into a single colony, governed separately in practice. The largest groups, the Hausa-Fulani in the north, the Yoruba in the south-west and the Igbo in the south-east, dominated politics after independence in 1960." },
        { type: "section", head: "2. Coups and Biafra", md:
          "In January 1966 mostly Igbo officers staged a coup that killed northern leaders; a northern counter-coup and massacres of Igbo people followed. In 1967 the south-east declared independence as Biafra. The federal government's blockade caused mass starvation, and between one and three million people died before Biafra surrendered in 1970. The war still shapes Igbo politics, and a separatist movement, IPOB, remains active." },
        { type: "section", head: "3. Oil and the generals", md:
          "Oil, discovered in the Niger Delta in 1956, made Nigeria rich on paper but fuelled corruption, pollution and conflict in the Delta. The military ruled for most of 1966–99. In 1993 General Ibrahim Babangida annulled a presidential election apparently won by Moshood Abiola; his successor, Sani Abacha, ruled brutally, executed the writer and activist Ken Saro-Wiwa in 1995 and looted billions. Abacha's sudden death in 1998 opened the way to civilian rule." },
        { type: "section", head: "4. The Fourth Republic", md:
          "Olusegun Obasanjo, a former general, won the 1999 election. The PDP held power for 16 years. In 2015 Muhammadu Buhari of the APC became the first opposition candidate to defeat a sitting president, a landmark for African democracy. His two terms were marked by recessions, a botched currency redesign, and the 2020 #EndSARS protests against police brutality, which ended when soldiers opened fire on protesters in Lagos." },
        { type: "section", head: "5. Boko Haram", md:
          "From 2009 the jihadist group Boko Haram waged an insurgency in the north-east that has killed tens of thousands and displaced millions. In 2014 it kidnapped 276 schoolgirls from Chibok, prompting a global campaign; dozens remain missing. A faction loyal to the Islamic State, ISWAP, is now the stronger force around Lake Chad." },
        { type: "section", head: "6. Tinubu's turn", md:
          "In 2023 Tinubu faced Atiku of the PDP and Peter Obi, who ran for the small Labour Party and energised young voters, especially in the south. Tinubu won with 37%, the lowest winning share since 1999, on a turnout of just 27%. Atiku and Obi alleged rigging, pointing to failures in the electronic transmission of results, but the Supreme Court upheld his victory in October 2023." }
      ],
      takeaways: [
        "Britain merged Nigeria's north and south in 1914, joining hundreds of peoples in one state.",
        "The Biafran civil war of 1967–70 killed between one and three million people.",
        "Military rule ended in 1999; in 2015 an opposition candidate won for the first time."
      ],
      check: { q: "What happened in Nigeria's 2015 election?",
        choices: ["The military took over", "An opposition candidate, Muhammadu Buhari, defeated a sitting president for the first time", "It was cancelled"], answer: 1,
        explain: "Buhari's victory over Goodluck Jonathan was the first peaceful transfer of power to the opposition in Nigeria's history." },
      sources: [
        { title: "Nigeria: History", publisher: "Britannica", url: "https://www.britannica.com/place/Nigeria/History", date: "n.d." },
        { title: "Biafra", publisher: "Britannica", url: "https://www.britannica.com/place/Biafra", date: "n.d." },
        { title: "Nigeria profile: Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-africa-13951696", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "ng-10", kind: "past", asOf: "2026-09-29",
      title: "Biafra: the civil war, 1967–70",
      dek: "When Nigeria's south-east broke away as Biafra, the war and blockade that followed killed between half a million and three million people, most of them from starvation.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-10-hero.webp",
          alt: "Illustration of a small rural airstrip at night in dense palm forest, lit by lanterns, with an old propeller cargo plane landing.",
          caption: "Relief flights landed at night on a road turned airstrip at Uli, Biafra's lifeline.",
          credit: "AI illustration — not a photograph",
          prompt: "A narrow road used as an airstrip at night in dense palm forest in south-eastern Nigeria, lined with dim lanterns, an old four-engine propeller cargo plane landing with its lights on, a few figures seen from far behind waiting with carts, tense and dramatic, no faces, no legible text, no flags." },
        { type: "timeline", head: "The war", items: [
          ["Jan 1966", "Coup by mostly Igbo officers"],
          ["Jul 1966", "Northern counter-coup"],
          ["1966", "Massacres of Igbo people in the north"],
          ["30 May 1967", "Ojukwu declares the Republic of Biafra"],
          ["Jul 1967", "Federal offensive begins"],
          ["1968–69", "Blockade and famine"],
          ["15 Jan 1970", "Biafra surrenders"]
        ] },
        { type: "section", head: "Coups and massacres", md:
          "In January 1966 a group of mostly Igbo army majors killed the prime minister, the premier of the north, Ahmadu Bello, and other leaders. Many northerners saw it as an Igbo plot. In July northern officers staged a counter-coup, killed the military head of state, and installed Lieutenant Colonel Yakubu Gowon. That year mobs in the north killed thousands of Igbo people, and more than a million fled back to the east." },
        { type: "section", head: "Secession", md:
          "The eastern military governor, Lieutenant Colonel Chukwuemeka Odumegwu Ojukwu, argued that Igbo people were no longer safe in Nigeria. Talks in Ghana failed, and Gowon split the regions into twelve states, cutting off the east from much of the oil in its south. On 30 May 1967 Ojukwu declared the independent Republic of Biafra. Federal forces attacked in July. Britain and the Soviet Union armed Nigeria; France gave Biafra covert help, and only five countries recognised it." },
        { type: "section", head: "Starvation", md:
          "Federal forces surrounded Biafra and blockaded it. By 1968 images of starving children with swollen bellies shocked the world; the Biafran government used them to win sympathy, while federal leaders called starvation a legitimate weapon of war. Church groups and the Red Cross flew in food at night to an improvised airstrip at Uli. Estimates of the dead range from 500,000 to 3 million, mostly civilians who died of hunger and disease. Massacres also took place, such as at Asaba in 1967." },
        { type: "section", head: "'No victor, no vanquished'", md:
          "Biafra collapsed in January 1970; Ojukwu fled to Côte d'Ivoire. Gowon declared that there was 'no victor, no vanquished' and offered reconciliation, and there were no mass reprisals. But Igbo people who returned found their property in other regions seized, and each was given only £20 regardless of their bank savings. Many Igbo still feel excluded from power: no Igbo has been elected president since the war." },
        { type: "compare", head: "Two memories of the war",
          left: { head: "Many in the south-east", md:
            "Biafra was a fight for survival after massacres; the blockade was a genocide, and marginalisation continues." },
          right: { head: "The federal view", md:
            "The war preserved Nigeria's unity against an illegal secession, and reconciliation afterwards was generous." } },
        { type: "section", head: "Why it still matters", md:
          "The war is barely taught in Nigerian schools, but its memory is alive. The Indigenous People of Biafra (IPOB) has revived calls for independence; its 'sit-at-home' orders have paralysed south-eastern cities, and violence by armed groups and security forces there has killed many. In November 2025 its leader, Nnamdi Kanu, was sentenced to life imprisonment for terrorism. Peter Obi's strong showing in 2023 energised many Igbo voters ([[lesson:ng-4]])." }
      ],
      takeaways: [
        "Coups in 1966 and massacres of Igbo people in the north led the east to secede as Biafra in 1967.",
        "Nigeria's blockade caused famine; between 500,000 and 3 million people died.",
        "Biafra surrendered in 1970; separatism has revived, and IPOB's leader was jailed for life in 2025."
      ],
      check: { q: "What caused most deaths in the Nigerian civil war?",
        choices: ["Air raids on Lagos", "Starvation and disease under the blockade of Biafra", "Oil fires"], answer: 1,
        explain: "Most victims were civilians in Biafra who died of hunger and disease during the blockade." },
      sources: [
        { title: "Nigerian Civil War", publisher: "Britannica", url: "https://www.britannica.com/topic/Nigerian-civil-war", date: "n.d." },
        { title: "The Nigerian-Biafran War", publisher: "African Studies Centre Leiden", url: "https://www.ascleiden.nl/content/webdossiers/nigerian-biafran-war", date: "n.d." },
        { title: "Will Nnamdi Kanu's Life Sentence End the Agitation for Biafra?", publisher: "IPS", url: "https://www.ipsnews.net/2025/12/nigeria-will-nnamdi-kanus-life-sentence-end-the-violent-agitation-for-biafra/", date: "2025-12" }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "ng-11", kind: "past", asOf: "2026-09-29",
      title: "June 12, 1993",
      dek: "Nigeria's freest election was annulled by the military ruler who organised it. The fight that followed shaped the democracy that returned in 1999, and the career of President Tinubu.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-11-hero.webp",
          alt: "Illustration of a long line of voters in colourful clothing seen from behind queueing in the open air at a polling station under a large tree.",
          caption: "Voters queued across the country on 12 June 1993 in an election observers praised as fair.",
          credit: "AI illustration — not a photograph",
          prompt: "A long orderly line of Nigerian voters in colourful early-1990s clothing seen from behind queueing in the open air at a rural polling station under a large shade tree, a simple wooden table ahead, bright midday sun, hopeful civic mood, no faces, no legible text." },
        { type: "timeline", head: "From annulment to democracy", items: [
          ["12 Jun 1993", "Presidential election; Abiola wins"],
          ["23 Jun 1993", "Babangida annuls the result"],
          ["Nov 1993", "General Sani Abacha seizes power"],
          ["1994", "Abiola declares himself president and is jailed"],
          ["10 Nov 1995", "Ken Saro-Wiwa and eight others hanged"],
          ["Jun–Jul 1998", "Abacha dies; Abiola dies in custody"],
          ["29 May 1999", "Civilian rule returns"],
          ["2018", "12 June made Democracy Day"]
        ] },
        { type: "section", head: "A promised transition", md:
          "General Ibrahim Babangida, who took power in a 1985 coup, promised to hand over to civilians and designed an elaborate transition with two government-created parties. In the presidential election of 12 June 1993, Moshood Abiola, a wealthy Yoruba Muslim businessman and philanthropist from the south-west, ran for the Social Democratic Party with a Muslim northern running mate. He won support across ethnic and religious lines, and observers judged the vote the freest in Nigeria's history." },
        { type: "section", head: "Annulled", md:
          "Before the full results were announced, Babangida annulled the election on 23 June, citing irregularities. Protests and strikes shook Lagos and the south-west, and dozens were killed. Babangida stepped aside in August for a civilian interim government, which General Sani Abacha overthrew in November. When Abiola declared himself president on the first anniversary of the vote, in 1994, he was arrested for treason." },
        { type: "section", head: "The Abacha years", md:
          "Abacha's rule was the harshest in Nigeria's history. Opponents were jailed or killed; Abiola's wife Kudirat was assassinated in 1996. The pro-democracy coalition NADECO campaigned from exile, among them Bola Tinubu, then a senator from Lagos. In November 1995 the regime hanged the writer Ken Saro-Wiwa and eight other Ogoni activists after a widely condemned trial, and the Commonwealth suspended Nigeria. Abacha, who looted billions of dollars, died suddenly in June 1998; Abiola died in custody a month later, on the eve of his expected release." },
        { type: "section", head: "Democracy returns", md:
          "Abacha's successor, General Abdulsalami Abubakar, organised a quick transition. Olusegun Obasanjo, a former military ruler and a Yoruba, was elected in 1999, partly to placate the south-west over Abiola. For years 29 May, the date of the handover, was Democracy Day. In 2018 President Buhari moved it to 12 June and posthumously gave Abiola the country's highest honour." },
        { type: "compare", head: "Two views of the annulment",
          left: { head: "Most Nigerians today", md:
            "A theft of the people's mandate by the military, which set democracy back six years and cost many lives." },
          right: { head: "Babangida's account", md:
            "He says in his memoir that he annulled it to prevent a coup by officers opposed to Abiola, and has expressed regret." } },
        { type: "section", head: "Why it still matters", md:
          "June 12 is a symbol of what Nigerian elections could be: across ethnic and religious lines, and respected. Tinubu, who fought for Abiola's mandate, often invokes it, while critics point out that elections since 1999, including Tinubu's own in 2023, have been marred by low turnout and fraud claims ([[lesson:ng-3]]). The struggle also produced a generation of civil society activists and a lasting distrust of the military, relevant as rumours of coup plots return ([[lesson:ng-7]])." }
      ],
      takeaways: [
        "Moshood Abiola won the 12 June 1993 election, widely seen as Nigeria's freest, but the military annulled it.",
        "General Abacha's brutal rule followed; Ken Saro-Wiwa was hanged in 1995 and Abiola died in custody in 1998.",
        "Civilian rule returned in 1999, and 12 June became Democracy Day in 2018."
      ],
      check: { q: "What happened to the 12 June 1993 presidential election?",
        choices: ["It was won by Obasanjo", "The military government annulled it", "It was postponed to 1999"], answer: 1,
        explain: "General Babangida annulled the result before it was fully announced; Abiola was widely believed to have won." },
      sources: [
        { title: "June 12 is now Democracy Day in Nigeria. Why it matters", publisher: "The Conversation", url: "https://theconversation.com/june-12-is-now-democracy-day-in-nigeria-why-it-matters-118572", date: "2018" },
        { title: "June 12 presidential election was annulled to prevent coup — Babangida", publisher: "The Guardian (Nigeria)", url: "https://guardian.ng/news/june-12-presidential-election-was-annulled-to-prevent-coup-babangida/", date: "2025" },
        { title: "History of Nigeria", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Nigeria", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "ng-4", kind: "players", asOf: "2026-09-29",
      title: "Tinubu and his challengers",
      dek: "The 'Jagaban' of Lagos, and three veterans who want his job.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-4-hero.webp",
          alt: "Illustration of a busy Lagos highway at dusk with yellow minibuses, a lagoon bridge and a skyline of towers.",
          caption: "Lagos, Tinubu's political base and Africa's largest city.",
          credit: "AI illustration — not a photograph",
          prompt: "A busy multi-lane highway in a huge West African coastal city at dusk, many yellow minibuses and cars, a long bridge over a lagoon, a skyline of glass towers under an orange sky, energetic and crowded, no people close up, no legible text or logos." },
        { type: "people", head: "Five to know", items: [
          { name: "Bola Ahmed Tinubu", role: "President (APC), since May 2023",
            img: "img/ng/portrait-tinubu.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Governor of Lagos 1999–2007 and for two decades the kingmaker of south-western politics, known as the 'Jagaban'. Helped found the APC and put Buhari in power, then claimed his turn: 'Emi lokan' ('it is my turn')." },
          { name: "Kashim Shettima", role: "Vice-president",
            img: "img/ng/portrait-shettima.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Former governor of Borno State, the heartland of the Boko Haram insurgency; Tinubu's northern partner." },
          { name: "Atiku Abubakar", role: "ADC presidential candidate",
            img: "img/ng/portrait-atiku.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Vice-president 1999–2007 and a wealthy businessman from the north-east, running for president for the seventh time; came second in 2019 and 2023." },
          { name: "Peter Obi", role: "NDC presidential candidate",
            img: "img/ng/portrait-obi.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Former governor of Anambra State who won 25% in 2023 on a wave of support from young, urban 'Obidient' voters; the leading candidate from the south-east." },
          { name: "Rabiu Musa Kwankwaso", role: "Former governor of Kano",
            img: "img/ng/portrait-kwankwaso.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Commands a devoted following in Kano, Nigeria's most populous northern state; joined Obi in the NDC in May 2026." }
        ] },
        { type: "section", head: "Tinubu's style", md:
          "Tinubu is a political operator above all: a master of alliances and deals who built the coalition that won in 2015 and 2023. As president he has governed through a small circle of loyalists and technocrats, including the finance minister, Wale Edun, and the central bank governor, Olayemi Cardoso, who have carried out the economic reforms. Critics say he spends too much time abroad and has concentrated power, while pulling opposition governors into his party with the lure of federal favour." },
        { type: "section", head: "The opposition's collapse and split", md:
          "In mid-2025 Atiku, Obi and other opposition figures formed a coalition under the small African Democratic Congress (ADC) to unseat Tinubu. It did not last. Disputes over who would be the candidate, legal uncertainty over the party's leadership and tight deadlines under the new Electoral Act led Obi and Kwankwaso to leave for the Nigeria Democratic Congress (NDC) in May 2026. Atiku now runs for the ADC, Obi for the NDC, and the old main opposition party, the PDP, has been weakened by defections." },
        { type: "section", head: "The ruling party", md:
          "The APC was formed in 2013 by a merger of opposition parties, including Tinubu's south-western party and Buhari's northern one. It has since become the dominant party, controlling most governorships and the National Assembly. In 2026 it nominated Tinubu for a second term, and a series of PDP governors defected to it in 2025–26, bringing their state machines with them." },
        { type: "section", head: "Who votes for whom", md:
          "Nigerian elections are shaped by region, religion and ethnicity as well as by the economy. Tinubu is strongest in the south-west and among APC governors in the north. Atiku draws on northern Muslim voters, Obi on the Christian south-east and young urban voters, and Kwankwaso on Kano. A split opposition makes it easier for Tinubu to win the most votes and meet the 25% rule in enough states." }
      ],
      takeaways: [
        "Tinubu is a master political dealmaker who built the APC's winning coalition.",
        "The opposition coalition under the ADC split in May 2026: Atiku runs for the ADC, Obi for the NDC.",
        "A divided opposition improves Tinubu's chances of re-election in January 2027."
      ],
      check: { q: "Why did Peter Obi leave the ADC coalition?",
        choices: ["He retired", "Disputes over the candidacy and legal uncertainty led him and Kwankwaso to join the NDC", "He joined the APC"], answer: 1,
        explain: "Obi and Kwankwaso left for the Nigeria Democratic Congress in May 2026, citing the ADC's internal crisis and legal uncertainty." },
      sources: [
        { title: "Nigeria 2027: Atiku, Obi and Kwankwaso's split widens Tinubu's reelection path", publisher: "The Africa Report", url: "https://www.theafricareport.com/418257/nigeria-2027-atiku-obi-and-kwankwasos-split-widens-tinubus-reelection-path/", date: "2026" },
        { title: "Tinubu Secures APC Nomination for Nigeria 2027 Election Race as Opposition Coalition Falters", publisher: "The Rio Times", url: "https://www.riotimesonline.com/nigeria-2027-election-race-2026/", date: "2026" },
        { title: "2027: Tinubu Must Go, Atiku Declares", publisher: "ThisDay", url: "https://www.thisdaylive.com/2026/09/25/2027-tinubu-must-go-atiku-declares-woos-ondo-voters-as-jegede-joins-the-adc/", date: "2026-09-25" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "ng-5", kind: "story", asOf: "2026-09-29",
      title: "Shock therapy",
      dek: "Tinubu scrapped the petrol subsidy and floated the naira. Prices exploded, then began to calm. Three years on, is it working?",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-5-hero.webp",
          alt: "Illustration of a long queue of cars and motorbikes at a petrol station in a hot city, with jerry cans lined up on the ground.",
          caption: "Petrol prices roughly tripled after the subsidy ended in 2023.",
          credit: "AI illustration — not a photograph",
          prompt: "A long queue of cars and motorbike taxis at a busy petrol station in a hot West African city, colourful plastic jerry cans lined up on the ground, hazy sunlight, street vendors under umbrellas nearby, crowded and tense, no faces, no legible text or logos." },
        { type: "section", head: "What happened", md:
          "For decades Nigeria held petrol prices far below the market rate, a subsidy that cost more than the entire health and education budgets and was riddled with fraud. On 29 May 2023 Tinubu declared that 'the fuel subsidy is gone'. Pump prices roughly tripled within weeks. Weeks later the central bank unified the official and black-market exchange rates, letting the naira fall; it lost about two-thirds of its value against the dollar.\n\n" +
          "Inflation surged above 30% in 2024, the highest in nearly three decades, and food prices rose even faster. Millions of Nigerians cut back to one meal a day. Tinubu's government also raised taxes on some goods, reformed the tax system in 2025, and raised the minimum wage to 70,000 naira a month." },
        { type: "section", head: "Signs of recovery", md:
          "By 2026 the picture had improved in the statistics. Inflation fell to 15.4% in August 2026, from 23.1% a year earlier, and food inflation eased. Growth reached 4.4% in the second quarter, the naira stabilised at around 1,330 to the dollar, foreign reserves rose, and investors returned to Nigerian bonds. The giant Dangote refinery near Lagos began producing petrol, reducing Nigeria's absurd dependence on imported fuel despite being an oil exporter." },
        { type: "facts", head: "The reforms in numbers", rows: [
          ["Fuel subsidy", "Ended 29 May 2023"],
          ["Naira", "About 1,330 to the dollar (Sept 2026), from about 460 before the float"],
          ["Inflation", "Over 30% in 2024; 15.4% in August 2026"],
          ["Growth", "4.4% in Q2 2026"],
          ["Minimum wage", "70,000 naira a month since 2024"]
        ] },
        { type: "section", head: "Where the savings went", md:
          "The government says the money once spent on the subsidy now goes to states, roads and a cash-transfer programme for poor households, and that the tax reform will broaden the tax base in one of the world's most under-taxed economies. Critics say much of the windfall has gone to state and federal governments' running costs, and that cash transfers reached only a fraction of the poor." },
        { type: "section", head: "Oil output", md:
          "Nigeria's oil production, long cut by theft from pipelines in the Niger Delta and underinvestment, has recovered somewhat under Tinubu, and several international oil companies have sold their onshore fields to Nigerian firms. More oil means more dollars to stabilise the naira." },
        { type: "compare", head: "Two verdicts",
          left: { head: "The government and investors", md:
            "The reforms ended waste and fraud, rebuilt reserves and brought investors back. The worst is over, and growth will follow." },
          right: { head: "Critics and many households", md:
            "The reforms were necessary but brutally sequenced, with too little protection for the poor. Families are worse off than in 2023, and the gains have gone to the few." } },
        { type: "section", head: "Why it matters", md:
          "By some estimates more than 60% of Nigerians live in poverty, and tens of millions face food insecurity. Whether voters feel the recovery by January will decide how much the reforms cost Tinubu at the polls, and whether his successors dare to keep them." }
      ],
      takeaways: [
        "Tinubu ended the costly fuel subsidy and floated the naira in 2023.",
        "Inflation topped 30% in 2024 but fell to 15.4% by August 2026.",
        "Economic indicators have improved, but many households are still poorer than before."
      ],
      check: { q: "What happened to inflation after the reforms?",
        choices: ["It stayed below 5%", "It rose above 30% in 2024, then fell to about 15% by 2026", "It turned negative"], answer: 1,
        explain: "Prices surged after the subsidy's removal and the naira's float, then eased as the currency stabilised." },
      sources: [
        { title: "Tinubu's reforms: What have they changed for Nigerians?", publisher: "Neusroom", url: "https://neusroom.com/tinubus-reforms-what-have-they-changed-for-nigerians/", date: "2026" },
        { title: "Nigeria Explained 2026: The Country, Tinubu's Reforms and What to Watch", publisher: "The Rio Times", url: "https://www.riotimesonline.com/nigeria-explained-2026/", date: "2026" },
        { title: "Nigeria Inflation Rate", publisher: "Trading Economics", url: "https://tradingeconomics.com/nigeria/inflation-cpi", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "ng-6", kind: "story", asOf: "2026-09-29",
      title: "Bandits, jihadists and an American strike",
      dek: "Mass kidnappings, jihadist attacks and a US accusation of Christian persecution brought American missiles to Nigeria on Christmas Day 2025.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-6-hero.webp",
          alt: "Illustration of an empty rural school compound with simple classroom blocks, a dusty yard and an open metal gate, under a pale sky.",
          caption: "Schools in the north have been targeted by kidnapping gangs.",
          credit: "AI illustration — not a photograph",
          prompt: "An empty rural school compound in the dry savanna, simple single-storey classroom blocks with painted walls, a dusty yard with a lone tree, a metal gate left open, pale hazy sky, eerie silence, no people, no legible text." },
        { type: "section", head: "What happened", md:
          "Nigeria faces several overlapping conflicts. In the north-east, Boko Haram and the Islamic State's West Africa Province (ISWAP) attack soldiers and villages. In the north-west, armed gangs known as bandits kidnap for ransom on an industrial scale, sometimes seizing entire schools. In the central Middle Belt, clashes between mainly Muslim Fulani herders and mainly Christian farmers over land have killed thousands.\n\n" +
          "In November 2025 gunmen abducted 25 schoolgirls in Kebbi State and, days later, 315 students and staff from St Mary's, a Catholic school in Papiri, Niger State. All were eventually freed, the last in December." },
        { type: "section", head: "Washington steps in", md:
          "In late October 2025 Donald Trump designated Nigeria a 'Country of Particular Concern' for religious freedom, saying Christians faced an 'existential threat', and threatened military action. Nigeria's government rejected claims of a genocide against Christians, saying jihadists and gangs kill Muslims and Christians alike, a view shared by many independent researchers. On 25 December 2025, US forces fired missiles at two Islamic State camps in Sokoto State in the north-west, in coordination with the Nigerian authorities." },
        { type: "facts", head: "The crisis", rows: [
          ["North-east", "Boko Haram and ISWAP insurgency since 2009"],
          ["North-west", "Kidnapping gangs; jihadist groups spreading"],
          ["November 2025", "Kebbi and Papiri school kidnappings"],
          ["Late October 2025", "US names Nigeria a 'Country of Particular Concern'"],
          ["25 December 2025", "US strikes on Islamic State camps in Sokoto"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Nigeria's police and army are stretched thin across a huge country. Poverty, unemployment, climate change pushing herders south, a flood of weapons from the Sahel, and the collapse of state authority in neighbouring Niger after its 2023 coup have fuelled the violence. Jihadist groups have started to work with bandit gangs in the north-west, a worrying convergence." },
        { type: "section", head: "The Middle Belt", md:
          "In the Middle Belt, states such as Benue and Plateau, the violence often pits herders against farmers over land and water, with communities destroyed and revenge attacks on both sides. In June 2025 an attack on the village of Yelwata in Benue killed many dozens of people, and the Catholic Church and local leaders have pressed for protection. Much of this violence is not jihadist, but it has fed the narrative of religious persecution abroad." },
        { type: "compare", head: "Two views of the US role",
          left: { head: "Supporters", md:
            "Nigeria's government has failed to protect its people, especially Christians. US pressure and firepower can force action and hit the jihadists." },
          right: { head: "Critics", md:
            "Framing the violence as a religious genocide oversimplifies conflicts over land, crime and jihadism that kill Muslims too, and risks inflaming tensions." } },
        { type: "section", head: "What's next", md:
          "Tinubu replaced his service chiefs in October 2025 and has promised more recruits and state police. Security will be a central campaign issue, and any new mass kidnapping before January would weigh heavily on the president and his party." }
      ],
      takeaways: [
        "Nigeria faces jihadist insurgency in the north-east, kidnapping gangs in the north-west and farmer-herder violence in the centre.",
        "Hundreds of students were kidnapped in November 2025; all were eventually freed.",
        "The US designated Nigeria a 'Country of Particular Concern' and struck Islamic State camps on 25 December 2025."
      ],
      check: { q: "Where did US forces strike in Nigeria on Christmas Day 2025?",
        choices: ["Lagos", "Islamic State camps in Sokoto State", "The Niger Delta"], answer: 1,
        explain: "US Africa Command struck two Islamic State camps in Sokoto State in coordination with Nigerian authorities." },
      sources: [
        { title: "Trump says US military struck ISIS terrorists in Nigeria", publisher: "CNN", url: "https://www.cnn.com/2025/12/25/politics/us-strikes-isis-nigeria", date: "2025-12-25" },
        { title: "Is there a Christian genocide in Nigeria? Evidence shows all faiths are under attack by terrorists", publisher: "The Conversation", url: "https://theconversation.com/is-there-a-christian-genocide-in-nigeria-evidence-shows-all-faiths-are-under-attack-by-terrorists-268929", date: "2025-11" },
        { title: "What the latest school kidnapping tells us about Nigeria's security crisis", publisher: "The New Humanitarian", url: "https://www.thenewhumanitarian.org/analysis/2025/12/18/exclusive-what-latest-school-kidnapping-tells-us-about-nigerias-security-crisis", date: "2025-12-18" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "ng-7", kind: "story", asOf: "2026-09-29",
      title: "The coup plot",
      dek: "In 2025 sixteen officers were arrested. Months later, the military admitted they were accused of plotting to overthrow the president.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-7-hero.webp",
          alt: "Illustration of a military barracks gate at night under floodlights, with an empty guard post and a flagpole without a flag.",
          caption: "West Africa has seen a wave of coups since 2020. Nigeria says it foiled one.",
          credit: "AI illustration — not a photograph",
          prompt: "A military barracks gate at night under harsh floodlights, an empty concrete guard post, a barrier arm lowered, a bare flagpole, a dark road leading in, moths around the lights, tense and ominous, no people, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "In late September and October 2025, 16 military officers, ranging from captain to brigadier-general, were quietly arrested. The army first said they were held for 'indiscipline'. In January 2026, after a three-month investigation, the Defence Headquarters confirmed that they had been found to have plotted to overthrow Tinubu's government and would face a military tribunal. In April 2026 prosecutors also charged six people, including a retired major-general and a serving police inspector, with terrorism and treason in the civilian courts. Those accused deny the charges." },
        { type: "section", head: "Why it matters", md:
          "Since 2020 soldiers have seized power in Mali, Burkina Faso, Guinea, Niger, Gabon and Guinea-Bissau, and a coup attempt failed in neighbouring Benin in December 2025. The Sahel juntas have expelled French troops, turned to Russia and left the regional bloc ECOWAS, which Nigeria leads. Nigeria's own history of coups, from 1966 to 1993, makes any plot a serious matter. The arrests came as Tinubu replaced his service chiefs, a move the presidency said was routine." },
        { type: "facts", head: "The plot", rows: [
          ["Arrests", "16 officers, late September–October 2025"],
          ["Plot confirmed", "January 2026, by Defence Headquarters"],
          ["Civilian charges", "Six people, April 2026, for terrorism and treason"],
          ["Possible penalty", "Up to death under military law"]
        ] },
        { type: "section", head: "The trials", md:
          "The military said the 16 officers would face a court martial, where the penalties for mutiny and treason include death. Lawyers and rights groups have questioned whether civilians accused alongside them can be tried by the military, which is one reason six suspects were charged in the civilian courts instead. Details of the alleged plot, including who was to lead it and when, have not been made fully public." },
        { type: "compare", head: "Two views",
          left: { head: "The government", md:
            "The security services detected and stopped a serious threat to democracy, and the plotters will face justice." },
          right: { head: "Sceptics", md:
            "The long silence and shifting explanations raise questions, and military trials of civilians may be unconstitutional. The episode reveals discontent in the ranks." } },
        { type: "section", head: "Beyond the barracks", md:
          "Many soldiers are frustrated by long deployments, poor pay and heavy losses against jihadists and bandits, and some Nigerians, angry at hardship and corruption, have expressed sympathy for the Sahel juntas on social media. Democracy has survived in Nigeria since 1999, but support for it in surveys has fallen." },
        { type: "section", head: "Nigeria and the Sahel", md:
          "The coups next door matter to Nigeria directly. After Niger's army seized power in July 2023, ECOWAS, led by Tinubu, threatened military intervention to restore the elected president, then backed down amid opposition at home and in the region. Niger, Mali and Burkina Faso formed their own 'Alliance of Sahel States' and left ECOWAS in January 2025, weakening the regional bloc and cooperation against jihadist groups along Nigeria's northern border." },
        { type: "section", head: "What's next", md:
          "The tribunal's proceedings, and whether they are held in public, will be watched closely. So will the army's conduct in the January 2027 election." }
      ],
      takeaways: [
        "Sixteen officers arrested in 2025 were later accused of plotting to overthrow Tinubu.",
        "Six people, including a retired major-general, were charged with terrorism and treason in April 2026.",
        "The plot came amid a wave of coups across West Africa since 2020."
      ],
      check: { q: "How did the military first describe the officers' arrests?",
        choices: ["As a coup plot", "As 'indiscipline'", "As a training exercise"], answer: 1,
        explain: "The army initially cited indiscipline; in January 2026 it confirmed that the officers were accused of plotting a coup." },
      sources: [
        { title: "Nigeria roiled by alleged coup plot to topple Tinubu", publisher: "African Business", url: "https://african.business/2026/02/politics/nigeria-roiled-by-alleged-coup-plot-to-topple-tinubu", date: "2026-02" },
        { title: "Nigeria charges six people with 'terrorism', treason over 2025 coup plot", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/4/21/nigeria-charges-six-people-with-terrorism-treason-over-2025-coup-plot", date: "2026-04-21" },
        { title: "Nigerian military says officers will be tried after a probe found they carried out a coup plot", publisher: "AP via The Hill", url: "https://thehill.com/homenews/ap/ap-international/ap-nigerian-military-says-officers-will-be-tried-after-a-probe-found-they-carried-out-a-coup-plot/", date: "2026-01" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "ng-12", kind: "spotlight", asOf: "2026-09-29",
      title: "Oil and the Niger Delta",
      dek: "Oil has paid for Nigeria's state for half a century, but the region that produces it is among the most polluted places on earth. Now the foreign majors are leaving and a giant local refinery is changing the business.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-12-hero.webp",
          alt: "Illustration of a winding creek in the Niger Delta lined with mangroves, with a small wooden canoe and a distant gas flare burning on the horizon.",
          caption: "Gas flares still burn across the Delta's creeks and mangroves.",
          credit: "AI illustration — not a photograph",
          prompt: "A winding creek in the Niger Delta lined with dense mangroves, a small wooden dugout canoe with a fisherman seen from behind, oily sheen on the water, a distant orange gas flare burning on the horizon under a hazy dusk sky, beautiful but troubled mood, no faces, no legible text." },
        { type: "facts", head: "Oil in numbers", rows: [
          ["First commercial oil", "Oloibiri, 1956"],
          ["Share of government revenue", "Historically well over half"],
          ["Dangote refinery", "650,000 barrels a day, opened 2024"],
          ["Shell's onshore sale", "Completed March 2025"],
          ["Amnesty programme", "Since 2009, for former militants"]
        ] },
        { type: "section", head: "Riches and ruin", md:
          "Oil was found at Oloibiri in the Delta in 1956, and by the 1970s it dominated exports and the federal budget. Most of the money flowed to Abuja and the states through a formula the Delta's people considered unfair, and much was stolen. Meanwhile decades of spills from ageing pipelines, sabotage and theft, and the flaring of gas, poisoned creeks, farmland and fishing grounds. A 2011 UN report on Ogoniland said a full clean-up could take 30 years." },
        { type: "section", head: "Resistance", md:
          "In the early 1990s Ken Saro-Wiwa's Movement for the Survival of the Ogoni People led peaceful protests against Shell and the government, until he and eight others were hanged in 1995 ([[lesson:ng-11]]); in 2025 Tinubu granted the 'Ogoni Nine' a posthumous pardon, though their families sought full exoneration. In the 2000s armed groups such as MEND kidnapped oil workers and blew up pipelines, cutting output sharply. In 2009 President Yar'Adua offered an amnesty: militants handed in weapons in exchange for stipends and training, a programme that still costs billions of naira a year." },
        { type: "section", head: "Theft and decline", md:
          "Violence fell, but theft did not. Criminal networks, some linked to officials and security forces, tap pipelines and run illegal refineries, 'bunkering' hundreds of thousands of barrels a day at times. Output fell below OPEC quotas. Nigeria even imported almost all its petrol, because its state refineries barely worked, and spent billions subsidising the price until Tinubu scrapped the subsidy in 2023 ([[lesson:ng-5]])." },
        { type: "section", head: "A new era", md:
          "The industry is changing. Shell, Exxon, Eni and TotalEnergies have sold onshore and shallow-water assets to Nigerian companies, leaving the pollution liabilities contested; Shell completed the sale of its onshore subsidiary to the Renaissance consortium in March 2025. The Dangote refinery near Lagos, Africa's largest, reached its full capacity of 650,000 barrels a day, letting Nigeria refine its own crude and even export fuel, though it has clashed with regulators and the state oil company." },
        { type: "compare", head: "Two views of the divestments",
          left: { head: "Government and industry", md:
            "Nigerian operators will invest, raise output and keep more of the profits at home." },
          right: { head: "Delta communities and activists", md:
            "The majors are walking away from decades of pollution, and local firms may lack the money to clean it up." } },
        { type: "section", head: "Why it matters", md:
          "Oil still funds much of the state and backs the naira, so output, prices and theft directly affect Tinubu's reforms ([[lesson:ng-5]]). The Delta's grievances remain a potential source of conflict, and its politics matter nationally. As the world begins to move away from oil, Nigeria faces the question of what else can pay for a country of more than 230 million people." }
      ],
      takeaways: [
        "Oil discovered in the Niger Delta in 1956 has funded Nigeria's state, but left the Delta badly polluted.",
        "Protest, then armed militancy, ended in a 2009 amnesty; oil theft remains huge.",
        "Foreign majors are selling onshore assets, and the Dangote refinery lets Nigeria refine its own crude."
      ],
      check: { q: "Why did Nigeria import most of its petrol for years despite being a major oil producer?",
        choices: ["It had no oil fields on land", "Its state refineries barely worked", "OPEC banned refining"], answer: 1,
        explain: "With the state refineries broken, Nigeria exported crude and imported fuel until the Dangote refinery opened." },
      sources: [
        { title: "Shell completes sale of SPDC", publisher: "Shell", url: "https://www.shell.com/news-and-insights/newsroom/news-and-media-releases/2025/shell-completes-sale-of-spdc.html", date: "2025-03" },
        { title: "Dangote Says Refinery Units Reach 650,000 Barrel-a-Day Capacity", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-02-12/dangote-says-refinery-units-reach-650-000-barrel-a-day-capacity", date: "2026-02-12" },
        { title: "Dangote refinery drives increase in petroleum shipments from Nigeria", publisher: "US Energy Information Administration", url: "https://www.eia.gov/todayinenergy/detail.php?id=68004", date: "2026" },
        { title: "How Shell is still benefiting from offloaded Niger Delta oil assets", publisher: "Climate Home News", url: "https://www.climatechangenews.com/2026/05/06/how-shell-is-still-benefiting-from-offloaded-niger-delta-oil-assets/", date: "2026-05-06" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "ng-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "Four months from a presidential election: an improving economy on paper, a hard life in practice, and a split opposition.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng/ng-8-hero.webp",
          alt: "Illustration of a huge open-air market with colourful umbrellas and stalls of produce, crowds of shoppers seen from above.",
          caption: "Food prices are the issue that matters most to voters.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge open-air market seen from above, a sea of colourful umbrellas and stalls piled with tomatoes, peppers, yams and grains, crowds of shoppers as small figures, warm late-morning light, vibrant and busy, no faces, no legible text or logos." },
        { type: "section", head: "The state of play", md:
          "- **Election:** president and National Assembly on 16 January 2027; governors on 6 February.\n" +
          "- **Candidates:** Tinubu (APC), Atiku (ADC), Obi (NDC).\n" +
          "- **Economy:** inflation 15.4%; growth 4.4%; naira stable.\n" +
          "- **Security:** insurgency, banditry and farmer-herder violence persist.\n" +
          "- **Military:** coup-plot trials pending." },
        { type: "section", head: "An earlier election", md:
          "Elections were originally set for February and March 2027. After the National Assembly passed a new Electoral Act in 2026, the electoral commission, INEC, moved the presidential and National Assembly vote to 16 January 2027 and the governorship and state assembly elections to 6 February. The new law is also meant to tighten rules on transmitting results electronically, which caused bitter disputes in 2023." },
        { type: "section", head: "Nigeria in the world", md:
          "Nigeria leads ECOWAS, the West African bloc, and has tried to contain the fallout from the Sahel juntas' departure from it. It joined [[BRICS]] as a partner country in 2025, balancing ties with [[unit:cn|China]], which funds railways and ports, the [[unit:us|United States]], its main security partner despite the religious-freedom dispute, and Europe. It is also Africa's largest source of migrants to [[unit:gb|Britain]] and a major one to the US." },
        { type: "section", head: "The campaign", md:
          "Tinubu will campaign on the recovering economy, new roads and railways, and the tax reform; his opponents on hunger, insecurity and what they call his concentration of power. The Christian south-east, where Obi is strongest, and the vote-rich north, where Atiku and Kwankwaso compete, are the battlegrounds. Vote-buying, violence at polling units and disputes over the electronic transmission of results remain the biggest risks to a credible vote." },
        { type: "section", head: "After 2027", md:
          "Whoever wins will inherit a country whose population is growing by about five million a year and needs millions of new jobs annually, a challenge no Nigerian government has yet met." },
        { type: "section", head: "The economy's test", md:
          "Tinubu's advisers hope that falling inflation, a stable naira and lower interest rates will lift spending and hiring before the vote. Opposition candidates attack the way the reforms were carried out rather than the reforms themselves: Atiku and Obi both promised to end the fuel subsidy when they ran in 2023, a sign of how far the elite consensus had already shifted. Their pitch is that they would have protected the poor better." },
        { type: "section", head: "Three scenarios", md:
          "- **Tinubu re-elected.** A split opposition hands him a second term, and he pushes on with reforms.\n" +
          "- **Opposition upset.** Hardship and insecurity drive voters to Atiku or Obi, possibly forcing a runoff.\n" +
          "- **Disputed result.** Allegations of rigging lead to court battles and unrest, as after past elections." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **1 October 2026:** Independence Day address\n" +
          "- **Monthly:** inflation figures from the statistics bureau\n" +
          "- **16 January 2027:** presidential and National Assembly elections\n" +
          "- **6 February 2027:** governorship elections" },
        { type: "section", head: "Connections", md:
          "Nigeria's story runs through [[unit:us]] (the religious-freedom dispute and the Christmas strikes), [[unit:za]] (Africa's other giant), [[unit:cn]] (infrastructure loans), [[unit:gb]] (its former colonial ruler and a home for its diaspora) and [[unit:sa]] and [[unit:ae]] (fellow oil producers)." }
      ],
      takeaways: [
        "Nigeria votes for president on 16 January 2027, with Tinubu facing Atiku and Obi.",
        "Economic indicators are improving, but hardship and insecurity dominate voters' concerns.",
        "The new Electoral Act and the election's credibility will be closely watched."
      ],
      check: { q: "When is Nigeria's next presidential election?",
        choices: ["November 2026", "16 January 2027", "February 2028"], answer: 1,
        explain: "INEC moved the presidential and National Assembly elections to 16 January 2027 after the new Electoral Act." },
      sources: [
        { title: "Nigeria Sets New 2027 Election Dates as INEC Revises Timetable", publisher: "Inquirer.ng", url: "https://inquirer.ng/2026/02/27/nigeria-sets-new-2027-election-dates-as-inec-revises-timetable/", date: "2026-02-27" },
        { title: "Nigeria 2027: Atiku, Obi's new alliance faces six hurdles to unseat Tinubu", publisher: "The Africa Report", url: "https://www.theafricareport.com/387422/nigeria-2027-atiku-obis-new-alliance-faces-six-hurdles-to-unseat-tinubu/", date: "2025" },
        { title: "BTI 2026 Nigeria Country Report", publisher: "Bertelsmann Stiftung", url: "https://bti-project.org/en/reports/country-report/NGA", date: "2026" }
      ]
    }

  ]
});
