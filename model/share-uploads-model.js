const mongoose = require("mongoose");

//my uploads
const shareUploadSchema = mongoose.Schema({
  label: {
    type: String,
    require: true,
  },
  filename: {
    type: String,
    require: true,
  },
  sharedBy: {
    type: String,
    require: true,
  },
  shareTo: {
    type: String,
    require: true,
  },
});

const shareUploads = mongoose.model("shareUploads", shareUploadSchema);
module.exports = shareUploads;
