const images = ["0.jpg", "1.jpg", "2.jpg"];

const todayImage = images[Math.floor(Math.random() * images.length)];

const backgroundImg = document.createElement("img");
backgroundImg.src = `/img/${todayImage}`;
backgroundImg.classList.add("back-img");
document.body.appendChild(backgroundImg);
