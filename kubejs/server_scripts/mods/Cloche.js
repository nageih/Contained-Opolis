// Cloche Recipe

ServerEvents.recipes(event => {

    //Cloche
    event.shaped('cloche:cloche', ['ABA', 'CDC', 'ABA'], { A: 'justdirethings:ferricore_ingot', B: '#c:ingots/nickel', C: 'minecraft:lapis_lazuli', D: 'minecraft:redstone', }).id('cloche:cloche')

    // Cloche - Earth Seeds

    event.recipes.cloche.cloche("mysticalagriculture:earth_seeds", "mysticalagriculture:inferium_farmland", 2400,
        [
            ["mysticalagriculture:earth_essence"],
            ["mysticalagriculture:earth_seeds", 0.15],
            ["mysticalagriculture:fertilized_essence", 0.1]
        ]).id('cloche:earth_seeds')

    // Cloche - Air Seeds
    event.recipes.cloche.cloche("mysticalagriculture:air_seeds", "mysticalagriculture:inferium_farmland", 2400,
        [
            ["mysticalagriculture:air_essence"],
            ["mysticalagriculture:air_seeds", 0.15],
            ["mysticalagriculture:fertilized_essence", 0.1]
        ]).id('cloche:air_seeds')

    // Cloche - Water Seeds
    event.recipes.cloche.cloche("mysticalagriculture:water_seeds", "mysticalagriculture:inferium_farmland", 2400,
        [
            ["mysticalagriculture:water_essence"],
            ["mysticalagriculture:water_seeds", 0.15],
            ["mysticalagriculture:fertilized_essence", 0.1]
        ]).id('cloche:water_seeds')

    // Cloche - Fire Seeds
    event.recipes.cloche.cloche("mysticalagriculture:fire_seeds", "mysticalagriculture:inferium_farmland", 2400,
        [
            ["mysticalagriculture:fire_essence"],
            ["mysticalagriculture:fire_seeds", 0.15],
            ["mysticalagriculture:fertilized_essence", 0.1]
        ]).id('cloche:fire_seeds')

    // Cloche - Bio Spores
    event.recipes.cloche.cloche("contained:bio_spores", "contained:organic_powder_block", 1200,
        [
            ["contained:bio_spores"],
            ["minecraft:wheat_seeds", 0.2],
            ["contained:bio_sapling", 0.2]
        ]).id('cloche:bio_spores')

    // Cloche - Wheat Seeds
    event.recipes.cloche.cloche("minecraft:wheat_seeds", "contained:organic_powder_block", 300,
        [
            ["minecraft:wheat"],
            ["minecraft:wheat_seeds", 0.2]
        ]).id('cloche:wheat_seeds')

    // Cloche - Bio Sapling
    event.recipes.cloche.cloche("contained:bio_sapling", "contained:organic_powder_block", 600,
        [
            ["colors:light_gray_stripped_log"],
            ["contained:organic_powder", 0.2],
            ["contained:bio_sapling", 0.2]
        ]).id('cloche:bio_sapling')

    //Cloche - Menril Sapling
    event.recipes.cloche.cloche("integrateddynamics:menril_sapling", "#minecraft:dirt", 1200,
        [
            ["2x integrateddynamics:menril_log"],
            ["integrateddynamics:menril_sapling", 0.2],
            ["integrateddynamics:crystalized_menril_chunk", 0.2],
            ["integrateddynamics:menril_berries", 0.1],
            ["minecraft:stick", 0.1]
        ]).shearsResult("integrateddynamics:menril_leaves")
        .id('cloche:menril_sapling')


    // List of seeds to KEEP
    const allowedSeeds = [
        'nether_star_seeds',
        'dragon_egg_seeds',
        'experience_seeds',
        'inferium_seeds',
        'fire_seeds',
        'water_seeds',
        'earth_seeds',
        'air_seeds',
        'nature_seeds'
    ]

    // Remove all Mystical Agriculture cloche recipes except allowed ones
    event.forEachRecipe({ id: /bblcompat:cloche\/mysticalagriculture\/.+/ }, recipe => {
        let recipeId = recipe.getId()

        let seedName = recipeId.replace('bblcompat:cloche/mysticalagriculture/', '').replace('_seed', '_seeds')

        if (!allowedSeeds.some(allowed => recipeId.includes(allowed.replace('_seeds', '_seed')))) {
            event.remove({ id: recipeId })
        }
    })

    const registerClocheRecipe = (event, leafItem) => {
        const name = leafItem.split(':')[1];

        const logItem = leafItem.replace('_leaves', '_log');

        event.recipes.cloche.cloche(
            leafItem,
            logItem,
            300,
            [[leafItem]]
        ).id(`cloche:${name}`);
    };

    // List of all leaves
    const leaves = [
        'minecraft:oak_leaves', 'minecraft:spruce_leaves', 'minecraft:birch_leaves',
        'minecraft:jungle_leaves', 'minecraft:acacia_leaves', 'minecraft:dark_oak_leaves',
        'minecraft:mangrove_leaves', 'minecraft:cherry_leaves', 'colors:blue_leaves',
        'colors:brown_leaves', 'colors:cyan_leaves', 'colors:gray_leaves',
        'colors:green_leaves', 'colors:light_blue_leaves', 'colors:light_gray_leaves',
        'colors:lime_leaves', 'colors:magenta_leaves', 'colors:orange_leaves',
        'colors:pink_leaves', 'colors:purple_leaves', 'colors:red_leaves',
        'colors:white_leaves', 'colors:yellow_leaves', 'colors:black_leaves'
    ];

    leaves.forEach(leaf => registerClocheRecipe(event, leaf));
})