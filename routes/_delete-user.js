const express = require("express");
const router = express.Router();
const User = require("../model/register-model");

router.get("/:id", async (req, res) => {
  try {
    const users = await User.find();
    const urlId = req.params.id;
    res.render("_delete-user", { users: users, urlId: urlId });
    // res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  User.findByIdAndDelete(req.params.id).then((user) => {
    user ? res.redirect("/user-list") : res.status(400).json("File Not Found");
  });
});

module.exports = router;
