const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", default: "61a60c4f3e1785a620e94595"},
});

module.exports = mongoose.model("User", userSchema);
