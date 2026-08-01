// AE2 Recipe

ServerEvents.recipes(event => {

    // Remove
    event.remove({ id: 'ae2:inscriber/ae2_sky_stone_block' })
    event.remove({ id: 'ae2:charger/guide' })
    event.remove({ id: 'oritech:compat/ae2/charger/fluxite' })
    event.remove({ id: 'ae2:charger/meteorite_compass' })
    event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
    event.remove({ id: 'ae2:transform/fluix_crystals' })
    event.remove({ id: 'ae2:transform/fluix_crystal' })
    event.remove({ id: 'ae_universal_press:silicon_from_sand_certus_dust' })
    event.remove({ id: 'ae2:smelting/silicon_from_certus_quartz_dust' })
    event.remove({ id: 'ae2:blasting/silicon_from_certus_quartz_dust' })

    //Replace 
    event.replaceInput({ id: 'ae2:network/blocks/controller' }, 'ae2:smooth_sky_stone_block', 'colors:light_gray_asteroid')
    event.replaceInput({ id: 'ae2:network/cells/item_storage_components_cell_256k_part' }, 'ae2:sky_dust', 'contained:light_gray_asteroid_dust')

    //Inscriber Recipes
    addInscriberRecipe('ae2:fluix_crystal', 'minecraft:diamond', 'minecraft:redstone', 'minecraft:quartz')
    addInscriberRecipe('ae2:fluix_crystal', 'minecraft:emerald', 'minecraft:redstone', 'minecraft:quartz')
    addInscriberRecipe('oritech:processing_unit', 'ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor')

    function addInscriberRecipe(output, bottom, middle, top) {
        event.custom({
            "type": "ae2:inscriber",
            "ingredients": {
                "bottom": {
                    "item": bottom
                },
                "middle": {
                    "item": middle
                },
                "top": {
                    "item": top
                }
            },
            "mode": "press",
            "result": {
                "count": 1,
                "id": output
            }
        })//.id(`ae2:inscriber/${output.replace(':', '_')}`)      
    }
})