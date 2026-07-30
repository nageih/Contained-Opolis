// GeOre

ServerEvents.recipes(event => {

    //Remove
    event.remove({ id: /geore:.*(smelting|blasting).*/ });
    event.remove({ type: 'oritech:pulverizer', input: 'geore:quartz_shard' });
    event.remove({ type: 'oritech:grinder', input: 'geore:quartz_shard' });

    const allowedMaterials = ['quartz', 'emerald', 'diamond', 'uraninite', 'platinum'];

    Ingredient.of('@geore').itemIds.forEach(itemId => {
        const isAllowed = allowedMaterials.some(material => itemId.includes(material)) && !itemId.includes('black_quartz');

        if (!isAllowed) {
            event.remove({ input: itemId, mod: 'geore' });
            event.remove({ output: itemId, mod: 'geore' });
        }
    });

})