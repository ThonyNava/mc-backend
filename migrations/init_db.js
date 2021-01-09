const fs = require("fs");
const pool = require("../db.js");

pool
  .query(fs.readFileSync("migrations/0_initial_snapshot.sql").toString())
  .then(() => {
    console.info("Migration successful!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
