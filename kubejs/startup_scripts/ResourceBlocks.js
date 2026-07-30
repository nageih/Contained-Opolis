StartupEvents.registry('block', event => {

    //Mysterious Oil Block
    event.create("contained:mysterious_oil_block", 'bblcore_resource_block')
        .dropHeightModifier(1)
        .toolToCollectTheBlock('contained:asteroid_hammer')
        .tagBlock("minecraft:mineable/shovel")
        .tagBlock("minecraft:needs_iron_tool")
        .requiresTool(true)
        .sandSoundType()
        .hardness(18.0)

    //Mysterious Organic Compost
    event.create("contained:mysterious_organic_compost", 'bblcore_resource_block')
        .dropHeightModifier(1)
        .toolToCollectTheBlock('contained:asteroid_hammer')
        .tagBlock("minecraft:mineable/shovel")
        .tagBlock("minecraft:needs_iron_tool")
        .requiresTool(true)
        .sandSoundType()
        .hardness(7.0)

    //Mysterious Biomass Block
    event.create("contained:mysterious_biomass_block", 'bblcore_resource_block')
        .dropHeightModifier(1)
        .toolToCollectTheBlock('contained:asteroid_hammer')
        .tagBlock("minecraft:mineable/shovel")
        .tagBlock("minecraft:needs_iron_tool")
        .requiresTool(true)
        .sandSoundType()
        .hardness(7.0)
    
    //Mysterious Sky Stone Block
    event.create("contained:mysterious_sky_stone_block", 'bblcore_resource_block')
        .dropHeightModifier(1)
        .toolToCollectTheBlock('contained:asteroid_hammer')
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool")
        .requiresTool(true)
        .hardness(7.0)

    //Mysterious Asteroids
    colors.forEach(color => {
        event.create(`contained:mysterious_${color}_asteroid`, 'bblcore_resource_block')
            .dropHeightModifier(1)
            .toolToCollectTheBlock('contained:asteroid_hammer')
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("minecraft:needs_iron_tool")
            .tagBlock("oritech:resource_nodes")
            .requiresTool(true)
            .hardness(7.0)
    })
    
    //Mysterious End Stone
          event.create(`contained:mysterious_end_stone`, 'bblcore_resource_block')
            .dropHeightModifier(1)
            .toolToCollectTheBlock('contained:asteroid_hammer')
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("minecraft:needs_diamond_tool")
            .requiresTool(true)
            .hardness(16.0)
})
