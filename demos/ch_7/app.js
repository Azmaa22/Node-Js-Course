const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const ejs = require("ejs");
const studentRouter = require('./routes/students');
const loggingMiddleware = require('./middlewares/logging');
const port = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use('/api/students', studentRouter);
app.use(loggingMiddleware);

app.use("/assets", express.static("public"));

// ^ app settings
app.set('template engine', 'ejs');



app.get("/", (req, res) => {
  console.log("request received");
  res.sendFile(path.join(__dirname + "/public/html/user_form.html"));
});
app.post("/welcome.html", (req, res) => {
  console.log("inside post");
  console.log("request received", req.body);
  res.cookie("userName", req.body['fname']);
  res.cookie("age", 24);
  res.send(`Thanks :) `);
});



app.listen(port, () => {
  console.log(`Server now is listening on port ${port}`);
});
