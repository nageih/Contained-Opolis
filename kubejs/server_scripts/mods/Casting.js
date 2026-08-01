// Casting

ServerEvents.recipes(event => {

    //Remove Recipes
    event.remove({ id: 'casting:mixer' })
    event.remove({ id: 'casting:mixer_whisk' })
    event.remove({ id: 'casting:melting/quartz/from_dust' })
    event.remove({ id: 'casting:melting/diamond/from_dust' })
    event.remove({ id: 'casting:mixer/fluix' })
    event.remove({ id: 'casting:solidifier/fluix/crystal' })
    event.remove({ id: 'casting:solidifier/fluix/block' })

    //Replace Inputs
    event.replaceInput({ id: 'casting:solidifier/multiblock/mixer' }, 'casting:mixer', 'casting:multiblock_valve')

    //Equipment Modifier
    event.shaped('casting:equipment_modifier', ['AAA', 'BCB', 'AAA'], { A: '#contained:steel_ingots', B: 'smartcrafting:smart_crafting_table', C: '#c:player_workstations/crafting_tables' }).id('casting:equipment_modifier')

    //Solidifier
    event.recipes.casting.solidifier('powah:crystal_blazing', '4000x oritech:still_oil', 'contained:oil_drop').id('casting:casting/solidifier/oil_drop')
    event.recipes.casting.solidifier('minecraft:popped_chorus_fruit', '90x casting:molten_end_steel', 'oritech:enderic_compound').id('casting:casting/solidifier/enderic_compound')

    //Mixing
    //event.recipes.casting.mixing('1000x contained:mysterious_alloy', ['90x casting:molten_redstone', '90x casting:molten_nickel', '90x casting:molten_iron', '1000x casting:molten_stone', '1000x oritech:still_biofuel', '1000x justdirethings:polymorphic_fluid_source']).id('contained:casting/mixing/mysterious_alloy')

    //Melting
    event.recipes.casting.melting("colors:light_gray_asteroid", "100x casting:molten_stone", 1000).id("contained:casting/melting/light_gray_asteroid")
    event.recipes.casting.melting('mysticalagriculture:experience_droplet', "10x casting:molten_experience", 1000).id("contained:casting/melting/experience_droplet")

    //Fuels
    event.recipes.casting.fuel("8x oritech:still_biofuel", 1000, 400).id("contained:casting/fuel/oritech_still_biofuel")
    event.recipes.casting.fuel("25x oritech:still_diesel", 1200, 100).id("contained:casting/fuel/oritech_still_diesel")

    //Coolants
    event.recipes.casting.coolant("20x justdirethings:polymorphic_fluid_source", 100).id("contained:casting/coolant/justdirethings_polymorphic_fluid_source")

    //Modifiers
    event.custom({
        "type": "casting:equipment_modifier",
        "effect": "jets",
        "upgrade_item": {
            "count": 8,
            "item": "contained:primal_steel_ingot"
        }
    }).id('casting:equipment_modifier/jets')
})