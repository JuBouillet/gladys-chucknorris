
module.exports = function setup() {
    var sentences = require('./sentences.js');
    return gladys.sentence.create(sentences.sentenceFact).catch(function (err) {
        console.log(err)
    }).then((test) => {
        console.log("Requête ajoutée");
        return gladys.answer.create(sentences.answerFact);
    }).then((answer) => {
        console.log("Réponse ajoutée");
    }).catch((error) => {
        console.log(error);
    });
    
};