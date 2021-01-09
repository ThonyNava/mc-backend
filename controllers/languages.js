const { languagesRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/", function (req, res) {
  // ... insert a language
});

ctrl.get("/", function (req, res) {
  // ... select all languages
});

ctrl.delete("/:languageId", function (req, res) {
  // ... delete a language
});

module.exports = ctrl;
