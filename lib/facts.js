var he = require('he');

module.exports = function facts(params) {
	return gladys.utils.request('https://www.chucknorrisfacts.fr/api/get?data=type:txt;tri:alea;nb:1')
		.then((result) => {
			return he.decode(result[0].fact);
		})
		.then((message) => {
			var response = {
				label: 'chuck-norris-fact',
				scope: {
					'%CNFACT_ANSWER%': message
				}
			};
			return response;

		}).catch(function (err) {
			console.log("ERREUR: " + error);
		});
}