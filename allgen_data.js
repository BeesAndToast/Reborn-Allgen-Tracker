const allGenData = [
  {
    "name": "Sprigatito",
    "locations": [
      "Grand Hall (Event) [Starter]",
      "Spinel Town (Event) [Talking to Sprigatito for it to teleport away; \n1. Check near the train for it; 2. Check near the cave entrance\n3. Afterwards look around the mossy rock. You will need Medicine]"
    ],
    "order": 1
  },
  {
    "name": "Fuecoco",
    "locations": [
      "Grand Hall (Event) [Starter]",
      "Ametrine City (Event) [In the Pokemon Center, it wants Blue Moon Ice Cream]"
    ],
    "order": 1
  },
  {
    "name": "Quaxly",
    "locations": [
      "Grand Hall (Event) [Starter]",
      "Peridot Ward Renovated (Event) [Below the Blacksteam Factory in the water, \nRescue Quaxly from the Crab Gang; Rock Climb needed]"
    ],
    "order": 1
  },
  {
    "name": "Grookey",
    "locations": [
      "Grand Hall (Event) [Starter]",
      "Opal Ward (Event) [Gentleman on the couch in Grand Hall after beating Saphira]"
    ],
    "order": 1
  },
  {
    "name": "Scorbunny",
    "locations": [
      "Grand Hall (Event) [Starter]",
      "Not Catchable (Evolution) [Breed Cinderace or Raboot]"
    ],
    "order": 1
  },
  {
    "name": "Sobble",
    "locations": [
      "Grand Hall (Event) [Starter]",
      "Not Catchable (Evolution) [Breed Inteleon or Drizzile]"
    ],
    "order": 1
  },
  {
    "name": "Blipbug",
    "locations": [
      "Lower Peridot Ward (Grass)"
    ],
    "order": 15
  },
  {
    "name": "Clobbopus",
    "locations": [
      "Lower Peridot Alley (Cave)"
    ],
    "order": 15
  },
  {
    "name": "Cufant",
    "locations": [
      "Lower Peridot Ward (Event) [Shares a chance with Zigzagoon and Pachirisu, bully Event]",
      "North Aventurine Woods (Grass)"
    ],
    "order": 15
  },
  {
    "name": "Galarian Zigzagoon",
    "locations": [
      "Lower Peridot Ward (Event) [Gulpin Event, Mono Normal/Dark]",
      "Not Catchable (Evolution) [Breed Galarian Linoone or Obstagoon]",
      "Trash Event in Peridot Ward (Event)"
    ],
    "order": 15
  },
  {
    "name": "Gimmighoul",
    "locations": [
      "Lower Peridot Ward (Event) [Gulpin Event, Mono Ghost]",
      "Tourmaline Desert (Event) [Talk to the Hiker in Peridot Train Station after beating Adrienn: Follow his riddles to find Gimmighoul:\nTo the right of the Teknite Cave entrance; Near Corey's Pokeballs; Sugiline Cave, Garchomp Area, left side]",
      "Trash Event in Peridot Ward (Event)"
    ],
    "order": 15
  },
  {
    "name": "Impidimp",
    "locations": [
      "Lower Peridot Ward (Event) [Shares a chance with Whismur, Pok\u00e9snax]",
      "Iolia Cave (Sableye Cave) (Cave)",
      "Rented House in Peridot Ward (Event)"
    ],
    "order": 15
  },
  {
    "name": "Machop",
    "locations": [
      "Lower Peridot Ward (Event) [Shares a chance with Whismur, Pok\u00e9snax]",
      "Rented House in Peridot Ward (Event)"
    ],
    "order": 15
  },
  {
    "name": "Nickit",
    "locations": [
      "North Peridot Alley (Cave)"
    ],
    "order": 15
  },
  {
    "name": "Partner Eevee",
    "locations": [
      "Grand Hall (Password) [Check Partner Pikachu entry]"
    ],
    "order": 15
  },
  {
    "name": "Partner Pikachu",
    "locations": [
      "Grand Hall (Password) [Password: partner, partnerpoke. You can choose them as starters.]"
    ],
    "order": 15
  },
  {
    "name": "Roggenrola",
    "locations": [
      "Lower Peridot Ward (Event) [Shares a chance with Whismur, Pok\u00e9snax, Mono Rock]",
      "Rented House in Peridot Ward (Event)"
    ],
    "order": 15
  },
  {
    "name": "Shroodle",
    "locations": [
      "Underground Railnet (Cave)"
    ],
    "order": 15
  },
  {
    "name": "Skwovet",
    "locations": [
      "Opal Ward (Headbutt)"
    ],
    "order": 15
  },
  {
    "name": "Tarountula",
    "locations": [
      "Lower Peridot Ward (Headbutt)"
    ],
    "order": 15
  },
  {
    "name": "Toxel / Toxtricity",
    "locations": [
      "Lower Peridot Ward (Event) [Shares a chance with Minccino and Espurr, Pok\u00e9snax]",
      "Byxbysion Wasteland (Grass)"
    ],
    "order": 15
  },
  {
    "name": "Wiglett",
    "locations": [
      "Peridot Ward (Old Rod) [Water Pond inside the house]",
      "Apophyll Beach (Land)"
    ],
    "order": 15
  },
  {
    "name": "Bombirdier",
    "locations": [
      "Onyx Arcades (Event)",
      "Route 3 (Grass)"
    ],
    "order": 30
  },
  {
    "name": "Eevee",
    "locations": [
      "Lower Peridot Ward (Event) [After Julia, key lying next to Victoria, used to open abandoned house]"
    ],
    "order": 30
  },
  {
    "name": "Fidough",
    "locations": [
      "Onyx Arcades (Event)"
    ],
    "order": 30
  },
  {
    "name": "Gossifleur",
    "locations": [
      "Obsidia Ward (Grass)"
    ],
    "order": 30
  },
  {
    "name": "Lechonk",
    "locations": [
      "Obsidia Slums 1F (Cave)"
    ],
    "order": 30
  },
  {
    "name": "Maschiff",
    "locations": [
      "Obsidia Slums B1F (Cave)"
    ],
    "order": 30
  },
  {
    "name": "Milcery",
    "locations": [
      "Onyx Arcades (Event) [Evolve by using Hand Mixer on it]"
    ],
    "order": 30
  },
  {
    "name": "Pawmi",
    "locations": [
      "Onyx Ward Roof (Grass)"
    ],
    "order": 30
  },
  {
    "name": "Silicobra",
    "locations": [
      "Onyx Arcades (Event)"
    ],
    "order": 30
  },
  {
    "name": "Stonjourner",
    "locations": [
      "Onyx Arcades (Event)",
      "Sugiline Ruin (Cave)"
    ],
    "order": 30
  },
  {
    "name": "Yamper",
    "locations": [
      "Obsidia Ward / Playground (Grass)"
    ],
    "order": 30
  },
  {
    "name": "Applin",
    "locations": [
      "Beryl Ward/Cemetery (Headbutt)"
    ],
    "order": 45
  },
  {
    "name": "Bramblin",
    "locations": [
      "Opal Ward (Event) [Egg from the Gentleman on the couch in Grand Hall after beating Florinia\n\nWalk 1000 Steps with Bramblin in team and lvl up to evolve]"
    ],
    "order": 45
  },
  {
    "name": "Galarian Farfetch'd",
    "locations": [
      "Rhodochrine Jungle (Land) [Evolve after critical hitting 3 times during battle and lvl up]"
    ],
    "order": 45
  },
  {
    "name": "Ivysaur",
    "locations": [
      "Beryl Cave (Cave) [Corey Event:\n*Replaces Nidorina Event when AllGen / AnyGo switch is active\nYou can switch back to Vanilla if you want Nidorina]"
    ],
    "order": 45
  },
  {
    "name": "Rellor",
    "locations": [
      "Rhodochrine Jungle (Grass) [Walk 1000 Steps with Rellor in team and lvl up to evolve]"
    ],
    "order": 45
  },
  {
    "name": "Smoliv",
    "locations": [
      "Beryl Ward/Cemetery (Grass)"
    ],
    "order": 45
  },
  {
    "name": "Squawkabilly",
    "locations": [
      "Rhodochrine Jungle (Grass)"
    ],
    "order": 45
  },
  {
    "name": "Glimmet",
    "locations": [
      "The Underroot (Event) [Need Silver Ring, Near the water, replaces Skrelp (AllGen Switch ON)]"
    ],
    "order": 60
  },
  {
    "name": "Galarian Yamask",
    "locations": [
      "Yureyu Power Plant (Cave) [Evolve it leveling up to 34 during night]"
    ],
    "order": 75
  },
  {
    "name": "Hisuian Sneasel",
    "locations": [
      "Citrine Mountain (Event) [Corey Event:\n*Replaces Croagunk Event when AllGen / AnyGo switch is active\nYou can switch back to Vanilla if you want Croagunk]",
      "Route 3 (Grass) [Lvl up while holding Razor Claw at day]"
    ],
    "order": 75
  },
  {
    "name": "Hisuian Voltorb",
    "locations": [
      "Yureyu Power Plant (Cave) [Use Leaf Stone to evolve]"
    ],
    "order": 75
  },
  {
    "name": "Snom",
    "locations": [
      "Citrine Mountain (Cave) [Evolve during night with high happiness]"
    ],
    "order": 75
  },
  {
    "name": "Tadbulb",
    "locations": [
      "Yueryu Power Plant (Cave)"
    ],
    "order": 75
  },
  {
    "name": "Galarian Stunfisk",
    "locations": [
      "Apophyll Cave (Cave) [Same as Unovan Stunfisk]"
    ],
    "order": 90
  },
  {
    "name": "Klawf",
    "locations": [
      "Apophyll Cave (Event) [Deepest cave area, need Pokesnax]",
      "Sugiline Cave (Cave)"
    ],
    "order": 90
  },
  {
    "name": "Rolycoly",
    "locations": [
      "Pyrous Mountain (Cave)"
    ],
    "order": 90
  },
  {
    "name": "Sizzlipede",
    "locations": [
      "Apophyll Beach/Cave (Rock Smash)"
    ],
    "order": 90
  },
  {
    "name": "Flamigo",
    "locations": [
      "Azurine Island (Event) [Standing around Azurine Island]"
    ],
    "order": 105
  },
  {
    "name": "Lokix",
    "locations": [
      "Byxbysion Wasteland (Grass)"
    ],
    "order": 105
  },
  {
    "name": "Paldean Wooper",
    "locations": [
      "Azurine Island (Land) [Same as Johtonian Wooper]"
    ],
    "order": 105
  },
  {
    "name": "Toedscool",
    "locations": [
      "Azurine Island (Grass)",
      "Not Catchable (Evolution) [Breed Toedscruel]",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 105
  },
  {
    "name": "Capsakid",
    "locations": [
      "Tanzan Cove (Grass)"
    ],
    "order": 120
  },
  {
    "name": "Chewtle",
    "locations": [
      "Tanzan Cove Fishing (Old Rod)",
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 120
  },
  {
    "name": "Indeedee",
    "locations": [
      "Tanzan Cove (Grass)",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 120
  },
  {
    "name": "Orthworm",
    "locations": [
      "Tanzan Depths (Cave)",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 120
  },
  {
    "name": "Rookidee",
    "locations": [
      "Chrysolia Forest (Grass)"
    ],
    "order": 120
  },
  {
    "name": "Tinkatuff",
    "locations": [
      "Grand Stairway (Event) [After beating Aya, where the Karate man was in Grand Stairway; \nDestroy all rocks with Rock Smash near Tinkatuff]"
    ],
    "order": 120
  },
  {
    "name": "Wattrel",
    "locations": [
      "Opal Ward (Event) [Gentleman on the couch in Grand Hall after beating Aya]"
    ],
    "order": 120
  },
  {
    "name": "Cetitan",
    "locations": [
      "Celestinine Mountain (Cave)"
    ],
    "order": 150
  },
  {
    "name": "Dubwool",
    "locations": [
      "Route 1 (Grass)"
    ],
    "order": 150
  },
  {
    "name": "Flittle",
    "locations": [
      "South Aventurine Woods (Grass)",
      "Not Catchable (Evolution) [Breed Espathra]"
    ],
    "order": 150
  },
  {
    "name": "Galarian Ponyta",
    "locations": [
      "Route 1 (Land) [Same as Kantonian Ponyta]"
    ],
    "order": 150
  },
  {
    "name": "Hattrem",
    "locations": [
      "Vanhanen Labyrinth (Grass)"
    ],
    "order": 150
  },
  {
    "name": "Oinkologne",
    "locations": [
      "Route 1 (Grass)"
    ],
    "order": 150
  },
  {
    "name": "Paldean Tauros",
    "locations": [
      "Route 1 Nature Center (Event) [Trade a regular Tauros for a Paldean Tauros Egg of your choice, repeatable]"
    ],
    "order": 150
  },
  {
    "name": "Galarian Linoone",
    "locations": [
      "Iolia Vally (Land)"
    ],
    "order": 165
  },
  {
    "name": "Glimmora",
    "locations": [
      "Iolia Cave Areas (Cave)"
    ],
    "order": 165
  },
  {
    "name": "Morpeko",
    "locations": [
      "Iolia Valley (Grass)",
      "Obsidia Slums Lost Egg (Event)"
    ],
    "order": 165
  },
  {
    "name": "Cyclizar",
    "locations": [
      "Route 2 (Grass)",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 180
  },
  {
    "name": "Eiscue",
    "locations": [
      "Citrine Mountain 1F, 3F (Cave)"
    ],
    "order": 180
  },
  {
    "name": "Falinks",
    "locations": [
      "Route 2 (Grass)",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 180
  },
  {
    "name": "Duraludon",
    "locations": [
      "Route 3 (LCCC Cave) (Cave)"
    ],
    "order": 195
  },
  {
    "name": "Galarian Darmanitan",
    "locations": [
      "Route 4 (Grass)",
      "Not Catchable (Evolution) [Evolve Snom]"
    ],
    "order": 195
  },
  {
    "name": "Galarian Meowth",
    "locations": [
      "Ametrine City (Grass)",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 195
  },
  {
    "name": "Hisuian Zorua",
    "locations": [
      "Calcenon City (Event) [Gentleman in the lower right corner in Calcenon City, trade for any Pokemon]"
    ],
    "order": 195
  },
  {
    "name": "Clodsire",
    "locations": [
      "Citrine Mountain (Event) [Corey Event:\n*Replaces Mareanie Event when AllGen / AnyGo switch is active\nYou can switch back to Vanilla if you want Mareanie]",
      "Not Catchable (Evolution) [Evolve Paldean Wooper]"
    ],
    "order": 225
  },
  {
    "name": "Overqwil",
    "locations": [
      "Citrine Mountain (Event) [Corey Event:\n*Replaces Skuntank Event when AllGen / AnyGo switch is active\nYou can switch back to Vanilla if you want Skuntank]"
    ],
    "order": 225
  },
  {
    "name": "Arctovish",
    "locations": [
      "Spinel Museum Shop (Event)"
    ],
    "order": 240
  },
  {
    "name": "Arctozolt",
    "locations": [
      "Spinel Museum Shop (Event)"
    ],
    "order": 240
  },
  {
    "name": "Barraskewda",
    "locations": [
      "Azurine Lake (Dive)"
    ],
    "order": 240
  },
  {
    "name": "Cramorant",
    "locations": [
      "Apophyll Beach (Cave)",
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 240
  },
  {
    "name": "Croagunk",
    "locations": [
      "Azurine Island (Land)"
    ],
    "order": 240
  },
  {
    "name": "Dracovish",
    "locations": [
      "Spinel Museum Shop (Event)"
    ],
    "order": 240
  },
  {
    "name": "Dracozolt",
    "locations": [
      "Spinel Museum Shop (Event)"
    ],
    "order": 240
  },
  {
    "name": "Drizzile",
    "locations": [
      "Tanzan Cove (Dive)"
    ],
    "order": 240
  },
  {
    "name": "Galarian Corsola",
    "locations": [
      "Coral Lighthouse Renovated (Cave)",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 240
  },
  {
    "name": "Galarian Slowpoke",
    "locations": [
      "Chrysolia Spring (Super Rod) [1F, B1F]"
    ],
    "order": 240
  },
  {
    "name": "Grapploct",
    "locations": [
      "South Peridot Alley (Land)",
      "Not Catchable (Evolution) [Evolve Clobbopus]"
    ],
    "order": 240
  },
  {
    "name": "Hisuian Growlithe",
    "locations": [
      "Jasper Ward Renovated (Land)"
    ],
    "order": 240
  },
  {
    "name": "Hisuian Qwilfish",
    "locations": [
      "Celestinine Mountain (Super Rod) [1F, 2F, 3F, B1F, B2F\n\nEvolve by lvling up knowing Barb Barrage]",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 240
  },
  {
    "name": "Houndstone",
    "locations": [
      "Neo Beryl Cemetery (Grass)"
    ],
    "order": 240
  },
  {
    "name": "Kilowattrel",
    "locations": [
      "Azurine Lake (Surf)"
    ],
    "order": 240
  },
  {
    "name": "Mabosstiff",
    "locations": [
      "North Peridot Alley (Land)",
      "Not Catchable (Evolution) [Evolve Maschiff]"
    ],
    "order": 240
  },
  {
    "name": "Pawmo",
    "locations": [
      "Onyx Ward Roof (Grass) [Evolves to Pawmot by Thunder Stone]"
    ],
    "order": 240
  },
  {
    "name": "Pincurchin",
    "locations": [
      "Apophyll Beach (Event)",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 240
  },
  {
    "name": "Poltchageist",
    "locations": [
      "Obsidia Medicine Market (Event) [Talk to the girl in Meganium's Market; Retrieve Matcha Powder from 7th Street, you have to battle Madame Meganium\n\nEvolve by using a Tea Cup - sold in Obsidia Barber Shop]",
      "Once upon a Waste of Time (Grass)"
    ],
    "order": 240
  },
  {
    "name": "Revavroom",
    "locations": [
      "Obsida/Lapis Renovated (Event) [Repeatable Event, vrooms the area / Lapis Ward]"
    ],
    "order": 240
  },
  {
    "name": "Thievul",
    "locations": [
      "South Peridot Alley (Land)"
    ],
    "order": 240
  },
  {
    "name": "Veluza",
    "locations": [
      "Azurine Lake (Super Rod)",
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 240
  },
  {
    "name": "Brambleghast",
    "locations": [
      "Tourmaline Desert (Land)"
    ],
    "order": 255
  },
  {
    "name": "Dreepy",
    "locations": [
      "Mirage Tower Basement (Event) [Spooking around in the basement]"
    ],
    "order": 255
  },
  {
    "name": "Garganacl",
    "locations": [
      "Sugiline Cave B1F (Cave)"
    ],
    "order": 255
  },
  {
    "name": "Raboot",
    "locations": [
      "1R253 Scrapyard (Cave)"
    ],
    "order": 255
  },
  {
    "name": "Runerigus",
    "locations": [
      "Sugiline Ruin (Cave)",
      "Not Catchable (Evolution) [Evolve Galarian Yamask at Night (lvl 38)]"
    ],
    "order": 255
  },
  {
    "name": "Sandaconda",
    "locations": [
      "Tourmaline Desert (Cave)"
    ],
    "order": 255
  },
  {
    "name": "Sinistea",
    "locations": [
      "Once upon a Somewhere (Grass) [Use a pot to evolve - sold in Obsidia Barber Shop]"
    ],
    "order": 255
  },
  {
    "name": "Tinkaton",
    "locations": [
      "Teknite Cave (Cave)"
    ],
    "order": 255
  },
  {
    "name": "Charcadet",
    "locations": [
      "Titania's Castle (Event) [Follow it around the Castle, starting in the first entrance Hall]",
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Dondozo",
    "locations": [
      "Agate City (Cave) [Underwater (Dive)]"
    ],
    "order": 99999
  },
  {
    "name": "Finizen",
    "locations": [
      "Agate City (Surf) [Evolves at lvl 80]",
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Frigibax",
    "locations": [
      "Ametrine Mountain B4F (Cave)",
      "Not Catchable (Evolution) [Breed Arctibax or Baxcalibur]"
    ],
    "order": 99999
  },
  {
    "name": "Kubfu",
    "locations": [
      "Agate City (Event) [Dex Completion (Bee's Quest) - 600 entries]",
      "Apophyll Island (Event) [Apophyll Academy (left outside) - need Urshifu in 1st Party Slot]",
      "Idyll of Pestilence (Land) [Normal encounter]"
    ],
    "order": 99999
  },
  {
    "name": "Maushold",
    "locations": [
      "Agate City (Event)",
      "Not Catchable (Evolution) [Evolve Tandemaus]"
    ],
    "order": 99999
  },
  {
    "name": "Meltan",
    "locations": [
      "Obsidia Ward Renovated (Event) [1. Find the Silphcase in the Magic Square Puzzle room (in a box near the entrance)\n2. Visit Silph Co. in Obsidia Ward and initiate his Quest to beat Melmetal]"
    ],
    "order": 99999
  },
  {
    "name": "Poipole",
    "locations": [
      "Agate City (Event) [Dex Completion (Bee's Quest) - 892 entries (new)]"
    ],
    "order": 99999
  },
  {
    "name": "Tatsugiri",
    "locations": [
      "Agate City (Super Rod)",
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "White-Striped Basculin",
    "locations": [
      "Upper Route 4, Agate City (Fishing) [Shares a chance with Red-Striped and Blue-Striped Basculin only on Route 4]"
    ],
    "order": 99999
  },
  {
    "name": "Sneasler",
    "locations": [
      "Victory Road (Cave)",
      "Not Catchable (Evolution) [Evolve Hisuian Sneasel during daytime while holding Razor Claw]"
    ],
    "order": 99999
  },
  {
    "name": "Brute Bonnet",
    "locations": [
      "Paradox Jungle (Cave) [Repeatable event]"
    ],
    "order": 99999
  },
  {
    "name": "Gouging Fire",
    "locations": [
      "New World (Land) [Same area as the respective present Pok\u00e9mon]"
    ],
    "order": 99999
  },
  {
    "name": "Iron Hands",
    "locations": [
      "Paradox Meteor Base (Cave) [Repeatable event]"
    ],
    "order": 99999
  },
  {
    "name": "Iron Jugulis",
    "locations": [
      "Paradox Meteor Base (Cave) [Repeatable event]"
    ],
    "order": 99999
  },
  {
    "name": "Iron Thorns",
    "locations": [
      "Paradox Meteor Base (Cave) [Repeatable event]"
    ],
    "order": 99999
  },
  {
    "name": "Iron Valiant",
    "locations": [
      "Paradox Boss Room (Cave) [can be caught early when initiating the Paradox battle via Miraidon]",
      "Paradox Boss Room (Cave) [Repeatable event, appears after finishing Mew quest]"
    ],
    "order": 99999
  },
  {
    "name": "Koraidon",
    "locations": [
      "Victory Road (Event) [After catching all Spirits in VR and beating Elite 4, talk to the Hiker again; \nTwo portals will be opened on both sides after you enter the Victory Road; \nBattle all Paradox Pokemon and their leaders]"
    ],
    "order": 99999
  },
  {
    "name": "Miraidon",
    "locations": [
      "Victory Road (Event) [See Koraidon Entry]"
    ],
    "order": 99999
  },
  {
    "name": "Raging Bolt",
    "locations": [
      "New World (Land) [Same area as the respective present Pok\u00e9mon]"
    ],
    "order": 99999
  },
  {
    "name": "Regidrago",
    "locations": [
      "New World - Route 2 (Event) [Z - Regigigas Questline]"
    ],
    "order": 99999
  },
  {
    "name": "Regieleki",
    "locations": [
      "New World - Route 2 (Event) [Z - Regigigas Questline]"
    ],
    "order": 99999
  },
  {
    "name": "Roaring Moon",
    "locations": [
      "Paradox Boss Room (Cave) [can be caught early when initiating the Paradox battle via Koraidon]",
      "Paradox Boss Room (Cave) [Repeatable event, appears after finishing Mew quest]"
    ],
    "order": 99999
  },
  {
    "name": "Sandy Shocks",
    "locations": [
      "Paradox Jungle (Cave) [Repeatable event]"
    ],
    "order": 99999
  },
  {
    "name": "Slither Wing",
    "locations": [
      "Paradox Jungle (Cave) [Repeatable event]"
    ],
    "order": 99999
  },
  {
    "name": "Walking Wake",
    "locations": [
      "New World (Water) [Same area as the respective present Pok\u00e9mon]"
    ],
    "order": 99999
  },
  {
    "name": "Enamorus",
    "locations": [
      "Manyworld Forest (Event) [Added to Genie quest]"
    ],
    "order": 99999
  },
  {
    "name": "Fezandipiti",
    "locations": [
      "Byxbysion Wasteland (Event) [Check Ogerpon entry]"
    ],
    "order": 99999
  },
  {
    "name": "Great Tusk",
    "locations": [
      "Paradox Jungle (Cave) [Repeatable event, appears after finishing \"Swords of Justice\" legendary quest]"
    ],
    "order": 99999
  },
  {
    "name": "Iron Boulder",
    "locations": [
      "New World (Land) [Same area as the respective present Pok\u00e9mon]"
    ],
    "order": 99999
  },
  {
    "name": "Iron Crown",
    "locations": [
      "New World (Land) [Same area as the respective present Pok\u00e9mon]"
    ],
    "order": 99999
  },
  {
    "name": "Iron Leaves",
    "locations": [
      "New World (Land) [Same area as the respective present Pok\u00e9mon]"
    ],
    "order": 99999
  },
  {
    "name": "Iron Treads",
    "locations": [
      "Paradox Meteor Base (Cave) [Repeatable event, appears after finishing \"Swords of Justice\" legendary quest]"
    ],
    "order": 99999
  },
  {
    "name": "Munkidori",
    "locations": [
      "Byxbysion Wasteland (Event) [Check Ogerpon entry]"
    ],
    "order": 99999
  },
  {
    "name": "Ogerpon",
    "locations": [
      "Ametrine City (Event) [After Radomus' rescue, talk to Fred (blonde glasses) in Nightclub\nGo to Ametrine City and find Ogerpon, follow it to the mountain\nGo to Byxbysion in the center area above the dirty pool, talk to Ogerpon\nAfter finishing Byxbysion, go back to Goro in Ametrine Mountain]"
    ],
    "order": 99999
  },
  {
    "name": "Okidogi",
    "locations": [
      "Byxbysion Wasteland (Event) [Check Ogerpon entry]"
    ],
    "order": 99999
  },
  {
    "name": "Pecharunt",
    "locations": [
      "Byxbysion Wasteland (Event) [Check Ogerpon entry]"
    ],
    "order": 99999
  },
  {
    "name": "Chien-Pao",
    "locations": [
      "Citae Astrae (Event) [See Wo-Chien entry]"
    ],
    "order": 99999
  },
  {
    "name": "Chi-Yu",
    "locations": [
      "Citae Astrae (Event) [See Wo-Chien entry]"
    ],
    "order": 99999
  },
  {
    "name": "Iron Bundle",
    "locations": [
      "Paradox Meteor Base (Cave) [Repeatable event, appears after finishing Hoopa quest]"
    ],
    "order": 99999
  },
  {
    "name": "Quaquaval",
    "locations": [
      "Aegir Cave (Surf)"
    ],
    "order": 99999
  },
  {
    "name": "Scream Tail",
    "locations": [
      "Paradox Jungle (Cave) [Repeatable event, appears after finishing Hoopa quest]"
    ],
    "order": 99999
  },
  {
    "name": "Ting-Lu",
    "locations": [
      "Citae Astrae (Event) [See Wo-Chien entry]"
    ],
    "order": 99999
  },
  {
    "name": "Wo-Chien",
    "locations": [
      "Citae Astrae (Event) [Initiate the Quest by talking to Elias in the Nightclub after Victini Quest;\nGo to Citae Astrae and enter the new gates]"
    ],
    "order": 99999
  },
  {
    "name": "Flutter Mane",
    "locations": [
      "Paradox Jungle (Cave) [Repeatable event, appears after finishing Diancie quest]"
    ],
    "order": 99999
  },
  {
    "name": "Inteleon",
    "locations": [
      "Unexplored Territory (Super Rod)"
    ],
    "order": 99999
  },
  {
    "name": "Iron Moth",
    "locations": [
      "Paradox Meteor Base (Cave) [Repeatable event, appears after finishing Diancie quest]"
    ],
    "order": 99999
  },
  {
    "name": "Calyrex",
    "locations": [
      "Idyll of Panaceance (Land) [Normal encounter]"
    ],
    "order": 99999
  },
  {
    "name": "Glastrier",
    "locations": [
      "Idyll of Panaceance (Land) [Normal encounter]"
    ],
    "order": 99999
  },
  {
    "name": "Meowscarada",
    "locations": [
      "Chrysolia Deepwoods (Cave)"
    ],
    "order": 99999
  },
  {
    "name": "Spectrier",
    "locations": [
      "Idyll of Pestilence (Land) [Normal encounter]"
    ],
    "order": 99999
  },
  {
    "name": "Zacian",
    "locations": [
      "Rhodochrine Jungle (Event) [After Deoxys quest, talk to Fred in the Nightclub\nFind the dogs in Rhodochrine Jungle - \nZamazenta: near the big tree (walk behind the small tree to trigger)\nZacian: near the campfire south (where the meteors camped early-game)\nBattle against them: Area with Stantler Event]"
    ],
    "order": 99999
  },
  {
    "name": "Zamazenta",
    "locations": [
      "Rhodochrine Jungle (Event) [See Zacian entry]"
    ],
    "order": 99999
  },
  {
    "name": "Zarude",
    "locations": [
      "Rhodochrine Jungle (Event) [See Zacian entry]"
    ],
    "order": 99999
  },
  {
    "name": "Eternatus",
    "locations": [
      "New World Helix (Land) [Normal encounter]"
    ],
    "order": 99999
  },
  {
    "name": "Rillaboom",
    "locations": [
      "Rhodochrine Tree (Cave)"
    ],
    "order": 99999
  },
  {
    "name": "Skeledirge",
    "locations": [
      "Mirage Tower? (Cave)"
    ],
    "order": 99999
  },
  {
    "name": "Terapagos",
    "locations": [
      "Iolia Valley (Event) [After Xerneas/Yveltal quest, talk to Luna to initiate the quest. \nUpon leaving the Nightclub, a meteor should crash into Iolia Valley. \nFollow Lunas instructions there. Afterwards meet Goro in Nightclub and follow him to his Cave on Ametrine Mountain.]"
    ],
    "order": 99999
  },
  {
    "name": "Alcremie",
    "locations": [
      "Not Catchable (Evolution) [Evolve Milcery using a Handmixer]"
    ],
    "order": 99999
  },
  {
    "name": "Annihilape",
    "locations": [
      "Not Catchable (Evolution) [Evolve Primeape by knowing Rage Fist (lvl 57)]"
    ],
    "order": 99999
  },
  {
    "name": "Appletun",
    "locations": [
      "Not Catchable (Evolution) [Evolve Applin with a Sweet Apple]"
    ],
    "order": 99999
  },
  {
    "name": "Archaludon",
    "locations": [
      "Not Catchable (Evolution) [Evolve Duraludon using Metal Alloy]"
    ],
    "order": 99999
  },
  {
    "name": "Armarouge",
    "locations": [
      "Not Catchable (Evolution) [Evolve Charcadet by using  Auspicious Armor on it]"
    ],
    "order": 99999
  },
  {
    "name": "Arrokuda",
    "locations": [
      "Not Catchable (Evolution) [Breed Barraskewda]"
    ],
    "order": 99999
  },
  {
    "name": "Basculegion",
    "locations": [
      "Not Catchable (Evolution) [Evolve H-Basculin by knowing Wave Crash (lvl 44)]"
    ],
    "order": 99999
  },
  {
    "name": "Baxcalibur",
    "locations": [
      "Not Catchable (Evolution) [Evolve Arctibax]"
    ],
    "order": 99999
  },
  {
    "name": "Carkol",
    "locations": [
      "Not Catchable (Evolution) [Evolve Rolycoly]"
    ],
    "order": 99999
  },
  {
    "name": "Centiskorch",
    "locations": [
      "Not Catchable (Evolution) [Evolve Sizzlipede]"
    ],
    "order": 99999
  },
  {
    "name": "Ceruledge",
    "locations": [
      "Not Catchable (Evolution) [Evolve Charcadet by using Malicous Armor on it]"
    ],
    "order": 99999
  },
  {
    "name": "Coalossal",
    "locations": [
      "Not Catchable (Evolution) [Evolve Carkol]"
    ],
    "order": 99999
  },
  {
    "name": "Copperajah",
    "locations": [
      "Not Catchable (Evolution) [Evolve Cufant]"
    ],
    "order": 99999
  },
  {
    "name": "Crocalor",
    "locations": [
      "Not Catchable (Evolution) [Evolve Fuecoco]"
    ],
    "order": 99999
  },
  {
    "name": "Cursola",
    "locations": [
      "Not Catchable (Evolution) [Evolve Galarian Corsola]"
    ],
    "order": 99999
  },
  {
    "name": "Dipplin",
    "locations": [
      "Not Catchable (Evolution) [Evolve Applin with a Syrupy Apple]"
    ],
    "order": 99999
  },
  {
    "name": "Dolliv",
    "locations": [
      "Not Catchable (Evolution) [Evolve Smoliv]"
    ],
    "order": 99999
  },
  {
    "name": "Dragapult",
    "locations": [
      "Not Catchable (Evolution) [Evolve Drakloak]"
    ],
    "order": 99999
  },
  {
    "name": "Drakloak",
    "locations": [
      "Not Catchable (Evolution) [Evolve Dreepy]"
    ],
    "order": 99999
  },
  {
    "name": "Dudunsparce",
    "locations": [
      "Not Catchable (Evolution) [Evolve Dunsparce by knowing Hyper Drill (lvl 32)]"
    ],
    "order": 99999
  },
  {
    "name": "Farigiraf",
    "locations": [
      "Not Catchable (Evolution) [Evolve Girafarig by knowing Twin Beam (lvl 32)]"
    ],
    "order": 99999
  },
  {
    "name": "Flapple",
    "locations": [
      "Not Catchable (Evolution) [Evolve Applin with a Tart Apple]"
    ],
    "order": 99999
  },
  {
    "name": "Floragato",
    "locations": [
      "Not Catchable (Evolution) [Evolve Sprigatito]"
    ],
    "order": 99999
  },
  {
    "name": "Frosmoth",
    "locations": [
      "Not Catchable (Evolution) [Evolve Snom]"
    ],
    "order": 99999
  },
  {
    "name": "Galarian Mr.Mime",
    "locations": [
      "Not Catchable (Evolution) [Evolve Mime Jr. in Ametrine or Celestinine Mountain]"
    ],
    "order": 99999
  },
  {
    "name": "Galarian Rapidash",
    "locations": [
      "Not Catchable (Evolution) [Evolve Galarian Ponyta]"
    ],
    "order": 99999
  },
  {
    "name": "Galarian Slowbro",
    "locations": [
      "Not Catchable (Evolution) [Evolve Galarian Slowpoke using Galarian Cuff]"
    ],
    "order": 99999
  },
  {
    "name": "Galarian Slowking",
    "locations": [
      "Not Catchable (Evolution) [Evolve Galarian Slowpoke using Galarian Wreath]"
    ],
    "order": 99999
  },
  {
    "name": "Galarian Weezing",
    "locations": [
      "Not Catchable (Evolution) [Evolve Koffing in certain areas:\nTitania's Castle, Citae Astrae, Coral Ward (Post-Resto)]"
    ],
    "order": 99999
  },
  {
    "name": "Gholdengo",
    "locations": [
      "Not Catchable (Evolution) [Evolve Gimmighoul by having 999 Gimmighoul Coins in your bag]"
    ],
    "order": 99999
  },
  {
    "name": "Grimmsnarl",
    "locations": [
      "Not Catchable (Evolution) [Evolve Morgrem]"
    ],
    "order": 99999
  },
  {
    "name": "Hattena",
    "locations": [
      "Not Catchable (Evolution) [Breed Hatterene]"
    ],
    "order": 99999
  },
  {
    "name": "Hatterene",
    "locations": [
      "Not Catchable (Evolution) [Evolve Hattrem]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Arcanine",
    "locations": [
      "Not Catchable (Evolution) [Evolve Hisuian Growlithe using a Fire Stone]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Avalugg",
    "locations": [
      "Not Catchable (Evolution) [Evolve Bergmite at Pyrous Mountain]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Braviary",
    "locations": [
      "Not Catchable (Evolution) [Evolve Rufflet in Iolia Valley]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Decidueye",
    "locations": [
      "Not Catchable (Evolution) [Evolve Dartrix during daytime]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Electrode",
    "locations": [
      "Not Catchable (Evolution) [Evolve Hisuian Voltorb using a Leaf Stone]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Goodra",
    "locations": [
      "Not Catchable (Evolution) [Evolve Hisuian Sliggo]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Lilligant",
    "locations": [
      "Not Catchable (Evolution) [Evolve Petilil on Apophyll Island]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Samurott",
    "locations": [
      "Not Catchable (Evolution) [Evolve Dewott at night]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Sliggoo",
    "locations": [
      "Not Catchable (Evolution) [Evolve Goomy in the Water Treatment Center]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Typhlosion",
    "locations": [
      "Not Catchable (Evolution) [Evolve Quilava at night]"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Zoroark",
    "locations": [
      "Not Catchable (Evolution) [Evolve Hisuian Zorua]"
    ],
    "order": 99999
  },
  {
    "name": "Hydrapple",
    "locations": [
      "Not Catchable (Evolution) [Evolve Dipplin by knowing Dragon Cheer]"
    ],
    "order": 99999
  },
  {
    "name": "Kingambit",
    "locations": [
      "Not Catchable (Evolution) [Evolve Bisharp by using Leader's Crest]"
    ],
    "order": 99999
  },
  {
    "name": "Melmetal",
    "locations": [
      "Not Catchable (Evolution) [Evolve Meltan by using Alloy Candy, follow the Quest of the Assistant in the backroom where you got rewarded with Meltan, you will need: Zinc/Calcium/Iron x5, Iron Ball x1, Steel Gem x1, Metal Coat x1]"
    ],
    "order": 99999
  },
  {
    "name": "Morgrem",
    "locations": [
      "Not Catchable (Evolution) [Evolve Impidimp]"
    ],
    "order": 99999
  },
  {
    "name": "Mr. Rime",
    "locations": [
      "Not Catchable (Evolution) [Evolve Galarian Mr.Mime]"
    ],
    "order": 99999
  },
  {
    "name": "Naclstack",
    "locations": [
      "Not Catchable (Evolution) [Evolve Nacli]"
    ],
    "order": 99999
  },
  {
    "name": "Obstagoon",
    "locations": [
      "Not Catchable (Evolution) [Evolve Galarian Linoone at night]"
    ],
    "order": 99999
  },
  {
    "name": "Orbeetle",
    "locations": [
      "Not Catchable (Evolution) [Evolve Dottler]"
    ],
    "order": 99999
  },
  {
    "name": "Palafin",
    "locations": [
      "Not Catchable (Evolution) [Evolve Finizen at lvl 80]"
    ],
    "order": 99999
  },
  {
    "name": "Pawmot",
    "locations": [
      "Not Catchable (Evolution) [Evolve Pawmo using a Thunder Stone]"
    ],
    "order": 99999
  },
  {
    "name": "Perrserker",
    "locations": [
      "Not Catchable (Evolution) [Evolve Galarian Meowth]"
    ],
    "order": 99999
  },
  {
    "name": "Polteageist",
    "locations": [
      "Not Catchable (Evolution) [Evolve Sinistea with a Cracked or Chipped Pot]"
    ],
    "order": 99999
  },
  {
    "name": "Quaxwell",
    "locations": [
      "Not Catchable (Evolution) [Evolve Quaxly]"
    ],
    "order": 99999
  },
  {
    "name": "Rabsca",
    "locations": [
      "Not Catchable (Evolution) [Walk 1000 Steps with Rellor / Happiness]"
    ],
    "order": 99999
  },
  {
    "name": "Sirfetch'd",
    "locations": [
      "Not Catchable (Evolution) [Evolve Galarian Farfetch'd after striking three criticals in one battle]"
    ],
    "order": 99999
  },
  {
    "name": "Spidops",
    "locations": [
      "Not Catchable (Evolution) [Evolve Tarountula]"
    ],
    "order": 99999
  },
  {
    "name": "Thwackey",
    "locations": [
      "Not Catchable (Evolution) [Evolve Grookey or breed Rillaboom]"
    ],
    "order": 99999
  },
  {
    "name": "Tinkatink",
    "locations": [
      "Not Catchable (Evolution) [Breed Tinkatuff or Tinkaton]"
    ],
    "order": 99999
  },
  {
    "name": "Ursaluna",
    "locations": [
      "Not Catchable (Evolution) [Evolve Ursaring by using Peat Block at night]"
    ],
    "order": 99999
  },
  {
    "name": "Blood-Ursaluna",
    "locations": [
      "Not Catchable (Evolution) [Evolve Ursaring with Peat Block at night on Teknite Ridge (Male only)]"
    ],
    "order": 99999
  },
  {
    "name": "Urshifu",
    "locations": [
      "Not Catchable (Evolution) [Evolve Kubfu with Scrolls: You can get 2 scrolls:\n1st: Post-Renovation inside the Azurine Cave, bring Kubfu 1st party slot to the trainee inside the cave\n2nd: Post-Renovation, in Apophyll Academy sits a Kubfu, if you show it your Urshifu it joins your team and holds the scroll you didn't choose first]"
    ],
    "order": 99999
  },
  {
    "name": "Varoom",
    "locations": [
      "Not Catchable (Evolution) [Breed Revavroom]"
    ],
    "order": 99999
  },
  {
    "name": "Wyrdeer",
    "locations": [
      "Not Catchable (Evolution) [Evolve Stantler by knowing Psyshield  Bash (lvl 37)]"
    ],
    "order": 99999
  },
  {
    "name": "Frillish",
    "locations": [
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Seel",
    "locations": [
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Whismur",
    "locations": [
      "Rented House in Peridot Ward (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Clamperl",
    "locations": [
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Clauncher",
    "locations": [
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Espurr",
    "locations": [
      "Victim Pok\u00e9mon in Peridot Ward (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Cinccino",
    "locations": [
      "Victim Pok\u00e9mon in Peridot Ward (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Swinup",
    "locations": [
      "Victim Pok\u00e9mon in Peridot Ward (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Aron",
    "locations": [
      "Victim Pok\u00e9mon in Peridot Ward (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Toxel",
    "locations": [
      "Victim Pok\u00e9mon in Peridot Ward (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Spheal",
    "locations": [
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Gulpin",
    "locations": [
      "Trash Event in Peridot Ward (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Ducklett",
    "locations": [
      "Obsidia Slums Lost Egg (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Drowzee",
    "locations": [
      "Obsidia Slums Lost Egg (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Bronzor",
    "locations": [
      "Obsidia Slums Lost Egg (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Cacnea",
    "locations": [
      "Obsidia Slums Lost Egg (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Nincada",
    "locations": [
      "Malchous Forest Lost Egg (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Deerling",
    "locations": [
      "Malchous Forest Lost Egg (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Skiddo",
    "locations": [
      "Malchous Forest Lost Egg (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Girafarig",
    "locations": [
      "Malchous Forest Lost Egg (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Hatenna",
    "locations": [
      "Malchous Forest Lost Egg (Event)"
    ],
    "order": 99999
  },
  {
    "name": "Hisuian Basculin",
    "locations": [
      "Onyx Ward Rescue Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Azurill",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Pawniard",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Mareanie",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Litwick",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Staryu",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Trapinch",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Togepi",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Cottonee",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Sneasel",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Vulpix",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Shroomish",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Elekid",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Gastly",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Starly",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Axew",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Rockruff",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Alolan Vulpix",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Larvesta",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Nacli",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Galarian Darumaka",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  },
  {
    "name": "Nymble",
    "locations": [
      "Jasper Police Officer Egg (Egg)"
    ],
    "order": 99999
  }
];