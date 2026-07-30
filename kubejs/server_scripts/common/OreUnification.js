ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({}, '#c:ingots/steel', '#contained:steel_ingots')

    //Small Dusts form Asteroid Dusts
    event.smelting('oritech:small_iron_dust', 'contained:light_gray_asteroid_dust').id('contained:small_iron_dust_smelting')

    //Dust to Resource
    event.smelting('minecraft:coal', 'oritech:coal_dust').id('contained:coal_smelting')
    event.smelting('contained:primal_steel_ingot', 'contained:primal_steel_dust').id('contained:primal_steel_ingot')

    //Small Dusts to Dusts
    event.shapeless('contained:lapis_dust', ['9x contained:small_lapis_dust']).id('contained:lapis_dust_crafting')
    event.shapeless('minecraft:redstone', ['9x contained:small_redstone_dust']).id('contained:redstone_crafting')
    event.shapeless('alltheores:silver_dust', ['9x contained:small_silver_dust']).id('contained:silver_dust_crafting')
    event.shapeless('alltheores:diamond_dust', ['9x contained:small_diamond_dust']).id('contained:diamond_dust_crafting')
    event.shapeless('oritech:coal_dust', ['9x contained:small_coal_dust']).id('contained:coal_dust_crafting')
    event.shapeless('contained:emerald_dust', ['9x contained:small_emerald_dust']).id('contained:emerald_dust_crafting')
    event.shapeless('contained:uraninite_dust', ['9x contained:small_uraninite_dust']).id('contained:uraninite_dust_crafting')
    event.shapeless('oritech:quartz_dust', ['4x contained:small_quartz_dust']).id('contained:quartz_dust_crafting')
    event.shapeless('ae2:certus_quartz_dust', ['4x contained:small_certus_quartz_dust']).id('contained:certus_quartz_dust_crafting')


    //Dust Smelting
    event.smelting('minecraft:lapis_lazuli', 'contained:lapis_dust').id('contained:lapis_lazuli_smelting')


})