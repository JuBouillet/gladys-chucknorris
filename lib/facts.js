
//var config = require('./config.js')
var Promise = require('bluebird');
var request = require('request');

module.exports = function facts(params) {
	return new Promise((resolve, reject) => {
		var url = `https://www.chucknorrisfacts.fr/api/get?data=type:txt;tri:alea;nb:1`;

		request({ url: url }, (err, res, body) => {
			if (err) {
				return reject(err);
			}

			if (res.statusCode !== 200) {
				return reject(new Error(`Status code failed : ${res.statusCode}`));
			}
			console.log(body[0].facts);

			return body[0].facts;
		});

	}).catch(function(error){
		console.log(error);
		throw error;
	});
	return Promise.resolve(true);
}

