const express = require("express");
const router = express.Router();

//get manage users page
router.get("/", (req, res, next) => {
  if (req.cookies.access_token) {
    res.render("login-success", { title: "login-success" });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
