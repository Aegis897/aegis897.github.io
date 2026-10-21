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

const nameToDex = {
    "Rhydon": 108, "Kangaskhan": 111, "Nidoran♂": 29, "Clefairy": 35, "Spearow": 21, "Voltorb": 96, "Nidoking": 31, "Slowbro": 80, "Ivysaur": 2, "Exeggutor": 99,
    "Lickitung": 104, "Exeggcute": 98, "Grimer": 135, "Gengar": 90, "Nidoran♀": 32, "Nidoqueen": 34, "Cubone": 100, "Rhyhorn": 107, "Lapras": 127, "Arcanine": 59,
    "Mew": 151, "Gyarados": 126, "Shellder": 152, "Tentacool": 72, "Gastly": 88, "Scyther": 119, "Staryu": 116, "Blastoise": 9, "Pinsir": 123, "Tangela": 110,
    "Growlithe": 58, "Onix": 91, "Fearow": 22, "Pidgey": 16, "Slowpoke": 79, "Kadabra": 64, "Graveler": 75, "Chansey": 109, "Machoke": 67, "Mr. Mime": 118,
    "Hitmonlee": 102, "Hitmonchan": 103, "Arbok": 24, "Parasect": 47, "Psyduck": 54, "Drowzee": 92, "Golem": 76, "Magmar": 122, "Electabuzz": 121, "Magneton": 82,
    "Koffing": 105, "Mankey": 56, "Seel": 86, "Diglett": 50, "Tauros": 124, "Farfetch'd": 83, "Venonat": 48, "Dragonite": 147, "Doduo": 84, "Poliwag": 60,
    "Jynx": 120, "Moltres": 144, "Articuno": 142, "Zapdos": 143, "Ditto": 128, "Meowth": 52, "Krabby": 94, "Vulpix": 37, "Ninetales": 38, "Pikachu": 25,
    "Raichu": 26, "Dratini": 145, "Dragonair": 146, "Kabuto": 138, "Kabutops": 139, "Horsea": 112, "Seadra": 113, "Sandshrew": 27, "Sandslash": 28, "Omanyte": 134,
    "Omastar": 135, "Jigglypuff": 39, "Wigglytuff": 40, "Eevee": 129, "Flareon": 130, "Jolteon": 131, "Vaporeon": 132, "Machop": 66, "Zubat": 41, "Ekans": 23,
    "Paras": 46, "Poliwhirl": 61, "Poliwrath": 62, "Weedle": 13, "Kakuna": 14, "Beedrill": 15, "Dodrio": 85, "Primeape": 57, "Dugtrio": 51, "Venomoth": 49,
    "Dewgong": 87, "Caterpie": 10, "Metapod": 11, "Butterfree": 12, "Machamp": 68, "Golduck": 55, "Hypno": 93, "Golbat": 42, "Mewtwo": 148, "Snorlax": 141,
    "Magikarp": 125, "Muk": 136, "Kingler": 95, "Cloyster": 153, "Electrode": 97, "Clefable": 36, "Weezing": 106, "Persian": 53, "Marowak": 101, "Haunter": 89,
    "Abra": 63, "Alakazam": 65, "Pidgeotto": 17, "Pidgeot": 18, "Starmie": 117, "Bulbasaur": 1, "Venusaur": 3, "Tentacruel": 73, "Goldeen": 114, "Seaking": 115,
    "Ponyta": 77, "Rapidash": 78, "Rattata": 19, "Raticate": 20, "Nidorino": 30, "Nidorina": 33, "Geodude": 74, "Porygon": 133, "Aerodactyl": 140, "Magnemite": 81,
    "Charmander": 4, "Squirtle": 7, "Charmeleon": 5, "Wartortle": 8, "Charizard": 6, "Oddish": 43, "Gloom": 44, "Vileplume": 45, "Bellsprout": 69, "Weepinbell": 70,
    "Victreebel": 71
};

let output = "const internalToDex = {\n";
for (let index in internalIndex) {
    const name = internalIndex[index];
    const dexId = nameToDex[name] || "null";
    output += `    ${index}: ${dexId},`;
    if (Object.keys(internalIndex).indexOf(index) % 10 === 9) output += "\n";
}
output += "\n};";
console.log(output);
