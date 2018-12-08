var request = require('request');
// var reboot = require('./reboot.js');
var Promise = require('bluebird');

module.exports = function command() {
    var response = {};
	var message = "";
	gladys.utils.request('https://www.chucknorrisfacts.fr/api/get?data=type:txt;tri:alea;nb:1')
		.then((result) => {
			console.log(result[0].fact);
			message = result[0].fact;

			return gladys.message.send({ id: null }, { text: message, receiver: 1 });
		}).then(function(){
			response.text = message;
			return response;
		});
};