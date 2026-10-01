/* ============================================================
   Relationship — Turkey & Ukraine 🇹🇷🇺🇦
   The Crimean Khanate, Ottoman Crimea and the Tatars; Bayraktar
   drones, closed straits and the grain deal; and Istanbul as the
   venue for prisoner swaps and peace talks.
   Turkey's balancing act is in tr-7; Russia's side is in tr_ru.
   Research note and sources: tools/research/tr_ua.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("tr_ua", {
  id: "tr_ua",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "tr_ua-1", kind: "relation", asOf: "2026-10-01",
      title: "Crimea and the Tatars",
      dek: "For three centuries Crimea was an Ottoman vassal ruled by Tatar khans. Russia annexed it in 1783 and Stalin deported the Tatars in 1944. Their fate still binds Turkey to Ukraine.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_ua/tr_ua-1-hero.webp",
          alt: "Illustration of an old palace with a minaret and carved wooden galleries in a green valley in Crimea.",
          caption: "The khans' palace at Bakhchysarai was the capital of the Crimean Khanate.",
          credit: "Illustration — not a photograph",
          prompt: "An old Crimean Tatar palace with a slender minaret, carved wooden galleries and a courtyard fountain in a green valley with limestone cliffs, soft morning light, historical painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A shared past", items: [
          ["1475", "The Crimean Khanate becomes an Ottoman vassal"],
          ["1774", "Treaty of Küçük Kaynarca ends Ottoman rule in Crimea"],
          ["1783", "Russia annexes Crimea"],
          ["May 1944", "Stalin deports the Crimean Tatars"],
          ["1991", "Turkey quickly recognises independent Ukraine"],
          ["2014", "Russia annexes Crimea; Turkey refuses to recognise it"]
        ] },
        { type: "section", head: "Ottoman Crimea", md:
          "From 1475 the Crimean Khanate, ruled by the Giray dynasty of Tatar khans, was a vassal of the Ottoman Empire, which also held fortresses on what is now Ukraine's southern coast. Tatar raiders took captives from Ukrainian and Russian lands for the slave markets of Crimea and Constantinople. Ukrainian Cossacks, in turn, raided Ottoman coasts. The Black Sea was, for centuries, an Ottoman lake." },
        { type: "section", head: "Russia takes Crimea", md:
          "Russia's wars with the Ottomans pushed it south (see [[lesson:tr_ru-1]]). The 1774 Treaty of Küçük Kaynarca made the khanate nominally independent, under Russian influence, and in April 1783 Catherine the Great, urged by Prince Potemkin, annexed it outright. Hundreds of thousands of Crimean Tatars emigrated to Ottoman lands over the following century, and their descendants form a large community in Turkey today." },
        { type: "section", head: "Deportation and return", md:
          "In May 1944 Stalin accused the Crimean Tatars of collaborating with the Nazis and deported the whole people, about 200,000, to Central Asia, mostly Uzbekistan, with half an hour's notice. Tens of thousands died on the way or soon after. Only in the late 1980s were they allowed home. Their leader Mustafa Dzhemilev, who spent fifteen years in Soviet camps, later became a Ukrainian MP, and Ukraine's parliament recognised the deportation as genocide in 2015." },
        { type: "section", head: "Independent neighbours", md:
          "When Ukraine became independent in 1991 (see [[lesson:ua-9]]), Turkey was among the first to recognise it. Trade grew across the Black Sea: Ukrainian grain, steel and sunflower oil went south, and Turkish builders, tourists and goods went north. Turkey helped Crimean Tatars resettle and backed their autonomy within Ukraine. When Russia annexed Crimea in 2014, Turkey refused to recognise it and spoke up for the Tatars, though it did not join Western sanctions." },
        { type: "section", head: "Tatars under Russian rule again", md:
          "Since 2014 Crimean Tatars have again suffered under Moscow. Russia barred Dzhemilev from entering Crimea, banned the Mejlis, the Tatars' elected assembly, as 'extremist' in 2016, and jailed dozens of Tatar activists on terrorism charges that human rights groups call fabricated. Turkey has raised their cases with Moscow and takes part in the Crimea Platform, Ukraine's diplomatic forum for returning the peninsula, launched in 2021." },
        { type: "compare", head: "Why Crimea matters to Turkey",
          left: { head: "Kinship", md:
            "Crimean Tatars are a Turkic, Muslim people with millions of relatives in Turkey." },
          right: { head: "Strategy", md:
            "A Russian Crimea makes Russia the dominant naval power in the Black Sea." } },
        { type: "section", head: "Why it matters", md:
          "History gives Turkey both a sentimental and a strategic reason to want Crimea out of Russian hands, even as it trades with Moscow. Ukraine knows that and counts on it." }
      ],
      takeaways: [
        "Crimea was an Ottoman vassal from 1475 until Russia annexed it in 1783.",
        "Stalin deported the Crimean Tatars in 1944; many of their relatives live in Turkey.",
        "Turkey refused to recognise Russia's 2014 annexation of Crimea."
      ],
      check: { q: "Who ruled Crimea before Russia annexed it in 1783?",
        choices: ["Poland", "The Crimean Khanate, an Ottoman vassal", "Austria"], answer: 1,
        explain: "The Tatar khans had been Ottoman vassals since 1475." },
      sources: [
        { title: "1783 Russian annexation of Crimea", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/1783_Russian_annexation_of_Crimea", date: "n.d." },
        { title: "Behind the Headlines: Who Are the Crimean Tatars?", publisher: "National Geographic", url: "https://www.nationalgeographic.com/history/article/140314-crimea-tatars-referendum-russia-muslim-ethnic-history-culture", date: "2014-03-14" },
        { title: "Ukraine: Crimea's Tatars – Mustafa Dzhemilev: Hero, Leader, Statesman", publisher: "RFE/RL", url: "https://www.rferl.org/a/1054488.html", date: "n.d." },
        { title: "Crimean Khanate", publisher: "Encyclopedia.com", url: "https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/crimean-khanate", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "tr_ua-2", kind: "relation", asOf: "2026-10-01",
      title: "Drones, straits and grain",
      dek: "Turkish Bayraktar drones became a symbol of Ukraine's early resistance. Turkey closed the straits to warships and brokered the deal that let Ukrainian grain sail again, without joining sanctions on Russia.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_ua/tr_ua-2-hero.webp",
          alt: "Illustration of a bulk carrier loaded with grain sailing through the Bosphorus past mosques and a bridge.",
          caption: "Under the 2022 grain deal, ships carried Ukrainian grain through Istanbul's Bosphorus.",
          credit: "Illustration — not a photograph",
          prompt: "A large bulk carrier ship sailing through the Bosphorus strait past Istanbul's domed mosques and a suspension bridge, calm blue water, gulls, morning light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Wartime partner", items: [
          ["2019", "Ukraine buys Bayraktar TB2 drones"],
          ["Feb 2022", "Free trade agreement signed; Russia invades"],
          ["Feb–Mar 2022", "Turkey closes the straits to warships"],
          ["29 Mar 2022", "Russia–Ukraine talks in Istanbul"],
          ["22 Jul 2022", "Black Sea Grain Initiative signed in Istanbul"],
          ["Jul 2023", "Russia quits the grain deal"]
        ] },
        { type: "section", head: "Bayraktar", md:
          "Ukraine bought Turkish Bayraktar TB2 armed drones from 2019 and used them in Donbas in 2021. In the first weeks of the 2022 invasion, TB2s destroyed Russian vehicles and air defences, and Ukrainians wrote songs about them. Baykar, the family firm that makes them, whose chief technology officer Selçuk Bayraktar is Erdoğan's son-in-law, donated drones to Ukraine and agreed to build a $100 million factory near Kyiv. A Russian missile strike destroyed a Baykar facility in Ukraine in 2025; the company pledged to rebuild." },
        { type: "section", head: "Closing the straits", md:
          "Under the 1936 Montreux Convention, Turkey controls the Bosphorus and Dardanelles, the only sea route between the Black Sea and the Mediterranean. Days after the invasion, at Ukraine's request, Turkey officially called the conflict a war and closed the straits to warships of the warring parties, while allowing ships returning to their Black Sea bases. It stopped Russia reinforcing its Black Sea Fleet, which Ukraine then battered with drones and missiles." },
        { type: "section", head: "The grain deal", md:
          "Russia's blockade trapped millions of tonnes of Ukrainian grain, threatening food shortages in Africa and the Middle East. On 22 July 2022 Turkey and the UN brokered the Black Sea Grain Initiative, signed in Istanbul, with inspections of ships in Turkish waters. Almost 33 million tonnes of food reached 45 countries before Russia withdrew in July 2023. Ukraine then opened its own sea corridor along the coast." },
        { type: "section", head: "Friend to both", md:
          "Turkey never joined Western sanctions on Russia; its trade with Russia boomed and it buys Russian gas and oil (see [[lesson:tr_ru-3]]). Ukraine's government accepted this, because Ankara's ties with Moscow made it a useful go-between. In July 2023 Erdoğan let five commanders of the Azovstal garrison, held in Turkey under a swap deal, return to Ukraine, angering the Kremlin. Erdoğan has said Ukraine deserves NATO membership, and Turkey backs its territorial integrity, Crimea included." },
        { type: "section", head: "Warships stuck in Istanbul", md:
          "Turkish shipyards are building corvettes for Ukraine's navy; the first, the Hetman Ivan Mazepa, was launched in Istanbul in October 2022. But under Turkey's own wartime closure of the straits they cannot sail into the Black Sea while the war lasts. In January 2024 Turkey also refused passage to two minehunters Britain had given Ukraine, applying the same rule to friends and foes." },
        { type: "compare", head: "Turkey's war",
          left: { head: "For Ukraine", md:
            "Drones, closed straits, the grain corridor and support for its borders." },
          right: { head: "For itself", md:
            "No sanctions on Russia, booming trade and a role as the indispensable mediator." } },
        { type: "section", head: "Why it matters", md:
          "Turkey has shown that a NATO member can arm Ukraine and trade with Russia at the same time, and gain influence from both." }
      ],
      takeaways: [
        "Turkish Bayraktar drones helped Ukraine early in the war; Baykar is building a plant near Kyiv.",
        "Turkey closed the straits to warships in 2022 under the Montreux Convention.",
        "Turkey and the UN brokered the grain deal that shipped almost 33 million tonnes of food in 2022–23."
      ],
      check: { q: "What did the 2022 Black Sea Grain Initiative do?",
        choices: ["Banned Ukrainian grain exports", "Let Ukrainian grain ships sail safely, with inspections in Turkish waters", "Gave Turkey control of Odesa"], answer: 1,
        explain: "About 33 million tonnes of food reached 45 countries before Russia withdrew in July 2023." },
      sources: [
        { title: "Black Sea Grain Initiative: What was achieved?", publisher: "United Nations", url: "https://www.un.org/en/black-sea-grain-initiative/achievements", date: "2023" },
        { title: "Turkey closes the Dardanelles and Bosphorus to warships", publisher: "Naval News", url: "https://www.navalnews.com/naval-news/2022/02/turkey-closes-the-dardanelles-and-bosphorus-to-warships/", date: "2022-02" },
        { title: "Turkey's Baykar to spend $100 million on Ukraine drone production", publisher: "C4ISRNET", url: "https://www.c4isrnet.com/global/europe/2023/10/10/turkeys-baykar-to-spend-100-million-on-ukraine-production-plant/", date: "2023-10-10" },
        { title: "Turkish drone maker pledges to rebuild destroyed Ukraine factory", publisher: "Turkish Minute", url: "https://www.turkishminute.com/2025/10/13/turkish-drone-maker-pledges-to-rebuild-destroyed-ukraine-factory/", date: "2025-10-13" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "tr_ua-3", kind: "relation", asOf: "2026-10-01",
      title: "Istanbul, the talks city",
      dek: "Every serious round of Russia–Ukraine talks has passed through Istanbul. Turkey has helped bring home thousands of Ukrainian prisoners, and Erdoğan wants to host the peace deal.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_ua/tr_ua-3-hero.webp",
          alt: "Illustration of an Ottoman palace on the Bosphorus shore at dusk, its windows lit, with boats on the water.",
          caption: "Istanbul's palaces have hosted Russia–Ukraine talks since 2022.",
          credit: "Illustration — not a photograph",
          prompt: "A long white Ottoman palace on the Bosphorus shore at dusk, warm lights in tall windows, small boats on the water, the Asian shore and a bridge in the distance, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Talks and swaps", items: [
          ["Mar 2022", "First Istanbul talks; a draft deal collapses"],
          ["May–Jul 2025", "Three rounds of direct talks in Istanbul"],
          ["2025", "Largest prisoner swaps of the war"],
          ["4 Apr 2026", "Zelensky meets Erdoğan in Istanbul"],
          ["Jul 2026", "Ukraine ratifies the free trade agreement"],
          ["2026", "Zelensky invites Erdoğan to visit Ukraine"]
        ] },
        { type: "section", head: "Talks in 2022", md:
          "On 29 March 2022, at the Dolmabahçe Palace in Istanbul, Russian and Ukrainian negotiators discussed a draft deal under which Ukraine would be neutral in return for security guarantees. The talks collapsed after the discovery of atrocities in Bucha and amid Western scepticism; each side blames the other. The draft has been cited ever since in arguments about whether peace was possible early in the war (see [[lesson:ua-6]])." },
        { type: "section", head: "Back to Istanbul", md:
          "In May 2025, under pressure from the Trump administration, Russian and Ukrainian delegations met directly in Istanbul for the first time in three years. Two more rounds followed in June and July. They produced no ceasefire, but did agree the largest prisoner exchanges of the war, including a swap of a thousand prisoners each, and the return of thousands of soldiers' bodies. Turkey hosted and helped organise the exchanges." },
        { type: "section", head: "Zelensky in Istanbul", md:
          "On 4 April 2026 Zelensky met Erdoğan in Istanbul. They agreed new steps on security and energy cooperation, and Erdoğan offered to host talks between Ukraine, the United States and Russia. Zelensky thanked him for helping to bring home around 2,500 Ukrainian prisoners and said he hoped Turkish help would restart exchanges. Ukraine's envoy later said Zelensky had invited Erdoğan to visit Ukraine, which he has not done since 2022." },
        { type: "section", head: "Trade and rebuilding", md:
          "In 2025 Turkey was the second-largest market for Ukrainian exports, and trade between them reached $7.9 billion. In July 2026 Ukraine's parliament ratified the free trade agreement signed in February 2022, days before the invasion; Turkey had ratified it in 2024. Turkish construction firms hope to play a large part in Ukraine's reconstruction, and Turkish shipyards and defence companies already work with Ukrainian partners on drones and warships." },
        { type: "section", head: "Guarding the Black Sea", md:
          "In January 2024 Turkey, Romania and Bulgaria set up a joint naval task group to clear mines drifting in the Black Sea, keeping out other NATO navies under the Montreux rules. Turkey has joined European discussions on securing Ukraine after any ceasefire and has offered to help guarantee safe shipping, a role that would raise its standing in both Kyiv and Moscow." },
        { type: "compare", head: "Turkey as mediator",
          left: { head: "Strengths", md:
            "Talks to Putin and Zelensky, hosts both sides, and controls the straits." },
          right: { head: "Limits", md:
            "Cannot impose a deal; Washington and Moscow decide the big questions." } },
        { type: "section", head: "Why it matters", md:
          "If a ceasefire comes, Istanbul is the most likely place to sign it, and Turkey will want a role in guaranteeing Black Sea security afterwards (see [[lesson:tr-7]])." }
      ],
      takeaways: [
        "Russia–Ukraine talks were held in Istanbul in 2022 and again three times in 2025.",
        "Turkey helped organise prisoner exchanges that brought home about 2,500 Ukrainians.",
        "Ukraine ratified a free trade agreement with Turkey in July 2026; Turkey is a top market for its exports."
      ],
      check: { q: "What did the 2025 Istanbul talks achieve?",
        choices: ["A full ceasefire", "Large prisoner exchanges but no ceasefire", "Ukraine's entry into NATO"], answer: 1,
        explain: "Three rounds produced the war's biggest prisoner swaps but no ceasefire." },
      sources: [
        { title: "Russia and Ukraine agree to swap prisoners but no ceasefire after Turkey talks", publisher: "NPR", url: "https://www.npr.org/2025/05/15/nx-s1-5399199/ukraine-russia-talks-turkey-zelenskyy-putin", date: "2025-05-15" },
        { title: "Russia and Ukraine discuss more prisoner exchanges at Istanbul talks", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/7/23/russia-set-for-ukraine-talks-in-turkiye-says-progress-will-be-difficult", date: "2025-07-23" },
        { title: "Erdogan Offers Istanbul for Peace Talks, Zelensky Agrees to New Security Cooperation", publisher: "Kyiv Post", url: "https://www.kyivpost.com/post/73251", date: "2026-04" },
        { title: "Ukrainian parliament ratifies free trade agreement with Turkey", publisher: "Ukrinform", url: "https://www.ukrinform.net/rubric-economy/4144215-ukrainian-parliament-ratifies-free-trade-agreement-with-turkey.html", date: "2026-07" },
        { title: "Zelensky invites Turkey's Erdogan for first Ukraine visit since 2022, envoy says", publisher: "Yahoo News (Reuters)", url: "https://www.yahoo.com/news/articles/zelensky-invites-turkeys-erdogan-first-065154289.html", date: "2026" }
      ]
    }
  ]
});
