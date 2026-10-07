/* ============================================================
   Relationship — United Kingdom & Argentina 🇬🇧🇦🇷
   Two claims to the Falkland Islands (Malvinas), the long road
   from war to wary partnership, and the squid and oil that now
   drive the dispute. The 1982 war itself is in ar-11 and gb-10.
   Research note and sources: tools/research/gb_ar.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("gb_ar", {
  id: "gb_ar",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb_ar-1", kind: "relation", asOf: "2026-09-30",
      title: "Two claims to the islands",
      dek: "Britain has held the Falkland Islands since 1833. Argentina, which calls them the Malvinas, says they were taken from it by force. The 3,600 islanders say the choice should be theirs.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ar/gb_ar-1-hero.webp",
          alt: "Illustration of a small harbour town of brightly painted houses with red and green roofs on a windswept treeless shore, under a big grey sky.",
          caption: "Stanley, the islands' capital, is home to most of the Falklands' roughly 3,600 people.",
          credit: "Illustration — not a photograph",
          prompt: "A small harbour town of brightly painted wooden houses with red, green and blue roofs on a windswept treeless shore, a church, a calm grey bay with a small boat, low hills of pale grass, huge sky with fast clouds, remote and tidy, no people, no flags, no legible text." },
        { type: "timeline", head: "A contested history", items: [
          ["1764–67", "French, then British, then Spanish settlements"],
          ["1820s", "Buenos Aires claims the islands and sends a governor"],
          ["Jan 1833", "Britain takes control and expels the Argentine garrison"],
          ["1965", "UN resolution 2065 calls for negotiations"],
          ["1982", "Argentina invades; Britain retakes the islands"],
          ["1994", "Argentina writes the claim into its constitution"],
          ["Mar 2013", "Islanders vote 99.8% to remain British"]
        ] },
        { type: "section", head: "Argentina's case", md:
          "Argentina says the islands passed to it from Spain when it won independence in 1816, and that in January 1833 a British warship expelled its garrison and officials, an act of force it has protested ever since. It points to geography, the islands lie on South America's continental shelf, 480 km from its coast, and to decolonisation. In 1965 UN General Assembly resolution 2065 recognised a sovereignty dispute and invited both governments to negotiate, taking account of the islanders' 'interests'. Argentina's 1994 constitution calls recovering the islands 'a permanent and unrenounceable goal of the Argentine people', to be pursued peacefully." },
        { type: "section", head: "Britain's case", md:
          "Britain says it claimed the islands in 1765, before Argentina existed, and has governed them continuously since 1833 apart from 74 days in 1982. Above all it relies on self-determination, a right in the UN Charter: the islanders, many of them descended from settlers who arrived in the 19th century, are a people who can choose their own government. In a referendum in March 2013, with turnout of 92%, 1,513 voters chose to remain a British Overseas Territory and three voted against. Britain says it will not discuss sovereignty unless the islanders want it to." },
        { type: "section", head: "The islanders", md:
          "The 2021 census counted 3,662 people, most of them in Stanley. Some families have been there for six or more generations; others arrived more recently from Britain, Saint Helena, Chile and the Philippines. The islands elect their own Legislative Assembly, which runs everything except defence and foreign affairs, which London handles. Most islanders say they have no wish to become Argentine." },
        { type: "compare", head: "Two principles",
          left: { head: "Territorial integrity", md:
            "The islands were Argentine territory seized by a colonial power. The people Britain settled there cannot decide a dispute between states." },
          right: { head: "Self-determination", md:
            "The islanders have lived there for nine generations. No one should be handed to another country against their will." } },
        { type: "section", head: "Why it matters", md:
          "For Argentines the Malvinas are a national cause taught in every school; 2 April, the date of the 1982 invasion, is a holiday for its veterans (see [[lesson:ar-11]]). For Britain the islands are a test of its promise to protect small territories. Argentina's president, Javier Milei, an admirer of Margaret Thatcher, once spoke of recovering them through diplomacy over decades. At the UN on 23 September 2026 he called them 'a national cause' and accused the UN of 'looking the other way'; British officials replied the same day that the UK 'has no doubt about its sovereignty'." }
      ],
      takeaways: [
        "Britain took control of the islands in 1833; Argentina says they were seized from it by force.",
        "Britain rests its case on the islanders' right to self-determination; they voted 99.8% to stay British in 2013.",
        "Argentina's claim is written into its constitution, and Milei renewed it at the UN in September 2026."
      ],
      check: { q: "What principle does Britain mainly rely on to keep the Falklands?",
        choices: ["Distance from Argentina", "The islanders' right to self-determination", "A UN resolution in its favour"], answer: 1,
        explain: "Britain argues the islanders are a people with the right to choose their government, and they voted overwhelmingly to remain British." },
      sources: [
        { title: "United Nations General Assembly Resolution 2065 (XX)", publisher: "UN Documents, City University London", url: "https://www.staff.city.ac.uk/p.willetts/SAC/UN/UN-LIST.HTM", date: "1965-12-16" },
        { title: "Overwhelming turnout and YES vote in the Falklands referendum", publisher: "MercoPress", url: "https://en.mercopress.com/2013/03/12/overwhelming-turnout-and-yes-vote-in-the-falklands-referendum", date: "2013-03-12" },
        { title: "Falkland Islands", publisher: "Britannica", url: "https://www.britannica.com/place/Falkland-Islands", date: "n.d." },
        { title: "Argentina's Milei says UN 'looking the other way' on Falkland Islands", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/23/milei-says-un-looking-the-other-way-on-falkland-islands-dispute", date: "2026-09-23" },
        { title: "Milei at the UN: 'The Malvinas are a national cause for us'", publisher: "MercoPress", url: "https://en.mercopress.com/2026/09/23/milei-at-the-un-the-malvinas-are-a-national-cause-for-us", date: "2026-09-23" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb_ar-2", kind: "relation", asOf: "2026-09-30",
      title: "From enemies to wary partners",
      dek: "Eight years after the war, Britain and Argentina restored relations by agreeing to disagree. Since then the relationship has warmed and cooled with each Argentine government.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ar/gb_ar-2-hero.webp",
          alt: "Illustration of rows of white wooden crosses in a fenced cemetery on a windswept hillside, with a stone wall and low grey sky.",
          caption: "The Argentine military cemetery at Darwin in the Falklands, where families of the fallen have been allowed to visit.",
          credit: "Illustration — not a photograph",
          prompt: "Rows of simple white wooden crosses in a fenced cemetery on a windswept grassy hillside, a curved stone memorial wall, a few plastic flowers, low grey sky over a distant inlet, quiet and mournful, no people, no flags, no legible text." },
        { type: "timeline", head: "Thaws and chills", items: [
          ["Jun 1982", "Argentina surrenders after 74 days"],
          ["Feb 1990", "Relations restored under a 'sovereignty umbrella'"],
          ["1999", "Argentines allowed to visit; a weekly flight via Chile"],
          ["2007–15", "Kirchner governments harden the claim"],
          ["2016", "Macri government signs a joint statement on cooperation"],
          ["2017–18", "Red Cross begins identifying unnamed Argentine war dead"],
          ["Sep 2024", "Milei's government agrees new flights and fisheries talks"]
        ] },
        { type: "section", head: "Agreeing to disagree", md:
          "The 1982 war killed 649 Argentine and 255 British servicemen and three islanders, and brought down Argentina's military junta (see [[lesson:ar-11]]). Talks in Madrid in 1989–90 found a formula: a 'sovereignty umbrella' under which both sides reserved their positions and cooperated on everything else. Diplomatic relations were restored in February 1990. Under President Carlos Menem, Argentina courted the islanders and in 1995 signed a joint declaration on oil exploration. A 1999 agreement let Argentine passport holders visit the islands again and started a weekly flight from Chile with a monthly stop in Argentina." },
        { type: "section", head: "Chills and thaws", md:
          "Under Néstor and Cristina Fernández de Kirchner (2003–15) Argentina pulled out of the oil declaration, persuaded its South American neighbours to turn away ships flying the Falklands flag, passed laws to punish companies drilling in Falklands waters, and pressed the claim loudly at the UN and in Latin America. Mauricio Macri, president from 2015, signed a joint statement with Britain in 2016 promising cooperation on trade, flights and the war dead. For decades veterans' groups and families had campaigned to have unnamed Argentine graves on the islands identified, and both governments now asked the International Committee of the Red Cross to do it. With Red Cross help, forensic teams have since identified more than 120 Argentine soldiers once buried as 'known only unto God', and their families have visited their graves." },
        { type: "section", head: "Milei's turn", md:
          "Milei took office in 2023 praising Thatcher and seeking British investment. In September 2024 his foreign minister and Britain's foreign secretary agreed to restart a weekly flight from São Paulo to the islands with a monthly stop in Córdoba, to resume humanitarian work and to cooperate on fisheries. They also promised a flight for families of the fallen to visit the Argentine cemetery at Darwin before the end of that year. By 2026, though, oil development near the islands had pushed him to escalate (see [[lesson:gb_ar-3]])." },
        { type: "compare", head: "Two strategies",
          left: { head: "Seduction", md:
            "Menem, Macri and at first Milei tried to win islanders over with contacts, flights and cooperation, hoping to ease sovereignty talks one day." },
          right: { head: "Pressure", md:
            "The Kirchners tried to isolate the islands and raise their costs, rallying Latin America behind Argentina's claim." } },
        { type: "section", head: "Why it matters", md:
          "Neither approach has changed British policy or the islanders' views. But the relationship shows how former enemies can build practical ties, from trade to identifying war dead, while leaving their deepest dispute untouched. For Argentine presidents, the Malvinas remain a cause no leader can be seen to abandon." }
      ],
      takeaways: [
        "Britain and Argentina restored relations in 1990 under a 'sovereignty umbrella' that set the dispute aside.",
        "Argentine governments have alternated between courting the islanders and pressuring them.",
        "Under Milei the two agreed new flights and fisheries cooperation in 2024, before tensions rose again over oil."
      ],
      check: { q: "What was the 'sovereignty umbrella' agreed in 1989–90?",
        choices: ["A shared British–Argentine government for the islands", "A formula letting both sides keep their claims while cooperating", "A UN peacekeeping force"], answer: 1,
        explain: "Under the umbrella both governments reserved their positions on sovereignty and restored relations and cooperation on other issues." },
      sources: [
        { title: "Falkland Islands War", publisher: "Britannica", url: "https://www.britannica.com/event/Falkland-Islands-War", date: "n.d." },
        { title: "ICRC presents results of humanitarian forensic identification project", publisher: "ICRC", url: "https://www.icrcnewsroom.org/story/en/458/falkland-malvinas-islands-icrc-presents-results-of-humanitarian-forensic-identification-project", date: "n.d." },
        { title: "UK, Argentina agree on 1st joint positive statement on Falklands since 1999", publisher: "Sputnik via GlobalSecurity.org", url: "https://www.globalsecurity.org/military/library/news/2016/09/mil-160914-sputnik02.htm", date: "2016-09-14" },
        { title: "Argentina and UK agree to resume flights from Córdoba to Malvinas Islands", publisher: "Buenos Aires Times", url: "https://www.batimes.com.ar/news/argentina/argentina-and-uk-agree-to-resume-flights-from-cordoba-to-malvinas-islands.phtml", date: "2024-09" },
        { title: "Falklands support of new cooperation agreement between UK and Argentina", publisher: "MercoPress", url: "https://en.mercopress.com/2024/09/25/falklands-support-of-new-cooperation-agreement-between-uk-and-argentina", date: "2024-09-25" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb_ar-3", kind: "relation", asOf: "2026-09-30",
      title: "Squid, oil and Sea Lion",
      dek: "The islands grew rich on fishing licences. Now an oil field is heading for its first barrels, and Argentina's president has threatened to take Britain to an international court.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ar/gb_ar-3-hero.webp",
          alt: "Illustration of a large oil production ship moored in a rough grey ocean, with a supply boat alongside and seabirds overhead.",
          caption: "Sea Lion, 220 km north of the islands, is due to start producing oil from a converted production ship in 2028.",
          credit: "Illustration — not a photograph",
          prompt: "A large floating oil production ship moored in a rough grey South Atlantic ocean, a small orange supply boat alongside, albatrosses gliding overhead, heavy clouds and spray, remote and industrial, no people visible, no flags, no legible text." },
        { type: "facts", head: "Sea Lion", rows: [
          ["Discovered", "2010, by Rockhopper Exploration"],
          ["Location", "North Falkland Basin, about 220 km north of the islands"],
          ["Developers", "Navitas Petroleum (Israel, operator) and Rockhopper (UK)"],
          ["Phase 1", "About 170 million barrels; peak 50,000 barrels a day"],
          ["Investment decision", "December 2025; first oil planned for 2028"]
        ] },
        { type: "section", head: "Squid", md:
          "Before 1982 the Falklands were a poor, shrinking sheep-farming colony. In 1986 Britain declared a fishing zone around them, and the islands' government began selling licences to foreign trawlers, many from Spain, Taiwan and South Korea. Squid, most of it sold to Spain, is the bulk of the catch. Licence fees, about £30 million in 2022, turned the islands into one of the richest places per head in the region; they pay for their own schools, hospital and roads, though Britain covers defence. Argentina fishes the same squid stocks and says the licences are illegal, but the two sides share some scientific data, and in 2024 agreed to cooperate on fisheries. Hundreds of foreign squid boats also work just outside both zones, and scientists in Buenos Aires and Stanley alike worry about overfishing." },
        { type: "section", head: "Oil", md:
          "Oil was found north of the islands in 2010. Argentina responded with laws to fine and ban companies working there, and in 2022 it sanctioned Navitas, the Israeli company that became Sea Lion's operator. In December 2025 Navitas and Rockhopper took the final investment decision: $1.8 billion in funding to reach first oil in 2028 from a converted production ship, the Aoka Mizu. Phase 1 is only the start: the wider field is estimated to hold far more oil, and later phases could keep it producing for decades. Royalties and taxes could transform the islanders' finances, though environmental groups warn of the risks to the islands' penguins, seabirds and marine life." },
        { type: "section", head: "Milei's ultimatum", md:
          "On 28 September 2026, days after his UN speech, Milei called the project 'the illegal plundering of our resources' and gave Britain two weeks to halt all work. Otherwise, he said, Argentina would start arbitration under the UN Convention on the Law of the Sea and ask the International Tribunal for the Law of the Sea in Hamburg to order a stop. The companies said their British-issued licences were valid, and Britain says the islanders have the right to develop their own resources. The deadline falls in mid-October." },
        { type: "compare", head: "Whose resources?",
          left: { head: "Buenos Aires", md:
            "The seabed belongs to Argentina's continental shelf. UN resolutions bar unilateral steps while the dispute continues, and drilling is one." },
          right: { head: "London and Stanley", md:
            "The islanders govern their own waters under British sovereignty, and their economy should not be held hostage to Argentina's claim." } },
        { type: "section", head: "Why it matters", md:
          "Money is changing the dispute. Fishing already made the islands self-supporting; oil could make them wealthy, and less likely than ever to consider Argentina's offers. For Milei, facing economic strain at home, a legal fight over oil lets him defend the national cause without abandoning his pro-Western foreign policy. Whether an international court will take the case, and what Britain does, will shape the next chapter." }
      ],
      takeaways: [
        "Fishing licences, mostly for squid, made the Falklands self-supporting after 1986.",
        "The Sea Lion oil field reached a final investment decision in December 2025, with first oil planned for 2028.",
        "On 28 September 2026 Milei gave Britain two weeks to halt Sea Lion or face international legal action."
      ],
      check: { q: "What did Milei threaten to do over Sea Lion in September 2026?",
        choices: ["Send troops", "Take Britain to an international maritime tribunal", "Close Argentina's airspace"], answer: 1,
        explain: "He said Argentina would start arbitration under the Law of the Sea convention unless work stopped within two weeks." },
      sources: [
        { title: "Final Investment Decision on Sea Lion", publisher: "Rockhopper Exploration", url: "https://rockhopperexploration.co.uk/2025/12/final-investment-decision-on-sea-lion/", date: "2025-12" },
        { title: "Argentina's Milei threatens to sue UK over Falkland Islands oil project", publisher: "France 24", url: "https://www.france24.com/en/americas/20260929-argentina-milei-arbitration-falklands-oil-project", date: "2026-09-29" },
        { title: "Milei orders arbitration proceedings against the UK over the Sea Lion project", publisher: "MercoPress", url: "https://en.mercopress.com/2026/09/29/milei-orders-arbitration-proceedings-against-the-uk-over-the-sea-lion-project", date: "2026-09-29" },
        { title: "Careful management of Falkland's fisheries boosts local economy and protects the region's ecosystem", publisher: "Eurofish", url: "https://eurofish.dk/careful-management-of-falklands-fisheries-boosts-local-economy-and-protects-the-regions-ecosystem/", date: "n.d." }
      ]
    }
  ]
});
