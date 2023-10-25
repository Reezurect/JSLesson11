'use strict'

const range = document.getElementById('range');
const span = document.getElementById('range-span');

function boxSizing() {
    let val = range.value;
    circle.style.boxSizing = val + "%";
};

const logger = function (event) {
    span.textContent = event.target.value
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