const express = require("express");
const router = express.Router();
const Ajv = require("ajv");
const ajv = new Ajv();
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
const Students = [
  { name: " Ali ", dept: " PD ", id: 1 },
  { name: " Nour ", dept: " SA ", id: 2 },
  { name: " Mona ", dept: " MD ", id: 3 },
  { name: " Sara ", dept: " SAP ", id: 4 },
  { name: " Mostafa ", dept: " EB ", id: 5 },
];
router.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.render("students.ejs", { students: Students });
});

router.param("id", (req, res, nxt, val) => {
  req.id = val;
  nxt();
});
router.get("/:id", (req, res) => {
  const id = req.id;
  const std = Students.find((student, index, arr) => {
    return student.id == id;
  });
  if (std) res.json(std);
  else res.json("This Student is Not Found");
});
router.post("/", (req, res) => {
  let valid = validate(req.body);
  console.log("data", req.body, "valid", valid);
  if (valid) {
    req.body.id = Students.length + 1;
    console.log(req.body);
    Students.push(req.body);
    res.json(req.body);
  } else res.status(403).send("Forbidden command");
});

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
