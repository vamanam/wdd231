const apiKey = 'fb4b9e9375f0b01fa2a02bf7f7af04c1';
const city = 'Uyo';
const country = 'NG';
const units = 'metric';

const weatherContainer = document.getElementById('weather-container');
const currentTemp = document.getElementById('current-temp');
const weatherDesc = document.getElementById('weather-desc');
const forecastDiv = document.getElementById('forecast');

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${units}&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    currentTemp.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
    weatherDesc.textContent = `Conditions: ${data.weather[0].description}`;
  } catch (error) {
    console.error('Error fetching current weather:', error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();

    const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    forecastDiv.innerHTML = '<h3>3-Day Forecast</h3>';
    forecastList.slice(0, 3).forEach(item => {
      const date = new Date(item.dt_txt);
      const day = date.toLocaleDateString(undefined, { weekday: 'long' });
      const temp = Math.round(item.main.temp);
      const desc = item.weather[0].description;

      const card = document.createElement('div');
      card.classList.add('forecast-day');
      card.innerHTML = `<strong>${day}</strong>: ${temp}°C, ${desc}`;
      forecastDiv.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching forecast:', error);
  }
}

fetchWeather();
fetchForecast();
