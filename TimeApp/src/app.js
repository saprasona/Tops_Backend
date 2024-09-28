const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const axios = require("axios"); // Add axios for API requests
const PORT = 3000;

// Set up views and static files
const viewPath = path.join(__dirname, "../Templates/views");
const partialPath = path.join(__dirname, "../Templates/partials");
const publicPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);
app.use(express.static(publicPath));

// Content Security Policy to allow scripts
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self'");
    next();
});

// Serve homepage
app.get("/", (req, resp) => {
    resp.render("index");
});

// World Time API route
app.get("/worldclock/:area/:location", (req, res) => {
    const { area, location } = req.params;

    // Fetch time for the specified time zone from World Time API
    axios.get(`http://worldtimeapi.org/api/timezone/${area}/${location}`)
        .then(response => {
            const { datetime, timezone } = response.data;
            const currentTime = new Date(datetime);
            const formattedDate = currentTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            const formattedTime = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const dayOfWeek = currentTime.toLocaleDateString('en-US', { weekday: 'long' });

            res.send({
                Timezone: timezone,
                Date: formattedDate,
                Time: formattedTime,
                Day: dayOfWeek
            });
        })
        .catch(err => {
            res.status(500).send({ error: 'Invalid time zone or location.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
