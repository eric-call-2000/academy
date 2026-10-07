/* ============================================================
   Relationship — United States & Iran 🇺🇸🇮🇷
   Oil, the 1953 coup and America's Shah; the embassy hostages,
   a hidden war in the Gulf and a downed airliner; and a nuclear
   deal, its collapse and the wars of 2025–26. Iran's side of the
   wars is in ir-5 and ir-7; Washington's in us-6.
   Research note and sources: tools/research/us_ir.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_ir", {
  id: "us_ir",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_ir-1", kind: "relation", asOf: "2026-10-07",
      title: "Oil, a coup and the Shah",
      dek: "In 1953 the CIA and Britain's MI6 overthrew Iran's elected prime minister. For the next quarter-century the United States armed and backed the Shah, until a revolution swept him away.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ir/us_ir-1-hero.webp",
          alt: "Illustration of a 1950s oil refinery with tall towers and storage tanks beside a hazy shore at dusk.",
          caption: "Iran's oil, and who controlled it, set off the crisis of 1951–53.",
          credit: "Illustration — not a photograph",
          prompt: "A 1950s oil refinery with distillation towers, chimneys and round storage tanks beside a hazy gulf shore at dusk, a tanker at a jetty, warm smoky light, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From coup to revolution", items: [
          ["1951", "Mosaddegh nationalises Iran's British-run oil industry"],
          ["Aug 1953", "CIA and MI6 back a coup that ousts him"],
          ["1957", "US and Iran sign a civil nuclear agreement"],
          ["1967", "A US-supplied research reactor starts up in Tehran"],
          ["31 Dec 1977", "Carter toasts Iran as 'an island of stability'"],
          ["Jan 1979", "The Shah leaves Iran; the monarchy falls weeks later"]
        ] },
        { type: "section", head: "Oil and Mosaddegh", md:
          "In 1951 Iran's parliament nationalised the Anglo-Iranian Oil Company, the British firm that had pumped Iran's oil for half a century and paid Iran a small share of the profits. The prime minister who led the move, Mohammad Mosaddegh, became a national hero. Britain answered with a boycott of Iranian oil that crippled the economy, and pressed Washington to help remove him. At first the Truman administration refused; President Eisenhower, more worried that Iran's communist Tudeh party might profit from the chaos, agreed." },
        { type: "section", head: "The coup", md:
          "In August 1953 the CIA and MI6 organised a coup, codenamed TPAJAX, that paid crowds, newspapers and army officers to turn on Mosaddegh (see [[lesson:ir-10]]). After a first attempt failed and the Shah fled to Rome, a second push on 19 August succeeded. Mosaddegh was tried and spent the rest of his life under house arrest; the Shah returned with far more power. For decades Washington did not admit its role; in 2013 the CIA released documents acknowledging that the coup was carried out 'under CIA direction'." },
        { type: "section", head: "America's Shah", md:
          "Over the next 25 years Mohammad Reza Shah became one of America's closest allies. He bought vast quantities of American weapons, especially after 1972, when President Nixon agreed to sell him almost anything he wanted, and Iran acted as a guardian of Western interests in the Gulf. His secret police, SAVAK, set up in 1957, crushed dissent. Many Iranians came to see the Shah as an American creation, a view that the memory of 1953 made easy to believe." },
        { type: "section", head: "The nuclear seed", md:
          "Iran's nuclear programme began with American help. Under President Eisenhower's 'Atoms for Peace' programme, the two countries signed a civil nuclear agreement in 1957, and in 1967 a US-supplied research reactor began operating in Tehran. By the 1970s the Shah planned some twenty nuclear power plants. The research reactor, still running, became part of the programme that Washington would later try to stop." },
        { type: "section", head: "Revolution", md:
          "On New Year's Eve 1977 President Carter toasted Iran in Tehran as 'an island of stability'. Within a year, strikes and mass protests led by followers of the exiled cleric Ruhollah Khomeini had paralysed the country (see [[lesson:ir-9]]). The Shah left in January 1979, and Khomeini returned in triumph on 1 February. The new Islamic Republic called the United States 'the Great Satan'." },
        { type: "compare", head: "Two memories of 1953",
          left: { head: "In Washington", md:
            "A Cold War success that kept Iran and its oil out of Soviet hands." },
          right: { head: "In Iran", md:
            "Proof that America overthrew an elected leader and installed a dictator." } },
        { type: "section", head: "Why it matters", md:
          "The coup still shapes how Iranians of every political stripe see America, and it is the reason Iran's leaders cite whenever they are told to trust Washington. In 2009 President Obama acknowledged the US role publicly in a speech in Cairo." }
      ],
      takeaways: [
        "The CIA and MI6 overthrew Iran's elected prime minister, Mosaddegh, in August 1953; the CIA admitted it in 2013.",
        "For 25 years the US armed and backed the Shah, and helped start Iran's nuclear programme.",
        "The 1979 revolution turned Iran from America's ally in the Gulf into its sworn enemy."
      ],
      check: { q: "What set off the crisis that led to the 1953 coup?",
        choices: ["Iran's invasion of Iraq", "Iran's nationalisation of its British-run oil industry", "A Soviet military base in Iran"], answer: 1,
        explain: "Mosaddegh nationalised the Anglo-Iranian Oil Company in 1951." },
      sources: [
        { title: "In declassified document, CIA acknowledges role in 1953 Iran coup", publisher: "CNN", url: "https://www.cnn.com/2013/08/19/politics/cia-iran-1953-coup", date: "2013-08-19" },
        { title: "Operation Ajax", publisher: "PBS American Experience", url: "https://www.pbs.org/wgbh/americanexperience/features/taken-hostage-operation-ajax", date: "n.d." },
        { title: "CIA Admits It Was Behind Iran's Coup", publisher: "National Security Archive (Unredacted)", url: "https://unredacted.com/2013/08/26/cia-admits-it-was-behind-irans-coup-the-agency-finally-owns-up-to-its-role-in-the-1953-operation/", date: "2013-08-26" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_ir-2", kind: "relation", asOf: "2026-10-07",
      title: "Hostages and a hidden war",
      dek: "Students held 52 Americans for 444 days. In the decade that followed, the two countries fought a shadow war of bombings, secret arms deals and naval clashes that ended with a US warship shooting down an Iranian airliner.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ir/us_ir-2-hero.webp",
          alt: "Illustration of a walled embassy compound in a city at night, its gate surrounded by a large crowd.",
          caption: "Students seized the US embassy in Tehran on 4 November 1979.",
          credit: "Illustration — not a photograph",
          prompt: "A walled 1970s embassy compound with a gate and a brick chancellery building at night, a large crowd gathered outside with plain banners, streetlights and mountains behind, historical documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "A decade of hostility", items: [
          ["4 Nov 1979", "Students seize the US embassy in Tehran"],
          ["Apr 1980", "A US rescue mission ends in disaster in the desert"],
          ["20 Jan 1981", "Hostages freed minutes after Reagan takes office"],
          ["Oct 1983", "Bombing kills 241 US troops in Beirut"],
          ["1985–86", "Secret US arms sales to Iran: the Iran–Contra affair"],
          ["3 Jul 1988", "USS Vincennes shoots down Iran Air Flight 655"]
        ] },
        { type: "section", head: "444 days", md:
          "On 4 November 1979, students loyal to Khomeini stormed the US embassy in Tehran, angered that the exiled Shah had been admitted to the United States for cancer treatment. They held 52 Americans for 444 days. President Carter froze about $8 billion of Iranian assets and broke off diplomatic relations, which have never been restored. In April 1980 a rescue mission, Operation Eagle Claw, was abandoned in the desert after a helicopter and a transport plane collided, killing eight servicemen. The crisis helped Ronald Reagan defeat Carter that November." },
        { type: "section", head: "The Algiers Accords", md:
          "Algeria brokered the deal that ended the crisis. Under the Algiers Accords, signed on 19 January 1981, the United States unfroze Iranian assets, pledged not to interfere in Iran's internal affairs, and agreed to settle claims through a tribunal in The Hague that still sits. The hostages were released on 20 January, minutes after Reagan was sworn in." },
        { type: "section", head: "Bombs and secret deals", md:
          "In Lebanon, Hezbollah, a militia founded with Iranian help, bombed the US embassy and then the Marine barracks in Beirut in October 1983, killing 241 American servicemen. Yet in 1985 and 1986 Reagan's aides secretly sold missiles to Iran, then at war with Iraq (see [[lesson:ir-11]]), hoping to free American hostages held in Lebanon, and used the profits to fund rebels in Nicaragua. The Iran–Contra affair, exposed in November 1986, became the biggest scandal of Reagan's presidency." },
        { type: "section", head: "War in the Gulf", md:
          "As Iran and Iraq attacked each other's oil tankers, the US Navy began escorting Kuwaiti tankers in 1987, and clashed with Iranian forces. In April 1988, after a US frigate struck an Iranian mine, the Navy destroyed Iranian oil platforms and warships in a single day. On 3 July 1988 the cruiser USS Vincennes, in a skirmish with Iranian gunboats, mistook a civilian Airbus for an attacking fighter and shot it down over the [[Strait of Hormuz]], killing all 290 people aboard, 66 of them children." },
        { type: "section", head: "Regret, not apology", md:
          "The United States called the downing a tragic accident. In 1996 it agreed to pay $61.8 million to the victims' families in a settlement at the International Court of Justice, but it has never admitted legal responsibility or apologised. Iranian leaders still cite Flight 655 as proof of American hostility." },
        { type: "compare", head: "How each side remembers",
          left: { head: "American memory", md:
            "Hostages paraded blindfolded, and Marines killed in Beirut." },
          right: { head: "Iranian memory", md:
            "A coup in 1953, US help for Iraq in the war, and Flight 655." } },
        { type: "section", head: "Why it matters", md:
          "These years fixed each country's image of the other. More than four decades later, there is still no US embassy in Tehran, and American and Iranian officials usually talk through intermediaries such as Switzerland, Oman, Qatar and Pakistan." }
      ],
      takeaways: [
        "Iranian students held 52 Americans hostage for 444 days in 1979–81; the US and Iran have had no diplomatic relations since.",
        "In the 1980s the two fought a shadow war, from the Beirut bombing to the secret arms sales of the Iran–Contra affair.",
        "In July 1988 a US warship shot down Iran Air Flight 655, killing 290; the US paid compensation but never apologised."
      ],
      check: { q: "What ended the hostage crisis in January 1981?",
        choices: ["A US rescue mission", "The Algiers Accords, brokered by Algeria", "A UN Security Council resolution"], answer: 1,
        explain: "The US unfroze assets and pledged non-interference; the hostages left minutes after Reagan's inauguration." },
      sources: [
        { title: "Iran hostage crisis", publisher: "New World Encyclopedia", url: "https://www.newworldencyclopedia.org/entry/Iran_hostage_crisis", date: "n.d." },
        { title: "The Algiers Accords at 40", publisher: "IranWire", url: "https://iranwire.com/en/features/68696/", date: "2021" },
        { title: "When the US Navy shot down Iran Air flight 655 in 1988", publisher: "CNN", url: "https://www.cnn.com/2020/01/10/middleeast/iran-air-flight-655-us-military-intl-hnk/", date: "2020-01-10" },
        { title: "USS Vincennes Shoots Down Iran Air Flight 655", publisher: "Association for Diplomatic Studies and Training", url: "https://adst.org/2014/07/uss-vincennes-shoots-down-iran-air-flight-655/", date: "2014-07" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_ir-3", kind: "relation", asOf: "2026-10-07",
      title: "A deal, its collapse and war",
      dek: "Obama struck a nuclear deal with Iran in 2015; Trump tore it up in 2018. Talks in 2025 gave way to bombing, and by autumn 2026 the two were at war at sea while Qatar carried messages between them.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ir/us_ir-3-hero.webp",
          alt: "Illustration of a grey warship patrolling a narrow strait at sunset, with an oil tanker and rocky mountains behind.",
          caption: "Since April 2026 the US Navy has blockaded Iran's ports.",
          credit: "Illustration — not a photograph",
          prompt: "A grey navy destroyer patrolling a narrow strait at sunset, a large oil tanker in the distance, rugged brown mountains on the far shore, calm sea with long reflections, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From deal to war", items: [
          ["14 Jul 2015", "Iran and six powers agree the JCPOA nuclear deal"],
          ["8 May 2018", "Trump withdraws; 'maximum pressure' sanctions follow"],
          ["3 Jan 2020", "A US drone strike kills General Qasem Soleimani"],
          ["Apr–May 2025", "Witkoff and Araghchi hold talks via Oman"],
          ["Jun 2025", "Israeli and US strikes on Iran's nuclear sites"],
          ["28 Feb 2026", "US–Israeli war on Iran begins"]
        ] },
        { type: "section", head: "The deal", md:
          "After years of [[sanctions]] and secret talks in Oman, Iran and six powers, led by the United States, agreed the [[JCPOA|Joint Comprehensive Plan of Action]] on 14 July 2015. Iran accepted strict limits on enriching uranium and intrusive inspections; in return, nuclear-related sanctions were lifted. Supporters said it blocked Iran's paths to a bomb for at least a decade. Critics, including Israel's government and most Republicans, said it gave Iran money and legitimacy while its limits would expire." },
        { type: "section", head: "Maximum pressure", md:
          "On 8 May 2018 President Trump withdrew from the deal, calling it 'the worst deal ever', and reimposed sanctions designed to cut Iran's oil exports to zero. Iran answered by gradually breaking the deal's limits. Tensions peaked on 3 January 2020, when a US drone killed Qasem Soleimani, commander of the [[IRGC|Revolutionary Guards']] foreign operations, in Baghdad. Iran fired missiles at bases in Iraq hosting US troops; hours later, its air defences mistakenly shot down a Ukrainian airliner leaving Tehran, killing 176 people." },
        { type: "section", head: "From talks to bombs", md:
          "Biden's attempt to revive the deal failed. In his second term Trump wrote to Iran's Supreme Leader proposing talks, and from April 2025 his envoy Steve Witkoff and Foreign Minister Abbas Araghchi held five rounds through Omani mediators. A sixth was due when Israel attacked Iran on 13 June 2025; nine days later US bombers struck Fordow, Natanz and Isfahan (see [[lesson:ir-5]]). On 28 February 2026 the United States and Israel went to war with Iran, killing Ali Khamenei (see [[lesson:ir-7]] and [[lesson:us-6]])." },
        { type: "section", head: "War at sea", md:
          "A ceasefire brokered by Pakistan in April 2026 broke down, and the US Navy has since enforced a [[blockade]] of Iran's ports. A memorandum signed in June promised peace, but collapsed in July. In September US forces sank Iranian tankers and Iran attacked ships and a base in Jordan. At the UN that month Iran offered a seven-day plan: reopen the Strait of Hormuz and halt fighting if the blockade and oil sanctions were lifted. Trump rejected it on 26 September, but Qatari mediators kept passing proposals between the two sides into October." },
        { type: "section", head: "The sticking point", md:
          "The core dispute is the same as in 2015: whether Iran may enrich uranium at all. Washington says no deal is possible unless Iran's programme and its unverified stock of highly enriched uranium are dealt with; Tehran insists on its right to enrich and wants the blockade lifted first." },
        { type: "compare", head: "Two theories of how to handle Iran",
          left: { head: "Deal-makers", md:
            "Limits and inspections, paid for with sanctions relief, are the surest way to stop a bomb." },
          right: { head: "Pressure and force", md:
            "Only crippling sanctions and military strikes will stop Iran's nuclear and regional ambitions." } },
        { type: "section", head: "Why it matters", md:
          "The war has pushed up oil prices worldwide and killed thousands. Whether the two sides return to a deal, or stay at war, will shape the Gulf, the world's energy supply and Trump's final years in office." }
      ],
      takeaways: [
        "The 2015 JCPOA limited Iran's nuclear programme in return for sanctions relief; Trump withdrew in 2018.",
        "Talks in 2025 gave way to Israeli and US strikes, then to the US–Israeli war on Iran from February 2026.",
        "By October 2026 the US was blockading Iran's ports, Trump had rejected Iran's seven-day plan, and Qatar was mediating."
      ],
      check: { q: "What happened on 8 May 2018?",
        choices: ["The JCPOA was signed", "Trump withdrew the US from the JCPOA", "Soleimani was killed"], answer: 1,
        explain: "Trump called it 'the worst deal ever' and reimposed sanctions." },
      sources: [
        { title: "U.S. Killing of Qasem Soleimani: Frequently Asked Questions", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/R46148", date: "2020" },
        { title: "Possible U.S. Return to Iran Nuclear Agreement: Frequently Asked Questions", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/R46663", date: "2021" },
        { title: "US-Iran nuclear talks conclude in Oman, with another round said planned", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/us-iran-nuclear-talks-conclude-in-oman-with-another-round-said-planned-for-coming-days/", date: "2025-04" },
        { title: "Trump rejects Iran's proposal to reopen Strait of Hormuz, restart peace talks", publisher: "The Washington Post", url: "https://www.washingtonpost.com/national-security/2026/09/26/trump-rejects-iran-proposal-reopen-strait-hormuz-restart-peace-talks/", date: "2026-09-26" },
        { title: "U.S.-Iran diplomacy moves forward in Qatar as mediator exchanges proposals", publisher: "The Washington Times", url: "https://washingtontimes.com/news/2026/oct/6/us-iran-diplomacy-moves-forward-qatar-mediator-exchanges-proposals", date: "2026-10-06" }
      ]
    }
  ]
});
