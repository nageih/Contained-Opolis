// All The Ores Recipes

ServerEvents.recipes(event => {

    // Remove specific hammer recipes
    event.remove({ id: 'alltheores:copper_ore_hammer' })
    event.remove({ id: 'alltheores:iron_ore_hammer' })
    event.remove({ id: 'alltheores:bronze_ore_hammer' })
    event.remove({ id: 'alltheores:invar_ore_hammer' })
    event.remove({ id: 'alltheores:platinum_ore_hammer' })

    // Remove specific alloy blending recipes
    event.remove({ id: 'alltheores:crafting/enderium/alloy_blending_from_dust' })
    event.remove({ id: 'alltheores:crafting/steel/alloy_blending_from_dust' })

    // Remove existing recipes
    event.remove({ id: 'oritech:crafting/alloy/steel' })
    event.remove({ id: /alltheores:crushing/ })
    event.remove({ id: /alltheores:crafting\/hammer/ })
    event.remove({ id: /alltheores:crafting\/.*\/plate/ })
    event.remove({ id: /alltheores:crafting\/.*\/rod/ })

})
