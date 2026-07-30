// Contained Recipe

//Structure Info
/*
    asteroid base, house, large and red are old

    asteroid large room is new and completed
*/

ServerEvents.recipes(event => {

    //Catalog
    event.shaped('contained:catalog', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:paper', B: 'minecraft:book', C: 'minecraft:compass' }).id('contained:catalog')

    // Slabs to Blocks
    event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, r => {
        const ingredients = r.originalRecipeIngredients
        const slabOut = r.originalRecipeResult // the slab item (result of the original recipe)

        // Find a sane "base block" ingredient from the original slab recipe
        // Most slab recipes are: 3 base blocks in a row -> 6 slabs
        const base = ingredients[0]
        if (!base || base.isEmpty()) return

        // Convert Ingredient -> ItemStack for result
        const baseStack = base.first
        if (!baseStack || baseStack.isEmpty()) return

        // Add: 2 slabs -> 1 base block
        event.shaped(baseStack, ['S', 'S'], { S: slabOut })
    })

    event.smelting('justdirethings:ferricore_ingot', 'contained:ferricore_dust').id('contained:smelting/ferricore_ingot_from_dust')

    //Mysterious Gateway Pearl
    event.shaped('contained:mysterious_gateway_pearl', ['ABA', 'BCB', 'ABA'], { A: 'contained:mysterious_powder', B: 'ae2:fluix_dust', C: 'minecraft:ender_pearl' }).id('contained:mysterious_gateway_pearl')

    //Crying Obsidian 
    event.shaped('minecraft:crying_obsidian', [' A ', 'ABA', ' A '], { A: 'draconicevolution:draconium_ingot', B: 'minecraft:obsidian' }).id('contained:crying_obsidian')

    //Obsidian Dust to Obsidian
    event.shaped('minecraft:obsidian', ['AA', 'AA'], { A: 'contained:obsidian_dust' }).id('contained:obsidian_from_dust')

    //Furnace 
    event.shaped('minecraft:furnace', ['AAA', 'A A', 'AAA'], { A: 'colors:light_gray_asteroid' }).id('contained:furnace')

    //Blast Furnace 
    event.shaped('minecraft:blast_furnace', ['AAA', 'ABA', 'CCC'], { A: 'minecraft:iron_ingot', B: 'minecraft:furnace', C: 'colors:light_gray_asteroid' }).id('contained:blast_furnace')

    //Sculk Collector
    event.shaped('contained:sculk_collector', [' AB', ' AA', 'A  '], { A: 'minecraft:stick', B: 'oritech:fluxite' }).id('contained:sculk_collector')

    //Elemental Essence
    event.shapeless('contained:elemental_essence', ['mysticalagriculture:fire_essence', 'mysticalagriculture:water_essence', 'mysticalagriculture:air_essence', 'mysticalagriculture:earth_essence']).id('contained:elemental_essence')

    //Mysterious End Stone
    event.shaped('contained:mysterious_end_stone', ['AAA', 'ABA', 'AAA'], { A: 'oritech:duratium_dust', B: 'contained:mysterious_powder' }).id('contained:mysterious_end_stone')

    //Geo Certus Quartz Block
    event.shaped('contained:certus_quartz_block', ['AA', 'AA'], { A: 'contained:certus_quartz_shard' }).id('contained:certus_quartz_block')

    //Remove default dire armor recipes
    event.remove({ id: 'justdirethings:ferricore_helmet' })
    event.remove({ id: 'justdirethings:ferricore_chestplate' })
    event.remove({ id: 'justdirethings:ferricore_leggings' })
    event.remove({ id: 'justdirethings:ferricore_boots' })
    event.remove({ id: 'justdirethings:blazegold_helmet' })
    event.remove({ id: 'justdirethings:blazegold_chestplate' })
    event.remove({ id: 'justdirethings:blazegold_leggings' })
    event.remove({ id: 'justdirethings:blazegold_boots' })
    event.remove({ id: 'justdirethings:celestigem_helmet' })
    event.remove({ id: 'justdirethings:celestigem_chestplate' })
    event.remove({ id: 'justdirethings:celestigem_leggings' })
    event.remove({ id: 'justdirethings:celestigem_boots' })
    event.remove({ id: 'justdirethings:eclipsealloy_helmet' })
    event.remove({ id: 'justdirethings:eclipsealloy_chestplate' })
    event.remove({ id: 'justdirethings:eclipsealloy_leggings' })
    event.remove({ id: 'justdirethings:eclipsealloy_boots' })

    //Space Suit Upgrade
    event.smithing('justdirethings:ferricore_helmet', 'justdirethings:template_ferricore', 'contained:space_suit_helmet', 'justdirethings:ferricore_ingot').id('contained:ferricore_space_suit_helmet')
    event.smithing('justdirethings:ferricore_chestplate', 'justdirethings:template_ferricore', 'contained:space_suit_chestplate', 'justdirethings:ferricore_ingot').id('contained:ferricore_space_suit_chestplate')
    event.smithing('justdirethings:ferricore_leggings', 'justdirethings:template_ferricore', 'contained:space_suit_leggings', 'justdirethings:ferricore_ingot').id('contained:ferricore_space_suit_leggings')
    event.smithing('justdirethings:ferricore_boots', 'justdirethings:template_ferricore', 'contained:space_suit_boots', 'justdirethings:ferricore_ingot').id('contained:ferricore_space_suit_boots')

    //Space Suit
    event.shaped('contained:space_suit_helmet', ['ABA', 'B B'], { A: 'minecraft:iron_ingot', B: 'justdirethings:ferricore_ingot' }).id('contained:space_suit_helmet')

    event.shaped('contained:space_suit_chestplate', ['A A', 'BAB', 'ABA'], { A: 'minecraft:iron_ingot', B: 'justdirethings:ferricore_ingot' }).id('contained:space_suit_chestplate')

    event.shaped('contained:space_suit_leggings', ['ABA', 'B B', 'A A'], { A: 'minecraft:iron_ingot', B: 'justdirethings:ferricore_ingot' }).id('contained:space_suit_leggings')

    event.shaped('contained:space_suit_boots', ['A A', 'B B'], { A: 'minecraft:iron_ingot', B: 'justdirethings:ferricore_ingot' }).id('contained:space_suit_boots')

    //Cindrath Portal
    event.shaped('contained:cindrath_portal_frame', ['ABA', 'BCB', 'ABA'], { A: 'contained:lava_drop', B: 'minecraft:blaze_powder', C: 'minecraft:bone_block' }).id('contained:cindrath_portal_frame')

    //Blaze Key
    event.shaped('contained:blaze_key', [' A ', 'ABA', ' A '], { A: 'minecraft:blaze_powder', B: 'contained:iron_key' }).id('contained:blaze_key')

    //Dirt
    event.shaped('minecraft:dirt', ['AA', 'AA'], { A: 'contained:dirt_pile' }).id('contained:dirt')

    //Lockpick
    event.shaped('contained:organic_room_key', ['AA', 'AA'], { A: 'contained:asteroid_rod' }).id('contained:organic_room_key')

    //Lockpick - Additional Asteroids
    event.shaped('contained:additional_asteroids', ['AAA', 'ABA', 'AAA'], { A: 'contained:light_gray_asteroid_dust', B: 'contained:organic_room_key' }).id('contained:additional_asteroids')

    //Light Gray Asteroid
    event.shaped('colors:light_gray_asteroid', ['AA', 'AA'], { A: 'contained:asteroid_rocks' }).id('contained:light_gray_asteroid')

    //Iron Key
    event.shaped('contained:iron_key', ['A', 'B', 'B'], { A: 'minecraft:iron_ingot', B: 'minecraft:iron_nugget' }).id('contained:iron_key');

    //Iron Key: Glass Roof Room
    event.shaped('contained:glass_roof_room_key', ['AAA', 'ABA', 'AAA'], { A: 'minecraft:glass_pane', B: 'contained:iron_key' }).id('contained:glass_roof_room_key');

    //Iron Key: Open Space
    event.shaped('contained:open_space_key', ['AAA', 'ABA', 'AAA'], { A: '#contained:steel_dusts', B: 'contained:iron_key' }).id('contained:open_space_key');

    //Iron Hammer
    event.shaped('contained:iron_hammer', ['ACA', 'ABA', ' B '], { A: 'minecraft:iron_ingot', B: 'contained:asteroid_rod', C: 'minecraft:iron_pickaxe' }).id('contained:iron_hammer')

    //Ferricore Hammer
    event.shaped('contained:ferricore_hammer', ['ACA', 'ABA', ' B '], { A: 'justdirethings:ferricore_ingot', B: 'minecraft:stick', C: 'justdirethings:ferricore_pickaxe' }).id('contained:ferricore_hammer')

    //Rocky Soup
    event.shapeless('1x contained:rocky_soup', ['contained:roasted_rocks', 'contained:organic_powder', 'contained:water_drop', 'contained:stone_bowl']).id('contained:rocky_soup')

    //Lava Drop
    //event.shapeless('contained:lava_drop', ['9x mysticalagriculture:nether_essence']).id('contained:lava_drop')

    //Reflective Glass
    event.shaped('contained:reflective_glass', [' A ', 'ABA', ' A '], { A: 'minecraft:glass', B: 'solarcooker:reflector' }).id('contained:reflective_glass')

    //Solar Panel
    event.shaped('1x contained:solar_panel', ['AAA', 'BBB', 'CCC'], { A: 'minecraft:glass_pane', B: 'solarcooker:reflector', C: 'colors:light_gray_asteroid' }).id('contained:solar_panel')

    //Primal Steel Dust shapeless
    event.shapeless('3x contained:primal_steel_dust', ['2x contained:primal_coal_dust', 'contained:ferricore_dust']).id('contained:primal_steel_dust')

    //Organic Powder Block
    event.shaped('contained:organic_powder_block', ['AA', 'AA'], { A: 'contained:organic_powder' }).id('contained:organic_powder_block')

    //Orange Asteroid Dust
    //event.shapeless('2x contained:orange_asteroid_dust', ['contained:red_asteroid_dust', 'contained:yellow_asteroid_dust']).id('contained:orange_asteroid_dust') 

    //Mysterious Oil Block
    event.shaped('contained:mysterious_oil_block', ['AAA', 'ABA', 'AAA'], { A: 'contained:oil_drop', B: 'contained:mysterious_black_asteroid_dust' }).id('contained:mysterious_oil_block')

    //Mysterious Light Gray Asteroid
    event.shaped('contained:mysterious_light_gray_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:light_gray_asteroid', B: 'contained:mysterious_light_gray_asteroid_dust' }).id('contained:mysterious_light_gray_asteroid')

    //Mysterious Brown Dust
    event.shaped('contained:mysterious_brown_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:brown_asteroid_dust', B: 'oritech:small_gold_dust', C: 'alltheores:gold_dust' }).id('contained:mysterious_brown_asteroid_dust')

    //Mysterious Brown Asteroid
    event.shaped('contained:mysterious_brown_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:brown_asteroid', B: 'contained:mysterious_brown_asteroid_dust' }).id('contained:mysterious_brown_asteroid')

    colors.forEach(color => {
        if (color == "light_gray") return //Skip Light Gray Asteroid
        event.shaped(`colors:${color}_asteroid`, ['AA', 'AA'], {
            A: `contained:${color}_asteroid_dust`,
        }).id(`contained:crafting/mysterious_${color}_asteroid`)
    })

    //Purple Asteroid Dust - Change to asteroid blocks in assembler
    //event.shapeless('2x contained:purple_asteroid_dust', ['contained:blue_asteroid_dust', 'contained:red_asteroid_dust']).id('contained:purple_asteroid_dust')

    //Mysterious Organic Powder Block
    event.shaped('contained:mysterious_organic_compost', ['AAA', 'ABA', 'AAA'], { A: 'contained:organic_powder_block', B: 'contained:mysterious_organic_powder' }).id('contained:mysterious_organic_compost')

    //Mysterious Organic Powder
    event.shaped('contained:mysterious_organic_powder', ['AAA', 'ABA', 'AAA'], { A: 'contained:organic_powder', B: 'contained:mysterious_powder' }).id('contained:mysterious_organic_powder')

    //Mysterious Light Gray Powder
    event.shaped('contained:mysterious_light_gray_asteroid_dust', ['AAA', 'ABA', 'AAA'], { A: 'contained:light_gray_asteroid_dust', B: 'contained:mysterious_powder' }).id('contained:mysterious_light_gray_asteroid_dust')

    //Mysterious Sky Stone Block
    event.shaped('contained:mysterious_sky_stone_block', ['AAA', 'ABA', 'AAA'], { A: 'ae2:sky_stone_block', B: 'ae2:sky_dust' }).id('contained:mysterious_sky_stone_block')

    //Mysterious Lime Asteroid
    event.shaped('contained:mysterious_lime_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:lime_asteroid', B: 'contained:mysterious_lime_asteroid_dust' }).id('contained:mysterious_lime_asteroid')

    //Mysterious Lime Asteroid Dust
    event.shaped('contained:mysterious_lime_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:lime_asteroid_dust', B: 'oritech:small_platinum_dust', C: 'alltheores:platinum_dust' }).id('contained:mysterious_lime_asteroid_dust')

    //Mysterious Green Asteroid
    event.shaped('contained:mysterious_green_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:green_asteroid', B: 'contained:mysterious_green_asteroid_dust' }).id('contained:mysterious_green_asteroid')

    //Mysterious Green Asteroid Dust
    event.shaped('contained:mysterious_green_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:green_asteroid_dust', B: 'contained:small_emerald_dust', C: 'contained:emerald_dust' }).id('contained:mysterious_green_asteroid_dust')

    //Mysterious Black Asteroid
    event.shaped('contained:mysterious_black_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:black_asteroid', B: 'contained:mysterious_black_asteroid_dust' }).id('contained:mysterious_black_asteroid')

    //Mysterious Black Asteroid Dust
    event.shaped('contained:mysterious_black_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:black_asteroid_dust', B: 'contained:small_coal_dust', C: 'oritech:coal_dust' }).id('contained:mysterious_black_asteroid_dust')

    //Mysterious Light Blue Asteroid
    event.shaped('contained:mysterious_light_blue_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:light_blue_asteroid', B: 'contained:mysterious_light_blue_asteroid_dust' }).id('contained:mysterious_light_blue_asteroid')

    //Mysterious Orange Asteroid
    event.shaped('contained:mysterious_orange_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:orange_asteroid', B: 'contained:mysterious_orange_asteroid_dust' }).id('contained:mysterious_orange_asteroid')

    //Mysterious Orange Asteroid Dust
    event.shaped('contained:mysterious_orange_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:orange_asteroid_dust', B: 'oritech:small_copper_dust', C: 'alltheores:copper_dust' }).id('contained:mysterious_orange_asteroid_dust')

    //Mysterious White Asteroid
    event.shaped('contained:mysterious_white_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:white_asteroid', B: 'contained:mysterious_white_asteroid_dust' }).id('contained:mysterious_white_asteroid')

    //Mysterious White Asteroid Dust
    event.shaped('contained:mysterious_white_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:white_asteroid_dust', B: 'contained:small_silver_dust', C: 'alltheores:silver_dust' }).id('contained:mysterious_white_asteroid_dust')

    //Mystierous Red Asteroid
    event.shaped('contained:mysterious_red_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:red_asteroid', B: 'contained:mysterious_red_asteroid_dust' }).id('contained:mysterious_red_asteroid')

    //Mysterious Red Asteroid Dust
    event.shaped('contained:mysterious_red_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:red_asteroid_dust', B: 'minecraft:redstone', C: 'contained:mysterious_powder' }).id('contained:mysterious_red_asteroid_dust')

    //Mysterious Blue Asteroid
    event.shaped('contained:mysterious_blue_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:blue_asteroid', B: 'contained:mysterious_blue_asteroid_dust' }).id('contained:mysterious_blue_asteroid')

    //Mysterious Blue Asteroid Dust
    event.shaped('contained:mysterious_blue_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:blue_asteroid_dust', B: 'contained:lapis_dust', C: 'contained:mysterious_powder' }).id('contained:mysterious_blue_asteroid_dust')

    //Mysterious Yellow Asteroid
    event.shaped('contained:mysterious_yellow_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:yellow_asteroid', B: 'contained:mysterious_yellow_asteroid_dust' }).id('contained:mysterious_yellow_asteroid')

    //Mysterious Yellow Asteroid Dust
    event.shaped('contained:mysterious_yellow_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:yellow_asteroid_dust', B: 'alltheores:nickel_dust', C: 'contained:mysterious_powder' }).id('contained:mysterious_yellow_asteroid_dust')

    //Mysterious Purple Asteroid
    event.shaped('contained:mysterious_purple_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:purple_asteroid', B: 'contained:mysterious_purple_asteroid_dust' }).id('contained:mysterious_purple_asteroid')

    //Mysterious Purple Asteroid Dust
    event.shaped('contained:mysterious_purple_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:purple_asteroid_dust', B: 'contained:obsidian_dust', C: 'minecraft:amethyst_block' }).id('contained:mysterious_purple_asteroid_dust')

    //Mysterious Pink Asteroid
    event.shaped('contained:mysterious_pink_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:pink_asteroid', B: 'contained:mysterious_pink_asteroid_dust' }).id('contained:mysterious_pink_asteroid')

    //Mysterious Pink Asteroid Dust
    event.shaped('contained:mysterious_pink_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:pink_asteroid_dust', B: 'draconicevolution:draconium_dust', C: 'draconicevolution:draconium_block' }).id('contained:mysterious_pink_asteroid_dust')

    //Mysterious Magenta Asteroid
    event.shaped('contained:mysterious_magenta_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:magenta_asteroid', B: 'contained:mysterious_magenta_asteroid_dust' }).id('contained:mysterious_magenta_asteroid')

    //Mysterious Magenta Asteroid Dust
    event.shaped('contained:mysterious_magenta_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:magenta_asteroid_dust', B: 'contained:obsidian_dust', C: 'draconicevolution:draconium_block' }).id('contained:mysterious_magenta_asteroid_dust')

    //Mysterious Gray Asteroid
    event.shaped('contained:mysterious_gray_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:gray_asteroid', B: 'contained:mysterious_gray_asteroid_dust' }).id('contained:mysterious_gray_asteroid')

    //Mysterious Gray Asteroid Dust
    event.shaped('contained:mysterious_gray_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:gray_asteroid_dust', B: 'draconicevolution:draconium_dust', C: 'minecraft:quartz_block' }).id('contained:mysterious_gray_asteroid_dust')

    //Mysterious Cyan Asteroid
    event.shaped('contained:mysterious_cyan_asteroid', ['AAA', 'ABA', 'AAA'], { A: 'colors:cyan_asteroid', B: 'contained:mysterious_cyan_asteroid_dust' }).id('contained:mysterious_cyan_asteroid')

    //Mysterious Cyan Asteroid Dust
    event.shaped('contained:mysterious_cyan_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:cyan_asteroid_dust', B: 'draconicevolution:draconium_dust', C: 'ae2:quartz_block' }).id('contained:mysterious_cyan_asteroid_dust')

    //Mysterious Light Blue Asteroid Dust
    event.shaped('contained:mysterious_light_blue_asteroid_dust', ['ABA', 'BCB', 'ABA'], { A: 'contained:light_blue_asteroid_dust', B: 'draconicevolution:draconium_dust', C: 'minecraft:diamond_block' }).id('contained:mysterious_light_blue_asteroid_dust')

    //Asteroid Sand
    event.shaped('contained:asteroid_sand', ['AA', 'AA'], { A: 'contained:light_gray_asteroid_dust' }).id('contained:asteroid_sand')

    //Asteroid Rod
    event.shaped('contained:asteroid_rod', ['A', 'A'], { A: 'colors:light_gray_asteroid', }).id('contained:asteroid_rod')

    //Asteroid Tools
    event.shaped('contained:asteroid_pickaxe', ['AAA', ' B ', ' B '], { A: 'colors:light_gray_asteroid', B: '#c:rods/wooden' }).id('contained:asteroid_pickaxe')
    event.shaped('contained:asteroid_axe', ['AA ', 'AB ', ' B '], { A: 'colors:light_gray_asteroid', B: '#c:rods/wooden' }).id('contained:asteroid_axe')
    event.shaped('contained:asteroid_shovel', [' A ', ' B ', ' B '], { A: 'colors:light_gray_asteroid', B: '#c:rods/wooden' }).id('contained:asteroid_shovel')
    event.shaped('contained:asteroid_sword', [' A ', ' A ', ' B '], { A: 'colors:light_gray_asteroid', B: '#c:rods/wooden' }).id('contained:asteroid_sword')
    event.shaped('contained:asteroid_hoe', ['AA ', ' B ', ' B '], { A: 'colors:light_gray_asteroid', B: '#c:rods/wooden' }).id('contained:asteroid_hoe')
    event.shaped('contained:asteroid_hammer', ['ACA', 'ABA', ' B '], { A: 'colors:light_gray_asteroid', B: '#c:rods/wooden', C: 'contained:asteroid_pickaxe' }).id('contained:asteroid_hammer')

    // Crystalline dust
    event.shapeless('contained:crystalline_dust', '9x contained:small_crystalline_dust')

    //Room Block
    event.shapeless('contained:room_block', '9x colors:light_gray_asteroid')

    //Almost Breakable Glass
    event.shapeless('contained:almost_unbreakable_glass', '9x #c:glass_panes')

    //Ancient ingot block
    event.shapeless('contained:ancient_ingot_block', '9x contained:ancient_ingot')

    //Crystalline Quartz block
    event.shapeless('contained:crystalline_quartz_block', '9x contained:crystalline_quartz')

    // Roomblock to light gray asteroid
    event.shapeless('9x colors:light_gray_asteroid', 'contained:room_block')

    // Organic Powder Block to Organic Powder
    event.shapeless('4x contained:organic_powder', 'contained:organic_powder_block')

    // Clay Block to Clay
    event.shapeless('4x minecraft:clay_ball', 'minecraft:clay')

    // Brown Mushroom
    event.shaped('minecraft:brown_mushroom', ['AAA', ' A ', '   '], { A: 'mysticalagriculture:nature_essence' }).id('contained:brown_mushroom')

    // Red Mushroom
    event.shaped('minecraft:red_mushroom', ['ABA', ' A ', '   '], { A: 'mysticalagriculture:nature_essence', B: '#c:dyes/red' }).id('contained:red_mushroom')

    // Crimson Fungus
    event.shaped('minecraft:crimson_fungus', ['   ', 'ABA', '   '], { A: 'mysticalagriculture:fire_essence', B: 'minecraft:red_mushroom' }).id('contained:crimson_fungus')

    // Warped Fungus
    event.shaped('minecraft:warped_fungus', ['   ', 'ABA', '   '], { A: 'mysticalagriculture:water_essence', B: 'minecraft:brown_mushroom' }).id('contained:warped_fungus')

    // Sweet Berries
    event.shaped('minecraft:sweet_berries', ['  A', '  A', ' A '], { A: 'mysticalagriculture:nature_essence' }).id('contained:sweet_berries')

})