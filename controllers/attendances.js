const { attendancesRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/", function (req, res) {
  // ... record a student's attendance of a class
});

ctrl.get("/", function (req, res) {
  // ... select all attendances
});

// Trickier:
// get all attendance records of a given class

module.exports = ctrl;
