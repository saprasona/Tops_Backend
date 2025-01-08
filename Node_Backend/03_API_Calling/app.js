const geocode = require("./Geocode");
const weather = require("./Weather");

const city = process.argv[2];

if (!city) {
  console.log("City name is required !!!");

  return;
}

geocode.geocodedata(city, (data, err) => {
  if (err) {
    console.log("Something went wrong...");
    return;
  }
  weather.weatherdata(data.lat, data.lng, (result, err) => {
    if (err) {
      console.log("something went wrong");
      return;
    }
    console.log(result);
  });
});
