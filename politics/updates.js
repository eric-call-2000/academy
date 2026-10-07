/* ============================================================
   Political Academy — dispatches
   ------------------------------------------------------------
   Politics keeps moving after a unit ships. A dispatch is a short,
   dated update added here between full rewrites: it shows under
   "What's new" on Today and at the top of its country's page, and
   finished briefings are never rewritten just to add it.

   Add one per event, newest anywhere (the app sorts by date):

   window.POLITICS.addUpdate({
     id: "us-2026-11-04-midterms",         // unique, never reused
     unit: "us",                           // country id
     date: "2026-11-04",
     title: "Midterm results",
     md: "Two or three short paragraphs, same markup as briefings.",
     sources: [{ title: "…", publisher: "…", url: "https://…", date: "2026-11-04" }]
   });

   When the unit's "Where things stand" briefing is next rewritten,
   fold the dispatch into it and delete it from here.
   ============================================================ */

window.POLITICS.addUpdate({
  id: "br-2026-10-05-first-round",
  unit: "br",
  date: "2026-10-05",
  title: "First round: Flávio Bolsonaro ahead, runoff with Lula on 25 October",
  md:
    "Senator Flávio Bolsonaro finished first in the first round of Brazil's presidential election on 4 October, ahead of President Luiz Inácio Lula da Silva. With 99.96% of polling stations counted, Flávio had 47.04% of valid votes and Lula 45.15%, The Rio Times reported from the electoral court's count. Neither reached the 50% of valid votes needed to win outright, so the two meet in a runoff on 25 October.\n\n" +
    "The result surprised many: final polls had put Lula about 3 points ahead, according to CNBC. Flávio called his first-place finish \"the end of the PT era\"; Lula told supporters he had been \"convinced I would win the election in the first round\". The Washington Post noted that Flávio also won Minas Gerais, a state that has voted for the winner of every presidential election since 1989.\n\n" +
    "In the governors' races, São Paulo re-elected Tarcísio de Freitas in the first round with about 62.7% against 36.4% for Fernando Haddad of Lula's Workers' Party, The Rio Times reported. The runoff is expected to turn on voters who backed eliminated candidates and on turnout among those who stayed home.",
  sources: [
    { title: "Bolsonaro and Lula head to runoff: 5 takeaways from Brazil's election", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2026/10/04/bolsonaro-lula-head-runoff-5-takeaways-brazils-election/", date: "2026-10-04" },
    { title: "Brazil election headed to runoff, projection shows, as Bolsonaro lead narrows", publisher: "CNBC", url: "https://www.cnbc.com/2026/10/04/brazil-presidential-election-lula-bolsonaro.html", date: "2026-10-04" },
    { title: "Flávio and Lula head to Brazil runoff, 99.9% counted", publisher: "The Rio Times", url: "https://www.riotimesonline.com/brazil-election-first-round-results-lula-flavio-2026/", date: "2026-10-05" },
    { title: "Tarcísio 62.7% in São Paulo, Rio likely runoff", publisher: "The Rio Times", url: "https://www.riotimesonline.com/brazil-governor-results-sao-paulo-rio-minas-2026/", date: "2026-10-05" },
    { title: "Brazil election runoff takeaways", publisher: "CNN", url: "https://www.cnn.com/2026/10/05/americas/brazil-election-runoff-takeaways-intl-hnk", date: "2026-10-05" }
  ]
});

window.POLITICS.addUpdate({
  id: "ca-2026-10-06-quebec",
  unit: "ca",
  date: "2026-10-06",
  title: "Quebec: Parti Québécois wins a minority, referendum promise intact",
  md:
    "The sovereigntist Parti Québécois (PQ) won Quebec's provincial election on 5 October and will form a minority government under Paul St-Pierre Plamondon. CBC News projected 59 seats for the PQ, five short of a majority in the 127-seat National Assembly, up from 3 in 2022. The Liberals of Charles Milliard become the official opposition with about 40 seats; the Conservatives of Éric Duhaime won about 19 and Québec solidaire about 9, CBC reported. The Coalition Avenir Québec, in power since 2018, was wiped out: it won no seats and its leader, Premier Christine Fréchette, lost her own. CNN noted the PQ won with less than 30% of the popular vote.\n\n" +
    "St-Pierre Plamondon campaigned on holding a third referendum on independence, after those of 1980 and 1995; U.S. News & World Report (Reuters) reported he has promised to hold it once Donald Trump leaves office. Without a majority, the Globe and Mail reported, the PQ would need support from other parties or individual members both to call a referendum and to stay in power.\n\n" +
    "Prime Minister Mark Carney congratulated St-Pierre Plamondon and said Ottawa would work with the new government: \"Building a stronger Québec is core to our mission of building a stronger Canada,\" he said, according to CNN, naming support for workers hit by U.S. tariffs, jobs and housing. In his victory speech, St-Pierre Plamondon said he would be \"direct\" and \"transparent\" with Ottawa, CBC reported.",
  sources: [
    { title: "Quebec election: Parti Québécois will form minority government, CBC News projects", publisher: "CBC News", url: "https://www.cbc.ca/news/canada/montreal/livestory/quebec-election-2026-results-9.7369473", date: "2026-10-05" },
    { title: "PQ in power, CAQ wiped off the map: Key takeaways from Quebec's election", publisher: "CBC News", url: "https://www.cbc.ca/news/canada/montreal/parti-quebecois-victory-quebec-election-2026-9.7370571", date: "2026-10-06" },
    { title: "Parti Québécois to form minority government in Quebec, setting up referendum fight", publisher: "The Globe and Mail", url: "https://www.theglobeandmail.com/canada/article-provincial-quebec-election-winner-parti-quebecois/", date: "2026-10-06" },
    { title: "Quebec separatists vowing independence vote win provincial election but fall short of majority", publisher: "CNN", url: "https://www.cnn.com/2026/10/06/americas/quebec-separatist-party-elections-result-win-intl-hnk", date: "2026-10-06" },
    { title: "Quebec election win for separatists could crimp Carney's response to Trump", publisher: "U.S. News & World Report (Reuters)", url: "https://www.usnews.com/news/world/articles/2026-10-05/quebec-heads-to-the-polls-with-focus-more-on-trump-than-independence", date: "2026-10-05" }
  ]
});
