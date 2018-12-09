// Le setup correspond à la méthode install car la méthode install ne semble pas se déclencher à l'installation.
module.exports = function setup() {
    var install = require('./install.js');
    return install();
};