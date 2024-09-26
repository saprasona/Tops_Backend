const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const PORT = 3000;

const geocode = require("../utility/Geocode");
const weather = require("../utility/Weather");

const viewPath = path.join(__dirname, "../Templates/views");
const partialPath = path.join(__dirname, "../Templates/partials");
const publicPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);
app.use(express.static(publicPath));

app.get("/", (req, resp) => {
    resp.render("index");
});

app.get("/weather", (req, resp) => {
    const city = req.query.city;

    // Get geocode data for the specified city
    geocode.Geocodedata(city)
        .then(data => {
            // Get weather data based on geocode
            return weather.Weatherdata(data.lat, data.lng);
        })
        .then(result => {
            // Respond with date, time, and day
            const currentDate = new Date();
            const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
            const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const optionsDay = { weekday: 'long' };

            resp.send({
                Date: currentDate.toLocaleDateString('en-US', optionsDate),
                Time: currentDate.toLocaleTimeString('en-US', optionsTime),
                Day: currentDate.toLocaleDateString('en-US', optionsDay)
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(500).send({ error: 'Error fetching data. Please try again.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
