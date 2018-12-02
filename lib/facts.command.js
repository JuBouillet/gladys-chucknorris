// var reboot = require('./reboot.js');

module.exports = function() {
    var facts = require('./facts.js');

    switch (scope.label) {
        case 'cnfacts.say':
            facts();
            break;

        default:

            break;
    }
};