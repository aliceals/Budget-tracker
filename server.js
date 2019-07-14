const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/calculatetax", function(req, res) {
  const salary = req.body.salary;
  const taxCode = req.body.taxCode;
  console.log(salary);
  console.log(taxCode);
  const taxOff = (salary * 0.3) / 52;
  console.log(taxOff);
  res.send({ weeklyPaye: taxOff });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//post
//Post (url, request body, response body)
//POST /gettax
//req body = {salary:100,000, taxCode: M}
//response body = {weeklyPaye: $1000}
