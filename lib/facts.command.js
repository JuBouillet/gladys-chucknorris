
module.exports = function command(scope) {
    var f = require('./facts.js')
    return f.facts();
};