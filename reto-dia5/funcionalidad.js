document.getElementById('pokemonForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const pokemonName = document.getElementById('pokemonName').value;
    getPokemonData(pokemonName);
});

let getPokemonData = (pokemonName) => {
    // Hacer una solicitud a la API de Pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            // Mostrar la información del Pokémon en la página
            displayPokemonInfo(data);
        })
        .catch(error => {
            console.error('Error al obtener datos del Pokémon:', error);
        });
}

let displayPokemonInfo = (pokemonData) => {
    const pokemonInfoContainer = document.getElementById('pokemonInfo');
    pokemonInfoContainer.innerHTML = '';

    // Crear tabla para mostrar la información
    const table = document.createElement('table');
    table.classList.add('pokemon-table');

    // Agregar filas a la tabla
    addTableRow(table, 'Nombre', pokemonData.name);
    addTableRow(table, 'Altura', pokemonData.height);
    addTableRow(table, 'Peso', pokemonData.weight);
    addTableRow(table, 'Habilidades', getPokemonAbilities(pokemonData.abilities));

    // Agregar la tabla al contenedor
    pokemonInfoContainer.appendChild(table);

    // Mostrar la imagen del Pokémon
    const pokemonImageContainer = document.getElementById('pokemonImage');
    pokemonImageContainer.innerHTML = '';
    const image = document.createElement('img');
    image.src = pokemonData.sprites.front_default;
    image.alt = pokemonData.name;
    pokemonImageContainer.appendChild(image);
}

let addTableRow = (table, label, value) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = label;
    cell2.textContent = value;
}

let getPokemonAbilities = (abilities) => {
    return abilities.map(ability => ability.ability.name).join(', ');
}