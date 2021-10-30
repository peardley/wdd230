const todaysDate = Date.now();
const millsecondsToDays = 8640000;
var lastVisit = LocalStorage.getItem('lastvisit');

lastVisit - todaysDate

localStorage.setItem('lastvisit', Date.now());