const express = require('express');
const { getWorldClock, getAllTimeZones } = require('../utility/worldClockController');

const router = express.Router();

// Route to handle specific timezone data
router.get('/:area/:location', getWorldClock);

// Route to get all time zones (cities)
router.get('/all', getAllTimeZones);

module.exports = router;
