const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3aa97004348628212561256cc4c26234";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('high-temp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;
    const desc = jsObject.weather[0].description;  
    document.getElementById('desc').textContent = desc;   

 
    let speed = document.getElementById('speed').innerHTML;
    let temp = document.getElementById('current-temp').innerHTML;
    let chill = document.getElementById('chill');
    let humidity = document.getElementById('humidity').innerHTML;
    let high = document.getElementById('high-temp').innerHTML;

    let forecastTemp1 = document.getElementById('forecasttemp1').innerHTML;
    let newTemp = Math.round(temp);
    let newHumidity = Math.round(humidity);
    let newHigh = Math.round(high);
    let newSpeed = Math.round(speed);

    document.getElementById('current-temp').innerHTML = newTemp +' °F';
    document.getElementById('speed').innerHTML = newSpeed +' mph';
    document.getElementById('humidity').innerHTML = newHumidity +' %';
    document.getElementById('high-temp').innerHTML = newHigh +' °F';

})

let temp = document.getElementById('current-temp').innerHTML;
let speed = document.getElementById('speed').innerHTML;

console.log(speed,temp)
let wc = 35.74 + 0.6215 * temp -35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
console.log(wc);
wc = Math.round(wc);
wc = wc + ' °F';
chill.innerHTML = wc;

if((speed < 3) && (temp > 40)){chill.innerHTML = 'N/A';
    }


const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3aa97004348628212561256cc4c26234";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const fiveDayForecast = [];
    const forecast = jsObject.list
    for (let i = 0; i < forecast.length; i++ ) {
     if (forecast[i].dt_txt.includes("18:00:00")){
      fiveDayForecast.push(forecast[i]) 
      }
    };

console.log(fiveDayForecast);
const imageLink = "https://openweathermap.org/img/w/";

function unixToDate(dt) {
  const miliseconds = dt * 1000
  const dateObject = new Date(miliseconds)
  const weekDay = dateObject.toLocaleString("default", { weekday: "short" })
  return weekDay
}

document.getElementById("day1").textContent = unixToDate(fiveDayForecast[0].dt);
document.getElementById("day2").textContent = unixToDate(fiveDayForecast[1].dt);
document.getElementById("day3").textContent = unixToDate(fiveDayForecast[2].dt);
document.getElementById("day4").textContent = unixToDate(fiveDayForecast[3].dt);
document.getElementById("day5").textContent = unixToDate(fiveDayForecast[4].dt);
 
document.getElementById('forecastimg1').setAttribute("src", `${imageLink}${fiveDayForecast[0].weather[0].icon}.png`);
document.getElementById('forecastimg2').setAttribute("src", `${imageLink}${fiveDayForecast[1].weather[0].icon}.png`);
document.getElementById('forecastimg3').setAttribute("src", `${imageLink}${fiveDayForecast[2].weather[0].icon}.png`);
document.getElementById('forecastimg4').setAttribute("src", `${imageLink}${fiveDayForecast[3].weather[0].icon}.png`);
document.getElementById('forecastimg5').setAttribute("src", `${imageLink}${fiveDayForecast[4].weather[0].icon}.png`);

document.getElementById('forecasttemp1').textContent = fiveDayForecast[0].main.temp;
document.getElementById('forecasttemp2').textContent = fiveDayForecast[1].main.temp; 
document.getElementById('forecasttemp3').textContent = fiveDayForecast[2].main.temp;
document.getElementById('forecasttemp4').textContent = fiveDayForecast[3].main.temp;
document.getElementById('forecasttemp5').textContent = fiveDayForecast[4].main.temp;

let forecastTemp1 = document.getElementById('forecasttemp1').innerHTML;
let forecastTemp2 = document.getElementById('forecasttemp2').innerHTML;
let forecastTemp3 = document.getElementById('forecasttemp3').innerHTML;
let forecastTemp4 = document.getElementById('forecasttemp4').innerHTML;
let forecastTemp5 = document.getElementById('forecasttemp5').innerHTML;

let newTemp1 = Math.round(forecastTemp1);
let newTemp2 = Math.round(forecastTemp2);
let newTemp3 = Math.round(forecastTemp3);
let newTemp4 = Math.round(forecastTemp4);
let newTemp5 = Math.round(forecastTemp5);

document.getElementById('forecasttemp1').innerHTML = newTemp1 +' °F';
document.getElementById('forecasttemp2').innerHTML = newTemp2 +' °F';
document.getElementById('forecasttemp3').innerHTML = newTemp3 +' °F';
document.getElementById('forecasttemp4').innerHTML = newTemp4 +' °F';
document.getElementById('forecasttemp5').innerHTML = newTemp5 +' °F';
})

 