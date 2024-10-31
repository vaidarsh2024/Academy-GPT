const express = require("express");
const cors = require("cors");
const multer = require("multer");
const OpenAI = require("openai");
const dotenv = require("dotenv");
const fs = require("fs");
const NodeCache = require("node-cache");

dotenv.config();
const app = express();
const upload = multer({ dest: "uploads/" });
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize a cache to store conversation contexts
const conversationCache = new NodeCache({
  stdTTL: 3600, // 1 hour expiration
  checkperiod: 600, // Check for expired keys every 10 minutes
});

app.use(cors());
app.use(express.json());

const cleanResponse = (text) => {
  return (
    text
      // Remove backslashes and carets
      .replace(/[\\^]/g, "")
      // Replace LaTeX fractions with division
      .replace(/\\frac{([^}]+)}{([^}]+)}/g, "($1/($2))")
      // Replace arrows
      .replace(/\\Rightarrow/g, "=>")
      .replace(/\\rightarrow/g, "->")
      .replace(/\\Leftarrow/g, "<=")
      .replace(/\\leftarrow/g, "<-")
  );
};

// Modified text-only endpoint with conversation management
app.post("/api/chat", async (req, res) => {
  try {
    const {
      question,
      chatHistory = [],
      language = "en",
      conversationId = null,
      resetConversation = false,
    } = req.body;

    // Generate or retrieve conversation ID
    const currentConversationId = conversationId || Date.now().toString();

    // Retrieve or initialize conversation context
    let conversationContext =
      conversationCache.get(currentConversationId) || [];

    // Reset conversation if requested
    if (resetConversation) {
      conversationContext = [];
    }

    // Prepare system message
    const systemMessage = {
      role: "system",
      content: `You are a helpful assistant. Please respond in ${language}. Keep your responses natural and conversational.`,
    };

    // Prepare messages, including system message, previous context, and new question
    const messages = [
      systemMessage,
      ...conversationContext,
      { role: "user", content: question },
    ];

    // Generate AI response
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });

    // Clean and extract response
    const cleanedResponse = cleanResponse(
      completion.choices[0].message.content
    );

    // Update conversation context
    const newMessages = [
      ...conversationContext,
      { role: "user", content: question },
      { role: "assistant", content: cleanedResponse },
    ];

    // Store updated context in cache
    conversationCache.set(currentConversationId, newMessages);

    // Respond with result and conversation ID
    res.json({
      response: cleanedResponse,
      conversationId: currentConversationId,
      role: "assistant",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "An error occurred while processing your request",
      details: error.message,
    });
  }
});

// Modified image chat endpoint with conversation management
app.post("/api/chat-with-image", upload.single("image"), async (req, res) => {
  try {
    const {
      question,
      language = "en",
      conversationId = null,
      resetConversation = false,
    } = req.body;

    const imageFile = req.file;
    if (!imageFile) {
      return res.status(400).json({ error: "No image file provided" });
    }

    // Generate or retrieve conversation ID
    const currentConversationId = conversationId || Date.now().toString();

    // Retrieve or initialize conversation context
    let conversationContext =
      conversationCache.get(currentConversationId) || [];

    // Reset conversation if requested
    if (resetConversation) {
      conversationContext = [];
    }

    const imageBuffer = fs.readFileSync(imageFile.path);
    const base64Image = imageBuffer.toString("base64");

    const systemMessage = {
      role: "system",
      content: `You are a helpful assistant. Please respond in ${language}. Keep your responses natural and conversational.`,
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        systemMessage,
        ...conversationContext,
        {
          role: "user",
          content: [
            { type: "text", text: question },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
    });

    // Clean up uploaded file
    fs.unlinkSync(imageFile.path);

    const cleanedResponse = cleanResponse(response.choices[0].message.content);

    // Update conversation context
    const newMessages = [
      ...conversationContext,
      {
        role: "user",
        content: [
          { type: "text", text: question },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`,
            },
          },
        ],
      },
      { role: "assistant", content: cleanedResponse },
    ];

    // Store updated context in cache
    conversationCache.set(currentConversationId, newMessages);

    // Respond with result and conversation ID
    res.json({
      response: cleanedResponse,
      conversationId: currentConversationId,
      role: "assistant",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "An error occurred while processing your request",
      details: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
