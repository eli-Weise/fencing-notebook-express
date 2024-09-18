require("dotenv").config();
const path = require("node:path");

const express = require("express");
const app = express();

const fencerRouter = require("./routes/fencerRoutes");
const boutRouter = require("./routes/boutRoutes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assestsPath = path.join(__dirname, "public");
app.use(express.static(assestsPath));

app.use(express.urlencoded({ extended: false}));

const fencerController = require("./controllers/fencerController");

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

app.use("/fencer", fencerRouter);
app.use("/bout", boutRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));