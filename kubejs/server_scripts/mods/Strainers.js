// Strainers

ServerEvents.recipes(event => {

    //Remove Recipes
    event.remove({ id: /strainers:strainer\/purified_gravel/ })
    event.remove({ id: /strainers:strainer\/purified_soul_sand/ })
    event.remove({ id: /strainers:strainer\/soul_soil/ })
    event.remove({ id: /strainers:strainer\/purified_dirt/ })
    event.remove({ id: /strainers:strainer\/dirt/ })
    event.remove({ id: "strainers:strainer/purified_sand/cactus" })
    event.remove({ id: "strainers:strainer/purified_sand/bamboo" })
    event.remove({ id: "strainers:strainer/purified_sand/sugar_cane" })
    event.remove({ id: "strainers:strainer/purified_sand/kelp" })
    event.remove({ id: "strainers:strainer/soul_soil/nether_wart" })
    event.remove({ id: "strainers:strainer/soul_sand/purified_soul_sand" })
    event.remove({ id: "strainers:strainer/gravel/purified_gravel" })
    event.remove({ id: 'strainers:water' });
    event.remove({ id: 'strainers:lava' });
    event.remove({ id: 'strainers:blazing_salt_mulch' })

    //Strainer
    event.replaceInput({ id: 'strainers:wooden_strainer' }, 'minecraft:stick', '#c:rods/nickel')

    //Ink Sac
    strainerAuto('minecraft:glow_ink_sac', 'contained:mysterious_alloy', 'minecraft:ink_sac', 0.5, 0.05, 4, 10);

    // Dirt -> Earth Drop
    strainerAuto('minecraft:dirt', 'contained:mysterious_alloy', 'contained:earth_drop', 0.75, 0.05, 4, 10);

    //Netherrack -> Lava Drop
    strainerAuto('minecraft:netherrack', 'contained:mysterious_alloy', 'contained:lava_drop', 0.5, 0.05, 4, 10);

    //Soul Sand - Nether Wart + Ghast Tear
    strainerAuto('minecraft:soul_sand', 'contained:mysterious_alloy', 'minecraft:nether_wart', 0.5, 0.05, 4, 10);
    strainerAuto('minecraft:soul_sand', 'contained:mysterious_alloy', 'minecraft:ghast_tear', 0.01, 0.01, 4, 10);

    //Asteroids
    strainerAuto('contained:orange_asteroid_dust', 'contained:mysterious_alloy', 'oritech:small_copper_dust', 0.5, 0.05, 4, 10);
    strainerAuto('contained:black_asteroid_dust', 'contained:mysterious_alloy', 'contained:small_coal_dust', 0.5, 0.05, 4, 10);
    strainerAuto('contained:white_asteroid_dust', 'contained:mysterious_alloy', 'contained:small_silver_dust', 0.5, 0.05, 4, 10);
    strainerAuto('contained:brown_asteroid_dust', 'contained:mysterious_alloy', 'oritech:small_gold_dust', 0.5, 0.05, 4, 10);

    function strainerAuto(input, fluid, item, baseChance, addChance, minTier, maxTier) {
        let results = [];
        for (let tier = minTier; tier <= maxTier; tier++) {
            let chance = baseChance + (tier - minTier) * addChance;
            results.push([item, chance, `#strainers:tier_${tier}_meshes`]);
        }
        return event.recipes.strainers.strainer(input, fluid, results);
    }
})