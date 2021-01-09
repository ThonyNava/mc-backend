const router = require("express").Router();
const studentsCtrl = require("./controllers/students.js");

router.use("/students", studentsCtrl);

module.exports = router;
