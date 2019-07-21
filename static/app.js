var netWeeklySalary = document.getElementById("netWeeklySalary");
var grossSalary = document.getElementById("inputGrossSalary");
var netWeeklySalary2 = document.getElementById("netWeeklySalary2");
var other = document.getElementById("inputOther");

var mortgage = document.getElementById("inputMortgage");
var insurance = document.getElementById("inputInsurance");
var rates = document.getElementById("inputRates");
var gas = document.getElementById("inputGas");
var internet = document.getElementById("inputInternet");
var transportation = document.getElementById("inputTransportation");
var childcare = document.getElementById("inputChildcare");
var groceries = document.getElementById("inputGroceries");
var activities = document.getElementById("inputActivities");
var maintenance = document.getElementById("inputMaintenance");
var phone = document.getElementById("inputPhone");
var pocketMoney = document.getElementById("inputPocketMoney");
var kids = document.getElementById("inputKids");
var total = document.getElementById("total");
var grossSalary2 = document.getElementById("inputGrossSalary2");
var selectedTaxCode = document.getElementById("taxCode");

function myFunction(e) {
  event.preventDefault();

  var income =
    netWeeklySalary.valueAsNumber +
    netWeeklySalary2.valueAsNumber +
    other.valueAsNumber;

  var expenses =
    mortgage.valueAsNumber +
    insurance.valueAsNumber +
    rates.valueAsNumber +
    gas.valueAsNumber +
    internet.valueAsNumber +
    transportation.valueAsNumber +
    childcare.valueAsNumber +
    groceries.valueAsNumber +
    activities.valueAsNumber +
    maintenance.valueAsNumber +
    phone.valueAsNumber +
    pocketMoney.valueAsNumber +
    kids.valueAsNumber;

  var totalOfBoth = income - expenses;

  return (total.value = totalOfBoth);
}

function calculateA() {
  apiFetch(grossSalary.value, netWeeklySalary);
}

function calculateB() {
  apiFetch(grossSalary2.value, netWeeklySalary2);
}

function apiFetch(grossSalary, inputToChange) {
  console.log("STC", selectedTaxCode.value);
  fetch("/api/calculatetax", {
    method: "POST",
    body: JSON.stringify({
      salary: grossSalary,
      taxCode: selectedTaxCode.value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      var weeklyPaye = json.weeklyPaye;
      console.log(weeklyPaye);
      console.log(netWeeklySalary);
      inputToChange.value = Math.round(weeklyPaye);
    });
}
