/* ============================================================
   Relationship — Turkey & Russia 🇹🇷🇷🇺
   Centuries of war over the Black Sea and the Straits, the 2015
   jet shootdown and the murder of an ambassador, and a
   partnership of gas, reactors and missiles inside NATO. Turkey's
   balancing over Ukraine is in tr-7.
   Research note and sources: tools/research/tr_ru.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("tr_ru", {
  id: "tr_ru",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "tr_ru-1", kind: "relation", asOf: "2026-09-30",
      title: "Empires at war",
      dek: "The Ottoman and Russian empires fought twelve wars over four centuries, mostly over the Black Sea and the straits that lead out of it. Fear of Moscow is why Turkey joined NATO.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_ru/tr_ru-1-hero.webp",
          alt: "Illustration of a narrow strait between two hilly shores lined with old stone fortresses, with a large ship passing through at sunset.",
          caption: "Control of the Bosphorus and Dardanelles, the only route between the Black Sea and the Mediterranean, has been at the heart of the rivalry.",
          credit: "Illustration — not a photograph",
          prompt: "A narrow strait between two green hilly shores, old stone fortresses with round towers on both banks, a large cargo ship passing through at sunset, domes and minarets faint in the distance, golden light on the water, historic and strategic, no flags, no legible text." },
        { type: "timeline", head: "Four centuries", items: [
          ["1568–1918", "Twelve Russo-Turkish wars"],
          ["1783", "Russia annexes Crimea from the Ottomans' vassal khanate"],
          ["1853–56", "Crimean War: Britain and France defend the Ottomans"],
          ["1921", "Treaty of friendship between Atatürk and Soviet Russia"],
          ["1936", "Montreux Convention gives Turkey control of the Straits"],
          ["1945–46", "Stalin demands bases on the Straits and eastern provinces"],
          ["1952", "Turkey joins NATO"]
        ] },
        { type: "section", head: "Twelve wars", md:
          "From 1568, when Tsar Ivan the Terrible's Russia and the Ottoman Empire first fought over Astrakhan, until the First World War, the two empires went to war twelve times, one of the longest series of conflicts in European history. Most ended in Ottoman defeat. Russia pushed south around the Black Sea, annexing Crimea in 1783, and presented itself as the protector of Orthodox Christians in the Balkans. Its great prize was Constantinople, now Istanbul, and the Bosphorus and Dardanelles straits, which would give its fleet free access to the Mediterranean. Britain and France fought the Crimean War of 1853–56 largely to stop it." },
        { type: "section", head: "Friendship, then fear", md:
          "After 1917 the two revolutionary states briefly became friends. Lenin's government sent Mustafa Kemal (Atatürk) money and weapons for his war of independence (see [[lesson:tr-9]]), and a 1921 treaty returned the eastern provinces of Kars and Ardahan to Turkey. In 1936 the Montreux Convention gave Turkey control of the Straits, including the right to limit warships' passage in wartime, a power it still uses. After the Second World War, Stalin demanded Soviet bases on the Straits and the return of Kars and Ardahan. The pressure drove Turkey into the American camp: it received aid under the 1947 Truman Doctrine, sent troops to Korea and joined NATO on 18 February 1952." },
        { type: "section", head: "Crimea's Tatars", md:
          "One thread runs from the 18th century to today. Crimea was home to the Crimean Tatars, a Turkic Muslim people whose khanate was an Ottoman vassal until Russia annexed it in 1783. Hundreds of thousands fled to Ottoman lands over the next century, and Stalin deported the rest to Central Asia in 1944. Millions of Turks claim Tatar descent, and when Russia seized Crimea again in 2014, Turkey refused to recognise it." },
        { type: "compare", head: "Two memories",
          left: { head: "Turkish", md:
            "Russia is the empire that took Ottoman lands for centuries and later wanted the Straits. Its power must be balanced." },
          right: { head: "Russian", md:
            "The wars freed Balkan Christians and gave Russia its southern coast. Turkey is a neighbour to be dealt with, not a permanent foe." } },
        { type: "section", head: "Why it matters", md:
          "History taught both sides wariness, but also that they must live together around the same sea. Turkey remained NATO's south-eastern bulwark throughout the Cold War; American missiles based there were quietly withdrawn after the 1962 Cuban Missile Crisis. Since the Soviet collapse, trade, tourism and energy have pulled the two closer than at any time since the 1920s, even while their interests collide from Syria to the Caucasus. When Russia invaded [[unit:ua|Ukraine]] in 2022, Turkey used its Montreux powers to close the Straits to warships (see [[lesson:tr-7]])." }
      ],
      takeaways: [
        "The Ottoman and Russian empires fought twelve wars between 1568 and 1918, mostly lost by the Ottomans.",
        "The 1936 Montreux Convention gave Turkey control of the Straits, a power it still uses.",
        "Stalin's demands after 1945 pushed Turkey into NATO in 1952."
      ],
      check: { q: "Why did Turkey join NATO in 1952?",
        choices: ["To join the European Union", "To protect itself against Soviet pressure on the Straits and its eastern provinces", "To fight in the Crimean War"], answer: 1,
        explain: "Stalin demanded bases on the Straits and the provinces of Kars and Ardahan, which drove Turkey into the Western alliance." },
      sources: [
        { title: "Russo-Turkish wars", publisher: "Britannica", url: "https://www.britannica.com/event/Russo-Turkish-wars", date: "n.d." },
        { title: "Türkiye and NATO", publisher: "NATO", url: "https://www.nato.int/en/about-us/nato-history/history-by-theme/my-country-and-nato/tuerkiye-and-nato", date: "n.d." },
        { title: "The 1945 Turkish-Soviet Crisis", publisher: "Russia in Global Affairs", url: "https://eng.globalaffairs.ru/articles/1945-turkish-soviet-crisis/", date: "n.d." },
        { title: "Montreux Convention", publisher: "Britannica", url: "https://www.britannica.com/event/Montreux-Convention", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "tr_ru-2", kind: "relation", asOf: "2026-09-30",
      title: "The jet and the ambassador",
      dek: "In 2015 Turkey shot down a Russian warplane and Moscow punished it hard. A year later an ambassador was assassinated in Ankara, and the two leaders drew closer instead of apart.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_ru/tr_ru-2-hero.webp",
          alt: "Illustration of a fighter jet trailing smoke and falling over forested hills, with two parachutes in the sky.",
          caption: "On 24 November 2015 a Turkish F-16 shot down a Russian Su-24 near the Syrian border; both crew ejected.",
          credit: "Illustration — not a photograph",
          prompt: "A military jet trailing black smoke and falling toward forested mountain ridges, two small parachutes drifting in a pale blue sky, a second jet far away, dramatic and sudden, seen from a distance, no markings, no flags, no legible text." },
        { type: "timeline", head: "From crisis to partnership", items: [
          ["Sep 2015", "Russia intervenes in Syria for Assad; Turkey backs rebels"],
          ["24 Nov 2015", "Turkish F-16 shoots down a Russian Su-24"],
          ["Late 2015", "Russia bans charter tours, food imports and visa-free travel"],
          ["Jun 2016", "Erdoğan sends Putin a letter of regret"],
          ["Jul 2016", "Coup attempt in Turkey; Putin backs Erdoğan"],
          ["19 Dec 2016", "Russian ambassador Andrei Karlov assassinated in Ankara"],
          ["2017", "Astana talks: Russia, Turkey and Iran manage Syria's war"]
        ] },
        { type: "section", head: "The shootdown", md:
          "When Russia intervened in Syria's war in September 2015 to save Bashar al-Assad, it ended up on the opposite side to Turkey, which backed rebel groups. On 24 November 2015 a Turkish F-16 shot down a Russian Su-24 bomber near the Syrian border, saying it had entered Turkish airspace despite warnings; Russia said it never had. Both crew ejected. The pilot was killed by rebel gunfire as he parachuted down, and a Russian marine died in the rescue mission. It was the first time a NATO member had shot down a Russian or Soviet warplane since the 1950s." },
        { type: "section", head: "Punishment", md:
          "Vladimir Putin called it 'a stab in the back'. Russia banned charter holidays to Turkey, suspended visa-free travel, halted imports of Turkish fruit and vegetables, including tomatoes, and restricted Turkish firms and workers. Russian tourists, then millions a year, almost vanished from Turkish beaches. The cost pushed President Recep Tayyip Erdoğan to write to Putin in June 2016 expressing regret. Weeks later, on the night of Turkey's failed coup attempt in July 2016 (see [[lesson:tr-11]]), Putin was among the first leaders to phone his support, while Western governments hesitated. Erdoğan's first trip abroad afterwards was to St Petersburg." },
        { type: "section", head: "A murder that united", md:
          "On 19 December 2016 Russia's ambassador, Andrei Karlov, was shot dead while speaking at an art gallery in Ankara by an off-duty Turkish policeman, who shouted 'Don't forget Aleppo! Don't forget Syria!' Many expected a new crisis. Instead both governments called it a provocation meant to wreck their rapprochement. Days later they brokered a ceasefire in Syria, and in 2017 launched the Astana talks with Iran, which divided the war into zones. Russia and Turkey still came close to clashing: in February 2020 an air strike in Syria's Idlib province killed 34 Turkish soldiers." },
        { type: "compare", head: "Two readings",
          left: { head: "Pragmatism", md:
            "Two strong leaders learned they could not afford a feud, and built rules to manage their differences in Syria and beyond." },
          right: { head: "Dependence", md:
            "Russia's sanctions showed it could hurt Turkey badly. Ankara's reconciliation was a retreat, and left it exposed to Moscow's pressure." } },
        { type: "section", head: "Why it matters", md:
          "The crisis set the pattern for today's relationship: rivals who compete in Syria, Libya and the Caucasus but keep talking at the top. When Assad fell in December 2024, Turkey's allies took power in Damascus and Russia lost ground, yet the two governments kept their channel open." }
      ],
      takeaways: [
        "Turkey shot down a Russian Su-24 near the Syrian border on 24 November 2015; Russia retaliated with sanctions.",
        "Erdoğan's letter of regret in June 2016 and Putin's support after the July coup attempt restored ties.",
        "The assassination of Russia's ambassador in December 2016 drew the two governments closer, not apart."
      ],
      check: { q: "How did Russia and Turkey react to the murder of Ambassador Karlov?",
        choices: ["They broke off relations", "They called it a provocation and deepened cooperation on Syria", "Russia imposed new sanctions"], answer: 1,
        explain: "Both governments said the killing aimed to wreck their rapprochement; days later they brokered a Syrian ceasefire together." },
      sources: [
        { title: "After Diplomat's Killing, Russia Doubles Down On Ties With Turkey", publisher: "NPR", url: "https://www.npr.org/sections/parallels/2016/12/20/506278517/after-diplomats-killing-russia-doubles-down-on-ties-with-turkey", date: "2016-12-20" },
        { title: "Turkey-Russia Relationship Will Survive Russian Ambassador's Assassination", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/blogs/new-atlanticist/turkey-russia-relationship-will-survive-russian-ambassador-s-assassination/", date: "2016-12" },
        { title: "Assassination of the Russian ambassador a big loss for Turkey", publisher: "The Conversation", url: "https://theconversation.com/assassination-of-the-russian-ambassador-a-big-loss-for-turkey-70645", date: "2016-12" },
        { title: "The day a Russian Su-24 was shot down by a Turkish F-16C", publisher: "The Aviation Geek Club", url: "https://theaviationgeekclub.com/the-day-a-russian-air-force-su-24-attack-aircraft-was-shot-down-by-a-turkish-f-16c-fighter-jet/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "tr_ru-3", kind: "relation", asOf: "2026-09-30",
      title: "Gas, reactors and missiles",
      dek: "A NATO member buys Russian gas, is having Russia build its first nuclear power plant, and bought Russian air-defence missiles that cost it America's best fighter jet.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_ru/tr_ru-3-hero.webp",
          alt: "Illustration of a nuclear power plant with large domed reactor buildings on a rocky Mediterranean coast, with cranes and blue sea.",
          caption: "Russia's Rosatom is building, and will own and run, the Akkuyu nuclear plant on Turkey's southern coast.",
          credit: "Illustration — not a photograph",
          prompt: "A nuclear power plant under construction with large pale domed reactor buildings and tall cranes on a rocky Mediterranean coastline, turquoise sea, pine-covered hills, bright sunlight, modern and imposing, no people, no flags, no legible text." },
        { type: "facts", head: "The ties", rows: [
          ["Gas", "Russia supplied about 41% of Turkey's gas imports in 2024"],
          ["TurkStream", "Two pipelines under the Black Sea, opened January 2020"],
          ["Akkuyu", "4,800 MW, about $20 billion, built, owned and run by Rosatom"],
          ["S-400", "Russian air-defence system delivered in 2019"],
          ["Tourists", "6.9 million Russian visitors in 2025, the most of any country"]
        ] },
        { type: "section", head: "Energy", md:
          "Russia has long been Turkey's biggest gas supplier. In January 2020 Putin and Erdoğan opened TurkStream, twin pipelines under the Black Sea; one line serves Turkey, the other carries Russian gas on to south-eastern Europe, making Turkey a transit country Moscow values even more since Ukraine's route closed. Turkey has diversified, with Azerbaijani gas and American liquefied gas, cutting Russia's share of its imports from around 60% two decades ago to about 41% in 2024. Under a 2010 deal, Russia's state nuclear company Rosatom is building the Akkuyu nuclear plant on the Mediterranean coast, with four reactors meant to supply around a tenth of Turkey's electricity. Unusually, Rosatom will own and run it." },
        { type: "section", head: "Missiles", md:
          "In 2017 Turkey agreed to buy Russia's S-400 air-defence system, saying its NATO allies would not sell it an equivalent on acceptable terms. The first parts arrived in July 2019. Washington, fearing the system could gather data on its F-35 stealth fighter, expelled Turkey from the F-35 programme, in which Turkish firms made parts, and in December 2020 imposed sanctions on Turkey's defence procurement agency. US law bars F-35 sales until Turkey no longer has the S-400. By 2026 Ankara was reported to be looking for a way to give the missiles up, and President Donald Trump hinted at a deal, but the system was still in Turkey in August." },
        { type: "section", head: "2026: closer than ever?", md:
          "Turkey never joined Western sanctions on Russia after 2022, and trade, Russian tourists and Russian money flowed in. Meeting Putin at a summit in Kyrgyzstan in September 2026, Erdoğan said relations were 'at a much more advanced level today than in any previous period', said Akkuyu's first unit was in its final stages and signalled more nuclear projects with Russia. Russians became the largest foreign buyers of Turkish homes after 2022, and Turkish builders work across Russia. Yet Ankara also sells armed drones to Ukraine, supports its territorial integrity and still refuses to recognise Russia's annexation of Crimea (see [[lesson:tr-7]])." },
        { type: "compare", head: "Two views",
          left: { head: "Ankara", md:
            "Turkey is balancing, not choosing sides. Cheap energy, trade and dialogue with Moscow serve Turkish interests and make it a useful mediator." },
          right: { head: "Critics in NATO", md:
            "Deep reliance on Russian energy and a Russian-run reactor give Moscow leverage inside the alliance." } },
        { type: "section", head: "Why it matters", md:
          "Turkey controls the Straits, has NATO's second-largest army and sits between Russia and the Middle East. How far it leans toward Moscow affects the war in Ukraine, Europe's energy and the cohesion of NATO itself." }
      ],
      takeaways: [
        "Russia supplies about two-fifths of Turkey's gas and is building, and will run, its first nuclear plant.",
        "Turkey's purchase of Russian S-400 missiles got it expelled from the US F-35 programme in 2019.",
        "In September 2026 Erdoğan called relations with Russia more advanced than ever."
      ],
      check: { q: "Why was Turkey removed from the F-35 programme?",
        choices: ["It left NATO", "It bought Russia's S-400 air-defence system", "It could not pay"], answer: 1,
        explain: "The US feared the S-400 could gather data on the F-35, and removed Turkey from the programme in 2019." },
      sources: [
        { title: "Turkey's Erdogan signals further nuclear projects with Russia", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2026/09/01/nuclear-akkuyu-erdogan-russia-putin/a165bf82-a618-11f1-9e38-f705d048bd5a_story.html", date: "2026-09-01" },
        { title: "Turkey's S-400 saga shows the hard realities of defence procurement", publisher: "Chatham House", url: "https://www.chathamhouse.org/2026/07/turkeys-s-400-saga-shows-hard-realities-defence-procurement", date: "2026-07" },
        { title: "Turning to Azerbaijani gas and US LNG, Turkey seeks to break its reliance on Russian energy", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/blogs/turkeysource/azerbaijan-and-us-helping-turkey-diversify-gas/", date: "2025" },
        { title: "About the project", publisher: "Akkuyu Nuclear", url: "https://akkuyu.com/en/about/info", date: "n.d." },
        { title: "Who visited Türkiye most in 2025? Russia, Germany, UK take lead", publisher: "Türkiye Today", url: "https://www.turkiyetoday.com/business/who-visited-turkiye-most-in-2025-russia-germany-uk-take-lead-3213972", date: "2026-01" }
      ]
    }
  ]
});
