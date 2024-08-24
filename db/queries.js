const pool = require("./pool");

async function getAllFencers() {
  const {rows} = await pool.query("SELECT * FROM opponents");
  return rows;
}

async function insertFencer(lastname) {
  await pool.query("INSERT INTO opponents (lastnames) VALUES ($1)", [lastname]);
}

module.exports = {
  getAllFencers,
  insertFencer
};