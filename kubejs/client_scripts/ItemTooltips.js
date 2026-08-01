ItemEvents.modifyTooltips(event => {

    event.add('pipez:improved_upgrade', Text.red('This item\'s recipe has been removed, craft the advanced upgrade instead.'))

    event.modify('oritech:fluxite', tooltip => {
        tooltip.removeLine(1);
    });
})