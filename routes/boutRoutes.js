const {Router} = require("express");

const boutRouter = Router();

const boutController = require("../controllers/boutController");

boutRouter.get("/new", (req, res) => {
  res.render("bout/new-bout");
});

boutRouter.post("/new", (req, res) => {
  boutController.createBoutPost(req, res);
})

module.exports = boutRouter;