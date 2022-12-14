
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3afd5096e1mshbfca979e6819cc7p187c0ajsn259793b031bd',
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    }
};

const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3afd5096e1mshbfca979e6819cc7p187c0ajsn259793b031bd',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

const date = new Date();

function respond(response) {
    console.log(response);
    let resultsContainer = document.getElementById("results");
    resultsContainer.replaceChildren();
    try {
        location1 = Object.keys(response.locations)[0]; // Washington,DC
    } catch (error) {
        console.log("Invalid Location");
        let data = document.createTextNode("Couldn't find that location");
        resultsContainer.appendChild(data);
        return;
    }

    let conditions = response.locations[location1].currentConditions;

    if(conditions.temp == null) {conditions.temp = 0;}
    if(conditions.humidity == null) {conditions.humidity = 0;}
    if(conditions.wspd == null) {conditions.wspd = 0;}
    if(conditions.precip == null) {conditions.precip = 0;}
    if(conditions.windchill == null) {conditions.windchill = 0;}
    if(conditions.wdir == null) {conditions.wdir = 0;}
    if(conditions.cloudcover == null) {conditions.cloudcover = 0;}
    if(conditions.visibility == null) {conditions.visibility = 0;}

    function addToResults(printString) {
        let container = document.createElement('div');
        let textNode = document.createTextNode(printString);
        container.appendChild(textNode);
        resultsContainer.appendChild(container);
    }
    
    function formatTime(timeString) {
        return timeString.slice(11, 16);
    }
    console.log(response.locations[location1]);
    
    addToResults(`Weather for ${response.locations[location1].address}`);
    addToResults(`Temperature: ${conditions.temp} °F`);
    addToResults(`Humidity: ${conditions.humidity}%`);
    addToResults(`Precipitation: ${conditions.precip} in.`);
    addToResults(`Wind Speed: ${conditions.wspd} mph`);
    addToResults(`Wind Chill: ${conditions.windchill} °F`);
    addToResults(`Wind Direction: ${conditions.wdir}°`);
    addToResults(`Cloud Cover: ${conditions.cloudcover}%`);
    addToResults(`Visibility: ${conditions.visibility} mi.`);
    addToResults(`Sunrise: ${formatTime(conditions.sunrise)}`);
    addToResults(`Sunset: ${formatTime(conditions.sunset)}`);
}

function respond2(response){
    console.log(response);
    let results = document.getElementById("factResults");
    results.replaceChildren();
    let yearDiff = date.getFullYear() - response.year;
    let text = document.createTextNode(`${yearDiff} years ago, today: ${response.text}`);
    results.appendChild(text);
}

function fetchResponse(location){
    const response = fetch(`https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${location}&contentType=json&unitGroup=us&shortColumnNames=0`, options)
    .then(response => response.json())
    .then(response => respond(response))
    .catch(err => console.error(err));
}

function fetchResponse2(day, month){
    fetch(`https://numbersapi.p.rapidapi.com/${day}/${month}/date?fragment=true&json=true`, options2)
	.then(response => response.json())
	.then(response => respond2(response))
	.catch(err => console.error(err));
}


// Get the form element
const form = document.getElementById("locationForm");
const button = document.getElementById("factButton")

// Add 'submit' event handler
form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Location Input Submitted");
    var input = document.querySelector('#location')
    console.log(input.value);
    fetchResponse(input.value.replaceAll(' ', ''));
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Button Clicked");
    fetchResponse2(date.getDate(), date.getMonth());
});