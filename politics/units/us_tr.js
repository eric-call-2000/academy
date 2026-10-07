/* ============================================================
   Relationship — United States & Turkey 🇺🇸🇹🇷
   Cold War allies from the Truman Doctrine to the Jupiter
   missiles, and the quarrels over Cyprus; a failed coup, a
   preacher in Pennsylvania and Russian missiles; and Trump and
   Erdoğan's personal diplomacy over F-35s and Syria.
   Research note and sources: tools/research/us_tr.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_tr", {
  id: "us_tr",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_tr-1", kind: "relation", asOf: "2026-09-30",
      title: "Cold War allies",
      dek: "American aid in 1947 and Turkish troops in Korea made the two allies, and Turkey joined NATO in 1952. But the Cuban missile crisis and Cyprus showed that Washington would put its own interests first.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_tr/us_tr-1-hero.webp",
          alt: "Illustration of tall white missiles standing upright at a launch site on a dry hillside in the 1960s.",
          caption: "American Jupiter nuclear missiles were based in Turkey until 1963.",
          credit: "Illustration — not a photograph",
          prompt: "Three tall white 1960s ballistic missiles standing upright on launch pads on a dry Anatolian hillside, service towers and trucks beside them, clear sky, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Building an alliance", items: [
          ["1947", "Truman Doctrine: US aid to Turkey and Greece"],
          ["1950–53", "Turkish brigade fights in the Korean War"],
          ["1952", "Turkey joins NATO"],
          ["1962–63", "Jupiter missiles removed after the Cuban missile crisis"],
          ["1964", "Johnson's letter warns Turkey against invading Cyprus"],
          ["1975–78", "US arms embargo after Turkey's 1974 invasion of Cyprus"]
        ] },
        { type: "section", head: "The Truman Doctrine", md:
          "After the Second World War Stalin demanded bases on the Turkish Straits and territory in eastern Turkey. In March 1947 President Harry Truman asked Congress for aid to Turkey and Greece, promising to support free peoples resisting outside pressure: the Truman Doctrine, often seen as the start of American containment of the Soviet Union. Turkey proved its loyalty in Korea, sending a brigade that fought hard alongside American troops; more than 700 Turkish soldiers died there. In 1952 Turkey joined NATO, and the United States built the Incirlik air base in the south and listening posts near the Soviet border." },
        { type: "section", head: "Missiles and a secret deal", md:
          "In 1961 the United States placed Jupiter nuclear missiles in Turkey, within range of Moscow. When the Soviet Union put missiles in Cuba in 1962, part of the secret deal that ended the crisis was that America would remove the Jupiters; they left in April 1963. Turkey was not consulted, and many Turks later felt their security had been traded away over their heads. American nuclear bombs are still stored at Incirlik under NATO arrangements." },
        { type: "section", head: "The Cyprus quarrels", md:
          "Cyprus caused the deepest rifts (see [[lesson:tr-12]]). In 1964, as Turkey prepared to intervene to protect Turkish Cypriots, President Lyndon Johnson sent Prime Minister İsmet İnönü a blunt letter warning that NATO might not defend Turkey if the Soviets responded, and that American weapons could not be used. A CIA cable said the letter did more damage to relations than any other single act. When Turkey did invade in 1974, Congress imposed an arms embargo on it from 1975 to 1978; Turkey closed American bases in response, and began building its own defence industry." },
        { type: "compare", head: "Two lessons",
          left: { head: "Ally", md:
            "America helped Turkey resist Stalin and made it part of the West; Turkey guarded NATO's southern flank." },
          right: { head: "Unreliable friend", md:
            "Washington traded Turkey's missiles for Cuba and punished it over Cyprus. Turkey must rely on itself." } },
        { type: "section", head: "After the Cold War", md:
          "When the Soviet Union collapsed, the alliance found new work. Incirlik served American jets over Iraq after the 1991 Gulf War. But on 1 March 2003 the Turkish parliament voted down a request to let American troops cross Turkey to invade Iraq, a shock in Washington. Many Americans saw it as a sign that Turkey would no longer simply follow their lead." },
        { type: "section", head: "Why it matters", md:
          "The Cold War shaped Turkish suspicion that America treats it as a tool. That feeling underlies Turkey's drive for its own weapons and its willingness to buy from Russia." }
      ],
      takeaways: [
        "The 1947 Truman Doctrine and the Korean War made the two allies; Turkey joined NATO in 1952.",
        "The US removed Jupiter missiles from Turkey in 1963 as part of the Cuban missile crisis deal.",
        "Johnson's 1964 letter and the 1975–78 arms embargo over Cyprus left lasting Turkish resentment."
      ],
      check: { q: "Why did the US impose an arms embargo on Turkey in 1975?",
        choices: ["Turkey bought Russian missiles", "Turkey invaded Cyprus in 1974", "Turkey left NATO"], answer: 1,
        explain: "Congress imposed it over the invasion; Turkey closed US bases and it was lifted in 1978." },
      sources: [
        { title: "The Jupiter Missiles and the Endgame of the Cuban Missile Crisis, 60 Years Ago", publisher: "National Security Archive", url: "https://nsarchive.gwu.edu/briefing-book/cuban-missile-crisis-nuclear-vault/2023-02-16/jupiter-missiles-and-endgame-cuban", date: "2023-02-16" },
        { title: "Foreign Relations of the United States, 1964–68, Vol. XVI (Cyprus; Greece; Turkey), Document 54", publisher: "US Office of the Historian", url: "https://history.state.gov/historicaldocuments/frus1964-68v16/d54", date: "1964" },
        { title: "The U.S. Arms Embargo of 1975-1978 and Its Effects on the Development of the Turkish Defense Industry", publisher: "Naval Postgraduate School", url: "https://calhoun.nps.edu/handle/10945/43905", date: "2015" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_tr-2", kind: "relation", asOf: "2026-09-30",
      title: "A coup, a preacher and Russian missiles",
      dek: "After a failed coup in 2016, Turkey blamed a cleric living in Pennsylvania. It jailed an American pastor, backed Syrian Kurds' enemies and bought Russian S-400 missiles, and was thrown out of the F-35 programme.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_tr/us_tr-2-hero.webp",
          alt: "Illustration of a bridge across a strait at night with military vehicles on it and city lights beyond.",
          caption: "Soldiers blocked the Bosphorus Bridge in Istanbul during the coup attempt of July 2016.",
          credit: "Illustration — not a photograph",
          prompt: "A large suspension bridge across a strait at night with military vehicles and tanks blocking it, city lights and mosque domes on the far shore, dark sky with searchlights, tense documentary mood, faces not visible, no flags, no legible text." },
        { type: "timeline", head: "A relationship in crisis", items: [
          ["2014–15", "US arms Syrian Kurds whom Turkey sees as the PKK"],
          ["15 Jul 2016", "Failed coup; Turkey blames Fethullah Gülen"],
          ["2016–18", "American pastor Andrew Brunson jailed"],
          ["Aug 2018", "US sanctions and tariffs; the lira crashes"],
          ["Jul 2019", "S-400 arrives; Turkey removed from the F-35 programme"],
          ["Dec 2020", "US sanctions Turkey's defence procurement agency"]
        ] },
        { type: "section", head: "The Kurds of Syria", md:
          "The war against the Islamic State split the allies. From 2014 the United States armed and fought alongside the Syrian Kurdish YPG militia, the backbone of the Syrian Democratic Forces (SDF), as the most effective force against the jihadists. Turkey saw the YPG as a branch of the PKK, which has waged an insurgency in Turkey since 1984 (see [[lesson:tr-6]]), and was furious that its NATO ally was arming its enemies. Turkey launched several offensives against the Kurds in northern Syria; in 2019 Trump pulled back American troops from part of the border just before one, then threatened to 'obliterate' Turkey's economy if it went too far." },
        { type: "section", head: "The coup and Gülen", md:
          "On the night of 15 July 2016, a faction of the army tried to overthrow President Recep Tayyip Erdoğan; about 250 people were killed before the coup collapsed (see [[lesson:tr-11]]). Turkey blamed Fethullah Gülen, a Muslim preacher living in Pennsylvania since 1999, whose movement had once been Erdoğan's ally, and demanded his extradition. Washington said Turkey had not provided enough evidence. Turkey then detained American citizens and local US consulate staff, including Andrew Brunson, a pastor from North Carolina. In August 2018 Trump sanctioned two Turkish ministers and doubled tariffs on Turkish steel; the lira crashed, and Brunson was freed that October. Gülen died in Pennsylvania in October 2024." },
        { type: "section", head: "S-400 and the F-35", md:
          "Turkey was a partner in building the F-35 stealth fighter and planned to buy about 100. But in 2017 it agreed to buy Russia's S-400 air-defence system, which American officials warned could gather data on the F-35's stealth. When the S-400 arrived in July 2019, the Trump administration removed Turkey from the F-35 programme. In December 2020 it imposed sanctions under CAATSA, a law punishing major arms purchases from Russia, on Turkey's defence procurement agency, the first time the law was used against a NATO ally. Congress also barred any F-35 sale while Turkey keeps the S-400." },
        { type: "compare", head: "Who broke trust?",
          left: { head: "Ankara's view", md:
            "America armed Kurdish terrorists, sheltered the coup's alleged leader and would not sell Turkey air defences on fair terms." },
          right: { head: "Washington's view", md:
            "Turkey jailed Americans, attacked US partners in Syria and bought Russian weapons against NATO's wishes." } },
        { type: "section", head: "Why it matters", md:
          "These disputes left Turkey outside the West's most advanced weapons programme and pushed it to build its own drones and jets, making it a more independent, and less predictable, ally." }
      ],
      takeaways: [
        "US support for Syrian Kurdish fighters infuriated Turkey, which sees them as the PKK.",
        "After the 2016 coup attempt Turkey blamed Gülen, in Pennsylvania, and jailed pastor Andrew Brunson.",
        "Turkey's purchase of Russia's S-400 got it removed from the F-35 programme in 2019 and sanctioned in 2020."
      ],
      check: { q: "Why was Turkey removed from the F-35 programme?",
        choices: ["It invaded Cyprus", "It bought Russia's S-400 air-defence system", "It left NATO"], answer: 1,
        explain: "The S-400 arrived in July 2019; CAATSA sanctions followed in December 2020." },
      sources: [
        { title: "Turkey: U.S. Sanctions Under the Countering America's Adversaries Through Sanctions Act (CAATSA)", publisher: "Congressional Research Service", url: "https://www.everycrsreport.com/reports/IN11557.html", date: "2020-12" },
        { title: "Turkey (Türkiye): Major Issues and U.S. Relations", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs_external_products/R/PDF/R44000/R44000.120.pdf", date: "2025-09-15" },
        { title: "The S-400 Knot in U.S.-Turkey Relations: Assessing the Viability of U.S. Sanctions", publisher: "Lawfare", url: "https://www.lawfaremedia.org/article/s-400-knot-us-turkey-relations-assessing-viability-us-sanctions", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_tr-3", kind: "relation", asOf: "2026-09-30",
      title: "Trump, Erdoğan and the F-35",
      dek: "Donald Trump calls Erdoğan a friend and has promised to lift sanctions and consider selling Turkey F-35s again. Congress and Israel stand in the way, and the Russian missiles are still in Turkey.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_tr/us_tr-3-hero.webp",
          alt: "Illustration of a stealth fighter jet parked in a hangar with its canopy open, lit by overhead lights.",
          caption: "Turkey wants to rejoin the F-35 programme it was expelled from in 2019.",
          credit: "Illustration — not a photograph",
          prompt: "A grey stealth fighter jet with angular lines parked inside a large clean hangar with its canopy open, bright overhead lights reflecting on the floor, technicians' tools nearby, no people, no markings, no flags, no legible text." },
        { type: "timeline", head: "Personal diplomacy", items: [
          ["Dec 2024", "Assad falls; Turkey becomes the key outside power in Syria"],
          ["25 Sep 2025", "Erdoğan at the White House; no F-35 deal"],
          ["Jan 2026", "US-brokered deal to fold the SDF into Syria's army"],
          ["Jul 2026", "NATO summit in Ankara; Trump says he will lift sanctions"],
          ["Aug 2026", "The S-400s are still in Turkey; Congress blocks F-35s"],
          ["2026", "Turkey courts the US as a mediator on Gaza and Ukraine"]
        ] },
        { type: "section", head: "Friends at the top", md:
          "Trump and Erdoğan have a warm personal relationship; Trump praises Erdoğan as a strong leader. The fall of Assad in Syria in December 2024 made Turkey the most influential outside power there, and the American envoy Tom Barrack, who is also ambassador to Turkey, worked closely with Ankara. In January 2026 he helped broker a deal under which the SDF, America's old Kurdish-led ally, would be folded into the new Syrian army, a big win for Turkey. Erdoğan visited the White House on 25 September 2025, and Turkey agreed to buy Boeing airliners, but left without the F-35s he wanted." },
        { type: "section", head: "The F-35 question", md:
          "In July 2026, after the NATO summit in Ankara, Trump said he would lift the 2020 sanctions on Turkey and that selling it F-35s was 'certainly something we will consider'. But a 2020 law bars any sale unless Turkey gets rid of the S-400s, which, as of August 2026, were still in the country; Turkey has proposed various compromises, such as storing them unused. Israel, worried by Turkey's hostility over Gaza and its role in Syria (see [[lesson:tr_il-3]]), has lobbied hard against a sale, and many in Congress agree. Meanwhile Turkey has bought Eurofighter jets from Europe (see [[lesson:de_tr-3]]) and is developing its own fighter, the KAAN." },
        { type: "section", head: "A useful middleman", md:
          "Turkey has made itself useful to Washington in other ways. It hosted Russia–Ukraine talks in Istanbul and helped broker prisoner swaps (see [[lesson:tr-7]]), it has contacts with Hamas, and it controls the Bosphorus. Erdoğan also cast himself as a voice for Gaza, clashing with Israel's government, which complicates Washington's view of him. American critics point to his jailing of opponents such as Istanbul's mayor, Ekrem İmamoğlu (see [[lesson:tr-5]]); the Trump administration has said little." },
        { type: "compare", head: "Sell Turkey the F-35?",
          left: { head: "Yes", md:
            "Turkey has NATO's second-largest army; bringing it back into American weapons programmes pulls it away from Russia." },
          right: { head: "No", md:
            "Not while it keeps Russian missiles, threatens Israel and jails its opponents. The 2020 law is clear." } },
        { type: "section", head: "Why it matters", md:
          "Turkey sits between Europe, Russia and the Middle East. Whether it stays anchored to the United States affects NATO, Syria and the balance of power around the Black Sea. The F-35 decision will show which way both leaders want the alliance to go." }
      ],
      takeaways: [
        "Trump and Erdoğan have a warm relationship; a US envoy helped Turkey get a deal on Syria's Kurds in 2026.",
        "Trump said in July 2026 he would lift sanctions and consider F-35 sales, but Congress requires the S-400s to go.",
        "Israel lobbies against selling Turkey F-35s, while Turkey builds its own fighter and buys Eurofighters."
      ],
      check: { q: "What stands in the way of Turkey getting F-35s?",
        choices: ["Turkey does not want them", "A US law barring the sale while Turkey keeps Russia's S-400s", "NATO rules"], answer: 1,
        explain: "Trump said he would consider a sale, but the S-400s were still in Turkey as of August 2026." },
      sources: [
        { title: "Trump says will lift sanctions on Turkiye, 'consider' selling F-35s", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/7/trump-says-will-lift-sanctions-on-turkiye-consider-selling-f-35s", date: "2026-07-07" },
        { title: "F-35 for Turkey? Trump says 'certainly, we'll consider' reversing ban", publisher: "Breaking Defense", url: "https://breakingdefense.com/2026/07/f-35-for-turkey-trump-says-certainly-well-consider-reversing-ban/", date: "2026-07" },
        { title: "Erdogan Leaves Washington Empty-Handed on F-35s?", publisher: "FDD", url: "https://www.fdd.org/analysis/2025/10/10/erdogan-leaves-washington-empty-handed-on-f-35s/", date: "2025-10-10" },
        { title: "How Turkey and the Syrian Interim Government Outmanoeuvred the U.S. and the SDF in Syria", publisher: "Manara Magazine", url: "https://manaramagazine.org/2026/02/turkey-syrian-government-us-sdf-syria/", date: "2026-02" }
      ]
    }
  ]
});
