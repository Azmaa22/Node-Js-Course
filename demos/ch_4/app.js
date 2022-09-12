const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3003;
//& Middleware are used
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  console.log("request received");
  res.sendFile(path.join(__dirname, "/user_form.html"));
});
//^ Passing data from client to server via url query
// app.get("/welcome.html", (req, res) => {
//     console.log("request received", req.query);
//     res.sendFile(path.join(__dirname,'/welcome.html'),);
//   });

//^ Passing data from client to server via request body
app.post("/welcome.html", (req, res) => {
  console.log("request received", req.body);
  res.send(`Thanks :) ${req.body["fname"]}`);
});
const Students = [
  { name: " Ali ", dept: " PD ", id: 1 },
  { name: " Nour ", dept: " SA ", id: 2 },
  { name: " Mona ", dept: " MD ", id: 3 },
  { name: " Sara ", dept: " SAP ", id: 4 },
  { name: " Mostafa ", dept: " EB ", id: 5 },
];
// Request All Students
app.get("/api/students", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*"); //! '*' to all all origin
  res.json(Students);
});
// Request Student by Id
//^ Passing data from client to server via url parameters
app.get("/api/students/:id", (req, res) => {
  const id = req.params.id;
  const std = Students.find((student, index, arr) => {
    return student.id == id;
  });
  if (std) res.json(std);
  else res.json("This Student is Not Found");
});
// Request Student by Id

// Create new Student
app.post("/api/students/", (req, res) => {
  req.body.id = Students.length + 1;
  console.log(req.body);
  Students.push(req.body);
  res.json(req.body);
});
// Delete Student
app.delete("/api/students/:id", (req, res) => {
  const id = req.params.id;
  let indexOfStudent = Students.findIndex((student) => {
    return student.id == id;
  });
  if (indexOfStudent != -1) {
    Students.splice(indexOfStudent, 1);
    res.send("Student deleted Successfully");
  } else res.send("Student is not found to delete");
});

// Update Student by id
app.put("/api/students/:id", (req, res) => {
  const id = req.params.id;
  let indexOfStudent = Students.findIndex((student) => {
    return student.id == id;
  });

  if (indexOfStudent != -1) {
    req.body.id = Students[indexOfStudent].id;
    for (const key in Students[indexOfStudent]) {
      Students[indexOfStudent][key] = req.body[key];
    }
    res.send("Student Updated Successfully");
  } else res.send("Student is not found to update");
});
app.listen(port, () => {
  console.log(`Server now is listening on port ${port}`);
});
