class IncomeTax {
  //ONTARIO TAX CALCS
  static ontarioTax(nTaxableIncome) {
      let nOntarioTax = 0;
    //base tax rate
    if (nTaxableIncome <= 40922){
        nOntarioTax = 0.0505 * nTaxableIncome;
    }
    //next tax bracket
    if (nTaxableIncome > 40922 && nTaxableIncome <= 81847) {
      nOntarioTax = (nTaxableIncome - 40922) * 0.0915 + 2067;
    }
    //next bracket
    else if (nTaxableIncome > 81847 && nTaxableIncome <= 150000) {
      nOntarioTax = (nTaxableIncome - 81847) * 0.1116 + 5811;
    }
    //next bracket
    else if (nTaxableIncome > 150000 && nTaxableIncome <= 220000) {
      nOntarioTax = (nTaxableIncome - 150000) * 0.1216 + 13417;
    }
    //last bracket
    else if (nTaxableIncome > 220000) {
      nOntarioTax = (nTaxableIncome - 220000) * 0.1316 + 21929;
    }
    return Number(nOntarioTax.toFixed(2));
  }

  //FEDERAL TAX CALCS
  static federalTax(nTaxableIncome) {
      let nFederalTax = 0;
    //first federal tax bracket
    if (nTaxableIncome <= 45282) {
      nFederalTax = 0.15 * nTaxableIncome;
    }
    //second federal tax bracket
    else if (nTaxableIncome > 45282 && nTaxableIncome <= 90563){
        nFederalTax = (nTaxableIncome - 45282) * .205 +  6792;
    }
    //third federal tax bracket
    else if(nTaxableIncome > 90563 && nTaxableIncome <= 140388){
        nFederalTax = (nTaxableIncome - 90563) * .26 + 16075;
    }
    //fourth federal tax bracket
    else if(nTaxableIncome > 140388 && nTaxableIncome <= 200000){
        nFederalTax = (nTaxableIncome - 140388) * .29 + 29029;
    }
    //fifth federal tax bracket
    else if(nTaxableIncome > 200000){
        nFederalTax = (nTaxableIncome - 200000) * .33 + 46317;
    }
    return Number(nFederalTax.toFixed(2));
  }
}

module.exports = IncomeTax;
