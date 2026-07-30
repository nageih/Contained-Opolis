//Super Factory Manager

ServerEvents.recipes(event => {

    //Disk
    event.shaped('sfm:disk', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:paper', B: 'minecraft:redstone', C: 'minecraft:redstone_block' }).id('sfm:disk')
})