//priority: 10


Platform.getInfo('contained').name = 'Contained'

StartupEvents.registry('item', event => {

  //9x9 Rooms Keys
  add9x9rooms("organic_room_key", "contained:organic_room", "Lockpick: Organic Room")
  add9x9rooms("additional_asteroids", "contained:additional_asteroids", "Lockpick: Additional Asteroids")
  add9x9rooms("glass_roof_room_key", "contained:glass_roof_room", "Iron Key: Glass Roof Room")
  add9x9rooms("open_space_key", "contained:open_space", "Iron Key: Open Space")
  add9x9rooms("end_portal_key", "contained:end_portal", "Iron Key: End Portal")
  add9x9rooms("gatekeeper_key", "contained:gatekeeper", "Awakened Draconium Key: Chaos Gatekeeper")
  add9x9rooms("chaos_key", "contained:chaos", "Iron Key: Chaos Guardian")

  //9x9 Rooms Function
  function add9x9rooms(name, templateID, displayName) {
    event.create(`contained:${name}`, "roomopolis_key")
      .templateId(templateID)
      .keyBlock("roomopolis:room_key_block")
      .heightAdjustment(2)
      .consumeKey(true)
      .removeDoor(true)
      .blocksRequired(false)
      .displayName(displayName)
      .doorLeft(1)
      .doorRight(1)
      .doorUp(1)
      .doorDown(1)
  }

  event.create(`contained:chaos_crystal`, "roomopolis_key")
    .templateId("contained:chaos_crystal")
    .keyBlock("contained:awakened_draconium_lock")
    .heightAdjustment(1)
    .consumeKey(true)
    .removeDoor(true)
    .blocksRequired(false)
    .displayName("Awakened Draconium Key: Chaos Crystal")
    .doorLeft(1)
    .doorRight(1)
    .doorUp(1)
    .doorDown(1)
    .frontAdjustment(-1)
    .overrideExistingBlocks(true)

  //Space Suit
  event.create("contained:space_suit_helmet", "helmet").material("contained:space_suit").tag('contained:space_suit_helmets')
  event.create("contained:space_suit_chestplate", "chestplate").material("contained:space_suit").tag('contained:space_suit_chestplates')
  event.create("contained:space_suit_leggings", "leggings").material("contained:space_suit").tag('contained:space_suit_leggings')
  event.create("contained:space_suit_boots", "boots").material("contained:space_suit").tag('contained:space_suit_boots')

  //Asteroid Tools
  event.create("contained:asteroid_pickaxe", "pickaxe").tier("stone")
  event.create("contained:asteroid_axe", "axe").tier("stone")
  event.create("contained:asteroid_shovel", "shovel").tier("stone")
  event.create("contained:asteroid_sword", "sword").tier("stone")
  event.create("contained:asteroid_hoe", "hoe").tier("stone")

  event.create("contained:asteroid_hammer").maxDamage(102).tag('contained:hammers')
  event.create("contained:iron_hammer").maxDamage(512).tag('contained:hammers')
  event.create("contained:ferricore_hammer").maxDamage(1024).tag('contained:hammers')

  //Misc Items
  event.create("contained:asteroid_rod").tag("c:rods/asteroid").tag("c:rods")
  event.create("contained:glass_shard")
  event.create("contained:organic_powder")
  event.create("contained:lava_drop")
  event.create("contained:water_drop")
  event.create("contained:dry_drop")
  event.create("contained:earth_drop")
  event.create("contained:oil_drop")
  event.create("contained:dirt_pile")
  event.create("contained:solar_panel")
  event.create("contained:iron_key")
  event.create("contained:awakened_draconium_key")
  event.create("contained:blaze_key").maxDamage(16)
  event.create("contained:bio_spores")
  event.create("contained:bio_sapling")
  event.create("contained:elemental_essence")
  event.create("contained:certus_quartz_shard").displayName("Certus Quartz Geore Shard")
  event.create("contained:budding_core")
  event.create("contained:wardens_heart")
  event.create("contained:budding_heart")
  event.create("contained:impressional_gem")
  event.create("contained:sculk_collector").maxDamage(124)
  event.create("contained:chaos_shard").displayName("Chaos Shard?")
  event.create("contained:overworld_crystal")
  event.create("contained:mini_overworld")
  event.create("contained:mini_resource_cluster_1")
  event.create("contained:mini_resource_cluster_2")
  event.create("contained:completed_mini_resource_cluster")
  event.create("contained:exotic_blazing_cinderstone")
  event.create("contained:exotic_crystalline_quartz")
  event.create("contained:exotic_ancient_ingot")
  event.create("contained:exotic_resource_cluster")
  event.create("contained:mysterious_gateway_pearl")
  event.create("contained:catalog").tag('shops:catalogs').texture("minecraft:item/enchanted_book").maxStackSize(1)

  //Resources
  event.create("contained:primal_steel_ingot").tag("c:ingots/primal_steel").tag("c:ingots")
  event.create("contained:primal_steel_nugget").tag("c:nuggets/primal_steel").tag("c:nuggets")
  event.create("contained:primal_steel_dust").tag("c:dusts/primal_steel").tag("c:dusts")
  event.create("contained:obsidian_dust").tag("c:dusts/obsidian").tag("c:dusts")

  event.create("contained:primal_coal_dust").tag("c:dusts/primal_coal").tag("c:dusts")
  event.create("contained:ferricore_dust").tag("c:dusts/ferricore").tag("c:dusts")
  event.create("contained:small_redstone_dust")
  event.create("contained:small_lapis_dust")
  event.create("contained:lapis_dust").tag("c:dusts/lapis").tag("c:dusts")
  event.create("contained:small_silver_dust")
  event.create("contained:small_diamond_dust")
  event.create("contained:small_emerald_dust")
  event.create("contained:emerald_dust")
  event.create("contained:small_coal_dust")
  event.create("contained:small_quartz_dust")
  event.create("contained:small_certus_quartz_dust")
  event.create("contained:small_amethyst_dust")
  event.create("contained:small_uraninite_dust")
  event.create("contained:uraninite_dust")
  event.create("contained:amethyst_dust").tag("c:dusts/amethyst").tag("c:dusts")

  event.create("contained:cindrath_core_fragment")
  event.create("contained:blazing_cinderstone")
  event.create("contained:raw_crystalline_stone")
  event.create("contained:small_crystalline_dust")
  event.create("contained:crystalline_dust").tag("c:dusts/crystalline").tag("c:dusts")
  event.create("contained:crystalline_quartz").tag("c:gems/crystalline").tag("c:gems")
  event.create("contained:ancient_ashes").tag("c:dusts")
  event.create("contained:ancient_ingot").tag("c:ingots")


  //Asteroid Dust
  colors.forEach(color => {
    event.create(`contained:${color}_asteroid_dust`).tag(`c:dusts/${color}_asteroid`).tag('bblcore:banned_from_coloring')
    event.create(`contained:mysterious_${color}_asteroid_dust`).tag(`c:dusts/${color}_asteroid`).glow(true).tag('bblcore:banned_from_coloring')
  })

  //Mysterious Dust
  event.create("contained:mysterious_organic_powder").glow(true)
  event.create("contained:mysterious_powder").glow(true)

  //Food stuff
  event.create("contained:asteroid_rocks").food(1, 0.5).tooltip(Text.translate("tooltip.asteroid.rocks"))
  event.create("contained:roasted_rocks").food(3, 0.5).tooltip(Text.translate("tooltip.roasted.rocks"))
  event.create("contained:stone_bowl")
  event.create("contained:goo_bowl_t1")
    .displayName("Primogel goo stew")
    .tooltip(Text.translate("tooltip.goo.t11"))
    .tooltip(Text.translate("tooltip.goo.t12"))
    .food(food => {
      food
        .nutrition(4)
        .saturation(1)
        .alwaysEdible(true)
        .effect("minecraft:haste", 300*20, 0, 1.0)
        .effect("minecraft:speed", 300*20, 0, 1.0)
        // .usingConvertsTo("contained:stone_bowl") // doesn't seem to work :(
        .eaten(ctx => {
          ctx.player.give(Item.of("contained:stone_bowl", 1))
        })
    })

  //Food stuff
  event.create("contained:rocky_soup")
    .displayName("Rocky Soup")
    .tooltip(Text.translate("tooltip.rocky.soup"))
    .food(food => {
      food
        .nutrition(6)
        .saturation(1)
        .eaten(ctx => {
          ctx.player.give(Item.of("contained:stone_bowl", 1))
        })
    })

  event.create("contained:goo_bowl_t2")
    .displayName("Blazebloom goo stew")
    .tooltip(Text.translate("tooltip.goo.t21"))
    .tooltip(Text.translate("tooltip.goo.t22"))
    .tooltip(Text.translate("tooltip.goo.t23"))
    .food(food => {
      food
        .nutrition(9)
        .saturation(1)
        .alwaysEdible(true)
        .effect("minecraft:haste", 300*20, 1, 1.0)
        .effect("minecraft:speed", 300*20, 1, 1.0)
        .effect("minecraft:fire_resistance", 300*20, 0, 1.0)
        .eaten(ctx => {
          ctx.player.give(Item.of("contained:stone_bowl", 1))
        })
    })

  event.create("contained:goo_bowl_t3")
    .displayName("Voidshimmer goo stew")
    .tooltip(Text.translate("tooltip.goo.t31"))
    .tooltip(Text.translate("tooltip.goo.t32"))
    .tooltip(Text.translate("tooltip.goo.t33"))
    .tooltip(Text.translate("tooltip.goo.t34"))
    .tooltip(Text.translate("tooltip.goo.t35"))
    .tooltip(Text.translate("tooltip.goo.t36"))
    .food(food => {
      food
        .nutrition(15)
        .saturation(1)
        .alwaysEdible(true)
        .effect("minecraft:haste", 300*20, 2, 1.0)
        .effect("minecraft:speed", 300*20, 2, 1.0)
        .effect("minecraft:fire_resistance", 300*20, 0, 1.0)
        .effect("minecraft:night_vision", 300*20, 0, 1.0)
        .eaten(ctx => {
          ctx.player.give(Item.of("contained:stone_bowl", 1))
        })
    })

  event.create("contained:goo_bowl_t4")
    .displayName("Shadowpulse goo stew")
    .tooltip(Text.translate("tooltip.goo.t41"))
    .tooltip(Text.translate("tooltip.goo.t42"))
    .tooltip(Text.translate("tooltip.goo.t43"))
    .tooltip(Text.translate("tooltip.goo.t44"))
    .tooltip(Text.translate("tooltip.goo.t45"))
    .tooltip(Text.translate("tooltip.goo.t46"))
    .food(food => {
      food
        .nutrition(20)
        .saturation(1)
        .alwaysEdible(true)
        .effect("minecraft:haste", 300*20, 3, 1.0)
        .effect("minecraft:speed", 300*20, 3, 1.0)
        .effect("minecraft:fire_resistance", 300*20, 0, 1.0)
        .effect("minecraft:night_vision", 300*20, 0, 1.0)
        .effect("minecraft:resistance", 300*20, 1, 1.0)
        .effect("minecraft:strength", 300*20, 1, 1.0)
        // .usingConvertsTo("contained:stone_bowl") // doesn't seem to work :(
        .eaten(ctx => {
          ctx.player.give(Item.of("contained:stone_bowl", 1))
        })
    })

  //Infinity Drives
  event.create("contained:infinity_sand_drive", 'infinity_drive').infinityStack("minecraft:sand")
  event.create("contained:infinity_gravel_drive", 'infinity_drive').infinityStack("minecraft:gravel")
  event.create("contained:infinity_dirt_drive", 'infinity_drive').infinityStack("minecraft:dirt")
  event.create("contained:infinity_stone_drive", 'infinity_drive').infinityStack("minecraft:stone")

})


StartupEvents.registry('armor_material', event => {

  event.create('contained:space_suit').defense({ "boots": 0, "leggings": 1, "chestplate": 1, "helmet": 0, "body": 1 })
  event.create('contained:ferricore_space_suit').defense({ "boots": 1, "leggings": 3, "chestplate": 4, "helmet": 2, "body": 4 })
  event.create('contained:blazegold_space_suit').defense({ "boots": 2, "leggings": 4, "chestplate": 5, "helmet": 3, "body": 5 })
  event.create('contained:celestigem_space_suit').defense({ "boots": 4, "leggings": 5, "chestplate": 7, "helmet": 5, "body": 5 })

})
