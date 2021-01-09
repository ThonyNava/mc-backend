const repo = require("../repositories/students.js");
const ctrl = require("express").Router();

ctrl.get("/", function (req, res) {
  repo
    .find()
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    });
});

ctrl.post("/", function (req, res) {
  // ... insert a student into the students table
});

ctrl.put("/:studentId", function (req, res) {
  // ... update a student in the students table
});

ctrl.delete("/:studentId", function (req, res) {
  // ... delete a student from the students table
});

module.exports = ctrl;
