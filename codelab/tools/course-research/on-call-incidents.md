# On-Call & Incidents — Something Is Down

## Verdict
STANDALONE, SENIOR LEVEL, SECOND OF THE SIX. ~30 items / ~6–7h, `level: "Senior"`, id/prefix `oncall`.

WHAT IT IS NOT. Docker & Containers already ends with "repair a stack someone else broke" (docker/u8 p2),
CI/CD teaches reading a red run and rolling back by revert (cicd/u6–u7), and Cloud Platforms teaches
logs/metrics/traces, SLOs and error budgets in theory (cloud/u6–u7). This course does not re-teach any
of that. It teaches what those courses leave out: **responding**. Deciding how bad it is, stopping the
damage before understanding it, finding the cause with incomplete information, keeping people
informed, and writing it up so it doesn't happen again.

WHY SENIOR. Every ladder read for `senior-curriculum.md` puts production ownership at senior: GitLab's
Senior Backend joins Tier 2/3 on-call; senior playbooks say "run postmortems on incidents you didn't
cause". The simulator teaches diagnosis and mitigation; the senior sheets still list real on-call time
as an off-platform requirement, because only production teaches the pager.

WHAT THE RESEARCH SAYS TO TEACH.
- **Mitigate first, root-cause second.** Google: "first stop the impact of an incident, and then find
  the root cause"; "you aren't helping your users if the system dies while you're root-causing." Google
  SRE keeps a closed set of *generic mitigations*: roll back, drain traffic, restart, add capacity.
- **What touched it last.** Google's SRE book: roughly 70% of outages are due to changes in a live
  system; recent changes are "a productive place to start". So the first question in every lab is
  "what changed?", answered from a deploy log.
- **Severity, decided fast.** PagerDuty's public incident docs: lower number = more urgent; anything
  above SEV-3 is a major incident; **if unsure, treat it as the higher one** and argue about it in the
  postmortem, not during the incident.
- **Roles.** Google's IMAG: Incident Commander (coordinates, decides), Operations lead (hands on the
  system), Communications lead (status updates); a Planning role for long incidents. One person can
  hold several roles in a small incident.
- **Updates on a cadence.** PagerDuty: status updates every 20–30 minutes for a major incident, even
  when there's nothing new; it keeps the responders from being interrupted.
- **Troubleshooting is hypothesis and test** (Google's "Effective troubleshooting": triage, examine,
  diagnose, test, treat), and negative results count.
- **Blameless postmortems.** Google's postmortem culture: summary, impact, timeline, root cause and
  contributing factors, what went well, action items with an owner, a priority and a verifiable end
  state. "Human error" is where the analysis starts, not where it ends.
- **On-call load is a design problem.** Google targets at most two distinct incidents per 12-hour shift;
  above that, nobody has time to follow up, and one incident is one problem however many alerts fired.

