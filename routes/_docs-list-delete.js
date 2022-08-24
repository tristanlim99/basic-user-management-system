const express = require("express");
const router = express.Router();
const Uploads = require("../model/docs-list-model");

//get data
router.get("/", async (req, res) => {
  try {
    const upload = await Uploads.find();
    res.render("_docs-list-delete", { upload: upload });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const upload = await Uploads.find();
    const urlId = req.params.id;
    res.render("_docs-list-delete", { upload: upload, urlId: urlId });
    // res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  Uploads.findByIdAndDelete(req.params.id).then((file) => {
    file ? res.redirect("/docs-list") : res.status(400).json("File Not Found");
  });
});

module.exports = router;
