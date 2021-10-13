const list = document.querySelector('list');
const input = document.querySelector('favchap');
const button = document.querySelector('button');

button.addEventListener('click', function() => {mainnav.classList.toggle('responsive')}, false);

button.onclick = function() {
    let myFav = favchap.value;
    favchap.value = '';
}

const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');

listItem.appendChild(listText);
listText.textContent = myFav;
listItem.appendChild(listBtn);
listBtn.textContent = 'Delete';
list.appendChild(listItem);

listBtn.onclick = function(e) {
    list.removeChild(listItem);
}
input.focus();