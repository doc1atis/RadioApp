const express = require("express");
const Station = require("../models/Station");
const router = express.Router();
// sever routes to stations
router.post("/radio/add/station", async (req, res) => {
  const { src, logo, freq } = req.body;
  let station = new Station({ src, logo, freq });
  station = res.status(200).json({ success: true, station: "station" });
});

module.exports = router;
