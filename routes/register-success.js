const express = require("express");
const router = express.Router();

//get manage users page
router.get("/", (req, res, next) => {
  res.render("register-success", { title: "Registration Success" });
});

module.exports = router;
