var request = require('request');
// var reboot = require('./reboot.js');
var Promise = require('bluebird');

module.exports = function command() {
    var response = {};
	var message = "";
	gladys.utils.request('https://www.chucknorrisfacts.fr/api/get?data=type:txt;tri:alea;nb:1')
		.then((result) => {
            message = result[0].fact;
            // return gladys.answer
            // gladys.modules.speak.say({language: 'fr', text: message});
			return gladys.message.send({ id: 1 }, { text: message, receiver: 1 }).then((message) => {
    			console.log(message);

            }).catch(function(err){
                console.log("ERREUR: " + error)         // something bad happened ! :/
            });
		})
};