var createError = require("http-errors");
var express = require("express");
var path = require("path");
const http = require("http");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const multer = require("multer");

var authRouter = require("./routes/AuthRoutes.js");
var usersRouter = require("./routes/users");
var foodRouter = require("./routes/food");
//connect to data base
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.URI_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => {
    console.log(error.message);
  });

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", authRouter);
app.use("/users", usersRouter);
app.use("/food", foodRouter);

// Configure Multer to handle file uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFilesTypes = ["uploads/jpeg", "uploads/jpg", "uploads/png"];
  if (!allowedFilesTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
const server = http.createServer(app);
server.listen(5000, () => {
  console.log("app is running on port 5000");
});
module.exports = app;
