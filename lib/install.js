
module.exports = function install(){
    const Promise = require('bluebird');
    var sentences = require('./sentences.js');
    console.log("Test CN")
	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
			return gladys.sentence.create(sentences.sentenceFact);
	});
	
};