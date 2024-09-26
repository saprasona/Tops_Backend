// API Key for the Country State City API
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "TnhkcGRwNDR5NEdQcWFZd2xGMXhJT3FKbnBGSXBzVW1MT0o5a0tESA==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

// Function to fetch and populate countries
const getCountries = () => {
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
        .then(response => response.json())
        .then(result => {
            let options = "<option value='0'>--- Select Country ---</option>";
            result.forEach(ele => {
                options += `<option value=${ele.iso2}>${ele.name}</option>`;
            });
            document.getElementById('countrylist').innerHTML = options;
        })
        .catch(error => console.log('Error fetching countries:', error));
};

var code;

// Function to fetch and populate states based on selected country
const getStates = (countryCode) => {
    code = countryCode;
    fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, requestOptions)
        .then(response => response.json())
        .then(result => {
            let options = "<option value='0'>--- Select State ---</option>";
            result.forEach(ele => {
                options += `<option value=${ele.iso2}>${ele.name}</option>`;
            });
            document.getElementById('statelist').innerHTML = options;
        })
        .catch(error => console.log('Error fetching states:', error));
};

var scode;

// Function to fetch and populate cities based on selected state
const getCities = (stateCode) => {
    scode = stateCode;
    fetch(`https://api.countrystatecity.in/v1/countries/${code}/states/${stateCode}/cities`, requestOptions)
        .then(response => response.json())
        .then(result => {
            let options = "<option value='0'>--- Select City ---</option>";
            result.forEach(ele => {
                options += `<option value=${ele.name}>${ele.name}</option>`;
            });
            document.getElementById('citylist').innerHTML = options;
        })
        .catch(error => console.log('Error fetching cities:', error));
};

// Function to fetch time data based on selected city
const fetchTimeData = (city) => {
    fetch('/geocode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }), // Sending city as payload
    })
    .then(response => response.json())
    .then(data => {
        if (data.location) {
            // Get location data from the response
            const locationData = data.location;
            return TimeData(locationData.timezone); // Use the timezone from the location data
        } else {
            throw new Error('Location data not found');
        }
    })
    .then(timeData => {
        document.getElementById('cityname').innerHTML = city;
        updateCurrentDateTime(timeData);
    })
    .catch(err => {
        console.log(err);
        alert('Could not fetch time data. Please check the selected city.');
    });
};

// Function to update the current date, time, and day
const updateCurrentDateTime = (timeData) => {
    const now = new Date(timeData.datetime);
    
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const optionsDay = { weekday: 'long' }; 

    const formattedDate = now.toLocaleDateString('en-US', optionsDate);
    const formattedTime = now.toLocaleTimeString('en-US', optionsTime);
    const formattedDay = now.toLocaleDateString('en-US', optionsDay);

    document.getElementById('date').innerHTML = `Date: <strong>${formattedDate}</strong>`;
    document.getElementById('time').innerHTML = `Current Time: <strong>${formattedTime}</strong>`;
    document.getElementById('day').innerHTML = `Day: <strong>${formattedDay}</strong>`;
};

window.getCountries = getCountries;
window.getStates = getStates;
window.getCities = getCities;
window.fetchTimeData = fetchTimeData;
