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

    /* ---------------------------------------------------------- 9 */
    {
      id: "ir-9", kind: "founding", asOf: "2026-09-28",
      title: "1979: the Islamic Revolution",
      dek: "Millions of Iranians rose against the Shah. Within months Ayatollah Khomeini had founded the world's first modern theocracy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-9-hero.webp",
          alt: "Illustration of a vast crowd seen from behind filling a wide boulevard toward a tall white arched monument, under a grey winter sky.",
          caption: "Tehran's Azadi (Freedom) Tower, built by the Shah in 1971, became a gathering point for the crowds of 1978–79.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast crowd seen from behind filling a wide boulevard toward a tall white inverted-Y shaped arched monument, a grey winter sky, snow-capped mountains faint in the distance, overwhelming and historic, no faces, no flags, no portraits, no legible text." },
        { type: "timeline", head: "From Shah to Leader", items: [
          ["1925", "Reza Khan founds the Pahlavi dynasty"],
          ["1963", "The Shah's 'White Revolution'; Khomeini exiled a year later"],
          ["1978", "Mass protests and strikes"],
          ["16 Jan 1979", "The Shah leaves Iran"],
          ["1 Feb 1979", "Khomeini returns from exile"],
          ["1 Apr 1979", "Islamic Republic proclaimed after a referendum"],
          ["Nov 1979", "US embassy seized; 52 Americans held for 444 days"]
        ] },
        { type: "section", head: "The Shah's Iran", md:
          "Mohammad Reza Pahlavi, Shah from 1941, was restored to full power by a US- and British-backed coup in 1953 (see the next briefing). With oil money he drove a rapid modernisation, the 'White Revolution' of land reform, industrialisation and women's suffrage, and became America's main ally in the Gulf. But he ruled as an autocrat: political parties were suppressed, and his secret police, SAVAK, was notorious for torture. Wealth flowed to a narrow elite, while inflation and migration to the cities left many behind, and the clergy resented his secular reforms." },
        { type: "section", head: "Revolution", md:
          "Ayatollah Ruhollah Khomeini, a senior cleric exiled in 1964 for opposing the Shah, became the voice of opposition from Iraq and later France, his sermons smuggled into Iran on cassette tapes. Through 1978 protests grew, each round of killings producing new mourning processions forty days later. Strikes shut down the oil industry. A coalition of clerics, bazaar merchants, students, leftists and liberals united against the Shah. He left Iran on 16 January 1979; Khomeini returned on 1 February to a welcome by millions, and the army declared neutrality ten days later." },
        { type: "section", head: "Building a theocracy", md:
          "In a referendum on 30–31 March 1979, Iranians approved an Islamic Republic. A new constitution was built on Khomeini's doctrine of velayat-e faqih, 'guardianship of the jurist', which placed a senior cleric, the Supreme Leader, above elected institutions. Khomeini's followers then turned on their former allies: liberals were sidelined, leftists and other opponents were imprisoned or executed, the Revolutionary Guards ([[IRGC]]) were founded to protect the revolution, and the hijab became compulsory for women." },
        { type: "section", head: "Confronting America", md:
          "In November 1979 students loyal to Khomeini seized the US embassy in Tehran and held 52 Americans hostage for 444 days, until January 1981. The crisis destroyed US–Iranian relations, which have never been restored, and helped cost President Jimmy Carter re-election. 'Death to America' became a revolutionary slogan, and exporting the revolution a goal, starting with support for Shia groups such as Lebanon's Hezbollah." },
        { type: "compare", head: "Two views of 1979",
          left: { head: "The regime's view", md:
            "The people overthrew a corrupt, US-backed tyrant and won independence, dignity and an Islamic government." },
          right: { head: "Critics' view", md:
            "A broad popular uprising for freedom was hijacked by clerics who built a harsher dictatorship than the one they replaced." } },
        { type: "section", head: "Why it still matters", md:
          "The system Khomeini built, a Supreme Leader above the vote, the Revolutionary Guards and hostility to the United States and Israel, has survived war, sanctions and waves of protest, and even the killing of Khomeini's successor, Ali Khamenei, in 2026. The revolution's legitimacy is what today's protesters challenge." }
      ],
      takeaways: [
        "The Shah modernised Iran with oil money but ruled as an autocrat with a feared secret police.",
        "A broad uprising in 1978 forced the Shah out; Ayatollah Khomeini returned on 1 February 1979.",
        "The Islamic Republic placed a Supreme Leader above elected institutions and broke with the US."
      ],
      check: { q: "What is velayat-e faqih?",
        choices: ["Iran's parliament", "The doctrine of 'guardianship of the jurist' that puts a senior cleric above elected bodies", "The Shah's secret police"], answer: 1,
        explain: "Khomeini's doctrine gives the Supreme Leader, a senior cleric, ultimate authority in the Islamic Republic." },
      sources: [
        { title: "Iranian Revolution of 1978–79", publisher: "Britannica", url: "https://www.britannica.com/event/Iranian-Revolution-of-1978-1979", date: "n.d." },
        { title: "Ruhollah Khomeini", publisher: "Britannica", url: "https://www.britannica.com/biography/Ruhollah-Khomeini", date: "n.d." },
        { title: "The Iranian Hostage Crisis", publisher: "US Department of State, Office of the Historian", url: "https://history.state.gov/departmenthistory/short-history/iraniancrises", date: "n.d." }
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

    /* ---------------------------------------------------------- 10 */
    {
      id: "ir-10", kind: "past", asOf: "2026-09-28",
      title: "1953: the coup against Mosaddegh",
      dek: "When Iran's elected prime minister nationalised its oil, Britain and the United States helped overthrow him. Iranians have never forgotten.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-10-hero.webp",
          alt: "Illustration of a mid-century oil refinery with towers and storage tanks beside a river at dusk, with flares burning.",
          caption: "The Abadan refinery, once the world's largest, at the heart of the 1951 oil nationalisation.",
          credit: "AI illustration — not a photograph",
          prompt: "A large mid-20th-century oil refinery with distillation towers, pipes and storage tanks beside a wide river at dusk, gas flares burning orange, palm trees, industrial and historic, no people close up, no flags, no legible text or logos." },
        { type: "facts", head: "The coup", rows: [
          ["Oil nationalised", "March 1951"],
          ["Prime minister", "Mohammad Mosaddegh, 1951–53"],
          ["Coup", "19 August 1953 (28 Mordad in the Iranian calendar)"],
          ["Organised by", "The CIA and British intelligence, with royalist officers and clergy"],
          ["CIA acknowledgement", "Documents released in 2013"]
        ] },
        { type: "section", head: "Oil and Britain", md:
          "Since 1909 Iran's oil had been controlled by the Anglo-Iranian Oil Company, forerunner of BP, which was majority-owned by the British government. It paid Iran a small share of the profits, and Iranian workers at the vast Abadan refinery lived in poor conditions while British staff enjoyed segregated privileges. After the Second World War, as other countries won better terms, Iranian nationalists demanded control of their own resource." },
        { type: "section", head: "Mosaddegh", md:
          "Mohammad Mosaddegh, an aristocratic lawyer and nationalist, led the campaign. In March 1951 the parliament voted to nationalise the oil industry, and soon after he became prime minister, enormously popular. Britain withdrew its technicians, responded with a naval blockade of Iranian oil exports and took the dispute to the UN and the International Court of Justice, which ruled that it had no jurisdiction. As the economy suffered, Mosaddegh's coalition frayed, and he clashed with the Shah and parts of the clergy." },
        { type: "section", head: "Operation Ajax", md:
          "Britain persuaded the Eisenhower administration, fearful that Iran might drift toward the Soviet Union, to act. The CIA, with British intelligence, organised a coup, known in Washington as Operation Ajax: it bribed officers, politicians and newspapers, paid crowds to riot, and persuaded the hesitant Shah to dismiss Mosaddegh. A first attempt on 15 August failed, and the Shah fled to Rome. On 19 August royalist troops and mobs overthrew the government. Mosaddegh was tried and spent the rest of his life under house arrest." },
        { type: "section", head: "Aftermath", md:
          "The Shah returned with his power greatly increased, and a new oil consortium gave American companies a large share of Iranian oil. For the next 25 years the Shah ruled as an American ally, increasingly autocratic. In 2013 the CIA released documents acknowledging that the coup was carried out 'under CIA direction'. The US Secretary of State Madeleine Albright had acknowledged America's role in 2000." },
        { type: "compare", head: "How it is remembered",
          left: { head: "Iranian nationalists and the regime", md:
            "Foreign powers destroyed Iran's democracy to take its oil, proof that America cannot be trusted." },
          right: { head: "Some historians", md:
            "Foreign plotting mattered, but Mosaddegh's own isolation, the economic crisis and domestic royalists and clerics also brought him down." } },
        { type: "section", head: "Why it still matters", md:
          "The coup is central to Iranian suspicion of the United States and Britain, and the Islamic Republic cites it constantly. It also fed the revolution of 1979, which many Iranians saw as ending the order imposed in 1953. Mosaddegh remains a hero to secular nationalists who oppose both the Shah's legacy and the clerics, and the episode is often cited in debates about Western intervention elsewhere." }
      ],
      takeaways: [
        "Prime Minister Mohammad Mosaddegh nationalised Iran's British-controlled oil industry in 1951.",
        "In August 1953 a coup organised by the CIA and British intelligence overthrew him and restored the Shah's power.",
        "The coup deepened Iranian distrust of the West and helped set the stage for 1979."
      ],
      check: { q: "What did Mosaddegh do that provoked Britain?",
        choices: ["Declared war", "Nationalised the Anglo-Iranian Oil Company", "Joined the Soviet bloc"], answer: 1,
        explain: "Iran's parliament nationalised the oil industry in 1951, ending British control of Iran's oil." },
      sources: [
        { title: "Mohammad Mosaddegh", publisher: "Britannica", url: "https://www.britannica.com/biography/Mohammad-Mosaddegh", date: "n.d." },
        { title: "CIA Confirms Role in 1953 Iran Coup", publisher: "National Security Archive", url: "https://nsarchive2.gwu.edu/NSAEBB/NSAEBB435/", date: "2013-08-19" },
        { title: "Foreign Relations of the United States, 1952–1954, Iran", publisher: "US Department of State, Office of the Historian", url: "https://history.state.gov/historicaldocuments/frus1951-54Iran", date: "2017" }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "ir-11", kind: "past", asOf: "2026-09-28",
      title: "The Iran–Iraq War",
      dek: "Saddam Hussein invaded in 1980. Eight years of trench warfare, missile strikes and chemical weapons killed hundreds of thousands and forged the Islamic Republic.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-11-hero.webp",
          alt: "Illustration of a flat marshland battlefield with trenches, barbed wire and burned-out palm trees under a hazy orange sky.",
          caption: "The southern front, where much of the fighting took place in marshes and deserts.",
          credit: "AI illustration — not a photograph",
          prompt: "A flat marshland battlefield with muddy trenches, coils of barbed wire and burned-out palm tree trunks under a hazy orange sky, distant smoke, desolate and haunting, no people, no flags, no legible text." },
        { type: "facts", head: "The war", rows: [
          ["Dates", "September 1980 – August 1988"],
          ["Deaths", "Estimates range from about 500,000 to over 1 million on both sides"],
          ["Chemical weapons", "Used by Iraq against Iranian troops and Iraqi Kurds"],
          ["Outcome", "Ceasefire under UN Resolution 598; borders unchanged"],
          ["Known in Iran as", "The 'Sacred Defence'"]
        ] },
        { type: "section", head: "The invasion", md:
          "Saddam Hussein, Iraq's dictator, saw revolutionary Iran as both a threat and an opportunity: its army had been purged, and Khomeini was calling on Iraq's Shia majority to rise up. On 22 September 1980 Iraq invaded, aiming to seize the oil-rich province of Khuzestan and control the Shatt al-Arab waterway. Instead of collapsing, Iran rallied. Volunteers, including teenage members of the Basij militia, flooded to the front, and by 1982 Iran had driven the Iraqis back." },
        { type: "section", head: "Stalemate", md:
          "Khomeini then chose to carry the war into Iraq, aiming to topple Saddam. The fighting became a war of attrition resembling the First World War, with trenches, human-wave assaults across minefields, and huge casualties. Iraq, backed by money from Gulf states and weapons and intelligence from the Soviet Union, France and, increasingly, the United States, used chemical weapons, including mustard gas and nerve agents, on a massive scale. Both sides fired missiles at each other's cities." },
        { type: "section", head: "The tanker war and the end", md:
          "Both sides attacked oil tankers in the Gulf, drawing in the US navy to escort Kuwaiti shipping. In July 1988 a US warship, the Vincennes, shot down an Iranian passenger jet, Iran Air Flight 655, killing all 290 on board; the US said it had mistaken it for a fighter. Exhausted, Iran accepted a UN ceasefire in August 1988. Khomeini compared it to 'drinking a cup of poison'. The borders were unchanged. That summer, the regime executed thousands of political prisoners." },
        { type: "section", head: "Forged in war", md:
          "The war consolidated the revolution. It justified repression, built the Revolutionary Guards into Iran's most powerful institution, and created a generation of commanders who would later lead the regime, among them Qassem Soleimani, who went on to build Iran's network of allied militias across the region. The experience of being attacked with chemical weapons while much of the world looked away shaped Iran's belief that it must rely on itself, including in missiles and nuclear technology." },
        { type: "compare", head: "Two lessons",
          left: { head: "The regime's lesson", md:
            "Iran stood alone against an aggressor backed by the world and survived through faith and sacrifice; it must never be defenceless again." },
          right: { head: "Critics' lesson", md:
            "Prolonging the war after 1982 cost hundreds of thousands of lives for a revolutionary dream, and the regime used it to crush dissent." } },
        { type: "section", head: "Why it still matters", md:
          "Martyrs' murals from the war still cover Iran's cities. Its memory shaped Iran's response to the wars of 2025 and 2026 with Israel and the United States, and the regime's insistence on its missile programme, which it sees as its insurance against another invasion." }
      ],
      takeaways: [
        "Iraq invaded Iran in 1980; the war lasted eight years and killed hundreds of thousands.",
        "Iraq used chemical weapons on a massive scale; Iran accepted a ceasefire in 1988 with borders unchanged.",
        "The war built up the Revolutionary Guards and shaped Iran's doctrine of self-reliance."
      ],
      check: { q: "Who started the Iran–Iraq War?",
        choices: ["Iran, to export its revolution", "Iraq, under Saddam Hussein, which invaded in September 1980", "The United States"], answer: 1,
        explain: "Iraq invaded on 22 September 1980; Iran later took the war into Iraq." },
      sources: [
        { title: "Iran-Iraq War", publisher: "Britannica", url: "https://www.britannica.com/event/Iran-Iraq-War", date: "n.d." },
        { title: "The Origins, Conduct, and Impact of the Iran-Iraq War, 1980-1988", publisher: "Wilson Center", url: "https://www.wilsoncenter.org/publication/the-origins-conduct-and-impact-the-iran-iraq-war-1980-1988", date: "n.d." },
        { title: "Iran Air flight 655", publisher: "Britannica", url: "https://www.britannica.com/event/Iran-Air-flight-655", date: "n.d." }
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

    /* ---------------------------------------------------------- 12 */
    {
      id: "ir-12", kind: "spotlight", asOf: "2026-09-28",
      title: "Woman, Life, Freedom",
      dek: "In 2022 the death of a young woman in police custody set off Iran's biggest challenge to clerical rule in decades, led by women removing their headscarves.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ir/ir-12-hero.webp",
          alt: "Illustration of a young woman seen from behind with long uncovered hair walking down a busy city street at dusk, among other pedestrians.",
          caption: "Since 2022 many Iranian women have stopped wearing the compulsory hijab in public.",
          credit: "AI illustration — not a photograph",
          prompt: "A young woman seen from behind with long dark uncovered hair walking down a busy city street at dusk among other pedestrians, shop lights and traffic, a mountain range faint in the distance, quiet defiance, no faces, no legible text or signs." },
        { type: "facts", head: "The protests", rows: [
          ["Trigger", "Death of Mahsa (Jina) Amini, 22, on 16 September 2022"],
          ["Slogan", "'Woman, life, freedom' (Zan, zendegi, azadi)"],
          ["Killed", "More than 500 protesters, according to human rights groups"],
          ["Executions", "At least 12 people executed over the protests by September 2025, per rights groups"],
          ["Nobel Peace Prize 2023", "Narges Mohammadi, jailed activist"]
        ] },
        { type: "section", head: "The hijab law", md:
          "Soon after the revolution, the hijab became compulsory for all women in public, enforced by morality police. For decades, many women pushed the limits with loose scarves and colourful coats, and crackdowns rose and fell with politics. Women in Iran are highly educated, a majority of university students in many years, but face legal discrimination in divorce, inheritance, travel and testimony." },
        { type: "section", head: "Mahsa Amini", md:
          "In September 2022 Mahsa Amini, a 22-year-old Kurdish woman visiting Tehran, was arrested by the morality police for allegedly wearing her hijab improperly. She collapsed in custody and died on 16 September. Her family said she had been beaten; officials said she had a medical condition. Protests erupted at her funeral in Kurdistan and spread nationwide, with women burning headscarves and cutting their hair, and crowds chanting 'Woman, life, freedom' and slogans against the Supreme Leader." },
        { type: "section", head: "Crackdown", md:
          "The protests lasted months, spreading to universities, schools and the bazaars, and were strongest in Kurdish and Baluch regions. Security forces responded with live fire; human rights groups counted more than 500 people killed, including dozens of children, and about 20,000 arrested. By September 2025 at least 12 people had been executed in connection with the protests, after trials that rights groups say relied on confessions extracted under torture. A UN fact-finding mission concluded in 2024 that the crackdown amounted to crimes against humanity." },
        { type: "section", head: "A quiet revolution", md:
          "The street protests faded by early 2023, but something changed: in Tehran and other cities many women simply stopped covering their hair. The authorities installed cameras, fined drivers and closed businesses, and in 2024 parliament passed a harsh new hijab law, which the president, Masoud Pezeshkian, later declined to enforce. The jailed activist Narges Mohammadi won the Nobel Peace Prize in 2023 for her campaign against the oppression of women." },
        { type: "compare", head: "Two views",
          left: { head: "The authorities", md:
            "The hijab is a religious and legal duty, and the unrest was stoked by foreign enemies seeking to destabilise Iran." },
          right: { head: "Protesters and their supporters", md:
            "Women's control over their own bodies is the frontline of a wider demand for freedom and the end of clerical rule." } },
        { type: "section", head: "Why it matters", md:
          "The movement showed the gap between the regime and much of Iran's young, urban population, and it foreshadowed the larger unrest of the winter of 2025–26 described in this unit's stories. Whatever the fate of the Islamic Republic after the 2026 war, the question of women's freedom will be at its centre." }
      ],
      takeaways: [
        "The death of Mahsa Amini in morality-police custody in September 2022 set off nationwide protests.",
        "Security forces killed more than 500 protesters, and at least 12 people were later executed.",
        "Many women have since stopped wearing the compulsory hijab, a quiet act of defiance."
      ],
      check: { q: "What was the slogan of the 2022 protests?",
        choices: ["'Bread, work, freedom'", "'Woman, life, freedom'", "'Death to America'"], answer: 1,
        explain: "'Zan, zendegi, azadi', a Kurdish-origin slogan, became the movement's rallying cry." },
      sources: [
        { title: "Iran: Institutional discrimination against women and girls enabled human rights violations and crimes against humanity", publisher: "UN Human Rights Council", url: "https://www.ohchr.org/en/press-releases/2024/03/iran-institutional-discrimination-against-women-and-girls-enabled-human", date: "2024-03-08" },
        { title: "The Nobel Peace Prize 2023: Narges Mohammadi", publisher: "The Nobel Prize", url: "https://www.nobelprize.org/prizes/peace/2023/mohammadi/facts/", date: "2023" },
        { title: "Iran: Impunity Reigns 3 Years After Crackdown on Protests", publisher: "Human Rights Watch", url: "https://www.hrw.org/news/2025/09/16/iran-impunity-reigns-3-years-after-crackdown-on-protests", date: "2025-09-16" }
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
