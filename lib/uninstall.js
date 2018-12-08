

module.exports = function uninstall(){
    const Promise = require('bluebird');
    var sentences = require('./sentences.js');
	//gladys.user.get().then(function(user){
	//	if(user[0].language!='fr-FR')
	//On pourrait réutiliser le user mais ne serait pas cohérent avec l'install

	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
			gladys.utils.sql('DELETE FROM sentence WHERE uuid = ?', [sentences.sentenceFact.uuid]);
	}).then(function(){
		console.log("CNFACTS: Question supprimée");
		gladys.utils.sql('DELETE FROM answers WHERE uuid = ?', [sentences.answerFact.uuid]);
	}).then(function(){
		console.log("CNFACTS: Réponse supprimée");
	}).catch((error) => {
        console.log(error);
    });;
	
};