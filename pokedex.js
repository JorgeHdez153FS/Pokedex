const li$$ = document.querySelector('.pokedex')
const container$$ = document.querySelector('.container');


function onePokemon(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            pokeData(data)
        })
}

function allPokemon() {
    for (let i = 1; i <= 151; i++) {
        onePokemon(i);
    }
}
//Cambiar el fetch-then por un async-await//
allPokemon();

function pokeData(data) {
    const card$$ = document.createElement('div');
    card$$.classList.add('pokemon');

    const idPokemon$$ = document.createElement('p');
    idPokemon$$.textContent = `#${data.id}`;

    const namePokemon$$ = document.createElement('h3');
    namePokemon$$.classList.add('name');
    namePokemon$$.textContent = data.name;

    const imageOnePokemon$$ = document.createElement('img');
    imageOnePokemon$$.src = data.sprites.front_default;

    card$$.appendChild(imageOnePokemon$$);
    card$$.appendChild(idPokemon$$);
    card$$.appendChild(namePokemon$$);

    container$$.appendChild(card$$);
}