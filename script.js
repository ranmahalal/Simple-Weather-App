// Select relevant HTML elements
const temperatureEl = document.getElementById('temperature');
const weatherDescEl = document.getElementById('weather-description');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const cityNameEl = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');
const cityInputEl = document.getElementById('city');

// The api key is stored in a different file.

// display weather data
async function displayWeatherData() {
    const cityName = cityInputEl.value;
    
    cityNameEl.textContent = 'City: ' + cityName;

    // Construct the API URL
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        // Parse the data
        const data = await response.json();

        temperatureEl.textContent = `Temperature: ${data.current.temp_c}°C`;
        weatherDescEl.textContent = `Weather: ${data.current.condition.text}`;
        humidityEl.textContent = `Humidity: ${data.current.humidity}%`;
        windSpeedEl.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
    } catch (error) {
        // Handle any errors 
        temperatureEl.textContent = 'Temperature: --°C';
        weatherDescEl.textContent = 'Weather: --';
        humidityEl.textContent = 'Humidity: --%';
        windSpeedEl.textContent = 'Wind Speed: -- km/h';
        alert('Error: ' + error.message);
    }
}

searchBtn.addEventListener('click', displayWeatherData);
