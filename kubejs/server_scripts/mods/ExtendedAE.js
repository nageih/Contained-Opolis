ServerEvents.recipes(event => {

    //Remove
    event.remove({ id: 'extendedae:infinity_cobblestone_cell' })
    event.remove({ id: 'extendedae:infinity_water_cell' })
    event.remove({ id: 'extendedae:assembler/fluix_transformation' })
    event.remove({ id: 'extendedae:blasting/quartz_blend' })
    event.remove({ id: 'extendedae:smelting/quartz_blend' })
    event.remove({ id: 'extendedae:quartz_blend' })
    event.remove({ id: 'extendedae:quartz_blend_alt' })

    // Fluix Crystal (Emerald Variant)
    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:quartz"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:redstone"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:emerald"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "ae2:fluix_crystal"
        }
    })

    // Fluix Crystal (Diamond Variant)
    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:quartz"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:redstone"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:diamond"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "ae2:fluix_crystal"
        }
    })
})