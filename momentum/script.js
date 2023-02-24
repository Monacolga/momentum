//---------------time&date----------------//

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

//-------------------greeting-------------------//

const greeting = document.querySelector(".greeting");

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 00) {
    timeOfDay = "night";
  }
  if (hours >= 06) {
    timeOfDay = "morning";
  }
  if (hours >= 12) {
    timeOfDay = "afternoon";
  }
  if (hours >= 18) {
    timeOfDay = "evening";
  }
  greeting.textContent = `Good ${timeOfDay}`;
}
getTimeOfDay();

//---------------------name---------------------//

const userName = document.querySelector(".name");

function setLocalStorage() {
  localStorage.setItem("name", userName.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    userName.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);

//--------------------weather---------------------//

const cityWeather = document.querySelector(".weather-city");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".weather-temperature");
const weatherDescription = document.querySelector(".weather-discription");
const wind = document.querySelector(".weather-wind");
const humidity = document.querySelector(".weather-humidity");
const noCity = document.querySelector(".weather-error");

cityWeather.addEventListener("change", getWeather);

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather.value}&lang=en&appid=1ac8bb01d3acb3f87b21427e0d6e295d&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}
getWeather();

function setCityLocalStorage() {
  localStorage.setItem("city", cityWeather.value);
}
window.addEventListener("beforeunload", setCityLocalStorage);

function getCityLocalStorage() {
  if (localStorage.getItem("city")) {
    cityWeather.value = localStorage.getItem("city");
  }
}
window.addEventListener("load", getCityLocalStorage);

window.addEventListener("load", getWeather);

// function errorWeather() {
//   if (cityWeather.value === "") {
//     noCity.textContent = `Error! Please enter city`;
//   } else {
//     noCity.textContent = "";
//     // noCity.classList.add("active");
//     // noCity.style.display = none;
//   }
// }
// errorWeather();

//--------------------slider--------------------//

const body = document.querySelector("body");
const slideNext = document.querySelector(".icon-right");
const slidePrev = document.querySelector(".icon-left");

let randomNum = getRandomNum();

function getRandomNum() {
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}
getRandomNum();

function setBg() {
  let bgNum = String(getRandomNum()).padStart(2, "0");
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/monacolga/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url("${img.src}")`;
  };
}
setBg();

slideNext.addEventListener("click", getSlideNext);

function getSlideNext() {
  if (randomNum < 20) {
    randomNum += 1;
  }
  if (randomNum === 20) {
    randomNum === 1;
  }
  setBg();
}

slidePrev.addEventListener("click", getSlidePrev);

function getSlidePrev() {
  if (randomNum < 20) {
    randomNum -= 1;
  }
  if (randomNum === 1) {
    randomNum === 20;
  }
  setBg();
}

//-------------------quote of day-------------------//

const buttonQuote = document.querySelector(".change-quote");
const quoteOfDay = document.querySelector(".quote-text");
const authorOfQuote = document.querySelector(".quote-author");

function getNumberOfQuote() {
  return Math.floor(Math.random() * (1643 - 1 + 1)) + 1;
}
console.log(getNumberOfQuote());

buttonQuote.addEventListener("click", getQuotes);

async function getQuotes() {
  const quotes = "data.json";
  // console.log(quotes);
  const res = await fetch(quotes);
  // console.log(res);
  const data = await res.json();
  console.log(data);

  quoteOfDay.textContent = `${data[getNumberOfQuote()].text}`;
  authorOfQuote.textContent = `${data[getNumberOfQuote()].author}`;
}
getQuotes();
