import os

# 1. PATH TO YOUR ICONS FOLDER
folder_path = "icons"

# 2. THE NUCLEAR MAP
rename_map = {
    # --- TREASURES OF RUIN (The Fix) ---
    "wochien": "Wo-Chien",
    "wo chien": "Wo-Chien",
    "chienpao": "Chien-Pao",
    "chien pao": "Chien-Pao",
    "tinglu": "Ting-Lu",
    "ting lu": "Ting-Lu",
    "chiyu": "Chi-Yu",
    "chi yu": "Chi-Yu",

    # --- PARADOX POKEMON (PAST) ---
    "greattusk": "Great Tusk", "screamtail": "Scream Tail",
    "brutebonnet": "Brute Bonnet", "fluttermane": "Flutter Mane",
    "slitherwing": "Slither Wing", "sandyshocks": "Sandy Shocks",
    "roaringmoon": "Roaring Moon", "walkingwake": "Walking Wake",
    "gougingfire": "Gouging Fire", "ragingbolt": "Raging Bolt",
    "koraidon": "Koraidon",

    # --- PARADOX POKEMON (FUTURE) ---
    "irontreads": "Iron Treads", "ironbundle": "Iron Bundle",
    "ironhands": "Iron Hands", "ironjugulis": "Iron Jugulis",
    "ironmoth": "Iron Moth", "ironthorns": "Iron Thorns",
    "ironvaliant": "Iron Valiant", "ironleaves": "Iron Leaves",
    "ironboulder": "Iron Boulder", "ironcrown": "Iron Crown",
    "miraidon": "Miraidon",

    # --- PREVIOUS FIXES ---
    "tapukoko": "Tapu Koko", "tapulele": "Tapu Lele", 
    "tapubulu": "Tapu Bulu", "tapufini": "Tapu Fini",
    "nidoranfe": "Nidoran-F", "nidoranma": "Nidoran-M",
    "nidoran f": "Nidoran-F", "nidoran m": "Nidoran-M",
    "typenull": "Type Null", "type null": "Type Null",
    "mime jr": "Mime Jr", "mr rime": "Mr. Rime",
    "ho-oh": "Ho-Oh", "porygonz": "Porygon-Z",
    "jangmo-o": "Jangmo-o", "hakamo-o": "Hakamo-o", "kommo-o": "Kommo-o"
}

def fix_filenames():
    if not os.path.exists(folder_path):
        print(f"Error: Could not find folder '{folder_path}'")
        return

    print(f"Scanning '{folder_path}'...")
    count = 0
    files = list(os.listdir(folder_path))
    
    for filename in files:
        name_part, ext_part = os.path.splitext(filename)
        lower_name = name_part.lower()

        # Check map first, otherwise capitalize
        if lower_name in rename_map:
            new_name = rename_map[lower_name] + ext_part.lower()
        else:
            new_name = name_part[0].upper() + name_part[1:] + ext_part.lower()

        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)

        if old_path != new_path:
            try:
                # If Windows thinks they are the same file (case-only change), rename to temp first
                if filename.lower() == new_name.lower():
                    temp_path = os.path.join(folder_path, "TEMP_" + filename)
                    os.rename(old_path, temp_path)
                    os.rename(temp_path, new_path)
                    print(f"Fixed Case: {filename} -> {new_name}")
                    count += 1
                
                # If they are different (e.g. wochien -> Wo-Chien)
                else:
                    if os.path.exists(new_path):
                        # If target exists, assume it's the correct one and delete the "bad" one
                        if lower_name in rename_map:
                            print(f"   -> Merging: Deleting {filename} (Target {new_name} exists)")
                            os.remove(old_path)
                            count += 1
                    else:
                        os.rename(old_path, new_path)
                        print(f"Fixed Name: {filename} -> {new_name}")
                        count += 1
            except Exception as e:
                print(f"⚠️ Error processing {filename}: {e}")

    print(f"Done! Fixed {count} images.")

if __name__ == "__main__":
    fix_filenames()