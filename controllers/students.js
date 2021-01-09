const { studentsRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.get("/", function (req, res) {
  studentsRepo
    .find()
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    });
});

ctrl.post("/", function (req, res) {
  // ... insert a student
});

ctrl.put("/:studentId", function (req, res) {
  // ... update a student
});

ctrl.delete("/:studentId", function (req, res) {
  // ... delete a student
});

module.exports = ctrl;
