/* ============================================================
   Relationship — China & Russia 🇨🇳🇷🇺
   From Stalin's alliance and a 1969 border war to a 'no limits'
   partnership; China's role in Russia's war economy; and an
   unequal bargain of oil, gas and cars. The Ukraine war itself is
   in ru_ua and ru-6.
   Research note and sources: tools/research/cn_ru.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("cn_ru", {
  id: "cn_ru",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "cn_ru-1", kind: "relation", asOf: "2026-09-30",
      title: "Comrades, enemies, partners",
      dek: "In 1950 China and the Soviet Union were allies. Nineteen years later their troops were killing each other on a frozen river. It took decades to settle the longest border in Asia.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_ru/cn_ru-1-hero.webp",
          alt: "Illustration of a small snowy island in a frozen river, with forest on both banks and a watchtower in the distance.",
          caption: "Zhenbao (Damansky) Island on the Ussuri river, where Chinese and Soviet troops clashed in March 1969.",
          credit: "Illustration — not a photograph",
          prompt: "A small flat snowy island in the middle of a wide frozen river, bare birch and pine forest on both banks, a distant wooden watchtower, pale grey winter sky, cold and desolate, no people, no flags, no legible text." },
        { type: "timeline", head: "A turbulent century", items: [
          ["1950", "Mao and Stalin sign a treaty of alliance"],
          ["Late 1950s", "The Sino-Soviet split begins"],
          ["2 Mar 1969", "Clash on Zhenbao Island; months of border fighting follow"],
          ["1972", "Nixon visits China, exploiting the split"],
          ["1989", "Gorbachev visits Beijing; relations normalised"],
          ["2001", "Treaty of friendship"],
          ["2004–08", "The border is finally settled"]
        ] },
        { type: "section", head: "Alliance and split", md:
          "After the Communist victory in 1949 (see [[lesson:cn-9]]), Mao Zedong travelled to Moscow and in February 1950 signed a treaty of alliance with Stalin. Soviet engineers helped build Chinese factories and even began sharing nuclear technology. But after Stalin's death the relationship soured. Mao despised Nikita Khrushchev's criticism of Stalin and his talk of peaceful coexistence with the West; Moscow saw Mao as reckless. By 1960 Soviet advisers had been withdrawn, and the two Communist giants were denouncing each other as traitors to the revolution." },
        { type: "section", head: "Border war", md:
          "Their 4,200 km border had been drawn by 19th-century treaties that China regarded as unequal, imposed when the Qing dynasty was weak. On 2 March 1969 Chinese troops ambushed Soviet border guards on Zhenbao Island, known to the Russians as Damansky, in the frozen Ussuri river. The Soviets struck back two weeks later with artillery, and clashes spread along the border for months. Hundreds died. Moscow reportedly considered a strike on China's nuclear sites. Frightened, Mao turned to the United States, and Richard Nixon's visit to Beijing in 1972 turned the Cold War triangle upside down." },
        { type: "section", head: "Normalisation", md:
          "Mikhail Gorbachev's visit to Beijing in May 1989 formally ended the split, though it was overshadowed by the Tiananmen protests then filling the square (see [[lesson:cn-11]]). After the Soviet collapse, Russia and China demilitarised their border and in 2001 signed a treaty of friendship. The same year they founded the Shanghai Cooperation Organisation with four Central Asian states, a club that has since grown to include India, Pakistan and Iran. In 2004 they agreed to divide the last disputed islands, including Bolshoy Ussuriysky near Khabarovsk, about half of which passed to China; a final demarcation was signed in 2008. It was one of very few border disputes Beijing has ever settled." },
        { type: "compare", head: "Two readings of the history",
          left: { head: "Partners by nature", md:
            "Both resist American dominance and share authoritarian systems. The split was an aberration; cooperation is natural." },
          right: { head: "Rivals at heart", md:
            "The two have long histories of distrust and competing interests in Central Asia and the Far East. Today's closeness is a marriage of convenience." } },
        { type: "section", head: "Why it matters", md:
          "The history shows how much the China–Russia relationship has swung, and how the United States has tried to exploit it. Some American strategists have suggested a 'reverse Nixon', courting Moscow to split it from Beijing; so far, Russia's war and dependence on China have made that unlikely." }
      ],
      takeaways: [
        "Mao and Stalin were allies in 1950, but by 1960 the two Communist powers had split.",
        "Border clashes in 1969 killed hundreds and pushed China toward the United States.",
        "Relations normalised in 1989, and the long border was finally settled between 2004 and 2008."
      ],
      check: { q: "What happened on Zhenbao Island in March 1969?",
        choices: ["A peace treaty was signed", "Chinese and Soviet troops clashed, starting months of border fighting", "A joint military exercise"], answer: 1,
        explain: "Chinese troops ambushed Soviet border guards on the island, and fighting spread along the border for months." },
      sources: [
        { title: "The 1969 Sino-Soviet Border Conflicts As A Key Turning Point Of The Cold War", publisher: "Hoover Institution", url: "https://www.hoover.org/research/1969-sino-soviet-border-conflicts-key-turning-point-cold-war", date: "n.d." },
        { title: "China, Russia, and the legacy of Zhenbao Island", publisher: "The China Project", url: "https://thechinaproject.com/2020/03/03/china-russia-and-the-legacy-of-zhenbao-island/", date: "2020-03-03" },
        { title: "Two countries, one island: Russia and China divided up an island in the Far East in 2004", publisher: "Meduza", url: "https://meduza.io/en/feature/2018/11/02/two-countries-one-island", date: "2018-11-02" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "cn_ru-2", kind: "relation", asOf: "2026-09-30",
      title: "'No limits'",
      dek: "Weeks before invading Ukraine, Putin and Xi declared a friendship with 'no limits'. China has not sent Russia weapons, but it has kept its economy and war machine running.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_ru/cn_ru-2-hero.webp",
          alt: "Illustration of a long banquet hall with a red carpet, chandeliers and two empty ornate chairs at the far end.",
          caption: "Xi Jinping and Vladimir Putin have met dozens of times; Xi calls relations 'at their highest level in history'.",
          credit: "Illustration — not a photograph",
          prompt: "A long grand state banquet hall with a deep red carpet, crystal chandeliers and gilded columns, two ornate empty chairs side by side at the far end, warm golden light, ceremonial and imposing, no people, no flags, no legible text." },
        { type: "timeline", head: "Closer and closer", items: [
          ["4 Feb 2022", "'No limits' joint statement in Beijing"],
          ["24 Feb 2022", "Russia invades Ukraine; China refuses to condemn it"],
          ["Mar 2023", "Xi visits Moscow"],
          ["May 2025", "Xi attends Moscow's Victory Day parade"],
          ["Sep 2025", "Putin at Beijing's military parade"],
          ["May 2026", "Putin in Beijing: over 40 agreements signed"]
        ] },
        { type: "section", head: "The statement", md:
          "On 4 February 2022, as the Winter Olympics opened in Beijing, Xi Jinping and Vladimir Putin issued a joint statement declaring that their friendship had 'no limits' and that there were 'no forbidden areas' of cooperation. Both opposed NATO's expansion and what they called American hegemony. Twenty days later Russia invaded Ukraine. Western officials suspect Xi knew an attack was coming; China has denied this." },
        { type: "section", head: "Neutral in name", md:
          "China calls itself neutral on the war and has published a peace plan calling for respect for sovereignty and a ceasefire. It has not condemned the invasion, has blamed NATO for provoking it, and has not supplied weapons. But it has become Russia's economic lifeline. Chinese exports of 'dual-use' goods, such as microchips, machine tools, drone engines and navigation parts, which can serve civilian or military purposes, have run above $4 billion a year, according to Western estimates, and investigators have found Chinese components in Russian drones and missiles. The United States and the EU have sanctioned dozens of Chinese firms. China says it controls dual-use exports under its own law and does not arm either side." },
        { type: "section", head: "Summits", md:
          "The two leaders have met more often than any others. Xi visited Moscow in March 2023 and stood beside Putin at the Victory Day parade in May 2025; Putin, joined by Kim Jong Un, watched China's military parade in Beijing in September 2025 (see [[lesson:kp-6]]). On Putin's visit to Beijing in May 2026 the two signed more than 40 agreements, and Xi said relations were 'at their highest level in history'. Their militaries hold joint exercises and bomber patrols near Japan and Alaska. At the UN Security Council the two usually vote together, and in 2022 they vetoed new sanctions on North Korea." },
        { type: "compare", head: "How close are they?",
          left: { head: "An axis", md:
            "China, Russia, Iran and North Korea increasingly act together against the West, sharing technology, oil and weapons." },
          right: { head: "A limited partnership", md:
            "China keeps its distance where it counts: no weapons, no recognition of annexations, and careful compliance where Western banks are watching." } },
        { type: "section", head: "Why it matters", md:
          "Without Chinese trade and components, Russia's war economy (see [[lesson:ru-5]]) would struggle. Europe sees China's support as a direct threat to its security, while Washington must decide whether to press Beijing harder or tempt Moscow away. How the war ends may depend partly on how much Xi is willing to do for Putin, and on what he wants in return." }
      ],
      takeaways: [
        "Weeks before invading Ukraine, Putin and Xi declared a 'no limits' friendship.",
        "China has not sent weapons but supplies dual-use goods worth over $4 billion a year that feed Russia's war industry.",
        "Xi calls relations 'at their highest level in history'; the two signed over 40 agreements in May 2026."
      ],
      check: { q: "How has China helped Russia's war effort, according to Western governments?",
        choices: ["By sending troops", "By supplying dual-use goods such as chips and drone parts", "By recognising the annexation of Crimea"], answer: 1,
        explain: "China says it sends no weapons, but its exports of components with military uses have helped sustain Russia's arms production." },
      sources: [
        { title: "China's Position on Russia's Invasion of Ukraine", publisher: "US-China Economic and Security Review Commission", url: "https://www.uscc.gov/research/chinas-position-russias-invasion-ukraine", date: "n.d." },
        { title: "Three key takeaways from Putin's Beijing trip — and what they reveal about China-Russia ties", publisher: "CNBC", url: "https://www.cnbc.com/2026/05/21/china-russia-putin-xi-jinping-ties-deals-energy-siberia-pipeline-trump-visits-.html", date: "2026-05-21" },
        { title: "Chinese dual-use electronics are helping Iran and Russia build deadlier drones, despite US sanctions", publisher: "Scripps News via WKBW", url: "https://www.wkbw.com/world/asia/chinese-dual-use-electronics-are-helping-iran-and-russia-build-deadlier-drones-despite-u-s-sanctions", date: "2026" },
        { title: "China-Russia Dashboard: Facts and figures on a special relationship", publisher: "MERICS", url: "https://merics.org/en/china-russia-dashboard-facts-and-figures-special-relationship", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "cn_ru-3", kind: "relation", asOf: "2026-09-30",
      title: "An unequal bargain",
      dek: "Russia sells China oil and gas; China sells Russia cars and machines. Since 2022 the trade has boomed, and the balance of power has tilted firmly toward Beijing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn_ru/cn_ru-3-hero.webp",
          alt: "Illustration of a large gas pipeline running through snowy taiga forest toward distant mountains under a pale sky.",
          caption: "Power of Siberia, opened in 2019, carries Russian gas to China; a second line has stalled over price.",
          credit: "Illustration — not a photograph",
          prompt: "A large elevated steel gas pipeline running straight through snowy Siberian taiga forest toward distant low mountains, pale winter sky, long shadows, vast and remote, no people, no flags, no legible text." },
        { type: "facts", head: "The trade", rows: [
          ["2024", "A record $243.6 billion, by Chinese customs figures"],
          ["2025", "About $234 billion, the first fall in five years"],
          ["Oil", "China buys about half of Russia's crude exports"],
          ["Gas", "Power of Siberia 1, opened December 2019"],
          ["Cars", "Chinese brands dominate Russia's new-car market"]
        ] },
        { type: "section", head: "A lifeline", md:
          "When Western sanctions cut Russia off from European markets and dollar payments after 2022, China stepped in. Trade grew to a record $243.6 billion in 2024. China now buys about half of Russia's crude oil exports, often at a discount, and India most of the rest. Most payments are made in yuan or roubles rather than dollars. Chinese carmakers, which barely sold in Russia before 2022, replaced the departed Western brands and took more than half the new-car market, until Moscow raised fees on imported cars to protect its own industry." },
        { type: "section", head: "The pipeline that isn't", md:
          "Russia's gas giant Gazprom lost most of its European market when the war began. The Power of Siberia pipeline, opened in December 2019, carries gas from eastern Siberia to China, but it is far smaller than the European trade was. Moscow has long pushed for a second, Power of Siberia 2, running through Mongolia. The two signed a legally binding memorandum in September 2025, but talks have deadlocked over price and financing: China, with plenty of other suppliers, is in no hurry. Putin's May 2026 visit to Beijing produced no deal." },
        { type: "section", head: "Junior partner?", md:
          "China's economy is about nine times the size of Russia's, and the gap is growing. Trade fell in 2025 as Russia's economy slowed and oil prices dropped. Russian officials bristle at suggestions that their country has become China's junior partner, but many analysts see exactly that: Russia exports raw materials and imports technology, while China sets the terms. Some in Moscow worry about Chinese influence in the sparsely populated Far East, though both governments dismiss such fears. The two also compete quietly in Central Asia, once Moscow's backyard, where China has become the biggest trading partner of several countries and is building railways and pipelines that bypass Russia." },
        { type: "compare", head: "Who needs whom more?",
          left: { head: "Russia needs China", md:
            "China is Russia's biggest market, its supplier of machines and chips, and its escape from sanctions. Moscow has few alternatives." },
          right: { head: "China needs Russia too", md:
            "Russia offers secure overland energy that no navy can block, a vote at the UN, and a partner that keeps the West busy." } },
        { type: "section", head: "Why it matters", md:
          "The balance inside the partnership shapes world politics. A Russia dependent on China strengthens Beijing's hand against the United States, while Western sanctions have pushed Russia further into China's orbit. How long Moscow accepts a subordinate role is one of the long-term questions of the post-2022 world, for Russians and for everyone else." }
      ],
      takeaways: [
        "China–Russia trade hit a record $243.6 billion in 2024 before falling in 2025.",
        "China buys about half of Russia's crude oil exports, and Chinese cars took over Russia's car market.",
        "The Power of Siberia 2 gas pipeline has stalled over price, a sign of China's stronger hand."
      ],
      check: { q: "Why has the Power of Siberia 2 pipeline stalled?",
        choices: ["Mongolia blocked it", "China and Russia cannot agree on price and financing", "It was completed in 2024"], answer: 1,
        explain: "Despite a 2025 memorandum, China has driven a hard bargain on price, and no final deal has been reached." },
      sources: [
        { title: "China's 2025 trade with Russia posts first decline in 5 years", publisher: "Reuters via Yahoo Finance", url: "https://uk.finance.yahoo.com/news/chinas-2025-trade-russia-posts-065925135.html", date: "2026-01" },
        { title: "Power of Siberia 2 deadlock belies Russia-China 'no-limits' pact", publisher: "Asia Times", url: "https://asiatimes.com/2026/07/power-of-siberia-2-deadlock-cracks-russia-china-no-limits-pact/", date: "2026-07" },
        { title: "Did Putin Return From China Empty-Handed?", publisher: "Carnegie Endowment", url: "https://carnegieendowment.org/russia-eurasia/politika/2026/05/china-russia-no-pipeline", date: "2026-05" },
        { title: "Russia and China's 'No-Limits' Trade Partnership Is Losing Steam", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/05/22/russia-and-chinas-no-limits-trade-partnership-is-losing-steam-a91794", date: "2026-05-22" }
      ]
    }
  ]
});
