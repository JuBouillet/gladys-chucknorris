// var reboot = require('./reboot.js');

module.exports = function() {
    var facts = require('./facts.js');

    switch (scope.label) {
        case 'cnfacts.say':
            return facts();
            break;

        default:

            break;
    }
};