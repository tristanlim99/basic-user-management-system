const express = require("express");
const router = express.Router();
const Register = require("../model/register-model");
const bcrypt = require("bcrypt");
const validator = require("email-validator");

//get manage users page
router.get("/", (req, res, next) => {
  res.render("register", { message: req.flash("message") });
});

router.post("/", async (req, res) => {
  const {
    name,
    email,
    password: pass,
    confirmPassword: confirmPass,
  } = req.body;
  const password = await bcrypt.hash(pass, 10);
  const confirmPassword = await bcrypt.hash(confirmPass, 10);

  try {
    if (email == "" && name == "" && pass == "" && confirmPass == "") {
      req.flash("message", "Please Enter Required Fields");
      res.redirect("/register");
    } else if (!validator.validate(email)) {
      req.flash("message", "Please Enter a Valid Email");
      res.redirect("/register");
    } else if (pass !== confirmPass) {
      req.flash("message", "Passwords Do Not Match");
      res.redirect("/register");
    } else if (
      email != "" &&
      name != "" &&
      pass != "" &&
      confirmPass != "" &&
      pass == confirmPass &&
      validator.validate(email)
    ) {
      const response = await Register.create({
        name,
        email,
        password,
        confirmPassword,
      });
      return res.redirect("/register-success");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = router;
