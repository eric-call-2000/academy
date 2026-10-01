/* ============================================================
   Relationship — United States & Italy 🇺🇸🇮🇹
   Four million emigrants, prejudice and the 1891 lynching;
   1948, the Marshall Plan, American bases and the Sigonella
   stand-off; and Meloni as Trump's European 'whisperer'.
   Italy's politics are in it-4 to it-8.
   Research note and sources: tools/research/us_it.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_it", {
  id: "us_it",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_it-1", kind: "relation", asOf: "2026-10-01",
      title: "Four million emigrants",
      dek: "Between 1880 and 1920 more than four million Italians emigrated to the United States. They met poverty, prejudice and violence before becoming part of the American mainstream.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_it/us_it-1-hero.webp",
          alt: "Illustration of an immigrant family with bundles on the deck of a steamship approaching a harbour with a statue.",
          caption: "Millions of Italians arrived in New York through Ellis Island.",
          credit: "AI illustration — not a photograph",
          prompt: "An immigrant family with bundles and trunks standing on the crowded deck of an early 1900s steamship approaching a harbour with a large statue and city skyline in the haze, historical documentary painting style, seen from behind, no faces, no flags, no legible text." },
        { type: "timeline", head: "A great migration", items: [
          ["1880–1920", "Over four million Italians emigrate to the US"],
          ["Mar 1891", "Eleven Italians lynched in New Orleans"],
          ["1924", "Immigration Act sharply cuts Italian arrivals"],
          ["1927", "Sacco and Vanzetti executed"],
          ["1941–43", "Italy at war with the US; Italian-Americans labelled 'enemy aliens'"],
          ["Jul 1943", "Allied landings in Sicily"]
        ] },
        { type: "section", head: "Leaving the south", md:
          "After Italy's unification (see [[lesson:it-9]]), the poor south stayed poor. Between 1880 and 1920 more than four million Italians, most of them peasants from Sicily, Calabria, Campania and Abruzzo, sailed for the United States; in the decade after 1900 alone over two million arrived. Many planned to earn money and go home, and many did. Those who stayed built 'Little Italies' in New York, Boston, Chicago and New Orleans, working on railways, in mines, factories and docks." },
        { type: "section", head: "Prejudice and violence", md:
          "Italians faced fierce discrimination: they were Catholic, poor, often illiterate, and many native-born Americans did not consider them fully 'white'. In March 1891, after a police chief was murdered in New Orleans, a mob broke into the jail and lynched eleven Italian men, one of the largest mass lynchings in American history. Italy briefly withdrew its ambassador. The 1924 Immigration Act slashed arrivals from southern Europe. In 1927 the anarchists Nicola Sacco and Bartolomeo Vanzetti were executed after a trial many saw as biased." },
        { type: "section", head: "Enemies in war", md:
          "When Mussolini's Italy declared war on the United States in December 1941 (see [[lesson:it-10]]), hundreds of thousands of Italian immigrants who were not citizens were labelled 'enemy aliens', and some were interned or barred from coastal areas. At the same time, hundreds of thousands of Italian-Americans served in the US forces. In July 1943 American and British troops landed in Sicily; Mussolini fell weeks later." },
        { type: "section", head: "Into the mainstream", md:
          "After the war Italian-Americans moved into the middle class and into politics, from New York's mayor Fiorello La Guardia earlier to governors, Supreme Court justices such as Antonin Scalia and Speaker Nancy Pelosi. Today around 16 million Americans report Italian ancestry. Columbus Day, created partly to honour Italian-Americans after the New Orleans lynching, has become contested because of Columbus's treatment of Native Americans." },
        { type: "section", head: "The Mafia image", md:
          "A small number of Italian immigrants brought or built criminal networks, and the American Mafia became notorious during Prohibition. Senate hearings in the 1950s and films such as The Godfather in 1972 fixed an image of Italian-Americans as gangsters in popular culture. Italian-American groups have long protested that the stereotype tars millions of law-abiding people, and in Italy itself the fight against the Mafia was led by Italians (see [[lesson:it-11]])." },
        { type: "compare", head: "The immigrant story",
          left: { head: "Then", md:
            "Poor, Catholic newcomers feared as criminals and anarchists, lynched and excluded." },
          right: { head: "Now", md:
            "One of America's largest and most successful ethnic groups." } },
        { type: "section", head: "Why it matters", md:
          "Family ties across the Atlantic help explain why Italy has been one of America's most reliably friendly allies, and why Italian-Americans are courted by both parties." }
      ],
      takeaways: [
        "More than four million Italians emigrated to the US between 1880 and 1920.",
        "They faced harsh prejudice; eleven Italians were lynched in New Orleans in 1891.",
        "Around 16 million Americans now report Italian ancestry."
      ],
      check: { q: "Roughly how many Italians emigrated to the US between 1880 and 1920?",
        choices: ["About 400,000", "More than four million", "About 40 million"], answer: 1,
        explain: "Over two million came in the decade after 1900 alone." },
      sources: [
        { title: "The Italian Immigrant Experience in America (1870-1920)", publisher: "Yale-New Haven Teachers Institute", url: "https://teachersinstitute.yale.edu/curriculum/units/1999/3/99.03.06/2", date: "1999" },
        { title: "The History of Italian Immigration to the U.S. and Its Relevance Today", publisher: "My Italian Family", url: "https://www.myitalianfamily.com/resources/history-italian-immigration-us-and-its-relevance-today", date: "n.d." },
        { title: "Anti-Italianism in America: A History of Prejudice and Resistance", publisher: "Italian for a While", url: "https://www.italianforawhile.com/blog-posts/anti-italianism-in-the-united-states-a-history-of-prejudice-and-resistance", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_it-2", kind: "relation", asOf: "2026-10-01",
      title: "1948, bases and Sigonella",
      dek: "Washington poured money into Italy to stop the communists winning in 1948, and American bases spread across the peninsula. But in 1985 Italian and American troops faced off on a Sicilian runway.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_it/us_it-2-hero.webp",
          alt: "Illustration of an airliner on a night runway surrounded by two rings of armed soldiers and vehicles.",
          caption: "At Sigonella in October 1985, Italian troops surrounded American special forces surrounding a plane.",
          credit: "AI illustration — not a photograph",
          prompt: "A white airliner parked on a dark runway at night under floodlights, surrounded by an inner ring of soldiers and an outer ring of other soldiers and military vehicles, Sicilian hills in the darkness, documentary painting style, no faces, no flags, no legible text." },
        { type: "timeline", head: "Cold War ally", items: [
          ["18 Apr 1948", "Christian Democrats win a decisive election"],
          ["1948–52", "Marshall Plan aid to Italy"],
          ["1949", "Italy is a founding member of NATO"],
          ["1950s", "US bases at Aviano, Vicenza and Naples"],
          ["Oct 1985", "The Sigonella crisis"],
          ["1998", "US jet cuts a cable car line at Cermis, killing 20"]
        ] },
        { type: "section", head: "The 1948 election", md:
          "After the war Italy had the largest Communist Party in the West. Washington feared it would win the first parliamentary election of the new republic, in April 1948. The United States sent food and Marshall Plan aid, threatened to cut it off if the left won, and the CIA secretly funded the Christian Democrats and other anti-communist parties; Italian-Americans were encouraged to write letters home urging relatives to vote against the communists. The Christian Democrats won 48.5% and an absolute majority, and led every Italian government for more than forty years (see [[lesson:it-3]])." },
        { type: "section", head: "Bases", md:
          "Italy became a founding member of NATO in 1949 and a key ally on the Mediterranean front. The US Sixth Fleet is based in Naples, the US Air Force flies from Aviano near the Alps, the Army's airborne brigade sits in Vicenza, and Naval Air Station Sigonella in Sicily became a hub for operations in the Mediterranean, Africa and the Middle East. American nuclear bombs are stored in Italy under NATO arrangements." },
        { type: "section", head: "Sigonella", md:
          "In October 1985 Palestinian militants hijacked the Italian cruise ship Achille Lauro and murdered a disabled American passenger, Leon Klinghoffer. When an Egyptian airliner tried to fly the hijackers to safety, US Navy fighters forced it to land at Sigonella. American special forces surrounded the plane to seize the hijackers, and Italian carabinieri and airmen surrounded the Americans. Prime Minister Bettino Craxi insisted that Italy had jurisdiction over a crime on an Italian ship. The Americans backed down, and Italy let the group's leader, Abu Abbas, leave the country, infuriating Washington." },
        { type: "section", head: "Cermis and other wounds", md:
          "Bases brought friction too. In February 1998 a US Marine jet flying too low cut the cable of a ski lift at Cermis in the Dolomites, killing 20 people. The crew were tried by an American court martial and acquitted of manslaughter, outraging Italians. In 2003 CIA officers kidnapped an Egyptian cleric in Milan; Italian courts later convicted more than twenty Americans in absentia, though none served time in Italy." },
        { type: "compare", head: "The Italian ally",
          left: { head: "Loyal", md:
            "NATO founder, host of major US bases, partner in Iraq, Afghanistan and Libya." },
          right: { head: "Proud", md:
            "Insists on its sovereignty, as at Sigonella and Cermis, and on its ties to the Arab world." } },
        { type: "section", head: "Why it matters", md:
          "Italy's place in the Mediterranean makes it a vital base for American power, which is why Washington has invested so heavily in Italian politics and has tolerated its occasional defiance." }
      ],
      takeaways: [
        "US aid and secret CIA funding helped the Christian Democrats defeat the communists in 1948.",
        "Italy hosts major US bases, including the Sixth Fleet in Naples and Sigonella in Sicily.",
        "In the 1985 Sigonella crisis Italian troops faced down US special forces over the Achille Lauro hijackers."
      ],
      check: { q: "What happened at Sigonella in October 1985?",
        choices: ["The US moved its fleet out of Italy", "Italian troops surrounded US special forces trying to seize the Achille Lauro hijackers", "Italy left NATO"], answer: 1,
        explain: "Craxi insisted Italy had jurisdiction; the Americans backed down." },
      sources: [
        { title: "1948 Italian general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/1948_Italian_general_election", date: "n.d." },
        { title: "The 18 April 1948 Italian election: Seventy years on", publisher: "LSE", url: "https://researchonline.lse.ac.uk/id/eprint/89524/1/europpblog-2018-04-18-the-18-april-1948-italian-election-seventy.pdf", date: "2018" },
        { title: "Crisis of Sigonella", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Crisis_of_Sigonella", date: "n.d." },
        { title: "The 1985 Sigonella Episode and the Limits of the United States-Italian Relationship", publisher: "The Army Lawyer", url: "https://tjaglcs.army.mil/Periodicals/The-Army-Lawyer/tal-2021-issue-1/Post/5721/No-1-The-1985-Sigonella-Episode-and-the-Limits-of-the-United-States-Italian-Relationship", date: "2021" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_it-3", kind: "relation", asOf: "2026-10-01",
      title: "The Trump whisperer",
      dek: "Giorgia Meloni was the only European leader at Trump's inauguration and pitched herself as Europe's bridge to Washington. On Greenland and defence spending, the bridge has creaked.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_it/us_it-3-hero.webp",
          alt: "Illustration of a long stone bridge across a river at dusk, with lights reflecting in the water.",
          caption: "Meloni has presented herself as a bridge between Europe and Trump.",
          credit: "AI illustration — not a photograph",
          prompt: "A long old stone bridge with many arches across a wide river at dusk, warm lamps along it reflecting in the water, a city's domes on one bank, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A special friendship", items: [
          ["20 Jan 2025", "Meloni the only EU leader at Trump's inauguration"],
          ["17 Apr 2025", "Meloni at the White House amid the tariff war"],
          ["Jul 2025", "EU–US trade deal sets 15% tariffs"],
          ["Jan 2026", "Meloni: 'I do not agree with Trump on Greenland'"],
          ["Jun 2026", "Italy plans 2.8% of GDP on defence and security"],
          ["2026", "Meloni urges NATO to look beyond spending targets"]
        ] },
        { type: "section", head: "Kindred spirits", md:
          "Giorgia Meloni, prime minister since 2022 (see [[lesson:it-4]]), comes from Italy's nationalist right and shares much of Trump's language on immigration, 'woke' ideology and national sovereignty. Unlike some on the European right, she has also backed Ukraine firmly and stayed within the EU mainstream. She was the only EU head of government at Trump's second inauguration in January 2025, and the Trump camp has praised her as a model European conservative." },
        { type: "section", head: "Bridge to Brussels", md:
          "In April 2025, days after Trump announced tariffs on the world, Meloni became the first European leader to visit him at the White House. She promised to 'make the West great again', and Trump predicted there would '100%' be a trade deal with the EU and agreed to visit Rome. The EU and US reached a deal in July 2025 setting a 15% tariff on most European goods. Supporters said Meloni had helped; critics said trade policy is made in Brussels and she had little to show." },
        { type: "section", head: "Greenland", md:
          "Meloni first played down Trump's talk of seizing Greenland, saying she did not believe the US would use force. But in January 2026 she signed a joint statement with six other European leaders defending Greenland's sovereignty, said 'I do not agree with Trump on Greenland', and called his threatened tariffs on European allies over the island a mistake. Trump dropped the tariffs days later (see [[lesson:us_fr-3]])." },
        { type: "section", head: "Paying for defence", md:
          "Trump has pressed Italy, long one of NATO's lower spenders, to spend more. Meloni said Italy would reach the 2% target in 2025 and plans to spend about 2.8% of GDP on defence and security in 2026, on the way to NATO's new goals. But with Italy's huge public debt (see [[lesson:it-6]]), she has argued that NATO should measure real capabilities, such as cyber defence and drones, rather than headline spending alone." },
        { type: "section", head: "Rome and the Vatican", md:
          "The election in May 2025 of Robert Prevost, a Chicago-born cardinal, as Pope Leo XIV added an unusual American link to Rome. The Vatican is a separate state, but Italian and American Catholics alike watched the first American pope's statements on migration and war, which sometimes differed from both Meloni's and Trump's positions." },
        { type: "compare", head: "Meloni's balance",
          left: { head: "With Trump", md:
            "Shared views on migration and culture; a channel to the White House for Europe." },
          right: { head: "With Europe", md:
            "Backs Ukraine, defends Greenland and needs EU money and markets." } },
        { type: "section", head: "Why it matters", md:
          "Meloni's closeness to Trump gives Italy unusual influence in Washington. Whether it can bend American policy on trade or Ukraine is the test of her bet." }
      ],
      takeaways: [
        "Meloni was the only EU leader at Trump's 2025 inauguration and the first to visit him during the tariff war.",
        "She broke with Trump over Greenland in January 2026, calling his tariff threat a mistake.",
        "Italy plans to spend about 2.8% of GDP on defence and security in 2026, while urging NATO to look beyond targets."
      ],
      check: { q: "What did Meloni say about Trump and Greenland in January 2026?",
        choices: ["That Italy would help buy Greenland", "'I do not agree with Trump on Greenland'", "That Greenland should join Italy"], answer: 1,
        explain: "She also called his threatened tariffs on European allies a mistake." },
      sources: [
        { title: "Italy's Meloni heads to White House in bid to ease US-EU trade tensions", publisher: "France 24", url: "https://www.france24.com/en/europe/20250417-italy-meloni-heads-white-house-bid-ease-us-eu-tensions-trump-trade-tariffs", date: "2025-04-17" },
        { title: "Italy's Meloni is positioning herself as bridge between EU and Trump", publisher: "The Conversation", url: "https://theconversation.com/italys-meloni-is-positioning-herself-as-bridge-between-eu-and-trump-but-will-it-work-254955", date: "2025-04" },
        { title: "Italian PM says she disagrees with Trump over Greenland", publisher: "Xinhua", url: "https://english.news.cn/europe/20260110/2f65531c409c447684752a12fa9007e2/c.html", date: "2026-01-10" },
        { title: "Italy's PM Meloni calls Trump's Greenland tariffs on Europe a mistake", publisher: "Al Jazeera", url: "https://www.aljazeera.com/video/newsfeed/2026/1/18/italys-pm-meloni-calls-trumps-greenland-tariffs-on-europe-a-mistake", date: "2026-01-18" },
        { title: "Italy's Meloni Urges NATO Rethink on Defence Spending as Rome Lifts Outlays", publisher: "U.S. News & World Report (Reuters)", url: "https://www.usnews.com/news/world/articles/2026-06-11/italys-meloni-urges-nato-rethink-on-defence-spending-as-rome-lifts-outlays", date: "2026-06-11" }
      ]
    }
  ]
});
