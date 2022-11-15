//! Date Bill Number and sum

let a = new Date();
let mon = a.getMonth();
let month = mon + 1;
console.log(month);

//! Date

let date = document.getElementById("date");
date.innerHTML = `Date:${a.getDate()} : ${month} : ${a.getFullYear()}`;

//! Bill
let bill = document.getElementById("bill");
let num = Math.floor(Math.random() * 999);
bill.innerText = `Order No: ${num}`;
