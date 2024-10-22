const express = require("express");
const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.json({ message: response.choices[0].message.content });
  } catch (error) {
    console.error("Error fetching AI response:", error);
    res.status(500).json({ error: "Error fetching AI response" });
  }
});

module.exports = router;
