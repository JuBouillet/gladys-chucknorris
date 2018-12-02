// var reboot = require('./reboot.js');

module.exports = function command() {
    console.log("test");
    var facts = require('./facts.js');
    return facts();    
};