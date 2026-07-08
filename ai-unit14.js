window.ACADEMY.addUnit("ai", {
  id: "unit-14",
  title: "Images, Audio & Multimodal AI",
  color: "#2bb3a3",
  icon: "🎨",
  description: "AI that sees, hears, speaks, draws, and films.",
  lessons: [
    {
      id: "l105",
      title: "What 'Multimodal' Means",
      intro: "Multimodal models handle more than one kind of input or output, like text plus images and audio.",
      questions: [
        {
          type: "mcq",
          q: "What does 'multimodal' mean for an AI model?",
          choices: [
            "It can work with more than one kind of input or output, like text and images",
            "It runs in more than one country",
            "It can only handle plain text",
            "It has more than one owner company"
          ],
          answer: 0,
          explain: "Multimodal means several 'modes' of data, such as text, images, and audio, not just one."
        },
        {
          type: "truefalse",
          q: "A text-only chatbot that cannot look at images is multimodal.",
          answer: false,
          explain: "Text-only means a single mode. Multimodal means it handles more than one, like text plus images."
        },
        {
          type: "match",
          q: "Match each 'mode' to an example of it.",
          pairs: [
            ["Text", "A typed question or answer"],
            ["Image", "A photo you upload"],
            ["Audio", "A voice recording or speech"]
          ],
          explain: "Text, images, and audio are all different modes a multimodal model can take in or produce."
        },
        {
          type: "fill",
          q: "A model that accepts both text and pictures is called ____.",
          answer: "multimodal",
          accept: ["multimodal", "multi-modal"],
          explain: "Multimodal models combine more than one type of data in a single system."
        },
        {
          type: "mcq",
          q: "Which is an example of a multimodal task?",
          choices: [
            "Uploading a photo and asking the AI to describe what is in it",
            "Asking a calculator to add two numbers",
            "Sorting a list of names alphabetically",
            "Setting a phone alarm"
          ],
          answer: 0,
          explain: "Mixing an image input with a text answer is multimodal because two modes are involved."
        },
        {
          type: "truefalse",
          q: "Claude can accept images as input, not just text.",
          answer: true,
          explain: "Claude has vision, so you can share images and ask questions about them."
        },
        {
          type: "mcq",
          q: "Why are multimodal models useful?",
          choices: [
            "They let you mix inputs, like showing a chart and asking about it in words",
            "They remove the need for the internet",
            "They make text-only tasks impossible",
            "They only work offline"
          ],
          answer: 0,
          explain: "Combining modes lets you point at a picture and ask about it in plain language."
        },
        {
          type: "order",
          q: "Order these steps of a simple multimodal request.",
          items: [
            "Upload an image to the AI",
            "Type a question about the image",
            "Read the AI's written answer"
          ],
          explain: "You provide an image and text, and the model responds, mixing modes in one flow."
        }
      ]
    },
    {
      id: "l106",
      title: "AI Image Generation",
      intro: "Text-to-image tools turn a written description into a brand-new picture.",
      questions: [
        {
          type: "mcq",
          q: "What does a text-to-image tool do?",
          choices: [
            "Creates a new image from a written description",
            "Deletes images from your phone",
            "Only shrinks existing photos",
            "Reads text out loud"
          ],
          answer: 0,
          explain: "Text-to-image models generate a fresh picture based on the words you give them."
        },
        {
          type: "match",
          q: "Match each image tool to the company or maker behind it.",
          pairs: [
            ["DALL-E", "OpenAI"],
            ["Firefly", "Adobe"],
            ["Stable Diffusion", "Stability AI"]
          ],
          explain: "DALL-E is from OpenAI, Firefly from Adobe, and Stable Diffusion from Stability AI."
        },
        {
          type: "truefalse",
          q: "Midjourney is a popular AI image generation tool.",
          answer: true,
          explain: "Midjourney is a well-known text-to-image service known for its stylized results."
        },
        {
          type: "fill",
          q: "Turning a written prompt into a picture is called ____-to-image generation.",
          answer: "text",
          accept: ["text"],
          explain: "Text-to-image is the standard name for generating pictures from words."
        },
        {
          type: "mcq",
          q: "Which of these is NOT primarily an image generation tool?",
          choices: [
            "Whisper",
            "DALL-E",
            "Midjourney",
            "Stable Diffusion"
          ],
          answer: 0,
          explain: "Whisper is a speech transcription tool from OpenAI, not an image generator."
        },
        {
          type: "truefalse",
          q: "AI-generated images can contain odd mistakes, like extra fingers or garbled text.",
          answer: true,
          explain: "Image generators can still get details wrong, so always review the output carefully."
        },
        {
          type: "mcq",
          q: "Stable Diffusion is notable partly because it is:",
          choices: [
            "Open-weight, so people can download and run it themselves",
            "The only tool that makes video",
            "Made by Google",
            "Unable to use text prompts"
          ],
          answer: 0,
          explain: "Stable Diffusion, from Stability AI, is open-weight and can run on your own hardware."
        },
        {
          type: "order",
          q: "Order the steps to make an AI image.",
          items: [
            "Write a text description of what you want",
            "Send it to the image tool",
            "Review and refine the generated picture"
          ],
          explain: "You describe, generate, then iterate until the image matches your idea."
        }
      ]
    },
    {
      id: "l107",
      title: "Prompting for Images",
      intro: "Describe the subject, style, lighting, and composition, then iterate toward the image you want.",
      questions: [
        {
          type: "mcq",
          q: "Which prompt is most likely to give a strong result?",
          choices: [
            "A red fox sitting in a snowy forest at sunrise, soft warm light, photo style",
            "fox",
            "make something nice",
            "picture please"
          ],
          answer: 0,
          explain: "Detailed prompts with subject, setting, lighting, and style guide the tool far better than one vague word."
        },
        {
          type: "match",
          q: "Match each prompt detail to what it controls.",
          pairs: [
            ["Subject", "What the image shows"],
            ["Style", "Photo, painting, or cartoon look"],
            ["Lighting", "How bright and where the light falls"]
          ],
          explain: "Subject, style, and lighting are separate levers you can adjust in an image prompt."
        },
        {
          type: "truefalse",
          q: "Adding style words like 'watercolor' or 'photorealistic' can change the look of the image.",
          answer: true,
          explain: "Style words strongly steer the visual feel of the result."
        },
        {
          type: "fill",
          q: "Trying a prompt, seeing the result, and tweaking it is called ____.",
          answer: "iterating",
          accept: ["iterating", "iteration", "iterate"],
          explain: "Image prompting is rarely one-and-done, you iterate toward the picture you want."
        },
        {
          type: "order",
          q: "Order a good image-prompting workflow.",
          items: [
            "Describe subject, style, and lighting",
            "Generate a first version",
            "Adjust the prompt based on what you see",
            "Generate again until it fits"
          ],
          explain: "Describe, generate, adjust, and repeat is the core loop of image prompting."
        },
        {
          type: "mcq",
          q: "Which detail describes composition?",
          choices: [
            "Close-up from a low angle, subject on the left",
            "Bright yellow color",
            "Made by Adobe",
            "Saved as a PNG file"
          ],
          answer: 0,
          explain: "Composition covers framing and layout, like camera angle and where the subject sits."
        },
        {
          type: "truefalse",
          q: "The very first image you generate is always the best you can get.",
          answer: false,
          explain: "Refining the prompt over several tries usually improves the result a lot."
        },
        {
          type: "mcq",
          q: "If an image is close but the lighting is wrong, a good next step is to:",
          choices: [
            "Keep the prompt but change the lighting words and regenerate",
            "Give up on the tool entirely",
            "Delete all your earlier prompts forever",
            "Switch to a spreadsheet"
          ],
          answer: 0,
          explain: "Small targeted edits to the prompt let you fix one thing at a time."
        }
      ]
    },
    {
      id: "l108",
      title: "AI That Sees",
      intro: "Vision models can describe and analyze images, and Claude has this ability too.",
      questions: [
        {
          type: "mcq",
          q: "What is a 'vision' model good at?",
          choices: [
            "Looking at an image and describing or analyzing what is in it",
            "Making the screen brighter",
            "Charging your battery",
            "Printing documents"
          ],
          answer: 0,
          explain: "Vision models take an image as input and can describe, read, or reason about its contents."
        },
        {
          type: "truefalse",
          q: "You can show Claude a photo and ask questions about it.",
          answer: true,
          explain: "Claude's vision lets it analyze images you share, not just read your text."
        },
        {
          type: "mcq",
          q: "Which is a realistic use of AI vision?",
          choices: [
            "Uploading a receipt and asking the AI to pull out the total",
            "Physically mailing a letter for you",
            "Cooking your dinner",
            "Driving to the store"
          ],
          answer: 0,
          explain: "Reading text and details out of an image, like a receipt, is a classic vision task."
        },
        {
          type: "match",
          q: "Match each vision task to a plain example.",
          pairs: [
            ["Describe", "Tell me what is happening in this photo"],
            ["Extract text", "Read the words on this sign"],
            ["Compare", "Which of these two charts is higher"]
          ],
          explain: "Vision models can describe scenes, read text in images, and compare visuals."
        },
        {
          type: "truefalse",
          q: "AI vision never makes mistakes and can be trusted blindly.",
          answer: false,
          explain: "Vision models can misread blurry or tricky images, so check important results."
        },
        {
          type: "fill",
          q: "An AI that can analyze pictures is said to have ____.",
          answer: "vision",
          accept: ["vision", "sight"],
          explain: "Vision is the ability to take images as input and reason about them."
        },
        {
          type: "mcq",
          q: "A good tip when using AI vision on a document photo is to:",
          choices: [
            "Use a clear, well-lit image so details are readable",
            "Use the blurriest photo you can find",
            "Cover half the page first",
            "Turn the image upside down on purpose"
          ],
          answer: 0,
          explain: "Clear, legible images help the model read details accurately."
        }
      ]
    },
    {
      id: "l109",
      title: "Speech & Audio",
      intro: "AI can turn text into realistic speech and turn recorded speech back into text.",
      questions: [
        {
          type: "match",
          q: "Match each audio task to what it does.",
          pairs: [
            ["Text-to-speech", "Turns written words into spoken audio"],
            ["Transcription", "Turns spoken audio into written text"]
          ],
          explain: "Text-to-speech reads text aloud, while transcription writes down what was said."
        },
        {
          type: "mcq",
          q: "What is OpenAI's Whisper mainly used for?",
          choices: [
            "Transcribing speech into text",
            "Generating images",
            "Editing videos",
            "Writing music lyrics"
          ],
          answer: 0,
          explain: "Whisper, from OpenAI, is a well-known speech-to-text transcription model."
        },
        {
          type: "truefalse",
          q: "ElevenLabs is known for realistic AI-generated voices.",
          answer: true,
          explain: "ElevenLabs makes very natural-sounding text-to-speech voices."
        },
        {
          type: "fill",
          q: "Turning spoken words into written text is called ____.",
          answer: "transcription",
          accept: ["transcription", "speech-to-text", "speech to text"],
          explain: "Transcription, or speech-to-text, converts audio of speech into written words."
        },
        {
          type: "mcq",
          q: "Text-to-speech is useful for:",
          choices: [
            "Making an audiobook or voiceover from written text",
            "Deleting your emails",
            "Compressing photos",
            "Blocking spam calls"
          ],
          answer: 0,
          explain: "Text-to-speech reads text aloud, handy for narration and accessibility."
        },
        {
          type: "truefalse",
          q: "Transcription tools can help caption videos and take meeting notes.",
          answer: true,
          explain: "Turning speech into text powers captions, subtitles, and searchable notes."
        },
        {
          type: "order",
          q: "Order the steps of transcribing a recording.",
          items: [
            "Record or upload the spoken audio",
            "Run it through a transcription model",
            "Read the written text it produces"
          ],
          explain: "Audio goes in, the model listens, and text comes out."
        },
        {
          type: "mcq",
          q: "Which pairing is correct?",
          choices: [
            "Whisper does transcription; ElevenLabs does voices",
            "Whisper makes images; ElevenLabs makes video",
            "Whisper writes code; ElevenLabs writes essays",
            "Both only handle text with no audio at all"
          ],
          answer: 0,
          explain: "Whisper turns speech into text, while ElevenLabs turns text into lifelike speech."
        }
      ]
    },
    {
      id: "l110",
      title: "AI Video",
      intro: "Text-to-video tools can generate short clips from a description, and they are improving fast.",
      questions: [
        {
          type: "mcq",
          q: "What does a text-to-video tool do?",
          choices: [
            "Generates a video clip from a written description",
            "Speeds up your internet",
            "Only trims existing videos",
            "Converts video into a spreadsheet"
          ],
          answer: 0,
          explain: "Text-to-video models create new moving footage based on a prompt."
        },
        {
          type: "match",
          q: "Match each video tool to its maker.",
          pairs: [
            ["Sora", "OpenAI"],
            ["Veo", "Google"],
            ["Runway", "Runway"]
          ],
          explain: "Sora is from OpenAI, Veo is from Google, and Runway makes its own video tools."
        },
        {
          type: "truefalse",
          q: "AI video generation is early technology that is still improving quickly.",
          answer: true,
          explain: "Text-to-video is newer than image generation and is advancing fast, but still has limits."
        },
        {
          type: "fill",
          q: "OpenAI's video generation model is called ____.",
          answer: "Sora",
          accept: ["sora"],
          explain: "Sora is OpenAI's text-to-video model."
        },
        {
          type: "mcq",
          q: "A common limitation of today's AI video is:",
          choices: [
            "Clips are often short and can have strange glitches",
            "It only works in black and white",
            "It can never include any motion",
            "It requires no prompt at all"
          ],
          answer: 0,
          explain: "Generated clips tend to be brief and may show odd artifacts, since the tech is still maturing."
        },
        {
          type: "truefalse",
          q: "Google's video generation model is named Whisper.",
          answer: false,
          explain: "Google's video model is Veo. Whisper is OpenAI's transcription tool."
        },
        {
          type: "mcq",
          q: "Which is the most realistic expectation for AI video today?",
          choices: [
            "Short clips that may need several tries and editing",
            "Flawless feature-length movies with no effort",
            "It cannot make any video at all",
            "It only outputs still photos"
          ],
          answer: 0,
          explain: "AI video is impressive but early, so expect short clips and some iteration."
        }
      ]
    },
    {
      id: "l111",
      title: "Music & Voice Cloning",
      intro: "AI can generate music and copy a person's voice, which is powerful but carries real risks.",
      questions: [
        {
          type: "mcq",
          q: "What is voice cloning?",
          choices: [
            "Using AI to copy a specific person's voice",
            "Turning music into a photo",
            "Deleting all your audio files",
            "Making a phone ring louder"
          ],
          answer: 0,
          explain: "Voice cloning recreates a particular person's voice from samples of their speech."
        },
        {
          type: "truefalse",
          q: "AI music generators can create original songs or backing tracks from a prompt.",
          answer: true,
          explain: "AI music tools can compose melodies, beats, and full tracks from text descriptions."
        },
        {
          type: "mcq",
          q: "Why is voice cloning risky?",
          choices: [
            "It can be misused to impersonate people or scam others",
            "It always improves sound quality",
            "It makes voices impossible to record",
            "It has no possible downsides"
          ],
          answer: 0,
          explain: "Cloned voices can fuel impersonation scams and fraud, so consent and caution matter."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Voice cloning", "Copying a real person's voice"],
            ["AI music generation", "Creating songs from a text prompt"]
          ],
          explain: "Voice cloning mimics a specific voice, while music generation composes new audio."
        },
        {
          type: "truefalse",
          q: "It is always fine to clone anyone's voice without asking them.",
          answer: false,
          explain: "Cloning someone's voice without consent can be harmful and, in many places, illegal."
        },
        {
          type: "fill",
          q: "Copying a specific person's voice with AI is called voice ____.",
          answer: "cloning",
          accept: ["cloning"],
          explain: "Voice cloning reproduces an individual's unique voice."
        },
        {
          type: "mcq",
          q: "A responsible rule for voice cloning is:",
          choices: [
            "Only clone a voice with the person's clear permission",
            "Clone celebrity voices for pranks",
            "Never tell anyone the audio is AI-made",
            "Use it to pretend to be someone's boss"
          ],
          answer: 0,
          explain: "Consent is the key guardrail. Cloning a voice without permission invites abuse."
        }
      ]
    },
    {
      id: "l112",
      title: "Deepfakes & Synthetic Media",
      intro: "Realistic fakes are easy to make now, so stay skeptical and look for provenance and watermarks.",
      questions: [
        {
          type: "mcq",
          q: "What is a deepfake?",
          choices: [
            "AI-generated fake video or audio that looks or sounds real",
            "A very deep swimming pool",
            "A slow internet connection",
            "A type of camera lens"
          ],
          answer: 0,
          explain: "A deepfake is synthetic media crafted to convincingly imitate a real person or event."
        },
        {
          type: "truefalse",
          q: "You should be skeptical of shocking videos, since they could be AI-generated fakes.",
          answer: true,
          explain: "Because realistic fakes are easy to make, a healthy dose of doubt is wise."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["Deepfake", "A realistic AI-made fake of a person"],
            ["Watermark", "A hidden or visible mark showing content is AI-made"],
            ["Provenance", "The traceable origin and history of a file"]
          ],
          explain: "Watermarks and provenance help you tell where media came from and whether it is synthetic."
        },
        {
          type: "fill",
          q: "The traceable origin and history of a piece of media is called its ____.",
          answer: "provenance",
          accept: ["provenance", "origin"],
          explain: "Checking provenance, or where content came from, helps you judge if it is trustworthy."
        },
        {
          type: "mcq",
          q: "A good habit when you see a suspicious clip online is to:",
          choices: [
            "Check the source and look for signs it may be AI-made",
            "Immediately share it everywhere",
            "Assume it must be real",
            "Believe it because it looks polished"
          ],
          answer: 0,
          explain: "Verifying the source and looking for provenance or watermarks guards against being fooled."
        },
        {
          type: "truefalse",
          q: "Watermarks and provenance signals can help identify AI-generated content.",
          answer: true,
          explain: "Many tools add markers or metadata so people can trace and flag synthetic media."
        },
        {
          type: "order",
          q: "Order a smart way to react to a viral video.",
          items: [
            "Pause before believing or sharing it",
            "Check who posted it and where it came from",
            "Look for watermarks or provenance signals",
            "Decide whether it is trustworthy"
          ],
          explain: "Slow down, check the source, look for provenance, then judge. That resists deepfakes."
        },
        {
          type: "mcq",
          q: "Why do deepfakes matter for everyday people?",
          choices: [
            "They can spread misinformation and enable scams",
            "They make your phone faster",
            "They only exist in movies",
            "They are impossible to create"
          ],
          answer: 0,
          explain: "Convincing fakes can mislead the public and power fraud, so awareness protects you."
        }
      ]
    }
  ]
});
