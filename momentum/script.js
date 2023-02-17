//time&date

const currentTime = document.querySelector(".time");
const currentDate = document.querySelector(".date");

function showTime() {
  const date = new Date();
  let time = date.toLocaleTimeString();
  currentTime.textContent = time;
  setTimeout(showTime, 1000);
  showDate();
}
showTime();

function showDate() {
  const date = new Date();
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  let today = date.toLocaleDateString("en-US", options);
  currentDate.textContent = today;
}
showDate();

//time - works properly

// setInterval(() => {
//   const currentTime = document.querySelector(".time");
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   if (hours < 10) {
//     hours = "0" + hours;
//   }
//   time.textContent = hours + ":" + minutes + ":" + seconds;
// });

//date - doesn't work properly

// const day = document.querySelector(".date");
// console.log(day);
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// const date = document.querySelector(".date");

// function getDate(d) {
//   let day = days[d.getDay()];
//   let month = d.getMonth();
//   let number = d.getDate();

//   date.textContent = "(${day}), ${month} ${number}";
// }

//greeting

const greeting = document.querySelector(".greeting");

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);
  if (hours >= 00) {
    timeOfDay = "night";
  }
  if (hours >= 07) {
    timeOfDay = "morning";
  }
  if (hours >= 13) {
    timeOfDay = "afternoon";
  }
  if (hours >= 18) {
    timeOfDay = "afternoon";
  }
  greeting.textContent = `Good ${timeOfDay}`;
}
getTimeOfDay();
