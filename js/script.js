function getAPI() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3afd5096e1mshbfca979e6819cc7p187c0ajsn259793b031bd',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };
    
    fetch('https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    console.log("test2");
}
getAPI();