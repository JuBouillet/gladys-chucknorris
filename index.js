var cntest = require('./lib/facts');

module.exports = function (sails) {
	return {
		facts: facts,
		// reboot: reboot,
		command: command,
		install: install,
		uninstall: uninstall
	};
};