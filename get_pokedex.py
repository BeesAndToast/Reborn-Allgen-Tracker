import json
import urllib.request

# Output filename
output_file = "pokedex_order.js"

print("Fetching National Pokedex from PokeAPI...")

try:
    # 1. Fetch data from PokeAPI (National Dex ID = 1)
    url = "https://pokeapi.co/api/v2/pokedex/1"
    headers = {'User-Agent': 'Mozilla/5.0'}
    req = urllib.request.Request(url, headers=headers)
    
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        
    entries = data['pokemon_entries']
    
    # 2. Build the Dictionary { "Bulbasaur": 1, "Ivysaur": 2 ... }
    dex_map = {}
    for entry in entries:
        name = entry['pokemon_species']['name'].title() # Capitalize "bulbasaur" -> "Bulbasaur"
        dex_num = entry['entry_number']
        
        # PokeAPI uses dashes for some names (e.g. "mr-mime"), fix them to match Reborn
        if "Mr-Mime" in name: name = "Mr. Mime"
        if "Mime-Jr" in name: name = "Mime Jr."
        if "Type-Null" in name: name = "Type: Null"
        if "Tapu-" in name: name = name.replace("-", " ")
        if "Jangmo-O" in name: name = "Jangmo-o"
        if "Hakamo-O" in name: name = "Hakamo-o"
        if "Kommo-O" in name: name = "Kommo-o"
        if "Porygon-Z" in name: name = "Porygon-Z"
        if "Ho-Oh" in name: name = "Ho-Oh"
        
        dex_map[name] = dex_num

    # 3. Save as a JavaScript file
    js_content = "const pokedexOrder = " + json.dumps(dex_map, indent=2) + ";"
    
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"Success! Saved {len(dex_map)} entries to '{output_file}'.")

except Exception as e:
    print(f"Error fetching Dex: {e}")