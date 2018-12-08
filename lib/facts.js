
//var config = require('./config.js')
var Promise = require('bluebird');
var request = require('request');

module.exports = function facts(params) {
	var message = "";
	gladys.utils.request('https://www.chucknorrisfacts.fr/api/get?data=type:txt;tri:alea;nb:1')
		.then((result) => {
			console.log(result[0].fact);
			message = result[0].fact;

			return gladys.message.send({ id: null }, { text: message, receiver: 1 });
		}).then(() => {
			return message;
		});
}

