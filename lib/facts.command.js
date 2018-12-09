
module.exports = function command(scope) {
    var facts = require('./facts.js')
    return facts();
};