const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("✅ MOODS API IS WORKING");
});

module.exports = router;
