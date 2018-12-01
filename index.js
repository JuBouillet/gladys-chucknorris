module.exports = function (sails) {
	var cntest = require('./lib/exec.js');
	return {
		command: cntest,
	};
};