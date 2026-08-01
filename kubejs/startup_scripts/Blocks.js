//priority: 1000
StartupEvents.registry('block', event => {

    //Awakened Draconium Lock
    event.create("contained:awakened_draconium_lock")
        .hardness(-1.0)
        .soundType("glass")

    //Unbreakable Glass
    event.create("contained:unbreakable_glass")
        .hardness(-1.0)
        .renderType("translucent")
        .notSolid()
        .soundType("glass")

    //Almost Unbreakable Glass
    event.create("contained:almost_unbreakable_glass")
        .texture("contained:block/unbreakable_glass")
        .hardness(2.0)
        .tagBlock("minecraft:mineable/pickaxe")
        .renderType("translucent")
        .notSolid()
        .soundType("glass")

    //Room Block
    event.create("contained:room_block")
        .texture("roomopolis:block/room_block")
        .hardness(2.0)
        .tagBlock("minecraft:mineable/pickaxe")
        .stoneSoundType()

    //Reflective Glass
    event.create("contained:reflective_glass")
        .hardness(1.2)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("solarcooker:solar_cooker_shining")
        .renderType("translucent")
        .notSolid()
        .soundType("glass")

    //Asteroid Sand
    event.create("contained:asteroid_sand")
        .hardness(1.2)
        .tagBlock("minecraft:mineable/shovel")
        .sandSoundType()

    //Organic Powder Block
    event.create("contained:organic_powder_block")
        .hardness(0.5)
        .tagBlock("minecraft:mineable/shovel")
        .sandSoundType()

    //Primal Steel
    event.create("contained:primal_steel_block")
        .hardness(5)
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("metal")

    //Compressed Quartz
    event.create("contained:compressed_quartz_block")
        .hardness(5)
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("stone")

    //Cindrath Portal Frame
    event.create("contained:cindrath_portal_frame")
        .hardness(5)
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("stone")

    //Crystalore Portal Frame
    event.create("contained:crystalore_portal_frame")
        .hardness(5)
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("stone")

    //Fractoria Portal Frame
    event.create("contained:fractoria_portal_frame")
        .hardness(5)
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("stone")

    //Overworld Portal Frame
    event.create("contained:overworld_portal_frame")
        .hardness(5)
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("stone")

    //Quartz Block
    event.create("contained:certus_quartz_block")
        .hardness(3)
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("amethyst")

    //Exposed cindrath core deposit
    event.create("contained:cindrath_core_deposit")
        .unbreakable()
        .soundType("amethyst")
        .tagBlock("oritech:resource_nodes")

    //Crystalline quartz deposit
    event.create("contained:crystalline_deposit")
        .unbreakable()
        .soundType("amethyst")
        .tagBlock("oritech:resource_nodes")

    //Ancient ashes deposit
    event.create("contained:ancient_ashes_deposit")
        .unbreakable()
        .soundType("amethyst")
        .tagBlock("oritech:resource_nodes")

    //Ancient Ingot Block
    event.create("contained:ancient_ingot_block")
        .hardness(5)
        .soundType("amethyst")

    //Crystalline Quartz Block
    event.create("contained:crystalline_quartz_block")
        .hardness(5)
        .soundType("amethyst")
})


BlockEvents.modification(event => {

    event.modify('colors:light_gray_asteroid', block => {
        block.destroySpeed = 0.2
        block.requiresTool = false
    })
})