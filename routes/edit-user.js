const express = require("express");
const router = express.Router();
const User = require("../model/register-model");

//get manage users page
router.get("/", (req, res, next) => {
  if (req.cookies.access_token) {
    res.render("edit-user");
  } else {
    res.redirect("/login");
  }
});

//get data by id
router.get("/:id", (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) {
      res.redirect("/");
    } else {
      if (user == null) {
        res.redirect("/welcome");
      } else {
        res.render("edit-user", {
          user: user,
        });
      }
    }
  });
});

//put data
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
      },
    },
    {
      upsert: true,
    }
  ).then((user) => {
    user ? res.redirect("/user-list") : res.status(400).send("User Not Found");
  });
});

module.exports = router;
