var salary = document.getElementById("inputSalary");
var salary2 = document.getElementById("inputSalary2");
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

function myFunction(e) {
  event.preventDefault();

  var income =
    salary.valueAsNumber + salary2.valueAsNumber + other.valueAsNumber;

  console.log(event);

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

  console.log(totalOfBoth);

  return (total.value = totalOfBoth);
}
