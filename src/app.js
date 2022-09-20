function displayTemp(responce) {
  console.log(responce.data);
  let tempElement = (document.querySelector("#temperature").innerHTML =
    Math.round(responce.data.main.temp));
  let conditionElement = (document.querySelector("#condition").innerHTML =
    responce.data.weather[0].description);
  let cityElement = (document.querySelector("#city").innerHTML =
    responce.data.name);
  let humidityEl = (document.querySelector("#humidity").innerHTML =
    responce.data.main.humidity);
  let windEl = (document.querySelector("#wind").innerHTML = Math.round(
    responce.data.wind.speed
  ));
}

let apiKey = "f1064a94adcdf33252dd0ace190896af";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);
