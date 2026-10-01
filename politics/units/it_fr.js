/* ============================================================
   Relationship — Italy & France 🇮🇹🇫🇷
   'Latin sisters' who helped make each other and quarrel like
   siblings: history from Napoleon III to Mussolini, recurring
   fights over migrants and ambassadors, and the Quirinal Treaty
   binding their economies and armies. Mediterranean migration
   is in it-12.
   Research note and sources: tools/research/it_fr.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("it_fr", {
  id: "it_fr",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "it_fr-1", kind: "relation", asOf: "2026-09-30",
      title: "Latin sisters",
      dek: "France helped create Italy, and took Nice and Savoy as its price. Mussolini attacked France as it fell to Hitler. After 1945 the two helped found the European Union together.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it_fr/it_fr-1-hero.webp",
          alt: "Illustration of a Mediterranean seaside town with pastel houses and a harbour at the foot of mountains, on the French–Italian coast.",
          caption: "Nice, which passed from the Kingdom of Sardinia to France in 1860, sits a short drive from the Italian border.",
          credit: "Illustration — not a photograph",
          prompt: "A Mediterranean seaside town with pastel ochre and pink houses stacked around a small harbour at the foot of green mountains, fishing boats, turquoise sea, warm afternoon light, charming and historic, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Shared history", items: [
          ["1796–1814", "Napoleon conquers and reorganises Italy"],
          ["1859", "France helps Piedmont defeat Austria"],
          ["1860", "Nice and Savoy transferred to France"],
          ["10 Jun 1940", "Mussolini declares war on a collapsing France"],
          ["1957", "Both found the European Economic Community"],
          ["2021", "Quirinal Treaty signed"]
        ] },
        { type: "section", head: "Midwife of Italy", md:
          "Napoleon's conquests at the turn of the 19th century swept away old Italian states and spread ideas of nationhood that fed the Risorgimento, Italy's unification (see [[lesson:it-9]]). In 1859 Emperor Napoleon III sent French armies to help the Kingdom of Piedmont-Sardinia defeat Austria at Magenta and Solferino. France's price, agreed in 1860, was the transfer of Savoy and the county of Nice, birthplace of the Italian hero Giuseppe Garibaldi, who never forgave it. French troops then protected the pope in Rome until 1870, delaying Italy's capture of its capital." },
        { type: "section", head: "Rivals and enemies", md:
          "In 1881 France seized Tunisia, which Italy had coveted, pushing Rome into an alliance with Germany and Austria. The two ended up on the same side in the First World War, but Benito Mussolini's Fascist Italy (see [[lesson:it-10]]) claimed Nice, Corsica and Tunisia. On 10 June 1940, as German armies overran France, Mussolini declared war on it; President Franklin Roosevelt called it a stab in the back. Italy occupied a slice of south-eastern France until 1943." },
        { type: "section", head: "Founding Europe", md:
          "After 1945 the two became founding members of the European Coal and Steel Community in 1951 and, with the Treaty of Rome in 1957, the European Economic Community. Italy's Alcide De Gasperi and France's Robert Schuman are counted among the EU's founding fathers. Both joined NATO in 1949 and the euro in 1999. Millions of Italians emigrated to France in the 19th and 20th centuries; today their descendants, from actors to politicians, are part of French life." },
        { type: "section", head: "Family resemblance", md:
          "The two countries share much: Catholic traditions, a Latin language family, a love of food and fashion rivalry between Paris and Milan. Tourists cross the border by the million each year, and the Riviera runs continuously from Cannes to San Remo. Their resemblance also breeds comparison and competition, from football to wine. Corsica, which France bought from Genoa in 1768, a year before Napoleon was born there, still speaks a language close to Italian." },
        { type: "compare", head: "Two views of the relationship",
          left: { head: "Italian", md:
            "France often treats Italy as a junior partner and pursues its own interests in Libya, business and migration without consulting Rome." },
          right: { head: "French", md:
            "Italy's governments change often and swing between warmth and populist attacks on France, making it an unpredictable partner." } },
        { type: "section", head: "Why it matters", md:
          "France and Italy are the EU's second- and third-largest economies. When they align on budgets, defence or migration they can shape Europe's direction; when they quarrel, as they often do (see [[lesson:it_fr-2]]), they weaken it, and leave Germany and others to set the agenda." }
      ],
      takeaways: [
        "France helped unify Italy in 1859 and took Nice and Savoy in return.",
        "Mussolini declared war on France in June 1940 as it fell to Germany.",
        "After 1945 both helped found what became the European Union."
      ],
      check: { q: "What did France receive in 1860 for helping Piedmont against Austria?",
        choices: ["Corsica", "Savoy and Nice", "Tunisia"], answer: 1,
        explain: "Nice and Savoy were transferred to France, to the lasting anger of Garibaldi, who was born in Nice." },
      sources: [
        { title: "Risorgimento", publisher: "Britannica", url: "https://www.britannica.com/event/Risorgimento", date: "n.d." },
        { title: "Quirinal Treaty", publisher: "Istituto Affari Internazionali", url: "https://www.iai.it/en/publications/c25/italy-france-treaty", date: "n.d." },
        { title: "Italy and France pledge EU unity in landmark Rome summit", publisher: "Decode39", url: "https://decode39.com/10947/italy-and-france-pledge-eu-unity-in-landmark-rome-summit/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "it_fr-2", kind: "relation", asOf: "2026-09-30",
      title: "Migrants, ships and envoys",
      dek: "Italy wants France to share the burden of Mediterranean migrants; France checks its border at Ventimiglia. The quarrels have led to a recalled ambassador, a ship turned away and leaders trading insults.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it_fr/it_fr-2-hero.webp",
          alt: "Illustration of a coastal road border crossing between two countries along cliffs above the sea, with police vans and a small group of people walking.",
          caption: "France has checked the border at Ventimiglia since 2015, turning back migrants arriving from Italy.",
          credit: "Illustration — not a photograph",
          prompt: "A coastal road border crossing along steep cliffs above a blue sea, a few police vans parked by a checkpoint, a small group of people with backpacks walking seen from far behind, bright Mediterranean light, tense and quiet, no flags, no legible text." },
        { type: "timeline", head: "Flashpoints", items: [
          ["2011", "Rows over Tunisian migrants and the war in Libya"],
          ["2015", "France reintroduces checks at Ventimiglia"],
          ["Feb 2019", "France recalls its ambassador to Rome"],
          ["Nov 2022", "Ocean Viking crisis; France freezes a relocation plan"],
          ["Feb 2026", "Macron and Meloni clash over a killing in Lyon"]
        ] },
        { type: "section", head: "Who takes the migrants?", md:
          "Most migrants crossing the Mediterranean land in Italy (see [[lesson:it-12]]), but many want to go on to France or further north. EU rules generally make the country of arrival responsible for asylum claims. Italy has long demanded that others share the load; France, since 2015, has checked trains and roads at the border town of Ventimiglia and returned thousands of people to Italy. Each side accuses the other of pushing the problem across the border. Meloni's deal with Albania, under which some migrants rescued at sea are taken to centres there, has been watched closely in Paris and other capitals." },
        { type: "section", head: "Envoys and ships", md:
          "In February 2019 Italy's populist deputy prime minister, Luigi Di Maio, met leaders of France's anti-government 'yellow vest' protest movement. After months of insults from Rome, France recalled its ambassador, the first such withdrawal since the Second World War. In November 2022, weeks after Giorgia Meloni took office, Italy refused to let the rescue ship Ocean Viking, carrying 234 people, dock. France let it land at Toulon, the first time it had accepted such a vessel, but called Italy's refusal 'incomprehensible' and froze a plan to take in 3,500 asylum seekers from Italy." },
        { type: "section", head: "Insults in 2026", md:
          "In February 2026 a 23-year-old French far-right activist, Quentin Deranque, was beaten to death after clashes with far-left militants in Lyon. Meloni called the killing 'a wound for all of Europe'. Macron, visiting India, replied that nationalists who dislike interference at home were always the first to comment on other countries; Meloni said he had misunderstood her. The spat showed how ideology divides the centrist Macron from Meloni, who leads Italy's right and is close to Donald Trump." },
        { type: "section", head: "Libya", md:
          "The two have also competed in Libya, Italy's former colony and a key source of oil, gas and migrants. In the civil war after 2011, Italy backed the UN-recognised government in Tripoli while France was accused of favouring the eastern commander Khalifa Haftar. Italian energy company Eni and France's TotalEnergies compete for Libyan fields." },
        { type: "compare", head: "Two views of the migration row",
          left: { head: "Rome", md:
            "Italy is Europe's front door. France lectures Italy on humanity while sending migrants back across the border." },
          right: { head: "Paris", md:
            "Italy must respect maritime law and EU rules. Refusing rescue ships puts lives at risk and shifts the burden to others." } },
        { type: "section", head: "Why it matters", md:
          "Migration is one of the most divisive issues in European politics. France and Italy, as the countries most directly concerned in the western Mediterranean, need to cooperate for any EU system to work." }
      ],
      takeaways: [
        "France checks its border at Ventimiglia and returns migrants to Italy; Italy wants burden-sharing.",
        "France recalled its ambassador in 2019, and in 2022 the Ocean Viking crisis froze a relocation plan.",
        "Macron and Meloni clashed publicly in February 2026 over a killing in Lyon."
      ],
      check: { q: "What happened in the Ocean Viking crisis of November 2022?",
        choices: ["Italy seized a French ship", "Italy refused to let a rescue ship dock, and France took it in but froze a relocation deal", "France closed the Alps"], answer: 1,
        explain: "France let the ship land at Toulon, a first, but suspended a plan to take 3,500 asylum seekers from Italy." },
      sources: [
        { title: "France recalls Italy envoy amid war of words over yellow vests", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2019/2/7/france-recalls-italy-envoy-amid-war-of-words-over-yellow-vests", date: "2019-02-07" },
        { title: "France accepts rescue ship Ocean Viking as dispute with Italy escalates", publisher: "France 24", url: "https://www.france24.com/en/europe/20221111-migrant-rescue-ship-ocean-viking-set-to-dock-in-france-after-italian-refusal", date: "2022-11-11" },
        { title: "Macron and Meloni clash over killing of French far-right activist in Lyon", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/19/macron-and-meloni-clash-over-killing-of-french-far-right-activist-in-lyon", date: "2026-02-19" },
        { title: "French-Italian tensions come to a head over migration, energy competition", publisher: "The Arab Weekly", url: "https://thearabweekly.com/french-italian-tensions-come-head-over-migration-energy-competition", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "it_fr-3", kind: "relation", asOf: "2026-09-30",
      title: "The Quirinal Treaty and big business",
      dek: "In 2021 the two signed a friendship treaty modelled on France's with Germany. Their companies have merged into giants like Stellantis, and in June 2026 they agreed a five-year defence roadmap.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/it_fr/it_fr-3-hero.webp",
          alt: "Illustration of a railway tunnel entrance being dug into a steep Alpine mountainside, with cranes and construction equipment.",
          caption: "A 57.5 km rail tunnel under the Alps is being built between Lyon and Turin.",
          credit: "Illustration — not a photograph",
          prompt: "A large railway tunnel entrance being dug into a steep forested Alpine mountainside, cranes, concrete segments and construction machinery, snowy peaks above, clear morning light, industrial and ambitious, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Ties that bind", items: [
          ["2018", "Essilor and Luxottica merge"],
          ["2021", "Fiat Chrysler and PSA merge to form Stellantis"],
          ["26 Nov 2021", "Quirinal Treaty signed by Macron and Draghi"],
          ["2023", "The treaty enters into force"],
          ["25 Jun 2026", "36th Franco-Italian summit adopts a 2026–31 defence roadmap"]
        ] },
        { type: "section", head: "A treaty of their own", md:
          "Italy had long envied the Franco-German Élysée Treaty (see [[lesson:fr_de-1]]). On 26 November 2021 Emmanuel Macron and Italy's then prime minister, Mario Draghi, signed the Quirinal Treaty in Rome, named after the Italian presidential palace. It commits the two to regular summits, consultation before major EU meetings, and cooperation on defence, migration, space, culture and youth. A French minister now attends an Italian cabinet meeting once a quarter, and vice versa." },
        { type: "section", head: "Merged companies", md:
          "Business ties have deepened, not always happily. The glasses makers Essilor and Luxottica merged in 2018. In 2021 Fiat Chrysler and France's PSA combined to form Stellantis, the world's fourth-largest carmaker, with brands from Fiat and Alfa Romeo to Peugeot and Citroën; Italian unions complain that production has shifted away from Italy. Deals have also collapsed: the Italian shipbuilder Fincantieri's takeover of France's Chantiers de l'Atlantique was abandoned in 2021, after France had nationalised the yard in 2017 to keep control." },
        { type: "section", head: "Media wars", md:
          "Some battles were bitter. From 2015 the French media group Vivendi built large stakes in Telecom Italia and in Mediaset, the broadcaster owned by Silvio Berlusconi's family, leading to years of lawsuits and Italian complaints of a French raid on national champions. Rome used its 'golden power' rules, which let the government block or restrict foreign control of strategic firms, to limit Vivendi's say over the telecoms network." },
        { type: "section", head: "Defence roadmap", md:
          "Despite frequent political quarrels (see [[lesson:it_fr-2]]), cooperation in defence has grown. The two already jointly build the SAMP/T air-defence system and frigates. At their 36th summit, held in Antibes on 25 June 2026, Macron and Meloni reaffirmed the Quirinal Treaty, and their defence ministers signed a 2026–2031 roadmap for joint work on space, maritime security, air and missile defence and robotic land systems." },
        { type: "section", head: "Under the Alps", md:
          "The biggest joint project is a new railway tunnel. The Lyon–Turin line includes a 57.5-kilometre base tunnel under the Alps, meant to shift freight from lorries to trains. It has faced decades of protest in Italy's Susa valley and repeated delays, with completion now expected in the 2030s." },
        { type: "compare", head: "Partners or rivals in business?",
          left: { head: "Partners", md:
            "Mergers create European champions able to compete with American and Chinese giants." },
          right: { head: "Rivals", md:
            "Each government protects its own firms; Italians fear French takeovers of their companies, and French officials are wary of the reverse." } },
        { type: "section", head: "Why it matters", md:
          "Behind the headline quarrels, France and Italy are deeply integrated economies and increasingly close defence partners. The Quirinal Treaty is an attempt to make that partnership survive changes of government in both capitals." }
      ],
      takeaways: [
        "The 2021 Quirinal Treaty, modelled on the Élysée Treaty, commits France and Italy to regular consultation.",
        "Cross-border mergers created giants like Stellantis and EssilorLuxottica, while other deals collapsed.",
        "In June 2026 the two agreed a 2026–31 defence roadmap, despite their political disputes."
      ],
      check: { q: "What is the Quirinal Treaty?",
        choices: ["A migration deal with Libya", "A 2021 Franco-Italian friendship and cooperation treaty", "The treaty that founded the EU"], answer: 1,
        explain: "Signed by Macron and Draghi in 2021, it institutionalises regular summits and cooperation, like the Franco-German Élysée Treaty." },
      sources: [
        { title: "Franco-Italian joint statement", publisher: "Élysée", url: "https://www.elysee.fr/en/emmanuel-macron/2026/06/25/franco-italian-joint-statement", date: "2026-06-25" },
        { title: "Macron and Meloni strengthen strategic ties at Franco-Italian summit", publisher: "Decode39", url: "https://decode39.com/15404/macron-and-meloni-strengthen-strategic-ties-at-franco-italian-summit/", date: "2026-06" },
        { title: "The Italy–France Treaty", publisher: "Istituto Affari Internazionali", url: "https://www.iai.it/en/publications/c25/italy-france-treaty", date: "n.d." }
      ]
    }
  ]
});
