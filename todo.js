const todoList = document.querySelector(".todo");
const todoBtn = todoList.querySelector(".todo-setting");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function showTodos() {
  const container = todoList.querySelector("ul");
  const content = todos
    .map(
      (todo) => `
    <li data-id=${todo.id} class="${todo.isDone ? "todo-checked" : ""}">
        <span class="todo-text">${todo.value}</span>
        <span class="todo-button clear"><i class="fa-solid fa-eraser todo-erase"></i></span>

        </li>
  `
    )
    .join("");
  container.innerHTML = content;
}

function addTodo(value) {
  let id = new Date().getTime();
  if (!value) return;

  const newTodo = {
    id,
    value,
    isDone: false,
  };
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function toggleIsDone(id) {
  todos = todos.map((todo) => {
    if (todo.id == id) {
      const newTodo = {
        id: todo.id,
        value: todo.value,
        isDone: !todo.isDone,
      };
      return newTodo;
    } else {
      return todo;
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function eraseTodo(id) {
  todos = todos.filter((todo) => parseInt(todo.id) !== parseInt(id));
  localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", () => {
  showTodos();
});

todoList.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = todoList.querySelector("input");
  addTodo(input.value);
  showTodos();
  todoList.reset();
});
todoList.addEventListener("click", (e) => {
  if (e.target.matches("span") && e.target.classList.contains("todo-text")) {
    const parent = e.target.parentNode;
    parent.classList.toggle("todo-checked");
    toggleIsDone(parent.dataset.id);
  } else if (e.target.classList.contains("todo-erase")) {
    const parent = e.target.parentNode.parentNode;
    console.log(parent);
    eraseTodo(parent.dataset.id);
    parent.remove();
  }
});

todoBtn.addEventListener("click", () => {
  todoList.classList.toggle("todo-del-state");
});
