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
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 8, 8, 11, 30, 0);
// console.log(futureDate);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let day = futureDate.getDay();
day = weekdays[day];

giveaway.textContent = `giveaway end on ${day}, ${date} ${month} ${year} ${hours}:${min} am`;

// future time in ms
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s =1000 ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24 hr

  //  values in ms
  const ondeDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all value
  let days = t / ondeDay;
  days = Math.floor(days);
  let hours = Math.floor((t % ondeDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // set values array;
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`;
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
