const images = ["0.jpg", "1.jpg", "2.jpg"];
const splashApi = unsplashAPI;

const todayImage = images[Math.floor(Math.random() * images.length)];

const backgroundImg = document.createElement("div");
backgroundImg.style.background = `url(./img/1.jpg) center`;
backgroundImg.classList.add("back-img");
document.body.appendChild(backgroundImg);

// fetch("https://api.unsplash.com/photos/random?topic=wallpepers", {
//   method: "GET",
//   headers: {
//     Authorization: `Client-ID ${splashApi}`,
//   },
// })
//   .then((response) => response.json())
//   .then(
//     (myJson) =>
//       (backgroundImg.style.background = `url(${myJson.urls.full}) center`)
//   );
