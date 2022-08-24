const mongoose = require("mongoose");

//my uploads
const loginSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Login = mongoose.model("loginModel", loginSchema);
module.exports = Login;
