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

window.POLITICS.addUpdate({
  id: "ca-2026-10-20-alberta",
  unit: "ca",
  date: "2026-10-20",
  title: "Alberta votes to stay in Canada",
  md:
    "Albertans voted by about three to one on 19 October to remain in Canada rather than start the legal process towards a binding referendum on leaving. CBC News projected the result on election night. With more than 1.5 million votes counted, about 76% backed remaining and close to 24% backed beginning a process towards separation, according to unofficial Elections Alberta results reported by NBC News. The vote was non-binding. Elections Alberta had about 3.1 million eligible electors on its list and had predicted turnout of around 85%; the final turnout had not been published when this was written.\n\n" +
    "Nine other questions on immigration and the Constitution were still being counted on 20 October. In CBC's early-morning tally, eight of the nine had majority \"yes\" votes: the immigration questions were at roughly 57–58% yes and a proof-of-citizenship question at about 63%. The constitutional questions were closer, at about 51–53%, and the question on opting out of federal programmes was tight. CBC described these figures as unconfirmed.\n\n" +
    "Premier Danielle Smith, who campaigned for the remain side while urging a yes on the other questions as leverage in talks with Ottawa, welcomed the result; news reports on 20 October quoted her as saying \"Albertans have voted for a stronger Alberta in a united Canada\". Before the vote she had promised not to hold another independence referendum if the remain side won, CTV News reported. Prime Minister Mark Carney said in a statement that \"Albertans made a clear choice\" and \"chose unity\", the Globe and Mail and GB News reported. Keith Wilson, a leader of the separatist campaign, was quoted saying the numbers could still \"fluctuate\" before final results.",
  sources: [
    { title: "Alberta votes to stay in Canada, CBC News projects. Results on other 9 questions still being tallied", publisher: "CBC News", url: "https://www.cbc.ca/news/canada/edmonton/livestory/alberta-referendum-results-live-updates-separatism-october-19-2026-9.7387777", date: "2026-10-20" },
    { title: "Alberta rejects move toward independence from Canada in a victory for Carney", publisher: "NBC News", url: "https://www.nbcnews.com/world/north-america/alberta-voters-reject-move-independence-canada-cbc-projects-rcna604527", date: "2026-10-20" },
    { title: "Alberta referendum results: Majority vote to reject question on separation, Carney says they 'chose unity'", publisher: "The Globe and Mail", url: "https://www.theglobeandmail.com/canada/article-alberta-referendum-vote-2026-live-updates/", date: "2026-10-20" },
    { title: "PM Carney hails early results showing Alberta voting to stay in Canada", publisher: "UPI", url: "https://www.upi.com/Top_News/World-News/2026/10/20/canada-Alberta-referendum/3911792477909/", date: "2026-10-20" },
    { title: "Alberta independence referendum: Carney declares Albertans have made 'clear choice'", publisher: "GB News", url: "https://www.gbnews.com/news/world/alberta-independence-referendum-canadian-prime-minister-mark-carney-declares-clear-choice", date: "2026-10-20" },
    { title: "'Yes I do': Alberta Premier Smith promises not to hold later separation referendum if remain side wins October vote", publisher: "CTV News", url: "https://www.ctvnews.ca/politics/article/yes-i-do-alberta-premier-smith-promises-not-to-hold-later-separation-referendum-if-remain-side-wins-october-vote/", date: "2026" }
  ]
});
