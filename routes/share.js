const express = require("express");
const router = express.Router();
const User = require("../model/register-model");
const Uploads = require("../model/docs-list-model");
const ShareUpload = require("../model/share-uploads-model");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const token = req.cookies.access_token;
  const data = jwt.verify(token, "SECRET_KEY");
  const userName = data.findUser.name; //assign data to token content
  if (req.cookies.access_token) {
    const shareUpload = await ShareUpload.find();
    const users = await User.find();
    const uploads = await Uploads.find();
    const urlId = req.params.id;
    res.render("share", {
      users: users,
      uploads: uploads,
      urlId: urlId,
      shareUpload: shareUpload,
      userName: userName,
    });
  } else {
    res.redirect("/login");
  }
});

router.get("/:id", async (req, res) => {
  const token = req.cookies.access_token;
  const data = jwt.verify(token, "SECRET_KEY");
  const userName = data.findUser.name; //assign data to token content
  try {
    const shareUpload = await ShareUpload.find();
    const users = await User.find();
    const uploads = await Uploads.find();
    const urlId = req.params.id;
    res.render("share", {
      users: users,
      uploads: uploads,
      urlId: urlId,
      shareUpload: shareUpload,
      userName: userName,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/share/:id", async (req, res) => {
  const urlId = req.params.id;
  const shareFile = new ShareUpload({ ...req.body });
  shareFile
    .save()
    .then(() => {
      res.redirect("/share/urlId");
    })
    .catch((error) => {
      res.status(500).send("Internal server error");
    });
});

module.exports = router;
