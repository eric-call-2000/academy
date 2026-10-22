/* ============================================================
   Unit 38 — Vietnam 🇻🇳
   Research note and sources: tools/research/vn.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("vn", {
  id: "vn",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "vn-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Vietnam in brief",
      dek: "A one-party communist state of 100 million that has become one of the world's fastest-growing economies and a prize courted by both Washington and Beijing.",
      blocks: [
        { type: "map", src: "maps/vn.svg",
          alt: "Locator map of South-East Asia with Vietnam highlighted, a long S-shaped country bordering China to the north and Laos and Cambodia to the west, with a long coastline on the South China Sea, and a small globe showing its place in the world.",
          caption: "Vietnam stretches more than 1,600 km from the Chinese border to the Mekong Delta, with a long coast on the South China Sea.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Hanoi; the largest city is Ho Chi Minh City"],
          ["People", "About 101 million"],
          ["System", "One-party socialist republic led by the Communist Party of Vietnam"],
          ["Party chief and president", "To Lam, general secretary since 2024 and state president since April 2026"],
          ["Prime minister", "Le Minh Hung, since April 2026"],
          ["Growth", "9.0% in the first nine months of 2026"],
          ["Provinces", "34, after mergers in July 2025"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Vietnam is a test case for a question that matters far beyond Asia: can a communist party keep a monopoly on power while running one of the world's most open, export-driven economies? It is also on the front line of the contest between the [[unit:us|United States]] and [[unit:cn|China]]. It borders China, claims islands Beijing also claims in the South China Sea, and has become a favourite place for companies moving factories out of China, which makes it a target of US [[tariff|tariffs]] too." },
        { type: "section", head: "Who holds power", md:
          "The Communist Party of Vietnam runs the state. For decades power was shared among 'four pillars': the party's general secretary, the state president, the prime minister and the chairman of the National Assembly. In 2026 that changed. To Lam, a former public security minister who became general secretary in 2024, was re-elected party chief in January and made state president in April, holding both top posts. Le Minh Hung, the party's personnel chief, became prime minister." },
        { type: "section", head: "The mood in 2026", md:
          "The economy is booming. Growth reached almost 10% a year in the third quarter of 2026, the fastest in four years, driven by exports of electronics and other manufactured goods, and the government has set a target of 10% for the year. The party calls this an 'era of national rise'. But the Middle East war pushed fuel prices to their highest since 2022 in March, US tariffs and trade investigations hang over exporters, and critics of the party are still being jailed." },
        { type: "section", head: "Young and ambitious", md:
          "Vietnam was one of the world's poorest countries in the 1980s, after decades of war and a failed experiment with central planning. Market reforms from 1986 turned it into a manufacturing hub, and tens of millions of people escaped poverty. Its population is young, literate and increasingly urban, with a growing middle class in Hanoi and Ho Chi Minh City. The leadership wants Vietnam to be a high-income country by 2045, the centenary of its declaration of independence." },
        { type: "section", head: "Friends with everyone", md:
          "Vietnam's foreign policy is often called 'bamboo diplomacy': firmly rooted but bending with the wind. It refuses military alliances and foreign bases, but has upgraded ties to the highest level, a 'comprehensive strategic partnership', with China, the United States, Russia, Japan, South Korea, India, Australia and others. Its leaders visit Beijing and Washington, buy arms from Russia and court investment from everyone." },
        { type: "callout", tone: "why", md:
          "Vietnam shows how a one-party state can combine tight political control with rapid, open economic growth, and how a smaller power next to China tries to keep its independence." }
      ],
      takeaways: [
        "Vietnam is a one-party communist state with one of the world's fastest-growing economies.",
        "In 2026 To Lam became both party general secretary and state president, breaking with collective leadership.",
        "Vietnam balances between China and the United States, refusing alliances but partnering with both."
      ],
      check: { q: "Which posts did To Lam hold at once from April 2026?",
        choices: ["Prime minister and army chief", "Party general secretary and state president", "National Assembly chairman and president"], answer: 1,
        explain: "To Lam was re-elected general secretary in January 2026 and elected state president by the National Assembly in April." },
      sources: [
        { title: "Party General Secretary To Lam elected as State President for 2026–2031 term", publisher: "VTV", url: "https://english.vtv.vn/news/party-general-secretary-to-lam-elected-as-state-president-for-20262031-term-20260414173245255.htm", date: "2026-04-07" },
        { title: "Vietnam GDP growth hits 9.95% in Q3 2026 beating forecasts", publisher: "The Nation (Thailand)", url: "https://www.nationthailand.com/news/asean/40071822", date: "2026-10-03" },
        { title: "Vietnam", publisher: "Britannica", url: "https://www.britannica.com/place/Vietnam", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "vn-2", kind: "power", asOf: "2026-10-22",
      title: "The party and the state",
      dek: "Vietnam has a constitution, a parliament and a government, but every one of them works under the leadership of the Communist Party.",
      blocks: [
        { type: "diagram", src: "img/vn/vn-2-power.svg",
          alt: "Diagram of power in Vietnam. The Communist Party's National Congress, held every five years, elects a Central Committee, which elects the Politburo and the general secretary, To Lam. The party vets candidates for the 500-seat National Assembly, elected in March 2026. The Assembly elects the state president, To Lam, the prime minister, Le Minh Hung, and its own chairman, Tran Thanh Man. The next party congress is due in 2031.",
          caption: "The party chooses the leaders; the National Assembly formally elects them.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The constitution", md:
          "Vietnam's 2013 constitution describes it as a socialist state 'of the people, by the people and for the people', and its Article 4 names the Communist Party as 'the force leading the state and society'. No other party may compete. The constitution lists rights to free speech and assembly, but laws against 'propaganda against the state' and 'abusing democratic freedoms' are used to punish critics. In 2025 the National Assembly amended the constitution to allow a sweeping reorganisation of local government." },
        { type: "section", head: "The party", md:
          "The party has about 5 million members. Every five years a National Congress, most recently the 14th in January 2026, elects a Central Committee of about 180 full members, which in turn elects the Politburo, the top decision-making body of around 19 people, and the general secretary. The Politburo decides policy and picks candidates for every senior state post; its choices are announced at the congress and then confirmed by the state." },
        { type: "section", head: "The National Assembly", md:
          "The 500-member National Assembly is elected every five years; the last vote was on 15 March 2026, with official turnout of 99.7%. Candidates are vetted by the Vietnam Fatherland Front, an umbrella body under the party, and almost all deputies are party members. The Assembly passes laws and the budget, questions ministers in televised sessions and formally elects the president, prime minister and its own chairman, Tran Thanh Man, who was re-elected in April 2026." },
        { type: "section", head: "President and government", md:
          "The state president is head of state and commander of the armed forces and represents Vietnam abroad. The prime minister runs the government, which manages the economy, the budget and the state companies. Both are elected by the Assembly from a single candidate proposed by the party. In April 2026 the Assembly elected To Lam president and Le Minh Hung prime minister unanimously, with all 495 deputies present voting in favour." },
        { type: "section", head: "Security and the army", md:
          "Two institutions stand behind the party: the People's Army, which fought the wars against France and the US and runs large businesses, and the Ministry of Public Security, which controls the police, intelligence and internet monitoring. Both answer to the party, not the state. To Lam ran public security from 2016 to 2024, and many officials promoted under him now hold top posts, which is one reason analysts say his power is greater than any leader's in decades." },
        { type: "section", head: "Elections without choice", md:
          "Vietnamese voters do have a choice of names on the ballot, usually a few more candidates than seats in each constituency, but not of parties. A handful of self-nominated independents have run over the years; most are screened out by the Fatherland Front's consultation meetings. The real competition happens earlier, inside the party, over who is placed on the lists and in which constituency." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Supporters", md:
            "A single party has brought stability, rapid growth and big cuts in poverty, and can plan for decades without electoral cycles." },
          right: { head: "Critics", md:
            "Without free elections, a free press or independent courts, citizens cannot hold the party to account, and power is drifting into one man's hands." } }
      ],
      takeaways: [
        "Vietnam's constitution names the Communist Party as the force leading the state and society.",
        "The Politburo picks leaders, and the 500-seat National Assembly formally elects them.",
        "The police and the army answer to the party; To Lam rose through public security."
      ],
      check: { q: "Which body formally elects Vietnam's prime minister?",
        choices: ["Voters in a direct election", "The National Assembly", "The army"], answer: 1,
        explain: "The National Assembly elects the prime minister, choosing the single candidate proposed by the party." },
      sources: [
        { title: "Le Minh Hung elected Prime Minister for 2026–2031 term", publisher: "Vietnam News Agency", url: "https://vietnam.vnanet.vn/english/tin-van/le-minh-hung-elected-prime-minister-for-2026%E2%80%932031-term-439134.html", date: "2026-04-07" },
        { title: "General election's voter turnout highest ever recorded", publisher: "Vietnam Government News", url: "https://en.baochinhphu.vn/general-elections-voter-turnout-highest-ever-recorded-press-conference-111260321215104425.htm", date: "2026-03-21" },
        { title: "Tran Thanh Man re-elected as Vietnam National Assembly Chairman", publisher: "The Investor", url: "https://theinvestor.vn/tran-thanh-man-re-elected-as-vietnam-national-assembly-chairman-d18786.html", date: "2026-04-06" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "vn-9", kind: "founding", asOf: "2026-10-22",
      title: "A thousand years against the north",
      dek: "Vietnam's sense of itself was forged resisting Chinese rule, then French conquest, until Ho Chi Minh declared independence in 1945.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-9-hero.webp",
          alt: "Illustration of limestone towers rising from a calm bay at dawn, with wooden sailing junks with ribbed sails on the water.",
          caption: "Ha Long Bay, close to the Bach Dang river, where Vietnamese forces defeated Chinese fleets in 938 and 1288.",
          credit: "Illustration — not a photograph",
          prompt: "Tall green limestone karst towers rising steeply out of a calm misty bay at dawn, several old wooden sailing junks with ribbed rust-coloured sails on the still water, soft pink and grey light, ancient and quiet, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From Dai Viet to independence", items: [
          ["111 BC", "China's Han dynasty conquers the Red River delta"],
          ["AD 40", "The Trung sisters lead a revolt against Chinese rule"],
          ["938", "Ngo Quyen defeats a Chinese fleet at the Bach Dang river"],
          ["1428", "Le Loi drives out the Ming"],
          ["1802", "The Nguyen dynasty unifies the country"],
          ["1858–1887", "France conquers Vietnam and forms French Indochina"],
          ["2 Sep 1945", "Ho Chi Minh declares independence in Hanoi"]
        ] },
        { type: "section", head: "Under Chinese rule", md:
          "For about a thousand years, from 111 BC, the Red River delta around modern Hanoi was ruled as a province of successive Chinese empires. It absorbed Chinese writing, Confucian government and Buddhism, but revolts kept breaking out. The most famous was led by the Trung sisters in AD 40, who are still national heroines. In 938 Ngo Quyen planted iron-tipped stakes in the Bach Dang river and wrecked a Chinese fleet at low tide, winning independence." },
        { type: "section", head: "Dai Viet", md:
          "Independent Vietnamese kingdoms, known as Dai Viet, defeated Mongol invasions three times in the 13th century, again using stakes at the Bach Dang in 1288. When the Ming dynasty occupied the country in 1407, Le Loi led a ten-year war and drove them out in 1428. Over centuries Vietnamese rulers also pushed south, absorbing the kingdom of Champa and the Mekong Delta from the Khmer. That long march explains the country's elongated shape." },
        { type: "section", head: "The French", md:
          "The Nguyen dynasty unified the country in 1802 from its capital at Hue. From 1858 France attacked, taking the south first and by 1887 combining Vietnam with Cambodia and later Laos into French Indochina. The French built railways, rubber plantations and a colonial elite, but taxed peasants heavily and crushed dissent. Educated young Vietnamese turned to nationalism and, increasingly, to communism." },
        { type: "section", head: "Ho Chi Minh", md:
          "Ho Chi Minh, who had lived in France, the Soviet Union and China, founded the Indochinese Communist Party in 1930 and the Viet Minh independence front in 1941. When Japan, which had occupied Indochina during the Second World War, surrendered in August 1945, the Viet Minh seized power. On 2 September 1945 Ho declared independence in Hanoi's Ba Dinh Square, quoting the American Declaration of Independence. France soon returned to take back its colony." },
        { type: "section", head: "Champa and the south", md:
          "Central and southern Vietnam were long home to other peoples. The Cham kingdom of Champa, Hindu and later partly Muslim, built brick temple towers along the central coast that still stand. Vietnamese rulers conquered it step by step between the 15th and 17th centuries. The Mekong Delta, once part of the Khmer empire, was settled by Vietnamese farmers in the 1600s and 1700s. Cham and Khmer minorities remain today." },
        { type: "compare", head: "Two readings of the past",
          left: { head: "The party's story", md:
            "Two thousand years of resistance to foreign invaders culminate in the Communist Party, which led the nation to independence and unity." },
          right: { head: "Other historians", md:
            "Vietnam's history is also one of regional rivalries, civil wars and conquest of its neighbours, not only of united resistance." } },
        { type: "section", head: "Why it matters", md:
          "The memory of resisting China shapes how Vietnamese see Beijing today, close ideological partner, giant neighbour and historic threat all at once." }
      ],
      takeaways: [
        "China ruled the Red River delta for about a thousand years until Vietnam won independence in 938.",
        "France conquered Vietnam between 1858 and 1887 and made it part of French Indochina.",
        "Ho Chi Minh declared independence on 2 September 1945, still Vietnam's national day."
      ],
      check: { q: "Who declared Vietnam's independence on 2 September 1945?",
        choices: ["Le Loi", "Ho Chi Minh", "Ngo Dinh Diem"], answer: 1,
        explain: "Ho Chi Minh read the declaration in Hanoi's Ba Dinh Square after Japan's surrender." },
      sources: [
        { title: "History of Vietnam", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Vietnam", date: "n.d." },
        { title: "Ho Chi Minh", publisher: "Britannica", url: "https://www.britannica.com/biography/Ho-Chi-Minh", date: "n.d." },
        { title: "Vietnam", publisher: "Britannica", url: "https://www.britannica.com/place/Vietnam", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "vn-3", kind: "history", asOf: "2026-10-22",
      title: "Thirty years of war, then reform",
      dek: "Wars against France, the United States, Cambodia and China left Vietnam united but ruined, until the party turned to markets in 1986.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-3-hero.webp",
          alt: "Illustration of green rice paddies and palm trees at dusk with helicopters silhouetted against an orange sky in the distance.",
          caption: "The war fought by the United States in Vietnam lasted from the early 1960s until 1973; Saigon fell in 1975.",
          credit: "Illustration — not a photograph",
          prompt: "Flooded green rice paddies with a line of coconut palms at dusk, several military helicopters silhouetted far away against a deep orange sky, a thin column of smoke on the horizon, quiet and ominous, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1946–1954", "War against France, ending at Dien Bien Phu"],
          ["1954", "Geneva Accords divide Vietnam at the 17th parallel"],
          ["1965", "US combat troops arrive"],
          ["1968", "The Tet Offensive"],
          ["1973", "Paris Peace Accords; US forces leave"],
          ["30 Apr 1975", "North Vietnamese troops take Saigon"],
          ["1978–1979", "Invasion of Cambodia; border war with China"],
          ["1986", "Doi Moi market reforms"],
          ["1995", "Relations with the United States restored"]
        ] },
        { type: "section", head: "1. Partition", md:
          "The war against France ended with the Viet Minh's victory at Dien Bien Phu in 1954 ([[lesson:vn-10]]). The Geneva conference divided Vietnam at the 17th parallel: a communist North under Ho Chi Minh and an anti-communist South, the Republic of Vietnam, led by Ngo Dinh Diem with US backing. Elections to reunite the country, promised for 1956, never took place. Hundreds of thousands of northerners, many Catholics, moved south." },
        { type: "section", head: "2. The American war", md:
          "The North backed an insurgency in the South, the Viet Cong, supplied along the Ho Chi Minh Trail through Laos and Cambodia. The US sent advisers, then from 1965 combat troops, more than 500,000 at the peak, and bombed the North heavily. The 1968 Tet Offensive failed militarily but turned American opinion against the war. Under the 1973 Paris Peace Accords US forces left. About 58,000 Americans died, and estimates of Vietnamese dead run from 1 million to more than 3 million." },
        { type: "section", head: "3. Victory and isolation", md:
          "North Vietnamese tanks entered Saigon on 30 April 1975 ([[lesson:vn-12]]), and the country was formally reunited in 1976. Hundreds of thousands of southerners were sent to 're-education camps', and from the late 1970s more than a million people fled, many by boat. In 1978 Vietnam invaded Cambodia and toppled the Khmer Rouge; China retaliated with a short, bloody border war in 1979. Western sanctions and collectivised farming brought hunger and inflation of hundreds of percent." },
        { type: "section", head: "4. Doi Moi", md:
          "In 1986 the party launched Doi Moi, or 'renovation' ([[lesson:vn-11]]): it let farmers sell their crops, allowed private business and opened to foreign investment while keeping one-party rule. Vietnam withdrew from Cambodia in 1989, normalised relations with China in 1991 and with the United States in 1995, and joined the WTO in 2007. Growth averaged around 6–7% a year for three decades, and a country that once could not feed itself became a leading exporter of rice and coffee." },
        { type: "section", head: "5. A new generation", md:
          "From the 2010s Vietnam drew huge investments from Samsung and other electronics firms and became an alternative to China for manufacturers. Under Nguyen Phu Trong, general secretary from 2011 to 2024, a 'blazing furnace' anti-corruption campaign brought down thousands of officials, including two state presidents. After Trong's death in July 2024, To Lam took over and promised to speed up growth and slim the state." },
        { type: "compare", head: "Two views of the war",
          left: { head: "Hanoi's view", md:
            "A war of national liberation and reunification against foreign intervention, won at enormous cost." },
          right: { head: "Many southern exiles' view", md:
            "A conquest of the South by a communist North that brought camps, confiscations and exile for millions." } }
      ],
      takeaways: [
        "Vietnam was divided in 1954 and reunited by the North's victory in 1975, after the US war.",
        "War with Cambodia and China and central planning left the country poor and isolated.",
        "The 1986 Doi Moi reforms opened the economy while keeping one-party rule."
      ],
      check: { q: "What did the 1986 Doi Moi reforms do?",
        choices: ["Introduced multiparty elections", "Opened the economy to markets while keeping one-party rule", "Collectivised all farms"], answer: 1,
        explain: "Doi Moi allowed private business, market prices and foreign investment; the party kept its political monopoly." },
      sources: [
        { title: "Vietnam War", publisher: "Britannica", url: "https://www.britannica.com/event/Vietnam-War", date: "n.d." },
        { title: "History of Vietnam", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Vietnam", date: "n.d." },
        { title: "Sino-Vietnamese War", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sino-Vietnamese_War", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "vn-10", kind: "past", asOf: "2026-10-22",
      title: "Dien Bien Phu, 1954",
      dek: "In a remote mountain valley, a peasant army dragged artillery up the hills and defeated a European colonial power.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-10-hero.webp",
          alt: "Illustration of a wide valley ringed by steep jungle-covered hills, with a small airstrip and fortified positions on the valley floor under heavy cloud.",
          caption: "French forces dug in on the floor of the Dien Bien Phu valley; the Viet Minh held the hills around it.",
          credit: "Illustration — not a photograph",
          prompt: "A wide flat valley ringed by steep dark green jungle-covered hills under heavy grey monsoon clouds, a small dirt airstrip and earthwork bunkers on the valley floor, smoke rising in several places, sombre and tense, no people close up, no flags, no legible text." },
        { type: "facts", head: "The battle", rows: [
          ["Dates", "13 March – 7 May 1954"],
          ["Where", "A valley in north-west Vietnam near the border with Laos"],
          ["Commanders", "General Vo Nguyen Giap (Viet Minh); Colonel Christian de Castries (France)"],
          ["Outcome", "The French garrison surrendered; about 11,000 were taken prisoner"],
          ["Result", "France agreed to leave Indochina at the Geneva conference"]
        ] },
        { type: "section", head: "Background", md:
          "After 1946 France fought to restore its rule over Indochina against Ho Chi Minh's Viet Minh. By 1953 the war was a stalemate, unpopular in France and largely paid for by the United States, which saw it as part of the [[cold-war|Cold War]]. The French commander, General Henri Navarre, decided to build a fortified base in the valley of Dien Bien Phu, supplied by air, to block Viet Minh moves into Laos and lure them into a set-piece battle." },
        { type: "section", head: "The trap reversed", md:
          "The French assumed the Viet Minh could not bring heavy guns through the mountains. General Vo Nguyen Giap proved them wrong. Tens of thousands of porters, many on foot and bicycles, hauled artillery and supplies over jungle tracks and dug the guns into the hillsides overlooking the base. When the attack began on 13 March 1954, Viet Minh artillery quickly put the airstrip out of action, cutting the garrison off from reinforcement except by parachute." },
        { type: "section", head: "Fifty-six days", md:
          "Giap's troops took the outlying strongpoints one by one, then dug trenches ever closer to the centre. The monsoon turned the valley into mud. Washington considered air strikes, even nuclear weapons, but held back without British support. On 7 May the last French positions fell. Thousands died on both sides, and many of the prisoners died on forced marches or in camps." },
        { type: "section", head: "Geneva", md:
          "The day after the fall, the Geneva conference turned to Indochina. In July France agreed to withdraw. Vietnam was temporarily divided at the 17th parallel, with elections promised to reunite it; Laos and Cambodia became independent. The United States did not sign the final declaration and began supporting a separate state in the South, setting the stage for the next war ([[lesson:vn-3]])." },
        { type: "section", head: "Giap's army", md:
          "The Viet Minh army had grown from a few dozen guerrillas in 1944 into regular divisions armed largely with Chinese help after the communist victory in China in 1949. Giap, a former history teacher with no formal military training, combined guerrilla tactics with conventional siege warfare. At Dien Bien Phu he first planned a fast assault, then called it off and chose a slower, methodical siege, a decision he later called the hardest of his career." },
        { type: "compare", head: "Two lessons drawn",
          left: { head: "For colonised peoples", md:
            "A colonial army could be beaten in open battle; Dien Bien Phu inspired independence movements from Algeria to Africa." },
          right: { head: "For Washington", md:
            "Communism had to be stopped in South-East Asia before more 'dominoes' fell, a belief that drew the US into Vietnam." } },
        { type: "section", head: "Why it matters", md:
          "Dien Bien Phu is the founding victory of modern Vietnam's army and a source of the party's legitimacy, celebrated every 7 May." }
      ],
      takeaways: [
        "In 1954 the Viet Minh under Vo Nguyen Giap defeated the French at Dien Bien Phu after a 56-day siege.",
        "Artillery hauled through the mountains by porters cut the French base off.",
        "The defeat led France to leave Indochina and Vietnam to be divided at Geneva."
      ],
      check: { q: "What did the Geneva conference decide after Dien Bien Phu?",
        choices: ["Vietnam would join France", "Vietnam would be divided temporarily at the 17th parallel", "The US would govern Vietnam"], answer: 1,
        explain: "Vietnam was split at the 17th parallel pending elections that never took place." },
      sources: [
        { title: "Battle of Dien Bien Phu", publisher: "Britannica", url: "https://www.britannica.com/event/Battle-of-Dien-Bien-Phu", date: "n.d." },
        { title: "Battle of Dien Bien Phu", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Dien_Bien_Phu", date: "n.d." },
        { title: "History of Vietnam", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Vietnam", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "vn-11", kind: "past", asOf: "2026-10-22",
      title: "Doi Moi: the turn to markets",
      dek: "Facing hunger and hyperinflation in the 1980s, the party gave up central planning but not power, and set off four decades of growth.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-11-hero.webp",
          alt: "Illustration of a busy riverside market at morning with boats loaded with fruit and vegetables, stalls under umbrellas and many motorbikes.",
          caption: "Private trade, banned or restricted for a decade after 1975, was allowed again from 1986.",
          credit: "Illustration — not a photograph",
          prompt: "A busy riverside market in the morning, wooden boats piled with fruit and vegetables on a brown river, rows of stalls under colourful umbrellas on the bank, many motorbikes, low shophouses behind, warm hazy light, lively and hopeful, no faces, no flags, no legible text." },
        { type: "facts", head: "Doi Moi", rows: [
          ["Launched", "6th Party Congress, December 1986"],
          ["Leader", "General Secretary Nguyen Van Linh"],
          ["Key steps", "Family farming, private business, market prices, foreign investment"],
          ["Inflation", "Several hundred percent a year in the mid-1980s"],
          ["Results", "Decades of fast growth; mass poverty largely eliminated"]
        ] },
        { type: "section", head: "Crisis", md:
          "After 1975 the party tried to impose Soviet-style planning on the whole country. Farms in the South were collectivised, private trade was banned and businesses, many owned by ethnic Chinese, were seized, prompting an exodus. Production fell. By the mid-1980s Vietnam was importing rice, inflation was running at hundreds of percent a year, and the Soviet aid it depended on was drying up. Some provinces had already begun quietly letting farmers sell surplus crops." },
        { type: "section", head: "Renovation", md:
          "At the 6th Party Congress in December 1986, under new general secretary Nguyen Van Linh, the party admitted its mistakes and adopted Doi Moi. In 1988 farmers were allowed to farm family plots and sell their harvests; within a year Vietnam became a rice exporter. Price controls were lifted, private firms legalised and foreign investment welcomed. The party called the result a 'socialist-oriented market economy'." },
        { type: "section", head: "Opening up", md:
          "The end of the Cold War forced further change. Vietnam withdrew from Cambodia, made peace with China, and in 1994 the US lifted its trade embargo. A 2001 trade agreement with the United States and WTO membership in 2007 opened big markets. Foreign companies built factories for clothes, shoes and later electronics. By the 2020s Vietnam was one of the world's biggest exporters of phones and a major exporter to the US." },
        { type: "section", head: "What did not change", md:
          "Unlike the Soviet Union under Gorbachev, Vietnam's party opened the economy but not politics. Calls for multiparty democracy in the late 1980s were rejected, and the fall of communism in Eastern Europe convinced the leadership to tighten control. State-owned companies still dominate banking, energy and telecoms, and land is formally owned 'by the people', managed by the state, which has led to bitter disputes over farmland seized for development." },
        { type: "section", head: "Doi Moi 2.0?", md:
          "In 2025 the party issued a resolution calling the private sector 'the most important driver' of the economy, a striking shift in language for a communist party. To Lam has compared his reforms, from cutting bureaucracy to merging provinces, to a second Doi Moi. Critics note that political control has, if anything, tightened at the same time." },
        { type: "section", head: "Who gained", md:
          "Poverty fell from more than half the population in the early 1990s to a small minority by the 2020s, according to the World Bank. Life expectancy and school enrolment rose sharply. But gains were uneven: ethnic minorities in the northern mountains and Central Highlands stayed much poorer, and well-connected officials and their families became rich through land deals and state contracts." },
        { type: "compare", head: "Two views of Doi Moi",
          left: { head: "A model", md:
            "Pragmatic, step-by-step reform lifted tens of millions out of poverty without the chaos that hit the former Soviet Union." },
          right: { head: "A half-reform", md:
            "Without political freedoms, the market grew alongside corruption, land grabs and a privileged party elite." } }
      ],
      takeaways: [
        "Doi Moi, adopted in December 1986, replaced central planning with a market economy under one-party rule.",
        "Family farming turned Vietnam from a rice importer into a rice exporter within a few years.",
        "The party opened the economy but rejected political pluralism."
      ],
      check: { q: "What did Doi Moi keep unchanged?",
        choices: ["Collective farms", "The Communist Party's monopoly on power", "The ban on foreign investment"], answer: 1,
        explain: "The reforms opened the economy, but the party kept its political monopoly." },
      sources: [
        { title: "Đổi Mới", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/%C4%90%E1%BB%95i_M%E1%BB%9Bi", date: "n.d." },
        { title: "History of Vietnam", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Vietnam", date: "n.d." },
        { title: "Vietnam", publisher: "Britannica", url: "https://www.britannica.com/place/Vietnam", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "vn-4", kind: "players", asOf: "2026-10-22",
      title: "To Lam and his circle",
      dek: "A former police chief who now holds the party's and the state's top jobs, the officials around him, and the predecessors who shaped the system.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-4-hero.webp",
          alt: "Illustration of a large modern parliament building with a glass dome on a wide square in Hanoi, lit in the evening, with trees and a broad avenue.",
          caption: "The National Assembly building in Hanoi, where deputies elected To Lam state president in April 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A large modern white stone parliament building with a low glass dome on a wide empty square at dusk, rows of trees and a broad avenue, warm lights in the windows, a grand older mausoleum of grey stone faintly visible nearby, solemn and orderly, no people close up, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "To Lam", role: "Party general secretary since 2024; state president since April 2026",
            img: "img/vn/portrait-tolam.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Born in 1957 into a police family, he spent his career in public security and was minister from 2016 to 2024. Now Vietnam's most powerful leader in decades." },
          { name: "Le Minh Hung", role: "Prime minister, since April 2026",
            img: "img/vn/portrait-leminhhung.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A former central bank governor and head of the party's Organisation Commission, which manages appointments. Charged with delivering 10% growth." },
          { name: "Tran Thanh Man", role: "Chairman of the National Assembly",
            img: "img/vn/portrait-tranthanhman.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A southerner from the Mekong Delta, re-elected to lead the Assembly in April 2026." },
          { name: "Pham Minh Chinh", role: "Prime minister 2021–2026",
            img: "img/vn/portrait-phamminhchinh.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Steered the economy through the pandemic and the 2025 tariff shock, and drove big infrastructure projects; left office in April 2026." },
          { name: "Nguyen Phu Trong", role: "General secretary 2011–2024",
            img: "img/vn/portrait-nguyenphutrong.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A Marxist theorist who led the 'blazing furnace' anti-corruption campaign. His death in July 2024 opened the way for To Lam." },
          { name: "Vo Nguyen Giap", role: "General, 1911–2013",
            img: "img/vn/portrait-giap.webp", source: "Historical photo via Wikimedia Commons; confirm the licence.",
            md: "The commander who won at Dien Bien Phu and led the army against the US; still revered as a national hero." }
        ] },
        { type: "section", head: "From police chief to party chief", md:
          "To Lam ran the anti-corruption investigations of the Trong years from the Ministry of Public Security, which gave him files on much of the elite. Between 2023 and 2024 two state presidents, a National Assembly chairman and several Politburo members resigned over 'violations'. Lam became state president in May 2024; when Trong died that July, he took over as general secretary and handed the presidency to an ally in October. At the 14th Congress in January 2026 the Central Committee re-elected him unanimously." },
        { type: "section", head: "Breaking with collective rule", md:
          "Vietnam's leaders long shared power to avoid one-man rule of the kind seen under Mao in China. In April 2026 Lam became the first person to win both the party and state top jobs through the normal selection process, rather than stepping in after a death. Allies from public security and the party's personnel apparatus fill key posts. Some analysts see a Vietnamese version of [[unit:cn|Xi Jinping]]; others say collective bargaining inside the Politburo still limits him." },
        { type: "section", head: "The reform agenda", md:
          "Lam has pushed the fastest administrative shake-up in decades. In 2025 ministries were merged, tens of thousands of public jobs cut, the district tier of local government abolished and the 63 provinces merged into 34 ([[lesson:vn-5]]). He has also cut red tape for private firms and pushed giant projects such as a north–south high-speed railway. The aim is double-digit growth; the risk, critics say, is that speed overrides checks." },
        { type: "section", head: "The next generation", md:
          "Below the top four, the 14th Congress promoted a younger group of Politburo members with backgrounds in economics, engineering, security and the courts. Many are expected to compete for the top jobs at the 2031 congress. Party rules on age limits and term limits, which have usually capped leaders at two terms, will be watched closely to see whether exceptions are made for To Lam." },
        { type: "compare", head: "Two views of To Lam",
          left: { head: "Supporters", md:
            "A decisive leader cutting through bureaucracy to deliver growth and make Vietnam a high-income country." },
          right: { head: "Critics", md:
            "A security chief who has concentrated power, tightened surveillance and jailed critics while promising reform." } }
      ],
      takeaways: [
        "To Lam, a former public security minister, holds both the party and state top posts.",
        "Le Minh Hung, a former central banker and party personnel chief, is prime minister.",
        "Lam's rise breaks with Vietnam's tradition of collective leadership."
      ],
      check: { q: "Which ministry did To Lam lead before becoming party chief?",
        choices: ["Foreign affairs", "Public security", "Finance"], answer: 1,
        explain: "Lam was minister of public security from 2016 to 2024, overseeing the police and the anti-corruption investigations." },
      sources: [
        { title: "Vietnam parliament elects party chief To Lam as president", publisher: "Gulf News", url: "https://gulfnews.com/world/asia/vietnam-parliament-elects-party-chief-to-lam-as-president-1.500498408", date: "2026-04-07" },
        { title: "To Lam's consolidation of power: implications for Vietnam's political and economic prospects", publisher: "Fulcrum (ISEAS)", url: "https://fulcrum.sg/article/commentaries/to-lams-consolidation-of-power-implications-for-vietnams-political-and-economic-prospects/", date: "2026" },
        { title: "Le Minh Hung elected Prime Minister for 2026–2031 term", publisher: "Vietnam News Agency", url: "https://vietnam.vnanet.vn/english/tin-van/le-minh-hung-elected-prime-minister-for-2026%E2%80%932031-term-439134.html", date: "2026-04-07" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "vn-5", kind: "story", asOf: "2026-10-22",
      title: "Cutting the state in half",
      dek: "In a single year Vietnam merged its provinces, abolished a whole tier of government and cut ministries, the biggest shake-up since reunification.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-5-hero.webp",
          alt: "Illustration of a grand colonial-era yellow government building with shuttered windows on a tree-lined street, with workers carrying boxes out to a truck.",
          caption: "Thousands of local offices closed or merged when Vietnam's district tier was abolished in July 2025.",
          credit: "Illustration — not a photograph",
          prompt: "A grand old yellow colonial-era government building with green shuttered windows on a quiet tree-lined street, a small truck at the kerb being loaded with cardboard boxes and filing cabinets, small figures carrying boxes seen from a distance, soft morning light, orderly change, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "On 1 July 2025 Vietnam redrew its map. The 63 provinces and centrally run cities became 34, the district level of government was abolished, leaving a two-tier system of provinces and communes, and thousands of communes were merged. Earlier that year the national government cut the number of ministries and agencies, and tens of thousands of officials took early retirement or lost their jobs. The National Assembly amended the constitution in June 2025 to make it possible." },
        { type: "facts", head: "The reorganisation", rows: [
          ["Early 2025", "Ministries and party bodies merged"],
          ["12 June 2025", "National Assembly approves the provincial mergers"],
          ["1 July 2025", "63 provinces become 34; district tier abolished"],
          ["15 March 2026", "First National Assembly election under the new map"],
          ["April 2026", "New government elected for 2026–2031"]
        ] },
        { type: "section", head: "Why do it", md:
          "To Lam argued that Vietnam's state was too big, slow and expensive, with layers of officials that each had to approve the same project. He compared bloated bureaucracy to a disease holding back growth. Fewer, larger provinces were meant to plan infrastructure across wider regions, attract investment and save money. The party also had another aim: a smaller, more centralised state is easier for the leadership to direct." },
        { type: "section", head: "The cost", md:
          "Merging provinces meant choosing new capitals, renaming places with centuries of history and moving offices, sometimes far from where people live. Officials worried about their careers, and some services were disrupted in the first months as records moved and new commune offices opened. Supporters say the teething problems were modest for a change on this scale; critics say it was done in months without real public debate." },
        { type: "section", head: "Death penalty and tycoons", md:
          "The same push brought legal changes. In 2025 the Assembly abolished the death penalty for eight crimes, including embezzlement and espionage. It meant the death sentence of Truong My Lan, the property tycoon convicted in Vietnam's biggest fraud case, in which a bank lost about $27 billion, was commuted to life in prison. The leadership presents its anti-graft drive and its reforms as two halves of the same campaign." },
        { type: "section", head: "Inside the party too", md:
          "The party restructured itself as well. Several central committees and party bodies were merged, and some newspapers and broadcasters were combined or closed. Mass organisations under the Fatherland Front, such as the youth union and women's union, were folded into one structure. The aim was the same as in the state: fewer layers, fewer posts and tighter direction from the centre." },
        { type: "compare", head: "Two views of the shake-up",
          left: { head: "The government's view", md:
            "A leaner state that decides faster, spends less on itself and serves citizens and investors better." },
          right: { head: "Critics' view", md:
            "A rushed, top-down overhaul with no public consultation, which concentrates power in fewer hands." } },
        { type: "section", head: "What's next", md:
          "The test is whether the new provinces deliver faster approvals and investment. The 2026–2031 government has promised to keep cutting procedures, and the next party congress, in 2031, will judge the results." }
      ],
      takeaways: [
        "On 1 July 2025 Vietnam merged 63 provinces into 34 and abolished the district tier of government.",
        "Ministries were merged and tens of thousands of public jobs cut to speed up decisions.",
        "The death penalty was abolished for eight crimes, including embezzlement, in 2025."
      ],
      check: { q: "How many provinces and centrally run cities does Vietnam have after July 2025?",
        choices: ["63", "34", "12"], answer: 1,
        explain: "The 63 units were merged into 34: 28 provinces and six centrally run cities." },
      sources: [
        { title: "2025 Vietnamese administrative reforms", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_Vietnamese_administrative_reforms", date: "2025" },
        { title: "Vietnam's provincial mergers: consolidation from 63 to 34 provinces and cities", publisher: "Vietnam Briefing", url: "https://www.vietnam-briefing.com/news/vietnams-government-introduces-official-plan-for-provincial-mergers.html", date: "2025" },
        { title: "Vietnam tycoon will not face death penalty over $27 billion fraud", publisher: "Arab News / AFP", url: "https://www.arabnews.com/node/2605735/world", date: "2025-06" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "vn-6", kind: "story", asOf: "2026-10-22",
      title: "Racing for 10% growth",
      dek: "Vietnam's factories are booming despite US tariffs and a fuel shock, but the target of double-digit growth leaves little room for error.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-6-hero.webp",
          alt: "Illustration of a busy container port at dusk with stacked containers, gantry cranes and a large container ship, with an industrial park and highway behind.",
          caption: "Exports rose about a quarter in the first nine months of 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A busy container port at dusk with tall gantry cranes, colourful stacked shipping containers and a large container ship at the quay, long low factory buildings and a highway with trucks behind, orange and violet sky, energetic and industrial, no people close up, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "Vietnam's economy grew 9.95% year on year in the third quarter of 2026, the fastest pace in four years, and 9.01% in the first nine months, the strongest start to a year in 15 years. Exports rose 24.5%, led by electronics, and September exports were up almost 40%. The government's goal is at least 10% for 2026, which would require even faster growth in the last quarter. The Asian Development Bank expects about 7.8%." },
        { type: "facts", head: "The economy in 2026", rows: [
          ["Q3 growth", "9.95%, fastest in four years"],
          ["Jan–Sep growth", "9.01%"],
          ["Exports", "Up 24.5% in Jan–Sep"],
          ["US tariff", "20% under the 2025 framework; 40% on transshipped goods"],
          ["Target", "At least 10% growth in 2026"]
        ] },
        { type: "section", head: "The tariff threat", md:
          "The United States is Vietnam's biggest export market, and its trade surplus with America is one of the largest of any country. In April 2025 President Trump threatened a 46% [[tariff]]; a July 2025 deal set 20% on Vietnamese goods and 40% on goods 'transshipped' through Vietnam from elsewhere, aimed at Chinese products relabelled as Vietnamese. Hanoi has drafted penalties for origin fraud and promised to buy more American goods. Further US trade investigations remain a risk." },
        { type: "section", head: "The fuel shock", md:
          "When the war in the Gulf closed the [[strait-of-hormuz|Strait of Hormuz]] in March 2026, oil prices jumped. Vietnam imports about 30% of its fuel. On 7 March petrol prices rose about 21% in one adjustment, to the highest since 2022; some petrol stations in Hanoi ran dry, and the trade ministry urged firms to let staff work from home. The government cut fuel import tariffs. Factories kept running, but the shock showed how exposed the boom is." },
        { type: "section", head: "Big bets", md:
          "To keep growth high, the government is spending heavily on infrastructure: expressways, a new international airport at Long Thanh near Ho Chi Minh City, and a planned 1,541 km north–south high-speed railway costing about $67 billion, with construction targeted for late 2026. The party has also courted chipmakers and data centres. Economists warn about rising debt at banks and property developers and a shortage of skilled workers and electricity." },
        { type: "section", head: "Who makes the exports", md:
          "Most of Vietnam's exports are made by foreign-invested companies. Samsung alone accounts for a large share of the country's phone and electronics exports, and firms from South Korea, Japan, Taiwan and, increasingly, China have built plants to serve the US market. Critics say Vietnamese firms capture little of the value; the government wants local suppliers to move up the chain into components and design." },
        { type: "compare", head: "Two views of the boom",
          left: { head: "Optimists", md:
            "Vietnam is the big winner as firms move supply chains out of China; reform and investment can sustain near double-digit growth." },
          right: { head: "Sceptics", md:
            "Growth depends on foreign factories and the US market; tariffs, oil shocks and a credit-fuelled push could end badly." } },
        { type: "section", head: "What's next", md:
          "Watch the fourth-quarter growth figures in January 2027 and any change in US tariffs, which could quickly hit the factories that make the boom." }
      ],
      takeaways: [
        "Vietnam grew 9.95% in the third quarter of 2026, its fastest in four years, driven by exports.",
        "A 2025 deal set a 20% US tariff on Vietnamese goods and 40% on transshipped goods.",
        "The Hormuz closure pushed fuel prices to their highest since 2022 in March 2026."
      ],
      check: { q: "What US tariff did the 2025 deal set on goods transshipped through Vietnam?",
        choices: ["10%", "20%", "40%"], answer: 2,
        explain: "Vietnamese goods face 20%, but goods judged to be transshipped from third countries face 40%." },
      sources: [
        { title: "Vietnam's growth hits 9.95pc, fastest in four years, as exports jump 24.5pc", publisher: "Malay Mail", url: "https://malaymail.com/news/money/2026/10/03/vietnams-growth-hits-995pc-fastest-in-four-years-as-exports-jump-245pc/237572", date: "2026-10-03" },
        { title: "Vietnam considers scrapping fuel import tariffs as Middle East war drives oil prices to two-year high", publisher: "Malay Mail", url: "https://www.malaymail.com/news/money/2026/03/09/vietnam-considers-scrapping-fuel-import-tariffs-as-middle-east-war-drives-oil-prices-to-two-year-high/211961", date: "2026-03-09" },
        { title: "Trump's Vietnam trade deal and transshipment tariffs", publisher: "Fortune", url: "https://fortune.com/asia/2025/07/03/trump-vietnam-trade-deal-transshipment-tariffs", date: "2025-07-03" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "vn-7", kind: "story", asOf: "2026-10-22",
      title: "Building islands in the South China Sea",
      dek: "Vietnam has quietly built up every reef it holds in the Spratly Islands, matching China's island-building and drawing rare public protests from Beijing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-7-hero.webp",
          alt: "Illustration of a low artificial island in turquoise sea with a long airstrip, a small harbour and dredging ships pumping sand.",
          caption: "Vietnam's largest project, at Barque Canada Reef, is expected to have an airstrip of almost 3.2 km.",
          credit: "Illustration — not a photograph",
          prompt: "A long low artificial island of pale sand in a turquoise sea seen from above at an angle, a long new airstrip down its length, a small harbour with breakwaters, several dredging ships pumping plumes of sand, bright tropical light, ambitious and tense, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "China built seven artificial islands in the Spratlys between 2013 and 2017 and later fitted them with runways, radars and missiles. Vietnam, which holds more features in the Spratlys than any other claimant, responded more slowly but has now caught up in scale. By March 2026, analysts at the Asia Maritime Transparency Initiative found that Vietnam had reclaimed land at all 21 reefs and shoals it controls. The biggest, at Barque Canada Reef, is set to get Vietnam's longest airstrip in the area." },
        { type: "facts", head: "The Spratlys", rows: [
          ["Claimants", "China, Vietnam, the Philippines, Malaysia, Brunei and Taiwan"],
          ["Vietnam", "Holds about 21 features; reclamation at all of them"],
          ["China", "Seven artificial islands built 2013–2017"],
          ["Barque Canada Reef", "Planned airstrip of almost 3.2 km"],
          ["2016", "An international tribunal rules China's 'nine-dash line' has no legal basis"]
        ] },
        { type: "section", head: "Why it matters to Hanoi", md:
          "The South China Sea, which Vietnam calls the East Sea, carries much of its trade and holds fisheries and offshore oil and gas fields. China seized the Paracel Islands from South Vietnam in 1974, and in 1988 Chinese forces killed 64 Vietnamese sailors at Johnson South Reef in the Spratlys. Hanoi wants its outposts to be harder to dislodge, able to host aircraft and ships, and to strengthen its claims in any future negotiation." },
        { type: "section", head: "Beijing's response", md:
          "China says the Spratlys, which it calls Nansha, are 'China's inherent territory' and has protested against construction on 'illegally occupied' reefs, a rare public complaint since it had long stayed quiet about Vietnam's work. Yet the two communist parties keep talking: To Lam made a state visit to China in April 2026, a year after Xi Jinping visited Hanoi. Unlike the [[unit:ph|Philippines]], Vietnam avoids publicising clashes at sea." },
        { type: "section", head: "Neighbours and partners", md:
          "Vietnam has settled maritime boundaries with Indonesia and works with the Philippines, Japan, India and the United States on maritime security, buying patrol ships and radar. But it will not join any alliance, and it chose not to take China to an international tribunal as Manila did in 2013. Its approach is to build up quietly, talk constantly to Beijing and keep a door open to Washington." },
        { type: "section", head: "The 2016 ruling", md:
          "In 2016 an arbitral tribunal in The Hague, in a case brought by the Philippines, ruled that China's 'nine-dash line' claim to most of the sea had no basis in international law and that none of the Spratlys was an island entitled to a full exclusive economic zone. China rejected the ruling. Vietnam welcomed it cautiously and has cited the law of the sea in defending its own claims." },
        { type: "compare", head: "Two views of Vietnam's building",
          left: { head: "Hanoi's view", md:
            "Legitimate work on Vietnam's own territory, defensive and far smaller in military terms than China's bases." },
          right: { head: "Critics' view", md:
            "Another round of island-building that damages reefs, militarises the sea and could provoke a clash." } },
        { type: "section", head: "What's next", md:
          "Watch for new Chinese pressure on Vietnamese outposts and oil and gas projects, and for talks on an ASEAN–China code of conduct." }
      ],
      takeaways: [
        "Vietnam has reclaimed land at all 21 Spratly features it holds, catching up with China's island-building.",
        "China calls the work illegal; Vietnam calls it defence of its own territory.",
        "Hanoi combines quiet build-up with constant talks with Beijing and ties to Washington."
      ],
      check: { q: "Which islands did China seize from South Vietnam in 1974?",
        choices: ["The Spratly Islands", "The Paracel Islands", "Phu Quoc"], answer: 1,
        explain: "Chinese forces took the Paracels in January 1974; Vietnam still claims them." },
      sources: [
        { title: "Could Vietnam's new South China Sea bases open a 'Pandora's box' of competitive island building?", publisher: "Chatham House", url: "https://www.chathamhouse.org/publications/the-world-today/2026-03/could-vietnams-new-south-china-sea-bases-open-pandoras-box", date: "2026-03" },
        { title: "China denounces Vietnam's island building in South China Sea", publisher: "Radio Free Asia", url: "https://rfa.org/english/china/2025/02/19/vietnam-spratlys-south-china-sea-protest/", date: "2025-02-19" },
        { title: "Top leader's China visit set to open up new phase in bilateral ties", publisher: "VOV", url: "https://kynguyenvuonminh.vov.vn/en/politics/diplomacy/top-leaders-china-visit-set-to-open-up-new-phase-in-bilateral-ties-ambassador-post1283042.vov", date: "2026-04" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "vn-12", kind: "spotlight", asOf: "2026-10-22",
      title: "Saigon, 30 April 1975",
      dek: "The day North Vietnamese tanks crashed through the gates of the presidential palace, ending the war, and the exodus that followed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-12-hero.webp",
          alt: "Illustration of a modernist palace with a long concrete facade behind tall iron gates on a wide lawn, with a tank silhouetted at the gates under a hazy sky.",
          caption: "Independence Palace in Saigon, where the war ended on 30 April 1975; the city is now Ho Chi Minh City.",
          credit: "Illustration — not a photograph",
          prompt: "A long modernist palace with a concrete lattice facade behind tall wrought-iron gates and a wide green lawn, a single tank silhouetted at the open gates, tropical trees and a hazy white sky, a decisive moment, no people close up, no flags, no legible text." },
        { type: "facts", head: "The fall of Saigon", rows: [
          ["Date", "30 April 1975"],
          ["Last evacuation", "Operation Frequent Wind, 29–30 April: about 7,000 flown out by helicopter"],
          ["Surrender", "President Duong Van Minh, in office for two days"],
          ["Renamed", "Ho Chi Minh City, 1976"],
          ["Exodus", "More than a million fled by sea and land over the next two decades"]
        ] },
        { type: "section", head: "The final offensive", md:
          "After US forces left in 1973, fighting resumed and US aid to the South was cut. In March 1975 North Vietnam attacked the Central Highlands; the South's army collapsed in panic, and Hue and Da Nang fell within weeks. President Nguyen Van Thieu resigned on 21 April. By the end of the month North Vietnamese divisions surrounded Saigon." },
        { type: "section", head: "The last helicopters", md:
          "On 29 and 30 April American helicopters flew about 7,000 Americans and South Vietnamese from the US embassy and other sites to ships offshore, while crowds pressed at the gates. Many who had worked with the Americans were left behind. Early on 30 April the last helicopter lifted off the embassy roof. Hours later a North Vietnamese tank broke through the gates of the presidential palace, and General Duong Van Minh announced the South's surrender." },
        { type: "section", head: "After the war", md:
          "The new authorities sent hundreds of thousands of former officers, officials and others to 're-education camps', some for more than a decade. Businesses were seized and families moved to 'new economic zones' in the countryside. Saigon was renamed Ho Chi Minh City in 1976, when the country was formally reunified." },
        { type: "section", head: "The boat people", md:
          "From the late 1970s hundreds of thousands of people fled in small, overcrowded boats across the South China Sea; many were ethnic Chinese pushed out during the tensions with China. Tens of thousands, perhaps far more, drowned or were killed by pirates. Survivors reached camps in Malaysia, Thailand, Hong Kong and the Philippines, and more than a million Vietnamese were eventually resettled, especially in the United States, Australia, Canada and France." },
        { type: "section", head: "The anniversary", md:
          "On 30 April 2025, Vietnam marked fifty years since the end of the war with a large military parade in Ho Chi Minh City, including troops from China, Laos and Cambodia. The government used the moment to stress national reconciliation and its ties with the United States. Many Vietnamese Americans marked the same day with mourning ceremonies for South Vietnam." },
        { type: "compare", head: "Two memories of 30 April",
          left: { head: "In Vietnam", md:
            "Liberation Day and national reunification, celebrated with parades; the 50th anniversary in 2025 was marked with a huge parade in Ho Chi Minh City." },
          right: { head: "In the diaspora", md:
            "'Black April', the loss of a country, remembered with mourning by many Vietnamese communities abroad." } },
        { type: "section", head: "Why it matters", md:
          "The divided memory of 1975 still shapes ties between Vietnam and its diaspora of several million, and between Hanoi and the United States, which became a partner within a few decades." }
      ],
      takeaways: [
        "North Vietnamese forces took Saigon on 30 April 1975, ending the war.",
        "Hundreds of thousands were sent to re-education camps; more than a million eventually fled.",
        "Vietnam marks 30 April as reunification day; many in the diaspora remember it as 'Black April'."
      ],
      check: { q: "What was Saigon renamed after reunification?",
        choices: ["Hue", "Ho Chi Minh City", "Da Nang"], answer: 1,
        explain: "Saigon was renamed Ho Chi Minh City in 1976." },
      sources: [
        { title: "Fall of Saigon", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fall_of_Saigon", date: "n.d." },
        { title: "Vietnamese boat people", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vietnamese_boat_people", date: "n.d." },
        { title: "Vietnam War", publisher: "Britannica", url: "https://www.britannica.com/event/Vietnam-War", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "vn-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A leader with unusual power, an economy at full speed and a tightening grip on dissent: Vietnam heads into its 2030s ambitions.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/vn/vn-8-hero.webp",
          alt: "Illustration of a modern city skyline at dusk along a wide river with a tall skyscraper, bridges and many motorbike lights on the riverside road.",
          caption: "Ho Chi Minh City, Vietnam's economic capital.",
          credit: "Illustration — not a photograph",
          prompt: "A modern city skyline at dusk along a wide curving river, one very tall glass skyscraper and many smaller towers, a cable-stayed bridge, streams of motorbike headlights on the riverside road, small boats, warm orange and purple sky, energetic and ambitious, no people close up, no flags, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Leadership:** To Lam holds the party and state top posts; Le Minh Hung runs the government.\n" +
          "- **Economy:** growth of about 9% in 2026; a 10% target; exports booming.\n" +
          "- **Trade:** 20% US tariff, with the risk of more.\n" +
          "- **Sea:** island-building in the Spratlys; protests from China.\n" +
          "- **Rights:** journalists and activists jailed for 'propaganda against the state'." },
        { type: "section", head: "The crackdown", md:
          "Political control has tightened alongside economic reform. In 2026 the journalist Huynh Ngoc Tuan was sentenced to eight and a half years and the veteran writer Nguyen Vu Binh to seven, both for 'propaganda against the state'; the blogger Le Anh Hung, who had already served five years, was arrested again in March. Rights groups count more than a hundred political prisoners. Social media is policed by the public security ministry, and foreign platforms must remove content on request." },
        { type: "section", head: "Vietnam in the world", md:
          "Vietnam keeps close to everyone. To Lam visited [[unit:cn|China]] in April 2026 and gave the keynote at Singapore's Shangri-La security forum in May. Ties with the [[unit:us|United States]] were raised to a comprehensive strategic partnership in 2023, but tariffs have strained them. [[unit:ru|Russia]] remains an arms supplier, [[unit:jp|Japan]] and [[unit:kr|South Korea]] are giant investors, and partners from [[unit:in|India]] to [[unit:au|Australia]] see Vietnam as a counterweight to China." },
        { type: "section", head: "Climate and the delta", md:
          "The Mekong Delta, which grows about half of Vietnam's rice, is sinking and salting as sea levels rise, dams upstream trap sediment and groundwater is overpumped. Northern cities suffer some of the world's worst air pollution, and typhoons hit the central coast every year. The government has pledged net-zero emissions by 2050 but still depends heavily on coal power." },
        { type: "section", head: "What people want", md:
          "Polls are rare, but surveys and social media point to familiar worries: housing costs in the big cities, traffic, pollution, food safety, and corruption by local officials. Young Vietnamese are among the most optimistic in Asia about their economic future. Open political discontent is uncommon, but large protests have broken out before over land seizures and over China, notably in 2014 and 2018." },
        { type: "section", head: "Three scenarios", md:
          "- **Tiger economy.** Reforms and investment keep growth high and Vietnam climbs toward upper-middle and then high income.\n" +
          "- **Strongman drift.** Power concentrates further in To Lam; decisions speed up but mistakes go unchecked.\n" +
          "- **External shock.** US tariffs, a sea clash with China or an energy crisis knocks the export model off course." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Late 2026:** groundbreaking on the north–south high-speed railway\n" +
          "- **January 2027:** full-year growth figures against the 10% target\n" +
          "- **Ongoing:** US tariff decisions and transshipment rules\n" +
          "- **2031:** the 15th Party Congress and the next National Assembly election" },
        { type: "section", head: "Connections", md:
          "Vietnam's story runs through [[unit:cn]] (a thousand years of rule, a party ally and a rival at sea), [[unit:us]] (the war, then a partner and trade rival), [[unit:fr]] (the colonial power), [[unit:ph]] (fellow claimant in the South China Sea), [[unit:ru]] (old ally and arms supplier) and [[unit:kr]] and [[unit:jp]] (investors)." }
      ],
      takeaways: [
        "Vietnam enters 2027 with a powerful leader, fast growth and tight political control.",
        "US tariffs, oil shocks and the South China Sea are the main external risks.",
        "Climate change threatens the Mekong Delta, Vietnam's rice bowl."
      ],
      check: { q: "What charge has Vietnam most often used against critical journalists in 2026?",
        choices: ["Tax evasion", "Propaganda against the state", "Espionage"], answer: 1,
        explain: "Journalists such as Huynh Ngoc Tuan and Nguyen Vu Binh were jailed for 'propaganda against the state'." },
      sources: [
        { title: "Vietnam arrests journalist Le Anh Hung on 'propaganda' charge", publisher: "Committee to Protect Journalists", url: "https://cpj.org/2026/03/vietnam-arrests-journalist-le-anh-hung-on-propaganda-charge/", date: "2026-03" },
        { title: "Vietnam jails journalist for seven years on propaganda charge", publisher: "The Standard / AFP", url: "https://www.thestandard.com.hk/world/article/220353/Vietnam-jails-journalist-for-seven-years-on-propaganda-charge", date: "2026" },
        { title: "Work on North-South high-speed rail to start in late 2026", publisher: "Saigon Times", url: "https://news.tuoitre.vn/saigontimes/work-on-north-south-high-speed-rail-to-start-in-late-2026-105450540.htm", date: "2026" }
      ]
    }
  ]
});
