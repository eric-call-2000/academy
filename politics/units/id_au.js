/* ============================================================
   Relationship — Indonesia & Australia 🇮🇩🇦🇺
   Close neighbours with very different histories: from Indonesian
   independence and East Timor, through crises over cattle, spies
   and executions, to boats, a new security treaty and Russia's
   interest in Papua. East Timor is in id-11; boats in au-12.
   Research note and sources: tools/research/id_au.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("id_au", {
  id: "id_au",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "id_au-1", kind: "relation", asOf: "2026-09-30",
      title: "Neighbours from Timor to Lombok",
      dek: "Australia backed Indonesian independence, then fought it in Borneo, accepted its invasion of East Timor and later led the troops that saw East Timor free. Trust has been rebuilt slowly.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id_au/id_au-1-hero.webp",
          alt: "Illustration of military transport ships anchored off a tropical coastline with hills behind, and small landing craft heading to shore.",
          caption: "In September 1999 Australia led INTERFET, the international force that restored order in East Timor.",
          credit: "AI illustration — not a photograph",
          prompt: "Grey military transport ships anchored off a tropical coastline with dry brown hills and palm trees, small landing craft heading toward a sandy shore, hazy morning light, calm but purposeful, no people close up, no flags, no legible text or markings." },
        { type: "timeline", head: "Ups and downs", items: [
          ["1945–49", "Australia backs Indonesia's independence at the UN"],
          ["1963–66", "Konfrontasi: Australian troops fight Indonesian forces in Borneo"],
          ["1975", "Indonesia invades East Timor; Australia accepts it"],
          ["1995", "Keating and Suharto sign a security agreement"],
          ["1999", "East Timor votes for independence; Australia leads INTERFET"],
          ["2006", "Lombok Treaty on security cooperation"]
        ] },
        { type: "section", head: "Early friendship, then conflict", md:
          "When Indonesia declared independence from the Dutch in 1945, Australian dockworkers refused to load Dutch ships, and in 1947 Australia took the dispute to the UN Security Council on Indonesia's side. But under President Sukarno the relationship soured. From 1963 to 1966 Indonesia waged 'Konfrontasi', an undeclared conflict against the new federation of Malaysia, and Australian and British troops fought Indonesian forces in the jungles of Borneo. After General Suharto took power in 1965–66 (see [[lesson:id-10]]), Australia chose to work with his anti-communist New Order." },
        { type: "section", head: "East Timor", md:
          "In 1975 Indonesia invaded East Timor, a former Portuguese colony. Five journalists working for Australian television were killed at Balibo that October, an event still disputed. Australia became one of very few countries to recognise Indonesia's annexation, and in 1989 signed a treaty with Jakarta to share the oil and gas under the Timor Sea. In 1995 Paul Keating and Suharto signed a security agreement. Then, after Suharto's fall, East Timor voted for independence in August 1999, and pro-Indonesian militias went on a rampage (see [[lesson:id-11]]). Australia led the international force INTERFET, its largest overseas deployment since Vietnam, with over 5,500 troops. Indonesia, humiliated, tore up the 1995 agreement. The Timor Sea later brought Australia its own embarrassment: in 2004 its agents bugged East Timor's cabinet during talks over the seabed, a scandal that led to a new maritime boundary treaty in 2018." },
        { type: "section", head: "Rebuilding", md:
          "Cooperation returned after the 2002 Bali bombings, which killed 202 people, including 88 Australians. Australian police helped Indonesia track down the bombers and helped set up a joint law enforcement training centre in Java. In 2006 the two signed the Lombok Treaty, in which each pledged respect for the other's territorial integrity, a promise that mattered to Jakarta, which worried Australia might back independence movements in Papua." },
        { type: "compare", head: "Two views of 1999",
          left: { head: "Australian", md:
            "Australia helped a small nation escape violent occupation and restored order at the UN's request." },
          right: { head: "Indonesian", md:
            "Australia had accepted Indonesian rule for 24 years, then turned on Jakarta at its weakest moment." } },
        { type: "section", head: "Why it matters", md:
          "Indonesia, with about 280 million people, is Australia's giant northern neighbour, soon to be one of the world's largest economies. Few Australians speak Indonesian or visit beyond Bali, and many Indonesians see Australia as an outpost of the West. Bridging that gap has been a goal of every Australian government since the 1990s." }
      ],
      takeaways: [
        "Australia backed Indonesian independence in the 1940s but fought Indonesian forces in Borneo in the 1960s.",
        "It accepted Indonesia's 1975 invasion of East Timor, then led the 1999 INTERFET force that secured its independence.",
        "Cooperation revived after the 2002 Bali bombings, and the 2006 Lombok Treaty affirmed each other's territory."
      ],
      check: { q: "What was INTERFET?",
        choices: ["A trade deal", "The Australian-led force that restored order in East Timor in 1999", "An Indonesian airline"], answer: 1,
        explain: "After East Timor voted for independence and militias rampaged, Australia led the international force INTERFET." },
      sources: [
        { title: "Australian peacekeepers in East Timor (Timor-Leste) from 1999 to 2013", publisher: "Anzac Portal, Department of Veterans' Affairs", url: "https://anzacportal.dva.gov.au/wars-and-missions/peacekeeping/summaries/east-timor-1999-2013", date: "n.d." },
        { title: "This official history of Australia's role in the 1999 Timor-Leste crisis unpacks our 'military myths'", publisher: "ABC News", url: "https://www.abc.net.au/news/2023-02-09/history-of-australias-role-in-the-timor-leste-crisis/101944736", date: "2023-02-09" },
        { title: "Indonesia country brief", publisher: "Australian Department of Foreign Affairs and Trade", url: "https://www.dfat.gov.au/geo/indonesia/Pages/indonesia-country-brief", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "id_au-2", kind: "relation", asOf: "2026-09-30",
      title: "Cattle, spies and executions",
      dek: "In just four years, a ban on live cattle exports, revelations that Australia had tapped the Indonesian president's phone and the execution of two Australians sent relations into deep freeze.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id_au/id_au-2-hero.webp",
          alt: "Illustration of a large livestock ship loaded with cattle docked at a tropical port under a hot sky.",
          caption: "Indonesia is the biggest buyer of Australia's live cattle; a sudden ban in 2011 caused a diplomatic storm.",
          credit: "AI illustration — not a photograph",
          prompt: "A large white livestock carrier ship with many decks docked at a tropical port, cattle visible along the rails, cranes and palm trees, hot hazy sky, busy and industrial, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Four bad years", items: [
          ["Jun 2011", "Australia suspends live cattle exports to Indonesia for a month"],
          ["Nov 2013", "Leaks reveal Australia tried to tap President Yudhoyono's phone in 2009"],
          ["Nov 2013", "Indonesia recalls its ambassador and suspends cooperation"],
          ["Aug 2014", "Code of conduct on intelligence restores ties"],
          ["Apr 2015", "Bali Nine ringleaders executed; Australia recalls its ambassador"],
          ["Dec 2024", "Last five Bali Nine prisoners sent home by Prabowo"]
        ] },
        { type: "section", head: "The cattle ban", md:
          "Indonesia buys most of Australia's live cattle exports, and Australian cattle supply a large share of Indonesia's beef. On 30 May 2011 an Australian television programme showed footage of cattle being cruelly treated in some Indonesian abattoirs. Under intense public pressure, the government suspended all live cattle exports to Indonesia on 7 June. Jakarta was stunned that it had not been consulted; cattle stations in northern Australia were left with thousands of stranded animals. The ban was lifted after a month, but Indonesians saw it as high-handed, and it pushed Jakarta to seek other suppliers. Cattle owners later sued the Australian government, and in 2020 a court found the ban had been unlawful." },
        { type: "section", head: "The phone taps", md:
          "In November 2013, documents leaked by the former US intelligence contractor Edward Snowden showed that Australia's signals intelligence agency had tried in 2009 to monitor the mobile phones of President Susilo Bambang Yudhoyono, his wife and senior ministers. Protesters burned Australian flags in Jakarta. Indonesia recalled its ambassador, downgraded relations and suspended cooperation on people smuggling. Prime Minister Tony Abbott at first declined to apologise, but in August 2014 the two signed a code of conduct promising not to use intelligence to harm each other." },
        { type: "section", head: "The Bali Nine", md:
          "Drug cases had long strained ties; Schapelle Corby, an Australian jailed in Bali for smuggling cannabis in 2004, became a household name in both countries. In 2005 nine young Australians were arrested in Bali trying to smuggle 8.3 kilograms of heroin. Two ringleaders, Andrew Chan and Myuran Sukumaran, were sentenced to death. Despite years of appeals and evidence of their rehabilitation in prison, they were executed by firing squad in April 2015. Australia recalled its ambassador for the first time over an execution. In December 2024 President Prabowo Subianto sent the remaining five prisoners home to serve out their sentences, a gesture Canberra welcomed warmly." },
        { type: "compare", head: "Two views",
          left: { head: "Many Indonesians", md:
            "Australia lectures Indonesia, spies on its leaders and bans trade without warning. It should treat Indonesia as an equal." },
          right: { head: "Many Australians", md:
            "Indonesia's death penalty, animal welfare and human rights record are legitimate concerns for Australians to raise." } },
        { type: "section", head: "Why it matters", md:
          "These crises showed how quickly the relationship can sour when public opinion in either country is inflamed, and how much depends on personal ties between leaders. They also taught both governments to build channels that can survive the next storm." }
      ],
      takeaways: [
        "Australia's sudden 2011 ban on live cattle exports angered Jakarta, which had not been consulted.",
        "Revelations in 2013 that Australia tapped the Indonesian president's phone froze relations for months.",
        "The 2015 execution of two Australian drug smugglers led Australia to recall its ambassador; Prabowo sent the last five home in 2024."
      ],
      check: { q: "What did leaked documents reveal in November 2013?",
        choices: ["An Indonesian plan to invade Timor", "That Australia had tried to tap the Indonesian president's phone", "A secret trade deal"], answer: 1,
        explain: "The leaks showed Australia's signals agency had tried to monitor President Yudhoyono's phone in 2009, sparking a crisis." },
      sources: [
        { title: "Indonesia freezes ties with Australia", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2013/11/21/indonesia-freezes-ties-with-australia", date: "2013-11-21" },
        { title: "Government lifts live cattle export ban", publisher: "ABC News", url: "https://www.abc.net.au/news/2011-07-06/government-lifts-live-cattle-export-ban/2784790", date: "2011-07-06" },
        { title: "Intelligence code of conduct saves face for SBY with added benefits", publisher: "The Conversation", url: "https://theconversation.com/intelligence-code-of-conduct-saves-face-for-sby-with-added-benefits-30962", date: "2014-08" },
        { title: "Five 'Bali Nine' ring members return to Australia after 19 years in prison", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2024/12/15/five-bali-nine-ring-members-return-to-australia-after-19-years-in-prison", date: "2024-12-15" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "id_au-3", kind: "relation", asOf: "2026-09-30",
      title: "Boats, bases and the Treaty of Jakarta",
      dek: "Australia turns asylum boats back toward Indonesia, worries about Russian planes in Papua, and in February 2026 signed its closest security pact yet with Prabowo.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/id_au/id_au-3-hero.webp",
          alt: "Illustration of a grand white presidential palace with columns and a manicured lawn, under a tropical sky with palm trees.",
          caption: "Albanese and Prabowo signed the Treaty on Common Security in Jakarta on 6 February 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "A grand white colonial-era presidential palace with tall columns and a wide manicured lawn, tall palm trees, bright tropical sky with scattered clouds, formal and stately, no people, no flags, no legible text." },
        { type: "timeline", head: "A new closeness", items: [
          ["2013", "Australia begins turning asylum boats back toward Indonesia"],
          ["2020", "Comprehensive economic partnership agreement takes effect"],
          ["2024", "Defence cooperation agreement signed"],
          ["Oct 2024", "Prabowo becomes president"],
          ["Apr 2025", "Reports that Russia sought to base aircraft in Papua; Jakarta says no"],
          ["6 Feb 2026", "Treaty on Common Security signed in Jakarta"]
        ] },
        { type: "section", head: "Boats", md:
          "Most asylum seekers who try to reach Australia by sea set out from Indonesia, often after flying there from the Middle East or South Asia. Since 2013, under Operation Sovereign Borders, the Australian navy has intercepted boats and turned or towed them back toward Indonesian waters, and sent others to offshore detention (see [[lesson:au-12]]). Indonesia has complained that the turnbacks violate its sovereignty, but it has also cooperated against people smugglers. The policy sharply cut arrivals and remains popular with Australian voters of both major parties." },
        { type: "section", head: "Prabowo and Russia", md:
          "Prabowo Subianto, a former general who took office in October 2024 (see [[lesson:id-5]]), follows Indonesia's tradition of a 'free and active' foreign policy, meaning no alliances. He joined the BRICS group in 2025 and held exercises with Russia's navy. In April 2025 a US defence publication reported that Moscow had asked to station long-range aircraft at an air base on Biak island in Papua, roughly 1,400 km from Darwin. Canberra sought clarification; Indonesia's defence minister assured Australia that no foreign country would be given a base." },
        { type: "section", head: "The Treaty of Jakarta", md:
          "Despite the scare, the two governments moved closer. A 2024 defence cooperation agreement allowed their forces to train in each other's territory. On 6 February 2026 Anthony Albanese and Prabowo signed the Indonesia–Australia Treaty on Common Security, committing both to regular high-level consultations and to consult each other on shared threats. It is not an alliance, but Albanese said the relationship was 'stronger than it has ever been'. Economic ties are growing too: a trade agreement in force since 2020 removed most tariffs, and more than a million Australians visit Bali each year. Australia also offered to help build joint training facilities in Indonesia and to embed a senior Indonesian officer in its defence force." },
        { type: "compare", head: "What does Jakarta want?",
          left: { head: "Closer to Australia", md:
            "Indonesia shares worries about China's reach in the South China Sea near its Natuna Islands and values Australian training and investment." },
          right: { head: "Non-aligned", md:
            "Indonesia will never join a Western bloc. It deals with Russia, China and the BRICS too, and guards its independence." } },
        { type: "section", head: "Why it matters", md:
          "Indonesia sits across the sea lanes and air routes to Australia's north. A stable, friendly Indonesia is Australia's first line of security, while for Jakarta Australia is a source of education, investment and defence help. The 2026 treaty is the strongest sign yet that both governments see their futures as linked." }
      ],
      takeaways: [
        "Since 2013 Australia has turned asylum boats back toward Indonesia, a source of friction and cooperation.",
        "In 2025 reports that Russia wanted to base aircraft in Papua alarmed Canberra; Jakarta said no.",
        "On 6 February 2026 Albanese and Prabowo signed a Treaty on Common Security, their closest pact yet."
      ],
      check: { q: "What did the February 2026 Treaty on Common Security commit the two countries to?",
        choices: ["A full military alliance", "Regular consultations and consulting each other on shared threats", "A single currency"], answer: 1,
        explain: "The treaty stops short of an alliance but commits Australia and Indonesia to high-level consultations on shared security threats." },
      sources: [
        { title: "Australia and Indonesia sign historic security Treaty", publisher: "Prime Minister of Australia", url: "https://www.pm.gov.au/media/australia-and-indonesia-sign-historic-security-treaty", date: "2026-02-06" },
        { title: "Indonesia, Australia Sign Security Treaty, Pledge Joint Consultations", publisher: "The Diplomat", url: "https://thediplomat.com/2026/02/indonesia-australia-sign-security-treaty-pledge-joint-consultations", date: "2026-02" },
        { title: "Canberra confirms Indonesia won't host Russian planes at air force base", publisher: "ABC News", url: "https://www.abc.net.au/news/2025-04-15/vladimir-putin-eyes-indonesian-air-force-base/105179060", date: "2025-04-15" },
        { title: "Are the Russians Eyeing West Papua for an Overseas Military Base?", publisher: "The Diplomat", url: "https://thediplomat.com/2025/04/are-the-russians-eyeing-west-papua-for-an-overseas-military-base/", date: "2025-04" }
      ]
    }
  ]
});
