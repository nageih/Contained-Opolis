// Pipez Recipe

ServerEvents.recipes(event => {

    //Replace Input 
    event.replaceInput({ id: 'pipez:basic_upgrade' }, 'minecraft:redstone', 'alltheores:iron_dust')

    //Pipe Wrench
    event.shaped('pipez:wrench', [' A ', ' BA', 'A  '], { A: 'minecraft:iron_nugget', B: 'minecraft:iron_ingot' }).id('pipez:wrench')

    //Fluid Pipe
    event.shaped('32x pipez:fluid_pipe', ['AAA', 'BBB', 'AAA'], { A: 'minecraft:iron_ingot', B: 'minecraft:glass' }).id('pipez:fluid_pipe')

    //Energy Pipe
    event.shaped('32x pipez:energy_pipe', ['AAA', 'BBB', 'AAA'], { A: '#contained:steel_ingots', B: '#contained:steel_dusts' }).id('pipez:energy_pipe')

    //Item Pipe
    event.shaped('32x pipez:item_pipe', ['AAA', 'BBB', 'AAA'], { A: '#contained:steel_ingots', B: 'contained:ferricore_dust', }).id('pipez:item_pipe')

    // Replace upgrade recipes
    event.remove({ id: 'pipez:improved_upgrade' })
    event.remove({ id: 'pipez:advanced_upgrade' })
    event.shaped('pipez:advanced_upgrade', ['ABA', 'BCB', 'ABA'], { A: '#c:ingots/gold', B: '#c:dusts/redstone', C: 'pipez:basic_upgrade' }).id('pipez:advanced_upgrade')

})