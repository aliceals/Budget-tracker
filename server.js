const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.use("/app.js", express.static(__dirname + "/static/app.js"));

app.use("/styles.css", express.static(__dirname + "/static/styles.css"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.post("/api/calculatetax", function(req, res) {
  console.log(req.body);
  const salary = req.body.salary;
  const taxCode = req.body.taxCode;
  console.log(salary);
  console.log(taxCode);

  if (taxCode === "M") {
    const taxOff = (salary * 0.2) / 52;
    res.send({ weeklyPaye: taxOff });
  } else if (taxCode === "MS") {
    const taxOff = (salary * 0.3) / 52;
    res.send({ weeklyPaye: taxOff });
  }

  // const taxOff = (salary * 0.3) / 52;
  // console.log(taxOff);
  // res.send({ weeklyPaye: taxOff });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
