const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function install(){

    console.log("Test CN")
	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
			return gladys.sentence.insertBatch([sentences.sentenceFact]);
	});
	
};