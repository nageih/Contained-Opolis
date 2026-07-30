PortalEvents.register(event => {

    //Overworld
    event.create()
        .returnDim("contained:space", true)
        .portalTexture("nether")
        .frameBlock("contained:overworld_portal_frame") // required
        .lightWithItem("contained:overworld_crystal")
        .setDestination("minecraft:overworld") // required
        .tint(135, 206, 235) // Sky blue color

    //Cindrath
    event.create()
        .returnDim("contained:space", true)
        .frameBlock('contained:cindrath_portal_frame') // required
        .lightWithItem("minecraft:ghast_tear")
        .setDestination("contained:cindrath") // required
        .tint(255, 192, 103)

    //Crystalore
    event.create()
        .returnDim("contained:space", true)
        .frameBlock('contained:crystalore_portal_frame') // required
        .lightWithItem("contained:elemental_essence")
        .setDestination("contained:crystalore") // required
        .tint(96, 117, 255)

    //Fractoria
    event.create()
        .returnDim("contained:space", true)
        .portalTexture("molten")
        .frameBlock('contained:fractoria_portal_frame') // required
        .lightWithItem("matc:imperium_crystal")
        .setDestination("contained:fractoria") // required
        .tint(64, 64, 64)

})
