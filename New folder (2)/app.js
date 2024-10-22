document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  
  if (city) {
    getWeather(city)
      .then((data) => {
        displayWeather(data);
      })
      .catch((error) => {
        alert("City not found or an error occurred!");
        console.error(error);
      });
  } else {
    alert('Please enter a city name!');
  }
});

function getWeather(city) {
  const apiKey = 'your_api_key'; // Replace with your API key from OpenWeather
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject('City not found');
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

function displayWeather(data) {
  document.getElementById('weatherInfo').classList.remove('hidden');
  document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
  document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
  document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
  document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
