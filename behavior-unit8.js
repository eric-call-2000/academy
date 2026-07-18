window.ACADEMY.addUnit("behaviorism", {
  id: "unit-8",
  title: "Shaping, Chaining, and Response Construction",
  color: "#14a58f",
  icon: "🔗",
  description: "This unit explains how trainers build new and complex behaviors from simple operants using shaping, differential reinforcement, chaining, and task analysis.",
  lessons: [
    {
      id: "l57",
      title: "Shaping",
      intro: "Shaping builds a new behavior by reinforcing successive approximations that move ever closer to a target response.",
      questions: [
        {
          type: "mcq",
          q: "In operant conditioning, what does 'shaping' mean?",
          choices: [
            "Punishing every response until only the target behavior remains",
            "Reinforcing successive approximations that get closer to a target behavior",
            "Waiting for the complete behavior to appear before ever reinforcing it",
            "Pairing a neutral stimulus with an existing reflex"
          ],
          answer: 1,
          explain: "Shaping works by reinforcing small steps (approximations) that progressively resemble the goal, rather than waiting for the whole behavior to occur at once."
        },
        {
          type: "truefalse",
          q: "Shaping is useful because it can produce behaviors that an animal would almost never perform spontaneously.",
          answer: true,
          explain: "Because complex or rare behaviors seldom occur on their own, shaping reinforces closer and closer approximations until the full response emerges."
        },
        {
          type: "fill",
          q: "Shaping reinforces successive ____ toward the final target behavior.",
          answer: "approximations",
          accept: ["approximations", "approximation"],
          explain: "Each reinforced step is an approximation, an imperfect version of the behavior that moves nearer to the goal."
        },
        {
          type: "order",
          q: "Order these shaping steps for teaching a rat to press a lever, from the first response reinforced to the last.",
          items: [
            "Reinforce the rat for facing the lever",
            "Reinforce the rat for moving toward the lever",
            "Reinforce the rat for touching the lever",
            "Reinforce the rat for pressing the lever"
          ],
          explain: "Shaping starts by reinforcing a rough approximation (orienting) and gradually requires responses closer to the target until a full press occurs."
        },
        {
          type: "match",
          q: "Match each shaping term to its meaning.",
          pairs: [
            ["Target behavior", "The final response the trainer wants to produce"],
            ["Approximation", "A partial response that is closer to the goal"],
            ["Reinforcer", "A consequence that strengthens the step just performed"]
          ],
          explain: "Shaping combines a defined target, reinforced approximations, and reinforcers that strengthen each successive step."
        },
        {
          type: "mcq",
          q: "Why can a trainer usually NOT just wait to reinforce the complete target behavior in a naive animal?",
          choices: [
            "The complete behavior may almost never occur on its own, leaving nothing to reinforce",
            "Reinforcers only work on reflexes, never on new behavior",
            "Waiting always turns reinforcement into punishment",
            "Animals cannot learn anything from consequences"
          ],
          answer: 0,
          explain: "If the full behavior rarely or never happens spontaneously, there is no opportunity to reinforce it; shaping solves this by reinforcing available approximations."
        },
        {
          type: "truefalse",
          q: "Shaping was popularized by B. F. Skinner using the operant conditioning chamber.",
          answer: true,
          explain: "Skinner developed and demonstrated shaping through operant conditioning, reinforcing successive approximations in the operant chamber."
        }
      ]
    },
    {
      id: "l58",
      title: "Successive Approximation",
      intro: "Successive approximation means steadily raising the standard a response must meet before it earns reinforcement.",
      questions: [
        {
          type: "mcq",
          q: "Raising the criterion for reinforcement during shaping means...",
          choices: [
            "Giving reinforcement no matter what the animal does",
            "Switching from food reinforcement to punishment",
            "Requiring responses that are progressively closer to the target before reinforcing",
            "Reinforcing only the very first response the animal ever makes"
          ],
          answer: 2,
          explain: "As training proceeds, the trainer demands responses nearer the goal, so previously reinforced weaker approximations no longer earn reinforcement."
        },
        {
          type: "truefalse",
          q: "Once a new, closer approximation is being reinforced, the trainer should keep reinforcing the older easier approximation just as often.",
          answer: false,
          explain: "The trainer raises the criterion, so earlier easier approximations stop being reinforced; otherwise the behavior would never advance toward the target."
        },
        {
          type: "fill",
          q: "In successive approximation, the trainer gradually raises the ____ that a response must meet to earn a reinforcer.",
          answer: "criterion",
          accept: ["criterion", "standard", "requirement"],
          explain: "The criterion is the standard the response must satisfy; raising it step by step pushes behavior toward the target."
        },
        {
          type: "order",
          q: "Order these criteria for shaping a dolphin to jump higher, from the earliest accepted to the final one.",
          items: [
            "Reinforce any movement above the water",
            "Reinforce a small jump clearing the surface",
            "Reinforce a jump reaching a low target",
            "Reinforce a jump reaching the high target"
          ],
          explain: "Each step raises the bar; earlier low criteria are reinforced first and then replaced by tougher ones."
        },
        {
          type: "mcq",
          q: "If the criterion is raised too quickly and the animal stops responding, the best fix is to...",
          choices: [
            "Punish the animal for stopping",
            "Lower the criterion back to a level the animal can meet, then advance more gradually",
            "Abandon shaping entirely",
            "Deliver reinforcement continuously regardless of behavior"
          ],
          answer: 1,
          explain: "Moving too fast can break the behavior down; returning to an achievable step and advancing in smaller increments restores steady progress."
        },
        {
          type: "match",
          q: "Match each term to its role in raising the criterion.",
          pairs: [
            ["Criterion", "The current standard for earning reinforcement"],
            ["Advancing too fast", "Risk of losing the behavior (ratio strain)"],
            ["Small steps", "Approach that keeps responding strong"]
          ],
          explain: "Effective shaping raises the criterion in small steps to avoid breaking down the response."
        },
        {
          type: "truefalse",
          q: "Successive approximation is the moment-to-moment process that carries out shaping.",
          answer: true,
          explain: "Shaping is accomplished precisely by successively approximating the target, raising the criterion one step at a time."
        }
      ]
    },
    {
      id: "l59",
      title: "Differential Reinforcement",
      intro: "Differential reinforcement is the engine of shaping: some responses are reinforced while others are placed on extinction.",
      questions: [
        {
          type: "truefalse",
          q: "Differential reinforcement means reinforcing certain responses while withholding reinforcement from others.",
          answer: true,
          explain: "By definition it reinforces one class of responses and extinguishes (withholds reinforcement from) another class."
        },
        {
          type: "mcq",
          q: "Within shaping, differential reinforcement works by...",
          choices: [
            "Reinforcing responses that meet the criterion and extinguishing those that fall short",
            "Reinforcing every response equally and often",
            "Punishing all responses the animal makes",
            "Reinforcing only responses that never change from trial to trial"
          ],
          answer: 0,
          explain: "Responses closer to the target (meeting criterion) are reinforced; weaker off-target responses receive no reinforcement and drop out."
        },
        {
          type: "fill",
          q: "The half of differential reinforcement that weakens off-target responses is called ____.",
          answer: "extinction",
          accept: ["extinction"],
          explain: "Withholding reinforcement from previously reinforced responses is extinction, which reduces those responses over time."
        },
        {
          type: "match",
          q: "Match each differential-reinforcement procedure to its full name.",
          pairs: [
            ["DRO", "Differential reinforcement of other behavior"],
            ["DRA", "Differential reinforcement of alternative behavior"],
            ["DRI", "Differential reinforcement of incompatible behavior"],
            ["DRL", "Differential reinforcement of low rates"]
          ],
          explain: "These common DR procedures reinforce a specified alternative while withholding reinforcement for the problem response."
        },
        {
          type: "mcq",
          q: "A teacher reinforces a student for raising a hand and ignores blurting out. This is an example of...",
          choices: [
            "Classical conditioning of a reflex",
            "Differential reinforcement of an alternative behavior",
            "Continuous punishment",
            "Autoshaping"
          ],
          answer: 1,
          explain: "Reinforcing the desired alternative (hand-raising) while extinguishing the problem response (blurting) is differential reinforcement of alternative behavior."
        },
        {
          type: "truefalse",
          q: "Differential reinforcement combines reinforcement and extinction acting on different responses at the same time.",
          answer: true,
          explain: "It is the simultaneous pairing of reinforcement for target responses with extinction for non-target responses."
        },
        {
          type: "order",
          q: "Order what happens to a single approximation under differential reinforcement as shaping advances.",
          items: [
            "An approximation is reinforced and increases",
            "The criterion shifts so that same approximation no longer qualifies",
            "The now off-target approximation stops being reinforced",
            "That approximation weakens through extinction"
          ],
          explain: "As the criterion advances, a formerly reinforced approximation is placed on extinction and declines while a closer one is strengthened."
        }
      ]
    },
    {
      id: "l60",
      title: "Response Chaining",
      intro: "A behavior chain links separate responses into a sequence in which each step sets the occasion for the next.",
      questions: [
        {
          type: "mcq",
          q: "A behavior chain is best described as...",
          choices: [
            "A single reflex repeated many times in a row",
            "A sequence of responses linked so each produces the cue for the next",
            "Two stimuli paired just before an unlearned reflex",
            "A punishment delivered after every response"
          ],
          answer: 1,
          explain: "In a chain, completing one response produces a stimulus that reinforces that step and then signals the next response in the sequence."
        },
        {
          type: "truefalse",
          q: "In a behavior chain, one stimulus can act as a conditioned reinforcer for the response before it and a discriminative stimulus for the response after it.",
          answer: true,
          explain: "This dual function links the steps: the same stimulus reinforces the step before it and cues the step after it."
        },
        {
          type: "fill",
          q: "In a behavior chain, the stimulus that signals which response to make next is called the ____ stimulus (SD).",
          answer: "discriminative",
          accept: ["discriminative", "sd"],
          explain: "Each link is occasioned by a discriminative stimulus (SD) that sets the occasion for the next reinforced response."
        },
        {
          type: "order",
          q: "Order the links in a simple 'making toast' behavior chain.",
          items: [
            "Take bread from the bag",
            "Place bread in the toaster",
            "Push down the toaster lever",
            "Remove the finished toast"
          ],
          explain: "Each completed step produces the conditions (the SD) for the next, forming an ordered chain that ends in the terminal reinforcer."
        },
        {
          type: "match",
          q: "Match each chaining term to its meaning.",
          pairs: [
            ["Link", "A single response-and-stimulus unit in the chain"],
            ["Terminal reinforcer", "The reinforcer delivered at the end of the whole chain"],
            ["Conditioned reinforcer", "A within-chain stimulus that reinforces the previous step"]
          ],
          explain: "Chains are built from links held together by conditioned reinforcers and completed by a terminal reinforcer."
        },
        {
          type: "mcq",
          q: "What primarily holds the interior links of a chain together?",
          choices: [
            "The terminal reinforcer alone, delivered only once at the very end",
            "Stimuli that serve as both conditioned reinforcers and discriminative stimuli between links",
            "Random pairing of unrelated stimuli",
            "A punisher delivered after each link"
          ],
          answer: 1,
          explain: "Each interior stimulus reinforces the preceding response and cues the next, chaining the units together even before the terminal reinforcer arrives."
        },
        {
          type: "truefalse",
          q: "Every response in a chain is reinforced only by primary reinforcers such as food.",
          answer: false,
          explain: "Most links are held together by conditioned (secondary) reinforcers; the primary or terminal reinforcer typically comes only at the end of the chain."
        }
      ]
    },
    {
      id: "l61",
      title: "Forward and Backward Chaining",
      intro: "Chains can be taught starting from the first link forward or from the last link backward, each with distinct advantages.",
      questions: [
        {
          type: "mcq",
          q: "Forward chaining teaches a sequence by...",
          choices: [
            "Teaching the last step first and adding earlier steps",
            "Teaching the first step first, then adding each following step in order",
            "Teaching all steps at once with no fixed order",
            "Never using any reinforcement"
          ],
          answer: 1,
          explain: "Forward chaining begins with the first link and adds the next link only after the earlier ones are mastered, moving toward the end."
        },
        {
          type: "mcq",
          q: "Backward chaining teaches a sequence by...",
          choices: [
            "Teaching the last step first, so the learner always finishes the chain and contacts the terminal reinforcer",
            "Teaching only the first step and then stopping",
            "Punishing the learner for the final step",
            "Removing the terminal reinforcer from the chain"
          ],
          answer: 0,
          explain: "In backward chaining the learner performs the final step first (earlier steps done by the trainer), immediately reaching the terminal reinforcer, then earlier links are added one at a time."
        },
        {
          type: "truefalse",
          q: "A commonly cited advantage of backward chaining is that the learner contacts the terminal reinforcer on every trial from the very start.",
          answer: true,
          explain: "Because the learner completes the last link and thus earns the terminal reinforcer on each trial, that reinforcer strengthens learning throughout training."
        },
        {
          type: "fill",
          q: "Teaching the first response of a sequence first and progressing toward the end is called ____ chaining.",
          answer: "forward",
          accept: ["forward"],
          explain: "Forward chaining builds the sequence in its natural order, starting from the first link and moving onward."
        },
        {
          type: "order",
          q: "Using backward chaining to teach hand-washing, order the steps by the order they are TAUGHT (the step taught first comes first).",
          items: [
            "Dry hands with a towel (taught first)",
            "Rinse hands under water",
            "Scrub hands with soap",
            "Turn on the faucet (taught last)"
          ],
          explain: "Backward chaining teaches the final action (drying) first and works backward, so the last-taught step is actually the chain's true first action."
        },
        {
          type: "match",
          q: "Match each method to its defining feature.",
          pairs: [
            ["Forward chaining", "First link trained first, moving toward the end"],
            ["Backward chaining", "Last link trained first, moving toward the start"],
            ["Total-task presentation", "Every step practiced in each session"]
          ],
          explain: "Forward, backward, and total-task approaches differ in which links are trained and when they are added."
        },
        {
          type: "truefalse",
          q: "Forward and backward chaining teach the steps in a different order, but the final performed sequence is the same.",
          answer: true,
          explain: "The teaching order differs, yet both aim to produce the identical intact behavior chain executed in its natural order."
        }
      ]
    },
    {
      id: "l62",
      title: "Task Analysis",
      intro: "Task analysis breaks a complex skill into an ordered list of small, teachable component steps.",
      questions: [
        {
          type: "mcq",
          q: "A task analysis is...",
          choices: [
            "A single reinforcer given only at the end of a task",
            "A breakdown of a complex skill into its ordered component steps",
            "A schedule of punishment for errors",
            "A measure of reaction time and nothing else"
          ],
          answer: 1,
          explain: "Task analysis lists the discrete steps that make up a skill so each one can be taught and then chained together."
        },
        {
          type: "truefalse",
          q: "A task analysis usually must be completed before forward or backward chaining can be applied to a skill.",
          answer: true,
          explain: "Chaining requires knowing the individual links; the task analysis defines exactly what those steps are and their order."
        },
        {
          type: "fill",
          q: "Breaking a complex behavior into a sequence of smaller teachable steps is called a task ____.",
          answer: "analysis",
          accept: ["analysis"],
          explain: "The product of this process is a task analysis: an ordered list of the component responses that make up the skill."
        },
        {
          type: "order",
          q: "Put these task-analysis steps for 'brushing teeth' in a sensible order.",
          items: [
            "Pick up the toothbrush",
            "Apply toothpaste to the brush",
            "Brush the teeth",
            "Rinse the mouth"
          ],
          explain: "A good task analysis lists the component steps in the order they must be performed to complete the skill."
        },
        {
          type: "mcq",
          q: "Which is the best reason to make the steps in a task analysis small?",
          choices: [
            "So the learner never receives any reinforcement",
            "So each step is easy to teach, prompt, and reinforce, which reduces errors",
            "So the skill takes longer to perform for no reason",
            "So that chaining is never needed"
          ],
          answer: 1,
          explain: "Smaller, clearly defined steps are easier to prompt and reinforce and make it clear exactly where a learner is struggling."
        },
        {
          type: "match",
          q: "Match each task-analysis idea to its description.",
          pairs: [
            ["Component step", "One discrete response within the skill"],
            ["Sequence", "The required order of the steps"],
            ["Chaining", "Linking the steps into the full skill"]
          ],
          explain: "Task analysis identifies the component steps and their sequence so that chaining can link them into the whole skill."
        },
        {
          type: "truefalse",
          q: "Two competent people must always write exactly identical task analyses for the same skill.",
          answer: false,
          explain: "Task analyses can validly differ in grain size or grouping; there is often more than one workable way to break a skill into steps."
        }
      ]
    },
    {
      id: "l63",
      title: "Autoshaping",
      intro: "Autoshaping shows that pigeons will peck a signal light predicting food even though no one shaped the peck and pecking is not required.",
      questions: [
        {
          type: "mcq",
          q: "In autoshaping, a pigeon comes to peck a lit key because...",
          choices: [
            "A trainer patiently reinforced successive approximations of pecking",
            "The lit key reliably precedes free food, so pecking emerges without deliberate shaping",
            "Pecking the key is required in order to obtain the food",
            "The key delivers a mild electric shock"
          ],
          answer: 1,
          explain: "Autoshaping produces key-pecking automatically: the illuminated key signals upcoming food, and the pigeon pecks it even though no shaping was done and pecking is unnecessary."
        },
        {
          type: "truefalse",
          q: "Autoshaping of the pigeon's key peck was reported by Brown and Jenkins in 1968.",
          answer: true,
          explain: "Brown and Jenkins published 'Auto-shaping of the pigeon's key-peck' in the Journal of the Experimental Analysis of Behavior in 1968."
        },
        {
          type: "truefalse",
          q: "In the basic autoshaping procedure, food is delivered whether or not the pigeon pecks the key.",
          answer: true,
          explain: "Food (the US) follows the lit key regardless of the pigeon's behavior; pecking is not needed, yet it still develops."
        },
        {
          type: "fill",
          q: "Autoshaping is often explained as a ____ (Pavlovian) relationship, because the lit key acts as a CS that predicts food.",
          answer: "classical",
          accept: ["classical", "pavlovian", "respondent"],
          explain: "The key light functions as a conditioned stimulus signaling the food US, so autoshaping reflects classical conditioning intruding on an operant setting."
        },
        {
          type: "mcq",
          q: "Why is the phenomenon called 'auto'-shaping?",
          choices: [
            "Because the experimenter must painstakingly shape each approximation by hand",
            "Because the pecking response develops automatically, without the experimenter shaping it",
            "Because it works only with automobiles",
            "Because food is never actually presented"
          ],
          answer: 1,
          explain: "The 'auto' refers to the peck emerging on its own from the key-light and food pairing, sparing the experimenter the usual hand-shaping."
        },
        {
          type: "match",
          q: "Match each autoshaping element to its role.",
          pairs: [
            ["Lit key", "Signal (CS) that predicts food"],
            ["Grain / food", "The unconditioned stimulus (US)"],
            ["Key peck", "Response directed at the signal (sign tracking)"]
          ],
          explain: "The lit key is the CS, food is the US, and the pigeon's peck is a sign-tracking response aimed at the predictive signal."
        },
        {
          type: "order",
          q: "Order these autoshaping events, from a single early trial to the eventual outcome across many trials.",
          items: [
            "The response key lights up",
            "A few seconds pass",
            "Food is delivered regardless of the pigeon's behavior",
            "Over many trials, the pigeon begins pecking the lit key"
          ],
          explain: "Each trial pairs a lit key with later free food; across trials this pairing generates key-pecking without any explicit shaping."
        }
      ]
    },
    {
      id: "l64",
      title: "Superstitious Behavior",
      intro: "Skinner's 1948 pigeon study showed that food delivered on a fixed-time schedule, independent of behavior, can accidentally strengthen whatever the bird happens to be doing.",
      questions: [
        {
          type: "mcq",
          q: "In Skinner's 1948 'Superstition in the Pigeon' study, food was delivered...",
          choices: [
            "Only after the pigeon pecked a lit key",
            "At regular time intervals regardless of what the pigeon was doing",
            "Only when the pigeon stood perfectly still",
            "Never during the experiment"
          ],
          answer: 1,
          explain: "Skinner delivered food on a fixed-time schedule independent of behavior, so reinforcement arrived no matter what the bird happened to be doing."
        },
        {
          type: "truefalse",
          q: "Skinner found that most of the pigeons developed distinctive, repetitive 'ritual' behaviors.",
          answer: true,
          explain: "Six of the eight pigeons developed conspicuous repeated actions such as turning in circles or tossing the head between food deliveries."
        },
        {
          type: "mcq",
          q: "Skinner explained the pigeons' rituals as the result of...",
          choices: [
            "Accidental (adventitious) reinforcement of whatever behavior happened to precede the food",
            "Deliberate shaping carried out by the experimenter",
            "Classical conditioning of an inborn reflex",
            "Physical illness in the birds"
          ],
          answer: 0,
          explain: "Whatever the pigeon happened to be doing just before food was accidentally strengthened, even though that behavior did not actually cause the food; this is adventitious reinforcement."
        },
        {
          type: "fill",
          q: "Skinner called the pigeons' behavior 'superstitious' because the response and the food were only ____ related, not causally connected.",
          answer: "accidentally",
          accept: ["accidentally", "adventitiously", "coincidentally"],
          explain: "The behavior did not cause the food; the two were merely paired by accident in time, so the reinforcement was adventitious."
        },
        {
          type: "truefalse",
          q: "In the superstition experiment, the pigeons' rituals actually caused the food to appear.",
          answer: false,
          explain: "Food came on a fixed-time schedule independent of behavior; the rituals had no causal effect and only appeared to 'work.'"
        },
        {
          type: "match",
          q: "Match each term from the superstition study to its meaning.",
          pairs: [
            ["Adventitious reinforcement", "Accidental strengthening of a behavior that did not cause the reinforcer"],
            ["Fixed-time schedule", "Reinforcer delivered at set intervals regardless of responding"],
            ["Superstitious behavior", "A ritual maintained by coincidental reinforcement"]
          ],
          explain: "A fixed-time schedule produced adventitious reinforcement, which maintained the pigeons' superstitious rituals."
        },
        {
          type: "order",
          q: "Order the logic of how superstitious behavior develops in Skinner's account.",
          items: [
            "Food is delivered on a fixed-time schedule, independent of behavior",
            "The pigeon happens to be doing some action when food arrives",
            "That action is accidentally reinforced and is repeated",
            "The repeated action grows into a distinctive ritual"
          ],
          explain: "Coincidental pairing of an ongoing action with food strengthens it, and repeated coincidences build a stable superstitious ritual."
        }
      ]
    }
  ]
});
