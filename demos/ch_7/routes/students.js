const express = require("express");
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

const Ajv = require("ajv");
const ajv = new Ajv();
const studentController = require("../controllers/student_controller");
// json scheme
const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    debt: { type: "string", maxLength: 2 },
  },
  required: ["name", "debt"],
  additionalProperties: false,
};

const validate = ajv.compile(schema);


router.get("/", studentController.getAllStudents);

router.param("id", (req, res, nxt, val) => {
  req.id = val;
  nxt();
});
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);

router.delete("/:id", (req, res) => {
  const id = req.id;
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
  const id = req.id;
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
