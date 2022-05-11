var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const testRouter = require("./routes/call");
const postRouter = require("./routes/post"); // postRouter를 require 해서 가져와서 할당!!

var app = express();

// view engine setup (이 두 문장 덕분에, post.js에서 res.render 함수 내부에서 그냥 "post" 만 써도 되는 것이다.)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/test", testRouter);
app.use("/expost", postRouter); // 'http://localhost:3000/expost' 경로에서는 postRouter 라우터를 작동시켜라! 라는 의미

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

module.exports = app;
