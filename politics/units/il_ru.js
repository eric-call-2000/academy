/* ============================================================
   Relationship — Israel & Russia 🇮🇱🇷🇺
   Soviet recognition in 1948, then arms to Israel's enemies and
   the refuseniks; a million Russian-speaking immigrants and
   Netanyahu's courtship of Putin; and a cooling over Ukraine,
   Hamas and the Iran wars.
   Russia's ties with Iran are in ir_ru.
   Research note and sources: tools/research/il_ru.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("il_ru", {
  id: "il_ru",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "il_ru-1", kind: "relation", asOf: "2026-10-01",
      title: "Midwife, then enemy",
      dek: "The Soviet Union was one of the first to recognise Israel and let it buy weapons in 1948. Within years Moscow was arming Israel's Arab enemies, and Soviet Jews who wanted to leave were jailed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il_ru/il_ru-1-hero.webp",
          alt: "Illustration of crowds of immigrants with suitcases at an airport arrivals hall in the early 1990s.",
          caption: "About a million people from the former Soviet Union moved to Israel in the 1990s.",
          credit: "AI illustration — not a photograph",
          prompt: "A crowded airport arrivals hall in the early 1990s, families with suitcases, bundles and coats, a welcome desk in the background, warm fluorescent light, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "From midwife to enemy", items: [
          ["17 May 1948", "The USSR recognises Israel"],
          ["1948", "Czechoslovak arms, approved by Moscow, reach Israel"],
          ["1955", "Soviet bloc begins arming Egypt"],
          ["Jun 1967", "USSR breaks relations after the Six-Day War"],
          ["1970s–80s", "Refuseniks campaign to emigrate"],
          ["Oct 1991", "Relations restored as the USSR collapses"]
        ] },
        { type: "section", head: "Stalin's surprise", md:
          "In 1947 the Soviet Union backed the UN plan to partition Palestine, and on 17 May 1948, three days after Israel declared independence, it gave the new state full legal recognition (see [[lesson:il-9]]). Stalin hoped a socialist-led Israel would weaken Britain in the Middle East. With Moscow's approval, Czechoslovakia sold Israel rifles and fighter planes that were vital in its war of independence." },
        { type: "section", head: "Turning to the Arabs", md:
          "The friendship soon soured as Israel aligned with the West and Stalin turned on Soviet Jews. From 1955 the Soviet bloc armed Egypt, then Syria and Iraq, with tanks, jets and missiles, and Soviet advisers served in Egypt. In 1970 Israeli pilots shot down several Soviet-flown MiGs over Egypt. After the 1967 war Moscow broke off relations with Israel, and for a quarter of a century the two were on opposite sides of the Cold War in the Middle East (see [[lesson:il-10]])." },
        { type: "section", head: "Let my people go", md:
          "Soviet Jews faced discrimination, and many who applied to emigrate to Israel were refused and lost their jobs; they became known as 'refuseniks'. Some, like Natan Sharansky, were jailed. Western campaigns made their cause famous, and the US Congress tied trade with Moscow to emigration in 1974. Sharansky was freed in a 1986 prisoner swap and later became an Israeli minister." },
        { type: "section", head: "The great aliyah", md:
          "As the Soviet Union opened up and collapsed, the gates swung wide. From 1989 about a million people from the former Soviet Union, mostly from Russia and Ukraine, moved to Israel within a decade, when Israel had fewer than five million people. They transformed the country: engineers and scientists fuelled its tech boom, Russian-language newspapers and shops sprang up, and parties such as Avigdor Lieberman's Yisrael Beiteinu gave them political weight. Moscow restored relations in October 1991." },
        { type: "section", head: "Russian Israel", md:
          "Today Russian is one of the most widely spoken languages in Israel, and many Israelis also hold Russian citizenship. Many still have family in Russia and Ukraine. The community leans to the right in Israeli politics and is wary of Moscow; after Russia's invasion of Ukraine in 2022, tens of thousands more Russians and Ukrainians, Jewish or with Jewish roots, moved to Israel." },
        { type: "compare", head: "Two memories",
          left: { head: "Gratitude", md:
            "The USSR recognised Israel and allowed the arms that helped it survive in 1948." },
          right: { head: "Grievance", md:
            "Moscow armed Israel's enemies for decades and persecuted Soviet Jews." } },
        { type: "section", head: "Why it matters", md:
          "Few countries have shaped Israel as much as Russia: first as a sponsor of its enemies, then as the origin of more than a million of its citizens." }
      ],
      takeaways: [
        "The USSR recognised Israel in May 1948 and approved Czech arms sales, then turned to arming the Arab states.",
        "Moscow broke relations after the 1967 war; Soviet 'refuseniks' were denied the right to emigrate.",
        "About a million people from the former USSR moved to Israel in the 1990s."
      ],
      check: { q: "What was the 'great aliyah' of the 1990s?",
        choices: ["Israel's withdrawal from Lebanon", "The arrival of about a million immigrants from the former Soviet Union", "A peace treaty with Syria"], answer: 1,
        explain: "They arrived when Israel had fewer than five million people." },
      sources: [
        { title: "Soviet Union Recognizes Israel", publisher: "Center for Israel Education", url: "https://israeled.org/soviet-union-recognizes-israel/", date: "n.d." },
        { title: "Israel – Soviet Union", publisher: "Library of Congress Country Studies", url: "https://countrystudies.us/israel/109.htm", date: "n.d." },
        { title: "Who are Russian-speaking Israelis?", publisher: "Unpacked", url: "https://unpacked.media/who-are-russian-speaking-israelis/", date: "n.d." },
        { title: "Two decades on, Russian immigrants a rare case of successful aliyah", publisher: "Jewish Telegraphic Agency", url: "https://www.jta.org/2013/12/30/israel/two-decades-on-israels-russian-immigrants-move-from-successful-absorption-to-integration", date: "2013-12-30" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "il_ru-2", kind: "relation", asOf: "2026-10-01",
      title: "Netanyahu and Putin",
      dek: "Netanyahu met Putin about twenty times, more than any US president. When Russia entered Syria in 2015, the two set up a hotline so Israeli jets could strike Iranian targets without clashing with Russian forces.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il_ru/il_ru-2-hero.webp",
          alt: "Illustration of fighter jets flying over a dry Syrian landscape at dusk, with an air base and radar dishes far below.",
          caption: "From 2015 Israel and Russia kept a military hotline over Syria.",
          credit: "AI illustration — not a photograph",
          prompt: "Two fighter jets flying high over a dry brown Syrian landscape at dusk, a distant air base with radar dishes and hangars far below, orange sky, documentary painting style, no people, no markings, no flags, no legible text." },
        { type: "timeline", head: "A working relationship", items: [
          ["2009–21", "Netanyahu meets Putin about 20 times"],
          ["Sep 2015", "Russia intervenes in Syria; deconfliction agreed"],
          ["Sep 2018", "Russian plane downed by Syrian fire after an Israeli raid"],
          ["2020", "Putin pardons an Israeli woman jailed in Russia"],
          ["Feb 2022", "Russia invades Ukraine; Israel tries to mediate"],
          ["Dec 2024", "Assad falls; Russia's role in Syria shrinks"]
        ] },
        { type: "section", head: "Two survivors", md:
          "Benjamin Netanyahu built a close working relationship with Vladimir Putin. Between 2009 and 2021 he met Putin about twenty times, roughly twice as often as he met any American president. Their bond was less friendship than mutual respect between two long-serving leaders. Netanyahu even put a photo of himself with Putin on his campaign posters. Russian-speaking voters, and Lieberman's party, made Moscow a domestic issue too." },
        { type: "section", head: "Deconfliction in Syria", md:
          "When Russia sent forces to Syria in September 2015 to save Bashar al-Assad, Israel faced a dilemma: it regularly bombed Iranian and Hezbollah targets there. Netanyahu flew to Moscow, and the two militaries set up a 'deconfliction' line. In practice Russia did not interfere with Israeli strikes on Iranian targets, and Israel avoided hitting Russian forces. The arrangement survived for nearly a decade, though Russia never gave Israel a free hand." },
        { type: "section", head: "Crisis and repair", md:
          "In September 2018 Syrian air defences, firing at Israeli jets, shot down a Russian reconnaissance plane, killing 15 Russian servicemen. Moscow blamed Israel and supplied Syria with more advanced S-300 missiles. Netanyahu worked to repair ties. In 2020 Putin pardoned an Israeli-American woman jailed in Russia on drug charges after Netanyahu's appeals, a gesture to his friend before an Israeli election." },
        { type: "section", head: "Ukraine", md:
          "When Russia invaded Ukraine in February 2022, Israel condemned the invasion but refused to join sanctions or send weapons, citing the need to keep its freedom of action in Syria and to protect Jews in Russia. Prime Minister Naftali Bennett even flew to Moscow to try to mediate. Ukraine's Jewish president, Volodymyr Zelensky, criticised Israel for not doing more. Quietly, Israel did share intelligence on Iranian drones used by Russia and later reportedly sent Patriot interceptors to Ukraine." },
        { type: "section", head: "Visas, tourists and oligarchs", md:
          "Business and travel boomed in the 2000s. In 2008 the two countries abolished visas for each other's citizens, and Russian tourists filled Israeli resorts and Christian holy sites. Some wealthy Russians of Jewish origin took Israeli citizenship under the Law of Return; the billionaire Roman Abramovich did so in 2018. Critics in the West later asked whether Israel had become a refuge for sanctioned Russian money." },
        { type: "compare", head: "Why Israel courted Russia",
          left: { head: "Interests", md:
            "Freedom to strike Iran in Syria, and the safety of Jews and Israelis in Russia." },
          right: { head: "Costs", md:
            "Angered Ukraine and Western allies, and bought less than Netanyahu hoped." } },
        { type: "section", head: "Why it matters", md:
          "Israel's courtship of Moscow showed how a small state balances great powers. When Assad fell in December 2024 (see [[lesson:tr_il-3]]), the main reason for it weakened." }
      ],
      takeaways: [
        "Netanyahu met Putin about 20 times between 2009 and 2021.",
        "From 2015 Israel and Russia ran a deconfliction line in Syria so Israel could strike Iranian targets.",
        "Israel condemned the 2022 invasion of Ukraine but did not join sanctions or openly send weapons."
      ],
      check: { q: "Why did Israel and Russia set up a hotline in 2015?",
        choices: ["To trade gas", "To avoid clashes in Syria while Israel struck Iranian targets", "To plan a joint invasion"], answer: 1,
        explain: "Russia did not interfere with Israeli strikes on Iranian and Hezbollah targets." },
      sources: [
        { title: "The Russia Exception", publisher: "Tablet Magazine", url: "https://www.tabletmag.com/sections/israel-middle-east/articles/russia-exception-israel-putin", date: "n.d." },
        { title: "Israel and Russia to Coordinate Military Action in Syria: Benjamin Netanyahu", publisher: "NBC News", url: "https://www.nbcnews.com/news/vladimir-putin/israel-russia-coordinate-military-action-syria-pm-netanyahu-n431101", date: "2015-09" },
        { title: "Walking the 'Very Narrow Bridge': Israel's Calculus Between Russia and Ukraine", publisher: "Hoover Institution", url: "https://www.hoover.org/research/walking-very-narrow-bridge-israels-calculus-between-russia-and-ukraine", date: "n.d." },
        { title: "Russia and Israel: A Complicated Friendship", publisher: "Middle East Policy Council", url: "https://mepc.org/commentaries/russia-israel-a-complicated-friendship/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "il_ru-3", kind: "relation", asOf: "2026-10-01",
      title: "Hamas, Iran and a cold peace",
      dek: "After 7 October Russia hosted Hamas leaders and drew closer to Iran. When the US and Israel went to war with Iran in 2026, Putin called Khamenei's killing a 'cynical murder'. Yet the phone line to Netanyahu stays open.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/il_ru/il_ru-3-hero.webp",
          alt: "Illustration of an old-fashioned telephone on a desk in a dim room, with a city skyline at night through the window.",
          caption: "Putin and Netanyahu have kept talking by phone despite deep disagreements.",
          credit: "AI illustration — not a photograph",
          prompt: "An old-fashioned desk telephone on a polished wooden desk in a dim office, a city skyline with lights visible through a tall window at night, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Drifting apart", items: [
          ["Oct 2023", "Russia hosts a Hamas delegation weeks after 7 October"],
          ["Jan 2025", "Iran–Russia strategic partnership treaty"],
          ["Jun 2025", "Putin condemns Israel's strikes on Iran"],
          ["16 Jan 2026", "Putin and Netanyahu discuss Iran by phone"],
          ["28 Feb 2026", "US–Israeli war on Iran; Khamenei killed"],
          ["2026", "Russia condemns the war but sends no forces"]
        ] },
        { type: "section", head: "After 7 October", md:
          "Russia's response to Hamas's attack on 7 October 2023 shocked Israelis. Putin compared Israel's siege of Gaza to the Nazi siege of Leningrad, and weeks later Moscow hosted a Hamas delegation. Russia, Hamas and Iran all saw the war as a chance to weaken the American-led order. In a phone call, Netanyahu criticised Putin over Russia's stance on Gaza and its blossoming ties with Iran, whose drones Russia was using in Ukraine (see [[lesson:ir_ru-2]])." },
        { type: "section", head: "Iran first", md:
          "Russia and Iran signed a strategic partnership treaty in January 2025. When Israel struck Iran's nuclear and military sites in June 2025, Putin called the attacks illegal and offered to mediate, but sent no help. In February 2026, when the US and Israel launched a much larger war and killed Ali Khamenei (see [[lesson:ir-7]]), Putin called it a 'cynical' murder in violation of international law. Again, Russia supported Iran diplomatically but did not intervene militarily." },
        { type: "section", head: "Still talking", md:
          "Despite all this, the two leaders keep talking. Putin and Netanyahu spoke by phone four times in 2025, after none in 2024, and again on 16 January 2026, when they discussed Iran and Putin offered mediation. Netanyahu told the Knesset that their long relationship 'serves our vital interests'. Israel still wants Russian restraint on arms to Iran and help with Israelis and Jews in Russia; Moscow wants Israel not to arm Ukraine." },
        { type: "section", head: "Public opinion", md:
          "Ordinary Israelis have turned firmly against Russia: a Pew survey in 2025 found more than 80% viewed it unfavourably. In Russia, state media coverage of Israel has grown hostile. Israel has considered sending Ukraine Russian-made weapons captured from Hezbollah in Lebanon, a step that would anger Moscow; a bill to allow it was introduced in the Knesset." },
        { type: "section", head: "Syria after Assad", md:
          "With Assad gone, Russia's naval base at Tartus and air base at Hmeimim have uncertain futures, and its value to Israel as a restraint on Iran in Syria has largely disappeared. Turkey has become the main outside power there instead, a new worry for Israel (see [[lesson:tr_il-3]]). Some Israeli officials reportedly preferred that Russia keep a foothold in Syria to balance Turkey." },
        { type: "compare", head: "Where they stand",
          left: { head: "Divided", md:
            "Russia backs Iran, hosted Hamas and condemns Israel's wars; Israel quietly helps Ukraine." },
          right: { head: "Connected", md:
            "A million Russian-speaking Israelis, a leaders' hotline and shared fear of chaos in the region." } },
        { type: "section", head: "Why it matters", md:
          "Russia has chosen Iran over Israel, but neither side wants a complete break. The relationship has become a cold peace." }
      ],
      takeaways: [
        "After 7 October Russia hosted Hamas and drew closer to Iran.",
        "Putin condemned the 2026 US–Israeli war on Iran but sent no forces.",
        "Putin and Netanyahu still talk regularly; over 80% of Israelis view Russia unfavourably."
      ],
      check: { q: "How did Russia respond to the 2026 US–Israeli war on Iran?",
        choices: ["It sent troops to defend Iran", "It condemned the war strongly but did not intervene militarily", "It supported Israel"], answer: 1,
        explain: "Putin called Khamenei's killing a 'cynical' murder but sent no forces." },
      sources: [
        { title: "A Partnership in Doubt: The Evolution of Russian-Israeli Relations", publisher: "Riddle", url: "https://ridl.io/a-partnership-in-doubt-the-evolution-of-russian-israeli-relations/", date: "2026" },
        { title: "In call, Netanyahu flogs Putin over Gaza war stance and blossoming Iran ties", publisher: "The Times of Israel", url: "https://www.timesofisrael.com/in-call-netanyahu-flogs-putin-over-gaza-war-stance-and-blossoming-iran-ties/", date: "2023-12" },
        { title: "Russian President Putin holds talks with Israeli PM Netanyahu on situation in West Asia and Iran", publisher: "All India Radio News", url: "https://www.newsonair.gov.in/russian-president-putin-holds-talks-with-israeli-pm-benjamin-netanyahu-on-situation-in-west-asia-and-iran", date: "2026-01-16" },
        { title: "Israel's complicated but strategic relationship with Russia could strengthen with Trump in the White House", publisher: "Chatham House", url: "https://www.chathamhouse.org/2025/03/israels-complicated-strategic-relationship-russia-could-strengthen-trump-white-house", date: "2025-03" },
        { title: "Israel Offers to Transfer Russian-Made Weapons to Ukraine", publisher: "The Defense Post", url: "https://thedefensepost.com/2025/01/22/israel-transfer-weapons-ukraine/", date: "2025-01-22" }
      ]
    }
  ]
});
