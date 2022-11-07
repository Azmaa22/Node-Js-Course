const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const ejs = require("ejs");
const port = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

//app.use(express.static('public'),);
// * used like that to be write url as ..../assets/html/home.html
app.use("/assets", express.static("public"));
// & My Own Middleware 'Custom middleware'
app.use((req, res, next) => {
  console.log("logging...");
  next();
});

// ^ app settings
app.set('template engine', 'ejs');

const students = [
  {
    id: 1,
    name: "ali",
  },
  {
    id: 2,
    name: "zain",
  },  {
    id: 3,
    name: "omar",
  },
];
app.get('/students',(req, res)=>{
  res.set("Access-Control-Allow-Origin", "*"); //! '*' to all all origin
  //res.json(students);
  res.render('students.ejs', {students:students,})
})
app.get("/", (req, res) => {
  console.log("request received");
  res.sendFile(path.join(__dirname + "/public/html/user_form.html"));
});
app.post("/welcome.html", (req, res) => {
  console.log("inside post");
  console.log("request received", req.body);
  res.cookie("userName", "Asmaa Khaled");
  res.cookie("age", 24);
  res.send(`Thanks :) `);
});

app.get("/abc", (req, res) => {
  console.log(req.cookies.userName);
  res.sendStatus(200);
});
app.param("id", (req, res, nxt, val) => {
  req.id = val;
  nxt();
});
app.get("/api/:id", (req, res) => {
  console.log("id", req.id);
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log(`Server now is listening on port ${port}`);
});
