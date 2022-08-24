const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const jwt = require("jsonwebtoken");
const methodOverride = require("method-override");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const formidable = require("formidable");
const fs = require("fs");
const bodyParser = require("body-parser");
require("./db/db");
const session = require("express-session");
const flash = require("connect-flash");
const validator = require("email-validator");

//routers import
const welcomeRouter = require("./routes/welcome");
const registerRouter = require("./routes/register");
const registerSuccessRouter = require("./routes/register-success");
const loginRouter = require("./routes/login");
const loginSuccessRouter = require("./routes/login-success");
const userListRouter = require("./routes/user-list");
const editUserRouter = require("./routes/edit-user");
const docsListRouter = require("./routes/docs-list");
const chatRouter = require("./routes/chat");
const shareRouter = require("./routes/share");
const logoutRouter = require("./routes/logout");
const deleteUserRouter = require("./routes/_delete-user");
const fileEditRouter = require("./routes/_docs-list-edit");
const fileDeleteRouter = require("./routes/_docs-list-delete");
const shareRemoveRouter = require("./routes/_share-remove");

//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname + "/routes/" + "uploads")));
app.use(methodOverride("_method"));
app.use(cookieParser("access_token"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

//use router imports
app.use("/", welcomeRouter);
app.use("/register", registerRouter);
app.use("/register-success", registerSuccessRouter);
app.use("/login", loginRouter);
app.use("/login-success", loginSuccessRouter);
app.use("/user-list", userListRouter);
app.use("/docs-list", docsListRouter);
app.use("/chat", chatRouter);
app.use("/share", shareRouter);
app.use("/edit-user", editUserRouter);
app.use("/logout", logoutRouter);
app.use("/delete-user", deleteUserRouter);
app.use("/file-edit", fileEditRouter);
app.use("/docs-list-delete", fileDeleteRouter);
app.use("/share-remove", shareRemoveRouter);

//model
const Uploads = require("./model/docs-list-model");
const Users = require("./model/register-model");
const Chats = require("./model/chat-model");
const shareUploads = require("./model/share-uploads-model");
const LoginModel = require("./model/login-model");

// run server
app.listen(port, () => console.log(`server is listening on port ${port}...`));

// const http = require("http").createServer(app);

// http.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

// const io = require("socket.io")(http);

// // const io = require("socket.io")(3000);
// const Msg = require("./model/message");
// io.on("connection", (socket) => {
//   Msg.find().then((result) => {
//     socket.emit("output-messages", result);
//   });
//   console.log("a user connected");
//   // socket.emit("message", "Hello world");
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
//   socket.on("chatmessage", (msg) => {
//     const message = new Msg({ msg });
//     message.save().then(() => {
//       io.emit("message", msg);
//     });
//   });
// });
