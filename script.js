const weatherIcon = document.querySelector('.weather__icon img')
const temperatureElement = document.querySelector('.weather__temperature p')
const weatherType = document.querySelector('.weather__type p')
const locationElement = document.querySelector('.weather__location p')
const notificationElement = document.querySelector('.notification')
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const searchBox = document.querySelector('.weather__search input')
const searchBtn = document.querySelector('.weather__search button')
const weather = document.querySelector('.weather');



//APP MANERA 2

const apiKey = "68a6e0057c80eef7b634f31b6879bea4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  if (response.status == 404) {
    notificationElement.style.display = "block"
    weather.style.display = "none"
  } 
  
  weatherType.innerHTML = data.weather[0].description;
  locationElement.innerHTML = data.name;
  temperatureElement.innerHTML = Math.round(data.main.temp) + "°c";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./img/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./img/drizzle.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./img/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "./img/snow.png";
  } else if (data.weather[0].main == "Wind") {
    weatherIcon.src = "./img/wind.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./img/Mist.png";
  } else if (data.weather[0].main == "Humidity") {
    weatherIcon.src = "./img/humidity.png";
  }

  weather.style.display = "block";
  notificationElement.style.display = "none"
}

// Evento tecla Enter al buscador
document.addEventListener('keyup', function (e) {
  if (e.key == 'Enter') {
    checkWeather(searchBox.value);
  }})
// Evento click al buscador
searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
})



