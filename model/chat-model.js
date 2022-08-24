const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const Chats = mongoose.model("chats", chatSchema);
module.exports = Chats;
