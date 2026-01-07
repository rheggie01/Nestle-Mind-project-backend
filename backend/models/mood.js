const express = require("express");
const router = express.Router();
const Mood = require("../models/Mood");

// POST: Save a mood
router.post("/", async (req, res) => {
  try {
    const mood = new Mood({
      mood: req.body.mood,
      note: req.body.note
    });

    const savedMood = await mood.save();
    res.status(201).json(savedMood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Fetch all moods
router.get("/", async (req, res) => {
  try {
    const moods = await Mood.find().sort({ date: -1 });
    res.json(moods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
