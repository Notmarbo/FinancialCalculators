"use strict"

let startAmount = document.getElementById("startAmount");
let contributionAmount = document.getElementById("contributionAmount");
let currentAge = document.getElementById("currentAge");
let retireAge = document.getElementById("retireAge");
let rateOfReturnAmount = document.getElementById("rateOfReturnAmount");
let taxAmount = document.getElementById("taxAmount");
let totalContributed = document.getElementById("totalContributed");
let iraReturn = document.getElementById("iraReturn");
let hMessage = document.getElementById("hMessage");
const calculateBtn = document.getElementById("calculateBtn");

window.onload = init;

function init(){
    calculateBtn.onclick = onCalculateBtnClciked;
}

function onCalculateBtnClciked(){
    console.log("CLicked")


let start = startAmount.value;
let startBalanceNumb = parseFloat(start);

let contribution = contributionAmount.value;
let annualContributionNumb = parseFloat(contribution);

let cAge = currentAge.value;
let currentAgeNumb = parseFloat(cAge);

let rAge = retireAge.value;
let retireAgeNumb = parseFloat(rAge);

let rOfR = rateOfReturnAmount.value;
let rateOfReturnNumb = parseFloat(rOfR);

let tax = taxAmount.value;
let taxAsNumb = parseFloat(tax);

let total = totalContributed.value;
let totalContributedNumb = parseFloat(total);

let ira = iraReturn.value;
let iraReturnNumb = parseFloat(ira);

if(isNaN(startBalanceNumb) || isNaN(annualContributionNumb) || isNaN(currentAgeNumb) || isNaN(retireAgeNumb) || isNaN(rateOfReturnNumb) || isNa(taxAsNumb)){
    totalContributed.value = "Please Fill In All Fields";
}


}