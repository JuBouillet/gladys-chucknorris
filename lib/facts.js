var Promise = require('bluebird');
var request = require('request');
//var config = require('./config.js')

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
			console.log(body);

			return resolve(body);
		});

	});
	return Promise.resolve(true);
}

