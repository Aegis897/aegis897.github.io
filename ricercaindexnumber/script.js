const pokemonInternalIndex = {
    1: "Rhydon", 2: "Kangaskhan", 3: "Nidoran♂", 4: "Clefairy", 5: "Spearow", 6: "Voltorb", 7: "Nidoking", 8: "Slowbro", 9: "Ivysaur", 10: "Exeggutor",
    11: "Lickitung", 12: "Exeggcute", 13: "Grimer", 14: "Gengar", 15: "Nidoran♀", 16: "Nidoqueen", 17: "Cubone", 18: "Rhyhorn", 19: "Lapras", 20: "Arcanine",
    21: "Mew", 22: "Gyarados", 23: "Shellder", 24: "Tentacool", 25: "Gastly", 26: "Scyther", 27: "Staryu", 28: "Blastoise", 29: "Pinsir", 30: "Tangela",
    33: "Growlithe", 34: "Onix", 35: "Fearow", 36: "Pidgey", 37: "Slowpoke", 38: "Kadabra", 39: "Graveler", 40: "Chansey", 41: "Machoke", 42: "Mr. Mime",
    43: "Hitmonlee", 44: "Hitmonchan", 45: "Arbok", 46: "Parasect", 47: "Psyduck", 48: "Drowzee", 49: "Golem", 51: "Magmar", 53: "Electabuzz", 54: "Magneton",
    55: "Koffing", 57: "Mankey", 58: "Seel", 59: "Diglett", 60: "Tauros", 64: "Farfetch'd", 65: "Venonat", 66: "Dragonite", 70: "Doduo", 71: "Poliwag",
    72: "Jynx", 73: "Moltres", 74: "Articuno", 75: "Zapdos", 76: "Ditto", 77: "Meowth", 78: "Krabby", 82: "Vulpix", 83: "Ninetales", 84: "Pikachu",
    85: "Raichu", 88: "Dratini", 89: "Dragonair", 90: "Kabuto", 91: "Kabutops", 92: "Horsea", 93: "Seadra", 96: "Sandshrew", 97: "Sandslash", 98: "Omanyte",
    99: "Omastar", 100: "Jigglypuff", 101: "Wigglytuff", 102: "Eevee", 103: "Flareon", 104: "Jolteon", 105: "Vaporeon", 106: "Machop", 107: "Zubat", 108: "Ekans",
    109: "Paras", 110: "Poliwhirl", 111: "Poliwrath", 112: "Weedle", 113: "Kakuna", 114: "Beedrill", 116: "Dodrio", 117: "Primeape", 118: "Dugtrio", 119: "Venomoth",
    120: "Dewgong", 123: "Caterpie", 124: "Metapod", 125: "Butterfree", 126: "Machamp", 128: "Golduck", 129: "Hypno", 130: "Golbat", 131: "Mewtwo", 132: "Snorlax",
    133: "Magikarp", 136: "Muk", 138: "Kingler", 139: "Cloyster", 141: "Electrode", 142: "Clefable", 143: "Weezing", 144: "Persian", 145: "Marowak", 147: "Haunter",
    148: "Abra", 149: "Alakazam", 150: "Pidgeotto", 151: "Pidgeot", 152: "Starmie", 153: "Bulbasaur", 154: "Venusaur", 155: "Tentacruel", 157: "Goldeen", 158: "Seaking",
    163: "Ponyta", 164: "Rapidash", 165: "Rattata", 166: "Raticate", 167: "Nidorino", 168: "Nidorina", 169: "Geodude", 170: "Porygon", 171: "Aerodactyl", 173: "Magnemite",
    176: "Charmander", 177: "Squirtle", 178: "Charmeleon", 179: "Wartortle", 180: "Charizard", 185: "Oddish", 186: "Gloom", 187: "Vileplume", 188: "Bellsprout", 189: "Weepinbell",
    190: "Victreebel"
};

