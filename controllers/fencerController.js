const db = require("../db/queries");

async function getFencers(req, res, next) {
  const lastnames = await db.getAllFencers();
  console.log("Lastnames: ", lastnames);
  // res.send("Lastnames: " +lastnames.map(fencer => fencer.lastname).join(", "));
  return lastnames;
  next();
}

async function createFencerPost(req, res) {
  const lastname = req.body.last_name;
  console.log(lastname);
  await db.insertFencer(lastname);
  res.redirect("/");
}

module.exports = {
  getFencers,
  createFencerPost
};