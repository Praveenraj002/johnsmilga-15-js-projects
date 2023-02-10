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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futuredate = new Date(2023, 1, 13, 11, 59, 0);
const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const mins = futuredate.getMinutes();

let month = futuredate.getMonth();
month = months[month];
const date = futuredate.getDate();
let day = futuredate.getDay();
day = weekdays[day];

giveaway.textContent = `giveaway ends on ${day} ${date}  ${month}  ${year}, ${hours}:${mins}pm`;

// Future time in Milli seconds
const futureTime = futuredate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMin);
  let secs = Math.floor((t % oneMin) / 1000);

  // set values array
  const values = [days, hours, mins, secs];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0){
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!</h4>`
  }
}

// Countdown
let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();
