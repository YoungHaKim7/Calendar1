const date = new Date();

const monthDays = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector(".date h1").innerHTML=months[date.getMonth()];

document.querySelector(".date p").innerHTML= date.toDateString();

let days = "";

for (let i = 1; i<= lastDay; i++) {
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
}
