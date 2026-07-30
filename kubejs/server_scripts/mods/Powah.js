// Powah

PowahEvents.registerMagmaticFluid(event => {
    event.add("oritech:still_biofuel", 5000);
    event.add("oritech:still_diesel", 35000);
    event.add("oritech:still_fuel", 140000); // 4x as dense as diesel
    event.add("contained:blazing_turbofuel", 560000); // 4x as dense as turbofuel
})

PowahEvents.registerCoolants(event => {
    event.addFluid("casting:chilled_water", -5);
    event.addFluid("casting:iced_water", -6);
    event.addFluid("casting:super_coolant", -7);
})

ServerEvents.recipes(event => {

    //Energizing
    event.recipes.powah.energizing(["#c:ingots/steel", "#c:ingots/gold"], 'powah:steel_energized', 10000).id('powah:energizing/energized_steel')
    event.recipes.powah.energizing(["#c:storage_blocks/steel", "#c:storage_blocks/gold"], 'powah:energized_steel_block', 90000).id('powah:energizing/energized_steel_block')
    event.recipes.powah.energizing(["minecraft:bone_block"], '3x mysticalagriculture:prosperity_shard', 10000).id('contained:energizing/prosperity_shard')
    event.recipes.powah.energizing(["minecraft:blaze_powder", "minecraft:slime_ball"], 'mysticalagriculture:inferium_essence', 10000).id('contained:energizing/inferium_essence')

    event.recipes.powah.energizing(["minecraft:diamond_block"], 'powah:niotic_crystal_block', 300000 * 9).id('contained:energizing/niotic_crystal_block')
    event.recipes.powah.energizing(["minecraft:emerald_block"], 'powah:spirited_crystal_block', 1000000 * 9).id('contained:energizing/spirited_crystal_block')


    //Replace
    event.replaceInput({ id: 'powah:crafting/dielectric_casing' }, 'minecraft:iron_ingot', 'oritech:plastic_sheet')
    event.replaceInput({ id: 'powah:crafting/capacitor_basic' }, 'minecraft:redstone_block', 'oritech:basic_battery')
    event.replaceInput({ id: 'powah:crafting/energizing_rod_starter' }, 'minecraft:quartz', '#c:storage_blocks/silver')

    //Remove
    event.remove({ id: 'powah:crafting/dielectric_paste' })
    event.remove({ id: 'powah:crafting/dielectric_paste_2' })

    //Basic Magmatic Generator
    event.shaped('powah:magmator_starter', ['AAA', 'BCB', 'CCC'], { A: 'colors:light_gray_asteroid', B: 'oritech:biomass_block', C: 'justdirethings:charcoal' }).id('powah:crafting/magmator_starter')

})
