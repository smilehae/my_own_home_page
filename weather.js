const apiKey = weatherAPI;

function onGeoOK(position) {
  const [latitude, longitude] = [
    position.coords.latitude,
    position.coords.longitude,
  ];
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}8&lon=${longitude}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = document.querySelector("#weather img");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:nth-child(3)");
      const region = document.querySelector("#weather span:last-child");
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp + "℃";
      region.innerText = data.name;
    });
}

function onGeoError() {
  alert("can't find you. where are you?");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
