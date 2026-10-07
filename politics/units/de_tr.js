/* ============================================================
   Relationship — Germany & Turkey 🇩🇪🇹🇷
   Allies in the First World War and a refuge for Germans
   fleeing Hitler; the guest workers who became three million
   German Turks; and a relationship of refugees, rallies,
   jailed journalists and warplanes.
   Research note and sources: tools/research/de_tr.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("de_tr", {
  id: "de_tr",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "de_tr-1", kind: "relation", asOf: "2026-09-30",
      title: "Kaiser, sultan and a genocide",
      dek: "Imperial Germany courted the Ottoman Empire and fought beside it in the First World War, when the Armenians were destroyed. Twenty years later, Atatürk's Turkey took in scholars fleeing Hitler.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_tr/de_tr-1-hero.webp",
          alt: "Illustration of an ornate railway station with a clock tower on the Istanbul waterfront, with a steam train and ferry boats.",
          caption: "Haydarpaşa station in Istanbul, built by German engineers, was the start of the Baghdad Railway.",
          credit: "Illustration — not a photograph",
          prompt: "An ornate stone railway station with a steep slate roof and turrets on a waterfront, a steam train at the platform, ferry boats on the water in front, early twentieth-century atmosphere, soft golden light, historical painting style, no flags, no legible text." },
        { type: "timeline", head: "An old partnership", items: [
          ["1898", "Kaiser Wilhelm II visits Constantinople and Jerusalem"],
          ["1903", "Construction of the Baghdad Railway begins"],
          ["Oct 1914", "The Ottoman Empire enters the war on Germany's side"],
          ["1915–16", "The Armenian genocide"],
          ["1933–45", "Hundreds of German exiles work in Turkey"],
          ["2 Jun 2016", "Bundestag recognises the Armenian genocide"]
        ] },
        { type: "section", head: "Railways and war", md:
          "In the late 19th century Kaiser Wilhelm II saw the Ottoman Empire as a partner against Britain and Russia. He visited Constantinople in 1889 and again in 1898, and German banks and engineers began the Baghdad Railway, meant to link Berlin to the Persian Gulf. German officers trained the Ottoman army. In October 1914 the Ottoman Empire entered the First World War on Germany's side, and German generals helped command its forces at Gallipoli and in the Middle East. The alliance ended in defeat in 1918 and the empire's collapse (see [[lesson:tr-9]])." },
        { type: "section", head: "The Armenian genocide", md:
          "During the war, the Ottoman government deported and massacred its Armenian population; historians estimate that up to a million or more died (see [[lesson:tr-10]]). German diplomats and officers reported the killings to Berlin, which did nothing to restrain its ally. On 2 June 2016 the Bundestag passed, with only one vote against, a resolution calling the killings genocide and acknowledging Germany's share of responsibility. Turkey, which rejects the term, recalled its ambassador and barred German MPs from visiting German troops at Turkey's Incirlik air base; Germany later moved them to Jordan." },
        { type: "section", head: "A refuge from Hitler", md:
          "After 1933 the relationship took a different turn. Atatürk's new republic wanted to modernise its universities, and it hired hundreds of German-speaking academics, many of them Jewish or political opponents of the Nazis, who had lost their jobs. They taught medicine, law and science at Istanbul University and in Ankara, and helped shape modern Turkish scholarship. Among them was the Social Democrat Ernst Reuter, who worked in Turkey's ministries and taught in Ankara before returning to become mayor of West Berlin during the 1948 Soviet blockade." },
        { type: "section", head: "Cold War allies", md:
          "After the Second World War the two became allies again, this time in NATO, which Turkey joined in 1952 and West Germany in 1955. West Germany became one of Turkey's biggest trading partners and sources of investment, and later its path to Europe: Turkey applied to join the European Community in 1987 and began formal EU membership talks in 2005, with German support that later cooled. Millions of German tourists now visit Turkey's beaches every year." },
        { type: "compare", head: "Two memories",
          left: { head: "German guilt", md:
            "Germany stood by its ally during the Armenian genocide and must say so honestly." },
          right: { head: "Turkish gratitude", md:
            "Turkey sheltered Germans fleeing Nazism when few others would; Turks resent being lectured on history." } },
        { type: "section", head: "Why it matters", md:
          "The genocide vote showed how history still shapes the relationship. Turkey is a NATO ally Germany needs, but Berlin is also expected to face its own past." }
      ],
      takeaways: [
        "Germany and the Ottoman Empire were allies in the First World War, when the Armenians were destroyed.",
        "In 2016 the Bundestag called it genocide; Turkey retaliated by blocking visits to Incirlik.",
        "After 1933 Turkey hired hundreds of German exiles, including Ernst Reuter."
      ],
      check: { q: "How did Turkey respond to the Bundestag's 2016 Armenian genocide resolution?",
        choices: ["It welcomed it", "It recalled its ambassador and barred German MPs from Incirlik", "It left NATO"], answer: 1,
        explain: "The dispute led Germany to move its troops from Incirlik to Jordan." },
      sources: [
        { title: "German Bundestag Recognizes Armenian Genocide", publisher: "The Armenian Weekly", url: "https://armenianweekly.com/2016/06/02/bundestag-recognizes-genocide/", date: "2016-06-02" },
        { title: "Turkey huffs and puffs at genocide vote, but it's business as usual with Germany", publisher: "Al-Monitor", url: "https://www.al-monitor.com/pulse/originals/2016/06/turkey-armenia-germany-armenian-genocide-bundestag.html", date: "2016-06" },
        { title: "German Jews in Exile in Turkey: 'Haymatloz' in Istanbul and Ankara", publisher: "Qantara.de", url: "https://en.qantara.de/content/german-jews-in-exile-in-turkey-haymatloz-in-istanbul-and-ankara", date: "n.d." },
        { title: "Ernst Reuter: Biography", publisher: "Ernst-Reuter-Gesellschaft", url: "https://ernst-reuter.org/en/biography/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "de_tr-2", kind: "relation", asOf: "2026-09-30",
      title: "Guests who stayed",
      dek: "Germany recruited Turkish workers in 1961 expecting them to go home. They stayed, and today about three million people of Turkish origin live in Germany, still debating what it means to belong.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_tr/de_tr-2-hero.webp",
          alt: "Illustration of a 1960s railway platform with young men carrying suitcases stepping off a train.",
          caption: "Many Turkish 'guest workers' arrived by train at Munich station in the 1960s.",
          credit: "Illustration — not a photograph",
          prompt: "A 1960s railway station platform with a long train, young men in suits and caps carrying suitcases stepping off, steam and a large station clock, muted colours, historical documentary painting style, faces not in close-up, no flags, no legible text." },
        { type: "timeline", head: "From guests to citizens", items: [
          ["30 Oct 1961", "West Germany and Turkey sign the recruitment agreement"],
          ["1973", "Recruitment ends after the oil crisis"],
          ["29 May 1993", "Neo-Nazi arson in Solingen kills five Turkish women and girls"],
          ["2000", "Children born in Germany can become citizens"],
          ["2000–07", "The neo-Nazi NSU murders eight men of Turkish origin"],
          ["26 Jun 2024", "Germany allows dual citizenship"]
        ] },
        { type: "section", head: "We asked for workers", md:
          "West Germany's post-war boom needed labour. On 30 October 1961, weeks after the Berlin Wall cut off workers from the East, it signed a recruitment agreement with Turkey, following similar deals with Italy, Spain and Greece. Hundreds of thousands of Turks came to work in car factories, mines and steelworks, first for two years at a time; industry soon pushed for longer stays. Recruitment ended in 1973 with the oil crisis, but many workers stayed and brought their families. As the Swiss writer Max Frisch put it, 'We called for workers, but people came.'" },
        { type: "section", head: "Hatred and belonging", md:
          "For decades Germany treated them as foreigners; until 2000 even their German-born children could not easily become citizens. Racism turned deadly after reunification. On the night of 29 May 1993, young neo-Nazis set fire to a house in Solingen, killing five women and girls of the Genç family. Between 2000 and 2007 a neo-Nazi cell, the NSU, murdered eight men of Turkish origin and a Greek man, while police wrongly suspected the victims' families and communities. Turkish Germans also became a success story, from footballers to MPs and the founders of the vaccine company BioNTech." },
        { type: "section", head: "Two passports", md:
          "Today about three million people in Germany have Turkish roots, the largest such community outside Turkey, and about half have German citizenship. For years Germany made most of them choose one passport. A new law in force from 26 June 2024 allows dual citizenship, which many Turkish Germans had long demanded. Questions of loyalty persist: in 2018 the footballer Mesut Özil quit the national team after being criticised for a photo with President Erdoğan, saying he was treated as German when Germany won and as an immigrant when it lost." },
        { type: "section", head: "In German politics", md:
          "Turkish Germans have risen high in German public life. Cem Özdemir, the son of guest workers, became leader of the Greens and in 2021 the first federal minister of Turkish origin. Dozens of MPs from all parties have Turkish roots. The döner kebab, popularised by Turkish migrants in Berlin, became one of Germany's favourite fast foods. At the same time many Turkish Germans say they still face discrimination in jobs and housing." },
        { type: "compare", head: "Integration debates",
          left: { head: "A success", md:
            "Millions of Turkish Germans work, vote and lead in German life. The problems lie in German racism." },
          right: { head: "A failure", md:
            "Too many live apart, look to Ankara for their politics and are poorly served by schools." } },
        { type: "section", head: "Why it matters", md:
          "The Turkish community ties the two countries together more closely than any treaty. It also makes Turkish politics a German domestic issue." }
      ],
      takeaways: [
        "West Germany recruited Turkish workers from 1961; many stayed after recruitment ended in 1973.",
        "Turkish Germans suffered racist violence, from Solingen in 1993 to the NSU murders.",
        "About three million people in Germany have Turkish roots; dual citizenship was allowed in 2024."
      ],
      check: { q: "What changed for Turkish Germans on 26 June 2024?",
        choices: ["They lost the right to vote", "Germany began allowing dual citizenship", "Recruitment of workers restarted"], answer: 1,
        explain: "The new citizenship law ended the rule that most had to give up Turkish citizenship to become German." },
      sources: [
        { title: "'We called for workers, but people came': 60th anniversary of the Recruitment Agreement with Turkey", publisher: "German Federal Foreign Office", url: "https://www.auswaertiges-amt.de/en/aussenpolitik/recruitment-agreement-2493370", date: "2021-10" },
        { title: "Arson Attack in Solingen (May 28-29, 1993)", publisher: "German History Intersections", url: "https://germanhistory-intersections.org/en/migration/ghis:image-182", date: "n.d." },
        { title: "Germany's Dual Citizenship Law Goes Into Effect at End of June 2024", publisher: "Arnall Golden Gregory", url: "https://www.agg.com/news-insights/publications/update-germanys-dual-citizenship-law-goes-into-effect-at-end-of-june-2024/", date: "2024-06" },
        { title: "Turkish Germans are finally finding their voice", publisher: "Prospect", url: "https://www.prospectmagazine.co.uk/world/37482/turkish-germans-are-finally-finding-their-voice", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "de_tr-3", kind: "relation", asOf: "2026-09-30",
      title: "Refugees, rallies and warplanes",
      dek: "Merkel's refugee deal made Turkey Europe's gatekeeper, and Erdoğan then accused Germany of 'Nazi practices'. Under Friedrich Merz, Berlin has turned pragmatic, approving the sale of Eurofighter jets.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_tr/de_tr-3-hero.webp",
          alt: "Illustration of a grey fighter jet taking off from a runway with mountains in the background.",
          caption: "Germany lifted its veto in 2025, letting Turkey buy Eurofighter Typhoons.",
          credit: "Illustration — not a photograph",
          prompt: "A sleek grey twin-engine delta-wing fighter jet taking off from a runway with its landing gear up, heat shimmer behind it, dry brown mountains in the background, clear blue sky, dynamic documentary style, no markings, no flags, no legible text." },
        { type: "timeline", head: "Ups and downs", items: [
          ["18 Mar 2016", "EU–Turkey refugee deal, shaped by Merkel"],
          ["Mar 2017", "Erdoğan accuses Germany of 'Nazi practices'"],
          ["2017–18", "Journalist Deniz Yücel held a year without trial"],
          ["May 2023", "67% of Turkish voters in Germany back Erdoğan"],
          ["Jun 2025", "Germany approves the Eurofighter sale"],
          ["30 Oct 2025", "Merz in Ankara; clash over Gaza"]
        ] },
        { type: "section", head: "The refugee deal", md:
          "In 2015 about a million asylum seekers reached Germany, most via Turkey and Greece (see [[lesson:de-12]]). Angela Merkel negotiated with Turkey's prime minister a deal, agreed by the EU on 18 March 2016: Turkey would take back migrants who crossed illegally to the Greek islands, and in return the EU would pay €6 billion for the Syrian refugees in Turkey, resettle some of them in Europe, and speed up talks on visa-free travel and EU membership. Arrivals fell sharply. Critics said the deal made Europe dependent on Erdoğan, who has threatened to 'open the gates' when angry." },
        { type: "section", head: "Rallies and prisoners", md:
          "Relations then collapsed. After the failed coup of July 2016 (see [[lesson:tr-11]]), Turkey arrested tens of thousands, including German citizens, among them Deniz Yücel, a correspondent for Die Welt, who was held for a year from February 2017 before being released without conviction. When German towns barred Turkish ministers from campaigning at rallies for Erdoğan's 2017 referendum, Erdoğan said the practices were 'no different than the Nazi practices of the past'; Merkel called the comparison unacceptable. In the 2023 runoff, about 67% of Turkish voters in Germany backed Erdoğan, far more than in Turkey itself, prompting a new debate about integration." },
        { type: "section", head: "Merz's pragmatism", md:
          "Friedrich Merz (see [[lesson:de-4]]) sees Turkey as vital to NATO's defence against Russia and to controlling migration. In June 2025 his government lifted Germany's veto on the sale of Eurofighter Typhoon jets, built by a British, German, Italian and Spanish consortium; Turkey signed a deal with Britain in October 2025. On 30 October 2025 Merz visited Ankara. The two leaders sparred in public: Erdoğan accused Germany of ignoring Israel's 'genocide' in Gaza, and Merz defended Israel's right to self-defence and raised concerns about the jailing of Istanbul's mayor, Ekrem İmamoğlu (see [[lesson:tr-5]]). But both stressed trade, defence and deporting failed asylum seekers." },
        { type: "section", head: "Exiles and the PKK", md:
          "Turkey also accuses Germany of sheltering its enemies. Germany banned the Kurdish militant PKK in 1993 but hosts many Kurdish activists, and after 2016 it gave asylum to thousands of Turks accused by Ankara of links to the Gülen movement, which Turkey blames for the coup attempt. German authorities in turn have investigated Turkish intelligence for spying on critics in Germany. Each side sees the other as too soft on people it considers dangerous." },
        { type: "compare", head: "How to deal with Erdoğan",
          left: { head: "Pragmatists", md:
            "Turkey guards NATO's southeast and Europe's borders. Germany must work with it despite differences." },
          right: { head: "Critics", md:
            "Selling jets and paying for refugees rewards an increasingly authoritarian leader." } },
        { type: "section", head: "Why it matters", md:
          "Germany is Turkey's biggest trading partner in Europe, and Turkey holds keys to European security and migration. Their relationship shapes the EU's whole approach to Ankara." }
      ],
      takeaways: [
        "The 2016 EU–Turkey deal, shaped by Merkel, paid Turkey €6 billion to host refugees.",
        "In 2017 Erdoğan accused Germany of 'Nazi practices', and a German journalist was jailed for a year.",
        "Merz approved the Eurofighter sale in 2025 and visited Ankara, where he clashed with Erdoğan over Gaza."
      ],
      check: { q: "What did Germany approve in June 2025?",
        choices: ["Turkey's EU membership", "The sale of Eurofighter Typhoon jets to Turkey", "A new refugee deal"], answer: 1,
        explain: "Merz's government lifted the veto; Turkey signed a deal with Britain for the jets in October 2025." },
      sources: [
        { title: "The EU-Turkey Deal, Five Years On", publisher: "Migration Policy Institute", url: "https://www.migrationpolicy.org/article/eu-turkey-deal-five-years-on", date: "2021" },
        { title: "Turkey's Erdogan accuses Germany of 'Nazi practices'", publisher: "France 24", url: "https://www.france24.com/en/20170305-turkey-erdogan-accuses-germany-nazi-practices-diplomatic-rift", date: "2017-03-05" },
        { title: "Turkish support in Germany for Erdogan fuels integration debate", publisher: "France 24 (AFP)", url: "https://www.france24.com/en/live-news/20230601-turkish-support-in-germany-for-erdogan-fuels-integration-debate", date: "2023-06-01" },
        { title: "Germany Finally Approves Export of Eurofighter Typhoon Jets to Türkiye", publisher: "Overt Defense", url: "https://www.overtdefense.com/2025/07/03/germany-finally-approves-export-of-eurofighter-typhoon-jets-to-turkiye/", date: "2025-07-03" },
        { title: "Merz criticizes Turkish judiciary, clashes with Erdoğan over Gaza during Ankara visit", publisher: "Turkish Minute", url: "https://www.turkishminute.com/2025/10/30/merz-criticizes-turkish-judiciary-clashes-with-erdogan-over-gaza-during-ankara-visit/", date: "2025-10-30" }
      ]
    }
  ]
});
