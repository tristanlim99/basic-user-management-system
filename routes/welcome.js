const express = require("express");
const router = express.Router();

//get manage users page
router.get("/", (req, res, next) => {
  res.render("welcome", { title: "Welcome" });
});

module.exports = router;
