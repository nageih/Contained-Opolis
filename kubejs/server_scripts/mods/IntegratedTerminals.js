//Integrated Terminals

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({ id: 'integratedterminals:crafting/part_terminal_crafting_job' }, 'minecraft:glowstone_dust', '#contained:steel_dusts')
    event.replaceInput({ id: 'integratedterminals:crafting/part_terminal_storage' }, 'minecraft:glowstone_dust', '#contained:steel_dusts')

})