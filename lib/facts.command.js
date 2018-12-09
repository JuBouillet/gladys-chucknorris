var request = require('request');
// var reboot = require('./reboot.js');

module.exports = function command(scope) {
    function htmlDecode(texte) {
        texte = texte.replace(/&egrave;/g, 'è');
        texte = texte.replace(/&eacute;/g, 'é');
        texte = texte.replace(/&ecirc;/g, 'ê');
        texte = texte.replace(/&euml;/g, 'ë');

        texte = texte.replace(/&agrave;/g, 'à');
        texte = texte.replace(/&acirc;/g, 'ä');
        texte = texte.replace(/&auml;/g, 'â');

        texte = texte.replace(/&ograve;/g, 'ò');
        texte = texte.replace(/&ocirc;/g, 'ô');
        texte = texte.replace(/&ouml;/g, 'ö');

        texte = texte.replace(/&igrave;/g, 'ì');
        texte = texte.replace(/&icirc;/g, 'î');
        texte = texte.replace(/&iuml;/g, 'ï');

        texte = texte.replace(/&ugrave;/g, 'ù');
        texte = texte.replace(/&uuml;/g, 'ü');
        texte = texte.replace(/&ucirc;/g, 'û');
        texte = texte.replace(/&ucirc;/g, 'û');
        texte = texte.replace(/&quot;/g, '\'');
        return texte;
    }

    var response = {};
    var message = "";
    return gladys.utils.request('https://www.chucknorrisfacts.fr/api/get?data=type:txt;tri:alea;nb:1')
        .then((result) => {
            message = htmlDecode(result[0].fact);

            return message;
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

            return response;

        }).catch(function (err) {
            console.log("ERREUR: " + error)         // something bad happened ! :/
        });
};