/* ============================================================
   Relationship — Germany & Israel 🇩🇪🇮🇱
   The Holocaust, reparations and diplomatic relations in 1965;
   Merkel's "Staatsräson", submarines and Arrow 3; and the Gaza
   war, a pause in arms exports and record licences in 2026.
   Research note and sources: tools/research/de_il.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("de_il", {
  id: "de_il",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "de_il-1", kind: "relation", asOf: "2026-10-12",
      title: "Reparations and recognition",
      dek: "Seven years after the Holocaust, West Germany agreed to pay Israel billions in reparations. Secret arms deliveries followed, and in 1965 the two countries opened embassies.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_il/de_il-1-hero.webp",
          alt: "Illustration of a long freight ship being loaded with crates at a quay, cranes against a grey sky.",
          caption: "Much of the reparations came as German goods and ships delivered to Israel.",
          credit: "Illustration — not a photograph",
          prompt: "A 1950s cargo ship being loaded with machinery crates at a North German harbour quay, steam cranes and brick warehouses, grey northern light, historical documentary painting style, figures small and distant, no flags, no legible text." },
        { type: "timeline", head: "From catastrophe to embassies", items: [
          ["1933–45", "Nazi Germany murders six million Jews in the Holocaust"],
          ["1948", "Israel declares independence"],
          ["Sep 1952", "Luxembourg Agreement on reparations"],
          ["Mar 1960", "Adenauer and Ben-Gurion meet in New York"],
          ["May 1965", "Diplomatic relations established"],
          ["Sep 1972", "Eleven Israeli athletes murdered at the Munich Olympics"]
        ] },
        { type: "section", head: "The crime", md:
          "Between 1933 and 1945 Nazi Germany persecuted Europe's Jews and then set out to destroy them. About six million were murdered in shootings, ghettos and death camps such as Auschwitz and Treblinka. Many survivors had nowhere to return to, and hundreds of thousands made their way to Palestine, where Israel declared independence in 1948. For the new state, Germany was the country of the murderers; Israeli passports were long stamped as not valid for travel there." },
        { type: "section", head: "The Luxembourg Agreement", md:
          "In 1951 West Germany's first chancellor, Konrad Adenauer, told the Bundestag that 'unspeakable crimes' had been committed in the name of the German people and offered compensation. Israel's prime minister, David Ben-Gurion, accepted talks despite furious protests; the opposition leader Menachem Begin led a crowd that stoned the Knesset. In September 1952 the two sides signed the Luxembourg Agreement: West Germany would pay Israel three billion marks, much of it in goods, ships and machinery, plus 450 million marks to the Jewish Claims Conference." },
        { type: "section", head: "Money that built a state", md:
          "The deliveries arrived when Israel was poor and absorbing huge waves of immigrants. They paid for ships for the merchant fleet, rail equipment, power stations and steel, and helped lay the foundations of its industry. Separate payments to individual survivors followed under German compensation laws and continue today. Many Israelis still found the money hard to accept, and the agreement was called 'blood money' by its critics." },
        { type: "section", head: "Secret arms", md:
          "In March 1960 Adenauer and Ben-Gurion met for the first time, at the Waldorf-Astoria hotel in New York. Over the next years West Germany quietly supplied weapons, including tanks, to Israel. When the deliveries leaked in 1964 and 1965, Arab states protested, and Bonn feared they would recognise Communist East Germany in revenge. Instead West Germany decided to normalise relations with Israel openly. In May 1965 the two countries established diplomatic relations, and most Arab states broke off ties with Bonn." },
        { type: "section", head: "Munich", md:
          "In September 1972 Palestinian gunmen from the Black September group took Israeli athletes hostage at the Munich Olympics. A botched German rescue at an airfield ended with all eleven hostages dead. The failure shadowed relations for decades; only in 2022 did Germany agree a larger compensation settlement with the victims' families and apologise for the failures." },
        { type: "compare", head: "Two states, one past",
          left: { head: "West Germany", md:
            "A new democracy that wanted to show it had broken with Nazism, and needed Western trust." },
          right: { head: "Israel", md:
            "A state of survivors and refugees that needed money, arms and recognition." } },
        { type: "section", head: "Why it matters", md:
          "The relationship began not as a friendship but as an act of atonement. That origin still shapes how Germany talks about Israel, and why criticism of Israel is so fraught in German politics." }
      ],
      takeaways: [
        "In the 1952 Luxembourg Agreement West Germany agreed to pay Israel three billion marks, much of it in goods.",
        "West Germany secretly sent arms to Israel before the two opened diplomatic relations in May 1965.",
        "Eleven Israeli athletes were murdered at the 1972 Munich Olympics after a failed German rescue."
      ],
      check: { q: "What did the 1952 Luxembourg Agreement do?",
        choices: ["Set up a West German embassy in Israel", "Committed West Germany to pay reparations to Israel", "Ended the Second World War"], answer: 1,
        explain: "West Germany promised three billion marks to Israel and 450 million to the Claims Conference." },
      sources: [
        { title: "Reparations Agreement between Israel and the Federal Republic of Germany", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Reparations_Agreement_between_Israel_and_the_Federal_Republic_of_Germany", date: "n.d." },
        { title: "Germany–Israel relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Germany%E2%80%93Israel_relations", date: "n.d." },
        { title: "Munich massacre", publisher: "Britannica", url: "https://www.britannica.com/event/Munich-Massacre", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "de_il-2", kind: "relation", asOf: "2026-10-12",
      title: "Submarines and 'Staatsräson'",
      dek: "Germany became Israel's closest friend in Europe and its second-biggest arms supplier. In 2008 Angela Merkel told the Knesset that Israel's security was part of Germany's reason of state.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_il/de_il-2-hero.webp",
          alt: "Illustration of a dark submarine leaving a harbour past a breakwater at dawn.",
          caption: "German-built submarines are the backbone of Israel's navy.",
          credit: "Illustration — not a photograph",
          prompt: "A dark diesel submarine sailing out of a Mediterranean harbour past a stone breakwater at dawn, calm sea, low hills and a lighthouse behind, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A special relationship", items: [
          ["1985", "President Weizsäcker calls 8 May a day of liberation"],
          ["1991", "Germany agrees to fund submarines after Iraqi missiles hit Israel"],
          ["2000", "President Rau addresses the Knesset in German"],
          ["Mar 2008", "Merkel tells the Knesset Israel's security is 'Staatsräson'"],
          ["2008", "First joint government consultations"],
          ["Sep 2023", "Germany signs to buy Israel's Arrow 3 missile defence"]
        ] },
        { type: "section", head: "Remembering", md:
          "From the 1960s West Germany slowly confronted its past through trials of Auschwitz guards, school lessons and memorials. In 1970 Chancellor Willy Brandt knelt at the memorial to the Warsaw Ghetto, and in 1985 President Richard von Weizsäcker called the end of the war a day of liberation. Reunified Germany built the Memorial to the Murdered Jews of Europe in central Berlin, opened in 2005. Jewish life, nearly wiped out, grew again, partly through immigration from the former Soviet Union." },
        { type: "section", head: "Submarines", md:
          "In 1991, after Saddam Hussein's Scud missiles hit Israel and it emerged that German firms had helped Iraq's weapons programmes, Germany agreed to pay for most of two Dolphin-class submarines and share the cost of a third. More followed from the Kiel shipyard of what is now ThyssenKrupp Marine Systems, with Germany covering part of the price. Israel's navy now relies on these boats, and foreign analysts widely believe they can carry nuclear-armed missiles, which Israel never confirms. Germany also built Israel's Sa'ar 6 corvettes." },
        { type: "section", head: "Merkel's word", md:
          "In March 2008 Angela Merkel became the first German head of government to address the Knesset. Speaking in German, she said Germany's historic responsibility for Israel's security was part of its 'Staatsräson', its reason of state, and was never negotiable. The phrase has been repeated by every chancellor since. It has no legal definition, and critics in Germany ask what it would mean in practice, for example if Israel went to war with Iran." },
        { type: "section", head: "Trade and technology", md:
          "Germany is Israel's largest trading partner in Europe. Israeli start-ups find investors in Berlin, and German companies buy Israeli cyber-security and medical technology. In 2023 Germany agreed to buy Arrow 3, an Israeli system that destroys ballistic missiles above the atmosphere, for about four billion euros, Israel's largest arms export deal. The first batteries were deployed at Holzdorf air base in December 2025." },
        { type: "section", head: "Friction", md:
          "Germany has long opposed Israeli settlements in the occupied West Bank and supports a Palestinian state alongside Israel. It is also one of the largest donors to the Palestinians. In 2019 the Bundestag condemned the boycott movement against Israel, known as BDS, as antisemitic, which critics said chilled debate." },
        { type: "compare", head: "What each gives",
          left: { head: "Germany gives", md:
            "Diplomatic backing in Europe, submarines and ships, trade and investment." },
          right: { head: "Israel gives", md:
            "Missile defence, technology, intelligence cooperation and a measure of reconciliation." } },
        { type: "section", head: "Why it matters", md:
          "Few countries tie their foreign policy so explicitly to history. The 'Staatsräson' makes Germany Israel's most dependable partner in Europe, but it also makes Berlin's choices especially hard when Israel goes to war." }
      ],
      takeaways: [
        "Germany paid for much of Israel's Dolphin submarine fleet, built in Kiel.",
        "In 2008 Merkel told the Knesset that Israel's security was part of Germany's 'Staatsräson'.",
        "Germany bought Israel's Arrow 3 missile defence system; the first batteries deployed in December 2025."
      ],
      check: { q: "What did Angela Merkel call Israel's security in her 2008 Knesset speech?",
        choices: ["A matter for NATO", "Part of Germany's 'Staatsräson', or reason of state", "A question for the United Nations"], answer: 1,
        explain: "Every chancellor since has repeated the phrase, though it has no legal definition." },
      sources: [
        { title: "Germany–Israel relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Germany%E2%80%93Israel_relations", date: "n.d." },
        { title: "Dolphin-class submarine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dolphin-class_submarine", date: "n.d." },
        { title: "Historic milestone: Arrow 3 system handover", publisher: "Israel Ministry of Defense", url: "https://mod.gov.il/en/press-releases/press-room/historic-milestone-arrow-3-system-handover-marks-new-chapter-in-israeli-german-defense-partnership", date: "2025-12" },
        { title: "Germany's Arrow 3 buy expands", publisher: "European Security & Defence", url: "https://euro-sd.com/2026/01/major-news/48423/germanys-arrow-3-buy-expands/", date: "2026-01" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "de_il-3", kind: "relation", asOf: "2026-10-12",
      title: "Gaza, a pause and record licences",
      dek: "After 7 October 2023 Germany stood by Israel, but the toll in Gaza strained the bond. In 2025 Friedrich Merz briefly halted some arms exports; in 2026 licences hit record levels.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_il/de_il-3-hero.webp",
          alt: "Illustration of a modern government building with a glass dome at dusk, a small crowd with placards in front.",
          caption: "Germany's stance on the Gaza war has divided its politics.",
          credit: "Illustration — not a photograph",
          prompt: "A grand stone parliament building with a modern glass dome at dusk, a small crowd holding plain placards on the lawn in front, street lamps, documentary painting style, figures small and seen from behind, no flags, no legible text." },
        { type: "timeline", head: "Since October 2023", items: [
          ["Oct 2023", "Hamas attack; Chancellor Scholz flies to Israel"],
          ["Apr 2024", "Germany defends itself at the ICJ against Nicaragua's case"],
          ["Aug 2025", "Merz halts exports of arms usable in Gaza"],
          ["Nov 2025", "The halt is lifted after a ceasefire"],
          ["Dec 2025", "Merz visits Israel; first Arrow 3 batteries deploy"],
          ["H1 2026", "Arms licences for Israel reach about 800 million euros"]
        ] },
        { type: "section", head: "Solidarity", md:
          "On 7 October 2023 Hamas killed about 1,200 people in Israel and took some 250 hostages, several of them German citizens. Chancellor Olaf Scholz flew to Israel ten days later and repeated that Israel's security was German 'Staatsräson'. Germany banned Hamas activity and the pro-Palestinian network Samidoun, and arms export licences to Israel rose sharply in 2023. When Nicaragua accused Germany at the International Court of Justice of facilitating genocide by arming Israel, Germany rejected the charge, and the court declined to order emergency measures in April 2024." },
        { type: "section", head: "A growing unease", md:
          "As Israel's war in Gaza went on and the death toll reported by Gaza's health ministry passed tens of thousands, many Germans grew uneasy. Polls showed most opposed further arms deliveries. The government faced lawsuits and protests, while police cracked down on some pro-Palestinian demonstrations, drawing criticism from rights groups. Friedrich Merz, chancellor from May 2025, at first took a hawkish line; in June 2025 he said Israel's strikes on Iran were 'dirty work' Israel was doing 'for all of us'." },
        { type: "section", head: "The pause", md:
          "In August 2025, after Israel's cabinet approved a plan to take control of Gaza City, Merz announced that Germany would approve no more exports of military equipment that could be used in Gaza. It was a striking step for a German chancellor, and Netanyahu accused him of rewarding Hamas. After a US-brokered ceasefire took hold in October, the restriction was lifted on 24 November 2025, having lasted about three and a half months." },
        { type: "section", head: "Merz in Israel", md:
          "In December 2025 Merz made his first visit to Israel as chancellor. He said Germany would always stand by Israel and supported a Palestinian state as the goal of a peace process, but said Germany did not intend to recognise one 'in the foreseeable future', unlike France and the UK. Netanyahu rejected a Palestinian state outright. In the same month the Bundestag approved an expansion of the Arrow 3 purchase, which Israel Aerospace Industries put at about 3.1 billion dollars in January 2026." },
        { type: "section", head: "Record licences", md:
          "In the first half of 2026 Germany approved arms exports to Israel worth nearly 800 million euros, more than four times the total for 2025, according to a government answer reported by Der Spiegel. About two-thirds of the second-quarter figure was for the submarine Drakon, under construction in Kiel. The Left Party accused the government of double standards." },
        { type: "compare", head: "Two pressures",
          left: { head: "Standing by Israel", md:
            "History, the 'Staatsräson', missile defence and Germany's own security needs." },
          right: { head: "Doubts at home", md:
            "Civilian deaths in Gaza, international law, lawsuits and public opinion." } },
        { type: "section", head: "Why it matters", md:
          "The Gaza war tested what 'Staatsräson' means. Germany showed it could pause some arms sales, but its deep ties to Israel's defence quickly reasserted themselves, and Arrow 3 now protects German skies."  }
      ],
      takeaways: [
        "Germany rejected Nicaragua's ICJ case accusing it of facilitating genocide by arming Israel.",
        "Merz halted exports of arms usable in Gaza in August 2025 and lifted the halt in November.",
        "Arms licences for Israel reached nearly 800 million euros in the first half of 2026, mostly for a submarine."
      ],
      check: { q: "What did Chancellor Merz announce in August 2025?",
        choices: ["Recognition of a Palestinian state", "A halt to exports of arms that could be used in Gaza", "The end of the Arrow 3 purchase"], answer: 1,
        explain: "The restriction was lifted on 24 November 2025, after a ceasefire." },
      sources: [
        { title: "Germany halts its military exports that Israel could use in Gaza", publisher: "WFAE / NPR", url: "https://www.wfae.org/2025-08-08/germany-halts-its-military-exports-that-israel-could-use-in-gaza", date: "2025-08-08" },
        { title: "Germany resumes arms exports to Israel", publisher: "Israel Hayom", url: "https://www.israelhayom.com/2025/11/17/ermany-resumes-arms-exports-israel-november/", date: "2025-11-17" },
        { title: "Germany's Merz meets Netanyahu under shadow of Israel's war on Gaza", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/12/7/germanys-merz-meets-netanyahu-under-shadow-of-israels-war-on-gaza", date: "2025-12-07" },
        { title: "Germany approves $930M arms exports to Israel", publisher: "Yeni Şafak / Anadolu", url: "https://en.yenisafak.com/world/germany-approves-930m-arms-exports-to-israel-3722689", date: "2026-09" }
      ]
    }
  ]
});
