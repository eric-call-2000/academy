/* ============================================================
   Unit 6 — Germany 🇩🇪
   Research note and sources: tools/research/de.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("de", {
  id: "de",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "de-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Germany in brief",
      dek: "Europe's biggest economy and most populous EU country, rearming for the first time since the Cold War while its political centre wobbles.",
      blocks: [
        { type: "map", src: "maps/de.svg",
          alt: "Locator map of central Europe with Germany highlighted, bordered by Denmark, Poland, the Czech Republic, Austria, Switzerland, France, Luxembourg, Belgium and the Netherlands, and a small globe showing its place in the world.",
          caption: "Germany sits at the centre of Europe and borders nine countries, more than any other EU member.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Berlin"],
          ["People", "About 83 million, the most in the European Union"],
          ["System", "Federal parliamentary republic of 16 states"],
          ["Chancellor", "Friedrich Merz (CDU), since May 2025"],
          ["Government", "CDU/CSU and SPD coalition: 328 of 630 seats"],
          ["President", "Frank-Walter Steinmeier, a largely ceremonial role"],
          ["Economy", "The largest in Europe and third-largest in the world"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Germany is the economic engine of Europe and the biggest paymaster of the European Union. Its factories make cars, machines and chemicals sold everywhere, so what happens to German industry ripples across the continent. It is also one of the biggest backers of [[unit:ua]] and now the European country spending most on its armed forces.\n\n" +
          "For decades Germany preferred trade to power. It bought cheap gas from [[unit:ru]], sold cars to [[unit:cn]] and left its defence to [[NATO]] and [[unit:us]]. Russia's invasion of Ukraine in 2022 ended that model, and the country is still working out what replaces it." },
        { type: "section", head: "Who holds power", md:
          "Friedrich Merz, a 70-year-old conservative and former corporate lawyer, leads the Christian Democrats (CDU) and governs in a [[coalition government]] with their Bavarian sister party, the CSU, and the centre-left Social Democrats (SPD). Lars Klingbeil of the SPD is vice-chancellor and finance minister, and Boris Pistorius, also SPD, runs defence.\n\n" +
          "The coalition has only a thin majority in the [[Bundestag]], the federal parliament, and it faces the strongest far-right party in Germany since the Second World War: the Alternative for Germany (AfD)." },
        { type: "section", head: "The mood in 2026", md:
          "Germany's economy shrank in both 2023 and 2024 and grew just 0.3% in 2025. Energy is expensive, Chinese carmakers are winning customers German brands once took for granted, and American [[tariff|tariffs]] have hit exporters. Many voters feel their country has stopped working: trains run late, bridges need repair and bureaucracy is slow.\n\n" +
          "That frustration is showing up at the ballot box. In September 2026 the AfD won more than 40% in one eastern state, and national polls put it ahead of Merz's own party." },
        { type: "section", head: "A country of states and cities", md:
          "Germany has no single dominant city the way France has Paris or Britain has London. Berlin is the capital, but finance sits in Frankfurt, the biggest industries in Bavaria, Baden-Württemberg and the Rhineland, and the port in Hamburg. Power is spread across 16 states, each with its own government, and that shapes everything from school rules to how quickly a new railway gets built." },
        { type: "section", head: "What Germany wants", md:
          "Merz's government wants to restart growth by cutting red tape and energy costs, to build the strongest conventional army in Europe, to reduce irregular migration, and to keep the EU and NATO united behind Ukraine. Abroad, it wants a trade relationship with the United States that does not punish its exporters, and a less dependent one with China." },
        { type: "callout", tone: "why", md:
          "When Germany is weak, Europe drifts: it is the EU's biggest economy, its biggest budget contributor and now its biggest military spender. A Germany whose centre cannot hold would change the politics of the whole continent." }
      ],
      takeaways: [
        "Germany is Europe's largest economy and, since 2025, its biggest spender on defence.",
        "Friedrich Merz governs with a thin CDU/CSU–SPD majority of 328 seats out of 630.",
        "After years of weak growth, the far-right AfD now leads national polls."
      ],
      check: { q: "Which parties make up Merz's governing coalition?",
        choices: ["CDU/CSU and the Greens", "CDU/CSU and the SPD", "CDU/CSU and the AfD"], answer: 1,
        explain: "Merz leads a coalition of his CDU, its Bavarian sister party the CSU, and the Social Democrats. All mainstream parties refuse to govern with the AfD." },
      sources: [
        { title: "2025 German federal election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_German_federal_election", date: "2025" },
        { title: "Economic forecast for Germany", publisher: "European Commission", url: "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages-including-country-reports/germany/economic-forecast-germany_en", date: "2026" },
        { title: "Germany Under Friedrich Merz Has Lost Its Authority at Home and Abroad", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2026/09/24/germany-merz-authority-lost-elections-afd/", date: "2026-09-24" },
        { title: "Germany's leader stands his ground after his party loses in state elections", publisher: "NPR", url: "https://www.npr.org/2026/09/21/g-s1-144231/germany-state-elections-merz", date: "2026-09-21" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "de-2", kind: "power", asOf: "2026-09-28",
      title: "Chancellors, coalitions and states",
      dek: "A system built after 1945 to make sure no one could ever grab all the power again.",
      blocks: [
        { type: "diagram", src: "img/de/de-2-power.svg",
          alt: "Diagram of power in Germany. Voters cast two votes each, for a local MP and a party list, with a 5% threshold. The 630-seat Bundestag elects the chancellor, Friedrich Merz, who sets policy and picks the cabinet and can only be removed if parliament elects a successor. The chancellor shares power with the 16 states, whose governments vote in the Bundesrat. The Constitutional Court can strike down laws and alone can ban a party. The president is a ceremonial head of state.",
          caption: "Power is split between a chancellor, a parliament, 16 states and a powerful constitutional court.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "Built against dictatorship", md:
          "Germany's constitution, the Basic Law of 1949, was written by people who had watched the Weimar Republic collapse and Hitler take power legally. Almost every rule is a safeguard. The president is weak, so no one figure can rule by emergency decree. Power is shared between the federal government and the states. A court in Karlsruhe can overturn laws. And the constitution itself allows the state to ban parties that seek to destroy democracy, which is why the fight over the AfD is so charged." },
        { type: "section", head: "Two votes and the 5% rule", md:
          "Each voter casts two ballots: one for a local candidate and one for a party list. The second vote decides how many seats each party gets, so the [[Bundestag]] ends up close to proportional. A party needs 5% of the national vote to win list seats. In 2025 two parties, the liberal FDP and the left-populist BSW, fell just short and got nothing, which is one reason Merz's coalition could form a majority with under 45% of the vote.\n\n" +
          "A 2023 reform capped the Bundestag at 630 seats; before that, the system's quirks had pushed it past 730." },
        { type: "section", head: "The chancellor", md:
          "The chancellor is elected by the Bundestag, not by voters directly, and needs an absolute majority. Merz learned how thin his was on 6 May 2025: he failed in the first round, the first chancellor candidate in post-war history to do so, before winning a second vote the same afternoon.\n\n" +
          "Once in office a chancellor is hard to remove. Under the [[constructive vote of no confidence]], parliament can only oust one by electing a replacement at the same time. That makes chancellors stable, but it also means a weak one can limp on for a long time." },
        { type: "section", head: "Sixteen states and the Bundesrat", md:
          "Germany is a federal country. Its 16 states, from Bavaria to the city-state of Berlin, run schools, police, universities and much of public administration, and each has its own elected parliament and government. State governments sit together in the [[Bundesrat]], the second chamber, which must approve any law affecting their powers or money.\n\n" +
          "That is why state elections matter nationally. They change who controls the Bundesrat, test the national parties between federal votes, and, in 2026, showed how deep the AfD's support in the east has become." },
        { type: "section", head: "Coalitions are normal", md:
          "No party has won an outright Bundestag majority since 1957, so every government is a coalition, negotiated after the election in a long written contract. The combination in office now, the conservatives with the SPD, is called a grand coalition, though the two old big parties won only 45% between them in 2025. Coalition partners can walk out: the previous government, led by the SPD's Olaf Scholz with the Greens and the FDP, collapsed in November 2024 over the budget." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "Germany's rules have produced stable, moderate governments for 75 years. Coalitions force compromise, federalism keeps power close to people, and the courts have protected rights." },
          right: { head: "Its critics", md:
            "Compromise has become paralysis. Decisions take years, states and Berlin blame each other, and the mainstream parties' refusal to work with the AfD leaves ever narrower majorities." } }
      ],
      takeaways: [
        "The 1949 Basic Law spreads power widely to prevent a return to dictatorship, and allows parties that threaten democracy to be banned.",
        "The Bundestag elects the chancellor, who can only be removed if parliament elects a successor at the same time.",
        "The 16 states run much of daily government and have their say through the Bundesrat."
      ],
      check: { q: "How can the Bundestag remove a German chancellor?",
        choices: ["By a simple vote of no confidence", "Only by electing a successor in the same vote", "It cannot; only the president can"], answer: 1,
        explain: "Germany's 'constructive' vote of no confidence requires parliament to elect a new chancellor in the same vote, so it can't just topple a government and leave a vacuum." },
      sources: [
        { title: "Basic Law for the Federal Republic of Germany", publisher: "Deutscher Bundestag", url: "https://www.bundestag.de/en/parliament/function/legal/germanbasiclaw-195906", date: "n.d." },
        { title: "2025 German federal election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_German_federal_election", date: "2025" },
        { title: "2024 German government crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2024_German_government_crisis", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "de-9", kind: "founding", asOf: "2026-09-28",
      title: "1949: the Basic Law",
      dek: "From the ruins of the Third Reich, West Germans wrote a constitution designed above all to make dictatorship impossible.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-9-hero.webp",
          alt: "Illustration of a modest white modernist building on the bank of a wide river lined with trees, in soft spring light.",
          caption: "Bonn, on the Rhine, where the Basic Law was drafted in 1948–49 and which served as West Germany's capital until 1990.",
          credit: "Illustration — not a photograph",
          prompt: "A modest white modernist government building with large windows beside a wide river lined with trees, soft spring light, a small ferry on the water, calm and unassuming, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From one Germany to two, and back", items: [
          ["1871", "Germany unified as an empire under Prussia"],
          ["1919", "The Weimar Republic, Germany's first democracy"],
          ["1933", "Hitler takes power"],
          ["1945", "Defeat; Germany divided into four occupation zones"],
          ["23 May 1949", "The Basic Law takes effect in the West"],
          ["7 Oct 1949", "The communist German Democratic Republic founded in the East"],
          ["3 Oct 1990", "Reunification under the Basic Law"]
        ] },
        { type: "section", head: "A late nation", md:
          "For most of its history 'Germany' was a patchwork of kingdoms, duchies and free cities. It was unified only in 1871, when the Prussian chancellor Otto von Bismarck, after wars with Denmark, Austria and France, proclaimed the German Empire. That empire ended in defeat in 1918. The Weimar Republic that followed was Germany's first democracy, but it was undermined by hyperinflation, the Depression, street violence and a constitution that let the president rule by decree. In 1933 Adolf Hitler was appointed chancellor and destroyed it within months." },
        { type: "section", head: "Zero hour", md:
          "In May 1945 Germany surrendered unconditionally. Its cities lay in ruins, millions were dead, and some 12 million Germans had fled or been expelled from the east. The victorious Allies divided the country into American, British, French and Soviet zones, and Berlin likewise. As the Cold War began, the Western Allies merged their zones, introduced a new currency in 1948, and asked the West German states to write a constitution. The Soviet Union responded by blockading West Berlin, which was supplied for almost a year by the Berlin Airlift." },
        { type: "section", head: "Writing the Basic Law", md:
          "A Parliamentary Council of 65 delegates, chaired by Konrad Adenauer, met in Bonn from September 1948. They deliberately called their text a 'Basic Law', not a constitution, because they regarded it as provisional until Germany could be reunified. It took effect on 23 May 1949. Adenauer became the Federal Republic's first chancellor. In October the Soviet zone became the German Democratic Republic, a communist state." },
        { type: "section", head: "Lessons from Weimar", md:
          "Every major feature was designed to avoid Weimar's fate. Human dignity is 'inviolable' in Article 1, and basic rights cannot be abolished. A 'constructive vote of no confidence' means parliament can remove a chancellor only by electing a successor (see [[constructive-vote-of-no-confidence]]). The president is largely ceremonial. A 5% threshold keeps tiny parties out of the Bundestag. A powerful Constitutional Court can strike down laws and ban parties that seek to abolish democracy, and the federal states share power through the [[Bundesrat]]. The principle is called 'militant democracy'." },
        { type: "compare", head: "Two views of the Basic Law",
          left: { head: "Its admirers", md:
            "A model constitution that turned a defeated dictatorship into one of the world's most stable democracies, and was copied widely." },
          right: { head: "Its critics", md:
            "Written under Allied supervision and never put to a popular vote; some East Germans in 1990 wanted a new, jointly written constitution instead." } },
        { type: "section", head: "Why it still matters", md:
          "The debate over whether to ban the far-right AfD, and the domestic intelligence agency's classification of it as extremist, flow directly from the Basic Law's idea of a democracy that defends itself. So does Germany's 'debt brake', a later amendment that has shaped every recent budget fight." }
      ],
      takeaways: [
        "Germany was unified only in 1871; its first democracy, the Weimar Republic, collapsed into Nazi rule in 1933.",
        "After defeat in 1945, West Germany adopted the Basic Law in 1949, while the East became a communist state.",
        "The Basic Law was built to prevent another Weimar: inviolable rights, a constructive no-confidence vote, a 5% threshold and a strong Constitutional Court."
      ],
      check: { q: "Why was West Germany's constitution called a 'Basic Law'?",
        choices: ["It was very short", "It was seen as provisional until Germany could be reunified", "It only covered the economy"], answer: 1,
        explain: "The drafters meant it as temporary; in 1990 East Germany joined under it, and it became the constitution of united Germany." },
      sources: [
        { title: "Basic Law for the Federal Republic of Germany (English translation)", publisher: "Federal Ministry of Justice", url: "https://www.gesetze-im-internet.de/englisch_gg/", date: "n.d." },
        { title: "Germany: History", publisher: "Britannica", url: "https://www.britannica.com/place/Germany/History", date: "n.d." },
        { title: "Konrad Adenauer", publisher: "Britannica", url: "https://www.britannica.com/biography/Konrad-Adenauer", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "de-3", kind: "history", asOf: "2026-09-28",
      title: "From ruins to reunification to Zeitenwende",
      dek: "Eighty years in which Germany rebuilt itself as a peaceful trading power, and then discovered the world had changed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-3-hero.webp",
          alt: "Illustration of crowds climbing onto a graffiti-covered concrete wall at night, with a grand stone gate lit up behind them.",
          caption: "The fall of the Berlin Wall on 9 November 1989 opened the way to reunification less than a year later.",
          credit: "Illustration — not a photograph",
          prompt: "Night scene of jubilant crowds seen from behind climbing onto a graffiti-covered concrete wall, a grand neoclassical stone gate floodlit in the background, fireworks and camera flashes, cold autumn air, joy and disbelief, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1945", "Nazi Germany defeated; the country occupied and divided"],
          ["1949", "Two states: the democratic West and the communist East"],
          ["1990", "Reunification on 3 October, eleven months after the Wall fell"],
          ["2005–21", "The Merkel years"],
          ["2022", "Russia invades Ukraine; Scholz declares a Zeitenwende"],
          ["2025", "Snap election; Merz becomes chancellor"]
        ] },
        { type: "section", head: "1. Division (1945–1989)", md:
          "After the defeat of Nazi Germany in 1945 the Allies divided the country. In 1949 the American, British and French zones became the Federal Republic, a democracy anchored in the West, while the Soviet zone became the communist German Democratic Republic. West Germany joined [[NATO]] in 1955 and co-founded what became the European Union. Its 'economic miracle' made it rich; East Germany built the Berlin Wall in 1961 to stop its people leaving." },
        { type: "section", head: "2. Reunification (1989–1990)", md:
          "Peaceful protests in the East and the collapse of Soviet power brought the Wall down on 9 November 1989. Less than a year later, on 3 October 1990, the East joined the Federal Republic. Unity was a triumph, but the East's industry collapsed in the transition and millions of people moved west. Wages, wealth and trust in politics are still lower there, and that gap helps explain why the AfD is so much stronger in the eastern states." },
        { type: "section", head: "3. The Merkel years (2005–2021)", md:
          "Angela Merkel, who grew up in the East, led Germany for 16 years through the financial crisis, the euro crisis and the pandemic. Her Germany balanced its budgets, exported more than ever and relied on Russian gas, Chinese customers and American protection. In 2015 she kept the borders open to refugees fleeing Syria's war, and around 890,000 asylum seekers arrived that year. That decision was admired abroad and bitterly contested at home, and it helped the AfD, founded in 2013 as an anti-euro party, grow into an anti-immigration one." },
        { type: "section", head: "4. Turning point (2022)", md:
          "Three days after Russia invaded [[unit:ua]], Chancellor Olaf Scholz told the Bundestag it was a *Zeitenwende*, a turning point. He announced a €100 billion fund for the armed forces and promised to meet NATO's spending target. Germany weaned itself off Russian gas within a year, at a heavy cost to industry, and became Ukraine's biggest European backer. But the three-party government argued constantly, and it collapsed in November 2024 when Scholz fired his finance minister in a row over the [[debt brake]]." },
        { type: "section", head: "5. Merz takes over (2025)", md:
          "The snap election on 23 February 2025 put the CDU/CSU first with 28.5%, the AfD second with 20.8%, its best result ever, and the SPD third with 16.4%. Even before Merz took office, the old parliament changed the constitution to exempt most defence spending from the debt brake and create a €500 billion fund for infrastructure. Merz, who had campaigned on fiscal discipline, argued that the world had changed faster than his promises." }
      ],
      takeaways: [
        "Divided after 1945, Germany reunified in 1990, but the former East remains poorer and more distrustful of politics.",
        "The Merkel years relied on Russian gas, Chinese customers and American protection; the 2015 refugee arrivals reshaped politics.",
        "Russia's 2022 invasion forced a 'Zeitenwende': rearmament, an end to Russian gas and, in 2025, a looser debt brake."
      ],
      check: { q: "What did Olaf Scholz call the change in German policy after Russia invaded Ukraine?",
        choices: ["Ostpolitik", "Zeitenwende", "Wirtschaftswunder"], answer: 1,
        explain: "Zeitenwende means 'turning point'. Ostpolitik was the 1970s policy of détente with the East; Wirtschaftswunder was the post-war 'economic miracle'." },
      sources: [
        { title: "Germany profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-europe-17301647", date: "n.d." },
        { title: "2025 German federal election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_German_federal_election", date: "2025" },
        { title: "2024 German government crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2024_German_government_crisis", date: "2024" },
        { title: "Germany update: breaking from the brake", publisher: "Deutsche Bank", url: "https://flow.db.com/topics/macro-and-markets/germany-update-breaking-from-the-brake", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "de-10", kind: "past", asOf: "2026-09-28",
      title: "The Nazi dictatorship and the Holocaust",
      dek: "Between 1933 and 1945, Hitler's regime launched a world war and murdered six million Jews. Germany's democracy was built on confronting that past.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-10-hero.webp",
          alt: "Illustration of a field of grey concrete slabs of different heights in rows, seen at dusk with long shadows.",
          caption: "Berlin's Memorial to the Murdered Jews of Europe, opened in 2005 near the Brandenburg Gate.",
          credit: "Illustration — not a photograph",
          prompt: "A vast field of grey concrete slabs of varying heights arranged in a tight grid on undulating ground, seen at dusk with long shadows, a few bare trees at the edge, solemn and disorienting, no people, no legible text." },
        { type: "facts", head: "The toll", rows: [
          ["Jews murdered in the Holocaust", "About 6 million"],
          ["Roma and Sinti killed", "Estimated 200,000 to 500,000"],
          ["Deaths in the Second World War", "Estimated 70–85 million worldwide"],
          ["Auschwitz liberated", "27 January 1945, now Holocaust Remembrance Day"],
          ["Nuremberg trials", "1945–46"]
        ] },
        { type: "section", head: "Seizing power", md:
          "Hitler's National Socialist party rose on anger at the 1919 peace treaty, the Depression and fear of communism, winning 37% of the vote in July 1932. Appointed chancellor in January 1933, Hitler used a fire at the Reichstag to suspend civil liberties, and an Enabling Act let him rule by decree. Within months other parties were banned, trade unions dissolved, political opponents sent to concentration camps, and the press and culture placed under the party's control." },
        { type: "section", head: "Persecution", md:
          "From the start the regime persecuted Germany's Jews. They were boycotted, dismissed from public jobs, stripped of citizenship under the 1935 Nuremberg Laws, and attacked in the November 1938 pogrom known as Kristallnacht, when synagogues burned across the country. Roma and Sinti, gay men, people with disabilities, Jehovah's Witnesses and political opponents were also persecuted; some 70,000 disabled people were murdered in a 'euthanasia' programme from 1939." },
        { type: "section", head: "War and genocide", md:
          "Hitler invaded Poland on 1 September 1939, starting the Second World War in Europe. As German armies conquered much of the continent, the regime moved to the systematic murder of Europe's Jews: mass shootings in the occupied Soviet Union from 1941, then death camps in occupied Poland, including Auschwitz-Birkenau, Treblinka and Sobibor, where people were killed in gas chambers. About six million Jews, two-thirds of Europe's Jewish population, were murdered, alongside hundreds of thousands of Roma and millions of Soviet prisoners of war and civilians." },
        { type: "section", head: "Reckoning", md:
          "After Germany's defeat in May 1945, Allied tribunals at Nuremberg tried leading Nazis. West Germany at first preferred to look away, and many former Nazis kept jobs in the civil service and judiciary. That changed from the 1960s, with the Frankfurt Auschwitz trials and a younger generation's questions. In 1970 Chancellor Willy Brandt knelt at the memorial to the Warsaw Ghetto. Germany paid reparations to survivors and to Israel, and 'Vergangenheitsbewältigung', working through the past, became part of national identity; Holocaust denial is a crime." },
        { type: "compare", head: "Debates about memory",
          left: { head: "A model of remembrance", md:
            "Germany's memorials, education and laws show how a nation can take responsibility for its crimes, and underpin its commitment to Israel's security." },
          right: { head: "Contested memory", md:
            "Some on the far right call for an end to 'guilt culture', while others argue Germany's stance on Israel limits criticism of the war in Gaza." } },
        { type: "section", head: "Why it still matters", md:
          "The Nazi past explains why Germany long hesitated to use military force, why it treats Israel's security as a 'reason of state', and why the rise of the AfD alarms so many Germans. An AfD leader's description of the Nazi era as a 'speck of bird muck' in German history caused outrage in 2018." }
      ],
      takeaways: [
        "Hitler took power in 1933 and destroyed democracy within months.",
        "The Nazi regime launched the Second World War and murdered about six million Jews in the Holocaust.",
        "Confronting that past became central to German democracy, from memorials to its support for Israel."
      ],
      check: { q: "What was Kristallnacht?",
        choices: ["The Reichstag fire", "A nationwide pogrom against Jews in November 1938", "The liberation of Auschwitz"], answer: 1,
        explain: "On 9–10 November 1938, synagogues, Jewish homes and shops were attacked across Germany and Austria." },
      sources: [
        { title: "Introduction to the Holocaust", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust", date: "n.d." },
        { title: "Nazism", publisher: "Britannica", url: "https://www.britannica.com/event/Nazism", date: "n.d." },
        { title: "Holocaust", publisher: "Britannica", url: "https://www.britannica.com/event/Holocaust", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "de-11", kind: "past", asOf: "2026-09-28",
      title: "The Wall and reunification",
      dek: "For 28 years a wall divided Berlin. When it fell in 1989, Germany reunited within a year, but the East still feels different.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-11-hero.webp",
          alt: "Illustration of a long concrete wall covered in faded colourful murals beside a river in a city, with a watchtower in the distance.",
          caption: "A surviving stretch of the Berlin Wall, now covered in murals.",
          credit: "Illustration — not a photograph",
          prompt: "A long stretch of concrete wall covered in faded colourful abstract murals beside a river in a city, a concrete watchtower in the distance, autumn trees, soft afternoon light, historic and reflective, no people close up, no legible text or recognisable artworks." },
        { type: "timeline", head: "Division and unity", items: [
          ["13 Aug 1961", "East Germany seals the border in Berlin"],
          ["1963", "Kennedy in Berlin: 'Ich bin ein Berliner'"],
          ["Autumn 1989", "Mass protests in Leipzig and other cities"],
          ["9 Nov 1989", "The Wall opens"],
          ["18 Mar 1990", "East Germany's first free election"],
          ["3 Oct 1990", "Reunification"]
        ] },
        { type: "section", head: "Two Germanys", md:
          "After 1949 West Germany became a prosperous democracy anchored in NATO and the European Community, its 'economic miracle' built on the social market economy. East Germany, the GDR, was a one-party communist state under Soviet protection, with a vast secret police, the Stasi, which kept files on millions of citizens using a network of informers. By 1961 about 2.7 million East Germans had fled west, many through Berlin." },
        { type: "section", head: "The Wall", md:
          "On the night of 13 August 1961 the GDR sealed the border through Berlin with barbed wire, then a concrete wall, calling it an 'anti-fascist protection rampart'. It became the Cold War's starkest symbol. At least 140 people were killed trying to cross it, and hundreds more along the inner German border. Families were separated for decades, and West Berlin became an island of the West inside East Germany, supplied by road, rail and air corridors." },
        { type: "section", head: "1989", md:
          "In 1989 reforms in the Soviet Union under Mikhail Gorbachev, and Hungary's opening of its border with Austria, set off an exodus of East Germans. Hundreds of thousands marched in Leipzig and elsewhere chanting 'We are the people'. On 9 November a confused official announced at a press conference that border crossings were open, effective 'immediately'. Crowds surged to the checkpoints, the guards gave way, and Berliners climbed the Wall and began hacking at it." },
        { type: "section", head: "Unity in eleven months", md:
          "Chancellor Helmut Kohl seized the moment. East Germany held its first free election in March 1990, won by parties favouring rapid unity; a currency union in July gave East Germans the Deutsche Mark. The two Germanys and the four wartime Allies signed a treaty settling Germany's borders, and Kohl persuaded Gorbachev to accept a united Germany in NATO in return for financial aid. On 3 October 1990 the GDR's five states joined the Federal Republic under the Basic Law." },
        { type: "compare", head: "Two views of reunification",
          left: { head: "A success", md:
            "Peaceful revolution and swift unity brought freedom and prosperity to East Germans; living standards have converged a long way." },
          right: { head: "A takeover", md:
            "Many East Germans felt absorbed rather than united: industries collapsed, millions lost jobs, and westerners took the top posts." } },
        { type: "section", head: "Why it still matters", md:
          "Three decades on, the east is still poorer, older and less diverse than the west, and few easterners hold top jobs in business or government. Voting patterns differ sharply: the AfD won the most votes in eastern states in 2024, and the BSW, a left-populist party, also did best there. Understanding German politics today means understanding the legacy of 1990." }
      ],
      takeaways: [
        "East Germany built the Berlin Wall in 1961 after millions fled west; at least 140 people died trying to cross it.",
        "Peaceful protests and Soviet reforms led to the Wall's opening on 9 November 1989.",
        "Germany reunited on 3 October 1990, but the east remains poorer and votes differently."
      ],
      check: { q: "When did Germany reunify?",
        choices: ["9 November 1989", "3 October 1990", "1 January 1991"], answer: 1,
        explain: "The Wall opened in November 1989; formal reunification came on 3 October 1990, now German Unity Day." },
      sources: [
        { title: "Berlin Wall", publisher: "Britannica", url: "https://www.britannica.com/topic/Berlin-Wall", date: "n.d." },
        { title: "German reunification", publisher: "Britannica", url: "https://www.britannica.com/topic/German-reunification", date: "n.d." },
        { title: "Germany: The reunification of Germany", publisher: "Britannica", url: "https://www.britannica.com/place/Germany/The-reunification-of-Germany", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "de-4", kind: "players", asOf: "2026-09-28",
      title: "Merz, his partners and his challengers",
      dek: "A chancellor losing authority, a Social Democratic partner holding the purse, and a far-right party that has become the most popular in the country.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-4-hero.webp",
          alt: "Illustration of a modern glass-domed parliament building at dusk, with people walking on a spiral ramp inside the dome.",
          caption: "The Reichstag building in Berlin, home of the Bundestag. Its glass dome lets visitors look down on the chamber.",
          credit: "Illustration — not a photograph",
          prompt: "A grand stone parliament building with a modern glass dome at dusk, small silhouettes of visitors walking up a spiral ramp inside the lit dome, a wide lawn in front, soft blue sky, calm and civic, no flags or legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Friedrich Merz", role: "Chancellor and CDU leader, since May 2025",
            img: "img/de/portrait-merz.webp", source: "Official portrait via Wikimedia Commons (check for a CC BY-SA licence); confirm on the file page.",
            md: "A veteran conservative who lost a power struggle with Merkel in 2002, spent years in business and returned to lead the CDU in 2022. Promised a sharp change of course; now polls show only a small minority think he is the right chancellor." },
          { name: "Lars Klingbeil", role: "Vice-chancellor and finance minister (SPD)",
            img: "img/de/portrait-klingbeil.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Co-leader of the Social Democrats, who control the money in this coalition. His party wants investment and protection for pensions and workers; he is a key voice on whether the coalition survives." },
          { name: "Boris Pistorius", role: "Defence minister (SPD), since 2023",
            img: "img/de/portrait-pistorius.webp", source: "Bundeswehr / BMVg official photo via Wikimedia Commons; confirm the licence.",
            md: "For years Germany's most popular politician. Declared the army must be 'ready for war' and is running the biggest rearmament since the Cold War, including the new military service." },
          { name: "Alice Weidel", role: "AfD co-leader and parliamentary leader",
            img: "img/de/portrait-weidel.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "An economist who led the AfD to 20.8% in 2025 and, in September 2026 polls, to first place nationally. Wants to cut immigration drastically and restore ties with Russia; calls the ban debate an attack on voters." },
          { name: "Thorsten Frei", role: "Leader of the CDU/CSU group in the Bundestag",
            img: "img/de/portrait-frei.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Merz's former chief of staff, elected by 170 of 185 MPs present in July 2026 to replace Jens Spahn, who resigned. His job is keeping a restless parliamentary party behind the chancellor." },
          { name: "Heidi Reichinnek", role: "Die Linke parliamentary co-leader",
            img: "img/de/portrait-reichinnek.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A social-media-savvy leader credited with reviving the Left Party, which won 8.8% in 2025 and then came first in Berlin's state election in September 2026." }
        ] },
        { type: "section", head: "The AfD", md:
          "Founded in 2013 to oppose euro bailouts, the Alternative for Germany turned to immigration after 2015 and has moved steadily to the right. Germany's domestic intelligence service, the BfV, classified it as extremist in 2025, a label a court suspended in February 2026 while the case is heard. Its supporters see it as the only party taking their concerns about migration, prices and the war seriously. Its opponents point to leaders who play down Nazi crimes and to talk of mass 'remigration'." },
        { type: "section", head: "The firewall", md:
          "Every other party in the Bundestag has pledged not to govern with the AfD, a policy known as the [[firewall|Brandmauer]], or firewall. In January 2025 Merz, then in opposition, briefly passed a migration motion with AfD votes, drawing large street protests and a rebuke from Angela Merkel. He has since insisted the firewall stands. The question grows sharper as the AfD's share rises, because the more votes it takes, the harder it becomes to build a majority without it." },
        { type: "section", head: "The others", md:
          "The Greens, who governed with Scholz, are now in opposition with 85 seats. The liberal FDP, a governing party for much of post-war history, is out of parliament. And Sahra Wagenknecht's BSW, a party mixing left-wing economics with scepticism of migration and of aid to Ukraine, missed the 5% threshold in 2025 by fewer than 10,000 votes." }
      ],
      takeaways: [
        "Merz governs with the SPD, whose leaders hold the finance and defence ministries.",
        "The AfD, led by Alice Weidel, now tops national polls; every other party refuses to govern with it.",
        "A July 2026 reshuffle after Jens Spahn's resignation left Merz weaker inside his own party."
      ],
      check: { q: "What is the 'Brandmauer' in German politics?",
        choices: ["The debt brake", "The other parties' pledge not to govern with the AfD", "A border wall"], answer: 1,
        explain: "Brandmauer means 'firewall': the mainstream parties' refusal to form coalitions or rely on votes from the AfD." },
      sources: [
        { title: "2026 Merz government crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Merz_government_crisis", date: "2026-09" },
        { title: "Pressure Mounts on Germany's Merz After Fractious Reshuffle", publisher: "US News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-07-29/pressure-mounts-on-germanys-merz-after-fractious-reshuffle", date: "2026-07-29" },
        { title: "German Court Grants Injunction to AfD Party, Suspending 'Extremist' Label by Spy Agency", publisher: "US News / Reuters", url: "https://www.usnews.com/news/world/articles/2026-02-26/german-court-grants-injunction-to-afd-party-suspending-extremist-classification-by-spy-agency", date: "2026-02-26" },
        { title: "2025 German federal election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_German_federal_election", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "de-5", kind: "story", asOf: "2026-09-28",
      title: "Rearming Germany",
      dek: "A country that spent 30 years shrinking its army is now spending more on defence than any other in Europe, and asking its young men to sign up.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-5-hero.webp",
          alt: "Illustration of a row of new armoured vehicles in a factory hall, with workers in overalls inspecting them under bright lights.",
          caption: "Germany's defence industry is expanding fast to meet new orders.",
          credit: "Illustration — not a photograph",
          prompt: "A long, brightly lit factory hall with a row of new olive-green armoured vehicles on an assembly line, workers in overalls with tablets inspecting them, steel beams and cranes overhead, a sense of scale and urgency, no insignia or legible text." },
        { type: "section", head: "What happened", md:
          "In March 2025 the outgoing Bundestag amended the constitution so that defence spending above 1% of GDP no longer counts against the [[debt brake]], the rule that limits federal borrowing. That removed the ceiling on how much Germany can borrow for its armed forces.\n\n" +
          "The money followed quickly. The 2026 budget gives defence about €108 billion, including the last of Scholz's special fund, more than the UK or France spend. The government plans to reach 3.5% of GDP by 2029, in line with the target NATO allies set at their summit in The Hague in 2025." },
        { type: "facts", head: "By the numbers", rows: [
          ["Defence budget 2026", "About €108 billion"],
          ["Target", "3.5% of GDP by 2029"],
          ["Troops today", "About 180,000 active soldiers"],
          ["Troop goal", "260,000–270,000 active, and up to 470,000 with reserves, by 2035"],
          ["Military service", "New law in force since 1 January 2026"]
        ] },
        { type: "section", head: "The new military service", md:
          "Germany suspended conscription in 2011. A new law, passed by the Bundestag in December 2025, took effect on 1 January 2026. Every young man turning 18 must fill in a questionnaire about his fitness and willingness to serve, and men are again required to attend a medical examination. Service itself stays voluntary, with better pay to attract recruits. If volunteers fall short of targets, parliament can vote to make service compulsory.\n\n" +
          "One rule caused an uproar: men of military age must seek approval for long stays abroad, a Cold War-era provision revived by the law that many had forgotten existed." },
        { type: "section", head: "Why it happened", md:
          "German officials believe [[unit:ru]] could be able to attack a NATO country within a few years, and that the United States under Trump can no longer be relied on to defend Europe automatically. Germany's army had shrunk from nearly 500,000 in 1990 to under 200,000, with shortages of ammunition, spare parts and working equipment. Rebuilding it is also an industrial policy: defence orders support manufacturing jobs as the car industry struggles." },
        { type: "compare", head: "Two views of rearmament",
          left: { head: "Supporters", md:
            "Germany has a duty, as Europe's largest economy, to deter Russia and carry its share of NATO's burden. Peace in Europe depends on credible armies, and the Bundeswehr was in no state to fight." },
          right: { head: "Sceptics", md:
            "The debt will burden the young, whose schools and railways need money too. On the left and on the AfD's side, some argue that Germany should push for talks with Russia instead of a new arms race." } },
        { type: "section", head: "What's next", md:
          "The test is whether money becomes capability. Orders must turn into tanks, air-defence systems and ammunition, and the Bundeswehr must actually recruit. Germany is also stationing a permanent armoured brigade in Lithuania, on NATO's eastern flank, its first such permanent foreign deployment since the Second World War. Watch the recruitment figures: if volunteers fall short, the argument over compulsory service will return to the Bundestag." }
      ],
      takeaways: [
        "A 2025 constitutional change exempted most defence spending from the debt brake.",
        "Germany's 2026 defence budget of about €108 billion is Europe's largest, aiming at 3.5% of GDP by 2029.",
        "Since January 2026 young men must fill in a questionnaire and take a medical, though service stays voluntary."
      ],
      check: { q: "Under the law in force since 1 January 2026, is military service in Germany compulsory?",
        choices: ["Yes, for all men aged 18", "No: service stays voluntary, but men must fill in a questionnaire and take a medical", "No: the law applies only to reservists"], answer: 1,
        explain: "Service is voluntary for now. Parliament could vote to make it compulsory if not enough people volunteer." },
      sources: [
        { title: "Germany's €108.2 Billion 2026 Defense Budget Setting Stage for Historic Military Build-Up", publisher: "Overt Defense", url: "https://www.overtdefense.com/2025/08/11/germanys-e108-2%E2%80%AFbillion-2026-defense-budget-setting-stage-for-historic-military-build-up/", date: "2025-08-11" },
        { title: "Capability Vignette: Germany's Growing Defence Budget", publisher: "IISS", url: "https://www.iiss.org/publications/strategic-dossiers/the-defence-of-europe-in-a-new-era-an-assessment/capability-vignette-germanys-growing-defence-budget/", date: "2025" },
        { title: "German parliament approves conscription scheme to boost the Bundeswehr", publisher: "Defense News", url: "https://www.defensenews.com/global/europe/2025/12/05/german-parliament-approves-conscription-scheme-to-boost-the-bundeswehr/", date: "2025-12-05" },
        { title: "Military service returns to Germany: we outline the most important rules", publisher: "deutschland.de", url: "https://www.deutschland.de/en/topic/politics/new-military-service-bundeswehr", date: "2026" },
        { title: "Germany's new military conscription law sparks row over 'permission' to travel abroad", publisher: "EUobserver", url: "https://euobserver.com/210380/germany-army-draft-battle-ready-men-travel-abroad/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "de-6", kind: "story", asOf: "2026-09-28",
      title: "The East votes AfD",
      dek: "Three state elections in September 2026 gave the far right its biggest wins yet and pushed Merz's party to the margins in the east.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-6-hero.webp",
          alt: "Illustration of a small eastern German town square in autumn, with a polling-station sign-shaped blank board outside a town hall and a few people walking in.",
          caption: "In Saxony-Anhalt and Mecklenburg-Western Pomerania the AfD won by wide margins in September 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet small-town square in eastern Germany in autumn, a modest town hall with a blank board outside, a few voters in coats walking in, plane trees with yellow leaves, overcast sky, restored old houses beside a concrete block, no legible text or party logos." },
        { type: "section", head: "What happened", md:
          "On 6 September 2026 voters in Saxony-Anhalt gave the AfD 43.8% of the vote, far ahead of the CDU on 17.2%. The CDU, which had led the state for years, did not win a single constituency.\n\n" +
          "Two weeks later, on 20 September, the AfD won Mecklenburg-Western Pomerania with about 38%, while the CDU fell to 4.9%, below the threshold for entering the state parliament. The same day in Berlin, the Left Party, Die Linke, came first with 25.7%, ahead of the CDU on 18.8% and the AfD on 16.3%. Merz called the results a disaster, but said he would not resign." },
        { type: "facts", head: "September 2026 results", rows: [
          ["Saxony-Anhalt (6 Sep)", "AfD 43.8%, CDU 17.2%"],
          ["Mecklenburg-Vorpommern (20 Sep)", "AfD about 38%; CDU 4.9%, out of parliament"],
          ["Berlin (20 Sep)", "Linke 25.7%, CDU 18.8%, AfD 16.3%, Greens 14.3%, SPD 12.1%"],
          ["National polls (mid-Sep)", "AfD 28–29%, CDU/CSU about 20%"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The AfD has long been strongest in the former East, where incomes are lower, towns have lost young people to the west and trust in national institutions is weak. Its campaign focused on migration, the cost of living and opposition to supporting Ukraine's war effort. Many voters also wanted to punish Berlin: Merz's government had promised a fresh start but became known for infighting, a scandal around Jens Spahn and a badly received reshuffle over the summer.\n\n" +
          "Berlin showed a different protest: young, urban voters angry about rents turned to the Left Party." },
        { type: "section", head: "Why it matters", md:
          "Because every other party refuses to govern with the AfD, its victories force broad, awkward coalitions of everyone else, sometimes from the Left to the CDU. That feeds the AfD's claim that the establishment is ganging up against the voters. In the Bundesrat, state results shape what laws can pass. And nationally, a CDU at around 20% raises a question the party avoided until this summer: whether Merz is the right leader to take it into the next federal election, due by 2029." },
        { type: "section", head: "Should the AfD be banned?", md:
          "About 120 members of the Bundestag, from several parties, back asking the Constitutional Court to ban the AfD, as the Basic Law allows for parties that seek to abolish democracy. Only that court can ban a party, and it has done so only twice, in the 1950s. The effort was complicated in February 2026 when a court in Cologne suspended the intelligence service's 'extremist' label for the AfD until the case is decided." },
        { type: "compare", head: "The ban debate",
          left: { head: "For a ban application", md:
            "The Basic Law exists precisely to stop a party using democracy to dismantle it. If the evidence shows the AfD is extremist, the court should be asked to act before it wins power." },
          right: { head: "Against", md:
            "Banning the party backed by a quarter of voters would look like the establishment silencing its opponents, could fail in court, and would not make its voters' grievances go away." } },
        { type: "section", head: "What's next", md:
          "Watch Saxony-Anhalt, where coalition talks will test whether the parties can build a majority without the AfD. Watch the CDU, where talk of replacing Merz is no longer taboo, and the SPD, which must decide whether staying in government helps or hurts it. The next big tests come with more state elections in 2027." }
      ],
      takeaways: [
        "The AfD won 43.8% in Saxony-Anhalt and about 38% in Mecklenburg-Western Pomerania in September 2026.",
        "The CDU fell out of Mecklenburg-Western Pomerania's parliament, and the Left Party won Berlin.",
        "About 120 MPs back a ban application against the AfD, but only the Constitutional Court can decide."
      ],
      check: { q: "Who won Berlin's state election on 20 September 2026?",
        choices: ["The AfD", "The CDU", "Die Linke, the Left Party"], answer: 2,
        explain: "Die Linke came first in Berlin with 25.7%, more than double its 2023 score, while the AfD won in Mecklenburg-Western Pomerania the same day." },
      sources: [
        { title: "Far-right AfD landslide in German state piles pressure on federal government", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/07/afd-germany-economy-merz.html", date: "2026-09-07" },
        { title: "Chancellor Merz calls Germany state elections results a 'disaster,' as far-right surge again", publisher: "CNN", url: "https://www.cnn.com/2026/09/20/europe/berlin-mecklenburg-vorpommern-election-afd-intl", date: "2026-09-20" },
        { title: "Far left wins Berlin state election, far-right AfD in Germany's northeast", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/20/two-german-states-go-to-the-polls-after-far-right-gains", date: "2026-09-20" },
        { title: "2026 Berlin state election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Berlin_state_election", date: "2026-09" },
        { title: "AfD avoids immediate ban after German court suspends its 'extremist' status", publisher: "Brussels Signal", url: "https://brusselssignal.eu/2026/02/afd-avoids-immediate-ban-after-german-court-suspends-its-extremist-status/", date: "2026-02" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "de-7", kind: "story", asOf: "2026-09-28",
      title: "Can the engine restart?",
      dek: "Two years of recession, a car industry under pressure from China, US tariffs and a €500 billion bet on infrastructure.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-7-hero.webp",
          alt: "Illustration of a car factory at night with a half-empty car park and a single lit production hall.",
          caption: "Germany's carmakers face high costs at home and fierce competition from Chinese brands.",
          credit: "Illustration — not a photograph",
          prompt: "A large car factory at night seen from a distance, one production hall lit with a warm glow, a half-empty staff car park under sodium lamps, a railway siding with covered wagons, light rain, a mood of uncertainty, no logos or legible text." },
        { type: "section", head: "What happened", md:
          "Germany's economy shrank by 0.3% in 2023 and 0.2% in 2024, and grew just 0.3% in 2025. Forecasts for 2026 range from about 0.6%, from the European Commission, to 1.4%, from Goldman Sachs, which expects government spending to kick in. Unemployment has crept up, and big industrial names have announced job cuts." },
        { type: "section", head: "Why it happened", md:
          "Several blows landed at once. Cheap Russian gas disappeared after 2022, raising energy costs for heavy industry. [[unit:cn|China]], once a booming market for German cars and machines, now makes its own and exports electric cars that compete with German brands worldwide. The United States raised [[tariff|tariffs]]: under a deal struck in July 2025, most EU goods face a 15% US tariff. And at home, decades of low investment left creaking railways, slow internet and heavy bureaucracy." },
        { type: "section", head: "The response", md:
          "The March 2025 reform of the [[debt brake]] created a €500 billion fund, spread over twelve years, for roads, rail, bridges, energy grids, hospitals and digital networks, and let the states borrow a little more too. Merz's government has also promised to cut red tape, lower electricity costs for industry and speed up planning permissions.\n\n" +
          "Economists broadly welcomed the fund, but many warn that money alone won't help unless building permits, planning and labour shortages also improve, and some worry the government is using it to plug gaps in the regular budget." },
        { type: "facts", head: "By the numbers", rows: [
          ["Growth", "−0.3% (2023), −0.2% (2024), +0.3% (2025)"],
          ["2026 forecasts", "About 0.6% (European Commission) to 1.4% (Goldman Sachs)"],
          ["Infrastructure fund", "€500 billion over twelve years"],
          ["US tariff on most EU goods", "15%, under the July 2025 deal"]
        ] },
        { type: "compare", head: "What's holding Germany back?",
          left: { head: "The business view", md:
            "High energy costs, taxes and bureaucracy make Germany a hard place to invest. Cut red tape and costs, and the private sector will do the rest." },
          right: { head: "The investment view", md:
            "Years of austerity starved the country of infrastructure and skills. The state has to invest heavily, and the debt brake kept it from doing so for too long." } },
        { type: "section", head: "Why it matters", md:
          "Germany's weakness drags on the whole EU: many of its neighbours, from [[unit:pl|Poland]] to the Czech Republic, supply German factories. And economics feeds politics. Voters who feel poorer and see their town's plant cut jobs are more open to the AfD's message that the mainstream has failed. Merz promised that by the summer of 2026 people would feel things getting better; polls suggest most do not." },
        { type: "section", head: "What's next", md:
          "Watch whether the infrastructure and defence money actually gets spent, and whether growth picks up in 2027. Watch the car industry's plans for jobs and electric models, and any new rounds of US or Chinese trade measures. And watch the 2027 budget: the coalition partners disagree over pensions and welfare, and a budget row is exactly what brought down the last government." }
      ],
      takeaways: [
        "Germany's economy shrank in 2023 and 2024 and grew just 0.3% in 2025.",
        "Lost Russian gas, Chinese competition and US tariffs hit its industrial model at once.",
        "A €500 billion infrastructure fund is the government's big bet on a recovery."
      ],
      check: { q: "What did the March 2025 constitutional reform create besides looser defence borrowing?",
        choices: ["A sovereign wealth fund", "A €500 billion fund for infrastructure", "A new central bank"], answer: 1,
        explain: "The reform set up a €500 billion fund over twelve years for roads, rail, energy, hospitals and digital networks." },
      sources: [
        { title: "Economic forecast for Germany", publisher: "European Commission", url: "https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages-including-country-reports/germany/economic-forecast-germany_en", date: "2026" },
        { title: "Germany's Economy Is Forecast to Outperform in 2026", publisher: "Goldman Sachs", url: "https://www.goldmansachs.com/insights/articles/germanys-economy-is-forecast-to-outperform-in-2026", date: "2026" },
        { title: "Germany: the 2026 budget and rising debt", publisher: "OSW Centre for Eastern Studies", url: "https://www.osw.waw.pl/en/publikacje/analyses/2025-12-05/germany-2026-budget-and-rising-debt", date: "2025-12-05" },
        { title: "What Happened to Germany's Spending Boom?", publisher: "Charles Schwab", url: "https://www.schwab.com/learn/story/what-happened-to-germanys-spending-boom", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "de-12", kind: "spotlight", asOf: "2026-09-28",
      title: "'We can do this': 2015 and after",
      dek: "Angela Merkel let in about a million refugees. The decision reshaped Germany and helped make the AfD a major force.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-12-hero.webp",
          alt: "Illustration of a busy railway station hall with arched iron roof, travellers with backpacks and bags seen from behind, and volunteers at tables.",
          caption: "In September 2015 volunteers welcomed arrivals at stations such as Munich's.",
          credit: "Illustration — not a photograph",
          prompt: "A large railway station hall with a high arched iron-and-glass roof, travellers with backpacks and bags seen from behind walking along the platform, volunteers at tables with water and food, warm light, hopeful and crowded, no faces, no legible text." },
        { type: "facts", head: "The numbers", rows: [
          ["Asylum seekers arriving 2015–16", "About 1.2 million"],
          ["Largest group", "Syrians, followed by Afghans and Iraqis"],
          ["In work by 2025", "About two-thirds of the 2015 arrivals"],
          ["Poll: Germany should take fewer refugees", "38% in July 2015; 68% ten years later"],
          ["Ukrainian refugees since 2022", "More than 1 million"]
        ] },
        { type: "section", head: "The decision", md:
          "In the summer of 2015, hundreds of thousands of people fleeing the war in Syria and conflicts in Afghanistan and Iraq were crossing the Balkans toward Germany. On 31 August Chancellor Angela Merkel told reporters: 'Wir schaffen das', 'We can do this'. Days later, with thousands stranded in Hungary, she decided not to close Germany's border. Crowds applauded arrivals at Munich station, and a 'welcome culture' took hold. About 1.2 million people applied for asylum in 2015–16." },
        { type: "section", head: "The backlash", md:
          "The mood soured. On New Year's Eve 2015–16 hundreds of women reported sexual assaults and robberies by groups of men, many from North Africa, outside Cologne's cathedral. Islamist attacks followed, including a truck attack on a Berlin Christmas market in December 2016 that killed 12 people (13 counting a victim who died later). Merkel's conservative allies in Bavaria demanded limits. The EU struck a deal in 2016 paying Turkey to hold back migrants, and arrivals fell." },
        { type: "section", head: "Integration", md:
          "Ten years on, the picture is mixed. About two-thirds of those who arrived in 2015 are in paid work, and many of their children speak fluent German. But employment rates among refugee women remain low, and Germany's gap between citizens and non-EU residents in work is nearly double the EU average. More than a million Ukrainians arrived after 2022, and asylum applications rose again in 2023 before falling." },
        { type: "section", head: "The political shock", md:
          "The AfD, founded in 2013 as a party opposed to euro bailouts, turned into an anti-immigration party and entered the Bundestag in 2017 with 12.6%. After further attacks by asylum seekers in 2024–25, it won 20.8% in February 2025, its best result. Friedrich Merz's government has since tightened the border, turning back some asylum seekers, and suspended family reunification for some refugees." },
        { type: "compare", head: "Two verdicts",
          left: { head: "Defenders", md:
            "Germany did the humane thing in an emergency, and most refugees have built new lives, filling jobs in an ageing workforce." },
          right: { head: "Critics", md:
            "Opening the border without limits overwhelmed towns and services, fuelled crime fears and handed the far right its breakthrough." } },
        { type: "section", head: "Why it matters", md:
          "Migration remains the issue driving German politics, and 2015 is the reference point in every debate. Polls show that the share of Germans wanting fewer refugees has risen from 38% in 2015 to 68% ten years later. The mainstream parties, including Merkel's own Christian Democrats, have moved toward tighter controls, while Germany's ageing workforce still needs hundreds of thousands of immigrants a year, a tension no government has resolved." }
      ],
      takeaways: [
        "In 2015 Merkel kept Germany's border open; about 1.2 million people sought asylum in 2015–16.",
        "Attacks and fears about integration turned opinion; about two-thirds of the 2015 arrivals now work.",
        "The backlash helped the AfD grow from a fringe party to about a fifth of the vote in 2025."
      ],
      check: { q: "What did Merkel mean by 'Wir schaffen das'?",
        choices: ["'We will close the border'", "'We can do this', about taking in refugees", "'We will leave the EU'"], answer: 1,
        explain: "On 31 August 2015 Merkel said Germany could cope with the arrival of refugees, a phrase that came to define her policy." },
      sources: [
        { title: "Germany opened its doors to 1 million refugees a decade ago. Here's how sentiment has changed", publisher: "CNN", url: "https://www.cnn.com/2025/09/05/europe/germany-refugees-migration-changed-sentiment-intl-cmd", date: "2025-09-05" },
        { title: "Angela Merkel says 'Wir schaffen das' on accepting refugees", publisher: "History.com", url: "https://www.history.com/this-day-in-history/august-31/angela-merkel-says-wir-schaffen-das-on-accepting-refugees", date: "n.d." },
        { title: "Integrating refugees: Lessons from Germany since 2015–16", publisher: "World Bank", url: "https://thedocs.worldbank.org/en/doc/d3bf052f21b05b8b5f87f38b921dfd7e-0050062023/original/WDR-German-case-study-FINAL.pdf", date: "2023" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "de-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A chancellor on probation, a coalition held together by fear of the alternative, and a country spending big to change its luck.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de/de-8-hero.webp",
          alt: "Illustration of a wide river winding past vineyards and a castle on a hill under a mixed sky of sun and cloud.",
          caption: "Germany enters the autumn of 2026 with its political centre under more pressure than at any time since reunification.",
          credit: "Illustration — not a photograph",
          prompt: "A wide river winding through a valley of terraced vineyards, a medieval castle on a hilltop, a barge on the water, a sky half sunlit and half heavy with storm clouds, autumn colours, calm but uncertain, no people." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Merz's CDU/CSU–SPD coalition holds 328 of 630 seats, but his personal approval is very low; one September poll found just 14% think he is the right chancellor.\n" +
          "- **Opposition:** the AfD leads national polls at 28–29%, ahead of the Union's roughly 20%.\n" +
          "- **Defence:** about €108 billion in 2026, heading for 3.5% of GDP; voluntary military service with compulsory screening.\n" +
          "- **Economy:** modest growth expected in 2026 after two years of recession; the €500 billion infrastructure fund is starting to spend.\n" +
          "- **AfD's status:** the 'extremist' label is on hold in court; a ban application is debated but not filed." },
        { type: "section", head: "Can Merz survive?", md:
          "German chancellors are hard to remove: only the [[constructive vote of no confidence]] can do it, and the CDU/CSU and SPD would have to agree on a successor. More likely paths are pressure from inside the CDU to hand over before the 2029 election, or the coalition breaking up over a budget, which could force an early vote. Most analysts think neither governing party wants an early election while the AfD is leading the polls." },
        { type: "section", head: "Germany in the world", md:
          "Abroad, Germany is more central than ever. It is [[unit:ua|Ukraine's]] biggest European donor and a leader of Europe's rearmament, working closely with [[unit:fr|France]], [[unit:gb|the UK]] and [[unit:pl|Poland]]. Its relationship with Trump's [[unit:us|United States]] is strained over trade and Ukraine, and its companies are trying to reduce their dependence on [[unit:cn|China]] without losing its market." },
        { type: "section", head: "What voters want", md:
          "Polls suggest German voters' top worries are the economy and prices, migration, and the war in Ukraine, roughly in that order. Many want tighter borders; the government has turned back more asylum seekers at the border and tightened family reunification, but the AfD says it has not gone far enough. Many also want to keep helping Ukraine without being drawn into the war. Pensions matter too: Germany is ageing fast, and the question of who pays for retirement divides the coalition partners." },
        { type: "section", head: "What would change the picture", md:
          "A ceasefire in Ukraine could lower energy prices and take some heat out of the migration debate. A trade deal that eases US tariffs, or a rebound in China, would help German exporters. On the other side, a new wave of arrivals from the Middle East or another plant closure could push more voters toward the AfD." },
        { type: "section", head: "Three scenarios", md:
          "- **Recovery.** Growth picks up, the spending shows results, and the coalition limps to 2029 with the AfD's surge levelling off.\n" +
          "- **Change at the top.** The CDU replaces Merz mid-term with a more popular figure to fight the AfD.\n" +
          "- **Collapse.** A budget row or another state-election shock breaks the coalition, and an early election produces an even more fragmented parliament." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Autumn 2026:** coalition talks in Saxony-Anhalt, Mecklenburg-Western Pomerania and Berlin\n" +
          "- **Late 2026:** the 2027 federal budget\n" +
          "- **February 2027:** a special assembly elects the next federal president, as Steinmeier's term ends\n" +
          "- **2027:** more state elections; the court's ruling on the AfD's 'extremist' label" },
        { type: "section", head: "Connections", md:
          "Germany's story runs through [[unit:ru]] (gas and the war), [[unit:ua]] (aid), [[unit:us]] (NATO and tariffs), [[unit:cn]] (cars and trade), [[unit:fr]] (the Franco-German partnership that drives the EU), [[unit:pl]] (the eastern flank) and [[unit:tr]] (migration and a large Turkish-German community)." }
      ],
      takeaways: [
        "Merz's coalition still has a majority, but his own popularity and authority have collapsed.",
        "The AfD leads national polls; the mainstream parties still refuse to govern with it.",
        "Germany is spending big on defence and infrastructure to restore growth and security."
      ],
      check: { q: "What share of Germans told INSA in September 2026 that Merz is the right chancellor?",
        choices: ["About 14%", "About 40%", "About 60%"], answer: 0,
        explain: "Only 14% said so, one of the lowest ratings for a sitting chancellor, after his party's September state-election defeats." },
      sources: [
        { title: "Can Friedrich Merz's chancellorship survive?", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/in-depth-research-reports/issue-brief/can-friedrich-merzs-chancellorship-survive/", date: "2026" },
        { title: "Germany Under Friedrich Merz Has Lost Its Authority at Home and Abroad", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2026/09/24/germany-merz-authority-lost-elections-afd/", date: "2026-09-24" },
        { title: "Germany election: Merz's CDU shut out as AfD wins Mecklenburg-Vorpommern", publisher: "Axios", url: "https://www.axios.com/2026/09/21/germany-election-results-afd-merz", date: "2026-09-21" },
        { title: "A Troubled Merz Faces Crucial Elections in September", publisher: "Internationale Politik Quarterly", url: "https://ip-quarterly.com/en/troubled-merz-faces-crucial-elections-september", date: "2026" }
      ]
    }
  ]
});
