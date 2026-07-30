// In World Recipe

ServerEvents.recipes(event => {

  //Grass Block
  event.recipes.inworldrecipes.block_interaction("right", "minecraft:dirt", "minecraft:bone_meal", false, true, false, true).outputBlockState("minecraft:grass_block").id("contained:grass_block")

  // Sculk Collections
  const sculkBlocks = ["minecraft:sculk", "minecraft:sculk_vein", "minecraft:sculk_catalyst", "minecraft:sculk_sensor", "minecraft:sculk_shrieker"];

  sculkBlocks.forEach(block => {
    event.recipes.inworldrecipes.block_interaction("right", block, "contained:sculk_collector", true, false, false, true)
      .results([[block]])
    event.recipes.inworldrecipes.block_interaction("left", block, "contained:sculk_collector", true, false, true, true)
      .results([[block]])
  })

  // Budding Creations
  addBuddingRecipe("minecraft:amethyst_block", "minecraft:budding_amethyst");
  addBuddingRecipe("geore:uraninite_block", "geore:budding_uraninite");
  addBuddingRecipe("geore:quartz_block", "geore:budding_quartz");
  addBuddingRecipe("geore:emerald_block", "geore:budding_emerald");
  addBuddingRecipe("geore:diamond_block", "geore:budding_diamond");
  addBuddingRecipe("contained:certus_quartz_block", "ae2:flawless_budding_quartz");
  addBuddingRecipe("geore:platinum_block", "geore:budding_platinum");

  function addBuddingRecipe(input, output) {
    event.recipes.inworldrecipes.block_interaction("right", input, "contained:budding_heart", false, true, false, true).outputBlockState(output)
  }

  // Dirt to Mud (damage, consume, pop, ignoreBlockStates)
  event.recipes.inworldrecipes.block_interaction("right", "minecraft:dirt", "contained:water_drop", false, true, false, true).outputBlockState("minecraft:mud").id('contained:dirt_to_mud')

  // Blaze Key on Room Block (damage, consume, pop, ignoreBlockStates)
  event.recipes.inworldrecipes.block_interaction("right",
    "roomopolis:room_block", "contained:blaze_key", true, false, false, true).results([['contained:room_block', 0.5]]).id('contained:blaze_key_on_room_block')

  event.recipes.inworldrecipes.block_interaction("right",
    "contained:unbreakable_glass", "contained:blaze_key", true, false, false, true).results('contained:almost_unbreakable_glass').id('contained:blaze_key_on_unbreakable_block')

  event.recipes.inworldrecipes.block_interaction("right",
    "roomopolis:room_key_block", "contained:blaze_key", true, false, false, true).id('contained:blaze_key_on_room_key_block')

  //Mysterious Blocks (damage, consume, pop, ignoreBlockStates)
  colors.forEach(color => {
    event.recipes.inworldrecipes.block_interaction("right", `contained:mysterious_${color}_asteroid`, "#contained:hammers", true, false, true, true)
      .results([
        [`contained:mysterious_${color}_asteroid`]
      ]).id(`contained:mysterious_${color}_asteroid_from_hammer`)
  })

  //Mysterious Biomass Block (damage, consume, pop, ignoreBlockStates)
  event.recipes.inworldrecipes.block_interaction("right", `contained:mysterious_biomass_block`, "#contained:hammers", true, false, true, true
  ).results([
    ["contained:mysterious_biomass_block"]
  ]).id('contained:mysterious_biomass_block_from_hammer')

  //Mysterious End Stone (damage, consume, pop, ignoreBlockStates)
  event.recipes.inworldrecipes.block_interaction("right", `contained:mysterious_end_stone`, "#contained:hammers", true, false, true, true
  ).results([
    ["contained:mysterious_end_stone"]
  ]).id('contained:mysterious_end_stone_from_hammer')

  //Mysterious Sky Stone Block (damage, consume, pop, ignoreBlockStates)
  event.recipes.inworldrecipes.block_interaction("right", `contained:mysterious_sky_stone_block`, "#contained:hammers", true, false, true, true
  ).results([
    ["contained:mysterious_sky_stone_block"]
  ]).id('contained:mysterious_sky_stone_block_from_hammer')

  //Mysterious Oil Block (damage, consume, pop, ignoreBlockStates)
  event.recipes.inworldrecipes.block_interaction("right", `contained:mysterious_oil_block`, "#contained:hammers", true, false, true, true
  ).results([
    ["contained:mysterious_oil_block"]
  ]).id('contained:mysterious_oil_block_from_hammer')

  //Mysterious Organic Compost (damage, consume, pop, ignoreBlockStates)
  event.recipes.inworldrecipes.block_interaction("right", `contained:mysterious_organic_compost`, "#contained:hammers", true, false, true, true
  ).results([
    ["contained:mysterious_organic_compost"]
  ]).id('contained:mysterious_organic_compost_from_hammer')

  //Hammer on Ferricore Block
  event.recipes.inworldrecipes.block_interaction("right", "justdirethings:ferricore_block", "#contained:hammers", true, false, true, true)
    .results([["9x contained:ferricore_dust"]])
    .id('contained:ferricore_block_from_hammer')

  //Hammer on Primal Coal Block
  event.recipes.inworldrecipes.block_interaction("right", "justdirethings:coalblock_t1", "#contained:hammers", true, false, true, true)
    .results([["9x contained:primal_coal_dust"]])
    .id('contained:primal_coal_block_from_hammer')

  // Hammer on Glass
  event.recipes.inworldrecipes.block_interaction("right", "minecraft:glass", "#contained:hammers", true, false, true, true)
    .results([
      ["3x contained:glass_shard"],
      ["contained:glass_shard", 0.5]])
    .id('contained:glass_from_hammer')

  // Hammer on Light Gray Asteroid
  event.recipes.inworldrecipes.block_interaction("right", "colors:light_gray_asteroid", "#contained:hammers", true, false, true, true
  ).results([
    ["3x contained:light_gray_asteroid_dust"],
    ["contained:light_gray_asteroid_dust", 0.25]
  ]).id('contained:light_gray_asteroid_from_hammer')

  // Drop Item in Fluid to Create Clay Block
  event.custom({
    "type": "inworldrecipes:drop_item_in_fluid",
    "dropped_items": [
      {
        "count": 1,
        "item": "minecraft:mud"

      }
    ],
    "fluid": "justdirethings:polymorphic_fluid_source",
    "consume_fluid": false,
    "results": [
      {
        "item": {
          "count": 1,
          "id": "minecraft:clay"
        }
      }
    ]
  }).id(`contained:clay_block_from_mud_in_polymorphic_fluid`)

  // Polymorphic Fluid
  event.custom({
    "type": "inworldrecipes:drop_item_in_fluid_converts_fluid",
    "dropped_item":
    {
      "item": "oritech:raw_biopolymer",
    }
    ,
    "fluid": "oritech:still_biofuel",
    "new_fluid": "justdirethings:polymorphic_fluid_source",
    "destroy_items": true
  }).id('contained:polymorphic_fluid_from_raw_biopolymer_in_biofuel')

  //Paradox
  event.custom({
    "type": "inworldrecipes:right_click_on_entity_transforms_item",
    "held_item":
    {
      "item": "minecraft:diamond",
      "count": 1
    }
    ,
    "entity": "justdirethings:paradox_entity",
    "damage_held_item": false,
    "consume_held_item": true,
    "destroy_entity": false,
    "pop_item": false,
    "results": [
      {
        "item": {
          "count": 2,
          "id": "minecraft:diamond"
        }
      }
    ]
  }).id('contained:diamond_doubling_with_paradox')
})