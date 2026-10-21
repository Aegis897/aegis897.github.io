import os
import requests

# Path to the directory
directory = '/home/aegis/Documents/S'

def get_pokemon_name(pokemon_id):
    try:
        # Use PokeAPI to get the name
        response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{pokemon_id}")
        if response.status_code == 200:
            data = response.json()
            return data['name'].capitalize()
    except Exception as e:
        print(f"Error fetching ID {pokemon_id}: {e}")
    return None

# Get all png files
files = [f for f in os.listdir(directory) if f.endswith('.png')]

for filename in files:
    # Extract number from filename (e.g., '1.png' -> '1')
    name_part = os.path.splitext(filename)[0]
    if name_part.isdigit():
        pokemon_id = int(name_part)
        pokemon_name = get_pokemon_name(pokemon_id)
        
        if pokemon_name:
            old_path = os.path.join(directory, filename)
            new_filename = f"{pokemon_name}.png"
            new_path = os.path.join(directory, new_filename)
            
            print(f"Renaming {filename} -> {new_filename}")
            os.rename(old_path, new_path)
        else:
            print(f"Could not find name for {filename}")

print("Done!")
