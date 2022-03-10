const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector("#clock");

const goalForm = document.querySelector("#goal-form");
const goalContainer = goalForm.querySelector(".goal-container");
const goalBtn = goalContainer.querySelector(".btn");
const goalMenu = goalContainer.querySelector(".menu-box");

const HIDDEN_CLASSNAME = "hidden";
const CLEAR_CLASSNAME = "clear";

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
  const ampm = document.querySelector(".ampm");
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
function editGoal(val) {
  const input = goalForm.querySelector("input");
  const asking = goalForm.querySelector("h5");
  const goalText = goalForm.querySelector("h3");
  asking.innerText = "새로운 목표는 어떤 것인가요?";
  input.value = val;
  input.classList.remove(HIDDEN_CLASSNAME);
  goalText.classList.add(HIDDEN_CLASSNAME);
}
function setGoal(val) {
  const input = goalForm.querySelector("input");
  const asking = goalForm.querySelector("h5");
  const goalText = goalForm.querySelector("h3");

  asking.innerText = "TODAY";
  goalText.innerText = `${val}`;

  input.classList.add(HIDDEN_CLASSNAME);
  goalText.classList.remove(HIDDEN_CLASSNAME);
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

goalContainer.addEventListener("mouseenter", () => {
  goalBtn.classList.remove(CLEAR_CLASSNAME);
});

goalContainer.addEventListener("mouseleave", () => {
  goalBtn.classList.add(CLEAR_CLASSNAME);
  goalMenu.classList.add(CLEAR_CLASSNAME);
});

goalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  goalMenu.classList.remove(CLEAR_CLASSNAME);
});

goalMenu.addEventListener("click", (e) => {
  console.log(e.target.classList);
  if (e.target.classList.contains("edit_btn")) {
    console.log("수정버튼");
    editGoal(goal);
  }
});
goalMenu.addEventListener("mouseleave", () => {
  goalMenu.classList.add(CLEAR_CLASSNAME);
});
