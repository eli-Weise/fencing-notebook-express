require("dotenv").config();
const path = require("node:path");

const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assestsPath = path.join(__dirname, "public");
app.use(express.static(assestsPath));


app.get("/", (req, res) => {
  res.render("index")
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));