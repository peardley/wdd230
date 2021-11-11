const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject); 

    for (let i = 0; i < towns.length; i++ ) {
        if  (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let img = document.createElement('img');
        
        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        yearFounded.textContent = `Year Founded: ${towns[i].yearFounded}`;
        population.textContent = `Population: ${towns[i].currentPopulation}`;
        averageRainfall.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;
        
        img.setAttribute('src', `/lesson9/images/${towns[i].photo}`);
        img.setAttribute('alt', `Landscape view of ${towns[i].name}`);    
        
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(yearFounded);
        div.appendChild(population);
        div.appendChild(averageRainfall);
        card.appendChild(div);
        card.appendChild(img); 

        /*card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(yearFounded);
        card.appendChild(population);
        card.appendChild(averageRainfall);
        card.appendChild(img);*/

        document.querySelector('div.towninfo').appendChild(card);
        }
    };
});

