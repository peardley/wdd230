const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5783695&units=imperial&appid=3aa97004348628212561256cc4c26234";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    const desc = jsObject.weather[0].description;  
    document.getElementById('desc').textContent = desc;   

    let temp = document.getElementById('current-temp').innerHTML;
    let humidity = document.getElementById('humidity').innerHTML;

    let forecastTemp1 = document.getElementById('forecasttemp1').innerHTML;
    let newTemp = Math.round(temp);
    let newHumidity = Math.round(humidity);

    document.getElementById('current-temp').innerHTML = newTemp +' °F';
    document.getElementById('humidity').innerHTML = newHumidity +' %';
})

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5783695&units=imperial&appid=3aa97004348628212561256cc4c26234";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const threeDayForecast = [];
    const forecast = jsObject.list
    for (let i = 0; i < forecast.length; i++ ) {
     if (forecast[i].dt_txt.includes("18:00:00")){
      threeDayForecast.push(forecast[i]) 
      }
    };

console.log(threeDayForecast);
const imageLink = "https://openweathermap.org/img/w/";

function unixToDate(dt) {
  const miliseconds = dt * 1000
  const dateObject = new Date(miliseconds)
  const weekDay = dateObject.toLocaleString("default", { weekday: "short" })
  return weekDay
}

document.getElementById("day1").textContent = unixToDate(threeDayForecast[0].dt);
document.getElementById("day2").textContent = unixToDate(threeDayForecast[1].dt);
document.getElementById("day3").textContent = unixToDate(threeDayForecast[2].dt);
 
document.getElementById('forecastimg1').setAttribute("src", `${imageLink}${threeDayForecast[0].weather[0].icon}.png`);
document.getElementById('forecastimg1').setAttribute("alt", `${threeDayForecast[0].weather[0].description}`);
document.getElementById('forecastimg2').setAttribute("src", `${imageLink}${threeDayForecast[1].weather[0].icon}.png`);
document.getElementById('forecastimg2').setAttribute("alt", `${threeDayForecast[1].weather[0].description}`);
document.getElementById('forecastimg3').setAttribute("src", `${imageLink}${threeDayForecast[2].weather[0].icon}.png`);
document.getElementById('forecastimg3').setAttribute("alt", `${threeDayForecast[2].weather[0].description}`);

document.getElementById('forecasttemp1').textContent = threeDayForecast[0].main.temp;
document.getElementById('forecasttemp2').textContent = threeDayForecast[1].main.temp; 
document.getElementById('forecasttemp3').textContent = threeDayForecast[2].main.temp;


let forecastTemp1 = document.getElementById('forecasttemp1').innerHTML;
let forecastTemp2 = document.getElementById('forecasttemp2').innerHTML;
let forecastTemp3 = document.getElementById('forecasttemp3').innerHTML;

let newTemp1 = Math.round(forecastTemp1);
let newTemp2 = Math.round(forecastTemp2);
let newTemp3 = Math.round(forecastTemp3);

document.getElementById('forecasttemp1').innerHTML = newTemp1 +' °F';
document.getElementById('forecasttemp2').innerHTML = newTemp2 +' °F';
document.getElementById('forecasttemp3').innerHTML = newTemp3 +' °F';
})