## Status (2026-10-05)
BUILT: all seven units, 24 items: 7 concept lessons, 9 shell labs, 2 incident projects, 6 quizzes.
Engine: `sort -k/-t` (and refusing unknown sort options), hidden checkpoints, `restart` on
`T.container`. Every order check (look before touching, verify after mitigating, prove the canary
before the swap, leave healthy services alone) was tested against a wrong response that must fail.
Smaller than planned (24 items, ~4h, 2 credits vs ~30, ~7h, 4): the communication and postmortem
units are theory, and the labs are short by design; the plan's 4 credits were a guess.
Not built: a postmortem *review* lesson (the review kind's categories are about code), and
"drain traffic" as a lab (dockersim has no load balancer); both are taught as concepts.

## Size
~30 items, ~6–7h. 7 units: theory and quizzes in Units 1, 5 and 6; shell labs in 2–4; two incident
projects in 7. Planned credits stay 4 `{ ops: 3, arch: 1 }` until the content says otherwise.

## Engine needs
NO NEW SIMULATOR. Everything runs on shell.js + dockersim.js, with two small additions:

(a) `sort -k N` and `-t SEP` in shell.js (~15 lines + tests). Today `sort -k5 -n` silently ignores the
key and sorts whole lines, which is a quietly wrong answer to "which requests were slowest?" — the
kind of thing the shell's own README promises never to do. Fix it, test it in tools/test-shell.js.

(b) Hidden checkpoints: `hidden: true` on a step (the senior lesson format from senior-curriculum.md).
Its text shows as "Hidden check" until it passes or the lesson is done; a failure shows only its
message, which authors write as a nudge, not a solution. ~15 lines in app.js's paintChecks.

GRADING ORDER, NOT JUST STATE. `T.commands` is the learner's commands in order, so a checkpoint can ask
"did service come back before you started changing configuration?" — the rollback's index is lower
than the first edit's. That is the course's central habit, graded directly.

## Teachable today
All of it, once (a) and (b) land (both small).
- Log triage: `grep -c`, `grep | head -n 1` (when did it start), `cut -d' ' -fN | sort | uniq -c |
  sort -rn` (which endpoint), `sort -n` / `sort -k` (slowest), joined with a `deploys.log`.
  grep is fixed-string only in shell.js; lessons use fixed strings (" 500 ").
- Containers: a new image tag crash-loops (`restart: always`, missing env var, exit 1, rising restart
  count); `docker ps -a`, `docker logs`, `docker images`, roll back by running the previous tag,
  verify with `curl`. Dependencies: an app that's up but answers 503 because its database is down or
  misaddressed (`/health` → ECONNREFUSED / ENOTFOUND).
- Communication and postmortems: concept lessons with picks and orders, plus `explain` asks graded by
  rubric (claims, never mixed into the score).

## Overlaps
- docker/u5–u8 (ports, networks, compose, the broken-stack project): the mechanics are assumed here.
- cicd/u6 rollback by revert: here rollback is "run the last good image", the fastest generic mitigation.
- cloud/u6–u7 (signals, SLOs, error budgets): referenced, not repeated; severity here leans on them.
- Academy's System Design track, Unit 11 (Reliability) and 12 (Observability): the quiz versions.

## Units
1. **The first five minutes** (concept ×2, quiz): what an incident is; severity, and "if unsure, the
   higher one"; roles; mitigate before you understand; what changed?
2. **Reading the logs** (shell ×4, quiz): how bad, since when, which endpoint, what changed.
3. **Stop the bleeding** (shell ×4, quiz): a crash loop; restarting doesn't fix a deterministic crash;
   roll back to the last good tag; verify from the outside.
4. **It's up, but it's broken** (shell ×3, quiz): health checks and dependencies; the error is in
   one service, the cause in another.
5. **Keeping people informed** (concept ×2, quiz): status updates, cadence, handoffs, the IC.
6. **The postmortem** (concept ×2, quiz): blameless, timeline, contributing factors, action items.
7. **Two incidents** (shell projects ×2): end to end, with hidden checks: mitigate first, find the
   change, verify, then fix forward.

## Risks
- RE-TEACHING DOCKER. Every lab must be about the response, not the command. Briefs assume the Docker
  course; checks grade decisions (order, verification) as much as end state.
- FAKE URGENCY. A simulator has no clock. Order of actions stands in for time; don't pretend to time.
- GAMEABLE ORDER CHECKS. "Rolled back before editing" passes if you never edit. Pair each order check
  with an end-state check (the right image running, the endpoint answering).
- OVER-CLAIMING. The course teaches diagnosis on a simulator. The senior sheets keep "time on a real
  on-call rotation" off-platform, and the course says so in Unit 1.

## Sources
- Google SRE book, Introduction (~70% of outages from changes): https://sre.google/sre-book/introduction/
- Google SRE book, Managing incidents (roles): https://sre.google/sre-book/managing-incidents/
- Google SRE workbook, Incident response (mitigate first; generic mitigations): https://sre.google/workbook/incident-response/
- Google SRE book, Effective troubleshooting: https://sre.google/sre-book/effective-troubleshooting/
- Google SRE book, Being on-call (two incidents per shift): https://sre.google/sre-book/being-on-call/
- Google SRE workbook, Postmortem culture: https://sre.google/workbook/postmortem-culture/
- PagerDuty incident response docs, Severity levels: https://response.pagerduty.com/before/severity_levels/
- PagerDuty incident response docs, During an incident (update cadence): https://response.pagerduty.com/during/during_an_incident/
- PagerDuty incident response docs, Different roles: https://response.pagerduty.com/before/different_roles/
