const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const chatRoutes = require("./routes/chatRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config(); 

app.use("/", chatRoutes); 

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
