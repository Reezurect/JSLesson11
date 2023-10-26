'use strict'

const range = document.getElementById('range');
const span = document.getElementById('range-span');

function fun1() {
    let rng = document.getElementById('range');
    let cir = document.getElementById('circle');
    cir.style.width = rng.value + "px";
    cir.style.height = rng.value + "px";
};

const logger = function (event) {
    span.textContent = event.target.value + "%"
};

range.addEventListener('input', logger)




document.addEventListener("DOMContentLoaded", backgroundColor());
document.getElementById('btn').addEventListener("click", backgroundColor);
function backgroundColor() {
    let x = document.getElementById('square');
    if (x.style.backgroundColor == "") {
        x.style.backgroundColor = "green";
    } else {
        x.style.backgroundColor = ""
    }
};

document.addEventListener("DOMContentLoaded", eCloseclick());
document.getElementById('btn').addEventListener("click", eCloseclick);
function eCloseclick() {
    let x = document.getElementById('e_btn');
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
};

console.dir(circle);