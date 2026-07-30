//Energy Meter Recipe 

ServerEvents.recipes(event => {

    event.replaceInput({ id: 'energymeter:meter' }, 'minecraft:comparator', 'contained:primal_steel_ingot')
    event.replaceInput({ id: 'energymeter:meter' }, 'minecraft:observer', 'oritech:small_storage_block')
})