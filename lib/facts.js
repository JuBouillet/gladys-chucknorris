var Promise = require('bluebird');
//var config = require('./config.js')

module.exports = function facts(params) {
	function request() {
		return gladys.utils.request('https://www.chucknorrisfacts.fr/api/get?data=type:txt;tri:alea;nb:1').then((response) => {
			console.log(response.fact);
		// console.log("Requête envoyé à l'API checknorrisfacts.fr")

		}).catch((err) => {
			console.log(err);
		});;
	}
	
	request();
 
	return Promise.resolve(true);
}

