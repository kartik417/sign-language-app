const express = require("express");
const router = express.Router();
const { translateSign } = require("../controllers/translateController");

router.post("/", translateSign);

module.exports = router;