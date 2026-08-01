ServerEvents.tags("item", event => {

    //Steel
    event.get('c:ingots/steel').remove('oritech:biosteel_ingot')

    //Space Suit Tags
    event.add('contained:cindrath_suit_helmets', 'justdirethings:ferricore_helmet')
    event.add('contained:cindrath_suit_chestplates', 'justdirethings:ferricore_chestplate')
    event.add('contained:cindrath_suit_leggings', 'justdirethings:ferricore_leggings')
    event.add('contained:cindrath_suit_boots', 'justdirethings:ferricore_boots')

    event.add('contained:crystalore_suit_helmets', 'justdirethings:blazegold_helmet')
    event.add('contained:crystalore_suit_chestplates', 'justdirethings:blazegold_chestplate')
    event.add('contained:crystalore_suit_leggings', 'justdirethings:blazegold_leggings')
    event.add('contained:crystalore_suit_boots', 'justdirethings:blazegold_boots')

    event.add('contained:fractoria_suit_helmets', 'justdirethings:celestigem_helmet')
    event.add('contained:fractoria_suit_chestplates', 'justdirethings:celestigem_chestplate')
    event.add('contained:fractoria_suit_leggings', 'justdirethings:celestigem_leggings')
    event.add('contained:fractoria_suit_boots', 'justdirethings:celestigem_boots')

    event.add('contained:end_suit_helmets', 'justdirethings:eclipsealloy_helmet')
    event.add('contained:end_suit_chestplates', 'justdirethings:eclipsealloy_chestplate')
    event.add('contained:end_suit_leggings', 'justdirethings:eclipsealloy_leggings')
    event.add('contained:end_suit_boots', 'justdirethings:eclipsealloy_boots')

    //Space Suit Tags
    event.add('contained:space_suit_helmets', ['#contained:cindrath_suit_helmets', '#contained:crystalore_suit_helmets', '#contained:fractoria_suit_helmets', '#contained:end_suit_helmets'])
    event.add('contained:space_suit_chestplates', ['#contained:cindrath_suit_chestplates', '#contained:crystalore_suit_chestplates', '#contained:fractoria_suit_chestplates', '#contained:end_suit_chestplates'])
    event.add('contained:space_suit_leggings', ['#contained:cindrath_suit_leggings', '#contained:crystalore_suit_leggings', '#contained:fractoria_suit_leggings', '#contained:end_suit_leggings'])
    event.add('contained:space_suit_boots', ['#contained:cindrath_suit_boots', '#contained:crystalore_suit_boots', '#contained:fractoria_suit_boots', '#contained:end_suit_boots'])

    //Cindrath Suit Tags
    event.add('contained:cindrath_suit_helmets', ['#contained:crystalore_suit_helmets', '#contained:fractoria_suit_helmets', '#contained:end_suit_helmets'])
    event.add('contained:cindrath_suit_chestplates', ['#contained:crystalore_suit_chestplates', '#contained:fractoria_suit_chestplates', '#contained:end_suit_chestplates'])
    event.add('contained:cindrath_suit_leggings', ['#contained:crystalore_suit_leggings', '#contained:fractoria_suit_leggings', '#contained:end_suit_leggings'])
    event.add('contained:cindrath_suit_boots', ['#contained:crystalore_suit_boots', '#contained:fractoria_suit_boots', '#contained:end_suit_boots'])

    //Crystalore Suit Tags
    event.add('contained:crystalore_suit_helmets', ['#contained:fractoria_suit_helmets', '#contained:end_suit_helmets'])
    event.add('contained:crystalore_suit_chestplates', ['#contained:fractoria_suit_chestplates', '#contained:end_suit_chestplates'])
    event.add('contained:crystalore_suit_leggings', ['#contained:fractoria_suit_leggings', '#contained:end_suit_leggings'])
    event.add('contained:crystalore_suit_boots', ['#contained:fractoria_suit_boots', '#contained:end_suit_boots'])

    //Fractoria Suit Tags
    event.add('contained:fractoria_suit_helmets', ['#contained:end_suit_helmets'])
    event.add('contained:fractoria_suit_chestplates', ['#contained:end_suit_chestplates'])
    event.add('contained:fractoria_suit_leggings', ['#contained:end_suit_leggings'])
    event.add('contained:fractoria_suit_boots', ['#contained:end_suit_boots'])

    //Rocket boots
    event.add('rocket_boots:rocket_boots_boots', ['#contained:space_suit_boots'])

    //Item Pipes
    event.get('contained:item_pipes').add(['oritech:item_pipe', 'oritech:transparent_item_pipe'])

    //Contained Steel
    event.get('contained:steel_ingots').add(['#c:ingots/primal_steel', '#c:ingots/steel'])
    event.get('contained:steel_nuggets').add(['#c:nuggets/primal_steel', '#c:nuggets/steel'])
    event.get('contained:steel_dusts').add(['#c:dusts/primal_steel', '#c:dusts/steel'])

    //Gravel
    event.get('oritech:recyclable/gravel').remove('minecraft:stone')

    //Shard Blocks
    event.get('contained:budding_shard_blocks').add(['minecraft:budding_amethyst', 'geore:budding_uranium', 'geore:budding_tungsten', 'geore:budding_tin', 'geore:budding_silver', 'geore:budding_platinum', 'geore:budding_osmium', 'geore:budding_zinc', 'geore:budding_uraninite', 'geore:budding_black_quartz', 'geore:budding_monazite', 'geore:budding_aluminum', 'geore:budding_lead', 'geore:budding_nickel', 'geore:budding_topaz', 'geore:budding_sapphire', 'geore:budding_ruby', 'geore:budding_ancient_debris', 'geore:budding_redstone', 'geore:budding_quartz', 'geore:budding_lapis', 'geore:budding_iron', 'geore:budding_gold', 'geore:budding_emerald', 'geore:budding_diamond', 'geore:budding_copper', 'geore:budding_coal'])
    event.get('contained:shard_blocks').add(['minecraft:amethyst_block', 'geore:uranium_block', 'geore:tungsten_block', 'geore:tin_block', 'geore:silver_block', 'geore:platinum_block', 'geore:osmium_block', 'geore:zinc_block', 'geore:uraninite_block', 'geore:black_quartz_block', 'geore:monazite_block', 'geore:aluminum_block', 'geore:lead_block', 'geore:nickel_block', 'geore:topaz_block', 'geore:sapphire_block', 'geore:ruby_block', 'geore:ancient_debris_block', 'geore:redstone_block', 'geore:quartz_block', 'geore:lapis_block', 'geore:iron_block', 'geore:gold_block', 'geore:emerald_block', 'geore:diamond_block', 'geore:copper_block', 'geore:coal_block'])

    //Glass
    event.get('c:glass_blocks').remove('ae2:quartz_vibrant_glass', 'ae2:quartz_glass')

    //Paxels
    event.get('c:tools/paxel').add(['mysticalagradditions:inferium_paxel', 'mysticalagradditions:prudentium_paxel', 'mysticalagradditions:tertium_paxel', 'mysticalagradditions:tertium_paxel', 'mysticalagradditions:imperium_paxel', 'mysticalagradditions:supremium_paxel', 'mysticalagradditions:awakened_supremium_paxel'])

    //Banned From Coloring
    event
        .get("bblcore:banned_from_coloring")
        .add([
            "colors:black_asteroid",
            "colors:blue_asteroid",
            "colors:brown_asteroid",
            "colors:cyan_asteroid",
            "colors:gray_asteroid",
            "colors:green_asteroid",
            "colors:light_blue_asteroid",
            "colors:light_gray_asteroid",
            "colors:lime_asteroid",
            "colors:magenta_asteroid",
            "colors:orange_asteroid",
            "colors:pink_asteroid",
            "colors:purple_asteroid",
            "colors:red_asteroid",
            "colors:white_asteroid",
            "colors:yellow_asteroid",
            "contained:mysterious_red_asteroid",
            "contained:mysterious_green_asteroid",
            "contained:mysterious_blue_asteroid",
            "contained:mysterious_yellow_asteroid",
            "contained:mysterious_purple_asteroid",
            "contained:mysterious_light_gray_asteroid",
            "contained:mysterious_gray_asteroid",
            "contained:mysterious_pink_asteroid",
            "contained:mysterious_lime_asteroid",
            "contained:mysterious_light_blue_asteroid",
            "contained:mysterious_magenta_asteroid",
            "contained:mysterious_orange_asteroid",
            "contained:mysterious_white_asteroid",
            "contained:mysterious_cyan_asteroid",
            "contained:mysterious_black_asteroid",
            "contained:mysterious_brown_asteroid",
            "colors:black_asteroid_slab",
            "colors:blue_asteroid_slab",
            "colors:brown_asteroid_slab",
            "colors:cyan_asteroid_slab",
            "colors:gray_asteroid_slab",
            "colors:green_asteroid_slab",
            "colors:light_blue_asteroid_slab",
            "colors:light_gray_asteroid_slab",
            "colors:lime_asteroid_slab",
            "colors:magenta_asteroid_slab",
            "colors:orange_asteroid_slab",
            "colors:pink_asteroid_slab",
            "colors:purple_asteroid_slab",
            "colors:red_asteroid_slab",
            "colors:white_asteroid_slab",
            "colors:yellow_asteroid_slab",
        ]);

    event.add('pipe_connector:placeable_items', [
        'integrateddynamics:cable'
    ])


})

