require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const translateRoutes = require("./routes/translateRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/translate", translateRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

// 🔥 START SERVER (single place)
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // ⚠️ OPTIONAL: agar Mongo issue aa raha hai to temporarily skip karo
    // await connectDB();

    console.log("DB connected");

  } catch (err) {
    console.log("Mongo Error:", err.message);
    console.log("⚠️ Starting server WITHOUT DB (for ML demo)");
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();