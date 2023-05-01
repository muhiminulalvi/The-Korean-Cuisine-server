const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors())

const chefDetails = require('./chef.json')

app.get("/", (req, res) => {
  res.json({message: "running"});
});

app.get("/chefs", (req, res) => {
  res.send(chefDetails)
});

app.listen(5000, () => {
  console.log("CORS-enabled web server listening on port 5000");
});
