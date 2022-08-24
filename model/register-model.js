const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const registerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmPassword: {
    type: String,
    require: true,
  },
});

const Users = mongoose.model("users", registerSchema);
module.exports = Users;
