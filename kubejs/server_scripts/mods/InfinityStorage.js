//Infinity Storage
ServerEvents.recipes(event => {

  //Replace Input
  event.replaceInput({ id: 'infinitystorage:empty_infinity_drive' }, 'minecraft:netherite_ingot', 'oritech:duratium_ingot')
  event.replaceInput({ id: 'infinitystorage:infinity_storage_drive' }, 'minecraft:iron_block', 'alltheores:platinum_block')
  event.replaceInput({ id: 'infinitystorage:infinity_storage_drive' }, 'minecraft:netherite_ingot', 'oritech:duratium_ingot')

  //Infinity Storage Drive 
  event.shaped('contained:infinity_sand_drive', ['AAA', 'ABA', 'AAA'], { A: '#c:sands', B: 'infinitystorage:empty_infinity_drive', }).id('contained:infinity_sand_drive')
  event.shaped('contained:infinity_gravel_drive', ['AAA', 'ABA', 'AAA'], { A: '#c:gravels', B: 'infinitystorage:empty_infinity_drive', }).id('contained:infinity_gravel_drive')
  event.shaped('contained:infinity_dirt_drive', ['AAA', 'ABA', 'AAA'], { A: 'minecraft:dirt', B: 'infinitystorage:empty_infinity_drive', }).id('contained:infinity_dirt_drive')
  event.shaped('contained:infinity_stone_drive', ['AAA', 'ABA', 'AAA'], { A: '#c:stones', B: 'infinitystorage:empty_infinity_drive', }).id('contained:infinity_stone_drive')
})