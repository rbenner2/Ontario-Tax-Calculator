const IncomeTax = require("../public/IncomeTax.js");

it("checks for oIncomeTax", () => {
  expect(IncomeTax).toBeTruthy();
});
//ONTARIO
//first ontario bracket
it("checks for Ontario tax on $1000", () => {
  expect(IncomeTax.ontarioTax(1000)).toBe(50.5);
});
//second ontario bracket
it("checks for Ontario tax on $50,000", () => {
  expect(IncomeTax.ontarioTax(50000)).toBe(2897.64);
});
//third ontario bracket
it("checks for Ontario tax on $150,000", () => {
  expect(IncomeTax.ontarioTax(150000)).toBe(13416.87);
});
//fourth ontario bracket test
it("checks for Ontario tax on $167,000", () => {
  expect(IncomeTax.ontarioTax(167000)).toBe(15484.2);
});
//fifth ontario bracket test
it("checks for Ontario tax on $250,000", () => {
  expect(IncomeTax.ontarioTax(250000)).toBe(25877);
});

//FEDERAL
//first federal bracket
it("checks for Federal tax on $1000", () => {
  expect(IncomeTax.federalTax(1000)).toBe(150);
});
//second federal bracket
it("checks for Federal tax on $53000", () => {
  expect(IncomeTax.federalTax(53000)).toBe(8374.19);
});
//third federal bracket
it("checks for Federal tax on $123000", () => {
  expect(IncomeTax.federalTax(123000)).toBe(24508.62);
});
//fourth federal bracket
it("checks for Federal tax on $167000", () => {
  expect(IncomeTax.federalTax(167000)).toBe(36746.48);
});
//fifth federal bracket
it("checks for Federal tax on $217000", () => {
  expect(IncomeTax.federalTax(217000)).toBe(51927);
});