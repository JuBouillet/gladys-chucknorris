// var reboot = require('./reboot.js');

module.exports = function command() {
    var facts = require('./facts.js');
    return facts();    
};