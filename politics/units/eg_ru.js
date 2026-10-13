/* ============================================================
   Relationship — Egypt & Russia 🇪🇬🇷🇺
   Nasser's arms deal, the Aswan High Dam and Sadat's expulsion
   of Soviet advisers; wheat, tourists, the 2015 Sinai bombing and
   Sisi's arms; and the Dabaa nuclear plant, BRICS and talks of
   more reactors in 2026.
   Research note and sources: tools/research/eg_ru.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("eg_ru", {
  id: "eg_ru",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "eg_ru-1", kind: "relation", asOf: "2026-10-12",
      title: "The dam and the expulsion",
      dek: "In the 1950s Nasser turned to Moscow for weapons and for the Aswan High Dam. Twenty thousand Soviet advisers followed, until Anwar Sadat sent them home in 1972 and turned to America.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg_ru/eg_ru-1-hero.webp",
          alt: "Illustration of a huge rock-fill dam across a wide river in the desert, a tall lotus-shaped monument beside it.",
          caption: "The Aswan High Dam was built with Soviet money and engineers.",
          credit: "Illustration — not a photograph",
          prompt: "A huge low rock-fill dam stretching across a wide blue river in a rocky desert, a vast lake behind it and a tall concrete monument shaped like a lotus flower on the bank, bright dry light, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Rise and fall of an alliance", items: [
          ["Sep 1955", "Nasser announces the 'Czech' arms deal"],
          ["Jul 1956", "The US drops funding for Aswan; Nasser nationalises the Suez Canal"],
          ["1960", "Construction of the Aswan High Dam begins with Soviet help"],
          ["1967", "Egypt loses the Six-Day War; Moscow rearms it"],
          ["Jul 1972", "Sadat expels Soviet military advisers"],
          ["1976", "Sadat ends the 1971 friendship treaty"]
        ] },
        { type: "section", head: "Arms from the East", md:
          "Gamal Abdel Nasser, who led Egypt from 1954, wanted modern weapons after Israeli raids, but the West attached conditions. In September 1955 he announced a huge arms deal with Czechoslovakia, in reality supplied by the Soviet Union: tanks, MiG fighters and bombers. It broke the Western monopoly on arms to the Arab world and made Egypt the Soviet Union's leading partner in the Middle East." },
        { type: "section", head: "The High Dam", md:
          "Nasser's great project was a high dam on the Nile at Aswan to control floods, irrigate new land and generate electricity. The United States and Britain offered loans, then withdrew them in July 1956. A week later Nasser nationalised the Suez Canal to pay for the dam, triggering the Suez crisis. The Soviet Union stepped in with loans, engineers and machinery. Work began in 1960, and the dam was completed in 1970 and inaugurated in 1971. A monument of a lotus flower beside it commemorates Soviet–Egyptian friendship." },
        { type: "section", head: "Advisers", md:
          "After Egypt's crushing defeat by Israel in the 1967 war, Moscow rebuilt its armed forces. By the early 1970s about 20,000 Soviet military advisers and personnel were in Egypt, some flying jets and manning air defences during the 'war of attrition' along the Suez Canal. Thousands of Egyptians studied in the Soviet Union, and Soviet engineers built steelworks at Helwan and an aluminium smelter at Nag Hammadi." },
        { type: "section", head: "Sadat's turn", md:
          "Nasser died in 1970. His successor, Anwar Sadat, believed only the United States could make Israel return the Sinai, and resented Soviet reluctance to supply offensive weapons. In July 1972 he ordered the Soviet advisers to leave. He still used Soviet arms to launch the October War of 1973, but afterwards turned to Washington, which brokered the disengagement talks. In 1976 he ended the friendship treaty with Moscow, and in 1979 signed peace with Israel." },
        { type: "section", head: "Cold peace", md:
          "Under Hosni Mubarak, from 1981, Egypt became a major recipient of US military aid, second only to Israel, and its army gradually replaced Soviet tanks and jets with American ones. Ties with Moscow were cool but correct, and trade was small. After the Soviet Union collapsed, Russia had little to offer, and it was only in the 2000s, as Putin sought to restore Russian influence in the Middle East, that Cairo and Moscow began to draw closer again." },
        { type: "compare", head: "What changed",
          left: { head: "Under Nasser", md:
            "Soviet arms, Soviet loans, Soviet advisers and a dam that changed the Nile." },
          right: { head: "Under Sadat", md:
            "Advisers expelled, a US-brokered peace with Israel and American aid." } },
        { type: "section", head: "Why it matters", md:
          "Egypt's switch from Moscow to Washington in the 1970s was one of the Cold War's biggest shifts. Ever since, Cairo has tried to keep ties with both, never relying wholly on either." }
      ],
      takeaways: [
        "Nasser's 1955 'Czech' arms deal made Egypt the Soviet Union's main Arab partner.",
        "The Soviet Union financed and helped build the Aswan High Dam, completed in 1970.",
        "Sadat expelled Soviet advisers in 1972 and turned to the United States."
      ],
      check: { q: "Why did the Soviet Union fund the Aswan High Dam?",
        choices: ["The US and Britain had withdrawn their loan offer in 1956", "Egypt had joined the Warsaw Pact", "It was part of a peace deal with Israel"], answer: 0,
        explain: "Moscow stepped in after the West pulled out, winning a major ally." },
      sources: [
        { title: "Aswan High Dam", publisher: "Britannica", url: "https://www.britannica.com/topic/Aswan-High-Dam", date: "n.d." },
        { title: "Egypt–Russia relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Egypt%E2%80%93Russia_relations", date: "n.d." },
        { title: "Czechoslovak–Egyptian arms deal", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Czechoslovak%E2%80%93Egyptian_arms_deal", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "eg_ru-2", kind: "relation", asOf: "2026-10-12",
      title: "Wheat, tourists and a bomb",
      dek: "Russian wheat feeds Egypt's bread, and Russian tourists fill its Red Sea resorts. A bomb on a Russian airliner in 2015 cut the tourist flow for years, but Sisi and Putin grew close.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg_ru/eg_ru-2-hero.webp",
          alt: "Illustration of a Red Sea resort beach with umbrellas, a coral reef and bare mountains behind.",
          caption: "Russian tourists have long favoured Egypt's Red Sea resorts.",
          credit: "Illustration — not a photograph",
          prompt: "A Red Sea resort beach with rows of straw umbrellas and low white hotels, turquoise water over a coral reef and bare red desert mountains behind, bright midday light, documentary painting style, figures tiny and distant, no flags, no legible text." },
        { type: "timeline", head: "Bread, beaches and arms", items: [
          ["2000s", "Russia becomes Egypt's main wheat supplier"],
          ["2014", "Sisi visits Moscow before becoming president"],
          ["31 Oct 2015", "Metrojet Flight 9268 is bombed over Sinai"],
          ["2015–17", "Egypt buys MiG-29 fighters and Ka-52 helicopters"],
          ["Oct 2018", "Comprehensive partnership treaty"],
          ["2021", "Russian flights to the Red Sea resorts resume"]
        ] },
        { type: "section", head: "Bread", md:
          "Egypt, with more than 100 million people, is one of the world's largest wheat importers, and bread is so central that the government subsidises it for most citizens. Price rises have triggered riots before, most famously in 1977. Russia, the world's largest wheat exporter, supplies most of Egypt's imported grain. When Russia's war on Ukraine disrupted Black Sea shipments in 2022, Cairo scrambled for supplies, and Moscow made a point of promising to keep grain flowing. Egypt's state buyer and private traders turned even more to Russian cargoes, which were often the cheapest on offer." },
        { type: "section", head: "Tourists", md:
          "From the 1990s millions of Russians holidayed every year in Sharm el-Sheikh and Hurghada on the Red Sea, drawn by sun, cheap packages, diving on the coral reefs and short flights. By 2014 Russians were the largest group of foreign tourists in Egypt, about three million a year, and many resorts printed menus and signs in Russian. Tourism is one of Egypt's biggest sources of foreign currency and employs millions, so the Russian market mattered enormously to the economy, especially after the 2011 revolution scared away many Europeans." },
        { type: "section", head: "Metrojet 9268", md:
          "On 31 October 2015 a Russian Airbus flying from Sharm el-Sheikh to St Petersburg broke apart over the Sinai, killing all 224 people on board, most of them Russian holidaymakers. The Islamic State group's Sinai branch said it had smuggled a bomb aboard, and Russia concluded it was terrorism. Moscow suspended all flights to Egypt. Direct flights to Cairo resumed in 2018, but charter flights to the Red Sea resorts were only restored in 2021, a long blow to Egypt's tourism." },
        { type: "section", head: "Sisi and Putin", md:
          "Abdel Fattah al-Sisi, who seized power in 2013 and became president in 2014, found a sympathetic partner in Putin when Western governments criticised his crackdown. He visited Moscow in 2014 and has met Putin many times since. Egypt bought Russian MiG-29 fighters and Ka-52 attack helicopters, and in 2018 the two signed a comprehensive partnership treaty. Both backed the eastern Libyan commander Khalifa Haftar. A deal for advanced Su-35 jets, however, was reportedly shelved after US warnings of sanctions." },
        { type: "compare", head: "A partnership of convenience",
          left: { head: "Egypt needs", md:
            "Wheat, tourists, arms without conditions and a friend not lecturing on human rights." },
          right: { head: "Russia wants", md:
            "A foothold in the Arab world's most populous country, arms sales and a market for grain." } },
        { type: "section", head: "Why it matters", md:
          "Egypt depends on Russia for bread and once for tourism, and on the United States for military aid. Balancing the two has become central to Sisi's foreign policy." }
      ],
      takeaways: [
        "Russia supplies most of Egypt's imported wheat, vital for its subsidised bread.",
        "The 2015 bombing of Metrojet Flight 9268 over Sinai killed 224 and halted Russian flights for years.",
        "Under Sisi, Egypt bought Russian jets and helicopters and signed a 2018 partnership treaty."
      ],
      check: { q: "What happened to Metrojet Flight 9268 in October 2015?",
        choices: ["It was shot down over Syria", "It was bombed over Sinai, killing 224 people", "It made an emergency landing in Cairo"], answer: 1,
        explain: "Islamic State's Sinai branch claimed it; Russia suspended flights to Egypt." },
      sources: [
        { title: "Metrojet Flight 9268", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Metrojet_Flight_9268", date: "n.d." },
        { title: "Egypt's Sisi discusses nuclear plant, grains trade with Russian officials", publisher: "Reuters via Yahoo News", url: "https://news.yahoo.com/egypts-sisi-discusses-nuclear-plant-185102302.html", date: "2023" },
        { title: "Egypt–Russia relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Egypt%E2%80%93Russia_relations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "eg_ru-3", kind: "relation", asOf: "2026-10-12",
      title: "Dabaa, BRICS and a grain hub",
      dek: "Russia is building Egypt's first nuclear power plant at Dabaa. Egypt joined BRICS in 2024, and in 2026 the two discussed more reactors and a Russian grain and energy hub.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg_ru/eg_ru-3-hero.webp",
          alt: "Illustration of reactor buildings under construction on a flat Mediterranean coast with tall cranes.",
          caption: "Four Russian reactors are being built at Dabaa on Egypt's north coast.",
          credit: "Illustration — not a photograph",
          prompt: "Four round concrete nuclear reactor buildings under construction on a flat sandy Mediterranean coast, tall construction cranes beside them, turquoise sea behind and a pale sky, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Nuclear and BRICS", items: [
          ["2015", "Egypt and Russia agree to build a nuclear plant"],
          ["Dec 2017", "Contracts signed for the Dabaa plant"],
          ["Jul 2022", "Construction of the first unit begins"],
          ["Jan 2024", "Egypt joins BRICS"],
          ["Apr 2026", "Putin proposes a grain and energy hub in Egypt"],
          ["Sep 2026", "Sisi and Putin meet at the BRICS summit in New Delhi"]
        ] },
        { type: "section", head: "Dabaa", md:
          "Egypt has dreamed of nuclear power since the 1950s. In 2015 it agreed with Russia to build a plant at Dabaa on the Mediterranean coast, and contracts were signed in December 2017 during a visit by Putin to Cairo. Russia's state nuclear company Rosatom is building four VVER-1200 reactors, with a combined capacity of 4,800 megawatts, and Russia lent most of the cost, about 25 billion dollars. Construction of the first unit began in July 2022, and work continued despite the war in Ukraine. In August 2026 the foreign ministers Badr Abdelatty and Sergei Lavrov praised progress on the second reactor." },
        { type: "section", head: "Balancing", md:
          "Egypt condemned Russia's invasion of Ukraine at the UN in 2022 but did not join [[sanctions]], and kept buying Russian wheat and welcoming Russian tourists. It is also one of the largest recipients of US military aid and depends on Gulf money and IMF loans. Leaked US documents in 2023 suggested Egypt had considered secretly supplying rockets to Russia; Cairo denied it, and nothing was shown to have been sent." },
        { type: "section", head: "BRICS", md:
          "In January 2024 Egypt became a full member of [[BRICS]], alongside Iran, Ethiopia and the UAE. Cairo hoped the group would offer financing and new markets, and talked of trading in local currencies to save scarce dollars. Russia is also developing an industrial zone in the Suez Canal Economic Zone, meant to host Russian factories that would export to Africa and the Middle East. Progress has been slow, and Egypt's biggest economic partners remain the Gulf states, the European Union, China and the United States." },
        { type: "section", head: "More reactors and a hub", md:
          "In April 2026 Putin told Abdelatty that Russia would help meet Egypt's grain needs and raised the idea of a Russian grain and energy hub in Egypt, without details. At the BRICS summit in New Delhi in September 2026, Sisi and Putin discussed adding two reactors to the four at Dabaa and a desalination plant, according to the head of Russia's BRICS expert council, Victoria Panova; there was no official readout. Putin called Egypt a long-standing and reliable friend." },
        { type: "compare", head: "What Dabaa means",
          left: { head: "For Egypt", md:
            "Electricity for a growing population, and a long-term tie to Russian fuel and engineers." },
          right: { head: "For Russia", md:
            "Its biggest project in Africa, decades of fuel and service contracts, and influence in Cairo." } },
        { type: "section", head: "Why it matters", md:
          "A nuclear plant binds countries together for generations. Dabaa means that whatever happens in Ukraine or between Russia and the West, Egypt and Russia will remain partners for decades." }
      ],
      takeaways: [
        "Rosatom is building four 1,200-megawatt reactors at Dabaa, Egypt's first nuclear plant.",
        "Egypt joined BRICS in January 2024 and did not join sanctions on Russia.",
        "In 2026 the two discussed two more reactors, desalination and a Russian grain and energy hub."
      ],
      check: { q: "Who is building Egypt's first nuclear power plant at Dabaa?",
        choices: ["France's EDF", "Russia's Rosatom", "China's CNNC"], answer: 1,
        explain: "Four VVER-1200 reactors are under construction, financed largely by a Russian loan." },
      sources: [
        { title: "Egypt, Russia discussed Dabaa expansion and joint grain hub at BRICS summit: Panova", publisher: "Ahram Online", url: "https://english.ahram.org.eg/News/576520.aspx", date: "2026-09" },
        { title: "Egypt, Russia FMs hail El-Dabaa nuclear progress in phone call", publisher: "Ahram Online", url: "https://english.ahram.org.eg/News/575373.aspx", date: "2026-08" },
        { title: "Putin calls Egypt a long-standing and reliable friend", publisher: "Egyptian Streets", url: "https://egyptianstreets.com/2026/09/12/putin-calls-egypt-a-long-standing-and-reliable-friend/", date: "2026-09-12" },
        { title: "Russia considers establishing grain, energy hub in Egypt", publisher: "Egypt Today", url: "https://www.egypttoday.com/Article/3/146079/Russia-considers-establishing-grain-energy-hub-in-Egypt", date: "2026-04" }
      ]
    }
  ]
});
