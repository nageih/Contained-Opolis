// Structure Compass Recipe

ServerEvents.recipes(event => {

    event.remove({ id: 'explorerscompass:repair_explorers_compass' })
    event.remove({ id: 'explorerscompass:explorers_compass' })

    event.shaped('explorerscompass:explorerscompass', [' A ', 'ABA', ' A '], { A: 'justdirethings:ferricore_ingot', B: '#contained:steel_dusts' }).id('explorerscompass:explorerscompass')

})