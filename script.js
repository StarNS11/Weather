async function getWeather() {

let location = document.getElementById("locationInput").value;

let apiKey = "db87731d94824e1f81b175303261503";

let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

try{

let response = await fetch(url);
let data = await response.json();

document.getElementById("city").innerText =
data.location.name + ", " + data.location.country;

document.getElementById("temperature").innerText =
"Temperature: " + data.current.temp_c + "°C";

document.getElementById("condition").innerText =
"Condition: " + data.current.condition.text;

}

catch(error){
alert("City not found");
}

}
