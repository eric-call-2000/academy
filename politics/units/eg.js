/* ============================================================
   Unit 16 — Egypt 🇪🇬
   Research note and sources: tools/research/eg.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("eg", {
  id: "eg",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "eg-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Egypt in brief",
      dek: "The most populous Arab country guards the Suez Canal and Gaza's southern border, brokers ceasefires, and keeps its economy afloat on loans and Gulf money.",
      blocks: [
        { type: "map", src: "maps/eg.svg",
          alt: "Locator map of north-east Africa with Egypt highlighted, bordering Libya, Sudan, the Gaza Strip and Israel, between the Mediterranean and the Red Sea, with the Sinai Peninsula and the Suez Canal, and a small globe showing its place in the world.",
          caption: "Egypt holds the Suez Canal, linking the Mediterranean and the Red Sea, and borders the Gaza Strip (hatched grey) in the north-east. The Halaib Triangle on the Red Sea coast, administered by Egypt, is also claimed by Sudan.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Cairo (a new administrative capital is being built to the east)"],
          ["People", "About 108 million, the most in the Arab world"],
          ["System", "Presidential republic dominated by the military"],
          ["President", "Abdel Fattah el-Sisi, since 2014; term runs to 2030"],
          ["Prime minister", "Mostafa Madbouly, since 2018"],
          ["Lifelines", "The Nile, the Suez Canal, tourism, remittances and Gulf money"],
          ["Peace with Israel", "Since 1979, the first Arab state to sign one"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Egypt is the Arab world's most populous country and historically its political and cultural centre. It controls the Suez Canal, through which about a tenth of world trade normally passes. It borders Gaza and holds the only crossing, at Rafah, that doesn't lead into [[unit:il|Israel]], so it is at the heart of every Gaza ceasefire and aid effort.\n\n" +
          "It is also too big to fail. A collapse in Egypt would send migrants toward Europe and destabilise the region, which is why the IMF, the Gulf states, Europe and the United States keep lending it money." },
        { type: "section", head: "Who holds power", md:
          "President Abdel Fattah el-Sisi, a former army chief, has ruled since 2014, a year after he led the military's removal of Egypt's first freely elected president, Mohamed Morsi of the Muslim Brotherhood. The armed forces and intelligence services are the pillars of his rule and control a large share of the economy. Parliament is dominated by pro-government parties, and the space for opposition, independent media and protest has been closed." },
        { type: "section", head: "The mood in 2026", md:
          "Egyptians have endured years of hardship: a currency that lost most of its value, inflation that peaked near 38% in 2023, and cuts to subsidies. The Iran war hit Egypt hard. Suez revenue, already halved by Houthi attacks on Red Sea shipping, fell again, energy costs rose and tourists stayed away, and Sisi warned of a 'state of near-emergency'. By mid-2026 inflation had eased to about 14%, but for many families life remains a struggle." },
        { type: "section", head: "A young, crowded country", md:
          "Almost all Egyptians live on the 5% of the land along the Nile and its delta. The population grows by around 1.5 million a year, and millions of young people enter the job market with too few jobs waiting." },
        { type: "section", head: "What Egypt wants", md:
          "Cairo wants stability above all: an end to the wars on its borders in Gaza, Sudan and Libya, a secure flow of Nile water, the return of Suez traffic, and continued financial support. It wants to be seen as the indispensable mediator, a role it has played in Gaza and, in 2026, in efforts to end the Iran war." },
        { type: "callout", tone: "why", md:
          "Egypt sits where Africa, Asia and the Mediterranean meet. Its canal, its border with Gaza and its sheer size make its stability a matter of global concern, and its economy shows how far away wars can reach." }
      ],
      takeaways: [
        "Egypt is the most populous Arab country and controls the Suez Canal and the Rafah crossing into Gaza.",
        "President Sisi, a former army chief, has ruled since 2014 with the military as his base.",
        "Wars in the Red Sea and Iran have battered its economy, which depends on IMF and Gulf support."
      ],
      check: { q: "Why is Egypt central to Gaza diplomacy?",
        choices: ["It governs Gaza", "It borders Gaza and holds the Rafah crossing", "It hosts Hamas's leadership"], answer: 1,
        explain: "Egypt shares Gaza's southern border and controls the Rafah crossing, the only one that doesn't lead into Israel." },
      sources: [
        { title: "Battered but Still Standing, Egypt Tries to Weather the Economic Ravages of the Iran War", publisher: "Middle East Institute", url: "https://mei.edu/publication/battered-but-still-standing-egypt-tries-to-weather-the-economic-ravages-of-the-iran-war/", date: "2026" },
        { title: "Sissi says Egypt in 'state of near-emergency' as Iran war threatens economy", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/sissi-says-egypt-in-state-of-near-emergency-as-iran-war-threatens-economy/", date: "2026" },
        { title: "Egypt unlocks $1.8bn IMF funding after passing review", publisher: "The National", url: "https://www.thenationalnews.com/business/economy/2026/07/31/egypt-secures-18bn-imf-funding-as-economy-weathers-iran-war-fallout/", date: "2026-07-31" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "eg-2", kind: "power", asOf: "2026-09-28",
      title: "A president, an army and a loyal parliament",
      dek: "Egypt holds elections, but the military has been the real centre of power since 1952.",
      blocks: [
        { type: "diagram", src: "img/eg/eg-2-power.svg",
          alt: "Diagram of power in Egypt. Voters elect a president and parliament, with low turnout. President Abdel Fattah el-Sisi has ruled since 2014, with a term running to 2030, and appoints the prime minister and top judges. His rule rests on the army and intelligence services, the guardians of the state with large business interests. He appoints the prime minister and cabinet, led by Mostafa Madbouly, who run the economy and services and negotiate with the IMF. They are backed by a parliament, House and Senate, dominated by parties loyal to the president. The next presidential election is due in 2029–30.",
          caption: "Egypt's institutions are built around a strong president and the military behind him.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The presidency", md:
          "Egypt's president holds sweeping powers: he appoints the prime minister and cabinet, heads the armed forces and police, appoints senior judges and prosecutors, and can rule by decree when parliament is not sitting. Constitutional amendments approved in a 2019 referendum extended presidential terms from four to six years and allowed Sisi to run for a third term, which he won in December 2023 with 89.6% of the vote against little-known rivals. His current term ends in 2030." },
        { type: "section", head: "The military", md:
          "Every Egyptian president from 1952 to 2012 came from the military, and Sisi returned the job to it. The armed forces are respected by many Egyptians as the guardians of the nation. They also run a vast economic empire, from construction and cement to food and hotels, often exempt from taxes and competition. The intelligence services manage politics, the media and relations with Israel, Gaza and the Gulf." },
        { type: "section", head: "Parliament", md:
          "Egypt has two chambers: the House of Representatives, with 596 members, and the Senate. In elections held from August 2025 to January 2026, a coalition of pro-government parties led by Mostakbal Watan (the Future of the Nation party) won large majorities in both, giving Sisi the two-thirds needed to amend the constitution. Turnout was about 17%. Real opposition parties are small and constrained." },
        { type: "section", head: "Rights and repression", md:
          "Human rights groups estimate that tens of thousands of political prisoners have been held since 2013, including Islamists, liberal activists, journalists and lawyers, many in long pre-trial detention. Protests are effectively banned. The government says it is fighting terrorism and protecting stability, and points to reforms such as a national human rights strategy and some high-profile pardons, including of the activist Alaa Abd El-Fattah in 2025." },
        { type: "section", head: "Courts and the law", md:
          "Egypt's judges have a long professional tradition, but the 2019 amendments gave the president power over senior judicial appointments, and military courts can try civilians in some cases. Emergency law, in force for most of the period since 1981, was lifted in 2021, but many of its powers were written into ordinary law. Terrorism laws are broad, and pre-trial detention is often renewed for years." },
        { type: "section", head: "Media", md:
          "Most television channels and newspapers are owned or controlled by companies linked to the state and its intelligence services. Hundreds of websites have been blocked, and journalists have been jailed on charges of spreading false news. Egyptians get much of their news from social media, which is also monitored." },
        { type: "compare", head: "Two views of Sisi's system",
          left: { head: "Supporters", md:
            "After the chaos of 2011–13 and an Islamist insurgency in Sinai, a strong state restored security, built infrastructure and kept a huge, poor country from collapse." },
          right: { head: "Critics", md:
            "It is the harshest repression in Egypt's modern history, and the army's grip on the economy crowds out private business and deepens the debt." } }
      ],
      takeaways: [
        "Egypt's president holds sweeping powers; 2019 amendments let Sisi serve until 2030.",
        "The armed forces are both the base of the regime and a major economic player.",
        "Pro-government parties won a two-thirds majority in 2025–26 on a turnout of about 17%."
      ],
      check: { q: "What did Egypt's 2019 constitutional amendments do?",
        choices: ["Abolished the Senate", "Extended presidential terms and let Sisi serve until 2030", "Banned the army from politics"], answer: 1,
        explain: "The amendments lengthened terms from four to six years and allowed Sisi a third term, which runs to 2030." },
      sources: [
        { title: "Egypt Announces Results of Last Seats in Parliament Vote That Gave Sisi Strong Majority", publisher: "US News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-01-10/egypt-announces-results-of-last-seats-in-parliament-vote-that-gave-sisi-strong-majority", date: "2026-01-10" },
        { title: "Egypt's Parliamentary Elections Will Pave the Way for What Comes Next", publisher: "Tahrir Institute for Middle East Policy", url: "https://timep.org/2025/10/21/egypts-parliamentary-elections-will-pave-the-way-for-what-comes-next/", date: "2025-10-21" },
        { title: "Egyptian Democracy Is What Sisi Makes of It", publisher: "Arab Center Washington DC", url: "https://arabcenterdc.org/resource/egyptian-democracy-is-what-sisi-makes-of-it/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "eg-9", kind: "founding", asOf: "2026-09-28",
      title: "1952: the Free Officers",
      dek: "A group of young army officers overthrew the king and founded the republic. Every Egyptian president since has come from the military, bar one.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-9-hero.webp",
          alt: "Illustration of a wide boulevard along the Nile in Cairo at dusk, with 1950s cars, palm trees and ornate belle époque buildings.",
          caption: "Cairo in the early 1950s, the capital of a kingdom about to become a republic.",
          credit: "AI illustration — not a photograph",
          prompt: "A wide boulevard along the Nile in Cairo at dusk in the early 1950s, vintage cars, tall palm trees, ornate belle époque buildings with balconies, feluccas on the river, warm nostalgic light, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From khedive to republic", items: [
          ["1805", "Muhammad Ali takes power and modernises Egypt"],
          ["1869", "The Suez Canal opens"],
          ["1882", "Britain occupies Egypt"],
          ["1922", "Formal independence under King Fuad"],
          ["23 July 1952", "Free Officers' coup"],
          ["1953", "Monarchy abolished; Egypt becomes a republic"],
          ["1956", "Gamal Abdel Nasser becomes president"]
        ] },
        { type: "section", head: "Modern Egypt", md:
          "Egypt's modern state began with Muhammad Ali, an Ottoman officer who seized power in 1805 and built an army, factories and schools. His successors borrowed heavily, including to build the Suez Canal, which opened in 1869, and went bankrupt. Britain occupied Egypt in 1882 to protect the canal and its loans. After a nationalist revolution in 1919, Britain granted formal independence in 1922, but kept troops, control of the canal zone and great influence over the monarchy." },
        { type: "section", head: "A discredited kingdom", md:
          "King Farouk, who came to the throne in 1936, became a symbol of corruption and extravagance while most Egyptians lived in poverty and a few hundred families owned much of the land. Egypt's defeat by Israel in the 1948 war humiliated the army, which blamed the palace for faulty weapons and incompetence. In January 1952, after British troops killed dozens of Egyptian policemen in Ismailia, riots in Cairo burned much of the city centre, including hotels, cinemas and department stores associated with foreigners and the elite." },
        { type: "section", head: "The coup", md:
          "On the night of 22–23 July 1952, a secret society of young officers, the Free Officers, seized power almost without bloodshed. They put forward a respected general, Muhammad Naguib, as their figurehead, but the real leader was Lieutenant Colonel Gamal Abdel Nasser, aged 34. Farouk abdicated and sailed into exile. In 1953 the monarchy was abolished and Egypt declared a republic. Nasser pushed Naguib aside and became president in 1956." },
        { type: "section", head: "Nasser's revolution", md:
          "Nasser redistributed land, built schools and factories, nationalised much of the economy, and began the Aswan High Dam. He banned political parties, jailed communists and members of the Muslim Brotherhood after an assassination attempt in 1954, and built a powerful security state. His Arab nationalism, broadcast across the region by radio, made him a hero to millions, especially after the Suez crisis (briefing 10). His rule ended with Egypt's crushing defeat by Israel in 1967, and he died in 1970." },
        { type: "compare", head: "Two views of 1952",
          left: { head: "A revolution", md:
            "The officers ended foreign domination and a corrupt monarchy, gave land to peasants and restored Egyptian dignity." },
          right: { head: "A coup", md:
            "A military takeover ended a flawed but pluralist parliamentary system and began seven decades of army-dominated rule." } },
        { type: "section", head: "Why it still matters", md:
          "Every Egyptian president since 1952 has been a military officer, except Mohamed Morsi, elected in 2012 and overthrown a year later by the army led by Abdel Fattah el-Sisi. The army's central role in politics and the economy today, and 23 July as a national holiday, are legacies of the Free Officers." }
      ],
      takeaways: [
        "Britain occupied Egypt from 1882; formal independence in 1922 left a weak, British-influenced monarchy.",
        "On 23 July 1952 the Free Officers overthrew King Farouk; Egypt became a republic in 1953.",
        "Nasser's rule set the pattern of army-dominated government that continues under Sisi."
      ],
      check: { q: "Who was the real leader of the Free Officers?",
        choices: ["King Farouk", "Gamal Abdel Nasser", "Anwar Sadat"], answer: 1,
        explain: "General Naguib was the figurehead; Nasser led the movement and became president in 1956." },
      sources: [
        { title: "Gamal Abdel Nasser", publisher: "Britannica", url: "https://www.britannica.com/biography/Gamal-Abdel-Nasser", date: "n.d." },
        { title: "Egypt: History", publisher: "Britannica", url: "https://www.britannica.com/place/Egypt/History", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "eg-3", kind: "history", asOf: "2026-09-28",
      title: "Officers, a revolution and a counter-revolution",
      dek: "Seventy years of military-backed rule, interrupted by an uprising that briefly brought democracy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-3-hero.webp",
          alt: "Illustration of a vast crowd filling a circular city square at night, with tents, lights and a large roundabout, seen from above.",
          caption: "Tahrir Square in Cairo, centre of the 2011 revolution.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast crowd filling a large circular city square at night seen from above, tents and makeshift stages, strings of lights, a grand old museum building at one edge, a river beyond with bridges, electric and hopeful, no legible banners, no faces in close-up." },
        { type: "timeline", head: "The short version", items: [
          ["1952", "The Free Officers overthrow the monarchy"],
          ["1956", "Nasser nationalises the Suez Canal"],
          ["1967 / 1973", "Wars with Israel"],
          ["1979", "Peace treaty with Israel"],
          ["1981–2011", "Mubarak's rule"],
          ["2011", "Revolution; Mubarak falls"],
          ["2013", "The army removes President Morsi"]
        ] },
        { type: "section", head: "1. Nasser and the Free Officers", md:
          "In 1952 a group of army officers overthrew King Farouk. Gamal Abdel Nasser emerged as leader and became a hero across the Arab world when he nationalised the Suez Canal in 1956 and survived an invasion by Britain, France and Israel. He built a socialist, pan-Arab state allied with the Soviet Union, but Egypt's crushing defeat by Israel in 1967, which lost it Sinai, shattered his project." },
        { type: "section", head: "2. Sadat and peace", md:
          "Anwar Sadat launched the 1973 war to regain Sinai and restore Egypt's pride, then turned to the United States. He flew to Jerusalem in 1977, and in 1979 signed the peace treaty with [[unit:il|Israel]] that returned Sinai. Egypt has received billions of dollars in US military aid every year since. Many Arabs saw the peace as betrayal, and Islamist soldiers assassinated Sadat in 1981." },
        { type: "section", head: "3. Mubarak's long rule", md:
          "Hosni Mubarak, Sadat's vice president, ruled for 30 years under emergency law. He kept the peace with Israel and close ties with Washington, opened the economy in ways that enriched a well-connected elite, and suppressed both Islamists and liberals, while preparing his son to succeed him." },
        { type: "section", head: "4. Revolution and the Brotherhood (2011–2013)", md:
          "On 25 January 2011, inspired by Tunisia, protesters filled Tahrir Square. After 18 days the army pushed Mubarak out. In Egypt's first free presidential election, in 2012, Mohamed Morsi of the Muslim Brotherhood won narrowly. His year in office was chaotic and polarising, and in June 2013 millions protested against him. On 3 July the army, led by Sisi, removed him." },
        { type: "section", head: "Why 2011 failed", md:
          "Egyptians still argue over why the revolution ended where it did. Some blame the Brotherhood for governing for its own supporters; others blame the army and the old regime for undermining the elected government from the start. The revolutionaries who filled Tahrir had no organised party ready for elections, and the two best-organised forces, the army and the Brotherhood, ended up in a winner-takes-all struggle that the army won." },
        { type: "section", head: "5. The Sisi era (2013–)", md:
          "Weeks later security forces broke up Brotherhood sit-ins in Cairo; at Rabaa al-Adawiya square hundreds were killed in a single day, more than 800 according to Human Rights Watch. The Brotherhood was banned as a terrorist organisation and Morsi died in court in 2019. Sisi was elected president in 2014, fought an Islamist insurgency in northern Sinai, and launched giant state projects: a second channel for the Suez Canal, new cities and a new administrative capital." }
      ],
      takeaways: [
        "The army has shaped Egypt since the Free Officers' coup of 1952; Nasser nationalised Suez in 1956.",
        "Sadat made peace with Israel in 1979 and was assassinated in 1981; Mubarak ruled for 30 years.",
        "The 2011 revolution led to Morsi's election; the army removed him in 2013, and Sisi took power."
      ],
      check: { q: "Who was Egypt's first freely elected president?",
        choices: ["Hosni Mubarak", "Mohamed Morsi", "Abdel Fattah el-Sisi"], answer: 1,
        explain: "Mohamed Morsi of the Muslim Brotherhood won the 2012 election and was removed by the army in 2013." },
      sources: [
        { title: "Egypt profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-africa-13315719", date: "n.d." },
        { title: "All According to Plan: The Rab'a Massacre and Mass Killings of Protesters in Egypt", publisher: "Human Rights Watch", url: "https://www.hrw.org/report/2014/08/12/all-according-plan/raba-massacre-and-mass-killings-protesters-egypt", date: "2014-08-12" },
        { title: "Egypt", publisher: "Britannica", url: "https://www.britannica.com/place/Egypt", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "eg-10", kind: "past", asOf: "2026-09-28",
      title: "Suez, 1956",
      dek: "When Nasser nationalised the Suez Canal, Britain, France and Israel invaded. Washington forced them out, and Nasser became the hero of the Arab world.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-10-hero.webp",
          alt: "Illustration of a large ship passing through a narrow canal in the desert at sunset, with sand on both banks.",
          caption: "The Suez Canal, linking the Mediterranean and the Red Sea, carries about a tenth of world trade in normal times.",
          credit: "AI illustration — not a photograph",
          prompt: "A large cargo ship passing through a narrow straight canal cutting across flat desert at sunset, pale sand on both banks, a small lighthouse, warm orange sky reflected in the water, calm and strategic, no people close up, no flags, no legible text or logos." },
        { type: "facts", head: "The crisis", rows: [
          ["Canal nationalised", "26 July 1956"],
          ["Israel invades Sinai", "29 October 1956"],
          ["British and French landings", "5–6 November 1956"],
          ["Ceasefire", "7 November, under US and Soviet pressure"],
          ["Withdrawal", "Britain and France by December 1956; Israel by March 1957"]
        ] },
        { type: "section", head: "The canal", md:
          "The Suez Canal, opened in 1869, was owned by a company controlled by British and French shareholders, and British troops guarded it until 1956. For Egyptians it symbolised foreign domination; for Britain it was the route to its empire and its oil. In 1956 the United States and Britain withdrew offers to finance the Aswan High Dam, angry at Nasser's arms deal with the Soviet bloc. On 26 July Nasser responded by nationalising the canal company, promising to use its revenues to build the dam." },
        { type: "section", head: "Collusion", md:
          "Britain's prime minister, Anthony Eden, saw Nasser as a new Mussolini. At a secret meeting at Sèvres, near Paris, Britain, France and Israel agreed a plan: Israel would invade Sinai, and Britain and France would then demand that both sides withdraw from the canal, using Egypt's refusal as a pretext to seize it. Israel attacked on 29 October; British and French forces bombed Egyptian airfields and landed at Port Said on 5–6 November. Egypt blocked the canal by sinking ships." },
        { type: "section", head: "America says no", md:
          "President Eisenhower, who had not been told, was furious, especially as the Soviet Union was crushing a revolt in Hungary at the same moment. The US threatened to withhold support for the pound, which was under heavy pressure, and the Soviets threatened to intervene. Britain and France agreed to a ceasefire on 7 November and withdrew in humiliation; UN peacekeepers, the first large UN force, moved in. Israel withdrew from Sinai in March 1957 after gaining shipping rights through the Straits of Tiran. Eden resigned in January 1957." },
        { type: "section", head: "Nasser triumphant", md:
          "Though Egypt lost militarily, Nasser won politically: he kept the canal and became the champion of Arab nationalism and of anti-colonial movements worldwide. In 1958 Egypt and Syria formed a short-lived United Arab Republic. The crisis marked the end of Britain as an independent great power in the Middle East and the rise of the United States and the Soviet Union as the region's rival patrons." },
        { type: "compare", head: "Two lessons",
          left: { head: "For Egypt and the Arab world", md:
            "A newly independent nation stood up to empires and won, taking control of its own greatest asset." },
          right: { head: "For Britain and France", md:
            "Old colonial powers could no longer act without Washington's consent; France concluded it needed its own nuclear deterrent and a united Europe." } },
        { type: "section", head: "Why it still matters", md:
          "The canal remains one of Egypt's biggest sources of foreign currency, which is why Houthi attacks on Red Sea shipping from late 2023, which cut canal revenues by more than half, hurt Egypt so badly, as this unit's stories describe." }
      ],
      takeaways: [
        "Nasser nationalised the Suez Canal in July 1956 after the West withdrew funding for the Aswan Dam.",
        "Britain, France and Israel secretly planned an invasion, but US pressure forced them to withdraw.",
        "Suez made Nasser a hero of the Arab world and marked the end of British power in the region."
      ],
      check: { q: "Why did Britain and France withdraw from Suez in 1956?",
        choices: ["They won a quick victory", "The United States and the Soviet Union forced a ceasefire", "Egypt paid compensation"], answer: 1,
        explain: "Eisenhower's financial pressure and Soviet threats forced Britain and France to accept a ceasefire and withdraw." },
      sources: [
        { title: "Suez Crisis", publisher: "Britannica", url: "https://www.britannica.com/event/Suez-Crisis", date: "n.d." },
        { title: "The Suez Crisis, 1956", publisher: "US Department of State, Office of the Historian", url: "https://history.state.gov/milestones/1953-1960/suez", date: "n.d." },
        { title: "Anthony Eden", publisher: "Britannica", url: "https://www.britannica.com/biography/Anthony-Eden", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "eg-11", kind: "past", asOf: "2026-09-28",
      title: "1973, Camp David and Sadat's death",
      dek: "Anwar Sadat went to war with Israel, then made peace with it, becoming the first Arab leader to do so. Islamist officers killed him for it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-11-hero.webp",
          alt: "Illustration of a reviewing stand with empty chairs under a canopy beside a parade ground, with military jets trailing coloured smoke in the sky.",
          caption: "Sadat was assassinated on 6 October 1981 while watching a military parade marking the 1973 war.",
          credit: "AI illustration — not a photograph",
          prompt: "An official reviewing stand with rows of empty chairs under a canopy beside a wide parade ground, military jets trailing coloured smoke across a pale sky, bright harsh light, ominous stillness, no people, no flags, no legible text." },
        { type: "timeline", head: "From war to peace", items: [
          ["6 Oct 1973", "Egypt and Syria attack Israel"],
          ["Nov 1977", "Sadat addresses Israel's Knesset in Jerusalem"],
          ["Sep 1978", "Camp David Accords with Israel, brokered by Jimmy Carter"],
          ["Mar 1979", "Egypt–Israel peace treaty"],
          ["6 Oct 1981", "Sadat assassinated"],
          ["1982", "Israel completes its withdrawal from Sinai"]
        ] },
        { type: "section", head: "The crossing", md:
          "Anwar Sadat, one of the Free Officers, succeeded Nasser in 1970. On 6 October 1973, the Jewish holy day of Yom Kippur and during Ramadan, Egypt and Syria launched a surprise attack on Israeli forces in Sinai and the Golan Heights. Egyptian troops crossed the Suez Canal and breached Israel's defensive line. Israel recovered and counter-attacked across the canal before a ceasefire, but Egypt had restored its army's honour, and Egyptians still celebrate the crossing on 6 October." },
        { type: "section", head: "Peace", md:
          "Sadat concluded that only the United States could return Sinai. In November 1977 he stunned the world by flying to Jerusalem and addressing Israel's parliament. At Camp David in September 1978, President Jimmy Carter brokered agreements between Sadat and Israel's prime minister, Menachem Begin, and a peace treaty was signed in March 1979: Israel would return all of Sinai, and Egypt would recognise Israel. Sadat and Begin shared the Nobel Peace Prize. Egypt has received billions of dollars in US aid every year since." },
        { type: "section", head: "Backlash and assassination", md:
          "The Arab League expelled Egypt and moved its headquarters from Cairo. At home, Sadat's opening of the economy, the 'infitah', enriched a few while bread riots erupted in 1977, and he cracked down on critics of all kinds, arresting more than 1,500 people in September 1981. On 6 October 1981, during a parade celebrating the 1973 war, soldiers belonging to the Islamist group Egyptian Islamic Jihad jumped from a truck and shot him dead. His vice-president, Hosni Mubarak, took over and ruled for 30 years under a state of emergency." },
        { type: "compare", head: "Two views of Sadat",
          left: { head: "A statesman", md:
            "Sadat recovered Egypt's land, ended a cycle of wars and made a peace that has held for over four decades." },
          right: { head: "His critics then", md:
            "He broke Arab ranks, abandoned the Palestinians and tied Egypt to Washington, while ruling as an autocrat." } },
        { type: "section", head: "A cold peace", md:
          "The peace with Israel has survived wars in Lebanon and Gaza, the fall of Mubarak and the rule of the Muslim Brotherhood. It is a 'cold peace': security cooperation is close, but trade and public contact are limited, and most Egyptians remain hostile to Israel. It made Egypt a key mediator between Israel and Hamas, as in the 2025 Gaza ceasefire talks at Sharm el-Sheikh." },
        { type: "section", head: "Why it still matters", md:
          "Camp David was the model for later peace deals, from Jordan in 1994 to the Abraham Accords. Sadat's assassination also foreshadowed the jihadist violence that followed: one of those convicted in the wider case, Ayman al-Zawahiri, later led al-Qaeda." }
      ],
      takeaways: [
        "Egypt's surprise crossing of the Suez Canal in October 1973 restored its military pride.",
        "Sadat flew to Jerusalem in 1977 and signed a peace treaty with Israel in 1979, recovering Sinai.",
        "Islamist soldiers assassinated Sadat in 1981; the peace with Israel has held for over four decades."
      ],
      check: { q: "What did Egypt gain from the 1979 peace treaty?",
        choices: ["The Gaza Strip", "The return of all of Sinai", "Control of Jerusalem"], answer: 1,
        explain: "Israel returned all of Sinai by 1982 in exchange for peace and recognition." },
      sources: [
        { title: "Anwar Sadat", publisher: "Britannica", url: "https://www.britannica.com/biography/Anwar-Sadat", date: "n.d." },
        { title: "Camp David Accords and the Arab-Israeli Peace Process", publisher: "US Department of State, Office of the Historian", url: "https://history.state.gov/milestones/1977-1980/camp-david", date: "n.d." },
        { title: "Yom Kippur War", publisher: "Britannica", url: "https://www.britannica.com/event/Yom-Kippur-War", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "eg-4", kind: "players", asOf: "2026-09-28",
      title: "Sisi and the men around him",
      dek: "A president who rarely delegates, a technocrat prime minister, a spy chief who handles Gaza, and the creditors who keep the lights on.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-4-hero.webp",
          alt: "Illustration of a vast new government district in the desert, with a tall tower, wide empty boulevards and ministry buildings under a hazy sky.",
          caption: "Egypt's new administrative capital, east of Cairo, where ministries have moved.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast new government district in the desert, a very tall slender tower, wide empty boulevards lined with young palm trees, rows of identical cream ministry buildings, hazy sky, a sense of grand ambition and emptiness, no people close up, no legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Abdel Fattah el-Sisi", role: "President, since 2014",
            img: "img/eg/portrait-sisi.webp", source: "Official photo (Kremlin.ru, CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "A former military intelligence chief and defence minister who led the 2013 removal of Morsi. Governs as a security-first leader with a taste for megaprojects; his term ends in 2030." },
          { name: "Mostafa Madbouly", role: "Prime minister, since 2018",
            img: "img/eg/portrait-madbouly.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A technocrat and former housing minister who runs day-to-day government and the IMF programme. Reshuffled his cabinet in February 2026." },
          { name: "Hassan Rashad", role: "Head of the General Intelligence Service",
            img: "img/eg/portrait-rashad.webp", source: "Official photo, if available under a free licence; otherwise initials.",
            md: "Appointed in 2024; his service runs Egypt's mediation with Israel, Hamas and the Gaza parties, and much of its regional diplomacy." },
          { name: "Badr Abdelatty", role: "Foreign minister",
            img: "img/eg/portrait-abdelatty.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Egypt's face in Gaza, Sudan and Nile diplomacy; took the dam dispute to the UN Security Council in 2025." },
          { name: "The creditors", role: "IMF, Gulf states, EU",
            img: "img/eg/portrait-imf.webp", source: "Use an abstract emblem or initials; not a person.",
            md: "The IMF's loan programme, huge Gulf investments and EU support packages keep Egypt's finances afloat, and come with demands for reform." }
        ] },
        { type: "section", head: "Who else matters", md:
          "The defence minister and the chief of staff command the armed forces, whose loyalty is the regime's foundation. Business empires linked to the military and to state agencies shape the economy. Al-Azhar, the ancient seat of Sunni Islamic learning, and its Grand Imam carry religious authority across the Muslim world and sometimes differ from the state." },
        { type: "section", head: "The opposition", md:
          "The Muslim Brotherhood, once the largest opposition movement, is banned; many of its leaders are in prison or exile. Small liberal and leftist parties sit in parliament but have little influence. Criticism happens mostly online and abroad, and even there activists and their families at home face pressure. Occasional national dialogues and pardons have not changed the basic picture." },
        { type: "section", head: "The West's calculation", md:
          "The United States gives Egypt about $1.3 billion in military aid a year, and the EU agreed a €7.4 billion package in 2024 covering loans, investment and migration control. Western governments raise human-rights concerns but prioritise Egypt's stability, its peace with Israel and its role in stopping migration toward Europe. Critics call this a bargain that trades rights for order; governments call it realism about a vital partner." },
        { type: "section", head: "Sinai", md:
          "In northern Sinai, an Islamic State affiliate waged an insurgency from 2013 that killed hundreds of soldiers and, in a 2017 mosque attack, more than 300 worshippers. The army, with tribal allies, largely defeated it by the early 2020s, at the cost of demolishing towns along the Gaza border, according to rights groups." },
        { type: "section", head: "Gulf patrons", md:
          "Saudi Arabia, the UAE and Qatar have poured tens of billions of dollars into Egypt since 2013, in deposits, investments and oil. The largest single deal, in February 2024, was a $35 billion UAE investment to develop Ras El-Hekma on the Mediterranean coast, which rescued Egypt from a currency crisis. Gulf money buys influence: Cairo is careful not to cross its patrons on Sudan, Libya or Iran, even when its own interests differ." }
      ],
      takeaways: [
        "Sisi dominates Egyptian politics; Prime Minister Madbouly runs the economy and the IMF programme.",
        "The intelligence service handles the Gaza file and much of Egypt's regional diplomacy.",
        "Gulf states, especially the UAE, and the IMF keep Egypt's finances afloat."
      ],
      check: { q: "What was the Ras El-Hekma deal of February 2024?",
        choices: ["A peace deal with Sudan", "A $35 billion UAE investment that eased Egypt's currency crisis", "An IMF loan"], answer: 1,
        explain: "The UAE agreed to invest $35 billion to develop a stretch of the Mediterranean coast, the largest foreign investment in Egypt's history." },
      sources: [
        { title: "Madbouly's reshuffled cabinet: Full lineup", publisher: "Ahram Online", url: "https://english.ahram.org.eg/News/562168.aspx", date: "2026-02" },
        { title: "Egypt Explained 2026: Sisi, the Pound, Suez, What Next", publisher: "The Rio Times", url: "https://www.riotimesonline.com/egypt-explained-2026/", date: "2026" },
        { title: "A Balancing Act in a Rentier Reality: Egypt and the Iran War", publisher: "Tahrir Institute for Middle East Policy", url: "https://timep.org/2026/06/04/a-balancing-act-in-a-rentier-reality-egypt-and-the-iran-war/", date: "2026-06-04" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "eg-5", kind: "story", asOf: "2026-09-28",
      title: "The mediator",
      dek: "From the Gaza ceasefire summit at Sharm el-Sheikh to the Rafah crossing and the Iran war, Egypt has made itself the region's indispensable go-between.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-5-hero.webp",
          alt: "Illustration of a Red Sea resort conference centre at dusk, with rows of flags on poles along a palm-lined drive and a line of black cars.",
          caption: "World leaders met at Sharm el-Sheikh in October 2025 to back the Gaza ceasefire.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern conference centre at a Red Sea resort at dusk, a long palm-lined drive with rows of empty flagpoles, a line of black cars, turquoise sea and red mountains beyond, calm diplomatic grandeur, no people close up, no flags or legible text." },
        { type: "section", head: "What happened", md:
          "Egypt, with Qatar and Turkey, mediated between Israel and Hamas throughout the Gaza war. When the US-brokered ceasefire took effect in October 2025, Sisi hosted a summit at Sharm el-Sheikh on 13 October, where Trump and dozens of leaders endorsed the plan. Egypt has pledged to train Palestinian police and to contribute to the International Stabilisation Force, and in February 2026 the Rafah crossing reopened for limited travel, with Egypt approving who crosses.\n\n" +
          "In 2026 Egypt also worked with Pakistan, Turkey and others to try to end the US–Israeli war on [[unit:ir|Iran]], whose shock to shipping and energy prices hit its economy directly." },
        { type: "timeline", head: "How it unfolded", items: [
          ["Oct 2023–Oct 2025", "Egypt mediates between Israel and Hamas with Qatar"],
          ["13 Oct 2025", "Sharm el-Sheikh summit backs the Gaza ceasefire"],
          ["Feb 2026", "Rafah crossing reopens for limited travel"],
          ["2026", "Egypt joins efforts to end the Iran war"]
        ] },
        { type: "section", head: "Why Egypt mediates", md:
          "Egypt's intelligence service has talked to Hamas, Israel and the Palestinian Authority for decades. Mediation gives Cairo influence in Washington and the Gulf and protects its own security: it fears militants in Sinai, the spread of Gaza's war, and above all any mass movement of Palestinians into Egypt, which it has firmly refused, saying it would end the Palestinian cause. Peace also matters for its economy, since war in the region empties the Suez Canal and scares off tourists." },
        { type: "compare", head: "Two views of Egypt's role",
          left: { head: "Supporters", md:
            "Egypt kept channels open when no one else could, helped secure the hostage and prisoner exchanges, and keeps aid flowing through Rafah." },
          right: { head: "Critics", md:
            "Egypt kept Rafah largely closed during the war and profited from crossings; its mediation serves the regime's interests more than Palestinians'." } },
        { type: "section", head: "The Arab plan", md:
          "In March 2025 Egypt drafted, and the Arab League adopted, a plan to rebuild Gaza without moving its people out, costing about $53 billion over five years. It was a response to Trump's early idea of relocating Gazans and turning the strip into a 'Riviera', which Egypt and Jordan rejected outright. Parts of the Egyptian plan fed into the later Board of Peace framework, which Egypt helped shape alongside Qatar and Turkey, its partners in the mediation." },
        { type: "section", head: "Why it matters", md:
          "No Gaza settlement is possible without Egypt, which controls the southern border and has the closest contacts with Hamas's remaining leaders. And by mediating on Iran, Cairo has shown it can be useful to Washington even as it depends on American and Gulf money." },
        { type: "section", head: "What's next", md:
          "Watch Egypt's role in the Stabilisation Force and the training of Palestinian police, the flow of people and goods through Rafah, and whether it hosts a Gaza reconstruction conference, a long-promised plan that requires the fighting and disarmament questions to be settled first." }
      ],
      takeaways: [
        "Egypt mediated between Israel and Hamas and hosted the Sharm el-Sheikh summit on 13 October 2025.",
        "It controls Rafah, which reopened for limited travel in February 2026, and firmly refuses any mass displacement of Gazans into Egypt.",
        "In 2026 it also joined efforts to end the Iran war."
      ],
      check: { q: "Where did world leaders gather in October 2025 to back the Gaza ceasefire?",
        choices: ["Cairo", "Sharm el-Sheikh", "Alexandria"], answer: 1,
        explain: "Sisi hosted the summit at the Red Sea resort of Sharm el-Sheikh on 13 October 2025." },
      sources: [
        { title: "Egypt and the Gaza war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Egypt_and_the_Gaza_war", date: "2026" },
        { title: "Why Egypt is helping end the Iran war", publisher: "Chatham House", url: "https://www.chathamhouse.org/2026/05/why-egypt-helping-end-iran-war", date: "2026-05" },
        { title: "Rafah crossing between Gaza and Egypt reopens after nearly two years", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2026/02/02/israel-egypt-gaza-rafah-crossing/", date: "2026-02-02" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "eg-6", kind: "story", asOf: "2026-09-28",
      title: "An economy in a near-emergency",
      dek: "Debt, devaluation and wars that emptied the Suez Canal: how Egypt stays afloat.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-6-hero.webp",
          alt: "Illustration of the Suez Canal from above in the desert, a single container ship passing along an otherwise empty waterway.",
          caption: "Attacks on Red Sea shipping, and then the Iran war, drove many ships away from the Suez Canal.",
          credit: "AI illustration — not a photograph",
          prompt: "An aerial view of a long straight canal cutting through a pale desert, a single large container ship passing along the otherwise empty waterway, a small town and palm groves on one bank, hazy golden light, quiet and uneasy, no legible text or logos." },
        { type: "section", head: "What happened", md:
          "Egypt's economy lurched from crisis to crisis in the 2020s. Heavy borrowing for megaprojects, the pandemic and the Ukraine war's spike in wheat and energy prices left it short of dollars. The pound was devalued several times, most sharply in March 2024, when it lost about a third of its value in a day, and inflation peaked near 38% in 2023.\n\n" +
          "Rescue came in early 2024: the UAE's $35 billion Ras El-Hekma deal and an expanded IMF loan programme worth $8 billion. Then came the shocks from abroad. Houthi attacks on Red Sea shipping from late 2023 cut Suez Canal revenue by more than half. The 2026 Iran war cut it again, raised energy import costs and hit tourism. Sisi said Egypt was in a 'state of near-emergency'." },
        { type: "facts", head: "By the numbers", rows: [
          ["Inflation", "Peak near 38% (2023); about 14% (June 2026)"],
          ["Growth", "About 4.6% forecast for 2025–26"],
          ["IMF programme", "$8 billion, with reviews passed in 2026"],
          ["Suez Canal", "Revenue more than halved after late 2023; hit again in 2026"],
          ["UAE deal", "$35 billion for Ras El-Hekma (2024)"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Egypt imports much of its food and fuel and relies on a few sources of dollars: Suez fees, tourism, remittances from Egyptians abroad and gas exports. When those falter, the currency comes under pressure. Critics also blame the state's spending on megaprojects and the military's large role in the economy, which the IMF has pressed Egypt to reduce by selling state assets." },
        { type: "section", head: "Gas", md:
          "A decade ago Egypt discovered the giant Zohr gas field and hoped to become an energy exporter. Output has since fallen, and Egypt now imports gas, including from Israel, to keep the lights on in the summer heat. Energy costs are one reason the Iran war, which disrupted gas flows across the region, hurt so much, and why Egypt is racing to add solar and wind power." },
        { type: "compare", head: "Two views of the economy",
          left: { head: "The government", md:
            "Egypt has absorbed shock after shock not of its making, kept growing, brought inflation down and built modern infrastructure for a growing population." },
          right: { head: "Critics", md:
            "Debt-financed megaprojects and military businesses left the country fragile. Ordinary Egyptians have paid for the crises through soaring prices and cuts to subsidies." } },
        { type: "section", head: "Why it matters", md:
          "Around a third of Egyptians live below the national poverty line. Bread prices are politically explosive: subsidy cuts caused riots in 1977, and 'bread' was the first word of the 2011 revolution's slogan. Egypt's creditors know that pushing too hard for austerity could threaten stability." },
        { type: "section", head: "What's next", md:
          "Record remittances and a recovery in tourism have helped. The canal authority expects revenue to recover in 2026 if the Red Sea stays calm. Watch the next IMF reviews, the sale of state companies, and whether shipping returns to Suez as the region's wars wind down." }
      ],
      takeaways: [
        "Egypt devalued its pound sharply in 2024 and was rescued by a $35 billion UAE deal and an IMF programme.",
        "Houthi attacks and then the 2026 Iran war cut Suez Canal revenue and raised energy costs.",
        "Inflation fell to about 14% by mid-2026, but many Egyptians remain poor."
      ],
      check: { q: "What drove ships away from the Suez Canal from late 2023?",
        choices: ["A canal collapse", "Houthi attacks on Red Sea shipping", "Egyptian toll increases"], answer: 1,
        explain: "Houthi attacks near the Bab el-Mandeb strait led many shipping lines to sail around Africa instead, cutting Egypt's canal revenue." },
      sources: [
        { title: "Egypt unlocks $1.8bn IMF funding after passing review", publisher: "The National", url: "https://www.thenationalnews.com/business/economy/2026/07/31/egypt-secures-18bn-imf-funding-as-economy-weathers-iran-war-fallout/", date: "2026-07-31" },
        { title: "Battered but Still Standing, Egypt Tries to Weather the Economic Ravages of the Iran War", publisher: "Middle East Institute", url: "https://mei.edu/publication/battered-but-still-standing-egypt-tries-to-weather-the-economic-ravages-of-the-iran-war/", date: "2026" },
        { title: "Egypt's currency comeback depends on US-Iran outlook", publisher: "AGBI", url: "https://www.agbi.com/opinion/economy/2026/07/egypts-currency-comeback-depends-on-us-iran-outlook/", date: "2026-07" },
        { title: "Sissi says Egypt in 'state of near-emergency' as Iran war threatens economy", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/sissi-says-egypt-in-state-of-near-emergency-as-iran-war-threatens-economy/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "eg-7", kind: "story", asOf: "2026-09-28",
      title: "The Nile and the dam",
      dek: "Ethiopia opened Africa's largest dam on the Blue Nile in September 2025. Egypt, which gets almost all its water from the river, calls it an existential threat.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-7-hero.webp",
          alt: "Illustration of the Nile river from above at dusk, a ribbon of green fields on either side of the water surrounded by desert.",
          caption: "Almost all Egyptians live in the narrow green strip along the Nile and its delta.",
          credit: "AI illustration — not a photograph",
          prompt: "An aerial view of a great river at dusk winding through desert, a narrow ribbon of bright green fields and palm groves on both banks, small villages, the sand turning purple, the water catching the last light, vital and fragile, no legible text." },
        { type: "section", head: "What happened", md:
          "On 9 September 2025 Ethiopia inaugurated the Grand Ethiopian Renaissance Dam (GERD) on the Blue Nile, the river's main tributary. The $5 billion dam has a capacity of 5.15 gigawatts, making it Africa's largest hydroelectric project. Egypt condemned the inauguration as a unilateral act that violates international law and wrote to the UN Security Council to defend its 'historic rights' to Nile water." },
        { type: "section", head: "Why it matters to Egypt", md:
          "Egypt gets about 97% of its fresh water from the Nile, and its population keeps growing, while its share of water per person is already below the UN's scarcity line. Egyptians fear that Ethiopia could hold back water in a drought, or during future filling, leaving farms dry. Sisi has called the dam an 'existential threat'. Sudan, downstream too, shares some concerns." },
        { type: "section", head: "Ethiopia's view", md:
          "Ethiopia says the dam is essential to bring electricity to some 60 million of its people who lack it and to export power to neighbours. It says the reservoir was filled gradually between 2020 and 2024 without harming downstream countries, and that colonial-era treaties giving Egypt and Sudan most of the Nile's water are unfair to the upstream states where the river rises." },
        { type: "compare", head: "Two views of the dam",
          left: { head: "Egypt", md:
            "A river that sustains 100 million people cannot be controlled by one upstream state without a binding agreement on how water is released in dry years." },
          right: { head: "Ethiopia", md:
            "Ethiopia has the right to use the waters that rise on its land to lift its people out of poverty, and has shown the dam need not harm Egypt." } },
        { type: "section", head: "Why talks failed", md:
          "Years of negotiations, mediated at different times by the United States, the World Bank and the African Union, never produced a binding deal. Egypt wanted legally binding rules on filling and drought releases; Ethiopia offered guidelines it could adjust. Independent studies so far have found no major disruption to Egypt's water, partly because of wet years and the buffer of Egypt's own Lake Nasser." },
        { type: "section", head: "Water at home", md:
          "Egypt loses a great deal of water to evaporation and old irrigation methods. The government has lined canals, pushed farmers toward less thirsty crops, restricted rice growing and built large plants to treat drainage water for reuse. It is also building desalination plants along its coasts, though they are costly and use lots of energy. None of this, officials admit, can replace the river itself if its flow falls sharply. Water is treated as a matter of national security, discussed by generals and diplomats as much as by engineers and farmers." },
        { type: "section", head: "What's next", md:
          "The real test will come in a multi-year drought. Watch for any return to talks, Egypt's growing ties with countries around Ethiopia, such as Eritrea and Somalia, and Egypt's investments in desalination and water recycling." }
      ],
      takeaways: [
        "Ethiopia inaugurated Africa's biggest dam on the Blue Nile on 9 September 2025.",
        "Egypt, dependent on the Nile for about 97% of its water, calls the dam an existential threat.",
        "No binding agreement exists; the real test will come in a prolonged drought."
      ],
      check: { q: "Roughly what share of Egypt's fresh water comes from the Nile?",
        choices: ["About 50%", "About 75%", "About 97%"], answer: 2,
        explain: "Egypt depends on the Nile for about 97% of its water, which is why the Ethiopian dam alarms it." },
      sources: [
        { title: "Ethiopia inaugurates GERD dam amid downstream tensions with Egypt, Sudan", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/9/9/ethiopia-inaugurates-gerd-dam-amid-downstream-tensions-with-egypt-sudan", date: "2025-09-09" },
        { title: "Ethiopia launches Africa's largest hydropower dam, straining ties with Egypt", publisher: "France 24", url: "https://www.france24.com/en/africa/20250909-ethiopia-africa-hydropower-dam-egypt", date: "2025-09-09" },
        { title: "Ethiopia's Renaissance mega-dam fuels energy hopes and regional anxiety", publisher: "Mongabay", url: "https://news.mongabay.com/2026/02/ethiopias-renaissance-mega-dam-fuels-energy-hopes-and-regional-anxiety/", date: "2026-02" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "eg-12", kind: "spotlight", asOf: "2026-09-28",
      title: "The Muslim Brotherhood",
      dek: "Founded in Egypt in 1928, the Brotherhood became the Arab world's most influential Islamist movement, won Egypt's first free presidential election, and was crushed a year later.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-12-hero.webp",
          alt: "Illustration of a large mosque with a slender minaret at the edge of a wide square in Cairo at dawn, with scattered debris on the ground.",
          caption: "Rabaa al-Adawiya square in Cairo, where security forces broke up a pro-Morsi sit-in in August 2013.",
          credit: "AI illustration — not a photograph",
          prompt: "A large modern mosque with a slender minaret at the edge of a wide city square at dawn, scattered debris and abandoned tents on the ground, faint smoke, grey-pink light, sorrowful and still, no people, no legible text." },
        { type: "facts", head: "The Brotherhood", rows: [
          ["Founded", "1928, in Ismailia, by Hassan al-Banna"],
          ["Won", "About half the seats in Egypt's 2011–12 parliamentary election"],
          ["President Mohamed Morsi", "Elected June 2012 with about 52%; overthrown July 2013"],
          ["Rabaa dispersal", "14 August 2013; Human Rights Watch counted at least 817 killed"],
          ["Status", "Banned as a terrorist organisation in Egypt since December 2013"]
        ] },
        { type: "section", head: "Origins", md:
          "Hassan al-Banna, a schoolteacher, founded the Society of the Muslim Brothers in 1928, calling for a society governed by Islamic principles and resistance to British influence. It grew into a mass movement with schools, clinics and charities, and branches across the Arab world. It also had a secret armed wing in its early decades. After an attempt on Nasser's life in 1954, the regime crushed it; one of its thinkers, Sayyid Qutb, whose writings later inspired jihadists, was hanged in 1966." },
        { type: "section", head: "Tolerated opposition", md:
          "Under Sadat and Mubarak the Brotherhood renounced violence and was allowed to operate in a legal grey zone. Officially banned, it won control of professional unions and, running candidates as independents, took 88 seats in parliament in 2005. It became the best-organised opposition force in Egypt, rooted in social services in poor neighbourhoods." },
        { type: "section", head: "Power and fall", md:
          "After the 2011 revolution toppled Mubarak, the Brotherhood's Freedom and Justice Party won the most seats in parliament, and in June 2012 its candidate, Mohamed Morsi, narrowly won Egypt's first free presidential election. His year in power was turbulent: he issued a decree placing himself above judicial review, pushed through a constitution drafted mainly by Islamists, and the economy faltered. Millions protested on 30 June 2013. Three days later the army, led by Abdel Fattah el-Sisi, removed him." },
        { type: "section", head: "Rabaa and after", md:
          "Brotherhood supporters staged sit-ins in Cairo. On 14 August 2013 security forces cleared them by force; Human Rights Watch counted at least 817 killed at Rabaa square alone and called it likely a crime against humanity, while the government said its forces faced armed protesters. The Brotherhood was declared a terrorist organisation; tens of thousands of supporters and others were jailed and hundreds sentenced to death in mass trials. Morsi died in court in 2019 after years in solitary confinement." },
        { type: "compare", head: "Two views",
          left: { head: "The Egyptian state and allies", md:
            "The Brotherhood is an extremist organisation that tried to monopolise power; the army saved Egypt from Islamist rule and civil war." },
          right: { head: "Supporters and many rights groups", md:
            "An elected government was overthrown by a coup, followed by the worst massacre in Egypt's modern history and mass repression." } },
        { type: "section", head: "Why it matters", md:
          "Egypt's crackdown shaped the region: the UAE and Saudi Arabia backed it, while Qatar and Turkey sheltered Brotherhood figures. The movement is weakened and divided, but the question of political Islam's place in Arab politics remains unresolved." }
      ],
      takeaways: [
        "Hassan al-Banna founded the Muslim Brotherhood in Egypt in 1928; it became a mass Islamist movement.",
        "Its candidate Mohamed Morsi won the 2012 presidential election and was overthrown by the army in 2013.",
        "Security forces killed at least 817 people at Rabaa in August 2013; the Brotherhood is now banned."
      ],
      check: { q: "Who was Mohamed Morsi?",
        choices: ["An army general", "The Brotherhood candidate who won Egypt's 2012 presidential election", "Nasser's successor"], answer: 1,
        explain: "Morsi was Egypt's first freely elected president; the army removed him in July 2013." },
      sources: [
        { title: "Muslim Brotherhood", publisher: "Britannica", url: "https://www.britannica.com/topic/Muslim-Brotherhood", date: "n.d." },
        { title: "All According to Plan: The Rab'a Massacre and Mass Killings of Protesters in Egypt", publisher: "Human Rights Watch", url: "https://www.hrw.org/report/2014/08/12/all-according-plan/raba-massacre-and-mass-killings-protesters-egypt", date: "2014-08-12" },
        { title: "Mohamed Morsi", publisher: "Britannica", url: "https://www.britannica.com/biography/Mohamed-Morsi", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "eg-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "An economy recovering but fragile, wars on three borders, and a president whose term runs to 2030.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg/eg-8-hero.webp",
          alt: "Illustration of a busy Cairo street at dusk with a bakery counter selling flatbread, people queuing and minarets on the skyline.",
          caption: "Subsidised bread remains a lifeline, and a political barometer, for millions of Egyptians.",
          credit: "AI illustration — not a photograph",
          prompt: "A busy old Cairo street at dusk, a small bakery counter stacked with round flatbreads, a queue of people seen from behind, minarets and domes on the skyline, warm lamplight and dust, everyday life under strain, no faces, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Power:** Sisi rules with a two-thirds majority in parliament; his term runs to 2030.\n" +
          "- **Economy:** inflation down to about 14%, growth above 4%, but Suez revenue and energy costs hit by the Iran war.\n" +
          "- **Gaza:** Egypt mediates, controls Rafah and backs the Stabilisation Force.\n" +
          "- **Sudan and Libya:** wars on its southern and western borders.\n" +
          "- **Nile:** no agreement with Ethiopia over the dam." },
        { type: "section", head: "After 2030?", md:
          "Sisi's current term ends in 2030, and the constitution bars him from running again. But the new parliament has the two-thirds majority needed to propose amendments, which would then go to a referendum, as in 2019. Many analysts expect the question of whether he stays on, or who succeeds him from within the security establishment, to become Egypt's main political story of the late 2020s." },
        { type: "section", head: "Wars on three sides", md:
          "To the east, Gaza's ceasefire is fragile. To the south, Sudan's civil war has sent more than a million refugees into Egypt, which backs Sudan's army. To the west, Libya remains divided between rival governments; Egypt supports the eastern commander Khalifa Haftar. And the Red Sea, its maritime gateway, has been a battleground since 2023." },
        { type: "section", head: "What Egyptians want", md:
          "There are few independent polls, but prices, jobs and the cost of bread, fuel and electricity dominate daily conversation. Many young Egyptians dream of emigrating; hundreds of thousands work in the Gulf and Europe, and their remittances, which hit records in 2025–26, are a lifeline for their families and for the economy." },
        { type: "section", head: "Egypt in the world", md:
          "Egypt joined the BRICS group in 2024 and balances ties with Washington, the Gulf, Europe, China and Russia, which is building its first nuclear power plant at El Dabaa. It wants foreign partners to see it as a pillar of regional stability worth investing in, and it uses its size and location to make that case in every direction, from Washington and Brussels to Beijing and Moscow, and to the Gulf capitals whose money it needs." },
        { type: "section", head: "Three scenarios", md:
          "- **Slow recovery.** The region's wars wind down, Suez traffic returns, and the IMF programme succeeds.\n" +
          "- **Renewed crisis.** A new shock drains dollars again, forcing another devaluation and austerity that tests public patience.\n" +
          "- **Regional role grows.** Egypt leverages its mediation in Gaza and Iran into more Western and Gulf support." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Ongoing:** IMF reviews and state asset sales\n" +
          "- **Ongoing:** Suez Canal traffic as Red Sea and Gulf tensions ease or rise\n" +
          "- **Autumn 2026:** Gaza's Stabilisation Force and any reconstruction conference\n" +
          "- **2029–30:** the next presidential election, or a constitutional change" },
        { type: "section", head: "Connections", md:
          "Egypt's story runs through [[unit:il]] (the 1979 peace and Gaza's border), [[unit:us]] (military aid and mediation), [[unit:sa]] and [[unit:ae]] (its financial patrons), [[unit:ir]] (the war that hit its economy), [[unit:tr]] (former rival, now partner on Gaza) and [[unit:ng]] and [[unit:za]] (fellow African heavyweights)." }
      ],
      takeaways: [
        "Sisi's term runs to 2030; parliament could amend the constitution again.",
        "The economy has stabilised but remains fragile and exposed to regional wars.",
        "Egypt's mediation on Gaza and Iran has raised its value to Washington and the Gulf."
      ],
      check: { q: "When does Sisi's current presidential term end?",
        choices: ["2026", "2030", "2034"], answer: 1,
        explain: "Under the 2019 amendments his third term ends in 2030; changing that would require a new constitutional amendment and a referendum." },
      sources: [
        { title: "Egypt Explained 2026: Sisi, the Pound, Suez, What Next", publisher: "The Rio Times", url: "https://www.riotimesonline.com/egypt-explained-2026/", date: "2026" },
        { title: "Egypt Announces Results of Last Seats in Parliament Vote That Gave Sisi Strong Majority", publisher: "US News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-01-10/egypt-announces-results-of-last-seats-in-parliament-vote-that-gave-sisi-strong-majority", date: "2026-01-10" },
        { title: "Egypt Reports Strong Growth, but IMF Cuts 2026 Outlook", publisher: "Ecofin Agency", url: "https://www.ecofinagency.com/news/1704-54755-egypt-reports-strong-growth-but-imf-cuts-2026-outlook", date: "2026" }
      ]
    }
  ]
});
