const axios = require('axios');

const TimeData = (timezone) => {
  const URL = `http://worldtimeapi.org/api/timezone/${timezone}`; 

  return new Promise((resolve, reject) => {
    axios.get(URL)
      .then(result => {
        const data = result.data;
        const datetime = data.datetime; // Full date and time string
        resolve({ datetime });
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = { TimeData };
