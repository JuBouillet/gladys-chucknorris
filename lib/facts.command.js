// var reboot = require('./reboot.js');

module.exports = function() {
    var facts = require('./facts.js');

    switch (scope.label) {
        case 'facts':
            facts();
            break;

        default:

            break;
    }
};