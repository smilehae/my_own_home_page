const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector("#clock");
const HIDDEN_CLASSNAME = "hidden";

let username = localStorage.getItem("username") || "";
let greetingString = "Good Morning";

if (username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = greetingString + ", " + username + ".";
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const makeTimewithZero = (time) => {
  if (+time < 10) {
    return `0${time}`;
  }
  return `${time}`;
};

setInterval(() => {
  const today = new Date();
  const ampmString = document.querySelector(".ampm");
  let hour = today.getHours();
  let timeString = "";

  if (hour >= 12 && hour < 17) {
    greetingString = "Good Afternoon";
  } else if (hour < 21) {
    greetingString = "Good Evening";
  } else if (hour < 24) {
    greeting = "Good Night";
  }
  if (hour > 12) {
    hour = hour - 12;
    ampmString.textContent = "PM";
  } else {
    ampmString.textContent = "AM";
  }

  timeString += ` ${makeTimewithZero(hour)}:${makeTimewithZero(
    today.getMinutes()
  )}`;

  clock.textContent = timeString;
}, 1000);

//eventListner에서 어떤 함수를 실행하든 간에, event에 대한 정보를 전달한다. preventDefault는 default인 행동을 막는 것이다.
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
});
