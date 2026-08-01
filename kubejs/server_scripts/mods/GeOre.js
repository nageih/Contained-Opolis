ServerEvents.recipes(event => {

    // Remove
    event.remove({ id: /geore:.*(smelting|blasting).*/ });

    let allowedMaterials = ['quartz', 'emerald', 'diamond', 'uraninite', 'platinum'];

    let itemId, isAllowed, recipeItemName;

    Ingredient.of('@geore').itemIds.forEach(id => {
        itemId = String(id);
        isAllowed = allowedMaterials.some(material => itemId.includes(material)) && !itemId.includes('black_quartz');

        if (!isAllowed) {
            event.remove({ input: itemId, mod: 'geore' });
            event.remove({ output: itemId, mod: 'geore' });

            recipeItemName = itemId.split(':')[1].replaceAll('_', '');
            event.remove({ id: `oritech:assembler/compat/geore/${recipeItemName}` });
        }
    });

})