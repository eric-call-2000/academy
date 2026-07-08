window.ACADEMY.addUnit("ai", {
  id: "unit-2",
  title: "Meet the Models",
  color: "#1cb0f6",
  icon: "🗺️",
  description: "The AI landscape: who builds what, and how to tell the models apart.",
  lessons: [
    {
      id: "l9",
      title: "The Big AI Labs",
      intro: "A handful of organizations build the frontier models most people use today.",
      questions: [
        { type: "mcq", q: "Which company makes Claude?", choices: ["Anthropic", "OpenAI", "Google", "Meta"], answer: 0, explain: "Claude is the AI assistant built by Anthropic." },
        { type: "mcq", q: "Which company makes ChatGPT?", choices: ["OpenAI", "Anthropic", "Mistral", "xAI"], answer: 0, explain: "OpenAI builds ChatGPT and the GPT model family behind it." },
        { type: "mcq", q: "The Gemini models come from which company?", choices: ["Google", "Meta", "Anthropic", "OpenAI"], answer: 0, explain: "Gemini is Google's family of AI models, developed by Google DeepMind." },
        { type: "truefalse", q: "Meta is known for releasing open-weight AI models called Llama.", answer: true, explain: "Meta's Llama models are open-weight, meaning the weights can be downloaded and run by others." },
        { type: "truefalse", q: "Mistral is a company that only makes self-driving cars, not AI models.", answer: false, explain: "Mistral is an AI lab known for its open-weight language models." },
        { type: "match", q: "Match each AI lab to a product it is known for.", pairs: [["Anthropic", "Claude"], ["OpenAI", "ChatGPT"], ["Google", "Gemini"], ["xAI", "Grok"]], explain: "Each of these labs has its own flagship assistant or model family." },
        { type: "fill", q: "The company behind the Grok assistant is called ____.", answer: "xAI", accept: ["xai"], explain: "xAI, founded by Elon Musk, builds the Grok assistant." },
        { type: "mcq", q: "What does it mean for a company to build a 'frontier model'?", choices: ["One of the most capable models available at the time", "A model that only runs offline", "A model made only for children", "A model with no safety testing"], answer: 0, explain: "Frontier models are the leading, most capable models of their moment." }
      ]
    },
    {
      id: "l10",
      title: "Claude by Anthropic",
      intro: "Claude is Anthropic's assistant, built with a strong safety focus and offered in three sizes.",
      questions: [
        { type: "mcq", q: "What are the three main sizes of Claude?", choices: ["Opus, Sonnet, Haiku", "Small, Medium, Large", "Alpha, Beta, Gamma", "Red, Green, Blue"], answer: 0, explain: "Claude comes in Opus, Sonnet, and Haiku sizes, from most capable to fastest." },
        { type: "mcq", q: "Which Claude size is the most capable for hard reasoning tasks?", choices: ["Opus", "Haiku", "Sonnet", "They are all identical"], answer: 0, explain: "Opus is the most capable tier, best for the most demanding tasks." },
        { type: "mcq", q: "Which Claude size is the fastest and smallest?", choices: ["Haiku", "Opus", "Sonnet", "Grok"], answer: 0, explain: "Haiku is the smallest and fastest tier, great for quick, lightweight tasks." },
        { type: "truefalse", q: "Sonnet is designed to balance capability and speed, sitting between Opus and Haiku.", answer: true, explain: "Sonnet is the balanced middle tier of the Claude family." },
        { type: "match", q: "Match each Claude size to its main strength.", pairs: [["Opus", "Most capable"], ["Sonnet", "Balanced"], ["Haiku", "Fastest and smallest"]], explain: "The three tiers trade capability against speed and cost." },
        { type: "order", q: "Order the Claude sizes from smallest and fastest to largest and most capable.", items: ["Haiku", "Sonnet", "Opus"], explain: "Haiku is smallest, Sonnet is in the middle, and Opus is the largest and most capable." },
        { type: "fill", q: "Anthropic emphasizes AI ____ in how Claude is designed and trained.", answer: "safety", accept: ["safety", "helpfulness and safety"], explain: "Anthropic is known for its strong focus on AI safety." },
        { type: "truefalse", q: "You always have to pay to use Claude and there is no way to try it in a browser.", answer: false, explain: "You can chat with Claude in a browser at Claude.ai, with free access available." }
      ]
    },
    {
      id: "l11",
      title: "ChatGPT & the GPT Models",
      intro: "ChatGPT is the app; the GPT models are the engines running underneath it.",
      questions: [
        { type: "mcq", q: "What is the difference between ChatGPT and GPT?", choices: ["ChatGPT is the app; GPT is the model family it runs on", "They are two rival companies", "GPT is the app; ChatGPT is the model", "There is no difference at all"], answer: 0, explain: "ChatGPT is the product you chat with; the GPT models are the underlying engines." },
        { type: "truefalse", q: "OpenAI makes both ChatGPT and the GPT model family.", answer: true, explain: "OpenAI builds the GPT models and the ChatGPT app that uses them." },
        { type: "mcq", q: "In OpenAI's naming, what does a name ending in 'mini' usually signal?", choices: ["A smaller, faster, cheaper version", "The single most powerful model", "A model that only does images", "A model with no text ability"], answer: 0, explain: "A 'mini' suffix usually marks a smaller, faster, lower-cost version of a model." },
        { type: "match", q: "Match the term to what it refers to.", pairs: [["ChatGPT", "The chat app"], ["GPT", "The model family"], ["OpenAI", "The company"]], explain: "The company, the model family, and the app are three separate things." },
        { type: "truefalse", q: "The same GPT model can be reached through the ChatGPT app or through OpenAI's API.", answer: true, explain: "One model can power both a friendly app and other software through an API." },
        { type: "fill", q: "The letters GPT stand for Generative Pre-trained ____.", answer: "Transformer", accept: ["transformer"], explain: "GPT means Generative Pre-trained Transformer, the model architecture behind it." },
        { type: "mcq", q: "Which statement is most accurate about ChatGPT?", choices: ["It is a product from OpenAI powered by GPT models", "It is an open-weight model anyone can download", "It is made by Google", "It is the same thing as Claude"], answer: 0, explain: "ChatGPT is OpenAI's product, running on the GPT model family." }
      ]
    },
    {
      id: "l12",
      title: "Google Gemini",
      intro: "Gemini is Google's multimodal model family, woven into Search, Workspace, and its own app.",
      questions: [
        { type: "mcq", q: "Gemini is the AI model family from which company?", choices: ["Google", "OpenAI", "Anthropic", "Mistral"], answer: 0, explain: "Gemini is Google's family of AI models." },
        { type: "mcq", q: "What does it mean that Gemini is 'multimodal'?", choices: ["It can work with more than just text, like images and audio", "It can only be used in multiple countries", "It runs on many computers at once", "It has multiple company owners"], answer: 0, explain: "Multimodal means the model handles several kinds of input, such as text, images, and audio." },
        { type: "truefalse", q: "Google has built Gemini features into products like Search and Workspace.", answer: true, explain: "Gemini shows up across Google products, including Search and Workspace apps." },
        { type: "match", q: "Match each product to its maker.", pairs: [["Gemini", "Google"], ["Claude", "Anthropic"], ["ChatGPT", "OpenAI"]], explain: "Knowing which company owns which product helps you navigate the landscape." },
        { type: "fill", q: "A model that can handle text, images, and audio is described as ____.", answer: "multimodal", accept: ["multimodal", "multi-modal"], explain: "Multimodal models accept and can produce more than one type of media." },
        { type: "truefalse", q: "Gemini can only understand plain text and cannot process images.", answer: false, explain: "Gemini is multimodal, so it can work with images and other media, not just text." },
        { type: "mcq", q: "Which Google team is closely associated with building Gemini?", choices: ["Google DeepMind", "Google Maps", "Google Ads", "Google Fonts"], answer: 0, explain: "Google DeepMind is the AI research group behind Gemini." }
      ]
    },
    {
      id: "l13",
      title: "Open-Weight Models: Llama, Mistral & More",
      intro: "Some models keep their weights private, while open-weight models can be downloaded and run yourself.",
      questions: [
        { type: "mcq", q: "What is an 'open-weight' model?", choices: ["One whose weights you can download and run yourself", "One that is always free of bugs", "One that only runs in a browser", "One with no training data"], answer: 0, explain: "Open-weight models publish their weights so others can download and run them." },
        { type: "mcq", q: "Which of these is a well-known open-weight model family?", choices: ["Meta's Llama", "OpenAI's GPT", "Anthropic's Claude", "Google's Gemini app"], answer: 0, explain: "Meta's Llama models are open-weight; Claude, GPT, and Gemini are closed." },
        { type: "truefalse", q: "Mistral is known for releasing open-weight models.", answer: true, explain: "Mistral releases open-weight models that developers can run themselves." },
        { type: "truefalse", q: "Closed models like Claude and GPT let you download their raw weights for free.", answer: false, explain: "Closed models are used through apps or APIs; their weights are not published for download." },
        { type: "match", q: "Match each model family to whether it is open-weight or closed.", pairs: [["Llama", "Open-weight"], ["Mistral", "Open-weight"], ["Claude", "Closed"], ["GPT", "Closed"]], explain: "Llama and Mistral publish weights; Claude and GPT are accessed through apps or APIs." },
        { type: "fill", q: "Meta's open-weight model family is called ____.", answer: "Llama", accept: ["llama"], explain: "Llama is Meta's family of open-weight language models." },
        { type: "mcq", q: "One practical benefit of open-weight models is that you can:", choices: ["Run them on your own hardware for more control and privacy", "Guarantee they never make mistakes", "Use them without any computer at all", "Force other companies to close their models"], answer: 0, explain: "Running a model yourself can give you more control over privacy and customization." },
        { type: "truefalse", q: "Open-weight does not necessarily mean the training data is fully public.", answer: true, explain: "Open weights let you run the model, but the training data is often not released." }
      ]
    },
    {
      id: "l14",
      title: "Model vs Chatbot vs App",
      intro: "The model is the engine, the app is the car, and one model can power many products through an API.",
      questions: [
        { type: "mcq", q: "In the 'engine and car' analogy, what is the model?", choices: ["The engine", "The steering wheel", "The paint color", "The car dealership"], answer: 0, explain: "The model is the engine; the app around it is the car." },
        { type: "match", q: "Match each layer to its role.", pairs: [["Model", "The engine"], ["App", "The car"], ["API", "The connection developers plug into"]], explain: "The model powers the app, and an API lets other software connect to the model." },
        { type: "truefalse", q: "One model can power many different apps through an API.", answer: true, explain: "APIs let a single model serve many products beyond its own chat app." },
        { type: "fill", q: "Developers connect their own software to a model through an ____.", answer: "API", accept: ["api", "application programming interface"], explain: "An API (application programming interface) lets software talk to the model." },
        { type: "mcq", q: "Claude.ai and ChatGPT are best described as:", choices: ["Products (apps) built around underlying models", "Two names for the same model", "Programming languages", "Types of computer hardware"], answer: 0, explain: "Claude.ai and ChatGPT are apps, each built around an underlying model." },
        { type: "order", q: "Order these from the underlying engine up to what the user touches.", items: ["The model", "The API", "The app"], explain: "The model is the base, the API exposes it, and the app is what the user interacts with." },
        { type: "truefalse", q: "The chat app and the model inside it are always exactly the same thing.", answer: false, explain: "The app is the product wrapper; the model is the engine running inside it." }
      ]
    },
    {
      id: "l15",
      title: "The Model Naming Zoo",
      intro: "Most model names combine a family, a version, and a size once you know how to read them.",
      questions: [
        { type: "mcq", q: "Model names often combine which pieces of information?", choices: ["Family, version, and size", "Price, color, and weight", "Country, language, and date only", "The user's name"], answer: 0, explain: "A typical name tells you the family, the version, and the size of the model." },
        { type: "mcq", q: "In a name like 'Llama 70B', what does the '70B' most likely refer to?", choices: ["About 70 billion parameters", "70 buttons in the app", "A price of 70 dollars", "70 megabytes of memory"], answer: 0, explain: "A number followed by B usually means billions of parameters, a rough size measure." },
        { type: "truefalse", q: "A model labeled '8B' generally has fewer parameters than one labeled '70B'.", answer: true, explain: "More billions of parameters usually means a larger model, so 70B is bigger than 8B." },
        { type: "match", q: "Match each Claude size name to its tier.", pairs: [["Opus", "Largest"], ["Sonnet", "Middle"], ["Haiku", "Smallest"]], explain: "For Claude, the size is spoken as a name rather than a parameter number." },
        { type: "fill", q: "In model names, the letter B after a number usually stands for ____.", answer: "billion", accept: ["billion", "billions"], explain: "8B or 70B means roughly 8 or 70 billion parameters." },
        { type: "mcq", q: "What does 'mini' typically indicate in a model name?", choices: ["A smaller, faster, cheaper variant", "The most powerful variant", "A model for images only", "A broken model"], answer: 0, explain: "A 'mini' label usually marks a smaller, quicker, lower-cost version." },
        { type: "truefalse", q: "Every AI company uses the exact same naming system for its models.", answer: false, explain: "Naming varies by company, though most encode some mix of family, version, and size." },
        { type: "order", q: "Order these Llama-style sizes from smallest to largest.", items: ["8B", "13B", "70B"], explain: "More billions of parameters means a larger model." }
      ]
    },
    {
      id: "l16",
      title: "How to Pick a Model",
      intro: "Match the model to the job by weighing reasoning power, speed, cost, context length, and privacy.",
      questions: [
        { type: "mcq", q: "For a very hard reasoning task where quality matters most, you would lean toward:", choices: ["A larger, more capable model like Opus", "The smallest possible model", "Any model, since they are all identical", "A model with no reasoning ability"], answer: 0, explain: "Harder tasks are usually a better fit for a larger, more capable tier." },
        { type: "mcq", q: "For a simple, high-volume task where speed and low cost matter, you would lean toward:", choices: ["A smaller, faster model like Haiku", "The biggest, slowest model", "No model at all", "A model chosen at random"], answer: 0, explain: "Smaller models like Haiku are cheaper and faster for simple, frequent tasks." },
        { type: "truefalse", q: "Choosing a model always means the biggest model is the best choice.", answer: false, explain: "The best choice depends on the job; a smaller model can be faster and cheaper when that is what you need." },
        { type: "match", q: "Match each need to the factor you should weigh.", pairs: [["Handling very long documents", "Context length"], ["Keeping data on your own hardware", "Privacy"], ["Fast, cheap answers", "Speed and cost"], ["Hardest reasoning", "Capability"]], explain: "Different jobs put weight on different factors when picking a model." },
        { type: "fill", q: "The amount of text a model can consider at once is called its ____ length.", answer: "context", accept: ["context"], explain: "Context length is how much text the model can take in and reason over at once." },
        { type: "truefalse", q: "If privacy is critical, running an open-weight model on your own hardware is one option to consider.", answer: true, explain: "Open-weight models can run on your own machines, which can help with privacy needs." },
        { type: "order", q: "Order these steps for choosing a model well.", items: ["Define what the task needs", "Try a few candidate models", "Compare their results", "Pick the best fit"], explain: "A good approach is to define the need, test a few options, compare, and then choose." },
        { type: "mcq", q: "A smart general habit when picking a model is to:", choices: ["Try a few and compare results on your real task", "Always use whatever was released first", "Never test any model before committing", "Pick based only on the coolest name"], answer: 0, explain: "Testing a few models on your actual task is the most reliable way to choose." }
      ]
    }
  ]
});
