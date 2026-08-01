# Contained — v5.1 (2026-07-24 23:45)

### Author: benbenlaw

NeoForge Version: 21.1.243

### Changes
- Updated to NeoForge 21.1.243
- Updated all Mods to the latest versions
- Added Leafy String to the quests
- Added Leather to the quests
- Updated the Fluid Generator quest description
- Now Light Gray Asteroid, Organic Powder and Clay work inside the Compacting Drawers
- Quests are now FLEXIBLE not LINEAR, basically quest will complete even if you haven't unlocked them
- Fixed Eroding Water and Purifying Water recipes
- Removed not needed Strainer recipes
- Added recipe for Brown Mushroom, Red Mushroom, Crimson Fungus, Warped Fungus and Sweet Berries using Mystical Agriculture Essences
- Added few mods pipes to the Cable Facades config to allow them to be covered with facades
- Added Leaves to the Cloche
- Added Infusion Altarnator to the quests
- Changed Ender Chest/Tank/Pouch/Battery recipes now they use Blazegold Blocks instead of Ender Pearls
- Changed the default Ender Storage Personal Item to Ferricore Ingot instead of Diamond
- Routers RF upgrade 1 now transfers 256 RF/t and RF upgrade 2 now transfers 1024 RF/t
- Now if you use the Blaze Key on the Room Blocks you have 50% chance of getting the craftable Room Blocks and you have 100% of getting Almost Unbreakable Glass when you use it on an Unbreakable Glass
- Mysterious Blocks when picked up with a hammer drop in world instead of going straight to the inventory
- Fixed time to daytime so now solar panels always work
- Beds no longer work since it's always daytime now so be careful because now they just explode when you try to sleep in them
- Disabled Day Night Cycle, Weather Cycle, Trader Spawning, Patrol Spawning and Insomnia game rules
- Added a resource pack to hide the Sun and Moon and configured the ComplementaryReimagined + EuphoriaPatches shader to look a bit better
- Removed the Structure Compass mod
- Organic powder and Organic powder block now compost at 100% chance
- Added Growth Accelerator Tiers for better Growth Accelerators if someone doesn't want to use the Enderic Lasers
- Added Chilled Water, Iced Water and Super Coolant to works as coolant for the Powah
- Added Iron Chests and Functional Storage to the Smart Crafting Tables whitelist
- Removed unused GeOres

### Mod Changes
### 🔄 Updated (10)
- Apothic Attributes - ApothicAttributes-1.21.1-2.10.0.jar → ApothicAttributes-1.21.1-2.10.1.jar
- Architectury API - architectury-13.0.8-neoforge.jar → architectury-13.0.11-neoforge.jar
- CodeChicken Lib 1.8.+ - CodeChickenLib-1.21.1-4.6.1.526.jar → CodeChickenLib-1.21.1-4.6.1.529.jar
- Cupboard - cupboard-1.21.1-3.8.jar → cupboard-1.21.1-3.9.jar
- ExtendedAE - ExtendedAE-1.21-2.2.33-neoforge.jar → ExtendedAE-1.21-2.2.34-neoforge.jar
- Fusion (Connected Textures) - fusion-1.3.8-neoforge-mc1.21.1.jar → fusion-1.3.9-neoforge-mc1.21.1.jar
- Just Enough Items (JEI) - jei-1.21.1-neoforge-19.39.0.369.jar → jei-1.21.1-neoforge-19.39.0.371.jar
- Moonlight Lib - moonlight-neoforge-1.21.1-3.1.2.jar → moonlight-neoforge-1.21.1-3.1.3.jar
- Simple Discord RPC - SimpleRPC-4.1.3.jar → SimpleRPC-4.1.4.jar
- Supplementaries - supplementaries-neoforge-1.21.1-3.8.3.jar → supplementaries-neoforge-1.21.1-3.8.4.jar
### ✅ Added (2)
- Feature Recycler (Feature-Recycler-neoforge-2.0.0.jar)
- Growth Accelerator Tiers (growthacceleratortiers-1.0.4_neoforge_1.21.1.jar)
### ❌ Removed (1)
- Structure Compass (StructureCompass-1.21.1-4.2.1.jar)

