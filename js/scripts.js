
document.addEventListener("DOMContentLoaded", () => {
    const myInfo = document.getElementById("my-info");
    myInfo.textContent = "daniel kaci | 1258690";
});

//fetch weather data
async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "39e14f7e52bd4ad8d9b561b53f18950d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.cod === 200) {
            document.getElementById("weather-result").innerHTML = `
                Weather in ${data.name}: ${data.weather[0].description}, 
                Temperature: ${data.main.temp}°C
            `;
        } else {
            document.getElementById("weather-result").textContent = "City not found.";
        }
    } catch (error) {
        document.getElementById("weather-result").textContent = "Error fetching weather data.";
    }
}
