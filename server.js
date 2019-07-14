const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/calculatetax", function(req, res) {
  res.send({ weeklyPaye: 1000 });
  console.log(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//post
//Post (url, request body, response body)
//POST /gettax
//req body = {salary:100,000, taxCode: M}
//response body = {weeklyPaye: $1000}