const pokemonData = {
    "Bulbasaur": { dex: 1, desc: "Pokémon Semi." },
    "Ivysaur": { dex: 2, desc: "Pokémon Semi." },
    "Venusaur": { dex: 3, desc: "Pokémon Semi." },
    "Charmander": { dex: 4, desc: "Pokémon Lucifago." },
    "Charmeleon": { dex: 5, desc: "Pokémon Lucifago." },
    "Charizard": { dex: 6, desc: "Pokémon Lucifago." },
    "Squirtle": { dex: 7, desc: "Pokémon Tartaruga." },
    "Wartortle": { dex: 8, desc: "Pokémon Tartaruga." },
    "Blastoise": { dex: 9, desc: "Pokémon Tartaruga." },
    "Caterpie": { dex: 10, desc: "Pokémon Bruco." },
    "Metapod": { dex: 11, desc: "Pokémon Bozzolo." },
    "Butterfree": { dex: 12, desc: "Pokémon Farfalla." },
    "Weedle": { dex: 13, desc: "Pokémon Bruco." },
    "Kakuna": { dex: 14, desc: "Pokémon Bozzolo." },
    "Beedrill": { dex: 15, desc: "Pokémon Vespa." },
    "Pidgey": { dex: 16, desc: "Pokémon Uccello." },
    "Pidgeotto": { dex: 17, desc: "Pokémon Uccello." },
    "Pidgeot": { dex: 18, desc: "Pokémon Uccello." },
    "Rattata": { dex: 19, desc: "Pokémon Topo." },
    "Raticate": { dex: 20, desc: "Pokémon Topo." },
    "Spearow": { dex: 21, desc: "Pokémon Passero." },
    "Fearow": { dex: 22, desc: "Pokémon Passero." },
    "Ekans": { dex: 23, desc: "Pokémon Serpente." },
    "Arbok": { dex: 24, desc: "Pokémon Serpente." },
    "Pikachu": { dex: 25, desc: "Pokémon Topo." },
    "Raichu": { dex: 26, desc: "Pokémon Topo." },
    "Sandshrew": { dex: 27, desc: "Pokémon Topo." },
    "Sandslash": { dex: 28, desc: "Pokémon Topo." },
    "Nidoran♀": { dex: 29, desc: "Pokémon Veleno." },
    "Nidorina": { dex: 30, desc: "Pokémon Veleno." },
    "Nidoqueen": { dex: 31, desc: "Pokémon Veleno." },
    "Nidoran♂": { dex: 32, desc: "Pokémon Veleno." },
    "Nidorino": { dex: 33, desc: "Pokémon Veleno." },
    "Nidoking": { dex: 34, desc: "Pokémon Veleno." },
    "Clefairy": { dex: 35, desc: "Pokémon Folletto." },
    "Clefable": { dex: 36, desc: "Pokémon Folletto." },
    "Vulpix": { dex: 37, desc: "Pokémon Volpe." },
    "Ninetales": { dex: 38, desc: "Pokémon Volpe." },
    "Jigglypuff": { dex: 39, desc: "Pokémon Pallone." },
    "Wigglytuff": { dex: 40, desc: "Pokémon Pallone." },
    "Zubat": { dex: 41, desc: "Pokémon Pipistrello." },
    "Golbat": { dex: 42, desc: "Pokémon Pipistrello." },
    "Oddish": { dex: 43, desc: "Pokémon Erba." },
    "Gloom": { dex: 44, desc: "Pokémon Erba." },
    "Vileplume": { dex: 45, desc: "Pokémon Erba." },
    "Paras": { dex: 46, desc: "Pokémon Fungo." },
    "Parasect": { dex: 47, desc: "Pokémon Fungo." },
    "Venonat": { dex: 48, desc: "Pokémon Bozzolo." },
    "Venomoth": { dex: 49, desc: "Pokémon Bozzolo." },
    "Diglett": { dex: 50, desc: "Pokémon Tana." },
    "Dugtrio": { dex: 51, desc: "Pokémon Tana." },
    "Meowth": { dex: 52, desc: "Pokémon Gatto." },
    "Persian": { dex: 53, desc: "Pokémon Gatto." },
    "Psyduck": { dex: 54, desc: "Pokémon Anatra." },
    "Golduck": { dex: 55, desc: "Pokémon Anatra." },
    "Mankey": { dex: 56, desc: "Pokémon Combattente." },
    "Primeape": { dex: 57, desc: "Pokémon Combattente." },
    "Growlithe": { dex: 58, desc: "Pokémon Cucciolo." },
    "Arcanine": { dex: 59, desc: "Pokémon Cucciolo." },
    "Poliwag": { dex: 60, desc: "Pokémon Girino." },
    "Poliwhirl": { dex: 61, desc: "Pokémon Girino." },
    "Poliwrath": { dex: 62, desc: "Pokémon Girino." },
    "Abra": { dex: 63, desc: "Pokémon Psico." },
    "Kadabra": { dex: 64, desc: "Pokémon Psico." },
    "Alakazam": { dex: 65, desc: "Pokémon Psico." },
    "Machop": { dex: 66, desc: "Pokémon Lotta." },
    "Machoke": { dex: 67, desc: "Pokémon Lotta." },
    "Machamp": { dex: 68, desc: "Pokémon Lotta." },
    "Bellsprout": { dex: 69, desc: "Pokémon Semi." },
    "Weepinbell": { dex: 70, desc: "Pokémon Semi." },
    "Victreebel": { dex: 71, desc: "Pokémon Semi." },
    "Tentacool": { dex: 72, desc: "Pokémon Medusa." },
    "Tentacruel": { dex: 73, desc: "Pokémon Medusa." },
    "Geodude": { dex: 74, desc: "Pokémon Roccia." },
    "Graveler": { dex: 75, desc: "Pokémon Roccia." },
    "Golem": { dex: 76, desc: "Pokémon Roccia." },
    "Ponyta": { dex: 77, desc: "Pokémon Fuoco." },
    "Rapidash": { dex: 78, desc: "Pokémon Fuoco." },
    "Slowpoke": { dex: 79, desc: "Pokémon Lento." },
    "Slowbro": { dex: 80, desc: "Pokémon Lento." },
    "Magnemite": { dex: 81, desc: "Pokémon Magnete." },
    "Magneton": { dex: 82, desc: "Pokémon Magnete." },
    "Farfetch'd": { dex: 83, desc: "Pokémon Uccello." },
    "Doduo": { dex: 84, desc: "Pokémon Uccello." },
    "Dodrio": { dex: 85, desc: "Pokémon Uccello." },
    "Seel": { dex: 86, desc: "Pokémon Leone." },
    "Dewgong": { dex: 87, desc: "Pokémon Leone." },
    "Grimer": { dex: 88, desc: "Pokémon Fango." },
    "Muk": { dex: 89, desc: "Pokémon Fango." },
    "Shellder": { dex: 90, desc: "Pokémon Conchiglia." },
    "Cloyster": { dex: 91, desc: "Pokémon Conchiglia." },
    "Gastly": { dex: 92, desc: "Pokémon Gas." },
    "Haunter": { dex: 93, desc: "Pokémon Gas." },
    "Gengar": { dex: 94, desc: "Pokémon Gas." },
    "Onix": { dex: 95, desc: "Pokémon Roccia." },
    "Drowzee": { dex: 96, desc: "Pokémon Ipnotico." },
    "Hypno": { dex: 97, desc: "Pokémon Ipnotico." },
    "Krabby": { dex: 98, desc: "Pokémon Granchio." },
    "Kingler": { dex: 99, desc: "Pokémon Granchio." },
    "Voltorb": { dex: 100, desc: "Pokémon Bomba." },
    "Electrode": { dex: 101, desc: "Pokémon Bomba." },
    "Exeggcute": { dex: 102, desc: "Pokémon Semi." },
    "Exeggutor": { dex: 103, desc: "Pokémon Semi." },
    "Cubone": { dex: 104, desc: "Pokémon Ossi." },
    "Marowak": { dex: 105, desc: "Pokémon Ossi." },
    "Hitmonlee": { dex: 106, desc: "Pokémon Lotta." },
    "Hitmonchan": { dex: 107, desc: "Pokémon Lotta." },
    "Lickitung": { dex: 108, desc: "Pokémon Lingua." },
    "Koffing": { dex: 109, desc: "Pokémon Veleno." },
    "Weezing": { dex: 110, desc: "Pokémon Veleno." },
    "Rhyhorn": { dex: 111, desc: "Pokémon Roccia." },
    "Rhydon": { dex: 112, desc: "Pokémon Roccia." },
    "Chansey": { dex: 113, desc: "Pokémon Fortuna." },
    "Tangela": { dex: 114, desc: "Pokémon Liane." },
    "Kangaskhan": { dex: 115, desc: "Pokémon Genitore." },
    "Horsea": { dex: 116, desc: "Pokémon Cavalluccio." },
    "Seadra": { dex: 117, desc: "Pokémon Cavalluccio." },
    "Goldeen": { dex: 118, desc: "Pokémon Pesce." },
    "Seaking": { dex: 119, desc: "Pokémon Pesce." },
    "Staryu": { dex: 120, desc: "Pokémon Stella." },
    "Starmie": { dex: 121, desc: "Pokémon Stella." },
    "Mr. Mime": { dex: 122, desc: "Pokémon Mimo." },
    "Scyther": { dex: 123, desc: "Pokémon Taglio." },
    "Jynx": { dex: 124, desc: "Pokémon Gelo." },
    "Electabuzz": { dex: 125, desc: "Pokémon Fulmine." },
    "Magmar": { dex: 126, desc: "Pokémon Fuoco." },
    "Pinsir": { dex: 127, desc: "Pokémon Corazza." },
    "Tauros": { dex: 128, desc: "Pokémon Toro." },
    "Magikarp": { dex: 129, desc: "Pokémon Pesce." },
    "Gyarados": { dex: 130, desc: "Pokémon Rabbia." },
    "Lapras": { dex: 131, desc: "Pokémon Trasporto." },
    "Ditto": { dex: 132, desc: "Pokémon Trasformazione." },
    "Eevee": { dex: 133, desc: "Pokémon Evoluzione." },
    "Vaporeon": { dex: 134, desc: "Pokémon Bolla." },
    "Jolteon": { dex: 135, desc: "Pokémon Fulmine." },
    "Flareon": { dex: 136, desc: "Pokémon Fiamma." },
    "Porygon": { dex: 137, desc: "Pokémon Programmazione." },
    "Omanyte": { dex: 138, desc: "Pokémon Fossile." },
    "Omastar": { dex: 139, desc: "Pokémon Fossile." },
    "Krabby": { dex: 140, desc: "Pokémon Granchio." },
    "Kabuto": { dex: 141, desc: "Pokémon Fossile." },
    "Kabutops": { dex: 142, desc: "Pokémon Fossile." },
    "Aerodactyl": { dex: 143, desc: "Pokémon Fossile." },
    "Snorlax": { dex: 144, desc: "Pokémon Dormiente." },
    "Articuno": { dex: 145, desc: "Pokémon Gelo." },
    "Zapdos": { dex: 146, desc: "Pokémon Fulmine." },
    "Moltres": { dex: 147, desc: "Pokémon Fuoco." },
    "Dratini": { dex: 148, desc: "Pokémon Drago." },
    "Dragonair": { dex: 149, desc: "Pokémon Drago." },
    "Dragonite": { dex: 150, desc: "Pokémon Drago." },
    "Mewtwo": { dex: 151, desc: "Pokémon Genetico." },
    "Mew": { dex: 152, desc: "Pokémon Antico." }
};

