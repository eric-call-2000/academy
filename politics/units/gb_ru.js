/* ============================================================
   Relationship — United Kingdom & Russia 🇬🇧🇷🇺
   Crimea, the Great Game, two world wars as allies and the
   Cambridge spies; Litvinenko, 'Londongrad' and Novichok in
   Salisbury; and Ukraine, sanctions, the shadow fleet and
   sabotage on British soil.
   Research note and sources: tools/research/gb_ru.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("gb_ru", {
  id: "gb_ru",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb_ru-1", kind: "relation", asOf: "2026-10-07",
      title: "Rivals, allies and spies",
      dek: "Britain and Russia fought in Crimea and competed for Asia in the 'Great Game', then fought side by side in two world wars. In the Cold War, Soviet spies reached the heart of the British state.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ru/gb_ru-1-hero.webp",
          alt: "Illustration of a convoy of grey merchant ships and a warship ploughing through an icy Arctic sea under a low sky.",
          caption: "British convoys carried supplies to the Soviet Union through Arctic waters in the Second World War.",
          credit: "Illustration — not a photograph",
          prompt: "A convoy of grey Second World War merchant ships escorted by a destroyer ploughing through an icy Arctic sea, ice on the rigging, low dark clouds and pale light on the horizon, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Two centuries of rivalry", items: [
          ["1853–56", "Britain and France fight Russia in the Crimean War"],
          ["1830s–1907", "The 'Great Game' for influence in Central Asia"],
          ["1914–17", "Allies in the First World War"],
          ["1941–45", "Allies against Hitler; Arctic convoys"],
          ["1951", "Burgess and Maclean flee to Moscow"],
          ["1963", "Kim Philby defects from Beirut"]
        ] },
        { type: "section", head: "Crimea and the Great Game", md:
          "For much of the 19th century the British Empire saw Russia as its main rival. In 1854 Britain and France invaded Crimea to stop Russia expanding at the Ottoman Empire's expense; the war gave Britain the Charge of the Light Brigade and Florence Nightingale. In Central Asia the two empires competed for influence in Afghanistan, Persia and Tibet in what Britons called the 'Great Game', each fearing the other wanted India or Central Asia. An agreement in 1907 divided Persia into zones of influence and ended the contest." },
        { type: "section", head: "Allies twice", md:
          "Britain and Russia fought on the same side in the First World War, until the Bolshevik revolution of 1917 took Russia out of it; British troops then intervened briefly against the Bolsheviks. In 1941, when Hitler invaded the Soviet Union, Churchill, a lifelong anti-communist, declared that any enemy of Hitler was Britain's friend. British convoys carried tanks, planes and supplies to Murmansk and Archangel through Arctic waters, and the Soviet Union bore the heaviest losses of the war (see [[lesson:ru-11]])." },
        { type: "section", head: "Cold War", md:
          "Within a year of victory Churchill warned of an 'iron curtain' descending across Europe. Britain became a founding member of [[NATO]] in 1949 and a nuclear power in 1952, its bombers and submarines aimed at Soviet cities. Cold War Britain was also a battleground for spies: MI6 ran agents inside the Soviet system, most famously Oleg Gordievsky, a KGB colonel smuggled out of Moscow in 1985." },
        { type: "section", head: "The Cambridge Five", md:
          "The Soviets did even better. In the 1930s they recruited five students at Cambridge University who rose to senior posts in British intelligence and diplomacy: Kim Philby, Guy Burgess, Donald Maclean, Anthony Blunt and John Cairncross. They passed thousands of secrets to Moscow, including Western plans in the early Cold War. Burgess and Maclean fled to Moscow in 1951; Philby, once tipped to head MI6, defected from Beirut in 1963. Blunt, keeper of the Queen's pictures, was exposed only in 1979." },
        { type: "section", head: "Thatcher and Gorbachev", md:
          "In December 1984, before he became Soviet leader, Mikhail Gorbachev visited Britain. Margaret Thatcher declared: 'I like Mr Gorbachev. We can do business together.' She encouraged Ronald Reagan to engage him, and Britain became an important bridge as the Cold War ended." },
        { type: "compare", head: "Britain's view of Russia",
          left: { head: "Rival", md:
            "An expansionist empire threatening Britain's interests from Crimea to India to Western Europe." },
          right: { head: "Ally", md:
            "A partner against Napoleon, the Kaiser and Hitler whose sacrifices helped save Britain." } },
        { type: "section", head: "Why it matters", md:
          "Russia's leaders still see Britain as one of the West's most hostile and capable intelligence powers, and Britain's spy agencies still treat Russia as one of their top targets." }
      ],
      takeaways: [
        "Britain fought Russia in the Crimean War and competed with it in Central Asia's 'Great Game'.",
        "The two were allies in both world wars; British convoys supplied the Soviet Union through the Arctic.",
        "In the Cold War the Cambridge Five spied for Moscow from inside the British state; Philby defected in 1963."
      ],
      check: { q: "Who were the Cambridge Five?",
        choices: ["British agents inside the KGB", "Soviet spies recruited at Cambridge who rose to senior British posts", "Five Russian defectors"], answer: 1,
        explain: "Philby, Burgess, Maclean, Blunt and Cairncross spied for Moscow." },
      sources: [
        { title: "Cambridge Five", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cambridge_Five", date: "n.d." },
        { title: "Kim Philby Defects", publisher: "EBSCO Research Starters", url: "https://www.ebsco.com/research-starters/history/kim-philby-defects/", date: "n.d." },
        { title: "The Cambridge Spy Scandal That Haunts Britain", publisher: "SPYSCAPE", url: "https://spyscape.com/article/the-cambridge-spy-scandal-that-haunts-britain", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb_ru-2", kind: "relation", asOf: "2026-10-07",
      title: "Polonium, Novichok and 'Londongrad'",
      dek: "London welcomed Russian money after 1991, and Russian dissidents too. Then two poisonings, in 2006 and 2018, showed the Kremlin was willing to kill its enemies on British streets.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ru/gb_ru-2-hero.webp",
          alt: "Illustration of a quiet cathedral city close with a park bench under trees, cordoned off with tape, on a grey day.",
          caption: "Sergei Skripal and his daughter were found collapsed on a bench in Salisbury in March 2018.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet English cathedral city scene with a tall stone spire in the distance, a park bench under bare trees cordoned off with tape, a forensic tent beside it, grey March day, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Money and murder", items: [
          ["1990s–2000s", "Russian money and oligarchs flow into London"],
          ["Nov 2006", "Alexander Litvinenko poisoned with polonium in London"],
          ["Jan 2016", "Inquiry: Putin 'probably approved' the killing"],
          ["Mar 2018", "Sergei and Yulia Skripal poisoned with Novichok in Salisbury"],
          ["Jul 2018", "Dawn Sturgess dies after finding the poison"],
          ["Dec 2025", "Inquiry: Putin must have authorised the Salisbury attack"]
        ] },
        { type: "section", head: "Londongrad", md:
          "After the Soviet collapse, London became the favourite home abroad for Russia's new rich. Oligarchs bought mansions, football clubs, such as Roman Abramovich's Chelsea, and newspapers; Russian companies listed on the London Stock Exchange, and British lawyers, bankers and estate agents served them. Critics called the city 'Londongrad' and warned that dirty money was buying influence. Britain also gave asylum to Kremlin opponents, including the tycoon Boris Berezovsky and the former FSB officer Alexander Litvinenko." },
        { type: "section", head: "Litvinenko", md:
          "On 1 November 2006 Litvinenko drank tea at a London hotel with two Russians, Andrei Lugovoy and Dmitry Kovtun. The tea contained polonium-210, a rare radioactive substance, and he died three weeks later. Britain asked Russia to extradite Lugovoy; Russia refused, and he became a member of its parliament. A public inquiry concluded in January 2016 that the killing was 'probably approved' by President Putin and the FSB's director." },
        { type: "section", head: "Salisbury", md:
          "On 4 March 2018 Sergei Skripal, a former Russian military intelligence officer who had spied for Britain and come to live there in a spy swap, was found collapsed on a bench in Salisbury with his daughter, Yulia. They had been poisoned with Novichok, a nerve agent developed in the Soviet Union, smeared on their door handle. Both survived. Britain expelled 23 Russian diplomats, and more than 25 allies expelled over 150 more. Investigators identified the attackers as officers of the GRU, Russia's military intelligence." },
        { type: "section", head: "Dawn Sturgess", md:
          "Months later, Charlie Rowley found a perfume bottle the attackers had discarded and gave it to his partner, Dawn Sturgess, a 44-year-old mother of three. She sprayed it on her wrists and died in July 2018. A public inquiry reported in December 2025 that the Salisbury operation 'must have been authorised at the highest level', by Putin himself, and that those responsible were morally responsible for her death." },
        { type: "section", head: "Russia's answer", md:
          "Russia denied involvement in both attacks and mocked the evidence. Two men identified as the Salisbury attackers gave an interview to Russian state television saying they had visited the town to see its cathedral." },
        { type: "compare", head: "Britain's dilemma",
          left: { head: "Open door", md:
            "Russian money brought business to London and its legal and financial firms." },
          right: { head: "Security", md:
            "That money bought influence and protection while the Kremlin killed on British soil." } },
        { type: "section", head: "Why it matters", md:
          "The poisonings turned British public opinion decisively against the Kremlin. A 2020 parliamentary report criticised governments for welcoming Russian money while failing to investigate Russian interference in British politics." }
      ],
      takeaways: [
        "After 1991 London became home to Russian oligarchs and money, earning the nickname 'Londongrad'.",
        "Litvinenko was poisoned with polonium in London in 2006; an inquiry said Putin 'probably approved' it.",
        "The 2018 Novichok attack in Salisbury killed Dawn Sturgess; a 2025 inquiry said Putin must have authorised it."
      ],
      check: { q: "What poison was used against Sergei Skripal in 2018?",
        choices: ["Polonium-210", "Novichok, a Soviet-developed nerve agent", "Ricin"], answer: 1,
        explain: "Polonium was used against Litvinenko in 2006." },
      sources: [
        { title: "Dawn Sturgess Inquiry: final report published", publisher: "Bevan Brittan", url: "https://www.bevanbrittan.com/insights/articles/2025/dawn-sturgess-inquiry-final-report-published/", date: "2025-12" },
        { title: "Dawn Sturgess Inquiry", publisher: "Hansard, UK Parliament", url: "https://hansard.parliament.uk/commons/2025-12-04/debates/EB4845D2-FD28-4028-979C-1BE9B74E91BB/DawnSturgessInquiry", date: "2025-12-04" },
        { title: "Britain expels 23 Russian diplomats in response to 'barbaric' attack on spy", publisher: "The Daily Telegraph (PressReader)", url: "https://www.pressreader.com/uk/the-daily-telegraph/20180315/281590946088310", date: "2018-03-15" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb_ru-3", kind: "relation", asOf: "2026-10-07",
      title: "Ukraine, sanctions and sabotage",
      dek: "Britain is one of Ukraine's biggest backers and one of Russia's most active sanctioners. Russia has answered with a campaign of espionage and sabotage, including an arson attack in London ordered by the Wagner group.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ru/gb_ru-3-hero.webp",
          alt: "Illustration of an industrial warehouse on fire at night on an east London trading estate, fire engines below.",
          caption: "A Wagner-ordered arson attack hit a London warehouse holding equipment for Ukraine in March 2024.",
          credit: "Illustration — not a photograph",
          prompt: "A large industrial warehouse on fire at night on an urban trading estate, orange flames and smoke against a dark sky, fire engines with flashing lights and hoses below, wet tarmac reflections, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "A shadow war", items: [
          ["Feb 2022", "Russia invades Ukraine; Britain sanctions oligarchs"],
          ["Mar 2024", "Wagner-ordered arson at a London warehouse"],
          ["Oct 2025", "Arsonists jailed; first convictions under the National Security Act"],
          ["25 Mar 2026", "UK forces given power to seize shadow-fleet tankers"],
          ["Apr 2026", "Tit-for-tat expulsions of diplomats"],
          ["1 Oct 2026", "New sanctions on Russian LNG tankers"]
        ] },
        { type: "section", head: "Sanctions", md:
          "After Russia's full-scale invasion of Ukraine (see [[lesson:gb_ua-2]]), Britain froze the assets of hundreds of oligarchs, banned Russian banks and expelled Russian money from London's markets. Chelsea football club was sold under government supervision. Britain has sanctioned more than 2,000 individuals and companies and, by October 2026, more than 600 ships in Russia's [[shadow fleet]] of tankers, which carry oil and gas past the West's price caps and bans." },
        { type: "section", head: "Seizing tankers", md:
          "On 25 March 2026 the prime minister announced that Britain's armed forces and police could now intercept and seize sanctioned shadow-fleet vessels passing through British waters, many of them sailing the English Channel. On 1 October a new package targeted tankers carrying Russian liquefied natural gas, Kremlin propagandists and people accused of torturing Ukrainian civilians and indoctrinating children." },
        { type: "section", head: "Sabotage", md:
          "Russia has answered with what British officials call a campaign of 'grey-zone' aggression. In March 2024 a fire destroyed a warehouse in Leyton, east London, holding Starlink equipment and aid bound for Ukraine. The ringleaders, Dylan Earl and Jake Reeves, had been recruited online by the Wagner group; in 2025 they became the first people convicted under the National Security Act 2023, and six men were jailed. British officials also blame Russia for cyberattacks, plots against dissidents and undersea cable incidents." },
        { type: "section", head: "Spies and diplomats", md:
          "The two countries keep expelling each other's diplomats. Russia expelled British diplomats in 2024 and 2025, accusing them of spying; in April 2026 Britain expelled a Russian diplomat after Moscow expelled a British embassy employee. MI5 has said Russian intelligence uses criminals and online recruits as proxies because so many of its officers have been expelled." },
        { type: "section", head: "Words of war", md:
          "Russian officials and state television regularly name Britain as the West's most hostile power, and have threatened British targets over long-range missiles supplied to Ukraine. British defence reviews now describe Russia as the most acute threat to the country, and the government has promised to raise defence spending toward NATO's new targets partly in response. In 2024 the head of MI5 said Russia's military intelligence was on 'a sustained mission to generate mayhem on British and European streets'." },
        { type: "compare", head: "How each sees the other",
          left: { head: "From London", md:
            "A hostile state that poisons, sabotages and spies, and must be deterred." },
          right: { head: "From Moscow", md:
            "The 'Anglo-Saxon' power driving the West's proxy war against Russia." } },
        { type: "section", head: "Why it matters", md:
          "Relations are at their lowest since the Cold War. Even if the war in Ukraine ends, Britain's sanctions, its role in any multinational force in Ukraine and Russia's shadow war make a thaw unlikely soon." }
      ],
      takeaways: [
        "Britain has sanctioned more than 2,000 Russian individuals and firms and over 600 shadow-fleet ships.",
        "Since March 2026 British forces can seize sanctioned shadow-fleet tankers in British waters.",
        "A 2024 London arson attack ordered by Wagner led to the first convictions under the National Security Act."
      ],
      check: { q: "Who ordered the March 2024 arson attack on a London warehouse?",
        choices: ["Ukrainian activists", "Russia's Wagner group", "A criminal gang acting alone"], answer: 1,
        explain: "The ringleaders were recruited online by Wagner and jailed in 2025." },
      sources: [
        { title: "Court finds Russia's Wagner mercenary group behind UK arson attackers", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/10/25/russia-backed-arson-attack-ringleaders-handed-hefty-jail-sentences-in-uk", date: "2025-10-25" },
        { title: "UK expels Russian diplomat in tit-for-tat move", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/4/29/uk-expels-russian-diplomat-in-tit-for-tat-move-2", date: "2026-04-29" },
        { title: "UK announces new sanctions on Russia targeting shadow fleet, propagandists and torturers", publisher: "Ukrainska Pravda", url: "https://www.pravda.com.ua/eng/news/2026/10/01/8055952/", date: "2026-10-01" },
        { title: "UK sanctions update: new Russia package targets LNG shadow fleet", publisher: "Trade Compliance Resource Hub", url: "https://www.tradecomplianceresourcehub.com/2026/10/05/uk-sanctions-update-new-russia-package-targets-lng-shadow-fleet-propagandists-and-human-rights-abusers/", date: "2026-10-05" }
      ]
    }
  ]
});
