/* ============================================================
   Relationship — Poland & Russia 🇵🇱🇷🇺
   Partitions, uprisings and the 1920 war; the Soviet invasion
   of 1939, Katyń and the Smolensk crash; and after 2022, drones
   over Poland, railway sabotage, closed consulates and a
   fortified border.
   Poland as a front-line state is in pl-5.
   Research note and sources: tools/research/pl_ru.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("pl_ru", {
  id: "pl_ru",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "pl_ru-1", kind: "relation", asOf: "2026-09-30",
      title: "Partitions and rebellions",
      dek: "Russia took the largest share when Poland was carved up in the 18th century, and crushed Polish uprisings for more than a century. In 1920 a reborn Poland stopped the Red Army at the gates of Warsaw.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl_ru/pl_ru-1-hero.webp",
          alt: "Illustration of cavalry charging across a misty plain towards a river, with a town's church spires behind.",
          caption: "In August 1920 Polish forces defeated the Red Army outside Warsaw.",
          credit: "AI illustration — not a photograph",
          prompt: "Early twentieth-century cavalry and infantry advancing across a misty flat plain towards a river, church spires of a town on the horizon, smoke in the sky, dramatic historical oil painting style, faces not visible, no flags, no legible text." },
        { type: "timeline", head: "Centuries of conflict", items: [
          ["1610", "Polish troops occupy Moscow during Russia's 'Time of Troubles'"],
          ["1772–95", "Russia, Prussia and Austria partition Poland"],
          ["1830–31", "The November Uprising against Russian rule is crushed"],
          ["1863–64", "The January Uprising is crushed; exiles sent to Siberia"],
          ["1918", "Poland regains independence"],
          ["Aug 1920", "Battle of Warsaw: the Red Army is stopped"]
        ] },
        { type: "section", head: "Rival empires", md:
          "For centuries Poland–Lithuania and Russia competed to dominate Eastern Europe. In 1610, during Russia's 'Time of Troubles', Polish troops even occupied Moscow before being driven out in 1612, an event Russia still commemorates as National Unity Day on 4 November. But Russia grew stronger as Poland weakened. In three partitions between 1772 and 1795, Russia, Prussia and Austria divided Poland between them, and it vanished from the map for 123 years (see [[lesson:pl_de-1]]). Russia took the largest share, including Warsaw after 1815." },
        { type: "section", head: "Uprisings and exile", md:
          "Poles rose against Russian rule again and again. The November Uprising of 1830–31 and the January Uprising of 1863–64 were both crushed. Thousands were executed or sent to Siberia, estates were confiscated, and Russia tried to suppress the Polish language in schools and government. Polish culture survived in exile and in the churches; the composer Frédéric Chopin and the poet Adam Mickiewicz became symbols of a nation without a state. Many Poles came to see Russia not only as an occupier but as a threat to their identity." },
        { type: "section", head: "The miracle on the Vistula", md:
          "Poland regained independence in 1918 as the empires collapsed. Almost at once it fought a war with Soviet Russia over the borderlands of today's Ukraine, Belarus and Lithuania. In summer 1920 the Red Army advanced on Warsaw, intending to spread revolution into Germany. In August, Polish forces under Józef Piłsudski struck its flank and routed it in the Battle of Warsaw, which Poles call the 'miracle on the Vistula'. The 1921 Treaty of Riga fixed a border far to the east of today's. Poles celebrate 15 August as Armed Forces Day in its memory." },
        { type: "section", head: "Breaking the codes", md:
          "One secret of the 1920 victory was intelligence. Polish cryptologists broke the Red Army's radio codes and could read its orders, so Piłsudski knew where the Soviet armies were and where the gaps between them lay. The same tradition later produced the Polish mathematicians who first broke Germany's Enigma cipher in the 1930s and passed their methods to Britain and France in 1939." },
        { type: "compare", head: "Two historical memories",
          left: { head: "Poland", md:
            "Russia partitioned, occupied and repressed Poland, which fought again and again for its freedom." },
          right: { head: "Russia", md:
            "Poland invaded Russia in 1610 and was a hostile Catholic power on its western border." } },
        { type: "section", head: "Why it matters", md:
          "Few European nations have as long a memory of Russian domination as Poland. That history shapes its alarm about Russia today, and its determination to be defended." }
      ],
      takeaways: [
        "Russia took the largest share when Poland was partitioned between 1772 and 1795.",
        "Russia crushed Polish uprisings in 1830–31 and 1863–64, exiling thousands to Siberia.",
        "In 1920 reborn Poland defeated the Red Army at the Battle of Warsaw."
      ],
      check: { q: "What was the 'miracle on the Vistula'?",
        choices: ["The Polish capture of Moscow in 1610", "Poland's defeat of the Red Army outside Warsaw in August 1920", "The end of communism in 1989"], answer: 1,
        explain: "Piłsudski's counterattack routed the Red Army; Poles mark 15 August as Armed Forces Day." },
      sources: [
        { title: "Russo-Polish War", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/event/Russo-Polish-War-1919-1920", date: "n.d." },
        { title: "Norman Davies: the Battle of Warsaw, one hundred years on", publisher: "Notes from Poland", url: "https://notesfrompoland.com/2020/08/12/norman-davies-the-battle-of-warsaw-one-hundred-years-on/", date: "2020-08-12" },
        { title: "The Partitions of Poland, 1772-1795", publisher: "German History in Documents and Images", url: "https://germanhistorydocs.org/en/the-holy-roman-empire-1648-1815/the-partitions-of-poland-1772-1795", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "pl_ru-2", kind: "relation", asOf: "2026-09-30",
      title: "Katyń, Soviet rule and Smolensk",
      dek: "In 1939 the Soviet Union invaded Poland in league with Hitler, and in 1940 it murdered 22,000 Polish prisoners at Katyń. Seventy years later, a plane carrying Poland's president to commemorate them crashed at Smolensk.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl_ru/pl_ru-2-hero.webp",
          alt: "Illustration of a quiet birch forest in autumn with a row of simple crosses among the trees.",
          caption: "Polish officers were shot and buried in the Katyń forest near Smolensk in 1940.",
          credit: "AI illustration — not a photograph",
          prompt: "A quiet birch forest in autumn with white trunks and golden leaves, a row of simple crosses among the trees, mist on the ground, soft grey light, solemn mood, no people, no flags, no legible text." },
        { type: "timeline", head: "Wounds of the 20th century", items: [
          ["17 Sep 1939", "The Soviet Union invades eastern Poland"],
          ["Apr–May 1940", "About 22,000 Poles murdered at Katyń and elsewhere"],
          ["1944", "Warsaw Uprising: the Red Army waits across the river"],
          ["1990", "Moscow admits Soviet guilt for Katyń"],
          ["1993", "The last Soviet-era troops leave Poland"],
          ["10 Apr 2010", "Presidential plane crashes at Smolensk; 96 killed"]
        ] },
        { type: "section", head: "1939 and Katyń", md:
          "In August 1939 Hitler and Stalin signed the Molotov–Ribbentrop pact, secretly dividing Eastern Europe. Germany invaded Poland on 1 September; on 17 September the Soviet Union invaded from the east. In April and May 1940, on orders from Stalin, the Soviet secret police shot about 22,000 Polish prisoners, most of them reserve officers, police and members of the educated elite, in the Katyń forest near Smolensk and at other sites. When Germany discovered the graves in 1943, Moscow blamed the Nazis, and for decades it was forbidden to say otherwise in communist Poland. Only in 1990 did the Soviet Union admit its guilt. On 7 April 2010, in a rare gesture, Vladimir Putin, then Russia's prime minister, joined Poland's prime minister Donald Tusk at Katyń to commemorate the victims." },
        { type: "section", head: "Liberation or occupation?", md:
          "In August 1944 the Polish Home Army rose against the Germans in Warsaw. The Red Army, on the other side of the Vistula, did not help, and the Germans crushed the uprising and razed the city. After the war Poland became a Soviet-controlled communist state. Soviet troops stayed; the last Russian combat troops left in 1993. After communism fell in 1989, Poland turned West, joining NATO in 1999 and the EU in 2004, over Russian objections. Poles widely see the Soviet 'liberation' of 1945 as the start of a new occupation, while Russia honours the Red Army's dead." },
        { type: "section", head: "Smolensk", md:
          "On 10 April 2010 a Polish Air Force plane carrying President Lech Kaczyński, his wife and 94 others, including the army's top commanders and relatives of Katyń victims, crashed while trying to land in thick fog at Smolensk, on the way to mark the 70th anniversary of the massacre. All 96 on board died. Polish and Russian investigators blamed pilot error in bad weather. But Kaczyński's twin brother Jarosław and his Law and Justice party alleged a Russian plot; a commission they set up later claimed an explosion, and Russia never returned the wreckage. The dispute poisoned Polish politics for a decade." },
        { type: "compare", head: "The Smolensk dispute",
          left: { head: "An accident", md:
            "Both official investigations found that the crew tried to land in dangerous fog under pressure." },
          right: { head: "A crime", md:
            "Law and Justice's commission alleged an explosion and a Russian cover-up, pointing to the wreckage Russia still holds." } },
        { type: "section", head: "Why it matters", md:
          "Katyń and Smolensk bind grief for Poland's elites to Russia. They explain why distrust of Moscow is shared across Polish politics, even by parties that agree on little else." }
      ],
      takeaways: [
        "The Soviet Union invaded Poland on 17 September 1939 and murdered about 22,000 Poles at Katyń in 1940.",
        "Moscow blamed the Nazis for Katyń until 1990; Soviet troops stayed in Poland until 1993.",
        "The 2010 Smolensk crash killed President Kaczyński and 95 others; some Poles still blame Russia."
      ],
      check: { q: "What did the Soviet Union admit in 1990?",
        choices: ["That it had lost the war", "That its secret police carried out the Katyń massacre", "That Poland owned Kaliningrad"], answer: 1,
        explain: "For decades Moscow had blamed the Nazis; about 22,000 Poles were murdered in spring 1940." },
      sources: [
        { title: "85th Anniversary of the Katyn Massacre", publisher: "POLIN Museum", url: "https://www.polin.pl/en/rocznica-zbrodni-katynskiej", date: "2025" },
        { title: "Poland's President, Other Officials, Die In Plane Crash", publisher: "NPR", url: "https://www.npr.org/sections/thetwo-way/2010/04/polish_president_central_bank.html", date: "2010-04-10" },
        { title: "Poland Scraps Probe Into 2010 Air Crash That Killed President", publisher: "RFE/RL", url: "https://www.rferl.org/a/poland-scraps-smolensk-plane-crash-probe-kaczynski-president-death/32732584.html", date: "2023-12" },
        { title: "The 10th anniversary of the Smolensk plane crash", publisher: "Government of Poland", url: "https://www.gov.pl/web/oecd-en/the-10th-anniversary-of-the-smolensk-plane-crash", date: "2020-04" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "pl_ru-3", kind: "relation", asOf: "2026-09-30",
      title: "Drones, sabotage and a shield",
      dek: "Since Russia's full invasion of Ukraine, Poland has become NATO's front line. Russian drones have crossed its skies, saboteurs have blown up a railway, and Poland is spending more on defence than any other NATO country as a share of its economy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pl_ru/pl_ru-3-hero.webp",
          alt: "Illustration of a railway line through a pine forest with a damaged section of track and investigators in the distance.",
          caption: "In November 2025 an explosion damaged the railway between Warsaw and Lublin.",
          credit: "AI illustration — not a photograph",
          prompt: "A railway line running straight through a pine forest, a damaged buckled section of track in the foreground, police tape and small distant figures of investigators, grey overcast November light, tense documentary mood, no faces, no flags, no legible text." },
        { type: "timeline", head: "On the front line", items: [
          ["2022", "Poland takes in millions of Ukrainian refugees and arms Ukraine"],
          ["2024", "East Shield border fortification programme launched"],
          ["9–10 Sep 2025", "19 Russian drones enter Polish airspace; NATO jets shoot some down"],
          ["16 Nov 2025", "Explosion on the Warsaw–Lublin railway; Poland blames Russia"],
          ["Nov–Dec 2025", "Poland closes Russia's last consulate, in Gdańsk"],
          ["2026", "Defence budget of about 4.8% of GDP"]
        ] },
        { type: "section", head: "Drones over Poland", md:
          "Poland has been Ukraine's main gateway for Western weapons and aid since 2022 (see [[lesson:pl-5]]). On the night of 9–10 September 2025, during a big Russian attack on Ukraine, 19 Russian drones crossed into Polish airspace. Polish and allied NATO jets shot some down, the first time NATO aircraft fired at Russian targets over allied territory. Poland called it a deliberate provocation and invoked Article 4 of the NATO treaty, which calls for consultations among allies. NATO launched a new air-defence operation, 'Eastern Sentry', to protect its eastern flank." },
        { type: "section", head: "Sabotage", md:
          "Poland has also faced what it calls a Russian campaign of sabotage: arson attacks on shopping centres and warehouses, cyberattacks and spies. On 16 November 2025 an explosive charge damaged the railway between Warsaw and Lublin, a route used for supplies to Ukraine, and another section near Puławy was sabotaged. Prime Minister Donald Tusk called it an unprecedented act of sabotage, and prosecutors charged two Ukrainian men they said worked for Russian intelligence, who had fled to Belarus. In response Poland ordered the closure of Russia's last consulate, in Gdańsk, having already shut those in Poznań and Kraków over earlier sabotage; Moscow has refused to hand back the Gdańsk building, and its embassy in Warsaw remains open." },
        { type: "section", head: "Building a shield", md:
          "Poland is arming faster than anyone in NATO. Its 2026 budget sets defence spending at about 4.8% of GDP, the highest share in the alliance, buying tanks, artillery and aircraft from South Korea and the United States and building one of Europe's largest armies. In 2024 it launched the East Shield, a roughly 10-billion-złoty programme to fortify about 700 kilometres of its borders with Belarus and Russia's Kaliningrad region with ditches, obstacles and counter-drone systems by 2028. In 2025 it also moved to leave the treaty banning anti-personnel mines, so that it could mine its eastern border in a crisis." },
        { type: "compare", head: "How much danger?",
          left: { head: "Warsaw's view", md:
            "Russia is already waging hybrid war on Poland and could attack NATO within a few years. Only strength deters it." },
          right: { head: "Sceptics", md:
            "Russia is stretched in Ukraine; talk of war risks panic, and huge military spending strains Poland's budget." } },
        { type: "section", head: "Why it matters", md:
          "Poland borders both Russia and Belarus and is the hub for supporting Ukraine. If Russia tests NATO, Poland is where it is most likely to happen." }
      ],
      takeaways: [
        "In September 2025, 19 Russian drones entered Polish airspace; Poland invoked NATO's Article 4.",
        "Poland blamed Russian intelligence for blowing up a railway in November 2025 and closed Russia's last consulate.",
        "Poland spends about 4.8% of GDP on defence and is fortifying its borders under the East Shield plan."
      ],
      check: { q: "What did Poland do after the September 2025 drone incursion?",
        choices: ["Declared war on Russia", "Invoked Article 4 of the NATO treaty for consultations", "Closed its border with Ukraine"], answer: 1,
        explain: "NATO jets shot down some of the drones, and NATO launched the 'Eastern Sentry' air-defence operation." },
      sources: [
        { title: "NATO's Article 4 invoked over Russian drones in Poland: What to know", publisher: "The Hill", url: "https://thehill.com/policy/international/5496068-nato-response-russian-drone-article-4/", date: "2025-09-10" },
        { title: "Russia's hybrid warfare rattles Poland and NATO", publisher: "NPR", url: "https://www.npr.org/2026/02/18/nx-s1-5702706/russia-hybrid-warfare-poland", date: "2026-02-18" },
        { title: "Poland cuts off power to former Russian consulate that Moscow is refusing to hand back", publisher: "Notes from Poland", url: "https://notesfrompoland.com/2026/04/03/poland-cuts-off-power-to-former-russian-consulate-that-moscow-is-refusing-to-hand-back/", date: "2026-04-03" },
        { title: "Poland to raise defence spending to EUR 46.8 bln in 2026 - defence minister", publisher: "PAP", url: "https://www.pap.pl/en/news/poland-raise-defence-spending-eur-468-bln-2026-defence-minister", date: "2025" },
        { title: "Poland's East Shield", publisher: "Konrad-Adenauer-Stiftung", url: "https://www.kas.de/en/monitor/detail/-/content/poland-s-east-shield", date: "2025" }
      ]
    }
  ]
});
