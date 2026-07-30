// Solar Furance Recipe

ServerEvents.recipes(event => {

    //Solarpanel
    event.shaped('solarcooker:reflector', ['AA', 'BB'], { A: '#c:glass_panes', B: 'oritech:small_iron_dust' }).id('solarcooker:reflector')

    //Solar Furnace
    event.shaped('solarcooker:solar_cooker', ['AAA', 'BCB', 'BBB'], { A: 'contained:solar_panel', B: 'colors:light_gray_asteroid', C: 'minecraft:chest', }).id('solarcooker:solar_cooker')

    //Asteroid Dusts to Resources
    addSolarFurnaceRecipe('contained:light_gray_asteroid_dust', 'oritech:small_iron_dust', 200)

    addSolarFurnaceRecipe('contained:yellow_asteroid_dust', 'oritech:small_nickel_dust', 200)
    addSolarFurnaceRecipe('contained:red_asteroid_dust', 'contained:small_redstone_dust', 200)
    addSolarFurnaceRecipe('contained:blue_asteroid_dust', 'contained:small_lapis_dust', 200)
    addSolarFurnaceRecipe('minecraft:clay_ball', 'casting:black_brick', 200)

    //Solar Funrace Recipe Function
    addSolarFurnaceRecipe('contained:organic_powder', 'contained:mysterious_powder', 600)
    addSolarFurnaceRecipe('justdirethings:charcoal', 'minecraft:coal_block', 600)
    addSolarFurnaceRecipe('minecraft:iron_block', 'minecraft:raw_iron_block', 600)

    //Solar furnace recipes for food stuff
    addSolarFurnaceRecipe('contained:asteroid_rocks', 'contained:roasted_rocks', 100)

    function addSolarFurnaceRecipe(input, output, time) {
        event.custom({
            "type": "solarcooker:solarcooking",
            "category": "misc",
            "ingredient": {
                "item": input
            },
            "result": {
                "id": output
            },
            "experience": 0.0,
            "cookingtime": time
        })
    }


})