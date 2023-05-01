"use strict";

let withdrawlAmount = document.getElementsByName("withdrawlAmount");
let interval = document.getElementById("interval");
let startPrincipal = document.getElementById("startPrincipal");
let interestAmount = document.getElementById;("interestAmount");
let monthlyRate = document.getElementById("monthlyRate");
const calculateBtn = document.getElementById("calculateBtn");


window.onload = init;

function init(){
    calculateBtn.onclick = onCalculateBtnClciked;
}

function onCalculateBtnClciked({
    
})