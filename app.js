document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'apiKey'; // Replace with your weather API key from OpenWeatherMap
    const searchForm = document.getElementById('searchForm');
    const cityInput = document.getElementById('cityInput');
    const currentWeather = document.getElementById('currentWeather');
    const forecast = document.getElementById('forecast');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    });

    async function fetchWeather(city) {
        try {
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!weatherResponse.ok) throw new Error('City not found');
            const weatherData = await weatherResponse.json();
            console.log('Weather Data:', weatherData); // Debugging line
            displayCurrentWeather(weatherData);

            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
            if (!forecastResponse.ok) throw new Error('City not found');
            const forecastData = await forecastResponse.json();
            console.log('Forecast Data:', forecastData); // Debugging line
            displayForecast(forecastData);
        } catch (error) {
            console.error('Error fetching weather data:', error); // Debugging line
            currentWeather.innerHTML = `<p class="error">${error.message}</p>`;
            forecast.innerHTML = '';
        }
    }

    function displayCurrentWeather(data) {
        const html = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${data.weather[0].description}</p>
            <p>${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        currentWeather.innerHTML = html;
    }

    function displayForecast(data) {
        const forecastItems = data.list.filter((_, index) => index % 8 === 0).map(item => {
            return `
                <div class="forecast-item">
                    <h3>${new Date(item.dt_txt).toLocaleDateString()}</h3>
                    <p>${item.weather[0].description}</p>
                    <p>${item.main.temp}°C</p>
                </div>
            `;
        }).join('');
        forecast.innerHTML = forecastItems;
    }
});