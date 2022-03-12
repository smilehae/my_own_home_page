const todoList = document.querySelector(".todo");
const todos = JSON.parse(localStorage.getItem("todos")) || [];

function showTodos() {
  const container = todoList.querySelector("ul");
  const content = todos
    .map(
      (todo) => `
    <li>
        <span class="todo-text ">${todo}</span>
        <span class="todo-button clear"><i class="fa-solid fa-circle-check"></i></span>
        <span class="todo-button clear"><i class="fa-solid fa-eraser"></i></span>

        </li>
  `
    )
    .join("");
  container.innerHTML = content;
}

document.addEventListener("DOMContentLoaded", () => {
  showTodos();
});

todoList.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = todoList.querySelector("input");
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodos();
  todoList.reset();
});
todoList.addEventListener("click", (e) => {
  if (e.target.matches("span")) {
    const parent = e.target.parentNode;
    const btns = Array.from(parent.querySelectorAll(".todo-button"));
    btns.forEach((btn) => btn.classList.toggle("clear"));
  }
});
