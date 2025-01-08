const axios = require("axios");

const weatherdata = (lat, lng, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1b274b6a8139a5eeae5571f298f7258e&units=metric`;

  axios
    .get(url)
    .then((result) => {
      const dt = result.data.main;

      var temp = dt.temp;
      var pressure = dt.pressure;
      var humidity = dt.humidity;
      var name = result.data.name;

      callback({
        City: name,
        Temp: temp,
        Pressure: pressure,
        Humidity: humidity,
      });
    })
    .catch((err) => {
      callback(undefined, err);
    });
};

module.exports = { weatherdata };
