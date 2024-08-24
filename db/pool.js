const {Pool} = require("pg");


module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.ROLE_NAME,
  database: "fencers",
  password: process.env.ROLE_PASSWORD,
  port: 5432 // The default port
});