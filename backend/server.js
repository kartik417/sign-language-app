
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const translateRoutes = require("./routes/translateRoutes");

const app = express();

// Connect Database
(async () => {
  try {
    await connectDB();
    console.log("DB connected, starting server...");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log("MONGO URI STATUS:", process.env.MONGO_URI ? "FOUND" : "NOT FOUND");
    });

  } catch (err) {
    console.error("Startup Error:", err.message);
  }
})();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/translate", translateRoutes);
// Routes
app.get("/", (req, res) => {
  res.send("API Running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("MONGO URI STATUS:", process.env.MONGO_URI ? "FOUND" : "NOT FOUND");
});