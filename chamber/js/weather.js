const weatherSection = document.getElementById("weather");

async function getWeather() {
    const apiKey = "1dc6b99e9239caae3a215ef6026e98cf";
    const city = "Syracuse"; // or use lat/lon
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const current = data.list[0];
        const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

        weatherSection.innerHTML = `
            <p>Temp: ${current.main.temp}°C</p>
            <p>${current.weather[0].description}</p>
            <h3>3-Day Forecast</h3>
            <ul>
                ${forecast.map(day => `<li>${day.dt_txt.split(" ")[0]}: ${day.main.temp}°C</li>`).join("")}
            </ul>
        `;
    } catch (error) {
        weatherSection.innerHTML = "<p>Unable to load weather data.</p>";
    }
}

getWeather();
