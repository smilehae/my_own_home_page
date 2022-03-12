// const splashApi = unsplashAPI;
const images = [
  {
    imageUrl: "relax_onojeghuo.jpg",
    photographer: "Clem Onojeghuo",
    link: "https://unsplash.com/@clemono?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    imageUrl: "mountain_daniel_leone.jpg",
    photographer: "Daniel Leone",
    link: "https://unsplash.com/@danielleone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    imageUrl: "books_alfons-morales.jpg",
    photographer: "Alfons Morales",
    link: "https://unsplash.com/@alfonsmc10",
  },
  {
    imageUrl: "sea_sean-oulashin.jpg",
    photographer: "Sean Oulashin",
    link: "https://unsplash.com/@oulashin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    imageUrl: "pink_sea_Tyler_Lastovich.jpg",
    photographer: "Tyler Lastovich",
    link: "https://unsplash.com/@lastly",
  },
];
const photoText = document.querySelector(".photographer");
const todayImage = images[Math.floor(Math.random() * images.length)];

const backgroundImg = document.createElement("div");
backgroundImg.style.background = `url(./img/${todayImage.imageUrl}) center`;
backgroundImg.classList.add("back-img");
photoText.innerHTML = `<a target="blank" href="${todayImage.link}">${todayImage.photographer}</a>`;
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
