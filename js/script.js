function getAPI() {
    const data = null;

    const xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=json&unitGroup=us&shortColumnNames=0");
    xhr.setRequestHeader("X-RapidAPI-Key", "3afd5096e1mshbfca979e6819cc7p187c0ajsn259793b031bd");
    xhr.setRequestHeader("X-RapidAPI-Host", "visual-crossing-weather.p.rapidapi.com");

    xhr.send(data);
    console.log(data);
    console.log(xhr);
    console.log("test");
}
getAPI();