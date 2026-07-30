//Gateways to Eternity

ServerEvents.recipes(event => {

    //Remove
    event.remove({ mod: 'gateways' })

    //Zombie Gateway
    event.shaped('gateways:gate_pearl[gateways:gateway="contained:zombie"]', ['AAA', 'ABA', 'AAA'], { A: 'contained:red_asteroid_dust', B: 'contained:mysterious_gateway_pearl' }).id('contained:zombie_gateway')

    //Skeleton Gateway
    event.shaped('gateways:gate_pearl[gateways:gateway="contained:skeleton"]', ['AAA', 'ABA', 'AAA'], { A: 'contained:blue_asteroid_dust', B: 'contained:mysterious_gateway_pearl' }).id('contained:skeleton_gateway')

    //Creeper Gateway
    event.shaped('gateways:gate_pearl[gateways:gateway="contained:creeper"]', ['AAA', 'ABA', 'AAA'], { A: 'contained:green_asteroid_dust', B: 'contained:mysterious_gateway_pearl' }).id('contained:creeper_gateway')

    //Enderman Gateway
    event.shaped('gateways:gate_pearl[gateways:gateway="contained:enderman"]', ['AAA', 'ABA', 'AAA'], { A: 'contained:purple_asteroid_dust', B: 'contained:mysterious_gateway_pearl' }).id('contained:enderman_gateway')

    //Spider
    event.shaped('gateways:gate_pearl[gateways:gateway="contained:spider"]', ['AAA', 'ABA', 'AAA'], { A: 'contained:black_asteroid_dust', B: 'contained:mysterious_gateway_pearl' }).id('contained:spider_gateway')

    //Blaze
    event.shaped('gateways:gate_pearl[gateways:gateway="contained:blaze"]', ['AAA', 'ABA', 'AAA'], { A: 'contained:orange_asteroid_dust', B: 'contained:mysterious_gateway_pearl' }).id('contained:blaze_gateway')

    //Wither Skeleton
    event.shaped('gateways:gate_pearl[gateways:gateway="contained:wither_skeleton"]', ['AAA', 'ABA', 'AAA'], { A: 'contained:gray_asteroid_dust', B: 'contained:mysterious_gateway_pearl' }).id('contained:wither_skeleton_gateway')

})