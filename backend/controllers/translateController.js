exports.translateSign = (req, res) => {
  const { image } = req.body;

  console.log("Image received");

  // Dummy response (ML later)
  res.json({ text: "Hello from AI" });
};