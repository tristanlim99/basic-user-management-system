const express = require("express");
const router = express.Router();
const User = require("../model/register-model");
const LoginUser = require("../model/login-model");

//render user-list page
router.get("/", async (req, res) => {
  const loginUser = await LoginUser.find();
  const users = await User.find();
  if (req.cookies.access_token) {
    res.render("user-list", { users: users, loginUser: loginUser });
  } else {
    res.redirect("/login");
  }
});

//get data by id
router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    user ? res.render("user-list") : res.status(400).send("User Not Found");
  });
});

const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.redirect("/login");
  }
  try {
    const data = jwt.verify(token, "SECRET_KEY");
    return next();
  } catch {
    res.redirect("/login");
  }
};

module.exports = router;
