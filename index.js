var facts = require('./lib/facts.js');
var command = require('./lib/facts.command.js');
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');

module.exports = function (sails) {
	return {
		facts: facts,
		// reboot: reboot,
		command: command,
		install: install,
		uninstall: uninstall
	};
};