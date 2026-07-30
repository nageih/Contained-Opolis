// Functional Storage

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({ id: 'functionalstorage:storage_controller' }, 'minecraft:comparator', 'contained:mysterious_powder')
    event.replaceInput({ id: 'functionalstorage:storage_controller' }, 'minecraft:quartz_block', '#c:storage_blocks/nickel')

    //Linking Tool
    event.shaped('functionalstorage:linking_tool', ['AAA', 'BCB', 'AAA'], {
        A: 'minecraft:paper',
        B: 'minecraft:lapis_lazuli',
        C: 'minecraft:lapis_block'
    }).id('functionalstorage:linking_tool')

    //Configuration Tool
    event.shaped('functionalstorage:configuration_tool', ['AAA', 'BCB', 'AAA'], {
        A: 'minecraft:paper',
        B: '#c:ingots/nickel',
        C: '#c:storage_blocks/nickel'
    }).id('functionalstorage:configuration_tool')

})