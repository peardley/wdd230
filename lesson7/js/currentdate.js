let d = new Date();
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
let path = d.toLocaleDateString('en-uk', options)
document.getElementById("currentdate").textContent = path
