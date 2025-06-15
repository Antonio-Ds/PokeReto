let gameMode = 'hard'; // Modo por defecto
let pokemons = [];
const MAX_POKEMON = 151;

// Referencias a elementos del DOM
const pokemonInput = document.getElementById('pokemonInput');
const pokemonList = document.getElementById('pokemonList');
const themeSwitch = document.getElementById('themeCheckbox');
const body = document.body;

// Inicializa el juego
async function initializeGame() {
    await loadPokemons();
    initializePokemonDisplay();
    setupEventListeners();
}

// Cargar Pokémon dinámicamente desde la PokéAPI
async function loadPokemons() {
    pokemons = [];

    for (let i = 1; i <= MAX_POKEMON; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemons.push({
            name: data.name,
            image: data.sprites.front_default,
            guessed: false
        });
    }

    // Agrega MissingNo como extra
    pokemons.push({
        name: "missingno",
        image: "images/missingno.webp",
        guessed: false,
        isSpecial: true
    });
}

// Establece el modo de juego
function setGameMode(mode) {
    gameMode = mode;
    initializePokemonDisplay();
}

// Actualiza los contadores de Pokémon adivinados y restantes
function updateCounters() {
    const correctCount = pokemons.filter(p => p.guessed).length;
    const remainingCount = pokemons.filter(p => !p.guessed && !p.isSpecial).length;

    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('remainingCount').textContent = remainingCount;
}

// Obtener HTML según el modo de juego
function getPokemonDisplay(pokemon) {
    const imageTag = `<img src="${pokemon.image}" alt="${pokemon.name}">`;
    const nameTag = `<p>${pokemon.name}</p>`;

    if (gameMode === 'easy') {
        return pokemon.guessed ? `${imageTag}${nameTag}` : imageTag;
    } else if (gameMode === 'medium') {
        return pokemon.guessed ? `${imageTag}${nameTag}` : `<img src="${pokemon.image}" style="filter: brightness(0);" alt="?">`;
    } else {
        return pokemon.guessed ? `${imageTag}${nameTag}` : `<div class="placeholder"><p>?</p></div>`;
    }
}

// Inicializa la visualización
function initializePokemonDisplay() {
    pokemonList.innerHTML = '';

    pokemons.filter(p => !p.isSpecial).forEach((pokemon, index) => {
        const el = document.createElement('div');
        el.className = 'pokemon';
        el.id = `pokemon-${index}`;
        el.innerHTML = getPokemonDisplay(pokemon);
        pokemonList.appendChild(el);
    });

    updateCounters();
}

// Verifica el nombre ingresado
function checkPokemon() {
    const input = pokemonInput.value.toLowerCase().trim();

    pokemons.forEach((pokemon, index) => {
        if (pokemon.name === input && !pokemon.guessed) {
            pokemon.guessed = true;

            if (!pokemon.isSpecial) {
                const el = document.getElementById(`pokemon-${index}`);
                el.innerHTML = getPokemonDisplay(pokemon);
                el.classList.add('pokemon-correct');
                setTimeout(() => el.classList.remove('pokemon-correct'), 1000);
            } else {
                const el = document.createElement('div');
                el.className = 'pokemon';
                el.innerHTML = getPokemonDisplay(pokemon);
                pokemonList.appendChild(el);
                el.classList.add('pokemon-correct');
                setTimeout(() => el.classList.remove('pokemon-correct'), 1000);
            }

            pokemonInput.value = '';
        }
    });

    updateCounters();
}

// Configura eventos
function setupEventListeners() {
    pokemonInput.addEventListener('input', checkPokemon);
    themeSwitch.addEventListener('change', toggleTheme);
}

// Cambia el tema
function toggleTheme() {
    body.classList.toggle('dark-mode');
}

// Inicia al cargar
window.onload = initializeGame;
