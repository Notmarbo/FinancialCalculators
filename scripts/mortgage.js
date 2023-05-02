"use strict";

let loanAmount = document.getElementById("loanAmount");
let downAmount = document.getElementById("downAmount");
let termAmount = document.getElementById("termAmount");
let intrestAmount = document.getElementById("intrestAmount");
let monthlyRate = document.getElementById("monthlyRate");
let totalInterest = document.getElementById("totalInterest");
const calculateBtn = document.getElementById("calculateBtn");

window.onload = init;

function init() {
  calculateBtn.onclick = onCalculateBtnClciked
}

function onCalculateBtnClciked() {
  //button works here(tested)
  console.log("clicked");
  //convert users inputs into parsed inputs

  //loan amount
  let loan = loanAmount.value;
  let loanAsNumber = parseFloat(loan);

  //down amount
  let down = downAmount.value;
  let downAsNumber = parseFloat(down);

  //term amount
  let term = termAmount.value;
  let termAsNumber = parseFloat(term);

  //intrest amount
  let intrest = intrestAmount.value / 100 / 12;//annual rate to monthly rate
  let interestAsNumber = parseFloat(intrest);

  //principal
  let principal = loanAsNumber - downAsNumber;

  //term in months
  let termInMonths = termAsNumber * 12;

  //if an input is missing flash this error
  if (isNaN(loanAsNumber) || isNaN(downAsNumber) || isNaN(termAsNumber) || isNaN(interestAsNumber)) {
    monthlyRate.value = "Please Fill In All Fields";
    totalInterest.value = "Please Fill In All Fields";

    //if all inputs are good, do math
  } else {
    //used math.pow to create powered values
    let monthly = (principal * interestAsNumber * Math.pow((1 + interestAsNumber), termInMonths)) / (Math.pow((1 + interestAsNumber), termInMonths) - 1);
    let totalInterestAmount = interestAsNumber * principal * termAsNumber;
    console.log(totalInterest);
    console.log(monthly);
    monthlyRate.value = monthly.toFixed(2);
    totalInterest.value = totalInterestAmount.toFixed(2);
  }
}