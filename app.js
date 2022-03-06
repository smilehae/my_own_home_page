const loginForm = document.querySelector("#login-form");
const todoForm = document.querySelector("#todo-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector("#clock");
const HIDDEN_CLASSNAME = "hidden";

let username = localStorage.getItem("username") || "";

if (username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = "좋은 하루 보내세요, " + username + "님.";
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}`;
}

function getGreeting() {
  console.log("greeting 업데이트");
  const hour = new Date().getHours();
  let greetingText = "좋은 하루 보내세요,";
  console.log(hour);
  if (hour < 8) {
    greetingText = "좋은 새벽이에요,";
  } else if (hour < 12) {
    greetingText = "좋은 아침이에요,";
  } else if (hour < 18) {
    greetingText = "좋은 오후에요,";
  } else if (hour < 22) {
    greetingText = "좋은 저녁이에요,";
  } else {
    greetingText = "좋은 밤 보내세요,";
  }
  greetingText += ` ${username}님.`;
  greeting.innerText = greetingText;
}

getClock();
getGreeting();
setInterval(getClock, 1000);
setInterval(getGreeting, 3600000);

//eventListner에서 어떤 함수를 실행하든 간에, event에 대한 정보를 전달한다. preventDefault는 default인 행동을 막는 것이다.
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
});
