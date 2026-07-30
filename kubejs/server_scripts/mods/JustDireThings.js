// Just Dire Things Recipe

ServerEvents.recipes(event => {

    //Remove
    event.remove({ id: 'justdirethings:budding_time_timeblock' })
    event.remove({ id: 'justdirethings:budding_time_amethyst' })
    event.remove({ id: 'justdirethings:eclipsealloy_ingot_blasted' })
    event.remove({ id: 'justdirethings:eclipsealloy_ingot_smelted' })

    //Replace Inputs
    event.replaceInput({ id: 'justdirethings:blockswappert2' }, 'minecraft:redstone', 'draconicevolution:small_chaos_frag')

    //Upgrade Blank
    event.shaped('justdirethings:upgrade_blank', [' A ', 'ABA', ' A '], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:bone_block'
    }).id('justdirethings:upgrade_blank')

    //Collector
    event.shaped('justdirethings:itemcollector', [' A ', 'ABA', ' A '], {
        A: '#contained:steel_ingots',
        B: 'minecraft:hopper'
    }).id('justdirethings:itemcollector')

    //Gooblock T4
    event.shaped('justdirethings:gooblock_tier4', ['ADA', 'BCB', 'ADA'], {
        A: 'minecraft:end_stone',
        B: 'oritech:still_strange_matter_bucket',
        C: 'justdirethings:gooblock_tier3',
        D: 'oritech:unholy_intelligence'
    }).id('justdirethings:gooblock_tier4')

    //Gooblock T3
    event.replaceInput({ id: 'justdirethings:gooblock_tier3' }, 'minecraft:dragon_breath', 'oritech:energite_ingot')
    event.replaceInput({ id: 'justdirethings:gooblock_tier3' }, 'minecraft:end_stone', 'minecraft:sculk_catalyst')

    //Gooblock T1
    event.shaped('justdirethings:gooblock_tier1', ['ABA', 'BAB', 'ABA'], { A: 'contained:light_gray_asteroid_dust', B: 'contained:organic_powder' }).id('justdirethings:gooblock_tier1')

    //Advanced Block Breaker
    event.shaped('justdirethings:blockbreakert2', ['AAA', 'ABA', 'AAA'], { A: '#contained:steel_ingots', B: 'justdirethings:blockbreakert1' }).id('justdirethings:blockbreakert2')

    //Block Breaker
    event.shaped('justdirethings:blockbreakert1', ['AAA', 'B B', 'AAA'], { A: 'colors:light_gray_asteroid', B: 'minecraft:iron_ingot' }).id('justdirethings:blockbreakert1')

    //Fluid Collector
    event.shaped('justdirethings:fluidcollectort1', ['AAA', 'BCB', 'AAA'], { A: 'colors:light_gray_asteroid', B: 'justdirethings:ferricore_ingot', C: 'minecraft:bucket' }).id('justdirethings:fluidcollectort1')

    //Block Placer
    event.shaped('justdirethings:blockplacert1', ['AAA', 'B B', 'AAA'], { A: 'colors:light_gray_asteroid', B: 'justdirethings:ferricore_ingot' }).id('justdirethings:blockplacert1')

    //Clicker
    event.shaped('justdirethings:clickert1', ['ABA', 'B B', 'ABA'], { A: 'colors:light_gray_asteroid', B: 'justdirethings:ferricore_ingot' }).id('justdirethings:clickert1')

    // Sculk (needed for T4 goo)
    // Note: maybe add something more interesting
    // changed to goocrafting
    //event.shapeless('minecraft:sculk', ['oritech:biomass_block', 'oritech:enderic_compound'])

    //Goo Crafting
    addGooCrafting('justdirethings:charcoal', 'contained:organic_powder_block', 1, 600)
    addGooCrafting('oritech:still_biofuel_block', 'oritech:biomass_block', 1, 1200)
    addGooCraftingState('justdirethings:raw_ferricore_ore', 'minecraft:raw_iron_block', 1, 2400)


    addGooCrafting('minecraft:netherrack', 'minecraft:stone', 1, 2400)
    addGooCrafting('minecraft:soul_sand', 'minecraft:sand', 1, 2400)
    addGooCrafting('contained:mysterious_biomass_block', 'contained:mysterious_organic_compost', 2, 2400)
    addGooCrafting('geore:uraninite_block', 'minecraft:redstone_block', 3, 2400)
    addGooCrafting('geore:platinum_block', 'justdirethings:celestigem_block', 3, 2400)
    addGooCrafting('minecraft:glowstone', 'alltheores:platinum_block', 3, 2400)
    addGooCrafting('mysticalagriculture:soulium_ore', 'mysticalagriculture:soulstone', 4, 2400)
    addGooCrafting('mysticalagriculture:soulstone', 'minecraft:soul_sand', 4, 2400)

    //Goo Crafting
    function addGooCrafting(output, input, tier, time) {
        event.custom({
            "type": "justdirethings:goospread",
            "craftingDuration": time,
            "id": `justdirethings:${output.replace(':', '_')}`,
            "input": {
                "Name": input
            },
            "output": {
                "Name": output,
            },
            "tierRequirement": tier
        }).id(`justdirethings:goospread/${output.replace(':', '_')}`)
    }

    function addGooCraftingState(output, input, tier, time) {
        event.custom({
            "type": "justdirethings:goospread",
            "craftingDuration": time,
            "id": `justdirethings:${output.replace(':', '_')}`,
            "input": {
                "Name": input
            },
            "output": {
                "Name": output,
                "Properties": {
                    "facing": "north"
                }
            },
            "tierRequirement": tier
        }).id(`justdirethings:goospread/${output.replace(':', '_')}`)
    }

    //Remove
    event.remove({ id: 'justdirethings:raw_coal_t1_ore-goospread_tag' })
    event.remove({ id: 'justdirethings:raw_ferricore_ore-goospread' })
})

// Just Dire Things Tags
ServerEvents.tags("item", event => {

    //Goo Foods
    event.get('justdirethings:goo_revive_tier_1').remove(['minecraft:sugar', 'minecraft:rotten_flesh'])
    event.get('justdirethings:goo_revive_tier_1').add(['contained:water_drop', 'contained:organic_powder'])
})
