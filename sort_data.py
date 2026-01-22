import pandas as pd
import json
import re

# --- CONFIGURATION ---
csv_filename = 'locations.csv' 

# SPELLING CORRECTIONS
# Format: "Wrong Name": "Right Name"
corrections = {
    "Cottenee": "Cottonee",
    "Ninetails": "Ninetales",
    # Add any other base game typos here
}

try:
    df = pd.read_csv(csv_filename)
    print("Read locations.csv successfully!")
except Exception as e:
    print(f"Error reading file: {e}")
    exit()

# --- 1. APPLY CORRECTIONS IMMEDIATELY ---
# This merges "Cottenee" and "Cottonee" into the same exact name
# BEFORE we calculate order or groups.
df['Pokemon'] = df['Pokemon'].astype(str).str.strip().replace(corrections)

# --- 2. CALCULATE SORT ID ---
def get_location_id(index_str):
    if pd.isna(index_str): return 99999 
    match = re.search(r'(\d+)', str(index_str))
    if match:
        return int(match.group(1))
    return 99999

df['SortID'] = df['Location Index'].apply(get_location_id)

# --- 3. FORMAT LOCATIONS ---
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

# --- 4. GROUPING (Now cleanly merges everything) ---
grouped = df.groupby('Pokemon')
pokemon_list = []

for name, group in grouped:
    # Find the BEST (lowest) order number from all rows for this Pokemon
    first_encounter_id = group['SortID'].min()
    
    # Combine all locations
    locs = sorted(list(set(group['FormattedLoc'])))
    
    pokemon_list.append({
        "name": name,
        "locations": locs,
        "order": int(first_encounter_id)
    })

# Final Sort by Order
pokemon_list.sort(key=lambda x: x['order'])

# Export
with open('checklist_data.js', 'w', encoding='utf-8') as f:
    f.write("const pokemonData = " + json.dumps(pokemon_list, indent=2) + ";")

print(f"Done! Processed {len(pokemon_list)} unique Pokémon (Duplicates merged).")