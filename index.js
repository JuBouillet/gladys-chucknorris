module.exports = function (sails) {
	var facts = require('./lib/facts.js');
	var command = require('./lib/facts.command.js');
	var install = require('./lib/install.js');
	var uninstall = require('./lib/uninstall.js');
	return {
		facts: facts,
		exec: command,
		setup: install,
		uninstall: uninstall
	};
};