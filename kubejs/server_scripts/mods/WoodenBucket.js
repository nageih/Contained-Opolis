// Wooden Bucket Recipe

ServerEvents.recipes(event => {

    //Wooden Bucket
    event.shaped('woodenbucket:wooden_bucket', ['ABA', ' A '], { A: '#minecraft:planks', B: 'contained:stone_bowl' }).id('woodenbucket:wooden_bucket')

})