// Draconic Evolution 

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({ id: "draconicevolution:components/draconium_core" }, 'minecraft:diamond', 'woot_revived:netherite_shard')

    //Dragons Heart
    event.shaped('draconicevolution:dragon_heart', ['AAA', 'ABA', 'AAA'], { A: 'mysticalagriculture:dragon_egg_essence', B: 'contained:wardens_heart' }).id('draconicevolution:dragon_heart')

    //Iron Key: End Portal
    event.recipes.draconicevolution.fusion_crafting("contained:iron_key",
        [
            "minecraft:end_stone",
            "minecraft:end_stone",
            "minecraft:end_stone",
            "minecraft:end_stone",
            "draconicevolution:draconium_core",
            "draconicevolution:draconium_core",
            "draconicevolution:draconium_core",
            "draconicevolution:draconium_core"
        ],
        "contained:end_portal_key", "wyvern", 100000).id('contained:end_portal_key')

    //Ender Eye
    event.recipes.draconicevolution.fusion_crafting("minecraft:ender_pearl",
        [
            "minecraft:blaze_powder",
            "minecraft:blaze_powder",
            "minecraft:blaze_powder",
            "minecraft:blaze_powder",
            "draconicevolution:draconium_core"
        ],
        "minecraft:ender_eye", "wyvern", 10000).id('contained:ender_eye')

    //Awakened Draconium Key
    event.recipes.draconicevolution.fusion_crafting("contained:iron_key",
        [
            "draconicevolution:awakened_core",
            "draconicevolution:awakened_core",
            "draconicevolution:awakened_core",
            "draconicevolution:awakened_core"
        ],
        "contained:awakened_draconium_key", "draconic", 500000).id('contained:awakened_draconium_key')

    //Awakened Key: Gatekeeper Key
    event.recipes.draconicevolution.fusion_crafting("contained:awakened_draconium_key",
        [
            "minecraft:obsidian",
            "minecraft:obsidian",
            "minecraft:obsidian",
            "minecraft:obsidian",
            "minecraft:dragon_egg",
            "draconicevolution:awakened_core",
            "draconicevolution:awakened_core",
            "minecraft:dragon_head"
        ],
        "contained:gatekeeper_key", "draconic", 1000000).id('contained:gatekeeper_key')

    //Awakened Key: Chaos Crystal Key
    event.recipes.draconicevolution.fusion_crafting("contained:awakened_draconium_key",
        [
            "contained:chaos_shard",
            "contained:chaos_shard",
            "contained:chaos_shard",
            "contained:chaos_shard"
        ],
        "contained:chaos_crystal", "draconic", 1000000).id('contained:chaos_crystal')

    //Budding Time Crystal
    event.recipes.draconicevolution.fusion_crafting("#c:budding_blocks",
        [
            "contained:budding_heart",
            "contained:budding_heart",
            "contained:budding_heart",
            "contained:budding_heart",
            "contained:overworld_crystal",
            "contained:overworld_crystal",
        ],
        "justdirethings:time_crystal_budding_block", "chaotic", 10000000).id('contained:time_crystal_budding_block')

    //Overworld Portal Frame
    event.recipes.draconicevolution.fusion_crafting("justdirethings:time_crystal_block",
        [
            "draconicevolution:large_chaos_frag",
            "contained:mini_overworld",
            'refinedstorage:64k_storage_part',
            "contained:completed_mini_resource_cluster",
            "contained:cindrath_portal_frame",
            "contained:fractoria_portal_frame",
            "contained:crystalore_portal_frame",
            "mysticalagradditions:insanium_block"
        ],
        "10x contained:overworld_portal_frame", "chaotic", 100000000).id('contained:overworld_portal_frame_rs')

    event.recipes.draconicevolution.fusion_crafting("justdirethings:time_crystal_block",
        [
            "draconicevolution:large_chaos_frag",
            "contained:mini_overworld",
            'ae2:cell_component_256k',
            "contained:completed_mini_resource_cluster",
            "contained:cindrath_portal_frame",
            "contained:fractoria_portal_frame",
            "contained:crystalore_portal_frame",
            "mysticalagradditions:insanium_block"
        ],
        "10x contained:overworld_portal_frame", "chaotic", 100000000).id('contained:overworld_portal_frame_ae2')

    //Dragon Seeds
    event.recipes.draconicevolution.fusion_crafting("mysticalagriculture:prosperity_seed_base",
        [
            "minecraft:dragon_egg",
            "minecraft:dragon_egg",
        ],
        "mysticalagriculture:dragon_egg_seeds", "draconic", 5000).id('contained:dragon_seed')

    //Nether Star Seeds
    event.recipes.draconicevolution.fusion_crafting("mysticalagriculture:prosperity_seed_base",
        [
            "minecraft:nether_star",
            "minecraft:nether_star",
            "minecraft:nether_star",
            "minecraft:nether_star"
        ],
        'mysticalagriculture:nether_star_seeds', "chaotic", 5000000).id('contained:nether_star_seed')


    //Projector Dish
    event.recipes.draconicevolution.fusion_crafting('rftoolsutility:screen',
        [
            "justdirethings:time_crystal_block",
            "justdirethings:time_crystal_block",
            "justdirethings:time_crystal_block",
            "justdirethings:time_crystal_block"
        ],
        'compactcrafting:projector_dish', "chaotic", 500000).id('compactcrafting:projector_dish')

    event.recipes.draconicevolution.fusion_crafting('oritech:prometheum_ingot',
        [
            "contained:ancient_ingot_block",
            "contained:ancient_ingot_block",
            "contained:ancient_ingot_block",
            "contained:ancient_ingot_block"
        ],
        'contained:exotic_ancient_ingot', "chaotic", 512000).id("contained:exotic_ancient_ingot")

    event.recipes.draconicevolution.fusion_crafting('contained:exotic_ancient_ingot',
        [
            "contained:exotic_blazing_cinderstone",
            "contained:exotic_crystalline_quartz"
        ],
        'contained:exotic_resource_cluster', "chaotic", 512000).id("contained:exotic_resource_cluster")
})
