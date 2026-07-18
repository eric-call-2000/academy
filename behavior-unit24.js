window.ACADEMY.addUnit("behaviorism", {
  id: "unit-24",
  title: "The Neuroscience of Reinforcement",
  color: "#14a58f",
  icon: "🧠",
  description: "This unit links behavioral laws of learning to the dopamine circuits, prediction-error signals, and brain systems that carry them out.",
  lessons: [
    {
      id: "l185",
      title: "Pleasure Centers",
      intro: "In 1954 James Olds and Peter Milner discovered that rats would work tirelessly to electrically stimulate certain regions of their own brains.",
      questions: [
        {
          type: "mcq",
          q: "Who discovered brain self-stimulation in rats in 1954?",
          choices: ["Ivan Pavlov and Vladimir Bekhterev", "B.F. Skinner and Charles Ferster", "James Olds and Peter Milner", "Kent Berridge and Terry Robinson"],
          answer: 2,
          explain: "James Olds and Peter Milner, working at McGill University in 1954, found that rats would press a lever to deliver electrical current to certain brain regions."
        },
        {
          type: "truefalse",
          q: "Olds and Milner's rats would press a lever thousands of times per hour for brain stimulation, sometimes ignoring food.",
          answer: true,
          explain: "The stimulation was so reinforcing that rats pressed for hours, at times choosing it over food, water, and rest."
        },
        {
          type: "fill",
          q: "The phenomenon in which an animal presses a lever to deliver electrical current to its own brain is called intracranial self-____.",
          answer: "stimulation",
          accept: ["stimulation", "self-stimulation"],
          explain: "Intracranial self-stimulation (ICSS) is the technical name for the lever-pressing-for-brain-current effect Olds and Milner discovered."
        },
        {
          type: "mcq",
          q: "What did Olds and Milner conclude their stimulation was activating?",
          choices: ["A reward or 'pleasure' center in the brain", "The rat's motor reflexes only", "A pain-avoidance circuit", "A pathway for digesting food"],
          answer: 0,
          explain: "Because the stimulation acted as a powerful reinforcer, they interpreted the target regions as reward or 'pleasure' centers."
        },
        {
          type: "match",
          q: "Match each element of the Olds and Milner study with what it refers to.",
          pairs: [["James Olds", "Co-discoverer of brain self-stimulation"], ["1954", "Year of the discovery"], ["Lever pressing", "Behavior used to trigger the stimulation"], ["Septal area", "A brain region that supported self-stimulation"]],
          explain: "Olds and Milner (1954) had rats press a lever to stimulate reward-related sites such as the septal area."
        },
        {
          type: "truefalse",
          q: "The effect was first noticed partly by accident, when an electrode ended up near a reward-related region rather than its intended target.",
          answer: true,
          explain: "The pioneering electrode was reportedly misplaced near the septal region instead of the intended site, revealing the self-stimulation effect."
        },
        {
          type: "order",
          q: "Put the steps of an intracranial self-stimulation session in order.",
          items: ["Implant an electrode in the rat's brain", "The rat presses a lever", "Electrical stimulation is delivered to the brain", "The rat repeats lever pressing at high rates"],
          explain: "The delivered brain stimulation acts as a reinforcer, so lever pressing that produces it rises sharply in frequency."
        }
      ]
    },
    {
      id: "l186",
      title: "The Reward Pathway",
      intro: "The brain's reward signal is carried largely by dopamine traveling the mesolimbic pathway from the ventral tegmental area to the nucleus accumbens.",
      questions: [
        {
          type: "mcq",
          q: "Which neurotransmitter is most central to the brain's reward pathway?",
          choices: ["Serotonin", "Dopamine", "Acetylcholine", "GABA"],
          answer: 1,
          explain: "Dopamine is the key neurotransmitter of the mesolimbic reward system, released in response to rewarding events."
        },
        {
          type: "fill",
          q: "The mesolimbic dopamine pathway projects from the ventral tegmental area to the nucleus ____.",
          answer: "accumbens",
          accept: ["accumbens", "nucleus accumbens"],
          explain: "The mesolimbic pathway runs from the ventral tegmental area (VTA) to the nucleus accumbens, a hub of the reward system."
        },
        {
          type: "truefalse",
          q: "The mesolimbic dopamine pathway begins in the ventral tegmental area (VTA).",
          answer: true,
          explain: "Dopamine cell bodies in the VTA send axons forward along the mesolimbic pathway to targets like the nucleus accumbens."
        },
        {
          type: "match",
          q: "Match each brain structure or pathway with its role in reward.",
          pairs: [["Ventral tegmental area", "Origin of mesolimbic dopamine neurons"], ["Nucleus accumbens", "Key reward target in the ventral striatum"], ["Dopamine", "Main reward neurotransmitter"], ["Mesocortical pathway", "Dopamine projection to the prefrontal cortex"]],
          explain: "Dopamine neurons in the VTA project both to the nucleus accumbens (mesolimbic) and the prefrontal cortex (mesocortical)."
        },
        {
          type: "mcq",
          q: "The nucleus accumbens is located in which part of the brain?",
          choices: ["The cerebellum", "The occipital lobe", "The medulla oblongata", "The ventral striatum"],
          answer: 3,
          explain: "The nucleus accumbens sits in the ventral striatum and is a core node of the reward circuit."
        },
        {
          type: "truefalse",
          q: "Dopamine for this pathway is manufactured in the nucleus accumbens and shipped back to the VTA.",
          answer: false,
          explain: "It is the reverse: dopamine neurons originate in the VTA and release dopamine forward onto the nucleus accumbens."
        },
        {
          type: "order",
          q: "Order the flow of a reward-related dopamine signal.",
          items: ["Dopamine neurons fire in the ventral tegmental area", "Axons carry the signal along the mesolimbic pathway", "Dopamine is released in the nucleus accumbens", "Reward-related learning is strengthened"],
          explain: "Firing in the VTA leads to dopamine release in the accumbens, which helps reinforce the behavior that produced the reward."
        }
      ]
    },
    {
      id: "l187",
      title: "Dopamine Prediction Error",
      intro: "Wolfram Schultz found that dopamine neurons do not simply signal reward; they signal how surprising a reward is.",
      questions: [
        {
          type: "mcq",
          q: "Whose recordings of monkey dopamine neurons revealed the reward prediction error signal?",
          choices: ["Wolfram Schultz", "Kent Berridge", "James Olds", "Edward Thorndike"],
          answer: 0,
          explain: "Wolfram Schultz recorded from midbrain dopamine neurons in monkeys and showed they encode reward prediction error, not raw reward."
        },
        {
          type: "truefalse",
          q: "Once a reward is fully predicted by a cue, dopamine neurons still fire strongly at the moment the reward itself arrives.",
          answer: false,
          explain: "When a cue reliably predicts reward, the dopamine burst shifts to the cue, and the predicted reward itself no longer produces a burst."
        },
        {
          type: "fill",
          q: "A reward that is better than expected produces a positive reward ____ error.",
          answer: "prediction",
          accept: ["prediction"],
          explain: "A positive reward prediction error means the outcome exceeded expectation, driving a burst of dopamine firing."
        },
        {
          type: "mcq",
          q: "What happens to dopamine firing when an expected reward is unexpectedly omitted?",
          choices: ["It surges far above baseline", "It dips below baseline", "It stays exactly at baseline", "It stops permanently"],
          answer: 1,
          explain: "An omitted but expected reward is a negative prediction error, and dopamine firing briefly drops below its baseline rate."
        },
        {
          type: "match",
          q: "Match each situation with the dopamine response Schultz observed.",
          pairs: [["Unexpected reward", "Burst of dopamine firing"], ["Reward predicted by a cue", "Dopamine burst shifts to the cue"], ["Expected reward omitted", "Dopamine dips below baseline"], ["Reward prediction error", "Difference between received and expected reward"]],
          explain: "Dopamine neurons track the gap between what was received and what was predicted, the reward prediction error."
        },
        {
          type: "truefalse",
          q: "Schultz recorded dopamine neuron activity in monkeys during Pavlovian conditioning tasks.",
          answer: true,
          explain: "His classic work used monkeys learning cue-reward associations, revealing how dopamine firing changes with prediction."
        },
        {
          type: "order",
          q: "Order how the dopamine response shifts as an animal learns a cue predicts reward.",
          items: ["An unexpected reward triggers a dopamine burst", "A cue reliably comes to predict the reward", "The dopamine burst moves to the predictive cue", "The predicted reward itself no longer triggers a burst"],
          explain: "As prediction improves, the surprise (and the dopamine burst) transfers from the reward to the earliest reliable predictor."
        }
      ]
    },
    {
      id: "l188",
      title: "Rescorla-Wagner Meets Dopamine",
      intro: "The dopamine prediction-error signal gives a biological basis to the Rescorla-Wagner model, in which surprise drives learning.",
      questions: [
        {
          type: "truefalse",
          q: "The Rescorla-Wagner model proposes that learning is driven by prediction error, or surprise.",
          answer: true,
          explain: "In Rescorla-Wagner, a cue changes its associative strength only in proportion to the surprise between expected and actual outcomes."
        },
        {
          type: "mcq",
          q: "In what year was the Rescorla-Wagner model published?",
          choices: ["1938", "1954", "1972", "1997"],
          answer: 2,
          explain: "Rescorla and Wagner introduced their influential learning model in 1972."
        },
        {
          type: "fill",
          q: "According to Rescorla and Wagner, a cue only gains associative strength when the outcome is ____.",
          answer: "surprising",
          accept: ["surprising", "unexpected"],
          explain: "Learning occurs to the extent an outcome is surprising; fully predicted outcomes drive little further learning."
        },
        {
          type: "mcq",
          q: "The dopamine reward prediction error is thought to be a neural version of which part of the Rescorla-Wagner model?",
          choices: ["The associative strength already learned", "The prediction-error term that drives updating", "The salience of the background context", "The intertrial interval"],
          answer: 1,
          explain: "The dopamine burst maps onto the model's prediction-error term, the difference between expected and received reward."
        },
        {
          type: "match",
          q: "Match each idea with its description in this convergence of theory and biology.",
          pairs: [["Rescorla-Wagner model", "Behavioral theory built on prediction error"], ["Dopamine burst", "Candidate neural signal for that error"], ["Surprise", "What actually drives associative learning"], ["Blocking", "Learning effect the model famously explains"]],
          explain: "The behavioral Rescorla-Wagner error term and the biological dopamine prediction-error signal describe the same underlying quantity."
        },
        {
          type: "truefalse",
          q: "Rescorla-Wagner predicts that a fully predicted outcome produces little new learning.",
          answer: true,
          explain: "With no prediction error, the model's update term is near zero, so associative strength barely changes."
        },
        {
          type: "order",
          q: "Order the Rescorla-Wagner update logic for a single trial.",
          items: ["Predict the outcome from the current cue", "Observe the actual outcome", "Compute the prediction error (actual minus predicted)", "Adjust the cue's associative strength by that error"],
          explain: "Each trial nudges the cue's strength toward the outcome by an amount set by the prediction error."
        }
      ]
    },
    {
      id: "l189",
      title: "Temporal Difference Learning",
      intro: "Temporal difference learning, a cornerstone of machine reinforcement learning, closely mirrors how dopamine neurons predict future reward.",
      questions: [
        {
          type: "mcq",
          q: "Temporal difference (TD) learning is most associated with which pair of researchers?",
          choices: ["Rescorla and Wagner", "Sutton and Barto", "Olds and Milner", "Hodgkin and Huxley"],
          answer: 1,
          explain: "Richard Sutton and Andrew Barto developed and popularized temporal difference learning within reinforcement learning."
        },
        {
          type: "fill",
          q: "TD learning extends prediction-error learning across ____, letting an agent predict future reward.",
          answer: "time",
          accept: ["time"],
          explain: "Unlike single-trial models, TD learning links predictions across successive moments in time to forecast upcoming reward."
        },
        {
          type: "truefalse",
          q: "The dopamine signal recorded by Schultz closely resembles the TD error used in reinforcement learning algorithms.",
          answer: true,
          explain: "Schultz, Dayan, and Montague argued in 1997 that dopamine firing behaves like the temporal difference error signal."
        },
        {
          type: "mcq",
          q: "A key advance of TD learning over the basic Rescorla-Wagner model is that it:",
          choices: ["Ignores prediction error entirely", "Requires no reward at all", "Works only in machines, not brains", "Predicts the sum of future rewards over time"],
          answer: 3,
          explain: "TD learning estimates the long-run value of a state, not just the immediate outcome, chaining predictions through time."
        },
        {
          type: "match",
          q: "Match each reinforcement-learning term with its meaning.",
          pairs: [["Temporal difference error", "Signal comparing successive value predictions"], ["Reinforcement learning", "Machine-learning field TD belongs to"], ["Value function", "Estimate of expected future reward"], ["Dopamine neurons", "Brain cells whose firing resembles TD error"]],
          explain: "TD learning updates a value function using the difference between one prediction and the next, much like dopamine firing."
        },
        {
          type: "truefalse",
          q: "Reinforcement learning is a branch of machine learning in which an agent learns from rewards and punishments.",
          answer: true,
          explain: "In reinforcement learning an agent takes actions and adjusts its behavior based on reward feedback, paralleling operant learning."
        },
        {
          type: "order",
          q: "Order how a TD-learning agent updates its predictions.",
          items: ["Estimate the value of the current state", "Take an action and receive a reward", "Compare the new value estimate with the old one", "Update the value estimate using the TD error"],
          explain: "The TD error is the mismatch between successive value estimates, and it drives the update at each step."
        }
      ]
    },
    {
      id: "l190",
      title: "Wanting vs Liking",
      intro: "Kent Berridge showed that the brain's dopamine system drives wanting a reward, which is distinct from the pleasure of liking it.",
      questions: [
        {
          type: "mcq",
          q: "Which researcher is best known for distinguishing 'wanting' from 'liking'?",
          choices: ["Kent Berridge", "Wolfram Schultz", "B.F. Skinner", "James Olds"],
          answer: 0,
          explain: "Kent Berridge, with Terry Robinson, separated the motivational 'wanting' of reward from the hedonic 'liking' of it."
        },
        {
          type: "truefalse",
          q: "In Berridge's framework, dopamine is more closely tied to wanting than to liking.",
          answer: true,
          explain: "Dopamine mainly powers incentive salience, or wanting; the pleasure of liking depends on other systems."
        },
        {
          type: "fill",
          q: "Berridge calls the dopamine-driven motivational pull toward a reward incentive ____.",
          answer: "salience",
          accept: ["salience"],
          explain: "Incentive salience is the 'wanting' component that makes cues and rewards attractive and worth pursuing."
        },
        {
          type: "mcq",
          q: "In Berridge's work, the pleasurable 'liking' reaction depends most on which systems?",
          choices: ["Dopamine neurons alone", "Opioid and endocannabinoid hedonic hotspots", "The visual cortex", "The spinal cord"],
          answer: 1,
          explain: "Liking is generated by opioid and endocannabinoid activity in small 'hedonic hotspots,' not by dopamine itself."
        },
        {
          type: "match",
          q: "Match each term from Berridge's theory with its meaning.",
          pairs: [["Wanting", "Incentive salience, driven by dopamine"], ["Liking", "The hedonic pleasure reaction itself"], ["Hedonic hotspots", "Small brain sites that amplify liking"], ["Kent Berridge", "Psychologist behind the distinction"]],
          explain: "Wanting and liking are supported by partly separate brain systems, which is why they can be pulled apart."
        },
        {
          type: "truefalse",
          q: "Because wanting and liking share exactly the same brain system, they can never be separated experimentally.",
          answer: false,
          explain: "They dissociate: depleting dopamine reduces wanting while leaving liking reactions to sweet tastes intact."
        },
        {
          type: "order",
          q: "Order the steps of an experiment that dissociates wanting from liking.",
          items: ["Give a rat a sweet reward it clearly likes", "Deplete the rat's brain dopamine", "Observe that liking facial reactions still persist", "Observe that the rat no longer works to obtain the reward"],
          explain: "Dopamine loss strips away wanting while sparing liking, showing the two are driven by different mechanisms."
        }
      ]
    },
    {
      id: "l191",
      title: "The Neuroscience of Extinction",
      intro: "Extinction of a conditioned fear does not erase the original memory; the prefrontal cortex learns to inhibit the amygdala.",
      questions: [
        {
          type: "truefalse",
          q: "Extinction works by erasing the original fear memory from the brain.",
          answer: false,
          explain: "Extinction does not delete the original memory; it builds new inhibitory learning that suppresses the old response."
        },
        {
          type: "mcq",
          q: "Extinction of a conditioned response is best described as:",
          choices: ["Erasure of the original association", "New inhibitory learning layered over the old memory", "A permanent loss of the amygdala", "A type of sensitization"],
          answer: 1,
          explain: "Extinction is new learning that the cue no longer predicts the outcome, which inhibits rather than erases the original memory."
        },
        {
          type: "fill",
          q: "During extinction, the ventromedial prefrontal cortex helps ____ the amygdala.",
          answer: "inhibit",
          accept: ["inhibit", "suppress"],
          explain: "The ventromedial prefrontal cortex sends inhibitory control to the amygdala, dampening the conditioned fear response."
        },
        {
          type: "mcq",
          q: "Which structure is most central to acquiring conditioned fear?",
          choices: ["The cerebellum", "The retina", "The amygdala", "The hippocampus alone"],
          answer: 2,
          explain: "The amygdala is essential for learning and expressing conditioned fear responses."
        },
        {
          type: "match",
          q: "Match each structure or effect with its role in fear and extinction.",
          pairs: [["Amygdala", "Center for acquiring conditioned fear"], ["Ventromedial prefrontal cortex", "Region that inhibits fear during extinction"], ["Spontaneous recovery", "Return of a fear response after time passes"], ["Extinction", "New learning that suppresses a conditioned response"]],
          explain: "Extinction relies on the prefrontal cortex inhibiting the amygdala, while recovery effects reveal the original memory is intact."
        },
        {
          type: "truefalse",
          q: "The return of an extinguished fear after time passes, called spontaneous recovery, shows the original memory was not erased.",
          answer: true,
          explain: "Spontaneous recovery, renewal, and reinstatement all demonstrate that the original fear memory survives extinction."
        },
        {
          type: "order",
          q: "Order the steps of extinction learning for a conditioned fear.",
          items: ["A conditioned stimulus is presented without the feared outcome", "The prefrontal cortex forms a new inhibitory memory", "The prefrontal cortex suppresses amygdala activity", "The conditioned fear response weakens"],
          explain: "Repeated safe exposures build prefrontal inhibition of the amygdala, which lowers the conditioned fear response."
        }
      ]
    },
    {
      id: "l192",
      title: "Addiction and Reward Hijacking",
      intro: "Addictive drugs hijack the brain's dopamine reward system, and conditioned cues drive the craving that fuels compulsive use.",
      questions: [
        {
          type: "mcq",
          q: "Most addictive drugs raise dopamine levels in which structure?",
          choices: ["The nucleus accumbens", "The cerebellum", "The visual cortex", "The spinal cord"],
          answer: 0,
          explain: "Drugs of abuse sharply increase dopamine in the nucleus accumbens, overstimulating the natural reward circuit."
        },
        {
          type: "truefalse",
          q: "Drugs of abuse are said to hijack the same reward circuitry that evolved for natural rewards like food.",
          answer: true,
          explain: "Addictive drugs act directly on the dopamine reward system that normally reinforces adaptive behaviors such as eating."
        },
        {
          type: "fill",
          q: "Environmental cues linked to drug use become powerful conditioned ____ that can trigger craving.",
          answer: "stimuli",
          accept: ["stimuli", "stimulus", "cues"],
          explain: "Through Pavlovian conditioning, drug-associated cues become conditioned stimuli that provoke craving and relapse."
        },
        {
          type: "mcq",
          q: "In Robinson and Berridge's incentive-sensitization theory, 'wanting' for the drug becomes:",
          choices: ["Weaker over time", "Abnormally strong and sensitized", "Identical to liking", "Completely absent"],
          answer: 1,
          explain: "Incentive sensitization holds that repeated drug use exaggerates dopamine-driven wanting, even as liking may not grow."
        },
        {
          type: "match",
          q: "Match each addiction concept with its description.",
          pairs: [["Nucleus accumbens", "Reward hub flooded with dopamine by drugs"], ["Conditioned cue", "Drug-associated trigger for craving"], ["Incentive sensitization", "Growing wanting for the drug"], ["Tolerance", "Reduced drug effect after repeated use"]],
          explain: "Repeated drug exposure sensitizes wanting and strengthens cue-triggered craving, hallmarks of the addiction cycle."
        },
        {
          type: "truefalse",
          q: "In addiction, liking a drug typically grows stronger and stronger while wanting for it fades away.",
          answer: false,
          explain: "It is the reverse: wanting becomes sensitized and intense, while liking often fails to grow and may even decline."
        },
        {
          type: "order",
          q: "Order the conditioned-craving cycle in addiction.",
          items: ["A drug floods the nucleus accumbens with dopamine", "Nearby cues become associated with the drug", "Later, those cues trigger intense craving", "The person compulsively seeks the drug"],
          explain: "Drug-driven dopamine surges make ordinary cues into powerful craving triggers that sustain compulsive drug seeking."
        }
      ]
    }
  ]
});
