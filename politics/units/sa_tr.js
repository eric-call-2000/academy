/* ============================================================
   Relationship — Saudi Arabia & Turkey 🇸🇦🇹🇷
   Ottomans and Wahhabis: Diriyah destroyed and the Arab Revolt;
   rival models for the Muslim world, the Arab Spring, Qatar and
   Khashoggi; and the 2022 reconciliation, drones, fighter talks
   and the Mecca defence pact.
   Research note and sources: tools/research/sa_tr.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("sa_tr", {
  id: "sa_tr",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "sa_tr-1", kind: "relation", asOf: "2026-10-11",
      title: "Ottomans and Wahhabis",
      dek: "The first Saudi state was destroyed by an Ottoman army in 1818. A century later the Ottoman Empire collapsed, and Ibn Saud built a kingdom on its ruins in Arabia. The memory lingers on both sides.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_tr/sa_tr-1-hero.webp",
          alt: "Illustration of the mud-brick ruins of an old walled town with towers on a ridge above a palm-filled desert valley.",
          caption: "Diriyah, the first Saudi capital, was razed by an Ottoman Egyptian army in 1818.",
          credit: "Illustration — not a photograph",
          prompt: "Mud-brick ruins of an old walled desert town with crenellated towers on a rocky ridge above a valley of date palms, warm late-afternoon light, dust in the air, historical documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Empire and kingdom", items: [
          ["1744", "Muhammad ibn Saud allies with the preacher Muhammad ibn Abd al-Wahhab"],
          ["1803–05", "Saudi forces take Mecca and Medina from Ottoman control"],
          ["1818", "Ottoman Egyptian army destroys Diriyah"],
          ["1916", "The Arab Revolt against Ottoman rule"],
          ["1924–25", "Ibn Saud conquers the Hejaz"],
          ["1932", "The Kingdom of Saudi Arabia is proclaimed"]
        ] },
        { type: "section", head: "A challenge to the sultan", md:
          "In 1744 a local ruler in central Arabia, Muhammad ibn Saud, allied with a preacher, Muhammad ibn Abd al-Wahhab, who called for a return to what he saw as pure Islam, free of the veneration of saints and tombs (see [[lesson:sa-9]]). Their state expanded across Arabia, and in 1803–05 its forces took Mecca and Medina, the holy cities whose protection gave the Ottoman sultans much of their prestige as caliphs. The Wahhabis destroyed tombs and shrines and barred pilgrims they considered heretical." },
        { type: "section", head: "Diriyah destroyed", md:
          "The sultan ordered his governor of Egypt, Muhammad Ali, to crush the rebels. Egyptian armies retook the holy cities in 1812–13, and in 1817–18 his son Ibrahim Pasha marched into central Arabia and besieged Diriyah, the Saudi capital. After a six-month siege the last ruler, Abdullah bin Saud, surrendered in September 1818. He was sent to Istanbul and beheaded; Diriyah was razed. Its ruins are now a UNESCO World Heritage site and the centrepiece of a giant Saudi heritage project." },
        { type: "section", head: "The Arab Revolt", md:
          "A second Saudi state rose and fell in the 19th century. In the First World War the Ottomans faced an Arab revolt in the Hejaz, led by Sharif Hussein of Mecca with British support, not by the Saudis. After the empire's defeat, Ibn Saud, who had rebuilt Saudi power from Riyadh, conquered the Hejaz in 1924–25, driving out Hussein, and in 1932 proclaimed the Kingdom of Saudi Arabia. Meanwhile Atatürk founded a secular Turkish republic and abolished the caliphate in 1924 (see [[lesson:tr-9]])." },
        { type: "section", head: "Two paths", md:
          "For most of the 20th century the two states had little to do with each other. Turkey was secular, Western-oriented and a NATO member from 1952; Saudi Arabia was an absolute monarchy built on religious authority and oil. Both were anti-communist and close to the United States, and they cooperated quietly, but neither saw the other as a natural partner." },
        { type: "section", head: "Rival memories", md:
          "History is still contested. Saudi textbooks and television dramas have portrayed the Ottomans as occupiers; in 2020 the city of Riyadh renamed a street that honoured the Ottoman sultan Suleiman the Magnificent. Turkish nationalists recall the Arab Revolt as a betrayal by fellow Muslims." },
        { type: "compare", head: "How each remembers the Ottomans",
          left: { head: "Saudi Arabia", md:
            "Foreign rulers who destroyed the first Saudi state." },
          right: { head: "Turkey", md:
            "A great Muslim empire that protected the holy cities for four centuries." } },
        { type: "section", head: "Why it matters", md:
          "Both now claim a leading role in the Muslim world, one as custodian of its holiest sites, the other as heir to its last great empire. That rivalry shapes how they compete, and cooperate, today." }
      ],
      takeaways: [
        "In 1818 an Ottoman Egyptian army destroyed Diriyah and ended the first Saudi state.",
        "After the Ottoman collapse, Ibn Saud conquered the Hejaz and founded Saudi Arabia in 1932; Atatürk founded secular Turkey.",
        "The two still dispute the Ottoman legacy, as rival leaders of the Muslim world."
      ],
      check: { q: "Who destroyed Diriyah in 1818?",
        choices: ["British forces", "An Ottoman Egyptian army under Ibrahim Pasha", "Ibn Saud"], answer: 1,
        explain: "The sultan ordered Muhammad Ali of Egypt to crush the Saudi state." },
      sources: [
        { title: "Expedition to Najd (1817–1818)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Expedition_to_Najd_(1817%E2%80%931818)", date: "n.d." },
        { title: "Siege of Diriyah", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Siege_of_Diriyah", date: "n.d." },
        { title: "Turkey and Saudi Arabia's rocky relations: A brief history", publisher: "Middle East Eye", url: "https://www.middleeasteye.net/news/turkey-and-saudi-arabia-bitter-rivals-strategic-partners", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "sa_tr-2", kind: "relation", asOf: "2026-10-11",
      title: "Brotherhood, Qatar and Khashoggi",
      dek: "After the Arab Spring, Erdoğan backed the Muslim Brotherhood and Qatar while Riyadh fought them. Then Saudi agents killed Jamal Khashoggi inside the consulate in Istanbul.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_tr/sa_tr-2-hero.webp",
          alt: "Illustration of a walled consulate building on a leafy Istanbul street at night, reporters and cameras gathered across the road.",
          caption: "Jamal Khashoggi was killed inside the Saudi consulate in Istanbul on 2 October 2018.",
          credit: "Illustration — not a photograph",
          prompt: "A modern walled consulate building with security cameras on a quiet leafy Istanbul street at night, a group of reporters with cameras and lights waiting across the road, wet pavement reflections, documentary painting style, figures small and seen from behind, no flags, no legible text." },
        { type: "timeline", head: "From rivals to enemies", items: [
          ["2011", "Arab Spring; Turkey backs Islamist movements"],
          ["Jul 2013", "Egypt's army ousts Morsi; Riyadh backs it, Ankara condemns it"],
          ["Jun 2017", "Saudi-led blockade of Qatar; Turkey sends troops to Doha"],
          ["2 Oct 2018", "Khashoggi killed in the Saudi consulate in Istanbul"],
          ["2020", "Unofficial Saudi boycott of Turkish goods"],
          ["Apr 2022", "Turkey transfers the Khashoggi trial to Saudi Arabia"]
        ] },
        { type: "section", head: "Two models", md:
          "When Arab uprisings swept the region in 2011, Recep Tayyip Erdoğan's Turkey offered itself as a model: Islamist-rooted, democratic and prosperous. It backed the Muslim Brotherhood and allied movements in Egypt, Tunisia, Libya and Syria. Saudi Arabia saw the Brotherhood, which mixes political Islam with elections, as a threat to monarchies. When Egypt's army overthrew the Brotherhood's President Mohamed Morsi in 2013, Riyadh and the UAE poured money into the new government; Erdoğan called it a coup and gave refuge to Brotherhood exiles (see [[lesson:tr_eg-2]])." },
        { type: "section", head: "Qatar", md:
          "In June 2017 Saudi Arabia, the UAE, Bahrain and Egypt cut ties with Qatar and blockaded it, accusing it of backing terrorism and getting too close to Iran. Among their demands was the closure of a Turkish military base in Qatar. Turkey instead sent more troops and food supplies to Doha. The blockade lasted until January 2021." },
        { type: "section", head: "The consulate", md:
          "On 2 October 2018 Jamal Khashoggi, a Saudi journalist and Washington Post columnist critical of Crown Prince Mohammed bin Salman, entered the Saudi consulate in Istanbul to collect papers for his marriage to a Turkish woman. He never came out. Turkish officials, who had bugged the consulate, leaked a stream of evidence that a 15-man team flown in from Riyadh had killed and dismembered him. Saudi Arabia first denied it, then called it a rogue operation. A US intelligence assessment later concluded that the crown prince approved it, which he denies." },
        { type: "section", head: "Pressure and boycott", md:
          "Erdoğan used the killing to pressure Riyadh, saying the order came from the highest levels of the Saudi state. Saudi Arabia retaliated quietly: from 2020 an unofficial boycott of Turkish goods cut Turkish exports to the kingdom by about 90%, and Saudi tourists stayed away. Turkish television dramas, popular across the Arab world, were taken off Saudi-owned channels." },
        { type: "section", head: "A trial abandoned", md:
          "Turkey put 26 Saudis on trial in absentia. But in April 2022, as Ankara sought a reconciliation, a Turkish court transferred the case to Saudi Arabia, where it was effectively closed. Khashoggi's fiancée, Hatice Cengiz, and human rights groups condemned the decision, saying Turkey had traded justice for money." },
        { type: "compare", head: "The rivalry in a sentence",
          left: { head: "Riyadh's view", md:
            "Turkey sponsors the Islamist movements that threaten Arab monarchies." },
          right: { head: "Ankara's view", md:
            "The Saudis back coups and crush the people's will." } },
        { type: "section", head: "Why it matters", md:
          "These were the worst years in modern relations between the two biggest Sunni powers. Their competition shaped wars and politics from Egypt to Libya and the Gulf." }
      ],
      takeaways: [
        "After 2011 Turkey backed the Muslim Brotherhood and Qatar; Saudi Arabia opposed both.",
        "Saudi agents killed Jamal Khashoggi in the Saudi consulate in Istanbul in October 2018.",
        "A Saudi boycott cut Turkish exports by about 90%; Turkey dropped its Khashoggi trial in 2022."
      ],
      check: { q: "Where was Jamal Khashoggi killed?",
        choices: ["In Riyadh", "In the Saudi consulate in Istanbul", "In Washington"], answer: 1,
        explain: "A Saudi team was flown in to carry out the killing." },
      sources: [
        { title: "Why Turkey Is Resetting Relations With Saudi Arabia", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/in-brief/why-turkey-resetting-relations-saudi-arabia", date: "2022" },
        { title: "Saudi Arabia and Turkey reset relations after Khashoggi killing", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2022/04/saudi-arabia-and-turkey-reset-relations-after-khashoggi-killing", date: "2022-04" },
        { title: "Turkey's Erdogan visits Saudi Arabia for first time in years, seeking to mend ties", publisher: "CNN", url: "https://edition.cnn.com/2022/04/28/middleeast/turkey-erdogan-saudi-arabia-visit-intl/index.html", date: "2022-04-28" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "sa_tr-3", kind: "relation", asOf: "2026-10-11",
      title: "Reconciliation, drones and a defence pact",
      dek: "Erdoğan flew to Jeddah in 2022 to make peace. Since then Saudi money has flowed to Turkey, Turkish drones to Saudi Arabia, and in August 2026 the two joined Pakistan in a mutual defence pact.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa_tr/sa_tr-3-hero.webp",
          alt: "Illustration of a large military drone with long wings parked outside a hangar on a desert airfield at dawn.",
          caption: "Saudi Arabia signed Turkey's biggest defence export deal, for Akıncı drones, in July 2023.",
          credit: "Illustration — not a photograph",
          prompt: "A large grey military drone with long straight wings and twin engines parked outside an open hangar on a desert airfield at dawn, sand-coloured hills behind, long shadows, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From rivals to allies", items: [
          ["28 Apr 2022", "Erdoğan visits Jeddah"],
          ["Jun 2022", "Mohammed bin Salman visits Ankara"],
          ["Mar 2023", "Saudi Arabia deposits $5 billion in Turkey's central bank"],
          ["18 Jul 2023", "Saudi Arabia signs for Baykar's Akıncı drones"],
          ["2026", "Talks on Saudi purchase of Turkey's KAAN fighter"],
          ["7 Aug 2026", "Turkey joins the Saudi–Pakistan defence pact"]
        ] },
        { type: "section", head: "Making up", md:
          "By 2021 Turkey's economy was in crisis, with a collapsing lira and high inflation, and Erdoğan needed Gulf money. After repairing ties with the UAE, he flew to Jeddah on 28 April 2022, his first visit since Khashoggi's death, and met King Salman and the crown prince. In June Mohammed bin Salman visited Ankara. The boycott was lifted, trade recovered, and in March 2023 Saudi Arabia deposited $5 billion in Turkey's central bank to shore up the lira." },
        { type: "section", head: "Drones", md:
          "Defence became the core of the new relationship. Turkish drones had proved themselves in Libya, Syria, Nagorno-Karabakh and Ukraine, and Saudi Arabia wanted both the weapons and the technology. On 18 July 2023, during a Gulf tour by Erdoğan, Saudi Arabia signed a contract for Baykar's Akıncı attack drones, described as the largest defence export deal in Turkey's history, with agreements for part of the production to move to the kingdom. In 2026 talks advanced on a Saudi purchase of Turkey's new KAAN fighter jet." },
        { type: "section", head: "Mediators and rivals", md:
          "The two still compete for influence. Both claim to speak for the Palestinians, both mediate in conflicts from Sudan to Ukraine (see [[lesson:tr-7]]), and both court Syria's new government after the fall of Assad in December 2024. But their goals now overlap more than they clash: stability in the Gulf, an end to the Gaza and Iran wars, and less dependence on an unpredictable United States." },
        { type: "section", head: "The Mecca pact", md:
          "On 7 August 2026 Turkey joined Saudi Arabia and Pakistan in the Mecca Joint Defence Agreement, extending their 2025 pact (see [[lesson:sa_pk-3]]): an armed attack on any one would be treated as an attack on all three. On 5 October, after Houthi attacks on the kingdom, the three agreed to deploy forces and military capabilities to Saudi Arabia. Turkey's parliament must still ratify the pact." },
        { type: "section", head: "A NATO member's choice", md:
          "Turkey's membership of NATO makes the pact unusual: an alliance member has promised to defend states far outside the alliance's area. Analysts say it does not legally conflict with NATO obligations, but it could draw Turkey into wars in the Gulf or Yemen that its allies want no part of." },
        { type: "compare", head: "What each gains",
          left: { head: "Saudi Arabia", md:
            "Drones, defence technology and a powerful army beside it, beyond US dependence." },
          right: { head: "Turkey", md:
            "Gulf money, arms export markets and a bigger role in the Middle East." } },
        { type: "section", head: "Why it matters", md:
          "Two former rivals for leadership of the Sunni world are now military partners. The Mecca pact could reshape the region's security if it turns from paper into troops." }
      ],
      takeaways: [
        "Erdoğan visited Jeddah in April 2022 to end the Khashoggi rift; Saudi Arabia then deposited $5 billion in Turkey's central bank.",
        "Saudi Arabia signed Turkey's largest arms export deal, for Akıncı drones, in July 2023.",
        "Turkey joined the Saudi–Pakistan mutual defence pact on 7 August 2026, creating the Mecca Joint Defence Agreement."
      ],
      check: { q: "What did Saudi Arabia buy from Turkey in July 2023?",
        choices: ["Tanks", "Akıncı attack drones", "A nuclear reactor"], answer: 1,
        explain: "It was the largest export deal in Turkey's defence history." },
      sources: [
        { title: "Turkish drone-maker Baykar signs major export deal with Saudi Arabia", publisher: "Anadolu Agency", url: "https://www.aa.com.tr/en/turkiye/turkish-drone-maker-baykar-signs-major-export-deal-with-saudi-arabia/2948465", date: "2023-07-18" },
        { title: "Erdogan meets Saudi leaders in first visit since Khashoggi murder", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2022/4/28/turkeys-erdogan-to-visit-saudi-arabia-relations-warm", date: "2022-04-28" },
        { title: "Saudi Arabia advances toward Kaan fighter deal with Türkiye in 2026", publisher: "Army Recognition", url: "https://www.armyrecognition.com/news/aerospace-news/2026/saudi-arabia-advances-toward-kaan-fighter-deal-with-tuerkiye-in-2026", date: "2026" },
        { title: "Diversification Without Substitution: What the Mecca Joint Defense Agreement Offers Saudi Arabia", publisher: "Arab Center Washington DC", url: "https://arabcenterdc.org/resource/diversification-without-substitution-what-the-mecca-joint-defense-agreement-offers-saudi-arabia/", date: "2026" },
        { title: "Turkiye, Pakistan agree Saudi Arabia military deployment under Mecca pact", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/10/5/mecca-alliance-agrees-to-activate-collective-deterrence-measures", date: "2026-10-05" }
      ]
    }
  ]
});
