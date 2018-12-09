module.exports = function uninstall(){
    var sentences = require('./sentences.js');

	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
			gladys.utils.sql('DELETE FROM sentence WHERE label = ?', [sentences.sentenceFact.label]);
	}).then(function(){
		console.log("CNFACTS: Question supprimée");
		gladys.utils.sql('DELETE FROM answer WHERE label = ?', [sentences.answerFact.label]);
	}).then(function(){
		console.log("CNFACTS: Réponse supprimée");
	}).catch((error) => {
        console.log(error);
    });;	
};