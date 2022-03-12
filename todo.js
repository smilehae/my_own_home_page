const todoList = document.querySelector(".todo");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function showTodos() {
  const container = todoList.querySelector("ul");
  const content = todos
    .map(
      (todo) => `
    <li data-id=${todo.id} class="${todo.isDone ? "todo-checked" : ""}">
        <span class="todo-text">${todo.value}</span>
        <span class="todo-button clear"><i class="fa-solid fa-circle-check"></i></span>
        <span class="todo-button clear"><i class="fa-solid fa-eraser"></i></span>

        </li>
  `
    )
    .join("");
  container.innerHTML = content;
}

function addTodo(value) {
  let id = localStorage.getItem("id");
  if (!id) {
    id = 1;
    localStorage.setItem("id", "1");
  } else {
    id = Number(id) + 1;
    localStorage.setItem("id", `${id}`);
  }
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
  if (e.target.matches("span")) {
    const parent = e.target.parentNode;
    parent.classList.toggle("todo-checked");
    console.log(parent.dataset.id);
    toggleIsDone(parent.dataset.id);
  }
});
