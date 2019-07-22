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
var selectedTaxCode2 = document.getElementById("taxCode2");

function myFunction(e) {
  event.preventDefault();

  var income =
    netWeeklySalary.valueAsNumber ||
    0 + netWeeklySalary2.valueAsNumber ||
    0 + other.valueAsNumber ||
    0;

  var expenses =
    mortgage.valueAsNumber ||
    0 + insurance.valueAsNumber ||
    0 + rates.valueAsNumber ||
    0 + gas.valueAsNumber ||
    0 + internet.valueAsNumber ||
    0 + transportation.valueAsNumber ||
    0 + childcare.valueAsNumber ||
    0 + groceries.valueAsNumber ||
    0 + activities.valueAsNumber ||
    0 + maintenance.valueAsNumber ||
    0 + phone.valueAsNumber ||
    0 + pocketMoney.valueAsNumber ||
    0 + kids.valueAsNumber ||
    0;

  var totalOfBoth = income - expenses;

  return (total.value = totalOfBoth);
}

function calculateA() {
  apiFetch(grossSalary.value, selectedTaxCode, netWeeklySalary);
}

function calculateB() {
  apiFetch(grossSalary2.value, selectedTaxCode2, netWeeklySalary2);
}

function apiFetch(grossSalary, taxCodeToChange, inputToChange) {
  //console.log("STC", selectedTaxCode.value);
  fetch("/api/calculatetax", {
    method: "POST",
    body: JSON.stringify({
      salary: grossSalary,
      taxCode: taxCodeToChange.value
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
