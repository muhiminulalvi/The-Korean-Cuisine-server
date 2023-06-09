const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors())

const chefDetails = require('./chef.json')

app.get("/", (req, res) => {
  res.json({message: "running"});
});

app.get("/chefs", (req, res) => {
  res.send(chefDetails)
});

app.get("/chefs/:id", (req,res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = chefDetails[0].chefs?.find(singleChef => singleChef.id == id);
  console.log(chefDetails[0].chefs[1].id);
  res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
