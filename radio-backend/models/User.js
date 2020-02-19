const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: { type: String, required: "username is required" },
  email: { type: String, required: "email is required" },
  password: { type: String, required: "password is required" },
  favorites: []
});
userSchema.methods.generateToken = function() {
  const hour = 3600; //seconds
  const day = 24 * hour;
  const token = jwt.sign(
    { id: this._id, username: this.username },
    process.env.JWT_SECRET,
    {
      expiresIn: 365 * day
    }
  );
  return token;
};
module.exports = mongoose.model("User", userSchema);
