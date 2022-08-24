const express = require("express");
const router = express.Router();
const Uploads = require("../model/docs-list-model");

//get data
router.get("/", async (req, res) => {
  try {
    const upload = await Uploads.find();
    res.render("_docs-list-edit", { upload: upload });
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
    res.render("_docs-list-edit", { upload: upload, urlId: urlId });
    // res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//put data/ edit upload file
router.put("/:id", (req, res) => {
  if (req.body.label == "") {
    res.redirect("/docs-list");
  } else {
    Uploads.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          label: req.body.label,
          filename: req.body.filename,
        },
      },
      {
        upsert: true,
      }
    ).then((upload) => {
      upload
        ? res.redirect("/docs-list")
        : res.status(400).json("File Not Found");
    });
  }
});

module.exports = router;
