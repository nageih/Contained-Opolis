// Swiss Recipe

ServerEvents.recipes(event => {

    event.remove({ mod: 'swiss' })

    /*
    //Replace 
    event.replaceInput({id: 'swiss:storage_item_panel'}, 'minecraft:diamond', '#c:storage_blocks/nickel')
    event.replaceInput({id: 'swiss:storage_item_panel'}, 'swiss:storage_item_panel', 'minecraft:chest')

    // Crafting Panel
    event.shaped('swiss:crafting_item_panel', ['ABA', 'BCB', 'ABA'], {
        A: '#c:ingots/nickel',
        B: 'smartcrafting:smart_crafting_table',
        C: 'swiss:storage_item_panel'
    }).id('swiss:crafting_item_panel')
    */

})