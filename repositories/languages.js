const pool = require("../db.js");

function find() {
  return pool.query("SELECT * FROM languages;").then((result) => result.rows);
}

function create(language) {
  // ... create language in db
}

function update(language) {
  // ... update language in db
}

function remove(id) {
  // ... remove language from db
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove,
};
