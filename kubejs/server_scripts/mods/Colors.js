// Colors Recipe

ServerEvents.recipes(event => {

    //Colored Crafting Table 
    event.shaped('colors:light_gray_crafting_table', ['AA', 'BB'], {
        A: 'colors:light_gray_asteroid',
        B: 'contained:asteroid_rod',
    }).id('contained:light_gray_crafting_table')

    //Remove Asteroid crafting in stone cutter
    colors.forEach(color => {
        event.remove({ id: `colors:stonecutting/${color}_asteroid_from_stone` })
    })

    //Colored Saplings
    colors.forEach(color => {
        event.shaped(`colors:${color}_sapling`, [' A ', 'ABA', ' A '], {
            A: `contained:${color}_asteroid_dust`,
            B: "#minecraft:saplings"
        }).id(`contained:${color}_sapling`)
    })

})