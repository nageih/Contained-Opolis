// Swiss Recipe

ServerEvents.recipes(event => {

    //Replace 
    event.replaceInput({ id: 'routers:importer_block' }, 'minecraft:iron_ingot', 'minecraft:lapis_lazuli')
    event.replaceInput({ id: 'routers:importer_block' }, '#minecraft:logs', '#minecraft:planks')
    event.replaceInput({ id: 'routers:exporter_block' }, '#minecraft:logs', '#minecraft:planks')
    event.replaceInput({ id: 'routers:exporter_block' }, 'minecraft:iron_ingot', '#c:ingots/nickel')
    event.replaceInput({ id: 'routers:item_upgrade_1' }, 'minecraft:copper_ingot', '#c:ingots/nickel')

    event.remove({ id: 'routers:dimensional_upgrade' })
})