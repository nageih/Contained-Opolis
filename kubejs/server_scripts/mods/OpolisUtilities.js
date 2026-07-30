// Opolis Utilities Recipe

ServerEvents.recipes(event => {

    //Recipe Removal
    event.remove({ id: 'opolisutilities:block_breaker' })
    event.remove({ id: 'opolisutilities:catalogue' })

    //Recipe Replacement
    event.replaceInput({ id: 'opolisutilities:drying_table' }, '#minecraft:logs', 'minecraft:oak_log')

    //Fluid Generator
    event.shaped('opolisutilities:fluid_generator', ['AAA', 'BCB', 'AAA'], {
        A: '#c:ingots/nickel',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:bucket'
    }).id('opolisutilities:fluid_generator')

    //Smart Crafting Table
    event.replaceInput({ id: 'opolisutilities:smart_crafting_table' }, 'minecraft:stick', 'contained:asteroid_rod')

    //Summoning Block
    event.replaceInput({ id: 'opolisutilities:summoning_block' }, 'minecraft:hay_block', 'minecraft:bone_block')

    //Summons
    event.recipes.opolisutilities.summoning_block('minecraft:ghast_tear', 'justdirethings:gooblock_tier2', 'minecraft:happy_ghast').id('opolisutilities:summoning_block/happy_ghast_tear')

    //Leather
    event.recipes.opolisutilities.drying_table('minecraft:leather', 'oritech:raw_biopolymer', 200)
})
