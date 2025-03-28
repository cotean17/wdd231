const apiKey = "YOUR_API_KEY";
const city = "San Miguel,SV"; // Update if needed
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const current = data.list[0];
    const temp = current.main.temp;
    const desc = current.weather[0].description;

    document.getElementById("current-temp").textContent = `Temperature: ${temp.toFixed(1)} °F`;
    document.getElementById("weather-desc").textContent = `Condition: ${desc}`;

    // Get the 3-day forecast (every 8th item = 24 hours)
    const forecastContainer = document.getElementById("forecast");
    for (let i = 8; i <= 24; i += 8) {
      const day = data.list[i];
      const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" });
      const temp = day.main.temp.toFixed(1);

      const div = document.createElement("div");
      div.textContent = `${date}: ${temp} °F`;
      forecastContainer.appendChild(div);
    }
  })
  .catch(error => console.error("Weather API error:", error));
