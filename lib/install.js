
module.exports = function install() {
    var sentences = require('./sentences.js');
    return gladys.sentence.create(sentences.sentenceFact)
    .then((test) => {
        console.log("CN Facts: Requête ajoutée");
        return gladys.answer.create(sentences.answerFact);
    }).then((answer) => {
        console.log("CN Facts: Réponse ajoutée");
    }).catch((error) => {
        console.log("CN Facts: " + error);
    });    
};