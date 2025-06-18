const {Router} = require("express");

const boutRouter = Router();

const boutController = require("../controllers/boutController");
const fencerController = require("../controllers/fencerController");

boutRouter.get("/new", async (req, res) => {

  try {
    const opponents = await fencerController.getFencers();

    res.render("bout/new-bout", {opponents: opponents});
  } catch (e) {
    console.log(e);
  }
});

boutRouter.post("/new", (req, res) => {
  boutController.createBoutPost(req, res);
})

boutRouter.get("/:id", async (req, res) => {
  console.log(req.params);

  try {
    const bout = await boutController.getBout(req.params.id);
    const opponents = await fencerController.getFencers();
    console.log(bout);
    res.render("bout/bout-stats", {bout: bout, opponents: opponents});
  } catch (e) {
    console.log(e);
  }
});

boutRouter.get("/delete/:id", (req, res) => {
  boutController.deleteBout(req.params.id);
  console.log("successfully deleted: " + req.params.id);
  res.redirect("/");
})

boutRouter.get("/edit/:id", async (req, res) => {

  try {
    const bout = await boutController.getBout(req.params.id);
    const opponents = await fencerController.getFencers();
    res.render("bout/edit-bout", {bout: bout, opponents: opponents});
  } catch (e) {
    console.log(e);
  }
})

boutRouter.post("/edit", (req, res) => {
  boutController.editBoutPost(req, res);
})

module.exports = boutRouter;