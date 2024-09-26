const axios = require('axios');

const Geocodedata = (city) => {
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;
  
  return new Promise((resolve, reject) => {
    axios.get(URL)
      .then(result => {
        if (result.data.results.length > 0) {
          const data = result.data.results[0].geometry;
          const timezone = result.data.results[0].components.timezone || 'Etc/GMT'; 
          const lat = data.lat;
          const lng = data.lng;
          resolve({ lat, lng, timezone });
        } else {
          reject('No results found');
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = { Geocodedata };
