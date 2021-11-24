const millsecondsToDays = 86400000;
const days = document.querySelector('#dayssincevisit');
const lastVisit = localStorage.getItem('lastvisit') || Date.now();

console.log(lastVisit, localStorage);

function setStoredList() {
    localStorage.setItem('lastvisit', d);
}
console.log('lastvisit', d);

let dslv = Math.round((d - lastVisit) / millsecondsToDays);
console.log(dslv);

if (dslv === 1) {
    days.innerHTML = 'It has been ' + dslv + ' day since your last visit to this page';
}
else if (dslv > 1) {
    days.innerHTML = 'It has been ' + dslv + ' days since your last visit to this page';
}

else {
    days.innerHTML = 'This is your first visit to this page';
}

localStorage.setItem('lastvisit', Date.now());