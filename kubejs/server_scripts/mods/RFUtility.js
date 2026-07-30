// RF Tools

ServerEvents.recipes(event => {

    //Crafters
    event.shaped('rftoolsutility:crafter1', [' A ', 'BCB', ' A '], { A: 'justdirethings:ferricore_ingot', B: 'oritech:machine_core_1', C: '#c:player_workstations/crafting_tables' }).id('rftoolsutility:crafter1')

    event.shaped('rftoolsutility:crafter2', [' A ', 'BCB', ' A '], { A: 'justdirethings:ferricore_ingot', B: 'oritech:machine_core_1', C: 'rftoolsutility:crafter1' }).id('rftoolsutility:crafter2')

    event.shaped('rftoolsutility:crafter3', [' A ', 'BCB', ' A '], { A: 'justdirethings:ferricore_ingot', B: 'oritech:machine_core_1', C: 'rftoolsutility:crafter2' }).id('rftoolsutility:crafter3')

})