const axios = require('axios');

// Fetch time, date, day for specific timezone
const getWorldClock = async (req, res) => {
  const { area, location } = req.params;

  try {
    const response = await axios.get(`http://worldtimeapi.org/api/timezone/${area}/${location}`);
    const { datetime, day_of_week, timezone, utc_offset } = response.data;

    const time = new Date(datetime).toLocaleTimeString();
    const date = new Date(datetime).toLocaleDateString();

    res.json({
      timezone,
      time,
      date,
      dayOfWeek: day_of_week,
      utcOffset: utc_offset,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Invalid area or location. Please use a valid timezone format like "Europe/London" or "America/New_York".',
      error: error.message,
    });
  }
};

// Fetch all available time zones
const getAllTimeZones = async (req, res) => {
  try {
    const response = await axios.get('http://worldtimeapi.org/api/timezone');
    res.json(response.data);  // Returns an array of all available time zones
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching time zones.',
      error: error.message,
    });
  }
};

module.exports = { getWorldClock, getAllTimeZones };
