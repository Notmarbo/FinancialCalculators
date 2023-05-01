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
let totalEarned = document.getElementById("totalEarned")
const calculateBtn = document.getElementById("calculateBtn");

window.onload = init;

function init() {
    calculateBtn.onclick = onCalculateBtnClciked;
}

function onCalculateBtnClciked() {
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
     let rateOfReturnNumb = parseFloat(rOfR) /100;

    let tax = taxAmount.value;
     let taxAsNumb = parseFloat(tax) / 100;

    let total = totalContributed.value;
     let totalContributedNumb = parseFloat(total);

    let ira = iraReturn.value;
     let iraReturnNumb = parseFloat(ira);

    if (isNaN(startBalanceNumb) || isNaN(annualContributionNumb) || isNaN(currentAgeNumb) || isNaN(retireAgeNumb) || isNaN(rateOfReturnNumb) || isNaN(taxAsNumb)) {
        totalContributed.value = "Please Fill In All Fields";
        iraReturn.value = "Please Fill In All Fields";
        totalEarned.value = "Please Fill In All Fields";
    } else{
        let yearsOfInterest = retireAgeNumb - currentAgeNumb;
        let totalContributedFinal = yearsOfInterest * annualContributionNumb;
        let TotalWorth = (annualContributionNumb * (((1 + rateOfReturnNumb) ** yearsOfInterest) - 1) / rateOfReturnNumb) * (1 + rateOfReturnNumb) + (startBalanceNumb * (1 + rateOfReturnNumb) ** yearsOfInterest);
        let earnedTotal = TotalWorth - totalContributedFinal;
         totalContributed.value = totalContributedFinal.toFixed(0);
         iraReturn.value = TotalWorth.toFixed(0);
         totalEarned.value = earnedTotal.toFixed(0);
    }
}


