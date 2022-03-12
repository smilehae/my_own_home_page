const todoList = document.querySelector(".todo");
const todos = [];

function showTodos() {
  const container = todoList.querySelector("ul");
  const content = todos
    .map(
      (todo) => `
    <li>
        <span>${todo}</span>
    </li>
  `
    )
    .join("");
  container.innerHTML = content;
}
todoList.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = todoList.querySelector("input");
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodos();
  todoList.reset();
});
