const express = require("express");
const router = express.Router();
const User = require("../model/register-model");
const Uploads = require("../model/docs-list-model");
const ShareUpload = require("../model/share-uploads-model");

router.get("/:id", async (req, res) => {
  try {
    const shareUpload = await ShareUpload.find();
    const users = await User.find();
    const uploads = await Uploads.find();
    const urlId = req.params.id;
    res.render("_share-remove", {
      users: users,
      uploads: uploads,
      urlId: urlId,
      shareUpload: shareUpload,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/share", async (req, res) => {
  const shareFile = new ShareUpload({ ...req.body });
  shareFile
    .save()
    .then(() => {
      res.redirect("/docs-list");
    })
    .catch((error) => {
      res.status(500).send("Internal server error");
    });
});

router.delete("/:id", (req, res) => {
  ShareUpload.findByIdAndDelete(req.params.id).then((file) => {
    file ? res.redirect("/share") : res.status(400).send("User Not Found");
  });
});

module.exports = router;
