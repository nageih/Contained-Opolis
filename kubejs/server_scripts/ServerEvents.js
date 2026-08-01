//Server Events

ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return
  event.server.gameRules.set("doTraderSpawning", false)
  event.server.gameRules.set("doPatrolSpawning", false)
  event.server.gameRules.set("doInsomnia", false)
  event.server.gameRules.set("doDaylightCycle", true)
  event.server.gameRules.set("doWeatherCycle", false)
  event.server.persistentData.gameRules = true
})

//Banned Placed items in Space
BlockEvents.placed(event => {

  if (event.block.hasTag("contained:banned_in_space") && (event.level.dimension == "contained:space" || event.level.dimension == "contained:cindrath")) {
    event.player.sendSystemMessage(Text.translate("contained.space_warning"));
    event.cancel();
  }

});

//Starting Space Suit 
PlayerEvents.loggedIn(event => {
  if (event.player.isCreative()) return;

  if (event.player.getTags().contains('suit_given')) return;

  event.player.setItemSlot('head', 'contained:space_suit_helmet[casting:equipment_experience=0,casting:equipment_level=3,casting:soulbound=true]');
  event.player.setItemSlot('chest', 'contained:space_suit_chestplate[casting:equipment_experience=0,casting:equipment_level=3,casting:soulbound=true]');
  event.player.setItemSlot('legs', 'contained:space_suit_leggings[casting:equipment_experience=0,casting:equipment_level=3,casting:soulbound=true]');
  event.player.setItemSlot('feet', 'contained:space_suit_boots[casting:equipment_experience=0,casting:equipment_level=3,casting:soulbound=true]');

  event.player.addTag('suit_given');

})

// Space Damage - tidy this up later
PlayerEvents.tick(event => {

  if (event.server.getTickCount() % 20 != 0) return;

  if (event.player.isCreative()) return;

  if (event.level.dimension == "contained:space") {
    if (event.player.getFeetArmorItem().hasTag('contained:space_suit_boots') && event.player.getLegsArmorItem().hasTag('contained:space_suit_leggings') && event.player.getChestArmorItem().hasTag('contained:space_suit_chestplates') && event.player.getHeadArmorItem().hasTag('contained:space_suit_helmets')) {
      return;
    }
    else {
      event.player.attack(1);
    }
  }

  if (event.level.dimension == "contained:cindrath") {
    if (event.player.getFeetArmorItem().hasTag('contained:cindrath_suit_boots') && event.player.getLegsArmorItem().hasTag('contained:cindrath_suit_leggings') && event.player.getChestArmorItem().hasTag('contained:cindrath_suit_chestplates') && event.player.getHeadArmorItem().hasTag('contained:cindrath_suit_helmets')) {
      return;
    }
    else {
      event.player.attack(3);
    }
  }

  if (event.level.dimension == "contained:crystalore") {
    if (event.player.getFeetArmorItem().hasTag('contained:crystalore_suit_boots') && event.player.getLegsArmorItem().hasTag('contained:crystalore_suit_leggings') && event.player.getChestArmorItem().hasTag('contained:crystalore_suit_chestplates') && event.player.getHeadArmorItem().hasTag('contained:crystalore_suit_helmets')) {
      return;
    }
    else {
      event.player.attack(5);
    }
  }

  if (event.level.dimension == "contained:fractoria") {
    if (event.player.getFeetArmorItem().hasTag('contained:fractoria_suit_boots') && event.player.getLegsArmorItem().hasTag('contained:fractoria_suit_leggings') && event.player.getChestArmorItem().hasTag('contained:fractoria_suit_chestplates') && event.player.getHeadArmorItem().hasTag('contained:fractoria_suit_helmets')) {
      return;
    }
    else {
      event.player.attack(7);
    }
  }

  if (event.level.dimension == "minecraft:the_end") {
    if (event.player.getFeetArmorItem().hasTag('contained:end_suit_boots') && event.player.getLegsArmorItem().hasTag('contained:end_suit_leggings') && event.player.getChestArmorItem().hasTag('contained:end_suit_chestplates') && event.player.getHeadArmorItem().hasTag('contained:end_suit_helmets')) {
      return;
    }
    else {
      event.player.attack(7);
    }
  }
})

//Gravity Event
const dimensionGravitySettings = {
  "contained:space": {
    gravity: 0.025,
    safeFallDistance: 200.0
  },
  "contained:cindrath": {
    gravity: 0.015,
    safeFallDistance: 200.0
  },
  "contained:crystalore": {
    gravity: 0.010,
    safeFallDistance: 200.0
  },
  "contained:fractoria": {
    gravity: 0.12,
    safeFallDistance: 200.0
  },
  "minecraft:the_end": {
    gravity: 0.03,
    safeFallDistance: 200.0
  },
  "minecraft:overworld": {
    gravity: 0.08,
    safeFallDistance: 3.0
  },
  "minecraft:the_nether": {
    gravity: 0.08,
    safeFallDistance: 3.0
  }
}

//Entity Attributes 
EntityEvents.spawned(event => {

  //Cancel if not a living entity
  if (!event.entity.isLiving()) return

  const dimension = event.level.dimension
  let settings = dimensionGravitySettings[dimension]
  if (!settings) {
    settings = dimensionGravitySettings["minecraft:overworld"]
  }

  const uuid = event.entity.getUuid()
  const server = event.server


  //Apply Gravity and Safe Fall Distance
  server.scheduleInTicks(20, () => {
    server.runCommandSilent(`attribute ${uuid} minecraft:generic.gravity base set ${settings.gravity}`)
    server.runCommandSilent(`attribute ${uuid} minecraft:generic.safe_fall_distance base set ${settings.safeFallDistance}`)

  })

  if (event.entity.getType() == "minecraft:ghast") {
    server.scheduleInTicks(20, () => {
      server.runCommandSilent(`attribute ${uuid} minecraft:generic.follow_range base set 40`)
    })
  }

  if (event.entity.getType() == "minecraft:magma_cube") {
    server.scheduleInTicks(20, () => {
      server.runCommandSilent(`attribute ${uuid} minecraft:generic.gravity base set 0.08`)
    })
  }
})

//This is to place and change the data of the Chaos Crystal, room creation handled
//by roomopolis crystal handled here 
BlockEvents.rightClicked(event => {

  const item = event.getItem()
  const server = event.server
  const block = event.getBlock()
  const direction = event.facing
  let x = event.getBlock().x
  let y = event.getBlock().y + 1
  let z = event.getBlock().z

  if (event.getItem() == 'contained:chaos_crystal' && block.id == "contained:awakened_draconium_lock") {

    if (direction == "north") {
      z = z + 3
    }
    if (direction == "south") {
      z = z - 3
    }
    if (direction == "west") {
      x = x + 3
    }
    if (direction == "east") {
      x = x - 3
    }
    server.runCommandSilent(`execute in contained:space run setblock ${x} ${y} ${z} draconicevolution:chaos_crystal`)
    server.scheduleInTicks(5, () => {
      server.runCommandSilent(`execute in contained:space run data modify block ${x} ${y} ${z} bc_managed_data.guardian_defeated set value 1b`)
    })
  }
})
