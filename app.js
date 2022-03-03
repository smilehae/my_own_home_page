const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector("#clock");
const HIDDEN_CLASSNAME = "hidden";

let username = localStorage.getItem("username") || "";
let greetingString = "";

if (username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello, " + username + ".";
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);

//eventListner에서 어떤 함수를 실행하든 간에, event에 대한 정보를 전달한다. preventDefault는 default인 행동을 막는 것이다.
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
});
