
function getWeather(e) {
  e.preventDefault();
  const location = document.getElementById("location-input").value;
  const apiKey = "aae9a193c198a0977abc66f09a384139"; // Your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=aae9a193c198a0977abc66f09a384139&units=metric`;
  // const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=pune";

fetch(url)
  .then(response =>{
    if(!response.ok){
      throw new Error("city not found");
    }
    return response.json();
  })
  .then(data =>{
    displayWeather(data);
  })
  .catch(error =>{
    document.getElementById("weather-data").innerHTML = error.message;
  });

}

function displayWeather(data){
  const { name, main, weather } = data;
  const temperature = main.temp;
  const weatherDescription = weather[0].description;

  const weatherDataContainer = document.getElementById("weather-data");
  weatherDataContainer.innerHTML = `
  <h2>${name}</h2>
  <p>Temperature: ${temperature}°C</p>
  <p>Description: ${weatherDescription}</p>
`;

}
document.getElementById('location-form').addEventListener('submit', getWeather);