const inputField = document.getElementById('pokemon-index');
const resultName = document.getElementById('pokemon-name');
const resultImg = document.getElementById('pokemon-img');
const resultGuide = document.getElementById('pokemon-guide');

inputField.addEventListener('input', () => {
    const index = parseInt(inputField.value);

    if (isNaN(index)) {
        clearResult("Inserisci un numero di indice");
        return;
    }

    const name = pokemonInternalIndex[index];

    if (!name) {
        clearResult("Indice non valido o Glitchmon (ignorato)");
        return;
    }

    resultName.textContent = name;

    let imageName = name;
    if (name === "Nidoran♂") imageName = "nidoranmaschio";
    if (name === "Nidoran♀") imageName = "nidoranfemmina";
    const imgUrl = `../spritess/${imageName}.png`;
    resultImg.src = imgUrl;
    resultImg.style.display = 'block';

    updateGuide(index, name);
});

function clearResult(message) {
    resultName.textContent = message;
    resultImg.style.display = 'none';
    resultGuide.innerHTML = `<p class='guide-text'>La dispensa è in attesa di un indice di memoria valido...</p>`;
}

function updateGuide(index, name) {
    const data = pokemonData[name] || { dex: "N/A", desc: "Descrizione non disponibile." };
    resultGuide.innerHTML = `
        <div class='guide-item'><strong>Numero Pokédex:</strong> ${data.dex}</div>
        <div class='guide-item'><strong>Nome:</strong> ${name}</div>
        <div class='guide-item'><strong>Generazione:</strong> Prima</div>
        <div class='guide-item'><strong>Specie:</strong> ${data.desc} </div>
    `;
}
