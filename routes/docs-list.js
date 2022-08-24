const fs = require("fs");
const express = require("express");
const router = express.Router();
const Uploads = require("../model/docs-list-model");
const Shared = require("../model/share-uploads-model");
const formidable = require("formidable");
const path = require("path");
const jwt = require("jsonwebtoken");
const LoginUser = require("../model/login-model");

router.get("/", async (req, res) => {
  const loginUser = await LoginUser.find();
  const token = req.cookies.access_token;
  if (token) {
    const data = jwt.verify(token, "SECRET_KEY");
    const userName = data.findUser.name;
    const upload = await Uploads.find();
    const shared = await Shared.find();
    res.render("docs-list", {
      upload: upload,
      shared: shared,
      userName: userName,
      loginUser: loginUser,
    });
  } else {
    res.redirect("/login");
  }
});

// post data
router.post("/", (req, res) => {
  const form = new formidable.IncomingForm();
  // const newUpload = new Uploads({ ...req.body });

  form.parse(req, async (err, fields, files) => {
    const oldpath = files.filename.filepath;
    const newpath = __dirname + "/uploads/" + files.filename.originalFilename;
    fs.rename(oldpath, newpath, (err) => {
      if (err) throw err;
      res.redirect("docs-list");
      res.end();
    });
    try {
      await Uploads.create({
        label: fields.label,
        filename: files.filename.originalFilename,
      });
      fs.writeFile(oldpath, newpath, (err) => {
        if (err) throw err;
      });
    } catch (err) {
      throw err;
    }
  });
});

const uploadFile = () => {
  form.parse(req, (err, fields, files) => {
    const oldpath = files.filename.filepath;
    const newpath = __dirname + "/uploads/" + files.filename.originalFilename;
    fs.rename(oldpath, newpath, (err) => {
      if (err) throw err;
      res.redirect("docs-list");
      res.end();
    });
  });
};

router.get("/download/:filename", (req, res) => {
  let filepath = path.join(__dirname + "/uploads/" + req.params.filename);

  res.download(filepath);
});

module.exports = router;
