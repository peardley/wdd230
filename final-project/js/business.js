const requestURL = 'https://peardley.github.io/wdd230/json/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
.then(function (jsonObject) {
    const business = jsonObject['business'];
    console.table(jsonObject); 

    for (let i = 0; i < business.length; i++ ) {
        let card = document.createElement('section');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        
        img.setAttribute('src', business[i].logo);
        img.setAttribute('alt', `${business[i].name} logo`);
        h3.textContent = `${business[i].name}`;
        address.textContent = `${business[i].address}`;
        phone.textContent = `${business[i].phonenumber}`;
        website.textContent = `${business[i].website}`;

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        document.querySelector('div.cards').appendChild(card);
    };
});