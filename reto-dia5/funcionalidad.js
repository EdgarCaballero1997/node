document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    fetchPokemon(name);
});

let fetchPokemon = (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayPokemon(data))
        .catch(error => console.error('Error:', error));
}

let displayPokemon = (data) => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <table>
            <thead>
                <tr>
                    <th>Habilidad</th>
                    <th>Nivel</th>
                </tr>
            </thead>
            <tbody>
                ${data.abilities.map(ability => `
                    <tr>
                        <td>${ability.ability.name}</td>
                        <td>${ability.ability.name === data.name ? '*' : '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}