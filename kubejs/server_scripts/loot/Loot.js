//General Loot Table

LootJS.modifiers(event => {

    // Light Gray Asteroid
    const asteroidLoot = LootEntry.alternative(
        LootEntry.of("colors:light_gray_asteroid").matchTool("#minecraft:pickaxes"),
        LootEntry.of("2x contained:asteroid_rocks")
    )

    event.addBlockModifier("colors:light_gray_asteroid").removeLoot('*').addLoot(asteroidLoot)

    // Budding Core
    const buddingBlocks = ['ae2:damaged_budding_quartz', 'ae2:flawed_budding_quartz', 'ae2:chipped_budding_quartz', 'ae2:flawless_budding_quartz', 'minecraft:budding_amethyst', 'geore:budding_uranium', 'geore:budding_tungsten', 'geore:budding_tin', 'geore:budding_silver', 'geore:budding_platinum', 'geore:budding_osmium', 'geore:budding_zinc', 'geore:budding_uraninite', 'geore:budding_black_quartz', 'geore:budding_monazite', 'geore:budding_aluminum', 'geore:budding_lead', 'geore:budding_nickel', 'geore:budding_topaz', 'geore:budding_sapphire', 'geore:budding_ruby', 'geore:budding_ancient_debris', 'geore:budding_redstone', 'geore:budding_quartz', 'geore:budding_lapis', 'geore:budding_iron', 'geore:budding_gold', 'geore:budding_emerald', 'geore:budding_diamond', 'geore:budding_copper', 'geore:budding_coal']

    buddingBlocks.forEach(block => {
        event.addBlockModifier(block).removeLoot('*')
            .addLoot(LootEntry.of('contained:budding_core').randomChanceWithEnchantment("minecraft:looting", [0.10, 0.10, 0.15, 0.20, 0.25]))
    })

    // Sculk
    event.addBlockModifier("minecraft:sculk").removeLoot('*')
    event.addBlockModifier("minecraft:sculk_vein").removeLoot('*')
    event.addBlockModifier("minecraft:sculk_catalyst").removeLoot('*')
    event.addBlockModifier("minecraft:sculk_sensor").removeLoot('*')
    event.addBlockModifier("minecraft:sculk_shrieker").removeLoot('*')

    //Certus Crystals
    event.addBlockModifier("ae2:small_quartz_bud").removeLoot('ae2:certus_quartz_dust')
    event.addBlockModifier("ae2:medium_quartz_bud").removeLoot('ae2:certus_quartz_dust')
    event.addBlockModifier("ae2:large_quartz_bud").removeLoot('ae2:certus_quartz_dust')

    //Magma Cube
    event.addEntityModifier("minecraft:magma_cube").addLoot("minecraft:magma_cream")

    // Warden
    event.addEntityModifier("minecraft:warden").addLoot("contained:wardens_heart")

    //Dragon Toy
    event.addBlockModifier("dragon_toy:dragon_toy").removeLoot('*').addLoot("8x contained:chaos_shard")

})

