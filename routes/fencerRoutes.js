const {Router} = require("express");

const fencerRouter = Router();

const fencerController = require("../controllers/fencerController");

fencerRouter.get("/new", (req, res) => {
  res.render("fencer/new-fencer");
});

fencerRouter.post("/new", (req, res) => {
  fencerController.createFencerPost(req, res);
})

fencerRouter.get("/:id", async (req, res) => {
  console.log(req.params);

  try {
    const opponent = await fencerController.getFencer(req.params.id);
    // const opponent = (opponentReq.rows)[0];
    console.log(opponent);
    res.render("fencer/oppo-stats", {opponent: opponent});
  } catch (e) {
    console.log(e);
  }
  
});

fencerRouter.get("/edit/:id", async (req, res) => {

  try {
    const fencer = await fencerController.getFencer(req.params.id);
    res.render("fencer/edit-fencer", {fencer: fencer});
  } catch (e) {
    console.log(e);
  }
})

fencerRouter.post("/edit", (req, res) => {


  fencerController.editFencerPost(req, res);
})

fencerRouter.get("/delete/:id", (req, res) => {

  fencerController.deleteFencer(req.params.id);
  console.log("successfully deleted: " + req.params.id);
  res.redirect("/");
})

module.exports = fencerRouter;