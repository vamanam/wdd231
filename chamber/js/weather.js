const apiKey = "fb4b9e9375f0b01fa2a02bf7f7af04c1";
const city = "Uyo";
const units = "metric";

// URLs
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

// Get current weather
fetch(currentWeatherURL)
  .then(response => response.json())
  .then(data => {
    document.getElementById("current-temp").textContent = `${data.main.temp.toFixed(1)}°C`;
    document.getElementById("weather-description").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
  })
  .catch(error => console.error("Error fetching current weather:", error));

// Get 3-day forecast
fetch(forecastURL)
  .then(response => response.json())
  .then(data => {
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = ""; // Clear previous forecast

    // Filter forecast to one result per day at 12:00
    const filteredForecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    filteredForecast.slice(0, 3).forEach(day => {
      const date = new Date(day.dt_txt);
      const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
      const temp = day.main.temp.toFixed(1);
      const icon = day.weather[0].icon;
      const desc = day.weather[0].description;

      const card = document.createElement("div");
      card.classList.add("forecast-card");
      card.innerHTML = `
        <h4>${dayName}</h4>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" />
        <p>${temp}°C</p>
      `;
      forecastContainer.appendChild(card);
    });
  })
  .catch(error => console.error("Error fetching forecast:", error));
