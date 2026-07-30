//Hide Items

RecipeViewerEvents.removeEntriesCompletely('item', event => {

        event.remove("#contained:banned_items")

        const allowedSeeds = [
                'mysticalagriculture:nether_star_seeds',
                'mysticalagriculture:dragon_egg_seeds',
                'mysticalagriculture:experience_seeds',
                'mysticalagriculture:inferium_seeds',
                'mysticalagriculture:fire_seeds',
                'mysticalagriculture:water_seeds',
                'mysticalagriculture:earth_seeds',
                'mysticalagriculture:air_seeds',
                'mysticalagriculture:nature_seeds'
        ]

        Ingredient.of('#mysticalagriculture:seeds').itemIds.forEach(seed => {
                if (!allowedSeeds.includes(seed)) {
                        event.remove(seed)
                }
        })

        const allowedEssences = [
                'mysticalagriculture:nether_star_essence',
                'mysticalagriculture:dragon_egg_essence',
                'mysticalagriculture:inferium_essence',
                'mysticalagriculture:prudentium_essence',
                'mysticalagriculture:tertium_essence',
                'mysticalagriculture:imperium_essence',
                'mysticalagriculture:supremium_essence',
                'mysticalagradditions:insanium_essence',
                'mysticalagriculture:awakened_supremium_essence',
                'mysticalagriculture:fire_essence',
                'mysticalagriculture:water_essence',
                'mysticalagriculture:earth_essence',
                'mysticalagriculture:air_essence',
                'mysticalagriculture:nature_essence',
                'mysticalagriculture:experience_essence',
                'contained:elemental_essence'
        ]

        Ingredient.of('#mysticalagriculture:essences').itemIds.forEach(essence => {
                if (!allowedEssences.includes(essence)) {
                        event.remove(essence)
                }
        })

        const allowedMaterials = ['quartz', 'emerald', 'diamond', 'uraninite', 'platinum'];

        Ingredient.of('@geore').itemIds.forEach(itemId => {
                const isAllowed = allowedMaterials.some(material => itemId.includes(material)) && !itemId.includes('black_quartz');

                if (!isAllowed) {
                        event.remove(itemId);
                }
        });

})