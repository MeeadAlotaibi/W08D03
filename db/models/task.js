const mongoose = require("mongoose");

const task = new mongoose.Schema({
  name: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Task", task);
