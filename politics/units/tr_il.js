/* ============================================================
   Relationship — Turkey & Israel 🇹🇷🇮🇱
   Once quiet allies, now bitter rivals: the collapse from
   military partnership to the Mavi Marmara, Turkey's trade and
   airspace bans over Gaza, and a new contest for Syria's skies.
   Turkey's regional balancing is in tr-7; the Gaza war in il-5.
   Research note and sources: tools/research/tr_il.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("tr_il", {
  id: "tr_il",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "tr_il-1", kind: "relation", asOf: "2026-09-30",
      title: "From allies to adversaries",
      dek: "Turkey was the first Muslim-majority country to recognise Israel, and in the 1990s the two were military partners. Under Erdoğan the friendship turned to fury, with one deadly night at sea as the breaking point.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_il/tr_il-1-hero.webp",
          alt: "Illustration of a large white passenger ship at sea at dawn, surrounded by several small grey military boats.",
          caption: "On 31 May 2010 Israeli commandos boarded the Mavi Marmara, a Turkish ship trying to break the blockade of Gaza; ten Turkish activists died.",
          credit: "Illustration — not a photograph",
          prompt: "A large white passenger ferry at sea at dawn, surrounded by several small grey fast military boats, a helicopter in the pale sky, choppy water, tense and ominous, seen from a distance, no people visible, no flags, no legible text." },
        { type: "timeline", head: "Rise and fall", items: [
          ["1949", "Turkey recognises Israel"],
          ["1996", "Military cooperation and training agreements"],
          ["Jan 2009", "Erdoğan storms off a Davos stage after clashing with Peres"],
          ["31 May 2010", "Mavi Marmara raid kills ten Turkish activists"],
          ["2016", "Reconciliation deal; Israel pays $20 million"],
          ["2018", "Ambassadors expelled again over Gaza killings"],
          ["2022", "Herzog visits Ankara; ambassadors restored"]
        ] },
        { type: "section", head: "Quiet partners", md:
          "The ties are old: the Ottoman Empire took in Jews expelled from Spain in 1492, a story both countries once liked to tell. In March 1949 Turkey became the first Muslim-majority country to recognise Israel. Both were Western-aligned, wary of the Soviet Union and of Arab nationalism, and for decades they cooperated quietly. In the 1990s ties blossomed into a strategic partnership. Agreements signed in 1996 let Israeli pilots train in Turkish airspace, Israeli firms upgraded Turkish tanks and warplanes, and the two shared intelligence on Syria and Iran. Israeli tourists flocked to Turkish beaches, and trade grew fast. Turkey's secular generals, who then held great power (see [[lesson:tr-11]]), were the partnership's main champions." },
        { type: "section", head: "Erdoğan's turn", md:
          "Recep Tayyip Erdoğan's AKP, which came to power in 2002, drew on a religious base that sympathised strongly with the Palestinians. Relations frayed after Israel's 2008–09 war in Gaza. In January 2009, at the World Economic Forum in Davos, Erdoğan clashed with Israel's president Shimon Peres, demanded 'one minute' to reply, and walked off the stage; he returned home a hero. As Erdoğan tamed the army, the constituency for the Israeli alliance in Turkey shrank." },
        { type: "section", head: "The Mavi Marmara", md:
          "On 31 May 2010 Israeli naval commandos boarded the Mavi Marmara, a Turkish ship leading a flotilla trying to break the blockade of Gaza. Activists fought the soldiers with clubs and knives; the commandos opened fire, killing ten Turkish activists. Turkey withdrew its ambassador and froze military ties. Barack Obama pushed for a thaw, and in June 2016 the two signed a reconciliation deal under which Israel paid $20 million to the victims' families. It did not last: in 2018 Turkey expelled Israel's ambassador after Israeli troops killed dozens of protesters at the Gaza border fence. In March 2022 Israel's president Isaac Herzog visited Ankara, and ambassadors returned that summer." },
        { type: "compare", head: "Two narratives",
          left: { head: "Israel's view", md:
            "Erdoğan turned a strategic partner into an enemy for domestic popularity, embracing Hamas and ignoring Israel's security needs." },
          right: { head: "Turkey's view", md:
            "Israel's occupation and wars in Gaza, and the killing of Turkish citizens, made friendship impossible without justice for Palestinians." } },
        { type: "section", head: "Why it matters", md:
          "Turkey and Israel are the two strongest militaries in the eastern Mediterranean, both close to the United States. Their collapse from partners to rivals has reshaped the region, pushing Israel toward Greece and Cyprus and Turkey toward Qatar and, for a time, Iran. The 2022 thaw would be swept away by the Gaza war (see [[lesson:tr_il-2]])." }
      ],
      takeaways: [
        "Turkey recognised Israel in 1949, and in the 1990s the two were close military partners.",
        "Under Erdoğan relations soured, and the 2010 Mavi Marmara raid killed ten Turkish activists.",
        "Repeated attempts at reconciliation, in 2016 and 2022, did not last."
      ],
      check: { q: "What happened on the Mavi Marmara in May 2010?",
        choices: ["A Turkish–Israeli naval exercise", "Israeli commandos boarded a Gaza-bound ship and killed ten Turkish activists", "A peace treaty was signed"], answer: 1,
        explain: "The raid on the flotilla trying to break the Gaza blockade led Turkey to withdraw its ambassador and freeze military ties." },
      sources: [
        { title: "Israel, Turkey Announce Reconciliation Deal", publisher: "Defense News", url: "https://www.defensenews.com/global/2016/06/27/israel-turkey-announce-reconciliation-deal/", date: "2016-06-27" },
        { title: "Israel sends $20 million to Turkey for families of Mavi Marmara victims", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/israel-sends-20-million-to-turkey-for-families-of-mavi-marmara-victims/", date: "2016" },
        { title: "Erdogan hailed after Davos walkout", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2009/1/31/erdogan-hailed-after-davos-walkout", date: "2009-01-31" },
        { title: "Israel and Turkey hail new era in relations, but divisions remain", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2022/3/9/israel-turkey-relations-herzog-visit-erdogan", date: "2022-03-09" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "tr_il-2", kind: "relation", asOf: "2026-09-30",
      title: "Gaza, trade bans and closed skies",
      dek: "After 7 October 2023 Erdoğan called Hamas a liberation movement and Netanyahu a war criminal. Turkey cut off trade with Israel, then closed its ports and airspace to Israeli ships and planes.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_il/tr_il-2-hero.webp",
          alt: "Illustration of a busy container port in Turkey with stacked containers and cranes, and a cargo ship leaving the harbour.",
          caption: "Before 2024 Turkey and Israel traded about $6.8 billion of goods a year.",
          credit: "Illustration — not a photograph",
          prompt: "A busy Mediterranean container port with colourful stacked shipping containers and tall cranes, a cargo ship leaving the harbour, hills and a mosque dome faint in the background, bright afternoon light, industrial, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Escalation", items: [
          ["Oct 2023", "Erdoğan calls Hamas a 'liberation group'"],
          ["May 2024", "Turkey halts all trade with Israel"],
          ["Aug 2024", "Turkey joins South Africa's genocide case at the World Court"],
          ["Nov 2024", "Turkey denies overflight to Israel's president"],
          ["29 Aug 2025", "Turkey closes ports to Israeli ships and airspace to Israeli government flights"],
          ["Feb 2026", "New curbs on goods reaching Israel via third countries"]
        ] },
        { type: "section", head: "Words", md:
          "Days after Hamas's attack on 7 October 2023, Erdoğan called Hamas not a terrorist organisation but a 'liberation group' of 'mujahideen' defending their land, and later compared Benjamin Netanyahu to Hitler. Hamas leaders have long been welcome in Turkey. Israel recalled its diplomats. Turkish public opinion, across almost all parties, was furious at the destruction in Gaza, and Erdoğan's AKP suffered in local elections in March 2024 partly because rivals accused it of hypocrisy for continuing to trade with Israel." },
        { type: "section", head: "Trade and airspace", md:
          "In May 2024 Turkey halted all trade with Israel, which had been worth about $6.8 billion in 2023, including Turkish steel, cement and cars. In August 2024 Turkey joined South Africa's genocide case against Israel at the International Court of Justice. In November 2024 it refused overflight to Israel's president, Isaac Herzog, forcing him to cancel a trip to a climate summit in Azerbaijan. On 29 August 2025 Foreign Minister Hakan Fidan announced that Israeli ships were barred from Turkish ports and Israeli government flights and weapons shipments from Turkish airspace, and in February 2026 Ankara tightened rules to stop Turkish goods reaching Israel via other countries." },
        { type: "section", head: "Leaks in the wall", md:
          "The embargo is not airtight. Analysts have tracked Turkish goods reaching Israel through third countries, and oil from Azerbaijan continues to flow through a pipeline across Turkey to a port from which some cargoes reach Israel. Diplomatic relations have not been formally cut, despite Erdoğan's words, though neither country has an ambassador in the other. Turkey also sits on the Board of Peace set up under the October 2025 Gaza ceasefire plan." },
        { type: "section", head: "The pipeline that wasn't", md:
          "The rupture also buried an energy plan. After the 2022 thaw the two discussed a pipeline to carry Israeli gas from the eastern Mediterranean through Turkey to Europe. Instead Israel sells its gas to Egypt and Jordan (see [[lesson:eg_il-2]]) and works with Greece and Cyprus, Turkey's rivals in the region, on energy and defence." },
        { type: "compare", head: "Two views of Turkey's measures",
          left: { head: "Supporters", md:
            "Turkey is using its economic weight to pressure Israel over Gaza when most governments only issue statements." },
          right: { head: "Critics", md:
            "The measures are largely symbolic, full of loopholes, and designed more for Turkish voters than for Palestinians." } },
        { type: "section", head: "Why it matters", md:
          "Turkey is a NATO member and one of the most important Muslim-majority states. Its break with Israel is one of the sharpest diplomatic ruptures of the Gaza war, and it shapes the contest the two now wage over Syria (see [[lesson:tr_il-3]])." }
      ],
      takeaways: [
        "After 7 October 2023 Erdoğan called Hamas a liberation movement and fiercely attacked Israel.",
        "Turkey halted trade with Israel in May 2024 and barred Israeli ships and government flights in August 2025.",
        "The embargo has loopholes, and formal diplomatic relations have not been cut."
      ],
      check: { q: "What did Turkey announce on 29 August 2025?",
        choices: ["A free trade deal with Israel", "The closure of its ports to Israeli ships and its airspace to Israeli government flights", "Recognition of Hamas as a state"], answer: 1,
        explain: "Foreign Minister Hakan Fidan said Israeli ships were barred from Turkish ports and Israeli government and arms flights from its airspace." },
      sources: [
        { title: "Turkey halts all trade with Israel over military actions in Gaza", publisher: "NPR", url: "https://www.npr.org/2024/05/03/1248863099/turkey-trade-israel-gaza", date: "2024-05-03" },
        { title: "Turkey says airspace closed to Israel as it condemns 'reckless attacks'", publisher: "The National", url: "https://www.thenationalnews.com/news/mena/2025/08/29/turkey-says-airspace-closed-to-israel-as-it-condemns-reckless-attacks/", date: "2025-08-29" },
        { title: "Despite Sitting on Board of Peace, Turkey Implements New Measures To Block Trade With Israel", publisher: "FDD", url: "https://www.fdd.org/analysis/2026/02/24/despite-sitting-on-board-of-peace-turkey-implements-new-measures-to-block-trade-with-israel/", date: "2026-02-24" },
        { title: "Turkey blocked Israeli President Herzog's flight to COP29 in Azerbaijan, officials confirm", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2024/11/turkey-blocked-israeli-president-herzogs-flight-cop29-azerbaijan-officials", date: "2024-11" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "tr_il-3", kind: "relation", asOf: "2026-09-30",
      title: "Rivals over Syria",
      dek: "When Assad fell, Turkey's allies took Damascus. Israel, fearing Turkish bases on its doorstep, bombed airfields where Turkish forces hoped to deploy. Azerbaijan and the United States are trying to keep them from clashing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_il/tr_il-3-hero.webp",
          alt: "Illustration of a desert military airfield with a cratered runway and empty hangars under a hazy sky.",
          caption: "Israel has struck Syrian air bases, including T4 in April 2025, to stop Turkey setting up air defences there.",
          credit: "Illustration — not a photograph",
          prompt: "A desert military airfield with a long runway marked by several craters, empty concrete aircraft shelters, a control tower, hazy pale sky and flat brown land, desolate aftermath, no people, no aircraft, no flags, no legible text." },
        { type: "timeline", head: "The new front", items: [
          ["Dec 2024", "Assad falls; Turkish-backed forces take power in Damascus"],
          ["Dec 2024", "Israel seizes a buffer zone in southern Syria"],
          ["Apr 2025", "Israel strikes the T4 air base; talks begin in Baku"],
          ["2025", "Several rounds of Turkish–Israeli talks hosted by Azerbaijan"],
          ["Aug 2026", "Israel strikes the Abu al-Duhur base near the Turkish border"],
          ["Aug 2026", "US envoy says a deconfliction mechanism is being worked on"]
        ] },
        { type: "section", head: "A new Syria", md:
          "Turkey backed Syria's rebels throughout the civil war and hosted millions of Syrian refugees. When the rebel coalition led by Ahmed al-Sharaa swept into Damascus in December 2024, Ankara became the new government's most important foreign patron, offering training, investment and military help. Israel saw danger. It seized a buffer zone in southern Syria beyond the Golan Heights and launched hundreds of strikes on the Syrian army's weapons, arguing they must not fall into hostile hands. For Israel, Syrian airspace has also been the corridor its jets use to reach Iran." },
        { type: "section", head: "Airfields", md:
          "Reports in spring 2025 said Turkey hoped to station air defences and radar at Syrian air bases, including T4 in the centre of the country. In early April 2025 Israeli jets struck T4's runways; an Israeli official said the message to Turkey was: 'Do not establish a military base in Syria.' In August 2026 Israel struck the Abu al-Duhur air base in Idlib province, about 70 km from the Turkish border, where Turkey was reported to be installing radar. Turkey condemned the strikes as violations of Syrian sovereignty. Israel has also intervened in Syria's internal conflicts, striking government forces in July 2025 in the name of protecting the Druze minority in Sweida, while Turkey backs Damascus's efforts to bring all armed groups under central control." },
        { type: "section", head: "Keeping them apart", md:
          "Azerbaijan, a close friend of both, has hosted several rounds of military talks between Turkish and Israeli officials since April 2025 to avoid accidental clashes. In August 2026 the US envoy for Syria, Tom Barrack, said Washington was working on a mechanism to coordinate Turkish, Israeli and Syrian operations. Israel is reluctant, fearing any arrangement would limit its freedom to strike; Turkey denied it had been asked to join one." },
        { type: "compare", head: "Whose Syria?",
          left: { head: "Ankara", md:
            "Turkey is helping a sovereign Syrian government rebuild and defend itself. Israel's strikes and occupation violate Syrian sovereignty." },
          right: { head: "Jerusalem", md:
            "Turkish bases and air defences in Syria would threaten Israel's security and its ability to act against Iran. Israel will prevent them." } },
        { type: "section", head: "Why it matters", md:
          "For the first time, two powerful militaries that already dislike each other are operating in the same country's skies. A mistake could lead to a direct clash between a NATO member and a close American ally, which is why Washington and Baku are working so hard to keep them apart." }
      ],
      takeaways: [
        "After Assad's fall, Turkey became the new Syrian government's main backer while Israel expanded operations in Syria.",
        "Israel struck Syrian air bases in 2025 and 2026 to stop Turkey deploying air defences there.",
        "Azerbaijan hosts deconfliction talks, and the US is seeking a mechanism to prevent clashes."
      ],
      check: { q: "Why did Israel strike the T4 air base in Syria in April 2025?",
        choices: ["To attack Iranian forces only", "To stop Turkey setting up air defences and a base there", "To help the Syrian army"], answer: 1,
        explain: "An Israeli official said the strikes sent a message to Turkey not to establish a military base in Syria." },
      sources: [
        { title: "US working on 'deconfliction mechanism' between Turkey, Syria and Israel, says Barrack", publisher: "The National", url: "https://www.thenationalnews.com/news/mena/2026/08/19/us-working-on-deconfliction-mechanism-between-turkey-syria-and-israel-says-barrack/", date: "2026-08-19" },
        { title: "Israel Is Drawing the Line Against Turkey in Syria", publisher: "FDD", url: "https://www.fdd.org/analysis/2026/08/19/israel-is-drawing-the-line-against-turkey-in-syria/", date: "2026-08-19" },
        { title: "Did Israel strike a Syrian airbase to block Turkey's military ambitions?", publisher: "ACLED", url: "https://acleddata.com/expert-comment/did-israel-strike-syrian-airbase-block-turkeys-military-ambitions", date: "2025-04" },
        { title: "Azerbaijan Hosts Türkiye-Israel Talks to Avoid Conflict in Syria", publisher: "Caspian News", url: "https://caspiannews.com/news-detail/azerbaijan-hosts-turkiye-israel-talks-to-avoid-conflict-in-syria-2025-4-11-18/", date: "2025-04-11" },
        { title: "Ankara says no US request for deconfliction plan among Turkey, Israel and Syria", publisher: "Turkish Minute", url: "https://turkishminute.com/2026/08/27/ankara-says-no-us-request-for-deconfliction-plan-among-turkey-israel-and-syria/", date: "2026-08-27" }
      ]
    }
  ]
});
