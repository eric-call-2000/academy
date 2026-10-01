/* ============================================================
   Relationship — United States & Germany 🇺🇸🇩🇪
   Occupation, the Berlin Airlift and 'Ich bin ein Berliner';
   Iraq, Merkel's tapped phone, Nord Stream and troop threats;
   and Merz's 'independence from the USA', a troop withdrawal,
   Tomahawks and the end of 'unconditional' friendship.
   Germany's own story is in de-3 to de-8.
   Research note and sources: tools/research/us_de.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_de", {
  id: "us_de",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_de-1", kind: "relation", asOf: "2026-10-01",
      title: "The airlift and the Wall",
      dek: "America defeated Germany, then fed West Berlin from the air, defended it for forty years and backed reunification. Few alliances began so badly and turned out so well.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_de/us_de-1-hero.webp",
          alt: "Illustration of a cargo plane flying low over bombed-out apartment buildings, watched by children on a rubble heap.",
          caption: "During the Berlin Airlift, a plane landed in West Berlin every few minutes, and at its peak every 30 seconds.",
          credit: "Illustration — not a photograph",
          prompt: "A 1940s propeller cargo plane flying low over bombed-out Berlin apartment buildings, children standing on a rubble heap watching it, grey sky, historical documentary painting style, seen from behind, no faces, no flags, no legible text." },
        { type: "timeline", head: "From enemy to ally", items: [
          ["1945", "US occupation of southern Germany begins"],
          ["Jun 1948–Sep 1949", "Berlin Airlift breaks the Soviet blockade"],
          ["1955", "West Germany joins NATO"],
          ["26 Jun 1963", "Kennedy: 'Ich bin ein Berliner'"],
          ["12 Jun 1987", "Reagan: 'Tear down this wall!'"],
          ["1990", "US backs German reunification"]
        ] },
        { type: "section", head: "Occupation", md:
          "In 1945 American troops occupied southern Germany, including Bavaria, Hesse and part of Berlin (see [[lesson:de-10]]). At first Washington considered keeping Germany weak. But as the Cold War began it changed course: the Marshall Plan funded reconstruction, and in 1949 the American, British and French zones became the Federal Republic, with a constitution written under Allied supervision (see [[lesson:de-9]])." },
        { type: "section", head: "The airlift", md:
          "In June 1948 the Soviet Union cut road and rail links to West Berlin, hoping to force the Western allies out. Instead they supplied the city by air. From 26 June 1948 to 30 September 1949 the Berlin Airlift delivered more than 2.3 million tons of food, coal and supplies, about three-quarters of it in American aircraft; at its peak a plane landed every 30 seconds. American pilots dropped sweets to children on small parachutes. The airlift turned Americans, for many Germans, from occupiers into protectors." },
        { type: "section", head: "Berliners", md:
          "West Germany joined NATO in 1955, and hundreds of thousands of American soldiers were stationed there through the Cold War, the front line against the Warsaw Pact. On 26 June 1963, two years after the Berlin Wall went up, John F. Kennedy told a crowd of 120,000 in West Berlin 'Ich bin ein Berliner', promising that the free world stood with them. On 12 June 1987 Ronald Reagan, at the Brandenburg Gate, called: 'Mr. Gorbachev, tear down this wall!' Advisers had tried to cut the line as too provocative." },
        { type: "section", head: "Reunification", md:
          "When the Wall fell in November 1989 (see [[lesson:de-11]]), Britain and France were nervous about a big united Germany. President George H. W. Bush backed Chancellor Helmut Kohl, and in the 'Two Plus Four' talks of 1990 helped secure Soviet agreement for a united Germany inside NATO. Germans still credit Bush and America for supporting unity when others hesitated." },
        { type: "section", head: "Ramstein and the bases", md:
          "American forces remain in Germany, now around 36,000. Ramstein air base is the hub for US operations in Europe, Africa and the Middle East, the military hospital at Landstuhl treated soldiers wounded in Iraq and Afghanistan, and US European Command is headquartered in Stuttgart. The bases are also big local employers in towns across Rhineland-Palatinate and Bavaria." },
        { type: "compare", head: "Two memories",
          left: { head: "Gratitude", md:
            "America fed Berlin, protected the West and helped reunify Germany." },
          right: { head: "Dependence", md:
            "Germany outsourced its security to America for seventy years and is now paying the price." } },
        { type: "section", head: "Why it matters", md:
          "Post-war Germany's democracy and prosperity were built under American protection. That is why today's rift feels so momentous in Berlin, especially to older Germans." }
      ],
      takeaways: [
        "The 1948–49 Berlin Airlift, mostly American, broke the Soviet blockade of West Berlin.",
        "Kennedy in 1963 and Reagan in 1987 made famous speeches in Berlin.",
        "The US backed German reunification inside NATO in 1990; about 36,000 US troops remain."
      ],
      check: { q: "What was the Berlin Airlift?",
        choices: ["The evacuation of Berlin in 1945", "A Western operation to supply West Berlin by air during a Soviet blockade", "An airline route to Moscow"], answer: 1,
        explain: "It delivered over 2.3 million tons of supplies between June 1948 and September 1949." },
      sources: [
        { title: "1949 – The Berlin Airlift", publisher: "Air Force Historical Support Division", url: "https://www.afhistory.af.mil/FAQs/Fact-Sheets/Article/458961/1949-the-berlin-airlift/", date: "n.d." },
        { title: "John F. Kennedy claims solidarity with the people of Berlin", publisher: "History.com", url: "https://www.history.com/this-day-in-history/June-26/kennedy-claims-solidarity-with-the-people-of-berlin", date: "n.d." },
        { title: "Reagan's 'Mr. Gorbachev, tear down this wall' was almost left unsaid", publisher: "Stanford University", url: "https://news.stanford.edu/stories/2019/11/reagans-mr-gorbachev-tear-down-this-wall-was-almost-left-unsaid", date: "2019-11" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_de-2", kind: "relation", asOf: "2026-10-01",
      title: "Iraq, spies and pipelines",
      dek: "Germany refused to join the Iraq war, discovered America had tapped Merkel's phone, and defied Washington over Russian gas. Trump tried to pull troops out in 2020; Biden reversed it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_de/us_de-2-hero.webp",
          alt: "Illustration of a mobile phone lying on a polished desk in a government office, with a large window behind.",
          caption: "Leaks in 2013 showed the NSA had monitored Chancellor Merkel's mobile phone.",
          credit: "Illustration — not a photograph",
          prompt: "An older mobile phone lying on a polished wooden desk in a modern government office, a large window behind showing a glass dome in the distance, soft light, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Friction among friends", items: [
          ["2002–03", "Schröder refuses to join the Iraq war"],
          ["Oct 2013", "Leaks show the NSA tapped Merkel's phone"],
          ["2018–19", "Trump attacks German defence spending and Nord Stream 2"],
          ["Jul 2020", "Trump orders about 12,000 troops out of Germany"],
          ["Feb 2021", "Biden freezes the withdrawal"],
          ["Feb 2022", "Russia invades Ukraine; Nord Stream 2 halted"]
        ] },
        { type: "section", head: "Iraq", md:
          "In 2002 Chancellor Gerhard Schröder won re-election partly by opposing an American war in Iraq, and in 2003 Germany joined France and Russia in resisting it at the UN. Defence Secretary Donald Rumsfeld dismissed them as 'old Europe'. Relations with the Bush administration hit their lowest point since the war, though German bases still served American forces heading to Iraq." },
        { type: "section", head: "Spying on friends", md:
          "In October 2013 documents leaked by Edward Snowden showed that the US National Security Agency had monitored Chancellor Angela Merkel's mobile phone. 'Spying among friends is not acceptable at all,' Merkel said. Germany expelled the CIA's station chief in Berlin in 2014 after two spying cases. Obama promised not to monitor her phone in future, but trust took years to rebuild." },
        { type: "section", head: "Nord Stream and spending", md:
          "Successive American presidents objected to Germany's growing dependence on Russian gas, especially the Nord Stream 2 pipeline under the Baltic (see [[lesson:de_ru-2]]), and to Germany spending far less than NATO's 2% of GDP on defence. In his first term Trump attacked Merkel on both, imposed sanctions on companies building the pipeline, and in July 2020 ordered about 12,000 troops out of Germany. Joe Biden froze the withdrawal soon after taking office." },
        { type: "section", head: "Zeitenwende", md:
          "Russia's full invasion of Ukraine in February 2022 vindicated the American warnings. Chancellor Olaf Scholz halted Nord Stream 2, announced a 'Zeitenwende', or turning point, and a €100 billion fund for the armed forces (see [[lesson:de-5]]). Germany became the second-biggest supplier of military aid to Ukraine after the US, though it was slower than many allies to send tanks and long-range missiles." },
        { type: "section", head: "Cars and surpluses", md:
          "Trade was another irritant. Germany sells the US far more than it buys, and Trump has long complained about German cars; in his first term he reportedly grumbled about the number of Mercedes on New York's Fifth Avenue. Yet German carmakers are also big American manufacturers: BMW's largest plant in the world is in Spartanburg, South Carolina, and Mercedes-Benz and Volkswagen build cars in Alabama and Tennessee, employing tens of thousands of Americans." },
        { type: "compare", head: "Who was right?",
          left: { head: "Washington's case", md:
            "Germany grew rich trading with Russia and China while America paid for its defence." },
          right: { head: "Berlin's case", md:
            "Germany was a loyal ally that hosted US bases and judged Iraq and other wars more wisely." } },
        { type: "section", head: "Why it matters", md:
          "Each quarrel was patched up, but together they left Germans less certain that America would always share their interests, a doubt that Trump's second term has deepened." }
      ],
      takeaways: [
        "Germany opposed the 2003 Iraq war; in 2013 leaks showed the NSA had tapped Merkel's phone.",
        "US presidents opposed Nord Stream 2; Trump ordered troops out in 2020, and Biden froze the move.",
        "After Russia's 2022 invasion Germany halted Nord Stream 2 and began rearming."
      ],
      check: { q: "What did Merkel say after learning her phone had been monitored?",
        choices: ["'We have nothing to hide'", "'Spying among friends is not acceptable at all'", "'Germany will leave NATO'"], answer: 1,
        explain: "Germany later expelled the CIA's Berlin station chief after separate spying cases." },
      sources: [
        { title: "The NSA: the impact of the wiretapping scandal on German-American relations", publisher: "Centre for Eastern Studies (OSW)", url: "https://www.osw.waw.pl/en/publikacje/osw-commentary/2014-01-14/nsa-impact-wiretapping-scandal-german-american-relations", date: "2014-01-14" },
        { title: "New report: NSA did more than just tap Merkel's phone", publisher: "The Local Germany", url: "https://www.thelocal.de/20160223/nsa-eavesdropped-on-merkels-intimate-conversations", date: "2016-02-23" },
        { title: "US set to withdraw 11,900 soldiers based in Germany", publisher: "GlobalSecurity.org", url: "https://www.globalsecurity.org/military/library/news/2020/07/mil-200730-pdo01.htm", date: "2020-07-30" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_de-3", kind: "relation", asOf: "2026-10-01",
      title: "The end of unconditional friendship",
      dek: "Friedrich Merz promised 'independence from the USA'. After he criticised the Iran war, Trump pulled 5,000 troops out of Germany. In September 2026 Merz said the era of unconditional friendship was probably over.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_de/us_de-3-hero.webp",
          alt: "Illustration of military trucks in a convoy leaving a base gate in the German countryside at dawn.",
          caption: "The Pentagon ordered about 5,000 US troops out of Germany in May 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A convoy of military trucks and armoured vehicles leaving a base gate in green German countryside at dawn, mist over fields, a church spire in a village beyond, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A widening gap", items: [
          ["Feb 2025", "Merz: 'achieve independence from the USA'"],
          ["5 Jun 2025", "Merz's first White House visit"],
          ["Jul 2025", "EU–US deal caps tariffs on cars at 15%"],
          ["May 2026", "5,000 US troops to leave; 25% car tariff threatened"],
          ["Jul 2026", "Germany agrees to buy Tomahawk missiles"],
          ["17 Sep 2026", "Merz: unconditional friendship 'probably over'"]
        ] },
        { type: "section", head: "Independence", md:
          "On election night in February 2025, Friedrich Merz, an Atlanticist who had worked for American firms, stunned listeners: his 'absolute priority', he said, was to strengthen Europe 'so that, step by step, we can really achieve independence from the USA'. He had concluded that the Trump administration was largely indifferent to Europe's fate. Germany then loosened its constitutional debt brake to spend heavily on defence (see [[lesson:de-5]])." },
        { type: "section", head: "Charm offensive", md:
          "Merz's first meeting with Trump at the White House on 5 June 2025 went smoothly; he brought a framed copy of the birth certificate of Trump's grandfather, who emigrated from the wine village of Kallstadt. In July the EU reached a trade deal capping US tariffs on most European goods, including German cars, at 15%. Merz pressed Trump to keep supporting Ukraine and pledged that Germany would meet NATO's new spending goals." },
        { type: "section", head: "Iran and the troops", md:
          "When the United States and Israel went to war with Iran in 2026, Merz criticised it. Trump lashed out and threatened to withdraw troops. On 1 May 2026 the Pentagon announced that about 5,000 US troops, some 14% of the 36,000 in Germany, would leave within six to twelve months, and Trump threatened more cuts. Days later he threatened a 25% tariff on European cars, which German politicians said was aimed at Germany and would break the 2025 trade deal." },
        { type: "section", head: "Tomahawks of its own", md:
          "In 2024 the Biden administration had promised to station long-range American missiles, including Tomahawks, in Germany from 2026. Trump dropped the plan. In July 2026, at the NATO summit in Ankara, Merz announced that Germany would instead buy its own Tomahawk cruise missiles and launchers from the US, a step toward the independent deterrent he had promised." },
        { type: "section", head: "Probably over", md:
          "In early September 2026 the far-right AfD won sweeping victories in state elections in Saxony-Anhalt and Mecklenburg-Western Pomerania (see [[lesson:de-6]]), and Trump praised its success, angering Germany's mainstream parties. On 17 September Merz told his party that 'the era of unconditional transatlantic friendship is probably over for the foreseeable future', a striking verdict from a leader of the party that had anchored Germany to America since Adenauer." },
        { type: "compare", head: "Germany's choice",
          left: { head: "Hold on", md:
            "Keep US troops and nuclear protection as long as possible; there is no substitute." },
          right: { head: "Stand alone", md:
            "Build a European defence, including long-range missiles and perhaps a nuclear role with France." } },
        { type: "section", head: "Why it matters", md:
          "Germany is Europe's biggest economy and now one of its biggest defence spenders. Whether it still sees America as its protector will shape NATO's future (see [[lesson:fr_de-3]])." }
      ],
      takeaways: [
        "Merz promised in 2025 to work toward 'independence from the USA'.",
        "After he criticised the Iran war, the US announced in May 2026 it would withdraw 5,000 troops from Germany.",
        "Germany is buying its own Tomahawk missiles; in September 2026 Merz said 'unconditional' friendship was probably over."
      ],
      check: { q: "What did the Pentagon announce about Germany in May 2026?",
        choices: ["New bases near Berlin", "The withdrawal of about 5,000 US troops", "A nuclear-sharing deal"], answer: 1,
        explain: "The cut followed Merz's criticism of the US war with Iran." },
      sources: [
        { title: "Germany's Merz calls for 'independence' from US as conservatives win vote", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/2/24/germanys-merz-calls-for-independence-from-us-as-conservatives-win-vote", date: "2025-02-24" },
        { title: "U.S. to withdraw 5,000 troops from Germany in next 6-12 months", publisher: "NPR", url: "https://www.npr.org/2026/05/02/g-s1-119864/u-s-withdraw-troops-germany", date: "2026-05-02" },
        { title: "Donald Trump's EU car tariffs 'targeting Germany,' says key German MEP", publisher: "Euronews", url: "https://www.euronews.com/my-europe/2026/05/04/donald-trumps-eu-car-tariffs-targeting-germany-says-key-german-mep", date: "2026-05-04" },
        { title: "Germany to buy US Tomahawks in shift toward own long-range capability", publisher: "Defense News", url: "https://www.defensenews.com/global/europe/2026/07/09/germany-to-buy-us-tomahawks-in-shift-toward-own-long-range-capability/", date: "2026-07-09" },
        { title: "Merz Says US Friendship Since War 'Probably Over' for Now", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-17/merz-says-us-friendship-built-since-war-probably-over-for-now", date: "2026-09-17" },
        { title: "Germany's Merz says era of 'unconditional' friendship with U.S. is over", publisher: "Yahoo News", url: "https://www.yahoo.com/news/politics/articles/germany-merz-says-era-unconditional-172609209.html", date: "2026-09-17" }
      ]
    }
  ]
});
