window.ACADEMY.addUnit("behaviorism", {
  id: "unit-7",
  title: "Reinforcement and Punishment",
  color: "#14a58f",
  icon: "⚖️",
  description: "Learn the four operant consequences and how adding or removing stimuli either strengthens or suppresses behavior.",
  lessons: [
    {
      id: "l49",
      title: "Defining Reinforcement",
      intro: "Reinforcement is any consequence that increases the future frequency of the behavior it follows.",
      questions: [
        {
          type: "mcq",
          q: "In operant conditioning, a reinforcer is best defined by which feature?",
          choices: [
            "It occurs just before the behavior",
            "It is always a tangible reward",
            "It increases the future probability of the behavior it follows",
            "It is whatever the person reports enjoying"
          ],
          answer: 2,
          explain: "Reinforcement is defined functionally by its effect: it raises the future likelihood of the behavior it follows, regardless of how it feels."
        },
        {
          type: "truefalse",
          q: "A consequence can only be called a reinforcer if it actually increases the behavior it follows.",
          answer: true,
          explain: "Reinforcement is defined by its effect on behavior; if the behavior does not increase, the consequence was not a reinforcer."
        },
        {
          type: "fill",
          q: "Reinforcement is a consequence that ____ the future frequency of a behavior.",
          answer: "increases",
          accept: ["increases", "increase", "strengthens", "raises"],
          explain: "By definition, reinforcement makes the preceding behavior more likely to occur again."
        },
        {
          type: "mcq",
          q: "Which statement correctly distinguishes the terms reinforcer and reinforcement?",
          choices: [
            "Reinforcer is the process; reinforcement is the stimulus",
            "Reinforcer is the stimulus or event; reinforcement is the process of strengthening behavior",
            "They are identical and interchangeable",
            "Reinforcer applies only to animals; reinforcement only to humans"
          ],
          answer: 1,
          explain: "The reinforcer is the specific stimulus or event; reinforcement is the process by which that stimulus strengthens behavior."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Reinforcement", "A consequence that increases future behavior"],
            ["Operant behavior", "Behavior controlled by its consequences"],
            ["Reinforcer", "The specific stimulus that strengthens a response"]
          ],
          explain: "Reinforcement is the process, a reinforcer is the stimulus, and operant behavior is behavior shaped by its consequences."
        },
        {
          type: "order",
          q: "Order the events in a reinforcement episode from first to last.",
          items: [
            "A behavior occurs",
            "A consequence follows the behavior",
            "The behavior becomes more likely in the future"
          ],
          explain: "The behavior comes first, the consequence follows it, and the result is an increased future probability of that behavior."
        },
        {
          type: "truefalse",
          q: "Whether something is reinforcing can be assumed in advance without observing its effect on behavior.",
          answer: false,
          explain: "You cannot know a stimulus is a reinforcer until you observe that it actually increases the behavior; reinforcement is defined empirically."
        }
      ]
    },
    {
      id: "l50",
      title: "Positive Reinforcement",
      intro: "Positive reinforcement adds a stimulus after a behavior, making that behavior more frequent.",
      questions: [
        {
          type: "mcq",
          q: "In positive reinforcement, the word \"positive\" means what?",
          choices: [
            "The behavior decreases",
            "Something pleasant is always involved",
            "A stimulus is added or presented",
            "The consequence is morally good"
          ],
          answer: 2,
          explain: "Positive refers to adding or presenting a stimulus after the behavior, not to it being pleasant or good."
        },
        {
          type: "truefalse",
          q: "Giving a dog a treat after it sits, which makes sitting more frequent, is positive reinforcement.",
          answer: true,
          explain: "A stimulus (the treat) is added and the behavior (sitting) increases, so this is positive reinforcement."
        },
        {
          type: "fill",
          q: "In positive reinforcement, a stimulus is ____ after the behavior, and the behavior becomes more frequent.",
          answer: "added",
          accept: ["added", "presented", "given"],
          explain: "Positive reinforcement adds or presents a stimulus following the response, strengthening it."
        },
        {
          type: "mcq",
          q: "Which is the clearest example of positive reinforcement?",
          choices: [
            "A student studies more after receiving praise for a good grade",
            "A driver buckles the seatbelt to stop the annoying beep",
            "A teen loses phone privileges for breaking curfew",
            "A rat presses a lever less after receiving a shock"
          ],
          answer: 0,
          explain: "Adding praise increases studying, a textbook case of positive reinforcement. Stopping the beep is negative reinforcement, and the other two are punishment."
        },
        {
          type: "match",
          q: "Match each scenario to why it is positive reinforcement.",
          pairs: [
            ["Employee gets a bonus, works harder", "Adding money increases work"],
            ["Child gets a sticker, cleans up more", "Adding a sticker increases cleaning"],
            ["Dog gets a treat, sits more often", "Adding a treat increases sitting"]
          ],
          explain: "Each case adds a stimulus after the behavior, and the behavior increases, the defining pattern of positive reinforcement."
        },
        {
          type: "order",
          q: "A teacher praises a student for raising a hand. Put the positive-reinforcement sequence in order.",
          items: [
            "Student raises hand",
            "Teacher delivers praise",
            "Student raises hand more often"
          ],
          explain: "The behavior occurs, a stimulus is added (praise), and the behavior increases in frequency."
        },
        {
          type: "truefalse",
          q: "For a consequence to count as positive reinforcement, the added stimulus must always be food.",
          answer: false,
          explain: "Any added stimulus that increases the behavior qualifies: praise, attention, money, tokens, and more, not only food."
        }
      ]
    },
    {
      id: "l51",
      title: "Negative Reinforcement",
      intro: "Negative reinforcement strengthens a behavior by removing an aversive stimulus.",
      questions: [
        {
          type: "mcq",
          q: "In negative reinforcement, the word \"negative\" refers to what?",
          choices: [
            "Punishing the behavior",
            "Removing or taking away a stimulus",
            "A bad or unpleasant outcome",
            "Decreasing the behavior"
          ],
          answer: 1,
          explain: "Negative means a stimulus is removed or subtracted after the behavior; the behavior then increases."
        },
        {
          type: "truefalse",
          q: "Negative reinforcement and punishment are the same thing.",
          answer: false,
          explain: "Negative reinforcement INCREASES behavior by removing an aversive; punishment DECREASES behavior. They are opposites in effect."
        },
        {
          type: "fill",
          q: "Taking a painkiller to end a headache makes pill-taking more likely; this is an example of ____ reinforcement.",
          answer: "negative",
          accept: ["negative"],
          explain: "An aversive stimulus (the headache) is removed, strengthening the pill-taking behavior, which is negative reinforcement."
        },
        {
          type: "mcq",
          q: "Which scenario best illustrates negative reinforcement?",
          choices: [
            "A student gets extra homework for talking in class",
            "A cat receives a treat for using the litter box",
            "A phone is taken away after a rude comment",
            "You fasten your seatbelt and the car's warning buzzer stops"
          ],
          answer: 3,
          explain: "Buckling up removes the aversive buzzer, so buckling increases; this is negative reinforcement, an escape behavior."
        },
        {
          type: "match",
          q: "Match the type of negative reinforcement to its description.",
          pairs: [
            ["Escape", "Behavior removes an aversive that is already present"],
            ["Avoidance", "Behavior prevents an aversive before it occurs"],
            ["Escape example", "Turning off a loud alarm that is sounding"]
          ],
          explain: "Escape ends an ongoing aversive; avoidance prevents one from starting. Both strengthen the behavior by negative reinforcement."
        },
        {
          type: "order",
          q: "You open an umbrella when it starts raining and stay dry. Order the negative-reinforcement sequence.",
          items: [
            "Rain (an aversive stimulus) begins",
            "You open the umbrella",
            "Getting wet is removed or avoided, so umbrella use increases"
          ],
          explain: "The aversive appears, the behavior removes or avoids it, and the behavior is strengthened."
        },
        {
          type: "truefalse",
          q: "In negative reinforcement, removing an unpleasant stimulus makes the behavior more likely to happen again.",
          answer: true,
          explain: "Removing an aversive consequence reinforces (strengthens) the behavior that produced the removal."
        }
      ]
    },
    {
      id: "l52",
      title: "Positive Punishment",
      intro: "Positive punishment adds an aversive stimulus after a behavior to make that behavior less frequent.",
      questions: [
        {
          type: "mcq",
          q: "Positive punishment involves which of the following?",
          choices: [
            "Removing a pleasant stimulus to decrease behavior",
            "Adding an aversive stimulus to decrease behavior",
            "Adding a pleasant stimulus to increase behavior",
            "Removing an aversive stimulus to increase behavior"
          ],
          answer: 1,
          explain: "Positive punishment ADDS an aversive stimulus following a behavior, decreasing that behavior."
        },
        {
          type: "truefalse",
          q: "Scolding a child, which reduces the misbehavior, is an example of positive punishment.",
          answer: true,
          explain: "An aversive (scolding) is added and the behavior decreases, so this is positive punishment."
        },
        {
          type: "fill",
          q: "In positive punishment, an aversive stimulus is ____ after the behavior to make it less frequent.",
          answer: "added",
          accept: ["added", "presented", "applied"],
          explain: "Positive punishment presents or adds an aversive consequence, reducing the behavior."
        },
        {
          type: "mcq",
          q: "Which of these is a clear case of positive punishment?",
          choices: [
            "A child is put in time-out and loses playtime",
            "A worker earns praise and works harder",
            "A driver silences a buzzer by buckling up",
            "A rat's lever press produces a mild shock, so it presses less"
          ],
          answer: 3,
          explain: "Adding a shock (an aversive) that reduces lever pressing is positive punishment. Time-out is negative punishment; the others are reinforcement."
        },
        {
          type: "match",
          q: "Match each example to its positive-punishment reasoning.",
          pairs: [
            ["Touch a hot stove, get burned, stop touching", "Adding pain decreases touching"],
            ["Speed and get a ticket, speed less", "Adding a fine decreases speeding"],
            ["Talk back and get scolded, talk back less", "Adding scolding decreases talking back"]
          ],
          explain: "Each adds an aversive after the behavior and the behavior decreases, the pattern of positive punishment."
        },
        {
          type: "order",
          q: "A dog jumps on a guest and is sprayed with water, then jumps less. Order the positive-punishment sequence.",
          items: [
            "Dog jumps on the guest",
            "A water spray (an aversive) is added",
            "Jumping decreases in the future"
          ],
          explain: "The behavior occurs, an aversive is added, and the behavior becomes less frequent."
        },
        {
          type: "truefalse",
          q: "Positive punishment increases the behavior it follows.",
          answer: false,
          explain: "All punishment DECREASES behavior; positive punishment does so by adding an aversive."
        }
      ]
    },
    {
      id: "l53",
      title: "Negative Punishment",
      intro: "Negative punishment removes a desirable stimulus after a behavior to make that behavior less frequent.",
      questions: [
        {
          type: "mcq",
          q: "Negative punishment works by doing what?",
          choices: [
            "Adding an aversive to decrease behavior",
            "Removing a desirable stimulus to decrease behavior",
            "Removing an aversive to increase behavior",
            "Adding a reward to increase behavior"
          ],
          answer: 1,
          explain: "Negative punishment removes or takes away a valued stimulus, which decreases the behavior."
        },
        {
          type: "truefalse",
          q: "Taking away a teenager's phone after they miss curfew, which reduces curfew-breaking, is negative punishment.",
          answer: true,
          explain: "A desirable stimulus (the phone) is removed and the behavior decreases, so this is negative punishment."
        },
        {
          type: "fill",
          q: "A \"time-out\" removes access to reinforcement and is a common form of ____ punishment.",
          answer: "negative",
          accept: ["negative"],
          explain: "Time-out takes away the opportunity for reinforcement (a desirable stimulus), decreasing the behavior, which is negative punishment."
        },
        {
          type: "mcq",
          q: "Which is an example of negative punishment, specifically a response cost?",
          choices: [
            "A gamer loses points for a rule violation, so violates less",
            "A student gets detention (added) for cheating",
            "A dog gets a treat for sitting",
            "A headache goes away after taking medicine"
          ],
          answer: 0,
          explain: "Losing points (removing a desirable stimulus) that decreases the behavior is response cost, a type of negative punishment."
        },
        {
          type: "match",
          q: "Match each scenario to its negative-punishment logic.",
          pairs: [
            ["Child grabs toys, toys removed, grabbing drops", "Removing toys decreases grabbing"],
            ["Player fouls, loses game time, fouls less", "Removing playing time decreases fouling"],
            ["Driver speeds, license suspended, speeds less", "Removing driving privilege decreases speeding"]
          ],
          explain: "Each removes something desirable after the behavior, and the behavior decreases, which is negative punishment."
        },
        {
          type: "order",
          q: "A child throws food and the plate is taken away, so throwing decreases. Order the negative-punishment sequence.",
          items: [
            "Child throws food",
            "The plate (a desirable stimulus) is removed",
            "Food-throwing decreases in the future"
          ],
          explain: "The behavior occurs, a valued stimulus is removed, and the behavior becomes less frequent."
        },
        {
          type: "truefalse",
          q: "In negative punishment, the removed stimulus is something the person finds unpleasant.",
          answer: false,
          explain: "Negative punishment removes something DESIRABLE (a reward or privilege); removing an unpleasant stimulus would be negative reinforcement."
        }
      ]
    },
    {
      id: "l54",
      title: "The Four-Quadrant Grid",
      intro: "The four operant consequences arise from crossing add versus remove with increase versus decrease.",
      questions: [
        {
          type: "mcq",
          q: "The four operant quadrants are organized along which two dimensions?",
          choices: [
            "Fast versus slow and strong versus weak",
            "Add (positive) versus remove (negative) and increase (reinforcement) versus decrease (punishment)",
            "Innate versus learned and primary versus secondary",
            "Classical versus operant and human versus animal"
          ],
          answer: 1,
          explain: "The grid crosses whether a stimulus is added or removed with whether the behavior increases or decreases."
        },
        {
          type: "truefalse",
          q: "In this framework, \"positive\" and \"negative\" describe adding versus removing a stimulus, not good versus bad.",
          answer: true,
          explain: "Positive means add and negative means remove; the terms are mathematical, like plus and minus, not evaluative."
        },
        {
          type: "match",
          q: "Match each quadrant to its definition.",
          pairs: [
            ["Positive reinforcement", "Add stimulus, behavior increases"],
            ["Negative reinforcement", "Remove stimulus, behavior increases"],
            ["Positive punishment", "Add stimulus, behavior decreases"],
            ["Negative punishment", "Remove stimulus, behavior decreases"]
          ],
          explain: "The four cells combine add or remove with increase or decrease, defining the four operant consequences."
        },
        {
          type: "mcq",
          q: "\"Behavior increases\" is the defining result of which two quadrants?",
          choices: [
            "Positive and negative punishment",
            "Positive reinforcement and positive punishment",
            "Positive and negative reinforcement",
            "Negative reinforcement and negative punishment"
          ],
          answer: 2,
          explain: "Both types of reinforcement (positive and negative) increase behavior; both types of punishment decrease it."
        },
        {
          type: "fill",
          q: "In the grid, reinforcement always ____ behavior, while punishment always decreases it.",
          answer: "increases",
          accept: ["increases", "strengthens", "raises"],
          explain: "Reinforcement (positive or negative) increases behavior; punishment (positive or negative) decreases it."
        },
        {
          type: "order",
          q: "To classify a consequence with the grid, order the steps you take.",
          items: [
            "Determine whether the behavior increased or decreased",
            "Label it reinforcement (increase) or punishment (decrease)",
            "Determine whether a stimulus was added or removed",
            "Add positive (added) or negative (removed) to the label"
          ],
          explain: "First decide reinforcement versus punishment by the behavior change, then decide positive versus negative by whether a stimulus was added or removed."
        },
        {
          type: "truefalse",
          q: "Both negative reinforcement and negative punishment involve removing a stimulus, but they have opposite effects on behavior.",
          answer: true,
          explain: "Negative means remove in both, yet negative reinforcement increases behavior while negative punishment decreases it."
        }
      ]
    },
    {
      id: "l55",
      title: "Problems with Punishment",
      intro: "Skinner argued that punishment only suppresses behavior temporarily and carries harmful side effects.",
      questions: [
        {
          type: "mcq",
          q: "According to Skinner, a key problem with punishment is that it does what?",
          choices: [
            "Permanently erases the punished behavior",
            "Only temporarily suppresses behavior rather than eliminating it",
            "Always increases the behavior it follows",
            "Teaches the learner exactly what to do instead"
          ],
          answer: 1,
          explain: "Skinner argued punishment suppresses behavior only while it is in effect; the behavior often returns once punishment stops."
        },
        {
          type: "truefalse",
          q: "Punishment tells the learner what NOT to do but does not teach the desired alternative behavior.",
          answer: true,
          explain: "A limitation of punishment is that it suppresses an unwanted response without establishing a better one; reinforcement is needed for that."
        },
        {
          type: "fill",
          q: "Skinner favored ____ reinforcement over punishment as a more effective way to shape behavior.",
          answer: "positive",
          accept: ["positive"],
          explain: "Skinner advocated positive reinforcement, arguing it builds desired behavior more durably than punishment suppresses unwanted behavior."
        },
        {
          type: "mcq",
          q: "Which is a commonly cited side effect of punishment?",
          choices: [
            "Increased trust in the punisher",
            "Faster acquisition of new skills",
            "Fear, aggression, or avoidance of the punisher",
            "Permanent behavior change with no downside"
          ],
          answer: 2,
          explain: "Punishment can produce fear, aggression, and escape or avoidance of the person or setting delivering it, which are undesirable emotional side effects."
        },
        {
          type: "match",
          q: "Match each punishment problem to its description.",
          pairs: [
            ["Temporary suppression", "Behavior returns when punishment stops"],
            ["Emotional side effects", "Fear, anxiety, and aggression can arise"],
            ["Modeling aggression", "The learner may imitate the punisher's aggressive behavior"]
          ],
          explain: "These are core problems Skinner and later researchers identified with relying on punishment."
        },
        {
          type: "truefalse",
          q: "Skinner believed punishment was the most reliable long-term tool for behavior change.",
          answer: false,
          explain: "Skinner argued the opposite: punishment is unreliable long term, and he recommended positive reinforcement instead."
        },
        {
          type: "order",
          q: "Trace the typical course of a punished behavior when punishment is used alone. Order the stages.",
          items: [
            "Punishment is applied and the behavior is suppressed",
            "Punishment is removed or the punisher is absent",
            "The suppressed behavior reappears"
          ],
          explain: "Because punishment suppresses rather than eliminates, the behavior tends to return once the threat of punishment is gone."
        }
      ]
    },
    {
      id: "l56",
      title: "Primary vs Conditioned Reinforcers",
      intro: "Primary reinforcers satisfy biological needs innately, while conditioned reinforcers gain value through learning.",
      questions: [
        {
          type: "mcq",
          q: "A primary (unconditioned) reinforcer is one that does what?",
          choices: [
            "Has reinforcing value learned through association",
            "Satisfies a biological need and is reinforcing innately",
            "Only works on humans",
            "Must be paired with money to be effective"
          ],
          answer: 1,
          explain: "Primary reinforcers such as food, water, and warmth have innate reinforcing value because they satisfy biological needs, with no learning required."
        },
        {
          type: "truefalse",
          q: "Money is a conditioned (secondary) reinforcer because its value is learned through association with other reinforcers.",
          answer: true,
          explain: "Money has no innate biological value; it becomes reinforcing by being paired with the many primary reinforcers it can obtain."
        },
        {
          type: "fill",
          q: "A reinforcer that gains its power through learned association with primary reinforcers is called a ____ reinforcer.",
          answer: "conditioned",
          accept: ["conditioned", "secondary"],
          explain: "Conditioned (secondary) reinforcers acquire their reinforcing value by being paired with existing reinforcers."
        },
        {
          type: "mcq",
          q: "Which list contains only primary reinforcers?",
          choices: [
            "Money, grades, praise",
            "Tokens, stickers, points",
            "Trophies, gold stars, coupons",
            "Food, water, warmth"
          ],
          answer: 3,
          explain: "Food, water, and warmth satisfy biological needs innately; the others are learned or conditioned reinforcers."
        },
        {
          type: "match",
          q: "Match each reinforcer to its type.",
          pairs: [
            ["Food when hungry", "Primary reinforcer"],
            ["Money", "Conditioned reinforcer"],
            ["Water when thirsty", "Primary reinforcer"],
            ["Grades", "Conditioned reinforcer"]
          ],
          explain: "Biologically satisfying stimuli are primary; stimuli that gain value through learning are conditioned."
        },
        {
          type: "truefalse",
          q: "A conditioned reinforcer paired with many different reinforcers is called a generalized conditioned reinforcer.",
          answer: true,
          explain: "Money is the classic generalized conditioned reinforcer because it is associated with a wide range of reinforcers."
        },
        {
          type: "order",
          q: "Order the steps by which a neutral token becomes a conditioned reinforcer.",
          items: [
            "A token starts out as a neutral stimulus",
            "The token is repeatedly paired with a primary reinforcer",
            "The token itself begins to reinforce behavior"
          ],
          explain: "Through repeated pairing with an established reinforcer, a neutral stimulus takes on reinforcing value of its own."
        }
      ]
    }
  ]
});
