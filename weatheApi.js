function fetchWeather(city) {
  const cities = [
    { name: "cairo", temp: 12, humidity: 20, description: "sunny" },
    { name: "alex", temp: 15, humidity: 30, description: "raining" },
    { name: "aswan", temp: 20, humidity: 10, description: "cool" },
  ];

  cityWeather = cities.find((cityweather) => cityweather.name === city);
  return new Promise((resolve, reject) => {
    if (cities.find((cityweather) => cityweather.name === city)) {
      cityWeather = cities.find((cityweather) => cityweather.name === city);
      setTimeout(() => {
        resolve(cityWeather);
      }, 2000);
    } else {
      throw new Error("City not found");
    }
  }).catch((err) => {
    console.log(err);
  });
}

function fetchForecast(city) {
  const foreCastedWeather = [
    {
      name: "cairo",
      Monday: { foreCastedtemp: 15, foreCasteddescription: "sunny" },
      Tuesday: { foreCastedtemp: 15, foreCasteddescription: "sunny" },
      Wednesday: { foreCastedtemp: 15, foreCasteddescription: "sunny" },
    },
    {
      name: "alex",
      Monday: { foreCastedtemp: 18, foreCasteddescription: "raining" },
      Tuesday: { foreCastedtemp: 18, foreCasteddescription: "raining" },
      Wednesday: { foreCastedtemp: 18, foreCasteddescription: "raining" },
    },
    {
      name: "aswan",
      Monday: { foreCastedtemp: 25, foreCasteddescription: "cool" },
      Tuesday: { foreCastedtemp: 25, foreCasteddescription: "cool" },
      Wednesday: { foreCastedtemp: 25, foreCasteddescription: "cool" },
    },
  ];
  return new Promise((resolve, reject) => {
    if (foreCastedWeather.find((cityweather) => cityweather.name === city)) {
      let cityForcastedWeather = foreCastedWeather.find(
        (cityweather) => cityweather.name === city
      );
      setTimeout(() => {
        resolve(cityForcastedWeather);
      }, 3000);
    } else {
      throw new Error("City not found");
    }
  }).catch((err) => {
    console.log(err);
  });
}
async function fetchWeatherData(city) {
  try {
    let res = await Promise.all([fetchWeather(city), fetchForecast(city)]);
    delete res[0].name;
    delete res[1].name;
    let weather = {
      name: city,
      currentWeather: res[0],
      forecastedWeather: res[1],
    };
    console.log(weather);
  } catch (err) {
    console.log("Error:  ", err);
  }
}
fetchWeatherData("cairo");
