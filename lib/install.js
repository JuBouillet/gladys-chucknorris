
module.exports = function install() {
    var sentences = require('./sentences.js');
    console.log("Installation du module Check Norris Facts");
    return gladys.sentence.create(sentences.sentenceFact);

    return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function (lang) {
    }).catch(function (err) {
        // something bad happened ! :/
        console.log(err)

    });
};