import Framework7 from "framework7/framework7-bundle";
//import dependency
const IncomeTax = require("./IncomeTax.js");

// If your using custom DOM library, then save it to $$ variable
const $$ = Dom7;

// Init F7
const app = new Framework7();

// Add the view
app.view.create("#app", {
  // enable the dynamic navbar for this view:
  dynamicNavbar: true,
});

$$("#adding").on("submit", (evt) => {
  evt.preventDefault();
  const oData = app.form.convertToData("#adding");
  let nIncome = 0;
  let nDeducted = 0;
  nIncome = Number(oData.income);
  nDeducted = Number(oData.taxDeducted);
  //passing parameter to class to calculate
  let nOntario = IncomeTax.ontarioTax(nIncome);
  let nFederal = IncomeTax.federalTax(nIncome);
  let total = nOntario + nFederal;
  let owing = total - nDeducted;
  //formatting numbers in display
  $$("#ontariotax").html(
    nOntario.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  );
  $$("#federaltax").html(
    nFederal.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  );
  $$("#total").html(
    total.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  );
  $$("#owing").html(
    owing.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  );
});
