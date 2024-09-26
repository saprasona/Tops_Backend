const express = require('express');
const path = require('path');
const { Geocodedata } = require('../utility/Geocode');  
const { TimeData } = require('../utility/Timecode');    

const app = express();
const port = 9999;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../Templates/views')); 

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public'))); 

// Route to render the main page
app.get('/', (req, res) => {
  res.render('index'); 
});

// Route to handle geocoding and time data retrieval
app.post('/geocode', async (req, res) => {
  const city = req.body.city;

  try {
    const location = await Geocodedata(city); // Get location which should contain lat, lng, and timezone
    const timeData = await TimeData(location.timezone); // Pass the timezone obtained from geocoding
    res.json({ location, timeData }); // Send data as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data. Please try again.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
