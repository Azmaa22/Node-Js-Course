const fs = require("fs");
const path = require("path");
const studentPath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "students.json"
);

module.exports = class Student {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  
  }
  static fetchAllStudents() {
    return Students;
  }
  saveNewStudent() {
    console.log('this', this);
    // 1)read from file
    fs,
      fs.readFile(studentPath, (err, info) => {
        let Students = [];

        if (!err) {
       
          Students = JSON.parse(info);
          // 2)update date
          console.log("info ", Students);
          this.id = Students.length + 1;
          Students.push(this);
          console.log("info ", Students);

          // 3)write into file
          fs.writeFile(studentPath, JSON.stringify(Students),(error)=>{
            console.log('error while writing', error);
          });
        } else {
          console.log("error while reading ", err);
        }
      });
  }
  static getStudent(id) {
    const std = Students.find((student, index, arr) => {
      return student.id == id;
    });
    if (std) return std;
    else return "This Student is Not Found";
  }
};
