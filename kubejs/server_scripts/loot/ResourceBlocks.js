//Resource Blocks Loot Tables

LootJS.modifiers(event => {
    
    //Mysterious End Stone
    event.addBlockModifier(`contained:mysterious_end_stone`).removeLoot('*')
        .addLoot(LootEntry.of("minecraft:end_stone").randomChance(0.9))
        .addLoot(LootEntry.of("minecraft:chorus_fruit").randomChance(0.1)).applyOreBonus("minecraft:fortune")
    
    //Mysterious Oil Block
    event.addBlockModifier(`contained:mysterious_oil_block`).removeLoot('*')
        .addLoot(LootEntry.of("contained:oil_drop").applyOreBonus("minecraft:fortune"))

    //Mysterious Biomass Block
    let saplings = ["minecraft:oak_sapling", 
        "minecraft:spruce_sapling", 
        "minecraft:birch_sapling", 
        "minecraft:jungle_sapling", 
        "minecraft:acacia_sapling", 
        "minecraft:dark_oak_sapling",
        "minecraft:cherry_sapling",
        "minecraft:mangrove_propagule",
        "integrateddynamics:menril_sapling"
    ]
    //Mysterious Biomass Block
    event.addBlockModifier(`contained:mysterious_biomass_block`).removeLoot('*')
        saplings.forEach(sapling => {
            event.addBlockModifier(`contained:mysterious_biomass_block`)
            .addLoot(LootEntry.of(sapling).randomChance(0.1).applyOreBonus("minecraft:fortune"))
        })

    //Mysterious Organic Compost
    event.addBlockModifier("contained:mysterious_organic_compost").removeLoot('*')
        .addLoot(LootEntry.of("contained:organic_powder").randomChance(0.6)).applyOreBonus("minecraft:fortune")
        .addLoot(LootEntry.of("contained:water_drop").withWeight(0.1)).applyOreBonus("minecraft:fortune")
        .addLoot(LootEntry.of("colors:light_gray_planks").withWeight(0.1)).applyOreBonus("minecraft:fortune")
    
    //Mysterious Sky Stone Block
    event.addBlockModifier(`contained:mysterious_sky_stone_block`).removeLoot('*')
        .addLoot(LootEntry.of('mysticalagriculture:deepslate_essence').randomChance(0.5).applyOreBonus("minecraft:fortune"))
        .addLoot(LootEntry.of('mysticalagriculture:sky_stone_essence').randomChance(0.5).applyOreBonus("minecraft:fortune"))

    //Mysterious Asteroids
    colors.forEach(color => {
        if (color == "light_gray") return //Skip Light Gray Asteroid

        event.addBlockModifier(`contained:mysterious_${color}_asteroid`).removeLoot('*')
            .addLoot(LootEntry.of(`colors:${color}_asteroid`))
    })

    //Light Gray Asteroid
    event.addBlockModifier("contained:mysterious_light_gray_asteroid").removeLoot('*')
        .addLoot(LootEntry.of("colors:light_gray_asteroid").randomChance(0.75))
        .addLoot(LootEntry.of("contained:organic_powder").randomChance(0.1)).applyOreBonus("minecraft:fortune")
        .addLoot(LootEntry.of("contained:asteroid_rocks").randomChance(0.1)).applyOreBonus("minecraft:fortune")
})



