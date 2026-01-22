import pandas as pd
import json

# --- CONFIGURATION ---
loc_file = 'allgen_locations.csv'
event_file = 'allgen_events.csv'

# 1. STARTERS
starters = [
    "Grookey", "Scorbunny", "Sobble", 
    "Sprigatito", "Fuecoco", "Quaxly"
]

# 2. BLOCKLIST (The Kill List)
# Any name containing these words will be deleted.
blocklist_keywords = [
    "pokémon eggs", "pokemon eggs", "encounters", 
    "egg chances", "mystery egg", "info", "event", 
    "method", "location", "active gang", "before gym",
    "notes", "type", "time", "rescue egg",
    "evolution section", "new items", "check for items"
]

# 3. GYM ORDER MAPPING
gym_order_map = {
    '001 - Julia': 15, '002 - Florinia': 30, '003 - Corey': 45,
    '004 - Shelly': 60, '005 - Shade': 75, '006 - Kiki': 90,
    '007 - Aya': 105, '008 - Serra': 120, '009 - Noel': 135,
    '010 - Radomus': 150, '011 - Luna': 165, '012 - Samson': 180,
    '013 - Charlotte': 195, '014 - Terra': 210, '015 - Ciel': 225,
    '016 - Adrienn': 240, '017 - Titania': 255, '018 - Amaria': 270,
    '019 - Hardy': 285, '020 - Saphira': 300, 'Postgame': 500
}

allgen_list = []

def add_pokemon(name, location, order=99999):
    name = str(name).replace('*', '').strip()
    
    if not name or name.lower() == 'nan': return
    
    # --- NUCLEAR JUNK FILTER ---
    lower_name = name.lower()
    for bad_word in blocklist_keywords:
        if bad_word in lower_name:
            # print(f"Blocking junk entry: {name}") 
            return

    location = str(location).strip()
    
    existing = next((item for item in allgen_list if item["name"] == name), None)
    if existing:
        if location not in existing["locations"]: existing["locations"].append(location)
        if order < existing["order"]: existing["order"] = order
    else:
        allgen_list.append({"name": name, "locations": [location], "order": order})

# --- PART 1: LOCATIONS (Wild) ---
print("Processing Locations...")
try:
    df_loc = pd.read_csv(loc_file)
    for index, row in df_loc.iterrows():
        name = str(row['Pokemon']).strip()
        
        is_starter = name in starters
        gym_text = str(row['Before Gym']).strip()
        order_num = 1 if is_starter else 99999
        
        if is_starter:
            add_pokemon(name, "Grand Hall (Event) [Starter]", 1)
        elif not is_starter:
            for key, val in gym_order_map.items():
                if key in gym_text:
                    order_num = val
                    break
        
        loc_str = str(row['Location']).strip()
        method = str(row['Method']).strip()
        notes = str(row['Notes']).strip()

        extras = []
        if method and method.lower() != 'nan': extras.append(method)
        if extras: loc_str += f" ({', '.join(extras)})"
        if notes and notes.lower() != 'nan': loc_str += f" [{notes}]"
        
        add_pokemon(name, loc_str, order_num)
except Exception as e:
    print(f"Loc Error: {e}")

# --- PART 2: EVENTS (Eggs/Trades) ---
print("Processing Events...")
try:
    df_evt = pd.read_csv(event_file)
    df_evt['Unnamed: 1'] = df_evt['Unnamed: 1'].ffill()
    df_evt['Unnamed: 5'] = df_evt['Unnamed: 5'].ffill()

    for index, row in df_evt.iterrows():
        if index < 2: continue 
        
        # Eggs
        egg_loc = str(row['Unnamed: 1']).strip()
        if egg_loc.lower() != 'nan':
            mons = [row['Unnamed: 2'], row['Unnamed: 3']]
            for m in mons:
                add_pokemon(m, f"{egg_loc} (Egg)", 99999)

        # Events
        evt_loc = str(row['Unnamed: 5']).strip()
        if evt_loc.lower() != 'nan':
            mon_string = str(row['Unnamed: 6'])
            if mon_string and mon_string.lower() != 'nan':
                ev_mons = [x.strip() for x in mon_string.split(',')]
                for m in ev_mons:
                    add_pokemon(m, f"{evt_loc} (Event)", 99999)

except Exception as e:
    print(f"Event Error: {e}")

allgen_list.sort(key=lambda x: x['order'])
with open('allgen_data.js', 'w', encoding='utf-8') as f:
    f.write("const allGenData = " + json.dumps(allgen_list, indent=2) + ";")

print(f"Success! Removed 'Evolution Section' and other junk.")