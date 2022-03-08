const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector("#clock");
const HIDDEN_CLASSNAME = "hidden";
const goalForm = document.querySelector("#goal-form");
const ampm = document.querySelector(".ampm");
const goalToolbox = document.querySelector(".tool-box");

let username = localStorage.getItem("username") || "";
let goal = localStorage.getItem("goal") || "";

function getClock() {
  const date = new Date();
  const hours = String(
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
  ).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}`;
}

function getGreeting() {
  console.log("greeting 업데이트");
  const hour = new Date().getHours();
  let greetingText = "좋은 하루 보내세요,";
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

  if (hour > 12) {
    ampm.innerText = "PM";
  }
}

function setGoal(val) {
  const input = goalForm.querySelector("input");
  const goalPos = goalForm.querySelector("h3");
  const asking = goalForm.querySelector("h5");
  asking.innerText = "TODAY";
  goalPos.innerText = val;
  input.classList.add(HIDDEN_CLASSNAME);
}

function checkUsernameStatus() {
  if (username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    goalForm.classList.remove(HIDDEN_CLASSNAME);
    getGreeting();
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }
  if (goal) {
    setGoal(goal);
  }
}

getClock();
checkUsernameStatus();

setInterval(getClock, 1000);
setInterval(getGreeting, 3600000);

//eventListner에서 어떤 함수를 실행하든 간에, event에 대한 정보를 전달한다. preventDefault는 default인 행동을 막는 것이다.
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginInput = loginForm.querySelector("input");
  username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
  checkUsernameStatus();
});

goalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = goalForm.querySelector("input");
  setGoal(input.value);
  localStorage.setItem("goal", input.value);
});
