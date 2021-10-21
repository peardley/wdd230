let speed = document.getElementById('speed').innerHTML;
let temp = document.getElementById('temp').innerHTML;
let chill = document.getElementById('chill');

console.log(speed,temp)
let wc = 35.74 + 0.6215 * temp -35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
console.log(wc);
wc = Math.round(wc);

document.getElementById('temp').innerHTML = temp + ' &#8457';
document.getElementById('speed').innerHTML = speed + ' mph';
console.log(wc);

wc = wc + ' &#8457';
chill.innerHTML = wc;

if((speed < 3) && (temp > 40)){chill.innerHTML = 'N/A';
    }

