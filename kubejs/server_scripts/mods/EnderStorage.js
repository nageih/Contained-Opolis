ServerEvents.recipes(event => {
    event.remove({ id: 'enderstorage:ender_chest' })
    event.remove({ id: 'enderrf:ender_battery' })
    event.remove({ id: 'enderstorage:ender_pouch' })
    event.remove({ id: 'enderstorage:ender_tank' })

    event.custom({
        "type": "enderstorage:create_recipe",
        "key": {
            "B": { "item": "minecraft:blaze_rod" },
            "C": { "tag": "c:chests/wooden" },
            "O": { "tag": "c:obsidians" },
            "W": { "tag": "c:wools" },
            "P": { "item": "justdirethings:blazegold_block" }
        },
        "pattern": [
            "BWB",
            "OCO",
            "BPB"
        ],
        "result": {
            "count": 1,
            "id": "enderstorage:ender_chest"
        }
    }).id('enderstorage:ender_chest')

    event.custom({
        "type": "enderstorage:create_recipe",
        "key": {
            "B": { "item": "minecraft:blaze_rod" },
            "C": { "item": "minecraft:redstone_block" },
            "O": { "tag": "c:obsidians" },
            "W": { "tag": "c:wools" },
            "P": { "item": "justdirethings:blazegold_block" }
        },
        "pattern": [
            "BWB",
            "OCO",
            "BPB"
        ],
        "result": {
            "count": 1,
            "id": "enderrf:ender_battery"
        }
    }).id('enderrf:ender_battery')

    event.custom({
        "type": "enderstorage:create_recipe",
        "key": {
            "B": { "item": "minecraft:blaze_powder" },
            "L": { "tag": "c:leathers" },
            "W": { "tag": "c:wools" },
            "P": { "item": "justdirethings:blazegold_block" }
        },
        "pattern": [
            "BLB",
            "LPL",
            "BWB"
        ],
        "result": {
            "count": 1,
            "id": "enderstorage:ender_pouch"
        }
    }).id('enderstorage:ender_pouch')

    event.custom({
        "type": "enderstorage:create_recipe",
        "key": {
            "B": { "item": "minecraft:blaze_rod" },
            "C": { "item": "minecraft:cauldron" },
            "O": { "tag": "c:obsidians" },
            "W": { "tag": "c:wools" },
            "P": { "item": "justdirethings:blazegold_block" }
        },
        "pattern": [
            "BWB",
            "OCO",
            "BPB"
        ],
        "result": {
            "count": 1,
            "id": "enderstorage:ender_tank"
        }
    }).id('enderstorage:ender_tank')
})