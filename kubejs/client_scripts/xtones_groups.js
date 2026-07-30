const xtonesTypes = [
    "agon", "azur", "bitt", "cray", "fort", "glaxx", "iszm", "jelt", "korp",
    "kryp", "lair", "lave", "mint", "myst", "reds", "reed", "roen", "sols",
    "sync", "tank", "vect", "vena", "zane", "zech", "zest", "zeta", "zion",
    "zkul", "zoea", "zome", "zone", "zorg", "ztyl", "zyth"
];

/*
function formatXtonesName(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
*/

RecipeViewerEvents.groupEntries('item', event => {
    xtonesTypes.forEach(type => {
        event.group(
            { itemNamespace: 'xtonesreworked', itemPathStartsWith: `${type}_block` },

            `contained:xtones_${type}`,

            Text.translate(`group.contained.xtones.${type}`)
        );
    });
});