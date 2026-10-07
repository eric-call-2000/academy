/* ============================================================
   Relationship — United States & Russia 🇺🇸🇷🇺
   The arms-control treaties that capped two nuclear arsenals and
   have now all lapsed, the swing from 'reset' to rupture, and the
   prisoners traded between them. Trump's Ukraine diplomacy is in
   ru-6 and ua-6.
   Research note and sources: tools/research/us_ru.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_ru", {
  id: "us_ru",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_ru-1", kind: "relation", asOf: "2026-09-30",
      title: "The last treaty ends",
      dek: "For half a century, treaties capped the world's two biggest nuclear arsenals. On 5 February 2026 the last of them, New START, expired with nothing to replace it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ru/us_ru-1-hero.webp",
          alt: "Illustration of an empty concrete missile silo with its heavy lid open, in a snowy field under a grey sky.",
          caption: "Arms-control treaties limited how many missiles and warheads each side could deploy, and let each inspect the other.",
          credit: "Illustration — not a photograph",
          prompt: "An empty concrete missile silo with its heavy round lid slid open, set in a flat snowy field with a wire fence, a grey winter sky, bleak and quiet, Cold War atmosphere, no people, no flags, no legible text." },
        { type: "timeline", head: "Treaties made and unmade", items: [
          ["1972", "SALT I and the Anti-Ballistic Missile Treaty"],
          ["1987", "INF Treaty bans intermediate-range missiles"],
          ["1991", "START I cuts strategic arsenals"],
          ["2002", "US leaves the ABM Treaty"],
          ["2010", "New START signed in Prague"],
          ["2019", "US withdraws from the INF Treaty"],
          ["Feb 2023", "Russia suspends New START inspections"],
          ["5 Feb 2026", "New START expires"]
        ] },
        { type: "section", head: "Fifty years of limits", md:
          "After the 1962 Cuban Missile Crisis showed how close the superpowers had come to nuclear war, they began to negotiate. The 1972 SALT and Anti-Ballistic Missile treaties froze parts of the arms race. In 1987 Ronald Reagan and Mikhail Gorbachev signed the INF Treaty, which scrapped a whole class of missiles: 2,692 of them were destroyed. START I in 1991 cut long-range arsenals sharply. At their peak in the mid-1980s the two countries had about 60,000 nuclear warheads between them; in January 2026 they had about 10,500, according to SIPRI, still 86% of the world's total." },
        { type: "section", head: "Unravelling", md:
          "The treaties fell one by one. George W. Bush left the ABM Treaty in 2002 to build missile defences, which Moscow saw as a threat to its deterrent. In 2019 Donald Trump withdrew from the INF Treaty, saying Russia had broken it by deploying a banned cruise missile, the 9M729; Russia denied it. New START, signed by Barack Obama and Dmitry Medvedev in 2010, capped each side at 1,550 deployed strategic warheads and 700 deployed missiles and bombers, with on-site inspections. It was extended once, in 2021. In February 2023, a year into the invasion of Ukraine, Putin suspended Russia's participation, ending inspections." },
        { type: "section", head: "Expiry", md:
          "In September 2025 Putin offered to keep observing New START's central limits informally for a year after it lapsed, if the United States did the same. Trump called it 'a good idea', but no formal reply came. The treaty expired on 5 February 2026. Trump said the US would seek 'a new, improved, and modernized' treaty, ideally one that included China. The same day, US and Russian officials meeting in Abu Dhabi agreed to restore high-level military-to-military contacts. For the first time since 1972, the two largest nuclear arsenals have no legal limits." },
        { type: "compare", head: "What now?",
          left: { head: "Arms controllers", md:
            "Without limits or inspections, each side will plan for the worst, and a costly new arms race becomes more likely. Even informal caps would help." },
          right: { head: "Sceptics", md:
            "Two-sided treaties are outdated while China builds up fast and Russia cheats. A new deal must include Beijing or it is not worth having." } },
        { type: "section", head: "Why it matters", md:
          "Arms control did more than cap numbers: inspections, data exchanges and notifications gave each side a clear view of the other's forces, reducing the risk of miscalculation. China, which has refused to join talks, is expanding its arsenal quickly, from about 300 warheads in 2020 to more than 600 by 2026. The next few years may decide whether a three-way arms race begins." }
      ],
      takeaways: [
        "Treaties from 1972 onward capped US and Russian nuclear arsenals and allowed inspections.",
        "The US left the ABM and INF treaties; Russia suspended New START in 2023.",
        "New START expired on 5 February 2026, leaving no legal limits on either arsenal."
      ],
      check: { q: "What happened to New START on 5 February 2026?",
        choices: ["It was extended for five years", "It expired with no replacement", "China joined it"], answer: 1,
        explain: "The treaty lapsed without a formal deal to keep its limits, leaving the two arsenals uncapped for the first time since 1972." },
      sources: [
        { title: "New START Expires As U.S. Urges 'Modernized' Treaty", publisher: "Arms Control Association", url: "https://www.armscontrol.org/act/2026-03/news/new-start-expires-us-urges-modernized-treaty", date: "2026-03" },
        { title: "The End of New START: From limits to looming risks", publisher: "Nuclear Threat Initiative", url: "https://www.nti.org/analysis/articles/the-end-of-new-start-from-limits-to-looming-risks/", date: "2026" },
        { title: "Three Truths About the End of New START and What It Means for Strategic Competition", publisher: "CSIS", url: "https://www.csis.org/analysis/three-truths-about-end-new-start-and-what-it-means-strategic-competition", date: "2026" },
        { title: "SIPRI Yearbook 2026, Chapter 8: World nuclear forces", publisher: "SIPRI", url: "https://www.sipri.org/sites/default/files/YB26%2008%20World%20Nuclear%20Forces.pdf", date: "2026-06" },
        { title: "Intermediate-Range Nuclear Forces Treaty", publisher: "Britannica", url: "https://www.britannica.com/event/Intermediate-Range-Nuclear-Forces-Treaty", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_ru-2", kind: "relation", asOf: "2026-09-30",
      title: "From reset to rupture",
      dek: "Every American president since the Cold War has tried to get on with Moscow, and every attempt has ended in disappointment. Trump's second term is the latest test.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ru/us_ru-2-hero.webp",
          alt: "Illustration of a large red button on a small pedestal on a polished conference table, with two empty chairs facing each other.",
          caption: "In 2009 Hillary Clinton gave Sergei Lavrov a symbolic 'reset' button. The Russian word printed on it meant 'overload'.",
          credit: "Illustration — not a photograph",
          prompt: "A large round red button on a small grey pedestal sitting on a polished dark wood conference table, two empty leather chairs facing each other across it, soft window light, symbolic and slightly ironic, no people, no flags, no legible text." },
        { type: "timeline", head: "Hopes and ruptures", items: [
          ["1991", "Soviet Union collapses"],
          ["1999", "NATO admits Poland, Hungary and the Czech Republic"],
          ["2008", "Russia's war with Georgia"],
          ["2009", "Obama's 'reset'"],
          ["2014", "Russia annexes Crimea; US sanctions"],
          ["2016", "Russian interference in the US election"],
          ["2022", "Full-scale invasion of Ukraine; sweeping sanctions"],
          ["Aug 2025", "Trump and Putin meet in Alaska"]
        ] },
        { type: "section", head: "The 1990s hope", md:
          "When the Soviet Union collapsed in 1991, Washington hoped Russia would become a democratic partner. Bill Clinton and Boris Yeltsin were friends; the US backed loans to Russia and helped secure Soviet nuclear material. But Russia's economic collapse, the war in Chechnya and NATO's enlargement to Russia's old allies in central Europe, starting in 1999, soured the mood (see [[lesson:ru-3]]). Russians came to believe the West had exploited their weakness. George W. Bush said in 2001 that he had looked Putin in the eye and 'got a sense of his soul', and Putin was the first leader to call him after the 9/11 attacks." },
        { type: "section", head: "Reset", md:
          "The warmth faded over the Iraq war, Western support for protest movements in Ukraine and Georgia, and Russia's 2008 war with Georgia. Barack Obama tried again. In 2009 Secretary of State Hillary Clinton handed Russia's foreign minister Sergei Lavrov a red button meant to say 'reset'; the Russian word on it, peregruzka, meant 'overload'. The reset brought New START and cooperation over Afghanistan, then ended when Putin returned to the presidency in 2012, accusing Clinton of stirring protests against him. In 2014 Russia annexed Crimea and the US imposed sanctions. In 2016, US intelligence agencies concluded, Russia interfered in the presidential election to help Donald Trump; Moscow denied it." },
        { type: "section", head: "Rupture and Trump's return", md:
          "After Russia's full-scale invasion of [[unit:ua|Ukraine]] in February 2022, the Biden administration sent Kyiv tens of billions of dollars in weapons and led sanctions that froze Russian central bank assets and cut its banks off from the dollar. Trump returned in 2025 promising a quick peace. He met Putin in Anchorage, Alaska, in August 2025 and has sent envoys Steve Witkoff and Jared Kushner to Moscow repeatedly, most recently in September 2026, without a deal (see [[lesson:ru-6]]). Sanctions remain, but the two governments now talk about business ties and restored embassies." },
        { type: "compare", head: "Why do resets fail?",
          left: { head: "Many in Moscow", md:
            "America ignored Russia's interests, expanded NATO to its borders and backed revolutions next door. Russia had to defend itself." },
          right: { head: "Many in Washington", md:
            "Putin's regime needs an enemy and wants a sphere of control over its neighbours. No American concession would have satisfied it." } },
        { type: "section", head: "Why it matters", md:
          "The US–Russia relationship decides much of Europe's security and the fate of Ukraine. Trump's willingness to deal with Putin directly has alarmed European allies, but his administration says only talking to Moscow can end the war." }
      ],
      takeaways: [
        "Hopes of partnership after 1991 faded over NATO enlargement, Chechnya and wars in Georgia and Ukraine.",
        "Obama's 2009 'reset' produced New START but collapsed after Putin returned in 2012 and seized Crimea in 2014.",
        "Since 2025 Trump has sought a deal with Putin on Ukraine, but sanctions remain."
      ],
      check: { q: "What did the 'reset' button Clinton gave Lavrov in 2009 actually say?",
        choices: ["'Peace'", "'Overload'", "'Friendship'"], answer: 1,
        explain: "The Russian word printed on it, peregruzka, means 'overload', not 'reset', an awkward start to Obama's reset." },
      sources: [
        { title: "U.S.-Russia Relations 1990–Present", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/timeline/us-russia-relations", date: "n.d." },
        { title: "Trump envoys Witkoff and Kushner meet with Putin about ending the Ukraine war", publisher: "Axios", url: "https://www.axios.com/2026/09/05/putin-witkoff-kushner-trump-ukraine-war", date: "2026-09-05" },
        { title: "Assessing Russian Activities and Intentions in Recent US Elections", publisher: "Office of the Director of National Intelligence", url: "https://www.dni.gov/files/documents/ICA_2017_01.pdf", date: "2017-01-06" },
        { title: "U.S. seeks to 'reset' relations with Russia", publisher: "CNN", url: "https://www.cnn.com/2009/WORLD/europe/03/07/us.russia/index.html", date: "2009-03-07" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_ru-3", kind: "relation", asOf: "2026-09-30",
      title: "Prisoners and swaps",
      dek: "Russia has jailed Americans on charges Washington calls bogus, then traded them for Russians held in the West. The swaps free people but, critics warn, encourage more arrests.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ru/us_ru-3-hero.webp",
          alt: "Illustration of two small passenger jets parked side by side on an airport apron at dusk, with an empty stretch of tarmac between them.",
          caption: "The largest swap since the Cold War took place on the tarmac of Ankara's airport on 1 August 2024.",
          credit: "Illustration — not a photograph",
          prompt: "Two small white passenger jets parked side by side on an airport apron at dusk, an empty stretch of tarmac between them, runway lights and a control tower in the distance, quiet and tense, no people visible, no markings, no flags, no legible text." },
        { type: "timeline", head: "Recent swaps", items: [
          ["Apr 2022", "Trevor Reed freed"],
          ["Dec 2022", "Brittney Griner for arms dealer Viktor Bout"],
          ["1 Aug 2024", "Ankara exchange: 26 people, including Gershkovich and Whelan"],
          ["Feb 2025", "Teacher Marc Fogel freed"],
          ["Apr 2025", "Ksenia Karelina freed in Abu Dhabi"],
          ["Sep 2026", "Report: Trump backs sanctions relief for prisoner releases"]
        ] },
        { type: "section", head: "Hostage diplomacy", md:
          "Since the late 2010s, and especially since the invasion of Ukraine, Russian courts have sentenced a number of Americans to long prison terms: a former marine, Paul Whelan, for spying; the basketball star Brittney Griner for carrying cannabis oil; Wall Street Journal reporter Evan Gershkovich for espionage; a teacher, Marc Fogel, for a small amount of medical marijuana. The US government declared several of them 'wrongfully detained', meaning it believed they were held as bargaining chips. Russia says they were lawfully convicted." },
        { type: "section", head: "The deals", md:
          "In December 2022 Griner was traded for Viktor Bout, a Russian arms dealer serving 25 years in the United States. On 1 August 2024 came the largest East–West exchange since the Cold War, at Ankara airport in [[unit:tr|Turkey]]: Russia and Belarus freed 16 people, including Gershkovich, Whelan, the journalist Alsu Kurmasheva and the Russian opposition politician Vladimir Kara-Murza, while the US, [[unit:de|Germany]], [[unit:pl|Poland]], Slovenia and Norway released eight Russians and two children. Among them was Vadim Krasikov, an FSB officer serving a life sentence in Germany for a murder in a Berlin park, whose freedom Putin had demanded. After Trump returned, Fogel was freed in February 2025 and the ballet dancer Ksenia Karelina in April, each in exchange for a Russian." },
        { type: "section", head: "Prisoners for sanctions?", md:
          "In late September 2026 The Atlantic reported that Trump had backed a plan by his envoy John Coale to ease some sanctions on Russia in return for the release of political prisoners, a model Coale had tried in Belarus, where hundreds of prisoners were freed and US sanctions on potash were lifted. The White House nominated Coale as its hostage envoy. The Kremlin denied any such talks, calling that framing of the issue inappropriate, and critics of the plan warned it could encourage authoritarian governments to take more people hostage." },
        { type: "compare", head: "Should governments trade?",
          left: { head: "Yes", md:
            "Innocent people are freed and families reunited. Swaps also keep a channel open when little else works." },
          right: { head: "At a cost", md:
            "Releasing spies and killers rewards hostage-taking and tells Moscow that arresting foreigners pays." } },
        { type: "section", head: "Why it matters", md:
          "Prisoner swaps have become one of the few areas where Washington and Moscow cooperate, often with help from Turkey, the UAE and Saudi Arabia. Linking them to sanctions would be new, and it would test whether freeing political prisoners can buy anything larger. Families of Americans still held in Russia lobby to be included in any deal, and Russian human-rights groups, which count hundreds of political prisoners in their country's jails, want those people freed too." }
      ],
      takeaways: [
        "Russia has jailed several Americans on charges the US calls bogus, and traded them for Russians held abroad.",
        "The 1 August 2024 Ankara exchange of 26 people was the largest since the Cold War.",
        "In September 2026 Trump was reported to back easing sanctions in return for political prisoners' release."
      ],
      check: { q: "Where did the August 2024 US–Russia prisoner exchange take place?",
        choices: ["Geneva", "Ankara airport in Turkey", "Helsinki"], answer: 1,
        explain: "The 26-person exchange, the largest since the Cold War, happened at Ankara's Esenboğa Airport on 1 August 2024." },
      sources: [
        { title: "U.S.-Russia Prisoner Swap: Gershkovich, Whelan Freed in Historic Deal", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2024/08/01/us-russia-prisoner-swap-whelan-gershkovich-kurmasheva/", date: "2024-08-01" },
        { title: "Russia frees Evan Gershkovich, Paul Whelan in major prisoner swap with U.S.", publisher: "Axios", url: "https://www.axios.com/2024/08/01/russia-prisoner-swap-evan-gershkovich-paul-whelan", date: "2024-08-01" },
        { title: "The Atlantic: Trump backs plan to ease Russia sanctions in exchange for political prisoners", publisher: "Meduza", url: "https://meduza.io/en/news/2026/09/29/the-atlantic-trump-backs-plan-to-ease-russia-sanctions-in-exchange-for-political-prisoners-without-waiting-for-the-ukraine-war-to-end", date: "2026-09-29" },
        { title: "Kremlin Denies Talks on Freeing Political Prisoners for U.S. Sanctions Relief", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/09/30/kremlin-denies-talks-on-freeing-political-prisoners-for-us-sanctions-relief-a93825", date: "2026-09-30" }
      ]
    }
  ]
});
