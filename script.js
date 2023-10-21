'use strict'

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    const square = document.querySelector('square');
    square.style.backgroundColor = 'green';
});

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