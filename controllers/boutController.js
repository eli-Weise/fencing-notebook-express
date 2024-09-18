const db = require("../db/queries");

async function getAllBouts() {
  const bouts = await db.getAllBouts();
  return bouts;
}

async function getBout(id) {
  const boutFull = await db.getBout(id);
  const bout = (boutFull.rows)[0];
  return bout;
}

async function createBoutPost(req, res){
  const body = req.body;

  const myscore = body.my_score;
  const opscore = body.opponent_score;
  const winner = body.winner;
  const mycards = body.my_cards;
  const myred = body.my_red;
  const opcards = body.op_cards;
  const opred = body.op_red;
  const pcards = body.p_cards;
  const notes = body.notes;

  await db.insertBout(myscore, opscore, winner, mycards, myred, opcards, opred, pcards, notes);
  res.redirect("/");
}

module.exports = {
  getAllBouts,
  getBout,
  createBoutPost
}