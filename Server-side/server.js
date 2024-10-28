const express = require("express");
const cors = require("cors");
const multer = require("multer");
const OpenAI = require("openai");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

const cleanResponse = (text) => {
  return (
    text
      // Remove backslashes and carets
      .replace(/[\\^]/g, "")
      // Replace LaTeX fractions with division
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1/$2")
      // Replace arrows
      .replace(/\\Rightarrow/g, "=>")
      .replace(/\\rightarrow/g, "->")
      .replace(/\\Leftarrow/g, "<=")
      .replace(/\\leftarrow/g, "<-")
  );
};

// Modified text-only endpoint with language support
app.post("/api/chat", async (req, res) => {
  try {
    const { question, chatHistory, language = "en" } = req.body;

    const systemMessage = `You are a helpful assistant. Please respond in ${language}. Keep your responses natural and conversational.`;

    const messages = [
      { role: "system", content: systemMessage },
      ...chatHistory.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: "user", content: question },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });

    const cleanedResponse = cleanResponse(
      completion.choices[0].message.content
    );

    res.json({
      response: cleanedResponse,
      role: "user",
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
});

// Modified image chat endpoint with language support
app.post("/api/chat-with-image", upload.single("image"), async (req, res) => {
  try {
    const { question, language = "en" } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const imageBuffer = fs.readFileSync(imageFile.path);
    const base64Image = imageBuffer.toString("base64");

    const systemMessage = `You are a helpful assistant. Please respond in ${language}. Keep your responses natural and conversational.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemMessage },
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

    fs.unlinkSync(imageFile.path);

    const cleanedResponse = cleanResponse(response.choices[0].message.content);

    res.json({
      response: cleanedResponse,
      role: "user",
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
