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
