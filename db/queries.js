const pool = require("./pool");

async function getAllFencers() {
  const {rows} = await pool.query("SELECT * FROM opponents");
  return rows;
}

async function getFencer(id) {
  const row = await pool.query("SELECT * FROM opponents WHERE id=$1", [id]);
  return row;
}

async function insertFencer(firstname, lastname, rating, ry, hand, grip, height, notes) {
  const text = "INSERT INTO opponents (firstname, lastname, rating, year, hand, grip, height, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
  const value = [firstname, lastname, rating, ry, hand, grip, height, notes]

  await pool.query(text, value);
}

async function editFencer(id, firstname, lastname, rating, ry, hand, grip, height, notes) {
  const text = `UPDATE opponents
                SET firstname=$1, lastname=$2, rating=$3, year=$4, hand=$5, grip=$6, height=$7, notes=$8
                WHERE id=$9`;
  const value = [firstname, lastname, rating, ry, hand, grip, height, notes, id];

  await pool.query(text, value);
}

async function deleteFencer(id) {
  const text = "DELETE FROM opponents WHERE id=$1";
  const value = [id];

  await pool.query(text, value);
}

module.exports = {
  getAllFencers,
  getFencer,
  insertFencer,
  editFencer,
  deleteFencer
};