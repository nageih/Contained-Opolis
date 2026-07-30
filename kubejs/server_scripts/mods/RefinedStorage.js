//Refined Storage

ServerEvents.recipes(event => {

    //Creative Range Upgrade 
    event.shaped('refinedstorage:creative_range_upgrade', ['ABA', 'ACA', 'ABA'], { A: 'refinedstorage:range_upgrade', B: 'minecraft:ender_pearl', C: 'refinedstorage:advanced_processor', }).id('contained:creative_range_upgrade')

})