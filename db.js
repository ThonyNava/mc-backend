const { Pool } = require("pg");

module.exports = new Pool({
  user: "thonynava",
  host: "localhost",
  database: "migracode",
  password: "",
  port: 5432,
});
