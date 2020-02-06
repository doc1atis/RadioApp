const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: { type: String, required: "username is required" },
  email: { type: String, required: "email is required" },
  password: { type: String, required: "password is required" },
  favorites: { type: Array, default: [] }
});

module.exports = new mongoose.model("User", userSchema);
