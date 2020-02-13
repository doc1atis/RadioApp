const mongoose = require("mongoose");
const stationSchema = new mongoose.Schema({
  src: { type: String, required: " streaming source is required" },
  logo: { type: String, required: "logo url is required" },
  freq: { type: String, required: "radio frequency is required" }
});
module.exports = mongoose.model("Station", stationSchema);
