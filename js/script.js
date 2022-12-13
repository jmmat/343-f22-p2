
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

const response = fetch('https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=94%20Mill%20Stone%20Drive%2C%20Verona%2CVA&contentType=json&unitGroup=us&shortColumnNames=0', options)
    .then(response => response.json())
    .then(response => respond(response))
    .catch(err => console.error(err));

