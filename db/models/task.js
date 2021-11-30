const mongoose = require("mongoose");

const task = new mongoose.Schema({
  name: { type: String, required: true},
});

module.exports = mongoose.model("Task", task);
