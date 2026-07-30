// Minecraft Recipe

ServerEvents.recipes(event => {

    //Remove
    event.remove({ id: 'minecraft:ender_eye' })
    event.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
    event.remove({ id: 'minecraft:netherite_ingot' })
    event.remove({ id: 'minecraft:raw_iron' })

    //Smithing Template
    event.shaped('minecraft:netherite_upgrade_smithing_template', ['A A', 'ABA', ' A '], { A: 'minecraft:netherite_ingot', B: 'justdirethings:upgrade_blank' }).id('contained:netherite_upgrade_smithing_template')
    event.shapeless(Item.of('minecraft:netherite_upgrade_smithing_template', 2), ['minecraft:netherite_upgrade_smithing_template', '2x minecraft:netherite_ingot']).id('contained:netherite_upgrade_smithing_template_dupe')

    //Wardens Smite
    event.shaped('minecraft:enchanted_book[stored_enchantments={levels:{"opolisutilities:wardens_smite":1}}]', ['ABA', 'BCB', 'ABA'], { A: 'justdirethings:celestigem', B: 'minecraft:sculk_shrieker', C: 'minecraft:book' }).id('contained:wardens_smite')

    //Composter
    event.shaped('minecraft:composter', ['A A', 'ABA', 'CCC'], { A: '#minecraft:planks', B: '#minecraft:saplings', C: '#minecraft:wooden_slabs', }).id('minecraft:composter')

    //Hopper 
    event.replaceInput({ id: 'minecraft:hopper' }, 'minecraft:chest', '#c:chests')

    //Additional Bed Recipe
    event.shaped('minecraft:green_bed', ['AAA', 'BBB'], { A: 'contained:organic_powder_block', B: 'colors:light_gray_asteroid' }).id('contained:bed')

    //Reinforced Deepslate
    event.shaped('minecraft:reinforced_deepslate', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:deepslate', B: 'ae2:sky_stone_block', C: 'minecraft:diamond' }).id('contained:reinforced_deepslate')

    //Glass
    event.shaped('minecraft:glass', ['AA', 'AA'], { A: 'contained:glass_shard' }).id('contained:glass')

    //Smelting Recipes
    event.smelting('minecraft:glass', 'contained:asteroid_sand').id('contained:smelting/glass_from_asteroid_sand')

    //Food stuff
    event.shaped('contained:stone_bowl', ['A A', ' A '], { A: 'colors:light_gray_asteroid' }).id('contained:stone_bowl')

    //Iron Tools Addition Recipes
    event.shaped('minecraft:iron_pickaxe', ['AAA', ' B ', ' B '], { A: 'minecraft:iron_ingot', B: 'contained:asteroid_rod' }).id('contained:iron_pickaxe')
    event.shaped('minecraft:iron_axe', ['AA ', 'AB ', ' B '], { A: 'minecraft:iron_ingot', B: 'contained:asteroid_rod' }).id('contained:iron_axe')
    event.shaped('minecraft:iron_shovel', [' A ', ' B ', ' B '], { A: 'minecraft:iron_ingot', B: 'contained:asteroid_rod' }).id('contained:iron_shovel')
    event.shaped('minecraft:iron_sword', [' A ', ' A ', ' B '], { A: 'minecraft:iron_ingot', B: 'contained:asteroid_rod' }).id('contained:iron_sword')
    event.shaped('minecraft:iron_hoe', ['AA ', ' B ', ' B '], { A: 'minecraft:iron_ingot', B: 'contained:asteroid_rod' }).id('contained:iron_hoe')

    // Arrows
    event.shaped('2x minecraft:arrow', [' A ', ' B ', ' B '], { A: 'minecraft:flint', B: 'contained:asteroid_rod' }).id('contained:arrow')

    // Totem of undying
    event.shaped('minecraft:totem_of_undying', [' A ', 'ABA', ' A '], { A: 'justdirethings:blazegold_block', B: 'draconicevolution:dragon_heart' }).id('contained:totem_of_undying')

})