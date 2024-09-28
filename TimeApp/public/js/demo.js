const getWorldClockData = (area, location) => {
    fetch(`/worldclock/${area}/${location}`)
        .then(response => response.json())
        .then(result => {
            document.getElementById("cityname").innerHTML = `${area}/${location}`;
            document.getElementById("time").innerHTML = result.Time;
            document.getElementById("date").innerHTML = result.Date;
            document.getElementById("day").innerHTML = result.Day;
        })
        .catch(error => console.error('Error:', error));
};

// Attach event listener after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("getTimeButton");
    button.addEventListener("click", () => {
        const area = document.getElementById('area').value;
        const location = document.getElementById('location').value;
        getWorldClockData(area, location);
    });
});
