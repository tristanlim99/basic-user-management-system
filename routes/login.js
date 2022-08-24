const express = require("express");
const router = express.Router();
const User = require("../model/register-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginRouter = require("../routes/logout");
const { find } = require("../model/register-model");
const validator = require("email-validator");
const LoginUser = require("../model/login-model");
const { default: mongoose } = require("mongoose");

router.get("/", (req, res) => {
  res.render("login", { message: req.flash("message") });
});

router.post("/", async (req, res) => {
  const users = await User.find(); //parsing the data from db
  const userList = [...users]; //storing the data to an array
  const findUser = userList.find((user) => user.email === req.body.email); //findng the data if it matched
  const token = jwt.sign({ findUser }, "SECRET_KEY");
  const email = req.body.email;
  const password = req.body.password;
  const loginUser = new LoginUser({ ...req.body });

  if (email == "" && password == "") {
    // res.send("Please enter required fields");
    req.flash("message", "Please Enter Required Fields");
    res.redirect("/login");
  } else if (!validator.validate(email)) {
    // res.send("Please enter your email");
    req.flash("message", "Please Enter a Valid Email");
    res.redirect("/login");
  } else if (password == "") {
    // res.send("Please enter your password");
    req.flash("message", "Please Enter Your Password");
    res.redirect("/login");
  }
  if (
    findUser == null &&
    email != "" &&
    password != "" &&
    validator.validate(email)
  ) {
    // return res.status(400).send("User does not exist");
    // res.redirect("/login");
    req.flash("message", "User Does Not Exist");
    res.redirect("/login");
  }

  try {
    if (await bcrypt.compare(req.body.password, findUser.password)) {
      res.cookie("access_token", token, {
        httpOnly: true,
      });
      loginUser.save();
      res.render("login-success", { findUser: findUser });
    } else {
      // res.send("Not Allowed");
      req.flash("message", "Incorrect Password");
      res.redirect("/login");
    }
  } catch (error) {
    res.status(500).send();
  }
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

router.get("/logout", authorization, (req, res) => {
  return res.clearCookie("access_token").status(200).render("logout");
});

module.exports = router;
