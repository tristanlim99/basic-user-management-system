const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  if (req.cookies.access_token) {
    res.render("logout");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
