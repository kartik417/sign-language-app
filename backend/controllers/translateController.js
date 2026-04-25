const axios = require("axios");

exports.translateSign = async (req, res) => {
  try {
    const { image } = req.body;

    console.log("Image received");

    // 👉 Call Python ML API
    const response = await axios.post("http://127.0.0.1:8000/predict", {
      image: image,
    });

    // 👉 Send ML result to frontend
    res.json({ text: response.data.text });

  } catch (error) {
    console.error("ML Error:", error.message);
    res.status(500).json({ error: "ML server error" });
  }
};