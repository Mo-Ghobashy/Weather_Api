function fetchWeather(city) {
  const cities = [
    { name: "cairo", temp: 12, humidity: 20, description: "sunny" },
    { name: "alex:", temp: 15, humidity: 50, description: "raining" },
    { name: "aswan", temp: 20, humidity: 10, description: "cool" },
  ];
  cityWeather = cities.find((cityweather) => cityweather.name === city);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cityWeather);
    }, 2000);
  });
}
function fetchForecast(city) {
  const foreCastedWeather = [
    { name: "cairo", foreCastedtemp: 15, foreCasteddescription: "sunny" },
    { name: "alex:", foreCastedtemp: 18, foreCasteddescription: "raining" },
    { name: "aswan", foreCastedtemp: 25, foreCasteddescription: "cool" },
  ];
  let cityForcastedWeather = foreCastedWeather.find(
    (cityweather) => cityweather.name === city
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cityForcastedWeather);
    }, 3000);
  });
}
async function fetchWeatherData(city) {
  let res = await Promise.all([fetchWeather(city), fetchForecast(city)]);
  let weather = { currentWeather: res[0], forecastedWeather: res[1] };
  console.log(weather);
}
fetchWeatherData("cairo");
