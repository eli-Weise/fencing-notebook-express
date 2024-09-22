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

  const myscore = body.my_score ?? 0;
  const opscore = body.opponent_score ?? 0;
  const winner = body.winner ?? "empty";
  const mycards = body.my_cards ?? [];
  const myred = body.my_red ?? 0;
  const opcards = body.op_cards ?? [];
  const opred = body.op_red ?? 0;
  const pcards = body.p_cards;
  const notes = body.notes ?? "";

  console.log("createBoutPost");
  console.log(body);

  await db.insertBout(myscore, opscore, winner, mycards, myred, opcards, opred, pcards, notes);
  res.redirect("/");
}


async function deleteBout(id) {
  await db.deleteBout(id);
}

module.exports = {
  getAllBouts,
  getBout,
  createBoutPost,
  deleteBout
}