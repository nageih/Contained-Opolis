ItemEvents.modifyTooltips(event => {

    event.add('pipez:improved_upgrade', Text.translate('tooltip.pipez.improved_upgrade').red())

    event.modify('oritech:fluxite', tooltip => {
        tooltip.removeLine(1);
    });
})