const {Router} = require("express");

const boutRouter = Router();

const boutController = require("../controllers/boutController");

boutRouter.get("/new", (req, res) => {
  res.render("bout/new-bout");
});

boutRouter.post("/new", (req, res) => {
  boutController.createBoutPost(req, res);
})

boutRouter.get("/:id", async (req, res) => {
  console.log(req.params);

  try {
    const bout = await boutController.getBout(req.params.id);
    console.log(bout);
    res.render("bout/bout-stats", {bout: bout});
  } catch (e) {
    console.log(e);
  }
});



boutRouter.get("/delete/:id", (req, res) => {
  boutController.deleteBout(req.params.id);
  console.log("successfully deleted: " + req.params.id);
  res.redirect("/");
})

module.exports = boutRouter;