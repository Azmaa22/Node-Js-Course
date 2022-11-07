const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const studentsRouter = require('./routes/students')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/assets", express.static("public"));
app.use('/api/students', studentsRouter);

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


app.listen(port, () => {
  console.log(`Server now is listening on port ${port}`);
});