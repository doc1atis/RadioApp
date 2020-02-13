const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
module.exports = {
  register: async (req, res) => {
    try {
      let createdUser = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
      });
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(createdUser.password, salt);
      createdUser.password = hash;
      await createdUser.save();
      res.status(200).json({ success: true, message: "user was registered" });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "failed to register user",
        dbError: true,
        error
      });
    }
  },
  login: (req, res) => {
    res.status(200).json({ token: req.user.generateToken() });
  },
  addStationToFavorite: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { favorites: req.body.station }
        },
        { new: true }
      );
      if (user) {
        res.status(200).json({
          success: true,
          user,
          message: "station added to favorites",
          dbError: false
        });
      } else {
        res
          .status(400)
          .json({ success: false, message: "No User Found", dbError: false });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "There was a database error",
        dbError: true,
        error
      });
    }
  },
  removeStationFromFavorites: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { favorites: { id: req.params.id } } },
        { new: true, useFindAndModify: false }
      );
      if (user) {
        res.status(200).json({
          success: true,
          message: "station removed from favorites",
          dbError: false,
          user
        });
      } else {
        res
          .status(400)
          .json({ success: false, message: "No User Found", dbError: false });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "There was a database error",
        dbError: true,
        error
      });
    }
  }
};
