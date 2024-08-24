require("dotenv").config();
const path = require("node:path");

const fencerController = require("./controllers/fencerController");

const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assestsPath = path.join(__dirname, "public");
app.use(express.static(assestsPath));

app.use(express.urlencoded({ extended: false}));

let opponents;

app.use((req, res, next) => {
  opponents = fencerController.getFencers(req, res, next);

  next();
})

app.get("/", (req, res) => {
  // const opponents = fencerController.getFencers(req, res);
  console.log(opponents);

  res.render("index", {opponents: opponents});
});

app.get("/new-fencer", (req, res) => {
  res.render("new-fencer");
});

app.post("/new-fencer", (req, res) => {
  //controller add-new-fencer
  // console.log("will add controller later");
  // res.redirect("/");
  fencerController.createFencerPost(req, res);
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));