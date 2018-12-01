var shutdown = require('./facts.js');
// var reboot = require('./reboot.js');

module.exports = function command(scope) {

    switch (scope.label) {
        case 'facts':
            facts();
            break;

        default:

            break;
    }
};