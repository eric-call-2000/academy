/* ============================================================
   Relationship — Italy & Russia 🇮🇹🇷🇺
   Italian architects in the Kremlin, the Don campaign, the PCI,
   Mattei's oil deals and the Fiat plant at Togliatti; Berlusconi
   and Putin, gas and the Lega; and sanctions, seized firms,
   insults on Russian TV and Meloni's call for an envoy.
   Research note and sources: tools/research/it_ru.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("it_ru", {
  id: "it_ru",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "it_ru-1", kind: "relation", asOf: "2026-10-12",
      title: "Architects, the Don and Fiat",
      dek: "Italian builders shaped the Kremlin and St Petersburg. In the 20th century Italy fought the Soviet Union, then became its favourite Western partner: home of the West's biggest Communist party and of the Fiat car it copied.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it_ru/it_ru-1-hero.webp",
          alt: "Illustration of rows of small boxy sedans rolling out of a long factory hall in snow.",
          caption: "The Zhiguli, or Lada, was based on the Fiat 124 and built in Togliatti.",
          credit: "Illustration — not a photograph",
          prompt: "Rows of small boxy 1970s sedans in muted colours parked outside a huge long Soviet factory hall in light snow, birch trees and a tall chimney, winter afternoon light, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From the Kremlin to Togliatti", items: [
          ["1475–79", "Aristotele Fioravanti builds the Kremlin's Dormition Cathedral"],
          ["1941–43", "Italian troops fight alongside Germany in the USSR"],
          ["Winter 1942–43", "The Italian army is destroyed on the Don"],
          ["1958", "ENI's Enrico Mattei begins buying Soviet oil"],
          ["1966", "Fiat agrees to build a car plant on the Volga"],
          ["1970", "The first Zhiguli rolls off the line at Togliatti"]
        ] },
        { type: "section", head: "Italian builders", md:
          "In the 1470s Ivan III of Moscow invited the Bolognese engineer Aristotele Fioravanti to build the Cathedral of the Dormition in the Kremlin, where tsars were later crowned. Other Italians built the Kremlin's red-brick walls and towers, whose swallow-tail battlements recall castles in Milan and Verona. In the 18th century Italian architects such as Bartolomeo Rastrelli and Giacomo Quarenghi designed palaces in St Petersburg, including the Winter Palace. Russian writers and painters, from Gogol to Tchaikovsky, lived and worked in Italy." },
        { type: "section", head: "War on the Don", md:
          "In 1941 Mussolini sent troops to join Hitler's invasion of the Soviet Union, and by 1942 more than 200,000 Italians were on the Eastern Front. In the Soviet winter offensive of December 1942 and January 1943 the Italian army on the Don river was overwhelmed. Tens of thousands died in battle, in a desperate retreat through the snow, or in Soviet prison camps. The Alpini mountain troops' retreat became one of Italy's most painful war memories." },
        { type: "section", head: "Communists and capitalists", md:
          "After the war the Italian Communist Party, the PCI, became the largest in the West, regularly winning a quarter to a third of the vote, though never national power. It took money from Moscow for years, but under Enrico Berlinguer in the 1970s it criticised the Soviet invasion of Czechoslovakia and moved towards 'Eurocommunism'. Meanwhile Italian business went east. In 1958 Enrico Mattei, head of the state energy company ENI, began buying cheap Soviet oil, defying the big Western oil firms." },
        { type: "section", head: "Togliatti", md:
          "In 1966 Fiat agreed to build a huge car factory on the Volga for the Soviet government. The city chosen was renamed Togliatti, after the PCI leader Palmiro Togliatti, who had died in 1964. From 1970 the plant produced the Zhiguli, a toughened version of the Fiat 124, sold abroad as the Lada. Millions of Soviet families got their first car from it, and the plant, AvtoVAZ, still makes Ladas today." },
        { type: "section", head: "Gas", md:
          "In the late 1960s ENI also signed a deal to import Soviet natural gas through new pipelines across Austria, beginning a dependence that would grow for half a century." },
        { type: "compare", head: "A Cold War exception",
          left: { head: "Italy", md:
            "A NATO founder with US bases, but with a big Communist party and businesses eager to trade east." },
          right: { head: "Soviet Union", md:
            "Saw Italy as its most open Western partner, a source of technology and an audience for its politics." } },
        { type: "section", head: "Why it matters", md:
          "Italy and Russia built a relationship that crossed the Iron Curtain. That legacy of trade, culture and political sympathy helps explain why many Italians still feel a softer attitude towards Russia than other Europeans." }
      ],
      takeaways: [
        "Italian architects built the Kremlin's Dormition Cathedral and many St Petersburg palaces.",
        "Italy's army on the Don was destroyed in the winter of 1942–43.",
        "Fiat built the AvtoVAZ plant at Togliatti, whose Zhiguli was based on the Fiat 124."
      ],
      check: { q: "Who was the Soviet car city of Togliatti named after?",
        choices: ["An Italian car designer", "The Italian Communist leader Palmiro Togliatti", "A Russian tsar"], answer: 1,
        explain: "Fiat built the plant there under a 1966 agreement." },
      sources: [
        { title: "Italy–Russia relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Italy%E2%80%93Russia_relations", date: "n.d." },
        { title: "AvtoVAZ", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/AvtoVAZ", date: "n.d." },
        { title: "Italian Communist Party", publisher: "Britannica", url: "https://www.britannica.com/topic/Italian-Communist-Party", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "it_ru-2", kind: "relation", asOf: "2026-10-12",
      title: "Berlusconi, Putin and gas",
      dek: "In the 2000s Silvio Berlusconi became one of Vladimir Putin's closest friends in the West. Italy relied on Russian gas, and parts of its right admired Putin.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it_ru/it_ru-2-hero.webp",
          alt: "Illustration of a white villa above a turquoise Mediterranean cove with pines and a small jetty.",
          caption: "Putin was a guest at Berlusconi's villa in Sardinia.",
          credit: "Illustration — not a photograph",
          prompt: "A large white villa with terraces among umbrella pines on a rocky hillside above a turquoise Mediterranean cove, a small jetty and a motor yacht, bright summer light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A close friendship", items: [
          ["May 2002", "NATO–Russia Council founded at Pratica di Mare, near Rome"],
          ["2007", "ENI and Gazprom agree to build South Stream"],
          ["2014", "Russia annexes Crimea; EU sanctions follow"],
          ["2019", "Recording of Lega envoy's talks in Moscow's Metropol hotel"],
          ["Mar 2020", "Russian military team sent to Bergamo during COVID"],
          ["2021", "About 40% of Italy's gas comes from Russia"]
        ] },
        { type: "section", head: "Friends", md:
          "Silvio Berlusconi, prime minister for most of the 2000s, struck up a personal friendship with Vladimir Putin. They holidayed together at Berlusconi's villa in Sardinia and at Putin's dacha, and exchanged birthday gifts. In May 2002 Berlusconi hosted the summit at Pratica di Mare air base that created the NATO–Russia Council, which he called the end of the Cold War. He defended Putin over Chechnya and later over Georgia, and remained friendly with him even after leaving office." },
        { type: "section", head: "Gas", md:
          "Italy has little gas of its own and burns a great deal of it for electricity and heating. ENI was one of Gazprom's oldest partners, and the two planned South Stream, a pipeline under the Black Sea to southern Europe, until Russia dropped it in 2014. By 2021 about 40 per cent of Italy's imported gas came from Russia. Italian companies, from banks such as UniCredit and Intesa Sanpaolo to fashion and food brands, did big business in Russia, and Italy was among its top European trading partners." },
        { type: "section", head: "After Crimea", md:
          "When Russia annexed Crimea in 2014, Italy joined EU [[sanctions]], but its governments argued for dialogue and complained of the cost to Italian exporters, especially farmers hit by Russia's ban on European food. Matteo Renzi's government pushed for the sanctions to be reviewed each year rather than extended automatically. Italian ministers kept visiting Moscow, and Putin was received in Rome and at the Vatican as late as 2019. Italy also kept buying ever more Russian gas, even as other European governments warned about dependence on a hostile supplier." },
        { type: "section", head: "Admirers", md:
          "Matteo Salvini, leader of the Lega, wore a T-shirt with Putin's face in Red Square and his party signed a cooperation deal with Putin's United Russia in 2017. In 2019 a recording emerged of a Lega envoy meeting Russians in Moscow's Metropol hotel to discuss a secret oil deal that could fund the party; prosecutors investigated, but the deal was never shown to have happened. In March 2020, as COVID hit northern Italy, Russia sent military doctors and equipment to Bergamo under the slogan 'From Russia with love', which some Italian officials suspected was partly an intelligence and propaganda operation." },
        { type: "compare", head: "Two Italian instincts",
          left: { head: "Atlanticist", md:
            "Loyal to NATO and the EU, wary of Russian influence and propaganda." },
          right: { head: "Russia-friendly", md:
            "Business ties, cheap gas, and a cultural and political sympathy on parts of left and right." } },
        { type: "section", head: "Why it matters", md:
          "Before 2022 Italy was one of Russia's friendliest partners in the West. That made Rome's sharp turn after the full-scale invasion of Ukraine all the more significant." }
      ],
      takeaways: [
        "Berlusconi and Putin were close friends; Berlusconi hosted the 2002 summit founding the NATO–Russia Council.",
        "About 40% of Italy's gas imports came from Russia in 2021.",
        "Salvini's Lega signed a deal with Putin's party in 2017 and was embarrassed by the 2019 Metropol recording."
      ],
      check: { q: "Roughly what share of Italy's gas came from Russia in 2021?",
        choices: ["About 5%", "About 40%", "About 90%"], answer: 1,
        explain: "Italy cut that dependence sharply after 2022, turning to Algeria and LNG." },
      sources: [
        { title: "Italy–Russia relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Italy%E2%80%93Russia_relations", date: "n.d." },
        { title: "Metropol affair", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Metropol_affair", date: "n.d." },
        { title: "NATO–Russia Council", publisher: "NATO", url: "https://www.nato.int/cps/en/natohq/topics_50091.htm", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "it_ru-3", kind: "relation", asOf: "2026-10-12",
      title: "Sanctions, insults and an envoy",
      dek: "After Russia's 2022 invasion Italy cut its gas dependence and backed Ukraine. Moscow seized Italian assets and insulted its leaders, while Giorgia Meloni called for Europe to talk to Moscow directly.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it_ru/it_ru-3-hero.webp",
          alt: "Illustration of a gas tanker ship arriving at a floating terminal off a rocky Italian coast.",
          caption: "Italy replaced Russian gas with Algerian pipeline gas and LNG.",
          credit: "Illustration — not a photograph",
          prompt: "A large liquefied natural gas carrier with round tanks arriving at a floating regasification terminal off a rocky Italian coastline with a hill town, calm sea, soft evening light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Since 2022", items: [
          ["2022", "Draghi backs sanctions and signs gas deals with Algeria"],
          ["Oct 2022", "Meloni becomes prime minister"],
          ["2024", "Russia seizes Ariston's Russian arm and freezes UniCredit funds"],
          ["Feb 2025", "Moscow attacks President Mattarella over a speech"],
          ["Jan 2026", "Meloni calls for a European envoy to Moscow"],
          ["Apr 2026", "Italy summons Russia's ambassador over TV insults"]
        ] },
        { type: "section", head: "Draghi's turn", md:
          "When Russia launched its full-scale invasion of Ukraine in February 2022, Prime Minister Mario Draghi backed tough EU [[sanctions]], including freezing Russia's central bank reserves, and sent weapons to Kyiv. He and ENI moved fast to replace Russian gas, signing deals with Algeria, Egypt, Qatar and others. Algeria became Italy's largest gas supplier, and Italy installed floating terminals to receive liquefied natural gas. Russian pipeline gas fell to a small share within two years." },
        { type: "section", head: "Meloni", md:
          "Giorgia Meloni, who became prime minister in October 2022, surprised some by being firmly pro-Ukraine despite the past Russia sympathies of her coalition partners, Salvini's Lega and Berlusconi's Forza Italia. She visited Kyiv, kept sending military aid and hosted conferences on Ukraine's recovery. Salvini continued to criticise sanctions and what he called anti-Russian anxiety in Europe, and he has said hundreds of Italian firms still operate in Russia." },
        { type: "section", head: "Seized and frozen", md:
          "Moscow hit back at Italian business. In 2024 Russia put the Russian subsidiary of the boilermaker Ariston under state management, and a court in St Petersburg froze about 463 million euros of assets belonging to UniCredit's Russian bank. Foreign Minister Antonio Tajani set up a working group with firms still in Russia. On the EU's frozen Russian assets, Tajani has backed keeping them frozen but questioned the legal basis for using them to fund Ukraine." },
        { type: "section", head: "Insults", md:
          "Russian officials have targeted Italian leaders. In February 2025 the foreign ministry spokeswoman Maria Zakharova attacked President Sergio Mattarella after he compared Russia's war to the Third Reich's expansion, and Rome protested. In April 2026 the Kremlin-friendly TV host Vladimir Solovyov insulted Meloni on air, and Italy summoned Russia's ambassador; Tajani called the remarks extremely serious and unacceptable." },
        { type: "section", head: "A channel to Moscow", md:
          "At her January 2026 press conference Meloni argued that Europe needed its own political channel to Moscow and should appoint a special envoy to talk to Russia directly, rather than leave negotiations to the United States. Critics in Kyiv and in eastern Europe worried that such a channel could weaken the united front against Moscow, but Meloni insisted it would sit alongside, not replace, support for Ukraine. Her government has kept all EU sanctions in place and voted for each new package." },
        { type: "compare", head: "Italy's two tracks",
          left: { head: "Pressure", md:
            "Sanctions, arms for Ukraine and an end to Russian gas." },
          right: { head: "Talks", md:
            "A call for a European envoy, and firms and politicians who want trade to return." } },
        { type: "section", head: "Why it matters", md:
          "Italy has moved from Russia's friendliest Western partner to a firm backer of Ukraine. But its divided politics mean Moscow still hopes Rome could be a soft spot in Europe's front." }
      ],
      takeaways: [
        "After 2022 Italy replaced Russian gas mainly with Algerian gas and LNG.",
        "Russia seized Ariston's subsidiary and froze UniCredit funds in 2024.",
        "Meloni called in January 2026 for a European envoy to Moscow; in April Italy protested TV insults against her."
      ],
      check: { q: "Which country became Italy's largest gas supplier after 2022?",
        choices: ["Norway", "Algeria", "The United States"], answer: 1,
        explain: "Draghi and ENI signed deals with Algeria to replace Russian pipeline gas." },
      sources: [
        { title: "Italy summons Russian ambassador over TV presenter's insults at PM Giorgia Meloni", publisher: "Euronews", url: "https://euronews.com/my-europe/2026/04/21/italy-summons-russian-ambassador-over-tv-presenters-insults-at-pm-giorgia-meloni", date: "2026-04-21" },
        { title: "PM Giorgia Meloni outlines Italy's foreign policy priorities in new year media address", publisher: "Brussels Morning", url: "https://brusselsmorning.com/pm-giorgia-meloni-outlines-italys-foreign-policy-priorities-in-new-year-media-address/89910/", date: "2026-01" },
        { title: "Tajani chairs Russia working table after UniCredit case", publisher: "Italian Ministry of Foreign Affairs", url: "https://www.esteri.it/it/sala_stampa/archivionotizie/comunicati/2024/05/tajani-presiede-tavolo-russia-dopo-caso-unicredit/", date: "2024-05" }
      ]
    }
  ]
});
