// Oritech Recipe

ServerEvents.recipes(event => {

  //Fluid Addon
  event.shaped('oritech:machine_fluid_addon', [' A ', 'ABA', ' A '], { A: 'minecraft:lapis_lazuli', B: 'oritech:machine_core_1', }).id('oritech:crafting/addon/fluid')

  //Bio Generator
  event.shaped('oritech:bio_generator_block', ['AAA', 'ABA', 'CDC'], { A: '#contained:steel_ingots', B: 'oritech:packed_wheat', C: 'oritech:magnetic_coil', D: 'powah:magmator_starter' }).id('oritech:crafting/biogen')

  //Bio Mass
  event.shaped('3x oritech:biomass', ['ABA', 'BAB', 'ABA'], { A: 'contained:organic_powder', B: 'opolisutilities:mini_charcoal' }).id('oritech:crafting/biomass')

  //Electric Furnace
  event.shaped('oritech:powered_furnace_block', ['AAA', 'ABA', 'CDC'], { A: '#contained:steel_ingots', B: 'minecraft:blast_furnace', C: 'oritech:magnetic_coil', D: 'powah:magmator_starter' }).id('contained:powered_furnace')

  //Remove Recipes
  event.remove({ id: 'oritech:assembler/enderlens' })
  event.remove({ id: `oritech:assembler/compat/geore/buddingancient_debris` })
  event.remove({ id: `oritech:assembler/compat/geore/buddingblack_quartz` })
  event.remove({ id: 'oritech:crafting/pulverizer' })
  event.remove({ id: 'oritech:crafting/alloy/adamant' })
  event.remove({ id: 'oritech:crafting/alloy/electrum' })
  event.remove({ id: 'oritech:crafting/electricfurnace' })
  event.remove({ id: 'oritech:crafting/electricfurnacealt' })
  event.remove({ id: 'oritech:grinder/coal' })
  event.remove({ id: 'oritech:grinder/stone_enderic' })
  event.remove({ id: 'oritech:grinder/pearl_enderic' })
  event.remove({ id: 'oritech:grinder/compat/geore/quartzdust' })
  event.remove({ id: 'oritech:foundry/alloy/inverse/electrum' })
  event.remove({ id: 'oritech:foundry/alloy/electrum' })
  event.remove({ id: 'oritech:pulverizer/coal' })
  event.remove({ id: 'oritech:pulverizer/pearl_enderic' })
  event.remove({ id: 'oritech:pulverizer/compat/geore/quartzdust' })
  event.remove({ id: 'oritech:centrifuge/endericsculk' })
  event.remove({ id: 'oritech:centrifuge/fluid/biopolymer_biomass' })
  event.remove({ id: 'oritech:centrifuge/fluid/biopolymer_bioblock' })
  event.remove({ id: 'oritech:centrifuge/fluid/plasticoil' })
  event.remove({ id: 'oritech:centrifuge/fluid/plasticoilbetter' })
  event.remove({ id: 'oritech:centrifuge/fluid/clay' })
  event.remove({ id: 'oritech:centrifuge/compat/ae2/endericcompound' })
  event.remove({ id: 'oritech:laser/fluxite' })
  event.remove({ id: 'oritech:laser/compat/ae2/chargedquartz' })
  event.remove({ id: `oritech:laser/compat/geore/plutoniumdust` })
  event.remove({ id: `oritech:laser/plutoniumdust` })
  event.remove({ id: 'oritech:compat/powah/energizing/fluxite' })
  event.remove({ id: 'oritech:compat/powah/energizing/uranite' })
  event.remove({ id: 'oritech:compat/powah/energizing/uranite' })
  event.remove({ id: 'oritech:silicon_from_smelting_raw_silicon' })
  event.remove({ id: 'oritech:particle/diamond' })

  //Replace Recipes
  event.replaceInput({ id: 'oritech:crafting/laserarm' }, '#c:ingots/electrum', 'oritech:processing_unit')
  event.replaceInput({ id: 'oritech:crafting/centrifugealt' }, '#c:ingots/copper', '#c:ingots/nickel')
  event.replaceInput({ id: 'oritech:crafting/refinery' }, '#c:ingots/steel', '#c:ingots/electrum')
  event.replaceInput({ id: 'oritech:crafting/magnet' }, '#c:ingots/steel', '#contained:steel_ingots')
  event.replaceInput({ id: 'oritech:motor/motorcraft' }, '#c:ingots/steel', '#contained:steel_ingots')
  event.replaceInput({ id: 'oritech:crafting/stank' }, 'oritech:fluid_pipe', 'pipez:fluid_pipe')
  event.replaceInput({ id: 'oritech:crafting/crusher' }, 'oritech:flux_gate', '#contained:shard_blocks')
  event.replaceInput({ id: 'oritech:crafting/pump' }, 'oritech:silicon', 'minecraft:iron_ingot')
  event.replaceInput({ id: 'oritech:crafting/particlecontroller' }, 'minecraft:dropper', 'draconicevolution:chaotic_core')
  event.replaceInput({ id: 'oritech:crafting/extender' }, 'oritech:duratium_ingot', 'powah:steel_energized')


  //Fragement Recipes
  addFragmentRecipe('contained:impressional_gem', 'minecraft:amethyst_block', 3, 60)
  addFragmentRecipe('contained:small_quartz_dust', 'geore:quartz_block', 1, 60)
  addFragmentRecipe('contained:small_certus_quartz_dust', 'contained:certus_quartz_block', 1, 60)
  addFragmentRecipe('contained:small_diamond_dust', 'geore:diamond_block', 1, 60)
  addFragmentRecipe('contained:small_emerald_dust', 'geore:emerald_block', 1, 60)
  addFragmentRecipe('oritech:small_platinum_dust', 'geore:platinum_block', 1, 60)
  addFragmentRecipe('contained:small_uraninite_dust', 'geore:uraninite_block', 1, 60)
  addFragmentRecipe('contained:small_crystalline_dust', 'contained:raw_crystalline_stone', 3, 60)

  //Deep Drill Recipes
  addDeepDrillRecipe('alltheores:copper_dust', 'contained:mysterious_orange_asteroid')
  addDeepDrillRecipe('alltheores:iron_dust', 'contained:mysterious_light_gray_asteroid')
  addDeepDrillRecipe('alltheores:nickel_dust', 'contained:mysterious_yellow_asteroid')
  addDeepDrillRecipe('minecraft:redstone', 'contained:mysterious_red_asteroid')
  addDeepDrillRecipe('contained:lapis_dust', 'contained:mysterious_blue_asteroid')
  addDeepDrillRecipe('oritech:quartz_dust', 'contained:mysterious_gray_asteroid')
  addDeepDrillRecipe('alltheores:silver_dust', 'contained:mysterious_white_asteroid')
  addDeepDrillRecipe('oritech:coal_dust', 'contained:mysterious_black_asteroid')
  addDeepDrillRecipe('minecraft:amethyst_shard', 'contained:mysterious_purple_asteroid')
  addDeepDrillRecipe('ae2:certus_quartz_dust', 'contained:mysterious_cyan_asteroid')
  addDeepDrillRecipe('alltheores:diamond_dust', 'contained:mysterious_light_blue_asteroid')
  addDeepDrillRecipe('contained:emerald_dust', 'contained:mysterious_green_asteroid')
  addDeepDrillRecipe('alltheores:gold_dust', 'contained:mysterious_brown_asteroid')
  addDeepDrillRecipe('alltheores:platinum_dust', 'contained:mysterious_lime_asteroid')
  addDeepDrillRecipe('draconicevolution:draconium_dust', 'contained:mysterious_pink_asteroid')
  addDeepDrillRecipe('woot_revived:stygian_dust', 'contained:mysterious_magenta_asteroid')

  addDeepDrillRecipe('contained:cindrath_core_fragment', 'contained:cindrath_core_deposit')
  addDeepDrillRecipe('contained:raw_crystalline_stone', 'contained:crystalline_deposit')
  addDeepDrillRecipe('contained:ancient_ashes', 'contained:ancient_ashes_deposit')

  //Simple Pulverizer Recipes
  addPulverizerRecipe('contained:bio_spores', 'oritech:biomass_block', 1, 200)
  addPulverizerRecipe('contained:organic_powder', 'contained:bio_sapling', 1, 200)
  addPulverizerRecipe('minecraft:cobblestone', 'minecraft:stone', 1, 200)

  addPulverizerRecipe('contained:organic_powder', 'contained:dry_drop', 1, 200)
  addPulverizerRecipe('minecraft:black_dye', 'minecraft:charcoal', 1, 200)
  addPulverizerRecipe('opolisutilities:ender_pearl_fragment', 'minecraft:sculk', 1, 200)
  addPulverizerRecipe('alltheores:silver_dust', 'alltheores:silver_ingot', 1, 200)
  addPulverizerRecipe('contained:ferricore_dust', 'justdirethings:ferricore_ingot', 1, 200)
  addPulverizerRecipe('contained:primal_steel_dust', 'contained:primal_steel_ingot', 1, 200)
  addPulverizerRecipe('oritech:coal_dust', 'minecraft:coal', 1, 200)
  addPulverizerRecipe('draconicevolution:draconium_dust', 'draconicevolution:draconium_ingot', 1, 200)
  addPulverizerRecipe('draconicevolution:awakened_draconium_dust', 'draconicevolution:awakened_draconium_ingot', 1, 200)


  //Foundry Recipes 
  addFoundryRecipe('minecraft:quartz', 'oritech:quartz_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('minecraft:diamond', 'alltheores:diamond_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('minecraft:emerald', 'contained:emerald_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('powah:uraninite', 'contained:uraninite_dust', 'contained:impressional_gem', 1, 200)
  addFoundryRecipe('powah:dielectric_paste', 'minecraft:blaze_powder', 'oritech:silicon', 8, 200)
  addFoundryRecipe('alltheores:electrum_ingot', 'minecraft:gold_ingot', 'alltheores:silver_ingot', 2, 400)
  addFoundryRecipe('contained:budding_heart', 'contained:budding_core', 'contained:wardens_heart', 1, 400)
  addFoundryRecipe('contained:ancient_ingot', 'minecraft:netherite_ingot', 'contained:ancient_ashes', 1, 500)
  addFoundryRecipe('justdirethings:eclipsealloy_ingot', 'justdirethings:raw_eclipsealloy', 'draconicevolution:draconium_dust', 1, 500)

  //Asteroid Dusts
  colors.forEach(color => {
    addPulverizerRecipe(`contained:${color}_asteroid_dust`, `colors:${color}_asteroid`, 1, 100)
  })

  //Machine Core 1
  event.shaped('3x oritech:machine_core_1', ['CAC', 'A A', 'CAC'], { C: '#contained:steel_ingots', A: 'colors:light_gray_asteroid' }).id('oritech:crafting/core1')

  //Pulverizer
  event.shaped('oritech:pulverizer_block', ['AAA', 'ABA', 'CCC'], { A: 'justdirethings:ferricore_ingot', B: 'oritech:machine_core_1', C: '#contained:steel_ingots' }).id('oritech:crafting/pulverizeralt')

  //Portable Energy Storage
  event.shaped('oritech:small_storage_block', ['AAA', 'CBC', 'AAA'], {
    A: '#contained:steel_ingots',
    B: 'oritech:machine_core_1',
    C: '#contained:steel_dusts'
  }).id('oritech:crafting/smallstorage')

  //Big Solar Panel
  event.shaped('oritech:big_solar_panel_block', ['AAA', 'BCB', 'BBB'], {
    A: 'contained:solar_panel',
    B: 'justdirethings:ferricore_ingot',
    C: '#contained:steel_ingots'
  }).id('oritech:crafting/solar')

  // Draconium Dust
  addAssemblerRecipe('draconicevolution:draconium_dust', ['contained:ancient_ingot',
    'contained:crystalline_quartz', 'contained:blazing_cinderstone', 'mysticalagriculture:supremium_essence'], 3, 240)

  // Cheaper enderic lens
  addAssemblerRecipe('oritech:enderic_lens', ['oritech:adamant_ingot',
    'oritech:carbon_fibre_strands', 'minecraft:glass', 'minecraft:glass'], 1, 240)

  // Extra enderic lens
  addAssemblerRecipe('oritech:enderic_lens', ['oritech:adamant_ingot',
    'oritech:carbon_fibre_strands', 'oritech:enderic_compound', 'oritech:enderic_compound'], 4, 240)

  //Cyan Asteroid
  addAssemblerRecipe('colors:cyan_asteroid', ['colors:light_blue_asteroid', 'colors:light_blue_asteroid',
    'colors:green_asteroid', 'colors:green_asteroid'], 1, 200)

  //Purple Asteroid
  addAssemblerRecipe('colors:purple_asteroid', ['colors:blue_asteroid', 'colors:blue_asteroid',
    'colors:red_asteroid', 'colors:red_asteroid'], 1, 200)

  //Pink Asteroid
  addAssemblerRecipe('colors:pink_asteroid', ['colors:red_asteroid', 'colors:red_asteroid',
    'colors:white_asteroid', 'colors:white_asteroid'], 1, 200)

  //Magenta Asteroid
  addAssemblerRecipe('colors:magenta_asteroid', ['colors:purple_asteroid', 'colors:purple_asteroid',
    'colors:red_asteroid', 'colors:red_asteroid'], 1, 200)

  //Green Asteroid
  addAssemblerRecipe('colors:green_asteroid', ['colors:blue_asteroid', 'colors:blue_asteroid',
    'colors:yellow_asteroid', 'colors:yellow_asteroid'], 1, 200)

  //Light Blue Asteroid
  addAssemblerRecipe('colors:light_blue_asteroid', ['colors:blue_asteroid', 'colors:blue_asteroid',
    'colors:white_asteroid', 'colors:white_asteroid'], 1, 200)

  //Lime Asteroid
  addAssemblerRecipe('colors:lime_asteroid', ['colors:green_asteroid', 'colors:green_asteroid',
    'colors:white_asteroid', 'colors:white_asteroid'], 1, 200)

  //Green Dye
  addPulverizerRecipe('minecraft:green_dye', 'oritech:raw_biopolymer', 1, 200)

  // Laser Recipes
  addLaserRecipe('ae2:mysterious_cube', 'ae2:sky_stone_chest', 1, 200)
  addLaserRecipe('ae2:sky_stone_block', 'minecraft:calcite', 1, 200)
  addLaserRecipe('ae2:charged_certus_quartz_crystal', 'ae2:quartz_block', 1, 200)

  // Fluxite
  addFoundryRecipe('contained:gray_asteroid_dust', 'contained:white_asteroid_dust', 'contained:black_asteroid_dust', 2, 200)
  addFoundryRecipe('oritech:fluxite', 'ae2:fluix_crystal', 'ae2:charged_certus_quartz_crystal', 1, 200)

  // Better than strainers 
  addImprovedDustRecipe('oritech:small_copper_dust', 'contained:orange_asteroid_dust')
  addImprovedDustRecipe('oritech:small_iron_dust', 'contained:light_gray_asteroid_dust')
  addImprovedDustRecipe('contained:small_silver_dust', 'contained:white_asteroid_dust')
  addImprovedDustRecipe('oritech:small_nickel_dust', 'contained:yellow_asteroid_dust')
  addImprovedDustRecipe('contained:small_coal_dust', 'contained:black_asteroid_dust')
  addImprovedDustRecipe('contained:small_redstone_dust', 'contained:red_asteroid_dust')
  addImprovedDustRecipe('contained:small_lapis_dust', 'contained:blue_asteroid_dust')
  addImprovedDustRecipe('oritech:small_gold_dust', 'contained:brown_asteroid_dust')

  // Enderic Compound
  event.remove({ id: 'oritech:pulverizer/dust/pearl_enderic' })
  event.remove({ id: 'oritech:particle/enderic_compound' })
  event.remove({ id: 'oritech:grinder/dust/pearl_enderic' })
  event.remove({ id: 'oritech:grinder/dust/stone_enderic' })
  // Note: Dubios container is needed for superconductor -> particle accelerator, so it needs to be before enderic compound
  event.replaceInput({ id: 'oritech:motor/dubios' }, 'oritech:enderic_compound', 'minecraft:ender_pearl')
  addPulverizerRecipe('ae2:ender_dust', 'minecraft:ender_pearl', 1, 200)
  // addParticleAcceleratorRecipe('oritech:enderic_compound', ['ae2:fluix_crystal', 'minecraft:ender_pearl'], 4, 200)

  addParticleAcceleratorRecipe('contained:overworld_crystal', ['draconicevolution:chaotic_core', 'contained:exotic_resource_cluster'], 1, 1000)
  addParticleAcceleratorRecipe('contained:completed_mini_resource_cluster', ['contained:mini_resource_cluster_1', 'contained:mini_resource_cluster_2'], 1, 1000)

  // Sculk shrieker (for T4 goo)
  event.remove({ id: 'oritech:atomicforge/reinfdeepslate' })
  // Note: we don't have a way to obtain deepslate currently (except strainers)
  // disabled these added new recipe instead this should smooth the progression a bit 
  //addParticleAcceleratorRecipe('minecraft:reinforced_deepslate', ['minecraft:deepslate', 'ae2:sky_stone_block'], 1, 200)
  //addParticleAcceleratorRecipe('minecraft:sculk_shrieker', ['minecraft:reinforced_deepslate', 'minecraft:echo_shard'], 1, 200)

  // Make the atomic forge slightly more expensive
  event.replaceInput({ id: 'oritech:crafting/atomicforge' }, 'oritech:plastic_sheet', 'oritech:superconductor')

  //Pulverizer Function
  function addPulverizerRecipe(output, input, count, time) {
    event.custom({
      "type": "oritech:pulverizer",
      "fluidInputAmount": 0,
      "fluidInputVariant": "minecraft:empty",
      "fluidOutputAmount": 0,
      "fluidOutputVariant": "minecraft:empty",
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "count": count,
          "id": output
        }
      ],
      "time": time
    }).id(`contained:pulverizer/${input.split(":")[1]}_to_${output.split(":")[1]}`)
  }

  //Foundry Function
  function addFoundryRecipe(output, input1, input2, count, time) {
    //Simple Recipe
    event.custom({
      "type": "oritech:foundry",
      "fluidInputAmount": 0,
      "fluidInputVariant": "minecraft:empty",
      "fluidOutputAmount": 0,
      "fluidOutputVariant": "minecraft:empty",
      "ingredients": [
        {
          "item": input1
        },
        {
          "item": input2
        }
      ],
      "results": [
        {
          "count": count,
          "id": output
        }
      ],
      "time": time
    }).id(`contained:oritech/foundry/${input1.split(":")[1]}_and_${input2.split(":")[1]}_to_${output.split(":")[1]}`)

    //Inverse Foundry Recipe, Oritech does this for some reason
    event.custom({
      "type": "oritech:foundry",
      "fluidInputAmount": 0,
      "fluidInputVariant": "minecraft:empty",
      "fluidOutputAmount": 0,
      "fluidOutputVariant": "minecraft:empty",
      "ingredients": [
        {
          "item": input2
        },
        {
          "item": input1
        }
      ],
      "results": [
        {
          "count": count,
          "id": output
        }
      ],
      "time": time
    }).id(`contained:oritech/foundry/inverse/${input1.split(":")[1]}_and_${input2.split(":")[1]}_to_${output.split(":")[1]}`)
  }

  function addLaserRecipe(output, input, count, time) {
    event.custom({
      "type": "oritech:laser",
      "fluidInputAmount": 0,
      "fluidInputVariant": "minecraft:empty",
      "fluidOutputAmount": 0,
      "fluidOutputVariant": "minecraft:empty",
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "count": count,
          "id": output
        }
      ],
      "time": time
    }).id(`contained:oritech/laser/${input.split(":")[1]}_to_${output.split(":")[1]}`)
  }

  function addAssemblerRecipe(output, inputs, count, time) {
    event.custom({
      "type": "oritech:assembler",
      "fluidInputAmount": 0,
      "fluidInputVariant": "minecraft:empty",
      "fluidOutputAmount": 0,
      "fluidOutputVariant": "minecraft:empty",
      "ingredients": inputs.map(input => ({ item: input })),
      "results": [
        {
          "count": count,
          "id": output
        }
      ],
      "time": time
    })//.id(`contained:oritech/assembler/${output.split(":")[1]}`)
  }

  function addParticleAcceleratorRecipe(output, inputs, count, time) {
    event.custom({
      "type": "oritech:particle_collision",
      "fluidInput": {
        "amount": 0,
        "fluid": "minecraft:empty"
      },
      "fluidOutputs": [],
      "ingredients": inputs.map(input => ({ item: input })),
      "results": [
        {
          "count": count,
          "id": output
        }
      ],
      "time": time
    }).id(`contained:oritech/particle_accelerator/${output.split(":")[1]}`)
  }

  function addDeepDrillRecipe(output, input) {
    event.custom({
      "type": "oritech:deep_drill",
      "fluidInput": {
        "amount": 0,
        "fluid": "minecraft:empty"
      },
      "fluidOutput": {
        "amount": 0,
        "fluid": "minecraft:empty"
      },
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "count": 1,
          "id": output
        }
      ],
      "time": 100
    }).id(`contained:oritech/deep_drill/${input.split(":")[1]}_to_${output.split(":")[1]}`)
  }

  //Improved Dust to Resource Recipes
  function addImprovedDustRecipe(output, input) {
    event.custom({
      "type": "oritech:centrifuge_fluid",
      "fluidInput": {
        "amount": 25,
        "fluid": "oritech:still_sulfuric_acid"
      },
      "fluidOutputs": [{
        "amount": 0,
        "fluid": "minecraft:empty"
      }],
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "count": 2,
          "id": output
        }
      ],
      "time": 120
    }).id(`contained:oritech/centrifuge/improved_dust/${input.split(":")[1]}_to_${output.split(":")[1]}`)
  }


  //Water Bottle from Centrifuge
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 250,
      "fluid": "minecraft:water"
    },
    "fluidOutputs": [{
      "amount": 0,
      "fluid": "minecraft:empty"
    }],
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "minecraft:potion",
        "components": {
          "minecraft:potion_contents": {
            "potion": "minecraft:water"
          }
        }
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/water_bottle`)

  //Dirt from Centrifuge
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 250,
      "fluid": "minecraft:water"
    },
    "fluidOutputs": [{
      "amount": 0,
      "fluid": "minecraft:empty"
    }],
    "ingredients": [
      {
        "item": "contained:organic_powder"
      }
    ],
    "results": [
      {
        "count": 4,
        "id": "contained:dirt_pile"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/dirt_pile`)

  //Dirt from Centrifuge 2
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 1000,
      "fluid": "minecraft:water"
    },
    "fluidOutputs": [{
      "amount": 0,
      "fluid": "minecraft:empty"
    }],
    "ingredients": [
      {
        "count": 1,
        "item": "contained:organic_powder_block"
      }
    ],
    "results": [
      {
        "count": 4,
        "id": "minecraft:dirt"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/dirt`)

  //Water from Centrifuge
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 0,
      "fluid": "minecraft:empty"
    },
    "fluidOutputs": [{
      "amount": 250,
      "fluid": "minecraft:water"
    }],
    "ingredients": [
      {
        "item": "contained:water_drop"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "contained:dry_drop"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/water`)

  //Lava from Centrifuge
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 0,
      "fluid": "minecraft:empty"
    },
    "fluidOutputs": [{
      "amount": 250,
      "fluid": "minecraft:lava"
    }],
    "ingredients": [
      {
        "item": "contained:lava_drop"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "contained:dry_drop"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/lava`)

  //Blaze Powder from Centrifuge
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 500,
      "fluid": "minecraft:lava"
    },
    "fluidOutputs": [{
      "amount": 0,
      "fluid": "minecraft:empty"
    }],
    "ingredients": [
      {
        "tag": "contained:steel_dusts"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "minecraft:blaze_powder"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/blaze_powder`)

  //Echo shard from Centrifuge
  event.custom({
    "type": "oritech:centrifuge",
    "fluidInput": {
      "amount": 0,
      "fluid": "minecraft:empty"
    },
    "fluidOutputs": [{
      "amount": 0,
      "fluid": "minecraft:empty"
    }],
    "ingredients": [
      {
        "item": "minecraft:sculk"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "minecraft:echo_shard"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/echo_shard`)

  //Slime ball from Centrifuge
  event.custom({
    "type": "oritech:centrifuge",
    "fluidInput": {
      "amount": 0,
      "fluid": "minecraft:empty"
    },
    "fluidOutputs": [{
      "amount": 45,
      "fluid": "casting:molten_blaze"
    }],
    "ingredients": [
      {
        "item": "minecraft:magma_cream"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "minecraft:slime_ball"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/slime_ball`)

  //Oil from Centrifuge
  event.custom({
    "type": "oritech:centrifuge",
    "fluidInput": {
      "amount": 0,
      "fluid": "minecraft:empty"
    },
    "fluidOutputs": [{
      "amount": 250,
      "fluid": "oritech:still_oil"
    }],
    "ingredients": [
      {
        "item": "contained:oil_drop"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "contained:dry_drop"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/oil`)

  //Stew recipes
  addStewRecipe('justdirethings:gooblock_tier1', 'contained:goo_stew_t1', 'contained:goo_bowl_t1')
  addStewRecipe('justdirethings:gooblock_tier2', 'contained:goo_stew_t2', 'contained:goo_bowl_t2')
  addStewRecipe('justdirethings:gooblock_tier3', 'contained:goo_stew_t3', 'contained:goo_bowl_t3')
  addStewRecipe('justdirethings:gooblock_tier4', 'contained:goo_stew_t4', 'contained:goo_bowl_t4')

  function addStewRecipe(item, fluid, stew) {
    // item to fluid (1 to 300mL)
    event.custom({
      "type": "oritech:centrifuge_fluid",
      "fluidInput": {
        "amount": 300,
        "fluid": "minecraft:water"
      },
      "fluidOutputs": [{
        "amount": 300,
        "fluid": fluid
      }],
      "ingredients": [
        {
          "item": item
        }
      ],
      "results": [],
      "time": 200
    })

    // fluid to stew (100mL to 1)
    event.custom({
      "type": "oritech:centrifuge_fluid",
      "fluidInput": {
        "amount": 100,
        "fluid": fluid
      },
      "fluidOutputs": [{
        "amount": 0,
        "fluid": "minecraft:empty"
      }],
      "ingredients": [
        {
          "item": "contained:stone_bowl"
        }
      ],
      "results": [
        {
          "count": 1,
          "id": stew
        }
      ],
      "time": 20
    })
  }

  //Fragment Recipes

  function addFragmentRecipe(output, input, count, time) {
    event.custom({
      "type": "oritech:grinder",
      "fluidInput": {
        "amount": 0,
        "fluid": "minecraft:empty"
      },
      "fluidOutputs": [],
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "count": count,
          "id": output
        }
      ],
      "time": time
    }).id(`contained:oritech/fragment/${input.split(":")[1]}_to_${output.split(":")[1]}`)
  }

  function addAtomicForgeRecipe(output, inputs, count, time) {
    let ingredientsJson = inputs.map(input => ({ item: input }))

    event.custom({
      "type": "oritech:atomic_forge",
      "fluidInput": {
        "amount": 0,
        "fluid": "minecraft:empty"
      },
      "fluidOutputs": [],
      "ingredients": ingredientsJson,
      "results": [
        {
          "count": count,
          "id": output
        }
      ],
      "time": time
    })
  }

  addAtomicForgeRecipe("contained:crystalline_quartz", ["contained:impressional_gem", "contained:crystalline_dust", "contained:crystalline_dust"], 1, 100)
  addAtomicForgeRecipe("contained:exotic_crystalline_quartz", ["minecraft:nether_star", "contained:crystalline_quartz_block", "contained:crystalline_quartz_block"], 1, 2000)

  //Additional Silicon
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 1000,
      "fluid": "oritech:still_naphtha"
    },
    "fluidOutputs": [{
      "amount": 500,
      "fluid": "oritech:still_silicon_wash"
    }],
    "ingredients": [
      {
        "item": "minecraft:clay"
      }
    ],
    "results": [],
    "time": 200
  }).id(`contained:oritech/centrifuge/silicon_wash`)

  //Soaked Paper
  event.custom({
    "type": "oritech:centrifuge",
    "fluidInput": {
      "amount": 1000,
      "fluid": "minecraft:water"
    },
    "fluidOutputs": [{
      "amount": 0,
      "fluid": "minecraft:empty"
    }],
    "ingredients": [
      {
        "item": "opolisutilities:log_sheet"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "opolisutilities:soaked_paper"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/soaked_paper`)

  //Gunpowder
  event.custom({
    "type": "oritech:centrifuge",
    "fluidInput": {
      "amount": 50,
      "fluid": "oritech:still_sulfuric_acid"
    },
    "fluidOutputs": [{
      "amount": 0,
      "fluid": "minecraft:empty"
    }],
    "ingredients": [
      {
        "item": "contained:organic_powder"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "minecraft:gunpowder"
      }
    ],
    "time": 200
  }).id(`contained:oritech/centrifuge/gunpowder`)

  // Blazing cinderstone
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 1000,
      "fluid": "oritech:still_sheol_fire"
    },
    "fluidOutputs": [{
      "amount": 0,
      "fluid": "minecraft:empty"
    }],
    "ingredients": [
      {
        "item": "contained:cindrath_core_fragment"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "contained:blazing_cinderstone"
      }
    ],
    "time": 40
  }).id(`contained:oritech/centrifuge/blazing_cinderstone`)

  // blazing turbofuel
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 200,
      "fluid": "oritech:still_fuel"
    },
    "fluidOutputs": [{
      "amount": 200,
      "fluid": "contained:blazing_turbofuel"
    }],
    "ingredients": [
      {
        "item": "contained:blazing_cinderstone"
      }
    ],
    "results": [],
    "time": 40
  }).id(`contained:oritech/centrifuge/blazing_turbofuel`)

  event.custom({
    "type": "oritech:fuel_generator",
    "fluidInput": {
      "amount": 100,
      "fluid": "contained:blazing_turbofuel"
    },
    "fluidOutputs": [],
    "ingredients": [],
    "results": [],
    "time": 1280
  })

  // exotic blazing cinderstone
  event.custom({
    "type": "oritech:cooler",
    "fluidInput": {
      "amount": 1000,
      "fluid": "contained:blazing_turbofuel"
    },
    "fluidOutputs": [],
    "ingredients": [],
    "results": [
      {
        "count": 1,
        "id": "contained:exotic_blazing_cinderstone"
      }
    ],
    "time": 2000
  })

})
