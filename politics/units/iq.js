/* ============================================================
   Unit 37 — Iraq 🇮🇶
   Research note and sources: tools/research/iq.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("iq", {
  id: "iq",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "iq-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Iraq in brief",
      dek: "An oil giant of 46 million that has lived through dictatorship, invasion and civil war, now squeezed by the war between its two biggest partners.",
      blocks: [
        { type: "map", src: "maps/iq.svg",
          alt: "Locator map of the Middle East with Iraq highlighted, bordered by Turkey, Iran, Kuwait, Saudi Arabia, Jordan and Syria, with a short coastline on the Gulf and a small globe showing its place in the world.",
          caption: "Iraq borders Iran to the east and Turkey to the north; its only sea outlet is a short stretch of coast at the head of the Gulf.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Baghdad"],
          ["People", "About 46 million"],
          ["System", "Federal parliamentary republic with power shared among Shia, Sunni and Kurdish parties"],
          ["Prime minister", "Ali al-Zaidi, since May 2026"],
          ["President", "Nizar Amidi, a Kurd, since April 2026"],
          ["Oil", "Roughly the fifth-largest proven reserves; OPEC's second-biggest producer"],
          ["Autonomous region", "Kurdistan Region, governed from Erbil"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Iraq sits on about 145 billion barrels of oil, roughly the fifth-largest reserves on earth, and is the second-biggest producer in [[opec-plus|OPEC]] after [[unit:sa|Saudi Arabia]]. It borders [[unit:ir|Iran]], [[unit:tr|Turkey]], [[unit:sy|Syria]] and the Gulf monarchies. For two decades it has been the place where American and Iranian influence meet: the US invaded in 2003 and fought the Islamic State there, while Iran built up allied Shia parties and armed groups. In 2026, as the US and Iran went to war, Iraq was caught in the middle." },
        { type: "section", head: "Who holds power", md:
          "Power is shared by an unwritten rule: the prime minister is a Shia Arab, the president a Kurd and the speaker of parliament a Sunni Arab. After the November 2025 election no bloc had a majority, and it took six months to form a government. Ali al-Zaidi, a businessman with no previous political office, became prime minister in May 2026 as a compromise after President Trump threatened to cut off support if the Shia blocs installed Nouri al-Maliki, a former prime minister close to Iran." },
        { type: "section", head: "The mood in 2026", md:
          "Iraqis are anxious. Iran's closure of the Strait of Hormuz cut off almost all oil exports for months, and oil pays for more than 90% of the state budget, including the salaries of millions of public employees, some of whom went unpaid in the summer. Iranian missiles and drones struck the Kurdistan Region more than a thousand times. The last US troops left on 30 September 2026. Armed groups allied with Iran say they will keep their weapons." },
        { type: "section", head: "A divided country", md:
          "About two-thirds of Iraqis are Shia Arabs, concentrated in Baghdad and the south; Sunni Arabs live mainly in the west and north; Kurds, about a fifth of the population, live in the north-east, where they have run their own autonomous region since 1991. There are also Turkmen, Christians, Yazidis and other minorities, many of whom fled during the wars. Iraq is young: more than half the population is under 25." },
        { type: "section", head: "What Iraq wants", md:
          "Iraq's leaders want to stay out of the US–Iran conflict, keep oil money flowing and avoid a return to the violence of 2006 and 2014. They need the US for access to dollars, because Iraq's oil revenue is held at the New York Federal Reserve, and they need Iran for electricity, gas and the goodwill of its armed allies. Most Iraqis, polls suggest, want both powers to stop using their country as a battlefield." },
        { type: "callout", tone: "why", md:
          "Iraq shows what happens when a state is too weak to control its own armed groups and too important for its powerful neighbours to leave alone." }
      ],
      takeaways: [
        "Iraq has roughly the fifth-largest oil reserves and is OPEC's second-biggest producer.",
        "Power is shared among Shia, Sunni and Kurdish parties; Ali al-Zaidi became prime minister in May 2026.",
        "The 2026 US–Iran war cut Iraq's oil exports and brought Iranian strikes on the Kurdistan Region."
      ],
      check: { q: "Under Iraq's power-sharing custom, which community holds the post of prime minister?",
        choices: ["Kurds", "Sunni Arabs", "Shia Arabs"], answer: 2,
        explain: "Since 2005 the prime minister has been a Shia Arab, the president a Kurd and the speaker a Sunni Arab." },
      sources: [
        { title: "Who is Ali al-Zaidi, the businessman named as Iraq's PM-designate?", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/4/28/who-is-ali-al-zaidi-the-businessman-named-as-iraqs-pm-designate", date: "2026-04-28" },
        { title: "Iraq struggles with July salary payments as oil revenue fails to cover budget", publisher: "The National", url: "https://www.thenationalnews.com/news/mena/2026/08/04/iraq-struggles-with-july-salary-payments-as-oil-revenue-fails-to-cover-budget/", date: "2026-08-04" },
        { title: "Iraq", publisher: "Britannica", url: "https://www.britannica.com/place/Iraq", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "iq-2", kind: "power", asOf: "2026-10-22",
      title: "Sharing out the state",
      dek: "Iraq's 2005 constitution created a federal parliamentary system, and an informal deal divides the top jobs, and the ministries, among communities.",
      blocks: [
        { type: "diagram", src: "img/iq/iq-2-power.svg",
          alt: "Diagram of power in Iraq. Voters elect the 329-seat Council of Representatives by province. Two-thirds of it elects the president, Nizar Amidi, a Kurd, who asks the largest bloc's nominee to form a government. Parliament confirms Prime Minister Ali al-Zaidi and his ministers; ministries are shared among parties. The Kurdistan Region has its own parliament, government and Peshmerga forces. The Popular Mobilization Forces are a state-funded umbrella of armed groups, some aligned with Iran. The next election is due in 2029.",
          caption: "Iraq's top posts and ministries are shared among Shia, Sunni and Kurdish parties.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The constitution", md:
          "Iraq's constitution, approved in a referendum in October 2005 under US occupation, made the country a federal parliamentary republic. It recognises Arabic and Kurdish as official languages, names Islam as the official religion and 'a fundamental source of legislation', and guarantees the Kurdistan Region's autonomy. Sunni Arabs largely rejected it at the time, fearing it divided the country and cut them out of oil wealth concentrated in the Shia south and the Kurdish north." },
        { type: "section", head: "Parliament", md:
          "The 329-member Council of Representatives is elected by proportional representation in each province, with nine seats reserved for Christians, Yazidis and other minorities and a quota of a quarter for women. Parties form large blocs after the vote. The largest Shia alliance, the Coordination Framework, brings together parties close to Iran, including some with their own armed wings. The Sadrist movement, once the biggest single party, boycotted the 2025 election." },
        { type: "section", head: "President and prime minister", md:
          "Parliament elects the president by a two-thirds majority; by custom the post goes to a Kurd, usually from the Patriotic Union of Kurdistan. The president then asks the nominee of the largest bloc to form a government within 30 days, and parliament must confirm the cabinet. After 2025 the process missed every deadline: the president was elected five months late, in April 2026, and Ali al-Zaidi's cabinet was approved in pieces from May to October." },
        { type: "section", head: "Muhasasa", md:
          "The informal sharing of posts, called muhasasa, goes beyond the top three jobs. Ministries, state companies and senior civil-service posts are divided among parties, which use them for patronage: jobs for supporters and contracts for allied businesses. Supporters say it keeps every community inside the system; critics, including the mass protest movement of 2019, say it entrenched corruption and made the state serve parties rather than citizens." },
        { type: "section", head: "Kurdistan", md:
          "The Kurdistan Region, in the north-east, has had self-rule since a no-fly zone protected it in 1991. It has its own parliament, president, government and armed forces, the Peshmerga, divided between the two big Kurdish parties, the Kurdistan Democratic Party (KDP) of the Barzani family in Erbil and the PUK of the Talabani family in Sulaymaniyah. Disputes with Baghdad over oil exports, budget transfers and the status of Kirkuk recur constantly." },
        { type: "section", head: "The courts and the provinces", md:
          "The Federal Supreme Court settles disputes between Baghdad and the regions, certifies election results and rules on the constitution; in recent years it has struck down Kurdish oil laws and dissolved the Kurdish regional parliament's extended term. Outside Kurdistan, Iraq's 15 other provinces elect councils that choose governors, but most money still comes from Baghdad. Article 140 of the constitution promised a referendum on disputed territories such as Kirkuk; it has never been held, so the oil-rich city remains claimed by both the federal government and the Kurds." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Supporters", md:
            "Power-sharing ended Saddam's minority rule and gives every community a stake; Iraq holds competitive elections unlike most of its neighbours." },
          right: { head: "Critics", md:
            "Dividing the state among parties breeds corruption, paralysis and armed factions; voters change little because the same parties always share power." } }
      ],
      takeaways: [
        "The 2005 constitution made Iraq a federal parliamentary republic with an autonomous Kurdistan Region.",
        "By custom the prime minister is a Shia Arab, the president a Kurd and the speaker a Sunni Arab.",
        "Ministries and state jobs are shared among parties, a system called muhasasa that critics blame for corruption."
      ],
      check: { q: "What majority does parliament need to elect Iraq's president?",
        choices: ["A simple majority", "Two-thirds", "Unanimity"], answer: 1,
        explain: "The constitution requires two-thirds in a first round; if no one reaches it, the top two go to a run-off." },
      sources: [
        { title: "Iraq", publisher: "Britannica", url: "https://www.britannica.com/place/Iraq", date: "n.d." },
        { title: "2025 Iraqi parliamentary election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_Iraqi_parliamentary_election", date: "2025" },
        { title: "Toward a new compromise in Iraq?", publisher: "Carnegie Endowment", url: "https://carnegieendowment.org/middle-east/diwan/2025/12/toward-a-new-compromise-in-iraq", date: "2025-12" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "iq-9", kind: "founding", asOf: "2026-10-22",
      title: "Between the rivers",
      dek: "The land of the first cities and the Abbasid caliphs became a British-made kingdom in 1921, cobbled together from three Ottoman provinces.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-9-hero.webp",
          alt: "Illustration of an ancient stepped temple tower of mud brick rising from a flat plain at sunset, with palm trees and a river in the distance.",
          caption: "The ziggurat of Ur, built about 4,000 years ago in southern Mesopotamia.",
          credit: "Illustration — not a photograph",
          prompt: "An ancient stepped temple tower of sun-baked mud brick with a broad central stairway rising from a flat dusty plain at sunset, a line of date palms and a slow river in the distance, warm orange light, timeless and vast, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Cradle to kingdom", items: [
          ["c. 3500 BC", "Sumerian cities such as Uruk and Ur"],
          ["762", "The Abbasid caliphs found Baghdad"],
          ["1258", "The Mongols sack Baghdad"],
          ["1534–1918", "Ottoman rule, as three provinces"],
          ["1920", "British mandate; a revolt is crushed"],
          ["1921", "Faisal I is crowned king of Iraq"],
          ["1932", "Independence and League of Nations membership"]
        ] },
        { type: "section", head: "Mesopotamia", md:
          "The plain between the Tigris and Euphrates rivers, Mesopotamia, is where writing, cities and law codes first appeared. Sumer, Akkad, Babylon and Assyria rose and fell here; Hammurabi's code and the Epic of Gilgamesh come from this land. The ruins of Ur, Babylon and Nineveh are still in Iraq, though many sites were looted after 2003 and some were destroyed by the Islamic State." },
        { type: "section", head: "Baghdad of the caliphs", md:
          "In 762 the Abbasid caliph al-Mansur founded Baghdad as his capital. For centuries it was perhaps the largest and richest city in the world, home to the House of Wisdom, where scholars translated Greek, Persian and Indian works and advanced mathematics, medicine and astronomy. The Shia holy cities of Najaf and Karbala, where the Prophet's cousin Ali and grandson Hussein are buried, made southern Iraq the spiritual heart of Shia Islam. In 1258 the Mongols sacked Baghdad and killed the last Abbasid caliph." },
        { type: "section", head: "Three provinces", md:
          "From the 1500s the Ottoman Empire ruled the region as three provinces: Mosul in the Kurdish and Sunni north, Baghdad in the centre and Basra in the Shia south. They were often contested with Persia. During the First World War, British and Indian troops landed at Basra in 1914 and, after a disastrous defeat at Kut, took Baghdad in 1917 and Mosul in 1918." },
        { type: "section", head: "A British-made state", md:
          "In 1920 the League of Nations gave Britain a mandate over the three provinces. A nationwide revolt that summer, uniting Shia tribes and Sunni nationalists, was crushed with air power and cost thousands of lives. Britain then installed Faisal, son of the Sharif of Mecca, whom France had just driven from [[unit:sy|Syria]], as king. Iraq became independent in 1932, but Britain kept bases and influence, and Sunni Arab elites dominated a country with a Shia majority and a restive Kurdish north." },
        { type: "section", head: "Oil and the monarchy", md:
          "Oil was found near Kirkuk in 1927, and a British-led consortium, the Iraq Petroleum Company, controlled it for decades. The money flowed to a small elite around the Hashemite monarchy, while most Iraqis stayed poor farmers. Nuri al-Said, who served as prime minister again and again, tied the kingdom to Britain, most visibly through the 1955 Baghdad Pact. That alignment angered nationalist army officers inspired by Egypt's Nasser, and in July 1958 they overthrew the king, killing him and much of the royal family in Baghdad." },
        { type: "compare", head: "Two views of Iraq's birth",
          left: { head: "An artificial state", md:
            "Britain glued together three peoples who never wanted to live together, sowing the conflicts that followed." },
          right: { head: "A real nation", md:
            "Iraqis shared rivers, cities, trade and a long history; the 1920 revolt showed a common national feeling across sects." } },
        { type: "section", head: "Why it matters", md:
          "The legacies of the mandate, Sunni dominance, Kurdish grievances and the question of how to share oil, run through Iraqi politics today." }
      ],
      takeaways: [
        "Mesopotamia was the birthplace of cities and writing; Abbasid Baghdad was the centre of the Islamic world.",
        "The Ottomans ruled Iraq as three provinces, Mosul, Baghdad and Basra.",
        "Britain created the Kingdom of Iraq under Faisal I in 1921; it became independent in 1932."
      ],
      check: { q: "Who became Iraq's first king in 1921?",
        choices: ["Saddam Hussein", "Faisal I", "Hammurabi"], answer: 1,
        explain: "Britain installed Faisal, son of Sharif Hussein of Mecca, after France expelled him from Syria." },
      sources: [
        { title: "History of Iraq", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Iraq", date: "n.d." },
        { title: "Iraq", publisher: "Britannica", url: "https://www.britannica.com/place/Iraq", date: "n.d." },
        { title: "Mandatory Iraq", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mandatory_Iraq", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "iq-3", kind: "history", asOf: "2026-10-22",
      title: "Saddam, invasion and the Islamic State",
      dek: "A revolution, a dictatorship, three wars and an invasion, then a sectarian civil war and a jihadist 'caliphate'.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-3-hero.webp",
          alt: "Illustration of a Baghdad street at dusk with concrete blast walls lining the road, a domed mosque behind, and a few cars passing.",
          caption: "Concrete blast walls became a symbol of Baghdad during the sectarian war of 2006–08.",
          credit: "Illustration — not a photograph",
          prompt: "A wide city street at dusk lined with tall grey concrete blast-wall segments, a blue-tiled dome and minaret rising behind them, palm trees, a few passing cars with headlights, dusty orange light, tense and weary, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1958", "Revolution overthrows the monarchy"],
          ["1968", "The Ba'ath Party takes power"],
          ["1979", "Saddam Hussein becomes president"],
          ["1980–88", "War with Iran"],
          ["1990–91", "Invasion of Kuwait; Gulf War"],
          ["2003", "US-led invasion topples Saddam"],
          ["2014–17", "The Islamic State holds Mosul"]
        ] },
        { type: "section", head: "1. Revolution and the Ba'ath", md:
          "In July 1958 army officers overthrew the monarchy and killed the king. A decade of coups followed until the Ba'ath Party, Arab nationalist and socialist, seized power in 1968. Oil was nationalised in 1972, and the 1970s boom paid for schools, hospitals and a large middle class. Saddam Hussein, the party's security chief, took full power in 1979 and purged his rivals at a televised party meeting." },
        { type: "section", head: "2. Saddam's wars", md:
          "In 1980 Saddam invaded [[unit:ir|Iran]], hoping to exploit its revolution; the war lasted eight years and killed hundreds of thousands. He used chemical weapons against Iranian troops and Iraq's own Kurds ([[lesson:iq-10]]). In 1990 he invaded Kuwait; a US-led coalition expelled him in 1991. Uprisings by Shia and Kurds were crushed, though a no-fly zone let the Kurds build self-rule. UN sanctions through the 1990s impoverished ordinary Iraqis." },
        { type: "section", head: "3. Invasion and occupation", md:
          "In March 2003 the [[unit:us|United States]] and [[unit:gb|Britain]] invaded, saying Saddam had weapons of mass destruction, which were never found ([[lesson:iq-11]]). Baghdad fell in three weeks. The occupation authority disbanded the army and purged Ba'ath Party members, fuelling a Sunni insurgency, while Shia parties, many of them returning from exile in Iran, won elections. Saddam was captured in December 2003 and hanged in 2006." },
        { type: "section", head: "4. Civil war", md:
          "In 2006 al-Qaeda in Iraq bombed the Shia shrine at Samarra, setting off a sectarian civil war in which death squads killed tens of thousands and neighbourhoods were cleansed. A US troop 'surge' and Sunni tribes turning against al-Qaeda reduced the violence by 2008. US forces left at the end of 2011. Prime Minister Nouri al-Maliki, who governed from 2006 to 2014, was accused of sidelining Sunnis." },
        { type: "section", head: "5. The Islamic State", md:
          "In June 2014 the Islamic State, al-Qaeda's successor, swept out of Syria and seized Mosul, Iraq's second city, as the army collapsed ([[lesson:iq-12]]). Iraq's top Shia cleric, Grand Ayatollah Ali al-Sistani, called on Iraqis to fight, and tens of thousands joined the Popular Mobilization Forces. With US-led air support, Iraqi forces retook Mosul in 2017. Mass protests against corruption in 2019 forced a prime minister to resign; Mohammed Shia al-Sudani governed from 2022 to 2026." },
        { type: "section", head: "Sanctions and the 1990s", md:
          "After Iraq was driven from Kuwait in 1991, Shia in the south and Kurds in the north rose up; Saddam's forces crushed the southern revolt, while a Western no-fly zone let the Kurds build self-rule. UN sanctions stayed in place for twelve years to force Iraq to give up weapons of mass destruction. They wrecked the economy and the middle class, and an oil-for-food programme from 1996 eased but did not end the hardship. Saddam's regime survived by leaning on clan, tribe and religion, and the shortages bred the smuggling and corruption that outlasted him." }
      ],
      takeaways: [
        "The Ba'ath Party took power in 1968, and Saddam Hussein ruled from 1979 to 2003.",
        "Saddam waged war on Iran and invaded Kuwait; a US-led invasion toppled him in 2003.",
        "A sectarian civil war in 2006–08 was followed by the Islamic State's seizure of Mosul in 2014."
      ],
      check: { q: "What was the main stated reason for the 2003 invasion?",
        choices: ["To protect oil fields", "Weapons of mass destruction, which were never found", "To defend Kuwait"], answer: 1,
        explain: "The US and UK said Iraq had weapons of mass destruction; inspectors found no active programmes." },
      sources: [
        { title: "History of Iraq", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Iraq", date: "n.d." },
        { title: "Iraq War", publisher: "Britannica", url: "https://www.britannica.com/event/Iraq-War", date: "n.d." },
        { title: "Battle of Mosul (2016–2017)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Mosul_(2016%E2%80%932017)", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "iq-10", kind: "past", asOf: "2026-10-22",
      title: "Anfal and Halabja",
      dek: "In the late 1980s Saddam's government waged a campaign against Iraq's Kurds that killed tens of thousands, including with poison gas.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-10-hero.webp",
          alt: "Illustration of a mountain town of flat-roofed houses in a green valley under snow-streaked peaks, with a faint yellowish haze drifting through the streets.",
          caption: "Halabja, near the Iranian border, where a chemical attack on 16 March 1988 killed about 5,000 people.",
          credit: "Illustration — not a photograph",
          prompt: "A small mountain town of flat-roofed stone and mud houses in a green valley beneath snow-streaked peaks, a faint pale yellowish haze drifting low through empty streets, early spring light, eerie and silent, no people, no flags, no legible text." },
        { type: "facts", head: "The campaign", rows: [
          ["Anfal campaign", "1986–89, led by Ali Hassan al-Majid"],
          ["Killed", "Estimates range from about 50,000 to more than 100,000"],
          ["Villages destroyed", "Thousands"],
          ["Halabja", "16 March 1988; about 5,000 killed by chemical weapons"],
          ["Justice", "Iraqi courts convicted Saddam's cousin and others of genocide"]
        ] },
        { type: "section", head: "Background", md:
          "Kurds in Iraq had fought for self-rule since the 1960s. During the war with [[unit:ir|Iran]], Kurdish parties allied with Tehran, and Saddam's government saw the Kurdish countryside as an enemy zone. It put his cousin Ali Hassan al-Majid in charge of the north with orders to crush the rebellion. The campaign that followed, from 1986 to 1989, was named 'Anfal', after a chapter of the Quran about the spoils of war." },
        { type: "section", head: "The Anfal", md:
          "In eight phases, the army and security forces destroyed thousands of Kurdish villages, rounded up men and boys of fighting age and executed them in mass graves in the desert, and moved women, children and the elderly into camps where many died. Human Rights Watch estimated that 50,000 to 100,000 people were killed; Kurdish authorities give a higher figure. Chemical weapons were used in dozens of attacks, and al-Majid became known as 'Chemical Ali'." },
        { type: "section", head: "Halabja", md:
          "On 16 March 1988, after Kurdish fighters and Iranian forces took the town of Halabja, Iraqi planes dropped a mixture of chemical agents, believed to include mustard gas and nerve agents, on it. About 5,000 people, most of them civilians, were killed within hours, and thousands more suffered lasting injuries. It was the largest chemical attack on a civilian population in history. At the time, many Western governments, which were tilting toward Iraq against Iran, said little." },
        { type: "section", head: "Justice", md:
          "After 2003 an Iraqi tribunal tried Saddam and others for the Anfal campaign. Saddam was executed in 2006 for a different case, before the Anfal verdict. Al-Majid was convicted of genocide and crimes against humanity and hanged in 2010. Iraq's parliament has recognised the Anfal and Halabja as genocide. Mass graves are still being found and exhumed." },
        { type: "section", head: "The chemical weapons", md:
          "Iraq built one of the world's largest chemical-weapons programmes in the 1980s, using mustard gas and nerve agents against Iranian troops in the war with Iran. The Anfal turned those weapons on Iraq's own citizens. Survivors described aircraft dropping canisters that smelt of sweet apples or garlic, followed by burns, blindness and death. Much of the world looked away at the time, because many governments saw Iraq as a barrier against revolutionary Iran. Only after the 1991 Gulf war did UN inspectors begin to document and destroy the stockpiles." },
        { type: "section", head: "Remembering", md:
          "Halabja's anniversary, 16 March, is a day of mourning across the Kurdistan Region, and a memorial stands at the entrance to the town. Mass graves are still being found and exhumed in the deserts of southern Iraq, where many Anfal victims were taken and shot. Several countries' parliaments, including Britain's and Sweden's, have recognised the Anfal as genocide. For Kurds, the memory explains why they guard their own security forces and treat any plan to place them under Baghdad's command with deep suspicion." },
        { type: "compare", head: "Two lessons drawn",
          left: { head: "The Kurdish lesson", md:
            "Only self-government and their own forces can protect Kurds from Baghdad; Halabja proves what can happen without them." },
          right: { head: "The international lesson", md:
            "Silence about atrocities by a useful ally encourages them; Halabja shaped later bans and inspections of chemical weapons." } },
        { type: "section", head: "Why it matters", md:
          "The Anfal and Halabja are central to Kurdish identity and to the Kurdistan Region's insistence on autonomy, and help explain its 2017 independence referendum and its ties with the West." }
      ],
      takeaways: [
        "Saddam's Anfal campaign of 1986–89 destroyed thousands of Kurdish villages and killed tens of thousands.",
        "A chemical attack on Halabja on 16 March 1988 killed about 5,000 people.",
        "Iraqi courts later convicted 'Chemical Ali' of genocide; the events shape Kurdish politics today."
      ],
      check: { q: "What happened at Halabja on 16 March 1988?",
        choices: ["A peace treaty was signed", "A chemical attack killed about 5,000 people", "Kurds declared independence"], answer: 1,
        explain: "Iraqi aircraft dropped chemical agents on the Kurdish town, the largest chemical attack on civilians in history." },
      sources: [
        { title: "Halabja massacre", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Halabja_massacre", date: "n.d." },
        { title: "History of Iraq", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Iraq", date: "n.d." },
        { title: "Anfal campaign", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Anfal_campaign", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "iq-11", kind: "past", asOf: "2026-10-22",
      title: "2003 and after",
      dek: "The US-led invasion toppled Saddam in three weeks. What followed cost hundreds of thousands of lives and reshaped the Middle East.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-11-hero.webp",
          alt: "Illustration of a wide square in Baghdad with a large empty plinth where a statue once stood, armoured vehicles parked at the edge, and palm trees.",
          caption: "Firdos Square in Baghdad, where a statue of Saddam was pulled down on 9 April 2003.",
          credit: "Illustration — not a photograph",
          prompt: "A wide city square with a tall empty stone plinth where a statue once stood, a few beige armoured vehicles parked at the edge, palm trees and a tall hotel behind, hazy spring light, a moment after upheaval, no people close up, no flags, no legible text." },
        { type: "facts", head: "The war in numbers", rows: [
          ["Invasion", "20 March 2003; Baghdad fell on 9 April"],
          ["US troops killed", "About 4,500 by the 2011 withdrawal"],
          ["Iraqi civilians killed", "Estimates range from about 200,000 to far higher"],
          ["Weapons of mass destruction", "None found"],
          ["Displaced", "Millions, inside Iraq and abroad"]
        ] },
        { type: "section", head: "The case for war", md:
          "After the attacks of 11 September 2001, President George W. Bush's administration argued that Saddam Hussein had chemical and biological weapons, was seeking nuclear arms and might give them to terrorists. The UN Security Council did not authorise the invasion; [[unit:fr|France]], [[unit:de|Germany]] and [[unit:ru|Russia]] opposed it, and millions protested worldwide. The US, [[unit:gb|Britain]], Australia and Poland invaded on 20 March 2003." },
        { type: "section", head: "Victory and chaos", md:
          "Baghdad fell on 9 April. But looting broke out, and the US-led Coalition Provisional Authority disbanded the Iraqi army and barred senior Ba'ath Party members from public jobs, putting hundreds of thousands of armed, angry men out of work. A Sunni insurgency grew, and al-Qaeda in Iraq, led by Abu Musab al-Zarqawi, launched suicide bombings against Shia civilians to provoke civil war. Abuses by US guards at Abu Ghraib prison, revealed in 2004, damaged America's reputation." },
        { type: "section", head: "No weapons", md:
          "US inspectors searched for more than a year and found no active weapons-of-mass-destruction programmes. Inquiries in the US and the UK, including Britain's Chilcot report in 2016, concluded that intelligence had been flawed and presented with too much certainty. For many people around the world, the Iraq War became a lasting symbol of the risks of military intervention." },
        { type: "section", head: "Iran's opportunity", md:
          "The invasion removed Iran's greatest enemy. Shia parties that had sheltered in Iran, and militias trained by its Revolutionary Guards, gained power in the new Iraq. Many Iraqis, including Shia, resent Iranian influence, but the networks built after 2003, from political parties to armed groups, remain the core of Iran's position in the Arab world, as the 2026 war showed." },
        { type: "section", head: "The new order", md:
          "The US-led Coalition Provisional Authority, run by Paul Bremer, dissolved the Iraqi army and barred senior members of the Ba'ath party from public jobs. Hundreds of thousands of armed, angry men were left without work, and many joined the insurgency. Elections in January 2005 brought Shia Islamist parties and the Kurds to power, while most Sunni Arabs boycotted. The constitution approved that October set up the system Iraq still uses. In 2007 a US troop 'surge' and Sunni tribal militias who turned against al-Qaeda brought violence down sharply, before US forces left at the end of 2011." },
        { type: "compare", head: "Two views of the war",
          left: { head: "Supporters", md:
            "It ended the rule of a dictator who had killed hundreds of thousands and gave Iraqis elections and a free press." },
          right: { head: "Opponents", md:
            "It was based on false claims, broke international law, unleashed sectarian war and the Islamic State, and strengthened Iran." } },
        { type: "section", head: "Why it matters", md:
          "The invasion and its aftermath still shape US debates about war, Iraqi politics and the region's balance of power, two decades later." }
      ],
      takeaways: [
        "The US and UK invaded Iraq on 20 March 2003 without UN authorisation; Baghdad fell on 9 April.",
        "No weapons of mass destruction were found; the occupation's decisions fed an insurgency and civil war.",
        "The war removed Iran's main enemy and opened Iraq to Iranian influence."
      ],
      check: { q: "What did the Coalition Provisional Authority do in 2003 that fuelled the insurgency?",
        choices: ["Held immediate elections", "Disbanded the Iraqi army", "Returned power to the Ba'ath Party"], answer: 1,
        explain: "Disbanding the army and purging Ba'athists put hundreds of thousands of armed men out of work." },
      sources: [
        { title: "Iraq War", publisher: "Britannica", url: "https://www.britannica.com/event/Iraq-War", date: "n.d." },
        { title: "History of Iraq", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Iraq", date: "n.d." },
        { title: "Iraq Inquiry (Chilcot report)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Iraq_Inquiry", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "iq-4", kind: "players", asOf: "2026-10-22",
      title: "Zaidi, Maliki, Sadr, Sistani",
      dek: "A businessman prime minister, the powerbrokers who chose him, a cleric with millions of followers who boycotted the vote, and the ayatollah in Najaf.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-4-hero.webp",
          alt: "Illustration of a shrine with a golden dome and two golden minarets above a crowded square in Najaf at dusk, with pilgrims seen from behind.",
          caption: "The shrine of Imam Ali in Najaf, home of Grand Ayatollah Ali al-Sistani, Iraq's most senior Shia cleric.",
          credit: "Illustration — not a photograph",
          prompt: "A shrine with a large golden dome and two golden minarets above a wide crowded square at dusk, many pilgrims seen from behind in dark robes, warm lamps glowing, a deep blue sky, reverent and immense, no faces, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Ali al-Zaidi", role: "Prime minister, since May 2026",
            img: "img/iq/portrait-zaidi.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A businessman from Dhi Qar in his forties who chaired a conglomerate and had never held office. Chosen by the Shia Coordination Framework as a compromise; promised to bring all weapons under state control." },
          { name: "Mohammed Shia al-Sudani", role: "Prime minister 2022–2026",
            img: "img/iq/portrait-sudani.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "His coalition won the most seats in 2025, but he withdrew his bid for a second term in 2026 under pressure from rival Shia leaders." },
          { name: "Nouri al-Maliki", role: "Leader of the State of Law coalition",
            img: "img/iq/portrait-maliki.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Prime minister 2006–2014, close to Iran. The Shia bloc's first choice in 2026 until President Trump threatened to cut off US support." },
          { name: "Muqtada al-Sadr", role: "Shia cleric and populist leader",
            img: "img/iq/portrait-sadr.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Leads a movement of millions of poor Shia and once commanded the Mahdi Army against US forces. Nationalist and wary of Iran; his party won the most seats in 2021 but quit parliament and boycotted the 2025 vote." },
          { name: "Ali al-Sistani", role: "Grand Ayatollah in Najaf",
            img: "img/iq/portrait-sistani.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Iraq's most revered Shia cleric, in his mid-90s. Rarely speaks, but his 2014 call to arms against the Islamic State created the Popular Mobilization Forces." },
          { name: "Masoud Barzani", role: "Leader of the Kurdistan Democratic Party",
            img: "img/iq/portrait-barzani.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Former Kurdistan Region president who led the 2017 independence referendum. His family's KDP dominates Erbil; his nephew and son lead the regional government." }
        ] },
        { type: "section", head: "Who really decides", md:
          "Iraqi prime ministers are chosen, and constrained, by the leaders of the big blocs. The Coordination Framework, which brings together parties such as Maliki's State of Law and Badr and groups with their own armed wings, picked Zaidi after months of deadlock. Its leaders expect him to protect their interests in ministries and state companies. His independence from them will be tested on budgets, appointments and, above all, the militias' weapons." },
        { type: "section", head: "Sadr outside the system", md:
          "Muqtada al-Sadr is the great wild card. In 2022, after failing to form a government without Iran-aligned parties, he pulled his MPs out of parliament, and his followers briefly stormed the Green Zone. He boycotted the 2025 election and called it illegitimate. He can still bring hundreds of thousands into the streets, and his rivals fear his return." },
        { type: "section", head: "The quiet power in Najaf", md:
          "Sistani, born in Iran and resident in Najaf for seven decades, has long opposed clerical rule of the Iranian kind and urged Iraqi politicians to fight corruption. He backed the 2019 protesters' demands. His age raises a question that worries many Iraqis: who will succeed him, and whether his successor will be as independent of Tehran." },
        { type: "compare", head: "Two views of the new prime minister",
          left: { head: "Supporters", md:
            "A technocrat from outside politics who can manage the economy, work with Washington and push the militias toward the state." },
          right: { head: "Sceptics", md:
            "A man with no base of his own, picked by the same parties he is meant to rein in, who will struggle to act against them." } }
      ],
      takeaways: [
        "Ali al-Zaidi, a businessman, became prime minister as a compromise after the US vetoed Nouri al-Maliki.",
        "Muqtada al-Sadr boycotted the 2025 election but remains able to mobilise huge crowds.",
        "Grand Ayatollah Ali al-Sistani's word carries great weight; his succession is a looming question."
      ],
      check: { q: "Why did the Shia bloc drop Nouri al-Maliki as its candidate in 2026?",
        choices: ["He lost his seat", "President Trump threatened to cut off US support", "Sistani issued a fatwa against him"], answer: 1,
        explain: "Trump warned that all US support would stop if Maliki became prime minister; Maliki then withdrew." },
      sources: [
        { title: "Meet Ali al-Zaidi, businessman and Iraq's new prime minister-designate", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2026/04/meet-ali-al-zaidi-businessman-and-iraqs-new-prime-minister-designate", date: "2026-04" },
        { title: "Iraq's election: outcomes and next steps", publisher: "Washington Institute", url: "https://www.washingtoninstitute.org/policy-analysis/iraqs-election-outcomes-and-next-steps", date: "2025-11" },
        { title: "Iraqi president names Shia bloc candidate Ali al-Zaidi as PM-designate", publisher: "Al Jazeera", url: "https://www.aljazeera.com/amp/news/2026/4/27/iraqi-president-names-shia-bloc-candidate-ali-al-zaidi-as-pm-designate", date: "2026-04-27" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "iq-5", kind: "story", asOf: "2026-10-22",
      title: "Caught in the US–Iran war",
      dek: "When the US and Israel attacked Iran, Iraq's militias fired on US troops, Iran pounded Kurdistan, and the last Americans went home.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-5-hero.webp",
          alt: "Illustration of a desert air base at night with interceptor missiles streaking up into the sky, bright flashes overhead and a city's lights in the distance.",
          caption: "Bases in the Kurdistan Region came under more than a thousand Iranian missile and drone attacks in 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A desert air base at night with low hangars and blast walls, several interceptor missiles streaking upward leaving bright trails, small flashes high in the dark sky, the lights of a city on hills in the distance, tense and dramatic, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "When the [[unit:us|United States]] and [[unit:il|Israel]] launched their war on [[unit:ir|Iran]] on 28 February 2026, Iraq became a second front. Iran-aligned armed groups in Iraq fired rockets and drones at US bases, and the US struck their headquarters and depots. Iran itself fired more than a thousand missiles and drones at the Kurdistan Region, where US forces and Iranian Kurdish exile groups were based. Baghdad's government condemned attacks from all sides and tried to keep Iraq officially neutral." },
        { type: "facts", head: "Iraq in the war", rows: [
          ["28 February 2026", "US–Israeli war on Iran begins"],
          ["February–September", "Militia attacks on US bases; US strikes on militias"],
          ["Since February", "More than 1,000 Iranian missile and drone attacks on Kurdistan"],
          ["Spring", "Iran closes the Strait of Hormuz; Iraq's oil exports stop"],
          ["30 September 2026", "Last US troops leave Iraq"]
        ] },
        { type: "section", head: "Why Iraq was dragged in", md:
          "Iraq is where Iran's 'axis of resistance' and the US military footprint overlapped most closely. Iran's allies in Iraq hold seats in parliament and ministries as well as weapons, and many of their fighters are paid through the state-funded Popular Mobilization Forces. The US had about 2,500 troops in Iraq before 2026, under an agreement to end the anti-Islamic State coalition's mission by September 2026. Each side's presence made Iraq a target for the other." },
        { type: "section", head: "The withdrawal", md:
          "The pull-out had been agreed in 2024 under Prime Minister Sudani, but it happened in wartime. The last US troops left an air base in the north on 30 September 2026, ending the US military mission that began against the Islamic State in 2014. Iran-aligned groups declared victory. Kurdish leaders warned that the Kurdistan Region now faces Iranian strikes without US air defences." },
        { type: "section", head: "Kurdistan under fire", md:
          "The Kurdistan Region suffered most. Iran said it was striking US bases and Iranian Kurdish opposition groups that it accused of working with Israel. Airports and oilfields closed for long periods, and foreign companies pulled out staff. The Kurdistan Regional Government, close to the West, was caught between its security ties with Washington and its geography next to Iran." },
        { type: "section", head: "Iraq's balancing act", md:
          "For two decades Baghdad has tried to stay friends with both Washington and Tehran. It depends on the US for dollars, because its oil money sits in an account at the Federal Reserve in New York, and on Iran for gas and electricity, especially in the summer heat. The war made that balance much harder: each strike on a base brought US pressure to rein in the militias, while Iran's allies in parliament pushed for the Americans to leave. The withdrawal in September settled one question, but not the deeper choice." },
        { type: "compare", head: "Two views of Iraq's position",
          left: { head: "Baghdad's view", md:
            "Iraq is a sovereign state that refuses to be a battlefield; it wants both foreign armies' quarrels kept off its soil." },
          right: { head: "Critics' view", md:
            "Iraq cannot be neutral while armed groups inside its own state fight for Iran; neutrality is a cover for weakness." } },
        { type: "section", head: "What's next", md:
          "The US keeps an embassy in Baghdad and a consulate in Erbil, and military cooperation continues from bases in neighbouring countries. The bigger question is whether the government can now disarm the militias ([[lesson:iq-7]])." }
      ],
      takeaways: [
        "In the 2026 US–Iran war, Iran-aligned militias attacked US bases in Iraq and the US struck them.",
        "Iran launched more than a thousand missile and drone attacks on the Kurdistan Region.",
        "The last US troops left Iraq on 30 September 2026 under a 2024 agreement."
      ],
      check: { q: "When did the last US troops leave Iraq?",
        choices: ["December 2011", "30 September 2026", "They have not left"], answer: 1,
        explain: "Under a 2024 agreement, the US completed its withdrawal on 30 September 2026, ending the anti-IS mission." },
      sources: [
        { title: "US completes Iraq troop withdrawal, ending 12-year mission against ISIS", publisher: "ABC News 4", url: "https://abcnews4.com/news/nation-world/us-completes-iraq-troop-withdrawal-ending-12-year-mission-against-isis-islamic-state-group-baghdad-kurdish-region-iran-war-attacks-military-bases-prime-minister-al-zaidi", date: "2026-09-30" },
        { title: "As the last US troops pack up in Iraq, militias signal their weapons will stay", publisher: "Times Live / AP", url: "https://www.timeslive.co.za/news/world/2026-09-15-as-last-us-troops-pack-up-in-iraq-militias-signal-their-weapons-will-stay/", date: "2026-09-15" },
        { title: "US forces complete departure from Iraq as anti-Islamic State mission ends", publisher: "FDD's Long War Journal", url: "https://www.fdd.org/analysis/2026/09/30/us-forces-complete-departure-from-iraq-as-anti-islamic-state-mission-in-iraq-ends/", date: "2026-09-30" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "iq-6", kind: "story", asOf: "2026-10-22",
      title: "Oil without Hormuz",
      dek: "When Iran closed the Strait of Hormuz, Iraq lost almost all its oil exports, and the state struggled to pay millions of salaries.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-6-hero.webp",
          alt: "Illustration of an oil terminal on a flat coast with empty loading berths, idle tanks and a single tanker anchored offshore under a hazy sky.",
          caption: "Iraq's southern terminals near Basra normally ship about 3.5 million barrels a day through the Gulf.",
          credit: "Illustration — not a photograph",
          prompt: "An oil export terminal on a flat hot coast with long empty loading jetties, rows of idle storage tanks, a single tanker anchored far offshore, a hazy white sky, still water, a sense of standstill, no people close up, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "Before the war, Iraq exported about 3.5 million barrels of oil a day from terminals near Basra, all of it through the Strait of Hormuz. When [[unit:ir|Iran]] closed the strait in early 2026, those exports fell to zero. Oil revenue, which pays for at least 90% of the budget, fell from $6.8 billion in February to about $2.3 billion a month in May and June, almost all of it from a single pipeline through the north." },
        { type: "facts", head: "The shock", rows: [
          ["Exports before the war", "About 3.5 million barrels a day, via Hormuz"],
          ["Oil's share of the budget", "At least 90%"],
          ["Revenue in May–June", "About $2.3 billion a month, down from $6.8 billion"],
          ["August 2026", "Iraq–Turkey deal for at least 750,000 barrels a day via Ceyhan"],
          ["July 2026", "Many public salaries paid late"]
        ] },
        { type: "section", head: "A state built on salaries", md:
          "Iraq's government employs or pays pensions to millions of people, perhaps a quarter of the adult population, a system parties use to reward supporters. Public salaries and pensions take most of the budget. When revenue collapsed, the government drew down reserves, borrowed from state banks and delayed payments: in July many public employees went unpaid. Economists had long warned that Iraq's dependence on oil left it exposed; the war made the warning real." },
        { type: "section", head: "The northern route", md:
          "The only route out was the Kirkuk–Ceyhan pipeline to [[unit:tr|Turkey]]'s Mediterranean coast, which had been shut from 2023 to 2025 in a legal dispute and restarted only months before the war. In August 2026 Iraq and Turkey signed a one-year deal to send at least 750,000 barrels a day through it, far below normal exports but much more than the few hundred thousand flowing at the time. Iraq has also talked about routes through Jordan and Syria." },
        { type: "section", head: "Baghdad and Erbil", md:
          "The pipeline runs through the Kurdistan Region, and oil has long been the main quarrel between Baghdad and Erbil. The federal government says all oil belongs to Iraq and must be sold by the state company; the Kurds signed their own contracts and exported independently until an arbitration court ruled against Turkey in 2023. The war forced them to cooperate, but disputes over budget transfers to Kurdistan continue." },
        { type: "compare", head: "Two views of the oil economy",
          left: { head: "The government's view", md:
            "Oil wealth pays for jobs and stability; the crisis came from outside and will pass when Hormuz reopens." },
          right: { head: "Economists' view", md:
            "A state that hires instead of building an economy will keep lurching from crisis to crisis; the war is a warning to diversify." } },
        { type: "section", head: "What's next", md:
          "Iraq's revenues depend on the strait reopening fully and on the pipeline's capacity. The government has promised reforms to raise non-oil income, which past governments have also promised." }
      ],
      takeaways: [
        "Iraq exported about 3.5 million barrels a day through Hormuz before the war; exports via the Gulf fell to zero.",
        "Oil revenue, at least 90% of the budget, collapsed, and many public salaries were paid late.",
        "A one-year deal with Turkey aims to send at least 750,000 barrels a day through the Kirkuk–Ceyhan pipeline."
      ],
      check: { q: "Which route became Iraq's main oil export outlet during the Hormuz closure?",
        choices: ["A pipeline through Iran", "The Kirkuk–Ceyhan pipeline to Turkey", "Tankers via the Red Sea"], answer: 1,
        explain: "The pipeline from Kirkuk through the Kurdistan Region to Ceyhan in Turkey was the only major route left open." },
      sources: [
        { title: "Iraq struggles with July salary payments as oil revenue fails to cover budget", publisher: "The National", url: "https://www.thenationalnews.com/news/mena/2026/08/04/iraq-struggles-with-july-salary-payments-as-oil-revenue-fails-to-cover-budget/", date: "2026-08-04" },
        { title: "Iraq and Turkey strike a 1-year oil pipeline deal to boost exports during ongoing Hormuz closures", publisher: "WTOP / AP", url: "https://wtop.com/world/2026/08/iraq-and-turkey-strike-a-1-year-oil-pipeline-deal-to-boost-exports-during-ongoing-hormuz-closures/", date: "2026-08" },
        { title: "Iraq's oil exports dip to 500,000 bpd in May–June", publisher: "Hellenic Shipping News", url: "https://www.hellenicshippingnews.com/iraqs-oil-exports-dip-to-500000-bpd-in-may-june/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "iq-7", kind: "story", asOf: "2026-10-22",
      title: "Guns outside the state",
      dek: "Iraq's new prime minister has promised to bring every weapon under state control. The strongest armed groups answer to Iran.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-7-hero.webp",
          alt: "Illustration of a checkpoint on a highway outside a city, with pickup trucks, sandbags and banners on poles, and armed men seen from a distance.",
          caption: "Armed groups run checkpoints, businesses and political parties across much of Iraq.",
          credit: "Illustration — not a photograph",
          prompt: "A checkpoint on a dusty highway outside a city, concrete barriers and sandbags, a few pickup trucks parked beside it, blank banners on tall poles, small armed figures seen from a distance, harsh afternoon sun, tense and ordinary, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "The Popular Mobilization Forces were born in 2014, when Grand Ayatollah Sistani called on Iraqis to fight the Islamic State. Tens of thousands joined; some units were old militias backed by [[unit:ir|Iran]], others local and tribal. In 2016 parliament made the PMF part of the state, paid from the budget. Today it numbers well over 200,000, and some of its strongest factions, such as Kataib Hezbollah, follow Iran's lead and fought US forces in 2026." },
        { type: "facts", head: "The armed groups", rows: [
          ["Popular Mobilization Forces", "Founded 2014; state-funded since 2016"],
          ["Most powerful Iran-aligned factions", "Kataib Hezbollah, Nujaba, Kataib Sayyid al-Shuhada"],
          ["Peshmerga", "The Kurdistan Region's own forces, recognised in the constitution"],
          ["Disarmament deadline", "Set for 30 September 2026, then moved to 30 June 2027"],
          ["Draft PMF law", "Would place the force under the prime minister's command"]
        ] },
        { type: "section", head: "Zaidi's promise", md:
          "Zaidi pledged that no group outside the state would be allowed to hold weapons, and first set 30 September 2026, the date of the US withdrawal, as a deadline. Many factions had said they would disarm once US troops left. When the date came, most did not; the government extended the deadline to 30 June 2027. Some groups now add new conditions, such as the departure of Turkish forces from northern Iraq, an end to US influence over Iraq's finances, and even the disbanding of the Kurdish Peshmerga." },
        { type: "section", head: "Why it's so hard", md:
          "The armed factions are not just militias. Their political wings sit in parliament and in the Coordination Framework that chose Zaidi; they control ministries, businesses and checkpoints; and their fighters draw state salaries through the PMF. Under the government's plan, the PMF would collect and store the factions' weapons, which critics say is like asking the factions to disarm themselves. A draft law would bring the PMF fully under the prime minister's command." },
        { type: "section", head: "The protesters' memory", md:
          "In 2019 hundreds of thousands of young Iraqis, mostly Shia, protested against corruption, unemployment and Iranian influence. Hundreds were killed, many by gunmen linked to armed factions. Activists have been assassinated since. For many Iraqis, the question of the militias' guns is about whether they can speak freely in their own country." },
        { type: "section", head: "How the PMF grew", md:
          "The Popular Mobilisation Forces were formed in June 2014 after Grand Ayatollah Sistani called on Iraqis to defend the country against the Islamic State. Tens of thousands of volunteers joined existing militias and new units. A 2016 law made the force part of the state, paid from the budget, but its strongest factions still answer to their own leaders and, in several cases, to Iran's Revolutionary Guards. The force now has well over 200,000 people on its payroll, and its leaders run businesses, checkpoints and parties." },
        { type: "compare", head: "Two views of the factions",
          left: { head: "The factions' view", md:
            "We defeated the Islamic State when the army collapsed and resisted foreign occupation; our weapons protect Iraq." },
          right: { head: "Their critics' view", md:
            "They are Iranian proxies inside the state who kill critics, take a cut of contracts and drag Iraq into other countries' wars." } },
        { type: "section", head: "What's next", md:
          "Washington wants to see disarmament before it fully restores support; Tehran wants its allies to keep their strength. The June 2027 deadline is the next test." }
      ],
      takeaways: [
        "The Popular Mobilization Forces, formed in 2014, are state-funded but include powerful Iran-aligned factions.",
        "Zaidi promised to bring all weapons under state control; the deadline has moved to 30 June 2027.",
        "The factions sit in parliament and government, which makes disarming them politically hard."
      ],
      check: { q: "Why was the Popular Mobilization Forces created in 2014?",
        choices: ["To fight Iran", "To answer Sistani's call to fight the Islamic State", "To guard the oil fields for US companies"], answer: 1,
        explain: "When the Islamic State took Mosul, Sistani called on Iraqis to take up arms; volunteers and militias formed the PMF." },
      sources: [
        { title: "Disarmament of Iraqi militias", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Disarmament_of_Iraqi_militias", date: "2026" },
        { title: "Iranian-backed militia in Iraq sets 'conditions' for disarmament", publisher: "FDD's Long War Journal", url: "https://www.longwarjournal.org/archives/2026/09/iranian-backed-militia-in-iraq-sets-conditions-for-disarmament.php", date: "2026-09-01" },
        { title: "Iraq delays militia disarmament but doesn't give up, for now", publisher: "FDD", url: "https://www.fdd.org/analysis/iraq-delays-militia-disarmament-but-doesnt-give-up-for-now/", date: "2026-09-23" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "iq-12", kind: "spotlight", asOf: "2026-10-22",
      title: "Mosul, 2014–2017",
      dek: "The Islamic State took Iraq's second city in days. Retaking it took nine months of street fighting and left the old city in ruins.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-12-hero.webp",
          alt: "Illustration of an old city of ruined stone houses beside a river, with the stump of a leaning minaret rising among the rubble and cranes rebuilding in the distance.",
          caption: "Mosul's al-Nuri mosque and its leaning minaret were destroyed in 2017; both have since been rebuilt with UNESCO's help.",
          credit: "Illustration — not a photograph",
          prompt: "An old city of ruined pale stone houses beside a wide river, the stump of a leaning brick minaret rising among rubble, a few cranes and new scaffolding in the distance showing reconstruction, soft morning light, grief and recovery, no people close up, no flags, no legible text." },
        { type: "facts", head: "Mosul", rows: [
          ["Fell to the Islamic State", "10 June 2014"],
          ["'Caliphate' declared", "29 June 2014, at the al-Nuri mosque"],
          ["Battle to retake it", "October 2016 to July 2017"],
          ["Deaths", "Thousands of civilians; estimates vary widely"],
          ["Yazidis", "Thousands killed and enslaved in Sinjar, August 2014"]
        ] },
        { type: "section", head: "The fall", md:
          "In early June 2014 a few thousand Islamic State fighters attacked Mosul, a mainly Sunni city of nearly two million. The army and police, tens of thousands strong but riddled with corruption and resented by many residents, fled. Within days the group took Tikrit and threatened Baghdad. On 29 June its leader, Abu Bakr al-Baghdadi, declared a 'caliphate' from the pulpit of Mosul's al-Nuri mosque, his only public appearance as leader." },
        { type: "section", head: "Under the 'caliphate'", md:
          "The Islamic State imposed its extreme rule: public executions, the destruction of shrines and ancient monuments, and the persecution of Christians, Shia and others. In August 2014 it overran the Sinjar region and killed and enslaved thousands of Yazidis, which the UN later called genocide. Its brutality brought a US-led air campaign, and Iraq's forces, the PMF and the Kurdish Peshmerga gradually pushed it back." },
        { type: "section", head: "The battle", md:
          "The offensive to retake Mosul began in October 2016 with Iraqi soldiers, police, Kurdish forces and militias, backed by US-led air strikes. It was one of the hardest urban battles since the Second World War. The Islamic State used suicide car bombs, snipers and civilians as shields. As Iraqi forces closed in, in June 2017, the militants blew up the al-Nuri mosque and its 850-year-old leaning minaret. Prime Minister Haider al-Abadi declared victory in July." },
        { type: "section", head: "Rebuilding", md:
          "Much of west Mosul's old city was destroyed, and thousands of civilians were killed, though estimates vary widely. Reconstruction was slow, but with UNESCO and funding from the UAE, the mosque, minaret and nearby churches have been rebuilt, reopening in 2025. Tens of thousands of Islamic State fighters and their families remain in camps and prisons in Iraq and Syria." },
        { type: "section", head: "The Yazidis", md:
          "In August 2014 IS fighters swept into Sinjar, home of the Yazidi religious minority, west of Mosul. Thousands of men were killed, and thousands of women and girls were enslaved, sold and abused; tens of thousands fled to Mount Sinjar until US air strikes and Kurdish fighters opened an escape route. A UN investigation team and several parliaments have called it genocide. Years later, many Yazidis still live in camps in the Kurdistan Region, Sinjar remains contested between armed groups, and thousands of women and children are still missing." },
        { type: "section", head: "The cost", md:
          "The battle for Mosul was the largest urban fight since the Second World War. Iraqi forces, backed by US-led air power, took the east of the city by January 2017 and the narrow streets of the old city in the west by July. Thousands of civilians were killed, many trapped by IS fighters who used them as shields. The old city was reduced to rubble, including the twelfth-century al-Nuri mosque and its leaning minaret, which IS blew up in June 2017." },
        { type: "compare", head: "Two lessons drawn",
          left: { head: "A military lesson", md:
            "A hollow, corrupt army can collapse overnight; Iraq rebuilt its forces and, with allies, defeated the group." },
          right: { head: "A political lesson", md:
            "The Islamic State grew from Sunni alienation; without fair government, extremism can return." } },
        { type: "section", head: "Why it matters", md:
          "The Islamic State's rise created the Popular Mobilization Forces, brought US troops back in 2014 and still shapes Iraq's politics and fears." }
      ],
      takeaways: [
        "The Islamic State took Mosul in June 2014 and declared a 'caliphate' there.",
        "Iraqi forces, with US-led air support, retook the city after nine months of fighting in 2016–17.",
        "The battle destroyed much of the old city; the al-Nuri mosque and its minaret have since been rebuilt."
      ],
      check: { q: "Where did Abu Bakr al-Baghdadi declare the Islamic State's 'caliphate'?",
        choices: ["Raqqa", "The al-Nuri mosque in Mosul", "Baghdad"], answer: 1,
        explain: "He appeared at the al-Nuri mosque in Mosul on 29 June 2014; the group later blew up the mosque as it lost the city." },
      sources: [
        { title: "Battle of Mosul (2016–2017)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Mosul_(2016%E2%80%932017)", date: "n.d." },
        { title: "History of Iraq", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Iraq", date: "n.d." },
        { title: "Yazidi genocide", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Yazidi_genocide", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "iq-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A new government, an empty treasury, no US troops and armed groups that won't disarm: Iraq faces its hardest test in years.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/iq/iq-8-hero.webp",
          alt: "Illustration of Baghdad's riverside at sunset with the Tigris flowing past palm trees, a domed mosque and modern towers on the far bank.",
          caption: "The Tigris in Baghdad at sunset.",
          credit: "Illustration — not a photograph",
          prompt: "A wide river flowing through a city at sunset, date palms on the near bank, a blue-tiled dome and minaret and several modern towers on the far bank, small boats on the water, warm orange and violet sky, hopeful and uncertain, no people close up, no flags, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Prime Minister Ali al-Zaidi's cabinet complete since October 2026.\n" +
          "- **Security:** US troops gone; militias' disarmament deadline moved to June 2027.\n" +
          "- **Money:** oil revenue down sharply; salaries delayed; a pipeline deal with Turkey.\n" +
          "- **Kurdistan:** recovering from Iranian strikes; quarrels with Baghdad over oil and budgets.\n" +
          "- **Region:** neutral on paper in the US–Iran war; exposed in practice." },
        { type: "section", head: "Iraq in the world", md:
          "Iraq's foreign policy is a balancing act between the [[unit:us|United States]], which controls access to its dollars, and [[unit:ir|Iran]], which supplies gas and electricity and backs powerful allies inside Iraq. It has tried to build ties with [[unit:sa|Saudi Arabia]], [[unit:eg|Egypt]] and Jordan, depends on [[unit:tr|Turkey]] for its oil route and water from the Tigris and Euphrates, and watches the new government in [[unit:sy|Syria]], once its enemy's ally, with caution." },
        { type: "section", head: "Water and climate", md:
          "Iraq is one of the countries most exposed to climate change. Dams in Turkey and Iran have cut the flow of its rivers, the marshes of the south are drying, and summer temperatures pass 50°C. Farmers are leaving the land for city slums. Power cuts in the heat have set off protests for years, and electricity imports from Iran have been disrupted by sanctions and war." },
        { type: "section", head: "What voters want", md:
          "Iraqis want jobs, electricity, clean water and an end to corruption. Turnout of about 56% in 2025 was higher than in 2021, but many young people say no party represents them, and the 2019 protest movement's demands, an end to muhasasa and to the militias' impunity, remain unmet." },
        { type: "section", head: "Three scenarios", md:
          "- **Gradual consolidation.** Hormuz reopens, oil money returns, and the state slowly absorbs the armed groups.\n" +
          "- **A militia state.** Factions keep their guns and their share of the state, and Iraq stays tied to Iran's fortunes.\n" +
          "- **Breakdown.** Unpaid salaries, a new war or a fight over Sistani's succession bring unrest or violence back." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Ongoing:** Hormuz shipping and Kirkuk–Ceyhan volumes\n" +
          "- **Late 2026:** the 2026 budget and salary payments\n" +
          "- **30 June 2027:** the militias' disarmament deadline\n" +
          "- **2029:** the next parliamentary election" },
        { type: "section", head: "Connections", md:
          "Iraq's story runs through [[unit:ir]] (its neighbour, patron of its militias and the war), [[unit:us]] (the 2003 invasion, the dollar and the withdrawal), [[unit:tr]] (the pipeline and water), [[unit:sa]] (OPEC and the Gulf), [[unit:sy]] (the Islamic State and the border) and [[unit:il]] (strikes on Iran's allies)." },
        { type: "section", head: "The economy", md:
          "Iraq is one of the world's largest oil exporters, and oil pays for at least nine-tenths of the budget. About four million Iraqis draw a state salary and millions more get pensions, so a fall in oil revenue quickly becomes a crisis in every household. The Hormuz closure exposed that: southern exports collapsed, salaries ran late, and the government turned to the Kirkuk–Ceyhan pipeline through Turkey. Economists have long urged Iraq to grow private business and collect more taxes; little has changed, because the system of patronage rests on public jobs." }
      ],
      takeaways: [
        "Iraq has a new government, no US troops and a budget crisis caused by the Hormuz closure.",
        "Disarming Iran-aligned armed groups by June 2027 is the government's biggest test.",
        "Climate change and water shortages add to the pressure on a young, frustrated population."
      ],
      check: { q: "Why is Iraq's river water declining?",
        choices: ["Too much rain", "Dams upstream in Turkey and Iran and a hotter climate", "Oil drilling"], answer: 1,
        explain: "Dams in Turkey and Iran and rising temperatures have cut the flow of the Tigris and Euphrates." },
      sources: [
        { title: "Iraqi premier completes Cabinet after parliament approves 11 ministers", publisher: "Yeni Şafak", url: "https://en.yenisafak.com/world/iraqi-premier-completes-cabinet-after-parliament-approves-11-ministers-3724491", date: "2026-10-16" },
        { title: "Iraq's parliament approves new Ali al-Zaidi government", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/5/14/iraqs-parliament-approves-new-ali-al-zaidi-government", date: "2026-05-14" },
        { title: "Iraq's parliament elects Nizar Amedi as new president", publisher: "Khaleej Times", url: "https://www.khaleejtimes.com/world/mena/iraqs-parliament-elects-nizar-amedi-as-new-president?amp=1", date: "2026-04-11" }
      ]
    }
  ]
});
