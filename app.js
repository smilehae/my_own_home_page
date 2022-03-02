const title = document.querySelector(".helloTitle:nth-child(2)");
title.addEventListener("click", () => {
  title.style.color = "red";
  title.textContent = "touched!";
});

title.addEventListener("mouseenter", () => {
  console.log("mouse entered!");
});
console.log(title);

window.addEventListener("resize", () => {
  console.log("resized!");
});
window.addEventListener("copy", () => {
  console.log("copyed!");
});
window.addEventListener("paste", () => {
  console.log("pasted!");
});
window.addEventListener("offline", () => {
  alert("there's no wifi!");
});
