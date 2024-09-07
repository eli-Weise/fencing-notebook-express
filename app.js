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

app.get("/", async (req, res) => {

  try {
  const opponents = await fencerController.getFencers();
  // const opponents = [    {lastnames: "test1"}  ];
  console.log(opponents);

  res.render("index", {opponents: opponents});
  } catch (e) {
    console.log(e);
  }
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

app.get("/opponent/:id", async (req, res) => {
  console.log(req.params);

  try {
    const opponent = await fencerController.getFencer(req.params.id);
    // const opponent = (opponentReq.rows)[0];
    console.log(opponent);
    res.render("oppo-stats", {opponent: opponent});
  } catch (e) {
    console.log(e);
  }
  
});

app.get("/edit/:id", async (req, res) => {

  try {
    const fencer = await fencerController.getFencer(req.params.id);
    res.render("edit-fencer", {fencer: fencer});
  } catch (e) {
    console.log(e);
  }
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));