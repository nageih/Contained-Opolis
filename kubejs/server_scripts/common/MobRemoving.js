BlockEvents.broken('oritechthings:infested_amethyst_block', event => {
    event.block.set('minecraft:air')

    event.block.popItem('minecraft:amethyst_block')

    event.cancel()
})