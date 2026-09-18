/* Cloud Platforms & Deployment — Unit 1: What "the cloud" actually is */
(function () {
  window.CODELAB.addUnit("cloud", {
    id: "cloud-u1",
    title: "What the cloud actually is",
    icon: "☁️",
    blurb: "Someone else's computers, rented by the hour or the request — and a line dividing what you manage from what the provider does. The three service models are just three places to draw that line.",
    cheat: [
      { h: "The idea", lang: "text", code:
"on-demand      spin a server up in seconds, not weeks\n" +
"pay-as-you-go  rent by the hour or the request\n" +
"elastic        scale up for a spike, back down after\n" +
"managed        the provider runs the parts you don't want to",
        note: "\"The cloud\" is renting computers and services you don't own or house. You trade capital cost and control for speed, elasticity and someone else's operations team." },
      { h: "The responsibility line", lang: "text", code:
"                you manage        provider manages\n" +
"IaaS       OS + runtime + app     hardware, network\n" +
"PaaS       app + config           OS, runtime, scaling\n" +
"serverless your function only     everything else",
        note: "Moving down the list hands more of the stack to the provider. You gain less to operate and lose some control and portability. Pick the highest line that still gives you what you need." },
      { h: "Shared responsibility", lang: "text", code:
"provider: security OF the cloud (hardware, hypervisor)\n" +
"you:      security IN the cloud (your code, config,\n" +
"          access, and the data you put there)",
        note: "Renting a managed platform never rents away responsibility for your own code, configuration and data. A misconfigured bucket is your problem, not the provider's." }
    ],
    lessons: [

      {
        id: "cloud-u1-1",
        title: "Renting computers you don't own",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "\"The cloud\" is a plain idea dressed up: **renting computers and services you don't own or house.** Instead of buying servers, racking them in a room and waiting weeks, you ask a provider for a server and have one in seconds — and you pay only while you use it.\n\nThree properties make it different from a machine under your desk:\n\n- **on-demand** — you provision it yourself, instantly\n- **pay-as-you-go** — you rent by the hour, or even by the request\n- **elastic** — you scale up for a spike and back down after, without buying for the peak",
            ask: { type: "pick",
              q: "What is the core trade you make by running on the cloud instead of your own servers?",
              choices: ["You give up speed and flexibility in order to gain much more direct hands-on control over the underlying physical hardware", "You give up some control and portability to gain speed, elasticity and managed operations", "You pay more but never have to write any code", "There is no trade — the cloud is simply better in every way"],
              answer: 1,
              why: [
                "It's the opposite: you gain speed, not give it up.",
                "You hand hardware and some control to the provider and get instant, elastic, pay-as-you-go capacity and their operations in return.",
                "You still write and run all your own code; the provider runs the infrastructure under it.",
                "It's a trade with real downsides (cost at scale, less control, lock-in), not a free win."
              ] } },

          { read: "The elastic, pay-as-you-go part changes how you budget. A machine you buy is a big up-front **capital** cost sized for your busiest hour — and it sits mostly idle the rest of the time. Cloud capacity is an **operating** cost that tracks actual use: you rent more for the Monday spike and less overnight.\n\nThat's powerful and dangerous. Powerful because you never buy for a peak you hit twice a year. Dangerous because a runaway process or a bad loop bills you by the minute.",
            ask: { type: "pick", transfer: true,
              q: "A shop gets 20× its normal traffic for one hour on sale day, then back to normal. Why does renting elastic capacity fit this better than buying servers?",
              choices: ["Servers you have bought and racked yourself are always fundamentally slower than rented cloud ones during any kind of traffic spike, without any exception", "You rent the extra capacity for that hour and release it after, instead of buying 20× hardware that sits idle the rest of the year", "The cloud makes the sale-day traffic smaller", "Buying servers is impossible for a shop"],
              answer: 1,
              why: [
                "Speed isn't the point; owned hardware can be fast. Sizing for the peak is the waste.",
                "Elastic capacity matches the spike and then costs nothing extra once released — you never own 20× hardware for one hour a year.",
                "The cloud doesn't reduce traffic; it lets your capacity follow it.",
                "A shop can buy servers; it's just wasteful to size them for a rare peak."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "You provision a cloud server, run a job for 3 hours, and delete it. On pay-as-you-go pricing, roughly how many hours are you billed for that server? Type a number.",
              answer: "3",
              why: "Pay-as-you-go bills for the time the resource exists and runs — about 3 hours here — not a flat monthly rate. Leaving it running by mistake keeps billing.",
              run: true,
              check: "console.log(3);" } },

          { ask: { type: "explain",
              q: "In plain terms, what does it mean to \"run in the cloud,\" and what's the main trade-off?",
              model: "Running in the cloud means renting computers and services from a provider instead of owning them — provisioned on demand in seconds, paid for by use, and scaled up or down as load changes. The trade-off is that you give up some control and portability, and can run up cost if you're careless, in exchange for speed, elasticity and not having to operate the hardware yourself.",
              rubric: ["Says it's renting provider-run computers/services rather than owning them", "Names on-demand / pay-as-you-go / elastic as what's different", "Names the trade: less control (or cost risk) for speed/elasticity/managed operations"] } }
        ]
      },

      {
        id: "cloud-u1-2",
        title: "IaaS, PaaS, serverless: the responsibility line",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "The three words that sound like jargon — **IaaS**, **PaaS**, **serverless** — are really one question: *how much of the stack do you manage, and how much does the provider?* Draw a line through the stack (hardware → OS → runtime → your app) and each model puts the line in a different place.\n\n- **IaaS** (infrastructure): they give you a bare virtual machine. You install the OS packages, the runtime, your app — you manage almost everything above the hardware.\n- **PaaS** (platform): you hand them your app and a little config; they run the OS, the runtime and the scaling.\n- **Serverless**: you hand them a single function; they run literally everything else and only wake it when a request arrives.",
            ask: { type: "order",
              q: "Order the three models from the one where YOU manage the most, to the one where you manage the least.",
              lines: [
                "IaaS — you manage the OS, the runtime and your app on their VM",
                "PaaS — you manage your app and its config; they run the OS and runtime",
                "Serverless — you manage only your function; they run everything else"
              ],
              why: "IaaS leaves the most in your hands (everything above the hardware), PaaS takes the OS and runtime off you, and serverless leaves you only your code." } },

          { read: "Moving down that line is a trade, not an upgrade. Hand over more of the stack and you have **less to operate** — no OS patching, no scaling to configure — but also **less control** and more lock-in to how the provider does things. Hand over less and you keep full control but carry the operational weight.\n\nThe rule of thumb: **choose the highest line on the list that still gives you what you need.** Don't manage an OS to run a simple web app; don't reach for a bare VM unless you actually need to control the OS.",
            ask: { type: "pick",
              q: "What do you gain, and give up, by moving from IaaS toward serverless?",
              choices: ["You gain complete and total control of the operating system itself while giving up every last bit of the automatic scaling you had before", "You gain less to operate (no OS or scaling to manage) and give up some control and portability", "You gain lower cost in every single case and give up nothing at all", "You gain speed of the code itself and give up reliability"],
              answer: 1,
              why: [
                "It's the reverse — moving toward serverless hands the OS to the provider.",
                "Less of the stack to run means less operational burden, at the cost of control and portability.",
                "Cost depends on traffic shape; serverless isn't always cheaper (Unit 3).",
                "The model doesn't change how fast your code runs, and managed platforms are typically more reliable, not less."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A team deploys a Node app by pushing code to a platform that provisions the OS, installs Node, and autoscales it — they never touch a server. Which model is that?",
              choices: ["IaaS", "PaaS", "Serverless", "On-premise"],
              answer: 1,
              why: [
                "IaaS would hand them a bare VM to install Node on themselves.",
                "PaaS: push the app, the platform runs the OS, runtime and scaling — exactly this.",
                "Serverless runs individual functions on request, not a long-running app you push as a whole.",
                "On-premise is hardware you own and house — the opposite of this."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "You need a specific, unusual OS kernel version and full control of the machine's packages. Which model gives you that? Type one of: IaaS, PaaS, serverless.",
              answer: "IaaS",
              accept: ["iaas"],
              why: "Only IaaS gives you the bare VM to control the OS and its packages. PaaS and serverless hide the OS from you on purpose." } },

          { ask: { type: "explain",
              q: "Explain the responsibility line across IaaS, PaaS and serverless, and how you'd use it to choose.",
              model: "The three models differ in where the line falls between what you manage and what the provider does. IaaS gives you a VM and you manage the OS, runtime and app; PaaS runs the OS, runtime and scaling so you manage just the app and config; serverless runs everything and you manage only a function. To choose, take the highest line that still gives you the control you actually need, so you carry the least operational burden.",
              rubric: ["Describes the line: you-manage vs provider-manages across the stack", "Places IaaS (most yours), PaaS (app+config), serverless (function only) correctly", "Says to pick the model that offloads the most while still meeting your control needs"] } }
        ]
      },

      {
        id: "cloud-u1-3",
        title: "Choosing a model, and what stays yours",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "A real choice comes with a constraint that decides it: how much control you need, how much you want to operate, how spiky the traffic is, how fast you must ship. Match the model to the constraint, not to what sounds most modern.\n\nAnd handing over the OS never hands over responsibility for your own work. The **shared responsibility** model splits it: the provider secures the cloud itself (hardware, the hypervisor, their network); **you** secure what's *in* it — your code, your configuration, who has access, and the data you store. A public bucket full of customer data is your mistake, on any model.",
            ask: { type: "pick",
              q: "On a managed (PaaS) platform, a developer leaves a database open to the internet with no password and it's breached. Whose responsibility was that configuration?",
              choices: ["The provider's, since they are the ones who fully manage, run and operate the entire underlying platform it sits on", "The developer's — configuration and access are the customer's side of shared responsibility", "Nobody's, because managed platforms are automatically secure", "The provider's, but only if a paid support plan is active"],
              answer: 1,
              why: [
                "The provider secures the platform itself, not the customer's configuration choices.",
                "Access and configuration are squarely the customer's side of the shared-responsibility line.",
                "Managed means the OS is patched for you, not that your config is safe by magic.",
                "Responsibility for your own configuration doesn't depend on a support plan."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A small team wants to ship a standard web app fast, has no interest in running servers, and expects steady traffic. Which model fits best?",
              choices: ["IaaS, for maximum control over the machine", "PaaS, so they push code and let the platform run the OS, runtime and scaling", "On-premise physical servers that the small team buys, racks, cables and fully maintains itself", "Nothing fits; they must manage their own OS"],
              answer: 1,
              why: [
                "Maximum control is exactly what a team with no interest in servers doesn't need.",
                "PaaS removes the servers from their plate and lets them ship the app — the constraint (fast, no ops) decides it.",
                "Racking hardware is the slowest, most operational option — the opposite of the goal.",
                "PaaS and serverless both free them from managing an OS."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "Which statement about the shared-responsibility model is correct?",
              choices: ["The cloud provider quietly becomes fully and completely responsible for absolutely everything the very moment that you begin paying them each month", "You are always responsible for your code, your configuration, your access rules and your data, whatever the model", "Serverless removes all security responsibility from the customer", "Responsibility shifts entirely to the provider on PaaS and serverless"],
              answer: 1,
              why: [
                "Paying rents capacity and operations, not away your responsibility for your own code and data.",
                "Security IN the cloud — code, config, access, data — is always yours; only security OF the cloud is theirs.",
                "Serverless offloads the OS and scaling, never your function's logic or the data it touches.",
                "The provider takes on more of the OS/runtime, but your code, config and data stay yours."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Under shared responsibility, if the provider's data-center hardware fails, whose responsibility is that? Type one word: provider, or you.",
              answer: "provider",
              why: "Hardware, the hypervisor and their network are security and reliability OF the cloud — the provider's side. Your code, config and data are yours." } }
        ]
      },

      {
        id: "cloud-quiz-1",
        title: "Unit 1 quiz: What the cloud is",
        kind: "quiz", xp: 10,
        brief: "Renting computers, the three service models, the responsibility line and shared responsibility. 80% to pass.",
        questions: [
          { q: "What best describes \"running in the cloud\"?",
            choices: ["Writing application code that somehow manages to contain no bugs or defects in it whatsoever, anywhere at all", "Renting computers and services from a provider, on demand and by use, instead of owning them", "Storing files only on your own laptop", "A special faster kind of internet connection"],
            answer: 1, explain: "The cloud is provider-run capacity you rent on demand and pay for by use — you trade some control for speed, elasticity and managed operations." },
          { q: "In IaaS, who manages the operating system?",
            choices: ["The cloud provider quietly does the whole thing for you, fully automatically, across every service tier", "You do — IaaS gives you a VM and you manage the OS, runtime and app", "Nobody; IaaS has no operating system at all", "It is shared equally, half each, by contract"],
            answer: 1, explain: "IaaS leaves the most in your hands: everything above the hardware, including the OS. PaaS and serverless take the OS off you." },
          { q: "Which model runs only a single function, waking it when a request arrives?",
            choices: ["IaaS", "PaaS", "Serverless", "On-premise"],
            answer: 2, explain: "Serverless runs individual functions on demand and manages everything else; you manage only your code." },
          { q: "What's the trade as you move from IaaS toward serverless?",
            choices: ["More control and more to operate", "Less to operate, but less control and more lock-in", "It is always cheaper with no downside whatsoever at any traffic level", "Slower code but safer data"],
            answer: 1, explain: "Handing more of the stack to the provider means less operational burden, at the cost of control and portability." },
          { q: "Under the shared-responsibility model, what is always the customer's responsibility?",
            choices: ["The physical hardware and the data-center network", "The provider's hypervisor software running underneath", "Your own code, configuration, access rules and data", "Absolutely nothing at all once the monthly invoice is paid"],
            answer: 2, explain: "The provider secures the cloud itself; you secure what's in it — your code, config, access and data — on every model." },
          { q: "A team wants to ship a standard app fast with no servers to run and steady traffic. Best fit?",
            choices: ["Buy, rack, cable and then fully maintain their own physical servers on-premise for the whole project", "PaaS: push the app and let the platform run the OS, runtime and scaling", "IaaS with a bare VM they configure by hand", "None of these could possibly work for them"],
            answer: 1, explain: "The constraint — fast, no ops, steady load — points to PaaS, the highest line that still meets their needs." }
        ]
      }
    ]
  });
})();
