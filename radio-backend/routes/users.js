const express = require("express");
const router = express.Router();
const protectWith = require("../passportAuth/passportConfig");
const userController = require("../controllers/userController");
router.post("/register", userController.register);
router.post("/login", protectWith("local"), userController.login);

router.post(
  "/favorites",
  protectWith("jwt"),
  userController.addStationToFavorite
);

router.delete("/favorites/:id", protectWith("jwt"), (req, res) => {
  res.send("favorite deleted");
});

router.post("/signup", userController.signup);

module.exports = router;
