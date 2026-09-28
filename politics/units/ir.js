/* ============================================================
   Unit 13 — Iran 🇮🇷
   Research note and sources: tools/research/ir.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ir", {
  id: "ir",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ir-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Iran in brief",
      dek: "A theocracy of 90 million people that lost its Supreme Leader in a war with the United States and Israel, and is still fighting over the Strait of Hormuz.",
      blocks: [
        { type: "map", src: "maps/ir.svg",
          alt: "Locator map of the Middle East and Central Asia with Iran highlighted between the Caspian Sea and the Persian Gulf, bordering Iraq, Turkey, Armenia, Azerbaijan, Turkmenistan, Afghanistan and Pakistan, with a small globe showing its place in the world.",
          caption: "Iran's southern coast runs along the Persian Gulf and the Strait of Hormuz, the narrow exit through which about a fifth of the world's oil normally passes.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Tehran"],
          ["People", "About 90 million"],
          ["System", "Islamic Republic: elected institutions under an unelected Supreme Leader"],
          ["Supreme Leader", "Mojtaba Khamenei, since March 2026"],
          ["President", "Masoud Pezeshkian, since 2024"],
          ["Oil", "Among the world's largest proven reserves of oil and gas"],
          ["Status", "At war with the US and Israel since February 2026, with a broken ceasefire"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Iran is the Middle East's largest Shia Muslim power and, for four decades, the main rival of [[unit:us|the United States]], [[unit:il|Israel]] and [[unit:sa|Saudi Arabia]]. It built a network of allied armed groups, from Hezbollah in Lebanon to the Houthis in Yemen, and a nuclear programme that brought it close to the ability to build a weapon.\n\n" +
          "It sits beside the [[Strait of Hormuz]], and in 2026 it showed it could throttle the world's oil supply. What happens in Tehran moves oil prices, shapes wars across the region and tests whether sanctions and force can stop a country getting a bomb." },
        { type: "section", head: "Who holds power", md:
          "Ultimate power belongs to the Supreme Leader, a senior cleric who commands the armed forces and has the final word on foreign and nuclear policy. Ali Khamenei held the job from 1989 until he was killed in US–Israeli strikes on 28 February 2026. The Assembly of Experts chose his son, Mojtaba Khamenei, as successor within days. He is seen as close to the Revolutionary Guards and has made few public appearances.\n\n" +
          "The elected president, Masoud Pezeshkian, a heart surgeon considered a reformist, runs the government, but within limits set by the Leader and the Guards." },
        { type: "section", head: "The mood in 2026", md:
          "Iranians have lived through a devastating year. In January security forces killed thousands of protesters, according to rights groups. In February the country went to war, and thousands more died in US and Israeli strikes. The currency, the rial, has collapsed, prices have soared, and sanctions have cut Iran off from most of the world's economy. Many Iranians, especially the young, are deeply alienated from the system; its supporters rally around the flag against foreign attack." },
        { type: "section", head: "What Iran wants", md:
          "Iran's leaders want the regime to survive, above all. They want an end to US and Israeli attacks, the lifting of sanctions and the US naval blockade, recognition of their right to enrich uranium, and influence across the region. Officials say they will make no concessions on enrichment, though Iran has floated diluting or transferring abroad its most highly enriched uranium as part of a deal." },
        { type: "callout", tone: "why", md:
          "Few countries matter more to global stability right now: a war over Iran's nuclear programme has already sent oil above $100 a barrel, drawn in the Gulf states and Lebanon, and could decide whether the Middle East becomes a region with more than one nuclear power." }
      ],
      takeaways: [
        "Iran is an Islamic Republic in which an unelected Supreme Leader outranks the elected president.",
        "Ali Khamenei was killed in the US–Israeli strikes of 28 February 2026; his son Mojtaba succeeded him.",
        "The war, sanctions and a brutal January crackdown have left Iran isolated and its economy in crisis."
      ],
      check: { q: "Who chose Mojtaba Khamenei as Supreme Leader?",
        choices: ["Iran's voters in a referendum", "The Assembly of Experts", "The president"], answer: 1,
        explain: "The Assembly of Experts, a body of 88 senior clerics, chooses the Supreme Leader. It named Mojtaba Khamenei within days of his father's death." },
      sources: [
        { title: "2026 Iran war", publisher: "Britannica", url: "https://www.britannica.com/event/2026-Iran-war", date: "2026" },
        { title: "Timeline of the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Timeline_of_the_2026_Iran_war", date: "2026-09" },
        { title: "Iran Will Make No Nuclear Concessions, Iranian Official Says", publisher: "US News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-09-25/iran-will-make-no-nuclear-concessions-iranian-official-says", date: "2026-09-25" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ir-2", kind: "power", asOf: "2026-09-28",
      title: "The Leader above the vote",
      dek: "Iranians elect a president and a parliament, but unelected clerics decide who may run and what they may do.",
      blocks: [
        { type: "diagram", src: "img/ir/ir-2-power.svg",
          alt: "Diagram of power in Iran. Voters elect a president, parliament and the Assembly of Experts. The Supreme Leader, Mojtaba Khamenei, is head of state for life, commands the armed forces and the IRGC, and has the final say on nuclear and foreign policy. He appoints half of the 12-member Guardian Council, which vets every candidate and can veto laws. The council filters the elected president, Masoud Pezeshkian, and parliament. They are overshadowed by the Revolutionary Guards, an army, missile force and business empire answering to the Leader. The Assembly of Experts, 88 clerics, chooses the Supreme Leader.",
          caption: "Iran's system mixes elections with clerical control: voters choose among candidates the unelected institutions allow.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "Guardianship of the jurist", md:
          "The Islamic Republic rests on an idea developed by Ayatollah Ruhollah Khomeini, the leader of the 1979 revolution: *velayat-e faqih*, the guardianship of the Islamic jurist. Until the return of the Twelfth Imam, a senior cleric should guide the state. The Supreme Leader is appointed for life, commands the armed forces, appoints the heads of the judiciary, state broadcasting and the military, and sets the direction of foreign policy." },
        { type: "section", head: "The elected institutions", md:
          "Iranians vote for a president every four years and for a 290-seat parliament, the Majlis. The president runs the government and the economy, appoints ministers and represents Iran abroad. Elections are genuinely contested between factions, and turnout used to be high. But voters can only choose from candidates approved by the [[Guardian Council]], which regularly disqualifies reformists and critics. Turnout fell to record lows in the 2024 parliamentary and presidential elections." },
        { type: "section", head: "The Guardian Council", md:
          "The 12-member [[Guardian Council]] has two powerful jobs. It vets every candidate for president, parliament and the Assembly of Experts, and it reviews every law passed by parliament for compatibility with Islam and the constitution. Six members are clerics chosen by the Supreme Leader; six are jurists nominated by the head of the judiciary, himself appointed by the Leader, and approved by parliament." },
        { type: "section", head: "The Revolutionary Guards", md:
          "The [[IRGC]], or Islamic Revolutionary Guard Corps, was created to protect the revolution. It has its own ground forces, navy, air force and missile programme, the Basij volunteer militia used to suppress protests, and the Quds Force, which arms and trains allied groups abroad. It also controls a large part of the economy, from construction to smuggling. Many analysts believe its influence grew further after Ali Khamenei's death." },
        { type: "section", head: "The Assembly of Experts", md:
          "The 88-member Assembly of Experts, elected every eight years from candidates approved by the Guardian Council, chooses the Supreme Leader and in theory can remove him. For decades it was a quiet body that met twice a year. In March 2026, meeting in wartime, it made only the second choice of Supreme Leader in the Islamic Republic's history." },
        { type: "section", head: "Religion and daily life", md:
          "The state enforces Islamic rules in public life, most visibly the compulsory hijab for women, policed by the 'morality police' and, more recently, by cameras and fines. Many Iranians, particularly in the cities, openly defy these rules, and enforcement has become a constant source of conflict between the state and society." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "The Islamic Republic combines religious guidance with elections, has kept Iran independent of foreign powers and has survived war, sanctions and attack for nearly half a century." },
          right: { head: "Its critics", md:
            "Elections are a façade when unelected clerics vet the candidates and a Leader overrules the results. The system rules through repression and has impoverished its people." } }
      ],
      takeaways: [
        "The Supreme Leader, appointed for life, outranks the elected president and parliament.",
        "The Guardian Council vets candidates and can veto laws, limiting what elections can change.",
        "The Revolutionary Guards are a military, political and economic power in their own right."
      ],
      check: { q: "What does Iran's Guardian Council do?",
        choices: ["Commands the navy", "Vets election candidates and reviews laws", "Elects the president"], answer: 1,
        explain: "The Guardian Council approves or rejects candidates and can block laws passed by parliament." },
      sources: [
        { title: "Iran profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-middle-east-14541327", date: "n.d." },
        { title: "Iran's Constitution", publisher: "Constitute Project", url: "https://www.constituteproject.org/constitution/Iran_1989", date: "n.d." },
        { title: "2026 Iran war", publisher: "Britannica", url: "https://www.britannica.com/event/2026-Iran-war", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ir-3", kind: "history", asOf: "2026-09-28",
      title: "From the Shah to the bomb question",
      dek: "A coup, a revolution, a war with Iraq, a nuclear deal and its collapse, and a people who keep rising up.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-3-hero.webp",
          alt: "Illustration of a huge crowd filling a wide Tehran avenue in 1979, seen from above, with a tall white monument in the distance.",
          caption: "The 1979 revolution brought millions onto the streets and ended the monarchy.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast crowd filling a wide city avenue seen from high above in late 1970s film colours, a tall white modernist arch monument in the distance, snow-capped mountains beyond, a sense of historic upheaval, no legible banners, no faces in close-up." },
        { type: "timeline", head: "The short version", items: [
          ["1953", "A US- and British-backed coup topples Prime Minister Mossadegh"],
          ["1979", "The revolution; the Islamic Republic is founded"],
          ["1980–88", "War with Iraq; hundreds of thousands die"],
          ["2015", "The nuclear deal (JCPOA)"],
          ["2018", "The US leaves the deal and reimposes sanctions"],
          ["2022", "'Woman, Life, Freedom' protests"],
          ["2026", "War with the US and Israel; Khamenei killed"]
        ] },
        { type: "section", head: "1. The Shah and the coup", md:
          "In 1951 Iran's elected prime minister, Mohammad Mossadegh, nationalised the British-owned oil industry. In 1953 a coup organised by the CIA and British intelligence removed him and strengthened the Shah, Mohammad Reza Pahlavi. The Shah modernised the country with American support but ruled through a feared secret police. The coup still shapes Iranian distrust of the West." },
        { type: "section", head: "2. Revolution (1979)", md:
          "In 1978–79 mass protests by a broad coalition of clerics, leftists, liberals and students forced the Shah into exile. Ayatollah Khomeini returned from exile and built an Islamic Republic, sidelining his former allies. In November 1979 students seized the US embassy and held 52 Americans hostage for 444 days; the United States and Iran have had no diplomatic relations since." },
        { type: "section", head: "3. War and the proxies (1980–2000s)", md:
          "Iraq's Saddam Hussein invaded in 1980, starting an eight-year war that killed hundreds of thousands and included Iraqi chemical attacks. The war hardened the regime and its sense of isolation. Iran helped found Hezbollah in Lebanon in the 1980s and later built a network of allied militias, which it calls the Axis of Resistance, across Iraq, Syria, Yemen and Gaza." },
        { type: "section", head: "4. The nuclear deal and its end", md:
          "Iran's nuclear programme alarmed the West and Israel from the early 2000s. In 2015 Iran agreed the [[JCPOA]] with the US, the UK, France, Germany, Russia and China: strict limits on enrichment in exchange for sanctions relief. In 2018 President Trump withdrew, calling it too weak, and reimposed sanctions. Iran gradually expanded its programme, enriching uranium to 60%, close to the 90% used in weapons, though it insisted it had no plan to build one." },
        { type: "section", head: "Sanctions", md:
          "American sanctions, tightened again after 2018, cut Iran off from the global banking system and most oil buyers except [[unit:cn|China]], which buys much of its crude at a discount. The economy has suffered years of high inflation and a falling currency, and the burden has fallen hardest on ordinary Iranians rather than the elite." },
        { type: "section", head: "5. Protests and repression", md:
          "Waves of protest have shaken the Islamic Republic: over disputed elections in 2009, over prices in 2017–19, and in 2022 after the death in police custody of Mahsa Amini, a young woman arrested for allegedly breaking hijab rules. The 'Woman, Life, Freedom' movement was crushed, with hundreds killed. Each time the system survived through force, and each time more Iranians lost faith in reform from within." }
      ],
      takeaways: [
        "A Western-backed coup in 1953 and the 1979 revolution shaped Iran's hostility to the United States.",
        "The 2015 nuclear deal limited enrichment; the US left it in 2018, and Iran then enriched up to 60%.",
        "Repeated protest movements, from 2009 to 2022, have been crushed by force."
      ],
      check: { q: "What was the JCPOA?",
        choices: ["Iran's constitution", "The 2015 nuclear deal limiting Iran's enrichment in exchange for sanctions relief", "A Gulf defence pact"], answer: 1,
        explain: "The Joint Comprehensive Plan of Action, agreed in 2015, capped Iran's nuclear programme. The US withdrew in 2018." },
      sources: [
        { title: "Iran profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-middle-east-14542438", date: "n.d." },
        { title: "Prelude to the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prelude_to_the_2026_Iran_war", date: "2026" },
        { title: "US-Iran ceasefire and nuclear talks in 2026", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10637/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "ir-4", kind: "players", asOf: "2026-09-28",
      title: "A new Leader and an old system",
      dek: "A Supreme Leader who inherited the job from his father, a reformist president with little power, and the Guards behind them both.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-4-hero.webp",
          alt: "Illustration of a wide Tehran boulevard at night, almost empty, with shuttered shops, a few cars and the Alborz mountains dark in the background.",
          caption: "Tehran after the war: a capital of millions under sanctions, blackouts and a security clampdown.",
          credit: "AI illustration — not a photograph",
          prompt: "A wide city boulevard at night almost empty, shuttered shops, a few passing cars with headlights, plane trees, dark mountains looming behind the skyline, sodium streetlights, a mood of quiet tension, no people close up, no legible signs." },
        { type: "people", head: "Four to know", items: [
          { name: "Mojtaba Khamenei", role: "Supreme Leader, since March 2026",
            img: "img/ir/portrait-mojtaba-khamenei.webp", source: "Portrait from Iranian official media via Wikimedia Commons, if licensed; confirm the licence.",
            md: "Son of Ali Khamenei, long a powerful figure behind the scenes with close ties to the Guards and the Basij. Considered more hawkish than his father; reported to have ordered that Iran's enriched uranium not leave the country." },
          { name: "Masoud Pezeshkian", role: "President, since 2024",
            img: "img/ir/portrait-pezeshkian.webp", source: "Official photo (president.ir, CC BY 4.0) via Wikimedia Commons; confirm the licence.",
            md: "A reformist heart surgeon who won on promises of better relations with the West. Signed the June 2026 memorandum with Trump and addressed the UN in September, but real power lies elsewhere." },
          { name: "Abbas Araghchi", role: "Foreign minister",
            img: "img/ir/portrait-araghchi.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A veteran diplomat who helped negotiate the 2015 deal. Now Iran's chief negotiator, proposing a seven-day plan to end the fighting in exchange for lifting the blockade and sanctions." },
          { name: "The IRGC commanders", role: "Revolutionary Guards",
            img: "img/ir/portrait-irgc.webp", source: "Use an abstract emblem or leave as initials; do not use an AI face.",
            md: "Many senior commanders were killed in 2025 and 2026. Their successors run the missile force, the navy harassing ships in Hormuz, and the security services at home." }
        ] },
        { type: "section", head: "The succession", md:
          "Iran had long wondered who would follow Ali Khamenei, who led the country for 37 years. The answer came in the middle of a war. The Assembly of Experts chose Mojtaba Khamenei quickly, which many analysts saw as a sign that the Guards and hardliners wanted continuity and speed. Critics, inside and outside Iran, noted the irony of a republic founded against a hereditary monarchy passing its top job from father to son." },
        { type: "section", head: "Factions", md:
          "Iranian politics has long divided between hardline principlists, who distrust the West and prioritise the revolution's ideology, and reformists and pragmatists, who favour engagement and social openness. Since 2020 the hardliners have dominated, helped by the Guardian Council's disqualifications. Pezeshkian's election in 2024 showed a reformist could still win, but he has struggled to deliver change." },
        { type: "section", head: "The regime's allies abroad", md:
          "Iran's network of allies has been badly weakened since 2023. Hamas was devastated in Gaza; Hezbollah lost its leader, Hassan Nasrallah, and much of its arsenal in 2024 and fought again in 2026; and Iran's ally in Syria, Bashar al-Assad, fell in December 2024. The Houthis in Yemen remain active, and militias in Iraq still carry out attacks. Russia and China have offered diplomatic support but have not fought for Iran." },
        { type: "section", head: "Who really decides", md:
          "Decisions on war and peace are made by the Supreme Leader with the Supreme National Security Council, which brings together the president, military commanders, the Guards and the Leader's representatives. The foreign ministry negotiates, but the red lines, above all on enrichment, are set higher up." },
        { type: "section", head: "The opposition", md:
          "Inside Iran, organised opposition is banned and its leaders jailed or in exile. Outside, a fragmented diaspora ranges from monarchists around Reza Pahlavi, the late Shah's son, to republicans and ethnic movements. The women-led protests of 2022 and the uprising of late 2025 showed deep anger, but no single leadership has emerged that could replace the system." }
      ],
      takeaways: [
        "Mojtaba Khamenei succeeded his father in March 2026, backed by the Revolutionary Guards.",
        "President Pezeshkian, a reformist, and Foreign Minister Araghchi handle diplomacy but hold limited power.",
        "Organised opposition is banned at home; the diaspora opposition is divided."
      ],
      check: { q: "Who is Iran's chief negotiator with the US in 2026?",
        choices: ["Mojtaba Khamenei", "Abbas Araghchi", "Reza Pahlavi"], answer: 1,
        explain: "Foreign Minister Abbas Araghchi, who helped negotiate the 2015 deal, leads Iran's talks." },
      sources: [
        { title: "Iran offers uranium compromise as part of plan to break US deadlock, sources say", publisher: "The National", url: "https://www.thenationalnews.com/news/mena/2026/09/25/iran-offers-uranium-compromise-as-part-of-plan-to-break-us-deadlock-sources-say/", date: "2026-09-25" },
        { title: "Iran will make no nuclear concessions, Iranian official says", publisher: "The Jerusalem Post / Reuters", url: "https://www.jpost.com/middle-east/iran-news/article-909735", date: "2026-09-25" },
        { title: "List of Iranian officials killed during the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/List_of_Iranian_officials_killed_during_the_2026_Iran_war", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "ir-5", kind: "story", asOf: "2026-09-28",
      title: "Twelve days and snapback",
      dek: "In June 2025 Israel and the US struck Iran's nuclear sites. Three months later, the UN's old sanctions came back.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-5-hero.webp",
          alt: "Illustration of a tunnel entrance cut into a barren mountainside, partly collapsed and covered in dust, with craters on the slope above.",
          caption: "Iran's deepest enrichment site, Fordow, is built inside a mountain near Qom.",
          credit: "AI illustration — not a photograph",
          prompt: "A reinforced tunnel entrance cut into a barren brown mountainside, partly collapsed and covered in pale dust, several craters on the slope above, a damaged access road, harsh midday light, desolate, no people, no legible text." },
        { type: "section", head: "What happened", md:
          "On 13 June 2025 Israel attacked Iran's nuclear facilities, air defences and missile launchers, and killed senior commanders and nuclear scientists. Iran fired hundreds of ballistic missiles and drones at Israel. On 22 June the United States struck Fordow, Natanz and Isfahan with bunker-busting bombs. After a symbolic Iranian strike on a US base in Qatar, a ceasefire took hold on 24 June.\n\n" +
          "Iran suspended cooperation with UN nuclear inspectors. In late August the UK, France and Germany triggered the [[snapback]] mechanism in the 2015 deal, and on 28 September 2025 UN sanctions lifted a decade earlier were reimposed." },
        { type: "timeline", head: "How it unfolded", items: [
          ["13 Jun 2025", "Israel strikes Iran's nuclear and military sites"],
          ["22 Jun 2025", "US bombs Fordow, Natanz and Isfahan"],
          ["24 Jun 2025", "Ceasefire"],
          ["Aug 2025", "UK, France and Germany trigger snapback"],
          ["28 Sep 2025", "UN sanctions reimposed"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Israel said Iran was nearing the point of no return: it had enough uranium enriched to 60% for several bombs if enriched further. The International Atomic Energy Agency had just found Iran in breach of its safeguards obligations for the first time in two decades. Iran said the strikes, in the middle of talks with Washington, proved that negotiating was pointless." },
        { type: "section", head: "What it did and didn't achieve", md:
          "The damage was severe, but how severe remained disputed. US officials said the programme was set back by years; some intelligence assessments suggested less. Crucially, the fate of Iran's roughly 400 kilograms of 60%-enriched uranium was unclear, since inspectors could no longer verify where it was. That uncertainty, and Iran's refusal to let inspectors back in without guarantees against new attacks, helped set the stage for the far bigger war of 2026." },
        { type: "section", head: "Inside Iran", md:
          "The 12-day war killed around a thousand people in Iran, according to Iranian officials, including many civilians, and several dozen in Israel, according to Israeli officials. It also exposed how thoroughly Israeli intelligence had penetrated Iran's security services. In the months that followed, the authorities arrested hundreds of people accused of spying for Israel and carried out a series of executions for espionage, which rights groups said followed unfair trials." },
        { type: "compare", head: "Two views",
          left: { head: "Israel and the US", md:
            "Iran was racing toward a bomb and had ignored years of warnings. The strikes bought time and showed that its nuclear sites are not beyond reach." },
          right: { head: "Iran and many critics", md:
            "Bombing a country during talks violated international law and convinced Iranian hardliners that only a nuclear deterrent can protect them." } },
        { type: "section", head: "What's next", md:
          "Snapback restored UN arms embargoes and sanctions and made it harder for other countries to trade with Iran. The war that followed in 2026, the next briefing but one, would test again whether force could end the programme, and whether diplomacy could ever replace it." }
      ],
      takeaways: [
        "Israel attacked Iran's nuclear programme on 13 June 2025; the US struck three sites on 22 June.",
        "The 12-day war ended in a ceasefire, but the fate of Iran's enriched uranium was unclear.",
        "UN sanctions were reimposed on 28 September 2025 after Europe triggered snapback."
      ],
      check: { q: "What is 'snapback'?",
        choices: ["A US air campaign", "A mechanism in the 2015 deal to reimpose UN sanctions", "Iran's missile defence system"], answer: 1,
        explain: "Snapback let any party to the deal restore the UN sanctions lifted in 2015. The UK, France and Germany used it in 2025." },
      sources: [
        { title: "Prelude to the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prelude_to_the_2026_Iran_war", date: "2026" },
        { title: "US-Iran ceasefire and nuclear talks in 2026", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10637/", date: "2026" },
        { title: "Analysis: U.S. Negotiators Were Ill-Prepared for Serious Nuclear Talks With Iran", publisher: "Arms Control Association", url: "https://www.armscontrol.org/act/2026-04/features/analysis-us-negotiators-were-ill-prepared-serious-nuclear-talks-iran", date: "2026-04" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "ir-6", kind: "story", asOf: "2026-09-28",
      title: "The winter massacres",
      dek: "Protests over a collapsing economy became a nationwide uprising, and on 8–9 January 2026 security forces opened fire under an internet blackout.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-6-hero.webp",
          alt: "Illustration of a dark city street at night in winter with scattered small fires and smoke, and a line of darkened apartment blocks.",
          caption: "The deadliest crackdown took place under a nationwide internet blackout.",
          credit: "AI illustration — not a photograph",
          prompt: "A dark city street at night in winter, scattered small fires and drifting smoke, darkened apartment blocks with no lights, a single streetlamp, snow on the pavement, silent and ominous aftermath, no people, no faces, no legible text." },
        { type: "section", head: "What happened", md:
          "In late December 2025 the rial's collapse and rising prices set off protests that spread from bazaars to cities across Iran. They quickly turned against the system itself. On the evening of 8 January 2026 the authorities cut the internet nationwide. Over that night and the next day, the Revolutionary Guards, the Basij and the police fired on crowds with rifles and shotguns, often from rooftops, according to Amnesty International and other rights groups." },
        { type: "facts", head: "The toll, as documented", rows: [
          ["Iran Human Rights (verified names)", "More than 4,200 killed in the protests"],
          ["Deadliest days", "8–9 January 2026: more than 3,300 of those deaths"],
          ["Among the dead", "At least 420 women and 281 children, by the same count"],
          ["Other estimates", "Some opposition media put the toll far higher; the government acknowledged far fewer"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The economy had been in free fall under sanctions, mismanagement and the cost of the 2025 war. For many Iranians the protests were no longer about prices but about the Islamic Republic. The authorities, fearing a revolution, chose overwhelming force. Human Rights Watch described 'growing evidence of countrywide massacres'. Officials blamed foreign-backed 'rioters' and terrorists, and state media showed funerals for members of the security forces killed in the unrest. The authorities have never published a full account of the dead." },
        { type: "compare", head: "Two accounts",
          left: { head: "The authorities", md:
            "Armed rioters backed by the United States and Israel attacked security forces and public property. The state restored order and protected the country." },
          right: { head: "Rights groups and witnesses", md:
            "Security forces deliberately shot unarmed protesters in the head and chest and hid the killings behind an internet blackout. It was the deadliest repression in the Islamic Republic's history." } },
        { type: "section", head: "The blackout", md:
          "Cutting the internet made the crackdown hard to document. Much of what is known came from videos smuggled out afterwards, from hospital and cemetery records, and from families who named their dead. Groups outside Iran have spent months verifying each name, which is why totals keep rising and why estimates differ so widely between groups." },
        { type: "section", head: "Why it matters", md:
          "The massacres deepened the gulf between the regime and much of its population just weeks before the war. Some in Washington and Israel argued that the regime was weak enough to fall; that did not happen, and many Iranians rallied against foreign attack even as they opposed their rulers. The killings also shaped how other countries responded: few defended Tehran's conduct, and Amnesty has called for international accountability. Iran's leaders reject such calls as foreign interference in its internal affairs." },
        { type: "section", head: "What's next", md:
          "Rights groups continue to identify victims and to call for international accountability, while thousands of people detained in the protests face trial. With the economy still collapsing, many observers expect further unrest, especially if the war ends and attention turns inward." }
      ],
      takeaways: [
        "Economic protests from late December 2025 became a nationwide uprising against the system.",
        "On 8–9 January 2026 security forces killed thousands under an internet blackout, according to rights groups.",
        "Iran Human Rights has verified more than 4,200 deaths; the government blames foreign-backed rioters."
      ],
      check: { q: "What did the authorities do on the evening of 8 January 2026, as the crackdown peaked?",
        choices: ["Called early elections", "Cut the internet nationwide", "Released political prisoners"], answer: 1,
        explain: "A nationwide internet blackout began that evening, hiding the worst of the killing from the outside world." },
      sources: [
        { title: "What happened at the protests in Iran?", publisher: "Amnesty International", url: "https://www.amnesty.org/en/latest/campaigns/2026/01/what-happened-at-the-protests-in-iran/", date: "2026-01" },
        { title: "Iran Human Rights: Verified Death Toll From 'January Protests' Exceeds 4,200", publisher: "IranWire", url: "https://iranwire.com/en/news/157741-iran-human-rights-verified-death-toll-from-january-protests-exceeds-4200/", date: "2026-09" },
        { title: "Iran: Growing evidence of countrywide massacres", publisher: "Human Rights Watch", url: "https://www.hrw.org/news/2026/01/16/iran-growing-evidence-of-countrywide-massacres", date: "2026-01-16" },
        { title: "Iran: Lack of international justice six months after January protest massacres", publisher: "Amnesty International", url: "https://www.amnesty.org/en/latest/news/2026/07/iran-lack-of-international-justice-six-months-after-january-protest-massacres-risks-further-atrocity-crimes/", date: "2026-07" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "ir-7", kind: "story", asOf: "2026-09-28",
      title: "The 2026 war",
      dek: "US and Israeli strikes killed the Supreme Leader; Iran hit back across the Gulf and closed Hormuz. A ceasefire and a deal followed, and both unravelled.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-7-hero.webp",
          alt: "Illustration of a line of oil tankers in a narrow strait at dusk, with a warship on the horizon and barren mountains on the shore.",
          caption: "The Strait of Hormuz, where Iranian attacks and a US blockade have disrupted shipping since March.",
          credit: "AI illustration — not a photograph",
          prompt: "A convoy of large oil tankers moving through a narrow strait at dusk, a grey warship silhouetted on the horizon, barren rocky mountains on the shore, a hazy orange sky, tension and scale, no flags or legible text." },
        { type: "section", head: "What happened", md:
          "On 28 February 2026 the United States and Israel launched nearly 900 strikes in 12 hours on Iran's missiles, air defences, military bases and leadership. Ali Khamenei was killed. Iran retaliated with missiles and drones against Israel and against Gulf states hosting US forces, hitting oil facilities in [[unit:sa|Saudi Arabia]] and [[unit:ae|the UAE]], and it attacked ships to close the [[Strait of Hormuz]]. Oil prices passed $100 a barrel.\n\n" +
          "Pakistan mediated a two-week ceasefire on 8 April. Talks in Islamabad failed days later, and the US imposed a naval blockade of Iranian ports. In June a memorandum signed by Trump and Pezeshkian promised an end to hostilities, the reopening of Hormuz and sanctions relief, with 60 days to agree a nuclear deal. It began to collapse on 7 July, when Iranian forces attacked three ships, and expired in August. In September the US destroyed five Iranian tankers, and Iran struck ships and a base in Jordan." },
        { type: "timeline", head: "How it unfolded", items: [
          ["28 Feb", "US–Israeli strikes; Khamenei killed"],
          ["Early Mar", "Mojtaba Khamenei named Supreme Leader"],
          ["8 Apr", "Two-week ceasefire mediated by Pakistan"],
          ["12–13 Apr", "Islamabad talks fail; US naval blockade"],
          ["17 Jun", "US–Iran memorandum signed"],
          ["Aug", "Memorandum expires"],
          ["Sep", "Renewed strikes at sea"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The US and Israel said Iran was rebuilding its nuclear programme after 2025 and threatening the region with missiles and proxies. Critics argued the war was chosen, not forced, and some pointed to the regime's weakness after the January massacres as a factor in the timing. Iran called it an illegal war of aggression, and many international lawyers agreed that it lacked a clear legal basis." },
        { type: "compare", head: "Two views of the war",
          left: { head: "Washington and Jerusalem", md:
            "Iran's regime is the source of the region's wars. Destroying its military power and nuclear programme makes the Middle East safer, and pressure will force a better deal." },
          right: { head: "Tehran and many critics", md:
            "The war killed thousands of Iranians, destabilised the Gulf and the world economy, and may convince Iran's new leaders that only a bomb can deter attack." } },
        { type: "section", head: "Why it matters", md:
          "Thousands of Iranians died, as did civilians in Lebanon, Israel and the Gulf. The war cut global oil supplies, raised prices everywhere and pushed countries like [[unit:eg|Egypt]] toward economic crisis. It showed that Iran could not protect its leaders, but also that it could impose huge costs on its neighbours." },
        { type: "section", head: "What's next", md:
          "In late September Iran floated a seven-day plan: an end to fighting on all fronts, including Lebanon, in return for lifting the blockade, releasing frozen funds and waiving oil sanctions. It says it will not give up enrichment, but has offered to dilute or transfer abroad its highly enriched uranium. Whether Washington accepts is the key question of the autumn." }
      ],
      takeaways: [
        "On 28 February 2026 US and Israeli strikes killed Ali Khamenei; Iran retaliated across the Gulf and closed Hormuz.",
        "A Pakistan-mediated ceasefire (8 April) and a June memorandum both unravelled.",
        "In September 2026 fighting resumed at sea; Iran has proposed a new plan to end the war."
      ],
      check: { q: "Which country mediated the 8 April 2026 US–Iran ceasefire?",
        choices: ["Qatar", "Pakistan", "Turkey"], answer: 1,
        explain: "Pakistan brokered the ceasefire and hosted the talks in Islamabad that followed." },
      sources: [
        { title: "2026 Iran war", publisher: "Britannica", url: "https://www.britannica.com/event/2026-Iran-war", date: "2026" },
        { title: "US-Iran Memorandum of Understanding expires: How and why it fell apart", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/17/us-iran-memorandum-of-understanding-expires-how-and-why-it-fell-apart", date: "2026-08-17" },
        { title: "US strikes five Iranian oil tankers, as Iran attacks 10 ships, Jordan base", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/9/us-destroys-five-iranian-tankers-iran-retaliates-with-attacks-on-jordan-base", date: "2026-09-09" },
        { title: "U.S.-Iran Ceasefire and Negotiations: Assessment and Issues for Congress", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/IN12678", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "ir-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A new Leader, a blockaded economy, an unresolved nuclear stockpile and a war that has neither ended nor escalated.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-8-hero.webp",
          alt: "Illustration of a covered bazaar in an Iranian city with half the shops shuttered and a few shoppers walking under skylights.",
          caption: "Sanctions, war and a collapsing currency have hit every Iranian household.",
          credit: "AI illustration — not a photograph",
          prompt: "A long vaulted brick bazaar corridor with skylights, half the shops shuttered, a few shoppers seen from behind, dusty light beams, rugs and copper pots in the open stalls, quiet and strained, no faces, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Leadership:** Mojtaba Khamenei is Supreme Leader; President Pezeshkian and Foreign Minister Araghchi lead diplomacy.\n" +
          "- **War:** the April ceasefire and June memorandum have collapsed; strikes continue at sea.\n" +
          "- **Hormuz:** shipping disrupted; the US blockades Iranian ports.\n" +
          "- **Nuclear:** Iran refuses to give up enrichment; its stock of highly enriched uranium is unverified.\n" +
          "- **At home:** an economy in crisis and a population traumatised by the January killings." },
        { type: "section", head: "The nuclear question", md:
          "At the heart of the conflict is Iran's stock of uranium enriched to 60%, estimated at around 400 kilograms before the 2025 strikes. The US wants it shipped out of Iran and enrichment ended. Iran insists on its right to enrich under the Non-Proliferation Treaty and, according to reports, its new Leader has ordered that the stock not leave the country, though Tehran has recently suggested diluting it or sending it to a third country. Without inspectors, no one outside Iran knows exactly where it is, or how much survived the strikes, which makes any deal hard to verify." },
        { type: "section", head: "The economy", md:
          "Iran's economy is under enormous strain. The blockade has cut the oil exports that fund the state, war damage has hit power plants and industry, and blackouts and shortages are common. Inflation runs far above 30%, and the rial has lost most of its value. Leaders fear that economic despair could spark another uprising like the one in January, and they have kept tight security in the cities." },
        { type: "section", head: "The region", md:
          "Iran's neighbours want the war to end. The Gulf states were hit by its missiles, and some reportedly struck back, but all fear a longer war more. Pakistan, Turkey, Egypt, Oman and Qatar have all tried to mediate. Iran's proposal ties any deal to an end of fighting in Lebanon, keeping its alliance with Hezbollah at the centre of its demands. Israel, whose own election is on 27 October, has its own views on any deal." },
        { type: "section", head: "Three scenarios", md:
          "- **A deal.** The US accepts a version of Iran's plan: the blockade lifted, the uranium diluted or transferred, the fighting stopped.\n" +
          "- **A long stalemate.** Low-level war at sea continues, sanctions bite, and Iran's economy and politics grind down.\n" +
          "- **Escalation.** Talks fail, strikes resume on land, and Iran's leaders decide to race for a bomb or strike the Gulf's oil again." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Autumn 2026:** the US response to Iran's seven-day plan\n" +
          "- **Ongoing:** attacks on shipping in Hormuz and the US blockade\n" +
          "- **Ongoing:** the Supreme Leader's first major public decisions\n" +
          "- **3 November 2026:** US midterms, which may shape Washington's appetite for war or a deal" },
        { type: "section", head: "Connections", md:
          "Iran's story runs through [[unit:us]] and [[unit:il]] (the wars), [[unit:sa]] and [[unit:ae]] (targets of its strikes), [[unit:ru]] and [[unit:cn]] (its main partners and oil buyers), [[unit:pk]] (the mediator), [[unit:tr]] (a neighbour offering talks) and [[unit:eg]] (whose economy the war has battered)." }
      ],
      takeaways: [
        "The war is unresolved: ceasefires collapsed, and fighting continues at sea.",
        "The US wants Iran's enriched uranium removed; Iran refuses to end enrichment but has offered compromises.",
        "Iran's new Leader faces a shattered economy and a deeply alienated population."
      ],
      check: { q: "What is the main sticking point in US–Iran talks?",
        choices: ["Iran's oil exports to Europe", "Iran's enriched uranium and right to enrich", "The Iranian president's term"], answer: 1,
        explain: "The US wants Iran's highly enriched uranium removed and enrichment ended; Iran insists on its right to enrich." },
      sources: [
        { title: "Iran offers uranium compromise as part of plan to break US deadlock, sources say", publisher: "The National", url: "https://www.thenationalnews.com/news/mena/2026/09/25/iran-offers-uranium-compromise-as-part-of-plan-to-break-us-deadlock-sources-say/", date: "2026-09-25" },
        { title: "US-Iran MoU ends: What happens next?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/16/us-iran-mou-is-set-to-expire-what-to-know", date: "2026-08-16" },
        { title: "The Strait of Hormuz: Security Developments and Impacts on Oil, Gas, and Other Commodities", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/R45281", date: "2026" }
      ]
    }
  ]
});
