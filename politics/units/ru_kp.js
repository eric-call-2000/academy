/* ============================================================
   Relationship — Russia & North Korea 🇷🇺🇰🇵
   The Soviet Union's creation of North Korea and the Korean
   War; Moscow's turn to Seoul, the lean 1990s and Putin's
   courtship; and the 2024 treaty, soldiers for Kursk and a new
   road bridge. The troops' story from Pyongyang is in kp-5.
   Research note and sources: tools/research/ru_kp.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ru_kp", {
  id: "ru_kp",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ru_kp-1", kind: "relation", asOf: "2026-10-07",
      title: "Made in Moscow",
      dek: "The Soviet Union occupied northern Korea in 1945, chose Kim Il Sung to run it and approved his invasion of the South. Then Kim spent decades playing Moscow and Beijing off against each other.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru_kp/ru_kp-1-hero.webp",
          alt: "Illustration of Soviet-era tanks and trucks rolling into a Korean town of tiled roofs in 1945, mountains behind.",
          caption: "The Red Army entered northern Korea in August 1945.",
          credit: "Illustration — not a photograph",
          prompt: "Second World War era tanks and army trucks rolling along a dusty road into a small Korean town with low tiled-roof houses, pine-covered mountains behind, late summer haze, historical documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "From occupation to independence", items: [
          ["Aug 1945", "The Red Army enters northern Korea"],
          ["Dec 1945", "Soviets install Kim Il Sung as Party leader in the north"],
          ["Sep 1948", "The Democratic People's Republic of Korea is founded"],
          ["Apr 1950", "Stalin approves Kim's plan to invade the South"],
          ["1961", "Treaties of alliance with both Moscow and Beijing"],
          ["1956–80s", "Kim balances between the Soviet Union and China"]
        ] },
        { type: "section", head: "Stalin's choice", md:
          "In August 1945, in the last days of the war with Japan, the Soviet Red Army swept into northern Korea while American forces landed in the south. Stalin wanted a reliable communist in charge of his zone. He chose Kim Il Sung, a 33-year-old guerrilla who had fought the Japanese in Manchuria and then served in a Soviet army unit. In December 1945 the Soviets made him leader of the communist party in the north, and in 1948 he became premier of the new Democratic People's Republic of Korea (see [[lesson:kp-9]]). Soviet advisers wrote its laws, trained its army and ran its industry in the early years." },
        { type: "section", head: "Permission for war", md:
          "Kim pressed Stalin for permission to unify Korea by force. In April 1950 in Moscow, Stalin finally agreed, on condition that China's Mao Zedong also approved. Soviet officers helped plan the invasion of 25 June 1950 and supplied tanks and artillery (see [[lesson:kp-10]]). Once the war began, Soviet pilots secretly flew MiG fighters against American jets over northern Korea, but Moscow avoided sending ground troops, leaving China to save Kim when the war turned." },
        { type: "section", head: "Playing two giants", md:
          "After Stalin's death, Kim purged pro-Soviet and pro-Chinese factions in his own party and developed 'Juche', an ideology of self-reliance. When the Soviet Union and China split in the 1960s, he played them against each other, signing alliance treaties with both in July 1961 and leaning toward whichever offered more. The Soviet Union supplied oil at friendly prices, built factories and power plants, and helped launch North Korea's nuclear research with a small reactor at Yongbyon in the 1960s." },
        { type: "section", head: "Uneasy friends", md:
          "Soviet leaders found Kim's personality cult and his son's planned succession embarrassing, and North Korea's economy a drain. Pyongyang, in turn, resented Moscow's attempts at détente with the West. But both valued the alliance as a shield against the United States." },
        { type: "section", head: "A Soviet legacy", md:
          "Much of North Korea still bears a Soviet imprint, from the design of its army and the layout of Pyongyang to its weapons, many of them copies or developments of Soviet models. Its ballistic missiles began with Scuds, Soviet missiles North Korea copied in the 1980s." },
        { type: "compare", head: "Who made North Korea?",
          left: { head: "The record", md:
            "Soviet occupiers chose its leader, built its state and approved its war." },
          right: { head: "Pyongyang's story", md:
            "Kim Il Sung liberated Korea and built the country by his own genius." } },
        { type: "section", head: "Why it matters", md:
          "North Korea's official history erases the Soviet role, but Moscow remembers it. When Putin and Kim revived their alliance in 2024, both sides spoke of restoring the bonds of 1945 and 1950." }
      ],
      takeaways: [
        "The Soviet Union occupied northern Korea in 1945 and installed Kim Il Sung as its leader.",
        "Stalin approved Kim's 1950 invasion of the South; Soviet pilots secretly fought in the Korean War.",
        "During the Sino-Soviet split Kim played Moscow and Beijing against each other, allied with both from 1961."
      ],
      check: { q: "Who approved North Korea's invasion of the South in 1950?",
        choices: ["Only Mao Zedong", "Stalin, on condition that Mao agreed", "No one; Kim acted alone"], answer: 1,
        explain: "Kim met Stalin in Moscow in April 1950." },
      sources: [
        { title: "Why Did Stalin Support the Start of the Korean War?", publisher: "History.com", url: "https://www.history.com/articles/korean-war-stalin-soviet-union", date: "n.d." },
        { title: "North Korea under Kim Il-Sung", publisher: "Alpha History", url: "https://alphahistory.com/coldwar/north-korea/", date: "n.d." },
        { title: "North Korea's Relations with Russia: A Historical Perspective", publisher: "National Committee on North Korea", url: "https://www.ncnk.org/resources/briefing-papers/all-briefing-papers/north-korea%E2%80%99s-relations-russia-historical-perspective", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ru_kp-2", kind: "relation", asOf: "2026-10-07",
      title: "Betrayal, famine and Putin's train",
      dek: "In 1990 Moscow recognised South Korea and stopped subsidising the North, helping to tip it into famine. A decade later Putin set out to win back influence, and Kim Jong Il rode an armoured train across Russia.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru_kp/ru_kp-2-hero.webp",
          alt: "Illustration of a long dark-green armoured train crossing a snowy Siberian plain past birch forests.",
          caption: "Kim Jong Il spent ten days crossing Russia by armoured train in 2001.",
          credit: "Illustration — not a photograph",
          prompt: "A long dark-green armoured train with many carriages crossing a vast snowy Siberian plain past birch forests, low winter sun, steam and frost, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Estrangement and return", items: [
          ["30 Sep 1990", "Moscow establishes relations with Seoul"],
          ["1991", "Soviet collapse; trade at friendship prices ends"],
          ["1996", "The 1961 alliance treaty lapses"],
          ["Jul 2000", "Putin visits Pyongyang"],
          ["Aug 2001", "Kim Jong Il travels to Moscow by train"],
          ["2012", "Russia writes off 90% of North Korea's Soviet-era debt"]
        ] },
        { type: "section", head: "Moscow chooses Seoul", md:
          "Under Mikhail Gorbachev, the Soviet Union wanted trade and investment from South Korea's booming economy. On 30 September 1990 it established diplomatic relations with Seoul, despite North Korean warnings that this would be a betrayal. Pyongyang's foreign minister reportedly told his Soviet counterpart that North Korea would have to look after its own security, an early hint of the nuclear programme. China recognised South Korea two years later." },
        { type: "section", head: "Collapse and famine", md:
          "When the Soviet Union broke up in 1991, Russia stopped selling oil and goods at 'friendship prices' and demanded hard currency North Korea did not have. Trade collapsed by more than 90%. Without Soviet fuel and fertiliser, North Korea's factories and collective farms seized up, and floods in 1995 helped bring on a famine, the 'Arduous March', that killed hundreds of thousands of people (see [[lesson:kp-11]]). In 1996 Russia let the 1961 alliance treaty lapse, and its replacement in 2000 dropped the promise of military help." },
        { type: "section", head: "Putin's courtship", md:
          "Vladimir Putin wanted Russia to matter again in Asia. In July 2000, months after becoming president, he visited Pyongyang, the first Russian or Soviet leader ever to do so, and won Kim Jong Il's praise. In August 2001 Kim, who feared flying, crossed Russia by armoured train to Moscow, a journey of about ten days, dining on lobster and fine wines in his private carriage, according to a Russian envoy who travelled with him." },
        { type: "section", head: "Ambitions and limits", md:
          "Russia joined the six-party talks on North Korea's nuclear programme from 2003, and voted for UN sanctions after North Korea's nuclear tests. It proposed rail links and a gas pipeline through North Korea to the South, but few projects got far. In 2012 it agreed to write off 90% of North Korea's $11 billion Soviet-era debt, with the rest to be reinvested in North Korea. A rail link from the Russian border town of Khasan to the North Korean port of Rajin reopened in 2013." },
        { type: "section", head: "Kim Jong Un's first visit", md:
          "Kim Jong Un met Putin for the first time in Vladivostok in April 2019, after his talks with Trump collapsed in Hanoi. The meeting produced warm words but little else: Russia was still enforcing UN sanctions and was more interested in South Korea's trade." },
        { type: "compare", head: "Russia's two Koreas",
          left: { head: "The South", md:
            "A rich trading partner and a market for Russian energy." },
          right: { head: "The North", md:
            "A poor, troublesome neighbour that gave Russia a seat at the table." } },
        { type: "section", head: "Why it matters", md:
          "For three decades Russia kept North Korea at arm's length. That made the sudden embrace after 2022, when Russia needed weapons and soldiers, all the more striking." }
      ],
      takeaways: [
        "The Soviet Union recognised South Korea in 1990 and ended subsidised trade, helping push North Korea into famine.",
        "Putin visited Pyongyang in 2000, and Kim Jong Il crossed Russia by armoured train in 2001.",
        "In 2012 Russia wrote off 90% of North Korea's $11 billion Soviet-era debt."
      ],
      check: { q: "Why did North Korea call Moscow's 1990 decision a betrayal?",
        choices: ["It sold weapons to the US", "It established diplomatic relations with South Korea", "It invaded North Korea"], answer: 1,
        explain: "Moscow chose trade with Seoul; China followed in 1992." },
      sources: [
        { title: "SOVIET UNION OPENS TIES WITH S. KOREA", publisher: "The Washington Post", url: "https://www.washingtonpost.com/archive/politics/1990/10/01/soviet-union-opens-ties-with-s-korea/57ed3692-0420-4b44-990b-d244e4145de3/", date: "1990-10-01" },
        { title: "Russia Writes Off Majority of North Korea Debt", publisher: "Voice of America", url: "https://www.voanews.com/a/reu-russia-writes-off-90-percent-of-north-korea-debt/1896872.html", date: "2014" },
        { title: "Inside Kim Jong Un's armored train: 'A sweet home'", publisher: "CBS News", url: "https://www.cbsnews.com/news/kim-jong-un-armored-train-putin-russia-north-korea/", date: "2023-09" },
        { title: "Russia's Korean Policy since 2012: New Hopes, Achievements, and Disappointments", publisher: "The Asan Forum", url: "https://theasanforum.org/russias-korean-policy-since-2012-new-hopes-achievements-and-disappointments/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ru_kp-3", kind: "relation", asOf: "2026-10-07",
      title: "Shells, soldiers and a bridge",
      dek: "Russia's war in Ukraine turned North Korea from a nuisance into a prized ally. Kim sent shells, missiles and soldiers; Putin signed a defence treaty, and in September 2026 the two opened their first road bridge.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru_kp/ru_kp-3-hero.webp",
          alt: "Illustration of a new two-lane road bridge crossing a wide river between low hills, with a border post at one end.",
          caption: "The first road bridge between Russia and North Korea opened over the Tumen River on 7 September 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A new concrete two-lane road bridge crossing a wide slow river between low brown hills, an older steel railway bridge beside it, a border checkpoint with barriers at one end, a few trucks, pale autumn light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The new alliance", items: [
          ["Sep 2023", "Kim meets Putin at the Vostochny space centre"],
          ["19 Jun 2024", "Putin in Pyongyang; mutual-defence treaty signed"],
          ["Oct 2024", "North Korean troops deployed to Kursk"],
          ["Apr 2025", "Pyongyang acknowledges the deployment"],
          ["7 Sep 2026", "Road bridge over the Tumen River opens"],
          ["28 Sep 2026", "Zelensky warns of about 10,000 more troops"]
        ] },
        { type: "section", head: "From Vostochny to Pyongyang", md:
          "By 2023 Russia was burning through artillery shells faster than it could make them, and North Korea had huge stockpiles. In September 2023 Kim Jong Un travelled by train to the Vostochny space centre in Russia's Far East, where Putin showed him rockets and hinted at help with satellites. Within weeks, US and South Korean officials said, trains and ships were carrying North Korean shells to Russia. In June 2024 Putin visited Pyongyang for the first time in 24 years, and the two signed a Comprehensive Strategic Partnership Treaty in which each promised military help if the other was attacked." },
        { type: "section", head: "Soldiers for Kursk", md:
          "From October 2024 North Korea sent troops to help Russia drive Ukrainian forces out of the Kursk region. South Korean and Western estimates put the total at 14,000 to 15,000, of whom about 6,000 were killed or wounded (see [[lesson:kp-5]]). North Korea also supplied millions of shells, KN-23 ballistic missiles and rocket launchers. After months of denials, Pyongyang acknowledged the deployment in April 2025, and Kim has honoured the dead as heroes." },
        { type: "section", head: "What Kim gets", md:
          "In return, according to US, South Korean and Ukrainian officials, Russia supplies oil above UN limits, food, hard currency and military technology, possibly including help with satellites, air defence and submarines. Russia has shielded Pyongyang at the UN, vetoing in 2024 the renewal of the panel of experts that monitored sanctions. North Korean workers, banned by UN sanctions, are again working in Russia, and Russian tourists visit North Korean resorts." },
        { type: "section", head: "The bridge", md:
          "On 7 September 2026 Russia and North Korea opened their first road bridge, a two-lane crossing of about one kilometre over the Tumen River between Khasan and Rason, beside the old rail bridge. It is named after Yakov Novichenko, a Soviet officer who shielded Kim Il Sung from a grenade in 1946. It can handle up to 300 vehicles a day, and Russia says trucks began using it at once." },
        { type: "section", head: "More to come?", md:
          "On 28 September 2026 Ukraine's President Zelensky said North Korea was preparing about 10,000 more troops for Russia. Pyongyang has not commented." },
        { type: "compare", head: "A partnership of need",
          left: { head: "Russia gets", md:
            "Shells, missiles and soldiers for a long war." },
          right: { head: "North Korea gets", md:
            "Oil, food, cash, technology, combat experience and a protector at the UN." } },
        { type: "section", head: "Why it matters", md:
          "The alliance has weakened the UN sanctions regime and may help North Korea's weapons programmes advance faster. It also binds Asia's security to Europe's: what happens in Ukraine now matters in Korea, and the reverse." }
      ],
      takeaways: [
        "Putin and Kim signed a mutual-defence treaty in Pyongyang in June 2024.",
        "North Korea sent about 14,000–15,000 troops and millions of shells to Russia; about 6,000 soldiers were killed or wounded.",
        "The first Russia–North Korea road bridge opened over the Tumen River on 7 September 2026."
      ],
      check: { q: "What did Russia do at the UN in 2024 that helped North Korea?",
        choices: ["Proposed new sanctions", "Vetoed renewal of the panel monitoring sanctions on North Korea", "Admitted North Korea to BRICS"], answer: 1,
        explain: "The panel of experts had tracked sanctions violations since 2009." },
      sources: [
        { title: "Kim Jong Un and Putin sign mutual defense pact at North Korea summit", publisher: "NBC News", url: "https://www.nbcnews.com/news/world/putin-meets-kim-north-korea-rcna157665", date: "2024-06-19" },
        { title: "What happens after the Kim-Putin summit?", publisher: "Brookings", url: "https://www.brookings.edu/articles/what-happens-after-the-kim-putin-summit/", date: "2024" },
        { title: "North Korea and Russia open first road bridge to deepen ties amid Ukraine war", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2026-09-08/north-korea-and-russia-open-first-road-bridge/107126402", date: "2026-09-08" },
        { title: "N. Korea, Russia open 1st cross-border road bridge amid deepening ties", publisher: "The Korea Times", url: "https://www.koreatimes.co.kr/foreignaffairs/northkorea/20260908/n-korea-russia-open-1st-cross-border-road-bridge-amid-deepening-ties", date: "2026-09-08" }
      ]
    }
  ]
});
