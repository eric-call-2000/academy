/* ============================================================
   Relationship — Germany & Russia 🇩🇪🇷🇺
   Fifty years of trading gas for pipes, the Nord Stream
   explosions and the trial that follows, and Russia's campaign of
   sabotage and spying inside Germany. Germany's rearmament is in
   de-5; its energy shock in de-7.
   Research note and sources: tools/research/de_ru.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("de_ru", {
  id: "de_ru",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "de_ru-1", kind: "relation", asOf: "2026-09-30",
      title: "Change through trade",
      dek: "For half a century Germany bet that buying Russian gas would bind Moscow to peace. By 2021 Russia supplied more than half of Germany's gas. Then the bet failed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_ru/de_ru-1-hero.webp",
          alt: "Illustration of large steel gas pipes stacked in a snowy yard beside a railway, with a gas compressor station behind.",
          caption: "In 1970 West Germany agreed to supply steel pipes to the Soviet Union in return for gas, the start of a 50-year energy partnership.",
          credit: "AI illustration — not a photograph",
          prompt: "Huge steel gas pipes stacked in rows in a snowy industrial yard beside a railway line, a gas compressor station with chimneys behind, low winter sun, cold and industrial, no people, no flags, no legible text." },
        { type: "timeline", head: "The gas bargain", items: [
          ["1970", "Brandt's Moscow Treaty; the first gas-for-pipes deal"],
          ["1973", "Soviet gas reaches West Germany"],
          ["1990", "Moscow accepts German reunification"],
          ["2005", "Schröder backs Nord Stream, then joins its board"],
          ["2011", "Nord Stream 1 opens under the Baltic"],
          ["2015", "Nord Stream 2 agreed, a year after Crimea"],
          ["2021", "Russia supplies 55% of Germany's gas imports"],
          ["Feb 2022", "Scholz halts Nord Stream 2"]
        ] },
        { type: "section", head: "Ostpolitik", md:
          "In 1970 Chancellor Willy Brandt signed a treaty in Moscow accepting post-war borders, part of his 'Ostpolitik', a policy of easing Cold War tensions with the East. The same year West German firms agreed to supply the Soviet Union with large steel pipes in return for natural gas, which began to flow in 1973. The idea, later summed up as *Wandel durch Handel*, 'change through trade', was that economic ties would make conflict too costly. When Mikhail Gorbachev agreed in 1990 that a reunited Germany could stay in NATO, many Germans saw it as proof that the approach worked (see [[lesson:de-11]])." },
        { type: "section", head: "Nord Stream", md:
          "After the Cold War the partnership deepened. Chancellor Gerhard Schröder, a friend of Vladimir Putin, backed a pipeline straight under the Baltic Sea to Germany, bypassing Ukraine and Poland. Weeks after leaving office in 2005 he became chairman of the project's shareholders' committee, and later of the Russian oil giant Rosneft. Nord Stream 1 opened in 2011 with capacity for 55 billion cubic metres a year. Angela Merkel pressed ahead with a second pipeline, Nord Stream 2, agreed in 2015, a year after Russia seized Crimea, despite objections from Poland, the Baltic states, Ukraine and the United States. By 2021 Russia supplied 55% of Germany's gas imports, and cheap gas fed its chemicals and steel industries." },
        { type: "section", head: "The reckoning", md:
          "On 22 February 2022, as Russian troops massed on Ukraine's border, Chancellor Olaf Scholz halted certification of the finished Nord Stream 2. After the invasion Russia cut deliveries, and gas prices soared. Germany built floating import terminals for liquefied gas in months and filled its storage from Norway, the Netherlands and the United States. By the end of 2022 no Russian gas was coming to Germany by pipeline. The cost was steep: energy-hungry industry was hit hard (see [[lesson:de-7]])." },
        { type: "compare", head: "Was the bet wrong?",
          left: { head: "Critics", md:
            "Germany ignored warnings from its neighbours, funded Putin's war machine and handed Moscow a weapon. Trade did not change Russia; it changed Germany." },
          right: { head: "Defenders", md:
            "For decades the partnership helped keep the peace, and gas was a commercial choice that Moscow honoured even during the Cold War. The mistake was not changing course after 2014." } },
        { type: "section", head: "Why it matters", md:
          "Germany's Russia policy is now studied as a warning about depending on an authoritarian supplier, a lesson Berlin is trying to apply to its trade with China. Former leaders have faced a reckoning: Schröder was stripped of his office privileges by parliament in 2022, and even Merkel's legacy is debated. Germany is now one of Ukraine's biggest military backers." }
      ],
      takeaways: [
        "From 1970 Germany traded pipes and technology for Soviet and then Russian gas, hoping trade would bring change.",
        "Nord Stream pipelines under the Baltic made Russia the source of 55% of Germany's gas imports by 2021.",
        "After the 2022 invasion Germany halted Nord Stream 2 and replaced Russian gas within a year, at a high cost."
      ],
      check: { q: "What does 'Wandel durch Handel' mean?",
        choices: ["Strength through arms", "Change through trade", "Peace through neutrality"], answer: 1,
        explain: "It was the German idea that economic ties with Moscow would make conflict too costly and gradually change Russia." },
      sources: [
        { title: "Europe's messy Russian gas divorce", publisher: "Brookings", url: "https://www.brookings.edu/articles/europes-messy-russian-gas-divorce/", date: "2023" },
        { title: "How did Germany fare without Russian gas?", publisher: "Brookings", url: "https://www.brookings.edu/articles/how-did-germany-fare-without-russian-gas/", date: "2023" },
        { title: "Germany, EU remain heavily dependent on imported fossil fuels", publisher: "Clean Energy Wire", url: "https://www.cleanenergywire.org/factsheets/germanys-dependence-imported-fossil-fuels", date: "2025" },
        { title: "Ostpolitik", publisher: "Britannica", url: "https://www.britannica.com/topic/Ostpolitik", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "de_ru-2", kind: "relation", asOf: "2026-09-30",
      title: "Nord Stream: the pipes that blew up",
      dek: "In September 2022 explosions tore apart the pipelines that had bound Germany to Russian gas. Four years later, the first suspect is about to go on trial in Hamburg, and the trail leads to Ukraine.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_ru/de_ru-2-hero.webp",
          alt: "Illustration of a large circle of bubbling, churning water on a calm grey sea, seen from the air.",
          caption: "Gas bubbling to the surface of the Baltic Sea near the Danish island of Bornholm after the explosions on 26 September 2022.",
          credit: "AI illustration — not a photograph",
          prompt: "Aerial view of a large circle of white churning bubbling water on a calm dark grey sea, gas escaping from below, a faint coastline far away, overcast sky, eerie and dramatic, no boats, no people, no legible text." },
        { type: "facts", head: "The sabotage", rows: [
          ["When", "26 September 2022"],
          ["Where", "Baltic seabed near Bornholm, Denmark, 70–80 m deep"],
          ["Damage", "Three of the four Nord Stream 1 and 2 pipes destroyed"],
          ["Investigations", "Sweden and Denmark closed theirs in 2024; Germany's continues"],
          ["Trial", "First suspect due in court in Hamburg on 14 October 2026"]
        ] },
        { type: "section", head: "The explosions", md:
          "On 26 September 2022 seismologists recorded blasts on the Baltic seabed south-east of the Danish island of Bornholm. Three of the four Nord Stream pipes were ripped open, sending plumes of methane to the surface. No gas was flowing to Germany at the time, since Russia had shut Nord Stream 1 and Nord Stream 2 had never been approved, but the pipes still held gas under pressure. The sabotage ended any chance they could be switched back on. Investigators found traces of explosives and quickly agreed it was deliberate." },
        { type: "section", head: "Whodunnit", md:
          "Theories multiplied. Russia blamed the United States and Britain; an American journalist claimed the US Navy did it, which Washington denied. Sweden and Denmark closed their investigations in early 2024 without naming anyone. German prosecutors followed a different trail: a sailing yacht, the *Andromeda*, hired in the port of Rostock with false papers, which they believe carried a small team of divers. In August 2025 Italian police arrested a Ukrainian man, Serhii K., a former army officer, whom prosecutors accuse of coordinating the team; Italy extradited him, and he was charged in July 2026. Poland refused to extradite another Ukrainian suspect in October 2025, Prime Minister Donald Tusk saying the problem was not that the pipes were blown up but that they were built. In September 2026 a Croatian court approved the extradition of a third suspect, a diver, pending appeal." },
        { type: "section", head: "A careful Berlin", md:
          "German investigators reportedly believe the operation was ordered by Ukrainian officers to cut off Russian gas revenues. Ukraine denies any involvement. The German government, one of Kyiv's biggest backers, has avoided blaming the Ukrainian state, and prosecutors have charged no government. Moscow uses the case to argue that Germany's support for Ukraine is misplaced." },
        { type: "compare", head: "Two reactions",
          left: { head: "Many in Germany", md:
            "Whoever did it attacked critical infrastructure and German property. The courts must follow the evidence wherever it leads, including to an ally." },
          right: { head: "Many in Poland and Ukraine", md:
            "The pipelines were a Russian weapon aimed at Europe. Destroying them during a war of aggression is not a crime worth pursuing." } },
        { type: "section", head: "Why it matters", md:
          "The trial that opens in Hamburg on 14 October is expected to run into early 2027. It will test how Germany balances the rule of law against its support for Ukraine, and it keeps alive the question of whether Nord Stream could ever reopen, which some in German industry and on the far right still want." }
      ],
      takeaways: [
        "Explosions on 26 September 2022 destroyed three of the four Nord Stream pipes under the Baltic.",
        "German prosecutors say a Ukrainian team using a hired yacht carried out the sabotage; Ukraine denies it.",
        "The first suspect, a former Ukrainian officer, goes on trial in Hamburg on 14 October 2026."
      ],
      check: { q: "Who is the first person to be tried in Germany over the Nord Stream sabotage?",
        choices: ["A Russian naval officer", "A former Ukrainian army officer", "An American diver"], answer: 1,
        explain: "Serhii K., a former Ukrainian officer arrested in Italy in 2025, is accused of coordinating the team and goes on trial in Hamburg." },
      sources: [
        { title: "Man charged with sabotage of Nord Stream gas pipeline in German court", publisher: "Euronews", url: "https://www.euronews.com/my-europe/2026/07/01/man-charged-with-sabotage-of-nord-stream-gas-pipeline-in-german-court", date: "2026-07-01" },
        { title: "Croatian court approves extradition in Nord Stream bombing case", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/24/croatian-court-approves-extradition-in-nord-stream-bombing-case", date: "2026-09-24" },
        { title: "Italy to extradite Ukrainian Nord Stream sabotage suspect to Germany", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2025/11/20/italy-to-extradite-ukrainian-nord-stream-sabotage-suspect-to-germany", date: "2025-11-20" },
        { title: "Poland denies extradition of Nord Stream suspect to Germany", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-10-17/poland-denies-extradition-of-nord-stream-suspect-to-germany", date: "2025-10-17" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "de_ru-3", kind: "relation", asOf: "2026-09-30",
      title: "Hackers, hitmen and drones",
      dek: "Russia's intelligence services have hacked Germany's parliament, murdered a man in a Berlin park and, Berlin says, tried to blow up cargo planes at a German airport. Germany is fighting back.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_ru/de_ru-3-hero.webp",
          alt: "Illustration of a large cargo aircraft on an airport apron at night under floodlights, with a small drone silhouetted against the sky.",
          caption: "In August 2026, Germany says, Russian agents used an explosive-laden drone against Ukrainian cargo planes at Leipzig airport.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge cargo aircraft parked on an airport apron at night under bright floodlights, a small quadcopter drone silhouetted against the dark sky above, wet tarmac reflections, tense and sinister, no people, no markings, no flags, no legible text." },
        { type: "timeline", head: "A shadow war", items: [
          ["2015", "Hackers steal 16 GB of data from the Bundestag"],
          ["Aug 2019", "Chechen exile shot dead in Berlin's Tiergarten"],
          ["Dec 2021", "Court rules the killing was 'state terrorism'"],
          ["Jul 2024", "Incendiary parcel catches fire at Leipzig airport"],
          ["Oct 2025", "Drone sightings shut Munich airport"],
          ["4 Aug 2026", "Explosive drone used at Leipzig airport"],
          ["Sep 2026", "Germany closes a Russian consulate; Russia expels 20+ German diplomats"]
        ] },
        { type: "section", head: "Hackers and a hitman", md:
          "In 2015 hackers broke into the Bundestag's computer network through emails disguised as UN news bulletins and stole about 16 gigabytes of data, including from Chancellor Merkel's parliamentary office. German investigators blamed APT28, a unit of Russia's military intelligence, the GRU. On 23 August 2019 a man on a bicycle shot dead Zelimkhan Khangoshvili, a Georgian of Chechen origin who had fought Russian forces, in Berlin's Kleiner Tiergarten park. In December 2021 a Berlin court sentenced the gunman, Vadim Krasikov, to life, ruling that Russia's central government had ordered the killing, 'an act of state terrorism'. Germany released him in the 2024 prisoner exchange (see [[lesson:us_ru-3]])." },
        { type: "section", head: "Sabotage", md:
          "After 2022 the attacks multiplied. In July 2024 a parcel fitted with an incendiary device caught fire at a DHL hub at Leipzig airport; investigators across Europe later linked a series of such parcels, hidden in massage pillows, to agents working for Russian military intelligence. In October 2025 drone sightings twice shut Munich airport. Then, Germany says, on 4 August 2026 agents used a drone packed with explosives against Ukrainian cargo aircraft at Leipzig–Halle airport. Interior Minister Alexander Dobrindt said the drone's components and explosives matched 'other Russian hybrid operations' and that the people involved acted 'on behalf of Russian state entities'. Putin said Berlin had fabricated the evidence." },
        { type: "section", head: "Pushing back", md:
          "Germany responded on 1 September 2026 by ordering Russia's consulate in Bonn closed and ending the lease of the Russian House cultural centre in Berlin; Moscow expelled more than 20 German diplomats. Yet channels remain. On 26 September 2026, at the UN, Foreign Minister Johann Wadephul met Sergei Lavrov for 20 minutes, the first such talks since before the invasion. Lavrov said he heard 'nothing new'." },
        { type: "compare", head: "How to respond?",
          left: { head: "Hawks", md:
            "Russia is already waging war on Germany below the threshold of open conflict. Expel spies, protect infrastructure and make Moscow pay." },
          right: { head: "Cautious voices", md:
            "Germany must defend itself without escalating into direct confrontation with a nuclear power, and must keep a channel open for eventual peace talks." } },
        { type: "section", head: "Why it matters", md:
          "Germany is Russia's main European target because it is the continent's biggest economy and one of Ukraine's biggest backers. How well it defends its airports, cables and elections, and how it answers, will shape how far Russia's hybrid war on Europe goes." }
      ],
      takeaways: [
        "German courts and investigators have tied Russian intelligence to the 2015 Bundestag hack and the 2019 Tiergarten murder.",
        "Germany blames Russia for an explosive drone attack at Leipzig airport in August 2026 and closed a Russian consulate.",
        "The two foreign ministers met in September 2026 for the first time since the invasion, with no breakthrough."
      ],
      check: { q: "What did a German court call the 2019 Tiergarten killing?",
        choices: ["A robbery gone wrong", "An act of state terrorism ordered by Russia", "A private feud"], answer: 1,
        explain: "The Berlin court ruled that Russia's central government ordered the murder of Zelimkhan Khangoshvili, 'an act of state terrorism'." },
      sources: [
        { title: "Germany blames Russia for Leipzig airport drone attack, orders Russian consulate closed", publisher: "France 24", url: "https://www.france24.com/en/europe/20260901-germany-blames-russia-for-leipzig-airport-drone-attack-orders-russian-consulate-closed", date: "2026-09-01" },
        { title: "Germany accuses Russia of failed drone attack on Leipzig airport in August", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/1/germany-accuses-russia-of-drone-attack-on-leipzig-airport", date: "2026-09-01" },
        { title: "Russian convicted of 'state-contracted killing' in Berlin park", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2021/12/15/german-court-convicts-russian-of-2019-state-contracted-killing", date: "2021-12-15" },
        { title: "Bundestag Hack (2015)", publisher: "NATO CCDCOE Cyber Law Toolkit", url: "https://cyberlaw.ccdcoe.org/wiki/Bundestag_Hack_(2015)", date: "n.d." },
        { title: "2024 parcel blasts in Europe organized by Russians with intelligence ties, Lithuania says", publisher: "CNN", url: "https://www.cnn.com/2025/09/17/europe/russia-dhl-bombs-lithuania-latam-intl", date: "2025-09-17" },
        { title: "Russian and German FMs Meet for First Time Since Ukraine Invasion", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/09/26/russian-and-german-fms-meet-for-first-time-since-ukraine-invasion-a93799", date: "2026-09-26" }
      ]
    }
  ]
});
