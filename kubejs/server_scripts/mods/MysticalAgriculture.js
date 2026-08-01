// Mystical Agriculture 

ServerEvents.recipes(event => {

    //Replace Inputs
    event.replaceInput({ id: 'mysticalagriculture:awakening_altar' }, 'minecraft:orange_wool', 'contained:elemental_essence')
    event.replaceInput({ id: 'mysticalagriculture:awakening_altar' }, 'mysticalagriculture:soulstone', 'colors:brown_asteroid')
    event.replaceInput({ id: 'mysticalagriculture:awakening_pedestal' }, 'minecraft:orange_wool', 'contained:elemental_essence')
    event.replaceInput({ id: 'mysticalagriculture:awakening_pedestal' }, 'mysticalagriculture:soulstone', 'colors:brown_asteroid')
    event.replaceInput({ id: 'mysticalagriculture:essence_vessel' }, 'minecraft:gold_ingot', 'contained:elemental_essence')
    event.replaceInput({ id: 'mysticalagriculture:essence_vessel' }, 'mysticalagriculture:soulstone', 'colors:brown_asteroid')
    event.replaceInput({ id: 'mysticalagriculture:upgrade_base' }, 'minecraft:diamond', 'powah:steel_energized')
    event.replaceInput({ id: 'mysticalautomation:infuser' }, 'minecraft:diamond', 'oritech:heisenberg_compensator')
    event.replaceInput({ id: 'mysticalautomation:infusion_altarnator' }, 'mysticalagriculture:soulium_ingot', 'contained:elemental_essence')

    //Remove
    event.remove({ id: 'matc:inferium_crystal' })
    event.remove({ id: 'matc:prudentium_crystal' })
    event.remove({ id: 'matc:tertium_crystal' })
    event.remove({ id: 'matc:imperium_crystal' })
    event.remove({ id: 'matc:supremium_crystal' })
    event.remove({ id: 'matc:insanium_essence' })
    event.remove({ id: 'matc:master_infusion_crystal' })

    event.remove({ id: 'mysticalautomation:farmer' })

    event.remove({ id: 'mysticalagradditions:insanium_essence' })
    event.remove({ id: 'mysticalagriculture:inferium_seeds' })
    event.remove({ id: 'mysticalagriculture:fire_agglomeratio' })
    event.remove({ id: 'mysticalagriculture:air_agglomeratio' })
    event.remove({ id: 'mysticalagriculture:water_agglomeratio' })
    event.remove({ output: 'mysticalagriculture:nature_agglomeratio', mod: 'mysticalagriculture' })

    //Remove all mystical seed infusion recipes except allowed ones
    event.remove({ id: /mysticalagriculture:seed\/infusion\/(?!water|fire|air|earth).*/ })

    //Remove all seed reprocessor recipes except allowed ones
    event.remove({ id: /mysticalagriculture:seed\/reprocessor\/(?!water|fire|air|earth|nature|inferium|nether_star|dragon_egg|experience).*/ })

    // Explicitly remove the mod's original recipes for crops we replace with custom altar recipes
    event.remove({ id: 'mysticalagriculture:seed/infusion/nature' })
    event.remove({ id: 'mysticalagriculture:seed/infusion/inferium' })

    //Remove essence recipes for unwanted essences
    const allowedEssences = [
        'mysticalagriculture:nether_star_essence',
        'mysticalagriculture:dragon_egg_essence',
        'mysticalagriculture:inferium_essence',
        'mysticalagriculture:prudentium_essence',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:imperium_essence',
        'mysticalagriculture:supremium_essence',
        'mysticalagradditions:insanium_essence',
        'mysticalagriculture:awakened_supremium_essence',
        'mysticalagriculture:fire_essence',
        'mysticalagriculture:water_essence',
        'mysticalagriculture:earth_essence',
        'mysticalagriculture:air_essence',
        'mysticalagriculture:nature_essence',
        'mysticalagriculture:experience_essence',
        'contained:elemental_essence',
        'mysticalagriculture:deepslate_essence',
        'mysticalagriculture:sky_stone_essence'
    ]

    // Essences fully removed from the pack - kill any recipe that requires them, regardless of recipe type
    const removedEssences = [
        'mysticalagriculture:menril_essence',
        'mysticalagriculture:end_essence',
        'mysticalagriculture:dirt_essence',
        'mysticalagriculture:nether_essence',
        'mysticalagriculture:wood_essence',
        'mysticalagriculture:stone_essence'
    ]

    Ingredient.of('#mysticalagriculture:essences').itemIds.forEach(essence => {
        if (!allowedEssences.includes(essence)) {
            event.remove({ input: essence, mod: 'mysticalagriculture' })
            event.remove({ output: essence, mod: 'mysticalagriculture' })
        }
    })

    removedEssences.forEach(essence => {
        event.remove({ input: essence, mod: 'mysticalagriculture' })
        event.remove({ output: essence, mod: 'mysticalagriculture' })
    })

    // Exact leftover essence recipes that survived the generic cleanup above
    const removedEssenceRecipeIds = [
        'mysticalagriculture:essence/minecraft/oak_sapling',
        'mysticalagriculture:essence/minecraft/jungle_sapling',
        'mysticalagriculture:essence/minecraft/crimson_fungus',
        'mysticalagriculture:essence/minecraft/podzol',
        'mysticalagriculture:essence/minecraft/chorus_fruit',
        'mysticalagriculture:essence/minecraft/warped_fungus',
        'mysticalagriculture:essence/minecraft/red_mushroom',
        'mysticalagriculture:essence/minecraft/birch_sapling',
        'mysticalagriculture:essence/minecraft/brown_mushroom',
        'mysticalagriculture:essence/minecraft/acacia_sapling',
        'mysticalagriculture:essence/minecraft/cherry_sapling',
        'mysticalagriculture:essence/minecraft/dark_oak_sapling',
        'mysticalagriculture:essence/minecraft/crimson_nylium',
        'mysticalagriculture:essence/minecraft/nether_wart',
        'mysticalagriculture:essence/minecraft/grass_block',
        'mysticalagriculture:essence/minecraft/mangrove_propagule',
        'mysticalagriculture:essence/minecraft/mycelium',
        'mysticalagriculture:essence/minecraft/warped_nylium',
        'mysticalagriculture:essence/minecraft/spruce_sapling',
        'mysticalagriculture:essence/integrateddynamics/menril_sapling',
        'mysticalagriculture:essence/minecraft/soul_soil',
        'mysticalagriculture:essence/minecraft/clay_ball',
        'mysticalagriculture:essence/minecraft/mud',
        'mysticalagriculture:essence/minecraft/pointed_dripstone',
        'mysticalagriculture:essence/minecraft/dripstone',
        'mysticalagriculture:essence/minecraft/red_sand',
        'mysticalagriculture:essence/minecraft/soul_sand',
        'mysticalagriculture:essence/minecraft/sand',
        'mysticalagriculture:essence/minecraft/tuff',
        'mysticalagriculture:essence/minecraft/flint'
    ]

    removedEssenceRecipeIds.forEach(id => {
        event.remove({ id: id })
    })

    //Crystalore Portal Frame
    addAwakeningAltarRecipe('contained:cindrath_portal_frame',
        'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian',
        'mysticalagriculture:fire_essence', 2, 'mysticalagriculture:earth_essence', 2,
        'mysticalagriculture:air_essence', 2, 'mysticalagriculture:water_essence', 2,
        'contained:crystalore_portal_frame', 1)

    //Fractoria Portal Frame
    addAwakeningAltarRecipe('contained:crystalore_portal_frame',
        'oritech:flux_gate', 'oritech:flux_gate', 'oritech:flux_gate', 'oritech:flux_gate',
        'mysticalagriculture:fire_essence', 20, 'mysticalagriculture:earth_essence', 20,
        'mysticalagriculture:air_essence', 20, 'mysticalagriculture:water_essence', 20,
        'contained:fractoria_portal_frame', 1)

    //Master Infusion Crystal
    addAwakeningAltarRecipe('matc:supremium_crystal',
        'matc:inferium_crystal', 'matc:prudentium_crystal', 'matc:tertium_crystal', 'matc:imperium_crystal',
        'mysticalagriculture:fire_essence', 40, 'mysticalagriculture:earth_essence', 40,
        'mysticalagriculture:air_essence', 40, 'mysticalagriculture:water_essence', 40,
        'mysticalagriculture:master_infusion_crystal', 1)


    //Mystical Furnace
    event.shaped('mysticalagriculture:furnace', ['AAA', 'ABA', 'BBB'], {
        A: 'colors:light_gray_asteroid',
        B: 'justdirethings:charcoal'
    }).id('mysticalagriculture:furnace')


    //Infusion Pedestal
    event.shaped('mysticalagriculture:infusion_pedestal', ['ABA', ' C ', 'CDC'], {
        A: 'contained:yellow_asteroid_dust',
        B: 'contained:red_asteroid_dust',
        C: 'minecraft:stone',
        D: '#c:ingots/silver'
    }).id('mysticalagriculture:infusion_pedestal')


    //Infusion Altar
    event.shaped('mysticalagriculture:infusion_altar', ['ABA', ' C ', 'CDC'], {
        A: 'contained:yellow_asteroid_dust',
        B: 'contained:mysterious_red_asteroid_dust',
        C: 'minecraft:stone',
        D: 'minecraft:coal_block'
    }).id('mysticalagriculture:infusion_altar')


    //Earth Agglomeratio
    addAltarRecipe('mysticalagriculture:prudentium_essence',
        'contained:earth_drop', 'contained:brown_asteroid_dust', 'contained:earth_drop', 'contained:brown_asteroid_dust',
        'contained:earth_drop', 'contained:brown_asteroid_dust', 'contained:earth_drop', 'contained:brown_asteroid_dust',
        'mysticalagriculture:earth_agglomeratio', 1)

    //Air Agglomeratio
    addAltarRecipe('mysticalagriculture:prudentium_essence',
        'contained:dry_drop', 'contained:yellow_asteroid_dust', 'contained:dry_drop', 'contained:yellow_asteroid_dust',
        'contained:dry_drop', 'contained:yellow_asteroid_dust', 'contained:dry_drop', 'contained:yellow_asteroid_dust',
        'mysticalagriculture:air_agglomeratio', 1)

    //Water Agglomeratio
    addAltarRecipe('mysticalagriculture:prudentium_essence',
        'contained:water_drop', 'contained:blue_asteroid_dust', 'contained:water_drop', 'contained:blue_asteroid_dust',
        'contained:water_drop', 'contained:blue_asteroid_dust', 'contained:water_drop', 'contained:blue_asteroid_dust',
        'mysticalagriculture:water_agglomeratio', 1)

    //Fire Agglomeratio
    addAltarRecipe('mysticalagriculture:prudentium_essence',
        'contained:lava_drop', 'contained:red_asteroid_dust', 'contained:lava_drop', 'contained:red_asteroid_dust',
        'contained:lava_drop', 'contained:red_asteroid_dust', 'contained:lava_drop', 'contained:red_asteroid_dust',
        'mysticalagriculture:fire_agglomeratio', 1)

    //Nature Agglomeratio
    addAltarRecipe('mysticalagriculture:prudentium_essence',
        'contained:water_drop', 'contained:bio_spores', 'contained:earth_drop', 'contained:bio_spores',
        'contained:water_drop', 'contained:bio_spores', 'contained:earth_drop', 'contained:bio_spores',
        'mysticalagriculture:nature_agglomeratio', 1)

    //Nature Seeds
    addAltarRecipe('contained:bio_spores',
        'mysticalagriculture:prudentium_essence', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:nature_agglomeratio',
        'mysticalagriculture:prudentium_essence', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:nature_agglomeratio',
        'mysticalagriculture:nature_seeds', 1)

    //Inferium Seeds
    addAltarRecipe('contained:bio_spores',
        'mysticalagriculture:inferium_essence', 'mysticalagriculture:inferium_essence', 'mysticalagriculture:inferium_essence', 'mysticalagriculture:inferium_essence',
        'mysticalagriculture:inferium_essence', 'mysticalagriculture:inferium_essence', 'mysticalagriculture:inferium_essence', 'mysticalagriculture:inferium_essence',
        'mysticalagriculture:inferium_seeds', 1)

    //Inferium Crystal
    addAltarRecipe('powah:crystal_blazing',
        'mysticalagriculture:inferium_essence', 'mysticalagriculture:prosperity_shard', 'mysticalagriculture:inferium_essence', 'mysticalagriculture:prosperity_shard',
        'mysticalagriculture:inferium_essence', 'mysticalagriculture:prosperity_shard', 'mysticalagriculture:inferium_essence', 'mysticalagriculture:prosperity_shard',
        'matc:inferium_crystal', 1)

    //Prudentium Crystal
    addAltarRecipe('minecraft:diamond',
        'mysticalagriculture:prudentium_essence', 'minecraft:emerald', 'mysticalagriculture:prudentium_essence', 'minecraft:emerald',
        'mysticalagriculture:prudentium_essence', 'minecraft:emerald', 'mysticalagriculture:prudentium_essence', 'minecraft:emerald',
        'matc:prudentium_crystal', 1)

    //Tertium Crystal
    addAltarRecipe('ae2:certus_quartz_crystal',
        'mysticalagriculture:tertium_essence', 'ae2:fluix_block', 'mysticalagriculture:tertium_essence', 'ae2:fluix_block',
        'mysticalagriculture:tertium_essence', 'ae2:fluix_block', 'mysticalagriculture:tertium_essence', 'ae2:fluix_block',
        'matc:tertium_crystal', 1)

    //Imperium Crystal
    addAltarRecipe('minecraft:quartz',
        'mysticalagriculture:imperium_essence', 'minecraft:glowstone', 'mysticalagriculture:imperium_essence', 'minecraft:glowstone',
        'mysticalagriculture:imperium_essence', 'minecraft:glowstone', 'mysticalagriculture:imperium_essence', 'minecraft:glowstone',
        'matc:imperium_crystal', 1)

    //Supremium Crystal
    addAltarRecipe('minecraft:nether_star',
        'mysticalagriculture:supremium_essence', 'oritech:overcharged_crystal', 'mysticalagriculture:supremium_essence', 'oritech:overcharged_crystal',
        'mysticalagriculture:supremium_essence', 'oritech:overcharged_crystal', 'mysticalagriculture:supremium_essence', 'oritech:overcharged_crystal',
        'matc:supremium_crystal', 1)

    //Brown Asteroid
    addAltarRecipe('colors:light_gray_asteroid',
        'contained:black_asteroid_dust', 'contained:orange_asteroid_dust', 'contained:black_asteroid_dust', 'contained:orange_asteroid_dust',
        'contained:black_asteroid_dust', 'contained:orange_asteroid_dust', 'contained:black_asteroid_dust', 'contained:orange_asteroid_dust',
        'colors:brown_asteroid', 1)

    //Experience seeds
    addAltarRecipe('contained:impressional_gem',
        'powah:crystal_spirited', 'powah:crystal_spirited', 'powah:crystal_spirited', 'powah:crystal_spirited',
        'powah:crystal_spirited', 'powah:crystal_spirited', 'powah:crystal_spirited', 'powah:crystal_spirited',
        'mysticalagriculture:experience_seeds', 1)

    //Altar Function
    function addAltarRecipe(mainInput, input1, input2, input3, input4, input5, input6, input7, input8, output, count) {

        event.custom({
            "type": "mysticalagriculture:infusion",
            "ingredients": [
                { "item": input1 },
                { "item": input2 },
                { "item": input3 },
                { "item": input4 },
                { "item": input5 },
                { "item": input6 },
                { "item": input7 },
                { "item": input8 }
            ],
            "input": {
                "item": mainInput
            },
            "result": {
                "count": count,
                "id": output
            }
        }).id(`mysticalagriculture:infusion/${output.replace(':', '_')}`)
    }

    //Awakening Altar
    function addAwakeningAltarRecipe(mainInput, input1, input2, input3, input4,
        essence1, essence1Count, essence2, essence2Count,
        essence3, essence3Count, essence4, essence4Count,
        output, count) {

        event.custom({
            "type": "mysticalagriculture:awakening",
            "essences": [
                {
                    "id": essence1,
                    "count": essence1Count
                },
                {
                    "id": essence2,
                    "count": essence2Count
                },
                {
                    "id": essence3,
                    "count": essence3Count
                },
                {
                    "id": essence4,
                    "count": essence4Count
                }
            ],
            "input": {
                "item": mainInput
            },
            "ingredients": [
                {
                    "item": input1
                },
                {
                    "item": input2
                },
                {
                    "item": input3
                },
                {
                    "item": input4
                }
            ],
            "result": {
                "id": output,
                "count": count
            }
        }).id(`mysticalagriculture:awakening/${output.replace(':', '_')}`)
    }

})