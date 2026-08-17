window.ACADEMY.addUnit("sysdesign", {
  id: "unit-12",
  title: "Observability",
  color: "#eab308",
  icon: "\u{1F52D}",
  description: "You cannot operate what you cannot see, and dashboards are not the same as understanding.",
  lessons: [
    {
      id: "l89",
      title: "Monitoring vs observability",
      intro: "Why watching known dashboards is a different discipline from being able to ask a brand new question of a live system.",
      questions: [
        {
          type: "mcq",
          q: "A team already charts request rate and error rate. Which need is served better by observability than by classic monitoring?",
          choices: [
            "Confirming that the nightly batch job finished on schedule",
            "Displaying CPU utilization for every host on a wall screen",
            "Asking why checkout is slow only for one app version in one region",
            "Paging the on-call when the error rate crosses a fixed threshold"
          ],
          answer: 2,
          explain: "The first, second and fourth are known questions with pre-built answers. The third is a new question invented during an investigation, which is exactly what observability is for."
        },
        {
          type: "truefalse",
          q: "The term observability is borrowed from control theory, where it means inferring a system's internal state from its external outputs.",
          answer: true,
          explain: "Rudolf Kalman's control-theory definition is about reconstructing internal state from outputs. Software borrowed the word for the same idea: your telemetry is the only output you get."
        },
        {
          type: "fill",
          q: "Observability is mostly about answering questions you did not anticipate, which is why high-____ fields such as request id or user id are so valuable.",
          answer: "cardinality",
          accept: ["cardinality", "Cardinality", "cardinality fields"],
          explain: "High-cardinality fields have many distinct values, so they let you slice down to the exact failing population. They are also the expensive ones to store, which is the real trade-off."
        },
        {
          type: "match",
          q: "Match each telemetry type to what it actually is.",
          pairs: [
            ["Log", "A timestamped record of one discrete event"],
            ["Metric", "A numeric measurement aggregated over time"],
            ["Trace", "A causal tree of spans following one request across services"]
          ],
          explain: "These are often called the three pillars, but they are really three encodings of the same events with different cost and query shapes."
        },
        {
          type: "mcq",
          q: "Which statement best captures the difference between monitoring and observability?",
          choices: [
            "Monitoring uses logs while observability uses metrics",
            "Monitoring answers questions you knew to ask; observability lets you ask new ones",
            "Monitoring is for developers; observability is for the operations team",
            "Monitoring runs in production; observability runs only in staging"
          ],
          answer: 1,
          explain: "Monitoring is the pre-registered set of known questions. Observability is the property that lets you interrogate the system about failures nobody predicted."
        },
        {
          type: "order",
          q: "Order the steps of investigating a failure mode nobody predicted.",
          items: [
            "Notice a symptom, such as elevated latency on one endpoint",
            "Slice that same symptom by version, region and client to see where it concentrates",
            "Form a hypothesis from what those slices show about the affected population",
            "Confirm the hypothesis by pulling a trace of one affected request"
          ],
          explain: "The loop is observe, slice, hypothesize, confirm. Each step here names the output of the one before it, so the sequence is fixed. Systems that only support pre-aggregated charts stall you at the second step."
        },
        {
          type: "mcq",
          q: "A vendor claims their product delivers observability just by installing an agent. What is the most accurate response?",
          choices: [
            "Agents cannot collect any useful telemetry without code changes",
            "Observability is a purchasable product, so installing it is sufficient",
            "Agents remove the need for any application-specific instrumentation",
            "Auto-instrumentation is a real head start, but domain fields still need deliberate work"
          ],
          answer: 3,
          explain: "Agents can capture generic HTTP and database spans. They cannot know that cart_id, plan_tier or shard_id are the dimensions your outages actually split along."
        }
      ]
    },
    {
      id: "l90",
      title: "Structured logging and what to log",
      intro: "How to emit log lines a machine can query, and which fields must never appear in them.",
      questions: [
        {
          type: "mcq",
          q: "What makes a log line structured?",
          choices: [
            "It is written in a fixed column order so humans can scan it quickly",
            "It carries named key-value fields that machines can parse and index",
            "It is compressed before it is written to disk or shipped",
            "It always includes both a severity level and a timestamp"
          ],
          answer: 1,
          explain: "Structure means named fields, typically emitted as JSON or key-value pairs. Levels and timestamps are useful but plenty of unstructured logs have them too."
        },
        {
          type: "truefalse",
          q: "Because logs live in a separate system from the database, it is acceptable to log a full credit card number while debugging a payment bug.",
          answer: false,
          explain: "Never log secrets or PII. Log stores are broadly readable, retained for a long time, and replicated to third parties, so a log line is one of the worst places to put sensitive data."
        },
        {
          type: "fill",
          q: "Attaching a shared ____ id to every line emitted while handling one request lets you reassemble that request's story across services.",
          answer: "correlation",
          accept: ["correlation", "request", "trace"],
          explain: "Whether you call it a correlation id, request id or trace id, one identifier threaded through every hop turns scattered lines into a single narrative."
        },
        {
          type: "mcq",
          q: "Your service logs an INFO line per successful request and the log bill is now the largest line item. What is the best first move?",
          choices: [
            "Sample the high-volume success logs and keep every error log",
            "Switch the logger to DEBUG level so the lines come out shorter",
            "Stop logging errors, since metrics already count them",
            "Move all logging onto a background thread to reduce the cost"
          ],
          answer: 0,
          explain: "Success logs are highly redundant and errors are rare and informative, so sample the former and keep the latter. DEBUG is more verbose, not less, and a background thread changes latency, not volume."
        },
        {
          type: "match",
          q: "Match each log level to the situation it is meant for.",
          pairs: [
            ["ERROR", "Something failed and a human or a retry has to deal with it"],
            ["WARN", "Something unexpected happened but the request still succeeded"],
            ["DEBUG", "Detail useful only while diagnosing, usually disabled in production"]
          ],
          explain: "Levels are a routing decision, not a mood. If everything is ERROR then nothing is, and the on-call learns to ignore the stream."
        },
        {
          type: "truefalse",
          q: "Logs and metrics are interchangeable: any question you can answer with one you can answer just as cheaply with the other.",
          answer: false,
          explain: "Metrics are cheap per event but limited in cardinality. Logs carry arbitrary detail per event but cost far more to store and scan. The choice is a cost and cardinality trade-off."
        },
        {
          type: "order",
          q: "Order the steps for adding a new field to a log line safely.",
          items: [
            "Decide which investigation question the field will answer",
            "Check that the value contains no secrets or personal data",
            "Emit it as a named key-value field rather than string concatenation",
            "Verify it is indexed and queryable in the log backend"
          ],
          explain: "A field that is not queryable is decoration, and a field that leaks PII is a liability. Both checks belong before the code merges."
        }
      ]
    },
    {
      id: "l91",
      title: "Metrics: counters, gauges, histograms",
      intro: "The three instrument types, what each one can and cannot express, and how labels blow up your bill.",
      questions: [
        {
          type: "match",
          q: "Match each metric instrument to its behavior.",
          pairs: [
            ["Counter", "A value that only increases, or resets to zero on restart"],
            ["Gauge", "A value that can rise and fall, such as queue depth"],
            ["Histogram", "Observations bucketed by value so quantiles can be computed"]
          ],
          explain: "Picking the wrong instrument makes the data wrong in a way no dashboard will reveal: a counter used as a gauge, for example, cannot represent a decrease."
        },
        {
          type: "mcq",
          q: "Which instrument is correct for the number of items currently sitting in a work queue?",
          choices: [
            "A counter, because the queue keeps receiving new work over time",
            "A histogram, because you mainly want the average queue length",
            "A gauge, because the value moves up and down over time",
            "A counter that is incremented negatively when items are removed"
          ],
          answer: 2,
          explain: "Queue depth goes both ways, so it is a gauge. The fourth option is the common mistake: counters are monotonic by definition and backends assume that when computing rates."
        },
        {
          type: "truefalse",
          q: "You usually do not graph a counter's raw value; you graph its rate of change over time.",
          answer: true,
          explain: "A cumulative count climbing forever tells you almost nothing. Requests per second, derived from that counter, is the number people actually reason about."
        },
        {
          type: "fill",
          q: "Because a counter resets to zero when a process restarts, query languages provide a ____ function that accounts for the reset when computing per-second change.",
          answer: "rate",
          accept: ["rate", "rate()", "irate"],
          explain: "A naive difference would go sharply negative across a restart. Rate functions detect the reset and treat it as a counter rollover instead."
        },
        {
          type: "mcq",
          q: "Why do experienced teams warn against adding a label such as user_id to a metric?",
          choices: [
            "Most metrics backends do not support string-valued labels at all",
            "String labels cannot be stored alongside numeric samples",
            "Labels may only be attached to counters, never to gauges or histograms",
            "Each distinct label value creates its own time series, so cost explodes"
          ],
          answer: 3,
          explain: "This is cardinality explosion. A million users means a million series, each with its own storage and index. High-cardinality identifiers belong in logs and traces, not in metric labels."
        },
        {
          type: "truefalse",
          q: "Histogram buckets are chosen in advance, so a poor bucket layout permanently limits the precision of percentiles computed from that data.",
          answer: true,
          explain: "If every real latency lands in one wide bucket, the quantile estimate is interpolation inside that bucket. You cannot recover resolution you never recorded."
        },
        {
          type: "mcq",
          q: "You run twenty replicas, each exporting latency. Which approach yields a correct fleet-wide p99?",
          choices: [
            "Sum the histogram buckets across replicas, then compute the quantile",
            "Take the arithmetic mean of each replica's reported p99",
            "Take the maximum of each replica's reported p99",
            "Compute p99 only on the replica that served the most traffic"
          ],
          answer: 0,
          explain: "Bucket counts are additive, so histograms merge correctly. Pre-computed quantiles do not: averaging or maxing p99 values gives a number with no statistical meaning."
        }
      ]
    },
    {
      id: "l92",
      title: "Percentiles, and why averages lie",
      intro: "What p99 actually promises, why the mean hides it, and how the tail dominates any system that fans out.",
      questions: [
        {
          type: "mcq",
          q: "Average latency is 40 ms and users keep complaining that the app is slow. What is the likeliest explanation?",
          choices: [
            "The average is being computed over the wrong time window",
            "A small fraction of requests are very slow and the mean hides them",
            "Latency is being reported in the wrong unit of measurement",
            "Users are comparing you to a competitor rather than to a target"
          ],
          answer: 1,
          explain: "Averages hide the tail. A handful of multi-second requests barely move a mean computed over millions of fast ones, but those are the requests users remember."
        },
        {
          type: "truefalse",
          q: "If p99 latency over a window is 800 ms, then 1 percent of requests in that window took longer than 800 ms.",
          answer: true,
          explain: "That is the definition: the 99th percentile is the value below which 99 percent of observations fall, so the remaining 1 percent are slower."
        },
        {
          type: "fill",
          q: "You cannot average percentiles across shards; to get a correct global figure you must merge the underlying ____ first.",
          answer: "histograms",
          accept: ["histograms", "histogram", "buckets", "distributions", "distribution"],
          explain: "Percentiles are not linear, so they do not average. Bucket counts are additive, so merging histograms and then computing the quantile is the correct order."
        },
        {
          type: "order",
          q: "Order these latency statistics from smallest to largest for the same set of requests.",
          items: ["p50", "p90", "p99", "p99.9"],
          explain: "Percentiles are non-decreasing by definition, so this ordering always holds. If a dashboard shows p99 below p90, something is wrong with the aggregation."
        },
        {
          type: "mcq",
          q: "A page renders only after fanning out to 50 backend calls in parallel, each with a p99 of 100 ms. What should you expect?",
          choices: [
            "Page p99 stays near 100 ms because the calls run in parallel",
            "Page p99 is roughly 50 times 100 ms, since the delays accumulate",
            "A large share of page loads wait on at least one slow call, so the tail dominates",
            "The slow calls cancel each other out because they are independent"
          ],
          answer: 2,
          explain: "With 50 independent calls, the chance none exceeds its p99 is about 0.99 to the 50th, roughly 60 percent, so about 40 percent of page loads hit at least one tail call. This is the core argument of Dean and Barroso's paper The Tail at Scale."
        },
        {
          type: "truefalse",
          q: "Tracking maximum latency instead of p99 is a better default, because the maximum captures the very worst user experience.",
          answer: false,
          explain: "The maximum is a single sample, so one paused garbage collector or one stalled disk moves it wildly. Percentiles are far more stable and still describe real users. Track the max as a supplement, not a replacement."
        },
        {
          type: "mcq",
          q: "What is the strongest reason to write an SLO as a percentile rather than as an average?",
          choices: [
            "Percentiles are computationally cheaper than averages to maintain",
            "Averages are mathematically undefined when traffic is low",
            "Percentiles are simply easier to explain to executives",
            "A percentile promises something about a share of real requests, which is what users feel"
          ],
          answer: 3,
          explain: "An SLO is a promise about experience. Saying 99 percent of requests finish under 300 ms binds you to actual requests; a mean lets a bad tail hide behind a good middle."
        }
      ]
    },
    {
      id: "l93",
      title: "Distributed tracing: spans, trace context, sampling",
      intro: "How one request is reconstructed across many services, and what has to travel with it for that to work.",
      questions: [
        {
          type: "mcq",
          q: "What is a span?",
          choices: [
            "A single timed operation with a name, a start, an end and a parent",
            "The complete record of one request across all services involved",
            "A sampled subset of the log lines belonging to one service",
            "A metric time series scoped to one endpoint of one service"
          ],
          answer: 0,
          explain: "A span is one unit of work. The whole request is the trace, which is the tree formed by all spans sharing a trace id. Google's Dapper paper introduced this model."
        },
        {
          type: "truefalse",
          q: "Every span in one trace shares the same trace id, and every span except the root records the id of its parent span.",
          answer: true,
          explain: "The shared trace id groups the spans, and parent ids give the tree its shape, which is what lets a UI show causality and not just a pile of timings. The root span is the exception: it has no parent, which is exactly what marks it as the root."
        },
        {
          type: "fill",
          q: "The W3C Trace Context standard carries the trace id and parent span id in an HTTP header named ____.",
          answer: "traceparent",
          accept: ["traceparent", "traceparent header", "Traceparent"],
          explain: "W3C Trace Context defines traceparent for the ids and sampling flag, plus tracestate for vendor-specific data. Standardizing it is what lets tools from different vendors join the same trace."
        },
        {
          type: "match",
          q: "Match each tracing concept to its meaning.",
          pairs: [
            ["Head-based sampling", "Decide whether to keep a trace at the moment it starts"],
            ["Tail-based sampling", "Decide after the trace finishes, so you can keep slow or failed ones"],
            ["Context propagation", "Passing ids across process and thread boundaries so spans link up"]
          ],
          explain: "Head-based is cheap but blind to what happened; tail-based catches the interesting traces but requires buffering every span until the trace completes."
        },
        {
          type: "mcq",
          q: "Why must the sampling decision travel with the trace context instead of being made independently at each service?",
          choices: [
            "Because sampling rates cannot be configured consistently across languages",
            "Because collectors reject any trace carrying more than one sampling flag",
            "Because independent decisions would produce traces missing most of their spans",
            "Because otherwise the trace id would be regenerated at every hop"
          ],
          answer: 2,
          explain: "Sampling has to be consistent for the whole trace. If each service rolled its own dice you would keep scattered fragments and could never see an end-to-end request."
        },
        {
          type: "truefalse",
          q: "Tracing replaces logging, because a span can carry arbitrary attributes.",
          answer: false,
          explain: "They overlap but do not substitute. Traces are usually sampled and scoped to a request, while logs capture background work, startup, and the detail on the one unsampled request you needed."
        },
        {
          type: "order",
          q: "Order what happens as a traced request moves through a system.",
          items: [
            "The edge service starts a root span and makes the sampling decision",
            "The trace context is injected into outbound request headers",
            "A downstream service extracts the context and starts a child span",
            "Spans are exported to a collector and assembled into one trace"
          ],
          explain: "Injection and extraction at every boundary are the load-bearing steps. One library that fails to propagate context silently breaks the trace into disconnected pieces."
        }
      ]
    },
    {
      id: "l94",
      title: "Alerting on symptoms, not causes",
      intro: "What deserves to wake a human, why cause-based alerts create fatigue, and how error budgets shape urgency.",
      questions: [
        {
          type: "mcq",
          q: "Which of these best deserves to page a human at 3 in the morning?",
          choices: [
            "CPU utilization on one node has been above 90 percent for ten minutes",
            "The checkout error rate has been above 5 percent for five minutes",
            "A deployment is taking longer than its usual completion time",
            "Disk usage on a log volume has just crossed 70 percent"
          ],
          answer: 1,
          explain: "Only the second is a user-visible symptom that is happening now. The others are causes or capacity trends that a ticket or a dashboard handles perfectly well."
        },
        {
          type: "truefalse",
          q: "High CPU makes a good paging alert because it reliably precedes user-visible failure.",
          answer: false,
          explain: "A service can run hot and serve perfectly, or fail badly with idle CPU. Alert on CPU and you page for non-problems while missing real ones."
        },
        {
          type: "fill",
          q: "Alert on ____, not on causes: page when users are being hurt, and use dashboards to work out why.",
          answer: "symptoms",
          accept: ["symptoms", "symptom", "user-visible symptoms"],
          explain: "Symptoms are few, stable and meaningful. Causes are numerous and keep changing, so cause-based paging is an endless treadmill of rules."
        },
        {
          type: "match",
          q: "Match each notification channel to what belongs in it.",
          pairs: [
            ["Page", "Something is broken for users now and a human must act immediately"],
            ["Ticket", "Action is needed but it can safely wait for business hours"],
            ["Dashboard", "Diagnostic detail that should notify nobody at all"]
          ],
          explain: "Most alert fatigue comes from routing ticket-grade or dashboard-grade information into the paging channel."
        },
        {
          type: "mcq",
          q: "Your team receives 40 alerts a night and almost none require action. What is the underlying failure?",
          choices: [
            "The monitoring system is under-provisioned for that alert volume",
            "The on-call rotation is too small for the number of services owned",
            "The alerts are being routed to the wrong communication channel",
            "The alerts fire on conditions that are neither urgent nor actionable, so real ones get ignored"
          ],
          answer: 3,
          explain: "This is alert fatigue, and it actively reduces reliability: a human who has learned to dismiss the pager will dismiss the one that mattered."
        },
        {
          type: "truefalse",
          q: "Burn-rate alerting on an error budget lets one SLO page quickly for a severe outage and slowly for a mild one.",
          answer: true,
          explain: "Multiple windows with different burn-rate thresholds do this: a fast burn that would exhaust the budget in hours pages immediately, while a slow burn opens a ticket."
        },
        {
          type: "mcq",
          q: "Which test best decides whether a condition deserves a page?",
          choices: [
            "Would an engineer find this data interesting during working hours",
            "Has this condition ever preceded an outage at some point in the past",
            "Is a user being hurt right now, and can a human do something about it",
            "Does the condition match a resource crossing a defined threshold"
          ],
          answer: 2,
          explain: "Urgent plus actionable plus user-visible is the bar, as argued in Rob Ewaschuk's alerting philosophy in the Google SRE book. Anything failing that bar belongs in a ticket or a dashboard."
        }
      ]
    },
    {
      id: "l95",
      title: "The golden signals and useful dashboards",
      intro: "The four signals worth measuring on any user-facing service, their resource-side counterparts, and how to lay them out.",
      questions: [
        {
          type: "order",
          q: "List the four golden signals in the order the Google SRE book presents them.",
          items: ["Latency", "Traffic", "Errors", "Saturation"],
          explain: "Latency, traffic, errors and saturation. If you can only instrument four things on a user-facing service, these are the four."
        },
        {
          type: "mcq",
          q: "Which definition of a golden signal is stated correctly?",
          choices: [
            "Traffic means the share of requests that returned an error",
            "Saturation means how full the most constrained resource currently is",
            "Latency means the number of requests handled per second",
            "Errors means how close the service is to its capacity limit"
          ],
          answer: 1,
          explain: "Saturation is fullness of the limiting resource. Traffic is demand, latency is time to serve, errors is the failure rate. The other three options swap those definitions around."
        },
        {
          type: "truefalse",
          q: "When measuring latency you should separate successful requests from failed ones, because fast failures can make the latency graph look healthy.",
          answer: true,
          explain: "This is an explicit warning in the SRE book. A server returning instant 500s can drag your latency distribution down and make an outage look like a performance improvement."
        },
        {
          type: "fill",
          q: "Brendan Gregg's ____ method - utilization, saturation and errors - is the resource-oriented counterpart to the request-oriented golden signals.",
          answer: "USE",
          accept: ["USE", "use", "U.S.E."],
          explain: "The USE method walks every resource such as CPU, disk and network and asks the same three questions, which is a good complement to per-service signals."
        },
        {
          type: "match",
          q: "Match each framework to what it measures.",
          pairs: [
            ["RED method", "Rate, errors and duration, measured per service"],
            ["USE method", "Utilization, saturation and errors, measured per resource"],
            ["Four golden signals", "Latency, traffic, errors and saturation for a user-facing system"]
          ],
          explain: "RED, popularized by Tom Wilkie, is the request view; USE, from Brendan Gregg, is the resource view. They answer different halves of the same question."
        },
        {
          type: "mcq",
          q: "How should a dashboard meant for on-call use be structured?",
          choices: [
            "Start with a few service-level signals and let the reader drill down from there",
            "Show every metric the service exports on a single dense page",
            "Rank the panels by how visually interesting the graphs look",
            "Mirror the alerting rules exactly, with one panel per configured rule"
          ],
          answer: 0,
          explain: "At 3 a.m. the first screen has to answer is it broken and for whom. Detail belongs one click down, not competing for attention on the top page."
        },
        {
          type: "truefalse",
          q: "Saturation only matters once a resource reaches 100 percent utilization, since below that there is nothing to report.",
          answer: false,
          explain: "Queueing effects mean response time climbs steeply as utilization approaches capacity, well before it hits 100 percent. That is why saturation is usually tracked against a target threshold, not against full."
        }
      ]
    },
    {
      id: "l96",
      title: "Debugging a live incident, and the blameless postmortem",
      intro: "What to do first while the system is on fire, and how to write the document afterwards so the same fire cannot recur.",
      questions: [
        {
          type: "mcq",
          q: "The site is down and you are on call. What should you do first?",
          choices: [
            "Read through the recent code changes to identify the root cause",
            "Start writing the timeline while the events are still fresh",
            "Mitigate the user impact, even if the cause is not yet understood",
            "Collect heap dumps from every affected process for later analysis"
          ],
          answer: 2,
          explain: "Stop the bleeding first. Rolling back or shedding load restores users immediately, and understanding is a much calmer exercise once nobody is being hurt."
        },
        {
          type: "truefalse",
          q: "A recent deploy or configuration change is usually the most productive first hypothesis during an incident.",
          answer: true,
          explain: "As a rule of thumb most incidents follow a change, and the hypothesis is cheap to test because rolling back is fast and reversible."
        },
        {
          type: "order",
          q: "Order the phases of handling an incident.",
          items: [
            "Detect the symptom and declare an incident",
            "Mitigate user impact, for example by rolling back",
            "Diagnose and fix the underlying cause",
            "Write a blameless postmortem with owned action items"
          ],
          explain: "Mitigation comes before diagnosis, and the postmortem comes after the fix. Teams that invert the first two spend the outage debugging instead of recovering."
        },
        {
          type: "fill",
          q: "A ____ postmortem asks what about the system allowed a reasonable person to make that mistake, rather than who should be punished.",
          answer: "blameless",
          accept: ["blameless", "blame-free", "blame free"],
          explain: "Blame drives information underground. If reporting a mistake is dangerous, the next engineer hides it and you lose the data you needed."
        },
        {
          type: "match",
          q: "Match each incident response role to its responsibility.",
          pairs: [
            ["Incident commander", "Owns the response and makes decisions, but does not fix things personally"],
            ["Communications lead", "Keeps stakeholders and users updated while the incident runs"],
            ["Operations lead", "Is the only person making changes to the production system"]
          ],
          explain: "Separating command from hands-on work prevents the classic failure where the one person who understands the system is too busy typing to coordinate."
        },
        {
          type: "mcq",
          q: "Which postmortem action item is the strongest?",
          choices: [
            "Remind the team to be more careful when editing production configuration",
            "Add a validation check that rejects the malformed configuration at deploy time",
            "Document the incident in the team wiki so others can read about it later",
            "Ask the engineer who deployed the change to review the runbook again"
          ],
          answer: 1,
          explain: "Good action items change the system so the mistake becomes impossible or harmless. Asking people to try harder is not a control, because human attention is not a reliable component."
        },
        {
          type: "truefalse",
          q: "Blameless means the postmortem avoids describing what actually happened, in order to protect the people involved.",
          answer: false,
          explain: "A blameless postmortem is extremely specific about actions, timings and decisions. What it refuses to do is stop at human error as if that were the explanation."
        }
      ]
    }
  ]
});
