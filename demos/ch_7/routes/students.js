const express = require("express");
const router = express.Router;

// Request All Students
router.get("/", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*"); //! '*' to all all origin
    res.json(Students);
  });
  // Request Student by Id
  //^ Passing data from client to server via url parameters
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    const std = Students.find((student, index, arr) => {
      return student.id == id;
    });
    if (std) res.json(std);
    else res.json("This Student is Not Found");
  });
  
  // Create new Student
  router.post("/", (req, res) => {
    let valid = validate(req.body);
    
    if (valid) {
      req.body.id = Students.length + 1;
      console.log(req.body);
      Students.push(req.body);
      res.json(req.body);
    } else res.status(403).send("Forbidden command");
  });
  // Delete Student
  router.delete("/:id", (req, res) => {
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
  router.put("/:id", (req, res) => {
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

  module.exports = router;