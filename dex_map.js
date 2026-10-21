const pokemonNamesToDex = {
    "Bulbasaur": 1, "Ivysaur": 2, "Venusaur": 3, "Charmander": 4, "Charmeleon": 5, "Charizard": 6,
    "Squirtle": 7, "Wartortle": 8, "Blastoise": 9, "Caterpie": 10, "Metapod": 11, "Butterfree": 12,
    "Weedle": 13, "Kakuna": 14, "Beedrill": 15, "Pidgey": 16, "Pidgeotto": 17, "Pidgeot": 18,
    "Rattata": 19, "Raticate": 20, "Spearow": 21, "Fearow": 22, "Ekans": 23, "Arbok": 24,
    "Pikachu": 25, "Raichu": 26, "Sandshrew": 27, "Sandslash": 28, "Nidoran♂": 29, "Nidorino": 30,
    "Nidoking": 31, "Nidoran♀": 32, "Nidorina": 33, "Nidoqueen": 34, "Clefairy": 35, "Clefable": 36,
    "Vulpix": 37, "Ninetales": 38, "Jigglypuff": 39, "Wigglytuff": 40, "Zubat": 41, "Golbat": 42,
    "Oddish": 43, "Gloom": 44, "Vileplume": 45, "Paras": 46, "Parasect": 47, "Venonat": 48,
    "Venomoth": 49, "Diglett": 50, "Dugtrio": 51, "Meowth": 52, "Persian": 53, "Psyduck": 54,
    "Golduck": 55, "Mankey": 56, "Primeape": 57, "Growlithe": 58, "Arcanine": 59, "Poliwag": 60,
    "Poliwhirl": 61, "Poliwrath": 62, "Abra": 63, "Kadabra": 64, "Alakazam": 65, "Machop": 66,
    "Machoke": 67, "Machamp": 68, "Bellsprout": 69, "Weepinbell": 70, "Victreebel": 71, "Tentacool": 72,
    "Tentacruel": 73, "Geodude": 74, "Graveler": 75, "Golem": 76, "Ponyta": 77, "Rapidash": 78,
    "Slowpoke": 79, "Slowbro": 80, "Magnemite": 81, "Magneton": 82, "Farfetch'd": 83, "Doduo": 84,
    "Dodrio": 85, "Seel": 86, "Dewgong": 87, "Gastly": 88, "Haunter": 89, "Gengar": 90,
    "Onix": 91, "Drowzee": 92, "Hypno": 93, "Krabby": 94, "Kingler": 95, "Voltorb": 96,
    "Electrode": 97, "Exeggcute": 98, "Exeggutor": 99, "Cubone": 100, "Marowak": 101, "Hitmonlee": 102,
    "Hitmonchan": 103, "Lickitung": 104, "Koffing": 105, "Weezing": 106, "Rhyhorn": 107, "Rhydon": 108,
    "Chansey": 109, "Tangela": 110, "Kangaskhan": 111, "Horsea": 112, "Seadra": 113, "Goldeen": 114,
    "Seaking": 115, "Staryu": 116, "Starmie": 117, "Mr. Mime": 118, "Scyther": 119, "Jynx": 120,
    "Electabuzz": 121, "Magmar": 122, "Pinsir": 123, "Tauros": 124, "Magikarp": 125, "Gyarados": 126,
    "Lapras": 127, "Ditto": 128, "Eevee": 129, "Flareon": 130, "Jolteon": 131, "Vaporeon": 132,
    "Porygon": 133, "Omanyte": 134, "Omastar": 135, "Krabby": 136, "Kingler": 137, "Kabuto": 138,
    "Kabutops": 139, "Aerodactyl": 140, "Snorlax": 141, "Articuno": 142, "Zapdos": 143, "Moltres": 144,
    "Dratini": 145, "Dragonair": 146, "Dragonite": 147, "Mewtwo": 148, "Mew": 149, "Mew": 151
};

const internalIndex = {
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

let output = "const internalToDex = {\n";
for (let index in internalIndex) {
    const name = internalIndex[index];
    const dexId = pokemonNamesToDex[name] || "null";
    output += `    ${index}: ${dexId},`;
    if (index % 10 === 0) output += "\n";
}
output += "\n};";
console.log(output);
