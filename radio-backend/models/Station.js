const mongoose = require("mongoose");
const stationSchema = new mongoose.Schema({
  src: { type: String, required: " streaming source is required" },
  logo: { type: String, required: "logo url is required" },
  freq: { type: String, required: "radio frequency is required" },
  title: { type: String, required: "radio station is required" },
  city: { type: String, required: "city is required" },
  format: { type: String, required: "format is required" },
  area: { type: String, required: "area is required" }
});
module.exports = mongoose.model("Station", stationSchema);
