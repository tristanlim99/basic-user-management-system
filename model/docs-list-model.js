const mongoose = require("mongoose");

//my uploads
const uploadSchema = mongoose.Schema({
  label: {
    type: String,
    require: true,
  },
  filename: {
    type: String,
    require: true,
  },
});

const Uploads = mongoose.model("uploads", uploadSchema);
module.exports = Uploads;
