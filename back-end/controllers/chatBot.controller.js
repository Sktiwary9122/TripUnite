const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const chatHistory = require("../utils/chatHistory.js"); // Import chat history file

const chatBot = async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const { userInput } = req.body;

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: "Your system instruction goes here...",
  });

  const generationConfig = {
    temperature: 0.5,
    topP: 0.5,
    topK: 64,
    maxOutputTokens: 10000,
    responseMimeType: "text/plain",
  };

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: chatHistory, // Use imported chat history
    });

    const result = await chatSession.sendMessage(userInput);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error in chat interaction:", error.message);
    res.status(500).json({ error: "Failed to process request" });
  }
};

module.exports = chatBot;
