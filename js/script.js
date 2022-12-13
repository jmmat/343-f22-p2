
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3afd5096e1mshbfca979e6819cc7p187c0ajsn259793b031bd',
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    }
};

function respond(response) {
    console.log(response);
    console.log(response.locations);
}

function fetchResponse(location){
    const response = fetch(`https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${location}&contentType=json&unitGroup=us&shortColumnNames=0`, options)
    .then(response => response.json())
    .then(response => respond(response))
    .catch(err => console.error(err));
}


// Get the form element
const form = document.getElementById("locationForm");

// Add 'submit' event handler
form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Location Input Submitted");
    var input = document.querySelector('#location')
    console.log(input.value);
    fetchResponse(input.value.replaceAll(' ', ''));
});