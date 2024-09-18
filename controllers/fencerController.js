const db = require("../db/queries");

async function getFencers() {

  const fencers = await db.getAllFencers();
  // console.log("Lastnames: ", lastnames);
  // res.send("Lastnames: " +lastnames.map(fencer => fencer.lastname).join(", "));
  return fencers;
  // next();
}

async function getFencer(id) {
  const fencerFull = await db.getFencer(id);
  const fencer = (fencerFull.rows)[0];
  return fencer;
}

async function createFencerPost(req, res) {
  const body = req.body;

  const firstname = body.first_name;
  const lastname = body.last_name;
  const rating = body.rating;
  const hand = body.hand;
  const grip = body.grip;
  const ratingyear = body.ry;
  const height = body.height;
  const notes = body.notes;

  await db.insertFencer(firstname, lastname, rating, ratingyear, hand, grip, height, notes);
  res.redirect("/");
}

async function editFencerPost(req, res) {
  const body = req.body;

  const firstname = body.first_name;
  const lastname = body.last_name;
  const rating = body.rating;
  const hand = body.hand;
  const grip = body.grip;
  const ratingyear = body.ry;
  const height = body.height;
  const notes = body.notes;

  const id = body.id;

  await db.editFencer(id, firstname, lastname, rating, ratingyear, hand, grip, height, notes);
  res.redirect("/opponent/" + id);
}

async function deleteFencer(id) {
  await db.deleteFencer(id);
  // res.redirect("/")
}

module.exports = {
  getFencers,
  getFencer,
  createFencerPost,
  editFencerPost,
  deleteFencer
};