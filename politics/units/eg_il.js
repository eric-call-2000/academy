/* ============================================================
   Relationship — Egypt & Israel 🇪🇬🇮🇱
   The first Arab–Israeli peace and why it stayed cold; the
   natural gas that now flows from Israel to Egypt; and Gaza's
   southern border at Rafah. Camp David itself is in eg-11; Egypt
   as mediator in eg-5; the Gaza war in il-5.
   Research note and sources: tools/research/eg_il.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("eg_il", {
  id: "eg_il",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "eg_il-1", kind: "relation", asOf: "2026-09-30",
      title: "A cold peace",
      dek: "In 1979 Egypt became the first Arab country to make peace with Israel. The treaty has survived wars, revolutions and assassinations, but most Egyptians have never accepted it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg_il/eg_il-1-hero.webp",
          alt: "Illustration of a desert landscape with rocky mountains and a lone observation post with a flagpole on a ridge.",
          caption: "An international force has monitored the Sinai peninsula since 1982 under the peace treaty.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast desert landscape of rocky red-brown mountains and sand, a small lone observation post with a bare flagpole on a ridge, a dirt track winding below, clear blue sky, quiet and remote, no people, no flags flying, no legible text." },
        { type: "timeline", head: "From war to treaty", items: [
          ["1948–73", "Four wars between Egypt and Israel"],
          ["Nov 1977", "Sadat flies to Jerusalem and addresses the Knesset"],
          ["Sep 1978", "Camp David Accords"],
          ["26 Mar 1979", "Peace treaty signed in Washington"],
          ["1981", "Sadat assassinated; international force set up for Sinai"],
          ["1982", "Israel completes withdrawal from Sinai"],
          ["2004", "QIZ trade deal with the United States"]
        ] },
        { type: "section", head: "Land for peace", md:
          "Egypt and Israel fought in 1948, 1956, 1967 and 1973. After the 1973 war, President Anwar Sadat concluded that only the United States could return the Sinai peninsula, which Israel had held since 1967. His dramatic visit to Jerusalem in November 1977 led to the Camp David Accords brokered by Jimmy Carter, and on 26 March 1979 Sadat and Menachem Begin signed a peace treaty (see [[lesson:eg-11]]). Israel returned all of Sinai by 1982, the last disputed strip, Taba, after arbitration in 1989. Egypt recognised Israel and exchanged ambassadors. The Arab League suspended Egypt, and in 1981 Islamist officers assassinated Sadat." },
        { type: "section", head: "Cold in public, warm in security", md:
          "The peace has held for more than 45 years, but it stayed 'cold'. Few Egyptians visit Israel, though Israeli tourists have long holidayed at Sinai's Red Sea resorts; professional unions ban contacts with Israelis; and polls, including one by the Washington Institute, find overwhelming majorities of Egyptians opposed to normal ties. Yet the two governments cooperate closely on security. A Multinational Force and Observers, led by American troops, has monitored limits on forces in Sinai since 1982. When jihadists took hold in northern Sinai after 2011, Israel allowed Egypt to deploy far more troops there than the treaty allows, and reportedly carried out air strikes with Cairo's consent." },
        { type: "section", head: "Trade and aid", md:
          "The treaty came with money: for decades Egypt has received about $1.3 billion a year in American military aid, second only to Israel. In 2004 Egypt joined a US scheme of 'Qualifying Industrial Zones', which gives Egyptian factories, mostly textile makers, duty-free access to the American market if their products contain a set share, 10.5% today, of Israeli inputs. It became one of the few areas of everyday economic cooperation." },
        { type: "compare", head: "Two views of the treaty",
          left: { head: "Supporters", md:
            "It ended decades of war, returned Sinai and has kept the two largest militaries in the region from fighting for almost half a century." },
          right: { head: "Critics in Egypt", md:
            "It was a separate peace that abandoned the Palestinians and tied Egypt to American and Israeli interests." } },
        { type: "section", head: "Why it matters", md:
          "The Egypt–Israel treaty is the foundation of the regional order. It showed that Arab–Israeli peace was possible, paving the way for Jordan in 1994 and the Abraham Accords in 2020. Keeping it intact through the Gaza war has been a priority for both governments, even as public anger in Egypt has grown." }
      ],
      takeaways: [
        "In 1979 Egypt became the first Arab state to make peace with Israel, regaining all of Sinai by 1982.",
        "The peace has stayed 'cold': most Egyptians reject normal ties, but security cooperation is close.",
        "US aid and the QIZ trade scheme are among the treaty's material rewards for Egypt."
      ],
      check: { q: "What did Egypt get back under the 1979 peace treaty?",
        choices: ["Gaza", "The Sinai peninsula", "The Golan Heights"], answer: 1,
        explain: "Israel withdrew from all of Sinai, which it had captured in 1967, completing the withdrawal in 1982." },
      sources: [
        { title: "Israel-Egypt Peace Treaty (1979)", publisher: "Economic Cooperation Foundation", url: "https://ecf.org.il/issues/issue/182", date: "n.d." },
        { title: "Multinational Force and Observers", publisher: "MFO", url: "https://www.mfo.org/", date: "n.d." },
        { title: "Qualifying Industrial Zones (QIZs) in Jordan and Egypt: Background and Issues for Congress", publisher: "Congressional Research Service", url: "https://www.everycrsreport.com/reports/R43202.html", date: "2013" },
        { title: "Half of Egyptians Value U.S. Ties, But Few Want Normalization with Israel", publisher: "The Washington Institute", url: "https://www.washingtoninstitute.org/policy-analysis/half-egyptians-value-us-ties-few-want-normalization-israel", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "eg_il-2", kind: "relation", asOf: "2026-09-30",
      title: "Gas flows the other way",
      dek: "Egypt once sold gas to Israel. Now it depends on Israeli gas to keep its lights on, under a $35 billion deal, and every regional war puts that supply at risk.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg_il/eg_il-2-hero.webp",
          alt: "Illustration of an offshore gas production platform standing in a calm blue sea at sunset.",
          caption: "Israel's Leviathan field, off Haifa, supplies a growing share of Egypt's gas.",
          credit: "AI illustration — not a photograph",
          prompt: "A large offshore natural gas production platform standing on steel legs in a calm blue Mediterranean sea at sunset, a supply ship nearby, orange sky and long reflections, industrial and serene, no people, no flags, no legible text or logos." },
        { type: "facts", head: "The gas deal", rows: [
          ["Signed", "August 2025; approved by Israel's government in December 2025"],
          ["Value", "About $35 billion, Israel's largest export deal"],
          ["Volume", "130 billion cubic metres, from the Leviathan field"],
          ["Duration", "Until about 2040"],
          ["Disruptions", "Halted during the June 2025 and 2026 wars with Iran"]
        ] },
        { type: "section", head: "Reversal", md:
          "From 2008 Egypt exported natural gas to Israel through a pipeline from el-Arish to Ashkelon, a deal unpopular with Egyptians who suspected Hosni Mubarak's cronies of profiting. After the 2011 revolution, militants in Sinai blew up the pipeline more than a dozen times, and in 2012 Egypt cancelled the contract. Meanwhile Israel had discovered huge offshore fields, Tamar in 2009 and Leviathan in 2010, turning it from an importer into an exporter. Egypt found its own giant field, Zohr, in 2015, but output fell faster than expected while its population and demand for power kept growing." },
        { type: "section", head: "Dependence", md:
          "Since 2020 the pipeline has run the other way, carrying Israeli gas to Egypt, some of it liquefied and re-exported to Europe. Egypt's two liquefaction plants, at Idku and Damietta, are the only ones in the eastern Mediterranean, so Israeli, Egyptian and Cypriot gas can all reach European buyers through them. Israel also sells gas to Jordan. By 2024 Egypt suffered rolling power cuts in the summer heat and was importing expensive liquefied gas. In August 2025, in the middle of the Gaza war, the Leviathan partners, led by Chevron, signed a deal to sell Egypt 130 billion cubic metres of gas worth about $35 billion through 2040. Benjamin Netanyahu's government approved it in December, calling it the largest export deal in Israel's history." },
        { type: "section", head: "Hostage to war", md:
          "The deal ties Egypt's electricity to events it cannot control. When Israel and Iran fought in June 2025, Israel shut its gas fields and exports stopped. On 28 February 2026, when the United States and Israel struck Iran, Israel halted exports again and declared force majeure (see [[lesson:ir-7]]). Egypt, which had built up import terminals, coped better the second time, but the lesson was clear. Egypt's economy, already in trouble (see [[lesson:eg-6]]), depends heavily on cheap Israeli gas." },
        { type: "compare", head: "Two views of the deal",
          left: { head: "Pragmatists", md:
            "Israeli gas is the cheapest option for Egypt and gives both countries a stake in peace. Energy ties are good for stability." },
          right: { head: "Critics", md:
            "Buying from Israel during the Gaza war was a political and moral mistake, and leaves Egypt dependent on a supplier that can switch it off." } },
        { type: "section", head: "Why it matters", md:
          "Gas has become the strongest material link between the two countries, giving Israel leverage and Egypt a reason to keep the peace even when public anger runs high. It also makes the eastern Mediterranean a region where energy, war and diplomacy are tightly bound." }
      ],
      takeaways: [
        "Egypt sold gas to Israel from 2008 until attacks on the pipeline ended the deal in 2012.",
        "Since 2020 gas flows from Israel to Egypt; a $35 billion deal in 2025 extends supplies to about 2040.",
        "Israel halted exports during its wars with Iran in 2025 and 2026, showing Egypt's vulnerability."
      ],
      check: { q: "Why did Israel halt gas exports to Egypt in February 2026?",
        choices: ["A price dispute", "The US–Israeli war with Iran", "A court ruling"], answer: 1,
        explain: "After the strikes on Iran on 28 February 2026, Israel shut down exports and declared force majeure." },
      sources: [
        { title: "In Israel's largest gas deal, Leviathan partners ink $35 billion export deal with Egypt", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/in-israels-largest-gas-deal-leviathan-partners-ink-35-billion-export-deal-with-egypt/", date: "2025-08" },
        { title: "Israel's $35bn gas deal to ease Egypt's energy crunch and cut import costs", publisher: "The National", url: "https://www.thenationalnews.com/business/energy/2025/12/18/israels-35bn-gas-deal-to-ease-egypts-energy-crunch-and-cut-import-costs/", date: "2025-12-18" },
        { title: "Israel halts gas exports amid Iranian missile strikes", publisher: "S&P Global", url: "https://www.spglobal.com/energy/en/news-research/latest-news/crude-oil/022826-israel-halts-gas-exports-amid-iranian-missile-strikes", date: "2026-02-28" },
        { title: "Egypt Proves Resilient As Israel Halts Gas Exports", publisher: "MEES", url: "https://www.mees.com/2026/3/6/power-water/egypt-proves-resilient-as-israel-halts-gas-exports/47cd96b0-196e-11f1-af7e-957566fa3455", date: "2026-03-06" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "eg_il-3", kind: "relation", asOf: "2026-09-30",
      title: "Rafah: Gaza's southern gate",
      dek: "Gaza's only border not controlled by Israel was the one with Egypt. During the war Israel seized it, Egypt feared Gazans would be pushed into Sinai, and the crossing stayed shut for almost two years.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/eg_il/eg_il-3-hero.webp",
          alt: "Illustration of a border crossing gate in a desert landscape with concrete walls and a long line of trucks waiting in the heat.",
          caption: "Trucks carrying aid wait on the Egyptian side of the Rafah crossing.",
          credit: "AI illustration — not a photograph",
          prompt: "A border crossing gate set in high concrete walls in a flat sandy desert, a long line of cargo trucks waiting in the hazy heat, dust in the air, pale sky, tense and weary atmosphere, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The border", items: [
          ["2005", "Israel withdraws from Gaza; Rafah opens under EU monitors"],
          ["2007", "Hamas takes over Gaza; Egypt and Israel tighten the blockade"],
          ["2013–15", "Egypt destroys smuggling tunnels and clears a buffer zone"],
          ["May 2024", "Israel seizes the Rafah crossing and the Philadelphi corridor"],
          ["Oct 2025", "Ceasefire deal marked at a summit in Sharm el-Sheikh"],
          ["2 Feb 2026", "Rafah reopens for limited passenger traffic"]
        ] },
        { type: "section", head: "Tunnels and blockade", md:
          "Rafah is the only crossing between Gaza and Egypt. After Israel withdrew from Gaza in 2005, it opened under European monitors. When Hamas seized Gaza in 2007, both Israel and Egypt restricted it, and Gazans dug hundreds of tunnels under the border to smuggle food, fuel, cars and weapons. After the 2013 coup that brought Abdel Fattah al-Sisi to power, Egypt, hostile to Hamas as an offshoot of the Muslim Brotherhood (see [[lesson:eg-12]]), flooded and destroyed the tunnels and bulldozed homes to create a buffer zone on its side." },
        { type: "section", head: "The war", md:
          "During the war that began on 7 October 2023 (see [[lesson:il-5]]), Egypt pushed aid through Rafah but refused to open the border to fleeing Gazans. Sisi warned that pushing Palestinians into Sinai would destroy their cause and threaten Egypt's security. In May 2024 Israeli forces captured the Gaza side of the crossing and the Philadelphi corridor, a 14 km strip along the border, saying Hamas used it for smuggling; Egypt protested that this violated their agreements, and the crossing closed. In early 2025 President Trump proposed moving Gaza's population to Egypt and Jordan; Egypt led an Arab counter-plan for rebuilding Gaza with its people in place." },
        { type: "section", head: "Reopening", md:
          "Egypt helped broker the ceasefire that took effect in October 2025, celebrated at a summit in Sharm el-Sheikh (see [[lesson:eg-5]]). Israel kept Rafah shut until the last hostage's body was returned. On 2 February 2026 it reopened for limited numbers of people, not goods, with Israeli troops checking identities at a nearby checkpoint. Under the American plan endorsed by the UN Security Council in November 2025, an international stabilisation force is meant to help secure Gaza, and Egypt has offered to train Palestinian police to take over from Hamas. Who will control the border, and when goods can flow freely, remains unsettled." },
        { type: "compare", head: "Two views of the border",
          left: { head: "Cairo", md:
            "Egypt will not be party to emptying Gaza. Israel's control of the corridor breaches the peace treaty's security arrangements." },
          right: { head: "Israel", md:
            "Hamas rearmed through the Egyptian border for years. Israel must control it until Gaza can no longer threaten it." } },
        { type: "section", head: "Why it matters", md:
          "Rafah is where the Gaza war and the Egypt–Israel peace meet. How it is run, and who controls the corridor, will shape Gaza's reconstruction and test whether the 1979 treaty can adapt to a new era." }
      ],
      takeaways: [
        "Rafah is Gaza's only crossing into Egypt; Egypt has long restricted it and destroyed smuggling tunnels.",
        "Israel seized the crossing and the Philadelphi corridor in May 2024; Egypt refused to let Gazans be pushed into Sinai.",
        "After the October 2025 ceasefire, Rafah reopened for limited passenger traffic on 2 February 2026."
      ],
      check: { q: "Why did Egypt refuse to open Rafah to fleeing Gazans during the war?",
        choices: ["It had no border with Gaza", "It feared permanent displacement into Sinai and threats to its security", "The UN forbade it"], answer: 1,
        explain: "Sisi warned that moving Gazans into Sinai would end the Palestinian cause and endanger Egypt." },
      sources: [
        { title: "Rafah crossing between Israel and Egypt reopens after nearly two years", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2026/02/02/israel-egypt-gaza-rafah-crossing/", date: "2026-02-02" },
        { title: "Gaza's Rafah border crossing with Egypt reopens for limited traffic", publisher: "NPR", url: "https://www.npr.org/2026/02/02/g-s1-108287/gaza-rafah-border-crossing-reopens", date: "2026-02-02" },
        { title: "Rafah Crossing to Reopen for Pedestrians as Fragile Gaza Ceasefire Moves to Second Phase", publisher: "FDD", url: "https://www.fdd.org/analysis/2026/01/30/rafah-crossing-to-reopen-for-pedestrians-as-fragile-gaza-ceasefire-moves-to-second-phase/", date: "2026-01-30" }
      ]
    }
  ]
});