ServerEvents.tags("block", event => {

    //Banned in Space
    event.get('contained:banned_in_space').add([
        "minecraft:torch", "minecraft:wall_torch", "#minecraft:crops", "#minecraft:saplings"
    ])

    //Nether Portal Blocks
    event.get('bblcore:nether_portal_frame').remove('minecraft:obsidian')

    //Sculk Replaceables
    event.get('minecraft:sculk_replaceables').add('colors:white_marble', 'minecraft:ice')
    event.get('minecraft:sculk_replaceable_world_gen').add('colors:white_marble', 'minecraft:ice')

    //Dragon Immune
    event.get('minecraft:dragon_immune').add("@roomopolis", "contained:unbreakable_glass")

    //Wither Immune
    event.get('minecraft:wither_immune').add("@roomopolis", "contained:unbreakable_glass")

    //Smart Crafting Table Whitelist
    event.add('smartcrafting:whitelisted_storage', ["@ironchest", "@functionalstorage"])

    //Banned From Coloring
    event
        .get("bblcore:banned_from_coloring")
        .add([
            "colors:black_asteroid",
            "colors:blue_asteroid",
            "colors:brown_asteroid",
            "colors:cyan_asteroid",
            "colors:gray_asteroid",
            "colors:green_asteroid",
            "colors:light_blue_asteroid",
            "colors:light_gray_asteroid",
            "colors:lime_asteroid",
            "colors:magenta_asteroid",
            "colors:orange_asteroid",
            "colors:pink_asteroid",
            "colors:purple_asteroid",
            "colors:red_asteroid",
            "colors:white_asteroid",
            "colors:yellow_asteroid",
            "contained:mysterious_red_asteroid",
            "contained:mysterious_green_asteroid",
            "contained:mysterious_blue_asteroid",
            "contained:mysterious_yellow_asteroid",
            "contained:mysterious_purple_asteroid",
            "contained:mysterious_light_gray_asteroid",
            "contained:mysterious_gray_asteroid",
            "contained:mysterious_pink_asteroid",
            "contained:mysterious_lime_asteroid",
            "contained:mysterious_light_blue_asteroid",
            "contained:mysterious_magenta_asteroid",
            "contained:mysterious_orange_asteroid",
            "contained:mysterious_white_asteroid",
            "contained:mysterious_cyan_asteroid",
            "contained:mysterious_black_asteroid",
            "contained:mysterious_brown_asteroid",
            "colors:black_asteroid_slab",
            "colors:blue_asteroid_slab",
            "colors:brown_asteroid_slab",
            "colors:cyan_asteroid_slab",
            "colors:gray_asteroid_slab",
            "colors:green_asteroid_slab",
            "colors:light_blue_asteroid_slab",
            "colors:light_gray_asteroid_slab",
            "colors:lime_asteroid_slab",
            "colors:magenta_asteroid_slab",
            "colors:orange_asteroid_slab",
            "colors:pink_asteroid_slab",
            "colors:purple_asteroid_slab",
            "colors:red_asteroid_slab",
            "colors:white_asteroid_slab",
            "colors:yellow_asteroid_slab",
        ]);

    event.add('ae2:blacklisted/annihilation_plane', [
        'ae2:small_quartz_bud',
        'ae2:medium_quartz_bud',
        'ae2:large_quartz_bud',
        'minecraft:small_amethyst_bud',
        'minecraft:medium_amethyst_bud',
        'minecraft:large_amethyst_bud',
    ])

    event.add('pipe_connector:pipe_block', [
        'integrateddynamics:cable'
    ])

})

ServerEvents.tags("fluid", event => {
    event.get('framedblocks:blacklisted').add('@oritech')

})