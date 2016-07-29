function creatAction(name, help, doAction) {
    return {
        name: name,
        help: help,
        doAction: doAction
    };
}

module.exports = creatAction;