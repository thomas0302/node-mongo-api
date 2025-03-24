const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/User");

// GET /users/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Handle invalid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });

    if (!user) {
      return res.status(404).json({ message: "User not found or underage" });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
