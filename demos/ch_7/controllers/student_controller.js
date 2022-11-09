const StudentModel = require('../models/student_model');
const getAllStudents = (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.render("students.ejs", { students: StudentModel.fetchAllStudents() });
  }

  const getStudentById = (req, res) => {
    const id = req.id;
    result = StudentModel.getStudent(id);
    
   return res.json(result);
  }
  const createStudent=(req, res) => {
  
   
    console.log(req.body);
    newStudent = new StudentModel(req.body)
    newStudent.saveNewStudent();
    res.json(req.body);
  }

  module.exports = {getAllStudents, getStudentById, createStudent}