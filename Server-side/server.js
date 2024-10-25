const express = require('express');
const cors = require('cors');
const multer = require('multer');
const OpenAI = require('openai');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const app = express();
const upload = multer({ dest: 'uploads/' });

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());

// Endpoint for text-only queries
app.post('/api/chat', async (req, res) => {
  try {
    const { question, chatHistory } = req.body;

    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      ...chatHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      { role: "user", content: question }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      
    });

    res.json({ 
      response: completion.choices[0].message.content,
      role: "user"
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});


app.post('/api/chat-with-image', upload.single('image'), async (req, res) => {
  try {
    const { question } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    // Read the image file and convert to base64
    const imageBuffer = fs.readFileSync(imageFile.path);
    const base64Image = imageBuffer.toString('base64');

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: question },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ]
        }
      ],
      
    });

    // Clean up: remove uploaded file
    fs.unlinkSync(imageFile.path);

    res.json({ 
      response: response.choices[0].message.content,
      role: "user"
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});