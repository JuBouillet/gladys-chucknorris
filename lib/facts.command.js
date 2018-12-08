var request = require('request');
// var reboot = require('./reboot.js');

module.exports = function command(scope) {
    var response = {};
	var message = "";
	gladys.utils.request('https://www.chucknorrisfacts.fr/api/get?data=type:txt;tri:alea;nb:1')
		.then((result) => {
            message = result[0].fact;

            return message;
            // return gladys.answer
            // gladys.modules.speak.say({language: 'fr', text: message});
			// return gladys.message.send({ id: null }, { text: message, receiver: 1, label: 'cnfacts.say' });
        }).then((message) => {
            gladys.message.send({ id: null }, { text: message, receiver: 1, label: 'cnfacts.say' });
            return message;
        })
        .then((message) => {
            
            var response = {
                label: 'cnfacts.say',
                scope: {
                  '%CNFACT_ANSWER%': message
                }
              };         
            
              console.log(response)
        
              return Promise.resolve(response);

        }).catch(function(err){
            console.log("ERREUR: " + error)         // something bad happened ! :/
        });
};