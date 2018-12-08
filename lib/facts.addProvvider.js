const shared = require('./facts.shared.js');

module.exports = function addProvider(moduleName) {
    
    // add provider if not exist
    if(shared.providers.indexOf(moduleName) == -1) {
      shared.providers.push(moduleName);
    }
  };