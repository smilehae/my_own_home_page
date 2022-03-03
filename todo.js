const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todo";

let todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];

function showToDo() {
  if (todos.length !== 0) {
    todos.forEach(paintToDo);
  }
}

showToDo();

function deleteToDo(e) {
  //event마다 target을 가지고 있고, target에 부모 element 객체를 바로 찾을 수 있다.
  const li = e.target.parentElement;
  console.log(li.id);
  todos = todos.filter((todo) => parseInt(todo.id) !== parseInt(li.id));
  saveToDo();
  li.remove();
}

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const toDoInput = toDoForm.querySelector("input");
  const newTodo = {
    //Date.now() 하면 1000밀리초로 표현. 거의 랜덤같은 넘버를 얻을 수 있따!
    id: Date.now(),
    text: toDoInput.value,
  };
  todos.push(newTodo);
  paintToDo(newTodo);
  saveToDo();
  toDoForm.reset();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