### KubeJS Changes
- [Recipe Added] `contained:brown_mushroom` (server_scripts/mods/Contained.js)
- [Recipe Added] `contained:crimson_fungus` (server_scripts/mods/Contained.js)
- [Recipe Added] `contained:red_mushroom` (server_scripts/mods/Contained.js)
- [Recipe Added] `contained:sweet_berries` (server_scripts/mods/Contained.js)
- [Recipe Added] `contained:warped_fungus` (server_scripts/mods/Contained.js)
- [Recipe Added] `enderrf:ender_battery` (server_scripts/mods/EnderStorage.js)
- [Recipe Added] `enderstorage:ender_chest` (server_scripts/mods/EnderStorage.js)
- [Recipe Added] `enderstorage:ender_pouch` (server_scripts/mods/EnderStorage.js)
- [Recipe Added] `enderstorage:ender_tank` (server_scripts/mods/EnderStorage.js)
- [Recipe Removed] `enderrf:ender_battery` (server_scripts/mods/EnderStorage.js)
- [Recipe Removed] `enderstorage:ender_chest` (server_scripts/mods/EnderStorage.js)
- [Recipe Removed] `enderstorage:ender_pouch` (server_scripts/mods/EnderStorage.js)
- [Recipe Removed] `enderstorage:ender_tank` (server_scripts/mods/EnderStorage.js)
- [Recipe Removed] `strainers:strainer/gravel/purified_gravel` (server_scripts/mods/Strainers.js)
- [Recipe Removed] `strainers:strainer/purified_sand/bamboo` (server_scripts/mods/Strainers.js)
- [Recipe Removed] `strainers:strainer/purified_sand/cactus` (server_scripts/mods/Strainers.js)
- [Recipe Removed] `strainers:strainer/purified_sand/kelp` (server_scripts/mods/Strainers.js)
- [Recipe Removed] `strainers:strainer/purified_sand/sugar_cane` (server_scripts/mods/Strainers.js)
- [Recipe Removed] `strainers:strainer/soul_sand/purified_soul_sand` (server_scripts/mods/Strainers.js)
- [Recipe Removed] `strainers:strainer/soul_soil/nether_wart` (server_scripts/mods/Strainers.js)
- [Recipe Removed] `structurecompass:structure_compass` (server_scripts/mods/StructureCompass.js)
- [Recipe Modified] `contained:blaze_key_on_room_block` (server_scripts/mods/InWorldRecipes.js)
- [Recipe Modified] `contained:blaze_key_on_unbreakable_block` (server_scripts/mods/InWorldRecipes.js)
- [Recipe Modified] `contained:mysterious_biomass_block_from_hammer` (server_scripts/mods/InWorldRecipes.js)
- [Recipe Modified] `contained:mysterious_end_stone_from_hammer` (server_scripts/mods/InWorldRecipes.js)
- [Recipe Modified] `contained:mysterious_oil_block_from_hammer` (server_scripts/mods/InWorldRecipes.js)
- [Recipe Modified] `contained:mysterious_organic_compost_from_hammer` (server_scripts/mods/InWorldRecipes.js)
- [Recipe Modified] `contained:mysterious_sky_stone_block_from_hammer` (server_scripts/mods/InWorldRecipes.js)
- [Recipe Modified] `growthacceleratortiers:boosted_growth_accelerator` (server_scripts/mods/GrowthAcceleratorTiers.js)
- [Recipe Modified] `growthacceleratortiers:directional_growth_accelerator` (server_scripts/mods/GrowthAcceleratorTiers.js)
- [Recipe Modified] `mysticalautomation:infusion_altarnator` (server_scripts/mods/MysticalAgriculture.js)
