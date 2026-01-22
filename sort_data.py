import pandas as pd
import json
import re

# --- CONFIGURATION ---
csv_filename = 'locations.csv' 

try:
    # Read the file
    df = pd.read_csv(csv_filename)
    print("Read locations.csv successfully!")
except Exception as e:
    print(f"Error reading file: {e}")
    print("Make sure 'locations.csv' is in the folder.")
    exit()

# 1. CLEANING & SORTING
def get_location_id(index_str):
    if pd.isna(index_str): return 99999 
    match = re.search(r'(\d+)', str(index_str))
    if match:
        return int(match.group(1))
    return 99999

df['SortID'] = df['Location Index'].apply(get_location_id)

# 2. FORMATTING
def format_loc(row):
    loc = str(row['Location']).strip()
    method = str(row['Method']).strip()
    time = str(row['Time']).strip()
    notes = str(row['Notes']).strip()
    
    details = []
    if method and method.lower() != 'nan': details.append(method)
    if time and time.lower() != 'nan' and time.lower() != 'any': details.append(time)
    
    loc_str = loc
    if details:
        loc_str += f" ({', '.join(details)})"
    if notes and notes.lower() != 'nan':
        loc_str += f" [{notes}]"
    return loc_str

df['FormattedLoc'] = df.apply(format_loc, axis=1)

# 3. GROUPING
grouped = df.groupby('Pokemon')
pokemon_list = []

for name, group in grouped:
    first_encounter_id = group['SortID'].min()
    locs = sorted(list(set(group['FormattedLoc'])))
    
    pokemon_list.append({
        "name": name,
        "locations": locs,
        "order": int(first_encounter_id)
    })

# Sort by game progression
pokemon_list.sort(key=lambda x: x['order'])

# 4. SAVING
js_content = "const pokemonData = " + json.dumps(pokemon_list, indent=2) + ";"

with open('checklist_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Success! Generated checklist_data.js with {len(pokemon_list)} Pokémon.")