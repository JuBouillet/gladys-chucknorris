// var reboot = require('./reboot.js');
var Promise = require('bluebird');
module.exports = function command() {
    var facts = require('./facts.js');
    return facts();    
};