const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  role: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }], /// خليت التاسك تابعه لليوزر
});

module.exports = mongoose.model("User", user);
