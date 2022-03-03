const apiKey = weatherAPI;

function onGeoOK(position) {
  console.log(position);
  const [latitude, longitude] = [
    position.coords.latitude,
    position.coords.longitude,
  ];
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}8&lon=${longitude}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const region = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      region.innerText = data.name;

      console.log(data.name, data.weather[0].main);
    });
}

function onGeoError() {
  alert("can't find you. where are you?");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
