/* ============================================================
   Relationship — United Kingdom & Ukraine 🇬🇧🇺🇦
   The Budapest Memorandum Britain signed, Crimea and eight years
   of training; NLAWs, Johnson's walk through Kyiv, tanks and
   Storm Shadow; and the 100-year partnership, Interflex and the
   coalition of the willing under Starmer and Burnham.
   Research note and sources: tools/research/gb_ua.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("gb_ua", {
  id: "gb_ua",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb_ua-1", kind: "relation", asOf: "2026-10-07",
      title: "A promise signed in Budapest",
      dek: "In 1994 Britain, the US and Russia promised to respect Ukraine's borders if it gave up its nuclear weapons. Twenty years later Russia seized Crimea, and Britain began training Ukraine's army.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ua/gb_ua-1-hero.webp",
          alt: "Illustration of a long missile on a transporter being moved out of a snowy forest base, with empty silos behind.",
          caption: "Ukraine handed over the Soviet nuclear weapons on its soil in the 1990s.",
          credit: "Illustration — not a photograph",
          prompt: "A long intercontinental missile on a heavy wheeled transporter being driven out of a snowy pine-forest military base, open concrete silo covers behind, grey winter light, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Promises and broken borders", items: [
          ["24 Aug 1991", "Ukraine declares independence"],
          ["5 Dec 1994", "Budapest Memorandum signed by the UK, US and Russia"],
          ["1996", "Last nuclear warheads leave Ukraine"],
          ["Feb–Mar 2014", "Russia seizes and annexes Crimea"],
          ["2015–22", "Britain's Operation Orbital trains Ukrainian troops"],
          ["Jan 2022", "Britain flies anti-tank weapons to Kyiv"]
        ] },
        { type: "section", head: "A nuclear inheritance", md:
          "When the Soviet Union broke up in 1991, Ukraine found itself with about 1,900 strategic nuclear warheads on its territory, the third-largest arsenal in the world, though Moscow controlled the codes (see [[lesson:ua-9]]). The United States and Russia wanted them moved to Russia; Ukraine wanted something in return." },
        { type: "section", head: "The Budapest Memorandum", md:
          "On 5 December 1994, at a summit in Budapest, Britain, the United States and Russia signed a memorandum promising to respect Ukraine's independence and existing borders and to refrain from the threat or use of force against it. In return Ukraine joined the Nuclear Non-Proliferation Treaty as a non-nuclear state and sent its warheads to Russia; the last left in 1996. The memorandum offered 'assurances', not guarantees: it did not oblige anyone to defend Ukraine, only to take the matter to the UN Security Council, where Russia has a veto." },
        { type: "section", head: "Crimea", md:
          "In February and March 2014, after Ukraine's pro-Russian president fled, Russian troops seized Crimea and Moscow annexed it after a referendum held at gunpoint. Ukraine and its supporters said Russia had torn up the Budapest promise. Britain joined Western sanctions, but like other European governments it kept trading with Russia, and London remained a home for Russian money (see [[lesson:gb_ru-2]])." },
        { type: "section", head: "Operation Orbital", md:
          "From 2015 the British Army ran Operation Orbital, a training mission inside Ukraine that taught more than 20,000 Ukrainian soldiers basic infantry, medical and leadership skills over seven years. Royal Navy ships visited the Black Sea, and in 2021 a British destroyer, HMS Defender, sailed close to Crimea; Russia said it had fired warning shots, which Britain denied were aimed at the ship. Britain also helped Ukraine build a small navy." },
        { type: "section", head: "Before the invasion", md:
          "In January 2022, as Russian troops massed on the border, Britain was one of the first countries to send weapons: around 2,000 NLAW anti-tank missiles, flown to Kyiv in an operation that avoided German airspace. The government of Boris Johnson also published intelligence warning that Russia planned to install a puppet regime in Kyiv." },
        { type: "compare", head: "The Budapest promise",
          left: { head: "What Ukraine thought it got", md:
            "Security in exchange for giving up the world's third-largest nuclear arsenal." },
          right: { head: "What it actually got", md:
            "Political assurances, with no obligation on anyone to defend it." } },
        { type: "section", head: "Why it matters", md:
          "Ukrainians often cite Budapest as proof that paper promises are worthless, which is why Kyiv now insists on firm security guarantees, and why Britain's role in any future force matters so much to it." }
      ],
      takeaways: [
        "In the 1994 Budapest Memorandum, Britain, the US and Russia promised to respect Ukraine's borders as it gave up nuclear weapons.",
        "Russia's 2014 seizure of Crimea broke that promise; the memorandum contained no duty to defend Ukraine.",
        "From 2015 Britain's Operation Orbital trained more than 20,000 Ukrainian soldiers; NLAWs arrived in January 2022."
      ],
      check: { q: "What did the Budapest Memorandum commit Britain to?",
        choices: ["Defending Ukraine militarily", "Respecting Ukraine's borders and not threatening it with force", "Admitting Ukraine to NATO"], answer: 1,
        explain: "It gave assurances, not guarantees." },
      sources: [
        { title: "Ukraine, Nuclear Weapons, and Security Assurances at a Glance", publisher: "Arms Control Association", url: "https://www.armscontrol.org/factsheets/ukraine-nuclear-weapons-and-security-assurances-glance", date: "n.d." },
        { title: "30 years ago today, Ukraine traded nuclear arms for security assurances", publisher: "The Kyiv Independent", url: "https://kyivindependent.com/30-years-ago-ukraine-traded-nuclear-arms-for-security-assurances-a-decision-that-haunts-kyiv-today/", date: "2024-12-05" },
        { title: "The NLAW Missiles The U.K. Rushed To Ukraine", publisher: "Forbes", url: "https://www.forbes.com/sites/sebastienroblin/2022/01/25/the-uk-airmailed-2000-nlaw-missiles-to-ukraine-are-they-useful/", date: "2022-01-25" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb_ua-2", kind: "relation", asOf: "2026-10-07",
      title: "NLAWs, tanks and Storm Shadow",
      dek: "When Russia invaded, Britain moved faster than most allies: anti-tank missiles in the first days, a prime minister on the streets of Kyiv in April, the first Western tanks and the first long-range missiles.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ua/gb_ua-2-hero.webp",
          alt: "Illustration of a heavy battle tank driving across a muddy training ground on a grey English morning.",
          caption: "In January 2023 Britain became the first Western country to promise main battle tanks to Ukraine.",
          credit: "Illustration — not a photograph",
          prompt: "A heavy main battle tank driving across a churned muddy training ground on a grey English morning, low hills and hedgerows behind, mist and puddles, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Firsts", items: [
          ["Feb–Mar 2022", "Thousands of NLAWs help stop Russian armour"],
          ["9 Apr 2022", "Johnson walks through Kyiv with Zelensky"],
          ["Jun 2022", "Operation Interflex begins training recruits in Britain"],
          ["Jan 2023", "Britain pledges Challenger 2 tanks"],
          ["May 2023", "Britain supplies Storm Shadow cruise missiles"],
          ["Nov 2024", "Ukraine fires Storm Shadow into Russia"]
        ] },
        { type: "section", head: "Missiles in the first days", md:
          "When Russia invaded on 24 February 2022, the NLAWs Britain had sent weeks earlier were already in Ukrainian hands. Cheap, light and easy to use, they helped Ukrainian infantry destroy Russian armoured columns approaching Kyiv. By mid-March Britain had delivered more than 4,000, and eventually over 10,000. Ukrainians wrote songs about them, and 'Saint Javelin' and NLAW memes spread online." },
        { type: "section", head: "Johnson in Kyiv", md:
          "On 9 April 2022, days after Russian forces withdrew from around Kyiv, Boris Johnson made a surprise visit, walking through the city centre with President Zelensky and pledging armoured vehicles and anti-ship missiles. He became one of the most popular foreign leaders in Ukraine. Russian officials and some critics later claimed that he urged Kyiv to abandon early peace talks; Johnson denies discouraging a settlement, and Ukrainian negotiators have given differing accounts." },
        { type: "section", head: "Firsts", md:
          "Britain often moved first, in the hope of pulling allies along. In January 2023 it pledged 14 Challenger 2 tanks, the first Western main battle tanks, which helped persuade Germany and the United States to send theirs. In May 2023 it supplied Storm Shadow cruise missiles, with a range of more than 250 kilometres, the first long-range missiles from a Western country. After Washington relaxed its own limits in November 2024, Ukraine fired Storm Shadows at targets inside Russia." },
        { type: "section", head: "Training", md:
          "From June 2022 Operation Interflex brought Ukrainian recruits to Britain for five weeks of basic training on ranges built to resemble Ukrainian trenches and villages, with instructors from more than a dozen countries. By mid-2026 it had trained more than 63,000 Ukrainians, and it has since shifted toward specialist skills such as drone warfare, combat medicine and leadership. Canada, the Netherlands, the Nordic countries, Australia and New Zealand all sent instructors." },
        { type: "section", head: "Money", md:
          "By early 2025 Britain had pledged £12.8 billion in military and civilian aid, and promised £3 billion a year in military aid for as long as needed. It also lent Ukraine about £2.26 billion to be repaid from the profits of frozen Russian assets. Thousands of British households took in Ukrainian refugees under the Homes for Ukraine scheme, and more than 200,000 Ukrainians have come to Britain since the invasion." },
        { type: "compare", head: "Britain's approach",
          left: { head: "Supporters", md:
            "Moving first gave Ukraine weapons sooner and shamed bigger allies into following." },
          right: { head: "Critics", md:
            "Britain's small army has given away much of its own equipment and stocks." } },
        { type: "section", head: "Why it matters", md:
          "Ukrainians see Britain as one of their most reliable friends. That reputation has outlasted three prime ministers, Johnson, Sunak and Starmer, and all of Britain's main parties back Ukraine." }
      ],
      takeaways: [
        "British NLAW anti-tank missiles helped Ukraine stop Russia's advance on Kyiv in 2022.",
        "Britain was first to send Western main battle tanks (January 2023) and long-range Storm Shadow missiles (May 2023).",
        "Operation Interflex had trained more than 63,000 Ukrainian soldiers in Britain by 2026."
      ],
      check: { q: "What was Storm Shadow?",
        choices: ["A British tank", "A long-range cruise missile Britain supplied in May 2023", "A training programme"], answer: 1,
        explain: "It was the first long-range missile supplied by a Western country." },
      sources: [
        { title: "Boris Johnson meets with Zelensky in surprise visit to Ukraine", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2022/04/10/johnson-visit-zelensky-kyiv-ukraine/", date: "2022-04-10" },
        { title: "Storm Shadow missiles: Britain has delivered long-range cruise missiles to Ukraine", publisher: "CNN", url: "https://www.cnn.com/2023/05/11/politics/uk-storm-shadow-cruise-missiles-ukraine/index.html", date: "2023-05-11" },
        { title: "After Training 63,000 Ukrainians, Operation Interflex Shifts Toward Specialist Military Skills", publisher: "UNITED24 Media", url: "https://united24media.com/war-in-ukraine/after-training-63000-ukrainians-operation-interflex-shifts-toward-specialist-military-skills-19542", date: "2026-06" },
        { title: "The British-made weapon helping Ukraine repel Russia", publisher: "The Week", url: "https://theweek.com/news/defence/956302/british-made-weapon-helping-ukraine-repel-russia", date: "2022-03" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb_ua-3", kind: "relation", asOf: "2026-10-07",
      title: "A hundred-year partnership",
      dek: "Britain signed a treaty promising to stand with Ukraine for a century, and with France leads the 'coalition of the willing' planning a force to secure any ceasefire. Prime Minister Burnham says Britain will send troops.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ua/gb_ua-3-hero.webp",
          alt: "Illustration of a war memorial wall of photographs and candles beside a golden-domed monastery in Kyiv in winter.",
          caption: "Leaders visiting Kyiv lay wreaths at the memorial wall to Ukraine's fallen soldiers.",
          credit: "Illustration — not a photograph",
          prompt: "A long memorial wall covered with rows of small portrait photographs and candles and wreaths beside a blue and white monastery with golden domes in Kyiv, light snow, grey winter afternoon, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Commitment for the long run", items: [
          ["16 Jan 2025", "Starmer signs the 100-Year Partnership in Kyiv"],
          ["2 Mar 2025", "London summit founds the 'coalition of the willing'"],
          ["Jan 2026", "Britain and France agree to send troops after a ceasefire"],
          ["Jun 2026", "Interflex marks four years and 63,000 trained"],
          ["20 Jul 2026", "Andy Burnham becomes prime minister"],
          ["Sep 2026", "Burnham pledges a multinational force after a ceasefire"]
        ] },
        { type: "section", head: "The 100-Year Partnership", md:
          "On 16 January 2025 Keir Starmer signed a '100-Year Partnership' treaty with Ukraine in Kyiv, as explosions sounded over the city. It covers defence, energy, science, trade and culture, and includes plans for a joint maritime security pact in the Black Sea and Sea of Azov, joint weapons production and cooperation on drones. Critics called it symbolic, since no treaty can bind a century of governments, but Kyiv valued the message that Britain intended to stay." },
        { type: "section", head: "The coalition of the willing", md:
          "As Donald Trump pushed for a quick settlement (see [[lesson:ru-6]]), Starmer and France's President Macron gathered European and Commonwealth leaders in London on 2 March 2025 to form a 'coalition of the willing': countries prepared to help secure Ukraine after a ceasefire. In January 2026 Britain and France agreed to send troops in the event of a peace deal. Plans now call for a 'Multinational Force Ukraine' to deter renewed attack, with a UK–French headquarters in Paris that would move to London after a year." },
        { type: "section", head: "Burnham's pledge", md:
          "When Andy Burnham replaced Starmer as prime minister in July 2026 (see [[lesson:gb-6]]), Ukrainians watched for any change. There was none. Burnham said Britain would 'continue to lead the coalition of the willing together with our allies', and that when a ceasefire came into force it would be ready to deploy a multinational force to strengthen Ukraine's security in the long term." },
        { type: "section", head: "Industry and drones", md:
          "Britain and Ukraine increasingly build weapons together. British firms have opened production in Ukraine, London has helped fund Ukrainian long-range drones, and it has cleared the assembly of Storm Shadow components inside Ukraine. Britain also leads, with Latvia, an international coalition supplying Ukraine with drones." },
        { type: "section", head: "Russia's warnings", md:
          "Moscow says any Western troops in Ukraine would be legitimate targets, and rejects the force as a condition of peace. Without a ceasefire, the coalition's plans remain plans, and some members, such as Italy, have said they will not send troops at all. Trump has ruled out American ground forces in Ukraine, though US officials have discussed providing intelligence and air support." },
        { type: "compare", head: "The force debate",
          left: { head: "Supporters", md:
            "Only Western troops on the ground can deter Russia from attacking again." },
          right: { head: "Sceptics", md:
            "Britain's army is small, and a force without American backing might not deter Russia." } },
        { type: "section", head: "Why it matters", md:
          "If the war ends, Britain's promise to help guarantee the peace will be tested. British troops in Ukraine would be the biggest British deployment abroad since Afghanistan." }
      ],
      takeaways: [
        "Starmer signed a 100-Year Partnership with Ukraine in Kyiv on 16 January 2025.",
        "Britain and France lead the 'coalition of the willing', planning a Multinational Force Ukraine after a ceasefire.",
        "Prime Minister Burnham has pledged to keep leading the coalition and to deploy troops once fighting stops."
      ],
      check: { q: "What is the 'coalition of the willing'?",
        choices: ["NATO's eastern flank force", "Countries led by Britain and France planning to help secure Ukraine after a ceasefire", "A group of countries buying Ukrainian grain"], answer: 1,
        explain: "It was founded in London on 2 March 2025." },
      sources: [
        { title: "UK's Starmer in Kyiv for security talks with a pledge for a '100-year partnership' with Ukraine", publisher: "CNN", url: "https://www.cnn.com/2025/01/16/europe/uk-starmer-ukraine-zelensky-pact-intl-hnk/index.html", date: "2025-01-16" },
        { title: "UK and France agree to send troops to Ukraine in event of peace deal with Russia", publisher: "CNN", url: "https://www.cnn.com/2026/01/06/europe/uk-france-troops-ukraine-russia-peace-deal-latam-intl", date: "2026-01-06" },
        { title: "Coalition of the willing: Research Briefing", publisher: "House of Commons Library", url: "https://researchbriefings.files.parliament.uk/documents/CBP-9914/CBP-9914.pdf", date: "2026-08-11" },
        { title: "New UK prime minister pledges to send troops to Ukraine after ceasefire", publisher: "NEWS.am", url: "https://news.am/en/news/1052029", date: "2026" }
      ]
    }
  ]
});
