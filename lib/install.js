
module.exports = function install() {
    var sentences = require('./sentences.js');
    console.log("Installation du module Check Norris Facts");
    return gladys.sentence.create(sentences.sentenceFact).catch(function (err) {
        console.log(err)
    });;
};