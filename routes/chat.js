const express = require("express");
const router = express.Router();
const Chats = require("../model/chat-model");
const jwt = require("jsonwebtoken");
// const io = require("socket.io");
// const socket = io();

router.get("/", async (req, res) => {
  const token = req.cookies.access_token;
  const date = new Date();
  const dateStr =
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("00" + date.getDate()).slice(-2) +
    "/" +
    date.getFullYear() +
    " " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2);

  if (token) {
    const data = jwt.verify(token, "SECRET_KEY");
    const userName = data.findUser.name;
    const chats = await Chats.find();
    res.render("chat", { chats: chats, userName: userName, dateStr: dateStr });
  } else {
    res.redirect("/login");
  }
});

// post data
router.post("/", (req, res) => {
  const newMessage = new Chats({ ...req.body });
  if (req.body.message == "") {
    res.redirect("/chat");
  } else {
    newMessage
      .save()
      .then(() => {
        res.redirect("chat");
      })
      .catch((error) => {
        res.status(500).send("Internal server error");
      });
  }
});

module.exports = router;
