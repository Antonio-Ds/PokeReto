let gameMode = 'hard'; // Modo por defecto

const pokemons = [
    { name: "bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { name: "ivysaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { name: "venusaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
    { name: "charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { name: "charmeleon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
    { name: "charizard", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
    { name: "squirtle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
    { name: "wartortle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
    { name: "blastoise", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
    { name: "caterpie", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" },
    { name: "metapod", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
    { name: "butterfree", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
    { name: "weedle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" },
    { name: "kakuna", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
    { name: "beedrill", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" },
    { name: "pidgey", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" },
    { name: "pidgeotto", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
    { name: "pidgeot", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" },
    { name: "rattata", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" },
    { name: "raticate", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" },
    { name: "spearow", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png" },
    { name: "fearow", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png" },
    { name: "ekans", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png" },
    { name: "arbok", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" },
    { name: "pikachu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
    { name: "raichu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" },
    { name: "sandshrew", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png" },
    { name: "sandslash", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png" },
    { name: "nidoran-f", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png" },
    { name: "nidorina", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png" },
    { name: "nidoqueen", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png" },
    { name: "nidoran-m", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png" },
    { name: "nidorino", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png" },
    { name: "nidoking", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png" },
    { name: "clefairy", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" },
    { name: "clefable", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png" },
    { name: "vulpix", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png" },
    { name: "ninetales", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" },
    { name: "jigglypuff", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" },
    { name: "wigglytuff", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" },
    { name: "zubat", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png" },
    { name: "golbat", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png" },
    { name: "oddish", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png" },
    { name: "gloom", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png" },
    { name: "vileplume", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png" },
    { name: "paras", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png" },
    { name: "parasect", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png" },
    { name: "venonat", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png" },
    { name: "venomoth", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png" },
    { name: "diglett", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png" },
    { name: "dugtrio", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png" },
    { name: "meowth", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" },
    { name: "persian", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png" },
    { name: "psyduck", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" },
    { name: "golduck", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" },
    { name: "mankey", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png" },
    { name: "primeape", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png" },
    { name: "growlithe", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png" },
    { name: "arcanine", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" },
    { name: "poliwag", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png" },
    { name: "poliwhirl", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png" },
    { name: "poliwrath", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png" },
    { name: "abra", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png" },
    { name: "kadabra", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png" },
    { name: "alakazam", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png" },
    { name: "machop", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png" },
    { name: "machoke", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png" },
    { name: "machamp", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png" },
    { name: "bellsprout", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png" },
    { name: "weepinbell", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png" },
    { name: "victreebel", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png" },
    { name: "tentacool", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png" },
    { name: "tentacruel", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png" },
    { name: "geodude", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png" },
    { name: "graveler", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png" },
    { name: "golem", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" },
    { name: "ponyta", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png" },
    { name: "rapidash", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png" },
    { name: "slowpoke", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png" },
    { name: "slowbro", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png" },
    { name: "magnemite", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png" },
    { name: "magneton", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png" },
    { name: "farfetchd", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png" },
    { name: "doduo", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png" },
    { name: "dodrio", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png" },
    { name: "seel", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png" },
    { name: "dewgong", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png" },
    { name: "grimer", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png" },
    { name: "muk", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png" },
    { name: "shellder", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png" },
    { name: "cloyster", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png" },
    { name: "gastly", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png" },
    { name: "haunter", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png" },
    { name: "gengar", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" },
    { name: "onix", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png" },
    { name: "drowzee", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png" },
    { name: "hypno", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png" },
    { name: "krabby", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png" },
    { name: "kingler", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png" },
    { name: "voltorb", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png" },
    { name: "electrode", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png" },
    { name: "exeggcute", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png" },
    { name: "exeggutor", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png" },
    { name: "cubone", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png" },
    { name: "marowak", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png" },
    { name: "hitmonlee", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png" },
    { name: "hitmonchan", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png" },
    { name: "lickitung", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png" },
    { name: "koffing", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png" },
    { name: "weezing", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png" },
    { name: "rhyhorn", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png" },
    { name: "rhydon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png" },
    { name: "chansey", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png" },
    { name: "tangela", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png" },
    { name: "kangaskhan", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png" },
    { name: "horsea", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png" },
    { name: "seadra", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png" },
    { name: "goldeen", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png" },
    { name: "seaking", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png" },
    { name: "staryu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png" },
    { name: "starmie", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png" },
    { name: "mr.mime", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png" },
    { name: "scyther", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png" },
    { name: "jynx", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png" },
    { name: "electabuzz", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png" },
    { name: "magmar", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png" },
    { name: "pinsir", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png" },
    { name: "tauros", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png" },
    { name: "magikarp", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png" },
    { name: "gyarados", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png" },
    { name: "lapras", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png" },
    { name: "ditto", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" },
    { name: "eevee", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" },
    { name: "vaporeon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png" },
    { name: "jolteon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png" },
    { name: "flareon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png" },
    { name: "porygon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png" },
    { name: "omanyte", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png" },
    { name: "omastar", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png" },
    { name: "kabuto", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png" },
    { name: "kabutops", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png" },
    { name: "aerodactyl", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png" },
    { name: "snorlax", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" },
    { name: "articuno", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png" },
    { name: "zapdos", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png" },
    { name: "moltres", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png" },
    { name: "dratini", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png" },
    { name: "dragonair", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png" },
    { name: "dragonite", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" },
    { name: "mewtwo", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" },
    { name: "mew", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" },
    { name: "missingno", image: "images/missingno.webp", guessed: false, isSpecial: true }
];


// Referencias a elementos del DOM
const pokemonInput = document.getElementById('pokemonInput');
const pokemonList = document.getElementById('pokemonList');
const themeSwitch = document.getElementById('themeCheckbox');
const body = document.body;

// Inicializa el juego
function initializeGame() {
    initializePokemonDisplay();
    setupEventListeners();
}

// Establece el modo de juego
function setGameMode(mode) {
    gameMode = mode;
    initializePokemonDisplay();
}

// Actualiza los contadores de Pokémon adivinados y restantes
function updateCounters() {
    const correctCount = pokemons.filter(pokemon => pokemon.guessed).length;
    const remainingCount = pokemons.filter(pokemon => !pokemon.guessed && !pokemon.isSpecial).length;

    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('remainingCount').textContent = remainingCount;
}

// Obtener el HTML de visualización para un Pokémon según el modo de juego
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

// Inicializar la visualización de los Pokémon
function initializePokemonDisplay() {
    pokemonList.innerHTML = '';

    pokemons.filter(pokemon => !pokemon.isSpecial).forEach((pokemon, index) => {
        const pokemonElement = document.createElement('div');
        pokemonElement.className = 'pokemon';
        pokemonElement.id = `pokemon-${index}`;
        pokemonElement.innerHTML = getPokemonDisplay(pokemon);
        pokemonList.appendChild(pokemonElement);
    });

    updateCounters();
}

// Verificar el Pokémon adivinado
function checkPokemon() {
    const input = pokemonInput.value.toLowerCase();

    pokemons.forEach((pokemon, index) => {
        if (pokemon.name === input && !pokemon.guessed) {
            pokemon.guessed = true;
            if (!pokemon.isSpecial) {
                const pokemonElement = document.getElementById(`pokemon-${index}`);
                if (pokemonElement) {
                    pokemonElement.innerHTML = getPokemonDisplay(pokemon);
                    pokemonElement.classList.add('pokemon-correct');

                    // Eliminar la clase de animación después de que termine la animación
                    setTimeout(() => {
                        pokemonElement.classList.remove('pokemon-correct');
                    }, 1000); // 1000ms es la duración de la animación
                }
            } else {
                // Si es MissingNo, añadirlo al final de la lista
                const specialPokemonElement = document.createElement('div');
                specialPokemonElement.className = 'pokemon';
                specialPokemonElement.innerHTML = getPokemonDisplay(pokemon);
                pokemonList.appendChild(specialPokemonElement);
                specialPokemonElement.classList.add('pokemon-correct');

                // Eliminar la clase de animación después de que termine la animación
                setTimeout(() => {
                    specialPokemonElement.classList.remove('pokemon-correct');
                }, 1000); // 1000ms es la duración de la animación
            }
            pokemonInput.value = ''; // Limpiar el campo de entrada después de un acierto
        }
    });

    updateCounters();
}

// Configurar los listeners de eventos
function setupEventListeners() {
    // Escuchar cambios en el campo de entrada
    pokemonInput.addEventListener('input', checkPokemon);

    // Escuchar cambios en el interruptor de tema
    themeSwitch.addEventListener('change', toggleTheme);
}

// Alternar entre el modo claro y oscuro
function toggleTheme() {
    body.classList.toggle('dark-mode');
}


// Inicializar el juego al cargar la ventana
window.onload = initializeGame;
