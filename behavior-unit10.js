window.ACADEMY.addUnit("behaviorism", {
  id: "unit-10",
  title: "Extinction and Stimulus Control",
  color: "#14a58f",
  icon: "🚦",
  description: "Learn how operant behavior weakens when reinforcement stops and how antecedent stimuli come to reliably signal and occasion responding.",
  lessons: [
    {
      id: "l73",
      title: "Operant Extinction",
      intro: "Operant extinction weakens a behavior by withholding the reinforcement that used to follow it.",
      questions: [
        {
          type: "mcq",
          q: "In operant extinction, what happens to the consequence that previously followed a behavior?",
          choices: [
            "It is withheld, so the behavior no longer produces reinforcement",
            "An aversive stimulus is added right after the behavior",
            "The same reinforcer is delivered on a thinner schedule",
            "The person is physically prevented from responding"
          ],
          answer: 0,
          explain: "Extinction means a formerly reinforced response stops producing its reinforcer, which causes the behavior to weaken over time."
        },
        {
          type: "truefalse",
          q: "Extinction and punishment are the same procedure.",
          answer: false,
          explain: "They differ: extinction withholds a reinforcer that used to follow the behavior, while punishment adds or removes a stimulus specifically to suppress the behavior."
        },
        {
          type: "fill",
          q: "In operant extinction, a previously reinforced response no longer produces ____, so its frequency declines.",
          answer: "reinforcement",
          accept: ["reinforcement", "reinforcer", "a reinforcer", "reward"],
          explain: "When the reinforcing consequence stops, the response that depended on it gradually decreases in frequency."
        },
        {
          type: "match",
          q: "Match each term to its correct description.",
          pairs: [
            ["Extinction", "Withholding reinforcement for a formerly reinforced response"],
            ["Reinforcement", "A consequence that strengthens the behavior it follows"],
            ["Extinction schedule", "Arrangement in which no response is reinforced"]
          ],
          explain: "Extinction is the removal of the reinforcing consequence, which is the opposite of the strengthening produced by reinforcement."
        },
        {
          type: "mcq",
          q: "A child's whining used to earn a parent's attention, but now the parent consistently ignores every whine. This is an example of:",
          choices: [
            "Positive punishment",
            "Negative reinforcement",
            "Operant extinction",
            "Shaping"
          ],
          answer: 2,
          explain: "The reinforcer (attention) that maintained whining is now withheld every time, which is the defining feature of operant extinction."
        },
        {
          type: "truefalse",
          q: "Behavior placed on extinction usually declines gradually rather than stopping instantly.",
          answer: true,
          explain: "Extinction typically produces a progressive decrease in responding over repeated non-reinforced occasions, not an immediate halt."
        },
        {
          type: "order",
          q: "Put the operant extinction process in the correct order.",
          items: [
            "A response is regularly reinforced",
            "Reinforcement for that response is discontinued",
            "The response gradually decreases in frequency"
          ],
          explain: "Extinction begins only after a behavior has been reinforced; once reinforcement is removed, the behavior weakens over time."
        }
      ]
    },
    {
      id: "l74",
      title: "The Extinction Burst",
      intro: "When reinforcement first stops, behavior often surges temporarily before it begins to decline.",
      questions: [
        {
          type: "mcq",
          q: "What is an extinction burst?",
          choices: [
            "A permanent increase in the behavior once reinforcement stops",
            "A temporary increase in the behavior's frequency or intensity at the onset of extinction",
            "The complete disappearance of a behavior after one non-reinforced trial",
            "A new reinforcer being introduced during extinction"
          ],
          answer: 1,
          explain: "At the start of extinction, responding often briefly increases in frequency, magnitude, or duration before it declines."
        },
        {
          type: "truefalse",
          q: "An extinction burst is a temporary effect that occurs early in extinction.",
          answer: true,
          explain: "The burst appears soon after reinforcement stops and fades as the behavior continues to go unreinforced."
        },
        {
          type: "fill",
          q: "During an extinction burst, the behavior often increases in frequency, magnitude, or ____ before it declines.",
          answer: "duration",
          accept: ["duration", "intensity", "length"],
          explain: "Bursts commonly show up as more frequent, more forceful, or longer-lasting responses right after reinforcement ends."
        },
        {
          type: "order",
          q: "Order what typically happens when a maintained behavior is first placed on extinction.",
          items: [
            "Reinforcement is discontinued",
            "The behavior briefly increases (extinction burst)",
            "The behavior gradually declines"
          ],
          explain: "The characteristic pattern is a short-lived surge in responding followed by a steady decrease."
        },
        {
          type: "mcq",
          q: "A vending machine that always dispensed a snack suddenly gives nothing. The person pushes the button harder and repeatedly. This escalation illustrates:",
          choices: [
            "Spontaneous recovery",
            "An extinction burst",
            "Negative punishment",
            "Stimulus generalization"
          ],
          answer: 1,
          explain: "The sudden, more forceful and frequent button pressing right after reinforcement stops is a classic extinction burst."
        },
        {
          type: "truefalse",
          q: "If a caregiver gives in during an extinction burst, they risk reinforcing an even stronger form of the behavior.",
          answer: true,
          explain: "Reinforcing the intensified response teaches that escalation pays off, often on a thin intermittent schedule that makes the behavior more persistent."
        },
        {
          type: "match",
          q: "Match each extinction-related term to its meaning.",
          pairs: [
            ["Extinction burst", "Temporary surge in responding at the onset of extinction"],
            ["Response decline", "The gradual weakening that follows the burst"],
            ["Giving in", "Accidentally reinforcing the intensified behavior"]
          ],
          explain: "The burst comes first and is temporary; if it is reinforced, extinction can be undone and the behavior strengthened."
        }
      ]
    },
    {
      id: "l75",
      title: "Extinction-Induced Variability",
      intro: "Extinction not only reduces behavior but also provokes novel responses and emotional reactions.",
      questions: [
        {
          type: "mcq",
          q: "Besides a burst, what is a well-documented side effect of extinction?",
          choices: [
            "An increase in the variability and novelty of responding",
            "A permanent loss of all previously learned behavior",
            "An immediate return to reinforcement",
            "A complete absence of any emotional reaction"
          ],
          answer: 0,
          explain: "When familiar responses stop working, organisms try new and more variable forms of behavior, some of which are entirely novel."
        },
        {
          type: "truefalse",
          q: "Extinction can induce emotional responses such as frustration and aggression.",
          answer: true,
          explain: "Withholding an expected reinforcer often produces frustration and, in many species, extinction-induced aggression."
        },
        {
          type: "fill",
          q: "Because extinction increases response ____, new forms of behavior appear that can then be selectively reinforced through shaping.",
          answer: "variability",
          accept: ["variability", "variation", "variety"],
          explain: "The heightened variability during extinction generates novel responses, which is useful for shaping new behavior."
        },
        {
          type: "match",
          q: "Match each extinction-induced effect to its description.",
          pairs: [
            ["Increased variability", "Wider range of response forms is emitted"],
            ["Novel responses", "Never-before-seen behaviors appear"],
            ["Extinction-induced aggression", "Frustration-driven attack behavior"]
          ],
          explain: "Extinction broadens responding, produces new behaviors, and can trigger aggression tied to frustration."
        },
        {
          type: "mcq",
          q: "Azrin, Hutchinson, and Hake (1966) showed that placing pigeons on extinction could reliably produce:",
          choices: [
            "Perfect discrimination",
            "Attack on a nearby target (extinction-induced aggression)",
            "Immediate spontaneous recovery",
            "A permanent drop in variability"
          ],
          answer: 1,
          explain: "Their research demonstrated that extinction after reinforcement could induce aggressive attack, a key example of extinction-induced aggression."
        },
        {
          type: "truefalse",
          q: "The novel responses produced during extinction can be captured and strengthened by shaping.",
          answer: true,
          explain: "Because extinction generates new response variations, a trainer can reinforce a useful new form and shape it into a stable behavior."
        },
        {
          type: "order",
          q: "Order how extinction-induced variability can be turned into a new behavior.",
          items: [
            "A reinforced response is placed on extinction",
            "Response variability increases and novel forms appear",
            "A desired novel form is reinforced (shaping)"
          ],
          explain: "Extinction first widens responding; a trainer then reinforces one of the new variants to shape a new behavior."
        }
      ]
    },
    {
      id: "l76",
      title: "Resurgence and Regression",
      intro: "Under extinction, previously learned behaviors can reappear when current behaviors stop working.",
      questions: [
        {
          type: "mcq",
          q: "What is resurgence?",
          choices: [
            "The first time a new behavior is ever reinforced",
            "The reappearance of a previously reinforced, then extinguished, behavior when a more recent response is itself extinguished",
            "A permanent increase in an ongoing behavior",
            "The gradual fading of a discriminative stimulus"
          ],
          answer: 1,
          explain: "Resurgence occurs when an alternative response that was reinforced later goes on extinction, and an earlier extinguished response returns."
        },
        {
          type: "truefalse",
          q: "Resurgence involves an older behavior coming back when a newer, currently reinforced behavior is placed on extinction.",
          answer: true,
          explain: "When the recently reinforced alternative stops producing reinforcement, previously extinguished behaviors tend to re-emerge."
        },
        {
          type: "fill",
          q: "In ____, an earlier reinforced-then-extinguished response returns once a more recently reinforced response is placed on extinction.",
          answer: "resurgence",
          accept: ["resurgence"],
          explain: "Resurgence is defined by the recurrence of a previously extinguished response when the current response no longer earns reinforcement."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Resurgence", "Return of an extinguished behavior when a newer response is extinguished"],
            ["Regression", "Reverting to earlier-learned behavior under stress or extinction"],
            ["Extinction", "Withholding reinforcement for the current response"]
          ],
          explain: "Both resurgence and regression involve older behaviors reappearing, and both are commonly triggered by extinction conditions."
        },
        {
          type: "mcq",
          q: "A worker learns a new, more efficient method that gets rewarded, but when that method suddenly stops working they revert to their old habit. This is best described as:",
          choices: [
            "Errorless learning",
            "Resurgence of the previously reinforced behavior",
            "An extinction burst only",
            "Stimulus generalization"
          ],
          answer: 1,
          explain: "The old, previously reinforced-then-abandoned behavior returns once the newer response is on extinction, which is resurgence."
        },
        {
          type: "truefalse",
          q: "Regression refers to a return to earlier or less mature behavior patterns under conditions such as extinction or stress.",
          answer: true,
          explain: "Regression describes reverting to previously learned, often earlier-developed behaviors when current behavior fails to produce reinforcement."
        },
        {
          type: "order",
          q: "Order the sequence that produces resurgence.",
          items: [
            "Behavior A is reinforced, then extinguished",
            "Behavior B is reinforced as an alternative",
            "Behavior B is extinguished and Behavior A reappears"
          ],
          explain: "Resurgence requires an earlier extinguished response and a later alternative; extinguishing the alternative brings the earlier response back."
        }
      ]
    },
    {
      id: "l77",
      title: "The Discriminative Stimulus",
      intro: "A discriminative stimulus is an antecedent that signals when a response will be reinforced.",
      questions: [
        {
          type: "mcq",
          q: "A discriminative stimulus (S-D) is an antecedent that signals:",
          choices: [
            "That reinforcement is currently available for a response",
            "That the response will be punished",
            "That a reflex is about to be elicited",
            "That reinforcement has just been delivered"
          ],
          answer: 0,
          explain: "An S-D (S-dee) is an antecedent stimulus in whose presence a response has been reinforced, so it signals reinforcement availability."
        },
        {
          type: "truefalse",
          q: "In the presence of an S-delta (S with a delta), the response is typically not reinforced.",
          answer: true,
          explain: "The S-delta signals that reinforcement is unavailable, whereas the S-D signals that it is available."
        },
        {
          type: "fill",
          q: "An antecedent stimulus that signals reinforcement is available for a response is called a discriminative stimulus, abbreviated ____.",
          answer: "s-d",
          accept: ["s-d", "sd", "s d", "s^d", "sdee"],
          explain: "The discriminative stimulus is written as S-D and marks the occasion on which responding pays off."
        },
        {
          type: "match",
          q: "Match each part of the three-term contingency to its role.",
          pairs: [
            ["Antecedent (S-D)", "Signals that reinforcement is available"],
            ["Behavior", "The response that is emitted"],
            ["Consequence", "The reinforcer that follows the response"]
          ],
          explain: "The three-term contingency links an antecedent discriminative stimulus, the behavior, and its reinforcing consequence."
        },
        {
          type: "mcq",
          q: "A green traffic light means 'go' produces safe passage, while red means stopping is required. For the response of driving forward, the green light functions as:",
          choices: [
            "An unconditioned stimulus",
            "A discriminative stimulus (S-D)",
            "A punisher",
            "An establishing operation"
          ],
          answer: 1,
          explain: "The green light signals that driving forward will be reinforced (safe passage), which is exactly what a discriminative stimulus does."
        },
        {
          type: "truefalse",
          q: "A discriminative stimulus automatically forces the behavior to occur, like a reflex.",
          answer: false,
          explain: "An S-D sets the occasion for and makes a response more likely, but it does not reflexively compel it the way an eliciting stimulus does."
        },
        {
          type: "order",
          q: "Order the three-term contingency for operant behavior.",
          items: [
            "Discriminative stimulus (antecedent) is present",
            "The response occurs",
            "Reinforcing consequence follows"
          ],
          explain: "Operant behavior is organized as antecedent (S-D), behavior, and consequence, in that order."
        }
      ]
    },
    {
      id: "l78",
      title: "Stimulus Control",
      intro: "Stimulus control exists when an antecedent reliably occasions a particular behavior.",
      questions: [
        {
          type: "mcq",
          q: "Stimulus control is said to occur when:",
          choices: [
            "A behavior happens at the same rate regardless of the situation",
            "A behavior is more likely in the presence of a particular antecedent stimulus",
            "A reinforcer is delivered on every occasion",
            "A reflex is elicited by an unconditioned stimulus"
          ],
          answer: 1,
          explain: "Stimulus control means the probability of a response differs across stimuli, being higher when the controlling antecedent is present."
        },
        {
          type: "truefalse",
          q: "Stimulus control develops because a behavior has been reinforced in the presence of that stimulus.",
          answer: true,
          explain: "A stimulus gains control over behavior through a history of reinforcement for responding in its presence."
        },
        {
          type: "fill",
          q: "When an antecedent stimulus reliably occasions a behavior, we say the behavior is under ____ control.",
          answer: "stimulus",
          accept: ["stimulus", "antecedent", "discriminative"],
          explain: "The term is stimulus control: the antecedent reliably occasions the response because of the reinforcement history in its presence."
        },
        {
          type: "mcq",
          q: "A dog sits promptly when its owner says 'sit' but rarely sits at random other times. This difference in responding shows:",
          choices: [
            "Poor stimulus control",
            "Stimulus control by the verbal cue 'sit'",
            "Extinction of sitting",
            "An extinction burst"
          ],
          answer: 1,
          explain: "The response occurs reliably in the presence of the cue and rarely otherwise, which is the hallmark of stimulus control."
        },
        {
          type: "truefalse",
          q: "The degree of stimulus control can be gauged by how much responding differs across the presence and absence of the stimulus.",
          answer: true,
          explain: "Stronger stimulus control means a larger difference in response rate between when the controlling stimulus is present versus absent."
        },
        {
          type: "match",
          q: "Match each term to its description.",
          pairs: [
            ["Stimulus control", "Antecedent reliably occasions a behavior"],
            ["Generalization gradient", "How responding changes as a stimulus varies"],
            ["Reinforcement history", "Why the stimulus gained control"]
          ],
          explain: "Stimulus control is built by a reinforcement history and can be measured across stimulus values with a generalization gradient."
        },
        {
          type: "fill",
          q: "Stimulus control is the operant counterpart of ____ signaling in the three-term contingency, where the antecedent sets the occasion for the behavior.",
          answer: "antecedent",
          accept: ["antecedent", "s-d", "discriminative stimulus", "discriminative"],
          explain: "The antecedent (the discriminative stimulus) sets the occasion, and when it reliably does so, the behavior is under stimulus control."
        }
      ]
    },
    {
      id: "l79",
      title: "Discrimination Training",
      intro: "Discrimination training reinforces a response in one signaled condition and extinguishes it in another.",
      questions: [
        {
          type: "mcq",
          q: "Discrimination training is carried out by:",
          choices: [
            "Reinforcing a response only in the presence of the S-D and withholding reinforcement in the presence of the S-delta",
            "Reinforcing the response equally in every condition",
            "Punishing the response in all conditions",
            "Delivering reinforcement independent of behavior"
          ],
          answer: 0,
          explain: "By reinforcing in the S-D condition and extinguishing in the S-delta condition, the behavior comes under the control of the S-D."
        },
        {
          type: "truefalse",
          q: "Discrimination training combines reinforcement in one condition with extinction in another.",
          answer: true,
          explain: "The procedure pairs reinforcement in the presence of the S-D with extinction in the presence of the S-delta, producing a discrimination."
        },
        {
          type: "fill",
          q: "In discrimination training, responses are reinforced in the presence of the S-D and placed on ____ in the presence of the S-delta.",
          answer: "extinction",
          accept: ["extinction", "extinguished", "no reinforcement"],
          explain: "Extinction in the S-delta condition is what teaches the organism to respond only when the S-D is present."
        },
        {
          type: "order",
          q: "Order the steps of a simple discrimination training procedure.",
          items: [
            "Present the S-D and reinforce the response",
            "Present the S-delta and withhold reinforcement",
            "Responding comes under control of the S-D"
          ],
          explain: "Alternating reinforced S-D trials with non-reinforced S-delta trials produces stimulus control by the S-D."
        },
        {
          type: "mcq",
          q: "A pigeon is reinforced for pecking a key when it is lit but never when it is dark. After training it pecks only when the key is lit. This outcome is called a:",
          choices: [
            "Generalization",
            "Discrimination",
            "Spontaneous recovery",
            "Extinction burst"
          ],
          answer: 1,
          explain: "Responding selectively to the reinforced stimulus and not the extinguished one is a discrimination, the product of discrimination training."
        },
        {
          type: "truefalse",
          q: "Discrimination is conceptually the opposite of generalization, because it produces different responding to different stimuli.",
          answer: true,
          explain: "Generalization spreads responding across similar stimuli, whereas discrimination narrows responding to specific signaled conditions."
        },
        {
          type: "match",
          q: "Match each term to its role in discrimination training.",
          pairs: [
            ["S-D", "Signal in whose presence the response is reinforced"],
            ["S-delta", "Signal in whose presence the response is extinguished"],
            ["Discrimination", "Different responding to the S-D versus S-delta"]
          ],
          explain: "Reinforcing in the S-D condition and extinguishing in the S-delta condition yields a discrimination between the two signals."
        }
      ]
    },
    {
      id: "l80",
      title: "Errorless Discrimination",
      intro: "Terrace showed that careful fading of the S-delta can teach a discrimination with almost no errors.",
      questions: [
        {
          type: "mcq",
          q: "Who demonstrated errorless discrimination learning with pigeons in 1963?",
          choices: [
            "B. F. Skinner",
            "Herbert Terrace",
            "Edward Thorndike",
            "John Watson"
          ],
          answer: 1,
          explain: "Herbert Terrace's 1963 studies showed pigeons could learn a red-green discrimination with few or no errors using a fading procedure."
        },
        {
          type: "truefalse",
          q: "In errorless discrimination training, the S-delta is introduced early in a weak, brief form and then gradually faded in.",
          answer: true,
          explain: "Terrace introduced the negative stimulus early at low intensity and short duration, then gradually increased it, so few errors occurred."
        },
        {
          type: "fill",
          q: "Terrace's technique of gradually introducing and strengthening the S-delta to prevent mistakes is called ____.",
          answer: "fading",
          accept: ["fading", "stimulus fading", "errorless fading"],
          explain: "Fading gradually changes the S-delta from faint and brief to full strength, allowing the discrimination to form with almost no errors."
        },
        {
          type: "mcq",
          q: "Compared with standard trial-and-error discrimination training, Terrace found that errorless training produced:",
          choices: [
            "More errors and more emotional behavior",
            "Few errors and less emotional or aggressive behavior toward the S-delta",
            "No learning at all",
            "Faster extinction of the correct response"
          ],
          answer: 1,
          explain: "Errorless training yielded very few errors and reduced the frustration-related side effects that accompany many wrong, non-reinforced responses."
        },
        {
          type: "order",
          q: "Order the steps of Terrace's errorless (fading) procedure.",
          items: [
            "Establish responding to the S-D (positive stimulus)",
            "Introduce the S-delta early, faint and brief",
            "Gradually fade the S-delta to full intensity and duration"
          ],
          explain: "By starting the S-delta weak and short and slowly strengthening it, the learner rarely responds to it, so almost no errors occur."
        },
        {
          type: "truefalse",
          q: "Errorless discrimination requires the learner to make many mistakes before the discrimination forms.",
          answer: false,
          explain: "The entire point of errorless discrimination is to arrange conditions so that the learner makes very few or no errors while learning."
        },
        {
          type: "match",
          q: "Match each term to its meaning in errorless discrimination.",
          pairs: [
            ["Fading", "Gradually changing a stimulus from faint to full strength"],
            ["S-delta", "The stimulus signaling no reinforcement"],
            ["Errorless learning", "Acquiring a discrimination with almost no mistakes"]
          ],
          explain: "Terrace faded the S-delta in gradually, so the discrimination was learned with very few errors to the non-reinforced stimulus."
        }
      ]
    }
  ]
});
