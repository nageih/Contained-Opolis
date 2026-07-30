// Ad Finders

ServerEvents.recipes(event => {

    //Gem Finder
    event.shaped("adfinders:gem_finder", ['ABA', 'BCB', 'ABA'], { A: "contained:certus_quartz_shard", B: "geore:quartz_shard", C: "minecraft:compass" }).id("adfinders:gem_finder")

})