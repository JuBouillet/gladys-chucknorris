// var reboot = require('./reboot.js');

module.exports = function command(scope) {
    var shutdown = require('./facts.js');

    switch (scope.label) {
        case 'facts':
            facts();
            break;

        default:

            break;
    }
};